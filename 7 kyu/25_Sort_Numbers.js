// Finish the solution so that it sorts the passed in array of numbers.

// If the function passes in an empty array or null/nil value then it should return an empty array.

// For example:

// solution([1, 2, 10, 50, 5]); // should return [1,2,5,10,50]
// solution(null); // should return []

// function solution(nums) {
//   if (!nums) return [];
//   else return nums.sort((a, b) => a - b);
// }

function solution(nums) {
  return nums ? nums.sort((a, b) => a - b) : [];
}

// const test = solution([1, 2, 3, 10, 5]); //, [1,2,3,5,10])
// const test = solution(null); //, [])
// const test = solution([]); //, [])
// const test = solution([20, 2, 10]); //, [2,10,20])
const test = solution([2, 20, 10]); //, [2,10,20])

console.log(test);
