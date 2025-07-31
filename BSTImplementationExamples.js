function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

// Best alternative time complexity O(n), space complecity O(h) for the recursive stack
function isValidBST(root) {
  const helper = (node, low, high) => {
    if (!node) return true;
    // console.log(`node: ${node.val}, low: ${low}, high: ${high}`);
    if (node.val <= low || node.val >= high) return false;
    const isLeftTreeValid = helper(node.left, low, node.val);
    const isRightTreeValid = helper(node.right, node.val, high);
    return isLeftTreeValid && isRightTreeValid;
  };

  return helper(root, -Infinity, Infinity);
}

// Better alternative
// function isValidBST(root) {
//   if (!root.left && !root.right) return;

//   let prev = -Infinity;
//   let isValid = true;

//   function inOrder(node) {
//     if (!node || !isValid) return;

//     inOrder(node.left);

//     if (prev <= node.val) {
//       isValid = false;
//       return;
//     }

//     prev = node.val;

//     inOrder(node.right);
//   }

//   inOrder(root);
//   return isValid;
// }

// Alternative solution
function kthSmallest(root, k) {
  let count = 0;
  let result = null;

  const helper = (node) => {
    if (!node) return;
    helper(node.left);

    count++;

    if (count === k) {
      result = node.val;
      return;
    }

    helper(node.right);
  };

  helper(root);
  return result;
}

// Initial solution
// function isValidBST(root) {
//   let visited = [];

//   function getValues(root) {
//     if (root) {
//       getValues(root.left);
//       visited.push(root.val);
//       getValues(root.right);
//     }
//   }

//   getValues(root);

//   for (let i = 0; i < visited.length - 1; i++) {
//     if (visited[i] >= visited[i + 1]) return false;
//   }

//   return true;
// }

// test outputs
// const root = new TreeNode(5);
// root.left = new TreeNode(3);
// root.right = new TreeNode(7);
// root.left.left = new TreeNode(2);
// root.left.right = new TreeNode(4);
// root.right.left = new TreeNode(6);
// root.right.right = new TreeNode(8);
// const result = isValidBST(root);
// console.log(result);

// Find kth smallest number in a tree

// Initial solution
// function kthSmallest(root, k) {
//   const visited = [];

//   const helper = (node) => {
//     if (visited.length === k) return;

//     if (node) {
//       helper(node.left);
//       if (visited.length < k) {
//         visited.push(node.val);
//       }
//       helper(node.right);
//     }
//   };

//   helper(root);
//   return visited.pop();
// }

// test output
// const root = new TreeNode(
//   5,
//   new TreeNode(3, new TreeNode(2, new TreeNode(1)), new TreeNode(4)),
//   new TreeNode(6)
// );
// const root = new TreeNode(5, new TreeNode(3, new TreeNode(2, new TreeNode(1))));
// const root = new TreeNode(5);

// The Kth smallest element in this BST
// const k = 3;
// const result = kthSmallest(root, k);
// console.log(result);
