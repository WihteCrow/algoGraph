import { CompareFunction } from '../../types';

/**
 *  https://zh.wikipedia.org/wiki/%E6%8F%92%E5%85%A5%E6%8E%92%E5%BA%8F
 *  in-place
 *
 *  空间复杂度 O(1)
 *  时间复杂度 O(n^{2})
 *  最好情况是已经排好序，需要 n-1次
 *  最好情况下是倒序，需要 1/2n(n -1)次
 *
 *  1、从第一个元素开始，该元素可以认为已经被排序
 *  2、取出下一个元素，在已经排序的元素序列中从后向前扫描
 *  3、如果该元素（已排序）大于新元素，将该元素移到下一位置
 *  4、重复步骤3，直到找到已排序的元素小于或者等于新元素的位置
 *  5、将新元素插入到该位置后
 *  6、重复步骤2~5
 */
export function insertionSort<T>(arr: T[], compare?: CompareFunction<T>) {
  for (let i = 1; i < arr.length; i++) {
    for (let j = 0; j < i; j++) {
      if (compare ? compare(arr[i], arr[j]) : arr[j] > arr[i]) {
        [arr[i], arr[j]] = [arr[j], arr[i]];
      }
    }
  }

  return arr;
}
