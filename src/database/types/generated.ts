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
  standings?: Maybe<Array<Maybe<CompetitionStanding>>>;
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
  IsPlayoff?: Maybe<Scalars['Boolean']>;
  NrdProvincialUnionId_in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  Order_nin?: Maybe<Array<Maybe<Scalars['Int']>>>;
  Id?: Maybe<Scalars['String']>;
  NrdProvincialUnionId_ne?: Maybe<Scalars['Int']>;
  NrdProvincialUnionId_gt?: Maybe<Scalars['Int']>;
  NrdProvincialUnionId_exists?: Maybe<Scalars['Boolean']>;
  Order_in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  NrdProvincialUnionId_lt?: Maybe<Scalars['Int']>;
  Order?: Maybe<Scalars['Int']>;
  Provider?: Maybe<Scalars['Int']>;
  NrdProvincialUnionId_lte?: Maybe<Scalars['Int']>;
  Order_lt?: Maybe<Scalars['Int']>;
  Id_exists?: Maybe<Scalars['Boolean']>;
  Provider_nin?: Maybe<Array<Maybe<Scalars['Int']>>>;
  Provider_gt?: Maybe<Scalars['Int']>;
  Id_lte?: Maybe<Scalars['String']>;
  NrdProvincialUnionId_nin?: Maybe<Array<Maybe<Scalars['Int']>>>;
  Order_gt?: Maybe<Scalars['Int']>;
  Provider_in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  Provider_gte?: Maybe<Scalars['Int']>;
  Provider_exists?: Maybe<Scalars['Boolean']>;
  Order_ne?: Maybe<Scalars['Int']>;
  Id_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  Id_nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  Id_ne?: Maybe<Scalars['String']>;
  Provider_ne?: Maybe<Scalars['Int']>;
  Provider_lte?: Maybe<Scalars['Int']>;
  AND?: Maybe<Array<CompetitionGradeQueryInput>>;
  Order_gte?: Maybe<Scalars['Int']>;
  Id_lt?: Maybe<Scalars['String']>;
  NrdProvincialUnionId_gte?: Maybe<Scalars['Int']>;
  IsPlayoff_ne?: Maybe<Scalars['Boolean']>;
  Id_gte?: Maybe<Scalars['String']>;
  Order_lte?: Maybe<Scalars['Int']>;
  IsPlayoff_exists?: Maybe<Scalars['Boolean']>;
  Provider_lt?: Maybe<Scalars['Int']>;
  Order_exists?: Maybe<Scalars['Boolean']>;
  NrdProvincialUnionId?: Maybe<Scalars['Int']>;
  OR?: Maybe<Array<CompetitionGradeQueryInput>>;
  Id_gt?: Maybe<Scalars['String']>;
};

export type CompetitionGradeUpdateInput = {
  Provider_inc?: Maybe<Scalars['Int']>;
  Provider_unset?: Maybe<Scalars['Boolean']>;
  NrdProvincialUnionId?: Maybe<Scalars['Int']>;
  Order?: Maybe<Scalars['Int']>;
  Provider?: Maybe<Scalars['Int']>;
  Id?: Maybe<Scalars['String']>;
  IsPlayoff_unset?: Maybe<Scalars['Boolean']>;
  NrdProvincialUnionId_inc?: Maybe<Scalars['Int']>;
  Id_unset?: Maybe<Scalars['Boolean']>;
  IsPlayoff?: Maybe<Scalars['Boolean']>;
  NrdProvincialUnionId_unset?: Maybe<Scalars['Boolean']>;
  Order_inc?: Maybe<Scalars['Int']>;
  Order_unset?: Maybe<Scalars['Boolean']>;
};

export type CompetitionInsertInput = {
  SportName?: Maybe<Scalars['String']>;
  _id?: Maybe<Scalars['ObjectId']>;
  fixtures?: Maybe<Array<Maybe<Scalars['String']>>>;
  Provider?: Maybe<Scalars['Int']>;
  lastResultDate?: Maybe<Scalars['String']>;
  SportId?: Maybe<Scalars['String']>;
  OrganisationId?: Maybe<Scalars['String']>;
  SeasonId?: Maybe<Scalars['String']>;
  standings?: Maybe<Array<Maybe<CompetitionStandingInsertInput>>>;
  Name?: Maybe<Scalars['String']>;
  Grades?: Maybe<Array<Maybe<CompetitionGradeInsertInput>>>;
  Id?: Maybe<Scalars['String']>;
  firstFixtureDate?: Maybe<Scalars['String']>;
};

