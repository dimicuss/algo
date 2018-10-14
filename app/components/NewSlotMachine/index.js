import React from 'react';
import { array, number, oneOfType, element, func } from 'prop-types';

import createState from './lib/createState';
import startAnimationHandler from './lib/startAnimationHandler';
import createRenderingList from './lib/createRenderingList';
import DefaultItemRenderer from './components/DefaultItemRenderer';

const caf = window.cancelAnimationFrame || window.mozCancelAnimationFrame;


export default class Slot extends React.Component {
  state = createState({ ...this.props, currentIndex: 0 });

  componentDidMount() {
    startAnimationHandler(this);
  }


  componentWillReceiveProps(nextProps) {
    const { offset, currentIndex } = this.state;

    this.rafId && caf(this.rafId); // eslint-disable-line no-unused-expressions
    this.rafId = null;

    this.setState(createState({ ...nextProps, offset, currentIndex }), () => {
      startAnimationHandler(this);
    });
  }


  rafId = null;


  renderFrame() {
    const { currentIndex, list, offset, props: { padding, itemRenderer } } = this.state;
    const currentItem = list[currentIndex];

    return (
      <div style={{ transform: `translateY(${offset}px)` }}>
        {createRenderingList(currentItem, padding).map(itemRenderer)}
      </div>
    );
  }


  render() {
    const { props: { width, height } } = this.state;
    const style = { width, height, overflow: 'hidden' };
    return <div style={style}>{this.renderFrame()}</div>;
  }
}


Slot.propTypes = {
  width: number.isRequired,
  height: number.isRequired,
  target: number,
  items: array.isRequired,
  speed: number.isRequired,
  padding: number,
  itemRenderer: oneOfType([element, func]),

};


Slot.defaultProps = {
  target: 0,
  speed: 100,
  padding: 1,
  itemRenderer: DefaultItemRenderer,
};
