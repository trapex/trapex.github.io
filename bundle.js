(()=>{"use strict";var e={};e.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),(()=>{var t;e.g.importScripts&&(t=e.g.location+"");var n=e.g.document;if(!t&&n&&(n.currentScript&&(t=n.currentScript.src),!t)){var r=n.getElementsByTagName("script");if(r.length)for(var o=r.length-1;o>-1&&(!t||!/^http(s?):/.test(t));)t=r[o--].src}if(!t)throw new Error("Automatic publicPath is not supported in this browser");t=t.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),e.p=t})(),e.p,e.p,e.p,e.p,e.p,e.p,e.p,e.p,e.p,e.p,e.p,e.p,e.p,e.p,e.p,e.p,e.p,e.p,e.p,e.p,e.p,e.p,e.p,e.p,e.p,e.p,e.p,e.p,e.p,e.p,e.p,e.p,e.p,e.p,e.p,e.p,e.p,e.p,e.p,e.p,e.p,e.p,e.p,e.p,e.p,e.p,document.addEventListener("DOMContentLoaded",(function(){var e=0,t=document.querySelectorAll(".slider__item"),n=document.querySelector(".slider__dots");function r(n){e=(n+t.length)%t.length;for(var r=0;r<t.length;r++)t[r].style.display="none";t[e].style.display="flex",document.querySelectorAll(".dot").forEach((function(t,n){n===e?t.classList.add("active"):t.classList.remove("active")}))}t.forEach((function(e,t){var o=document.createElement("span");o.classList.add("dot"),o.addEventListener("click",(function(){r(t)})),n.appendChild(o)})),r(e),setInterval((function(){r(++e)}),3e3)})),document.addEventListener("DOMContentLoaded",(function(){var e=0,t=document.querySelectorAll(".photoslider__item"),n=document.querySelector(".photoslider__wrap");function r(r){e=(r+t.length)%t.length,n.style.transform="translateX(-".concat(100*e,"%)")}function o(){r(++e)}window.prevPhotoSlide=function(){r(--e)},window.nextPhotoSlide=o,r(e),setInterval((function(){o()}),3e3)})),document.addEventListener("DOMContentLoaded",(function(){var e=JSON.parse(localStorage.getItem("flippedCards"))||{};document.querySelectorAll(".congrats__card").forEach((function(t){var n=t.id,r=t.querySelector(".congrats__card-wrap"),o=t.querySelector(".congrats__name"),i=t.dataset.name;function a(e,t){var n=document.getElementById("videoModal"),r=document.getElementById("videoCongrats"),o=n.querySelector(".close"),i=n.querySelector(".video__text");r.src=e,i.innerText=t,n.style.display="block",o.addEventListener("click",(function(){r.pause(),n.style.display="none"})),window.addEventListener("click",(function(e){e.target==n&&(r.pause(),n.style.display="none")}))}e[n]&&(r.style.transform="rotateY(180deg)",t.setAttribute("data-flipped","true"),o.innerText=i),t.addEventListener("click",(function(){var c=t.getAttribute("data-flipped"),p=t.dataset.video;"false"===c?(r.style.transform="rotateY(180deg)",t.setAttribute("data-flipped","true"),e[n]=!0,localStorage.setItem("flippedCards",JSON.stringify(e)),o.innerText=i,setTimeout((function(){a(p,i)}),1e3)):a(p,i)}))}))}))})();