/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  console.log("Hello Caro!");

  let addToDoButton = document.getElementById("addToDo");
  let toDoContainer = document.getElementById("to-do-list");
  let inputfield = document.getElementById("inputfield");

  addToDoButton.addEventListener("click", function() {
    var text = document.createElement("li");
    text.innerText = inputfield.value;
    toDoContainer.appendChild(text);
    inputfield.value = "";
    toDoContainer.addEventListener("dblclick", function() {
      toDoContainer.removeChild(text);
    });
  });
};
