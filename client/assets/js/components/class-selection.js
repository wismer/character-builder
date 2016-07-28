import React, { PropTypes as PT } from 'react';

import { classes } from '../util/helper';

class CharacterClass extends React.Component {
  get classes() {
    return classes({
      'character-class': true,
      'character-class-active': this.props.isActive
    });
  }

  render() {
    return (
      <section className={this.classes}>

      </section>
    );
  }
}

CharacterClass.propTypes = {
  isActive: PT.bool,
  hasSubClasses: PT.bool
};

class ClassDescription extends React.Component {
  render() {
    return (
      <section className='class-description'>

      </section>
    );
  }
}


class SubClassList extends React.Component {
  render() {
    const subclasses = this.props.subclasses;
    return (
      <div className='subclass-list'>
        {subclasses}
      </div>
    );
  }
}

SubClassList.propTypes = {
  subclasses: PT.array
};

// TODO handle the complexity of subclasses and how to display them (if the parent class has them)

class ClassSelection extends React.Component {
  constructor() {
    super();
    this.state = {
      activeIdx: [-1, -1]
    };
  }

  get highlightedClass() {
    const [parentIdx, childIdx] = this.state.activeIdx;
    const { characterClasses } = this.props;
    if (childIdx > 0) {
      return characterClasses[parentIdx]['subclasses'][childIdx];
    } else if (parentIdx > 0) {
      return characterClasses[parentIdx];
    }

    return;
  }

  render() {
    const characterClasses = this.props.characterClasses.map((klass, idx) => {
      return (
        <div className='character-class' key={idx}>
          <section>
            {/* user-selectable character class here */}
          </section>

          <section>
            {/* subclasses here */}
            <SubClassList list={klass.subclasses} />
          </section>
        </div>
      );
    });
    return (
      <article id='class-select'>
        <header>
          <h3>Class Select</h3>
        </header>

        <div id='character-class-container'>
          {characterClasses}
        </div>

        <div id='character-description'>
          <ClassDescription klass={this.highlightedClass} />
        </div>
      </article>
    );
  }
}


ClassSelection.propTypes = {
  characterClasses: PT.array
};

export default ClassSelection;