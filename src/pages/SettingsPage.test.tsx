import React from 'react';
import { render } from '@testing-library/react';
import SettingsPage from './SettingsPage';
import App from '../App';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import { IonApp } from '@ionic/react';

beforeAll(() => {});

describe('Render SettingsPage', () => {
  const client = new ApolloClient({ cache: new InMemoryCache() });

  const renderPageWithContext = () =>
    render(
      <IonApp>
        <ApolloProvider client={client}>
          <SettingsPage />
        </ApolloProvider>
      </IonApp>
    );

  it('renders without crashing', () => {
    const rendered = renderPageWithContext();
    expect(rendered.baseElement).toBeDefined();
    // rendered.debug();
  });

  it('has toolbar with title Settings', async () => {
    const rendered = renderPageWithContext();
    const toolbar = rendered.baseElement.querySelector('ion-toolbar');
    expect(toolbar).toHaveTextContent('Settings');
    const menuToggle = toolbar?.querySelector('ion-menu-button');
    expect(menuToggle).toBeVisible();
    
    // const backButton = toolbar?.querySelector('ion-back-button');
    // TODO: test back button
    // for this below to work we need @testing-library/jest-dom
    // expect(backButton).toHaveStyle({ display: none });
  });

  it('has greeting', async () => {
    const rendered = renderPageWithContext();
    await rendered.findByText(/Hello/);
  });
});
