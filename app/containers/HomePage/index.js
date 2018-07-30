import React from 'react';
import { FormattedMessage } from 'react-intl';
import { rangeRight, range as createRange } from 'lodash';

import messages from './messages';
import insertionSort from './lib/insertionSort';
import selectSort from './lib/selectSort';
import mergeSort from './lib/mergeSort';
import logUtil from './lib/logUtil';
import linearSearch from './lib/linearSearch';
import binarySum from './lib/binarySum';
import binarySearch from './lib/binarySearch';
import insertionSortRecursive from './lib/insertionSortRecursive';
import sumSearch from './lib/sumSearch';


const n = 10000;
const binaryNumberA = [0, 1, 1, 1, 1];
const binaryNumberB = [1, 1, 1, 1, 1];
const createDescRange = (range = n) => rangeRight(range);


export default class HomePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
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
    const range = createRange(n);
    logUtil('sum search', sumSearch, range, 1499);
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


  render() {
    this.insertionSortTest();
    this.selectSortTest();
    this.mergeSort();
    this.linearSearch();
    this.binarySum();
    this.insertionSortRecursive();
    this.binarySearch();
    this.sumSearch();

    return (
      <h1>
        <FormattedMessage {...messages.header} />
      </h1>
    );
  }
}
