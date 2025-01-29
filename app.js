//letters
const letters = "abdcefghijklmnopqrstuvwxyz";
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
  people: ["albertEinstein", "hitchcock", "alexander", "cleopatra"],
  countries: ["syria", "palenstine", "lebanon", "egypt"],
};

// get random property
let allKeys = Object.keys(words);
//random number depends on keys length
let randomPropNumber = Math.floor(Math.random() * allKeys.length);
//category
let randomPropName = allKeys[randomPropNumber];
//category words
let randomPropValue = words[randomPropName];
//random number depend on words
let randomValueNUmber = Math.floor(Math.random() * randomPropValue.length);
//the chosen word
let randomValueValue = randomPropValue[randomValueNUmber];

//set category info
document.querySelector(".game-info .category span").innerHTML = randomPropName;

// select letters guess container
let lettersGeussContainer = document.querySelector(".letter-guess");
//convert chosen word to array
let letterAndSpace = Array.from(randomValueValue);
// generate span depens on the chosen word
letterAndSpace.forEach((letter) => {
  let emptySpan = document.createElement("span");
  if (letter === "") {
    //add class to the span
    emptySpan.className = "with-space";
  }
  // append el span to the guess container
  lettersGeussContainer.appendChild(emptySpan);
});

//the chosen word
let chosenWord = Array.from(randomValueValue);
console.log(chosenWord);
//select guess span
let guessSpans = document.querySelectorAll(".letter-guess span");

//set wrong attempts
let wrongAttempts = 0;
//select the draw element
let theDraw = document.querySelector(".hangman-draw");

// handle clicking on the letters
document.addEventListener("click", (e) => {
  // set the chose status
  let theStatus = false;

  if (
    e.target.className === "letter-box" &&
    !lettersContainer.classList.contains("finished")
  ) {
    e.target.classList.add("clicked");
    // get clicked letter
    let letterClicked = e.target.innerHTML.toLowerCase();
    // the chosen word
    chosenWord.forEach((wordLetter, wordIndex) => {
      // check if the clicked letter is in the chosen word
      if (letterClicked === wordLetter) {
        // set the status to true
        theStatus = true;

        // loop on all guess spans
        guessSpans.forEach((span, spanIndex) => {
          if (wordIndex === spanIndex) {
            span.innerHTML = wordLetter;
          }
        });
      }
    });
    // outside the loop
    console.log(theStatus);
    // if the letter is wrong
    if (!theStatus) {
      // increase the wrong attempts
      wrongAttempts++;

      // add class wrong on the draw
      theDraw.classList.add(`wrong-${wrongAttempts}`);

      if (wrongAttempts === 8) {
        endGame();
        lettersContainer.classList.add("finished");
      }
    }
  }
});

function endGame() {
  let div = document.createElement("div");
  let divText = document.createTextNode(
    `Game Over, the word is ${randomValueValue}`
  );
  div.appendChild(divText);

  div.className = "popup";

  document.body.appendChild(div);
}
