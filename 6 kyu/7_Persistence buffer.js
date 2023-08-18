// Write a function, persistence, that takes in a positive parameter num and returns its multiplicative persistence, which is the number of times you must multiply the digits in num until you reach a single digit.

// For example (Input --> Output):

// 39 --> 3 (because 3*9 = 27, 2*7 = 14, 1*4 = 4 and 4 has only one digit)
function persistence(num) {
  //   console.log(`${num}`.split(""));
  const splitNum = `${num}`.split("").map((item) => +item);

  let prod = 1;
  //   function prodDigit() {
  splitNum.forEach((item) => {
    prod = prod * item;
  });
  //   prodDigit();
  //   if (prod <= 9) console.log(prod, "Less than 9");
  //   else prodDigit();

  //   console.log(prod);
}
// persistence(39);
persistence(999);
// assert.strictEqual(persistence(39),3);
// assert.strictEqual(persistence(4),0);
// assert.strictEqual(persistence(25),2);
// assert.strictEqual(persistence(999),4);
