// 1. Create a function that takes 2 integers in form of a string as an input.

// 2. And outputs the sum (also as a string):

// "4",  "5" --> "9"
// "34", "5" --> "39"
// "", "" --> "0"
// "2", "" --> "2"
// "-5", "3" --> "-2"

// If either input is an empty string, consider it as zero.

// Inputs and the expected output will never exceed the signed 32-bit integer limit (2^31 - 1)

function sumStr(a, b) {
  // 1. Convert a string into an integer using the "+" sign and add both of them.

  // 2. And put this expression inside the template literals to return as a string.
  return `${+a + +b}`;
}

sumStr("4", "5"); //, "9"
sumStr("34", "5"); //, "39")
