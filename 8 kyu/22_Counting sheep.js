// DESCRIPTION:
// Consider an array/list of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present).

// For example,

// [true,  true,  true,  false,
//   true,  true,  true,  true ,
//   true,  false, true,  false,
//   true,  false, false, true ,
//   true,  true,  true,  true ,
//   false, false, true,  true]
// The correct answer would be 17.

// Hint: Don't forget to check for bad values like null/undefined

// Question:
function countSheeps(arrayOfSheep) {
  // TODO May the force be with you
}
// Solution:

function countSheeps(arrayOfSheep) {
  // TODO May the force be with you

  let count = 0;
  if (arrayOfSheep.length) {
    arrayOfSheep.forEach((item) => {
      if (item) return (count = count + 1);
      else return 0;
    });
  } else return "Empty array!!!!";

  return count;
}
