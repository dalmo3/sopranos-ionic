import { IonPage } from '@ionic/react';
import React from 'react';
import { Link } from 'react-router-dom';
import QueryHandlerContainer from '../containers/QueryHandlerContainer';
import {
  useGetAllCompetitionsLiteQuery,
  useGetAllCompetitionsQuery,
} from '../database/graphql-operations';

const CompetitionsPage = () => {
  const queryResult = useGetAllCompetitionsLiteQuery();
  const { data } = queryResult;

  return (
    <QueryHandlerContainer queryResult={queryResult}>
      <IonPage>
        {data?.competitions.map((comp) => {
          return (
            <Link to={`/competition/${comp?.Id}/fixtures`}>{comp?.Name}</Link>
          );
        })}
      </IonPage>
    </QueryHandlerContainer>
  );
};

export default CompetitionsPage;
