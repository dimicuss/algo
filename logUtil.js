import { identity, isArray, clone, isFunction, cond, stubTrue, isNil } from 'lodash';


const typeDetribution = cond([
  [
    isNil,
    identity,
  ],
  [
    isArray,
    (array) => `${array.slice(0, 10)} ...`,
  ],
  [
    isFunction,
    () => 'FUNCTION',
  ],
  [
    stubTrue,
    (arg) => arg.toString(),
  ],
]);


const format = (arg, i) => `ARG${i}: ${typeDetribution(arg)}`;
const formatArgs = (args) => args.map(format).join('\n');


export default function logTime(description, func, ...args) {
  const clonedArgs = args.map((arg) => isFunction(arg)
    ? arg
    : clone(arg)
  );
  console.log(`------${description} START-----`);
  console.time();
  const result = func(...clonedArgs);
  console.timeEnd();
  console.log('------Initial args -------------');
  console.log(formatArgs(args));
  console.log('------Handled args--------------');
  console.log(formatArgs(clonedArgs));
  console.log('RETURN:', typeDetribution(result));
  console.log(`------${description} END-------`);
  console.log('\n');
}
