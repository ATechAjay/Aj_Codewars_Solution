// Regular expression literal ==> /.../

// let reg = /seq/flag

// let reg = new RegExp("Ajay");

let text = "I love JavaScript";
// console.log(text.match(/javascript/)); // null
// console.log(text.match(/javascript/i)); // Object with mathched data.

// Multiple Options
text = "I love NodeJS";
// console.log(text.match(/javascript|react|nodejs/i));

text = "I love REACTJS and JavaScript";
// console.log(text.match(/javascript|react|nodejs/gi));

text = "is2 Thi1s T4est 3a";
console.log(text.match(/\d/gi).sort((a, b) => a - b));
