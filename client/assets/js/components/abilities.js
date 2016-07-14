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
  constructor(props) {
    super();
    this.handleClick = () => {
      props.handleClick(this.props.idx);
    };
  }

  get classNames() {
    return classes({
      'ability': true,
      'ability-active': this.props.idx == this.props.activeIdx
    });
  }

  render() {
    var { name, key, racialBonus, base } = this.props;
    var total = racialBonus + base;
    return (
      <div className={this.classNames} key={key} onClick={this.handleClick}>
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
  onClick: PT.func,
  handleClick: PT.func,
  idx: PT.number,
  activeIdx: PT.number
};

const abilityPropTypes = {
  children: PT.array
};


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
      abilityScores: props.abilityScores,
      activeIdx: -1,
      standard: {
        scores: [
          { score: 15, idx: -1 },
          { score: 14, idx: -1 },
          { score: 13, idx: -1 },
          { score: 12, idx: -1 },
          { score: 10, idx: -1 },
          { score: 8,  idx: -1 }
        ]
      },
      customPtsRemaining: 27
    };

    this.handleAbilitySelect = (activeIdx) => {
      activeIdx = this.state.activeIdx == activeIdx ? -1 : activeIdx;
      this.setState({ activeIdx });
    };

    this.handleCustomMode = (abilityScore, index) => {
      var { abilityScores } = this.state;
      var ability = abilityScores[index];
      ability.base = abilityScore.score;
    };

    this.handleStandardMode = (index) => {
      var { standard, abilityScores, activeIdx } = this.state,
        currentAbility = abilityScores[activeIdx],
        point = standard.scores[index],
        previousAbility = abilityScores[point.idx];

      if (previousAbility) {
        previousAbility.base = 0;
        currentAbility.base = point.score;
      } else {
        currentAbility.base = point.score;
      }
      point.idx = activeIdx;
      this.setState({ standard, abilityScores });
    };

    this.handleSave = () => {
      this.props.update('_abilities', this.state.abilityScores);
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

  get isValid() {
    if (this.state.standardMode) {
      return !this.state.standard.scores.find(point => point.idx == -1);
    } else {
      return false;
    }
  }

  get standard() {
    // is this an anti-pattern?
    let handleClick = this.handleStandardMode;
    return this.state.standard.scores.map((point, index) => {
      return (
        <div className='panel-option'>
          <button onClick={handleClick.bind(null, index)}>{point.score}</button>
        </div>
      );
    });
  }

  get displayOptions() {
    return { display: this.showPanel ? 'flex' : 'none' };
  }

  get showPanel() {
    return this.state.activeIdx > -1;
  }

  get panelClassNames() {
    return classes({
      'panel-options': true,
      'panel-active': this.showPanel,
      'custom-mode': !this.state.standardMode
    });
  }

  get saveStatus() {
    return { display: this.isValid ? 'block' : 'none' };
  }

  get custom() {
    return [<input type='button' defaultValue='+'></input>, <input type='button' defaultValue='-'></input>];
  }

  get customGapStyle() {
    return { flexGrow: this.state.activeIdx * 0.2 };
  }

  render() {
    var mode = this.state.standardMode;
    let activeIdx = this.state.activeIdx;
    let abilitySelect = this.handleAbilitySelect;
    var abilities = this.state.abilityScores.map((ability, idx) => {
      return <Ability handleClick={abilitySelect} {...ability} idx={idx} activeIdx={activeIdx} />;
    });

    return (
      <aside className='ability-select'>
        {this.currentSelectModeName}
        <input type='button' defaultValue='toggle mode' onClick={() => this.setState({ standardMode: !mode  })}></input>
        <div className='ability-custom' style={this.inlineStyle.custom}>
          <ul className='abilities'>
            {abilities}
          </ul>

          <div className={this.panelClassNames}>
            <div style={this.customGapStyle}></div>
            <div className='custom-input'>
              {this.custom}
            </div>
          </div>
        </div>

        <div className='ability-standard' style={this.inlineStyle.standard}>
          <div className='abilities'>
            {abilities}
          </div>

          <div className={this.panelClassNames}>
            {this.standard}
          </div>
        </div>
        <div>
          <input type='button' style={this.saveStatus} defaultValue="Save" onClick={this.handleSave}></input>
        </div>
      </aside>
    );
  }
}

AbilityAnchor.propTypes = {
  abilityScores: PT.array,
  handleClick: PT.func,
  update: PT.func
};

export default AbilityAnchor;
