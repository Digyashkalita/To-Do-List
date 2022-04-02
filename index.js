const inputElement = document.getElementById("input");
const btnElement = document.getElementById("btn");
const ulElement = document.querySelector("ul");
const deleteBtnElement = document.createElement("button");
deleteBtnElement.setAttribute("class", "deleteBtn");
deleteBtnElement.appendChild(document.createTextNode("X"));
const form = document.getElementById("form");

//Create New li
function createNewLi(newToDo) {
  const newLi = document.createElement("li");
  newLi.appendChild(document.createTextNode(newToDo));
  newLi.appendChild(deleteBtnElement);
  //append  newLi to ul
  ulElement.appendChild(newLi);
}

//Add new To-Do
function addNewToDo() {
  let newToDo = inputElement.value;
  createNewLi(newToDo);
}

//Show Error
function showError() {
  console.log("first");
}
//Event listener
form.addEventListener("submit", (e) => {
  e.preventDefault();

  addNewToDo();
});
