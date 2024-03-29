// Write a function that takes a single non-empty string of only lowercase and uppercase ascii letters (word) as its argument

// And returns an ordered list containing the indices of all capital (uppercase) letters in the string.

// "CodEWaRs" --> [0,3,4,6]

var capitals = function (word) {
  const result = [];
  for (let i = 0; i < word.length; i++) {
    // Check if a first char is equal to its uppercase? if yes then push the index into the array.

    if (word[i] == word[i].toUpperCase()) {
      result.push(i);
    }
  }
  return result;
};

const tesst = capitals("CodEWaRs"); //, [0,3,4,6] );
console.log(tesst);
