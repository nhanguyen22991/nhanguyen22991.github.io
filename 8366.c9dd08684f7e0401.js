"use strict";(self.webpackChunkcheapflightclient=self.webpackChunkcheapflightclient||[]).push([[8366],{57085:(g,c,a)=>{a.d(c,{bz:()=>o,fJ:()=>u,$K:()=>e,DW:()=>l,Ab:()=>d,aV:()=>p});const o=(t,i)=>t.get(i);var n=a(15439);const e=(t,i)=>s=>{const r=s.controls[t];if(!r.value)return;const f=n(i).startOf("day").add(0,"hours").toDate().getTime(),_=n(r.value).toDate();_.setFullYear(_.getFullYear()+2);const D=_.getTime(),m=n(r.value).toDate();m.setFullYear(m.getFullYear()+12);const h=m.getTime();f<=h&&f>D?r.setErrors(null):f<=h?r.setErrors({DoBChildUnder:!0}):f>D&&r.setErrors({DoBChildUpper:!0})},l=(t,i)=>s=>{const r=s.controls[t];if(!r.value)return;const f=n(i).startOf("day").add(0,"hours").toDate().getTime(),_=n(r.value).toDate().getTime(),D=n(r.value).toDate();D.setFullYear(D.getFullYear()+2);const m=D.getTime();r.setErrors(f<=m&&f>_?null:{DoBInfant:!0})},u=(t,i)=>s=>{const r=s.controls[t];if(!r.value)return;const f=n(i).startOf("day").add(0,"hours").toDate().getTime(),_=n(r.value).toDate().getTime();r.setErrors(f-_>=378683424e3?null:{DoBAdult:!0})},d=t=>i=>{const s=i.controls[t];s.value&&s.setErrors(""!=s.value?null:{required:!0})},p=()=>t=>{let i=[];for(let s=0;s<t.controls.infantPassenger.controls.length;s++){const r=t.controls.infantPassenger.at(s).controls.parentIndex.value;i.push({index:s,parentIndex:r})}for(let s=0;s<t.controls.infantPassenger.controls.length;s++){const r=t.controls.infantPassenger.at(s).controls.parentIndex.value;i.filter(_=>_.parentIndex===r).length>1?t.controls.infantPassenger.at(s).controls.parentIndex.setErrors({ParentInfantDupplicate:!0}):t.controls.infantPassenger.at(s).controls.parentIndex.setErrors(null)}}},25614:(g,c,a)=>{a.d(c,{j:()=>n});var o=a(94650);let n=(()=>{class e{constructor(){this.regex=new RegExp(/^[a-zA-Z0-9]*$/)}onInput(u){const d=u.target.value;this.regex.test(d)||(u.target.value=d.replace(/[^a-zA-Z0-9]*/g,""))}}return e.\u0275fac=function(u){return new(u||e)},e.\u0275dir=o.lG2({type:e,selectors:[["","CfAlphanumeric",""]],hostBindings:function(u,d){1&u&&o.NdJ("input",function(t){return d.onInput(t)})},standalone:!0}),e})()},40833:(g,c,a)=>{function o(n,e){if(e.length<n)throw new TypeError(n+" argument"+(n>1?"s":"")+" required, but only "+e.length+" present")}a.d(c,{Z:()=>o})},91998:(g,c,a)=>{function o(n){if(null===n||!0===n||!1===n)return NaN;var e=Number(n);return isNaN(e)?e:e<0?Math.ceil(e):Math.floor(e)}a.d(c,{Z:()=>o})},35650:(g,c,a)=>{a.d(c,{Z:()=>l});var o=a(91998),n=a(80953),e=a(40833);function l(u,d){(0,e.Z)(2,arguments);var p=(0,n.Z)(u),t=(0,o.Z)(d);return isNaN(t)?new Date(NaN):(t&&p.setDate(p.getDate()+t),p)}},43201:(g,c,a)=>{a.d(c,{Z:()=>u});var o=a(91998),n=a(80953),e=a(40833);function u(d,p){return(0,e.Z)(2,arguments),function l(d,p){(0,e.Z)(2,arguments);var t=(0,n.Z)(d),i=(0,o.Z)(p);if(isNaN(i))return new Date(NaN);if(!i)return t;var s=t.getDate(),r=new Date(t.getTime());return r.setMonth(t.getMonth()+i+1,0),s>=r.getDate()?r:(t.setFullYear(r.getFullYear(),r.getMonth(),s),t)}(d,12*(0,o.Z)(p))}},80953:(g,c,a)=>{a.d(c,{Z:()=>e});var o=a(86),n=a(40833);function e(l){(0,n.Z)(1,arguments);var u=Object.prototype.toString.call(l);return l instanceof Date||"object"===(0,o.Z)(l)&&"[object Date]"===u?new Date(l.getTime()):"number"==typeof l||"[object Number]"===u?new Date(l):(("string"==typeof l||"[object String]"===u)&&typeof console<"u"&&(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"),console.warn((new Error).stack)),new Date(NaN))}},86:(g,c,a)=>{function o(n){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(n)}a.d(c,{Z:()=>o})}}]);