import React from 'react';
import { IonContent, IonPage } from '@ionic/react';
import './SettingsPage.scss';
import Header from '../components/Header';
import Settings from '../containers/Settings';

const SettingsPage: React.FC = () => {
  console.log('rendered settings');
  return (
    <IonPage>
      <Header title='Settings' />
      <IonContent>
        <Settings />
      </IonContent>
    </IonPage>
  );
};

export default React.memo(SettingsPage);
