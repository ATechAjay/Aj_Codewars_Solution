// ([1,2,3],          4) => [0,2]
// ([1234,5678,9012], 14690) => [1,2]
// ([2,2,3],          4) => [0,1]
// ([2,3,1],          4) => [1,2]

// 1. Write a function that takes an array of numbers and a target number.

// 2. It should find two different items in the array (numbers).

// 3. When we added that two different items together, give the target value.

// 4. The indexes of the array items should then be returned in a list

// 5. Like so: (index1, index2).
///////////////////////////////////////////////////

// About Input

// 1. The input will always be valid,numbers will be an array of length 2 or greater.

// 2. And all of the array items will be numbers.

// 3. target will always be the sum of two different array items.

function twoSum(numbers, target) {
  let ind = [];
  for (let i = 0; i < numbers.length; ) {
    if (numbers[i] + numbers[i + 1] === target) {
      ind.push(i);
      ind.push(i + 1);
    } else i++;
  }

  console.log(ind);
  return ind;
}

// ([1,2,3],          4) => [0,2]
// ([1234,5678,9012], 14690) => [1,2]
// ([2,2,3],          4) => [0,1]
// ([2,3,1],          4) => [1,2]
// [1234, 5678, 9012], target = 14690

// twoSum([1, 2, 3], 4); //[0,2]
twoSum([1234, 5678, 9012], 14690); //
// twoSum([1234, 5678, 9012], 14690);
// twoSum([2, 2, 3], 4);
// twoSum([2, 3, 1], 4);
