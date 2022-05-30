// Обробка відправлення форми form.
// login - form повинна відбуватися відповідно до події submit.
// Під час відправлення форми сторінка не повинна перезавантажуватися.
// Якщо у формі є незаповнені поля, виводь alert з попередженням
//  про те, що всі поля повинні бути заповнені.
// Якщо користувач заповнив усі поля і відправив форму, 
// збери значення полів в об'єкт, де ім'я поля буде ім'ям властивості,
//  а значення поля - значенням властивості.
// Для доступу до елементів форми використовуй властивість elements.
// Виведи об'єкт із введеними даними в консоль і очисти значення полів форми методом reset.

const submitForm = document.querySelector('.login-form');
const submitButton = document.querySelector('button');
const emailField = document.querySelector('input[type="email"]').value;
const passwordField = document.querySelector('input[type="password"]').value;


let user = {
    email: '',
    password: '',
};
submitForm.addEventListener('submit', () => {
    if (emailField || passwordField === '') {
        alert('All field must be filled!!!');
    } else {
        user.email = emailField;
        user.password = passwordField;
    }
    return user;

    document.querySelector('.login-form').reset();
});

console.log(user);
