export default function linearSearch(A, v) {
  for (let i = 0; i < A.length; i += 1) {
    if (A[i] === v) return i;
  }

  return undefined;
}


// Всегда 0 <= i < A.length;
// A[i] - элемент массива по текущему индексу
// A[0...A.length - 1] - элементы массива
