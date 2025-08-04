// Implementation of topological sorting in JavaScript with convertion of an edge list to adjacency list (more accurately a node map in this example)

class Node {
  constructor(val) {
    this.val = val;
    this.children = [];
  }
}
const input = [
  ["ClassD", "ClassJ"],
  ["ClassA", "ClassC"],
  ["ClassA", "ClassD"],
  ["ClassB", "ClassK"],
  ["ClassJ", "ClassK"],
  ["ClassC", "ClassJ"],
];

const topologicalSort = (input) => {
  const adjacencyList = input.reduce((list, edge) => {
    const [from, to] = edge;

    if (!list[from]) list[from] = new Node(from);
    if (!list[to]) list[to] = new Node(to);
    list[from].children.push(list[to]);

    return list;
  }, {});

  const visited = new Set();
  const sorted = [];

  const dfs = (node) => {
    if (visited.has(node)) return;

    visited.add(node);
    const children = node.children;

    for (const child of children) {
      dfs(child);
    }

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
