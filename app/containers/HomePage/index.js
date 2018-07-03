import React from 'react';
import { FormattedMessage } from 'react-intl';
import { rangeRight } from 'lodash';

import messages from './messages';
import insertionSort from './lib/insertionSort';
import selectSort from './lib/selectSort';
import mergeSort from './lib/mergeSort';
import logUtil from './lib/logUtil';


const n = 10000;
const descRange = rangeRight(n);
// const ascRange = range(n);


export default class HomePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
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
    return (
      <h1>
        <FormattedMessage {...messages.header} />
      </h1>
    );
  }
}
