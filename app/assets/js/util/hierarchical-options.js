import React, { Component } from 'react';
import { raceList } from './constants';

export class MenuList extends Component {
  render() {
    return (
      <div className='node-level'>
        {this.props.children}
      </div>
    );
  }
}

MenuList.defaultProps = {
  raceList
};

export class ItemGroup extends Component {
  _updateScore(y, x, score, parent, name) {
    this.props.updateScore(score, parent, name, x, y);
  }

  render() {
    var items,
        idx = this.props.i;

    if (this.props.children) {
      items = this.props.children;
    } else {
      items = this.props.items.map((race, i) => {
        var isActive = this.props.isActive(this.props.x, i);
        return <Item {...race} isActive={isActive} key={i} updateScore={this._updateScore.bind(this, i, this.props.x)} />
      });
    }
    return (
      <div key={this.props.idx}>
        {items}
      </div>
    );
  }
}

ItemGroup.defaultProps = { items: [] };

export class Item extends Component {
  _updateScore(score) {
    this.props.updateScore(score, this.props.parent, this.props.name);
  }

  render() {
    var score = this.props.score;
    var className = this.props.isActive ? 'item-level active-item' : 'item-level';
    return (
      <div onClick={this._updateScore.bind(this, score)} className={className} key={this.props.key}>
        {this.props.name} - {score}
      </div>
    );
  }
}