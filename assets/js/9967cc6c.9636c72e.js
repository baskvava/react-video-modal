/*! For license information please see 9967cc6c.9636c72e.js.LICENSE.txt */
"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[73],{1380:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>d,default:()=>v,frontMatter:()=>c,metadata:()=>f,toc:()=>h});var o=n(7462),r=n(911),u=n(3905);const a='import React from \'react\';\nimport {ModalVideo, useToggle} from \'@baskvava/react-video-modal\';\n\nfunction UseToogle() {\n  // highlight-start\n  const {isOpen, toggle, close} = useToggle();\n  // highlight-end\n\n  return (\n    <div>\n      <h2>UseToogle Example</h2>\n      <button\n        // highlight-next-line\n        onClick={toggle}\n        className="v-btn">\n        Click Me to Open Video Modal\n      </button>\n      <ModalVideo\n        title="video"\n        header="useToggle"\n        width={800}\n        // highlight-next-line\n        isOpen={isOpen}\n        // highlight-next-line\n        onClosed={close}\n        url="https://storage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"\n      />\n    </div>\n  );\n}\n\nexport default UseToogle;\n';var i=n(5961);const s=function(){const{isOpen:e,toggle:t,close:n}=(0,i.O)();return r.createElement("div",null,r.createElement("h2",null,"UseToogle Example"),r.createElement("button",{onClick:t,className:"v-btn"},"Click Me to Open Video Modal"),r.createElement(i.W,{title:"video",header:"useToggle",width:800,isOpen:e,onClosed:n,url:"https://storage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"}))};var l=n(9586);const c={},d="Hook",f={unversionedId:"hooks",id:"hooks",title:"Hook",description:"We provide the following custom hooks for easily use toggle and manage its state",source:"@site/docs/hooks.mdx",sourceDirName:".",slug:"/hooks",permalink:"/react-video-modal/docs/hooks",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/hooks.mdx",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Getting Started",permalink:"/react-video-modal/docs/getting-started"}},p={},h=[{value:"UseToogle",id:"usetoogle",level:2},{value:"Usage",id:"usage",level:2}],m={toc:h},y="wrapper";function v(e){let{components:t,...n}=e;return(0,u.kt)(y,(0,o.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,u.kt)("h1",{id:"hook"},"Hook"),(0,u.kt)("p",null,"We provide the following custom hooks for easily use toggle and manage its state"),(0,u.kt)("h2",{id:"usetoogle"},"UseToogle"),(0,u.kt)("p",null,"We provide the powerful custom hook to control the modal close/open state"),(0,u.kt)("p",null,"Here is the inerface of useToggle return type"),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-jsx"},"interface UseToggleReturnType {\n  isOpen: boolean; // default is false\n  toggle: () => void; // toggle isOpen\n  close: () => void; // close the modal, always set isOpen as false\n}\n")),(0,u.kt)("h2",{id:"usage"},"Usage"),(0,u.kt)(s,{mdxType:"UseToggle"}),(0,u.kt)(l.Z,{language:"jsx",title:"/src/components/hooks/UseToggle.jsx",mdxType:"CodeBlock"},a))}v.isMDXComponent=!0},5251:(e,t,n)=>{var o=n(7294),r=Symbol.for("react.element"),u=Symbol.for("react.fragment"),a=Object.prototype.hasOwnProperty,i=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,s={key:!0,ref:!0,__self:!0,__source:!0};function l(e,t,n){var o,u={},l=null,c=null;for(o in void 0!==n&&(l=""+n),void 0!==t.key&&(l=""+t.key),void 0!==t.ref&&(c=t.ref),t)a.call(t,o)&&!s.hasOwnProperty(o)&&(u[o]=t[o]);if(e&&e.defaultProps)for(o in t=e.defaultProps)void 0===u[o]&&(u[o]=t[o]);return{$$typeof:r,type:e,key:l,ref:c,props:u,_owner:i.current}}t.Fragment=u,t.jsx=l,t.jsxs=l},2408:(e,t)=>{var n=Symbol.for("react.element"),o=Symbol.for("react.portal"),r=Symbol.for("react.fragment"),u=Symbol.for("react.strict_mode"),a=Symbol.for("react.profiler"),i=Symbol.for("react.provider"),s=Symbol.for("react.context"),l=Symbol.for("react.forward_ref"),c=Symbol.for("react.suspense"),d=Symbol.for("react.memo"),f=Symbol.for("react.lazy"),p=Symbol.iterator;var h={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},m=Object.assign,y={};function v(e,t,n){this.props=e,this.context=t,this.refs=y,this.updater=n||h}function g(){}function b(e,t,n){this.props=e,this.context=t,this.refs=y,this.updater=n||h}v.prototype.isReactComponent={},v.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},v.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},g.prototype=v.prototype;var k=b.prototype=new g;k.constructor=b,m(k,v.prototype),k.isPureReactComponent=!0;var _=Array.isArray,w=Object.prototype.hasOwnProperty,x={current:null},C={key:!0,ref:!0,__self:!0,__source:!0};function E(e,t,o){var r,u={},a=null,i=null;if(null!=t)for(r in void 0!==t.ref&&(i=t.ref),void 0!==t.key&&(a=""+t.key),t)w.call(t,r)&&!C.hasOwnProperty(r)&&(u[r]=t[r]);var s=arguments.length-2;if(1===s)u.children=o;else if(1<s){for(var l=Array(s),c=0;c<s;c++)l[c]=arguments[c+2];u.children=l}if(e&&e.defaultProps)for(r in s=e.defaultProps)void 0===u[r]&&(u[r]=s[r]);return{$$typeof:n,type:e,key:a,ref:i,props:u,_owner:x.current}}function S(e){return"object"==typeof e&&null!==e&&e.$$typeof===n}var O=/\/+/g;function j(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function R(e,t,r,u,a){var i=typeof e;"undefined"!==i&&"boolean"!==i||(e=null);var s=!1;if(null===e)s=!0;else switch(i){case"string":case"number":s=!0;break;case"object":switch(e.$$typeof){case n:case o:s=!0}}if(s)return a=a(s=e),e=""===u?"."+j(s,0):u,_(a)?(r="",null!=e&&(r=e.replace(O,"$&/")+"/"),R(a,t,r,"",(function(e){return e}))):null!=a&&(S(a)&&(a=function(e,t){return{$$typeof:n,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(a,r+(!a.key||s&&s.key===a.key?"":(""+a.key).replace(O,"$&/")+"/")+e)),t.push(a)),1;if(s=0,u=""===u?".":u+":",_(e))for(var l=0;l<e.length;l++){var c=u+j(i=e[l],l);s+=R(i,t,r,c,a)}else if(c=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=p&&e[p]||e["@@iterator"])?e:null}(e),"function"==typeof c)for(e=c.call(e),l=0;!(i=e.next()).done;)s+=R(i=i.value,t,r,c=u+j(i,l++),a);else if("object"===i)throw t=String(e),Error("Objects are not valid as a React child (found: "+("[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return s}function T(e,t,n){if(null==e)return e;var o=[],r=0;return R(e,o,"","",(function(e){return t.call(n,e,r++)})),o}function L(e){if(-1===e._status){var t=e._result;(t=t()).then((function(t){0!==e._status&&-1!==e._status||(e._status=1,e._result=t)}),(function(t){0!==e._status&&-1!==e._status||(e._status=2,e._result=t)})),-1===e._status&&(e._status=0,e._result=t)}if(1===e._status)return e._result.default;throw e._result}var $={current:null},U={transition:null},N={ReactCurrentDispatcher:$,ReactCurrentBatchConfig:U,ReactCurrentOwner:x};t.Children={map:T,forEach:function(e,t,n){T(e,(function(){t.apply(this,arguments)}),n)},count:function(e){var t=0;return T(e,(function(){t++})),t},toArray:function(e){return T(e,(function(e){return e}))||[]},only:function(e){if(!S(e))throw Error("React.Children.only expected to receive a single React element child.");return e}},t.Component=v,t.Fragment=r,t.Profiler=a,t.PureComponent=b,t.StrictMode=u,t.Suspense=c,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=N,t.cloneElement=function(e,t,o){if(null==e)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=m({},e.props),u=e.key,a=e.ref,i=e._owner;if(null!=t){if(void 0!==t.ref&&(a=t.ref,i=x.current),void 0!==t.key&&(u=""+t.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(l in t)w.call(t,l)&&!C.hasOwnProperty(l)&&(r[l]=void 0===t[l]&&void 0!==s?s[l]:t[l])}var l=arguments.length-2;if(1===l)r.children=o;else if(1<l){s=Array(l);for(var c=0;c<l;c++)s[c]=arguments[c+2];r.children=s}return{$$typeof:n,type:e.type,key:u,ref:a,props:r,_owner:i}},t.createContext=function(e){return(e={$$typeof:s,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null}).Provider={$$typeof:i,_context:e},e.Consumer=e},t.createElement=E,t.createFactory=function(e){var t=E.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:l,render:e}},t.isValidElement=S,t.lazy=function(e){return{$$typeof:f,_payload:{_status:-1,_result:e},_init:L}},t.memo=function(e,t){return{$$typeof:d,type:e,compare:void 0===t?null:t}},t.startTransition=function(e){var t=U.transition;U.transition={};try{e()}finally{U.transition=t}},t.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")},t.useCallback=function(e,t){return $.current.useCallback(e,t)},t.useContext=function(e){return $.current.useContext(e)},t.useDebugValue=function(){},t.useDeferredValue=function(e){return $.current.useDeferredValue(e)},t.useEffect=function(e,t){return $.current.useEffect(e,t)},t.useId=function(){return $.current.useId()},t.useImperativeHandle=function(e,t,n){return $.current.useImperativeHandle(e,t,n)},t.useInsertionEffect=function(e,t){return $.current.useInsertionEffect(e,t)},t.useLayoutEffect=function(e,t){return $.current.useLayoutEffect(e,t)},t.useMemo=function(e,t){return $.current.useMemo(e,t)},t.useReducer=function(e,t,n){return $.current.useReducer(e,t,n)},t.useRef=function(e){return $.current.useRef(e)},t.useState=function(e){return $.current.useState(e)},t.useSyncExternalStore=function(e,t,n){return $.current.useSyncExternalStore(e,t,n)},t.useTransition=function(){return $.current.useTransition()},t.version="18.2.0"},7294:(e,t,n)=>{e.exports=n(2408)},5893:(e,t,n)=>{e.exports=n(5251)},5961:(e,t,n)=>{n.d(t,{O:()=>i,W:()=>a});var o=n(5893),r=n(911),u=n(7234);function a(e){var t,n,a,i=e.isOpen,s=void 0!==i&&i,l=e.onClosed,c=e.url,d=e.title,f=e.header,p=void 0===f?"This is my first video":f,h=e.width,m=e.widthRatio,y=void 0===m?.8:m,v=e.ratio,g=void 0===v?[9,16]:v,b=(0,r.useRef)(null),k=(t=(0,r.useState)(0),n=t[0],a=t[1],(0,r.useLayoutEffect)((function(){var e=new ResizeObserver((function(e){a(e[0].contentRect.width)}));return e.observe(document.body),function(){e.disconnect()}}),[]),{observerWidth:n}).observerWidth,_=g[0],w=g[1],x=k*y,C=null!=h?h:Math.min(x*y,1200),E=C*_/w;return(0,r.useLayoutEffect)((function(){document.body.style.overflow=s?"hidden":"unset"}),[s]),(0,r.useEffect)((function(){var e=function(e){27===e.keyCode&&l()},t=function(e){var t;(null===(t=null==b?void 0:b.current)||void 0===t?void 0:t.contains(e.target))||l()};return document.addEventListener("mousedown",t),document.addEventListener("keydown",e),function(){document.removeEventListener("mousedown",t),document.removeEventListener("keydown",e)}}),[l]),s?(0,o.jsx)(o.Fragment,{children:(0,u.createPortal)((0,o.jsx)("div",{className:"modal-overlay",children:(0,o.jsxs)("div",{className:"modal-container",ref:b,children:[(0,o.jsxs)("div",{className:"modal-header-container",children:[(0,o.jsx)("div",{className:"modal-header",children:p}),(0,o.jsx)("button",{onClick:function(e){e.preventDefault()},children:(0,o.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",x:"0px",y:"0px",width:"20",height:"20",viewBox:"0 0 30 30",children:(0,o.jsx)("path",{d:"M 7 4 C 6.744125 4 6.4879687 4.0974687 6.2929688 4.2929688 L 4.2929688 6.2929688 C 3.9019687 6.6839688 3.9019687 7.3170313 4.2929688 7.7070312 L 11.585938 15 L 4.2929688 22.292969 C 3.9019687 22.683969 3.9019687 23.317031 4.2929688 23.707031 L 6.2929688 25.707031 C 6.6839688 26.098031 7.3170313 26.098031 7.7070312 25.707031 L 15 18.414062 L 22.292969 25.707031 C 22.682969 26.098031 23.317031 26.098031 23.707031 25.707031 L 25.707031 23.707031 C 26.098031 23.316031 26.098031 22.682969 25.707031 22.292969 L 18.414062 15 L 25.707031 7.7070312 C 26.098031 7.3170312 26.098031 6.6829688 25.707031 6.2929688 L 23.707031 4.2929688 C 23.316031 3.9019687 22.682969 3.9019687 22.292969 4.2929688 L 15 11.585938 L 7.7070312 4.2929688 C 7.5115312 4.0974687 7.255875 4 7 4 z"})})})]}),(0,o.jsx)("div",{className:"modal-body",style:{height:Math.floor(E)},children:(0,o.jsx)("iframe",{title:d,width:C,height:E,src:c,frameBorder:"0",allowFullScreen:!0,allow:"autoplay"})})]})}),document.body)}):null}function i(){var e=(0,r.useState)(!1),t=e[0],n=e[1],o=(0,r.useCallback)((function(){n(!t)}),[t]),u=(0,r.useCallback)((function(){n(!1)}),[t]);return{isOpen:t,toggle:o,close:u}}!function(e,t){void 0===t&&(t={});var n=t.insertAt;if(e&&"undefined"!=typeof document){var o=document.head||document.getElementsByTagName("head")[0],r=document.createElement("style");r.type="text/css","top"===n&&o.firstChild?o.insertBefore(r,o.firstChild):o.appendChild(r),r.styleSheet?r.styleSheet.cssText=e:r.appendChild(document.createTextNode(e))}}(".modal-overlay {\n  position: fixed;\n  top: 0px;\n  bottom: 0px;\n  left: 0px;\n  right: 0px;\n\n  background-color: rgb(0, 0, 0, 0.7);\n\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n}\n\n.modal-container {\n  border-radius: 4px;\n  background-color: rgb(255, 255, 255);\n  overflow: hidden;\n}\n\n.modal-header-container {\n  display: flex;\n  justify-content: space-between;\n  padding: 16px;\n}\n\n.modal-header-container button {\n  padding: 0;\n  margin: 0;\n  border: none;\n  background: none;\n}\n\n.modal-header-container button:hover {\n  cursor: pointer;\n}\n\n.modal-body {\n  width: 100%;\n}\n")}}]);