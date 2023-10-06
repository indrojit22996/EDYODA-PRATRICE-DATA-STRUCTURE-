function reverseArrayInPlace(arr) {
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    const temp = arr[left];
    arr[left] = arr[right];
    arr[right] = temp;

    left++;
    right--;
  }
}

const originalArray = [1, 2, 3, 4, 5];
reverseArrayInPlace(originalArray);
console.log("Reversed Array:", originalArray);
