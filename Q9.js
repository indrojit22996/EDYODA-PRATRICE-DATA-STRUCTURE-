class Stack {
  constructor() {
    this.items = [];
  }

  push(item) {
    this.items.push(item);
  }

  pop() {
    if (!this.isEmpty()) {
      return this.items.pop();
    }
  }

  peek() {
    if (!this.isEmpty()) {
      return this.items[this.items.length - 1];
    }
  }

  isEmpty() {
    return this.items.length === 0;
  }

  size() {
    return this.items.length;
  }
}

function reverseStack(stack) {
  const auxStack = new Stack();

  while (!stack.isEmpty()) {
    const item = stack.pop();
    auxStack.push(item);
  }

  while (!auxStack.isEmpty()) {
    const item = auxStack.pop();
    stack.push(item);
  }
}

// Example usage:
const originalStack = new Stack();
originalStack.push(1);
originalStack.push(2);
originalStack.push(3);
originalStack.push(4);

console.log("Original Stack:");
console.log(originalStack.items);

reverseStack(originalStack);

console.log("Reversed Stack:");
console.log(originalStack.items);
