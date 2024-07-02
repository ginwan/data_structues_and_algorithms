/** Linear Search */

//** Problem: Given an array of "n" elements and a target element "t", find the index of "t" in the array. Return -1 if the target element is not found. */

const linearSearch = (n, t) => {
  for (let index = 0; index < n.length; index++) {
    if (n[index] === t) {
      return index;
    }
  }
  return -1;
};

console.log(linearSearch([-5, 2, 10, 4, 6], 10)); // 2
console.log(linearSearch([-5, 2, 10, 4, 6], 6)); // 4
console.log(linearSearch([-5, 2, 10, 4, 6], 1)); // -1

//** Big-O = O(n) */
