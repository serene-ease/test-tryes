const ht06t06_inputRef = document.querySelector('#validation-input');
ht06t06_inputRef.addEventListener('blur', ht06t06_lengthChecker);

function ht06t06_lengthChecker () {
    if (!ht06t06_inputRef.value.length) return;

    if (ht06t06_inputRef.classList.contains('valid')) {ht06t06_inputRef.classList.remove('valid')};
    if (ht06t06_inputRef.classList.contains('invalid')) {ht06t06_inputRef.classList.remove('invalid')};
    if (ht06t06_inputRef.dataset.length <= ht06t06_inputRef.value.length) {
        ht06t06_inputRef.classList.add('valid');
    }
    else {ht06t06_inputRef.classList.add('invalid')}
}