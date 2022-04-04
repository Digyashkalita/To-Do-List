const inputElement = document.getElementById("input");
const btnElement = document.getElementById("btn");
const ulElement = document.querySelector("ul");
const form = document.getElementById("form");

//Create New li
function createNewLi(newToDo) {
  //create new li
  const newLi = document.createElement("li");
  newLi.appendChild(document.createTextNode(newToDo));

  //create span element
  const spanElement = document.createElement("span");
  spanElement.classList.add("actionBtn");
  newLi.appendChild(spanElement);
  //create edit btn
  const editBtn = document.createElement("button");
  editBtn.appendChild(document.createTextNode("edit"));
  editBtn.setAttribute("id", "editBtn");
  spanElement.appendChild(editBtn);
  //create delete btn
  const deleteBtn = document.createElement("button");
  deleteBtn.appendChild(document.createTextNode("delete"));
  deleteBtn.setAttribute("id", "deleteBtn");
  spanElement.appendChild(deleteBtn);
  //append  newLi to ul
  ulElement.appendChild(newLi);

  inputElement.value = "";
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
