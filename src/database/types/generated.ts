export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
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
  NrdProvincialUnionId?: Maybe<Scalars['Int']>;
  Order?: Maybe<Scalars['Int']>;
  Provider?: Maybe<Scalars['Int']>;
  Id?: Maybe<Scalars['String']>;
  IsPlayoff?: Maybe<Scalars['Boolean']>;
};

export type CompetitionGradeQueryInput = {
  Order?: Maybe<Scalars['Int']>;
  Provider_ne?: Maybe<Scalars['Int']>;
  NrdProvincialUnionId_gte?: Maybe<Scalars['Int']>;
  Id_gt?: Maybe<Scalars['String']>;
  NrdProvincialUnionId_lte?: Maybe<Scalars['Int']>;
  Order_in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  AND?: Maybe<Array<CompetitionGradeQueryInput>>;
  Id_exists?: Maybe<Scalars['Boolean']>;
  Id_ne?: Maybe<Scalars['String']>;
  Id_gte?: Maybe<Scalars['String']>;
  Id_nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  NrdProvincialUnionId_gt?: Maybe<Scalars['Int']>;
  Order_ne?: Maybe<Scalars['Int']>;
  Provider_gte?: Maybe<Scalars['Int']>;
  IsPlayoff?: Maybe<Scalars['Boolean']>;
  NrdProvincialUnionId_nin?: Maybe<Array<Maybe<Scalars['Int']>>>;
  NrdProvincialUnionId?: Maybe<Scalars['Int']>;
  Provider_in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  Provider_lt?: Maybe<Scalars['Int']>;
  Provider_nin?: Maybe<Array<Maybe<Scalars['Int']>>>;
  NrdProvincialUnionId_lt?: Maybe<Scalars['Int']>;
  Provider_exists?: Maybe<Scalars['Boolean']>;
  Order_lt?: Maybe<Scalars['Int']>;
  IsPlayoff_ne?: Maybe<Scalars['Boolean']>;
  OR?: Maybe<Array<CompetitionGradeQueryInput>>;
  Order_exists?: Maybe<Scalars['Boolean']>;
  Id_lte?: Maybe<Scalars['String']>;
  NrdProvincialUnionId_in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  Order_nin?: Maybe<Array<Maybe<Scalars['Int']>>>;
  Provider_lte?: Maybe<Scalars['Int']>;
  Provider_gt?: Maybe<Scalars['Int']>;
  Order_gte?: Maybe<Scalars['Int']>;
  NrdProvincialUnionId_exists?: Maybe<Scalars['Boolean']>;
  Id_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  IsPlayoff_exists?: Maybe<Scalars['Boolean']>;
  NrdProvincialUnionId_ne?: Maybe<Scalars['Int']>;
  Id_lt?: Maybe<Scalars['String']>;
  Id?: Maybe<Scalars['String']>;
  Provider?: Maybe<Scalars['Int']>;
  Order_gt?: Maybe<Scalars['Int']>;
  Order_lte?: Maybe<Scalars['Int']>;
};

export type CompetitionGradeUpdateInput = {
  Order?: Maybe<Scalars['Int']>;
  Order_inc?: Maybe<Scalars['Int']>;
  Id_unset?: Maybe<Scalars['Boolean']>;
  IsPlayoff_unset?: Maybe<Scalars['Boolean']>;
  NrdProvincialUnionId_unset?: Maybe<Scalars['Boolean']>;
  Provider_unset?: Maybe<Scalars['Boolean']>;
  Provider_inc?: Maybe<Scalars['Int']>;
  IsPlayoff?: Maybe<Scalars['Boolean']>;
  Order_unset?: Maybe<Scalars['Boolean']>;
  Id?: Maybe<Scalars['String']>;
  NrdProvincialUnionId?: Maybe<Scalars['Int']>;
  NrdProvincialUnionId_inc?: Maybe<Scalars['Int']>;
  Provider?: Maybe<Scalars['Int']>;
};

export type CompetitionInsertInput = {
  SportId?: Maybe<Scalars['String']>;
  OrganisationId?: Maybe<Scalars['String']>;
  _id?: Maybe<Scalars['ObjectId']>;
  Grades?: Maybe<Array<Maybe<CompetitionGradeInsertInput>>>;
  Name?: Maybe<Scalars['String']>;
  Provider?: Maybe<Scalars['Int']>;
  SportName?: Maybe<Scalars['String']>;
  Id?: Maybe<Scalars['String']>;
  firstFixtureDate?: Maybe<Scalars['String']>;
  fixtures?: Maybe<Array<Maybe<Scalars['String']>>>;
  lastResultDate?: Maybe<Scalars['String']>;
  SeasonId?: Maybe<Scalars['String']>;
};

export type CompetitionQueryInput = {
  SportId_gt?: Maybe<Scalars['String']>;
  Name?: Maybe<Scalars['String']>;
  OrganisationId_gt?: Maybe<Scalars['String']>;
  SportId_lte?: Maybe<Scalars['String']>;
  Provider_in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  Id_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  _id_exists?: Maybe<Scalars['Boolean']>;
  Provider_gte?: Maybe<Scalars['Int']>;
  SportName_ne?: Maybe<Scalars['String']>;
  SeasonId_gt?: Maybe<Scalars['String']>;
  Id_gte?: Maybe<Scalars['String']>;
  Name_ne?: Maybe<Scalars['String']>;
  Id_lt?: Maybe<Scalars['String']>;
  AND?: Maybe<Array<CompetitionQueryInput>>;
  OrganisationId_ne?: Maybe<Scalars['String']>;
  SportId_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  Provider_nin?: Maybe<Array<Maybe<Scalars['Int']>>>;
  firstFixtureDate?: Maybe<Scalars['String']>;
  lastResultDate_lte?: Maybe<Scalars['String']>;
  firstFixtureDate_lt?: Maybe<Scalars['String']>;
  OrganisationId_lt?: Maybe<Scalars['String']>;
  SportName_exists?: Maybe<Scalars['Boolean']>;
  SportId_gte?: Maybe<Scalars['String']>;
  firstFixtureDate_ne?: Maybe<Scalars['String']>;
  Id_gt?: Maybe<Scalars['String']>;
  OrganisationId_gte?: Maybe<Scalars['String']>;
  SportId_exists?: Maybe<Scalars['Boolean']>;
  fixtures_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  _id_ne?: Maybe<Scalars['ObjectId']>;
  firstFixtureDate_nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  OrganisationId_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  Grades?: Maybe<Array<Maybe<CompetitionGradeQueryInput>>>;
  Grades_in?: Maybe<Array<Maybe<CompetitionGradeQueryInput>>>;
  firstFixtureDate_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  _id_gte?: Maybe<Scalars['ObjectId']>;
  SeasonId_gte?: Maybe<Scalars['String']>;
  lastResultDate_lt?: Maybe<Scalars['String']>;
  SportId_nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  SportName_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  SeasonId_lte?: Maybe<Scalars['String']>;
  _id_in?: Maybe<Array<Maybe<Scalars['ObjectId']>>>;
  lastResultDate_nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  firstFixtureDate_exists?: Maybe<Scalars['Boolean']>;
  Id?: Maybe<Scalars['String']>;
  lastResultDate_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  SeasonId_lt?: Maybe<Scalars['String']>;
  firstFixtureDate_gt?: Maybe<Scalars['String']>;
  Provider_gt?: Maybe<Scalars['Int']>;
  Grades_nin?: Maybe<Array<Maybe<CompetitionGradeQueryInput>>>;
  SeasonId?: Maybe<Scalars['String']>;
  Id_exists?: Maybe<Scalars['Boolean']>;
  firstFixtureDate_lte?: Maybe<Scalars['String']>;
  SeasonId_nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  SeasonId_exists?: Maybe<Scalars['Boolean']>;
  SportId?: Maybe<Scalars['String']>;
  _id_lte?: Maybe<Scalars['ObjectId']>;
  Provider_lte?: Maybe<Scalars['Int']>;
  Id_lte?: Maybe<Scalars['String']>;
  Name_lte?: Maybe<Scalars['String']>;
  SportName_nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  lastResultDate_gte?: Maybe<Scalars['String']>;
  _id_lt?: Maybe<Scalars['ObjectId']>;
  Name_lt?: Maybe<Scalars['String']>;
  fixtures_nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  lastResultDate?: Maybe<Scalars['String']>;
  Name_gte?: Maybe<Scalars['String']>;
  Grades_exists?: Maybe<Scalars['Boolean']>;
  SeasonId_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  OrganisationId_nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  SportName_lte?: Maybe<Scalars['String']>;
  OrganisationId_exists?: Maybe<Scalars['Boolean']>;
  fixtures_exists?: Maybe<Scalars['Boolean']>;
  SportId_ne?: Maybe<Scalars['String']>;
  Name_exists?: Maybe<Scalars['Boolean']>;
  Provider_ne?: Maybe<Scalars['Int']>;
  SportName?: Maybe<Scalars['String']>;
  lastResultDate_gt?: Maybe<Scalars['String']>;
  Id_nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  SeasonId_ne?: Maybe<Scalars['String']>;
  _id_nin?: Maybe<Array<Maybe<Scalars['ObjectId']>>>;
  Name_nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  OrganisationId_lte?: Maybe<Scalars['String']>;
  Name_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  Id_ne?: Maybe<Scalars['String']>;
  fixtures?: Maybe<Array<Maybe<Scalars['String']>>>;
  SportId_lt?: Maybe<Scalars['String']>;
  lastResultDate_exists?: Maybe<Scalars['Boolean']>;
  SportName_lt?: Maybe<Scalars['String']>;
  OR?: Maybe<Array<CompetitionQueryInput>>;
  SportName_gt?: Maybe<Scalars['String']>;
  firstFixtureDate_gte?: Maybe<Scalars['String']>;
  _id_gt?: Maybe<Scalars['ObjectId']>;
  OrganisationId?: Maybe<Scalars['String']>;
  _id?: Maybe<Scalars['ObjectId']>;
  Name_gt?: Maybe<Scalars['String']>;
  lastResultDate_ne?: Maybe<Scalars['String']>;
  Provider_lt?: Maybe<Scalars['Int']>;
  Provider?: Maybe<Scalars['Int']>;
  Provider_exists?: Maybe<Scalars['Boolean']>;
  SportName_gte?: Maybe<Scalars['String']>;
};

