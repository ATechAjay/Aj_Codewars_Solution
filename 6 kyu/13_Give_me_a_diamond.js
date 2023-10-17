// You need to return a string that looks like a diamond shape when printed on the screen, using asterisk (*) characters.

// Trailing spaces should be removed, and every line must be terminated with a newline character (\n).

// Return null/nil/None/... if the input is an even number or negative, as it is not possible to print a diamond of even or negative size.

// A size 3 diamond:
/*

 *
***
 *

*/
// " *\n***\n *\n"

// A size 5 diamond:
/*

  *
 ***
*****
 ***
  *

 */

// "  *\n ***\n*****\n ***\n  *\n"

// function diamond(n) {
//   console.log(" * \n***\n *\n");
// }

// diamond();

// 1. Printing a Single Line of Stars

// for (let i = 0; i < 5; i++) {
//   console.log("*");
// }

// console.log(6++); ERROR
// i = 0; 0 < 5; i++; => *
// i = 1; 1 < 5; i++; => **
// i = 2; 2 < 5; i++; => ***
// i = 3; 3 < 5; i++; => ****
// i = 4; 4 < 5; i++; => *****
// i = 5; 5 < 5; i++; => OUT OF THE LOOP.

// 2. Printing a Square of Stars

// const size = 2;

// for (let i = 0; i < size; i++) {
//   let row = "";
//   for (let j = 0; j < size; j++) {
//     row += "* ";
//   }
//   console.log(row);
// }

// FOR DEMONSTRATING PURPOSE ONLY

// let i = 0; 0 < 2; 0++ => pass

// let j = 0; 0 < 2; 0++ => row = "* "
// let j = 0; 1 < 2; 1++ => row = "* * " (First line)
// /////////////////////////////////////////////

// let i = 0; 1 < 2; 1++ => pass

// let j = 0; 0 < 2; 0++ => row = "* "
// let j = 0; 1 < 2; 1++ => row = "* * " (Second line)

// let i = 0; 2 < 2; 2++ => Does not pass.

// const size = 3;
// for (let i = 1; i <= size; i++) {
//   let row = "";
//   for (let j = 1; j <= i; j++) {
//     row += "* ";
//   }
//   console.log(row);
// }

// i = 1; i <= size; i++
// i = 1; 1 <= 3; 1++ => pass

// j = 1; j <= i; j++
// j = 1; 1 <= 1; 1++ => row = "* " (1st row)
// j = 1; 2 <= 1; 2++ => row = "" => out of the loop

// i = 1; 2 <= 3; 2++ => pass

// j = 1; 1 <= 2; 1++ => row => "* "
// j = 1; 2 <= 2; 2++ => row => "* * "(2nd row)
// j = 1; 3 <= 2; 3++ => out of the loop

// i = 1; 3 <= 3; 3++ => pass

// j = 1; 1 <= 3; 1++ =>
// j = 1; 1 <= 3; 1++ => row => "* "
// j = 1; 2 <= 3; 2++ => row => "* * "
// j = 1; 3 <= 3; 3++ => row => "* * * "(3rd row)

// i = 1; 4 <= 3; 4++ => does not pass and out of the loop.

// const size = 3;
// for (let i = size; i >= 1; i--) {
//   let row = "";
//   for (let j = 1; j <= i; j++) {
//     row += "* ";
//   }
//   console.log(row);
// }

// * * *
// * *
// *

// * * *
// * *
// *

// i = size; i >= 1; i--
// i = 3; 3 >= 1; 3-- => true

// j = 1; j <= i; j++
// j = 1; 1 <= 3; 1++ => "* "
// j = 1; 2 <= 3; 2++ => "* * "
// j = 1; 3 <= 3; 3++ => "* * * " (First line)
// j = 1; 4 <= 3; 4++ => OUT OF THE LOOP

// i = 3; 2 >= 1; 2-- => true

