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
    var className = subraces.length > 0 ? 'race race-big' : 'race';
    subraces = subraces.map((subrace, i) => {
      return <div className='card' onClick={this.handleClick.bind(null, subrace)} key={`${i}-d`}>{subrace.name}</div>;
    });

    if (subraces.length > 0) {

      return (
        <a key={name} className={className} href="javascript:void(0)">
          <div className='cards'>
            {subraces}
          </div>
        </a>
      );
    } else {
      return (
        <a key={index} onClick={this.handleClick.bind(null, this.props)} key={name} className={className}>
          <p>{name}</p>
        </a>
      );
    }
  }
});


const Keyword = React.createClass({
  getInitialState() {
    return { spell: null };
  },

  _fetchDefinition() {
    var query = this.props.val.replace('*', '');
    fetch(`http://localhost:8000/api/spells/?spell=${query}`, {
      headers: {
        'Content-Type': 'application/json'
      },
      mode: 'cors'
    }).then(definition => {
      definition.json().then(spell => this.setState({ spell }))
    });
  },

  render() {
    return (
      <div onMouseEnter={this._fetchDefinition} className='race-trait-keyword'>{this.props.val}</div>
    );
  }
});

const Trait = React.createClass({
  render() {
    var { attr, values } = this.props;
    values = values.map(trait => {
      if (trait.isKeyword) {
        return <Keyword val={trait.val} />;
      } else {
        return trait.val;
      }
    });
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