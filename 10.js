class MinStack {
  constructor() {
    this.stack = [];
    this.minStack = []; // Auxiliary stack to keep track of the minimum value
  }

  push(item) {
    this.stack.push(item);
    // Update the minimum stack if the new item is smaller or equal to the current minimum
    if (
      this.minStack.length === 0 ||
      item <= this.minStack[this.minStack.length - 1]
    ) {
      this.minStack.push(item);
    }
  }

  pop() {
    if (!this.isEmpty()) {
      const poppedItem = this.stack.pop();
      // If the popped item is the minimum, also pop from the minimum stack
      if (poppedItem === this.minStack[this.minStack.length - 1]) {
        this.minStack.pop();
      }
      return poppedItem;
    }
  }

  top() {
    if (!this.isEmpty()) {
      return this.stack[this.stack.length - 1];
    }
  }

  getMin() {
    if (!this.isEmpty()) {
      return this.minStack[this.minStack.length - 1];
    }
  }

  isEmpty() {
    return this.stack.length === 0;
  }
}

// Example usage:
const stack = new MinStack();
stack.push(3);
stack.push(5);
stack.push(2);
stack.push(1);

console.log("Minimum value in the stack: " + stack.getMin()); // Output: 1
stack.pop();
console.log("Minimum value in the stack after popping: " + stack.getMin()); // Output: 2
