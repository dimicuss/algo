import { flow } from 'lodash';
import createCircleList from './createCircleList';
import createCircleListArray from './createCircleListArray';


const createList = flow([
  createCircleList,
  createCircleListArray,
]);


export default function createState({ items, currentIndex, offset, ...otherProps }) {
  const { padding, height } = otherProps;

  const initialHeight = -(padding * height);

  return {
    currentIndex,
    initialHeight,
    list: createList(items),
    props: otherProps,
    offset: offset || initialHeight,
  };
}
