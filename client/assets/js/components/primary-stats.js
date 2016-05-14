import React from 'react';

/*
<li className='list-group-item' key={key}>
  <h4 className='list-group-item-heading'>{attr.name}</h4>
  <div className='attribute-item'>
    {attr.value}
  </div>
</li>

*/


export default React.createClass({
  _renderAttributes() {
    return this.props.attributes.map((attr, key) => {
      console.log(attr);
      var className = attr.isActive ? 'attribute-value primary-attribute-highlight' : 'attribute-value';
      return (
        <div key={key} className='attribute-item'>
          <div className={className}>
            {attr.value}
          </div>

          <div className='attribute-description'>
            <div className='attribute-label'>
              {attr.name}
            </div>

            <div className='attribute-modifier'>
              {Math.floor((attr.value - 10)/ 2)}
            </div>
          </div>
        </div>
      );
    });
  },

  render() {
    return (
      <div className='attribute-panel'>
        <div className='attributes'>
          {this._renderAttributes()}
        </div>
      </div>
    );
  }
});