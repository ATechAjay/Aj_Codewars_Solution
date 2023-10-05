// 1. Create a function that takes in a list.
// 2. Returns a list with the reverse order.

// [1, 2, 3, 4]  -> [4, 3, 2, 1]
// [9, 2, 0, 7]  -> [7, 0, 2, 9]

function reverseList(list) {
  return list.reverse();
}

const list1 = reverseList([1, 2, 3, 4]); // [4,3,2,1]);
const list2 = reverseList([3, 1, 5, 4]); // [4,5,1,3]);

console.log(list1);
console.log(list2);
