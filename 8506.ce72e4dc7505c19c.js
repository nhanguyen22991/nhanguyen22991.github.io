"use strict";(self.webpackChunkcheapflightclient=self.webpackChunkcheapflightclient||[]).push([[8506],{68730:(f,l,t)=>{t.d(l,{R:()=>y});var c=t(15861),h=t(88001),i=t(77579),e=t(2462),m=t(51588),d=t(94650);let y=(()=>{class a{constructor(o){this.appConfig=o,this.clientKey=(0,m.Z)(),this.paymentEvent$=new i.x,console.log("Init btc socket payment service")}initializeWebSocketConnection(){(!this.socket||this.socket.disconnected)&&(this.socket=(0,e.io)(this.appConfig.socketUrl+"btc-notification",{extraHeaders:{clientKey:this.clientKey}}),this.socket.on("connect",()=>{console.log("Socket connected")}),this.socket.on("receive_message",o=>{console.log("Nh\u1eadn \u0111\u01b0\u1ee3c tin nh\u1eafn : ",o),this.sendMessageToUser(o)}),this.socket.on("disconnect",()=>{console.log("Socket disconnected")}))}sendMessageToUser(o){var s=this;return(0,c.Z)(function*(){1001===o.cmd&&(yield s.ProgressPaymentSuccess(o))})()}ProgressPaymentSuccess(o){var s=this;return(0,c.Z)(function*(){s.paymentEvent$.next(o)})()}}return a.\u0275fac=function(o){return new(o||a)(d.LFG(h.qB))},a.\u0275prov=d.Yz7({token:a,factory:a.\u0275fac,providedIn:"root"}),a})()},8506:(f,l,t)=>{t.r(l),t.d(l,{BlankLayoutComponent:()=>d,bankLayoutRoutes:()=>a});var c=t(36895),h=t(82761),i=t(62331),e=t(94650),m=t(68730);let d=(()=>{class n{constructor(s){this.btcSocketPaymentSvc=s,this.btcSocketPaymentSvc.initializeWebSocketConnection()}}return n.\u0275fac=function(s){return new(s||n)(e.Y36(m.R))},n.\u0275cmp=e.Xpm({type:n,selectors:[["blank-layout"]],standalone:!0,features:[e.jDz],decls:3,vars:3,consts:[[1,"md:hidden",3,"styleClass"],[1,"hidden","md:block",3,"styleClass","offsetTop"]],template:function(s,C){1&s&&e._UZ(0,"router-outlet")(1,"cf-toast",0)(2,"cf-toast",1),2&s&&(e.xp6(1),e.Q6J("styleClass","z-[1001]"),e.xp6(1),e.Q6J("styleClass","z-[1001] !right-0 !left-0 !w-full px-2")("offsetTop",10))},dependencies:[c.ez,h.Bz,h.lC,i.hj],styles:["[_nghost-%COMP%]{display:block}"]}),n})();const a=[{path:"search",loadComponent:()=>Promise.all([t.e(4143),t.e(4703),t.e(4470),t.e(7345)]).then(t.bind(t,97345)).then(n=>n.BtcSearchComponent)},{path:"result-search",loadComponent:()=>Promise.all([t.e(4143),t.e(836),t.e(4703),t.e(6978),t.e(4470),t.e(5987),t.e(4813)]).then(t.bind(t,34813)).then(n=>n.BtcResultListComponent)},{path:"pax-info",loadComponent:()=>Promise.all([t.e(4143),t.e(836),t.e(4703),t.e(6978),t.e(4470),t.e(5987),t.e(4813)]).then(t.bind(t,34813)).then(n=>n.BtcResultPaxComponent)},{path:"order/:id",loadComponent:()=>Promise.all([t.e(4143),t.e(836),t.e(4703),t.e(6978),t.e(4470),t.e(5987),t.e(4813)]).then(t.bind(t,34813)).then(n=>n.BtcResultBookingComponent),canDeactivate:[(()=>{class n{canDeactivate(s){return!s.canDeactivate||s.canDeactivate()}}return n.\u0275fac=function(s){return new(s||n)},n.\u0275prov=e.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})()]},{path:"order",loadComponent:()=>Promise.all([t.e(4143),t.e(836),t.e(4703),t.e(6978),t.e(4470),t.e(5987),t.e(4813)]).then(t.bind(t,34813)).then(n=>n.BtcResultBookingComponent)}]}}]);