export enum CompetitionSortByInput {
  SPORTNAME_ASC = 'SPORTNAME_ASC',
  ORGANISATIONID_DESC = 'ORGANISATIONID_DESC',
  SPORTID_ASC = 'SPORTID_ASC',
  NAME_ASC = 'NAME_ASC',
  FIRSTFIXTUREDATE_ASC = 'FIRSTFIXTUREDATE_ASC',
  FIRSTFIXTUREDATE_DESC = 'FIRSTFIXTUREDATE_DESC',
  ID_DESC = 'ID_DESC',
  SEASONID_DESC = 'SEASONID_DESC',
  SPORTID_DESC = 'SPORTID_DESC',
  SPORTNAME_DESC = 'SPORTNAME_DESC',
  LASTRESULTDATE_ASC = 'LASTRESULTDATE_ASC',
  PROVIDER_ASC = 'PROVIDER_ASC',
  PROVIDER_DESC = 'PROVIDER_DESC',
  ID_ASC = 'ID_ASC',
  ORGANISATIONID_ASC = 'ORGANISATIONID_ASC',
  SEASONID_ASC = 'SEASONID_ASC',
  _ID_ASC = '_ID_ASC',
  _ID_DESC = '_ID_DESC',
  NAME_DESC = 'NAME_DESC',
  LASTRESULTDATE_DESC = 'LASTRESULTDATE_DESC',
}

export type CompetitionUpdateInput = {
  firstFixtureDate?: Maybe<Scalars['String']>;
  SportId_unset?: Maybe<Scalars['Boolean']>;
  lastResultDate_unset?: Maybe<Scalars['Boolean']>;
  Grades?: Maybe<Array<Maybe<CompetitionGradeUpdateInput>>>;
  Provider?: Maybe<Scalars['Int']>;
  SportName?: Maybe<Scalars['String']>;
  SportName_unset?: Maybe<Scalars['Boolean']>;
  Name?: Maybe<Scalars['String']>;
  SeasonId_unset?: Maybe<Scalars['Boolean']>;
  fixtures?: Maybe<Array<Maybe<Scalars['String']>>>;
  firstFixtureDate_unset?: Maybe<Scalars['Boolean']>;
  Id_unset?: Maybe<Scalars['Boolean']>;
  _id_unset?: Maybe<Scalars['Boolean']>;
  fixtures_unset?: Maybe<Scalars['Boolean']>;
  SportId?: Maybe<Scalars['String']>;
  Name_unset?: Maybe<Scalars['Boolean']>;
  Provider_inc?: Maybe<Scalars['Int']>;
  Provider_unset?: Maybe<Scalars['Boolean']>;
  SeasonId?: Maybe<Scalars['String']>;
  OrganisationId_unset?: Maybe<Scalars['Boolean']>;
  lastResultDate?: Maybe<Scalars['String']>;
  Id?: Maybe<Scalars['String']>;
  Grades_unset?: Maybe<Scalars['Boolean']>;
  _id?: Maybe<Scalars['ObjectId']>;
  OrganisationId?: Maybe<Scalars['String']>;
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
  SportName?: Maybe<Scalars['String']>;
  GradeId?: Maybe<Scalars['String']>;
  Round?: Maybe<Scalars['String']>;
  SectionSortOrder?: Maybe<Scalars['Int']>;
  _id?: Maybe<Scalars['ObjectId']>;
  GradeName?: Maybe<Scalars['String']>;
  Status?: Maybe<Scalars['String']>;
  PublishVenue?: Maybe<Scalars['Boolean']>;
  LocationLng?: Maybe<Scalars['Int']>;
  AwayScore?: Maybe<Scalars['String']>;
  AwayOrganisationId?: Maybe<Scalars['String']>;
  AwayOrganisationName?: Maybe<Scalars['String']>;
  IsSuperForm?: Maybe<Scalars['Boolean']>;
  AwayOrganisationLogo?: Maybe<Scalars['String']>;
  Latitude?: Maybe<Scalars['String']>;
  AwayTeamName?: Maybe<Scalars['String']>;
  Longitude?: Maybe<Scalars['String']>;
  ResultStatus?: Maybe<Scalars['Int']>;
  HomeOrganisationName?: Maybe<Scalars['String']>;
  VenueName?: Maybe<Scalars['String']>;
  SportId?: Maybe<Scalars['String']>;
  LocationLat?: Maybe<Scalars['Int']>;
  To?: Maybe<Scalars['String']>;
  GradeSortOrder?: Maybe<Scalars['Int']>;
  HomeScore?: Maybe<Scalars['String']>;
  VenueNameAbbr?: Maybe<Scalars['String']>;
  InGame?: Maybe<Scalars['Boolean']>;
  HomeOrganisationLogo?: Maybe<Scalars['String']>;
  PublishResults?: Maybe<Scalars['Boolean']>;
  competitionId?: Maybe<Scalars['String']>;
  HomeTeamId?: Maybe<Scalars['String']>;
  matchDay?: Maybe<Scalars['Int']>;
  AwayTeamId?: Maybe<Scalars['String']>;
  Date?: Maybe<Scalars['String']>;
  Address?: Maybe<Scalars['String']>;
  From?: Maybe<Scalars['String']>;
  Provider?: Maybe<Scalars['Int']>;
  Id?: Maybe<Scalars['String']>;
  PublishTeamsheetOnWidget?: Maybe<Scalars['Boolean']>;
  HomeOrganisationId?: Maybe<Scalars['String']>;
  MatchSummary?: Maybe<Scalars['String']>;
  HomeTeamName?: Maybe<Scalars['String']>;
  SectionId?: Maybe<Scalars['Int']>;
  RoundName?: Maybe<Scalars['String']>;
};

