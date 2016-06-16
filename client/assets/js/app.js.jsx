import React from 'react';
import ReactDOM from 'react-dom';
import { RaceList, RaceChoice } from './components/races/race-list';
import ClassList from './components/class-select';
import { readableAttributes, convertScore } from './util/constants';
import { retrieve } from './util/adapter';
import Dashboard from './components/dashboard/dashboard';
import { Weapon, Armor, Item, Player, PlayerRace } from './classes/main';
import SkillActions from './mixins/skill-actions';


const STEPS = [
    { component: RaceList, updateFunc: '_updateRace' },
    { component: ClassList, updateFunc: '_updateClass' }
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
      age: 0,
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

  _updateClass(activeClass, evt) {
    debugger
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

  _updateBasic(field) {
    
  },

  _prevStep() {
    if (this.state._currentStep === 0) {
      return;
    }
    this.setState({ _currentStep: this.state._currentStep - 1 });
  },

  _nextStep() {
    if (this.state._currentStep === STEPS.length - 1) {
      return;
    }
    this.setState({ _currentStep: this.state._currentStep + 1 });
  },

  render() {
    var { race, trainedSkills, abilityScores, playerName, characterName, age } = this.state,
      { skills, perks } = this.props;


    var basicInfo = {
      playerAge: age || 20,
      playerName: playerName || '',
      charName: characterName || '',
      playerRace: race || '',
    }
    // skills

    for (let [k, v] of skills) {
      v.isProficient = trainedSkills.has(k);
    }

    // abilities

    var abilities = abilityScores.map(convertScore);

    // TODO: feats

    return (
      <div className='primary-node'>
        <div id='current-view'>
          {this._renderCurrentStep()}
        </div>
        <Dashboard
          updateBasic={this._updateBasic}
          basicInfo={basicInfo}
          skills={skills}
          perks={perks}
          abilities={abilities}
          skillClick={this._skillClick}
        >
          <div className='navigation'>
            <input type='button' onClick={this._prevStep} defaultValue='Back' />
            <input type='button' onClick={this._nextStep} defaultValue='Next' />
          </div>
        </Dashboard>
      </div>
    );
  }
});

function showReact() {
  retrieve('items', items => {
    var { weapons, armor, skills, character_classes } = items;
    var toSkillMap = (skill) => {
      skill.key = skill.name.toLowerCase().replace(/\s/g, '-');
      return [skill.name, skill];
    };
    var props = {
      skills: new Map(skills.map(toSkillMap)),
      classes: character_classes,
      armor, weapons
    };

    retrieve('races', races => {
      props.races = races;
      ReactDOM.render(
        <App {...props}/>,
        document.getElementById('render')
      );
    })
  });
}

window.onload = showReact;