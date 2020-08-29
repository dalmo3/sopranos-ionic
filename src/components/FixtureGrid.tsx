import { IonList, IonItem, IonCol, IonGrid, IonRow } from '@ionic/react';
import React from 'react';
import { FixturesProps, Fixture } from '../database/types';

const FixtureGrid: React.FC<FixturesProps> = (props) => {
  const fixtures = props.fixtures;

  return (
    <IonGrid>
      {sortFixturesByDate(fixtures).map((fixture) => {
        return (
          <IonRow
            className="ion-align-items-center ion-justify-content-center"
            key={fixture.Id}
          >
            <IonCol size="6" sizeMd="2" className="ion-text-center">
              {fixture.Date}
            </IonCol>
            <IonCol size="6" sizeMd="2" pushMd="8" className="ion-text-center">
              {fixture.VenueName}
            </IonCol>
            <IonCol size="5" sizeMd="3" pullMd="2" className="ion-text-end">
              {fixture.HomeTeamName}
            </IonCol>
            <IonCol className="ion-text-end" pullMd="2">
              {fixture.HomeScore}
            </IonCol>
            <IonCol className="ion-text-center ion-no-padding" pullMd="2">
              -
            </IonCol>
            <IonCol pullMd="2">{fixture.AwayScore}</IonCol>
            <IonCol size="5" sizeMd="3" pullMd="2">
              {fixture.AwayTeamName}
            </IonCol>
          </IonRow>
        );
      })}
    </IonGrid>
  );
};
const sortFixturesByDate = (fixtures: Fixture[]): Fixture[] => {
  return [...fixtures].sort(
    (a, b) =>
      Number(new Date(a.Date as string)) - Number(new Date(b.Date as string))
  );
};
export default FixtureGrid;
