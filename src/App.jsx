import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import HomePage from './page/homepage';
import LoginFirebase from './page/formularioLogin';
import RegisterFirebase from './page/formularioRegister';
import { AuthProvider } from './context/AuthContext';
import RedirectedPage from './page/formularioRegister';

function App() {
  return (
    <AuthProvider>
      <Router>
        <div>
          <Switch>
            <Route path="/page/Login" component={LoginFirebase}/>
            <Route path="/redirected" component={RedirectedPage}/>
            <Route path="/page/Register" component={RegisterFirebase}/>
            <Route path="/" component={HomePage}/>
          </Switch>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
