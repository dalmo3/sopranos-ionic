import * as Types from './types/generated';

import { gql } from '@apollo/client';
import * as ApolloReactCommon from '@apollo/client';
import * as ApolloReactHooks from '@apollo/client';

export const GetAllCompetitionsDocument = gql`
  query GetAllCompetitions {
    competitions {
      Grades {
        Id
      }
      Id
      Name
      OrganisationId
      Provider
      SeasonId
      SportId
      SportName
      _id
      firstFixtureDate
      fixtures
      lastResultDate
    }
  }
`;

/**
 * __useGetAllCompetitionsQuery__
 *
 * To run a query within a React component, call `useGetAllCompetitionsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllCompetitionsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllCompetitionsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetAllCompetitionsQuery(
  baseOptions?: ApolloReactHooks.QueryHookOptions<
    Types.GetAllCompetitionsQuery,
    Types.GetAllCompetitionsQueryVariables
  >
) {
  return ApolloReactHooks.useQuery<
    Types.GetAllCompetitionsQuery,
    Types.GetAllCompetitionsQueryVariables
  >(GetAllCompetitionsDocument, baseOptions);
}
export function useGetAllCompetitionsLazyQuery(
  baseOptions?: ApolloReactHooks.LazyQueryHookOptions<
    Types.GetAllCompetitionsQuery,
    Types.GetAllCompetitionsQueryVariables
  >
) {
  return ApolloReactHooks.useLazyQuery<
    Types.GetAllCompetitionsQuery,
    Types.GetAllCompetitionsQueryVariables
  >(GetAllCompetitionsDocument, baseOptions);
}
export type GetAllCompetitionsQueryHookResult = ReturnType<
  typeof useGetAllCompetitionsQuery
>;
export type GetAllCompetitionsLazyQueryHookResult = ReturnType<
  typeof useGetAllCompetitionsLazyQuery
>;
export type GetAllCompetitionsQueryResult = ApolloReactCommon.QueryResult<
  Types.GetAllCompetitionsQuery,
  Types.GetAllCompetitionsQueryVariables
>;
export const GetAllCompetitionsLiteDocument = gql`
  query GetAllCompetitionsLite {
    competitions {
      Id
      Name
      _id
      firstFixtureDate
      fixtures
      lastResultDate
    }
  }
`;

/**
 * __useGetAllCompetitionsLiteQuery__
 *
 * To run a query within a React component, call `useGetAllCompetitionsLiteQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllCompetitionsLiteQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllCompetitionsLiteQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetAllCompetitionsLiteQuery(
  baseOptions?: ApolloReactHooks.QueryHookOptions<
    Types.GetAllCompetitionsLiteQuery,
    Types.GetAllCompetitionsLiteQueryVariables
  >
) {
  return ApolloReactHooks.useQuery<
    Types.GetAllCompetitionsLiteQuery,
    Types.GetAllCompetitionsLiteQueryVariables
  >(GetAllCompetitionsLiteDocument, baseOptions);
}
export function useGetAllCompetitionsLiteLazyQuery(
  baseOptions?: ApolloReactHooks.LazyQueryHookOptions<
    Types.GetAllCompetitionsLiteQuery,
    Types.GetAllCompetitionsLiteQueryVariables
  >
) {
  return ApolloReactHooks.useLazyQuery<
    Types.GetAllCompetitionsLiteQuery,
    Types.GetAllCompetitionsLiteQueryVariables
  >(GetAllCompetitionsLiteDocument, baseOptions);
}
export type GetAllCompetitionsLiteQueryHookResult = ReturnType<
  typeof useGetAllCompetitionsLiteQuery
>;
export type GetAllCompetitionsLiteLazyQueryHookResult = ReturnType<
  typeof useGetAllCompetitionsLiteLazyQuery
>;
export type GetAllCompetitionsLiteQueryResult = ApolloReactCommon.QueryResult<
  Types.GetAllCompetitionsLiteQuery,
  Types.GetAllCompetitionsLiteQueryVariables
>;
export const GetCompetitionByIdDocument = gql`
  query GetCompetitionById($Id: String!) {
    competition(query: { Id: $Id }) {
      Grades {
        Id
      }
      Id
      Name
      OrganisationId
      Provider
      SeasonId
      SportId
      SportName
      _id
      firstFixtureDate
      fixtures
      lastResultDate
      standings {
        TeamId
        TeamName
        Played
        Wins
        Draws
        Byes
        Losses
        DefaultLosses
        ForPoints
        AgainstPoints
        Differential
        Total
        OrgLogo
      }
    }
  }
`;

/**
 * __useGetCompetitionByIdQuery__
 *
 * To run a query within a React component, call `useGetCompetitionByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetCompetitionByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetCompetitionByIdQuery({
 *   variables: {
 *      Id: // value for 'Id'
 *   },
 * });
 */
