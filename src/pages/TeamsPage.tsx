import { IonContent, IonPage } from '@ionic/react';
import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';

export default () => (
  <IonPage>
    <Header title='Teams' />
    <IonContent>
      <Link to='/team/57953/fixtures'>TeamView</Link>
    </IonContent>
  </IonPage>
);
