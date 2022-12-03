// DESCRIPTION:
// Complete the square sum function so that it squares each number passed into it and then sums the results together.

// For example, for [1, 2, 2] it should return 9 because 1^2 + 2^2 + 2^2 = 9.

// Question:
function squareSum(numbers) {}
// Solution:
function squareSum(numbers) {
  const sum = numbers.reduce((acc, item) => {
    return acc + item * item;
  }, 0);
  console.log(sum);
  return sum;
}
