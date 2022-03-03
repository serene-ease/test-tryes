const l07p02e03_lazyImages = document.querySelectorAll('img[loading="lazy"]');
// console.log(l07p02e03_lazyImages)

l07p02e03_lazyImages.forEach( image => {
    image.addEventListener('load', l07p02e03_onImageloaded, { once: true})});

function l07p02e03_onImageloaded (event) {
   event.target.classList.add('appear');
}