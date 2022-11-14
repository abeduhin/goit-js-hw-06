const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const ulListEl = document.querySelector('.gallery');
// Звертаємось до списку елементів класу gallery

const creatureGallery = images
	.map(image => `<li><img class="picture" src=${image.url} width = '400' alt='${image.alt}'></img></li>`)
	.join('')
// Заносимо елементи до масиву рядків і робимо один великий рядок.

  ulListEl.insertAdjacentHTML('beforeend', creatureGallery);
// Заносимо в HTML (в кінець)
  
ulListEl.style.display = 'flex';
ulListEl.style.justifyContent = 'center';
ulListEl.style.flexWrap = 'column-reverse';
ulListEl.style.listStyle = 'none';
ulListEl.style.gap = '15px';
// Оздоблюємо CSS стилями

