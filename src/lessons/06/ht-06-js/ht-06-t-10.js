const ht06t10_inputAmountElementsRef = document.querySelector('.task-10.lesson__06 #controls > input');
const ht06t10_createBtn = document.querySelector('.task-10.lesson__06 #controls > input');
const ht06t10_destroyBtn = document.querySelector('.task-10.lesson__06 #controls > input');
const ht06t10_outputAreaRef = document.querySelector('.task-10.lesson__06 #boxes');

ht06t10_createBtn.addEventListener('click', ht06t10_onCreateClick);
ht06t10_destroyBtn.addEventListener('click', ht06t10_cleaner);

const amount = ht06t10_inputAmountElementsRef.value
 
function ht06t10_onCreateClick () {
if (amount) {
    return ht06t10_boxesMaker(amount);
    }
}

function ht06t10_boxesMaker(amount) {
 
        const ht06t10_newBoxesCollection = [];
        let ht06t10_boxSize = 30;
        
        for (let index = 0; amount; index++) {
         
        const ht06t10_newBox = document.createElement('div');
        
        ht06t10_newBox.style.width = `${ht06t10_boxSize}px`; // ht06t10_newBox.style.width = `${30 + 10 * index}px`; // ht06t10_newBoxe.style.width = ht06t10_boxSize + 'px';
        ht06t10_newBox.style.height = `${ht06t10_boxSize}px`; // ht06t10_newBox.style.height = `${30 + 10 * index}px`; // ht06t10_newBoxe.style.height = ht06t10_boxSize +'px';
        ht06t10_newBox.style = getRandomHexColor();

        ht06t10_newBoxesCollection.push(ht06t10_newBox);
        
        ht06t10_boxSize += 10;     
        }
        ht06t10_outputAreaRef.appendChild(...ht06t10_newBoxesCollection)
}

function ht06t10_cleaner() {
    ht06t10_outputAreaRef.innerHTML = "";
    // ht06t10_outputAreaRef.remove ???
}

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16222215).toString(16)}`;
  }