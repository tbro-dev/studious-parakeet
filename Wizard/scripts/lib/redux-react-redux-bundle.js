/*! For license information please see redux-react-redux-bundle.js.LICENSE.txt */
!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("React")):"function"==typeof define&&define.amd?define(["React"],t):"object"==typeof exports?exports.ReduxBundles=t(require("React")):e.ReduxBundles=t(e.React)}(self,(e=>(()=>{"use strict";var t,r,n={154:(e,t,r)=>{var n=r(883),o="function"==typeof Object.is?Object.is:function(e,t){return e===t&&(0!==e||1/e==1/t)||e!=e&&t!=t},u=n.useSyncExternalStore,c=n.useRef,i=n.useEffect,s=n.useMemo,a=n.useDebugValue;t.useSyncExternalStoreWithSelector=function(e,t,r,n,f){var p=c(null);if(null===p.current){var l={hasValue:!1,value:null};p.current=l}else l=p.current;p=s((function(){function e(e){if(!i){if(i=!0,u=e,e=n(e),void 0!==f&&l.hasValue){var t=l.value;if(f(t,e))return c=t}return c=e}if(t=c,o(u,e))return t;var r=n(e);return void 0!==f&&f(t,r)?t:(u=e,c=r)}var u,c,i=!1,s=void 0===r?null:r;return[function(){return e(t())},null===s?void 0:function(){return e(s())}]}),[t,r,n,f]);var d=u(e,p[0],p[1]);return i((function(){l.hasValue=!0,l.value=d}),[d]),a(d),d}},418:(e,t,r)=>{e.exports=r(154)},883:t=>{t.exports=e}},o={};function u(e){var t=o[e];if(void 0!==t)return t.exports;var r=o[e]={exports:{}};return n[e](r,r.exports,u),r.exports}r=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,u.t=function(e,n){if(1&n&&(e=this(e)),8&n)return e;if("object"==typeof e&&e){if(4&n&&e.__esModule)return e;if(16&n&&"function"==typeof e.then)return e}var o=Object.create(null);u.r(o);var c={};t=t||[null,r({}),r([]),r(r)];for(var i=2&n&&e;"object"==typeof i&&!~t.indexOf(i);i=r(i))Object.getOwnPropertyNames(i).forEach((t=>c[t]=()=>e[t]));return c.default=()=>e,u.d(o,c),o},u.d=(e,t)=>{for(var r in t)u.o(t,r)&&!u.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},u.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),u.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var c={};return(()=>{function e(e){return`Minified Redux error #${e}; visit https://redux.js.org/Errors?code=${e} for the full message or use the non-minified dev environment for full errors. `}u.r(c),u.d(c,{ReactRedux:()=>ve,Redux:()=>me});var t=(()=>"function"==typeof Symbol&&Symbol.observable||"@@observable")(),r=()=>Math.random().toString(36).substring(7).split("").join("."),n={INIT:`@@redux/INIT${r()}`,REPLACE:`@@redux/REPLACE${r()}`,PROBE_UNKNOWN_ACTION:()=>`@@redux/PROBE_UNKNOWN_ACTION${r()}`};function o(e,t){return function(...r){return t(e.apply(this,r))}}function i(...e){return 0===e.length?e=>e:1===e.length?e[0]:e.reduce(((e,t)=>(...r)=>e(t(...r))))}var s=u(883),a=u(418),f=s,p=Symbol.for("react-redux-context"),l="undefined"!=typeof globalThis?globalThis:{};function d(){if(!f.createContext)return{};const e=l[p]??(l[p]=new Map);let t=e.get(f.createContext);return t||(t=f.createContext(null),e.set(f.createContext,t)),t}var y=d(),b=()=>{throw new Error("uSES not initialized!")};function h(e=y){return function(){return f.useContext(e)}}var m=h(),v=b,w=(e,t)=>e===t;function S(e=y){const t=e===y?m:h(e),r=(e,r={})=>{const{equalityFn:n=w,devModeChecks:o={}}="function"==typeof r?{equalityFn:r}:r,{store:u,subscription:c,getServerState:i,stabilityCheck:s,identityFunctionCheck:a}=t(),p=(f.useRef(!0),f.useCallback({[e.name]:t=>e(t)}[e.name],[e,s,o.stabilityCheck])),l=v(c.addNestedSub,u.getState,i||u.getState,p,n);return f.useDebugValue(l),l};return Object.assign(r,{withTypes:()=>r}),r}var g=S(),O=Symbol.for("react.element"),P=Symbol.for("react.portal"),E=Symbol.for("react.fragment"),x=Symbol.for("react.strict_mode"),j=Symbol.for("react.profiler"),C=Symbol.for("react.provider"),N=Symbol.for("react.context"),R=Symbol.for("react.server_context"),T=Symbol.for("react.forward_ref"),M=Symbol.for("react.suspense"),$=Symbol.for("react.suspense_list"),k=Symbol.for("react.memo"),_=Symbol.for("react.lazy"),q=(Symbol.for("react.offscreen"),Symbol.for("react.client.reference"),T),B=k;function I(e,t,r,n,{areStatesEqual:o,areOwnPropsEqual:u,areStatePropsEqual:c}){let i,s,a,f,p,l=!1;return function(d,y){return l?function(l,d){const y=!u(d,s),b=!o(l,i,d,s);return i=l,s=d,y&&b?(a=e(i,s),t.dependsOnOwnProps&&(f=t(n,s)),p=r(a,f,s),p):y?(e.dependsOnOwnProps&&(a=e(i,s)),t.dependsOnOwnProps&&(f=t(n,s)),p=r(a,f,s),p):b?function(){const t=e(i,s),n=!c(t,a);return a=t,n&&(p=r(a,f,s)),p}():p}(d,y):(i=d,s=y,a=e(i,s),f=t(n,s),p=r(a,f,s),l=!0,p)}}function D(e){return function(t){const r=e(t);function n(){return r}return n.dependsOnOwnProps=!1,n}}function F(e){return e.dependsOnOwnProps?Boolean(e.dependsOnOwnProps):1!==e.length}function W(e,t){return function(t,{displayName:r}){const n=function(e,t){return n.dependsOnOwnProps?n.mapToProps(e,t):n.mapToProps(e,void 0)};return n.dependsOnOwnProps=!0,n.mapToProps=function(t,r){n.mapToProps=e,n.dependsOnOwnProps=F(e);let o=n(t,r);return"function"==typeof o&&(n.mapToProps=o,n.dependsOnOwnProps=F(o),o=n(t,r)),o},n}}function A(e,t){return(r,n)=>{throw new Error(`Invalid value of type ${typeof e} for ${t} argument when connecting component ${n.wrappedComponentName}.`)}}function U(e,t,r){return{...r,...e,...t}}var L={notify(){},get:()=>[]};function V(e,t){let r,n=L,o=0,u=!1;function c(){a.onStateChange&&a.onStateChange()}function i(){o++,r||(r=t?t.addNestedSub(c):e.subscribe(c),n=function(){let e=null,t=null;return{clear(){e=null,t=null},notify(){(()=>{let t=e;for(;t;)t.callback(),t=t.next})()},get(){const t=[];let r=e;for(;r;)t.push(r),r=r.next;return t},subscribe(r){let n=!0;const o=t={callback:r,next:null,prev:t};return o.prev?o.prev.next=o:e=o,function(){n&&null!==e&&(n=!1,o.next?o.next.prev=o.prev:t=o.prev,o.prev?o.prev.next=o.next:e=o.next)}}}}())}function s(){o--,r&&0===o&&(r(),r=void 0,n.clear(),n=L)}const a={addNestedSub:function(e){i();const t=n.subscribe(e);let r=!1;return()=>{r||(r=!0,t(),s())}},notifyNestedSubs:function(){n.notify()},handleChangeWrapper:c,isSubscribed:function(){return u},trySubscribe:function(){u||(u=!0,i())},tryUnsubscribe:function(){u&&(u=!1,s())},getListeners:()=>n};return a}var K=!("undefined"==typeof window||void 0===window.document||void 0===window.document.createElement),z="undefined"!=typeof navigator&&"ReactNative"===navigator.product,H=K||z?f.useLayoutEffect:f.useEffect;function G(e,t){return e===t?0!==e||0!==t||1/e==1/t:e!=e&&t!=t}function J(e,t){if(G(e,t))return!0;if("object"!=typeof e||null===e||"object"!=typeof t||null===t)return!1;const r=Object.keys(e),n=Object.keys(t);if(r.length!==n.length)return!1;for(let n=0;n<r.length;n++)if(!Object.prototype.hasOwnProperty.call(t,r[n])||!G(e[r[n]],t[r[n]]))return!1;return!0}var Q={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},X={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},Y={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Z={[q]:{$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},[B]:Y};function ee(e){return function(e){if("object"==typeof e&&null!==e){const t=e.$$typeof;switch(t){case O:{const r=e.type;switch(r){case E:case j:case x:case M:case $:return r;default:{const e=r&&r.$$typeof;switch(e){case R:case N:case T:case _:case k:case C:return e;default:return t}}}}case P:return t}}}(e)===k?Y:Z[e.$$typeof]||Q}var te=Object.defineProperty,re=Object.getOwnPropertyNames,ne=Object.getOwnPropertySymbols,oe=Object.getOwnPropertyDescriptor,ue=Object.getPrototypeOf,ce=Object.prototype;function ie(e,t){if("string"!=typeof t){if(ce){const r=ue(t);r&&r!==ce&&ie(e,r)}let r=re(t);ne&&(r=r.concat(ne(t)));const n=ee(e),o=ee(t);for(let u=0;u<r.length;++u){const c=r[u];if(!(X[c]||o&&o[c]||n&&n[c])){const r=oe(t,c);try{te(e,c,r)}catch(e){}}}}return e}var se=b,ae=[null,null];function fe(e,t,r,n,o,u){e.current=n,r.current=!1,o.current&&(o.current=null,u())}function pe(e,t){return e===t}function le(e=y){const t=e===y?m:h(e),r=()=>{const{store:e}=t();return e};return Object.assign(r,{withTypes:()=>r}),r}var de=le();function ye(e=y){const t=e===y?de:le(e),r=()=>t().dispatch;return Object.assign(r,{withTypes:()=>r}),r}var be,he=ye();be=a.useSyncExternalStoreWithSelector,v=be,(e=>{se=e})(s.useSyncExternalStore);const me={createStore:function r(o,u,c){if("function"!=typeof o)throw new Error(e(2));if("function"==typeof u&&"function"==typeof c||"function"==typeof c&&"function"==typeof arguments[3])throw new Error(e(0));if("function"==typeof u&&void 0===c&&(c=u,u=void 0),void 0!==c){if("function"!=typeof c)throw new Error(e(1));return c(r)(o,u)}let i=o,s=u,a=new Map,f=a,p=0,l=!1;function d(){f===a&&(f=new Map,a.forEach(((e,t)=>{f.set(t,e)})))}function y(){if(l)throw new Error(e(3));return s}function b(t){if("function"!=typeof t)throw new Error(e(4));if(l)throw new Error(e(5));let r=!0;d();const n=p++;return f.set(n,t),function(){if(r){if(l)throw new Error(e(6));r=!1,d(),f.delete(n),a=null}}}function h(t){if(!function(e){if("object"!=typeof e||null===e)return!1;let t=e;for(;null!==Object.getPrototypeOf(t);)t=Object.getPrototypeOf(t);return Object.getPrototypeOf(e)===t||null===Object.getPrototypeOf(e)}(t))throw new Error(e(7));if(void 0===t.type)throw new Error(e(8));if("string"!=typeof t.type)throw new Error(e(17));if(l)throw new Error(e(9));try{l=!0,s=i(s,t)}finally{l=!1}return(a=f).forEach((e=>{e()})),t}return h({type:n.INIT}),{dispatch:h,subscribe:b,getState:y,replaceReducer:function(t){if("function"!=typeof t)throw new Error(e(10));i=t,h({type:n.REPLACE})},[t]:function(){const r=b;return{subscribe(t){if("object"!=typeof t||null===t)throw new Error(e(11));function n(){const e=t;e.next&&e.next(y())}return n(),{unsubscribe:r(n)}},[t](){return this}}}}},applyMiddleware:function(...t){return r=>(n,o)=>{const u=r(n,o);let c=()=>{throw new Error(e(15))};const s={getState:u.getState,dispatch:(e,...t)=>c(e,...t)},a=t.map((e=>e(s)));return c=i(...a)(u.dispatch),{...u,dispatch:c}}},bindActionCreators:function(t,r){if("function"==typeof t)return o(t,r);if("object"!=typeof t||null===t)throw new Error(e(16));const n={};for(const e in t){const u=t[e];"function"==typeof u&&(n[e]=o(u,r))}return n},combineReducers:function(t){const r=Object.keys(t),o={};for(let e=0;e<r.length;e++){const n=r[e];"function"==typeof t[n]&&(o[n]=t[n])}const u=Object.keys(o);let c;try{!function(t){Object.keys(t).forEach((r=>{const o=t[r];if(void 0===o(void 0,{type:n.INIT}))throw new Error(e(12));if(void 0===o(void 0,{type:n.PROBE_UNKNOWN_ACTION()}))throw new Error(e(13))}))}(o)}catch(e){c=e}return function(t={},r){if(c)throw c;let n=!1;const i={};for(let c=0;c<u.length;c++){const s=u[c],a=o[s],f=t[s],p=a(f,r);if(void 0===p)throw r&&r.type,new Error(e(14));i[s]=p,n=n||p!==f}return n=n||u.length!==Object.keys(t).length,n?i:t}},compose:i},ve={Provider:function({store:e,context:t,children:r,serverState:n,stabilityCheck:o="once",identityFunctionCheck:u="once"}){const c=f.useMemo((()=>{const t=V(e);return{store:e,subscription:t,getServerState:n?()=>n:void 0,stabilityCheck:o,identityFunctionCheck:u}}),[e,n,o,u]),i=f.useMemo((()=>e.getState()),[e]);H((()=>{const{subscription:t}=c;return t.onStateChange=t.notifyNestedSubs,t.trySubscribe(),i!==e.getState()&&t.notifyNestedSubs(),()=>{t.tryUnsubscribe(),t.onStateChange=void 0}}),[c,i]);const s=t||y;return f.createElement(s.Provider,{value:c},r)},connect:function(e,t,r,{pure:n,areStatesEqual:o=pe,areOwnPropsEqual:u=J,areStatePropsEqual:c=J,areMergedPropsEqual:i=J,forwardRef:s=!1,context:a=y}={}){const p=a,l=function(e){return e?"function"==typeof e?W(e):A(e,"mapStateToProps"):D((()=>({})))}(e),d=function(e){return e&&"object"==typeof e?D((t=>function(e,t){const r={};for(const n in e){const o=e[n];"function"==typeof o&&(r[n]=(...e)=>t(o(...e)))}return r}(e,t))):e?"function"==typeof e?W(e):A(e,"mapDispatchToProps"):D((e=>({dispatch:e})))}(t),b=function(e){return e?"function"==typeof e?function(e){return function(t,{displayName:r,areMergedPropsEqual:n}){let o,u=!1;return function(t,r,c){const i=e(t,r,c);return u?n(i,o)||(o=i):(u=!0,o=i),o}}}(e):A(e,"mergeProps"):()=>U}(r),h=Boolean(e);return e=>{const t=e.displayName||e.name||"Component",r=`Connect(${t})`,n={shouldHandleStateChanges:h,displayName:r,wrappedComponentName:t,WrappedComponent:e,initMapStateToProps:l,initMapDispatchToProps:d,initMergeProps:b,areStatesEqual:o,areStatePropsEqual:c,areOwnPropsEqual:u,areMergedPropsEqual:i};function a(t){const[r,o,u]=f.useMemo((()=>{const{reactReduxForwardedRef:e,...r}=t;return[t.context,e,r]}),[t]),c=f.useMemo((()=>p),[r,p]),i=f.useContext(c),s=Boolean(t.store)&&Boolean(t.store.getState)&&Boolean(t.store.dispatch),a=Boolean(i)&&Boolean(i.store),l=s?t.store:i.store,d=a?i.getServerState:l.getState,y=f.useMemo((()=>function(e,{initMapStateToProps:t,initMapDispatchToProps:r,initMergeProps:n,...o}){return I(t(e,o),r(e,o),n(e,o),e,o)}(l.dispatch,n)),[l]),[b,m]=f.useMemo((()=>{if(!h)return ae;const e=V(l,s?void 0:i.subscription),t=e.notifyNestedSubs.bind(e);return[e,t]}),[l,s,i]),v=f.useMemo((()=>s?i:{...i,subscription:b}),[s,i,b]),w=f.useRef(void 0),S=f.useRef(u),g=f.useRef(void 0),O=f.useRef(!1),P=f.useRef(!1),E=f.useRef(void 0);H((()=>(P.current=!0,()=>{P.current=!1})),[]);const x=f.useMemo((()=>()=>g.current&&u===S.current?g.current:y(l.getState(),u)),[l,u]),j=f.useMemo((()=>e=>b?function(e,t,r,n,o,u,c,i,s,a,f){if(!e)return()=>{};let p=!1,l=null;const d=()=>{if(p||!i.current)return;const e=t.getState();let r,d;try{r=n(e,o.current)}catch(e){d=e,l=e}d||(l=null),r===u.current?c.current||a():(u.current=r,s.current=r,c.current=!0,f())};return r.onStateChange=d,r.trySubscribe(),d(),()=>{if(p=!0,r.tryUnsubscribe(),r.onStateChange=null,l)throw l}}(h,l,b,y,S,w,O,P,g,m,e):()=>{}),[b]);var C,N;let R;C=fe,N=[S,w,O,u,g,m],H((()=>C(...N)),undefined);try{R=se(j,x,d?()=>y(d(),u):x)}catch(e){throw E.current&&(e.message+=`\nThe error may be correlated with this previous error:\n${E.current.stack}\n\n`),e}H((()=>{E.current=void 0,g.current=void 0,w.current=R}));const T=f.useMemo((()=>f.createElement(e,{...R,ref:o})),[o,e,R]);return f.useMemo((()=>h?f.createElement(c.Provider,{value:v},T):T),[c,T,v])}const y=f.memo(a);if(y.WrappedComponent=e,y.displayName=a.displayName=r,s){const t=f.forwardRef((function(e,t){return f.createElement(y,{...e,reactReduxForwardedRef:t})}));return t.displayName=r,t.WrappedComponent=e,ie(t,e)}return ie(y,e)}},useDispatch:he,useSelector:g}})(),c})()));