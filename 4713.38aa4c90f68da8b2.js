"use strict";(self.webpackChunkcheapflightclient=self.webpackChunkcheapflightclient||[]).push([[4713],{74713:(st,R,d)=>{d.d(R,{q:()=>X});var t=d(94650),K=d(74891),x=d(72506),S=d(36895),E=d(82722),O=d(78372),b=d(77579),P=d(24006),k=d(77296),I=d(88605),T=d(98184);const M=["trigger"],N=["select"],W=["nonSearch"];function Z(r,f){if(1&r){const i=t.EpF();t.TgZ(0,"cf-icon",14),t.NdJ("click",function(){t.CHM(i),t.oxw();const l=t.MAs(3),h=t.oxw();return l.focus(),t.KtG(h.selectFocus())}),t.qZA()}}function it(r,f){if(1&r){const i=t.EpF();t.TgZ(0,"cf-icon",15),t.NdJ("click",function(){t.CHM(i);const l=t.oxw(2);return t.KtG(l.onClear())}),t.qZA()}}function U(r,f){if(1&r){const i=t.EpF();t.ynx(0),t.TgZ(1,"div",9),t.NdJ("click",function(){t.CHM(i);const l=t.oxw();return t.KtG(l.selectFocus())})("blur",function(){t.CHM(i);const l=t.MAs(3),h=t.oxw();return t.KtG(h.selectBlur(l))}),t.TgZ(2,"input",10,11),t.NdJ("input",function(l){t.CHM(i);const h=t.oxw();return t.KtG(h.searchChangeTrigger(l))})("blur",function(){t.CHM(i);const l=t.MAs(3),h=t.oxw();return t.KtG(h.selectBlur(l))}),t.qZA()(),t.TgZ(4,"div"),t.YNc(5,Z,1,0,"cf-icon",12),t.YNc(6,it,1,0,"cf-icon",13),t.qZA(),t.BQk()}if(2&r){const i=t.oxw();t.xp6(2),t.ekj("!placeholder-neutral-black",i.isDirty)("py-2","medium"==i.size)("py-1","small"==i.size),t.Q6J("placeholder",i.selectedText&&i.selectedText[i.textField]||i.placeholder)("disabled",!i.allowSearch),t.xp6(3),t.Q6J("ngIf",!i.allowClear),t.xp6(1),t.Q6J("ngIf",i.allowClear&&i.selectedText)}}function B(r,f){if(1&r){const i=t.EpF();t.TgZ(0,"cf-icon",15),t.NdJ("click",function(){t.CHM(i);const l=t.oxw(2);return t.KtG(l.onClear())}),t.qZA()}}function D(r,f){if(1&r){const i=t.EpF();t.TgZ(0,"cf-icon",14),t.NdJ("click",function(){t.CHM(i),t.oxw();const l=t.MAs(2);return t.KtG(l.focus())}),t.qZA()}}function J(r,f){if(1&r){const i=t.EpF();t.ynx(0),t.TgZ(1,"div",16,17),t.NdJ("focus",function(){t.CHM(i);const l=t.oxw();return t.KtG(l.selectFocus())})("click",function(){t.CHM(i);const l=t.MAs(2);return t.KtG(l.focus())})("blur",function(){t.CHM(i);const l=t.oxw();return t.KtG(l.isOpen=!1)}),t.TgZ(3,"div",18),t._uU(4),t.qZA(),t.YNc(5,B,1,0,"cf-icon",13),t.YNc(6,D,1,0,"cf-icon",19),t.qZA(),t.BQk()}if(2&r){const i=t.oxw();t.xp6(3),t.ekj("py-2","medium"==i.size)("py-1","small"==i.size)("!text-neutral-black",i.isDirty),t.xp6(1),t.Oqu(i.selectedText&&i.selectedText[i.textField]||i.placeholder),t.xp6(1),t.Q6J("ngIf",i.allowClear&&i.selectedText),t.xp6(1),t.Q6J("ngIf",!i.allowClear)}}function Y(r,f){if(1&r&&(t.TgZ(0,"div"),t._uU(1),t.qZA()),2&r){const i=t.oxw(2).$implicit,o=t.oxw(3);t.xp6(1),t.hij(" ",i[o.textField]," ")}}const L=function(r){return{text:r}},G=function(r,f){return{item:r,search:f}};function z(r,f){if(1&r&&(t.TgZ(0,"div"),t.GkF(1,26),t.qZA()),2&r){const i=t.oxw(2).$implicit,o=t.oxw(3);t.xp6(1),t.Q6J("ngTemplateOutlet",o.optionTmp)("ngTemplateOutletContext",t.WLB(4,G,i,t.VKq(2,L,o.searchText)))}}const Q=function(r){return{"!bg-primary-1-1 !text-primary-1-4":r}};function V(r,f){if(1&r){const i=t.EpF();t.TgZ(0,"div",25),t.NdJ("mousedown",function(l){t.CHM(i);const h=t.oxw().$implicit,m=t.oxw(3);return t.KtG(m.itemSelected(l,h))}),t.YNc(1,Y,2,1,"div",6),t.YNc(2,z,2,7,"div",6),t.qZA()}if(2&r){const i=t.oxw(),o=i.index,l=i.$implicit,h=t.oxw(3);t.Q6J("ngClass",t.VKq(3,Q,h.activedIndex===o||l.isSelected)),t.xp6(1),t.Q6J("ngIf",!h.optionTmp),t.xp6(1),t.Q6J("ngIf",h.optionTmp)}}function j(r,f){if(1&r&&(t.TgZ(0,"div"),t.ynx(1),t.YNc(2,V,3,5,"div",24),t.BQk(),t.qZA()),2&r){const i=f.index,o=t.oxw(3);t.xp6(2),t.Q6J("ngIf",i<o.scrollCount)}}function F(r,f){if(1&r){const i=t.EpF();t.TgZ(0,"div",22),t.NdJ("scrolled",function(){t.CHM(i);const l=t.oxw(2);return t.KtG(l.onScrollDown())}),t.YNc(1,j,3,1,"div",23),t.qZA()}if(2&r){const i=t.oxw(2);t.Udp("max-height",i.maxHeight,"px"),t.Q6J("infiniteScrollDistance",1)("infiniteScrollThrottle",300)("scrollWindow",!1)("fromRoot",!0)("alwaysCallback",!0),t.xp6(1),t.Q6J("ngForOf",i.displayData)}}function H(r,f){1&r&&(t.TgZ(0,"div",27)(1,"div",28),t._uU(2,"Kh\xf4ng c\xf3 k\u1ebft qu\u1ea3"),t.qZA(),t.TgZ(3,"div",29),t._uU(4,"Kh\xf4ng c\xf3 k\u1ebft qu\u1ea3 hi\u1ec3n th\u1ecb"),t.qZA(),t.TgZ(5,"div",29),t._uU(6,"Vui l\xf2ng th\u1eed l\u1ea1i sau ho\u1eb7c ki\u1ec3m tra l\u1ea1i t\xecm ki\u1ebfm"),t.qZA()())}function $(r,f){if(1&r&&(t.YNc(0,F,2,8,"div",20),t.YNc(1,H,7,0,"div",21)),2&r){const i=t.oxw();t.Q6J("ngIf",!i.isEmpty),t.xp6(1),t.Q6J("ngIf",i.isEmpty)}}const q=[[["","cfLabel",""]],[["","cfPrefix",""]],[["","cfHeadIcon",""]],[["","cfSuffix",""]],[["","cfHint",""]]],A=["[cfLabel]","[cfPrefix]","[cfHeadIcon]","[cfSuffix]","[cfHint]"];let X=(()=>{class r{constructor(i,o,l,h,m){this._viewportRuler=o,this._changeDetectorRef=l,this.overlay=h,this.scrollStrategyOptions=m,this.size="medium",this.placeholder="",this.textField="text",this.valueField="value",this.data=[],this.excludes=[],this.allowSearch=!0,this.allowClear=!1,this.allowCustomText=!1,this.isOpen=!1,this.selectedChange=new t.vpe,this.onSearch=new t.vpe,this.status="default",this.showHint=!0,this.mode="default",this.maxHeight=352,this.isEmpty=!1,this.displayData=[],this.isDirty=!1,this.searchText="",this.overlayWidth=0,this.searchResults$=new b.x,this._destroy=new b.x,this.SCROLL_DEFAULT=10,this.OFSET_INCREASE=10,this.scrollCount=this.SCROLL_DEFAULT,this.listSelected=[],this.scrollStrategy=this.overlay.scrollStrategies.close(),this.activedIndex=-1,this.onChange=w=>{},this.touched=!1,this.isAddTouch=!1,this.onTouched=()=>{},i.registerIcons([x._7G,x.UNF])}ngOnInit(){this.initDataSource(),this._viewportRuler.change().pipe((0,E.R)(this._destroy)).subscribe(()=>{this.isOpen&&(this.overlayWidth=this.trigger.nativeElement.getBoundingClientRect().width,this._changeDetectorRef.markForCheck())}),this.allowSearch&&this.searchResults$.pipe((0,O.b)(100)).subscribe(i=>{this.searchChange(i),this.onSearch.emit(i)})}initDataSource(){this.displayData=this.data.map(i=>({...i,isSelected:this.selectedText&&this.selectedText[this.valueField]===i[this.valueField]}))}onKeyDown(i){switch(i.code){case"ArrowUp":if(0===this.displayData.length)break;const o=this.displayData.findIndex(m=>m[this.valueField]===this.activatedValue[this.valueField]),h=o>0?o-1:this.displayData.length-1;0===o&&(this.scrollCount=Math.max(0,this.scrollCount-1)),this.activedIndex=h,this.activatedValue=this.displayData[h],i.preventDefault();break;case"ArrowDown":if(this.activatedValue){const w=(this.displayData.findIndex(nt=>nt[this.valueField]===this.activatedValue[this.valueField])+1)%this.displayData.length;this.activatedValue=this.displayData[w],this.activedIndex=w,w+1>=this.scrollCount&&this.scrollCount++}else this.activedIndex=0,this.activatedValue=this.displayData[0];i.preventDefault();break;case"Enter":this.activatedValue&&(this.selectedText=this.activatedValue,this.displayData.forEach(m=>{m.isSelected=this.selectedText[this.valueField]===m[this.valueField]}),this.checkItemActive(this.activatedValue),this.onChange(this.activatedValue[this.valueField]),this.isOpen=!1,this.isDirty=!0,this._changeDetectorRef.markForCheck(),i.preventDefault())}}checkItemActive(i){this.displayData.forEach(o=>{o.isSelected=!(!i||i[this.valueField]!==o[this.valueField])})}selectFocus(){this.overlayWidth=this.trigger.nativeElement.getBoundingClientRect().width,this.displayData=this.data.filter(i=>!this.excludes.includes(i[this.valueField])),this.isOpen=!0,this._changeDetectorRef.markForCheck()}onFocus(){this.allowSearch?this.select.nativeElement.focus():this.nonSearch.nativeElement.focus()}selectBlur(i){i.value="",this.displayData=this.data.map(o=>o),this.activatedValue=this.selectedText,this.checkItemActive(this.activatedValue),this.isOpen=!1,this.markAsTouched()}searchChangeTrigger(i){this.searchResults$.next(i.target.value)}searchChange(i){const o=i;this.searchText=o,""==o?this.displayData=this.data.filter(l=>!this.excludes.includes(l[this.valueField])):(this.displayData=this.customSearch?this.data.filter(l=>!this.excludes.includes(l[this.valueField])).filter(l=>this.customSearch(l,o)):this.data.filter(l=>!this.excludes.includes(l[this.valueField])).filter(l=>l[this.textField].toLowerCase().includes(o.toLowerCase())),this.allowCustomText&&this.displayData.push(this.createObjectFromString(o))),this.scrollCount=this.SCROLL_DEFAULT,this._changeDetectorRef.markForCheck()}createObjectFromString(i){return JSON.parse(`{"${this.textField}":"${i}","${this.valueField}":"${i}"}`)}onDeleteItem(i){this.listSelected.map(l=>l[this.valueField]).includes(i[this.valueField])&&(this.listSelected=this.listSelected.filter(l=>l[this.valueField]!==i[this.valueField])),this.displayData.forEach(l=>{l.isSelected=!!this.listSelected.map(m=>m[this.valueField]).includes(l[this.valueField])}),this.onChange(this.listSelected.map(l=>l[this.valueField]))}itemSelected(i,o){this.selectedText=o,this.displayData.forEach(l=>{l.isSelected=this.selectedText[this.valueField]===l[this.valueField]}),this.onChange(o[this.valueField]),this.isOpen=!1,this.isDirty=!0,this.selectedChange.emit(o),i.preventDefault()}onClear(){this.selectedText=null,this.initDataSource(),this.onChange(null),this.isDirty=!1,this._changeDetectorRef.markForCheck(),this.selectedChange.emit(null)}writeValue(i){const o=this.data.find(l=>l[this.valueField]==i);o?(this.selectedText=o,this.isDirty=!0,this._changeDetectorRef.markForCheck()):this.allowCustomText&&(this.selectedText=i,this.isDirty=!0,this._changeDetectorRef.markForCheck())}registerOnChange(i){this.onChange=i}registerOnTouched(i){this.onTouched=i,this.isAddTouch=!0}setDisabledState(i){}markAsTouched(){!this.touched&&this.isAddTouch&&(this.onTouched(),this.touched=!0)}onScrollDown(){this.scrollCount+=this.OFSET_INCREASE}}return r.\u0275fac=function(i){return new(i||r)(t.Y36(x.KNP),t.Y36(I.rL),t.Y36(t.sBO),t.Y36(T.aV),t.Y36(T.uw))},r.\u0275cmp=t.Xpm({type:r,selectors:[["cf-select"]],viewQuery:function(i,o){if(1&i&&(t.Gf(M,5),t.Gf(N,5),t.Gf(W,5)),2&i){let l;t.iGM(l=t.CRH())&&(o.trigger=l.first),t.iGM(l=t.CRH())&&(o.select=l.first),t.iGM(l=t.CRH())&&(o.nonSearch=l.first)}},hostAttrs:[1,"max-w-[320px]","block"],inputs:{size:"size",placeholder:"placeholder",textField:"textField",optionTmp:"optionTmp",valueField:"valueField",data:"data",excludes:"excludes",allowSearch:"allowSearch",allowClear:"allowClear",allowCustomText:"allowCustomText",isOpen:"isOpen",customSearch:"customSearch",status:"status",showHint:"showHint",mode:"mode",maxHeight:"maxHeight",isEmpty:"isEmpty"},outputs:{selectedChange:"selectedChange",onSearch:"onSearch"},exportAs:["cfSelect"],standalone:!0,features:[t._Bn([{provide:P.JU,multi:!0,useExisting:r}]),t.jDz],ngContentSelectors:A,decls:16,vars:29,consts:[[1,"w-full","items-center"],[1,"text-espressive-md","text-neutral-gray-5","mb-1.5","empty:!m-0"],[1,"flex","border","border-neutral-gray-2","rounded"],["componentContainer",""],["cdkOverlayOrigin","",1,"flex","justify-between","flex-1","items-center","gap-x-2","px-[13px]","rounded","focus-within:border-neutral-gray-5","focus-within:ring-4","focus:border-neutral-gray-5","focus:ring-4","ring-neutral-gray-1","bg-neutral-white",3,"keydown"],["trigger","","originOverlay","cdkOverlayOrigin"],[4,"ngIf"],[1,"text-body-sm","mt-1.5","empty:!m-0"],["cdkConnectedOverlay","",3,"cdkConnectedOverlayOrigin","cdkConnectedOverlayOpen","cdkConnectedOverlayPanelClass","cdkConnectedOverlayMinWidth","cdkConnectedOverlayScrollStrategy"],[1,"cursor-pointer","w-full",3,"click","blur"],["type","text",1,"w-full","text-body-md","outline-none","placeholder-neutral-gray-4",3,"placeholder","disabled","input","blur"],["select",""],["class","cursor-pointer","icon","down",3,"click",4,"ngIf"],["class","cursor-pointer","icon","close",3,"click",4,"ngIf"],["icon","down",1,"cursor-pointer",3,"click"],["icon","close",1,"cursor-pointer",3,"click"],["tabindex","0",1,"flex","w-full","items-center","gap-x-2","cursor-pointer","outline-none",3,"focus","click","blur"],["nonSearch",""],["tabIndex","0",1,"w-full","text-body-md","text-neutral-gray-4","outline-none","overflow-hidden","text-ellipsis","whitespace-nowrap"],["class","","class","cursor-pointer","icon","down",3,"click",4,"ngIf"],["infinite-scroll","","class","flex flex-col py-2 shadow-cf-lg rounded-lg w-full overflow-y-auto",3,"infiniteScrollDistance","infiniteScrollThrottle","scrollWindow","fromRoot","alwaysCallback","maxHeight","scrolled",4,"ngIf"],["class","flex flex-col justify-center items-center py-4 shadow-cf-lg rounded-lg w-full overflow-y-auto bg-neutral-white",4,"ngIf"],["infinite-scroll","",1,"flex","flex-col","py-2","shadow-cf-lg","rounded-lg","w-full","overflow-y-auto",3,"infiniteScrollDistance","infiniteScrollThrottle","scrollWindow","fromRoot","alwaysCallback","scrolled"],[4,"ngFor","ngForOf"],["class","cursor-pointer py-2.5 px-3.5 text-neutral-black text-body-md bg-neutral-white hover:bg-primary-1-1 hover:text-primary-1-4",3,"ngClass","mousedown",4,"ngIf"],[1,"cursor-pointer","py-2.5","px-3.5","text-neutral-black","text-body-md","bg-neutral-white","hover:bg-primary-1-1","hover:text-primary-1-4",3,"ngClass","mousedown"],[3,"ngTemplateOutlet","ngTemplateOutletContext"],[1,"flex","flex-col","justify-center","items-center","py-4","shadow-cf-lg","rounded-lg","w-full","overflow-y-auto","bg-neutral-white"],[1,"text-heading-sm","mb-2"],[1,"text-body-md"]],template:function(i,o){if(1&i&&(t.F$t(q),t.TgZ(0,"div",0)(1,"div",1),t.Hsn(2),t.qZA(),t.TgZ(3,"div",2,3),t.Hsn(5,1),t.TgZ(6,"div",4,5),t.NdJ("keydown",function(h){return o.onKeyDown(h)}),t.Hsn(9,2),t.YNc(10,U,7,10,"ng-container",6),t.YNc(11,J,7,9,"ng-container",6),t.qZA(),t.Hsn(12,3),t.qZA(),t.TgZ(13,"div",7),t.Hsn(14,4),t.qZA()(),t.YNc(15,$,2,2,"ng-template",8)),2&i){const l=t.MAs(8);t.xp6(3),t.ekj("!border-secondary-6-3","error"===o.status),t.xp6(3),t.ekj("!border-secondary-6-3","error"===o.status)("!focus-within:border-secondary-6-3","error"===o.status)("!ring-secondary-6-1","error"===o.status)("!border-secondary-7-3","warning"===o.status)("!focus-within:border-secondary-7-3","warning"===o.status)("!ring-secondary-7-1","warning"===o.status),t.xp6(4),t.Q6J("ngIf",o.allowSearch),t.xp6(1),t.Q6J("ngIf",!o.allowSearch),t.xp6(2),t.ekj("!hidden",!o.showHint)("!m-0",!o.showHint)("text-secondary-6-5","error"===o.status)("text-secondary-7-5","warning"===o.status),t.xp6(2),t.Q6J("cdkConnectedOverlayOrigin",l)("cdkConnectedOverlayOpen",o.isOpen)("cdkConnectedOverlayPanelClass","!z-[59]")("cdkConnectedOverlayMinWidth",o.overlayWidth)("cdkConnectedOverlayScrollStrategy",o.scrollStrategy)}},dependencies:[S.ez,S.mk,S.sg,S.O5,S.tP,K.f,T.pI,T.xu,x.AxE,x.Sm8,k.Rq,k.Ry],styles:["*[_ngcontent-%COMP%]{scrollbar-width:auto;scrollbar-color:#DFDFE0 #ffffff}*[_ngcontent-%COMP%]::-webkit-scrollbar{width:4px}*[_ngcontent-%COMP%]::-webkit-scrollbar-track{background:#ffffff}*[_ngcontent-%COMP%]::-webkit-scrollbar-thumb{background-color:#dfdfe0;border-radius:32px;border:0px solid #ffffff}"],changeDetection:0}),r})()},77296:(st,R,d)=>{d.d(R,{Ry:()=>ht,Rq:()=>pt});var t=d(94650),K=d(39646),x=d(54968),S=d(95577),E=d(54004),O=d(18505),b=d(39300),P=d(34986),k=d(54482),I=d(25403),T=d(38421);const M={leading:!0,trailing:!1};var W=d(5963);function U(e,n,s,c){const a=window&&!!window.document&&window.document.documentElement;let u=a&&n?window:s;if(e&&(u=e&&a&&"string"==typeof e?function B(e,n,s){return(s?window.document:n).querySelector(e)}(e,s.nativeElement,c):e,!u))throw new Error("ngx-infinite-scroll {resolveContainerElement()}: selector for");return u}function D(e){return e&&!e.firstChange}const Y={clientHeight:"clientHeight",offsetHeight:"offsetHeight",scrollHeight:"scrollHeight",pageYOffset:"pageYOffset",offsetTop:"offsetTop",scrollTop:"scrollTop",top:"top"},L={clientHeight:"clientWidth",offsetHeight:"offsetWidth",scrollHeight:"scrollWidth",pageYOffset:"pageXOffset",offsetTop:"offsetLeft",scrollTop:"scrollLeft",top:"left"};class G{constructor(n=!0){this.vertical=n,this.propsMap=n?Y:L}clientHeightKey(){return this.propsMap.clientHeight}offsetHeightKey(){return this.propsMap.offsetHeight}scrollHeightKey(){return this.propsMap.scrollHeight}pageYOffsetKey(){return this.propsMap.pageYOffset}offsetTopKey(){return this.propsMap.offsetTop}scrollTopKey(){return this.propsMap.scrollTop}topKey(){return this.propsMap.top}}function j(e){return["Window","global"].some(s=>Object.prototype.toString.call(e).includes(s))}function F(e,n){return e?n.document.documentElement:null}function H(e,n){const s=function X({container:e,isWindow:n,axis:s}){const{offsetHeightKey:c,clientHeightKey:a}=A(s);return r(e,n,c,a)}(n);return n.isWindow?function $(e,n,s){const{axis:c,container:a,isWindow:u}=s,{offsetHeightKey:p,clientHeightKey:v}=A(c),g=e+i(F(u,a),c,u),_=r(n.nativeElement,u,p,v),C=function f(e,n,s){const c=n.topKey();if(e.getBoundingClientRect)return e.getBoundingClientRect()[c]+i(e,n,s)}(n.nativeElement,c,u)+_;return{height:e,scrolled:g,totalToScroll:C,isWindow:u}}(s,e,n):function q(e,n,s){const{axis:c,container:a}=s;return{height:e,scrolled:a[c.scrollTopKey()],totalToScroll:a[c.scrollHeightKey()],isWindow:!1}}(s,0,n)}function A(e){return{offsetHeightKey:e.offsetHeightKey(),clientHeightKey:e.clientHeightKey()}}function r(e,n,s,c){if(isNaN(e[s])){const a=F(n,e);return a?a[c]:0}return e[s]}function i(e,n,s){const c=n.pageYOffsetKey(),a=n.scrollTopKey(),u=n.offsetTopKey();return isNaN(window.pageYOffset)?F(s,e)[a]:e.ownerDocument?e.ownerDocument.defaultView[c]:e[u]}function o(e,n={down:0,up:0},s){let c,a;if(e.totalToScroll<=0)return!1;const u=e.isWindow?e.scrolled:e.height+e.scrolled;return s?(c=(e.totalToScroll-u)/e.totalToScroll,a=(null!=n&&n.down?n.down:0)/10):(c=e.scrolled/(e.scrolled+(e.totalToScroll-u)),a=(null!=n&&n.up?n.up:0)/10),c<=a}class rt{constructor({totalToScroll:n}){this.lastScrollPosition=0,this.lastTotalToScroll=0,this.totalToScroll=0,this.triggered={down:0,up:0},this.totalToScroll=n}updateScrollPosition(n){return this.lastScrollPosition=n}updateTotalToScroll(n){this.lastTotalToScroll!==n&&(this.lastTotalToScroll=this.totalToScroll,this.totalToScroll=n)}updateScroll(n,s){this.updateScrollPosition(n),this.updateTotalToScroll(s)}updateTriggeredFlag(n,s){s?this.triggered.down=n:this.triggered.up=n}isTriggeredScroll(n,s){return s?this.triggered.down===n:this.triggered.up===n}}function ct(e){const{scrollContainer:n,scrollWindow:s,element:c,fromRoot:a}=e,u=function Q({windowElement:e,axis:n}){return function V(e,n){const s=e.isWindow||n&&!n.nativeElement?n:n.nativeElement;return{...e,container:s}}({axis:n,isWindow:j(e)},e)}({axis:new G(!e.horizontal),windowElement:U(n,s,c,a)}),p=new rt({totalToScroll:H(c,u)}),g={up:e.upDistance,down:e.downDistance};return function at(e){let n=(0,x.R)(e.container,"scroll");return e.throttle&&(n=n.pipe(function Z(e,n=P.z,s=M){const c=(0,W.H)(e,n);return function N(e,n=M){return(0,k.e)((s,c)=>{const{leading:a,trailing:u}=n;let p=!1,v=null,g=null,_=!1;const C=()=>{null==g||g.unsubscribe(),g=null,u&&(lt(),_&&c.complete())},et=()=>{g=null,_&&c.complete()},ot=y=>g=(0,T.Xf)(e(y)).subscribe((0,I.x)(c,C,et)),lt=()=>{if(p){p=!1;const y=v;v=null,c.next(y),!_&&ot(y)}};s.subscribe((0,I.x)(c,y=>{p=!0,v=y,(!g||g.closed)&&(a?lt():ot(y))},()=>{_=!0,(!(u&&p&&g)||g.closed)&&c.complete()}))})}(()=>c,s)}(e.throttle,void 0,{leading:!0,trailing:!0}))),n}({container:u.container,throttle:e.throttle}).pipe((0,S.z)(()=>(0,K.of)(H(c,u))),(0,E.U)(_=>function dt(e,n,s){const{scrollDown:c,fire:a}=function h(e,n,s){const c=function l(e,n){return e<n.scrolled}(e,n);return{fire:o(n,s,c),scrollDown:c}}(e,n,s);return{scrollDown:c,fire:a,stats:n}}(p.lastScrollPosition,_,g)),(0,O.b)(({stats:_})=>p.updateScroll(_.scrolled,_.totalToScroll)),(0,b.h)(({fire:_,scrollDown:C,stats:{totalToScroll:et}})=>function z(e,n,s){return!!(e&&n||!s&&n)}(e.alwaysCallback,_,p.isTriggeredScroll(et,C))),(0,O.b)(({scrollDown:_,stats:{totalToScroll:C}})=>{p.updateTriggeredFlag(C,_)}),(0,E.U)(ut))}const tt={DOWN:"[NGX_ISE] DOWN",UP:"[NGX_ISE] UP"};function ut(e){const{scrollDown:n,stats:{scrolled:s}}=e;return{type:n?tt.DOWN:tt.UP,payload:{currentScrollPosition:s}}}let ht=(()=>{class e{constructor(s,c){this.element=s,this.zone=c,this.scrolled=new t.vpe,this.scrolledUp=new t.vpe,this.infiniteScrollDistance=2,this.infiniteScrollUpDistance=1.5,this.infiniteScrollThrottle=150,this.infiniteScrollDisabled=!1,this.infiniteScrollContainer=null,this.scrollWindow=!0,this.immediateCheck=!1,this.horizontal=!1,this.alwaysCallback=!1,this.fromRoot=!1}ngAfterViewInit(){this.infiniteScrollDisabled||this.setup()}ngOnChanges({infiniteScrollContainer:s,infiniteScrollDisabled:c,infiniteScrollDistance:a}){const u=D(s),p=D(c),v=D(a),g=!p&&!this.infiniteScrollDisabled||p&&!c.currentValue||v;(u||p||v)&&(this.destroyScroller(),g&&this.setup())}setup(){(function J(){return typeof window<"u"})()&&this.zone.runOutsideAngular(()=>{this.disposeScroller=ct({fromRoot:this.fromRoot,alwaysCallback:this.alwaysCallback,disable:this.infiniteScrollDisabled,downDistance:this.infiniteScrollDistance,element:this.element,horizontal:this.horizontal,scrollContainer:this.infiniteScrollContainer,scrollWindow:this.scrollWindow,throttle:this.infiniteScrollThrottle,upDistance:this.infiniteScrollUpDistance}).subscribe(s=>this.handleOnScroll(s))})}handleOnScroll({type:s,payload:c}){const a=s===tt.DOWN?this.scrolled:this.scrolledUp;(function ft(e){var n;return null!==(n=e.observed)&&void 0!==n?n:e.observers.length>0})(a)&&this.zone.run(()=>a.emit(c))}ngOnDestroy(){this.destroyScroller()}destroyScroller(){this.disposeScroller&&this.disposeScroller.unsubscribe()}}return e.\u0275fac=function(s){return new(s||e)(t.Y36(t.SBq),t.Y36(t.R0b))},e.\u0275dir=t.lG2({type:e,selectors:[["","infiniteScroll",""],["","infinite-scroll",""],["","data-infinite-scroll",""]],inputs:{infiniteScrollDistance:"infiniteScrollDistance",infiniteScrollUpDistance:"infiniteScrollUpDistance",infiniteScrollThrottle:"infiniteScrollThrottle",infiniteScrollDisabled:"infiniteScrollDisabled",infiniteScrollContainer:"infiniteScrollContainer",scrollWindow:"scrollWindow",immediateCheck:"immediateCheck",horizontal:"horizontal",alwaysCallback:"alwaysCallback",fromRoot:"fromRoot"},outputs:{scrolled:"scrolled",scrolledUp:"scrolledUp"},features:[t.TTD]}),e})(),pt=(()=>{class e{}return e.\u0275fac=function(s){return new(s||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({}),e})()}}]);