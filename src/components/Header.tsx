import React, { FC } from 'react';
import {
  IonHeader,
  IonToolbar,
  IonButtons,
  IonMenuButton,
  IonTitle,
  IonText,
  IonButton
} from '@ionic/react';
import { useHistory } from 'react-router';

const Header: FC<{ title: string }> = ({ title }) => {
  const history = useHistory();
  return (
    <IonHeader>
      <IonToolbar>
        <IonButtons slot="primary">
          <IonMenuButton />
        </IonButtons>
        <IonButtons slot="secondary">
          <IonButton onClick={history.goBack}> {'< Back'} </IonButton>
        </IonButtons>
        <IonTitle slot="start">{title}</IonTitle>
      </IonToolbar>
    </IonHeader>
  );
};

export default Header;
