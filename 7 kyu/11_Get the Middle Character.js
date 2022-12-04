// You are going to be given a word. Your job is to return the middle character of the word. If the word's length is odd, return the middle character. If the word's length is even, return the middle 2 characters.

// #Examples:

// Kata.getMiddle("test") should return "es"

// Kata.getMiddle("testing") should return "t"

// Kata.getMiddle("middle") should return "dd"

// Kata.getMiddle("A") should return "A"
// #Input

// A word (string) of length 0 < str < 1000 (In javascript you may get slightly more than 1000 in some test cases due to an error in the test cases). You do not need to test for this. This is only here to tell you that you do not need to worry about your solution timing out.

// #Output

// The middle character(s) of the word represented as a string.

// Question:
// function getMiddle(s) {
//   //Code goes here!
// }

// Solution:
function getMiddle(s) {
  //Code goes here!

  const strLength = s.length;
  //   1. Find the length of the string.
  //   2. Check if the length of string even or odd.
  if (strLength % 2 === 0) {
    //     If the length is even.
    //     Find the middle number and add 1 more into it.
    //     Find the middle number and subtract from it.
    //     Eg: strLength = 6(middle)
    //     oneMoreMiddle => 6/2 +1 -- 4(for last 'd')
    //     oneLessMiddle => 6/2 -1 -- 2(for first 'd')
    const oneMoreMiddle = strLength / 2 + 1;
    const oneLessMiddle = strLength / 2 - 1;
    //     Take a slice between both of them.
    return s.slice(oneLessMiddle, oneMoreMiddle);
  } else {
    //     If the length of string is odd.
    //     Find the middle, dividing by 2.
    //     Eg: 11;(Need -> 5)
    //     11/2 === 5.5(use Math.floor()) to round down(5).
    //     Remember floor method is 0 based.
    const middle = Math.floor(strLength / 2);
    return s[middle];
  }
}
