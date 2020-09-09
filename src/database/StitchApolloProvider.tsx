import * as React from 'react';
import { useStitchProvider, IStitchProvider } from './StitchProvider';
import { persistCache } from 'apollo-cache-persist';
import {
  ApolloClient,
  HttpLink,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
  NormalizedCacheObject,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { PersistentStorage } from 'apollo-cache-persist/types';

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

const StitchApolloProvider: React.FC = ({ children }) => {
  const { id, user } = useStitchProvider();
  const cache = new InMemoryCache();
  const [client, setClient] = React.useState<
    ApolloClient<NormalizedCacheObject>
  >(createApolloClient(id,user,cache));

  React.useEffect(() => {
    const initApollo = async () => {
      // console.log('this runs?1');
      await persistCache({
        cache,
        storage: capacitorStorage,
      });
      setClient(createApolloClient(id, user, cache));
      // console.log('this runs?2');
    };
    //@ts-ignore Type definitions for StitchUser are missing the ['auth'] property, that contain the accessToken
    if (user?.auth) initApollo();
  }, [id, user]);

  return  <ApolloProvider client={client}>{children}</ApolloProvider>
  // client ? (
  // ) : (
    // <>{children}</>
  // );
};
export default StitchApolloProvider;

// TODO: Implement createApolloClient()
function createApolloClient(
  realmAppId: string,
  user: IStitchProvider['user'],
  cache: InMemoryCache
) {
  const graphql_url = `https://realm.mongodb.com/api/client/v2.0/app/${realmAppId}/graphql`;
  const customFetch = (input: RequestInfo, init?: RequestInit | undefined) => {
    return user.isLoggedIn
      ? fetch(input, init)
      : Promise.reject(new Response());
  };
  const httpLink = createHttpLink({
    // uri: user.isLoggedIn? graphql_url: undefined,
    uri: graphql_url,
    fetch: customFetch,
  });
  const authorizationHeaderLink = setContext(async (_, { headers }) => ({
    headers: {
      ...headers,
      //@ts-ignore Type definitions for StitchUser are missing the ['auth'] property, that contain the accessToken
      Authorization: `Bearer ${user?.auth?.activeUserAuthInfo.accessToken}`,
    },
  }));

  return new ApolloClient({
    link: authorizationHeaderLink.concat(httpLink),
    // link: httpLink,
    cache,
  });
}
