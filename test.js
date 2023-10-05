function reverseWords(str) {
  // 1. Split the string.
  const arrOfWords = str.split(" ");

  // 2. Reverse the each words of the string.
  const reverseArr = arrOfWords.map((word) => {
    word.split("").reverse().join("");
    console.log(word.split(""));
  });

  // 3. Join the string with space.
  return reverseArr.join(" ");
}

reverseWords("double  spaced  words");
// reverseWords("The quick brown fox jumps over the lazy dog.");
// reverseWords("apple");
// reverseWords("a b c d");
