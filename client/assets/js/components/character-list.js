import React, { PropTypes as PT } from 'react';
import { retrieve } from '../util/adapter';

const scoreMappings = ['str', 'con', 'dex', 'int', 'wis', 'cha'];

class CharacterCard extends React.Component {
  render() {
    let miniscores = this.props.ability_scores.map((score, i) => {
      var scoreName = scoreMappings[i];
      return (
        <div className='miniscore' key={scoreName}>
          <div className='score'>
            {score}
          </div>

          <div className='name'>
            {scoreName}
          </div>
        </div>
      );
    });
    return (
      <div className='character-card' onClick={this.handleCardClick}>
        <div className='char-details'>
          <div className='char-name'>
            {this.props.character_name}
          </div>

          <div className='char-race'>
            {this.props.race}
          </div>

          <div className='char-class'>
            {this.props.charClass}
          </div>
        </div>
        <div className='miniscores'>
          {miniscores}
        </div>
      </div>
    );
  }
}

CharacterCard.propTypes = {
  character_name: PT.string,
  race: PT.string,
  charClass: PT.string,
  ability_scores: PT.array
};


class CharacterList extends React.Component {
  constructor() {
    super();
    this.state = {
      characters: []
    };
  }

  componentDidMount() {
    retrieve('characters', characters => {
      this.setState({ characters });
    }, (e) => {
      console.log('ERROR', e);
    });
  }

  render() {
    const chars = this.state.characters.map(char => <CharacterCard key={char.id} {...char} />);
    return (
      <div id='home-container'>
        {chars}
      </div>
    );
  }
}

export default CharacterList;