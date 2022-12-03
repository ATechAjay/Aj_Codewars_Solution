// DESCRIPTION:
// This time no story, no theory. The examples below show you how to write function accum:

// Examples:
// accum("abcd") -> "A-Bb-Ccc-Dddd"
// accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt") -> "C-Ww-Aaa-Tttt"
// The parameter of accum is a string which includes only letters from a..z and A..Z.

// Question:
function accum(s) {
  // your code
}
// Solution:
function accum(s) {
  //   1. Convert all lettes of the string to UPPER case.
  //   2. Split all letters into an array.
  //   3. Repeat all the items of the array upto index of that element.
  //   4. Repeat with concatination and then convert the repeated item into LOWER case.
  //   5. Join all array items with dashes(-)  separator.
  return s
    .toUpperCase()
    .split("")
    .map((item, index) => `${item + item.repeat(index).toLowerCase()}`)
    .join("-");
}
