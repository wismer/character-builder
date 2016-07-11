import React from 'react';
import ReactDOM from 'react-dom';
import { retrieve, save } from './util/adapter';
import { Race, Player, CharacterClass, Skill } from './classes/main';
import CharSelection from './components/char-selection';
import AbilityAnchor from './components/abilities';
import RaceSelection from './components/race-selection';


class Application extends React.Component {
  constructor() {
    super();
    // state
    this.state = {
      player: new Player({
        onchange: player => this.setState({ player })
      }),
      step: 1
    };
    // event handlers

    this.nextStep = () => {
      let player = this.state.player.toJSON(),
        step = this.state.step;

      save('player/', player).then(() => {
        this.setState({ step: step + 1 });
      }, () => {
        // console.log('ERROR: ', error);
      });
    };

    this.prevStep = () => {
      let player = this.state.player.toJSON(),
        step = this.state.step;

      save('player/', player).then(() => {
        this.setState({ step: step - 1 });
      }, () => {
        // console.log('ERROR: ', error);
      });
    };
  }

  get currentRace() {
    return this.state.player.fetchRace();
  }

  render() {
    var component, update;
    switch (this.state.step) {
      case 1:
        update = (race) => this.state.player.setRace(race);
        component = <RaceSelection races={this.props.races} setRace={update} />;
        break;
      case 2:
        update = (charClass) => this.state.player.setClass(charClass);
        component = <CharSelection classes={this.props.classes} setClass={update} />;
        break;
      case 3:
        update = (abilities) => this.state.player.setAbilities(abilities);
        component = <AbilityAnchor save={update} player={this.state.player} />;
        break;
      default:
        component = '';
    }

    var player = this.state.player;
    var abilities = player.abilities.map((ability, i) => {
      var score = this.currentRace.abilities[i] + ability.value;
      return (
        <li key={ability.key}>{ability.name}: {score}</li>
      );
    });

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

        <div>
          current race: {this.currentRace.name}
        </div>

      </div>
    );
  }
}


Application.propTypes = {
  skills: React.propTypes.array,
  classes: React.propTypes.array,
  armor: React.propTypes.array,
  weapons: React.propTypes.array,
  abilities: React.propTypes.array,
  races: React.propTypes.array
};

function showReact() {
  retrieve('resources', resources => {
    var { weapons, armor, skills, character_classes, abilities } = resources;
    var toSkillMap = (skill) => {
      skill.key = skill.name.toLowerCase().replace(/\s/g, '-');
      return [skill.name, skill];
    };

    var props = {
      skills: new Skill(skills.map(toSkillMap)),
      classes: character_classes.map(charClass => new CharacterClass(charClass)),
      armor,
      weapons,
      abilities
    };

    window.skills = new Skill(skills.map(toSkillMap));

    retrieve('races', races => {
      props.races = races.map(race => new Race(race));
      ReactDOM.render(
        <Application {...props}/>,
        document.getElementById('render')
      );
    });
  });
}

window.onload = showReact;