import React from 'react';
import Player from '../player';
import raceSelect from './race-select';
import classSelect from './class-select';
import skillSelect from './train-skills';

const STAGES = [
  raceSelect,
  classSelect,
  skillSelect
];

export default React.createClass({
  getInitialState() {
    return {
      player: new Player(),
      stage: 0,
      activeComponent: null
    };
  },

  shouldComponentUpdate(futureProps, futureState) {
    return futureState.stage !== this.state.stage;
  },

  componentWillMount() {
    var activeComponent = this._renderStage(0);
    this.setState({ activeComponent });
  },

  _renderStage(stage) {
    var component = STAGES[stage];
    var type = component.type;
    if (type === 'list') {
      var list = this.props[component.key] || [];
      return list.map((attrs, i) => {
        return React.createElement(component.componentClass, attrs);
      });
    }
    return React.createElement(component.component, component.props);
  },

  _advance() {
    var stage = this.state.stage + 1 > 2 ? 0 : this.state.stage + 1;
    var activeComponent = this._renderStage(stage);
    this.setState({ activeComponent, stage: stage });
  },

  _retreat() {
    var stage = this.state.stage - 1 > 0 ? this.state.stage - 1 : 0;
    this.setState({ activeComponent: this._renderStage(stage), stage });
  },

  render() {
    return (
      <div className='active-component'>
        {this.state.activeComponent}
        <button onClick={this._advance}>CLICK ME TO MOVE FORWARD</button>
        <button onClick={this._retreat}>CLICK ON ME TO MOVE BACK</button>
      </div>
    );
  }
});