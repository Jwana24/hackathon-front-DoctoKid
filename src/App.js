import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Signup from './components/Signup';
import Avatars from './components/Avatars';
import Quiz from './components/Quiz';
import Informations from './components/Informations';

function App() {
  return (
    <>
      <Switch>
        <Route exact path="/" component={Signup} />
        <Route path="/avatars" component={Avatars} />
        <Route path="/quiz" component={Quiz} />
        <Route path="/informations" component={Informations} />
      </Switch>
    </>
  );
}

export default App;
