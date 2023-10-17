import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import HomePage from './page/homepage';
import LoginFirebase from './page/formularioLogin';
import RegisterFirebase from './page/formularioRegister';
import { AuthProvider } from './context/AuthContext';

function App() {
  return (
    <AuthProvider>
      <Router>
        <div>
          <Switch>
            <Route path="/page/Login">
              <LoginFirebase />
            </Route>
            <Route path="/page/Register">
              <RegisterFirebase />
            </Route>
            <Route path="/">
              <HomePage />
            </Route>
          </Switch>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
