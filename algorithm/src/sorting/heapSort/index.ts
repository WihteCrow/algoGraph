import { CompareFunction } from '../../types';

/**
 * 堆化
 * @param arr
 * @param i
 * @param len
 * @param compare
 */
export function heapify<T>(
  arr: T[],
  i: number,
  len: number,
  compare?: CompareFunction<T>
) {
  let left = 2 * i + 1;
  let right = 2 * i + 2;
  // 默认是父节点，如果需要调整，则变为子节点的下标
  let parent = i;

  if (
    left < len &&
    (compare ? compare(arr[left], arr[parent]) > 0 : arr[left] > arr[parent])
  ) {
    parent = left;
  }

  if (
    right < len &&
    (compare ? compare(arr[right], arr[parent]) > 0 : arr[right] > arr[parent])
  ) {
    parent = right;
  }

  if (parent !== i) {
    [arr[i], arr[parent]] = [arr[parent], arr[i]];
    heapify<T>(arr, parent, len, compare);
  }
}

/**
 * 创建最大堆
 * @param arr
 * @param compare
 */
export function buildHeap<T>(arr: T[], compare?: CompareFunction<T>) {
  const parent = Math.floor((arr.length - 1) / 2);
  const len = arr.length;
  for (let i = parent; i >= 0; i--) {
    heapify<T>(arr, i, len, compare);
  }
}

/**
 * 堆排序
 * @param arr
 * @param compare
 */
export function heapSort<T>(arr: T[], compare?: CompareFunction<T>) {
  // 构建最大堆
  buildHeap(arr, compare);

  // 将堆顶元素 与堆尾元素交换，并逐步减小堆的大小进行堆调整
  for (let i = arr.length - 1; i >= 0; i--) {
    [arr[0], arr[i]] = [arr[i], arr[0]];
    heapify<T>(arr, 0, i, compare);
  }

  return arr;
}
