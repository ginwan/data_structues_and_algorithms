/** Insertion Sort */

//** Problem: Given an array of integers, sort the array */

const insertionSort = (arr) => {
  for (let i = 1; i < arr.length; i++) {
    let numberToInsert = arr[i];
    // sort part must be in the left side of the array
    let j = i - 1;
    // logic to itrate in the sort part of array
    while (j >= 0 && arr[j] > numberToInsert) {
      arr[j + 1] = arr[j]; // move the greater number to the right side by one step
      j = j - 1;
    }
    arr[j + 1] = numberToInsert;
  }
};

const arr = [8, 20, 2, 4, -6];
insertionSort(arr);
console.log("🚀 ~ arr:", arr);

//** Big-O = O(n^2)  => Quadratic */
