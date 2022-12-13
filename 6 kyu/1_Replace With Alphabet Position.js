// Welcome.

// In this kata you are required to, given a string, replace every letter with its position in the alphabet.

// If anything in the text isn't a letter, ignore it and don't return it.

// "a" = 1, "b" = 2, etc.

// Example
// alphabetPosition("The sunset sets at twelve o' clock.")
// Should return "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11" ( as a string )
const alphabet = "abcdefghijklmnopqrstuvwxyz";
// 1. Create a variable of alphabets.
function alphabetPosition(text) {
  const customTextLetter = text.toLowerCase().split("");
  // 2. Convert all text in lowercase and split it into an array.
  const alpha = alphabet.split("");
  // 3. Convert our alphabet variable into an array as well.
  let resultArr = [];
  // 4. Let's create an empty array to store the result.

  // 5. Loop through all letters of the upcoming from text variable.
  customTextLetter.forEach((item) => {
    let indexVal = alpha.indexOf(item);
    // 6. Find the index value of each letters of the upcoming input(text)

    // 7. Check if the index of letters is less than one then we have to ignore those items.

    if (indexVal < 0) return "";
    else resultArr.push(indexVal + 1);

    // 8. Otherwise, push the index of those letter to a new array by incrementing by one.
  });
  return resultArr.join(" ");
  // 9. Finally, join all the items of the array into a string type with a space.
}
