import React from 'react';

export default class RaceSelection extends React.Component {
  update(race) {
    this.props.setRace(race);
  }

  render() {
    var races = this.props.races.map(race => {
      var subraces = race.subraces.map(subrace => {
        return (
          <li key={subrace.name} onClick={() => this.update(subrace)}>
            {subrace.name}
          </li>
        );
      })
      return (
        <ul key={race.name}>
          {race.name}
          {subraces}
        </ul>
      )
    });
    return (
      <section id='race-select'>
        {races}
      </section>
    );
  }
}
