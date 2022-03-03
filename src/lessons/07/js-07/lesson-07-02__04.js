const l07p02e04_imageCollection = document.querySelectorAll('.lesson-07-02__04 .feed__item img');
const l07p02e04_imageDescrItems = document.querySelectorAll('.lesson-07-02__04 .feed__item p');

l07p02e04_imageCollection.forEach((img) => {
    img.setAttribute('data-src', img.src);
    img.classList.add('lazyload');
    img.addEventListener('load', l07p02e04_onImageloaded, { once: true})
    img.removeAttribute('src');
   })
l07p02e04_imageDescrItems.forEach(d => d.classList.add('descr'))

function l07p02e04_onImageloaded (event) {
   event.target.classList.add('appear');
}