import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonButtons,
  IonMenuButton,
  IonTitle,
  IonContent,
  IonText,
  IonButton,
  IonSelect,IonSelectOption, IonItem, IonLabel
} from '@ionic/react';
import { EDEADLK } from 'constants';
import React, { FC } from 'react';
// import { useAppData } from '../controller/AppDataProvider';
import User from '../controller/User';
import { useLocalData } from '../database/localData/useLocalData';
import './SettingsPage.css';

const SettingsPage: FC = () => {

  const s = useLocalData()
  console.log('useLocalData', s)
  const user = new User({name:'anonymous', favouriteTeams:[]})
  // const { user } = useAppData();
  // console.log(user)
  const handleSelection = (teams: string[]) => {
    user.favouriteTeams = teams;
    console.log(user)
}

  
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
        <IonText>Hello, {user.name}!</IonText>
        <IonText>Favourite Teams:</IonText>
        {user?.favouriteTeams?.join(', ')}
      </IonContent>
      <IonContent>
          <IonItem>
            <IonLabel>Pets</IonLabel>
        {/* <IonButton>Select</IonButton> */}
        <IonSelect
          value={user.favouriteTeams}
          multiple={true}
          onIonChange={e => handleSelection(e.detail.value)}>
          <IonSelectOption value="aaa">aaa</IonSelectOption >
          <IonSelectOption value="b">b</IonSelectOption >
          <IonSelectOption value="c">c</IonSelectOption >
        </IonSelect>
          </IonItem>
      </IonContent>
    </IonPage>
  );
};

export default SettingsPage;
