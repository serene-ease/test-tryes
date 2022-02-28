console.log("////////////////////////////////////////Another theme \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\");
product =   {
    name: 'Сервоприводы',
    description:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa eius deleniti dolor facilis consectetur laborum aperiam exercitationem quam hic natus.',
    price: 2000,
    available: true,
    onSale: true,
  }

const productRef = document.createElement('article');
productRef.classList.add('product');

const productNameRef = document.createElement('h2');
productNameRef.textContent = product.name;
productNameRef.classList.add('product__name');

const productDescrRef = document.createElement('p');
productDescrRef.textContent = product.description;
productDescrRef.classList.add('product__descr');

const productPriceRef = document.createElement('p');
productPriceRef.textContent = `Цена: ${product.price}`;
productPriceRef.classList.add('product__price');

/*
console.log(productRef);
console.log(productNameRef);
console.log(productDescrRef);
console.log(productPriceRef);
*/
productRef.append(productNameRef, productDescrRef, productPriceRef);
console.log(productRef)