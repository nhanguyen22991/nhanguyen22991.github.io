(self.webpackChunkcheapflightclient=self.webpackChunkcheapflightclient||[]).push([[8513],{94327:function(Q,K){var I,M;void 0!==(M="function"==typeof(I=function(){"use strict";function N(f,g,m){var C=new XMLHttpRequest;C.open("GET",f),C.responseType="blob",C.onload=function(){v(C.response,g,m)},C.onerror=function(){console.error("could not download file")},C.send()}function W(f){var g=new XMLHttpRequest;g.open("HEAD",f,!1);try{g.send()}catch{}return 200<=g.status&&299>=g.status}function R(f){try{f.dispatchEvent(new MouseEvent("click"))}catch{var g=document.createEvent("MouseEvents");g.initMouseEvent("click",!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),f.dispatchEvent(g)}}var k="object"==typeof window&&window.window===window?window:"object"==typeof self&&self.self===self?self:"object"==typeof global&&global.global===global?global:void 0,T=k.navigator&&/Macintosh/.test(navigator.userAgent)&&/AppleWebKit/.test(navigator.userAgent)&&!/Safari/.test(navigator.userAgent),v=k.saveAs||("object"!=typeof window||window!==k?function(){}:"download"in HTMLAnchorElement.prototype&&!T?function(f,g,m){var C=k.URL||k.webkitURL,S=document.createElement("a");S.download=g=g||f.name||"download",S.rel="noopener","string"==typeof f?(S.href=f,S.origin===location.origin?R(S):W(S.href)?N(f,g,m):R(S,S.target="_blank")):(S.href=C.createObjectURL(f),setTimeout(function(){C.revokeObjectURL(S.href)},4e4),setTimeout(function(){R(S)},0))}:"msSaveOrOpenBlob"in navigator?function(f,g,m){if(g=g||f.name||"download","string"!=typeof f)navigator.msSaveOrOpenBlob(function U(f,g){return typeof g>"u"?g={autoBom:!1}:"object"!=typeof g&&(console.warn("Deprecated: Expected third argument to be a object"),g={autoBom:!g}),g.autoBom&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(f.type)?new Blob(["\ufeff",f],{type:f.type}):f}(f,m),g);else if(W(f))N(f,g,m);else{var C=document.createElement("a");C.href=f,C.target="_blank",setTimeout(function(){R(C)})}}:function(f,g,m,C){if((C=C||open("","_blank"))&&(C.document.title=C.document.body.innerText="downloading..."),"string"==typeof f)return N(f,g,m);var S="application/octet-stream"===f.type,ee=/constructor/i.test(k.HTMLElement)||k.safari,Y=/CriOS\/[\d]+/.test(navigator.userAgent);if((Y||S&&ee||T)&&typeof FileReader<"u"){var q=new FileReader;q.onloadend=function(){var L=q.result;L=Y?L:L.replace(/^data:[^;]*;/,"data:attachment/file;"),C?C.location.href=L:location=L,C=null},q.readAsDataURL(f)}else{var H=k.URL||k.webkitURL,X=H.createObjectURL(f);C?C.location=X:location.href=X,C=null,setTimeout(function(){H.revokeObjectURL(X)},4e4)}});k.saveAs=v.saveAs=v,Q.exports=v})?I.apply(K,[]):I)&&(Q.exports=M)},64425:(Q,K,I)=>{"use strict";I.d(K,{TU:()=>N});var j=I(36895),M=I(94650);class U{constructor(v,f){this._document=f;const g=this._textarea=this._document.createElement("textarea"),m=g.style;m.position="fixed",m.top=m.opacity="0",m.left="-999em",g.setAttribute("aria-hidden","true"),g.value=v,g.readOnly=!0,this._document.body.appendChild(g)}copy(){const v=this._textarea;let f=!1;try{if(v){const g=this._document.activeElement;v.select(),v.setSelectionRange(0,v.value.length),f=this._document.execCommand("copy"),g&&g.focus()}}catch{}return f}destroy(){const v=this._textarea;v&&(v.remove(),this._textarea=void 0)}}let N=(()=>{class T{constructor(f){this._document=f}copy(f){const g=this.beginCopy(f),m=g.copy();return g.destroy(),m}beginCopy(f){return new U(f,this._document)}}return T.\u0275fac=function(f){return new(f||T)(M.LFG(j.K0))},T.\u0275prov=M.Yz7({token:T,factory:T.\u0275fac,providedIn:"root"}),T})()},74710:(Q,K,I)=>{"use strict";I.d(K,{C0:()=>zt,E_:()=>ae,Ig:()=>Kt});var j=Object.defineProperty,M=Object.defineProperties,U=Object.getOwnPropertyDescriptors,N=Object.getOwnPropertySymbols,W=Object.prototype.hasOwnProperty,R=Object.prototype.propertyIsEnumerable,k=Math.pow,T=(e,t,n)=>t in e?j(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,v=(e,t)=>{for(var n in t||(t={}))W.call(t,n)&&T(e,n,t[n]);if(N)for(var n of N(t))R.call(t,n)&&T(e,n,t[n]);return e},f=(e,t)=>M(e,U(t)),g=(e,t)=>{var n={};for(var o in e)W.call(e,o)&&t.indexOf(o)<0&&(n[o]=e[o]);if(null!=e&&N)for(var o of N(e))t.indexOf(o)<0&&R.call(e,o)&&(n[o]=e[o]);return n},m=(e,t,n)=>new Promise((o,i)=>{var a=c=>{try{l(n.next(c))}catch(s){i(s)}},r=c=>{try{l(n.throw(c))}catch(s){i(s)}},l=c=>c.done?o(c.value):Promise.resolve(c.value).then(a,r);l((n=n.apply(e,t)).next())});function C(e,t){return e[13]=1,e[14]=t>>8,e[15]=255&t,e[16]=t>>8,e[17]=255&t,e}const S="p".charCodeAt(0),ee="H".charCodeAt(0),Y="Y".charCodeAt(0),q="s".charCodeAt(0);let H;function fe(e,t,n=!1){const o=new Uint8Array(13);t*=39.3701,o[0]=S,o[1]=ee,o[2]=Y,o[3]=q,o[4]=t>>>24,o[5]=t>>>16,o[6]=t>>>8,o[7]=255&t,o[8]=o[4],o[9]=o[5],o[10]=o[6],o[11]=o[7],o[12]=1;const i=function L(e){let t=-1;H||(H=function X(){const e=new Int32Array(256);for(let t=0;t<256;t++){let n=t;for(let o=0;o<8;o++)n=1&n?3988292384^n>>>1:n>>>1;e[t]=n}return e}());for(let n=0;n<e.length;n++)t=H[255&(t^e[n])]^t>>>8;return-1^t}(o),a=new Uint8Array(4);if(a[0]=i>>>24,a[1]=i>>>16,a[2]=i>>>8,a[3]=255&i,n){const r=function $e(e){for(let n=e.length-1;n>=4;n--)if(9===e[n-4]&&e[n-3]===S&&e[n-2]===ee&&e[n-1]===Y&&e[n]===q)return n-3;return 0}(e);return e.set(o,r),e.set(a,r+13),e}{const r=new Uint8Array(4);r[0]=0,r[1]=0,r[2]=0,r[3]=9;const l=new Uint8Array(54);return l.set(e,0),l.set(r,33),l.set(o,37),l.set(a,50),l}}const Be="AAlwSFlz",je="AAAJcEhZ",Ue="AAAACXBI",ce="[modern-screenshot]",P=typeof window<"u",qe=P&&"Worker"in window,pe=P&&"atob"in window,He=P&&"btoa"in window;var he;const se=P?null==(he=window.navigator)?void 0:he.userAgent:"",me=se.includes("Chrome"),te=se.includes("AppleWebKit")&&!me,ge=se.includes("Firefox"),ze=e=>e&&"__CONTEXT__"in e,Ve=e=>"CSSFontFaceRule"===e.constructor.name,Ke=e=>"CSSImportRule"===e.constructor.name,O=e=>1===e.nodeType,$=e=>"object"==typeof e.className,Ye=e=>$(e)&&"svg"===e.tagName,ye=e=>$(e)&&"image"===e.tagName,ue=e=>O(e)&&typeof e.style<"u"&&!$(e),Xe=e=>8===e.nodeType,Ge=e=>3===e.nodeType,z=e=>"IMG"===e.tagName,ne=e=>"VIDEO"===e.tagName,Ze=e=>"CANVAS"===e.tagName,we=e=>"TEXTAREA"===e.tagName,Je=e=>"INPUT"===e.tagName,Qe=e=>"STYLE"===e.tagName,et=e=>"SCRIPT"===e.tagName,tt=e=>"SELECT"===e.tagName,nt=e=>"SLOT"===e.tagName,ot=e=>"IFRAME"===e.tagName,x=(...e)=>console.warn(ce,...e),rt=e=>console.time(`${ce} ${e}`),it=e=>console.timeEnd(`${ce} ${e}`),lt=e=>{var t;const n=null==(t=null==e?void 0:e.createElement)?void 0:t.call(e,"canvas");return n&&(n.height=n.width=1),n&&"toDataURL"in n&&Boolean(n.toDataURL("image/webp").includes("image/webp"))},de=e=>e.startsWith("data:");function ve(e,t){if(e.match(/^[a-z]+:\/\//i))return e;if(P&&e.match(/^\/\//))return window.location.protocol+e;if(e.match(/^[a-z]+:/i)||!P)return e;const n=oe().implementation.createHTMLDocument(),o=n.createElement("base"),i=n.createElement("a");return n.head.appendChild(o),n.body.appendChild(i),t&&(o.href=t),i.href=e,i.href}function oe(e){var t;return null!=(t=e&&O(e)?null==e?void 0:e.ownerDocument:e)?t:window.document}const re="http://www.w3.org/2000/svg";function _e(e,t){return new Promise((n,o)=>{const i=new FileReader;i.onload=()=>n(i.result),i.onerror=()=>o(i.error),i.onabort=()=>o(new Error(`Failed read blob to ${t}`)),"dataUrl"===t?i.readAsDataURL(e):"arrayBuffer"===t&&i.readAsArrayBuffer(e)})}const st=e=>_e(e,"dataUrl"),ut=e=>_e(e,"arrayBuffer");function B(e,t){const n=oe(t).createElement("img");return n.decoding="sync",n.loading="eager",n.src=e,n}function G(e,t){return new Promise(n=>{const{timeout:o,ownerDocument:i,onError:a}=null!=t?t:{},r="string"==typeof e?B(e,oe(i)):e;let l=null,c=null;function s(){n(r),l&&clearTimeout(l),null==c||c()}if(o&&(l=setTimeout(s,o)),ne(r)){const u=r.currentSrc||r.src;if(!u)return r.poster?G(r.poster,t).then(n):s();if(r.readyState>=2)return s();const p=s,d=h=>{x("Failed video load",u,h),null==a||a(h),s()};c=()=>{r.removeEventListener("loadeddata",p),r.removeEventListener("error",d)},r.addEventListener("loadeddata",p,{once:!0}),r.addEventListener("error",d,{once:!0})}else{const u=ye(r)?r.href.baseVal:r.currentSrc||r.src;if(!u)return s();const p=()=>m(this,null,function*(){if(z(r)&&"decode"in r)try{yield r.decode()}catch(h){x("Failed to decode image, trying to render anyway",r.dataset.originalSrc||u,h)}s()}),d=h=>{x("Failed image load",r.dataset.originalSrc||u,h),s()};if(z(r)&&r.complete)return p();c=()=>{r.removeEventListener("load",p),r.removeEventListener("error",d)},r.addEventListener("load",p,{once:!0}),r.addEventListener("error",d,{once:!0})}})}const Ee=function(){let e=0;return()=>(e+=1,`u${`0000${(Math.random()*k(36,4)<<0).toString(36)}`.slice(-4)}${e}`)}();function Ae(e){return null==e?void 0:e.split(",").map(t=>t.trim().replace(/"|'/g,"").toLowerCase()).filter(Boolean)}function ft(e){return{time:t=>e&&rt(t),timeEnd:t=>e&&it(t),warn:(...t)=>e&&x(...t)}}function pt(e){return{cache:e?"no-cache":"force-cache"}}function F(e,t){return m(this,null,function*(){return ze(e)?e:function ht(e,t){return m(this,null,function*(){var n,o,i,a;const{scale:r=1,workerUrl:l,workerNumber:c=1}=t||{},s=Boolean(null==t?void 0:t.debug),u=null!=(n=e.ownerDocument)?n:P?window.document:void 0,p=null!=(i=null==(o=e.ownerDocument)?void 0:o.defaultView)?i:P?window:void 0,d=new Map,h=f(v({width:0,height:0,quality:1,type:"image/png",scale:r,backgroundColor:null,style:null,filter:null,maximumCanvasSize:0,timeout:3e4,progress:null,debug:s,fetch:v({requestInit:pt(null==(a=null==t?void 0:t.fetch)?void 0:a.bypassingCache),placeholderImage:"data:image/png;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",bypassingCache:!1},null==t?void 0:t.fetch),font:{},drawImageInterval:100,workerUrl:null,workerNumber:c,onCloneNode:null,onEmbedNode:null,onCreateForeignObjectSvg:null,autoDestruct:!1},t),{__CONTEXT__:!0,log:ft(s),node:e,ownerDocument:u,ownerWindow:p,dpi:1===r?null:96*r,svgStyleElement:Se(u),svgDefsElement:null==u?void 0:u.createElementNS(re,"defs"),svgStyles:new Map,defaultComputedStyles:new Map,workers:[...new Array(qe&&l&&c?c:0)].map(()=>{try{const w=new Worker(l);return w.onmessage=b=>m(this,null,function*(){var A,E,D,V;const{url:J,result:Le}=b.data;Le?null==(E=null==(A=d.get(J))?void 0:A.resovle)||E.call(A,Le):null==(V=null==(D=d.get(J))?void 0:D.reject)||V.call(D,new Error(`Error receiving message from worker: ${J}`))}),w.onmessageerror=b=>{var A,E;const{url:D}=b.data;null==(E=null==(A=d.get(D))?void 0:A.reject)||E.call(A,new Error(`Error receiving message from worker: ${D}`))},w}catch(w){return x("Failed to new Worker",w),null}}).filter(Boolean),fontFamilies:new Set,fontCssTexts:new Map,acceptOfImage:`${[lt(u)&&"image/webp","image/svg+xml","image/*","*/*"].filter(Boolean).join(",")};q=0.8`,requests:d,drawImageCount:0,tasks:[]});h.log.time("wait until load"),yield function dt(e,t){return m(this,null,function*(){ue(e)&&(z(e)||ne(e)?yield G(e,{timeout:t}):yield Promise.all(["img","video"].flatMap(n=>Array.from(e.querySelectorAll(n)).map(o=>G(o,{timeout:t})))))})}(e,h.timeout),h.log.timeEnd("wait until load");const{width:y,height:_}=function mt(e,t){let{width:n,height:o}=t;if(O(e)&&(!n||!o)){const i=e.getBoundingClientRect();n=n||i.width||Number(e.getAttribute("width"))||0,o=o||i.height||Number(e.getAttribute("height"))||0}return{width:n,height:o}}(e,h);return h.width=y,h.height=_,h})}(e,f(v({},t),{autoDestruct:!0}))})}function Se(e){if(!e)return;const t=e.createElement("style"),n=t.ownerDocument.createTextNode("\n.______background-clip--text {\n  background-clip: text;\n  -webkit-background-clip: text;\n}\n");return t.appendChild(n),t}const wt=["width","height"],vt=["stroke","fill"];function xe(e,t,n){var o;const{defaultComputedStyles:i,ownerDocument:a}=n,r=e.nodeName.toLowerCase(),l=$(e)&&"svg"!==r,c=l?vt.map(b=>[b,e.getAttribute(b)]).filter(([,b])=>null!==b):[],s=[l&&"svg",r,c.map((b,A)=>`${b}=${A}`).join(","),t].filter(Boolean).join(":");if(i.has(s))return i.get(s);let u=n.sandbox;if(!u)try{a&&(u=a.createElement("iframe"),u.id=`__SANDBOX__-${Ee()}`,u.width="0",u.height="0",u.style.visibility="hidden",u.style.position="fixed",a.body.appendChild(u),null==(o=u.contentWindow)||o.document.write('<!DOCTYPE html><meta charset="UTF-8"><title></title><body>'),n.sandbox=u)}catch(b){x("Failed to create iframe sandbox",b)}if(!u)return new Map;const p=u.contentWindow;if(!p)return new Map;const d=p.document;let h,y;l?(h=d.createElementNS(re,"svg"),y=h.ownerDocument.createElementNS(h.namespaceURI,r),c.forEach(([b,A])=>{y.setAttributeNS(null,b,A)}),h.appendChild(y)):h=y=d.createElement(r),y.textContent=" ",d.body.appendChild(h);const _=p.getComputedStyle(y,t),w=new Map;for(let b=_.length,A=0;A<b;A++){const E=_.item(A);wt.includes(E)||w.set(E,_.getPropertyValue(E))}return d.body.removeChild(h),i.set(s,w),w}function Te(e,t){var n;const o=new Map,i=[],a=new Map;for(let r=e.length,l=0;l<r;l++){const c=e.item(l),s=e.getPropertyValue(c),u=e.getPropertyPriority(c),p=c.lastIndexOf("-"),d=p>-1?c.substring(0,p):void 0;if(d){let h=a.get(d);h||(h=new Map,a.set(d,h)),h.set(c,[s,u])}t.get(c)===s&&!u||(d?i.push(d):o.set(c,[s,u]))}for(let r=i.length,l=0;l<r;l++)null==(n=a.get(i[l]))||n.forEach((c,s)=>o.set(s,c));return o}const bt=[":before",":after"],Ct=[":-webkit-scrollbar",":-webkit-scrollbar-button",":-webkit-scrollbar-thumb",":-webkit-scrollbar-track",":-webkit-scrollbar-track-piece",":-webkit-scrollbar-corner",":-webkit-resizer"];function De(e){if(e.ownerDocument)try{const i=e.toDataURL();if("data:,"!==i)return B(i,e.ownerDocument)}catch{}const t=e.cloneNode(!1),n=e.getContext("2d"),o=t.getContext("2d");try{return n&&o&&o.putImageData(n.getImageData(0,0,e.width,e.height),0,0),t}catch(i){x("Failed to clone canvas",i)}return t}function ke(e,t,n){return m(this,null,function*(){O(t)&&(Qe(t)||et(t))||n.filter&&!n.filter(t)||e.appendChild(yield ie(t,n))})}function Ne(e,t,n){return m(this,null,function*(){var o,i;for(let r=null!=(i=O(e)?null==(o=e.shadowRoot)?void 0:o.firstChild:void 0)?i:e.firstChild;r;r=r.nextSibling)if(!Xe(r))if(O(r)&&nt(r)&&"function"==typeof r.assignedNodes){const l=r.assignedNodes();for(let c=0;c<l.length;c++)yield ke(t,l[c],n)}else yield ke(t,r,n)})}function ie(e,t,n=!1){return m(this,null,function*(){var o,i,a,r;const{ownerDocument:l,ownerWindow:c,fontFamilies:s}=t;if(l&&Ge(e))return l.createTextNode(e.data);if(l&&c&&O(e)&&(ue(e)||$(e))){const p=yield function kt(e,t){return Ze(e)?De(e):ot(e)?function xt(e,t){var n;try{if(null!=(n=null==e?void 0:e.contentDocument)&&n.body)return ie(e.contentDocument.body,t)}catch(o){x("Failed to clone iframe",o)}return e.cloneNode(!1)}(e,t):z(e)?function Dt(e){const t=e.cloneNode(!1);return e.currentSrc&&e.currentSrc!==e.src&&(t.src=e.currentSrc,t.srcset=""),"lazy"===t.loading&&(t.loading="eager"),t}(e):ne(e)?function Tt(e){return m(this,null,function*(){if(e.ownerDocument&&!e.currentSrc&&e.poster)return B(e.poster,e.ownerDocument);const t=e.cloneNode(!1);t.crossOrigin="anonymous",e.currentSrc&&e.currentSrc!==e.src&&(t.src=e.currentSrc);const n=t.ownerDocument;if(n){let o=!0;if(yield G(t,{onError:()=>o=!1}),!o)return e.poster?B(e.poster,e.ownerDocument):t;t.currentTime=e.currentTime,yield new Promise(a=>{t.addEventListener("seeked",a,{once:!0})});const i=n.createElement("canvas");i.width=e.offsetWidth,i.height=e.offsetHeight;try{const a=i.getContext("2d");a&&a.drawImage(t,0,0,i.width,i.height)}catch(a){return x("Failed to clone video",a),e.poster?B(e.poster,e.ownerDocument):t}return De(i)}return t})}(e):Ye(e)?function St(e,t){return m(this,null,function*(){var n,o,i;const{ownerDocument:a,svgDefsElement:r}=t,l=null!=(o=null==(n=e.querySelectorAll)?void 0:n.call(e,"use"))?o:[];if(l.length)for(let c=l.length,s=0;s<c;s++){const u=l[s],p=null!=(i=u.getAttribute("xlink:href"))?i:u.getAttribute("href");if(!p)continue;const d=null==a?void 0:a.querySelector(`svg ${p}`);!d||null!=r&&r.querySelector(p)||null==r||r.appendChild(yield ie(d,t))}return e.cloneNode(!1)})}(e,t):e.cloneNode(!1)}(e,t);p.removeAttribute('"');const d=function At(e,t,n,o){var i,a,r,l;const{ownerWindow:c}=o,s=t.style,d=Te(c.getComputedStyle(e),xe(e,null,o));return d.delete("transition-property"),d.delete("all"),d.delete("d"),d.delete("content"),n&&(d.delete("margin-top"),d.delete("margin-right"),d.delete("margin-bottom"),d.delete("margin-left"),d.delete("margin-block-start"),d.delete("margin-block-end"),d.delete("margin-inline-start"),d.delete("margin-inline-end"),d.set("box-sizing",["border-box",""])),"text"===(null==(i=d.get("background-clip"))?void 0:i[0])&&t.classList.add("______background-clip--text"),me&&(d.has("font-kerning")||d.set("font-kerning",["normal",""]),("hidden"===(null==(a=d.get("overflow-x"))?void 0:a[0])||"hidden"===(null==(r=d.get("overflow-y"))?void 0:r[0]))&&"ellipsis"===(null==(l=d.get("text-overflow"))?void 0:l[0])&&e.scrollWidth===e.clientWidth&&d.set("text-overflow",["clip",""])),d.forEach(([h,y],_)=>{s.setProperty(_,h,y)}),d}(e,p,n,t);n&&function Nt(e,t){const{backgroundColor:n,width:o,height:i,style:a}=t,r=e.style;if(n&&r.setProperty("background-color",n,"important"),o&&r.setProperty("width",`${o}px`,"important"),i&&r.setProperty("height",`${i}px`,"important"),a)for(const l in a)r[l]=a[l]}(p,t);const h=[null==(o=d.get("overflow-x"))?void 0:o[0],null==(i=d.get("overflow-y"))?void 0:i[1]];return function _t(e,t,n,o){const{ownerWindow:i,svgStyleElement:a,svgStyles:r}=o;function l(c){var s;const u=i.getComputedStyle(e,c);let p=u.getPropertyValue("content");if(!p||"none"===p)return;p=p.replace(/(')|(")|(counter\(.+\))/g,"");const d=[Ee()],h=xe(e,c,o),y=[`content: '${p}';`],_=Te(u,h);if(_.delete("content"),_.delete("-webkit-locale"),"text"===(null==(s=_.get("background-clip"))?void 0:s[0])&&t.classList.add("______background-clip--text"),_.forEach(([A,E],D)=>{y.push(`${D}: ${A}${E?" !important":""};`)}),1===y.length)return;try{t.className=[t.className,...d].join(" ")}catch{return}const w=y.join("\n  ");let b=r.get(w);b||(b=[],r.set(w,b)),b.push(`.${d[0]}:${c}`)}a&&i&&(bt.forEach(l),n&&Ct.forEach(l))}(e,p,h.includes("scroll")||(h.includes("auto")||h.includes("overlay"))&&(e.scrollHeight>e.clientHeight||e.scrollWidth>e.clientWidth),t),function Et(e,t){we(e)&&(t.innerHTML=e.value),(we(e)||Je(e)||tt(e))&&t.setAttribute("value",e.value)}(e,p),null==(r=Ae(null==(a=d.get("font-family"))?void 0:a[0]))||r.forEach(y=>s.add(y)),ne(e)||(yield Ne(e,p,t)),p}const u=e.cloneNode(!1);return yield Ne(e,u,t),u})}function le(e,t){const{url:n,requestType:o="text",responseType:i="text",imageDom:a}=t;let r=n;const{timeout:l,acceptOfImage:c,requests:s,fetch:{requestInit:u,bypassingCache:p,placeholderImage:d},workers:h}=e;let y;if(s.has(n))y=s.get(n);else{p&&(r+=(/\?/.test(r)?"&":"?")+(new Date).getTime()),"image"===o&&te&&e.drawImageCount++;const _=v({url:r,timeout:l,responseType:i,headers:"image"===o?{accept:c}:void 0},u);y={type:o,resovle:void 0,reject:void 0,response:null},y.response=(!te&&n.startsWith("http")&&h.length?new Promise((w,b)=>{h[s.size&h.length-1].postMessage(v({rawUrl:n},_)),y.resovle=w,y.reject=b}):function Ot(e){const t=e,{url:n,timeout:o,responseType:i}=t,a=g(t,["url","timeout","responseType"]),r=new AbortController,l=o?setTimeout(()=>r.abort(),o):void 0;return fetch(n,v({signal:r.signal},a)).then(c=>{if(!c.ok)throw new Error("Failed fetch, not 2xx response",{cause:c});return"dataUrl"===i?c.blob().then(st):c.text()}).finally(()=>clearTimeout(l))}(_)).catch(w=>{if(s.delete(n),"image"===o&&d)return x("Failed to fetch image base64, trying to use placeholder image",r),"string"==typeof d?d:d(a);throw w}),s.set(n,y)}return y.response}function Ie(e,t,n,o){return m(this,null,function*(){if(!Oe(e))return e;for(const[i,a]of function Ft(e,t){const n=[];return e.replace(Fe,(o,i,a)=>(n.push([a,ve(a,t)]),o)),n.filter(([o])=>!de(o))}(e,t))try{const r=yield le(n,{url:a,requestType:o?"image":"text",responseType:"dataUrl"});e=e.replace(Mt(i),`$1${r}$3`)}catch(r){x("Failed to fetch css data url",i,r)}return e})}function Oe(e){return/url\((['"]?)([^'"]+?)\1\)/.test(e)}const Fe=/url\((['"]?)([^'"]+?)\1\)/g;function Mt(e){const t=e.replace(/([.*+?^${}()|\[\]\/\\])/g,"\\$1");return new RegExp(`(url\\(['"]?)(${t})(['"]?\\))`,"g")}const Pt=/(\/\*[\s\S]*?\*\/)/gi,Me=/((@.*?keyframes [\s\S]*?){([\s\S]*?}\s*?)})/gi,$t=/url\([^)]+\)\s*format\((["']?)([^"']+)\1\)/g,Bt=/src:\s*(?:url\([^)]+\)\s*format\([^)]+\)[,;]\s*)+/g;function Re(e,t){const{font:n}=t,o=n?null==n?void 0:n.preferredFormat:void 0;return o?e.replace(Bt,i=>{for(;;){const[a,,r]=$t.exec(i)||[];if(!r)return"";if(r===o)return`src: ${a};`}}):e}const Ut=["background-image","border-image-source","-webkit-border-image","-webkit-mask-image","list-style-image"];function Pe(e,t){const{tasks:n}=t;O(e)&&(z(e)||ye(e))&&n.push(...function jt(e,t){if(z(e)){const n=e.currentSrc||e.src;if(!de(n))return[le(t,{url:n,imageDom:e,requestType:"image",responseType:"dataUrl"}).then(o=>{o&&(e.srcset="",e.dataset.originalSrc=n,e.src=o||"")})];(te||ge)&&n.includes("data:image/svg+xml")&&t.drawImageCount++}else if($(e)&&!de(e.href.baseVal)){const n=e.href.baseVal;return[le(t,{url:n,imageDom:e,requestType:"image",responseType:"dataUrl"}).then(o=>{o&&(e.dataset.originalSrc=n,e.href.baseVal=o||"")})]}return[]}(e,t)),ue(e)&&n.push(...function Wt(e,t){return Ut.map(n=>{const o=e.getPropertyValue(n);return o?((te||ge)&&o.includes("data:image/svg+xml")&&t.drawImageCount++,Ie(o,null,t,!0).then(i=>{!i||o===i||e.setProperty(n,i,e.getPropertyPriority(n))})):null}).filter(Boolean)}(e.style,t)),e.childNodes.forEach(o=>{Pe(o,t)})}function qt(e,t){return m(this,null,function*(){const n=yield F(e,t);if(O(n.node)&&$(n.node))return n.node;const{ownerDocument:o,log:i,tasks:a,svgStyleElement:r,svgDefsElement:l,svgStyles:c,font:s,progress:u,autoDestruct:p,onCloneNode:d,onEmbedNode:h,onCreateForeignObjectSvg:y}=n;i.time("clone node");const _=yield ie(n.node,n,!0);if(r&&o){let D="";c.forEach((V,J)=>{D+=`${V.join(",\n")} {\n  ${J}\n}\n`}),r.appendChild(o.createTextNode(D))}i.timeEnd("clone node"),null==d||d(_),!1!==s&&O(_)&&(i.time("embed web font"),yield function Rt(e,t){return m(this,null,function*(){const{ownerDocument:n,svgStyleElement:o,fontFamilies:i,fontCssTexts:a,tasks:r,font:l}=t;if(n&&o&&i.size)if(l&&l.cssText){const c=Re(l.cssText,t);o.appendChild(n.createTextNode(`${c}\n`))}else{const c=Array.from(n.styleSheets).filter(s=>{try{return"cssRules"in s&&Boolean(s.cssRules.length)}catch(u){return x(`Error while reading CSS rules from ${s.href}`,u),!1}});yield Promise.all(c.flatMap(s=>Array.from(s.cssRules).map((u,p)=>m(this,null,function*(){if(Ke(u)){let d=p+1;const h=u.href;let y="";try{y=yield le(t,{url:h,requestType:"text",responseType:"text"})}catch(w){x(`Error fetch remote css import from ${h}`,w)}const _=y.replace(Fe,(w,b,A)=>w.replace(A,ve(A,h)));for(const w of function Lt(e){if(null==e)return[];const t=[];let n=e.replace(Pt,"");for(;;){const a=Me.exec(n);if(!a)break;t.push(a[0])}n=n.replace(Me,"");const o=/@import[\s\S]*?url\([^)]*\)[\s\S]*?;/gi,i=new RegExp("((\\s*?(?:\\/\\*[\\s\\S]*?\\*\\/)?\\s*?@media[\\s\\S]*?){([\\s\\S]*?)}\\s*?})|(([\\s\\S]*?){([\\s\\S]*?)})","gi");for(;;){let a=o.exec(n);if(a)i.lastIndex=o.lastIndex;else{if(a=i.exec(n),!a)break;o.lastIndex=i.lastIndex}t.push(a[0])}return t}(_))try{s.insertRule(w,w.startsWith("@import")?d+=1:s.cssRules.length)}catch(b){x("Error inserting rule from remote css import",{rule:w,error:b})}}})))),c.flatMap(s=>Array.from(s.cssRules)).filter(s=>{var u;return Ve(s)&&Oe(s.style.getPropertyValue("src"))&&(null==(u=Ae(s.style.getPropertyValue("font-family")))?void 0:u.some(p=>i.has(p)))}).forEach(s=>{const u=s,p=a.get(u.cssText);p?o.appendChild(n.createTextNode(`${p}\n`)):r.push(Ie(u.cssText,u.parentStyleSheet?u.parentStyleSheet.href:null,t).then(d=>{d=Re(d,t),a.set(u.cssText,d),o.appendChild(n.createTextNode(`${d}\n`))}))})}})}(0,n),i.timeEnd("embed web font")),i.time("embed node"),Pe(_,n);const w=a.length;let b=0;null==u||u(b,w),yield Promise.all([...Array(4)].map(()=>m(this,null,function*(){for(;;){const D=a.pop();if(!D)break;try{yield D}catch(V){x("Failed to run task",V)}null==u||u(++b,w)}}))),i.timeEnd("embed node"),null==h||h(_);const E=function Ht(e,t){const{width:n,height:o}=t,i=function be(e,t,n){const o=oe(n).createElementNS(re,"svg");return o.setAttributeNS(null,"width",e.toString()),o.setAttributeNS(null,"height",t.toString()),o.setAttributeNS(null,"viewBox",`0 0 ${e} ${t}`),o}(n,o,e.ownerDocument),a=i.ownerDocument.createElementNS(i.namespaceURI,"foreignObject");return a.setAttributeNS(null,"x","0%"),a.setAttributeNS(null,"y","0%"),a.setAttributeNS(null,"width","100%"),a.setAttributeNS(null,"height","100%"),a.append(e),i.appendChild(a),i}(_,n);return l&&E.insertBefore(l,E.children[0]),r&&E.insertBefore(r,E.children[0]),p&&function It(e){if(e.ownerDocument=void 0,e.ownerWindow=void 0,e.svgStyleElement=void 0,e.svgDefsElement=void 0,e.svgStyles.clear(),e.defaultComputedStyles.clear(),e.sandbox){try{e.sandbox.remove()}catch{}e.sandbox=void 0}e.workers=[],e.fontFamilies.clear(),e.fontCssTexts.clear(),e.requests.clear(),e.tasks=[]}(n),null==y||y(E),E})}function ae(e,t){return m(this,null,function*(){var n;const o=yield F(e,t),i=yield qt(o),a=function Ce(e){const t=(new XMLSerializer).serializeToString(e).replace(/[\u0000-\u0008\u000B\u000C\u000E-\u001F\uD800-\uDFFF\uFFFE\uFFFF]/gu,"");return`data:image/svg+xml;charset=utf-8,${encodeURIComponent(t)}`}(i);o.autoDestruct||(o.svgStyleElement=Se(o.ownerDocument),o.svgDefsElement=null==(n=o.ownerDocument)?void 0:n.createElementNS(re,"defs"),o.svgStyles.clear());const r=B(a,i.ownerDocument);return yield function gt(e,t){return m(this,null,function*(){const{log:n,timeout:o,drawImageCount:i,drawImageInterval:a}=t;n.time("image to canvas");const r=yield G(e,{timeout:o}),{canvas:l,context2d:c}=function yt(e,t){const{width:n,height:o,scale:i,backgroundColor:a,maximumCanvasSize:r}=t,l=e.createElement("canvas");l.width=Math.floor(n*i),l.height=Math.floor(o*i),l.style.width=`${n}px`,l.style.height=`${o}px`,r&&(l.width>r||l.height>r)&&(l.width>r&&l.height>r?l.width>l.height?(l.height*=r/l.width,l.width=r):(l.width*=r/l.height,l.height=r):l.width>r?(l.height*=r/l.width,l.width=r):(l.width*=r/l.height,l.height=r));const c=l.getContext("2d");return c&&a&&(c.fillStyle=a,c.fillRect(0,0,l.width,l.height)),{canvas:l,context2d:c}}(e.ownerDocument,t),s=()=>{try{null==c||c.drawImage(r,0,0,l.width,l.height)}catch(u){x("Failed to drawImage",u)}};s();for(let u=0;u<i;u++)yield new Promise(p=>{setTimeout(()=>{s(),p()},u+a)});return t.drawImageCount=0,n.timeEnd("image to canvas"),l})}(r,o)})}function zt(e,t){return m(this,null,function*(){const n=yield F(e,t),{log:o,type:i,quality:a,dpi:r}=n,l=yield ae(n);o.time("canvas to blob");const c=yield function at(e,t="image/png",n=1){return m(this,null,function*(){try{return yield new Promise((o,i)=>{e.toBlob(a=>{a?o(a):i(new Error("Blob is null"))},t,n)})}catch(o){if(pe)return x("Failed canvas to blob",{type:t,quality:n},o),function ct(e){var t,n;const[o,i]=e.split(","),a=null!=(n=null==(t=o.match(/data:(.+);/))?void 0:t[1])?n:void 0,r=window.atob(i),l=r.length,c=new Uint8Array(l);for(let s=0;s<l;s+=1)c[s]=r.charCodeAt(s);return new Blob([c],{type:a})}(e.toDataURL(t,n));throw o}})}(l,i,a);if(["image/png","image/jpeg"].includes(i)&&r){const s=yield ut(c.slice(0,33));let u=new Uint8Array(s);return"image/png"===i?u=fe(u,r):"image/jpeg"===i&&(u=C(u,r)),new Blob([u,c.slice(33)],{type:i})}return o.timeEnd("canvas to blob"),c})}function Kt(e,t){return m(this,null,function*(){return function Z(e,t){return m(this,null,function*(){const n=yield F(e,t),{log:o,quality:i,type:a,dpi:r}=n,l=yield ae(n);o.time("canvas to data url");let c=l.toDataURL(a,i);if(["image/png","image/jpeg"].includes(a)&&r&&pe&&He){const[s,u]=c.split(",");let p=0,d=!1;if("image/png"===a){const E=function We(e){let t=e.indexOf(Be);return-1===t&&(t=e.indexOf(je)),-1===t&&(t=e.indexOf(Ue)),t}(u);E>=0?(p=4*Math.ceil((E+28)/3),d=!0):p=44}else"image/jpeg"===a&&(p=24);const h=u.substring(0,p),y=u.substring(p),_=window.atob(h),w=new Uint8Array(_.length);for(let E=0;E<w.length;E++)w[E]=_.charCodeAt(E);const b="image/png"===a?fe(w,r,d):C(w,r);c=[s,",",window.btoa(String.fromCharCode(...b)),y].join("")}return o.timeEnd("canvas to data url"),c})}(yield F(e,f(v({},t),{type:"image/jpeg"})))})}}}]);