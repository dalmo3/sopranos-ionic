
// GRAPHQL

export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  ObjectId: any;
};

export type Competition = {
  __typename?: 'Competition';
  Grades?: Maybe<Array<Maybe<CompetitionGrade>>>;
  Id?: Maybe<Scalars['String']>;
  Name?: Maybe<Scalars['String']>;
  OrganisationId?: Maybe<Scalars['String']>;
  Provider?: Maybe<Scalars['Int']>;
  SeasonId?: Maybe<Scalars['String']>;
  SportId?: Maybe<Scalars['String']>;
  SportName?: Maybe<Scalars['String']>;
  _id?: Maybe<Scalars['ObjectId']>;
  firstFixtureDate?: Maybe<Scalars['String']>;
  fixtures?: Maybe<Array<Maybe<Scalars['String']>>>;
  lastResultDate?: Maybe<Scalars['String']>;
};

export type CompetitionGrade = {
  __typename?: 'CompetitionGrade';
  Id?: Maybe<Scalars['String']>;
  IsPlayoff?: Maybe<Scalars['Boolean']>;
  NrdProvincialUnionId?: Maybe<Scalars['Int']>;
  Order?: Maybe<Scalars['Int']>;
  Provider?: Maybe<Scalars['Int']>;
};

export type CompetitionGradeInsertInput = {
  Id?: Maybe<Scalars['String']>;
  IsPlayoff?: Maybe<Scalars['Boolean']>;
  NrdProvincialUnionId?: Maybe<Scalars['Int']>;
  Order?: Maybe<Scalars['Int']>;
  Provider?: Maybe<Scalars['Int']>;
};

export type CompetitionGradeQueryInput = {
  NrdProvincialUnionId_nin?: Maybe<Array<Maybe<Scalars['Int']>>>;
  IsPlayoff?: Maybe<Scalars['Boolean']>;
  Order_gte?: Maybe<Scalars['Int']>;
  Provider_gte?: Maybe<Scalars['Int']>;
  OR?: Maybe<Array<CompetitionGradeQueryInput>>;
  NrdProvincialUnionId_ne?: Maybe<Scalars['Int']>;
  Provider_lte?: Maybe<Scalars['Int']>;
  Id?: Maybe<Scalars['String']>;
  Id_nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  Provider?: Maybe<Scalars['Int']>;
  Order_exists?: Maybe<Scalars['Boolean']>;
  Id_gte?: Maybe<Scalars['String']>;
  NrdProvincialUnionId_lte?: Maybe<Scalars['Int']>;
  Id_ne?: Maybe<Scalars['String']>;
  Id_lte?: Maybe<Scalars['String']>;
  Order_lt?: Maybe<Scalars['Int']>;
  NrdProvincialUnionId_in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  NrdProvincialUnionId?: Maybe<Scalars['Int']>;
  NrdProvincialUnionId_gt?: Maybe<Scalars['Int']>;
  AND?: Maybe<Array<CompetitionGradeQueryInput>>;
  Provider_in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  Provider_nin?: Maybe<Array<Maybe<Scalars['Int']>>>;
  Order_ne?: Maybe<Scalars['Int']>;
  Id_gt?: Maybe<Scalars['String']>;
  Id_exists?: Maybe<Scalars['Boolean']>;
  Order_lte?: Maybe<Scalars['Int']>;
  IsPlayoff_ne?: Maybe<Scalars['Boolean']>;
  Order_in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  Provider_exists?: Maybe<Scalars['Boolean']>;
  Provider_lt?: Maybe<Scalars['Int']>;
  NrdProvincialUnionId_gte?: Maybe<Scalars['Int']>;
  Provider_ne?: Maybe<Scalars['Int']>;
  Order_nin?: Maybe<Array<Maybe<Scalars['Int']>>>;
  Provider_gt?: Maybe<Scalars['Int']>;
  Id_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  Order_gt?: Maybe<Scalars['Int']>;
  Id_lt?: Maybe<Scalars['String']>;
  Order?: Maybe<Scalars['Int']>;
  NrdProvincialUnionId_lt?: Maybe<Scalars['Int']>;
  NrdProvincialUnionId_exists?: Maybe<Scalars['Boolean']>;
  IsPlayoff_exists?: Maybe<Scalars['Boolean']>;
};

export type CompetitionGradeUpdateInput = {
  NrdProvincialUnionId_inc?: Maybe<Scalars['Int']>;
  Provider?: Maybe<Scalars['Int']>;
  Id?: Maybe<Scalars['String']>;
  NrdProvincialUnionId_unset?: Maybe<Scalars['Boolean']>;
  Order_inc?: Maybe<Scalars['Int']>;
  Order_unset?: Maybe<Scalars['Boolean']>;
  Id_unset?: Maybe<Scalars['Boolean']>;
  IsPlayoff_unset?: Maybe<Scalars['Boolean']>;
  IsPlayoff?: Maybe<Scalars['Boolean']>;
  Provider_inc?: Maybe<Scalars['Int']>;
  NrdProvincialUnionId?: Maybe<Scalars['Int']>;
  Order?: Maybe<Scalars['Int']>;
  Provider_unset?: Maybe<Scalars['Boolean']>;
};

export type CompetitionInsertInput = {
  OrganisationId?: Maybe<Scalars['String']>;
  _id?: Maybe<Scalars['ObjectId']>;
  Id?: Maybe<Scalars['String']>;
  firstFixtureDate?: Maybe<Scalars['String']>;
  lastResultDate?: Maybe<Scalars['String']>;
  fixtures?: Maybe<Array<Maybe<Scalars['String']>>>;
  Provider?: Maybe<Scalars['Int']>;
  Name?: Maybe<Scalars['String']>;
  SportName?: Maybe<Scalars['String']>;
  SportId?: Maybe<Scalars['String']>;
  SeasonId?: Maybe<Scalars['String']>;
  Grades?: Maybe<Array<Maybe<CompetitionGradeInsertInput>>>;
};

export type CompetitionQueryInput = {
  firstFixtureDate_gt?: Maybe<Scalars['String']>;
  OrganisationId_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  SeasonId_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  firstFixtureDate_exists?: Maybe<Scalars['Boolean']>;
  SportId_nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  SeasonId_lte?: Maybe<Scalars['String']>;
  Grades_exists?: Maybe<Scalars['Boolean']>;
  SportId_exists?: Maybe<Scalars['Boolean']>;
  SportName_gt?: Maybe<Scalars['String']>;
  fixtures_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  Id_ne?: Maybe<Scalars['String']>;
  firstFixtureDate_lte?: Maybe<Scalars['String']>;
  SportId_gte?: Maybe<Scalars['String']>;
  SportId_lt?: Maybe<Scalars['String']>;
  SportName_ne?: Maybe<Scalars['String']>;
  SeasonId_ne?: Maybe<Scalars['String']>;
  Id_nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  Name_lt?: Maybe<Scalars['String']>;
  OrganisationId_gt?: Maybe<Scalars['String']>;
  Grades?: Maybe<Array<Maybe<CompetitionGradeQueryInput>>>;
  Id_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  Provider_exists?: Maybe<Scalars['Boolean']>;
  Provider_nin?: Maybe<Array<Maybe<Scalars['Int']>>>;
  SportId?: Maybe<Scalars['String']>;
  SportId_ne?: Maybe<Scalars['String']>;
  OrganisationId_lt?: Maybe<Scalars['String']>;
  SportName_exists?: Maybe<Scalars['Boolean']>;
  _id_lt?: Maybe<Scalars['ObjectId']>;
  _id_gt?: Maybe<Scalars['ObjectId']>;
  fixtures_nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  SportId_lte?: Maybe<Scalars['String']>;
  Provider_gte?: Maybe<Scalars['Int']>;
  lastResultDate_gte?: Maybe<Scalars['String']>;
  Grades_in?: Maybe<Array<Maybe<CompetitionGradeQueryInput>>>;
  SportName_gte?: Maybe<Scalars['String']>;
  Name_gt?: Maybe<Scalars['String']>;
  firstFixtureDate?: Maybe<Scalars['String']>;
  SeasonId?: Maybe<Scalars['String']>;
  fixtures_exists?: Maybe<Scalars['Boolean']>;
  Id_exists?: Maybe<Scalars['Boolean']>;
  Name?: Maybe<Scalars['String']>;
  Name_nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  _id?: Maybe<Scalars['ObjectId']>;
  SeasonId_nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  AND?: Maybe<Array<CompetitionQueryInput>>;
  OrganisationId_ne?: Maybe<Scalars['String']>;
  SportId_gt?: Maybe<Scalars['String']>;
  SeasonId_gte?: Maybe<Scalars['String']>;
  Grades_nin?: Maybe<Array<Maybe<CompetitionGradeQueryInput>>>;
  Id_gte?: Maybe<Scalars['String']>;
  lastResultDate_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  SportName_lt?: Maybe<Scalars['String']>;
  SportId_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  Id_lt?: Maybe<Scalars['String']>;
  lastResultDate_lte?: Maybe<Scalars['String']>;
  Name_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  Provider_in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  lastResultDate_nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  lastResultDate_lt?: Maybe<Scalars['String']>;
  Id_gt?: Maybe<Scalars['String']>;
  SportName_lte?: Maybe<Scalars['String']>;
  _id_nin?: Maybe<Array<Maybe<Scalars['ObjectId']>>>;
  Provider_lte?: Maybe<Scalars['Int']>;
  Name_lte?: Maybe<Scalars['String']>;
  lastResultDate?: Maybe<Scalars['String']>;
  fixtures?: Maybe<Array<Maybe<Scalars['String']>>>;
  Provider_ne?: Maybe<Scalars['Int']>;
  OrganisationId_exists?: Maybe<Scalars['Boolean']>;
  firstFixtureDate_ne?: Maybe<Scalars['String']>;
  Name_ne?: Maybe<Scalars['String']>;
  SeasonId_gt?: Maybe<Scalars['String']>;
  firstFixtureDate_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  OrganisationId_lte?: Maybe<Scalars['String']>;
  firstFixtureDate_gte?: Maybe<Scalars['String']>;
  _id_gte?: Maybe<Scalars['ObjectId']>;
  lastResultDate_gt?: Maybe<Scalars['String']>;
  firstFixtureDate_nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  _id_ne?: Maybe<Scalars['ObjectId']>;
  Id?: Maybe<Scalars['String']>;
  firstFixtureDate_lt?: Maybe<Scalars['String']>;
  OR?: Maybe<Array<CompetitionQueryInput>>;
  Provider_lt?: Maybe<Scalars['Int']>;
  _id_in?: Maybe<Array<Maybe<Scalars['ObjectId']>>>;
  Provider_gt?: Maybe<Scalars['Int']>;
  Name_gte?: Maybe<Scalars['String']>;
  SportName_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  OrganisationId?: Maybe<Scalars['String']>;
  Provider?: Maybe<Scalars['Int']>;
  SportName?: Maybe<Scalars['String']>;
  _id_lte?: Maybe<Scalars['ObjectId']>;
  Name_exists?: Maybe<Scalars['Boolean']>;
  Id_lte?: Maybe<Scalars['String']>;
  lastResultDate_exists?: Maybe<Scalars['Boolean']>;
  OrganisationId_gte?: Maybe<Scalars['String']>;
  _id_exists?: Maybe<Scalars['Boolean']>;
  SportName_nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  OrganisationId_nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  lastResultDate_ne?: Maybe<Scalars['String']>;
  SeasonId_exists?: Maybe<Scalars['Boolean']>;
  SeasonId_lt?: Maybe<Scalars['String']>;
};

