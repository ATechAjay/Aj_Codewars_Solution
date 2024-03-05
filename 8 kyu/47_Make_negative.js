// In this simple assignment you are given a number and have to make it negative.

// But maybe the number is already negative?

// The number can be negative already, in which case no change is required.
// Zero (0) is not checked for any specific sign. Negative zeros make no mathematical sense.

function makeNegative(num) {
  // 1. Check if "num" is less than 0 (-ve). If true then return that a number.
  // 2. Check if "num" is greater than 0 (+ve). If true then return that a number with -ve sign.
  // 3. Else return 0, if "num" is 0.

  return num < 0 ? num : num > 0 ? -num : 0;
}

makeNegative(1); // return -1
makeNegative(-5); // return -5
makeNegative(0); // return 0
makeNegative(0.12); // return -0.12

// const timeoutID = setTimeout(
//   callBackFunc,
//   delayTime,
//   callbackParam1,
//   callbackParam2
// );

// clearTimeout(timeoutID);

// const intervalID = setInterval(
//   callBackFunc,
//   intervalTime,
//   callbackParam1,
//   callbackParam2
// );

// clearInterval(intervalID);
