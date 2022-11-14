function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const buttonChangeColorEl = document.querySelector('button.change-color')
const bodyEl = document.querySelector('body')
const colorValueEl = document.querySelector('span.color')
// Звертаємось до елементу з тегом button, з класом change-color
// Звертаємось до елементу з тегом body, 
// Звертаємось до елементу з тегом span, з класом color


buttonChangeColorEl.addEventListener('click', e => {
// Додаєм слухача події click
  let randomColor = getRandomHexColor();
// Присвюємо змінной значення рандомної функції
  bodyEl.style.backgroundColor = randomColor;
// Присвюємо тегу body клас backgroundColor зі значенням коліру
  colorValueEl.textContent = randomColor;
// Присвюємо тегу span текстове значення коліру
})