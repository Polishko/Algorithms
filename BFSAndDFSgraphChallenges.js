// 1. Find the number of islands where 1 represents land and 0 represents water

// Alternative
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
