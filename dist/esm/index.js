import{jsx as n,Fragment as e,jsxs as o}from"react/jsx-runtime";import{useState as t,useLayoutEffect as r,useRef as d,useEffect as i,useCallback as a}from"react";import{createPortal as c}from"react-dom";function l(e){var o=e.onClosed,t=e.primary;return n("button",{onClick:o,children:n("svg",{xmlns:"http://www.w3.org/2000/svg",x:"0px",y:"0px",width:"20",height:"20",viewBox:"0 0 30 30",fill:"".concat(void 0!==t&&t?"#000000":"#ffffff"),children:n("path",{d:"M 7 4 C 6.744125 4 6.4879687 4.0974687 6.2929688 4.2929688 L 4.2929688 6.2929688 C 3.9019687 6.6839688 3.9019687 7.3170313 4.2929688 7.7070312 L 11.585938 15 L 4.2929688 22.292969 C 3.9019687 22.683969 3.9019687 23.317031 4.2929688 23.707031 L 6.2929688 25.707031 C 6.6839688 26.098031 7.3170313 26.098031 7.7070312 25.707031 L 15 18.414062 L 22.292969 25.707031 C 22.682969 26.098031 23.317031 26.098031 23.707031 25.707031 L 25.707031 23.707031 C 26.098031 23.316031 26.098031 22.682969 25.707031 22.292969 L 18.414062 15 L 25.707031 7.7070312 C 26.098031 7.3170312 26.098031 6.6829688 25.707031 6.2929688 L 23.707031 4.2929688 C 23.316031 3.9019687 22.682969 3.9019687 22.292969 4.2929688 L 15 11.585938 L 7.7070312 4.2929688 C 7.5115312 4.0974687 7.255875 4 7 4 z"})})})}!function(n,e){void 0===e&&(e={});var o=e.insertAt;if(n&&"undefined"!=typeof document){var t=document.head||document.getElementsByTagName("head")[0],r=document.createElement("style");r.type="text/css","top"===o&&t.firstChild?t.insertBefore(r,t.firstChild):t.appendChild(r),r.styleSheet?r.styleSheet.cssText=n:r.appendChild(document.createTextNode(n))}}(".modal-overlay {\n  position: fixed;\n  top: 0px;\n  bottom: 0px;\n  left: 0px;\n  right: 0px;\n\n  background-color: rgb(0, 0, 0, 0.7);\n\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n}\n\n.modal-container {\n  border-radius: 4px;\n  background-color: rgb(255, 255, 255);\n  overflow: hidden;\n}\n\n.no-header {\n  position: relative;\n}\n\n.no-header .no-header-btn {\n  position: absolute;\n  right: -28px;\n  top: 0px;\n}\n\n.no-header .no-header-btn button {\n  padding: 0;\n  margin: 0;\n  border: none;\n  background: none;\n}\n\n.modal-header-container {\n  display: flex;\n  justify-content: space-between;\n  padding: 16px;\n}\n\n.modal-header-container button {\n  padding: 0;\n  margin: 0;\n  border: none;\n  background: none;\n}\n\n.modal-body {\n  width: 100%;\n}\n\niframe {\n  border: none;\n}\n\nbutton:hover {\n  cursor: pointer;\n}\n");function s(a){var s=a.isOpen,u=void 0!==s&&s,h=a.onClosed,m=a.url,f=a.title,v=a.header,p=a.width,b=a.widthRatio,y=void 0===b?.8:b,g=a.ratio,x=void 0===g?[9,16]:g,w=a.autoPlay,C=void 0===w||w,L=d(null),k=function(){var n=t(0),e=n[0],o=n[1];return r((function(){var n=new ResizeObserver((function(n){o(n[0].contentRect.width)}));return n.observe(document.body),function(){n.disconnect()}}),[]),{observerWidth:e}}().observerWidth,N=x[0],E=x[1],j=k*y,B=null!=p?p:Math.min(j*y,1200),M=B*N/E;return r((function(){document.body.style.overflow=u?"hidden":"unset"}),[u]),i((function(){var n=function(n){27===n.keyCode&&h()},e=function(n){var e;(null===(e=null==L?void 0:L.current)||void 0===e?void 0:e.contains(n.target))||h()};return document.addEventListener("mousedown",e),document.addEventListener("keydown",n),function(){document.removeEventListener("mousedown",e),document.removeEventListener("keydown",n)}}),[h]),u?n(e,{children:c(n("div",{className:"modal-overlay",children:o("div",{className:"".concat(v?"modal-container":"no-header"),ref:L,children:[v?n(e,{children:o("div",{className:"modal-header-container",children:[n("div",{className:"modal-header",children:v}),n(l,{primary:!0,onClosed:h})]})}):n("div",{className:"no-header-btn",children:n(l,{onClosed:h})}),n("div",{className:"modal-body",style:{height:Math.floor(M),width:B},children:n("iframe",{title:f,width:B,height:M,src:m,allow:"".concat(C&&"autoplay")})})]})}),document.body)}):null}function u(){var n=t(!1),e=n[0],o=n[1],r=a((function(){o(!e)}),[o]),d=a((function(){o(!1)}),[o]);return{isOpen:e,toggle:r,close:d}}export{s as ModalVideo,u as useToggle};
