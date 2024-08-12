/** Node: node for a singly linked list. */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/** LinkedList: chained together nodes. */

class LinkedList {
  constructor(vals = []) {
    this.head = null;
    this.tail = null;
    this.length = 0;

    for (let val of vals) this.push(val);
  }
  
  /** push(val): add new value to end of list. */

  push(val) {
   let newNode = new Node(val)
   if(!this.head){
    this.head = newNode;
    this.tail = this.head;
   }
   else {
    this.tail.next = newNode;
    this.tail = newNode;
   }
   this.length +=1; 

  }

  /** unshift(val): add new value to start of list. */

  unshift(val) {
    let newNode = new Node(val);
    if(!this.head){
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length +-1
  }

  /** pop(): return & remove last item. */

  pop() {
    return this.removeAt(this.length -1)


  }

  /** shift(): return & remove first item. */

  shift() {
    return this.removeAt(0)

  }

  /** get_(idx): get current node at idx. */

  get_(idx) {
   
      let current = this.head
      let count = 0 
      while (current !== null && count!= idx){
        count +=1
        current = current.next
      }
      return current 
    }
  }

  getAt(idx){ 
    if(idx >= this.length || idx < 0) {
    return new Error("Invalid index.");      
    } else {
      return this.get_(idx).val
    }
}

  /** setAt(idx, val): set val at idx to val */

  setAt(idx, val) {
    if(idx >= this.length || idx < 0) {
      return new Error("Invalid index.");
    } else   {
    let current = this.get_(idx);
    current.val = val;
  }
}

  /** insertAt(idx, val): add node w/val before idx. */

  insertAt(idx, val) {
    if (idx > this.length || idx < 0) {
      throw new Error("Invalid index.");
    } else if (idx === 0){ 
      return this.unshift(val);
    } else if (idx === this.length){ 
      return this.push(val);
    }
      else{
      let newNode = new Node(val);
      let prev = this.get_(idx - 1);
      newNode.next = prev.next;
      prev.next = newNode;      
     this.length += 1
    }
  }

  /** removeAt(idx): return & remove item at idx, */

  removeAt(idx) {
    if (idx > this.length || idx < 0) {
      throw new Error("Invalid index.");
    }
    if(idx === 0){
      let val = this.head.val
      this.head = this.head.next
      this.length -=1
      return val 
    }
    else {
      let current = this.get_(idx);
      let prev = this.get_(idx-1);
      prev.next = current.next; 
      return current.val
    }
  }

  /** average(): return an average of all values in the list */

  average() {
  if(this.length === 0) {return 0}
  let total = 0
  let current = this.head
  while (current){
    total += current.va; 
    current = current.next; 
  }
  return total/this.length
} 


module.exports = LinkedList;
