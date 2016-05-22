import React from 'react';
import AbilityScore from './ability-score-summary';

export default React.createClass({
  render() {
    return (
      <div id='dashboard'>
        {this.props.children}
      </div>
    );
  }
});