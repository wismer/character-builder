import React from 'react';
import { connect } from 'react-redux';
import { abilitySelectProps, abilitySelectDispatch } from './store/reducers';


class Attributes extends React.Component {
  render() {
    const abilities = this.props.abilities.map((ability, idx) => {
      const { name, value, desc } = ability;
      return (
        <div key={name} className='ability'>
          <button onClick={() => this.props.onAbilitySelect(ability, 1)}>+</button>

          <div className='ability-name'>{name}</div>
          <div className='ability-desc'>{desc}</div>
          <div className='ability-value'>{value}</div>

          <button onClick={() => this.props.onAbilitySelect(ability, -1)}>-</button>
        </div>
      );
    });

    return (
      <section id='ability-score-select'>
        attributes
        {abilities}
      </section>
    );
  }
}

const AttributeSelect = connect(
  abilitySelectProps,
  abilitySelectDispatch
)(Attributes);

export default AttributeSelect;
