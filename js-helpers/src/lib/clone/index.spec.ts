import { clone } from './index';

describe('clone', () => {
  it('clone', () => {
    const arr = [{}, [], NaN, null, undefined, Symbol(1), 1, 2, 3];

    for (let i = 0; i < arr.length; i++) {
      console.log(clone(arr[i]));
      expect(clone(arr[i])).toEqual(arr[i]);
    }
  });
});
