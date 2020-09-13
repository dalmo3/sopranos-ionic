import React, {
  useContext,
  createContext,
  FC,
  useState,
  useEffect,
} from 'react';
import * as Realm from 'realm-web';

const REALM_APP_ID = process.env.REACT_APP_REALM_APP_ID!;

const RealmContext = createContext<IRealmProvider | void>(undefined);
const RealmAppClient = Realm.getApp( REALM_APP_ID ) as Realm.App;

const RealmProvider: FC = ({ children }) => {
  const [user, setUser] = useState(RealmAppClient.currentUser!);

  // Anonymous login immediately upon app start
  useEffect(() => {
    // console.log(RealmAppClient)
    const anonLogin = async () => {
      const anonCredentials = Realm.Credentials.anonymous();
      await RealmAppClient.logIn(anonCredentials);
      setUser(RealmAppClient.currentUser!);
    };
    if (!RealmAppClient.currentUser) anonLogin();
    return () => {
      console.log('effect cleanup ran')
      const logout = async () => {
        console.log('user logged in is ', user)
        await RealmAppClient.currentUser?.logOut();
        console.log('user logged out? ', user)
      } 
      logout()
    };
  }, []);


  // Provide the current user and authentication methods to the wrapped tree
  const context: IRealmProvider = {
    id: REALM_APP_ID,
    user,
    // logIn,
    // anonLogIn,
    // logOut,
    // registerUser,
  };
  return (
    <RealmContext.Provider value={context}>{children}</RealmContext.Provider>
  );
};
export default RealmProvider;

export interface IRealmProvider {
  id: string;
  user: Realm.User;
}

export const useRealmProvider = (): IRealmProvider => {
  const context = useContext(RealmContext);
  if (!context) {
    throw new Error('You must call useRealmApp() inside of a <RealmApp />.');
  }
  return context;
};
