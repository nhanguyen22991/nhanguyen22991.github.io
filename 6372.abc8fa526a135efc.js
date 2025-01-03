"use strict";(self.webpackChunkcheapflightclient=self.webpackChunkcheapflightclient||[]).push([[6372],{36372:(U,p,n)=>{n.r(p),n.d(p,{BtcOrderLookupComponent:()=>J});var f=n(36895),t=n(94650),i=n(24006),g=n(83700),u=n(72506),l=n(44143),C=n(77579),E=n(71884),m=n(63900),x=n(44671),y=n(60515);let O=(()=>{class e{constructor(){this.container=(0,t.f3M)(i.gN,{optional:!0}),this.control=(0,t.f3M)(i.a5,{optional:!0}),this.refresh$=new C.x,this.valueChanges=this.refresh$.pipe((0,E.x)(),function I(){return(0,m.w)(x.y)}())}ngDoCheck(){var o,r;this.refresh$.next((null===(o=this.control)||void 0===o?void 0:o.valueChanges)||(null===(r=this.container)||void 0===r?void 0:r.valueChanges)||y.E)}}return e.\u0275fac=function(o){return new(o||e)},e.\u0275dir=t.lG2({type:e,selectors:[["","valueChanges",""]],outputs:{valueChanges:"valueChanges"},standalone:!0}),e})();var v=n(80529),k=n(88001),L=n(50494),B=n(54004),a=n(97582),d=n(87067);let D=(()=>{class e{}return(0,a.gn)([(0,d.C)()],e.prototype,"data",void 0),(0,a.gn)([(0,d.C)()],e.prototype,"errorCode",void 0),(0,a.gn)([(0,d.C)()],e.prototype,"objectError",void 0),(0,a.gn)([(0,d.C)()],e.prototype,"status",void 0),(0,a.gn)([(0,d.C)()],e.prototype,"success",void 0),(0,a.gn)([(0,d.C)()],e.prototype,"traceId",void 0),e})();var T=n(49557);const Z={headers:new v.WM({"Content-Type":"application/json"})};let N=(()=>{class e{constructor(o,r,c){this.http=o,this.appConfig=r,this._recaptchaService=c}checkOrderExist(o){return this._recaptchaService.getRecaptchaToken$().pipe((0,m.w)(r=>this.http.post(this.appConfig.apiB2cUrl+"b2c-ticket/check-order-exist",JSON.stringify({orderId:o,recaptcha:r}),Z)),(0,B.U)(r=>(0,L.yE)(D,r,{excludeExtraneousValues:!0})))}}return e.\u0275fac=function(o){return new(o||e)(t.LFG(v.eN),t.LFG(k.qB),t.LFG(T.K))},e.\u0275prov=t.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();function A(e,s){1&e&&t._UZ(0,"cf-input-hint",13),2&e&&t.Q6J("hint","M\xe3 \u0111\u01a1n h\xe0ng kh\xf4ng \u0111\u01b0\u1ee3c \u0111\u1ec3 tr\u1ed1ng")}function F(e,s){1&e&&t._UZ(0,"cf-input-hint",13),2&e&&t.Q6J("hint","M\xe3 \u0111\u01a1n h\xe0ng kh\xf4ng ch\xednh x\xe1c")}let J=(()=>{class e{constructor(o,r){this.cfIconRegister=o,this.CheckOrderExistSvc=r,this.isOrderIdCorrect=!0,this.isLoading=!1,this.form=(0,t.f3M)(i.qu).nonNullable.group({orderId:["",i.kI.required]}),o.registerIcons([u.YwC])}orderIdChanges(o){o&&!this.isOrderIdCorrect&&(this.isOrderIdCorrect=!0)}submit(){if(this.form.markAllAsTouched(),this.form.invalid||this.isLoading)return;const o=this.form.value.orderId;this.isLoading=!0,this.CheckOrderExistSvc.checkOrderExist(o).subscribe({next:r=>{var c;this.isOrderIdCorrect=r.data&&(null===(c=r.data)||void 0===c?void 0:c.isExist),this.isOrderIdCorrect&&window.parent.postMessage({action:"redirect",url:`/order.html?id=${o}`},"*")},error:r=>{console.error("Error checking order:",r)},complete:()=>{this.isLoading=!1}})}}return e.\u0275fac=function(o){return new(o||e)(t.Y36(u.KNP),t.Y36(N))},e.\u0275cmp=t.Xpm({type:e,selectors:[["btc-order-lookup"]],standalone:!0,features:[t.jDz],decls:16,vars:5,consts:[[1,"h-screen","!h-[100svh]","w-full","bg-[#F2F4F6]","flex","flex-col","justify-center","items-center"],[1,"max-w-[764px]","p-10","rounded-lg","bg-white","md:flex-col","flex","gap-10","w-full","mx-auto","justify-center","items-center",3,"formGroup"],["src","/assets/images/b2c/search-order-lookup.svg","alt","search-order-lookup",1,"w-[300px]","h-[300px]","md:w-[160px]","md:h-[160px]"],[1,"flex","flex-col","gap-10","items-center","justify-center","text-center","w-full"],[1,"flex","gap-x-[10px]"],["src","/assets/images/b2c/flight-minimum.svg"],[1,"text-heading-md","uppercase","font-bold","text-red-4"],[1,"w-full","flex","text-start","flex-1"],[1,"w-full",3,"status"],["cfHeadIcon","","icon","ticket","size","small"],["cf-input","","size","medium","placeholder","Nh\u1eadp m\xe3 \u0111\u01a1n h\xe0ng","formControlName","orderId",3,"valueChanges"],["cfHint","",3,"hint",4,"ngIf"],["cf-button","","type","solid",1,"min-w-[100px]","justify-center","bg-neutral-white","w-full",3,"disabled","click"],["cfHint","",3,"hint"]],template:function(o,r){1&o&&(t.TgZ(0,"div",0)(1,"form",1),t._UZ(2,"img",2),t.TgZ(3,"div",3)(4,"div",4),t._UZ(5,"img",5),t.TgZ(6,"div",6),t._uU(7,"tra c\u1ee9u \u0111\u01a1n h\xe0ng"),t.qZA()(),t.TgZ(8,"div",7)(9,"cf-input-group",8),t._UZ(10,"cf-icon",9),t.TgZ(11,"input",10),t.NdJ("valueChanges",function(h){return r.orderIdChanges(h)}),t.qZA(),t.YNc(12,A,1,1,"cf-input-hint",11),t.YNc(13,F,1,1,"cf-input-hint",11),t.qZA()(),t.TgZ(14,"button",12),t.NdJ("click",function(){return r.submit()}),t._uU(15," Ti\u1ebfp t\u1ee5c "),t.qZA()()()()),2&o&&(t.xp6(1),t.Q6J("formGroup",r.form),t.xp6(8),t.Q6J("status",r.form.controls.orderId.invalid&&(r.form.controls.orderId.dirty||r.form.controls.orderId.touched)||!r.isOrderIdCorrect?"error":"default"),t.xp6(3),t.Q6J("ngIf",r.form.controls.orderId.hasError("required")&&(r.form.controls.orderId.touched||r.form.controls.orderId.dirty)),t.xp6(1),t.Q6J("ngIf",!(r.form.controls.orderId.hasError("required")&&(r.form.controls.orderId.touched||r.form.controls.orderId.dirty)||r.isOrderIdCorrect)),t.xp6(1),t.Q6J("disabled",r.isLoading))},dependencies:[f.ez,f.O5,g.N8,g.Xq,u.AxE,u.Sm8,i.UX,i._Y,i.Fj,i.JJ,i.JL,i.sg,i.u,l.j$,l.ND,l.BN,l.v2,O],styles:["[_nghost-%COMP%]{display:block}"]}),e})()}}]);