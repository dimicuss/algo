import { cond, isString, every, stubTrue, identity, pick, mapValues, isNil, some } from 'lodash';


const handleConf = cond([
  [
    isString,
    (type) => ({ type }),
  ],
  [
    ({ type }) => type === 'array',
    (config) => ({ items: {}, ...config }),
  ],
  [
    ({ type }) => type === 'object',
    (config) => ({ properties: {}, ...config }),
  ],
]);


function createTypeHandler(f) {
  return (...rest) => {
    const handledRest = rest.map(handleConf);
    return f(...handledRest);
  };
}


function createCompareFunction(compareType) {
  return (...rest) => every(rest, ({ type }) => type === compareType);
}


const areObjects = createTypeHandler(createCompareFunction('object'));
const areArrays = createTypeHandler(createCompareFunction('array'));


export default function createConfigMerge(mergeProperties) {
  const configMerge = cond([
    [
      (...rest) => some(rest, isNil),
      (configA) => configA,
    ],
    [
      areObjects,
      createTypeHandler((configA, configB) => ({
        ...configA,
        ...pick(configB, mergeProperties),
        properties: mapValues(configA.properties, (config, key) => configMerge(config, configB.properties[key])),
      })),
    ],
    [
      areArrays,
      createTypeHandler((configA, configB) => ({
        ...configA,
        ...pick(configB, mergeProperties),
        items: configMerge(configA.items, configB.items),
      })),
    ],
    [
      stubTrue,
      identity,
    ],
  ]);

  return configMerge;
}
