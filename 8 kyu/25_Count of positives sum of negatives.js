// Given an array of integers.

// Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. 0 is neither positive nor negative.

// If the input is an empty array or is null, return an empty array.

// Example
// For input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], you should return [10, -65].
function countPositivesSumNegatives(input) {
  //   1. Let's create 2 empty variables for count and sum and assigned to them.
  let sum = 0;
  let count = 0;
  // 2. Check if the input array is empty or has null value, if yes then return an empty array else do something.
  if (input === null || input.length === 0) return [];
  else {
    //  3. Iterate all items of the array.
    input.forEach((item) => {
      //  4. Check if the item > 0 then increase the count variable by one.
      if (item > 0) {
        count++;
        //  5. Check if the item < 0 then add the sum variable with each other.
      } else if (item < 0) {
        sum += item;
        //   6. Else return an empty array.
      } else return [];
    });
  }
  //   7. Now create an array using Array constructor and pass both values of count and sum variables to it.
  const resultantArr = Array(count, sum);
  //   8. Finally, return this array as an output.
  return resultantArr;
}
