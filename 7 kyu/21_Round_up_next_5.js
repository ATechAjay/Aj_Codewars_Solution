// Given an integer as input, can you round it to the next (meaning, "greater than or equal") multiple of 5?

// Input may be any positive or negative integer (including 0).

// You can assume that all inputs are valid integers.
// input:    output:
// 0    ->   0
// 2    ->   5
// 3    ->   5
// 12   ->   15
// 21   ->   25
// 30   ->   30
// -2   ->   0
// -5   ->   -5
// etc.

function roundToNext5(n) {
  console.log(Math.round(n) + 5);
}

roundToNext5(0);
roundToNext5(1);
roundToNext5(-1);
roundToNext5(-5);
roundToNext5(3);
roundToNext5(5);
roundToNext5(5);

// console.log(Math.round(5.6));
// console.log(Math.round(5.4) + 5);
