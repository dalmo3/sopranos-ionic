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
import TeamStandings from './TeamStandings';

export interface IRouteTeam {
  id: string;
}

const TeamView: FC<RouteChildrenProps<IRouteTeam>> = ({ location, match }) => {
  const {
    params: { id },
  } = match!;

  return (
    <>
      {/* <Header title="" /> */}
      <IonTabs>
        <IonRouterOutlet>
          <Route
            path='/team/:id/fixtures'
            component={FixturesTab}
            exact={true}
          />
          <Route path='/team/:id/standings' component={TeamStandings} />
          <Route path='' component={FixturesTab} />
        </IonRouterOutlet>
        <IonTabBar slot='bottom'>
          <IonTabButton tab='fixtures' href={`/team/${id}/fixtures`}>
            <IonIcon icon={calendar} />
            <IonLabel>Fixtures</IonLabel>
          </IonTabButton>
          <IonTabButton tab='standings' href={`/team/${id}/standings`}>
            <IonIcon icon={podium} />
            <IonLabel>Standings</IonLabel>
          </IonTabButton>
        </IonTabBar>
      </IonTabs>
    </>
  );
};
export default TeamView;
