import React, { Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Signup from './components/Signup';
import Signin from './components/Signin';
import Avatars from './components/Avatars';
import Quizz from './components/Quizz/Quizz';
import Informations from './components/Informations';
import { ImagesProvider } from "./components/contexts/ImageContext";
import { useTransition, animated } from "react-spring";
import useRouter from "./hooks/useRouter";

const Puzzle = React.lazy(() => {
  return import("./components/Puzzle/Puzzle");
});

const  App = props => {
  const { location } = useRouter();
  const transitions = useTransition(location, location => location.pathname, {
    from: {
      opacity: location.pathname !== "/" ? 0 : 1,
      transform: "translateX(0%)"
    },
    enter: { opacity: 1, transform: "translateX(0%)" },
    leave: { opacity: 0, transform: "translateX(-20%)", delay: 0 }
  });
  return transitions.map(({ item, props, key }) => (
    <animated.div key={key} style={props}>
      <Suspense fallback={""}>
        <Switch location={item}>
          <Route exact path="/" component={Signup} />
          <Route exact path="/signin" component={Signin} />
          <Route path="/avatars" component={Avatars} />
          <Route path="/quizz" component={Quizz} />
          <Route
            path="/puzzle"
            exact
            render={props => (
              <ImagesProvider
                r={require.context(
                  "./components/Puzzle/images",
                  false,
                  /\.(png|jpe?g|svg)$/
                )}
              >
                <Puzzle {...props} />
              </ImagesProvider>
            )}
          />
          <Route path="/informations" component={Informations} />
        </Switch>
      </Suspense>
    </animated.div>
  ));
}

export default App;
