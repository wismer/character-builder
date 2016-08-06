import React, { PropTypes as PT } from 'react';

class Application extends React.Component {
  render() {
    return (
      <div id='main-container'>
        {this.props.children}
      </div>
    );
  }
}


Application.propTypes = {
  children: PT.element
};

export default Application;