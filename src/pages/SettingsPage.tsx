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
  IonToast,
  IonGrid,
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
import Header from '../components/Header';
import { checkmark, reorderTwo, reorderTwoOutline } from 'ionicons/icons';
import TeamSelector from '../components/Settings/TeamSelector';
import QueryHandlerContainer from '../containers/QueryHandlerContainer';
import { useGetAllTeamsLiteQuery } from '../database/graphql-operations';

export type HandleSelection = (favouriteTeams: string[]) => void;

export interface TeamSelection {
  allTeams: Team[];
  favouriteTeams: string[];
}

const Settings: FC = () => {
  const client = useApolloClient();
  const { data } = useGetUserDataQuery();

  const allTeamsQueryResult = useGetAllTeamsLiteQuery();
  // const teams = teamData?.data?.teams;

  const favouriteTeams = data?.User.favouriteTeams;
  const allTeams = allTeamsQueryResult.data?.teams as Team[];

  const handleSelection: HandleSelection = (
    // data: UserData | undefined,
    teamSelection: string[]
  ) => {
    // data?.User.favouriteTeams = teams;
    console.log('handleSelection', data);

    client.writeQuery({
      query: GetUserData,
      data: {
        User: {
          // ...DEFAULT_USER_DATA.User,
          ...data?.User,
          favouriteTeams: teamSelection,
        },
      },
    });
  };

  const [enableReorder, setEnableReorder] = useState(false);
  const [showReorderToast, setShowReorderToast] = useState(false);

  const handleReorder = () => {
    if (!enableReorder) setShowReorderToast(true);
    setEnableReorder((enableReorder) => !enableReorder);
  };

  const TeamReorder: FC = () => {
    return (
      <IonToolbar>
        <IonButtons slot='end'>
          <IonButton onClick={handleReorder}>
            {enableReorder ? (
              <>
                <IonIcon icon={checkmark} color='primary' />
                Done
              </>
            ) : (
              <>
                <IonIcon md={reorderTwo} ios={reorderTwoOutline} color='dark' />
              </>
            )}
          </IonButton>
        </IonButtons>
      </IonToolbar>
    );
  };

  const FavouriteTeams: FC<TeamSelection> = ({ allTeams, favouriteTeams }) => {
    // sorts list based on user preference
    const orderedTeams = allTeams
      .filter(({ Id }) => Id && favouriteTeams.includes(Id))
      .sort((a, b) => {
        const rankA = favouriteTeams.indexOf(a.Id!);
        const rankB = favouriteTeams.indexOf(b.Id!);
        return rankA - rankB;
      });

    return (
      <>
        <TeamSelector
          allTeams={allTeams}
          favouriteTeams={favouriteTeams}
          handleSelection={handleSelection}
        />
        <IonReorderGroup
          disabled={!enableReorder}
          // onIonItemReorder={(e) => doReorder(e, client, teams)}>
          onIonItemReorder={(e) => doReorder(e, orderedTeams)}>
          {orderedTeams.map((team) => {
            return (
              <IonItem key={team.Id}>
                <IonLabel>{team.name}</IonLabel>
                <IonText>{team.competitions?.[0]?.Name}</IonText>
                <IonReorder slot='end' />
              </IonItem>
            );
          })}
        </IonReorderGroup>
        <TeamReorder />
        <IonToast
          isOpen={showReorderToast}
          onWillDismiss={() => setShowReorderToast(false)}
          message='Drag teams in the list to reorder, then confirm. The team at the top of the list will be the first one shown on your home page.'
        />
      </>
    );
  };

  const doReorder = (
    event: CustomEvent,
    // client: ApolloClient<object>,
    teams: Team[]
  ) => {
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
    <QueryHandlerContainer queryResult={allTeamsQueryResult}>
      <IonContent>
        {/* <IonText>Hello, {data?.User.name}</IonText> */}
        {favouriteTeams && allTeams && (
          <FavouriteTeams
            favouriteTeams={favouriteTeams}
            allTeams={
              allTeams
              //   favouriteTeams.map(
              //   (id) => allTeams.find((team: Team) => team.Id === id)
              // )
              // allTeams
              //   .filter(({ Id }) => Id && favouriteTeams.includes(Id))
              //   .sort((a, b) => {
              //     const rankA = favouriteTeams.indexOf(a.Id!);
              //     const rankB = favouriteTeams.indexOf(b.Id!);
              //     return rankA - rankB;
              //   })
            }
          />
        )}
      </IonContent>
    </QueryHandlerContainer>
  );
};

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
