import tech from "./techObject"

const refs = {
    l07p02e02_userInput:  document.querySelector('.lesson-07-02__02 #filter'),
    l07p02e02_list: document.querySelector('.lesson-07-02__02 .js-list'),
}

// refs.l07p02e02_list.innerHTML = createListItemMarkup(tech)
const l07p02e02_markupCreated = createListItemMarkup(tech);
// refs.l07p02e02_list.insertAdjacentHTML = l07p02e02_markupCreated; // not created.... why?
refs.l07p02e02_list.innerHTML = l07p02e02_markupCreated;

refs.l07p02e02_userInput.addEventListener('input', l07p02e02_onFilterChange)

function createListItemMarkup (items)  {
    return items.map(item => `<li>${item.label}</li>`).join('');
}

function l07p02e02_onFilterChange (e) {
    console.log(e.target.value)
}