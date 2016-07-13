import React, { PropTypes as PT } from 'react';
import { classes } from '../util/helper';

const derivePointValue = (n) => {
  if (n < 11) {
    return 1;
  } else {
    return Math.ceil((n - 10) / 2);
  }
};

class Ability extends React.Component {
  render() {
    var { name, key, racialBonus, base } = this.props;
    var total = racialBonus + base;
    return (
      <div className='ability' key={key} onClick={this.props.onClick}>
        <div className='ability-name'>{name}</div>
        <div className='ability-base'>{racialBonus}</div>
        <div className='ability-total'>{total}</div>
      </div>
    );
  }
}

Ability.propTypes = {
  name: PT.string,
  key: PT.string,
  racialBonus: PT.number,
  base: PT.number,
  onClick: PT.func
};

const abilityPropTypes = {
  children: PT.array
};

class StandardArraySelect extends React.Component {
  constructor() {
    super();
    this.state = {
      standard: [
        { score: 15, idx: -1 },
        { score: 14, idx: -1 },
        { score: 13, idx: -1 },
        { score: 12, idx: -1 },
        { score: 10, idx: -1 },
        { score: 8,  idx: -1 }
      ]
    };
  }

  render() {
    return (
      <div>
        <h1>Standard</h1>
        <div className='abilities'>
          {this.props.children}
        </div>
      </div>
    );
  }
}

StandardArraySelect.propTypes = abilityPropTypes;

class CustomAbilitySelect extends React.Component {
  constructor() {
    super();
    this.state = {
      points: 27
    };
  }

  render() {
    return (
      <div>
        <h1>Custom</h1>
        <div className='abilities'>
          {this.props.children}
        </div>
      </div>
    );
  }
}

CustomAbilitySelect.propTypes = abilityPropTypes;

class AbilityAnchor extends React.Component {
  constructor(props) {
    super();
    this.state = {
      standardMode: false,
      abilityScores: props.abilityScores
    };
  }

  get currentSelectModeName() {
    return this.state.standardMode ? 'Standard Select Mode' : 'Custom Select Mode';
  }

  get inlineStyle() {
    var mode = this.state.standardMode;
    return {
      custom: { display: mode ? 'none' : 'flex' },
      standard: { display: mode ? 'flex' : 'none' }
    };
  }

  render() {
    var mode = this.state.standardMode;
    var abilities = this.state.abilityScores.map(ability => <Ability {...ability} />);

    return (
      <div className='ability-select'>
        {this.currentSelectModeName}
        <input type='button' defaultValue='toggle mode' onClick={() => this.setState({ standardMode: !mode  })}></input>
        <div className='ability-custom' style={this.inlineStyle.custom}>
          <CustomAbilitySelect>
            {abilities}
          </CustomAbilitySelect>
        </div>

        <div className='ability-standard' style={this.inlineStyle.standard}>
          <StandardArraySelect>
            {abilities}
          </StandardArraySelect>
        </div>
        <div>
          <input type='button' defaultValue="Save"></input>
        </div>
      </div>
    );
  }
}

AbilityAnchor.propTypes = {
  abilityScores: PT.array
};

export default AbilityAnchor;
