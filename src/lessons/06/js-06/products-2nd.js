import products from './data/products'
console.log("////////////////////////////////////////Another way \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\");
// console.log(products);

function makeProductCard ({name, description, price}) {

const productRef = document.createElement('article');
productRef.classList.add('product');

const productNameRef = document.createElement('h2');
productNameRef.textContent = name;
productNameRef.classList.add('product__name');

const productDescrRef = document.createElement('p');
productDescrRef.textContent = description;
productDescrRef.classList.add('product__descr');

const productPriceRef = document.createElement('p');
productPriceRef.textContent = `Цена: ${price}`;
productPriceRef.classList.add('product__price');

productRef.append(productNameRef, productDescrRef, productPriceRef)

return productRef;
}
// console.log(makeProductCard(products[1]))
// productRef.append(productNameRef, productDescrRef, productPriceRef);
// console.log(productRef)

const elements = products.map(makeProductCard);
console.log(elements);

const productsContainerRef = document.querySelector('.js-products');
productsContainerRef.append(...elements);