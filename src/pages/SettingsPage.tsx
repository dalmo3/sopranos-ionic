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
import { gql, useApolloClient, useQuery } from '@apollo/client';
import { Team } from '../database/types/generated';
import './SettingsPage.scss';

const Settings: FC = () => {
  const { data } = useGetUserDataQuery();
  const client = useApolloClient();
  const teams = useQuery(gql`
    query teams {
      teams(sortBy: NAME_ASC, limit: 0) {
        Id
        name
        competitions {
          Name
        }
      }
    }
  `);

  const handleSelection = (
    data: UserData | undefined,
    favouriteTeams: string[]
  ) => {
    // data?.User.favouriteTeams = teams;
    console.log('handleSelection', data);
    client.writeQuery({
      query: GetUserData,
      data: {
        User: {
          // ...DEFAULT_USER_DATA.User,
          ...data?.User,
          favouriteTeams,
        },
      },
    });
  };
  console.log('USER_DATA', data);
  return (
    <IonContent>
      <IonText>Hello, {data?.User.name}</IonText>
      <IonText>Favourite Teams:</IonText>
      {teams.data?.teams
        .filter(({ Id }: Team) => data?.User.favouriteTeams.includes(Id!))
        .map((team: Team) => team.name)
        .join(', ')}
      {/* // .data?.User.favouriteTeams?.join(', ')} */}
      {data && teams?.data && (
        <IonSelect
          value={data.User.favouriteTeams}
          multiple={true}
          interface="alert"
          interfaceOptions={{
            cssClass: 'team-selection-alert',
            // cssClass
          }}
          onIonChange={(e) => handleSelection(data, e.detail.value)}
        >
          {/* {console.log('teams data', teams.data.teams)} */}
          {teams.data.teams.map((team: Team) => {
            return (
              <IonSelectOption value={team.Id} key={team.Id}>
                {team.name}
              </IonSelectOption>
            );
          })}
        </IonSelect>
      )}
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
