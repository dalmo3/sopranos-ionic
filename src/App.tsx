import {
  IonApp,
  IonContent,
  IonPage,
  IonRouterOutlet,
  IonSplitPane,
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';
import '@ionic/react/css/display.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/float-elements.css';
/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/typography.css';
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Menu from './components/Menu';
import CompetitionView from './containers/CompetitionView';
import HomeView from './containers/HomeView';
import TeamView from './containers/TeamView';
import RealmApolloProvider from './database/RealmApolloProvider';
import RealmProvider from './database/RealmProvider';
import Refresher from './database/Refresher';
import AboutPage from './pages/AboutPage';
import CompetitionsPage from './pages/CompetitionsPage';
import HelpPage from './pages/HelpPage';
import SettingsPage from './pages/SettingsPage';
import TeamsPage from './pages/TeamsPage';
/* Theme variables */
import './theme/variables.css';

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
                  <Switch>
                    <Route exact path='/' component={CompetitionsPage} />
                    <Route path='/user/:smth' component={HomeView} />
                    <Route path='/settings' component={SettingsPage} />
                    <Route path='/about' component={AboutPage} />
                    <Route path='/help' component={HelpPage} />
                    <Route path='/competitions' component={CompetitionsPage} />
                    <Route
                      path='/competition/:id'
                      component={CompetitionView}
                    />
                    <Route path='/teams' component={TeamsPage} />
                    <Route path='/team/:id' component={TeamView} />
                    <Route component={CompetitionsPage} />
                  </Switch>
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
