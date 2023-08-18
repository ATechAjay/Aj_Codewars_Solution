// "How can mirrors be real if our eyes aren't real" =>>>"How Can Mirrors Be Real If Our Eyes Aren't Real"
String.prototype.toJadenCase = function () {
  const str = this.split(" ");

  const arr = str.map((item) => {
    // Take the first letter of the word and convert it into capitalized and get the rest of letters starting from the 1st index.
    return item.slice(0, 1).toUpperCase() + item.slice(1);
  });
  return arr.join(" ");
};

const str = "How can mirrors be real if our eyes aren't real";

console.log(str.toJadenCase());

// r + eal =>> R + eal =>> Real
