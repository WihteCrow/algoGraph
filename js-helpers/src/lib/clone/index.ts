export function clone(value: any) {
  if (Array.isArray(value)) {
    return [...value];
  }

  if (typeof value === 'object' && value !== null) {
    return { ...value };
  }

  return value;
}
