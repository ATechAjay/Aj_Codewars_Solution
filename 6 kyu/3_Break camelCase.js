// Complete the solution so that the function will break up camel casing, using a space between words.

// Example
// "camelCasing"  =>  "camel Casing"
// "identifier"   =>  "identifier"
// ""             =>  ""

// complete the function
// function solution(string) {
//   return string.replace(/([A-Z])/g, " $1");
// }
function solution(string) {
  const result = string.split("");

  const newArr = result.map(function (item) {
    if (item === item.toUpperCase()) {
      return (item = " " + item);
    } else return item;
  });

  // const newArr = result.map(function (el) {
  //   if (el === el.toUpperCase()) {
  //     return (el = " " + el);
  //   } else return el;
  // });
  console.log(newArr.join(""));
}

const t = solution("camelCasingTH");
// console.log(t);
