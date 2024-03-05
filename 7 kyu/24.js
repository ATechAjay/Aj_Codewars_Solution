// 1. Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order.

// 2. Essentially, rearrange the digits to create the highest possible number.

// Examples:
// Input: 42145 Output: 54421

// Input: 145263 Output: 654321

// Input: 123456789 Output: 987654321

function descendingOrder(n) {
  // 1. Convert number to string -- String()
  // 2. Convert string into an array -- split()
  // 3. Sort the array items in descending order -- sort()
  // 4. Join the returned array -- join()
  // 5. Convert the joined string into number -- Number()
  const result = String(n)
    .split("")
    .sort((a, b) => b - a)
    .join("");
  return Number(result);
}

descendingOrder(0); //, 0)
descendingOrder(1); //, 1)
descendingOrder(111); //, 111)
descendingOrder(15); //, 51)
descendingOrder(1021); //, 2110)
descendingOrder(123456789); //, 987654321)