export function useGetCompetitionByIdQuery(
  baseOptions?: ApolloReactHooks.QueryHookOptions<
    Types.GetCompetitionByIdQuery,
    Types.GetCompetitionByIdQueryVariables
  >
) {
  return ApolloReactHooks.useQuery<
    Types.GetCompetitionByIdQuery,
    Types.GetCompetitionByIdQueryVariables
  >(GetCompetitionByIdDocument, baseOptions);
}
export function useGetCompetitionByIdLazyQuery(
  baseOptions?: ApolloReactHooks.LazyQueryHookOptions<
    Types.GetCompetitionByIdQuery,
    Types.GetCompetitionByIdQueryVariables
  >
) {
  return ApolloReactHooks.useLazyQuery<
    Types.GetCompetitionByIdQuery,
    Types.GetCompetitionByIdQueryVariables
  >(GetCompetitionByIdDocument, baseOptions);
}
export type GetCompetitionByIdQueryHookResult = ReturnType<
  typeof useGetCompetitionByIdQuery
>;
export type GetCompetitionByIdLazyQueryHookResult = ReturnType<
  typeof useGetCompetitionByIdLazyQuery
>;
export type GetCompetitionByIdQueryResult = ApolloReactCommon.QueryResult<
  Types.GetCompetitionByIdQuery,
  Types.GetCompetitionByIdQueryVariables
>;
export const GetCompetitionsDocument = gql`
  query GetCompetitions($q: CompetitionQueryInput) {
    competitions(query: $q) {
      Id
      Name
      _id
      standings {
        TeamId
        TeamName
        Played
        Wins
        Draws
        Byes
        Losses
        DefaultLosses
        ForPoints
        AgainstPoints
        Differential
        Total
        OrgLogo
      }
    }
  }
`;

/**
 * __useGetCompetitionsQuery__
 *
 * To run a query within a React component, call `useGetCompetitionsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetCompetitionsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetCompetitionsQuery({
 *   variables: {
 *      q: // value for 'q'
 *   },
 * });
 */
export function useGetCompetitionsQuery(
  baseOptions?: ApolloReactHooks.QueryHookOptions<
    Types.GetCompetitionsQuery,
    Types.GetCompetitionsQueryVariables
  >
) {
  return ApolloReactHooks.useQuery<
    Types.GetCompetitionsQuery,
    Types.GetCompetitionsQueryVariables
  >(GetCompetitionsDocument, baseOptions);
}
export function useGetCompetitionsLazyQuery(
  baseOptions?: ApolloReactHooks.LazyQueryHookOptions<
    Types.GetCompetitionsQuery,
    Types.GetCompetitionsQueryVariables
  >
) {
  return ApolloReactHooks.useLazyQuery<
    Types.GetCompetitionsQuery,
    Types.GetCompetitionsQueryVariables
  >(GetCompetitionsDocument, baseOptions);
}
export type GetCompetitionsQueryHookResult = ReturnType<
  typeof useGetCompetitionsQuery
>;
export type GetCompetitionsLazyQueryHookResult = ReturnType<
  typeof useGetCompetitionsLazyQuery
>;
export type GetCompetitionsQueryResult = ApolloReactCommon.QueryResult<
  Types.GetCompetitionsQuery,
  Types.GetCompetitionsQueryVariables
