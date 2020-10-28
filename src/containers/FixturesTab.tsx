import { QueryHookOptions } from '@apollo/client';
import { IonContent, IonPage, IonText } from '@ionic/react';
import React, { FC } from 'react';
import { RouteChildrenProps } from 'react-router';
import Header from '../components/Header';
import MakeTestQuery, {
  MakeTestQueryParams,
} from '../components/MakeTestQuery';
import { GetFixturesQuery } from '../database/types/generated';
import { IRouteTeam } from './TeamView';

const FixturesTab: FC<RouteChildrenProps<IRouteTeam>> = ({ match }) => {
  const {
    params: { id },
  } = match!; //#TODO handle null case

  //https://www.typescriptlang.org/docs/handbook/release-notes/typescript-2-1.html
  const queryParams: MakeTestQueryParams = {
    variables: {
      q: {
        OR: [
          {
            HomeTeamId: id,
          },
          {
            AwayTeamId: id,
          },
        ],
        // HomeTeamName: 'KCU Sopranos',
        // Id_in: comp.data?.competition?.fixtures
        // HomeTeamName: 'Kapiti Coast United',
        // HomeTeamName: 'KCU Sopranos',
        // HomeTeamName: 'KCU Thirds',
        // HomeScore: "2",
      },
    },
    // pollInterval: 0
    // skip: !comp.data?.competition?.fixtures,
    // fetchPolicy: 'network-only',
    // notifyOnNetworkStatusChange: true
  };
  return (
    <IonPage>
      <Header title='Fixtures' />
      <IonContent>
        <MakeTestQuery queryParams={queryParams} />
      </IonContent>
    </IonPage>
  );
};
export default FixturesTab;
