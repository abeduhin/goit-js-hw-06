const loginControlFormEl = document.querySelector('.login-form')
// Звертаємось до елементу з класом login-form.

 loginControlFormEl.addEventListener('submit', handleSubmit)

 // Додаєм слухача події sabmit та об'єкт, який приймає.що подія трапилась

function handleSubmit(event) {
    event.preventDefault()
// Знімаємо поведінку по замовчуванню.
    let {
        elements: { email, password }
    } = event.currentTarget
// Присваїваємо властивостї email та password як элементу де відбувається подія

    if (email.value === '' || password.value === '') {
        return alert('Please fill in all the fields form!')
    };
// Пишемо умову, якщо форма пуста, то виводимо рядок.
    const userDetailsForm = { Email: email.value, Password: password.value }
    
    console.log(userDetailsForm);
// Якщо не пуста виводимо об'єкт в консоль.
    event.currentTarget.reset()
// Після цього очищаємо форму.
}


