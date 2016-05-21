import React from 'react';
import ReactDOM from 'react-dom';
import { RaceList, RaceChoice } from './components/races/race-list';
import { readableAttributes } from './util/constants';
import { retrieve } from './util/adapter';
import Dashboard from './components/dashboard/dashboard';
import { Weapon, Armor, Item } from './classes/item';

let App = React.createClass({
  getInitialState() {
    return {
      race: null,
      raceList: [],
    };
  },



  _selectRace(selectedRace) {
    this.setState({ selectedRace });
  },

  _reveal(activeState, raceProps) {
    this.setState({ activeRace: activeState ? raceProps : null });
  },

  updateSelection(evtName, race) {
    if (evtName === 'enter') {

    } else if (evtName === 'leave') {

    } else {

    }
  },

  onRaceSelect(race) {
    this.setState({ race });
  },

  componentDidMount() {
    retrieve('items', items => {
      var weapons = items.weapons.map(weapon => new Weapon(weapon));
      var armor = items.armor.map(armor => new Armor(armor));
      debugger
    });
    retrieve('races', raceList => this.setState({ raceList }));
  },

  render() {
    var choice = this.state.choice,
        abilityScores = this.state.race ? this.state.race.attributes : [];
    return (
      <div className='primary-node'>
        <RaceList onRaceSelect={this.onRaceSelect} updateSelection={this.updateSelection} races={this.state.raceList} />

        <Dashboard abilityScores={abilityScores} />
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