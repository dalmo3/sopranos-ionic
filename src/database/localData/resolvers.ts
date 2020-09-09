import { gql, InMemoryCache, Resolvers } from '@apollo/client';
import { persistCache } from 'apollo-cache-persist';
import { IUser } from '../../controller/User';
import { GET_LOCAL_DATA } from './useLocalData';

export const localTypeDefs = gql`
  type Query {
    name: String!
    favouriteTeams: [String]!
  }

  type Mutation {
    setName(name: String!): String!
    setFavouriteTeams(favouriteTeams: [String]!): [String]!
  }
`;
type ResolverFn = (
  parent: any,
  args: any,
  { cache }: { cache: InMemoryCache }
) => any;

interface ResolverMap {
  [field: string]: ResolverFn;
}

interface LocalResolvers extends Resolvers {
  User: ResolverMap;
}

export const resolvers: LocalResolvers = {
  User: {
    user: (_, __, { cache }): IUser => {
      const queryResult = cache.readQuery<IUser>({
        query: GET_LOCAL_DATA,
      });
      return (
        queryResult || {
          name: '',
          favouriteTeams: [],
        }
      );
    },
  },
};
