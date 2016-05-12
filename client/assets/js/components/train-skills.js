import React from 'react';

var Trait = React.createClass({
  statics: {
    calculateTraitValue(trait, player, isTrained=false) {
      var baseValue = isTrained ? 2 : 0;
      return player.attributeModifier(trait) + baseValue;
    }
  },

  render() {
    return (
      <div>
        <div>{this.props.name}</div>
        <div>{this.props.attribute}</div>
        <div>{this.props.desc}</div>
        <div>{this.props.value}</div>
      </div>
    );
  }
});

export default {
  componentClass: Trait,
  type: 'list',
  key: 'skills'
};