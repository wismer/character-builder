import React from 'react';

let Skills = React.createClass({
  getInitialState() {
    return { _skillChoices: 3, highlightedSkill: -1 };
  },

  render() {
    var tooltip = this.props.skills[this.state.highlightedSkill];
    var values = Array.from(this.props.skills.values());
    var skills = values.map((skill, i) => {
      var status;
      if (skill.isProficient) {
        status = <span className='checked' />;
      } else {
        status = <span className='unchecked' />
      }
      return (
        <div className='skill' key={skill.key} onClick={this.props.skillClick.bind(null, skill)}>
          <div className='skill-mod'>
            ({skill.modifier > 0 ? `+${skill.modifier}` : skill.modifier})
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
    );
  }
});


Skills.propTypes = {
  skills: React.propTypes.array,
  skillClick: React.propTypes.function
};

export default Skills;