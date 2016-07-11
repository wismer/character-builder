import React from 'react';

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
    )
  }
}

class BaseSelect extends React.Component {
  componentWillMount() {
    this.setState({ abilities: this.props.player.displayAbilities() });
  }
}

class StandardArraySelect extends BaseSelect {
  constructor() {
    super();
    this.state = {
      standard: [
        { n: 15, idx: -1 },
        { n: 14, idx: -1 },
        { n: 13, idx: -1 },
        { n: 12, idx: -1 },
        { n: 10, idx: -1 },
        { n: 8,  idx: -1 },
      ],
      abilities: [],
      displayChoices: false,
      activeIdx: -1
    };
  }

  select(idx) {
    var { standard, abilities, activeIdx } = this.state,
        point = standard[idx],
        ability = abilities[activeIdx];

    standard.forEach(a => a.idx = a.idx == activeIdx ? -1 : a.idx);
    point.idx = activeIdx;

    ability.base = point.n;
    this.setState({ activeIdx, standard, abilities });
  }


  deselect(idx) {
    var { standard, abilities, activeIdx } = this.state,
        point = standard[idx],
        ability = abilities[activeIdx];

    if (!idx) {
      standard.forEach(s => s.idx = -1);
      abilities.forEach(a => a.base = 0);
      return this.setState({ abilities, standard });
    }

    point.idx = -1;
    ability.base = 0;
    this.setState({ activeIdx, standard, abilities });
  }

  render() {
    var { activeIdx, displayChoices } = this.state,
        handleSelect = this.handleSelect,
        standard = this.state.standard.map((pt, i) => {

          var className = pt.idx ? 'opt opt-used' : 'opt';
          var input;

          if (pt.idx > -1) {
            input = <input defaultValue={pt.n} disabled type='button' onClick={(e) => this.deselect(i)}></input>
          } else {
            input = <input defaultValue={pt.n} type='button' onClick={(e) => this.select(i)}></input>
          }

          return (
            <div className={className}>
              {input}
            </div>
          )
        });
    var abilities = this.state.abilities.map((ability, i) => {
      var idx = i == activeIdx > -1 ? -1 : i;
      return (
        <Ability onClick={() => this.setState({ activeIdx: idx })} idx={i} {...ability}></Ability>
      );
    });

    var optStyle = {
      display: activeIdx > -1 ? 'flex' : 'none'
    };

    return (
      <div className='abilities'>
        <div className='abilities-select'>
          {abilities}
        </div>

        <div className='abilities-options' style={optStyle}>
          {standard}
        </div>

        <div>
          <input type='button' defaultValue='RESET ALL' onClick={(e) => this.deselect(null)}></input>
        </div>
      </div>
    );
  }
}

class CustomAbilitySelect extends BaseSelect {
  constructor() {
    super();
    this.state = {
      points: 27,
      abilities: []
    };
  }

  inc(i) {
    var { abilities, points } = this.state,
        ability = abilities[i],
        ptCost = derivePointValue(ability.value + 1);

    if (ptCost > points) {
      return;
    }

    ability.value += 1;
    this.setState({ abilities, points: points - ptCost });
  }

  dec(i) {
    var { abilities, points } = this.state,
        ability = abilities[i],
        ptRefund = derivePointValue(ability.value);

    if (ability.value == ability._base) {
      return;
    }

    ability.value = ability.value - 1 == ability._base ? ability._base : ability.value - 1;
    this.setState({ points: points + ptRefund, abilities });
  }

  render() {
    var { inc, dec } = this;
    var finalAbilities = this.state.abilities.map((ability, i) => {
      return (
        <li key={ability.key}>
          {ability.name}: {ability.value}
          <div>
            <input type='button' defaultValue='+' onClick={inc.bind(this, i)}></input>
            <input type='button' defaultValue='-' onClick={dec.bind(this, i)}></input>
          </div>
        </li>
      );
    });
    return (
      <div>
        points remaining: {this.state.points}
        {finalAbilities}
      </div>
    );
  }
}

export default class AbilityAnchor extends React.Component {
  constructor() {
    super();
    this.state = { standardMode: false };
  }

  save() {
    var abilities;
    if (this.state.standardMode) {
      abilities = this.refs.standard.state.abilities;
    } else {
      abilities = this.refs.custom.state.abilities;
    }

    this.props.save(abilities);
  }

  render() {
    var mode = this.state.standardMode,
        player = this.props.player,
        modeType, component;

    if (mode) {
      component = <StandardArraySelect ref='standard' player={player} />
      modeType = 'Custom Mode';
    } else {
      component = <CustomAbilitySelect ref='custom' player={player} />
      modeType = 'Standard Array Mode';
    }

    return (
      <div className='ability-select'>
        <input
          type='button'
          defaultValue={modeType}
          value={modeType}
          onClick={() => this.setState({ standardMode: !mode })}
        ></input>
        <div>
          {component}
        </div>

        <div>
          <input type='button' defaultValue="Save" onClick={() => this.save()}></input>
        </div>
      </div>
    );
  }
}
