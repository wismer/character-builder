import React from 'react';
import ReactDOM from 'react-dom';
import Parent from './util/generic-parent';
// import RaceSelection from './components/race-selection';
// import { sampleRaceJSON } from './util/constants';

const deeplyNestedObject = {
  name: '1a',
  label: 'parent 1',
  score: 0,
  nested: [
    {
      name: '2a',
      label: 'child of parent 1a',
      score: 10,
      nested: [
        {
          name: '3a',
          label: 'child of parent 2a',
          score: 20,
          nested: [
            {
              name: '4a',
              label: 'child of parent 3a',
              score: 30,
              nested: []
            }
          ]
        }
      ]
    },

    {
      name: '2b',
      label: 'child of parent 1a',
      score: 5,
      nested: []
    }
  ]
};

Parent.defaultProps._childUproot = 'nested';
Parent.defaultProps._fields = ['score', 'number'];
Parent.defaultProps.primaryNode = false;
Parent.defaultProps.nodeLevel = 0;
Parent.defaultProps.idx = 0;

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
      <Parent {...deeplyNestedObject} primaryNode={true} />
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