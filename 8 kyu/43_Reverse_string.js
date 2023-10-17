// Complete the solution so that it reverses the string passed into it.

// 'world'  =>  'dlrow'
// 'word'   =>  'drow'

function solution(str) {
  // 1. Split the string into an array.
  // 2. Reverse the array items.
  // 3. Join the array items.
  return str.split("").reverse().join("");
}

const result = solution("world");
console.log(result); // dlrow
