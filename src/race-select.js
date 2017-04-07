import React from 'react';
import { Link } from 'react-router';
import { raceSelectionProps } from './store/reducers';
import { connect } from 'react-redux';
import SlideSelect from './slide-select';


function Proficiencies({items, type}) {
  items = items.map(item => {
    return (
      <li className={`proficiency ${type}`}>
        {item}
      </li>
    );
  });
  return (
    <div className={`proficiencies proficiencies-${type}`}>
      <h5>{type}</h5>
      <ul>
        {items}
      </ul>
    </div>
  );
}

function RacialTrait({name, desc, trait_value}) {
  return (
    <div className='racial-trait'>
      <h5 className='trait-name'>{name}</h5>
      <div className='trait-desc'>{desc}</div>
      <div className='trait-value'>{trait_value}</div>
    </div>
  );
}

function AbilityScore({ value, short, desc, name }) {
  return (
    <div className='ability-score'>
      <div className='score-name'>{name}</div>
      <div className='score-desc'>{desc}</div>
      <div className='score'>+{value}</div>
    </div>
  );
}

function RaceOption(props) {
  const racialtraits = props.racialtraits.map(trait => <RacialTrait {...trait} key={trait.name} />);
  const className = `race-detail ${props.className}`;
  return (
    <div className={className}>
      <div className='race-attributes racial-traits'>{racialtraits}</div>
    </div>
  );
}

class RaceSelect extends React.Component {
  render() {
    const { activeRace, activeSubRace, weapons, armor } = this.props;
    const abilityScores = this.props.abilityScores.map(score => {
      return <AbilityScore {...score} />;
    });

    return (
      <div className='race-select'>
        <div className='race race-selections'>
        </div>
        <div className='race race-info char-select-body'>
          <p className='race race-description'>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>

          <div className='race-attributes ability-scores'>
            {abilityScores}
          </div>

          <RaceOption {...activeRace} className='parent'  />
          {activeSubRace ? <RaceOption {...activeSubRace} className='child' /> : ''}

          <div className='racial-proficiencies'>
            <Proficiencies items={weapons} type='weapons' />
            <Proficiencies items={armor} type='armor' />
          </div>
        </div>

        <Link to="/create/class">Class Select</Link>
      </div>
    );

  }
}

const RaceSelection = connect(
  raceSelectionProps
)(RaceSelect);

export default RaceSelection;
