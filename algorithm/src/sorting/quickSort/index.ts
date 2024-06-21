import { CompareFunction } from '../../types';

/**
 *  快速排序算法
 */
export function quickSort<T>(arr: T[], compare?: CompareFunction<T>) {
  if (arr.length <= 1) {
    return arr;
  }

  const pivotIndex = Math.floor(arr.length / 2); // 选择中间元素作为基准
  const pivot = arr[pivotIndex];
  const left = [];
  const right = [];

  // 分割数组，小于基准的放在左边，大于基准的放在右边
  for (let i = 0; i < arr.length; i++) {
    if (i === pivotIndex) {
      continue; // 跳过基准元素
    }

    if (compare ? compare(arr[i], pivot) <= 0 : arr[i] < pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }

  return [...quickSort(left, compare), pivot, ...quickSort(right, compare)];
}
