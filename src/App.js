import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Signin from './components/Signin';
import Avatars from './components/Avatars';
<<<<<<< HEAD
import quizz from './components/Quiz'
=======
import Quiz from './components/Quiz';
import Informations from './components/Informations';
>>>>>>> a19d4016e13f52abbf4f4ecca99562372b90bb4b

function App() {
  return (
    <>
      <Switch>
        <Route exact path="/" component={Signin} />
        <Route path="/avatars" component={Avatars} />
        <Route path="/quiz" component={Quiz} />
        <Route path="/informations" component={Informations} />
      </Switch>
    </>
  );
}

export default App;
