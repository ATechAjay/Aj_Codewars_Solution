// Convert number to reversed array of digits
// Given a random non-negative number, you have to return the digits of this number within an array in reverse order.

// Example(Input => Output):
// 35231 => [1,3,2,5,3]
// 0 => [0]

function digitize(n) {
  //   1. Convert integer into a string.
  //   2. Split it into an array.
  //   3. Reverse the array using reverse method.
  //   4.Convert each item of the array into a number type using map().
  return `${n}`
    .split("")
    .reverse()
    .map((item) => +item);
}
