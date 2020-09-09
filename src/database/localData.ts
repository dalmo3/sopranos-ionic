import { gql } from "@apollo/client";

export const USER_DATA = gql`
  query userData {
    User {
      name @client
      favouriteTeams @client
    }
  }
`;