export default {
  _skillClick(e, key) {
    if (this.props.skillClick) {
      this.props.skillClick(...arguments);
    } else {
      var [idx] = key.match(/\d+$/);
      var skill = this.state.trainedSkills[idx];
      var _skillChoices = this.state._skillChoices;
      if (_skillChoices === 0 && !skill.isProficient) {
        return;
      } else {
        skill.isProficient = !skill.isProficient;
        _skillChoices += skill.isProficient ? -1 : 1;
      }
      this.setState({ trainedSkills: this.state.trainedSkills, _skillChoices });
    }
  },

  _skillHighlight(e, key) {
    if (this.props.skillHighlight) {
      this.props.skillHighlight(...arguments);
    } else {
      var skill = this.props.skills[idx],
          { clientX, clientY } = e,
          [idx] = key.match(/\d+$/),
          highlightedSkill;

      if (e.type === 'mouseenter') {
        highlightedSkill = parseInt(idx);
      } else {
        highlightedSkill = -1;
      }

      this.setState({ highlightedSkill });
    }
  }
};