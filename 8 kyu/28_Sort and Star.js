// You will be given a list of strings. You must sort it alphabetically (case-sensitive, and based on the ASCII values of the chars) and then return the first value.

// The returned value must be a string, and have "***" between each of its letters.

// You should not remove or add elements from/to the array.
function twoSort(s) {
  const sorted = s.sort();
  //   1. sort according to the ASCII value using sort() method.
  const firstLetterToArr = sorted[0].split("");
  //   2. split the individually letters of the 1st sorted item into an array using split() method.
  const result = firstLetterToArr.map((item) => item + "***");
  //   3. Map the all letter with '***' using map() method. That also return an array with concatenation.
  return result.join("").slice(0, -3);
  //   4. Finally convert all 'array' items into a single 'string' and remove the last 3 stars(***).
}

twoSort([
  "bitcoin",
  "take",
  "over",
  "the",
  "world",
  "maybe",
  "who",
  "knows",
  "perhaps",
]);
// assert.strictEqual(twoSort(["bitcoin", "take", "over", "the", "world", "maybe", "who", "knows", "perhaps"]), 'b***i***t***c***o***i***n' );
//     assert.strictEqual(twoSort(["turns", "out", "random", "test", "cases", "are", "easier", "than", "writing", "out", "basic", "ones"]), 'a***r***e');


// ROBUST//
console.log(
  [
    "bitcoin",
    "take",
    "over",
    "the",
    "world",
    "maybe",
    "who",
    "knows",
    "perhaps",
  ]
    .sort()[0]
    .split("")
    .join("***")
);
