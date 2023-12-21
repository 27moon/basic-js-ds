const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');
const { Node } = require('../extensions/list-tree.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {
constructor() {
  this.head = null;
  this.tail = null;
}
  getUnderlyingList() {
    return this.head;
  }

  enqueue(value) { //puts the value at the end of the queue
    const newVal = new ListNode(value);
    if (this.head === null) {
      this.head = newVal;
      this.tail = newVal;
    } else {
      this.tail.next = newVal;
      this.tail = newVal;
    }
  }


  dequeue() { //retrieves a value from the head of the queue and deletes it
    const deletedVal = this.head.value;
      this.head = this.head.next;
      return deletedVal;
}
}
module.exports = {
  Queue
};
