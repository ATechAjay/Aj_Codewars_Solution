// Build a function that returns an array of integers from n to 1 where n>0.

// Example : n=5 --> [5,4,3,2,1]

const reverseSeq = (n) => {
  //   1. create an empty array.
  let result = [];
  //   2. Loop will be run until get 1.
  for (let i = n; i >= 1; i--)
    //   3. Push the index to the new array.
    result.push(i);
  return result;
};

reverseSeq(5);
