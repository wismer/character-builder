import React from 'react';


export default React.createClass({
  _onClick(option) {
    this.props.stepSelect(option);
  },

  render() {
    return (
      <div className='start-menu'>
        <div className='class-select-start' onClick={this._onClick.bind(this, 1)}>
          Start By Selecting a Class
        </div>

        or

        <div className='race-select-start' onClick={this._onClick.bind(this, 2)}>
          Start by Selecting a Race
        </div>
      </div>
    );
  }
});