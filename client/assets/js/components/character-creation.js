import React, { PropTypes as PT } from 'react';
import { withRouter, Link } from 'react-router';

import * as adapter from '../util/adapter';
import { CharacterClass, Player, Race } from '../classes/main';

const STEPS = ['/create/pick-race', '/create/pick-abilities', '/create/pick-class'];

class CharacterCreation extends React.Component {
  get next() {
    return STEPS[this.props.step];
  }

  render() {
    return (
      <div id='char-creation'>
        {this.props.children}
        <div id='current-step'>
          <Link to={this.next}>{this.next}</Link>
        </div>
      </div>
    );
  }
}

CharacterCreation.propTypes = {
  children: PT.element,
  step: PT.number
};

class CharacterCreationWrapper extends React.Component {
  constructor() {
    super();
    this.state = {
      characterClasses: [],
      skills: [],
      abilities: [],
      races: [],
      weapons: [],
      player: new Player({
        onchange: player => this.setState({ player })
      }),
      step: 0
    };

    this.update = (key, value) => {
      const { player, step } = this.state;
      player[key] = value;
      this.setState({ player, step });
    };
  }

  componentWillMount() {
    const player = this.state.player;
    adapter.retrieve('resources', resources => {
      player.id = resources.id;
      this.setState({
        characterClasses: resources.character_classes.map(klass => {
          return new CharacterClass(klass);
        }),
        races: resources.races.map(race => new Race(race)),
        skills: resources.skill,
        abilities: resources.abilities,
        weapons: resources.weapons,
        player: player
      });
    });
  }

  get current() {
    if (!this.props.children) return;
    const { step, player, abilities, races } = this.state;
    const props = {
      update: this.update,
      player: player,
      races: races,
      abilityDescriptions: abilities,
      step: step
    };

    return React.cloneElement(this.props.children, props);
  }

  render() {
    return (
      <CharacterCreation {...this.state}>
        {this.current}
      </CharacterCreation>
    );
  }
}

CharacterCreationWrapper.propTypes = {
  update: PT.func,
  player: PT.instanceOf(Player),
  races: PT.arrayOf(PT.instanceOf(Race)),
  abilityDescriptions: PT.array,
  step: PT.number,
  children: PT.element
};

export default withRouter(CharacterCreationWrapper);