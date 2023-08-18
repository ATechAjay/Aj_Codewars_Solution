// disemvowel("This website is for losers LOL!"), "Ths wbst s fr lsrs LL!"
// disemvowel("No offense but,\nYour writing is among the worst I've ever read"
// disemvowel("What are you, a communist?"), "Wht r y,  cmmnst?"

function disemvowel(str) {
  // Replace method takes 2 args
  // 1. Replacable content that we want to replace in future.
  // 2. What we want to put in the place of replacable content.
  return str.replace(/[aeiou]/gi, "");
}

const tst = disemvowel("This website is for losers LOL!");
console.log(tst);
