"use strict";
//1
let drinks = document.querySelectorAll(".soda");

let total = document.querySelector(".price");

let currentTotal = 0;

drinks.forEach((drink) => {
  drink.addEventListener("click", () => {
    let prices = parseInt(drink.getAttribute("data-amount"));
    currentTotal += prices;
    total.innerText = currentTotal;
  });
});

//2
let coinForm = document.querySelector(".form");
let container = document.querySelector(".coin-container");

coinForm.addEventListener("submit", (event) => {
  event.preventDefault();
  //obtain data from form
  const data = new FormData(coinForm);
  let amount = data.get("quantity");
  let coin = data.get("coins");
  for (let i = 0; i < amount; i++) {
    let coinDiv = document.createElement("div");
    coinDiv.classList.add("coin-div");
    coinDiv.innerText = coin;
    container.append(coinDiv);
  }
  coinForm.reset();
});
