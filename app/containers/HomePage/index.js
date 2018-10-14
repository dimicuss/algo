import React from 'react';
import { rangeRight, range as createRange, random } from 'lodash';
import NewSlotMachine from 'components/NewSlotMachine';

import insertionSort from './lib/insertionSort';
import selectSort from './lib/selectSort';
import mergeSort from './lib/mergeSort';
import logUtil from './lib/logUtil';
import linearSearch from './lib/linearSearch';
import binarySum from './lib/binarySum';
import binarySearch from './lib/binarySearch';
import insertionSortRecursive from './lib/insertionSortRecursive';
import sumSearch from './lib/sumSearch';
import modificatedMegeSort from './lib/modificatedMegeSort';


const n = 10000;
const binaryNumberA = [0, 1, 1, 1, 1];
const binaryNumberB = [1, 1, 1, 1, 1];
const createDescRange = (range = n) => rangeRight(range);


const images = [
  'http://josex2r.github.io/jQuery-SlotMachine/img/slot1.png',
  'http://josex2r.github.io/jQuery-SlotMachine/img/slot2.png',
  'http://josex2r.github.io/jQuery-SlotMachine/img/slot3.png',
  'http://josex2r.github.io/jQuery-SlotMachine/img/slot4.png',
  'http://josex2r.github.io/jQuery-SlotMachine/img/slot5.png',
  'http://josex2r.github.io/jQuery-SlotMachine/img/slot6.png',
].map((image) => <img src={image} alt={image} />);


export default class HomePage extends React.PureComponent {
  state = {
    target: 0,
  };


  handleButtonClick = () => {
    this.setState({
      target: this.state.target === 0 ? images.length - 1 : this.state.target - 1,
    });
  };


  binarySum() {
    logUtil('binary sum', binarySum, binaryNumberA, binaryNumberB, Math.max(binaryNumberA.length, binaryNumberB.length));
  }


  linearSearch() {
    logUtil('linear search', linearSearch, createDescRange(), n - 1);
  }


  insertionSortTest() {
    logUtil('insertion sort', insertionSort, createDescRange());
  }


  selectSortTest() {
    logUtil('selection sort', selectSort, createDescRange());
  }


  mergeSort() {
    const range = createDescRange();
    logUtil('merge sort', mergeSort, range, 0, range.length - 1);
  }


  insertionSortRecursive() {
    logUtil('insertion sort recursive', insertionSortRecursive, createDescRange(n / 10));
  }


  sumSearch() {
    logUtil('sum search', sumSearch, createRange(n), 1499);
  }


  binarySearch() {
    const searchingItem = 0;

    logUtil('binary search', binarySearch, createRange(n), (item) => {
      if (searchingItem < item) {
        return -1;
      } else if (searchingItem > item) {
        return 1;
      }
      return 0;
    });
  }


  modificatedMergeSort() {
    const range = createDescRange(5);
    logUtil('modificated merge sort', modificatedMegeSort, range, 0, range.length - 1);
  }

  render() {
    console.log(this.state.target);
    return (
      <div>
        <NewSlotMachine width={100} height={100} target={this.state.target} padding={2} items={images} />
        <button onClick={this.handleButtonClick}>Shuffle</button>
      </div>
    );
  }
}
