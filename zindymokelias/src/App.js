import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Navbar from './components/layout/Navbar';
import Intro from './components/pages/Intro';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Alerts from './components/layout/Alerts';

import AlertState from './context/alert/AlertState';

import './css/main.css';

function App() {
  return (
    <AlertState>
      <Router>
        <Fragment>
          <div className="container flex-wrap">
            <Switch>
              <Route exact path='/' component={Intro} />
              <Route exact path='/home' component={Home} />
              <Route exact path='/about' component={About} />
            </Switch>
          </div>
        </Fragment>
      </Router>
    </AlertState>
  );
}

export default App;
