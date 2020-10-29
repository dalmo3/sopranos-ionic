import {
  IonContent,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonListHeader,
  IonMenu,
  IonMenuToggle,
} from '@ionic/react';
import {
  helpCircle,
  helpCircleOutline,
  home,
  homeOutline,
  informationCircle,
  informationCircleOutline,
  settings,
  settingsOutline,
  shirt,
  shirtOutline,
  trophy,
  trophyOutline,
} from 'ionicons/icons';
import React from 'react';
import { useLocation } from 'react-router-dom';

// import './Menu.css';

interface AppPage {
  url: string;
  iosIcon: string;
  mdIcon: string;
  title: string;
}

const appPages: AppPage[] = [
  {
    title: 'Home',
    url: '/',
    iosIcon: homeOutline,
    mdIcon: home,
  },
  {
    title: 'Teams',
    url: '/teams',
    iosIcon: shirtOutline,
    mdIcon: shirt,
  },
  {
    title: 'Competitions',
    url: '/competitions',
    iosIcon: trophyOutline,
    mdIcon: trophy,
  },
  {
    title: 'About',
    url: '/about',
    iosIcon: informationCircleOutline,
    mdIcon: informationCircle,
  },
  {
    title: 'Settings',
    url: '/settings',
    iosIcon: settingsOutline,
    mdIcon: settings,
  },
  {
    title: 'Help',
    url: '/help',
    iosIcon: helpCircleOutline,
    mdIcon: helpCircle,
  },
];

const Menu: React.FC = () => {
  const location = useLocation();

  return (
    <IonMenu contentId='main' type='overlay' menuId='leftSidebar'>
      <IonContent>
        <IonList id='inbox-list'>
          <IonListHeader>Inbox</IonListHeader>
          {appPages.map((appPage, index) => {
            return (
              <IonMenuToggle key={index} autoHide={false}>
                <IonItem
                  className={
                    location.pathname === appPage.url ? 'selected' : ''
                  }
                  routerLink={appPage.url}
                  routerDirection='none'
                  lines='none'
                  detail={false}>
                  <IonIcon
                    slot='start'
                    ios={appPage.iosIcon}
                    md={appPage.mdIcon}
                  />
                  <IonLabel>{appPage.title}</IonLabel>
                </IonItem>
              </IonMenuToggle>
            );
          })}
        </IonList>
      </IonContent>
    </IonMenu>
  );
};

export default Menu;
