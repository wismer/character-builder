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
  mixins: [SkillActions],
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
      trainedSkills: new Map(),
      _currentStep: 0,
      _skillChoices: 3,
    };
  },

  _updateRace(activeRace, evt) {
    let { state, props } = this,
      abilityScores = [0, 0, 0, 0, 0, 0, 0],
      mod = 1;
    if (evt.type !== 'click') {
      return;
    }

    if (!state.race) {
      state.race = activeRace;
    } else if (activeRace.name === state.race.name) {
      state.race = null;
      mod = -1;
    } else {
      abilityScores = state.race.abilityScores;
      state.race = activeRace;
    }

    for (var [i, score] of abilityScores.entries()) {
      state.abilityScores[i] += (activeRace.abilityScores[i] * mod) - score;
    }

    state.trainedSkills = new Map();
    // TODO: Work on handling the skills changing state
    this.setState(state);
  },

  _renderCurrentStep() {
    var step = STEPS[this.state._currentStep];
    var races = this.props.races;
    var updateSelection = this[step.updateFunc];
    return React.createElement(step.component, {races, updateSelection});
  },

  render() {
    var { weapons, armor, skills } = this.props,
        { race, trainedSkills } = this.state,
        abilities = this.state.abilityScores.map(convertScore),
        dashboard = {};
    if (race) {
      race = new PlayerRace(race);
    }

    // skills

    for (let [k, v] of this.props.skills) {
      v.is_proficient = trainedSkills.has(k);
    }

    // TODO: feats

    return (
      <div className='primary-node'>
        <div id='current-view'>
          {this._renderCurrentStep()}
        </div>
        <Dashboard skills={skills} abilities={abilities} skillClick={this._skillClick} />
      </div>
    );
  }
});

function showReact() {
  retrieve('items', items => {
    var { weapons, armor, skills } = items;
    var toSkillMap = (skill) => {
      skill.key = skill.name.toLowerCase().replace(/\s/g, '-');
      return [skill.name, skill];
    };
    skills = new Map(skills.map(toSkillMap));
    retrieve('races', races => {
      ReactDOM.render(
        <App skills={skills} armor={armor} weapons={weapons} races={races} />,
        document.getElementById('render')
      );
    })
  });
}

window.onload = showReact;