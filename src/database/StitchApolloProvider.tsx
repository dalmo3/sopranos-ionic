import * as React from 'react';
import { useStitchProvider, IStitchProvider } from './StitchProvider';
import { persistCache } from 'apollo-cache-persist';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
  NormalizedCacheObject,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { PersistentStorage } from 'apollo-cache-persist/types';

import { Plugins } from '@capacitor/core';
import { localTypeDefs, resolvers } from './localData/resolvers';

const { Storage } = Plugins;

// capacitor's Storage offer a different interface than the one peristCache wants, so we define translator functions
const capacitorStorageMethods = {
  getItem: async (key: string) => (await Storage.get({ key })).value,
  setItem: (key: string, data: any) =>
    Storage.set({ key, value: data as string }),
  // setItem: (key: string, data: PersistedData<{ value: string | null; }>) => Storage.set({ key, value: data as string }),
  removeItem: (key: string) => Storage.remove({ key }),
};

const cache = new InMemoryCache();
//   {
//   typePolicies:{
//     LocalData:{
//       fields:{
//         user: {
//           read: (_,{variables}) => capacitorStorageMethods.getItem('USER')
//         }
//       }
//     }
//   }
// }
const StitchApolloProvider: React.FC = ({ children }) => {
  const { id, user } = useStitchProvider();
  const [client, setClient] = React.useState<
    ApolloClient<NormalizedCacheObject>
  >(createApolloClient(id, user, cache));

  React.useEffect(() => {
    const initPersistCache = async () => {
      await persistCache({
        cache,
        storage: capacitorStorageMethods,
        debug: true,
      });
    };
    const initApollo = async () => {
      await initPersistCache();
      setClient(createApolloClient(id, user, cache));
    };
    //@ts-ignore Type definitions for StitchUser are missing the ['auth'] property, that contain the accessToken
    if (user.isLoggedIn) {
      initApollo();
    } else {
      initPersistCache();
    }
  }, [id, user]);
  console.log('id user', id, user);

  // React.useEffect(() => {}, [client]);

  return <ApolloProvider client={client}>{children}</ApolloProvider>;
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
  // cache = new InMemoryCache()

  // console.log('new cache', cache);
  const graphql_url = `https://realm.mongodb.com/api/client/v2.0/app/${realmAppId}/graphql`;

  const customFetch = (input: RequestInfo, init?: RequestInit | undefined) => {
    return user.isLoggedIn
      ? fetch(input, init)
      : // : null;
        Promise.reject(new Response());
  };
  const httpLink = createHttpLink({
    // uri: user.isLoggedIn? graphql_url: undefined,
    uri: graphql_url,
    fetch: customFetch,
  });
  // }
  console.log('persisted cache', cache);
  // console.log('StitchUser inside createHTTPLink', user);
  const authorizationHeaderLink = setContext(async (_, { headers }) => {
    // if (!isCachePersisted) {
    // await persistCache({
    //   cache,
    //   storage: capacitorStorageMethods,
    //   debug: true
    // });
    // isCachePersisted = true;
    // if (user.isLoggedIn) {
    //@ts-ignore Type definitions for StitchUser are missing the ['auth'] property, that contain the accessToken
    const token = user?.auth?.activeUserAuthInfo.accessToken;
    console.log('token is', token);
    return {
      headers: {
        ...headers,
        Authorization: `Bearer ${token}`,
      },
    };
    // }
    // return { headers };
  });
  return new ApolloClient({
    link: authorizationHeaderLink.concat(httpLink),
    // link: user.isLoggedIn
    //   ? authorizationHeaderLink.concat(httpLink)
    //   : undefined,
    cache,
    // resolvers,
    // typeDefs: localTypeDefs,
  });
}
