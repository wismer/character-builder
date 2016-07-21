import React, { PropTypes as PT } from 'react';
import { classes, derivePointCost } from '../util/helper';

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

  get total() {
    return this.props.hideBaseScore
      ? this.props.racialBonus + this.props.base
      : this.props.racialBonus + this.props.base + 8;
  }

  render() {
    var { name, key, racialBonus, base } = this.props;
    var total = racialBonus + base;
    return (
      <div className={this.classNames} key={key} onClick={this.handleClick}>
        <div className='ability-name'>
          <span>{name}</span>
        </div>
        <div className='ability-base'>
          <span>{racialBonus}</span>
        </div>
        <div className='ability-total'>
          <span>{total}</span>
        </div>
        {this.props.children}
      </div>
    );
  }
}

Ability.propTypes = {
  name: PT.string,
  key: PT.string,
  racialBonus: PT.number,
  base: PT.number,
  handleClick: PT.func,
  idx: PT.number,
  activeIdx: PT.number,
  hideBaseScore: PT.bool,
  value: PT.number,
  children: PT.element
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

    this.handleCustomMode = (willIncrease) => {
      var { abilityScores, activeIdx, customPtsRemaining } = this.state,
        ability = abilityScores[activeIdx],
        score = ability.base + ability.racialBonus,
        pointValue = derivePointCost(score, willIncrease);


      if (willIncrease && customPtsRemaining > pointValue) {
        ability.base += 1;
        customPtsRemaining -= pointValue;
      } else if (!willIncrease && customPtsRemaining < 27) {
        ability.base -= 1;
        customPtsRemaining += pointValue;
      }

      this.setState({ abilityScores, customPtsRemaining });
    };

    this.switchSelectionMode = () => {
      let { standardMode, standard, abilityScores, customPtsRemaining } = this.state;
      if (standardMode) {
        standard.scores.forEach(n => n.idx = -1);
      } else {
        customPtsRemaining = 27;
      }

      abilityScores.forEach(score => score.base = 0);

      this.setState({
        standardMode: !standardMode,
        abilityScores,
        customPtsRemaining,
        standard
      });
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
      // rarely players will have a few remaining points left. Leaving this
      // in for now.
      return true;
    }
  }

  get standard() {
    // is this an anti-pattern?
    let handleClick = this.handleStandardMode;
    return this.state.standard.scores.map((point, index) => {
      return (
        <div key={index} className='panel-option'>
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
    return [
      <input type='button' defaultValue='+'></input>,
      <input type='button' defaultValue='-'></input>
    ];
  }

  get customGapStyle() {
    return { flexGrow: this.state.activeIdx * 0.2 };
  }

  render() {
    var mode = this.state.standardMode;
    let activeIdx = this.state.activeIdx;

    let [customModeIncrease, customModeDecrease] = [
      this.handleCustomMode.bind(null, true),
      this.handleCustomMode.bind(null, false)
    ];

    let abilitySelect = this.handleAbilitySelect;
    var abilities = this.state.abilityScores.map((ability, idx) => {
      return (
        <Ability handleClick={abilitySelect} {...ability} idx={idx} activeIdx={activeIdx} hideBaseScore={mode}>
          <div className={this.panelClassNames}></div>
        </Ability>
      );
    });

    return (
      <article className='ability-select'>
        <header>
          <h2>{this.currentSelectModeName}</h2>
        </header>
        <div id='ability-container'>
          <section className='ability-custom' style={this.inlineStyle.custom}>
            <ul className='abilities'>
              {abilities}
            </ul>

            <div className={this.panelClassNames}>
              <div style={this.customGapStyle}></div>
              <div className='custom-input'>
                <input type='button' defaultValue='+' onClick={customModeIncrease}></input>
                <input type='button' defaultValue='-' onClick={customModeDecrease}></input>
              </div>
            </div>
            <h3>{this.state.customPtsRemaining}</h3>
          </section>
          <section className='ability-standard' style={this.inlineStyle.standard}>
            <div className='abilities'>
              {abilities}
            </div>

            <div className={this.panelClassNames}>
              {this.standard}
            </div>
          </section>
          <aside className='ability-info'>
            <section className='ability-descriptor'>
              <h5>Ability Descriptions</h5>

              <div className='ability-panel'>
                <input type='button' defaultValue='toggle mode' onClick={this.switchSelectionMode}></input>
                <input type='button' style={this.saveStatus} defaultValue="Save" onClick={this.handleSave}></input>
              </div>
            </section>
          </aside>
        </div>
      </article>
    );
  }
}

AbilityAnchor.propTypes = {
  abilityScores: PT.array,
  handleClick: PT.func,
  update: PT.func
};

export default AbilityAnchor;
