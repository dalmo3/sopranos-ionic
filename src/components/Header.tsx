import {
  IonBackButton,
  IonButton,
  IonButtons,
  IonHeader,
  IonMenuButton,
  IonTitle,
  IonToolbar,
  useIonRouter,
} from '@ionic/react';
import { chevronBack } from 'ionicons/icons';
import React, { FC } from 'react';

const Header: FC<{ title: string }> = ({ title }) => {
  const history = useIonRouter();
  return (
    <IonHeader>
      <IonToolbar>
        <IonTitle slot='start'>{title}</IonTitle>

        {/* #TODO find out why backbuttons aren't working */}
        <IonButtons slot='primary'>
          <IonMenuButton />
        </IonButtons>
        <IonButtons slot='secondary'>
          <IonBackButton icon={chevronBack} disabled={false} />
          {/* <IonButton onClick={() => history.back()}> {'< Back'} </IonButton> */}
        </IonButtons>
      </IonToolbar>
    </IonHeader>
  );
};

export default Header;
