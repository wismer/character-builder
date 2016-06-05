import React from 'react';
import ReactDOM from 'react-dom';
import { RaceList, RaceChoice } from './components/races/race-list';
import { readableAttributes, convertScore } from './util/constants';
import { retrieve } from './util/adapter';
import Dashboard from './components/dashboard/dashboard';
import { Weapon, Armor, Item, Player, PlayerRace } from './classes/main';
import SkillActions from './mixins/skill-actions';


const STEPS = [
    { component: RaceList, updateFunc: '_updateRace' },
];

let App = React.createClass({
  getInitialState() {
    return {
      abilityScores: [8, 8, 8, 8, 8, 8, 8],
      armor: [],
      weapons: [],
      languages: [],
      speed: null,
      racialtraits: [],
      characterName: null,
      playerName: null,
      hasDarkvision: false,
      proficiencyBonus: 0,
      savingThrowAbilities: [],
      hp: 0,
      level: 1,
      race: null, // Race object needs to be destructured!!! TODO
      charClass: null,
      spellSlots: [],
      knownSpells: [],
      trainedSkills: [],
      _currentStep: 0,
      _skillChoices: 3,
    };
  },

  _updateRace(activeRace, evt) {
    console.log(activeRace.name, evt.type, this.state.race);
    var { race, abilityScores } = this.state;
    if (evt.type === 'mouseenter') {
      activeRace.abilityScores.forEach((score, i) => abilityScores[i] += score);
      race = activeRace;
      // copy highlighted race
    } else if (evt.type === 'mouseleave') {
      // erase any highlighted but not saved race; update abilityScores
      activeRace.abilityScores.forEach((score, i) => abilityScores[i] -= score);
      race = null;
    } else {
      // copy selected race
      race = activeRace;
    }

    this.setState({ abilityScores, race });
  },

  _renderCurrentStep() {
    var step = STEPS[this.state._currentStep];
    var races = this.props.races;
    var updateSelection = this[step.updateFunc];
    return React.createElement(step.component, {races, updateSelection});
  },

  render() {
    var { weapons, armor, skills } = this.props.items,
        abilities = this.state.abilityScores.map(convertScore),
        race = this.state.race;
    if (race) {
      race = new PlayerRace(race);
    }

    return (
      <div className='primary-node'>
        <div id='current-view'>
          {this._renderCurrentStep()}
        </div>
        <Dashboard skills={skills} abilities={abilities} />
      </div>
    );
  }
});

function showReact() {
  retrieve('items', items => {
    retrieve('races', races => {
      ReactDOM.render(
        <App items={items} races={races} />,
        document.getElementById('render')
      );
    })
  });
}

window.onload = showReact;