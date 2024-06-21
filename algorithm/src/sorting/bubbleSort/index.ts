import { CompareFunction } from '../../types';

/**
 * https://en.wikipedia.org/wiki/Bubble_sort
 * 重复地遍历要排序的列表，比较相邻的元素并交换它们的位置，以确保每次遍历后最大的元素逐渐“冒泡”到列表的末尾
 *
 * @param arr
 * @param compare
 */
export function bubbleSort<T>(arr: T[], compare?: CompareFunction<T>): T[] {
  const len = arr.length;
  let swapped: boolean;

  for (let i = 0; i < len - 1; i++) {
    swapped = false;
    for (let j = 0; j < len - 1 - i; j++) {
      // 比较相邻的两个元素，默认 如果前者比后者大，则交换它们
      if (compare ? compare(arr[j], arr[j + 1]) : arr[j] > arr[j + 1]) {
        // swap
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        swapped = true;
      }
    }

    // 如果没有发生交换，说明数组已经有序，可以提前结束排序
    if (!swapped) {
      break;
    }
  }

  return arr;
}
