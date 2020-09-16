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
  IonReorderGroup,
  IonItem,
  IonLabel,
  IonReorder,
} from '@ionic/react';
import './Tab1.css';
import {
  DEFAULT_USER_DATA,
  GetUserData,
  GetUserDataQueryResult,
  useGetUserDataQuery,
  UserData,
} from '../database/localData';
import { gql, useApolloClient, useMutation, useQuery } from '@apollo/client';
import { Team } from '../database/types/generated';
import './SettingsPage.scss';

const Settings: FC = () => {
  const client = useApolloClient();
  const { data } = useGetUserDataQuery();
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

  const FavouriteTeams: FC<{ teams: Team[] }> = ({ teams }) => {
    // console.log('fav teams', teams);
    return (
      <IonReorderGroup
        disabled={false}
        onIonItemReorder={(e) => doReorder(e, teams)}
      >
        {teams.map((team) => {
          return (
            <IonItem key={team.Id}>
              <IonLabel>{team.name}</IonLabel>
              <IonReorder slot="end" />
            </IonItem>
          );
        })}
      </IonReorderGroup>
    );
  };

  const doReorder = (event: CustomEvent, teams: Team[]) => {
    client.writeQuery({
      query: GetUserData,
      data: {
        User: {
          // ...DEFAULT_USER_DATA.User,
          ...data?.User,
          favouriteTeams: event.detail.complete(teams.map((t) => t.Id)),
        },
      },
    });
  };

  // console.log('USER_DATA', data);
  return (
    <IonContent>
      <IonText>Hello, {data?.User.name}</IonText>
      <br />
      <IonText>Favourite Teams:</IonText>
      {data && teams?.data && (
        <FavouriteTeams
          teams={data?.User.favouriteTeams.map((id) =>
            teams.data.teams.find((team: Team) => team.Id === id)
          )}
        />
      )}
      {data && teams?.data && (
        <IonSelect
          value={data.User.favouriteTeams}
          multiple={true}
          interface="alert"
          class="team-selection-ionselect"
          interfaceOptions={{
            cssClass: 'team-selection-alert',
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

export default React.memo(SettingsPage);
