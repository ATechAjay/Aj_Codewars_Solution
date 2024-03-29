// Implement a function that accepts 3 integer values a, b, c. The function should return true if a triangle can be built with the sides of given length and false in any other case.

// (In this case, all triangles must have surface greater than 0 to be accepted).

// Examples:

// Input -> Output
// 1,2,2 -> true
// 4,2,3 -> true
// 2,2,2 -> true
// 1,2,3 -> false
// -5,1,3 -> false
// 0,2,3 -> false
// 1,2,9 -> false

function isTriangle(a, b, c) {
  const arr = [a, b, c];
  //   console.log(arr);

  const sortedArr = arr.sort((x, y) => x - y);
  //   console.log(sortedArr);

  const [firstNum, secondNum, greaterNum] = sortedArr;
  //   console.log(firstNum, secondNum);

  if (firstNum + secondNum > greaterNum) {
    return true;
  } else return false;
}

isTriangle(1, 2, 2); //, true);
isTriangle(7, 3, 2); //, false);

// 1. Sort the three lengths in ascending order.
// 2. Compare the sum of the two shortest lengths to the length of the longest length.
// 3. If the sum of the two shortest lengths is greater than the length of the longest length, then the three lengths can form a triangle.
// 4. If the sum of the two shortest lengths is not greater than the length of the longest length, then the three lengths cannot form a triangle.
