import React from 'react';
import SlideSelect from './slide-select';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { classSelectProps, subClassDispatch } from './store/reducers';

function ClassSelect(props) {
  let {activeClass, activeSubClass, classes, subclasses, onMouseOver, onMouseClick} = props;
  let trainedSkills = props.trainedSkills || [];

  subclasses = activeClass.subclasses.map(subclass => {
    const className = activeSubClass.name === subclass.name ? 'subclass subclass-active' : 'subclass';
    return (
      <div className={className} key={subclass.name} onClick={() => onMouseClick(subclass)}>
        {subclass.name}
      </div>
    );
  });

  const choiceCount = activeClass.skill_count;
  const choicesRemaining = choiceCount - (trainedSkills || []).length;
  const skills = activeClass.skill_choices.map(skill => {
    const { name, desc, ability } = skill;
    const isTrained = trainedSkills.find(s => s.name === name);
    return (
      <li className={isTrained ? 'skill skill-selected' : 'skill'} key={name} onClick={() => {props.addSkill(skill)}}>
        <div className='skill-label'>
          <div className='skill skill-label skill-name'>{name}</div>
        </div>
        <div className='skill skill-desc'>{desc}</div>
      </li>
    );
  });

  return (
    <section id='class-select'>
      <h4>{activeClass.name}</h4>

      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
        cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
        non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </p>

      <h5>Saving Throws: {activeClass.saving_throws.join(', ')}</h5>

      <div className='subclass-preview'>
        {subclasses}
      </div>

      <div className='subclass-preview-active'>
        <h5>{activeSubClass.name}</h5>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
          ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
          voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
          sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
          mollit anim id est laborum.
        </p>

        <div className='subclass-details'>
          <section id='skill-selection'>
            <h3>Available Skills (May pick up to {choiceCount} of the following skills)</h3>
            <div>
              <small>you will choose these later</small>
            </div>
            <ul>
              {skills}
            </ul>
          </section>
        </div>
      </div>

      <Link to='/create/attributes'>CHANGE ABILITY SCORES</Link>
    </section>
  );
}

const ClassSelection = connect(
  classSelectProps,
  subClassDispatch
)(ClassSelect);
export default ClassSelection;
