import React from 'react';
import AbilityScore from './ability-score-summary';

export default React.createClass({
  render() {
    var abilityScores = this.props.abilityScores.map(score => <AbilityScore {...score} />);

    return (
      <div id='dashboard'>
        {abilityScores}
      </div>
    );
  }
});