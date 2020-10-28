import React, { FC } from 'react';
import {
  Route,
  Redirect,
  useRouteMatch,
  RouteChildrenProps,
  match,
} from 'react-router-dom';
import {
  IonTabs,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonIcon,
  IonLabel,
  useIonRouter,
  IonPage,
  IonContent,
} from '@ionic/react';
import { triangle, square, calendar, list, podium } from 'ionicons/icons';
import Tab1 from '../pages/Tab1';
import Tab3 from '../pages/Tab3';
import FixturesTab from './FixturesTab';
import StandingsTab from './StandingsTab';
import Header from '../components/Header';

export interface IRouteTeam {
  id: string;
}

const HomeView: FC<RouteChildrenProps<IRouteTeam>> = ({ location, match }) => {
  const {
    params: { id },
  } = match!;
  console.log(match);
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
