// We need a simple function that determines if a plural is needed or not.

// It should take a number, and return true if a plural should be used with that number Or, false if not.

// This would be useful when printing out a string such as 5 minutes, 14 apples, or 1 sun.

// You only need to worry about english grammar rules for this kata, where anything that isn't singular (one of something), it is plural (not one of something).

// All values will be positive integers or floats, or zero.

function plural(n) {
  if (n === 1) return false;
  else return true;
}

plural(0); //, true, "Plural for 0");
plural(0.5); //, true, "Plural for 0.5");
plural(1); //, false, "Plural for 1");
plural(100); //, true, "Plural for 100");
plural(Infinity); //, true, "Plural for Infinity");
