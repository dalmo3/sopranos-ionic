import * as React from 'react';
import {
  StitchUser,
  StitchAppClient,
  Stitch,
  AnonymousCredential,
} from 'mongodb-stitch-browser-sdk';

const REALM_APP_ID = process.env.REACT_APP_REALM_APP_ID!;

const stitchAppClientWeb: StitchAppClient = Stitch.initializeDefaultAppClient(
  REALM_APP_ID
);

export interface IStitchProvider {
  id: string;
  user: StitchUser;
  // logIn: (email: string, password: string) => Promise<void>;
  anonLogIn: () => Promise<void>;
  // logOut: () => Promise<void>;
  // registerUser(email: string, password: string): Promise<void>;
}

const StitchContext = React.createContext({} as IStitchProvider);

const StitchProvider: React.FC = ({ children }) => {
  // Keep track of the current user in local state
  // const appRef = React.useRef(realmWebApp);
  // const [user, setUser] = React.useState(realmWebApp.currentUser);
  const [user, setUser] = React.useState({} as IStitchProvider['user']);
  console.log('StitchUser', user);

  // Anonymous login immediately upon app start
  
  const anonLogIn = async () => {
    const user = await stitchAppClientWeb.auth.loginWithCredential(
      new AnonymousCredential()
    );
    setUser(user);
  };
  React.useEffect(() => {
    anonLogIn();
  }, []);

  // Let logged in users log out
  // const logOut = async () => {
  //   // TODO: Log the current user out
  //   await realmWebApp.logOut();
  //   setUser(realmWebApp.currentUser);
  // };

  // Provide the current user and authentication methods to the wrapped tree
  const context: IStitchProvider = {
    id: REALM_APP_ID,
    user,
    // logIn,
    anonLogIn,
    // logOut,
    // registerUser,
  };
  return (
    <StitchContext.Provider value={context}>{children}</StitchContext.Provider>
  );
};
export default StitchProvider;

export const useStitchProvider = (): IStitchProvider => {
  const context = React.useContext(StitchContext);
  if (!context) {
    throw new Error('You must call useStitchApp() inside of a <StitchApp />.');
  }
  return context;
};
