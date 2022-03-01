const ht06t09_sectionRef = document.querySelector('.task-09.lesson__06 .container');
const ht06t09_colorHexCodeOutputAreaRef = document.querySelector('.task-09.lesson__06 .container .color');
const ht06t09_changeColorBtn = document.querySelector('.task-09.lesson__06 .change-color');

ht06t09_changeColorBtn.addEventListener('click', ht06t09_colorChanger)



function ht06t09_colorChanger () {
    const ht06t09_currentColor = getRandomHexColor();
    ht06t09_sectionRef.style.background = ht06t09_currentColor
    ht06t09_colorHexCodeOutputAreaRef.textContent = ht06t09_currentColor
}
function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  }