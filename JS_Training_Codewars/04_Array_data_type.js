// I've written five functions. Each function receives a parameter arr which is an array. Complete the functions using arr inside the function bodies.

// 1. getLength(arr)    should return length of arr

// 2. getFirst(arr)     should return the first element of arr

// 3. getLast(arr)      should return the last element of arr

// 4. pushElement(arr)  should push an element to arr, and then return arr.

// 5. popElement(arr)   should pop an element from arr, and then return arr.

function getLength(arr) {
  //Return the length of the array.
  return arr.length;
}

function getFirst(arr) {
  //Return the first element of the array
  return arr[0];
}

function getLast(arr) {
  //Return the last indexed item.
  return arr[arr.length - 1];
}

function pushElement(arr) {
  var el = 1;
  arr.push(el);
  //Return the array after push inside it an element.
  return arr;
}

function popElement(arr) {
  arr.pop();
  //Return an array after popping up from the array.
  return arr;
}

const test = getLast([6, 1, 19, 0, 8, 15, 17, 12, 4, 3, 18, 17]); //,3);
console.log(test);
// const t = pushElement([1, 2, 3]);
// const s = popElement([1, 2, 3]);

// console.log(t.length);
// console.log(s.length);
// pushElement([1,2,3]).length,4);
// popElement([1,2,3]).length,2);
