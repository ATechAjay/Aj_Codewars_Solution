// 1. Complete the function that accepts a string parameter

// 2. reverses each word in the string.

// 3. All spaces in the string should be retained.

// "This is an example!" ==> "sihT si na !elpmaxe"
// "double  spaces"      ==> "elbuod  secaps"

// reverseWords('The quick brown fox jumps over the lazy dog.'), 'ehT kciuq nworb xof spmuj revo eht yzal .god');
// reverseWords('apple'), 'elppa');
// reverseWords('a b c d'), 'a b c d');
// reverseWords('double  spaced  words'), 'elbuod  decaps  sdrow');

function reverseWords(str) {
  // 1. Split the string.
  const arrOfWords = str.split(" ");

  // 2. Reverse the each words of the string.
  const reverseArr = arrOfWords.map((word) =>
    word.split("").reverse().join("")
  );

  // 3. Join the string with space.
  return reverseArr.join(" ");
}

reverseWords("double  spaced  words");
reverseWords("The quick brown fox jumps over the lazy dog.");
reverseWords("apple");
reverseWords("a b c d");
