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
      if(this.length === 1){
          const currHead = this.head;
          this.head = null;
          this.length --;
          return currHead;
        } else if (this.length === 0){
            return;
        }
    let currNode = this.head;
    let otherNode = null;
    while(currNode.next){
        otherNode = currNode;
        currNode = currNode.next;
    }
    otherNode.next = null;
    this.length--;
    return currNode;
  }

  peekAtHead() {
   let currNode = this.head;
   if(this.head){
    return currNode.value;
   } else {
    return undefined;
   }
  }

  print() {
    let currNode = this.head;
    if(this.length === 0){
        return;
    } else {
        while(currNode){
            console.log(currNode.value)
            currNode = currNode.next
        }
    }
  }
}


module.exports = {
  SinglyLinkedList,
  SinglyLinkedNode,
};
