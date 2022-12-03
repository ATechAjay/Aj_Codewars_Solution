// DESCRIPTION:
// You might know some pretty large perfect squares. But what about the NEXT one?

// Complete the findNextSquare method that finds the next integral perfect square after the one passed as a parameter. Recall that an integral perfect square is an integer n such that sqrt(n) is also an integer.

// If the parameter is itself not a perfect square then -1 should be returned. You may assume the parameter is non-negative.

// Examples:(Input --> Output)

// 121 --> 144
// 625 --> 676
// 114 --> -1 since 114 is not a perfect square

Question: function findNextSquare(sq) {
  return -1;
}
Solution: function findNextSquare(sq) {
  // Return the next square if sq is a perfect square, -1 otherwise
  //   Math.trunc = Remove the decimal point of a number.
  //   Math.sqrt = Return the square of a number.

  //   Eg: sq -> 155
  //   Math.sqrt(155) -> 12.449899597988733
  //   Math.trunc(Math.sqrt(155)) -> 12
  //   Math.trunc(Math.sqrt(155)) * Math.trunc(Math.sqrt(155)) = 144
  //   (Which is not equal to 155 that's why else block of code will be executed[-1].)

  if (Math.trunc(Math.sqrt(sq)) * Math.trunc(Math.sqrt(sq)) === sq) {
    return (Math.sqrt(sq) + 1) * (Math.sqrt(sq) + 1);
  } else return -1;
}
