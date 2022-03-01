const ingredients = [
    'Potatoes',
    'Mushrooms',
    'Garlic',
    'Tomatos',
    'Herbs',
    'Condiments',
  ];

  
  const ingredientsList = document.querySelector('.ingredients');
  const memoryedItems = ingredients.map(elementListCreator);
  ingredientsList.append(...memoryedItems);
  ingredientsList.classList.add('list')

  

  function elementListCreator (ingredient) {
    const newListItem = document.createElement('li');
    newListItem.classList.add('item');
    newListItem.textContent = ingredient
    return newListItem
  }