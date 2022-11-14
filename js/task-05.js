const textNameInputEl = document.querySelector('#name-input')
const textNameOutputEl = document.querySelector('#name-output')
// Звертаємось до елементу з ID name-input.
// Звертаємось до елементу з ID output.

textNameInputEl.addEventListener('input', event => {
	textNameOutputEl.textContent = event.currentTarget.value

	if (event.target.value === '') {
		textNameOutputEl.textContent = 'Anonymous'
	}
})
// Додаєм слухача події input та вказуємо умову, якщо текст є то він добавиться в span, якщо нема, то Anonymous