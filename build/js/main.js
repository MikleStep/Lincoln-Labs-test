!function(r){var n={};function i(e){if(n[e])return n[e].exports;var t=n[e]={i:e,l:!1,exports:{}};return r[e].call(t.exports,t,t.exports,i),t.l=!0,t.exports}i.m=r,i.c=n,i.d=function(e,t,r){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(i.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)i.d(r,n,function(e){return t[e]}.bind(null,n));return r},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="",i(i.s=0)}([function(e,t,r){"use strict";r.r(t),$(document).ready(function(){$(document).ready(function(){$(".blog__slider").slick({slidesToShow:2,slidesToScroll:1,autoplay:!1,autoplaySpeed:1500,arrows:!1,dots:!0,pauseOnHover:!1,responsive:[{breakpoint:780,settings:{slidesToShow:1}}]})}),function(){var e=document.getElementById("hamburger-menu-button"),t=e.getElementsByTagName("rect"),r=document.getElementById("mobile-menu");e.addEventListener("click",s);for(var n=document.getElementsByClassName("mobile-menu")[0].getElementsByTagName("a"),i=0;i<n.length;i++)n[i].addEventListener("click",s);function s(){"clicked"==e.classList?(e.classList.remove("clicked"),t[0].setAttribute("x","0"),t[0].setAttribute("y","0"),t[2].setAttribute("x","0"),t[2].setAttribute("y","20"),r.classList.add("hidden")):(e.classList.add("clicked"),t[0].setAttribute("x","4"),t[0].setAttribute("y","-1"),t[2].setAttribute("x","-13"),t[2].setAttribute("y","16"),r.classList.remove("hidden"))}function s(){"clicked"==e.classList?(e.classList.remove("clicked"),t[0].setAttribute("x","0"),t[0].setAttribute("y","0"),t[2].setAttribute("x","0"),t[2].setAttribute("y","20"),r.classList.add("hidden")):(e.classList.add("clicked"),t[0].setAttribute("x","4"),t[0].setAttribute("y","-1"),t[2].setAttribute("x","-13"),t[2].setAttribute("y","16"),r.classList.remove("hidden"))}}()})}]);