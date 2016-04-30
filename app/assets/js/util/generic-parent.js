import React, { Component } from 'react';
let n = 0;
class UprootParent extends Component {
  constructor() {
    super(...arguments);
    this.state = {
      score: 0
    };
  }


  // TODO: when I need to make it more efficient, I should probably start here.
  // shouldComponentUpdate(nextProps, nextState) {
  //   if (this.props.primaryNode) {
  //     return this.state.score !== nextState.score;
  //   } else {
  //     return this.props.isActive === undefined;
  //   }
  // }

  _updateScore(score, name, isChild) {
    // console.log(score, this.props.score, name, isChild);
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
  _updateScore(nodeLevel, idx, score, e) {
    super._updateScore(score, this.props.name, this.props.isChild);
    e.preventDefault();
    e.stopPropagation();
    this.props.updateScore(nodeLevel, idx, score);
  }

  render() {
    var { nodeLevel, idx, score } = this.props;
    return (
      <div onClick={this._updateScore.bind(this, nodeLevel, idx, score)} key={this.props.name}>
        <div style={this._style()}>{this.props.name} - has {this.props.score}</div>
      </div>
    );
  }
}

class Parent extends UprootParent {
  _renderChildren(...nodes) {
    nodes.push(this.props);
    return super._renderChildren(...nodes);
  }

  _updateScore(nodeLevel, idx, score, e) {
    super._updateScore(score, this.props.name, this.props.isChild);
    if (!e) score += this.props.score;
    if (this.props.primaryNode) {
      this.setState({
        activeCell: [nodeLevel, idx],
        score
      });
    } else {
      this.props.updateScore(nodeLevel, idx, score);
    }
  }

  render() {
    var score = this.props.primaryNode ? this.state.score : this.props.score;
    var { nodeLevel, idx } = this.props;
    console.log(n += 1);
    return (
      <div>
        <div style={this._style()} onClick={this._updateScore.bind(this, nodeLevel, idx, score)}>
          {this.props.name} has {score}
        </div>
        <div>{this._renderChildren()}</div>
      </div>
    );
  }
}


Parent.defaultProps = {
  _uprootable: true,
  isChild: false
}

Child.defaultProps = {
  isChild: true
}

export default Parent;