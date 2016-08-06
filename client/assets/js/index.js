import { Router, Route, hashHistory, IndexRoute } from 'react-router';
import { render } from 'react-dom';
import React from 'react';

import Application from './components/app';
import Home from './components/home';
import RaceSelection from './components/race-selection';
import CharacterCreationWrapper from './components/character-creation';
import AbilityAnchor from './components/abilities';
import ClassSelection from './components/class-selection';
import CharacterList from './components/character-list';

window.onload = () => {
  render((
    <Router history={hashHistory}>
      <Route path="/" component={Application}>
        <IndexRoute component={Home} />
        <Route path='view' component={CharacterList} />
        <Route path='create' component={CharacterCreationWrapper}>
          <Route path='pick-race' component={RaceSelection} />
          <Route path='pick-abilities' component={AbilityAnchor} />
          <Route path='pick-class' component={ClassSelection} />
        </Route>
      </Route>
    </Router>
  ), document.getElementById('render'));
};
