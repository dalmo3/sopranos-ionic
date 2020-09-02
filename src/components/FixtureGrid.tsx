import { IonList, IonItem, IonCol, IonGrid, IonRow } from '@ionic/react';
import React, { FC } from 'react';
import {  Fixture } from '../database/types/generated';
import SingleFixture from './SingleFixture';

const FixtureGrid: React.FC<{fixtures: Fixture[]}> = (props) => {
  const { fixtures } = props;

  return (
    <IonList>
      {sortFixturesByDate(fixtures).map((fixture) => (
        <SingleFixture fixture={fixture} key={fixture.Id}/>
      ))}
    </IonList>
  );
};
const sortFixturesByDate = (fixtures: Fixture[]): Fixture[] => {
  return [...fixtures].sort(
    (a, b) =>
      Number(new Date(a.Date as string)) - Number(new Date(b.Date as string))
  );
};
export default FixtureGrid;
