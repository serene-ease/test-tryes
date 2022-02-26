const actionBtnRef = document.querySelector('.actionBtn');
const clearBtnRef = document.querySelector('.delAtributeBtn');

actionBtnRef.addEventListener('click', () => {
    const imageRef = document.querySelector('.hero__image');
    console.log(imageRef.src);
    imageRef.src = "https://dictionary.cambridge.org/ru/images/full/cat_noun_001_02368.jpg?version=5.0.213";
    imageRef.alt = "grey cat";
    
    actionBtnRef.textContent = "done"
    actionBtnRef.classList.toggle('completed', 'done')
})

clearBtnRef.addEventListener('click', () => {
    const imageRef = document.querySelector('.hero__image');
    console.log(imageRef.src);
    imageRef.src = "";
    imageRef.alt = "";
})

actionsBtnRef = document.querySelectorAll('.js-actions .btn');
/*
console.log(actionsBtnRef);
console.log('"dataset"')
console.log(actionsBtnRef[0].dataset.act);
console.log(actionsBtnRef[1].dataset.act);
console.log(actionsBtnRef[2].dataset.act);
console.log('"getAttribute"')
console.log(actionsBtnRef[0].getAttribute('data-act'));
console.log(actionsBtnRef[1].getAttribute('data-act'));
console.log(actionsBtnRef[2].getAttribute('data-act'));
*/
/*
console.log('"For" by "dataset"')
for (let index = 0; index < actionsBtnRef.length; index++) {
    console.log(actionsBtnRef[index].dataset.act)
}
console.log('"For" by "getAttribute"')
for (let index = 0; index < actionsBtnRef.length; index++) {
    console.log(actionsBtnRef[index].getAttribute('data-act'))
}
*/
// """forEach""" will be the best for this action
console.log('//////////// Dataset \\\\\\\\\\\\');
actionsBtnRef.forEach( a => console.log(a.dataset.act));

console.log("//////////// getAttribute \\\\\\\\\\\\");
actionsBtnRef.forEach( a => console.log(a.getAttribute('data-act')));
