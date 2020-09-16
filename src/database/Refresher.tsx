import { ApolloClient, useApolloClient } from '@apollo/client';
import { IonRefresher, IonRefresherContent } from '@ionic/react';
import React, { FC } from 'react';

const refresh = async (e: CustomEvent, client: ApolloClient<object>) => {
  try{
    await client.reFetchObservableQueries(false);
  }catch (e){
    console.error('error refetching', e)
  }
  e.detail.complete();
};

const Refresher: FC = () => {
  const client = useApolloClient();
  return (
    <IonRefresher slot="fixed" onIonRefresh={(e) => refresh(e, client)}>
      <IonRefresherContent />
    </IonRefresher>
  );
};

export default Refresher;
