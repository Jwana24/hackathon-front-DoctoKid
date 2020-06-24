import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Signin from './components/Signin';
import Avatars from './components/Avatars';
import Quiz from './components/Quiz';

function App() {
  return (
    <>
      <Switch>
        <Route exact path="/" component={Signin} />
        <Route path="/avatars" component={Avatars} />
        <Route path="/quiz" component={Quiz} />
      </Switch>
    </>
  );
}

export default App;
