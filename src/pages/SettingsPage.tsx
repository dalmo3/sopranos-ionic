import React, { FC } from 'react';
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonText,
  IonButtons,
  IonMenuButton,
  IonSelect,
  IonSelectOption,
} from '@ionic/react';
import './Tab1.css';
import {
  DEFAULT_USER_DATA,
  GetUserData,
  GetUserDataQueryResult,
  useGetUserDataQuery,
  UserData,
} from '../database/localData';
import { useApolloClient } from '@apollo/client';

const Settings: FC = () => {
  const { data } = useGetUserDataQuery();
  const client = useApolloClient()

  const handleSelection = (data: UserData | undefined, favouriteTeams: string[]) => {
    // data?.User.favouriteTeams = teams;
    console.log('handleSelection', data);
    client.writeQuery({
      query: GetUserData,
      data: {
        User: {
          // ...DEFAULT_USER_DATA.User,
          ...data?.User,
          favouriteTeams: ['1']
        }
      }
    })
  
  };
  console.log('USER_DATA', data);
  return (
    <IonContent>
      <IonText>Hello, {data?.User.name}</IonText>
      <IonText>Favourite Teams:</IonText>
      {data?.User.favouriteTeams?.join(', ')}
      {data && 
      <IonSelect
      value={data.User.favouriteTeams}
      multiple={true}
      onIonChange={(e) => handleSelection(data, e.detail.value)}
      >
        <IonSelectOption value="aaa">aaa</IonSelectOption>
        <IonSelectOption value="b">b</IonSelectOption>
        <IonSelectOption value="c">c</IonSelectOption>
      </IonSelect>
    }
    </IonContent>
  );
};

const SettingsPage: React.FC = () => {
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
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Settings</IonTitle>
          </IonToolbar>
        </IonHeader>
        <Settings />
      </IonContent>
    </IonPage>
  );
};

export default SettingsPage;
