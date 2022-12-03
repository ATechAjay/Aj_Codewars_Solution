// DESCRIPTION:
// Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.

// Return your answer as a number.

// Question
function sumMix(x) {}

// Solution
function sumMix(x) {
  //   Initial value will be 0 always.
  //   reduce method returns a single value as an output.
  //   acc = accumulator
  //   item is the current elements of the array.
  //   I've used Number() constructor to convert a value from string to a "number" data type.

  const total = x.reduce(function (acc, item) {
    return acc + Number(item);
  }, 0);

  return total;
}
