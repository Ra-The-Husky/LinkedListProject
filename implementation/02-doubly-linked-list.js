// Node class is implemented for you, no need to look for bugs here!
class DoublyLinkedNode {
    constructor(val) {
        this.value = val;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    addToHead(val) {
        const newNode = new DoublyLinkedNode(val);
        newNode.next = this.head;
        if (this.head) {
            this.head.prev = newNode;
        } else {
            this.tail = newNode;
        }
        this.head = newNode;
        this.length++;

        // Write your hypothesis on the time complexity of this method here
    }

    addToTail(val) {
    const newNode = new DoublyLinkedNode(val)

    if(this.tail){
      this.tail.next = newNode;
      newNode.prev = this.tail;
    } else {
      this.head = newNode;
    }

    this.tail = newNode;
    this.length++;
    }

    removeFromHead() {
    if(!this.head) return;
    const currHead = this.head;
    this.head = currHead.next;
    if (this.head) {
      this.head.prev = null;
      //console.log("line 51", currHead.value)
    }
    this.length--;
    return currHead.value;
    // O(n)
    }

    removeFromTail() {
        const removedNode = this.tail;
        if(!this.head) return;
      if(this.length === 1){
        const removedNode = this.head;
          this.head = null;
          this.tail = null;
          this.length--;
          return removedNode;
        } else {
            const newTail = removedNode.prev;
             newTail.next = null;
             this.tail = newTail;
            }
            this.length--;
            return removedNode;

    }

    peekAtHead() {
        let currNode = this.head;
        if(this.head){
            return currNode.value;
        } else {
            return undefined;
        }
    }

    peekAtTail() {
        if(!this.head){
            return undefined;
        } else {
            return this.tail.value;
        }
        // Return value of tail node

        // Your code here

        // Write your hypothesis on the time complexity of this method here
    }
}

module.exports = {
    DoublyLinkedList,
    DoublyLinkedNode
}
