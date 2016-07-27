import React, { PropTypes as PT } from 'react';
import { withRouter, Link } from 'react-router';

import { retrieve, save } from '../util/adapter';
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
      const player = this.state.player;
      player[key] = value;
      this.setState({ player });
    };
  }

  componentWillMount() {
    const player = this.state.player;
    retrieve('resources', resources => {
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
    if (this.props.children)
      return React.cloneElement(this.props.children, {
        races: this.state.races,
        update: this.update,
        player: this.state.player
      });
  }

  render() {
    return (
      <CharacterCreation {...this.state} children={this.current}>
        {this.current}
      </CharacterCreation>
    );
  }
}

export default withRouter(CharacterCreationWrapper);