import {
  IonButton,
  IonCard,
  IonCardHeader,
  IonContent,
  IonItem,
  IonList,
  IonPage,
  IonText,
} from '@ionic/react';
import React, { memo } from 'react';
import { FC } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import QueryHandlerContainer from '../containers/QueryHandlerContainer';
import { useGetAllCompetitionsLiteQuery } from '../database/graphql-operations';
import { Competition } from '../database/types/generated';
import './CompetitionsPage.scss';

const CompetitionList: FC<{ competitions: Competition[] }> = memo(
  ({ competitions }) => {
    //console.log(competitions);
    const sorted = [...competitions].sort((a, b) => {
      //console.log(a, b);
      return a.Name! < b.Name! ? -1 : a.Name! > b.Name! ? 1 : 0;
    });

    return (
      <IonList>
        {sorted.map((comp) => {
          return (
            // <IonItem>
            // <Link to={`/competition/${comp?.Id}/fixtures`} key={comp?.Id}>
            <IonButton
              color='light'
              expand='full'
              routerLink={`/competition/${comp?.Id}/fixtures`}
              key={comp?.Id}
              // size='large'
              className={'competition-button'}>
              {/* <IonCard> */}
              {/* <IonCardHeader> */}
              {/* <IonText> */}
              {comp?.Name}
              {/* </IonText> */}

              {/* </IonCardHeader> */}
              {/* </IonCard> */}
            </IonButton>
            // </Link>
            // </IonItem>
          );
        })}
      </IonList>
    );
  }
);

const CompetitionsPage = () => {
  const queryResult = useGetAllCompetitionsLiteQuery();
  const { data } = queryResult;

  return (
    <QueryHandlerContainer queryResult={queryResult}>
      <IonPage>
        <Header title='Competitions' />
        <IonContent>
          {data?.competitions && (
            <CompetitionList
              competitions={data.competitions as Competition[]}
            />
          )}
        </IonContent>
      </IonPage>
    </QueryHandlerContainer>
  );
};

export default CompetitionsPage;
