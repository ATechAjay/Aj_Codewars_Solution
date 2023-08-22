// Write a function that will take the number of petals of each flower and

// return true if they are in love

// and false if they aren't.
function flower1EvenOdd(flower1) {
  if (flower1 % 2 === 0) {
    return true;
  } else return false;
}
function flower2EvenOdd(flower2) {
  if (flower2 % 2 === 0) {
    return true;
  } else return false;
}
function lovefunc(flower1, flower2) {
  const flower_1 = flower1EvenOdd(flower1);
  const flower_2 = flower2EvenOdd(flower2);
  // true = even
  // false = odd

  //   console.log(flower_1, flower_2);

  if (flower_1 && flower_2) {
    return false;
  } else if (flower_1 || flower_2) {
    return true;
  } else return false;
  //(3, 1) = undefined, so will get 'false return by else block of code.
}
// const te = lovefunc(30, 10);
// console.log(te);
////////////////////////////////////////////////////
function lovefunc1(flower1, flower2) {
  return flower1 % 2 !== flower2 % 2;
}
const t1 = lovefunc1(301, 101);
console.log(t1);