>;
export const GetFixturesDocument = gql`
  query GetFixtures($q: FixtureQueryInput) {
    fixtures(query: $q) {
      Address
      AwayOrganisationId
      AwayOrganisationLogo
      AwayOrganisationName
      AwayScore
      AwayTeamId
      AwayTeamName
      Date
      From
      GradeId
      GradeName
      GradeSortOrder
      HomeOrganisationId
      HomeOrganisationLogo
      HomeOrganisationName
      HomeScore
      HomeTeamId
      HomeTeamName
      Id
      InGame
      IsSuperForm
      Latitude
      LocationLat
      LocationLng
      Longitude
      MatchSummary
      Provider
      PublishResults
      PublishTeamsheetOnWidget
      PublishVenue
      ResultStatus
      Round
      RoundName
      SectionId
      SectionSortOrder
      SportId
      SportName
      Status
      To
      VenueName
      VenueNameAbbr
      _id
      competitionId
      matchDay
    }
  }
`;

/**
 * __useGetFixturesQuery__
 *
 * To run a query within a React component, call `useGetFixturesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetFixturesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetFixturesQuery({
 *   variables: {
 *      q: // value for 'q'
 *   },
 * });
 */
export function useGetFixturesQuery(
  baseOptions?: ApolloReactHooks.QueryHookOptions<
    Types.GetFixturesQuery,
    Types.GetFixturesQueryVariables
  >
) {
  return ApolloReactHooks.useQuery<
    Types.GetFixturesQuery,
    Types.GetFixturesQueryVariables
  >(GetFixturesDocument, baseOptions);
}
export function useGetFixturesLazyQuery(
  baseOptions?: ApolloReactHooks.LazyQueryHookOptions<
    Types.GetFixturesQuery,
    Types.GetFixturesQueryVariables
  >
) {
  return ApolloReactHooks.useLazyQuery<
    Types.GetFixturesQuery,
    Types.GetFixturesQueryVariables
  >(GetFixturesDocument, baseOptions);
}
export type GetFixturesQueryHookResult = ReturnType<typeof useGetFixturesQuery>;
export type GetFixturesLazyQueryHookResult = ReturnType<
  typeof useGetFixturesLazyQuery
>;
export type GetFixturesQueryResult = ApolloReactCommon.QueryResult<
  Types.GetFixturesQuery,
  Types.GetFixturesQueryVariables
>;
export const GetFixturesLiteDocument = gql`
  query GetFixturesLite($q: FixtureQueryInput) {
    fixtures(query: $q) {
      Address
      AwayOrganisationId
      AwayOrganisationLogo
      AwayScore
      AwayTeamId
      AwayTeamName
      Date
      HomeOrganisationId
      HomeOrganisationLogo
      HomeScore
      HomeTeamId
      HomeTeamName
      Id
      ResultStatus
      Round
      RoundName
      Status
      VenueName
      _id
      competitionId
      matchDay
    }
  }
`;

/**
 * __useGetFixturesLiteQuery__
 *
 * To run a query within a React component, call `useGetFixturesLiteQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetFixturesLiteQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetFixturesLiteQuery({
 *   variables: {
 *      q: // value for 'q'
 *   },
 * });
 */
export function useGetFixturesLiteQuery(
  baseOptions?: ApolloReactHooks.QueryHookOptions<
    Types.GetFixturesLiteQuery,
    Types.GetFixturesLiteQueryVariables
  >
) {
  return ApolloReactHooks.useQuery<
    Types.GetFixturesLiteQuery,
    Types.GetFixturesLiteQueryVariables
  >(GetFixturesLiteDocument, baseOptions);
}
export function useGetFixturesLiteLazyQuery(
  baseOptions?: ApolloReactHooks.LazyQueryHookOptions<
    Types.GetFixturesLiteQuery,
    Types.GetFixturesLiteQueryVariables
  >
) {
  return ApolloReactHooks.useLazyQuery<
    Types.GetFixturesLiteQuery,
    Types.GetFixturesLiteQueryVariables
  >(GetFixturesLiteDocument, baseOptions);
}
export type GetFixturesLiteQueryHookResult = ReturnType<
  typeof useGetFixturesLiteQuery
