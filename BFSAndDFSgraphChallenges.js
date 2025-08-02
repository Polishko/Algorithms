// 1. Find the number of islands where 1 represents land and 0 represents water

// Alternative
// TC & SC -> O(n × m)
const numberOfIslands = (grid) => {
  const visited = Array(grid.length)
    .fill()
    .map((_, i) => Array(i.length).fill(false));
  let islands = 0;

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (grid[i][j] === "1" && !visited[i][j]) {
        islands++;
        traverse(i, j, grid, visited);
      }
    }
  }

  return islands;
};

const traverse = (r, c, grid, visited) => {
  if (r < 0 || r > grid.length - 1 || c < 0 || c > grid[0].length - 1) return;
  if (grid[r][c] === "0" || visited[r][c]) return;

  visited[r][c] = true;

  traverse(r, c + 1, grid, visited);
  traverse(r + 1, c, grid, visited);
  traverse(r, c - 1, grid, visited);
  traverse(r - 1, c, grid, visited);
};

// Initial solution
// const numberOfIslands = (grid) => {
//   const visited = new Set();
//   let islands = 0;

//   const traverse = (r, c) => {
//     if (r < 0 || r > grid.length - 1 || c < 0 || c > grid[0].length - 1) return;
//     if (grid[r][c] === "0" || visited.has(`${r},${c}`)) return;

//     visited.add(`${r},${c}`);

//     traverse(r, c + 1);
//     traverse(r + 1, c);
//     traverse(r, c - 1);
//     traverse(r - 1, c);
//   };

//   for (let i = 0; i < grid.length; i++) {
//     for (let j = 0; j < grid[0].length; j++) {
//       if (grid[i][j] === "1" && !visited.has(`${i},${j}`)) {
//         islands++;
//         traverse(i, j);
//       }
//     }
//   }

//   return islands;
// };

// test output
// const grid = [
//   ["1", "1", "1", "1", "0"],
//   ["1", "1", "0", "1", "0"],
//   ["1", "1", "0", "0", "0"],
//   ["0", "0", "0", "0", "0"],
// ];
// const grid = [
//   ["0", "1", "0"],
//   ["0", "0", "0"],
//   ["0", "1", "0"],
// ];
// console.log(numberOfIslands(grid));

// 2. Deep copy of a graph (connected with uniqie values)
// TC: O(N + E)
// SC: O(N)
class Node {
  constructor(val, neighbors = []) {
    this.val = val;
    this.neighbors = neighbors;
  }
}

function cloneGraph(node) {
  if (!node) return;

  const copies = new Map();

  const clone = new Node(node.val);
  const queue = [node];

  copies.set(node, clone);

  while (queue.length) {
    const current = queue.shift();
    const neighbors = current.neighbors;

    neighbors.forEach((neighbor) => {
      if (!copies.has(neighbor)) {
        copies.set(neighbor, new Node(neighbor.val));
        queue.push(neighbor);
      }

      copies.get(current).neighbors.push(copies.get(neighbor));
    });
  }

  return clone;
}

const node1 = new Node(1);
const node2 = new Node(2);
const node3 = new Node(3);
const node4 = new Node(4);

node1.neighbors = [node2, node4];
node2.neighbors = [node1, node3];
node3.neighbors = [node2, node4];
node4.neighbors = [node1, node3];

// const clonedGraph = cloneGraph(node1);
// cloneGraph(node1);
// console.log(clonedGraph);

// const copy1 = cloneGraph(node1);
// console.log(copy1.neighbors.map((node) => node.val));
// const [copy2, copy3] = [...copy1.neighbors];
// console.log(copy2.neighbors.map((node) => node.val));
// console.log(copy3.neighbors.map((node) => node.val));
// console.log(copy1.neighbors[1].neighbors.map((node) => node.val));

// DFS version
// TC & SC: O(N + E)
function cloneGraph(node) {
  if (!node) return null;

  const copies = new Map();

  function dfs(node) {
    if (copies.has(node)) return copies.get(node);

    const clone = new Node(node.val);
    copies.set(node, clone);

    for (const neighbor of node.neighbors) {
      clone.neighbors.push(dfs(neighbor));
    }

    return clone;
  }

  return dfs(node);
}

