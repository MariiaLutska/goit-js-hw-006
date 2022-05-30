// Створи змінну counterValue, в якій буде зберігатися поточне значення лічильника та ініціалізуй її значенням 0.
// Додай слухачів кліків до кнопок, всередині яких збільшуй або зменшуй значення лічильника.
// Оновлюй інтерфейс новим значенням змінної counterValue.
const counter = {
    value: 0,
    increment() {
        console.log('increment => this', this);
        this.value += 1;
    },
    decrement() {
        console.log('decrement => this', this);
        this.value -= 1;
    },
};


const decrementBtn = document.querySelector('[data-action="decrement"]');
const incrementBtn = document.querySelector('[data-action="increment"]');
const valueEl = document.querySelector('#value');

decrementBtn.addEventListener('click', function () {
    console.log("decrement");

    counter.decrement();
    console.log(counter);
    valueEl.textContent = counter.value;
});

incrementBtn.addEventListener('click', function () {
    console.log("increment");

    counter.increment();
    console.log(counter);
    valueEl.textContent = counter.value;
});