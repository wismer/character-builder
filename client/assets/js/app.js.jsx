import React from 'react';
import ReactDOM from 'react-dom';
import { RaceList, RaceChoice } from './components/races/race-list';
import { readableAttributes, convertScore } from './util/constants';
import { retrieve } from './util/adapter';
import Dashboard from './components/dashboard/dashboard';
import PlayerPreview from './components/player-preview';
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
    { name: 'medicine', proficient: false }
  ]
}

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
      race: null,
      charClass: null,
      spellSlots: [],
      knownSpells: [],
      _currentStep: 0,
    };
  },

  _renderCurrentStep() {
    var step = STEPS[this.state._currentStep];
    var races = this.props.races;
    return React.createElement(step.component, {races});
  },

  render() {
    var abilityScores = this.state.abilityScores.map((score, idx) => {
      var { modifier, short, long } = convertScore(score, idx);
      return (
        <div key={short} className='ability-score'>
          <div className='ability-meta'>
            <div className='ability-name-short'>
              {short.toUpperCase()}
            </div>

            <div className='ability-score-modifier'>
              ({modifier > 0 ? `+${modifier}` : modifier})
            </div>
          </div>

          <div className='score'>
            {score}
          </div>

          <div className='ability-score-name'>
            {long}
          </div>
        </div>
      );
    });
    var perks = sampleData.perks.map(perk => {
      return <div className='perk' key={perk.name}>{perk.name}</div>
    });
    return (
      <div className='primary-node'>
        <Dashboard>
          <div className='ability-scores'>
            {abilityScores}
          </div>
          <div id='player-info'>
            player dashboard goes here
            <div id='perks'>
              {perks}
            </div>
            <div id='skills'>skills</div>
            <div id='traits'>traits</div>
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