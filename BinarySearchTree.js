// Binary Search Tree Implementation in JavaScript

class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  print() {
    return this._print(this.root);
  }

  _print(node) {
    if (node === null) return;
    this._print(node.left);
    console.log(node.val);
    this._print(node.right);
  }

  insert(value) {
    const newNode = new TreeNode(value);

    if (!this.root) {
      this.root = newNode;
      return;
    }

    if (value === this.root.val) return;

    let current = this.root;
    while (current) {
      if (value < current.val) {
        if (!current.left) {
          current.left = newNode;
          return;
        }

        current = current.left;
      } else {
        if (!current.right) {
          current.right = newNode;
          return;
        }

        current = current.right;
      }
    }
  }

  search(value) {
    let current = this.root;

    while (current) {
      if (current.val === value) return true;
      if (value < current.val) current = current.left;
      else current = current.right;
    }

    return false;
  }

  delete(value, node = this.root, parent = null) {
    while (node) {
      if (value > node.val) {
        parent = node;
        node = node.right;
      } else if (value < node.val) {
        parent = node;
        node = node.left;
      } else {
        if (node.left && node.right) {
          const successor = this.findMin(node.right);
          node.val = successor.val;
          this.delete(successor.val, node.right, node);
        } else if (!node.left && !node.right) {
          if (parent === null) {
            this.root = null;
          } else if (parent.right === node) {
            parent.right = null;
          } else {
            parent.left = null;
          }
        } else {
          let child = node.left ?? node.right;
          if (parent === null) {
            this.root = child;
          } else if (parent.right === node) {
            parent.right = child;
          } else {
            parent.left = child;
          }
        }

        return;
      }
    }
  }

  findMin(node) {
    while (node.left) {
      node = node.left;
    }

    return node;
  }
}

const bst = new BinarySearchTree();
bst.insert(8);

bst.insert(4);
bst.insert(12);
bst.insert(14);
bst.insert(2);
bst.insert(6);
bst.insert(3);
bst.insert(13);

// test output
// bst.print();
// console.log(bst.search(6));
// console.log(bst.search(42));

// bst.delete(4);
// bst.print();
// bst.delete(14);
// bst.print();
// bst.delete(3);
// bst.print();
