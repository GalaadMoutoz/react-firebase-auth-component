import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import IntlProvider from './IntlProvider';
import FirebaseBridgeContext from './FirebaseBridgeContext';
import useFirebaseWithBridge from './hooks/useFirebaseWithBridge';

import * as ROUTES from './constants/routes';
import HandleStatePage from './pages/HandleState';
import SignUpPage from './pages/SignUp';
import SignInPage from './pages/SignIn';
import PasswordForgetPage from './pages/PasswordForget';
import VerifyEmailPage from './pages/VerifyEmail';
import HomePage from './pages/Home';

import 'tabler-react/dist/Tabler.css';
import './App.css';

function App() {
  const firebaseWithBridge = useFirebaseWithBridge();

  return (
    <FirebaseBridgeContext.Provider value={firebaseWithBridge}>
      <IntlProvider>
        <Router>
          <Route exact path={ROUTES.LANDING} component={HandleStatePage} />
          <Route exact path={ROUTES.SIGN_UP} component={SignUpPage} />
          <Route exact path={ROUTES.SIGN_IN} component={SignInPage} />
          <Route exact path={`${ROUTES.PASSWORD_FORGET}/:email?`} component={PasswordForgetPage} />
          <Route exact path={ROUTES.VERIFY_EMAIL} component={VerifyEmailPage} />
          <Route exact path={ROUTES.HOME} component={HomePage} />
        </Router>
      </IntlProvider>
    </FirebaseBridgeContext.Provider>
  );
}

export default App;
