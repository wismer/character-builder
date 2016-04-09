import React from 'react';

export var Race = React.createClass({
  handleEnter(activeState) {
    this.props.reveal(activeState, this.props);
  },

  handleClick(race) {
    this.props.selectRace(race);
  },

  render() {
    var { stats, traits, name, subraces, active, index } = this.props;
    var className = active ? 'race-item race-active' : 'race-item';
    subraces = subraces.map((subrace, i) => {
      return <div className='subrace-name' onClick={this.handleClick.bind(null, subrace)} key={`${i}-d`}>{subrace.name}</div>;
    });

    if (subraces.length > 0) {

      return (
        <div key={name} className={className}>
          <div className='subrace-names'>{subraces}</div>
        </div>
      );
    } else {
      return (
        <div key={index} onClick={this.handleClick.bind(null, this.props)} key={name} className={className}>
          {name}
        </div>
      );
    }
  }
});

const Trait = React.createClass({
  render() {
    var { attr, values } = this.props;
    return (
      <div className='race-trait'>
        <div className='trait-name'>{attr}</div>
        <div className='trait-value'>{values}</div>
      </div>
    );
  }
});

export var RacePreview = React.createClass({
  render() {
    var { name, traits, stats } = this.props;
    traits = traits.map((trait, i) => <Trait {...trait} i={i} />);
    stats = stats.map((stat, i) => <div className='attribute' key={i}>{stat}</div>);
    return (
      <div className='race-preview'>
        <div className='race-title'>
          <h3>{name}</h3>
        </div>
        <div className='primary-attributes'>{stats}</div>
        <div className='race-traits'>{traits}</div>
      </div>
    );
  }
});