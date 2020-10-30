import { IonContent, IonPage, IonText } from '@ionic/react';
import React, { FC, useEffect } from 'react';
import { RouteChildrenProps } from 'react-router';
import Header from '../components/Header';
import StandingsTable from '../components/StandingsTable';
import {
  useGetAllCompetitionsLiteLazyQuery,
  useGetCompetitionByIdLazyQuery,
  useGetCompetitionByIdQuery,
  useGetCompetitionsLazyQuery,
  useGetTeamByIdLazyQuery,
  useGetTeamByIdQuery,
} from '../database/graphql-operations';
import { CompetitionStanding } from '../database/types/generated';
import QueryHandlerContainer from './QueryHandlerContainer';
import { IRouteTeam } from './TeamView';

const TeamStandings: FC<RouteChildrenProps<IRouteTeam>> = ({ match }) => {
  const {
    params: { id },
  } = match!;

  const queryResult = useGetTeamByIdQuery({ variables: { Id: id } });

  // const [getComps, {data}] = useGetCompetitionsLazyQuery();

  // useEffect(()=>{
  //   queryResult.data?.team.
  // },[queryResult])

  // const queryResult = useGetCompetitionByIdQuery({ variables: { Id: id } });
  const { data } = queryResult;
  console.log(data);
  const standings = data?.team?.competitions?.[0]?.standings;
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

export default TeamStandings;
