import { IonPage, IonHeader, IonToolbar, IonButtons, IonMenuButton, IonTitle, IonContent, IonText } from '@ionic/react';
import React, { FC } from 'react'
import { useAppData } from '../controller/AppDataProvider';
import './SettingsPage.css'

const SettingsPage: FC = () => {
  
  const { user } = useAppData()

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>Settings</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonText>
          Hello, {user.name}!
        </IonText>
      </IonContent>
    </IonPage>
  );
};

export default SettingsPage