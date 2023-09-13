import{jsx as n,Fragment as e,jsxs as t}from"react/jsx-runtime";import{useState as o,useLayoutEffect as r,useRef as d,useEffect as i,useCallback as a}from"react";import{createPortal as c}from"react-dom";!function(n,e){void 0===e&&(e={});var t=e.insertAt;if(n&&"undefined"!=typeof document){var o=document.head||document.getElementsByTagName("head")[0],r=document.createElement("style");r.type="text/css","top"===t&&o.firstChild?o.insertBefore(r,o.firstChild):o.appendChild(r),r.styleSheet?r.styleSheet.cssText=n:r.appendChild(document.createTextNode(n))}}(".modal-overlay {\n  position: fixed;\n  top: 0px;\n  bottom: 0px;\n  left: 0px;\n  right: 0px;\n\n  background-color: rgb(0, 0, 0, 0.7);\n\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n}\n\n.modal-container {\n  border-radius: 4px;\n  background-color: rgb(255, 255, 255);\n  overflow: hidden;\n}\n\n.modal-header-container {\n  display: flex;\n  justify-content: space-between;\n  padding: 16px;\n}\n\n.modal-header-container button {\n  padding: 0;\n  margin: 0;\n  border: none;\n  background: none;\n}\n\n.modal-header-container button:hover {\n  cursor: pointer;\n}\n\n.modal-body {\n  width: 100%;\n}\n");function l(a){var l=a.isOpen,s=void 0!==l&&l,u=a.onClosed,m=a.url,h=a.title,v=a.header,f=void 0===v?"This is my first video":v,p=a.width,y=a.widthRatio,b=void 0===y?.8:y,g=a.ratio,w=void 0===g?[9,16]:g,x=d(null),C=function(){var n=o(0),e=n[0],t=n[1];return r((function(){var n=new ResizeObserver((function(n){t(n[0].contentRect.width)}));return n.observe(document.body),function(){n.disconnect()}}),[]),{observerWidth:e}}().observerWidth,L=w[0],k=w[1],N=C*b,E=null!=p?p:Math.min(N*b,1200),B=E*L/k;return r((function(){document.body.style.overflow=s?"hidden":"unset"}),[s]),i((function(){var n=function(n){27===n.keyCode&&u()},e=function(n){var e;(null===(e=null==x?void 0:x.current)||void 0===e?void 0:e.contains(n.target))||u()};return document.addEventListener("mousedown",e),document.addEventListener("keydown",n),function(){document.removeEventListener("mousedown",e),document.removeEventListener("keydown",n)}}),[u]),s?n(e,{children:c(n("div",{className:"modal-overlay",children:t("div",{className:"modal-container",ref:x,children:[t("div",{className:"modal-header-container",children:[n("div",{className:"modal-header",children:f}),n("button",{onClick:function(n){n.preventDefault()},children:n("svg",{xmlns:"http://www.w3.org/2000/svg",x:"0px",y:"0px",width:"20",height:"20",viewBox:"0 0 30 30",children:n("path",{d:"M 7 4 C 6.744125 4 6.4879687 4.0974687 6.2929688 4.2929688 L 4.2929688 6.2929688 C 3.9019687 6.6839688 3.9019687 7.3170313 4.2929688 7.7070312 L 11.585938 15 L 4.2929688 22.292969 C 3.9019687 22.683969 3.9019687 23.317031 4.2929688 23.707031 L 6.2929688 25.707031 C 6.6839688 26.098031 7.3170313 26.098031 7.7070312 25.707031 L 15 18.414062 L 22.292969 25.707031 C 22.682969 26.098031 23.317031 26.098031 23.707031 25.707031 L 25.707031 23.707031 C 26.098031 23.316031 26.098031 22.682969 25.707031 22.292969 L 18.414062 15 L 25.707031 7.7070312 C 26.098031 7.3170312 26.098031 6.6829688 25.707031 6.2929688 L 23.707031 4.2929688 C 23.316031 3.9019687 22.682969 3.9019687 22.292969 4.2929688 L 15 11.585938 L 7.7070312 4.2929688 C 7.5115312 4.0974687 7.255875 4 7 4 z"})})})]}),n("div",{className:"modal-body",style:{height:Math.floor(B)},children:n("iframe",{title:h,width:E,height:B,src:m,frameBorder:"0",allowFullScreen:!0,allow:"autoplay"})})]})}),document.body)}):null}function s(){var n=o(!1),e=n[0],t=n[1],r=a((function(){t(!e)}),[e]),d=a((function(){t(!1)}),[e]);return{isOpen:e,toggle:r,close:d}}export{l as ModalVideo,s as useToggle};