export type FixtureQueryInput = {
  SectionId_exists?: Maybe<Scalars['Boolean']>;
  HomeOrganisationId_ne?: Maybe<Scalars['String']>;
  LocationLng_gte?: Maybe<Scalars['Int']>;
  LocationLat_in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  ResultStatus_nin?: Maybe<Array<Maybe<Scalars['Int']>>>;
  VenueName?: Maybe<Scalars['String']>;
  AwayOrganisationName_gte?: Maybe<Scalars['String']>;
  RoundName_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  AwayTeamName_exists?: Maybe<Scalars['Boolean']>;
  MatchSummary_lte?: Maybe<Scalars['String']>;
  matchDay_lt?: Maybe<Scalars['Int']>;
  HomeOrganisationLogo_lt?: Maybe<Scalars['String']>;
  GradeId_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  SectionId_gte?: Maybe<Scalars['Int']>;
  MatchSummary_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  _id_in?: Maybe<Array<Maybe<Scalars['ObjectId']>>>;
  _id_ne?: Maybe<Scalars['ObjectId']>;
  Id_gte?: Maybe<Scalars['String']>;
  AwayOrganisationId_lt?: Maybe<Scalars['String']>;
  To_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  SectionSortOrder_gte?: Maybe<Scalars['Int']>;
  Status_ne?: Maybe<Scalars['String']>;
  Round_lt?: Maybe<Scalars['String']>;
  SectionId_ne?: Maybe<Scalars['Int']>;
  AwayOrganisationLogo_gte?: Maybe<Scalars['String']>;
  Provider_lt?: Maybe<Scalars['Int']>;
  AwayTeamId?: Maybe<Scalars['String']>;
  HomeScore_nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  Status_lt?: Maybe<Scalars['String']>;
  InGame?: Maybe<Scalars['Boolean']>;
  IsSuperForm?: Maybe<Scalars['Boolean']>;
  AwayOrganisationLogo_nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  LocationLat_exists?: Maybe<Scalars['Boolean']>;
  From?: Maybe<Scalars['String']>;
  HomeTeamId_gt?: Maybe<Scalars['String']>;
  SportId_exists?: Maybe<Scalars['Boolean']>;
  HomeOrganisationId_lt?: Maybe<Scalars['String']>;
  AwayOrganisationName_exists?: Maybe<Scalars['Boolean']>;
  SectionSortOrder_lt?: Maybe<Scalars['Int']>;
  SectionSortOrder?: Maybe<Scalars['Int']>;
  AwayOrganisationLogo_lt?: Maybe<Scalars['String']>;
  Status_gte?: Maybe<Scalars['String']>;
  HomeScore_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  SportName_gte?: Maybe<Scalars['String']>;
  HomeTeamName_gte?: Maybe<Scalars['String']>;
  Latitude_exists?: Maybe<Scalars['Boolean']>;
  GradeName_lte?: Maybe<Scalars['String']>;
  MatchSummary?: Maybe<Scalars['String']>;
  LocationLng_lte?: Maybe<Scalars['Int']>;
  Provider_gt?: Maybe<Scalars['Int']>;
  AwayTeamId_gt?: Maybe<Scalars['String']>;
  SportId?: Maybe<Scalars['String']>;
  AwayScore_gte?: Maybe<Scalars['String']>;
  HomeScore_gte?: Maybe<Scalars['String']>;
  HomeScore_exists?: Maybe<Scalars['Boolean']>;
  HomeTeamName?: Maybe<Scalars['String']>;
  competitionId_gt?: Maybe<Scalars['String']>;
  LocationLng_in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  Longitude?: Maybe<Scalars['String']>;
  LocationLat_lte?: Maybe<Scalars['Int']>;
  Round_nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  _id_gte?: Maybe<Scalars['ObjectId']>;
  VenueNameAbbr_ne?: Maybe<Scalars['String']>;
  SectionId_in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  GradeId_nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  _id_lt?: Maybe<Scalars['ObjectId']>;
  GradeId_lt?: Maybe<Scalars['String']>;
  ResultStatus_in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  AwayOrganisationLogo_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  LocationLat_gte?: Maybe<Scalars['Int']>;
  competitionId_gte?: Maybe<Scalars['String']>;
  competitionId?: Maybe<Scalars['String']>;
  matchDay_gte?: Maybe<Scalars['Int']>;
  competitionId_exists?: Maybe<Scalars['Boolean']>;
  competitionId_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  HomeTeamId_lte?: Maybe<Scalars['String']>;
  From_lt?: Maybe<Scalars['String']>;
  To_lt?: Maybe<Scalars['String']>;
  Date_gte?: Maybe<Scalars['String']>;
  VenueName_lt?: Maybe<Scalars['String']>;
  Round_gte?: Maybe<Scalars['String']>;
  GradeSortOrder_lte?: Maybe<Scalars['Int']>;
  matchDay_in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  To_lte?: Maybe<Scalars['String']>;
  VenueName_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  To?: Maybe<Scalars['String']>;
  Id?: Maybe<Scalars['String']>;
  GradeName_lt?: Maybe<Scalars['String']>;
  MatchSummary_ne?: Maybe<Scalars['String']>;
  SportId_nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  Date_gt?: Maybe<Scalars['String']>;
  HomeTeamName_lte?: Maybe<Scalars['String']>;
  InGame_ne?: Maybe<Scalars['Boolean']>;
  SectionId?: Maybe<Scalars['Int']>;
  GradeId?: Maybe<Scalars['String']>;
  Date_nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  Address_ne?: Maybe<Scalars['String']>;
  PublishVenue_exists?: Maybe<Scalars['Boolean']>;
  VenueNameAbbr_nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  GradeId_ne?: Maybe<Scalars['String']>;
  AwayTeamId_gte?: Maybe<Scalars['String']>;
  HomeScore_lt?: Maybe<Scalars['String']>;
  GradeSortOrder_ne?: Maybe<Scalars['Int']>;
  Date_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  AwayOrganisationName_lte?: Maybe<Scalars['String']>;
  OR?: Maybe<Array<FixtureQueryInput>>;
  AwayTeamId_exists?: Maybe<Scalars['Boolean']>;
  From_ne?: Maybe<Scalars['String']>;
  Date_lte?: Maybe<Scalars['String']>;
  SportName?: Maybe<Scalars['String']>;
  matchDay_lte?: Maybe<Scalars['Int']>;
  Latitude_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  SectionId_gt?: Maybe<Scalars['Int']>;
  From_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  AwayOrganisationId_nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  HomeOrganisationName?: Maybe<Scalars['String']>;
  HomeOrganisationName_lte?: Maybe<Scalars['String']>;
  HomeOrganisationId_gt?: Maybe<Scalars['String']>;
  ResultStatus?: Maybe<Scalars['Int']>;
  GradeName_exists?: Maybe<Scalars['Boolean']>;
  HomeTeamName_exists?: Maybe<Scalars['Boolean']>;
  Address_lt?: Maybe<Scalars['String']>;
  From_gte?: Maybe<Scalars['String']>;
  AND?: Maybe<Array<FixtureQueryInput>>;
  Date_exists?: Maybe<Scalars['Boolean']>;
  Status_lte?: Maybe<Scalars['String']>;
  Longitude_exists?: Maybe<Scalars['Boolean']>;
  HomeOrganisationLogo_gt?: Maybe<Scalars['String']>;
  GradeId_lte?: Maybe<Scalars['String']>;
  AwayScore_ne?: Maybe<Scalars['String']>;
  GradeName_ne?: Maybe<Scalars['String']>;
  Id_gt?: Maybe<Scalars['String']>;
  Latitude?: Maybe<Scalars['String']>;
  AwayScore_lt?: Maybe<Scalars['String']>;
  Provider_nin?: Maybe<Array<Maybe<Scalars['Int']>>>;
  VenueName_gte?: Maybe<Scalars['String']>;
  RoundName_ne?: Maybe<Scalars['String']>;
  SectionId_nin?: Maybe<Array<Maybe<Scalars['Int']>>>;
  SportId_gt?: Maybe<Scalars['String']>;
  AwayOrganisationName_lt?: Maybe<Scalars['String']>;
  LocationLng?: Maybe<Scalars['Int']>;
  Provider_lte?: Maybe<Scalars['Int']>;
  AwayOrganisationId_gt?: Maybe<Scalars['String']>;
  SportName_nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  matchDay_nin?: Maybe<Array<Maybe<Scalars['Int']>>>;
  Longitude_ne?: Maybe<Scalars['String']>;
  AwayScore_gt?: Maybe<Scalars['String']>;
  AwayScore?: Maybe<Scalars['String']>;
  VenueName_gt?: Maybe<Scalars['String']>;
  IsSuperForm_ne?: Maybe<Scalars['Boolean']>;
  SectionSortOrder_nin?: Maybe<Array<Maybe<Scalars['Int']>>>;
  Provider?: Maybe<Scalars['Int']>;
  To_gte?: Maybe<Scalars['String']>;
  AwayOrganisationName?: Maybe<Scalars['String']>;
  VenueName_ne?: Maybe<Scalars['String']>;
  LocationLat_gt?: Maybe<Scalars['Int']>;
  Id_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  SectionSortOrder_in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  HomeOrganisationName_ne?: Maybe<Scalars['String']>;
  HomeOrganisationId?: Maybe<Scalars['String']>;
  HomeOrganisationLogo_ne?: Maybe<Scalars['String']>;
  HomeTeamId?: Maybe<Scalars['String']>;
  LocationLng_nin?: Maybe<Array<Maybe<Scalars['Int']>>>;
  VenueNameAbbr_exists?: Maybe<Scalars['Boolean']>;
  AwayOrganisationId_gte?: Maybe<Scalars['String']>;
  ResultStatus_ne?: Maybe<Scalars['Int']>;
  SportName_exists?: Maybe<Scalars['Boolean']>;
  RoundName_lt?: Maybe<Scalars['String']>;
  AwayScore_exists?: Maybe<Scalars['Boolean']>;
  _id_gt?: Maybe<Scalars['ObjectId']>;
  InGame_exists?: Maybe<Scalars['Boolean']>;
  HomeTeamName_gt?: Maybe<Scalars['String']>;
  AwayTeamName_gte?: Maybe<Scalars['String']>;
  AwayTeamName_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  LocationLat?: Maybe<Scalars['Int']>;
  Address_nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  Latitude_lt?: Maybe<Scalars['String']>;
  Round?: Maybe<Scalars['String']>;
  AwayOrganisationId_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  Latitude_gte?: Maybe<Scalars['String']>;
  HomeTeamName_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  HomeOrganisationLogo_exists?: Maybe<Scalars['Boolean']>;
  Longitude_lte?: Maybe<Scalars['String']>;
  SportName_gt?: Maybe<Scalars['String']>;
  Longitude_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  VenueName_exists?: Maybe<Scalars['Boolean']>;
  SportId_lt?: Maybe<Scalars['String']>;
  Status_nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  _id?: Maybe<Scalars['ObjectId']>;
  HomeOrganisationLogo_nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  Round_gt?: Maybe<Scalars['String']>;
  ResultStatus_lte?: Maybe<Scalars['Int']>;
  To_exists?: Maybe<Scalars['Boolean']>;
  LocationLat_lt?: Maybe<Scalars['Int']>;
  HomeScore_gt?: Maybe<Scalars['String']>;
  MatchSummary_lt?: Maybe<Scalars['String']>;
  Round_exists?: Maybe<Scalars['Boolean']>;
  Address_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  HomeOrganisationName_gt?: Maybe<Scalars['String']>;
  HomeTeamName_nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  AwayScore_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  HomeOrganisationName_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  Id_nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  HomeTeamName_lt?: Maybe<Scalars['String']>;
  RoundName_gt?: Maybe<Scalars['String']>;
  AwayTeamName?: Maybe<Scalars['String']>;
  ResultStatus_lt?: Maybe<Scalars['Int']>;
  _id_exists?: Maybe<Scalars['Boolean']>;
  HomeOrganisationId_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  Latitude_lte?: Maybe<Scalars['String']>;
  HomeOrganisationLogo_gte?: Maybe<Scalars['String']>;
  HomeOrganisationId_exists?: Maybe<Scalars['Boolean']>;
  HomeOrganisationId_lte?: Maybe<Scalars['String']>;
  SportName_lt?: Maybe<Scalars['String']>;
  Status_gt?: Maybe<Scalars['String']>;
  ResultStatus_gte?: Maybe<Scalars['Int']>;
  HomeOrganisationName_gte?: Maybe<Scalars['String']>;
  HomeTeamId_gte?: Maybe<Scalars['String']>;
  Longitude_lt?: Maybe<Scalars['String']>;
  Provider_ne?: Maybe<Scalars['Int']>;
  AwayTeamName_ne?: Maybe<Scalars['String']>;
  SectionSortOrder_exists?: Maybe<Scalars['Boolean']>;
  GradeSortOrder_exists?: Maybe<Scalars['Boolean']>;
  From_nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  AwayScore_nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  VenueNameAbbr_lt?: Maybe<Scalars['String']>;
  RoundName_lte?: Maybe<Scalars['String']>;
  HomeTeamId_exists?: Maybe<Scalars['Boolean']>;
  HomeOrganisationId_nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  AwayOrganisationName_ne?: Maybe<Scalars['String']>;
  Longitude_nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  HomeTeamName_ne?: Maybe<Scalars['String']>;
  Address_gt?: Maybe<Scalars['String']>;
  AwayOrganisationLogo_ne?: Maybe<Scalars['String']>;
  Round_lte?: Maybe<Scalars['String']>;
  competitionId_lte?: Maybe<Scalars['String']>;
  MatchSummary_nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  VenueNameAbbr_gte?: Maybe<Scalars['String']>;
  competitionId_nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  HomeScore_ne?: Maybe<Scalars['String']>;
  PublishResults_ne?: Maybe<Scalars['Boolean']>;
  GradeId_gt?: Maybe<Scalars['String']>;
  matchDay_exists?: Maybe<Scalars['Boolean']>;
  AwayOrganisationName_gt?: Maybe<Scalars['String']>;
  SportName_lte?: Maybe<Scalars['String']>;
  Address_exists?: Maybe<Scalars['Boolean']>;
  AwayOrganisationName_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  HomeOrganisationLogo_lte?: Maybe<Scalars['String']>;
  AwayTeamId_nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  GradeSortOrder_gte?: Maybe<Scalars['Int']>;
  SportId_gte?: Maybe<Scalars['String']>;
  MatchSummary_gt?: Maybe<Scalars['String']>;
  HomeScore_lte?: Maybe<Scalars['String']>;
  AwayOrganisationLogo_gt?: Maybe<Scalars['String']>;
  PublishTeamsheetOnWidget?: Maybe<Scalars['Boolean']>;
  Address_lte?: Maybe<Scalars['String']>;
  From_exists?: Maybe<Scalars['Boolean']>;
  AwayTeamName_nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  HomeOrganisationName_exists?: Maybe<Scalars['Boolean']>;
  Latitude_gt?: Maybe<Scalars['String']>;
  VenueNameAbbr_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  AwayOrganisationName_nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  HomeOrganisationLogo?: Maybe<Scalars['String']>;
  _id_nin?: Maybe<Array<Maybe<Scalars['ObjectId']>>>;
  Latitude_ne?: Maybe<Scalars['String']>;
  LocationLng_gt?: Maybe<Scalars['Int']>;
  PublishVenue_ne?: Maybe<Scalars['Boolean']>;
  Provider_in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  SectionSortOrder_gt?: Maybe<Scalars['Int']>;
  HomeOrganisationId_gte?: Maybe<Scalars['String']>;
  RoundName_exists?: Maybe<Scalars['Boolean']>;
  AwayOrganisationId_lte?: Maybe<Scalars['String']>;
  Id_lt?: Maybe<Scalars['String']>;
  GradeName_nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  HomeScore?: Maybe<Scalars['String']>;
  AwayOrganisationLogo?: Maybe<Scalars['String']>;
  GradeSortOrder_nin?: Maybe<Array<Maybe<Scalars['Int']>>>;
  GradeId_exists?: Maybe<Scalars['Boolean']>;
  Date_ne?: Maybe<Scalars['String']>;
  SectionSortOrder_ne?: Maybe<Scalars['Int']>;
  To_gt?: Maybe<Scalars['String']>;
  MatchSummary_gte?: Maybe<Scalars['String']>;
  GradeSortOrder_gt?: Maybe<Scalars['Int']>;
  HomeOrganisationName_lt?: Maybe<Scalars['String']>;
  Date_lt?: Maybe<Scalars['String']>;
  AwayTeamName_gt?: Maybe<Scalars['String']>;
  From_gt?: Maybe<Scalars['String']>;
  Round_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  matchDay_gt?: Maybe<Scalars['Int']>;
  VenueNameAbbr_gt?: Maybe<Scalars['String']>;
  AwayScore_lte?: Maybe<Scalars['String']>;
  Address?: Maybe<Scalars['String']>;
  VenueNameAbbr?: Maybe<Scalars['String']>;
  SectionId_lt?: Maybe<Scalars['Int']>;
  SportName_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  SectionId_lte?: Maybe<Scalars['Int']>;
  GradeSortOrder_lt?: Maybe<Scalars['Int']>;
  ResultStatus_gt?: Maybe<Scalars['Int']>;
  LocationLat_ne?: Maybe<Scalars['Int']>;
  From_lte?: Maybe<Scalars['String']>;
  GradeSortOrder?: Maybe<Scalars['Int']>;
  Status_exists?: Maybe<Scalars['Boolean']>;
  PublishResults_exists?: Maybe<Scalars['Boolean']>;
  HomeOrganisationLogo_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  AwayTeamId_lte?: Maybe<Scalars['String']>;
  GradeName?: Maybe<Scalars['String']>;
  SportId_lte?: Maybe<Scalars['String']>;
  Date?: Maybe<Scalars['String']>;
  HomeTeamId_lt?: Maybe<Scalars['String']>;
  competitionId_lt?: Maybe<Scalars['String']>;
  LocationLng_exists?: Maybe<Scalars['Boolean']>;
  GradeName_gt?: Maybe<Scalars['String']>;
  SportName_ne?: Maybe<Scalars['String']>;
  AwayTeamName_lte?: Maybe<Scalars['String']>;
  GradeName_gte?: Maybe<Scalars['String']>;
  Id_exists?: Maybe<Scalars['Boolean']>;
  HomeTeamId_ne?: Maybe<Scalars['String']>;
  Longitude_gt?: Maybe<Scalars['String']>;
  IsSuperForm_exists?: Maybe<Scalars['Boolean']>;
  HomeOrganisationName_nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  Longitude_gte?: Maybe<Scalars['String']>;
  VenueName_lte?: Maybe<Scalars['String']>;
  VenueName_nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  AwayOrganisationId_exists?: Maybe<Scalars['Boolean']>;
  HomeTeamId_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  MatchSummary_exists?: Maybe<Scalars['Boolean']>;
  GradeId_gte?: Maybe<Scalars['String']>;
  AwayTeamId_ne?: Maybe<Scalars['String']>;
  SportId_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  VenueNameAbbr_lte?: Maybe<Scalars['String']>;
  AwayOrganisationLogo_exists?: Maybe<Scalars['Boolean']>;
  Id_lte?: Maybe<Scalars['String']>;
  _id_lte?: Maybe<Scalars['ObjectId']>;
  Id_ne?: Maybe<Scalars['String']>;
  SportId_ne?: Maybe<Scalars['String']>;
  To_nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  Provider_exists?: Maybe<Scalars['Boolean']>;
  matchDay_ne?: Maybe<Scalars['Int']>;
  PublishTeamsheetOnWidget_exists?: Maybe<Scalars['Boolean']>;
  Status_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  GradeSortOrder_in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  To_ne?: Maybe<Scalars['String']>;
  SectionSortOrder_lte?: Maybe<Scalars['Int']>;
  PublishTeamsheetOnWidget_ne?: Maybe<Scalars['Boolean']>;
  Provider_gte?: Maybe<Scalars['Int']>;
  PublishResults?: Maybe<Scalars['Boolean']>;
  competitionId_ne?: Maybe<Scalars['String']>;
  AwayTeamName_lt?: Maybe<Scalars['String']>;
  Latitude_nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  Status?: Maybe<Scalars['String']>;
  AwayOrganisationLogo_lte?: Maybe<Scalars['String']>;
  AwayOrganisationId_ne?: Maybe<Scalars['String']>;
  RoundName?: Maybe<Scalars['String']>;
  matchDay?: Maybe<Scalars['Int']>;
  GradeName_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  PublishVenue?: Maybe<Scalars['Boolean']>;
  HomeTeamId_nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  LocationLng_lt?: Maybe<Scalars['Int']>;
  RoundName_gte?: Maybe<Scalars['String']>;
  LocationLat_nin?: Maybe<Array<Maybe<Scalars['Int']>>>;
  AwayOrganisationId?: Maybe<Scalars['String']>;
  Round_ne?: Maybe<Scalars['String']>;
  AwayTeamId_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  AwayTeamId_lt?: Maybe<Scalars['String']>;
  RoundName_nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  LocationLng_ne?: Maybe<Scalars['Int']>;
  Address_gte?: Maybe<Scalars['String']>;
  ResultStatus_exists?: Maybe<Scalars['Boolean']>;
};