export enum CompetitionSortByInput {
  SeasonidDesc = 'SEASONID_DESC',
  NameAsc = 'NAME_ASC',
  NameDesc = 'NAME_DESC',
  ProviderDesc = 'PROVIDER_DESC',
  SeasonidAsc = 'SEASONID_ASC',
  SportnameAsc = 'SPORTNAME_ASC',
  SportnameDesc = 'SPORTNAME_DESC',
  OrganisationidAsc = 'ORGANISATIONID_ASC',
  FirstfixturedateAsc = 'FIRSTFIXTUREDATE_ASC',
  FirstfixturedateDesc = 'FIRSTFIXTUREDATE_DESC',
  LastresultdateAsc = 'LASTRESULTDATE_ASC',
  IdAsc = 'ID_ASC',
  ProviderAsc = 'PROVIDER_ASC',
  SportidDesc = 'SPORTID_DESC',
  LastresultdateDesc = 'LASTRESULTDATE_DESC',
  IdDesc = 'ID_DESC',
  OrganisationidDesc = 'ORGANISATIONID_DESC',
  SportidAsc = 'SPORTID_ASC',
}

export type CompetitionUpdateInput = {
  OrganisationId_unset?: Maybe<Scalars['Boolean']>;
  Provider_inc?: Maybe<Scalars['Int']>;
  firstFixtureDate?: Maybe<Scalars['String']>;
  Grades?: Maybe<Array<Maybe<CompetitionGradeUpdateInput>>>;
  Name?: Maybe<Scalars['String']>;
  firstFixtureDate_unset?: Maybe<Scalars['Boolean']>;
  Provider_unset?: Maybe<Scalars['Boolean']>;
  SportId_unset?: Maybe<Scalars['Boolean']>;
  SeasonId_unset?: Maybe<Scalars['Boolean']>;
  lastResultDate?: Maybe<Scalars['String']>;
  Id?: Maybe<Scalars['String']>;
  SportName?: Maybe<Scalars['String']>;
  Name_unset?: Maybe<Scalars['Boolean']>;
  SeasonId?: Maybe<Scalars['String']>;
  SportName_unset?: Maybe<Scalars['Boolean']>;
  Provider?: Maybe<Scalars['Int']>;
  fixtures_unset?: Maybe<Scalars['Boolean']>;
  lastResultDate_unset?: Maybe<Scalars['Boolean']>;
  Id_unset?: Maybe<Scalars['Boolean']>;
  _id_unset?: Maybe<Scalars['Boolean']>;
  OrganisationId?: Maybe<Scalars['String']>;
  SportId?: Maybe<Scalars['String']>;
  _id?: Maybe<Scalars['ObjectId']>;
  fixtures?: Maybe<Array<Maybe<Scalars['String']>>>;
  Grades_unset?: Maybe<Scalars['Boolean']>;
};

export type DeleteManyPayload = {
  __typename?: 'DeleteManyPayload';
  deletedCount: Scalars['Int'];
};

export type Fixture = {
  __typename?: 'Fixture';
  Address?: Maybe<Scalars['String']>;
  AwayOrganisationId?: Maybe<Scalars['String']>;
  AwayOrganisationLogo?: Maybe<Scalars['String']>;
  AwayOrganisationName?: Maybe<Scalars['String']>;
  AwayScore?: Maybe<Scalars['String']>;
  AwayTeamId?: Maybe<Scalars['String']>;
  AwayTeamName?: Maybe<Scalars['String']>;
  Date?: Maybe<Scalars['String']>;
  From?: Maybe<Scalars['String']>;
  GradeId?: Maybe<Scalars['String']>;
  GradeName?: Maybe<Scalars['String']>;
  GradeSortOrder?: Maybe<Scalars['Int']>;
  HomeOrganisationId?: Maybe<Scalars['String']>;
  HomeOrganisationLogo?: Maybe<Scalars['String']>;
  HomeOrganisationName?: Maybe<Scalars['String']>;
  HomeScore?: Maybe<Scalars['String']>;
  HomeTeamId?: Maybe<Scalars['String']>;
  HomeTeamName?: Maybe<Scalars['String']>;
  Id?: Maybe<Scalars['String']>;
  InGame?: Maybe<Scalars['Boolean']>;
  IsSuperForm?: Maybe<Scalars['Boolean']>;
  Latitude?: Maybe<Scalars['String']>;
  LocationLat?: Maybe<Scalars['Int']>;
  LocationLng?: Maybe<Scalars['Int']>;
  Longitude?: Maybe<Scalars['String']>;
  MatchSummary?: Maybe<Scalars['String']>;
  Provider?: Maybe<Scalars['Int']>;
  PublishResults?: Maybe<Scalars['Boolean']>;
  PublishTeamsheetOnWidget?: Maybe<Scalars['Boolean']>;
  PublishVenue?: Maybe<Scalars['Boolean']>;
  ResultStatus?: Maybe<Scalars['Int']>;
  Round?: Maybe<Scalars['String']>;
  RoundName?: Maybe<Scalars['String']>;
  SectionId?: Maybe<Scalars['Int']>;
  SectionSortOrder?: Maybe<Scalars['Int']>;
  SportId?: Maybe<Scalars['String']>;
  SportName?: Maybe<Scalars['String']>;
  Status?: Maybe<Scalars['String']>;
  To?: Maybe<Scalars['String']>;
  VenueName?: Maybe<Scalars['String']>;
  VenueNameAbbr?: Maybe<Scalars['String']>;
  _id?: Maybe<Scalars['ObjectId']>;
  competitionId?: Maybe<Scalars['String']>;
  matchDay?: Maybe<Scalars['Int']>;
};

export type FixtureInsertInput = {
  GradeSortOrder?: Maybe<Scalars['Int']>;
  Provider?: Maybe<Scalars['Int']>;
  SportName?: Maybe<Scalars['String']>;
  AwayTeamId?: Maybe<Scalars['String']>;
  RoundName?: Maybe<Scalars['String']>;
  Status?: Maybe<Scalars['String']>;
  ResultStatus?: Maybe<Scalars['Int']>;
  HomeScore?: Maybe<Scalars['String']>;
  VenueNameAbbr?: Maybe<Scalars['String']>;
  LocationLng?: Maybe<Scalars['Int']>;
  Round?: Maybe<Scalars['String']>;
  Date?: Maybe<Scalars['String']>;
  IsSuperForm?: Maybe<Scalars['Boolean']>;
  Longitude?: Maybe<Scalars['String']>;
  PublishResults?: Maybe<Scalars['Boolean']>;
  InGame?: Maybe<Scalars['Boolean']>;
  From?: Maybe<Scalars['String']>;
  PublishTeamsheetOnWidget?: Maybe<Scalars['Boolean']>;
  AwayOrganisationId?: Maybe<Scalars['String']>;
  competitionId?: Maybe<Scalars['String']>;
  GradeName?: Maybe<Scalars['String']>;
  PublishVenue?: Maybe<Scalars['Boolean']>;
  SportId?: Maybe<Scalars['String']>;
  LocationLat?: Maybe<Scalars['Int']>;
  Address?: Maybe<Scalars['String']>;
  _id?: Maybe<Scalars['ObjectId']>;
  AwayOrganisationLogo?: Maybe<Scalars['String']>;
  GradeId?: Maybe<Scalars['String']>;
  HomeOrganisationName?: Maybe<Scalars['String']>;
  HomeTeamId?: Maybe<Scalars['String']>;
  SectionSortOrder?: Maybe<Scalars['Int']>;
  HomeOrganisationLogo?: Maybe<Scalars['String']>;
  AwayTeamName?: Maybe<Scalars['String']>;
  HomeOrganisationId?: Maybe<Scalars['String']>;
  To?: Maybe<Scalars['String']>;
  HomeTeamName?: Maybe<Scalars['String']>;
  Id?: Maybe<Scalars['String']>;
  AwayOrganisationName?: Maybe<Scalars['String']>;
  MatchSummary?: Maybe<Scalars['String']>;
  SectionId?: Maybe<Scalars['Int']>;
  VenueName?: Maybe<Scalars['String']>;
  matchDay?: Maybe<Scalars['Int']>;
  AwayScore?: Maybe<Scalars['String']>;
  Latitude?: Maybe<Scalars['String']>;
};

