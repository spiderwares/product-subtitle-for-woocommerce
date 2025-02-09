/*! For license information please see block.js.LICENSE.txt */
(()=>{"use strict";var t={228:t=>{var e=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,o=Object.prototype.propertyIsEnumerable;t.exports=function(){try{if(!Object.assign)return!1;var t=new String("abc");if(t[5]="de","5"===Object.getOwnPropertyNames(t)[0])return!1;for(var e={},r=0;r<10;r++)e["_"+String.fromCharCode(r)]=r;if("0123456789"!==Object.getOwnPropertyNames(e).map((function(t){return e[t]})).join(""))return!1;var o={};return"abcdefghijklmnopqrst".split("").forEach((function(t){o[t]=t})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},o)).join("")}catch(t){return!1}}()?Object.assign:function(t,n){for(var l,i,c=function(t){if(null==t)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(t)}(t),a=1;a<arguments.length;a++){for(var u in l=Object(arguments[a]))r.call(l,u)&&(c[u]=l[u]);if(e){i=e(l);for(var s=0;s<i.length;s++)o.call(l,i[s])&&(c[i[s]]=l[i[s]])}}return c}},20:(t,e,r)=>{r(228);var o=r(594),n=60103;if(e.Fragment=60107,"function"==typeof Symbol&&Symbol.for){var l=Symbol.for;n=l("react.element"),e.Fragment=l("react.fragment")}var i=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c=Object.prototype.hasOwnProperty,a={key:!0,ref:!0,__self:!0,__source:!0};function u(t,e,r){var o,l={},u=null,s=null;for(o in void 0!==r&&(u=""+r),void 0!==e.key&&(u=""+e.key),void 0!==e.ref&&(s=e.ref),e)c.call(e,o)&&!a.hasOwnProperty(o)&&(l[o]=e[o]);if(t&&t.defaultProps)for(o in e=t.defaultProps)void 0===l[o]&&(l[o]=e[o]);return{$$typeof:n,type:t,key:u,ref:s,props:l,_owner:i.current}}e.jsx=u,e.jsxs=u},848:(t,e,r)=>{t.exports=r(20)},594:t=>{t.exports=React}},e={},r=function r(o){var n=e[o];if(void 0!==n)return n.exports;var l=e[o]={exports:{}};return t[o](l,l.exports,r),l.exports}(848),o=wp.i18n.__,n=wp.blocks.registerBlockType,l=(wp.blockEditor||wp.editor).InspectorControls,i=wp.components,c=i.PanelBody,a=i.TextControl,u=i.SelectControl,s=i.ColorPicker;function p(t){return p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},p(t)}function f(t,e,r){return(e=function(t){var e=function(t){if("object"!=p(t)||!t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var r=e.call(t,"string");if("object"!=p(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"==p(e)?e:e+""}(e))in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function b(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,o=Array(e);r<e;r++)o[r]=t[r];return o}n("pswc/product-subtitle-block",{title:o("Product Subtitle","product-subtitle-for-woocommerce"),icon:"archive",category:"widgets",attributes:{htmlTag:{type:"string",default:"div"},fallbackText:{type:"string",default:"Default Subtitle"},textColor:{type:"string",default:"inherit"},backgroundColor:{type:"string",default:"transparent"}},edit:function(t){var e=t.attributes,n=t.setAttributes,i=e.htmlTag,p=e.fallbackText,f=e.textColor,b=e.backgroundColor,y=i||"div";return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(l,{children:(0,r.jsxs)(c,{title:o("Settings","product-subtitle-for-woocommerce"),children:[(0,r.jsx)(u,{label:o("HTML Tag","product-subtitle-for-woocommerce"),value:i,options:[{label:"<div>",value:"div"},{label:"<p>",value:"p"},{label:"<span>",value:"span"},{label:"<h1>",value:"h1"},{label:"<h2>",value:"h2"},{label:"<h3>",value:"h3"},{label:"<h4>",value:"h4"},{label:"<h5>",value:"h5"},{label:"<h6>",value:"h6"}],onChange:function(t){return n({htmlTag:t})}}),(0,r.jsx)(a,{label:o("Fallback Subtitle Text","product-subtitle-for-woocommerce"),value:p,onChange:function(t){return n({fallbackText:t})}}),(0,r.jsx)("label",{children:o("Text Color","product-subtitle-for-woocommerce")}),(0,r.jsx)(s,{color:f,onChangeComplete:function(t){return n({textColor:t.hex})}}),(0,r.jsx)("label",{children:o("Background Color","product-subtitle-for-woocommerce")}),(0,r.jsx)(s,{color:b,onChangeComplete:function(t){return n({backgroundColor:t.hex})}})]})}),(0,r.jsx)("div",{className:"product-subtitle",children:(0,r.jsx)(y,{style:{color:f,backgroundColor:b},children:p})})]})},save:function(){return null}});const y=wp.blocks;function d(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,o)}return r}function m(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?d(Object(r),!0).forEach((function(e){f(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):d(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var v=wp.i18n.__,h=wp.components.TextControl;(0,y.registerBlockType)("pswc/product-subtitle-form-field-block",{title:"Product Subtitle form field",attributes:{pswc_subtitle:{type:"string",__experimentalRole:"content",source:"text"}},supports:{align:!1,html:!1,multiple:!0,reusable:!1,inserter:!1,lock:!1,__experimentalToolbar:!1},edit:function(t){var e,o,n=t.attributes,l=t.context,i=(e=window.wc.productEditor.__experimentalUseProductEntityProp("meta_data.pswc_subtitle",{postType:l.postType,fallbackValue:""}),o=2,function(t){if(Array.isArray(t))return t}(e)||function(t,e){var r=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=r){var o,n,l,i,c=[],a=!0,u=!1;try{if(l=(r=r.call(t)).next,0===e){if(Object(r)!==r)return;a=!1}else for(;!(a=(o=l.call(r)).done)&&(c.push(o.value),c.length!==e);a=!0);}catch(t){u=!0,n=t}finally{try{if(!a&&null!=r.return&&(i=r.return(),Object(i)!==i))return}finally{if(u)throw n}}return c}}(e,o)||function(t,e){if(t){if("string"==typeof t)return b(t,e);var r={}.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?b(t,e):void 0}}(e,o)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),c=i[0],a=i[1];return(0,r.jsx)("div",m(m({},n),{},{children:(0,r.jsx)(h,{label:v("Product Subtitle","product-subtitle-for-woocommerce"),placeholder:v("e.g. Product by SpiderWares","product-subtitle-for-woocommerce"),value:c,onChange:a})}))}})})();