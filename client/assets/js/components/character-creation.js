import React, { PropTypes as PT } from 'react';
import { withRouter, Link } from 'react-router';

import * as adapter from '../util/adapter';
import { CharacterClass, Player, Race } from '../classes/main';

const STEPS = ['/create/pick-race', '/create/pick-abilities', '/create/pick-class'];

class CharacterCreation extends React.Component {
  constructor() {
    super();
    this.state = {
      name: ''
    };

    this.onNameChange = (e) => {
      this.setState({ name: e.currentTarget.value });
    };

    this.handleSubmit = (e) => {
      e.preventDefault();
      var player = this.props.player;
      player.onchange(player, 'name', this.state.name);
    };
  }

  get next() {
    return STEPS[this.props.step];
  }

  get isNameLongEnough() {
    return this.state.name.length > 1;
  }

  render() {
    const nextStep = (
      <div id='current-step'>
        <Link to={this.next}>{this.next}</Link>
      </div>
    );
    return (
      <div id='char-creation'>
        <div id='name-creation'>
          <div className='name-wrapper'>
            <div className='name-box'>
              <form onSubmit={this.handleSubmit}>
                <input name='name' type='text' onChange={this.onNameChange} placeholder='Adventurers Name' defaultValue={this.state.name} />
                <input name='submit' type='submit' />
              </form>
            </div>
          </div>
          {this.isNameLongEnough ? nextStep : ''}
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
        onchange: (player, field, value) => {
          player[field] = value;
          this.setState({ player });
        }
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
    const { step, player, abilities, races, characterClasses } = this.state;
    const props = {
      player: player,
      races: races,
      abilityDescriptions: abilities,
      step: step,
      characterClasses: characterClasses
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