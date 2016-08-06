import React, { PropTypes as PT } from 'react';

import { classes } from '../util/helper';

class CharacterClass extends React.Component {
  get classes() {
    return classes({
      'character-class': true,
      'character-class-active': this.props.isActive
    });
  }

  get klass() {
    return this.props.children ? this.props.children : this.props.klass.name;
  }

  render() {
    return (
      <section className={this.classes}>
        {this.klass}
      </section>
    );
  }
}

CharacterClass.propTypes = {
  isActive: PT.bool,
  hasSubClasses: PT.bool,
  klass: PT.object
};

class ClassDescription extends React.Component {
  get _id() {
    return '#' + this.props.klass.name.toLowerCase();
  }

  render() {
    return (
      <section id={this._id} className='class-description'>
        Class Description
      </section>
    );
  }
}


class SubClassList extends React.Component {
  get classes() {
    return classes({ 'subclass-list': true, 'active': this.props.isActive });
  }

  render() {
    const subclasses = this.props.subclasses.map(klass => {
      return <CharacterClass klass={klass} key={klass.name} />;
    });
    return (
      <div className={this.classes}>
        {subclasses}
      </div>
    );
  }
}

SubClassList.propTypes = {
  subclasses: PT.array,
  isActive: PT.bool
};

// TODO handle the complexity of subclasses and how to display them (if the parent class has them)

class ClassSelection extends React.Component {
  constructor() {
    super();
    this.state = {
      activeIdx: [-1, -1]
    };

    this.handleEnter = (idx, evt) => {
      if (evt.type === 'mouseenter') {
        this.setState({ activeIdx: [idx, -1] });
      } else {
        this.setState({ activeIdx: [-1, -1] });
      }
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

  get classDescriptions() {
    return this.props.characterClasses.map(klass => klass.name.toLowerCase());
  }

  render() {
    const [parentIdx, childIdx] = this.state.activeIdx;
    const characterClasses = this.props.characterClasses.map((klass, idx) => {
      const handleEnter = this.handleEnter.bind(null, idx);
      return (
        <CharacterClass klass={klass} key={idx}>
          <a href={`#${klass.name.toLowerCase()}`} className='parent-race' onMouseLeave={handleEnter} onMouseEnter={handleEnter}>{klass.name}</a>
        </CharacterClass>
      );
    });

    const descPlaceholders = this.classDescriptions.map(klass => {
      return <div id={klass}>{klass}</div>
    });
    return (
      <article id='class-select'>
        <header>
          <h3>Class Select</h3>
        </header>
        <section id='character-class-container'>
          <div className='primary-class-list'>
            {characterClasses}
          </div>

          <div id='character-description'>
            {descPlaceholders}
          </div>
        </section>
      </article>
    );
  }
}


ClassSelection.propTypes = {
  characterClasses: PT.array
};
/*

<div container>
  <div items>
    <div item></div>
    <div item></div>
    <div item></div>
    <div item></div>
    <div item></div>
    <div item></div>
  </div>

  <div active>

  </div>
</div>


<div container>
  <div items>
    <div item item-active>
      <div item-name>

      </div>
      <div active>

      </div>
    </div>
    <div item></div>
    <div item></div>
    <div item></div>
    <div item></div>
    <div item></div>
  </div>

</div>
*/

export default ClassSelection;