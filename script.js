"use strict";

//Selector
const nameInput = document.querySelector("#nameInput");
const dateInput = document.querySelector("#dateInput");
const amountInput = document.querySelector("#amountInput");
const addExpenseBtn = document.querySelector("#add_expense_button");
const form = document.querySelector("#formID");
let expenseTable = document.querySelector(".expense_table");

//Listener
form.addEventListener("submit", function (event) {
  event.preventDefault();
  console.log(nameInput.value, dateInput.value, amountInput.value);

  let nameCell = document.createElement("td");
  let dateCell = document.createElement("td");
  let amountCell = document.createElement("td");
  let deleteCell = document.createElement("button");
  nameCell.appendChild(document.createTextNode(nameInput.value));
  dateCell.appendChild(document.createTextNode(dateInput.value));
  amountCell.appendChild(document.createTextNode(amountInput.value));
  deleteCell.appendChild(document.createTextNode("❌"));
  let newRow = document.createElement("tr");
  newRow.appendChild(nameCell);
  newRow.appendChild(dateCell);
  newRow.appendChild(amountCell);
  newRow.appendChild(deleteCell);
  expenseTable.appendChild(newRow);
});
