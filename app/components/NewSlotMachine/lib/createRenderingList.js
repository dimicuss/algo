import { times } from 'lodash';


export default function createRenderingList(item, count) {
  let next = item;
  let previous = item;
  const result = [];

  times(count, () => {
    previous = previous.previous;
    result.unshift(previous.data);
  });

  result.push(item.data);

  times(count, () => {
    next = next.next;
    result.push(next.data);
  });

  return result;
}
