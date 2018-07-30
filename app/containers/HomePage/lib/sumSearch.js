import binarySearch from './binarySearch';


export default function sumSearch(A, x) {
  for (let i = 0; i <= A.length - 2; i += 1) {
    const a = A[i];
    const result = binarySearch(A, (b) => {
      const sum = a + b;
      if (sum > x) {
        return -1;
      } else if (sum < x) {
        return 1;
      }
      return 0;
    }, i + 1, A.length - 1);

    if (result) {
      return [a, A[result]];
    }
  }

  return undefined;
}
