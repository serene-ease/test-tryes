import tech from "./techObject"

const refs = {
    l07p02e02_userInput:  document.querySelector('.lesson-07-02__02 #filter'),
    l07p02e02_list: document.querySelector('.lesson-07-02__02 .js-list'),
}

// refs.l07p02e02_list.innerHTML = createListItemMarkup(tech)
const l07p02e02_markupCreated = createListItemMarkup(tech);
// refs.l07p02e02_list.insertAdjacentHTML = l07p02e02_markupCreated; // not created.... why?
refs.l07p02e02_list.innerHTML = l07p02e02_markupCreated;

// refs.l07p02e02_userInput.addEventListener('input', l07p02e02_onFilterChange)
// refs.l07p02e02_userInput.addEventListener('input', _.throttle(l07p02e02_onFilterChange), 300);
refs.l07p02e02_userInput.addEventListener('input', _.debounce(l07p02e02_onFilterChange, 200));
/// fuzzy search to find through mistakes (fuse.js)


function createListItemMarkup (items)  {
    return items.map(item => `<li>${item.label}</li>`).join('');
}

function l07p02e02_onFilterChange (e) {
    const l07p02e02_filter = e.target.value.toLowerCase()
    const l07p02e02_filteredItems = tech.filter(t => 
        t.label.toLowerCase().includes(l07p02e02_filter))

    console.log(l07p02e02_filteredItems);    
    const l07p02e02_listItemsMarkup = createListItemMarkup(l07p02e02_filteredItems);
    // console.log(l07p02e02_listItemsMarkup);
    refs.l07p02e02_list.innerHTML = l07p02e02_listItemsMarkup;
}