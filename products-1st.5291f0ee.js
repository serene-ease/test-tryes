parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"kSRi":[function(require,module,exports) {
console.log("////////////////////////////////////////Another theme \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\"),product={name:"Сервоприводы",description:"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa eius deleniti dolor facilis consectetur laborum aperiam exercitationem quam hic natus.",price:2e3,available:!0,onSale:!0};const e=document.createElement("article");e.classList.add("product");const t=document.createElement("h2");t.textContent=product.name,t.classList.add("product__name");const c=document.createElement("p");c.textContent=product.description,c.classList.add("product__descr");const o=document.createElement("p");o.textContent=`Цена: ${product.price}`,o.classList.add("product__price"),e.append(t,c,o),console.log(e);
},{}]},{},["kSRi"], null)
//# sourceMappingURL=/test-tryes/products-1st.5291f0ee.js.map