/**
 * 科里化函数
 * @param fun
 * @param len
 */
export function curry(fun: any, len: number) {
  return function curried(...args: any[]) {
    if (args.length === len) {
      return fun.apply(this, args);
    }
    return function (...newArg: any[]) {
      return curried.apply(this, args.concat(newArg));
    };
  };
}
