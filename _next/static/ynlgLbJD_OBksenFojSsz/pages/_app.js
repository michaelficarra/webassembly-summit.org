(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{"+oT+":function(e,n,t){var i=t("eVuF");function a(e,n,t,a,r,p,o){try{var l=e[p](o),c=l.value}catch(d){return void t(d)}l.done?n(c):i.resolve(c).then(a,r)}e.exports=function(e){return function(){var n=this,t=arguments;return new i((function(i,r){var p=e.apply(n,t);function o(e){a(p,i,r,o,l,"next",e)}function l(e){a(p,i,r,o,l,"throw",e)}o(void 0)}))}}},"2Eek":function(e,n,t){e.exports=t("W7oM")},"4bdI":function(e,n,t){t("Ui4e"),e.exports=t("WEpk").Object.freeze},"74v/":function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return t("cha2")}])},"8Bbg":function(e,n,t){e.exports=t("B5Ud")},B5Ud:function(e,n,t){"use strict";var i=t("/HRN"),a=t("WaGi"),r=t("ZDA2"),p=t("/+P4"),o=t("N9n2"),l=t("ln6h"),c=t("KI45");n.__esModule=!0,n.Container=function(e){0;return e.children},n.createUrl=m,n.default=void 0;var d=c(t("htGi")),s=c(t("+oT+")),u=c(t("q1tI")),h=t("g/15");function f(e){return v.apply(this,arguments)}function v(){return(v=(0,s.default)(l.mark((function e(n){var t,i,a;return l.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=n.Component,i=n.ctx,e.next=3,(0,h.loadGetInitialProps)(t,i);case 3:return a=e.sent,e.abrupt("return",{pageProps:a});case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}n.AppInitialProps=h.AppInitialProps,t("nOHt");var g=function(e){function n(){return i(this,n),r(this,p(n).apply(this,arguments))}return o(n,e),a(n,[{key:"componentDidCatch",value:function(e,n){throw e}},{key:"render",value:function(){var e=this.props,n=e.router,t=e.Component,i=e.pageProps,a=m(n);return u.default.createElement(t,(0,d.default)({},i,{url:a}))}}]),n}(u.default.Component);function m(e){var n=e.pathname,t=e.asPath,i=e.query;return{get query(){return i},get pathname(){return n},get asPath(){return t},back:function(){e.back()},push:function(n,t){return e.push(n,t)},pushTo:function(n,t){var i=t?n:"",a=t||n;return e.push(i,a)},replace:function(n,t){return e.replace(n,t)},replaceTo:function(n,t){var i=t?n:"",a=t||n;return e.replace(i,a)}}}n.default=g,g.origGetInitialProps=f,g.getInitialProps=f},FbiP:function(e,n,t){e.exports=t("4bdI")},Ui4e:function(e,n,t){var i=t("93I4"),a=t("6/1s").onFreeze;t("zn7N")("freeze",(function(e){return function(n){return e&&i(n)?e(a(n)):n}}))},W7oM:function(e,n,t){t("nZgG");var i=t("WEpk").Object;e.exports=function(e,n){return i.defineProperties(e,n)}},cha2:function(e,n,t){"use strict";t.r(n);var i=t("XXOK"),a=t.n(i);var r=t("hfKm"),p=t.n(r);function o(e,n){for(var t=0;t<n.length;t++){var i=n[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),p()(e,i.key,i)}}var l=t("XVgq"),c=t.n(l),d=t("Z7t5"),s=t.n(d);function u(e){return(u="function"===typeof s.a&&"symbol"===typeof c.a?function(e){return typeof e}:function(e){return e&&"function"===typeof s.a&&e.constructor===s.a&&e!==s.a.prototype?"symbol":typeof e})(e)}function h(e){return(h="function"===typeof s.a&&"symbol"===u(c.a)?function(e){return u(e)}:function(e){return e&&"function"===typeof s.a&&e.constructor===s.a&&e!==s.a.prototype?"symbol":u(e)})(e)}function f(e,n){return!n||"object"!==h(n)&&"function"!==typeof n?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):n}var v=t("Bhuq"),g=t.n(v),m=t("TRZx"),x=t.n(m);function w(e){return(w=x.a?g.a:function(e){return e.__proto__||g()(e)})(e)}var k=t("SqZg"),b=t.n(k);function y(e,n){return(y=x.a||function(e,n){return e.__proto__=n,e})(e,n)}var P=t("2Eek"),_=t.n(P),z=t("FbiP"),I=t.n(z);var E=t("q1tI"),T=t.n(E),C=t("8Bbg"),B=t.n(C),O=t("8Kt/"),S=t.n(O),W=t("vOnD");t.d(n,"default",(function(){return F}));var j=T.a.createElement;function q(){var e,n,t=(e=["\n  @import url('https://fonts.googleapis.com/css?family=IBM+Plex+Sans:400,700&display=swap');\n  html {\n    margin: 0;\n    padding: 0;\n    font-size: 16px;\n    @media (max-width: 1280px) {\n      font-size: 16px;\n    }\n  }\n  body {\n    margin: 0;\n    background-color: hsl(237, 60%, 48%);\n    background-image: url('/heightlines.svg');\n/*     \n    font-family: 'Open Sans', sans-serif;\n    font-family: Arial, Helvetica, sans-serif;\n */    \n    font-family: 'IBM Plex Sans', sans-serif;\n    color: white;\n    appearance: none;\n  }\n\n\n  a {\n    text-decoration: none;\n    margin: 0;\n    cursor: pointer;\n\n    /* color: rgb(180, 180, 255); */\n    color: rgba(255, 255, 255, 0.8);\n    &:hover {\n      color: white;\n    }\n  }\n\n  @media only screen and (max-width: 767px) {\n\n    h1 {\n       font-size: 3em;\n    }\n \n    h2 {\n       font-size: 2em;\n    }\n \n  }\n \n"],n||(n=e.slice(0)),I()(_()(e,{raw:{value:I()(n)}})));return q=function(){return t},t}var M=Object(W.a)(q()),Z=0,F=function(e){function n(){return function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,n),f(this,w(n).apply(this,arguments))}var t,i,r;return function(e,n){if("function"!==typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");e.prototype=b()(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),n&&y(e,n)}(n,e),t=n,(i=[{key:"componentDidMount",value:function(){"undefined"!==typeof window.navigator&&"serviceWorker"in navigator&&window.addEventListener("load",(function(){navigator.serviceWorker.getRegistrations().then((function(e){var n=!0,t=!1,i=void 0;try{for(var r,p=a()(e);!(n=(r=p.next()).done);n=!0)r.value.unregister().then((function(e){console.log("unregister: ",e),++Z}))}catch(o){t=!0,i=o}finally{try{n||null==p.return||p.return()}finally{if(t)throw i}}Z>0&&window.location.reload()}))}))}},{key:"render",value:function(){var e=this.props,n=e.Component,t=e.pageProps;return j(T.a.Fragment,null,j(S.a,null,j("meta",{name:"viewport",content:"width=device-width, initial-scale=1, shrink-to-fit=no"}),j("meta",{name:"description",content:"WebAssembly Summit 2020"}),j("meta",{name:"mobile-web-app-capable",content:"yes"}),j("link",{rel:"shortcut icon",type:"image/png",sizes:"196x196",href:"/favicon-196.png"}),j("link",{rel:"icon",type:"image/png",sizes:"196x196",href:"/favicon-196.png"}),j("link",{rel:"apple-touch-icon",sizes:"180x180",href:"/apple-icon-180.png"}),j("link",{rel:"apple-touch-icon",sizes:"167x167",href:"/apple-icon-167.png"}),j("link",{rel:"apple-touch-icon",sizes:"152x152",href:"/apple-icon-152.png"}),j("link",{rel:"apple-touch-icon",sizes:"120x120",href:"/apple-icon-120.png"}),j("meta",{name:"apple-mobile-web-app-capable",content:"yes"}),j("meta",{name:"apple-mobile-web-app-status-bar-style",content:"black-translucent"}),j("link",{rel:"apple-touch-startup-image",href:"/apple-splash-1668-2388.png",media:"(device-width: 1024px) and (device-height: 1366px) and (-webkit-min-device-pixel-ratio: 1.5) and (orientation: portrait)"}),j("link",{rel:"apple-touch-startup-image",href:"/apple-splash-2388-1668.png",media:"(device-width: 1024px) and (device-height: 1366px) and (-webkit-min-device-pixel-ratio: 1.5) and (orientation: landscape)"}),j("link",{rel:"apple-touch-startup-image",href:"/apple-splash-2048-2732.png",media:"(device-width: 1024px) and (device-height: 1366px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)"}),j("link",{rel:"apple-touch-startup-image",href:"/apple-splash-2732-2048.png",media:"(device-width: 1024px) and (device-height: 1366px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)"}),j("link",{rel:"apple-touch-startup-image",href:"/apple-splash-1668-2388.png",media:"(device-width: 834px) and (device-height: 1194px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)"}),j("link",{rel:"apple-touch-startup-image",href:"/apple-splash-2388-1668.png",media:"(device-width: 834px) and (device-height: 1194px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)"}),j("link",{rel:"apple-touch-startup-image",href:"/apple-splash-1668-2224.png",media:"(device-width: 834px) and (device-height: 1112px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)"}),j("link",{rel:"apple-touch-startup-image",href:"/apple-splash-2224-1668.png",media:"(device-width: 834px) and (device-height: 1112px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)"}),j("link",{rel:"apple-touch-startup-image",href:"/apple-splash-1536-2048.png",media:"(device-width: 768px) and (device-height: 1024px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)"}),j("link",{rel:"apple-touch-startup-image",href:"/apple-splash-2048-1536.png",media:"(device-width: 768px) and (device-height: 1024px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)"}),j("link",{rel:"apple-touch-startup-image",href:"/apple-splash-1242-2688.png",media:"(device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)"}),j("link",{rel:"apple-touch-startup-image",href:"/apple-splash-2688-1242.png",media:"(device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)"}),j("link",{rel:"apple-touch-startup-image",href:"/apple-splash-1125-2436.png",media:"(device-width: 375px) and (device-height: 812px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)"}),j("link",{rel:"apple-touch-startup-image",href:"/apple-splash-2436-1125.png",media:"(device-width: 375px) and (device-height: 812px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)"}),j("link",{rel:"apple-touch-startup-image",href:"/apple-splash-828-1792.png",media:"(device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)"}),j("link",{rel:"apple-touch-startup-image",href:"/apple-splash-1792-828.png",media:"(device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)"}),j("link",{rel:"apple-touch-startup-image",href:"/apple-splash-1242-2208.png",media:"(device-width: 414px) and (device-height: 736px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)"}),j("link",{rel:"apple-touch-startup-image",href:"/apple-splash-2208-1242.png",media:"(device-width: 414px) and (device-height: 736px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)"}),j("link",{rel:"apple-touch-startup-image",href:"/apple-splash-750-1334.png",media:"(device-width: 375px) and (device-height: 667px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)"}),j("link",{rel:"apple-touch-startup-image",href:"/apple-splash-1334-750.png",media:"(device-width: 375px) and (device-height: 667px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)"}),j("link",{rel:"apple-touch-startup-image",href:"/apple-splash-640-1136.png",media:"(device-width: 320px) and (device-height: 568px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)"}),j("link",{rel:"apple-touch-startup-image",href:"/apple-splash-1136-640.png",media:"(device-width: 320px) and (device-height: 568px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)"}),j("link",{href:"https://fonts.googleapis.com",rel:"preconnect"}),j("link",{href:"https://fonts.googleapis.com/css?family=IBM+Plex+Sans&display=swap",rel:"stylesheet"}),j("link",{rel:"manifest",href:"/manifest.json"}),j("link",{rel:"shortcut icon",href:"./favicon-196.png"}),j("meta",{name:"theme-color",content:"hsl(237, 60%, 48%)"}),this.props.styleTags),j(M,null),j(n,t))}}])&&o(t.prototype,i),r&&o(t,r),n}(B.a)},nZgG:function(e,n,t){var i=t("Y7ZC");i(i.S+i.F*!t("jmDH"),"Object",{defineProperties:t("fpC5")})}},[["74v/",0,1]]]);