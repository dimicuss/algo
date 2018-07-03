export default function logTime(description, func, ...args) {
  console.log(description);
  console.time();
  console.log(func(...args));
  console.timeEnd();
}
