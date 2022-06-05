import { cond, isString, every, stubTrue, identity, pick, mapValues, isNil, some } from 'lodash';


const handleConf = cond([
  [
    isNil,
    () => null,
  ],
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


export default function createConfigMerge(mergeProperties) {
  const configMerge = cond([
    [
      (...rest) => some(rest, isNil),
      (configA) => configA,
    ],
    [
      createCompareFunction('object'),
      (configA, configB) => ({
        ...configA,
        ...pick(configB, mergeProperties),
        properties: mapValues(configA.properties, (config, key) => configMerge(config, configB.properties[key])),
      }),
    ],
    [
      createCompareFunction('array'),
      (configA, configB) => ({
        ...configA,
        ...pick(configB, mergeProperties),
        items: configMerge(configA.items, configB.items),
      }),
    ],
    [
      stubTrue,
      identity,
    ],
  ].map((condition) => condition.map(createTypeHandler)));

  return configMerge;
}
