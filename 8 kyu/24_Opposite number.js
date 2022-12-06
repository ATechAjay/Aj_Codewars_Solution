// DESCRIPTION:
// Very simple, given an integer or a floating-point number, find its opposite.

// Examples:

// 1: -1
// 14: -14
// -34: 34

// Question:
function opposite(number) {
  //your code here

  if (number <= 0) console.log(Math.abs(number));
  else console.log(-number);
  // the absolute value of -5 is the same as the absolute value of 5
  return number <= 0 ? Math.abs(number) : -number;
}
opposite(-5);
opposite(5);
