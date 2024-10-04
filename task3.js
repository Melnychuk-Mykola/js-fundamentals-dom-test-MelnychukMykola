// Допишіть скрипт у функцію applyStyles(), який за допомогою засобів DOM створить таку структуру з тегів і їх атрибутів.
//
//   <main class="mainClass check item">
//      <div id="myDiv">
//          <p>First paragraph</p>
//      </div>
//  </main>
//
// Цю розмітку потрібно вставити у існуючий html елемент із класом "create_elements"

function applyStyles() {
  const mainElement = document.createElement("main");
  mainElement.classList.add("mainClass", "check", "item");
  
  const divElement = document.createElement("div");
  divElement.id = "myDiv";

  const paragraphElement = document.createElement("p");
  paragraphElement.textContent = "First paragraph";

  divElement.appendChild(paragraphElement);
  mainElement.appendChild(divElement);

  const container = document.querySelector(".create_elements");
  container.appendChild(mainElement);
}

// Do not delete the following lines, they are needed for running tests
applyStyles();
module.exports = applyStyles;
