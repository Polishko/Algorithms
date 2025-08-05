// Cycle detection implementation in JavaScript

class Node {
  constructor(val) {
    this.val = val;
    this.children = [];
  }
}

const input = [
  ["ClassC", "ClassB"],
  ["ClassB", "ClassA"],
  ["ClassD", "ClassJ"],
  ["ClassA", "ClassC"],
  ["ClassA", "ClassD"],
  ["ClassB", "ClassK"],
  ["ClassJ", "ClassK"],
  ["ClassC", "ClassJ"],
];

const topologicalSort = (input) => {
  const adjacencyList = input.reduce((nodeMap, edge) => {
    const [from, to] = edge;

    if (!nodeMap[from]) nodeMap[from] = new Node(from);
    if (!nodeMap[to]) nodeMap[to] = new Node(to);
    nodeMap[from].children.push(nodeMap[to]);

    return nodeMap;
  }, {});

  const visited = new Set();
  const sorted = [];

  const dfs = (node, ancestors = new Set()) => {
    if (visited.has(node)) return;

    visited.add(node);
    ancestors.add(node);

    const children = node.children;
    for (const child of children) {
      if (ancestors.has(child)) {
        throw new Error(`Cycle detected at ${child.val}`);
      }
      dfs(child, ancestors);
    }

    ancestors.delete(node);
    sorted.unshift(node.val);
  };

  for (const key in adjacencyList) {
    const node = adjacencyList[key];
    dfs(node);
  }

  return sorted;
};

// test output
// const result = topologicalSort(input);
// console.log(result);
