// Given an array of integers, find the one that appears an odd number of times.

// There will always be only one integer that appears an odd number of times.

// Examples
// [7] should return 7, because it occurs 1 time (which is odd).
// [0] should return 0, because it occurs 1 time (which is odd).
// [1,1,2] should return 2, because it occurs 1 time (which is odd).
// [0,1,0,1,0] should return 0, because it occurs 3 times (which is odd).
// [1,2,2,3,3,3,4,3,3,3,2,2,1] should return 4, because it appears 1 time (which is odd).

const findOdd = function (arr) {
  return arr.reduce((a, b) => a ^ b);
};

const t = findOdd([0, 1, 0, 1, 0, 1, 1, 0]);
console.log(t);
// findOdd([7]);
// findOdd([0]);
// findOdd([1, 1, 2]);

// findOdd([1, 2, 2, 3, 3, 3, 4, 3, 3, 3, 2, 2, 1]);
// const a = 5,b = 3;
// console.log(a ^ b);
// console.log(6 ^ 12);
