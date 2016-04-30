import React, { Component } from 'react';
import { readableAttributes } from '../util/constants';
// import Keyword from '../util/keyword';


class Trait extends Component {
  onHighlight() {
    console.log('onHighlight - no op for now');
  }

  render() {
    var traitValue = this.props.value.join(', ');
    return (
      <div className='trait' key={this.props.key} onMouseOver={this.onHighlight}>
        <div className='trait-category'>{this.props.category}</div>
        <div className='trait-value'>{traitValue}</div>
      </div>
    );
  }
}

class Attributes extends Component {
  render() {
    var attrs = this.props.attrs.map(attr => <div key={attr.short}>{attr.long}: <strong>+{attr.value}</strong></div>)
    return (
      <div className='attributes'>
        {this.props.children}
        {attrs}
      </div>
    );
  }
}

class Perk extends Component {
  render() {
    return (
      <div className='perk' key={this.props.key}>
        <div className='perk-name'>{this.props.name}</div>
        <div className='perk-desc'>{this.props.desc}</div>
      </div>
    );
  }
}

class SubRaces extends Component {
  render() {
    return (
      <div className='subraces-list'>
        {this.props.children}
      </div>
    );
  }
}

// Race Showcase
class Race extends Component {
  constructor() {
    var christ = super(...arguments);
    this.state = {
      isSelected: false,
      isHighlighted: false,
      activeSubRace: null
    };
  }

  mergeSubrace(subrace) {
    var [perks, traits, attrs, name] = [[], [], [], ''];
    if (subrace) {
      subrace.traits.forEach(trait => {

      });
      perks = perks.concat(subrace.perks);
      traits = traits.concat(subrace.traits);
      name = `${subrace.name} ${name}`;
      attrs = subrace.attrs;
    }
    return {
      name,
      perks: perks.map((p, i) => <Perk {...p} key={i} />),
      traits: traits.map((t, i) => <Trait {...t} key={i} />),
      attrs: readableAttributes(attrs)
    };
  }

  hightlightAction() {

  }

  selectAction(subrace) {
    var activeSubRace = null;

    if (!this.state.activeSubRace || this.state.activeSubRace.name !== subrace.name) {
      activeSubRace = subrace;
    }

    this.setState({ activeSubRace, isSelected: true });
  }

  _renderSubRaces({ subraces }) {
    var { selectAction, hightlightAction } = this,
        activeSubRace = this.state;
    return subraces.map((subrace, i) => {
      var className = activeSubRace.name && activeSubRace.name === subrace.name
        ? 'subrace-detail subrace-active'
        : 'subrace-detail';
      return (
        <div key={subrace.name} className={className} onClick={selectAction.bind(this, i)}>
          {subrace.name}
        </div>
      );
    });
  }

  render() {
    var { isSelected, isHighlighted, activeSubRace } = this.state,
        characteristics = this.mergeSubrace(activeSubRace, this.props),
        subraces = this._renderSubRaces(this.props);

    return (
      <div>
        <div className='race-title'>{characteristics.name}</div>
        <section className='race-characteristics'>
          <div className='perks'>
            {characteristics.perks}
          </div>

          <div className='traits'>
            {characteristics.traits}
          </div>

          <Attributes attrs={characteristics.attrs}>
            Attributes:
          </Attributes>
        </section>
      </div>
    );
  }
}

class Races extends Component {
  constructor() {
    super(...arguments);
    this.state = { pickedRace: null };
  }

  render() {
    return (
      <div className='race-selection-view'>

      </div>
    );
  }
}
