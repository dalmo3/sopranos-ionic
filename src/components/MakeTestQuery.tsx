import * as React from 'react';
import {
  useGetAllCompetitionsQuery,
  useGetCompetitionByIdQuery,
  useGetFixturesByIdsQuery,
  useGetFixturesQuery,
} from '../database/graphql-operations';
import { Competition, Fixture } from '../database/types';
import { IonContent, IonText } from '@ionic/react';
import FixturesTable from './FixtureTable';
// import { IonText, View } from './Themed';
// import FixturesTable from './FixturesTable';
// import useOldNetInfo from '../database/useOldNetInfo';
// import { ScrollView } from 'react-native';

const MakeTestQuery: React.FC = () => {
  // const { loading, error, data } = useGetAllCompetitionsQuery();
  const comp = useGetCompetitionByIdQuery({
    variables: {
      Id: '566058906',
    },
  });
  // console.log(comp);

  const { loading, error, data } = useGetFixturesQuery({
    variables: {
      q: {
        // Id_in: comp.data?.competition?.fixtures
        // HomeTeamName: 'Kapiti Coast United',
        // HomeTeamName: 'KCU Sopranos',
        // HomeTeamName: 'KCU Thirds',
        // HomeScore: "2",
      },
    },
    // pollInterval: 0
    // skip: !comp.data?.competition?.fixtures,
    // fetchPolicy: "network-only"
    // notifyOnNetworkStatusChange: true
  });

  console.log('loading? ', loading);
  // console.log('data? ', data)
  // const netInfo = useOldNetInfo();
  // console.log(loading, error, data);\
  if (error) return <IonText>Error fetching... `${error.message}`</IonText>;
  if (!data?.fixtures) return <IonText>Loading ...</IonText>;
  return (
    <>
      <IonText>
        {error && `Error fetching... ${error}`}
        {/* {data && JSON.stringify(data.fixtures)} */}
      </IonText>
      <IonContent>
        <FixturesTable fixtures={data.fixtures as Fixture[] } />
      </IonContent>
    </>
  );
};

export default MakeTestQuery;
