import React from 'react';

export default React.createClass({
  render() {
    <div className='ability-score-summary'>
      <div className='ability-score'>
        1
      </div>

      <div className='ability-score-name'>
        {this.props.name}
      </div>
    </div>
  }
});