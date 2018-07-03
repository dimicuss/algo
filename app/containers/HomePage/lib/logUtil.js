export default function logTime(description, func, ...args) {
  console.time(description);
  const result = func(...args);
  console.timeEnd(description);
  console.log('result', result);
}
