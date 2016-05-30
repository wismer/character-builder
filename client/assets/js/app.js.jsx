import React from 'react';
import ReactDOM from 'react-dom';
import { RaceList, RaceChoice } from './components/races/race-list';
import { readableAttributes, convertScore } from './util/constants';
import { retrieve } from './util/adapter';
import Dashboard from './components/dashboard/dashboard';
import { Weapon, Armor, Item, Player } from './classes/main';

const STEPS = [
    { component: RaceList }
]
const sampleData = {
  perks: [
    {name: 'dwarven toughness', effect: '+1 hp per level'},
    {name: 'dwarven resilience', effect: 'poison resist'}
  ],

  skills: [
    { name: 'medicine', proficient: false },
  ]
}

let App = React.createClass({
  getInitialState() {
    var skills = this.props.items.skills;
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
      trainedSkills: skills, // { name: string, isProficient: boolean }
      hp: 0,
      level: 1,
      race: null,
      charClass: null,
      spellSlots: [],
      knownSpells: [],
      _currentStep: 0,
      _skillChoices: 3,
    };
  },

  _renderCurrentStep() {
    var step = STEPS[this.state._currentStep];
    var races = this.props.races;
    return React.createElement(step.component, {races});
  },

  render() {
    var { weapons, armor, skills } = this.props.items;
    var trainedSkills = this.state.trainedSkills;
    var abilities = this.state.abilityScores.map(convertScore);
    return (
      <div className='primary-node'>
        <Dashboard skills={skills} abilities={abilities}>
          <div id='player-info'>
            player dashboard goes here
            <div id='perks'></div>
          </div>
        </Dashboard>
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