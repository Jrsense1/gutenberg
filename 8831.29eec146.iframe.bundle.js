"use strict";(self.webpackChunkgutenberg=self.webpackChunkgutenberg||[]).push([[8831],{"./node_modules/@floating-ui/react-dom/dist/floating-ui.react-dom.esm.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{x7:function(){return arrow},YF:function(){return useFloating}});var _floating_ui_dom__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@floating-ui/dom/dist/floating-ui.dom.browser.min.mjs"),_floating_ui_dom__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@floating-ui/core/dist/floating-ui.core.browser.min.mjs"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),react_dom__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react-dom/index.js"),index="undefined"!=typeof document?react__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect:react__WEBPACK_IMPORTED_MODULE_0__.useEffect;function deepEqual(a,b){if(a===b)return!0;if(typeof a!=typeof b)return!1;if("function"==typeof a&&a.toString()===b.toString())return!0;let length,i,keys;if(a&&b&&"object"==typeof a){if(Array.isArray(a)){if(length=a.length,length!=b.length)return!1;for(i=length;0!=i--;)if(!deepEqual(a[i],b[i]))return!1;return!0}if(keys=Object.keys(a),length=keys.length,length!==Object.keys(b).length)return!1;for(i=length;0!=i--;)if(!Object.prototype.hasOwnProperty.call(b,keys[i]))return!1;for(i=length;0!=i--;){const key=keys[i];if(("_owner"!==key||!a.$$typeof)&&!deepEqual(a[key],b[key]))return!1}return!0}return a!=a&&b!=b}function useFloating(_temp){let{middleware:middleware,placement:placement="bottom",strategy:strategy="absolute",whileElementsMounted:whileElementsMounted}=void 0===_temp?{}:_temp;const[data,setData]=react__WEBPACK_IMPORTED_MODULE_0__.useState({x:null,y:null,strategy:strategy,placement:placement,middlewareData:{}}),[latestMiddleware,setLatestMiddleware]=react__WEBPACK_IMPORTED_MODULE_0__.useState(middleware);deepEqual(null==latestMiddleware?void 0:latestMiddleware.map((_ref=>{let{name:name,options:options}=_ref;return{name:name,options:options}})),null==middleware?void 0:middleware.map((_ref2=>{let{name:name,options:options}=_ref2;return{name:name,options:options}})))||setLatestMiddleware(middleware);const reference=react__WEBPACK_IMPORTED_MODULE_0__.useRef(null),floating=react__WEBPACK_IMPORTED_MODULE_0__.useRef(null),cleanupRef=react__WEBPACK_IMPORTED_MODULE_0__.useRef(null),dataRef=react__WEBPACK_IMPORTED_MODULE_0__.useRef(data),whileElementsMountedRef=function useLatestRef(value){const ref=react__WEBPACK_IMPORTED_MODULE_0__.useRef(value);return index((()=>{ref.current=value})),ref}(whileElementsMounted),update=react__WEBPACK_IMPORTED_MODULE_0__.useCallback((()=>{reference.current&&floating.current&&(0,_floating_ui_dom__WEBPACK_IMPORTED_MODULE_2__.oo)(reference.current,floating.current,{middleware:latestMiddleware,placement:placement,strategy:strategy}).then((data=>{isMountedRef.current&&!deepEqual(dataRef.current,data)&&(dataRef.current=data,react_dom__WEBPACK_IMPORTED_MODULE_1__.flushSync((()=>{setData(data)})))}))}),[latestMiddleware,placement,strategy]);index((()=>{isMountedRef.current&&update()}),[update]);const isMountedRef=react__WEBPACK_IMPORTED_MODULE_0__.useRef(!1);index((()=>(isMountedRef.current=!0,()=>{isMountedRef.current=!1})),[]);const runElementMountCallback=react__WEBPACK_IMPORTED_MODULE_0__.useCallback((()=>{if("function"==typeof cleanupRef.current&&(cleanupRef.current(),cleanupRef.current=null),reference.current&&floating.current)if(whileElementsMountedRef.current){const cleanupFn=whileElementsMountedRef.current(reference.current,floating.current,update);cleanupRef.current=cleanupFn}else update()}),[update,whileElementsMountedRef]),setReference=react__WEBPACK_IMPORTED_MODULE_0__.useCallback((node=>{reference.current=node,runElementMountCallback()}),[runElementMountCallback]),setFloating=react__WEBPACK_IMPORTED_MODULE_0__.useCallback((node=>{floating.current=node,runElementMountCallback()}),[runElementMountCallback]),refs=react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>({reference:reference,floating:floating})),[]);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>({...data,update:update,refs:refs,reference:setReference,floating:setFloating})),[data,update,refs,setReference,setFloating])}const arrow=options=>{const{element:element,padding:padding}=options;return{name:"arrow",options:options,fn:args=>function isRef(value){return Object.prototype.hasOwnProperty.call(value,"current")}(element)?null!=element.current?(0,_floating_ui_dom__WEBPACK_IMPORTED_MODULE_3__.x7)({element:element.current,padding:padding}).fn(args):{}:element?(0,_floating_ui_dom__WEBPACK_IMPORTED_MODULE_3__.x7)({element:element,padding:padding}).fn(args):{}}}},"./node_modules/capital-case/dist.es2015/index.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{I:function(){return capitalCase}});var tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.js"),dist_es2015=__webpack_require__("./node_modules/no-case/dist.es2015/index.js");function capitalCaseTransform(input){return function upperCaseFirst(input){return input.charAt(0).toUpperCase()+input.substr(1)}(input.toLowerCase())}function capitalCase(input,options){return void 0===options&&(options={}),(0,dist_es2015.B)(input,(0,tslib_es6.pi)({delimiter:" ",transform:capitalCaseTransform},options))}},"./node_modules/no-case/dist.es2015/index.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{B:function(){return noCase}});function lowerCase(str){return str.toLowerCase()}var DEFAULT_SPLIT_REGEXP=[/([a-z0-9])([A-Z])/g,/([A-Z])([A-Z][a-z])/g],DEFAULT_STRIP_REGEXP=/[^A-Z0-9]+/gi;function noCase(input,options){void 0===options&&(options={});for(var _a=options.splitRegexp,splitRegexp=void 0===_a?DEFAULT_SPLIT_REGEXP:_a,_b=options.stripRegexp,stripRegexp=void 0===_b?DEFAULT_STRIP_REGEXP:_b,_c=options.transform,transform=void 0===_c?lowerCase:_c,_d=options.delimiter,delimiter=void 0===_d?" ":_d,result=replace(replace(input,splitRegexp,"$1\0$2"),stripRegexp,"\0"),start=0,end=result.length;"\0"===result.charAt(start);)start++;for(;"\0"===result.charAt(end-1);)end--;return result.slice(start,end).split("\0").map(transform).join(delimiter)}function replace(input,re,value){return re instanceof RegExp?input.replace(re,value):re.reduce((function(input,re){return input.replace(re,value)}),input)}},"./node_modules/tslib/tslib.es6.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{pi:function(){return __assign}});var __assign=function(){return __assign=Object.assign||function __assign(t){for(var s,i=1,n=arguments.length;i<n;i++)for(var p in s=arguments[i])Object.prototype.hasOwnProperty.call(s,p)&&(t[p]=s[p]);return t},__assign.apply(this,arguments)};Object.create;Object.create},"./node_modules/use-memo-one/dist/use-memo-one.esm.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{Pr:function(){return useMemoOne}});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");function useMemoOne(getResult,inputs){var initial=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)((function(){return{inputs:inputs,result:getResult()}}))[0],committed=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(initial),cache=Boolean(inputs&&committed.current.inputs&&function areInputsEqual(newInputs,lastInputs){if(newInputs.length!==lastInputs.length)return!1;for(var i=0;i<newInputs.length;i++)if(newInputs[i]!==lastInputs[i])return!1;return!0}(inputs,committed.current.inputs))?committed.current:{inputs:inputs,result:getResult()};return(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((function(){committed.current=cache}),[cache]),cache.result}},"./node_modules/@floating-ui/core/dist/floating-ui.core.browser.min.mjs":function(__unused_webpack___webpack_module__,__webpack_exports__,__webpack_require__){function t(t){return t.split("-")[0]}function e(t){return t.split("-")[1]}function n(e){return["top","bottom"].includes(t(e))?"x":"y"}function r(t){return"y"===t?"height":"width"}function i(i,o,a){let{reference:l,floating:s}=i;const c=l.x+l.width/2-s.width/2,f=l.y+l.height/2-s.height/2,u=n(o),m=r(u),g=l[m]/2-s[m]/2,d="x"===u;let p;switch(t(o)){case"top":p={x:c,y:l.y-s.height};break;case"bottom":p={x:c,y:l.y+l.height};break;case"right":p={x:l.x+l.width,y:f};break;case"left":p={x:l.x-s.width,y:f};break;default:p={x:l.x,y:l.y}}switch(e(o)){case"start":p[u]-=g*(a&&d?-1:1);break;case"end":p[u]+=g*(a&&d?-1:1)}return p}__webpack_require__.d(__webpack_exports__,{x7:function(){return m},oo:function(){return o},RR:function(){return b},cv:function(){return T},JB:function(){return l},uY:function(){return L},dp:function(){return k}});const o=async(t,e,n)=>{const{placement:r="bottom",strategy:o="absolute",middleware:a=[],platform:l}=n,s=await(null==l.isRTL?void 0:l.isRTL(e));let c=await l.getElementRects({reference:t,floating:e,strategy:o}),{x:f,y:u}=i(c,r,s),m=r,g={},d=0;for(let n=0;n<a.length;n++){const{name:p,fn:h}=a[n],{x:y,y:x,data:w,reset:v}=await h({x:f,y:u,initialPlacement:r,placement:m,strategy:o,middlewareData:g,rects:c,platform:l,elements:{reference:t,floating:e}});f=null!=y?y:f,u=null!=x?x:u,g={...g,[p]:{...g[p],...w}},v&&d<=50&&(d++,"object"==typeof v&&(v.placement&&(m=v.placement),v.rects&&(c=!0===v.rects?await l.getElementRects({reference:t,floating:e,strategy:o}):v.rects),({x:f,y:u}=i(c,m,s))),n=-1)}return{x:f,y:u,placement:m,strategy:o,middlewareData:g}};function a(t){return"number"!=typeof t?function(t){return{top:0,right:0,bottom:0,left:0,...t}}(t):{top:t,right:t,bottom:t,left:t}}function l(t){return{...t,top:t.y,left:t.x,right:t.x+t.width,bottom:t.y+t.height}}async function s(t,e){var n;void 0===e&&(e={});const{x:r,y:i,platform:o,rects:s,elements:c,strategy:f}=t,{boundary:u="clippingAncestors",rootBoundary:m="viewport",elementContext:g="floating",altBoundary:d=!1,padding:p=0}=e,h=a(p),y=c[d?"floating"===g?"reference":"floating":g],x=l(await o.getClippingRect({element:null==(n=await(null==o.isElement?void 0:o.isElement(y)))||n?y:y.contextElement||await(null==o.getDocumentElement?void 0:o.getDocumentElement(c.floating)),boundary:u,rootBoundary:m,strategy:f})),w=l(o.convertOffsetParentRelativeRectToViewportRelativeRect?await o.convertOffsetParentRelativeRectToViewportRelativeRect({rect:"floating"===g?{...s.floating,x:r,y:i}:s.reference,offsetParent:await(null==o.getOffsetParent?void 0:o.getOffsetParent(c.floating)),strategy:f}):s[g]);return{top:x.top-w.top+h.top,bottom:w.bottom-x.bottom+h.bottom,left:x.left-w.left+h.left,right:w.right-x.right+h.right}}const c=Math.min,f=Math.max;function u(t,e,n){return f(t,c(e,n))}const m=t=>({name:"arrow",options:t,async fn(i){const{element:o,padding:l=0}=null!=t?t:{},{x:s,y:c,placement:f,rects:m,platform:g}=i;if(null==o)return{};const d=a(l),p={x:s,y:c},h=n(f),y=e(f),x=r(h),w=await g.getDimensions(o),v="y"===h?"top":"left",b="y"===h?"bottom":"right",R=m.reference[x]+m.reference[h]-p[h]-m.floating[x],A=p[h]-m.reference[h],P=await(null==g.getOffsetParent?void 0:g.getOffsetParent(o));let T=P?"y"===h?P.clientHeight||0:P.clientWidth||0:0;0===T&&(T=m.floating[x]);const O=R/2-A/2,L=d[v],D=T-w[x]-d[b],k=T/2-w[x]/2+O,E=u(L,k,D),C=("start"===y?d[v]:d[b])>0&&k!==E&&m.reference[x]<=m.floating[x];return{[h]:p[h]-(C?k<L?L-k:D-k:0),data:{[h]:E,centerOffset:k-E}}}}),g={left:"right",right:"left",bottom:"top",top:"bottom"};function d(t){return t.replace(/left|right|bottom|top/g,(t=>g[t]))}function p(t,i,o){void 0===o&&(o=!1);const a=e(t),l=n(t),s=r(l);let c="x"===l?a===(o?"end":"start")?"right":"left":"start"===a?"bottom":"top";return i.reference[s]>i.floating[s]&&(c=d(c)),{main:c,cross:d(c)}}const h={start:"end",end:"start"};function y(t){return t.replace(/start|end/g,(t=>h[t]))}const x=["top","right","bottom","left"],b=(x.reduce(((t,e)=>t.concat(e,e+"-start",e+"-end")),[]),function(e){return void 0===e&&(e={}),{name:"flip",options:e,async fn(n){var r;const{placement:i,middlewareData:o,rects:a,initialPlacement:l,platform:c,elements:f}=n,{mainAxis:u=!0,crossAxis:m=!0,fallbackPlacements:g,fallbackStrategy:h="bestFit",flipAlignment:x=!0,...w}=e,v=t(i),b=g||(v!==l&&x?function(t){const e=d(t);return[y(t),e,y(e)]}(l):[d(l)]),R=[l,...b],A=await s(n,w),P=[];let T=(null==(r=o.flip)?void 0:r.overflows)||[];if(u&&P.push(A[v]),m){const{main:t,cross:e}=p(i,a,await(null==c.isRTL?void 0:c.isRTL(f.floating)));P.push(A[t],A[e])}if(T=[...T,{placement:i,overflows:P}],!P.every((t=>t<=0))){var O,L;const t=(null!=(O=null==(L=o.flip)?void 0:L.index)?O:0)+1,e=R[t];if(e)return{data:{index:t,overflows:T},reset:{placement:e}};let n="bottom";switch(h){case"bestFit":{var D;const t=null==(D=T.map((t=>[t,t.overflows.filter((t=>t>0)).reduce(((t,e)=>t+e),0)])).sort(((t,e)=>t[1]-e[1]))[0])?void 0:D[0].placement;t&&(n=t);break}case"initialPlacement":n=l}if(i!==n)return{reset:{placement:n}}}return{}}}});const T=function(r){return void 0===r&&(r=0),{name:"offset",options:r,async fn(i){const{x:o,y:a}=i,l=await async function(r,i){const{placement:o,platform:a,elements:l}=r,s=await(null==a.isRTL?void 0:a.isRTL(l.floating)),c=t(o),f=e(o),u="x"===n(o),m=["left","top"].includes(c)?-1:1,g=s&&u?-1:1,d="function"==typeof i?i(r):i;let{mainAxis:p,crossAxis:h,alignmentAxis:y}="number"==typeof d?{mainAxis:d,crossAxis:0,alignmentAxis:null}:{mainAxis:0,crossAxis:0,alignmentAxis:null,...d};return f&&"number"==typeof y&&(h="end"===f?-1*y:y),u?{x:h*g,y:p*m}:{x:p*m,y:h*g}}(i,r);return{x:o+l.x,y:a+l.y,data:l}}}};function O(t){return"x"===t?"y":"x"}const L=function(e){return void 0===e&&(e={}),{name:"shift",options:e,async fn(r){const{x:i,y:o,placement:a}=r,{mainAxis:l=!0,crossAxis:c=!1,limiter:f={fn:t=>{let{x:e,y:n}=t;return{x:e,y:n}}},...m}=e,g={x:i,y:o},d=await s(r,m),p=n(t(a)),h=O(p);let y=g[p],x=g[h];if(l){const t="y"===p?"bottom":"right";y=u(y+d["y"===p?"top":"left"],y,y-d[t])}if(c){const t="y"===h?"bottom":"right";x=u(x+d["y"===h?"top":"left"],x,x-d[t])}const w=f.fn({...r,[p]:y,[h]:x});return{...w,data:{x:w.x-i,y:w.y-o}}}}},k=function(n){return void 0===n&&(n={}),{name:"size",options:n,async fn(r){const{placement:i,rects:o,platform:a,elements:l}=r,{apply:c=(()=>{}),...u}=n,m=await s(r,u),g=t(i),d=e(i);let p,h;"top"===g||"bottom"===g?(p=g,h=d===(await(null==a.isRTL?void 0:a.isRTL(l.floating))?"start":"end")?"left":"right"):(h=g,p="end"===d?"top":"bottom");const y=f(m.left,0),x=f(m.right,0),w=f(m.top,0),v=f(m.bottom,0),b={availableHeight:o.floating.height-(["left","right"].includes(i)?2*(0!==w||0!==v?w+v:f(m.top,m.bottom)):m[p]),availableWidth:o.floating.width-(["top","bottom"].includes(i)?2*(0!==y||0!==x?y+x:f(m.left,m.right)):m[h])};await c({...r,...b});const R=await a.getDimensions(l.floating);return o.floating.width!==R.width||o.floating.height!==R.height?{reset:{rects:!0}}:{}}}}},"./node_modules/@floating-ui/dom/dist/floating-ui.dom.browser.min.mjs":function(__unused_webpack___webpack_module__,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{Me:function(){return N},oo:function(){return P}});var _floating_ui_core__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@floating-ui/core/dist/floating-ui.core.browser.min.mjs");function n(t){return t&&t.document&&t.location&&t.alert&&t.setInterval}function o(t){if(null==t)return window;if(!n(t)){const e=t.ownerDocument;return e&&e.defaultView||window}return t}function i(t){return o(t).getComputedStyle(t)}function r(t){return n(t)?"":t?(t.nodeName||"").toLowerCase():""}function l(){const t=navigator.userAgentData;return null!=t&&t.brands?t.brands.map((t=>t.brand+"/"+t.version)).join(" "):navigator.userAgent}function c(t){return t instanceof o(t).HTMLElement}function s(t){return t instanceof o(t).Element}function f(t){return"undefined"!=typeof ShadowRoot&&(t instanceof o(t).ShadowRoot||t instanceof ShadowRoot)}function u(t){const{overflow:e,overflowX:n,overflowY:o}=i(t);return/auto|scroll|overlay|hidden/.test(e+o+n)}function d(t){return["table","td","th"].includes(r(t))}function a(t){const e=/firefox/i.test(l()),n=i(t);return"none"!==n.transform||"none"!==n.perspective||"paint"===n.contain||["transform","perspective"].includes(n.willChange)||e&&"filter"===n.willChange||e&&!!n.filter&&"none"!==n.filter}function h(){return!/^((?!chrome|android).)*safari/i.test(l())}const g=Math.min,p=Math.max,m=Math.round;function w(t,e,n){var i,r,l,f;void 0===e&&(e=!1),void 0===n&&(n=!1);const u=t.getBoundingClientRect();let d=1,a=1;e&&c(t)&&(d=t.offsetWidth>0&&m(u.width)/t.offsetWidth||1,a=t.offsetHeight>0&&m(u.height)/t.offsetHeight||1);const g=s(t)?o(t):window,p=!h()&&n,w=(u.left+(p&&null!=(i=null==(r=g.visualViewport)?void 0:r.offsetLeft)?i:0))/d,y=(u.top+(p&&null!=(l=null==(f=g.visualViewport)?void 0:f.offsetTop)?l:0))/a,v=u.width/d,x=u.height/a;return{width:v,height:x,top:y,right:w+v,bottom:y+x,left:w,x:w,y:y}}function y(t){return(e=t,(e instanceof o(e).Node?t.ownerDocument:t.document)||window.document).documentElement;var e}function v(t){return s(t)?{scrollLeft:t.scrollLeft,scrollTop:t.scrollTop}:{scrollLeft:t.pageXOffset,scrollTop:t.pageYOffset}}function x(t){return w(y(t)).left+v(t).scrollLeft}function b(t,e,n){const o=c(e),i=y(e),l=w(t,o&&function(t){const e=w(t);return m(e.width)!==t.offsetWidth||m(e.height)!==t.offsetHeight}(e),"fixed"===n);let s={scrollLeft:0,scrollTop:0};const f={x:0,y:0};if(o||!o&&"fixed"!==n)if(("body"!==r(e)||u(i))&&(s=v(e)),c(e)){const t=w(e,!0);f.x=t.x+e.clientLeft,f.y=t.y+e.clientTop}else i&&(f.x=x(i));return{x:l.left+s.scrollLeft-f.x,y:l.top+s.scrollTop-f.y,width:l.width,height:l.height}}function L(t){return"html"===r(t)?t:t.assignedSlot||t.parentNode||(f(t)?t.host:null)||y(t)}function R(t){return c(t)&&"fixed"!==i(t).position?function(t){let{offsetParent:e}=t,n=t,o=!1;for(;n&&n!==e;){const{assignedSlot:t}=n;if(t){let r=t.offsetParent;if("contents"===i(t).display){const e=t.hasAttribute("style"),o=t.style.display;t.style.display=i(n).display,r=t.offsetParent,t.style.display=o,e||t.removeAttribute("style")}n=t,e!==r&&(e=r,o=!0)}else if(f(n)&&n.host&&o)break;n=f(n)&&n.host||n.parentNode}return e}(t):null}function T(t){const e=o(t);let n=R(t);for(;n&&d(n)&&"static"===i(n).position;)n=R(n);return n&&("html"===r(n)||"body"===r(n)&&"static"===i(n).position&&!a(n))?e:n||function(t){let e=L(t);for(f(e)&&(e=e.host);c(e)&&!["html","body"].includes(r(e));){if(a(e))return e;{const t=e.parentNode;e=f(t)?t.host:t}}return null}(t)||e}function W(t){if(c(t))return{width:t.offsetWidth,height:t.offsetHeight};const e=w(t);return{width:e.width,height:e.height}}function E(t){const e=L(t);return["html","body","#document"].includes(r(e))?t.ownerDocument.body:c(e)&&u(e)?e:E(e)}function H(t,e){var n;void 0===e&&(e=[]);const i=E(t),r=i===(null==(n=t.ownerDocument)?void 0:n.body),l=o(i),c=r?[l].concat(l.visualViewport||[],u(i)?i:[]):i,s=e.concat(c);return r?s:s.concat(H(c))}function A(e,n,r){return"viewport"===n?(0,_floating_ui_core__WEBPACK_IMPORTED_MODULE_0__.JB)(function(t,e){const n=o(t),i=y(t),r=n.visualViewport;let l=i.clientWidth,c=i.clientHeight,s=0,f=0;if(r){l=r.width,c=r.height;const t=h();(t||!t&&"fixed"===e)&&(s=r.offsetLeft,f=r.offsetTop)}return{width:l,height:c,x:s,y:f}}(e,r)):s(n)?function(t,e){const n=w(t,!1,"fixed"===e),o=n.top+t.clientTop,i=n.left+t.clientLeft;return{top:o,left:i,x:i,y:o,right:i+t.clientWidth,bottom:o+t.clientHeight,width:t.clientWidth,height:t.clientHeight}}(n,r):(0,_floating_ui_core__WEBPACK_IMPORTED_MODULE_0__.JB)(function(t){var e;const n=y(t),o=v(t),r=null==(e=t.ownerDocument)?void 0:e.body,l=p(n.scrollWidth,n.clientWidth,r?r.scrollWidth:0,r?r.clientWidth:0),c=p(n.scrollHeight,n.clientHeight,r?r.scrollHeight:0,r?r.clientHeight:0);let s=-o.scrollLeft+x(t);const f=-o.scrollTop;return"rtl"===i(r||n).direction&&(s+=p(n.clientWidth,r?r.clientWidth:0)-l),{width:l,height:c,x:s,y:f}}(y(e)))}function C(t){const e=H(t),n=["absolute","fixed"].includes(i(t).position)&&c(t)?T(t):t;return s(n)?e.filter((t=>s(t)&&function(t,e){const n=null==e.getRootNode?void 0:e.getRootNode();if(t.contains(e))return!0;if(n&&f(n)){let n=e;do{if(n&&t===n)return!0;n=n.parentNode||n.host}while(n)}return!1}(t,n)&&"body"!==r(t))):[]}const D={getClippingRect:function(t){let{element:e,boundary:n,rootBoundary:o,strategy:i}=t;const r=[..."clippingAncestors"===n?C(e):[].concat(n),o],l=r[0],c=r.reduce(((t,n)=>{const o=A(e,n,i);return t.top=p(o.top,t.top),t.right=g(o.right,t.right),t.bottom=g(o.bottom,t.bottom),t.left=p(o.left,t.left),t}),A(e,l,i));return{width:c.right-c.left,height:c.bottom-c.top,x:c.left,y:c.top}},convertOffsetParentRelativeRectToViewportRelativeRect:function(t){let{rect:e,offsetParent:n,strategy:o}=t;const i=c(n),l=y(n);if(n===l)return e;let s={scrollLeft:0,scrollTop:0};const f={x:0,y:0};if((i||!i&&"fixed"!==o)&&(("body"!==r(n)||u(l))&&(s=v(n)),c(n))){const t=w(n,!0);f.x=t.x+n.clientLeft,f.y=t.y+n.clientTop}return{...e,x:e.x-s.scrollLeft+f.x,y:e.y-s.scrollTop+f.y}},isElement:s,getDimensions:W,getOffsetParent:T,getDocumentElement:y,getElementRects:t=>{let{reference:e,floating:n,strategy:o}=t;return{reference:b(e,T(n),o),floating:{...W(n),x:0,y:0}}},getClientRects:t=>Array.from(t.getClientRects()),isRTL:t=>"rtl"===i(t).direction};function N(t,e,n,o){void 0===o&&(o={});const{ancestorScroll:i=!0,ancestorResize:r=!0,elementResize:l=!0,animationFrame:c=!1}=o,f=i&&!c,u=r&&!c,d=f||u?[...s(t)?H(t):[],...H(e)]:[];d.forEach((t=>{f&&t.addEventListener("scroll",n,{passive:!0}),u&&t.addEventListener("resize",n)}));let a,h=null;if(l){let o=!0;h=new ResizeObserver((()=>{o||n(),o=!1})),s(t)&&!c&&h.observe(t),h.observe(e)}let g=c?w(t):null;return c&&function e(){const o=w(t);!g||o.x===g.x&&o.y===g.y&&o.width===g.width&&o.height===g.height||n(),g=o,a=requestAnimationFrame(e)}(),n(),()=>{var t;d.forEach((t=>{f&&t.removeEventListener("scroll",n),u&&t.removeEventListener("resize",n)})),null==(t=h)||t.disconnect(),h=null,c&&cancelAnimationFrame(a)}}const P=(t,n,o)=>(0,_floating_ui_core__WEBPACK_IMPORTED_MODULE_0__.oo)(t,n,{platform:D,...o})},"./node_modules/framer-motion/dist/es/utils/reduced-motion/use-reduced-motion.mjs":function(__unused_webpack___webpack_module__,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{J:function(){return useReducedMotion}});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_index_mjs__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/framer-motion/dist/es/utils/reduced-motion/index.mjs"),_state_mjs__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/framer-motion/dist/es/utils/reduced-motion/state.mjs");function useReducedMotion(){!_state_mjs__WEBPACK_IMPORTED_MODULE_1__.O.current&&(0,_index_mjs__WEBPACK_IMPORTED_MODULE_2__.A)();const[shouldReduceMotion]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(_state_mjs__WEBPACK_IMPORTED_MODULE_1__.n.current);return shouldReduceMotion}}}]);