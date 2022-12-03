// DESCRIPTION:
// Welcome. In this kata, you are asked to square every digit of a number and concatenate them.

// For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1.

// Note: The function accepts an integer and returns an integer

// Question:
function squareDigits(num) {
  return 0;
}
// Solution:
function squareDigits(num) {
  const str = String(num);
  return Number(
    str
      .split("")
      .map((item) => +(item * item))
      .join("")
  );
  //   String(num)=> Convert number type to string.
  //   split => split each item of the string into an array.
  //   +(item*item)=> Convert string to number
  //   join=> Concatenate all array items into single item.
  //   Finally we have to convert result into number type.
}
