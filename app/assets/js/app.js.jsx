import React from 'react';
import ReactDOM from 'react-dom';
import Races from './character-races/races';
import { Race, RacePreview } from './components/race';


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
    var selectedRace = this.state.selectedRace || {};
    var races = this.props.races.map((race, index) => {
      return <Race active={selectedRace.name === race.name} selectRace={this._selectRace} index={index} {...race} />;
    });
    var preview;

    if (selectedRace.name) {
      preview = <RacePreview {...selectedRace} />;
    }
    return (
      <div className='main-container'>
        <div className='race-options'>
          {races}
        </div>

        <div className='preview-race'>
          {preview}
        </div>
      </div>
    );
  }
});

function showReact() {
  var raceList = Races.map(race => {
    var attributes = race.merge();
    return {
      name: race.getName(),
      traits: attributes.traits.toList(),
      stats: attributes.stats.toList(),
      klass: race,
      subraces: race.subraces()
    };
  });
  ReactDOM.render(
    <App races={raceList}/>,
    document.getElementById('render')
  );
}


window.onload = showReact;