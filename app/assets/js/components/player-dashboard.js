import React from 'react';
import PrimaryAttributes from './primary-stats';

export default React.createClass({
  render() {
    return (
      <div className='user-panel'>
        <div className='attribute-panel-heading'>
          Attributes
        </div>
        <PrimaryAttributes attributes={this.props.attributes} />
      </div>
    );
  }
});