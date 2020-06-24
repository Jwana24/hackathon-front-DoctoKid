import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Signin from './components/Signin';
import Avatars from './components/Avatars';
import Quizz from './components/Quizz/Quizz';
import Informations from './components/Informations';

function App() {
  return (
    <>
      <Switch>
        <Route exact path="/" component={Signin} />
        <Route path="/avatars" component={Avatars} />
        <Route path="/quizz" component={Quizz} />
        <Route path="/informations" component={Informations} />
      </Switch>
    </>
  );
}

export default App;
