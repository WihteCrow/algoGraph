import { quickSort } from './index';
import { insertionSort } from '../insertionSort';

describe('quickSort', () => {
  it('quickSort', () => {
    expect(quickSort([1, 2, 4, 5, 6, 2])).toEqual([1, 2, 2, 4, 5, 6]);
    expect(quickSort([1, 2, 4, 5, 6, 2], (a, b) => b - a)).toEqual(
      insertionSort([1, 2, 2, 4, 5, 6], (a, b) => b - a)
    );
    expect(quickSort([1, 1, 1, 1, 1])).toEqual([1, 1, 1, 1, 1]);
  });

  it('车牌', () => {
    const arr = [
      {
        name: 'A',
        price: 100,
        weight: 1,
      },
      {
        name: 'B',
        price: 200,
        weight: 2,
      },
      {
        name: 'C',
        price: 200,
        weight: 3,
      },
      {
        name: 'D',
        price: 300,
        weight: 4,
      },
      {
        name: 'E',
        price: 200,
        weight: 5,
      },
    ];
    console.log(
      quickSort(arr, (a, b) => {
        if (a.price === b.price) {
          return a.weight - b.weight;
        }

        return b.price - a.price;
      })
    );
  });
});
