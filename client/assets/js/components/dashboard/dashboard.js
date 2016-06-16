import React, { PropTypes as P } from 'react';
import SkillActions from '../../mixins/skill-actions';
import AbilityActions from '../../mixins/ability-actions';

let Perks = React.createClass({
  render() {
    return (
      <div id='perks'>
        <div className='perk-title'>
          Perks
        </div>

        <div className='perk-list'>
        </div>
      </div>
    );
  }
});

let BasicInfo = React.createClass({
  propTypes: {
    charName: P.string,
    playerName: P.string,
    playerRace: P.string,
    playerAge: P.number,
  },

  render() {
    var player = this.props;
    return (
      <div id='basic-char-info'>
        <div className='character-name'>
          {player.charName}
        </div>
        <div className='player-name'>
          {player.playerName}
        </div>
        <div className='player-race'>
          {player.playerRace}
        </div>
        <div className='player-age'>
          {player.playerAge}
        </div>
      </div>
    );
  }
});

let Skills = React.createClass({
  mixins: [SkillActions],

  getInitialState() {
    return { _skillChoices: 3, highlightedSkill: -1 };
  },

  render() {
    var modifiers = this.props.modifiers;
    var tooltip = this.props.skills[this.state.highlightedSkill];
    var values = Array.from(this.props.skills.values());
    var skills = values.map((skill, i) => {
      var modifier = modifiers[skill.ability];
      var skillHighlight = this._skillHighlight.bind(null, skill),
          skillClick = this._skillClick.bind(null, skill);
      var status;
      if (skill.isProficient) {
        modifier += 3;
        status = <span className='checked' />;
      } else {
        status = <span className='unchecked' />
      }
      var subclass = 'skill';
      if (i < 9) {
        subclass += ' left';
      } else {
        subclass += ' right';
      }
      return (
        <div className={subclass} key={skill.key} onMouseEnter={skillHighlight} onMouseLeave={skillHighlight} onClick={this._skillClick}>
          <div className='skill-mod'>
            ({modifier > 0 ? `+${modifier}` : modifier})
          </div>
          {status}
          <div>{skill.name}</div>
        </div>
      );
    });

    return (
      <div id='skills'>
        <div className='skill-tooltip'>
          {tooltip ? tooltip.desc : ''}
        </div>

        <div className='skill-list'>
          {skills}
        </div>
      </div>
    )
  }
});

export default React.createClass({
  mixins: [AbilityActions, SkillActions],
  render() {
    var modifiers = {},
      { skills, perks, basicInfo } = this.props;

    var abilityScoresDisplay = this.props.abilities.map((ability, idx) => {
      var { modifier, short, long, score } = ability;
      modifiers[long.toLowerCase()] = modifier;
      return (
        <div key={short} onMouseEnter={this._abilityHighlight} className='ability-score'>
          <div className='ability-meta'>
            <div className='ability-name-short'>
              {short.toUpperCase()}
            </div>

            <div className='ability-score-modifier'>
              ({modifier > 0 ? `+${modifier}` : modifier})
            </div>
          </div>

          <div className='score'>
            {score}
          </div>

          <div className='ability-score-name'>
            {long}
          </div>
        </div>
      );
    });

    return (
      <div id='dashboard'>
        <section>
          <div className='ability-scores'>
            {abilityScoresDisplay}
          </div>

          <div className='char-info'>
            <div className='character-name'>
              Hercules
              {basicInfo.charName}
              <input type='text'></input>
            </div>
            <div className='player-name'>
              Zeus Smith
              {basicInfo.playerName}
              <input type='text'></input>
            </div>
            <div className='player-race'>
              Hill Dwarf
              {basicInfo.playerRace}
              <input type='text'></input>
            </div>
            <div className='player-age'>
              30
              {basicInfo.playerAge}
              <input type='text'></input>
            </div>
          </div>
        </section>

        <Skills skills={skills} modifiers={modifiers} skillClick={this._skillClick} />

        <BasicInfo {...basicInfo} />
      </div>
    );
  }
});