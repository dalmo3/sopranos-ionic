import React, { FC } from 'react';
import {
  IonHeader,
  IonToolbar,
  IonButtons,
  IonMenuButton,
  IonTitle,
  IonText,
  IonButton, useIonRouter, IonBackButton
} from '@ionic/react';
import { chevronBack } from 'ionicons/icons';

const Header: FC<{ title: string }> = ({ title }) => {
  const history = useIonRouter();
  return (
    <IonHeader>
      <IonToolbar>
        <IonButtons slot="primary">
          <IonBackButton icon={chevronBack} disabled={false}/>
          <IonMenuButton />
        </IonButtons>
        <IonButtons slot="secondary">
          {/* <IonButton onClick={() => history.back()}> {'< Back'} </IonButton>
           */}
           <IonBackButton icon={chevronBack} disabled={false}/>
        </IonButtons>
          <IonTitle slot="start">{title}</IonTitle>
      </IonToolbar>
    </IonHeader>
  );
};

export default Header;
