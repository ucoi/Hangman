//letters
const letters = "abdcefghijklmnopqrztuvwxyz";
// 5alethom array
let lettersArray = Array.from(letters);
// i took letetrs class
let lettersContainer = document.querySelector(".letters");
// geneerate el letters
lettersArray.forEach((letter) => {
  // create span
  let span = document.createElement("span");
  // create text node
  let theLetter = document.createTextNode(letter);
  // append the theLetter to span
  span.appendChild(theLetter);
  // add class
  span.className = "letter-box";
  // append the span to the lettersContainer
  lettersContainer.appendChild(span);
});

// object of words + category
let words = {
  programming: ["php", "javascript", "go", "scala", "fortran"],
  movies: ["inception", "parasite", "interstellar", "whiplash", "memento"],
  people: ["albert einstein", "hitchcock", "alexander", "cleopatra"],
  countries: ["syria", "palenstine", "lebanon", "egypt"],
};

// get random property
let allKeys = Object.keys(words);

let randomPropNumber = Math.floor(Math.random() * allKeys.length);
let randomPropName = allKeys[randomPropNumber];
let randomPropValue = words[randomPropName];

console.log(randomPropValue);
