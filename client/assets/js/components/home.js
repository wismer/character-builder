import React, { PropTypes as PT } from 'react';
import { retrieve } from '../util/adapter';
import { Link } from 'react-router';

class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      characters: []
    };
  }

  componentDidMount() {
    retrieve('characters', characters => {
      this.setState({ characters });
    }, (e) => {
      console.log('ERROR', e);
    });
  }

  render() {
    return (
      <div id='home-container'>
        <Link to='/create'>
          <div>Create New Character</div>
        </Link>
        {/*
          <div className='character-create'>
            <Link to='/create'>
              <div></div>
              <div>Create New Character</div>
              <div></div>
            </Link>
          </div>

          <div className='character-list'>
            <Link to='/view'>
              <div></div>
              <div>View Saved Characters</div>
              <div></div>
            </Link>
          </div>
        </div>
        */}
        <Link to='/view'>
          <div>View Saved Characters</div>
        </Link>
      </div>
    );
  }
}

PT.propTypes = {};

export default Home;