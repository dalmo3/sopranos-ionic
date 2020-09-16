import React, {
  useContext,
  createContext,
  FC,
  useState,
  useEffect,
} from 'react';
import * as Realm from 'realm-web';

const REALM_APP_ID = process.env.REACT_APP_REALM_APP_ID!;

const RealmContext = createContext<IRealmContext | void>(undefined);
const RealmAppClient = Realm.getApp(REALM_APP_ID) as Realm.App;

const RealmProvider: FC = ({ children }) => {
  const [user, setUser] = useState(RealmAppClient.currentUser!);
  const [isReady, setIsReady] = useState(false);

  // establish user session upon app start
  useEffect(() => {
    const anonLogin = async () => {
      const anonCredentials = Realm.Credentials.anonymous();
      await RealmAppClient.logIn(anonCredentials);
      setUser(RealmAppClient.currentUser!);
      setIsReady(true);
    };

    // refresh existing user token or create new user
    if (RealmAppClient.currentUser) {
      RealmAppClient.currentUser
        .refreshAccessToken()
        .then(() => setIsReady(true));
    } else anonLogin();

    return () => {
      console.log('effect cleanup running');
      const logout = async () => {
        console.log('user logged in is ', user);
        await RealmAppClient.currentUser?.logOut();
        console.log('user logged out? ', user);
      };
      logout();
    };
  }, []);

  // Provide the current user and authentication methods to the wrapped tree
  const context: IRealmContext = {
    appId: REALM_APP_ID,
    user,
    isReady,
  };
  return (
    <RealmContext.Provider value={context}>{children}</RealmContext.Provider>
  );
};

export default RealmProvider;

export interface IRealmContext {
  appId: string;
  user: Realm.User;
  isReady: boolean;
}

export const useRealmContext = (): IRealmContext => {
  const context = useContext(RealmContext);
  if (!context) {
    throw new Error('You must call useRealmApp() inside of a <RealmApp />.');
  }
  return context;
};
