// Write function RemoveExclamationMarks which removes all exclamation marks from a given string.
function removeExclamationMarks(s) {
  //   1. Create an empty array for stroing char without exclamation.
  let withoutExclaMark = [];
  //   2. Split string into an array using split()
  const sToArr = s.split("");
  //   3. Loop throgh all chars using forEach loop.
  //   4. Check if chars === !, yes? then return nothing(null)
  //   5. Otherwise push all chars into newly created array.
  sToArr.forEach((item) => {
    if (item === "!") return null;
    else withoutExclaMark.push(item);
  });
  //  6. Finally return an array after converting into a string using join()
  return withoutExclaMark.join("");
}

// ROBUST

function removeExclamationMarks(s) {
  return s.replace(/!/gi, "");
}

const test = removeExclamationMarks("KDFKLDS!skdfjsafl!dskfjasfl!skdfjsakfj!");
