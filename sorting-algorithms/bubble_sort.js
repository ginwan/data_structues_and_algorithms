/** Bubble Sort */

//** Problem: Given an array of integers, sort the array */

const bubbleSort = (arr) => {
  let swappe;
  do {
    swappe = false;
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
        swappe = true;
      }
    }
  } while (swappe);
  return arr;
};

const arr = [8, 20, 2, 4, -6];
bubbleSort(arr);
console.log("🚀 ~ arr:", arr);

//** Big-O = O(n^2)  => Quadratic */
