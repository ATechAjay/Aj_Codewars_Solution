// Complete the function/method so that it returns the url with anything after the anchor (#) removed.

// "www.codewars.com#about" --> "www.codewars.com"
// "www.codewars.com?page=1" -->"www.codewars.com?page=1"

function removeUrlAnchor(url) {
  //console.log(url.split("#")[0]);
  // 1. Check if the string includes "#" sign or not?
  // 2. If yes, then get the index of the "#" sign from the string.
  // And get the slice of the string from 0 to index of the "#" sign.
  // 3. If no, then return "url" as it is.
  if (url.includes("#")) {
    const indexOfHash = url.indexOf("#");
    return url.slice(0, indexOfHash);
  } else return url;
}
removeUrlAnchor("www.codewars.com#about"); //, 'www.codewars.com')
removeUrlAnchor("www.codewars.com/katas/?page=1#about"); //, 'www.codewars.com/katas/?page=1')
removeUrlAnchor("www.codewars.com/katas/"); //, 'www.codewars.com/katas/')
