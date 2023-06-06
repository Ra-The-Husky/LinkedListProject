// Node class is implemented for you, no need to look for bugs here!
class SinglyLinkedNode {
  constructor(val) {
    this.value = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.length = 0;
  }

  addToHead(val) {
    const newNode = new SinglyLinkedNode(val);

    if (this.head) {
      newNode.next = this.head;
      this.head = newNode;
      this.length++;
      return this;
    } else {
      this.head = newNode;
      this.length++;
      return this;
    }
    // O(1) Time complexity
  }

  addToTail(val) {
    // Add node of val to tail of linked list
    let newNode = new SinglyLinkedNode(val);

    if (!this.head) {
      this.head = newNode;
      this.length++;
      return this;
    }

    let curr = this.head;
    while (curr.next) {
      curr = curr.next;
    }
    curr.next = newNode;
    this.length++;

    return this;
    // O(1)
  }

  removeFromHead() {
    let currHead = this.head;

    if (this.head) {
      this.head = this.head.next;
      this.length--;
      return currHead;
    } else {
      return undefined;
    }
    // O(n)
  }

  removeFromTail() {
    // Remove node at tail
    if (!this.head < 1) {
        return undefined
    }
    // Write your hypothesis on the time complexity of this method here
  }

  peekAtHead() {
    // Return the value of head node
    // Your code here
    // Write your hypothesis on the time complexity of this method here
  }

  print() {
    // Print out the linked list
    // Your code here
    // Write your hypothesis on the time complexity of this method here
  }
}

module.exports = {
  SinglyLinkedList,
  SinglyLinkedNode,
};
