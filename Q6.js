function postfixToPrefix(postfix) {
  const stack = [];

  for (let i = 0; i < postfix.length; i++) {
    const token = postfix[i];

    if (isOperand(token)) {
      stack.push(token);
    } else if (isOperator(token)) {
      const operand2 = stack.pop();
      const operand1 = stack.pop();
      const prefixExpression = token + operand1 + operand2;
      stack.push(prefixExpression);
    }
  }

  return stack.pop();
}

function isOperand(token) {
  return /^[a-zA-Z0-9]+$/.test(token);
}

function isOperator(token) {
  return token === "+" || token === "-" || token === "*" || token === "/";
}

// Example usage:
const postfixExpression = "34+5*";
const prefixExpression = postfixToPrefix(postfixExpression);
console.log(`Prefix expression: ${prefixExpression}`);
