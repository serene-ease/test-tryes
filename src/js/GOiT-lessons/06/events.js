console.log("/////////Here will be 'events-lection' \\\\\\\\\\" );

const modal__refs = {
    openModalBtn: document.querySelector('.js-open-modal'),
    closeModalBtn: document.querySelector('.js-close-btn'),
    backdrop: document.querySelector('.js-backdrop'),
}
function onModalOpen () {
    window.addEventListener('keydown', onEscKeyDown);
    modal__refs.backdrop.classList.remove('is-hidden');
}
function onCloseModal () {
    window.removeEventListener('keydown', onEscKeyDown);
    modal__refs.backdrop.classList.add('is-hidden');
}
function onBackBropClick (event) {
    if (event.currentTarget === event.target) {
        console.log('закрытие по клику в backdrop');
        onCloseModal();
    }
}
function onEscKeyDown (event) {
    const ESC_KEY_CODE = 'Escape';
    const isEscKey = event.code === ESC_KEY_CODE;
    if (isEscKey) {onCloseModal()}
}

modal__refs.openModalBtn.addEventListener('click', onModalOpen);
modal__refs.closeModalBtn.addEventListener('click', onCloseModal);
modal__refs.backdrop.addEventListener('click', onBackBropClick)


/*
form__refs = {

}
*/