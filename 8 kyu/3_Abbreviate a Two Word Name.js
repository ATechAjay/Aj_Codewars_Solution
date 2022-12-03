// DESCRIPTION:
// Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

// The output should be two capital letters with a dot separating them.

// It should look like this:

// Sam Harris => S.H

// patrick feeney => P.F

// Question:
function abbrevName(name) {
  // code away
}

// Solution:
function abbrevName(name) {
  // code away
  //   suppose: str = Ajay Yadav
  //   step 1: split it into an array => ["Ajay","Yadav"]
  //   step 2: map each array and extract the first character from the array => ["A","Y"]
  //   step 3: Join the all items of the array with dot(.)
  //   step 4: Change the each character to the uppercase.

  const output = name
    .split(" ")
    .map((item) => item.slice(0, 1))
    .join(".")
    .toUpperCase();
  return output;
}
