import { IonList, IonItem, IonLabel } from '@ionic/react';
import React, { FC } from 'react'
import { Fixture } from '../database/types/generated';

const FixtureList: FC<{fixtures: Fixture[]}> = (props) => {
  const fixtures = props.fixtures;

  return(
    <IonList  lines="full">
      {sortFixturesByDate(fixtures).map(fixture => {
        return (
          <IonItem>
            <IonLabel slot="start">
              {fixture.HomeTeamName}
            </IonLabel>
            <IonLabel slot="start">
              {fixture.HomeScore}
            </IonLabel>
            <IonLabel  slot="end">
              {fixture.AwayScore}
            </IonLabel >
            <IonLabel slot="end">
              {fixture.AwayTeamName}
            </IonLabel>
          </IonItem>
        )
      })}
    </IonList>
  )
}
const sortFixturesByDate = (fixtures: Fixture[]): Fixture[] => {
  return [...fixtures].sort(
    (a, b) =>
      Number(new Date(a.Date as string)) - Number(new Date(b.Date as string))
  );
};
export default FixtureList