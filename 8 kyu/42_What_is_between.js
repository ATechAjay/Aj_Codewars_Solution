// Complete the function that takes two integers (a, b, where a < b)
// Return an array of all integers between the input parameters, including them.

// a = 1
// b = 4
// --> [1, 2, 3, 4]

function between(a, b) {
  // Put the starting value inside the array.
  let result = [a];

  // Looping from the value of "a" (excluding) till one less than the value of "b"
  for (let i = a; a < b; a++) {
    // Push the value by adding 1 to the value of "a" into the existing array.
    result.push(a + 1);
  }

  // Return the result
  return result;
}
between(1, 4); // [1, 2, 3, 4]
between(-2, 2); // [-2, -1, 0, 1, 2]
