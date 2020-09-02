import * as Apollo from '@apollo/client';
import * as Types from './types/generated';

export const GetAllCompetitionsDocument = Apollo.gql`
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
export function useGetAllCompetitionsQuery(
  baseOptions?: Apollo.QueryHookOptions<
    Types.GetAllCompetitionsQuery,
    Types.GetAllCompetitionsQueryVariables
  >
) {
  return Apollo.useQuery<
    Types.GetAllCompetitionsQuery,
    Types.GetAllCompetitionsQueryVariables
  >(GetAllCompetitionsDocument, baseOptions);
}
export function useGetAllCompetitionsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    Types.GetAllCompetitionsQuery,
    Types.GetAllCompetitionsQueryVariables
  >
) {
  return Apollo.useLazyQuery<
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
export type GetAllCompetitionsQueryResult = Apollo.QueryResult<
  Types.GetAllCompetitionsQuery,
  Types.GetAllCompetitionsQueryVariables
>;

export const GetCompetitionByIdDocument = Apollo.gql`
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
export function useGetCompetitionByIdQuery(
  baseOptions?: Apollo.QueryHookOptions<
    Types.GetCompetitionByIdQuery,
    Types.GetCompetitionByIdQueryVariables
  >
) {
  return Apollo.useQuery<
    Types.GetCompetitionByIdQuery,
    Types.GetCompetitionByIdQueryVariables
  >(GetCompetitionByIdDocument, baseOptions);
}
export function useGetCompetitionByIdLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    Types.GetCompetitionByIdQuery,
    Types.GetCompetitionByIdQueryVariables
  >
) {
  return Apollo.useLazyQuery<
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
export type GetCompetitionByIdQueryResult = Apollo.QueryResult<
  Types.GetCompetitionByIdQuery,
  Types.GetCompetitionByIdQueryVariables
>;

export const GetFixturesByIdsDocument = Apollo.gql`
    query GetFixturesByIds($Ids: [String]) {
  fixtures(query: {Id_in: $Ids}) {
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
 * __useGetFixturesByIdsQuery__
 *
 * To run a query within a React component, call `useGetFixturesByIdsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetFixturesByIdsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetFixturesByIdsQuery({
 *   variables: {
 *      Ids: // value for 'Ids'
 *   },
 * });
 */
export function useGetFixturesByIdsQuery(
  baseOptions?: Apollo.QueryHookOptions<
    Types.GetFixturesByIdsQuery,
    Types.GetFixturesByIdsQueryVariables
  >
) {
  return Apollo.useQuery<
    Types.GetFixturesByIdsQuery,
    Types.GetFixturesByIdsQueryVariables
  >(GetFixturesByIdsDocument, baseOptions);
}
export function useGetFixturesByIdsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    Types.GetFixturesByIdsQuery,
    Types.GetFixturesByIdsQueryVariables
  >
) {
  return Apollo.useLazyQuery<
    Types.GetFixturesByIdsQuery,
    Types.GetFixturesByIdsQueryVariables
  >(GetFixturesByIdsDocument, baseOptions);
}
export type GetFixturesByIdsQueryHookResult = ReturnType<
  typeof useGetFixturesByIdsQuery
>;
export type GetFixturesByIdsLazyQueryHookResult = ReturnType<
  typeof useGetFixturesByIdsLazyQuery
>;
export type GetFixturesByIdsQueryResult = Apollo.QueryResult<
  Types.GetFixturesByIdsQuery,
  Types.GetFixturesByIdsQueryVariables
>;

export const GetFixturesDocument = Apollo.gql`
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
  baseOptions?: Apollo.QueryHookOptions<
    Types.GetFixturesQuery,
    Types.GetFixturesQueryVariables
  >
) {
  return Apollo.useQuery<
    Types.GetFixturesQuery,
    Types.GetFixturesQueryVariables
  >(GetFixturesDocument, baseOptions);
}
export function useGetFixturesLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    Types.GetFixturesQuery,
    Types.GetFixturesQueryVariables
  >
) {
  return Apollo.useLazyQuery<
    Types.GetFixturesQuery,
    Types.GetFixturesQueryVariables
  >(GetFixturesDocument, baseOptions);
}
export type GetFixturesQueryHookResult = ReturnType<typeof useGetFixturesQuery>;
export type GetFixturesLazyQueryHookResult = ReturnType<
  typeof useGetFixturesLazyQuery
>;
export type GetFixturesQueryResult = Apollo.QueryResult<
  Types.GetFixturesQuery,
  Types.GetFixturesQueryVariables
>;
