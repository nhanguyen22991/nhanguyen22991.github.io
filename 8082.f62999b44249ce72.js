"use strict";(self.webpackChunkcheapflightclient=self.webpackChunkcheapflightclient||[]).push([[8082],{95293:(A,x,u)=>{u.d(x,{P:()=>h});var a=u(80529),e=u(44500),r=u(50494),c=u(54004),Z=u(4482),g=u(94650);const f={headers:new a.WM({"Content-Type":"application/json"})};let h=(()=>{class p{constructor(d,_){this.http=d,this.appConfig=_}getBookingDetail(d,_){return this.http.post(this.appConfig.apiUrl+"flight/booking-retriver",JSON.stringify({airline:_,bookingCode:d}),f).pipe((0,c.U)(b=>(0,r.yE)(Z.JG,b,{excludeExtraneousValues:!0})))}}return p.\u0275fac=function(d){return new(d||p)(g.LFG(a.eN),g.LFG(e.qB))},p.\u0275prov=g.Yz7({token:p,factory:p.\u0275fac,providedIn:"root"}),p})()},20348:(A,x,u)=>{u.d(x,{Wn:()=>ue,EH:()=>ae,kP:()=>O,co:()=>J});var a=u(36895),e=u(94650),r=u(83700),c=u(72506),Z=u(4688),g=u(48373),f=u(48042),h=u(40899);function p(i,o){1&i&&(e.TgZ(0,"div"),e._UZ(1,"ticket-item-skeleton")(2,"ticket-item-skeleton")(3,"ticket-item-skeleton")(4,"ticket-item-skeleton"),e.qZA())}function v(i,o){1&i&&(e.TgZ(0,"cf-label",24),e.O4$(),e.TgZ(1,"svg",25),e._UZ(2,"path",26),e.qZA(),e._uU(3," Th\xe0nh c\xf4ng "),e.qZA())}function d(i,o){1&i&&(e.TgZ(0,"cf-label",27),e.O4$(),e.TgZ(1,"svg",25),e._UZ(2,"circle",28)(3,"path",29),e.qZA(),e._uU(4," Th\u1ea5t b\u1ea1i "),e.qZA())}function _(i,o){if(1&i){const t=e.EpF();e.TgZ(0,"a",30),e.NdJ("click",function(){e.CHM(t);const l=e.oxw().$implicit,s=e.oxw(2);return e.KtG(s.onReview(l.ticketNumber))}),e._uU(1," Xem chi ti\u1ebft "),e.qZA()}}const b=function(i){return{"opacity-50":i}};function E(i,o){if(1&i&&(e.TgZ(0,"tr",18)(1,"td",19),e._uU(2),e.qZA(),e.TgZ(3,"td",19),e._uU(4),e.ALo(5,"number"),e.qZA(),e.TgZ(6,"td",19),e.YNc(7,v,4,0,"cf-label",20),e.YNc(8,d,5,0,"cf-label",21),e.qZA(),e.TgZ(9,"td",22),e.YNc(10,_,2,0,"a",23),e.qZA()()),2&i){const t=o.$implicit,n=e.oxw(2);e.Q6J("ngClass",e.VKq(8,b,"ERROR"===t.status)),e.xp6(2),e.Oqu(t.ticketNumber),e.xp6(2),e.hij("",e.lcZ(5,6,t.totalCharge)," \u0111"),e.xp6(3),e.Q6J("ngIf","SUCCESS"===t.status),e.xp6(1),e.Q6J("ngIf","ERROR"===t.status),e.xp6(2),e.Q6J("ngIf","FARE"===t.ticketType&&n.canOpenTicketNumber)}}function D(i,o){if(1&i&&(e.TgZ(0,"div",31)(1,"div",32),e._uU(2,"T\u1ed5ng chi ph\xed"),e.qZA(),e.TgZ(3,"div",33),e._uU(4),e.ALo(5,"number"),e.qZA()()),2&i){const t=e.oxw(2);e.xp6(4),e.hij(" ",e.lcZ(5,1,t.totalCharge)," \u0111")}}function y(i,o){if(1&i&&(e.TgZ(0,"div",34)(1,"div",35)(2,"div",36),e._uU(3,"S\u1ed1 v\xe9"),e.qZA(),e.TgZ(4,"div",37),e._uU(5),e.qZA()(),e.TgZ(6,"div",35)(7,"div",36),e._uU(8,"Chi ph\xed"),e.qZA(),e.TgZ(9,"div",37),e._uU(10),e.ALo(11,"number"),e.qZA()(),e.TgZ(12,"div",35)(13,"div",36),e._uU(14,"Tr\u1ea1ng th\xe1i"),e.qZA(),e.TgZ(15,"div",37),e._uU(16),e.qZA()()()),2&i){const t=o.$implicit;e.xp6(5),e.Oqu(t.ticketNumber),e.xp6(5),e.hij("",e.lcZ(11,3,t.totalCharge)," \u0111"),e.xp6(6),e.Oqu(t.statusDisplay||"- -")}}function U(i,o){1&i&&(e.TgZ(0,"div",38)(1,"div",39),e._uU(2,"Void s\u1ed1 v\xe9 kh\xf4ng th\xe0nh c\xf4ng."),e.qZA(),e.TgZ(3,"div",40),e._uU(4,"Vui l\xf2ng th\u1eed l\u1ea1i ho\u1eb7c li\xean h\u1ec7 booker \u0111\u1ec3 \u0111\u01b0\u1ee3c h\u1ed7 tr\u1ee3."),e.qZA()())}const q=function(){return{num:25}},w=function(){return{num:50}},S=function(){return{num:75}},I=function(){return{num:100}},N=function(i,o,t,n){return[i,o,t,n]},B=function(){return[]};function F(i,o){if(1&i&&(e.TgZ(0,"div",2)(1,"div",3),e._UZ(2,"cf-icon",4),e.TgZ(3,"div",5),e._uU(4),e.qZA()(),e.TgZ(5,"div",6),e._uU(6,"C\xe1c s\u1ed1 v\xe9 t\u01b0\u01a1ng \u1ee9ng v\u1edbi m\xe3 \u0111\u1eb7t ch\u1ed7 \u0111\u01b0\u1ee3c li\u1ec7t k\xea b\xean d\u01b0\u1edbi:"),e.qZA()(),e.TgZ(7,"div",7)(8,"cf-table",8,9)(10,"thead",10)(11,"th",11),e._uU(12,"S\u1ed1 v\xe9"),e.qZA(),e.TgZ(13,"th",11),e._uU(14,"Chi ph\xed"),e.qZA(),e.TgZ(15,"th",11),e._uU(16,"Tr\u1ea1ng th\xe1i"),e.qZA(),e._UZ(17,"th",12),e.qZA(),e.TgZ(18,"tbody"),e.YNc(19,E,11,10,"ng-template",13),e.qZA()()(),e.YNc(20,D,6,3,"div",14),e.TgZ(21,"div",15),e.YNc(22,y,17,5,"div",16),e.qZA(),e.YNc(23,U,5,0,"div",17)),2&i){const t=e.MAs(9),n=e.oxw();e.xp6(4),e.Oqu(n.bookingCode),e.xp6(4),e.Q6J("fnSort",n.sortChange)("fnSearch",n.searchChange)("pageSizeList",e.l5B(14,N,e.DdM(10,q),e.DdM(11,w),e.DdM(12,S),e.DdM(13,I)))("listData",n.listTicketNumber||e.DdM(19,B))("pageSize",n.pageSize),e.xp6(11),e.Q6J("ngForOf",t.partOfdata),e.xp6(1),e.Q6J("ngIf",n.totalCharge),e.xp6(2),e.Q6J("ngForOf",n.listTicketNumber),e.xp6(1),e.Q6J("ngIf",!n.isSuccessFull)}}let O=(()=>{class i{constructor(t,n){this._permissonService=n,this.isLoading=!1,this.isSuccessFull=!0,this.listTicketNumber=[],this.actionChange=new e.vpe,this.pageSize=25,this.canOpenTicketNumber=this._permissonService.hasPermission(h.or.CanOpenFlightTicketNumber),this.searchChange=(l,s)=>s,this.sortChange=(l,s)=>s,t.registerIcons([c.xbi])}onReview(t){this.onActionChange({action:"review",ticketNumber:t})}onVoidBooking(){this.onActionChange({action:"void",ticketNumber:""})}onActionChange(t){this.actionChange.emit(t)}}return i.\u0275fac=function(t){return new(t||i)(e.Y36(c.KNP),e.Y36(h.$A))},i.\u0275cmp=e.Xpm({type:i,selectors:[["ticket-number"]],inputs:{isLoading:"isLoading",totalCharge:"totalCharge",isSuccessFull:"isSuccessFull",bookingCode:"bookingCode",listTicketNumber:"listTicketNumber"},outputs:{actionChange:"actionChange"},standalone:!0,features:[e.jDz],decls:3,vars:2,consts:[[4,"ngIf","ngIfElse"],["contentTemplate",""],[1,"px-4","py-5","md:bg-neutral-white"],[1,"flex","items-center","gap-x-2"],["icon","coupon_slash","size","small"],[1,"text-heading-sm"],[1,"text-body-sm","pl-6"],[1,"max-h-[400px]","overflow-auto","md:hidden"],["mode","template",3,"fnSort","fnSearch","pageSizeList","listData","pageSize"],["managerTable",""],["cf-thead",""],["cf-th",""],[1,"flex","justify-end","text-right","text-espressive-semibold-sm","p-3"],["ngFor","",3,"ngForOf"],["class","p-3 border-b border-neutral-gray-1 flex justify-end items-center gap-x-4 md:hidden",4,"ngIf"],[1,"hidden","p-4","md:block"],["class","p-3 flex flex-col gap-y-2 bg-neutral-white rounded-lg",4,"ngFor","ngForOf"],["class","bg-[#ffeceb] rounded py-3 px-4",4,"ngIf"],[1,"border-b","border-neutral-gray-1",3,"ngClass"],["cf-td","",1,"text-left","py-2","px-3","text-body-sm"],["color","green","type","inverted",4,"ngIf"],["color","red","type","inverted",4,"ngIf"],["cf-td","",1,"text-right","py-2","px-3"],["class","text-espressive-sm text-secondary-3-4 cursor-pointer",3,"click",4,"ngIf"],["color","green","type","inverted"],["width","16","height","16","viewBox","0 0 16 16","fill","none","xmlns","http://www.w3.org/2000/svg",1,"mr-1"],["d","M7.9987 1.33337C6.68016 1.33337 5.39123 1.72437 4.2949 2.45691C3.19857 3.18945 2.34409 4.23064 1.8395 5.44882C1.33492 6.66699 1.2029 8.00744 1.46013 9.30064C1.71737 10.5939 2.35231 11.7817 3.28466 12.7141C4.21701 13.6464 5.40489 14.2814 6.6981 14.5386C7.99131 14.7958 9.33175 14.6638 10.5499 14.1592C11.7681 13.6547 12.8093 12.8002 13.5418 11.7038C14.2744 10.6075 14.6654 9.31858 14.6654 8.00004C14.6602 6.23351 13.9562 4.54079 12.7071 3.29166C11.4579 2.04253 9.76523 1.3385 7.9987 1.33337ZM6.88759 11.0078L4.27259 8.39282C4.05566 8.17589 4.05566 7.82419 4.27259 7.60726C4.48952 7.39034 4.84122 7.39034 5.05815 7.60726L6.88759 9.43671L10.9393 5.38504C11.1562 5.16812 11.5079 5.16812 11.7248 5.38504C11.9417 5.60197 11.9417 5.95367 11.7248 6.1706L6.88759 11.0078Z","fill","#07A35D"],["color","red","type","inverted"],["cx","8","cy","8","r","7","fill","#E03C31"],["fill-rule","evenodd","clip-rule","evenodd","d","M10.4612 6.45972C10.715 6.20588 10.715 5.79432 10.4612 5.54048C10.2073 5.28664 9.79578 5.28664 9.54194 5.54048L8.00156 7.08086L6.46118 5.54048C6.20734 5.28664 5.79578 5.28664 5.54194 5.54048C5.2881 5.79432 5.2881 6.20588 5.54194 6.45972L7.08232 8.0001L5.54194 9.54048C5.2881 9.79432 5.2881 10.2059 5.54194 10.4597C5.79578 10.7136 6.20734 10.7136 6.46118 10.4597L8.00156 8.91934L9.54194 10.4597C9.79578 10.7136 10.2073 10.7136 10.4612 10.4597C10.715 10.2059 10.715 9.79432 10.4612 9.54048L8.9208 8.0001L10.4612 6.45972Z","fill","white"],[1,"text-espressive-sm","text-secondary-3-4","cursor-pointer",3,"click"],[1,"p-3","border-b","border-neutral-gray-1","flex","justify-end","items-center","gap-x-4","md:hidden"],[1,"text-espressive-sm","text-neutral-gray-4"],[1,"text-heading-md","ng-star-inserted"],[1,"p-3","flex","flex-col","gap-y-2","bg-neutral-white","rounded-lg"],[1,"flex","items-center","justify-between"],[1,"text-body-sm","text-neutral-gray-4"],[1,"text-espressive-md-long","text-neutral-gray-6"],[1,"bg-[#ffeceb]","rounded","py-3","px-4"],[1,"text-espressive-md"],[1,"text-body-md"]],template:function(t,n){if(1&t&&(e.YNc(0,p,5,0,"div",0),e.YNc(1,F,24,20,"ng-template",null,1,e.W1O)),2&t){const l=e.MAs(2);e.Q6J("ngIf",n.isLoading)("ngIfElse",l)}},dependencies:[a.ez,a.mk,a.sg,a.O5,a.JJ,g.rC,g.E_,g.zs,g.qS,r.N8,f.IA,c.AxE,c.Sm8,Z.b],encapsulation:2}),i})();var k=u(97579);function L(i,o){if(1&i){const t=e.EpF();e.TgZ(0,"div",11)(1,"button",12),e.NdJ("click",function(){e.CHM(t);const l=e.oxw();return e.KtG(l.onOpenBookingCode())}),e._uU(2," M\u1edf booking "),e.qZA()()}}function j(i,o){if(1&i&&(e.ynx(0),e._uU(1),e._UZ(2,"br"),e.BQk()),2&i){const t=o.$implicit;e.xp6(1),e.qoO([" ",t.number," ",t.airline," ",t.flightNumber," ",t.classCode," ",t.date," ",t.brdoff," ",t.time," ",t.status," ",t.fareBasis," ",t.statusCode," ",t.baggageAllowance," "])}}let J=(()=>{class i{constructor(t,n){this.ref=t,this.isAction=!1,this.airline="VN",n.registerIcons([c.UNF]),this.ticketDetail=t.data.ticketDetail,this.isAction=t.data.isAction,this.airline=t.data.airline||"VN"}onOpenBookingCode(){window.open(this._getCurrentUrl())}close(){this.ref.close(!1)}_getCurrentUrl(){return`${window.location.origin}/admin/booking-detail/${this.airline}/${this.ticketDetail.ticketInfo.bookingCode}`}}return i.\u0275fac=function(t){return new(t||i)(e.Y36(k.gb),e.Y36(c.KNP))},i.\u0275cmp=e.Xpm({type:i,selectors:[["ticket-number-detail"]],hostAttrs:[1,"h-full"],standalone:!0,features:[e.jDz],decls:52,vars:18,consts:[[1,"w-[650px]","h-full","overflow-hidden","md:hidden"],[1,"w-full","max-h-[90vh]","h-full","flex","flex-col","rounded-lg","bg-neutral-white"],[1,"flex","justify-between","items-center","px-6","py-[13px]","border-b","border-b-neutral-gray-1"],[1,"text-heading-sm","text-neutral-gray-6"],["size","small","icon","close",1,"text-neutral-gray-4","cursor-pointer",3,"click"],[1,"flex-auto","w-full","h-full","overflow-auto","py-4","px-6"],["class","flex justify-end mb-4",4,"ngIf"],[1,"p-4","bg-neutral-gray-1","rounded-lg","text-body-md"],[4,"ngFor","ngForOf"],[1,"p-6","flex","gap-x-4"],["cf-button","","size","medium","type","secondary",1,"w-full","justify-center",3,"click"],[1,"flex","justify-end","mb-4"],["cf-button","","size","medium","type","secondary",3,"click"]],template:function(t,n){1&t&&(e.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3),e._uU(4,"Th\xf4ng tin s\u1ed1 v\xe9"),e.qZA(),e.TgZ(5,"div")(6,"cf-icon",4),e.NdJ("click",function(){return n.close()}),e.qZA()()(),e.TgZ(7,"div",5),e.YNc(8,L,3,0,"div",6),e.TgZ(9,"div",7),e._uU(10," VIRTUAL COUPON RECORD "),e._UZ(11,"br"),e._uU(12),e._UZ(13,"br"),e._uU(14),e._UZ(15,"br"),e._uU(16," CPN A/L FLT CLS DATE BRDOFF TIME ST F/B STAT BAGS"),e._UZ(17,"br"),e.YNc(18,j,3,11,"ng-container",8),e._UZ(19,"br"),e._uU(20),e._UZ(21,"br"),e._uU(22),e._UZ(23,"br")(24,"br"),e._uU(25),e._UZ(26,"br")(27,"br"),e._uU(28," FCMI-0 "),e._UZ(29,"br"),e._uU(30," FORM OF PAYMENT "),e._UZ(31,"br"),e._uU(32),e._UZ(33,"br"),e._uU(34),e._UZ(35,"br"),e._uU(36," ENDORSEMENTS/RESTRICTIONS- "),e._UZ(37,"br"),e._uU(38),e._UZ(39,"br"),e._uU(40," IT- "),e._UZ(41,"br"),e._uU(42," REMARKS- "),e._UZ(43,"br")(44,"br"),e._uU(45," ENTER VCR*CALL TO DISPLAY COUPON DETAILS "),e._UZ(46,"br"),e._uU(47," ENTER VCR*FC TO DISPLAY FARE CALC WITH TAX SUMMARY "),e._UZ(48,"br"),e.qZA()(),e.TgZ(49,"div",9)(50,"button",10),e.NdJ("click",function(){return n.close()}),e._uU(51," \u0110\xf3ng "),e.qZA()()()()),2&t&&(e.xp6(8),e.Q6J("ngIf",n.isAction),e.xp6(4),e.AsE(" ",n.ticketDetail.ticketNumber," NAME-",n.ticketDetail.passengerName," "),e.xp6(2),e.HOy(" TTL NBR OF CPNS- ",n.ticketDetail.ticketInfo.numCoupons," DATE OF ISSUE-",n.ticketDetail.ticketInfo.issueDate," PNR-",n.ticketDetail.ticketInfo.bookingCode," ",n.ticketDetail.ticketInfo.createDate," "),e.xp6(4),e.Q6J("ngForOf",n.ticketDetail.segments),e.xp6(2),e.AsE(" FARE ",n.ticketDetail.pricingInfo.baseFare," ",n.ticketDetail.pricingInfo.taxes," "),e.xp6(2),e.hij(" TOTAL ",n.ticketDetail.pricingInfo.totalFare," "),e.xp6(3),e.hij(" FARE CALC ",n.ticketDetail.fareCalc," "),e.xp6(7),e.AsE(" FOP-AGENCY CREDIT ",n.ticketDetail.paymentCardNumber," APPROVAL CODE-",n.ticketDetail.authorizationCode," "),e.xp6(2),e.lnq(" DATE OF ISSUE-",n.ticketDetail.ticketData.issueDate," ISSUED AT-",n.ticketDetail.ticketData.printStation," ",n.ticketDetail.ticketData.issuingAgent||""," "),e.xp6(4),e.hij(" ",n.ticketDetail.ticketData.endorsements," "))},dependencies:[a.ez,a.sg,a.O5,r.N8,r.Xq,c.AxE,c.Sm8],encapsulation:2}),i})();var Y=u(74713),m=u(24006),C=u(44143),T=u(37094);function P(i,o){1&i&&(e.TgZ(0,"div",2),e._UZ(1,"ticket-item-skeleton")(2,"ticket-item-skeleton")(3,"ticket-item-skeleton")(4,"ticket-item-skeleton"),e.qZA())}function M(i,o){1&i&&e._UZ(0,"cf-icon",77)}function Q(i,o){1&i&&e._UZ(0,"cf-icon",78)}function R(i,o){if(1&i&&(e.TgZ(0,"div",79),e._UZ(1,"span"),e.TgZ(2,"span",80),e._uU(3),e.ALo(4,"date"),e.qZA()()),2&i){const t=o.$implicit;e.xp6(3),e.lnq("",t.startPoint," - ",t.endPoint," (",e.xi3(4,3,t.startTime,"HH:mm - dd/MM/yyyy"),")")}}function z(i,o){if(1&i){const t=e.EpF();e.TgZ(0,"div",81),e.NdJ("click",function(){e.CHM(t);const l=e.oxw(2);return e.KtG(l.gotoBookingDetail())}),e._uU(1," M\u1edf booking "),e.qZA()}}function H(i,o){1&i&&e._UZ(0,"cf-input-hint",86)}function G(i,o){if(1&i){const t=e.EpF();e.TgZ(0,"div",82)(1,"div",30),e._UZ(2,"cf-icon",31),e._uU(3," Th\xf4ng tin \u0111\u1ea1i l\xfd "),e.qZA(),e.TgZ(4,"div",83)(5,"cf-select",84),e.NdJ("selectedChange",function(l){e.CHM(t);const s=e.oxw(2);return e.KtG(s.onSelectedChange(l))}),e.YNc(6,H,1,0,"cf-input-hint",85),e.qZA()()()}if(2&i){const t=e.oxw(2);e.xp6(5),e.Q6J("status","default")("data",t.optionAgent)("allowSearch",!0)("formControl",t.agentSelectControl)("status",t.agentSelectControl.invalid&&(t.agentSelectControl.touched||t.agentSelectControl.dirty||t.isSubmitted)?"error":"default"),e.xp6(1),e.Q6J("ngIf",t.agentSelectControl.invalid&&(t.agentSelectControl.touched||t.agentSelectControl.dirty||t.isSubmitted))}}function $(i,o){if(1&i&&(e.TgZ(0,"tr")(1,"td",87),e._uU(2),e.qZA(),e.TgZ(3,"td",88),e._uU(4),e.qZA(),e.TgZ(5,"td",89),e._uU(6),e.ALo(7,"number"),e.qZA(),e.TgZ(8,"td",89),e._uU(9),e.ALo(10,"number"),e.qZA(),e.TgZ(11,"td",90),e._uU(12),e.ALo(13,"number"),e.qZA()()),2&i){const t=o.$implicit;e.xp6(2),e.Oqu(t.name),e.xp6(2),e.Oqu(t.type),e.xp6(2),e.Oqu(e.lcZ(7,5,t.base)),e.xp6(3),e.Oqu(e.lcZ(10,7,t.tax)),e.xp6(3),e.Oqu(e.lcZ(13,9,t.total))}}function K(i,o){1&i&&(e.ynx(0),e.O4$(),e.TgZ(1,"svg",91),e._UZ(2,"path",92),e.qZA(),e.kcU(),e.TgZ(3,"div",93),e._uU(4,"\u0110\xe3 gi\u1eef ch\u1ed7"),e.qZA(),e.BQk())}function V(i,o){1&i&&(e.ynx(0),e.O4$(),e.TgZ(1,"svg",94),e._UZ(2,"path",92),e.qZA(),e.kcU(),e.TgZ(3,"div",93),e._uU(4,"\u0110\xe3 xu\u1ea5t v\xe9"),e.qZA(),e.BQk())}function X(i,o){1&i&&e._UZ(0,"cf-icon",77)}function W(i,o){1&i&&e._UZ(0,"cf-icon",78)}function ee(i,o){if(1&i&&(e.TgZ(0,"div",95)(1,"div",96)(2,"div",60),e._uU(3),e.qZA(),e.TgZ(4,"div",53),e._uU(5),e.ALo(6,"date"),e.qZA()(),e._UZ(7,"cf-icon",78),e.TgZ(8,"div",96)(9,"div",60),e._uU(10),e.qZA(),e.TgZ(11,"div",53),e._uU(12),e.ALo(13,"date"),e.qZA()()()),2&i){const t=e.oxw(2);e.xp6(3),e.AsE("",t.bookingDetail.journeys[0].startPoint,"-",t.bookingDetail.journeys[0].endPoint,""),e.xp6(2),e.Oqu(e.xi3(6,6,t.bookingDetail.journeys[0].startTime,"HH:mm - dd/MM/yyyy")),e.xp6(5),e.AsE("",t.bookingDetail.journeys[1].startPoint,"-",t.bookingDetail.journeys[1].endPoint,""),e.xp6(2),e.Oqu(e.xi3(13,9,t.bookingDetail.journeys[1].startTime,"HH:mm - dd/MM/yyyy"))}}function te(i,o){1&i&&(e.TgZ(0,"div",67),e._uU(1," Th\xf4ng tin li\xean h\u1ec7 "),e.qZA())}function ie(i,o){1&i&&e._UZ(0,"cf-input-hint",86)}function ne(i,o){if(1&i){const t=e.EpF();e.TgZ(0,"div",97)(1,"cf-select",84),e.NdJ("selectedChange",function(l){e.CHM(t);const s=e.oxw(2);return e.KtG(s.onSelectedChange(l))}),e.YNc(2,ie,1,0,"cf-input-hint",85),e.qZA()()}if(2&i){const t=e.oxw(2);e.xp6(1),e.Q6J("status","default")("data",t.optionAgent)("allowSearch",!1)("formControl",t.agentSelectControl)("status",t.agentSelectControl.invalid&&(t.agentSelectControl.touched||t.agentSelectControl.dirty||t.isSubmitted)?"error":"default"),e.xp6(1),e.Q6J("ngIf",t.agentSelectControl.invalid&&(t.agentSelectControl.touched||t.agentSelectControl.dirty||t.isSubmitted))}}function oe(i,o){if(1&i&&(e.TgZ(0,"div",98)(1,"div",99)(2,"div",100),e._uU(3,"H\xe0nh kh\xe1ch"),e.qZA(),e.TgZ(4,"div",93),e._uU(5),e.qZA()(),e.TgZ(6,"div",99)(7,"div",100),e._uU(8,"Lo\u1ea1i"),e.qZA(),e.TgZ(9,"div",93),e._uU(10),e.qZA()(),e.TgZ(11,"div",99)(12,"div",100),e._uU(13,"Gi\xe1 v\xe9"),e.qZA(),e.TgZ(14,"div",93),e._uU(15),e.ALo(16,"number"),e.qZA()(),e.TgZ(17,"div",99)(18,"div",100),e._uU(19,"Thu\u1ebf ph\xed"),e.qZA(),e.TgZ(20,"div",93),e._uU(21),e.ALo(22,"number"),e.qZA()(),e.TgZ(23,"div",99)(24,"div",100),e._uU(25,"T\u1ed5ng chi ph\xed"),e.qZA(),e.TgZ(26,"div",93),e._uU(27),e.ALo(28,"number"),e.qZA()()()),2&i){const t=o.$implicit;e.xp6(5),e.Oqu(t.name),e.xp6(5),e.Oqu(t.type),e.xp6(5),e.Oqu(e.lcZ(16,5,t.base)),e.xp6(6),e.Oqu(e.lcZ(22,7,t.tax)),e.xp6(6),e.Oqu(e.lcZ(28,9,t.total))}}function le(i,o){if(1&i&&(e.TgZ(0,"div",101)(1,"div",102)(2,"div",103),e._uU(3,"T\u1ed5ng gi\xe1 g\u1ed1c"),e.qZA(),e.TgZ(4,"div",104),e._uU(5),e.ALo(6,"number"),e.qZA()(),e.TgZ(7,"div",102)(8,"div",103),e._uU(9,"D\u1ecbch v\u1ee5 c\u1ed9ng th\xeam"),e.qZA(),e.TgZ(10,"div",104),e._uU(11),e.ALo(12,"number"),e.qZA()(),e.TgZ(13,"div",102)(14,"div",103),e._uU(15,"Ph\xed d\u1ecbch v\u1ee5"),e.qZA(),e.TgZ(16,"div",104),e._uU(17),e.ALo(18,"number"),e.qZA()()()),2&i){const t=e.oxw(2);e.xp6(5),e.hij("",e.lcZ(6,3,t.priceDetail.totalBasePrice),"\u0111"),e.xp6(6),e.hij("",e.lcZ(12,5,t.priceDetail.totalAddonService),"\u0111"),e.xp6(6),e.hij("",e.lcZ(18,7,t.priceDetail.totalServiceFee),"\u0111")}}function ce(i,o){if(1&i){const t=e.EpF();e.TgZ(0,"div",3),e._UZ(1,"div",4),e.TgZ(2,"div",5),e._uU(3,"Chi ti\u1ebft \u0111\u1eb7t ch\u1ed7"),e.qZA()(),e.TgZ(4,"div",6)(5,"div",7)(6,"div",8)(7,"div"),e._UZ(8,"img",9),e.qZA(),e.TgZ(9,"div",10)(10,"span",11),e._uU(11),e.qZA(),e.TgZ(12,"span",12),e._uU(13),e.qZA()(),e.TgZ(14,"div",13),e._uU(15),e.qZA()(),e._UZ(16,"div",14),e.TgZ(17,"div",15)(18,"div",16)(19,"span"),e._uU(20),e.qZA(),e.YNc(21,M,1,0,"cf-icon",17),e.YNc(22,Q,1,0,"cf-icon",18),e.TgZ(23,"span"),e._uU(24),e.qZA()(),e.YNc(25,R,5,6,"div",19),e.qZA(),e._UZ(26,"div",14),e.TgZ(27,"div",20)(28,"div",21),e._uU(29,"M\xe3 \u0111\u1eb7t ch\u1ed7"),e.qZA(),e.TgZ(30,"div",22),e._uU(31),e.qZA()(),e._UZ(32,"div",14),e.TgZ(33,"div",20)(34,"div",21),e._uU(35,"Tr\u1ea1ng th\xe1i"),e.qZA(),e.TgZ(36,"div",23),e._UZ(37,"cf-icon",24),e.TgZ(38,"div",25)(39,"label",26),e._uU(40),e.qZA()()()()(),e.YNc(41,z,2,0,"div",27),e.qZA(),e.YNc(42,G,7,6,"div",28),e.TgZ(43,"div",29)(44,"div",30),e._UZ(45,"cf-icon",31),e._uU(46," Chi ti\u1ebft chi ph\xed "),e.qZA(),e.TgZ(47,"div",32)(48,"div")(49,"table",33)(50,"thead")(51,"tr",34)(52,"th",35),e._uU(53,"H\xe0nh kh\xe1ch"),e.qZA(),e.TgZ(54,"th",36),e._uU(55,"Lo\u1ea1i kh\xe1ch"),e.qZA(),e.TgZ(56,"th",37),e._uU(57,"Gi\xe1 v\xe9"),e.qZA(),e.TgZ(58,"th",37),e._uU(59,"Thu\u1ebf ph\xed"),e.qZA(),e.TgZ(60,"th",38),e._uU(61,"T\u1ed5ng gi\xe1"),e.qZA()()(),e.TgZ(62,"tbody"),e.YNc(63,$,14,11,"tr",39),e.qZA()(),e._UZ(64,"hr",40),e.qZA(),e.TgZ(65,"div",41)(66,"div",42)(67,"div",43),e._uU(68,"T\u1ed5ng gi\xe1 g\u1ed1c"),e.qZA(),e.TgZ(69,"div",44),e._uU(70),e.ALo(71,"number"),e.qZA()(),e.TgZ(72,"div",42)(73,"div",43),e._uU(74,"D\u1ecbch v\u1ee5 c\u1ed9ng th\xeam"),e.qZA(),e.TgZ(75,"div",44),e._uU(76),e.ALo(77,"number"),e.qZA()(),e.TgZ(78,"div",42)(79,"div",43),e._uU(80,"Ph\xed d\u1ecbch v\u1ee5"),e.qZA(),e.TgZ(81,"div",44),e._uU(82),e.ALo(83,"number"),e.qZA()(),e.TgZ(84,"div",42)(85,"div",43),e._uU(86,"T\u1ed5ng chi ph\xed"),e.qZA(),e.TgZ(87,"div",45),e._uU(88),e.ALo(89,"number"),e.qZA()()()(),e.TgZ(90,"div",46)(91,"button",47),e.NdJ("click",function(l){e.CHM(t);const s=e.oxw();return e.KtG(s.onIssue(l))}),e._uU(92," Xu\u1ea5t v\xe9 "),e.qZA()()(),e.TgZ(93,"div",48)(94,"div",49),e._uU(95," Chi ti\u1ebft \u0111\u1eb7t ch\u1ed7 "),e.qZA(),e.TgZ(96,"div",50)(97,"div",51)(98,"div",52)(99,"div",53),e._uU(100,"M\xe3 \u0111\u1eb7t ch\u1ed7"),e.qZA(),e.TgZ(101,"div",54)(102,"div",55),e._uU(103),e.qZA(),e._UZ(104,"cf-icon",56),e.qZA()(),e.TgZ(105,"div",54),e.YNc(106,K,5,0,"ng-container",57),e.YNc(107,V,5,0,"ng-container",57),e.qZA()(),e.TgZ(108,"div",58)(109,"div",54),e._UZ(110,"img",59),e.TgZ(111,"div",52)(112,"div",60),e._uU(113),e.qZA(),e.TgZ(114,"div",53),e._uU(115),e.qZA()()(),e.TgZ(116,"div",61)(117,"div",62),e._uU(118),e.qZA(),e.YNc(119,X,1,0,"cf-icon",17),e.YNc(120,W,1,0,"cf-icon",18),e.TgZ(121,"div",62),e._uU(122),e.qZA()()(),e.YNc(123,ee,14,12,"div",63),e.TgZ(124,"div",64),e.NdJ("click",function(){e.CHM(t);const l=e.oxw();return e.KtG(l.gotoBookingDetail())}),e._uU(125,"M\u1edf booking"),e.qZA()(),e.YNc(126,te,2,0,"div",65),e.YNc(127,ne,3,6,"div",66),e.TgZ(128,"div",67),e._uU(129," Chi ti\u1ebft chi ph\xed "),e.qZA(),e.YNc(130,oe,29,11,"div",68),e.TgZ(131,"div",69),e.NdJ("click",function(){e.CHM(t);const l=e.MAs(144),s=e.oxw();return e.KtG(s.toggle(l))}),e.TgZ(132,"div",70)(133,"div",71)(134,"div",72),e._uU(135,"T\u1ed5ng chi ph\xed:"),e.qZA(),e.TgZ(136,"div",73),e._uU(137),e.ALo(138,"number"),e.qZA(),e._UZ(139,"cf-icon",74),e.qZA()(),e.TgZ(140,"div")(141,"button",75),e.NdJ("click",function(l){e.CHM(t);const s=e.oxw();return e.KtG(s.onIssue(l))}),e._uU(142,"Xu\u1ea5t v\xe9"),e.qZA()()(),e.YNc(143,le,19,9,"ng-template",null,76,e.W1O),e.qZA()}if(2&i){const t=e.oxw();e.xp6(8),e.Q6J("src","assets/airline-logo/"+t.bookingDetail.airlineSystem+".png",e.LSH),e.xp6(3),e.hij("",t.bookingDetail.airlineSystem," -\xa0"),e.xp6(2),e.Oqu(t.bookingDetail.airlineName),e.xp6(2),e.hij(" H\u1ec7 th\u1ed1ng: ",t.bookingDetail.airlineSystem," "),e.xp6(5),e.Oqu(t.bookingDetail.startPoint),e.xp6(1),e.Q6J("ngIf",1===t.bookingDetail.journeys.length),e.xp6(1),e.Q6J("ngIf",t.bookingDetail.journeys.length>1),e.xp6(2),e.Oqu(t.bookingDetail.endPoint),e.xp6(1),e.Q6J("ngForOf",t.bookingDetail.journeys),e.xp6(6),e.Oqu(t.bookingDetail.bookingCode),e.xp6(9),e.Oqu(t.bookingDetail.statusText),e.xp6(1),e.Q6J("ngIf",t.bookingDetail.internal),e.xp6(1),e.Q6J("ngIf",!t.bookingDetail.internal),e.xp6(21),e.Q6J("ngForOf",null==t.priceDetail?null:t.priceDetail.passengers),e.xp6(7),e.hij("",e.lcZ(71,37,t.priceDetail.totalBasePrice)," \u0111 "),e.xp6(6),e.hij("",e.lcZ(77,39,t.priceDetail.totalAddonService)," \u0111 "),e.xp6(6),e.hij("",e.lcZ(83,41,t.priceDetail.totalServiceFee)," \u0111 "),e.xp6(6),e.hij("",e.lcZ(89,43,t.priceDetail.totalPrice)," \u0111 "),e.xp6(3),e.Q6J("disabled",t.isLoading),e.xp6(12),e.Oqu(t.bookingDetail.bookingCode),e.xp6(3),e.Q6J("ngIf","BOOKED"===t.bookingDetail.status),e.xp6(1),e.Q6J("ngIf","ISSUED"===t.bookingDetail.status),e.xp6(3),e.Q6J("src","assets/airline-logo/"+t.bookingDetail.airlineSystem+".png",e.LSH),e.xp6(3),e.Oqu(t.bookingDetail.flightNumber),e.xp6(2),e.Oqu(t.bookingDetail.airlineName),e.xp6(3),e.Oqu(t.bookingDetail.startPoint),e.xp6(1),e.Q6J("ngIf",1===t.bookingDetail.journeys.length),e.xp6(1),e.Q6J("ngIf",t.bookingDetail.journeys.length>1),e.xp6(2),e.Oqu(t.bookingDetail.endPoint),e.xp6(1),e.Q6J("ngIf",2===t.bookingDetail.journeys.length),e.xp6(3),e.Q6J("ngIf",!t.bookingDetail.internal),e.xp6(1),e.Q6J("ngIf",!t.bookingDetail.internal),e.xp6(3),e.Q6J("ngForOf",null==t.priceDetail?null:t.priceDetail.passengers),e.xp6(1),e.ekj("!z-1000",t.increaseZIndex),e.xp6(6),e.hij("",e.lcZ(138,45,t.priceDetail.totalPrice)," \u0111"),e.xp6(2),e.Q6J("icon",t.iconChevron)}}let ue=(()=>{class i{constructor(t,n,l){this._fb=n,this._bottomSheetService=l,this.isLoading=!1,this.optionAgent=[],this.issueBooking=new e.vpe,this.gotoBooking=new e.vpe,this.selectedAgent=new e.vpe,this.isSubmitted=!1,this.increaseZIndex=!1,this.iconChevron="chevron_up",this.isBottomSheetOpen=!1,t.registerIcons([c.llu,c.B2I,c.Ffn,c._tC,c.Ey$,c.fqi,c.n78]),this.agentSelectControl=this._fb.control("")}ngOnChanges(t){var n;this.agentSelectControl=null!==(n=this.bookingDetail)&&void 0!==n&&n.internal?this._fb.control(""):this._fb.control("",m.kI.required)}onIssue(t){t.stopPropagation(),this.isSubmitted=!0,this.agentSelectControl.valid&&this.issueBooking.emit()}gotoBookingDetail(){this.gotoBooking.emit()}onSelectedChange(t){this.selectedAgent.emit(t)}toggle(t){this.isBottomSheetOpen?this.closeBotomSheet():this.openBottomSheet(t)}openBottomSheet(t){this.bottomSheetRef=this._bottomSheetService.open(t,{headerTitle:"Gi\xe1 v\xe9",rightButtonIcon:"close",rightButtonIconClass:"text-neutral-gray-4"}),this.increaseZIndex=!0,this.iconChevron="chevron_down",this.isBottomSheetOpen=!0,this.bottomSheetRef.backdropClick().subscribe(()=>{this._bottomSheetService.dismiss(),this.increaseZIndex=!1,this.iconChevron="chevron_up",this.isBottomSheetOpen=!1}),this.bottomSheetRef.containerInstance._rightButtonClick.subscribe(()=>{this._bottomSheetService.dismiss(),this.increaseZIndex=!1,this.iconChevron="chevron_up",this.isBottomSheetOpen=!1})}closeBotomSheet(){this._bottomSheetService.dismiss(),this.increaseZIndex=!1,this.iconChevron="chevron_up",this.isBottomSheetOpen=!1}}return i.\u0275fac=function(t){return new(t||i)(e.Y36(c.KNP),e.Y36(m.qu),e.Y36(T.a2))},i.\u0275cmp=e.Xpm({type:i,selectors:[["issue-booking-detail"]],inputs:{bookingDetail:"bookingDetail",priceDetail:"priceDetail",isLoading:"isLoading",optionAgent:"optionAgent"},outputs:{issueBooking:"issueBooking",gotoBooking:"gotoBooking",selectedAgent:"selectedAgent"},standalone:!0,features:[e.TTD,e.jDz],decls:3,vars:2,consts:[["class","min-w-[750px] w-full h-full",4,"ngIf","ngIfElse"],["contentTemplate",""],[1,"min-w-[750px]","w-full","h-full"],[1,"flex","gap-x-[20px]","mb-4","md:hidden"],[1,"w-1","bg-primary-2-4"],[1,"text-heading-md","text-neutral-black"],[1,"bg-white","py-4","px-6","mb-2","shadow-cf-md","md:hidden"],[1,"flex","justify-between","items-center","gap-x-7","mb-4"],[1,"h-full","w-full","flex","flex-col","gap-y-1.5","justify-center","items-center"],[1,"w-[120px]","h-[60px]","object-contain",3,"src"],[1,"text-body-sm","flex","flex-nowrap"],[1,"text-espressive-sm","whitespace-nowrap"],[1,"whitespace-nowrap"],[1,"h-5","flex","items-center","px-2","bg-neutral-gray-1","rounded","text-espressive-sm","text-neutral-black"],[1,"w-[2px]","h-[108px]","border-l","border-dashed","border-neutral-gray-1"],[1,"h-full","w-[206px]","shrink-0","flex","flex-col","items-start","justify-center"],[1,"text-heading-sm","py-1","px-3","bg-neutral-gray-1","rounded","flex","gap-x-2","items-center","w-fit"],["icon","arrow_right","size","small",4,"ngIf"],["icon","switch","size","small",4,"ngIf"],["class","mt-3",4,"ngFor","ngForOf"],[1,"h-full","w-full","flex","flex-col","items-start","py-3","gap-[20px]"],[1,"text-body-md","text-neutral-black"],[1,"text-heading-lg"],[1,"text-espressive-md","text-neutral-black","flex","gap-2.5","items-center"],["icon","checkbox_checked","size","medium",1,"text-secondary-5-4"],[1,"flex","flex-col","items-center"],[1,"text-espressive-md","text-neutral-black","whitespace-nowrap"],["class","bg-secondary-3-1 py-1.5 rounded text-center text-espressive-md text-secondary-3-4 cursor-pointer",3,"click",4,"ngIf"],["class","bg-white rounded shadow-cf-md flex flex-col mb-2 md:hidden",4,"ngIf"],[1,"bg-white","rounded","shadow-cf-md","flex","flex-col","md:hidden"],[1,"text-heading-sm","text-neutral-black","p-6","flex","items-center","gap-x-2"],["icon","circle_information","size","small"],[1,"!pt-0"],[1,"table-auto","w-full"],[1,"border-b","border-neutral-gray-1"],[1,"text-left","text-espressive-sm","text-neutral-gray-4","py-3","pl-3"],[1,"text-left","text-espressive-sm","text-neutral-gray-4","py-3"],[1,"text-right","text-espressive-sm","text-neutral-gray-4","py-3"],[1,"text-right","text-espressive-sm","text-neutral-gray-4","py-3","pr-3"],[4,"ngFor","ngForOf"],[1,"text-neutral-gray-1","w-full","mb-4"],[1,"flex","flex-col","items-end","gap-[10px]","pr-3"],[1,"flex","justify-end","items-center","gap-8"],[1,"text-espressive-sm","text-neutral-gray-4"],[1,"min-w-[120px]","text-end","text-body-dm","text-neutral-black"],[1,"min-w-[120px]","text-end","text-heading-md","text-primary-1-4"],[1,"text-right","py-6","px-4","border-t","border-neutral-gray-1"],["cf-button","","size","medium",3,"disabled","click"],[1,"flex-col","w-screen","hidden","md:flex","p-4","pt-0","pb-16"],[1,"text-express-sm","mb-3"],[1,"flex","flex-col","p-3","rounded-lg","bg-neutral-white"],[1,"flex","justify-between"],[1,"flex","flex-col","gap-y-1"],[1,"text-espressive-xs","text-neutral-gray-4"],[1,"flex","items-center","gap-x-2"],[1,"text-heading-md","text-neutral-gray-6"],["icon","copy","size","small",1,"text-neutral-gray-4"],[4,"ngIf"],[1,"flex","items-center","justify-between","mt-3"],[1,"w-9","h-9","object-contain",3,"src"],[1,"text-heading-xs","text-neutral-gray-6"],[1,"flex","items-center","justify-end","gap-x-2","px-3","py-1","rounded","bg-neutral-gray-1"],[1,"text-heading-sm","text-neutral-black"],["class","flex justify-between items-center mt-3",4,"ngIf"],[1,"w-full","flex","justify-center","items-center","px-[15px]","py-[9px]","cursor-pointer","bg-secondary-3-1","rounded","text-heading-xs","text-secondary-3-4","mt-4",3,"click"],["class"," text-express-sm mb-3 mt-4",4,"ngIf"],["class","p-3 rounded-lg bg-neutral-white",4,"ngIf"],[1,"text-express-sm","mb-3","mt-4"],["class","flex flex-col rounded-lg bg-neutral-white p-3 gap-y-2 mb-4",4,"ngFor","ngForOf"],[1,"fixed","bottom-0","left-0","w-screen","bg-white","shadow-cf-large-top","p-3","flex","items-center","justify-between","z-[1]",3,"click"],[1,"flex","flex-col"],[1,"flex","items-center","gap-x-1"],[1,"text-express-xs","text-neutral-gray-4","mt-1"],[1,"text-heading-sm","text-neutral-gray-6"],["size","small",3,"icon"],["cf-button","",1,"w-24","justify-center",3,"click"],["totalPriceBts",""],["icon","arrow_right","size","small"],["icon","switch","size","small"],[1,"mt-3"],[1,"text-espressive-sm","text-neutral-black"],[1,"bg-secondary-3-1","py-1.5","rounded","text-center","text-espressive-md","text-secondary-3-4","cursor-pointer",3,"click"],[1,"bg-white","rounded","shadow-cf-md","flex","flex-col","mb-2","md:hidden"],[1,"px-6","pb-6"],["textField","name","valueField","id","placeholder","Ch\u1ecdn \u0111\u1ea1i l\xfd",1,"w-full","!max-w-full",3,"status","data","allowSearch","formControl","selectedChange"],["cfHint","","hint","Vui l\xf2ng ch\u1ecdn \u0111\u1ea1i l\xfd.",4,"ngIf"],["cfHint","","hint","Vui l\xf2ng ch\u1ecdn \u0111\u1ea1i l\xfd."],[1,"text-left","text-body-md","text-neutral-black","py-3","pl-3","uppercase"],[1,"text-left","text-body-md","text-neutral-black","py-3"],[1,"text-right","text-body-md","text-neutral-black","py-3"],[1,"text-right","text-body-md","text-neutral-black","py-3","pr-3"],["width","16","height","16","viewBox","0 0 16 16","fill","none","xmlns","http://www.w3.org/2000/svg",1,"text-secondary-7-4"],["d","M7.99968 1.33337C6.68114 1.33337 5.3922 1.72437 4.29588 2.45691C3.19955 3.18945 2.34506 4.23064 1.84048 5.44882C1.3359 6.66699 1.20387 8.00744 1.46111 9.30064C1.71834 10.5939 2.35328 11.7817 3.28563 12.7141C4.21798 13.6464 5.40587 14.2814 6.69908 14.5386C7.99228 14.7958 9.33273 14.6638 10.5509 14.1592C11.7691 13.6547 12.8103 12.8002 13.5428 11.7038C14.2754 10.6075 14.6663 9.31858 14.6663 8.00004C14.6612 6.23351 13.9572 4.54079 12.7081 3.29166C11.4589 2.04253 9.76621 1.3385 7.99968 1.33337ZM6.88857 11.0078L4.27357 8.39282C4.05664 8.17589 4.05664 7.82419 4.27357 7.60726C4.49049 7.39034 4.8422 7.39034 5.05912 7.60726L6.88857 9.43671L10.9402 5.38504C11.1572 5.16812 11.5089 5.16812 11.7258 5.38504C11.9427 5.60197 11.9427 5.95367 11.7258 6.1706L6.88857 11.0078Z","fill","currentColor"],[1,"text-espressive-md","text-neutral-gray-6"],["width","16","height","16","viewBox","0 0 16 16","fill","none","xmlns","http://www.w3.org/2000/svg",1,"text-secondary-5-4"],[1,"flex","justify-between","items-center","mt-3"],[1,"flex","flex-col","gap-y-1","items-center"],[1,"p-3","rounded-lg","bg-neutral-white"],[1,"flex","flex-col","rounded-lg","bg-neutral-white","p-3","gap-y-2","mb-4"],[1,"flex","items-center","gap-x-5"],[1,"text-body-sm","text-neutral-gray-4","w-[104px]"],[1,"w-full","flex","flex-col","py-2","px-4","gap-y-1.5","pb-[75px]"],[1,"flex","justify-between","w-full"],[1,"text-body-sm","text-neutral-gray-4"],[1,"text-body-md-short","text-neutral-gray-6"]],template:function(t,n){if(1&t&&(e.YNc(0,P,5,0,"div",0),e.YNc(1,ce,145,47,"ng-template",null,1,e.W1O)),2&t){const l=e.MAs(2);e.Q6J("ngIf",n.isLoading)("ngIfElse",l)}},dependencies:[a.ez,a.sg,a.O5,a.JJ,a.uU,C.j$,C.v2,f.IA,c.AxE,c.Sm8,r.N8,r.Xq,Y.q,m.u5,m.JJ,m.UX,m.oH],encapsulation:2}),i})(),ae=(()=>{class i{constructor(t,n,l,s){this.ref=t,this.bottomSheetData=n,this.bottomSheetRef=l,s.registerIcons([c.UNF]),t&&(this.priceChangeData=t.data.priceChangeData),n&&(this.priceChangeData=n.priceChangeData)}close(){this.ref&&this.ref.close(!1),this.bottomSheetData&&this.bottomSheetRef.dismiss(!1)}ok(){this.ref&&this.ref.close(!0),this.bottomSheetData&&this.bottomSheetRef.dismiss(!0)}}return i.\u0275fac=function(t){return new(t||i)(e.Y36(k.gb,8),e.Y36(T.Rr,8),e.Y36(T.Zu,8),e.Y36(c.KNP))},i.\u0275cmp=e.Xpm({type:i,selectors:[["price-ticket-change"]],standalone:!0,features:[e.jDz],decls:29,vars:10,consts:[[1,"w-[480px]","rounded-lg","bg-neutral-white","flex","flex-col","md:w-full","md:justify-between","md:h-full"],[1,"flex","justify-end","items-center","px-6","py-[13px]","border-b","border-b-neutral-gray-1","md:hidden"],["size","small","icon","close",1,"text-neutral-gray-4","cursor-pointer",3,"click"],[1,"px-6","py-2","flex","flex-col","gap-y-4","justify-center","md:p-4"],[1,"text-heading-sm","text-neutral-gray-6","md:hidden"],[1,"text-body-md","text-neutral-gray-5"],[1,"flex","flex-col","gap-y-4","border","border-neutral-gray-2","rounded-lg","p-3"],[1,"flex","justify-between"],[1,"flex","justify-end","text-primary-1-3"],[1,"flex","justify-between","border-t","border-neutral-gray-2","pt-2"],[1,"p-6","flex","gap-x-4","md:p-4"],["cf-button","","size","medium","type","secondary",1,"w-full","justify-center",3,"click"],["cf-button","","size","medium","color","primary-1",1,"w-full","justify-center",3,"click"]],template:function(t,n){1&t&&(e.TgZ(0,"div",0)(1,"div",1)(2,"cf-icon",2),e.NdJ("click",function(){return n.close()}),e.qZA()(),e.TgZ(3,"div",3)(4,"div",4),e._uU(5,"Chi ph\xed thay \u0111\u1ed5i"),e.qZA(),e.TgZ(6,"div",5),e._uU(7,"Chi ph\xed cho (c\xe1c) chuy\u1ebfn bay \u0111\u01b0\u1ee3c ch\u1ecdn \u0111\xe3 \u0111\u01b0\u1ee3c c\u1eadp nh\u1eadt. Vui l\xf2ng ki\u1ec3m tra chi ph\xed m\u1edbi tr\u01b0\u1edbc khi ti\u1ebfp t\u1ee5c"),e.qZA(),e.TgZ(8,"div",6)(9,"div",7)(10,"div"),e._uU(11,"T\u1ed5ng chi ph\xed c\u0169"),e.qZA(),e.TgZ(12,"div"),e._uU(13),e.ALo(14,"number"),e.qZA()(),e.TgZ(15,"div",8),e._uU(16),e.ALo(17,"number"),e.qZA(),e.TgZ(18,"div",9)(19,"div"),e._uU(20,"T\u1ed5ng chi ph\xed m\u1edbi"),e.qZA(),e.TgZ(21,"div"),e._uU(22),e.ALo(23,"number"),e.qZA()()()(),e.TgZ(24,"div",10)(25,"button",11),e.NdJ("click",function(){return n.close()}),e._uU(26," H\u1ee7y "),e.qZA(),e.TgZ(27,"button",12),e.NdJ("click",function(){return n.ok()}),e._uU(28," Xu\u1ea5t v\xe9 "),e.qZA()()()),2&t&&(e.xp6(13),e.hij("",e.lcZ(14,4,n.priceChangeData.oldPrice)," \u0111"),e.xp6(3),e.AsE("",n.priceChangeData.type,"",e.lcZ(17,6,n.priceChangeData.priceGap)," \u0111"),e.xp6(6),e.hij("",e.lcZ(23,8,n.priceChangeData.newPrice)," \u0111"))},dependencies:[a.ez,a.JJ,c.AxE,c.Sm8,r.N8,r.Xq],encapsulation:2}),i})()}}]);