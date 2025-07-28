// Linked lists in JavaScript

// 1. Linked List implementation
class ListNode {
  constructor(value) {
    this._value = value;
    this._next = null;
  }

  get value() {
    return this._value;
  }

  set value(newValue) {
    this._value = newValue;
  }

  get next() {
    return this._next;
  }

  set next(newNode) {
    if (newNode !== null && !(newNode instanceof ListNode)) {
      throw new Error("next must be a ListNode or null");
    }
    this._next = newNode;
  }
}

class LinkedList {
  constructor(head = null) {
    this.head = head;
    this._length = 0;
    this._last = null;
  }

  get length() {
    return this._length;
  }

  set length(value) {
    this._length = value;
  }

  append(value) {
    if (!this.head) {
      const newNode = new ListNode(value);
      this.head = newNode;
      this._length++;
    } else {
      let currentNode = this.head;
      let next = currentNode.next;
      while (next !== null) {
        currentNode = currentNode.next;
        next = currentNode.next;
      }

      currentNode.next = new ListNode(value);
      this._length++;
    }
  }

  atIndex(index) {
    if (index < 0 || index >= this._length) {
      throw new Error("Index out of bounds");
    }

    let current = this.head;
    for (let i = 0; i < index; i++) {
      current = current.next;
    }

    return current;
  }

  find(value) {
    if (!this.head) {
      console.log("Empty list");
      return;
    }

    let current = this.head;
    let searchPosition = 1;

    while (current) {
      if (current.value === value) {
        return `Current node with value ${value} is found at position ${searchPosition}`;
      }

      current = current.next;
      searchPosition++;
    }

    return "Not found";
  }

  deleteAt(index) {
    if (index < 0 || index >= this._length) {
      throw new Error("Index out of bounds");
    }

    if (index === 0) {
      this.head = this.head.next;
      this._length--;
      return;
    }

    let current = this.head;

    for (let i = 1; i < this._length; i++) {
      if (i === index) {
        current.next = current.next.next;
        this._length--;
        return;
      }

      current = current.next;
    }
  }

  insertAt(index, value) {
    if (index < 0 || index > this._length) {
      throw new Error("Index out of bounds");
    }

    const node = new ListNode(value);

    if (index === 0) {
      node.next = this.head;
      this.head = node;
      this._length++;
      return;
    }

    let current = this.head;
    for (let i = 1; i < index; i++) {
      current = current.next;
    }

    node.next = current.next;
    current.next = node;
    this._length++;
  }

  logList() {
    if (this.head === null) {
      console.log("No nodes");
      return;
    }

    console.log(this.head.value);

    let current = this.head;
    let next = current.next;
    while (next) {
      console.log(next.value);
      current = next;
      next = current.next;
    }
  }
}

// test output
// const list = new LinkedList();
// list.logList();
// console.log(list.find(3));
// list.append(3);
// list.append(6);
// list.append(1);
// list.logList();
// console.log(list.length);
// console.log(list.find(3));
// console.log(list.find(6));
// console.log(list.find(7));
// list.deleteAt(1);
// list.logList();
// console.log(list.length);

// let node = new ListNode(3);
// console.log(node.value);
// node.value = 5;
// console.log(node.value);

// const list = new LinkedList();
// list.append(10);
// list.append(20);
// list.append(30);
// list.append(40);

// list.deleteAt(2);
// list.logList();

// 2. Linked list based queue implementation
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.front = null;
    this.rear = null;
  }

  enqueue(value) {
    const node = new Node(value);
    if (!this.rear) {
      this.front = this.rear = node;
    } else {
      this.rear.next = node;
      this.rear = node;
    }
  }

  dequeue() {
    if (!this.front) return null;
    const value = this.front.value;
    this.front = this.front.next;
    if (!this.front) this.rear = null;
    return value;
  }

  logQueue() {
    if (this.front === null) {
      console.log("No nodes");
      return;
    }

    console.log(this.front.value);

    let current = this.front;
    let next = current.next;
    
    while (next) {
      console.log(next.value);
      current = next;
      next = current.next;
    }
  }
}

// test output
// const queue = new Queue();
// queue.enqueue(1);
// queue.enqueue(2);
// queue.enqueue(3);
// queue.logQueue();

