import { buildHeap, heapify, heapSort } from './index';
import { insertionSort } from '../insertionSort';

describe('heapSort', () => {
  it('heapSort', () => {
    expect(heapSort([1, 2, 4, 5, 6, 2])).toEqual([1, 2, 2, 4, 5, 6]);
    expect(heapSort([1, 2, 4, 5, 6, 2], (a, b) => b - a)).toEqual(
      insertionSort([1, 2, 2, 4, 5, 6], (a, b) => b - a)
    );
    expect(heapSort([1, 1, 1, 1, 1])).toEqual([1, 1, 1, 1, 1]);
  });

  it('heapify', () => {
    let arr = [32, 423, 54, 32, 13, 56, 4];
    buildHeap(arr);
    console.log(arr);

    arr = [64, 34, 25, 12, 22, 11, 90];
    buildHeap(arr);
    console.log(arr);

    arr = [4, 10, 3, 5, 1, 2];
    buildHeap(arr);
    console.log(arr);
  });
});
