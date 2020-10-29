import { QueryResult } from '@apollo/client';
import { IonLoading, IonText } from '@ionic/react';
import React, { FC, useEffect, useState } from 'react';

const QueryHandlerContainer: FC<{ queryResult: QueryResult }> = ({
  queryResult,
  children,
}) => {
  const { data, error } = queryResult;
  const [showLoading, setShowLoading] = useState(true);

  useEffect(() => {
    setShowLoading(!data);
  }, [data]);

  if (showLoading)
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

  if (data) return <>{children}</>;

  return <IonText>`Error fetching... ${error}`</IonText>;
};

export default QueryHandlerContainer;
