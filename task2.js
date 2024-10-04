// Допишіть функцію applyStyles, щоб простилізувати елементи як показано на картинці task2.png

function applyStyles() {
     document.getElementById("title").style.backgroundColor = "lightgreen";
     const myDiv = document.getElementById("myDiv");
     const firstListElement = myDiv.firstElementChild;
     const secondListElement = myDiv.children[1];
     const thirdListElement = myDiv.children[2];
     const lastListElement = myDiv.lastElementChild;
     const myList = document.getElementById("myList");
     const spanElement = document.querySelector(".style_elements span");
 
     firstListElement.style.fontWeight = "700";
     secondListElement.style.color = "red";
     thirdListElement.style.textDecoration = "underline";
     lastListElement.style.fontStyle = "italic";
     myList.style.listStyle = "none";
     myList.style.display = "flex";
     spanElement.style.display = "none";
 }
 

//Не видаляй наступні рядки, вони потрібні для запуску тестів
applyStyles()
module.exports = applyStyles;
