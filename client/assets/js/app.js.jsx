import React from 'react';
import ReactDOM from 'react-dom';
import { RaceList, RaceChoice } from './components/races/race-list';
import ClassList from './components/class-select';
import { readableAttributes, convertScore } from './util/constants';
import { retrieve } from './util/adapter';
import { CharBuilder } from './util/helper';
import Dashboard from './components/dashboard/dashboard';
import { Weapon, Armor, Item, Player, PlayerRace } from './classes/main';
import SkillActions from './mixins/skill-actions';


let Skills = React.createClass({
  getInitialState() {
    return { _skillChoices: 3, highlightedSkill: -1 };
  },

  render() {
    var tooltip = this.props.skills[this.state.highlightedSkill];
    var values = Array.from(this.props.skills.values());
    var skills = values.map((skill, i) => {
      var status;
      if (skill.isProficient) {
        status = <span className='checked' />;
      } else {
        status = <span className='unchecked' />
      }
      return (
        <div className='skill' key={skill.key} onClick={this.props.skillClick.bind(null, skill)}>
          <div className='skill-mod'>
            ({skill.modifier > 0 ? `+${skill.modifier}` : skill.modifier})
          </div>
          {status}
          <div>{skill.name}</div>
        </div>
      );
    });

    return (
      <div id='skills'>
        <div className='skill-tooltip'>
          {tooltip ? tooltip.desc : ''}
        </div>

        <div className='skill-list'>
          {skills}
        </div>
      </div>
    )
  }
});


const STEPS = [
    { component: RaceList, updateFunc: '_updateRace' },
    { component: ClassList, updateFunc: '_updateClass' }
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
      charName: null,
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
      trainedSkills: new Set(),
      _currentStep: 0,
      _skillChoices: 3,
    };
  },

  _updateClass(activeClass, evt) {
    debugger
  },

  _updateRace(activeRace, evt) {
    let { race } = this,
        mod = 1;

    if (evt.type !== 'click') {
      return;
    }

    if (!race) {
      race = activeRace;
    } else if (activeRace.name === race.name) {
      race = null;
      mod = -1;
    } else {
      abilityScores = race.abilityScores;
      race = activeRace;
    }

    this.setState({ race });
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

  _skillClick(skill) {
    var trainedSkills = this.state.trainedSkills;
    if (trainedSkills.has(skill.name)) {
      trainedSkills.delete(skill.name);
    } else {
      trainedSkills.add(skill.name);
    }
    this.setState({ trainedSkills })
  },

  interact(evt, key) {
    var input = evt.currentTarget.getElementsByTagName('input')[0];
    input.focus();
  },

  render() {
    var { race, trainedSkills, abilityScores } = this.state,
      { skills, perks, basic } = this.props;


    var helper = new CharBuilder(skills);
    var { playerInfo, skills, abilities } = helper.populateProps(this.state);

    var info = playerInfo.map(bit => {
      return (
        <label htmlFor={bit.key} key={bit.key} onClick={this.interact} className={bit.className}>
          <div className='basic-info-label'>{bit.label}</div>
          <input type='text' id={bit.key} defaultValue={bit.value}></input>
        </label>
      );
    });

    // order of evemts fpr basic info input click action...
    // 1. after click, the input is cleared.
    // 2. the user types it in.
    // 3. pressing enter (which triggers WHAT event?!) returns control?
    // 4. pressing escape or clicking out clears it???
    return (
      <div className='primary-node'>
        <div id='current-view'>
          {this._renderCurrentStep()}
        </div>
        <Dashboard abilities={abilities}>
          <div className='char-info'>
            {info}
          </div>

          <Skills skillClick={this._skillClick} skills={skills} />

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
      armor,
      weapons
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