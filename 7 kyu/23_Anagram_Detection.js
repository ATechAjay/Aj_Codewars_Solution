// Complete the function to return true if the two arguments given are anagrams of each other; return false otherwise.

// "foefet" is an anagram of "toffee"

// "Buckethead" is an anagram of "DeathCubeK"

// write the function isAnagram
var isAnagram = function (test, original) {
  const a = test.toLowerCase().split("").sort().join("");
  const b = original.toLowerCase().split("").sort().join("");

  return a === b ? true : false;
};
isAnagram("foefet", "toffee"); //, true, 'The word "foefet" is an anagram of "toffee"')
isAnagram("Buckethead", "DeathCubeK"); //, true, 'The word "Buckethead" is an anagram of "DeathCubeK"')
isAnagram("Twoo", "WooT"); //, true, 'The word "Twoo" is an anagram of "WooT"')

isAnagram("dumble", "bumble"); //, false, 'Characters do not match for test case "dumble", "bumble"')
isAnagram("dumble", "bumble"); //, false, 'Characters do not match for test case "dumble", "bumble"')
isAnagram("ound", "round"); //, false, 'Missing characters for test case "ound", "round"')
isAnagram("apple", "pale"); //, false, 'Same letters, but different count')

// console.log(test);
