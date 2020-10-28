import React, { FC, useState } from 'react';
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
  IonButton,
  IonIcon,
  IonToast
} from '@ionic/react';
import './Tab1.css';
import {
  DEFAULT_USER_DATA,
  GetUserData,
  GetUserDataQueryResult,
  useGetUserDataQuery,
  UserData
} from '../database/localData';
import { gql, useApolloClient, useMutation, useQuery } from '@apollo/client';
import { Team } from '../database/types/generated';
import './SettingsPage.scss';
import Header from '../components/Header';
import { checkmark, reorderTwo, reorderTwoOutline } from 'ionicons/icons';

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
          favouriteTeams
        }
      }
    });
  };

  const [enableReorder, setEnableReorder] = useState(false);
  const [showReorderToast, setShowReorderToast] = useState(false);

  const FavouriteTeams: FC<{ teams: Team[] }> = ({ teams }) => {
    // console.log('fav teams', teams);
    return (
      <>
        <IonReorderGroup
          disabled={!enableReorder}
          onIonItemReorder={(e) => doReorder(e, teams)}>
          {teams.map((team) => {
            return (
              <IonItem key={team.Id}>
                <IonLabel>{team.name}</IonLabel>
                <IonReorder slot='end' />
              </IonItem>
            );
          })}
        </IonReorderGroup>
        <IonButtons>
          <IonButton
            slot='end'
            onClick={() => {
              if (!enableReorder) setShowReorderToast(true);
              setEnableReorder((enableReorder) => !enableReorder);
            }}>
            {enableReorder ? (
              <IonIcon icon={checkmark} color='primary' />
            ) : (
              <IonIcon md={reorderTwo} ios={reorderTwoOutline} color='dark' />
            )}
          </IonButton>
        </IonButtons>
        <IonToast
          isOpen={showReorderToast}
          onWillDismiss={() => setShowReorderToast(false)}
          message='Drag teams in the list to reorder, then confirm. The team at the top of the list will be the first one shown on your home page.'
        />
      </>
    );
  };

  const doReorder = (event: CustomEvent, teams: Team[]) => {
    client.writeQuery({
      query: GetUserData,
      data: {
        User: {
          // ...DEFAULT_USER_DATA.User,
          ...data?.User,
          favouriteTeams: event.detail.complete(teams.map((t) => t.Id))
        }
      }
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
          interface='alert'
          class='team-selection-ionselect'
          interfaceOptions={{
            header: 'Favourite Teams',
            subHeader: 'Pick as many teams as you want to follow.',
            cssClass: 'team-selection-alert',
            translucent: true
          }}
          onIonChange={(e) => handleSelection(data, e.detail.value)}>
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
  console.log('rendered settings');
  return (
    <IonPage>
      <Header title='Settings' />
      <IonContent>
        <IonHeader collapse='condense'>
          <IonToolbar>
            <IonTitle size='large'>Settings</IonTitle>
          </IonToolbar>
        </IonHeader>
        <Settings />
      </IonContent>
    </IonPage>
  );
};

export default React.memo(SettingsPage);
