function e(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},o={},r=n.parcelRequired7c6;null==r&&((r=function(e){if(e in t)return t[e].exports;if(e in o){var n=o[e];delete o[e];var r={id:e,exports:{}};return t[e]=r,n.call(r.exports,r,r.exports),r.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,n){o[e]=n},n.parcelRequired7c6=r);var i=r("7Y9D8");const l=document.querySelector(".form"),u=document.querySelector("input[name=delay]"),a=document.querySelector("input[name=step]"),d=document.querySelector("input[name=amount]");function s(e,n){return new Promise(((t,o)=>{setTimeout((()=>{Math.random()>.3?t({position:e,delay:n}):o({position:e,delay:n})}),n)}))}l.addEventListener("submit",(function(n){n.preventDefault();let t=parseInt(u.value);const o=parseInt(a.value),r=parseInt(d.value);for(let n=1;n<=r;n+=1)s(n,t).then((({position:n,delay:t})=>{console.log(n),e(i).Notify.success(`✅ Fulfilled promise ${n} in ${t}ms`)})).catch((({position:n,delay:t})=>{e(i).Notify.failure(`❌ Rejected promise ${n} in ${t}ms`)})),t+=o}));
//# sourceMappingURL=03-promises.88ecb519.js.map
