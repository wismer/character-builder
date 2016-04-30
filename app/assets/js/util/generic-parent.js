import React, { Component } from 'react';
let n = 0;
class UprootParent extends Component {
  constructor() {
    super(...arguments);
    this.state = {
      active: false
    };
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

  shouldComponentUpdate(nextProps, nextState) {
    return true;
    // return this.state.score !== nextState.score && nextProps.primaryNode;
  }

  _handleClick(e, arg) {
    console.log(arguments);
  }

  _renderChildren(lvl, activeCell) {
    var key = this.props._childUproot;
    var children = this.props[key];
    let parent = this,
        index, node;
    if (activeCell) {
      [index, node] = activeCell;
    }
    var fuck = ({ score, idx, nodeLevel, name }) => {
      if (!parent.props.primaryNode) {
        var updated = {
          score: this.props.score + score,
          idx,
          nodeLevel
        };
        parent.props.fuck(updated);
      } else {
        this.setState({
          score: score + parent.props.score,
          activeCell: [idx, nodeLevel],
          name
        });
      }
    }

    if (children && children.length > 0) {
      return children.map((r,i) => {
        var isActive = i === index && lvl === node - 1;
        if (r[key] && r[key].length > 0) {
          return (
            <Parent isActive={isActive} nodeLevel={lvl + 1} idx={i} fuck={fuck} {...r} />
          );
        } else {
          return (
            <Child isActive={isActive} nodeLevel={lvl + 1} idx={i} fuck={fuck} {...r} />
          );
        }
      })
    } else {
      debugger
    }

    return;
  }
}

class Child extends UprootParent {
  _handleClick() {
    this.props.fuck(this.props);
  }

  render() {
    return (
      <div onClick={this._handleClick.bind(this)} key={this.props.name}>
        <div style={this._style()}>{this.props.name}</div>
      </div>
    );
  }
}

class Parent extends UprootParent {
  _triggerClick(e) {
    this.props.handleClick(e, this.props.score);
  }

  _handleClick() {
    if (!this.props.primaryNode) {
      this.props.fuck(this.props);
    }
  }

  // shouldComponentUpdate(nextProps, nextState) {
  //   return this.state.score !== nextState.score && this.props.primaryNode;
  // }

  render() {
    console.log(this.state.activeCell);
    var score = this.props.primaryNode ? this.state.score : '';
    var nodeLevel = this.props.nodeLevel;
    return (
      <div>
        <div style={this._style()} onClick={this._handleClick.bind(this, this.props.score)}>
          {this.props.name}
          <div>{score}</div>
        </div>
        <div>{this._renderChildren(nodeLevel, this.state.activeCell)}</div>
      </div>
    );
  }
}


Parent.defaultProps = {
  _uprootable: true
}

export default Parent;