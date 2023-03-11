const boxesChangeEl = document.querySelector('#boxes');
// Звертаємось до елементу з id boxes
const btnCreateEl = document.querySelector('button[data-create]');
// Звертаємось до елементу з тегом button[data-create]
const btnDestroyEl = document.querySelector('button[data-destroy]');
// Звертаємось до елементу з тегом button[data-destroy]

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}
// Функція рандомного кольору.

function getAmount() {
  const amountEl = document.querySelector('#controls input').value;
  createBoxes(amountEl);
}

// Функція яка зберігає суму(кількість) елементів яку ввів юзер в змінній amountEl та передаємо ії чк параметр у функцію createBoxes .

function createBoxes(amountEl) {
  let localBox = [];
  let localSizesDiv = 30;
  for (let i = 0; i < amountEl; i += 1) {
    localBox.push(
      `<div class = "boxes__div" style=" background-color : ${getRandomHexColor()}; 
      height : ${localSizesDiv}px; 
      width : ${localSizesDiv}px"> №${i + 1} </div>`,
    );
    localSizesDiv += 10;
  }
  boxesChangeEl.insertAdjacentHTML('afterbegin', localBox.join(''));
}
// Прописуємо початкові дані
// Перебираємо усю кількість елементів. яку ввів юзер.
// через push добавляємо сутність div
// через insertAdjacentHTML та join вствляємо в розмітку HTML - також вказуємо місце куди.
// 'beforebegin': до самого element (до открывающего тега).
// 'afterbegin': сразу после открывающего тега element (перед первым потомком).
// 'beforeend': сразу перед закрывающим тегом element (после последнего потомка).
// 'afterend': после element (после закрывающего тега).

function destroyBoxes() {
  while (boxesChangeEl.firstChild) {
    boxesChangeEl.removeChild(boxesChangeEl.firstChild);
  }
}



btnCreateEl.addEventListener('click', getAmount);
// Додаєм слухача події click на кнопку Create
btnDestroyEl.addEventListener('click', destroyBoxes);
// Додаєм слухача події click на кнопку Destroy
