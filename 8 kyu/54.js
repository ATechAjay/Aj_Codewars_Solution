const data = {
  english: "Welcome",
  czech: "Vitejte",
  danish: "Velkomst",
  dutch: "Welkom",
  estonian: "Tere tulemast",
  finnish: "Tervetuloa",
  flemish: "Welgekomen",
  french: "Bienvenue",
  german: "Willkommen",
  irish: "Failte",
  italian: "Benvenuto",
  latvian: "Gaidits",
  lithuanian: "Laukiamas",
  polish: "Witamy",
  spanish: "Bienvenido",
  swedish: "Valkommen",
  welsh: "Croeso",
};

function greet(language) {
  // 1. Check if the key of the object === language.
  for (const key in data) {
    if (key === language) {
      return data[key];
    }
  }
  //   2. CHeck if the key is !== language.
  for (const key in data) {
    if (key !== language) {
      return data.english;
    }
  }
}

const test = greet("welsh"); //, 'Welcome',
console.log(test);
// greet("dutch"); //, "Welkom";
// greet("IP_ADDRESS_INVALID"); //, 'Welcome'

// 2 x 10 = 20
// 2 x 9 = 18
// 2 x 8 = 16
// 2 x 7 = 14
// 2 x 6 = 12
// 2 x 5 = 10
// 2 x 4 = 8
// 2 x 3 = 6
// 2 x 2 = 4
// 2 x 1 = 2
