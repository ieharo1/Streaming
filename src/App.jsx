import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import HomePage from './page/homepage';
import LoginFirebase from './page/formularioLogin';
import RegisterFirebase from './page/formularioRegister';
import { AuthProvider } from './context/AuthContext';
import RedirectedPage from './page/contentpage';
import Musica from './page/musica';
import Peliculas from './page/peliculas';
import Series from './page/series';


function App() {
  return (
    <AuthProvider>
      <Router>
        <div>
          <Switch>
          <Route path="/musica" component={Musica}/>
            <Route path="/peliculas" component={Peliculas}/>
            <Route path="/series" component={Series}/>
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
