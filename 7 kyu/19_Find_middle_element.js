// As a part of this Kata, you need to create a function that when provided with a triplet, returns the index of the numerical element that lies between the other two elements.

// gimme([2, 3, 1]) => 0

// gimme([5, 10, 14]) => 1

// function gimme(triplet) {
// 1. Find the sum.
// let sum = 0;
// triplet.map((digit) => (sum += digit));

//2. Find the average.
// const avg = sum / triplet.length;
//   console.log(Math.round(avg));
// console.log(avg + " normal.");
// console.log(Math.ceil(avg) + " Ceil.");
// console.log(Math.floor(avg) + " Floor.");
// console.log(Math.trunc(avg) + " Truch.");
// console.log(Math.round(avg) + " Round.");

//   if (triplet.includes(Math.round(avg))) {
//     console.log(
//       Math.round(avg) +
//         ", Yes exist at " +
//         triplet.indexOf(Math.round(avg)) +
//         " index."
//     );
//   } else console.log(Math.round(avg) + ", Not exist in the array.");
// }
// gimme([2, 3, 1]);
// console
//   .log
//   "--------------------------------------------------------------------"
//   ();
// gimme([5, 2, 6]);
// gimme([2.1, 3.2, 1.4]);
// gimme([5.9, 10.4, 14.2]);
// gimme([-2, -3.2, 1]);
// gimme([-5.2, -10.6, 14]);

// let num = 45.05;
// console.log(Math.fround(num));
// console.log(Math.abs(num));

// const test = [100, 4000, 600000].sort((a, b) => a - b);
// console.log(test);

// CHALLENGES in this question:
// 1. Shallow copy
// 2. Sort the array in any order
// 3. Return the 2nd element from the sorted array.

function gimme(triplet) {
  // 1. Shallow copy of the array.
  const sortedArr = [...triplet].sort((a, b) => a - b);
  // 2. Find the index of the middle number.
  const indexOfMiddleNo = triplet.indexOf(sortedArr[1]);
  // 3. Return the index of middle number.
  return indexOfMiddleNo;

  // console.log(`Middle number is ${sortedArr[1]} at index ${indexOfMiddleNo}.`);
  // console.log(sortedArr);
  // console.log(indexOfMiddleNo);
  // console.log(sortedArr[1]);
  // console.log(sortedArr);
}
gimme([5, 2, 6]);
gimme([2.1, 3.2, 1.4]);
gimme([5.9, 10.4, 14.2]);
gimme([-2, -3.2, 1]);
gimme([-5.2, -10.6, 14]);
