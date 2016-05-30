import React from 'react';
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

let Skills = React.createClass({
  mixins: [SkillActions],

  getInitialState() {
    return { _skillChoices: 3, highlightedSkill: -1 };
  },

  render() {
    var modifiers = this.props.modifiers;
    var tooltip = this.props.skills[this.state.highlightedSkill];
    var skills = this.props.skills.map((skill, i) => {
      var modifier = modifiers[skill.ability];
      var status;
      if (skill.isProficient) {
        modifier += 3;
        status = <span className='checked' />;
      } else {
        status = <span className='unchecked' />
      }
      return (
        <div className='skill' key={`${skill.name}-${i}`} onMouseEnter={this._skillHighlight} onMouseLeave={this._skillHighlight} onClick={this._skillClick}>
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
  mixins: [AbilityActions],
  render() {
    var modifiers = {};
    var { skills, perks } = this.props;
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
        <div className='ability-scores'>
          {abilityScoresDisplay}
        </div>

        {this.props.children}
        <Perks perks={perks} />
        <Skills skills={skills} modifiers={modifiers} skillClick={this._skillClick}/>
      </div>
    );
  }
});