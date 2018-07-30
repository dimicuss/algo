export default function binarySearch(A, key, p = 0, r = A.length - 1) {
  if (p <= r) {
    const q = Math.floor((r - p) / 2) + p;
    const v = A[q];
    const keyResult = key(v);

    if (keyResult === 0) {
      return q;
    }

    if (keyResult === -1) {
      return binarySearch(A, key, p, q - 1);
    }

    return binarySearch(A, key, q + 1, r);
  }

  return undefined;
}
