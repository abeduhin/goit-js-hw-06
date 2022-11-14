const textInputEl = document.querySelector('#validation-input')
// Звертаємось до елементу з ID validation-input
textInputEl.addEventListener('blur', event => {
// Додаєм слухача події blur 
	if (event.currentTarget.value.length == textInputEl.getAttribute('data-length')) {
		textInputEl.classList.add('valid')
		
	} else {
		if (textInputEl.classList.contains('valid')) {
			textInputEl.classList.remove('valid')
	}
		textInputEl.classList.add('invalid')
	}
})
// Та вказуємо умову, якщо дліна вводимого тексту дорівнює data-length, то додаємо клас valid, якщо ні то видаляємо клас valid та додаємо клас invalid.