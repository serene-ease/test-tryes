const inputedStringRef = document.querySelector('.task-05.lesson__06 #name-input')
const outputedDataRef =  document.querySelector('.task-05.lesson__06 #name-output')

inputedStringRef.addEventListener('input', onInput);

function onInput () {
    if (outputedDataRef.textContent)
    outputedDataRef.textContent = inputedStringRef.value  
    else outputedDataRef.textContent = 'Anonymous'
}