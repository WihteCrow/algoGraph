# @algoGraph/algorithm

`@algoGraph/algorithm` is a library designed for algorithm visualization and teaching, supporting the implementation and visualization of various common algorithms. This library is designed to integrate into the `algoGraph` project, providing a simple and easy-to-use interface to invoke and display various algorithms.

## Features

- Supports various common algorithms, including sorting, graph algorithms, dynamic programming, etc.
- Provides visualization interfaces, making it easy to integrate into front-end applications.
- High-performance algorithm implementations, suitable for educational and teaching purposes.

## Installation

Install using npm or yarn:

```bash
npm install @algoGraph/algorithm
```
or
```bash
yarn add @algoGraph/algorithm
```

## Usage
### Importing the Library
Import the algorithm library in your JavaScript or TypeScript file:

```typescript
import { bubbleSort, quickSort, dijkstra } from '@algoGraph/algorithm';
```

### Example: Bubble Sort
The following is an example of using the bubbleSort function to sort an array:

```javascript
import { bubbleSort } from '@algoGraph/algorithm';

const array = [64, 34, 25, 12, 22, 11, 90];
const sortedArray = bubbleSort(array);

console.log('Sorted Array:', sortedArray);
```

### Example: Quick Sort
Using the quickSort function to perform quick sort:
```javascript
import { quickSort } from '@algoGraph/algorithm';

const array = [64, 34, 25, 12, 22, 11, 90];
const sortedArray = quickSort(array);

console.log('Sorted Array:', sortedArray);
```

### Example: Dijkstra's Algorithm
Using the dijkstra function to compute the shortest path:

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

## Supported Algorithms
### Sorting Algorithms
- Bubble Sort
- Quick Sort
- Insertion Sort
- Selection Sort
- Merge Sort
- Graph Algorithms

### Dijkstra's Algorithm
- Depth-First Search (DFS)
- Breadth-First Search (BFS)
- Minimum Spanning Tree (Kruskal and Prim's Algorithm)
- Dynamic Programming
- Knapsack Problem
- Longest Common Subsequence (LCS)
- Coin Change Problem
