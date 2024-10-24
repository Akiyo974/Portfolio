var EE=Object.defineProperty;var TE=(n,e,t)=>e in n?EE(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t;var Sr=(n,e,t)=>TE(n,typeof e!="symbol"?e+"":e,t);function wE(n,e){for(var t=0;t<e.length;t++){const i=e[t];if(typeof i!="string"&&!Array.isArray(i)){for(const r in i)if(r!=="default"&&!(r in n)){const s=Object.getOwnPropertyDescriptor(i,r);s&&Object.defineProperty(n,r,s.get?s:{enumerable:!0,get:()=>i[r]})}}}return Object.freeze(Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();function AE(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var Hx={exports:{}},cd={},Gx={exports:{}},st={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Bu=Symbol.for("react.element"),CE=Symbol.for("react.portal"),RE=Symbol.for("react.fragment"),bE=Symbol.for("react.strict_mode"),PE=Symbol.for("react.profiler"),LE=Symbol.for("react.provider"),DE=Symbol.for("react.context"),NE=Symbol.for("react.forward_ref"),UE=Symbol.for("react.suspense"),IE=Symbol.for("react.memo"),OE=Symbol.for("react.lazy"),p_=Symbol.iterator;function FE(n){return n===null||typeof n!="object"?null:(n=p_&&n[p_]||n["@@iterator"],typeof n=="function"?n:null)}var Vx={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Wx=Object.assign,Xx={};function ll(n,e,t){this.props=n,this.context=e,this.refs=Xx,this.updater=t||Vx}ll.prototype.isReactComponent={};ll.prototype.setState=function(n,e){if(typeof n!="object"&&typeof n!="function"&&n!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,n,e,"setState")};ll.prototype.forceUpdate=function(n){this.updater.enqueueForceUpdate(this,n,"forceUpdate")};function jx(){}jx.prototype=ll.prototype;function Hm(n,e,t){this.props=n,this.context=e,this.refs=Xx,this.updater=t||Vx}var Gm=Hm.prototype=new jx;Gm.constructor=Hm;Wx(Gm,ll.prototype);Gm.isPureReactComponent=!0;var m_=Array.isArray,Yx=Object.prototype.hasOwnProperty,Vm={current:null},qx={key:!0,ref:!0,__self:!0,__source:!0};function $x(n,e,t){var i,r={},s=null,o=null;if(e!=null)for(i in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)Yx.call(e,i)&&!qx.hasOwnProperty(i)&&(r[i]=e[i]);var a=arguments.length-2;if(a===1)r.children=t;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];r.children=l}if(n&&n.defaultProps)for(i in a=n.defaultProps,a)r[i]===void 0&&(r[i]=a[i]);return{$$typeof:Bu,type:n,key:s,ref:o,props:r,_owner:Vm.current}}function kE(n,e){return{$$typeof:Bu,type:n.type,key:e,ref:n.ref,props:n.props,_owner:n._owner}}function Wm(n){return typeof n=="object"&&n!==null&&n.$$typeof===Bu}function zE(n){var e={"=":"=0",":":"=2"};return"$"+n.replace(/[=:]/g,function(t){return e[t]})}var g_=/\/+/g;function Hd(n,e){return typeof n=="object"&&n!==null&&n.key!=null?zE(""+n.key):e.toString(36)}function Zc(n,e,t,i,r){var s=typeof n;(s==="undefined"||s==="boolean")&&(n=null);var o=!1;if(n===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(n.$$typeof){case Bu:case CE:o=!0}}if(o)return o=n,r=r(o),n=i===""?"."+Hd(o,0):i,m_(r)?(t="",n!=null&&(t=n.replace(g_,"$&/")+"/"),Zc(r,e,t,"",function(u){return u})):r!=null&&(Wm(r)&&(r=kE(r,t+(!r.key||o&&o.key===r.key?"":(""+r.key).replace(g_,"$&/")+"/")+n)),e.push(r)),1;if(o=0,i=i===""?".":i+":",m_(n))for(var a=0;a<n.length;a++){s=n[a];var l=i+Hd(s,a);o+=Zc(s,e,t,l,r)}else if(l=FE(n),typeof l=="function")for(n=l.call(n),a=0;!(s=n.next()).done;)s=s.value,l=i+Hd(s,a++),o+=Zc(s,e,t,l,r);else if(s==="object")throw e=String(n),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Qu(n,e,t){if(n==null)return n;var i=[],r=0;return Zc(n,i,"","",function(s){return e.call(t,s,r++)}),i}function BE(n){if(n._status===-1){var e=n._result;e=e(),e.then(function(t){(n._status===0||n._status===-1)&&(n._status=1,n._result=t)},function(t){(n._status===0||n._status===-1)&&(n._status=2,n._result=t)}),n._status===-1&&(n._status=0,n._result=e)}if(n._status===1)return n._result.default;throw n._result}var Xn={current:null},Qc={transition:null},HE={ReactCurrentDispatcher:Xn,ReactCurrentBatchConfig:Qc,ReactCurrentOwner:Vm};function Kx(){throw Error("act(...) is not supported in production builds of React.")}st.Children={map:Qu,forEach:function(n,e,t){Qu(n,function(){e.apply(this,arguments)},t)},count:function(n){var e=0;return Qu(n,function(){e++}),e},toArray:function(n){return Qu(n,function(e){return e})||[]},only:function(n){if(!Wm(n))throw Error("React.Children.only expected to receive a single React element child.");return n}};st.Component=ll;st.Fragment=RE;st.Profiler=PE;st.PureComponent=Hm;st.StrictMode=bE;st.Suspense=UE;st.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=HE;st.act=Kx;st.cloneElement=function(n,e,t){if(n==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+n+".");var i=Wx({},n.props),r=n.key,s=n.ref,o=n._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=Vm.current),e.key!==void 0&&(r=""+e.key),n.type&&n.type.defaultProps)var a=n.type.defaultProps;for(l in e)Yx.call(e,l)&&!qx.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=t;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];i.children=a}return{$$typeof:Bu,type:n.type,key:r,ref:s,props:i,_owner:o}};st.createContext=function(n){return n={$$typeof:DE,_currentValue:n,_currentValue2:n,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},n.Provider={$$typeof:LE,_context:n},n.Consumer=n};st.createElement=$x;st.createFactory=function(n){var e=$x.bind(null,n);return e.type=n,e};st.createRef=function(){return{current:null}};st.forwardRef=function(n){return{$$typeof:NE,render:n}};st.isValidElement=Wm;st.lazy=function(n){return{$$typeof:OE,_payload:{_status:-1,_result:n},_init:BE}};st.memo=function(n,e){return{$$typeof:IE,type:n,compare:e===void 0?null:e}};st.startTransition=function(n){var e=Qc.transition;Qc.transition={};try{n()}finally{Qc.transition=e}};st.unstable_act=Kx;st.useCallback=function(n,e){return Xn.current.useCallback(n,e)};st.useContext=function(n){return Xn.current.useContext(n)};st.useDebugValue=function(){};st.useDeferredValue=function(n){return Xn.current.useDeferredValue(n)};st.useEffect=function(n,e){return Xn.current.useEffect(n,e)};st.useId=function(){return Xn.current.useId()};st.useImperativeHandle=function(n,e,t){return Xn.current.useImperativeHandle(n,e,t)};st.useInsertionEffect=function(n,e){return Xn.current.useInsertionEffect(n,e)};st.useLayoutEffect=function(n,e){return Xn.current.useLayoutEffect(n,e)};st.useMemo=function(n,e){return Xn.current.useMemo(n,e)};st.useReducer=function(n,e,t){return Xn.current.useReducer(n,e,t)};st.useRef=function(n){return Xn.current.useRef(n)};st.useState=function(n){return Xn.current.useState(n)};st.useSyncExternalStore=function(n,e,t){return Xn.current.useSyncExternalStore(n,e,t)};st.useTransition=function(){return Xn.current.useTransition()};st.version="18.3.1";Gx.exports=st;var re=Gx.exports;const GE=AE(re),VE=wE({__proto__:null,default:GE},[re]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var WE=re,XE=Symbol.for("react.element"),jE=Symbol.for("react.fragment"),YE=Object.prototype.hasOwnProperty,qE=WE.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,$E={key:!0,ref:!0,__self:!0,__source:!0};function Zx(n,e,t){var i,r={},s=null,o=null;t!==void 0&&(s=""+t),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(i in e)YE.call(e,i)&&!$E.hasOwnProperty(i)&&(r[i]=e[i]);if(n&&n.defaultProps)for(i in e=n.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:XE,type:n,key:s,ref:o,props:r,_owner:qE.current}}cd.Fragment=jE;cd.jsx=Zx;cd.jsxs=Zx;Hx.exports=cd;var I=Hx.exports,Qx={exports:{}},wi={},Jx={exports:{}},ey={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(n){function e(D,F){var C=D.length;D.push(F);e:for(;0<C;){var Q=C-1>>>1,se=D[Q];if(0<r(se,F))D[Q]=F,D[C]=se,C=Q;else break e}}function t(D){return D.length===0?null:D[0]}function i(D){if(D.length===0)return null;var F=D[0],C=D.pop();if(C!==F){D[0]=C;e:for(var Q=0,se=D.length,Oe=se>>>1;Q<Oe;){var V=2*(Q+1)-1,ee=D[V],ce=V+1,xe=D[ce];if(0>r(ee,C))ce<se&&0>r(xe,ee)?(D[Q]=xe,D[ce]=C,Q=ce):(D[Q]=ee,D[V]=C,Q=V);else if(ce<se&&0>r(xe,C))D[Q]=xe,D[ce]=C,Q=ce;else break e}}return F}function r(D,F){var C=D.sortIndex-F.sortIndex;return C!==0?C:D.id-F.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;n.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();n.unstable_now=function(){return o.now()-a}}var l=[],u=[],c=1,f=null,d=3,p=!1,v=!1,g=!1,m=typeof setTimeout=="function"?setTimeout:null,h=typeof clearTimeout=="function"?clearTimeout:null,x=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function _(D){for(var F=t(u);F!==null;){if(F.callback===null)i(u);else if(F.startTime<=D)i(u),F.sortIndex=F.expirationTime,e(l,F);else break;F=t(u)}}function y(D){if(g=!1,_(D),!v)if(t(l)!==null)v=!0,B(w);else{var F=t(u);F!==null&&X(y,F.startTime-D)}}function w(D,F){v=!1,g&&(g=!1,h(P),P=-1),p=!0;var C=d;try{for(_(F),f=t(l);f!==null&&(!(f.expirationTime>F)||D&&!R());){var Q=f.callback;if(typeof Q=="function"){f.callback=null,d=f.priorityLevel;var se=Q(f.expirationTime<=F);F=n.unstable_now(),typeof se=="function"?f.callback=se:f===t(l)&&i(l),_(F)}else i(l);f=t(l)}if(f!==null)var Oe=!0;else{var V=t(u);V!==null&&X(y,V.startTime-F),Oe=!1}return Oe}finally{f=null,d=C,p=!1}}var T=!1,M=null,P=-1,N=5,S=-1;function R(){return!(n.unstable_now()-S<N)}function z(){if(M!==null){var D=n.unstable_now();S=D;var F=!0;try{F=M(!0,D)}finally{F?K():(T=!1,M=null)}}else T=!1}var K;if(typeof x=="function")K=function(){x(z)};else if(typeof MessageChannel<"u"){var L=new MessageChannel,Y=L.port2;L.port1.onmessage=z,K=function(){Y.postMessage(null)}}else K=function(){m(z,0)};function B(D){M=D,T||(T=!0,K())}function X(D,F){P=m(function(){D(n.unstable_now())},F)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(D){D.callback=null},n.unstable_continueExecution=function(){v||p||(v=!0,B(w))},n.unstable_forceFrameRate=function(D){0>D||125<D?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):N=0<D?Math.floor(1e3/D):5},n.unstable_getCurrentPriorityLevel=function(){return d},n.unstable_getFirstCallbackNode=function(){return t(l)},n.unstable_next=function(D){switch(d){case 1:case 2:case 3:var F=3;break;default:F=d}var C=d;d=F;try{return D()}finally{d=C}},n.unstable_pauseExecution=function(){},n.unstable_requestPaint=function(){},n.unstable_runWithPriority=function(D,F){switch(D){case 1:case 2:case 3:case 4:case 5:break;default:D=3}var C=d;d=D;try{return F()}finally{d=C}},n.unstable_scheduleCallback=function(D,F,C){var Q=n.unstable_now();switch(typeof C=="object"&&C!==null?(C=C.delay,C=typeof C=="number"&&0<C?Q+C:Q):C=Q,D){case 1:var se=-1;break;case 2:se=250;break;case 5:se=1073741823;break;case 4:se=1e4;break;default:se=5e3}return se=C+se,D={id:c++,callback:F,priorityLevel:D,startTime:C,expirationTime:se,sortIndex:-1},C>Q?(D.sortIndex=C,e(u,D),t(l)===null&&D===t(u)&&(g?(h(P),P=-1):g=!0,X(y,C-Q))):(D.sortIndex=se,e(l,D),v||p||(v=!0,B(w))),D},n.unstable_shouldYield=R,n.unstable_wrapCallback=function(D){var F=d;return function(){var C=d;d=F;try{return D.apply(this,arguments)}finally{d=C}}}})(ey);Jx.exports=ey;var KE=Jx.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ZE=re,Ei=KE;function oe(n){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+n,t=1;t<arguments.length;t++)e+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+n+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var ty=new Set,cu={};function Ho(n,e){Xa(n,e),Xa(n+"Capture",e)}function Xa(n,e){for(cu[n]=e,n=0;n<e.length;n++)ty.add(e[n])}var Gr=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),cp=Object.prototype.hasOwnProperty,QE=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,__={},v_={};function JE(n){return cp.call(v_,n)?!0:cp.call(__,n)?!1:QE.test(n)?v_[n]=!0:(__[n]=!0,!1)}function eT(n,e,t,i){if(t!==null&&t.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:t!==null?!t.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function tT(n,e,t,i){if(e===null||typeof e>"u"||eT(n,e,t,i))return!0;if(i)return!1;if(t!==null)switch(t.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function jn(n,e,t,i,r,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=t,this.propertyName=n,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var xn={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){xn[n]=new jn(n,0,!1,n,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var e=n[0];xn[e]=new jn(e,1,!1,n[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(n){xn[n]=new jn(n,2,!1,n.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){xn[n]=new jn(n,2,!1,n,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){xn[n]=new jn(n,3,!1,n.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(n){xn[n]=new jn(n,3,!0,n,null,!1,!1)});["capture","download"].forEach(function(n){xn[n]=new jn(n,4,!1,n,null,!1,!1)});["cols","rows","size","span"].forEach(function(n){xn[n]=new jn(n,6,!1,n,null,!1,!1)});["rowSpan","start"].forEach(function(n){xn[n]=new jn(n,5,!1,n.toLowerCase(),null,!1,!1)});var Xm=/[\-:]([a-z])/g;function jm(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var e=n.replace(Xm,jm);xn[e]=new jn(e,1,!1,n,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var e=n.replace(Xm,jm);xn[e]=new jn(e,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(n){var e=n.replace(Xm,jm);xn[e]=new jn(e,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(n){xn[n]=new jn(n,1,!1,n.toLowerCase(),null,!1,!1)});xn.xlinkHref=new jn("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(n){xn[n]=new jn(n,1,!1,n.toLowerCase(),null,!0,!0)});function Ym(n,e,t,i){var r=xn.hasOwnProperty(e)?xn[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(tT(e,t,r,i)&&(t=null),i||r===null?JE(e)&&(t===null?n.removeAttribute(e):n.setAttribute(e,""+t)):r.mustUseProperty?n[r.propertyName]=t===null?r.type===3?!1:"":t:(e=r.attributeName,i=r.attributeNamespace,t===null?n.removeAttribute(e):(r=r.type,t=r===3||r===4&&t===!0?"":""+t,i?n.setAttributeNS(i,e,t):n.setAttribute(e,t))))}var $r=ZE.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Ju=Symbol.for("react.element"),pa=Symbol.for("react.portal"),ma=Symbol.for("react.fragment"),qm=Symbol.for("react.strict_mode"),fp=Symbol.for("react.profiler"),ny=Symbol.for("react.provider"),iy=Symbol.for("react.context"),$m=Symbol.for("react.forward_ref"),dp=Symbol.for("react.suspense"),hp=Symbol.for("react.suspense_list"),Km=Symbol.for("react.memo"),ss=Symbol.for("react.lazy"),ry=Symbol.for("react.offscreen"),x_=Symbol.iterator;function ml(n){return n===null||typeof n!="object"?null:(n=x_&&n[x_]||n["@@iterator"],typeof n=="function"?n:null)}var Bt=Object.assign,Gd;function Dl(n){if(Gd===void 0)try{throw Error()}catch(t){var e=t.stack.trim().match(/\n( *(at )?)/);Gd=e&&e[1]||""}return`
`+Gd+n}var Vd=!1;function Wd(n,e){if(!n||Vd)return"";Vd=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var i=u}Reflect.construct(n,[],e)}else{try{e.call()}catch(u){i=u}n.call(e.prototype)}else{try{throw Error()}catch(u){i=u}n()}}catch(u){if(u&&i&&typeof u.stack=="string"){for(var r=u.stack.split(`
`),s=i.stack.split(`
`),o=r.length-1,a=s.length-1;1<=o&&0<=a&&r[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(r[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||r[o]!==s[a]){var l=`
`+r[o].replace(" at new "," at ");return n.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",n.displayName)),l}while(1<=o&&0<=a);break}}}finally{Vd=!1,Error.prepareStackTrace=t}return(n=n?n.displayName||n.name:"")?Dl(n):""}function nT(n){switch(n.tag){case 5:return Dl(n.type);case 16:return Dl("Lazy");case 13:return Dl("Suspense");case 19:return Dl("SuspenseList");case 0:case 2:case 15:return n=Wd(n.type,!1),n;case 11:return n=Wd(n.type.render,!1),n;case 1:return n=Wd(n.type,!0),n;default:return""}}function pp(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case ma:return"Fragment";case pa:return"Portal";case fp:return"Profiler";case qm:return"StrictMode";case dp:return"Suspense";case hp:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case iy:return(n.displayName||"Context")+".Consumer";case ny:return(n._context.displayName||"Context")+".Provider";case $m:var e=n.render;return n=n.displayName,n||(n=e.displayName||e.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case Km:return e=n.displayName||null,e!==null?e:pp(n.type)||"Memo";case ss:e=n._payload,n=n._init;try{return pp(n(e))}catch{}}return null}function iT(n){var e=n.type;switch(n.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=e.render,n=n.displayName||n.name||"",e.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return pp(e);case 8:return e===qm?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Is(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function sy(n){var e=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function rT(n){var e=sy(n)?"checked":"value",t=Object.getOwnPropertyDescriptor(n.constructor.prototype,e),i=""+n[e];if(!n.hasOwnProperty(e)&&typeof t<"u"&&typeof t.get=="function"&&typeof t.set=="function"){var r=t.get,s=t.set;return Object.defineProperty(n,e,{configurable:!0,get:function(){return r.call(this)},set:function(o){i=""+o,s.call(this,o)}}),Object.defineProperty(n,e,{enumerable:t.enumerable}),{getValue:function(){return i},setValue:function(o){i=""+o},stopTracking:function(){n._valueTracker=null,delete n[e]}}}}function ec(n){n._valueTracker||(n._valueTracker=rT(n))}function oy(n){if(!n)return!1;var e=n._valueTracker;if(!e)return!0;var t=e.getValue(),i="";return n&&(i=sy(n)?n.checked?"true":"false":n.value),n=i,n!==t?(e.setValue(n),!0):!1}function yf(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function mp(n,e){var t=e.checked;return Bt({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:t??n._wrapperState.initialChecked})}function y_(n,e){var t=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;t=Is(e.value!=null?e.value:t),n._wrapperState={initialChecked:i,initialValue:t,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function ay(n,e){e=e.checked,e!=null&&Ym(n,"checked",e,!1)}function gp(n,e){ay(n,e);var t=Is(e.value),i=e.type;if(t!=null)i==="number"?(t===0&&n.value===""||n.value!=t)&&(n.value=""+t):n.value!==""+t&&(n.value=""+t);else if(i==="submit"||i==="reset"){n.removeAttribute("value");return}e.hasOwnProperty("value")?_p(n,e.type,t):e.hasOwnProperty("defaultValue")&&_p(n,e.type,Is(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(n.defaultChecked=!!e.defaultChecked)}function S_(n,e,t){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+n._wrapperState.initialValue,t||e===n.value||(n.value=e),n.defaultValue=e}t=n.name,t!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,t!==""&&(n.name=t)}function _p(n,e,t){(e!=="number"||yf(n.ownerDocument)!==n)&&(t==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+t&&(n.defaultValue=""+t))}var Nl=Array.isArray;function La(n,e,t,i){if(n=n.options,e){e={};for(var r=0;r<t.length;r++)e["$"+t[r]]=!0;for(t=0;t<n.length;t++)r=e.hasOwnProperty("$"+n[t].value),n[t].selected!==r&&(n[t].selected=r),r&&i&&(n[t].defaultSelected=!0)}else{for(t=""+Is(t),e=null,r=0;r<n.length;r++){if(n[r].value===t){n[r].selected=!0,i&&(n[r].defaultSelected=!0);return}e!==null||n[r].disabled||(e=n[r])}e!==null&&(e.selected=!0)}}function vp(n,e){if(e.dangerouslySetInnerHTML!=null)throw Error(oe(91));return Bt({},e,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function M_(n,e){var t=e.value;if(t==null){if(t=e.children,e=e.defaultValue,t!=null){if(e!=null)throw Error(oe(92));if(Nl(t)){if(1<t.length)throw Error(oe(93));t=t[0]}e=t}e==null&&(e=""),t=e}n._wrapperState={initialValue:Is(t)}}function ly(n,e){var t=Is(e.value),i=Is(e.defaultValue);t!=null&&(t=""+t,t!==n.value&&(n.value=t),e.defaultValue==null&&n.defaultValue!==t&&(n.defaultValue=t)),i!=null&&(n.defaultValue=""+i)}function E_(n){var e=n.textContent;e===n._wrapperState.initialValue&&e!==""&&e!==null&&(n.value=e)}function uy(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function xp(n,e){return n==null||n==="http://www.w3.org/1999/xhtml"?uy(e):n==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var tc,cy=function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,t,i,r){MSApp.execUnsafeLocalFunction(function(){return n(e,t,i,r)})}:n}(function(n,e){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=e;else{for(tc=tc||document.createElement("div"),tc.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=tc.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;e.firstChild;)n.appendChild(e.firstChild)}});function fu(n,e){if(e){var t=n.firstChild;if(t&&t===n.lastChild&&t.nodeType===3){t.nodeValue=e;return}}n.textContent=e}var Vl={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},sT=["Webkit","ms","Moz","O"];Object.keys(Vl).forEach(function(n){sT.forEach(function(e){e=e+n.charAt(0).toUpperCase()+n.substring(1),Vl[e]=Vl[n]})});function fy(n,e,t){return e==null||typeof e=="boolean"||e===""?"":t||typeof e!="number"||e===0||Vl.hasOwnProperty(n)&&Vl[n]?(""+e).trim():e+"px"}function dy(n,e){n=n.style;for(var t in e)if(e.hasOwnProperty(t)){var i=t.indexOf("--")===0,r=fy(t,e[t],i);t==="float"&&(t="cssFloat"),i?n.setProperty(t,r):n[t]=r}}var oT=Bt({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function yp(n,e){if(e){if(oT[n]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(oe(137,n));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(oe(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(oe(61))}if(e.style!=null&&typeof e.style!="object")throw Error(oe(62))}}function Sp(n,e){if(n.indexOf("-")===-1)return typeof e.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Mp=null;function Zm(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var Ep=null,Da=null,Na=null;function T_(n){if(n=Vu(n)){if(typeof Ep!="function")throw Error(oe(280));var e=n.stateNode;e&&(e=md(e),Ep(n.stateNode,n.type,e))}}function hy(n){Da?Na?Na.push(n):Na=[n]:Da=n}function py(){if(Da){var n=Da,e=Na;if(Na=Da=null,T_(n),e)for(n=0;n<e.length;n++)T_(e[n])}}function my(n,e){return n(e)}function gy(){}var Xd=!1;function _y(n,e,t){if(Xd)return n(e,t);Xd=!0;try{return my(n,e,t)}finally{Xd=!1,(Da!==null||Na!==null)&&(gy(),py())}}function du(n,e){var t=n.stateNode;if(t===null)return null;var i=md(t);if(i===null)return null;t=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(n=n.type,i=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!i;break e;default:n=!1}if(n)return null;if(t&&typeof t!="function")throw Error(oe(231,e,typeof t));return t}var Tp=!1;if(Gr)try{var gl={};Object.defineProperty(gl,"passive",{get:function(){Tp=!0}}),window.addEventListener("test",gl,gl),window.removeEventListener("test",gl,gl)}catch{Tp=!1}function aT(n,e,t,i,r,s,o,a,l){var u=Array.prototype.slice.call(arguments,3);try{e.apply(t,u)}catch(c){this.onError(c)}}var Wl=!1,Sf=null,Mf=!1,wp=null,lT={onError:function(n){Wl=!0,Sf=n}};function uT(n,e,t,i,r,s,o,a,l){Wl=!1,Sf=null,aT.apply(lT,arguments)}function cT(n,e,t,i,r,s,o,a,l){if(uT.apply(this,arguments),Wl){if(Wl){var u=Sf;Wl=!1,Sf=null}else throw Error(oe(198));Mf||(Mf=!0,wp=u)}}function Go(n){var e=n,t=n;if(n.alternate)for(;e.return;)e=e.return;else{n=e;do e=n,e.flags&4098&&(t=e.return),n=e.return;while(n)}return e.tag===3?t:null}function vy(n){if(n.tag===13){var e=n.memoizedState;if(e===null&&(n=n.alternate,n!==null&&(e=n.memoizedState)),e!==null)return e.dehydrated}return null}function w_(n){if(Go(n)!==n)throw Error(oe(188))}function fT(n){var e=n.alternate;if(!e){if(e=Go(n),e===null)throw Error(oe(188));return e!==n?null:n}for(var t=n,i=e;;){var r=t.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){t=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===t)return w_(r),n;if(s===i)return w_(r),e;s=s.sibling}throw Error(oe(188))}if(t.return!==i.return)t=r,i=s;else{for(var o=!1,a=r.child;a;){if(a===t){o=!0,t=r,i=s;break}if(a===i){o=!0,i=r,t=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===t){o=!0,t=s,i=r;break}if(a===i){o=!0,i=s,t=r;break}a=a.sibling}if(!o)throw Error(oe(189))}}if(t.alternate!==i)throw Error(oe(190))}if(t.tag!==3)throw Error(oe(188));return t.stateNode.current===t?n:e}function xy(n){return n=fT(n),n!==null?yy(n):null}function yy(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var e=yy(n);if(e!==null)return e;n=n.sibling}return null}var Sy=Ei.unstable_scheduleCallback,A_=Ei.unstable_cancelCallback,dT=Ei.unstable_shouldYield,hT=Ei.unstable_requestPaint,Wt=Ei.unstable_now,pT=Ei.unstable_getCurrentPriorityLevel,Qm=Ei.unstable_ImmediatePriority,My=Ei.unstable_UserBlockingPriority,Ef=Ei.unstable_NormalPriority,mT=Ei.unstable_LowPriority,Ey=Ei.unstable_IdlePriority,fd=null,pr=null;function gT(n){if(pr&&typeof pr.onCommitFiberRoot=="function")try{pr.onCommitFiberRoot(fd,n,void 0,(n.current.flags&128)===128)}catch{}}var er=Math.clz32?Math.clz32:xT,_T=Math.log,vT=Math.LN2;function xT(n){return n>>>=0,n===0?32:31-(_T(n)/vT|0)|0}var nc=64,ic=4194304;function Ul(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function Tf(n,e){var t=n.pendingLanes;if(t===0)return 0;var i=0,r=n.suspendedLanes,s=n.pingedLanes,o=t&268435455;if(o!==0){var a=o&~r;a!==0?i=Ul(a):(s&=o,s!==0&&(i=Ul(s)))}else o=t&~r,o!==0?i=Ul(o):s!==0&&(i=Ul(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=t&16),e=n.entangledLanes,e!==0)for(n=n.entanglements,e&=i;0<e;)t=31-er(e),r=1<<t,i|=n[t],e&=~r;return i}function yT(n,e){switch(n){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function ST(n,e){for(var t=n.suspendedLanes,i=n.pingedLanes,r=n.expirationTimes,s=n.pendingLanes;0<s;){var o=31-er(s),a=1<<o,l=r[o];l===-1?(!(a&t)||a&i)&&(r[o]=yT(a,e)):l<=e&&(n.expiredLanes|=a),s&=~a}}function Ap(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function Ty(){var n=nc;return nc<<=1,!(nc&4194240)&&(nc=64),n}function jd(n){for(var e=[],t=0;31>t;t++)e.push(n);return e}function Hu(n,e,t){n.pendingLanes|=e,e!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,e=31-er(e),n[e]=t}function MT(n,e){var t=n.pendingLanes&~e;n.pendingLanes=e,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=e,n.mutableReadLanes&=e,n.entangledLanes&=e,e=n.entanglements;var i=n.eventTimes;for(n=n.expirationTimes;0<t;){var r=31-er(t),s=1<<r;e[r]=0,i[r]=-1,n[r]=-1,t&=~s}}function Jm(n,e){var t=n.entangledLanes|=e;for(n=n.entanglements;t;){var i=31-er(t),r=1<<i;r&e|n[i]&e&&(n[i]|=e),t&=~r}}var gt=0;function wy(n){return n&=-n,1<n?4<n?n&268435455?16:536870912:4:1}var Ay,eg,Cy,Ry,by,Cp=!1,rc=[],xs=null,ys=null,Ss=null,hu=new Map,pu=new Map,as=[],ET="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function C_(n,e){switch(n){case"focusin":case"focusout":xs=null;break;case"dragenter":case"dragleave":ys=null;break;case"mouseover":case"mouseout":Ss=null;break;case"pointerover":case"pointerout":hu.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":pu.delete(e.pointerId)}}function _l(n,e,t,i,r,s){return n===null||n.nativeEvent!==s?(n={blockedOn:e,domEventName:t,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=Vu(e),e!==null&&eg(e)),n):(n.eventSystemFlags|=i,e=n.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),n)}function TT(n,e,t,i,r){switch(e){case"focusin":return xs=_l(xs,n,e,t,i,r),!0;case"dragenter":return ys=_l(ys,n,e,t,i,r),!0;case"mouseover":return Ss=_l(Ss,n,e,t,i,r),!0;case"pointerover":var s=r.pointerId;return hu.set(s,_l(hu.get(s)||null,n,e,t,i,r)),!0;case"gotpointercapture":return s=r.pointerId,pu.set(s,_l(pu.get(s)||null,n,e,t,i,r)),!0}return!1}function Py(n){var e=ho(n.target);if(e!==null){var t=Go(e);if(t!==null){if(e=t.tag,e===13){if(e=vy(t),e!==null){n.blockedOn=e,by(n.priority,function(){Cy(t)});return}}else if(e===3&&t.stateNode.current.memoizedState.isDehydrated){n.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}n.blockedOn=null}function Jc(n){if(n.blockedOn!==null)return!1;for(var e=n.targetContainers;0<e.length;){var t=Rp(n.domEventName,n.eventSystemFlags,e[0],n.nativeEvent);if(t===null){t=n.nativeEvent;var i=new t.constructor(t.type,t);Mp=i,t.target.dispatchEvent(i),Mp=null}else return e=Vu(t),e!==null&&eg(e),n.blockedOn=t,!1;e.shift()}return!0}function R_(n,e,t){Jc(n)&&t.delete(e)}function wT(){Cp=!1,xs!==null&&Jc(xs)&&(xs=null),ys!==null&&Jc(ys)&&(ys=null),Ss!==null&&Jc(Ss)&&(Ss=null),hu.forEach(R_),pu.forEach(R_)}function vl(n,e){n.blockedOn===e&&(n.blockedOn=null,Cp||(Cp=!0,Ei.unstable_scheduleCallback(Ei.unstable_NormalPriority,wT)))}function mu(n){function e(r){return vl(r,n)}if(0<rc.length){vl(rc[0],n);for(var t=1;t<rc.length;t++){var i=rc[t];i.blockedOn===n&&(i.blockedOn=null)}}for(xs!==null&&vl(xs,n),ys!==null&&vl(ys,n),Ss!==null&&vl(Ss,n),hu.forEach(e),pu.forEach(e),t=0;t<as.length;t++)i=as[t],i.blockedOn===n&&(i.blockedOn=null);for(;0<as.length&&(t=as[0],t.blockedOn===null);)Py(t),t.blockedOn===null&&as.shift()}var Ua=$r.ReactCurrentBatchConfig,wf=!0;function AT(n,e,t,i){var r=gt,s=Ua.transition;Ua.transition=null;try{gt=1,tg(n,e,t,i)}finally{gt=r,Ua.transition=s}}function CT(n,e,t,i){var r=gt,s=Ua.transition;Ua.transition=null;try{gt=4,tg(n,e,t,i)}finally{gt=r,Ua.transition=s}}function tg(n,e,t,i){if(wf){var r=Rp(n,e,t,i);if(r===null)nh(n,e,i,Af,t),C_(n,i);else if(TT(r,n,e,t,i))i.stopPropagation();else if(C_(n,i),e&4&&-1<ET.indexOf(n)){for(;r!==null;){var s=Vu(r);if(s!==null&&Ay(s),s=Rp(n,e,t,i),s===null&&nh(n,e,i,Af,t),s===r)break;r=s}r!==null&&i.stopPropagation()}else nh(n,e,i,null,t)}}var Af=null;function Rp(n,e,t,i){if(Af=null,n=Zm(i),n=ho(n),n!==null)if(e=Go(n),e===null)n=null;else if(t=e.tag,t===13){if(n=vy(e),n!==null)return n;n=null}else if(t===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;n=null}else e!==n&&(n=null);return Af=n,null}function Ly(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(pT()){case Qm:return 1;case My:return 4;case Ef:case mT:return 16;case Ey:return 536870912;default:return 16}default:return 16}}var cs=null,ng=null,ef=null;function Dy(){if(ef)return ef;var n,e=ng,t=e.length,i,r="value"in cs?cs.value:cs.textContent,s=r.length;for(n=0;n<t&&e[n]===r[n];n++);var o=t-n;for(i=1;i<=o&&e[t-i]===r[s-i];i++);return ef=r.slice(n,1<i?1-i:void 0)}function tf(n){var e=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&e===13&&(n=13)):n=e,n===10&&(n=13),32<=n||n===13?n:0}function sc(){return!0}function b_(){return!1}function Ai(n){function e(t,i,r,s,o){this._reactName=t,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in n)n.hasOwnProperty(a)&&(t=n[a],this[a]=t?t(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?sc:b_,this.isPropagationStopped=b_,this}return Bt(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=sc)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=sc)},persist:function(){},isPersistent:sc}),e}var ul={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ig=Ai(ul),Gu=Bt({},ul,{view:0,detail:0}),RT=Ai(Gu),Yd,qd,xl,dd=Bt({},Gu,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:rg,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==xl&&(xl&&n.type==="mousemove"?(Yd=n.screenX-xl.screenX,qd=n.screenY-xl.screenY):qd=Yd=0,xl=n),Yd)},movementY:function(n){return"movementY"in n?n.movementY:qd}}),P_=Ai(dd),bT=Bt({},dd,{dataTransfer:0}),PT=Ai(bT),LT=Bt({},Gu,{relatedTarget:0}),$d=Ai(LT),DT=Bt({},ul,{animationName:0,elapsedTime:0,pseudoElement:0}),NT=Ai(DT),UT=Bt({},ul,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),IT=Ai(UT),OT=Bt({},ul,{data:0}),L_=Ai(OT),FT={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},kT={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},zT={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function BT(n){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(n):(n=zT[n])?!!e[n]:!1}function rg(){return BT}var HT=Bt({},Gu,{key:function(n){if(n.key){var e=FT[n.key]||n.key;if(e!=="Unidentified")return e}return n.type==="keypress"?(n=tf(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?kT[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:rg,charCode:function(n){return n.type==="keypress"?tf(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?tf(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),GT=Ai(HT),VT=Bt({},dd,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),D_=Ai(VT),WT=Bt({},Gu,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:rg}),XT=Ai(WT),jT=Bt({},ul,{propertyName:0,elapsedTime:0,pseudoElement:0}),YT=Ai(jT),qT=Bt({},dd,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),$T=Ai(qT),KT=[9,13,27,32],sg=Gr&&"CompositionEvent"in window,Xl=null;Gr&&"documentMode"in document&&(Xl=document.documentMode);var ZT=Gr&&"TextEvent"in window&&!Xl,Ny=Gr&&(!sg||Xl&&8<Xl&&11>=Xl),N_=" ",U_=!1;function Uy(n,e){switch(n){case"keyup":return KT.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Iy(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var ga=!1;function QT(n,e){switch(n){case"compositionend":return Iy(e);case"keypress":return e.which!==32?null:(U_=!0,N_);case"textInput":return n=e.data,n===N_&&U_?null:n;default:return null}}function JT(n,e){if(ga)return n==="compositionend"||!sg&&Uy(n,e)?(n=Dy(),ef=ng=cs=null,ga=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Ny&&e.locale!=="ko"?null:e.data;default:return null}}var ew={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function I_(n){var e=n&&n.nodeName&&n.nodeName.toLowerCase();return e==="input"?!!ew[n.type]:e==="textarea"}function Oy(n,e,t,i){hy(i),e=Cf(e,"onChange"),0<e.length&&(t=new ig("onChange","change",null,t,i),n.push({event:t,listeners:e}))}var jl=null,gu=null;function tw(n){Yy(n,0)}function hd(n){var e=xa(n);if(oy(e))return n}function nw(n,e){if(n==="change")return e}var Fy=!1;if(Gr){var Kd;if(Gr){var Zd="oninput"in document;if(!Zd){var O_=document.createElement("div");O_.setAttribute("oninput","return;"),Zd=typeof O_.oninput=="function"}Kd=Zd}else Kd=!1;Fy=Kd&&(!document.documentMode||9<document.documentMode)}function F_(){jl&&(jl.detachEvent("onpropertychange",ky),gu=jl=null)}function ky(n){if(n.propertyName==="value"&&hd(gu)){var e=[];Oy(e,gu,n,Zm(n)),_y(tw,e)}}function iw(n,e,t){n==="focusin"?(F_(),jl=e,gu=t,jl.attachEvent("onpropertychange",ky)):n==="focusout"&&F_()}function rw(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return hd(gu)}function sw(n,e){if(n==="click")return hd(e)}function ow(n,e){if(n==="input"||n==="change")return hd(e)}function aw(n,e){return n===e&&(n!==0||1/n===1/e)||n!==n&&e!==e}var nr=typeof Object.is=="function"?Object.is:aw;function _u(n,e){if(nr(n,e))return!0;if(typeof n!="object"||n===null||typeof e!="object"||e===null)return!1;var t=Object.keys(n),i=Object.keys(e);if(t.length!==i.length)return!1;for(i=0;i<t.length;i++){var r=t[i];if(!cp.call(e,r)||!nr(n[r],e[r]))return!1}return!0}function k_(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function z_(n,e){var t=k_(n);n=0;for(var i;t;){if(t.nodeType===3){if(i=n+t.textContent.length,n<=e&&i>=e)return{node:t,offset:e-n};n=i}e:{for(;t;){if(t.nextSibling){t=t.nextSibling;break e}t=t.parentNode}t=void 0}t=k_(t)}}function zy(n,e){return n&&e?n===e?!0:n&&n.nodeType===3?!1:e&&e.nodeType===3?zy(n,e.parentNode):"contains"in n?n.contains(e):n.compareDocumentPosition?!!(n.compareDocumentPosition(e)&16):!1:!1}function By(){for(var n=window,e=yf();e instanceof n.HTMLIFrameElement;){try{var t=typeof e.contentWindow.location.href=="string"}catch{t=!1}if(t)n=e.contentWindow;else break;e=yf(n.document)}return e}function og(n){var e=n&&n.nodeName&&n.nodeName.toLowerCase();return e&&(e==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||e==="textarea"||n.contentEditable==="true")}function lw(n){var e=By(),t=n.focusedElem,i=n.selectionRange;if(e!==t&&t&&t.ownerDocument&&zy(t.ownerDocument.documentElement,t)){if(i!==null&&og(t)){if(e=i.start,n=i.end,n===void 0&&(n=e),"selectionStart"in t)t.selectionStart=e,t.selectionEnd=Math.min(n,t.value.length);else if(n=(e=t.ownerDocument||document)&&e.defaultView||window,n.getSelection){n=n.getSelection();var r=t.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!n.extend&&s>i&&(r=i,i=s,s=r),r=z_(t,s);var o=z_(t,i);r&&o&&(n.rangeCount!==1||n.anchorNode!==r.node||n.anchorOffset!==r.offset||n.focusNode!==o.node||n.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),n.removeAllRanges(),s>i?(n.addRange(e),n.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),n.addRange(e)))}}for(e=[],n=t;n=n.parentNode;)n.nodeType===1&&e.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof t.focus=="function"&&t.focus(),t=0;t<e.length;t++)n=e[t],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var uw=Gr&&"documentMode"in document&&11>=document.documentMode,_a=null,bp=null,Yl=null,Pp=!1;function B_(n,e,t){var i=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;Pp||_a==null||_a!==yf(i)||(i=_a,"selectionStart"in i&&og(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),Yl&&_u(Yl,i)||(Yl=i,i=Cf(bp,"onSelect"),0<i.length&&(e=new ig("onSelect","select",null,e,t),n.push({event:e,listeners:i}),e.target=_a)))}function oc(n,e){var t={};return t[n.toLowerCase()]=e.toLowerCase(),t["Webkit"+n]="webkit"+e,t["Moz"+n]="moz"+e,t}var va={animationend:oc("Animation","AnimationEnd"),animationiteration:oc("Animation","AnimationIteration"),animationstart:oc("Animation","AnimationStart"),transitionend:oc("Transition","TransitionEnd")},Qd={},Hy={};Gr&&(Hy=document.createElement("div").style,"AnimationEvent"in window||(delete va.animationend.animation,delete va.animationiteration.animation,delete va.animationstart.animation),"TransitionEvent"in window||delete va.transitionend.transition);function pd(n){if(Qd[n])return Qd[n];if(!va[n])return n;var e=va[n],t;for(t in e)if(e.hasOwnProperty(t)&&t in Hy)return Qd[n]=e[t];return n}var Gy=pd("animationend"),Vy=pd("animationiteration"),Wy=pd("animationstart"),Xy=pd("transitionend"),jy=new Map,H_="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Gs(n,e){jy.set(n,e),Ho(e,[n])}for(var Jd=0;Jd<H_.length;Jd++){var eh=H_[Jd],cw=eh.toLowerCase(),fw=eh[0].toUpperCase()+eh.slice(1);Gs(cw,"on"+fw)}Gs(Gy,"onAnimationEnd");Gs(Vy,"onAnimationIteration");Gs(Wy,"onAnimationStart");Gs("dblclick","onDoubleClick");Gs("focusin","onFocus");Gs("focusout","onBlur");Gs(Xy,"onTransitionEnd");Xa("onMouseEnter",["mouseout","mouseover"]);Xa("onMouseLeave",["mouseout","mouseover"]);Xa("onPointerEnter",["pointerout","pointerover"]);Xa("onPointerLeave",["pointerout","pointerover"]);Ho("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Ho("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Ho("onBeforeInput",["compositionend","keypress","textInput","paste"]);Ho("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Ho("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Ho("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Il="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),dw=new Set("cancel close invalid load scroll toggle".split(" ").concat(Il));function G_(n,e,t){var i=n.type||"unknown-event";n.currentTarget=t,cT(i,e,void 0,n),n.currentTarget=null}function Yy(n,e){e=(e&4)!==0;for(var t=0;t<n.length;t++){var i=n[t],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var o=i.length-1;0<=o;o--){var a=i[o],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==s&&r.isPropagationStopped())break e;G_(r,a,u),s=l}else for(o=0;o<i.length;o++){if(a=i[o],l=a.instance,u=a.currentTarget,a=a.listener,l!==s&&r.isPropagationStopped())break e;G_(r,a,u),s=l}}}if(Mf)throw n=wp,Mf=!1,wp=null,n}function At(n,e){var t=e[Ip];t===void 0&&(t=e[Ip]=new Set);var i=n+"__bubble";t.has(i)||(qy(e,n,2,!1),t.add(i))}function th(n,e,t){var i=0;e&&(i|=4),qy(t,n,i,e)}var ac="_reactListening"+Math.random().toString(36).slice(2);function vu(n){if(!n[ac]){n[ac]=!0,ty.forEach(function(t){t!=="selectionchange"&&(dw.has(t)||th(t,!1,n),th(t,!0,n))});var e=n.nodeType===9?n:n.ownerDocument;e===null||e[ac]||(e[ac]=!0,th("selectionchange",!1,e))}}function qy(n,e,t,i){switch(Ly(e)){case 1:var r=AT;break;case 4:r=CT;break;default:r=tg}t=r.bind(null,e,t,n),r=void 0,!Tp||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?n.addEventListener(e,t,{capture:!0,passive:r}):n.addEventListener(e,t,!0):r!==void 0?n.addEventListener(e,t,{passive:r}):n.addEventListener(e,t,!1)}function nh(n,e,t,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var o=i.tag;if(o===3||o===4){var a=i.stateNode.containerInfo;if(a===r||a.nodeType===8&&a.parentNode===r)break;if(o===4)for(o=i.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;o=o.return}for(;a!==null;){if(o=ho(a),o===null)return;if(l=o.tag,l===5||l===6){i=s=o;continue e}a=a.parentNode}}i=i.return}_y(function(){var u=s,c=Zm(t),f=[];e:{var d=jy.get(n);if(d!==void 0){var p=ig,v=n;switch(n){case"keypress":if(tf(t)===0)break e;case"keydown":case"keyup":p=GT;break;case"focusin":v="focus",p=$d;break;case"focusout":v="blur",p=$d;break;case"beforeblur":case"afterblur":p=$d;break;case"click":if(t.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=P_;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=PT;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=XT;break;case Gy:case Vy:case Wy:p=NT;break;case Xy:p=YT;break;case"scroll":p=RT;break;case"wheel":p=$T;break;case"copy":case"cut":case"paste":p=IT;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=D_}var g=(e&4)!==0,m=!g&&n==="scroll",h=g?d!==null?d+"Capture":null:d;g=[];for(var x=u,_;x!==null;){_=x;var y=_.stateNode;if(_.tag===5&&y!==null&&(_=y,h!==null&&(y=du(x,h),y!=null&&g.push(xu(x,y,_)))),m)break;x=x.return}0<g.length&&(d=new p(d,v,null,t,c),f.push({event:d,listeners:g}))}}if(!(e&7)){e:{if(d=n==="mouseover"||n==="pointerover",p=n==="mouseout"||n==="pointerout",d&&t!==Mp&&(v=t.relatedTarget||t.fromElement)&&(ho(v)||v[Vr]))break e;if((p||d)&&(d=c.window===c?c:(d=c.ownerDocument)?d.defaultView||d.parentWindow:window,p?(v=t.relatedTarget||t.toElement,p=u,v=v?ho(v):null,v!==null&&(m=Go(v),v!==m||v.tag!==5&&v.tag!==6)&&(v=null)):(p=null,v=u),p!==v)){if(g=P_,y="onMouseLeave",h="onMouseEnter",x="mouse",(n==="pointerout"||n==="pointerover")&&(g=D_,y="onPointerLeave",h="onPointerEnter",x="pointer"),m=p==null?d:xa(p),_=v==null?d:xa(v),d=new g(y,x+"leave",p,t,c),d.target=m,d.relatedTarget=_,y=null,ho(c)===u&&(g=new g(h,x+"enter",v,t,c),g.target=_,g.relatedTarget=m,y=g),m=y,p&&v)t:{for(g=p,h=v,x=0,_=g;_;_=jo(_))x++;for(_=0,y=h;y;y=jo(y))_++;for(;0<x-_;)g=jo(g),x--;for(;0<_-x;)h=jo(h),_--;for(;x--;){if(g===h||h!==null&&g===h.alternate)break t;g=jo(g),h=jo(h)}g=null}else g=null;p!==null&&V_(f,d,p,g,!1),v!==null&&m!==null&&V_(f,m,v,g,!0)}}e:{if(d=u?xa(u):window,p=d.nodeName&&d.nodeName.toLowerCase(),p==="select"||p==="input"&&d.type==="file")var w=nw;else if(I_(d))if(Fy)w=ow;else{w=rw;var T=iw}else(p=d.nodeName)&&p.toLowerCase()==="input"&&(d.type==="checkbox"||d.type==="radio")&&(w=sw);if(w&&(w=w(n,u))){Oy(f,w,t,c);break e}T&&T(n,d,u),n==="focusout"&&(T=d._wrapperState)&&T.controlled&&d.type==="number"&&_p(d,"number",d.value)}switch(T=u?xa(u):window,n){case"focusin":(I_(T)||T.contentEditable==="true")&&(_a=T,bp=u,Yl=null);break;case"focusout":Yl=bp=_a=null;break;case"mousedown":Pp=!0;break;case"contextmenu":case"mouseup":case"dragend":Pp=!1,B_(f,t,c);break;case"selectionchange":if(uw)break;case"keydown":case"keyup":B_(f,t,c)}var M;if(sg)e:{switch(n){case"compositionstart":var P="onCompositionStart";break e;case"compositionend":P="onCompositionEnd";break e;case"compositionupdate":P="onCompositionUpdate";break e}P=void 0}else ga?Uy(n,t)&&(P="onCompositionEnd"):n==="keydown"&&t.keyCode===229&&(P="onCompositionStart");P&&(Ny&&t.locale!=="ko"&&(ga||P!=="onCompositionStart"?P==="onCompositionEnd"&&ga&&(M=Dy()):(cs=c,ng="value"in cs?cs.value:cs.textContent,ga=!0)),T=Cf(u,P),0<T.length&&(P=new L_(P,n,null,t,c),f.push({event:P,listeners:T}),M?P.data=M:(M=Iy(t),M!==null&&(P.data=M)))),(M=ZT?QT(n,t):JT(n,t))&&(u=Cf(u,"onBeforeInput"),0<u.length&&(c=new L_("onBeforeInput","beforeinput",null,t,c),f.push({event:c,listeners:u}),c.data=M))}Yy(f,e)})}function xu(n,e,t){return{instance:n,listener:e,currentTarget:t}}function Cf(n,e){for(var t=e+"Capture",i=[];n!==null;){var r=n,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=du(n,t),s!=null&&i.unshift(xu(n,s,r)),s=du(n,e),s!=null&&i.push(xu(n,s,r))),n=n.return}return i}function jo(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function V_(n,e,t,i,r){for(var s=e._reactName,o=[];t!==null&&t!==i;){var a=t,l=a.alternate,u=a.stateNode;if(l!==null&&l===i)break;a.tag===5&&u!==null&&(a=u,r?(l=du(t,s),l!=null&&o.unshift(xu(t,l,a))):r||(l=du(t,s),l!=null&&o.push(xu(t,l,a)))),t=t.return}o.length!==0&&n.push({event:e,listeners:o})}var hw=/\r\n?/g,pw=/\u0000|\uFFFD/g;function W_(n){return(typeof n=="string"?n:""+n).replace(hw,`
`).replace(pw,"")}function lc(n,e,t){if(e=W_(e),W_(n)!==e&&t)throw Error(oe(425))}function Rf(){}var Lp=null,Dp=null;function Np(n,e){return n==="textarea"||n==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Up=typeof setTimeout=="function"?setTimeout:void 0,mw=typeof clearTimeout=="function"?clearTimeout:void 0,X_=typeof Promise=="function"?Promise:void 0,gw=typeof queueMicrotask=="function"?queueMicrotask:typeof X_<"u"?function(n){return X_.resolve(null).then(n).catch(_w)}:Up;function _w(n){setTimeout(function(){throw n})}function ih(n,e){var t=e,i=0;do{var r=t.nextSibling;if(n.removeChild(t),r&&r.nodeType===8)if(t=r.data,t==="/$"){if(i===0){n.removeChild(r),mu(e);return}i--}else t!=="$"&&t!=="$?"&&t!=="$!"||i++;t=r}while(t);mu(e)}function Ms(n){for(;n!=null;n=n.nextSibling){var e=n.nodeType;if(e===1||e===3)break;if(e===8){if(e=n.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return n}function j_(n){n=n.previousSibling;for(var e=0;n;){if(n.nodeType===8){var t=n.data;if(t==="$"||t==="$!"||t==="$?"){if(e===0)return n;e--}else t==="/$"&&e++}n=n.previousSibling}return null}var cl=Math.random().toString(36).slice(2),ur="__reactFiber$"+cl,yu="__reactProps$"+cl,Vr="__reactContainer$"+cl,Ip="__reactEvents$"+cl,vw="__reactListeners$"+cl,xw="__reactHandles$"+cl;function ho(n){var e=n[ur];if(e)return e;for(var t=n.parentNode;t;){if(e=t[Vr]||t[ur]){if(t=e.alternate,e.child!==null||t!==null&&t.child!==null)for(n=j_(n);n!==null;){if(t=n[ur])return t;n=j_(n)}return e}n=t,t=n.parentNode}return null}function Vu(n){return n=n[ur]||n[Vr],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function xa(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(oe(33))}function md(n){return n[yu]||null}var Op=[],ya=-1;function Vs(n){return{current:n}}function bt(n){0>ya||(n.current=Op[ya],Op[ya]=null,ya--)}function Et(n,e){ya++,Op[ya]=n.current,n.current=e}var Os={},Ln=Vs(Os),Jn=Vs(!1),Po=Os;function ja(n,e){var t=n.type.contextTypes;if(!t)return Os;var i=n.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in t)r[s]=e[s];return i&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=e,n.__reactInternalMemoizedMaskedChildContext=r),r}function ei(n){return n=n.childContextTypes,n!=null}function bf(){bt(Jn),bt(Ln)}function Y_(n,e,t){if(Ln.current!==Os)throw Error(oe(168));Et(Ln,e),Et(Jn,t)}function $y(n,e,t){var i=n.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return t;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(oe(108,iT(n)||"Unknown",r));return Bt({},t,i)}function Pf(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||Os,Po=Ln.current,Et(Ln,n),Et(Jn,Jn.current),!0}function q_(n,e,t){var i=n.stateNode;if(!i)throw Error(oe(169));t?(n=$y(n,e,Po),i.__reactInternalMemoizedMergedChildContext=n,bt(Jn),bt(Ln),Et(Ln,n)):bt(Jn),Et(Jn,t)}var Pr=null,gd=!1,rh=!1;function Ky(n){Pr===null?Pr=[n]:Pr.push(n)}function yw(n){gd=!0,Ky(n)}function Ws(){if(!rh&&Pr!==null){rh=!0;var n=0,e=gt;try{var t=Pr;for(gt=1;n<t.length;n++){var i=t[n];do i=i(!0);while(i!==null)}Pr=null,gd=!1}catch(r){throw Pr!==null&&(Pr=Pr.slice(n+1)),Sy(Qm,Ws),r}finally{gt=e,rh=!1}}return null}var Sa=[],Ma=0,Lf=null,Df=0,Pi=[],Li=0,Lo=null,Ir=1,Or="";function io(n,e){Sa[Ma++]=Df,Sa[Ma++]=Lf,Lf=n,Df=e}function Zy(n,e,t){Pi[Li++]=Ir,Pi[Li++]=Or,Pi[Li++]=Lo,Lo=n;var i=Ir;n=Or;var r=32-er(i)-1;i&=~(1<<r),t+=1;var s=32-er(e)+r;if(30<s){var o=r-r%5;s=(i&(1<<o)-1).toString(32),i>>=o,r-=o,Ir=1<<32-er(e)+r|t<<r|i,Or=s+n}else Ir=1<<s|t<<r|i,Or=n}function ag(n){n.return!==null&&(io(n,1),Zy(n,1,0))}function lg(n){for(;n===Lf;)Lf=Sa[--Ma],Sa[Ma]=null,Df=Sa[--Ma],Sa[Ma]=null;for(;n===Lo;)Lo=Pi[--Li],Pi[Li]=null,Or=Pi[--Li],Pi[Li]=null,Ir=Pi[--Li],Pi[Li]=null}var Si=null,xi=null,Dt=!1,Ki=null;function Qy(n,e){var t=Ii(5,null,null,0);t.elementType="DELETED",t.stateNode=e,t.return=n,e=n.deletions,e===null?(n.deletions=[t],n.flags|=16):e.push(t)}function $_(n,e){switch(n.tag){case 5:var t=n.type;return e=e.nodeType!==1||t.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(n.stateNode=e,Si=n,xi=Ms(e.firstChild),!0):!1;case 6:return e=n.pendingProps===""||e.nodeType!==3?null:e,e!==null?(n.stateNode=e,Si=n,xi=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(t=Lo!==null?{id:Ir,overflow:Or}:null,n.memoizedState={dehydrated:e,treeContext:t,retryLane:1073741824},t=Ii(18,null,null,0),t.stateNode=e,t.return=n,n.child=t,Si=n,xi=null,!0):!1;default:return!1}}function Fp(n){return(n.mode&1)!==0&&(n.flags&128)===0}function kp(n){if(Dt){var e=xi;if(e){var t=e;if(!$_(n,e)){if(Fp(n))throw Error(oe(418));e=Ms(t.nextSibling);var i=Si;e&&$_(n,e)?Qy(i,t):(n.flags=n.flags&-4097|2,Dt=!1,Si=n)}}else{if(Fp(n))throw Error(oe(418));n.flags=n.flags&-4097|2,Dt=!1,Si=n}}}function K_(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;Si=n}function uc(n){if(n!==Si)return!1;if(!Dt)return K_(n),Dt=!0,!1;var e;if((e=n.tag!==3)&&!(e=n.tag!==5)&&(e=n.type,e=e!=="head"&&e!=="body"&&!Np(n.type,n.memoizedProps)),e&&(e=xi)){if(Fp(n))throw Jy(),Error(oe(418));for(;e;)Qy(n,e),e=Ms(e.nextSibling)}if(K_(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(oe(317));e:{for(n=n.nextSibling,e=0;n;){if(n.nodeType===8){var t=n.data;if(t==="/$"){if(e===0){xi=Ms(n.nextSibling);break e}e--}else t!=="$"&&t!=="$!"&&t!=="$?"||e++}n=n.nextSibling}xi=null}}else xi=Si?Ms(n.stateNode.nextSibling):null;return!0}function Jy(){for(var n=xi;n;)n=Ms(n.nextSibling)}function Ya(){xi=Si=null,Dt=!1}function ug(n){Ki===null?Ki=[n]:Ki.push(n)}var Sw=$r.ReactCurrentBatchConfig;function yl(n,e,t){if(n=t.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(t._owner){if(t=t._owner,t){if(t.tag!==1)throw Error(oe(309));var i=t.stateNode}if(!i)throw Error(oe(147,n));var r=i,s=""+n;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=r.refs;o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof n!="string")throw Error(oe(284));if(!t._owner)throw Error(oe(290,n))}return n}function cc(n,e){throw n=Object.prototype.toString.call(e),Error(oe(31,n==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":n))}function Z_(n){var e=n._init;return e(n._payload)}function eS(n){function e(h,x){if(n){var _=h.deletions;_===null?(h.deletions=[x],h.flags|=16):_.push(x)}}function t(h,x){if(!n)return null;for(;x!==null;)e(h,x),x=x.sibling;return null}function i(h,x){for(h=new Map;x!==null;)x.key!==null?h.set(x.key,x):h.set(x.index,x),x=x.sibling;return h}function r(h,x){return h=As(h,x),h.index=0,h.sibling=null,h}function s(h,x,_){return h.index=_,n?(_=h.alternate,_!==null?(_=_.index,_<x?(h.flags|=2,x):_):(h.flags|=2,x)):(h.flags|=1048576,x)}function o(h){return n&&h.alternate===null&&(h.flags|=2),h}function a(h,x,_,y){return x===null||x.tag!==6?(x=fh(_,h.mode,y),x.return=h,x):(x=r(x,_),x.return=h,x)}function l(h,x,_,y){var w=_.type;return w===ma?c(h,x,_.props.children,y,_.key):x!==null&&(x.elementType===w||typeof w=="object"&&w!==null&&w.$$typeof===ss&&Z_(w)===x.type)?(y=r(x,_.props),y.ref=yl(h,x,_),y.return=h,y):(y=uf(_.type,_.key,_.props,null,h.mode,y),y.ref=yl(h,x,_),y.return=h,y)}function u(h,x,_,y){return x===null||x.tag!==4||x.stateNode.containerInfo!==_.containerInfo||x.stateNode.implementation!==_.implementation?(x=dh(_,h.mode,y),x.return=h,x):(x=r(x,_.children||[]),x.return=h,x)}function c(h,x,_,y,w){return x===null||x.tag!==7?(x=yo(_,h.mode,y,w),x.return=h,x):(x=r(x,_),x.return=h,x)}function f(h,x,_){if(typeof x=="string"&&x!==""||typeof x=="number")return x=fh(""+x,h.mode,_),x.return=h,x;if(typeof x=="object"&&x!==null){switch(x.$$typeof){case Ju:return _=uf(x.type,x.key,x.props,null,h.mode,_),_.ref=yl(h,null,x),_.return=h,_;case pa:return x=dh(x,h.mode,_),x.return=h,x;case ss:var y=x._init;return f(h,y(x._payload),_)}if(Nl(x)||ml(x))return x=yo(x,h.mode,_,null),x.return=h,x;cc(h,x)}return null}function d(h,x,_,y){var w=x!==null?x.key:null;if(typeof _=="string"&&_!==""||typeof _=="number")return w!==null?null:a(h,x,""+_,y);if(typeof _=="object"&&_!==null){switch(_.$$typeof){case Ju:return _.key===w?l(h,x,_,y):null;case pa:return _.key===w?u(h,x,_,y):null;case ss:return w=_._init,d(h,x,w(_._payload),y)}if(Nl(_)||ml(_))return w!==null?null:c(h,x,_,y,null);cc(h,_)}return null}function p(h,x,_,y,w){if(typeof y=="string"&&y!==""||typeof y=="number")return h=h.get(_)||null,a(x,h,""+y,w);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case Ju:return h=h.get(y.key===null?_:y.key)||null,l(x,h,y,w);case pa:return h=h.get(y.key===null?_:y.key)||null,u(x,h,y,w);case ss:var T=y._init;return p(h,x,_,T(y._payload),w)}if(Nl(y)||ml(y))return h=h.get(_)||null,c(x,h,y,w,null);cc(x,y)}return null}function v(h,x,_,y){for(var w=null,T=null,M=x,P=x=0,N=null;M!==null&&P<_.length;P++){M.index>P?(N=M,M=null):N=M.sibling;var S=d(h,M,_[P],y);if(S===null){M===null&&(M=N);break}n&&M&&S.alternate===null&&e(h,M),x=s(S,x,P),T===null?w=S:T.sibling=S,T=S,M=N}if(P===_.length)return t(h,M),Dt&&io(h,P),w;if(M===null){for(;P<_.length;P++)M=f(h,_[P],y),M!==null&&(x=s(M,x,P),T===null?w=M:T.sibling=M,T=M);return Dt&&io(h,P),w}for(M=i(h,M);P<_.length;P++)N=p(M,h,P,_[P],y),N!==null&&(n&&N.alternate!==null&&M.delete(N.key===null?P:N.key),x=s(N,x,P),T===null?w=N:T.sibling=N,T=N);return n&&M.forEach(function(R){return e(h,R)}),Dt&&io(h,P),w}function g(h,x,_,y){var w=ml(_);if(typeof w!="function")throw Error(oe(150));if(_=w.call(_),_==null)throw Error(oe(151));for(var T=w=null,M=x,P=x=0,N=null,S=_.next();M!==null&&!S.done;P++,S=_.next()){M.index>P?(N=M,M=null):N=M.sibling;var R=d(h,M,S.value,y);if(R===null){M===null&&(M=N);break}n&&M&&R.alternate===null&&e(h,M),x=s(R,x,P),T===null?w=R:T.sibling=R,T=R,M=N}if(S.done)return t(h,M),Dt&&io(h,P),w;if(M===null){for(;!S.done;P++,S=_.next())S=f(h,S.value,y),S!==null&&(x=s(S,x,P),T===null?w=S:T.sibling=S,T=S);return Dt&&io(h,P),w}for(M=i(h,M);!S.done;P++,S=_.next())S=p(M,h,P,S.value,y),S!==null&&(n&&S.alternate!==null&&M.delete(S.key===null?P:S.key),x=s(S,x,P),T===null?w=S:T.sibling=S,T=S);return n&&M.forEach(function(z){return e(h,z)}),Dt&&io(h,P),w}function m(h,x,_,y){if(typeof _=="object"&&_!==null&&_.type===ma&&_.key===null&&(_=_.props.children),typeof _=="object"&&_!==null){switch(_.$$typeof){case Ju:e:{for(var w=_.key,T=x;T!==null;){if(T.key===w){if(w=_.type,w===ma){if(T.tag===7){t(h,T.sibling),x=r(T,_.props.children),x.return=h,h=x;break e}}else if(T.elementType===w||typeof w=="object"&&w!==null&&w.$$typeof===ss&&Z_(w)===T.type){t(h,T.sibling),x=r(T,_.props),x.ref=yl(h,T,_),x.return=h,h=x;break e}t(h,T);break}else e(h,T);T=T.sibling}_.type===ma?(x=yo(_.props.children,h.mode,y,_.key),x.return=h,h=x):(y=uf(_.type,_.key,_.props,null,h.mode,y),y.ref=yl(h,x,_),y.return=h,h=y)}return o(h);case pa:e:{for(T=_.key;x!==null;){if(x.key===T)if(x.tag===4&&x.stateNode.containerInfo===_.containerInfo&&x.stateNode.implementation===_.implementation){t(h,x.sibling),x=r(x,_.children||[]),x.return=h,h=x;break e}else{t(h,x);break}else e(h,x);x=x.sibling}x=dh(_,h.mode,y),x.return=h,h=x}return o(h);case ss:return T=_._init,m(h,x,T(_._payload),y)}if(Nl(_))return v(h,x,_,y);if(ml(_))return g(h,x,_,y);cc(h,_)}return typeof _=="string"&&_!==""||typeof _=="number"?(_=""+_,x!==null&&x.tag===6?(t(h,x.sibling),x=r(x,_),x.return=h,h=x):(t(h,x),x=fh(_,h.mode,y),x.return=h,h=x),o(h)):t(h,x)}return m}var qa=eS(!0),tS=eS(!1),Nf=Vs(null),Uf=null,Ea=null,cg=null;function fg(){cg=Ea=Uf=null}function dg(n){var e=Nf.current;bt(Nf),n._currentValue=e}function zp(n,e,t){for(;n!==null;){var i=n.alternate;if((n.childLanes&e)!==e?(n.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),n===t)break;n=n.return}}function Ia(n,e){Uf=n,cg=Ea=null,n=n.dependencies,n!==null&&n.firstContext!==null&&(n.lanes&e&&(Qn=!0),n.firstContext=null)}function Bi(n){var e=n._currentValue;if(cg!==n)if(n={context:n,memoizedValue:e,next:null},Ea===null){if(Uf===null)throw Error(oe(308));Ea=n,Uf.dependencies={lanes:0,firstContext:n}}else Ea=Ea.next=n;return e}var po=null;function hg(n){po===null?po=[n]:po.push(n)}function nS(n,e,t,i){var r=e.interleaved;return r===null?(t.next=t,hg(e)):(t.next=r.next,r.next=t),e.interleaved=t,Wr(n,i)}function Wr(n,e){n.lanes|=e;var t=n.alternate;for(t!==null&&(t.lanes|=e),t=n,n=n.return;n!==null;)n.childLanes|=e,t=n.alternate,t!==null&&(t.childLanes|=e),t=n,n=n.return;return t.tag===3?t.stateNode:null}var os=!1;function pg(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function iS(n,e){n=n.updateQueue,e.updateQueue===n&&(e.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function Br(n,e){return{eventTime:n,lane:e,tag:0,payload:null,callback:null,next:null}}function Es(n,e,t){var i=n.updateQueue;if(i===null)return null;if(i=i.shared,lt&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,Wr(n,t)}return r=i.interleaved,r===null?(e.next=e,hg(i)):(e.next=r.next,r.next=e),i.interleaved=e,Wr(n,t)}function nf(n,e,t){if(e=e.updateQueue,e!==null&&(e=e.shared,(t&4194240)!==0)){var i=e.lanes;i&=n.pendingLanes,t|=i,e.lanes=t,Jm(n,t)}}function Q_(n,e){var t=n.updateQueue,i=n.alternate;if(i!==null&&(i=i.updateQueue,t===i)){var r=null,s=null;if(t=t.firstBaseUpdate,t!==null){do{var o={eventTime:t.eventTime,lane:t.lane,tag:t.tag,payload:t.payload,callback:t.callback,next:null};s===null?r=s=o:s=s.next=o,t=t.next}while(t!==null);s===null?r=s=e:s=s.next=e}else r=s=e;t={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},n.updateQueue=t;return}n=t.lastBaseUpdate,n===null?t.firstBaseUpdate=e:n.next=e,t.lastBaseUpdate=e}function If(n,e,t,i){var r=n.updateQueue;os=!1;var s=r.firstBaseUpdate,o=r.lastBaseUpdate,a=r.shared.pending;if(a!==null){r.shared.pending=null;var l=a,u=l.next;l.next=null,o===null?s=u:o.next=u,o=l;var c=n.alternate;c!==null&&(c=c.updateQueue,a=c.lastBaseUpdate,a!==o&&(a===null?c.firstBaseUpdate=u:a.next=u,c.lastBaseUpdate=l))}if(s!==null){var f=r.baseState;o=0,c=u=l=null,a=s;do{var d=a.lane,p=a.eventTime;if((i&d)===d){c!==null&&(c=c.next={eventTime:p,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var v=n,g=a;switch(d=e,p=t,g.tag){case 1:if(v=g.payload,typeof v=="function"){f=v.call(p,f,d);break e}f=v;break e;case 3:v.flags=v.flags&-65537|128;case 0:if(v=g.payload,d=typeof v=="function"?v.call(p,f,d):v,d==null)break e;f=Bt({},f,d);break e;case 2:os=!0}}a.callback!==null&&a.lane!==0&&(n.flags|=64,d=r.effects,d===null?r.effects=[a]:d.push(a))}else p={eventTime:p,lane:d,tag:a.tag,payload:a.payload,callback:a.callback,next:null},c===null?(u=c=p,l=f):c=c.next=p,o|=d;if(a=a.next,a===null){if(a=r.shared.pending,a===null)break;d=a,a=d.next,d.next=null,r.lastBaseUpdate=d,r.shared.pending=null}}while(!0);if(c===null&&(l=f),r.baseState=l,r.firstBaseUpdate=u,r.lastBaseUpdate=c,e=r.shared.interleaved,e!==null){r=e;do o|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);No|=o,n.lanes=o,n.memoizedState=f}}function J_(n,e,t){if(n=e.effects,e.effects=null,n!==null)for(e=0;e<n.length;e++){var i=n[e],r=i.callback;if(r!==null){if(i.callback=null,i=t,typeof r!="function")throw Error(oe(191,r));r.call(i)}}}var Wu={},mr=Vs(Wu),Su=Vs(Wu),Mu=Vs(Wu);function mo(n){if(n===Wu)throw Error(oe(174));return n}function mg(n,e){switch(Et(Mu,e),Et(Su,n),Et(mr,Wu),n=e.nodeType,n){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:xp(null,"");break;default:n=n===8?e.parentNode:e,e=n.namespaceURI||null,n=n.tagName,e=xp(e,n)}bt(mr),Et(mr,e)}function $a(){bt(mr),bt(Su),bt(Mu)}function rS(n){mo(Mu.current);var e=mo(mr.current),t=xp(e,n.type);e!==t&&(Et(Su,n),Et(mr,t))}function gg(n){Su.current===n&&(bt(mr),bt(Su))}var Ot=Vs(0);function Of(n){for(var e=n;e!==null;){if(e.tag===13){var t=e.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||t.data==="$?"||t.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break;for(;e.sibling===null;){if(e.return===null||e.return===n)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var sh=[];function _g(){for(var n=0;n<sh.length;n++)sh[n]._workInProgressVersionPrimary=null;sh.length=0}var rf=$r.ReactCurrentDispatcher,oh=$r.ReactCurrentBatchConfig,Do=0,zt=null,tn=null,cn=null,Ff=!1,ql=!1,Eu=0,Mw=0;function Sn(){throw Error(oe(321))}function vg(n,e){if(e===null)return!1;for(var t=0;t<e.length&&t<n.length;t++)if(!nr(n[t],e[t]))return!1;return!0}function xg(n,e,t,i,r,s){if(Do=s,zt=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,rf.current=n===null||n.memoizedState===null?Aw:Cw,n=t(i,r),ql){s=0;do{if(ql=!1,Eu=0,25<=s)throw Error(oe(301));s+=1,cn=tn=null,e.updateQueue=null,rf.current=Rw,n=t(i,r)}while(ql)}if(rf.current=kf,e=tn!==null&&tn.next!==null,Do=0,cn=tn=zt=null,Ff=!1,e)throw Error(oe(300));return n}function yg(){var n=Eu!==0;return Eu=0,n}function rr(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return cn===null?zt.memoizedState=cn=n:cn=cn.next=n,cn}function Hi(){if(tn===null){var n=zt.alternate;n=n!==null?n.memoizedState:null}else n=tn.next;var e=cn===null?zt.memoizedState:cn.next;if(e!==null)cn=e,tn=n;else{if(n===null)throw Error(oe(310));tn=n,n={memoizedState:tn.memoizedState,baseState:tn.baseState,baseQueue:tn.baseQueue,queue:tn.queue,next:null},cn===null?zt.memoizedState=cn=n:cn=cn.next=n}return cn}function Tu(n,e){return typeof e=="function"?e(n):e}function ah(n){var e=Hi(),t=e.queue;if(t===null)throw Error(oe(311));t.lastRenderedReducer=n;var i=tn,r=i.baseQueue,s=t.pending;if(s!==null){if(r!==null){var o=r.next;r.next=s.next,s.next=o}i.baseQueue=r=s,t.pending=null}if(r!==null){s=r.next,i=i.baseState;var a=o=null,l=null,u=s;do{var c=u.lane;if((Do&c)===c)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),i=u.hasEagerState?u.eagerState:n(i,u.action);else{var f={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=f,o=i):l=l.next=f,zt.lanes|=c,No|=c}u=u.next}while(u!==null&&u!==s);l===null?o=i:l.next=a,nr(i,e.memoizedState)||(Qn=!0),e.memoizedState=i,e.baseState=o,e.baseQueue=l,t.lastRenderedState=i}if(n=t.interleaved,n!==null){r=n;do s=r.lane,zt.lanes|=s,No|=s,r=r.next;while(r!==n)}else r===null&&(t.lanes=0);return[e.memoizedState,t.dispatch]}function lh(n){var e=Hi(),t=e.queue;if(t===null)throw Error(oe(311));t.lastRenderedReducer=n;var i=t.dispatch,r=t.pending,s=e.memoizedState;if(r!==null){t.pending=null;var o=r=r.next;do s=n(s,o.action),o=o.next;while(o!==r);nr(s,e.memoizedState)||(Qn=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),t.lastRenderedState=s}return[s,i]}function sS(){}function oS(n,e){var t=zt,i=Hi(),r=e(),s=!nr(i.memoizedState,r);if(s&&(i.memoizedState=r,Qn=!0),i=i.queue,Sg(uS.bind(null,t,i,n),[n]),i.getSnapshot!==e||s||cn!==null&&cn.memoizedState.tag&1){if(t.flags|=2048,wu(9,lS.bind(null,t,i,r,e),void 0,null),dn===null)throw Error(oe(349));Do&30||aS(t,e,r)}return r}function aS(n,e,t){n.flags|=16384,n={getSnapshot:e,value:t},e=zt.updateQueue,e===null?(e={lastEffect:null,stores:null},zt.updateQueue=e,e.stores=[n]):(t=e.stores,t===null?e.stores=[n]:t.push(n))}function lS(n,e,t,i){e.value=t,e.getSnapshot=i,cS(e)&&fS(n)}function uS(n,e,t){return t(function(){cS(e)&&fS(n)})}function cS(n){var e=n.getSnapshot;n=n.value;try{var t=e();return!nr(n,t)}catch{return!0}}function fS(n){var e=Wr(n,1);e!==null&&tr(e,n,1,-1)}function e0(n){var e=rr();return typeof n=="function"&&(n=n()),e.memoizedState=e.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Tu,lastRenderedState:n},e.queue=n,n=n.dispatch=ww.bind(null,zt,n),[e.memoizedState,n]}function wu(n,e,t,i){return n={tag:n,create:e,destroy:t,deps:i,next:null},e=zt.updateQueue,e===null?(e={lastEffect:null,stores:null},zt.updateQueue=e,e.lastEffect=n.next=n):(t=e.lastEffect,t===null?e.lastEffect=n.next=n:(i=t.next,t.next=n,n.next=i,e.lastEffect=n)),n}function dS(){return Hi().memoizedState}function sf(n,e,t,i){var r=rr();zt.flags|=n,r.memoizedState=wu(1|e,t,void 0,i===void 0?null:i)}function _d(n,e,t,i){var r=Hi();i=i===void 0?null:i;var s=void 0;if(tn!==null){var o=tn.memoizedState;if(s=o.destroy,i!==null&&vg(i,o.deps)){r.memoizedState=wu(e,t,s,i);return}}zt.flags|=n,r.memoizedState=wu(1|e,t,s,i)}function t0(n,e){return sf(8390656,8,n,e)}function Sg(n,e){return _d(2048,8,n,e)}function hS(n,e){return _d(4,2,n,e)}function pS(n,e){return _d(4,4,n,e)}function mS(n,e){if(typeof e=="function")return n=n(),e(n),function(){e(null)};if(e!=null)return n=n(),e.current=n,function(){e.current=null}}function gS(n,e,t){return t=t!=null?t.concat([n]):null,_d(4,4,mS.bind(null,e,n),t)}function Mg(){}function _S(n,e){var t=Hi();e=e===void 0?null:e;var i=t.memoizedState;return i!==null&&e!==null&&vg(e,i[1])?i[0]:(t.memoizedState=[n,e],n)}function vS(n,e){var t=Hi();e=e===void 0?null:e;var i=t.memoizedState;return i!==null&&e!==null&&vg(e,i[1])?i[0]:(n=n(),t.memoizedState=[n,e],n)}function xS(n,e,t){return Do&21?(nr(t,e)||(t=Ty(),zt.lanes|=t,No|=t,n.baseState=!0),e):(n.baseState&&(n.baseState=!1,Qn=!0),n.memoizedState=t)}function Ew(n,e){var t=gt;gt=t!==0&&4>t?t:4,n(!0);var i=oh.transition;oh.transition={};try{n(!1),e()}finally{gt=t,oh.transition=i}}function yS(){return Hi().memoizedState}function Tw(n,e,t){var i=ws(n);if(t={lane:i,action:t,hasEagerState:!1,eagerState:null,next:null},SS(n))MS(e,t);else if(t=nS(n,e,t,i),t!==null){var r=Wn();tr(t,n,i,r),ES(t,e,i)}}function ww(n,e,t){var i=ws(n),r={lane:i,action:t,hasEagerState:!1,eagerState:null,next:null};if(SS(n))MS(e,r);else{var s=n.alternate;if(n.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,t);if(r.hasEagerState=!0,r.eagerState=a,nr(a,o)){var l=e.interleaved;l===null?(r.next=r,hg(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}t=nS(n,e,r,i),t!==null&&(r=Wn(),tr(t,n,i,r),ES(t,e,i))}}function SS(n){var e=n.alternate;return n===zt||e!==null&&e===zt}function MS(n,e){ql=Ff=!0;var t=n.pending;t===null?e.next=e:(e.next=t.next,t.next=e),n.pending=e}function ES(n,e,t){if(t&4194240){var i=e.lanes;i&=n.pendingLanes,t|=i,e.lanes=t,Jm(n,t)}}var kf={readContext:Bi,useCallback:Sn,useContext:Sn,useEffect:Sn,useImperativeHandle:Sn,useInsertionEffect:Sn,useLayoutEffect:Sn,useMemo:Sn,useReducer:Sn,useRef:Sn,useState:Sn,useDebugValue:Sn,useDeferredValue:Sn,useTransition:Sn,useMutableSource:Sn,useSyncExternalStore:Sn,useId:Sn,unstable_isNewReconciler:!1},Aw={readContext:Bi,useCallback:function(n,e){return rr().memoizedState=[n,e===void 0?null:e],n},useContext:Bi,useEffect:t0,useImperativeHandle:function(n,e,t){return t=t!=null?t.concat([n]):null,sf(4194308,4,mS.bind(null,e,n),t)},useLayoutEffect:function(n,e){return sf(4194308,4,n,e)},useInsertionEffect:function(n,e){return sf(4,2,n,e)},useMemo:function(n,e){var t=rr();return e=e===void 0?null:e,n=n(),t.memoizedState=[n,e],n},useReducer:function(n,e,t){var i=rr();return e=t!==void 0?t(e):e,i.memoizedState=i.baseState=e,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:e},i.queue=n,n=n.dispatch=Tw.bind(null,zt,n),[i.memoizedState,n]},useRef:function(n){var e=rr();return n={current:n},e.memoizedState=n},useState:e0,useDebugValue:Mg,useDeferredValue:function(n){return rr().memoizedState=n},useTransition:function(){var n=e0(!1),e=n[0];return n=Ew.bind(null,n[1]),rr().memoizedState=n,[e,n]},useMutableSource:function(){},useSyncExternalStore:function(n,e,t){var i=zt,r=rr();if(Dt){if(t===void 0)throw Error(oe(407));t=t()}else{if(t=e(),dn===null)throw Error(oe(349));Do&30||aS(i,e,t)}r.memoizedState=t;var s={value:t,getSnapshot:e};return r.queue=s,t0(uS.bind(null,i,s,n),[n]),i.flags|=2048,wu(9,lS.bind(null,i,s,t,e),void 0,null),t},useId:function(){var n=rr(),e=dn.identifierPrefix;if(Dt){var t=Or,i=Ir;t=(i&~(1<<32-er(i)-1)).toString(32)+t,e=":"+e+"R"+t,t=Eu++,0<t&&(e+="H"+t.toString(32)),e+=":"}else t=Mw++,e=":"+e+"r"+t.toString(32)+":";return n.memoizedState=e},unstable_isNewReconciler:!1},Cw={readContext:Bi,useCallback:_S,useContext:Bi,useEffect:Sg,useImperativeHandle:gS,useInsertionEffect:hS,useLayoutEffect:pS,useMemo:vS,useReducer:ah,useRef:dS,useState:function(){return ah(Tu)},useDebugValue:Mg,useDeferredValue:function(n){var e=Hi();return xS(e,tn.memoizedState,n)},useTransition:function(){var n=ah(Tu)[0],e=Hi().memoizedState;return[n,e]},useMutableSource:sS,useSyncExternalStore:oS,useId:yS,unstable_isNewReconciler:!1},Rw={readContext:Bi,useCallback:_S,useContext:Bi,useEffect:Sg,useImperativeHandle:gS,useInsertionEffect:hS,useLayoutEffect:pS,useMemo:vS,useReducer:lh,useRef:dS,useState:function(){return lh(Tu)},useDebugValue:Mg,useDeferredValue:function(n){var e=Hi();return tn===null?e.memoizedState=n:xS(e,tn.memoizedState,n)},useTransition:function(){var n=lh(Tu)[0],e=Hi().memoizedState;return[n,e]},useMutableSource:sS,useSyncExternalStore:oS,useId:yS,unstable_isNewReconciler:!1};function qi(n,e){if(n&&n.defaultProps){e=Bt({},e),n=n.defaultProps;for(var t in n)e[t]===void 0&&(e[t]=n[t]);return e}return e}function Bp(n,e,t,i){e=n.memoizedState,t=t(i,e),t=t==null?e:Bt({},e,t),n.memoizedState=t,n.lanes===0&&(n.updateQueue.baseState=t)}var vd={isMounted:function(n){return(n=n._reactInternals)?Go(n)===n:!1},enqueueSetState:function(n,e,t){n=n._reactInternals;var i=Wn(),r=ws(n),s=Br(i,r);s.payload=e,t!=null&&(s.callback=t),e=Es(n,s,r),e!==null&&(tr(e,n,r,i),nf(e,n,r))},enqueueReplaceState:function(n,e,t){n=n._reactInternals;var i=Wn(),r=ws(n),s=Br(i,r);s.tag=1,s.payload=e,t!=null&&(s.callback=t),e=Es(n,s,r),e!==null&&(tr(e,n,r,i),nf(e,n,r))},enqueueForceUpdate:function(n,e){n=n._reactInternals;var t=Wn(),i=ws(n),r=Br(t,i);r.tag=2,e!=null&&(r.callback=e),e=Es(n,r,i),e!==null&&(tr(e,n,i,t),nf(e,n,i))}};function n0(n,e,t,i,r,s,o){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(i,s,o):e.prototype&&e.prototype.isPureReactComponent?!_u(t,i)||!_u(r,s):!0}function TS(n,e,t){var i=!1,r=Os,s=e.contextType;return typeof s=="object"&&s!==null?s=Bi(s):(r=ei(e)?Po:Ln.current,i=e.contextTypes,s=(i=i!=null)?ja(n,r):Os),e=new e(t,s),n.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=vd,n.stateNode=e,e._reactInternals=n,i&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=r,n.__reactInternalMemoizedMaskedChildContext=s),e}function i0(n,e,t,i){n=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(t,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(t,i),e.state!==n&&vd.enqueueReplaceState(e,e.state,null)}function Hp(n,e,t,i){var r=n.stateNode;r.props=t,r.state=n.memoizedState,r.refs={},pg(n);var s=e.contextType;typeof s=="object"&&s!==null?r.context=Bi(s):(s=ei(e)?Po:Ln.current,r.context=ja(n,s)),r.state=n.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Bp(n,e,s,t),r.state=n.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&vd.enqueueReplaceState(r,r.state,null),If(n,t,r,i),r.state=n.memoizedState),typeof r.componentDidMount=="function"&&(n.flags|=4194308)}function Ka(n,e){try{var t="",i=e;do t+=nT(i),i=i.return;while(i);var r=t}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:n,source:e,stack:r,digest:null}}function uh(n,e,t){return{value:n,source:null,stack:t??null,digest:e??null}}function Gp(n,e){try{console.error(e.value)}catch(t){setTimeout(function(){throw t})}}var bw=typeof WeakMap=="function"?WeakMap:Map;function wS(n,e,t){t=Br(-1,t),t.tag=3,t.payload={element:null};var i=e.value;return t.callback=function(){Bf||(Bf=!0,Qp=i),Gp(n,e)},t}function AS(n,e,t){t=Br(-1,t),t.tag=3;var i=n.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;t.payload=function(){return i(r)},t.callback=function(){Gp(n,e)}}var s=n.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(t.callback=function(){Gp(n,e),typeof i!="function"&&(Ts===null?Ts=new Set([this]):Ts.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),t}function r0(n,e,t){var i=n.pingCache;if(i===null){i=n.pingCache=new bw;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(t)||(r.add(t),n=Vw.bind(null,n,e,t),e.then(n,n))}function s0(n){do{var e;if((e=n.tag===13)&&(e=n.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return n;n=n.return}while(n!==null);return null}function o0(n,e,t,i,r){return n.mode&1?(n.flags|=65536,n.lanes=r,n):(n===e?n.flags|=65536:(n.flags|=128,t.flags|=131072,t.flags&=-52805,t.tag===1&&(t.alternate===null?t.tag=17:(e=Br(-1,1),e.tag=2,Es(t,e,1))),t.lanes|=1),n)}var Pw=$r.ReactCurrentOwner,Qn=!1;function Fn(n,e,t,i){e.child=n===null?tS(e,null,t,i):qa(e,n.child,t,i)}function a0(n,e,t,i,r){t=t.render;var s=e.ref;return Ia(e,r),i=xg(n,e,t,i,s,r),t=yg(),n!==null&&!Qn?(e.updateQueue=n.updateQueue,e.flags&=-2053,n.lanes&=~r,Xr(n,e,r)):(Dt&&t&&ag(e),e.flags|=1,Fn(n,e,i,r),e.child)}function l0(n,e,t,i,r){if(n===null){var s=t.type;return typeof s=="function"&&!Pg(s)&&s.defaultProps===void 0&&t.compare===null&&t.defaultProps===void 0?(e.tag=15,e.type=s,CS(n,e,s,i,r)):(n=uf(t.type,null,i,e,e.mode,r),n.ref=e.ref,n.return=e,e.child=n)}if(s=n.child,!(n.lanes&r)){var o=s.memoizedProps;if(t=t.compare,t=t!==null?t:_u,t(o,i)&&n.ref===e.ref)return Xr(n,e,r)}return e.flags|=1,n=As(s,i),n.ref=e.ref,n.return=e,e.child=n}function CS(n,e,t,i,r){if(n!==null){var s=n.memoizedProps;if(_u(s,i)&&n.ref===e.ref)if(Qn=!1,e.pendingProps=i=s,(n.lanes&r)!==0)n.flags&131072&&(Qn=!0);else return e.lanes=n.lanes,Xr(n,e,r)}return Vp(n,e,t,i,r)}function RS(n,e,t){var i=e.pendingProps,r=i.children,s=n!==null?n.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},Et(wa,pi),pi|=t;else{if(!(t&1073741824))return n=s!==null?s.baseLanes|t:t,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:n,cachePool:null,transitions:null},e.updateQueue=null,Et(wa,pi),pi|=n,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:t,Et(wa,pi),pi|=i}else s!==null?(i=s.baseLanes|t,e.memoizedState=null):i=t,Et(wa,pi),pi|=i;return Fn(n,e,r,t),e.child}function bS(n,e){var t=e.ref;(n===null&&t!==null||n!==null&&n.ref!==t)&&(e.flags|=512,e.flags|=2097152)}function Vp(n,e,t,i,r){var s=ei(t)?Po:Ln.current;return s=ja(e,s),Ia(e,r),t=xg(n,e,t,i,s,r),i=yg(),n!==null&&!Qn?(e.updateQueue=n.updateQueue,e.flags&=-2053,n.lanes&=~r,Xr(n,e,r)):(Dt&&i&&ag(e),e.flags|=1,Fn(n,e,t,r),e.child)}function u0(n,e,t,i,r){if(ei(t)){var s=!0;Pf(e)}else s=!1;if(Ia(e,r),e.stateNode===null)of(n,e),TS(e,t,i),Hp(e,t,i,r),i=!0;else if(n===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,u=t.contextType;typeof u=="object"&&u!==null?u=Bi(u):(u=ei(t)?Po:Ln.current,u=ja(e,u));var c=t.getDerivedStateFromProps,f=typeof c=="function"||typeof o.getSnapshotBeforeUpdate=="function";f||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==i||l!==u)&&i0(e,o,i,u),os=!1;var d=e.memoizedState;o.state=d,If(e,i,o,r),l=e.memoizedState,a!==i||d!==l||Jn.current||os?(typeof c=="function"&&(Bp(e,t,c,i),l=e.memoizedState),(a=os||n0(e,t,a,i,d,l,u))?(f||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),o.props=i,o.state=l,o.context=u,i=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{o=e.stateNode,iS(n,e),a=e.memoizedProps,u=e.type===e.elementType?a:qi(e.type,a),o.props=u,f=e.pendingProps,d=o.context,l=t.contextType,typeof l=="object"&&l!==null?l=Bi(l):(l=ei(t)?Po:Ln.current,l=ja(e,l));var p=t.getDerivedStateFromProps;(c=typeof p=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==f||d!==l)&&i0(e,o,i,l),os=!1,d=e.memoizedState,o.state=d,If(e,i,o,r);var v=e.memoizedState;a!==f||d!==v||Jn.current||os?(typeof p=="function"&&(Bp(e,t,p,i),v=e.memoizedState),(u=os||n0(e,t,u,i,d,v,l)||!1)?(c||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(i,v,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(i,v,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===n.memoizedProps&&d===n.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===n.memoizedProps&&d===n.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=v),o.props=i,o.state=v,o.context=l,i=u):(typeof o.componentDidUpdate!="function"||a===n.memoizedProps&&d===n.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===n.memoizedProps&&d===n.memoizedState||(e.flags|=1024),i=!1)}return Wp(n,e,t,i,s,r)}function Wp(n,e,t,i,r,s){bS(n,e);var o=(e.flags&128)!==0;if(!i&&!o)return r&&q_(e,t,!1),Xr(n,e,s);i=e.stateNode,Pw.current=e;var a=o&&typeof t.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,n!==null&&o?(e.child=qa(e,n.child,null,s),e.child=qa(e,null,a,s)):Fn(n,e,a,s),e.memoizedState=i.state,r&&q_(e,t,!0),e.child}function PS(n){var e=n.stateNode;e.pendingContext?Y_(n,e.pendingContext,e.pendingContext!==e.context):e.context&&Y_(n,e.context,!1),mg(n,e.containerInfo)}function c0(n,e,t,i,r){return Ya(),ug(r),e.flags|=256,Fn(n,e,t,i),e.child}var Xp={dehydrated:null,treeContext:null,retryLane:0};function jp(n){return{baseLanes:n,cachePool:null,transitions:null}}function LS(n,e,t){var i=e.pendingProps,r=Ot.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=n!==null&&n.memoizedState===null?!1:(r&2)!==0),a?(s=!0,e.flags&=-129):(n===null||n.memoizedState!==null)&&(r|=1),Et(Ot,r&1),n===null)return kp(e),n=e.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?(e.mode&1?n.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=i.children,n=i.fallback,s?(i=e.mode,s=e.child,o={mode:"hidden",children:o},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Sd(o,i,0,null),n=yo(n,i,t,null),s.return=e,n.return=e,s.sibling=n,e.child=s,e.child.memoizedState=jp(t),e.memoizedState=Xp,n):Eg(e,o));if(r=n.memoizedState,r!==null&&(a=r.dehydrated,a!==null))return Lw(n,e,o,i,a,r,t);if(s){s=i.fallback,o=e.mode,r=n.child,a=r.sibling;var l={mode:"hidden",children:i.children};return!(o&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=As(r,l),i.subtreeFlags=r.subtreeFlags&14680064),a!==null?s=As(a,s):(s=yo(s,o,t,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,o=n.child.memoizedState,o=o===null?jp(t):{baseLanes:o.baseLanes|t,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=n.childLanes&~t,e.memoizedState=Xp,i}return s=n.child,n=s.sibling,i=As(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=t),i.return=e,i.sibling=null,n!==null&&(t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)),e.child=i,e.memoizedState=null,i}function Eg(n,e){return e=Sd({mode:"visible",children:e},n.mode,0,null),e.return=n,n.child=e}function fc(n,e,t,i){return i!==null&&ug(i),qa(e,n.child,null,t),n=Eg(e,e.pendingProps.children),n.flags|=2,e.memoizedState=null,n}function Lw(n,e,t,i,r,s,o){if(t)return e.flags&256?(e.flags&=-257,i=uh(Error(oe(422))),fc(n,e,o,i)):e.memoizedState!==null?(e.child=n.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=Sd({mode:"visible",children:i.children},r,0,null),s=yo(s,r,o,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&qa(e,n.child,null,o),e.child.memoizedState=jp(o),e.memoizedState=Xp,s);if(!(e.mode&1))return fc(n,e,o,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var a=i.dgst;return i=a,s=Error(oe(419)),i=uh(s,i,void 0),fc(n,e,o,i)}if(a=(o&n.childLanes)!==0,Qn||a){if(i=dn,i!==null){switch(o&-o){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|o)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,Wr(n,r),tr(i,n,r,-1))}return bg(),i=uh(Error(oe(421))),fc(n,e,o,i)}return r.data==="$?"?(e.flags|=128,e.child=n.child,e=Ww.bind(null,n),r._reactRetry=e,null):(n=s.treeContext,xi=Ms(r.nextSibling),Si=e,Dt=!0,Ki=null,n!==null&&(Pi[Li++]=Ir,Pi[Li++]=Or,Pi[Li++]=Lo,Ir=n.id,Or=n.overflow,Lo=e),e=Eg(e,i.children),e.flags|=4096,e)}function f0(n,e,t){n.lanes|=e;var i=n.alternate;i!==null&&(i.lanes|=e),zp(n.return,e,t)}function ch(n,e,t,i,r){var s=n.memoizedState;s===null?n.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:t,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=t,s.tailMode=r)}function DS(n,e,t){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(Fn(n,e,i.children,t),i=Ot.current,i&2)i=i&1|2,e.flags|=128;else{if(n!==null&&n.flags&128)e:for(n=e.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&f0(n,t,e);else if(n.tag===19)f0(n,t,e);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break e;for(;n.sibling===null;){if(n.return===null||n.return===e)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}i&=1}if(Et(Ot,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(t=e.child,r=null;t!==null;)n=t.alternate,n!==null&&Of(n)===null&&(r=t),t=t.sibling;t=r,t===null?(r=e.child,e.child=null):(r=t.sibling,t.sibling=null),ch(e,!1,r,t,s);break;case"backwards":for(t=null,r=e.child,e.child=null;r!==null;){if(n=r.alternate,n!==null&&Of(n)===null){e.child=r;break}n=r.sibling,r.sibling=t,t=r,r=n}ch(e,!0,t,null,s);break;case"together":ch(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function of(n,e){!(e.mode&1)&&n!==null&&(n.alternate=null,e.alternate=null,e.flags|=2)}function Xr(n,e,t){if(n!==null&&(e.dependencies=n.dependencies),No|=e.lanes,!(t&e.childLanes))return null;if(n!==null&&e.child!==n.child)throw Error(oe(153));if(e.child!==null){for(n=e.child,t=As(n,n.pendingProps),e.child=t,t.return=e;n.sibling!==null;)n=n.sibling,t=t.sibling=As(n,n.pendingProps),t.return=e;t.sibling=null}return e.child}function Dw(n,e,t){switch(e.tag){case 3:PS(e),Ya();break;case 5:rS(e);break;case 1:ei(e.type)&&Pf(e);break;case 4:mg(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;Et(Nf,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(Et(Ot,Ot.current&1),e.flags|=128,null):t&e.child.childLanes?LS(n,e,t):(Et(Ot,Ot.current&1),n=Xr(n,e,t),n!==null?n.sibling:null);Et(Ot,Ot.current&1);break;case 19:if(i=(t&e.childLanes)!==0,n.flags&128){if(i)return DS(n,e,t);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),Et(Ot,Ot.current),i)break;return null;case 22:case 23:return e.lanes=0,RS(n,e,t)}return Xr(n,e,t)}var NS,Yp,US,IS;NS=function(n,e){for(var t=e.child;t!==null;){if(t.tag===5||t.tag===6)n.appendChild(t.stateNode);else if(t.tag!==4&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return;t=t.return}t.sibling.return=t.return,t=t.sibling}};Yp=function(){};US=function(n,e,t,i){var r=n.memoizedProps;if(r!==i){n=e.stateNode,mo(mr.current);var s=null;switch(t){case"input":r=mp(n,r),i=mp(n,i),s=[];break;case"select":r=Bt({},r,{value:void 0}),i=Bt({},i,{value:void 0}),s=[];break;case"textarea":r=vp(n,r),i=vp(n,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(n.onclick=Rf)}yp(t,i);var o;t=null;for(u in r)if(!i.hasOwnProperty(u)&&r.hasOwnProperty(u)&&r[u]!=null)if(u==="style"){var a=r[u];for(o in a)a.hasOwnProperty(o)&&(t||(t={}),t[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(cu.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in i){var l=i[u];if(a=r!=null?r[u]:void 0,i.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(t||(t={}),t[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(t||(t={}),t[o]=l[o])}else t||(s||(s=[]),s.push(u,t)),t=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(cu.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&At("scroll",n),s||a===l||(s=[])):(s=s||[]).push(u,l))}t&&(s=s||[]).push("style",t);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};IS=function(n,e,t,i){t!==i&&(e.flags|=4)};function Sl(n,e){if(!Dt)switch(n.tailMode){case"hidden":e=n.tail;for(var t=null;e!==null;)e.alternate!==null&&(t=e),e=e.sibling;t===null?n.tail=null:t.sibling=null;break;case"collapsed":t=n.tail;for(var i=null;t!==null;)t.alternate!==null&&(i=t),t=t.sibling;i===null?e||n.tail===null?n.tail=null:n.tail.sibling=null:i.sibling=null}}function Mn(n){var e=n.alternate!==null&&n.alternate.child===n.child,t=0,i=0;if(e)for(var r=n.child;r!==null;)t|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=n,r=r.sibling;else for(r=n.child;r!==null;)t|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=n,r=r.sibling;return n.subtreeFlags|=i,n.childLanes=t,e}function Nw(n,e,t){var i=e.pendingProps;switch(lg(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Mn(e),null;case 1:return ei(e.type)&&bf(),Mn(e),null;case 3:return i=e.stateNode,$a(),bt(Jn),bt(Ln),_g(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(n===null||n.child===null)&&(uc(e)?e.flags|=4:n===null||n.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Ki!==null&&(tm(Ki),Ki=null))),Yp(n,e),Mn(e),null;case 5:gg(e);var r=mo(Mu.current);if(t=e.type,n!==null&&e.stateNode!=null)US(n,e,t,i,r),n.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(oe(166));return Mn(e),null}if(n=mo(mr.current),uc(e)){i=e.stateNode,t=e.type;var s=e.memoizedProps;switch(i[ur]=e,i[yu]=s,n=(e.mode&1)!==0,t){case"dialog":At("cancel",i),At("close",i);break;case"iframe":case"object":case"embed":At("load",i);break;case"video":case"audio":for(r=0;r<Il.length;r++)At(Il[r],i);break;case"source":At("error",i);break;case"img":case"image":case"link":At("error",i),At("load",i);break;case"details":At("toggle",i);break;case"input":y_(i,s),At("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},At("invalid",i);break;case"textarea":M_(i,s),At("invalid",i)}yp(t,s),r=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?i.textContent!==a&&(s.suppressHydrationWarning!==!0&&lc(i.textContent,a,n),r=["children",a]):typeof a=="number"&&i.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&lc(i.textContent,a,n),r=["children",""+a]):cu.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&At("scroll",i)}switch(t){case"input":ec(i),S_(i,s,!0);break;case"textarea":ec(i),E_(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=Rf)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{o=r.nodeType===9?r:r.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=uy(t)),n==="http://www.w3.org/1999/xhtml"?t==="script"?(n=o.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof i.is=="string"?n=o.createElement(t,{is:i.is}):(n=o.createElement(t),t==="select"&&(o=n,i.multiple?o.multiple=!0:i.size&&(o.size=i.size))):n=o.createElementNS(n,t),n[ur]=e,n[yu]=i,NS(n,e,!1,!1),e.stateNode=n;e:{switch(o=Sp(t,i),t){case"dialog":At("cancel",n),At("close",n),r=i;break;case"iframe":case"object":case"embed":At("load",n),r=i;break;case"video":case"audio":for(r=0;r<Il.length;r++)At(Il[r],n);r=i;break;case"source":At("error",n),r=i;break;case"img":case"image":case"link":At("error",n),At("load",n),r=i;break;case"details":At("toggle",n),r=i;break;case"input":y_(n,i),r=mp(n,i),At("invalid",n);break;case"option":r=i;break;case"select":n._wrapperState={wasMultiple:!!i.multiple},r=Bt({},i,{value:void 0}),At("invalid",n);break;case"textarea":M_(n,i),r=vp(n,i),At("invalid",n);break;default:r=i}yp(t,r),a=r;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?dy(n,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&cy(n,l)):s==="children"?typeof l=="string"?(t!=="textarea"||l!=="")&&fu(n,l):typeof l=="number"&&fu(n,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(cu.hasOwnProperty(s)?l!=null&&s==="onScroll"&&At("scroll",n):l!=null&&Ym(n,s,l,o))}switch(t){case"input":ec(n),S_(n,i,!1);break;case"textarea":ec(n),E_(n);break;case"option":i.value!=null&&n.setAttribute("value",""+Is(i.value));break;case"select":n.multiple=!!i.multiple,s=i.value,s!=null?La(n,!!i.multiple,s,!1):i.defaultValue!=null&&La(n,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(n.onclick=Rf)}switch(t){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Mn(e),null;case 6:if(n&&e.stateNode!=null)IS(n,e,n.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(oe(166));if(t=mo(Mu.current),mo(mr.current),uc(e)){if(i=e.stateNode,t=e.memoizedProps,i[ur]=e,(s=i.nodeValue!==t)&&(n=Si,n!==null))switch(n.tag){case 3:lc(i.nodeValue,t,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&lc(i.nodeValue,t,(n.mode&1)!==0)}s&&(e.flags|=4)}else i=(t.nodeType===9?t:t.ownerDocument).createTextNode(i),i[ur]=e,e.stateNode=i}return Mn(e),null;case 13:if(bt(Ot),i=e.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(Dt&&xi!==null&&e.mode&1&&!(e.flags&128))Jy(),Ya(),e.flags|=98560,s=!1;else if(s=uc(e),i!==null&&i.dehydrated!==null){if(n===null){if(!s)throw Error(oe(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(oe(317));s[ur]=e}else Ya(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Mn(e),s=!1}else Ki!==null&&(tm(Ki),Ki=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=t,e):(i=i!==null,i!==(n!==null&&n.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(n===null||Ot.current&1?rn===0&&(rn=3):bg())),e.updateQueue!==null&&(e.flags|=4),Mn(e),null);case 4:return $a(),Yp(n,e),n===null&&vu(e.stateNode.containerInfo),Mn(e),null;case 10:return dg(e.type._context),Mn(e),null;case 17:return ei(e.type)&&bf(),Mn(e),null;case 19:if(bt(Ot),s=e.memoizedState,s===null)return Mn(e),null;if(i=(e.flags&128)!==0,o=s.rendering,o===null)if(i)Sl(s,!1);else{if(rn!==0||n!==null&&n.flags&128)for(n=e.child;n!==null;){if(o=Of(n),o!==null){for(e.flags|=128,Sl(s,!1),i=o.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=t,t=e.child;t!==null;)s=t,n=i,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=n,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,n=o.dependencies,s.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t=t.sibling;return Et(Ot,Ot.current&1|2),e.child}n=n.sibling}s.tail!==null&&Wt()>Za&&(e.flags|=128,i=!0,Sl(s,!1),e.lanes=4194304)}else{if(!i)if(n=Of(o),n!==null){if(e.flags|=128,i=!0,t=n.updateQueue,t!==null&&(e.updateQueue=t,e.flags|=4),Sl(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!Dt)return Mn(e),null}else 2*Wt()-s.renderingStartTime>Za&&t!==1073741824&&(e.flags|=128,i=!0,Sl(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(t=s.last,t!==null?t.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Wt(),e.sibling=null,t=Ot.current,Et(Ot,i?t&1|2:t&1),e):(Mn(e),null);case 22:case 23:return Rg(),i=e.memoizedState!==null,n!==null&&n.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?pi&1073741824&&(Mn(e),e.subtreeFlags&6&&(e.flags|=8192)):Mn(e),null;case 24:return null;case 25:return null}throw Error(oe(156,e.tag))}function Uw(n,e){switch(lg(e),e.tag){case 1:return ei(e.type)&&bf(),n=e.flags,n&65536?(e.flags=n&-65537|128,e):null;case 3:return $a(),bt(Jn),bt(Ln),_g(),n=e.flags,n&65536&&!(n&128)?(e.flags=n&-65537|128,e):null;case 5:return gg(e),null;case 13:if(bt(Ot),n=e.memoizedState,n!==null&&n.dehydrated!==null){if(e.alternate===null)throw Error(oe(340));Ya()}return n=e.flags,n&65536?(e.flags=n&-65537|128,e):null;case 19:return bt(Ot),null;case 4:return $a(),null;case 10:return dg(e.type._context),null;case 22:case 23:return Rg(),null;case 24:return null;default:return null}}var dc=!1,Cn=!1,Iw=typeof WeakSet=="function"?WeakSet:Set,Se=null;function Ta(n,e){var t=n.ref;if(t!==null)if(typeof t=="function")try{t(null)}catch(i){Ht(n,e,i)}else t.current=null}function qp(n,e,t){try{t()}catch(i){Ht(n,e,i)}}var d0=!1;function Ow(n,e){if(Lp=wf,n=By(),og(n)){if("selectionStart"in n)var t={start:n.selectionStart,end:n.selectionEnd};else e:{t=(t=n.ownerDocument)&&t.defaultView||window;var i=t.getSelection&&t.getSelection();if(i&&i.rangeCount!==0){t=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{t.nodeType,s.nodeType}catch{t=null;break e}var o=0,a=-1,l=-1,u=0,c=0,f=n,d=null;t:for(;;){for(var p;f!==t||r!==0&&f.nodeType!==3||(a=o+r),f!==s||i!==0&&f.nodeType!==3||(l=o+i),f.nodeType===3&&(o+=f.nodeValue.length),(p=f.firstChild)!==null;)d=f,f=p;for(;;){if(f===n)break t;if(d===t&&++u===r&&(a=o),d===s&&++c===i&&(l=o),(p=f.nextSibling)!==null)break;f=d,d=f.parentNode}f=p}t=a===-1||l===-1?null:{start:a,end:l}}else t=null}t=t||{start:0,end:0}}else t=null;for(Dp={focusedElem:n,selectionRange:t},wf=!1,Se=e;Se!==null;)if(e=Se,n=e.child,(e.subtreeFlags&1028)!==0&&n!==null)n.return=e,Se=n;else for(;Se!==null;){e=Se;try{var v=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(v!==null){var g=v.memoizedProps,m=v.memoizedState,h=e.stateNode,x=h.getSnapshotBeforeUpdate(e.elementType===e.type?g:qi(e.type,g),m);h.__reactInternalSnapshotBeforeUpdate=x}break;case 3:var _=e.stateNode.containerInfo;_.nodeType===1?_.textContent="":_.nodeType===9&&_.documentElement&&_.removeChild(_.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(oe(163))}}catch(y){Ht(e,e.return,y)}if(n=e.sibling,n!==null){n.return=e.return,Se=n;break}Se=e.return}return v=d0,d0=!1,v}function $l(n,e,t){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&n)===n){var s=r.destroy;r.destroy=void 0,s!==void 0&&qp(e,t,s)}r=r.next}while(r!==i)}}function xd(n,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var t=e=e.next;do{if((t.tag&n)===n){var i=t.create;t.destroy=i()}t=t.next}while(t!==e)}}function $p(n){var e=n.ref;if(e!==null){var t=n.stateNode;switch(n.tag){case 5:n=t;break;default:n=t}typeof e=="function"?e(n):e.current=n}}function OS(n){var e=n.alternate;e!==null&&(n.alternate=null,OS(e)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(e=n.stateNode,e!==null&&(delete e[ur],delete e[yu],delete e[Ip],delete e[vw],delete e[xw])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function FS(n){return n.tag===5||n.tag===3||n.tag===4}function h0(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||FS(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function Kp(n,e,t){var i=n.tag;if(i===5||i===6)n=n.stateNode,e?t.nodeType===8?t.parentNode.insertBefore(n,e):t.insertBefore(n,e):(t.nodeType===8?(e=t.parentNode,e.insertBefore(n,t)):(e=t,e.appendChild(n)),t=t._reactRootContainer,t!=null||e.onclick!==null||(e.onclick=Rf));else if(i!==4&&(n=n.child,n!==null))for(Kp(n,e,t),n=n.sibling;n!==null;)Kp(n,e,t),n=n.sibling}function Zp(n,e,t){var i=n.tag;if(i===5||i===6)n=n.stateNode,e?t.insertBefore(n,e):t.appendChild(n);else if(i!==4&&(n=n.child,n!==null))for(Zp(n,e,t),n=n.sibling;n!==null;)Zp(n,e,t),n=n.sibling}var pn=null,$i=!1;function Zr(n,e,t){for(t=t.child;t!==null;)kS(n,e,t),t=t.sibling}function kS(n,e,t){if(pr&&typeof pr.onCommitFiberUnmount=="function")try{pr.onCommitFiberUnmount(fd,t)}catch{}switch(t.tag){case 5:Cn||Ta(t,e);case 6:var i=pn,r=$i;pn=null,Zr(n,e,t),pn=i,$i=r,pn!==null&&($i?(n=pn,t=t.stateNode,n.nodeType===8?n.parentNode.removeChild(t):n.removeChild(t)):pn.removeChild(t.stateNode));break;case 18:pn!==null&&($i?(n=pn,t=t.stateNode,n.nodeType===8?ih(n.parentNode,t):n.nodeType===1&&ih(n,t),mu(n)):ih(pn,t.stateNode));break;case 4:i=pn,r=$i,pn=t.stateNode.containerInfo,$i=!0,Zr(n,e,t),pn=i,$i=r;break;case 0:case 11:case 14:case 15:if(!Cn&&(i=t.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&qp(t,e,o),r=r.next}while(r!==i)}Zr(n,e,t);break;case 1:if(!Cn&&(Ta(t,e),i=t.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=t.memoizedProps,i.state=t.memoizedState,i.componentWillUnmount()}catch(a){Ht(t,e,a)}Zr(n,e,t);break;case 21:Zr(n,e,t);break;case 22:t.mode&1?(Cn=(i=Cn)||t.memoizedState!==null,Zr(n,e,t),Cn=i):Zr(n,e,t);break;default:Zr(n,e,t)}}function p0(n){var e=n.updateQueue;if(e!==null){n.updateQueue=null;var t=n.stateNode;t===null&&(t=n.stateNode=new Iw),e.forEach(function(i){var r=Xw.bind(null,n,i);t.has(i)||(t.add(i),i.then(r,r))})}}function Vi(n,e){var t=e.deletions;if(t!==null)for(var i=0;i<t.length;i++){var r=t[i];try{var s=n,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:pn=a.stateNode,$i=!1;break e;case 3:pn=a.stateNode.containerInfo,$i=!0;break e;case 4:pn=a.stateNode.containerInfo,$i=!0;break e}a=a.return}if(pn===null)throw Error(oe(160));kS(s,o,r),pn=null,$i=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(u){Ht(r,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)zS(e,n),e=e.sibling}function zS(n,e){var t=n.alternate,i=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(Vi(e,n),ir(n),i&4){try{$l(3,n,n.return),xd(3,n)}catch(g){Ht(n,n.return,g)}try{$l(5,n,n.return)}catch(g){Ht(n,n.return,g)}}break;case 1:Vi(e,n),ir(n),i&512&&t!==null&&Ta(t,t.return);break;case 5:if(Vi(e,n),ir(n),i&512&&t!==null&&Ta(t,t.return),n.flags&32){var r=n.stateNode;try{fu(r,"")}catch(g){Ht(n,n.return,g)}}if(i&4&&(r=n.stateNode,r!=null)){var s=n.memoizedProps,o=t!==null?t.memoizedProps:s,a=n.type,l=n.updateQueue;if(n.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&ay(r,s),Sp(a,o);var u=Sp(a,s);for(o=0;o<l.length;o+=2){var c=l[o],f=l[o+1];c==="style"?dy(r,f):c==="dangerouslySetInnerHTML"?cy(r,f):c==="children"?fu(r,f):Ym(r,c,f,u)}switch(a){case"input":gp(r,s);break;case"textarea":ly(r,s);break;case"select":var d=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var p=s.value;p!=null?La(r,!!s.multiple,p,!1):d!==!!s.multiple&&(s.defaultValue!=null?La(r,!!s.multiple,s.defaultValue,!0):La(r,!!s.multiple,s.multiple?[]:"",!1))}r[yu]=s}catch(g){Ht(n,n.return,g)}}break;case 6:if(Vi(e,n),ir(n),i&4){if(n.stateNode===null)throw Error(oe(162));r=n.stateNode,s=n.memoizedProps;try{r.nodeValue=s}catch(g){Ht(n,n.return,g)}}break;case 3:if(Vi(e,n),ir(n),i&4&&t!==null&&t.memoizedState.isDehydrated)try{mu(e.containerInfo)}catch(g){Ht(n,n.return,g)}break;case 4:Vi(e,n),ir(n);break;case 13:Vi(e,n),ir(n),r=n.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(Ag=Wt())),i&4&&p0(n);break;case 22:if(c=t!==null&&t.memoizedState!==null,n.mode&1?(Cn=(u=Cn)||c,Vi(e,n),Cn=u):Vi(e,n),ir(n),i&8192){if(u=n.memoizedState!==null,(n.stateNode.isHidden=u)&&!c&&n.mode&1)for(Se=n,c=n.child;c!==null;){for(f=Se=c;Se!==null;){switch(d=Se,p=d.child,d.tag){case 0:case 11:case 14:case 15:$l(4,d,d.return);break;case 1:Ta(d,d.return);var v=d.stateNode;if(typeof v.componentWillUnmount=="function"){i=d,t=d.return;try{e=i,v.props=e.memoizedProps,v.state=e.memoizedState,v.componentWillUnmount()}catch(g){Ht(i,t,g)}}break;case 5:Ta(d,d.return);break;case 22:if(d.memoizedState!==null){g0(f);continue}}p!==null?(p.return=d,Se=p):g0(f)}c=c.sibling}e:for(c=null,f=n;;){if(f.tag===5){if(c===null){c=f;try{r=f.stateNode,u?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=f.stateNode,l=f.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=fy("display",o))}catch(g){Ht(n,n.return,g)}}}else if(f.tag===6){if(c===null)try{f.stateNode.nodeValue=u?"":f.memoizedProps}catch(g){Ht(n,n.return,g)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===n)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===n)break e;for(;f.sibling===null;){if(f.return===null||f.return===n)break e;c===f&&(c=null),f=f.return}c===f&&(c=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:Vi(e,n),ir(n),i&4&&p0(n);break;case 21:break;default:Vi(e,n),ir(n)}}function ir(n){var e=n.flags;if(e&2){try{e:{for(var t=n.return;t!==null;){if(FS(t)){var i=t;break e}t=t.return}throw Error(oe(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(fu(r,""),i.flags&=-33);var s=h0(n);Zp(n,s,r);break;case 3:case 4:var o=i.stateNode.containerInfo,a=h0(n);Kp(n,a,o);break;default:throw Error(oe(161))}}catch(l){Ht(n,n.return,l)}n.flags&=-3}e&4096&&(n.flags&=-4097)}function Fw(n,e,t){Se=n,BS(n)}function BS(n,e,t){for(var i=(n.mode&1)!==0;Se!==null;){var r=Se,s=r.child;if(r.tag===22&&i){var o=r.memoizedState!==null||dc;if(!o){var a=r.alternate,l=a!==null&&a.memoizedState!==null||Cn;a=dc;var u=Cn;if(dc=o,(Cn=l)&&!u)for(Se=r;Se!==null;)o=Se,l=o.child,o.tag===22&&o.memoizedState!==null?_0(r):l!==null?(l.return=o,Se=l):_0(r);for(;s!==null;)Se=s,BS(s),s=s.sibling;Se=r,dc=a,Cn=u}m0(n)}else r.subtreeFlags&8772&&s!==null?(s.return=r,Se=s):m0(n)}}function m0(n){for(;Se!==null;){var e=Se;if(e.flags&8772){var t=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Cn||xd(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!Cn)if(t===null)i.componentDidMount();else{var r=e.elementType===e.type?t.memoizedProps:qi(e.type,t.memoizedProps);i.componentDidUpdate(r,t.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&J_(e,s,i);break;case 3:var o=e.updateQueue;if(o!==null){if(t=null,e.child!==null)switch(e.child.tag){case 5:t=e.child.stateNode;break;case 1:t=e.child.stateNode}J_(e,o,t)}break;case 5:var a=e.stateNode;if(t===null&&e.flags&4){t=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&t.focus();break;case"img":l.src&&(t.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var f=c.dehydrated;f!==null&&mu(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(oe(163))}Cn||e.flags&512&&$p(e)}catch(d){Ht(e,e.return,d)}}if(e===n){Se=null;break}if(t=e.sibling,t!==null){t.return=e.return,Se=t;break}Se=e.return}}function g0(n){for(;Se!==null;){var e=Se;if(e===n){Se=null;break}var t=e.sibling;if(t!==null){t.return=e.return,Se=t;break}Se=e.return}}function _0(n){for(;Se!==null;){var e=Se;try{switch(e.tag){case 0:case 11:case 15:var t=e.return;try{xd(4,e)}catch(l){Ht(e,t,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){Ht(e,r,l)}}var s=e.return;try{$p(e)}catch(l){Ht(e,s,l)}break;case 5:var o=e.return;try{$p(e)}catch(l){Ht(e,o,l)}}}catch(l){Ht(e,e.return,l)}if(e===n){Se=null;break}var a=e.sibling;if(a!==null){a.return=e.return,Se=a;break}Se=e.return}}var kw=Math.ceil,zf=$r.ReactCurrentDispatcher,Tg=$r.ReactCurrentOwner,ki=$r.ReactCurrentBatchConfig,lt=0,dn=null,$t=null,vn=0,pi=0,wa=Vs(0),rn=0,Au=null,No=0,yd=0,wg=0,Kl=null,Kn=null,Ag=0,Za=1/0,Rr=null,Bf=!1,Qp=null,Ts=null,hc=!1,fs=null,Hf=0,Zl=0,Jp=null,af=-1,lf=0;function Wn(){return lt&6?Wt():af!==-1?af:af=Wt()}function ws(n){return n.mode&1?lt&2&&vn!==0?vn&-vn:Sw.transition!==null?(lf===0&&(lf=Ty()),lf):(n=gt,n!==0||(n=window.event,n=n===void 0?16:Ly(n.type)),n):1}function tr(n,e,t,i){if(50<Zl)throw Zl=0,Jp=null,Error(oe(185));Hu(n,t,i),(!(lt&2)||n!==dn)&&(n===dn&&(!(lt&2)&&(yd|=t),rn===4&&ls(n,vn)),ti(n,i),t===1&&lt===0&&!(e.mode&1)&&(Za=Wt()+500,gd&&Ws()))}function ti(n,e){var t=n.callbackNode;ST(n,e);var i=Tf(n,n===dn?vn:0);if(i===0)t!==null&&A_(t),n.callbackNode=null,n.callbackPriority=0;else if(e=i&-i,n.callbackPriority!==e){if(t!=null&&A_(t),e===1)n.tag===0?yw(v0.bind(null,n)):Ky(v0.bind(null,n)),gw(function(){!(lt&6)&&Ws()}),t=null;else{switch(wy(i)){case 1:t=Qm;break;case 4:t=My;break;case 16:t=Ef;break;case 536870912:t=Ey;break;default:t=Ef}t=qS(t,HS.bind(null,n))}n.callbackPriority=e,n.callbackNode=t}}function HS(n,e){if(af=-1,lf=0,lt&6)throw Error(oe(327));var t=n.callbackNode;if(Oa()&&n.callbackNode!==t)return null;var i=Tf(n,n===dn?vn:0);if(i===0)return null;if(i&30||i&n.expiredLanes||e)e=Gf(n,i);else{e=i;var r=lt;lt|=2;var s=VS();(dn!==n||vn!==e)&&(Rr=null,Za=Wt()+500,xo(n,e));do try{Hw();break}catch(a){GS(n,a)}while(!0);fg(),zf.current=s,lt=r,$t!==null?e=0:(dn=null,vn=0,e=rn)}if(e!==0){if(e===2&&(r=Ap(n),r!==0&&(i=r,e=em(n,r))),e===1)throw t=Au,xo(n,0),ls(n,i),ti(n,Wt()),t;if(e===6)ls(n,i);else{if(r=n.current.alternate,!(i&30)&&!zw(r)&&(e=Gf(n,i),e===2&&(s=Ap(n),s!==0&&(i=s,e=em(n,s))),e===1))throw t=Au,xo(n,0),ls(n,i),ti(n,Wt()),t;switch(n.finishedWork=r,n.finishedLanes=i,e){case 0:case 1:throw Error(oe(345));case 2:ro(n,Kn,Rr);break;case 3:if(ls(n,i),(i&130023424)===i&&(e=Ag+500-Wt(),10<e)){if(Tf(n,0)!==0)break;if(r=n.suspendedLanes,(r&i)!==i){Wn(),n.pingedLanes|=n.suspendedLanes&r;break}n.timeoutHandle=Up(ro.bind(null,n,Kn,Rr),e);break}ro(n,Kn,Rr);break;case 4:if(ls(n,i),(i&4194240)===i)break;for(e=n.eventTimes,r=-1;0<i;){var o=31-er(i);s=1<<o,o=e[o],o>r&&(r=o),i&=~s}if(i=r,i=Wt()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*kw(i/1960))-i,10<i){n.timeoutHandle=Up(ro.bind(null,n,Kn,Rr),i);break}ro(n,Kn,Rr);break;case 5:ro(n,Kn,Rr);break;default:throw Error(oe(329))}}}return ti(n,Wt()),n.callbackNode===t?HS.bind(null,n):null}function em(n,e){var t=Kl;return n.current.memoizedState.isDehydrated&&(xo(n,e).flags|=256),n=Gf(n,e),n!==2&&(e=Kn,Kn=t,e!==null&&tm(e)),n}function tm(n){Kn===null?Kn=n:Kn.push.apply(Kn,n)}function zw(n){for(var e=n;;){if(e.flags&16384){var t=e.updateQueue;if(t!==null&&(t=t.stores,t!==null))for(var i=0;i<t.length;i++){var r=t[i],s=r.getSnapshot;r=r.value;try{if(!nr(s(),r))return!1}catch{return!1}}}if(t=e.child,e.subtreeFlags&16384&&t!==null)t.return=e,e=t;else{if(e===n)break;for(;e.sibling===null;){if(e.return===null||e.return===n)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function ls(n,e){for(e&=~wg,e&=~yd,n.suspendedLanes|=e,n.pingedLanes&=~e,n=n.expirationTimes;0<e;){var t=31-er(e),i=1<<t;n[t]=-1,e&=~i}}function v0(n){if(lt&6)throw Error(oe(327));Oa();var e=Tf(n,0);if(!(e&1))return ti(n,Wt()),null;var t=Gf(n,e);if(n.tag!==0&&t===2){var i=Ap(n);i!==0&&(e=i,t=em(n,i))}if(t===1)throw t=Au,xo(n,0),ls(n,e),ti(n,Wt()),t;if(t===6)throw Error(oe(345));return n.finishedWork=n.current.alternate,n.finishedLanes=e,ro(n,Kn,Rr),ti(n,Wt()),null}function Cg(n,e){var t=lt;lt|=1;try{return n(e)}finally{lt=t,lt===0&&(Za=Wt()+500,gd&&Ws())}}function Uo(n){fs!==null&&fs.tag===0&&!(lt&6)&&Oa();var e=lt;lt|=1;var t=ki.transition,i=gt;try{if(ki.transition=null,gt=1,n)return n()}finally{gt=i,ki.transition=t,lt=e,!(lt&6)&&Ws()}}function Rg(){pi=wa.current,bt(wa)}function xo(n,e){n.finishedWork=null,n.finishedLanes=0;var t=n.timeoutHandle;if(t!==-1&&(n.timeoutHandle=-1,mw(t)),$t!==null)for(t=$t.return;t!==null;){var i=t;switch(lg(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&bf();break;case 3:$a(),bt(Jn),bt(Ln),_g();break;case 5:gg(i);break;case 4:$a();break;case 13:bt(Ot);break;case 19:bt(Ot);break;case 10:dg(i.type._context);break;case 22:case 23:Rg()}t=t.return}if(dn=n,$t=n=As(n.current,null),vn=pi=e,rn=0,Au=null,wg=yd=No=0,Kn=Kl=null,po!==null){for(e=0;e<po.length;e++)if(t=po[e],i=t.interleaved,i!==null){t.interleaved=null;var r=i.next,s=t.pending;if(s!==null){var o=s.next;s.next=r,i.next=o}t.pending=i}po=null}return n}function GS(n,e){do{var t=$t;try{if(fg(),rf.current=kf,Ff){for(var i=zt.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}Ff=!1}if(Do=0,cn=tn=zt=null,ql=!1,Eu=0,Tg.current=null,t===null||t.return===null){rn=1,Au=e,$t=null;break}e:{var s=n,o=t.return,a=t,l=e;if(e=vn,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,c=a,f=c.tag;if(!(c.mode&1)&&(f===0||f===11||f===15)){var d=c.alternate;d?(c.updateQueue=d.updateQueue,c.memoizedState=d.memoizedState,c.lanes=d.lanes):(c.updateQueue=null,c.memoizedState=null)}var p=s0(o);if(p!==null){p.flags&=-257,o0(p,o,a,s,e),p.mode&1&&r0(s,u,e),e=p,l=u;var v=e.updateQueue;if(v===null){var g=new Set;g.add(l),e.updateQueue=g}else v.add(l);break e}else{if(!(e&1)){r0(s,u,e),bg();break e}l=Error(oe(426))}}else if(Dt&&a.mode&1){var m=s0(o);if(m!==null){!(m.flags&65536)&&(m.flags|=256),o0(m,o,a,s,e),ug(Ka(l,a));break e}}s=l=Ka(l,a),rn!==4&&(rn=2),Kl===null?Kl=[s]:Kl.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var h=wS(s,l,e);Q_(s,h);break e;case 1:a=l;var x=s.type,_=s.stateNode;if(!(s.flags&128)&&(typeof x.getDerivedStateFromError=="function"||_!==null&&typeof _.componentDidCatch=="function"&&(Ts===null||!Ts.has(_)))){s.flags|=65536,e&=-e,s.lanes|=e;var y=AS(s,a,e);Q_(s,y);break e}}s=s.return}while(s!==null)}XS(t)}catch(w){e=w,$t===t&&t!==null&&($t=t=t.return);continue}break}while(!0)}function VS(){var n=zf.current;return zf.current=kf,n===null?kf:n}function bg(){(rn===0||rn===3||rn===2)&&(rn=4),dn===null||!(No&268435455)&&!(yd&268435455)||ls(dn,vn)}function Gf(n,e){var t=lt;lt|=2;var i=VS();(dn!==n||vn!==e)&&(Rr=null,xo(n,e));do try{Bw();break}catch(r){GS(n,r)}while(!0);if(fg(),lt=t,zf.current=i,$t!==null)throw Error(oe(261));return dn=null,vn=0,rn}function Bw(){for(;$t!==null;)WS($t)}function Hw(){for(;$t!==null&&!dT();)WS($t)}function WS(n){var e=YS(n.alternate,n,pi);n.memoizedProps=n.pendingProps,e===null?XS(n):$t=e,Tg.current=null}function XS(n){var e=n;do{var t=e.alternate;if(n=e.return,e.flags&32768){if(t=Uw(t,e),t!==null){t.flags&=32767,$t=t;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{rn=6,$t=null;return}}else if(t=Nw(t,e,pi),t!==null){$t=t;return}if(e=e.sibling,e!==null){$t=e;return}$t=e=n}while(e!==null);rn===0&&(rn=5)}function ro(n,e,t){var i=gt,r=ki.transition;try{ki.transition=null,gt=1,Gw(n,e,t,i)}finally{ki.transition=r,gt=i}return null}function Gw(n,e,t,i){do Oa();while(fs!==null);if(lt&6)throw Error(oe(327));t=n.finishedWork;var r=n.finishedLanes;if(t===null)return null;if(n.finishedWork=null,n.finishedLanes=0,t===n.current)throw Error(oe(177));n.callbackNode=null,n.callbackPriority=0;var s=t.lanes|t.childLanes;if(MT(n,s),n===dn&&($t=dn=null,vn=0),!(t.subtreeFlags&2064)&&!(t.flags&2064)||hc||(hc=!0,qS(Ef,function(){return Oa(),null})),s=(t.flags&15990)!==0,t.subtreeFlags&15990||s){s=ki.transition,ki.transition=null;var o=gt;gt=1;var a=lt;lt|=4,Tg.current=null,Ow(n,t),zS(t,n),lw(Dp),wf=!!Lp,Dp=Lp=null,n.current=t,Fw(t),hT(),lt=a,gt=o,ki.transition=s}else n.current=t;if(hc&&(hc=!1,fs=n,Hf=r),s=n.pendingLanes,s===0&&(Ts=null),gT(t.stateNode),ti(n,Wt()),e!==null)for(i=n.onRecoverableError,t=0;t<e.length;t++)r=e[t],i(r.value,{componentStack:r.stack,digest:r.digest});if(Bf)throw Bf=!1,n=Qp,Qp=null,n;return Hf&1&&n.tag!==0&&Oa(),s=n.pendingLanes,s&1?n===Jp?Zl++:(Zl=0,Jp=n):Zl=0,Ws(),null}function Oa(){if(fs!==null){var n=wy(Hf),e=ki.transition,t=gt;try{if(ki.transition=null,gt=16>n?16:n,fs===null)var i=!1;else{if(n=fs,fs=null,Hf=0,lt&6)throw Error(oe(331));var r=lt;for(lt|=4,Se=n.current;Se!==null;){var s=Se,o=s.child;if(Se.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(Se=u;Se!==null;){var c=Se;switch(c.tag){case 0:case 11:case 15:$l(8,c,s)}var f=c.child;if(f!==null)f.return=c,Se=f;else for(;Se!==null;){c=Se;var d=c.sibling,p=c.return;if(OS(c),c===u){Se=null;break}if(d!==null){d.return=p,Se=d;break}Se=p}}}var v=s.alternate;if(v!==null){var g=v.child;if(g!==null){v.child=null;do{var m=g.sibling;g.sibling=null,g=m}while(g!==null)}}Se=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,Se=o;else e:for(;Se!==null;){if(s=Se,s.flags&2048)switch(s.tag){case 0:case 11:case 15:$l(9,s,s.return)}var h=s.sibling;if(h!==null){h.return=s.return,Se=h;break e}Se=s.return}}var x=n.current;for(Se=x;Se!==null;){o=Se;var _=o.child;if(o.subtreeFlags&2064&&_!==null)_.return=o,Se=_;else e:for(o=x;Se!==null;){if(a=Se,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:xd(9,a)}}catch(w){Ht(a,a.return,w)}if(a===o){Se=null;break e}var y=a.sibling;if(y!==null){y.return=a.return,Se=y;break e}Se=a.return}}if(lt=r,Ws(),pr&&typeof pr.onPostCommitFiberRoot=="function")try{pr.onPostCommitFiberRoot(fd,n)}catch{}i=!0}return i}finally{gt=t,ki.transition=e}}return!1}function x0(n,e,t){e=Ka(t,e),e=wS(n,e,1),n=Es(n,e,1),e=Wn(),n!==null&&(Hu(n,1,e),ti(n,e))}function Ht(n,e,t){if(n.tag===3)x0(n,n,t);else for(;e!==null;){if(e.tag===3){x0(e,n,t);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(Ts===null||!Ts.has(i))){n=Ka(t,n),n=AS(e,n,1),e=Es(e,n,1),n=Wn(),e!==null&&(Hu(e,1,n),ti(e,n));break}}e=e.return}}function Vw(n,e,t){var i=n.pingCache;i!==null&&i.delete(e),e=Wn(),n.pingedLanes|=n.suspendedLanes&t,dn===n&&(vn&t)===t&&(rn===4||rn===3&&(vn&130023424)===vn&&500>Wt()-Ag?xo(n,0):wg|=t),ti(n,e)}function jS(n,e){e===0&&(n.mode&1?(e=ic,ic<<=1,!(ic&130023424)&&(ic=4194304)):e=1);var t=Wn();n=Wr(n,e),n!==null&&(Hu(n,e,t),ti(n,t))}function Ww(n){var e=n.memoizedState,t=0;e!==null&&(t=e.retryLane),jS(n,t)}function Xw(n,e){var t=0;switch(n.tag){case 13:var i=n.stateNode,r=n.memoizedState;r!==null&&(t=r.retryLane);break;case 19:i=n.stateNode;break;default:throw Error(oe(314))}i!==null&&i.delete(e),jS(n,t)}var YS;YS=function(n,e,t){if(n!==null)if(n.memoizedProps!==e.pendingProps||Jn.current)Qn=!0;else{if(!(n.lanes&t)&&!(e.flags&128))return Qn=!1,Dw(n,e,t);Qn=!!(n.flags&131072)}else Qn=!1,Dt&&e.flags&1048576&&Zy(e,Df,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;of(n,e),n=e.pendingProps;var r=ja(e,Ln.current);Ia(e,t),r=xg(null,e,i,n,r,t);var s=yg();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,ei(i)?(s=!0,Pf(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,pg(e),r.updater=vd,e.stateNode=r,r._reactInternals=e,Hp(e,i,n,t),e=Wp(null,e,i,!0,s,t)):(e.tag=0,Dt&&s&&ag(e),Fn(null,e,r,t),e=e.child),e;case 16:i=e.elementType;e:{switch(of(n,e),n=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=Yw(i),n=qi(i,n),r){case 0:e=Vp(null,e,i,n,t);break e;case 1:e=u0(null,e,i,n,t);break e;case 11:e=a0(null,e,i,n,t);break e;case 14:e=l0(null,e,i,qi(i.type,n),t);break e}throw Error(oe(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:qi(i,r),Vp(n,e,i,r,t);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:qi(i,r),u0(n,e,i,r,t);case 3:e:{if(PS(e),n===null)throw Error(oe(387));i=e.pendingProps,s=e.memoizedState,r=s.element,iS(n,e),If(e,i,null,t);var o=e.memoizedState;if(i=o.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=Ka(Error(oe(423)),e),e=c0(n,e,i,t,r);break e}else if(i!==r){r=Ka(Error(oe(424)),e),e=c0(n,e,i,t,r);break e}else for(xi=Ms(e.stateNode.containerInfo.firstChild),Si=e,Dt=!0,Ki=null,t=tS(e,null,i,t),e.child=t;t;)t.flags=t.flags&-3|4096,t=t.sibling;else{if(Ya(),i===r){e=Xr(n,e,t);break e}Fn(n,e,i,t)}e=e.child}return e;case 5:return rS(e),n===null&&kp(e),i=e.type,r=e.pendingProps,s=n!==null?n.memoizedProps:null,o=r.children,Np(i,r)?o=null:s!==null&&Np(i,s)&&(e.flags|=32),bS(n,e),Fn(n,e,o,t),e.child;case 6:return n===null&&kp(e),null;case 13:return LS(n,e,t);case 4:return mg(e,e.stateNode.containerInfo),i=e.pendingProps,n===null?e.child=qa(e,null,i,t):Fn(n,e,i,t),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:qi(i,r),a0(n,e,i,r,t);case 7:return Fn(n,e,e.pendingProps,t),e.child;case 8:return Fn(n,e,e.pendingProps.children,t),e.child;case 12:return Fn(n,e,e.pendingProps.children,t),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,o=r.value,Et(Nf,i._currentValue),i._currentValue=o,s!==null)if(nr(s.value,o)){if(s.children===r.children&&!Jn.current){e=Xr(n,e,t);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=Br(-1,t&-t),l.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?l.next=l:(l.next=c.next,c.next=l),u.pending=l}}s.lanes|=t,l=s.alternate,l!==null&&(l.lanes|=t),zp(s.return,t,e),a.lanes|=t;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(oe(341));o.lanes|=t,a=o.alternate,a!==null&&(a.lanes|=t),zp(o,t,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}Fn(n,e,r.children,t),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,Ia(e,t),r=Bi(r),i=i(r),e.flags|=1,Fn(n,e,i,t),e.child;case 14:return i=e.type,r=qi(i,e.pendingProps),r=qi(i.type,r),l0(n,e,i,r,t);case 15:return CS(n,e,e.type,e.pendingProps,t);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:qi(i,r),of(n,e),e.tag=1,ei(i)?(n=!0,Pf(e)):n=!1,Ia(e,t),TS(e,i,r),Hp(e,i,r,t),Wp(null,e,i,!0,n,t);case 19:return DS(n,e,t);case 22:return RS(n,e,t)}throw Error(oe(156,e.tag))};function qS(n,e){return Sy(n,e)}function jw(n,e,t,i){this.tag=n,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ii(n,e,t,i){return new jw(n,e,t,i)}function Pg(n){return n=n.prototype,!(!n||!n.isReactComponent)}function Yw(n){if(typeof n=="function")return Pg(n)?1:0;if(n!=null){if(n=n.$$typeof,n===$m)return 11;if(n===Km)return 14}return 2}function As(n,e){var t=n.alternate;return t===null?(t=Ii(n.tag,e,n.key,n.mode),t.elementType=n.elementType,t.type=n.type,t.stateNode=n.stateNode,t.alternate=n,n.alternate=t):(t.pendingProps=e,t.type=n.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=n.flags&14680064,t.childLanes=n.childLanes,t.lanes=n.lanes,t.child=n.child,t.memoizedProps=n.memoizedProps,t.memoizedState=n.memoizedState,t.updateQueue=n.updateQueue,e=n.dependencies,t.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},t.sibling=n.sibling,t.index=n.index,t.ref=n.ref,t}function uf(n,e,t,i,r,s){var o=2;if(i=n,typeof n=="function")Pg(n)&&(o=1);else if(typeof n=="string")o=5;else e:switch(n){case ma:return yo(t.children,r,s,e);case qm:o=8,r|=8;break;case fp:return n=Ii(12,t,e,r|2),n.elementType=fp,n.lanes=s,n;case dp:return n=Ii(13,t,e,r),n.elementType=dp,n.lanes=s,n;case hp:return n=Ii(19,t,e,r),n.elementType=hp,n.lanes=s,n;case ry:return Sd(t,r,s,e);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case ny:o=10;break e;case iy:o=9;break e;case $m:o=11;break e;case Km:o=14;break e;case ss:o=16,i=null;break e}throw Error(oe(130,n==null?n:typeof n,""))}return e=Ii(o,t,e,r),e.elementType=n,e.type=i,e.lanes=s,e}function yo(n,e,t,i){return n=Ii(7,n,i,e),n.lanes=t,n}function Sd(n,e,t,i){return n=Ii(22,n,i,e),n.elementType=ry,n.lanes=t,n.stateNode={isHidden:!1},n}function fh(n,e,t){return n=Ii(6,n,null,e),n.lanes=t,n}function dh(n,e,t){return e=Ii(4,n.children!==null?n.children:[],n.key,e),e.lanes=t,e.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},e}function qw(n,e,t,i,r){this.tag=e,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=jd(0),this.expirationTimes=jd(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=jd(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function Lg(n,e,t,i,r,s,o,a,l){return n=new qw(n,e,t,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Ii(3,null,null,e),n.current=s,s.stateNode=n,s.memoizedState={element:i,isDehydrated:t,cache:null,transitions:null,pendingSuspenseBoundaries:null},pg(s),n}function $w(n,e,t){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:pa,key:i==null?null:""+i,children:n,containerInfo:e,implementation:t}}function $S(n){if(!n)return Os;n=n._reactInternals;e:{if(Go(n)!==n||n.tag!==1)throw Error(oe(170));var e=n;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(ei(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(oe(171))}if(n.tag===1){var t=n.type;if(ei(t))return $y(n,t,e)}return e}function KS(n,e,t,i,r,s,o,a,l){return n=Lg(t,i,!0,n,r,s,o,a,l),n.context=$S(null),t=n.current,i=Wn(),r=ws(t),s=Br(i,r),s.callback=e??null,Es(t,s,r),n.current.lanes=r,Hu(n,r,i),ti(n,i),n}function Md(n,e,t,i){var r=e.current,s=Wn(),o=ws(r);return t=$S(t),e.context===null?e.context=t:e.pendingContext=t,e=Br(s,o),e.payload={element:n},i=i===void 0?null:i,i!==null&&(e.callback=i),n=Es(r,e,o),n!==null&&(tr(n,r,o,s),nf(n,r,o)),o}function Vf(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function y0(n,e){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var t=n.retryLane;n.retryLane=t!==0&&t<e?t:e}}function Dg(n,e){y0(n,e),(n=n.alternate)&&y0(n,e)}function Kw(){return null}var ZS=typeof reportError=="function"?reportError:function(n){console.error(n)};function Ng(n){this._internalRoot=n}Ed.prototype.render=Ng.prototype.render=function(n){var e=this._internalRoot;if(e===null)throw Error(oe(409));Md(n,e,null,null)};Ed.prototype.unmount=Ng.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var e=n.containerInfo;Uo(function(){Md(null,n,null,null)}),e[Vr]=null}};function Ed(n){this._internalRoot=n}Ed.prototype.unstable_scheduleHydration=function(n){if(n){var e=Ry();n={blockedOn:null,target:n,priority:e};for(var t=0;t<as.length&&e!==0&&e<as[t].priority;t++);as.splice(t,0,n),t===0&&Py(n)}};function Ug(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function Td(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function S0(){}function Zw(n,e,t,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var u=Vf(o);s.call(u)}}var o=KS(e,i,n,0,null,!1,!1,"",S0);return n._reactRootContainer=o,n[Vr]=o.current,vu(n.nodeType===8?n.parentNode:n),Uo(),o}for(;r=n.lastChild;)n.removeChild(r);if(typeof i=="function"){var a=i;i=function(){var u=Vf(l);a.call(u)}}var l=Lg(n,0,!1,null,null,!1,!1,"",S0);return n._reactRootContainer=l,n[Vr]=l.current,vu(n.nodeType===8?n.parentNode:n),Uo(function(){Md(e,l,t,i)}),l}function wd(n,e,t,i,r){var s=t._reactRootContainer;if(s){var o=s;if(typeof r=="function"){var a=r;r=function(){var l=Vf(o);a.call(l)}}Md(e,o,n,r)}else o=Zw(t,e,n,r,i);return Vf(o)}Ay=function(n){switch(n.tag){case 3:var e=n.stateNode;if(e.current.memoizedState.isDehydrated){var t=Ul(e.pendingLanes);t!==0&&(Jm(e,t|1),ti(e,Wt()),!(lt&6)&&(Za=Wt()+500,Ws()))}break;case 13:Uo(function(){var i=Wr(n,1);if(i!==null){var r=Wn();tr(i,n,1,r)}}),Dg(n,1)}};eg=function(n){if(n.tag===13){var e=Wr(n,134217728);if(e!==null){var t=Wn();tr(e,n,134217728,t)}Dg(n,134217728)}};Cy=function(n){if(n.tag===13){var e=ws(n),t=Wr(n,e);if(t!==null){var i=Wn();tr(t,n,e,i)}Dg(n,e)}};Ry=function(){return gt};by=function(n,e){var t=gt;try{return gt=n,e()}finally{gt=t}};Ep=function(n,e,t){switch(e){case"input":if(gp(n,t),e=t.name,t.type==="radio"&&e!=null){for(t=n;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<t.length;e++){var i=t[e];if(i!==n&&i.form===n.form){var r=md(i);if(!r)throw Error(oe(90));oy(i),gp(i,r)}}}break;case"textarea":ly(n,t);break;case"select":e=t.value,e!=null&&La(n,!!t.multiple,e,!1)}};my=Cg;gy=Uo;var Qw={usingClientEntryPoint:!1,Events:[Vu,xa,md,hy,py,Cg]},Ml={findFiberByHostInstance:ho,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Jw={bundleType:Ml.bundleType,version:Ml.version,rendererPackageName:Ml.rendererPackageName,rendererConfig:Ml.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:$r.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=xy(n),n===null?null:n.stateNode},findFiberByHostInstance:Ml.findFiberByHostInstance||Kw,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var pc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!pc.isDisabled&&pc.supportsFiber)try{fd=pc.inject(Jw),pr=pc}catch{}}wi.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Qw;wi.createPortal=function(n,e){var t=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Ug(e))throw Error(oe(200));return $w(n,e,null,t)};wi.createRoot=function(n,e){if(!Ug(n))throw Error(oe(299));var t=!1,i="",r=ZS;return e!=null&&(e.unstable_strictMode===!0&&(t=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=Lg(n,1,!1,null,null,t,!1,i,r),n[Vr]=e.current,vu(n.nodeType===8?n.parentNode:n),new Ng(e)};wi.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var e=n._reactInternals;if(e===void 0)throw typeof n.render=="function"?Error(oe(188)):(n=Object.keys(n).join(","),Error(oe(268,n)));return n=xy(e),n=n===null?null:n.stateNode,n};wi.flushSync=function(n){return Uo(n)};wi.hydrate=function(n,e,t){if(!Td(e))throw Error(oe(200));return wd(null,n,e,!0,t)};wi.hydrateRoot=function(n,e,t){if(!Ug(n))throw Error(oe(405));var i=t!=null&&t.hydratedSources||null,r=!1,s="",o=ZS;if(t!=null&&(t.unstable_strictMode===!0&&(r=!0),t.identifierPrefix!==void 0&&(s=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),e=KS(e,null,n,1,t??null,r,!1,s,o),n[Vr]=e.current,vu(n),i)for(n=0;n<i.length;n++)t=i[n],r=t._getVersion,r=r(t._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[t,r]:e.mutableSourceEagerHydrationData.push(t,r);return new Ed(e)};wi.render=function(n,e,t){if(!Td(e))throw Error(oe(200));return wd(null,n,e,!1,t)};wi.unmountComponentAtNode=function(n){if(!Td(n))throw Error(oe(40));return n._reactRootContainer?(Uo(function(){wd(null,null,n,!1,function(){n._reactRootContainer=null,n[Vr]=null})}),!0):!1};wi.unstable_batchedUpdates=Cg;wi.unstable_renderSubtreeIntoContainer=function(n,e,t,i){if(!Td(t))throw Error(oe(200));if(n==null||n._reactInternals===void 0)throw Error(oe(38));return wd(n,e,t,!1,i)};wi.version="18.3.1-next-f1338f8080-20240426";function QS(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(QS)}catch(n){console.error(n)}}QS(),Qx.exports=wi;var eA=Qx.exports,JS,M0=eA;JS=M0.createRoot,M0.hydrateRoot;/**
 * @remix-run/router v1.20.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Cu(){return Cu=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(n[i]=t[i])}return n},Cu.apply(this,arguments)}var ds;(function(n){n.Pop="POP",n.Push="PUSH",n.Replace="REPLACE"})(ds||(ds={}));const E0="popstate";function tA(n){n===void 0&&(n={});function e(i,r){let{pathname:s,search:o,hash:a}=i.location;return nm("",{pathname:s,search:o,hash:a},r.state&&r.state.usr||null,r.state&&r.state.key||"default")}function t(i,r){return typeof r=="string"?r:Wf(r)}return iA(e,t,null,n)}function Kt(n,e){if(n===!1||n===null||typeof n>"u")throw new Error(e)}function e1(n,e){if(!n){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function nA(){return Math.random().toString(36).substr(2,8)}function T0(n,e){return{usr:n.state,key:n.key,idx:e}}function nm(n,e,t,i){return t===void 0&&(t=null),Cu({pathname:typeof n=="string"?n:n.pathname,search:"",hash:""},typeof e=="string"?fl(e):e,{state:t,key:e&&e.key||i||nA()})}function Wf(n){let{pathname:e="/",search:t="",hash:i=""}=n;return t&&t!=="?"&&(e+=t.charAt(0)==="?"?t:"?"+t),i&&i!=="#"&&(e+=i.charAt(0)==="#"?i:"#"+i),e}function fl(n){let e={};if(n){let t=n.indexOf("#");t>=0&&(e.hash=n.substr(t),n=n.substr(0,t));let i=n.indexOf("?");i>=0&&(e.search=n.substr(i),n=n.substr(0,i)),n&&(e.pathname=n)}return e}function iA(n,e,t,i){i===void 0&&(i={});let{window:r=document.defaultView,v5Compat:s=!1}=i,o=r.history,a=ds.Pop,l=null,u=c();u==null&&(u=0,o.replaceState(Cu({},o.state,{idx:u}),""));function c(){return(o.state||{idx:null}).idx}function f(){a=ds.Pop;let m=c(),h=m==null?null:m-u;u=m,l&&l({action:a,location:g.location,delta:h})}function d(m,h){a=ds.Push;let x=nm(g.location,m,h);u=c()+1;let _=T0(x,u),y=g.createHref(x);try{o.pushState(_,"",y)}catch(w){if(w instanceof DOMException&&w.name==="DataCloneError")throw w;r.location.assign(y)}s&&l&&l({action:a,location:g.location,delta:1})}function p(m,h){a=ds.Replace;let x=nm(g.location,m,h);u=c();let _=T0(x,u),y=g.createHref(x);o.replaceState(_,"",y),s&&l&&l({action:a,location:g.location,delta:0})}function v(m){let h=r.location.origin!=="null"?r.location.origin:r.location.href,x=typeof m=="string"?m:Wf(m);return x=x.replace(/ $/,"%20"),Kt(h,"No window.location.(origin|href) available to create URL for href: "+x),new URL(x,h)}let g={get action(){return a},get location(){return n(r,o)},listen(m){if(l)throw new Error("A history only accepts one active listener");return r.addEventListener(E0,f),l=m,()=>{r.removeEventListener(E0,f),l=null}},createHref(m){return e(r,m)},createURL:v,encodeLocation(m){let h=v(m);return{pathname:h.pathname,search:h.search,hash:h.hash}},push:d,replace:p,go(m){return o.go(m)}};return g}var w0;(function(n){n.data="data",n.deferred="deferred",n.redirect="redirect",n.error="error"})(w0||(w0={}));function rA(n,e,t){return t===void 0&&(t="/"),sA(n,e,t,!1)}function sA(n,e,t,i){let r=typeof e=="string"?fl(e):e,s=Ig(r.pathname||"/",t);if(s==null)return null;let o=t1(n);oA(o);let a=null;for(let l=0;a==null&&l<o.length;++l){let u=_A(s);a=mA(o[l],u,i)}return a}function t1(n,e,t,i){e===void 0&&(e=[]),t===void 0&&(t=[]),i===void 0&&(i="");let r=(s,o,a)=>{let l={relativePath:a===void 0?s.path||"":a,caseSensitive:s.caseSensitive===!0,childrenIndex:o,route:s};l.relativePath.startsWith("/")&&(Kt(l.relativePath.startsWith(i),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+i+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(i.length));let u=Cs([i,l.relativePath]),c=t.concat(l);s.children&&s.children.length>0&&(Kt(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),t1(s.children,e,c,u)),!(s.path==null&&!s.index)&&e.push({path:u,score:hA(u,s.index),routesMeta:c})};return n.forEach((s,o)=>{var a;if(s.path===""||!((a=s.path)!=null&&a.includes("?")))r(s,o);else for(let l of n1(s.path))r(s,o,l)}),e}function n1(n){let e=n.split("/");if(e.length===0)return[];let[t,...i]=e,r=t.endsWith("?"),s=t.replace(/\?$/,"");if(i.length===0)return r?[s,""]:[s];let o=n1(i.join("/")),a=[];return a.push(...o.map(l=>l===""?s:[s,l].join("/"))),r&&a.push(...o),a.map(l=>n.startsWith("/")&&l===""?"/":l)}function oA(n){n.sort((e,t)=>e.score!==t.score?t.score-e.score:pA(e.routesMeta.map(i=>i.childrenIndex),t.routesMeta.map(i=>i.childrenIndex)))}const aA=/^:[\w-]+$/,lA=3,uA=2,cA=1,fA=10,dA=-2,A0=n=>n==="*";function hA(n,e){let t=n.split("/"),i=t.length;return t.some(A0)&&(i+=dA),e&&(i+=uA),t.filter(r=>!A0(r)).reduce((r,s)=>r+(aA.test(s)?lA:s===""?cA:fA),i)}function pA(n,e){return n.length===e.length&&n.slice(0,-1).every((i,r)=>i===e[r])?n[n.length-1]-e[e.length-1]:0}function mA(n,e,t){let{routesMeta:i}=n,r={},s="/",o=[];for(let a=0;a<i.length;++a){let l=i[a],u=a===i.length-1,c=s==="/"?e:e.slice(s.length)||"/",f=C0({path:l.relativePath,caseSensitive:l.caseSensitive,end:u},c),d=l.route;if(!f&&u&&t&&!i[i.length-1].route.index&&(f=C0({path:l.relativePath,caseSensitive:l.caseSensitive,end:!1},c)),!f)return null;Object.assign(r,f.params),o.push({params:r,pathname:Cs([s,f.pathname]),pathnameBase:SA(Cs([s,f.pathnameBase])),route:d}),f.pathnameBase!=="/"&&(s=Cs([s,f.pathnameBase]))}return o}function C0(n,e){typeof n=="string"&&(n={path:n,caseSensitive:!1,end:!0});let[t,i]=gA(n.path,n.caseSensitive,n.end),r=e.match(t);if(!r)return null;let s=r[0],o=s.replace(/(.)\/+$/,"$1"),a=r.slice(1);return{params:i.reduce((u,c,f)=>{let{paramName:d,isOptional:p}=c;if(d==="*"){let g=a[f]||"";o=s.slice(0,s.length-g.length).replace(/(.)\/+$/,"$1")}const v=a[f];return p&&!v?u[d]=void 0:u[d]=(v||"").replace(/%2F/g,"/"),u},{}),pathname:s,pathnameBase:o,pattern:n}}function gA(n,e,t){e===void 0&&(e=!1),t===void 0&&(t=!0),e1(n==="*"||!n.endsWith("*")||n.endsWith("/*"),'Route path "'+n+'" will be treated as if it were '+('"'+n.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+n.replace(/\*$/,"/*")+'".'));let i=[],r="^"+n.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(o,a,l)=>(i.push({paramName:a,isOptional:l!=null}),l?"/?([^\\/]+)?":"/([^\\/]+)"));return n.endsWith("*")?(i.push({paramName:"*"}),r+=n==="*"||n==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):t?r+="\\/*$":n!==""&&n!=="/"&&(r+="(?:(?=\\/|$))"),[new RegExp(r,e?void 0:"i"),i]}function _A(n){try{return n.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return e1(!1,'The URL path "'+n+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),n}}function Ig(n,e){if(e==="/")return n;if(!n.toLowerCase().startsWith(e.toLowerCase()))return null;let t=e.endsWith("/")?e.length-1:e.length,i=n.charAt(t);return i&&i!=="/"?null:n.slice(t)||"/"}function vA(n,e){e===void 0&&(e="/");let{pathname:t,search:i="",hash:r=""}=typeof n=="string"?fl(n):n;return{pathname:t?t.startsWith("/")?t:xA(t,e):e,search:MA(i),hash:EA(r)}}function xA(n,e){let t=e.replace(/\/+$/,"").split("/");return n.split("/").forEach(r=>{r===".."?t.length>1&&t.pop():r!=="."&&t.push(r)}),t.length>1?t.join("/"):"/"}function hh(n,e,t,i){return"Cannot include a '"+n+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(i)+"].  Please separate it out to the ")+("`to."+t+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function yA(n){return n.filter((e,t)=>t===0||e.route.path&&e.route.path.length>0)}function i1(n,e){let t=yA(n);return e?t.map((i,r)=>r===t.length-1?i.pathname:i.pathnameBase):t.map(i=>i.pathnameBase)}function r1(n,e,t,i){i===void 0&&(i=!1);let r;typeof n=="string"?r=fl(n):(r=Cu({},n),Kt(!r.pathname||!r.pathname.includes("?"),hh("?","pathname","search",r)),Kt(!r.pathname||!r.pathname.includes("#"),hh("#","pathname","hash",r)),Kt(!r.search||!r.search.includes("#"),hh("#","search","hash",r)));let s=n===""||r.pathname==="",o=s?"/":r.pathname,a;if(o==null)a=t;else{let f=e.length-1;if(!i&&o.startsWith("..")){let d=o.split("/");for(;d[0]==="..";)d.shift(),f-=1;r.pathname=d.join("/")}a=f>=0?e[f]:"/"}let l=vA(r,a),u=o&&o!=="/"&&o.endsWith("/"),c=(s||o===".")&&t.endsWith("/");return!l.pathname.endsWith("/")&&(u||c)&&(l.pathname+="/"),l}const Cs=n=>n.join("/").replace(/\/\/+/g,"/"),SA=n=>n.replace(/\/+$/,"").replace(/^\/*/,"/"),MA=n=>!n||n==="?"?"":n.startsWith("?")?n:"?"+n,EA=n=>!n||n==="#"?"":n.startsWith("#")?n:"#"+n;function TA(n){return n!=null&&typeof n.status=="number"&&typeof n.statusText=="string"&&typeof n.internal=="boolean"&&"data"in n}const s1=["post","put","patch","delete"];new Set(s1);const wA=["get",...s1];new Set(wA);/**
 * React Router v6.27.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Ru(){return Ru=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(n[i]=t[i])}return n},Ru.apply(this,arguments)}const Og=re.createContext(null),AA=re.createContext(null),Vo=re.createContext(null),Ad=re.createContext(null),Wo=re.createContext({outlet:null,matches:[],isDataRoute:!1}),o1=re.createContext(null);function CA(n,e){let{relative:t}=e===void 0?{}:e;Xu()||Kt(!1);let{basename:i,navigator:r}=re.useContext(Vo),{hash:s,pathname:o,search:a}=l1(n,{relative:t}),l=o;return i!=="/"&&(l=o==="/"?i:Cs([i,o])),r.createHref({pathname:l,search:a,hash:s})}function Xu(){return re.useContext(Ad)!=null}function Cd(){return Xu()||Kt(!1),re.useContext(Ad).location}function a1(n){re.useContext(Vo).static||re.useLayoutEffect(n)}function RA(){let{isDataRoute:n}=re.useContext(Wo);return n?HA():bA()}function bA(){Xu()||Kt(!1);let n=re.useContext(Og),{basename:e,future:t,navigator:i}=re.useContext(Vo),{matches:r}=re.useContext(Wo),{pathname:s}=Cd(),o=JSON.stringify(i1(r,t.v7_relativeSplatPath)),a=re.useRef(!1);return a1(()=>{a.current=!0}),re.useCallback(function(u,c){if(c===void 0&&(c={}),!a.current)return;if(typeof u=="number"){i.go(u);return}let f=r1(u,JSON.parse(o),s,c.relative==="path");n==null&&e!=="/"&&(f.pathname=f.pathname==="/"?e:Cs([e,f.pathname])),(c.replace?i.replace:i.push)(f,c.state,c)},[e,i,o,s,n])}function l1(n,e){let{relative:t}=e===void 0?{}:e,{future:i}=re.useContext(Vo),{matches:r}=re.useContext(Wo),{pathname:s}=Cd(),o=JSON.stringify(i1(r,i.v7_relativeSplatPath));return re.useMemo(()=>r1(n,JSON.parse(o),s,t==="path"),[n,o,s,t])}function PA(n,e){return LA(n,e)}function LA(n,e,t,i){Xu()||Kt(!1);let{navigator:r}=re.useContext(Vo),{matches:s}=re.useContext(Wo),o=s[s.length-1],a=o?o.params:{};o&&o.pathname;let l=o?o.pathnameBase:"/";o&&o.route;let u=Cd(),c;if(e){var f;let m=typeof e=="string"?fl(e):e;l==="/"||(f=m.pathname)!=null&&f.startsWith(l)||Kt(!1),c=m}else c=u;let d=c.pathname||"/",p=d;if(l!=="/"){let m=l.replace(/^\//,"").split("/");p="/"+d.replace(/^\//,"").split("/").slice(m.length).join("/")}let v=rA(n,{pathname:p}),g=OA(v&&v.map(m=>Object.assign({},m,{params:Object.assign({},a,m.params),pathname:Cs([l,r.encodeLocation?r.encodeLocation(m.pathname).pathname:m.pathname]),pathnameBase:m.pathnameBase==="/"?l:Cs([l,r.encodeLocation?r.encodeLocation(m.pathnameBase).pathname:m.pathnameBase])})),s,t,i);return e&&g?re.createElement(Ad.Provider,{value:{location:Ru({pathname:"/",search:"",hash:"",state:null,key:"default"},c),navigationType:ds.Pop}},g):g}function DA(){let n=BA(),e=TA(n)?n.status+" "+n.statusText:n instanceof Error?n.message:JSON.stringify(n),t=n instanceof Error?n.stack:null,r={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return re.createElement(re.Fragment,null,re.createElement("h2",null,"Unexpected Application Error!"),re.createElement("h3",{style:{fontStyle:"italic"}},e),t?re.createElement("pre",{style:r},t):null,null)}const NA=re.createElement(DA,null);class UA extends re.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,t){return t.location!==e.location||t.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:t.error,location:t.location,revalidation:e.revalidation||t.revalidation}}componentDidCatch(e,t){console.error("React Router caught the following error during render",e,t)}render(){return this.state.error!==void 0?re.createElement(Wo.Provider,{value:this.props.routeContext},re.createElement(o1.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function IA(n){let{routeContext:e,match:t,children:i}=n,r=re.useContext(Og);return r&&r.static&&r.staticContext&&(t.route.errorElement||t.route.ErrorBoundary)&&(r.staticContext._deepestRenderedBoundaryId=t.route.id),re.createElement(Wo.Provider,{value:e},i)}function OA(n,e,t,i){var r;if(e===void 0&&(e=[]),t===void 0&&(t=null),i===void 0&&(i=null),n==null){var s;if(!t)return null;if(t.errors)n=t.matches;else if((s=i)!=null&&s.v7_partialHydration&&e.length===0&&!t.initialized&&t.matches.length>0)n=t.matches;else return null}let o=n,a=(r=t)==null?void 0:r.errors;if(a!=null){let c=o.findIndex(f=>f.route.id&&(a==null?void 0:a[f.route.id])!==void 0);c>=0||Kt(!1),o=o.slice(0,Math.min(o.length,c+1))}let l=!1,u=-1;if(t&&i&&i.v7_partialHydration)for(let c=0;c<o.length;c++){let f=o[c];if((f.route.HydrateFallback||f.route.hydrateFallbackElement)&&(u=c),f.route.id){let{loaderData:d,errors:p}=t,v=f.route.loader&&d[f.route.id]===void 0&&(!p||p[f.route.id]===void 0);if(f.route.lazy||v){l=!0,u>=0?o=o.slice(0,u+1):o=[o[0]];break}}}return o.reduceRight((c,f,d)=>{let p,v=!1,g=null,m=null;t&&(p=a&&f.route.id?a[f.route.id]:void 0,g=f.route.errorElement||NA,l&&(u<0&&d===0?(v=!0,m=null):u===d&&(v=!0,m=f.route.hydrateFallbackElement||null)));let h=e.concat(o.slice(0,d+1)),x=()=>{let _;return p?_=g:v?_=m:f.route.Component?_=re.createElement(f.route.Component,null):f.route.element?_=f.route.element:_=c,re.createElement(IA,{match:f,routeContext:{outlet:c,matches:h,isDataRoute:t!=null},children:_})};return t&&(f.route.ErrorBoundary||f.route.errorElement||d===0)?re.createElement(UA,{location:t.location,revalidation:t.revalidation,component:g,error:p,children:x(),routeContext:{outlet:null,matches:h,isDataRoute:!0}}):x()},null)}var u1=function(n){return n.UseBlocker="useBlocker",n.UseRevalidator="useRevalidator",n.UseNavigateStable="useNavigate",n}(u1||{}),Xf=function(n){return n.UseBlocker="useBlocker",n.UseLoaderData="useLoaderData",n.UseActionData="useActionData",n.UseRouteError="useRouteError",n.UseNavigation="useNavigation",n.UseRouteLoaderData="useRouteLoaderData",n.UseMatches="useMatches",n.UseRevalidator="useRevalidator",n.UseNavigateStable="useNavigate",n.UseRouteId="useRouteId",n}(Xf||{});function FA(n){let e=re.useContext(Og);return e||Kt(!1),e}function kA(n){let e=re.useContext(AA);return e||Kt(!1),e}function zA(n){let e=re.useContext(Wo);return e||Kt(!1),e}function c1(n){let e=zA(),t=e.matches[e.matches.length-1];return t.route.id||Kt(!1),t.route.id}function BA(){var n;let e=re.useContext(o1),t=kA(Xf.UseRouteError),i=c1(Xf.UseRouteError);return e!==void 0?e:(n=t.errors)==null?void 0:n[i]}function HA(){let{router:n}=FA(u1.UseNavigateStable),e=c1(Xf.UseNavigateStable),t=re.useRef(!1);return a1(()=>{t.current=!0}),re.useCallback(function(r,s){s===void 0&&(s={}),t.current&&(typeof r=="number"?n.navigate(r):n.navigate(r,Ru({fromRouteId:e},s)))},[n,e])}function im(n){Kt(!1)}function GA(n){let{basename:e="/",children:t=null,location:i,navigationType:r=ds.Pop,navigator:s,static:o=!1,future:a}=n;Xu()&&Kt(!1);let l=e.replace(/^\/*/,"/"),u=re.useMemo(()=>({basename:l,navigator:s,static:o,future:Ru({v7_relativeSplatPath:!1},a)}),[l,a,s,o]);typeof i=="string"&&(i=fl(i));let{pathname:c="/",search:f="",hash:d="",state:p=null,key:v="default"}=i,g=re.useMemo(()=>{let m=Ig(c,l);return m==null?null:{location:{pathname:m,search:f,hash:d,state:p,key:v},navigationType:r}},[l,c,f,d,p,v,r]);return g==null?null:re.createElement(Vo.Provider,{value:u},re.createElement(Ad.Provider,{children:t,value:g}))}function VA(n){let{children:e,location:t}=n;return PA(rm(e),t)}new Promise(()=>{});function rm(n,e){e===void 0&&(e=[]);let t=[];return re.Children.forEach(n,(i,r)=>{if(!re.isValidElement(i))return;let s=[...e,r];if(i.type===re.Fragment){t.push.apply(t,rm(i.props.children,s));return}i.type!==im&&Kt(!1),!i.props.index||!i.props.children||Kt(!1);let o={id:i.props.id||s.join("-"),caseSensitive:i.props.caseSensitive,element:i.props.element,Component:i.props.Component,index:i.props.index,path:i.props.path,loader:i.props.loader,action:i.props.action,errorElement:i.props.errorElement,ErrorBoundary:i.props.ErrorBoundary,hasErrorBoundary:i.props.ErrorBoundary!=null||i.props.errorElement!=null,shouldRevalidate:i.props.shouldRevalidate,handle:i.props.handle,lazy:i.props.lazy};i.props.children&&(o.children=rm(i.props.children,s)),t.push(o)}),t}/**
 * React Router DOM v6.27.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function sm(){return sm=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(n[i]=t[i])}return n},sm.apply(this,arguments)}function WA(n,e){if(n==null)return{};var t={},i=Object.keys(n),r,s;for(s=0;s<i.length;s++)r=i[s],!(e.indexOf(r)>=0)&&(t[r]=n[r]);return t}function XA(n){return!!(n.metaKey||n.altKey||n.ctrlKey||n.shiftKey)}function jA(n,e){return n.button===0&&(!e||e==="_self")&&!XA(n)}const YA=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],qA="6";try{window.__reactRouterVersion=qA}catch{}const $A="startTransition",R0=VE[$A];function KA(n){let{basename:e,children:t,future:i,window:r}=n,s=re.useRef();s.current==null&&(s.current=tA({window:r,v5Compat:!0}));let o=s.current,[a,l]=re.useState({action:o.action,location:o.location}),{v7_startTransition:u}=i||{},c=re.useCallback(f=>{u&&R0?R0(()=>l(f)):l(f)},[l,u]);return re.useLayoutEffect(()=>o.listen(c),[o,c]),re.createElement(GA,{basename:e,children:t,location:a.location,navigationType:a.action,navigator:o,future:i})}const ZA=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",QA=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,f1=re.forwardRef(function(e,t){let{onClick:i,relative:r,reloadDocument:s,replace:o,state:a,target:l,to:u,preventScrollReset:c,viewTransition:f}=e,d=WA(e,YA),{basename:p}=re.useContext(Vo),v,g=!1;if(typeof u=="string"&&QA.test(u)&&(v=u,ZA))try{let _=new URL(window.location.href),y=u.startsWith("//")?new URL(_.protocol+u):new URL(u),w=Ig(y.pathname,p);y.origin===_.origin&&w!=null?u=w+y.search+y.hash:g=!0}catch{}let m=CA(u,{relative:r}),h=JA(u,{replace:o,state:a,target:l,preventScrollReset:c,relative:r,viewTransition:f});function x(_){i&&i(_),_.defaultPrevented||h(_)}return re.createElement("a",sm({},d,{href:v||m,onClick:g||s?i:x,ref:t,target:l}))});var b0;(function(n){n.UseScrollRestoration="useScrollRestoration",n.UseSubmit="useSubmit",n.UseSubmitFetcher="useSubmitFetcher",n.UseFetcher="useFetcher",n.useViewTransitionState="useViewTransitionState"})(b0||(b0={}));var P0;(function(n){n.UseFetcher="useFetcher",n.UseFetchers="useFetchers",n.UseScrollRestoration="useScrollRestoration"})(P0||(P0={}));function JA(n,e){let{target:t,replace:i,state:r,preventScrollReset:s,relative:o,viewTransition:a}=e===void 0?{}:e,l=RA(),u=Cd(),c=l1(n,{relative:o});return re.useCallback(f=>{if(jA(f,t)){f.preventDefault();let d=i!==void 0?i:Wf(u)===Wf(c);l(n,{replace:d,state:r,preventScrollReset:s,relative:o,viewTransition:a})}},[u,l,c,i,r,t,n,s,o,a])}/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Fg="162",eC=0,L0=1,tC=2,d1=1,nC=2,Cr=3,Fs=0,ni=1,Dr=2,Rs=0,Fa=1,D0=2,N0=3,U0=4,iC=5,co=100,rC=101,sC=102,I0=103,O0=104,oC=200,aC=201,lC=202,uC=203,om=204,am=205,cC=206,fC=207,dC=208,hC=209,pC=210,mC=211,gC=212,_C=213,vC=214,xC=0,yC=1,SC=2,jf=3,MC=4,EC=5,TC=6,wC=7,h1=0,AC=1,CC=2,bs=0,RC=1,bC=2,PC=3,LC=4,DC=5,NC=6,UC=7,p1=300,Qa=301,Ja=302,lm=303,um=304,Rd=306,cm=1e3,Qi=1001,fm=1002,Bn=1003,F0=1004,El=1005,$n=1006,ph=1007,go=1008,Ps=1009,IC=1010,OC=1011,kg=1012,m1=1013,hs=1014,Nr=1015,bu=1016,g1=1017,_1=1018,So=1020,FC=1021,Ji=1023,kC=1024,zC=1025,Mo=1026,el=1027,BC=1028,v1=1029,HC=1030,x1=1031,y1=1033,mh=33776,gh=33777,_h=33778,vh=33779,k0=35840,z0=35841,B0=35842,H0=35843,S1=36196,G0=37492,V0=37496,W0=37808,X0=37809,j0=37810,Y0=37811,q0=37812,$0=37813,K0=37814,Z0=37815,Q0=37816,J0=37817,ev=37818,tv=37819,nv=37820,iv=37821,xh=36492,rv=36494,sv=36495,GC=36283,ov=36284,av=36285,lv=36286,VC=3200,WC=3201,XC=0,jC=1,us="",sr="srgb",Xs="srgb-linear",zg="display-p3",bd="display-p3-linear",Yf="linear",Ct="srgb",qf="rec709",$f="p3",Yo=7680,uv=519,YC=512,qC=513,$C=514,M1=515,KC=516,ZC=517,QC=518,JC=519,cv=35044,fv="300 es",dm=1035,Fr=2e3,Kf=2001;class dl{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const En=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],yh=Math.PI/180,hm=180/Math.PI;function ju(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(En[n&255]+En[n>>8&255]+En[n>>16&255]+En[n>>24&255]+"-"+En[e&255]+En[e>>8&255]+"-"+En[e>>16&15|64]+En[e>>24&255]+"-"+En[t&63|128]+En[t>>8&255]+"-"+En[t>>16&255]+En[t>>24&255]+En[i&255]+En[i>>8&255]+En[i>>16&255]+En[i>>24&255]).toLowerCase()}function Zn(n,e,t){return Math.max(e,Math.min(t,n))}function eR(n,e){return(n%e+e)%e}function Sh(n,e,t){return(1-t)*n+t*e}function dv(n){return(n&n-1)===0&&n!==0}function pm(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function Tl(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function Yn(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}class ft{constructor(e=0,t=0){ft.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Zn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Je{constructor(e,t,i,r,s,o,a,l,u){Je.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,l,u)}set(e,t,i,r,s,o,a,l,u){const c=this.elements;return c[0]=e,c[1]=r,c[2]=a,c[3]=t,c[4]=s,c[5]=l,c[6]=i,c[7]=o,c[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[3],l=i[6],u=i[1],c=i[4],f=i[7],d=i[2],p=i[5],v=i[8],g=r[0],m=r[3],h=r[6],x=r[1],_=r[4],y=r[7],w=r[2],T=r[5],M=r[8];return s[0]=o*g+a*x+l*w,s[3]=o*m+a*_+l*T,s[6]=o*h+a*y+l*M,s[1]=u*g+c*x+f*w,s[4]=u*m+c*_+f*T,s[7]=u*h+c*y+f*M,s[2]=d*g+p*x+v*w,s[5]=d*m+p*_+v*T,s[8]=d*h+p*y+v*M,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],c=e[8];return t*o*c-t*a*u-i*s*c+i*a*l+r*s*u-r*o*l}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],c=e[8],f=c*o-a*u,d=a*l-c*s,p=u*s-o*l,v=t*f+i*d+r*p;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);const g=1/v;return e[0]=f*g,e[1]=(r*u-c*i)*g,e[2]=(a*i-r*o)*g,e[3]=d*g,e[4]=(c*t-r*l)*g,e[5]=(r*s-a*t)*g,e[6]=p*g,e[7]=(i*l-u*t)*g,e[8]=(o*t-i*s)*g,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,o,a){const l=Math.cos(s),u=Math.sin(s);return this.set(i*l,i*u,-i*(l*o+u*a)+o+e,-r*u,r*l,-r*(-u*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Mh.makeScale(e,t)),this}rotate(e){return this.premultiply(Mh.makeRotation(-e)),this}translate(e,t){return this.premultiply(Mh.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Mh=new Je;function E1(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Zf(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function tR(){const n=Zf("canvas");return n.style.display="block",n}const hv={};function nR(n){n in hv||(hv[n]=!0,console.warn(n))}const pv=new Je().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),mv=new Je().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),mc={[Xs]:{transfer:Yf,primaries:qf,toReference:n=>n,fromReference:n=>n},[sr]:{transfer:Ct,primaries:qf,toReference:n=>n.convertSRGBToLinear(),fromReference:n=>n.convertLinearToSRGB()},[bd]:{transfer:Yf,primaries:$f,toReference:n=>n.applyMatrix3(mv),fromReference:n=>n.applyMatrix3(pv)},[zg]:{transfer:Ct,primaries:$f,toReference:n=>n.convertSRGBToLinear().applyMatrix3(mv),fromReference:n=>n.applyMatrix3(pv).convertLinearToSRGB()}},iR=new Set([Xs,bd]),vt={enabled:!0,_workingColorSpace:Xs,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(n){if(!iR.has(n))throw new Error(`Unsupported working color space, "${n}".`);this._workingColorSpace=n},convert:function(n,e,t){if(this.enabled===!1||e===t||!e||!t)return n;const i=mc[e].toReference,r=mc[t].fromReference;return r(i(n))},fromWorkingColorSpace:function(n,e){return this.convert(n,this._workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this._workingColorSpace)},getPrimaries:function(n){return mc[n].primaries},getTransfer:function(n){return n===us?Yf:mc[n].transfer}};function ka(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Eh(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let qo;class T1{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{qo===void 0&&(qo=Zf("canvas")),qo.width=e.width,qo.height=e.height;const i=qo.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=qo}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Zf("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=ka(s[o]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(ka(t[i]/255)*255):t[i]=ka(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let rR=0;class w1{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:rR++}),this.uuid=ju(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(Th(r[o].image)):s.push(Th(r[o]))}else s=Th(r);i.url=s}return t||(e.images[this.uuid]=i),i}}function Th(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?T1.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let sR=0;class ii extends dl{constructor(e=ii.DEFAULT_IMAGE,t=ii.DEFAULT_MAPPING,i=Qi,r=Qi,s=$n,o=go,a=Ji,l=Ps,u=ii.DEFAULT_ANISOTROPY,c=us){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:sR++}),this.uuid=ju(),this.name="",this.source=new w1(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=u,this.format=a,this.internalFormat=null,this.type=l,this.offset=new ft(0,0),this.repeat=new ft(1,1),this.center=new ft(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Je,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=c,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==p1)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case cm:e.x=e.x-Math.floor(e.x);break;case Qi:e.x=e.x<0?0:1;break;case fm:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case cm:e.y=e.y-Math.floor(e.y);break;case Qi:e.y=e.y<0?0:1;break;case fm:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}}ii.DEFAULT_IMAGE=null;ii.DEFAULT_MAPPING=p1;ii.DEFAULT_ANISOTROPY=1;class mn{constructor(e=0,t=0,i=0,r=1){mn.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*i+o[11]*r+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s;const l=e.elements,u=l[0],c=l[4],f=l[8],d=l[1],p=l[5],v=l[9],g=l[2],m=l[6],h=l[10];if(Math.abs(c-d)<.01&&Math.abs(f-g)<.01&&Math.abs(v-m)<.01){if(Math.abs(c+d)<.1&&Math.abs(f+g)<.1&&Math.abs(v+m)<.1&&Math.abs(u+p+h-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const _=(u+1)/2,y=(p+1)/2,w=(h+1)/2,T=(c+d)/4,M=(f+g)/4,P=(v+m)/4;return _>y&&_>w?_<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(_),r=T/i,s=M/i):y>w?y<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(y),i=T/r,s=P/r):w<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(w),i=M/s,r=P/s),this.set(i,r,s,t),this}let x=Math.sqrt((m-v)*(m-v)+(f-g)*(f-g)+(d-c)*(d-c));return Math.abs(x)<.001&&(x=1),this.x=(m-v)/x,this.y=(f-g)/x,this.z=(d-c)/x,this.w=Math.acos((u+p+h-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class oR extends dl{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new mn(0,0,e,t),this.scissorTest=!1,this.viewport=new mn(0,0,e,t);const r={width:e,height:t,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:$n,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0,count:1},i);const s=new ii(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);s.flipY=!1,s.generateMipmaps=i.generateMipmaps,s.internalFormat=i.internalFormat,this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=i;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new w1(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Io extends oR{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class A1 extends ii{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Bn,this.minFilter=Bn,this.wrapR=Qi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class aR extends ii{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Bn,this.minFilter=Bn,this.wrapR=Qi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Yu{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,o,a){let l=i[r+0],u=i[r+1],c=i[r+2],f=i[r+3];const d=s[o+0],p=s[o+1],v=s[o+2],g=s[o+3];if(a===0){e[t+0]=l,e[t+1]=u,e[t+2]=c,e[t+3]=f;return}if(a===1){e[t+0]=d,e[t+1]=p,e[t+2]=v,e[t+3]=g;return}if(f!==g||l!==d||u!==p||c!==v){let m=1-a;const h=l*d+u*p+c*v+f*g,x=h>=0?1:-1,_=1-h*h;if(_>Number.EPSILON){const w=Math.sqrt(_),T=Math.atan2(w,h*x);m=Math.sin(m*T)/w,a=Math.sin(a*T)/w}const y=a*x;if(l=l*m+d*y,u=u*m+p*y,c=c*m+v*y,f=f*m+g*y,m===1-a){const w=1/Math.sqrt(l*l+u*u+c*c+f*f);l*=w,u*=w,c*=w,f*=w}}e[t]=l,e[t+1]=u,e[t+2]=c,e[t+3]=f}static multiplyQuaternionsFlat(e,t,i,r,s,o){const a=i[r],l=i[r+1],u=i[r+2],c=i[r+3],f=s[o],d=s[o+1],p=s[o+2],v=s[o+3];return e[t]=a*v+c*f+l*p-u*d,e[t+1]=l*v+c*d+u*f-a*p,e[t+2]=u*v+c*p+a*d-l*f,e[t+3]=c*v-a*f-l*d-u*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,u=a(i/2),c=a(r/2),f=a(s/2),d=l(i/2),p=l(r/2),v=l(s/2);switch(o){case"XYZ":this._x=d*c*f+u*p*v,this._y=u*p*f-d*c*v,this._z=u*c*v+d*p*f,this._w=u*c*f-d*p*v;break;case"YXZ":this._x=d*c*f+u*p*v,this._y=u*p*f-d*c*v,this._z=u*c*v-d*p*f,this._w=u*c*f+d*p*v;break;case"ZXY":this._x=d*c*f-u*p*v,this._y=u*p*f+d*c*v,this._z=u*c*v+d*p*f,this._w=u*c*f-d*p*v;break;case"ZYX":this._x=d*c*f-u*p*v,this._y=u*p*f+d*c*v,this._z=u*c*v-d*p*f,this._w=u*c*f+d*p*v;break;case"YZX":this._x=d*c*f+u*p*v,this._y=u*p*f+d*c*v,this._z=u*c*v-d*p*f,this._w=u*c*f-d*p*v;break;case"XZY":this._x=d*c*f-u*p*v,this._y=u*p*f-d*c*v,this._z=u*c*v+d*p*f,this._w=u*c*f+d*p*v;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],s=t[8],o=t[1],a=t[5],l=t[9],u=t[2],c=t[6],f=t[10],d=i+a+f;if(d>0){const p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(c-l)*p,this._y=(s-u)*p,this._z=(o-r)*p}else if(i>a&&i>f){const p=2*Math.sqrt(1+i-a-f);this._w=(c-l)/p,this._x=.25*p,this._y=(r+o)/p,this._z=(s+u)/p}else if(a>f){const p=2*Math.sqrt(1+a-i-f);this._w=(s-u)/p,this._x=(r+o)/p,this._y=.25*p,this._z=(l+c)/p}else{const p=2*Math.sqrt(1+f-i-a);this._w=(o-r)/p,this._x=(s+u)/p,this._y=(l+c)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Zn(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,s=e._z,o=e._w,a=t._x,l=t._y,u=t._z,c=t._w;return this._x=i*c+o*a+r*u-s*l,this._y=r*c+o*l+s*a-i*u,this._z=s*c+o*u+i*l-r*a,this._w=o*c-i*a-r*l-s*u,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const p=1-t;return this._w=p*o+t*this._w,this._x=p*i+t*this._x,this._y=p*r+t*this._y,this._z=p*s+t*this._z,this.normalize(),this}const u=Math.sqrt(l),c=Math.atan2(u,a),f=Math.sin((1-t)*c)/u,d=Math.sin(t*c)/u;return this._w=o*f+this._w*d,this._x=i*f+this._x*d,this._y=r*f+this._y*d,this._z=s*f+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class ${constructor(e=0,t=0,i=0){$.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(gv.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(gv.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,u=2*(o*r-a*i),c=2*(a*t-s*r),f=2*(s*i-o*t);return this.x=t+l*u+o*f-a*c,this.y=i+l*c+a*u-s*f,this.z=r+l*f+s*c-o*u,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return wh.copy(this).projectOnVector(e),this.sub(wh)}reflect(e){return this.sub(wh.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Zn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const wh=new $,gv=new Yu;class qu{constructor(e=new $(1/0,1/0,1/0),t=new $(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Wi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Wi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=Wi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Wi):Wi.fromBufferAttribute(s,o),Wi.applyMatrix4(e.matrixWorld),this.expandByPoint(Wi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),gc.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),gc.copy(i.boundingBox)),gc.applyMatrix4(e.matrixWorld),this.union(gc)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Wi),Wi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(wl),_c.subVectors(this.max,wl),$o.subVectors(e.a,wl),Ko.subVectors(e.b,wl),Zo.subVectors(e.c,wl),Qr.subVectors(Ko,$o),Jr.subVectors(Zo,Ko),$s.subVectors($o,Zo);let t=[0,-Qr.z,Qr.y,0,-Jr.z,Jr.y,0,-$s.z,$s.y,Qr.z,0,-Qr.x,Jr.z,0,-Jr.x,$s.z,0,-$s.x,-Qr.y,Qr.x,0,-Jr.y,Jr.x,0,-$s.y,$s.x,0];return!Ah(t,$o,Ko,Zo,_c)||(t=[1,0,0,0,1,0,0,0,1],!Ah(t,$o,Ko,Zo,_c))?!1:(vc.crossVectors(Qr,Jr),t=[vc.x,vc.y,vc.z],Ah(t,$o,Ko,Zo,_c))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Wi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Wi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Mr[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Mr[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Mr[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Mr[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Mr[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Mr[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Mr[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Mr[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Mr),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Mr=[new $,new $,new $,new $,new $,new $,new $,new $],Wi=new $,gc=new qu,$o=new $,Ko=new $,Zo=new $,Qr=new $,Jr=new $,$s=new $,wl=new $,_c=new $,vc=new $,Ks=new $;function Ah(n,e,t,i,r){for(let s=0,o=n.length-3;s<=o;s+=3){Ks.fromArray(n,s);const a=r.x*Math.abs(Ks.x)+r.y*Math.abs(Ks.y)+r.z*Math.abs(Ks.z),l=e.dot(Ks),u=t.dot(Ks),c=i.dot(Ks);if(Math.max(-Math.max(l,u,c),Math.min(l,u,c))>a)return!1}return!0}const lR=new qu,Al=new $,Ch=new $;class Pd{constructor(e=new $,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):lR.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Al.subVectors(e,this.center);const t=Al.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(Al,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Ch.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Al.copy(e.center).add(Ch)),this.expandByPoint(Al.copy(e.center).sub(Ch))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Er=new $,Rh=new $,xc=new $,es=new $,bh=new $,yc=new $,Ph=new $;class C1{constructor(e=new $,t=new $(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Er)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Er.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Er.copy(this.origin).addScaledVector(this.direction,t),Er.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){Rh.copy(e).add(t).multiplyScalar(.5),xc.copy(t).sub(e).normalize(),es.copy(this.origin).sub(Rh);const s=e.distanceTo(t)*.5,o=-this.direction.dot(xc),a=es.dot(this.direction),l=-es.dot(xc),u=es.lengthSq(),c=Math.abs(1-o*o);let f,d,p,v;if(c>0)if(f=o*l-a,d=o*a-l,v=s*c,f>=0)if(d>=-v)if(d<=v){const g=1/c;f*=g,d*=g,p=f*(f+o*d+2*a)+d*(o*f+d+2*l)+u}else d=s,f=Math.max(0,-(o*d+a)),p=-f*f+d*(d+2*l)+u;else d=-s,f=Math.max(0,-(o*d+a)),p=-f*f+d*(d+2*l)+u;else d<=-v?(f=Math.max(0,-(-o*s+a)),d=f>0?-s:Math.min(Math.max(-s,-l),s),p=-f*f+d*(d+2*l)+u):d<=v?(f=0,d=Math.min(Math.max(-s,-l),s),p=d*(d+2*l)+u):(f=Math.max(0,-(o*s+a)),d=f>0?s:Math.min(Math.max(-s,-l),s),p=-f*f+d*(d+2*l)+u);else d=o>0?-s:s,f=Math.max(0,-(o*d+a)),p=-f*f+d*(d+2*l)+u;return i&&i.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(Rh).addScaledVector(xc,d),p}intersectSphere(e,t){Er.subVectors(e.center,this.origin);const i=Er.dot(this.direction),r=Er.dot(Er)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,o,a,l;const u=1/this.direction.x,c=1/this.direction.y,f=1/this.direction.z,d=this.origin;return u>=0?(i=(e.min.x-d.x)*u,r=(e.max.x-d.x)*u):(i=(e.max.x-d.x)*u,r=(e.min.x-d.x)*u),c>=0?(s=(e.min.y-d.y)*c,o=(e.max.y-d.y)*c):(s=(e.max.y-d.y)*c,o=(e.min.y-d.y)*c),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),f>=0?(a=(e.min.z-d.z)*f,l=(e.max.z-d.z)*f):(a=(e.max.z-d.z)*f,l=(e.min.z-d.z)*f),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,Er)!==null}intersectTriangle(e,t,i,r,s){bh.subVectors(t,e),yc.subVectors(i,e),Ph.crossVectors(bh,yc);let o=this.direction.dot(Ph),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;es.subVectors(this.origin,e);const l=a*this.direction.dot(yc.crossVectors(es,yc));if(l<0)return null;const u=a*this.direction.dot(bh.cross(es));if(u<0||l+u>o)return null;const c=-a*es.dot(Ph);return c<0?null:this.at(c/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Zt{constructor(e,t,i,r,s,o,a,l,u,c,f,d,p,v,g,m){Zt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,l,u,c,f,d,p,v,g,m)}set(e,t,i,r,s,o,a,l,u,c,f,d,p,v,g,m){const h=this.elements;return h[0]=e,h[4]=t,h[8]=i,h[12]=r,h[1]=s,h[5]=o,h[9]=a,h[13]=l,h[2]=u,h[6]=c,h[10]=f,h[14]=d,h[3]=p,h[7]=v,h[11]=g,h[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Zt().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,r=1/Qo.setFromMatrixColumn(e,0).length(),s=1/Qo.setFromMatrixColumn(e,1).length(),o=1/Qo.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),u=Math.sin(r),c=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){const d=o*c,p=o*f,v=a*c,g=a*f;t[0]=l*c,t[4]=-l*f,t[8]=u,t[1]=p+v*u,t[5]=d-g*u,t[9]=-a*l,t[2]=g-d*u,t[6]=v+p*u,t[10]=o*l}else if(e.order==="YXZ"){const d=l*c,p=l*f,v=u*c,g=u*f;t[0]=d+g*a,t[4]=v*a-p,t[8]=o*u,t[1]=o*f,t[5]=o*c,t[9]=-a,t[2]=p*a-v,t[6]=g+d*a,t[10]=o*l}else if(e.order==="ZXY"){const d=l*c,p=l*f,v=u*c,g=u*f;t[0]=d-g*a,t[4]=-o*f,t[8]=v+p*a,t[1]=p+v*a,t[5]=o*c,t[9]=g-d*a,t[2]=-o*u,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const d=o*c,p=o*f,v=a*c,g=a*f;t[0]=l*c,t[4]=v*u-p,t[8]=d*u+g,t[1]=l*f,t[5]=g*u+d,t[9]=p*u-v,t[2]=-u,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const d=o*l,p=o*u,v=a*l,g=a*u;t[0]=l*c,t[4]=g-d*f,t[8]=v*f+p,t[1]=f,t[5]=o*c,t[9]=-a*c,t[2]=-u*c,t[6]=p*f+v,t[10]=d-g*f}else if(e.order==="XZY"){const d=o*l,p=o*u,v=a*l,g=a*u;t[0]=l*c,t[4]=-f,t[8]=u*c,t[1]=d*f+g,t[5]=o*c,t[9]=p*f-v,t[2]=v*f-p,t[6]=a*c,t[10]=g*f+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(uR,e,cR)}lookAt(e,t,i){const r=this.elements;return fi.subVectors(e,t),fi.lengthSq()===0&&(fi.z=1),fi.normalize(),ts.crossVectors(i,fi),ts.lengthSq()===0&&(Math.abs(i.z)===1?fi.x+=1e-4:fi.z+=1e-4,fi.normalize(),ts.crossVectors(i,fi)),ts.normalize(),Sc.crossVectors(fi,ts),r[0]=ts.x,r[4]=Sc.x,r[8]=fi.x,r[1]=ts.y,r[5]=Sc.y,r[9]=fi.y,r[2]=ts.z,r[6]=Sc.z,r[10]=fi.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[4],l=i[8],u=i[12],c=i[1],f=i[5],d=i[9],p=i[13],v=i[2],g=i[6],m=i[10],h=i[14],x=i[3],_=i[7],y=i[11],w=i[15],T=r[0],M=r[4],P=r[8],N=r[12],S=r[1],R=r[5],z=r[9],K=r[13],L=r[2],Y=r[6],B=r[10],X=r[14],D=r[3],F=r[7],C=r[11],Q=r[15];return s[0]=o*T+a*S+l*L+u*D,s[4]=o*M+a*R+l*Y+u*F,s[8]=o*P+a*z+l*B+u*C,s[12]=o*N+a*K+l*X+u*Q,s[1]=c*T+f*S+d*L+p*D,s[5]=c*M+f*R+d*Y+p*F,s[9]=c*P+f*z+d*B+p*C,s[13]=c*N+f*K+d*X+p*Q,s[2]=v*T+g*S+m*L+h*D,s[6]=v*M+g*R+m*Y+h*F,s[10]=v*P+g*z+m*B+h*C,s[14]=v*N+g*K+m*X+h*Q,s[3]=x*T+_*S+y*L+w*D,s[7]=x*M+_*R+y*Y+w*F,s[11]=x*P+_*z+y*B+w*C,s[15]=x*N+_*K+y*X+w*Q,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],u=e[13],c=e[2],f=e[6],d=e[10],p=e[14],v=e[3],g=e[7],m=e[11],h=e[15];return v*(+s*l*f-r*u*f-s*a*d+i*u*d+r*a*p-i*l*p)+g*(+t*l*p-t*u*d+s*o*d-r*o*p+r*u*c-s*l*c)+m*(+t*u*f-t*a*p-s*o*f+i*o*p+s*a*c-i*u*c)+h*(-r*a*c-t*l*f+t*a*d+r*o*f-i*o*d+i*l*c)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],c=e[8],f=e[9],d=e[10],p=e[11],v=e[12],g=e[13],m=e[14],h=e[15],x=f*m*u-g*d*u+g*l*p-a*m*p-f*l*h+a*d*h,_=v*d*u-c*m*u-v*l*p+o*m*p+c*l*h-o*d*h,y=c*g*u-v*f*u+v*a*p-o*g*p-c*a*h+o*f*h,w=v*f*l-c*g*l-v*a*d+o*g*d+c*a*m-o*f*m,T=t*x+i*_+r*y+s*w;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const M=1/T;return e[0]=x*M,e[1]=(g*d*s-f*m*s-g*r*p+i*m*p+f*r*h-i*d*h)*M,e[2]=(a*m*s-g*l*s+g*r*u-i*m*u-a*r*h+i*l*h)*M,e[3]=(f*l*s-a*d*s-f*r*u+i*d*u+a*r*p-i*l*p)*M,e[4]=_*M,e[5]=(c*m*s-v*d*s+v*r*p-t*m*p-c*r*h+t*d*h)*M,e[6]=(v*l*s-o*m*s-v*r*u+t*m*u+o*r*h-t*l*h)*M,e[7]=(o*d*s-c*l*s+c*r*u-t*d*u-o*r*p+t*l*p)*M,e[8]=y*M,e[9]=(v*f*s-c*g*s-v*i*p+t*g*p+c*i*h-t*f*h)*M,e[10]=(o*g*s-v*a*s+v*i*u-t*g*u-o*i*h+t*a*h)*M,e[11]=(c*a*s-o*f*s-c*i*u+t*f*u+o*i*p-t*a*p)*M,e[12]=w*M,e[13]=(c*g*r-v*f*r+v*i*d-t*g*d-c*i*m+t*f*m)*M,e[14]=(v*a*r-o*g*r-v*i*l+t*g*l+o*i*m-t*a*m)*M,e[15]=(o*f*r-c*a*r+c*i*l-t*f*l-o*i*d+t*a*d)*M,this}scale(e){const t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),s=1-i,o=e.x,a=e.y,l=e.z,u=s*o,c=s*a;return this.set(u*o+i,u*a-r*l,u*l+r*a,0,u*a+r*l,c*a+i,c*l-r*o,0,u*l-r*a,c*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,u=s+s,c=o+o,f=a+a,d=s*u,p=s*c,v=s*f,g=o*c,m=o*f,h=a*f,x=l*u,_=l*c,y=l*f,w=i.x,T=i.y,M=i.z;return r[0]=(1-(g+h))*w,r[1]=(p+y)*w,r[2]=(v-_)*w,r[3]=0,r[4]=(p-y)*T,r[5]=(1-(d+h))*T,r[6]=(m+x)*T,r[7]=0,r[8]=(v+_)*M,r[9]=(m-x)*M,r[10]=(1-(d+g))*M,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;let s=Qo.set(r[0],r[1],r[2]).length();const o=Qo.set(r[4],r[5],r[6]).length(),a=Qo.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Xi.copy(this);const u=1/s,c=1/o,f=1/a;return Xi.elements[0]*=u,Xi.elements[1]*=u,Xi.elements[2]*=u,Xi.elements[4]*=c,Xi.elements[5]*=c,Xi.elements[6]*=c,Xi.elements[8]*=f,Xi.elements[9]*=f,Xi.elements[10]*=f,t.setFromRotationMatrix(Xi),i.x=s,i.y=o,i.z=a,this}makePerspective(e,t,i,r,s,o,a=Fr){const l=this.elements,u=2*s/(t-e),c=2*s/(i-r),f=(t+e)/(t-e),d=(i+r)/(i-r);let p,v;if(a===Fr)p=-(o+s)/(o-s),v=-2*o*s/(o-s);else if(a===Kf)p=-o/(o-s),v=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=u,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=c,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=v,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,r,s,o,a=Fr){const l=this.elements,u=1/(t-e),c=1/(i-r),f=1/(o-s),d=(t+e)*u,p=(i+r)*c;let v,g;if(a===Fr)v=(o+s)*f,g=-2*f;else if(a===Kf)v=s*f,g=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*u,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*c,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=g,l[14]=-v,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const Qo=new $,Xi=new Zt,uR=new $(0,0,0),cR=new $(1,1,1),ts=new $,Sc=new $,fi=new $,_v=new Zt,vv=new Yu;class jr{constructor(e=0,t=0,i=0,r=jr.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],u=r[5],c=r[9],f=r[2],d=r[6],p=r[10];switch(t){case"XYZ":this._y=Math.asin(Zn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-c,p),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(d,u),this._z=0);break;case"YXZ":this._x=Math.asin(-Zn(c,-1,1)),Math.abs(c)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,u)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(Zn(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-f,p),this._z=Math.atan2(-o,u)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Zn(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,u));break;case"YZX":this._z=Math.asin(Zn(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-c,u),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-Zn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,u),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-c,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return _v.makeRotationFromQuaternion(e),this.setFromRotationMatrix(_v,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return vv.setFromEuler(this),this.setFromQuaternion(vv,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}jr.DEFAULT_ORDER="XYZ";class R1{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let fR=0;const xv=new $,Jo=new Yu,Tr=new Zt,Mc=new $,Cl=new $,dR=new $,hR=new Yu,yv=new $(1,0,0),Sv=new $(0,1,0),Mv=new $(0,0,1),pR={type:"added"},mR={type:"removed"},Lh={type:"childadded",child:null},Dh={type:"childremoved",child:null};class ri extends dl{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:fR++}),this.uuid=ju(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ri.DEFAULT_UP.clone();const e=new $,t=new jr,i=new Yu,r=new $(1,1,1);function s(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Zt},normalMatrix:{value:new Je}}),this.matrix=new Zt,this.matrixWorld=new Zt,this.matrixAutoUpdate=ri.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=ri.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new R1,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Jo.setFromAxisAngle(e,t),this.quaternion.multiply(Jo),this}rotateOnWorldAxis(e,t){return Jo.setFromAxisAngle(e,t),this.quaternion.premultiply(Jo),this}rotateX(e){return this.rotateOnAxis(yv,e)}rotateY(e){return this.rotateOnAxis(Sv,e)}rotateZ(e){return this.rotateOnAxis(Mv,e)}translateOnAxis(e,t){return xv.copy(e).applyQuaternion(this.quaternion),this.position.add(xv.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(yv,e)}translateY(e){return this.translateOnAxis(Sv,e)}translateZ(e){return this.translateOnAxis(Mv,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Tr.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Mc.copy(e):Mc.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Cl.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Tr.lookAt(Cl,Mc,this.up):Tr.lookAt(Mc,Cl,this.up),this.quaternion.setFromRotationMatrix(Tr),r&&(Tr.extractRotation(r.matrixWorld),Jo.setFromRotationMatrix(Tr),this.quaternion.premultiply(Jo.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(pR),Lh.child=e,this.dispatchEvent(Lh),Lh.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(mR),Dh.child=e,this.dispatchEvent(Dh),Dh.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Tr.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Tr.multiply(e.parent.matrixWorld)),e.applyMatrix4(Tr),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Cl,e,dR),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Cl,hR,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++){const s=t[i];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++){const a=r[s];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxGeometryCount=this._maxGeometryCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let u=0,c=l.length;u<c;u++){const f=l[u];s(e.shapes,f)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,u=this.material.length;l<u;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),u=o(e.textures),c=o(e.images),f=o(e.shapes),d=o(e.skeletons),p=o(e.animations),v=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),u.length>0&&(i.textures=u),c.length>0&&(i.images=c),f.length>0&&(i.shapes=f),d.length>0&&(i.skeletons=d),p.length>0&&(i.animations=p),v.length>0&&(i.nodes=v)}return i.object=r,i;function o(a){const l=[];for(const u in a){const c=a[u];delete c.metadata,l.push(c)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}ri.DEFAULT_UP=new $(0,1,0);ri.DEFAULT_MATRIX_AUTO_UPDATE=!0;ri.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const ji=new $,wr=new $,Nh=new $,Ar=new $,ea=new $,ta=new $,Ev=new $,Uh=new $,Ih=new $,Oh=new $;class cr{constructor(e=new $,t=new $,i=new $){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),ji.subVectors(e,t),r.cross(ji);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){ji.subVectors(r,t),wr.subVectors(i,t),Nh.subVectors(e,t);const o=ji.dot(ji),a=ji.dot(wr),l=ji.dot(Nh),u=wr.dot(wr),c=wr.dot(Nh),f=o*u-a*a;if(f===0)return s.set(0,0,0),null;const d=1/f,p=(u*l-a*c)*d,v=(o*c-a*l)*d;return s.set(1-p-v,v,p)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,Ar)===null?!1:Ar.x>=0&&Ar.y>=0&&Ar.x+Ar.y<=1}static getInterpolation(e,t,i,r,s,o,a,l){return this.getBarycoord(e,t,i,r,Ar)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Ar.x),l.addScaledVector(o,Ar.y),l.addScaledVector(a,Ar.z),l)}static isFrontFacing(e,t,i,r){return ji.subVectors(i,t),wr.subVectors(e,t),ji.cross(wr).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return ji.subVectors(this.c,this.b),wr.subVectors(this.a,this.b),ji.cross(wr).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return cr.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return cr.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,r,s){return cr.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return cr.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return cr.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,s=this.c;let o,a;ea.subVectors(r,i),ta.subVectors(s,i),Uh.subVectors(e,i);const l=ea.dot(Uh),u=ta.dot(Uh);if(l<=0&&u<=0)return t.copy(i);Ih.subVectors(e,r);const c=ea.dot(Ih),f=ta.dot(Ih);if(c>=0&&f<=c)return t.copy(r);const d=l*f-c*u;if(d<=0&&l>=0&&c<=0)return o=l/(l-c),t.copy(i).addScaledVector(ea,o);Oh.subVectors(e,s);const p=ea.dot(Oh),v=ta.dot(Oh);if(v>=0&&p<=v)return t.copy(s);const g=p*u-l*v;if(g<=0&&u>=0&&v<=0)return a=u/(u-v),t.copy(i).addScaledVector(ta,a);const m=c*v-p*f;if(m<=0&&f-c>=0&&p-v>=0)return Ev.subVectors(s,r),a=(f-c)/(f-c+(p-v)),t.copy(r).addScaledVector(Ev,a);const h=1/(m+g+d);return o=g*h,a=d*h,t.copy(i).addScaledVector(ea,o).addScaledVector(ta,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const b1={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ns={h:0,s:0,l:0},Ec={h:0,s:0,l:0};function Fh(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class mt{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=sr){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,vt.toWorkingColorSpace(this,t),this}setRGB(e,t,i,r=vt.workingColorSpace){return this.r=e,this.g=t,this.b=i,vt.toWorkingColorSpace(this,r),this}setHSL(e,t,i,r=vt.workingColorSpace){if(e=eR(e,1),t=Zn(t,0,1),i=Zn(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,o=2*i-s;this.r=Fh(o,s,e+1/3),this.g=Fh(o,s,e),this.b=Fh(o,s,e-1/3)}return vt.toWorkingColorSpace(this,r),this}setStyle(e,t=sr){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=sr){const i=b1[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ka(e.r),this.g=ka(e.g),this.b=ka(e.b),this}copyLinearToSRGB(e){return this.r=Eh(e.r),this.g=Eh(e.g),this.b=Eh(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=sr){return vt.fromWorkingColorSpace(Tn.copy(this),e),Math.round(Zn(Tn.r*255,0,255))*65536+Math.round(Zn(Tn.g*255,0,255))*256+Math.round(Zn(Tn.b*255,0,255))}getHexString(e=sr){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=vt.workingColorSpace){vt.fromWorkingColorSpace(Tn.copy(this),t);const i=Tn.r,r=Tn.g,s=Tn.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,u;const c=(a+o)/2;if(a===o)l=0,u=0;else{const f=o-a;switch(u=c<=.5?f/(o+a):f/(2-o-a),o){case i:l=(r-s)/f+(r<s?6:0);break;case r:l=(s-i)/f+2;break;case s:l=(i-r)/f+4;break}l/=6}return e.h=l,e.s=u,e.l=c,e}getRGB(e,t=vt.workingColorSpace){return vt.fromWorkingColorSpace(Tn.copy(this),t),e.r=Tn.r,e.g=Tn.g,e.b=Tn.b,e}getStyle(e=sr){vt.fromWorkingColorSpace(Tn.copy(this),e);const t=Tn.r,i=Tn.g,r=Tn.b;return e!==sr?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(ns),this.setHSL(ns.h+e,ns.s+t,ns.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(ns),e.getHSL(Ec);const i=Sh(ns.h,Ec.h,t),r=Sh(ns.s,Ec.s,t),s=Sh(ns.l,Ec.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Tn=new mt;mt.NAMES=b1;let gR=0;class $u extends dl{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:gR++}),this.uuid=ju(),this.name="",this.type="Material",this.blending=Fa,this.side=Fs,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=om,this.blendDst=am,this.blendEquation=co,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new mt(0,0,0),this.blendAlpha=0,this.depthFunc=jf,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=uv,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Yo,this.stencilZFail=Yo,this.stencilZPass=Yo,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Fa&&(i.blending=this.blending),this.side!==Fs&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==om&&(i.blendSrc=this.blendSrc),this.blendDst!==am&&(i.blendDst=this.blendDst),this.blendEquation!==co&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==jf&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==uv&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Yo&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Yo&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Yo&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(t){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class P1 extends $u{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new mt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new jr,this.combine=h1,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const jt=new $,Tc=new ft;class gr{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=cv,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Nr,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return nR("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Tc.fromBufferAttribute(this,t),Tc.applyMatrix3(e),this.setXY(t,Tc.x,Tc.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)jt.fromBufferAttribute(this,t),jt.applyMatrix3(e),this.setXYZ(t,jt.x,jt.y,jt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)jt.fromBufferAttribute(this,t),jt.applyMatrix4(e),this.setXYZ(t,jt.x,jt.y,jt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)jt.fromBufferAttribute(this,t),jt.applyNormalMatrix(e),this.setXYZ(t,jt.x,jt.y,jt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)jt.fromBufferAttribute(this,t),jt.transformDirection(e),this.setXYZ(t,jt.x,jt.y,jt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Tl(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Yn(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Tl(t,this.array)),t}setX(e,t){return this.normalized&&(t=Yn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Tl(t,this.array)),t}setY(e,t){return this.normalized&&(t=Yn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Tl(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Yn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Tl(t,this.array)),t}setW(e,t){return this.normalized&&(t=Yn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Yn(t,this.array),i=Yn(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=Yn(t,this.array),i=Yn(i,this.array),r=Yn(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=Yn(t,this.array),i=Yn(i,this.array),r=Yn(r,this.array),s=Yn(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==cv&&(e.usage=this.usage),e}}class L1 extends gr{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class D1 extends gr{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class Ls extends gr{constructor(e,t,i){super(new Float32Array(e),t,i)}}let _R=0;const Ri=new Zt,kh=new ri,na=new $,di=new qu,Rl=new qu,an=new $;class xr extends dl{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:_R++}),this.uuid=ju(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(E1(e)?D1:L1)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Je().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Ri.makeRotationFromQuaternion(e),this.applyMatrix4(Ri),this}rotateX(e){return Ri.makeRotationX(e),this.applyMatrix4(Ri),this}rotateY(e){return Ri.makeRotationY(e),this.applyMatrix4(Ri),this}rotateZ(e){return Ri.makeRotationZ(e),this.applyMatrix4(Ri),this}translate(e,t,i){return Ri.makeTranslation(e,t,i),this.applyMatrix4(Ri),this}scale(e,t,i){return Ri.makeScale(e,t,i),this.applyMatrix4(Ri),this}lookAt(e){return kh.lookAt(e),kh.updateMatrix(),this.applyMatrix4(kh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(na).negate(),this.translate(na.x,na.y,na.z),this}setFromPoints(e){const t=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new Ls(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new qu);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new $(-1/0,-1/0,-1/0),new $(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const s=t[i];di.setFromBufferAttribute(s),this.morphTargetsRelative?(an.addVectors(this.boundingBox.min,di.min),this.boundingBox.expandByPoint(an),an.addVectors(this.boundingBox.max,di.max),this.boundingBox.expandByPoint(an)):(this.boundingBox.expandByPoint(di.min),this.boundingBox.expandByPoint(di.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Pd);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new $,1/0);return}if(e){const i=this.boundingSphere.center;if(di.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];Rl.setFromBufferAttribute(a),this.morphTargetsRelative?(an.addVectors(di.min,Rl.min),di.expandByPoint(an),an.addVectors(di.max,Rl.max),di.expandByPoint(an)):(di.expandByPoint(Rl.min),di.expandByPoint(Rl.max))}di.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)an.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(an));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],l=this.morphTargetsRelative;for(let u=0,c=a.count;u<c;u++)an.fromBufferAttribute(a,u),l&&(na.fromBufferAttribute(e,u),an.add(na)),r=Math.max(r,i.distanceToSquared(an))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new gr(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let P=0;P<i.count;P++)a[P]=new $,l[P]=new $;const u=new $,c=new $,f=new $,d=new ft,p=new ft,v=new ft,g=new $,m=new $;function h(P,N,S){u.fromBufferAttribute(i,P),c.fromBufferAttribute(i,N),f.fromBufferAttribute(i,S),d.fromBufferAttribute(s,P),p.fromBufferAttribute(s,N),v.fromBufferAttribute(s,S),c.sub(u),f.sub(u),p.sub(d),v.sub(d);const R=1/(p.x*v.y-v.x*p.y);isFinite(R)&&(g.copy(c).multiplyScalar(v.y).addScaledVector(f,-p.y).multiplyScalar(R),m.copy(f).multiplyScalar(p.x).addScaledVector(c,-v.x).multiplyScalar(R),a[P].add(g),a[N].add(g),a[S].add(g),l[P].add(m),l[N].add(m),l[S].add(m))}let x=this.groups;x.length===0&&(x=[{start:0,count:e.count}]);for(let P=0,N=x.length;P<N;++P){const S=x[P],R=S.start,z=S.count;for(let K=R,L=R+z;K<L;K+=3)h(e.getX(K+0),e.getX(K+1),e.getX(K+2))}const _=new $,y=new $,w=new $,T=new $;function M(P){w.fromBufferAttribute(r,P),T.copy(w);const N=a[P];_.copy(N),_.sub(w.multiplyScalar(w.dot(N))).normalize(),y.crossVectors(T,N);const R=y.dot(l[P])<0?-1:1;o.setXYZW(P,_.x,_.y,_.z,R)}for(let P=0,N=x.length;P<N;++P){const S=x[P],R=S.start,z=S.count;for(let K=R,L=R+z;K<L;K+=3)M(e.getX(K+0)),M(e.getX(K+1)),M(e.getX(K+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new gr(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let d=0,p=i.count;d<p;d++)i.setXYZ(d,0,0,0);const r=new $,s=new $,o=new $,a=new $,l=new $,u=new $,c=new $,f=new $;if(e)for(let d=0,p=e.count;d<p;d+=3){const v=e.getX(d+0),g=e.getX(d+1),m=e.getX(d+2);r.fromBufferAttribute(t,v),s.fromBufferAttribute(t,g),o.fromBufferAttribute(t,m),c.subVectors(o,s),f.subVectors(r,s),c.cross(f),a.fromBufferAttribute(i,v),l.fromBufferAttribute(i,g),u.fromBufferAttribute(i,m),a.add(c),l.add(c),u.add(c),i.setXYZ(v,a.x,a.y,a.z),i.setXYZ(g,l.x,l.y,l.z),i.setXYZ(m,u.x,u.y,u.z)}else for(let d=0,p=t.count;d<p;d+=3)r.fromBufferAttribute(t,d+0),s.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),c.subVectors(o,s),f.subVectors(r,s),c.cross(f),i.setXYZ(d+0,c.x,c.y,c.z),i.setXYZ(d+1,c.x,c.y,c.z),i.setXYZ(d+2,c.x,c.y,c.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)an.fromBufferAttribute(e,t),an.normalize(),e.setXYZ(t,an.x,an.y,an.z)}toNonIndexed(){function e(a,l){const u=a.array,c=a.itemSize,f=a.normalized,d=new u.constructor(l.length*c);let p=0,v=0;for(let g=0,m=l.length;g<m;g++){a.isInterleavedBufferAttribute?p=l[g]*a.data.stride+a.offset:p=l[g]*c;for(let h=0;h<c;h++)d[v++]=u[p++]}return new gr(d,c,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new xr,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],u=e(l,i);t.setAttribute(a,u)}const s=this.morphAttributes;for(const a in s){const l=[],u=s[a];for(let c=0,f=u.length;c<f;c++){const d=u[c],p=e(d,i);l.push(p)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const u=o[a];t.addGroup(u.start,u.count,u.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const u in l)l[u]!==void 0&&(e[u]=l[u]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const u=i[l];e.data.attributes[l]=u.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const u=this.morphAttributes[l],c=[];for(let f=0,d=u.length;f<d;f++){const p=u[f];c.push(p.toJSON(e.data))}c.length>0&&(r[l]=c,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const r=e.attributes;for(const u in r){const c=r[u];this.setAttribute(u,c.clone(t))}const s=e.morphAttributes;for(const u in s){const c=[],f=s[u];for(let d=0,p=f.length;d<p;d++)c.push(f[d].clone(t));this.morphAttributes[u]=c}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let u=0,c=o.length;u<c;u++){const f=o[u];this.addGroup(f.start,f.count,f.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Tv=new Zt,Zs=new C1,wc=new Pd,wv=new $,ia=new $,ra=new $,sa=new $,zh=new $,Ac=new $,Cc=new ft,Rc=new ft,bc=new ft,Av=new $,Cv=new $,Rv=new $,Pc=new $,Lc=new $;class kr extends ri{constructor(e=new xr,t=new P1){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){Ac.set(0,0,0);for(let l=0,u=s.length;l<u;l++){const c=a[l],f=s[l];c!==0&&(zh.fromBufferAttribute(f,e),o?Ac.addScaledVector(zh,c):Ac.addScaledVector(zh.sub(t),c))}t.add(Ac)}return t}raycast(e,t){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),wc.copy(i.boundingSphere),wc.applyMatrix4(s),Zs.copy(e.ray).recast(e.near),!(wc.containsPoint(Zs.origin)===!1&&(Zs.intersectSphere(wc,wv)===null||Zs.origin.distanceToSquared(wv)>(e.far-e.near)**2))&&(Tv.copy(s).invert(),Zs.copy(e.ray).applyMatrix4(Tv),!(i.boundingBox!==null&&Zs.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Zs)))}_computeIntersections(e,t,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,u=s.attributes.uv,c=s.attributes.uv1,f=s.attributes.normal,d=s.groups,p=s.drawRange;if(a!==null)if(Array.isArray(o))for(let v=0,g=d.length;v<g;v++){const m=d[v],h=o[m.materialIndex],x=Math.max(m.start,p.start),_=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let y=x,w=_;y<w;y+=3){const T=a.getX(y),M=a.getX(y+1),P=a.getX(y+2);r=Dc(this,h,e,i,u,c,f,T,M,P),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const v=Math.max(0,p.start),g=Math.min(a.count,p.start+p.count);for(let m=v,h=g;m<h;m+=3){const x=a.getX(m),_=a.getX(m+1),y=a.getX(m+2);r=Dc(this,o,e,i,u,c,f,x,_,y),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let v=0,g=d.length;v<g;v++){const m=d[v],h=o[m.materialIndex],x=Math.max(m.start,p.start),_=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let y=x,w=_;y<w;y+=3){const T=y,M=y+1,P=y+2;r=Dc(this,h,e,i,u,c,f,T,M,P),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const v=Math.max(0,p.start),g=Math.min(l.count,p.start+p.count);for(let m=v,h=g;m<h;m+=3){const x=m,_=m+1,y=m+2;r=Dc(this,o,e,i,u,c,f,x,_,y),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}}}function vR(n,e,t,i,r,s,o,a){let l;if(e.side===ni?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===Fs,a),l===null)return null;Lc.copy(a),Lc.applyMatrix4(n.matrixWorld);const u=t.ray.origin.distanceTo(Lc);return u<t.near||u>t.far?null:{distance:u,point:Lc.clone(),object:n}}function Dc(n,e,t,i,r,s,o,a,l,u){n.getVertexPosition(a,ia),n.getVertexPosition(l,ra),n.getVertexPosition(u,sa);const c=vR(n,e,t,i,ia,ra,sa,Pc);if(c){r&&(Cc.fromBufferAttribute(r,a),Rc.fromBufferAttribute(r,l),bc.fromBufferAttribute(r,u),c.uv=cr.getInterpolation(Pc,ia,ra,sa,Cc,Rc,bc,new ft)),s&&(Cc.fromBufferAttribute(s,a),Rc.fromBufferAttribute(s,l),bc.fromBufferAttribute(s,u),c.uv1=cr.getInterpolation(Pc,ia,ra,sa,Cc,Rc,bc,new ft)),o&&(Av.fromBufferAttribute(o,a),Cv.fromBufferAttribute(o,l),Rv.fromBufferAttribute(o,u),c.normal=cr.getInterpolation(Pc,ia,ra,sa,Av,Cv,Rv,new $),c.normal.dot(i.direction)>0&&c.normal.multiplyScalar(-1));const f={a,b:l,c:u,normal:new $,materialIndex:0};cr.getNormal(ia,ra,sa,f.normal),c.face=f}return c}class Ku extends xr{constructor(e=1,t=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],u=[],c=[],f=[];let d=0,p=0;v("z","y","x",-1,-1,i,t,e,o,s,0),v("z","y","x",1,-1,i,t,-e,o,s,1),v("x","z","y",1,1,e,i,t,r,o,2),v("x","z","y",1,-1,e,i,-t,r,o,3),v("x","y","z",1,-1,e,t,i,r,s,4),v("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new Ls(u,3)),this.setAttribute("normal",new Ls(c,3)),this.setAttribute("uv",new Ls(f,2));function v(g,m,h,x,_,y,w,T,M,P,N){const S=y/M,R=w/P,z=y/2,K=w/2,L=T/2,Y=M+1,B=P+1;let X=0,D=0;const F=new $;for(let C=0;C<B;C++){const Q=C*R-K;for(let se=0;se<Y;se++){const Oe=se*S-z;F[g]=Oe*x,F[m]=Q*_,F[h]=L,u.push(F.x,F.y,F.z),F[g]=0,F[m]=0,F[h]=T>0?1:-1,c.push(F.x,F.y,F.z),f.push(se/M),f.push(1-C/P),X+=1}}for(let C=0;C<P;C++)for(let Q=0;Q<M;Q++){const se=d+Q+Y*C,Oe=d+Q+Y*(C+1),V=d+(Q+1)+Y*(C+1),ee=d+(Q+1)+Y*C;l.push(se,Oe,ee),l.push(Oe,V,ee),D+=6}a.addGroup(p,D,N),p+=D,d+=X}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ku(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function tl(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function In(n){const e={};for(let t=0;t<n.length;t++){const i=tl(n[t]);for(const r in i)e[r]=i[r]}return e}function xR(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function N1(n){return n.getRenderTarget()===null?n.outputColorSpace:vt.workingColorSpace}const yR={clone:tl,merge:In};var SR=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,MR=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ks extends $u{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=SR,this.fragmentShader=MR,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=tl(e.uniforms),this.uniformsGroups=xR(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class U1 extends ri{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Zt,this.projectionMatrix=new Zt,this.projectionMatrixInverse=new Zt,this.coordinateSystem=Fr}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const is=new $,bv=new ft,Pv=new ft;class Di extends U1{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=hm*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(yh*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return hm*2*Math.atan(Math.tan(yh*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){is.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(is.x,is.y).multiplyScalar(-e/is.z),is.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(is.x,is.y).multiplyScalar(-e/is.z)}getViewSize(e,t){return this.getViewBounds(e,bv,Pv),t.subVectors(Pv,bv)}setViewOffset(e,t,i,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(yh*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,u=o.fullHeight;s+=o.offsetX*r/l,t-=o.offsetY*i/u,r*=o.width/l,i*=o.height/u}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const oa=-90,aa=1;class ER extends ri{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Di(oa,aa,e,t);r.layers=this.layers,this.add(r);const s=new Di(oa,aa,e,t);s.layers=this.layers,this.add(s);const o=new Di(oa,aa,e,t);o.layers=this.layers,this.add(o);const a=new Di(oa,aa,e,t);a.layers=this.layers,this.add(a);const l=new Di(oa,aa,e,t);l.layers=this.layers,this.add(l);const u=new Di(oa,aa,e,t);u.layers=this.layers,this.add(u)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,r,s,o,a,l]=t;for(const u of t)this.remove(u);if(e===Fr)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Kf)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const u of t)this.add(u),u.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,u,c]=this.children,f=e.getRenderTarget(),d=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),v=e.xr.enabled;e.xr.enabled=!1;const g=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(t,s),e.setRenderTarget(i,1,r),e.render(t,o),e.setRenderTarget(i,2,r),e.render(t,a),e.setRenderTarget(i,3,r),e.render(t,l),e.setRenderTarget(i,4,r),e.render(t,u),i.texture.generateMipmaps=g,e.setRenderTarget(i,5,r),e.render(t,c),e.setRenderTarget(f,d,p),e.xr.enabled=v,i.texture.needsPMREMUpdate=!0}}class I1 extends ii{constructor(e,t,i,r,s,o,a,l,u,c){e=e!==void 0?e:[],t=t!==void 0?t:Qa,super(e,t,i,r,s,o,a,l,u,c),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class TR extends Io{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new I1(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:$n}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new Ku(5,5,5),s=new ks({name:"CubemapFromEquirect",uniforms:tl(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:ni,blending:Rs});s.uniforms.tEquirect.value=t;const o=new kr(r,s),a=t.minFilter;return t.minFilter===go&&(t.minFilter=$n),new ER(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,i,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,r);e.setRenderTarget(s)}}const Bh=new $,wR=new $,AR=new Je;class so{constructor(e=new $(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=Bh.subVectors(i,t).cross(wR.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(Bh),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||AR.getNormalMatrix(e),r=this.coplanarPoint(Bh).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Qs=new Pd,Nc=new $;class O1{constructor(e=new so,t=new so,i=new so,r=new so,s=new so,o=new so){this.planes=[e,t,i,r,s,o]}set(e,t,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Fr){const i=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],l=r[3],u=r[4],c=r[5],f=r[6],d=r[7],p=r[8],v=r[9],g=r[10],m=r[11],h=r[12],x=r[13],_=r[14],y=r[15];if(i[0].setComponents(l-s,d-u,m-p,y-h).normalize(),i[1].setComponents(l+s,d+u,m+p,y+h).normalize(),i[2].setComponents(l+o,d+c,m+v,y+x).normalize(),i[3].setComponents(l-o,d-c,m-v,y-x).normalize(),i[4].setComponents(l-a,d-f,m-g,y-_).normalize(),t===Fr)i[5].setComponents(l+a,d+f,m+g,y+_).normalize();else if(t===Kf)i[5].setComponents(a,f,g,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Qs.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Qs.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Qs)}intersectsSprite(e){return Qs.center.set(0,0,0),Qs.radius=.7071067811865476,Qs.applyMatrix4(e.matrixWorld),this.intersectsSphere(Qs)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(Nc.x=r.normal.x>0?e.max.x:e.min.x,Nc.y=r.normal.y>0?e.max.y:e.min.y,Nc.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Nc)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function F1(){let n=null,e=!1,t=null,i=null;function r(s,o){t(s,o),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function CR(n,e){const t=e.isWebGL2,i=new WeakMap;function r(u,c){const f=u.array,d=u.usage,p=f.byteLength,v=n.createBuffer();n.bindBuffer(c,v),n.bufferData(c,f,d),u.onUploadCallback();let g;if(f instanceof Float32Array)g=n.FLOAT;else if(f instanceof Uint16Array)if(u.isFloat16BufferAttribute)if(t)g=n.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else g=n.UNSIGNED_SHORT;else if(f instanceof Int16Array)g=n.SHORT;else if(f instanceof Uint32Array)g=n.UNSIGNED_INT;else if(f instanceof Int32Array)g=n.INT;else if(f instanceof Int8Array)g=n.BYTE;else if(f instanceof Uint8Array)g=n.UNSIGNED_BYTE;else if(f instanceof Uint8ClampedArray)g=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+f);return{buffer:v,type:g,bytesPerElement:f.BYTES_PER_ELEMENT,version:u.version,size:p}}function s(u,c,f){const d=c.array,p=c._updateRange,v=c.updateRanges;if(n.bindBuffer(f,u),p.count===-1&&v.length===0&&n.bufferSubData(f,0,d),v.length!==0){for(let g=0,m=v.length;g<m;g++){const h=v[g];t?n.bufferSubData(f,h.start*d.BYTES_PER_ELEMENT,d,h.start,h.count):n.bufferSubData(f,h.start*d.BYTES_PER_ELEMENT,d.subarray(h.start,h.start+h.count))}c.clearUpdateRanges()}p.count!==-1&&(t?n.bufferSubData(f,p.offset*d.BYTES_PER_ELEMENT,d,p.offset,p.count):n.bufferSubData(f,p.offset*d.BYTES_PER_ELEMENT,d.subarray(p.offset,p.offset+p.count)),p.count=-1),c.onUploadCallback()}function o(u){return u.isInterleavedBufferAttribute&&(u=u.data),i.get(u)}function a(u){u.isInterleavedBufferAttribute&&(u=u.data);const c=i.get(u);c&&(n.deleteBuffer(c.buffer),i.delete(u))}function l(u,c){if(u.isGLBufferAttribute){const d=i.get(u);(!d||d.version<u.version)&&i.set(u,{buffer:u.buffer,type:u.type,bytesPerElement:u.elementSize,version:u.version});return}u.isInterleavedBufferAttribute&&(u=u.data);const f=i.get(u);if(f===void 0)i.set(u,r(u,c));else if(f.version<u.version){if(f.size!==u.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(f.buffer,u,c),f.version=u.version}}return{get:o,remove:a,update:l}}class Ld extends xr{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const s=e/2,o=t/2,a=Math.floor(i),l=Math.floor(r),u=a+1,c=l+1,f=e/a,d=t/l,p=[],v=[],g=[],m=[];for(let h=0;h<c;h++){const x=h*d-o;for(let _=0;_<u;_++){const y=_*f-s;v.push(y,-x,0),g.push(0,0,1),m.push(_/a),m.push(1-h/l)}}for(let h=0;h<l;h++)for(let x=0;x<a;x++){const _=x+u*h,y=x+u*(h+1),w=x+1+u*(h+1),T=x+1+u*h;p.push(_,y,T),p.push(y,w,T)}this.setIndex(p),this.setAttribute("position",new Ls(v,3)),this.setAttribute("normal",new Ls(g,3)),this.setAttribute("uv",new Ls(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ld(e.width,e.height,e.widthSegments,e.heightSegments)}}var RR=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,bR=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,PR=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,LR=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,DR=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,NR=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,UR=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,IR=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,OR=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,FR=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,kR=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,zR=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,BR=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,HR=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,GR=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,VR=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,WR=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,XR=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,jR=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,YR=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,qR=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,$R=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,KR=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,ZR=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,QR=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,JR=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,eb=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,tb=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,nb=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,ib=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,rb="gl_FragColor = linearToOutputTexel( gl_FragColor );",sb=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,ob=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,ab=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,lb=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,ub=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,cb=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,fb=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,db=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,hb=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,pb=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,mb=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,gb=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,_b=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,vb=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,xb=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,yb=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Sb=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Mb=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Eb=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Tb=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,wb=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Ab=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Cb=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Rb=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,bb=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Pb=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Lb=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Db=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Nb=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Ub=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Ib=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Ob=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Fb=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,kb=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,zb=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Bb=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Hb=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[MORPHTARGETS_COUNT];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Gb=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Vb=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,Wb=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
	#endif
	#ifdef MORPHTARGETS_TEXTURE
		#ifndef USE_INSTANCING_MORPH
			uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		#endif
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,Xb=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,jb=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Yb=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,qb=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,$b=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Kb=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Zb=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Qb=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Jb=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,eP=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,tP=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,nP=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,iP=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,rP=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,sP=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,oP=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,aP=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,lP=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,uP=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,cP=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,fP=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,dP=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,hP=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,pP=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,mP=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,gP=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,_P=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,vP=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,xP=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,yP=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,SP=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	float startCompression = 0.8 - 0.04;
	float desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min(color.r, min(color.g, color.b));
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max(color.r, max(color.g, color.b));
	if (peak < startCompression) return color;
	float d = 1. - startCompression;
	float newPeak = 1. - d * d / (peak + d - startCompression);
	color *= newPeak / peak;
	float g = 1. - 1. / (desaturation * (peak - newPeak) + 1.);
	return mix(color, vec3(1, 1, 1), g);
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,MP=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,EP=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,TP=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,wP=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,AP=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,CP=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const RP=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,bP=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,PP=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,LP=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,DP=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,NP=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,UP=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,IP=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,OP=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,FP=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,kP=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,zP=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,BP=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,HP=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,GP=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,VP=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,WP=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,XP=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,jP=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,YP=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,qP=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,$P=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,KP=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ZP=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,QP=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,JP=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,e2=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,t2=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,n2=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,i2=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,r2=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,s2=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,o2=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,a2=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Qe={alphahash_fragment:RR,alphahash_pars_fragment:bR,alphamap_fragment:PR,alphamap_pars_fragment:LR,alphatest_fragment:DR,alphatest_pars_fragment:NR,aomap_fragment:UR,aomap_pars_fragment:IR,batching_pars_vertex:OR,batching_vertex:FR,begin_vertex:kR,beginnormal_vertex:zR,bsdfs:BR,iridescence_fragment:HR,bumpmap_pars_fragment:GR,clipping_planes_fragment:VR,clipping_planes_pars_fragment:WR,clipping_planes_pars_vertex:XR,clipping_planes_vertex:jR,color_fragment:YR,color_pars_fragment:qR,color_pars_vertex:$R,color_vertex:KR,common:ZR,cube_uv_reflection_fragment:QR,defaultnormal_vertex:JR,displacementmap_pars_vertex:eb,displacementmap_vertex:tb,emissivemap_fragment:nb,emissivemap_pars_fragment:ib,colorspace_fragment:rb,colorspace_pars_fragment:sb,envmap_fragment:ob,envmap_common_pars_fragment:ab,envmap_pars_fragment:lb,envmap_pars_vertex:ub,envmap_physical_pars_fragment:Sb,envmap_vertex:cb,fog_vertex:fb,fog_pars_vertex:db,fog_fragment:hb,fog_pars_fragment:pb,gradientmap_pars_fragment:mb,lightmap_fragment:gb,lightmap_pars_fragment:_b,lights_lambert_fragment:vb,lights_lambert_pars_fragment:xb,lights_pars_begin:yb,lights_toon_fragment:Mb,lights_toon_pars_fragment:Eb,lights_phong_fragment:Tb,lights_phong_pars_fragment:wb,lights_physical_fragment:Ab,lights_physical_pars_fragment:Cb,lights_fragment_begin:Rb,lights_fragment_maps:bb,lights_fragment_end:Pb,logdepthbuf_fragment:Lb,logdepthbuf_pars_fragment:Db,logdepthbuf_pars_vertex:Nb,logdepthbuf_vertex:Ub,map_fragment:Ib,map_pars_fragment:Ob,map_particle_fragment:Fb,map_particle_pars_fragment:kb,metalnessmap_fragment:zb,metalnessmap_pars_fragment:Bb,morphinstance_vertex:Hb,morphcolor_vertex:Gb,morphnormal_vertex:Vb,morphtarget_pars_vertex:Wb,morphtarget_vertex:Xb,normal_fragment_begin:jb,normal_fragment_maps:Yb,normal_pars_fragment:qb,normal_pars_vertex:$b,normal_vertex:Kb,normalmap_pars_fragment:Zb,clearcoat_normal_fragment_begin:Qb,clearcoat_normal_fragment_maps:Jb,clearcoat_pars_fragment:eP,iridescence_pars_fragment:tP,opaque_fragment:nP,packing:iP,premultiplied_alpha_fragment:rP,project_vertex:sP,dithering_fragment:oP,dithering_pars_fragment:aP,roughnessmap_fragment:lP,roughnessmap_pars_fragment:uP,shadowmap_pars_fragment:cP,shadowmap_pars_vertex:fP,shadowmap_vertex:dP,shadowmask_pars_fragment:hP,skinbase_vertex:pP,skinning_pars_vertex:mP,skinning_vertex:gP,skinnormal_vertex:_P,specularmap_fragment:vP,specularmap_pars_fragment:xP,tonemapping_fragment:yP,tonemapping_pars_fragment:SP,transmission_fragment:MP,transmission_pars_fragment:EP,uv_pars_fragment:TP,uv_pars_vertex:wP,uv_vertex:AP,worldpos_vertex:CP,background_vert:RP,background_frag:bP,backgroundCube_vert:PP,backgroundCube_frag:LP,cube_vert:DP,cube_frag:NP,depth_vert:UP,depth_frag:IP,distanceRGBA_vert:OP,distanceRGBA_frag:FP,equirect_vert:kP,equirect_frag:zP,linedashed_vert:BP,linedashed_frag:HP,meshbasic_vert:GP,meshbasic_frag:VP,meshlambert_vert:WP,meshlambert_frag:XP,meshmatcap_vert:jP,meshmatcap_frag:YP,meshnormal_vert:qP,meshnormal_frag:$P,meshphong_vert:KP,meshphong_frag:ZP,meshphysical_vert:QP,meshphysical_frag:JP,meshtoon_vert:e2,meshtoon_frag:t2,points_vert:n2,points_frag:i2,shadow_vert:r2,shadow_frag:s2,sprite_vert:o2,sprite_frag:a2},me={common:{diffuse:{value:new mt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Je},alphaMap:{value:null},alphaMapTransform:{value:new Je},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Je}},envmap:{envMap:{value:null},envMapRotation:{value:new Je},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Je}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Je}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Je},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Je},normalScale:{value:new ft(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Je},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Je}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Je}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Je}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new mt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new mt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Je},alphaTest:{value:0},uvTransform:{value:new Je}},sprite:{diffuse:{value:new mt(16777215)},opacity:{value:1},center:{value:new ft(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Je},alphaMap:{value:null},alphaMapTransform:{value:new Je},alphaTest:{value:0}}},lr={basic:{uniforms:In([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.fog]),vertexShader:Qe.meshbasic_vert,fragmentShader:Qe.meshbasic_frag},lambert:{uniforms:In([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.fog,me.lights,{emissive:{value:new mt(0)}}]),vertexShader:Qe.meshlambert_vert,fragmentShader:Qe.meshlambert_frag},phong:{uniforms:In([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.fog,me.lights,{emissive:{value:new mt(0)},specular:{value:new mt(1118481)},shininess:{value:30}}]),vertexShader:Qe.meshphong_vert,fragmentShader:Qe.meshphong_frag},standard:{uniforms:In([me.common,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.roughnessmap,me.metalnessmap,me.fog,me.lights,{emissive:{value:new mt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Qe.meshphysical_vert,fragmentShader:Qe.meshphysical_frag},toon:{uniforms:In([me.common,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.gradientmap,me.fog,me.lights,{emissive:{value:new mt(0)}}]),vertexShader:Qe.meshtoon_vert,fragmentShader:Qe.meshtoon_frag},matcap:{uniforms:In([me.common,me.bumpmap,me.normalmap,me.displacementmap,me.fog,{matcap:{value:null}}]),vertexShader:Qe.meshmatcap_vert,fragmentShader:Qe.meshmatcap_frag},points:{uniforms:In([me.points,me.fog]),vertexShader:Qe.points_vert,fragmentShader:Qe.points_frag},dashed:{uniforms:In([me.common,me.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Qe.linedashed_vert,fragmentShader:Qe.linedashed_frag},depth:{uniforms:In([me.common,me.displacementmap]),vertexShader:Qe.depth_vert,fragmentShader:Qe.depth_frag},normal:{uniforms:In([me.common,me.bumpmap,me.normalmap,me.displacementmap,{opacity:{value:1}}]),vertexShader:Qe.meshnormal_vert,fragmentShader:Qe.meshnormal_frag},sprite:{uniforms:In([me.sprite,me.fog]),vertexShader:Qe.sprite_vert,fragmentShader:Qe.sprite_frag},background:{uniforms:{uvTransform:{value:new Je},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Qe.background_vert,fragmentShader:Qe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Je}},vertexShader:Qe.backgroundCube_vert,fragmentShader:Qe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Qe.cube_vert,fragmentShader:Qe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Qe.equirect_vert,fragmentShader:Qe.equirect_frag},distanceRGBA:{uniforms:In([me.common,me.displacementmap,{referencePosition:{value:new $},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Qe.distanceRGBA_vert,fragmentShader:Qe.distanceRGBA_frag},shadow:{uniforms:In([me.lights,me.fog,{color:{value:new mt(0)},opacity:{value:1}}]),vertexShader:Qe.shadow_vert,fragmentShader:Qe.shadow_frag}};lr.physical={uniforms:In([lr.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Je},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Je},clearcoatNormalScale:{value:new ft(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Je},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Je},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Je},sheen:{value:0},sheenColor:{value:new mt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Je},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Je},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Je},transmissionSamplerSize:{value:new ft},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Je},attenuationDistance:{value:0},attenuationColor:{value:new mt(0)},specularColor:{value:new mt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Je},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Je},anisotropyVector:{value:new ft},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Je}}]),vertexShader:Qe.meshphysical_vert,fragmentShader:Qe.meshphysical_frag};const Uc={r:0,b:0,g:0},Js=new jr,l2=new Zt;function u2(n,e,t,i,r,s,o){const a=new mt(0);let l=s===!0?0:1,u,c,f=null,d=0,p=null;function v(m,h){let x=!1,_=h.isScene===!0?h.background:null;_&&_.isTexture&&(_=(h.backgroundBlurriness>0?t:e).get(_)),_===null?g(a,l):_&&_.isColor&&(g(_,1),x=!0);const y=n.xr.getEnvironmentBlendMode();y==="additive"?i.buffers.color.setClear(0,0,0,1,o):y==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||x)&&n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil),_&&(_.isCubeTexture||_.mapping===Rd)?(c===void 0&&(c=new kr(new Ku(1,1,1),new ks({name:"BackgroundCubeMaterial",uniforms:tl(lr.backgroundCube.uniforms),vertexShader:lr.backgroundCube.vertexShader,fragmentShader:lr.backgroundCube.fragmentShader,side:ni,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(w,T,M){this.matrixWorld.copyPosition(M.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(c)),Js.copy(h.backgroundRotation),Js.x*=-1,Js.y*=-1,Js.z*=-1,_.isCubeTexture&&_.isRenderTargetTexture===!1&&(Js.y*=-1,Js.z*=-1),c.material.uniforms.envMap.value=_,c.material.uniforms.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,c.material.uniforms.backgroundBlurriness.value=h.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=h.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(l2.makeRotationFromEuler(Js)),c.material.toneMapped=vt.getTransfer(_.colorSpace)!==Ct,(f!==_||d!==_.version||p!==n.toneMapping)&&(c.material.needsUpdate=!0,f=_,d=_.version,p=n.toneMapping),c.layers.enableAll(),m.unshift(c,c.geometry,c.material,0,0,null)):_&&_.isTexture&&(u===void 0&&(u=new kr(new Ld(2,2),new ks({name:"BackgroundMaterial",uniforms:tl(lr.background.uniforms),vertexShader:lr.background.vertexShader,fragmentShader:lr.background.fragmentShader,side:Fs,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),Object.defineProperty(u.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(u)),u.material.uniforms.t2D.value=_,u.material.uniforms.backgroundIntensity.value=h.backgroundIntensity,u.material.toneMapped=vt.getTransfer(_.colorSpace)!==Ct,_.matrixAutoUpdate===!0&&_.updateMatrix(),u.material.uniforms.uvTransform.value.copy(_.matrix),(f!==_||d!==_.version||p!==n.toneMapping)&&(u.material.needsUpdate=!0,f=_,d=_.version,p=n.toneMapping),u.layers.enableAll(),m.unshift(u,u.geometry,u.material,0,0,null))}function g(m,h){m.getRGB(Uc,N1(n)),i.buffers.color.setClear(Uc.r,Uc.g,Uc.b,h,o)}return{getClearColor:function(){return a},setClearColor:function(m,h=1){a.set(m),l=h,g(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(m){l=m,g(a,l)},render:v}}function c2(n,e,t,i){const r=n.getParameter(n.MAX_VERTEX_ATTRIBS),s=i.isWebGL2?null:e.get("OES_vertex_array_object"),o=i.isWebGL2||s!==null,a={},l=m(null);let u=l,c=!1;function f(L,Y,B,X,D){let F=!1;if(o){const C=g(X,B,Y);u!==C&&(u=C,p(u.object)),F=h(L,X,B,D),F&&x(L,X,B,D)}else{const C=Y.wireframe===!0;(u.geometry!==X.id||u.program!==B.id||u.wireframe!==C)&&(u.geometry=X.id,u.program=B.id,u.wireframe=C,F=!0)}D!==null&&t.update(D,n.ELEMENT_ARRAY_BUFFER),(F||c)&&(c=!1,P(L,Y,B,X),D!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(D).buffer))}function d(){return i.isWebGL2?n.createVertexArray():s.createVertexArrayOES()}function p(L){return i.isWebGL2?n.bindVertexArray(L):s.bindVertexArrayOES(L)}function v(L){return i.isWebGL2?n.deleteVertexArray(L):s.deleteVertexArrayOES(L)}function g(L,Y,B){const X=B.wireframe===!0;let D=a[L.id];D===void 0&&(D={},a[L.id]=D);let F=D[Y.id];F===void 0&&(F={},D[Y.id]=F);let C=F[X];return C===void 0&&(C=m(d()),F[X]=C),C}function m(L){const Y=[],B=[],X=[];for(let D=0;D<r;D++)Y[D]=0,B[D]=0,X[D]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:Y,enabledAttributes:B,attributeDivisors:X,object:L,attributes:{},index:null}}function h(L,Y,B,X){const D=u.attributes,F=Y.attributes;let C=0;const Q=B.getAttributes();for(const se in Q)if(Q[se].location>=0){const V=D[se];let ee=F[se];if(ee===void 0&&(se==="instanceMatrix"&&L.instanceMatrix&&(ee=L.instanceMatrix),se==="instanceColor"&&L.instanceColor&&(ee=L.instanceColor)),V===void 0||V.attribute!==ee||ee&&V.data!==ee.data)return!0;C++}return u.attributesNum!==C||u.index!==X}function x(L,Y,B,X){const D={},F=Y.attributes;let C=0;const Q=B.getAttributes();for(const se in Q)if(Q[se].location>=0){let V=F[se];V===void 0&&(se==="instanceMatrix"&&L.instanceMatrix&&(V=L.instanceMatrix),se==="instanceColor"&&L.instanceColor&&(V=L.instanceColor));const ee={};ee.attribute=V,V&&V.data&&(ee.data=V.data),D[se]=ee,C++}u.attributes=D,u.attributesNum=C,u.index=X}function _(){const L=u.newAttributes;for(let Y=0,B=L.length;Y<B;Y++)L[Y]=0}function y(L){w(L,0)}function w(L,Y){const B=u.newAttributes,X=u.enabledAttributes,D=u.attributeDivisors;B[L]=1,X[L]===0&&(n.enableVertexAttribArray(L),X[L]=1),D[L]!==Y&&((i.isWebGL2?n:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](L,Y),D[L]=Y)}function T(){const L=u.newAttributes,Y=u.enabledAttributes;for(let B=0,X=Y.length;B<X;B++)Y[B]!==L[B]&&(n.disableVertexAttribArray(B),Y[B]=0)}function M(L,Y,B,X,D,F,C){C===!0?n.vertexAttribIPointer(L,Y,B,D,F):n.vertexAttribPointer(L,Y,B,X,D,F)}function P(L,Y,B,X){if(i.isWebGL2===!1&&(L.isInstancedMesh||X.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;_();const D=X.attributes,F=B.getAttributes(),C=Y.defaultAttributeValues;for(const Q in F){const se=F[Q];if(se.location>=0){let Oe=D[Q];if(Oe===void 0&&(Q==="instanceMatrix"&&L.instanceMatrix&&(Oe=L.instanceMatrix),Q==="instanceColor"&&L.instanceColor&&(Oe=L.instanceColor)),Oe!==void 0){const V=Oe.normalized,ee=Oe.itemSize,ce=t.get(Oe);if(ce===void 0)continue;const xe=ce.buffer,ye=ce.type,_e=ce.bytesPerElement,et=i.isWebGL2===!0&&(ye===n.INT||ye===n.UNSIGNED_INT||Oe.gpuType===m1);if(Oe.isInterleavedBufferAttribute){const Le=Oe.data,k=Le.stride,Ve=Oe.offset;if(Le.isInstancedInterleavedBuffer){for(let ve=0;ve<se.locationSize;ve++)w(se.location+ve,Le.meshPerAttribute);L.isInstancedMesh!==!0&&X._maxInstanceCount===void 0&&(X._maxInstanceCount=Le.meshPerAttribute*Le.count)}else for(let ve=0;ve<se.locationSize;ve++)y(se.location+ve);n.bindBuffer(n.ARRAY_BUFFER,xe);for(let ve=0;ve<se.locationSize;ve++)M(se.location+ve,ee/se.locationSize,ye,V,k*_e,(Ve+ee/se.locationSize*ve)*_e,et)}else{if(Oe.isInstancedBufferAttribute){for(let Le=0;Le<se.locationSize;Le++)w(se.location+Le,Oe.meshPerAttribute);L.isInstancedMesh!==!0&&X._maxInstanceCount===void 0&&(X._maxInstanceCount=Oe.meshPerAttribute*Oe.count)}else for(let Le=0;Le<se.locationSize;Le++)y(se.location+Le);n.bindBuffer(n.ARRAY_BUFFER,xe);for(let Le=0;Le<se.locationSize;Le++)M(se.location+Le,ee/se.locationSize,ye,V,ee*_e,ee/se.locationSize*Le*_e,et)}}else if(C!==void 0){const V=C[Q];if(V!==void 0)switch(V.length){case 2:n.vertexAttrib2fv(se.location,V);break;case 3:n.vertexAttrib3fv(se.location,V);break;case 4:n.vertexAttrib4fv(se.location,V);break;default:n.vertexAttrib1fv(se.location,V)}}}}T()}function N(){z();for(const L in a){const Y=a[L];for(const B in Y){const X=Y[B];for(const D in X)v(X[D].object),delete X[D];delete Y[B]}delete a[L]}}function S(L){if(a[L.id]===void 0)return;const Y=a[L.id];for(const B in Y){const X=Y[B];for(const D in X)v(X[D].object),delete X[D];delete Y[B]}delete a[L.id]}function R(L){for(const Y in a){const B=a[Y];if(B[L.id]===void 0)continue;const X=B[L.id];for(const D in X)v(X[D].object),delete X[D];delete B[L.id]}}function z(){K(),c=!0,u!==l&&(u=l,p(u.object))}function K(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:f,reset:z,resetDefaultState:K,dispose:N,releaseStatesOfGeometry:S,releaseStatesOfProgram:R,initAttributes:_,enableAttribute:y,disableUnusedAttributes:T}}function f2(n,e,t,i){const r=i.isWebGL2;let s;function o(c){s=c}function a(c,f){n.drawArrays(s,c,f),t.update(f,s,1)}function l(c,f,d){if(d===0)return;let p,v;if(r)p=n,v="drawArraysInstanced";else if(p=e.get("ANGLE_instanced_arrays"),v="drawArraysInstancedANGLE",p===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[v](s,c,f,d),t.update(f,s,d)}function u(c,f,d){if(d===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let v=0;v<d;v++)this.render(c[v],f[v]);else{p.multiDrawArraysWEBGL(s,c,0,f,0,d);let v=0;for(let g=0;g<d;g++)v+=f[g];t.update(v,s,1)}}this.setMode=o,this.render=a,this.renderInstances=l,this.renderMultiDraw=u}function d2(n,e,t){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const M=e.get("EXT_texture_filter_anisotropic");i=n.getParameter(M.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function s(M){if(M==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";M="mediump"}return M==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&n.constructor.name==="WebGL2RenderingContext";let a=t.precision!==void 0?t.precision:"highp";const l=s(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);const u=o||e.has("WEBGL_draw_buffers"),c=t.logarithmicDepthBuffer===!0,f=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),d=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),p=n.getParameter(n.MAX_TEXTURE_SIZE),v=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),g=n.getParameter(n.MAX_VERTEX_ATTRIBS),m=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),h=n.getParameter(n.MAX_VARYING_VECTORS),x=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),_=d>0,y=o||e.has("OES_texture_float"),w=_&&y,T=o?n.getParameter(n.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:u,getMaxAnisotropy:r,getMaxPrecision:s,precision:a,logarithmicDepthBuffer:c,maxTextures:f,maxVertexTextures:d,maxTextureSize:p,maxCubemapSize:v,maxAttributes:g,maxVertexUniforms:m,maxVaryings:h,maxFragmentUniforms:x,vertexTextures:_,floatFragmentTextures:y,floatVertexTextures:w,maxSamples:T}}function h2(n){const e=this;let t=null,i=0,r=!1,s=!1;const o=new so,a=new Je,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,d){const p=f.length!==0||d||i!==0||r;return r=d,i=f.length,p},this.beginShadows=function(){s=!0,c(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,d){t=c(f,d,0)},this.setState=function(f,d,p){const v=f.clippingPlanes,g=f.clipIntersection,m=f.clipShadows,h=n.get(f);if(!r||v===null||v.length===0||s&&!m)s?c(null):u();else{const x=s?0:i,_=x*4;let y=h.clippingState||null;l.value=y,y=c(v,d,_,p);for(let w=0;w!==_;++w)y[w]=t[w];h.clippingState=y,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=x}};function u(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function c(f,d,p,v){const g=f!==null?f.length:0;let m=null;if(g!==0){if(m=l.value,v!==!0||m===null){const h=p+g*4,x=d.matrixWorldInverse;a.getNormalMatrix(x),(m===null||m.length<h)&&(m=new Float32Array(h));for(let _=0,y=p;_!==g;++_,y+=4)o.copy(f[_]).applyMatrix4(x,a),o.normal.toArray(m,y),m[y+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=g,e.numIntersection=0,m}}function p2(n){let e=new WeakMap;function t(o,a){return a===lm?o.mapping=Qa:a===um&&(o.mapping=Ja),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===lm||a===um)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const u=new TR(l.height);return u.fromEquirectangularTexture(n,o),e.set(o,u),o.addEventListener("dispose",r),t(u.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class m2 extends U1{constructor(e=-1,t=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const u=(this.right-this.left)/this.view.fullWidth/this.zoom,c=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=u*this.view.offsetX,o=s+u*this.view.width,a-=c*this.view.offsetY,l=a-c*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Aa=4,Lv=[.125,.215,.35,.446,.526,.582],fo=20,Hh=new m2,Dv=new mt;let Gh=null,Vh=0,Wh=0;const oo=(1+Math.sqrt(5))/2,la=1/oo,Nv=[new $(1,1,1),new $(-1,1,1),new $(1,1,-1),new $(-1,1,-1),new $(0,oo,la),new $(0,oo,-la),new $(la,0,oo),new $(-la,0,oo),new $(oo,la,0),new $(-oo,la,0)];class Uv{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,r=100){Gh=this._renderer.getRenderTarget(),Vh=this._renderer.getActiveCubeFace(),Wh=this._renderer.getActiveMipmapLevel(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Fv(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ov(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Gh,Vh,Wh),e.scissorTest=!1,Ic(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Qa||e.mapping===Ja?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Gh=this._renderer.getRenderTarget(),Vh=this._renderer.getActiveCubeFace(),Wh=this._renderer.getActiveMipmapLevel();const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:$n,minFilter:$n,generateMipmaps:!1,type:bu,format:Ji,colorSpace:Xs,depthBuffer:!1},r=Iv(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Iv(e,t,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=g2(s)),this._blurMaterial=_2(s,e,t)}return r}_compileMaterial(e){const t=new kr(this._lodPlanes[0],e);this._renderer.compile(t,Hh)}_sceneToCubeUV(e,t,i,r){const a=new Di(90,1,t,i),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],c=this._renderer,f=c.autoClear,d=c.toneMapping;c.getClearColor(Dv),c.toneMapping=bs,c.autoClear=!1;const p=new P1({name:"PMREM.Background",side:ni,depthWrite:!1,depthTest:!1}),v=new kr(new Ku,p);let g=!1;const m=e.background;m?m.isColor&&(p.color.copy(m),e.background=null,g=!0):(p.color.copy(Dv),g=!0);for(let h=0;h<6;h++){const x=h%3;x===0?(a.up.set(0,l[h],0),a.lookAt(u[h],0,0)):x===1?(a.up.set(0,0,l[h]),a.lookAt(0,u[h],0)):(a.up.set(0,l[h],0),a.lookAt(0,0,u[h]));const _=this._cubeSize;Ic(r,x*_,h>2?_:0,_,_),c.setRenderTarget(r),g&&c.render(v,a),c.render(e,a)}v.geometry.dispose(),v.material.dispose(),c.toneMapping=d,c.autoClear=f,e.background=m}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===Qa||e.mapping===Ja;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Fv()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Ov());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new kr(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;Ic(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(o,Hh)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=Nv[(r-1)%Nv.length];this._blur(e,r-1,r,s,o)}t.autoClear=i}_blur(e,t,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,o,a){const l=this._renderer,u=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const c=3,f=new kr(this._lodPlanes[r],u),d=u.uniforms,p=this._sizeLods[i]-1,v=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*fo-1),g=s/v,m=isFinite(s)?1+Math.floor(c*g):fo;m>fo&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${fo}`);const h=[];let x=0;for(let M=0;M<fo;++M){const P=M/g,N=Math.exp(-P*P/2);h.push(N),M===0?x+=N:M<m&&(x+=2*N)}for(let M=0;M<h.length;M++)h[M]=h[M]/x;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=h,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:_}=this;d.dTheta.value=v,d.mipInt.value=_-i;const y=this._sizeLods[r],w=3*y*(r>_-Aa?r-_+Aa:0),T=4*(this._cubeSize-y);Ic(t,w,T,3*y,2*y),l.setRenderTarget(t),l.render(f,Hh)}}function g2(n){const e=[],t=[],i=[];let r=n;const s=n-Aa+1+Lv.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);t.push(a);let l=1/a;o>n-Aa?l=Lv[o-n+Aa-1]:o===0&&(l=0),i.push(l);const u=1/(a-2),c=-u,f=1+u,d=[c,c,f,c,f,f,c,c,f,f,c,f],p=6,v=6,g=3,m=2,h=1,x=new Float32Array(g*v*p),_=new Float32Array(m*v*p),y=new Float32Array(h*v*p);for(let T=0;T<p;T++){const M=T%3*2/3-1,P=T>2?0:-1,N=[M,P,0,M+2/3,P,0,M+2/3,P+1,0,M,P,0,M+2/3,P+1,0,M,P+1,0];x.set(N,g*v*T),_.set(d,m*v*T);const S=[T,T,T,T,T,T];y.set(S,h*v*T)}const w=new xr;w.setAttribute("position",new gr(x,g)),w.setAttribute("uv",new gr(_,m)),w.setAttribute("faceIndex",new gr(y,h)),e.push(w),r>Aa&&r--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function Iv(n,e,t){const i=new Io(n,e,t);return i.texture.mapping=Rd,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Ic(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function _2(n,e,t){const i=new Float32Array(fo),r=new $(0,1,0);return new ks({name:"SphericalGaussianBlur",defines:{n:fo,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Bg(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Rs,depthTest:!1,depthWrite:!1})}function Ov(){return new ks({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Bg(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Rs,depthTest:!1,depthWrite:!1})}function Fv(){return new ks({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Bg(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Rs,depthTest:!1,depthWrite:!1})}function Bg(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function v2(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){const l=a.mapping,u=l===lm||l===um,c=l===Qa||l===Ja;if(u||c)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let f=e.get(a);return t===null&&(t=new Uv(n)),f=u?t.fromEquirectangular(a,f):t.fromCubemap(a,f),e.set(a,f),f.texture}else{if(e.has(a))return e.get(a).texture;{const f=a.image;if(u&&f&&f.height>0||c&&f&&r(f)){t===null&&(t=new Uv(n));const d=u?t.fromEquirectangular(a):t.fromCubemap(a);return e.set(a,d),a.addEventListener("dispose",s),d.texture}else return null}}}return a}function r(a){let l=0;const u=6;for(let c=0;c<u;c++)a[c]!==void 0&&l++;return l===u}function s(a){const l=a.target;l.removeEventListener("dispose",s);const u=e.get(l);u!==void 0&&(e.delete(l),u.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function x2(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(i){i.isWebGL2?(t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance")):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(i){const r=t(i);return r===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function y2(n,e,t,i){const r={},s=new WeakMap;function o(f){const d=f.target;d.index!==null&&e.remove(d.index);for(const v in d.attributes)e.remove(d.attributes[v]);for(const v in d.morphAttributes){const g=d.morphAttributes[v];for(let m=0,h=g.length;m<h;m++)e.remove(g[m])}d.removeEventListener("dispose",o),delete r[d.id];const p=s.get(d);p&&(e.remove(p),s.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function a(f,d){return r[d.id]===!0||(d.addEventListener("dispose",o),r[d.id]=!0,t.memory.geometries++),d}function l(f){const d=f.attributes;for(const v in d)e.update(d[v],n.ARRAY_BUFFER);const p=f.morphAttributes;for(const v in p){const g=p[v];for(let m=0,h=g.length;m<h;m++)e.update(g[m],n.ARRAY_BUFFER)}}function u(f){const d=[],p=f.index,v=f.attributes.position;let g=0;if(p!==null){const x=p.array;g=p.version;for(let _=0,y=x.length;_<y;_+=3){const w=x[_+0],T=x[_+1],M=x[_+2];d.push(w,T,T,M,M,w)}}else if(v!==void 0){const x=v.array;g=v.version;for(let _=0,y=x.length/3-1;_<y;_+=3){const w=_+0,T=_+1,M=_+2;d.push(w,T,T,M,M,w)}}else return;const m=new(E1(d)?D1:L1)(d,1);m.version=g;const h=s.get(f);h&&e.remove(h),s.set(f,m)}function c(f){const d=s.get(f);if(d){const p=f.index;p!==null&&d.version<p.version&&u(f)}else u(f);return s.get(f)}return{get:a,update:l,getWireframeAttribute:c}}function S2(n,e,t,i){const r=i.isWebGL2;let s;function o(p){s=p}let a,l;function u(p){a=p.type,l=p.bytesPerElement}function c(p,v){n.drawElements(s,v,a,p*l),t.update(v,s,1)}function f(p,v,g){if(g===0)return;let m,h;if(r)m=n,h="drawElementsInstanced";else if(m=e.get("ANGLE_instanced_arrays"),h="drawElementsInstancedANGLE",m===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[h](s,v,a,p*l,g),t.update(v,s,g)}function d(p,v,g){if(g===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let h=0;h<g;h++)this.render(p[h]/l,v[h]);else{m.multiDrawElementsWEBGL(s,v,0,a,p,0,g);let h=0;for(let x=0;x<g;x++)h+=v[x];t.update(h,s,1)}}this.setMode=o,this.setIndex=u,this.render=c,this.renderInstances=f,this.renderMultiDraw=d}function M2(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(s/3);break;case n.LINES:t.lines+=a*(s/2);break;case n.LINE_STRIP:t.lines+=a*(s-1);break;case n.LINE_LOOP:t.lines+=a*s;break;case n.POINTS:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function E2(n,e){return n[0]-e[0]}function T2(n,e){return Math.abs(e[1])-Math.abs(n[1])}function w2(n,e,t){const i={},r=new Float32Array(8),s=new WeakMap,o=new mn,a=[];for(let u=0;u<8;u++)a[u]=[u,0];function l(u,c,f){const d=u.morphTargetInfluences;if(e.isWebGL2===!0){const v=c.morphAttributes.position||c.morphAttributes.normal||c.morphAttributes.color,g=v!==void 0?v.length:0;let m=s.get(c);if(m===void 0||m.count!==g){let K=function(){R.dispose(),s.delete(c),c.removeEventListener("dispose",K)};var p=K;m!==void 0&&m.texture.dispose();const h=c.morphAttributes.position!==void 0,x=c.morphAttributes.normal!==void 0,_=c.morphAttributes.color!==void 0,y=c.morphAttributes.position||[],w=c.morphAttributes.normal||[],T=c.morphAttributes.color||[];let M=0;h===!0&&(M=1),x===!0&&(M=2),_===!0&&(M=3);let P=c.attributes.position.count*M,N=1;P>e.maxTextureSize&&(N=Math.ceil(P/e.maxTextureSize),P=e.maxTextureSize);const S=new Float32Array(P*N*4*g),R=new A1(S,P,N,g);R.type=Nr,R.needsUpdate=!0;const z=M*4;for(let L=0;L<g;L++){const Y=y[L],B=w[L],X=T[L],D=P*N*4*L;for(let F=0;F<Y.count;F++){const C=F*z;h===!0&&(o.fromBufferAttribute(Y,F),S[D+C+0]=o.x,S[D+C+1]=o.y,S[D+C+2]=o.z,S[D+C+3]=0),x===!0&&(o.fromBufferAttribute(B,F),S[D+C+4]=o.x,S[D+C+5]=o.y,S[D+C+6]=o.z,S[D+C+7]=0),_===!0&&(o.fromBufferAttribute(X,F),S[D+C+8]=o.x,S[D+C+9]=o.y,S[D+C+10]=o.z,S[D+C+11]=X.itemSize===4?o.w:1)}}m={count:g,texture:R,size:new ft(P,N)},s.set(c,m),c.addEventListener("dispose",K)}if(u.isInstancedMesh===!0&&u.morphTexture!==null)f.getUniforms().setValue(n,"morphTexture",u.morphTexture,t);else{let h=0;for(let _=0;_<d.length;_++)h+=d[_];const x=c.morphTargetsRelative?1:1-h;f.getUniforms().setValue(n,"morphTargetBaseInfluence",x),f.getUniforms().setValue(n,"morphTargetInfluences",d)}f.getUniforms().setValue(n,"morphTargetsTexture",m.texture,t),f.getUniforms().setValue(n,"morphTargetsTextureSize",m.size)}else{const v=d===void 0?0:d.length;let g=i[c.id];if(g===void 0||g.length!==v){g=[];for(let y=0;y<v;y++)g[y]=[y,0];i[c.id]=g}for(let y=0;y<v;y++){const w=g[y];w[0]=y,w[1]=d[y]}g.sort(T2);for(let y=0;y<8;y++)y<v&&g[y][1]?(a[y][0]=g[y][0],a[y][1]=g[y][1]):(a[y][0]=Number.MAX_SAFE_INTEGER,a[y][1]=0);a.sort(E2);const m=c.morphAttributes.position,h=c.morphAttributes.normal;let x=0;for(let y=0;y<8;y++){const w=a[y],T=w[0],M=w[1];T!==Number.MAX_SAFE_INTEGER&&M?(m&&c.getAttribute("morphTarget"+y)!==m[T]&&c.setAttribute("morphTarget"+y,m[T]),h&&c.getAttribute("morphNormal"+y)!==h[T]&&c.setAttribute("morphNormal"+y,h[T]),r[y]=M,x+=M):(m&&c.hasAttribute("morphTarget"+y)===!0&&c.deleteAttribute("morphTarget"+y),h&&c.hasAttribute("morphNormal"+y)===!0&&c.deleteAttribute("morphNormal"+y),r[y]=0)}const _=c.morphTargetsRelative?1:1-x;f.getUniforms().setValue(n,"morphTargetBaseInfluence",_),f.getUniforms().setValue(n,"morphTargetInfluences",r)}}return{update:l}}function A2(n,e,t,i){let r=new WeakMap;function s(l){const u=i.render.frame,c=l.geometry,f=e.get(l,c);if(r.get(f)!==u&&(e.update(f),r.set(f,u)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==u&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),r.set(l,u))),l.isSkinnedMesh){const d=l.skeleton;r.get(d)!==u&&(d.update(),r.set(d,u))}return f}function o(){r=new WeakMap}function a(l){const u=l.target;u.removeEventListener("dispose",a),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return{update:s,dispose:o}}class k1 extends ii{constructor(e,t,i,r,s,o,a,l,u,c){if(c=c!==void 0?c:Mo,c!==Mo&&c!==el)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&c===Mo&&(i=hs),i===void 0&&c===el&&(i=So),super(null,r,s,o,a,l,c,i,u),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:Bn,this.minFilter=l!==void 0?l:Bn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const z1=new ii,B1=new k1(1,1);B1.compareFunction=M1;const H1=new A1,G1=new aR,V1=new I1,kv=[],zv=[],Bv=new Float32Array(16),Hv=new Float32Array(9),Gv=new Float32Array(4);function hl(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let s=kv[r];if(s===void 0&&(s=new Float32Array(r),kv[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(s,a)}return s}function sn(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function on(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Dd(n,e){let t=zv[e];t===void 0&&(t=new Int32Array(e),zv[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function C2(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function R2(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(sn(t,e))return;n.uniform2fv(this.addr,e),on(t,e)}}function b2(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(sn(t,e))return;n.uniform3fv(this.addr,e),on(t,e)}}function P2(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(sn(t,e))return;n.uniform4fv(this.addr,e),on(t,e)}}function L2(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(sn(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),on(t,e)}else{if(sn(t,i))return;Gv.set(i),n.uniformMatrix2fv(this.addr,!1,Gv),on(t,i)}}function D2(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(sn(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),on(t,e)}else{if(sn(t,i))return;Hv.set(i),n.uniformMatrix3fv(this.addr,!1,Hv),on(t,i)}}function N2(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(sn(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),on(t,e)}else{if(sn(t,i))return;Bv.set(i),n.uniformMatrix4fv(this.addr,!1,Bv),on(t,i)}}function U2(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function I2(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(sn(t,e))return;n.uniform2iv(this.addr,e),on(t,e)}}function O2(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(sn(t,e))return;n.uniform3iv(this.addr,e),on(t,e)}}function F2(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(sn(t,e))return;n.uniform4iv(this.addr,e),on(t,e)}}function k2(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function z2(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(sn(t,e))return;n.uniform2uiv(this.addr,e),on(t,e)}}function B2(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(sn(t,e))return;n.uniform3uiv(this.addr,e),on(t,e)}}function H2(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(sn(t,e))return;n.uniform4uiv(this.addr,e),on(t,e)}}function G2(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);const s=this.type===n.SAMPLER_2D_SHADOW?B1:z1;t.setTexture2D(e||s,r)}function V2(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||G1,r)}function W2(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||V1,r)}function X2(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||H1,r)}function j2(n){switch(n){case 5126:return C2;case 35664:return R2;case 35665:return b2;case 35666:return P2;case 35674:return L2;case 35675:return D2;case 35676:return N2;case 5124:case 35670:return U2;case 35667:case 35671:return I2;case 35668:case 35672:return O2;case 35669:case 35673:return F2;case 5125:return k2;case 36294:return z2;case 36295:return B2;case 36296:return H2;case 35678:case 36198:case 36298:case 36306:case 35682:return G2;case 35679:case 36299:case 36307:return V2;case 35680:case 36300:case 36308:case 36293:return W2;case 36289:case 36303:case 36311:case 36292:return X2}}function Y2(n,e){n.uniform1fv(this.addr,e)}function q2(n,e){const t=hl(e,this.size,2);n.uniform2fv(this.addr,t)}function $2(n,e){const t=hl(e,this.size,3);n.uniform3fv(this.addr,t)}function K2(n,e){const t=hl(e,this.size,4);n.uniform4fv(this.addr,t)}function Z2(n,e){const t=hl(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function Q2(n,e){const t=hl(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function J2(n,e){const t=hl(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function eL(n,e){n.uniform1iv(this.addr,e)}function tL(n,e){n.uniform2iv(this.addr,e)}function nL(n,e){n.uniform3iv(this.addr,e)}function iL(n,e){n.uniform4iv(this.addr,e)}function rL(n,e){n.uniform1uiv(this.addr,e)}function sL(n,e){n.uniform2uiv(this.addr,e)}function oL(n,e){n.uniform3uiv(this.addr,e)}function aL(n,e){n.uniform4uiv(this.addr,e)}function lL(n,e,t){const i=this.cache,r=e.length,s=Dd(t,r);sn(i,s)||(n.uniform1iv(this.addr,s),on(i,s));for(let o=0;o!==r;++o)t.setTexture2D(e[o]||z1,s[o])}function uL(n,e,t){const i=this.cache,r=e.length,s=Dd(t,r);sn(i,s)||(n.uniform1iv(this.addr,s),on(i,s));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||G1,s[o])}function cL(n,e,t){const i=this.cache,r=e.length,s=Dd(t,r);sn(i,s)||(n.uniform1iv(this.addr,s),on(i,s));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||V1,s[o])}function fL(n,e,t){const i=this.cache,r=e.length,s=Dd(t,r);sn(i,s)||(n.uniform1iv(this.addr,s),on(i,s));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||H1,s[o])}function dL(n){switch(n){case 5126:return Y2;case 35664:return q2;case 35665:return $2;case 35666:return K2;case 35674:return Z2;case 35675:return Q2;case 35676:return J2;case 5124:case 35670:return eL;case 35667:case 35671:return tL;case 35668:case 35672:return nL;case 35669:case 35673:return iL;case 5125:return rL;case 36294:return sL;case 36295:return oL;case 36296:return aL;case 35678:case 36198:case 36298:case 36306:case 35682:return lL;case 35679:case 36299:case 36307:return uL;case 35680:case 36300:case 36308:case 36293:return cL;case 36289:case 36303:case 36311:case 36292:return fL}}class hL{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=j2(t.type)}}class pL{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=dL(t.type)}}class mL{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,t[a.id],i)}}}const Xh=/(\w+)(\])?(\[|\.)?/g;function Vv(n,e){n.seq.push(e),n.map[e.id]=e}function gL(n,e,t){const i=n.name,r=i.length;for(Xh.lastIndex=0;;){const s=Xh.exec(i),o=Xh.lastIndex;let a=s[1];const l=s[2]==="]",u=s[3];if(l&&(a=a|0),u===void 0||u==="["&&o+2===r){Vv(t,u===void 0?new hL(a,n,e):new pL(a,n,e));break}else{let f=t.map[a];f===void 0&&(f=new mL(a),Vv(t,f)),t=f}}}class cf{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(t,r),o=e.getUniformLocation(t,s.name);gL(s,o,this)}}setValue(e,t,i,r){const s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,o=t.length;s!==o;++s){const a=t[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in t&&i.push(o)}return i}}function Wv(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const _L=37297;let vL=0;function xL(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}function yL(n){const e=vt.getPrimaries(vt.workingColorSpace),t=vt.getPrimaries(n);let i;switch(e===t?i="":e===$f&&t===qf?i="LinearDisplayP3ToLinearSRGB":e===qf&&t===$f&&(i="LinearSRGBToLinearDisplayP3"),n){case Xs:case bd:return[i,"LinearTransferOETF"];case sr:case zg:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",n),[i,"LinearTransferOETF"]}}function Xv(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),r=n.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+xL(n.getShaderSource(e),o)}else return r}function SL(n,e){const t=yL(e);return`vec4 ${n}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function ML(n,e){let t;switch(e){case RC:t="Linear";break;case bC:t="Reinhard";break;case PC:t="OptimizedCineon";break;case LC:t="ACESFilmic";break;case NC:t="AgX";break;case UC:t="Neutral";break;case DC:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function EL(n){return[n.extensionDerivatives||n.envMapCubeUVHeight||n.bumpMap||n.normalMapTangentSpace||n.clearcoatNormalMap||n.flatShading||n.alphaToCoverage||n.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(n.extensionFragDepth||n.logarithmicDepthBuffer)&&n.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",n.extensionDrawBuffers&&n.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(n.extensionShaderTextureLOD||n.envMap||n.transmission)&&n.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Ca).join(`
`)}function TL(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ca).join(`
`)}function wL(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function AL(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(e,r),o=s.name;let a=1;s.type===n.FLOAT_MAT2&&(a=2),s.type===n.FLOAT_MAT3&&(a=3),s.type===n.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function Ca(n){return n!==""}function jv(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Yv(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const CL=/^[ \t]*#include +<([\w\d./]+)>/gm;function mm(n){return n.replace(CL,bL)}const RL=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function bL(n,e){let t=Qe[e];if(t===void 0){const i=RL.get(e);if(i!==void 0)t=Qe[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return mm(t)}const PL=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function qv(n){return n.replace(PL,LL)}function LL(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function $v(n){let e=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	`;return n.isWebGL2&&(e+=`precision ${n.precision} sampler3D;
		precision ${n.precision} sampler2DArray;
		precision ${n.precision} sampler2DShadow;
		precision ${n.precision} samplerCubeShadow;
		precision ${n.precision} sampler2DArrayShadow;
		precision ${n.precision} isampler2D;
		precision ${n.precision} isampler3D;
		precision ${n.precision} isamplerCube;
		precision ${n.precision} isampler2DArray;
		precision ${n.precision} usampler2D;
		precision ${n.precision} usampler3D;
		precision ${n.precision} usamplerCube;
		precision ${n.precision} usampler2DArray;
		`),n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function DL(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===d1?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===nC?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Cr&&(e="SHADOWMAP_TYPE_VSM"),e}function NL(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case Qa:case Ja:e="ENVMAP_TYPE_CUBE";break;case Rd:e="ENVMAP_TYPE_CUBE_UV";break}return e}function UL(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case Ja:e="ENVMAP_MODE_REFRACTION";break}return e}function IL(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case h1:e="ENVMAP_BLENDING_MULTIPLY";break;case AC:e="ENVMAP_BLENDING_MIX";break;case CC:e="ENVMAP_BLENDING_ADD";break}return e}function OL(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function FL(n,e,t,i){const r=n.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=DL(t),u=NL(t),c=UL(t),f=IL(t),d=OL(t),p=t.isWebGL2?"":EL(t),v=TL(t),g=wL(s),m=r.createProgram();let h,x,_=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(h=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Ca).join(`
`),h.length>0&&(h+=`
`),x=[p,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Ca).join(`
`),x.length>0&&(x+=`
`)):(h=[$v(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ca).join(`
`),x=[p,$v(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.envMap?"#define "+c:"",t.envMap?"#define "+f:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==bs?"#define TONE_MAPPING":"",t.toneMapping!==bs?Qe.tonemapping_pars_fragment:"",t.toneMapping!==bs?ML("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Qe.colorspace_pars_fragment,SL("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ca).join(`
`)),o=mm(o),o=jv(o,t),o=Yv(o,t),a=mm(a),a=jv(a,t),a=Yv(a,t),o=qv(o),a=qv(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,h=[v,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+h,x=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===fv?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===fv?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+x);const y=_+h+o,w=_+x+a,T=Wv(r,r.VERTEX_SHADER,y),M=Wv(r,r.FRAGMENT_SHADER,w);r.attachShader(m,T),r.attachShader(m,M),t.index0AttributeName!==void 0?r.bindAttribLocation(m,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(m,0,"position"),r.linkProgram(m);function P(z){if(n.debug.checkShaderErrors){const K=r.getProgramInfoLog(m).trim(),L=r.getShaderInfoLog(T).trim(),Y=r.getShaderInfoLog(M).trim();let B=!0,X=!0;if(r.getProgramParameter(m,r.LINK_STATUS)===!1)if(B=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,m,T,M);else{const D=Xv(r,T,"vertex"),F=Xv(r,M,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(m,r.VALIDATE_STATUS)+`

Material Name: `+z.name+`
Material Type: `+z.type+`

Program Info Log: `+K+`
`+D+`
`+F)}else K!==""?console.warn("THREE.WebGLProgram: Program Info Log:",K):(L===""||Y==="")&&(X=!1);X&&(z.diagnostics={runnable:B,programLog:K,vertexShader:{log:L,prefix:h},fragmentShader:{log:Y,prefix:x}})}r.deleteShader(T),r.deleteShader(M),N=new cf(r,m),S=AL(r,m)}let N;this.getUniforms=function(){return N===void 0&&P(this),N};let S;this.getAttributes=function(){return S===void 0&&P(this),S};let R=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return R===!1&&(R=r.getProgramParameter(m,_L)),R},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(m),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=vL++,this.cacheKey=e,this.usedTimes=1,this.program=m,this.vertexShader=T,this.fragmentShader=M,this}let kL=0;class zL{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new BL(e),t.set(e,i)),i}}class BL{constructor(e){this.id=kL++,this.code=e,this.usedTimes=0}}function HL(n,e,t,i,r,s,o){const a=new R1,l=new zL,u=new Set,c=[],f=r.isWebGL2,d=r.logarithmicDepthBuffer,p=r.vertexTextures;let v=r.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(S){return u.add(S),S===0?"uv":`uv${S}`}function h(S,R,z,K,L){const Y=K.fog,B=L.geometry,X=S.isMeshStandardMaterial?K.environment:null,D=(S.isMeshStandardMaterial?t:e).get(S.envMap||X),F=D&&D.mapping===Rd?D.image.height:null,C=g[S.type];S.precision!==null&&(v=r.getMaxPrecision(S.precision),v!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",v,"instead."));const Q=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,se=Q!==void 0?Q.length:0;let Oe=0;B.morphAttributes.position!==void 0&&(Oe=1),B.morphAttributes.normal!==void 0&&(Oe=2),B.morphAttributes.color!==void 0&&(Oe=3);let V,ee,ce,xe;if(C){const ct=lr[C];V=ct.vertexShader,ee=ct.fragmentShader}else V=S.vertexShader,ee=S.fragmentShader,l.update(S),ce=l.getVertexShaderID(S),xe=l.getFragmentShaderID(S);const ye=n.getRenderTarget(),_e=L.isInstancedMesh===!0,et=L.isBatchedMesh===!0,Le=!!S.map,k=!!S.matcap,Ve=!!D,ve=!!S.aoMap,ke=!!S.lightMap,be=!!S.bumpMap,G=!!S.normalMap,ze=!!S.displacementMap,We=!!S.emissiveMap,dt=!!S.metalnessMap,b=!!S.roughnessMap,E=S.anisotropy>0,Z=S.clearcoat>0,J=S.iridescence>0,te=S.sheen>0,ne=S.transmission>0,Ae=E&&!!S.anisotropyMap,Ne=Z&&!!S.clearcoatMap,ae=Z&&!!S.clearcoatNormalMap,he=Z&&!!S.clearcoatRoughnessMap,Xe=J&&!!S.iridescenceMap,ie=J&&!!S.iridescenceThicknessMap,Tt=te&&!!S.sheenColorMap,je=te&&!!S.sheenRoughnessMap,Ue=!!S.specularMap,Te=!!S.specularColorMap,Ee=!!S.specularIntensityMap,Ze=ne&&!!S.transmissionMap,pe=ne&&!!S.thicknessMap,ut=!!S.gradientMap,U=!!S.alphaMap,fe=S.alphaTest>0,j=!!S.alphaHash,le=!!S.extensions;let ge=bs;S.toneMapped&&(ye===null||ye.isXRRenderTarget===!0)&&(ge=n.toneMapping);const Ye={isWebGL2:f,shaderID:C,shaderType:S.type,shaderName:S.name,vertexShader:V,fragmentShader:ee,defines:S.defines,customVertexShaderID:ce,customFragmentShaderID:xe,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:v,batching:et,instancing:_e,instancingColor:_e&&L.instanceColor!==null,instancingMorph:_e&&L.morphTexture!==null,supportsVertexTextures:p,outputColorSpace:ye===null?n.outputColorSpace:ye.isXRRenderTarget===!0?ye.texture.colorSpace:Xs,alphaToCoverage:!!S.alphaToCoverage,map:Le,matcap:k,envMap:Ve,envMapMode:Ve&&D.mapping,envMapCubeUVHeight:F,aoMap:ve,lightMap:ke,bumpMap:be,normalMap:G,displacementMap:p&&ze,emissiveMap:We,normalMapObjectSpace:G&&S.normalMapType===jC,normalMapTangentSpace:G&&S.normalMapType===XC,metalnessMap:dt,roughnessMap:b,anisotropy:E,anisotropyMap:Ae,clearcoat:Z,clearcoatMap:Ne,clearcoatNormalMap:ae,clearcoatRoughnessMap:he,iridescence:J,iridescenceMap:Xe,iridescenceThicknessMap:ie,sheen:te,sheenColorMap:Tt,sheenRoughnessMap:je,specularMap:Ue,specularColorMap:Te,specularIntensityMap:Ee,transmission:ne,transmissionMap:Ze,thicknessMap:pe,gradientMap:ut,opaque:S.transparent===!1&&S.blending===Fa&&S.alphaToCoverage===!1,alphaMap:U,alphaTest:fe,alphaHash:j,combine:S.combine,mapUv:Le&&m(S.map.channel),aoMapUv:ve&&m(S.aoMap.channel),lightMapUv:ke&&m(S.lightMap.channel),bumpMapUv:be&&m(S.bumpMap.channel),normalMapUv:G&&m(S.normalMap.channel),displacementMapUv:ze&&m(S.displacementMap.channel),emissiveMapUv:We&&m(S.emissiveMap.channel),metalnessMapUv:dt&&m(S.metalnessMap.channel),roughnessMapUv:b&&m(S.roughnessMap.channel),anisotropyMapUv:Ae&&m(S.anisotropyMap.channel),clearcoatMapUv:Ne&&m(S.clearcoatMap.channel),clearcoatNormalMapUv:ae&&m(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:he&&m(S.clearcoatRoughnessMap.channel),iridescenceMapUv:Xe&&m(S.iridescenceMap.channel),iridescenceThicknessMapUv:ie&&m(S.iridescenceThicknessMap.channel),sheenColorMapUv:Tt&&m(S.sheenColorMap.channel),sheenRoughnessMapUv:je&&m(S.sheenRoughnessMap.channel),specularMapUv:Ue&&m(S.specularMap.channel),specularColorMapUv:Te&&m(S.specularColorMap.channel),specularIntensityMapUv:Ee&&m(S.specularIntensityMap.channel),transmissionMapUv:Ze&&m(S.transmissionMap.channel),thicknessMapUv:pe&&m(S.thicknessMap.channel),alphaMapUv:U&&m(S.alphaMap.channel),vertexTangents:!!B.attributes.tangent&&(G||E),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,pointsUvs:L.isPoints===!0&&!!B.attributes.uv&&(Le||U),fog:!!Y,useFog:S.fog===!0,fogExp2:!!Y&&Y.isFogExp2,flatShading:S.flatShading===!0,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:d,skinning:L.isSkinnedMesh===!0,morphTargets:B.morphAttributes.position!==void 0,morphNormals:B.morphAttributes.normal!==void 0,morphColors:B.morphAttributes.color!==void 0,morphTargetsCount:se,morphTextureStride:Oe,numDirLights:R.directional.length,numPointLights:R.point.length,numSpotLights:R.spot.length,numSpotLightMaps:R.spotLightMap.length,numRectAreaLights:R.rectArea.length,numHemiLights:R.hemi.length,numDirLightShadows:R.directionalShadowMap.length,numPointLightShadows:R.pointShadowMap.length,numSpotLightShadows:R.spotShadowMap.length,numSpotLightShadowsWithMaps:R.numSpotLightShadowsWithMaps,numLightProbes:R.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:S.dithering,shadowMapEnabled:n.shadowMap.enabled&&z.length>0,shadowMapType:n.shadowMap.type,toneMapping:ge,useLegacyLights:n._useLegacyLights,decodeVideoTexture:Le&&S.map.isVideoTexture===!0&&vt.getTransfer(S.map.colorSpace)===Ct,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===Dr,flipSided:S.side===ni,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionDerivatives:le&&S.extensions.derivatives===!0,extensionFragDepth:le&&S.extensions.fragDepth===!0,extensionDrawBuffers:le&&S.extensions.drawBuffers===!0,extensionShaderTextureLOD:le&&S.extensions.shaderTextureLOD===!0,extensionClipCullDistance:le&&S.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:le&&S.extensions.multiDraw===!0&&i.has("WEBGL_multi_draw"),rendererExtensionFragDepth:f||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:f||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:f||i.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return Ye.vertexUv1s=u.has(1),Ye.vertexUv2s=u.has(2),Ye.vertexUv3s=u.has(3),u.clear(),Ye}function x(S){const R=[];if(S.shaderID?R.push(S.shaderID):(R.push(S.customVertexShaderID),R.push(S.customFragmentShaderID)),S.defines!==void 0)for(const z in S.defines)R.push(z),R.push(S.defines[z]);return S.isRawShaderMaterial===!1&&(_(R,S),y(R,S),R.push(n.outputColorSpace)),R.push(S.customProgramCacheKey),R.join()}function _(S,R){S.push(R.precision),S.push(R.outputColorSpace),S.push(R.envMapMode),S.push(R.envMapCubeUVHeight),S.push(R.mapUv),S.push(R.alphaMapUv),S.push(R.lightMapUv),S.push(R.aoMapUv),S.push(R.bumpMapUv),S.push(R.normalMapUv),S.push(R.displacementMapUv),S.push(R.emissiveMapUv),S.push(R.metalnessMapUv),S.push(R.roughnessMapUv),S.push(R.anisotropyMapUv),S.push(R.clearcoatMapUv),S.push(R.clearcoatNormalMapUv),S.push(R.clearcoatRoughnessMapUv),S.push(R.iridescenceMapUv),S.push(R.iridescenceThicknessMapUv),S.push(R.sheenColorMapUv),S.push(R.sheenRoughnessMapUv),S.push(R.specularMapUv),S.push(R.specularColorMapUv),S.push(R.specularIntensityMapUv),S.push(R.transmissionMapUv),S.push(R.thicknessMapUv),S.push(R.combine),S.push(R.fogExp2),S.push(R.sizeAttenuation),S.push(R.morphTargetsCount),S.push(R.morphAttributeCount),S.push(R.numDirLights),S.push(R.numPointLights),S.push(R.numSpotLights),S.push(R.numSpotLightMaps),S.push(R.numHemiLights),S.push(R.numRectAreaLights),S.push(R.numDirLightShadows),S.push(R.numPointLightShadows),S.push(R.numSpotLightShadows),S.push(R.numSpotLightShadowsWithMaps),S.push(R.numLightProbes),S.push(R.shadowMapType),S.push(R.toneMapping),S.push(R.numClippingPlanes),S.push(R.numClipIntersection),S.push(R.depthPacking)}function y(S,R){a.disableAll(),R.isWebGL2&&a.enable(0),R.supportsVertexTextures&&a.enable(1),R.instancing&&a.enable(2),R.instancingColor&&a.enable(3),R.instancingMorph&&a.enable(4),R.matcap&&a.enable(5),R.envMap&&a.enable(6),R.normalMapObjectSpace&&a.enable(7),R.normalMapTangentSpace&&a.enable(8),R.clearcoat&&a.enable(9),R.iridescence&&a.enable(10),R.alphaTest&&a.enable(11),R.vertexColors&&a.enable(12),R.vertexAlphas&&a.enable(13),R.vertexUv1s&&a.enable(14),R.vertexUv2s&&a.enable(15),R.vertexUv3s&&a.enable(16),R.vertexTangents&&a.enable(17),R.anisotropy&&a.enable(18),R.alphaHash&&a.enable(19),R.batching&&a.enable(20),S.push(a.mask),a.disableAll(),R.fog&&a.enable(0),R.useFog&&a.enable(1),R.flatShading&&a.enable(2),R.logarithmicDepthBuffer&&a.enable(3),R.skinning&&a.enable(4),R.morphTargets&&a.enable(5),R.morphNormals&&a.enable(6),R.morphColors&&a.enable(7),R.premultipliedAlpha&&a.enable(8),R.shadowMapEnabled&&a.enable(9),R.useLegacyLights&&a.enable(10),R.doubleSided&&a.enable(11),R.flipSided&&a.enable(12),R.useDepthPacking&&a.enable(13),R.dithering&&a.enable(14),R.transmission&&a.enable(15),R.sheen&&a.enable(16),R.opaque&&a.enable(17),R.pointsUvs&&a.enable(18),R.decodeVideoTexture&&a.enable(19),R.alphaToCoverage&&a.enable(20),S.push(a.mask)}function w(S){const R=g[S.type];let z;if(R){const K=lr[R];z=yR.clone(K.uniforms)}else z=S.uniforms;return z}function T(S,R){let z;for(let K=0,L=c.length;K<L;K++){const Y=c[K];if(Y.cacheKey===R){z=Y,++z.usedTimes;break}}return z===void 0&&(z=new FL(n,R,S,s),c.push(z)),z}function M(S){if(--S.usedTimes===0){const R=c.indexOf(S);c[R]=c[c.length-1],c.pop(),S.destroy()}}function P(S){l.remove(S)}function N(){l.dispose()}return{getParameters:h,getProgramCacheKey:x,getUniforms:w,acquireProgram:T,releaseProgram:M,releaseShaderCache:P,programs:c,dispose:N}}function GL(){let n=new WeakMap;function e(s){let o=n.get(s);return o===void 0&&(o={},n.set(s,o)),o}function t(s){n.delete(s)}function i(s,o,a){n.get(s)[o]=a}function r(){n=new WeakMap}return{get:e,remove:t,update:i,dispose:r}}function VL(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function Kv(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Zv(){const n=[];let e=0;const t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function o(f,d,p,v,g,m){let h=n[e];return h===void 0?(h={id:f.id,object:f,geometry:d,material:p,groupOrder:v,renderOrder:f.renderOrder,z:g,group:m},n[e]=h):(h.id=f.id,h.object=f,h.geometry=d,h.material=p,h.groupOrder=v,h.renderOrder=f.renderOrder,h.z=g,h.group=m),e++,h}function a(f,d,p,v,g,m){const h=o(f,d,p,v,g,m);p.transmission>0?i.push(h):p.transparent===!0?r.push(h):t.push(h)}function l(f,d,p,v,g,m){const h=o(f,d,p,v,g,m);p.transmission>0?i.unshift(h):p.transparent===!0?r.unshift(h):t.unshift(h)}function u(f,d){t.length>1&&t.sort(f||VL),i.length>1&&i.sort(d||Kv),r.length>1&&r.sort(d||Kv)}function c(){for(let f=e,d=n.length;f<d;f++){const p=n[f];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:c,sort:u}}function WL(){let n=new WeakMap;function e(i,r){const s=n.get(i);let o;return s===void 0?(o=new Zv,n.set(i,[o])):r>=s.length?(o=new Zv,s.push(o)):o=s[r],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function XL(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new $,color:new mt};break;case"SpotLight":t={position:new $,direction:new $,color:new mt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new $,color:new mt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new $,skyColor:new mt,groundColor:new mt};break;case"RectAreaLight":t={color:new mt,position:new $,halfWidth:new $,halfHeight:new $};break}return n[e.id]=t,t}}}function jL(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ft};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ft};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ft,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let YL=0;function qL(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function $L(n,e){const t=new XL,i=jL(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)r.probe.push(new $);const s=new $,o=new Zt,a=new Zt;function l(c,f){let d=0,p=0,v=0;for(let z=0;z<9;z++)r.probe[z].set(0,0,0);let g=0,m=0,h=0,x=0,_=0,y=0,w=0,T=0,M=0,P=0,N=0;c.sort(qL);const S=f===!0?Math.PI:1;for(let z=0,K=c.length;z<K;z++){const L=c[z],Y=L.color,B=L.intensity,X=L.distance,D=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)d+=Y.r*B*S,p+=Y.g*B*S,v+=Y.b*B*S;else if(L.isLightProbe){for(let F=0;F<9;F++)r.probe[F].addScaledVector(L.sh.coefficients[F],B);N++}else if(L.isDirectionalLight){const F=t.get(L);if(F.color.copy(L.color).multiplyScalar(L.intensity*S),L.castShadow){const C=L.shadow,Q=i.get(L);Q.shadowBias=C.bias,Q.shadowNormalBias=C.normalBias,Q.shadowRadius=C.radius,Q.shadowMapSize=C.mapSize,r.directionalShadow[g]=Q,r.directionalShadowMap[g]=D,r.directionalShadowMatrix[g]=L.shadow.matrix,y++}r.directional[g]=F,g++}else if(L.isSpotLight){const F=t.get(L);F.position.setFromMatrixPosition(L.matrixWorld),F.color.copy(Y).multiplyScalar(B*S),F.distance=X,F.coneCos=Math.cos(L.angle),F.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),F.decay=L.decay,r.spot[h]=F;const C=L.shadow;if(L.map&&(r.spotLightMap[M]=L.map,M++,C.updateMatrices(L),L.castShadow&&P++),r.spotLightMatrix[h]=C.matrix,L.castShadow){const Q=i.get(L);Q.shadowBias=C.bias,Q.shadowNormalBias=C.normalBias,Q.shadowRadius=C.radius,Q.shadowMapSize=C.mapSize,r.spotShadow[h]=Q,r.spotShadowMap[h]=D,T++}h++}else if(L.isRectAreaLight){const F=t.get(L);F.color.copy(Y).multiplyScalar(B),F.halfWidth.set(L.width*.5,0,0),F.halfHeight.set(0,L.height*.5,0),r.rectArea[x]=F,x++}else if(L.isPointLight){const F=t.get(L);if(F.color.copy(L.color).multiplyScalar(L.intensity*S),F.distance=L.distance,F.decay=L.decay,L.castShadow){const C=L.shadow,Q=i.get(L);Q.shadowBias=C.bias,Q.shadowNormalBias=C.normalBias,Q.shadowRadius=C.radius,Q.shadowMapSize=C.mapSize,Q.shadowCameraNear=C.camera.near,Q.shadowCameraFar=C.camera.far,r.pointShadow[m]=Q,r.pointShadowMap[m]=D,r.pointShadowMatrix[m]=L.shadow.matrix,w++}r.point[m]=F,m++}else if(L.isHemisphereLight){const F=t.get(L);F.skyColor.copy(L.color).multiplyScalar(B*S),F.groundColor.copy(L.groundColor).multiplyScalar(B*S),r.hemi[_]=F,_++}}x>0&&(e.isWebGL2?n.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=me.LTC_FLOAT_1,r.rectAreaLTC2=me.LTC_FLOAT_2):(r.rectAreaLTC1=me.LTC_HALF_1,r.rectAreaLTC2=me.LTC_HALF_2):n.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=me.LTC_FLOAT_1,r.rectAreaLTC2=me.LTC_FLOAT_2):n.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=me.LTC_HALF_1,r.rectAreaLTC2=me.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=d,r.ambient[1]=p,r.ambient[2]=v;const R=r.hash;(R.directionalLength!==g||R.pointLength!==m||R.spotLength!==h||R.rectAreaLength!==x||R.hemiLength!==_||R.numDirectionalShadows!==y||R.numPointShadows!==w||R.numSpotShadows!==T||R.numSpotMaps!==M||R.numLightProbes!==N)&&(r.directional.length=g,r.spot.length=h,r.rectArea.length=x,r.point.length=m,r.hemi.length=_,r.directionalShadow.length=y,r.directionalShadowMap.length=y,r.pointShadow.length=w,r.pointShadowMap.length=w,r.spotShadow.length=T,r.spotShadowMap.length=T,r.directionalShadowMatrix.length=y,r.pointShadowMatrix.length=w,r.spotLightMatrix.length=T+M-P,r.spotLightMap.length=M,r.numSpotLightShadowsWithMaps=P,r.numLightProbes=N,R.directionalLength=g,R.pointLength=m,R.spotLength=h,R.rectAreaLength=x,R.hemiLength=_,R.numDirectionalShadows=y,R.numPointShadows=w,R.numSpotShadows=T,R.numSpotMaps=M,R.numLightProbes=N,r.version=YL++)}function u(c,f){let d=0,p=0,v=0,g=0,m=0;const h=f.matrixWorldInverse;for(let x=0,_=c.length;x<_;x++){const y=c[x];if(y.isDirectionalLight){const w=r.directional[d];w.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(h),d++}else if(y.isSpotLight){const w=r.spot[v];w.position.setFromMatrixPosition(y.matrixWorld),w.position.applyMatrix4(h),w.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(h),v++}else if(y.isRectAreaLight){const w=r.rectArea[g];w.position.setFromMatrixPosition(y.matrixWorld),w.position.applyMatrix4(h),a.identity(),o.copy(y.matrixWorld),o.premultiply(h),a.extractRotation(o),w.halfWidth.set(y.width*.5,0,0),w.halfHeight.set(0,y.height*.5,0),w.halfWidth.applyMatrix4(a),w.halfHeight.applyMatrix4(a),g++}else if(y.isPointLight){const w=r.point[p];w.position.setFromMatrixPosition(y.matrixWorld),w.position.applyMatrix4(h),p++}else if(y.isHemisphereLight){const w=r.hemi[m];w.direction.setFromMatrixPosition(y.matrixWorld),w.direction.transformDirection(h),m++}}}return{setup:l,setupView:u,state:r}}function Qv(n,e){const t=new $L(n,e),i=[],r=[];function s(){i.length=0,r.length=0}function o(f){i.push(f)}function a(f){r.push(f)}function l(f){t.setup(i,f)}function u(f){t.setupView(i,f)}return{init:s,state:{lightsArray:i,shadowsArray:r,lights:t},setupLights:l,setupLightsView:u,pushLight:o,pushShadow:a}}function KL(n,e){let t=new WeakMap;function i(s,o=0){const a=t.get(s);let l;return a===void 0?(l=new Qv(n,e),t.set(s,[l])):o>=a.length?(l=new Qv(n,e),a.push(l)):l=a[o],l}function r(){t=new WeakMap}return{get:i,dispose:r}}class ZL extends $u{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=VC,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class QL extends $u{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const JL=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,eD=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function tD(n,e,t){let i=new O1;const r=new ft,s=new ft,o=new mn,a=new ZL({depthPacking:WC}),l=new QL,u={},c=t.maxTextureSize,f={[Fs]:ni,[ni]:Fs,[Dr]:Dr},d=new ks({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ft},radius:{value:4}},vertexShader:JL,fragmentShader:eD}),p=d.clone();p.defines.HORIZONTAL_PASS=1;const v=new xr;v.setAttribute("position",new gr(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const g=new kr(v,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=d1;let h=this.type;this.render=function(T,M,P){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||T.length===0)return;const N=n.getRenderTarget(),S=n.getActiveCubeFace(),R=n.getActiveMipmapLevel(),z=n.state;z.setBlending(Rs),z.buffers.color.setClear(1,1,1,1),z.buffers.depth.setTest(!0),z.setScissorTest(!1);const K=h!==Cr&&this.type===Cr,L=h===Cr&&this.type!==Cr;for(let Y=0,B=T.length;Y<B;Y++){const X=T[Y],D=X.shadow;if(D===void 0){console.warn("THREE.WebGLShadowMap:",X,"has no shadow.");continue}if(D.autoUpdate===!1&&D.needsUpdate===!1)continue;r.copy(D.mapSize);const F=D.getFrameExtents();if(r.multiply(F),s.copy(D.mapSize),(r.x>c||r.y>c)&&(r.x>c&&(s.x=Math.floor(c/F.x),r.x=s.x*F.x,D.mapSize.x=s.x),r.y>c&&(s.y=Math.floor(c/F.y),r.y=s.y*F.y,D.mapSize.y=s.y)),D.map===null||K===!0||L===!0){const Q=this.type!==Cr?{minFilter:Bn,magFilter:Bn}:{};D.map!==null&&D.map.dispose(),D.map=new Io(r.x,r.y,Q),D.map.texture.name=X.name+".shadowMap",D.camera.updateProjectionMatrix()}n.setRenderTarget(D.map),n.clear();const C=D.getViewportCount();for(let Q=0;Q<C;Q++){const se=D.getViewport(Q);o.set(s.x*se.x,s.y*se.y,s.x*se.z,s.y*se.w),z.viewport(o),D.updateMatrices(X,Q),i=D.getFrustum(),y(M,P,D.camera,X,this.type)}D.isPointLightShadow!==!0&&this.type===Cr&&x(D,P),D.needsUpdate=!1}h=this.type,m.needsUpdate=!1,n.setRenderTarget(N,S,R)};function x(T,M){const P=e.update(g);d.defines.VSM_SAMPLES!==T.blurSamples&&(d.defines.VSM_SAMPLES=T.blurSamples,p.defines.VSM_SAMPLES=T.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new Io(r.x,r.y)),d.uniforms.shadow_pass.value=T.map.texture,d.uniforms.resolution.value=T.mapSize,d.uniforms.radius.value=T.radius,n.setRenderTarget(T.mapPass),n.clear(),n.renderBufferDirect(M,null,P,d,g,null),p.uniforms.shadow_pass.value=T.mapPass.texture,p.uniforms.resolution.value=T.mapSize,p.uniforms.radius.value=T.radius,n.setRenderTarget(T.map),n.clear(),n.renderBufferDirect(M,null,P,p,g,null)}function _(T,M,P,N){let S=null;const R=P.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(R!==void 0)S=R;else if(S=P.isPointLight===!0?l:a,n.localClippingEnabled&&M.clipShadows===!0&&Array.isArray(M.clippingPlanes)&&M.clippingPlanes.length!==0||M.displacementMap&&M.displacementScale!==0||M.alphaMap&&M.alphaTest>0||M.map&&M.alphaTest>0){const z=S.uuid,K=M.uuid;let L=u[z];L===void 0&&(L={},u[z]=L);let Y=L[K];Y===void 0&&(Y=S.clone(),L[K]=Y,M.addEventListener("dispose",w)),S=Y}if(S.visible=M.visible,S.wireframe=M.wireframe,N===Cr?S.side=M.shadowSide!==null?M.shadowSide:M.side:S.side=M.shadowSide!==null?M.shadowSide:f[M.side],S.alphaMap=M.alphaMap,S.alphaTest=M.alphaTest,S.map=M.map,S.clipShadows=M.clipShadows,S.clippingPlanes=M.clippingPlanes,S.clipIntersection=M.clipIntersection,S.displacementMap=M.displacementMap,S.displacementScale=M.displacementScale,S.displacementBias=M.displacementBias,S.wireframeLinewidth=M.wireframeLinewidth,S.linewidth=M.linewidth,P.isPointLight===!0&&S.isMeshDistanceMaterial===!0){const z=n.properties.get(S);z.light=P}return S}function y(T,M,P,N,S){if(T.visible===!1)return;if(T.layers.test(M.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&S===Cr)&&(!T.frustumCulled||i.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,T.matrixWorld);const K=e.update(T),L=T.material;if(Array.isArray(L)){const Y=K.groups;for(let B=0,X=Y.length;B<X;B++){const D=Y[B],F=L[D.materialIndex];if(F&&F.visible){const C=_(T,F,N,S);T.onBeforeShadow(n,T,M,P,K,C,D),n.renderBufferDirect(P,null,K,C,T,D),T.onAfterShadow(n,T,M,P,K,C,D)}}}else if(L.visible){const Y=_(T,L,N,S);T.onBeforeShadow(n,T,M,P,K,Y,null),n.renderBufferDirect(P,null,K,Y,T,null),T.onAfterShadow(n,T,M,P,K,Y,null)}}const z=T.children;for(let K=0,L=z.length;K<L;K++)y(z[K],M,P,N,S)}function w(T){T.target.removeEventListener("dispose",w);for(const P in u){const N=u[P],S=T.target.uuid;S in N&&(N[S].dispose(),delete N[S])}}}function nD(n,e,t){const i=t.isWebGL2;function r(){let U=!1;const fe=new mn;let j=null;const le=new mn(0,0,0,0);return{setMask:function(ge){j!==ge&&!U&&(n.colorMask(ge,ge,ge,ge),j=ge)},setLocked:function(ge){U=ge},setClear:function(ge,Ye,ct,Pe,Ce){Ce===!0&&(ge*=Pe,Ye*=Pe,ct*=Pe),fe.set(ge,Ye,ct,Pe),le.equals(fe)===!1&&(n.clearColor(ge,Ye,ct,Pe),le.copy(fe))},reset:function(){U=!1,j=null,le.set(-1,0,0,0)}}}function s(){let U=!1,fe=null,j=null,le=null;return{setTest:function(ge){ge?_e(n.DEPTH_TEST):et(n.DEPTH_TEST)},setMask:function(ge){fe!==ge&&!U&&(n.depthMask(ge),fe=ge)},setFunc:function(ge){if(j!==ge){switch(ge){case xC:n.depthFunc(n.NEVER);break;case yC:n.depthFunc(n.ALWAYS);break;case SC:n.depthFunc(n.LESS);break;case jf:n.depthFunc(n.LEQUAL);break;case MC:n.depthFunc(n.EQUAL);break;case EC:n.depthFunc(n.GEQUAL);break;case TC:n.depthFunc(n.GREATER);break;case wC:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}j=ge}},setLocked:function(ge){U=ge},setClear:function(ge){le!==ge&&(n.clearDepth(ge),le=ge)},reset:function(){U=!1,fe=null,j=null,le=null}}}function o(){let U=!1,fe=null,j=null,le=null,ge=null,Ye=null,ct=null,Pe=null,Ce=null;return{setTest:function(Ie){U||(Ie?_e(n.STENCIL_TEST):et(n.STENCIL_TEST))},setMask:function(Ie){fe!==Ie&&!U&&(n.stencilMask(Ie),fe=Ie)},setFunc:function(Ie,ue,Be){(j!==Ie||le!==ue||ge!==Be)&&(n.stencilFunc(Ie,ue,Be),j=Ie,le=ue,ge=Be)},setOp:function(Ie,ue,Be){(Ye!==Ie||ct!==ue||Pe!==Be)&&(n.stencilOp(Ie,ue,Be),Ye=Ie,ct=ue,Pe=Be)},setLocked:function(Ie){U=Ie},setClear:function(Ie){Ce!==Ie&&(n.clearStencil(Ie),Ce=Ie)},reset:function(){U=!1,fe=null,j=null,le=null,ge=null,Ye=null,ct=null,Pe=null,Ce=null}}}const a=new r,l=new s,u=new o,c=new WeakMap,f=new WeakMap;let d={},p={},v=new WeakMap,g=[],m=null,h=!1,x=null,_=null,y=null,w=null,T=null,M=null,P=null,N=new mt(0,0,0),S=0,R=!1,z=null,K=null,L=null,Y=null,B=null;const X=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let D=!1,F=0;const C=n.getParameter(n.VERSION);C.indexOf("WebGL")!==-1?(F=parseFloat(/^WebGL (\d)/.exec(C)[1]),D=F>=1):C.indexOf("OpenGL ES")!==-1&&(F=parseFloat(/^OpenGL ES (\d)/.exec(C)[1]),D=F>=2);let Q=null,se={};const Oe=n.getParameter(n.SCISSOR_BOX),V=n.getParameter(n.VIEWPORT),ee=new mn().fromArray(Oe),ce=new mn().fromArray(V);function xe(U,fe,j,le){const ge=new Uint8Array(4),Ye=n.createTexture();n.bindTexture(U,Ye),n.texParameteri(U,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(U,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let ct=0;ct<j;ct++)i&&(U===n.TEXTURE_3D||U===n.TEXTURE_2D_ARRAY)?n.texImage3D(fe,0,n.RGBA,1,1,le,0,n.RGBA,n.UNSIGNED_BYTE,ge):n.texImage2D(fe+ct,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,ge);return Ye}const ye={};ye[n.TEXTURE_2D]=xe(n.TEXTURE_2D,n.TEXTURE_2D,1),ye[n.TEXTURE_CUBE_MAP]=xe(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(ye[n.TEXTURE_2D_ARRAY]=xe(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),ye[n.TEXTURE_3D]=xe(n.TEXTURE_3D,n.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),l.setClear(1),u.setClear(0),_e(n.DEPTH_TEST),l.setFunc(jf),ze(!1),We(L0),_e(n.CULL_FACE),be(Rs);function _e(U){d[U]!==!0&&(n.enable(U),d[U]=!0)}function et(U){d[U]!==!1&&(n.disable(U),d[U]=!1)}function Le(U,fe){return p[U]!==fe?(n.bindFramebuffer(U,fe),p[U]=fe,i&&(U===n.DRAW_FRAMEBUFFER&&(p[n.FRAMEBUFFER]=fe),U===n.FRAMEBUFFER&&(p[n.DRAW_FRAMEBUFFER]=fe)),!0):!1}function k(U,fe){let j=g,le=!1;if(U){j=v.get(fe),j===void 0&&(j=[],v.set(fe,j));const ge=U.textures;if(j.length!==ge.length||j[0]!==n.COLOR_ATTACHMENT0){for(let Ye=0,ct=ge.length;Ye<ct;Ye++)j[Ye]=n.COLOR_ATTACHMENT0+Ye;j.length=ge.length,le=!0}}else j[0]!==n.BACK&&(j[0]=n.BACK,le=!0);if(le)if(t.isWebGL2)n.drawBuffers(j);else if(e.has("WEBGL_draw_buffers")===!0)e.get("WEBGL_draw_buffers").drawBuffersWEBGL(j);else throw new Error("THREE.WebGLState: Usage of gl.drawBuffers() require WebGL2 or WEBGL_draw_buffers extension")}function Ve(U){return m!==U?(n.useProgram(U),m=U,!0):!1}const ve={[co]:n.FUNC_ADD,[rC]:n.FUNC_SUBTRACT,[sC]:n.FUNC_REVERSE_SUBTRACT};if(i)ve[I0]=n.MIN,ve[O0]=n.MAX;else{const U=e.get("EXT_blend_minmax");U!==null&&(ve[I0]=U.MIN_EXT,ve[O0]=U.MAX_EXT)}const ke={[oC]:n.ZERO,[aC]:n.ONE,[lC]:n.SRC_COLOR,[om]:n.SRC_ALPHA,[pC]:n.SRC_ALPHA_SATURATE,[dC]:n.DST_COLOR,[cC]:n.DST_ALPHA,[uC]:n.ONE_MINUS_SRC_COLOR,[am]:n.ONE_MINUS_SRC_ALPHA,[hC]:n.ONE_MINUS_DST_COLOR,[fC]:n.ONE_MINUS_DST_ALPHA,[mC]:n.CONSTANT_COLOR,[gC]:n.ONE_MINUS_CONSTANT_COLOR,[_C]:n.CONSTANT_ALPHA,[vC]:n.ONE_MINUS_CONSTANT_ALPHA};function be(U,fe,j,le,ge,Ye,ct,Pe,Ce,Ie){if(U===Rs){h===!0&&(et(n.BLEND),h=!1);return}if(h===!1&&(_e(n.BLEND),h=!0),U!==iC){if(U!==x||Ie!==R){if((_!==co||T!==co)&&(n.blendEquation(n.FUNC_ADD),_=co,T=co),Ie)switch(U){case Fa:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case D0:n.blendFunc(n.ONE,n.ONE);break;case N0:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case U0:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}else switch(U){case Fa:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case D0:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case N0:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case U0:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}y=null,w=null,M=null,P=null,N.set(0,0,0),S=0,x=U,R=Ie}return}ge=ge||fe,Ye=Ye||j,ct=ct||le,(fe!==_||ge!==T)&&(n.blendEquationSeparate(ve[fe],ve[ge]),_=fe,T=ge),(j!==y||le!==w||Ye!==M||ct!==P)&&(n.blendFuncSeparate(ke[j],ke[le],ke[Ye],ke[ct]),y=j,w=le,M=Ye,P=ct),(Pe.equals(N)===!1||Ce!==S)&&(n.blendColor(Pe.r,Pe.g,Pe.b,Ce),N.copy(Pe),S=Ce),x=U,R=!1}function G(U,fe){U.side===Dr?et(n.CULL_FACE):_e(n.CULL_FACE);let j=U.side===ni;fe&&(j=!j),ze(j),U.blending===Fa&&U.transparent===!1?be(Rs):be(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),l.setFunc(U.depthFunc),l.setTest(U.depthTest),l.setMask(U.depthWrite),a.setMask(U.colorWrite);const le=U.stencilWrite;u.setTest(le),le&&(u.setMask(U.stencilWriteMask),u.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),u.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),b(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?_e(n.SAMPLE_ALPHA_TO_COVERAGE):et(n.SAMPLE_ALPHA_TO_COVERAGE)}function ze(U){z!==U&&(U?n.frontFace(n.CW):n.frontFace(n.CCW),z=U)}function We(U){U!==eC?(_e(n.CULL_FACE),U!==K&&(U===L0?n.cullFace(n.BACK):U===tC?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):et(n.CULL_FACE),K=U}function dt(U){U!==L&&(D&&n.lineWidth(U),L=U)}function b(U,fe,j){U?(_e(n.POLYGON_OFFSET_FILL),(Y!==fe||B!==j)&&(n.polygonOffset(fe,j),Y=fe,B=j)):et(n.POLYGON_OFFSET_FILL)}function E(U){U?_e(n.SCISSOR_TEST):et(n.SCISSOR_TEST)}function Z(U){U===void 0&&(U=n.TEXTURE0+X-1),Q!==U&&(n.activeTexture(U),Q=U)}function J(U,fe,j){j===void 0&&(Q===null?j=n.TEXTURE0+X-1:j=Q);let le=se[j];le===void 0&&(le={type:void 0,texture:void 0},se[j]=le),(le.type!==U||le.texture!==fe)&&(Q!==j&&(n.activeTexture(j),Q=j),n.bindTexture(U,fe||ye[U]),le.type=U,le.texture=fe)}function te(){const U=se[Q];U!==void 0&&U.type!==void 0&&(n.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function ne(){try{n.compressedTexImage2D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Ae(){try{n.compressedTexImage3D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Ne(){try{n.texSubImage2D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ae(){try{n.texSubImage3D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function he(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Xe(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ie(){try{n.texStorage2D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Tt(){try{n.texStorage3D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function je(){try{n.texImage2D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Ue(){try{n.texImage3D.apply(n,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Te(U){ee.equals(U)===!1&&(n.scissor(U.x,U.y,U.z,U.w),ee.copy(U))}function Ee(U){ce.equals(U)===!1&&(n.viewport(U.x,U.y,U.z,U.w),ce.copy(U))}function Ze(U,fe){let j=f.get(fe);j===void 0&&(j=new WeakMap,f.set(fe,j));let le=j.get(U);le===void 0&&(le=n.getUniformBlockIndex(fe,U.name),j.set(U,le))}function pe(U,fe){const le=f.get(fe).get(U);c.get(fe)!==le&&(n.uniformBlockBinding(fe,le,U.__bindingPointIndex),c.set(fe,le))}function ut(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),i===!0&&(n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null)),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),d={},Q=null,se={},p={},v=new WeakMap,g=[],m=null,h=!1,x=null,_=null,y=null,w=null,T=null,M=null,P=null,N=new mt(0,0,0),S=0,R=!1,z=null,K=null,L=null,Y=null,B=null,ee.set(0,0,n.canvas.width,n.canvas.height),ce.set(0,0,n.canvas.width,n.canvas.height),a.reset(),l.reset(),u.reset()}return{buffers:{color:a,depth:l,stencil:u},enable:_e,disable:et,bindFramebuffer:Le,drawBuffers:k,useProgram:Ve,setBlending:be,setMaterial:G,setFlipSided:ze,setCullFace:We,setLineWidth:dt,setPolygonOffset:b,setScissorTest:E,activeTexture:Z,bindTexture:J,unbindTexture:te,compressedTexImage2D:ne,compressedTexImage3D:Ae,texImage2D:je,texImage3D:Ue,updateUBOMapping:Ze,uniformBlockBinding:pe,texStorage2D:ie,texStorage3D:Tt,texSubImage2D:Ne,texSubImage3D:ae,compressedTexSubImage2D:he,compressedTexSubImage3D:Xe,scissor:Te,viewport:Ee,reset:ut}}function iD(n,e,t,i,r,s,o){const a=r.isWebGL2,l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,u=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new ft,f=new WeakMap;let d;const p=new WeakMap;let v=!1;try{v=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(b,E){return v?new OffscreenCanvas(b,E):Zf("canvas")}function m(b,E,Z,J){let te=1;const ne=dt(b);if((ne.width>J||ne.height>J)&&(te=J/Math.max(ne.width,ne.height)),te<1||E===!0)if(typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&b instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&b instanceof ImageBitmap||typeof VideoFrame<"u"&&b instanceof VideoFrame){const Ae=E?pm:Math.floor,Ne=Ae(te*ne.width),ae=Ae(te*ne.height);d===void 0&&(d=g(Ne,ae));const he=Z?g(Ne,ae):d;return he.width=Ne,he.height=ae,he.getContext("2d").drawImage(b,0,0,Ne,ae),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ne.width+"x"+ne.height+") to ("+Ne+"x"+ae+")."),he}else return"data"in b&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ne.width+"x"+ne.height+")."),b;return b}function h(b){const E=dt(b);return dv(E.width)&&dv(E.height)}function x(b){return a?!1:b.wrapS!==Qi||b.wrapT!==Qi||b.minFilter!==Bn&&b.minFilter!==$n}function _(b,E){return b.generateMipmaps&&E&&b.minFilter!==Bn&&b.minFilter!==$n}function y(b){n.generateMipmap(b)}function w(b,E,Z,J,te=!1){if(a===!1)return E;if(b!==null){if(n[b]!==void 0)return n[b];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+b+"'")}let ne=E;if(E===n.RED&&(Z===n.FLOAT&&(ne=n.R32F),Z===n.HALF_FLOAT&&(ne=n.R16F),Z===n.UNSIGNED_BYTE&&(ne=n.R8)),E===n.RED_INTEGER&&(Z===n.UNSIGNED_BYTE&&(ne=n.R8UI),Z===n.UNSIGNED_SHORT&&(ne=n.R16UI),Z===n.UNSIGNED_INT&&(ne=n.R32UI),Z===n.BYTE&&(ne=n.R8I),Z===n.SHORT&&(ne=n.R16I),Z===n.INT&&(ne=n.R32I)),E===n.RG&&(Z===n.FLOAT&&(ne=n.RG32F),Z===n.HALF_FLOAT&&(ne=n.RG16F),Z===n.UNSIGNED_BYTE&&(ne=n.RG8)),E===n.RG_INTEGER&&(Z===n.UNSIGNED_BYTE&&(ne=n.RG8UI),Z===n.UNSIGNED_SHORT&&(ne=n.RG16UI),Z===n.UNSIGNED_INT&&(ne=n.RG32UI),Z===n.BYTE&&(ne=n.RG8I),Z===n.SHORT&&(ne=n.RG16I),Z===n.INT&&(ne=n.RG32I)),E===n.RGBA){const Ae=te?Yf:vt.getTransfer(J);Z===n.FLOAT&&(ne=n.RGBA32F),Z===n.HALF_FLOAT&&(ne=n.RGBA16F),Z===n.UNSIGNED_BYTE&&(ne=Ae===Ct?n.SRGB8_ALPHA8:n.RGBA8),Z===n.UNSIGNED_SHORT_4_4_4_4&&(ne=n.RGBA4),Z===n.UNSIGNED_SHORT_5_5_5_1&&(ne=n.RGB5_A1)}return(ne===n.R16F||ne===n.R32F||ne===n.RG16F||ne===n.RG32F||ne===n.RGBA16F||ne===n.RGBA32F)&&e.get("EXT_color_buffer_float"),ne}function T(b,E,Z){return _(b,Z)===!0||b.isFramebufferTexture&&b.minFilter!==Bn&&b.minFilter!==$n?Math.log2(Math.max(E.width,E.height))+1:b.mipmaps!==void 0&&b.mipmaps.length>0?b.mipmaps.length:b.isCompressedTexture&&Array.isArray(b.image)?E.mipmaps.length:1}function M(b){return b===Bn||b===F0||b===El?n.NEAREST:n.LINEAR}function P(b){const E=b.target;E.removeEventListener("dispose",P),S(E),E.isVideoTexture&&f.delete(E)}function N(b){const E=b.target;E.removeEventListener("dispose",N),z(E)}function S(b){const E=i.get(b);if(E.__webglInit===void 0)return;const Z=b.source,J=p.get(Z);if(J){const te=J[E.__cacheKey];te.usedTimes--,te.usedTimes===0&&R(b),Object.keys(J).length===0&&p.delete(Z)}i.remove(b)}function R(b){const E=i.get(b);n.deleteTexture(E.__webglTexture);const Z=b.source,J=p.get(Z);delete J[E.__cacheKey],o.memory.textures--}function z(b){const E=i.get(b);if(b.depthTexture&&b.depthTexture.dispose(),b.isWebGLCubeRenderTarget)for(let J=0;J<6;J++){if(Array.isArray(E.__webglFramebuffer[J]))for(let te=0;te<E.__webglFramebuffer[J].length;te++)n.deleteFramebuffer(E.__webglFramebuffer[J][te]);else n.deleteFramebuffer(E.__webglFramebuffer[J]);E.__webglDepthbuffer&&n.deleteRenderbuffer(E.__webglDepthbuffer[J])}else{if(Array.isArray(E.__webglFramebuffer))for(let J=0;J<E.__webglFramebuffer.length;J++)n.deleteFramebuffer(E.__webglFramebuffer[J]);else n.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&n.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&n.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let J=0;J<E.__webglColorRenderbuffer.length;J++)E.__webglColorRenderbuffer[J]&&n.deleteRenderbuffer(E.__webglColorRenderbuffer[J]);E.__webglDepthRenderbuffer&&n.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const Z=b.textures;for(let J=0,te=Z.length;J<te;J++){const ne=i.get(Z[J]);ne.__webglTexture&&(n.deleteTexture(ne.__webglTexture),o.memory.textures--),i.remove(Z[J])}i.remove(b)}let K=0;function L(){K=0}function Y(){const b=K;return b>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+b+" texture units while this GPU supports only "+r.maxTextures),K+=1,b}function B(b){const E=[];return E.push(b.wrapS),E.push(b.wrapT),E.push(b.wrapR||0),E.push(b.magFilter),E.push(b.minFilter),E.push(b.anisotropy),E.push(b.internalFormat),E.push(b.format),E.push(b.type),E.push(b.generateMipmaps),E.push(b.premultiplyAlpha),E.push(b.flipY),E.push(b.unpackAlignment),E.push(b.colorSpace),E.join()}function X(b,E){const Z=i.get(b);if(b.isVideoTexture&&ze(b),b.isRenderTargetTexture===!1&&b.version>0&&Z.__version!==b.version){const J=b.image;if(J===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(J.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ce(Z,b,E);return}}t.bindTexture(n.TEXTURE_2D,Z.__webglTexture,n.TEXTURE0+E)}function D(b,E){const Z=i.get(b);if(b.version>0&&Z.__version!==b.version){ce(Z,b,E);return}t.bindTexture(n.TEXTURE_2D_ARRAY,Z.__webglTexture,n.TEXTURE0+E)}function F(b,E){const Z=i.get(b);if(b.version>0&&Z.__version!==b.version){ce(Z,b,E);return}t.bindTexture(n.TEXTURE_3D,Z.__webglTexture,n.TEXTURE0+E)}function C(b,E){const Z=i.get(b);if(b.version>0&&Z.__version!==b.version){xe(Z,b,E);return}t.bindTexture(n.TEXTURE_CUBE_MAP,Z.__webglTexture,n.TEXTURE0+E)}const Q={[cm]:n.REPEAT,[Qi]:n.CLAMP_TO_EDGE,[fm]:n.MIRRORED_REPEAT},se={[Bn]:n.NEAREST,[F0]:n.NEAREST_MIPMAP_NEAREST,[El]:n.NEAREST_MIPMAP_LINEAR,[$n]:n.LINEAR,[ph]:n.LINEAR_MIPMAP_NEAREST,[go]:n.LINEAR_MIPMAP_LINEAR},Oe={[YC]:n.NEVER,[JC]:n.ALWAYS,[qC]:n.LESS,[M1]:n.LEQUAL,[$C]:n.EQUAL,[QC]:n.GEQUAL,[KC]:n.GREATER,[ZC]:n.NOTEQUAL};function V(b,E,Z){if(E.type===Nr&&e.has("OES_texture_float_linear")===!1&&(E.magFilter===$n||E.magFilter===ph||E.magFilter===El||E.magFilter===go||E.minFilter===$n||E.minFilter===ph||E.minFilter===El||E.minFilter===go)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),Z?(n.texParameteri(b,n.TEXTURE_WRAP_S,Q[E.wrapS]),n.texParameteri(b,n.TEXTURE_WRAP_T,Q[E.wrapT]),(b===n.TEXTURE_3D||b===n.TEXTURE_2D_ARRAY)&&n.texParameteri(b,n.TEXTURE_WRAP_R,Q[E.wrapR]),n.texParameteri(b,n.TEXTURE_MAG_FILTER,se[E.magFilter]),n.texParameteri(b,n.TEXTURE_MIN_FILTER,se[E.minFilter])):(n.texParameteri(b,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(b,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE),(b===n.TEXTURE_3D||b===n.TEXTURE_2D_ARRAY)&&n.texParameteri(b,n.TEXTURE_WRAP_R,n.CLAMP_TO_EDGE),(E.wrapS!==Qi||E.wrapT!==Qi)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),n.texParameteri(b,n.TEXTURE_MAG_FILTER,M(E.magFilter)),n.texParameteri(b,n.TEXTURE_MIN_FILTER,M(E.minFilter)),E.minFilter!==Bn&&E.minFilter!==$n&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),E.compareFunction&&(n.texParameteri(b,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(b,n.TEXTURE_COMPARE_FUNC,Oe[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===Bn||E.minFilter!==El&&E.minFilter!==go||E.type===Nr&&e.has("OES_texture_float_linear")===!1||a===!1&&E.type===bu&&e.has("OES_texture_half_float_linear")===!1)return;if(E.anisotropy>1||i.get(E).__currentAnisotropy){const J=e.get("EXT_texture_filter_anisotropic");n.texParameterf(b,J.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,r.getMaxAnisotropy())),i.get(E).__currentAnisotropy=E.anisotropy}}}function ee(b,E){let Z=!1;b.__webglInit===void 0&&(b.__webglInit=!0,E.addEventListener("dispose",P));const J=E.source;let te=p.get(J);te===void 0&&(te={},p.set(J,te));const ne=B(E);if(ne!==b.__cacheKey){te[ne]===void 0&&(te[ne]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,Z=!0),te[ne].usedTimes++;const Ae=te[b.__cacheKey];Ae!==void 0&&(te[b.__cacheKey].usedTimes--,Ae.usedTimes===0&&R(E)),b.__cacheKey=ne,b.__webglTexture=te[ne].texture}return Z}function ce(b,E,Z){let J=n.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(J=n.TEXTURE_2D_ARRAY),E.isData3DTexture&&(J=n.TEXTURE_3D);const te=ee(b,E),ne=E.source;t.bindTexture(J,b.__webglTexture,n.TEXTURE0+Z);const Ae=i.get(ne);if(ne.version!==Ae.__version||te===!0){t.activeTexture(n.TEXTURE0+Z);const Ne=vt.getPrimaries(vt.workingColorSpace),ae=E.colorSpace===us?null:vt.getPrimaries(E.colorSpace),he=E.colorSpace===us||Ne===ae?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,E.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,E.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,he);const Xe=x(E)&&h(E.image)===!1;let ie=m(E.image,Xe,!1,r.maxTextureSize);ie=We(E,ie);const Tt=h(ie)||a,je=s.convert(E.format,E.colorSpace);let Ue=s.convert(E.type),Te=w(E.internalFormat,je,Ue,E.colorSpace,E.isVideoTexture);V(J,E,Tt);let Ee;const Ze=E.mipmaps,pe=a&&E.isVideoTexture!==!0&&Te!==S1,ut=Ae.__version===void 0||te===!0,U=ne.dataReady,fe=T(E,ie,Tt);if(E.isDepthTexture)Te=n.DEPTH_COMPONENT,a?E.type===Nr?Te=n.DEPTH_COMPONENT32F:E.type===hs?Te=n.DEPTH_COMPONENT24:E.type===So?Te=n.DEPTH24_STENCIL8:Te=n.DEPTH_COMPONENT16:E.type===Nr&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),E.format===Mo&&Te===n.DEPTH_COMPONENT&&E.type!==kg&&E.type!==hs&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),E.type=hs,Ue=s.convert(E.type)),E.format===el&&Te===n.DEPTH_COMPONENT&&(Te=n.DEPTH_STENCIL,E.type!==So&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),E.type=So,Ue=s.convert(E.type))),ut&&(pe?t.texStorage2D(n.TEXTURE_2D,1,Te,ie.width,ie.height):t.texImage2D(n.TEXTURE_2D,0,Te,ie.width,ie.height,0,je,Ue,null));else if(E.isDataTexture)if(Ze.length>0&&Tt){pe&&ut&&t.texStorage2D(n.TEXTURE_2D,fe,Te,Ze[0].width,Ze[0].height);for(let j=0,le=Ze.length;j<le;j++)Ee=Ze[j],pe?U&&t.texSubImage2D(n.TEXTURE_2D,j,0,0,Ee.width,Ee.height,je,Ue,Ee.data):t.texImage2D(n.TEXTURE_2D,j,Te,Ee.width,Ee.height,0,je,Ue,Ee.data);E.generateMipmaps=!1}else pe?(ut&&t.texStorage2D(n.TEXTURE_2D,fe,Te,ie.width,ie.height),U&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,ie.width,ie.height,je,Ue,ie.data)):t.texImage2D(n.TEXTURE_2D,0,Te,ie.width,ie.height,0,je,Ue,ie.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){pe&&ut&&t.texStorage3D(n.TEXTURE_2D_ARRAY,fe,Te,Ze[0].width,Ze[0].height,ie.depth);for(let j=0,le=Ze.length;j<le;j++)Ee=Ze[j],E.format!==Ji?je!==null?pe?U&&t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,j,0,0,0,Ee.width,Ee.height,ie.depth,je,Ee.data,0,0):t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,j,Te,Ee.width,Ee.height,ie.depth,0,Ee.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):pe?U&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,j,0,0,0,Ee.width,Ee.height,ie.depth,je,Ue,Ee.data):t.texImage3D(n.TEXTURE_2D_ARRAY,j,Te,Ee.width,Ee.height,ie.depth,0,je,Ue,Ee.data)}else{pe&&ut&&t.texStorage2D(n.TEXTURE_2D,fe,Te,Ze[0].width,Ze[0].height);for(let j=0,le=Ze.length;j<le;j++)Ee=Ze[j],E.format!==Ji?je!==null?pe?U&&t.compressedTexSubImage2D(n.TEXTURE_2D,j,0,0,Ee.width,Ee.height,je,Ee.data):t.compressedTexImage2D(n.TEXTURE_2D,j,Te,Ee.width,Ee.height,0,Ee.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):pe?U&&t.texSubImage2D(n.TEXTURE_2D,j,0,0,Ee.width,Ee.height,je,Ue,Ee.data):t.texImage2D(n.TEXTURE_2D,j,Te,Ee.width,Ee.height,0,je,Ue,Ee.data)}else if(E.isDataArrayTexture)pe?(ut&&t.texStorage3D(n.TEXTURE_2D_ARRAY,fe,Te,ie.width,ie.height,ie.depth),U&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,ie.width,ie.height,ie.depth,je,Ue,ie.data)):t.texImage3D(n.TEXTURE_2D_ARRAY,0,Te,ie.width,ie.height,ie.depth,0,je,Ue,ie.data);else if(E.isData3DTexture)pe?(ut&&t.texStorage3D(n.TEXTURE_3D,fe,Te,ie.width,ie.height,ie.depth),U&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,ie.width,ie.height,ie.depth,je,Ue,ie.data)):t.texImage3D(n.TEXTURE_3D,0,Te,ie.width,ie.height,ie.depth,0,je,Ue,ie.data);else if(E.isFramebufferTexture){if(ut)if(pe)t.texStorage2D(n.TEXTURE_2D,fe,Te,ie.width,ie.height);else{let j=ie.width,le=ie.height;for(let ge=0;ge<fe;ge++)t.texImage2D(n.TEXTURE_2D,ge,Te,j,le,0,je,Ue,null),j>>=1,le>>=1}}else if(Ze.length>0&&Tt){if(pe&&ut){const j=dt(Ze[0]);t.texStorage2D(n.TEXTURE_2D,fe,Te,j.width,j.height)}for(let j=0,le=Ze.length;j<le;j++)Ee=Ze[j],pe?U&&t.texSubImage2D(n.TEXTURE_2D,j,0,0,je,Ue,Ee):t.texImage2D(n.TEXTURE_2D,j,Te,je,Ue,Ee);E.generateMipmaps=!1}else if(pe){if(ut){const j=dt(ie);t.texStorage2D(n.TEXTURE_2D,fe,Te,j.width,j.height)}U&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,je,Ue,ie)}else t.texImage2D(n.TEXTURE_2D,0,Te,je,Ue,ie);_(E,Tt)&&y(J),Ae.__version=ne.version,E.onUpdate&&E.onUpdate(E)}b.__version=E.version}function xe(b,E,Z){if(E.image.length!==6)return;const J=ee(b,E),te=E.source;t.bindTexture(n.TEXTURE_CUBE_MAP,b.__webglTexture,n.TEXTURE0+Z);const ne=i.get(te);if(te.version!==ne.__version||J===!0){t.activeTexture(n.TEXTURE0+Z);const Ae=vt.getPrimaries(vt.workingColorSpace),Ne=E.colorSpace===us?null:vt.getPrimaries(E.colorSpace),ae=E.colorSpace===us||Ae===Ne?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,E.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,E.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,ae);const he=E.isCompressedTexture||E.image[0].isCompressedTexture,Xe=E.image[0]&&E.image[0].isDataTexture,ie=[];for(let j=0;j<6;j++)!he&&!Xe?ie[j]=m(E.image[j],!1,!0,r.maxCubemapSize):ie[j]=Xe?E.image[j].image:E.image[j],ie[j]=We(E,ie[j]);const Tt=ie[0],je=h(Tt)||a,Ue=s.convert(E.format,E.colorSpace),Te=s.convert(E.type),Ee=w(E.internalFormat,Ue,Te,E.colorSpace),Ze=a&&E.isVideoTexture!==!0,pe=ne.__version===void 0||J===!0,ut=te.dataReady;let U=T(E,Tt,je);V(n.TEXTURE_CUBE_MAP,E,je);let fe;if(he){Ze&&pe&&t.texStorage2D(n.TEXTURE_CUBE_MAP,U,Ee,Tt.width,Tt.height);for(let j=0;j<6;j++){fe=ie[j].mipmaps;for(let le=0;le<fe.length;le++){const ge=fe[le];E.format!==Ji?Ue!==null?Ze?ut&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,le,0,0,ge.width,ge.height,Ue,ge.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,le,Ee,ge.width,ge.height,0,ge.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ze?ut&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,le,0,0,ge.width,ge.height,Ue,Te,ge.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,le,Ee,ge.width,ge.height,0,Ue,Te,ge.data)}}}else{if(fe=E.mipmaps,Ze&&pe){fe.length>0&&U++;const j=dt(ie[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,U,Ee,j.width,j.height)}for(let j=0;j<6;j++)if(Xe){Ze?ut&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,0,0,ie[j].width,ie[j].height,Ue,Te,ie[j].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,Ee,ie[j].width,ie[j].height,0,Ue,Te,ie[j].data);for(let le=0;le<fe.length;le++){const Ye=fe[le].image[j].image;Ze?ut&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,le+1,0,0,Ye.width,Ye.height,Ue,Te,Ye.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,le+1,Ee,Ye.width,Ye.height,0,Ue,Te,Ye.data)}}else{Ze?ut&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,0,0,Ue,Te,ie[j]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,Ee,Ue,Te,ie[j]);for(let le=0;le<fe.length;le++){const ge=fe[le];Ze?ut&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,le+1,0,0,Ue,Te,ge.image[j]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+j,le+1,Ee,Ue,Te,ge.image[j])}}}_(E,je)&&y(n.TEXTURE_CUBE_MAP),ne.__version=te.version,E.onUpdate&&E.onUpdate(E)}b.__version=E.version}function ye(b,E,Z,J,te,ne){const Ae=s.convert(Z.format,Z.colorSpace),Ne=s.convert(Z.type),ae=w(Z.internalFormat,Ae,Ne,Z.colorSpace);if(!i.get(E).__hasExternalTextures){const Xe=Math.max(1,E.width>>ne),ie=Math.max(1,E.height>>ne);te===n.TEXTURE_3D||te===n.TEXTURE_2D_ARRAY?t.texImage3D(te,ne,ae,Xe,ie,E.depth,0,Ae,Ne,null):t.texImage2D(te,ne,ae,Xe,ie,0,Ae,Ne,null)}t.bindFramebuffer(n.FRAMEBUFFER,b),G(E)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,J,te,i.get(Z).__webglTexture,0,be(E)):(te===n.TEXTURE_2D||te>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&te<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,J,te,i.get(Z).__webglTexture,ne),t.bindFramebuffer(n.FRAMEBUFFER,null)}function _e(b,E,Z){if(n.bindRenderbuffer(n.RENDERBUFFER,b),E.depthBuffer&&!E.stencilBuffer){let J=a===!0?n.DEPTH_COMPONENT24:n.DEPTH_COMPONENT16;if(Z||G(E)){const te=E.depthTexture;te&&te.isDepthTexture&&(te.type===Nr?J=n.DEPTH_COMPONENT32F:te.type===hs&&(J=n.DEPTH_COMPONENT24));const ne=be(E);G(E)?l.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ne,J,E.width,E.height):n.renderbufferStorageMultisample(n.RENDERBUFFER,ne,J,E.width,E.height)}else n.renderbufferStorage(n.RENDERBUFFER,J,E.width,E.height);n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.RENDERBUFFER,b)}else if(E.depthBuffer&&E.stencilBuffer){const J=be(E);Z&&G(E)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,J,n.DEPTH24_STENCIL8,E.width,E.height):G(E)?l.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,J,n.DEPTH24_STENCIL8,E.width,E.height):n.renderbufferStorage(n.RENDERBUFFER,n.DEPTH_STENCIL,E.width,E.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.RENDERBUFFER,b)}else{const J=E.textures;for(let te=0;te<J.length;te++){const ne=J[te],Ae=s.convert(ne.format,ne.colorSpace),Ne=s.convert(ne.type),ae=w(ne.internalFormat,Ae,Ne,ne.colorSpace),he=be(E);Z&&G(E)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,he,ae,E.width,E.height):G(E)?l.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,he,ae,E.width,E.height):n.renderbufferStorage(n.RENDERBUFFER,ae,E.width,E.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function et(b,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,b),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(E.depthTexture).__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),X(E.depthTexture,0);const J=i.get(E.depthTexture).__webglTexture,te=be(E);if(E.depthTexture.format===Mo)G(E)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,J,0,te):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,J,0);else if(E.depthTexture.format===el)G(E)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,J,0,te):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,J,0);else throw new Error("Unknown depthTexture format")}function Le(b){const E=i.get(b),Z=b.isWebGLCubeRenderTarget===!0;if(b.depthTexture&&!E.__autoAllocateDepthBuffer){if(Z)throw new Error("target.depthTexture not supported in Cube render targets");et(E.__webglFramebuffer,b)}else if(Z){E.__webglDepthbuffer=[];for(let J=0;J<6;J++)t.bindFramebuffer(n.FRAMEBUFFER,E.__webglFramebuffer[J]),E.__webglDepthbuffer[J]=n.createRenderbuffer(),_e(E.__webglDepthbuffer[J],b,!1)}else t.bindFramebuffer(n.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer=n.createRenderbuffer(),_e(E.__webglDepthbuffer,b,!1);t.bindFramebuffer(n.FRAMEBUFFER,null)}function k(b,E,Z){const J=i.get(b);E!==void 0&&ye(J.__webglFramebuffer,b,b.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),Z!==void 0&&Le(b)}function Ve(b){const E=b.texture,Z=i.get(b),J=i.get(E);b.addEventListener("dispose",N);const te=b.textures,ne=b.isWebGLCubeRenderTarget===!0,Ae=te.length>1,Ne=h(b)||a;if(Ae||(J.__webglTexture===void 0&&(J.__webglTexture=n.createTexture()),J.__version=E.version,o.memory.textures++),ne){Z.__webglFramebuffer=[];for(let ae=0;ae<6;ae++)if(a&&E.mipmaps&&E.mipmaps.length>0){Z.__webglFramebuffer[ae]=[];for(let he=0;he<E.mipmaps.length;he++)Z.__webglFramebuffer[ae][he]=n.createFramebuffer()}else Z.__webglFramebuffer[ae]=n.createFramebuffer()}else{if(a&&E.mipmaps&&E.mipmaps.length>0){Z.__webglFramebuffer=[];for(let ae=0;ae<E.mipmaps.length;ae++)Z.__webglFramebuffer[ae]=n.createFramebuffer()}else Z.__webglFramebuffer=n.createFramebuffer();if(Ae)if(r.drawBuffers)for(let ae=0,he=te.length;ae<he;ae++){const Xe=i.get(te[ae]);Xe.__webglTexture===void 0&&(Xe.__webglTexture=n.createTexture(),o.memory.textures++)}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&b.samples>0&&G(b)===!1){Z.__webglMultisampledFramebuffer=n.createFramebuffer(),Z.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,Z.__webglMultisampledFramebuffer);for(let ae=0;ae<te.length;ae++){const he=te[ae];Z.__webglColorRenderbuffer[ae]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,Z.__webglColorRenderbuffer[ae]);const Xe=s.convert(he.format,he.colorSpace),ie=s.convert(he.type),Tt=w(he.internalFormat,Xe,ie,he.colorSpace,b.isXRRenderTarget===!0),je=be(b);n.renderbufferStorageMultisample(n.RENDERBUFFER,je,Tt,b.width,b.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ae,n.RENDERBUFFER,Z.__webglColorRenderbuffer[ae])}n.bindRenderbuffer(n.RENDERBUFFER,null),b.depthBuffer&&(Z.__webglDepthRenderbuffer=n.createRenderbuffer(),_e(Z.__webglDepthRenderbuffer,b,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(ne){t.bindTexture(n.TEXTURE_CUBE_MAP,J.__webglTexture),V(n.TEXTURE_CUBE_MAP,E,Ne);for(let ae=0;ae<6;ae++)if(a&&E.mipmaps&&E.mipmaps.length>0)for(let he=0;he<E.mipmaps.length;he++)ye(Z.__webglFramebuffer[ae][he],b,E,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,he);else ye(Z.__webglFramebuffer[ae],b,E,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0);_(E,Ne)&&y(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Ae){for(let ae=0,he=te.length;ae<he;ae++){const Xe=te[ae],ie=i.get(Xe);t.bindTexture(n.TEXTURE_2D,ie.__webglTexture),V(n.TEXTURE_2D,Xe,Ne),ye(Z.__webglFramebuffer,b,Xe,n.COLOR_ATTACHMENT0+ae,n.TEXTURE_2D,0),_(Xe,Ne)&&y(n.TEXTURE_2D)}t.unbindTexture()}else{let ae=n.TEXTURE_2D;if((b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(a?ae=b.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(ae,J.__webglTexture),V(ae,E,Ne),a&&E.mipmaps&&E.mipmaps.length>0)for(let he=0;he<E.mipmaps.length;he++)ye(Z.__webglFramebuffer[he],b,E,n.COLOR_ATTACHMENT0,ae,he);else ye(Z.__webglFramebuffer,b,E,n.COLOR_ATTACHMENT0,ae,0);_(E,Ne)&&y(ae),t.unbindTexture()}b.depthBuffer&&Le(b)}function ve(b){const E=h(b)||a,Z=b.textures;for(let J=0,te=Z.length;J<te;J++){const ne=Z[J];if(_(ne,E)){const Ae=b.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:n.TEXTURE_2D,Ne=i.get(ne).__webglTexture;t.bindTexture(Ae,Ne),y(Ae),t.unbindTexture()}}}function ke(b){if(a&&b.samples>0&&G(b)===!1){const E=b.textures,Z=b.width,J=b.height;let te=n.COLOR_BUFFER_BIT;const ne=[],Ae=b.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Ne=i.get(b),ae=E.length>1;if(ae)for(let he=0;he<E.length;he++)t.bindFramebuffer(n.FRAMEBUFFER,Ne.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+he,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,Ne.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+he,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,Ne.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Ne.__webglFramebuffer);for(let he=0;he<E.length;he++){ne.push(n.COLOR_ATTACHMENT0+he),b.depthBuffer&&ne.push(Ae);const Xe=Ne.__ignoreDepthValues!==void 0?Ne.__ignoreDepthValues:!1;if(Xe===!1&&(b.depthBuffer&&(te|=n.DEPTH_BUFFER_BIT),b.stencilBuffer&&(te|=n.STENCIL_BUFFER_BIT)),ae&&n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Ne.__webglColorRenderbuffer[he]),Xe===!0&&(n.invalidateFramebuffer(n.READ_FRAMEBUFFER,[Ae]),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[Ae])),ae){const ie=i.get(E[he]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,ie,0)}n.blitFramebuffer(0,0,Z,J,0,0,Z,J,te,n.NEAREST),u&&n.invalidateFramebuffer(n.READ_FRAMEBUFFER,ne)}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),ae)for(let he=0;he<E.length;he++){t.bindFramebuffer(n.FRAMEBUFFER,Ne.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+he,n.RENDERBUFFER,Ne.__webglColorRenderbuffer[he]);const Xe=i.get(E[he]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,Ne.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+he,n.TEXTURE_2D,Xe,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Ne.__webglMultisampledFramebuffer)}}function be(b){return Math.min(r.maxSamples,b.samples)}function G(b){const E=i.get(b);return a&&b.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function ze(b){const E=o.render.frame;f.get(b)!==E&&(f.set(b,E),b.update())}function We(b,E){const Z=b.colorSpace,J=b.format,te=b.type;return b.isCompressedTexture===!0||b.isVideoTexture===!0||b.format===dm||Z!==Xs&&Z!==us&&(vt.getTransfer(Z)===Ct?a===!1?e.has("EXT_sRGB")===!0&&J===Ji?(b.format=dm,b.minFilter=$n,b.generateMipmaps=!1):E=T1.sRGBToLinear(E):(J!==Ji||te!==Ps)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",Z)),E}function dt(b){return typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement?(c.width=b.naturalWidth||b.width,c.height=b.naturalHeight||b.height):typeof VideoFrame<"u"&&b instanceof VideoFrame?(c.width=b.displayWidth,c.height=b.displayHeight):(c.width=b.width,c.height=b.height),c}this.allocateTextureUnit=Y,this.resetTextureUnits=L,this.setTexture2D=X,this.setTexture2DArray=D,this.setTexture3D=F,this.setTextureCube=C,this.rebindTextures=k,this.setupRenderTarget=Ve,this.updateRenderTargetMipmap=ve,this.updateMultisampleRenderTarget=ke,this.setupDepthRenderbuffer=Le,this.setupFrameBufferTexture=ye,this.useMultisampledRTT=G}function rD(n,e,t){const i=t.isWebGL2;function r(s,o=us){let a;const l=vt.getTransfer(o);if(s===Ps)return n.UNSIGNED_BYTE;if(s===g1)return n.UNSIGNED_SHORT_4_4_4_4;if(s===_1)return n.UNSIGNED_SHORT_5_5_5_1;if(s===IC)return n.BYTE;if(s===OC)return n.SHORT;if(s===kg)return n.UNSIGNED_SHORT;if(s===m1)return n.INT;if(s===hs)return n.UNSIGNED_INT;if(s===Nr)return n.FLOAT;if(s===bu)return i?n.HALF_FLOAT:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(s===FC)return n.ALPHA;if(s===Ji)return n.RGBA;if(s===kC)return n.LUMINANCE;if(s===zC)return n.LUMINANCE_ALPHA;if(s===Mo)return n.DEPTH_COMPONENT;if(s===el)return n.DEPTH_STENCIL;if(s===dm)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(s===BC)return n.RED;if(s===v1)return n.RED_INTEGER;if(s===HC)return n.RG;if(s===x1)return n.RG_INTEGER;if(s===y1)return n.RGBA_INTEGER;if(s===mh||s===gh||s===_h||s===vh)if(l===Ct)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(s===mh)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===gh)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===_h)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===vh)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(s===mh)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===gh)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===_h)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===vh)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===k0||s===z0||s===B0||s===H0)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(s===k0)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===z0)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===B0)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===H0)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===S1)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===G0||s===V0)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(s===G0)return l===Ct?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(s===V0)return l===Ct?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===W0||s===X0||s===j0||s===Y0||s===q0||s===$0||s===K0||s===Z0||s===Q0||s===J0||s===ev||s===tv||s===nv||s===iv)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(s===W0)return l===Ct?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===X0)return l===Ct?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===j0)return l===Ct?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===Y0)return l===Ct?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===q0)return l===Ct?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===$0)return l===Ct?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===K0)return l===Ct?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===Z0)return l===Ct?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===Q0)return l===Ct?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===J0)return l===Ct?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===ev)return l===Ct?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===tv)return l===Ct?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===nv)return l===Ct?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===iv)return l===Ct?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===xh||s===rv||s===sv)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(s===xh)return l===Ct?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===rv)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===sv)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===GC||s===ov||s===av||s===lv)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(s===xh)return a.COMPRESSED_RED_RGTC1_EXT;if(s===ov)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===av)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===lv)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===So?i?n.UNSIGNED_INT_24_8:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):n[s]!==void 0?n[s]:null}return{convert:r}}class sD extends Di{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Oc extends ri{constructor(){super(),this.isGroup=!0,this.type="Group"}}const oD={type:"move"};class jh{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Oc,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Oc,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new $,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new $),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Oc,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new $,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new $),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,u=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(u&&e.hand){o=!0;for(const g of e.hand.values()){const m=t.getJointPose(g,i),h=this._getHandJoint(u,g);m!==null&&(h.matrix.fromArray(m.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,h.jointRadius=m.radius),h.visible=m!==null}const c=u.joints["index-finger-tip"],f=u.joints["thumb-tip"],d=c.position.distanceTo(f.position),p=.02,v=.005;u.inputState.pinching&&d>p+v?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!u.inputState.pinching&&d<=p-v&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(oD)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),u!==null&&(u.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new Oc;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}const aD=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,lD=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepthEXT = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepthEXT = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class uD{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,i){if(this.texture===null){const r=new ii,s=e.properties.get(r);s.__webglTexture=t.texture,(t.depthNear!=i.depthNear||t.depthFar!=i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=r}}render(e,t){if(this.texture!==null){if(this.mesh===null){const i=t.cameras[0].viewport,r=new ks({extensions:{fragDepth:!0},vertexShader:aD,fragmentShader:lD,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new kr(new Ld(20,20),r)}e.render(this.mesh,t)}}reset(){this.texture=null,this.mesh=null}}class cD extends dl{constructor(e,t){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,u=null,c=null,f=null,d=null,p=null,v=null;const g=new uD,m=t.getContextAttributes();let h=null,x=null;const _=[],y=[],w=new ft;let T=null;const M=new Di;M.layers.enable(1),M.viewport=new mn;const P=new Di;P.layers.enable(2),P.viewport=new mn;const N=[M,P],S=new sD;S.layers.enable(1),S.layers.enable(2);let R=null,z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(V){let ee=_[V];return ee===void 0&&(ee=new jh,_[V]=ee),ee.getTargetRaySpace()},this.getControllerGrip=function(V){let ee=_[V];return ee===void 0&&(ee=new jh,_[V]=ee),ee.getGripSpace()},this.getHand=function(V){let ee=_[V];return ee===void 0&&(ee=new jh,_[V]=ee),ee.getHandSpace()};function K(V){const ee=y.indexOf(V.inputSource);if(ee===-1)return;const ce=_[ee];ce!==void 0&&(ce.update(V.inputSource,V.frame,u||o),ce.dispatchEvent({type:V.type,data:V.inputSource}))}function L(){r.removeEventListener("select",K),r.removeEventListener("selectstart",K),r.removeEventListener("selectend",K),r.removeEventListener("squeeze",K),r.removeEventListener("squeezestart",K),r.removeEventListener("squeezeend",K),r.removeEventListener("end",L),r.removeEventListener("inputsourceschange",Y);for(let V=0;V<_.length;V++){const ee=y[V];ee!==null&&(y[V]=null,_[V].disconnect(ee))}R=null,z=null,g.reset(),e.setRenderTarget(h),p=null,d=null,f=null,r=null,x=null,Oe.stop(),i.isPresenting=!1,e.setPixelRatio(T),e.setSize(w.width,w.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(V){s=V,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(V){a=V,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||o},this.setReferenceSpace=function(V){u=V},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return f},this.getFrame=function(){return v},this.getSession=function(){return r},this.setSession=async function(V){if(r=V,r!==null){if(h=e.getRenderTarget(),r.addEventListener("select",K),r.addEventListener("selectstart",K),r.addEventListener("selectend",K),r.addEventListener("squeeze",K),r.addEventListener("squeezestart",K),r.addEventListener("squeezeend",K),r.addEventListener("end",L),r.addEventListener("inputsourceschange",Y),m.xrCompatible!==!0&&await t.makeXRCompatible(),T=e.getPixelRatio(),e.getSize(w),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const ee={antialias:r.renderState.layers===void 0?m.antialias:!0,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,t,ee),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),x=new Io(p.framebufferWidth,p.framebufferHeight,{format:Ji,type:Ps,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let ee=null,ce=null,xe=null;m.depth&&(xe=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ee=m.stencil?el:Mo,ce=m.stencil?So:hs);const ye={colorFormat:t.RGBA8,depthFormat:xe,scaleFactor:s};f=new XRWebGLBinding(r,t),d=f.createProjectionLayer(ye),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),x=new Io(d.textureWidth,d.textureHeight,{format:Ji,type:Ps,depthTexture:new k1(d.textureWidth,d.textureHeight,ce,void 0,void 0,void 0,void 0,void 0,void 0,ee),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0});const _e=e.properties.get(x);_e.__ignoreDepthValues=d.ignoreDepthValues}x.isXRRenderTarget=!0,this.setFoveation(l),u=null,o=await r.requestReferenceSpace(a),Oe.setContext(r),Oe.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function Y(V){for(let ee=0;ee<V.removed.length;ee++){const ce=V.removed[ee],xe=y.indexOf(ce);xe>=0&&(y[xe]=null,_[xe].disconnect(ce))}for(let ee=0;ee<V.added.length;ee++){const ce=V.added[ee];let xe=y.indexOf(ce);if(xe===-1){for(let _e=0;_e<_.length;_e++)if(_e>=y.length){y.push(ce),xe=_e;break}else if(y[_e]===null){y[_e]=ce,xe=_e;break}if(xe===-1)break}const ye=_[xe];ye&&ye.connect(ce)}}const B=new $,X=new $;function D(V,ee,ce){B.setFromMatrixPosition(ee.matrixWorld),X.setFromMatrixPosition(ce.matrixWorld);const xe=B.distanceTo(X),ye=ee.projectionMatrix.elements,_e=ce.projectionMatrix.elements,et=ye[14]/(ye[10]-1),Le=ye[14]/(ye[10]+1),k=(ye[9]+1)/ye[5],Ve=(ye[9]-1)/ye[5],ve=(ye[8]-1)/ye[0],ke=(_e[8]+1)/_e[0],be=et*ve,G=et*ke,ze=xe/(-ve+ke),We=ze*-ve;ee.matrixWorld.decompose(V.position,V.quaternion,V.scale),V.translateX(We),V.translateZ(ze),V.matrixWorld.compose(V.position,V.quaternion,V.scale),V.matrixWorldInverse.copy(V.matrixWorld).invert();const dt=et+ze,b=Le+ze,E=be-We,Z=G+(xe-We),J=k*Le/b*dt,te=Ve*Le/b*dt;V.projectionMatrix.makePerspective(E,Z,J,te,dt,b),V.projectionMatrixInverse.copy(V.projectionMatrix).invert()}function F(V,ee){ee===null?V.matrixWorld.copy(V.matrix):V.matrixWorld.multiplyMatrices(ee.matrixWorld,V.matrix),V.matrixWorldInverse.copy(V.matrixWorld).invert()}this.updateCamera=function(V){if(r===null)return;g.texture!==null&&(V.near=g.depthNear,V.far=g.depthFar),S.near=P.near=M.near=V.near,S.far=P.far=M.far=V.far,(R!==S.near||z!==S.far)&&(r.updateRenderState({depthNear:S.near,depthFar:S.far}),R=S.near,z=S.far,M.near=R,M.far=z,P.near=R,P.far=z,M.updateProjectionMatrix(),P.updateProjectionMatrix(),V.updateProjectionMatrix());const ee=V.parent,ce=S.cameras;F(S,ee);for(let xe=0;xe<ce.length;xe++)F(ce[xe],ee);ce.length===2?D(S,M,P):S.projectionMatrix.copy(M.projectionMatrix),C(V,S,ee)};function C(V,ee,ce){ce===null?V.matrix.copy(ee.matrixWorld):(V.matrix.copy(ce.matrixWorld),V.matrix.invert(),V.matrix.multiply(ee.matrixWorld)),V.matrix.decompose(V.position,V.quaternion,V.scale),V.updateMatrixWorld(!0),V.projectionMatrix.copy(ee.projectionMatrix),V.projectionMatrixInverse.copy(ee.projectionMatrixInverse),V.isPerspectiveCamera&&(V.fov=hm*2*Math.atan(1/V.projectionMatrix.elements[5]),V.zoom=1)}this.getCamera=function(){return S},this.getFoveation=function(){if(!(d===null&&p===null))return l},this.setFoveation=function(V){l=V,d!==null&&(d.fixedFoveation=V),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=V)},this.hasDepthSensing=function(){return g.texture!==null};let Q=null;function se(V,ee){if(c=ee.getViewerPose(u||o),v=ee,c!==null){const ce=c.views;p!==null&&(e.setRenderTargetFramebuffer(x,p.framebuffer),e.setRenderTarget(x));let xe=!1;ce.length!==S.cameras.length&&(S.cameras.length=0,xe=!0);for(let _e=0;_e<ce.length;_e++){const et=ce[_e];let Le=null;if(p!==null)Le=p.getViewport(et);else{const Ve=f.getViewSubImage(d,et);Le=Ve.viewport,_e===0&&(e.setRenderTargetTextures(x,Ve.colorTexture,d.ignoreDepthValues?void 0:Ve.depthStencilTexture),e.setRenderTarget(x))}let k=N[_e];k===void 0&&(k=new Di,k.layers.enable(_e),k.viewport=new mn,N[_e]=k),k.matrix.fromArray(et.transform.matrix),k.matrix.decompose(k.position,k.quaternion,k.scale),k.projectionMatrix.fromArray(et.projectionMatrix),k.projectionMatrixInverse.copy(k.projectionMatrix).invert(),k.viewport.set(Le.x,Le.y,Le.width,Le.height),_e===0&&(S.matrix.copy(k.matrix),S.matrix.decompose(S.position,S.quaternion,S.scale)),xe===!0&&S.cameras.push(k)}const ye=r.enabledFeatures;if(ye&&ye.includes("depth-sensing")){const _e=f.getDepthInformation(ce[0]);_e&&_e.isValid&&_e.texture&&g.init(e,_e,r.renderState)}}for(let ce=0;ce<_.length;ce++){const xe=y[ce],ye=_[ce];xe!==null&&ye!==void 0&&ye.update(xe,ee,u||o)}g.render(e,S),Q&&Q(V,ee),ee.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ee}),v=null}const Oe=new F1;Oe.setAnimationLoop(se),this.setAnimationLoop=function(V){Q=V},this.dispose=function(){}}}const eo=new jr,fD=new Zt;function dD(n,e){function t(m,h){m.matrixAutoUpdate===!0&&m.updateMatrix(),h.value.copy(m.matrix)}function i(m,h){h.color.getRGB(m.fogColor.value,N1(n)),h.isFog?(m.fogNear.value=h.near,m.fogFar.value=h.far):h.isFogExp2&&(m.fogDensity.value=h.density)}function r(m,h,x,_,y){h.isMeshBasicMaterial||h.isMeshLambertMaterial?s(m,h):h.isMeshToonMaterial?(s(m,h),f(m,h)):h.isMeshPhongMaterial?(s(m,h),c(m,h)):h.isMeshStandardMaterial?(s(m,h),d(m,h),h.isMeshPhysicalMaterial&&p(m,h,y)):h.isMeshMatcapMaterial?(s(m,h),v(m,h)):h.isMeshDepthMaterial?s(m,h):h.isMeshDistanceMaterial?(s(m,h),g(m,h)):h.isMeshNormalMaterial?s(m,h):h.isLineBasicMaterial?(o(m,h),h.isLineDashedMaterial&&a(m,h)):h.isPointsMaterial?l(m,h,x,_):h.isSpriteMaterial?u(m,h):h.isShadowMaterial?(m.color.value.copy(h.color),m.opacity.value=h.opacity):h.isShaderMaterial&&(h.uniformsNeedUpdate=!1)}function s(m,h){m.opacity.value=h.opacity,h.color&&m.diffuse.value.copy(h.color),h.emissive&&m.emissive.value.copy(h.emissive).multiplyScalar(h.emissiveIntensity),h.map&&(m.map.value=h.map,t(h.map,m.mapTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,t(h.alphaMap,m.alphaMapTransform)),h.bumpMap&&(m.bumpMap.value=h.bumpMap,t(h.bumpMap,m.bumpMapTransform),m.bumpScale.value=h.bumpScale,h.side===ni&&(m.bumpScale.value*=-1)),h.normalMap&&(m.normalMap.value=h.normalMap,t(h.normalMap,m.normalMapTransform),m.normalScale.value.copy(h.normalScale),h.side===ni&&m.normalScale.value.negate()),h.displacementMap&&(m.displacementMap.value=h.displacementMap,t(h.displacementMap,m.displacementMapTransform),m.displacementScale.value=h.displacementScale,m.displacementBias.value=h.displacementBias),h.emissiveMap&&(m.emissiveMap.value=h.emissiveMap,t(h.emissiveMap,m.emissiveMapTransform)),h.specularMap&&(m.specularMap.value=h.specularMap,t(h.specularMap,m.specularMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest);const x=e.get(h),_=x.envMap,y=x.envMapRotation;if(_&&(m.envMap.value=_,eo.copy(y),eo.x*=-1,eo.y*=-1,eo.z*=-1,_.isCubeTexture&&_.isRenderTargetTexture===!1&&(eo.y*=-1,eo.z*=-1),m.envMapRotation.value.setFromMatrix4(fD.makeRotationFromEuler(eo)),m.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=h.reflectivity,m.ior.value=h.ior,m.refractionRatio.value=h.refractionRatio),h.lightMap){m.lightMap.value=h.lightMap;const w=n._useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=h.lightMapIntensity*w,t(h.lightMap,m.lightMapTransform)}h.aoMap&&(m.aoMap.value=h.aoMap,m.aoMapIntensity.value=h.aoMapIntensity,t(h.aoMap,m.aoMapTransform))}function o(m,h){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,h.map&&(m.map.value=h.map,t(h.map,m.mapTransform))}function a(m,h){m.dashSize.value=h.dashSize,m.totalSize.value=h.dashSize+h.gapSize,m.scale.value=h.scale}function l(m,h,x,_){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,m.size.value=h.size*x,m.scale.value=_*.5,h.map&&(m.map.value=h.map,t(h.map,m.uvTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,t(h.alphaMap,m.alphaMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest)}function u(m,h){m.diffuse.value.copy(h.color),m.opacity.value=h.opacity,m.rotation.value=h.rotation,h.map&&(m.map.value=h.map,t(h.map,m.mapTransform)),h.alphaMap&&(m.alphaMap.value=h.alphaMap,t(h.alphaMap,m.alphaMapTransform)),h.alphaTest>0&&(m.alphaTest.value=h.alphaTest)}function c(m,h){m.specular.value.copy(h.specular),m.shininess.value=Math.max(h.shininess,1e-4)}function f(m,h){h.gradientMap&&(m.gradientMap.value=h.gradientMap)}function d(m,h){m.metalness.value=h.metalness,h.metalnessMap&&(m.metalnessMap.value=h.metalnessMap,t(h.metalnessMap,m.metalnessMapTransform)),m.roughness.value=h.roughness,h.roughnessMap&&(m.roughnessMap.value=h.roughnessMap,t(h.roughnessMap,m.roughnessMapTransform)),e.get(h).envMap&&(m.envMapIntensity.value=h.envMapIntensity)}function p(m,h,x){m.ior.value=h.ior,h.sheen>0&&(m.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),m.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(m.sheenColorMap.value=h.sheenColorMap,t(h.sheenColorMap,m.sheenColorMapTransform)),h.sheenRoughnessMap&&(m.sheenRoughnessMap.value=h.sheenRoughnessMap,t(h.sheenRoughnessMap,m.sheenRoughnessMapTransform))),h.clearcoat>0&&(m.clearcoat.value=h.clearcoat,m.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(m.clearcoatMap.value=h.clearcoatMap,t(h.clearcoatMap,m.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,t(h.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(m.clearcoatNormalMap.value=h.clearcoatNormalMap,t(h.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===ni&&m.clearcoatNormalScale.value.negate())),h.iridescence>0&&(m.iridescence.value=h.iridescence,m.iridescenceIOR.value=h.iridescenceIOR,m.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(m.iridescenceMap.value=h.iridescenceMap,t(h.iridescenceMap,m.iridescenceMapTransform)),h.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=h.iridescenceThicknessMap,t(h.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),h.transmission>0&&(m.transmission.value=h.transmission,m.transmissionSamplerMap.value=x.texture,m.transmissionSamplerSize.value.set(x.width,x.height),h.transmissionMap&&(m.transmissionMap.value=h.transmissionMap,t(h.transmissionMap,m.transmissionMapTransform)),m.thickness.value=h.thickness,h.thicknessMap&&(m.thicknessMap.value=h.thicknessMap,t(h.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=h.attenuationDistance,m.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(m.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(m.anisotropyMap.value=h.anisotropyMap,t(h.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=h.specularIntensity,m.specularColor.value.copy(h.specularColor),h.specularColorMap&&(m.specularColorMap.value=h.specularColorMap,t(h.specularColorMap,m.specularColorMapTransform)),h.specularIntensityMap&&(m.specularIntensityMap.value=h.specularIntensityMap,t(h.specularIntensityMap,m.specularIntensityMapTransform))}function v(m,h){h.matcap&&(m.matcap.value=h.matcap)}function g(m,h){const x=e.get(h).light;m.referencePosition.value.setFromMatrixPosition(x.matrixWorld),m.nearDistance.value=x.shadow.camera.near,m.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function hD(n,e,t,i){let r={},s={},o=[];const a=t.isWebGL2?n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(x,_){const y=_.program;i.uniformBlockBinding(x,y)}function u(x,_){let y=r[x.id];y===void 0&&(v(x),y=c(x),r[x.id]=y,x.addEventListener("dispose",m));const w=_.program;i.updateUBOMapping(x,w);const T=e.render.frame;s[x.id]!==T&&(d(x),s[x.id]=T)}function c(x){const _=f();x.__bindingPointIndex=_;const y=n.createBuffer(),w=x.__size,T=x.usage;return n.bindBuffer(n.UNIFORM_BUFFER,y),n.bufferData(n.UNIFORM_BUFFER,w,T),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,_,y),y}function f(){for(let x=0;x<a;x++)if(o.indexOf(x)===-1)return o.push(x),x;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(x){const _=r[x.id],y=x.uniforms,w=x.__cache;n.bindBuffer(n.UNIFORM_BUFFER,_);for(let T=0,M=y.length;T<M;T++){const P=Array.isArray(y[T])?y[T]:[y[T]];for(let N=0,S=P.length;N<S;N++){const R=P[N];if(p(R,T,N,w)===!0){const z=R.__offset,K=Array.isArray(R.value)?R.value:[R.value];let L=0;for(let Y=0;Y<K.length;Y++){const B=K[Y],X=g(B);typeof B=="number"||typeof B=="boolean"?(R.__data[0]=B,n.bufferSubData(n.UNIFORM_BUFFER,z+L,R.__data)):B.isMatrix3?(R.__data[0]=B.elements[0],R.__data[1]=B.elements[1],R.__data[2]=B.elements[2],R.__data[3]=0,R.__data[4]=B.elements[3],R.__data[5]=B.elements[4],R.__data[6]=B.elements[5],R.__data[7]=0,R.__data[8]=B.elements[6],R.__data[9]=B.elements[7],R.__data[10]=B.elements[8],R.__data[11]=0):(B.toArray(R.__data,L),L+=X.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,z,R.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function p(x,_,y,w){const T=x.value,M=_+"_"+y;if(w[M]===void 0)return typeof T=="number"||typeof T=="boolean"?w[M]=T:w[M]=T.clone(),!0;{const P=w[M];if(typeof T=="number"||typeof T=="boolean"){if(P!==T)return w[M]=T,!0}else if(P.equals(T)===!1)return P.copy(T),!0}return!1}function v(x){const _=x.uniforms;let y=0;const w=16;for(let M=0,P=_.length;M<P;M++){const N=Array.isArray(_[M])?_[M]:[_[M]];for(let S=0,R=N.length;S<R;S++){const z=N[S],K=Array.isArray(z.value)?z.value:[z.value];for(let L=0,Y=K.length;L<Y;L++){const B=K[L],X=g(B),D=y%w;D!==0&&w-D<X.boundary&&(y+=w-D),z.__data=new Float32Array(X.storage/Float32Array.BYTES_PER_ELEMENT),z.__offset=y,y+=X.storage}}}const T=y%w;return T>0&&(y+=w-T),x.__size=y,x.__cache={},this}function g(x){const _={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(_.boundary=4,_.storage=4):x.isVector2?(_.boundary=8,_.storage=8):x.isVector3||x.isColor?(_.boundary=16,_.storage=12):x.isVector4?(_.boundary=16,_.storage=16):x.isMatrix3?(_.boundary=48,_.storage=48):x.isMatrix4?(_.boundary=64,_.storage=64):x.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",x),_}function m(x){const _=x.target;_.removeEventListener("dispose",m);const y=o.indexOf(_.__bindingPointIndex);o.splice(y,1),n.deleteBuffer(r[_.id]),delete r[_.id],delete s[_.id]}function h(){for(const x in r)n.deleteBuffer(r[x]);o=[],r={},s={}}return{bind:l,update:u,dispose:h}}class W1{constructor(e={}){const{canvas:t=tR(),context:i=null,depth:r=!0,stencil:s=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:u=!1,powerPreference:c="default",failIfMajorPerformanceCaveat:f=!1}=e;this.isWebGLRenderer=!0;let d;i!==null?d=i.getContextAttributes().alpha:d=o;const p=new Uint32Array(4),v=new Int32Array(4);let g=null,m=null;const h=[],x=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=sr,this._useLegacyLights=!1,this.toneMapping=bs,this.toneMappingExposure=1;const _=this;let y=!1,w=0,T=0,M=null,P=-1,N=null;const S=new mn,R=new mn;let z=null;const K=new mt(0);let L=0,Y=t.width,B=t.height,X=1,D=null,F=null;const C=new mn(0,0,Y,B),Q=new mn(0,0,Y,B);let se=!1;const Oe=new O1;let V=!1,ee=!1,ce=null;const xe=new Zt,ye=new ft,_e=new $,et={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Le(){return M===null?X:1}let k=i;function Ve(A,O){for(let q=0;q<A.length;q++){const W=A[q],H=t.getContext(W,O);if(H!==null)return H}return null}try{const A={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:u,powerPreference:c,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Fg}`),t.addEventListener("webglcontextlost",ut,!1),t.addEventListener("webglcontextrestored",U,!1),t.addEventListener("webglcontextcreationerror",fe,!1),k===null){const O=["webgl2","webgl","experimental-webgl"];if(_.isWebGL1Renderer===!0&&O.shift(),k=Ve(O,A),k===null)throw Ve(O)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&k instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),k.getShaderPrecisionFormat===void 0&&(k.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let ve,ke,be,G,ze,We,dt,b,E,Z,J,te,ne,Ae,Ne,ae,he,Xe,ie,Tt,je,Ue,Te,Ee;function Ze(){ve=new x2(k),ke=new d2(k,ve,e),ve.init(ke),Ue=new rD(k,ve,ke),be=new nD(k,ve,ke),G=new M2(k),ze=new GL,We=new iD(k,ve,be,ze,ke,Ue,G),dt=new p2(_),b=new v2(_),E=new CR(k,ke),Te=new c2(k,ve,E,ke),Z=new y2(k,E,G,Te),J=new A2(k,Z,E,G),ie=new w2(k,ke,We),ae=new h2(ze),te=new HL(_,dt,b,ve,ke,Te,ae),ne=new dD(_,ze),Ae=new WL,Ne=new KL(ve,ke),Xe=new u2(_,dt,b,be,J,d,l),he=new tD(_,J,ke),Ee=new hD(k,G,ke,be),Tt=new f2(k,ve,G,ke),je=new S2(k,ve,G,ke),G.programs=te.programs,_.capabilities=ke,_.extensions=ve,_.properties=ze,_.renderLists=Ae,_.shadowMap=he,_.state=be,_.info=G}Ze();const pe=new cD(_,k);this.xr=pe,this.getContext=function(){return k},this.getContextAttributes=function(){return k.getContextAttributes()},this.forceContextLoss=function(){const A=ve.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=ve.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return X},this.setPixelRatio=function(A){A!==void 0&&(X=A,this.setSize(Y,B,!1))},this.getSize=function(A){return A.set(Y,B)},this.setSize=function(A,O,q=!0){if(pe.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}Y=A,B=O,t.width=Math.floor(A*X),t.height=Math.floor(O*X),q===!0&&(t.style.width=A+"px",t.style.height=O+"px"),this.setViewport(0,0,A,O)},this.getDrawingBufferSize=function(A){return A.set(Y*X,B*X).floor()},this.setDrawingBufferSize=function(A,O,q){Y=A,B=O,X=q,t.width=Math.floor(A*q),t.height=Math.floor(O*q),this.setViewport(0,0,A,O)},this.getCurrentViewport=function(A){return A.copy(S)},this.getViewport=function(A){return A.copy(C)},this.setViewport=function(A,O,q,W){A.isVector4?C.set(A.x,A.y,A.z,A.w):C.set(A,O,q,W),be.viewport(S.copy(C).multiplyScalar(X).round())},this.getScissor=function(A){return A.copy(Q)},this.setScissor=function(A,O,q,W){A.isVector4?Q.set(A.x,A.y,A.z,A.w):Q.set(A,O,q,W),be.scissor(R.copy(Q).multiplyScalar(X).round())},this.getScissorTest=function(){return se},this.setScissorTest=function(A){be.setScissorTest(se=A)},this.setOpaqueSort=function(A){D=A},this.setTransparentSort=function(A){F=A},this.getClearColor=function(A){return A.copy(Xe.getClearColor())},this.setClearColor=function(){Xe.setClearColor.apply(Xe,arguments)},this.getClearAlpha=function(){return Xe.getClearAlpha()},this.setClearAlpha=function(){Xe.setClearAlpha.apply(Xe,arguments)},this.clear=function(A=!0,O=!0,q=!0){let W=0;if(A){let H=!1;if(M!==null){const de=M.texture.format;H=de===y1||de===x1||de===v1}if(H){const de=M.texture.type,we=de===Ps||de===hs||de===kg||de===So||de===g1||de===_1,He=Xe.getClearColor(),Re=Xe.getClearAlpha(),De=He.r,Ge=He.g,Ke=He.b;we?(p[0]=De,p[1]=Ge,p[2]=Ke,p[3]=Re,k.clearBufferuiv(k.COLOR,0,p)):(v[0]=De,v[1]=Ge,v[2]=Ke,v[3]=Re,k.clearBufferiv(k.COLOR,0,v))}else W|=k.COLOR_BUFFER_BIT}O&&(W|=k.DEPTH_BUFFER_BIT),q&&(W|=k.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),k.clear(W)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ut,!1),t.removeEventListener("webglcontextrestored",U,!1),t.removeEventListener("webglcontextcreationerror",fe,!1),Ae.dispose(),Ne.dispose(),ze.dispose(),dt.dispose(),b.dispose(),J.dispose(),Te.dispose(),Ee.dispose(),te.dispose(),pe.dispose(),pe.removeEventListener("sessionstart",Ce),pe.removeEventListener("sessionend",Ie),ce&&(ce.dispose(),ce=null),ue.stop()};function ut(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),y=!0}function U(){console.log("THREE.WebGLRenderer: Context Restored."),y=!1;const A=G.autoReset,O=he.enabled,q=he.autoUpdate,W=he.needsUpdate,H=he.type;Ze(),G.autoReset=A,he.enabled=O,he.autoUpdate=q,he.needsUpdate=W,he.type=H}function fe(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function j(A){const O=A.target;O.removeEventListener("dispose",j),le(O)}function le(A){ge(A),ze.remove(A)}function ge(A){const O=ze.get(A).programs;O!==void 0&&(O.forEach(function(q){te.releaseProgram(q)}),A.isShaderMaterial&&te.releaseShaderCache(A))}this.renderBufferDirect=function(A,O,q,W,H,de){O===null&&(O=et);const we=H.isMesh&&H.matrixWorld.determinant()<0,He=St(A,O,q,W,H);be.setMaterial(W,we);let Re=q.index,De=1;if(W.wireframe===!0){if(Re=Z.getWireframeAttribute(q),Re===void 0)return;De=2}const Ge=q.drawRange,Ke=q.attributes.position;let Pt=Ge.start*De,Jt=(Ge.start+Ge.count)*De;de!==null&&(Pt=Math.max(Pt,de.start*De),Jt=Math.min(Jt,(de.start+de.count)*De)),Re!==null?(Pt=Math.max(Pt,0),Jt=Math.min(Jt,Re.count)):Ke!=null&&(Pt=Math.max(Pt,0),Jt=Math.min(Jt,Ke.count));const pt=Jt-Pt;if(pt<0||pt===1/0)return;Te.setup(H,W,He,q,Re);let Dn,_t=Tt;if(Re!==null&&(Dn=E.get(Re),_t=je,_t.setIndex(Dn)),H.isMesh)W.wireframe===!0?(be.setLineWidth(W.wireframeLinewidth*Le()),_t.setMode(k.LINES)):_t.setMode(k.TRIANGLES);else if(H.isLine){let qe=W.linewidth;qe===void 0&&(qe=1),be.setLineWidth(qe*Le()),H.isLineSegments?_t.setMode(k.LINES):H.isLineLoop?_t.setMode(k.LINE_LOOP):_t.setMode(k.LINE_STRIP)}else H.isPoints?_t.setMode(k.POINTS):H.isSprite&&_t.setMode(k.TRIANGLES);if(H.isBatchedMesh)_t.renderMultiDraw(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount);else if(H.isInstancedMesh)_t.renderInstances(Pt,pt,H.count);else if(q.isInstancedBufferGeometry){const qe=q._maxInstanceCount!==void 0?q._maxInstanceCount:1/0,Fd=Math.min(q.instanceCount,qe);_t.renderInstances(Pt,pt,Fd)}else _t.render(Pt,pt)};function Ye(A,O,q){A.transparent===!0&&A.side===Dr&&A.forceSinglePass===!1?(A.side=ni,A.needsUpdate=!0,yt(A,O,q),A.side=Fs,A.needsUpdate=!0,yt(A,O,q),A.side=Dr):yt(A,O,q)}this.compile=function(A,O,q=null){q===null&&(q=A),m=Ne.get(q),m.init(),x.push(m),q.traverseVisible(function(H){H.isLight&&H.layers.test(O.layers)&&(m.pushLight(H),H.castShadow&&m.pushShadow(H))}),A!==q&&A.traverseVisible(function(H){H.isLight&&H.layers.test(O.layers)&&(m.pushLight(H),H.castShadow&&m.pushShadow(H))}),m.setupLights(_._useLegacyLights);const W=new Set;return A.traverse(function(H){const de=H.material;if(de)if(Array.isArray(de))for(let we=0;we<de.length;we++){const He=de[we];Ye(He,q,H),W.add(He)}else Ye(de,q,H),W.add(de)}),x.pop(),m=null,W},this.compileAsync=function(A,O,q=null){const W=this.compile(A,O,q);return new Promise(H=>{function de(){if(W.forEach(function(we){ze.get(we).currentProgram.isReady()&&W.delete(we)}),W.size===0){H(A);return}setTimeout(de,10)}ve.get("KHR_parallel_shader_compile")!==null?de():setTimeout(de,10)})};let ct=null;function Pe(A){ct&&ct(A)}function Ce(){ue.stop()}function Ie(){ue.start()}const ue=new F1;ue.setAnimationLoop(Pe),typeof self<"u"&&ue.setContext(self),this.setAnimationLoop=function(A){ct=A,pe.setAnimationLoop(A),A===null?ue.stop():ue.start()},pe.addEventListener("sessionstart",Ce),pe.addEventListener("sessionend",Ie),this.render=function(A,O){if(O!==void 0&&O.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(y===!0)return;A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),O.parent===null&&O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),pe.enabled===!0&&pe.isPresenting===!0&&(pe.cameraAutoUpdate===!0&&pe.updateCamera(O),O=pe.getCamera()),A.isScene===!0&&A.onBeforeRender(_,A,O,M),m=Ne.get(A,x.length),m.init(),x.push(m),xe.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),Oe.setFromProjectionMatrix(xe),ee=this.localClippingEnabled,V=ae.init(this.clippingPlanes,ee),g=Ae.get(A,h.length),g.init(),h.push(g),Be(A,O,0,_.sortObjects),g.finish(),_.sortObjects===!0&&g.sort(D,F),this.info.render.frame++,V===!0&&ae.beginShadows();const q=m.state.shadowsArray;if(he.render(q,A,O),V===!0&&ae.endShadows(),this.info.autoReset===!0&&this.info.reset(),(pe.enabled===!1||pe.isPresenting===!1||pe.hasDepthSensing()===!1)&&Xe.render(g,A),m.setupLights(_._useLegacyLights),O.isArrayCamera){const W=O.cameras;for(let H=0,de=W.length;H<de;H++){const we=W[H];Fe(g,A,we,we.viewport)}}else Fe(g,A,O);M!==null&&(We.updateMultisampleRenderTarget(M),We.updateRenderTargetMipmap(M)),A.isScene===!0&&A.onAfterRender(_,A,O),Te.resetDefaultState(),P=-1,N=null,x.pop(),x.length>0?m=x[x.length-1]:m=null,h.pop(),h.length>0?g=h[h.length-1]:g=null};function Be(A,O,q,W){if(A.visible===!1)return;if(A.layers.test(O.layers)){if(A.isGroup)q=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(O);else if(A.isLight)m.pushLight(A),A.castShadow&&m.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||Oe.intersectsSprite(A)){W&&_e.setFromMatrixPosition(A.matrixWorld).applyMatrix4(xe);const we=J.update(A),He=A.material;He.visible&&g.push(A,we,He,q,_e.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||Oe.intersectsObject(A))){const we=J.update(A),He=A.material;if(W&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),_e.copy(A.boundingSphere.center)):(we.boundingSphere===null&&we.computeBoundingSphere(),_e.copy(we.boundingSphere.center)),_e.applyMatrix4(A.matrixWorld).applyMatrix4(xe)),Array.isArray(He)){const Re=we.groups;for(let De=0,Ge=Re.length;De<Ge;De++){const Ke=Re[De],Pt=He[Ke.materialIndex];Pt&&Pt.visible&&g.push(A,we,Pt,q,_e.z,Ke)}}else He.visible&&g.push(A,we,He,q,_e.z,null)}}const de=A.children;for(let we=0,He=de.length;we<He;we++)Be(de[we],O,q,W)}function Fe(A,O,q,W){const H=A.opaque,de=A.transmissive,we=A.transparent;m.setupLightsView(q),V===!0&&ae.setGlobalState(_.clippingPlanes,q),de.length>0&&$e(H,de,O,q),W&&be.viewport(S.copy(W)),H.length>0&&Ut(H,O,q),de.length>0&&Ut(de,O,q),we.length>0&&Ut(we,O,q),be.buffers.depth.setTest(!0),be.buffers.depth.setMask(!0),be.buffers.color.setMask(!0),be.setPolygonOffset(!1)}function $e(A,O,q,W){if((q.isScene===!0?q.overrideMaterial:null)!==null)return;const de=ke.isWebGL2;ce===null&&(ce=new Io(1,1,{generateMipmaps:!0,type:ve.has("EXT_color_buffer_half_float")?bu:Ps,minFilter:go,samples:de?4:0})),_.getDrawingBufferSize(ye),de?ce.setSize(ye.x,ye.y):ce.setSize(pm(ye.x),pm(ye.y));const we=_.getRenderTarget();_.setRenderTarget(ce),_.getClearColor(K),L=_.getClearAlpha(),L<1&&_.setClearColor(16777215,.5),_.clear();const He=_.toneMapping;_.toneMapping=bs,Ut(A,q,W),We.updateMultisampleRenderTarget(ce),We.updateRenderTargetMipmap(ce);let Re=!1;for(let De=0,Ge=O.length;De<Ge;De++){const Ke=O[De],Pt=Ke.object,Jt=Ke.geometry,pt=Ke.material,Dn=Ke.group;if(pt.side===Dr&&Pt.layers.test(W.layers)){const _t=pt.side;pt.side=ni,pt.needsUpdate=!0,tt(Pt,q,W,Jt,pt,Dn),pt.side=_t,pt.needsUpdate=!0,Re=!0}}Re===!0&&(We.updateMultisampleRenderTarget(ce),We.updateRenderTargetMipmap(ce)),_.setRenderTarget(we),_.setClearColor(K,L),_.toneMapping=He}function Ut(A,O,q){const W=O.isScene===!0?O.overrideMaterial:null;for(let H=0,de=A.length;H<de;H++){const we=A[H],He=we.object,Re=we.geometry,De=W===null?we.material:W,Ge=we.group;He.layers.test(q.layers)&&tt(He,O,q,Re,De,Ge)}}function tt(A,O,q,W,H,de){A.onBeforeRender(_,O,q,W,H,de),A.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),H.onBeforeRender(_,O,q,W,A,de),H.transparent===!0&&H.side===Dr&&H.forceSinglePass===!1?(H.side=ni,H.needsUpdate=!0,_.renderBufferDirect(q,O,W,H,A,de),H.side=Fs,H.needsUpdate=!0,_.renderBufferDirect(q,O,W,H,A,de),H.side=Dr):_.renderBufferDirect(q,O,W,H,A,de),A.onAfterRender(_,O,q,W,H,de)}function yt(A,O,q){O.isScene!==!0&&(O=et);const W=ze.get(A),H=m.state.lights,de=m.state.shadowsArray,we=H.state.version,He=te.getParameters(A,H.state,de,O,q),Re=te.getProgramCacheKey(He);let De=W.programs;W.environment=A.isMeshStandardMaterial?O.environment:null,W.fog=O.fog,W.envMap=(A.isMeshStandardMaterial?b:dt).get(A.envMap||W.environment),W.envMapRotation=W.environment!==null&&A.envMap===null?O.environmentRotation:A.envMapRotation,De===void 0&&(A.addEventListener("dispose",j),De=new Map,W.programs=De);let Ge=De.get(Re);if(Ge!==void 0){if(W.currentProgram===Ge&&W.lightsStateVersion===we)return wt(A,He),Ge}else He.uniforms=te.getUniforms(A),A.onBuild(q,He,_),A.onBeforeCompile(He,_),Ge=te.acquireProgram(He,Re),De.set(Re,Ge),W.uniforms=He.uniforms;const Ke=W.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Ke.clippingPlanes=ae.uniform),wt(A,He),W.needsLights=ci(A),W.lightsStateVersion=we,W.needsLights&&(Ke.ambientLightColor.value=H.state.ambient,Ke.lightProbe.value=H.state.probe,Ke.directionalLights.value=H.state.directional,Ke.directionalLightShadows.value=H.state.directionalShadow,Ke.spotLights.value=H.state.spot,Ke.spotLightShadows.value=H.state.spotShadow,Ke.rectAreaLights.value=H.state.rectArea,Ke.ltc_1.value=H.state.rectAreaLTC1,Ke.ltc_2.value=H.state.rectAreaLTC2,Ke.pointLights.value=H.state.point,Ke.pointLightShadows.value=H.state.pointShadow,Ke.hemisphereLights.value=H.state.hemi,Ke.directionalShadowMap.value=H.state.directionalShadowMap,Ke.directionalShadowMatrix.value=H.state.directionalShadowMatrix,Ke.spotShadowMap.value=H.state.spotShadowMap,Ke.spotLightMatrix.value=H.state.spotLightMatrix,Ke.spotLightMap.value=H.state.spotLightMap,Ke.pointShadowMap.value=H.state.pointShadowMap,Ke.pointShadowMatrix.value=H.state.pointShadowMatrix),W.currentProgram=Ge,W.uniformsList=null,Ge}function Qt(A){if(A.uniformsList===null){const O=A.currentProgram.getUniforms();A.uniformsList=cf.seqWithValue(O.seq,A.uniforms)}return A.uniformsList}function wt(A,O){const q=ze.get(A);q.outputColorSpace=O.outputColorSpace,q.batching=O.batching,q.instancing=O.instancing,q.instancingColor=O.instancingColor,q.instancingMorph=O.instancingMorph,q.skinning=O.skinning,q.morphTargets=O.morphTargets,q.morphNormals=O.morphNormals,q.morphColors=O.morphColors,q.morphTargetsCount=O.morphTargetsCount,q.numClippingPlanes=O.numClippingPlanes,q.numIntersection=O.numClipIntersection,q.vertexAlphas=O.vertexAlphas,q.vertexTangents=O.vertexTangents,q.toneMapping=O.toneMapping}function St(A,O,q,W,H){O.isScene!==!0&&(O=et),We.resetTextureUnits();const de=O.fog,we=W.isMeshStandardMaterial?O.environment:null,He=M===null?_.outputColorSpace:M.isXRRenderTarget===!0?M.texture.colorSpace:Xs,Re=(W.isMeshStandardMaterial?b:dt).get(W.envMap||we),De=W.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,Ge=!!q.attributes.tangent&&(!!W.normalMap||W.anisotropy>0),Ke=!!q.morphAttributes.position,Pt=!!q.morphAttributes.normal,Jt=!!q.morphAttributes.color;let pt=bs;W.toneMapped&&(M===null||M.isXRRenderTarget===!0)&&(pt=_.toneMapping);const Dn=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,_t=Dn!==void 0?Dn.length:0,qe=ze.get(W),Fd=m.state.lights;if(V===!0&&(ee===!0||A!==N)){const Ci=A===N&&W.id===P;ae.setState(W,A,Ci)}let Lt=!1;W.version===qe.__version?(qe.needsLights&&qe.lightsStateVersion!==Fd.state.version||qe.outputColorSpace!==He||H.isBatchedMesh&&qe.batching===!1||!H.isBatchedMesh&&qe.batching===!0||H.isInstancedMesh&&qe.instancing===!1||!H.isInstancedMesh&&qe.instancing===!0||H.isSkinnedMesh&&qe.skinning===!1||!H.isSkinnedMesh&&qe.skinning===!0||H.isInstancedMesh&&qe.instancingColor===!0&&H.instanceColor===null||H.isInstancedMesh&&qe.instancingColor===!1&&H.instanceColor!==null||H.isInstancedMesh&&qe.instancingMorph===!0&&H.morphTexture===null||H.isInstancedMesh&&qe.instancingMorph===!1&&H.morphTexture!==null||qe.envMap!==Re||W.fog===!0&&qe.fog!==de||qe.numClippingPlanes!==void 0&&(qe.numClippingPlanes!==ae.numPlanes||qe.numIntersection!==ae.numIntersection)||qe.vertexAlphas!==De||qe.vertexTangents!==Ge||qe.morphTargets!==Ke||qe.morphNormals!==Pt||qe.morphColors!==Jt||qe.toneMapping!==pt||ke.isWebGL2===!0&&qe.morphTargetsCount!==_t)&&(Lt=!0):(Lt=!0,qe.__version=W.version);let Ys=qe.currentProgram;Lt===!0&&(Ys=yt(W,O,H));let d_=!1,pl=!1,kd=!1;const yn=Ys.getUniforms(),qs=qe.uniforms;if(be.useProgram(Ys.program)&&(d_=!0,pl=!0,kd=!0),W.id!==P&&(P=W.id,pl=!0),d_||N!==A){yn.setValue(k,"projectionMatrix",A.projectionMatrix),yn.setValue(k,"viewMatrix",A.matrixWorldInverse);const Ci=yn.map.cameraPosition;Ci!==void 0&&Ci.setValue(k,_e.setFromMatrixPosition(A.matrixWorld)),ke.logarithmicDepthBuffer&&yn.setValue(k,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(W.isMeshPhongMaterial||W.isMeshToonMaterial||W.isMeshLambertMaterial||W.isMeshBasicMaterial||W.isMeshStandardMaterial||W.isShaderMaterial)&&yn.setValue(k,"isOrthographic",A.isOrthographicCamera===!0),N!==A&&(N=A,pl=!0,kd=!0)}if(H.isSkinnedMesh){yn.setOptional(k,H,"bindMatrix"),yn.setOptional(k,H,"bindMatrixInverse");const Ci=H.skeleton;Ci&&(ke.floatVertexTextures?(Ci.boneTexture===null&&Ci.computeBoneTexture(),yn.setValue(k,"boneTexture",Ci.boneTexture,We)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}H.isBatchedMesh&&(yn.setOptional(k,H,"batchingTexture"),yn.setValue(k,"batchingTexture",H._matricesTexture,We));const zd=q.morphAttributes;if((zd.position!==void 0||zd.normal!==void 0||zd.color!==void 0&&ke.isWebGL2===!0)&&ie.update(H,q,Ys),(pl||qe.receiveShadow!==H.receiveShadow)&&(qe.receiveShadow=H.receiveShadow,yn.setValue(k,"receiveShadow",H.receiveShadow)),W.isMeshGouraudMaterial&&W.envMap!==null&&(qs.envMap.value=Re,qs.flipEnvMap.value=Re.isCubeTexture&&Re.isRenderTargetTexture===!1?-1:1),pl&&(yn.setValue(k,"toneMappingExposure",_.toneMappingExposure),qe.needsLights&&ht(qs,kd),de&&W.fog===!0&&ne.refreshFogUniforms(qs,de),ne.refreshMaterialUniforms(qs,W,X,B,ce),cf.upload(k,Qt(qe),qs,We)),W.isShaderMaterial&&W.uniformsNeedUpdate===!0&&(cf.upload(k,Qt(qe),qs,We),W.uniformsNeedUpdate=!1),W.isSpriteMaterial&&yn.setValue(k,"center",H.center),yn.setValue(k,"modelViewMatrix",H.modelViewMatrix),yn.setValue(k,"normalMatrix",H.normalMatrix),yn.setValue(k,"modelMatrix",H.matrixWorld),W.isShaderMaterial||W.isRawShaderMaterial){const Ci=W.uniformsGroups;for(let Bd=0,ME=Ci.length;Bd<ME;Bd++)if(ke.isWebGL2){const h_=Ci[Bd];Ee.update(h_,Ys),Ee.bind(h_,Ys)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Ys}function ht(A,O){A.ambientLightColor.needsUpdate=O,A.lightProbe.needsUpdate=O,A.directionalLights.needsUpdate=O,A.directionalLightShadows.needsUpdate=O,A.pointLights.needsUpdate=O,A.pointLightShadows.needsUpdate=O,A.spotLights.needsUpdate=O,A.spotLightShadows.needsUpdate=O,A.rectAreaLights.needsUpdate=O,A.hemisphereLights.needsUpdate=O}function ci(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return w},this.getActiveMipmapLevel=function(){return T},this.getRenderTarget=function(){return M},this.setRenderTargetTextures=function(A,O,q){ze.get(A.texture).__webglTexture=O,ze.get(A.depthTexture).__webglTexture=q;const W=ze.get(A);W.__hasExternalTextures=!0,W.__autoAllocateDepthBuffer=q===void 0,W.__autoAllocateDepthBuffer||ve.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),W.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(A,O){const q=ze.get(A);q.__webglFramebuffer=O,q.__useDefaultFramebuffer=O===void 0},this.setRenderTarget=function(A,O=0,q=0){M=A,w=O,T=q;let W=!0,H=null,de=!1,we=!1;if(A){const Re=ze.get(A);Re.__useDefaultFramebuffer!==void 0?(be.bindFramebuffer(k.FRAMEBUFFER,null),W=!1):Re.__webglFramebuffer===void 0?We.setupRenderTarget(A):Re.__hasExternalTextures&&We.rebindTextures(A,ze.get(A.texture).__webglTexture,ze.get(A.depthTexture).__webglTexture);const De=A.texture;(De.isData3DTexture||De.isDataArrayTexture||De.isCompressedArrayTexture)&&(we=!0);const Ge=ze.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(Ge[O])?H=Ge[O][q]:H=Ge[O],de=!0):ke.isWebGL2&&A.samples>0&&We.useMultisampledRTT(A)===!1?H=ze.get(A).__webglMultisampledFramebuffer:Array.isArray(Ge)?H=Ge[q]:H=Ge,S.copy(A.viewport),R.copy(A.scissor),z=A.scissorTest}else S.copy(C).multiplyScalar(X).floor(),R.copy(Q).multiplyScalar(X).floor(),z=se;if(be.bindFramebuffer(k.FRAMEBUFFER,H)&&ke.drawBuffers&&W&&be.drawBuffers(A,H),be.viewport(S),be.scissor(R),be.setScissorTest(z),de){const Re=ze.get(A.texture);k.framebufferTexture2D(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_CUBE_MAP_POSITIVE_X+O,Re.__webglTexture,q)}else if(we){const Re=ze.get(A.texture),De=O||0;k.framebufferTextureLayer(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,Re.__webglTexture,q||0,De)}P=-1},this.readRenderTargetPixels=function(A,O,q,W,H,de,we){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let He=ze.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&we!==void 0&&(He=He[we]),He){be.bindFramebuffer(k.FRAMEBUFFER,He);try{const Re=A.texture,De=Re.format,Ge=Re.type;if(De!==Ji&&Ue.convert(De)!==k.getParameter(k.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Ke=Ge===bu&&(ve.has("EXT_color_buffer_half_float")||ke.isWebGL2&&ve.has("EXT_color_buffer_float"));if(Ge!==Ps&&Ue.convert(Ge)!==k.getParameter(k.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Ge===Nr&&(ke.isWebGL2||ve.has("OES_texture_float")||ve.has("WEBGL_color_buffer_float")))&&!Ke){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}O>=0&&O<=A.width-W&&q>=0&&q<=A.height-H&&k.readPixels(O,q,W,H,Ue.convert(De),Ue.convert(Ge),de)}finally{const Re=M!==null?ze.get(M).__webglFramebuffer:null;be.bindFramebuffer(k.FRAMEBUFFER,Re)}}},this.copyFramebufferToTexture=function(A,O,q=0){const W=Math.pow(2,-q),H=Math.floor(O.image.width*W),de=Math.floor(O.image.height*W);We.setTexture2D(O,0),k.copyTexSubImage2D(k.TEXTURE_2D,q,0,0,A.x,A.y,H,de),be.unbindTexture()},this.copyTextureToTexture=function(A,O,q,W=0){const H=O.image.width,de=O.image.height,we=Ue.convert(q.format),He=Ue.convert(q.type);We.setTexture2D(q,0),k.pixelStorei(k.UNPACK_FLIP_Y_WEBGL,q.flipY),k.pixelStorei(k.UNPACK_PREMULTIPLY_ALPHA_WEBGL,q.premultiplyAlpha),k.pixelStorei(k.UNPACK_ALIGNMENT,q.unpackAlignment),O.isDataTexture?k.texSubImage2D(k.TEXTURE_2D,W,A.x,A.y,H,de,we,He,O.image.data):O.isCompressedTexture?k.compressedTexSubImage2D(k.TEXTURE_2D,W,A.x,A.y,O.mipmaps[0].width,O.mipmaps[0].height,we,O.mipmaps[0].data):k.texSubImage2D(k.TEXTURE_2D,W,A.x,A.y,we,He,O.image),W===0&&q.generateMipmaps&&k.generateMipmap(k.TEXTURE_2D),be.unbindTexture()},this.copyTextureToTexture3D=function(A,O,q,W,H=0){if(_.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const de=Math.round(A.max.x-A.min.x),we=Math.round(A.max.y-A.min.y),He=A.max.z-A.min.z+1,Re=Ue.convert(W.format),De=Ue.convert(W.type);let Ge;if(W.isData3DTexture)We.setTexture3D(W,0),Ge=k.TEXTURE_3D;else if(W.isDataArrayTexture||W.isCompressedArrayTexture)We.setTexture2DArray(W,0),Ge=k.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}k.pixelStorei(k.UNPACK_FLIP_Y_WEBGL,W.flipY),k.pixelStorei(k.UNPACK_PREMULTIPLY_ALPHA_WEBGL,W.premultiplyAlpha),k.pixelStorei(k.UNPACK_ALIGNMENT,W.unpackAlignment);const Ke=k.getParameter(k.UNPACK_ROW_LENGTH),Pt=k.getParameter(k.UNPACK_IMAGE_HEIGHT),Jt=k.getParameter(k.UNPACK_SKIP_PIXELS),pt=k.getParameter(k.UNPACK_SKIP_ROWS),Dn=k.getParameter(k.UNPACK_SKIP_IMAGES),_t=q.isCompressedTexture?q.mipmaps[H]:q.image;k.pixelStorei(k.UNPACK_ROW_LENGTH,_t.width),k.pixelStorei(k.UNPACK_IMAGE_HEIGHT,_t.height),k.pixelStorei(k.UNPACK_SKIP_PIXELS,A.min.x),k.pixelStorei(k.UNPACK_SKIP_ROWS,A.min.y),k.pixelStorei(k.UNPACK_SKIP_IMAGES,A.min.z),q.isDataTexture||q.isData3DTexture?k.texSubImage3D(Ge,H,O.x,O.y,O.z,de,we,He,Re,De,_t.data):W.isCompressedArrayTexture?k.compressedTexSubImage3D(Ge,H,O.x,O.y,O.z,de,we,He,Re,_t.data):k.texSubImage3D(Ge,H,O.x,O.y,O.z,de,we,He,Re,De,_t),k.pixelStorei(k.UNPACK_ROW_LENGTH,Ke),k.pixelStorei(k.UNPACK_IMAGE_HEIGHT,Pt),k.pixelStorei(k.UNPACK_SKIP_PIXELS,Jt),k.pixelStorei(k.UNPACK_SKIP_ROWS,pt),k.pixelStorei(k.UNPACK_SKIP_IMAGES,Dn),H===0&&W.generateMipmaps&&k.generateMipmap(Ge),be.unbindTexture()},this.initTexture=function(A){A.isCubeTexture?We.setTextureCube(A,0):A.isData3DTexture?We.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?We.setTexture2DArray(A,0):We.setTexture2D(A,0),be.unbindTexture()},this.resetState=function(){w=0,T=0,M=null,be.reset(),Te.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Fr}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===zg?"display-p3":"srgb",t.unpackColorSpace=vt.workingColorSpace===bd?"display-p3":"srgb"}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class pD extends W1{}pD.prototype.isWebGL1Renderer=!0;class mD extends ri{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new jr,this.environmentRotation=new jr,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class X1 extends $u{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new mt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Jv=new $,ex=new $,tx=new Zt,Yh=new C1,Fc=new Pd;class nx extends ri{constructor(e=new xr,t=new X1){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let r=1,s=t.count;r<s;r++)Jv.fromBufferAttribute(t,r-1),ex.fromBufferAttribute(t,r),i[r]=i[r-1],i[r]+=Jv.distanceTo(ex);e.setAttribute("lineDistance",new Ls(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const i=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Fc.copy(i.boundingSphere),Fc.applyMatrix4(r),Fc.radius+=s,e.ray.intersectsSphere(Fc)===!1)return;tx.copy(r).invert(),Yh.copy(e.ray).applyMatrix4(tx);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,u=new $,c=new $,f=new $,d=new $,p=this.isLineSegments?2:1,v=i.index,m=i.attributes.position;if(v!==null){const h=Math.max(0,o.start),x=Math.min(v.count,o.start+o.count);for(let _=h,y=x-1;_<y;_+=p){const w=v.getX(_),T=v.getX(_+1);if(u.fromBufferAttribute(m,w),c.fromBufferAttribute(m,T),Yh.distanceSqToSegment(u,c,d,f)>l)continue;d.applyMatrix4(this.matrixWorld);const P=e.ray.origin.distanceTo(d);P<e.near||P>e.far||t.push({distance:P,point:f.clone().applyMatrix4(this.matrixWorld),index:_,face:null,faceIndex:null,object:this})}}else{const h=Math.max(0,o.start),x=Math.min(m.count,o.start+o.count);for(let _=h,y=x-1;_<y;_+=p){if(u.fromBufferAttribute(m,_),c.fromBufferAttribute(m,_+1),Yh.distanceSqToSegment(u,c,d,f)>l)continue;d.applyMatrix4(this.matrixWorld);const T=e.ray.origin.distanceTo(d);T<e.near||T>e.far||t.push({distance:T,point:f.clone().applyMatrix4(this.matrixWorld),index:_,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Fg}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Fg);function br(n){if(n===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}function j1(n,e){n.prototype=Object.create(e.prototype),n.prototype.constructor=n,n.__proto__=e}/*!
 * GSAP 3.12.5
 * https://gsap.com
 *
 * @license Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var Mi={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},nl={duration:.5,overwrite:!1,delay:0},Hg,bn,Nt,Oi=1e8,Mt=1/Oi,gm=Math.PI*2,gD=gm/4,_D=0,Y1=Math.sqrt,vD=Math.cos,xD=Math.sin,hn=function(e){return typeof e=="string"},Gt=function(e){return typeof e=="function"},Yr=function(e){return typeof e=="number"},Gg=function(e){return typeof e>"u"},yr=function(e){return typeof e=="object"},si=function(e){return e!==!1},Vg=function(){return typeof window<"u"},kc=function(e){return Gt(e)||hn(e)},q1=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},Pn=Array.isArray,_m=/(?:-?\.?\d|\.)+/gi,$1=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,Ra=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,qh=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,K1=/[+-]=-?[.\d]+/,Z1=/[^,'"\[\]\s]+/gi,yD=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,Ft,or,vm,Wg,Ti={},Qf={},Q1,J1=function(e){return(Qf=Oo(e,Ti))&&ui},Xg=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},Pu=function(e,t){return!t&&console.warn(e)},eM=function(e,t){return e&&(Ti[e]=t)&&Qf&&(Qf[e]=t)||Ti},Lu=function(){return 0},SD={suppressEvents:!0,isStart:!0,kill:!1},ff={suppressEvents:!0,kill:!1},MD={suppressEvents:!0},jg={},Ds=[],xm={},tM,gi={},$h={},ix=30,df=[],Yg="",qg=function(e){var t=e[0],i,r;if(yr(t)||Gt(t)||(e=[e]),!(i=(t._gsap||{}).harness)){for(r=df.length;r--&&!df[r].targetTest(t););i=df[r]}for(r=e.length;r--;)e[r]&&(e[r]._gsap||(e[r]._gsap=new wM(e[r],i)))||e.splice(r,1);return e},Eo=function(e){return e._gsap||qg(Fi(e))[0]._gsap},nM=function(e,t,i){return(i=e[t])&&Gt(i)?e[t]():Gg(i)&&e.getAttribute&&e.getAttribute(t)||i},oi=function(e,t){return(e=e.split(",")).forEach(t)||e},Vt=function(e){return Math.round(e*1e5)/1e5||0},fn=function(e){return Math.round(e*1e7)/1e7||0},za=function(e,t){var i=t.charAt(0),r=parseFloat(t.substr(2));return e=parseFloat(e),i==="+"?e+r:i==="-"?e-r:i==="*"?e*r:e/r},ED=function(e,t){for(var i=t.length,r=0;e.indexOf(t[r])<0&&++r<i;);return r<i},Jf=function(){var e=Ds.length,t=Ds.slice(0),i,r;for(xm={},Ds.length=0,i=0;i<e;i++)r=t[i],r&&r._lazy&&(r.render(r._lazy[0],r._lazy[1],!0)._lazy=0)},iM=function(e,t,i,r){Ds.length&&!bn&&Jf(),e.render(t,i,bn&&t<0&&(e._initted||e._startAt)),Ds.length&&!bn&&Jf()},rM=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(Z1).length<2?t:hn(e)?e.trim():e},sM=function(e){return e},Gi=function(e,t){for(var i in t)i in e||(e[i]=t[i]);return e},TD=function(e){return function(t,i){for(var r in i)r in t||r==="duration"&&e||r==="ease"||(t[r]=i[r])}},Oo=function(e,t){for(var i in t)e[i]=t[i];return e},rx=function n(e,t){for(var i in t)i!=="__proto__"&&i!=="constructor"&&i!=="prototype"&&(e[i]=yr(t[i])?n(e[i]||(e[i]={}),t[i]):t[i]);return e},ed=function(e,t){var i={},r;for(r in e)r in t||(i[r]=e[r]);return i},Ql=function(e){var t=e.parent||Ft,i=e.keyframes?TD(Pn(e.keyframes)):Gi;if(si(e.inherit))for(;t;)i(e,t.vars.defaults),t=t.parent||t._dp;return e},wD=function(e,t){for(var i=e.length,r=i===t.length;r&&i--&&e[i]===t[i];);return i<0},oM=function(e,t,i,r,s){var o=e[r],a;if(s)for(a=t[s];o&&o[s]>a;)o=o._prev;return o?(t._next=o._next,o._next=t):(t._next=e[i],e[i]=t),t._next?t._next._prev=t:e[r]=t,t._prev=o,t.parent=t._dp=e,t},Nd=function(e,t,i,r){i===void 0&&(i="_first"),r===void 0&&(r="_last");var s=t._prev,o=t._next;s?s._next=o:e[i]===t&&(e[i]=o),o?o._prev=s:e[r]===t&&(e[r]=s),t._next=t._prev=t.parent=null},zs=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},To=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var i=e;i;)i._dirty=1,i=i.parent;return e},AD=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},ym=function(e,t,i,r){return e._startAt&&(bn?e._startAt.revert(ff):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,r))},CD=function n(e){return!e||e._ts&&n(e.parent)},sx=function(e){return e._repeat?il(e._tTime,e=e.duration()+e._rDelay)*e:0},il=function(e,t){var i=Math.floor(e/=t);return e&&i===e?i-1:i},td=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},Ud=function(e){return e._end=fn(e._start+(e._tDur/Math.abs(e._ts||e._rts||Mt)||0))},Id=function(e,t){var i=e._dp;return i&&i.smoothChildTiming&&e._ts&&(e._start=fn(i._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),Ud(e),i._dirty||To(i,e)),e},aM=function(e,t){var i;if((t._time||!t._dur&&t._initted||t._start<e._time&&(t._dur||!t.add))&&(i=td(e.rawTime(),t),(!t._dur||Zu(0,t.totalDuration(),i)-t._tTime>Mt)&&t.render(i,!0)),To(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(i=e;i._dp;)i.rawTime()>=0&&i.totalTime(i._tTime),i=i._dp;e._zTime=-Mt}},fr=function(e,t,i,r){return t.parent&&zs(t),t._start=fn((Yr(i)?i:i||e!==Ft?bi(e,i,t):e._time)+t._delay),t._end=fn(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),oM(e,t,"_first","_last",e._sort?"_start":0),Sm(t)||(e._recent=t),r||aM(e,t),e._ts<0&&Id(e,e._tTime),e},lM=function(e,t){return(Ti.ScrollTrigger||Xg("scrollTrigger",t))&&Ti.ScrollTrigger.create(t,e)},uM=function(e,t,i,r,s){if(Kg(e,t,s),!e._initted)return 1;if(!i&&e._pt&&!bn&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&tM!==_i.frame)return Ds.push(e),e._lazy=[s,r],1},RD=function n(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||n(t))},Sm=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},bD=function(e,t,i,r){var s=e.ratio,o=t<0||!t&&(!e._start&&RD(e)&&!(!e._initted&&Sm(e))||(e._ts<0||e._dp._ts<0)&&!Sm(e))?0:1,a=e._rDelay,l=0,u,c,f;if(a&&e._repeat&&(l=Zu(0,e._tDur,t),c=il(l,a),e._yoyo&&c&1&&(o=1-o),c!==il(e._tTime,a)&&(s=1-o,e.vars.repeatRefresh&&e._initted&&e.invalidate())),o!==s||bn||r||e._zTime===Mt||!t&&e._zTime){if(!e._initted&&uM(e,t,r,i,l))return;for(f=e._zTime,e._zTime=t||(i?Mt:0),i||(i=t&&!f),e.ratio=o,e._from&&(o=1-o),e._time=0,e._tTime=l,u=e._pt;u;)u.r(o,u.d),u=u._next;t<0&&ym(e,t,i,!0),e._onUpdate&&!i&&yi(e,"onUpdate"),l&&e._repeat&&!i&&e.parent&&yi(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===o&&(o&&zs(e,1),!i&&!bn&&(yi(e,o?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},PD=function(e,t,i){var r;if(i>t)for(r=e._first;r&&r._start<=i;){if(r.data==="isPause"&&r._start>t)return r;r=r._next}else for(r=e._last;r&&r._start>=i;){if(r.data==="isPause"&&r._start<t)return r;r=r._prev}},rl=function(e,t,i,r){var s=e._repeat,o=fn(t)||0,a=e._tTime/e._tDur;return a&&!r&&(e._time*=o/e._dur),e._dur=o,e._tDur=s?s<0?1e10:fn(o*(s+1)+e._rDelay*s):o,a>0&&!r&&Id(e,e._tTime=e._tDur*a),e.parent&&Ud(e),i||To(e.parent,e),e},ox=function(e){return e instanceof Hn?To(e):rl(e,e._dur)},LD={_start:0,endTime:Lu,totalDuration:Lu},bi=function n(e,t,i){var r=e.labels,s=e._recent||LD,o=e.duration()>=Oi?s.endTime(!1):e._dur,a,l,u;return hn(t)&&(isNaN(t)||t in r)?(l=t.charAt(0),u=t.substr(-1)==="%",a=t.indexOf("="),l==="<"||l===">"?(a>=0&&(t=t.replace(/=/,"")),(l==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(t.substr(1))||0)*(u?(a<0?s:i).totalDuration()/100:1)):a<0?(t in r||(r[t]=o),r[t]):(l=parseFloat(t.charAt(a-1)+t.substr(a+1)),u&&i&&(l=l/100*(Pn(i)?i[0]:i).totalDuration()),a>1?n(e,t.substr(0,a-1),i)+l:o+l)):t==null?o:+t},Jl=function(e,t,i){var r=Yr(t[1]),s=(r?2:1)+(e<2?0:1),o=t[s],a,l;if(r&&(o.duration=t[1]),o.parent=i,e){for(a=o,l=i;l&&!("immediateRender"in a);)a=l.vars.defaults||{},l=si(l.vars.inherit)&&l.parent;o.immediateRender=si(a.immediateRender),e<2?o.runBackwards=1:o.startAt=t[s-1]}return new qt(t[0],o,t[s+1])},js=function(e,t){return e||e===0?t(e):t},Zu=function(e,t,i){return i<e?e:i>t?t:i},Rn=function(e,t){return!hn(e)||!(t=yD.exec(e))?"":t[1]},DD=function(e,t,i){return js(i,function(r){return Zu(e,t,r)})},Mm=[].slice,cM=function(e,t){return e&&yr(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&yr(e[0]))&&!e.nodeType&&e!==or},ND=function(e,t,i){return i===void 0&&(i=[]),e.forEach(function(r){var s;return hn(r)&&!t||cM(r,1)?(s=i).push.apply(s,Fi(r)):i.push(r)})||i},Fi=function(e,t,i){return Nt&&!t&&Nt.selector?Nt.selector(e):hn(e)&&!i&&(vm||!sl())?Mm.call((t||Wg).querySelectorAll(e),0):Pn(e)?ND(e,i):cM(e)?Mm.call(e,0):e?[e]:[]},Em=function(e){return e=Fi(e)[0]||Pu("Invalid scope")||{},function(t){var i=e.current||e.nativeElement||e;return Fi(t,i.querySelectorAll?i:i===e?Pu("Invalid scope")||Wg.createElement("div"):e)}},fM=function(e){return e.sort(function(){return .5-Math.random()})},dM=function(e){if(Gt(e))return e;var t=yr(e)?e:{each:e},i=wo(t.ease),r=t.from||0,s=parseFloat(t.base)||0,o={},a=r>0&&r<1,l=isNaN(r)||a,u=t.axis,c=r,f=r;return hn(r)?c=f={center:.5,edges:.5,end:1}[r]||0:!a&&l&&(c=r[0],f=r[1]),function(d,p,v){var g=(v||t).length,m=o[g],h,x,_,y,w,T,M,P,N;if(!m){if(N=t.grid==="auto"?0:(t.grid||[1,Oi])[1],!N){for(M=-Oi;M<(M=v[N++].getBoundingClientRect().left)&&N<g;);N<g&&N--}for(m=o[g]=[],h=l?Math.min(N,g)*c-.5:r%N,x=N===Oi?0:l?g*f/N-.5:r/N|0,M=0,P=Oi,T=0;T<g;T++)_=T%N-h,y=x-(T/N|0),m[T]=w=u?Math.abs(u==="y"?y:_):Y1(_*_+y*y),w>M&&(M=w),w<P&&(P=w);r==="random"&&fM(m),m.max=M-P,m.min=P,m.v=g=(parseFloat(t.amount)||parseFloat(t.each)*(N>g?g-1:u?u==="y"?g/N:N:Math.max(N,g/N))||0)*(r==="edges"?-1:1),m.b=g<0?s-g:s,m.u=Rn(t.amount||t.each)||0,i=i&&g<0?MM(i):i}return g=(m[d]-m.min)/m.max||0,fn(m.b+(i?i(g):g)*m.v)+m.u}},Tm=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(i){var r=fn(Math.round(parseFloat(i)/e)*e*t);return(r-r%1)/t+(Yr(i)?0:Rn(i))}},hM=function(e,t){var i=Pn(e),r,s;return!i&&yr(e)&&(r=i=e.radius||Oi,e.values?(e=Fi(e.values),(s=!Yr(e[0]))&&(r*=r)):e=Tm(e.increment)),js(t,i?Gt(e)?function(o){return s=e(o),Math.abs(s-o)<=r?s:o}:function(o){for(var a=parseFloat(s?o.x:o),l=parseFloat(s?o.y:0),u=Oi,c=0,f=e.length,d,p;f--;)s?(d=e[f].x-a,p=e[f].y-l,d=d*d+p*p):d=Math.abs(e[f]-a),d<u&&(u=d,c=f);return c=!r||u<=r?e[c]:o,s||c===o||Yr(o)?c:c+Rn(o)}:Tm(e))},pM=function(e,t,i,r){return js(Pn(e)?!t:i===!0?!!(i=0):!r,function(){return Pn(e)?e[~~(Math.random()*e.length)]:(i=i||1e-5)&&(r=i<1?Math.pow(10,(i+"").length-2):1)&&Math.floor(Math.round((e-i/2+Math.random()*(t-e+i*.99))/i)*i*r)/r})},UD=function(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];return function(r){return t.reduce(function(s,o){return o(s)},r)}},ID=function(e,t){return function(i){return e(parseFloat(i))+(t||Rn(i))}},OD=function(e,t,i){return gM(e,t,0,1,i)},mM=function(e,t,i){return js(i,function(r){return e[~~t(r)]})},FD=function n(e,t,i){var r=t-e;return Pn(e)?mM(e,n(0,e.length),t):js(i,function(s){return(r+(s-e)%r)%r+e})},kD=function n(e,t,i){var r=t-e,s=r*2;return Pn(e)?mM(e,n(0,e.length-1),t):js(i,function(o){return o=(s+(o-e)%s)%s||0,e+(o>r?s-o:o)})},Du=function(e){for(var t=0,i="",r,s,o,a;~(r=e.indexOf("random(",t));)o=e.indexOf(")",r),a=e.charAt(r+7)==="[",s=e.substr(r+7,o-r-7).match(a?Z1:_m),i+=e.substr(t,r-t)+pM(a?s:+s[0],a?0:+s[1],+s[2]||1e-5),t=o+1;return i+e.substr(t,e.length-t)},gM=function(e,t,i,r,s){var o=t-e,a=r-i;return js(s,function(l){return i+((l-e)/o*a||0)})},zD=function n(e,t,i,r){var s=isNaN(e+t)?0:function(p){return(1-p)*e+p*t};if(!s){var o=hn(e),a={},l,u,c,f,d;if(i===!0&&(r=1)&&(i=null),o)e={p:e},t={p:t};else if(Pn(e)&&!Pn(t)){for(c=[],f=e.length,d=f-2,u=1;u<f;u++)c.push(n(e[u-1],e[u]));f--,s=function(v){v*=f;var g=Math.min(d,~~v);return c[g](v-g)},i=t}else r||(e=Oo(Pn(e)?[]:{},e));if(!c){for(l in t)$g.call(a,e,l,"get",t[l]);s=function(v){return Jg(v,a)||(o?e.p:e)}}}return js(i,s)},ax=function(e,t,i){var r=e.labels,s=Oi,o,a,l;for(o in r)a=r[o]-t,a<0==!!i&&a&&s>(a=Math.abs(a))&&(l=o,s=a);return l},yi=function(e,t,i){var r=e.vars,s=r[t],o=Nt,a=e._ctx,l,u,c;if(s)return l=r[t+"Params"],u=r.callbackScope||e,i&&Ds.length&&Jf(),a&&(Nt=a),c=l?s.apply(u,l):s.call(u),Nt=o,c},Ol=function(e){return zs(e),e.scrollTrigger&&e.scrollTrigger.kill(!!bn),e.progress()<1&&yi(e,"onInterrupt"),e},ba,_M=[],vM=function(e){if(e)if(e=!e.name&&e.default||e,Vg()||e.headless){var t=e.name,i=Gt(e),r=t&&!i&&e.init?function(){this._props=[]}:e,s={init:Lu,render:Jg,add:$g,kill:tN,modifier:eN,rawVars:0},o={targetTest:0,get:0,getSetter:Qg,aliases:{},register:0};if(sl(),e!==r){if(gi[t])return;Gi(r,Gi(ed(e,s),o)),Oo(r.prototype,Oo(s,ed(e,o))),gi[r.prop=t]=r,e.targetTest&&(df.push(r),jg[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}eM(t,r),e.register&&e.register(ui,r,ai)}else _M.push(e)},xt=255,Fl={aqua:[0,xt,xt],lime:[0,xt,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,xt],navy:[0,0,128],white:[xt,xt,xt],olive:[128,128,0],yellow:[xt,xt,0],orange:[xt,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[xt,0,0],pink:[xt,192,203],cyan:[0,xt,xt],transparent:[xt,xt,xt,0]},Kh=function(e,t,i){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(i-t)*e*6:e<.5?i:e*3<2?t+(i-t)*(2/3-e)*6:t)*xt+.5|0},xM=function(e,t,i){var r=e?Yr(e)?[e>>16,e>>8&xt,e&xt]:0:Fl.black,s,o,a,l,u,c,f,d,p,v;if(!r){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),Fl[e])r=Fl[e];else if(e.charAt(0)==="#"){if(e.length<6&&(s=e.charAt(1),o=e.charAt(2),a=e.charAt(3),e="#"+s+s+o+o+a+a+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return r=parseInt(e.substr(1,6),16),[r>>16,r>>8&xt,r&xt,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),r=[e>>16,e>>8&xt,e&xt]}else if(e.substr(0,3)==="hsl"){if(r=v=e.match(_m),!t)l=+r[0]%360/360,u=+r[1]/100,c=+r[2]/100,o=c<=.5?c*(u+1):c+u-c*u,s=c*2-o,r.length>3&&(r[3]*=1),r[0]=Kh(l+1/3,s,o),r[1]=Kh(l,s,o),r[2]=Kh(l-1/3,s,o);else if(~e.indexOf("="))return r=e.match($1),i&&r.length<4&&(r[3]=1),r}else r=e.match(_m)||Fl.transparent;r=r.map(Number)}return t&&!v&&(s=r[0]/xt,o=r[1]/xt,a=r[2]/xt,f=Math.max(s,o,a),d=Math.min(s,o,a),c=(f+d)/2,f===d?l=u=0:(p=f-d,u=c>.5?p/(2-f-d):p/(f+d),l=f===s?(o-a)/p+(o<a?6:0):f===o?(a-s)/p+2:(s-o)/p+4,l*=60),r[0]=~~(l+.5),r[1]=~~(u*100+.5),r[2]=~~(c*100+.5)),i&&r.length<4&&(r[3]=1),r},yM=function(e){var t=[],i=[],r=-1;return e.split(Ns).forEach(function(s){var o=s.match(Ra)||[];t.push.apply(t,o),i.push(r+=o.length+1)}),t.c=i,t},lx=function(e,t,i){var r="",s=(e+r).match(Ns),o=t?"hsla(":"rgba(",a=0,l,u,c,f;if(!s)return e;if(s=s.map(function(d){return(d=xM(d,t,1))&&o+(t?d[0]+","+d[1]+"%,"+d[2]+"%,"+d[3]:d.join(","))+")"}),i&&(c=yM(e),l=i.c,l.join(r)!==c.c.join(r)))for(u=e.replace(Ns,"1").split(Ra),f=u.length-1;a<f;a++)r+=u[a]+(~l.indexOf(a)?s.shift()||o+"0,0,0,0)":(c.length?c:s.length?s:i).shift());if(!u)for(u=e.split(Ns),f=u.length-1;a<f;a++)r+=u[a]+s[a];return r+u[f]},Ns=function(){var n="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in Fl)n+="|"+e+"\\b";return new RegExp(n+")","gi")}(),BD=/hsl[a]?\(/,SM=function(e){var t=e.join(" "),i;if(Ns.lastIndex=0,Ns.test(t))return i=BD.test(t),e[1]=lx(e[1],i),e[0]=lx(e[0],i,yM(e[1])),!0},Nu,_i=function(){var n=Date.now,e=500,t=33,i=n(),r=i,s=1e3/240,o=s,a=[],l,u,c,f,d,p,v=function g(m){var h=n()-r,x=m===!0,_,y,w,T;if((h>e||h<0)&&(i+=h-t),r+=h,w=r-i,_=w-o,(_>0||x)&&(T=++f.frame,d=w-f.time*1e3,f.time=w=w/1e3,o+=_+(_>=s?4:s-_),y=1),x||(l=u(g)),y)for(p=0;p<a.length;p++)a[p](w,d,T,m)};return f={time:0,frame:0,tick:function(){v(!0)},deltaRatio:function(m){return d/(1e3/(m||60))},wake:function(){Q1&&(!vm&&Vg()&&(or=vm=window,Wg=or.document||{},Ti.gsap=ui,(or.gsapVersions||(or.gsapVersions=[])).push(ui.version),J1(Qf||or.GreenSockGlobals||!or.gsap&&or||{}),_M.forEach(vM)),c=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&f.sleep(),u=c||function(m){return setTimeout(m,o-f.time*1e3+1|0)},Nu=1,v(2))},sleep:function(){(c?cancelAnimationFrame:clearTimeout)(l),Nu=0,u=Lu},lagSmoothing:function(m,h){e=m||1/0,t=Math.min(h||33,e)},fps:function(m){s=1e3/(m||240),o=f.time*1e3+s},add:function(m,h,x){var _=h?function(y,w,T,M){m(y,w,T,M),f.remove(_)}:m;return f.remove(m),a[x?"unshift":"push"](_),sl(),_},remove:function(m,h){~(h=a.indexOf(m))&&a.splice(h,1)&&p>=h&&p--},_listeners:a},f}(),sl=function(){return!Nu&&_i.wake()},at={},HD=/^[\d.\-M][\d.\-,\s]/,GD=/["']/g,VD=function(e){for(var t={},i=e.substr(1,e.length-3).split(":"),r=i[0],s=1,o=i.length,a,l,u;s<o;s++)l=i[s],a=s!==o-1?l.lastIndexOf(","):l.length,u=l.substr(0,a),t[r]=isNaN(u)?u.replace(GD,"").trim():+u,r=l.substr(a+1).trim();return t},WD=function(e){var t=e.indexOf("(")+1,i=e.indexOf(")"),r=e.indexOf("(",t);return e.substring(t,~r&&r<i?e.indexOf(")",i+1):i)},XD=function(e){var t=(e+"").split("("),i=at[t[0]];return i&&t.length>1&&i.config?i.config.apply(null,~e.indexOf("{")?[VD(t[1])]:WD(e).split(",").map(rM)):at._CE&&HD.test(e)?at._CE("",e):i},MM=function(e){return function(t){return 1-e(1-t)}},EM=function n(e,t){for(var i=e._first,r;i;)i instanceof Hn?n(i,t):i.vars.yoyoEase&&(!i._yoyo||!i._repeat)&&i._yoyo!==t&&(i.timeline?n(i.timeline,t):(r=i._ease,i._ease=i._yEase,i._yEase=r,i._yoyo=t)),i=i._next},wo=function(e,t){return e&&(Gt(e)?e:at[e]||XD(e))||t},Xo=function(e,t,i,r){i===void 0&&(i=function(l){return 1-t(1-l)}),r===void 0&&(r=function(l){return l<.5?t(l*2)/2:1-t((1-l)*2)/2});var s={easeIn:t,easeOut:i,easeInOut:r},o;return oi(e,function(a){at[a]=Ti[a]=s,at[o=a.toLowerCase()]=i;for(var l in s)at[o+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=at[a+"."+l]=s[l]}),s},TM=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},Zh=function n(e,t,i){var r=t>=1?t:1,s=(i||(e?.3:.45))/(t<1?t:1),o=s/gm*(Math.asin(1/r)||0),a=function(c){return c===1?1:r*Math.pow(2,-10*c)*xD((c-o)*s)+1},l=e==="out"?a:e==="in"?function(u){return 1-a(1-u)}:TM(a);return s=gm/s,l.config=function(u,c){return n(e,u,c)},l},Qh=function n(e,t){t===void 0&&(t=1.70158);var i=function(o){return o?--o*o*((t+1)*o+t)+1:0},r=e==="out"?i:e==="in"?function(s){return 1-i(1-s)}:TM(i);return r.config=function(s){return n(e,s)},r};oi("Linear,Quad,Cubic,Quart,Quint,Strong",function(n,e){var t=e<5?e+1:e;Xo(n+",Power"+(t-1),e?function(i){return Math.pow(i,t)}:function(i){return i},function(i){return 1-Math.pow(1-i,t)},function(i){return i<.5?Math.pow(i*2,t)/2:1-Math.pow((1-i)*2,t)/2})});at.Linear.easeNone=at.none=at.Linear.easeIn;Xo("Elastic",Zh("in"),Zh("out"),Zh());(function(n,e){var t=1/e,i=2*t,r=2.5*t,s=function(a){return a<t?n*a*a:a<i?n*Math.pow(a-1.5/e,2)+.75:a<r?n*(a-=2.25/e)*a+.9375:n*Math.pow(a-2.625/e,2)+.984375};Xo("Bounce",function(o){return 1-s(1-o)},s)})(7.5625,2.75);Xo("Expo",function(n){return n?Math.pow(2,10*(n-1)):0});Xo("Circ",function(n){return-(Y1(1-n*n)-1)});Xo("Sine",function(n){return n===1?1:-vD(n*gD)+1});Xo("Back",Qh("in"),Qh("out"),Qh());at.SteppedEase=at.steps=Ti.SteppedEase={config:function(e,t){e===void 0&&(e=1);var i=1/e,r=e+(t?0:1),s=t?1:0,o=1-Mt;return function(a){return((r*Zu(0,o,a)|0)+s)*i}}};nl.ease=at["quad.out"];oi("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(n){return Yg+=n+","+n+"Params,"});var wM=function(e,t){this.id=_D++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:nM,this.set=t?t.getSetter:Qg},Uu=function(){function n(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,rl(this,+t.duration,1,1),this.data=t.data,Nt&&(this._ctx=Nt,Nt.data.push(this)),Nu||_i.wake()}var e=n.prototype;return e.delay=function(i){return i||i===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+i-this._delay),this._delay=i,this):this._delay},e.duration=function(i){return arguments.length?this.totalDuration(this._repeat>0?i+(i+this._rDelay)*this._repeat:i):this.totalDuration()&&this._dur},e.totalDuration=function(i){return arguments.length?(this._dirty=0,rl(this,this._repeat<0?i:(i-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(i,r){if(sl(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(Id(this,i),!s._dp||s.parent||aM(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&i<this._tDur||this._ts<0&&i>0||!this._tDur&&!i)&&fr(this._dp,this,this._start-this._delay)}return(this._tTime!==i||!this._dur&&!r||this._initted&&Math.abs(this._zTime)===Mt||!i&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=i),iM(this,i,r)),this},e.time=function(i,r){return arguments.length?this.totalTime(Math.min(this.totalDuration(),i+sx(this))%(this._dur+this._rDelay)||(i?this._dur:0),r):this._time},e.totalProgress=function(i,r){return arguments.length?this.totalTime(this.totalDuration()*i,r):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>0?1:0},e.progress=function(i,r){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-i:i)+sx(this),r):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},e.iteration=function(i,r){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(i-1)*s,r):this._repeat?il(this._tTime,s)+1:1},e.timeScale=function(i,r){if(!arguments.length)return this._rts===-Mt?0:this._rts;if(this._rts===i)return this;var s=this.parent&&this._ts?td(this.parent._time,this):this._tTime;return this._rts=+i||0,this._ts=this._ps||i===-Mt?0:this._rts,this.totalTime(Zu(-Math.abs(this._delay),this._tDur,s),r!==!1),Ud(this),AD(this)},e.paused=function(i){return arguments.length?(this._ps!==i&&(this._ps=i,i?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(sl(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==Mt&&(this._tTime-=Mt)))),this):this._ps},e.startTime=function(i){if(arguments.length){this._start=i;var r=this.parent||this._dp;return r&&(r._sort||!this.parent)&&fr(r,this,i-this._delay),this}return this._start},e.endTime=function(i){return this._start+(si(i)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(i){var r=this.parent||this._dp;return r?i&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?td(r.rawTime(i),this):this._tTime:this._tTime},e.revert=function(i){i===void 0&&(i=MD);var r=bn;return bn=i,(this._initted||this._startAt)&&(this.timeline&&this.timeline.revert(i),this.totalTime(-.01,i.suppressEvents)),this.data!=="nested"&&i.kill!==!1&&this.kill(),bn=r,this},e.globalTime=function(i){for(var r=this,s=arguments.length?i:r.rawTime();r;)s=r._start+s/(Math.abs(r._ts)||1),r=r._dp;return!this.parent&&this._sat?this._sat.globalTime(i):s},e.repeat=function(i){return arguments.length?(this._repeat=i===1/0?-2:i,ox(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(i){if(arguments.length){var r=this._time;return this._rDelay=i,ox(this),r?this.time(r):this}return this._rDelay},e.yoyo=function(i){return arguments.length?(this._yoyo=i,this):this._yoyo},e.seek=function(i,r){return this.totalTime(bi(this,i),si(r))},e.restart=function(i,r){return this.play().totalTime(i?-this._delay:0,si(r))},e.play=function(i,r){return i!=null&&this.seek(i,r),this.reversed(!1).paused(!1)},e.reverse=function(i,r){return i!=null&&this.seek(i||this.totalDuration(),r),this.reversed(!0).paused(!1)},e.pause=function(i,r){return i!=null&&this.seek(i,r),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(i){return arguments.length?(!!i!==this.reversed()&&this.timeScale(-this._rts||(i?-Mt:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-Mt,this},e.isActive=function(){var i=this.parent||this._dp,r=this._start,s;return!!(!i||this._ts&&this._initted&&i.isActive()&&(s=i.rawTime(!0))>=r&&s<this.endTime(!0)-Mt)},e.eventCallback=function(i,r,s){var o=this.vars;return arguments.length>1?(r?(o[i]=r,s&&(o[i+"Params"]=s),i==="onUpdate"&&(this._onUpdate=r)):delete o[i],this):o[i]},e.then=function(i){var r=this;return new Promise(function(s){var o=Gt(i)?i:sM,a=function(){var u=r.then;r.then=null,Gt(o)&&(o=o(r))&&(o.then||o===r)&&(r.then=u),s(o),r.then=u};r._initted&&r.totalProgress()===1&&r._ts>=0||!r._tTime&&r._ts<0?a():r._prom=a})},e.kill=function(){Ol(this)},n}();Gi(Uu.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-Mt,_prom:0,_ps:!1,_rts:1});var Hn=function(n){j1(e,n);function e(i,r){var s;return i===void 0&&(i={}),s=n.call(this,i)||this,s.labels={},s.smoothChildTiming=!!i.smoothChildTiming,s.autoRemoveChildren=!!i.autoRemoveChildren,s._sort=si(i.sortChildren),Ft&&fr(i.parent||Ft,br(s),r),i.reversed&&s.reverse(),i.paused&&s.paused(!0),i.scrollTrigger&&lM(br(s),i.scrollTrigger),s}var t=e.prototype;return t.to=function(r,s,o){return Jl(0,arguments,this),this},t.from=function(r,s,o){return Jl(1,arguments,this),this},t.fromTo=function(r,s,o,a){return Jl(2,arguments,this),this},t.set=function(r,s,o){return s.duration=0,s.parent=this,Ql(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new qt(r,s,bi(this,o),1),this},t.call=function(r,s,o){return fr(this,qt.delayedCall(0,r,s),o)},t.staggerTo=function(r,s,o,a,l,u,c){return o.duration=s,o.stagger=o.stagger||a,o.onComplete=u,o.onCompleteParams=c,o.parent=this,new qt(r,o,bi(this,l)),this},t.staggerFrom=function(r,s,o,a,l,u,c){return o.runBackwards=1,Ql(o).immediateRender=si(o.immediateRender),this.staggerTo(r,s,o,a,l,u,c)},t.staggerFromTo=function(r,s,o,a,l,u,c,f){return a.startAt=o,Ql(a).immediateRender=si(a.immediateRender),this.staggerTo(r,s,a,l,u,c,f)},t.render=function(r,s,o){var a=this._time,l=this._dirty?this.totalDuration():this._tDur,u=this._dur,c=r<=0?0:fn(r),f=this._zTime<0!=r<0&&(this._initted||!u),d,p,v,g,m,h,x,_,y,w,T,M;if(this!==Ft&&c>l&&r>=0&&(c=l),c!==this._tTime||o||f){if(a!==this._time&&u&&(c+=this._time-a,r+=this._time-a),d=c,y=this._start,_=this._ts,h=!_,f&&(u||(a=this._zTime),(r||!s)&&(this._zTime=r)),this._repeat){if(T=this._yoyo,m=u+this._rDelay,this._repeat<-1&&r<0)return this.totalTime(m*100+r,s,o);if(d=fn(c%m),c===l?(g=this._repeat,d=u):(g=~~(c/m),g&&g===c/m&&(d=u,g--),d>u&&(d=u)),w=il(this._tTime,m),!a&&this._tTime&&w!==g&&this._tTime-w*m-this._dur<=0&&(w=g),T&&g&1&&(d=u-d,M=1),g!==w&&!this._lock){var P=T&&w&1,N=P===(T&&g&1);if(g<w&&(P=!P),a=P?0:c%u?u:c,this._lock=1,this.render(a||(M?0:fn(g*m)),s,!u)._lock=0,this._tTime=c,!s&&this.parent&&yi(this,"onRepeat"),this.vars.repeatRefresh&&!M&&(this.invalidate()._lock=1),a&&a!==this._time||h!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(u=this._dur,l=this._tDur,N&&(this._lock=2,a=P?u:-1e-4,this.render(a,!0),this.vars.repeatRefresh&&!M&&this.invalidate()),this._lock=0,!this._ts&&!h)return this;EM(this,M)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(x=PD(this,fn(a),fn(d)),x&&(c-=d-(d=x._start))),this._tTime=c,this._time=d,this._act=!_,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=r,a=0),!a&&d&&!s&&!g&&(yi(this,"onStart"),this._tTime!==c))return this;if(d>=a&&r>=0)for(p=this._first;p;){if(v=p._next,(p._act||d>=p._start)&&p._ts&&x!==p){if(p.parent!==this)return this.render(r,s,o);if(p.render(p._ts>0?(d-p._start)*p._ts:(p._dirty?p.totalDuration():p._tDur)+(d-p._start)*p._ts,s,o),d!==this._time||!this._ts&&!h){x=0,v&&(c+=this._zTime=-Mt);break}}p=v}else{p=this._last;for(var S=r<0?r:d;p;){if(v=p._prev,(p._act||S<=p._end)&&p._ts&&x!==p){if(p.parent!==this)return this.render(r,s,o);if(p.render(p._ts>0?(S-p._start)*p._ts:(p._dirty?p.totalDuration():p._tDur)+(S-p._start)*p._ts,s,o||bn&&(p._initted||p._startAt)),d!==this._time||!this._ts&&!h){x=0,v&&(c+=this._zTime=S?-Mt:Mt);break}}p=v}}if(x&&!s&&(this.pause(),x.render(d>=a?0:-Mt)._zTime=d>=a?1:-1,this._ts))return this._start=y,Ud(this),this.render(r,s,o);this._onUpdate&&!s&&yi(this,"onUpdate",!0),(c===l&&this._tTime>=this.totalDuration()||!c&&a)&&(y===this._start||Math.abs(_)!==Math.abs(this._ts))&&(this._lock||((r||!u)&&(c===l&&this._ts>0||!c&&this._ts<0)&&zs(this,1),!s&&!(r<0&&!a)&&(c||a||!l)&&(yi(this,c===l&&r>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(c<l&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(r,s){var o=this;if(Yr(s)||(s=bi(this,s,r)),!(r instanceof Uu)){if(Pn(r))return r.forEach(function(a){return o.add(a,s)}),this;if(hn(r))return this.addLabel(r,s);if(Gt(r))r=qt.delayedCall(0,r);else return this}return this!==r?fr(this,r,s):this},t.getChildren=function(r,s,o,a){r===void 0&&(r=!0),s===void 0&&(s=!0),o===void 0&&(o=!0),a===void 0&&(a=-Oi);for(var l=[],u=this._first;u;)u._start>=a&&(u instanceof qt?s&&l.push(u):(o&&l.push(u),r&&l.push.apply(l,u.getChildren(!0,s,o)))),u=u._next;return l},t.getById=function(r){for(var s=this.getChildren(1,1,1),o=s.length;o--;)if(s[o].vars.id===r)return s[o]},t.remove=function(r){return hn(r)?this.removeLabel(r):Gt(r)?this.killTweensOf(r):(Nd(this,r),r===this._recent&&(this._recent=this._last),To(this))},t.totalTime=function(r,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=fn(_i.time-(this._ts>0?r/this._ts:(this.totalDuration()-r)/-this._ts))),n.prototype.totalTime.call(this,r,s),this._forcing=0,this):this._tTime},t.addLabel=function(r,s){return this.labels[r]=bi(this,s),this},t.removeLabel=function(r){return delete this.labels[r],this},t.addPause=function(r,s,o){var a=qt.delayedCall(0,s||Lu,o);return a.data="isPause",this._hasPause=1,fr(this,a,bi(this,r))},t.removePause=function(r){var s=this._first;for(r=bi(this,r);s;)s._start===r&&s.data==="isPause"&&zs(s),s=s._next},t.killTweensOf=function(r,s,o){for(var a=this.getTweensOf(r,o),l=a.length;l--;)ps!==a[l]&&a[l].kill(r,s);return this},t.getTweensOf=function(r,s){for(var o=[],a=Fi(r),l=this._first,u=Yr(s),c;l;)l instanceof qt?ED(l._targets,a)&&(u?(!ps||l._initted&&l._ts)&&l.globalTime(0)<=s&&l.globalTime(l.totalDuration())>s:!s||l.isActive())&&o.push(l):(c=l.getTweensOf(a,s)).length&&o.push.apply(o,c),l=l._next;return o},t.tweenTo=function(r,s){s=s||{};var o=this,a=bi(o,r),l=s,u=l.startAt,c=l.onStart,f=l.onStartParams,d=l.immediateRender,p,v=qt.to(o,Gi({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:a,overwrite:"auto",duration:s.duration||Math.abs((a-(u&&"time"in u?u.time:o._time))/o.timeScale())||Mt,onStart:function(){if(o.pause(),!p){var m=s.duration||Math.abs((a-(u&&"time"in u?u.time:o._time))/o.timeScale());v._dur!==m&&rl(v,m,0,1).render(v._time,!0,!0),p=1}c&&c.apply(v,f||[])}},s));return d?v.render(0):v},t.tweenFromTo=function(r,s,o){return this.tweenTo(s,Gi({startAt:{time:bi(this,r)}},o))},t.recent=function(){return this._recent},t.nextLabel=function(r){return r===void 0&&(r=this._time),ax(this,bi(this,r))},t.previousLabel=function(r){return r===void 0&&(r=this._time),ax(this,bi(this,r),1)},t.currentLabel=function(r){return arguments.length?this.seek(r,!0):this.previousLabel(this._time+Mt)},t.shiftChildren=function(r,s,o){o===void 0&&(o=0);for(var a=this._first,l=this.labels,u;a;)a._start>=o&&(a._start+=r,a._end+=r),a=a._next;if(s)for(u in l)l[u]>=o&&(l[u]+=r);return To(this)},t.invalidate=function(r){var s=this._first;for(this._lock=0;s;)s.invalidate(r),s=s._next;return n.prototype.invalidate.call(this,r)},t.clear=function(r){r===void 0&&(r=!0);for(var s=this._first,o;s;)o=s._next,this.remove(s),s=o;return this._dp&&(this._time=this._tTime=this._pTime=0),r&&(this.labels={}),To(this)},t.totalDuration=function(r){var s=0,o=this,a=o._last,l=Oi,u,c,f;if(arguments.length)return o.timeScale((o._repeat<0?o.duration():o.totalDuration())/(o.reversed()?-r:r));if(o._dirty){for(f=o.parent;a;)u=a._prev,a._dirty&&a.totalDuration(),c=a._start,c>l&&o._sort&&a._ts&&!o._lock?(o._lock=1,fr(o,a,c-a._delay,1)._lock=0):l=c,c<0&&a._ts&&(s-=c,(!f&&!o._dp||f&&f.smoothChildTiming)&&(o._start+=c/o._ts,o._time-=c,o._tTime-=c),o.shiftChildren(-c,!1,-1/0),l=0),a._end>s&&a._ts&&(s=a._end),a=u;rl(o,o===Ft&&o._time>s?o._time:s,1,1),o._dirty=0}return o._tDur},e.updateRoot=function(r){if(Ft._ts&&(iM(Ft,td(r,Ft)),tM=_i.frame),_i.frame>=ix){ix+=Mi.autoSleep||120;var s=Ft._first;if((!s||!s._ts)&&Mi.autoSleep&&_i._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||_i.sleep()}}},e}(Uu);Gi(Hn.prototype,{_lock:0,_hasPause:0,_forcing:0});var jD=function(e,t,i,r,s,o,a){var l=new ai(this._pt,e,t,0,1,LM,null,s),u=0,c=0,f,d,p,v,g,m,h,x;for(l.b=i,l.e=r,i+="",r+="",(h=~r.indexOf("random("))&&(r=Du(r)),o&&(x=[i,r],o(x,e,t),i=x[0],r=x[1]),d=i.match(qh)||[];f=qh.exec(r);)v=f[0],g=r.substring(u,f.index),p?p=(p+1)%5:g.substr(-5)==="rgba("&&(p=1),v!==d[c++]&&(m=parseFloat(d[c-1])||0,l._pt={_next:l._pt,p:g||c===1?g:",",s:m,c:v.charAt(1)==="="?za(m,v)-m:parseFloat(v)-m,m:p&&p<4?Math.round:0},u=qh.lastIndex);return l.c=u<r.length?r.substring(u,r.length):"",l.fp=a,(K1.test(r)||h)&&(l.e=0),this._pt=l,l},$g=function(e,t,i,r,s,o,a,l,u,c){Gt(r)&&(r=r(s||0,e,o));var f=e[t],d=i!=="get"?i:Gt(f)?u?e[t.indexOf("set")||!Gt(e["get"+t.substr(3)])?t:"get"+t.substr(3)](u):e[t]():f,p=Gt(f)?u?ZD:bM:Zg,v;if(hn(r)&&(~r.indexOf("random(")&&(r=Du(r)),r.charAt(1)==="="&&(v=za(d,r)+(Rn(d)||0),(v||v===0)&&(r=v))),!c||d!==r||wm)return!isNaN(d*r)&&r!==""?(v=new ai(this._pt,e,t,+d||0,r-(d||0),typeof f=="boolean"?JD:PM,0,p),u&&(v.fp=u),a&&v.modifier(a,this,e),this._pt=v):(!f&&!(t in e)&&Xg(t,r),jD.call(this,e,t,d,r,p,l||Mi.stringFilter,u))},YD=function(e,t,i,r,s){if(Gt(e)&&(e=eu(e,s,t,i,r)),!yr(e)||e.style&&e.nodeType||Pn(e)||q1(e))return hn(e)?eu(e,s,t,i,r):e;var o={},a;for(a in e)o[a]=eu(e[a],s,t,i,r);return o},AM=function(e,t,i,r,s,o){var a,l,u,c;if(gi[e]&&(a=new gi[e]).init(s,a.rawVars?t[e]:YD(t[e],r,s,o,i),i,r,o)!==!1&&(i._pt=l=new ai(i._pt,s,e,0,1,a.render,a,0,a.priority),i!==ba))for(u=i._ptLookup[i._targets.indexOf(s)],c=a._props.length;c--;)u[a._props[c]]=l;return a},ps,wm,Kg=function n(e,t,i){var r=e.vars,s=r.ease,o=r.startAt,a=r.immediateRender,l=r.lazy,u=r.onUpdate,c=r.runBackwards,f=r.yoyoEase,d=r.keyframes,p=r.autoRevert,v=e._dur,g=e._startAt,m=e._targets,h=e.parent,x=h&&h.data==="nested"?h.vars.targets:m,_=e._overwrite==="auto"&&!Hg,y=e.timeline,w,T,M,P,N,S,R,z,K,L,Y,B,X;if(y&&(!d||!s)&&(s="none"),e._ease=wo(s,nl.ease),e._yEase=f?MM(wo(f===!0?s:f,nl.ease)):0,f&&e._yoyo&&!e._repeat&&(f=e._yEase,e._yEase=e._ease,e._ease=f),e._from=!y&&!!r.runBackwards,!y||d&&!r.stagger){if(z=m[0]?Eo(m[0]).harness:0,B=z&&r[z.prop],w=ed(r,jg),g&&(g._zTime<0&&g.progress(1),t<0&&c&&a&&!p?g.render(-1,!0):g.revert(c&&v?ff:SD),g._lazy=0),o){if(zs(e._startAt=qt.set(m,Gi({data:"isStart",overwrite:!1,parent:h,immediateRender:!0,lazy:!g&&si(l),startAt:null,delay:0,onUpdate:u&&function(){return yi(e,"onUpdate")},stagger:0},o))),e._startAt._dp=0,e._startAt._sat=e,t<0&&(bn||!a&&!p)&&e._startAt.revert(ff),a&&v&&t<=0&&i<=0){t&&(e._zTime=t);return}}else if(c&&v&&!g){if(t&&(a=!1),M=Gi({overwrite:!1,data:"isFromStart",lazy:a&&!g&&si(l),immediateRender:a,stagger:0,parent:h},w),B&&(M[z.prop]=B),zs(e._startAt=qt.set(m,M)),e._startAt._dp=0,e._startAt._sat=e,t<0&&(bn?e._startAt.revert(ff):e._startAt.render(-1,!0)),e._zTime=t,!a)n(e._startAt,Mt,Mt);else if(!t)return}for(e._pt=e._ptCache=0,l=v&&si(l)||l&&!v,T=0;T<m.length;T++){if(N=m[T],R=N._gsap||qg(m)[T]._gsap,e._ptLookup[T]=L={},xm[R.id]&&Ds.length&&Jf(),Y=x===m?T:x.indexOf(N),z&&(K=new z).init(N,B||w,e,Y,x)!==!1&&(e._pt=P=new ai(e._pt,N,K.name,0,1,K.render,K,0,K.priority),K._props.forEach(function(D){L[D]=P}),K.priority&&(S=1)),!z||B)for(M in w)gi[M]&&(K=AM(M,w,e,Y,N,x))?K.priority&&(S=1):L[M]=P=$g.call(e,N,M,"get",w[M],Y,x,0,r.stringFilter);e._op&&e._op[T]&&e.kill(N,e._op[T]),_&&e._pt&&(ps=e,Ft.killTweensOf(N,L,e.globalTime(t)),X=!e.parent,ps=0),e._pt&&l&&(xm[R.id]=1)}S&&DM(e),e._onInit&&e._onInit(e)}e._onUpdate=u,e._initted=(!e._op||e._pt)&&!X,d&&t<=0&&y.render(Oi,!0,!0)},qD=function(e,t,i,r,s,o,a,l){var u=(e._pt&&e._ptCache||(e._ptCache={}))[t],c,f,d,p;if(!u)for(u=e._ptCache[t]=[],d=e._ptLookup,p=e._targets.length;p--;){if(c=d[p][t],c&&c.d&&c.d._pt)for(c=c.d._pt;c&&c.p!==t&&c.fp!==t;)c=c._next;if(!c)return wm=1,e.vars[t]="+=0",Kg(e,a),wm=0,l?Pu(t+" not eligible for reset"):1;u.push(c)}for(p=u.length;p--;)f=u[p],c=f._pt||f,c.s=(r||r===0)&&!s?r:c.s+(r||0)+o*c.c,c.c=i-c.s,f.e&&(f.e=Vt(i)+Rn(f.e)),f.b&&(f.b=c.s+Rn(f.b))},$D=function(e,t){var i=e[0]?Eo(e[0]).harness:0,r=i&&i.aliases,s,o,a,l;if(!r)return t;s=Oo({},t);for(o in r)if(o in s)for(l=r[o].split(","),a=l.length;a--;)s[l[a]]=s[o];return s},KD=function(e,t,i,r){var s=t.ease||r||"power1.inOut",o,a;if(Pn(t))a=i[e]||(i[e]=[]),t.forEach(function(l,u){return a.push({t:u/(t.length-1)*100,v:l,e:s})});else for(o in t)a=i[o]||(i[o]=[]),o==="ease"||a.push({t:parseFloat(e),v:t[o],e:s})},eu=function(e,t,i,r,s){return Gt(e)?e.call(t,i,r,s):hn(e)&&~e.indexOf("random(")?Du(e):e},CM=Yg+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",RM={};oi(CM+",id,stagger,delay,duration,paused,scrollTrigger",function(n){return RM[n]=1});var qt=function(n){j1(e,n);function e(i,r,s,o){var a;typeof r=="number"&&(s.duration=r,r=s,s=null),a=n.call(this,o?r:Ql(r))||this;var l=a.vars,u=l.duration,c=l.delay,f=l.immediateRender,d=l.stagger,p=l.overwrite,v=l.keyframes,g=l.defaults,m=l.scrollTrigger,h=l.yoyoEase,x=r.parent||Ft,_=(Pn(i)||q1(i)?Yr(i[0]):"length"in r)?[i]:Fi(i),y,w,T,M,P,N,S,R;if(a._targets=_.length?qg(_):Pu("GSAP target "+i+" not found. https://gsap.com",!Mi.nullTargetWarn)||[],a._ptLookup=[],a._overwrite=p,v||d||kc(u)||kc(c)){if(r=a.vars,y=a.timeline=new Hn({data:"nested",defaults:g||{},targets:x&&x.data==="nested"?x.vars.targets:_}),y.kill(),y.parent=y._dp=br(a),y._start=0,d||kc(u)||kc(c)){if(M=_.length,S=d&&dM(d),yr(d))for(P in d)~CM.indexOf(P)&&(R||(R={}),R[P]=d[P]);for(w=0;w<M;w++)T=ed(r,RM),T.stagger=0,h&&(T.yoyoEase=h),R&&Oo(T,R),N=_[w],T.duration=+eu(u,br(a),w,N,_),T.delay=(+eu(c,br(a),w,N,_)||0)-a._delay,!d&&M===1&&T.delay&&(a._delay=c=T.delay,a._start+=c,T.delay=0),y.to(N,T,S?S(w,N,_):0),y._ease=at.none;y.duration()?u=c=0:a.timeline=0}else if(v){Ql(Gi(y.vars.defaults,{ease:"none"})),y._ease=wo(v.ease||r.ease||"none");var z=0,K,L,Y;if(Pn(v))v.forEach(function(B){return y.to(_,B,">")}),y.duration();else{T={};for(P in v)P==="ease"||P==="easeEach"||KD(P,v[P],T,v.easeEach);for(P in T)for(K=T[P].sort(function(B,X){return B.t-X.t}),z=0,w=0;w<K.length;w++)L=K[w],Y={ease:L.e,duration:(L.t-(w?K[w-1].t:0))/100*u},Y[P]=L.v,y.to(_,Y,z),z+=Y.duration;y.duration()<u&&y.to({},{duration:u-y.duration()})}}u||a.duration(u=y.duration())}else a.timeline=0;return p===!0&&!Hg&&(ps=br(a),Ft.killTweensOf(_),ps=0),fr(x,br(a),s),r.reversed&&a.reverse(),r.paused&&a.paused(!0),(f||!u&&!v&&a._start===fn(x._time)&&si(f)&&CD(br(a))&&x.data!=="nested")&&(a._tTime=-Mt,a.render(Math.max(0,-c)||0)),m&&lM(br(a),m),a}var t=e.prototype;return t.render=function(r,s,o){var a=this._time,l=this._tDur,u=this._dur,c=r<0,f=r>l-Mt&&!c?l:r<Mt?0:r,d,p,v,g,m,h,x,_,y;if(!u)bD(this,r,s,o);else if(f!==this._tTime||!r||o||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==c){if(d=f,_=this.timeline,this._repeat){if(g=u+this._rDelay,this._repeat<-1&&c)return this.totalTime(g*100+r,s,o);if(d=fn(f%g),f===l?(v=this._repeat,d=u):(v=~~(f/g),v&&v===fn(f/g)&&(d=u,v--),d>u&&(d=u)),h=this._yoyo&&v&1,h&&(y=this._yEase,d=u-d),m=il(this._tTime,g),d===a&&!o&&this._initted&&v===m)return this._tTime=f,this;v!==m&&(_&&this._yEase&&EM(_,h),this.vars.repeatRefresh&&!h&&!this._lock&&this._time!==g&&this._initted&&(this._lock=o=1,this.render(fn(g*v),!0).invalidate()._lock=0))}if(!this._initted){if(uM(this,c?r:d,o,s,f))return this._tTime=0,this;if(a!==this._time&&!(o&&this.vars.repeatRefresh&&v!==m))return this;if(u!==this._dur)return this.render(r,s,o)}if(this._tTime=f,this._time=d,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=x=(y||this._ease)(d/u),this._from&&(this.ratio=x=1-x),d&&!a&&!s&&!v&&(yi(this,"onStart"),this._tTime!==f))return this;for(p=this._pt;p;)p.r(x,p.d),p=p._next;_&&_.render(r<0?r:_._dur*_._ease(d/this._dur),s,o)||this._startAt&&(this._zTime=r),this._onUpdate&&!s&&(c&&ym(this,r,s,o),yi(this,"onUpdate")),this._repeat&&v!==m&&this.vars.onRepeat&&!s&&this.parent&&yi(this,"onRepeat"),(f===this._tDur||!f)&&this._tTime===f&&(c&&!this._onUpdate&&ym(this,r,!0,!0),(r||!u)&&(f===this._tDur&&this._ts>0||!f&&this._ts<0)&&zs(this,1),!s&&!(c&&!a)&&(f||a||h)&&(yi(this,f===l?"onComplete":"onReverseComplete",!0),this._prom&&!(f<l&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(r){return(!r||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(r),n.prototype.invalidate.call(this,r)},t.resetTo=function(r,s,o,a,l){Nu||_i.wake(),this._ts||this.play();var u=Math.min(this._dur,(this._dp._time-this._start)*this._ts),c;return this._initted||Kg(this,u),c=this._ease(u/this._dur),qD(this,r,s,o,a,c,u,l)?this.resetTo(r,s,o,a,1):(Id(this,0),this.parent||oM(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(r,s){if(s===void 0&&(s="all"),!r&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?Ol(this):this;if(this.timeline){var o=this.timeline.totalDuration();return this.timeline.killTweensOf(r,s,ps&&ps.vars.overwrite!==!0)._first||Ol(this),this.parent&&o!==this.timeline.totalDuration()&&rl(this,this._dur*this.timeline._tDur/o,0,1),this}var a=this._targets,l=r?Fi(r):a,u=this._ptLookup,c=this._pt,f,d,p,v,g,m,h;if((!s||s==="all")&&wD(a,l))return s==="all"&&(this._pt=0),Ol(this);for(f=this._op=this._op||[],s!=="all"&&(hn(s)&&(g={},oi(s,function(x){return g[x]=1}),s=g),s=$D(a,s)),h=a.length;h--;)if(~l.indexOf(a[h])){d=u[h],s==="all"?(f[h]=s,v=d,p={}):(p=f[h]=f[h]||{},v=s);for(g in v)m=d&&d[g],m&&((!("kill"in m.d)||m.d.kill(g)===!0)&&Nd(this,m,"_pt"),delete d[g]),p!=="all"&&(p[g]=1)}return this._initted&&!this._pt&&c&&Ol(this),this},e.to=function(r,s){return new e(r,s,arguments[2])},e.from=function(r,s){return Jl(1,arguments)},e.delayedCall=function(r,s,o,a){return new e(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:r,onComplete:s,onReverseComplete:s,onCompleteParams:o,onReverseCompleteParams:o,callbackScope:a})},e.fromTo=function(r,s,o){return Jl(2,arguments)},e.set=function(r,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new e(r,s)},e.killTweensOf=function(r,s,o){return Ft.killTweensOf(r,s,o)},e}(Uu);Gi(qt.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});oi("staggerTo,staggerFrom,staggerFromTo",function(n){qt[n]=function(){var e=new Hn,t=Mm.call(arguments,0);return t.splice(n==="staggerFromTo"?5:4,0,0),e[n].apply(e,t)}});var Zg=function(e,t,i){return e[t]=i},bM=function(e,t,i){return e[t](i)},ZD=function(e,t,i,r){return e[t](r.fp,i)},QD=function(e,t,i){return e.setAttribute(t,i)},Qg=function(e,t){return Gt(e[t])?bM:Gg(e[t])&&e.setAttribute?QD:Zg},PM=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},JD=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},LM=function(e,t){var i=t._pt,r="";if(!e&&t.b)r=t.b;else if(e===1&&t.e)r=t.e;else{for(;i;)r=i.p+(i.m?i.m(i.s+i.c*e):Math.round((i.s+i.c*e)*1e4)/1e4)+r,i=i._next;r+=t.c}t.set(t.t,t.p,r,t)},Jg=function(e,t){for(var i=t._pt;i;)i.r(e,i.d),i=i._next},eN=function(e,t,i,r){for(var s=this._pt,o;s;)o=s._next,s.p===r&&s.modifier(e,t,i),s=o},tN=function(e){for(var t=this._pt,i,r;t;)r=t._next,t.p===e&&!t.op||t.op===e?Nd(this,t,"_pt"):t.dep||(i=1),t=r;return!i},nN=function(e,t,i,r){r.mSet(e,t,r.m.call(r.tween,i,r.mt),r)},DM=function(e){for(var t=e._pt,i,r,s,o;t;){for(i=t._next,r=s;r&&r.pr>t.pr;)r=r._next;(t._prev=r?r._prev:o)?t._prev._next=t:s=t,(t._next=r)?r._prev=t:o=t,t=i}e._pt=s},ai=function(){function n(t,i,r,s,o,a,l,u,c){this.t=i,this.s=s,this.c=o,this.p=r,this.r=a||PM,this.d=l||this,this.set=u||Zg,this.pr=c||0,this._next=t,t&&(t._prev=this)}var e=n.prototype;return e.modifier=function(i,r,s){this.mSet=this.mSet||this.set,this.set=nN,this.m=i,this.mt=s,this.tween=r},n}();oi(Yg+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(n){return jg[n]=1});Ti.TweenMax=Ti.TweenLite=qt;Ti.TimelineLite=Ti.TimelineMax=Hn;Ft=new Hn({sortChildren:!1,defaults:nl,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});Mi.stringFilter=SM;var Ao=[],hf={},iN=[],ux=0,rN=0,Jh=function(e){return(hf[e]||iN).map(function(t){return t()})},Am=function(){var e=Date.now(),t=[];e-ux>2&&(Jh("matchMediaInit"),Ao.forEach(function(i){var r=i.queries,s=i.conditions,o,a,l,u;for(a in r)o=or.matchMedia(r[a]).matches,o&&(l=1),o!==s[a]&&(s[a]=o,u=1);u&&(i.revert(),l&&t.push(i))}),Jh("matchMediaRevert"),t.forEach(function(i){return i.onMatch(i,function(r){return i.add(null,r)})}),ux=e,Jh("matchMedia"))},NM=function(){function n(t,i){this.selector=i&&Em(i),this.data=[],this._r=[],this.isReverted=!1,this.id=rN++,t&&this.add(t)}var e=n.prototype;return e.add=function(i,r,s){Gt(i)&&(s=r,r=i,i=Gt);var o=this,a=function(){var u=Nt,c=o.selector,f;return u&&u!==o&&u.data.push(o),s&&(o.selector=Em(s)),Nt=o,f=r.apply(o,arguments),Gt(f)&&o._r.push(f),Nt=u,o.selector=c,o.isReverted=!1,f};return o.last=a,i===Gt?a(o,function(l){return o.add(null,l)}):i?o[i]=a:a},e.ignore=function(i){var r=Nt;Nt=null,i(this),Nt=r},e.getTweens=function(){var i=[];return this.data.forEach(function(r){return r instanceof n?i.push.apply(i,r.getTweens()):r instanceof qt&&!(r.parent&&r.parent.data==="nested")&&i.push(r)}),i},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(i,r){var s=this;if(i?function(){for(var a=s.getTweens(),l=s.data.length,u;l--;)u=s.data[l],u.data==="isFlip"&&(u.revert(),u.getChildren(!0,!0,!1).forEach(function(c){return a.splice(a.indexOf(c),1)}));for(a.map(function(c){return{g:c._dur||c._delay||c._sat&&!c._sat.vars.immediateRender?c.globalTime(0):-1/0,t:c}}).sort(function(c,f){return f.g-c.g||-1/0}).forEach(function(c){return c.t.revert(i)}),l=s.data.length;l--;)u=s.data[l],u instanceof Hn?u.data!=="nested"&&(u.scrollTrigger&&u.scrollTrigger.revert(),u.kill()):!(u instanceof qt)&&u.revert&&u.revert(i);s._r.forEach(function(c){return c(i,s)}),s.isReverted=!0}():this.data.forEach(function(a){return a.kill&&a.kill()}),this.clear(),r)for(var o=Ao.length;o--;)Ao[o].id===this.id&&Ao.splice(o,1)},e.revert=function(i){this.kill(i||{})},n}(),sN=function(){function n(t){this.contexts=[],this.scope=t,Nt&&Nt.data.push(this)}var e=n.prototype;return e.add=function(i,r,s){yr(i)||(i={matches:i});var o=new NM(0,s||this.scope),a=o.conditions={},l,u,c;Nt&&!o.selector&&(o.selector=Nt.selector),this.contexts.push(o),r=o.add("onMatch",r),o.queries=i;for(u in i)u==="all"?c=1:(l=or.matchMedia(i[u]),l&&(Ao.indexOf(o)<0&&Ao.push(o),(a[u]=l.matches)&&(c=1),l.addListener?l.addListener(Am):l.addEventListener("change",Am)));return c&&r(o,function(f){return o.add(null,f)}),this},e.revert=function(i){this.kill(i||{})},e.kill=function(i){this.contexts.forEach(function(r){return r.kill(i,!0)})},n}(),nd={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];t.forEach(function(r){return vM(r)})},timeline:function(e){return new Hn(e)},getTweensOf:function(e,t){return Ft.getTweensOf(e,t)},getProperty:function(e,t,i,r){hn(e)&&(e=Fi(e)[0]);var s=Eo(e||{}).get,o=i?sM:rM;return i==="native"&&(i=""),e&&(t?o((gi[t]&&gi[t].get||s)(e,t,i,r)):function(a,l,u){return o((gi[a]&&gi[a].get||s)(e,a,l,u))})},quickSetter:function(e,t,i){if(e=Fi(e),e.length>1){var r=e.map(function(c){return ui.quickSetter(c,t,i)}),s=r.length;return function(c){for(var f=s;f--;)r[f](c)}}e=e[0]||{};var o=gi[t],a=Eo(e),l=a.harness&&(a.harness.aliases||{})[t]||t,u=o?function(c){var f=new o;ba._pt=0,f.init(e,i?c+i:c,ba,0,[e]),f.render(1,f),ba._pt&&Jg(1,ba)}:a.set(e,l);return o?u:function(c){return u(e,l,i?c+i:c,a,1)}},quickTo:function(e,t,i){var r,s=ui.to(e,Oo((r={},r[t]="+=0.1",r.paused=!0,r),i||{})),o=function(l,u,c){return s.resetTo(t,l,u,c)};return o.tween=s,o},isTweening:function(e){return Ft.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=wo(e.ease,nl.ease)),rx(nl,e||{})},config:function(e){return rx(Mi,e||{})},registerEffect:function(e){var t=e.name,i=e.effect,r=e.plugins,s=e.defaults,o=e.extendTimeline;(r||"").split(",").forEach(function(a){return a&&!gi[a]&&!Ti[a]&&Pu(t+" effect requires "+a+" plugin.")}),$h[t]=function(a,l,u){return i(Fi(a),Gi(l||{},s),u)},o&&(Hn.prototype[t]=function(a,l,u){return this.add($h[t](a,yr(l)?l:(u=l)&&{},this),u)})},registerEase:function(e,t){at[e]=wo(t)},parseEase:function(e,t){return arguments.length?wo(e,t):at},getById:function(e){return Ft.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var i=new Hn(e),r,s;for(i.smoothChildTiming=si(e.smoothChildTiming),Ft.remove(i),i._dp=0,i._time=i._tTime=Ft._time,r=Ft._first;r;)s=r._next,(t||!(!r._dur&&r instanceof qt&&r.vars.onComplete===r._targets[0]))&&fr(i,r,r._start-r._delay),r=s;return fr(Ft,i,0),i},context:function(e,t){return e?new NM(e,t):Nt},matchMedia:function(e){return new sN(e)},matchMediaRefresh:function(){return Ao.forEach(function(e){var t=e.conditions,i,r;for(r in t)t[r]&&(t[r]=!1,i=1);i&&e.revert()})||Am()},addEventListener:function(e,t){var i=hf[e]||(hf[e]=[]);~i.indexOf(t)||i.push(t)},removeEventListener:function(e,t){var i=hf[e],r=i&&i.indexOf(t);r>=0&&i.splice(r,1)},utils:{wrap:FD,wrapYoyo:kD,distribute:dM,random:pM,snap:hM,normalize:OD,getUnit:Rn,clamp:DD,splitColor:xM,toArray:Fi,selector:Em,mapRange:gM,pipe:UD,unitize:ID,interpolate:zD,shuffle:fM},install:J1,effects:$h,ticker:_i,updateRoot:Hn.updateRoot,plugins:gi,globalTimeline:Ft,core:{PropTween:ai,globals:eM,Tween:qt,Timeline:Hn,Animation:Uu,getCache:Eo,_removeLinkedListItem:Nd,reverting:function(){return bn},context:function(e){return e&&Nt&&(Nt.data.push(e),e._ctx=Nt),Nt},suppressOverwrites:function(e){return Hg=e}}};oi("to,from,fromTo,delayedCall,set,killTweensOf",function(n){return nd[n]=qt[n]});_i.add(Hn.updateRoot);ba=nd.to({},{duration:0});var oN=function(e,t){for(var i=e._pt;i&&i.p!==t&&i.op!==t&&i.fp!==t;)i=i._next;return i},aN=function(e,t){var i=e._targets,r,s,o;for(r in t)for(s=i.length;s--;)o=e._ptLookup[s][r],o&&(o=o.d)&&(o._pt&&(o=oN(o,r)),o&&o.modifier&&o.modifier(t[r],e,i[s],r))},ep=function(e,t){return{name:e,rawVars:1,init:function(r,s,o){o._onInit=function(a){var l,u;if(hn(s)&&(l={},oi(s,function(c){return l[c]=1}),s=l),t){l={};for(u in s)l[u]=t(s[u]);s=l}aN(a,s)}}}},ui=nd.registerPlugin({name:"attr",init:function(e,t,i,r,s){var o,a,l;this.tween=i;for(o in t)l=e.getAttribute(o)||"",a=this.add(e,"setAttribute",(l||0)+"",t[o],r,s,0,0,o),a.op=o,a.b=l,this._props.push(o)},render:function(e,t){for(var i=t._pt;i;)bn?i.set(i.t,i.p,i.b,i):i.r(e,i.d),i=i._next}},{name:"endArray",init:function(e,t){for(var i=t.length;i--;)this.add(e,i,e[i]||0,t[i],0,0,0,0,0,1)}},ep("roundProps",Tm),ep("modifiers"),ep("snap",hM))||nd;qt.version=Hn.version=ui.version="3.12.5";Q1=1;Vg()&&sl();at.Power0;at.Power1;at.Power2;at.Power3;at.Power4;at.Linear;at.Quad;at.Cubic;at.Quart;at.Quint;at.Strong;at.Elastic;at.Back;at.SteppedEase;at.Bounce;at.Sine;at.Expo;at.Circ;/*!
 * CSSPlugin 3.12.5
 * https://gsap.com
 *
 * Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var cx,ms,Ba,e_,_o,fx,t_,lN=function(){return typeof window<"u"},qr={},ao=180/Math.PI,Ha=Math.PI/180,ua=Math.atan2,dx=1e8,n_=/([A-Z])/g,uN=/(left|right|width|margin|padding|x)/i,cN=/[\s,\(]\S/,dr={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},Cm=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},fN=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},dN=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},hN=function(e,t){var i=t.s+t.c*e;t.set(t.t,t.p,~~(i+(i<0?-.5:.5))+t.u,t)},UM=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},IM=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},pN=function(e,t,i){return e.style[t]=i},mN=function(e,t,i){return e.style.setProperty(t,i)},gN=function(e,t,i){return e._gsap[t]=i},_N=function(e,t,i){return e._gsap.scaleX=e._gsap.scaleY=i},vN=function(e,t,i,r,s){var o=e._gsap;o.scaleX=o.scaleY=i,o.renderTransform(s,o)},xN=function(e,t,i,r,s){var o=e._gsap;o[t]=i,o.renderTransform(s,o)},kt="transform",li=kt+"Origin",yN=function n(e,t){var i=this,r=this.target,s=r.style,o=r._gsap;if(e in qr&&s){if(this.tfm=this.tfm||{},e!=="transform")e=dr[e]||e,~e.indexOf(",")?e.split(",").forEach(function(a){return i.tfm[a]=Lr(r,a)}):this.tfm[e]=o.x?o[e]:Lr(r,e),e===li&&(this.tfm.zOrigin=o.zOrigin);else return dr.transform.split(",").forEach(function(a){return n.call(i,a,t)});if(this.props.indexOf(kt)>=0)return;o.svg&&(this.svgo=r.getAttribute("data-svg-origin"),this.props.push(li,t,"")),e=kt}(s||t)&&this.props.push(e,t,s[e])},OM=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},SN=function(){var e=this.props,t=this.target,i=t.style,r=t._gsap,s,o;for(s=0;s<e.length;s+=3)e[s+1]?t[e[s]]=e[s+2]:e[s+2]?i[e[s]]=e[s+2]:i.removeProperty(e[s].substr(0,2)==="--"?e[s]:e[s].replace(n_,"-$1").toLowerCase());if(this.tfm){for(o in this.tfm)r[o]=this.tfm[o];r.svg&&(r.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),s=t_(),(!s||!s.isStart)&&!i[kt]&&(OM(i),r.zOrigin&&i[li]&&(i[li]+=" "+r.zOrigin+"px",r.zOrigin=0,r.renderTransform()),r.uncache=1)}},FM=function(e,t){var i={target:e,props:[],revert:SN,save:yN};return e._gsap||ui.core.getCache(e),t&&t.split(",").forEach(function(r){return i.save(r)}),i},kM,Rm=function(e,t){var i=ms.createElementNS?ms.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):ms.createElement(e);return i&&i.style?i:ms.createElement(e)},_r=function n(e,t,i){var r=getComputedStyle(e);return r[t]||r.getPropertyValue(t.replace(n_,"-$1").toLowerCase())||r.getPropertyValue(t)||!i&&n(e,ol(t)||t,1)||""},hx="O,Moz,ms,Ms,Webkit".split(","),ol=function(e,t,i){var r=t||_o,s=r.style,o=5;if(e in s&&!i)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);o--&&!(hx[o]+e in s););return o<0?null:(o===3?"ms":o>=0?hx[o]:"")+e},bm=function(){lN()&&window.document&&(cx=window,ms=cx.document,Ba=ms.documentElement,_o=Rm("div")||{style:{}},Rm("div"),kt=ol(kt),li=kt+"Origin",_o.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",kM=!!ol("perspective"),t_=ui.core.reverting,e_=1)},tp=function n(e){var t=Rm("svg",this.ownerSVGElement&&this.ownerSVGElement.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),i=this.parentNode,r=this.nextSibling,s=this.style.cssText,o;if(Ba.appendChild(t),t.appendChild(this),this.style.display="block",e)try{o=this.getBBox(),this._gsapBBox=this.getBBox,this.getBBox=n}catch{}else this._gsapBBox&&(o=this._gsapBBox());return i&&(r?i.insertBefore(this,r):i.appendChild(this)),Ba.removeChild(t),this.style.cssText=s,o},px=function(e,t){for(var i=t.length;i--;)if(e.hasAttribute(t[i]))return e.getAttribute(t[i])},zM=function(e){var t;try{t=e.getBBox()}catch{t=tp.call(e,!0)}return t&&(t.width||t.height)||e.getBBox===tp||(t=tp.call(e,!0)),t&&!t.width&&!t.x&&!t.y?{x:+px(e,["x","cx","x1"])||0,y:+px(e,["y","cy","y1"])||0,width:0,height:0}:t},BM=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&zM(e))},Fo=function(e,t){if(t){var i=e.style,r;t in qr&&t!==li&&(t=kt),i.removeProperty?(r=t.substr(0,2),(r==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),i.removeProperty(r==="--"?t:t.replace(n_,"-$1").toLowerCase())):i.removeAttribute(t)}},gs=function(e,t,i,r,s,o){var a=new ai(e._pt,t,i,0,1,o?IM:UM);return e._pt=a,a.b=r,a.e=s,e._props.push(i),a},mx={deg:1,rad:1,turn:1},MN={grid:1,flex:1},Bs=function n(e,t,i,r){var s=parseFloat(i)||0,o=(i+"").trim().substr((s+"").length)||"px",a=_o.style,l=uN.test(t),u=e.tagName.toLowerCase()==="svg",c=(u?"client":"offset")+(l?"Width":"Height"),f=100,d=r==="px",p=r==="%",v,g,m,h;if(r===o||!s||mx[r]||mx[o])return s;if(o!=="px"&&!d&&(s=n(e,t,i,"px")),h=e.getCTM&&BM(e),(p||o==="%")&&(qr[t]||~t.indexOf("adius")))return v=h?e.getBBox()[l?"width":"height"]:e[c],Vt(p?s/v*f:s/100*v);if(a[l?"width":"height"]=f+(d?o:r),g=~t.indexOf("adius")||r==="em"&&e.appendChild&&!u?e:e.parentNode,h&&(g=(e.ownerSVGElement||{}).parentNode),(!g||g===ms||!g.appendChild)&&(g=ms.body),m=g._gsap,m&&p&&m.width&&l&&m.time===_i.time&&!m.uncache)return Vt(s/m.width*f);if(p&&(t==="height"||t==="width")){var x=e.style[t];e.style[t]=f+r,v=e[c],x?e.style[t]=x:Fo(e,t)}else(p||o==="%")&&!MN[_r(g,"display")]&&(a.position=_r(e,"position")),g===e&&(a.position="static"),g.appendChild(_o),v=_o[c],g.removeChild(_o),a.position="absolute";return l&&p&&(m=Eo(g),m.time=_i.time,m.width=g[c]),Vt(d?v*s/f:v&&s?f/v*s:0)},Lr=function(e,t,i,r){var s;return e_||bm(),t in dr&&t!=="transform"&&(t=dr[t],~t.indexOf(",")&&(t=t.split(",")[0])),qr[t]&&t!=="transform"?(s=Ou(e,r),s=t!=="transformOrigin"?s[t]:s.svg?s.origin:rd(_r(e,li))+" "+s.zOrigin+"px"):(s=e.style[t],(!s||s==="auto"||r||~(s+"").indexOf("calc("))&&(s=id[t]&&id[t](e,t,i)||_r(e,t)||nM(e,t)||(t==="opacity"?1:0))),i&&!~(s+"").trim().indexOf(" ")?Bs(e,t,s,i)+i:s},EN=function(e,t,i,r){if(!i||i==="none"){var s=ol(t,e,1),o=s&&_r(e,s,1);o&&o!==i?(t=s,i=o):t==="borderColor"&&(i=_r(e,"borderTopColor"))}var a=new ai(this._pt,e.style,t,0,1,LM),l=0,u=0,c,f,d,p,v,g,m,h,x,_,y,w;if(a.b=i,a.e=r,i+="",r+="",r==="auto"&&(g=e.style[t],e.style[t]=r,r=_r(e,t)||r,g?e.style[t]=g:Fo(e,t)),c=[i,r],SM(c),i=c[0],r=c[1],d=i.match(Ra)||[],w=r.match(Ra)||[],w.length){for(;f=Ra.exec(r);)m=f[0],x=r.substring(l,f.index),v?v=(v+1)%5:(x.substr(-5)==="rgba("||x.substr(-5)==="hsla(")&&(v=1),m!==(g=d[u++]||"")&&(p=parseFloat(g)||0,y=g.substr((p+"").length),m.charAt(1)==="="&&(m=za(p,m)+y),h=parseFloat(m),_=m.substr((h+"").length),l=Ra.lastIndex-_.length,_||(_=_||Mi.units[t]||y,l===r.length&&(r+=_,a.e+=_)),y!==_&&(p=Bs(e,t,g,_)||0),a._pt={_next:a._pt,p:x||u===1?x:",",s:p,c:h-p,m:v&&v<4||t==="zIndex"?Math.round:0});a.c=l<r.length?r.substring(l,r.length):""}else a.r=t==="display"&&r==="none"?IM:UM;return K1.test(r)&&(a.e=0),this._pt=a,a},gx={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},TN=function(e){var t=e.split(" "),i=t[0],r=t[1]||"50%";return(i==="top"||i==="bottom"||r==="left"||r==="right")&&(e=i,i=r,r=e),t[0]=gx[i]||i,t[1]=gx[r]||r,t.join(" ")},wN=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var i=t.t,r=i.style,s=t.u,o=i._gsap,a,l,u;if(s==="all"||s===!0)r.cssText="",l=1;else for(s=s.split(","),u=s.length;--u>-1;)a=s[u],qr[a]&&(l=1,a=a==="transformOrigin"?li:kt),Fo(i,a);l&&(Fo(i,kt),o&&(o.svg&&i.removeAttribute("transform"),Ou(i,1),o.uncache=1,OM(r)))}},id={clearProps:function(e,t,i,r,s){if(s.data!=="isFromStart"){var o=e._pt=new ai(e._pt,t,i,0,0,wN);return o.u=r,o.pr=-10,o.tween=s,e._props.push(i),1}}},Iu=[1,0,0,1,0,0],HM={},GM=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},_x=function(e){var t=_r(e,kt);return GM(t)?Iu:t.substr(7).match($1).map(Vt)},i_=function(e,t){var i=e._gsap||Eo(e),r=e.style,s=_x(e),o,a,l,u;return i.svg&&e.getAttribute("transform")?(l=e.transform.baseVal.consolidate().matrix,s=[l.a,l.b,l.c,l.d,l.e,l.f],s.join(",")==="1,0,0,1,0,0"?Iu:s):(s===Iu&&!e.offsetParent&&e!==Ba&&!i.svg&&(l=r.display,r.display="block",o=e.parentNode,(!o||!e.offsetParent)&&(u=1,a=e.nextElementSibling,Ba.appendChild(e)),s=_x(e),l?r.display=l:Fo(e,"display"),u&&(a?o.insertBefore(e,a):o?o.appendChild(e):Ba.removeChild(e))),t&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},Pm=function(e,t,i,r,s,o){var a=e._gsap,l=s||i_(e,!0),u=a.xOrigin||0,c=a.yOrigin||0,f=a.xOffset||0,d=a.yOffset||0,p=l[0],v=l[1],g=l[2],m=l[3],h=l[4],x=l[5],_=t.split(" "),y=parseFloat(_[0])||0,w=parseFloat(_[1])||0,T,M,P,N;i?l!==Iu&&(M=p*m-v*g)&&(P=y*(m/M)+w*(-g/M)+(g*x-m*h)/M,N=y*(-v/M)+w*(p/M)-(p*x-v*h)/M,y=P,w=N):(T=zM(e),y=T.x+(~_[0].indexOf("%")?y/100*T.width:y),w=T.y+(~(_[1]||_[0]).indexOf("%")?w/100*T.height:w)),r||r!==!1&&a.smooth?(h=y-u,x=w-c,a.xOffset=f+(h*p+x*g)-h,a.yOffset=d+(h*v+x*m)-x):a.xOffset=a.yOffset=0,a.xOrigin=y,a.yOrigin=w,a.smooth=!!r,a.origin=t,a.originIsAbsolute=!!i,e.style[li]="0px 0px",o&&(gs(o,a,"xOrigin",u,y),gs(o,a,"yOrigin",c,w),gs(o,a,"xOffset",f,a.xOffset),gs(o,a,"yOffset",d,a.yOffset)),e.setAttribute("data-svg-origin",y+" "+w)},Ou=function(e,t){var i=e._gsap||new wM(e);if("x"in i&&!t&&!i.uncache)return i;var r=e.style,s=i.scaleX<0,o="px",a="deg",l=getComputedStyle(e),u=_r(e,li)||"0",c,f,d,p,v,g,m,h,x,_,y,w,T,M,P,N,S,R,z,K,L,Y,B,X,D,F,C,Q,se,Oe,V,ee;return c=f=d=g=m=h=x=_=y=0,p=v=1,i.svg=!!(e.getCTM&&BM(e)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(r[kt]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[kt]!=="none"?l[kt]:"")),r.scale=r.rotate=r.translate="none"),M=i_(e,i.svg),i.svg&&(i.uncache?(D=e.getBBox(),u=i.xOrigin-D.x+"px "+(i.yOrigin-D.y)+"px",X=""):X=!t&&e.getAttribute("data-svg-origin"),Pm(e,X||u,!!X||i.originIsAbsolute,i.smooth!==!1,M)),w=i.xOrigin||0,T=i.yOrigin||0,M!==Iu&&(R=M[0],z=M[1],K=M[2],L=M[3],c=Y=M[4],f=B=M[5],M.length===6?(p=Math.sqrt(R*R+z*z),v=Math.sqrt(L*L+K*K),g=R||z?ua(z,R)*ao:0,x=K||L?ua(K,L)*ao+g:0,x&&(v*=Math.abs(Math.cos(x*Ha))),i.svg&&(c-=w-(w*R+T*K),f-=T-(w*z+T*L))):(ee=M[6],Oe=M[7],C=M[8],Q=M[9],se=M[10],V=M[11],c=M[12],f=M[13],d=M[14],P=ua(ee,se),m=P*ao,P&&(N=Math.cos(-P),S=Math.sin(-P),X=Y*N+C*S,D=B*N+Q*S,F=ee*N+se*S,C=Y*-S+C*N,Q=B*-S+Q*N,se=ee*-S+se*N,V=Oe*-S+V*N,Y=X,B=D,ee=F),P=ua(-K,se),h=P*ao,P&&(N=Math.cos(-P),S=Math.sin(-P),X=R*N-C*S,D=z*N-Q*S,F=K*N-se*S,V=L*S+V*N,R=X,z=D,K=F),P=ua(z,R),g=P*ao,P&&(N=Math.cos(P),S=Math.sin(P),X=R*N+z*S,D=Y*N+B*S,z=z*N-R*S,B=B*N-Y*S,R=X,Y=D),m&&Math.abs(m)+Math.abs(g)>359.9&&(m=g=0,h=180-h),p=Vt(Math.sqrt(R*R+z*z+K*K)),v=Vt(Math.sqrt(B*B+ee*ee)),P=ua(Y,B),x=Math.abs(P)>2e-4?P*ao:0,y=V?1/(V<0?-V:V):0),i.svg&&(X=e.getAttribute("transform"),i.forceCSS=e.setAttribute("transform","")||!GM(_r(e,kt)),X&&e.setAttribute("transform",X))),Math.abs(x)>90&&Math.abs(x)<270&&(s?(p*=-1,x+=g<=0?180:-180,g+=g<=0?180:-180):(v*=-1,x+=x<=0?180:-180)),t=t||i.uncache,i.x=c-((i.xPercent=c&&(!t&&i.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-c)?-50:0)))?e.offsetWidth*i.xPercent/100:0)+o,i.y=f-((i.yPercent=f&&(!t&&i.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-f)?-50:0)))?e.offsetHeight*i.yPercent/100:0)+o,i.z=d+o,i.scaleX=Vt(p),i.scaleY=Vt(v),i.rotation=Vt(g)+a,i.rotationX=Vt(m)+a,i.rotationY=Vt(h)+a,i.skewX=x+a,i.skewY=_+a,i.transformPerspective=y+o,(i.zOrigin=parseFloat(u.split(" ")[2])||!t&&i.zOrigin||0)&&(r[li]=rd(u)),i.xOffset=i.yOffset=0,i.force3D=Mi.force3D,i.renderTransform=i.svg?CN:kM?VM:AN,i.uncache=0,i},rd=function(e){return(e=e.split(" "))[0]+" "+e[1]},np=function(e,t,i){var r=Rn(t);return Vt(parseFloat(t)+parseFloat(Bs(e,"x",i+"px",r)))+r},AN=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,VM(e,t)},to="0deg",bl="0px",no=") ",VM=function(e,t){var i=t||this,r=i.xPercent,s=i.yPercent,o=i.x,a=i.y,l=i.z,u=i.rotation,c=i.rotationY,f=i.rotationX,d=i.skewX,p=i.skewY,v=i.scaleX,g=i.scaleY,m=i.transformPerspective,h=i.force3D,x=i.target,_=i.zOrigin,y="",w=h==="auto"&&e&&e!==1||h===!0;if(_&&(f!==to||c!==to)){var T=parseFloat(c)*Ha,M=Math.sin(T),P=Math.cos(T),N;T=parseFloat(f)*Ha,N=Math.cos(T),o=np(x,o,M*N*-_),a=np(x,a,-Math.sin(T)*-_),l=np(x,l,P*N*-_+_)}m!==bl&&(y+="perspective("+m+no),(r||s)&&(y+="translate("+r+"%, "+s+"%) "),(w||o!==bl||a!==bl||l!==bl)&&(y+=l!==bl||w?"translate3d("+o+", "+a+", "+l+") ":"translate("+o+", "+a+no),u!==to&&(y+="rotate("+u+no),c!==to&&(y+="rotateY("+c+no),f!==to&&(y+="rotateX("+f+no),(d!==to||p!==to)&&(y+="skew("+d+", "+p+no),(v!==1||g!==1)&&(y+="scale("+v+", "+g+no),x.style[kt]=y||"translate(0, 0)"},CN=function(e,t){var i=t||this,r=i.xPercent,s=i.yPercent,o=i.x,a=i.y,l=i.rotation,u=i.skewX,c=i.skewY,f=i.scaleX,d=i.scaleY,p=i.target,v=i.xOrigin,g=i.yOrigin,m=i.xOffset,h=i.yOffset,x=i.forceCSS,_=parseFloat(o),y=parseFloat(a),w,T,M,P,N;l=parseFloat(l),u=parseFloat(u),c=parseFloat(c),c&&(c=parseFloat(c),u+=c,l+=c),l||u?(l*=Ha,u*=Ha,w=Math.cos(l)*f,T=Math.sin(l)*f,M=Math.sin(l-u)*-d,P=Math.cos(l-u)*d,u&&(c*=Ha,N=Math.tan(u-c),N=Math.sqrt(1+N*N),M*=N,P*=N,c&&(N=Math.tan(c),N=Math.sqrt(1+N*N),w*=N,T*=N)),w=Vt(w),T=Vt(T),M=Vt(M),P=Vt(P)):(w=f,P=d,T=M=0),(_&&!~(o+"").indexOf("px")||y&&!~(a+"").indexOf("px"))&&(_=Bs(p,"x",o,"px"),y=Bs(p,"y",a,"px")),(v||g||m||h)&&(_=Vt(_+v-(v*w+g*M)+m),y=Vt(y+g-(v*T+g*P)+h)),(r||s)&&(N=p.getBBox(),_=Vt(_+r/100*N.width),y=Vt(y+s/100*N.height)),N="matrix("+w+","+T+","+M+","+P+","+_+","+y+")",p.setAttribute("transform",N),x&&(p.style[kt]=N)},RN=function(e,t,i,r,s){var o=360,a=hn(s),l=parseFloat(s)*(a&&~s.indexOf("rad")?ao:1),u=l-r,c=r+u+"deg",f,d;return a&&(f=s.split("_")[1],f==="short"&&(u%=o,u!==u%(o/2)&&(u+=u<0?o:-o)),f==="cw"&&u<0?u=(u+o*dx)%o-~~(u/o)*o:f==="ccw"&&u>0&&(u=(u-o*dx)%o-~~(u/o)*o)),e._pt=d=new ai(e._pt,t,i,r,u,fN),d.e=c,d.u="deg",e._props.push(i),d},vx=function(e,t){for(var i in t)e[i]=t[i];return e},bN=function(e,t,i){var r=vx({},i._gsap),s="perspective,force3D,transformOrigin,svgOrigin",o=i.style,a,l,u,c,f,d,p,v;r.svg?(u=i.getAttribute("transform"),i.setAttribute("transform",""),o[kt]=t,a=Ou(i,1),Fo(i,kt),i.setAttribute("transform",u)):(u=getComputedStyle(i)[kt],o[kt]=t,a=Ou(i,1),o[kt]=u);for(l in qr)u=r[l],c=a[l],u!==c&&s.indexOf(l)<0&&(p=Rn(u),v=Rn(c),f=p!==v?Bs(i,l,u,v):parseFloat(u),d=parseFloat(c),e._pt=new ai(e._pt,a,l,f,d-f,Cm),e._pt.u=v||0,e._props.push(l));vx(a,r)};oi("padding,margin,Width,Radius",function(n,e){var t="Top",i="Right",r="Bottom",s="Left",o=(e<3?[t,i,r,s]:[t+s,t+i,r+i,r+s]).map(function(a){return e<2?n+a:"border"+a+n});id[e>1?"border"+n:n]=function(a,l,u,c,f){var d,p;if(arguments.length<4)return d=o.map(function(v){return Lr(a,v,u)}),p=d.join(" "),p.split(d[0]).length===5?d[0]:p;d=(c+"").split(" "),p={},o.forEach(function(v,g){return p[v]=d[g]=d[g]||d[(g-1)/2|0]}),a.init(l,p,f)}});var WM={name:"css",register:bm,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,i,r,s){var o=this._props,a=e.style,l=i.vars.startAt,u,c,f,d,p,v,g,m,h,x,_,y,w,T,M,P;e_||bm(),this.styles=this.styles||FM(e),P=this.styles.props,this.tween=i;for(g in t)if(g!=="autoRound"&&(c=t[g],!(gi[g]&&AM(g,t,i,r,e,s)))){if(p=typeof c,v=id[g],p==="function"&&(c=c.call(i,r,e,s),p=typeof c),p==="string"&&~c.indexOf("random(")&&(c=Du(c)),v)v(this,e,g,c,i)&&(M=1);else if(g.substr(0,2)==="--")u=(getComputedStyle(e).getPropertyValue(g)+"").trim(),c+="",Ns.lastIndex=0,Ns.test(u)||(m=Rn(u),h=Rn(c)),h?m!==h&&(u=Bs(e,g,u,h)+h):m&&(c+=m),this.add(a,"setProperty",u,c,r,s,0,0,g),o.push(g),P.push(g,0,a[g]);else if(p!=="undefined"){if(l&&g in l?(u=typeof l[g]=="function"?l[g].call(i,r,e,s):l[g],hn(u)&&~u.indexOf("random(")&&(u=Du(u)),Rn(u+"")||u==="auto"||(u+=Mi.units[g]||Rn(Lr(e,g))||""),(u+"").charAt(1)==="="&&(u=Lr(e,g))):u=Lr(e,g),d=parseFloat(u),x=p==="string"&&c.charAt(1)==="="&&c.substr(0,2),x&&(c=c.substr(2)),f=parseFloat(c),g in dr&&(g==="autoAlpha"&&(d===1&&Lr(e,"visibility")==="hidden"&&f&&(d=0),P.push("visibility",0,a.visibility),gs(this,a,"visibility",d?"inherit":"hidden",f?"inherit":"hidden",!f)),g!=="scale"&&g!=="transform"&&(g=dr[g],~g.indexOf(",")&&(g=g.split(",")[0]))),_=g in qr,_){if(this.styles.save(g),y||(w=e._gsap,w.renderTransform&&!t.parseTransform||Ou(e,t.parseTransform),T=t.smoothOrigin!==!1&&w.smooth,y=this._pt=new ai(this._pt,a,kt,0,1,w.renderTransform,w,0,-1),y.dep=1),g==="scale")this._pt=new ai(this._pt,w,"scaleY",w.scaleY,(x?za(w.scaleY,x+f):f)-w.scaleY||0,Cm),this._pt.u=0,o.push("scaleY",g),g+="X";else if(g==="transformOrigin"){P.push(li,0,a[li]),c=TN(c),w.svg?Pm(e,c,0,T,0,this):(h=parseFloat(c.split(" ")[2])||0,h!==w.zOrigin&&gs(this,w,"zOrigin",w.zOrigin,h),gs(this,a,g,rd(u),rd(c)));continue}else if(g==="svgOrigin"){Pm(e,c,1,T,0,this);continue}else if(g in HM){RN(this,w,g,d,x?za(d,x+c):c);continue}else if(g==="smoothOrigin"){gs(this,w,"smooth",w.smooth,c);continue}else if(g==="force3D"){w[g]=c;continue}else if(g==="transform"){bN(this,c,e);continue}}else g in a||(g=ol(g)||g);if(_||(f||f===0)&&(d||d===0)&&!cN.test(c)&&g in a)m=(u+"").substr((d+"").length),f||(f=0),h=Rn(c)||(g in Mi.units?Mi.units[g]:m),m!==h&&(d=Bs(e,g,u,h)),this._pt=new ai(this._pt,_?w:a,g,d,(x?za(d,x+f):f)-d,!_&&(h==="px"||g==="zIndex")&&t.autoRound!==!1?hN:Cm),this._pt.u=h||0,m!==h&&h!=="%"&&(this._pt.b=u,this._pt.r=dN);else if(g in a)EN.call(this,e,g,u,x?x+c:c);else if(g in e)this.add(e,g,u||e[g],x?x+c:c,r,s);else if(g!=="parseTransform"){Xg(g,c);continue}_||(g in a?P.push(g,0,a[g]):P.push(g,1,u||e[g])),o.push(g)}}M&&DM(this)},render:function(e,t){if(t.tween._time||!t_())for(var i=t._pt;i;)i.r(e,i.d),i=i._next;else t.styles.revert()},get:Lr,aliases:dr,getSetter:function(e,t,i){var r=dr[t];return r&&r.indexOf(",")<0&&(t=r),t in qr&&t!==li&&(e._gsap.x||Lr(e,"x"))?i&&fx===i?t==="scale"?_N:gN:(fx=i||{})&&(t==="scale"?vN:xN):e.style&&!Gg(e.style[t])?pN:~t.indexOf("-")?mN:Qg(e,t)},core:{_removeProperty:Fo,_getMatrix:i_}};ui.utils.checkPrefix=ol;ui.core.getStyleSaver=FM;(function(n,e,t,i){var r=oi(n+","+e+","+t,function(s){qr[s]=1});oi(e,function(s){Mi.units[s]="deg",HM[s]=1}),dr[r[13]]=n+","+e,oi(i,function(s){var o=s.split(":");dr[o[1]]=r[o[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");oi("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(n){Mi.units[n]="px"});ui.registerPlugin(WM);var gn=ui.registerPlugin(WM)||ui;gn.core.Tween;const PN=()=>{const[n,e]=re.useState(t());function t(){const i=new Date,r=i.getHours().toString().padStart(2,"0"),s=i.getMinutes().toString().padStart(2,"0");return`${r}:${s}`}return re.useEffect(()=>{const i=setInterval(()=>{e(t())},1e3);return()=>clearInterval(i)},[]),n};/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var LN={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const DN=n=>n.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase().trim(),Kr=(n,e)=>{const t=re.forwardRef(({color:i="currentColor",size:r=24,strokeWidth:s=2,absoluteStrokeWidth:o,className:a="",children:l,...u},c)=>re.createElement("svg",{ref:c,...LN,width:r,height:r,stroke:i,strokeWidth:o?Number(s)*24/Number(r):s,className:["lucide",`lucide-${DN(n)}`,a].join(" "),...u},[...e.map(([f,d])=>re.createElement(f,d)),...Array.isArray(l)?l:[l]]));return t.displayName=`${n}`,t};/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const NN=Kr("ArrowLeft",[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const UN=Kr("ArrowRight",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const IN=Kr("ExternalLink",[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"M10 14 21 3",key:"gplh6r"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const r_=Kr("Github",[["path",{d:"M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4",key:"tonef"}],["path",{d:"M9 18c-4.51 2-5-2-7-2",key:"9comsn"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ON=Kr("Linkedin",[["path",{d:"M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z",key:"c2jq9f"}],["rect",{width:"4",height:"12",x:"2",y:"9",key:"mk3on5"}],["circle",{cx:"4",cy:"4",r:"2",key:"bt5ra8"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const FN=Kr("Mail",[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kN=Kr("MapPin",[["path",{d:"M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z",key:"2oe9fu"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zN=Kr("Phone",[["path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",key:"foiqr5"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const XM=Kr("Star",[["polygon",{points:"12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2",key:"8f66p6"}]]),BN="/Portfolio/assets/logo-qp593hOc.png",HN=()=>{const n=re.useRef(null),e=re.useRef(null),t=re.useRef(null),i=PN(),[r,s]=i.split(":"),[o,a]=re.useState(!1);re.useEffect(()=>{if(t.current&&gn.set(t.current,{opacity:1}),!n.current)return;const u=new mD,c=new Di(75,window.innerWidth/window.innerHeight,.1,1e3),f=new W1({canvas:n.current,antialias:!0,alpha:!0});f.setSize(window.innerWidth,window.innerHeight),f.setClearColor(0,0);const d=new X1({color:16777215,transparent:!0,opacity:.15}),p=[],v=20,g=.5;for(let _=-v;_<=v;_++){const y=new xr().setFromPoints([new $(-v*g,_*g,0),new $(v*g,_*g,0)]),w=new xr().setFromPoints([new $(_*g,-v*g,0),new $(_*g,v*g,0)]),T=new nx(y,d),M=new nx(w,d);p.push(T,M),u.add(T,M)}c.position.z=15;const m=()=>{requestAnimationFrame(m),p.forEach(_=>{_.rotation.z+=5e-4}),f.render(u,c)};m();const h=()=>{const _=window.innerWidth,y=window.innerHeight;c.aspect=_/y,c.updateProjectionMatrix(),f.setSize(_,y)};window.addEventListener("resize",h);const x=gn.timeline({defaults:{ease:"power4.out"}});if(e.current){const _=e.current.querySelectorAll(".animate-in");x.fromTo(_,{y:30,opacity:0},{y:0,opacity:1,duration:1,stagger:.1,delay:.2})}return()=>{window.removeEventListener("resize",h),f.dispose()}},[]);const l=()=>{a(!o);const u=document.querySelector(".star-icon");gn.from(u,{scale:.5,duration:.3,ease:"back.out(1.7)"})};return I.jsxs("section",{className:"relative h-screen w-full overflow-hidden",children:[I.jsx("canvas",{ref:n,className:"absolute inset-0 w-full h-full"}),I.jsxs("div",{ref:t,className:"relative z-10 h-full text-white opacity-0",children:[I.jsx("div",{ref:e,className:"absolute top-0 left-0 right-0 pt-8",children:I.jsxs("div",{className:"w-full grid grid-cols-3 text-left px-8",children:[I.jsxs("div",{className:"flex flex-col",children:[I.jsx("h2",{className:"animate-in text-2xl font-bold tracking-tight text-white",children:"Christen"}),I.jsx("h2",{className:"animate-in text-2xl tracking-tight text-white",children:"Dijoux"})]}),I.jsxs("div",{className:"flex flex-col",children:[I.jsx("p",{className:"animate-in text-base text-white",children:"Saguenay"}),I.jsx("p",{className:"animate-in text-base text-white",children:"Québec, Canada"})]}),I.jsxs("div",{className:"flex flex-col",children:[I.jsx("p",{className:"animate-in text-base text-white",children:"Développeur"}),I.jsx("p",{className:"animate-in text-base mb-4 text-white",children:"Front-end"}),I.jsxs("div",{className:"animate-in flex flex-col mt-32",children:[I.jsx("p",{className:"text-7xl font-bold leading-tight text-white",children:r}),I.jsx("p",{className:"text-7xl font-bold leading-tight text-white",children:s})]})]})]})}),I.jsx("button",{onClick:l,className:"animate-in absolute top-8 right-8 p-2 hover:scale-110 transition-transform duration-300 focus:outline-none","aria-label":o?"Retirer l'étoile":"Ajouter l'étoile",children:I.jsx(XM,{className:`star-icon w-8 h-8 text-white transition-colors duration-300 ${o?"fill-white":"fill-transparent"}`})}),I.jsxs("div",{className:"animate-in absolute bottom-0 left-0 right-0 px-8 pb-8",children:[I.jsx("img",{src:BN,alt:"Logo",className:"w-full mb-8"}),I.jsx("div",{className:"w-full h-px bg-white/20 mb-8"}),I.jsxs("div",{className:"text-sm uppercase tracking-widest text-white",children:["Portfolio de Développeur Créatif — ",new Date().getFullYear()]})]})]})]})};function GN(n,e){for(var t=0;t<e.length;t++){var i=e[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(n,i.key,i)}}function VN(n,e,t){return e&&GN(n.prototype,e),n}/*!
 * Observer 3.12.5
 * https://gsap.com
 *
 * @license Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var _n,pf,vi,_s,vs,Ga,jM,lo,tu,YM,zr,Yi,qM,$M=function(){return _n||typeof window<"u"&&(_n=window.gsap)&&_n.registerPlugin&&_n},KM=1,Pa=[],rt=[],vr=[],nu=Date.now,Lm=function(e,t){return t},WN=function(){var e=tu.core,t=e.bridge||{},i=e._scrollers,r=e._proxies;i.push.apply(i,rt),r.push.apply(r,vr),rt=i,vr=r,Lm=function(o,a){return t[o](a)}},Us=function(e,t){return~vr.indexOf(e)&&vr[vr.indexOf(e)+1][t]},iu=function(e){return!!~YM.indexOf(e)},Un=function(e,t,i,r,s){return e.addEventListener(t,i,{passive:r!==!1,capture:!!s})},Nn=function(e,t,i,r){return e.removeEventListener(t,i,!!r)},zc="scrollLeft",Bc="scrollTop",Dm=function(){return zr&&zr.isPressed||rt.cache++},sd=function(e,t){var i=function r(s){if(s||s===0){KM&&(vi.history.scrollRestoration="manual");var o=zr&&zr.isPressed;s=r.v=Math.round(s)||(zr&&zr.iOS?1:0),e(s),r.cacheID=rt.cache,o&&Lm("ss",s)}else(t||rt.cache!==r.cacheID||Lm("ref"))&&(r.cacheID=rt.cache,r.v=e());return r.v+r.offset};return i.offset=0,e&&i},Gn={s:zc,p:"left",p2:"Left",os:"right",os2:"Right",d:"width",d2:"Width",a:"x",sc:sd(function(n){return arguments.length?vi.scrollTo(n,nn.sc()):vi.pageXOffset||_s[zc]||vs[zc]||Ga[zc]||0})},nn={s:Bc,p:"top",p2:"Top",os:"bottom",os2:"Bottom",d:"height",d2:"Height",a:"y",op:Gn,sc:sd(function(n){return arguments.length?vi.scrollTo(Gn.sc(),n):vi.pageYOffset||_s[Bc]||vs[Bc]||Ga[Bc]||0})},qn=function(e,t){return(t&&t._ctx&&t._ctx.selector||_n.utils.toArray)(e)[0]||(typeof e=="string"&&_n.config().nullTargetWarn!==!1?console.warn("Element not found:",e):null)},Hs=function(e,t){var i=t.s,r=t.sc;iu(e)&&(e=_s.scrollingElement||vs);var s=rt.indexOf(e),o=r===nn.sc?1:2;!~s&&(s=rt.push(e)-1),rt[s+o]||Un(e,"scroll",Dm);var a=rt[s+o],l=a||(rt[s+o]=sd(Us(e,i),!0)||(iu(e)?r:sd(function(u){return arguments.length?e[i]=u:e[i]})));return l.target=e,a||(l.smooth=_n.getProperty(e,"scrollBehavior")==="smooth"),l},Nm=function(e,t,i){var r=e,s=e,o=nu(),a=o,l=t||50,u=Math.max(500,l*3),c=function(v,g){var m=nu();g||m-o>l?(s=r,r=v,a=o,o=m):i?r+=v:r=s+(v-s)/(m-a)*(o-a)},f=function(){s=r=i?0:r,a=o=0},d=function(v){var g=a,m=s,h=nu();return(v||v===0)&&v!==r&&c(v),o===a||h-a>u?0:(r+(i?m:-m))/((i?h:o)-g)*1e3};return{update:c,reset:f,getVelocity:d}},Pl=function(e,t){return t&&!e._gsapAllow&&e.preventDefault(),e.changedTouches?e.changedTouches[0]:e},xx=function(e){var t=Math.max.apply(Math,e),i=Math.min.apply(Math,e);return Math.abs(t)>=Math.abs(i)?t:i},ZM=function(){tu=_n.core.globals().ScrollTrigger,tu&&tu.core&&WN()},QM=function(e){return _n=e||$M(),!pf&&_n&&typeof document<"u"&&document.body&&(vi=window,_s=document,vs=_s.documentElement,Ga=_s.body,YM=[vi,_s,vs,Ga],_n.utils.clamp,qM=_n.core.context||function(){},lo="onpointerenter"in Ga?"pointer":"mouse",jM=Xt.isTouch=vi.matchMedia&&vi.matchMedia("(hover: none), (pointer: coarse)").matches?1:"ontouchstart"in vi||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0?2:0,Yi=Xt.eventTypes=("ontouchstart"in vs?"touchstart,touchmove,touchcancel,touchend":"onpointerdown"in vs?"pointerdown,pointermove,pointercancel,pointerup":"mousedown,mousemove,mouseup,mouseup").split(","),setTimeout(function(){return KM=0},500),ZM(),pf=1),pf};Gn.op=nn;rt.cache=0;var Xt=function(){function n(t){this.init(t)}var e=n.prototype;return e.init=function(i){pf||QM(_n)||console.warn("Please gsap.registerPlugin(Observer)"),tu||ZM();var r=i.tolerance,s=i.dragMinimum,o=i.type,a=i.target,l=i.lineHeight,u=i.debounce,c=i.preventDefault,f=i.onStop,d=i.onStopDelay,p=i.ignore,v=i.wheelSpeed,g=i.event,m=i.onDragStart,h=i.onDragEnd,x=i.onDrag,_=i.onPress,y=i.onRelease,w=i.onRight,T=i.onLeft,M=i.onUp,P=i.onDown,N=i.onChangeX,S=i.onChangeY,R=i.onChange,z=i.onToggleX,K=i.onToggleY,L=i.onHover,Y=i.onHoverEnd,B=i.onMove,X=i.ignoreCheck,D=i.isNormalizer,F=i.onGestureStart,C=i.onGestureEnd,Q=i.onWheel,se=i.onEnable,Oe=i.onDisable,V=i.onClick,ee=i.scrollSpeed,ce=i.capture,xe=i.allowClicks,ye=i.lockAxis,_e=i.onLockAxis;this.target=a=qn(a)||vs,this.vars=i,p&&(p=_n.utils.toArray(p)),r=r||1e-9,s=s||0,v=v||1,ee=ee||1,o=o||"wheel,touch,pointer",u=u!==!1,l||(l=parseFloat(vi.getComputedStyle(Ga).lineHeight)||22);var et,Le,k,Ve,ve,ke,be,G=this,ze=0,We=0,dt=i.passive||!c,b=Hs(a,Gn),E=Hs(a,nn),Z=b(),J=E(),te=~o.indexOf("touch")&&!~o.indexOf("pointer")&&Yi[0]==="pointerdown",ne=iu(a),Ae=a.ownerDocument||_s,Ne=[0,0,0],ae=[0,0,0],he=0,Xe=function(){return he=nu()},ie=function(Ce,Ie){return(G.event=Ce)&&p&&~p.indexOf(Ce.target)||Ie&&te&&Ce.pointerType!=="touch"||X&&X(Ce,Ie)},Tt=function(){G._vx.reset(),G._vy.reset(),Le.pause(),f&&f(G)},je=function(){var Ce=G.deltaX=xx(Ne),Ie=G.deltaY=xx(ae),ue=Math.abs(Ce)>=r,Be=Math.abs(Ie)>=r;R&&(ue||Be)&&R(G,Ce,Ie,Ne,ae),ue&&(w&&G.deltaX>0&&w(G),T&&G.deltaX<0&&T(G),N&&N(G),z&&G.deltaX<0!=ze<0&&z(G),ze=G.deltaX,Ne[0]=Ne[1]=Ne[2]=0),Be&&(P&&G.deltaY>0&&P(G),M&&G.deltaY<0&&M(G),S&&S(G),K&&G.deltaY<0!=We<0&&K(G),We=G.deltaY,ae[0]=ae[1]=ae[2]=0),(Ve||k)&&(B&&B(G),k&&(x(G),k=!1),Ve=!1),ke&&!(ke=!1)&&_e&&_e(G),ve&&(Q(G),ve=!1),et=0},Ue=function(Ce,Ie,ue){Ne[ue]+=Ce,ae[ue]+=Ie,G._vx.update(Ce),G._vy.update(Ie),u?et||(et=requestAnimationFrame(je)):je()},Te=function(Ce,Ie){ye&&!be&&(G.axis=be=Math.abs(Ce)>Math.abs(Ie)?"x":"y",ke=!0),be!=="y"&&(Ne[2]+=Ce,G._vx.update(Ce,!0)),be!=="x"&&(ae[2]+=Ie,G._vy.update(Ie,!0)),u?et||(et=requestAnimationFrame(je)):je()},Ee=function(Ce){if(!ie(Ce,1)){Ce=Pl(Ce,c);var Ie=Ce.clientX,ue=Ce.clientY,Be=Ie-G.x,Fe=ue-G.y,$e=G.isDragging;G.x=Ie,G.y=ue,($e||Math.abs(G.startX-Ie)>=s||Math.abs(G.startY-ue)>=s)&&(x&&(k=!0),$e||(G.isDragging=!0),Te(Be,Fe),$e||m&&m(G))}},Ze=G.onPress=function(Pe){ie(Pe,1)||Pe&&Pe.button||(G.axis=be=null,Le.pause(),G.isPressed=!0,Pe=Pl(Pe),ze=We=0,G.startX=G.x=Pe.clientX,G.startY=G.y=Pe.clientY,G._vx.reset(),G._vy.reset(),Un(D?a:Ae,Yi[1],Ee,dt,!0),G.deltaX=G.deltaY=0,_&&_(G))},pe=G.onRelease=function(Pe){if(!ie(Pe,1)){Nn(D?a:Ae,Yi[1],Ee,!0);var Ce=!isNaN(G.y-G.startY),Ie=G.isDragging,ue=Ie&&(Math.abs(G.x-G.startX)>3||Math.abs(G.y-G.startY)>3),Be=Pl(Pe);!ue&&Ce&&(G._vx.reset(),G._vy.reset(),c&&xe&&_n.delayedCall(.08,function(){if(nu()-he>300&&!Pe.defaultPrevented){if(Pe.target.click)Pe.target.click();else if(Ae.createEvent){var Fe=Ae.createEvent("MouseEvents");Fe.initMouseEvent("click",!0,!0,vi,1,Be.screenX,Be.screenY,Be.clientX,Be.clientY,!1,!1,!1,!1,0,null),Pe.target.dispatchEvent(Fe)}}})),G.isDragging=G.isGesturing=G.isPressed=!1,f&&Ie&&!D&&Le.restart(!0),h&&Ie&&h(G),y&&y(G,ue)}},ut=function(Ce){return Ce.touches&&Ce.touches.length>1&&(G.isGesturing=!0)&&F(Ce,G.isDragging)},U=function(){return(G.isGesturing=!1)||C(G)},fe=function(Ce){if(!ie(Ce)){var Ie=b(),ue=E();Ue((Ie-Z)*ee,(ue-J)*ee,1),Z=Ie,J=ue,f&&Le.restart(!0)}},j=function(Ce){if(!ie(Ce)){Ce=Pl(Ce,c),Q&&(ve=!0);var Ie=(Ce.deltaMode===1?l:Ce.deltaMode===2?vi.innerHeight:1)*v;Ue(Ce.deltaX*Ie,Ce.deltaY*Ie,0),f&&!D&&Le.restart(!0)}},le=function(Ce){if(!ie(Ce)){var Ie=Ce.clientX,ue=Ce.clientY,Be=Ie-G.x,Fe=ue-G.y;G.x=Ie,G.y=ue,Ve=!0,f&&Le.restart(!0),(Be||Fe)&&Te(Be,Fe)}},ge=function(Ce){G.event=Ce,L(G)},Ye=function(Ce){G.event=Ce,Y(G)},ct=function(Ce){return ie(Ce)||Pl(Ce,c)&&V(G)};Le=G._dc=_n.delayedCall(d||.25,Tt).pause(),G.deltaX=G.deltaY=0,G._vx=Nm(0,50,!0),G._vy=Nm(0,50,!0),G.scrollX=b,G.scrollY=E,G.isDragging=G.isGesturing=G.isPressed=!1,qM(this),G.enable=function(Pe){return G.isEnabled||(Un(ne?Ae:a,"scroll",Dm),o.indexOf("scroll")>=0&&Un(ne?Ae:a,"scroll",fe,dt,ce),o.indexOf("wheel")>=0&&Un(a,"wheel",j,dt,ce),(o.indexOf("touch")>=0&&jM||o.indexOf("pointer")>=0)&&(Un(a,Yi[0],Ze,dt,ce),Un(Ae,Yi[2],pe),Un(Ae,Yi[3],pe),xe&&Un(a,"click",Xe,!0,!0),V&&Un(a,"click",ct),F&&Un(Ae,"gesturestart",ut),C&&Un(Ae,"gestureend",U),L&&Un(a,lo+"enter",ge),Y&&Un(a,lo+"leave",Ye),B&&Un(a,lo+"move",le)),G.isEnabled=!0,Pe&&Pe.type&&Ze(Pe),se&&se(G)),G},G.disable=function(){G.isEnabled&&(Pa.filter(function(Pe){return Pe!==G&&iu(Pe.target)}).length||Nn(ne?Ae:a,"scroll",Dm),G.isPressed&&(G._vx.reset(),G._vy.reset(),Nn(D?a:Ae,Yi[1],Ee,!0)),Nn(ne?Ae:a,"scroll",fe,ce),Nn(a,"wheel",j,ce),Nn(a,Yi[0],Ze,ce),Nn(Ae,Yi[2],pe),Nn(Ae,Yi[3],pe),Nn(a,"click",Xe,!0),Nn(a,"click",ct),Nn(Ae,"gesturestart",ut),Nn(Ae,"gestureend",U),Nn(a,lo+"enter",ge),Nn(a,lo+"leave",Ye),Nn(a,lo+"move",le),G.isEnabled=G.isPressed=G.isDragging=!1,Oe&&Oe(G))},G.kill=G.revert=function(){G.disable();var Pe=Pa.indexOf(G);Pe>=0&&Pa.splice(Pe,1),zr===G&&(zr=0)},Pa.push(G),D&&iu(a)&&(zr=G),G.enable(g)},VN(n,[{key:"velocityX",get:function(){return this._vx.getVelocity()}},{key:"velocityY",get:function(){return this._vy.getVelocity()}}]),n}();Xt.version="3.12.5";Xt.create=function(n){return new Xt(n)};Xt.register=QM;Xt.getAll=function(){return Pa.slice()};Xt.getById=function(n){return Pa.filter(function(e){return e.vars.id===n})[0]};$M()&&_n.registerPlugin(Xt);/*!
 * ScrollTrigger 3.12.5
 * https://gsap.com
 *
 * @license Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var Me,da,ot,It,Zi,Rt,JM,od,Fu,ru,kl,Hc,wn,Od,Um,kn,yx,Sx,ha,eE,ip,tE,On,Im,nE,iE,rs,Om,s_,Va,o_,ad,Fm,rp,Gc=1,An=Date.now,sp=An(),zi=0,zl=0,Mx=function(e,t,i){var r=mi(e)&&(e.substr(0,6)==="clamp("||e.indexOf("max")>-1);return i["_"+t+"Clamp"]=r,r?e.substr(6,e.length-7):e},Ex=function(e,t){return t&&(!mi(e)||e.substr(0,6)!=="clamp(")?"clamp("+e+")":e},XN=function n(){return zl&&requestAnimationFrame(n)},Tx=function(){return Od=1},wx=function(){return Od=0},ar=function(e){return e},Bl=function(e){return Math.round(e*1e5)/1e5||0},rE=function(){return typeof window<"u"},sE=function(){return Me||rE()&&(Me=window.gsap)&&Me.registerPlugin&&Me},ko=function(e){return!!~JM.indexOf(e)},oE=function(e){return(e==="Height"?o_:ot["inner"+e])||Zi["client"+e]||Rt["client"+e]},aE=function(e){return Us(e,"getBoundingClientRect")||(ko(e)?function(){return xf.width=ot.innerWidth,xf.height=o_,xf}:function(){return Ur(e)})},jN=function(e,t,i){var r=i.d,s=i.d2,o=i.a;return(o=Us(e,"getBoundingClientRect"))?function(){return o()[r]}:function(){return(t?oE(s):e["client"+s])||0}},YN=function(e,t){return!t||~vr.indexOf(e)?aE(e):function(){return xf}},hr=function(e,t){var i=t.s,r=t.d2,s=t.d,o=t.a;return Math.max(0,(i="scroll"+r)&&(o=Us(e,i))?o()-aE(e)()[s]:ko(e)?(Zi[i]||Rt[i])-oE(r):e[i]-e["offset"+r])},Vc=function(e,t){for(var i=0;i<ha.length;i+=3)(!t||~t.indexOf(ha[i+1]))&&e(ha[i],ha[i+1],ha[i+2])},mi=function(e){return typeof e=="string"},Vn=function(e){return typeof e=="function"},Hl=function(e){return typeof e=="number"},uo=function(e){return typeof e=="object"},Ll=function(e,t,i){return e&&e.progress(t?0:1)&&i&&e.pause()},op=function(e,t){if(e.enabled){var i=e._ctx?e._ctx.add(function(){return t(e)}):t(e);i&&i.totalTime&&(e.callbackAnimation=i)}},ca=Math.abs,lE="left",uE="top",a_="right",l_="bottom",Co="width",Ro="height",su="Right",ou="Left",au="Top",lu="Bottom",Yt="padding",Ni="margin",al="Width",u_="Height",en="px",Ui=function(e){return ot.getComputedStyle(e)},qN=function(e){var t=Ui(e).position;e.style.position=t==="absolute"||t==="fixed"?t:"relative"},Ax=function(e,t){for(var i in t)i in e||(e[i]=t[i]);return e},Ur=function(e,t){var i=t&&Ui(e)[Um]!=="matrix(1, 0, 0, 1, 0, 0)"&&Me.to(e,{x:0,y:0,xPercent:0,yPercent:0,rotation:0,rotationX:0,rotationY:0,scale:1,skewX:0,skewY:0}).progress(1),r=e.getBoundingClientRect();return i&&i.progress(0).kill(),r},ld=function(e,t){var i=t.d2;return e["offset"+i]||e["client"+i]||0},cE=function(e){var t=[],i=e.labels,r=e.duration(),s;for(s in i)t.push(i[s]/r);return t},$N=function(e){return function(t){return Me.utils.snap(cE(e),t)}},c_=function(e){var t=Me.utils.snap(e),i=Array.isArray(e)&&e.slice(0).sort(function(r,s){return r-s});return i?function(r,s,o){o===void 0&&(o=.001);var a;if(!s)return t(r);if(s>0){for(r-=o,a=0;a<i.length;a++)if(i[a]>=r)return i[a];return i[a-1]}else for(a=i.length,r+=o;a--;)if(i[a]<=r)return i[a];return i[0]}:function(r,s,o){o===void 0&&(o=.001);var a=t(r);return!s||Math.abs(a-r)<o||a-r<0==s<0?a:t(s<0?r-e:r+e)}},KN=function(e){return function(t,i){return c_(cE(e))(t,i.direction)}},Wc=function(e,t,i,r){return i.split(",").forEach(function(s){return e(t,s,r)})},un=function(e,t,i,r,s){return e.addEventListener(t,i,{passive:!r,capture:!!s})},ln=function(e,t,i,r){return e.removeEventListener(t,i,!!r)},Xc=function(e,t,i){i=i&&i.wheelHandler,i&&(e(t,"wheel",i),e(t,"touchmove",i))},Cx={startColor:"green",endColor:"red",indent:0,fontSize:"16px",fontWeight:"normal"},jc={toggleActions:"play",anticipatePin:0},ud={top:0,left:0,center:.5,bottom:1,right:1},mf=function(e,t){if(mi(e)){var i=e.indexOf("="),r=~i?+(e.charAt(i-1)+1)*parseFloat(e.substr(i+1)):0;~i&&(e.indexOf("%")>i&&(r*=t/100),e=e.substr(0,i-1)),e=r+(e in ud?ud[e]*t:~e.indexOf("%")?parseFloat(e)*t/100:parseFloat(e)||0)}return e},Yc=function(e,t,i,r,s,o,a,l){var u=s.startColor,c=s.endColor,f=s.fontSize,d=s.indent,p=s.fontWeight,v=It.createElement("div"),g=ko(i)||Us(i,"pinType")==="fixed",m=e.indexOf("scroller")!==-1,h=g?Rt:i,x=e.indexOf("start")!==-1,_=x?u:c,y="border-color:"+_+";font-size:"+f+";color:"+_+";font-weight:"+p+";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";return y+="position:"+((m||l)&&g?"fixed;":"absolute;"),(m||l||!g)&&(y+=(r===nn?a_:l_)+":"+(o+parseFloat(d))+"px;"),a&&(y+="box-sizing:border-box;text-align:left;width:"+a.offsetWidth+"px;"),v._isStart=x,v.setAttribute("class","gsap-marker-"+e+(t?" marker-"+t:"")),v.style.cssText=y,v.innerText=t||t===0?e+"-"+t:e,h.children[0]?h.insertBefore(v,h.children[0]):h.appendChild(v),v._offset=v["offset"+r.op.d2],gf(v,0,r,x),v},gf=function(e,t,i,r){var s={display:"block"},o=i[r?"os2":"p2"],a=i[r?"p2":"os2"];e._isFlipped=r,s[i.a+"Percent"]=r?-100:0,s[i.a]=r?"1px":0,s["border"+o+al]=1,s["border"+a+al]=0,s[i.p]=t+"px",Me.set(e,s)},nt=[],km={},ku,Rx=function(){return An()-zi>34&&(ku||(ku=requestAnimationFrame(Hr)))},fa=function(){(!On||!On.isPressed||On.startX>Rt.clientWidth)&&(rt.cache++,On?ku||(ku=requestAnimationFrame(Hr)):Hr(),zi||Bo("scrollStart"),zi=An())},ap=function(){iE=ot.innerWidth,nE=ot.innerHeight},Gl=function(){rt.cache++,!wn&&!tE&&!It.fullscreenElement&&!It.webkitFullscreenElement&&(!Im||iE!==ot.innerWidth||Math.abs(ot.innerHeight-nE)>ot.innerHeight*.25)&&od.restart(!0)},zo={},ZN=[],fE=function n(){return ln(it,"scrollEnd",n)||vo(!0)},Bo=function(e){return zo[e]&&zo[e].map(function(t){return t()})||ZN},hi=[],dE=function(e){for(var t=0;t<hi.length;t+=5)(!e||hi[t+4]&&hi[t+4].query===e)&&(hi[t].style.cssText=hi[t+1],hi[t].getBBox&&hi[t].setAttribute("transform",hi[t+2]||""),hi[t+3].uncache=1)},f_=function(e,t){var i;for(kn=0;kn<nt.length;kn++)i=nt[kn],i&&(!t||i._ctx===t)&&(e?i.kill(1):i.revert(!0,!0));ad=!0,t&&dE(t),t||Bo("revert")},hE=function(e,t){rt.cache++,(t||!zn)&&rt.forEach(function(i){return Vn(i)&&i.cacheID++&&(i.rec=0)}),mi(e)&&(ot.history.scrollRestoration=s_=e)},zn,bo=0,bx,QN=function(){if(bx!==bo){var e=bx=bo;requestAnimationFrame(function(){return e===bo&&vo(!0)})}},pE=function(){Rt.appendChild(Va),o_=!On&&Va.offsetHeight||ot.innerHeight,Rt.removeChild(Va)},Px=function(e){return Fu(".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end").forEach(function(t){return t.style.display=e?"none":"block"})},vo=function(e,t){if(zi&&!e&&!ad){un(it,"scrollEnd",fE);return}pE(),zn=it.isRefreshing=!0,rt.forEach(function(r){return Vn(r)&&++r.cacheID&&(r.rec=r())});var i=Bo("refreshInit");eE&&it.sort(),t||f_(),rt.forEach(function(r){Vn(r)&&(r.smooth&&(r.target.style.scrollBehavior="auto"),r(0))}),nt.slice(0).forEach(function(r){return r.refresh()}),ad=!1,nt.forEach(function(r){if(r._subPinOffset&&r.pin){var s=r.vars.horizontal?"offsetWidth":"offsetHeight",o=r.pin[s];r.revert(!0,1),r.adjustPinSpacing(r.pin[s]-o),r.refresh()}}),Fm=1,Px(!0),nt.forEach(function(r){var s=hr(r.scroller,r._dir),o=r.vars.end==="max"||r._endClamp&&r.end>s,a=r._startClamp&&r.start>=s;(o||a)&&r.setPositions(a?s-1:r.start,o?Math.max(a?s:r.start+1,s):r.end,!0)}),Px(!1),Fm=0,i.forEach(function(r){return r&&r.render&&r.render(-1)}),rt.forEach(function(r){Vn(r)&&(r.smooth&&requestAnimationFrame(function(){return r.target.style.scrollBehavior="smooth"}),r.rec&&r(r.rec))}),hE(s_,1),od.pause(),bo++,zn=2,Hr(2),nt.forEach(function(r){return Vn(r.vars.onRefresh)&&r.vars.onRefresh(r)}),zn=it.isRefreshing=!1,Bo("refresh")},zm=0,_f=1,uu,Hr=function(e){if(e===2||!zn&&!ad){it.isUpdating=!0,uu&&uu.update(0);var t=nt.length,i=An(),r=i-sp>=50,s=t&&nt[0].scroll();if(_f=zm>s?-1:1,zn||(zm=s),r&&(zi&&!Od&&i-zi>200&&(zi=0,Bo("scrollEnd")),kl=sp,sp=i),_f<0){for(kn=t;kn-- >0;)nt[kn]&&nt[kn].update(0,r);_f=1}else for(kn=0;kn<t;kn++)nt[kn]&&nt[kn].update(0,r);it.isUpdating=!1}ku=0},Bm=[lE,uE,l_,a_,Ni+lu,Ni+su,Ni+au,Ni+ou,"display","flexShrink","float","zIndex","gridColumnStart","gridColumnEnd","gridRowStart","gridRowEnd","gridArea","justifySelf","alignSelf","placeSelf","order"],vf=Bm.concat([Co,Ro,"boxSizing","max"+al,"max"+u_,"position",Ni,Yt,Yt+au,Yt+su,Yt+lu,Yt+ou]),JN=function(e,t,i){Wa(i);var r=e._gsap;if(r.spacerIsNative)Wa(r.spacerState);else if(e._gsap.swappedIn){var s=t.parentNode;s&&(s.insertBefore(e,t),s.removeChild(t))}e._gsap.swappedIn=!1},lp=function(e,t,i,r){if(!e._gsap.swappedIn){for(var s=Bm.length,o=t.style,a=e.style,l;s--;)l=Bm[s],o[l]=i[l];o.position=i.position==="absolute"?"absolute":"relative",i.display==="inline"&&(o.display="inline-block"),a[l_]=a[a_]="auto",o.flexBasis=i.flexBasis||"auto",o.overflow="visible",o.boxSizing="border-box",o[Co]=ld(e,Gn)+en,o[Ro]=ld(e,nn)+en,o[Yt]=a[Ni]=a[uE]=a[lE]="0",Wa(r),a[Co]=a["max"+al]=i[Co],a[Ro]=a["max"+u_]=i[Ro],a[Yt]=i[Yt],e.parentNode!==t&&(e.parentNode.insertBefore(t,e),t.appendChild(e)),e._gsap.swappedIn=!0}},e3=/([A-Z])/g,Wa=function(e){if(e){var t=e.t.style,i=e.length,r=0,s,o;for((e.t._gsap||Me.core.getCache(e.t)).uncache=1;r<i;r+=2)o=e[r+1],s=e[r],o?t[s]=o:t[s]&&t.removeProperty(s.replace(e3,"-$1").toLowerCase())}},qc=function(e){for(var t=vf.length,i=e.style,r=[],s=0;s<t;s++)r.push(vf[s],i[vf[s]]);return r.t=e,r},t3=function(e,t,i){for(var r=[],s=e.length,o=i?8:0,a;o<s;o+=2)a=e[o],r.push(a,a in t?t[a]:e[o+1]);return r.t=e.t,r},xf={left:0,top:0},Lx=function(e,t,i,r,s,o,a,l,u,c,f,d,p,v){Vn(e)&&(e=e(l)),mi(e)&&e.substr(0,3)==="max"&&(e=d+(e.charAt(4)==="="?mf("0"+e.substr(3),i):0));var g=p?p.time():0,m,h,x;if(p&&p.seek(0),isNaN(e)||(e=+e),Hl(e))p&&(e=Me.utils.mapRange(p.scrollTrigger.start,p.scrollTrigger.end,0,d,e)),a&&gf(a,i,r,!0);else{Vn(t)&&(t=t(l));var _=(e||"0").split(" "),y,w,T,M;x=qn(t,l)||Rt,y=Ur(x)||{},(!y||!y.left&&!y.top)&&Ui(x).display==="none"&&(M=x.style.display,x.style.display="block",y=Ur(x),M?x.style.display=M:x.style.removeProperty("display")),w=mf(_[0],y[r.d]),T=mf(_[1]||"0",i),e=y[r.p]-u[r.p]-c+w+s-T,a&&gf(a,T,r,i-T<20||a._isStart&&T>20),i-=i-T}if(v&&(l[v]=e||-.001,e<0&&(e=0)),o){var P=e+i,N=o._isStart;m="scroll"+r.d2,gf(o,P,r,N&&P>20||!N&&(f?Math.max(Rt[m],Zi[m]):o.parentNode[m])<=P+1),f&&(u=Ur(a),f&&(o.style[r.op.p]=u[r.op.p]-r.op.m-o._offset+en))}return p&&x&&(m=Ur(x),p.seek(d),h=Ur(x),p._caScrollDist=m[r.p]-h[r.p],e=e/p._caScrollDist*d),p&&p.seek(g),p?e:Math.round(e)},n3=/(webkit|moz|length|cssText|inset)/i,Dx=function(e,t,i,r){if(e.parentNode!==t){var s=e.style,o,a;if(t===Rt){e._stOrig=s.cssText,a=Ui(e);for(o in a)!+o&&!n3.test(o)&&a[o]&&typeof s[o]=="string"&&o!=="0"&&(s[o]=a[o]);s.top=i,s.left=r}else s.cssText=e._stOrig;Me.core.getCache(e).uncache=1,t.appendChild(e)}},mE=function(e,t,i){var r=t,s=r;return function(o){var a=Math.round(e());return a!==r&&a!==s&&Math.abs(a-r)>3&&Math.abs(a-s)>3&&(o=a,i&&i()),s=r,r=o,o}},$c=function(e,t,i){var r={};r[t.p]="+="+i,Me.set(e,r)},Nx=function(e,t){var i=Hs(e,t),r="_scroll"+t.p2,s=function o(a,l,u,c,f){var d=o.tween,p=l.onComplete,v={};u=u||i();var g=mE(i,u,function(){d.kill(),o.tween=0});return f=c&&f||0,c=c||a-u,d&&d.kill(),l[r]=a,l.inherit=!1,l.modifiers=v,v[r]=function(){return g(u+c*d.ratio+f*d.ratio*d.ratio)},l.onUpdate=function(){rt.cache++,o.tween&&Hr()},l.onComplete=function(){o.tween=0,p&&p.call(d)},d=o.tween=Me.to(e,l),d};return e[r]=i,i.wheelHandler=function(){return s.tween&&s.tween.kill()&&(s.tween=0)},un(e,"wheel",i.wheelHandler),it.isTouch&&un(e,"touchmove",i.wheelHandler),s},it=function(){function n(t,i){da||n.register(Me)||console.warn("Please gsap.registerPlugin(ScrollTrigger)"),Om(this),this.init(t,i)}var e=n.prototype;return e.init=function(i,r){if(this.progress=this.start=0,this.vars&&this.kill(!0,!0),!zl){this.update=this.refresh=this.kill=ar;return}i=Ax(mi(i)||Hl(i)||i.nodeType?{trigger:i}:i,jc);var s=i,o=s.onUpdate,a=s.toggleClass,l=s.id,u=s.onToggle,c=s.onRefresh,f=s.scrub,d=s.trigger,p=s.pin,v=s.pinSpacing,g=s.invalidateOnRefresh,m=s.anticipatePin,h=s.onScrubComplete,x=s.onSnapComplete,_=s.once,y=s.snap,w=s.pinReparent,T=s.pinSpacer,M=s.containerAnimation,P=s.fastScrollEnd,N=s.preventOverlaps,S=i.horizontal||i.containerAnimation&&i.horizontal!==!1?Gn:nn,R=!f&&f!==0,z=qn(i.scroller||ot),K=Me.core.getCache(z),L=ko(z),Y=("pinType"in i?i.pinType:Us(z,"pinType")||L&&"fixed")==="fixed",B=[i.onEnter,i.onLeave,i.onEnterBack,i.onLeaveBack],X=R&&i.toggleActions.split(" "),D="markers"in i?i.markers:jc.markers,F=L?0:parseFloat(Ui(z)["border"+S.p2+al])||0,C=this,Q=i.onRefreshInit&&function(){return i.onRefreshInit(C)},se=jN(z,L,S),Oe=YN(z,L),V=0,ee=0,ce=0,xe=Hs(z,S),ye,_e,et,Le,k,Ve,ve,ke,be,G,ze,We,dt,b,E,Z,J,te,ne,Ae,Ne,ae,he,Xe,ie,Tt,je,Ue,Te,Ee,Ze,pe,ut,U,fe,j,le,ge,Ye;if(C._startClamp=C._endClamp=!1,C._dir=S,m*=45,C.scroller=z,C.scroll=M?M.time.bind(M):xe,Le=xe(),C.vars=i,r=r||i.animation,"refreshPriority"in i&&(eE=1,i.refreshPriority===-9999&&(uu=C)),K.tweenScroll=K.tweenScroll||{top:Nx(z,nn),left:Nx(z,Gn)},C.tweenTo=ye=K.tweenScroll[S.p],C.scrubDuration=function(ue){ut=Hl(ue)&&ue,ut?pe?pe.duration(ue):pe=Me.to(r,{ease:"expo",totalProgress:"+=0",inherit:!1,duration:ut,paused:!0,onComplete:function(){return h&&h(C)}}):(pe&&pe.progress(1).kill(),pe=0)},r&&(r.vars.lazy=!1,r._initted&&!C.isReverted||r.vars.immediateRender!==!1&&i.immediateRender!==!1&&r.duration()&&r.render(0,!0,!0),C.animation=r.pause(),r.scrollTrigger=C,C.scrubDuration(f),Ee=0,l||(l=r.vars.id)),y&&((!uo(y)||y.push)&&(y={snapTo:y}),"scrollBehavior"in Rt.style&&Me.set(L?[Rt,Zi]:z,{scrollBehavior:"auto"}),rt.forEach(function(ue){return Vn(ue)&&ue.target===(L?It.scrollingElement||Zi:z)&&(ue.smooth=!1)}),et=Vn(y.snapTo)?y.snapTo:y.snapTo==="labels"?$N(r):y.snapTo==="labelsDirectional"?KN(r):y.directional!==!1?function(ue,Be){return c_(y.snapTo)(ue,An()-ee<500?0:Be.direction)}:Me.utils.snap(y.snapTo),U=y.duration||{min:.1,max:2},U=uo(U)?ru(U.min,U.max):ru(U,U),fe=Me.delayedCall(y.delay||ut/2||.1,function(){var ue=xe(),Be=An()-ee<500,Fe=ye.tween;if((Be||Math.abs(C.getVelocity())<10)&&!Fe&&!Od&&V!==ue){var $e=(ue-Ve)/b,Ut=r&&!R?r.totalProgress():$e,tt=Be?0:(Ut-Ze)/(An()-kl)*1e3||0,yt=Me.utils.clamp(-$e,1-$e,ca(tt/2)*tt/.185),Qt=$e+(y.inertia===!1?0:yt),wt,St,ht=y,ci=ht.onStart,A=ht.onInterrupt,O=ht.onComplete;if(wt=et(Qt,C),Hl(wt)||(wt=Qt),St=Math.round(Ve+wt*b),ue<=ve&&ue>=Ve&&St!==ue){if(Fe&&!Fe._initted&&Fe.data<=ca(St-ue))return;y.inertia===!1&&(yt=wt-$e),ye(St,{duration:U(ca(Math.max(ca(Qt-Ut),ca(wt-Ut))*.185/tt/.05||0)),ease:y.ease||"power3",data:ca(St-ue),onInterrupt:function(){return fe.restart(!0)&&A&&A(C)},onComplete:function(){C.update(),V=xe(),r&&(pe?pe.resetTo("totalProgress",wt,r._tTime/r._tDur):r.progress(wt)),Ee=Ze=r&&!R?r.totalProgress():C.progress,x&&x(C),O&&O(C)}},ue,yt*b,St-ue-yt*b),ci&&ci(C,ye.tween)}}else C.isActive&&V!==ue&&fe.restart(!0)}).pause()),l&&(km[l]=C),d=C.trigger=qn(d||p!==!0&&p),Ye=d&&d._gsap&&d._gsap.stRevert,Ye&&(Ye=Ye(C)),p=p===!0?d:qn(p),mi(a)&&(a={targets:d,className:a}),p&&(v===!1||v===Ni||(v=!v&&p.parentNode&&p.parentNode.style&&Ui(p.parentNode).display==="flex"?!1:Yt),C.pin=p,_e=Me.core.getCache(p),_e.spacer?E=_e.pinState:(T&&(T=qn(T),T&&!T.nodeType&&(T=T.current||T.nativeElement),_e.spacerIsNative=!!T,T&&(_e.spacerState=qc(T))),_e.spacer=te=T||It.createElement("div"),te.classList.add("pin-spacer"),l&&te.classList.add("pin-spacer-"+l),_e.pinState=E=qc(p)),i.force3D!==!1&&Me.set(p,{force3D:!0}),C.spacer=te=_e.spacer,Te=Ui(p),Xe=Te[v+S.os2],Ae=Me.getProperty(p),Ne=Me.quickSetter(p,S.a,en),lp(p,te,Te),J=qc(p)),D){We=uo(D)?Ax(D,Cx):Cx,G=Yc("scroller-start",l,z,S,We,0),ze=Yc("scroller-end",l,z,S,We,0,G),ne=G["offset"+S.op.d2];var ct=qn(Us(z,"content")||z);ke=this.markerStart=Yc("start",l,ct,S,We,ne,0,M),be=this.markerEnd=Yc("end",l,ct,S,We,ne,0,M),M&&(ge=Me.quickSetter([ke,be],S.a,en)),!Y&&!(vr.length&&Us(z,"fixedMarkers")===!0)&&(qN(L?Rt:z),Me.set([G,ze],{force3D:!0}),Tt=Me.quickSetter(G,S.a,en),Ue=Me.quickSetter(ze,S.a,en))}if(M){var Pe=M.vars.onUpdate,Ce=M.vars.onUpdateParams;M.eventCallback("onUpdate",function(){C.update(0,0,1),Pe&&Pe.apply(M,Ce||[])})}if(C.previous=function(){return nt[nt.indexOf(C)-1]},C.next=function(){return nt[nt.indexOf(C)+1]},C.revert=function(ue,Be){if(!Be)return C.kill(!0);var Fe=ue!==!1||!C.enabled,$e=wn;Fe!==C.isReverted&&(Fe&&(j=Math.max(xe(),C.scroll.rec||0),ce=C.progress,le=r&&r.progress()),ke&&[ke,be,G,ze].forEach(function(Ut){return Ut.style.display=Fe?"none":"block"}),Fe&&(wn=C,C.update(Fe)),p&&(!w||!C.isActive)&&(Fe?JN(p,te,E):lp(p,te,Ui(p),ie)),Fe||C.update(Fe),wn=$e,C.isReverted=Fe)},C.refresh=function(ue,Be,Fe,$e){if(!((wn||!C.enabled)&&!Be)){if(p&&ue&&zi){un(n,"scrollEnd",fE);return}!zn&&Q&&Q(C),wn=C,ye.tween&&!Fe&&(ye.tween.kill(),ye.tween=0),pe&&pe.pause(),g&&r&&r.revert({kill:!1}).invalidate(),C.isReverted||C.revert(!0,!0),C._subPinOffset=!1;var Ut=se(),tt=Oe(),yt=M?M.duration():hr(z,S),Qt=b<=.01,wt=0,St=$e||0,ht=uo(Fe)?Fe.end:i.end,ci=i.endTrigger||d,A=uo(Fe)?Fe.start:i.start||(i.start===0||!d?0:p?"0 0":"0 100%"),O=C.pinnedContainer=i.pinnedContainer&&qn(i.pinnedContainer,C),q=d&&Math.max(0,nt.indexOf(C))||0,W=q,H,de,we,He,Re,De,Ge,Ke,Pt,Jt,pt,Dn,_t;for(D&&uo(Fe)&&(Dn=Me.getProperty(G,S.p),_t=Me.getProperty(ze,S.p));W--;)De=nt[W],De.end||De.refresh(0,1)||(wn=C),Ge=De.pin,Ge&&(Ge===d||Ge===p||Ge===O)&&!De.isReverted&&(Jt||(Jt=[]),Jt.unshift(De),De.revert(!0,!0)),De!==nt[W]&&(q--,W--);for(Vn(A)&&(A=A(C)),A=Mx(A,"start",C),Ve=Lx(A,d,Ut,S,xe(),ke,G,C,tt,F,Y,yt,M,C._startClamp&&"_startClamp")||(p?-.001:0),Vn(ht)&&(ht=ht(C)),mi(ht)&&!ht.indexOf("+=")&&(~ht.indexOf(" ")?ht=(mi(A)?A.split(" ")[0]:"")+ht:(wt=mf(ht.substr(2),Ut),ht=mi(A)?A:(M?Me.utils.mapRange(0,M.duration(),M.scrollTrigger.start,M.scrollTrigger.end,Ve):Ve)+wt,ci=d)),ht=Mx(ht,"end",C),ve=Math.max(Ve,Lx(ht||(ci?"100% 0":yt),ci,Ut,S,xe()+wt,be,ze,C,tt,F,Y,yt,M,C._endClamp&&"_endClamp"))||-.001,wt=0,W=q;W--;)De=nt[W],Ge=De.pin,Ge&&De.start-De._pinPush<=Ve&&!M&&De.end>0&&(H=De.end-(C._startClamp?Math.max(0,De.start):De.start),(Ge===d&&De.start-De._pinPush<Ve||Ge===O)&&isNaN(A)&&(wt+=H*(1-De.progress)),Ge===p&&(St+=H));if(Ve+=wt,ve+=wt,C._startClamp&&(C._startClamp+=wt),C._endClamp&&!zn&&(C._endClamp=ve||-.001,ve=Math.min(ve,hr(z,S))),b=ve-Ve||(Ve-=.01)&&.001,Qt&&(ce=Me.utils.clamp(0,1,Me.utils.normalize(Ve,ve,j))),C._pinPush=St,ke&&wt&&(H={},H[S.a]="+="+wt,O&&(H[S.p]="-="+xe()),Me.set([ke,be],H)),p&&!(Fm&&C.end>=hr(z,S)))H=Ui(p),He=S===nn,we=xe(),ae=parseFloat(Ae(S.a))+St,!yt&&ve>1&&(pt=(L?It.scrollingElement||Zi:z).style,pt={style:pt,value:pt["overflow"+S.a.toUpperCase()]},L&&Ui(Rt)["overflow"+S.a.toUpperCase()]!=="scroll"&&(pt.style["overflow"+S.a.toUpperCase()]="scroll")),lp(p,te,H),J=qc(p),de=Ur(p,!0),Ke=Y&&Hs(z,He?Gn:nn)(),v?(ie=[v+S.os2,b+St+en],ie.t=te,W=v===Yt?ld(p,S)+b+St:0,W&&(ie.push(S.d,W+en),te.style.flexBasis!=="auto"&&(te.style.flexBasis=W+en)),Wa(ie),O&&nt.forEach(function(qe){qe.pin===O&&qe.vars.pinSpacing!==!1&&(qe._subPinOffset=!0)}),Y&&xe(j)):(W=ld(p,S),W&&te.style.flexBasis!=="auto"&&(te.style.flexBasis=W+en)),Y&&(Re={top:de.top+(He?we-Ve:Ke)+en,left:de.left+(He?Ke:we-Ve)+en,boxSizing:"border-box",position:"fixed"},Re[Co]=Re["max"+al]=Math.ceil(de.width)+en,Re[Ro]=Re["max"+u_]=Math.ceil(de.height)+en,Re[Ni]=Re[Ni+au]=Re[Ni+su]=Re[Ni+lu]=Re[Ni+ou]="0",Re[Yt]=H[Yt],Re[Yt+au]=H[Yt+au],Re[Yt+su]=H[Yt+su],Re[Yt+lu]=H[Yt+lu],Re[Yt+ou]=H[Yt+ou],Z=t3(E,Re,w),zn&&xe(0)),r?(Pt=r._initted,ip(1),r.render(r.duration(),!0,!0),he=Ae(S.a)-ae+b+St,je=Math.abs(b-he)>1,Y&&je&&Z.splice(Z.length-2,2),r.render(0,!0,!0),Pt||r.invalidate(!0),r.parent||r.totalTime(r.totalTime()),ip(0)):he=b,pt&&(pt.value?pt.style["overflow"+S.a.toUpperCase()]=pt.value:pt.style.removeProperty("overflow-"+S.a));else if(d&&xe()&&!M)for(de=d.parentNode;de&&de!==Rt;)de._pinOffset&&(Ve-=de._pinOffset,ve-=de._pinOffset),de=de.parentNode;Jt&&Jt.forEach(function(qe){return qe.revert(!1,!0)}),C.start=Ve,C.end=ve,Le=k=zn?j:xe(),!M&&!zn&&(Le<j&&xe(j),C.scroll.rec=0),C.revert(!1,!0),ee=An(),fe&&(V=-1,fe.restart(!0)),wn=0,r&&R&&(r._initted||le)&&r.progress()!==le&&r.progress(le||0,!0).render(r.time(),!0,!0),(Qt||ce!==C.progress||M||g)&&(r&&!R&&r.totalProgress(M&&Ve<-.001&&!ce?Me.utils.normalize(Ve,ve,0):ce,!0),C.progress=Qt||(Le-Ve)/b===ce?0:ce),p&&v&&(te._pinOffset=Math.round(C.progress*he)),pe&&pe.invalidate(),isNaN(Dn)||(Dn-=Me.getProperty(G,S.p),_t-=Me.getProperty(ze,S.p),$c(G,S,Dn),$c(ke,S,Dn-($e||0)),$c(ze,S,_t),$c(be,S,_t-($e||0))),Qt&&!zn&&C.update(),c&&!zn&&!dt&&(dt=!0,c(C),dt=!1)}},C.getVelocity=function(){return(xe()-k)/(An()-kl)*1e3||0},C.endAnimation=function(){Ll(C.callbackAnimation),r&&(pe?pe.progress(1):r.paused()?R||Ll(r,C.direction<0,1):Ll(r,r.reversed()))},C.labelToScroll=function(ue){return r&&r.labels&&(Ve||C.refresh()||Ve)+r.labels[ue]/r.duration()*b||0},C.getTrailing=function(ue){var Be=nt.indexOf(C),Fe=C.direction>0?nt.slice(0,Be).reverse():nt.slice(Be+1);return(mi(ue)?Fe.filter(function($e){return $e.vars.preventOverlaps===ue}):Fe).filter(function($e){return C.direction>0?$e.end<=Ve:$e.start>=ve})},C.update=function(ue,Be,Fe){if(!(M&&!Fe&&!ue)){var $e=zn===!0?j:C.scroll(),Ut=ue?0:($e-Ve)/b,tt=Ut<0?0:Ut>1?1:Ut||0,yt=C.progress,Qt,wt,St,ht,ci,A,O,q;if(Be&&(k=Le,Le=M?xe():$e,y&&(Ze=Ee,Ee=r&&!R?r.totalProgress():tt)),m&&p&&!wn&&!Gc&&zi&&(!tt&&Ve<$e+($e-k)/(An()-kl)*m?tt=1e-4:tt===1&&ve>$e+($e-k)/(An()-kl)*m&&(tt=.9999)),tt!==yt&&C.enabled){if(Qt=C.isActive=!!tt&&tt<1,wt=!!yt&&yt<1,A=Qt!==wt,ci=A||!!tt!=!!yt,C.direction=tt>yt?1:-1,C.progress=tt,ci&&!wn&&(St=tt&&!yt?0:tt===1?1:yt===1?2:3,R&&(ht=!A&&X[St+1]!=="none"&&X[St+1]||X[St],q=r&&(ht==="complete"||ht==="reset"||ht in r))),N&&(A||q)&&(q||f||!r)&&(Vn(N)?N(C):C.getTrailing(N).forEach(function(we){return we.endAnimation()})),R||(pe&&!wn&&!Gc?(pe._dp._time-pe._start!==pe._time&&pe.render(pe._dp._time-pe._start),pe.resetTo?pe.resetTo("totalProgress",tt,r._tTime/r._tDur):(pe.vars.totalProgress=tt,pe.invalidate().restart())):r&&r.totalProgress(tt,!!(wn&&(ee||ue)))),p){if(ue&&v&&(te.style[v+S.os2]=Xe),!Y)Ne(Bl(ae+he*tt));else if(ci){if(O=!ue&&tt>yt&&ve+1>$e&&$e+1>=hr(z,S),w)if(!ue&&(Qt||O)){var W=Ur(p,!0),H=$e-Ve;Dx(p,Rt,W.top+(S===nn?H:0)+en,W.left+(S===nn?0:H)+en)}else Dx(p,te);Wa(Qt||O?Z:J),je&&tt<1&&Qt||Ne(ae+(tt===1&&!O?he:0))}}y&&!ye.tween&&!wn&&!Gc&&fe.restart(!0),a&&(A||_&&tt&&(tt<1||!rp))&&Fu(a.targets).forEach(function(we){return we.classList[Qt||_?"add":"remove"](a.className)}),o&&!R&&!ue&&o(C),ci&&!wn?(R&&(q&&(ht==="complete"?r.pause().totalProgress(1):ht==="reset"?r.restart(!0).pause():ht==="restart"?r.restart(!0):r[ht]()),o&&o(C)),(A||!rp)&&(u&&A&&op(C,u),B[St]&&op(C,B[St]),_&&(tt===1?C.kill(!1,1):B[St]=0),A||(St=tt===1?1:3,B[St]&&op(C,B[St]))),P&&!Qt&&Math.abs(C.getVelocity())>(Hl(P)?P:2500)&&(Ll(C.callbackAnimation),pe?pe.progress(1):Ll(r,ht==="reverse"?1:!tt,1))):R&&o&&!wn&&o(C)}if(Ue){var de=M?$e/M.duration()*(M._caScrollDist||0):$e;Tt(de+(G._isFlipped?1:0)),Ue(de)}ge&&ge(-$e/M.duration()*(M._caScrollDist||0))}},C.enable=function(ue,Be){C.enabled||(C.enabled=!0,un(z,"resize",Gl),L||un(z,"scroll",fa),Q&&un(n,"refreshInit",Q),ue!==!1&&(C.progress=ce=0,Le=k=V=xe()),Be!==!1&&C.refresh())},C.getTween=function(ue){return ue&&ye?ye.tween:pe},C.setPositions=function(ue,Be,Fe,$e){if(M){var Ut=M.scrollTrigger,tt=M.duration(),yt=Ut.end-Ut.start;ue=Ut.start+yt*ue/tt,Be=Ut.start+yt*Be/tt}C.refresh(!1,!1,{start:Ex(ue,Fe&&!!C._startClamp),end:Ex(Be,Fe&&!!C._endClamp)},$e),C.update()},C.adjustPinSpacing=function(ue){if(ie&&ue){var Be=ie.indexOf(S.d)+1;ie[Be]=parseFloat(ie[Be])+ue+en,ie[1]=parseFloat(ie[1])+ue+en,Wa(ie)}},C.disable=function(ue,Be){if(C.enabled&&(ue!==!1&&C.revert(!0,!0),C.enabled=C.isActive=!1,Be||pe&&pe.pause(),j=0,_e&&(_e.uncache=1),Q&&ln(n,"refreshInit",Q),fe&&(fe.pause(),ye.tween&&ye.tween.kill()&&(ye.tween=0)),!L)){for(var Fe=nt.length;Fe--;)if(nt[Fe].scroller===z&&nt[Fe]!==C)return;ln(z,"resize",Gl),L||ln(z,"scroll",fa)}},C.kill=function(ue,Be){C.disable(ue,Be),pe&&!Be&&pe.kill(),l&&delete km[l];var Fe=nt.indexOf(C);Fe>=0&&nt.splice(Fe,1),Fe===kn&&_f>0&&kn--,Fe=0,nt.forEach(function($e){return $e.scroller===C.scroller&&(Fe=1)}),Fe||zn||(C.scroll.rec=0),r&&(r.scrollTrigger=null,ue&&r.revert({kill:!1}),Be||r.kill()),ke&&[ke,be,G,ze].forEach(function($e){return $e.parentNode&&$e.parentNode.removeChild($e)}),uu===C&&(uu=0),p&&(_e&&(_e.uncache=1),Fe=0,nt.forEach(function($e){return $e.pin===p&&Fe++}),Fe||(_e.spacer=0)),i.onKill&&i.onKill(C)},nt.push(C),C.enable(!1,!1),Ye&&Ye(C),r&&r.add&&!b){var Ie=C.update;C.update=function(){C.update=Ie,Ve||ve||C.refresh()},Me.delayedCall(.01,C.update),b=.01,Ve=ve=0}else C.refresh();p&&QN()},n.register=function(i){return da||(Me=i||sE(),rE()&&window.document&&n.enable(),da=zl),da},n.defaults=function(i){if(i)for(var r in i)jc[r]=i[r];return jc},n.disable=function(i,r){zl=0,nt.forEach(function(o){return o[r?"kill":"disable"](i)}),ln(ot,"wheel",fa),ln(It,"scroll",fa),clearInterval(Hc),ln(It,"touchcancel",ar),ln(Rt,"touchstart",ar),Wc(ln,It,"pointerdown,touchstart,mousedown",Tx),Wc(ln,It,"pointerup,touchend,mouseup",wx),od.kill(),Vc(ln);for(var s=0;s<rt.length;s+=3)Xc(ln,rt[s],rt[s+1]),Xc(ln,rt[s],rt[s+2])},n.enable=function(){if(ot=window,It=document,Zi=It.documentElement,Rt=It.body,Me&&(Fu=Me.utils.toArray,ru=Me.utils.clamp,Om=Me.core.context||ar,ip=Me.core.suppressOverwrites||ar,s_=ot.history.scrollRestoration||"auto",zm=ot.pageYOffset,Me.core.globals("ScrollTrigger",n),Rt)){zl=1,Va=document.createElement("div"),Va.style.height="100vh",Va.style.position="absolute",pE(),XN(),Xt.register(Me),n.isTouch=Xt.isTouch,rs=Xt.isTouch&&/(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent),Im=Xt.isTouch===1,un(ot,"wheel",fa),JM=[ot,It,Zi,Rt],Me.matchMedia?(n.matchMedia=function(l){var u=Me.matchMedia(),c;for(c in l)u.add(c,l[c]);return u},Me.addEventListener("matchMediaInit",function(){return f_()}),Me.addEventListener("matchMediaRevert",function(){return dE()}),Me.addEventListener("matchMedia",function(){vo(0,1),Bo("matchMedia")}),Me.matchMedia("(orientation: portrait)",function(){return ap(),ap})):console.warn("Requires GSAP 3.11.0 or later"),ap(),un(It,"scroll",fa);var i=Rt.style,r=i.borderTopStyle,s=Me.core.Animation.prototype,o,a;for(s.revert||Object.defineProperty(s,"revert",{value:function(){return this.time(-.01,!0)}}),i.borderTopStyle="solid",o=Ur(Rt),nn.m=Math.round(o.top+nn.sc())||0,Gn.m=Math.round(o.left+Gn.sc())||0,r?i.borderTopStyle=r:i.removeProperty("border-top-style"),Hc=setInterval(Rx,250),Me.delayedCall(.5,function(){return Gc=0}),un(It,"touchcancel",ar),un(Rt,"touchstart",ar),Wc(un,It,"pointerdown,touchstart,mousedown",Tx),Wc(un,It,"pointerup,touchend,mouseup",wx),Um=Me.utils.checkPrefix("transform"),vf.push(Um),da=An(),od=Me.delayedCall(.2,vo).pause(),ha=[It,"visibilitychange",function(){var l=ot.innerWidth,u=ot.innerHeight;It.hidden?(yx=l,Sx=u):(yx!==l||Sx!==u)&&Gl()},It,"DOMContentLoaded",vo,ot,"load",vo,ot,"resize",Gl],Vc(un),nt.forEach(function(l){return l.enable(0,1)}),a=0;a<rt.length;a+=3)Xc(ln,rt[a],rt[a+1]),Xc(ln,rt[a],rt[a+2])}},n.config=function(i){"limitCallbacks"in i&&(rp=!!i.limitCallbacks);var r=i.syncInterval;r&&clearInterval(Hc)||(Hc=r)&&setInterval(Rx,r),"ignoreMobileResize"in i&&(Im=n.isTouch===1&&i.ignoreMobileResize),"autoRefreshEvents"in i&&(Vc(ln)||Vc(un,i.autoRefreshEvents||"none"),tE=(i.autoRefreshEvents+"").indexOf("resize")===-1)},n.scrollerProxy=function(i,r){var s=qn(i),o=rt.indexOf(s),a=ko(s);~o&&rt.splice(o,a?6:2),r&&(a?vr.unshift(ot,r,Rt,r,Zi,r):vr.unshift(s,r))},n.clearMatchMedia=function(i){nt.forEach(function(r){return r._ctx&&r._ctx.query===i&&r._ctx.kill(!0,!0)})},n.isInViewport=function(i,r,s){var o=(mi(i)?qn(i):i).getBoundingClientRect(),a=o[s?Co:Ro]*r||0;return s?o.right-a>0&&o.left+a<ot.innerWidth:o.bottom-a>0&&o.top+a<ot.innerHeight},n.positionInViewport=function(i,r,s){mi(i)&&(i=qn(i));var o=i.getBoundingClientRect(),a=o[s?Co:Ro],l=r==null?a/2:r in ud?ud[r]*a:~r.indexOf("%")?parseFloat(r)*a/100:parseFloat(r)||0;return s?(o.left+l)/ot.innerWidth:(o.top+l)/ot.innerHeight},n.killAll=function(i){if(nt.slice(0).forEach(function(s){return s.vars.id!=="ScrollSmoother"&&s.kill()}),i!==!0){var r=zo.killAll||[];zo={},r.forEach(function(s){return s()})}},n}();it.version="3.12.5";it.saveStyles=function(n){return n?Fu(n).forEach(function(e){if(e&&e.style){var t=hi.indexOf(e);t>=0&&hi.splice(t,5),hi.push(e,e.style.cssText,e.getBBox&&e.getAttribute("transform"),Me.core.getCache(e),Om())}}):hi};it.revert=function(n,e){return f_(!n,e)};it.create=function(n,e){return new it(n,e)};it.refresh=function(n){return n?Gl():(da||it.register())&&vo(!0)};it.update=function(n){return++rt.cache&&Hr(n===!0?2:0)};it.clearScrollMemory=hE;it.maxScroll=function(n,e){return hr(n,e?Gn:nn)};it.getScrollFunc=function(n,e){return Hs(qn(n),e?Gn:nn)};it.getById=function(n){return km[n]};it.getAll=function(){return nt.filter(function(n){return n.vars.id!=="ScrollSmoother"})};it.isScrolling=function(){return!!zi};it.snapDirectional=c_;it.addEventListener=function(n,e){var t=zo[n]||(zo[n]=[]);~t.indexOf(e)||t.push(e)};it.removeEventListener=function(n,e){var t=zo[n],i=t&&t.indexOf(e);i>=0&&t.splice(i,1)};it.batch=function(n,e){var t=[],i={},r=e.interval||.016,s=e.batchMax||1e9,o=function(u,c){var f=[],d=[],p=Me.delayedCall(r,function(){c(f,d),f=[],d=[]}).pause();return function(v){f.length||p.restart(!0),f.push(v.trigger),d.push(v),s<=f.length&&p.progress(1)}},a;for(a in e)i[a]=a.substr(0,2)==="on"&&Vn(e[a])&&a!=="onRefreshInit"?o(a,e[a]):e[a];return Vn(s)&&(s=s(),un(it,"refresh",function(){return s=e.batchMax()})),Fu(n).forEach(function(l){var u={};for(a in i)u[a]=i[a];u.trigger=l,t.push(it.create(u))}),t};var Ux=function(e,t,i,r){return t>r?e(r):t<0&&e(0),i>r?(r-t)/(i-t):i<0?t/(t-i):1},up=function n(e,t){t===!0?e.style.removeProperty("touch-action"):e.style.touchAction=t===!0?"auto":t?"pan-"+t+(Xt.isTouch?" pinch-zoom":""):"none",e===Zi&&n(Rt,t)},Kc={auto:1,scroll:1},i3=function(e){var t=e.event,i=e.target,r=e.axis,s=(t.changedTouches?t.changedTouches[0]:t).target,o=s._gsap||Me.core.getCache(s),a=An(),l;if(!o._isScrollT||a-o._isScrollT>2e3){for(;s&&s!==Rt&&(s.scrollHeight<=s.clientHeight&&s.scrollWidth<=s.clientWidth||!(Kc[(l=Ui(s)).overflowY]||Kc[l.overflowX]));)s=s.parentNode;o._isScroll=s&&s!==i&&!ko(s)&&(Kc[(l=Ui(s)).overflowY]||Kc[l.overflowX]),o._isScrollT=a}(o._isScroll||r==="x")&&(t.stopPropagation(),t._gsapAllow=!0)},gE=function(e,t,i,r){return Xt.create({target:e,capture:!0,debounce:!1,lockAxis:!0,type:t,onWheel:r=r&&i3,onPress:r,onDrag:r,onScroll:r,onEnable:function(){return i&&un(It,Xt.eventTypes[0],Ox,!1,!0)},onDisable:function(){return ln(It,Xt.eventTypes[0],Ox,!0)}})},r3=/(input|label|select|textarea)/i,Ix,Ox=function(e){var t=r3.test(e.target.tagName);(t||Ix)&&(e._gsapAllow=!0,Ix=t)},s3=function(e){uo(e)||(e={}),e.preventDefault=e.isNormalizer=e.allowClicks=!0,e.type||(e.type="wheel,touch"),e.debounce=!!e.debounce,e.id=e.id||"normalizer";var t=e,i=t.normalizeScrollX,r=t.momentum,s=t.allowNestedScroll,o=t.onRelease,a,l,u=qn(e.target)||Zi,c=Me.core.globals().ScrollSmoother,f=c&&c.get(),d=rs&&(e.content&&qn(e.content)||f&&e.content!==!1&&!f.smooth()&&f.content()),p=Hs(u,nn),v=Hs(u,Gn),g=1,m=(Xt.isTouch&&ot.visualViewport?ot.visualViewport.scale*ot.visualViewport.width:ot.outerWidth)/ot.innerWidth,h=0,x=Vn(r)?function(){return r(a)}:function(){return r||2.8},_,y,w=gE(u,e.type,!0,s),T=function(){return y=!1},M=ar,P=ar,N=function(){l=hr(u,nn),P=ru(rs?1:0,l),i&&(M=ru(0,hr(u,Gn))),_=bo},S=function(){d._gsap.y=Bl(parseFloat(d._gsap.y)+p.offset)+"px",d.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+parseFloat(d._gsap.y)+", 0, 1)",p.offset=p.cacheID=0},R=function(){if(y){requestAnimationFrame(T);var D=Bl(a.deltaY/2),F=P(p.v-D);if(d&&F!==p.v+p.offset){p.offset=F-p.v;var C=Bl((parseFloat(d&&d._gsap.y)||0)-p.offset);d.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+C+", 0, 1)",d._gsap.y=C+"px",p.cacheID=rt.cache,Hr()}return!0}p.offset&&S(),y=!0},z,K,L,Y,B=function(){N(),z.isActive()&&z.vars.scrollY>l&&(p()>l?z.progress(1)&&p(l):z.resetTo("scrollY",l))};return d&&Me.set(d,{y:"+=0"}),e.ignoreCheck=function(X){return rs&&X.type==="touchmove"&&R()||g>1.05&&X.type!=="touchstart"||a.isGesturing||X.touches&&X.touches.length>1},e.onPress=function(){y=!1;var X=g;g=Bl((ot.visualViewport&&ot.visualViewport.scale||1)/m),z.pause(),X!==g&&up(u,g>1.01?!0:i?!1:"x"),K=v(),L=p(),N(),_=bo},e.onRelease=e.onGestureStart=function(X,D){if(p.offset&&S(),!D)Y.restart(!0);else{rt.cache++;var F=x(),C,Q;i&&(C=v(),Q=C+F*.05*-X.velocityX/.227,F*=Ux(v,C,Q,hr(u,Gn)),z.vars.scrollX=M(Q)),C=p(),Q=C+F*.05*-X.velocityY/.227,F*=Ux(p,C,Q,hr(u,nn)),z.vars.scrollY=P(Q),z.invalidate().duration(F).play(.01),(rs&&z.vars.scrollY>=l||C>=l-1)&&Me.to({},{onUpdate:B,duration:F})}o&&o(X)},e.onWheel=function(){z._ts&&z.pause(),An()-h>1e3&&(_=0,h=An())},e.onChange=function(X,D,F,C,Q){if(bo!==_&&N(),D&&i&&v(M(C[2]===D?K+(X.startX-X.x):v()+D-C[1])),F){p.offset&&S();var se=Q[2]===F,Oe=se?L+X.startY-X.y:p()+F-Q[1],V=P(Oe);se&&Oe!==V&&(L+=V-Oe),p(V)}(F||D)&&Hr()},e.onEnable=function(){up(u,i?!1:"x"),it.addEventListener("refresh",B),un(ot,"resize",B),p.smooth&&(p.target.style.scrollBehavior="auto",p.smooth=v.smooth=!1),w.enable()},e.onDisable=function(){up(u,!0),ln(ot,"resize",B),it.removeEventListener("refresh",B),w.kill()},e.lockAxis=e.lockAxis!==!1,a=new Xt(e),a.iOS=rs,rs&&!p()&&p(1),rs&&Me.ticker.add(ar),Y=a._dc,z=Me.to(a,{ease:"power4",paused:!0,inherit:!1,scrollX:i?"+=0.1":"+=0",scrollY:"+=0.1",modifiers:{scrollY:mE(p,p(),function(){return z.pause()})},onUpdate:Hr,onComplete:Y.vars.onComplete}),a};it.sort=function(n){return nt.sort(n||function(e,t){return(e.vars.refreshPriority||0)*-1e6+e.start-(t.start+(t.vars.refreshPriority||0)*-1e6)})};it.observe=function(n){return new Xt(n)};it.normalizeScroll=function(n){if(typeof n>"u")return On;if(n===!0&&On)return On.enable();if(n===!1){On&&On.kill(),On=n;return}var e=n instanceof Xt?n:s3(n);return On&&On.target===e.target&&On.kill(),ko(e.target)&&(On=e),e};it.core={_getVelocityProp:Nm,_inputObserver:gE,_scrollers:rt,_proxies:vr,bridge:{ss:function(){zi||Bo("scrollStart"),zi=An()},ref:function(){return wn}}};sE()&&Me.registerPlugin(it);gn.registerPlugin(it);const o3=["HTML/CSS","JavaScript","React","TypeScript","PHP","MySQL","jQuery","SCSS","Bootstrap","UI/UX Design","Animation Web","Développement Front-end"],a3=[{title:"Techniques d'Intégration Multimédia",place:"Cégep de Jonquière",role:"Développement front-end, UX/UI",period:"2021 - 2025"},{title:"Formation en Développement d'Applications Front-End (React)",place:"edX, en partenariat avec IBM",role:"React.js, JSX, ES6, Redux, hooks",period:"2024"},{title:"Certificat en Design de Jeux Vidéo",place:"Cégep de Jonquière",role:"Level design et création d'expériences interactives",period:"2023"}],l3=()=>{const n=re.useRef(null),e=re.useRef([]),t=re.useRef(null),i=re.useRef(null);return re.useEffect(()=>{const r=gn.context(()=>{e.current.forEach((s,o)=>{s&&gn.fromTo(s,{y:50,opacity:0},{scrollTrigger:{trigger:s,start:"top bottom-=100",end:"top center",scrub:!1,markers:!1},y:0,opacity:1,duration:1,ease:"power4.out"})}),t.current&&gn.fromTo(t.current.children,{scale:.8,opacity:0},{scrollTrigger:{trigger:t.current,start:"top bottom-=100",end:"top center",scrub:!1,markers:!1},scale:1,opacity:1,duration:.6,stagger:.05,ease:"power2.out"}),i.current&&gn.fromTo(i.current.children,{x:-50,opacity:0},{scrollTrigger:{trigger:i.current,start:"top bottom-=100",end:"top center",scrub:!1,markers:!1},x:0,opacity:1,duration:.8,stagger:.1,ease:"power3.out"})},n);return()=>r.revert()},[]),I.jsx("section",{ref:n,id:"about",className:"min-h-screen w-full bg-black text-white py-24 px-8",children:I.jsxs("div",{className:"max-w-6xl mx-auto",children:[I.jsx("h2",{className:"text-4xl font-bold mb-16 border-b border-white/20 pb-4",children:"À propos"}),I.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-16",children:[I.jsxs("div",{className:"space-y-8",children:[I.jsx("p",{ref:r=>e.current[0]=r,className:"text-lg leading-relaxed text-white",children:"Actuellement étudiant en Techniques d'Intégration Multimédia au Cégep de Jonquière, je suis passionné par la création d'expériences utilisateurs captivantes à travers le développement web et le design."}),I.jsx("p",{ref:r=>e.current[1]=r,className:"text-lg leading-relaxed text-white",children:"Mon parcours inclut un poste de Chargé de Communication au CHU de La Réunion, où j'ai géré les mises à jour du site web et créé divers supports de communication. Cette expérience a alimenté ma passion pour le développement web et m'a poussé à approfondir mes compétences techniques."}),I.jsx("p",{ref:r=>e.current[2]=r,className:"text-lg leading-relaxed text-white",children:"Je m'épanouis dans des environnements dynamiques où je peux appliquer ma créativité pour concevoir des interfaces utilisateurs esthétiques et fonctionnelles, tout en recherchant de nouveaux défis et opportunités d'innovation."})]}),I.jsxs("div",{className:"space-y-16",children:[I.jsxs("div",{children:[I.jsx("h3",{className:"text-2xl font-semibold mb-6",children:"Formation"}),I.jsx("div",{ref:i,className:"space-y-8",children:a3.map((r,s)=>I.jsxs("div",{className:"border-l-2 border-white/20 pl-6",children:[I.jsx("h4",{className:"text-xl font-medium text-white",children:r.title}),I.jsx("p",{className:"text-white mt-1",children:r.place}),I.jsx("p",{className:"text-white",children:r.role}),I.jsx("p",{className:"text-sm text-white/60 mt-2",children:r.period})]},s))})]}),I.jsxs("div",{children:[I.jsx("h3",{className:"text-2xl font-semibold mb-6",children:"Compétences"}),I.jsx("div",{ref:t,className:"flex flex-wrap gap-3",children:o3.map((r,s)=>I.jsx("span",{className:`px-4 py-2 border border-white/20 rounded-full text-sm text-white 
                             hover:bg-white hover:text-black transition-colors duration-300`,children:r},s))})]})]})]})]})})},u3="/Portfolio/assets/AkiProject-Bc0Dx3d6.png",c3="/Portfolio/assets/AkiMusic-BbvD-K0x.png",f3="/Portfolio/assets/webana-_gA6bLTH.png";gn.registerPlugin(it);const d3=[{title:"AkiProject",description:"Gestionnaire de tâches et messagerie en temps réel développés avec Bootstrap, jQuery, et PHP. Conçu pour démontrer les compétences en communication asynchrone et gestion de tâches dans un contexte académique.",languages:["Php","SQL","Bootstrap","jQuery","AJAX"],image:u3,siteUrl:"https://christenalexisdijoux.techniquesmedia.com/cms1/wr/Workspace/index.php",codeUrl:"https://github.com/Akiyo974/akiproject"},{title:"AkiMusic",description:"AkiMusic est un projet de démonstration pour une plateforme de streaming musical, conçu pour simuler des fonctionnalités telles que les abonnements et la gestion de playlists. Bien qu'il ne fonctionne pas réellement pour le streaming, il sert d'exemple pour illustrer une interface utilisateur et des options de navigation pour un service de musique en ligne.",languages:["Php","Bootstrap","jQuery"],image:c3,siteUrl:"https://christenalexisdijoux.techniquesmedia.com/AkiMusic/index.php#",codeUrl:"non"},{title:"Webana",description:"Ce projet est une refonte personnelle d'un ancien site web sur l'histoire des katanas, visant à moderniser et améliorer l'organisation des styles avec HTML, CSS, JavaScript, Bootstrap, jQuery et SCSS pour une meilleure modularité et maintenabilité.",languages:["Scss","Bootstrap","JavaScript"],image:f3,siteUrl:"https://akiyo974.github.io/webana/",codeUrl:"https://github.com/Akiyo974/webana"}],h3=()=>{const n=re.useRef(null),e=re.useRef([]),t=re.useRef(null);return re.useEffect(()=>{const i=gn.context(()=>{e.current.forEach((r,s)=>{r&&gn.fromTo(r,{y:100,opacity:0,scale:.95},{scrollTrigger:{trigger:r,start:"top bottom-=100",end:"top center",scrub:1,markers:!1},y:0,opacity:1,scale:1,duration:1,ease:"power4.out"})}),t.current&&gn.fromTo(t.current,{y:30,opacity:0},{scrollTrigger:{trigger:t.current,start:"top bottom-=50",end:"top center",scrub:1,markers:!1},y:0,opacity:1,duration:1,ease:"power3.out"})},n);return()=>i.revert()},[]),I.jsx("section",{ref:n,className:"min-h-screen w-full bg-black text-white py-24 px-8",children:I.jsxs("div",{className:"max-w-6xl mx-auto",children:[I.jsx("h2",{className:"text-4xl font-bold mb-16 border-b border-white/20 pb-4",children:"Projets Sélectionnés"}),I.jsx("div",{className:"grid grid-cols-1 gap-16",children:d3.map((i,r)=>I.jsx("div",{ref:s=>e.current[r]=s,className:"group relative bg-white/5 rounded-lg overflow-hidden",children:I.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-8",children:[I.jsxs("div",{className:"relative aspect-[4/3] overflow-hidden",children:[I.jsx("div",{className:"absolute inset-0 bg-black/50 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"}),I.jsx("img",{src:i.image,alt:i.title,className:"absolute inset-0 w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"})]}),I.jsxs("div",{className:"p-8 flex flex-col justify-between",children:[I.jsxs("div",{children:[I.jsx("h3",{className:"text-2xl font-bold mb-4",children:i.title}),I.jsx("p",{className:"text-white/70 mb-6 leading-relaxed",children:i.description}),I.jsxs("div",{className:"mb-8",children:[I.jsx("h4",{className:"text-sm uppercase tracking-wider text-white/50 mb-3",children:"Technologies"}),I.jsx("div",{className:"flex flex-wrap gap-2",children:i.languages.map(s=>I.jsx("span",{className:`px-3 py-1 text-sm border border-white/20 rounded-full 
                                     hover:bg-white hover:text-black transition-colors duration-300`,children:s},s))})]})]}),I.jsxs("div",{className:"flex gap-4",children:[I.jsxs("a",{href:i.siteUrl,target:"_blank",rel:"noopener noreferrer",className:`flex items-center gap-2 px-4 py-2 rounded-lg 
                                 transition-colors duration-300 ${i.siteUrl==="non"?"bg-gray-500 cursor-not-allowed":"bg-white text-black hover:bg-white/90"}`,"aria-disabled":i.siteUrl==="non",onClick:s=>i.siteUrl==="non"&&s.preventDefault(),children:[I.jsx(IN,{className:"w-4 h-4"}),I.jsx("span",{children:"Démo en direct"})]}),I.jsxs("a",{href:i.codeUrl,target:"_blank",rel:"noopener noreferrer",className:`flex items-center gap-2 px-4 py-2 border rounded-lg 
                                 transition-colors duration-300 ${i.codeUrl==="non"?"border-gray-500 text-gray-500 cursor-not-allowed":"border-white/20 hover:bg-white hover:text-black"}`,"aria-disabled":i.codeUrl==="non",onClick:s=>i.codeUrl==="non"&&s.preventDefault(),children:[I.jsx(r_,{className:"w-4 h-4"}),I.jsx("span",{children:"Voir le code"})]})]})]})]})},i.title))}),I.jsx("div",{className:"mt-20 text-center",children:I.jsxs("a",{href:"/projects",ref:t,className:`inline-flex items-center gap-3 px-8 py-4 text-lg font-medium 
                     border-2 border-white rounded-lg hover:bg-white hover:text-black 
                     transition-colors duration-300 group`,children:["Voir Tous les Projets",I.jsx(UN,{className:"w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300"})]})})]})})},zu={_origin:"https://api.emailjs.com"},p3=(n,e="https://api.emailjs.com")=>{zu._userID=n,zu._origin=e},_E=(n,e,t)=>{if(!n)throw"The user ID is required. Visit https://dashboard.emailjs.com/admin/integration";if(!e)throw"The service ID is required. Visit https://dashboard.emailjs.com/admin";if(!t)throw"The template ID is required. Visit https://dashboard.emailjs.com/admin/templates";return!0};class Fx{constructor(e){this.status=e.status,this.text=e.responseText}}const vE=(n,e,t={})=>new Promise((i,r)=>{const s=new XMLHttpRequest;s.addEventListener("load",({target:o})=>{const a=new Fx(o);a.status===200||a.text==="OK"?i(a):r(a)}),s.addEventListener("error",({target:o})=>{r(new Fx(o))}),s.open("POST",zu._origin+n,!0),Object.keys(t).forEach(o=>{s.setRequestHeader(o,t[o])}),s.send(e)}),m3=(n,e,t,i)=>{const r=i||zu._userID;return _E(r,n,e),vE("/api/v1.0/email/send",JSON.stringify({lib_version:"3.2.0",user_id:r,service_id:n,template_id:e,template_params:t}),{"Content-type":"application/json"})},g3=n=>{let e;if(typeof n=="string"?e=document.querySelector(n):e=n,!e||e.nodeName!=="FORM")throw"The 3rd parameter is expected to be the HTML form element or the style selector of form";return e},_3=(n,e,t,i)=>{const r=i||zu._userID,s=g3(t);_E(r,n,e);const o=new FormData(s);return o.append("lib_version","3.2.0"),o.append("service_id",n),o.append("template_id",e),o.append("user_id",r),vE("/api/v1.0/email/send-form",o)},v3={init:p3,send:m3,sendForm:_3};gn.registerPlugin(it);const x3=()=>{const n=re.useRef(null),e=re.useRef(null),[t,i]=re.useState({name:"",email:"",message:""});re.useEffect(()=>{e.current&&gn.fromTo(".contact-content",{y:50,opacity:0},{y:0,opacity:1,duration:1,ease:"power2.out",scrollTrigger:{trigger:e.current,start:"top 80%",toggleActions:"play none none none"}})},[]);const r=o=>{i({...t,[o.target.id]:o.target.value})},s=o=>{o.preventDefault(),v3.sendForm("service_fk6027a","template_z8xeip9",n.current,"nuVbYv2KJyTRA702i").then(a=>{var l;alert("Message envoyé avec succès !"),(l=n.current)==null||l.reset(),i({name:"",email:"",message:""})},a=>{alert("Erreur lors de l'envoi du message."),console.error(a.text)})};return I.jsx("section",{ref:e,className:"w-full py-24 px-8 bg-black text-white",id:"contact",children:I.jsxs("div",{className:"max-w-6xl mx-auto contact-content",children:[I.jsx("h2",{className:"text-5xl font-bold mb-12 text-center",children:"Contact"}),I.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-16",children:[I.jsxs("div",{className:"space-y-8",children:[I.jsx("h3",{className:"text-2xl font-semibold mb-6",children:"Restons en Contact"}),I.jsx("p",{className:"text-white/60 mb-8 text-lg",children:"Je suis toujours ouvert à de nouvelles opportunités et collaborations. N'hésitez pas à me contacter !"}),I.jsxs("div",{className:"space-y-6",children:[I.jsxs("a",{href:"mailto:christen.dijoux@gmail.com",className:"flex items-center gap-4 text-white/60 hover:text-white transition-colors",children:[I.jsx(FN,{className:"w-6 h-6"}),I.jsx("span",{children:"christen.dijoux@gmail.com"})]}),I.jsxs("a",{href:"tel:+14183762612",className:"flex items-center gap-4 text-white/60 hover:text-white transition-colors",children:[I.jsx(zN,{className:"w-6 h-6"}),I.jsx("span",{children:"+1 (418) 376-2612"})]}),I.jsxs("div",{className:"flex items-center gap-4 text-white/60",children:[I.jsx(kN,{className:"w-6 h-6"}),I.jsx("span",{children:"Saguenay, Québec, Canada"})]}),I.jsxs("div",{className:"flex gap-6 pt-4",children:[I.jsx("a",{href:"https://github.com/Akiyo974",target:"_blank",rel:"noopener noreferrer",className:"text-white/60 hover:text-white transition-colors",children:I.jsx(r_,{className:"w-6 h-6"})}),I.jsx("a",{href:"https://www.linkedin.com/in/christen-dijoux",target:"_blank",rel:"noopener noreferrer",className:"text-white/60 hover:text-white transition-colors",children:I.jsx(ON,{className:"w-6 h-6"})})]})]})]}),I.jsxs("form",{ref:n,onSubmit:s,className:"space-y-6",children:[I.jsxs("div",{children:[I.jsx("label",{htmlFor:"name",className:"block text-sm font-medium mb-2",children:"Nom"}),I.jsx("input",{type:"text",id:"name",name:"name",className:"w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-white/30 transition-colors",placeholder:"Votre nom",value:t.name,onChange:r,required:!0})]}),I.jsxs("div",{children:[I.jsx("label",{htmlFor:"email",className:"block text-sm font-medium mb-2",children:"Email"}),I.jsx("input",{type:"email",id:"email",name:"email",className:"w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-white/30 transition-colors",placeholder:"votre@email.com",value:t.email,onChange:r,required:!0})]}),I.jsxs("div",{children:[I.jsx("label",{htmlFor:"message",className:"block text-sm font-medium mb-2",children:"Message"}),I.jsx("textarea",{id:"message",name:"message",rows:6,className:"w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-white/30 transition-colors resize-none",placeholder:"Votre message...",value:t.message,onChange:r,required:!0})]}),I.jsx("button",{type:"submit",className:"w-full py-3 px-6 bg-white text-black font-medium rounded-lg hover:bg-white/90 transition-colors",children:"Envoyer le Message"})]})]})]})})},xE=()=>{const n=new Date().getFullYear(),[e,t]=re.useState(!1),i=()=>{t(!e)};return I.jsx("footer",{className:"w-full bg-black text-white border-t border-white/10",children:I.jsxs("div",{className:"max-w-6xl mx-auto px-8 py-12",children:[I.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-12 mb-12",children:[I.jsxs("div",{children:[I.jsxs("div",{className:"flex items-center gap-2 mb-4",children:[I.jsx("button",{onClick:i,className:"p-1 hover:scale-110 transition-transform duration-300 focus:outline-none","aria-label":e?"Retirer l'étoile":"Ajouter l'étoile",children:I.jsx(XM,{className:`w-5 h-5 text-white transition-colors duration-300 ${e?"fill-white":"fill-transparent"}`})}),I.jsx("span",{className:"font-bold text-lg",children:"CD"})]}),I.jsx("p",{className:"text-white/60 leading-relaxed",children:"Développeur créatif créant des expériences numériques avec du code et du design."})]}),I.jsxs("div",{children:[I.jsx("h3",{className:"font-medium mb-4",children:"Navigation"}),I.jsxs("ul",{className:"space-y-2",children:[I.jsx("li",{children:I.jsx("button",{"data-scroll-to":"about",className:"text-white/60 hover:text-white transition-colors duration-300 hover:translate-x-1 transform",children:"À propos"})}),I.jsx("li",{children:I.jsx(f1,{to:"/projects",className:"text-white/60 hover:text-white transition-colors duration-300 hover:translate-x-1 transform inline-block",children:"Projets"})}),I.jsx("li",{children:I.jsx("button",{"data-scroll-to":"contact",className:"text-white/60 hover:text-white transition-colors duration-300 hover:translate-x-1 transform",children:"Contact"})})]})]}),I.jsxs("div",{children:[I.jsx("h3",{className:"font-medium mb-4",children:"Localisation"}),I.jsx("p",{className:"text-white/60",children:"Saguenay"}),I.jsx("p",{className:"text-white/60",children:"Québec, Canada"})]})]}),I.jsx("div",{className:"pt-8 border-t border-white/10 flex justify-center items-center",children:I.jsxs("p",{className:"text-white/40 text-sm text-center",children:["© ",n," Christen Dijoux. Tous droits réservés."]})})]})})};function yE(n,e,t){return Math.max(n,Math.min(e,t))}class y3{advance(e){var a;if(!this.isRunning)return;let t=!1;if(this.lerp)this.value=(i=this.value,r=this.to,s=60*this.lerp,o=e,function(l,u,c){return(1-c)*l+c*u}(i,r,1-Math.exp(-s*o))),Math.round(this.value)===this.to&&(this.value=this.to,t=!0);else{this.currentTime+=e;const l=yE(0,this.currentTime/this.duration,1);t=l>=1;const u=t?1:this.easing(l);this.value=this.from+(this.to-this.from)*u}var i,r,s,o;(a=this.onUpdate)==null||a.call(this,this.value,t),t&&this.stop()}stop(){this.isRunning=!1}fromTo(e,t,{lerp:i=.1,duration:r=1,easing:s=l=>l,onStart:o,onUpdate:a}){this.from=this.value=e,this.to=t,this.lerp=i,this.duration=r,this.easing=s,this.currentTime=0,this.isRunning=!0,o==null||o(),this.onUpdate=a}}class S3{constructor({wrapper:e,content:t,autoResize:i=!0,debounce:r=250}={}){Sr(this,"resize",()=>{this.onWrapperResize(),this.onContentResize()});Sr(this,"onWrapperResize",()=>{this.wrapper===window?(this.width=window.innerWidth,this.height=window.innerHeight):(this.width=this.wrapper.clientWidth,this.height=this.wrapper.clientHeight)});Sr(this,"onContentResize",()=>{this.wrapper===window?(this.scrollHeight=this.content.scrollHeight,this.scrollWidth=this.content.scrollWidth):(this.scrollHeight=this.wrapper.scrollHeight,this.scrollWidth=this.wrapper.scrollWidth)});this.wrapper=e,this.content=t,i&&(this.debouncedResize=function(s,o){let a;return function(){let l=arguments,u=this;clearTimeout(a),a=setTimeout(function(){s.apply(u,l)},o)}}(this.resize,r),this.wrapper===window?window.addEventListener("resize",this.debouncedResize,!1):(this.wrapperResizeObserver=new ResizeObserver(this.debouncedResize),this.wrapperResizeObserver.observe(this.wrapper)),this.contentResizeObserver=new ResizeObserver(this.debouncedResize),this.contentResizeObserver.observe(this.content)),this.resize()}destroy(){var e,t;(e=this.wrapperResizeObserver)==null||e.disconnect(),(t=this.contentResizeObserver)==null||t.disconnect(),window.removeEventListener("resize",this.debouncedResize,!1)}get limit(){return{x:this.scrollWidth-this.width,y:this.scrollHeight-this.height}}}class SE{constructor(){this.events={}}emit(e,...t){let i=this.events[e]||[];for(let r=0,s=i.length;r<s;r++)i[r](...t)}on(e,t){var i;return(i=this.events[e])!=null&&i.push(t)||(this.events[e]=[t]),()=>{var r;this.events[e]=(r=this.events[e])==null?void 0:r.filter(s=>t!==s)}}off(e,t){var i;this.events[e]=(i=this.events[e])==null?void 0:i.filter(r=>t!==r)}destroy(){this.events={}}}const kx=100/6;class M3{constructor(e,{wheelMultiplier:t=1,touchMultiplier:i=1}){Sr(this,"onTouchStart",e=>{const{clientX:t,clientY:i}=e.targetTouches?e.targetTouches[0]:e;this.touchStart.x=t,this.touchStart.y=i,this.lastDelta={x:0,y:0},this.emitter.emit("scroll",{deltaX:0,deltaY:0,event:e})});Sr(this,"onTouchMove",e=>{const{clientX:t,clientY:i}=e.targetTouches?e.targetTouches[0]:e,r=-(t-this.touchStart.x)*this.touchMultiplier,s=-(i-this.touchStart.y)*this.touchMultiplier;this.touchStart.x=t,this.touchStart.y=i,this.lastDelta={x:r,y:s},this.emitter.emit("scroll",{deltaX:r,deltaY:s,event:e})});Sr(this,"onTouchEnd",e=>{this.emitter.emit("scroll",{deltaX:this.lastDelta.x,deltaY:this.lastDelta.y,event:e})});Sr(this,"onWheel",e=>{let{deltaX:t,deltaY:i,deltaMode:r}=e;t*=r===1?kx:r===2?this.windowWidth:1,i*=r===1?kx:r===2?this.windowHeight:1,t*=this.wheelMultiplier,i*=this.wheelMultiplier,this.emitter.emit("scroll",{deltaX:t,deltaY:i,event:e})});Sr(this,"onWindowResize",()=>{this.windowWidth=window.innerWidth,this.windowHeight=window.innerHeight});this.element=e,this.wheelMultiplier=t,this.touchMultiplier=i,this.touchStart={x:null,y:null},this.emitter=new SE,window.addEventListener("resize",this.onWindowResize,!1),this.onWindowResize(),this.element.addEventListener("wheel",this.onWheel,{passive:!1}),this.element.addEventListener("touchstart",this.onTouchStart,{passive:!1}),this.element.addEventListener("touchmove",this.onTouchMove,{passive:!1}),this.element.addEventListener("touchend",this.onTouchEnd,{passive:!1})}on(e,t){return this.emitter.on(e,t)}destroy(){this.emitter.destroy(),window.removeEventListener("resize",this.onWindowResize,!1),this.element.removeEventListener("wheel",this.onWheel,{passive:!1}),this.element.removeEventListener("touchstart",this.onTouchStart,{passive:!1}),this.element.removeEventListener("touchmove",this.onTouchMove,{passive:!1}),this.element.removeEventListener("touchend",this.onTouchEnd,{passive:!1})}}class E3{constructor({wrapper:e=window,content:t=document.documentElement,wheelEventsTarget:i=e,eventsTarget:r=i,smoothWheel:s=!0,syncTouch:o=!1,syncTouchLerp:a=.075,touchInertiaMultiplier:l=35,duration:u,easing:c=_=>Math.min(1,1.001-Math.pow(2,-10*_)),lerp:f=!u&&.1,infinite:d=!1,orientation:p="vertical",gestureOrientation:v="vertical",touchMultiplier:g=1,wheelMultiplier:m=1,autoResize:h=!0,__experimental__naiveDimensions:x=!1}={}){this.__isSmooth=!1,this.__isScrolling=!1,this.__isStopped=!1,this.__isLocked=!1,this.onVirtualScroll=({deltaX:_,deltaY:y,event:w})=>{if(w.ctrlKey)return;const T=w.type.includes("touch"),M=w.type.includes("wheel");if(this.options.syncTouch&&T&&w.type==="touchstart"&&!this.isStopped&&!this.isLocked)return void this.reset();const P=_===0&&y===0,N=this.options.gestureOrientation==="vertical"&&y===0||this.options.gestureOrientation==="horizontal"&&_===0;if(P||N)return;let S=w.composedPath();if(S=S.slice(0,S.indexOf(this.rootElement)),S.find(L=>{var Y,B,X,D,F;return((Y=L.hasAttribute)===null||Y===void 0?void 0:Y.call(L,"data-lenis-prevent"))||T&&((B=L.hasAttribute)===null||B===void 0?void 0:B.call(L,"data-lenis-prevent-touch"))||M&&((X=L.hasAttribute)===null||X===void 0?void 0:X.call(L,"data-lenis-prevent-wheel"))||((D=L.classList)===null||D===void 0?void 0:D.contains("lenis"))&&!(!((F=L.classList)===null||F===void 0)&&F.contains("lenis-stopped"))}))return;if(this.isStopped||this.isLocked)return void w.preventDefault();if(this.isSmooth=this.options.syncTouch&&T||this.options.smoothWheel&&M,!this.isSmooth)return this.isScrolling=!1,void this.animate.stop();w.preventDefault();let R=y;this.options.gestureOrientation==="both"?R=Math.abs(y)>Math.abs(_)?y:_:this.options.gestureOrientation==="horizontal"&&(R=_);const z=T&&this.options.syncTouch,K=T&&w.type==="touchend"&&Math.abs(R)>5;K&&(R=this.velocity*this.options.touchInertiaMultiplier),this.scrollTo(this.targetScroll+R,Object.assign({programmatic:!1},z?{lerp:K?this.options.syncTouchLerp:1}:{lerp:this.options.lerp,duration:this.options.duration,easing:this.options.easing}))},this.onNativeScroll=()=>{if(!this.__preventNextScrollEvent&&!this.isScrolling){const _=this.animatedScroll;this.animatedScroll=this.targetScroll=this.actualScroll,this.velocity=0,this.direction=Math.sign(this.animatedScroll-_),this.emit()}},window.lenisVersion="1.0.42",e!==document.documentElement&&e!==document.body||(e=window),this.options={wrapper:e,content:t,wheelEventsTarget:i,eventsTarget:r,smoothWheel:s,syncTouch:o,syncTouchLerp:a,touchInertiaMultiplier:l,duration:u,easing:c,lerp:f,infinite:d,gestureOrientation:v,orientation:p,touchMultiplier:g,wheelMultiplier:m,autoResize:h,__experimental__naiveDimensions:x},this.animate=new y3,this.emitter=new SE,this.dimensions=new S3({wrapper:e,content:t,autoResize:h}),this.toggleClassName("lenis",!0),this.velocity=0,this.isLocked=!1,this.isStopped=!1,this.isSmooth=o||s,this.isScrolling=!1,this.targetScroll=this.animatedScroll=this.actualScroll,this.options.wrapper.addEventListener("scroll",this.onNativeScroll,!1),this.virtualScroll=new M3(r,{touchMultiplier:g,wheelMultiplier:m}),this.virtualScroll.on("scroll",this.onVirtualScroll)}destroy(){this.emitter.destroy(),this.options.wrapper.removeEventListener("scroll",this.onNativeScroll,!1),this.virtualScroll.destroy(),this.dimensions.destroy(),this.toggleClassName("lenis",!1),this.toggleClassName("lenis-smooth",!1),this.toggleClassName("lenis-scrolling",!1),this.toggleClassName("lenis-stopped",!1),this.toggleClassName("lenis-locked",!1)}on(e,t){return this.emitter.on(e,t)}off(e,t){return this.emitter.off(e,t)}setScroll(e){this.isHorizontal?this.rootElement.scrollLeft=e:this.rootElement.scrollTop=e}resize(){this.dimensions.resize()}emit(){this.emitter.emit("scroll",this)}reset(){this.isLocked=!1,this.isScrolling=!1,this.animatedScroll=this.targetScroll=this.actualScroll,this.velocity=0,this.animate.stop()}start(){this.isStopped&&(this.isStopped=!1,this.reset())}stop(){this.isStopped||(this.isStopped=!0,this.animate.stop(),this.reset())}raf(e){const t=e-(this.time||e);this.time=e,this.animate.advance(.001*t)}scrollTo(e,{offset:t=0,immediate:i=!1,lock:r=!1,duration:s=this.options.duration,easing:o=this.options.easing,lerp:a=!s&&this.options.lerp,onComplete:l,force:u=!1,programmatic:c=!0}={}){if(!this.isStopped&&!this.isLocked||u){if(["top","left","start"].includes(e))e=0;else if(["bottom","right","end"].includes(e))e=this.limit;else{let f;if(typeof e=="string"?f=document.querySelector(e):e!=null&&e.nodeType&&(f=e),f){if(this.options.wrapper!==window){const p=this.options.wrapper.getBoundingClientRect();t-=this.isHorizontal?p.left:p.top}const d=f.getBoundingClientRect();e=(this.isHorizontal?d.left:d.top)+this.animatedScroll}}if(typeof e=="number"){if(e+=t,e=Math.round(e),this.options.infinite?c&&(this.targetScroll=this.animatedScroll=this.scroll):e=yE(0,e,this.limit),i)return this.animatedScroll=this.targetScroll=e,this.setScroll(this.scroll),this.reset(),void(l==null||l(this));if(!c){if(e===this.targetScroll)return;this.targetScroll=e}this.animate.fromTo(this.animatedScroll,e,{duration:s,easing:o,lerp:a,onStart:()=>{r&&(this.isLocked=!0),this.isScrolling=!0},onUpdate:(f,d)=>{this.isScrolling=!0,this.velocity=f-this.animatedScroll,this.direction=Math.sign(this.velocity),this.animatedScroll=f,this.setScroll(this.scroll),c&&(this.targetScroll=f),d||this.emit(),d&&(this.reset(),this.emit(),l==null||l(this),this.__preventNextScrollEvent=!0,requestAnimationFrame(()=>{delete this.__preventNextScrollEvent}))}})}}}get rootElement(){return this.options.wrapper===window?document.documentElement:this.options.wrapper}get limit(){return this.options.__experimental__naiveDimensions?this.isHorizontal?this.rootElement.scrollWidth-this.rootElement.clientWidth:this.rootElement.scrollHeight-this.rootElement.clientHeight:this.dimensions.limit[this.isHorizontal?"x":"y"]}get isHorizontal(){return this.options.orientation==="horizontal"}get actualScroll(){return this.isHorizontal?this.rootElement.scrollLeft:this.rootElement.scrollTop}get scroll(){return this.options.infinite?(e=this.animatedScroll,t=this.limit,(e%t+t)%t):this.animatedScroll;var e,t}get progress(){return this.limit===0?1:this.scroll/this.limit}get isSmooth(){return this.__isSmooth}set isSmooth(e){this.__isSmooth!==e&&(this.__isSmooth=e,this.toggleClassName("lenis-smooth",e))}get isScrolling(){return this.__isScrolling}set isScrolling(e){this.__isScrolling!==e&&(this.__isScrolling=e,this.toggleClassName("lenis-scrolling",e))}get isStopped(){return this.__isStopped}set isStopped(e){this.__isStopped!==e&&(this.__isStopped=e,this.toggleClassName("lenis-stopped",e))}get isLocked(){return this.__isLocked}set isLocked(e){this.__isLocked!==e&&(this.__isLocked=e,this.toggleClassName("lenis-locked",e))}get className(){let e="lenis";return this.isStopped&&(e+=" lenis-stopped"),this.isLocked&&(e+=" lenis-locked"),this.isScrolling&&(e+=" lenis-scrolling"),this.isSmooth&&(e+=" lenis-smooth"),e}toggleClassName(e,t){this.rootElement.classList.toggle(e,t),this.emitter.emit("className change",this)}}const T3=()=>{re.useEffect(()=>{const n=new E3({duration:1.2,easing:i=>Math.min(1,1.001-Math.pow(2,-10*i)),orientation:"vertical",gestureOrientation:"vertical",smoothWheel:!0,wheelMultiplier:1,smoothTouch:!1,touchMultiplier:2,infinite:!1});function e(i){n.raf(i),requestAnimationFrame(e)}requestAnimationFrame(e);const t=i=>{const s=i.target.closest("a, button");if(s&&s.hasAttribute("data-scroll-to")){i.preventDefault();const o=s.getAttribute("data-scroll-to");if(o){const a=document.getElementById(o);a&&n.scrollTo(a,{offset:0,duration:1.5,easing:l=>Math.min(1,1.001-Math.pow(2,-10*l))})}}};return document.addEventListener("click",t),()=>{n.destroy(),document.removeEventListener("click",t)}},[])},w3=()=>(T3(),re.useEffect(()=>{window.scrollTo(0,0)},[]),I.jsxs("main",{className:"bg-black",children:[I.jsx(HN,{}),I.jsx(l3,{}),I.jsx(h3,{}),I.jsx(x3,{}),I.jsx(xE,{})]})),A3=["Akiyo974","repo-a-cacher-2"],C3={AkiSupport:{showCode:!1,customLabel:"AkiSupport",customDescription:"AkiSupport est un chatbot d'assistance en ligne conçu comme projet d'apprentissage, utilisant JavaScript, Bootstrap, et Vite pour offrir des réponses automatisées et gérer les requêtes des utilisateurs."}},zx=n=>n.charAt(0).toUpperCase()+n.slice(1),R3=()=>{const[n,e]=re.useState([]),[t,i]=re.useState(0),[r,s]=re.useState(!0);return re.useEffect(()=>{(async()=>{try{const u=(await(await fetch("https://api.github.com/users/Akiyo974/repos")).json()).filter(c=>!A3.includes(c.name));e(u),i(u.length),s(!1)}catch(a){console.error("Erreur lors de la récupération des dépôts:",a),s(!1)}})()},[]),I.jsxs("main",{className:"min-h-screen bg-black text-white",children:[I.jsxs("div",{className:"max-w-6xl mx-auto px-8 py-12",children:[I.jsxs("div",{className:"flex items-center justify-between mb-16",children:[I.jsxs(f1,{to:"/",className:"flex items-center gap-2 text-white hover:text-white/80 transition-colors",children:[I.jsx(NN,{className:"w-5 h-5"}),I.jsx("span",{children:"Retour à l'accueil"})]}),I.jsxs("div",{className:"flex items-center gap-6",children:[I.jsx("h1",{className:"text-4xl font-bold",children:"Tous les Projets"}),I.jsxs("a",{href:"https://github.com/Akiyo974",target:"_blank",rel:"noopener noreferrer",className:"flex items-center gap-2 px-4 py-2 bg-white/10 rounded-lg hover:bg-white/20 transition-colors",children:[I.jsx(r_,{className:"w-5 h-5"}),I.jsxs("span",{children:[t," Dépôts"]})]})]})]}),r?I.jsx("div",{className:"flex items-center justify-center py-20",children:I.jsx("div",{className:"animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-white"})}):n.length>0?I.jsx("div",{className:"grid grid-cols-1 gap-8",children:n.map(o=>{var l;const a=C3[o.name];return I.jsxs("div",{className:"bg-white/5 rounded-lg p-8 hover:bg-white/10 transition-colors",children:[I.jsxs("div",{className:"flex justify-between items-start mb-4",children:[I.jsxs("div",{children:[I.jsx("h2",{className:"text-2xl font-bold",children:zx((a==null?void 0:a.customLabel)||o.name)}),a&&I.jsxs("span",{className:"text-sm text-white/60 mt-1 block",children:["Dépôt: ",zx(o.name)]})]}),I.jsxs("div",{className:"flex gap-3",children:[o.homepage&&I.jsx("a",{href:o.homepage,target:"_blank",rel:"noopener noreferrer",className:"px-4 py-2 bg-white text-black rounded-lg hover:bg-white/90 transition-colors text-sm",children:"Démo en direct"}),(!a||a.showCode)&&I.jsx("a",{href:o.html_url,target:"_blank",rel:"noopener noreferrer",className:"px-4 py-2 border border-white/20 rounded-lg hover:bg-white hover:text-black transition-colors text-sm",children:"Voir le code"})]})]}),I.jsx("p",{className:"text-white/70 mb-6",children:(a==null?void 0:a.customDescription)||o.description}),I.jsxs("div",{className:"flex flex-wrap gap-3",children:[o.language&&I.jsx("span",{className:"px-3 py-1 bg-white/10 rounded-full text-sm",children:o.language}),(l=o.topics)==null?void 0:l.map(u=>I.jsx("span",{className:"px-3 py-1 border border-white/20 rounded-full text-sm",children:u},u)),o.stargazers_count>0&&I.jsxs("span",{className:"px-3 py-1 bg-white/10 rounded-full text-sm flex items-center gap-1",children:["★ ",o.stargazers_count]})]})]},o.id)})}):I.jsx("div",{className:"text-center py-20",children:I.jsx("p",{className:"text-xl text-white/60",children:"Aucun dépôt trouvé"})})]}),I.jsx(xE,{})]})},b3=()=>{const n=re.useRef(null),e=re.useRef(null);return re.useEffect(()=>{const t=n.current,i=e.current;if(!t||!i)return;const r=l=>{gn.to(t,{x:l.clientX,y:l.clientY,duration:.6,ease:"power2.out"}),gn.to(i,{x:l.clientX,y:l.clientY,duration:.1})},s=()=>{t==null||t.classList.add("cursor-hover")},o=()=>{t==null||t.classList.remove("cursor-hover")};document.addEventListener("mousemove",r);const a=document.querySelectorAll('a, button, input, textarea, [role="button"]');return a.forEach(l=>{l.addEventListener("mouseenter",s),l.addEventListener("mouseleave",o)}),()=>{document.removeEventListener("mousemove",r),a.forEach(l=>{l.removeEventListener("mouseenter",s),l.removeEventListener("mouseleave",o)})}},[]),I.jsxs(I.Fragment,{children:[I.jsx("div",{ref:n,className:`cursor-follower fixed pointer-events-none z-50 w-8 h-8 -ml-4 -mt-4 rounded-full 
                   border border-white/30 transition-transform duration-300 ease-out`}),I.jsx("div",{ref:e,className:`cursor-dot fixed pointer-events-none z-50 w-1 h-1 -ml-0.5 -mt-0.5 
                   bg-white rounded-full`})]})};function P3(){return I.jsxs("div",{className:"min-h-screen bg-black text-white",children:[I.jsx(b3,{}),I.jsxs(VA,{children:[I.jsx(im,{path:"/",element:I.jsx(w3,{})}),I.jsx(im,{path:"/projects",element:I.jsx(R3,{})})]})]})}const Bx=document.getElementById("root"),L3="/Portfolio";Bx&&JS(Bx).render(I.jsx(re.StrictMode,{children:I.jsx(KA,{basename:L3,children:I.jsx(P3,{})})}));
