import {
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
} from '@ionic/react';
import { calendar, podium } from 'ionicons/icons';
import React, { FC } from 'react';
import { Route, RouteChildrenProps } from 'react-router-dom';
import FixturesTab from './FixturesTab';
import StandingsTab from './StandingsTab';

export interface IRouteCompetition {
  id: string;
}

const CompetitionView: FC<RouteChildrenProps<IRouteCompetition>> = ({
  location,
  match,
}) => {
  const {
    params: { id },
    url,
    path,
  } = match!;

  console.log(match);
  return (
    <>
      {/* <Header title="" /> */}
      <IonTabs>
        <IonRouterOutlet>
          <Route
            path={`${path}/fixtures`}
            component={FixturesTab}
            exact={true}
          />
          <Route path={`${path}/standings`} component={StandingsTab} />
          <Route path='' component={StandingsTab} />
        </IonRouterOutlet>
        <IonTabBar slot='bottom'>
          <IonTabButton tab='fixtures' href={`${url}/fixtures`}>
            <IonIcon icon={calendar} />
            <IonLabel>Fixtures</IonLabel>
          </IonTabButton>
          <IonTabButton tab='standings' href={`${url}/standings`}>
            <IonIcon icon={podium} />
            <IonLabel>Standings</IonLabel>
          </IonTabButton>
        </IonTabBar>
      </IonTabs>
    </>
  );
};
export default CompetitionView;
