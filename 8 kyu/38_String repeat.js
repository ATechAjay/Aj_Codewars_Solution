// Write a function that accepts an integer n
// and a string s as parameters,
// and returns a string of s repeated exactly n times.

// repeatStr(3, "*") =>> "***");
// repeatStr(5, "#") =>> "#####");
// repeatStr(2, "ha ") =>> "ha ha ");

function repeatStr(n, s) {
  return s.repeat(n);
}

repeatStr(3, "*");
repeatStr(5, "#");
repeatStr(2, "ha ");
