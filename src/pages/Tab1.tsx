import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from '@ionic/react';
import React from 'react';
import FixtureGrid from '../components/FixtureGrid';
import Header from '../components/Header';
import QueryHandlerContainer from '../containers/QueryHandlerContainer';
import { useGetFixturesLiteQuery } from '../database/graphql-operations';
import { useGetUserDataQuery } from '../database/localData';
import { Fixture } from '../database/types/generated';
import './Tab1.css';

const Tab1: React.FC = () => {
  console.log('rendered Tab1');

  const userData = useGetUserDataQuery();

  const queryParams = {
    variables: {
      q: {
        OR: [
          {
            HomeTeamId_in: userData.data?.User.favouriteTeams || [],
          },
          {
            AwayTeamId_in: userData.data?.User.favouriteTeams || [],
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

  const queryResult = useGetFixturesLiteQuery(queryParams);
  const { data } = queryResult;

  return (
    <IonPage>
      <Header title='Fixtures' />
      <IonContent>
        <IonHeader collapse='condense'>
          <IonToolbar>
            <IonTitle size='large'>Tab 1</IonTitle>
          </IonToolbar>
        </IonHeader>
        <QueryHandlerContainer queryResult={queryResult}>
          <IonContent>
            <FixtureGrid fixtures={data?.fixtures as Fixture[]} />
            {/* <FixtureList fixtures={data.fixtures as Fixture[] } /> */}
            {/* <FixturesTable fixtures={data.fixtures as Fixture[] } /> */}
          </IonContent>
        </QueryHandlerContainer>
        {/* <MakeTestQuery queryParams={queryParams} /> */}
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
