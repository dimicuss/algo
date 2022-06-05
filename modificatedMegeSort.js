import insertionSort from './insertionSort';


function merge(A, p, q, r) {
  const n1 = (q - p) + 1;
  const n2 = r - q;
  const L = [];
  const R = [];

  for (let i = 0; i < n1; i += 1) {
    L[i] = A[p + i];
  }

  for (let j = 0; j < n2; j += 1) {
    R[j] = A[q + j + 1];
  }

  let i = 0;
  let j = 0;


  for (let k = p; k <= r; k += 1) {
    if (j === n2) {
      A[k] = L[i];
      i += 1;
      continue;
    }

    if (i === n1) {
      A[k] = R[j];
      j += 1;
      continue;
    }

    if (L[i] < R[j]) {
      A[k] = L[i];
      i += 1;
    } else {
      A[k] = R[j];
      j += 1;
    }
  }
}


const k = 16;


export default function mergeSort(A, p, r) {
  if (p < r) {
    const q = Math.floor(((p + r) / 2));

    if (((r - p) + 1) <= k) {
      insertionSort(A, p, r);
    } else {
      mergeSort(A, p, q);
      mergeSort(A, q + 1, r);
      merge(A, p, q, r);
    }
  }
}
