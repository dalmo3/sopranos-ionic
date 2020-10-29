import { useApolloClient } from '@apollo/client';
import {
  IonButton,
  IonButtons,
  IonContent,
  IonIcon,
  IonItem,
  IonLabel,
  IonReorder,
  IonReorderGroup,
  IonText,
  IonToast,
  IonToolbar,
} from '@ionic/react';
import { checkmark, reorderTwo, reorderTwoOutline } from 'ionicons/icons';
import React, { FC, useState } from 'react';
import TeamSelector from '../components/Settings/TeamSelector';
import { useGetAllTeamsLiteQuery } from '../database/graphql-operations';
import { GetUserData, useGetUserDataQuery } from '../database/localData';
import { Team } from '../database/types/generated';
import QueryHandlerContainer from './QueryHandlerContainer';

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
    // console.log('handleSelection', data);

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
                {/* <IonLabel>{team.name}</IonLabel>
                <IonText>{team.competitions?.[0]?.Name}</IonText>
              */}

                <IonText className={'team-button-name'}>
                  {team?.name}
                  <IonText className={'team-button-comp'}>
                    <br />
                    {team?.competitions?.[0]?.Name}
                  </IonText>
                </IonText>
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

export default Settings;