export enum FixtureSortByInput {
  SPORTID_DESC = 'SPORTID_DESC',
  SECTIONSORTORDER_ASC = 'SECTIONSORTORDER_ASC',
  HOMEORGANISATIONLOGO_DESC = 'HOMEORGANISATIONLOGO_DESC',
  MATCHSUMMARY_DESC = 'MATCHSUMMARY_DESC',
  SPORTID_ASC = 'SPORTID_ASC',
  ADDRESS_ASC = 'ADDRESS_ASC',
  ADDRESS_DESC = 'ADDRESS_DESC',
  TO_ASC = 'TO_ASC',
  ID_DESC = 'ID_DESC',
  AWAYTEAMID_DESC = 'AWAYTEAMID_DESC',
  HOMEORGANISATIONID_DESC = 'HOMEORGANISATIONID_DESC',
  PROVIDER_ASC = 'PROVIDER_ASC',
  ID_ASC = 'ID_ASC',
  SPORTNAME_DESC = 'SPORTNAME_DESC',
  AWAYSCORE_DESC = 'AWAYSCORE_DESC',
  AWAYTEAMID_ASC = 'AWAYTEAMID_ASC',
  HOMETEAMNAME_DESC = 'HOMETEAMNAME_DESC',
  COMPETITIONID_ASC = 'COMPETITIONID_ASC',
  DATE_ASC = 'DATE_ASC',
  GRADENAME_ASC = 'GRADENAME_ASC',
  _ID_DESC = '_ID_DESC',
  LOCATIONLNG_DESC = 'LOCATIONLNG_DESC',
  AWAYORGANISATIONNAME_DESC = 'AWAYORGANISATIONNAME_DESC',
  TO_DESC = 'TO_DESC',
  GRADESORTORDER_ASC = 'GRADESORTORDER_ASC',
  _ID_ASC = '_ID_ASC',
  AWAYTEAMNAME_DESC = 'AWAYTEAMNAME_DESC',
  HOMEORGANISATIONID_ASC = 'HOMEORGANISATIONID_ASC',
  HOMETEAMID_DESC = 'HOMETEAMID_DESC',
  SPORTNAME_ASC = 'SPORTNAME_ASC',
  HOMESCORE_ASC = 'HOMESCORE_ASC',
  AWAYORGANISATIONLOGO_DESC = 'AWAYORGANISATIONLOGO_DESC',
  GRADENAME_DESC = 'GRADENAME_DESC',
  LATITUDE_ASC = 'LATITUDE_ASC',
  ROUND_ASC = 'ROUND_ASC',
  VENUENAME_ASC = 'VENUENAME_ASC',
  LOCATIONLAT_DESC = 'LOCATIONLAT_DESC',
  SECTIONID_DESC = 'SECTIONID_DESC',
  FROM_ASC = 'FROM_ASC',
  GRADESORTORDER_DESC = 'GRADESORTORDER_DESC',
  ROUND_DESC = 'ROUND_DESC',
  LOCATIONLAT_ASC = 'LOCATIONLAT_ASC',
  RESULTSTATUS_ASC = 'RESULTSTATUS_ASC',
  AWAYORGANISATIONID_ASC = 'AWAYORGANISATIONID_ASC',
  HOMEORGANISATIONNAME_ASC = 'HOMEORGANISATIONNAME_ASC',
  MATCHSUMMARY_ASC = 'MATCHSUMMARY_ASC',
  SECTIONID_ASC = 'SECTIONID_ASC',
  AWAYORGANISATIONID_DESC = 'AWAYORGANISATIONID_DESC',
  AWAYORGANISATIONNAME_ASC = 'AWAYORGANISATIONNAME_ASC',
  MATCHDAY_DESC = 'MATCHDAY_DESC',
  AWAYSCORE_ASC = 'AWAYSCORE_ASC',
  FROM_DESC = 'FROM_DESC',
  HOMEORGANISATIONNAME_DESC = 'HOMEORGANISATIONNAME_DESC',
  HOMETEAMID_ASC = 'HOMETEAMID_ASC',
  AWAYTEAMNAME_ASC = 'AWAYTEAMNAME_ASC',
  LATITUDE_DESC = 'LATITUDE_DESC',
  ROUNDNAME_ASC = 'ROUNDNAME_ASC',
  ROUNDNAME_DESC = 'ROUNDNAME_DESC',
  LOCATIONLNG_ASC = 'LOCATIONLNG_ASC',
  VENUENAMEABBR_DESC = 'VENUENAMEABBR_DESC',
  DATE_DESC = 'DATE_DESC',
  LONGITUDE_DESC = 'LONGITUDE_DESC',
  HOMEORGANISATIONLOGO_ASC = 'HOMEORGANISATIONLOGO_ASC',
  HOMETEAMNAME_ASC = 'HOMETEAMNAME_ASC',
  PROVIDER_DESC = 'PROVIDER_DESC',
  VENUENAMEABBR_ASC = 'VENUENAMEABBR_ASC',
  AWAYORGANISATIONLOGO_ASC = 'AWAYORGANISATIONLOGO_ASC',
  HOMESCORE_DESC = 'HOMESCORE_DESC',
  VENUENAME_DESC = 'VENUENAME_DESC',
  MATCHDAY_ASC = 'MATCHDAY_ASC',
  GRADEID_ASC = 'GRADEID_ASC',
  RESULTSTATUS_DESC = 'RESULTSTATUS_DESC',
  COMPETITIONID_DESC = 'COMPETITIONID_DESC',
  SECTIONSORTORDER_DESC = 'SECTIONSORTORDER_DESC',
  LONGITUDE_ASC = 'LONGITUDE_ASC',
  STATUS_ASC = 'STATUS_ASC',
  STATUS_DESC = 'STATUS_DESC',
  GRADEID_DESC = 'GRADEID_DESC',
}

