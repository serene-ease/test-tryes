parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"Uam7":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.colorPickerOptions=void 0;const o=[{labes:"red",color:"#F44336"},{labes:"green",color:"#4CAF50"},{labes:"blue",color:"#2196F3"},{labes:"gray",color:"#607D8B"},{labes:"pink",color:"#E91E63"},{labes:"indigo",color:"#3F51B5"}];exports.colorPickerOptions=o;
},{}],"lZT3":[function(require,module,exports) {
"use strict";var t=require("./colorPicker.js");console.log("////////////////////////////////////////Color picker \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\");const e=document.createElement("section");e.classList.add("section");const n=document.createElement("div");n.classList.add("container");const o=document.createElement("div");o.classList.add("cpContainer");const c=t.colorPickerOptions.map(t=>{const e=document.createElement("button");return e.type="button",e.classList.add("cpBtn"),e.textContent=t.labes,e.style.backgroundColor=t.color,e});function r(t){return t.map(t=>{const e=document.createElement("button");return e.type="button",e.classList.add("cpBtn"),e.textContent=t.labes,e.style.backgroundColor=t.color,e})}o.append(...c),n.append(o),e.append(n),document.body.insertBefore(e,document.querySelector(".point"));
},{"./colorPicker.js":"Uam7"}]},{},["lZT3"], null)
//# sourceMappingURL=/test-tryes/colorPickerSection.563d0053.js.map