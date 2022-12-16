// There is an array with some numbers. All numbers are equal except for one. Try to find it!

// findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
// findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55
// It’s guaranteed that array contains at least 3 numbers.

// The tests contain some very huge arrays, so think about performance.

// This is the first kata in series:

// Find the unique number (this kata)
// Find the unique string
// Find The Unique


function findUniq(arr) {
  //   1. First check the array into ascending order.
  const sorted = arr.sort((a, b) => a - b);

  //   2. Check if 1st and 2nd array items are same?
  //   If both are same then get the last item as an output.
  //   Otherwise get the first item as an output.
  if (sorted[0] === sorted[1]) return sorted.pop();
  else return sorted[0];
}
