import React from 'react';
import ReactDOM from 'react-dom';
import RaceSelection from './components/race-selection';
import { sampleRaceJSON } from './util/constants';


let App = React.createClass({
  getInitialState() {
    return {
      reveal: false,
      activeRace: null,
      selectedRace: null
    };
  },

  _selectRace(selectedRace) {
    this.setState({ selectedRace });
  },

  _reveal(activeState, raceProps) {
    this.setState({ activeRace: activeState ? raceProps : null });
  },

  render() {
    return (
      <div><RaceSelection {...sampleRaceJSON.races[0]} /></div>
    );
  }
});

function showReact() {
  ReactDOM.render(
    <App />,
    document.getElementById('render')
  );
}


window.onload = showReact;