import React from 'react';
import ReactDOM from 'react-dom';
import { retrieve, save } from './util/adapter';
import { Race, Player, CharacterClass } from './classes/main';
import CharSelection from './components/char-selection';
import AbilityAnchor from './components/abilities';
import RaceSelection from './components/race-selection'

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

class Application extends React.Component {
  constructor() {
    super()
    this.state = {
      player: new Player({
        onchange: player => this.setState({ player })
      }),
      step: 1
    };
  }

  _prevStep() {
    if (this.state.step > 1) {
      this.setState({ step: this.state.step - 1 });
    }
  }

  _nextStep() {
    var { step, player } = this.state;
    if (!player.race) {
      return alert('must select a race');
    }
    if (step == 1) {
      player.saveRace(() => {
        this.setState({ step: step + 1, player });
      }, (e) => console.log('ERROR: ', e));
    } else {
      this.setState({ step: step + 1 });
    }
  }

  render() {
    var component, update;
    switch (this.state.step) {
      case 1:
        update = (race) => this.state.player.setRace(race);
        component = <RaceSelection races={this.props.races} setRace={update} />
        break;
      case 2:
        update = (charClass) => this.state.player.setClass(charClass);
        component = <CharSelection classes={this.props.classes} setClass={update} />
        break;
      case 3:
        update = (abilities) => this.state.player.setAbilities(abilities);
        component = <AbilityAnchor save={update} player={this.state.player} />
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
    var goto = this._nextStep;
    return (
      <div>
        <div className='navigation'>
          <input type='button' onClick={() => this._prevStep()} defaultValue='Back' />
          <input type='button' onClick={() => this._nextStep()} defaultValue='Next' />
        </div>
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

      </div>
    );
  }
}


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