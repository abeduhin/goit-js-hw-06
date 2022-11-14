const categoriesListEl = document.querySelectorAll('.item');
// Звертаємось до списку елементів класу item
console.log(`Number of categories: ${categoriesListEl.length}`)
// Виводимо в консоль кількість категорій елементів через шаблонний рядок
categoriesListEl.forEach(item => {
    console.log(`Category: ${item.firstElementChild.textContent}`);
    console.log(`Elements: ${item.lastElementChild.children.length}`)
});
// Перебираєм усі елементи та виводимо у консоль через шаблонний рядок: 1. - тестовий контент кожної категорії(перший дочірній елемнент). 2. - кількість елементів в цій категорії (останній дочірний елемент, загальна кількість)
 
