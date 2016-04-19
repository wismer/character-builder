import React from 'react';
import Races from './character-races/races';
import Race from './character-races/race';

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
      <div></div>
    );
  }
});

function showReact() {
  var display = (skills) => {
    var races = skills.map(race => new Race(race));
    console.log(races);
  };

  fetch('http://localhost:8000/api/character_creation/', {
    headers: {
      'Content-Type': 'application/json'
    },
    mode: 'cors'
  }).then((response) => {
    response.json().then(display);
  });


  // ReactDOM.render(
  //   <Accordion races={races} />,
  //   document.getElementById('render')
  // );
}


window.onload = showReact;