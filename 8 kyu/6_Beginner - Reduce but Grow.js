// DESCRIPTION:
// Given a non-empty array of integers, return the result of multiplying the values together in order. Example:

// [1, 2, 3, 4] => 1 * 2 * 3 * 4 = 24

// Question:
function grow(x) {}

// Solution: 
function grow(x) {
  const total = x.reduce(function (acc, item) {
    return acc * item;
  }, 1);
  return total;
}