export type FixtureUpdateInput = {
  AwayTeamName?: Maybe<Scalars['String']>;
  matchDay_unset?: Maybe<Scalars['Boolean']>;
  HomeScore_unset?: Maybe<Scalars['Boolean']>;
  SectionId_unset?: Maybe<Scalars['Boolean']>;
  AwayScore_unset?: Maybe<Scalars['Boolean']>;
  HomeOrganisationId_unset?: Maybe<Scalars['Boolean']>;
  MatchSummary_unset?: Maybe<Scalars['Boolean']>;
  LocationLng_inc?: Maybe<Scalars['Int']>;
  GradeName?: Maybe<Scalars['String']>;
  ResultStatus?: Maybe<Scalars['Int']>;
  To_unset?: Maybe<Scalars['Boolean']>;
  _id_unset?: Maybe<Scalars['Boolean']>;
  PublishResults_unset?: Maybe<Scalars['Boolean']>;
  HomeTeamName?: Maybe<Scalars['String']>;
  LocationLng?: Maybe<Scalars['Int']>;
  PublishTeamsheetOnWidget_unset?: Maybe<Scalars['Boolean']>;
  SportName?: Maybe<Scalars['String']>;
  AwayOrganisationLogo_unset?: Maybe<Scalars['Boolean']>;
  IsSuperForm?: Maybe<Scalars['Boolean']>;
  GradeId?: Maybe<Scalars['String']>;
  LocationLat_inc?: Maybe<Scalars['Int']>;
  AwayOrganisationName_unset?: Maybe<Scalars['Boolean']>;
  SportId?: Maybe<Scalars['String']>;
  Round_unset?: Maybe<Scalars['Boolean']>;
  VenueName_unset?: Maybe<Scalars['Boolean']>;
  AwayOrganisationId_unset?: Maybe<Scalars['Boolean']>;
  InGame_unset?: Maybe<Scalars['Boolean']>;
  RoundName?: Maybe<Scalars['String']>;
  HomeOrganisationLogo_unset?: Maybe<Scalars['Boolean']>;
  HomeOrganisationName?: Maybe<Scalars['String']>;
  PublishVenue?: Maybe<Scalars['Boolean']>;
  LocationLat?: Maybe<Scalars['Int']>;
  Longitude?: Maybe<Scalars['String']>;
  Round?: Maybe<Scalars['String']>;
  HomeTeamName_unset?: Maybe<Scalars['Boolean']>;
  HomeOrganisationName_unset?: Maybe<Scalars['Boolean']>;
  From_unset?: Maybe<Scalars['Boolean']>;
  AwayTeamId?: Maybe<Scalars['String']>;
  HomeOrganisationLogo?: Maybe<Scalars['String']>;
  Provider?: Maybe<Scalars['Int']>;
  ResultStatus_inc?: Maybe<Scalars['Int']>;
  PublishTeamsheetOnWidget?: Maybe<Scalars['Boolean']>;
  matchDay?: Maybe<Scalars['Int']>;
  matchDay_inc?: Maybe<Scalars['Int']>;
  SectionSortOrder?: Maybe<Scalars['Int']>;
  SectionId?: Maybe<Scalars['Int']>;
  Provider_unset?: Maybe<Scalars['Boolean']>;
  AwayTeamName_unset?: Maybe<Scalars['Boolean']>;
  PublishResults?: Maybe<Scalars['Boolean']>;
  Latitude?: Maybe<Scalars['String']>;
  AwayOrganisationId?: Maybe<Scalars['String']>;
  From?: Maybe<Scalars['String']>;
  ResultStatus_unset?: Maybe<Scalars['Boolean']>;
  SportName_unset?: Maybe<Scalars['Boolean']>;
  SportId_unset?: Maybe<Scalars['Boolean']>;
  InGame?: Maybe<Scalars['Boolean']>;
  HomeScore?: Maybe<Scalars['String']>;
  competitionId?: Maybe<Scalars['String']>;
  GradeSortOrder_unset?: Maybe<Scalars['Boolean']>;
  _id?: Maybe<Scalars['ObjectId']>;
  HomeOrganisationId?: Maybe<Scalars['String']>;
  PublishVenue_unset?: Maybe<Scalars['Boolean']>;
  Id?: Maybe<Scalars['String']>;
  GradeName_unset?: Maybe<Scalars['Boolean']>;
  Date?: Maybe<Scalars['String']>;
  HomeTeamId_unset?: Maybe<Scalars['Boolean']>;
  HomeTeamId?: Maybe<Scalars['String']>;
  SectionSortOrder_inc?: Maybe<Scalars['Int']>;
  competitionId_unset?: Maybe<Scalars['Boolean']>;
  IsSuperForm_unset?: Maybe<Scalars['Boolean']>;
  Status?: Maybe<Scalars['String']>;
  VenueNameAbbr?: Maybe<Scalars['String']>;
  GradeId_unset?: Maybe<Scalars['Boolean']>;
  MatchSummary?: Maybe<Scalars['String']>;
  Longitude_unset?: Maybe<Scalars['Boolean']>;
  Address?: Maybe<Scalars['String']>;
  LocationLng_unset?: Maybe<Scalars['Boolean']>;
  RoundName_unset?: Maybe<Scalars['Boolean']>;
  GradeSortOrder_inc?: Maybe<Scalars['Int']>;
  LocationLat_unset?: Maybe<Scalars['Boolean']>;
  SectionId_inc?: Maybe<Scalars['Int']>;
  To?: Maybe<Scalars['String']>;
  Latitude_unset?: Maybe<Scalars['Boolean']>;
  Date_unset?: Maybe<Scalars['Boolean']>;
  Provider_inc?: Maybe<Scalars['Int']>;
  Address_unset?: Maybe<Scalars['Boolean']>;
  GradeSortOrder?: Maybe<Scalars['Int']>;
  AwayOrganisationName?: Maybe<Scalars['String']>;
  Status_unset?: Maybe<Scalars['Boolean']>;
  VenueNameAbbr_unset?: Maybe<Scalars['Boolean']>;
  VenueName?: Maybe<Scalars['String']>;
  Id_unset?: Maybe<Scalars['Boolean']>;
  AwayTeamId_unset?: Maybe<Scalars['Boolean']>;
  AwayOrganisationLogo?: Maybe<Scalars['String']>;
  SectionSortOrder_unset?: Maybe<Scalars['Boolean']>;
  AwayScore?: Maybe<Scalars['String']>;
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
  _id?: Maybe<Scalars['ObjectId']>;
  address?: Maybe<Scalars['String']>;
  fixtures?: Maybe<Array<Maybe<Scalars['String']>>>;
  homeTeams?: Maybe<Array<Maybe<Scalars['String']>>>;
  lat?: Maybe<Scalars['String']>;
  lon?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

export type GroundQueryInput = {
  _id_lte?: Maybe<Scalars['ObjectId']>;
  address_lte?: Maybe<Scalars['String']>;
  _id_exists?: Maybe<Scalars['Boolean']>;
  address_gte?: Maybe<Scalars['String']>;
  lon_nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  _id_gte?: Maybe<Scalars['ObjectId']>;
  lon_gt?: Maybe<Scalars['String']>;
  homeTeams_exists?: Maybe<Scalars['Boolean']>;
  lat_lt?: Maybe<Scalars['String']>;
  address_exists?: Maybe<Scalars['Boolean']>;
  lon_lte?: Maybe<Scalars['String']>;
  name_nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  _id?: Maybe<Scalars['ObjectId']>;
  _id_lt?: Maybe<Scalars['ObjectId']>;
  address_nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  address_lt?: Maybe<Scalars['String']>;
  lon_ne?: Maybe<Scalars['String']>;
  lat_exists?: Maybe<Scalars['Boolean']>;
  homeTeams?: Maybe<Array<Maybe<Scalars['String']>>>;
  lon_exists?: Maybe<Scalars['Boolean']>;
  fixtures_nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  lat_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  lon_gte?: Maybe<Scalars['String']>;
  lon?: Maybe<Scalars['String']>;
  lat_ne?: Maybe<Scalars['String']>;
  _id_nin?: Maybe<Array<Maybe<Scalars['ObjectId']>>>;
  OR?: Maybe<Array<GroundQueryInput>>;
  lon_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  AND?: Maybe<Array<GroundQueryInput>>;
  name_gt?: Maybe<Scalars['String']>;
  name_lte?: Maybe<Scalars['String']>;
  fixtures_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  homeTeams_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  homeTeams_nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  _id_in?: Maybe<Array<Maybe<Scalars['ObjectId']>>>;
  lat_gte?: Maybe<Scalars['String']>;
  _id_ne?: Maybe<Scalars['ObjectId']>;
  lat_nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  name?: Maybe<Scalars['String']>;
  name_gte?: Maybe<Scalars['String']>;
  address?: Maybe<Scalars['String']>;
  lon_lt?: Maybe<Scalars['String']>;
  fixtures_exists?: Maybe<Scalars['Boolean']>;
  name_ne?: Maybe<Scalars['String']>;
  address_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  address_gt?: Maybe<Scalars['String']>;
  _id_gt?: Maybe<Scalars['ObjectId']>;
  lat?: Maybe<Scalars['String']>;
  lat_gt?: Maybe<Scalars['String']>;
  fixtures?: Maybe<Array<Maybe<Scalars['String']>>>;
  name_lt?: Maybe<Scalars['String']>;
  name_exists?: Maybe<Scalars['Boolean']>;
  lat_lte?: Maybe<Scalars['String']>;
  address_ne?: Maybe<Scalars['String']>;
  name_in?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export enum GroundSortByInput {
  LAT_DESC = 'LAT_DESC',
  _ID_DESC = '_ID_DESC',
  ADDRESS_ASC = 'ADDRESS_ASC',
  NAME_ASC = 'NAME_ASC',
  NAME_DESC = 'NAME_DESC',
  _ID_ASC = '_ID_ASC',
  ADDRESS_DESC = 'ADDRESS_DESC',
  LAT_ASC = 'LAT_ASC',
  LON_ASC = 'LON_ASC',
  LON_DESC = 'LON_DESC',
}

export type GroundUpdateInput = {
  _id?: Maybe<Scalars['ObjectId']>;
  lon_unset?: Maybe<Scalars['Boolean']>;
  lat_unset?: Maybe<Scalars['Boolean']>;
  fixtures_unset?: Maybe<Scalars['Boolean']>;
  name_unset?: Maybe<Scalars['Boolean']>;
  _id_unset?: Maybe<Scalars['Boolean']>;
  homeTeams?: Maybe<Array<Maybe<Scalars['String']>>>;
  name?: Maybe<Scalars['String']>;
  fixtures?: Maybe<Array<Maybe<Scalars['String']>>>;
  lon?: Maybe<Scalars['String']>;
  homeTeams_unset?: Maybe<Scalars['Boolean']>;
  address?: Maybe<Scalars['String']>;
  lat?: Maybe<Scalars['String']>;
  address_unset?: Maybe<Scalars['Boolean']>;
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
  query?: Maybe<GroundQueryInput>;
  data: GroundInsertInput;
};

export type MutationReplaceOneOrganisationArgs = {
  data: OrganisationInsertInput;
  query?: Maybe<OrganisationQueryInput>;
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
  query?: Maybe<FixtureQueryInput>;
  set: FixtureUpdateInput;
};

export type MutationUpdateManyGroundsArgs = {
  set: GroundUpdateInput;
  query?: Maybe<GroundQueryInput>;
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
  query?: Maybe<FixtureQueryInput>;
  set: FixtureUpdateInput;
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
  set: TeamUpdateInput;
  query?: Maybe<TeamQueryInput>;
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
  query?: Maybe<GroundQueryInput>;
  data: GroundInsertInput;
};

export type MutationUpsertOneOrganisationArgs = {
  query?: Maybe<OrganisationQueryInput>;
  data: OrganisationInsertInput;
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
  teamInfo?: Maybe<Array<Maybe<Team>>>;
  teams?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type OrganisationInsertInput = {
  _id?: Maybe<Scalars['ObjectId']>;
  teams?: Maybe<Array<Maybe<Scalars['String']>>>;
  Id?: Maybe<Scalars['String']>;
  Name?: Maybe<Scalars['String']>;
  Provider?: Maybe<Scalars['Int']>;
};

export type OrganisationQueryInput = {
  _id_lt?: Maybe<Scalars['ObjectId']>;
  _id_gte?: Maybe<Scalars['ObjectId']>;
  teams?: Maybe<Array<Maybe<Scalars['String']>>>;
  Provider_gt?: Maybe<Scalars['Int']>;
  Id?: Maybe<Scalars['String']>;
  Name_lt?: Maybe<Scalars['String']>;
  Id_lte?: Maybe<Scalars['String']>;
  Name?: Maybe<Scalars['String']>;
  OR?: Maybe<Array<OrganisationQueryInput>>;
  Id_nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  Provider_lt?: Maybe<Scalars['Int']>;
  Name_exists?: Maybe<Scalars['Boolean']>;
  teams_exists?: Maybe<Scalars['Boolean']>;
  _id_ne?: Maybe<Scalars['ObjectId']>;
  Provider_nin?: Maybe<Array<Maybe<Scalars['Int']>>>;
  Id_exists?: Maybe<Scalars['Boolean']>;
  Provider_in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  Name_ne?: Maybe<Scalars['String']>;
  _id_nin?: Maybe<Array<Maybe<Scalars['ObjectId']>>>;
  AND?: Maybe<Array<OrganisationQueryInput>>;
  Name_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  Name_nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  _id_exists?: Maybe<Scalars['Boolean']>;
  Id_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  Provider?: Maybe<Scalars['Int']>;
  Provider_ne?: Maybe<Scalars['Int']>;
  _id_lte?: Maybe<Scalars['ObjectId']>;
  _id_gt?: Maybe<Scalars['ObjectId']>;
  Provider_lte?: Maybe<Scalars['Int']>;
  Id_gt?: Maybe<Scalars['String']>;
  Name_gte?: Maybe<Scalars['String']>;
  Provider_exists?: Maybe<Scalars['Boolean']>;
  Id_ne?: Maybe<Scalars['String']>;
  _id?: Maybe<Scalars['ObjectId']>;
  _id_in?: Maybe<Array<Maybe<Scalars['ObjectId']>>>;
  teams_nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  Id_lt?: Maybe<Scalars['String']>;
  Provider_gte?: Maybe<Scalars['Int']>;
  Id_gte?: Maybe<Scalars['String']>;
  teams_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  Name_lte?: Maybe<Scalars['String']>;
  Name_gt?: Maybe<Scalars['String']>;
};

export enum OrganisationSortByInput {
  ID_DESC = 'ID_DESC',
  NAME_ASC = 'NAME_ASC',
  NAME_DESC = 'NAME_DESC',
  PROVIDER_ASC = 'PROVIDER_ASC',
  PROVIDER_DESC = 'PROVIDER_DESC',
  _ID_ASC = '_ID_ASC',
  _ID_DESC = '_ID_DESC',
  ID_ASC = 'ID_ASC',
}

export type OrganisationUpdateInput = {
  Name?: Maybe<Scalars['String']>;
  _id_unset?: Maybe<Scalars['Boolean']>;
  Id_unset?: Maybe<Scalars['Boolean']>;
  _id?: Maybe<Scalars['ObjectId']>;
  teams?: Maybe<Array<Maybe<Scalars['String']>>>;
  Name_unset?: Maybe<Scalars['Boolean']>;
  Provider?: Maybe<Scalars['Int']>;
  Provider_inc?: Maybe<Scalars['Int']>;
  Provider_unset?: Maybe<Scalars['Boolean']>;
  teams_unset?: Maybe<Scalars['Boolean']>;
  Id?: Maybe<Scalars['String']>;
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
  limit?: Maybe<Scalars['Int']>;
  sortBy?: Maybe<OrganisationSortByInput>;
  query?: Maybe<OrganisationQueryInput>;
};

export type QueryTeamArgs = {
  query?: Maybe<TeamQueryInput>;
};

export type QueryTeamsArgs = {
  query?: Maybe<TeamQueryInput>;
  limit?: Maybe<Scalars['Int']>;
  sortBy?: Maybe<TeamSortByInput>;
};

export type Team = {
  __typename?: 'Team';
  Id?: Maybe<Scalars['String']>;
  _id?: Maybe<Scalars['ObjectId']>;
  awayFixtures?: Maybe<Array<Maybe<Scalars['String']>>>;
  competitions?: Maybe<Array<Maybe<Competition>>>;
  fixtures?: Maybe<Array<Maybe<Scalars['String']>>>;
  homeFixtures?: Maybe<Array<Maybe<Scalars['String']>>>;
  homeGrounds?: Maybe<Array<Maybe<Scalars['String']>>>;
  name?: Maybe<Scalars['String']>;
  organisation?: Maybe<Scalars['String']>;
  organisationInfo?: Maybe<Organisation>;
};

export type TeamInsertInput = {
  competitions?: Maybe<Array<Maybe<Scalars['String']>>>;
  homeFixtures?: Maybe<Array<Maybe<Scalars['String']>>>;
  fixtures?: Maybe<Array<Maybe<Scalars['String']>>>;
  name?: Maybe<Scalars['String']>;
  _id?: Maybe<Scalars['ObjectId']>;
  organisation?: Maybe<Scalars['String']>;
  Id?: Maybe<Scalars['String']>;
  homeGrounds?: Maybe<Array<Maybe<Scalars['String']>>>;
  awayFixtures?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type TeamQueryInput = {
  Id_lt?: Maybe<Scalars['String']>;
  awayFixtures?: Maybe<Array<Maybe<Scalars['String']>>>;
  _id_ne?: Maybe<Scalars['ObjectId']>;
  Id_gt?: Maybe<Scalars['String']>;
  fixtures_exists?: Maybe<Scalars['Boolean']>;
  homeFixtures_exists?: Maybe<Scalars['Boolean']>;
  organisation_lte?: Maybe<Scalars['String']>;
  _id_gt?: Maybe<Scalars['ObjectId']>;
  _id_nin?: Maybe<Array<Maybe<Scalars['ObjectId']>>>;
  name_ne?: Maybe<Scalars['String']>;
  organisation_nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  homeFixtures_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  Id_nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  homeGrounds_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  competitions_exists?: Maybe<Scalars['Boolean']>;
  organisation_gt?: Maybe<Scalars['String']>;
  fixtures?: Maybe<Array<Maybe<Scalars['String']>>>;
  name_nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  organisation_gte?: Maybe<Scalars['String']>;
  competitions?: Maybe<Array<Maybe<Scalars['String']>>>;
  homeFixtures_nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  name_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  organisation?: Maybe<Scalars['String']>;
  name_exists?: Maybe<Scalars['Boolean']>;
  Id_lte?: Maybe<Scalars['String']>;
  fixtures_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  Id_exists?: Maybe<Scalars['Boolean']>;
  Id_ne?: Maybe<Scalars['String']>;
  AND?: Maybe<Array<TeamQueryInput>>;
  name_gt?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  homeGrounds?: Maybe<Array<Maybe<Scalars['String']>>>;
  awayFixtures_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  organisation_lt?: Maybe<Scalars['String']>;
  Id_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  fixtures_nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  homeFixtures?: Maybe<Array<Maybe<Scalars['String']>>>;
  _id_lt?: Maybe<Scalars['ObjectId']>;
  _id_in?: Maybe<Array<Maybe<Scalars['ObjectId']>>>;
  Id?: Maybe<Scalars['String']>;
  awayFixtures_nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  Id_gte?: Maybe<Scalars['String']>;
  name_gte?: Maybe<Scalars['String']>;
  _id_gte?: Maybe<Scalars['ObjectId']>;
  organisation_exists?: Maybe<Scalars['Boolean']>;
  organisation_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  organisation_ne?: Maybe<Scalars['String']>;
  competitions_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  _id_lte?: Maybe<Scalars['ObjectId']>;
  _id_exists?: Maybe<Scalars['Boolean']>;
  homeGrounds_nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  awayFixtures_exists?: Maybe<Scalars['Boolean']>;
  _id?: Maybe<Scalars['ObjectId']>;
  homeGrounds_exists?: Maybe<Scalars['Boolean']>;
  name_lt?: Maybe<Scalars['String']>;
  competitions_nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  OR?: Maybe<Array<TeamQueryInput>>;
  name_lte?: Maybe<Scalars['String']>;
};

export enum TeamSortByInput {
  _ID_ASC = '_ID_ASC',
  _ID_DESC = '_ID_DESC',
  NAME_ASC = 'NAME_ASC',
  NAME_DESC = 'NAME_DESC',
  ORGANISATION_ASC = 'ORGANISATION_ASC',
  ORGANISATION_DESC = 'ORGANISATION_DESC',
  ID_ASC = 'ID_ASC',
  ID_DESC = 'ID_DESC',
}

export type TeamUpdateInput = {
  homeGrounds_unset?: Maybe<Scalars['Boolean']>;
  awayFixtures_unset?: Maybe<Scalars['Boolean']>;
  name?: Maybe<Scalars['String']>;
  Id_unset?: Maybe<Scalars['Boolean']>;
  homeFixtures_unset?: Maybe<Scalars['Boolean']>;
  homeFixtures?: Maybe<Array<Maybe<Scalars['String']>>>;
  organisation?: Maybe<Scalars['String']>;
  organisation_unset?: Maybe<Scalars['Boolean']>;
  homeGrounds?: Maybe<Array<Maybe<Scalars['String']>>>;
  fixtures?: Maybe<Array<Maybe<Scalars['String']>>>;
  _id_unset?: Maybe<Scalars['Boolean']>;
  fixtures_unset?: Maybe<Scalars['Boolean']>;
  name_unset?: Maybe<Scalars['Boolean']>;
  competitions?: Maybe<Array<Maybe<Scalars['String']>>>;
  competitions_unset?: Maybe<Scalars['Boolean']>;
  Id?: Maybe<Scalars['String']>;
  awayFixtures?: Maybe<Array<Maybe<Scalars['String']>>>;
  _id?: Maybe<Scalars['ObjectId']>;
};

export type UpdateManyPayload = {
  __typename?: 'UpdateManyPayload';
  matchedCount: Scalars['Int'];
  modifiedCount: Scalars['Int'];
};

export type GetAllCompetitionsQueryVariables = Exact<{ [key: string]: never }>;

export type GetAllCompetitionsQuery = { __typename?: 'Query' } & {
  competitions: Array<
    Maybe<
      { __typename?: 'Competition' } & Pick<
        Competition,
        | 'Id'
        | 'Name'
        | 'OrganisationId'
        | 'Provider'
        | 'SeasonId'
        | 'SportId'
        | 'SportName'
        | '_id'
        | 'firstFixtureDate'
        | 'fixtures'
        | 'lastResultDate'
      > & {
          Grades?: Maybe<
            Array<
              Maybe<
                { __typename?: 'CompetitionGrade' } & Pick<
                  CompetitionGrade,
                  'Id'
                >
              >
            >
          >;
        }
    >
  >;
};

export type GetAllCompetitionsLiteQueryVariables = Exact<{
  [key: string]: never;
}>;

export type GetAllCompetitionsLiteQuery = { __typename?: 'Query' } & {
  competitions: Array<
    Maybe<
      { __typename?: 'Competition' } & Pick<
        Competition,
        | 'Id'
        | 'Name'
        | '_id'
        | 'firstFixtureDate'
        | 'fixtures'
        | 'lastResultDate'
      >
    >
  >;
};

export type GetCompetitionByIdQueryVariables = Exact<{
  Id: Scalars['String'];
}>;

export type GetCompetitionByIdQuery = { __typename?: 'Query' } & {
  competition?: Maybe<
    { __typename?: 'Competition' } & Pick<
      Competition,
      | 'Id'
      | 'Name'
      | 'OrganisationId'
      | 'Provider'
      | 'SeasonId'
      | 'SportId'
      | 'SportName'
      | '_id'
      | 'firstFixtureDate'
      | 'fixtures'
      | 'lastResultDate'
    > & {
        Grades?: Maybe<
          Array<
            Maybe<
              { __typename?: 'CompetitionGrade' } & Pick<CompetitionGrade, 'Id'>
            >
          >
        >;
      }
  >;
};

export type GetFixturesQueryVariables = Exact<{
  q?: Maybe<FixtureQueryInput>;
}>;

export type GetFixturesQuery = { __typename?: 'Query' } & {
  fixtures: Array<
    Maybe<
      { __typename?: 'Fixture' } & Pick<
        Fixture,
        | 'Address'
        | 'AwayOrganisationId'
        | 'AwayOrganisationLogo'
        | 'AwayOrganisationName'
        | 'AwayScore'
        | 'AwayTeamId'
        | 'AwayTeamName'
        | 'Date'
        | 'From'
        | 'GradeId'
        | 'GradeName'
        | 'GradeSortOrder'
        | 'HomeOrganisationId'
        | 'HomeOrganisationLogo'
        | 'HomeOrganisationName'
        | 'HomeScore'
        | 'HomeTeamId'
        | 'HomeTeamName'
        | 'Id'
        | 'InGame'
        | 'IsSuperForm'
        | 'Latitude'
        | 'LocationLat'
        | 'LocationLng'
        | 'Longitude'
        | 'MatchSummary'
        | 'Provider'
        | 'PublishResults'
        | 'PublishTeamsheetOnWidget'
        | 'PublishVenue'
        | 'ResultStatus'
        | 'Round'
        | 'RoundName'
        | 'SectionId'
        | 'SectionSortOrder'
        | 'SportId'
        | 'SportName'
        | 'Status'
        | 'To'
        | 'VenueName'
        | 'VenueNameAbbr'
        | '_id'
        | 'competitionId'
        | 'matchDay'
      >
    >
  >;
};

export type GetFixturesLiteQueryVariables = Exact<{
  q?: Maybe<FixtureQueryInput>;
}>;

export type GetFixturesLiteQuery = { __typename?: 'Query' } & {
  fixtures: Array<
    Maybe<
      { __typename?: 'Fixture' } & Pick<
        Fixture,
        | 'Address'
        | 'AwayOrganisationId'
        | 'AwayOrganisationLogo'
        | 'AwayScore'
        | 'AwayTeamId'
        | 'AwayTeamName'
        | 'Date'
        | 'HomeOrganisationId'
        | 'HomeOrganisationLogo'
        | 'HomeScore'
        | 'HomeTeamId'
        | 'HomeTeamName'
        | 'Id'
        | 'ResultStatus'
        | 'Round'
        | 'RoundName'
        | 'Status'
        | 'VenueName'
        | '_id'
        | 'competitionId'
        | 'matchDay'
      >
    >
  >;
};

export type GetAllTeamsLiteQueryVariables = Exact<{ [key: string]: never }>;

export type GetAllTeamsLiteQuery = { __typename?: 'Query' } & {
  teams: Array<
    Maybe<
      { __typename?: 'Team' } & Pick<Team, 'Id' | 'name'> & {
          competitions?: Maybe<
            Array<
              Maybe<{ __typename?: 'Competition' } & Pick<Competition, 'Name'>>
            >
          >;
        }
    >
  >;
};

export type GetTeamByIdQueryVariables = Exact<{
  Id: Scalars['String'];
}>;

export type GetTeamByIdQuery = { __typename?: 'Query' } & {
  team?: Maybe<
    { __typename?: 'Team' } & Pick<Team, 'Id' | 'name'> & {
        organisationInfo?: Maybe<
          { __typename?: 'Organisation' } & Pick<Organisation, 'Name'>
        >;
      }
  >;
};
