import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Router, Route, hashHistory } from 'react-router';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import CreateCharacter from './create-character';
import RaceSelection from './race-select';
import ClassSelection from './class-selection';
import { characterCreation } from './store/reducers';
import { getGameInformation } from './adapters';
import AttributeSelect from './AttributeSelect';
import './index.css';

getGameInformation().then(({races, classes, armor, weapons, skills}) => {
  const store = createStore(characterCreation);
  store.dispatch({ type: 'SETUP', races, classes, skills, armor, weapons });
  ReactDOM.render(
    (<Provider store={store}>
        <Router history={hashHistory}>
          <Route path='/' component={App}>
            <Route path='create' component={CreateCharacter}>
              <Route path='race' component={RaceSelection} />
              <Route path='class' component={ClassSelection} />
              <Route path='attributes' component={AttributeSelect} />
            </Route>
          </Route>
        </Router>
      </Provider>),
    document.getElementById('root')
  );
});
