import { IonContent, IonPage } from '@ionic/react';
import React from 'react';
import Header from '../components/Header';
import Settings from '../containers/Settings';
import './SettingsPage.scss';

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
