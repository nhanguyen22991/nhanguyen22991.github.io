"use strict";(self.webpackChunkcheapflightclient=self.webpackChunkcheapflightclient||[]).push([[2225],{2225:(q,H,u)=>{u.d(H,{yD:()=>Q,KD:()=>X});var A=u(80529),z=u(88001),n=u(54004),s=u(50494),t=u(97582),e=u(87067),g=u(43429);class C{}(0,t.gn)([(0,e.C)()],C.prototype,"status",void 0),(0,t.gn)([(0,g.D)(()=>y),(0,e.C)()],C.prototype,"data",void 0),(0,t.gn)([(0,e.C)()],C.prototype,"objectError",void 0),(0,t.gn)([(0,e.C)()],C.prototype,"success",void 0);class f{}(0,t.gn)([(0,e.C)()],f.prototype,"status",void 0),(0,t.gn)([(0,g.D)(()=>y),(0,e.C)()],f.prototype,"data",void 0),(0,t.gn)([(0,e.C)()],f.prototype,"objectError",void 0),(0,t.gn)([(0,e.C)()],f.prototype,"success",void 0);class y{}(0,t.gn)([(0,e.C)()],y.prototype,"id",void 0),(0,t.gn)([(0,e.C)()],y.prototype,"name",void 0),(0,t.gn)([(0,e.C)()],y.prototype,"code",void 0),(0,t.gn)([(0,e.C)()],y.prototype,"type",void 0),(0,t.gn)([(0,e.C)()],y.prototype,"defaultPermission",void 0),(0,t.gn)([(0,g.D)(()=>P),(0,e.C)()],y.prototype,"advanceRole",void 0),(0,t.gn)([(0,e.C)()],y.prototype,"roleCanAdvances",void 0),(0,t.gn)([(0,e.C)()],y.prototype,"roleIds",void 0),(0,t.gn)([(0,e.C)()],y.prototype,"titleIdsCanUp",void 0),(0,t.gn)([(0,e.C)()],y.prototype,"titleIdsCanDown",void 0);class P{}(0,t.gn)([(0,e.C)()],P.prototype,"id",void 0),(0,t.gn)([(0,e.C)()],P.prototype,"name",void 0);class S{}(0,t.gn)([(0,e.C)()],S.prototype,"status",void 0),(0,t.gn)([(0,g.D)(()=>F),(0,e.C)()],S.prototype,"data",void 0),(0,t.gn)([(0,e.C)()],S.prototype,"objectError",void 0),(0,t.gn)([(0,e.C)()],S.prototype,"success",void 0);class F{}(0,t.gn)([(0,e.C)()],F.prototype,"name",void 0),(0,t.gn)([(0,e.C)()],F.prototype,"code",void 0);var E=u(94650);const v={headers:new A.WM({"Content-Type":"application/json"})};let Q=(()=>{class r{constructor(o,i){this.http=o,this.appConfig=i}getAllTitle(){return this.http.get(this.appConfig.apiUrl+"title/all-titles",v).pipe((0,n.U)(o=>(0,s.yE)(C,o,{excludeExtraneousValues:!0})))}getAllEmployeeTitleForManage(){return this.http.get(this.appConfig.apiUrl+"title/all-employee-titles-for-manage",v).pipe((0,n.U)(o=>(0,s.yE)(C,o,{excludeExtraneousValues:!0})))}getAllEmployeeTitleForCreateUser(){return this.http.get(this.appConfig.apiUrl+"title/all-employee-titles-for-create-user",v).pipe((0,n.U)(o=>(0,s.yE)(C,o,{excludeExtraneousValues:!0})))}getAllAgentTitleForManage(){return this.http.get(this.appConfig.apiUrl+"title/all-agent-titles-for-manage",v).pipe((0,n.U)(o=>(0,s.yE)(C,o,{excludeExtraneousValues:!0})))}getAllAgentTitleForCreateUser(){return this.http.get(this.appConfig.apiUrl+"title/all-agent-titles-for-create-user",v).pipe((0,n.U)(o=>(0,s.yE)(C,o,{excludeExtraneousValues:!0})))}getTitle(o){return this.http.post(this.appConfig.apiUrl+"title/get-title",JSON.stringify({id:o}),v).pipe((0,n.U)(i=>(0,s.yE)(f,i,{excludeExtraneousValues:!0})))}createTitle(o){return this.http.post(this.appConfig.apiUrl+"title/create-title",JSON.stringify(o),v).pipe((0,n.U)(i=>(0,s.yE)(f,i,{excludeExtraneousValues:!0})))}updateTitle(o){return this.http.post(this.appConfig.apiUrl+"title/update-title",JSON.stringify(o),v).pipe((0,n.U)(i=>(0,s.yE)(f,i,{excludeExtraneousValues:!0})))}getAllTitleType(){return this.http.get(this.appConfig.apiUrl+"title/all-title-type",v).pipe((0,n.U)(o=>(0,s.yE)(S,o,{excludeExtraneousValues:!0})))}}return r.\u0275fac=function(o){return new(o||r)(E.LFG(A.eN),E.LFG(z.qB))},r.\u0275prov=E.Yz7({token:r,factory:r.\u0275fac,providedIn:"root"}),r})();class N{}(0,t.gn)([(0,e.C)()],N.prototype,"status",void 0),(0,t.gn)([(0,g.D)(()=>p),(0,e.C)()],N.prototype,"data",void 0),(0,t.gn)([(0,e.C)()],N.prototype,"objectError",void 0),(0,t.gn)([(0,e.C)()],N.prototype,"success",void 0);class p{}(0,t.gn)([(0,e.C)()],p.prototype,"id",void 0),(0,t.gn)([(0,e.C)()],p.prototype,"avatar",void 0),(0,t.gn)([(0,e.C)()],p.prototype,"avatarUrl",void 0),(0,t.gn)([(0,e.C)()],p.prototype,"displayName",void 0),(0,t.gn)([(0,e.C)()],p.prototype,"identify",void 0),(0,t.gn)([(0,e.C)()],p.prototype,"type",void 0),(0,t.gn)([(0,e.C)()],p.prototype,"titleId",void 0),(0,t.gn)([(0,e.C)()],p.prototype,"titleName",void 0),(0,t.gn)([(0,e.C)()],p.prototype,"titleType",void 0),(0,t.gn)([(0,e.C)()],p.prototype,"state",void 0),(0,t.gn)([(0,e.C)()],p.prototype,"email",void 0),(0,t.gn)([(0,e.C)()],p.prototype,"phoneArea",void 0),(0,t.gn)([(0,e.C)()],p.prototype,"phone",void 0),(0,t.gn)([(0,e.C)()],p.prototype,"birthday",void 0),(0,t.gn)([(0,e.C)()],p.prototype,"gender",void 0),(0,t.gn)([(0,e.C)()],p.prototype,"dateCreated",void 0),(0,t.gn)([(0,e.C)()],p.prototype,"identifyId",void 0),(0,t.gn)([(0,e.C)()],p.prototype,"identifyDateProvide",void 0),(0,t.gn)([(0,e.C)()],p.prototype,"identifyPlaceProvide",void 0),(0,t.gn)([(0,e.C)()],p.prototype,"frontImageIdentify",void 0),(0,t.gn)([(0,e.C)()],p.prototype,"backImageIdentify",void 0),(0,t.gn)([(0,e.C)()],p.prototype,"business",void 0),(0,t.gn)([(0,e.C)()],p.prototype,"agentName",void 0),(0,t.gn)([(0,e.C)()],p.prototype,"representative",void 0),(0,t.gn)([(0,e.C)()],p.prototype,"bankAccount",void 0),(0,t.gn)([(0,e.C)()],p.prototype,"nameOwnAccount",void 0),(0,t.gn)([(0,e.C)()],p.prototype,"bankName",void 0),(0,t.gn)([(0,e.C)()],p.prototype,"bankBranchName",void 0),(0,t.gn)([(0,e.C)()],p.prototype,"companyCode",void 0),(0,t.gn)([(0,e.C)()],p.prototype,"companyName",void 0),(0,t.gn)([(0,e.C)()],p.prototype,"companyAddress",void 0),(0,t.gn)([(0,e.C)()],p.prototype,"defaultPermission",void 0),(0,t.gn)([(0,e.C)()],p.prototype,"roleIds",void 0),(0,t.gn)([(0,g.D)(()=>k),(0,e.C)()],p.prototype,"advanceRole",void 0),(0,t.gn)([(0,e.C)()],p.prototype,"titlesCanChange",void 0),(0,t.gn)([(0,e.C)()],p.prototype,"discountPaymentType",void 0),(0,t.gn)([(0,e.C)()],p.prototype,"maxNegative",void 0),(0,t.gn)([(0,e.C)()],p.prototype,"balance",void 0),(0,t.gn)([(0,e.C)()],p.prototype,"facebookContact",void 0),(0,t.gn)([(0,e.C)()],p.prototype,"referralChannel",void 0),(0,t.gn)([(0,e.C)()],p.prototype,"note",void 0),(0,t.gn)([(0,e.C)()],p.prototype,"domainKey",void 0),(0,t.gn)([(0,e.C)()],p.prototype,"belongSaleInfo",void 0),(0,t.gn)([(0,e.C)()],p.prototype,"bookerId",void 0);class k{}(0,t.gn)([(0,e.C)()],k.prototype,"id",void 0),(0,t.gn)([(0,e.C)()],k.prototype,"name",void 0);class D{}(0,t.gn)([(0,e.C)()],D.prototype,"status",void 0),(0,t.gn)([(0,g.D)(()=>h),(0,e.C)()],D.prototype,"data",void 0),(0,t.gn)([(0,e.C)()],D.prototype,"objectError",void 0),(0,t.gn)([(0,e.C)()],D.prototype,"success",void 0);class h{}(0,t.gn)([(0,e.C)()],h.prototype,"id",void 0),(0,t.gn)([(0,e.C)()],h.prototype,"name",void 0),(0,t.gn)([(0,e.C)()],h.prototype,"address",void 0),(0,t.gn)([(0,e.C)()],h.prototype,"email",void 0),(0,t.gn)([(0,e.C)()],h.prototype,"website",void 0),(0,t.gn)([(0,e.C)()],h.prototype,"phone",void 0),(0,t.gn)([(0,e.C)()],h.prototype,"logoImage",void 0);class I{}(0,t.gn)([(0,e.C)()],I.prototype,"status",void 0),(0,t.gn)([(0,g.D)(()=>V),(0,e.C)()],I.prototype,"data",void 0),(0,t.gn)([(0,e.C)()],I.prototype,"objectError",void 0),(0,t.gn)([(0,e.C)()],I.prototype,"success",void 0);class V{}(0,t.gn)([(0,e.C)()],V.prototype,"id",void 0),(0,t.gn)([(0,e.C)()],V.prototype,"name",void 0),(0,t.gn)([(0,e.C)()],V.prototype,"username",void 0);class x{}(0,t.gn)([(0,e.C)()],x.prototype,"status",void 0),(0,t.gn)([(0,e.C)()],x.prototype,"data",void 0),(0,t.gn)([(0,e.C)()],x.prototype,"objectError",void 0),(0,t.gn)([(0,e.C)()],x.prototype,"success",void 0);class b{}(0,t.gn)([(0,e.C)()],b.prototype,"status",void 0),(0,t.gn)([(0,g.D)(()=>K),(0,e.C)()],b.prototype,"data",void 0),(0,t.gn)([(0,e.C)()],b.prototype,"objectError",void 0),(0,t.gn)([(0,e.C)()],b.prototype,"success",void 0);class K{}(0,t.gn)([(0,e.C)()],K.prototype,"description",void 0);class U{}(0,t.gn)([(0,e.C)()],U.prototype,"status",void 0),(0,t.gn)([(0,e.C)()],U.prototype,"data",void 0),(0,t.gn)([(0,e.C)()],U.prototype,"objectError",void 0),(0,t.gn)([(0,e.C)()],U.prototype,"success",void 0);class T{}(0,t.gn)([(0,e.C)()],T.prototype,"status",void 0),(0,t.gn)([(0,g.D)(()=>d),(0,e.C)()],T.prototype,"data",void 0),(0,t.gn)([(0,e.C)()],T.prototype,"objectError",void 0),(0,t.gn)([(0,e.C)()],T.prototype,"success",void 0);class d{getGender(){switch(this.gender){case"MALE":return"Nam";case"FEMALE":return"N\u1eef";default:return""}}}(0,t.gn)([(0,e.C)()],d.prototype,"id",void 0),(0,t.gn)([(0,e.C)()],d.prototype,"avatar",void 0),(0,t.gn)([(0,e.C)()],d.prototype,"avatarUrl",void 0),(0,t.gn)([(0,e.C)()],d.prototype,"birthday",void 0),(0,t.gn)([(0,e.C)()],d.prototype,"dateCreated",void 0),(0,t.gn)([(0,e.C)()],d.prototype,"displayName",void 0),(0,t.gn)([(0,e.C)()],d.prototype,"email",void 0),(0,t.gn)([(0,e.C)()],d.prototype,"gender",void 0),(0,t.gn)([(0,e.C)()],d.prototype,"identify",void 0),(0,t.gn)([(0,e.C)()],d.prototype,"identifyId",void 0),(0,t.gn)([(0,e.C)()],d.prototype,"identifyDateProvide",void 0),(0,t.gn)([(0,e.C)()],d.prototype,"identifyPlaceProvide",void 0),(0,t.gn)([(0,e.C)()],d.prototype,"frontImageIdentify",void 0),(0,t.gn)([(0,e.C)()],d.prototype,"backImageIdentify",void 0),(0,t.gn)([(0,e.C)()],d.prototype,"phoneArea",void 0),(0,t.gn)([(0,e.C)()],d.prototype,"phone",void 0),(0,t.gn)([(0,e.C)()],d.prototype,"state",void 0),(0,t.gn)([(0,e.C)()],d.prototype,"titleId",void 0),(0,t.gn)([(0,e.C)()],d.prototype,"titleName",void 0),(0,t.gn)([(0,e.C)()],d.prototype,"titleType",void 0),(0,t.gn)([(0,e.C)()],d.prototype,"advanceRole",void 0),(0,t.gn)([(0,g.D)(()=>O),(0,e.C)()],d.prototype,"titlesCanChange",void 0),(0,t.gn)([(0,e.C)()],d.prototype,"defaultPermission",void 0),(0,t.gn)([(0,e.C)()],d.prototype,"roleIds",void 0);class O{}(0,t.gn)([(0,e.C)()],O.prototype,"id",void 0),(0,t.gn)([(0,e.C)()],O.prototype,"name",void 0),(0,t.gn)([(0,e.C)()],O.prototype,"defaultPermissions",void 0),(0,t.gn)([(0,g.D)(()=>B),(0,e.C)()],O.prototype,"advanceRoles",void 0);class B{}(0,t.gn)([(0,e.C)()],B.prototype,"id",void 0),(0,t.gn)([(0,e.C)()],B.prototype,"name",void 0);class Y{}(0,t.gn)([(0,e.C)()],Y.prototype,"id",void 0),(0,t.gn)([(0,e.C)()],Y.prototype,"name",void 0);class m{}(0,t.gn)([(0,e.C)()],m.prototype,"status",void 0),(0,t.gn)([(0,g.D)(()=>J),(0,e.C)()],m.prototype,"data",void 0),(0,t.gn)([(0,e.C)()],m.prototype,"objectError",void 0),(0,t.gn)([(0,e.C)()],m.prototype,"success",void 0);class J{}(0,t.gn)([(0,e.C)()],J.prototype,"avatarUploadUrl",void 0),(0,t.gn)([(0,e.C)()],J.prototype,"cccdBackUploadUrl",void 0),(0,t.gn)([(0,e.C)()],J.prototype,"cccdFontUploadUrl",void 0);class c{}(0,t.gn)([(0,e.C)()],c.prototype,"status",void 0),(0,t.gn)([(0,g.D)(()=>l),(0,e.C)()],c.prototype,"data",void 0),(0,t.gn)([(0,e.C)()],c.prototype,"objectError",void 0),(0,t.gn)([(0,e.C)()],c.prototype,"success",void 0);class R{}(0,t.gn)([(0,e.C)()],R.prototype,"status",void 0),(0,t.gn)([(0,g.D)(()=>l),(0,e.C)()],R.prototype,"data",void 0),(0,t.gn)([(0,e.C)()],R.prototype,"objectError",void 0),(0,t.gn)([(0,e.C)()],R.prototype,"success",void 0);class l{}(0,t.gn)([(0,e.C)()],l.prototype,"userId",void 0),(0,t.gn)([(0,g.D)(()=>M),(0,e.C)()],l.prototype,"roles",void 0),(0,t.gn)([(0,e.C)()],l.prototype,"state",void 0),(0,t.gn)([(0,e.C)()],l.prototype,"balance",void 0),(0,t.gn)([(0,g.D)(()=>w),(0,e.C)()],l.prototype,"createdBy",void 0),(0,t.gn)([(0,g.D)(()=>L),(0,e.C)()],l.prototype,"manageBy",void 0),(0,t.gn)([(0,g.D)(()=>G),(0,e.C)()],l.prototype,"belongSale",void 0),(0,t.gn)([(0,e.C)()],l.prototype,"displayName",void 0),(0,t.gn)([(0,e.C)()],l.prototype,"userName",void 0),(0,t.gn)([(0,e.C)()],l.prototype,"address",void 0),(0,t.gn)([(0,e.C)()],l.prototype,"description",void 0),(0,t.gn)([(0,e.C)()],l.prototype,"avatar",void 0),(0,t.gn)([(0,e.C)()],l.prototype,"phone",void 0),(0,t.gn)([(0,e.C)()],l.prototype,"phoneArea",void 0),(0,t.gn)([(0,e.C)()],l.prototype,"email",void 0),(0,t.gn)([(0,g.D)(()=>j),(0,e.C)()],l.prototype,"title",void 0),(0,t.gn)([(0,e.C)()],l.prototype,"dateCreated",void 0);class M{}(0,t.gn)([(0,e.C)()],M.prototype,"id",void 0),(0,t.gn)([(0,e.C)()],M.prototype,"name",void 0);class w{}(0,t.gn)([(0,e.C)()],w.prototype,"id",void 0),(0,t.gn)([(0,e.C)()],w.prototype,"name",void 0);class L{}(0,t.gn)([(0,e.C)()],L.prototype,"id",void 0),(0,t.gn)([(0,e.C)()],L.prototype,"name",void 0);class G{}(0,t.gn)([(0,e.C)()],G.prototype,"id",void 0),(0,t.gn)([(0,e.C)()],G.prototype,"name",void 0);class j{}(0,t.gn)([(0,e.C)()],j.prototype,"id",void 0),(0,t.gn)([(0,e.C)()],j.prototype,"name",void 0),(0,t.gn)([(0,e.C)()],j.prototype,"code",void 0);const a={headers:new A.WM({"Content-Type":"application/json"})};let X=(()=>{class r{constructor(o,i){this.http=o,this.appConfig=i}getAllUser(){return this.http.get(this.appConfig.apiUrl+"user/get-all-users",a).pipe((0,n.U)(o=>(0,s.yE)(c,o,{excludeExtraneousValues:!0})))}getAllAgentUserForBooking(){return this.http.get(this.appConfig.apiUrl+"user/get-all-agent-belong-for-booking",a).pipe((0,n.U)(o=>(0,s.yE)(c,o,{excludeExtraneousValues:!0})))}getAllAgentStatistic(){return this.http.get(this.appConfig.apiUrl+"user/get-all-agent-belong-for-statistic",a).pipe((0,n.U)(o=>(0,s.yE)(c,o,{excludeExtraneousValues:!0})))}getAllAgentUser(o){return this.http.post(this.appConfig.apiUrl+"user/get-all-agent-users",JSON.stringify(o),a).pipe((0,n.U)(i=>(0,s.yE)(c,i,{excludeExtraneousValues:!0})))}getAllEmployeeUser(o){return this.http.post(this.appConfig.apiUrl+"user/get-all-employee-users",JSON.stringify(o),a).pipe((0,n.U)(i=>(0,s.yE)(c,i,{excludeExtraneousValues:!0})))}getUrlUploadImage(o){return this.http.post(this.appConfig.apiUrl+"user/get-url-upload-image-user",JSON.stringify(o),a).pipe((0,n.U)(i=>(0,s.yE)(m,i,{excludeExtraneousValues:!0})))}getUrlUploadAvatar(o){return this.http.post(this.appConfig.apiUrl+"user/get-url-upload-avatar",JSON.stringify(o),a).pipe((0,n.U)(i=>(0,s.yE)(m,i,{excludeExtraneousValues:!0})))}getIdentifyUrl(o){return this.http.post(this.appConfig.apiUrl+"user/get-url-identify-user",JSON.stringify({userId:o}),a).pipe((0,n.U)(i=>(0,s.yE)(m,i,{excludeExtraneousValues:!0})))}checkUsernameExist(o){return this.http.post(this.appConfig.apiUrl+"user/check-username-exist",JSON.stringify({username:o}),a).pipe((0,n.U)(i=>(0,s.yE)(x,i,{excludeExtraneousValues:!0})))}createAgentUser(o){return this.http.post(this.appConfig.apiUrl+"user/create-agent-user",JSON.stringify(o),a).pipe((0,n.U)(i=>(0,s.yE)(x,i,{excludeExtraneousValues:!0})))}createEmployeeUser(o){return this.http.post(this.appConfig.apiUrl+"user/create-employee-user",JSON.stringify(o),a).pipe((0,n.U)(i=>(0,s.yE)(b,i,{excludeExtraneousValues:!0})))}uploadfileAWSS3(o,i,Z){const $=new A.WM({"Content-Type":i});return this.http.put(o,Z,{headers:$})}getAutocompleteUser(){return this.http.get(this.appConfig.apiUrl+"user/all-short-user",a).pipe((0,n.U)(o=>(0,s.yE)(I,o,{excludeExtraneousValues:!0})))}updateAccountStatus(o){return this.http.post(this.appConfig.apiUrl+"user/update-account-status",JSON.stringify(o),a).pipe((0,n.U)(i=>(0,s.yE)(U,i,{excludeExtraneousValues:!0})))}deleteAgentAccount(o){return this.http.post(this.appConfig.apiUrl+"user/delete-agent-account",JSON.stringify({id:o}),a).pipe((0,n.U)(i=>(0,s.yE)(U,i,{excludeExtraneousValues:!0})))}deleteEmployeeAccount(o){return this.http.post(this.appConfig.apiUrl+"user/delete-employee-account",JSON.stringify({id:o}),a).pipe((0,n.U)(i=>(0,s.yE)(U,i,{excludeExtraneousValues:!0})))}getAgentInfo(o){return this.http.post(this.appConfig.apiUrl+"user/agent-info",JSON.stringify(o),a).pipe((0,n.U)(i=>(0,s.yE)(D,i,{excludeExtraneousValues:!0})))}getEmployeeDetail(o){return this.http.post(this.appConfig.apiUrl+"user/get-employee-detail",JSON.stringify(o),a).pipe((0,n.U)(i=>(0,s.yE)(T,i,{excludeExtraneousValues:!0})))}getAgentDetail(o){return this.http.post(this.appConfig.apiUrl+"user/get-agent-detail",JSON.stringify(o),a).pipe((0,n.U)(i=>(0,s.yE)(N,i,{excludeExtraneousValues:!0})))}updateAgentUserInfo(o){return this.http.post(this.appConfig.apiUrl+"user/update-agent-user-info",JSON.stringify(o),a)}updateAgentUserPermisson(o){return this.http.post(this.appConfig.apiUrl+"user/update-agent-user-permission",JSON.stringify(o),a)}updateEmployeeUserInfo(o){return this.http.post(this.appConfig.apiUrl+"user/update-employee-user-info",JSON.stringify(o),a)}updateEmployeeUserPermission(o){return this.http.post(this.appConfig.apiUrl+"user/update-employee-user-permission",JSON.stringify(o),a)}getAgentInfoByUserName(o){return this.http.post(this.appConfig.apiUrl+"user/agent-info-by-username",JSON.stringify(o),a)}getUserDetail(){return this.http.get(this.appConfig.apiUrl+"user/get-user-detail",a)}updateUser(o){return this.http.put(this.appConfig.apiUrl+"user/update-user",JSON.stringify(o),a)}getBelongSale(){return this.http.get(this.appConfig.apiUrl+"user/get-info-create-agent",a)}changePassword(o){return this.http.post(this.appConfig.apiUrl+"user/change-password",JSON.stringify(o),a)}}return r.\u0275fac=function(o){return new(o||r)(E.LFG(A.eN),E.LFG(z.qB))},r.\u0275prov=E.Yz7({token:r,factory:r.\u0275fac,providedIn:"root"}),r})()}}]);