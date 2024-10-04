// На HTML-сторінці є ненумерований список з id="list", який складається із 5 елементів.
// За допомогою засобів Dom доступитись до усіх елементів списку та отримати текст в черговості
// перший елемент - змінна firstEl
// останній елемент - змінна lastEl
// другий елемент - змінна secondEl
// четвертний елемент - змінна fourthEl
// третій елемент - змінна thirdEl


//Твій код має бути тут

const list = document.getElementById("list");

const firstEl = list.firstElementChild.textContent;
const lastEl = list.lastElementChild.textContent;
const secondEl = list.children[1].textContent;
const fourthEl = list.children[3].textContent;
const thirdEl = list.children[2].textContent;

// Не видаляй наступні рядки, вони потрібні для запуску тестів
module.exports = {
  firstEl,
  lastEl,
  secondEl,
  fourthEl,
  thirdEl,
};
