!function(n){var e={};function t(o){if(e[o])return e[o].exports;var r=e[o]={i:o,l:!1,exports:{}};return n[o].call(r.exports,r,r.exports,t),r.l=!0,r.exports}t.m=n,t.c=e,t.d=function(n,e,o){t.o(n,e)||Object.defineProperty(n,e,{enumerable:!0,get:o})},t.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},t.t=function(n,e){if(1&e&&(n=t(n)),8&e)return n;if(4&e&&"object"==typeof n&&n&&n.__esModule)return n;var o=Object.create(null);if(t.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:n}),2&e&&"string"!=typeof n)for(var r in n)t.d(o,r,function(e){return n[e]}.bind(null,r));return o},t.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return t.d(e,"a",e),e},t.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},t.p="",t(t.s=12)}([function(n,e,t){"use strict";var o,r=function(){return void 0===o&&(o=Boolean(window&&document&&document.all&&!window.atob)),o},a=function(){var n={};return function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}n[e]=t}return n[e]}}(),i=[];function l(n){for(var e=-1,t=0;t<i.length;t++)if(i[t].identifier===n){e=t;break}return e}function s(n,e){for(var t={},o=[],r=0;r<n.length;r++){var a=n[r],s=e.base?a[0]+e.base:a[0],c=t[s]||0,d="".concat(s," ").concat(c);t[s]=c+1;var u=l(d),p={css:a[1],media:a[2],sourceMap:a[3]};-1!==u?(i[u].references++,i[u].updater(p)):i.push({identifier:d,updater:m(p,e),references:1}),o.push(d)}return o}function c(n){var e=document.createElement("style"),o=n.attributes||{};if(void 0===o.nonce){var r=t.nc;r&&(o.nonce=r)}if(Object.keys(o).forEach((function(n){e.setAttribute(n,o[n])})),"function"==typeof n.insert)n.insert(e);else{var i=a(n.insert||"head");if(!i)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");i.appendChild(e)}return e}var d,u=(d=[],function(n,e){return d[n]=e,d.filter(Boolean).join("\n")});function p(n,e,t,o){var r=t?"":o.media?"@media ".concat(o.media," {").concat(o.css,"}"):o.css;if(n.styleSheet)n.styleSheet.cssText=u(e,r);else{var a=document.createTextNode(r),i=n.childNodes;i[e]&&n.removeChild(i[e]),i.length?n.insertBefore(a,i[e]):n.appendChild(a)}}function g(n,e,t){var o=t.css,r=t.media,a=t.sourceMap;if(r?n.setAttribute("media",r):n.removeAttribute("media"),a&&btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),n.styleSheet)n.styleSheet.cssText=o;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(o))}}var h=null,f=0;function m(n,e){var t,o,r;if(e.singleton){var a=f++;t=h||(h=c(e)),o=p.bind(null,t,a,!1),r=p.bind(null,t,a,!0)}else t=c(e),o=g.bind(null,t,e),r=function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(t)};return o(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap)return;o(n=e)}else r()}}n.exports=function(n,e){(e=e||{}).singleton||"boolean"==typeof e.singleton||(e.singleton=r());var t=s(n=n||[],e);return function(n){if(n=n||[],"[object Array]"===Object.prototype.toString.call(n)){for(var o=0;o<t.length;o++){var r=l(t[o]);i[r].references--}for(var a=s(n,e),c=0;c<t.length;c++){var d=l(t[c]);0===i[d].references&&(i[d].updater(),i.splice(d,1))}t=a}}}},function(n,e,t){"use strict";n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t=function(n,e){var t=n[1]||"",o=n[3];if(!o)return t;if(e&&"function"==typeof btoa){var r=(i=o,l=btoa(unescape(encodeURIComponent(JSON.stringify(i)))),s="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(l),"/*# ".concat(s," */")),a=o.sources.map((function(n){return"/*# sourceURL=".concat(o.sourceRoot||"").concat(n," */")}));return[t].concat(a).concat([r]).join("\n")}var i,l,s;return[t].join("\n")}(e,n);return e[2]?"@media ".concat(e[2]," {").concat(t,"}"):t})).join("")},e.i=function(n,t,o){"string"==typeof n&&(n=[[null,n,""]]);var r={};if(o)for(var a=0;a<this.length;a++){var i=this[a][0];null!=i&&(r[i]=!0)}for(var l=0;l<n.length;l++){var s=[].concat(n[l]);o&&r[s[0]]||(t&&(s[2]?s[2]="".concat(t," and ").concat(s[2]):s[2]=t),e.push(s))}},e}},function(n,e,t){var o=t(0),r=t(3);"string"==typeof(r=r.__esModule?r.default:r)&&(r=[[n.i,r,""]]);var a={insert:"head",singleton:!1},i=(o(r,a),r.locals?r.locals:{});n.exports=i},function(n,e,t){(e=t(1)(!1)).push([n.i,'/* Layout & Content*/\n*,\n*::before,\n*::after {\n  box-sizing: border-box;\n}\n\n/* Remove default margin */\nbody,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\np,\nul,\nol,\nli,\nfigure,\nfigcaption,\nblockquote,\ndl,\ndd {\n  padding: 0;\n  margin: 0;\n}\n\nhtml {\n  font-size: 1px; /*for using REM units*/\n  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Fira Sans", "Droid Sans",\n    "Helvetica Neue", sans-serif;\n  scroll-behavior: smooth;\n  text-rendering: optimizeSpeed;\n}\n\nbody {\n  font-size: 16rem;\n  margin: 0;\n  min-height: 100vh;\n  line-height: 1.5;\n}\n\ntemplate,\n[hidden] {\n  display: none;\n}\n\ntextarea {\n  overflow: auto;\n}\n\nhr {\n  box-sizing: content-box;\n  height: 0;\n  overflow: visible;\n}\n\nimg {\n  border-style: none;\n  max-width: 100%;\n  display: block;\n}\n\n/* Typography */\n\ncite {\n  font-style: normal;\n}\n\nh1 {\n  font-size: 28rem;\n}\n\nh2 {\n  font-size: 24rem;\n}\n\nh3 {\n  font-size: 20rem;\n}\n\nh4 {\n  font-size: 16rem;\n}\n\nh5 {\n  font-size: 15rem;\n}\n\nh6 {\n  font-size: 14rem;\n}\n\npre {\n  font-family: monospace;\n  font-size: 1em;\n}\n\na {\n  text-decoration: none;\n  color: inherit;\n  cursor: pointer;\n  background-color: transparent;\n}\n\nabbr {\n  border-bottom: none;\n  text-decoration: underline dotted;\n}\n\nb,\nstrong {\n  font-weight: bolder;\n}\n\ncode,\nkbd,\nsamp {\n  font-family: monospace, monospace;\n}\n\nsmall {\n  font-size: 80%;\n}\n\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsub {\n  bottom: -0.25rem;\n}\n\nsup {\n  top: -0.5rem;\n}\n\nlegend {\n  box-sizing: border-box;\n  color: inherit;\n  display: table;\n  max-width: 100%;\n  padding: 0;\n  white-space: normal;\n}\n\ndetails {\n  display: block;\n}\n\nsummary {\n  display: list-item;\n}\n\n/* Forms, Input and Buttons */\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: inherit;\n  font-size: 100%;\n  line-height: 1.15;\n  margin: 0;\n}\n\nbutton,\ninput {\n  overflow: visible;\n}\n\ninput {\n  background-color: transparent;\n  color: inherit;\n  padding: 0;\n  margin: 1px;\n  border: 1px solid gray;\n}\n\ninput[type="submit"],\ninput[type="button"],\ninput[type="reset"] {\n  cursor: pointer;\n  border: 1px solid gray;\n}\n\ninput:disabled {\n  border: 1px solid gray;\n  cursor: not-allowed;\n}\n\ninput:focus,\ntextarea:focus,\nselect:focus {\n  outline: none;\n}\n\nbutton {\n  background-color: transparent;\n  color: inherit;\n  border-width: 0;\n  padding: 0;\n  cursor: pointer;\n}\n\nbutton,\nselect {\n  text-transform: none;\n}\n\nbutton {\n  border: 1px solid grey;\n}\n\nbutton:disabled {\n  cursor: not-allowed;\n}\n\nfieldset {\n  border-width: 0;\n  padding: 0;\n  margin: 0;\n}\n\n::-webkit-file-upload-button {\n  -webkit-appearance: button;\n  font: inherit;\n}\n\nprogress {\n  vertical-align: baseline;\n}\n\ninput,\nbutton,\ntextarea,\nselect {\n  font: inherit;\n}\n\n/* Remove _all_ animations and transitions for people that prefer not to see them */\n@media (prefers-reduced-motion: reduce) {\n  * {\n    animation-play-state: paused !important;\n    transition: none !important;\n    scroll-behavior: auto !important;\n  }\n}\n',""]),n.exports=e},function(n,e,t){var o=t(0),r=t(5);"string"==typeof(r=r.__esModule?r.default:r)&&(r=[[n.i,r,""]]);var a={insert:"head",singleton:!1},i=(o(r,a),r.locals?r.locals:{});n.exports=i},function(n,e,t){(e=t(1)(!1)).push([n.i,"@import url(https://fonts.googleapis.com/css2?family=Lora&family=Montserrat&display=swap);"]),e.push([n.i,":root {\n  --darkgray: #333333;\n  --yellow: #ead975;\n}\n\n.title {\n  font-family: 'Lora', serif;\n  font-style: italic;\n}\n\nbody {\n  font-family: 'Montserrat', sans-serif;\n  margin: 0;\n  padding: 0;\n  background-color: var(--darkgray);\n}\n\n.big-container {\n  width: 100%;\n  max-width: 1024px;\n  margin: 0 auto;\n}\n\n.yellow-bg {\n  background-color: var(--yellow);\n  color: var(--darkgray);\n}\n\n.dark-bg {\n  background-color: var(--darkgray);\n  color: white;\n}\n\n.yellow-dark-gradient {\n  background: var(--yellow);\n  background: -moz-linear-gradient(\n    top,\n    var(--yellow) 0%,\n    var(--yellow) 6%,\n    var(--darkgray) 6%,\n    var(--darkgray) 100%\n  );\n  background: -webkit-linear-gradient(\n    top,\n    var(--yellow) 0%,\n    var(--yellow) 6%,\n    var(--darkgray) 6%,\n    var(--darkgray) 100%\n  );\n  background: linear-gradient(\n    to bottom,\n    var(--yellow) 0%,\n    var(--yellow) 6%,\n    var(--darkgray) 6%,\n    var(--darkgray) 100%\n  );\n}\n\n.dark-yellow-gradient {\n  background: var(--darkgray);\n  background: -moz-linear-gradient(\n    top,\n    var(--darkgray) 0%,\n    var(--darkgray) 6%,\n    var(--yellow) 6%,\n    var(--yellow) 100%\n  );\n  background: -webkit-linear-gradient(\n    top,\n    var(--darkgray) 0%,\n    var(--darkgray) 6%,\n    var(--yellow) 6%,\n    var(--yellow) 100%\n  );\n  background: linear-gradient(\n    to bottom,\n    var(--darkgray) 0%,\n    var(--darkgray) 6%,\n    var(--yellow) 6%,\n    var(--yellow) 100%\n  );\n}\n",""]),n.exports=e},function(n,e,t){var o=t(0),r=t(7);"string"==typeof(r=r.__esModule?r.default:r)&&(r=[[n.i,r,""]]);var a={insert:"head",singleton:!1},i=(o(r,a),r.locals?r.locals:{});n.exports=i},function(n,e,t){(e=t(1)(!1)).push([n.i,"main {\n  display: grid;\n  height: 100vh;\n  grid-template-rows: 50px auto;\n}\n\n.global-header {\n  width: 100%;\n  height: 50px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.global-header nav {\n  width: 100%;\n  font-family: 'Lora', sans-serif;\n  font-style: italic;\n}\n\n.global-header ul {\n  display: flex;\n  margin-left: 20px;\n}\n\n.global-header li {\n  list-style: none;\n  margin-right: 30px;\n}\n\n.global-header li:hover {\n  cursor: pointer;\n  font-weight: bolder;\n  font-style: normal;\n}\n\n.global-header li.current {\n  text-decoration: underline solid;\n}\n\n.page-body {\n  width: 100vw;\n}\n\n@media only screen and (min-width: 1024px) {\n  .global-header ul{\n    margin-left: 0;\n  }\n}",""]),n.exports=e},function(n,e,t){var o=t(0),r=t(9);"string"==typeof(r=r.__esModule?r.default:r)&&(r=[[n.i,r,""]]);var a={insert:"head",singleton:!1},i=(o(r,a),r.locals?r.locals:{});n.exports=i},function(n,e,t){(e=t(1)(!1)).push([n.i,".hero {\n  display: block;\n  width: 100%;\n}\n\n.hero .hero-text {\n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n  align-items: flex-start;\n  margin: 50px 10px 50px 20px;\n  text-align: right;\n}\n\n.hero-text .title {\n  font-size: xx-large;\n}\n\n.hero .hero-image {\n  background: rgba(220, 220, 220, 0.3);\n  background-position: center right;\n  background-repeat: no-repeat;\n  background-size: cover;\n  min-width: 500px;\n  max-width: 640px;\n}\n\n.hero-image.home {\n  background: url('https://source.unsplash.com/WMqgowJED6I/640x426')\n    rgba(220, 220, 220, 0.3);\n  height: 426px;\n}\n\n.hero-image.contact {\n  background: url('https://source.unsplash.com/aUeMxXAUGec/640x432')\n    rgba(220, 220, 220, 0.3);\n  height: 432px;\n}\n\n@media only screen and (min-width: 1024px) {\n  .hero {\n    display: flex;\n    justify-content: space-between;\n    height: 50vh;\n  }\n\n  .hero .hero-text {\n    margin: 50px 0;\n    text-align: left;\n    flex: 50%;\n  }\n  .hero-image {\n    height: 100%;\n  }\n  .hero-image.menu {\n    background: url('https://source.unsplash.com/u2Lp8tXIcjw/640x800')\n      rgba(220, 220, 220, 0.3);\n  }\n\n  .hero-image.home {\n    background: url('https://source.unsplash.com/oCsaxvGCehM/640x853')\n      rgba(220, 220, 220, 0.3);\n    height: 90vh;\n    transition: 1s;\n  }\n\n  .hero-image.home:hover {\n    background: url('https://source.unsplash.com/5xltWMpkN3E/640x853')\n      rgba(220, 220, 220, 0.3);\n    height: 90vh;\n    animation: ease-in 3s forwards;\n  }\n}\n",""]),n.exports=e},function(n,e,t){var o=t(0),r=t(11);"string"==typeof(r=r.__esModule?r.default:r)&&(r=[[n.i,r,""]]);var a={insert:"head",singleton:!1},i=(o(r,a),r.locals?r.locals:{});n.exports=i},function(n,e,t){(e=t(1)(!1)).push([n.i,"img {\n  width: 100%; /* need to overwrite inline dimensions */\n  height: auto;\n}\nh2 {\n  margin-bottom: 0.5em;\n}\n.grid-container {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));\n  grid-gap: 1em;\n  transition: all 0.3s ease;\n  margin-top: 30px;\n}\n\n/* hover styles */\n.location-listing {\n  position: relative;\n  display: flex;\n  align-items: center;\n  -webkit-transform: rotateZ(-10deg);\n  -ms-transform: rotateZ(-10deg);\n  transform: rotateZ(-10deg);\n  transition: filter 10s ease-in;\n}\n\n.location-image {\n  line-height: 0;\n  overflow: hidden;\n}\n\n.location-image img {\n  filter: blur(0px);\n  transition: filter 0.3s ease-in;\n  transform: scale(1.1);\n}\n\n.location-title {\n  font-size: 1.5em;\n  font-weight: bold;\n  text-decoration: none;\n  z-index: 1;\n  position: absolute;\n  height: 100%;\n  width: 100%;\n  top: 0;\n  left: 0;\n  opacity: 0;\n  transition: opacity 0.5s;\n  background: rgba(90, 0, 10, 0.4);\n  color: white;\n\n  /* position the text in t’ middle*/\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.location-listing:hover {\n  -webkit-transform: rotateZ(0deg);\n  -ms-transform: rotateZ(0deg);\n  transform: rotateZ(0deg);\n  z-index: 1;\n  box-shadow: 1px 1px gray, 2px 2px gray, 3px 3px gray;\n  -webkit-transform: translateX(-3px);\n  transform: translateX(-3px);\n}\n\n.location-listing:hover .location-title {\n  opacity: 1;\n}\n\n.location-listing:hover .location-image img {\n  filter: blur(2px);\n}\n\n/* for touch screen devices */\n@media (hover: none) {\n  .location-title {\n    opacity: 1;\n  }\n  .location-image img {\n    filter: blur(2px);\n  }\n}\n",""]),n.exports=e},function(n,e,t){"use strict";t.r(e);t(2),t(4),t(6),t(8),t(10);const o=[["https://source.unsplash.com/awj7sRviVXo/640x960","Meal with salmon and zucchini"],["https://source.unsplash.com/V9LP6-y8e5w/640x415","Avocado toast with beet hummus and salad greens"],["https://source.unsplash.com/w6ftFbPCs9I/640x960","Autumn Soup"],["https://source.unsplash.com/HF16IxB_tO4/640x505","Fall salad"],["https://source.unsplash.com/fdlZBWIP0aM/640x907","Avocado and Egg Toast"],["https://source.unsplash.com/Yr4n8O_3UPc/640x423","Pork Chop Dinner"]],r=(n="Home")=>`\n    <div class="global-header ${"Home"===n?"yellow-bg":"dark-bg"}">\n        <nav class="big-container">\n            <ul>\n                <li ${"Home"===n?'class="current"':""} id="home">Home</li>\n                <li ${"Menu"===n?'class="current"':""} id="menu">Menu</li>\n                <li ${"Contact"===n?'class="current"':""} id="contact">Contact</li>\n            </ul>\n        </nav>\n    </div>\n`,a=(n="Plaza Athénée",e="Three levels of cascading vegetable gardens churning out \n    the sweetest produce and a team of outrageously talented cooks and from-of-house \n    staff combine to make Plaza Athénée the ultimate restaurant experience.",t="home")=>`\n    <div class="hero">\n        <div class="hero-text ${"menu"===t?"":"dark-bg"}">\n            <h2 class="title" style="${"menu"===t?"":"color: #ead975;"}">${n}</h2>\n            <p>${e}</p>\n        </div>\n        <div class="hero-image ${t}"></div>\n    </div>\n`,i=()=>`\n    ${r("Home")}\n    <div class="page-body split yellow-dark-gradient" id="tab-container">\n        <div class="big-container tab-content">\n            ${a()}\n        </div>\n    </div>\n`,l=()=>`\n  ${r("Menu")}\n  <div class="page-body split dark-yellow-gradient" id="tab-container">\n    <div class="big-container tab-content">\n      ${a("Menu","We want your time with us to count. So along with an inviting \n    atmosphere where everyone can be comfortable, we offer delectable handcrafted appetizers,\n    a glass of wine and the caring and service that you deserve.","menu")}\n      <div class="grid-container">\n        ${o.map((n,e)=>((n,e,t)=>`\n  <article id="${t}" class="location-listing">\n    <p class="location-title">${n}</p>\n    <div class="location-image">\n      <img src="${e}" alt="${n}">\n    </div>\n  </article>\n`)(n[1],n[0],e)).join("")}\n      </div>      \n    </div>\n  </div>\n`,s=()=>`\n    ${r("Contact")}\n    <div class="page-body split yellow-dark-gradient" id="tab-container">\n        <div class="big-container tab-content">\n            ${a("We are here to serve you"," We are a talented team of chefs for you","contact")}\n        </div>\n    </div>\n`;var c,d,u,p=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"Home";if("string"!=typeof n)throw new TypeError("Tab Provided is invalid!");var e=document.createElement("main");e.setAttribute("id","main"),"Home"===n&&(e.innerHTML=i()),"Menu"===n&&(e.innerHTML=l()),"Contact"===n&&(e.innerHTML=s()),document.getElementById("content").appendChild(e)},g=(c=["Home","Menu","Contact"],d="Home",u=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";try{if("string"!=typeof n)throw new TypeError("Tab must be string");if(!c.includes(n))throw new RangeError("Tab incorrect. Must be Home | Menu | Contact");if(n===d)throw new Error("Its the same tab");return p(n),d=n,{ok:"Tab Changed!"}}catch(n){return{error:n.message}}},{init:function(){try{return p(),{ok:"Tabs generated!"}}catch(n){return{error:n.message}}},buttonEvent:function n(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"Home";try{return document.getElementById(e.toLowerCase()).addEventListener("click",(function(){var t=document.getElementById("main");t.hasChildNodes()&&document.getElementById("content").removeChild(t),u(e),["Home","Menu","Contact"].forEach((function(t){t!==e&&n(t)}))})),{ok:"Tab Changed with button! ".concat(e)}}catch(n){return{error:n.message}}}});g.init(),window.addEventListener("DOMContentLoaded",(function(){g.buttonEvent("Menu"),g.buttonEvent("Contact")}))}]);