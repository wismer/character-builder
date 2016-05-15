import React, { Component } from 'react';
import { raceList, readableAttributes, raceDetails } from '../../util/constants';
import { constants, adapter } from '../../util/utils';
import PlayerRace from '../../classes/race';
/*
<RaceList>
  <Race>
    <SubRace>
    <SubRace>
    <SubRace>
    <SubRace>
  </Race>
</RaceList>
*/

export const RaceChoice = React.createClass({
  render() {
    var race = this.props.race, name, attrs, details, perks;
    if (race) {
      name = race.name;
      attrs = this.props.preview.abilityScores.map(attr => {
        return (
          <li key={attr.short}>
            {attr.long}: +{attr.value}
          </li>
        );
      });
      details = this.props.preview.characteristics.map(field => {
        return <div className={field.label + '-list'} key={field.label}>{field.label}: {field.value}</div>
      });
    }
    return (
      <div className='race-choice'>
        <div>{name}</div>
        <div>{attrs}</div>
        <div>{details}</div>
      </div>
    );
  }
});

const SubRace = React.createClass({
  render() {
    var { name } = this.props;
    var { onEnter, onLeave, onSelect } = this.props;

    return (
      <div
        onClick={onSelect.bind(null, this.props)}
        onMouseEnter={onEnter.bind(null, this.props)}
        onMouseLeave={onLeave.bind(null, this.props)}
        key={name}>{name}
      </div>
    );
  }
});

const Race = React.createClass({
  render() {
    var style = {
      display: this.props.isActive ? 'flex' : 'none'
    };
    return (
      <div className='primary-race'>
        <div onClick={this.props.toggleRace.bind(null, this.props.isActive, this.props.i)}>{this.props.name}</div>
        <div className='subraces' style={style}>
          {this.props.children}
        </div>
      </div>
    );
  }
});

export const RaceList = React.createClass({
  getInitialState() {
    return {
      selected: false,
      highlighted: false,
      race: null,
      activeRaceNode: null
    };
  },

  onEnter(race) {
    if (this.state.selected) return;
    this.setState({ highlighted: true, race });
  },

  onLeave(race) {
    if (!this.state.selected) {
      this.setState({ highlighted: false, race: null });
    }
  },

  onSelect(race) {
    if (!this.state.race || race.name !== this.state.race.name) {
      this.setState({ race, selected: true });
    } else if (race.name === this.state.race.name && this.state.selected) {
      this.setState({ race: null, selected: false });
    } else {
      this.setState({ selected: true, race });
    }
  },

  toggleRace(activeRaceNode, idx) {
    if (!activeRaceNode) {
      this.setState({ activeRaceNode: idx });
    } else {
      this.setState({ activeRaceNode: null });
    }
  },

  render() {
    var { onEnter, onLeave, onSelect } = this,
        activeRaceNode = this.state.activeRaceNode;
    var selectedRace = this.state.race;
    var preview;
    if (selectedRace) {
      var parent = this.props.races[activeRaceNode];
      var playerRace = new PlayerRace(selectedRace);

      preview = playerRace.toPreview(parent)
    }
    var raceList = this.props.races.map((race, ridx)=> {
      var subraces = race.subraces.map((subrace, sidx) => {
        var sr = new PlayerRace(subrace, activeRaceNode === ridx, race);
        return <SubRace
          parentRace={ridx}
          onEnter={onEnter}
          onLeave={onLeave}
          onSelect={onSelect}
          {...subrace}
          key={`subrace-${sidx}`}
        />
      });
      return (
        <Race toggleRace={this.toggleRace}
          i={ridx}
          isActive={ridx === activeRaceNode}
          key={`race-${ridx}`}
          {...race}
        >{subraces}</Race>
      );
    });

    return (
      <div>
        <div className='selected-race'>
          <RaceChoice race={selectedRace} preview={preview} />
        </div>
        <div className='race-list'>
          {raceList}
        </div>
      </div>
    );
  }
});