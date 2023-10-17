// 1. You should replace any digit below 5 with '0'

// 2. And any digit 5 and above with '1'.

// 3. Return the resulting string.

// Note: input will never be an empty string

function fakeBin(x) {
  return x
    .split("")
    .map((num) => (num >= 5 ? (num = 1) : (num = 0)))
    .join("");
}

fakeBin("4538"); // '01011110001100111'
// fakeBin("45385593107843568"); // '01011110001100111'
// fakeBin("509321967506747"); // '101000111101101'
// fakeBin("366058562030849490134388085"); // '011011110000101010000011011'
