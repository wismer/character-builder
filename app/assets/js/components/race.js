import React from 'react';

export var Race = React.createClass({
  handleEnter(activeState) {
    this.props.reveal(activeState, this.props);
  },

  handleClick() {
    this.props.selectRace(this.props);
  },

  render() {
    var { stats, traits, name, subraces, active } = this.props;

    // if (active && subraces) {
    //   name = subraces.map(race => <div className='subrace'>{race.name}</div>);
    // }
    var className = active ? 'race-item race-active' : 'race-item';
    return (
      <div onClick={this.handleClick} key={name} className={className}>
        {name}
      </div>
    );
  }
});

const RaceSummary = React.createClass({
  render() {
    return (
      <div className='race-summary'>
        {this.props.name}
        <button>select</button>
      </div>
    );
  }
});

export var RacePreview = React.createClass({
  render() {
    var summary;
    var { subraces, traits, stats, name } = this.props;
    if (subraces.length > 0) {
      summary = subraces.map((subrace, i) => {
        return (
          <RaceSummary {...subrace} key={i} />
        );
      });
    } else {
      summary = <RaceSummary {...this.props} />;
    }
    return (
      <div className='race-preview'>
        {summary}
      </div>
    );
  }
});