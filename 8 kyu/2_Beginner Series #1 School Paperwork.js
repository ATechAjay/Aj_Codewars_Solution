// DESCRIPTION:
// Your classmates asked you to copy some paperwork for them. You know that there are 'n' classmates and the paperwork has 'm' pages.

// Your task is to calculate how many blank pages do you need. If n < 0 or m < 0 return 0.

// Example:
// n= 5, m=5: 25
// n=-5, m=5:  0

// Question:

function paperwork(n, m) {}

// Solution

function paperwork(n, m) {
  //If the value of classmates or pages will be less than 0
  //then there is no need to calculate the blank pages.
  // That's i checked if the classmates OR pages is less than
  // 0 then return 0 as well.
  if (n < 0 || m < 0) return 0;
  //Other just multiply both of them, that's it.
  else return m * n;
}
