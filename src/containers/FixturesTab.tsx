import { IonContent, IonPage } from '@ionic/react';
import React, { FC } from 'react';
import { RouteChildrenProps } from 'react-router';
import FixtureGrid from '../components/FixtureGrid';
import Header from '../components/Header';
import {
  useGetFixturesLiteQuery,
  useGetFixturesQuery,
} from '../database/graphql-operations';
import { useGetUserDataQuery } from '../database/localData';
import { Fixture, FixtureQueryInput } from '../database/types/generated';
import QueryHandlerContainer from './QueryHandlerContainer';
import { IRouteTeam } from './TeamView';

type ViewPath = 'competition' | 'team' | 'user';
export type GetFixturesQueryParams = Parameters<typeof useGetFixturesQuery>[0];

const FixturesTab: FC<RouteChildrenProps<IRouteTeam>> = ({ match }) => {
  const {
    params: { id },
    path,
  } = match!; //#TODO handle null case

  const parentPath = path.split('/')[1] as ViewPath;

  const userData = useGetUserDataQuery();
  console.log(parentPath, id);

  let q: FixtureQueryInput;

  switch (parentPath) {
    case 'competition':
      q = {
        competitionId: id,
      };
      break;
    case 'team':
      q = {
        OR: [
          {
            HomeTeamId: id,
          },
          {
            AwayTeamId: id,
          },
        ],
      };
      break;

    default:
      q = {
        OR: [
          {
            HomeTeamId_in: userData.data?.User.favouriteTeams || [],
          },
          {
            AwayTeamId_in: userData.data?.User.favouriteTeams || [],
          },
        ],
      };
      break;
  }
  // parentPath === 'competition'
  //   ? {
  //       competitionId: id,
  //     }
  //   : {
  //       OR: [
  //         {
  //           HomeTeamId: id,
  //         },
  //         {
  //           AwayTeamId: id,
  //         },
  //       ],
  //       // HomeTeamName: 'KCU Sopranos',
  //       // Id_in: comp.data?.competition?.fixtures
  //       // HomeTeamName: 'Kapiti Coast United',
  //       // HomeTeamName: 'KCU Sopranos',
  //       // HomeTeamName: 'KCU Thirds',
  //       // HomeScore: "2",
  //     };

  //https://www.typescriptlang.org/docs/handbook/release-notes/typescript-2-1.html
  const queryParams: GetFixturesQueryParams = {
    variables: { q },
    // pollInterval: 0
    // skip: !comp.data?.competition?.fixtures,
    // fetchPolicy: 'network-only',
    // notifyOnNetworkStatusChange: true
  };

  const queryResult = useGetFixturesLiteQuery(queryParams);
  const { data } = queryResult;

  return (
    <IonPage>
      <Header title='Fixtures' />
      <QueryHandlerContainer queryResult={queryResult}>
        <IonContent>
          <FixtureGrid fixtures={data?.fixtures as Fixture[]} />
        </IonContent>
      </QueryHandlerContainer>
    </IonPage>
  );
};
export default FixturesTab;
