import React from 'react';
import { connect } from 'react-redux';
import { characterCreateProps } from './store/reducers';

class Character extends React.Component {
  render() {
    return (
      <div id='create-character'>
        <div className='selection-options'>

        </div>
        {this.props.children}
      </div>
    );
  }
}

const CreateCharacter = connect(
  characterCreateProps
)(Character);

export default CreateCharacter;
