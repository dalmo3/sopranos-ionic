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
import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import QueryHandlerContainer from '../containers/QueryHandlerContainer';
import { useGetAllCompetitionsLiteQuery } from '../database/graphql-operations';
import './CompetitionsPage.scss';

const CompetitionsPage = () => {
  const queryResult = useGetAllCompetitionsLiteQuery();
  const { data } = queryResult;

  return (
    <QueryHandlerContainer queryResult={queryResult}>
      <IonPage>
        <Header title='Competitions' />
        <IonContent>
          <IonList>
            {data?.competitions.map((comp) => {
              return (
                // <IonItem>
                // <Link to={`/competition/${comp?.Id}/fixtures`} key={comp?.Id}>
                <IonButton
                  color='light'
                  expand='full'
                  href={`/competition/${comp?.Id}/fixtures`}
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
        </IonContent>
      </IonPage>
    </QueryHandlerContainer>
  );
};

export default CompetitionsPage;
