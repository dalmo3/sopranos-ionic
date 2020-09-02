import {
  IonList,
  IonItem,
  IonCol,
  IonGrid,
  IonRow,
  IonText,
} from '@ionic/react';
import { Maybe } from 'graphql/jsutils/Maybe';
import moment from 'moment';
import React, { FC } from 'react';
import { Fixture } from '../database/types/generated';

const FixtureDate: FC<{ dateString: string }> = (props) => {
  const { dateString } = props;
  if (!dateString) return null;
  const date = moment(dateString);
  const weekday = date.format('dddd');
  const dayMonth = date.format('DD/MM');
  const time = date.format('h:mm a');

  return (
    <IonGrid>
      <IonRow>
        <IonCol size="6" sizeMd="12">
          <IonText>{dayMonth}</IonText>
        </IonCol>
        <IonCol size="6" sizeMd="12">
          <IonText>{time}</IonText>
        </IonCol>
      </IonRow>
    </IonGrid>
  );
};

const SingleFixture: FC<{fixture: Fixture}> = (props) => {
  const { fixture } = props;

  return (
    <IonItem>
      <IonGrid>
        <IonRow
          className="ion-align-items-center ion-justify-content-center"
          key={fixture.Id}
        >
          <IonCol size="6" sizeMd="2" className="ion-text-center">
            <FixtureDate dateString={fixture.Date!} />
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
      </IonGrid>
    </IonItem>
  );
};

export default SingleFixture;
