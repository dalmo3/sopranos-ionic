import * as Apollo from '@apollo/client';
import { gql } from '@apollo/client';

export const DEFAULT_USER_DATA: UserData = {
  User: {
    name: 'anonymous',
    favouriteTeams: [],
  },
};

export type UserData = {
  __typename?: 'UserData';
  User: {
    name: string;
    favouriteTeams: string[];
  };
};

export const GetUserData = gql`
  query userData {
    User {
      name @client
      favouriteTeams @client
    }
  }
`;

export type GetUserDataQueryResult = Apollo.QueryResult<UserData>;

export function useGetUserDataQuery(
  baseOptions?: Apollo.QueryHookOptions<UserData>
) {
  return Apollo.useQuery<UserData>(GetUserData, baseOptions);
}
