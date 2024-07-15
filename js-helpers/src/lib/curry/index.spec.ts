import { curry } from './index';

describe('curry', () => {
  it('curry', () => {
    function f(a: number, b: number, c: number) {
      return a + b + c
    }
    const a = curry(f, 3)
    a(1)
    a(2)
    console.log(a(3)(3)(3));
  });
});