export type FixtureQueryInput = {
  To?: Maybe<Scalars['String']>;
  GradeSortOrder_in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  AwayTeamId_exists?: Maybe<Scalars['Boolean']>;
  HomeOrganisationLogo?: Maybe<Scalars['String']>;
  HomeTeamName_nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  AND?: Maybe<Array<FixtureQueryInput>>;
  HomeScore_gt?: Maybe<Scalars['String']>;
  competitionId_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  _id_gte?: Maybe<Scalars['ObjectId']>;
  matchDay_gte?: Maybe<Scalars['Int']>;
  GradeName_nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  LocationLat_in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  VenueNameAbbr_gt?: Maybe<Scalars['String']>;
  HomeOrganisationId_exists?: Maybe<Scalars['Boolean']>;
  HomeOrganisationName_gte?: Maybe<Scalars['String']>;
  SportName_gt?: Maybe<Scalars['String']>;
  HomeTeamId_gte?: Maybe<Scalars['String']>;
  HomeOrganisationId_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  GradeId_nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  HomeOrganisationName_nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  AwayOrganisationId_ne?: Maybe<Scalars['String']>;
  AwayScore_ne?: Maybe<Scalars['String']>;
  To_gt?: Maybe<Scalars['String']>;
  Address_nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  LocationLat_ne?: Maybe<Scalars['Int']>;
  SectionId_ne?: Maybe<Scalars['Int']>;
  To_gte?: Maybe<Scalars['String']>;
  AwayScore_gte?: Maybe<Scalars['String']>;
  AwayTeamId_gt?: Maybe<Scalars['String']>;
  Id_lte?: Maybe<Scalars['String']>;
  SportName?: Maybe<Scalars['String']>;
  GradeSortOrder?: Maybe<Scalars['Int']>;
  Longitude_exists?: Maybe<Scalars['Boolean']>;
  To_lt?: Maybe<Scalars['String']>;
  RoundName_gt?: Maybe<Scalars['String']>;
  AwayOrganisationLogo_gt?: Maybe<Scalars['String']>;
  IsSuperForm_exists?: Maybe<Scalars['Boolean']>;
  LocationLat_gt?: Maybe<Scalars['Int']>;
  HomeTeamName_lte?: Maybe<Scalars['String']>;
  HomeScore_exists?: Maybe<Scalars['Boolean']>;
  Status_exists?: Maybe<Scalars['Boolean']>;
  AwayScore_lt?: Maybe<Scalars['String']>;
  SportId_lte?: Maybe<Scalars['String']>;
  AwayOrganisationName_nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  RoundName_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  SectionId_nin?: Maybe<Array<Maybe<Scalars['Int']>>>;
  _id?: Maybe<Scalars['ObjectId']>;
  AwayTeamName_ne?: Maybe<Scalars['String']>;
  AwayOrganisationName_gte?: Maybe<Scalars['String']>;
  VenueName_gte?: Maybe<Scalars['String']>;
  ResultStatus?: Maybe<Scalars['Int']>;
  LocationLat?: Maybe<Scalars['Int']>;
  Address_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  Date_lte?: Maybe<Scalars['String']>;
  ResultStatus_gt?: Maybe<Scalars['Int']>;
  GradeSortOrder_lte?: Maybe<Scalars['Int']>;
  _id_exists?: Maybe<Scalars['Boolean']>;
  LocationLng_gte?: Maybe<Scalars['Int']>;
  VenueNameAbbr_lt?: Maybe<Scalars['String']>;
  HomeOrganisationId_gte?: Maybe<Scalars['String']>;
  InGame_exists?: Maybe<Scalars['Boolean']>;
  VenueNameAbbr_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  ResultStatus_lte?: Maybe<Scalars['Int']>;
  AwayOrganisationName?: Maybe<Scalars['String']>;
  SectionId_exists?: Maybe<Scalars['Boolean']>;
  ResultStatus_ne?: Maybe<Scalars['Int']>;
  PublishResults?: Maybe<Scalars['Boolean']>;
  To_lte?: Maybe<Scalars['String']>;
  VenueNameAbbr?: Maybe<Scalars['String']>;
  matchDay_exists?: Maybe<Scalars['Boolean']>;
  HomeTeamName_gt?: Maybe<Scalars['String']>;
  GradeName?: Maybe<Scalars['String']>;
  To_nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  From_ne?: Maybe<Scalars['String']>;
  AwayOrganisationName_exists?: Maybe<Scalars['Boolean']>;
  Id_exists?: Maybe<Scalars['Boolean']>;
  VenueName_ne?: Maybe<Scalars['String']>;
  PublishResults_exists?: Maybe<Scalars['Boolean']>;
  VenueName_nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  InGame?: Maybe<Scalars['Boolean']>;
  Provider_lte?: Maybe<Scalars['Int']>;
  SportId_exists?: Maybe<Scalars['Boolean']>;
  Latitude_exists?: Maybe<Scalars['Boolean']>;
  AwayOrganisationName_lte?: Maybe<Scalars['String']>;
  Provider_in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  HomeOrganisationLogo_gte?: Maybe<Scalars['String']>;
  Round_gt?: Maybe<Scalars['String']>;
  MatchSummary_gte?: Maybe<Scalars['String']>;
  Longitude_lte?: Maybe<Scalars['String']>;
  HomeOrganisationName_exists?: Maybe<Scalars['Boolean']>;
  AwayTeamId_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  AwayTeamName_nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  GradeName_gte?: Maybe<Scalars['String']>;
  AwayScore_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  PublishTeamsheetOnWidget_exists?: Maybe<Scalars['Boolean']>;
  AwayOrganisationId_nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  From_lte?: Maybe<Scalars['String']>;
  HomeOrganisationName_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  LocationLat_exists?: Maybe<Scalars['Boolean']>;
  GradeName_lte?: Maybe<Scalars['String']>;
  Status_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  LocationLat_lte?: Maybe<Scalars['Int']>;
  Latitude_gt?: Maybe<Scalars['String']>;
  HomeScore_lt?: Maybe<Scalars['String']>;
  AwayTeamId_nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  _id_lt?: Maybe<Scalars['ObjectId']>;
  SportName_lt?: Maybe<Scalars['String']>;
  SectionSortOrder_lte?: Maybe<Scalars['Int']>;
  RoundName_ne?: Maybe<Scalars['String']>;
  AwayTeamName_lt?: Maybe<Scalars['String']>;
  HomeTeamId_nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  AwayScore_gt?: Maybe<Scalars['String']>;
  _id_lte?: Maybe<Scalars['ObjectId']>;
  Latitude_ne?: Maybe<Scalars['String']>;
  HomeScore_lte?: Maybe<Scalars['String']>;
  SportName_nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  HomeOrganisationName_gt?: Maybe<Scalars['String']>;
  matchDay_ne?: Maybe<Scalars['Int']>;
  Provider?: Maybe<Scalars['Int']>;
  VenueNameAbbr_exists?: Maybe<Scalars['Boolean']>;
  SectionSortOrder_lt?: Maybe<Scalars['Int']>;
  Status_gt?: Maybe<Scalars['String']>;
  HomeScore_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  HomeTeamName?: Maybe<Scalars['String']>;
  AwayTeamId_ne?: Maybe<Scalars['String']>;
  HomeOrganisationName?: Maybe<Scalars['String']>;
  Id?: Maybe<Scalars['String']>;
  Round_ne?: Maybe<Scalars['String']>;
  LocationLng_ne?: Maybe<Scalars['Int']>;
  HomeOrganisationLogo_nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  HomeOrganisationId_nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  Latitude_lt?: Maybe<Scalars['String']>;
  Status_lte?: Maybe<Scalars['String']>;
  Date_gt?: Maybe<Scalars['String']>;
  LocationLng_lte?: Maybe<Scalars['Int']>;
  Provider_lt?: Maybe<Scalars['Int']>;
  GradeId_gt?: Maybe<Scalars['String']>;
  GradeSortOrder_lt?: Maybe<Scalars['Int']>;
  RoundName_lt?: Maybe<Scalars['String']>;
  Provider_exists?: Maybe<Scalars['Boolean']>;
  Round_exists?: Maybe<Scalars['Boolean']>;
  HomeTeamId_lte?: Maybe<Scalars['String']>;
  AwayOrganisationId_exists?: Maybe<Scalars['Boolean']>;
  Status_gte?: Maybe<Scalars['String']>;
  GradeId_lt?: Maybe<Scalars['String']>;
  RoundName?: Maybe<Scalars['String']>;
  HomeScore_ne?: Maybe<Scalars['String']>;
  GradeId_lte?: Maybe<Scalars['String']>;
  HomeOrganisationLogo_gt?: Maybe<Scalars['String']>;
  matchDay_lte?: Maybe<Scalars['Int']>;
  Address_exists?: Maybe<Scalars['Boolean']>;
  GradeId_gte?: Maybe<Scalars['String']>;
  VenueNameAbbr_nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  Address?: Maybe<Scalars['String']>;
  GradeId_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  ResultStatus_exists?: Maybe<Scalars['Boolean']>;
  SportId_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  Date_ne?: Maybe<Scalars['String']>;
  Round_lt?: Maybe<Scalars['String']>;
  AwayOrganisationName_gt?: Maybe<Scalars['String']>;
  competitionId_gt?: Maybe<Scalars['String']>;
  HomeTeamId_lt?: Maybe<Scalars['String']>;
  Status_lt?: Maybe<Scalars['String']>;
  HomeTeamName_lt?: Maybe<Scalars['String']>;
  HomeTeamId_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  To_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  Longitude_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  AwayOrganisationName_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  AwayOrganisationId_gte?: Maybe<Scalars['String']>;
  VenueNameAbbr_lte?: Maybe<Scalars['String']>;
  SportId_ne?: Maybe<Scalars['String']>;
  MatchSummary_gt?: Maybe<Scalars['String']>;
  GradeSortOrder_nin?: Maybe<Array<Maybe<Scalars['Int']>>>;
  VenueName?: Maybe<Scalars['String']>;
  AwayTeamName?: Maybe<Scalars['String']>;
  SectionId_lt?: Maybe<Scalars['Int']>;
  VenueName_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  HomeOrganisationLogo_lte?: Maybe<Scalars['String']>;
  Latitude_lte?: Maybe<Scalars['String']>;
  Provider_gt?: Maybe<Scalars['Int']>;
  Status?: Maybe<Scalars['String']>;
  Longitude_ne?: Maybe<Scalars['String']>;
  Date_exists?: Maybe<Scalars['Boolean']>;
  OR?: Maybe<Array<FixtureQueryInput>>;
  HomeTeamName_ne?: Maybe<Scalars['String']>;
  HomeScore_nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  HomeTeamName_gte?: Maybe<Scalars['String']>;
  SectionSortOrder_in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  GradeSortOrder_gt?: Maybe<Scalars['Int']>;
  AwayTeamName_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  HomeTeamName_exists?: Maybe<Scalars['Boolean']>;
  Round_gte?: Maybe<Scalars['String']>;
  LocationLng_nin?: Maybe<Array<Maybe<Scalars['Int']>>>;
  Id_gte?: Maybe<Scalars['String']>;
  LocationLat_gte?: Maybe<Scalars['Int']>;
  SectionId_lte?: Maybe<Scalars['Int']>;
  _id_gt?: Maybe<Scalars['ObjectId']>;
  competitionId_exists?: Maybe<Scalars['Boolean']>;
  PublishTeamsheetOnWidget?: Maybe<Scalars['Boolean']>;
  VenueName_lt?: Maybe<Scalars['String']>;
  Round_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  AwayOrganisationLogo_ne?: Maybe<Scalars['String']>;
  matchDay_in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  VenueNameAbbr_gte?: Maybe<Scalars['String']>;
  HomeScore?: Maybe<Scalars['String']>;
  competitionId_ne?: Maybe<Scalars['String']>;
  _id_nin?: Maybe<Array<Maybe<Scalars['ObjectId']>>>;
  Id_lt?: Maybe<Scalars['String']>;
  LocationLng_lt?: Maybe<Scalars['Int']>;
  SportId_gte?: Maybe<Scalars['String']>;
  Address_gte?: Maybe<Scalars['String']>;
  RoundName_nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  matchDay_gt?: Maybe<Scalars['Int']>;
  PublishTeamsheetOnWidget_ne?: Maybe<Scalars['Boolean']>;
  Longitude_gte?: Maybe<Scalars['String']>;
  Id_ne?: Maybe<Scalars['String']>;
  AwayOrganisationId?: Maybe<Scalars['String']>;
  HomeOrganisationId_gt?: Maybe<Scalars['String']>;
  Address_ne?: Maybe<Scalars['String']>;
  IsSuperForm?: Maybe<Scalars['Boolean']>;
  MatchSummary_ne?: Maybe<Scalars['String']>;
  From_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  RoundName_exists?: Maybe<Scalars['Boolean']>;
  HomeOrganisationName_lt?: Maybe<Scalars['String']>;
  matchDay?: Maybe<Scalars['Int']>;
  From_lt?: Maybe<Scalars['String']>;
  Round?: Maybe<Scalars['String']>;
  SportName_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  Date_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  AwayTeamId_lt?: Maybe<Scalars['String']>;
  AwayOrganisationName_ne?: Maybe<Scalars['String']>;
  PublishResults_ne?: Maybe<Scalars['Boolean']>;
  competitionId_nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  Date_gte?: Maybe<Scalars['String']>;
  AwayOrganisationLogo_lte?: Maybe<Scalars['String']>;
  Longitude?: Maybe<Scalars['String']>;
  HomeOrganisationId_lte?: Maybe<Scalars['String']>;
  GradeSortOrder_gte?: Maybe<Scalars['Int']>;
  SportName_lte?: Maybe<Scalars['String']>;
  GradeId_ne?: Maybe<Scalars['String']>;
  SectionSortOrder_gt?: Maybe<Scalars['Int']>;
  Id_nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  VenueName_lte?: Maybe<Scalars['String']>;
  SportId?: Maybe<Scalars['String']>;
  GradeName_lt?: Maybe<Scalars['String']>;
  competitionId_lte?: Maybe<Scalars['String']>;
  Id_gt?: Maybe<Scalars['String']>;
  GradeSortOrder_exists?: Maybe<Scalars['Boolean']>;
  competitionId?: Maybe<Scalars['String']>;
  AwayOrganisationLogo?: Maybe<Scalars['String']>;
  MatchSummary_lt?: Maybe<Scalars['String']>;
  To_exists?: Maybe<Scalars['Boolean']>;
  Date_nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  RoundName_gte?: Maybe<Scalars['String']>;
  _id_in?: Maybe<Array<Maybe<Scalars['ObjectId']>>>;
  HomeTeamId_ne?: Maybe<Scalars['String']>;
  AwayScore_lte?: Maybe<Scalars['String']>;
  Address_lte?: Maybe<Scalars['String']>;
  Provider_gte?: Maybe<Scalars['Int']>;
  VenueNameAbbr_ne?: Maybe<Scalars['String']>;
  AwayOrganisationId_lt?: Maybe<Scalars['String']>;
  LocationLng_exists?: Maybe<Scalars['Boolean']>;
  AwayScore_nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  From?: Maybe<Scalars['String']>;
  AwayTeamId_lte?: Maybe<Scalars['String']>;
  LocationLat_lt?: Maybe<Scalars['Int']>;
  matchDay_nin?: Maybe<Array<Maybe<Scalars['Int']>>>;
  ResultStatus_nin?: Maybe<Array<Maybe<Scalars['Int']>>>;
  GradeId?: Maybe<Scalars['String']>;
  AwayOrganisationLogo_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  RoundName_lte?: Maybe<Scalars['String']>;
  Latitude_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  From_gte?: Maybe<Scalars['String']>;
  Status_ne?: Maybe<Scalars['String']>;
  VenueName_gt?: Maybe<Scalars['String']>;
  AwayOrganisationLogo_lt?: Maybe<Scalars['String']>;
  SportName_exists?: Maybe<Scalars['Boolean']>;
  Latitude?: Maybe<Scalars['String']>;
  GradeName_ne?: Maybe<Scalars['String']>;
  SportId_gt?: Maybe<Scalars['String']>;
  AwayOrganisationLogo_nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  PublishVenue_ne?: Maybe<Scalars['Boolean']>;
  HomeOrganisationId_ne?: Maybe<Scalars['String']>;
  SectionSortOrder_gte?: Maybe<Scalars['Int']>;
  Provider_ne?: Maybe<Scalars['Int']>;
  Provider_nin?: Maybe<Array<Maybe<Scalars['Int']>>>;
  SectionSortOrder_exists?: Maybe<Scalars['Boolean']>;
  HomeScore_gte?: Maybe<Scalars['String']>;
  AwayOrganisationId_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  GradeSortOrder_ne?: Maybe<Scalars['Int']>;
  SectionId?: Maybe<Scalars['Int']>;
  SportId_nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  Longitude_lt?: Maybe<Scalars['String']>;
  Address_lt?: Maybe<Scalars['String']>;
  Round_lte?: Maybe<Scalars['String']>;
  HomeOrganisationLogo_exists?: Maybe<Scalars['Boolean']>;
  AwayTeamId?: Maybe<Scalars['String']>;
  VenueName_exists?: Maybe<Scalars['Boolean']>;
  GradeName_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  SectionSortOrder_ne?: Maybe<Scalars['Int']>;
  LocationLng_gt?: Maybe<Scalars['Int']>;
  InGame_ne?: Maybe<Scalars['Boolean']>;
  MatchSummary_lte?: Maybe<Scalars['String']>;
  MatchSummary_nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  AwayOrganisationId_gt?: Maybe<Scalars['String']>;
  HomeOrganisationName_ne?: Maybe<Scalars['String']>;
  competitionId_lt?: Maybe<Scalars['String']>;
  From_exists?: Maybe<Scalars['Boolean']>;
  _id_ne?: Maybe<Scalars['ObjectId']>;
  AwayOrganisationName_lt?: Maybe<Scalars['String']>;
  From_gt?: Maybe<Scalars['String']>;
  Longitude_nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  SportId_lt?: Maybe<Scalars['String']>;
  AwayTeamName_exists?: Maybe<Scalars['Boolean']>;
  Address_gt?: Maybe<Scalars['String']>;
  AwayScore_exists?: Maybe<Scalars['Boolean']>;
  SectionId_in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  MatchSummary_exists?: Maybe<Scalars['Boolean']>;
  LocationLng?: Maybe<Scalars['Int']>;
  HomeOrganisationName_lte?: Maybe<Scalars['String']>;
  SectionId_gt?: Maybe<Scalars['Int']>;
  AwayTeamName_lte?: Maybe<Scalars['String']>;
  GradeName_gt?: Maybe<Scalars['String']>;
  competitionId_gte?: Maybe<Scalars['String']>;
  MatchSummary_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  SectionSortOrder_nin?: Maybe<Array<Maybe<Scalars['Int']>>>;
  MatchSummary?: Maybe<Scalars['String']>;
  ResultStatus_in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  Date_lt?: Maybe<Scalars['String']>;
  AwayOrganisationLogo_gte?: Maybe<Scalars['String']>;
  HomeOrganisationLogo_ne?: Maybe<Scalars['String']>;
  Latitude_gte?: Maybe<Scalars['String']>;
  HomeTeamName_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  HomeTeamId?: Maybe<Scalars['String']>;
  IsSuperForm_ne?: Maybe<Scalars['Boolean']>;
  LocationLng_in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  Id_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  AwayOrganisationId_lte?: Maybe<Scalars['String']>;
  Longitude_gt?: Maybe<Scalars['String']>;
  HomeTeamId_exists?: Maybe<Scalars['Boolean']>;
  SectionSortOrder?: Maybe<Scalars['Int']>;
  AwayScore?: Maybe<Scalars['String']>;
  PublishVenue?: Maybe<Scalars['Boolean']>;
  SectionId_gte?: Maybe<Scalars['Int']>;
  PublishVenue_exists?: Maybe<Scalars['Boolean']>;
  GradeName_exists?: Maybe<Scalars['Boolean']>;
  Round_nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  LocationLat_nin?: Maybe<Array<Maybe<Scalars['Int']>>>;
  matchDay_lt?: Maybe<Scalars['Int']>;
  Status_nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  AwayTeamName_gt?: Maybe<Scalars['String']>;
  From_nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  GradeId_exists?: Maybe<Scalars['Boolean']>;
  Latitude_nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  SportName_ne?: Maybe<Scalars['String']>;
  AwayTeamName_gte?: Maybe<Scalars['String']>;
  HomeOrganisationId_lt?: Maybe<Scalars['String']>;
  Date?: Maybe<Scalars['String']>;
  ResultStatus_gte?: Maybe<Scalars['Int']>;
  HomeOrganisationLogo_lt?: Maybe<Scalars['String']>;
  HomeOrganisationId?: Maybe<Scalars['String']>;
  SportName_gte?: Maybe<Scalars['String']>;
  To_ne?: Maybe<Scalars['String']>;
  ResultStatus_lt?: Maybe<Scalars['Int']>;
  AwayTeamId_gte?: Maybe<Scalars['String']>;
  HomeTeamId_gt?: Maybe<Scalars['String']>;
  AwayOrganisationLogo_exists?: Maybe<Scalars['Boolean']>;
  HomeOrganisationLogo_in?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export enum FixtureSortByInput {
  RoundnameAsc = 'ROUNDNAME_ASC',
  LatitudeAsc = 'LATITUDE_ASC',
  VenuenameabbrAsc = 'VENUENAMEABBR_ASC',
  GradeidAsc = 'GRADEID_ASC',
  AwayteamnameDesc = 'AWAYTEAMNAME_DESC',
  HomeorganisationidDesc = 'HOMEORGANISATIONID_DESC',
  HomescoreDesc = 'HOMESCORE_DESC',
  HometeamidAsc = 'HOMETEAMID_ASC',
  GradesortorderDesc = 'GRADESORTORDER_DESC',
  HomeorganisationlogoAsc = 'HOMEORGANISATIONLOGO_ASC',
  AwayscoreDesc = 'AWAYSCORE_DESC',
  RoundnameDesc = 'ROUNDNAME_DESC',
  LocationlngAsc = 'LOCATIONLNG_ASC',
  IdDesc = 'ID_DESC',
  AwayorganisationnameAsc = 'AWAYORGANISATIONNAME_ASC',
  ResultstatusDesc = 'RESULTSTATUS_DESC',
  HometeamnameDesc = 'HOMETEAMNAME_DESC',
  AwayorganisationidAsc = 'AWAYORGANISATIONID_ASC',
  LatitudeDesc = 'LATITUDE_DESC',
  VenuenameDesc = 'VENUENAME_DESC',
  VenuenameabbrDesc = 'VENUENAMEABBR_DESC',
  MatchdayDesc = 'MATCHDAY_DESC',
  AwayorganisationidDesc = 'AWAYORGANISATIONID_DESC',
  SectionsortorderAsc = 'SECTIONSORTORDER_ASC',
  MatchdayAsc = 'MATCHDAY_ASC',
  HometeamidDesc = 'HOMETEAMID_DESC',
  LocationlngDesc = 'LOCATIONLNG_DESC',
  VenuenameAsc = 'VENUENAME_ASC',
  StatusDesc = 'STATUS_DESC',
  HometeamnameAsc = 'HOMETEAMNAME_ASC',
  AwayscoreAsc = 'AWAYSCORE_ASC',
  GradenameAsc = 'GRADENAME_ASC',
  AwayorganisationlogoDesc = 'AWAYORGANISATIONLOGO_DESC',
  AwayteamidDesc = 'AWAYTEAMID_DESC',
  ProviderDesc = 'PROVIDER_DESC',
  StatusAsc = 'STATUS_ASC',
  AwayorganisationlogoAsc = 'AWAYORGANISATIONLOGO_ASC',
  HomeorganisationidAsc = 'HOMEORGANISATIONID_ASC',
  MatchsummaryAsc = 'MATCHSUMMARY_ASC',
  CompetitionidAsc = 'COMPETITIONID_ASC',
  DateDesc = 'DATE_DESC',
  HomeorganisationlogoDesc = 'HOMEORGANISATIONLOGO_DESC',
  ProviderAsc = 'PROVIDER_ASC',
  SportnameDesc = 'SPORTNAME_DESC',
  LocationlatAsc = 'LOCATIONLAT_ASC',
  LocationlatDesc = 'LOCATIONLAT_DESC',
  FromDesc = 'FROM_DESC',
  SectionidAsc = 'SECTIONID_ASC',
  SectionidDesc = 'SECTIONID_DESC',
  RoundDesc = 'ROUND_DESC',
  SportidDesc = 'SPORTID_DESC',
  LongitudeDesc = 'LONGITUDE_DESC',
  ToDesc = 'TO_DESC',
  HomescoreAsc = 'HOMESCORE_ASC',
  GradenameDesc = 'GRADENAME_DESC',
  IdAsc = '_ID_ASC',
  AddressDesc = 'ADDRESS_DESC',
  AwayteamnameAsc = 'AWAYTEAMNAME_ASC',
  MatchsummaryDesc = 'MATCHSUMMARY_DESC',
  CompetitionidDesc = 'COMPETITIONID_DESC',
  HomeorganisationnameDesc = 'HOMEORGANISATIONNAME_DESC',
  LongitudeAsc = 'LONGITUDE_ASC',
  GradesortorderAsc = 'GRADESORTORDER_ASC',
  AwayteamidAsc = 'AWAYTEAMID_ASC',
  DateAsc = 'DATE_ASC',
  FromAsc = 'FROM_ASC',
  SportidAsc = 'SPORTID_ASC',
  SportnameAsc = 'SPORTNAME_ASC',
  AddressAsc = 'ADDRESS_ASC',
  AwayorganisationnameDesc = 'AWAYORGANISATIONNAME_DESC',
  ResultstatusAsc = 'RESULTSTATUS_ASC',
  GradeidDesc = 'GRADEID_DESC',
  HomeorganisationnameAsc = 'HOMEORGANISATIONNAME_ASC',
  RoundAsc = 'ROUND_ASC',
  SectionsortorderDesc = 'SECTIONSORTORDER_DESC',
  ToAsc = 'TO_ASC'
}

export type FixtureUpdateInput = {
  IsSuperForm?: Maybe<Scalars['Boolean']>;
  LocationLat_unset?: Maybe<Scalars['Boolean']>;
  GradeId?: Maybe<Scalars['String']>;
  Id_unset?: Maybe<Scalars['Boolean']>;
  VenueNameAbbr_unset?: Maybe<Scalars['Boolean']>;
  HomeTeamId_unset?: Maybe<Scalars['Boolean']>;
  InGame_unset?: Maybe<Scalars['Boolean']>;
  HomeScore?: Maybe<Scalars['String']>;
  LocationLng_inc?: Maybe<Scalars['Int']>;
  Address_unset?: Maybe<Scalars['Boolean']>;
  SectionSortOrder_inc?: Maybe<Scalars['Int']>;
  ResultStatus?: Maybe<Scalars['Int']>;
  AwayOrganisationLogo?: Maybe<Scalars['String']>;
  VenueNameAbbr?: Maybe<Scalars['String']>;
  HomeTeamName?: Maybe<Scalars['String']>;
  SportName_unset?: Maybe<Scalars['Boolean']>;
  AwayOrganisationId_unset?: Maybe<Scalars['Boolean']>;
  Provider_unset?: Maybe<Scalars['Boolean']>;
  HomeOrganisationId_unset?: Maybe<Scalars['Boolean']>;
  PublishResults_unset?: Maybe<Scalars['Boolean']>;
  Latitude_unset?: Maybe<Scalars['Boolean']>;
  matchDay_unset?: Maybe<Scalars['Boolean']>;
  LocationLng_unset?: Maybe<Scalars['Boolean']>;
  matchDay_inc?: Maybe<Scalars['Int']>;
  AwayScore?: Maybe<Scalars['String']>;
  SectionId_inc?: Maybe<Scalars['Int']>;
  To?: Maybe<Scalars['String']>;
  GradeSortOrder?: Maybe<Scalars['Int']>;
  PublishResults?: Maybe<Scalars['Boolean']>;
  HomeOrganisationLogo?: Maybe<Scalars['String']>;
  Latitude?: Maybe<Scalars['String']>;
  GradeName?: Maybe<Scalars['String']>;
  AwayOrganisationLogo_unset?: Maybe<Scalars['Boolean']>;
  PublishVenue?: Maybe<Scalars['Boolean']>;
  AwayOrganisationName_unset?: Maybe<Scalars['Boolean']>;
  MatchSummary?: Maybe<Scalars['String']>;
  IsSuperForm_unset?: Maybe<Scalars['Boolean']>;
  GradeSortOrder_inc?: Maybe<Scalars['Int']>;
  Status_unset?: Maybe<Scalars['Boolean']>;
  competitionId_unset?: Maybe<Scalars['Boolean']>;
  InGame?: Maybe<Scalars['Boolean']>;
  HomeTeamId?: Maybe<Scalars['String']>;
  To_unset?: Maybe<Scalars['Boolean']>;
  MatchSummary_unset?: Maybe<Scalars['Boolean']>;
  HomeOrganisationId?: Maybe<Scalars['String']>;
  Date_unset?: Maybe<Scalars['Boolean']>;
  AwayScore_unset?: Maybe<Scalars['Boolean']>;
  Status?: Maybe<Scalars['String']>;
  AwayOrganisationId?: Maybe<Scalars['String']>;
  _id_unset?: Maybe<Scalars['Boolean']>;
  SectionSortOrder_unset?: Maybe<Scalars['Boolean']>;
  From_unset?: Maybe<Scalars['Boolean']>;
  SportId_unset?: Maybe<Scalars['Boolean']>;
  competitionId?: Maybe<Scalars['String']>;
  VenueName?: Maybe<Scalars['String']>;
  HomeOrganisationName_unset?: Maybe<Scalars['Boolean']>;
  LocationLat_inc?: Maybe<Scalars['Int']>;
  HomeOrganisationLogo_unset?: Maybe<Scalars['Boolean']>;
  GradeSortOrder_unset?: Maybe<Scalars['Boolean']>;
  AwayTeamId?: Maybe<Scalars['String']>;
  HomeOrganisationName?: Maybe<Scalars['String']>;
  VenueName_unset?: Maybe<Scalars['Boolean']>;
  LocationLng?: Maybe<Scalars['Int']>;
  SportId?: Maybe<Scalars['String']>;
  GradeId_unset?: Maybe<Scalars['Boolean']>;
  AwayTeamName_unset?: Maybe<Scalars['Boolean']>;
  Date?: Maybe<Scalars['String']>;
  ResultStatus_unset?: Maybe<Scalars['Boolean']>;
  _id?: Maybe<Scalars['ObjectId']>;
  Longitude?: Maybe<Scalars['String']>;
  SectionSortOrder?: Maybe<Scalars['Int']>;
  PublishVenue_unset?: Maybe<Scalars['Boolean']>;
  SectionId?: Maybe<Scalars['Int']>;
  ResultStatus_inc?: Maybe<Scalars['Int']>;
  Round?: Maybe<Scalars['String']>;
  Id?: Maybe<Scalars['String']>;
  AwayOrganisationName?: Maybe<Scalars['String']>;
  matchDay?: Maybe<Scalars['Int']>;
  PublishTeamsheetOnWidget_unset?: Maybe<Scalars['Boolean']>;
  From?: Maybe<Scalars['String']>;
  RoundName_unset?: Maybe<Scalars['Boolean']>;
  SportName?: Maybe<Scalars['String']>;
  RoundName?: Maybe<Scalars['String']>;
  Longitude_unset?: Maybe<Scalars['Boolean']>;
  Address?: Maybe<Scalars['String']>;
  SectionId_unset?: Maybe<Scalars['Boolean']>;
  Provider?: Maybe<Scalars['Int']>;
  PublishTeamsheetOnWidget?: Maybe<Scalars['Boolean']>;
  Provider_inc?: Maybe<Scalars['Int']>;
  AwayTeamName?: Maybe<Scalars['String']>;
  AwayTeamId_unset?: Maybe<Scalars['Boolean']>;
  Round_unset?: Maybe<Scalars['Boolean']>;
  HomeScore_unset?: Maybe<Scalars['Boolean']>;
  GradeName_unset?: Maybe<Scalars['Boolean']>;
  LocationLat?: Maybe<Scalars['Int']>;
  HomeTeamName_unset?: Maybe<Scalars['Boolean']>;
};

export type Ground = {
  __typename?: 'Ground';
  _id?: Maybe<Scalars['ObjectId']>;
  address?: Maybe<Scalars['String']>;
  fixtures?: Maybe<Array<Maybe<Scalars['String']>>>;
  homeTeams?: Maybe<Array<Maybe<Scalars['String']>>>;
  lat?: Maybe<Scalars['String']>;
  lon?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

export type GroundInsertInput = {
  address?: Maybe<Scalars['String']>;
  fixtures?: Maybe<Array<Maybe<Scalars['String']>>>;
  homeTeams?: Maybe<Array<Maybe<Scalars['String']>>>;
  lat?: Maybe<Scalars['String']>;
  lon?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  _id?: Maybe<Scalars['ObjectId']>;
};

export type GroundQueryInput = {
  name?: Maybe<Scalars['String']>;
  lat_nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  address_nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  lat_exists?: Maybe<Scalars['Boolean']>;
  fixtures?: Maybe<Array<Maybe<Scalars['String']>>>;
  _id_gte?: Maybe<Scalars['ObjectId']>;
  address_exists?: Maybe<Scalars['Boolean']>;
  address_lte?: Maybe<Scalars['String']>;
  lon?: Maybe<Scalars['String']>;
  lat?: Maybe<Scalars['String']>;
  lat_gt?: Maybe<Scalars['String']>;
  lon_lt?: Maybe<Scalars['String']>;
  address_gt?: Maybe<Scalars['String']>;
  _id_lt?: Maybe<Scalars['ObjectId']>;
  lon_exists?: Maybe<Scalars['Boolean']>;
  AND?: Maybe<Array<GroundQueryInput>>;
  name_ne?: Maybe<Scalars['String']>;
  address?: Maybe<Scalars['String']>;
  lon_gt?: Maybe<Scalars['String']>;
  name_gte?: Maybe<Scalars['String']>;
  name_lt?: Maybe<Scalars['String']>;
  lat_lte?: Maybe<Scalars['String']>;
  lat_lt?: Maybe<Scalars['String']>;
  lon_ne?: Maybe<Scalars['String']>;
  address_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  _id_nin?: Maybe<Array<Maybe<Scalars['ObjectId']>>>;
  name_gt?: Maybe<Scalars['String']>;
  lon_gte?: Maybe<Scalars['String']>;
  address_lt?: Maybe<Scalars['String']>;
  lat_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  lat_ne?: Maybe<Scalars['String']>;
  _id_lte?: Maybe<Scalars['ObjectId']>;
  name_exists?: Maybe<Scalars['Boolean']>;
  _id_exists?: Maybe<Scalars['Boolean']>;
  _id_ne?: Maybe<Scalars['ObjectId']>;
  address_ne?: Maybe<Scalars['String']>;
  fixtures_exists?: Maybe<Scalars['Boolean']>;
  homeTeams_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  lon_nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  address_gte?: Maybe<Scalars['String']>;
  fixtures_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  OR?: Maybe<Array<GroundQueryInput>>;
  _id_gt?: Maybe<Scalars['ObjectId']>;
  _id?: Maybe<Scalars['ObjectId']>;
  fixtures_nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  homeTeams_nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  lat_gte?: Maybe<Scalars['String']>;
  _id_in?: Maybe<Array<Maybe<Scalars['ObjectId']>>>;
  homeTeams?: Maybe<Array<Maybe<Scalars['String']>>>;
  lon_lte?: Maybe<Scalars['String']>;
  name_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  homeTeams_exists?: Maybe<Scalars['Boolean']>;
  name_nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  lon_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  name_lte?: Maybe<Scalars['String']>;
};

export enum GroundSortByInput {
  LatDesc = 'LAT_DESC',
  LonAsc = 'LON_ASC',
  LonDesc = 'LON_DESC',
  NameAsc = 'NAME_ASC',
  NameDesc = 'NAME_DESC',
  IdAsc = '_ID_ASC',
  AddressAsc = 'ADDRESS_ASC',
  AddressDesc = 'ADDRESS_DESC',
  LatAsc = 'LAT_ASC',
  IdDesc = '_ID_DESC'
}

export type GroundUpdateInput = {
  homeTeams?: Maybe<Array<Maybe<Scalars['String']>>>;
  lon?: Maybe<Scalars['String']>;
  address_unset?: Maybe<Scalars['Boolean']>;
  lat?: Maybe<Scalars['String']>;
  lat_unset?: Maybe<Scalars['Boolean']>;
  lon_unset?: Maybe<Scalars['Boolean']>;
  fixtures_unset?: Maybe<Scalars['Boolean']>;
  fixtures?: Maybe<Array<Maybe<Scalars['String']>>>;
  homeTeams_unset?: Maybe<Scalars['Boolean']>;
  _id_unset?: Maybe<Scalars['Boolean']>;
  name_unset?: Maybe<Scalars['Boolean']>;
  address?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  _id?: Maybe<Scalars['ObjectId']>;
};

export type InsertManyPayload = {
  __typename?: 'InsertManyPayload';
  insertedIds: Array<Maybe<Scalars['ObjectId']>>;
};

export type Mutation = {
  __typename?: 'Mutation';
  deleteManyCompetitions?: Maybe<DeleteManyPayload>;
  deleteManyFixtures?: Maybe<DeleteManyPayload>;
  deleteManyGrounds?: Maybe<DeleteManyPayload>;
  deleteManyOrganisations?: Maybe<DeleteManyPayload>;
  deleteManyTeams?: Maybe<DeleteManyPayload>;
  deleteOneCompetition?: Maybe<Competition>;
  deleteOneFixture?: Maybe<Fixture>;
  deleteOneGround?: Maybe<Ground>;
  deleteOneOrganisation?: Maybe<Organisation>;
  deleteOneTeam?: Maybe<Team>;
  insertManyCompetitions?: Maybe<InsertManyPayload>;
  insertManyFixtures?: Maybe<InsertManyPayload>;
  insertManyGrounds?: Maybe<InsertManyPayload>;
  insertManyOrganisations?: Maybe<InsertManyPayload>;
  insertManyTeams?: Maybe<InsertManyPayload>;
  insertOneCompetition?: Maybe<Competition>;
  insertOneFixture?: Maybe<Fixture>;
  insertOneGround?: Maybe<Ground>;
  insertOneOrganisation?: Maybe<Organisation>;
  insertOneTeam?: Maybe<Team>;
  replaceOneCompetition?: Maybe<Competition>;
  replaceOneFixture?: Maybe<Fixture>;
  replaceOneGround?: Maybe<Ground>;
  replaceOneOrganisation?: Maybe<Organisation>;
  replaceOneTeam?: Maybe<Team>;
  updateManyCompetitions?: Maybe<UpdateManyPayload>;
  updateManyFixtures?: Maybe<UpdateManyPayload>;
  updateManyGrounds?: Maybe<UpdateManyPayload>;
  updateManyOrganisations?: Maybe<UpdateManyPayload>;
  updateManyTeams?: Maybe<UpdateManyPayload>;
  updateOneCompetition?: Maybe<Competition>;
  updateOneFixture?: Maybe<Fixture>;
  updateOneGround?: Maybe<Ground>;
  updateOneOrganisation?: Maybe<Organisation>;
  updateOneTeam?: Maybe<Team>;
  upsertOneCompetition?: Maybe<Competition>;
  upsertOneFixture?: Maybe<Fixture>;
  upsertOneGround?: Maybe<Ground>;
  upsertOneOrganisation?: Maybe<Organisation>;
  upsertOneTeam?: Maybe<Team>;
};


export type MutationDeleteManyCompetitionsArgs = {
  query?: Maybe<CompetitionQueryInput>;
};


export type MutationDeleteManyFixturesArgs = {
  query?: Maybe<FixtureQueryInput>;
};


export type MutationDeleteManyGroundsArgs = {
  query?: Maybe<GroundQueryInput>;
};


export type MutationDeleteManyOrganisationsArgs = {
  query?: Maybe<OrganisationQueryInput>;
};


export type MutationDeleteManyTeamsArgs = {
  query?: Maybe<TeamQueryInput>;
};


export type MutationDeleteOneCompetitionArgs = {
  query: CompetitionQueryInput;
};


export type MutationDeleteOneFixtureArgs = {
  query: FixtureQueryInput;
};


export type MutationDeleteOneGroundArgs = {
  query: GroundQueryInput;
};


export type MutationDeleteOneOrganisationArgs = {
  query: OrganisationQueryInput;
};


export type MutationDeleteOneTeamArgs = {
  query: TeamQueryInput;
};


export type MutationInsertManyCompetitionsArgs = {
  data: Array<CompetitionInsertInput>;
};


export type MutationInsertManyFixturesArgs = {
  data: Array<FixtureInsertInput>;
};


export type MutationInsertManyGroundsArgs = {
  data: Array<GroundInsertInput>;
};


export type MutationInsertManyOrganisationsArgs = {
  data: Array<OrganisationInsertInput>;
};


export type MutationInsertManyTeamsArgs = {
  data: Array<TeamInsertInput>;
};


export type MutationInsertOneCompetitionArgs = {
  data: CompetitionInsertInput;
};


export type MutationInsertOneFixtureArgs = {
  data: FixtureInsertInput;
};


export type MutationInsertOneGroundArgs = {
  data: GroundInsertInput;
};


export type MutationInsertOneOrganisationArgs = {
  data: OrganisationInsertInput;
};


export type MutationInsertOneTeamArgs = {
  data: TeamInsertInput;
};


export type MutationReplaceOneCompetitionArgs = {
  query?: Maybe<CompetitionQueryInput>;
  data: CompetitionInsertInput;
};


export type MutationReplaceOneFixtureArgs = {
  query?: Maybe<FixtureQueryInput>;
  data: FixtureInsertInput;
};


export type MutationReplaceOneGroundArgs = {
  data: GroundInsertInput;
  query?: Maybe<GroundQueryInput>;
};


export type MutationReplaceOneOrganisationArgs = {
  query?: Maybe<OrganisationQueryInput>;
  data: OrganisationInsertInput;
};


export type MutationReplaceOneTeamArgs = {
  query?: Maybe<TeamQueryInput>;
  data: TeamInsertInput;
};


export type MutationUpdateManyCompetitionsArgs = {
  query?: Maybe<CompetitionQueryInput>;
  set: CompetitionUpdateInput;
};


export type MutationUpdateManyFixturesArgs = {
  set: FixtureUpdateInput;
  query?: Maybe<FixtureQueryInput>;
};


export type MutationUpdateManyGroundsArgs = {
  query?: Maybe<GroundQueryInput>;
  set: GroundUpdateInput;
};


export type MutationUpdateManyOrganisationsArgs = {
  query?: Maybe<OrganisationQueryInput>;
  set: OrganisationUpdateInput;
};


export type MutationUpdateManyTeamsArgs = {
  query?: Maybe<TeamQueryInput>;
  set: TeamUpdateInput;
};


export type MutationUpdateOneCompetitionArgs = {
  query?: Maybe<CompetitionQueryInput>;
  set: CompetitionUpdateInput;
};


export type MutationUpdateOneFixtureArgs = {
  set: FixtureUpdateInput;
  query?: Maybe<FixtureQueryInput>;
};


export type MutationUpdateOneGroundArgs = {
  query?: Maybe<GroundQueryInput>;
  set: GroundUpdateInput;
};


export type MutationUpdateOneOrganisationArgs = {
  query?: Maybe<OrganisationQueryInput>;
  set: OrganisationUpdateInput;
};


export type MutationUpdateOneTeamArgs = {
  query?: Maybe<TeamQueryInput>;
  set: TeamUpdateInput;
};


export type MutationUpsertOneCompetitionArgs = {
  query?: Maybe<CompetitionQueryInput>;
  data: CompetitionInsertInput;
};


export type MutationUpsertOneFixtureArgs = {
  query?: Maybe<FixtureQueryInput>;
  data: FixtureInsertInput;
};


export type MutationUpsertOneGroundArgs = {
  data: GroundInsertInput;
  query?: Maybe<GroundQueryInput>;
};


export type MutationUpsertOneOrganisationArgs = {
  data: OrganisationInsertInput;
  query?: Maybe<OrganisationQueryInput>;
};


export type MutationUpsertOneTeamArgs = {
  query?: Maybe<TeamQueryInput>;
  data: TeamInsertInput;
};


export type Organisation = {
  __typename?: 'Organisation';
  Id?: Maybe<Scalars['String']>;
  Name?: Maybe<Scalars['String']>;
  Provider?: Maybe<Scalars['Int']>;
  _id?: Maybe<Scalars['ObjectId']>;
  teams?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type OrganisationInsertInput = {
  Name?: Maybe<Scalars['String']>;
  Provider?: Maybe<Scalars['Int']>;
  _id?: Maybe<Scalars['ObjectId']>;
  teams?: Maybe<Array<Maybe<Scalars['String']>>>;
  Id?: Maybe<Scalars['String']>;
};

export type OrganisationQueryInput = {
  _id_ne?: Maybe<Scalars['ObjectId']>;
  teams_exists?: Maybe<Scalars['Boolean']>;
  Id_lt?: Maybe<Scalars['String']>;
  Provider_gt?: Maybe<Scalars['Int']>;
  _id_nin?: Maybe<Array<Maybe<Scalars['ObjectId']>>>;
  Provider_exists?: Maybe<Scalars['Boolean']>;
  _id_gt?: Maybe<Scalars['ObjectId']>;
  AND?: Maybe<Array<OrganisationQueryInput>>;
  Id_ne?: Maybe<Scalars['String']>;
  Provider_gte?: Maybe<Scalars['Int']>;
  OR?: Maybe<Array<OrganisationQueryInput>>;
  Name_lt?: Maybe<Scalars['String']>;
  Id_gt?: Maybe<Scalars['String']>;
  _id_in?: Maybe<Array<Maybe<Scalars['ObjectId']>>>;
  Id_nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  Provider_lte?: Maybe<Scalars['Int']>;
  Id_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  Name?: Maybe<Scalars['String']>;
  teams?: Maybe<Array<Maybe<Scalars['String']>>>;
  _id_exists?: Maybe<Scalars['Boolean']>;
  Name_lte?: Maybe<Scalars['String']>;
  Id_gte?: Maybe<Scalars['String']>;
  Name_gte?: Maybe<Scalars['String']>;
  Name_gt?: Maybe<Scalars['String']>;
  Name_ne?: Maybe<Scalars['String']>;
  Provider_lt?: Maybe<Scalars['Int']>;
  teams_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  Id?: Maybe<Scalars['String']>;
  Id_lte?: Maybe<Scalars['String']>;
  Name_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  Provider_ne?: Maybe<Scalars['Int']>;
  _id_gte?: Maybe<Scalars['ObjectId']>;
  _id?: Maybe<Scalars['ObjectId']>;
  _id_lt?: Maybe<Scalars['ObjectId']>;
  teams_nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  _id_lte?: Maybe<Scalars['ObjectId']>;
  Provider?: Maybe<Scalars['Int']>;
  Name_nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  Name_exists?: Maybe<Scalars['Boolean']>;
  Provider_in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  Id_exists?: Maybe<Scalars['Boolean']>;
  Provider_nin?: Maybe<Array<Maybe<Scalars['Int']>>>;
};

export enum OrganisationSortByInput {
  IdDesc = '_ID_DESC',
  IdAsc = 'ID_ASC',
  NameAsc = 'NAME_ASC',
  NameDesc = 'NAME_DESC',
  ProviderAsc = 'PROVIDER_ASC',
  ProviderDesc = 'PROVIDER_DESC',
}

export type OrganisationUpdateInput = {
  Id?: Maybe<Scalars['String']>;
  Provider_inc?: Maybe<Scalars['Int']>;
  Provider_unset?: Maybe<Scalars['Boolean']>;
  Id_unset?: Maybe<Scalars['Boolean']>;
  Name?: Maybe<Scalars['String']>;
  _id_unset?: Maybe<Scalars['Boolean']>;
  teams_unset?: Maybe<Scalars['Boolean']>;
  Name_unset?: Maybe<Scalars['Boolean']>;
  teams?: Maybe<Array<Maybe<Scalars['String']>>>;
  _id?: Maybe<Scalars['ObjectId']>;
  Provider?: Maybe<Scalars['Int']>;
};

export type Query = {
  __typename?: 'Query';
  competition?: Maybe<Competition>;
  competitions: Array<Maybe<Competition>>;
  fixture?: Maybe<Fixture>;
  fixtures: Array<Maybe<Fixture>>;
  ground?: Maybe<Ground>;
  grounds: Array<Maybe<Ground>>;
  organisation?: Maybe<Organisation>;
  organisations: Array<Maybe<Organisation>>;
  team?: Maybe<Team>;
  teams: Array<Maybe<Team>>;
};


export type QueryCompetitionArgs = {
  query?: Maybe<CompetitionQueryInput>;
};


export type QueryCompetitionsArgs = {
  query?: Maybe<CompetitionQueryInput>;
  limit?: Maybe<Scalars['Int']>;
  sortBy?: Maybe<CompetitionSortByInput>;
};


export type QueryFixtureArgs = {
  query?: Maybe<FixtureQueryInput>;
};


export type QueryFixturesArgs = {
  query?: Maybe<FixtureQueryInput>;
  limit?: Maybe<Scalars['Int']>;
  sortBy?: Maybe<FixtureSortByInput>;
};


export type QueryGroundArgs = {
  query?: Maybe<GroundQueryInput>;
};


export type QueryGroundsArgs = {
  query?: Maybe<GroundQueryInput>;
  limit?: Maybe<Scalars['Int']>;
  sortBy?: Maybe<GroundSortByInput>;
};


export type QueryOrganisationArgs = {
  query?: Maybe<OrganisationQueryInput>;
};


export type QueryOrganisationsArgs = {
  query?: Maybe<OrganisationQueryInput>;
  limit?: Maybe<Scalars['Int']>;
  sortBy?: Maybe<OrganisationSortByInput>;
};


export type QueryTeamArgs = {
  query?: Maybe<TeamQueryInput>;
};


export type QueryTeamsArgs = {
  sortBy?: Maybe<TeamSortByInput>;
  query?: Maybe<TeamQueryInput>;
  limit?: Maybe<Scalars['Int']>;
};

export type Team = {
  __typename?: 'Team';
  Id?: Maybe<Scalars['String']>;
  _id?: Maybe<Scalars['ObjectId']>;
  awayFixtures?: Maybe<Array<Maybe<Scalars['String']>>>;
  competitions?: Maybe<Array<Maybe<Scalars['String']>>>;
  fixtures?: Maybe<Array<Maybe<Scalars['String']>>>;
  homeFixtures?: Maybe<Array<Maybe<Scalars['String']>>>;
  homeGrounds?: Maybe<Array<Maybe<Scalars['String']>>>;
  name?: Maybe<Scalars['String']>;
  organisation?: Maybe<Scalars['String']>;
};

export type TeamInsertInput = {
  awayFixtures?: Maybe<Array<Maybe<Scalars['String']>>>;
  fixtures?: Maybe<Array<Maybe<Scalars['String']>>>;
  organisation?: Maybe<Scalars['String']>;
  homeGrounds?: Maybe<Array<Maybe<Scalars['String']>>>;
  Id?: Maybe<Scalars['String']>;
  homeFixtures?: Maybe<Array<Maybe<Scalars['String']>>>;
  competitions?: Maybe<Array<Maybe<Scalars['String']>>>;
  name?: Maybe<Scalars['String']>;
  _id?: Maybe<Scalars['ObjectId']>;
};

export type TeamQueryInput = {
  homeGrounds_nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  name?: Maybe<Scalars['String']>;
  organisation_nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  Id_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  name_ne?: Maybe<Scalars['String']>;
  _id?: Maybe<Scalars['ObjectId']>;
  name_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  Id_ne?: Maybe<Scalars['String']>;
  Id_lte?: Maybe<Scalars['String']>;
  _id_gt?: Maybe<Scalars['ObjectId']>;
  name_lte?: Maybe<Scalars['String']>;
  competitions_nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  organisation_exists?: Maybe<Scalars['Boolean']>;
  awayFixtures_nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  competitions_exists?: Maybe<Scalars['Boolean']>;
  _id_gte?: Maybe<Scalars['ObjectId']>;
  Id_lt?: Maybe<Scalars['String']>;
  homeGrounds_exists?: Maybe<Scalars['Boolean']>;
  organisation_lte?: Maybe<Scalars['String']>;
  name_lt?: Maybe<Scalars['String']>;
  fixtures_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  name_exists?: Maybe<Scalars['Boolean']>;
  _id_exists?: Maybe<Scalars['Boolean']>;
  fixtures_exists?: Maybe<Scalars['Boolean']>;
  fixtures?: Maybe<Array<Maybe<Scalars['String']>>>;
  organisation_gt?: Maybe<Scalars['String']>;
  _id_lt?: Maybe<Scalars['ObjectId']>;
  awayFixtures_exists?: Maybe<Scalars['Boolean']>;
  homeFixtures?: Maybe<Array<Maybe<Scalars['String']>>>;
  _id_ne?: Maybe<Scalars['ObjectId']>;
  homeGrounds_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  awayFixtures_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  awayFixtures?: Maybe<Array<Maybe<Scalars['String']>>>;
  name_gt?: Maybe<Scalars['String']>;
  competitions?: Maybe<Array<Maybe<Scalars['String']>>>;
  competitions_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  name_nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  AND?: Maybe<Array<TeamQueryInput>>;
  Id_gte?: Maybe<Scalars['String']>;
  name_gte?: Maybe<Scalars['String']>;
  homeGrounds?: Maybe<Array<Maybe<Scalars['String']>>>;
  organisation?: Maybe<Scalars['String']>;
  Id_exists?: Maybe<Scalars['Boolean']>;
  _id_lte?: Maybe<Scalars['ObjectId']>;
  homeFixtures_nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  Id?: Maybe<Scalars['String']>;
  Id_gt?: Maybe<Scalars['String']>;
  homeFixtures_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  _id_nin?: Maybe<Array<Maybe<Scalars['ObjectId']>>>;
  OR?: Maybe<Array<TeamQueryInput>>;
  organisation_lt?: Maybe<Scalars['String']>;
  _id_in?: Maybe<Array<Maybe<Scalars['ObjectId']>>>;
  organisation_gte?: Maybe<Scalars['String']>;
  homeFixtures_exists?: Maybe<Scalars['Boolean']>;
  organisation_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  fixtures_nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  organisation_ne?: Maybe<Scalars['String']>;
  Id_nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export enum TeamSortByInput {
  IdDesc = '_ID_DESC',
  NameAsc = 'NAME_ASC',
  NameDesc = 'NAME_DESC',
  OrganisationAsc = 'ORGANISATION_ASC',
  OrganisationDesc = 'ORGANISATION_DESC',
  IdAsc = 'ID_ASC',
}

export type TeamUpdateInput = {
  homeGrounds_unset?: Maybe<Scalars['Boolean']>;
  organisation_unset?: Maybe<Scalars['Boolean']>;
  Id_unset?: Maybe<Scalars['Boolean']>;
  _id_unset?: Maybe<Scalars['Boolean']>;
  awayFixtures_unset?: Maybe<Scalars['Boolean']>;
  homeGrounds?: Maybe<Array<Maybe<Scalars['String']>>>;
  Id?: Maybe<Scalars['String']>;
  awayFixtures?: Maybe<Array<Maybe<Scalars['String']>>>;
  homeFixtures_unset?: Maybe<Scalars['Boolean']>;
  name_unset?: Maybe<Scalars['Boolean']>;
  _id?: Maybe<Scalars['ObjectId']>;
  name?: Maybe<Scalars['String']>;
  fixtures?: Maybe<Array<Maybe<Scalars['String']>>>;
  competitions?: Maybe<Array<Maybe<Scalars['String']>>>;
  fixtures_unset?: Maybe<Scalars['Boolean']>;
  homeFixtures?: Maybe<Array<Maybe<Scalars['String']>>>;
  competitions_unset?: Maybe<Scalars['Boolean']>;
  organisation?: Maybe<Scalars['String']>;
};

export type UpdateManyPayload = {
  __typename?: 'UpdateManyPayload';
  matchedCount: Scalars['Int'];
  modifiedCount: Scalars['Int'];
};

export type GetAllCompetitionsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllCompetitionsQuery = (
  { __typename?: 'Query' }
  & { competition?: Maybe<(
    { __typename?: 'Competition' }
    & Pick<Competition, 'Id' | 'Name' | 'OrganisationId' | 'Provider' | 'SeasonId' | 'SportId' | 'SportName' | '_id' | 'firstFixtureDate' | 'fixtures' | 'lastResultDate'>
    & { Grades?: Maybe<Array<Maybe<(
      { __typename?: 'CompetitionGrade' }
      & Pick<CompetitionGrade, 'Id'>
    )>>> }
  )> }
);


export type GetCompetitionByIdQueryVariables = Exact<{
  Id: Scalars['String'];
}>;


export type GetCompetitionByIdQuery = (
  { __typename?: 'Query' }
  & { competition?: Maybe<(
    { __typename?: 'Competition' }
    & Pick<Competition, 'Id' | 'Name' | 'OrganisationId' | 'Provider' | 'SeasonId' | 'SportId' | 'SportName' | '_id' | 'firstFixtureDate' | 'fixtures' | 'lastResultDate'>
    & { Grades?: Maybe<Array<Maybe<(
      { __typename?: 'CompetitionGrade' }
      & Pick<CompetitionGrade, 'Id'>
    )>>> }
  )> }
);



export type GetFixturesByIdsQueryVariables = Exact<{
  Ids?: Maybe<Array<Maybe<Scalars['String']>>>;
}>;


export type GetFixturesByIdsQuery = (
  { __typename?: 'Query' }
  & { fixtures: Array<Maybe<(
    { __typename?: 'Fixture' }
    & Pick<Fixture, 'Address' | 'AwayOrganisationId' | 'AwayOrganisationLogo' | 'AwayOrganisationName' | 'AwayScore' | 'AwayTeamId' | 'AwayTeamName' | 'Date' | 'From' | 'GradeId' | 'GradeName' | 'GradeSortOrder' | 'HomeOrganisationId' | 'HomeOrganisationLogo' | 'HomeOrganisationName' | 'HomeScore' | 'HomeTeamId' | 'HomeTeamName' | 'Id' | 'InGame' | 'IsSuperForm' | 'Latitude' | 'LocationLat' | 'LocationLng' | 'Longitude' | 'MatchSummary' | 'Provider' | 'PublishResults' | 'PublishTeamsheetOnWidget' | 'PublishVenue' | 'ResultStatus' | 'Round' | 'RoundName' | 'SectionId' | 'SectionSortOrder' | 'SportId' | 'SportName' | 'Status' | 'To' | 'VenueName' | 'VenueNameAbbr' | '_id' | 'competitionId' | 'matchDay'>
  )>> }
);


export type GetFixturesQueryVariables = Exact<{
  q?: Maybe<FixtureQueryInput>;
}>;


export type GetFixturesQuery = (
  { __typename?: 'Query' }
  & { fixtures: Array<Maybe<(
    { __typename?: 'Fixture' }
    & Pick<Fixture, 'Address' | 'AwayOrganisationId' | 'AwayOrganisationLogo' | 'AwayOrganisationName' | 'AwayScore' | 'AwayTeamId' | 'AwayTeamName' | 'Date' | 'From' | 'GradeId' | 'GradeName' | 'GradeSortOrder' | 'HomeOrganisationId' | 'HomeOrganisationLogo' | 'HomeOrganisationName' | 'HomeScore' | 'HomeTeamId' | 'HomeTeamName' | 'Id' | 'InGame' | 'IsSuperForm' | 'Latitude' | 'LocationLat' | 'LocationLng' | 'Longitude' | 'MatchSummary' | 'Provider' | 'PublishResults' | 'PublishTeamsheetOnWidget' | 'PublishVenue' | 'ResultStatus' | 'Round' | 'RoundName' | 'SectionId' | 'SectionSortOrder' | 'SportId' | 'SportName' | 'Status' | 'To' | 'VenueName' | 'VenueNameAbbr' | '_id' | 'competitionId' | 'matchDay'>
  )>> }
);
