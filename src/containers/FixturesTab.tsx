import { IonContent, IonPage, IonText } from '@ionic/react';
import React, { FC } from 'react';
import { RouteChildrenProps } from 'react-router';
import Header from '../components/Header';
import { IRouteTeam } from './TeamView';

const FixturesTab: FC<RouteChildrenProps<IRouteTeam>> = ({ match }) => {
  const {
    params: { id }
  } = match!;

  return (
    <IonPage>
      <Header title='' />
      <IonContent>
        <IonText>Fixtures</IonText>
      </IonContent>
    </IonPage>
  );
};
export default FixturesTab;
