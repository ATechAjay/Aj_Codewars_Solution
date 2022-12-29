// Given two arrays a and b write a function comp(a, b) (orcompSame(a, b)) that checks whether the two arrays have the "same" elements, with the same multiplicities (the multiplicity of a member is the number of times it appears). "Same" means, here, that the elements in b are the elements in a squared, regardless of the order.

// Examples
// Valid arrays
// a = [121, 144, 19, 161, 19, 144, 19, 11]
// b = [121, 14641, 20736, 361, 25921, 361, 20736, 361]
// comp(a, b) returns true because in b 121 is the square of 11, 14641 is the square of 121, 20736 the square of 144, 361 the square of 19, 25921 the square of 161, and so on. It gets obvious if we write b's elements in terms of squares:

// a = [121, 144, 19, 161, 19, 144, 19, 11]
// b = [11*11, 121*121, 144*144, 19*19, 161*161, 19*19, 144*144, 19*19]
// Invalid arrays
// If, for example, we change the first number to something else, comp is not returning true anymore:

// a = [121, 144, 19, 161, 19, 144, 19, 11]
// b = [132, 14641, 20736, 361, 25921, 361, 20736, 361]
// comp(a,b) returns false because in b 132 is not the square of any number of a.

// a = [121, 144, 19, 161, 19, 144, 19, 11]
// b = [121, 14641, 20736, 36100, 25921, 361, 20736, 361]
// comp(a,b) returns false because in b 36100 is not the square of any number of a.

// Remarks
// a or b might be [] or {} (all languages except R, Shell).
// a or b might be nil or null or None or nothing (except in C++, COBOL, Crystal, D, Dart, Elixir, Fortran, F#, Haskell, Nim, OCaml, Pascal, Perl, PowerShell, Prolog, PureScript, R, Racket, Rust, Shell, Swift).
// If a or b are nil (or null or None, depending on the language), the problem doesn't make sense so return false.

// Note for C
// The two arrays have the same size (> 0) given as parameter in function comp.

// FUNDAMENTALS

function comp(array1, array2) {
  //   1. Check for the falsy values like 'null' and length of the arrays are same or not, if yes then return false.
  if (!array1 || array2 === null || array1.length !== array2.length) {
    return false;
  } else {
    //    2. sort the 1st array using sort() method.
    const arr1 = array1.sort();
    //    3. map the 2nd array with their respective square value then sort this array as well for comparing.
    const arr2 = array2.map((item) => Math.sqrt(item)).sort();
    //     4. Now convert both arrays into strings using join(), and check if both values are same?
    if (arr1.join("") === arr2.join("")) return true;
    else return false;
  }
}

// const a1 = [null];
let a1 = [121, 144, 19, 161, 19, 144, 19, 11];
let a2 = [
  11 * 11,
  121 * 121,
  144 * 144,
  19 * 19,
  161 * 161,
  19 * 19,
  144 * 144,
  19 * 19,
];
const test = comp(a1, a2);
console.log(test);

// const a = [10, 30];
// const b = [10, 30];
// const a = null,
//   b = [null];
// console.log(a || b === null);
// console.log(a1.length === a2.length);

// if (a || b === null) {
//   console.log(423423);
// }

// console.log(Math.sqrt(100));
