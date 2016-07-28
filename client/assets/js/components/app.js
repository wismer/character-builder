import React, { PropTypes as PT } from 'react';
import { Link } from 'react-router';

class Application extends React.Component {
  render() {
    return (
      <div id='main-container'>
        <div>
          {this.props.children}
        </div>

        <div>
          <Link to='/create'>Create a Character</Link>
        </div>
      </div>
    );
  }
}


Application.propTypes = {
  children: PT.element
};

export default Application;