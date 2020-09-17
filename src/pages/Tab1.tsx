import React from 'react';
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonText,
  IonButtons,
  IonMenuButton,
} from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab1.css';
import MakeTestQuery from '../components/MakeTestQuery';
import Header from '../components/Header';

const Tab1: React.FC = () => {
  return (
    <IonPage>
      <Header title="Fixtures"/>
      <IonContent>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab 1</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ExploreContainer name="Tab 1 page" />

        <MakeTestQuery />
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
