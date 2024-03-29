// This time we want to write calculations using functions and get the results. Let's have a look at some examples:

// seven(times(five())) must
// four(plus(nine())) must
// eight(minus(three())) must // six(dividedBy(two())) must
// Requirements:

// There must be a function for each number from 0 ("zero") to 9 ("nine")
// There must be a function for each of the following mathematical operations: plus, minus, times, dividedBy
// Each calculation consist of exactly one operation and two numbers
// The most outer function represents the left operand, the most inner function represents the right operand
// Division should be integer division. For example, this should  not 2.666666...:

// eight(dividedBy(three()));

function zero() {}
function one() {}
function two() {}
function three() {}
function four() {}
function five() {}
function six() {}
function seven() {}
function eight() {}
function nine() {}

function plus() {}
function minus() {}
function times() {}
function dividedBy() {}

assert.strictEqual(seven(times(five())), 35);
assert.strictEqual(four(plus(nine())), 13);
assert.strictEqual(eight(minus(three())), 5);
assert.strictEqual(six(dividedBy(two())), 3);
