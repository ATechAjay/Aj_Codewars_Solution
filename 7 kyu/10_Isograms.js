// An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

// Example: (Input --> Output)

// "Dermatoglyphics" --> true "aba" --> false "moOse" --> false (ignore letter case)

// isIsogram "Dermatoglyphics" = true
// isIsogram "moose" = false
// isIsogram "aba" = false

// Question:

// function isIsogram(str) {
//   //...
// }
// Solution:
function isIsogram(str) {
  //   1. Convert string to array using split method.
  const strArr = str.toLowerCase().split("");
  //   console.log(strArr.length);
  //   2. strArr.length -> Returns the length of the array(Number type).

  const setArr = new Set(strArr);
  //   console.log(setArr.size);
  //   2. strArr.size -> Returns the (size)length of the Set array(Number type).
  //   3. Check if both legngth is same? Return 'true'(Isogram) : 'false'(Non-isogram)
  if (str === "") return true;
  else if (strArr.length === setArr.size) return true;
  else return false;
}

///////////////////////////////////////////////////
// function isIsogram(str) {
//   return new Set(str.toUpperCase()).size == str.length;
// }
