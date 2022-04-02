const inputElement = document.getElementById("input");
const btnElement = document.getElementById("btn");
const ulElement = document.querySelector("ul");
const deleteBtnElement = document.createElement("button");
deleteBtnElement.setAttribute("class", "deleteBtn");
deleteBtnElement.appendChild(document.createTextNode("X"));

let newToDoValue;
//get the input value
inputElement.addEventListener("change", (e) => {
  newToDoValue = e.target.value;
});
//create new li
btnElement.addEventListener("click", () => {
  const newLiElement = document.createElement("li");
  newLiElement.appendChild(document.createTextNode(newToDoValue));
  newLiElement.appendChild("deleteBtnElement");
  ulElement.appendChild(newLiElement);
  inputElement.value = "";
  newToDoValue = "";
});
