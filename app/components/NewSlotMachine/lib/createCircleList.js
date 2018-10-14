import { flow } from 'lodash';


function getLastItem(twoWayList) {
  return twoWayList.next === null
    ? twoWayList
    : getLastItem(twoWayList.next);
}


function createCircleList(twoWayList) {
  const lastItem = getLastItem(twoWayList);
  twoWayList.previous = lastItem; // eslint-disable-line no-param-reassign
  lastItem.next = twoWayList;
  return twoWayList;
}


function createTwoWayList(array, previous = null, index = 0) {
  if (array.length) {
    const item = {
      data: array[0],
      index,
      previous,
    };

    item.next = createTwoWayList(array.slice(1), item, index + 1);

    return item;
  }

  return null;
}


export default flow([
  createTwoWayList,
  createCircleList,
]);
