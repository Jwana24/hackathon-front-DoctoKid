import React, { Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Signup from './components/Signup';
import Signin from './components/Signin';
import Avatars from './components/Avatars';
import Quizz from './components/Quizz/Quizz';
import Footer from './components/Footer';
import Informations from './components/Informations';
import { ImagesProvider } from "./components/contexts/ImageContext";
import { useTransition, animated } from "react-spring";
import useRouter from "./hooks/useRouter";
import NavbarComponent from './components/Navbar/NavbarComponent';
import AboutUs from './components/AboutUs/AboutUs';

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
    <>
    <NavbarComponent />
    <animated.div key={key} style={props}>
      <Suspense fallback={""}>
        <Switch location={item}>
          <Route exact path="/" component={Signup} />
          <Route exact path="/signin" component={Signin} />
          <Route path="/avatars" component={Avatars} />
          <Route path="/quizz/:id" component={Quizz} />
          <Route path="/informations/:name" component={Informations} />
          <Route path="/AboutUs" component={AboutUs} />
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
        </Switch>
      </Suspense>
    </animated.div>
    <Footer />
    </>
  ));
}

export default App;
