import React, { useEffect, FC, useState } from 'react';
import {
  ApolloClient,
  HttpLink,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
  DocumentNode,
  NormalizedCacheObject,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { persistCache } from 'apollo-cache-persist';
import { useRealmProvider, IRealmProvider } from './RealmProvider';
import { Plugins } from '@capacitor/core';
import {
  DEFAULT_USER_DATA,
  GetUserData,
  useGetUserDataQuery,
  UserData,
} from './localData';
import { PersistentStorage } from 'apollo-cache-persist/types';

const { Storage } = Plugins;

// capacitor's Storage offer a different interface than the one peristCache wants, so we define translator functions
const capacitorStorage: PersistentStorage<string | null> = {
  getItem: async (key: string) => (await Storage.get({ key })).value,
  setItem: (key: string, data: any) =>
    Storage.set({ key, value: data as string }),
  removeItem: (key: string) => Storage.remove({ key }),
};

const cache = new InMemoryCache();

const RealmApolloProvider: FC = ({ children }) => {
  const { id, user } = useRealmProvider();
  const [client, setClient] = useState(createApolloClient(id, user, cache));
  useEffect(() => {
    const initApollo = async (
      cache: InMemoryCache,
      storage: PersistentStorage<string | null>
    ) => {
      const updatedClient = createApolloClient(id, user, cache);

      const exsitingUserData = await cache.readQuery({
        query: GetUserData,
      }) as UserData;
      if (!exsitingUserData?.User) {
        cache.writeQuery({
          query: GetUserData,
          data: DEFAULT_USER_DATA,
        });
      }
      await persistCache({
        cache,
        storage,
        debug: true,
      });

      updatedClient.onResetStore(async () => {
        return cache.writeQuery({
          query: GetUserData,
          data: DEFAULT_USER_DATA,
        });
      });
      setClient(updatedClient);

      // initLocalUser({ client, query: GetUserData });
    };
    //@ts-ignore Type definitions for StitchUser are missing the ['auth'] property, that contain the accessToken
    if (user?.id) initApollo(cache, capacitorStorage);
    // console.log('realmapolloprovider-useeffect--user', user);
    console.log('realmapolloprovider-useeffect--user', user?.id);
  }, [id, user]);

  // useEffect(() => {
  //   console.log('apollo client', client);
  // }, [client]);

  return <ApolloProvider client={client}>{children}</ApolloProvider>;
};
export default RealmApolloProvider;

function createApolloClient(
  realmAppId: string,
  user: IRealmProvider['user'],
  cache: InMemoryCache
) {
  const graphql_url = `https://realm.mongodb.com/api/client/v2.0/app/${realmAppId}/graphql`;
  const customFetch = (input: RequestInfo, init?: RequestInit | undefined) => {
    return user ? fetch(input, init) : Promise.reject(new Response());
  };
  const httpLink = createHttpLink({
    uri: graphql_url,
    fetch: customFetch,
  });
  const authorizationHeaderLink = setContext(async (_, { headers }) => ({
    headers: {
      ...headers,
      //@ts-ignore Type definitions for RealmUser are missing the ['auth'] property, that contain the accessToken
      Authorization: `Bearer ${user?.accessToken}`,
    },
  }));

  return new ApolloClient({
    //@ts-ignore
    link: authorizationHeaderLink.concat(httpLink),
    // link: httpLink,
    cache,
  });
}
