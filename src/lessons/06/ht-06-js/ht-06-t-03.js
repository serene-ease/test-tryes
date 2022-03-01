const images = [
    {
      url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?dpr=2&h=750&w=1260',
      alt: 'White and Black Long Fur Cat',
    },
    {
      url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?dpr=2&h=750&w=1260',
      alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
    },
    {
      url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?dpr=2&h=750&w=1260',
      alt: 'Group of Horses Running',
    },
  ];
/*
  const imagesListRef = document.querySelector('.task-03.lesson__06 .gallery');
  const imagesStructure = images.map(imageElementMaker);
  imagesListRef.append(...imagesStructure);
*/
  /*
  function imageElementMaker (images) {
    const newListItem = document.createElement('li');
    newListItem.classList.add('item');
    const newImage = document.createElement('img');
    newImage.classList.add('gallery__image')
    newImage.setAttribute('url', images.url);
    newImage.setAttribute('alt', images.alt);
    const newListedImage = newListItem.appendChild(newImage)
    return newListedImage;
  }
  */

  const imagesListRef = document.querySelector('.task-03.lesson__06 .gallery');
  const markup = images.map(createElement).join('');
  imagesListRef.insertAdjacentHTML("beforeend", markup)
  function createElement({url, alt}) {
      return `<li class="gallery__item"><img src="${url}" alt="${alt}" class="gallery__image"/> </li>`
  }