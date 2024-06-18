# @algoGraph/algorithm

`@algoGraph/algorithm` 是一个用于算法可视化和教学的库，支持多种常见算法的实现和可视化功能。该库设计用于集成到 `algoGraph` 项目中，提供简单易用的接口来调用和展示各种算法。

## 特性

- 支持多种常见算法，包括排序、图算法、动态规划等。
- 提供可视化接口，方便集成到前端应用中。
- 高性能算法实现，适用于教育和教学用途。

## 安装

使用 npm 或 yarn 安装：

```bash
npm install @algoGraph/algorithm
```
或者
```bash
yarn add @algoGraph/algorithm
```

## 使用方法
### 引入库
在你的 JavaScript 或 TypeScript 文件中引入算法库：

```typescript
import { bubbleSort, quickSort, dijkstra } from '@algoGraph/algorithm';
```

### 示例：冒泡排序
以下是使用 bubbleSort 函数对一个数组进行排序的示例：

```javascript
import { bubbleSort } from '@algoGraph/algorithm';

const array = [64, 34, 25, 12, 22, 11, 90];
const sortedArray = bubbleSort(array);

console.log('Sorted Array:', sortedArray);
```

### 示例：快速排序
使用 quickSort 函数进行快速排序：
```javascript
import { quickSort } from '@algoGraph/algorithm';

const array = [64, 34, 25, 12, 22, 11, 90];
const sortedArray = quickSort(array);

console.log('Sorted Array:', sortedArray);
```

### 示例：Dijkstra 算法
使用 dijkstra 函数进行最短路径计算：

```javascript
import { dijkstra } from '@algoGraph/algorithm';

const graph = {
  A: { B: 1, C: 4 },
  B: { A: 1, C: 2, D: 5 },
  C: { A: 4, B: 2, D: 1 },
  D: { B: 5, C: 1 }
};

const startNode = 'A';
const distances = dijkstra(graph, startNode);

console.log('Shortest distances from A:', distances);
```

## 支持的算法
### 排序算法
- 冒泡排序（Bubble Sort）
- 快速排序（Quick Sort）
- 插入排序（Insertion Sort）
- 选择排序（Selection Sort）
- 归并排序（Merge Sort）
- 图算法

### Dijkstra 算法
- 深度优先搜索（DFS）
- 广度优先搜索（BFS）
- 最小生成树（Kruskal 和 Prim 算法）
- 动态规划
- 背包问题
- 最长公共子序列（LCS）
- 硬币找零问题
