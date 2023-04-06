/** @format */

let homeScoreDisplay = document.querySelectorAll("h3")[0];
let guestScoreDisplay = document.querySelectorAll("h3")[1];

// getting the buttons
let allLeftBtns = document.querySelectorAll(".left-btns button");
let allRightBtns = document.querySelectorAll(".right-btns button");


// function checkHigher() {
//   if (homeNumber > guestNumber) {
//     homeScoreDisplay.style.backgroundColor = "blue";
//     guestScoreDisplay.style.backgroundColor = "black";
//   } else if (homeNumber < guestNumber) {
//     guestScoreDisplay.style.backgroundColor = "blue";
//     homeScoreDisplay.style.backgroundColor = "black";
//   }
// }

// adding eventlisteners to the buttons

// left-side
let homeNumber = 0;
let guestNumber = 0;

allLeftBtns[0].addEventListener("click", () => {
  homeNumber++;
  //   homeNumber = homeNumber + 1
  homeScoreDisplay.textContent = homeNumber;
  checkHigher();
});

allLeftBtns[1].addEventListener("click", () => {
  //   homeNumber++;
  //   homeNumber++;
  homeNumber = homeNumber + 2;
  // homeNumber+=2
  homeScoreDisplay.textContent = homeNumber;
  checkHigher();
});

allLeftBtns[2].addEventListener("click", () => {
  homeNumber = homeNumber + 3;
  homeScoreDisplay.textContent = homeNumber;
  checkHigher();
});

// right-side

allRightBtns[0].addEventListener("click", () => {
  guestNumber++;
  guestScoreDisplay.textContent = guestNumber;
  checkHigher();
});
allRightBtns[1].addEventListener("click", () => {
  guestNumber++;
  guestNumber++;
  guestScoreDisplay.textContent = guestNumber;
  checkHigher();
});
allRightBtns[2].addEventListener("click", () => {
  guestNumber++;
  guestNumber++;
  guestNumber++;
  guestScoreDisplay.textContent = guestNumber;
  checkHigher();
});

let newGame = document.querySelector(".new-game");

newGame.addEventListener("click", function () {
  homeNumber = 0;
  guestNumber = 0;
  homeScoreDisplay.textContent = homeNumber;
  guestScoreDisplay.textContent = guestNumber;
});

