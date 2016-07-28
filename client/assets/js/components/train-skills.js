import React from 'react';

class Skills extends React.Component {
  constructor() {
    super();
    this.state = {
      highlightedSkill: -1
    };
  }

  render() {
    var tooltip = this.props.skills[this.state.highlightedSkill];
    var values = Array.from(this.props.skills.values());
    var skills = values.map(skill => {
      var status;
      if (skill.isProficient) {
        status = <span className='checked' />;
      } else {
        status = <span className='unchecked' />;
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
}


Skills.propTypes = {
  skills: React.PropTypes.array,
  skillClick: React.PropTypes.func
};

export default Skills;