/** Recursive Binary search */

//** Problem: Given a sorted array of "n" elements and a target element "t", find the index of "t" in the array. Return -1 if the target element is not found. */

const recursiveBinarySearch = (arr, target) => {
  return binarySearch(arr, target, 0, arr.length - 1);
};

const binarySearch = (arr, target, leftIndex, rightIndex) => {
  if (leftIndex > rightIndex) {
    return -1;
  }
  let middleIndex = Math.floor((leftIndex + rightIndex) / 2);
  if (target === arr[middleIndex]) {
    return middleIndex;
  }
  if (target < arr[middleIndex]) {
    return binarySearch(arr, target, leftIndex, middleIndex - 1);
  } else {
    return binarySearch(arr, target, middleIndex + 1, rightIndex);
  }
};

console.log(recursiveBinarySearch([-5, 2, 4, 6, 10], 10)); // 4
console.log(recursiveBinarySearch([-5, 2, 4, 6, 10], 6)); // 3
console.log(recursiveBinarySearch([-5, 2, 4, 6, 10], 20)); // -1

//** Big-O = O(log n) */
