import { colorPickerOptions } from './colorPicker.js';

const colorPickerSectionRef = document.createElement('section');
colorPickerSectionRef.classList.add('section');
const colorPickerSectionContainerRef = document.createElement('div');
colorPickerSectionContainerRef.classList.add('container');
const colorPickerContainerRef = document.createElement('div');
colorPickerContainerRef.classList.add('cpContainer');


        ///////////// oldSchool by cycle \\\\\\\\\\\\\\
/*
    const elements = [];

    for (let i = 0; i < colorPickerOptions.length; i++) {
        const option = colorPickerOptions[i];
        const cpButton = document.createElement('button');

        cpButton.type = 'button';
        cpButton.classList.add('cpBtn');
        // cpButton.textContent = colorPickerOptions[i].labes;
        cpButton.textContent = option.labes;
        // cpButton.style.backgroundColor = colorPickerOptions[i].color;
        cpButton.style.backgroundColor = option.color;
    
        elements.push(cpButton)
    }

    // document.body.insertBefore(colorPickerSectionRef.append(colorPickerSectionContainerRef.append(colorPickerContainerRef.append(...elements))), document.body.lastElementChild)
    colorPickerContainerRef.append(...elements);
    colorPickerSectionContainerRef.append(colorPickerContainerRef);
    colorPickerSectionRef.append(colorPickerSectionContainerRef);
    document.body.insertBefore(colorPickerSectionRef, document.querySelector('.point'));
*/

////////////////////// By mapp method \\\\\\\\\\\\\\\\\\\\\\\\
const elements = colorPickerOptions.map(option => {
    const cpButton = document.createElement('button');

        cpButton.type = 'button';
        cpButton.classList.add('cpBtn');
        cpButton.textContent = option.labes;
        cpButton.style.backgroundColor = option.color;
        return cpButton
})
    
    colorPickerContainerRef.append(...elements);
    colorPickerSectionContainerRef.append(colorPickerContainerRef);
    colorPickerSectionRef.append(colorPickerSectionContainerRef);
    document.body.insertBefore(colorPickerSectionRef, document.querySelector('.point'));

    function makeColorPickerMarkup (options) 
        {
            return options.map(option => {
                const cpButton = document.createElement('button');
            
                    cpButton.type = 'button';
                    cpButton.classList.add('cpBtn');
                    cpButton.textContent = option.labes;
                    cpButton.style.backgroundColor = option.color;
                    return cpButton;})
        }
        