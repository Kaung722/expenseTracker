"use strict";

//Selector
const nameInput = document.querySelector("#nameInput");
const dateInput = document.querySelector("#dateInput");
const amountInput = document.querySelector("#amountInput");
const addExpenseBtn = document.querySelector("#add_expense_button");
const deleteBtn = document.querySelector(".delete_btn");
const form = document.querySelector("#formID");
let expenseTable = document.querySelector(".expense_table");

//Listener
form.addEventListener("submit", addExpense);
expenseTable.addEventListener("click", removeExpense);

//function
function addExpense(event) {
  event.preventDefault();
  console.log(nameInput.value, dateInput.value, amountInput.value);
  const newExpense = `
  <tr>
          <td class="output">${nameInput.value}</td>
          <td class="output">${dateInput.value}</td>
          <td class="output">${amountInput.value}</td>
          <td><button class="delete_btn">"❌"</button></td>
        </tr>`;
  // let nameCell = document.createElement("td");
  // let dateCell = document.createElement("td");
  // let amountCell = document.createElement("td");
  // let deleteCell = document.createElement("button");
  // nameCell.appendChild(document.createTextNode(nameInput.value));
  // dateCell.appendChild(document.createTextNode(dateInput.value));
  // amountCell.appendChild(document.createTextNode(amountInput.value));
  // deleteCell.appendChild(document.createTextNode("❌"));
  // deleteCell.classList.add("delete_btn");
  // let newRow = document.createElement("tr");
  // newRow.appendChild(nameCell);
  // newRow.appendChild(dateCell);
  // newRow.appendChild(amountCell);
  // newRow.appendChild(deleteCell);
  expenseTable.insertAdjacentHTML("beforeend", newExpense);
}

function removeExpense(event) {
  if (event.target.className === "delete_btn")
    event.target.parentNode.parentNode.remove();
}
