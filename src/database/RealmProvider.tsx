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
// const RealmAppClient = new Realm.App({ id: REALM_APP_ID });
const RealmAppClient = Realm.getApp( REALM_APP_ID ) as Realm.App;

const RealmProvider: FC = ({ children }) => {
  // Keep track of the current user in local state
  // const appRef = useRef(realmWebApp);
  // const [user, setUser] = useState(realmWebApp.currentUser);
  const [user, setUser] = useState({} as IRealmProvider['user']);

  // Anonymous login immediately upon app start
  useEffect(() => {
    console.log(RealmAppClient)
    const anonLogin = async () => {
      const anonCredentials = Realm.Credentials.anonymous();
      await RealmAppClient.logIn(anonCredentials);
      setUser(RealmAppClient.currentUser);
    };
    anonLogin();
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


  // Let logged in users log out
  // const logOut = async () => {
  //   // TODO: Log the current user out
  //   await realmWebApp.logOut();
  //   setUser(realmWebApp.currentUser);
  // };

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
  user: Realm.User | null;
}

export const useRealmProvider = (): IRealmProvider => {
  const context = useContext(RealmContext);
  if (!context) {
    throw new Error('You must call useRealmApp() inside of a <RealmApp />.');
  }
  return context;
};
