import { CompareFunction } from '../../types';

/**
 * 归并排序算法
 * 稳定排序
 *
 * https://zh.wikipedia.org/wiki/%E5%BD%92%E5%B9%B6%E6%8E%92%E5%BA%8F
 * @param arr
 * @param compare
 *
 * 时间复杂度：0(nlogn)
 *
 * 分割：递归地把当前序列平均分割成两半。
 * 集成：在保持元素顺序的同时将上一步得到的子序列集成到一起（归并）
 */
export function mergeSort<T>(arr: T[], compare?: CompareFunction<T>): T[] {
  if (arr.length <= 1) {
    return arr;
  }

  const middle = Math.floor(arr.length / 2);
  const left = arr.slice(0, middle);
  const right = arr.slice(middle);

  return merge(mergeSort(left, compare), mergeSort(right, compare), compare);
}

export function merge<T>(
  left: T[],
  right: T[],
  compare?: CompareFunction<T>
): T[] {
  const result: T[] = [];
  let li = 0;
  let ri = 0;

  while (li < left.length && ri < right.length) {
    if (compare ? compare(left[li], right[ri]) <= 0 : left[li] <= right[ri]) {
      result.push(left[li]);
      li++;
    } else {
      result.push(right[ri]);
      ri++;
    }
  }

  return result.concat(left.slice(li)).concat(right.slice(ri));
}
