import { IonContent, IonPage, IonText } from '@ionic/react';
import React, { FC } from 'react';
import { RouteChildrenProps } from 'react-router';
import Header from '../components/Header';
import StandingsTable from '../components/StandingsTable';
import { useGetCompetitionByIdQuery } from '../database/graphql-operations';
import { CompetitionStanding } from '../database/types/generated';
import QueryHandlerContainer from './QueryHandlerContainer';
import { IRouteTeam } from './TeamView';

const StandingsTab: FC<RouteChildrenProps<IRouteTeam>> = ({ match }) => {
  const {
    params: { id },
  } = match!;

  const queryResult = useGetCompetitionByIdQuery({ variables: { Id: id } });
  const { data } = queryResult;
  const standings = data?.competition?.standings;
  // const standings = data?.competition?.standings as CompetitionStanding[];

  return (
    <IonPage>
      <Header title='Standings' />
      <QueryHandlerContainer queryResult={queryResult}>
        <IonContent>
          {standings && (
            <StandingsTable standings={standings as CompetitionStanding[]} />
          )}
        </IonContent>
      </QueryHandlerContainer>
    </IonPage>
  );
};

export default StandingsTab;
