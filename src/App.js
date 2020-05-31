// Libs
import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  useLocation,
  useParams
} from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";

// Containers
import Home from './containers/Home';
import About from './containers/About';
import NotFound from './containers/NotFound';


// Components
import Header from './components/Header';

function App() {
  return (

    <Router>
      <>

        <Header />

        <Route
          render={({location}) => (
            <TransitionGroup component={null} appear={true}>
              <CSSTransition key={location.key} classNames="o-fade-" timeout={300}>
                <Switch location={location}>
                  <Route path="/" exact component={Home} />
                  <Route path="/about" component={About} />
                  <Route path="*" component={NotFound} />
                </Switch>
              </CSSTransition>
            </TransitionGroup>
          )}
        />

      </>
    </Router>

  );
}

export default App;
