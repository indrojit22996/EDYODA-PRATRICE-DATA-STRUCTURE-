function findPairsWithSum(arr, targetSum) {
  const pairs = [];

  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === targetSum) {
        pairs.push([arr[i], arr[j]]);
      }
    }
  }

  return pairs;
}

const integerArray = [2, 4, 3, 6, 7, 1];
const target = 8;
const result = findPairsWithSum(integerArray, target);

console.log("Pairs with sum", target, "are:", result);
