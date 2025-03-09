class Stack {
  constructor() {
    this.items = [];
  }

  // Add an element to the stack
  push(element) {
    this.items.push(element);
  }

  // Remove and return the top element from the stack
  pop() {
    if (this.isEmpty()) {
      return "Stack is empty";
    }
    return this.items.pop();
  }

  peek() { // Return the top element wihtout removing it
    if (this.isEmpty()) {
      return "Stack is empty";
    }
    return this.items[this.items.length - 1];
  }

  isEmpty() { // Check if the stack is empty
    return this.items.length === 0;
  }

  size() {
    return this.items.length; // Return the size of the stack
  }

  clear() {
    this.items = []; // Reset the stack
  }
}

// Example usage:
const stack = new Stack();
stack.push(10);
stack.push(20);
console.log(stack.peek()); // 20
console.log(stack.pop());  // 20
console.log(stack.size()); // 1
console.log(stack.isEmpty()); // false
stack.clear();
console.log(stack.isEmpty()); // true


//