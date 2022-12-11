// Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).

// Examples:

// solution('abc', 'bc') // returns true
// solution('abc', 'd') // returns false
function solution(str, ending) {
  //   1. Check if the length of the ending === 0 then returns 'true'
  if (ending.length === 0) return true;
  else return str.slice(-ending.length) === ending;
  //   . Else check if the last characters of the string is equal to ending? then returns true/false;
}
// Test.assertEquals(solution("abcde", "cde"), true);
// Test.assertEquals(solution("abcde", "abc"), false);
