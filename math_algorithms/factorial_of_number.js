/** Factorial of number */

//** Problem: Given an integer "n", find the factorial of that integer */

const factorial = (n) => {
  let result = 1;
  for (let i = 2; i <= n; i++) {
    result = result * i;
  }
  return result;
};

console.log(factorial(0)); // Output: 1
console.log(factorial(1)); // Output: 1
console.log(factorial(5)); // Output: 120

//** Big-O = O(n) */
