import * as React from 'react';
import {
  useGetAllCompetitionsQuery,
  useGetCompetitionByIdQuery,
  useGetFixturesByIdsQuery,
  useGetFixturesQuery,
} from '../database/graphql-operations';
import { Competition, Fixture } from '../database/types/generated';
import { IonContent, IonLoading, IonText } from '@ionic/react';
import FixturesTable from './FixtureTable';
import FixtureList from './FixtureList';
import FixtureGrid from './FixtureGrid';
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
        OR: [
          {
            HomeTeamName: 'KCU Sopranos',
          },
          {
            AwayTeamName: 'KCU Sopranos',
          },
        ],
        // HomeTeamName: 'KCU Sopranos',
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
  const [showLoading, setShowLoading] = React.useState(true);

  setTimeout(() => {
    setShowLoading(false);
  }, 2000);

  console.log('loading? ', loading);
  // console.log('data? ', data)
  // const netInfo = useOldNetInfo();
  // console.log(loading, error, data);\
  if (error) {
    console.log(error)
    return <IonText>Error fetching... `${error.message}`</IonText>;
  }
  if (!data?.fixtures)
    return (
      <IonLoading
        // cssClass='my-custom-class'
        showBackdrop={false}
        isOpen={showLoading}
        onDidDismiss={() => setShowLoading(false)}
        message={'Please wait...'}
        duration={5000}
      />
    );
  return (
    <>
      <IonText>
        {error && `Error fetching... ${error}`}
        {/* {data && JSON.stringify(data.fixtures)} */}
      </IonText>
      <IonContent>
        <FixtureGrid fixtures={data.fixtures as Fixture[]} />
        {/* <FixtureList fixtures={data.fixtures as Fixture[] } /> */}
        {/* <FixturesTable fixtures={data.fixtures as Fixture[] } /> */}
      </IonContent>
    </>
  );
};

export default MakeTestQuery;