>;
export type GetFixturesLiteLazyQueryHookResult = ReturnType<
  typeof useGetFixturesLiteLazyQuery
>;
export type GetFixturesLiteQueryResult = ApolloReactCommon.QueryResult<
  Types.GetFixturesLiteQuery,
  Types.GetFixturesLiteQueryVariables
>;
export const GetAllTeamsLiteDocument = gql`
  query GetAllTeamsLite {
    teams(sortBy: NAME_ASC, limit: 0) {
      Id
      name
      competitions {
        Name
      }
    }
  }
`;

/**
 * __useGetAllTeamsLiteQuery__
 *
 * To run a query within a React component, call `useGetAllTeamsLiteQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllTeamsLiteQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllTeamsLiteQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetAllTeamsLiteQuery(
  baseOptions?: ApolloReactHooks.QueryHookOptions<
    Types.GetAllTeamsLiteQuery,
    Types.GetAllTeamsLiteQueryVariables
  >
) {
  return ApolloReactHooks.useQuery<
    Types.GetAllTeamsLiteQuery,
    Types.GetAllTeamsLiteQueryVariables
  >(GetAllTeamsLiteDocument, baseOptions);
}
export function useGetAllTeamsLiteLazyQuery(
  baseOptions?: ApolloReactHooks.LazyQueryHookOptions<
    Types.GetAllTeamsLiteQuery,
    Types.GetAllTeamsLiteQueryVariables
  >
) {
  return ApolloReactHooks.useLazyQuery<
    Types.GetAllTeamsLiteQuery,
    Types.GetAllTeamsLiteQueryVariables
  >(GetAllTeamsLiteDocument, baseOptions);
}
export type GetAllTeamsLiteQueryHookResult = ReturnType<
  typeof useGetAllTeamsLiteQuery
>;
export type GetAllTeamsLiteLazyQueryHookResult = ReturnType<
  typeof useGetAllTeamsLiteLazyQuery
>;
export type GetAllTeamsLiteQueryResult = ApolloReactCommon.QueryResult<
  Types.GetAllTeamsLiteQuery,
  Types.GetAllTeamsLiteQueryVariables
>;
export const GetTeamByIdDocument = gql`
  query GetTeamById($Id: String!) {
    team(query: { Id: $Id }) {
      Id
      name
      organisationInfo {
        Name
      }
      competitions {
        standings {
          TeamId
          TeamName
          Played
          Wins
          Draws
          Byes
          Losses
          DefaultLosses
          ForPoints
          AgainstPoints
          Differential
          Total
          OrgLogo
        }
      }
    }
  }
`;

/**
 * __useGetTeamByIdQuery__
 *
 * To run a query within a React component, call `useGetTeamByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetTeamByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetTeamByIdQuery({
 *   variables: {
 *      Id: // value for 'Id'
 *   },
 * });
 */
export function useGetTeamByIdQuery(
  baseOptions?: ApolloReactHooks.QueryHookOptions<
    Types.GetTeamByIdQuery,
    Types.GetTeamByIdQueryVariables
  >
) {
  return ApolloReactHooks.useQuery<
    Types.GetTeamByIdQuery,
    Types.GetTeamByIdQueryVariables
  >(GetTeamByIdDocument, baseOptions);
}
export function useGetTeamByIdLazyQuery(
  baseOptions?: ApolloReactHooks.LazyQueryHookOptions<
    Types.GetTeamByIdQuery,
    Types.GetTeamByIdQueryVariables
  >
) {
  return ApolloReactHooks.useLazyQuery<
    Types.GetTeamByIdQuery,
    Types.GetTeamByIdQueryVariables
  >(GetTeamByIdDocument, baseOptions);
}
export type GetTeamByIdQueryHookResult = ReturnType<typeof useGetTeamByIdQuery>;
export type GetTeamByIdLazyQueryHookResult = ReturnType<
  typeof useGetTeamByIdLazyQuery
>;
export type GetTeamByIdQueryResult = ApolloReactCommon.QueryResult<
  Types.GetTeamByIdQuery,
  Types.GetTeamByIdQueryVariables
>;
