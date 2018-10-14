export default function getSpinCount(currentItem, key, index, result = 0) {
  return currentItem.index === index
    ? result
    : getSpinCount(currentItem[key], key, index, result + 1);
}
