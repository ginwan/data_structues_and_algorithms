/** Recursive Factorial */

//** Problem: Given an integer "n", find the factorial of that integer */

const recursiveFactorial = (n) => {
  if (n < 2) {
    return 1;
  }
  return n * recursiveFactorial(n - 1);
};

console.log(recursiveFactorial(0)); // Output: 1
console.log(recursiveFactorial(1)); // Output: 1
console.log(recursiveFactorial(5)); // Output: 1

//** Big-O = O(n) */
