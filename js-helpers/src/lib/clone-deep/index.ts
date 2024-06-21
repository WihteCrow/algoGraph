export function cloneDeep(value: any, cache = new WeakMap()) {
  if (typeof value !== 'object' || value === null) {
    return value;
  }

  // 特殊对象处理
  if (value instanceof Date) {
    return new Date(value);
  }

  // 正则表达式
  if (value instanceof RegExp) {
    return new RegExp(value);
  }

  if (cache.has(value)) {
    return cache.get(value);
  }

  const newObj = Array.isArray(value) ? [] : {};

  cache.set(value, newObj);

  Object.keys(value).forEach((key) => {
    newObj[key] = cloneDeep(value[key], cache);
  });

  return newObj;
}
