/** Quick Sort */

//** Problem: Given an array of integers, sort the array */

const quickSort = (arr) => {
  if (arr.length < 2) {
    return arr;
  }

  let pivot = arr[arr.length - 1];
  let left = [];
  let right = [];

  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }

  return [...quickSort(left), pivot, ...quickSort(right)];
};

const arr = [8, 20, 2, 4, -6];
console.log(quickSort(arr));

//** Worst case: Big-O = O(n^2)  => Quadratic */
//** Avg case: Big-O = O(nlogn)   */

/**I am seeking new opportunities to expand my skills and take on more challenging projects in a dynamic and innovative environment. I am eager to contribute to a team that values growth, creativity, and collaboration. */
