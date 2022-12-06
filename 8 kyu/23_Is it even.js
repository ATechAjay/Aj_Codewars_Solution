// DESCRIPTION:
// In this Kata we are passing a number (n) into a function.

// Your code will determine if the number passed is even (or not).

// The function needs to return either a true or false.

// Numbers may be positive or negative, integers or floats.

// Floats with decimal part non equal to zero are considered UNeven for this kata.

// FUNDAMENTALS
// STATS:
// Created	May 18, 2015
// Published	May 18, 2015
// Warriors Trained	42124
// Total Skips	1575
// Total Code Submissions	64672
// Total Times Completed	35249
// JavaScript Completions	15965
// Ruby Completions	1543
// Java Completions	5832
// Elixir Completions	311
// C# Completions	1768
// C Completions	532
// Python Completions	9152
// C++ Completions	958
// TypeScript Completions	321
// CoffeeScript Completions	22
// COBOL Completions	10
// Total Stars	139

// Question:
function testEven(n) {
  return n % 2 === 0 ? true : false;
}
testEven(0);
testEven(0.5);
testEven(1);
// assert.strictEqual(testEven(0), true, "testEven for 0");
// assert.strictEqual(testEven(0.5), false, "testEven for 0.5");
// assert.strictEqual(testEven(1), false, "testEven for 1");
// assert.strictEqual(testEven(2), true, "testEven for 2");
// assert.strictEqual(testEven(-4), true, "testEven for 2");
