import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import { connect } from 'react-redux';
import { slideSelectRaceDispatch } from './store/reducers';
const Transition = ReactCSSTransitionGroup;

class SlideSelectWrapper extends React.Component {
  constructor() {
    super(...arguments);
    this.state = {
      shiftedFromLeft: true,
      shiftedFromRight: false
    };
    this.shiftRight = this.shiftRight.bind(this);
    this.shiftLeft = this.shiftLeft.bind(this);
  }

  shiftRight() {
    const { items, type, activeItem } = this.props;
    let idx = items.indexOf(activeItem.name);
    if (idx + 1 < items.length) {
      this.props.shiftRight(type, idx + 1);
    }
  }

  shiftLeft() {
    const { items, type, activeItem } = this.props;
    let idx = items.indexOf(activeItem.name);
    if (idx > 0) {
      this.props.shiftLeft(type, idx - 1);
    }
  }

  handleSelect(item, idx) {
    this.props.handleSelect(idx, item.subraces ? 'activeRaceIdx' : 'activeSubRaceIdx');
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.activeIdx > nextProps.activeIdx) {
      // shifting left
      this.setState({ shiftedFromRight: true, shiftedFromLeft: false });
    } else {
      this.setState({ shiftedFromRight: false, shiftedFromLeft: true });
    }
  }

  render() {
    const { activeItem } = this.props;
    const { shiftedFromLeft } = this.state;
    const itemName = activeItem ? activeItem.name : 'null';
    let className;

    if (shiftedFromLeft) {
      className = 'item-slide-right';
    } else {
      className = 'item-slide-left';
    }

    return (
      <div className='items'>
        <button className='slider' onClick={this.shiftLeft}>{'<<'}</button>

        <Transition transitionName={className} transitionEnterTimeout={700} transitionLeaveTimeout={700} component='div' className='slide'>
          <div key={itemName} className={className + ' item'}>
            {itemName}
          </div>
        </Transition>

        <button className='slider' onClick={this.shiftRight}>{'>>'}</button>
      </div>
    );
  }
}

const SlideSelect = connect(
  slideSelectRaceDispatch
)(SlideSelectWrapper);

export default SlideSelect;
