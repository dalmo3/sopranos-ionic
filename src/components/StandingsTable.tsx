import { IonContent } from '@ionic/react';
import React, { memo } from 'react';
import { FC } from 'react';
import { CompetitionStanding } from '../database/types/generated';
import './StandingsTable.scss';

const StandingsTable: FC<{ standings: CompetitionStanding[] }> = ({
  standings,
}) => {
  console.log(standings);
  return (
    <IonContent className={'table-parent'} scrollX={true}>
      <table>
        <tr>
          <th></th>
          <th>Team</th>
          <th>MP</th>
          <th>W</th>
          <th>D</th>
          <th>L</th>
          <th>Pts</th>
          <th>GF</th>
          <th>GA</th>
          <th>GD</th>
        </tr>
        {standings.map((teamStandings, pos) => {
          return (
            <tr key={teamStandings.TeamId}>
              <td>{pos + 1}</td>
              <td>{teamStandings.TeamName}</td>
              <td>{teamStandings.Played}</td>
              <td>{teamStandings.Wins}</td>
              <td>{teamStandings.Draws}</td>
              <td>{teamStandings.Losses}</td>
              <td>{teamStandings.Total}</td>
              <td>{teamStandings.ForPoints}</td>
              <td>{teamStandings.AgainstPoints}</td>
              <td>{teamStandings.Differential}</td>
            </tr>
          );
        })}
      </table>
    </IonContent>
  );
};

export default memo(StandingsTable);
