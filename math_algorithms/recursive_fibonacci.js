/** Recursive Fibonacci Sequence */

//** Problem: Give the number "n", find the "n th" elements of the fibonacci sequence */

const recursiveFibonacci = (n) => {
  if (n < 2) {
    return n;
  }
  console.log(
    "🚀 ~ recursiveFibonacci ~ recursiveFibonacci(n - 1):",
    recursiveFibonacci(n - 1)
  );
  return recursiveFibonacci(n - 1) + recursiveFibonacci(n - 2);
};

console.log(recursiveFibonacci(0)); // 0
console.log(recursiveFibonacci(1)); // 1
console.log(recursiveFibonacci(6)); // 8

//**Big-O = O(n) */
