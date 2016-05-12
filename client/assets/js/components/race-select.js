import React from 'react';
import Races from '../character-races/races';

var SubRace = React.createClass({
  render() {
    return (
      <div className='subrace'>
        <div className='race-title'>
          <h5>{this.props.name}</h5>
        </div>
      </div>
    );
  }
});

var RaceDetail = React.createClass({
  render() {
    return (
      <div className='race-detail'></div>
    );
  }
});

var RaceItem = React.createClass({
  render() {
    return (
      <div className='race-item'></div>
    );
  }
});

var PrimaryRace = React.createClass({
  _classAttributes() {
    return this.props.raceAttributes.map(attr => {
      return <li>{attr}</li>;
    });
  },

  _raceTraits() {
    return this.props.traits.map((trait, key) => {
      var values = trait.values.map(t => t.val).join(', ');
      return (
        <div className='trait-field' key={key}>
          <li className='trait-name'>{trait.attr}</li>
          <li className='trait-value'>{values}</li>
        </div>
      );
    });
  },

  render() {
    return (
      <div className='primary-race'>
        <div className='race-title'>
          <h2>{this.props.name}</h2>
        </div>

        <div className='race-info'>
          <div className='race-description'>
            {this.props.desc}
          </div>


          <div className='race-stats'>
            <div className='race-attributes'>
              <ul>
                <div className='trait-field'>
                  <li className='trait-name'>Attributes</li>
                  {this._raceTraits()}
                </div>
              </ul>
            </div>

            <div className='race-skills'>
              <ul>
              </ul>
            </div>

            <div className='attributes'>

            </div>
          </div>
        </div>


      </div>
    );
  }
});

const races = Races.map(race => {
  var attributes = race.merge();
  return {
    name: race.getName(),
    traits: attributes.traits.toList(),
    stats: attributes.stats.toList(),
    klass: race,
    subraces: race.subraces()
  };
});


export default {
  componentClass: PrimaryRace,
  component: races,
  type: 'list',
  props: {
    stats: [],
    traits: []
  }
};