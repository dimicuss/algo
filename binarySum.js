export default function binarySum(A, B, n) {
  const С = [];
  let mod = 0;

  for (let i = n - 1; i >= 0; i -= 1) {
    const sum = (A[i] || 0) + (B[i] || 0) + mod;

    if (sum === 0) {
      С[i + 1] = sum;
      mod = 0;
    }

    if (sum === 1) {
      С[i + 1] = sum;
      mod = 0;
    }

    if (sum === 2) {
      С[i + 1] = 0;
      mod = 1;
    }

    if (sum === 3) {
      С[i + 1] = 1;
      mod = 1;
    }
  }

  С[0] = mod;

  return С;
}


// Инвариант
// С - массив сумм бинарных чисел
// n - 1 => i >= 0
// A[i], B[i] всегда есть элементы множеств A, B;
// C[i + 1]  положение результата суммы в новом массиве C
// mod - остаток от  суммы всегда либо 1 либо 0
