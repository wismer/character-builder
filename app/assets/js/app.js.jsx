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

  _selectRace(race) {
    this.setState({ activeRace: race, selectedRace: race });
  },

  _reveal(activeState, raceProps) {
    this.setState({ activeRace: activeState ? raceProps : null });
  },

  render() {
    var { activeRace, selectedRace } = this.state;
    var races = this.props.races.map(race => {
      return (
        <Race {...race} reveal={this._reveal} selectRace={this._selectRace} />
      );
    });

    var preview = null;



    if (activeRace && selectedRace) {
      preview = <RacePreview {...selectedRace} />;
    }
    var previewClassName = 'active-preview';

    if (selectedRace) {
      previewClassName = 'preview-lock';
    } else if (!preview) {
      previewClassName += ' no-show';
    }

    return (
      <div className='main-container'>
        <div className='race-options'>
          {races}
        </div>

        <div className={previewClassName}>
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