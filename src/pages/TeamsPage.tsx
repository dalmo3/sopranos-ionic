import { IonButton, IonContent, IonList, IonPage, IonText } from '@ionic/react';
import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import QueryHandlerContainer from '../containers/QueryHandlerContainer';
import { useGetAllTeamsLiteQuery } from '../database/graphql-operations';
import './TeamsPage.scss';

const TeamsPage = () => {
  const queryResult = useGetAllTeamsLiteQuery();
  const { data } = queryResult;

  return (
    <QueryHandlerContainer queryResult={queryResult}>
      <IonPage>
        <Header title='Teams' />
        <IonContent>
          <IonList>
            {data?.teams.map((team) => {
              return (
                // <IonItem>
                // <Link to={`/competition/${comp?.Id}/fixtures`} key={comp?.Id}>
                <IonButton
                  color='light'
                  expand='full'
                  href={`/team/${team?.Id}/fixtures`}
                  key={team?.Id}
                  // size='large'
                  className={'team-button'}>
                  {/* <IonCard> */}
                  {/* <IonCardHeader> */}
                  <IonText className={'team-button-name'}>
                    {team?.name}
                    {team?.competitions?.[0] && (
                      <IonText className={'team-button-comp'}>
                        <br />
                        {team?.competitions?.[0].Name}
                      </IonText>
                    )}
                  </IonText>

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
export default TeamsPage;
