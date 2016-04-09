import React from 'react';

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

export var PrimaryRace = React.createClass({
  _classAttributes() {
    return this.props.raceAttributes.map(attr => {
      return <li>{attr}</li>;
    });
  },

  _raceTraits() {
    return this.props.traits.map((trait, key) => {
      return (
        <div className='trait-field' key={key}>
          <li className='trait-name'>{trait.attr}</li>
          <li className='trait-value'>{trait.values}</li>
        </div>
      );
    });
  },

  _raceAttributes() {
    return this.props.stats.map((attr, key) => {
      return (
        <li key={key}>{attr}</li>
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
                  {this._raceAttributes()}
                </div>
              </ul>
            </div>

            <div className='race-skills'>
              <ul>
                {this._raceTraits()}
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