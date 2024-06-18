import { insertionSort } from './index';

describe('insertionSort', () => {
  it('insertionSort', () => {
    expect(insertionSort([1, 2, 4, 5, 6, 2])).toEqual([1, 2, 2, 4, 5, 6]);
    expect(insertionSort([1, 1, 1, 1, 1])).toEqual([1, 1, 1, 1, 1]);
  });
});
