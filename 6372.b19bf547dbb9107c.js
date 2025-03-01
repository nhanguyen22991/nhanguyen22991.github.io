"use strict";(self.webpackChunkcheapflightclient=self.webpackChunkcheapflightclient||[]).push([[6372],{36372:(E,v,o)=>{o.r(v),o.d(v,{BtcOrderLookupComponent:()=>Y});var p=o(36895),t=o(94650),i=o(24006),c=o(83700),u=o(72506),d=o(44143),x=o(47911),y=o(6158),g=o(88001),I=o(77579),O=o(71884),m=o(63900),L=o(44671),B=o(60515);let D=(()=>{class e{constructor(){this.container=(0,t.f3M)(i.gN,{optional:!0}),this.control=(0,t.f3M)(i.a5,{optional:!0}),this.refresh$=new I.x,this.valueChanges=this.refresh$.pipe((0,O.x)(),function k(){return(0,m.w)(L.y)}())}ngDoCheck(){var n,r;this.refresh$.next((null===(n=this.control)||void 0===n?void 0:n.valueChanges)||(null===(r=this.container)||void 0===r?void 0:r.valueChanges)||B.E)}}return e.\u0275fac=function(n){return new(n||e)},e.\u0275dir=t.lG2({type:e,selectors:[["","valueChanges",""]],outputs:{valueChanges:"valueChanges"},standalone:!0}),e})();var C=o(80529),T=o(50494),Z=o(54004),l=o(97582),h=o(87067);let A=(()=>{class e{}return(0,l.gn)([(0,h.C)()],e.prototype,"data",void 0),(0,l.gn)([(0,h.C)()],e.prototype,"errorCode",void 0),(0,l.gn)([(0,h.C)()],e.prototype,"objectError",void 0),(0,l.gn)([(0,h.C)()],e.prototype,"status",void 0),(0,l.gn)([(0,h.C)()],e.prototype,"success",void 0),(0,l.gn)([(0,h.C)()],e.prototype,"traceId",void 0),e})();var S=o(49557);const F={headers:new C.WM({"Content-Type":"application/json"})};let U=(()=>{class e{constructor(n,r,a){this.http=n,this.appConfig=r,this._recaptchaService=a}checkOrderExist(n){return this._recaptchaService.getRecaptchaToken$().pipe((0,m.w)(r=>this.http.post(this.appConfig.apiB2cUrl+"b2c-ticket/check-order-exist",JSON.stringify({orderId:n,recaptcha:r}),F)),(0,Z.U)(r=>(0,T.yE)(A,r,{excludeExtraneousValues:!0})))}}return e.\u0275fac=function(n){return new(n||e)(t.LFG(C.eN),t.LFG(g.qB),t.LFG(S.K))},e.\u0275prov=t.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();var N=o(77492);function J(e,s){1&e&&t._UZ(0,"cf-input-hint",14),2&e&&t.Q6J("hint","M\xe3 \u0111\u01a1n h\xe0ng kh\xf4ng \u0111\u01b0\u1ee3c \u0111\u1ec3 tr\u1ed1ng")}function M(e,s){1&e&&t._UZ(0,"cf-input-hint",14),2&e&&t.Q6J("hint","M\xe3 \u0111\u01a1n h\xe0ng kh\xf4ng ch\xednh x\xe1c")}let Y=(()=>{class e{constructor(n,r,a,f){this.cfIconRegister=n,this.CheckOrderExistSvc=r,this.appConfig=a,this._eventLogService=f,this.isOrderIdCorrect=!0,this.isLoading=!1,this.form=(0,t.f3M)(i.qu).nonNullable.group({orderId:["",i.kI.required]}),n.registerIcons([u.YwC])}orderIdChanges(n){n&&!this.isOrderIdCorrect&&(this.isOrderIdCorrect=!0)}submit(){if(this.form.markAllAsTouched(),this.form.invalid||this.isLoading)return;const n=this.form.value.orderId;this.isLoading=!0,this.CheckOrderExistSvc.checkOrderExist(n).subscribe({next:r=>{var a;this.isOrderIdCorrect=r.data&&(null===(a=r.data)||void 0===a?void 0:a.isExist),this.isOrderIdCorrect&&(this._eventLogService.lookupBooking({booking_code:n}),window.parent.postMessage({action:"redirect",url:"DEV"===this.appConfig.env?`/order-dev.html?id=${n}`:`/order.html?id=${n}`},"*"))},error:r=>{console.error("Error checking order:",r)},complete:()=>{this.isLoading=!1}})}}return e.\u0275fac=function(n){return new(n||e)(t.Y36(u.KNP),t.Y36(U),t.Y36(g.qB),t.Y36(N.x))},e.\u0275cmp=t.Xpm({type:e,selectors:[["btc-order-lookup"]],standalone:!0,features:[t.jDz],decls:19,vars:5,consts:[[1,"h-screen","!h-[100svh]","overflow-auto","w-full","bg-[#F2F4F6]","flex","flex-col"],[1,"py-20","my-10","md:my-4","md:py-6","max-w-[764px]","md:px-3","flex","items-center","justify-center","mx-auto"],[1,"flex-1","p-10","rounded-lg","bg-white","md:flex-col","flex","gap-10","w-full","mx-auto","justify-center","items-center",3,"formGroup"],["src","/assets/images/b2c/search-order-lookup.svg","alt","search-order-lookup",1,"w-[300px]","h-[300px]","md:w-[160px]","md:h-[160px]"],[1,"flex","flex-col","gap-10","items-center","justify-center","text-center","w-full"],[1,"flex","gap-x-[10px]"],["src","/assets/images/b2c/flight-minimum.svg"],[1,"text-heading-md","uppercase","font-bold","text-red-4"],[1,"w-full","flex","text-start","flex-1"],[1,"w-full",3,"status"],["cfHeadIcon","","icon","ticket","size","small"],["cf-input","","size","medium","placeholder","Nh\u1eadp m\xe3 \u0111\u01a1n h\xe0ng","formControlName","orderId",3,"valueChanges"],["cfHint","",3,"hint",4,"ngIf"],["cf-button","","type","solid",1,"min-w-[100px]","justify-center","bg-neutral-white","w-full",3,"disabled","click"],["cfHint","",3,"hint"]],template:function(n,r){1&n&&(t.TgZ(0,"div",0),t._UZ(1,"header-btc"),t.TgZ(2,"div",1)(3,"form",2),t._UZ(4,"img",3),t.TgZ(5,"div",4)(6,"div",5),t._UZ(7,"img",6),t.TgZ(8,"div",7),t._uU(9,"tra c\u1ee9u \u0111\u01a1n h\xe0ng"),t.qZA()(),t.TgZ(10,"div",8)(11,"cf-input-group",9),t._UZ(12,"cf-icon",10),t.TgZ(13,"input",11),t.NdJ("valueChanges",function(f){return r.orderIdChanges(f)}),t.qZA(),t.YNc(14,J,1,1,"cf-input-hint",12),t.YNc(15,M,1,1,"cf-input-hint",12),t.qZA()(),t.TgZ(16,"button",13),t.NdJ("click",function(){return r.submit()}),t._uU(17," Ti\u1ebfp t\u1ee5c "),t.qZA()()()(),t._UZ(18,"footer-btc"),t.qZA()),2&n&&(t.xp6(3),t.Q6J("formGroup",r.form),t.xp6(8),t.Q6J("status",r.form.controls.orderId.invalid&&(r.form.controls.orderId.dirty||r.form.controls.orderId.touched)||!r.isOrderIdCorrect?"error":"default"),t.xp6(3),t.Q6J("ngIf",r.form.controls.orderId.hasError("required")&&(r.form.controls.orderId.touched||r.form.controls.orderId.dirty)),t.xp6(1),t.Q6J("ngIf",!(r.form.controls.orderId.hasError("required")&&(r.form.controls.orderId.touched||r.form.controls.orderId.dirty)||r.isOrderIdCorrect)),t.xp6(1),t.Q6J("disabled",r.isLoading))},dependencies:[p.ez,p.O5,c.N8,c.Xq,u.AxE,u.Sm8,i.UX,i._Y,i.Fj,i.JJ,i.JL,i.sg,i.u,d.j$,d.ND,d.BN,d.v2,D,y.s,x.Q],styles:["[_nghost-%COMP%]{display:block}"]}),e})()},49557:(E,v,o)=>{o.d(v,{K:()=>i});var p=o(94650),t=o(94700);let i=(()=>{class c{constructor(d){this._recaptchaV3Service=d}getRecaptchaToken$(){return this._recaptchaV3Service.execute("importantAction")}}return c.\u0275fac=function(d){return new(d||c)(p.LFG(t.YC))},c.\u0275prov=p.Yz7({token:c,factory:c.\u0275fac,providedIn:"root"}),c})()}}]);