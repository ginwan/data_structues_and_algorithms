/** Fibonacci Sequence */

//** Problem: Give the number "n", find the first "n" elements of the fibonacci sequence */

const fibonacci = (n) => {
  const fib = [0, 1];
  var sum = 1;
  for (let i = 2; i < n; i++) {
    fib[i] = fib[i - 1] + fib[i - 2];
    // sum the fibonacci sequence array
    sum += fib[i];
  }
  return { sequence: fib, sum: sum };
};

console.log("Fibonacci Sequence 1: ", fibonacci(2));
console.log("Fibonacci Sequence 2: ", fibonacci(3));
console.log("Fibonacci Sequence 3: ", fibonacci(7));
console.log("Fibonacci Sequence 4: ", fibonacci(5));

//** Big-O = O(n) */
