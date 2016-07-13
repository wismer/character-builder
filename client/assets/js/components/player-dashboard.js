import React from 'react';
import { classes } from '../util/helper';


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

  get handleClick() {
    return this.props.handleClick;
  }

  render() {
    return <a onClick={this.handleClick} className={classes(this.classNames)} href={this.href}>{this.label}</a>;
  }
}

Step.propTypes = {
  label: React.PropTypes.string,
  href: React.PropTypes.string,
  activeStep: React.PropTypes.number,
  stepNumber: React.PropTypes.number,
  handleClick: React.PropTypes.func
};

class CharacterCreationState extends React.Component {
  get activeStep() { return this.props.activeStep; }

  handleStepClick() {
    return this.props.handleStepClick;
  }

  render() {
    var steps = this.props.steps.map(step => <Step handleClick={this.handleStepClick} activeStep={this.activeStep} {...step} />);
    return (
      <footer id='navigation'>
        <ul>
          {steps}
        </ul>
      </footer>
    );
  }
}

CharacterCreationState.propTypes = {
  activeStep: React.PropTypes.number.isRequired,
  handleStepClick: React.PropTypes.func,
  steps: React.PropTypes.array
};

CharacterCreationState.defaultProps = {
  step: 0,
  steps: [
    { label: 'Choose a Race', href: '/pick-race', stepNumber: 0 },
    { label: 'Adjust your Ability Scores', href: '/pick-scores', stepNumber: 1 },
    { label: 'Pick your Character Class', href: '/pick-class', stepNumber: 2 }
  ]
};

export default CharacterCreationState;