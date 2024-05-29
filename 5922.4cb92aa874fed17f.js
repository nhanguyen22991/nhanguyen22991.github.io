"use strict";(self.webpackChunkcheapflightclient=self.webpackChunkcheapflightclient||[]).push([[5922],{65682:(A,k,i)=>{i.d(k,{P:()=>S});var C=i(80529),t=i(44500),m=i(50494),d=i(54004),y=i(4482),s=i(97582),a=i(87067),n=i(43429);class g{}(0,s.gn)([(0,a.C)()],g.prototype,"status",void 0),(0,s.gn)([(0,n.D)(()=>r),(0,a.C)()],g.prototype,"data",void 0),(0,s.gn)([(0,a.C)()],g.prototype,"objectError",void 0),(0,s.gn)([(0,a.C)()],g.prototype,"success",void 0);class r{}(0,s.gn)([(0,n.D)(()=>e),(0,a.C)()],r.prototype,"bookingContact",void 0);class e{}(0,s.gn)([(0,a.C)()],e.prototype,"email",void 0),(0,s.gn)([(0,a.C)()],e.prototype,"name",void 0),(0,s.gn)([(0,a.C)()],e.prototype,"phone",void 0);var I=i(94650);const B={headers:new C.WM({"Content-Type":"application/json"})};let S=(()=>{class v{constructor(b,h){this.http=b,this.appConfig=h}getBookingDetail(b,h){return this.http.post(this.appConfig.apiUrl+"flight/booking-retriver",JSON.stringify({airline:h,bookingCode:b}),B).pipe((0,d.U)(T=>(0,m.yE)(y.JG,T,{excludeExtraneousValues:!0})))}getBookingInfo(b){return this.http.post(this.appConfig.apiUrl+"flight/get-pnr-info",JSON.stringify(b),B).pipe((0,d.U)(h=>(0,m.yE)(g,h,{excludeExtraneousValues:!0})))}}return v.\u0275fac=function(b){return new(b||v)(I.LFG(C.eN),I.LFG(t.qB))},v.\u0275prov=I.Yz7({token:v,factory:v.\u0275fac,providedIn:"root"}),v})()},85922:(A,k,i)=>{i.r(k),i.d(k,{SendEmailModalComponent:()=>f.B,SendEmailPageComponent:()=>p});var C=i(36895),t=i(24006),m=i(37094),d=i(83700),y=i(27898),s=i(44143),a=i(74713),n=i(45393),g=i(34541),r=i(28746),e=i(94650),I=i(35991),B=i(9381),S=i(97579),v=i(65682);function G(u,D){1&u&&e._UZ(0,"cf-input-hint",21),2&u&&e.Q6J("hint","M\xe3 \u0111\u1eb7t ch\u1ed7 kh\xf4ng \u0111\u01b0\u1ee3c \u0111\u1ec3 tr\u1ed1ng")}function b(u,D){1&u&&e._UZ(0,"cf-input-hint",21),2&u&&e.Q6J("hint","H\xe3ng bay kh\xf4ng \u0111\u01b0\u1ee3c \u0111\u1ec3 tr\u1ed1ng")}function h(u,D){1&u&&e._UZ(0,"cf-input-hint",21),2&u&&e.Q6J("hint","Email kh\xf4ng \u0111\u01b0\u1ee3c \u0111\u1ec3 tr\u1ed1ng")}function T(u,D){1&u&&e._UZ(0,"cf-input-hint",21),2&u&&e.Q6J("hint","\u0110\u1ecbnh d\u1ea1ng kh\xf4ng h\u1ee3p l\u1ec7")}function _(u,D){1&u&&e._UZ(0,"cf-spinner")}const l=function(){return[]};let p=(()=>{class u{constructor(c,o,x,E,Z,M){this._fb=c,this._manageBookingService=o,this._mobileDetectService=x,this._bottomSheetService=E,this._modal=Z,this._bookingDetailService=M,this.airlineOptions=[{value:"VN",text:"VN - Vietnam Airlines"},{value:"VJ",text:"VJ - Vietjet Air"},{value:"QH",text:"QH - Bamboo Airways"}],this.isDisableEmail=!1,this.isDisableCheckbox=!1,this.isLoading=!1}ngOnInit(){this.initFormGroup(),this.formGroup.get("bookingCode").valueChanges.subscribe({next:c=>{6===c.length&&this.formGroup.value.airline&&this.getBookingContact()}})}initFormGroup(){this.formGroup=this._fb.group({bookingCode:["",t.kI.required],airline:["",t.kI.required],email:["",[t.kI.required,t.kI.email]],includeTicket:[!1,[t.kI.required]]})}onSendEmail(){if(this.formGroup.invalid)return;const c=this.formGroup.value,o={bookingCode:c.bookingCode.trim().toUpperCase()||"",airline:c.airline||"",email:c.email.trim()||"",language:"vi",includeTicket:c.includeTicket};this._manageBookingService.sendEmail(o).subscribe({next:x=>{if("OK"===x.status)if(this._mobileDetectService.isMobile()){const E=this._bottomSheetService.open(n.z5,{headerTitle:"",rightButtonIcon:"close",rightButtonIconClass:"text-neutral-gray-4",leftButtonIcon:"",data:{title:"G\u1eedi email th\xe0nh c\xf4ng",content:`<div>Y\xeau c\u1ea7u g\u1eedi m\u1eb7t v\xe9 v\u1ec1 email <strong>${o.email}</strong> th\xe0nh c\xf4ng. Vui l\xf2ng ki\u1ec3m tra email</div>`,status:"success"}});E.containerInstance._rightButtonClick.subscribe(Z=>E.dismiss())}else this._modal.open(n.z5,{title:"G\u1eedi email th\xe0nh c\xf4ng",content:`<div>Y\xeau c\u1ea7u g\u1eedi m\u1eb7t v\xe9 v\u1ec1 email <strong>${o.email}</strong> th\xe0nh c\xf4ng. Vui l\xf2ng ki\u1ec3m tra email</div>`,status:"success"});else if(this._mobileDetectService.isMobile()){const E=this._bottomSheetService.open(n.z5,{headerTitle:"",rightButtonIcon:"close",rightButtonIconClass:"text-neutral-gray-4",leftButtonIcon:"",data:{title:"C\xf3 l\u1ed7i x\u1ea3y ra",content:`<div>Y\xeau c\u1ea7u g\u1eedi m\u1eb7t v\xe9 v\u1ec1 email <strong>${o.email}</strong> th\u1ea5t b\u1ea1i. Vui l\xf2ng th\u1eed l\u1ea1i</div>`,status:"error"}});E.containerInstance._rightButtonClick.subscribe(Z=>E.dismiss())}else this._modal.open(n.z5,{title:"C\xf3 l\u1ed7i x\u1ea3y ra",content:`<div>Y\xeau c\u1ea7u g\u1eedi m\u1eb7t v\xe9 v\u1ec1 email <strong>${o.email}</strong> th\u1ea5t b\u1ea1i. Vui l\xf2ng th\u1eed l\u1ea1i</div>`,status:"error"})},error:()=>{if(this._mobileDetectService.isMobile()){const x=this._bottomSheetService.open(n.z5,{headerTitle:"",rightButtonIcon:"close",rightButtonIconClass:"text-neutral-gray-4",leftButtonIcon:"",data:{title:"C\xf3 l\u1ed7i x\u1ea3y ra",content:`<div>Y\xeau c\u1ea7u g\u1eedi m\u1eb7t v\xe9 v\u1ec1 email <strong>${o.email}</strong> th\u1ea5t b\u1ea1i. Vui l\xf2ng th\u1eed l\u1ea1i</div>`,status:"error"}});x.containerInstance._rightButtonClick.subscribe(E=>x.dismiss())}else this._modal.open(n.z5,{title:"C\xf3 l\u1ed7i x\u1ea3y ra",content:`<div>Y\xeau c\u1ea7u g\u1eedi m\u1eb7t v\xe9 v\u1ec1 email <strong>${o.email}</strong> th\u1ea5t b\u1ea1i. Vui l\xf2ng th\u1eed l\u1ea1i</div>`,status:"error"})}})}checkedChange(c){this.formGroup.controls.includeTicket.setValue(c)}onChangeAirline(c){"VN"===c.value.toUpperCase()?(this.formGroup.value.bookingCode?this.getBookingContact():this.formGroup.controls.email.setValue(""),this.formGroup.controls.email.setValidators(null),this.formGroup.controls.email.updateValueAndValidity(),this.isDisableEmail=!0,this.isDisableCheckbox=!1):(this.formGroup.controls.email.setValidators([t.kI.required]),this.formGroup.controls.email.updateValueAndValidity(),this.formGroup.controls.includeTicket.setValue(!0),this.isDisableEmail=!1,this.isDisableCheckbox=!0)}getBookingContact(){const c={airline:this.formGroup.value.airline,bookingCode:this.formGroup.value.bookingCode};this.isLoading=!0,this._bookingDetailService.getBookingInfo(c).pipe((0,r.x)(()=>this.isLoading=!1)).subscribe({next:o=>{"OK"===o.status&&this.formGroup.controls.email.setValue(o.data.bookingContact.email)}})}}return u.\u0275fac=function(c){return new(c||u)(e.Y36(t.qu),e.Y36(I.fB),e.Y36(B.L),e.Y36(m.a2),e.Y36(S.oE),e.Y36(v.P))},u.\u0275cmp=e.Xpm({type:u,selectors:[["send-email-page"]],hostAttrs:[1,"h-full"],standalone:!0,features:[e.jDz],decls:32,vars:22,consts:[[1,"w-full","h-full","md:flex","md:flex-col","md:justify-between"],[1,"flex","justify-center","p-8","md:!p-4"],[1,"w-[764px]","md:!w-full"],[1,"flex","gap-x-[20px]"],[1,"w-1","bg-primary-2-4"],[1,"flex","items-center","text-heading-md"],[1,"bg-neutral-white","rounded","p-6","flex","flex-col","gap-y-4","mt-4","md:p-4"],[1,"grow-[400]","!w-full",3,"status"],["cfLabel","",1,"text-express-sm","text-black",3,"CfRequired"],["cf-input","","size","medium","placeholder","Nh\u1eadp m\xe3 \u0111\u1eb7t ch\u1ed7",3,"formControl"],["cfHint","",3,"hint",4,"ngIf"],["textField","text","valueField","value","placeholder","Ch\u1ecdn h\xe3ng bay",1,"!w-full","!max-w-full",3,"status","data","formControl","allowSearch","selectedChange"],["cfLabel","",1,"text-espressive-sm","text-black","mb-1.5",3,"CfRequired"],[1,"grow-[400]","!w-full",3,"disabled","status"],["cf-input","","size","medium","placeholder","Nh\u1eadp email nh\u1eadn m\u1eb7t v\xe9",3,"formControl"],["size","medium",3,"disabled","checked","checkChange"],[1,"mt-6","w-full","text-right","md:hidden"],["cf-button","","size","medium",1,"!min-w-[100px]","justify-center",3,"disabled","click"],[1,"hidden","md:block","w-full","p-4","bg-neutral-white"],["cf-button","","size","medium",1,"!w-full","justify-center",3,"disabled","click"],[4,"ngIf"],["cfHint","",3,"hint"]],template:function(c,o){1&c&&(e.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3),e._UZ(4,"div",4),e.TgZ(5,"div",5),e._uU(6,"Th\xf4ng tin g\u1eedi v\xe9"),e.qZA()(),e.TgZ(7,"div",6)(8,"cf-input-group",7)(9,"label",8),e._uU(10," M\xe3 \u0111\u1eb7t ch\u1ed7 "),e.qZA(),e._UZ(11,"input",9),e.YNc(12,G,1,1,"cf-input-hint",10),e.qZA(),e.TgZ(13,"cf-select",11),e.NdJ("selectedChange",function(E){return o.onChangeAirline(E)}),e.TgZ(14,"label",12),e._uU(15," H\xe3ng bay "),e.qZA(),e.YNc(16,b,1,1,"cf-input-hint",10),e.qZA(),e.TgZ(17,"cf-input-group",13)(18,"label",8),e._uU(19," Email "),e.qZA(),e._UZ(20,"input",14),e.YNc(21,h,1,1,"cf-input-hint",10),e.YNc(22,T,1,1,"cf-input-hint",10),e.qZA(),e.TgZ(23,"cf-checkbox",15),e.NdJ("checkChange",function(E){return o.checkedChange(E)}),e._uU(24," K\xe8m Ticket EMD "),e.qZA()(),e.TgZ(25,"div",16)(26,"button",17),e.NdJ("click",function(){return o.onSendEmail()}),e._uU(27," G\u1eedi"),e.qZA()()()(),e.TgZ(28,"div",18)(29,"button",19),e.NdJ("click",function(){return o.onSendEmail()}),e._uU(30," G\u1eedi"),e.qZA()()(),e.YNc(31,_,1,0,"cf-spinner",20)),2&c&&(e.xp6(8),e.Q6J("status",o.formGroup.controls.bookingCode.invalid&&(o.formGroup.controls.bookingCode.dirty||o.formGroup.controls.bookingCode.touched)?"error":"default"),e.xp6(1),e.Q6J("CfRequired",!0),e.xp6(2),e.Q6J("formControl",o.formGroup.controls.bookingCode),e.xp6(1),e.Q6J("ngIf",o.formGroup.controls.bookingCode.hasError("required")&&o.formGroup.controls.bookingCode.touched),e.xp6(1),e.Q6J("status",o.formGroup.controls.airline.invalid&&(o.formGroup.controls.airline.dirty||o.formGroup.controls.airline.touched)?"error":"default")("data",o.airlineOptions||e.DdM(21,l))("formControl",o.formGroup.controls.airline)("allowSearch",!0),e.xp6(1),e.Q6J("CfRequired",!0),e.xp6(2),e.Q6J("ngIf",o.formGroup.controls.airline.hasError("required")&&o.formGroup.controls.airline.touched),e.xp6(1),e.Q6J("disabled",o.isDisableEmail)("status",o.formGroup.controls.email.invalid&&(o.formGroup.controls.email.dirty||o.formGroup.controls.email.touched)?"error":"default"),e.xp6(1),e.Q6J("CfRequired",!0),e.xp6(2),e.Q6J("formControl",o.formGroup.controls.email),e.xp6(1),e.Q6J("ngIf",o.formGroup.controls.email.hasError("required")&&(o.formGroup.controls.email.touched||o.formGroup.controls.email.dirty)),e.xp6(1),e.Q6J("ngIf",o.formGroup.controls.email.hasError("email")),e.xp6(1),e.Q6J("disabled",o.isDisableCheckbox)("checked",o.formGroup.value.includeTicket),e.xp6(3),e.Q6J("disabled",o.formGroup.invalid),e.xp6(3),e.Q6J("disabled",o.formGroup.invalid),e.xp6(2),e.Q6J("ngIf",o.isLoading))},dependencies:[C.ez,C.O5,d.N8,d.Xq,s.j$,s.ND,s.BN,s.v2,g.C,t.UX,t.Fj,t.JJ,t.oH,t.u5,a.q,m.DW,y.u,n.OR],encapsulation:2}),u})();var f=i(95911)},95911:(A,k,i)=>{i.d(k,{B:()=>b});var C=i(36895),t=i(24006),m=i(37094),d=i(83700),y=i(27898),s=i(72506),a=i(44143),n=i(45393),g=i(34541),r=i(28746),e=i(94650),I=i(35991),B=i(97579);function S(h,T){1&h&&e._UZ(0,"cf-input-hint",18),2&h&&e.Q6J("hint","Email kh\xf4ng \u0111\u01b0\u1ee3c \u0111\u1ec3 tr\u1ed1ng")}function v(h,T){1&h&&e._UZ(0,"cf-input-hint",18),2&h&&e.Q6J("hint","\u0110\u1ecbnh d\u1ea1ng kh\xf4ng h\u1ee3p l\u1ec7")}function G(h,T){1&h&&e._UZ(0,"cf-spinner")}let b=(()=>{class h{constructor(_,l,p,f,u,D,c,o){this.fb=l,this._manageBookingService=p,this._modal=f,this._bottomSheetService=u,this.ref=D,this.bottomSheetData=c,this.bottomSheetRef=o,this.isLoading=!1,this.isDisableEmail=!1,this.isDisableCheckbox=!1,_.registerIcons([s.UNF,s.PcQ]),D&&(this.emailInfo=this.ref.data.emailInfo),c&&(this.emailInfo=c.emailInfo)}ngOnInit(){switch(this.initFormGroup(),this.emailInfo.airline){case"VN":this.isDisableEmail=!0,this.formGroup.controls.email.setValidators(null),this.formGroup.controls.email.setValue(this.emailInfo.email),this.airlineDisplay="VN - Vietnam Airlines";break;case"VJ":this.isDisableEmail=!1,this.isDisableCheckbox=!0,this.formGroup.controls.includeTicket.setValue(!0),this.airlineDisplay="VJ - Vietjet Air";break;case"QH":this.isDisableEmail=!1,this.isDisableCheckbox=!0,this.formGroup.controls.includeTicket.setValue(!0),this.airlineDisplay="QH - Bamboo Airways";break;default:this.airlineDisplay=""}}initFormGroup(){this.formGroup=this.fb.group({email:["",[t.kI.required,t.kI.email]],includeTicket:[!1,[t.kI.required]]})}close(){this.ref&&this.ref.close(!1),this.bottomSheetData&&this.bottomSheetRef.dismiss(!1)}ok(){if(this.formGroup.invalid)return;const _=this.formGroup.value,l={bookingCode:this.emailInfo.bookingCode.trim().toUpperCase()||"",airline:this.emailInfo.airline||"",email:_.email.trim()||"",language:"vi",includeTicket:_.includeTicket};this.isLoading=!0,this._manageBookingService.sendEmail(l).pipe((0,r.x)(()=>this.isLoading=!1)).subscribe({next:p=>{if("OK"===p.status){if(this.ref&&this._modal.open(n.z5,{title:"G\u1eedi email th\xe0nh c\xf4ng",content:`<div>Y\xeau c\u1ea7u g\u1eedi m\u1eb7t v\xe9 v\u1ec1 email <strong>${l.email}</strong> th\xe0nh c\xf4ng. Vui l\xf2ng ki\u1ec3m tra email</div>`,status:"success"}).afterClosed$.subscribe({next:()=>{this.ref.close(!1)}}),this.bottomSheetData){const f=this._bottomSheetService.open(n.z5,{headerTitle:"",rightButtonIcon:"close",rightButtonIconClass:"text-neutral-gray-4",leftButtonIcon:"",data:{title:"G\u1eedi email th\xe0nh c\xf4ng",content:`<div>Y\xeau c\u1ea7u g\u1eedi m\u1eb7t v\xe9 v\u1ec1 email <strong>${l.email}</strong> th\xe0nh c\xf4ng. Vui l\xf2ng ki\u1ec3m tra email</div>`,status:"success"}});f.containerInstance._rightButtonClick.subscribe(u=>f.dismiss()),f.afterDismissed().subscribe(()=>{this.bottomSheetRef.dismiss(!1)})}}else if(this.ref&&this._modal.open(n.z5,{title:"C\xf3 l\u1ed7i x\u1ea3y ra",content:`<div>Y\xeau c\u1ea7u g\u1eedi m\u1eb7t v\xe9 v\u1ec1 email <strong>${l.email}</strong> th\u1ea5t b\u1ea1i. Vui l\xf2ng th\u1eed l\u1ea1i</div>`,status:"error"}).afterClosed$.subscribe({next:()=>{}}),this.bottomSheetData){const f=this._bottomSheetService.open(n.z5,{headerTitle:"",rightButtonIcon:"close",rightButtonIconClass:"text-neutral-gray-4",leftButtonIcon:"",data:{title:"C\xf3 l\u1ed7i x\u1ea3y ra",content:`<div>Y\xeau c\u1ea7u g\u1eedi m\u1eb7t v\xe9 v\u1ec1 email <strong>${l.email}</strong> th\u1ea5t b\u1ea1i. Vui l\xf2ng th\u1eed l\u1ea1i</div>`,status:"error"}});f.containerInstance._rightButtonClick.subscribe(u=>f.dismiss()),f.afterDismissed().subscribe(()=>{this.bottomSheetRef.dismiss(!1)})}},error:()=>{if(this.ref&&this._modal.open(n.z5,{title:"C\xf3 l\u1ed7i x\u1ea3y ra",content:`<div>Y\xeau c\u1ea7u g\u1eedi m\u1eb7t v\xe9 v\u1ec1 email <strong>${l.email}</strong> th\u1ea5t b\u1ea1i. Vui l\xf2ng th\u1eed l\u1ea1i</div>`,status:"error"}).afterClosed$.subscribe({next:()=>{}}),this.bottomSheetData){const p=this._bottomSheetService.open(n.z5,{headerTitle:"",rightButtonIcon:"close",rightButtonIconClass:"text-neutral-gray-4",leftButtonIcon:"",data:{title:"C\xf3 l\u1ed7i x\u1ea3y ra",content:`<div>Y\xeau c\u1ea7u g\u1eedi m\u1eb7t v\xe9 v\u1ec1 email <strong>${l.email}</strong> th\u1ea5t b\u1ea1i. Vui l\xf2ng th\u1eed l\u1ea1i</div>`,status:"error"}});p.containerInstance._rightButtonClick.subscribe(f=>p.dismiss()),p.afterDismissed().subscribe(()=>{this.bottomSheetRef.dismiss(!1)})}}})}onCheckTicket(_){this.formGroup.controls.includeTicket.setValue(_)}}return h.\u0275fac=function(_){return new(_||h)(e.Y36(s.KNP),e.Y36(t.qu),e.Y36(I.fB),e.Y36(B.oE),e.Y36(m.a2),e.Y36(B.gb,8),e.Y36(m.Rr,8),e.Y36(m.Zu,8))},h.\u0275cmp=e.Xpm({type:h,selectors:[["send-email-modal"]],standalone:!0,features:[e.jDz],decls:29,vars:16,consts:[[1,"w-[640px]","rounded-lg","bg-neutral-white","flex","flex-col","md:w-screen"],[1,"flex","justify-between","items-center","px-6","py-[13px]","border-b","border-b-neutral-gray-1","md:hidden"],[1,"text-heading-xs","text-neutral-gray-6"],["size","medium","icon","close",1,"text-neutral-gray-4","cursor-pointer",3,"click"],[1,"p-6","flex","flex-col","gap-y-4"],[1,"grow-[400]","!w-full",3,"disabled","status"],["cfLabel","",1,"text-espressive-sm","text-black","mb-1.5"],["cf-input","","size","medium","placeholder","Nh\u1eadp m\xe3 \u0111\u1eb7t ch\u1ed7",3,"value"],["cf-input","","size","medium","placeholder","Ch\u1ecdn h\xe3ng bay",3,"value"],["cfLabel","",1,"text-express-sm","text-black",3,"CfRequired"],["cf-input","","size","medium","placeholder","Nh\u1eadp email nh\u1eadn m\u1eb7t v\xe9",3,"formControl"],["cfHint","",3,"hint",4,"ngIf"],["size","medium",3,"disabled","checked","checkChange"],[1,"p-6","flex","gap-x-4","justify-end","md:justify-between"],["cf-button","","size","medium","type","secondary",1,"min-w-[100px]","md:!w-full","justify-center",3,"click"],["cf-button","","size","medium","color","primary-1",1,"min-w-[100px]","md:!w-full","justify-center","items-center",3,"disabled","click"],["icon","circle_check","size","small",1,"ml-2"],[4,"ngIf"],["cfHint","",3,"hint"]],template:function(_,l){1&_&&(e.TgZ(0,"div",0)(1,"div",1)(2,"div",2),e._uU(3,"Th\xf4ng tin nh\u1eadn v\xe9"),e.qZA(),e.TgZ(4,"cf-icon",3),e.NdJ("click",function(){return l.close()}),e.qZA()(),e.TgZ(5,"div",4)(6,"cf-input-group",5)(7,"label",6),e._uU(8," M\xe3 \u0111\u1eb7t ch\u1ed7 "),e.qZA(),e._UZ(9,"input",7),e.qZA(),e.TgZ(10,"cf-input-group",5)(11,"label",6),e._uU(12," H\xe3ng bay "),e.qZA(),e._UZ(13,"input",8),e.qZA(),e.TgZ(14,"cf-input-group",5)(15,"label",9),e._uU(16," Email "),e.qZA(),e._UZ(17,"input",10),e.YNc(18,S,1,1,"cf-input-hint",11),e.YNc(19,v,1,1,"cf-input-hint",11),e.qZA(),e.TgZ(20,"cf-checkbox",12),e.NdJ("checkChange",function(f){return l.onCheckTicket(f)}),e._uU(21," K\xe8m Ticket EMD "),e.qZA()(),e.TgZ(22,"div",13)(23,"button",14),e.NdJ("click",function(){return l.close()}),e._uU(24," \u0110\xf3ng "),e.qZA(),e.TgZ(25,"button",15),e.NdJ("click",function(){return l.ok()}),e._uU(26," X\xe1c nh\u1eadn "),e._UZ(27,"cf-icon",16),e.qZA()()(),e.YNc(28,G,1,0,"cf-spinner",17)),2&_&&(e.xp6(6),e.Q6J("disabled",!0)("status","default"),e.xp6(3),e.Q6J("value",l.emailInfo.bookingCode),e.xp6(1),e.Q6J("disabled",!0)("status","default"),e.xp6(3),e.Q6J("value",l.airlineDisplay),e.xp6(1),e.Q6J("disabled",l.isDisableEmail)("status",l.formGroup.controls.email.invalid&&(l.formGroup.controls.email.dirty||l.formGroup.controls.email.touched)?"error":"default"),e.xp6(1),e.Q6J("CfRequired",!0),e.xp6(2),e.Q6J("formControl",l.formGroup.controls.email),e.xp6(1),e.Q6J("ngIf",l.formGroup.controls.email.hasError("required")&&(l.formGroup.controls.email.touched||l.formGroup.controls.email.dirty)),e.xp6(1),e.Q6J("ngIf",l.formGroup.controls.email.hasError("email")),e.xp6(1),e.Q6J("disabled",l.isDisableCheckbox)("checked",l.formGroup.value.includeTicket),e.xp6(5),e.Q6J("disabled",l.formGroup.invalid),e.xp6(3),e.Q6J("ngIf",l.isLoading))},dependencies:[C.ez,C.O5,s.AxE,s.Sm8,d.N8,d.Xq,t.UX,t.Fj,t.JJ,t.oH,t.u5,a.j$,a.ND,a.BN,a.v2,g.C,m.DW,n.OR,y.u],encapsulation:2}),h})()},34541:(A,k,i)=>{i.d(k,{C:()=>m});var C=i(36895),t=i(94650);let m=(()=>{class d{constructor(s,a,n){this.elementRef=s,this.renderer=a,this.document=n}set CfRequired(s){if(s){const a=this.document.createElement("span");a.innerHTML="&nbsp;(*)",a.className="text-primary-1-4 text-espressive-sm",this.renderer.appendChild(this.elementRef.nativeElement,a)}}}return d.\u0275fac=function(s){return new(s||d)(t.Y36(t.SBq),t.Y36(t.Qsj),t.Y36(C.K0))},d.\u0275dir=t.lG2({type:d,selectors:[["","CfRequired",""]],inputs:{CfRequired:"CfRequired"},standalone:!0}),d})()},27898:(A,k,i)=>{i.d(k,{u:()=>a});var C=i(36895),t=i(94650),m=i(72506);function d(n,g){if(1&n&&(t.O4$(),t.TgZ(0,"svg",4),t._UZ(1,"path",5),t.qZA()),2&n){const r=t.oxw();t.ekj("fill-neutral-gray-1",r.disabled)("stroke-neutral-gray-3",r.disabled)("w-5","medium"==r.size)("h-5","medium"==r.size)}}function y(n,g){if(1&n&&(t.O4$(),t.TgZ(0,"svg",4),t._UZ(1,"path",6)(2,"path",7),t.qZA()),2&n){const r=t.oxw();t.ekj("!text-neutral-gray-3",r.disabled)("w-5","medium"==r.size)("h-5","medium"==r.size)}}const s=["*"];let a=(()=>{class n{constructor(r){this.cfIconRegister=r,this.checked=!1,this.size="small",this.disabled=!1,this.checkChange=new t.vpe,r.registerIcons([m.aCG,m.llu])}toggle(){this.checked=!this.checked,this.checkChange.emit(this.checked)}}return n.\u0275fac=function(r){return new(r||n)(t.Y36(m.KNP))},n.\u0275cmp=t.Xpm({type:n,selectors:[["cf-checkbox"]],inputs:{checked:"checked",size:"size",disabled:"disabled"},outputs:{checkChange:"checkChange"},standalone:!0,features:[t.jDz],ngContentSelectors:s,decls:5,vars:8,consts:[[1,"flex","items-center","gap-x-2","hover","text-neutral-gray-4","hover:text-primary-2-4","focus:text-primary-2-4","cursor-pointer",3,"click"],["xmlns","http://www.w3.org/2000/svg","width","16","height","16","fill","none","viewBox","0 0 16 16",3,"fill-neutral-gray-1","stroke-neutral-gray-3","w-5","h-5",4,"ngIf"],["xmlns","http://www.w3.org/2000/svg","width","16","height","16","fill","none","viewBox","0 0 16 16",3,"!text-neutral-gray-3","w-5","h-5",4,"ngIf"],[1,"text-body-md","text-neutral-black"],["xmlns","http://www.w3.org/2000/svg","width","16","height","16","fill","none","viewBox","0 0 16 16"],["stroke","currentColor","stroke-linejoin","round","stroke-width","1.5","d","M11.333 2.667H4.667a2 2 0 0 0-2 2v6.666a2 2 0 0 0 2 2h6.666a2 2 0 0 0 2-2V4.667a2 2 0 0 0-2-2Z"],["fill","currentColor","stroke","currentColor","stroke-linejoin","round","stroke-width","1.5","d","M11.333 2.667H4.667a2 2 0 0 0-2 2v6.666a2 2 0 0 0 2 2h6.666a2 2 0 0 0 2-2V4.667a2 2 0 0 0-2-2Z"],["stroke","#fff","stroke-linecap","round","stroke-linejoin","round","d","M11.333 5.333 7.133 10l-1.8-2"]],template:function(r,e){1&r&&(t.F$t(),t.TgZ(0,"div",0),t.NdJ("click",function(){return e.toggle()}),t.YNc(1,d,2,8,"svg",1),t.YNc(2,y,3,6,"svg",2),t.TgZ(3,"div",3),t.Hsn(4),t.qZA()()),2&r&&(t.ekj("!text-primary-2-4",e.checked)("pointer-events-none",e.disabled),t.xp6(1),t.Q6J("ngIf",!e.checked),t.xp6(1),t.Q6J("ngIf",e.checked),t.xp6(1),t.ekj("!text-neutral-gray-4",e.disabled))},dependencies:[m.AxE,C.O5],encapsulation:2,changeDetection:0}),n})()}}]);