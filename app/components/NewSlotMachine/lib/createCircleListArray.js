import { includes } from 'lodash';

export default function createCircleListArray(list, array = []) {
  if (includes(array, list) || list === null) {
    return array;
  }
  array.push(list);
  return createCircleListArray(list.next, array);
}
