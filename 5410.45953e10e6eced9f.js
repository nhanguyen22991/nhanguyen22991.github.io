"use strict";(self.webpackChunkcheapflightclient=self.webpackChunkcheapflightclient||[]).push([[5410],{45410:(B,p,i)=>{i.r(p),i.d(p,{BtcOrderLookupComponent:()=>L});var h=i(36895),t=i(94650),n=i(24006),f=i(83700),a=i(72506),l=i(44143),m=i(80529),g=i(88001),v=i(50494),E=i(54004),c=i(97582),d=i(87067);let C=(()=>{class r{}return(0,c.gn)([(0,d.C)()],r.prototype,"data",void 0),(0,c.gn)([(0,d.C)()],r.prototype,"errorCode",void 0),(0,c.gn)([(0,d.C)()],r.prototype,"objectError",void 0),(0,c.gn)([(0,d.C)()],r.prototype,"status",void 0),(0,c.gn)([(0,d.C)()],r.prototype,"success",void 0),(0,c.gn)([(0,d.C)()],r.prototype,"traceId",void 0),r})();const x={headers:new m.WM({"Content-Type":"application/json"})};let I=(()=>{class r{constructor(e,o){this.http=e,this.appConfig=o}checkOrderExist(e){return this.http.post(this.appConfig.apiB2cUrl+"b2c-ticket/check-order-exist",JSON.stringify({orderId:e}),x).pipe((0,E.U)(o=>(0,v.yE)(C,o,{excludeExtraneousValues:!0})))}}return r.\u0275fac=function(e){return new(e||r)(t.LFG(m.eN),t.LFG(g.qB))},r.\u0275prov=t.Yz7({token:r,factory:r.\u0275fac,providedIn:"root"}),r})();var O=i(82761);function k(r,s){1&r&&t._UZ(0,"cf-input-hint",12),2&r&&t.Q6J("hint","M\xe3 \u0111\u01a1n h\xe0ng kh\xf4ng \u0111\u01b0\u1ee3c \u0111\u1ec3 tr\u1ed1ng")}function y(r,s){1&r&&t._UZ(0,"cf-input-hint",12),2&r&&t.Q6J("hint","M\xe3 \u0111\u01a1n h\xe0ng kh\xf4ng ch\xednh x\xe1c")}let L=(()=>{class r{constructor(e,o,u){this.cfIconRegister=e,this.CheckOrderExistSvc=o,this.router=u,this.isOrderIdCorrect=!0,this.isLoading=!1,this.form=(0,t.f3M)(n.qu).nonNullable.group({orderId:["",n.kI.required]}),e.registerIcons([a.YwC])}submit(){if(this.form.markAllAsTouched(),this.form.invalid||this.isLoading)return;const e=this.form.value.orderId;this.isLoading=!0,this.CheckOrderExistSvc.checkOrderExist(e).subscribe({next:o=>{var u;this.isOrderIdCorrect=o.data&&(null===(u=o.data)||void 0===u?void 0:u.isExist),console.log(this.isOrderIdCorrect),this.isOrderIdCorrect&&this.router.navigate(["/order",e])},error:o=>{console.error("Error checking order:",o)},complete:()=>{this.isLoading=!1}})}}return r.\u0275fac=function(e){return new(e||r)(t.Y36(a.KNP),t.Y36(I),t.Y36(O.F0))},r.\u0275cmp=t.Xpm({type:r,selectors:[["btc-order-lookup"]],standalone:!0,features:[t.jDz],decls:15,vars:5,consts:[[1,"max-w-[764px]","p-10","rounded-lg","bg-white","flex","gap-10","w-full",3,"formGroup"],["src","/assets/images/b2c/search-order-lookup.svg","alt","search-order-lookup",1,"md:hidden","w-[300px]","h-[300px]"],[1,"flex","flex-col","gap-10","items-center","justify-center","text-center","w-full"],[1,"flex","gap-x-[10px]"],["src","/assets/images/b2c/flight-minimum.svg"],[1,"text-heading-md","uppercase","font-bold","text-red-4"],[1,"w-full","flex","text-start","flex-1"],[1,"w-full",3,"status"],["cfHeadIcon","","icon","ticket","size","small"],["cf-input","","size","medium","placeholder","Nh\u1eadp m\xe3 \u0111\u01a1n h\xe0ng","formControlName","orderId"],["cfHint","",3,"hint",4,"ngIf"],["cf-button","","type","solid",1,"min-w-[100px]","justify-center","bg-neutral-white","w-full",3,"disabled","click"],["cfHint","",3,"hint"]],template:function(e,o){1&e&&(t.TgZ(0,"form",0),t._UZ(1,"img",1),t.TgZ(2,"div",2)(3,"div",3),t._UZ(4,"img",4),t.TgZ(5,"div",5),t._uU(6,"tra c\u1ee9u \u0111\u01a1n h\xe0ng"),t.qZA()(),t.TgZ(7,"div",6)(8,"cf-input-group",7),t._UZ(9,"cf-icon",8)(10,"input",9),t.YNc(11,k,1,1,"cf-input-hint",10),t.YNc(12,y,1,1,"cf-input-hint",10),t.qZA()(),t.TgZ(13,"button",11),t.NdJ("click",function(){return o.submit()}),t._uU(14," Ti\u1ebfp t\u1ee5c "),t.qZA()()()),2&e&&(t.Q6J("formGroup",o.form),t.xp6(8),t.Q6J("status",o.form.controls.orderId.invalid&&(o.form.controls.orderId.dirty||o.form.controls.orderId.touched)||!o.isOrderIdCorrect?"error":"default"),t.xp6(3),t.Q6J("ngIf",o.form.controls.orderId.hasError("required")&&(o.form.controls.orderId.touched||o.form.controls.orderId.dirty)),t.xp6(1),t.Q6J("ngIf",!(o.form.controls.orderId.hasError("required")&&(o.form.controls.orderId.touched||o.form.controls.orderId.dirty)||o.isOrderIdCorrect)),t.xp6(1),t.Q6J("disabled",o.isLoading))},dependencies:[h.ez,h.O5,f.N8,f.Xq,a.AxE,a.Sm8,n.UX,n._Y,n.Fj,n.JJ,n.JL,n.sg,n.u,l.j$,l.ND,l.BN,l.v2],styles:["[_nghost-%COMP%]{display:block}"]}),r})()}}]);