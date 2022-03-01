const ht06t07_sliderRef = document.querySelector('.task-07.lesson__06 #font-size-control');
const ht06t07_textRef = document.querySelector('.task-07.lesson__06 #text');
ht06t07_sliderRef.addEventListener('change', ht06t07_onChange);

function ht06t07_onChange () {
    // console.log(ht06t07_sliderRef.value)
    ht06t07_textRef.style.fontSize = `${ht06t07_sliderRef.value}px`
}