export type CompetitionQueryInput = {
  SportId_ne?: Maybe<Scalars['String']>;
  SportName_gt?: Maybe<Scalars['String']>;
  standings_in?: Maybe<Array<Maybe<CompetitionStandingQueryInput>>>;
  SeasonId_exists?: Maybe<Scalars['Boolean']>;
  standings_nin?: Maybe<Array<Maybe<CompetitionStandingQueryInput>>>;
  OrganisationId?: Maybe<Scalars['String']>;
  Name?: Maybe<Scalars['String']>;
  Name_ne?: Maybe<Scalars['String']>;
  Provider_in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  Grades?: Maybe<Array<Maybe<CompetitionGradeQueryInput>>>;
  lastResultDate_lt?: Maybe<Scalars['String']>;
  _id_in?: Maybe<Array<Maybe<Scalars['ObjectId']>>>;
  SportId_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  OrganisationId_gt?: Maybe<Scalars['String']>;
  Grades_in?: Maybe<Array<Maybe<CompetitionGradeQueryInput>>>;
  firstFixtureDate_gte?: Maybe<Scalars['String']>;
  _id_gte?: Maybe<Scalars['ObjectId']>;
  fixtures?: Maybe<Array<Maybe<Scalars['String']>>>;
  _id?: Maybe<Scalars['ObjectId']>;
  OrganisationId_exists?: Maybe<Scalars['Boolean']>;
  _id_nin?: Maybe<Array<Maybe<Scalars['ObjectId']>>>;
  Id_lte?: Maybe<Scalars['String']>;
  firstFixtureDate_lt?: Maybe<Scalars['String']>;
  SportName_lt?: Maybe<Scalars['String']>;
  OrganisationId_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  SportId_gt?: Maybe<Scalars['String']>;
  Name_exists?: Maybe<Scalars['Boolean']>;
  Id_exists?: Maybe<Scalars['Boolean']>;
  Name_nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  Provider?: Maybe<Scalars['Int']>;
  OrganisationId_nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  Id_gte?: Maybe<Scalars['String']>;
  Id_gt?: Maybe<Scalars['String']>;
  OrganisationId_lt?: Maybe<Scalars['String']>;
  SeasonId?: Maybe<Scalars['String']>;
  SportId?: Maybe<Scalars['String']>;
  SportId_exists?: Maybe<Scalars['Boolean']>;
  Provider_lte?: Maybe<Scalars['Int']>;
  OrganisationId_ne?: Maybe<Scalars['String']>;
  OR?: Maybe<Array<CompetitionQueryInput>>;
  Id_ne?: Maybe<Scalars['String']>;
  Id_lt?: Maybe<Scalars['String']>;
  _id_ne?: Maybe<Scalars['ObjectId']>;
  SeasonId_nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  fixtures_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  Provider_exists?: Maybe<Scalars['Boolean']>;
  SeasonId_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  SeasonId_lte?: Maybe<Scalars['String']>;
  SeasonId_gt?: Maybe<Scalars['String']>;
  SportName_gte?: Maybe<Scalars['String']>;
  firstFixtureDate_exists?: Maybe<Scalars['Boolean']>;
  Name_lte?: Maybe<Scalars['String']>;
  SeasonId_gte?: Maybe<Scalars['String']>;
  firstFixtureDate_nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  lastResultDate_lte?: Maybe<Scalars['String']>;
  firstFixtureDate_lte?: Maybe<Scalars['String']>;
  SeasonId_ne?: Maybe<Scalars['String']>;
  firstFixtureDate_ne?: Maybe<Scalars['String']>;
  Provider_gt?: Maybe<Scalars['Int']>;
  firstFixtureDate_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  Id?: Maybe<Scalars['String']>;
  lastResultDate_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  Id_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  _id_lt?: Maybe<Scalars['ObjectId']>;
  lastResultDate_nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  SportId_lt?: Maybe<Scalars['String']>;
  _id_exists?: Maybe<Scalars['Boolean']>;
  fixtures_nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  lastResultDate_ne?: Maybe<Scalars['String']>;
  lastResultDate_gte?: Maybe<Scalars['String']>;
  SportId_lte?: Maybe<Scalars['String']>;
  standings?: Maybe<Array<Maybe<CompetitionStandingQueryInput>>>;
  Grades_exists?: Maybe<Scalars['Boolean']>;
  fixtures_exists?: Maybe<Scalars['Boolean']>;
  Name_gte?: Maybe<Scalars['String']>;
  Provider_gte?: Maybe<Scalars['Int']>;
  SportName_lte?: Maybe<Scalars['String']>;
  OrganisationId_lte?: Maybe<Scalars['String']>;
  Provider_nin?: Maybe<Array<Maybe<Scalars['Int']>>>;
  lastResultDate_exists?: Maybe<Scalars['Boolean']>;
  standings_exists?: Maybe<Scalars['Boolean']>;
  firstFixtureDate_gt?: Maybe<Scalars['String']>;
  SportId_gte?: Maybe<Scalars['String']>;
  SportName_ne?: Maybe<Scalars['String']>;
  AND?: Maybe<Array<CompetitionQueryInput>>;
  Id_nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  Provider_lt?: Maybe<Scalars['Int']>;
  SeasonId_lt?: Maybe<Scalars['String']>;
  lastResultDate?: Maybe<Scalars['String']>;
  Grades_nin?: Maybe<Array<Maybe<CompetitionGradeQueryInput>>>;
  OrganisationId_gte?: Maybe<Scalars['String']>;
  Provider_ne?: Maybe<Scalars['Int']>;
  SportName_exists?: Maybe<Scalars['Boolean']>;
  _id_gt?: Maybe<Scalars['ObjectId']>;
  Name_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  firstFixtureDate?: Maybe<Scalars['String']>;
  SportName?: Maybe<Scalars['String']>;
  SportName_nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  lastResultDate_gt?: Maybe<Scalars['String']>;
  _id_lte?: Maybe<Scalars['ObjectId']>;
  Name_gt?: Maybe<Scalars['String']>;
  SportName_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  Name_lt?: Maybe<Scalars['String']>;
  SportId_nin?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export enum CompetitionSortByInput {
  ID_ASC = 'ID_ASC',
  SPORTID_DESC = 'SPORTID_DESC',
  NAME_ASC = 'NAME_ASC',
  NAME_DESC = 'NAME_DESC',
  PROVIDER_ASC = 'PROVIDER_ASC',
  ORGANISATIONID_ASC = 'ORGANISATIONID_ASC',
  FIRSTFIXTUREDATE_DESC = 'FIRSTFIXTUREDATE_DESC',
  FIRSTFIXTUREDATE_ASC = 'FIRSTFIXTUREDATE_ASC',
  ID_DESC = 'ID_DESC',
  SPORTNAME_ASC = 'SPORTNAME_ASC',
  _ID_ASC = '_ID_ASC',
  LASTRESULTDATE_DESC = 'LASTRESULTDATE_DESC',
  SEASONID_DESC = 'SEASONID_DESC',
  _ID_DESC = '_ID_DESC',
  SPORTNAME_DESC = 'SPORTNAME_DESC',
  LASTRESULTDATE_ASC = 'LASTRESULTDATE_ASC',
  SPORTID_ASC = 'SPORTID_ASC',
  PROVIDER_DESC = 'PROVIDER_DESC',
  ORGANISATIONID_DESC = 'ORGANISATIONID_DESC',
  SEASONID_ASC = 'SEASONID_ASC'
}

export type CompetitionStanding = {
  __typename?: 'CompetitionStanding';
  AgainstPoints?: Maybe<Scalars['Int']>;
  BonusPoints?: Maybe<Scalars['Int']>;
  Byes?: Maybe<Scalars['Int']>;
  DefaultLosses?: Maybe<Scalars['Int']>;
  Differential?: Maybe<Scalars['Int']>;
  Draws?: Maybe<Scalars['Int']>;
  ForPoints?: Maybe<Scalars['Int']>;
  GradeName?: Maybe<Scalars['String']>;
  Losses?: Maybe<Scalars['Int']>;
  NegativePointsAdjustment?: Maybe<Scalars['Int']>;
  OrgLogo?: Maybe<Scalars['String']>;
  OrganisationId?: Maybe<Scalars['String']>;
  PenaltyPoints?: Maybe<Scalars['Int']>;
  Played?: Maybe<Scalars['Int']>;
  PointsAdjustment?: Maybe<Scalars['Int']>;
  PositivePointsAdjustment?: Maybe<Scalars['Int']>;
  Provider?: Maybe<Scalars['Int']>;
  Rank?: Maybe<Scalars['Int']>;
  SectionTeamId?: Maybe<Scalars['Int']>;
  SportId?: Maybe<Scalars['String']>;
  SportName?: Maybe<Scalars['String']>;
  StandingPoints?: Maybe<Scalars['Int']>;
  TeamId?: Maybe<Scalars['Int']>;
  TeamName?: Maybe<Scalars['String']>;
  Total?: Maybe<Scalars['Int']>;
  Wins?: Maybe<Scalars['Int']>;
};

export type CompetitionStandingInsertInput = {
  SectionTeamId?: Maybe<Scalars['Int']>;
  TeamName?: Maybe<Scalars['String']>;
  Byes?: Maybe<Scalars['Int']>;
  AgainstPoints?: Maybe<Scalars['Int']>;
  Draws?: Maybe<Scalars['Int']>;
  SportId?: Maybe<Scalars['String']>;
  PositivePointsAdjustment?: Maybe<Scalars['Int']>;
  Rank?: Maybe<Scalars['Int']>;
  SportName?: Maybe<Scalars['String']>;
  StandingPoints?: Maybe<Scalars['Int']>;
  Played?: Maybe<Scalars['Int']>;
  ForPoints?: Maybe<Scalars['Int']>;
  GradeName?: Maybe<Scalars['String']>;
  Differential?: Maybe<Scalars['Int']>;
  Wins?: Maybe<Scalars['Int']>;
  NegativePointsAdjustment?: Maybe<Scalars['Int']>;
  Provider?: Maybe<Scalars['Int']>;
  PenaltyPoints?: Maybe<Scalars['Int']>;
  DefaultLosses?: Maybe<Scalars['Int']>;
  PointsAdjustment?: Maybe<Scalars['Int']>;
  OrgLogo?: Maybe<Scalars['String']>;
  OrganisationId?: Maybe<Scalars['String']>;
  Total?: Maybe<Scalars['Int']>;
  TeamId?: Maybe<Scalars['Int']>;
  BonusPoints?: Maybe<Scalars['Int']>;
  Losses?: Maybe<Scalars['Int']>;
};

export type CompetitionStandingQueryInput = {
  OrgLogo_nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  BonusPoints?: Maybe<Scalars['Int']>;
  BonusPoints_in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  OrganisationId_nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  Wins_gt?: Maybe<Scalars['Int']>;
  SportId_exists?: Maybe<Scalars['Boolean']>;
  SportId_nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  GradeName_exists?: Maybe<Scalars['Boolean']>;
  Draws_gte?: Maybe<Scalars['Int']>;
  OrgLogo_lt?: Maybe<Scalars['String']>;
  Wins?: Maybe<Scalars['Int']>;
  GradeName?: Maybe<Scalars['String']>;
  GradeName_lte?: Maybe<Scalars['String']>;
  PositivePointsAdjustment_nin?: Maybe<Array<Maybe<Scalars['Int']>>>;
  Differential?: Maybe<Scalars['Int']>;
  Draws_exists?: Maybe<Scalars['Boolean']>;
  PenaltyPoints_gt?: Maybe<Scalars['Int']>;
  NegativePointsAdjustment_gt?: Maybe<Scalars['Int']>;
  GradeName_nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  Provider_in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  AgainstPoints_nin?: Maybe<Array<Maybe<Scalars['Int']>>>;
  Differential_in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  GradeName_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  Rank_ne?: Maybe<Scalars['Int']>;
  PenaltyPoints_in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  StandingPoints_gte?: Maybe<Scalars['Int']>;
  Total_gt?: Maybe<Scalars['Int']>;
  TeamName_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  SportId_gte?: Maybe<Scalars['String']>;
  Provider?: Maybe<Scalars['Int']>;
  PointsAdjustment?: Maybe<Scalars['Int']>;
  Rank_gt?: Maybe<Scalars['Int']>;
  BonusPoints_lt?: Maybe<Scalars['Int']>;
  ForPoints_exists?: Maybe<Scalars['Boolean']>;
  SportName_nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  PointsAdjustment_gt?: Maybe<Scalars['Int']>;
  Draws_ne?: Maybe<Scalars['Int']>;
  PositivePointsAdjustment_gt?: Maybe<Scalars['Int']>;
  AgainstPoints_lte?: Maybe<Scalars['Int']>;
  Provider_lte?: Maybe<Scalars['Int']>;
  DefaultLosses_lte?: Maybe<Scalars['Int']>;
  TeamId_gte?: Maybe<Scalars['Int']>;
  TeamId_nin?: Maybe<Array<Maybe<Scalars['Int']>>>;
  ForPoints_in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  Byes_in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  TeamName_ne?: Maybe<Scalars['String']>;
  Draws_nin?: Maybe<Array<Maybe<Scalars['Int']>>>;
  Byes_lt?: Maybe<Scalars['Int']>;
  PenaltyPoints?: Maybe<Scalars['Int']>;
  ForPoints_lte?: Maybe<Scalars['Int']>;
  Wins_lte?: Maybe<Scalars['Int']>;
  PositivePointsAdjustment_lte?: Maybe<Scalars['Int']>;
  OrgLogo_exists?: Maybe<Scalars['Boolean']>;
  Differential_ne?: Maybe<Scalars['Int']>;
  TeamName_lte?: Maybe<Scalars['String']>;
  GradeName_ne?: Maybe<Scalars['String']>;
  PositivePointsAdjustment_in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  TeamName_nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  TeamId_exists?: Maybe<Scalars['Boolean']>;
  Total_in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  Played_in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  Losses_gte?: Maybe<Scalars['Int']>;
  Total?: Maybe<Scalars['Int']>;
  SectionTeamId_ne?: Maybe<Scalars['Int']>;
  OrganisationId_ne?: Maybe<Scalars['String']>;
  Draws_in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  PenaltyPoints_lt?: Maybe<Scalars['Int']>;
  NegativePointsAdjustment_gte?: Maybe<Scalars['Int']>;
  Rank_nin?: Maybe<Array<Maybe<Scalars['Int']>>>;
  Played_gte?: Maybe<Scalars['Int']>;
  SportId_lte?: Maybe<Scalars['String']>;
  TeamName_lt?: Maybe<Scalars['String']>;
  Losses_gt?: Maybe<Scalars['Int']>;
  AgainstPoints_in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  PenaltyPoints_lte?: Maybe<Scalars['Int']>;
  OrgLogo?: Maybe<Scalars['String']>;
  DefaultLosses_ne?: Maybe<Scalars['Int']>;
  SportName_lt?: Maybe<Scalars['String']>;
  SectionTeamId_nin?: Maybe<Array<Maybe<Scalars['Int']>>>;
  SportId?: Maybe<Scalars['String']>;
  AND?: Maybe<Array<CompetitionStandingQueryInput>>;
  SectionTeamId_in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  AgainstPoints?: Maybe<Scalars['Int']>;
  SportName_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  NegativePointsAdjustment_in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  OrgLogo_lte?: Maybe<Scalars['String']>;
  SportId_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  SportId_lt?: Maybe<Scalars['String']>;
  StandingPoints_lte?: Maybe<Scalars['Int']>;
  Played_gt?: Maybe<Scalars['Int']>;
  TeamName_gt?: Maybe<Scalars['String']>;
  Rank_lt?: Maybe<Scalars['Int']>;
  PointsAdjustment_in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  ForPoints_lt?: Maybe<Scalars['Int']>;
  BonusPoints_nin?: Maybe<Array<Maybe<Scalars['Int']>>>;
  PenaltyPoints_gte?: Maybe<Scalars['Int']>;
  TeamId_gt?: Maybe<Scalars['Int']>;
  DefaultLosses?: Maybe<Scalars['Int']>;
  OrganisationId_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  OrganisationId?: Maybe<Scalars['String']>;
  PointsAdjustment_lt?: Maybe<Scalars['Int']>;
  NegativePointsAdjustment?: Maybe<Scalars['Int']>;
  BonusPoints_gt?: Maybe<Scalars['Int']>;
  GradeName_lt?: Maybe<Scalars['String']>;
  OrganisationId_lte?: Maybe<Scalars['String']>;
  Losses_ne?: Maybe<Scalars['Int']>;
  SportName?: Maybe<Scalars['String']>;
  Losses?: Maybe<Scalars['Int']>;
  ForPoints_gt?: Maybe<Scalars['Int']>;
  Rank_in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  Differential_lte?: Maybe<Scalars['Int']>;
  BonusPoints_ne?: Maybe<Scalars['Int']>;
  AgainstPoints_gte?: Maybe<Scalars['Int']>;
  OrganisationId_gte?: Maybe<Scalars['String']>;
  SportName_gt?: Maybe<Scalars['String']>;
  Draws?: Maybe<Scalars['Int']>;
  Losses_nin?: Maybe<Array<Maybe<Scalars['Int']>>>;
  SportName_ne?: Maybe<Scalars['String']>;
  PenaltyPoints_nin?: Maybe<Array<Maybe<Scalars['Int']>>>;
  Played_exists?: Maybe<Scalars['Boolean']>;
  SectionTeamId_lt?: Maybe<Scalars['Int']>;
  SportId_gt?: Maybe<Scalars['String']>;
  TeamName?: Maybe<Scalars['String']>;
  SectionTeamId_gt?: Maybe<Scalars['Int']>;
  SectionTeamId?: Maybe<Scalars['Int']>;
  StandingPoints_exists?: Maybe<Scalars['Boolean']>;
  TeamId?: Maybe<Scalars['Int']>;
  Wins_gte?: Maybe<Scalars['Int']>;
  SectionTeamId_gte?: Maybe<Scalars['Int']>;
  NegativePointsAdjustment_nin?: Maybe<Array<Maybe<Scalars['Int']>>>;
  Draws_gt?: Maybe<Scalars['Int']>;
  Total_nin?: Maybe<Array<Maybe<Scalars['Int']>>>;
  DefaultLosses_lt?: Maybe<Scalars['Int']>;
  StandingPoints_nin?: Maybe<Array<Maybe<Scalars['Int']>>>;
  NegativePointsAdjustment_exists?: Maybe<Scalars['Boolean']>;
  BonusPoints_exists?: Maybe<Scalars['Boolean']>;
  SportId_ne?: Maybe<Scalars['String']>;
  Provider_exists?: Maybe<Scalars['Boolean']>;
  StandingPoints_lt?: Maybe<Scalars['Int']>;
  ForPoints_ne?: Maybe<Scalars['Int']>;
  Wins_lt?: Maybe<Scalars['Int']>;
  SectionTeamId_lte?: Maybe<Scalars['Int']>;
  Draws_lte?: Maybe<Scalars['Int']>;
  Played?: Maybe<Scalars['Int']>;
  OrganisationId_gt?: Maybe<Scalars['String']>;
  Total_lt?: Maybe<Scalars['Int']>;
  Byes_ne?: Maybe<Scalars['Int']>;
  PointsAdjustment_lte?: Maybe<Scalars['Int']>;
  GradeName_gt?: Maybe<Scalars['String']>;
  GradeName_gte?: Maybe<Scalars['String']>;
  Byes_gt?: Maybe<Scalars['Int']>;
  PointsAdjustment_exists?: Maybe<Scalars['Boolean']>;
  Wins_in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  Played_lte?: Maybe<Scalars['Int']>;
  Losses_exists?: Maybe<Scalars['Boolean']>;
  TeamName_exists?: Maybe<Scalars['Boolean']>;
  AgainstPoints_exists?: Maybe<Scalars['Boolean']>;
  OrgLogo_gte?: Maybe<Scalars['String']>;
  Byes_gte?: Maybe<Scalars['Int']>;
  TeamName_gte?: Maybe<Scalars['String']>;
  Losses_in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  Differential_gte?: Maybe<Scalars['Int']>;
  StandingPoints?: Maybe<Scalars['Int']>;
  PositivePointsAdjustment?: Maybe<Scalars['Int']>;
  Played_nin?: Maybe<Array<Maybe<Scalars['Int']>>>;
  Total_lte?: Maybe<Scalars['Int']>;
  StandingPoints_gt?: Maybe<Scalars['Int']>;
  SportName_lte?: Maybe<Scalars['String']>;
  Wins_nin?: Maybe<Array<Maybe<Scalars['Int']>>>;
  Rank?: Maybe<Scalars['Int']>;
  OrganisationId_exists?: Maybe<Scalars['Boolean']>;
  SportName_gte?: Maybe<Scalars['String']>;
  TeamId_lte?: Maybe<Scalars['Int']>;
  BonusPoints_lte?: Maybe<Scalars['Int']>;
  Byes_lte?: Maybe<Scalars['Int']>;
  ForPoints_nin?: Maybe<Array<Maybe<Scalars['Int']>>>;
  Provider_gte?: Maybe<Scalars['Int']>;
  Provider_ne?: Maybe<Scalars['Int']>;
  Rank_lte?: Maybe<Scalars['Int']>;
  PointsAdjustment_ne?: Maybe<Scalars['Int']>;
  NegativePointsAdjustment_lte?: Maybe<Scalars['Int']>;
  AgainstPoints_lt?: Maybe<Scalars['Int']>;
  Differential_nin?: Maybe<Array<Maybe<Scalars['Int']>>>;
  Total_exists?: Maybe<Scalars['Boolean']>;
  AgainstPoints_ne?: Maybe<Scalars['Int']>;
  Played_lt?: Maybe<Scalars['Int']>;
  PointsAdjustment_gte?: Maybe<Scalars['Int']>;
  StandingPoints_in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  ForPoints?: Maybe<Scalars['Int']>;
  Losses_lt?: Maybe<Scalars['Int']>;
  Byes?: Maybe<Scalars['Int']>;
  PositivePointsAdjustment_gte?: Maybe<Scalars['Int']>;
  StandingPoints_ne?: Maybe<Scalars['Int']>;
  SportName_exists?: Maybe<Scalars['Boolean']>;
  Differential_exists?: Maybe<Scalars['Boolean']>;
  Differential_gt?: Maybe<Scalars['Int']>;
  Wins_ne?: Maybe<Scalars['Int']>;
  OrgLogo_gt?: Maybe<Scalars['String']>;
  PositivePointsAdjustment_ne?: Maybe<Scalars['Int']>;
  PenaltyPoints_exists?: Maybe<Scalars['Boolean']>;
  ForPoints_gte?: Maybe<Scalars['Int']>;
  PositivePointsAdjustment_lt?: Maybe<Scalars['Int']>;
  Total_ne?: Maybe<Scalars['Int']>;
  Byes_exists?: Maybe<Scalars['Boolean']>;
  Losses_lte?: Maybe<Scalars['Int']>;
  Differential_lt?: Maybe<Scalars['Int']>;
  TeamId_lt?: Maybe<Scalars['Int']>;
  OR?: Maybe<Array<CompetitionStandingQueryInput>>;
  DefaultLosses_nin?: Maybe<Array<Maybe<Scalars['Int']>>>;
  AgainstPoints_gt?: Maybe<Scalars['Int']>;
  Wins_exists?: Maybe<Scalars['Boolean']>;
  TeamId_ne?: Maybe<Scalars['Int']>;
  Provider_lt?: Maybe<Scalars['Int']>;
  Provider_gt?: Maybe<Scalars['Int']>;
  OrgLogo_ne?: Maybe<Scalars['String']>;
  OrgLogo_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  PenaltyPoints_ne?: Maybe<Scalars['Int']>;
  DefaultLosses_gt?: Maybe<Scalars['Int']>;
  DefaultLosses_gte?: Maybe<Scalars['Int']>;
  Rank_gte?: Maybe<Scalars['Int']>;
  PositivePointsAdjustment_exists?: Maybe<Scalars['Boolean']>;
  BonusPoints_gte?: Maybe<Scalars['Int']>;
  DefaultLosses_exists?: Maybe<Scalars['Boolean']>;
  Draws_lt?: Maybe<Scalars['Int']>;
  Played_ne?: Maybe<Scalars['Int']>;
  NegativePointsAdjustment_lt?: Maybe<Scalars['Int']>;
  Total_gte?: Maybe<Scalars['Int']>;
  OrganisationId_lt?: Maybe<Scalars['String']>;
  DefaultLosses_in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  SectionTeamId_exists?: Maybe<Scalars['Boolean']>;
  Rank_exists?: Maybe<Scalars['Boolean']>;
  NegativePointsAdjustment_ne?: Maybe<Scalars['Int']>;
  TeamId_in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  Provider_nin?: Maybe<Array<Maybe<Scalars['Int']>>>;
  Byes_nin?: Maybe<Array<Maybe<Scalars['Int']>>>;
  PointsAdjustment_nin?: Maybe<Array<Maybe<Scalars['Int']>>>;
};

export type CompetitionStandingUpdateInput = {
  NegativePointsAdjustment?: Maybe<Scalars['Int']>;
  Rank_inc?: Maybe<Scalars['Int']>;
  Losses_inc?: Maybe<Scalars['Int']>;
  Differential?: Maybe<Scalars['Int']>;
  TeamId?: Maybe<Scalars['Int']>;
  SportId?: Maybe<Scalars['String']>;
  TeamId_inc?: Maybe<Scalars['Int']>;
  PointsAdjustment?: Maybe<Scalars['Int']>;
  PositivePointsAdjustment?: Maybe<Scalars['Int']>;
  Total_unset?: Maybe<Scalars['Boolean']>;
  NegativePointsAdjustment_inc?: Maybe<Scalars['Int']>;
  Draws_unset?: Maybe<Scalars['Boolean']>;
  TeamName_unset?: Maybe<Scalars['Boolean']>;
  ForPoints?: Maybe<Scalars['Int']>;
  SectionTeamId_inc?: Maybe<Scalars['Int']>;
  Draws_inc?: Maybe<Scalars['Int']>;
  Played_inc?: Maybe<Scalars['Int']>;
  SportName?: Maybe<Scalars['String']>;
  Provider_inc?: Maybe<Scalars['Int']>;
  GradeName?: Maybe<Scalars['String']>;
  StandingPoints_inc?: Maybe<Scalars['Int']>;
  Wins?: Maybe<Scalars['Int']>;
  Rank?: Maybe<Scalars['Int']>;
  TeamName?: Maybe<Scalars['String']>;
  PenaltyPoints_inc?: Maybe<Scalars['Int']>;
  Played?: Maybe<Scalars['Int']>;
  StandingPoints?: Maybe<Scalars['Int']>;
  Total?: Maybe<Scalars['Int']>;
  Played_unset?: Maybe<Scalars['Boolean']>;
  Byes_inc?: Maybe<Scalars['Int']>;
  Differential_inc?: Maybe<Scalars['Int']>;
  PositivePointsAdjustment_unset?: Maybe<Scalars['Boolean']>;
  PenaltyPoints_unset?: Maybe<Scalars['Boolean']>;
  StandingPoints_unset?: Maybe<Scalars['Boolean']>;
  ForPoints_inc?: Maybe<Scalars['Int']>;
  ForPoints_unset?: Maybe<Scalars['Boolean']>;
  Byes_unset?: Maybe<Scalars['Boolean']>;
  Rank_unset?: Maybe<Scalars['Boolean']>;
  Losses_unset?: Maybe<Scalars['Boolean']>;
  GradeName_unset?: Maybe<Scalars['Boolean']>;
  PointsAdjustment_unset?: Maybe<Scalars['Boolean']>;
  DefaultLosses_inc?: Maybe<Scalars['Int']>;
  OrgLogo?: Maybe<Scalars['String']>;
  Draws?: Maybe<Scalars['Int']>;
  OrganisationId?: Maybe<Scalars['String']>;
  BonusPoints?: Maybe<Scalars['Int']>;
  BonusPoints_unset?: Maybe<Scalars['Boolean']>;
  AgainstPoints?: Maybe<Scalars['Int']>;
  Total_inc?: Maybe<Scalars['Int']>;
  Provider?: Maybe<Scalars['Int']>;
  SectionTeamId?: Maybe<Scalars['Int']>;
  SectionTeamId_unset?: Maybe<Scalars['Boolean']>;
  Differential_unset?: Maybe<Scalars['Boolean']>;
  BonusPoints_inc?: Maybe<Scalars['Int']>;
  OrganisationId_unset?: Maybe<Scalars['Boolean']>;
  SportId_unset?: Maybe<Scalars['Boolean']>;
  OrgLogo_unset?: Maybe<Scalars['Boolean']>;
  PointsAdjustment_inc?: Maybe<Scalars['Int']>;
  PenaltyPoints?: Maybe<Scalars['Int']>;
  AgainstPoints_inc?: Maybe<Scalars['Int']>;
  Losses?: Maybe<Scalars['Int']>;
  DefaultLosses_unset?: Maybe<Scalars['Boolean']>;
  Wins_inc?: Maybe<Scalars['Int']>;
  DefaultLosses?: Maybe<Scalars['Int']>;
  Provider_unset?: Maybe<Scalars['Boolean']>;
  TeamId_unset?: Maybe<Scalars['Boolean']>;
  Wins_unset?: Maybe<Scalars['Boolean']>;
  Byes?: Maybe<Scalars['Int']>;
  AgainstPoints_unset?: Maybe<Scalars['Boolean']>;
  NegativePointsAdjustment_unset?: Maybe<Scalars['Boolean']>;
  PositivePointsAdjustment_inc?: Maybe<Scalars['Int']>;
  SportName_unset?: Maybe<Scalars['Boolean']>;
};

export type CompetitionUpdateInput = {
  _id?: Maybe<Scalars['ObjectId']>;
  lastResultDate?: Maybe<Scalars['String']>;
  Provider_inc?: Maybe<Scalars['Int']>;
  Id_unset?: Maybe<Scalars['Boolean']>;
  Provider_unset?: Maybe<Scalars['Boolean']>;
  standings_unset?: Maybe<Scalars['Boolean']>;
  firstFixtureDate_unset?: Maybe<Scalars['Boolean']>;
  SportId?: Maybe<Scalars['String']>;
  SportName_unset?: Maybe<Scalars['Boolean']>;
  fixtures?: Maybe<Array<Maybe<Scalars['String']>>>;
  Grades?: Maybe<Array<Maybe<CompetitionGradeUpdateInput>>>;
  Id?: Maybe<Scalars['String']>;
  Name_unset?: Maybe<Scalars['Boolean']>;
  Grades_unset?: Maybe<Scalars['Boolean']>;
  SportName?: Maybe<Scalars['String']>;
  firstFixtureDate?: Maybe<Scalars['String']>;
  SeasonId_unset?: Maybe<Scalars['Boolean']>;
  fixtures_unset?: Maybe<Scalars['Boolean']>;
  SeasonId?: Maybe<Scalars['String']>;
  Name?: Maybe<Scalars['String']>;
  OrganisationId?: Maybe<Scalars['String']>;
  lastResultDate_unset?: Maybe<Scalars['Boolean']>;
  Provider?: Maybe<Scalars['Int']>;
  SportId_unset?: Maybe<Scalars['Boolean']>;
  _id_unset?: Maybe<Scalars['Boolean']>;
  standings?: Maybe<Array<Maybe<CompetitionStandingUpdateInput>>>;
  OrganisationId_unset?: Maybe<Scalars['Boolean']>;
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
  Date?: Maybe<Scalars['String']>;
  GradeName?: Maybe<Scalars['String']>;
  AwayTeamName?: Maybe<Scalars['String']>;
  LocationLat?: Maybe<Scalars['Int']>;
  MatchSummary?: Maybe<Scalars['String']>;
  competitionId?: Maybe<Scalars['String']>;
  To?: Maybe<Scalars['String']>;
  SectionSortOrder?: Maybe<Scalars['Int']>;
  HomeTeamId?: Maybe<Scalars['String']>;
  LocationLng?: Maybe<Scalars['Int']>;
  Address?: Maybe<Scalars['String']>;
  VenueNameAbbr?: Maybe<Scalars['String']>;
  Provider?: Maybe<Scalars['Int']>;
  matchDay?: Maybe<Scalars['Int']>;
  PublishTeamsheetOnWidget?: Maybe<Scalars['Boolean']>;
  AwayOrganisationLogo?: Maybe<Scalars['String']>;
  ResultStatus?: Maybe<Scalars['Int']>;
  SectionId?: Maybe<Scalars['Int']>;
  AwayOrganisationName?: Maybe<Scalars['String']>;
  _id?: Maybe<Scalars['ObjectId']>;
  AwayOrganisationId?: Maybe<Scalars['String']>;
  HomeOrganisationId?: Maybe<Scalars['String']>;
  GradeSortOrder?: Maybe<Scalars['Int']>;
  PublishVenue?: Maybe<Scalars['Boolean']>;
  Id?: Maybe<Scalars['String']>;
  AwayScore?: Maybe<Scalars['String']>;
  RoundName?: Maybe<Scalars['String']>;
  GradeId?: Maybe<Scalars['String']>;
  IsSuperForm?: Maybe<Scalars['Boolean']>;
  HomeScore?: Maybe<Scalars['String']>;
  InGame?: Maybe<Scalars['Boolean']>;
  Longitude?: Maybe<Scalars['String']>;
  PublishResults?: Maybe<Scalars['Boolean']>;
  HomeOrganisationLogo?: Maybe<Scalars['String']>;
  SportName?: Maybe<Scalars['String']>;
  HomeTeamName?: Maybe<Scalars['String']>;
  Status?: Maybe<Scalars['String']>;
  AwayTeamId?: Maybe<Scalars['String']>;
  Round?: Maybe<Scalars['String']>;
  From?: Maybe<Scalars['String']>;
  Latitude?: Maybe<Scalars['String']>;
  SportId?: Maybe<Scalars['String']>;
  HomeOrganisationName?: Maybe<Scalars['String']>;
  VenueName?: Maybe<Scalars['String']>;
};

export type FixtureQueryInput = {
  AwayTeamId_lt?: Maybe<Scalars['String']>;
  _id_lt?: Maybe<Scalars['ObjectId']>;
  HomeScore_lte?: Maybe<Scalars['String']>;
  HomeOrganisationLogo?: Maybe<Scalars['String']>;
  VenueNameAbbr_ne?: Maybe<Scalars['String']>;
  AwayTeamName_gt?: Maybe<Scalars['String']>;
  HomeOrganisationLogo_lt?: Maybe<Scalars['String']>;
  competitionId_lte?: Maybe<Scalars['String']>;
  To_lte?: Maybe<Scalars['String']>;
  AwayOrganisationId_ne?: Maybe<Scalars['String']>;
  AwayOrganisationLogo_gt?: Maybe<Scalars['String']>;
  AwayOrganisationId?: Maybe<Scalars['String']>;
  SportId_gt?: Maybe<Scalars['String']>;
  VenueNameAbbr_lt?: Maybe<Scalars['String']>;
  AwayScore_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  GradeId_lt?: Maybe<Scalars['String']>;
  LocationLat?: Maybe<Scalars['Int']>;
  LocationLat_exists?: Maybe<Scalars['Boolean']>;
  matchDay_nin?: Maybe<Array<Maybe<Scalars['Int']>>>;
  HomeScore_ne?: Maybe<Scalars['String']>;
  GradeName_gt?: Maybe<Scalars['String']>;
  VenueName?: Maybe<Scalars['String']>;
  SportId?: Maybe<Scalars['String']>;
  Longitude_exists?: Maybe<Scalars['Boolean']>;
  GradeId_exists?: Maybe<Scalars['Boolean']>;
  HomeTeamName_ne?: Maybe<Scalars['String']>;
  VenueNameAbbr_lte?: Maybe<Scalars['String']>;
  RoundName_lte?: Maybe<Scalars['String']>;
  MatchSummary_nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  HomeTeamName_lt?: Maybe<Scalars['String']>;
  GradeName_gte?: Maybe<Scalars['String']>;
  Round_gte?: Maybe<Scalars['String']>;
  VenueName_lt?: Maybe<Scalars['String']>;
  AwayOrganisationName_ne?: Maybe<Scalars['String']>;
  Status_gt?: Maybe<Scalars['String']>;
  AwayTeamId_exists?: Maybe<Scalars['Boolean']>;
  Provider?: Maybe<Scalars['Int']>;
  HomeOrganisationName?: Maybe<Scalars['String']>;
  SectionId_in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  Status_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  VenueNameAbbr_nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  AwayTeamName_gte?: Maybe<Scalars['String']>;
  HomeTeamName_gte?: Maybe<Scalars['String']>;
  SportName_ne?: Maybe<Scalars['String']>;
  Round_lt?: Maybe<Scalars['String']>;
  LocationLat_in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  GradeSortOrder_nin?: Maybe<Array<Maybe<Scalars['Int']>>>;
  Provider_gt?: Maybe<Scalars['Int']>;
  HomeOrganisationId_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  Status_ne?: Maybe<Scalars['String']>;
  competitionId_exists?: Maybe<Scalars['Boolean']>;
  Round_exists?: Maybe<Scalars['Boolean']>;
  HomeOrganisationId_lte?: Maybe<Scalars['String']>;
  Id_lt?: Maybe<Scalars['String']>;
  AwayTeamName_nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  VenueName_lte?: Maybe<Scalars['String']>;
  AwayScore_ne?: Maybe<Scalars['String']>;
  AwayTeamId_lte?: Maybe<Scalars['String']>;
  HomeOrganisationId_gte?: Maybe<Scalars['String']>;
  AwayOrganisationLogo_exists?: Maybe<Scalars['Boolean']>;
  From_nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  Latitude_lt?: Maybe<Scalars['String']>;
  SectionId_exists?: Maybe<Scalars['Boolean']>;
  SectionId_nin?: Maybe<Array<Maybe<Scalars['Int']>>>;
  HomeTeamId_lte?: Maybe<Scalars['String']>;
  AwayOrganisationId_nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  From?: Maybe<Scalars['String']>;
  Id_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  Provider_ne?: Maybe<Scalars['Int']>;
  Provider_nin?: Maybe<Array<Maybe<Scalars['Int']>>>;
  Longitude_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  SportName_lt?: Maybe<Scalars['String']>;
  Latitude_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  ResultStatus_in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  GradeName_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  Status_nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  SectionSortOrder_gt?: Maybe<Scalars['Int']>;
  competitionId_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  AwayTeamName_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  _id_ne?: Maybe<Scalars['ObjectId']>;
  AwayTeamId?: Maybe<Scalars['String']>;
  Date_lte?: Maybe<Scalars['String']>;
  HomeTeamId_lt?: Maybe<Scalars['String']>;
  matchDay_gt?: Maybe<Scalars['Int']>;
  IsSuperForm_ne?: Maybe<Scalars['Boolean']>;
  HomeOrganisationName_gte?: Maybe<Scalars['String']>;
  Date_nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  HomeOrganisationLogo_ne?: Maybe<Scalars['String']>;
  VenueName_nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  HomeTeamName_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  VenueNameAbbr_gt?: Maybe<Scalars['String']>;
  matchDay_ne?: Maybe<Scalars['Int']>;
  Provider_in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  AwayOrganisationId_exists?: Maybe<Scalars['Boolean']>;
  _id?: Maybe<Scalars['ObjectId']>;
  AwayTeamName_ne?: Maybe<Scalars['String']>;
  Date_gte?: Maybe<Scalars['String']>;
  AwayTeamId_nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  LocationLng_gte?: Maybe<Scalars['Int']>;
  From_gte?: Maybe<Scalars['String']>;
  HomeOrganisationName_nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  Latitude_gt?: Maybe<Scalars['String']>;
  Status_lte?: Maybe<Scalars['String']>;
  RoundName_gt?: Maybe<Scalars['String']>;
  HomeTeamName_nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  matchDay_exists?: Maybe<Scalars['Boolean']>;
  SectionId_ne?: Maybe<Scalars['Int']>;
  To_nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  AwayTeamId_ne?: Maybe<Scalars['String']>;
  SectionId_lte?: Maybe<Scalars['Int']>;
  VenueName_gte?: Maybe<Scalars['String']>;
  From_gt?: Maybe<Scalars['String']>;
  SportName_exists?: Maybe<Scalars['Boolean']>;
  Address?: Maybe<Scalars['String']>;
  HomeScore_gte?: Maybe<Scalars['String']>;
  Date_gt?: Maybe<Scalars['String']>;
  ResultStatus_ne?: Maybe<Scalars['Int']>;
  SportId_ne?: Maybe<Scalars['String']>;
  RoundName_exists?: Maybe<Scalars['Boolean']>;
  HomeScore_lt?: Maybe<Scalars['String']>;
  Round?: Maybe<Scalars['String']>;
  MatchSummary_gt?: Maybe<Scalars['String']>;
  VenueName_gt?: Maybe<Scalars['String']>;
  HomeOrganisationId_gt?: Maybe<Scalars['String']>;
  Date_lt?: Maybe<Scalars['String']>;
  AwayOrganisationName_gt?: Maybe<Scalars['String']>;
  Longitude?: Maybe<Scalars['String']>;
  SectionId?: Maybe<Scalars['Int']>;
  competitionId_ne?: Maybe<Scalars['String']>;
  HomeOrganisationName_lt?: Maybe<Scalars['String']>;
  Status_gte?: Maybe<Scalars['String']>;
  HomeTeamName_exists?: Maybe<Scalars['Boolean']>;
  GradeSortOrder_lt?: Maybe<Scalars['Int']>;
  Provider_exists?: Maybe<Scalars['Boolean']>;
  HomeOrganisationName_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  RoundName_nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  HomeTeamName_gt?: Maybe<Scalars['String']>;
  InGame?: Maybe<Scalars['Boolean']>;
  MatchSummary_lt?: Maybe<Scalars['String']>;
  HomeTeamId_exists?: Maybe<Scalars['Boolean']>;
  PublishTeamsheetOnWidget?: Maybe<Scalars['Boolean']>;
  SectionSortOrder_exists?: Maybe<Scalars['Boolean']>;
  GradeName_ne?: Maybe<Scalars['String']>;
  AwayOrganisationName_exists?: Maybe<Scalars['Boolean']>;
  PublishResults_exists?: Maybe<Scalars['Boolean']>;
  HomeScore_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  SportId_exists?: Maybe<Scalars['Boolean']>;
  RoundName_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  SportName_gt?: Maybe<Scalars['String']>;
  Id_exists?: Maybe<Scalars['Boolean']>;
  Address_lte?: Maybe<Scalars['String']>;
  To_ne?: Maybe<Scalars['String']>;
  HomeOrganisationLogo_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  To_lt?: Maybe<Scalars['String']>;
  AwayScore_lt?: Maybe<Scalars['String']>;
  SportId_gte?: Maybe<Scalars['String']>;
  AwayOrganisationId_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  Latitude_nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  SectionSortOrder_gte?: Maybe<Scalars['Int']>;
  SectionId_gte?: Maybe<Scalars['Int']>;
  GradeId_gte?: Maybe<Scalars['String']>;
  _id_lte?: Maybe<Scalars['ObjectId']>;
  Date_exists?: Maybe<Scalars['Boolean']>;
  GradeSortOrder_exists?: Maybe<Scalars['Boolean']>;
  competitionId?: Maybe<Scalars['String']>;
  Date?: Maybe<Scalars['String']>;
  LocationLng_gt?: Maybe<Scalars['Int']>;
  LocationLng_lte?: Maybe<Scalars['Int']>;
  HomeTeamId_nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  _id_gte?: Maybe<Scalars['ObjectId']>;
  HomeOrganisationLogo_lte?: Maybe<Scalars['String']>;
  GradeId_lte?: Maybe<Scalars['String']>;
  SectionSortOrder_lt?: Maybe<Scalars['Int']>;
  HomeOrganisationLogo_gt?: Maybe<Scalars['String']>;
  Provider_lt?: Maybe<Scalars['Int']>;
  HomeOrganisationLogo_gte?: Maybe<Scalars['String']>;
  SectionSortOrder_ne?: Maybe<Scalars['Int']>;
  Address_gt?: Maybe<Scalars['String']>;
  AwayOrganisationLogo?: Maybe<Scalars['String']>;
  From_lt?: Maybe<Scalars['String']>;
  Status_exists?: Maybe<Scalars['Boolean']>;
  AwayOrganisationId_gt?: Maybe<Scalars['String']>;
  AwayTeamName?: Maybe<Scalars['String']>;
  GradeSortOrder_gte?: Maybe<Scalars['Int']>;
  InGame_ne?: Maybe<Scalars['Boolean']>;
  AwayTeamId_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  IsSuperForm?: Maybe<Scalars['Boolean']>;
  PublishVenue?: Maybe<Scalars['Boolean']>;
  ResultStatus_lte?: Maybe<Scalars['Int']>;
  RoundName_lt?: Maybe<Scalars['String']>;
  Round_nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  HomeTeamName?: Maybe<Scalars['String']>;
  _id_gt?: Maybe<Scalars['ObjectId']>;
  RoundName_gte?: Maybe<Scalars['String']>;
  Latitude_exists?: Maybe<Scalars['Boolean']>;
  LocationLng_exists?: Maybe<Scalars['Boolean']>;
  PublishResults_ne?: Maybe<Scalars['Boolean']>;
  AwayScore?: Maybe<Scalars['String']>;
  HomeTeamId_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  AwayOrganisationLogo_lt?: Maybe<Scalars['String']>;
  Id?: Maybe<Scalars['String']>;
  Provider_gte?: Maybe<Scalars['Int']>;
  competitionId_gt?: Maybe<Scalars['String']>;
  From_ne?: Maybe<Scalars['String']>;
  MatchSummary_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  HomeOrganisationName_lte?: Maybe<Scalars['String']>;
  Address_gte?: Maybe<Scalars['String']>;
  GradeName_lt?: Maybe<Scalars['String']>;
  LocationLng?: Maybe<Scalars['Int']>;
  AwayOrganisationLogo_nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  SportName_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  To_exists?: Maybe<Scalars['Boolean']>;
  HomeScore?: Maybe<Scalars['String']>;
  HomeTeamId_ne?: Maybe<Scalars['String']>;
  LocationLng_lt?: Maybe<Scalars['Int']>;
  LocationLat_ne?: Maybe<Scalars['Int']>;
  HomeTeamId_gt?: Maybe<Scalars['String']>;
  matchDay_lte?: Maybe<Scalars['Int']>;
  SectionSortOrder_lte?: Maybe<Scalars['Int']>;
  AwayOrganisationName?: Maybe<Scalars['String']>;
  Latitude_ne?: Maybe<Scalars['String']>;
  RoundName?: Maybe<Scalars['String']>;
  RoundName_ne?: Maybe<Scalars['String']>;
  HomeOrganisationLogo_nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  MatchSummary_gte?: Maybe<Scalars['String']>;
  AwayOrganisationName_lte?: Maybe<Scalars['String']>;
  VenueNameAbbr_gte?: Maybe<Scalars['String']>;
  Address_lt?: Maybe<Scalars['String']>;
  _id_nin?: Maybe<Array<Maybe<Scalars['ObjectId']>>>;
  GradeId_gt?: Maybe<Scalars['String']>;
  SectionSortOrder?: Maybe<Scalars['Int']>;
  GradeName_lte?: Maybe<Scalars['String']>;
  matchDay_lt?: Maybe<Scalars['Int']>;
  SportName_lte?: Maybe<Scalars['String']>;
  HomeOrganisationId_lt?: Maybe<Scalars['String']>;
  LocationLat_lte?: Maybe<Scalars['Int']>;
  AwayTeamId_gte?: Maybe<Scalars['String']>;
  HomeOrganisationName_ne?: Maybe<Scalars['String']>;
  MatchSummary?: Maybe<Scalars['String']>;
  competitionId_gte?: Maybe<Scalars['String']>;
  OR?: Maybe<Array<FixtureQueryInput>>;
  AwayScore_gte?: Maybe<Scalars['String']>;
  VenueName_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  SportId_lt?: Maybe<Scalars['String']>;
  HomeOrganisationName_exists?: Maybe<Scalars['Boolean']>;
  Status_lt?: Maybe<Scalars['String']>;
  SportId_nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  ResultStatus_gt?: Maybe<Scalars['Int']>;
  AwayTeamName_lte?: Maybe<Scalars['String']>;
  PublishResults?: Maybe<Scalars['Boolean']>;
  AwayOrganisationLogo_lte?: Maybe<Scalars['String']>;
  AwayOrganisationLogo_gte?: Maybe<Scalars['String']>;
  AwayScore_nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  AwayScore_exists?: Maybe<Scalars['Boolean']>;
  AND?: Maybe<Array<FixtureQueryInput>>;
  HomeOrganisationId_ne?: Maybe<Scalars['String']>;
  From_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  GradeSortOrder_in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  Latitude_lte?: Maybe<Scalars['String']>;
  competitionId_lt?: Maybe<Scalars['String']>;
  IsSuperForm_exists?: Maybe<Scalars['Boolean']>;
  GradeSortOrder?: Maybe<Scalars['Int']>;
  Id_nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  HomeOrganisationName_gt?: Maybe<Scalars['String']>;
  PublishVenue_ne?: Maybe<Scalars['Boolean']>;
  From_lte?: Maybe<Scalars['String']>;
  AwayScore_lte?: Maybe<Scalars['String']>;
  MatchSummary_lte?: Maybe<Scalars['String']>;
  VenueNameAbbr?: Maybe<Scalars['String']>;
  VenueName_exists?: Maybe<Scalars['Boolean']>;
  SportId_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  To_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  VenueNameAbbr_exists?: Maybe<Scalars['Boolean']>;
  To?: Maybe<Scalars['String']>;
  _id_exists?: Maybe<Scalars['Boolean']>;
  To_gt?: Maybe<Scalars['String']>;
  Date_ne?: Maybe<Scalars['String']>;
  LocationLng_ne?: Maybe<Scalars['Int']>;
  HomeTeamName_lte?: Maybe<Scalars['String']>;
  AwayOrganisationLogo_ne?: Maybe<Scalars['String']>;
  PublishTeamsheetOnWidget_ne?: Maybe<Scalars['Boolean']>;
  SportName_nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  Id_ne?: Maybe<Scalars['String']>;
  InGame_exists?: Maybe<Scalars['Boolean']>;
  Latitude_gte?: Maybe<Scalars['String']>;
  Address_nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  AwayTeamName_exists?: Maybe<Scalars['Boolean']>;
  GradeId_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  matchDay_gte?: Maybe<Scalars['Int']>;
  Round_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  ResultStatus_lt?: Maybe<Scalars['Int']>;
  matchDay_in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  Address_ne?: Maybe<Scalars['String']>;
  Provider_lte?: Maybe<Scalars['Int']>;
  AwayOrganisationId_lt?: Maybe<Scalars['String']>;
  Longitude_ne?: Maybe<Scalars['String']>;
  GradeSortOrder_ne?: Maybe<Scalars['Int']>;
  Longitude_lt?: Maybe<Scalars['String']>;
  AwayOrganisationLogo_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  LocationLat_gte?: Maybe<Scalars['Int']>;
  AwayOrganisationId_lte?: Maybe<Scalars['String']>;
  AwayOrganisationId_gte?: Maybe<Scalars['String']>;
  Latitude?: Maybe<Scalars['String']>;
  GradeId_ne?: Maybe<Scalars['String']>;
  LocationLat_gt?: Maybe<Scalars['Int']>;
  HomeTeamId?: Maybe<Scalars['String']>;
  HomeScore_gt?: Maybe<Scalars['String']>;
  SportId_lte?: Maybe<Scalars['String']>;
  ResultStatus_nin?: Maybe<Array<Maybe<Scalars['Int']>>>;
  Id_gt?: Maybe<Scalars['String']>;
  HomeTeamId_gte?: Maybe<Scalars['String']>;
  HomeScore_nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  Longitude_gte?: Maybe<Scalars['String']>;
  GradeId?: Maybe<Scalars['String']>;
  ResultStatus_exists?: Maybe<Scalars['Boolean']>;
  SectionSortOrder_nin?: Maybe<Array<Maybe<Scalars['Int']>>>;
  HomeScore_exists?: Maybe<Scalars['Boolean']>;
  AwayOrganisationName_nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  SportName_gte?: Maybe<Scalars['String']>;
  HomeOrganisationLogo_exists?: Maybe<Scalars['Boolean']>;
  ResultStatus?: Maybe<Scalars['Int']>;
  AwayOrganisationName_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  Round_gt?: Maybe<Scalars['String']>;
  GradeName_exists?: Maybe<Scalars['Boolean']>;
  GradeSortOrder_gt?: Maybe<Scalars['Int']>;
  VenueName_ne?: Maybe<Scalars['String']>;
  AwayOrganisationName_lt?: Maybe<Scalars['String']>;
  SportName?: Maybe<Scalars['String']>;
  SectionSortOrder_in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  LocationLat_lt?: Maybe<Scalars['Int']>;
  HomeOrganisationId_exists?: Maybe<Scalars['Boolean']>;
  HomeOrganisationId?: Maybe<Scalars['String']>;
  Date_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  Id_lte?: Maybe<Scalars['String']>;
  GradeName_nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  SectionId_lt?: Maybe<Scalars['Int']>;
  HomeOrganisationId_nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  AwayTeamId_gt?: Maybe<Scalars['String']>;
  PublishTeamsheetOnWidget_exists?: Maybe<Scalars['Boolean']>;
  LocationLng_in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  PublishVenue_exists?: Maybe<Scalars['Boolean']>;
  Round_lte?: Maybe<Scalars['String']>;
  GradeSortOrder_lte?: Maybe<Scalars['Int']>;
  SectionId_gt?: Maybe<Scalars['Int']>;
  LocationLat_nin?: Maybe<Array<Maybe<Scalars['Int']>>>;
  LocationLng_nin?: Maybe<Array<Maybe<Scalars['Int']>>>;
  MatchSummary_exists?: Maybe<Scalars['Boolean']>;
  matchDay?: Maybe<Scalars['Int']>;
  Address_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  AwayTeamName_lt?: Maybe<Scalars['String']>;
  Address_exists?: Maybe<Scalars['Boolean']>;
  GradeId_nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  From_exists?: Maybe<Scalars['Boolean']>;
  GradeName?: Maybe<Scalars['String']>;
  competitionId_nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  Round_ne?: Maybe<Scalars['String']>;
  VenueNameAbbr_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  MatchSummary_ne?: Maybe<Scalars['String']>;
  To_gte?: Maybe<Scalars['String']>;
  Status?: Maybe<Scalars['String']>;
  _id_in?: Maybe<Array<Maybe<Scalars['ObjectId']>>>;
  AwayScore_gt?: Maybe<Scalars['String']>;
  AwayOrganisationName_gte?: Maybe<Scalars['String']>;
  Longitude_gt?: Maybe<Scalars['String']>;
  Longitude_nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  Id_gte?: Maybe<Scalars['String']>;
  Longitude_lte?: Maybe<Scalars['String']>;
  ResultStatus_gte?: Maybe<Scalars['Int']>;
};

export enum FixtureSortByInput {
  HOMESCORE_DESC = 'HOMESCORE_DESC',
  AWAYORGANISATIONNAME_ASC = 'AWAYORGANISATIONNAME_ASC',
  LOCATIONLNG_ASC = 'LOCATIONLNG_ASC',
  TO_ASC = 'TO_ASC',
  AWAYORGANISATIONID_DESC = 'AWAYORGANISATIONID_DESC',
  LOCATIONLAT_DESC = 'LOCATIONLAT_DESC',
  MATCHSUMMARY_DESC = 'MATCHSUMMARY_DESC',
  HOMEORGANISATIONID_ASC = 'HOMEORGANISATIONID_ASC',
  GRADENAME_ASC = 'GRADENAME_ASC',
  SPORTNAME_ASC = 'SPORTNAME_ASC',
  AWAYSCORE_ASC = 'AWAYSCORE_ASC',
  AWAYTEAMNAME_ASC = 'AWAYTEAMNAME_ASC',
  AWAYTEAMNAME_DESC = 'AWAYTEAMNAME_DESC',
  PROVIDER_DESC = 'PROVIDER_DESC',
  ROUND_DESC = 'ROUND_DESC',
  HOMETEAMNAME_ASC = 'HOMETEAMNAME_ASC',
  SPORTID_DESC = 'SPORTID_DESC',
  HOMEORGANISATIONLOGO_ASC = 'HOMEORGANISATIONLOGO_ASC',
  ID_DESC = 'ID_DESC',
  LOCATIONLAT_ASC = 'LOCATIONLAT_ASC',
  LONGITUDE_DESC = 'LONGITUDE_DESC',
  SECTIONID_DESC = 'SECTIONID_DESC',
  AWAYTEAMID_ASC = 'AWAYTEAMID_ASC',
  ROUND_ASC = 'ROUND_ASC',
  FROM_ASC = 'FROM_ASC',
  GRADESORTORDER_ASC = 'GRADESORTORDER_ASC',
  GRADESORTORDER_DESC = 'GRADESORTORDER_DESC',
  HOMETEAMID_DESC = 'HOMETEAMID_DESC',
  HOMETEAMNAME_DESC = 'HOMETEAMNAME_DESC',
  STATUS_ASC = 'STATUS_ASC',
  ADDRESS_DESC = 'ADDRESS_DESC',
  FROM_DESC = 'FROM_DESC',
  SECTIONID_ASC = 'SECTIONID_ASC',
  AWAYTEAMID_DESC = 'AWAYTEAMID_DESC',
  LONGITUDE_ASC = 'LONGITUDE_ASC',
  MATCHSUMMARY_ASC = 'MATCHSUMMARY_ASC',
  PROVIDER_ASC = 'PROVIDER_ASC',
  MATCHDAY_DESC = 'MATCHDAY_DESC',
  LOCATIONLNG_DESC = 'LOCATIONLNG_DESC',
  ADDRESS_ASC = 'ADDRESS_ASC',
  _ID_ASC = '_ID_ASC',
  GRADEID_ASC = 'GRADEID_ASC',
  SECTIONSORTORDER_ASC = 'SECTIONSORTORDER_ASC',
  AWAYSCORE_DESC = 'AWAYSCORE_DESC',
  AWAYORGANISATIONLOGO_ASC = 'AWAYORGANISATIONLOGO_ASC',
  TO_DESC = 'TO_DESC',
  SPORTNAME_DESC = 'SPORTNAME_DESC',
  COMPETITIONID_DESC = 'COMPETITIONID_DESC',
  SECTIONSORTORDER_DESC = 'SECTIONSORTORDER_DESC',
  VENUENAMEABBR_ASC = 'VENUENAMEABBR_ASC',
  VENUENAME_ASC = 'VENUENAME_ASC',
  DATE_DESC = 'DATE_DESC',
  RESULTSTATUS_DESC = 'RESULTSTATUS_DESC',
  ROUNDNAME_ASC = 'ROUNDNAME_ASC',
  DATE_ASC = 'DATE_ASC',
  ID_ASC = 'ID_ASC',
  _ID_DESC = '_ID_DESC',
  GRADEID_DESC = 'GRADEID_DESC',
  HOMEORGANISATIONID_DESC = 'HOMEORGANISATIONID_DESC',
  HOMEORGANISATIONNAME_DESC = 'HOMEORGANISATIONNAME_DESC',
  VENUENAME_DESC = 'VENUENAME_DESC',
  AWAYORGANISATIONLOGO_DESC = 'AWAYORGANISATIONLOGO_DESC',
  RESULTSTATUS_ASC = 'RESULTSTATUS_ASC',
  HOMESCORE_ASC = 'HOMESCORE_ASC',
  LATITUDE_DESC = 'LATITUDE_DESC',
  HOMETEAMID_ASC = 'HOMETEAMID_ASC',
  SPORTID_ASC = 'SPORTID_ASC',
  ROUNDNAME_DESC = 'ROUNDNAME_DESC',
  STATUS_DESC = 'STATUS_DESC',
  HOMEORGANISATIONNAME_ASC = 'HOMEORGANISATIONNAME_ASC',
  VENUENAMEABBR_DESC = 'VENUENAMEABBR_DESC',
  MATCHDAY_ASC = 'MATCHDAY_ASC',
  LATITUDE_ASC = 'LATITUDE_ASC',
  COMPETITIONID_ASC = 'COMPETITIONID_ASC',
  GRADENAME_DESC = 'GRADENAME_DESC',
  AWAYORGANISATIONNAME_DESC = 'AWAYORGANISATIONNAME_DESC',
  AWAYORGANISATIONID_ASC = 'AWAYORGANISATIONID_ASC',
  HOMEORGANISATIONLOGO_DESC = 'HOMEORGANISATIONLOGO_DESC'
}

export type FixtureUpdateInput = {
  matchDay?: Maybe<Scalars['Int']>;
  AwayTeamName_unset?: Maybe<Scalars['Boolean']>;
  matchDay_inc?: Maybe<Scalars['Int']>;
  Longitude_unset?: Maybe<Scalars['Boolean']>;
  ResultStatus?: Maybe<Scalars['Int']>;
  LocationLng_unset?: Maybe<Scalars['Boolean']>;
  AwayOrganisationLogo?: Maybe<Scalars['String']>;
  InGame_unset?: Maybe<Scalars['Boolean']>;
  HomeScore_unset?: Maybe<Scalars['Boolean']>;
  SectionId_unset?: Maybe<Scalars['Boolean']>;
  To?: Maybe<Scalars['String']>;
  IsSuperForm_unset?: Maybe<Scalars['Boolean']>;
  Latitude?: Maybe<Scalars['String']>;
  AwayScore_unset?: Maybe<Scalars['Boolean']>;
  LocationLng_inc?: Maybe<Scalars['Int']>;
  LocationLat_unset?: Maybe<Scalars['Boolean']>;
  HomeOrganisationLogo?: Maybe<Scalars['String']>;
  ResultStatus_unset?: Maybe<Scalars['Boolean']>;
  PublishVenue?: Maybe<Scalars['Boolean']>;
  HomeOrganisationId?: Maybe<Scalars['String']>;
  SectionId_inc?: Maybe<Scalars['Int']>;
  GradeId_unset?: Maybe<Scalars['Boolean']>;
  Provider_unset?: Maybe<Scalars['Boolean']>;
  GradeSortOrder_unset?: Maybe<Scalars['Boolean']>;
  VenueNameAbbr?: Maybe<Scalars['String']>;
  Id_unset?: Maybe<Scalars['Boolean']>;
  AwayOrganisationId?: Maybe<Scalars['String']>;
  SportName_unset?: Maybe<Scalars['Boolean']>;
  Provider?: Maybe<Scalars['Int']>;
  GradeSortOrder?: Maybe<Scalars['Int']>;
  SectionSortOrder_inc?: Maybe<Scalars['Int']>;
  Longitude?: Maybe<Scalars['String']>;
  Round?: Maybe<Scalars['String']>;
  VenueName?: Maybe<Scalars['String']>;
  MatchSummary?: Maybe<Scalars['String']>;
  HomeTeamName?: Maybe<Scalars['String']>;
  SportId_unset?: Maybe<Scalars['Boolean']>;
  HomeOrganisationLogo_unset?: Maybe<Scalars['Boolean']>;
  LocationLat?: Maybe<Scalars['Int']>;
  VenueName_unset?: Maybe<Scalars['Boolean']>;
  From_unset?: Maybe<Scalars['Boolean']>;
  GradeName_unset?: Maybe<Scalars['Boolean']>;
  Provider_inc?: Maybe<Scalars['Int']>;
  competitionId_unset?: Maybe<Scalars['Boolean']>;
  Status_unset?: Maybe<Scalars['Boolean']>;
  HomeScore?: Maybe<Scalars['String']>;
  HomeOrganisationName?: Maybe<Scalars['String']>;
  HomeTeamName_unset?: Maybe<Scalars['Boolean']>;
  Latitude_unset?: Maybe<Scalars['Boolean']>;
  PublishResults_unset?: Maybe<Scalars['Boolean']>;
  LocationLat_inc?: Maybe<Scalars['Int']>;
  From?: Maybe<Scalars['String']>;
  RoundName?: Maybe<Scalars['String']>;
  AwayTeamName?: Maybe<Scalars['String']>;
  competitionId?: Maybe<Scalars['String']>;
  LocationLng?: Maybe<Scalars['Int']>;
  Address_unset?: Maybe<Scalars['Boolean']>;
  _id?: Maybe<Scalars['ObjectId']>;
  SectionId?: Maybe<Scalars['Int']>;
  IsSuperForm?: Maybe<Scalars['Boolean']>;
  HomeOrganisationName_unset?: Maybe<Scalars['Boolean']>;
  AwayOrganisationId_unset?: Maybe<Scalars['Boolean']>;
  Round_unset?: Maybe<Scalars['Boolean']>;
  HomeTeamId_unset?: Maybe<Scalars['Boolean']>;
  GradeSortOrder_inc?: Maybe<Scalars['Int']>;
  Address?: Maybe<Scalars['String']>;
  AwayTeamId_unset?: Maybe<Scalars['Boolean']>;
  Id?: Maybe<Scalars['String']>;
  HomeTeamId?: Maybe<Scalars['String']>;
  Date?: Maybe<Scalars['String']>;
  matchDay_unset?: Maybe<Scalars['Boolean']>;
  ResultStatus_inc?: Maybe<Scalars['Int']>;
  PublishResults?: Maybe<Scalars['Boolean']>;
  RoundName_unset?: Maybe<Scalars['Boolean']>;
  GradeName?: Maybe<Scalars['String']>;
  Date_unset?: Maybe<Scalars['Boolean']>;
  AwayOrganisationName_unset?: Maybe<Scalars['Boolean']>;
  GradeId?: Maybe<Scalars['String']>;
  SectionSortOrder_unset?: Maybe<Scalars['Boolean']>;
  _id_unset?: Maybe<Scalars['Boolean']>;
  Status?: Maybe<Scalars['String']>;
  HomeOrganisationId_unset?: Maybe<Scalars['Boolean']>;
  InGame?: Maybe<Scalars['Boolean']>;
  AwayTeamId?: Maybe<Scalars['String']>;
  SportId?: Maybe<Scalars['String']>;
  To_unset?: Maybe<Scalars['Boolean']>;
  AwayOrganisationName?: Maybe<Scalars['String']>;
  VenueNameAbbr_unset?: Maybe<Scalars['Boolean']>;
  PublishTeamsheetOnWidget?: Maybe<Scalars['Boolean']>;
  AwayScore?: Maybe<Scalars['String']>;
  PublishVenue_unset?: Maybe<Scalars['Boolean']>;
  SportName?: Maybe<Scalars['String']>;
  PublishTeamsheetOnWidget_unset?: Maybe<Scalars['Boolean']>;
  AwayOrganisationLogo_unset?: Maybe<Scalars['Boolean']>;
  MatchSummary_unset?: Maybe<Scalars['Boolean']>;
  SectionSortOrder?: Maybe<Scalars['Int']>;
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
  _id_gte?: Maybe<Scalars['ObjectId']>;
  lon_exists?: Maybe<Scalars['Boolean']>;
  address_ne?: Maybe<Scalars['String']>;
  _id_nin?: Maybe<Array<Maybe<Scalars['ObjectId']>>>;
  _id_lte?: Maybe<Scalars['ObjectId']>;
  _id_lt?: Maybe<Scalars['ObjectId']>;
  lat_ne?: Maybe<Scalars['String']>;
  lon_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  _id?: Maybe<Scalars['ObjectId']>;
  lon_ne?: Maybe<Scalars['String']>;
  lon?: Maybe<Scalars['String']>;
  address_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  name_ne?: Maybe<Scalars['String']>;
  _id_exists?: Maybe<Scalars['Boolean']>;
  lat_gte?: Maybe<Scalars['String']>;
  name_lte?: Maybe<Scalars['String']>;
  name_nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  lat_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  lon_gt?: Maybe<Scalars['String']>;
  _id_gt?: Maybe<Scalars['ObjectId']>;
  lat_lte?: Maybe<Scalars['String']>;
  lat?: Maybe<Scalars['String']>;
  address_exists?: Maybe<Scalars['Boolean']>;
  address_gte?: Maybe<Scalars['String']>;
  _id_in?: Maybe<Array<Maybe<Scalars['ObjectId']>>>;
  AND?: Maybe<Array<GroundQueryInput>>;
  OR?: Maybe<Array<GroundQueryInput>>;
  name_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  lon_lte?: Maybe<Scalars['String']>;
  lat_nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  name_gte?: Maybe<Scalars['String']>;
  lat_lt?: Maybe<Scalars['String']>;
  address_gt?: Maybe<Scalars['String']>;
  address?: Maybe<Scalars['String']>;
  name_exists?: Maybe<Scalars['Boolean']>;
  fixtures?: Maybe<Array<Maybe<Scalars['String']>>>;
  name_lt?: Maybe<Scalars['String']>;
  homeTeams_exists?: Maybe<Scalars['Boolean']>;
  lat_gt?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  homeTeams?: Maybe<Array<Maybe<Scalars['String']>>>;
  lon_gte?: Maybe<Scalars['String']>;
  fixtures_nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  name_gt?: Maybe<Scalars['String']>;
  address_lte?: Maybe<Scalars['String']>;
  lat_exists?: Maybe<Scalars['Boolean']>;
  address_nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  _id_ne?: Maybe<Scalars['ObjectId']>;
  homeTeams_nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  lon_lt?: Maybe<Scalars['String']>;
  fixtures_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  fixtures_exists?: Maybe<Scalars['Boolean']>;
  address_lt?: Maybe<Scalars['String']>;
  lon_nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  homeTeams_in?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export enum GroundSortByInput {
  _ID_ASC = '_ID_ASC',
  ADDRESS_ASC = 'ADDRESS_ASC',
  LAT_ASC = 'LAT_ASC',
  LON_ASC = 'LON_ASC',
  NAME_ASC = 'NAME_ASC',
  NAME_DESC = 'NAME_DESC',
  _ID_DESC = '_ID_DESC',
  ADDRESS_DESC = 'ADDRESS_DESC',
  LAT_DESC = 'LAT_DESC',
  LON_DESC = 'LON_DESC'
}

export type GroundUpdateInput = {
  _id_unset?: Maybe<Scalars['Boolean']>;
  name?: Maybe<Scalars['String']>;
  lon?: Maybe<Scalars['String']>;
  lon_unset?: Maybe<Scalars['Boolean']>;
  fixtures?: Maybe<Array<Maybe<Scalars['String']>>>;
  homeTeams?: Maybe<Array<Maybe<Scalars['String']>>>;
  name_unset?: Maybe<Scalars['Boolean']>;
  homeTeams_unset?: Maybe<Scalars['Boolean']>;
  lat?: Maybe<Scalars['String']>;
  address?: Maybe<Scalars['String']>;
  address_unset?: Maybe<Scalars['Boolean']>;
  _id?: Maybe<Scalars['ObjectId']>;
  fixtures_unset?: Maybe<Scalars['Boolean']>;
  lat_unset?: Maybe<Scalars['Boolean']>;
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
  query?: Maybe<FixtureQueryInput>;
  set: FixtureUpdateInput;
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
  Id?: Maybe<Scalars['String']>;
  Name?: Maybe<Scalars['String']>;
  Provider?: Maybe<Scalars['Int']>;
  _id?: Maybe<Scalars['ObjectId']>;
  teams?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type OrganisationQueryInput = {
  Provider_exists?: Maybe<Scalars['Boolean']>;
  teams?: Maybe<Array<Maybe<Scalars['String']>>>;
  Provider_in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  teams_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  _id_lt?: Maybe<Scalars['ObjectId']>;
  Id_exists?: Maybe<Scalars['Boolean']>;
  Provider_nin?: Maybe<Array<Maybe<Scalars['Int']>>>;
  Provider_ne?: Maybe<Scalars['Int']>;
  Provider_gte?: Maybe<Scalars['Int']>;
  Name_exists?: Maybe<Scalars['Boolean']>;
  Provider_gt?: Maybe<Scalars['Int']>;
  Name_nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  teams_nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  _id_gt?: Maybe<Scalars['ObjectId']>;
  Id?: Maybe<Scalars['String']>;
  OR?: Maybe<Array<OrganisationQueryInput>>;
  _id_in?: Maybe<Array<Maybe<Scalars['ObjectId']>>>;
  Provider_lt?: Maybe<Scalars['Int']>;
  Name_gte?: Maybe<Scalars['String']>;
  Id_lt?: Maybe<Scalars['String']>;
  Name_lte?: Maybe<Scalars['String']>;
  Id_ne?: Maybe<Scalars['String']>;
  _id_ne?: Maybe<Scalars['ObjectId']>;
  Id_lte?: Maybe<Scalars['String']>;
  Id_nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  Name_ne?: Maybe<Scalars['String']>;
  _id_gte?: Maybe<Scalars['ObjectId']>;
  Name_gt?: Maybe<Scalars['String']>;
  _id_nin?: Maybe<Array<Maybe<Scalars['ObjectId']>>>;
  Name?: Maybe<Scalars['String']>;
  Provider?: Maybe<Scalars['Int']>;
  Provider_lte?: Maybe<Scalars['Int']>;
  _id?: Maybe<Scalars['ObjectId']>;
  Name_lt?: Maybe<Scalars['String']>;
  teams_exists?: Maybe<Scalars['Boolean']>;
  Id_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  AND?: Maybe<Array<OrganisationQueryInput>>;
  _id_exists?: Maybe<Scalars['Boolean']>;
  Name_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  Id_gte?: Maybe<Scalars['String']>;
  Id_gt?: Maybe<Scalars['String']>;
  _id_lte?: Maybe<Scalars['ObjectId']>;
};

export enum OrganisationSortByInput {
  NAME_ASC = 'NAME_ASC',
  NAME_DESC = 'NAME_DESC',
  PROVIDER_ASC = 'PROVIDER_ASC',
  PROVIDER_DESC = 'PROVIDER_DESC',
  _ID_ASC = '_ID_ASC',
  _ID_DESC = '_ID_DESC',
  ID_ASC = 'ID_ASC',
  ID_DESC = 'ID_DESC'
}

export type OrganisationUpdateInput = {
  Name?: Maybe<Scalars['String']>;
  Provider_inc?: Maybe<Scalars['Int']>;
  Id?: Maybe<Scalars['String']>;
  teams_unset?: Maybe<Scalars['Boolean']>;
  Name_unset?: Maybe<Scalars['Boolean']>;
  Id_unset?: Maybe<Scalars['Boolean']>;
  teams?: Maybe<Array<Maybe<Scalars['String']>>>;
  Provider?: Maybe<Scalars['Int']>;
  Provider_unset?: Maybe<Scalars['Boolean']>;
  _id?: Maybe<Scalars['ObjectId']>;
  _id_unset?: Maybe<Scalars['Boolean']>;
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
  limit?: Maybe<Scalars['Int']>;
  sortBy?: Maybe<GroundSortByInput>;
  query?: Maybe<GroundQueryInput>;
};


export type QueryOrganisationArgs = {
  query?: Maybe<OrganisationQueryInput>;
};


export type QueryOrganisationsArgs = {
  sortBy?: Maybe<OrganisationSortByInput>;
  query?: Maybe<OrganisationQueryInput>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryTeamArgs = {
  query?: Maybe<TeamQueryInput>;
};


export type QueryTeamsArgs = {
  limit?: Maybe<Scalars['Int']>;
  sortBy?: Maybe<TeamSortByInput>;
  query?: Maybe<TeamQueryInput>;
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
  awayFixtures?: Maybe<Array<Maybe<Scalars['String']>>>;
  homeGrounds?: Maybe<Array<Maybe<Scalars['String']>>>;
  fixtures?: Maybe<Array<Maybe<Scalars['String']>>>;
  name?: Maybe<Scalars['String']>;
  _id?: Maybe<Scalars['ObjectId']>;
  organisation?: Maybe<Scalars['String']>;
  Id?: Maybe<Scalars['String']>;
  homeFixtures?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type TeamQueryInput = {
  homeGrounds_nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  homeGrounds_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  _id_gte?: Maybe<Scalars['ObjectId']>;
  organisation_ne?: Maybe<Scalars['String']>;
  organisation?: Maybe<Scalars['String']>;
  OR?: Maybe<Array<TeamQueryInput>>;
  Id?: Maybe<Scalars['String']>;
  competitions?: Maybe<Array<Maybe<Scalars['String']>>>;
  competitions_exists?: Maybe<Scalars['Boolean']>;
  fixtures_nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  awayFixtures_nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  _id_lte?: Maybe<Scalars['ObjectId']>;
  competitions_nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  fixtures?: Maybe<Array<Maybe<Scalars['String']>>>;
  name_lt?: Maybe<Scalars['String']>;
  organisation_exists?: Maybe<Scalars['Boolean']>;
  awayFixtures_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  _id_in?: Maybe<Array<Maybe<Scalars['ObjectId']>>>;
  Id_lte?: Maybe<Scalars['String']>;
  Id_lt?: Maybe<Scalars['String']>;
  _id_exists?: Maybe<Scalars['Boolean']>;
  _id_lt?: Maybe<Scalars['ObjectId']>;
  awayFixtures?: Maybe<Array<Maybe<Scalars['String']>>>;
  name_nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  fixtures_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  Id_ne?: Maybe<Scalars['String']>;
  homeGrounds?: Maybe<Array<Maybe<Scalars['String']>>>;
  homeFixtures_nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  name_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  Id_gte?: Maybe<Scalars['String']>;
  AND?: Maybe<Array<TeamQueryInput>>;
  _id_gt?: Maybe<Scalars['ObjectId']>;
  Id_exists?: Maybe<Scalars['Boolean']>;
  name_exists?: Maybe<Scalars['Boolean']>;
  _id_nin?: Maybe<Array<Maybe<Scalars['ObjectId']>>>;
  organisation_lte?: Maybe<Scalars['String']>;
  name_gte?: Maybe<Scalars['String']>;
  _id_ne?: Maybe<Scalars['ObjectId']>;
  competitions_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  homeFixtures_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  Id_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  name_lte?: Maybe<Scalars['String']>;
  organisation_nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  organisation_lt?: Maybe<Scalars['String']>;
  organisation_gt?: Maybe<Scalars['String']>;
  organisation_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  homeFixtures_exists?: Maybe<Scalars['Boolean']>;
  _id?: Maybe<Scalars['ObjectId']>;
  fixtures_exists?: Maybe<Scalars['Boolean']>;
  name_gt?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  homeGrounds_exists?: Maybe<Scalars['Boolean']>;
  Id_gt?: Maybe<Scalars['String']>;
  Id_nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  organisation_gte?: Maybe<Scalars['String']>;
  name_ne?: Maybe<Scalars['String']>;
  homeFixtures?: Maybe<Array<Maybe<Scalars['String']>>>;
  awayFixtures_exists?: Maybe<Scalars['Boolean']>;
};

export enum TeamSortByInput {
  NAME_DESC = 'NAME_DESC',
  _ID_ASC = '_ID_ASC',
  _ID_DESC = '_ID_DESC',
  ORGANISATION_ASC = 'ORGANISATION_ASC',
  ORGANISATION_DESC = 'ORGANISATION_DESC',
  ID_ASC = 'ID_ASC',
  ID_DESC = 'ID_DESC',
  NAME_ASC = 'NAME_ASC'
}

export type TeamUpdateInput = {
  name?: Maybe<Scalars['String']>;
  organisation?: Maybe<Scalars['String']>;
  Id_unset?: Maybe<Scalars['Boolean']>;
  _id_unset?: Maybe<Scalars['Boolean']>;
  awayFixtures?: Maybe<Array<Maybe<Scalars['String']>>>;
  homeFixtures?: Maybe<Array<Maybe<Scalars['String']>>>;
  homeGrounds_unset?: Maybe<Scalars['Boolean']>;
  fixtures?: Maybe<Array<Maybe<Scalars['String']>>>;
  Id?: Maybe<Scalars['String']>;
  awayFixtures_unset?: Maybe<Scalars['Boolean']>;
  homeFixtures_unset?: Maybe<Scalars['Boolean']>;
  name_unset?: Maybe<Scalars['Boolean']>;
  fixtures_unset?: Maybe<Scalars['Boolean']>;
  competitions_unset?: Maybe<Scalars['Boolean']>;
  _id?: Maybe<Scalars['ObjectId']>;
  homeGrounds?: Maybe<Array<Maybe<Scalars['String']>>>;
  competitions?: Maybe<Array<Maybe<Scalars['String']>>>;
  organisation_unset?: Maybe<Scalars['Boolean']>;
};

export type UpdateManyPayload = {
  __typename?: 'UpdateManyPayload';
  matchedCount: Scalars['Int'];
  modifiedCount: Scalars['Int'];
};

export type GetAllCompetitionsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllCompetitionsQuery = (
  { __typename?: 'Query' }
  & { competitions: Array<Maybe<(
    { __typename?: 'Competition' }
    & Pick<Competition, 'Id' | 'Name' | 'OrganisationId' | 'Provider' | 'SeasonId' | 'SportId' | 'SportName' | '_id' | 'firstFixtureDate' | 'fixtures' | 'lastResultDate'>
    & { Grades?: Maybe<Array<Maybe<(
      { __typename?: 'CompetitionGrade' }
      & Pick<CompetitionGrade, 'Id'>
    )>>> }
  )>> }
);

export type GetAllCompetitionsLiteQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllCompetitionsLiteQuery = (
  { __typename?: 'Query' }
  & { competitions: Array<Maybe<(
    { __typename?: 'Competition' }
    & Pick<Competition, 'Id' | 'Name' | '_id' | 'firstFixtureDate' | 'fixtures' | 'lastResultDate'>
  )>> }
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

export type GetFixturesLiteQueryVariables = Exact<{
  q?: Maybe<FixtureQueryInput>;
}>;


export type GetFixturesLiteQuery = (
  { __typename?: 'Query' }
  & { fixtures: Array<Maybe<(
    { __typename?: 'Fixture' }
    & Pick<Fixture, 'Address' | 'AwayOrganisationId' | 'AwayOrganisationLogo' | 'AwayScore' | 'AwayTeamId' | 'AwayTeamName' | 'Date' | 'HomeOrganisationId' | 'HomeOrganisationLogo' | 'HomeScore' | 'HomeTeamId' | 'HomeTeamName' | 'Id' | 'ResultStatus' | 'Round' | 'RoundName' | 'Status' | 'VenueName' | '_id' | 'competitionId' | 'matchDay'>
  )>> }
);

export type GetAllTeamsLiteQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllTeamsLiteQuery = (
  { __typename?: 'Query' }
  & { teams: Array<Maybe<(
    { __typename?: 'Team' }
    & Pick<Team, 'Id' | 'name'>
    & { competitions?: Maybe<Array<Maybe<(
      { __typename?: 'Competition' }
      & Pick<Competition, 'Name'>
    )>>> }
  )>> }
);

export type GetTeamByIdQueryVariables = Exact<{
  Id: Scalars['String'];
}>;


export type GetTeamByIdQuery = (
  { __typename?: 'Query' }
  & { team?: Maybe<(
    { __typename?: 'Team' }
    & Pick<Team, 'Id' | 'name'>
    & { organisationInfo?: Maybe<(
      { __typename?: 'Organisation' }
      & Pick<Organisation, 'Name'>
    )> }
  )> }
);
