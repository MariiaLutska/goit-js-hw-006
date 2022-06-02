// Яка кількість смиволів повинна бути в інпуті, зазначається в його атрибуті data-length.
// Якщо введена правильна кількість символів, то border інпуту стає зеленим, якщо неправильна кількість - червоним.
// Для додавання стилів використовуй CSS-класи valid і invalid, які ми вже додали у вихідні файли завдання.


document.getElementById("validation-input").onblur = function() {
  console.log(this.value.length);
  if (parseInt(this.getAttribute('data-length')) === this.value.length) { 
    this.classList.remove('invalid');
    this.classList.add('valid');
  } else {
     this.classList.remove('valid');
    this.classList.add('invalid');
  }
};
