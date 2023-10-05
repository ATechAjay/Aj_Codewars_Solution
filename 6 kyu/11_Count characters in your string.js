// The main idea is to count all the occurring characters in a string. If you have a string like aba, then the result should be {'a': 2, 'b': 1}.
// What if the string is empty? Then the result should be empty object literal, {}.

// aba => {'a': 2, 'b': 1}.
// string is empty => empty object literal, {}

function count(string) {
  const charCount = {};
  if (string === "") {
    return {};
  } else {
    for (const letter of string) {
      if (charCount[letter]) {
        charCount[letter]++;
      } else charCount[letter] = 1;
    }
  }
  return charCount;
}

// const test = count("ABC");
// console.log(test);
// test("", {});
// test("a", { a: 1 });
// test("ab", { a: 1, b: 1 });
// test("aba", { a: 2, b: 1 });
// test("ABC", { A: 1, B: 1, C: 1 });
