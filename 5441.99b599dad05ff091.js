"use strict";(self.webpackChunkcheapflightclient=self.webpackChunkcheapflightclient||[]).push([[5441],{65441:(D,b,l)=>{l.r(b),l.d(b,{MobileSearchInputComponent:()=>X,SearchFlightPageComponent:()=>R});var C=l(40899),F=l(36895),f=l(24006),M=l(82761),d=l(83700),T=l(27898),p=l(72506),S=l(3401),c=l(27361),_=l(88001),u=l(15439),e=l(94650),P=l(17997),x=l(40105),A=l(9381),O=l(42678),Y=l(77492);function Z(o,m){if(1&o){const t=e.EpF();e.TgZ(0,"div",27)(1,"div",28),e.NdJ("click",function(){e.CHM(t);const a=e.oxw();return e.KtG(a.addMultiRoute())}),e._UZ(2,"cf-icon",29),e.TgZ(3,"div",30),e._uU(4,"Th\xeam ch\u1eb7ng m\u1edbi"),e.qZA()(),e.TgZ(5,"div",31),e.NdJ("click",function(){e.CHM(t);const a=e.oxw();return e.KtG(a.removeAllDataMultiRoute())}),e._UZ(6,"cf-icon",32),e.TgZ(7,"div",33),e._uU(8,"X\xf3a t\u1ea5t c\u1ea3"),e.qZA()()()}}function N(o,m){if(1&o){const t=e.EpF();e.TgZ(0,"button",34),e.NdJ("click",function(){e.CHM(t);const a=e.oxw();return e.KtG(a.onRegisterBookingHunter())}),e._UZ(1,"cf-icon",35),e.TgZ(2,"span"),e._uU(3,"S\u0103n v\xe9"),e.qZA()()}}function w(o,m){if(1&o){const t=e.EpF();e.TgZ(0,"div",36)(1,"div",37),e.NdJ("click",function(){e.CHM(t);const a=e.oxw();return e.KtG(a.onChooseCampaign(a.CAMPAIGN_URL.FREE_WEBSITE,"FREE_WEBSITE"))}),e._UZ(2,"img",38),e.qZA(),e.TgZ(3,"div",39),e.NdJ("click",function(){e.CHM(t);const a=e.oxw();return e.KtG(a.onChooseCampaign(a.CAMPAIGN_URL.FUN_TICKET,"FUN_TICKET"))}),e._UZ(4,"img",40),e.qZA()()}}let R=(()=>{class o{constructor(t,i,a,n,r,s,h,g,v){this.cfIconRegister=t,this._searchMinFareDataProvider=i,this._router=a,this._searchInputService=n,this._searchFlightService=r,this._permissionService=s,this._mobileDetectService=h,this._requestDataService=g,this._eventLogService=v,this.flightTypeSearch=c.jX.OneWay,this.multiFilghtType=c.jX.MultiWay,this.huntBookingFlag=this._permissionService.hasPermission(C.or.CanMonitorHuntFareTicket),this.searchMinFaresResult=[],this.listDateSearchMinFares=[],this.CAMPAIGN_CONFIG=S.ut,this.CAMPAIGN_URL=S.jP,this.initIcon(),this.initMinFareOption(),this.initDateSearchMinFare(),this.resetForm(),n.flightType="ONE_WAY"}initIcon(){this.cfIconRegister.registerIcons([p.bHT,p.D5L,p.TM4,p.gll,p.TOh,p.KYu,p.tLH,p.IIV,p._hx,p.YwC])}initMinFareOption(){this.minFareOptionConfig={minPrice:new Map,airlineMinPrice:[{airline:_.QK.VJ,airlineName:"Vietjet Air",color:"#E03C31",selected:!0},{airline:_.QK.VN,airlineName:"Vietnam Airlines",color:"#2E5EAA",selected:!0}],isRangeMinFare:!1,showMinPrice:!0,showLunarDate:!0}}initDateSearchMinFare(t=new Date){this.listDateSearchMinFares=[];const i=u(t).format("YYYY-MM-DD"),a=u(t).add(1,"month").startOf("month").format("YYYY-MM-DD");this.listDateSearchMinFares.push(i),this.listDateSearchMinFares.push(a)}resetForm(){this._searchInputService.reset()}numberOfPassengerChange(t){this._searchInputService.numberOfPassengerChange(t),this._searchInputService.suggestPromotion()}airlineFilterChange(t){this._searchInputService.airlineFilterChange(t)}cabinChange(t){this._searchInputService.cabinChange(t)}paxTypeChange(t){this._searchInputService.paxTypeChange(t)}addMultiRoute(){this._searchInputService.addMultiRoute()}removeRoute(t){this._searchInputService.removeRoute(t)}removeAllDataMultiRoute(){this._searchInputService.removeAllDataMultiRoute()}flightTypeChange(t){switch(this.flightTypeSearch=t,t){case c.jX.OneWay:this._searchInputService.flightTypeChange("ONE_WAY"),this.minFareOptionConfig=Object.assign(Object.assign({},this.minFareOptionConfig),{isRangeMinFare:!1});break;case c.jX.RoundTrip:this._searchInputService.flightTypeChange("ROUND_TRIP"),this.minFareOptionConfig=Object.assign(Object.assign({},this.minFareOptionConfig),{isRangeMinFare:!0});break;case c.jX.MultiWay:this._searchInputService.flightTypeChange("MULTI_WAY")}}searchFlight(){let t;t=this.flightTypeSearch===c.jX.OneWay?"ONE_WAY":this.flightTypeSearch===c.jX.RoundTrip?"ROUND_TRIP":"MULTI_WAY",this._searchInputService.prepareRequestFlight(t)&&(this._searchMinFareDataProvider.searchMinFareData=this.searchMinFaresResult,this._router.navigate(["/admin/search-flight-result"]))}searchInputChange(t){this.suggestPromotion(),this._searchInputService.checkInternationalFlight(),this.updateDateSearchMinFare(t)}updateDateSearchMinFare(t){var i;"AIRPORT"===t&&(this.minFareOptionConfig.minPrice=new Map,this.minFareOptionConfig=Object.assign({},this.minFareOptionConfig),this.listDateSearchMinFares=[]);let n=[],r=new Date;if(r=null===(i=this._searchInputService.searchInputForm.value[0])||void 0===i?void 0:i.departDate,!r&&!this.minFareOptionConfig.minPrice.size&&(this.initDateSearchMinFare(),n=this.listDateSearchMinFares),r){const s=u(new Date(r.getFullYear(),r.getMonth())).format("YYYY-MM-DD");((s,h)=>{const g=s.getFullYear(),v=h.getFullYear(),y=s.getMonth();return 12*(v-g)+(h.getMonth()-y)})(new Date,r)>2?n.push(s):this.generateRangeDateSearchMinFare(s).forEach(g=>{this.listDateSearchMinFares.includes(g)||n.push(g)})}n&&n.length&&this.searchMinFaresApi(n)}onDateTypeChange(t){"DEPART"===t&&this.mappingMinFares(0),"ARRIVE"===t&&this.mappingMinFares(1)}onNavigateDatepicker(t){let i=[];i.push(t);const a=u(t).subtract(1,"month");a.month()===(new Date).getMonth()?i.push(u(new Date).format("YYYY-MM-DD")):i.push(a.format("YYYY-MM-DD")),i=i.filter(n=>!this.listDateSearchMinFares.includes(n)),i.forEach(n=>{this.listDateSearchMinFares.includes(n)||(this.listDateSearchMinFares.push(n),this.searchMinFaresApi([n]))})}generateRangeDateSearchMinFare(t,i=""){const a=u(i||new Date),n=u(t),r=[];r.push(a.format("YYYY-MM-DD"));const s=a.clone().add(1,"month").startOf("month");for(;s.isBefore(n)||s.isSame(n,"month");)r.push(s.format("YYYY-MM-DD")),s.add(1,"month");return r}searchMinFaresApi(t){const i=this._searchInputService.getSearchInputData();if(i.startPoint&&i.endPoint){let a=[];this.flightTypeSearch===c.jX.OneWay&&(a=t.map(n=>({departDate:u(new Date(n)).format("YYYY-MM-DD"),endPoint:i.endPoint,leg:0,providers:`${_.QK.VJ},${_.QK.VN}`,startPoint:i.startPoint}))),this.flightTypeSearch===c.jX.RoundTrip&&(a=t.map(n=>({departDate:u(new Date(n)).format("YYYY-MM-DD"),endPoint:i.endPoint,leg:0,providers:`${_.QK.VJ},${_.QK.VN}`,startPoint:i.startPoint})),a.push(...t.map(n=>({departDate:u(new Date(n)).format("YYYY-MM-DD"),endPoint:i.startPoint,leg:1,providers:`${_.QK.VJ},${_.QK.VN}`,startPoint:i.endPoint})))),this._searchFlightService.searchMinFare(a).subscribe({next:n=>{"OK"===n.status&&(n.data.length?(n.data.forEach(r=>{const s=this.searchMinFaresResult.find(h=>h.leg===r.leg);s?Object.entries(r.data).forEach(h=>{s.data.set(h[0],h[1])}):this.searchMinFaresResult.push(Object.assign(Object.assign({},r),{data:new Map(Object.entries(r.data))}))}),this.mappingMinFares(a[0].leg)):this.minFareOptionConfig=Object.assign({},this.minFareOptionConfig))}})}}onToggleAirline(t){t&&this.mappingMinFares()}mappingMinFares(t=0){if(this.searchMinFaresCurrentLegResult=this.searchMinFaresResult.find(i=>i.leg===t),this.searchMinFaresCurrentLegResult){this.minFareOptionConfig.minPrice=new Map;const i=this.minFareOptionConfig.airlineMinPrice.filter(a=>a.selected).map(a=>a.airline);this.searchMinFaresCurrentLegResult.data.forEach((a,n)=>{const r=a.filter(g=>i.includes(g.key)),s=r.length?r.reduce((g,v)=>v.value<g.value?v:g):null,h=s?this.minFareOptionConfig.airlineMinPrice.find(g=>g.airline===s.key):null;this.minFareOptionConfig.minPrice.set(n,s?{price:Math.ceil(s.value/1e3),originPrice:(null==s?void 0:s.value)||0,airline:(null==h?void 0:h.airline)||s.key,airlineName:(null==h?void 0:h.airlineName)||s.key,color:(null==h?void 0:h.color)||""}:null)}),this.minFareOptionConfig=Object.assign({},this.minFareOptionConfig)}}suggestPromotion(){this._searchInputService.suggestPromotion()}onCheckDirectFlight(t){this._searchInputService.checkDirectFlight(t)}onRegisterBookingHunter(){this._requestDataService.sourceEvent="SEARCH_INPUT",this._router.navigate(["admin/request-booking-hunter"],{state:{isEntryPointSearch:!1}})}onChooseCampaign(t,i){if(S.ut.ENABLE){const a={platform:this._mobileDetectService.isMobile()?1:0,banner_type:"FUN_TICKET"===i?1:0};this._eventLogService.captureBannerCampaignClick(a),window.open(t,"_blank")}}}return o.\u0275fac=function(t){return new(t||o)(e.Y36(p.KNP),e.Y36(P.W),e.Y36(M.F0),e.Y36(S.vQ),e.Y36(x.t7),e.Y36(C.$A),e.Y36(A.L),e.Y36(O.FH),e.Y36(Y.x))},o.\u0275cmp=e.Xpm({type:o,selectors:[["search-flight-page"]],hostAttrs:[1,"h-full"],standalone:!0,features:[e.jDz],decls:34,vars:26,consts:[[1,"relative","h-full"],["src","https://cheapflighttest.s3.ap-southeast-1.amazonaws.com/banner.png",1,"w-full","md:h-[218px]","md:object-cover","h-full"],[1,"absolute","top-0","left-0","w-full","pt-[53px]","px-[30px]","md:pt-5","md:px-4"],[1,"bg-neutral-white","p-6","rounded-lg","w-full","shadow-cf-md","md:p-4"],[1,"flex","items-center","justify-between","mb-5"],[1,"md:w-full"],[3,"flightType","flightTypeSearchChange"],[1,"flex","items-center","justify-end","gap-x-4","md:hidden"],[3,"adultNumber","childNumber","infantNumber","numberOfPassengerChange"],[3,"airlineList","airlineFilterChange"],[3,"isShowTooltipFirstTime","promotionGroupList"],[3,"cabinList","actived","cabinChange"],[3,"paxTypeList","actived","paxTypeChange"],[1,"mb-[20px]","md:mb-4"],[3,"formArray","minFareOptionConfig","removeRoute","dataChange","toggleAirline","navigateDatepicker","dateTypeChange"],[1,"gap-2","hidden","md:flex","overflow-x-auto","md:flex-wrap"],["class","flex items-center gap-x-10 mb-5",4,"ngIf"],[1,"h-0","border-b","border-b-neutral-gray-2","my-4","hidden","md:block"],[1,"flex","justify-between","items-center","md:flex-col","md:items-start","md:gap-y-4"],[1,"flex","justify-start","gap-x-[34px]"],[1,"flex","items-center","gap-3","whitespace-nowrap"],["size","medium",3,"checkChange"],[1,"flex","justify-end","gap-x-2","w-full"],["cf-button","","size","medium","type","solid","class","!bg-neutral-gray-5 flex gap-x-2 text-neutral-white hover:!opacity-80 hover:!bg-neutral-gray-5 active:!bg-neutral-gray-5 active:!opacity-100",3,"click",4,"ngIf"],["cf-button","","size","medium","color","primary-1","type","solid",1,"md:justify-center",3,"click"],["icon","search","size","small",1,"mr-2.5"],["class","my-4 flex justify-between gap-4 md:flex-col",4,"ngIf"],[1,"flex","items-center","gap-x-10","mb-5"],[1,"flex","items-center","text-secondary-1-5","cursor-pointer",3,"click"],["icon","plus","size","small",1,"mr-2.5"],[1,"text-heading-xs"],[1,"flex","items-center","text-neutral-black","cursor-pointer",3,"click"],["icon","rotate_left","size","small",1,"mr-2.5"],[1,"text-body-md"],["cf-button","","size","medium","type","solid",1,"!bg-neutral-gray-5","flex","gap-x-2","text-neutral-white","hover:!opacity-80","hover:!bg-neutral-gray-5","active:!bg-neutral-gray-5","active:!opacity-100",3,"click"],["icon","ticket","size","small",1,"mr-1.5"],[1,"my-4","flex","justify-between","gap-4","md:flex-col"],[1,"w-full","rounded-lg","bg-primary-1-4","cursor-pointer","overflow-hidden",3,"click"],["src","assets/images/campaign/free-website.png","alt","T\u1eb7ng website mi\u1ec5n ph\xed",1,"object-contain","w-full","h-auto"],[1,"w-full","rounded-lg","bg-info-200","cursor-pointer","overflow-hidden",3,"click"],["src","assets/images/campaign/fun-ticket.png","alt","T\u1eb7ng v\xe9 vui ch\u01a1i",1,"w-full","h-auto"]],template:function(t,i){1&t&&(e.TgZ(0,"div",0),e._UZ(1,"img",1),e.TgZ(2,"div",2)(3,"div",3)(4,"div",4)(5,"div",5)(6,"cf-flight-type-selector",6),e.NdJ("flightTypeSearchChange",function(n){return i.flightTypeChange(n)}),e.qZA()(),e.TgZ(7,"div",7)(8,"cf-number-of-passenger",8),e.NdJ("numberOfPassengerChange",function(n){return i.numberOfPassengerChange(n)}),e.qZA(),e.TgZ(9,"cf-airline-filter",9),e.NdJ("airlineFilterChange",function(n){return i.airlineFilterChange(n)}),e.qZA(),e._UZ(10,"cf-voucher-selector",10),e.TgZ(11,"cf-cabin-selector",11),e.NdJ("cabinChange",function(n){return i.cabinChange(n)}),e.qZA(),e.TgZ(12,"cf-pax-type-selector",12),e.NdJ("paxTypeChange",function(n){return i.paxTypeChange(n)}),e.qZA()()(),e.TgZ(13,"div",13)(14,"cf-search-flight-input",14),e.NdJ("removeRoute",function(n){return i.removeRoute(n)})("dataChange",function(n){return i.searchInputChange(n)})("toggleAirline",function(n){return i.onToggleAirline(n)})("navigateDatepicker",function(n){return i.onNavigateDatepicker(n)})("dateTypeChange",function(n){return i.onDateTypeChange(n)}),e.qZA()(),e.TgZ(15,"div",15)(16,"cf-number-of-passenger",8),e.NdJ("numberOfPassengerChange",function(n){return i.numberOfPassengerChange(n)}),e.qZA(),e.TgZ(17,"cf-airline-filter",9),e.NdJ("airlineFilterChange",function(n){return i.airlineFilterChange(n)}),e.qZA(),e._UZ(18,"cf-voucher-selector",10),e.TgZ(19,"cf-cabin-selector",11),e.NdJ("cabinChange",function(n){return i.cabinChange(n)}),e.qZA(),e.TgZ(20,"cf-pax-type-selector",12),e.NdJ("paxTypeChange",function(n){return i.paxTypeChange(n)}),e.qZA()(),e.YNc(21,Z,9,0,"div",16),e._UZ(22,"div",17),e.TgZ(23,"div",18)(24,"div",19)(25,"div",20)(26,"cf-checkbox",21),e.NdJ("checkChange",function(n){return i.onCheckDirectFlight(n)}),e._uU(27," Ch\u1ec9 c\xe1c chuy\u1ebfn bay th\u1eb3ng "),e.qZA()()(),e.TgZ(28,"div",22),e.YNc(29,N,4,0,"button",23),e.TgZ(30,"button",24),e.NdJ("click",function(){return i.searchFlight()}),e._UZ(31,"cf-icon",25),e._uU(32," T\xecm chuy\u1ebfn bay "),e.qZA()()()(),e.YNc(33,w,5,0,"div",26),e.qZA()()),2&t&&(e.xp6(6),e.Q6J("flightType",i.flightTypeSearch),e.xp6(2),e.Q6J("adultNumber",i._searchInputService.numberOfPassenger.adult)("childNumber",i._searchInputService.numberOfPassenger.child)("infantNumber",i._searchInputService.numberOfPassenger.infant),e.xp6(1),e.Q6J("airlineList",i._searchInputService.airlineFilters),e.xp6(1),e.Q6J("isShowTooltipFirstTime",!0)("promotionGroupList",i._searchInputService.promotionGroupFilters),e.xp6(1),e.Q6J("cabinList",i._searchInputService.cabinList)("actived",i._searchInputService.hasAirportInternational),e.xp6(1),e.Q6J("paxTypeList",i._searchInputService.paxTypeList)("actived",i._searchInputService.hasAirportInternational),e.xp6(2),e.Q6J("formArray",i._searchInputService.searchInputForm)("minFareOptionConfig",i.minFareOptionConfig),e.xp6(2),e.Q6J("adultNumber",i._searchInputService.numberOfPassenger.adult)("childNumber",i._searchInputService.numberOfPassenger.child)("infantNumber",i._searchInputService.numberOfPassenger.infant),e.xp6(1),e.Q6J("airlineList",i._searchInputService.airlineFilters),e.xp6(1),e.Q6J("isShowTooltipFirstTime",!1)("promotionGroupList",i._searchInputService.promotionGroupFilters),e.xp6(1),e.Q6J("cabinList",i._searchInputService.cabinList)("actived",i._searchInputService.hasAirportInternational),e.xp6(1),e.Q6J("paxTypeList",i._searchInputService.paxTypeList)("actived",i._searchInputService.hasAirportInternational),e.xp6(1),e.Q6J("ngIf",i.flightTypeSearch===i.multiFilghtType),e.xp6(8),e.Q6J("ngIf",i.huntBookingFlag),e.xp6(4),e.Q6J("ngIf",i.CAMPAIGN_CONFIG.ENABLE))},dependencies:[p.AxE,p.Sm8,d.N8,d.Xq,T.u,c.DA,c.z6,c.h4,c.uX,c.t3,f.u5,f.UX,M.Bz,F.O5,c.qB,c.P_],encapsulation:2}),o})();var E=l(4688),k=l(13138),J=l(28490),j=l(37094);function Q(o,m){1&o&&e._UZ(0,"cf-icon",15)}function L(o,m){1&o&&e._UZ(0,"cf-icon",16)}function U(o,m){if(1&o&&(e.TgZ(0,"div",11),e._uU(1),e.ALo(2,"date"),e.qZA()),2&o){const t=e.oxw();e.xp6(1),e.Oqu(e.xi3(2,1,t.journeys[0].departDate,"dd/MM/yyyy"))}}function K(o,m){if(1&o&&(e.TgZ(0,"div",11),e._uU(1),e.ALo(2,"date"),e.ALo(3,"date"),e.qZA()),2&o){const t=e.oxw();e.xp6(1),e.AsE("",e.xi3(2,2,t.journeys[0].departDate,"dd/MM/yyyy")," - ",e.xi3(3,5,t.journeys[1].departDate,"dd/MM/yyyy"),"")}}function B(o,m){1&o&&(e.TgZ(0,"div"),e._uU(1,"M\u1ed9t chi\u1ec1u"),e.qZA())}function G(o,m){1&o&&(e.TgZ(0,"div"),e._uU(1,"Kh\u1ee9 h\u1ed3i"),e.qZA())}function q(o,m){if(1&o){const t=e.EpF();e.TgZ(0,"div",17),e.NdJ("click",function(){e.CHM(t);const a=e.oxw();return e.KtG(a.openQuotation())}),e._UZ(1,"cf-icon",18),e.TgZ(2,"div",19),e._uU(3," B\xe1o gi\xe1 "),e.qZA()()}}function H(o,m){if(1&o){const t=e.EpF();e.TgZ(0,"div",41)(1,"div",42),e.NdJ("click",function(){e.CHM(t);const a=e.oxw(2);return e.KtG(a.addMultiRoute())}),e._UZ(2,"cf-icon",43),e.TgZ(3,"div",44),e._uU(4,"Th\xeam ch\u1eb7ng m\u1edbi"),e.qZA()(),e.TgZ(5,"div",45),e.NdJ("click",function(){e.CHM(t);const a=e.oxw(2);return e.KtG(a.removeAllDataMultiRoute())}),e._UZ(6,"cf-icon",46),e.TgZ(7,"div",47),e._uU(8,"X\xf3a t\u1ea5t c\u1ea3"),e.qZA()()()}}function z(o,m){if(1&o){const t=e.EpF();e.TgZ(0,"div",20)(1,"div",21)(2,"div",22)(3,"cf-flight-type-selector",23),e.NdJ("flightTypeSearchChange",function(a){e.CHM(t);const n=e.oxw();return e.KtG(n.flightTypeChange(a))}),e.qZA()(),e.TgZ(4,"div",24)(5,"cf-number-of-passenger",25),e.NdJ("numberOfPassengerChange",function(a){e.CHM(t);const n=e.oxw();return e.KtG(n.numberOfPassengerChange(a))}),e.qZA(),e.TgZ(6,"cf-airline-filter",26),e.NdJ("airlineFilterChange",function(a){e.CHM(t);const n=e.oxw();return e.KtG(n.airlineFilterChange(a))}),e.qZA(),e._UZ(7,"cf-voucher-selector",27),e.TgZ(8,"cf-cabin-selector",28),e.NdJ("cabinChange",function(a){e.CHM(t);const n=e.oxw();return e.KtG(n.cabinChange(a))}),e.qZA(),e.TgZ(9,"cf-pax-type-selector",29),e.NdJ("paxTypeChange",function(a){e.CHM(t);const n=e.oxw();return e.KtG(n.paxTypeChange(a))}),e.qZA()()(),e.TgZ(10,"div",30)(11,"cf-search-flight-input",31),e.NdJ("removeRoute",function(a){e.CHM(t);const n=e.oxw();return e.KtG(n.removeRoute(a))})("dataChange",function(){e.CHM(t);const a=e.oxw();return e.KtG(a.suggestPromotion())})("dataChange",function(a){e.CHM(t);const n=e.oxw();return e.KtG(n.searchInputChange(a))})("toggleAirline",function(a){e.CHM(t);const n=e.oxw();return e.KtG(n.onToggleAirline(a))})("navigateDatepicker",function(a){e.CHM(t);const n=e.oxw();return e.KtG(n.onNavigateDatepicker(a))}),e.qZA()(),e.TgZ(12,"div",32)(13,"cf-number-of-passenger",25),e.NdJ("numberOfPassengerChange",function(a){e.CHM(t);const n=e.oxw();return e.KtG(n.numberOfPassengerChange(a))}),e.qZA(),e.TgZ(14,"cf-airline-filter",26),e.NdJ("airlineFilterChange",function(a){e.CHM(t);const n=e.oxw();return e.KtG(n.airlineFilterChange(a))}),e.qZA(),e._UZ(15,"cf-voucher-selector",27),e.TgZ(16,"cf-cabin-selector",28),e.NdJ("cabinChange",function(a){e.CHM(t);const n=e.oxw();return e.KtG(n.cabinChange(a))}),e.qZA(),e.TgZ(17,"cf-pax-type-selector",29),e.NdJ("paxTypeChange",function(a){e.CHM(t);const n=e.oxw();return e.KtG(n.paxTypeChange(a))}),e.qZA()(),e.YNc(18,H,9,0,"div",33),e._UZ(19,"div",34),e.TgZ(20,"div",35)(21,"div",36)(22,"div",37)(23,"cf-checkbox",38),e.NdJ("checkChange",function(a){e.CHM(t);const n=e.oxw();return e.KtG(n.onCheckDirectFlight(a))}),e._uU(24," Ch\u1ec9 c\xe1c chuy\u1ebfn bay th\u1eb3ng "),e.qZA()()(),e.TgZ(25,"button",39),e.NdJ("click",function(){e.CHM(t);const a=e.oxw();return e.KtG(a.researchFlight())}),e._UZ(26,"cf-icon",40),e._uU(27," T\xecm chuy\u1ebfn bay "),e.qZA()()()}if(2&o){const t=e.oxw();e.xp6(3),e.Q6J("flightType",t.flightTypeSearch),e.xp6(2),e.Q6J("adultNumber",t._searchInputService.numberOfPassenger.adult)("childNumber",t._searchInputService.numberOfPassenger.child)("infantNumber",t._searchInputService.numberOfPassenger.infant),e.xp6(1),e.Q6J("airlineList",t._searchInputService.airlineFilters),e.xp6(1),e.Q6J("isShowTooltipFirstTime",!0)("promotionGroupList",t._searchInputService.promotionGroupFilters),e.xp6(1),e.Q6J("cabinList",t._searchInputService.cabinList)("actived",t._searchInputService.hasAirportInternational),e.xp6(1),e.Q6J("paxTypeList",t._searchInputService.paxTypeList)("actived",t._searchInputService.hasAirportInternational),e.xp6(2),e.Q6J("formArray",t._searchInputService.searchInputForm)("minFareOptionConfig",t.minFareOptionConfig),e.xp6(2),e.Q6J("adultNumber",t._searchInputService.numberOfPassenger.adult)("childNumber",t._searchInputService.numberOfPassenger.child)("infantNumber",t._searchInputService.numberOfPassenger.infant),e.xp6(1),e.Q6J("airlineList",t._searchInputService.airlineFilters),e.xp6(1),e.Q6J("isShowTooltipFirstTime",!1)("promotionGroupList",t._searchInputService.promotionGroupFilters),e.xp6(1),e.Q6J("cabinList",t._searchInputService.cabinList)("actived",t._searchInputService.hasAirportInternational),e.xp6(1),e.Q6J("paxTypeList",t._searchInputService.paxTypeList)("actived",t._searchInputService.hasAirportInternational),e.xp6(1),e.Q6J("ngIf",t.flightTypeSearch===t.multiFilghtType),e.xp6(5),e.Q6J("checked",t.isDirectFlight)}}let X=(()=>{class o{constructor(t,i,a,n,r,s,h){switch(this._searchInputService=t,this._searchFlightService=i,this._dataProvider=a,this._locationData=n,this._iconRegister=r,this._bottomSheetService=s,this._permissionService=h,this.showQuotation=this._permissionService.hasPermission(C.or.CreateFlightTicketQuote),this.showSharedFlight=this._permissionService.hasPermission(C.or.CanShareFlightSelected),this.flightTypeSearch=c.jX.OneWay,this.multiFilghtType=c.jX.MultiWay,this.onReseachFlight=new e.vpe,this.onFlightTypeChange=new e.vpe,this.onQuotation=new e.vpe,this.searchMinFaresResult=[],this.listDateSearchMinFares=[],this.loadJourneyInfo(),this.initMinFareOption(),this.initDateSearchMinFare(),this.searchMinFaresApi(this.listDateSearchMinFares),r.registerIcons([p.Ffn,p.PlV,p.Lxr]),t.flightType){case"ONE_WAY":default:this.flightTypeSearch=c.jX.OneWay,this.minFareOptionConfig=Object.assign(Object.assign({},this.minFareOptionConfig),{isRangeMinFare:!1});break;case"ROUND_TRIP":this.flightTypeSearch=c.jX.RoundTrip,this.minFareOptionConfig=Object.assign(Object.assign({},this.minFareOptionConfig),{isRangeMinFare:!0});break;case"MULTI_WAY":this.flightTypeSearch=c.jX.MultiWay}}ngOnInit(){this._searchInputService.selectedDateBar$.subscribe({next:t=>{t&&t.length&&this.journeys.forEach((i,a)=>{i.departDate=t[i.leg]})}})}initMinFareOption(){this.minFareOptionConfig={minPrice:new Map,airlineMinPrice:[{airline:_.QK.VJ,airlineName:"Vietjet Air",color:"#E03C31",selected:!0},{airline:_.QK.VN,airlineName:"Vietnam Airlines",color:"#2E5EAA",selected:!0}],isRangeMinFare:!1,showMinPrice:!0,showLunarDate:!0}}initDateSearchMinFare(t=new Date){this.listDateSearchMinFares=[];const i=u(t).format("YYYY-MM-DD"),a=u(t).add(1,"month").startOf("month").format("YYYY-MM-DD");this.listDateSearchMinFares.push(i),this.listDateSearchMinFares.push(a)}loadJourneyInfo(){this.adultNumber=this._dataProvider.searchInputData.adult,this.childNumber=this._dataProvider.searchInputData.child,this.journeys=this._dataProvider.searchInputData.journey,this.isDirectFlight=this._searchInputService.isDirectFlight,this.startPoint=this._locationData.getCityNameByCode(this.journeys[0].startPoint),this.endPoint=this._locationData.getCityNameByCode(this.journeys[0].endPoint)}openSearchInputBottomSheet(t){this.bottomSheetRef=this._bottomSheetService.open(t,{headerTitle:"T\xecm ki\u1ebfm",leftButtonIcon:"close",rightButtonIcon:"",leftButtonIconClass:"text-neutral-gray-4",containerFullHeigh:!0}),this.bottomSheetRef.containerInstance._leftButtonClick.subscribe(i=>this.bottomSheetRef.dismiss())}flightTypeChange(t){this.flightTypeSearch=t,this.onFlightTypeChange.emit(t)}numberOfPassengerChange(t){this._searchInputService.numberOfPassengerChange(t),this._searchInputService.suggestPromotion()}airlineFilterChange(t){this._searchInputService.airlineFilterChange(t)}addMultiRoute(){this._searchInputService.addMultiRoute()}removeRoute(t){this._searchInputService.removeRoute(t)}suggestPromotion(){this._searchInputService.suggestPromotion()}removeAllDataMultiRoute(){this._searchInputService.removeAllDataMultiRoute()}onCheckDirectFlight(t){this._searchInputService.checkDirectFlight(t),this.isDirectFlight=this._searchInputService.isDirectFlight}researchFlight(){this.bottomSheetRef.dismiss(),this.onReseachFlight.emit(),this.loadJourneyInfo()}openQuotation(){this.onQuotation.emit()}cabinChange(t){this._searchInputService.cabinChange(t)}paxTypeChange(t){this._searchInputService.paxTypeChange(t)}onNavigateDatepicker(t){this.listDateSearchMinFares.includes(t)||(this.listDateSearchMinFares.push(t),this.searchMinFaresApi([t]))}generateRangeDateSearchMinFare(t){const i=u(new Date),a=u(t);let n=[];n.push(i.format("YYYY-MM-DD"));let r=i.clone().add(1,"month").startOf("month");for(;r.isBefore(a)||r.isSame(a,"month");)n.push(r.format("YYYY-MM-DD")),r.add(1,"month");return n}searchMinFaresApi(t){const i=this._searchInputService.getSearchInputData();if(i.startPoint&&i.endPoint){let a=[];this.flightTypeSearch===c.jX.OneWay&&(a=t.map(n=>({departDate:u(new Date(n)).format("YYYY-MM-DD"),endPoint:i.endPoint,leg:0,providers:`${_.QK.VJ},${_.QK.VN}`,startPoint:i.startPoint}))),this.flightTypeSearch===c.jX.RoundTrip&&(a=t.map(n=>({departDate:u(new Date(n)).format("YYYY-MM-DD"),endPoint:i.endPoint,leg:0,providers:`${_.QK.VJ},${_.QK.VN}`,startPoint:i.startPoint})),a.push(...t.map(n=>({departDate:u(new Date(n)).format("YYYY-MM-DD"),endPoint:i.startPoint,leg:1,providers:`${_.QK.VJ},${_.QK.VN}`,startPoint:i.endPoint})))),this._searchFlightService.searchMinFare(a).subscribe({next:n=>{"OK"===n.status&&n.data.length&&(this.searchMinFaresResult=n.data,this.searchMinFaresCurrentLegResult=this.searchMinFaresResult.find(r=>r.leg===a[0].leg),this.mappingMinFares())}})}}onToggleAirline(t){t&&this.mappingMinFares()}mappingMinFares(){if(this.searchMinFaresCurrentLegResult){this.minFareOptionConfig.minPrice=new Map;const t=this.minFareOptionConfig.airlineMinPrice.filter(i=>i.selected).map(i=>i.airline);Object.entries(this.searchMinFaresCurrentLegResult.data).forEach(i=>{const a=i[1].filter(s=>t.includes(s.key)),n=a.length?a.reduce((s,h)=>h.value<s.value?h:s):null,r=n?this.minFareOptionConfig.airlineMinPrice.find(s=>s.airline===n.key):null;this.minFareOptionConfig.minPrice.set(i[0],n?{price:Math.ceil(n.value/1e3),originPrice:(null==n?void 0:n.value)||0,airline:(null==r?void 0:r.airline)||n.key,airlineName:(null==r?void 0:r.airlineName)||n.key,color:(null==r?void 0:r.color)||""}:null)}),this.minFareOptionConfig=Object.assign({},this.minFareOptionConfig)}}searchInputChange(t){this.suggestPromotion(),this._searchInputService.checkInternationalFlight(),this.updateDateSearchMinFare(t)}updateDateSearchMinFare(t){var i;"AIRPORT"===t&&(this.minFareOptionConfig.minPrice=new Map,this.minFareOptionConfig=Object.assign({},this.minFareOptionConfig),this.listDateSearchMinFares=[]);let n=[],r=new Date;if(r=null===(i=this._searchInputService.searchInputForm.value[0])||void 0===i?void 0:i.departDate,!r&&!this.minFareOptionConfig.minPrice.size&&(this.initDateSearchMinFare(),n=this.listDateSearchMinFares),r){const s=u(new Date(r.getFullYear(),r.getMonth())).format("YYYY-MM-DD");((s,h)=>{const g=s.getFullYear(),v=h.getFullYear(),y=s.getMonth();return 12*(v-g)+(h.getMonth()-y)})(new Date,r)>2?n.push(s):this.generateRangeDateSearchMinFare(s).forEach(g=>{this.listDateSearchMinFares.includes(g)||n.push(g)})}n&&n.length&&this.searchMinFaresApi(n)}}return o.\u0275fac=function(t){return new(t||o)(e.Y36(S.vQ),e.Y36(x.t7),e.Y36(k.R),e.Y36(J._),e.Y36(p.KNP),e.Y36(j.a2),e.Y36(C.$A))},o.\u0275cmp=e.Xpm({type:o,selectors:[["mobile-search-input"]],inputs:{currentMode:"currentMode"},outputs:{onReseachFlight:"onReseachFlight",onFlightTypeChange:"onFlightTypeChange",onQuotation:"onQuotation"},standalone:!0,features:[e.jDz],decls:23,vars:11,consts:[[1,"flex","items-center","justify-between","w-full"],[1,"flex","flex-col","grow-1","gap-y-1"],[1,"flex","items-center","gap-x-1",3,"click"],[1,"text-espressive-sm","text-neutral-gray-6"],["class","text-secondary-7-5","icon","arrow_right","size","small",4,"ngIf"],["class","rotate-90 text-secondary-7-5","icon","sort","size","small",4,"ngIf"],["type","inverted",3,"color","size"],["icon","edit","size","small",1,"text-secondary-6-4","ml-2.5"],[1,"flex","items-center"],["class","text-body-sm text-neutral-gray-5",4,"ngIf"],[1,"w-0","border-r","border-r-secondary-7-2","mx-1","h-4"],[1,"text-body-sm","text-neutral-gray-5"],[4,"ngIf"],["class","flex items-center gap-x-1.5",3,"click",4,"ngIf"],["searchInputBottomSheet",""],["icon","arrow_right","size","small",1,"text-secondary-7-5"],["icon","sort","size","small",1,"rotate-90","text-secondary-7-5"],[1,"flex","items-center","gap-x-1.5",3,"click"],["icon","document","size","small"],[1,"text-body-md-short"],[1,"bg-neutral-white","p-6","rounded-lg","w-full","shadow-cf-md","md:p-4"],[1,"flex","items-center","justify-between","mb-5"],[1,"md:w-full"],[3,"flightType","flightTypeSearchChange"],[1,"flex","items-center","justify-end","gap-4","flex-wrap","md:hidden"],[3,"adultNumber","childNumber","infantNumber","numberOfPassengerChange"],[3,"airlineList","airlineFilterChange"],[3,"isShowTooltipFirstTime","promotionGroupList"],[3,"cabinList","actived","cabinChange"],[3,"paxTypeList","actived","paxTypeChange"],[1,"mb-[20px]","md:mb-4"],[3,"formArray","minFareOptionConfig","removeRoute","dataChange","toggleAirline","navigateDatepicker"],[1,"gap-2","hidden","md:flex","flex-wrap","overflow-x-auto"],["class","flex items-center gap-x-10 mb-5",4,"ngIf"],[1,"h-0","border-b","border-b-neutral-gray-2","my-4","hidden","md:block"],[1,"flex","justify-between","items-center","md:flex-col","md:items-start","md:gap-y-4"],[1,"flex","justify-start","gap-x-[34px]"],[1,"flex","items-center","gap-3"],["size","medium",3,"checked","checkChange"],["cf-button","","size","medium","color","primary-1","type","solid",1,"md:w-full","md:justify-center",3,"click"],["icon","search","size","small",1,"mr-2.5"],[1,"flex","items-center","gap-x-10","mb-5"],[1,"flex","items-center","text-secondary-1-5","cursor-pointer",3,"click"],["icon","plus","size","small",1,"mr-2.5"],[1,"text-heading-xs"],[1,"flex","items-center","text-neutral-black","cursor-pointer",3,"click"],["icon","rotate_left","size","small",1,"mr-2.5"],[1,"text-body-md"]],template:function(t,i){if(1&t){const a=e.EpF();e.TgZ(0,"div",0)(1,"div",1)(2,"div",2),e.NdJ("click",function(){e.CHM(a);const r=e.MAs(22);return e.KtG(i.openSearchInputBottomSheet(r))}),e.TgZ(3,"div",3),e._uU(4),e.qZA(),e.YNc(5,Q,1,0,"cf-icon",4),e.YNc(6,L,1,0,"cf-icon",5),e.TgZ(7,"div",3),e._uU(8),e.qZA(),e.TgZ(9,"cf-label",6),e._uU(10," Thay \u0111\u1ed5i "),e._UZ(11,"cf-icon",7),e.qZA()(),e.TgZ(12,"div",8),e.YNc(13,U,3,4,"div",9),e.YNc(14,K,4,8,"div",9),e._UZ(15,"div",10),e.TgZ(16,"div",11),e.YNc(17,B,2,0,"div",12),e.YNc(18,G,2,0,"div",12),e.qZA()()(),e.TgZ(19,"div"),e.YNc(20,q,4,0,"div",13),e.qZA()(),e.YNc(21,z,28,25,"ng-template",null,14,e.W1O)}2&t&&(e.xp6(4),e.Oqu(i.startPoint),e.xp6(1),e.Q6J("ngIf",1===i.journeys.length),e.xp6(1),e.Q6J("ngIf",2===i.journeys.length),e.xp6(2),e.Oqu(i.endPoint),e.xp6(1),e.Q6J("color","red")("size","small"),e.xp6(4),e.Q6J("ngIf",1===i.journeys.length),e.xp6(1),e.Q6J("ngIf",2===i.journeys.length),e.xp6(3),e.Q6J("ngIf",1===i.journeys.length),e.xp6(1),e.Q6J("ngIf",2===i.journeys.length),e.xp6(2),e.Q6J("ngIf",i.showQuotation&&"retail"===i.currentMode))},dependencies:[F.ez,F.O5,F.uU,p.AxE,p.Sm8,c.DA,d.N8,d.Xq,T.u,c.z6,c.h4,c.uX,c.t3,f.u5,f.UX,M.Bz,c.qB,c.P_,E.b],encapsulation:2}),o})()},17997:(D,b,l)=>{l.d(b,{W:()=>F});var C=l(94650);let F=(()=>{class f{get searchMinFareData(){return JSON.parse(sessionStorage.getItem("searchMinFareData"))}set searchMinFareData(d){const T=d.map(p=>Object.assign(Object.assign({},p),{data:Object.fromEntries(p.data)}));sessionStorage.setItem("searchMinFareData",JSON.stringify(T))}removeSearchMinFareData(){sessionStorage.removeItem("searchMinFareData")}}return f.\u0275fac=function(d){return new(d||f)},f.\u0275prov=C.Yz7({token:f,factory:f.\u0275fac,providedIn:"root"}),f})()}}]);