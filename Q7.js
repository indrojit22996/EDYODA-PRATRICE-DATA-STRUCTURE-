function prefixToInfix(prefix) {
  const stack = [];

  for (let i = prefix.length - 1; i >= 0; i--) {
    const token = prefix[i];

    if (isOperand(token)) {
      stack.push(token);
    } else if (isOperator(token)) {
      const operand1 = stack.pop();
      const operand2 = stack.pop();
      const infixExpression = `(${operand1}${token}${operand2})`;
      stack.push(infixExpression);
    }
  }

  return stack.pop();
}

function isOperand(token) {
  return /^[a-zA-Z0-9]+$/.test(token);
}

function isOperator(token) {
  return token === '+' || token === '-' || token === '*' || token === '/';
}

// Example usage:
const prefixExpression = "*+AB-CD";
const infixExpression = prefixToInfix(prefixExpression);
console.log
