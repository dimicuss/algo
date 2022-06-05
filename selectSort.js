export default function insertionSort(A) {
  for (let i = 0; i < A.length - 1; i += 1) {         // c1 * n
    let minIndex = i;                                 // c2 * (n - 1)
    for (let j = i + 1; j < A.length; j += 1) {       // с3 * сумма от i = 0 до n - 1 (Tj)
      if (A[j] < A[minIndex]) {                       // с4 * сумма от i = 0 до n - 1 (Tj - 1)
        minIndex = j;                                 // c5 * сумма от i = 0 до n - 1 (Tj - 1)
      }
    }
    const previousMin = A[i];                         // c6 * (n - 1)
    A[i] = A[minIndex];                               // c7 * (n - 1)
    A[minIndex] = previousMin;                        // c6 * (n - 1)
  }
  return A;                                           // c8
}
