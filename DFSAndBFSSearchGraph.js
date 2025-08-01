// DFS and BFS Graph Implementation in JavaScript

const adjacencyList = {
  A: ["B", "C"],
  B: ["A", "D"],
  C: ["A"],
  D: ["B"],
  E: ["F", "G"],
  F: ["E"],
  H: ["I"],
  I: ["H", "J", "K"],
  J: ["I"],
  K: ["I"],
};

// 1. DFS

// Alternative without an extra result variable
const dfs = (adjacencyList, target) => {
  const visited = new Set();

  const traverse = (vertex) => {
    if (visited.has(vertex)) return false;
    if (vertex === target) return true;

    visited.add(vertex);

    const neighbours = adjacencyList[vertex] || [];
    for (const neighbour of neighbours) {
      if (traverse(neighbour)) return true;
    }

    return false;
  };

  for (const vertex in adjacencyList) {
    if (traverse(vertex)) return true;
  }
};

// Initial solution
// const dfs = (adjacencyList, target) => {
//   const visited = new Set();
//   let result = false;

//   const traverse = (vertex) => {
//     if (vertex === target) {
//       result = true;
//       return;
//     }

//     if (visited.has(vertex)) return;

//     visited.add(vertex);

//     if (adjacencyList[vertex]) {
//       for (const child of adjacencyList[vertex]) {
//         if (result) return;
//         traverse(child);
//       }
//     }
//   };

//   for (const vertex in adjacencyList) {
//     traverse(vertex);
//   }

//   return result;
// };

// test output
// console.log(dfs(adjacencyList, "F"));

// 2. BFS

// Alternative without an inner helper function
const bfs = (adjacencyList, target) => {
  const visited = new Set();
  const queue = [];

  for (const vertex in adjacencyList) {
    if (!visited.has(vertex)) {
      queue.push(vertex);
      visited.add(vertex);
    }

    while (queue.length) {
      const current = queue.shift();

      if (current === target) return true;

      const neighbours = adjacencyList[current] || [];
      neighbours.forEach((neighbour) => {
        if (!visited.has(neighbour)) {
          queue.push(neighbour);
          visited.add(neighbour);
        }
      });
    }
  }

  return false;
};

// Initial solution
// const bfs = (adjacencyList, target) => {
//   const visited = new Set();

//   const traverse = (vertex) => {
//     const queue = [vertex];

//     while (queue.length) {
//       const current = queue.shift();

//       if (current === target) return true;
//       if (visited.has(current)) continue;

//       visited.add(current);
//       const neighbours = adjacencyList[current] || [];
//       neighbours.forEach((neighbour) => queue.push(neighbour));
//     }

//     return false;
//   };

//   for (const vertex in adjacencyList) {
//     if (traverse(vertex)) return true;
//   }

//   return false;
// };

// // test output
// console.log(bfs(adjacencyList, "O"));
// console.log(bfs(adjacencyList, "F"));
// console.log(bfs(adjacencyList, "G"));
