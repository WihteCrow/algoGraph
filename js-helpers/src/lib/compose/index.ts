/**
 * Compose multiple functions into a single function.
 * @param fns
 */
export function compose(...fns: Function[]) {
  if (fns.length === 0) {
    return (arg: any) => arg;
  }

  if (fns.length === 1) {
    return fns[0];
  }

  return fns.reduce((a, b) => {
    try {
      return (...args: any[]) => a(b(...args));
    } catch (error) {
      console.error(`Error occurred during function composition: ${error}`);
      return (arg: any) => arg;
    }
  });
}
