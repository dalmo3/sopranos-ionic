import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from '@ionic/react';
import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import TeamView from '../containers/TeamView';

export default () => (
  <IonPage>
    <Header title='Teams' />
    <IonContent>
      <Link to='/team/57953/fixtures'>TeamView</Link>
    </IonContent>
  </IonPage>
);
