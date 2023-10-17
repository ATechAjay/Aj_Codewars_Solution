// In some scripting languages like PHP, there exists a logical operator (e.g. &&, ||, and, or, etc.) called the "Exclusive Or" (hence the name of this Kata).

// The exclusive or evaluates two booleans. It then returns true if exactly one of the two expressions are true, false otherwise. For example:

// false xor false == false // since both are false
// true xor false == true // exactly one of the two expressions are true
// false xor true == true // exactly one of the two expressions are true
// true xor true == false // Both are true.  "xor" only returns true if EXACTLY one of the two expressions evaluate to true.

// Your task is to define a function xor(a, b) where a and b are the two expressions to be evaluated. Your xor function should have the behaviour described above, returning true if exactly one of the two expressions evaluate to true, false otherwise.

//developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Bitwise_XOR

// If both are different then it will return true.

function xor(a, b) {
  console.log(a ^ b ? true : false);
  return a ^ b;
}

xor(false, false); //, false, "false xor false");
xor(true, false); //, true, "true xor false");
xor(false, true); //, true, "false xor true");
xor(true, true); //, false, "true xor true");
xor(true, true); //, true, "true xor true: 'xor' is NOT identical to 'or'");
