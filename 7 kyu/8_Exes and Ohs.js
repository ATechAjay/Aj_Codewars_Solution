// DESCRIPTION:
// Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

// Examples input/output:

// XO("ooxx") => true
// XO("xooxx") => false
// XO("ooxXm") => true
// XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
// XO("zzoo") => false

// Question:

function XO(str) {
  //code here
}
// Solution:

function XO(str) {
  //code here
  //   1. create 2 arrays for storing x and o chars.
  let xArr = [];
  let oArr = [];
  //   2. Convert all char to lowecase.
  //   3. Split all chahs of str to an array.
  //   4. filter x & o and push in theis respective arrays.
  //   5. If the length of the both array will be same then return 'true' else return 'false'

  str
    .toLowerCase()
    .split("")
    .filter((item) => {
      if (item === "x") return xArr.push(item);
      else if (item === "o") return oArr.push(item);
    });

  if (xArr.length === oArr.length) return true;
  else return false;
}
