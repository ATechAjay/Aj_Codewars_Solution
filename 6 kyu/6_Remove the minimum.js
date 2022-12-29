function removeSmallest(numbers) {
  //   console.log(numbers);
  //   if (numbers === []) console.log("empty!");
  //   else {
  const result = numbers.sort((a, b) => a - b).slice(1);
  console.log(numbers);

  console.log(result);
  //   }
}
removeSmallest([5, 3, 2, 1, 4]);
// removeSmallest([2, 2, 1, 2, 1]);
// removeSmallest([]);
//       removeSmallest([1, 2, 3, 4, 5]),
//       [2, 3, 4, 5]

//       removeSmallest([5, 3, 2, 1, 4]),
//       [5, 3, 2, 4]

//       removeSmallest([2, 2, 1, 2, 1]),
//       [2, 2, 2, 1]

//   removeSmallest([]), []
