import {
  ApolloClient,
  ApolloProvider,
  createHttpLink,
  InMemoryCache,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { Plugins } from '@capacitor/core';
import { persistCache } from 'apollo-cache-persist';
import { PersistentStorage } from 'apollo-cache-persist/types';
import React, { FC, useEffect, useState } from 'react';
import { DEFAULT_USER_DATA, GetUserData, UserData } from './localData';
import { IRealmContext, useRealmContext } from './RealmProvider';

// capacitor storage
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
  const RealmContext = useRealmContext();
  const [client, setClient] = useState(createApolloClient(RealmContext, cache));

  // when Realm is ready, init apollo with proper settings
  useEffect(() => {
    const initApollo = async (
      cache: InMemoryCache,
      storage: PersistentStorage<string | null>
    ) => {
      const updatedClient = createApolloClient(RealmContext, cache);

      // check if local data exists, initialises it otherwise
      const exsitingUserData = (await cache.readQuery({
        query: GetUserData,
      })) as UserData;
      if (!exsitingUserData?.User) {
        cache.writeQuery({
          query: GetUserData,
          data: DEFAULT_USER_DATA,
        });
      }
      // Also initialise local data when resettinsg the store
      updatedClient.onResetStore(async () => {
        return cache.writeQuery({
          query: GetUserData,
          data: DEFAULT_USER_DATA,
        });
      });

      // persists cache to local storage
      await persistCache({
        cache,
        storage,
      });

      setClient(updatedClient);
    };

    if (RealmContext.isReady) initApollo(cache, capacitorStorage);
    // console.log('realmapolloprovider-useeffect--user', user);
    // console.log('realmapolloprovider-useeffect--user', RealmContext.user?.id);
  }, [RealmContext]);

  return <ApolloProvider client={client}>{children}</ApolloProvider>;
};
export default RealmApolloProvider;

/**
 * Creates the Apollo Client
 *
 * @param realmProvider
 * @param cache
 */
const createApolloClient = (
  realmProvider: IRealmContext,
  cache: InMemoryCache
) => {
  // Initially Realm won't be ready, so we define a customFetch to reject all requests. That prevents making illegal requests to the server.
  const customFetch = (input: RequestInfo, init?: RequestInit | undefined) => {
    return realmProvider.isReady
      ? fetch(input, init)
      : Promise.reject(new Response());
  };

  const httpLink = createHttpLink({
    uri: `https://realm.mongodb.com/api/client/v2.0/app/${realmProvider.appId}/graphql`,
    fetch: customFetch,
  });

  const authorizationHeaderLink = setContext(async (_, { headers }) => ({
    headers: {
      ...headers,
      Authorization: `Bearer ${realmProvider.user?.accessToken}`,
    },
  }));

  return new ApolloClient({
    link: authorizationHeaderLink.concat(httpLink),
    cache,
  });
};
