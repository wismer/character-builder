import { Router, Route, Link, hashHistory, IndexRoute } from 'react-router';
import { render } from 'react-dom';
import React from 'react';
import Application from './components/app';
import Home from './components/home';
import RaceSelection from './components/race-selection';

window.onload = () => {
  render((
    <Router history={hashHistory}>
      <Route path="/" component={Application}>
        <IndexRoute component={Home} />
        <Route path="/pick-race" component={RaceSelection} />
      </Route>
    </Router>
  ), document.getElementById('render'));
};
