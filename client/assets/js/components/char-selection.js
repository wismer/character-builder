import React from 'react';

class CharSelection extends React.Component {
  render() {
    var classes = this.props.classes.map(charClass => {
      var subclasses = charClass.subclasses.map(subclass => {
        return (
          <li key={subclass.name} onClick={() => this.update(subclass)}>
            {subclass.name}
          </li>
        );
      });
      return (
        <ul key={charClass.name}>
          {charClass.names}
          {subclasses}
        </ul>
      );
    });
    return (
      <div>CLASSES: {classes}</div>
    );
  }
}


CharSelection.propTypes = {
  classes: React.PropTypes.array
};

export default CharSelection;