import React, { createContext, FC, useContext } from 'react';
import AppData from './AppData';

const data = AppData.getInstance();
const AppDataContext = createContext(data);
export const useAppData = () => useContext(AppDataContext);

const AppDataProvider: FC = ({ children }) => {
  return (
    <AppDataContext.Provider value={data}>{children}</AppDataContext.Provider>
  );
};

export default AppDataProvider;
