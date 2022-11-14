const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ulEl = document.querySelector('#ingredients');
// Звертаємось до елементу з ID ingredients
const liArray = [];

ingredients.forEach(ingredient => {
	const itemEl = document.createElement('li')
	itemEl.className = 'item'
	itemEl.textContent = ingredient
	liArray.push(itemEl)
});
// Добавляємо тег li. class = item, текст від ісходника, та добавляємо в пустий массив.

ulEl.append(...liArray)
// вставляємо в кінець
