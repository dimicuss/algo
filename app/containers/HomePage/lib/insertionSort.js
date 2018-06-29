export default function insertionSort(A) {
  for (let i = 1; i < A.length; i += 1) {
    let j = i - 1;
    const key = A[i];
    while (j > -1 && key < A[j]) {
      A[j + 1] = A[j];
      j -= 1;
    }
    A[j + 1] = key;
  }

  return A;
}
