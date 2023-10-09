function areBracketsBalanced(code) {
  const stack = [];
  const brackets = {
    "(": ")",
    "{": "}",
    "[": "]",
  };

  for (let i = 0; i < code.length; i++) {
    const char = code[i];

    if (char in brackets) {
      stack.push(char);
    } else if (char === ")" || char === "}" || char === "]") {
      if (stack.length === 0) {
        return false; // Closing bracket without a corresponding opening bracket
      }

      const top = stack.pop();
      if (brackets[top] !== char) {
        return false; // Mismatched brackets
      }
    }
  }

  // Check if there are any unclosed opening brackets left
  return stack.length === 0;
}

// Example usage:
const codeSnippet = "function foo() { if (true) { return [1, 2]; } }";
if (areBracketsBalanced(codeSnippet)) {
  console.log("All brackets are balanced.");
} else {
  console.log("Brackets are not balanced.");
}
