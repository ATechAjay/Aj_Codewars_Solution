// 1. Implement a pseudo-encryption algorithm which given a string S.

// 2. Integer N concatenates all the odd-indexed characters of S with all the even-indexed characters of S

// 3. This process should be repeated N times.

// encrypt("012345", 1)  =>  "135024"
// encrypt("012345", 2)  =>  "135024"  ->  "304152"
// encrypt("012345", 3)  =>  "135024"  ->  "304152"  ->  "012345"

// encrypt("01234", 1)  =>  "13024"
// encrypt("01234", 2)  =>  "13024"  ->  "32104"
// encrypt("01234", 3)  =>  "13024"  ->  "32104"  ->  "20314"

// String manipulation
// Loop

// A decryption function which reverses the process.

function decrypt(encryptedText, n) {
  let textToArr = encryptedText.split("");

  const oddIndexItems = textToArr.filter((letter, ind) =>
    ind % 2 !== 0 ? letter : ""
  );

  const evenIndexItems = textToArr.filter((letter, ind) =>
    ind % 2 === 0 ? letter : ""
  );

  console.log(evenIndexItems);
  console.log(oddIndexItems);
}

decrypt("hsi  etTi sats!", 1); //, "This is a test!");

// decrypt("This is a test!", 0); //, "This is a test!");
// decrypt("s eT ashi tist!", 2); //, "This is a test!");
// decrypt(" Tah itse sits!", 3); //, "This is a test!");
// decrypt("This is a test!", 4); //, "This is a test!");
// decrypt("This is a test!", -1); //, "This is a test!");
// decrypt("hskt svr neetn!Ti aai eyitrsig", 1); //, "This kata is very interesting!");

// /////////////////////////////////////////////////////
// /////////////////////////////////////////////////////
// /////////////////////////////////////////////////////
// /////////////////////////////////////////////////////
// /////////////////////////////////////////////////////
// /////////////////////////////////////////////////////
// /////////////////////////////////////////////////////

function textEncryption(text) {
  // 3. Split the string into an array.
  const textToArr = text.split("");

  // 4. Get the odd indexed items from the array.
  const oddIndexItems = textToArr.filter((letter, ind) =>
    ind % 2 !== 0 ? letter : ""
  );

  // 5. Get the even indexed items from the array.
  const evenIndexItems = textToArr.filter((letter, ind) =>
    ind % 2 == 0 ? letter : ""
  );

  // 6. Merge odd and even indexed array items.
  const mergeBothArr = oddIndexItems.concat(evenIndexItems);

  // 7. Join the merger arrays.
  return mergeBothArr.join("");
}

// 1. Implement a pseudo-encryption algorithm which given a string.

// 2. Integer N concatenates all the odd-indexed characters of string with all the even-indexed characters of string.

// 3. This process should be repeated N times.

function encrypt(text, n) {
  // 1. Check if the string is null or empty, then return it as it is.
  if (!text) {
    return text;
  }
  // 2. Implement the encryption login in a seperate function.
  let result = textEncryption(text);

  // 8. Encrypt the string according to the number of n-times.
  if (n > 1) {
    for (let i = 1; i < n; i++) {
      result = textEncryption(result);
    }
  }

  return result;
}

// const oneTimeEncrypt = encrypt("012345", 1);
// console.log(oneTimeEncrypt); // 135024

// const twoTimeEncrypt = encrypt("012345", 2);
// console.log(twoTimeEncrypt); // 304152

// const threeTimeEncrypt = encrypt("012345", 3);
// console.log(threeTimeEncrypt); // 012345
