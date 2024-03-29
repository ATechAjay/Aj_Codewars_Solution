// The main idea is to count all the occurring characters in a string. If you have a string like aba, then the result should be {'a': 2, 'b': 1}.

// What if the string is empty? Then the result should be empty object literal, {}.

function count(string) {
  let increment = 0;
  // string.split("").map((char) => {
  //   console.log(char);

  //   obj.char ? (obj.char = increment++) : (obj.char = char);
  // });
  let obj = {};
  for (let i = 0; i <= string.length; i++) {
    obj.string[i] ? (obj.char = increment++) : (obj.char = char);
  }
}

console.log(obj);
count("ABCA");
// test("", {});
// test("a", { a: 1 });
// test("ab", { a: 1, b: 1 });
// test("aba", { a: 2, b: 1 });
// test("ABC", { A: 1, B: 1, C: 1 });
