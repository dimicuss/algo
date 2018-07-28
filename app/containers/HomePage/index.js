import React from 'react';
import { FormattedMessage } from 'react-intl';
import { rangeRight } from 'lodash';

import messages from './messages';
import insertionSort from './lib/insertionSort';
import selectSort from './lib/selectSort';
import mergeSort from './lib/mergeSort';
import logUtil from './lib/logUtil';
import linearSearch from './lib/linearSearch';
import binarySum from './lib/binarySum';
import binarySearch from './lib/binarySearch';
import insertionSortRecursive from './lib/insertionSortRecursive';


const n = 10000;
const binaryNumberA = [0, 1, 1, 1, 1];
const binaryNumberB = [1, 1, 1, 1, 1];
// const ascRange = range(n);
const createDescRange = (range = n) => rangeRight(range);


export default class HomePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  binarySearch() {
    const searchingItem = 5000;

    logUtil('binary search', binarySearch, createDescRange(), (item) => {
      if (item > searchingItem) {
        return 1;
      } else if (item < searchingItem) {
        return -1;
      }

      return 0;
    });
  }


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


  render() {
    this.insertionSortTest();
    this.selectSortTest();
    this.mergeSort();
    this.linearSearch();
    this.binarySum();
    this.binarySearch();
    this.insertionSortRecursive();
    return (
      <h1>
        <FormattedMessage {...messages.header} />
      </h1>
    );
  }
}
