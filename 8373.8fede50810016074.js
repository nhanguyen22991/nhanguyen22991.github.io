"use strict";(self.webpackChunkcheapflightclient=self.webpackChunkcheapflightclient||[]).push([[8373],{48373:(H,_,c)=>{c.d(_,{E_:()=>u,qS:()=>Z,rC:()=>L,zs:()=>f});var l=c(36895),t=c(94650),C=c(44143),r=c(72506),d=c(77579),x=c(74713),p=c(24006),v=c(78372);function m(i,a){if(1&i){const e=t.EpF();t.TgZ(0,"div",5),t.NdJ("click",function(){t.CHM(e);const s=t.oxw();return t.KtG(s.previous())}),t._UZ(1,"cf-icon",6),t.qZA()}if(2&i){const e=t.oxw();t.ekj("text-neutral-gray-2",!e.isPrevious)("pointer-events-none",!e.isPrevious)("hover:bg-secondary-3-1",e.isPrevious)}}function P(i,a){if(1&i){const e=t.EpF();t.TgZ(0,"div",8),t.NdJ("click",function(){t.CHM(e);const s=t.oxw().$implicit,o=t.oxw();return t.KtG(o.onPageChange(s))}),t._uU(1),t.qZA()}if(2&i){const e=t.oxw().$implicit,n=t.oxw();t.ekj("!text-neutral-white",e===n.current)("!bg-secondary-3-5",e===n.current)("!border-0",e===n.current)("rounded-l",1===e&&!n.isPrevious)("rounded-r",e===n.totalPage&&!n.isNext),t.xp6(1),t.hij(" ",e," ")}}function b(i,a){if(1&i&&(t.ynx(0),t.YNc(1,P,2,11,"div",7),t.BQk()),2&i){const e=a.$implicit;t.oxw();const n=t.MAs(4);t.xp6(1),t.Q6J("ngIf",0!=e)("ngIfElse",n)}}function y(i,a){1&i&&(t.TgZ(0,"div",9),t._uU(1," ... "),t.qZA())}function T(i,a){if(1&i){const e=t.EpF();t.TgZ(0,"div",10),t.NdJ("click",function(){t.CHM(e);const s=t.oxw();return t.KtG(s.next())}),t._UZ(1,"cf-icon",11),t.qZA()}if(2&i){const e=t.oxw();t.ekj("text-neutral-gray-2",!e.isNext)("pointer-events-none",!e.isNext)("hover:bg-secondary-3-1",e.isNext)}}const D=["cf-th",""],g=["*"],S=["cf-thead",""],F=["tableSearchInput"];function k(i,a){if(1&i&&(t.TgZ(0,"div",11),t._uU(1),t.qZA()),2&i){const e=t.oxw(3);t.xp6(1),t.lnq("",e.startPoint+1," - ",e.endPoint," trong s\u1ed1 ",e.data.length,"")}}function I(i,a){if(1&i&&(t.TgZ(0,"div"),t.YNc(1,k,2,3,"div",10),t.qZA()),2&i){t.oxw();const e=t.MAs(5),n=t.oxw();t.xp6(1),t.Q6J("ngIf",0!=n.endPoint)("ngIfElse",e)}}function M(i,a){if(1&i){const e=t.EpF();t.TgZ(0,"div",12)(1,"div",13),t._uU(2,"S\u1ed1 k\u1ebft qu\u1ea3 m\u1ed7i trang"),t.qZA(),t.TgZ(3,"cf-select",14),t.NdJ("selectedChange",function(s){t.CHM(e);const o=t.oxw(2);return t.KtG(o.pageSizeChange(s))}),t.qZA()()}if(2&i){const e=t.oxw(2);t.xp6(3),t.Q6J("ngModel",e.pageSize)("data",e.pageSizeList)("allowSearch",!1)}}function E(i,a){if(1&i&&(t.TgZ(0,"div",11),t._uU(1),t.qZA()),2&i){const e=t.oxw(2);t.xp6(1),t.lnq("",e.startPoint," - ",e.endPoint," trong s\u1ed1 ",e.data.length,"")}}function O(i,a){if(1&i){const e=t.EpF();t.TgZ(0,"cf-pagination",15),t.NdJ("pageChange",function(s){t.CHM(e);const o=t.oxw(2);return t.KtG(o.paginationChange(s))}),t.qZA()}if(2&i){const e=t.oxw(2);t.Q6J("total",e.data.length)("pageSize",e.pageSize)("current",e.pageIndex)}}function w(i,a){if(1&i){const e=t.EpF();t.TgZ(0,"cf-pagination",15),t.NdJ("pageChange",function(s){t.CHM(e);const o=t.oxw(2);return t.KtG(o.paginationIndexChange(s))}),t.qZA()}if(2&i){const e=t.oxw(2);t.Q6J("total",e.totalData)("pageSize",e.pageSize)("current",e.pageIndex)}}function z(i,a){if(1&i&&(t.TgZ(0,"div",4)(1,"div",5),t.YNc(2,I,2,2,"div",6),t.YNc(3,M,4,3,"div",7),t.qZA(),t.YNc(4,E,2,3,"ng-template",null,8,t.W1O),t.YNc(6,O,1,3,"cf-pagination",9),t.YNc(7,w,1,3,"cf-pagination",9),t.qZA()),2&i){const e=t.oxw();t.xp6(2),t.Q6J("ngIf",!e.hidePaginationInfo),t.xp6(1),t.Q6J("ngIf",!e.hidePageSize),t.xp6(3),t.Q6J("ngIf",!e.hidePagination&&!e.serverSidePagination),t.xp6(1),t.Q6J("ngIf",!e.hidePagination&&e.serverSidePagination)}}const N=["cf-td",""];let A=(()=>{class i{constructor(e){this.iconRegister=e,this.total=0,this.pageSize=5,this.current=1,this.pageChange=new t.vpe,this.isPrevious=!0,this.isNext=!0,this.NUM_OF_SHOW=5,this.NUM_OF_PADDING=1,this.totalPage=0,this.totalPageList=[],e.registerIcons([r._7G])}ngOnInit(){this.caculateTotalPage()}caculateTotalPage(){0!=this.total&&(this.totalPage=Math.floor(this.total/this.pageSize),this.total%this.pageSize!=0&&(this.totalPage+=1),this.splitPage(),this.addPaddingStartEnd(),this.checkPreNextPosible())}splitPage(){this.totalPageList=[];let e=this.current-Math.floor(this.NUM_OF_SHOW/2),n=0;e<=0&&(n=0==e?1:-(e-1),e=1);let s=this.current+Math.floor(this.NUM_OF_SHOW/2),o=0;s>=this.totalPage&&(o=s-this.totalPage,s=this.totalPage),s-e<this.NUM_OF_SHOW&&(e-=o,s+=n);for(let h=e;h<=s;h++)h>=1&&h<=this.totalPage&&this.totalPageList.push(h)}addPaddingStartEnd(){let e=[];if(this.totalPageList[this.totalPageList.length-1]<this.totalPage){for(let s=this.totalPage;s>this.totalPage-this.NUM_OF_PADDING&&s>this.totalPageList[this.totalPageList.length-1];s--)e.push(s);e.length>0&&e.push(0),e.reverse().forEach(s=>this.totalPageList.push(s))}let n=[];if(this.totalPageList[0]>1){for(let s=1;s<1+this.NUM_OF_PADDING&&s<this.totalPageList[0];s++)n.push(s);n.length>0&&n.push(0),n.reverse().forEach(s=>this.totalPageList.unshift(s))}}checkPreNextPosible(){this.isPrevious=1!=this.current,this.isNext=this.current!=this.totalPage}previous(){this.pageChange.emit(this.current-1)}next(){this.pageChange.emit(this.current+1)}ngOnChanges(e){this.caculateTotalPage()}onPageChange(e){this.pageChange.emit(e)}}return i.\u0275fac=function(e){return new(e||i)(t.Y36(r.KNP))},i.\u0275cmp=t.Xpm({type:i,selectors:[["cf-pagination"]],inputs:{total:"total",pageSize:"pageSize",current:"current"},outputs:{pageChange:"pageChange"},standalone:!0,features:[t.TTD,t.jDz],decls:6,vars:3,consts:[[1,"flex"],["class","p-2 rounded-l bg-neutral-white border border-r-0 border-neutral-gray-2 cursor-pointer",3,"text-neutral-gray-2","pointer-events-none","hover:bg-secondary-3-1","click",4,"ngIf"],[4,"ngFor","ngForOf"],["etc",""],["class","p-2 rounded-r bg-neutral-white border border-neutral-gray-2 cursor-pointer",3,"text-neutral-gray-2","pointer-events-none","hover:bg-secondary-3-1","click",4,"ngIf"],[1,"p-2","rounded-l","bg-neutral-white","border","border-r-0","border-neutral-gray-2","cursor-pointer",3,"click"],["icon","down","size","small",1,"block","rotate-90","cursor-pointer","select-none","text-body-md"],["class","py-1.5 px-3 text-espressive-md select-none hover:bg-secondary-3-1 bg-neutral-white border border-r-0 border-neutral-gray-2 cursor-pointer",3,"!text-neutral-white","!bg-secondary-3-5","!border-0","rounded-l","rounded-r","click",4,"ngIf","ngIfElse"],[1,"py-1.5","px-3","text-espressive-md","select-none","hover:bg-secondary-3-1","bg-neutral-white","border","border-r-0","border-neutral-gray-2","cursor-pointer",3,"click"],[1,"pt-[5px]","px-3","text-espressive-md","select-none","hover:bg-secondary-3-1","bg-neutral-white","border","border-r-0","border-neutral-gray-2","cursor-pointer"],[1,"p-2","rounded-r","bg-neutral-white","border","border-neutral-gray-2","cursor-pointer",3,"click"],["icon","down","size","small",1,"block","-rotate-90","cursor-pointer","select-none","text-body-md"]],template:function(e,n){1&e&&(t.TgZ(0,"div",0),t.YNc(1,m,2,6,"div",1),t.YNc(2,b,2,2,"ng-container",2),t.YNc(3,y,2,0,"ng-template",null,3,t.W1O),t.YNc(5,T,2,6,"div",4),t.qZA()),2&e&&(t.xp6(1),t.Q6J("ngIf",n.isPrevious),t.xp6(1),t.Q6J("ngForOf",n.totalPageList),t.xp6(3),t.Q6J("ngIf",n.isNext))},dependencies:[l.ez,l.sg,l.O5,r.AxE,r.Sm8],encapsulation:2}),i})(),u=(()=>{class i{constructor(e){this.sticky=null,this.sortState=null,this.sortChange$=new d.x,e.registerIcons([r._7G])}onClick(e){if(this.sortName){switch(this.sortState){case"ascend":this.sortState="descend";break;case"descend":this.sortState=null;break;case null:this.sortState="ascend"}this.sortChange$.next({key:this.sortName,sort:this.sortState})}}ngOnInit(){this.isSticky=null!=this.sticky,this.left="left"===this.sticky,this.right="right"===this.sticky,this.zIndex=null!=this.sticky,this.backgroundGray=null!=this.sticky}}return i.\u0275fac=function(e){return new(e||i)(t.Y36(r.KNP))},i.\u0275cmp=t.Xpm({type:i,selectors:[["","cf-th",""]],hostAttrs:[1,"text-left","text-espressive-semibold-sm","p-3"],hostVars:10,hostBindings:function(e,n){1&e&&t.NdJ("click",function(o){return n.onClick(o.target)}),2&e&&t.ekj("z-10",n.zIndex)("bg-neutral-gray-1",n.backgroundGray)("sticky",n.isSticky)("left-0",n.left)("right-0",n.right)},inputs:{sticky:"sticky",sortName:"sortName"},standalone:!0,features:[t.jDz],attrs:D,ngContentSelectors:g,decls:3,vars:6,consts:[[1,"flex","items-center","select-none","gap-x-1"],["icon","down","size","small",1,"invisible"]],template:function(e,n){1&e&&(t.F$t(),t.TgZ(0,"div",0),t.Hsn(1),t._UZ(2,"cf-icon",1),t.qZA()),2&e&&(t.ekj("cursor-pointer",n.sortName),t.xp6(2),t.ekj("!visible",n.sortName&&null!=n.sortState)("rotate-180","descend"===n.sortState))},dependencies:[r.AxE,r.Sm8],encapsulation:2}),i})(),f=(()=>{class i{constructor(){this.sortChange$=new d.x}ngOnDestroy(){this.thList.forEach(e=>e.sortChange$.unsubscribe())}ngAfterContentInit(){this.thList.forEach(e=>e.sortChange$.subscribe(n=>{this.sortChange$.next(n)}))}}return i.\u0275fac=function(e){return new(e||i)},i.\u0275cmp=t.Xpm({type:i,selectors:[["","cf-thead",""]],contentQueries:function(e,n,s){if(1&e&&t.Suo(s,u,4),2&e){let o;t.iGM(o=t.CRH())&&(n.thList=o)}},hostAttrs:[1,"bg-neutral-gray-1"],standalone:!0,features:[t.jDz],attrs:S,ngContentSelectors:g,decls:2,vars:0,template:function(e,n){1&e&&(t.F$t(),t.TgZ(0,"tr"),t.Hsn(1),t.qZA())},encapsulation:2}),i})(),L=(()=>{class i{constructor(e){this.listData=[],this.totalData=0,this.pageSize=5,this.mode="default",this.hidePaginationInfo=!1,this.hidePagination=!1,this.hidePageSize=!1,this.serverSidePagination=!1,this.pageSizeList=[],this.pageIndexChange=new t.vpe,this.searchSubject=new d.x,this.partOfdata=[],this.data=[],this.sortList=[],this.pageIndex=1,this.startPoint=0,this.endPoint=0,e.registerIcons([r.esH])}ngOnChanges(e){this.processData()}ngOnInit(){this.registerSearch(),this.data=this.listData,this.totalData=this.totalData||this.listData.length,this.processData()}ngAfterViewInit(){this.thead.sortChange$.subscribe(e=>{this.sortProcess(e),this.processData()})}onSearchQueryInput(e){const n=e.target.value;this.searchSubject.next(null==n?void 0:n.trim())}registerSearch(){this.searchSubscription=this.searchSubject.pipe((0,v.b)(700)).subscribe(e=>{this.searchText=e,this.processData()})}sortProcess(e){if(this.sortList.find(s=>s.key==s.key))if(null==e.sort){const s=this.sortList.findIndex(o=>o.key==o.key);s>-1&&this.sortList.splice(s,1)}else{const s=this.sortList.findIndex(o=>o.key==o.key);s>-1&&this.sortList.splice(s,1),this.sortList.push(e)}else this.sortList.push(e)}processData(){this.data=this.fnSearch(this.searchText,this.listData),this.pageIndex>Math.floor(this.data.length/this.pageSize)&&(this.pageIndex=Math.floor(this.data.length/this.pageSize)+1),this.partOfdata=this.fnSort(this.sortList,this.data),this.splitDisplayData()}splitDisplayData(){this.startPoint=(this.pageIndex-1)*this.pageSize,this.endPoint=this.startPoint+this.pageSize>this.partOfdata.length?this.partOfdata.length:this.startPoint+this.pageSize,this.partOfdata=this.partOfdata.slice(this.startPoint,this.endPoint)}pageSizeChange(e){this.pageSize=e.num,this.processData()}paginationChange(e){this.pageIndex=e,this.processData()}paginationIndexChange(e){this.pageIndex=e,this.pageIndexChange.emit(e)}ngOnDestroy(){var e;this.thead.sortChange$.unsubscribe(),null===(e=this.searchSubscription)||void 0===e||e.unsubscribe()}}return i.\u0275fac=function(e){return new(e||i)(t.Y36(r.KNP))},i.\u0275cmp=t.Xpm({type:i,selectors:[["cf-table"]],contentQueries:function(e,n,s){if(1&e&&t.Suo(s,f,5),2&e){let o;t.iGM(o=t.CRH())&&(n.thead=o.first)}},viewQuery:function(e,n){if(1&e&&t.Gf(F,7),2&e){let s;t.iGM(s=t.CRH())&&(n.tableSearchInput=s.first)}},inputs:{listData:"listData",totalData:"totalData",pageSize:"pageSize",mode:"mode",hidePaginationInfo:"hidePaginationInfo",hidePagination:"hidePagination",hidePageSize:"hidePageSize",serverSidePagination:"serverSidePagination",fnSort:"fnSort",fnSearch:"fnSearch",pageSizeList:"pageSizeList"},outputs:{pageIndexChange:"pageIndexChange"},standalone:!0,features:[t.TTD,t.jDz],ngContentSelectors:g,decls:5,vars:1,consts:[[1,"flex","flex-col","bg-neutral-white","rounded-lg","md:h-full"],[1,"flex","flex-col","w-full","overflow-x-auto","md:h-full"],[1,"w-full"],["class","flex items-center justify-between p-4 rounded-lg",4,"ngIf"],[1,"flex","items-center","justify-between","p-4","rounded-lg"],[1,"flex","items-center","gap-x-7"],[4,"ngIf"],["class","flex items-center gap-x-2",4,"ngIf"],["zeroTozero",""],[3,"total","pageSize","current","pageChange",4,"ngIf"],["class","text-body-sm",4,"ngIf","ngIfElse"],[1,"text-body-sm"],[1,"flex","items-center","gap-x-2"],[1,"text-body-md"],["textField","num","valueField","num","size","small",3,"ngModel","data","allowSearch","selectedChange"],[3,"total","pageSize","current","pageChange"]],template:function(e,n){1&e&&(t.F$t(),t.TgZ(0,"div",0)(1,"div",1)(2,"table",2),t.Hsn(3),t.qZA()(),t.YNc(4,z,8,4,"div",3),t.qZA()),2&e&&(t.xp6(4),t.Q6J("ngIf","template"!==n.mode))},dependencies:[l.ez,l.O5,A,C.j$,r.AxE,x.q,p.u5,p.JJ,p.On],styles:["*[_ngcontent-%COMP%]{scrollbar-width:auto;scrollbar-color:#DFDFE0 #ffffff}*[_ngcontent-%COMP%]::-webkit-scrollbar{height:12px}*[_ngcontent-%COMP%]::-webkit-scrollbar-track{background:#ffffff}*[_ngcontent-%COMP%]::-webkit-scrollbar-thumb{background-color:#dfdfe0;border-radius:32px;border:0px solid #ffffff}"]}),i})(),Z=(()=>{class i{constructor(){this.sticky=null,this.sortState=null}ngOnInit(){this.isSticky=null!=this.sticky,this.left="left"===this.sticky,this.right="right"===this.sticky,this.zIndex=null!=this.sticky,this.backgroundGray=null!=this.sticky}}return i.\u0275fac=function(e){return new(e||i)},i.\u0275cmp=t.Xpm({type:i,selectors:[["","cf-td",""]],hostVars:10,hostBindings:function(e,n){2&e&&t.ekj("bg-neutral-gray-1",n.backgroundGray)("sticky",n.isSticky)("z-10",n.zIndex)("left-0",n.left)("right-0",n.right)},inputs:{sticky:"sticky"},standalone:!0,features:[t.jDz],attrs:N,ngContentSelectors:g,decls:1,vars:0,template:function(e,n){1&e&&(t.F$t(),t.Hsn(0))},encapsulation:2}),i})()}}]);