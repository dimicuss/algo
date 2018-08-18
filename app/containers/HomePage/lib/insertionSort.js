export default function insertionSort(A, p = 1, r = A.length - 1) {
  for (let i = p; i <= r; i += 1) {
    let j = i - 1;
    const key = A[i];
    while (j > p - 2 && key < A[j]) {
      A[j + 1] = A[j];
      j -= 1;
    }
    A[j + 1] = key;
  }

  return A;
}
