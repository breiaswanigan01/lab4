"use strict";
//1

let drinks = document.querySelectorAll(".soda");
// variable to modify from HTML
let total = document.querySelector(".price");
// keep track of amount
let currentTotal = 0;

// buttons hold a nodeList
drinks.forEach((drink) => {
  // if you hear a click, do this:
  drink.addEventListener("click", () => {
    // gets the amount associated with the class
    //Number. = turns to a number also
    let prices = parseInt(drink.getAttribute("data-amount"));
    currentTotal += prices;
    total.innerText = currentTotal;
  });
});

//2
let coinForm = document.querySelector(".form");
let container = document.querySelector(".coin-container");

coinForm.addEventListener("submit", (event) => {
  // doesn't refresh the page when buttons are clicked/ submitted
  event.preventDefault();
  //obtain data from form // name of form goes in parentheses
  const data = new FormData(coinForm);
  let amount = data.get("quantity");
  let coin = data.get("coins");
  for (let i = 0; i < amount; i++) {
    let coinDiv = document.createElement("div");
    // to style // you could put coin to get each class as
    // their classified class (quarter class = quarter)
    coinDiv.classList.add("coin-div");
    coinDiv.innerText = coin;
    //append adds the coinDiv to the container variable
    container.append(coinDiv);
    // removing coins when clicked
    newCoin.addEventListener("click", () => {
      newCoin.remove();
    });
  }
  // wipes out input field
  coinForm.reset();
});

//3

let bulb = document.querySelector(".bulb");
let onButton = document.querySelector(".on");
let offButton = document.querySelector(".off");
let toggleButton = document.querySelector(".toggle");
let endButton = document.querySelector(".end");
onButton.addEventListener("click", () => {
  bulb.classList.add("light");
});
offButton.addEventListener("click", () => {
  bulb.classList.remove("light");
});
toggleButton.addEventListener("click", () => {
  bulb.classList.remove("light");
});
endButton.addEventListener("click", () => {
  bulb.remove("light");
  let buttons = document.querySelectorAll(".switch");
  buttons.forEach((button) => {
    button.disabled = true;
  });
});
