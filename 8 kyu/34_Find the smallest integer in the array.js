// Given an array of integers your solution should find the smallest integer.

// Given [34, 15, 88, 2] your solution will return 2
// Given [34, -345, -1, 100] your solution will return -345

// sif.findSmallestInt([78,56,232,12,8]),8,'Should return the smallest int 8')

class SmallestIntegerFinder {
  findSmallestInt(args) {
    return Math.min(...args);
  }
}

const sif = new SmallestIntegerFinder();
const result = sif.findSmallestInt([78, 56, 232, 12, 8]);
// console.log(result);

// [78, 56, 232, 12, 8]
