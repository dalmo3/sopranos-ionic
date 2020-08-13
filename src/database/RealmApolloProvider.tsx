import React, { useEffect, FC, useState } from 'react';
import {
  ApolloClient,
  HttpLink,
  InMemoryCache,
  ApolloProvider,
} from '@apollo/client';
import { setContext } from 'apollo-link-context';
import { persistCache } from 'apollo-cache-persist';
import { useRealmProvider, IRealmProvider } from './RealmProvider';
import { Plugins } from '@capacitor/core';

const { Storage } = Plugins;

// capacitor's Storage offer a different interface than the one peristCache wants, so we define translator functions
const capacitorStorage = {
  getItem: async (key: string) => (await Storage.get({ key })).value,
  setItem: (key: string, data: any) =>
    Storage.set({ key, value: data as string }),
  // setItem: (key: string, data: PersistedData<{ value: string | null; }>) => Storage.set({ key, value: data as string }),
  removeItem: (key: string) => Storage.remove({ key }),
};

const RealmApolloProvider: FC = ({ children }) => {
  const { id, user } = useRealmProvider();
  const cache = new InMemoryCache();
  const [client, setClient] = useState(createApolloClient(id, user, cache));
  useEffect(() => {
    const cache = new InMemoryCache();
    const initApollo = async () => {
      console.log('this runs?1');
      await persistCache({
        cache,
        storage: capacitorStorage,
      });
      setClient(createApolloClient(id, user, cache));
      console.log('this runs?2');
    };
    initApollo();
  }, [id, user]);

  return <ApolloProvider client={client}>{children}</ApolloProvider>;
};
export default RealmApolloProvider;

function createApolloClient(
  realmAppId: string,
  user: IRealmProvider['user'],
  cache: InMemoryCache
) {
  const graphql_url = `https://realm.mongodb.com/api/client/v2.0/app/${realmAppId}/graphql`;
  const httpLink = new HttpLink({ uri: graphql_url });
  console.log(user)
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
