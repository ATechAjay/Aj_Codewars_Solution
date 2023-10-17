// 1. Remove an exclamation mark from the end of a string.

// 2. You can assume that the input data is always a string, no need to verify it.

// "Hi!"     ---> "Hi"
// "Hi!!!"   ---> "Hi!!"
// "!Hi"     ---> "!Hi"
// "!Hi!"    ---> "!Hi"
// "Hi! Hi!" ---> "Hi! Hi"
// "Hi"      ---> "Hi"

function remove(string) {
  // 1. Check if the string is ends with "!"
  // 2. If yes, then remove the last "!" character from the string using the slice method.
  // 3. Else returns the normal string.
  return string.endsWith("!") ? string.slice(0, -1) : string;
}

remove("Hi!");
remove("Hi!!!");
remove("!Hi");
remove("Hi! Hi!");
remove("Hi Hi");
// doTest("Hi!", "Hi");
// doTest("Hi!!!", "Hi!!");
// doTest("!Hi", "!Hi");
// doTest("!Hi!", "!Hi");
// doTest("Hi! Hi!", "Hi! Hi");
// doTest("Hi", "Hi");

// slice, substring, split, includes, trim, concat, replaceAll, lastIndexOf, toLowerCase, toUpperCase, indexOf, fromCharCode, startsWith, endsWith, charCodeAt, padStart, padEnd, repeat, valueOf, charAt

// String.prototype.at()
// String.prototype.charAt()
// String.prototype.charCodeAt()
// String.prototype.codePointAt()
// String.prototype.concat()
// String.prototype.endsWith()
// String.prototype.fontsize()
// String.fromCharCode()
// String.fromCodePoint()
// String.prototype.includes()
// String.prototype.indexOf()
// String.prototype.isWellFormed()
// String.prototype.lastIndexOf()
// String.prototype.localeCompare()
// String.prototype.match()
// String.prototype.matchAll()
// String.prototype.normalize()
// String.prototype.padEnd()
// String.prototype.padStart()
// String.raw()
// String.prototype.repeat()
// String.prototype.replace()
// String.prototype.replaceAll()
// String.prototype.search()
// String.prototype.slice()
// String.prototype.split()
// String.prototype.startsWith()
// String.prototype.substring()
// String.prototype.toLocaleLowerCase()
// String.prototype.toLocaleUpperCase()
// String.prototype.toLowerCase()
// String.prototype.toString()
// String.prototype.toUpperCase()
// String.prototype.toWellFormed()
// String.prototype.trim()
// String.prototype.trimEnd()
// String.prototype.trimStart()
// String.prototype.valueOf()
