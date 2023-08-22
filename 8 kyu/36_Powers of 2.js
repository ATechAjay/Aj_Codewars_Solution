// Complete the function that takes a non-negative integer n as input, and returns a list of all the powers of 2 with the exponent ranging from 0 to n ( inclusive ).

// n = 0  ==> [1]        # [2^0]
// n = 1  ==> [1, 2]     # [2^0, 2^1]
// n = 2  ==> [1, 2, 4]  # [2^0, 2^1, 2^2]

// powersOfTwo(0) => [1];
// powersOfTwo(1) => [1, 2];
// powersOfTwo(4) => [1, 2, 4, 8, 16];

function powersOfTwo(n) {
  let result = [];
  for (let i = 0; i <= n; i++) {
    //console.log(i);
    result.push(2 ** i);
  }
  // 2^0 => 1
  // 2^1 => 2
  // 2^2 => 4
  // 2^3 => 8
  // 2^4 => 16
  console.log(result);
  return result;
}

powersOfTwo(0);
powersOfTwo(1);
powersOfTwo(4);
