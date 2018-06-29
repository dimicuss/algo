/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';
import { FormattedMessage } from 'react-intl';
import { rangeRight, range } from 'lodash';
import messages from './messages';
import insertionSort from './lib/insertionSort';
import selectSort from './lib/selectSort';

const n = 5000;
const descRange = rangeRight(n);
const ascRange = range(n);


export default class HomePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  insertionSortTest() {
    console.log('selection sort');
    console.time('desc');
    console.log(insertionSort(descRange));
    console.timeEnd('desc');

    console.time('asc');
    insertionSort(ascRange);
    console.timeEnd('asc');
  }


  selectSortTest() {
    console.time('desc');
    selectSort(descRange);
    console.timeEnd('desc');

    console.time('asc');
    selectSort(ascRange);
    console.timeEnd('asc');
  }


  render() {
    this.insertionSortTest();
    // this.selectSortTest();
    return (
      <h1>
        <FormattedMessage {...messages.header} />
      </h1>
    );
  }
}
