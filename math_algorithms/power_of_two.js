/** Power of two */

//** Problem: Give a positive integer "n", determine if the number is a power of 2 or not */

const isPowerOfTwo = (n) => {
  if (n < 1) {
    return false;
  }

  //** Big-O = O(1) */
  return (n & (n - 1)) === 0;

  //** Big-O = O(log n)  */
  //   while (n > 1) {
  //     if (n % 2 !== 0) {
  //       return false;
  //     }
  //     n = n / 2;
  //   }
  //   return true;
};

console.log(isPowerOfTwo(1)); // Output: true
console.log(isPowerOfTwo(2)); // Output: true
console.log(isPowerOfTwo(5)); // Output: false
