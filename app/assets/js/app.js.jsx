import React from 'react';
import ReactDOM from 'react-dom';
import Races from './character-races/races';
import RefillsNavBar from './refills/nav-bar';
import RefillsBreadcrumbs from './refills/breadcrumbs';
import { Race, RacePreview } from './components/race';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

let Accordion = React.createClass({
  getInitialState() {
    return { selectedRace: {} };
  },

  _handleClick(clickedRace, e) {
    var { selectedRace } = this.state;
    selectedRace = selectedRace.name === clickedRace.name ? {} : clickedRace;
    this.setState({ selectedRace });
    e.preventDefault();
  },

  render() {
    var { selectedRace } = this.state;
    var elements = this.props.races.map((characterRace, i) => {
      var active = selectedRace.name === characterRace.name && characterRace.subraces.length > 0;
      var line = {
        maxHeight: active ? characterRace.subraces.length * 110 : 55,
        transition: 'max-height 0.5s ease-out',
        overflow: 'hidden'
      };

      var submenu = characterRace.subraces.map((subrace, k) => {
        var className = subrace.name === selectedRace.name ? 'active' : '';
        return (
          <li key={k} className={className}>
            <a href="javascript:void(0)">{subrace.name}</a>
          </li>
        );
      });
      return (
        <li key={i} style={line}>
          <a href="javascript:void(0)" onClick={this._handleClick.bind(null, characterRace)}>{characterRace.name}</a>
          <ul className='submenu'>{submenu}</ul>
        </li>
      );
    });

    return (
      <ul className="accordion playable-races">
        {elements}
      </ul>
    );
  }
});

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
    var races = this.props.races.map((race, i) => {
      var className = race.subraces.length > 0 ? 'flex-box flex-box-big' : 'flex-box';
      return (
        <a key={i} href='javascript:void(0)' className={className}>
          <h1>{race.name}</h1>
          <p>Lorem ipsum dolor sit amet, elit.</p>
        </a>
      );
    });
    return (
      <div>
        <div className='main-grid'>
          <Accordion races={this.props.races} />
          <div className='preview-playable-race'>
            dfjshflkjshdfklsjdhfklsdjhf
          </div>
        </div>
      </div>
    );
  }
});

function showReact() {
  var races = Races.map(race => {
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
    <App races={races}/>,
    document.getElementById('render')
  );

  // ReactDOM.render(
  //   <Accordion races={races} />,
  //   document.getElementById('render')
  // );
}


window.onload = showReact;