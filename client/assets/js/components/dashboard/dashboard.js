import React from 'react';
import SkillActions from '../../mixins/skill-actions';

let Skills = React.createClass({
  mixins: [SkillActions],
  render() {
    var modifiers = this.props.modifiers;
    var skills = this.props.skills.map((skill, i) => {
      var modifier = modifiers[skill.ability];
      if (skill.isProficient) modifier += 3;
      var style = {
        display: skill.isActive ? 'inline-block' : 'none',
      };
      style.fontStyle = skill.isProficient ? 'italic' : 'normal';
      return (
        <div className='skill' key={`${skill.name}-${i}`} onMouseEnter={this._skillHighlight} onMouseLeave={this._skillHighlight} onClick={this._skillClick}>
          <div>{modifier}</div>
          <div>{skill.name}</div>
          <div style={style} className='skill-tooltip'>
            {skill.desc}
          </div>
        </div>
      );
    });


    return (
      <div id='skills'>
        {skills}
      </div>
    )
  }
});

export default React.createClass({
  mixins: [SkillActions],
  render() {
    var modifiers = {};
    var skills = this.props.skills;
    var abilityScoresDisplay = this.props.abilities.map((ability, idx) => {
      var { modifier, short, long, score } = ability;
      modifiers[long.toLowerCase()] = modifier;
      return (
        <div key={short} className='ability-score'>
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
        <Skills skills={skills} modifiers={modifiers} skillClick={this._skillClick} skillHighlight={this._skillHighlight} />
      </div>
    );
  }
});