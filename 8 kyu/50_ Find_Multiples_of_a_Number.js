// 1. You will build a program that takes a value, integer.

// 2. Returns a list of its multiples up to another value, limit.

// 3. If limit is a multiple of integer, it should be included as well.

// 4. There will only ever be positive integers passed into the function, not consisting of 0.

// 5. The limit will always be higher than the base.

// For example, (2, 6) => [2, 4, 6] as 2, 4, and 6 are the multiples of 2 up to 6.
//www.codewars.com/kata/58ca658cc0d6401f2700045f/train/javascript
https: function findMultiples(integer, limit) {
  // 1. Create an empty array.
  const arr = [];

  // 2. Start loop from the given item.
  // 3. Check if the "i" is less than of equal to the defined limit?
  // 4. Now push the "i" into the new array.
  // 5. Finally increment the value of "i" by adding the last "integer" value to it.
  for (let i = integer; i <= limit; i += integer) {
    arr.push(i);
    console.log((i += integer));
  }
  // console.log(arr);
}

// findMultiples(5, 7); //, [5])
findMultiples(11, 54); //, [11, 22, 33, 44])
// findMultiples(4, 27); //, [4, 8, 12, 16, 20, 24])
// findMultiples(5, 25); //, [5, 10, 15, 20, 25])
// findMultiples(1, 2); //, [1, 2])
