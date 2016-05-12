import React from 'react';
import characterClasses from '../character-classes/classes';

var component = React.createClass({
  getInitialState() {
    return { showExtra: false };
  },

  handleMouseOver(klass, isActive) {
    this.props.attrHighlight(klass, isActive);
  },

  handleMouseClick(klass) {
    this.props.renderDropDown(klass);
  },

  _renderClasses() {
    return characterClasses.map((klass, key) => {
      var className = `character-class-item ${klass.name.toLowerCase()}`;
      return (
        <div onClick={this.handleMouseClick.bind(this, klass)} onMouseLeave={this.handleMouseOver.bind(this, klass, false)} onMouseEnter={this.handleMouseOver.bind(this, klass, true)} className={className} key={key}>
          {klass.name}
        </div>
      );
    });
  },

  render() {
    return (
      <div className='class-select'>{this.props.children}</div>
    );
  }
});

var CharacterClass = React.createClass({
  render() {
    return (
      <div>{this.props.name}</div>
    );
  }
});

export default {
  type: 'list',
  componentClass: CharacterClass,
  component: characterClasses
};