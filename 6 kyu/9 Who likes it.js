// []                                -->  "no one likes this"
// ["Peter"]                         -->  "Peter likes this"
// ["Jacob", "Alex"]                 -->  "Jacob and Alex like this"
// ["Max", "John", "Mark"]           -->  "Max, John and Mark like this"
// ["Alex", "Jacob", "Mark", "Max"]  -->  "Alex, Jacob and 2 others like this"

// Implement the function which takes an array containing the names of people that like an item. It must return the display text as shown in the examples:

function likes(names) {
  if (names.length === 0) return "no one likes this";
  else if (names.length === 1) return `${names[0]} likes this`;
  else if (names.length === 2) return `${names[0]} and ${names[1]} like this`;
  else if (names.length === 3)
    return `${names[0]}, ${names[1]} and ${names[2]} like this`;
  else
    return `${names[0]}, ${names[1]} and ${names.length - 2} others like this`;
}

let a = likes([]);
let b = likes(["Peter"]);
let c = likes(["Jacob", "Alex"]);
let d = likes(["Max", "John", "Mark"]);
let e = likes(["Alex", "Jacob", "Mark", "Max"]);

console.log(a);
console.log(b);
console.log(c);
console.log(d);
console.log(e);

// expected 'Jacob and Alex likes this' to equal 'Jacob and Alex like this'

("Jacob and Alex likes this");

("Jacob and Alex like this");
