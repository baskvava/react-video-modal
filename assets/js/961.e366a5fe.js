/*! For license information please see 961.e366a5fe.js.LICENSE.txt */
"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[961],{4393:(e,n,t)=>{var r=t(6298),o=Symbol.for("react.element"),i=Symbol.for("react.fragment"),a=Object.prototype.hasOwnProperty,u=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function l(e,n,t){var r,i={},l=null,s=null;for(r in void 0!==t&&(l=""+t),void 0!==n.key&&(l=""+n.key),void 0!==n.ref&&(s=n.ref),n)a.call(n,r)&&!c.hasOwnProperty(r)&&(i[r]=n[r]);if(e&&e.defaultProps)for(r in n=e.defaultProps)void 0===i[r]&&(i[r]=n[r]);return{$$typeof:o,type:e,key:l,ref:s,props:i,_owner:u.current}}n.Fragment=i,n.jsx=l,n.jsxs=l},8501:(e,n)=>{var t=Symbol.for("react.element"),r=Symbol.for("react.portal"),o=Symbol.for("react.fragment"),i=Symbol.for("react.strict_mode"),a=Symbol.for("react.profiler"),u=Symbol.for("react.provider"),c=Symbol.for("react.context"),l=Symbol.for("react.forward_ref"),s=Symbol.for("react.suspense"),d=Symbol.for("react.memo"),f=Symbol.for("react.lazy"),p=Symbol.iterator;var h={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},y=Object.assign,m={};function v(e,n,t){this.props=e,this.context=n,this.refs=m,this.updater=t||h}function b(){}function g(e,n,t){this.props=e,this.context=n,this.refs=m,this.updater=t||h}v.prototype.isReactComponent={},v.prototype.setState=function(e,n){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,n,"setState")},v.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},b.prototype=v.prototype;var x=g.prototype=new b;x.constructor=g,y(x,v.prototype),x.isPureReactComponent=!0;var C=Array.isArray,w=Object.prototype.hasOwnProperty,_={current:null},j={key:!0,ref:!0,__self:!0,__source:!0};function k(e,n,r){var o,i={},a=null,u=null;if(null!=n)for(o in void 0!==n.ref&&(u=n.ref),void 0!==n.key&&(a=""+n.key),n)w.call(n,o)&&!j.hasOwnProperty(o)&&(i[o]=n[o]);var c=arguments.length-2;if(1===c)i.children=r;else if(1<c){for(var l=Array(c),s=0;s<c;s++)l[s]=arguments[s+2];i.children=l}if(e&&e.defaultProps)for(o in c=e.defaultProps)void 0===i[o]&&(i[o]=c[o]);return{$$typeof:t,type:e,key:a,ref:u,props:i,_owner:_.current}}function S(e){return"object"==typeof e&&null!==e&&e.$$typeof===t}var L=/\/+/g;function E(e,n){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var n={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return n[e]}))}(""+e.key):n.toString(36)}function R(e,n,o,i,a){var u=typeof e;"undefined"!==u&&"boolean"!==u||(e=null);var c=!1;if(null===e)c=!0;else switch(u){case"string":case"number":c=!0;break;case"object":switch(e.$$typeof){case t:case r:c=!0}}if(c)return a=a(c=e),e=""===i?"."+E(c,0):i,C(a)?(o="",null!=e&&(o=e.replace(L,"$&/")+"/"),R(a,n,o,"",(function(e){return e}))):null!=a&&(S(a)&&(a=function(e,n){return{$$typeof:t,type:e.type,key:n,ref:e.ref,props:e.props,_owner:e._owner}}(a,o+(!a.key||c&&c.key===a.key?"":(""+a.key).replace(L,"$&/")+"/")+e)),n.push(a)),1;if(c=0,i=""===i?".":i+":",C(e))for(var l=0;l<e.length;l++){var s=i+E(u=e[l],l);c+=R(u,n,o,s,a)}else if(s=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=p&&e[p]||e["@@iterator"])?e:null}(e),"function"==typeof s)for(e=s.call(e),l=0;!(u=e.next()).done;)c+=R(u=u.value,n,o,s=i+E(u,l++),a);else if("object"===u)throw n=String(e),Error("Objects are not valid as a React child (found: "+("[object Object]"===n?"object with keys {"+Object.keys(e).join(", ")+"}":n)+"). If you meant to render a collection of children, use an array instead.");return c}function M(e,n,t){if(null==e)return e;var r=[],o=0;return R(e,r,"","",(function(e){return n.call(t,e,o++)})),r}function N(e){if(-1===e._status){var n=e._result;(n=n()).then((function(n){0!==e._status&&-1!==e._status||(e._status=1,e._result=n)}),(function(n){0!==e._status&&-1!==e._status||(e._status=2,e._result=n)})),-1===e._status&&(e._status=0,e._result=n)}if(1===e._status)return e._result.default;throw e._result}var O={current:null},$={transition:null},P={ReactCurrentDispatcher:O,ReactCurrentBatchConfig:$,ReactCurrentOwner:_};n.Children={map:M,forEach:function(e,n,t){M(e,(function(){n.apply(this,arguments)}),t)},count:function(e){var n=0;return M(e,(function(){n++})),n},toArray:function(e){return M(e,(function(e){return e}))||[]},only:function(e){if(!S(e))throw Error("React.Children.only expected to receive a single React element child.");return e}},n.Component=v,n.Fragment=o,n.Profiler=a,n.PureComponent=g,n.StrictMode=i,n.Suspense=s,n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=P,n.cloneElement=function(e,n,r){if(null==e)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var o=y({},e.props),i=e.key,a=e.ref,u=e._owner;if(null!=n){if(void 0!==n.ref&&(a=n.ref,u=_.current),void 0!==n.key&&(i=""+n.key),e.type&&e.type.defaultProps)var c=e.type.defaultProps;for(l in n)w.call(n,l)&&!j.hasOwnProperty(l)&&(o[l]=void 0===n[l]&&void 0!==c?c[l]:n[l])}var l=arguments.length-2;if(1===l)o.children=r;else if(1<l){c=Array(l);for(var s=0;s<l;s++)c[s]=arguments[s+2];o.children=c}return{$$typeof:t,type:e.type,key:i,ref:a,props:o,_owner:u}},n.createContext=function(e){return(e={$$typeof:c,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null}).Provider={$$typeof:u,_context:e},e.Consumer=e},n.createElement=k,n.createFactory=function(e){var n=k.bind(null,e);return n.type=e,n},n.createRef=function(){return{current:null}},n.forwardRef=function(e){return{$$typeof:l,render:e}},n.isValidElement=S,n.lazy=function(e){return{$$typeof:f,_payload:{_status:-1,_result:e},_init:N}},n.memo=function(e,n){return{$$typeof:d,type:e,compare:void 0===n?null:n}},n.startTransition=function(e){var n=$.transition;$.transition={};try{e()}finally{$.transition=n}},n.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")},n.useCallback=function(e,n){return O.current.useCallback(e,n)},n.useContext=function(e){return O.current.useContext(e)},n.useDebugValue=function(){},n.useDeferredValue=function(e){return O.current.useDeferredValue(e)},n.useEffect=function(e,n){return O.current.useEffect(e,n)},n.useId=function(){return O.current.useId()},n.useImperativeHandle=function(e,n,t){return O.current.useImperativeHandle(e,n,t)},n.useInsertionEffect=function(e,n){return O.current.useInsertionEffect(e,n)},n.useLayoutEffect=function(e,n){return O.current.useLayoutEffect(e,n)},n.useMemo=function(e,n){return O.current.useMemo(e,n)},n.useReducer=function(e,n,t){return O.current.useReducer(e,n,t)},n.useRef=function(e){return O.current.useRef(e)},n.useState=function(e){return O.current.useState(e)},n.useSyncExternalStore=function(e,n,t){return O.current.useSyncExternalStore(e,n,t)},n.useTransition=function(){return O.current.useTransition()},n.version="18.2.0"},6298:(e,n,t)=>{e.exports=t(8501)},8530:(e,n,t)=>{e.exports=t(4393)},5961:(e,n,t)=>{t.d(n,{O:()=>p,W:()=>f});var r=t(8530),o=t(911),i=t(7234);function a(e){var n=e.onClosed,t=e.primary;return(0,r.jsx)("button",{onClick:n,children:(0,r.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",x:"0px",y:"0px",width:"20",height:"20",viewBox:"0 0 30 30",fill:"".concat(void 0!==t&&t?"#000000":"#ffffff"),children:(0,r.jsx)("path",{d:"M 7 4 C 6.744125 4 6.4879687 4.0974687 6.2929688 4.2929688 L 4.2929688 6.2929688 C 3.9019687 6.6839688 3.9019687 7.3170313 4.2929688 7.7070312 L 11.585938 15 L 4.2929688 22.292969 C 3.9019687 22.683969 3.9019687 23.317031 4.2929688 23.707031 L 6.2929688 25.707031 C 6.6839688 26.098031 7.3170313 26.098031 7.7070312 25.707031 L 15 18.414062 L 22.292969 25.707031 C 22.682969 26.098031 23.317031 26.098031 23.707031 25.707031 L 25.707031 23.707031 C 26.098031 23.316031 26.098031 22.682969 25.707031 22.292969 L 18.414062 15 L 25.707031 7.7070312 C 26.098031 7.3170312 26.098031 6.6829688 25.707031 6.2929688 L 23.707031 4.2929688 C 23.316031 3.9019687 22.682969 3.9019687 22.292969 4.2929688 L 15 11.585938 L 7.7070312 4.2929688 C 7.5115312 4.0974687 7.255875 4 7 4 z"})})})}function u(){return(0,r.jsx)("svg",{fill:"rgb(209 213 219)",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",style:{width:"32px"},children:(0,r.jsx)("path",{d:"M12,1A11,11,0,1,0,23,12,11.013,11.013,0,0,0,12,1Zm0,20a9,9,0,1,1,9-9A9.011,9.011,0,0,1,12,21ZM10,8l6,4-6,4Z"})})}function c(){return(0,r.jsx)("svg",{fill:"rgb(209 213 219)",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",style:{width:"32px"},children:(0,r.jsx)("path",{d:"M12,1A11,11,0,1,0,23,12,11.013,11.013,0,0,0,12,1Zm0,20a9,9,0,1,1,9-9A9.011,9.011,0,0,1,12,21ZM9,9h6v6H9Z"})})}function l(){return(0,r.jsxs)("svg",{viewBox:"0 -1 24 24",id:"meteor-icon-kit__regular-volume-mute",fill:"none",xmlns:"http://www.w3.org/2000/svg",style:{width:"32px"},children:[(0,r.jsx)("path",{d:"M1.29292 20.2929C0.902398 20.6834 0.902398 21.3166 1.29292 21.7071C1.68345 22.0976 2.31661 22.0976 2.70714 21.7071L3.69957 20.7147C3.70209 20.7122 3.7046 20.7097 3.70711 20.7072L21.7071 2.70721C21.7096 2.70472 21.7121 2.70221 21.7145 2.69969L22.7071 1.70711C23.0977 1.31658 23.0977 0.68342 22.7071 0.29289C22.3166 -0.097631 21.6834 -0.097631 21.2929 0.29289L1.29292 20.2929z",fill:"rgb(209 213 219)"}),(0,r.jsx)("path",{d:"M13.5 2.30132V5.25746L11.5 7.25747L11.5 2.30132L5.68232 7.73117C5.49715 7.90399 5.25329 8.00011 5 8.00011H2V14.0001H4.75735L2.75735 16.0001H1C0.447715 16.0001 0 15.5524 0 15.0001V7.00011C0 6.44783 0.447715 6.00011 1 6.00011H4.60584L10.1354 0.83921C11.4138 -0.353996 13.5 0.55256 13.5 2.30132z",fill:"rgb(209 213 219)"}),(0,r.jsx)("path",{d:"M9.45372 17.789L11.5 19.6989V15.7427L13.5 13.7427V19.6989C13.5 21.4477 11.4138 22.3542 10.1354 21.161L8.03867 19.2041L9.45372 17.789z",fill:"rgb(209 213 219)"}),(0,r.jsx)("path",{d:"M17.7632 9.4796C17.9202 9.9716 18.0008 10.487 18 11.0078C17.9986 11.8868 17.7656 12.7499 17.3243 13.5101C16.8831 14.2703 16.2492 14.9008 15.4866 15.3379C15.0075 15.6126 14.8417 16.2237 15.1164 16.7028C15.391 17.182 16.0021 17.3477 16.4813 17.0731C17.5489 16.4611 18.4363 15.5784 19.0541 14.5141C19.6718 13.4498 19.9981 12.2415 20 11.0109C20.0016 9.9467 19.7606 8.89836 19.298 7.94475L17.7632 9.4796z",fill:"rgb(209 213 219)"}),(0,r.jsx)("path",{d:"M20.7753 6.46747L20.7977 6.50613C21.5877 7.87695 22.0024 9.4318 22 11.014C21.9975 12.5962 21.578 14.1498 20.7838 15.5181C19.9895 16.8865 18.8485 18.0213 17.4759 18.8082C16.9968 19.0829 16.831 19.6939 17.1057 20.1731C17.3803 20.6522 17.9914 20.818 18.4705 20.5433C20.1482 19.5816 21.5427 18.1946 22.5135 16.5222C23.4843 14.8497 23.997 12.9509 24 11.0171C24.003 9.0833 23.4961 7.18292 22.5305 5.50747C22.4341 5.34013 22.3334 5.17564 22.2286 5.01411L20.7753 6.46747z",fill:"rgb(209 213 219)"})]})}function s(){return(0,r.jsxs)("svg",{viewBox:"0 0 24 24",id:"meteor-icon-kit__regular-volume-up",fill:"none",xmlns:"http://www.w3.org/2000/svg",style:{width:"32px"},children:[(0,r.jsxs)("g",{"clip-path":"url(#clip0_525_161)",children:[(0,r.jsx)("path",{d:"M10.1354 1.83922C11.4138 0.646005 13.5 1.55256 13.5 3.30132V20.6989C13.5 22.4477 11.4138 23.3542 10.1354 22.161L4.60584 17.0001H1C0.447715 17.0001 0 16.5524 0 16.0001V8.00011C0 7.44783 0.447715 7.00011 1 7.00011H4.60584L10.1354 1.83922ZM11.5 3.30133L5.68232 8.73117C5.49715 8.904 5.25329 9.00011 5 9.00011H2V15.0001H5C5.25329 15.0001 5.49715 15.0962 5.68232 15.2691L11.5 20.6989L11.5 3.30133Z",fill:"rgb(209 213 219)"}),(0,r.jsx)("path",{d:"M15.1164 17.7028C14.8417 17.2237 15.0075 16.6126 15.4866 16.3379C16.2492 15.9008 16.8831 15.2703 17.3243 14.5101C17.7656 13.7499 17.9986 12.8868 18 12.0078C18.0013 11.1288 17.771 10.265 17.3321 9.50346C16.8931 8.74189 16.2612 8.10948 15.5 7.66998C15.0217 7.39384 14.8578 6.78225 15.134 6.30396C15.4101 5.82567 16.0217 5.66179 16.5 5.93793C17.5657 6.55323 18.4504 7.4386 19.0649 8.50479C19.6793 9.57099 20.0019 10.7803 20 12.0109C19.9981 13.2415 19.6718 14.4498 19.0541 15.5141C18.4363 16.5784 17.5489 17.4611 16.4813 18.0731C16.0021 18.3477 15.391 18.182 15.1164 17.7028Z",fill:"rgb(209 213 219)"}),(0,r.jsx)("path",{d:"M17.4759 19.8082C16.9968 20.0829 16.831 20.6939 17.1057 21.1731C17.3803 21.6522 17.9914 21.818 18.4706 21.5433C20.1482 20.5816 21.5428 19.1946 22.5135 17.5222C23.4843 15.8497 23.997 13.9509 24 12.0171C24.003 10.0833 23.4961 8.18292 22.5305 6.50747C21.5649 4.83202 20.1747 3.44072 18.5 2.47383C18.0217 2.19769 17.4101 2.36156 17.134 2.83986C16.8578 3.31815 17.0217 3.92974 17.5 4.20588C18.8702 4.99697 20.0077 6.13531 20.7977 7.50613C21.5877 8.87695 22.0024 10.4318 22 12.014C21.9976 13.5962 21.5781 15.1498 20.7838 16.5182C19.9895 17.8865 18.8486 19.0213 17.4759 19.8082Z",fill:"rgb(209 213 219)"})]}),(0,r.jsx)("defs",{children:(0,r.jsx)("clipPath",{id:"clip0_525_161",children:(0,r.jsx)("rect",{width:"24",height:"24",fill:"white"})})})]})}!function(e,n){void 0===n&&(n={});var t=n.insertAt;if(e&&"undefined"!=typeof document){var r=document.head||document.getElementsByTagName("head")[0],o=document.createElement("style");o.type="text/css","top"===t&&r.firstChild?r.insertBefore(o,r.firstChild):r.appendChild(o),o.styleSheet?o.styleSheet.cssText=e:o.appendChild(document.createTextNode(e))}}('.modal-overlay {\n  position: fixed;\n  top: 0px;\n  bottom: 0px;\n  left: 0px;\n  right: 0px;\n\n  background-color: rgb(0, 0, 0, 0.7);\n  color: black;\n\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n}\n\n.modal-container {\n  border-radius: 4px;\n  background-color: rgb(255, 255, 255);\n  overflow: hidden;\n}\n\n.no-header {\n  position: relative;\n}\n\n.no-header .no-header-btn {\n  position: absolute;\n  right: -28px;\n  top: 0px;\n}\n\n.no-header .no-header-btn button {\n  padding: 0;\n  margin: 0;\n  border: none;\n  background: none;\n}\n\n.modal-header-container {\n  display: flex;\n  justify-content: space-between;\n  padding: 16px;\n}\n\n.modal-header-container button {\n  padding: 0;\n  margin: 0;\n  border: none;\n  background: none;\n}\n\n.modal-body {\n  width: 100%;\n}\n\niframe {\n  border: none;\n}\n\nbutton:hover {\n  cursor: pointer;\n}\n\n.video-frame {\n  position: relative;\n}\n\n.video-frame .controls {\n  width: 100%;\n  position: absolute;\n  bottom: 0;\n  background-color: rgb(75 85 99);\n  opacity: 1;\n  /* padding: 0 6px; */\n  display: flex;\n  align-items: center;\n  color: rgb(209 213 219);\n}\n\n.video-frame .controls:hover {\n  opacity: 0.9;\n}\n\n.video-frame .controls .time {\n  white-space: nowrap;\n}\n\n.video-frame .controls .progress {\n  width: 60%;\n  height: 8px;\n  padding: 0 10px 0 20px;\n}\n\n.video-frame .controls .progress .progress-line {\n  width: 100%;\n  height: 100%;\n  background-color: black;\n  border-radius: 6px;\n}\n\n.video-frame .controls .progress .progress-line .progress-bar {\n  height: 100%;\n  background-color: rgb(156 163 175);\n  border-radius: 6px;\n  position: relative;\n}\n\n.video-frame .controls .progress .progress-line .progress-bar:after {\n  display: block;\n  content: "";\n  height: 16px;\n  width: 16px;\n  border-radius: 100%;\n  background-color: white;\n\n  position: absolute;\n  right: 0;\n  bottom: -4px;\n}\n\n.video-frame .controls button {\n  width: 32px;\n  height: 32px;\n  border: none;\n  background-color: rgb(75 85 99);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  color: white;\n}\n\n.controls .volumn {\n  padding-right: 12px;\n}\ninput[type="range"] {\n  -webkit-appearance: none;\n  width: 98%;\n  height: 7px;\n  background: black;\n  border-radius: 20px;\n  background-image: linear-gradient(rgb(156 163 175), rgb(156 163 175));\n  background-size: 100% 100%;\n  background-repeat: no-repeat;\n}\n\ninput[type="range"]:hover {\n  accent-color: white;\n}\n\ninput[type="range"]::-webkit-slider-thumb {\n  -webkit-appearance: none;\n  height: 16px;\n  width: 16px;\n  border-radius: 50%;\n  background: white;\n  cursor: pointer;\n}\n\ninput[type="range"]:disabled {\n  cursor: not-allowed;\n}\n\ninput[type="range"]:disabled::-webkit-slider-thumb {\n  cursor: not-allowed;\n}\n');var d=[9,16];function f(e){var n,t,f,p=e.isOpen,h=void 0!==p&&p,y=e.onClosed,m=e.url,v=e.title,b=e.header,g=e.maxWidth,x=void 0===g?1200:g,C=e.width,w=e.responsive,_=void 0!==w&&w,j=e.widthRatio,k=void 0===j?.8:j,S=e.ratio,L=void 0===S?d:S,E=e.autoPlay,R=void 0===E||E,M=e.type,N=void 0===M?"video":M,O=e.controls,$=void 0===O?"custom":O,P=(0,o.useRef)(null),z=(0,o.useRef)(null),T=(0,o.useRef)(null),V=(0,o.useRef)(null),I=(0,o.useState)(R),A=I[0],H=I[1],B=(0,o.useState)(null),Z=B[0],F=B[1],D=(0,o.useState)(0),U=D[0],W=D[1],q=(0,o.useState)(!1),Y=q[0],G=q[1],J=(n=(0,o.useState)(0),t=n[0],f=n[1],(0,o.useLayoutEffect)((function(){var e=new ResizeObserver((function(e){f(e[0].contentRect.width)}));return e.observe(document.body),function(){e.disconnect()}}),[]),{observerWidth:t}).observerWidth,K=L[0],Q=L[1],X=J*k,ee=Math.min(1200,x),ne=C?_?Math.min(X,C):C:Math.min(X,ee),te=ne*K/Q;return(0,o.useEffect)((function(){h?(document.body.style.overflow="hidden",z.current&&"video"===N&&(R&&z.current.play(),z.current.addEventListener("loadeddata",(function(e){F(e.target.duration)})),z.current.addEventListener("timeupdate",(function(e){var n=e.target.currentTime;W(n)})))):document.body.style.overflow="unset"}),[h]),(0,o.useEffect)((function(){V.current&&Z&&(V.current.style.backgroundSize="".concat(100*U/Z,"% ").concat(100,"%"),V.current.value=U.toString())}),[U]),(0,o.useEffect)((function(){var e=function(e){27===e.keyCode&&y()},n=function(e){var n;(null===(n=null==P?void 0:P.current)||void 0===n?void 0:n.contains(e.target))||y()};return document.addEventListener("mousedown",n),document.addEventListener("keydown",e),function(){document.removeEventListener("mousedown",n),document.removeEventListener("keydown",e)}}),[y]),h?(0,r.jsx)(r.Fragment,{children:(0,i.createPortal)((0,r.jsx)("div",{className:"modal-overlay",children:(0,r.jsxs)("div",{className:"".concat(b?"modal-container":"no-header"),ref:P,children:[b?(0,r.jsx)(r.Fragment,{children:(0,r.jsxs)("div",{className:"modal-header-container",children:[(0,r.jsx)("div",{className:"modal-header",children:b}),(0,r.jsx)(a,{primary:!0,onClosed:y})]})}):(0,r.jsx)("div",{className:"no-header-btn",children:(0,r.jsx)(a,{onClosed:y})}),(0,r.jsx)("div",{className:"modal-body",style:{height:Math.floor(te),width:ne},children:"video"===N?(0,r.jsxs)("div",{className:"video-frame",style:{height:Math.floor(te)},children:[(0,r.jsx)("video",{controls:"default"===$||"custom"!==$&&"hidden"!==$,ref:z,width:ne,children:(0,r.jsx)("source",{src:m,type:"video/mp4"})}),"custom"===$&&(0,r.jsxs)("div",{className:"controls",children:[(0,r.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:"6px",paddingLeft:"6px"},children:[(0,r.jsx)("button",A?{className:"start","aria-label":"play pause toggle",onClick:function(){z.current&&z.current.pause(),H(!1)},children:(0,r.jsx)(c,{})}:{className:"start","aria-label":"play pause toggle",onClick:function(){z.current&&z.current.play(),H(!0)},children:(0,r.jsx)(u,{})}),(0,r.jsxs)("span",{className:"time",children:["".concat(Math.floor(U/60)," : ").concat(Math.floor(U%60))," ","/"," ",Z&&!isNaN(Z)?"".concat(Math.floor(Z/60)," : ").concat(Math.floor(Z%60)):""]})]}),(0,r.jsx)("div",{style:{paddingLeft:"10px",flex:"1 1 auto",width:"100%",height:"100%"},children:Z&&(0,r.jsx)("input",{ref:V,type:"range",min:0,max:Z,step:.1,onChange:function(e){if(z.current&&V.current){var n=Number(e.target.value);z.current.currentTime=n,V.current.style.backgroundSize="".concat(100*n/Z,"% ").concat(100,"%")}}})}),(0,r.jsx)("button",Y?{className:"start","aria-label":"muted not muted toggle",onClick:function(){z.current&&T.current&&(z.current.muted=!1,G(!1),T.current.value="0.5",T.current.style.backgroundSize="".concat(50,"% ").concat(100,"%"))},children:(0,r.jsx)(l,{})}:{className:"start","aria-label":"muted not muted toggle",onClick:function(){z.current&&T.current&&(z.current.muted=!0,G(!0),T.current.value="0",T.current.style.backgroundSize="".concat(0,"% ").concat(100,"%"))},children:(0,r.jsx)(s,{})}),(0,r.jsx)("div",{className:"volumn",children:(0,r.jsx)("input",{ref:T,type:"range",min:0,max:1,step:.1,disabled:Y,onChange:function(e){if(z.current&&T.current){var n=Number(e.target.value);z.current.volume=n,T.current.style.backgroundSize="".concat(100*n,"% ").concat(100,"%")}}})})]})]}):(0,r.jsx)("iframe",{title:v,width:ne,height:te,src:m,allow:"".concat(R&&"autoplay")})})]})}),document.body)}):null}function p(){var e=(0,o.useState)(!1),n=e[0],t=e[1],r=(0,o.useCallback)((function(){t(!n)}),[t]),i=(0,o.useCallback)((function(){t(!1)}),[t]);return{isOpen:n,toggle:r,close:i}}}}]);