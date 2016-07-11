import React from 'react';

const { propTypes } = React;

class RaceTooltip extends React.Component {
  render() {
    return (
      <div>toooltip[]</div>
    );
  }
}

class RaceSelection extends React.Component {
  constructor() {
    super();
    this.state = { highlightedRace: null };
  }

  update(race) {
    this.props.setRace(race);
  }

  revealTooltip(race) {
    this.setState({ highlightedRace: race });
  }

  render() {
    var races = this.props.races.map(race => {
      var subraces = race.subraces.map(subrace => {
        return (
          <div
            key={subrace.name}
            onClick={() => this.update(subrace)}
            onMouseEnter={() => this.revealTooltip(race)}
            onMouseLeave={() => this.revealTooltip(null)}
            className='race-select'>
            {subrace.name}
          </div>
        );
      });
      return (
        <ul key={race.name}>
          {race.name}
          {subraces}
        </ul>
      );
    });
    return (
      <section id='race-select'>
        <div className='race-list'>
          {races}
          <RaceTooltip race={this.state.highlightedRace} />
        </div>
      </section>
    );
  }
}

RaceSelection.propTypes = {
  races: propTypes.array,
  setRace: propTypes.function
};

export default RaceSelection;