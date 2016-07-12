import React from 'react';
import { classes } from '../utils/helpers';


class Step extends React.Component {
  get classNames() {
    return { 'step': true, 'active-step': this.isCurrentStep };
  }

  get isCurrentStep() {
    return this.props.activeStep == this.props.stepNumber;
  }

  get href() {
    return this.props.href;
  }

  get label() {
    return this.props.label;
  }

  render() {
    return <a className={classes(this.classNames)} href={this.href}>{this.label}</a>;
  }
}

Step.propTypes = {
  label: React.propTypes.string,
  href: React.propTypes.string,
  activeStep: React.propTypes.number,
  stepNumber: React.propTypes.number
};

class CharacterCreationState extends React.Component {
  render() {
    var steps = this.props.steps.map(step => <Step step={step} />);
    return (
      <nav id='navigation'>
        <ul>
          {steps}
        </ul>
      </nav>
    );
  }
}

CharacterCreationState.propTypes = {
  step: React.propTypes.number.isRequired,
  steps: React.propTypes.array
};

CharacterCreationState.defaultProps = {
  step: 0,
  steps: [
    { label: 'Choose a Race', href: '/pick-race' },
    { label: 'Adjust your Ability Scores', href: '/pick-scores' },
    { label: 'Pick your Character Class', href: '/pick-class' }
  ]
};