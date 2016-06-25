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
    var race = this.props.race, name, attrs, details, traits;
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
      traits = this.props.preview.traits.map(trait => {
        return (
          <div className='trait-item'>
            <div className='tooltip-item' key={trait.name}>
              {trait.name}
              <div className='tooltip'>
                <p>{trait.desc}</p>
              </div>
            </div>
          </div>
        );
      });
    }
    return (
      <div className='race-choice'>
        <div>{name}</div>
        <div>{attrs}</div>
        <div>{details}</div>
        <Traits>
          {traits}
        </Traits>
      </div>
    );
  }
});

const Traits = React.createClass({
  render() {
    return <div className='trait-list'>{this.props.children}</div>
  }
});

const SubRace = React.createClass({
  render() {
    var { name } = this.props.preview;
    var { onEnter, onLeave, onSelect } = this.props;

    return (
      <div
        onClick={onSelect.bind(null, this.props.preview)}
        onMouseEnter={onEnter.bind(null, this.props.preview)}
        onMouseLeave={onLeave.bind(null, this.props.preview)}
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

  onEnter(race, evt) {
    this.props.updateSelection(...arguments);
  },

  onLeave(race, evt) {
    this.props.updateSelection(...arguments);
  },

  onSelect(race, evt) {
    this.props.updateSelection(...arguments);
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
      var playerRace = new PlayerRace(selectedRace, parent);

      preview = playerRace.toPreview(parent)
    }
    var raceList = this.props.races.map((race, ridx)=> {
      var subraces = race.subraces.map((subrace, sidx) => {
        var preview = new PlayerRace(subrace, race.name);
        return <SubRace
          parentRace={ridx}
          onEnter={onEnter}
          onLeave={onLeave}
          onSelect={onSelect}
          preview={preview}
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