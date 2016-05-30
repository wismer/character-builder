export default {
  _skillClick(e, key) {
    if (this.props.skillClick) {
      this.props.skillClick(...arguments);
    } else {
      var idx = key[key.length - 1];
      var skill = this.state.trainedSkills[idx];
      skill.isProficient = !skill.isProficient;
      this.setState({ trainedSkills: this.state.trainedSkills });
    }
  },

  _skillHighlight(e, key) {
    // if (e.type === 'mouseenter') {
    //
    // }
    if (this.props.skillHighlight) {
      this.props.skillHighlight(...arguments);
    } else {
      var idx = key[key.length - 1];
      var skill = this.state.trainedSkills[idx];
      skill.isActive = e.type === 'mouseenter';
      this.setState({ trainedSkills: this.state.trainedSkills });
    }
    console.log('_skillHighlight', arguments);
  }
};