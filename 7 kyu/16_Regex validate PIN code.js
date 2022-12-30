// ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain anything but exactly 4 digits or exactly 6 digits.

// If the function is passed a valid PIN string, return true, else return false.

// Examples (Input --> Output)
// "1234"   -->  true
// "12345"  -->  false
// "a234"   -->  false

function validatePIN(pin) {
  //   1. Check if the length of the string === 6||4 otherwise, returns false;
  if (pin.length === 4 || pin.length === 6) {
    //   2. Again, check if character is integer? if yes => true else =>false;
    //   3. \D---> Matches characters except digit/integers. but now it accepts using the not(!) operator.
    if (!pin.match(/\D/g)) return true;
    else return false;
  } else return false;
}
