import React, { PropTypes as PT } from 'react';
import ReactDOM from 'react-dom';
import { retrieve, save } from '../util/adapter';
import { Race, Player, CharacterClass, Skill } from '../classes/main';
import CharSelection from './char-selection';
import AbilityAnchor from './abilities';
import RaceSelection from './race-selection';
import CharacterCreationState from './player-dashboard';


class StepContainer extends React.Component {
  render() {
    var { activeStep, abilityScores, characterClasses, races } = this.props,
      component;
    var update = this.props.updatePlayer.bind(null, activeStep);
    switch (activeStep) {
      case 1:
        component = <RaceSelection update={update} ref='raceSelect' races={races} />;
        break;
      case 2:
        component = <AbilityAnchor update={update} ref='abilitySelect' abilityScores={abilityScores} />;
        break;
      case 3:
        component = <CharSelection update={update} ref='charSelect' characterClasses={characterClasses} />;
        break;
      default:
        component = '';
    }

    return component;
  }
}

class RaceContainer extends React.Component {
  componentWillMount() {
    retrieve('race-selection/', response => {

    }, () => {

    });
  }

  render() {

  }
}

StepContainer.propTypes = {
  activeStep: PT.number,
  abilityScores: PT.array,
  races: PT.array,
  characterClasses: PT.array,
  updatePlayer: PT.func
};



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

    this.updatePlayer = (step, key, value) => {
      let player = this.state.player;
      player[key] = value;
      save('player/', player.toJSON(), () => {
        this.setState({ player, step: step + 1 });
      }, () => {
        player[key] = null;
        this.setState({ player });
      });
    };
  }

  get currentRaceName() {
    return this.state.player.selectedRace.name;
  }

  get stepProperties() {
    return {
      abilityScores: this.state.player.abilityScores,
      races: this.props.races,
      characterClasses: this.props.characterClasses,
      activeStep: this.state.step,
      updatePlayer: this.updatePlayer.bind(this)
    };
  }

  render() {
    var { step } = this.state;
    return (
      <div id='main-container'>
        <div>
          {this.props.children}
        </div>
        <div id='current-step'>
          <StepContainer {...this.stepProperties} />
        </div>

        <div>
          current race: {this.currentRaceName}
        </div>

        <CharacterCreationState activeStep={step} handleStepClick={this.handleStepClick} />
      </div>
    );
  }
}


Application.propTypes = {
  skills: React.PropTypes.object,
  characterClasses: React.PropTypes.array,
  armor: React.PropTypes.array,
  weapons: React.PropTypes.array,
  abilities: React.PropTypes.array,
  races: React.PropTypes.arrayOf(React.PropTypes.instanceOf(Race))
};

Application.defaultProps = {
  skills: {},
  characterClasses: [],
  races: [],
  weapons: [],
  abilities: [],
  armor: []
};

// function showReact() {
//   retrieve('resources', resources => {
//     var { weapons, armor, skills, character_classes, abilities } = resources;
//     var toSkillMap = (skill) => {
//       skill.key = skill.name.toLowerCase().replace(/\s/g, '-');
//       return [skill.name, skill];
//     };
//
//     var props = {
//       skills: new Skill(skills.map(toSkillMap)),
//       characterClasses: character_classes.map(charClass => new CharacterClass(charClass)),
//       armor,
//       weapons,
//       abilities
//     };
//
//     retrieve('races', races => {
//       props.races = races.map(race => new Race(race));
//       ReactDOM.render(
//         <Application {...props}/>,
//         document.getElementById('render')
//       );
//     });
//   });
// }

export default Application;