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
import './lib/configMerge';


const n = 10000;
const descRange = rangeRight(n);
const binaryNumberA = [0, 1, 1, 1, 1];
const binaryNumberB = [1, 1, 1, 1, 1];
// const ascRange = range(n);


export default class HomePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  binarySum() {
    logUtil('binary sum', binarySum, binaryNumberA, binaryNumberB, Math.max(binaryNumberA.length, binaryNumberB.length));
  }


  linearSearch() {
    logUtil('linear search', linearSearch, descRange, n - 1);
  }


  insertionSortTest() {
    logUtil('insertion sort', insertionSort, descRange);
  }


  selectSortTest() {
    logUtil('selection sort', selectSort, descRange);
  }


  mergeSort() {
    logUtil('merge sort', mergeSort, descRange, 0, descRange.length - 1);
  }


  render() {
    this.insertionSortTest();
    this.selectSortTest();
    this.mergeSort();
    this.linearSearch();
    this.binarySum();
    return (
      <h1>
        <FormattedMessage {...messages.header} />
      </h1>
    );
  }
}
