import {
  IonButtons,
  IonItem,
  IonLabel,
  IonSelect,
  IonSelectOption,
  IonText,
  IonToolbar,
} from '@ionic/react';
import React, { FC, memo } from 'react';
import { HandleSelection, TeamSelection } from '../../containers/Settings';
import { Team } from '../../database/types/generated';

const TeamSelector: FC<
  TeamSelection & { handleSelection: HandleSelection }
> = ({ allTeams, favouriteTeams, handleSelection }) => {
  return (
    <IonToolbar>
      Favourite teams
      <IonButtons slot='end'>
        {/* {data && allTeamsQueryResult?.data && ( */}
        {allTeams && favouriteTeams && (
          <IonItem>
            <IonLabel>Select teams</IonLabel>
            <IonSelect
              // value={data.User.favouriteTeams}
              value={favouriteTeams}
              multiple={true}
              interface='alert'
              class='team-selection-ionselect'
              interfaceOptions={{
                header: 'Favourite Teams',
                subHeader: 'Pick as many teams as you want to follow.',
                cssClass: 'team-selection-alert',
                translucent: true,
              }}
              onIonChange={(e) => handleSelection(e.detail.value)}>
              {allTeams.map((team: Team) => {
                return (
                  <IonSelectOption
                    value={team.Id}
                    key={team.Id}
                    className='team-selection-option'>
                    <IonLabel>{team.name}</IonLabel>

                    <IonText className={'team-selection-competition'}>
                      <br />
                      {` - ${team.competitions?.[0]?.Name}`}
                    </IonText>
                  </IonSelectOption>
                );
              })}
            </IonSelect>
          </IonItem>
        )}
      </IonButtons>
    </IonToolbar>
  );
};

export default memo(TeamSelector);
