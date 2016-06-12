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
      trainedSkills: new Set(),
      _currentStep: 0,
      _skillChoices: 3,
    };
  },

  _updateRace(activeRace, evt) {
    var { race, abilityScores, trainedSkills } = this.state,
        increase = true,
        racialAbilityScores = activeRace.abilityScores,
        racialSkills = activeRace.skills;


    if (evt.type === 'mouseleave') {
      race = race.selected ? race : null;
      increase = false;
    }

    if (evt.type === 'mouseenter' && !race) {
      race = activeRace;
      race.selected = false;
    }

    if (evt.type === 'click' && race.name === activeRace.name) {
      debugger
      race = activeRace;
      race.selected = true;
    }

    /*
      Different possible states
      selected, but not highlighted
      selected and highlighted
      not selected and highlighted

      Mouse Leave:
        There _should_ be a race in state - (not null)
        There *might*
    */
    //
    // if (evt.type === 'mouseenter') {
    //   increase = true;
    //   race = activeRace;
    //   // copy highlighted race
    // } else if (evt.type === 'mouseleave' || (race.name && race.name === activeRace.name)) {
    //   // erase any highlighted but not saved race; update abilityScores
    //   race = null;
    //   // if (race && race.name === activeRace.name) {
    //   //   race = null;
    //   // } else {
    //   //   // copy selected race
    //   //   race = activeRace;
    //   // }
    // } else {
    //   race = activeRace;
    // }

    if (increase) {
      racialAbilityScores.forEach((score, i) => abilityScores[i] += score);
      racialSkills.forEach(skill => trainedSkills.add(skill.toLowerCase()));
    } else {
      racialAbilityScores.forEach((score, i) => abilityScores[i] -= score);
      racialSkills.forEach(skill => trainedSkills.delete(skill.toLowerCase()));
    }

    this.setState({ abilityScores, race, trainedSkills });
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
      races.forEach(race => race.selected = false);
      ReactDOM.render(
        <App skills={skills} armor={armor} weapons={weapons} races={races} />,
        document.getElementById('render')
      );
    })
  });
}

window.onload = showReact;