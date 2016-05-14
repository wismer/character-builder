import React from 'react';
import ReactDOM from 'react-dom';
import { RaceList, RaceChoice } from './components/races/race-list';
import { readableAttributes } from './util/constants';
import PlayerDashboard from './components/player-preview';
import { getRaces } from './util/adapter';

let App = React.createClass({
  getInitialState() {
    return {
      race: null
    };
  },

  _selectRace(selectedRace) {
    this.setState({ selectedRace });
  },

  _reveal(activeState, raceProps) {
    this.setState({ activeRace: activeState ? raceProps : null });
  },

  _updateScore(score, parent, name, a, b) {
    var [x,y] = parent.map(i => i - 1);
    var activeCell = [];
    var parent;
    if (x > -1) {
      var item = items[x][y];
      score += item.score;
      activeCell = [a,b];
      parent = [x,y];
    }
    this.setState({ score, activeCell, parent });
  },

  updateChoice(data, selected=false) {
    if (this.state.choice.selected && data.name === this.state.choice.data.name) {
      this.setState({ choice: { selected: false, data: null }});
    } else if (this.state.choice.selected) {
      return;
    } else {
      this.setState({ choice: { selected, data } });
    }
  },

  render() {
    var choice = this.state.choice;
    return (
      <div className='primary-node'>
        <RaceList updateChoice={this.updateChoice} />

        <PlayerDashboard />
      </div>
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