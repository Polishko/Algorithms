class BinaryTreeNode {
  constructor(value, left, right) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

const node = new BinaryTreeNode("a");
node.left = new BinaryTreeNode("b");
node.right = new BinaryTreeNode("c");
node.left.left = new BinaryTreeNode("d");
node.left.right = new BinaryTreeNode("e");
node.right.right = "f";

// 1. DFS, find if node in tree
// best alternative
function depthFirstSearch(root, target) {
  if (!root) return false;

  if (root.value === target) return true;

  return (
    depthFirstSearch(root.left, target) || depthFirstSearch(root.right, target)
  );
}

// efficient, short circuits
// function depthFirstSearch(root, target) {
//   if (!root) return false;

//   if (root.value === target) return true;

//   if (depthFirstSearch(root.left, target)) {
//     return true;
//   } else if (depthFirstSearch(root.right, target)) {
//     return true;
//   } else {
//     return false;
//   }
// }

// least efficient
// function depthFirstSearch(root, target) {
//   if (!root) return false;

//   if (root.value === target) return true;

//   const left = depthFirstSearch(root.left, target);
//   const right = depthFirstSearch(root.right, target);

//   return left || right;
// }

// test output
// console.log(depthFirstSearch(node, "c"));
// console.log(depthFirstSearch(null, "c"));

// 2. BFS, find if node in tree
function breathFirstSearch(node, target) {
  if (!node) return false;

  const visited = [node];

  while (visited.length > 0) {
    const current = visited.shift();

    if (current.value === target) return true;

    if (current.left) visited.push(current.left);
    if (current.right) visited.push(current.right);
  }

  return false;
}

// test output
// console.log(breathFirstSearch(node, "h"));
// console.log(breathFirstSearch(node, "c"));
// console.log(breathFirstSearch(null, "h"));

// Find tree height challenge
class TreeNode {
  constructor(val = 0, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

function getHeight(root) {
  if (!root) return -1;

  return 1 + Math.max(getHeight(root.left), getHeight(root.right));
}

// A -> h=1 + max(fn(5), fn(15))
// A -> h=1 + (1 + fn(20))
// A -> h=1 + (1 + (1 + fn(25)))
// A -> h=1 + (1 + (1 + (1 + fn(22))))
// A -> h=1 + (1 + (1 + (1 + 0))) -> 4

// test output
// const root = new TreeNode(
//   5,
//   new TreeNode(3, new TreeNode(2, new TreeNode(1)), new TreeNode(4)),
//   new TreeNode(7, new TreeNode(6), new TreeNode(8))
// );

// const result = getHeight(root);
// console.log(result);

// Zig-zag level order traversal challenge
// Common efficient solution
function zigZagTraverse(root) {
  if (!root) return [];

  const queue = [root];
  const result = [];
  let letfToRight = true;

  while (queue.length) {
    let level = [];
    const n = queue.length;

    for (let i = 0; i < n; i++) {
      const node = queue.shift();
      if (letfToRight) level.push(node.val);
      else level.unshift(node.val);

      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }

    result.push(level);
    letfToRight = !letfToRight;
  }

  return result;
}

// Test output
// const root = new TreeNode(
//   3,
//   new TreeNode(9),
//   new TreeNode(20, new TreeNode(15), new TreeNode(7))
// );

// console.log(...zigZagTraverse(root));

// Less efficient initial solution
// function zigZagTraverse(root) {
//   if (!root) return [];

//   const queue = [[root]];
//   const result = [];
//   let toggleLeftRight = "L";

//   while (queue.length > 0) {
//     const sub = queue.shift();
//     const subValues = sub.map((node) => node.val);
//     result.push(subValues);

//     let subNew = [];
//     if (toggleLeftRight === "L") {
//       for (const node of sub) {
//         if (node.left) subNew.push(node.left);
//         if (node.right) subNew.push(node.right);
//       }

//       toggleLeftRight = "R";
//     } else {
//       for (const node of sub) {
//         if (node.right) subNew.push(node.right);
//         if (node.left) subNew.push(node.left);
//       }

//       toggleLeftRight = "L";
//     }

//     if (subNew.length > 0) queue.push(subNew.reverse());
//   }

//   return result;
// }
