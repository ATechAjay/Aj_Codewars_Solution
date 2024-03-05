// Write a function which calculates the average of the numbers in a given list.

// Note: Empty arrays should return 0.

function findAverage(array) {
  if (array.length === 0) return 0;
  const sum = array.reduce((acc, item) => {
    return acc + item;
  }, 0);

  return sum / array.length;
}

findAverage([1, 1, 1]); //, 1);
findAverage([1, 2, 3]); //, 2);
findAverage([1, 2, 3, 4]); //, 2.5);
