// Write a function that returns a string in which firstname is swapped with last name.

// Example(Input --> Output)

// "john McClane" --> "McClane john"

function nameShuffler(str) {
  // 1. Split into two seperate array items.
  // 2. Concatenate the 2nd item with 1st.
  const arr = str.split(" ");
  return arr[1] + " " + arr[0];
}
nameShuffler("john McClane"); //,'McClane john');
nameShuffler("Mary jeggins"); //,'jeggins Mary')
nameShuffler("tom jerry"); //,'jerry tom')

//////////////////////
//////////////////////
//////////////////////
//////////////////////
// function nameSuffle(str) {
//   return str.split(" ").reverse().join(" ");
// }
