import React, { Component } from 'react';
let n = 0;
class UprootParent extends Component {
  constructor() {
    super(...arguments);
    this.state = {};
  }

  _style() {
    if (this.props.isActive) {
      return {
        backgroundColor: 'black',
        color: 'white'
      };
    } else {
      return {
        backgroundColor: 'white',
        color: 'black'
      }
    }
  }


  testing() {
    console.log(arguments);
  }

  _renderChildren(...nodes) {
    var key = this.props._childUproot;
    var children = this.props[key];
    var node = this.props.nodeLevel;
    var activeCell = [-1,-1];
    if (this.state.activeCell) {
      activeCell = this.state.activeCell;
    } else {
      activeCell = this.props.activeCell || activeCell;
    }
    if (children.length > 0) {
      return children.map((r,i) => {
        r.activeCell = activeCell;
        var isActive = activeCell[1] === i && activeCell[0] === node + 1;
        if (r[key].length > 0) {
          return (
            <Parent updateScore={this._updateScore.bind(this)} isActive={isActive} nodeLevel={node + 1} idx={i} {...r} />
          );
        } else {
          return (
            <Child updateScore={this._updateScore.bind(this)} isActive={isActive} nodeLevel={node + 1} idx={i} {...r} />
          );
        }
      })
    }
    return;
  }
}

class Child extends UprootParent {
  _updateScore() {
    this.props.updateScore(this.props.nodeLevel, this.props.idx);
  }

  render() {
    return (
      <div onClick={this._updateScore.bind(this)} key={this.props.name}>
        <div style={this._style()}>{this.props.name}</div>
      </div>
    );
  }
}

class Parent extends UprootParent {
  _renderChildren(...nodes) {
    nodes.push(this.props);
    return super._renderChildren(...nodes);
  }

  _updateScore(nodeLevel, idx) {
    console.log(arguments);
    if (!this.props.updateScore) {
      this.setState({
        activeCell: [nodeLevel, idx]
      });
    } else {
      this.props.updateScore(nodeLevel, idx);
    }
  }

  render() {
    var score = this.props.primaryNode ? this.state.score : '';
    var { nodeLevel, idx } = this.props;
    return (
      <div>
        <div style={this._style()} onClick={this._updateScore.bind(this, nodeLevel, idx)}>
          {this.props.name}
          <div>{score}</div>
        </div>
        <div>{this._renderChildren()}</div>
      </div>
    );
  }
}


Parent.defaultProps = {
  _uprootable: true
}

export default Parent;