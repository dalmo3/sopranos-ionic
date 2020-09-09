import React, { Fragment } from 'react';
import { gql, QueryHookOptions, useQuery } from '@apollo/client';

export const GET_LOCAL_DATA = gql`
  query GetLocalData {
    localData @client
  }
`;

export const useLocalData = (baseOptions?: QueryHookOptions) =>
  useQuery(GET_LOCAL_DATA, baseOptions);
