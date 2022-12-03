// DESCRIPTION:
// Count the number of divisors of a positive integer n.

// Random tests go up to n = 500000.

// Examples (input --> output)
// 4 --> 3 (1, 2, 4)
// 5 --> 2 (1, 5)
// 12 --> 6 (1, 2, 3, 4, 6, 12)
// 30 --> 8 (1, 2, 3, 5, 6, 10, 15, 30)
// Note you should only return a number, the count of divisors. The numbers between parentheses are shown only for you to see which numbers are counted in each case.

// Question:
function getDivisorsCnt(n) {
  // todo
}
// Solution:
function getDivisorsCnt(n) {
  // create empty array for finding the length of the array.
  let divisor = [];
  for (let i = 1; i <= n; i++) {
    //     check if the number is divided by 0 or not.
    //     If the result will be 0 then that index will be the divisor for that number
    if (n % i === 0) {
      divisor.push(i);
    }
  }

  //   return the length of the array.
  return divisor.length;
}
