parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"clu1":[function(require,module,exports) {

},{"./../images/demo.jpg":[["demo.090c7c6d.jpg","nKR3"],"nKR3"]}],"Focm":[function(require,module,exports) {
"use strict";function e(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function t(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function n(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}require("./sass/main.scss");var r=function(){function t(n){var r=n.selector,a=n.targetDate;e(this,t),document.querySelector(".timer").id=r,this.targetDate=a,this.days=document.querySelector("[data-value=days]"),this.hours=document.querySelector("[data-value=hours]"),this.mins=document.querySelector("[data-value=mins]"),this.secs=document.querySelector("[data-value=secs]"),this.countDown()}return n(t,[{key:"makeString",value:function(e){return String(e).padStart(2,"0")}},{key:"countDown",value:function(){var e=this;setInterval(function(){var t=new Date,n=e.targetDate-t,r=e.getTimeComponents(n);e.updateTimer(r)},1e3)}},{key:"getTimeComponents",value:function(e){return{days:this.makeString(Math.floor(e/864e5)),hours:this.makeString(Math.floor(e%864e5/36e5)),mins:this.makeString(Math.floor(e%36e5/6e4)),secs:this.makeString(Math.floor(e%6e4/1e3))}}},{key:"updateTimer",value:function(e){var t=e.days,n=e.hours,r=e.mins,a=e.secs;this.days.textContent=t,this.hours.textContent=n,this.mins.textContent=r,this.secs.textContent=a}}]),t}();new r({selector:"#timer-1",targetDate:new Date(2022,0,1,0,0,0)});
},{"./sass/main.scss":"clu1"}]},{},["Focm"], null)
//# sourceMappingURL=/parcel-project-template/src.657866a1.js.map