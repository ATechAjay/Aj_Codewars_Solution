// Take 2 strings s1 and s2 including only letters from a to z.
// Return a new sorted string, the longest possible, containing distinct letters - each taken only once - coming from s1 or s2.

// a = "xyaabbbccccdefww"
// b = "xxxxyyyyabklmopq"
// longest(a, b) -> "abcdefklmopqwxy"

// a = "abcdefghijklmnopqrstuvwxyz"
// longest(a, a) -> "abcdefghijklmnopqrstuvwxyz"

function longest(s1, s2) {
  // 1. Concatenating the string.
  const str = s1 + s2;

  // 2. Converting str to an array
  const strToArr = str.split("");

  // 3. Passing the array to remove the duplicates into a Set().
  const set = new Set(strToArr);

  // 4. Creating an empty array.
  const result = [];

  //5. Pushing the set item into the array.
  set.forEach((item) => result.push(item));

  //6. Return the array after sorting as well as converting it into a string.
  return result.sort().join("");
}

longest("aretheyhere", "yestheyarehere"); //, "aehrsty") aehrsty

// longest("loopingisfunbutdangerous", "lessdangerousthancoding"); //, "abcdefghilnoprstu")
// longest("inmanylanguages", "theresapairoffunctions"); //, "acefghilmnoprstuy")
