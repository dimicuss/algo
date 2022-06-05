export default function insertionSortRecursive(A, n = A.length - 1) {
  if (n > 0) {
    insertionSortRecursive(A, n - 1);
    let j = n - 1;
    const key = A[n];
    while (j > -1 && key < A[j]) {
      A[j + 1] = A[j];
      j -= 1;
    }
    A[j + 1] = key;
  }
}
