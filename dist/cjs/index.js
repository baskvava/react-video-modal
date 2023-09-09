"use strict";var e=require("react/jsx-runtime"),n=require("react"),t=require("react-dom");!function(e,n){void 0===n&&(n={});var t=n.insertAt;if(e&&"undefined"!=typeof document){var o=document.head||document.getElementsByTagName("head")[0],r=document.createElement("style");r.type="text/css","top"===t&&o.firstChild?o.insertBefore(r,o.firstChild):o.appendChild(r),r.styleSheet?r.styleSheet.cssText=e:r.appendChild(document.createTextNode(e))}}(".modal-overlay {\n  position: fixed;\n  top: 0px;\n  bottom: 0px;\n  left: 0px;\n  right: 0px;\n\n  background-color: rgb(0, 0, 0, 0.7);\n\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n}\n\n.modal-container {\n  border-radius: 4px;\n  background-color: rgb(255, 255, 255);\n  overflow: hidden;\n}\n\n.modal-header-container {\n  display: flex;\n  justify-content: space-between;\n  padding: 16px;\n}\n\n.modal-header-container button {\n  padding: 0;\n  margin: 0;\n  border: none;\n  background: none;\n}\n\n.modal-header-container button:hover {\n  cursor: pointer;\n}\n\n.modal-body {\n  width: 100%;\n}\n");exports.ModalVideo=function(o){var r=o.isOpen,d=void 0!==r&&r,i=o.onClosed,a=o.url,l=o.title,s=o.header,c=void 0===s?"This is my first video":s,u=o.width,m=o.widthRatio,h=void 0===m?.8:m,v=o.ratio,f=void 0===v?[9,16]:v,x=n.useRef(null),p=function(){var e=n.useState(0),t=e[0],o=e[1];return n.useLayoutEffect((function(){var e=new ResizeObserver((function(e){var n;o(null!==(n=e[0].contentRect.width)&&void 0!==n?n:0)}));return e.observe(document.body),function(){e.disconnect()}}),[]),{observerWidth:t}}().observerWidth,y=f[0],b=f[1],w=p*h,g=null!=u?u:Math.min(w*h,1200),L=g*y/b;return n.useLayoutEffect((function(){document.body.style.overflow=d?"hidden":"unset"}),[d]),n.useLayoutEffect((function(){var e=function(e){27===e.keyCode&&i()},n=function(e){var n;(null===(n=null==x?void 0:x.current)||void 0===n?void 0:n.contains(e.target))||i()};return document.addEventListener("mousedown",n),document.addEventListener("keydown",e),function(){document.removeEventListener("mousedown",n),document.removeEventListener("keydown",e)}}),[i]),d?e.jsx(e.Fragment,{children:t.createPortal(e.jsx("div",{className:"modal-overlay",children:e.jsxs("div",{className:"modal-container",ref:x,children:[e.jsxs("div",{className:"modal-header-container",children:[e.jsx("div",{className:"modal-header",children:c}),e.jsx("button",{onClick:i,children:e.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",x:"0px",y:"0px",width:"20",height:"20",viewBox:"0 0 30 30",children:e.jsx("path",{d:"M 7 4 C 6.744125 4 6.4879687 4.0974687 6.2929688 4.2929688 L 4.2929688 6.2929688 C 3.9019687 6.6839688 3.9019687 7.3170313 4.2929688 7.7070312 L 11.585938 15 L 4.2929688 22.292969 C 3.9019687 22.683969 3.9019687 23.317031 4.2929688 23.707031 L 6.2929688 25.707031 C 6.6839688 26.098031 7.3170313 26.098031 7.7070312 25.707031 L 15 18.414062 L 22.292969 25.707031 C 22.682969 26.098031 23.317031 26.098031 23.707031 25.707031 L 25.707031 23.707031 C 26.098031 23.316031 26.098031 22.682969 25.707031 22.292969 L 18.414062 15 L 25.707031 7.7070312 C 26.098031 7.3170312 26.098031 6.6829688 25.707031 6.2929688 L 23.707031 4.2929688 C 23.316031 3.9019687 22.682969 3.9019687 22.292969 4.2929688 L 15 11.585938 L 7.7070312 4.2929688 C 7.5115312 4.0974687 7.255875 4 7 4 z"})})})]}),e.jsx("div",{className:"modal-body",style:{height:Math.floor(L)},children:e.jsx("iframe",{title:l,width:g,height:L,src:a,frameBorder:"0",allowFullScreen:!0,allow:"autoplay"})})]})}),document.body)}):null};
