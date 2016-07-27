import React from 'react';
import { save } from '../util/adapter';
import { Link } from 'react-router';

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

  revealTooltip(race) {
    this.setState({ highlightedRace: race });
  }

  update(race) {
    this.props.update('_race', race);
  }

  componentWillReceiveProps(prevProps) {
    const { player, step } = this.props;
    if (prevProps.location.pathname !== '/create/pick-abilities') return;
    save(`characters/${player.id}/race`, player.toJSON(), () => {
      // no-op for now
    }, error => {
      this.props.update('_race', null, { error });
    });
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

        <Link to='/create/pick-abilities'>ABILITIES</Link>
      </section>
    );
  }
}

RaceSelection.propTypes = {
  races: React.PropTypes.array,
  update: React.PropTypes.func
};

RaceSelection.defaultProps = {
  races: [],
  update: () => {}
};

export default RaceSelection;