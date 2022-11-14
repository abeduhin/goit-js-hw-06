const inputFontSizeEl = document.querySelector('#font-size-control')
const abracadabraEl = document.querySelector('#text')
// Звертаємось до елементу з ID font-size-control
// Звертаємось до елементу з ID text

inputFontSizeEl.addEventListener('input', event => {
    abracadabraEl.style.fontSize = `${event.currentTarget.value }px`
});
// // Додаєм слухача події input та вказуэмо, що розмір шрифту спану дoрівнює значінню параметру event