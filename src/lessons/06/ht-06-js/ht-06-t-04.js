const increaseBtn = document.querySelector(`button[data-action="increment"]`);
const decreaseBtn = document.querySelector(`button[data-action="decrement"]`);
const counter = document.querySelector('#value');

let counterValue = 0;

increaseBtn.addEventListener('click', () => {counterValue += 1; counter.textContent = counterValue});
decreaseBtn.addEventListener('click', () => {counterValue -= 1; counter.textContent = counterValue});