// j = 1; 1 <= 2; 1++ => "* "
// j = 1; 2 <= 2; 2++ => "* * " (2ND LINE)
// j = 1; 3 <= 2; 3++ => OUT OF THE LOOP

// i = 3; 1 >= 1; 1-- => true

// j = 1; 1 <= 1; 1++ => "* " (3RD LINE)
// j = 1; 2 <= 1; 2++ => OUT FROM THIS LOOP.

// i = 3; 0 >= 1; 0-- => FALSE, OUT OF THE LOOP

// const size = 3;
// for (let i = 1; i <= size; i++) {
//   let spaces = " ".repeat(size - i);
//   let stars = "*".repeat(2 * i - 1);
//   console.log(spaces + stars);
// }

//  *
// ***
//*****

// SIZE = 3

// HOW TO PRINT SPACE?
// 1. 2 SPACE => 3 - 1
// 2. 1 SPACE => 3 - 2
// 3. 0 SPACE => 3 - 3

//  *
// ***
//*****

// SIZE = 3
// HOW TO PRINT STAR?
// 1. ONE STAR => 2 * 1 -1
// 2. THREE STAR => 2 * 2 -1
// 2. FIVE STAR => 2 * 3 - 1

// i = 1; i <= size; i++
// i = 1; 1 <= 3; 1++ => TRUE

// (size - i) => 3-1 = 2 SPACES
// (2 * i - 1) => 2*1 -1 = 1 STAR

// const size = 5;

// for (let i = 1; i <= size; i++) {
//   let space = " ".repeat(size - i);
//   let star = "*".repeat(2 * i - 1);
//   console.log(space + star);
// }

//  *
// ***
//*****

// const size = 4;

// for (let i = 1; i <= size; i++) {
//   let spaces = " ".repeat(size - i);
//   let stars = "*".repeat(2 * i - 1);
//   console.log(spaces + stars);
// }

// const size = 5;
// for (let i = 1; i <= size; i++) {
//   let spaces = " ".repeat(size - i);
//   let stars = "*".repeat(2 * i - 1);
//   console.log(spaces + stars);
// }

//  *
// ***

// for (let i = size - 1; i >= 1; i--) {
//   let spaces = " ".repeat(size - i);
//   let stars = "*".repeat(2 * i - 1);
//   console.log(spaces + stars);
// }

// for (let i = 1; i <= size; i++) {
//   let spaces = " ".repeat(size - i);
//   let stars = "*".repeat(2 * i - 1);
//   console.log(spaces + stars);
// }

// i = 1; i <= size; i++
// i = 1; 1 <= 2; i++ => true

// size-1=> 2-1=> space = ' '

// star
// 2 * i -1 => 2 * 1 - 1 => *
// i = 1; 2 <= 2; 2++ => true
// space
// size-2=> 2-2=> space = ''
// star
// 2 * i -1 => 2 * 2 - 1 => ***
// i = 1; 2 <= 2; 2++ => true

// const size = 5;

// for (let i = 1; i <= size; i++) {
//   let spaces = " ".repeat(size - i);
//   let stars = "*".repeat(2 * i - 1);

//   console.log(spaces + stars);
// }

// for (let i = size - 1; i >= 1; i--) {
//   let spaces = " ".repeat(size - i);
//   let stars = "*".repeat(2 * i - 1);
//   console.log(spaces + stars);
// }

function diamond(n) {
  if (n < 0 || n % 2 === 0) {
    return null;
  }

  const size = n;
  let upper = "";
  let lower = "";
  for (let i = 1; i <= size; i++) {
    let spaces = " ".repeat(size - i);
    let stars = "*".repeat(2 * i - 1);
    upper += spaces + stars + "\n";
  }

  for (let i = size - 1; i >= 1; i--) {
    let spaces = " ".repeat(size - i);
    let stars = "*".repeat(2 * i - 1);
    lower += spaces + stars + "\n";
  }

  console.log(upper + lower);
  return upper + lower;
}

diamond(10);
diamond(13);
diamond(5);
