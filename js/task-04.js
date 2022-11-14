let counterValue = 0;

const counterValueEl = document.querySelector('#value');
// Звертаємось до елементу з ID value.
const buttonDecrementEl = document.querySelector('button[data-action="decrement"]');
const buttonIncrementEl = document.querySelector('button[data-action="increment"]');
// // Звертаємось до елементів з data-action.

buttonDecrementEl.addEventListener('click', () => {
	counterValue--
	counterValueEl.textContent = counterValue
});
// Додаєм слухача події click на зменьшення та змінюємо текстове значення ісходного лічильника.

buttonIncrementEl.addEventListener('click', () => {
	counterValue++
	counterValueEl.textContent = counterValue
});

// Додаєм слухача події click на збільшення та змінюємо текстове значення ісходного лічильника.