import * as Types from './types/generated';

import { gql } from '@apollo/client';
import * as ApolloReactCommon from '@apollo/client';
import * as ApolloReactHooks from '@apollo/client';

export const GetAllCompetitionsDocument = gql`
    query GetAllCompetitions {
  competition {
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
export function useGetAllCompetitionsQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<Types.GetAllCompetitionsQuery, Types.GetAllCompetitionsQueryVariables>) {
        return ApolloReactHooks.useQuery<Types.GetAllCompetitionsQuery, Types.GetAllCompetitionsQueryVariables>(GetAllCompetitionsDocument, baseOptions);
      }
export function useGetAllCompetitionsLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<Types.GetAllCompetitionsQuery, Types.GetAllCompetitionsQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<Types.GetAllCompetitionsQuery, Types.GetAllCompetitionsQueryVariables>(GetAllCompetitionsDocument, baseOptions);
        }
export type GetAllCompetitionsQueryHookResult = ReturnType<typeof useGetAllCompetitionsQuery>;
export type GetAllCompetitionsLazyQueryHookResult = ReturnType<typeof useGetAllCompetitionsLazyQuery>;
export type GetAllCompetitionsQueryResult = ApolloReactCommon.QueryResult<Types.GetAllCompetitionsQuery, Types.GetAllCompetitionsQueryVariables>;
export const GetCompetitionByIdDocument = gql`
    query GetCompetitionById($Id: String!) {
  competition(query: {Id: $Id}) {
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
export function useGetCompetitionByIdQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<Types.GetCompetitionByIdQuery, Types.GetCompetitionByIdQueryVariables>) {
        return ApolloReactHooks.useQuery<Types.GetCompetitionByIdQuery, Types.GetCompetitionByIdQueryVariables>(GetCompetitionByIdDocument, baseOptions);
      }
export function useGetCompetitionByIdLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<Types.GetCompetitionByIdQuery, Types.GetCompetitionByIdQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<Types.GetCompetitionByIdQuery, Types.GetCompetitionByIdQueryVariables>(GetCompetitionByIdDocument, baseOptions);
        }
export type GetCompetitionByIdQueryHookResult = ReturnType<typeof useGetCompetitionByIdQuery>;
export type GetCompetitionByIdLazyQueryHookResult = ReturnType<typeof useGetCompetitionByIdLazyQuery>;
export type GetCompetitionByIdQueryResult = ApolloReactCommon.QueryResult<Types.GetCompetitionByIdQuery, Types.GetCompetitionByIdQueryVariables>;
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
export function useGetFixturesQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<Types.GetFixturesQuery, Types.GetFixturesQueryVariables>) {
        return ApolloReactHooks.useQuery<Types.GetFixturesQuery, Types.GetFixturesQueryVariables>(GetFixturesDocument, baseOptions);
      }
export function useGetFixturesLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<Types.GetFixturesQuery, Types.GetFixturesQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<Types.GetFixturesQuery, Types.GetFixturesQueryVariables>(GetFixturesDocument, baseOptions);
        }
export type GetFixturesQueryHookResult = ReturnType<typeof useGetFixturesQuery>;
export type GetFixturesLazyQueryHookResult = ReturnType<typeof useGetFixturesLazyQuery>;
export type GetFixturesQueryResult = ApolloReactCommon.QueryResult<Types.GetFixturesQuery, Types.GetFixturesQueryVariables>;