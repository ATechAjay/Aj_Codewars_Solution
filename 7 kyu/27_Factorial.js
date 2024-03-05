// In mathematics, the factorial of a non-negative integer n, denoted by n!, is the product of all positive integers less than or equal to n.

// For example: 5! = 5 * 4 * 3 * 2 * 1 = 120. By convention the value of 0! is 1.

// Write a function to calculate factorial for a given input.

// If input is below 0 or above 12 throw an exception of type ArgumentOutOfRangeException (C#) or IllegalArgumentException (Java) or RangeException (PHP) or throw a RangeError (JavaScript) or ValueError (Python) or return -1 (C).

// More details about factorial can be found here.
function factorial(n) {
  // Calculate the factorial here
  let result = 1;

  if (n < 0 && n > 12) {
    return new RangeError("The input is below 0 or above 12");
  } else if (n === 0 && n === 1) return 1;
  else
    for (let i = n; i > 1; i--) {
      result *= i;
    }

  return result;
}

factorial(0); //1, "factorial for 0 is 1");
factorial(1); //1, "factorial for 1 is 1");
factorial(2); //2, "factorial for 2 is 2");
factorial(3); //6, "factorial for 3 is 6");
