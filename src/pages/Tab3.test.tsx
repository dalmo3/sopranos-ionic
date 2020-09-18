import React from 'react';
import { render } from '@testing-library/react';
import SettingsPage from './SettingsPage';
import App from '../App';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import { IonApp } from '@ionic/react';
import Tab3 from './Tab3';

beforeAll(() => {});

describe.skip('Render SettingsPage', () => {
  const client = new ApolloClient({ cache: new InMemoryCache() });

  const rendered = render(
    <Tab3/>
  );

  it('renders without crashing', () => {
    expect(rendered.baseElement).toBeDefined();
  });

  it('has title Settings', async () => {
    rendered.rerender(<Tab3/>)
    // rendered.debug();
    // rendered.queryByText('Settings')
  });

  // it('has title Settings',async ()=>{
  //   await rendered.findByText('Settings')
  // })

  // it('has greeting',async ()=>{
  //   await rendered.findByText('Hello')
  // })
});
