import { mergeSort } from './index';
import { insertionSort } from '../insertionSort';

describe('mergeSort', () => {
  it('insertionSort', () => {
    expect(mergeSort([1, 2, 4, 5, 6, 2])).toEqual([1, 2, 2, 4, 5, 6]);
    expect(mergeSort([1, 2, 4, 5, 6, 2], (a, b) => b - a)).toEqual(
      insertionSort([1, 2, 2, 4, 5, 6], (a, b) => b - a)
    );
    expect(mergeSort([1, 1, 1, 1, 1])).toEqual([1, 1, 1, 1, 1]);
  });
});
