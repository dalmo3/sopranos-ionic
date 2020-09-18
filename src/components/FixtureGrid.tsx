import { IonList, IonItem, IonCol, IonGrid, IonRow } from '@ionic/react';
import React, { FC } from 'react';
import {  Fixture } from '../database/types/generated';
import FixtureSingle from './FixtureSingle';

const FixtureGrid: React.FC<{fixtures: Fixture[]}> = (props) => {
  const { fixtures } = props;

  return (
    <IonList>
      {sortFixturesByDate(fixtures).map((fixture) => (
        <FixtureSingle fixture={fixture} key={fixture.Id}/>
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
