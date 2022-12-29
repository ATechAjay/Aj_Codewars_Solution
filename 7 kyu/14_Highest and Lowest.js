// In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.

// Examples
// highAndLow("1 2 3 4 5");  // return "5 1"
// highAndLow("1 2 -3 4 5"); // return "5 -3"
// highAndLow("1 9 3 4 -5"); // return "9 -5"
// Notes
// All numbers are valid Int32, no need to validate them.
// There will always be at least one number in the input string.
// Output string must be two numbers separated by a single space, and highest number is first.

function highAndLow(numbers) {
  //   1. Split the string separated by spaces into an array.
  //   2. Sorted the array in descending order using sort()
  const sortedArr = numbers.split(" ").sort((a, b) => b - a);
  //   3. Find the first item of the array using slice()
  const firstNum = sortedArr.slice(0, 1);
  //   4. Find the last item of the array using splice()
  const lastNum = sortedArr.slice(-1);
  //   5. Concatenate both(first and last) item with spaces.
  return firstNum + " " + lastNum;
}
