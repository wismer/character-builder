import React from 'react';
import ReactDOM from 'react-dom';
import { RaceList, RaceChoice } from './components/races/race-list';
import ClassList from './components/class-select';
import { readableAttributes, convertScore } from './util/constants';
import { retrieve } from './util/adapter';
import { CharBuilder } from './util/helper';
import Dashboard from './components/dashboard/dashboard';
import SkillActions from './mixins/skill-actions';

import { Race, Player, CharacterClass } from './classes/main';


const justForNow = (n) => {
  if (n < 11) {
    return 1;
  } else {
    return Math.floor((n - 10) / 2);
  }
}

let RaceSelection = React.createClass({
  update(race) {
    this.props.setRace(race);
  },

  render() {
    var races = this.props.races.map(race => {
      var subraces = race.subraces.map(subrace => {
        return (
          <li key={subrace.name} onClick={() => this.update(subrace)}>
            {subrace.name}
          </li>
        );
      })
      return (
        <ul key={race.name}>
          {race.name}
          {subraces}
        </ul>
      )
    });
    return (
      <section id='race-select'>
        {races}
      </section>
    );
  }
});


let CharSelection = React.createClass({
  update(subclass) {
    this.props.setClass(subclass);
  },

  render() {
    var classes = this.props.classes.map(charClass => {
      var subclasses = charClass.subclasses.map(subclass => {
        return (
          <li key={subclass.name} onClick={() => this.update(subclass)}>
            {subclass.name}
          </li>
        );
      })
      return (
        <ul key={charClass.name}>
          {charClass.names}
          {subclasses}
        </ul>
      );
    });
    return (
      <div>CLASSES: {classes}</div>
    )
  }
});

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

let AbilityScoreChange = React.createClass({
  getInitialState() {
    return {
      abilities: [],
      points: 27
    };
  },

  componentWillMount() {
    this.setState({ abilities: this.props.player.fetchAbilities() });
  },

  render() {
    var { player } = this.props;
    var { abilities, points } = this.state;
    var finalAbilities = abilities.map(ability => {
      var inc = () => {
        var required = justForNow(ability.value);
        if (ability.value <= 20 && points - required > 0) {
          ability.value += 1;
          points -= required;
          this.setState({ abilities, points });
        }
      };

      var dec = () => {
        var refundPts;
        if (ability.value < 12) {
          refundPts = 1;
        } else {
          refundPts = Math.floor((ability.value - 10) / 2);
        }
        ability.value -= 1;
        points += refundPts;
        if (ability.value >= ability._base) {
          this.setState({ abilities, points });
        } else {
          ability.value = ability._base;
          this.setState({ abilities, points });
        }
      };
      return (
        <li key={ability.key}>
          {ability.name}: {ability.value}
          <div>
            <input type='button' defaultValue='+' onClick={inc}></input>
            <input type='button' defaultValue='-' onClick={dec}></input>
          </div>
        </li>
      );
    });
    return (
      <ul>
        change abilities (points left: {points})
        {finalAbilities}
      </ul>
    );
  }
});


class Application extends React.Component {
  constructor() {
    super()
    this.state = {
      player: new Player({
        onchange: player => this.setState({ player })
      }),
      step: 0
    };
  }

  _prevStep() {
    if (this.state.step > 0) {
      this.setState({ step: this.state.step - 1 });
    }
  }

  _nextStep() {
    if (this.state.step < 1) {
      this.setState({ step: this.state.step + 1 });
    }
  }

  render() {
    var component, update;
    switch (this.state.step) {
      case 0:
        update = (race) => this.state.player.setRace(race);
        component = <RaceSelection races={this.props.races} setRace={update} />
        break;
      case 1:
        update = (charClass) => this.state.player.setClass(charClass);
        component = <CharSelection classes={this.props.classes} setClass={update} />
        break;
      case 2:
        update = (ability) => this.state.player.setAbility(ability);
        component = <AbilityScoreChange player={this.state.player} />
        break;
      default:
        component = '';
    }

    var player = this.state.player;
    var currentRace = player.fetchRace();
    var abilities = player.abilities.map((ability, i) => {
      var score = currentRace.abilities[i] + ability.value;
      return (
        <li key={ability.key}>{ability.name}: {score}</li>
      );
    });

    var skills = [];
    for (var skill of player.fetchSkills()) {
      var el = <li key={skill}>{skill}</li>
      skills.push(el);
    }
    var goto = step => this.setState({ step });
    return (
      <div>
        <div id='current-step'>
          {component}
        </div>
        <ul>
          ABILITY SCORES
          {abilities}
        </ul>

        <ul>
          SKILLS
          {skills}
        </ul>
        <div>
          current race: {currentRace.name}
        </div>

        <div className='navigation'>
          <input type='button' onClick={() => goto(this.state.step + 1)} defaultValue='Back' />
          <input type='button' onClick={() => goto(this.state.step - 1)} defaultValue='Next' />
        </div>
      </div>
    );
  }
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
    if (evt.type !== 'click') return;
    var { race } = this.state;

    this.setState({ race });
  },

  _renderCurrentStep(p={}) {
    var step = this.state._currentStep;
    var { races } = this.props;
    var component;

    if (step === 0) {
      component = <SelectRace selectRace={this._selectRace} races={races} />
    } else if (step === 1) {
      component = <Frame />
    }

    return component;
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
      classes: character_classes.map(charClass => new CharacterClass(charClass)),
      armor,
      weapons
    };

    retrieve('races', races => {
      props.races = races.map(race => new Race(race));

      ReactDOM.render(
        <Application {...props}/>,
        document.getElementById('render')
      );
    })
  });
}

window.onload = showReact;