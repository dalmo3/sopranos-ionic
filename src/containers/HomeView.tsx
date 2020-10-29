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

export interface IRouteTeam {
  id: string;
}

const HomeView: FC<RouteChildrenProps<IRouteTeam>> = ({ location, match }) => {
  const {
    params: { id },
  } = match!;
  // console.log(match);
  return (
    <>
      {/* <Header title="" /> */}
      <IonTabs>
        <IonRouterOutlet>
          <Route path='/user/fixtures' component={FixturesTab} exact={true} />
          <Route path='/user/standings' component={StandingsTab} />
          <Route path='' component={FixturesTab} />
        </IonRouterOutlet>
        <IonTabBar slot='bottom'>
          <IonTabButton tab='fixtures' href={`/user/fixtures`}>
            <IonIcon icon={calendar} />
            <IonLabel>Fixtures</IonLabel>
          </IonTabButton>
          <IonTabButton tab='standings' href={`/user/standings`}>
            <IonIcon icon={podium} />
            <IonLabel>Standings</IonLabel>
          </IonTabButton>
        </IonTabBar>
      </IonTabs>
    </>
  );
};
export default HomeView;
