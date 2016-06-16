export default {
  _skillClick(e, key) {
    if (this.props.skillClick) {
      this.props.skillClick(...arguments);
    } else {
      var trainedSkills = this.state.trainedSkills,
          _skillChoices = this.state._skillChoices;

      for (let [k, v] of this.props.skills) {
        if (key.includes(v.key) && trainedSkills.has(k)) {
          trainedSkills.delete(k);
        } else if (key.includes(v.key)) {
          trainedSkills.set(k, v);
        }
      }
      this.setState({ _skillChoices, trainedSkills });
    }
  },

  _skillHighlight(skill, e, key) {
    if (this.props.skillHighlight) {
      this.props.skillHighlight(...arguments);
    } else {
      var highlightedSkill = e.type === 'mouseenter' ? skill : null;
      this.setState({ highlightedSkill });
    }
  }
};