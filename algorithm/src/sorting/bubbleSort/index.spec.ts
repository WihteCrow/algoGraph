import { bubbleSort } from './index';

describe('bubbleSort', () => {
  it('bubbleSort', () => {
    expect(bubbleSort([1, 2, 4, 5, 6, 2])).toEqual([1, 2, 2, 4, 5, 6]);
    expect(bubbleSort([1, 1, 1, 1, 1])).toEqual([1, 1, 1, 1, 1]);
  });
});
