// [0, 1, 2, 3, 4, 5, 6]


export default function binarySearch(A, key, p = 0, r = A.length - 1) {
  if (p === r) {
    const q = Math.ceil((r - p) / 2) + p;
    const k = A[q];

    switch (key(k)) {
      case -1:
        return binarySearch(A, key, p, q);
      case 1:
        return binarySearch(A, key, q, r);
      default:
        return k;
    }
  }

  return undefined;
}
