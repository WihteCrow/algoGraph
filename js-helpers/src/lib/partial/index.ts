/**
 * 偏函数应用
 *
 * 允许你固定一个多参数函数的一个或多个参数，并返回一个新的函数，该函数需要剩余未固定的参数
 * @param fn
 * @param fixArgs
 */
export function partial(fn: any, ...fixArgs: any[]) {
  return function (...remainingArgs: any[]) {
    return fn.apply(this, fixArgs.concat(remainingArgs));
  };
}
