import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import {
  IonApp,
  IonButton,
  IonButtons,
  IonContent,
  IonFab,
  IonFabButton,
  IonHeader,
  IonIcon,
  IonLabel,
  IonMenuButton,
  IonPage,
  IonRefresher,
  IonRefresherContent,
  IonRouterOutlet,
  IonSplitPane,
  IonTabBar,
  IonTabButton,
  IonTabs,
  IonTitle,
  IonToolbar
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { ellipse, square, triangle } from 'ionicons/icons';
import Tab1 from './pages/Tab1';
import Tab3 from './pages/Tab3';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';
import StitchApolloProvider from './database/StitchApolloProvider';
import StitchProvider from './database/StitchProvider';
import Menu from './components/Menu';
import SettingsPage from './pages/SettingsPage';
import RealmProvider from './database/RealmProvider';
import RealmApolloProvider from './database/RealmApolloProvider';
import Refresher from './database/Refresher';
import TeamView from './containers/TeamView';
import AboutPage from './pages/AboutPage';
import CompetitionsPage from './pages/CompetitionsPage';
import TeamsPage from './pages/TeamsPage';
import HelpPage from './pages/HelpPage';

const App: React.FC = () => (
  <IonApp>
    {/* <StitchProvider> */}
    {/* <StitchApolloProvider> */}
    <RealmProvider>
      <RealmApolloProvider>
        <IonReactRouter>
          <IonSplitPane contentId='main'>
            <Menu />
            <IonPage id='main'>
              {/* <IonFab vertical="top" horizontal="end">
                <IonFabButton size="small">
                  <IonMenuButton />
                </IonFabButton>
              </IonFab> */}
              <IonContent>
                <Refresher />
                <IonRouterOutlet>
                  {/* activate switch if routing behaves weird */}
                  {/* <Switch>  */}
                  <Route path='/settings' component={SettingsPage} />
                  <Route path='/about' component={AboutPage} />
                  <Route path='/competitions' component={CompetitionsPage} />
                  <Route path='/teams' component={TeamsPage} />
                  <Route path='/help' component={HelpPage} />
                  {/* <Route exact path='/teams' component={TeamView} /> */}
                  <Route path='/team/:id' component={TeamView} />
                  <Route exact path='/' component={Tab1} />
                  {/* </Switch> */}
                  {/* <Route component={Tab1} /> */}
                </IonRouterOutlet>
              </IonContent>
            </IonPage>
          </IonSplitPane>
        </IonReactRouter>
      </RealmApolloProvider>
    </RealmProvider>

    {/* </StitchApolloProvider> */}
    {/* </StitchProvider> */}
  </IonApp>
);

export default App;
