"use strict";

//Selector
const nameInput = document.querySelector("#nameInput");
const dateInput = document.querySelector("#dateInput");
const amountInput = document.querySelector("#amountInput");
const addExpenseBtn = document.querySelector("#add_expense_button");
const form = document.querySelector("#formID");

//Listener
// addExpenseBtn.addEventListener("click", function () {
//   console.log("Lee Zwe");
// });

form.addEventListener("submit", function (event) {
  event.preventDefault();
  console.log(nameInput.value, dateInput.value, amountInput.value);
});
