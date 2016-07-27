import React from 'react';
import { retrieve } from '../util/adapter';
import { Link } from 'react-router';
import Player from '../classes/player';

class CharacterCreation extends React.Component {
  constructor() {
    super();
    this.state = {
      skills: [],
      abilities: [],
      characterClasses: [],
      races: [],
      weapons: [],
      items: [],
      player: new Player({
        onchange: (player) => this.setState({ player })
      })
    };
  }

  componentWillMount() {
    retrieve('resources', resources => {
      this.setState({...resources});
    }, () => {

    });
  }

  get childNode() {
    return this.props.children;
  }

  render() {
    return (
      <div id='character-creation'>
        <div id='active-step'>
          {this.childNode}
        </div>
      </div>
    );
  }
}

class CharacterCreationState extends React.Component {
  get activeStep() { return this.props.activeStep; }

  handleStepClick() {
    return this.props.handleStepClick;
  }

  render() {
    return (
      <CharacterCreation></CharacterCreation>
    );
  }
}



CharacterCreationState.propTypes = {
  activeStep: React.PropTypes.number.isRequired,
  handleStepClick: React.PropTypes.func,
  steps: React.PropTypes.array
};

CharacterCreationState.defaultProps = {
  step: 0,
  steps: [
    { label: 'Choose a Race', href: '/pick-race', stepNumber: 0 },
    { label: 'Adjust your Ability Scores', href: '/pick-scores', stepNumber: 1 },
    { label: 'Pick your Character Class', href: '/pick-class', stepNumber: 2 }
  ]
};

export default CharacterCreationState;