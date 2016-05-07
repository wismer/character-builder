import React from 'react';
import ReactDOM from 'react-dom';
import { MenuList, ItemGroup, Item } from './util/hierarchical-options';
import { raceList } from './util/constants';

const { dwarf, items } = raceList;

let App = React.createClass({
  getInitialState() {
    return {
      reveal: false,
      activeRace: null,
      selectedRace: null,
      score: 0,
      activeCell: [],
      parent: []
    };
  },

  _selectRace(selectedRace) {
    this.setState({ selectedRace });
  },

  _reveal(activeState, raceProps) {
    this.setState({ activeRace: activeState ? raceProps : null });
  },

  _updateScore(score, parent, name, a, b) {
    var [x,y] = parent.map(i => i - 1);
    var activeCell = [];
    var parent;
    if (x > -1) {
      var item = items[x][y];
      score += item.score;
      activeCell = [a,b];
      parent = [x,y];
    }
    this.setState({ score, activeCell, parent });
  },

  render() {
    var [x,y] = this.state.parent;
    var [a,b] = this.state.activeCell;
    var groupItems = items.map((group, idx) => {
      var isActive;
      if (x === idx) {
        isActive = (i,n) => i === x && y === n;
      } else {
        isActive = (f,g) => f === a && g === b;
      }

      return (
        <ItemGroup isActive={isActive} updateScore={this._updateScore} x={idx} items={group} key={idx} />
      );
    });
    return (
      <div className='primary-node'>
        <MenuList>
          <ItemGroup>
            <Item primary={true} {...dwarf} score={this.state.score} />
          </ItemGroup>

          <div className='group-items'>
            {groupItems}
          </div>
        </MenuList>
      </div>
    );
  }
});

function showReact() {
  ReactDOM.render(
    <App />,
    document.getElementById('render')
  );
}


window.onload = showReact;