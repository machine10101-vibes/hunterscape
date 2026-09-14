(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const r of o.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&n(r)}).observe(document,{childList:!0,subtree:!0});function e(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerPolicy&&(o.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?o.credentials="include":s.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(s){if(s.ep)return;s.ep=!0;const o=e(s);fetch(s.href,o)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const cc="170",ju=0,Vc=1,Qu=2,Eh=1,Th=2,Xn=3,fi=0,He=1,Ee=2,ui=0,rs=1,Wc=2,Xc=3,qc=4,td=5,Ti=100,ed=101,nd=102,id=103,sd=104,od=200,rd=201,ad=202,cd=203,aa=204,ca=205,ld=206,hd=207,ud=208,dd=209,fd=210,pd=211,md=212,gd=213,_d=214,la=0,ha=1,ua=2,hs=3,da=4,fa=5,pa=6,ma=7,lc=0,vd=1,xd=2,di=0,yd=1,Md=2,wd=3,er=4,Sd=5,Ed=6,Td=7,bh=300,us=301,ds=302,ga=303,_a=304,nr=306,fs=1e3,Ci=1001,va=1002,ln=1003,bd=1004,no=1005,Un=1006,dr=1007,Li=1008,$n=1009,Ah=1010,Rh=1011,Gs=1012,hc=1013,Ui=1014,Nn=1015,$s=1016,uc=1017,dc=1018,ps=1020,Ch=35902,Lh=1021,Ph=1022,wn=1023,Ih=1024,Dh=1025,as=1026,ms=1027,fc=1028,pc=1029,Uh=1030,mc=1031,gc=1033,Fo=33776,Oo=33777,zo=33778,Bo=33779,xa=35840,ya=35841,Ma=35842,wa=35843,Sa=36196,Ea=37492,Ta=37496,ba=37808,Aa=37809,Ra=37810,Ca=37811,La=37812,Pa=37813,Ia=37814,Da=37815,Ua=37816,Na=37817,Fa=37818,Oa=37819,za=37820,Ba=37821,ko=36492,ka=36494,Ha=36495,Nh=36283,Ga=36284,Va=36285,Wa=36286,Ad=3200,Rd=3201,_c=0,Cd=1,Dn="",We="srgb",_s="srgb-linear",ir="linear",me="srgb",Hi=7680,Yc=519,Ld=512,Pd=513,Id=514,Fh=515,Dd=516,Ud=517,Nd=518,Fd=519,$c=35044,Od=35048,Zc="300 es",qn=2e3,Vo=2001;class vs{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const s=this._listeners[t];if(s!==void 0){const o=s.indexOf(e);o!==-1&&s.splice(o,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const s=n.slice(0);for(let o=0,r=s.length;o<r;o++)s[o].call(this,t);t.target=null}}}const qe=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],fr=Math.PI/180,Xa=180/Math.PI;function xs(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(qe[i&255]+qe[i>>8&255]+qe[i>>16&255]+qe[i>>24&255]+"-"+qe[t&255]+qe[t>>8&255]+"-"+qe[t>>16&15|64]+qe[t>>24&255]+"-"+qe[e&63|128]+qe[e>>8&255]+"-"+qe[e>>16&255]+qe[e>>24&255]+qe[n&255]+qe[n>>8&255]+qe[n>>16&255]+qe[n>>24&255]).toLowerCase()}function Ne(i,t,e){return Math.max(t,Math.min(e,i))}function zd(i,t){return(i%t+t)%t}function pr(i,t,e){return(1-e)*i+e*t}function Es(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function en(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}class gt{constructor(t=0,e=0){gt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Ne(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),s=Math.sin(e),o=this.x-t.x,r=this.y-t.y;return this.x=o*n-r*s+t.x,this.y=o*s+r*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Jt{constructor(t,e,n,s,o,r,a,c,l){Jt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,o,r,a,c,l)}set(t,e,n,s,o,r,a,c,l){const h=this.elements;return h[0]=t,h[1]=s,h[2]=a,h[3]=e,h[4]=o,h[5]=c,h[6]=n,h[7]=r,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,o=this.elements,r=n[0],a=n[3],c=n[6],l=n[1],h=n[4],u=n[7],d=n[2],f=n[5],m=n[8],_=s[0],g=s[3],p=s[6],S=s[1],M=s[4],v=s[7],D=s[2],T=s[5],C=s[8];return o[0]=r*_+a*S+c*D,o[3]=r*g+a*M+c*T,o[6]=r*p+a*v+c*C,o[1]=l*_+h*S+u*D,o[4]=l*g+h*M+u*T,o[7]=l*p+h*v+u*C,o[2]=d*_+f*S+m*D,o[5]=d*g+f*M+m*T,o[8]=d*p+f*v+m*C,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],s=t[2],o=t[3],r=t[4],a=t[5],c=t[6],l=t[7],h=t[8];return e*r*h-e*a*l-n*o*h+n*a*c+s*o*l-s*r*c}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],o=t[3],r=t[4],a=t[5],c=t[6],l=t[7],h=t[8],u=h*r-a*l,d=a*c-h*o,f=l*o-r*c,m=e*u+n*d+s*f;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/m;return t[0]=u*_,t[1]=(s*l-h*n)*_,t[2]=(a*n-s*r)*_,t[3]=d*_,t[4]=(h*e-s*c)*_,t[5]=(s*o-a*e)*_,t[6]=f*_,t[7]=(n*c-l*e)*_,t[8]=(r*e-n*o)*_,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,o,r,a){const c=Math.cos(o),l=Math.sin(o);return this.set(n*c,n*l,-n*(c*r+l*a)+r+t,-s*l,s*c,-s*(-l*r+c*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(mr.makeScale(t,e)),this}rotate(t){return this.premultiply(mr.makeRotation(-t)),this}translate(t,e){return this.premultiply(mr.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const mr=new Jt;function Oh(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function Wo(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Bd(){const i=Wo("canvas");return i.style.display="block",i}const Kc={};function Fs(i){i in Kc||(Kc[i]=!0,console.warn(i))}function kd(i,t,e){return new Promise(function(n,s){function o(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(o,e);break;default:n()}}setTimeout(o,e)})}function Hd(i){const t=i.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function Gd(i){const t=i.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const oe={enabled:!0,workingColorSpace:_s,spaces:{},convert:function(i,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===me&&(i.r=Yn(i.r),i.g=Yn(i.g),i.b=Yn(i.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(i.applyMatrix3(this.spaces[t].toXYZ),i.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===me&&(i.r=cs(i.r),i.g=cs(i.g),i.b=cs(i.b))),i},fromWorkingColorSpace:function(i,t){return this.convert(i,this.workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===Dn?ir:this.spaces[i].transfer},getLuminanceCoefficients:function(i,t=this.workingColorSpace){return i.fromArray(this.spaces[t].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,t,e){return i.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}};function Yn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function cs(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}const Jc=[.64,.33,.3,.6,.15,.06],jc=[.2126,.7152,.0722],Qc=[.3127,.329],tl=new Jt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),el=new Jt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);oe.define({[_s]:{primaries:Jc,whitePoint:Qc,transfer:ir,toXYZ:tl,fromXYZ:el,luminanceCoefficients:jc,workingColorSpaceConfig:{unpackColorSpace:We},outputColorSpaceConfig:{drawingBufferColorSpace:We}},[We]:{primaries:Jc,whitePoint:Qc,transfer:me,toXYZ:tl,fromXYZ:el,luminanceCoefficients:jc,outputColorSpaceConfig:{drawingBufferColorSpace:We}}});let Gi;class Vd{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Gi===void 0&&(Gi=Wo("canvas")),Gi.width=t.width,Gi.height=t.height;const n=Gi.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=Gi}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Wo("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const s=n.getImageData(0,0,t.width,t.height),o=s.data;for(let r=0;r<o.length;r++)o[r]=Yn(o[r]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Yn(e[n]/255)*255):e[n]=Yn(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Wd=0;class zh{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Wd++}),this.uuid=xs(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let o;if(Array.isArray(s)){o=[];for(let r=0,a=s.length;r<a;r++)s[r].isDataTexture?o.push(gr(s[r].image)):o.push(gr(s[r]))}else o=gr(s);n.url=o}return e||(t.images[this.uuid]=n),n}}function gr(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Vd.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Xd=0;class Ke extends vs{constructor(t=Ke.DEFAULT_IMAGE,e=Ke.DEFAULT_MAPPING,n=Ci,s=Ci,o=Un,r=Li,a=wn,c=$n,l=Ke.DEFAULT_ANISOTROPY,h=Dn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Xd++}),this.uuid=xs(),this.name="",this.source=new zh(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=o,this.minFilter=r,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new gt(0,0),this.repeat=new gt(1,1),this.center=new gt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Jt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==bh)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case fs:t.x=t.x-Math.floor(t.x);break;case Ci:t.x=t.x<0?0:1;break;case va:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case fs:t.y=t.y-Math.floor(t.y);break;case Ci:t.y=t.y<0?0:1;break;case va:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Ke.DEFAULT_IMAGE=null;Ke.DEFAULT_MAPPING=bh;Ke.DEFAULT_ANISOTROPY=1;class ge{constructor(t=0,e=0,n=0,s=1){ge.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,o=this.w,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s+r[12]*o,this.y=r[1]*e+r[5]*n+r[9]*s+r[13]*o,this.z=r[2]*e+r[6]*n+r[10]*s+r[14]*o,this.w=r[3]*e+r[7]*n+r[11]*s+r[15]*o,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,o;const c=t.elements,l=c[0],h=c[4],u=c[8],d=c[1],f=c[5],m=c[9],_=c[2],g=c[6],p=c[10];if(Math.abs(h-d)<.01&&Math.abs(u-_)<.01&&Math.abs(m-g)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+_)<.1&&Math.abs(m+g)<.1&&Math.abs(l+f+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const M=(l+1)/2,v=(f+1)/2,D=(p+1)/2,T=(h+d)/4,C=(u+_)/4,P=(m+g)/4;return M>v&&M>D?M<.01?(n=0,s=.707106781,o=.707106781):(n=Math.sqrt(M),s=T/n,o=C/n):v>D?v<.01?(n=.707106781,s=0,o=.707106781):(s=Math.sqrt(v),n=T/s,o=P/s):D<.01?(n=.707106781,s=.707106781,o=0):(o=Math.sqrt(D),n=C/o,s=P/o),this.set(n,s,o,e),this}let S=Math.sqrt((g-m)*(g-m)+(u-_)*(u-_)+(d-h)*(d-h));return Math.abs(S)<.001&&(S=1),this.x=(g-m)/S,this.y=(u-_)/S,this.z=(d-h)/S,this.w=Math.acos((l+f+p-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class qd extends vs{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new ge(0,0,t,e),this.scissorTest=!1,this.viewport=new ge(0,0,t,e);const s={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Un,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const o=new Ke(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);o.flipY=!1,o.generateMipmaps=n.generateMipmaps,o.internalFormat=n.internalFormat,this.textures=[];const r=n.count;for(let a=0;a<r;a++)this.textures[a]=o.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,o=this.textures.length;s<o;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,s=t.textures.length;n<s;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new zh(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ni extends qd{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class Bh extends Ke{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=ln,this.minFilter=ln,this.wrapR=Ci,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class Yd extends Ke{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=ln,this.minFilter=ln,this.wrapR=Ci,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Zs{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,o,r,a){let c=n[s+0],l=n[s+1],h=n[s+2],u=n[s+3];const d=o[r+0],f=o[r+1],m=o[r+2],_=o[r+3];if(a===0){t[e+0]=c,t[e+1]=l,t[e+2]=h,t[e+3]=u;return}if(a===1){t[e+0]=d,t[e+1]=f,t[e+2]=m,t[e+3]=_;return}if(u!==_||c!==d||l!==f||h!==m){let g=1-a;const p=c*d+l*f+h*m+u*_,S=p>=0?1:-1,M=1-p*p;if(M>Number.EPSILON){const D=Math.sqrt(M),T=Math.atan2(D,p*S);g=Math.sin(g*T)/D,a=Math.sin(a*T)/D}const v=a*S;if(c=c*g+d*v,l=l*g+f*v,h=h*g+m*v,u=u*g+_*v,g===1-a){const D=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=D,l*=D,h*=D,u*=D}}t[e]=c,t[e+1]=l,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,s,o,r){const a=n[s],c=n[s+1],l=n[s+2],h=n[s+3],u=o[r],d=o[r+1],f=o[r+2],m=o[r+3];return t[e]=a*m+h*u+c*f-l*d,t[e+1]=c*m+h*d+l*u-a*f,t[e+2]=l*m+h*f+a*d-c*u,t[e+3]=h*m-a*u-c*d-l*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,s=t._y,o=t._z,r=t._order,a=Math.cos,c=Math.sin,l=a(n/2),h=a(s/2),u=a(o/2),d=c(n/2),f=c(s/2),m=c(o/2);switch(r){case"XYZ":this._x=d*h*u+l*f*m,this._y=l*f*u-d*h*m,this._z=l*h*m+d*f*u,this._w=l*h*u-d*f*m;break;case"YXZ":this._x=d*h*u+l*f*m,this._y=l*f*u-d*h*m,this._z=l*h*m-d*f*u,this._w=l*h*u+d*f*m;break;case"ZXY":this._x=d*h*u-l*f*m,this._y=l*f*u+d*h*m,this._z=l*h*m+d*f*u,this._w=l*h*u-d*f*m;break;case"ZYX":this._x=d*h*u-l*f*m,this._y=l*f*u+d*h*m,this._z=l*h*m-d*f*u,this._w=l*h*u+d*f*m;break;case"YZX":this._x=d*h*u+l*f*m,this._y=l*f*u+d*h*m,this._z=l*h*m-d*f*u,this._w=l*h*u-d*f*m;break;case"XZY":this._x=d*h*u-l*f*m,this._y=l*f*u-d*h*m,this._z=l*h*m+d*f*u,this._w=l*h*u+d*f*m;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+r)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],s=e[4],o=e[8],r=e[1],a=e[5],c=e[9],l=e[2],h=e[6],u=e[10],d=n+a+u;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-c)*f,this._y=(o-l)*f,this._z=(r-s)*f}else if(n>a&&n>u){const f=2*Math.sqrt(1+n-a-u);this._w=(h-c)/f,this._x=.25*f,this._y=(s+r)/f,this._z=(o+l)/f}else if(a>u){const f=2*Math.sqrt(1+a-n-u);this._w=(o-l)/f,this._x=(s+r)/f,this._y=.25*f,this._z=(c+h)/f}else{const f=2*Math.sqrt(1+u-n-a);this._w=(r-s)/f,this._x=(o+l)/f,this._y=(c+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Ne(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,s=t._y,o=t._z,r=t._w,a=e._x,c=e._y,l=e._z,h=e._w;return this._x=n*h+r*a+s*l-o*c,this._y=s*h+r*c+o*a-n*l,this._z=o*h+r*l+n*c-s*a,this._w=r*h-n*a-s*c-o*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,s=this._y,o=this._z,r=this._w;let a=r*t._w+n*t._x+s*t._y+o*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=r,this._x=n,this._y=s,this._z=o,this;const c=1-a*a;if(c<=Number.EPSILON){const f=1-e;return this._w=f*r+e*this._w,this._x=f*n+e*this._x,this._y=f*s+e*this._y,this._z=f*o+e*this._z,this.normalize(),this}const l=Math.sqrt(c),h=Math.atan2(l,a),u=Math.sin((1-e)*h)/l,d=Math.sin(e*h)/l;return this._w=r*u+this._w*d,this._x=n*u+this._x*d,this._y=s*u+this._y*d,this._z=o*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),o=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),o*Math.sin(e),o*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class I{constructor(t=0,e=0,n=0){I.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(nl.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(nl.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,s=this.z,o=t.elements;return this.x=o[0]*e+o[3]*n+o[6]*s,this.y=o[1]*e+o[4]*n+o[7]*s,this.z=o[2]*e+o[5]*n+o[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,o=t.elements,r=1/(o[3]*e+o[7]*n+o[11]*s+o[15]);return this.x=(o[0]*e+o[4]*n+o[8]*s+o[12])*r,this.y=(o[1]*e+o[5]*n+o[9]*s+o[13])*r,this.z=(o[2]*e+o[6]*n+o[10]*s+o[14])*r,this}applyQuaternion(t){const e=this.x,n=this.y,s=this.z,o=t.x,r=t.y,a=t.z,c=t.w,l=2*(r*s-a*n),h=2*(a*e-o*s),u=2*(o*n-r*e);return this.x=e+c*l+r*u-a*h,this.y=n+c*h+a*l-o*u,this.z=s+c*u+o*h-r*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,s=this.z,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*s,this.y=o[1]*e+o[5]*n+o[9]*s,this.z=o[2]*e+o[6]*n+o[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,s=t.y,o=t.z,r=e.x,a=e.y,c=e.z;return this.x=s*c-o*a,this.y=o*r-n*c,this.z=n*a-s*r,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return _r.copy(this).projectOnVector(t),this.sub(_r)}reflect(t){return this.sub(_r.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Ne(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const _r=new I,nl=new Zs;class Jn{constructor(t=new I(1/0,1/0,1/0),e=new I(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(gn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(gn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=gn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const o=n.getAttribute("position");if(e===!0&&o!==void 0&&t.isInstancedMesh!==!0)for(let r=0,a=o.count;r<a;r++)t.isMesh===!0?t.getVertexPosition(r,gn):gn.fromBufferAttribute(o,r),gn.applyMatrix4(t.matrixWorld),this.expandByPoint(gn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),io.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),io.copy(n.boundingBox)),io.applyMatrix4(t.matrixWorld),this.union(io)}const s=t.children;for(let o=0,r=s.length;o<r;o++)this.expandByObject(s[o],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,gn),gn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Ts),so.subVectors(this.max,Ts),Vi.subVectors(t.a,Ts),Wi.subVectors(t.b,Ts),Xi.subVectors(t.c,Ts),ti.subVectors(Wi,Vi),ei.subVectors(Xi,Wi),_i.subVectors(Vi,Xi);let e=[0,-ti.z,ti.y,0,-ei.z,ei.y,0,-_i.z,_i.y,ti.z,0,-ti.x,ei.z,0,-ei.x,_i.z,0,-_i.x,-ti.y,ti.x,0,-ei.y,ei.x,0,-_i.y,_i.x,0];return!vr(e,Vi,Wi,Xi,so)||(e=[1,0,0,0,1,0,0,0,1],!vr(e,Vi,Wi,Xi,so))?!1:(oo.crossVectors(ti,ei),e=[oo.x,oo.y,oo.z],vr(e,Vi,Wi,Xi,so))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,gn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(gn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(kn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),kn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),kn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),kn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),kn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),kn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),kn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),kn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(kn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const kn=[new I,new I,new I,new I,new I,new I,new I,new I],gn=new I,io=new Jn,Vi=new I,Wi=new I,Xi=new I,ti=new I,ei=new I,_i=new I,Ts=new I,so=new I,oo=new I,vi=new I;function vr(i,t,e,n,s){for(let o=0,r=i.length-3;o<=r;o+=3){vi.fromArray(i,o);const a=s.x*Math.abs(vi.x)+s.y*Math.abs(vi.y)+s.z*Math.abs(vi.z),c=t.dot(vi),l=e.dot(vi),h=n.dot(vi);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>a)return!1}return!0}const $d=new Jn,bs=new I,xr=new I;class ys{constructor(t=new I,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):$d.setFromPoints(t).getCenter(n);let s=0;for(let o=0,r=t.length;o<r;o++)s=Math.max(s,n.distanceToSquared(t[o]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;bs.subVectors(t,this.center);const e=bs.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(bs,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(xr.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(bs.copy(t.center).add(xr)),this.expandByPoint(bs.copy(t.center).sub(xr))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Hn=new I,yr=new I,ro=new I,ni=new I,Mr=new I,ao=new I,wr=new I;class vc{constructor(t=new I,e=new I(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Hn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Hn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Hn.copy(this.origin).addScaledVector(this.direction,e),Hn.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){yr.copy(t).add(e).multiplyScalar(.5),ro.copy(e).sub(t).normalize(),ni.copy(this.origin).sub(yr);const o=t.distanceTo(e)*.5,r=-this.direction.dot(ro),a=ni.dot(this.direction),c=-ni.dot(ro),l=ni.lengthSq(),h=Math.abs(1-r*r);let u,d,f,m;if(h>0)if(u=r*c-a,d=r*a-c,m=o*h,u>=0)if(d>=-m)if(d<=m){const _=1/h;u*=_,d*=_,f=u*(u+r*d+2*a)+d*(r*u+d+2*c)+l}else d=o,u=Math.max(0,-(r*d+a)),f=-u*u+d*(d+2*c)+l;else d=-o,u=Math.max(0,-(r*d+a)),f=-u*u+d*(d+2*c)+l;else d<=-m?(u=Math.max(0,-(-r*o+a)),d=u>0?-o:Math.min(Math.max(-o,-c),o),f=-u*u+d*(d+2*c)+l):d<=m?(u=0,d=Math.min(Math.max(-o,-c),o),f=d*(d+2*c)+l):(u=Math.max(0,-(r*o+a)),d=u>0?o:Math.min(Math.max(-o,-c),o),f=-u*u+d*(d+2*c)+l);else d=r>0?-o:o,u=Math.max(0,-(r*d+a)),f=-u*u+d*(d+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(yr).addScaledVector(ro,d),f}intersectSphere(t,e){Hn.subVectors(t.center,this.origin);const n=Hn.dot(this.direction),s=Hn.dot(Hn)-n*n,o=t.radius*t.radius;if(s>o)return null;const r=Math.sqrt(o-s),a=n-r,c=n+r;return c<0?null:a<0?this.at(c,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,o,r,a,c;const l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return l>=0?(n=(t.min.x-d.x)*l,s=(t.max.x-d.x)*l):(n=(t.max.x-d.x)*l,s=(t.min.x-d.x)*l),h>=0?(o=(t.min.y-d.y)*h,r=(t.max.y-d.y)*h):(o=(t.max.y-d.y)*h,r=(t.min.y-d.y)*h),n>r||o>s||((o>n||isNaN(n))&&(n=o),(r<s||isNaN(s))&&(s=r),u>=0?(a=(t.min.z-d.z)*u,c=(t.max.z-d.z)*u):(a=(t.max.z-d.z)*u,c=(t.min.z-d.z)*u),n>c||a>s)||((a>n||n!==n)&&(n=a),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,Hn)!==null}intersectTriangle(t,e,n,s,o){Mr.subVectors(e,t),ao.subVectors(n,t),wr.crossVectors(Mr,ao);let r=this.direction.dot(wr),a;if(r>0){if(s)return null;a=1}else if(r<0)a=-1,r=-r;else return null;ni.subVectors(this.origin,t);const c=a*this.direction.dot(ao.crossVectors(ni,ao));if(c<0)return null;const l=a*this.direction.dot(Mr.cross(ni));if(l<0||c+l>r)return null;const h=-a*ni.dot(wr);return h<0?null:this.at(h/r,o)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class pe{constructor(t,e,n,s,o,r,a,c,l,h,u,d,f,m,_,g){pe.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,o,r,a,c,l,h,u,d,f,m,_,g)}set(t,e,n,s,o,r,a,c,l,h,u,d,f,m,_,g){const p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=s,p[1]=o,p[5]=r,p[9]=a,p[13]=c,p[2]=l,p[6]=h,p[10]=u,p[14]=d,p[3]=f,p[7]=m,p[11]=_,p[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new pe().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,s=1/qi.setFromMatrixColumn(t,0).length(),o=1/qi.setFromMatrixColumn(t,1).length(),r=1/qi.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*o,e[5]=n[5]*o,e[6]=n[6]*o,e[7]=0,e[8]=n[8]*r,e[9]=n[9]*r,e[10]=n[10]*r,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,s=t.y,o=t.z,r=Math.cos(n),a=Math.sin(n),c=Math.cos(s),l=Math.sin(s),h=Math.cos(o),u=Math.sin(o);if(t.order==="XYZ"){const d=r*h,f=r*u,m=a*h,_=a*u;e[0]=c*h,e[4]=-c*u,e[8]=l,e[1]=f+m*l,e[5]=d-_*l,e[9]=-a*c,e[2]=_-d*l,e[6]=m+f*l,e[10]=r*c}else if(t.order==="YXZ"){const d=c*h,f=c*u,m=l*h,_=l*u;e[0]=d+_*a,e[4]=m*a-f,e[8]=r*l,e[1]=r*u,e[5]=r*h,e[9]=-a,e[2]=f*a-m,e[6]=_+d*a,e[10]=r*c}else if(t.order==="ZXY"){const d=c*h,f=c*u,m=l*h,_=l*u;e[0]=d-_*a,e[4]=-r*u,e[8]=m+f*a,e[1]=f+m*a,e[5]=r*h,e[9]=_-d*a,e[2]=-r*l,e[6]=a,e[10]=r*c}else if(t.order==="ZYX"){const d=r*h,f=r*u,m=a*h,_=a*u;e[0]=c*h,e[4]=m*l-f,e[8]=d*l+_,e[1]=c*u,e[5]=_*l+d,e[9]=f*l-m,e[2]=-l,e[6]=a*c,e[10]=r*c}else if(t.order==="YZX"){const d=r*c,f=r*l,m=a*c,_=a*l;e[0]=c*h,e[4]=_-d*u,e[8]=m*u+f,e[1]=u,e[5]=r*h,e[9]=-a*h,e[2]=-l*h,e[6]=f*u+m,e[10]=d-_*u}else if(t.order==="XZY"){const d=r*c,f=r*l,m=a*c,_=a*l;e[0]=c*h,e[4]=-u,e[8]=l*h,e[1]=d*u+_,e[5]=r*h,e[9]=f*u-m,e[2]=m*u-f,e[6]=a*h,e[10]=_*u+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Zd,t,Kd)}lookAt(t,e,n){const s=this.elements;return on.subVectors(t,e),on.lengthSq()===0&&(on.z=1),on.normalize(),ii.crossVectors(n,on),ii.lengthSq()===0&&(Math.abs(n.z)===1?on.x+=1e-4:on.z+=1e-4,on.normalize(),ii.crossVectors(n,on)),ii.normalize(),co.crossVectors(on,ii),s[0]=ii.x,s[4]=co.x,s[8]=on.x,s[1]=ii.y,s[5]=co.y,s[9]=on.y,s[2]=ii.z,s[6]=co.z,s[10]=on.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,o=this.elements,r=n[0],a=n[4],c=n[8],l=n[12],h=n[1],u=n[5],d=n[9],f=n[13],m=n[2],_=n[6],g=n[10],p=n[14],S=n[3],M=n[7],v=n[11],D=n[15],T=s[0],C=s[4],P=s[8],E=s[12],x=s[1],R=s[5],F=s[9],U=s[13],G=s[2],J=s[6],X=s[10],rt=s[14],$=s[3],mt=s[7],yt=s[11],Et=s[15];return o[0]=r*T+a*x+c*G+l*$,o[4]=r*C+a*R+c*J+l*mt,o[8]=r*P+a*F+c*X+l*yt,o[12]=r*E+a*U+c*rt+l*Et,o[1]=h*T+u*x+d*G+f*$,o[5]=h*C+u*R+d*J+f*mt,o[9]=h*P+u*F+d*X+f*yt,o[13]=h*E+u*U+d*rt+f*Et,o[2]=m*T+_*x+g*G+p*$,o[6]=m*C+_*R+g*J+p*mt,o[10]=m*P+_*F+g*X+p*yt,o[14]=m*E+_*U+g*rt+p*Et,o[3]=S*T+M*x+v*G+D*$,o[7]=S*C+M*R+v*J+D*mt,o[11]=S*P+M*F+v*X+D*yt,o[15]=S*E+M*U+v*rt+D*Et,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],s=t[8],o=t[12],r=t[1],a=t[5],c=t[9],l=t[13],h=t[2],u=t[6],d=t[10],f=t[14],m=t[3],_=t[7],g=t[11],p=t[15];return m*(+o*c*u-s*l*u-o*a*d+n*l*d+s*a*f-n*c*f)+_*(+e*c*f-e*l*d+o*r*d-s*r*f+s*l*h-o*c*h)+g*(+e*l*u-e*a*f-o*r*u+n*r*f+o*a*h-n*l*h)+p*(-s*a*h-e*c*u+e*a*d+s*r*u-n*r*d+n*c*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],o=t[3],r=t[4],a=t[5],c=t[6],l=t[7],h=t[8],u=t[9],d=t[10],f=t[11],m=t[12],_=t[13],g=t[14],p=t[15],S=u*g*l-_*d*l+_*c*f-a*g*f-u*c*p+a*d*p,M=m*d*l-h*g*l-m*c*f+r*g*f+h*c*p-r*d*p,v=h*_*l-m*u*l+m*a*f-r*_*f-h*a*p+r*u*p,D=m*u*c-h*_*c-m*a*d+r*_*d+h*a*g-r*u*g,T=e*S+n*M+s*v+o*D;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const C=1/T;return t[0]=S*C,t[1]=(_*d*o-u*g*o-_*s*f+n*g*f+u*s*p-n*d*p)*C,t[2]=(a*g*o-_*c*o+_*s*l-n*g*l-a*s*p+n*c*p)*C,t[3]=(u*c*o-a*d*o-u*s*l+n*d*l+a*s*f-n*c*f)*C,t[4]=M*C,t[5]=(h*g*o-m*d*o+m*s*f-e*g*f-h*s*p+e*d*p)*C,t[6]=(m*c*o-r*g*o-m*s*l+e*g*l+r*s*p-e*c*p)*C,t[7]=(r*d*o-h*c*o+h*s*l-e*d*l-r*s*f+e*c*f)*C,t[8]=v*C,t[9]=(m*u*o-h*_*o-m*n*f+e*_*f+h*n*p-e*u*p)*C,t[10]=(r*_*o-m*a*o+m*n*l-e*_*l-r*n*p+e*a*p)*C,t[11]=(h*a*o-r*u*o-h*n*l+e*u*l+r*n*f-e*a*f)*C,t[12]=D*C,t[13]=(h*_*s-m*u*s+m*n*d-e*_*d-h*n*g+e*u*g)*C,t[14]=(m*a*s-r*_*s-m*n*c+e*_*c+r*n*g-e*a*g)*C,t[15]=(r*u*s-h*a*s+h*n*c-e*u*c-r*n*d+e*a*d)*C,this}scale(t){const e=this.elements,n=t.x,s=t.y,o=t.z;return e[0]*=n,e[4]*=s,e[8]*=o,e[1]*=n,e[5]*=s,e[9]*=o,e[2]*=n,e[6]*=s,e[10]*=o,e[3]*=n,e[7]*=s,e[11]*=o,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),s=Math.sin(e),o=1-n,r=t.x,a=t.y,c=t.z,l=o*r,h=o*a;return this.set(l*r+n,l*a-s*c,l*c+s*a,0,l*a+s*c,h*a+n,h*c-s*r,0,l*c-s*a,h*c+s*r,o*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,o,r){return this.set(1,n,o,0,t,1,r,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){const s=this.elements,o=e._x,r=e._y,a=e._z,c=e._w,l=o+o,h=r+r,u=a+a,d=o*l,f=o*h,m=o*u,_=r*h,g=r*u,p=a*u,S=c*l,M=c*h,v=c*u,D=n.x,T=n.y,C=n.z;return s[0]=(1-(_+p))*D,s[1]=(f+v)*D,s[2]=(m-M)*D,s[3]=0,s[4]=(f-v)*T,s[5]=(1-(d+p))*T,s[6]=(g+S)*T,s[7]=0,s[8]=(m+M)*C,s[9]=(g-S)*C,s[10]=(1-(d+_))*C,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){const s=this.elements;let o=qi.set(s[0],s[1],s[2]).length();const r=qi.set(s[4],s[5],s[6]).length(),a=qi.set(s[8],s[9],s[10]).length();this.determinant()<0&&(o=-o),t.x=s[12],t.y=s[13],t.z=s[14],_n.copy(this);const l=1/o,h=1/r,u=1/a;return _n.elements[0]*=l,_n.elements[1]*=l,_n.elements[2]*=l,_n.elements[4]*=h,_n.elements[5]*=h,_n.elements[6]*=h,_n.elements[8]*=u,_n.elements[9]*=u,_n.elements[10]*=u,e.setFromRotationMatrix(_n),n.x=o,n.y=r,n.z=a,this}makePerspective(t,e,n,s,o,r,a=qn){const c=this.elements,l=2*o/(e-t),h=2*o/(n-s),u=(e+t)/(e-t),d=(n+s)/(n-s);let f,m;if(a===qn)f=-(r+o)/(r-o),m=-2*r*o/(r-o);else if(a===Vo)f=-r/(r-o),m=-r*o/(r-o);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=l,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=h,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=f,c[14]=m,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,s,o,r,a=qn){const c=this.elements,l=1/(e-t),h=1/(n-s),u=1/(r-o),d=(e+t)*l,f=(n+s)*h;let m,_;if(a===qn)m=(r+o)*u,_=-2*u;else if(a===Vo)m=o*u,_=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-d,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-f,c[2]=0,c[6]=0,c[10]=_,c[14]=-m,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const qi=new I,_n=new pe,Zd=new I(0,0,0),Kd=new I(1,1,1),ii=new I,co=new I,on=new I,il=new pe,sl=new Zs;class En{constructor(t=0,e=0,n=0,s=En.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const s=t.elements,o=s[0],r=s[4],a=s[8],c=s[1],l=s[5],h=s[9],u=s[2],d=s[6],f=s[10];switch(e){case"XYZ":this._y=Math.asin(Ne(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-r,o)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Ne(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,o),this._z=0);break;case"ZXY":this._x=Math.asin(Ne(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-r,l)):(this._y=0,this._z=Math.atan2(c,o));break;case"ZYX":this._y=Math.asin(-Ne(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(c,o)):(this._x=0,this._z=Math.atan2(-r,l));break;case"YZX":this._z=Math.asin(Ne(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,o)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-Ne(r,-1,1)),Math.abs(r)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(a,o)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return il.makeRotationFromQuaternion(t),this.setFromRotationMatrix(il,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return sl.setFromEuler(this),this.setFromQuaternion(sl,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}En.DEFAULT_ORDER="XYZ";class xc{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Jd=0;const ol=new I,Yi=new Zs,Gn=new pe,lo=new I,As=new I,jd=new I,Qd=new Zs,rl=new I(1,0,0),al=new I(0,1,0),cl=new I(0,0,1),ll={type:"added"},tf={type:"removed"},$i={type:"childadded",child:null},Sr={type:"childremoved",child:null};class Fe extends vs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Jd++}),this.uuid=xs(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Fe.DEFAULT_UP.clone();const t=new I,e=new En,n=new Zs,s=new I(1,1,1);function o(){n.setFromEuler(e,!1)}function r(){e.setFromQuaternion(n,void 0,!1)}e._onChange(o),n._onChange(r),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new pe},normalMatrix:{value:new Jt}}),this.matrix=new pe,this.matrixWorld=new pe,this.matrixAutoUpdate=Fe.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Fe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new xc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Yi.setFromAxisAngle(t,e),this.quaternion.multiply(Yi),this}rotateOnWorldAxis(t,e){return Yi.setFromAxisAngle(t,e),this.quaternion.premultiply(Yi),this}rotateX(t){return this.rotateOnAxis(rl,t)}rotateY(t){return this.rotateOnAxis(al,t)}rotateZ(t){return this.rotateOnAxis(cl,t)}translateOnAxis(t,e){return ol.copy(t).applyQuaternion(this.quaternion),this.position.add(ol.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(rl,t)}translateY(t){return this.translateOnAxis(al,t)}translateZ(t){return this.translateOnAxis(cl,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Gn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?lo.copy(t):lo.set(t,e,n);const s=this.parent;this.updateWorldMatrix(!0,!1),As.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Gn.lookAt(As,lo,this.up):Gn.lookAt(lo,As,this.up),this.quaternion.setFromRotationMatrix(Gn),s&&(Gn.extractRotation(s.matrixWorld),Yi.setFromRotationMatrix(Gn),this.quaternion.premultiply(Yi.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(ll),$i.child=t,this.dispatchEvent($i),$i.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(tf),Sr.child=t,this.dispatchEvent(Sr),Sr.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Gn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Gn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Gn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(ll),$i.child=t,this.dispatchEvent($i),$i.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){const r=this.children[n].getObjectByProperty(t,e);if(r!==void 0)return r}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const s=this.children;for(let o=0,r=s.length;o<r;o++)s[o].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(As,t,jd),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(As,Qd,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const s=this.children;for(let o=0,r=s.length;o<r;o++)s[o].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function o(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=o(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){const u=c[l];o(t.shapes,u)}else o(t.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(o(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(o(t.materials,this.material[c]));s.material=a}else s.material=o(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];s.animations.push(o(t.animations,c))}}if(e){const a=r(t.geometries),c=r(t.materials),l=r(t.textures),h=r(t.images),u=r(t.shapes),d=r(t.skeletons),f=r(t.animations),m=r(t.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),m.length>0&&(n.nodes=m)}return n.object=s,n;function r(a){const c=[];for(const l in a){const h=a[l];delete h.metadata,c.push(h)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const s=t.children[n];this.add(s.clone())}return this}}Fe.DEFAULT_UP=new I(0,1,0);Fe.DEFAULT_MATRIX_AUTO_UPDATE=!0;Fe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const vn=new I,Vn=new I,Er=new I,Wn=new I,Zi=new I,Ki=new I,hl=new I,Tr=new I,br=new I,Ar=new I,Rr=new ge,Cr=new ge,Lr=new ge;class yn{constructor(t=new I,e=new I,n=new I){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),vn.subVectors(t,e),s.cross(vn);const o=s.lengthSq();return o>0?s.multiplyScalar(1/Math.sqrt(o)):s.set(0,0,0)}static getBarycoord(t,e,n,s,o){vn.subVectors(s,e),Vn.subVectors(n,e),Er.subVectors(t,e);const r=vn.dot(vn),a=vn.dot(Vn),c=vn.dot(Er),l=Vn.dot(Vn),h=Vn.dot(Er),u=r*l-a*a;if(u===0)return o.set(0,0,0),null;const d=1/u,f=(l*c-a*h)*d,m=(r*h-a*c)*d;return o.set(1-f-m,m,f)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,Wn)===null?!1:Wn.x>=0&&Wn.y>=0&&Wn.x+Wn.y<=1}static getInterpolation(t,e,n,s,o,r,a,c){return this.getBarycoord(t,e,n,s,Wn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(o,Wn.x),c.addScaledVector(r,Wn.y),c.addScaledVector(a,Wn.z),c)}static getInterpolatedAttribute(t,e,n,s,o,r){return Rr.setScalar(0),Cr.setScalar(0),Lr.setScalar(0),Rr.fromBufferAttribute(t,e),Cr.fromBufferAttribute(t,n),Lr.fromBufferAttribute(t,s),r.setScalar(0),r.addScaledVector(Rr,o.x),r.addScaledVector(Cr,o.y),r.addScaledVector(Lr,o.z),r}static isFrontFacing(t,e,n,s){return vn.subVectors(n,e),Vn.subVectors(t,e),vn.cross(Vn).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return vn.subVectors(this.c,this.b),Vn.subVectors(this.a,this.b),vn.cross(Vn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return yn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return yn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,o){return yn.getInterpolation(t,this.a,this.b,this.c,e,n,s,o)}containsPoint(t){return yn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return yn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,s=this.b,o=this.c;let r,a;Zi.subVectors(s,n),Ki.subVectors(o,n),Tr.subVectors(t,n);const c=Zi.dot(Tr),l=Ki.dot(Tr);if(c<=0&&l<=0)return e.copy(n);br.subVectors(t,s);const h=Zi.dot(br),u=Ki.dot(br);if(h>=0&&u<=h)return e.copy(s);const d=c*u-h*l;if(d<=0&&c>=0&&h<=0)return r=c/(c-h),e.copy(n).addScaledVector(Zi,r);Ar.subVectors(t,o);const f=Zi.dot(Ar),m=Ki.dot(Ar);if(m>=0&&f<=m)return e.copy(o);const _=f*l-c*m;if(_<=0&&l>=0&&m<=0)return a=l/(l-m),e.copy(n).addScaledVector(Ki,a);const g=h*m-f*u;if(g<=0&&u-h>=0&&f-m>=0)return hl.subVectors(o,s),a=(u-h)/(u-h+(f-m)),e.copy(s).addScaledVector(hl,a);const p=1/(g+_+d);return r=_*p,a=d*p,e.copy(n).addScaledVector(Zi,r).addScaledVector(Ki,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const kh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},si={h:0,s:0,l:0},ho={h:0,s:0,l:0};function Pr(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class St{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=We){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,oe.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=oe.workingColorSpace){return this.r=t,this.g=e,this.b=n,oe.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=oe.workingColorSpace){if(t=zd(t,1),e=Ne(e,0,1),n=Ne(n,0,1),e===0)this.r=this.g=this.b=n;else{const o=n<=.5?n*(1+e):n+e-n*e,r=2*n-o;this.r=Pr(r,o,t+1/3),this.g=Pr(r,o,t),this.b=Pr(r,o,t-1/3)}return oe.toWorkingColorSpace(this,s),this}setStyle(t,e=We){function n(o){o!==void 0&&parseFloat(o)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let o;const r=s[1],a=s[2];switch(r){case"rgb":case"rgba":if(o=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(o[4]),this.setRGB(Math.min(255,parseInt(o[1],10))/255,Math.min(255,parseInt(o[2],10))/255,Math.min(255,parseInt(o[3],10))/255,e);if(o=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(o[4]),this.setRGB(Math.min(100,parseInt(o[1],10))/100,Math.min(100,parseInt(o[2],10))/100,Math.min(100,parseInt(o[3],10))/100,e);break;case"hsl":case"hsla":if(o=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(o[4]),this.setHSL(parseFloat(o[1])/360,parseFloat(o[2])/100,parseFloat(o[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const o=s[1],r=o.length;if(r===3)return this.setRGB(parseInt(o.charAt(0),16)/15,parseInt(o.charAt(1),16)/15,parseInt(o.charAt(2),16)/15,e);if(r===6)return this.setHex(parseInt(o,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=We){const n=kh[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Yn(t.r),this.g=Yn(t.g),this.b=Yn(t.b),this}copyLinearToSRGB(t){return this.r=cs(t.r),this.g=cs(t.g),this.b=cs(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=We){return oe.fromWorkingColorSpace(Ye.copy(this),t),Math.round(Ne(Ye.r*255,0,255))*65536+Math.round(Ne(Ye.g*255,0,255))*256+Math.round(Ne(Ye.b*255,0,255))}getHexString(t=We){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=oe.workingColorSpace){oe.fromWorkingColorSpace(Ye.copy(this),e);const n=Ye.r,s=Ye.g,o=Ye.b,r=Math.max(n,s,o),a=Math.min(n,s,o);let c,l;const h=(a+r)/2;if(a===r)c=0,l=0;else{const u=r-a;switch(l=h<=.5?u/(r+a):u/(2-r-a),r){case n:c=(s-o)/u+(s<o?6:0);break;case s:c=(o-n)/u+2;break;case o:c=(n-s)/u+4;break}c/=6}return t.h=c,t.s=l,t.l=h,t}getRGB(t,e=oe.workingColorSpace){return oe.fromWorkingColorSpace(Ye.copy(this),e),t.r=Ye.r,t.g=Ye.g,t.b=Ye.b,t}getStyle(t=We){oe.fromWorkingColorSpace(Ye.copy(this),t);const e=Ye.r,n=Ye.g,s=Ye.b;return t!==We?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(si),this.setHSL(si.h+t,si.s+e,si.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(si),t.getHSL(ho);const n=pr(si.h,ho.h,e),s=pr(si.s,ho.s,e),o=pr(si.l,ho.l,e);return this.setHSL(n,s,o),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,s=this.b,o=t.elements;return this.r=o[0]*e+o[3]*n+o[6]*s,this.g=o[1]*e+o[4]*n+o[7]*s,this.b=o[2]*e+o[5]*n+o[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ye=new St;St.NAMES=kh;let ef=0;class Oi extends vs{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:ef++}),this.uuid=xs(),this.name="",this.blending=rs,this.side=fi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=aa,this.blendDst=ca,this.blendEquation=Ti,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new St(0,0,0),this.blendAlpha=0,this.depthFunc=hs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Yc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Hi,this.stencilZFail=Hi,this.stencilZPass=Hi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==rs&&(n.blending=this.blending),this.side!==fi&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==aa&&(n.blendSrc=this.blendSrc),this.blendDst!==ca&&(n.blendDst=this.blendDst),this.blendEquation!==Ti&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==hs&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Yc&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Hi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Hi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Hi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(o){const r=[];for(const a in o){const c=o[a];delete c.metadata,r.push(c)}return r}if(e){const o=s(t.textures),r=s(t.images);o.length>0&&(n.textures=o),r.length>0&&(n.images=r)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const s=e.length;n=new Array(s);for(let o=0;o!==s;++o)n[o]=e[o].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class ue extends Oi{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new St(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new En,this.combine=lc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Pe=new I,uo=new gt;class hn{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=$c,this.updateRanges=[],this.gpuType=Nn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,o=this.itemSize;s<o;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)uo.fromBufferAttribute(this,e),uo.applyMatrix3(t),this.setXY(e,uo.x,uo.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Pe.fromBufferAttribute(this,e),Pe.applyMatrix3(t),this.setXYZ(e,Pe.x,Pe.y,Pe.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Pe.fromBufferAttribute(this,e),Pe.applyMatrix4(t),this.setXYZ(e,Pe.x,Pe.y,Pe.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Pe.fromBufferAttribute(this,e),Pe.applyNormalMatrix(t),this.setXYZ(e,Pe.x,Pe.y,Pe.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Pe.fromBufferAttribute(this,e),Pe.transformDirection(t),this.setXYZ(e,Pe.x,Pe.y,Pe.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Es(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=en(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Es(e,this.array)),e}setX(t,e){return this.normalized&&(e=en(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Es(e,this.array)),e}setY(t,e){return this.normalized&&(e=en(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Es(e,this.array)),e}setZ(t,e){return this.normalized&&(e=en(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Es(e,this.array)),e}setW(t,e){return this.normalized&&(e=en(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=en(e,this.array),n=en(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=en(e,this.array),n=en(n,this.array),s=en(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,o){return t*=this.itemSize,this.normalized&&(e=en(e,this.array),n=en(n,this.array),s=en(s,this.array),o=en(o,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=o,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==$c&&(t.usage=this.usage),t}}class Hh extends hn{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class Gh extends hn{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class ne extends hn{constructor(t,e,n){super(new Float32Array(t),e,n)}}let nf=0;const fn=new pe,Ir=new Fe,Ji=new I,rn=new Jn,Rs=new Jn,Be=new I;class De extends vs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:nf++}),this.uuid=xs(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Oh(t)?Gh:Hh)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const o=new Jt().getNormalMatrix(t);n.applyNormalMatrix(o),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return fn.makeRotationFromQuaternion(t),this.applyMatrix4(fn),this}rotateX(t){return fn.makeRotationX(t),this.applyMatrix4(fn),this}rotateY(t){return fn.makeRotationY(t),this.applyMatrix4(fn),this}rotateZ(t){return fn.makeRotationZ(t),this.applyMatrix4(fn),this}translate(t,e,n){return fn.makeTranslation(t,e,n),this.applyMatrix4(fn),this}scale(t,e,n){return fn.makeScale(t,e,n),this.applyMatrix4(fn),this}lookAt(t){return Ir.lookAt(t),Ir.updateMatrix(),this.applyMatrix4(Ir.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ji).negate(),this.translate(Ji.x,Ji.y,Ji.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let s=0,o=t.length;s<o;s++){const r=t[s];n.push(r.x,r.y,r.z||0)}this.setAttribute("position",new ne(n,3))}else{for(let n=0,s=e.count;n<s;n++){const o=t[n];e.setXYZ(n,o.x,o.y,o.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Jn);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new I(-1/0,-1/0,-1/0),new I(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){const o=e[n];rn.setFromBufferAttribute(o),this.morphTargetsRelative?(Be.addVectors(this.boundingBox.min,rn.min),this.boundingBox.expandByPoint(Be),Be.addVectors(this.boundingBox.max,rn.max),this.boundingBox.expandByPoint(Be)):(this.boundingBox.expandByPoint(rn.min),this.boundingBox.expandByPoint(rn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ys);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new I,1/0);return}if(t){const n=this.boundingSphere.center;if(rn.setFromBufferAttribute(t),e)for(let o=0,r=e.length;o<r;o++){const a=e[o];Rs.setFromBufferAttribute(a),this.morphTargetsRelative?(Be.addVectors(rn.min,Rs.min),rn.expandByPoint(Be),Be.addVectors(rn.max,Rs.max),rn.expandByPoint(Be)):(rn.expandByPoint(Rs.min),rn.expandByPoint(Rs.max))}rn.getCenter(n);let s=0;for(let o=0,r=t.count;o<r;o++)Be.fromBufferAttribute(t,o),s=Math.max(s,n.distanceToSquared(Be));if(e)for(let o=0,r=e.length;o<r;o++){const a=e[o],c=this.morphTargetsRelative;for(let l=0,h=a.count;l<h;l++)Be.fromBufferAttribute(a,l),c&&(Ji.fromBufferAttribute(t,l),Be.add(Ji)),s=Math.max(s,n.distanceToSquared(Be))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,s=e.normal,o=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new hn(new Float32Array(4*n.count),4));const r=this.getAttribute("tangent"),a=[],c=[];for(let P=0;P<n.count;P++)a[P]=new I,c[P]=new I;const l=new I,h=new I,u=new I,d=new gt,f=new gt,m=new gt,_=new I,g=new I;function p(P,E,x){l.fromBufferAttribute(n,P),h.fromBufferAttribute(n,E),u.fromBufferAttribute(n,x),d.fromBufferAttribute(o,P),f.fromBufferAttribute(o,E),m.fromBufferAttribute(o,x),h.sub(l),u.sub(l),f.sub(d),m.sub(d);const R=1/(f.x*m.y-m.x*f.y);isFinite(R)&&(_.copy(h).multiplyScalar(m.y).addScaledVector(u,-f.y).multiplyScalar(R),g.copy(u).multiplyScalar(f.x).addScaledVector(h,-m.x).multiplyScalar(R),a[P].add(_),a[E].add(_),a[x].add(_),c[P].add(g),c[E].add(g),c[x].add(g))}let S=this.groups;S.length===0&&(S=[{start:0,count:t.count}]);for(let P=0,E=S.length;P<E;++P){const x=S[P],R=x.start,F=x.count;for(let U=R,G=R+F;U<G;U+=3)p(t.getX(U+0),t.getX(U+1),t.getX(U+2))}const M=new I,v=new I,D=new I,T=new I;function C(P){D.fromBufferAttribute(s,P),T.copy(D);const E=a[P];M.copy(E),M.sub(D.multiplyScalar(D.dot(E))).normalize(),v.crossVectors(T,E);const R=v.dot(c[P])<0?-1:1;r.setXYZW(P,M.x,M.y,M.z,R)}for(let P=0,E=S.length;P<E;++P){const x=S[P],R=x.start,F=x.count;for(let U=R,G=R+F;U<G;U+=3)C(t.getX(U+0)),C(t.getX(U+1)),C(t.getX(U+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new hn(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);const s=new I,o=new I,r=new I,a=new I,c=new I,l=new I,h=new I,u=new I;if(t)for(let d=0,f=t.count;d<f;d+=3){const m=t.getX(d+0),_=t.getX(d+1),g=t.getX(d+2);s.fromBufferAttribute(e,m),o.fromBufferAttribute(e,_),r.fromBufferAttribute(e,g),h.subVectors(r,o),u.subVectors(s,o),h.cross(u),a.fromBufferAttribute(n,m),c.fromBufferAttribute(n,_),l.fromBufferAttribute(n,g),a.add(h),c.add(h),l.add(h),n.setXYZ(m,a.x,a.y,a.z),n.setXYZ(_,c.x,c.y,c.z),n.setXYZ(g,l.x,l.y,l.z)}else for(let d=0,f=e.count;d<f;d+=3)s.fromBufferAttribute(e,d+0),o.fromBufferAttribute(e,d+1),r.fromBufferAttribute(e,d+2),h.subVectors(r,o),u.subVectors(s,o),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Be.fromBufferAttribute(t,e),Be.normalize(),t.setXYZ(e,Be.x,Be.y,Be.z)}toNonIndexed(){function t(a,c){const l=a.array,h=a.itemSize,u=a.normalized,d=new l.constructor(c.length*h);let f=0,m=0;for(let _=0,g=c.length;_<g;_++){a.isInterleavedBufferAttribute?f=c[_]*a.data.stride+a.offset:f=c[_]*h;for(let p=0;p<h;p++)d[m++]=l[f++]}return new hn(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new De,n=this.index.array,s=this.attributes;for(const a in s){const c=s[a],l=t(c,n);e.setAttribute(a,l)}const o=this.morphAttributes;for(const a in o){const c=[],l=o[a];for(let h=0,u=l.length;h<u;h++){const d=l[h],f=t(d,n);c.push(f)}e.morphAttributes[a]=c}e.morphTargetsRelative=this.morphTargetsRelative;const r=this.groups;for(let a=0,c=r.length;a<c;a++){const l=r[a];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const c in n){const l=n[c];t.data.attributes[c]=l.toJSON(t.data)}const s={};let o=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],h=[];for(let u=0,d=l.length;u<d;u++){const f=l[u];h.push(f.toJSON(t.data))}h.length>0&&(s[c]=h,o=!0)}o&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const r=this.groups;r.length>0&&(t.data.groups=JSON.parse(JSON.stringify(r)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const s=t.attributes;for(const l in s){const h=s[l];this.setAttribute(l,h.clone(e))}const o=t.morphAttributes;for(const l in o){const h=[],u=o[l];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(e));this.morphAttributes[l]=h}this.morphTargetsRelative=t.morphTargetsRelative;const r=t.groups;for(let l=0,h=r.length;l<h;l++){const u=r[l];this.addGroup(u.start,u.count,u.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const ul=new pe,xi=new vc,fo=new ys,dl=new I,po=new I,mo=new I,go=new I,Dr=new I,_o=new I,fl=new I,vo=new I;class w extends Fe{constructor(t=new De,e=new ue){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,r=s.length;o<r;o++){const a=s[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=o}}}}getVertexPosition(t,e){const n=this.geometry,s=n.attributes.position,o=n.morphAttributes.position,r=n.morphTargetsRelative;e.fromBufferAttribute(s,t);const a=this.morphTargetInfluences;if(o&&a){_o.set(0,0,0);for(let c=0,l=o.length;c<l;c++){const h=a[c],u=o[c];h!==0&&(Dr.fromBufferAttribute(u,t),r?_o.addScaledVector(Dr,h):_o.addScaledVector(Dr.sub(e),h))}e.add(_o)}return e}raycast(t,e){const n=this.geometry,s=this.material,o=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),fo.copy(n.boundingSphere),fo.applyMatrix4(o),xi.copy(t.ray).recast(t.near),!(fo.containsPoint(xi.origin)===!1&&(xi.intersectSphere(fo,dl)===null||xi.origin.distanceToSquared(dl)>(t.far-t.near)**2))&&(ul.copy(o).invert(),xi.copy(t.ray).applyMatrix4(ul),!(n.boundingBox!==null&&xi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,xi)))}_computeIntersections(t,e,n){let s;const o=this.geometry,r=this.material,a=o.index,c=o.attributes.position,l=o.attributes.uv,h=o.attributes.uv1,u=o.attributes.normal,d=o.groups,f=o.drawRange;if(a!==null)if(Array.isArray(r))for(let m=0,_=d.length;m<_;m++){const g=d[m],p=r[g.materialIndex],S=Math.max(g.start,f.start),M=Math.min(a.count,Math.min(g.start+g.count,f.start+f.count));for(let v=S,D=M;v<D;v+=3){const T=a.getX(v),C=a.getX(v+1),P=a.getX(v+2);s=xo(this,p,t,n,l,h,u,T,C,P),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=g.materialIndex,e.push(s))}}else{const m=Math.max(0,f.start),_=Math.min(a.count,f.start+f.count);for(let g=m,p=_;g<p;g+=3){const S=a.getX(g),M=a.getX(g+1),v=a.getX(g+2);s=xo(this,r,t,n,l,h,u,S,M,v),s&&(s.faceIndex=Math.floor(g/3),e.push(s))}}else if(c!==void 0)if(Array.isArray(r))for(let m=0,_=d.length;m<_;m++){const g=d[m],p=r[g.materialIndex],S=Math.max(g.start,f.start),M=Math.min(c.count,Math.min(g.start+g.count,f.start+f.count));for(let v=S,D=M;v<D;v+=3){const T=v,C=v+1,P=v+2;s=xo(this,p,t,n,l,h,u,T,C,P),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=g.materialIndex,e.push(s))}}else{const m=Math.max(0,f.start),_=Math.min(c.count,f.start+f.count);for(let g=m,p=_;g<p;g+=3){const S=g,M=g+1,v=g+2;s=xo(this,r,t,n,l,h,u,S,M,v),s&&(s.faceIndex=Math.floor(g/3),e.push(s))}}}}function sf(i,t,e,n,s,o,r,a){let c;if(t.side===He?c=n.intersectTriangle(r,o,s,!0,a):c=n.intersectTriangle(s,o,r,t.side===fi,a),c===null)return null;vo.copy(a),vo.applyMatrix4(i.matrixWorld);const l=e.ray.origin.distanceTo(vo);return l<e.near||l>e.far?null:{distance:l,point:vo.clone(),object:i}}function xo(i,t,e,n,s,o,r,a,c,l){i.getVertexPosition(a,po),i.getVertexPosition(c,mo),i.getVertexPosition(l,go);const h=sf(i,t,e,n,po,mo,go,fl);if(h){const u=new I;yn.getBarycoord(fl,po,mo,go,u),s&&(h.uv=yn.getInterpolatedAttribute(s,a,c,l,u,new gt)),o&&(h.uv1=yn.getInterpolatedAttribute(o,a,c,l,u,new gt)),r&&(h.normal=yn.getInterpolatedAttribute(r,a,c,l,u,new I),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const d={a,b:c,c:l,normal:new I,materialIndex:0};yn.getNormal(po,mo,go,d.normal),h.face=d,h.barycoord=u}return h}class Vt extends De{constructor(t=1,e=1,n=1,s=1,o=1,r=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:o,depthSegments:r};const a=this;s=Math.floor(s),o=Math.floor(o),r=Math.floor(r);const c=[],l=[],h=[],u=[];let d=0,f=0;m("z","y","x",-1,-1,n,e,t,r,o,0),m("z","y","x",1,-1,n,e,-t,r,o,1),m("x","z","y",1,1,t,n,e,s,r,2),m("x","z","y",1,-1,t,n,-e,s,r,3),m("x","y","z",1,-1,t,e,n,s,o,4),m("x","y","z",-1,-1,t,e,-n,s,o,5),this.setIndex(c),this.setAttribute("position",new ne(l,3)),this.setAttribute("normal",new ne(h,3)),this.setAttribute("uv",new ne(u,2));function m(_,g,p,S,M,v,D,T,C,P,E){const x=v/C,R=D/P,F=v/2,U=D/2,G=T/2,J=C+1,X=P+1;let rt=0,$=0;const mt=new I;for(let yt=0;yt<X;yt++){const Et=yt*R-U;for(let Gt=0;Gt<J;Gt++){const Yt=Gt*x-F;mt[_]=Yt*S,mt[g]=Et*M,mt[p]=G,l.push(mt.x,mt.y,mt.z),mt[_]=0,mt[g]=0,mt[p]=T>0?1:-1,h.push(mt.x,mt.y,mt.z),u.push(Gt/C),u.push(1-yt/P),rt+=1}}for(let yt=0;yt<P;yt++)for(let Et=0;Et<C;Et++){const Gt=d+Et+J*yt,Yt=d+Et+J*(yt+1),Q=d+(Et+1)+J*(yt+1),ut=d+(Et+1)+J*yt;c.push(Gt,Yt,ut),c.push(Yt,Q,ut),$+=6}a.addGroup(f,$,E),f+=$,d+=rt}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Vt(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function gs(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function je(i){const t={};for(let e=0;e<i.length;e++){const n=gs(i[e]);for(const s in n)t[s]=n[s]}return t}function of(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Vh(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:oe.workingColorSpace}const rf={clone:gs,merge:je};var af=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,cf=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class pi extends Oi{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=af,this.fragmentShader=cf,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=gs(t.uniforms),this.uniformsGroups=of(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const r=this.uniforms[s].value;r&&r.isTexture?e.uniforms[s]={type:"t",value:r.toJSON(t).uuid}:r&&r.isColor?e.uniforms[s]={type:"c",value:r.getHex()}:r&&r.isVector2?e.uniforms[s]={type:"v2",value:r.toArray()}:r&&r.isVector3?e.uniforms[s]={type:"v3",value:r.toArray()}:r&&r.isVector4?e.uniforms[s]={type:"v4",value:r.toArray()}:r&&r.isMatrix3?e.uniforms[s]={type:"m3",value:r.toArray()}:r&&r.isMatrix4?e.uniforms[s]={type:"m4",value:r.toArray()}:e.uniforms[s]={value:r}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class Wh extends Fe{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new pe,this.projectionMatrix=new pe,this.projectionMatrixInverse=new pe,this.coordinateSystem=qn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const oi=new I,pl=new gt,ml=new gt;class Ze extends Wh{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Xa*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(fr*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Xa*2*Math.atan(Math.tan(fr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){oi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(oi.x,oi.y).multiplyScalar(-t/oi.z),oi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(oi.x,oi.y).multiplyScalar(-t/oi.z)}getViewSize(t,e){return this.getViewBounds(t,pl,ml),e.subVectors(ml,pl)}setViewOffset(t,e,n,s,o,r){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=o,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(fr*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,o=-.5*s;const r=this.view;if(this.view!==null&&this.view.enabled){const c=r.fullWidth,l=r.fullHeight;o+=r.offsetX*s/c,e-=r.offsetY*n/l,s*=r.width/c,n*=r.height/l}const a=this.filmOffset;a!==0&&(o+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(o,o+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const ji=-90,Qi=1;class lf extends Fe{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Ze(ji,Qi,t,e);s.layers=this.layers,this.add(s);const o=new Ze(ji,Qi,t,e);o.layers=this.layers,this.add(o);const r=new Ze(ji,Qi,t,e);r.layers=this.layers,this.add(r);const a=new Ze(ji,Qi,t,e);a.layers=this.layers,this.add(a);const c=new Ze(ji,Qi,t,e);c.layers=this.layers,this.add(c);const l=new Ze(ji,Qi,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,s,o,r,a,c]=e;for(const l of e)this.remove(l);if(t===qn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),o.up.set(0,0,-1),o.lookAt(0,1,0),r.up.set(0,0,1),r.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===Vo)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),o.up.set(0,0,1),o.lookAt(0,1,0),r.up.set(0,0,-1),r.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[o,r,a,c,l,h]=this.children,u=t.getRenderTarget(),d=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),m=t.xr.enabled;t.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,o),t.setRenderTarget(n,1,s),t.render(e,r),t.setRenderTarget(n,2,s),t.render(e,a),t.setRenderTarget(n,3,s),t.render(e,c),t.setRenderTarget(n,4,s),t.render(e,l),n.texture.generateMipmaps=_,t.setRenderTarget(n,5,s),t.render(e,h),t.setRenderTarget(u,d,f),t.xr.enabled=m,n.texture.needsPMREMUpdate=!0}}class Xh extends Ke{constructor(t,e,n,s,o,r,a,c,l,h){t=t!==void 0?t:[],e=e!==void 0?e:us,super(t,e,n,s,o,r,a,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class hf extends Ni{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new Xh(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:Un}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Vt(5,5,5),o=new pi({name:"CubemapFromEquirect",uniforms:gs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:He,blending:ui});o.uniforms.tEquirect.value=e;const r=new w(s,o),a=e.minFilter;return e.minFilter===Li&&(e.minFilter=Un),new lf(1,10,this).update(t,r),e.minFilter=a,r.geometry.dispose(),r.material.dispose(),this}clear(t,e,n,s){const o=t.getRenderTarget();for(let r=0;r<6;r++)t.setRenderTarget(this,r),t.clear(e,n,s);t.setRenderTarget(o)}}const Ur=new I,uf=new I,df=new Jt;class Si{constructor(t=new I(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const s=Ur.subVectors(n,e).cross(uf.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(Ur),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const o=-(t.start.dot(this.normal)+this.constant)/s;return o<0||o>1?null:e.copy(t.start).addScaledVector(n,o)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||df.getNormalMatrix(t),s=this.coplanarPoint(Ur).applyMatrix4(t),o=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(o),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const yi=new ys,yo=new I;class yc{constructor(t=new Si,e=new Si,n=new Si,s=new Si,o=new Si,r=new Si){this.planes=[t,e,n,s,o,r]}set(t,e,n,s,o,r){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(s),a[4].copy(o),a[5].copy(r),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=qn){const n=this.planes,s=t.elements,o=s[0],r=s[1],a=s[2],c=s[3],l=s[4],h=s[5],u=s[6],d=s[7],f=s[8],m=s[9],_=s[10],g=s[11],p=s[12],S=s[13],M=s[14],v=s[15];if(n[0].setComponents(c-o,d-l,g-f,v-p).normalize(),n[1].setComponents(c+o,d+l,g+f,v+p).normalize(),n[2].setComponents(c+r,d+h,g+m,v+S).normalize(),n[3].setComponents(c-r,d-h,g-m,v-S).normalize(),n[4].setComponents(c-a,d-u,g-_,v-M).normalize(),e===qn)n[5].setComponents(c+a,d+u,g+_,v+M).normalize();else if(e===Vo)n[5].setComponents(a,u,_,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),yi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),yi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(yi)}intersectsSprite(t){return yi.center.set(0,0,0),yi.radius=.7071067811865476,yi.applyMatrix4(t.matrixWorld),this.intersectsSphere(yi)}intersectsSphere(t){const e=this.planes,n=t.center,s=-t.radius;for(let o=0;o<6;o++)if(e[o].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const s=e[n];if(yo.x=s.normal.x>0?t.max.x:t.min.x,yo.y=s.normal.y>0?t.max.y:t.min.y,yo.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(yo)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function qh(){let i=null,t=!1,e=null,n=null;function s(o,r){e(o,r),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(o){e=o},setContext:function(o){i=o}}}function ff(i){const t=new WeakMap;function e(a,c){const l=a.array,h=a.usage,u=l.byteLength,d=i.createBuffer();i.bindBuffer(c,d),i.bufferData(c,l,h),a.onUploadCallback();let f;if(l instanceof Float32Array)f=i.FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)f=i.SHORT;else if(l instanceof Uint32Array)f=i.UNSIGNED_INT;else if(l instanceof Int32Array)f=i.INT;else if(l instanceof Int8Array)f=i.BYTE;else if(l instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:d,type:f,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,c,l){const h=c.array,u=c.updateRanges;if(i.bindBuffer(l,a),u.length===0)i.bufferSubData(l,0,h);else{u.sort((f,m)=>f.start-m.start);let d=0;for(let f=1;f<u.length;f++){const m=u[d],_=u[f];_.start<=m.start+m.count+1?m.count=Math.max(m.count,_.start+_.count-m.start):(++d,u[d]=_)}u.length=d+1;for(let f=0,m=u.length;f<m;f++){const _=u[f];i.bufferSubData(l,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function o(a){a.isInterleavedBufferAttribute&&(a=a.data);const c=t.get(a);c&&(i.deleteBuffer(c.buffer),t.delete(a))}function r(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const l=t.get(a);if(l===void 0)t.set(a,e(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,a,c),l.version=a.version}}return{get:s,remove:o,update:r}}class Mn extends De{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};const o=t/2,r=e/2,a=Math.floor(n),c=Math.floor(s),l=a+1,h=c+1,u=t/a,d=e/c,f=[],m=[],_=[],g=[];for(let p=0;p<h;p++){const S=p*d-r;for(let M=0;M<l;M++){const v=M*u-o;m.push(v,-S,0),_.push(0,0,1),g.push(M/a),g.push(1-p/c)}}for(let p=0;p<c;p++)for(let S=0;S<a;S++){const M=S+l*p,v=S+l*(p+1),D=S+1+l*(p+1),T=S+1+l*p;f.push(M,v,T),f.push(v,D,T)}this.setIndex(f),this.setAttribute("position",new ne(m,3)),this.setAttribute("normal",new ne(_,3)),this.setAttribute("uv",new ne(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Mn(t.width,t.height,t.widthSegments,t.heightSegments)}}var pf=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,mf=`#ifdef USE_ALPHAHASH
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
#endif`,gf=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,_f=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,vf=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,xf=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,yf=`#ifdef USE_AOMAP
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
#endif`,Mf=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,wf=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
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
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Sf=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Ef=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Tf=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,bf=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Af=`#ifdef USE_IRIDESCENCE
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
#endif`,Rf=`#ifdef USE_BUMPMAP
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
#endif`,Cf=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Lf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Pf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,If=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Df=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Uf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Nf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Ff=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Of=`#define PI 3.141592653589793
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
} // validated`,zf=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Bf=`vec3 transformedNormal = objectNormal;
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
#endif`,kf=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Hf=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Gf=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Vf=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Wf="gl_FragColor = linearToOutputTexel( gl_FragColor );",Xf=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,qf=`#ifdef USE_ENVMAP
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
#endif`,Yf=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,$f=`#ifdef USE_ENVMAP
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
#endif`,Zf=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Kf=`#ifdef USE_ENVMAP
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
#endif`,Jf=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,jf=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Qf=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,t0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,e0=`#ifdef USE_GRADIENTMAP
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
}`,n0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,i0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,s0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,o0=`uniform bool receiveShadow;
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
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
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
#endif`,r0=`#ifdef USE_ENVMAP
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
#endif`,a0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,c0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,l0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,h0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,u0=`PhysicalMaterial material;
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
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
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
#endif`,d0=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
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
}`,f0=`
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
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
#endif`,p0=`#if defined( RE_IndirectDiffuse )
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
#endif`,m0=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,g0=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,_0=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,v0=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,x0=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,y0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,M0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,w0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,S0=`#if defined( USE_POINTS_UV )
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
#endif`,E0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,T0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,b0=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,A0=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,R0=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,C0=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
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
#endif`,L0=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,P0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,I0=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,D0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,U0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,N0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,F0=`#ifdef USE_NORMALMAP
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
#endif`,O0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,z0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,B0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,k0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,H0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,G0=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
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
}`,V0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,W0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,X0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,q0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Y0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,$0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Z0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
			float shadowIntensity;
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
			float shadowIntensity;
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
			float shadowIntensity;
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
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
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
		return mix( 1.0, shadow, shadowIntensity );
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
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
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
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,K0=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
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
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,J0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,j0=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Q0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,tp=`#ifdef USE_SKINNING
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
#endif`,ep=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,np=`#ifdef USE_SKINNING
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
#endif`,ip=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,sp=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,op=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,rp=`#ifndef saturate
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
vec3 CineonToneMapping( vec3 color ) {
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
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,ap=`#ifdef USE_TRANSMISSION
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
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,cp=`#ifdef USE_TRANSMISSION
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
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,lp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,hp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,up=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,dp=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const fp=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,pp=`uniform sampler2D t2D;
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
}`,mp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,gp=`#ifdef ENVMAP_TYPE_CUBE
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
}`,_p=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,vp=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,xp=`#include <common>
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
}`,yp=`#if DEPTH_PACKING == 3200
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
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Mp=`#define DISTANCE
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
}`,wp=`#define DISTANCE
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
}`,Sp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Ep=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Tp=`uniform float scale;
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
}`,bp=`uniform vec3 diffuse;
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
}`,Ap=`#include <common>
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
}`,Rp=`uniform vec3 diffuse;
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
}`,Cp=`#define LAMBERT
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
}`,Lp=`#define LAMBERT
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
}`,Pp=`#define MATCAP
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
}`,Ip=`#define MATCAP
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
}`,Dp=`#define NORMAL
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
}`,Up=`#define NORMAL
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
}`,Np=`#define PHONG
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
}`,Fp=`#define PHONG
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
}`,Op=`#define STANDARD
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
}`,zp=`#define STANDARD
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
#ifdef USE_DISPERSION
	uniform float dispersion;
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
}`,Bp=`#define TOON
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
}`,kp=`#define TOON
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
}`,Hp=`uniform float size;
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
}`,Gp=`uniform vec3 diffuse;
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
}`,Vp=`#include <common>
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
}`,Wp=`uniform vec3 color;
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
}`,Xp=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
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
}`,qp=`uniform vec3 diffuse;
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
}`,te={alphahash_fragment:pf,alphahash_pars_fragment:mf,alphamap_fragment:gf,alphamap_pars_fragment:_f,alphatest_fragment:vf,alphatest_pars_fragment:xf,aomap_fragment:yf,aomap_pars_fragment:Mf,batching_pars_vertex:wf,batching_vertex:Sf,begin_vertex:Ef,beginnormal_vertex:Tf,bsdfs:bf,iridescence_fragment:Af,bumpmap_pars_fragment:Rf,clipping_planes_fragment:Cf,clipping_planes_pars_fragment:Lf,clipping_planes_pars_vertex:Pf,clipping_planes_vertex:If,color_fragment:Df,color_pars_fragment:Uf,color_pars_vertex:Nf,color_vertex:Ff,common:Of,cube_uv_reflection_fragment:zf,defaultnormal_vertex:Bf,displacementmap_pars_vertex:kf,displacementmap_vertex:Hf,emissivemap_fragment:Gf,emissivemap_pars_fragment:Vf,colorspace_fragment:Wf,colorspace_pars_fragment:Xf,envmap_fragment:qf,envmap_common_pars_fragment:Yf,envmap_pars_fragment:$f,envmap_pars_vertex:Zf,envmap_physical_pars_fragment:r0,envmap_vertex:Kf,fog_vertex:Jf,fog_pars_vertex:jf,fog_fragment:Qf,fog_pars_fragment:t0,gradientmap_pars_fragment:e0,lightmap_pars_fragment:n0,lights_lambert_fragment:i0,lights_lambert_pars_fragment:s0,lights_pars_begin:o0,lights_toon_fragment:a0,lights_toon_pars_fragment:c0,lights_phong_fragment:l0,lights_phong_pars_fragment:h0,lights_physical_fragment:u0,lights_physical_pars_fragment:d0,lights_fragment_begin:f0,lights_fragment_maps:p0,lights_fragment_end:m0,logdepthbuf_fragment:g0,logdepthbuf_pars_fragment:_0,logdepthbuf_pars_vertex:v0,logdepthbuf_vertex:x0,map_fragment:y0,map_pars_fragment:M0,map_particle_fragment:w0,map_particle_pars_fragment:S0,metalnessmap_fragment:E0,metalnessmap_pars_fragment:T0,morphinstance_vertex:b0,morphcolor_vertex:A0,morphnormal_vertex:R0,morphtarget_pars_vertex:C0,morphtarget_vertex:L0,normal_fragment_begin:P0,normal_fragment_maps:I0,normal_pars_fragment:D0,normal_pars_vertex:U0,normal_vertex:N0,normalmap_pars_fragment:F0,clearcoat_normal_fragment_begin:O0,clearcoat_normal_fragment_maps:z0,clearcoat_pars_fragment:B0,iridescence_pars_fragment:k0,opaque_fragment:H0,packing:G0,premultiplied_alpha_fragment:V0,project_vertex:W0,dithering_fragment:X0,dithering_pars_fragment:q0,roughnessmap_fragment:Y0,roughnessmap_pars_fragment:$0,shadowmap_pars_fragment:Z0,shadowmap_pars_vertex:K0,shadowmap_vertex:J0,shadowmask_pars_fragment:j0,skinbase_vertex:Q0,skinning_pars_vertex:tp,skinning_vertex:ep,skinnormal_vertex:np,specularmap_fragment:ip,specularmap_pars_fragment:sp,tonemapping_fragment:op,tonemapping_pars_fragment:rp,transmission_fragment:ap,transmission_pars_fragment:cp,uv_pars_fragment:lp,uv_pars_vertex:hp,uv_vertex:up,worldpos_vertex:dp,background_vert:fp,background_frag:pp,backgroundCube_vert:mp,backgroundCube_frag:gp,cube_vert:_p,cube_frag:vp,depth_vert:xp,depth_frag:yp,distanceRGBA_vert:Mp,distanceRGBA_frag:wp,equirect_vert:Sp,equirect_frag:Ep,linedashed_vert:Tp,linedashed_frag:bp,meshbasic_vert:Ap,meshbasic_frag:Rp,meshlambert_vert:Cp,meshlambert_frag:Lp,meshmatcap_vert:Pp,meshmatcap_frag:Ip,meshnormal_vert:Dp,meshnormal_frag:Up,meshphong_vert:Np,meshphong_frag:Fp,meshphysical_vert:Op,meshphysical_frag:zp,meshtoon_vert:Bp,meshtoon_frag:kp,points_vert:Hp,points_frag:Gp,shadow_vert:Vp,shadow_frag:Wp,sprite_vert:Xp,sprite_frag:qp},Tt={common:{diffuse:{value:new St(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Jt},alphaMap:{value:null},alphaMapTransform:{value:new Jt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Jt}},envmap:{envMap:{value:null},envMapRotation:{value:new Jt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Jt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Jt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Jt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Jt},normalScale:{value:new gt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Jt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Jt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Jt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Jt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new St(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new St(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Jt},alphaTest:{value:0},uvTransform:{value:new Jt}},sprite:{diffuse:{value:new St(16777215)},opacity:{value:1},center:{value:new gt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Jt},alphaMap:{value:null},alphaMapTransform:{value:new Jt},alphaTest:{value:0}}},Pn={basic:{uniforms:je([Tt.common,Tt.specularmap,Tt.envmap,Tt.aomap,Tt.lightmap,Tt.fog]),vertexShader:te.meshbasic_vert,fragmentShader:te.meshbasic_frag},lambert:{uniforms:je([Tt.common,Tt.specularmap,Tt.envmap,Tt.aomap,Tt.lightmap,Tt.emissivemap,Tt.bumpmap,Tt.normalmap,Tt.displacementmap,Tt.fog,Tt.lights,{emissive:{value:new St(0)}}]),vertexShader:te.meshlambert_vert,fragmentShader:te.meshlambert_frag},phong:{uniforms:je([Tt.common,Tt.specularmap,Tt.envmap,Tt.aomap,Tt.lightmap,Tt.emissivemap,Tt.bumpmap,Tt.normalmap,Tt.displacementmap,Tt.fog,Tt.lights,{emissive:{value:new St(0)},specular:{value:new St(1118481)},shininess:{value:30}}]),vertexShader:te.meshphong_vert,fragmentShader:te.meshphong_frag},standard:{uniforms:je([Tt.common,Tt.envmap,Tt.aomap,Tt.lightmap,Tt.emissivemap,Tt.bumpmap,Tt.normalmap,Tt.displacementmap,Tt.roughnessmap,Tt.metalnessmap,Tt.fog,Tt.lights,{emissive:{value:new St(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:te.meshphysical_vert,fragmentShader:te.meshphysical_frag},toon:{uniforms:je([Tt.common,Tt.aomap,Tt.lightmap,Tt.emissivemap,Tt.bumpmap,Tt.normalmap,Tt.displacementmap,Tt.gradientmap,Tt.fog,Tt.lights,{emissive:{value:new St(0)}}]),vertexShader:te.meshtoon_vert,fragmentShader:te.meshtoon_frag},matcap:{uniforms:je([Tt.common,Tt.bumpmap,Tt.normalmap,Tt.displacementmap,Tt.fog,{matcap:{value:null}}]),vertexShader:te.meshmatcap_vert,fragmentShader:te.meshmatcap_frag},points:{uniforms:je([Tt.points,Tt.fog]),vertexShader:te.points_vert,fragmentShader:te.points_frag},dashed:{uniforms:je([Tt.common,Tt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:te.linedashed_vert,fragmentShader:te.linedashed_frag},depth:{uniforms:je([Tt.common,Tt.displacementmap]),vertexShader:te.depth_vert,fragmentShader:te.depth_frag},normal:{uniforms:je([Tt.common,Tt.bumpmap,Tt.normalmap,Tt.displacementmap,{opacity:{value:1}}]),vertexShader:te.meshnormal_vert,fragmentShader:te.meshnormal_frag},sprite:{uniforms:je([Tt.sprite,Tt.fog]),vertexShader:te.sprite_vert,fragmentShader:te.sprite_frag},background:{uniforms:{uvTransform:{value:new Jt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:te.background_vert,fragmentShader:te.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Jt}},vertexShader:te.backgroundCube_vert,fragmentShader:te.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:te.cube_vert,fragmentShader:te.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:te.equirect_vert,fragmentShader:te.equirect_frag},distanceRGBA:{uniforms:je([Tt.common,Tt.displacementmap,{referencePosition:{value:new I},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:te.distanceRGBA_vert,fragmentShader:te.distanceRGBA_frag},shadow:{uniforms:je([Tt.lights,Tt.fog,{color:{value:new St(0)},opacity:{value:1}}]),vertexShader:te.shadow_vert,fragmentShader:te.shadow_frag}};Pn.physical={uniforms:je([Pn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Jt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Jt},clearcoatNormalScale:{value:new gt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Jt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Jt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Jt},sheen:{value:0},sheenColor:{value:new St(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Jt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Jt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Jt},transmissionSamplerSize:{value:new gt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Jt},attenuationDistance:{value:0},attenuationColor:{value:new St(0)},specularColor:{value:new St(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Jt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Jt},anisotropyVector:{value:new gt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Jt}}]),vertexShader:te.meshphysical_vert,fragmentShader:te.meshphysical_frag};const Mo={r:0,b:0,g:0},Mi=new En,Yp=new pe;function $p(i,t,e,n,s,o,r){const a=new St(0);let c=o===!0?0:1,l,h,u=null,d=0,f=null;function m(S){let M=S.isScene===!0?S.background:null;return M&&M.isTexture&&(M=(S.backgroundBlurriness>0?e:t).get(M)),M}function _(S){let M=!1;const v=m(S);v===null?p(a,c):v&&v.isColor&&(p(v,1),M=!0);const D=i.xr.getEnvironmentBlendMode();D==="additive"?n.buffers.color.setClear(0,0,0,1,r):D==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,r),(i.autoClear||M)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function g(S,M){const v=m(M);v&&(v.isCubeTexture||v.mapping===nr)?(h===void 0&&(h=new w(new Vt(1,1,1),new pi({name:"BackgroundCubeMaterial",uniforms:gs(Pn.backgroundCube.uniforms),vertexShader:Pn.backgroundCube.vertexShader,fragmentShader:Pn.backgroundCube.fragmentShader,side:He,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(D,T,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),Mi.copy(M.backgroundRotation),Mi.x*=-1,Mi.y*=-1,Mi.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(Mi.y*=-1,Mi.z*=-1),h.material.uniforms.envMap.value=v,h.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Yp.makeRotationFromEuler(Mi)),h.material.toneMapped=oe.getTransfer(v.colorSpace)!==me,(u!==v||d!==v.version||f!==i.toneMapping)&&(h.material.needsUpdate=!0,u=v,d=v.version,f=i.toneMapping),h.layers.enableAll(),S.unshift(h,h.geometry,h.material,0,0,null)):v&&v.isTexture&&(l===void 0&&(l=new w(new Mn(2,2),new pi({name:"BackgroundMaterial",uniforms:gs(Pn.background.uniforms),vertexShader:Pn.background.vertexShader,fragmentShader:Pn.background.fragmentShader,side:fi,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=v,l.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,l.material.toneMapped=oe.getTransfer(v.colorSpace)!==me,v.matrixAutoUpdate===!0&&v.updateMatrix(),l.material.uniforms.uvTransform.value.copy(v.matrix),(u!==v||d!==v.version||f!==i.toneMapping)&&(l.material.needsUpdate=!0,u=v,d=v.version,f=i.toneMapping),l.layers.enableAll(),S.unshift(l,l.geometry,l.material,0,0,null))}function p(S,M){S.getRGB(Mo,Vh(i)),n.buffers.color.setClear(Mo.r,Mo.g,Mo.b,M,r)}return{getClearColor:function(){return a},setClearColor:function(S,M=1){a.set(S),c=M,p(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(S){c=S,p(a,c)},render:_,addToRenderList:g}}function Zp(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null);let o=s,r=!1;function a(x,R,F,U,G){let J=!1;const X=u(U,F,R);o!==X&&(o=X,l(o.object)),J=f(x,U,F,G),J&&m(x,U,F,G),G!==null&&t.update(G,i.ELEMENT_ARRAY_BUFFER),(J||r)&&(r=!1,v(x,R,F,U),G!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(G).buffer))}function c(){return i.createVertexArray()}function l(x){return i.bindVertexArray(x)}function h(x){return i.deleteVertexArray(x)}function u(x,R,F){const U=F.wireframe===!0;let G=n[x.id];G===void 0&&(G={},n[x.id]=G);let J=G[R.id];J===void 0&&(J={},G[R.id]=J);let X=J[U];return X===void 0&&(X=d(c()),J[U]=X),X}function d(x){const R=[],F=[],U=[];for(let G=0;G<e;G++)R[G]=0,F[G]=0,U[G]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:R,enabledAttributes:F,attributeDivisors:U,object:x,attributes:{},index:null}}function f(x,R,F,U){const G=o.attributes,J=R.attributes;let X=0;const rt=F.getAttributes();for(const $ in rt)if(rt[$].location>=0){const yt=G[$];let Et=J[$];if(Et===void 0&&($==="instanceMatrix"&&x.instanceMatrix&&(Et=x.instanceMatrix),$==="instanceColor"&&x.instanceColor&&(Et=x.instanceColor)),yt===void 0||yt.attribute!==Et||Et&&yt.data!==Et.data)return!0;X++}return o.attributesNum!==X||o.index!==U}function m(x,R,F,U){const G={},J=R.attributes;let X=0;const rt=F.getAttributes();for(const $ in rt)if(rt[$].location>=0){let yt=J[$];yt===void 0&&($==="instanceMatrix"&&x.instanceMatrix&&(yt=x.instanceMatrix),$==="instanceColor"&&x.instanceColor&&(yt=x.instanceColor));const Et={};Et.attribute=yt,yt&&yt.data&&(Et.data=yt.data),G[$]=Et,X++}o.attributes=G,o.attributesNum=X,o.index=U}function _(){const x=o.newAttributes;for(let R=0,F=x.length;R<F;R++)x[R]=0}function g(x){p(x,0)}function p(x,R){const F=o.newAttributes,U=o.enabledAttributes,G=o.attributeDivisors;F[x]=1,U[x]===0&&(i.enableVertexAttribArray(x),U[x]=1),G[x]!==R&&(i.vertexAttribDivisor(x,R),G[x]=R)}function S(){const x=o.newAttributes,R=o.enabledAttributes;for(let F=0,U=R.length;F<U;F++)R[F]!==x[F]&&(i.disableVertexAttribArray(F),R[F]=0)}function M(x,R,F,U,G,J,X){X===!0?i.vertexAttribIPointer(x,R,F,G,J):i.vertexAttribPointer(x,R,F,U,G,J)}function v(x,R,F,U){_();const G=U.attributes,J=F.getAttributes(),X=R.defaultAttributeValues;for(const rt in J){const $=J[rt];if($.location>=0){let mt=G[rt];if(mt===void 0&&(rt==="instanceMatrix"&&x.instanceMatrix&&(mt=x.instanceMatrix),rt==="instanceColor"&&x.instanceColor&&(mt=x.instanceColor)),mt!==void 0){const yt=mt.normalized,Et=mt.itemSize,Gt=t.get(mt);if(Gt===void 0)continue;const Yt=Gt.buffer,Q=Gt.type,ut=Gt.bytesPerElement,bt=Q===i.INT||Q===i.UNSIGNED_INT||mt.gpuType===hc;if(mt.isInterleavedBufferAttribute){const W=mt.data,st=W.stride,vt=mt.offset;if(W.isInstancedInterleavedBuffer){for(let wt=0;wt<$.locationSize;wt++)p($.location+wt,W.meshPerAttribute);x.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=W.meshPerAttribute*W.count)}else for(let wt=0;wt<$.locationSize;wt++)g($.location+wt);i.bindBuffer(i.ARRAY_BUFFER,Yt);for(let wt=0;wt<$.locationSize;wt++)M($.location+wt,Et/$.locationSize,Q,yt,st*ut,(vt+Et/$.locationSize*wt)*ut,bt)}else{if(mt.isInstancedBufferAttribute){for(let W=0;W<$.locationSize;W++)p($.location+W,mt.meshPerAttribute);x.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=mt.meshPerAttribute*mt.count)}else for(let W=0;W<$.locationSize;W++)g($.location+W);i.bindBuffer(i.ARRAY_BUFFER,Yt);for(let W=0;W<$.locationSize;W++)M($.location+W,Et/$.locationSize,Q,yt,Et*ut,Et/$.locationSize*W*ut,bt)}}else if(X!==void 0){const yt=X[rt];if(yt!==void 0)switch(yt.length){case 2:i.vertexAttrib2fv($.location,yt);break;case 3:i.vertexAttrib3fv($.location,yt);break;case 4:i.vertexAttrib4fv($.location,yt);break;default:i.vertexAttrib1fv($.location,yt)}}}}S()}function D(){P();for(const x in n){const R=n[x];for(const F in R){const U=R[F];for(const G in U)h(U[G].object),delete U[G];delete R[F]}delete n[x]}}function T(x){if(n[x.id]===void 0)return;const R=n[x.id];for(const F in R){const U=R[F];for(const G in U)h(U[G].object),delete U[G];delete R[F]}delete n[x.id]}function C(x){for(const R in n){const F=n[R];if(F[x.id]===void 0)continue;const U=F[x.id];for(const G in U)h(U[G].object),delete U[G];delete F[x.id]}}function P(){E(),r=!0,o!==s&&(o=s,l(o.object))}function E(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:P,resetDefaultState:E,dispose:D,releaseStatesOfGeometry:T,releaseStatesOfProgram:C,initAttributes:_,enableAttribute:g,disableUnusedAttributes:S}}function Kp(i,t,e){let n;function s(l){n=l}function o(l,h){i.drawArrays(n,l,h),e.update(h,n,1)}function r(l,h,u){u!==0&&(i.drawArraysInstanced(n,l,h,u),e.update(h,n,u))}function a(l,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,h,0,u);let f=0;for(let m=0;m<u;m++)f+=h[m];e.update(f,n,1)}function c(l,h,u,d){if(u===0)return;const f=t.get("WEBGL_multi_draw");if(f===null)for(let m=0;m<l.length;m++)r(l[m],h[m],d[m]);else{f.multiDrawArraysInstancedWEBGL(n,l,0,h,0,d,0,u);let m=0;for(let _=0;_<u;_++)m+=h[_]*d[_];e.update(m,n,1)}}this.setMode=s,this.render=o,this.renderInstances=r,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function Jp(i,t,e,n){let s;function o(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const C=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function r(C){return!(C!==wn&&n.convert(C)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(C){const P=C===$s&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(C!==$n&&n.convert(C)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&C!==Nn&&!P)}function c(C){if(C==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp";const h=c(l);h!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);const u=e.logarithmicDepthBuffer===!0,d=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),m=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_TEXTURE_SIZE),g=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),S=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),M=i.getParameter(i.MAX_VARYING_VECTORS),v=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),D=m>0,T=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:o,getMaxPrecision:c,textureFormatReadable:r,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:u,reverseDepthBuffer:d,maxTextures:f,maxVertexTextures:m,maxTextureSize:_,maxCubemapSize:g,maxAttributes:p,maxVertexUniforms:S,maxVaryings:M,maxFragmentUniforms:v,vertexTextures:D,maxSamples:T}}function jp(i){const t=this;let e=null,n=0,s=!1,o=!1;const r=new Si,a=new Jt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){const f=u.length!==0||d||n!==0||s;return s=d,n=u.length,f},this.beginShadows=function(){o=!0,h(null)},this.endShadows=function(){o=!1},this.setGlobalState=function(u,d){e=h(u,d,0)},this.setState=function(u,d,f){const m=u.clippingPlanes,_=u.clipIntersection,g=u.clipShadows,p=i.get(u);if(!s||m===null||m.length===0||o&&!g)o?h(null):l();else{const S=o?0:n,M=S*4;let v=p.clippingState||null;c.value=v,v=h(m,d,M,f);for(let D=0;D!==M;++D)v[D]=e[D];p.clippingState=v,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=S}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,d,f,m){const _=u!==null?u.length:0;let g=null;if(_!==0){if(g=c.value,m!==!0||g===null){const p=f+_*4,S=d.matrixWorldInverse;a.getNormalMatrix(S),(g===null||g.length<p)&&(g=new Float32Array(p));for(let M=0,v=f;M!==_;++M,v+=4)r.copy(u[M]).applyMatrix4(S,a),r.normal.toArray(g,v),g[v+3]=r.constant}c.value=g,c.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,g}}function Qp(i){let t=new WeakMap;function e(r,a){return a===ga?r.mapping=us:a===_a&&(r.mapping=ds),r}function n(r){if(r&&r.isTexture){const a=r.mapping;if(a===ga||a===_a)if(t.has(r)){const c=t.get(r).texture;return e(c,r.mapping)}else{const c=r.image;if(c&&c.height>0){const l=new hf(c.height);return l.fromEquirectangularTexture(i,r),t.set(r,l),r.addEventListener("dispose",s),e(l.texture,r.mapping)}else return null}}return r}function s(r){const a=r.target;a.removeEventListener("dispose",s);const c=t.get(a);c!==void 0&&(t.delete(a),c.dispose())}function o(){t=new WeakMap}return{get:n,dispose:o}}class Yh extends Wh{constructor(t=-1,e=1,n=1,s=-1,o=.1,r=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=o,this.far=r,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,o,r){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=o,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let o=n-t,r=n+t,a=s+e,c=s-e;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;o+=l*this.view.offsetX,r=o+l*this.view.width,a-=h*this.view.offsetY,c=a-h*this.view.height}this.projectionMatrix.makeOrthographic(o,r,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const is=4,gl=[.125,.215,.35,.446,.526,.582],bi=20,Nr=new Yh,_l=new St;let Fr=null,Or=0,zr=0,Br=!1;const Ei=(1+Math.sqrt(5))/2,ts=1/Ei,vl=[new I(-Ei,ts,0),new I(Ei,ts,0),new I(-ts,0,Ei),new I(ts,0,Ei),new I(0,Ei,-ts),new I(0,Ei,ts),new I(-1,1,-1),new I(1,1,-1),new I(-1,1,1),new I(1,1,1)];class qa{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100){Fr=this._renderer.getRenderTarget(),Or=this._renderer.getActiveCubeFace(),zr=this._renderer.getActiveMipmapLevel(),Br=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const o=this._allocateTargets();return o.depthBuffer=!0,this._sceneToCubeUV(t,n,s,o),e>0&&this._blur(o,0,0,e),this._applyPMREM(o),this._cleanup(o),o}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ml(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=yl(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Fr,Or,zr),this._renderer.xr.enabled=Br,t.scissorTest=!1,wo(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===us||t.mapping===ds?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Fr=this._renderer.getRenderTarget(),Or=this._renderer.getActiveCubeFace(),zr=this._renderer.getActiveMipmapLevel(),Br=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Un,minFilter:Un,generateMipmaps:!1,type:$s,format:wn,colorSpace:_s,depthBuffer:!1},s=xl(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=xl(t,e,n);const{_lodMax:o}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=tm(o)),this._blurMaterial=em(o,t,e)}return s}_compileMaterial(t){const e=new w(this._lodPlanes[0],t);this._renderer.compile(e,Nr)}_sceneToCubeUV(t,e,n,s){const a=new Ze(90,1,e,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(_l),h.toneMapping=di,h.autoClear=!1;const f=new ue({name:"PMREM.Background",side:He,depthWrite:!1,depthTest:!1}),m=new w(new Vt,f);let _=!1;const g=t.background;g?g.isColor&&(f.color.copy(g),t.background=null,_=!0):(f.color.copy(_l),_=!0);for(let p=0;p<6;p++){const S=p%3;S===0?(a.up.set(0,c[p],0),a.lookAt(l[p],0,0)):S===1?(a.up.set(0,0,c[p]),a.lookAt(0,l[p],0)):(a.up.set(0,c[p],0),a.lookAt(0,0,l[p]));const M=this._cubeSize;wo(s,S*M,p>2?M:0,M,M),h.setRenderTarget(s),_&&h.render(m,a),h.render(t,a)}m.geometry.dispose(),m.material.dispose(),h.toneMapping=d,h.autoClear=u,t.background=g}_textureToCubeUV(t,e){const n=this._renderer,s=t.mapping===us||t.mapping===ds;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ml()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=yl());const o=s?this._cubemapMaterial:this._equirectMaterial,r=new w(this._lodPlanes[0],o),a=o.uniforms;a.envMap.value=t;const c=this._cubeSize;wo(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(r,Nr)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const s=this._lodPlanes.length;for(let o=1;o<s;o++){const r=Math.sqrt(this._sigmas[o]*this._sigmas[o]-this._sigmas[o-1]*this._sigmas[o-1]),a=vl[(s-o-1)%vl.length];this._blur(t,o-1,o,r,a)}e.autoClear=n}_blur(t,e,n,s,o){const r=this._pingPongRenderTarget;this._halfBlur(t,r,e,n,s,"latitudinal",o),this._halfBlur(r,t,n,n,s,"longitudinal",o)}_halfBlur(t,e,n,s,o,r,a){const c=this._renderer,l=this._blurMaterial;r!=="latitudinal"&&r!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new w(this._lodPlanes[s],l),d=l.uniforms,f=this._sizeLods[n]-1,m=isFinite(o)?Math.PI/(2*f):2*Math.PI/(2*bi-1),_=o/m,g=isFinite(o)?1+Math.floor(h*_):bi;g>bi&&console.warn(`sigmaRadians, ${o}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${bi}`);const p=[];let S=0;for(let C=0;C<bi;++C){const P=C/_,E=Math.exp(-P*P/2);p.push(E),C===0?S+=E:C<g&&(S+=2*E)}for(let C=0;C<p.length;C++)p[C]=p[C]/S;d.envMap.value=t.texture,d.samples.value=g,d.weights.value=p,d.latitudinal.value=r==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:M}=this;d.dTheta.value=m,d.mipInt.value=M-n;const v=this._sizeLods[s],D=3*v*(s>M-is?s-M+is:0),T=4*(this._cubeSize-v);wo(e,D,T,3*v,2*v),c.setRenderTarget(e),c.render(u,Nr)}}function tm(i){const t=[],e=[],n=[];let s=i;const o=i-is+1+gl.length;for(let r=0;r<o;r++){const a=Math.pow(2,s);e.push(a);let c=1/a;r>i-is?c=gl[r-i+is-1]:r===0&&(c=0),n.push(c);const l=1/(a-2),h=-l,u=1+l,d=[h,h,u,h,u,u,h,h,u,u,h,u],f=6,m=6,_=3,g=2,p=1,S=new Float32Array(_*m*f),M=new Float32Array(g*m*f),v=new Float32Array(p*m*f);for(let T=0;T<f;T++){const C=T%3*2/3-1,P=T>2?0:-1,E=[C,P,0,C+2/3,P,0,C+2/3,P+1,0,C,P,0,C+2/3,P+1,0,C,P+1,0];S.set(E,_*m*T),M.set(d,g*m*T);const x=[T,T,T,T,T,T];v.set(x,p*m*T)}const D=new De;D.setAttribute("position",new hn(S,_)),D.setAttribute("uv",new hn(M,g)),D.setAttribute("faceIndex",new hn(v,p)),t.push(D),s>is&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function xl(i,t,e){const n=new Ni(i,t,e);return n.texture.mapping=nr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function wo(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function em(i,t,e){const n=new Float32Array(bi),s=new I(0,1,0);return new pi({name:"SphericalGaussianBlur",defines:{n:bi,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Mc(),fragmentShader:`

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
		`,blending:ui,depthTest:!1,depthWrite:!1})}function yl(){return new pi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Mc(),fragmentShader:`

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
		`,blending:ui,depthTest:!1,depthWrite:!1})}function Ml(){return new pi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Mc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ui,depthTest:!1,depthWrite:!1})}function Mc(){return`

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
	`}function nm(i){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){const c=a.mapping,l=c===ga||c===_a,h=c===us||c===ds;if(l||h){let u=t.get(a);const d=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return e===null&&(e=new qa(i)),u=l?e.fromEquirectangular(a,u):e.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),u.texture;if(u!==void 0)return u.texture;{const f=a.image;return l&&f&&f.height>0||h&&f&&s(f)?(e===null&&(e=new qa(i)),u=l?e.fromEquirectangular(a):e.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),a.addEventListener("dispose",o),u.texture):null}}}return a}function s(a){let c=0;const l=6;for(let h=0;h<l;h++)a[h]!==void 0&&c++;return c===l}function o(a){const c=a.target;c.removeEventListener("dispose",o);const l=t.get(c);l!==void 0&&(t.delete(c),l.dispose())}function r(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:r}}function im(i){const t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const s=e(n);return s===null&&Fs("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function sm(i,t,e,n){const s={},o=new WeakMap;function r(u){const d=u.target;d.index!==null&&t.remove(d.index);for(const m in d.attributes)t.remove(d.attributes[m]);for(const m in d.morphAttributes){const _=d.morphAttributes[m];for(let g=0,p=_.length;g<p;g++)t.remove(_[g])}d.removeEventListener("dispose",r),delete s[d.id];const f=o.get(d);f&&(t.remove(f),o.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function a(u,d){return s[d.id]===!0||(d.addEventListener("dispose",r),s[d.id]=!0,e.memory.geometries++),d}function c(u){const d=u.attributes;for(const m in d)t.update(d[m],i.ARRAY_BUFFER);const f=u.morphAttributes;for(const m in f){const _=f[m];for(let g=0,p=_.length;g<p;g++)t.update(_[g],i.ARRAY_BUFFER)}}function l(u){const d=[],f=u.index,m=u.attributes.position;let _=0;if(f!==null){const S=f.array;_=f.version;for(let M=0,v=S.length;M<v;M+=3){const D=S[M+0],T=S[M+1],C=S[M+2];d.push(D,T,T,C,C,D)}}else if(m!==void 0){const S=m.array;_=m.version;for(let M=0,v=S.length/3-1;M<v;M+=3){const D=M+0,T=M+1,C=M+2;d.push(D,T,T,C,C,D)}}else return;const g=new(Oh(d)?Gh:Hh)(d,1);g.version=_;const p=o.get(u);p&&t.remove(p),o.set(u,g)}function h(u){const d=o.get(u);if(d){const f=u.index;f!==null&&d.version<f.version&&l(u)}else l(u);return o.get(u)}return{get:a,update:c,getWireframeAttribute:h}}function om(i,t,e){let n;function s(d){n=d}let o,r;function a(d){o=d.type,r=d.bytesPerElement}function c(d,f){i.drawElements(n,f,o,d*r),e.update(f,n,1)}function l(d,f,m){m!==0&&(i.drawElementsInstanced(n,f,o,d*r,m),e.update(f,n,m))}function h(d,f,m){if(m===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,o,d,0,m);let g=0;for(let p=0;p<m;p++)g+=f[p];e.update(g,n,1)}function u(d,f,m,_){if(m===0)return;const g=t.get("WEBGL_multi_draw");if(g===null)for(let p=0;p<d.length;p++)l(d[p]/r,f[p],_[p]);else{g.multiDrawElementsInstancedWEBGL(n,f,0,o,d,0,_,0,m);let p=0;for(let S=0;S<m;S++)p+=f[S]*_[S];e.update(p,n,1)}}this.setMode=s,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function rm(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(o,r,a){switch(e.calls++,r){case i.TRIANGLES:e.triangles+=a*(o/3);break;case i.LINES:e.lines+=a*(o/2);break;case i.LINE_STRIP:e.lines+=a*(o-1);break;case i.LINE_LOOP:e.lines+=a*o;break;case i.POINTS:e.points+=a*o;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",r);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function am(i,t,e){const n=new WeakMap,s=new ge;function o(r,a,c){const l=r.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0;let d=n.get(a);if(d===void 0||d.count!==u){let x=function(){P.dispose(),n.delete(a),a.removeEventListener("dispose",x)};var f=x;d!==void 0&&d.texture.dispose();const m=a.morphAttributes.position!==void 0,_=a.morphAttributes.normal!==void 0,g=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],S=a.morphAttributes.normal||[],M=a.morphAttributes.color||[];let v=0;m===!0&&(v=1),_===!0&&(v=2),g===!0&&(v=3);let D=a.attributes.position.count*v,T=1;D>t.maxTextureSize&&(T=Math.ceil(D/t.maxTextureSize),D=t.maxTextureSize);const C=new Float32Array(D*T*4*u),P=new Bh(C,D,T,u);P.type=Nn,P.needsUpdate=!0;const E=v*4;for(let R=0;R<u;R++){const F=p[R],U=S[R],G=M[R],J=D*T*4*R;for(let X=0;X<F.count;X++){const rt=X*E;m===!0&&(s.fromBufferAttribute(F,X),C[J+rt+0]=s.x,C[J+rt+1]=s.y,C[J+rt+2]=s.z,C[J+rt+3]=0),_===!0&&(s.fromBufferAttribute(U,X),C[J+rt+4]=s.x,C[J+rt+5]=s.y,C[J+rt+6]=s.z,C[J+rt+7]=0),g===!0&&(s.fromBufferAttribute(G,X),C[J+rt+8]=s.x,C[J+rt+9]=s.y,C[J+rt+10]=s.z,C[J+rt+11]=G.itemSize===4?s.w:1)}}d={count:u,texture:P,size:new gt(D,T)},n.set(a,d),a.addEventListener("dispose",x)}if(r.isInstancedMesh===!0&&r.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",r.morphTexture,e);else{let m=0;for(let g=0;g<l.length;g++)m+=l[g];const _=a.morphTargetsRelative?1:1-m;c.getUniforms().setValue(i,"morphTargetBaseInfluence",_),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",d.texture,e),c.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:o}}function cm(i,t,e,n){let s=new WeakMap;function o(c){const l=n.render.frame,h=c.geometry,u=t.get(c,h);if(s.get(u)!==l&&(t.update(u),s.set(u,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),s.get(c)!==l&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),s.set(c,l))),c.isSkinnedMesh){const d=c.skeleton;s.get(d)!==l&&(d.update(),s.set(d,l))}return u}function r(){s=new WeakMap}function a(c){const l=c.target;l.removeEventListener("dispose",a),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:o,dispose:r}}class $h extends Ke{constructor(t,e,n,s,o,r,a,c,l,h=as){if(h!==as&&h!==ms)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===as&&(n=Ui),n===void 0&&h===ms&&(n=ps),super(null,s,o,r,a,c,h,n,l),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:ln,this.minFilter=c!==void 0?c:ln,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const Zh=new Ke,wl=new $h(1,1),Kh=new Bh,Jh=new Yd,jh=new Xh,Sl=[],El=[],Tl=new Float32Array(16),bl=new Float32Array(9),Al=new Float32Array(4);function Ms(i,t,e){const n=i[0];if(n<=0||n>0)return i;const s=t*e;let o=Sl[s];if(o===void 0&&(o=new Float32Array(s),Sl[s]=o),t!==0){n.toArray(o,0);for(let r=1,a=0;r!==t;++r)a+=e,i[r].toArray(o,a)}return o}function Oe(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function ze(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function sr(i,t){let e=El[t];e===void 0&&(e=new Int32Array(t),El[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function lm(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function hm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Oe(e,t))return;i.uniform2fv(this.addr,t),ze(e,t)}}function um(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Oe(e,t))return;i.uniform3fv(this.addr,t),ze(e,t)}}function dm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Oe(e,t))return;i.uniform4fv(this.addr,t),ze(e,t)}}function fm(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Oe(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),ze(e,t)}else{if(Oe(e,n))return;Al.set(n),i.uniformMatrix2fv(this.addr,!1,Al),ze(e,n)}}function pm(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Oe(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),ze(e,t)}else{if(Oe(e,n))return;bl.set(n),i.uniformMatrix3fv(this.addr,!1,bl),ze(e,n)}}function mm(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Oe(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),ze(e,t)}else{if(Oe(e,n))return;Tl.set(n),i.uniformMatrix4fv(this.addr,!1,Tl),ze(e,n)}}function gm(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function _m(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Oe(e,t))return;i.uniform2iv(this.addr,t),ze(e,t)}}function vm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Oe(e,t))return;i.uniform3iv(this.addr,t),ze(e,t)}}function xm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Oe(e,t))return;i.uniform4iv(this.addr,t),ze(e,t)}}function ym(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function Mm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Oe(e,t))return;i.uniform2uiv(this.addr,t),ze(e,t)}}function wm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Oe(e,t))return;i.uniform3uiv(this.addr,t),ze(e,t)}}function Sm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Oe(e,t))return;i.uniform4uiv(this.addr,t),ze(e,t)}}function Em(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let o;this.type===i.SAMPLER_2D_SHADOW?(wl.compareFunction=Fh,o=wl):o=Zh,e.setTexture2D(t||o,s)}function Tm(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||Jh,s)}function bm(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||jh,s)}function Am(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||Kh,s)}function Rm(i){switch(i){case 5126:return lm;case 35664:return hm;case 35665:return um;case 35666:return dm;case 35674:return fm;case 35675:return pm;case 35676:return mm;case 5124:case 35670:return gm;case 35667:case 35671:return _m;case 35668:case 35672:return vm;case 35669:case 35673:return xm;case 5125:return ym;case 36294:return Mm;case 36295:return wm;case 36296:return Sm;case 35678:case 36198:case 36298:case 36306:case 35682:return Em;case 35679:case 36299:case 36307:return Tm;case 35680:case 36300:case 36308:case 36293:return bm;case 36289:case 36303:case 36311:case 36292:return Am}}function Cm(i,t){i.uniform1fv(this.addr,t)}function Lm(i,t){const e=Ms(t,this.size,2);i.uniform2fv(this.addr,e)}function Pm(i,t){const e=Ms(t,this.size,3);i.uniform3fv(this.addr,e)}function Im(i,t){const e=Ms(t,this.size,4);i.uniform4fv(this.addr,e)}function Dm(i,t){const e=Ms(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function Um(i,t){const e=Ms(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function Nm(i,t){const e=Ms(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function Fm(i,t){i.uniform1iv(this.addr,t)}function Om(i,t){i.uniform2iv(this.addr,t)}function zm(i,t){i.uniform3iv(this.addr,t)}function Bm(i,t){i.uniform4iv(this.addr,t)}function km(i,t){i.uniform1uiv(this.addr,t)}function Hm(i,t){i.uniform2uiv(this.addr,t)}function Gm(i,t){i.uniform3uiv(this.addr,t)}function Vm(i,t){i.uniform4uiv(this.addr,t)}function Wm(i,t,e){const n=this.cache,s=t.length,o=sr(e,s);Oe(n,o)||(i.uniform1iv(this.addr,o),ze(n,o));for(let r=0;r!==s;++r)e.setTexture2D(t[r]||Zh,o[r])}function Xm(i,t,e){const n=this.cache,s=t.length,o=sr(e,s);Oe(n,o)||(i.uniform1iv(this.addr,o),ze(n,o));for(let r=0;r!==s;++r)e.setTexture3D(t[r]||Jh,o[r])}function qm(i,t,e){const n=this.cache,s=t.length,o=sr(e,s);Oe(n,o)||(i.uniform1iv(this.addr,o),ze(n,o));for(let r=0;r!==s;++r)e.setTextureCube(t[r]||jh,o[r])}function Ym(i,t,e){const n=this.cache,s=t.length,o=sr(e,s);Oe(n,o)||(i.uniform1iv(this.addr,o),ze(n,o));for(let r=0;r!==s;++r)e.setTexture2DArray(t[r]||Kh,o[r])}function $m(i){switch(i){case 5126:return Cm;case 35664:return Lm;case 35665:return Pm;case 35666:return Im;case 35674:return Dm;case 35675:return Um;case 35676:return Nm;case 5124:case 35670:return Fm;case 35667:case 35671:return Om;case 35668:case 35672:return zm;case 35669:case 35673:return Bm;case 5125:return km;case 36294:return Hm;case 36295:return Gm;case 36296:return Vm;case 35678:case 36198:case 36298:case 36306:case 35682:return Wm;case 35679:case 36299:case 36307:return Xm;case 35680:case 36300:case 36308:case 36293:return qm;case 36289:case 36303:case 36311:case 36292:return Ym}}class Zm{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Rm(e.type)}}class Km{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=$m(e.type)}}class Jm{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const s=this.seq;for(let o=0,r=s.length;o!==r;++o){const a=s[o];a.setValue(t,e[a.id],n)}}}const kr=/(\w+)(\])?(\[|\.)?/g;function Rl(i,t){i.seq.push(t),i.map[t.id]=t}function jm(i,t,e){const n=i.name,s=n.length;for(kr.lastIndex=0;;){const o=kr.exec(n),r=kr.lastIndex;let a=o[1];const c=o[2]==="]",l=o[3];if(c&&(a=a|0),l===void 0||l==="["&&r+2===s){Rl(e,l===void 0?new Zm(a,i,t):new Km(a,i,t));break}else{let u=e.map[a];u===void 0&&(u=new Jm(a),Rl(e,u)),e=u}}}class Ho{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const o=t.getActiveUniform(e,s),r=t.getUniformLocation(e,o.name);jm(o,r,this)}}setValue(t,e,n,s){const o=this.map[e];o!==void 0&&o.setValue(t,n,s)}setOptional(t,e,n){const s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let o=0,r=e.length;o!==r;++o){const a=e[o],c=n[a.id];c.needsUpdate!==!1&&a.setValue(t,c.value,s)}}static seqWithValue(t,e){const n=[];for(let s=0,o=t.length;s!==o;++s){const r=t[s];r.id in e&&n.push(r)}return n}}function Cl(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const Qm=37297;let tg=0;function eg(i,t){const e=i.split(`
`),n=[],s=Math.max(t-6,0),o=Math.min(t+6,e.length);for(let r=s;r<o;r++){const a=r+1;n.push(`${a===t?">":" "} ${a}: ${e[r]}`)}return n.join(`
`)}const Ll=new Jt;function ng(i){oe._getMatrix(Ll,oe.workingColorSpace,i);const t=`mat3( ${Ll.elements.map(e=>e.toFixed(4))} )`;switch(oe.getTransfer(i)){case ir:return[t,"LinearTransferOETF"];case me:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function Pl(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";const o=/ERROR: 0:(\d+)/.exec(s);if(o){const r=parseInt(o[1]);return e.toUpperCase()+`

`+s+`

`+eg(i.getShaderSource(t),r)}else return s}function ig(i,t){const e=ng(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function sg(i,t){let e;switch(t){case yd:e="Linear";break;case Md:e="Reinhard";break;case wd:e="Cineon";break;case er:e="ACESFilmic";break;case Ed:e="AgX";break;case Td:e="Neutral";break;case Sd:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const So=new I;function og(){oe.getLuminanceCoefficients(So);const i=So.x.toFixed(4),t=So.y.toFixed(4),e=So.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function rg(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Os).join(`
`)}function ag(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function cg(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const o=i.getActiveAttrib(t,s),r=o.name;let a=1;o.type===i.FLOAT_MAT2&&(a=2),o.type===i.FLOAT_MAT3&&(a=3),o.type===i.FLOAT_MAT4&&(a=4),e[r]={type:o.type,location:i.getAttribLocation(t,r),locationSize:a}}return e}function Os(i){return i!==""}function Il(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Dl(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const lg=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ya(i){return i.replace(lg,ug)}const hg=new Map;function ug(i,t){let e=te[t];if(e===void 0){const n=hg.get(t);if(n!==void 0)e=te[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Ya(e)}const dg=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ul(i){return i.replace(dg,fg)}function fg(i,t,e,n){let s="";for(let o=parseInt(t);o<parseInt(e);o++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+o+" ]").replace(/UNROLLED_LOOP_INDEX/g,o);return s}function Nl(i){let t=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function pg(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Eh?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===Th?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Xn&&(t="SHADOWMAP_TYPE_VSM"),t}function mg(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case us:case ds:t="ENVMAP_TYPE_CUBE";break;case nr:t="ENVMAP_TYPE_CUBE_UV";break}return t}function gg(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case ds:t="ENVMAP_MODE_REFRACTION";break}return t}function _g(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case lc:t="ENVMAP_BLENDING_MULTIPLY";break;case vd:t="ENVMAP_BLENDING_MIX";break;case xd:t="ENVMAP_BLENDING_ADD";break}return t}function vg(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function xg(i,t,e,n){const s=i.getContext(),o=e.defines;let r=e.vertexShader,a=e.fragmentShader;const c=pg(e),l=mg(e),h=gg(e),u=_g(e),d=vg(e),f=rg(e),m=ag(o),_=s.createProgram();let g,p,S=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(g=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(Os).join(`
`),g.length>0&&(g+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(Os).join(`
`),p.length>0&&(p+=`
`)):(g=[Nl(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Os).join(`
`),p=[Nl(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==di?"#define TONE_MAPPING":"",e.toneMapping!==di?te.tonemapping_pars_fragment:"",e.toneMapping!==di?sg("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",te.colorspace_pars_fragment,ig("linearToOutputTexel",e.outputColorSpace),og(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Os).join(`
`)),r=Ya(r),r=Il(r,e),r=Dl(r,e),a=Ya(a),a=Il(a,e),a=Dl(a,e),r=Ul(r),a=Ul(a),e.isRawShaderMaterial!==!0&&(S=`#version 300 es
`,g=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,p=["#define varying in",e.glslVersion===Zc?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Zc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const M=S+g+r,v=S+p+a,D=Cl(s,s.VERTEX_SHADER,M),T=Cl(s,s.FRAGMENT_SHADER,v);s.attachShader(_,D),s.attachShader(_,T),e.index0AttributeName!==void 0?s.bindAttribLocation(_,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function C(R){if(i.debug.checkShaderErrors){const F=s.getProgramInfoLog(_).trim(),U=s.getShaderInfoLog(D).trim(),G=s.getShaderInfoLog(T).trim();let J=!0,X=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(J=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,_,D,T);else{const rt=Pl(s,D,"vertex"),$=Pl(s,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+R.name+`
Material Type: `+R.type+`

Program Info Log: `+F+`
`+rt+`
`+$)}else F!==""?console.warn("THREE.WebGLProgram: Program Info Log:",F):(U===""||G==="")&&(X=!1);X&&(R.diagnostics={runnable:J,programLog:F,vertexShader:{log:U,prefix:g},fragmentShader:{log:G,prefix:p}})}s.deleteShader(D),s.deleteShader(T),P=new Ho(s,_),E=cg(s,_)}let P;this.getUniforms=function(){return P===void 0&&C(this),P};let E;this.getAttributes=function(){return E===void 0&&C(this),E};let x=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return x===!1&&(x=s.getProgramParameter(_,Qm)),x},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=tg++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=D,this.fragmentShader=T,this}let yg=0;class Mg{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),o=this._getShaderStage(n),r=this._getShaderCacheForMaterial(t);return r.has(s)===!1&&(r.add(s),s.usedTimes++),r.has(o)===!1&&(r.add(o),o.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new wg(t),e.set(t,n)),n}}class wg{constructor(t){this.id=yg++,this.code=t,this.usedTimes=0}}function Sg(i,t,e,n,s,o,r){const a=new xc,c=new Mg,l=new Set,h=[],u=s.logarithmicDepthBuffer,d=s.vertexTextures;let f=s.precision;const m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(E){return l.add(E),E===0?"uv":`uv${E}`}function g(E,x,R,F,U){const G=F.fog,J=U.geometry,X=E.isMeshStandardMaterial?F.environment:null,rt=(E.isMeshStandardMaterial?e:t).get(E.envMap||X),$=rt&&rt.mapping===nr?rt.image.height:null,mt=m[E.type];E.precision!==null&&(f=s.getMaxPrecision(E.precision),f!==E.precision&&console.warn("THREE.WebGLProgram.getParameters:",E.precision,"not supported, using",f,"instead."));const yt=J.morphAttributes.position||J.morphAttributes.normal||J.morphAttributes.color,Et=yt!==void 0?yt.length:0;let Gt=0;J.morphAttributes.position!==void 0&&(Gt=1),J.morphAttributes.normal!==void 0&&(Gt=2),J.morphAttributes.color!==void 0&&(Gt=3);let Yt,Q,ut,bt;if(mt){const de=Pn[mt];Yt=de.vertexShader,Q=de.fragmentShader}else Yt=E.vertexShader,Q=E.fragmentShader,c.update(E),ut=c.getVertexShaderID(E),bt=c.getFragmentShaderID(E);const W=i.getRenderTarget(),st=i.state.buffers.depth.getReversed(),vt=U.isInstancedMesh===!0,wt=U.isBatchedMesh===!0,at=!!E.map,V=!!E.matcap,et=!!rt,L=!!E.aoMap,xt=!!E.lightMap,k=!!E.bumpMap,K=!!E.normalMap,Z=!!E.displacementMap,pt=!!E.emissiveMap,ht=!!E.metalnessMap,A=!!E.roughnessMap,y=E.anisotropy>0,H=E.clearcoat>0,j=E.dispersion>0,ct=E.iridescence>0,it=E.sheen>0,Ut=E.transmission>0,Mt=y&&!!E.anisotropyMap,Rt=H&&!!E.clearcoatMap,ee=H&&!!E.clearcoatNormalMap,ft=H&&!!E.clearcoatRoughnessMap,Ct=ct&&!!E.iridescenceMap,Wt=ct&&!!E.iridescenceThicknessMap,qt=it&&!!E.sheenColorMap,Dt=it&&!!E.sheenRoughnessMap,jt=!!E.specularMap,Qt=!!E.specularColorMap,_e=!!E.specularIntensityMap,N=Ut&&!!E.transmissionMap,At=Ut&&!!E.thicknessMap,nt=!!E.gradientMap,lt=!!E.alphaMap,It=E.alphaTest>0,Lt=!!E.alphaHash,Zt=!!E.extensions;let Re=di;E.toneMapped&&(W===null||W.isXRRenderTarget===!0)&&(Re=i.toneMapping);const Xe={shaderID:mt,shaderType:E.type,shaderName:E.name,vertexShader:Yt,fragmentShader:Q,defines:E.defines,customVertexShaderID:ut,customFragmentShaderID:bt,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:f,batching:wt,batchingColor:wt&&U._colorsTexture!==null,instancing:vt,instancingColor:vt&&U.instanceColor!==null,instancingMorph:vt&&U.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:W===null?i.outputColorSpace:W.isXRRenderTarget===!0?W.texture.colorSpace:_s,alphaToCoverage:!!E.alphaToCoverage,map:at,matcap:V,envMap:et,envMapMode:et&&rt.mapping,envMapCubeUVHeight:$,aoMap:L,lightMap:xt,bumpMap:k,normalMap:K,displacementMap:d&&Z,emissiveMap:pt,normalMapObjectSpace:K&&E.normalMapType===Cd,normalMapTangentSpace:K&&E.normalMapType===_c,metalnessMap:ht,roughnessMap:A,anisotropy:y,anisotropyMap:Mt,clearcoat:H,clearcoatMap:Rt,clearcoatNormalMap:ee,clearcoatRoughnessMap:ft,dispersion:j,iridescence:ct,iridescenceMap:Ct,iridescenceThicknessMap:Wt,sheen:it,sheenColorMap:qt,sheenRoughnessMap:Dt,specularMap:jt,specularColorMap:Qt,specularIntensityMap:_e,transmission:Ut,transmissionMap:N,thicknessMap:At,gradientMap:nt,opaque:E.transparent===!1&&E.blending===rs&&E.alphaToCoverage===!1,alphaMap:lt,alphaTest:It,alphaHash:Lt,combine:E.combine,mapUv:at&&_(E.map.channel),aoMapUv:L&&_(E.aoMap.channel),lightMapUv:xt&&_(E.lightMap.channel),bumpMapUv:k&&_(E.bumpMap.channel),normalMapUv:K&&_(E.normalMap.channel),displacementMapUv:Z&&_(E.displacementMap.channel),emissiveMapUv:pt&&_(E.emissiveMap.channel),metalnessMapUv:ht&&_(E.metalnessMap.channel),roughnessMapUv:A&&_(E.roughnessMap.channel),anisotropyMapUv:Mt&&_(E.anisotropyMap.channel),clearcoatMapUv:Rt&&_(E.clearcoatMap.channel),clearcoatNormalMapUv:ee&&_(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ft&&_(E.clearcoatRoughnessMap.channel),iridescenceMapUv:Ct&&_(E.iridescenceMap.channel),iridescenceThicknessMapUv:Wt&&_(E.iridescenceThicknessMap.channel),sheenColorMapUv:qt&&_(E.sheenColorMap.channel),sheenRoughnessMapUv:Dt&&_(E.sheenRoughnessMap.channel),specularMapUv:jt&&_(E.specularMap.channel),specularColorMapUv:Qt&&_(E.specularColorMap.channel),specularIntensityMapUv:_e&&_(E.specularIntensityMap.channel),transmissionMapUv:N&&_(E.transmissionMap.channel),thicknessMapUv:At&&_(E.thicknessMap.channel),alphaMapUv:lt&&_(E.alphaMap.channel),vertexTangents:!!J.attributes.tangent&&(K||y),vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!J.attributes.color&&J.attributes.color.itemSize===4,pointsUvs:U.isPoints===!0&&!!J.attributes.uv&&(at||lt),fog:!!G,useFog:E.fog===!0,fogExp2:!!G&&G.isFogExp2,flatShading:E.flatShading===!0,sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:st,skinning:U.isSkinnedMesh===!0,morphTargets:J.morphAttributes.position!==void 0,morphNormals:J.morphAttributes.normal!==void 0,morphColors:J.morphAttributes.color!==void 0,morphTargetsCount:Et,morphTextureStride:Gt,numDirLights:x.directional.length,numPointLights:x.point.length,numSpotLights:x.spot.length,numSpotLightMaps:x.spotLightMap.length,numRectAreaLights:x.rectArea.length,numHemiLights:x.hemi.length,numDirLightShadows:x.directionalShadowMap.length,numPointLightShadows:x.pointShadowMap.length,numSpotLightShadows:x.spotShadowMap.length,numSpotLightShadowsWithMaps:x.numSpotLightShadowsWithMaps,numLightProbes:x.numLightProbes,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:E.dithering,shadowMapEnabled:i.shadowMap.enabled&&R.length>0,shadowMapType:i.shadowMap.type,toneMapping:Re,decodeVideoTexture:at&&E.map.isVideoTexture===!0&&oe.getTransfer(E.map.colorSpace)===me,decodeVideoTextureEmissive:pt&&E.emissiveMap.isVideoTexture===!0&&oe.getTransfer(E.emissiveMap.colorSpace)===me,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===Ee,flipSided:E.side===He,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionClipCullDistance:Zt&&E.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Zt&&E.extensions.multiDraw===!0||wt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()};return Xe.vertexUv1s=l.has(1),Xe.vertexUv2s=l.has(2),Xe.vertexUv3s=l.has(3),l.clear(),Xe}function p(E){const x=[];if(E.shaderID?x.push(E.shaderID):(x.push(E.customVertexShaderID),x.push(E.customFragmentShaderID)),E.defines!==void 0)for(const R in E.defines)x.push(R),x.push(E.defines[R]);return E.isRawShaderMaterial===!1&&(S(x,E),M(x,E),x.push(i.outputColorSpace)),x.push(E.customProgramCacheKey),x.join()}function S(E,x){E.push(x.precision),E.push(x.outputColorSpace),E.push(x.envMapMode),E.push(x.envMapCubeUVHeight),E.push(x.mapUv),E.push(x.alphaMapUv),E.push(x.lightMapUv),E.push(x.aoMapUv),E.push(x.bumpMapUv),E.push(x.normalMapUv),E.push(x.displacementMapUv),E.push(x.emissiveMapUv),E.push(x.metalnessMapUv),E.push(x.roughnessMapUv),E.push(x.anisotropyMapUv),E.push(x.clearcoatMapUv),E.push(x.clearcoatNormalMapUv),E.push(x.clearcoatRoughnessMapUv),E.push(x.iridescenceMapUv),E.push(x.iridescenceThicknessMapUv),E.push(x.sheenColorMapUv),E.push(x.sheenRoughnessMapUv),E.push(x.specularMapUv),E.push(x.specularColorMapUv),E.push(x.specularIntensityMapUv),E.push(x.transmissionMapUv),E.push(x.thicknessMapUv),E.push(x.combine),E.push(x.fogExp2),E.push(x.sizeAttenuation),E.push(x.morphTargetsCount),E.push(x.morphAttributeCount),E.push(x.numDirLights),E.push(x.numPointLights),E.push(x.numSpotLights),E.push(x.numSpotLightMaps),E.push(x.numHemiLights),E.push(x.numRectAreaLights),E.push(x.numDirLightShadows),E.push(x.numPointLightShadows),E.push(x.numSpotLightShadows),E.push(x.numSpotLightShadowsWithMaps),E.push(x.numLightProbes),E.push(x.shadowMapType),E.push(x.toneMapping),E.push(x.numClippingPlanes),E.push(x.numClipIntersection),E.push(x.depthPacking)}function M(E,x){a.disableAll(),x.supportsVertexTextures&&a.enable(0),x.instancing&&a.enable(1),x.instancingColor&&a.enable(2),x.instancingMorph&&a.enable(3),x.matcap&&a.enable(4),x.envMap&&a.enable(5),x.normalMapObjectSpace&&a.enable(6),x.normalMapTangentSpace&&a.enable(7),x.clearcoat&&a.enable(8),x.iridescence&&a.enable(9),x.alphaTest&&a.enable(10),x.vertexColors&&a.enable(11),x.vertexAlphas&&a.enable(12),x.vertexUv1s&&a.enable(13),x.vertexUv2s&&a.enable(14),x.vertexUv3s&&a.enable(15),x.vertexTangents&&a.enable(16),x.anisotropy&&a.enable(17),x.alphaHash&&a.enable(18),x.batching&&a.enable(19),x.dispersion&&a.enable(20),x.batchingColor&&a.enable(21),E.push(a.mask),a.disableAll(),x.fog&&a.enable(0),x.useFog&&a.enable(1),x.flatShading&&a.enable(2),x.logarithmicDepthBuffer&&a.enable(3),x.reverseDepthBuffer&&a.enable(4),x.skinning&&a.enable(5),x.morphTargets&&a.enable(6),x.morphNormals&&a.enable(7),x.morphColors&&a.enable(8),x.premultipliedAlpha&&a.enable(9),x.shadowMapEnabled&&a.enable(10),x.doubleSided&&a.enable(11),x.flipSided&&a.enable(12),x.useDepthPacking&&a.enable(13),x.dithering&&a.enable(14),x.transmission&&a.enable(15),x.sheen&&a.enable(16),x.opaque&&a.enable(17),x.pointsUvs&&a.enable(18),x.decodeVideoTexture&&a.enable(19),x.decodeVideoTextureEmissive&&a.enable(20),x.alphaToCoverage&&a.enable(21),E.push(a.mask)}function v(E){const x=m[E.type];let R;if(x){const F=Pn[x];R=rf.clone(F.uniforms)}else R=E.uniforms;return R}function D(E,x){let R;for(let F=0,U=h.length;F<U;F++){const G=h[F];if(G.cacheKey===x){R=G,++R.usedTimes;break}}return R===void 0&&(R=new xg(i,x,E,o),h.push(R)),R}function T(E){if(--E.usedTimes===0){const x=h.indexOf(E);h[x]=h[h.length-1],h.pop(),E.destroy()}}function C(E){c.remove(E)}function P(){c.dispose()}return{getParameters:g,getProgramCacheKey:p,getUniforms:v,acquireProgram:D,releaseProgram:T,releaseShaderCache:C,programs:h,dispose:P}}function Eg(){let i=new WeakMap;function t(r){return i.has(r)}function e(r){let a=i.get(r);return a===void 0&&(a={},i.set(r,a)),a}function n(r){i.delete(r)}function s(r,a,c){i.get(r)[a]=c}function o(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:o}}function Tg(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function Fl(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Ol(){const i=[];let t=0;const e=[],n=[],s=[];function o(){t=0,e.length=0,n.length=0,s.length=0}function r(u,d,f,m,_,g){let p=i[t];return p===void 0?(p={id:u.id,object:u,geometry:d,material:f,groupOrder:m,renderOrder:u.renderOrder,z:_,group:g},i[t]=p):(p.id=u.id,p.object=u,p.geometry=d,p.material=f,p.groupOrder=m,p.renderOrder=u.renderOrder,p.z=_,p.group=g),t++,p}function a(u,d,f,m,_,g){const p=r(u,d,f,m,_,g);f.transmission>0?n.push(p):f.transparent===!0?s.push(p):e.push(p)}function c(u,d,f,m,_,g){const p=r(u,d,f,m,_,g);f.transmission>0?n.unshift(p):f.transparent===!0?s.unshift(p):e.unshift(p)}function l(u,d){e.length>1&&e.sort(u||Tg),n.length>1&&n.sort(d||Fl),s.length>1&&s.sort(d||Fl)}function h(){for(let u=t,d=i.length;u<d;u++){const f=i[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:e,transmissive:n,transparent:s,init:o,push:a,unshift:c,finish:h,sort:l}}function bg(){let i=new WeakMap;function t(n,s){const o=i.get(n);let r;return o===void 0?(r=new Ol,i.set(n,[r])):s>=o.length?(r=new Ol,o.push(r)):r=o[s],r}function e(){i=new WeakMap}return{get:t,dispose:e}}function Ag(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new I,color:new St};break;case"SpotLight":e={position:new I,direction:new I,color:new St,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new I,color:new St,distance:0,decay:0};break;case"HemisphereLight":e={direction:new I,skyColor:new St,groundColor:new St};break;case"RectAreaLight":e={color:new St,position:new I,halfWidth:new I,halfHeight:new I};break}return i[t.id]=e,e}}}function Rg(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new gt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new gt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new gt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let Cg=0;function Lg(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function Pg(i){const t=new Ag,e=Rg(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new I);const s=new I,o=new pe,r=new pe;function a(l){let h=0,u=0,d=0;for(let E=0;E<9;E++)n.probe[E].set(0,0,0);let f=0,m=0,_=0,g=0,p=0,S=0,M=0,v=0,D=0,T=0,C=0;l.sort(Lg);for(let E=0,x=l.length;E<x;E++){const R=l[E],F=R.color,U=R.intensity,G=R.distance,J=R.shadow&&R.shadow.map?R.shadow.map.texture:null;if(R.isAmbientLight)h+=F.r*U,u+=F.g*U,d+=F.b*U;else if(R.isLightProbe){for(let X=0;X<9;X++)n.probe[X].addScaledVector(R.sh.coefficients[X],U);C++}else if(R.isDirectionalLight){const X=t.get(R);if(X.color.copy(R.color).multiplyScalar(R.intensity),R.castShadow){const rt=R.shadow,$=e.get(R);$.shadowIntensity=rt.intensity,$.shadowBias=rt.bias,$.shadowNormalBias=rt.normalBias,$.shadowRadius=rt.radius,$.shadowMapSize=rt.mapSize,n.directionalShadow[f]=$,n.directionalShadowMap[f]=J,n.directionalShadowMatrix[f]=R.shadow.matrix,S++}n.directional[f]=X,f++}else if(R.isSpotLight){const X=t.get(R);X.position.setFromMatrixPosition(R.matrixWorld),X.color.copy(F).multiplyScalar(U),X.distance=G,X.coneCos=Math.cos(R.angle),X.penumbraCos=Math.cos(R.angle*(1-R.penumbra)),X.decay=R.decay,n.spot[_]=X;const rt=R.shadow;if(R.map&&(n.spotLightMap[D]=R.map,D++,rt.updateMatrices(R),R.castShadow&&T++),n.spotLightMatrix[_]=rt.matrix,R.castShadow){const $=e.get(R);$.shadowIntensity=rt.intensity,$.shadowBias=rt.bias,$.shadowNormalBias=rt.normalBias,$.shadowRadius=rt.radius,$.shadowMapSize=rt.mapSize,n.spotShadow[_]=$,n.spotShadowMap[_]=J,v++}_++}else if(R.isRectAreaLight){const X=t.get(R);X.color.copy(F).multiplyScalar(U),X.halfWidth.set(R.width*.5,0,0),X.halfHeight.set(0,R.height*.5,0),n.rectArea[g]=X,g++}else if(R.isPointLight){const X=t.get(R);if(X.color.copy(R.color).multiplyScalar(R.intensity),X.distance=R.distance,X.decay=R.decay,R.castShadow){const rt=R.shadow,$=e.get(R);$.shadowIntensity=rt.intensity,$.shadowBias=rt.bias,$.shadowNormalBias=rt.normalBias,$.shadowRadius=rt.radius,$.shadowMapSize=rt.mapSize,$.shadowCameraNear=rt.camera.near,$.shadowCameraFar=rt.camera.far,n.pointShadow[m]=$,n.pointShadowMap[m]=J,n.pointShadowMatrix[m]=R.shadow.matrix,M++}n.point[m]=X,m++}else if(R.isHemisphereLight){const X=t.get(R);X.skyColor.copy(R.color).multiplyScalar(U),X.groundColor.copy(R.groundColor).multiplyScalar(U),n.hemi[p]=X,p++}}g>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Tt.LTC_FLOAT_1,n.rectAreaLTC2=Tt.LTC_FLOAT_2):(n.rectAreaLTC1=Tt.LTC_HALF_1,n.rectAreaLTC2=Tt.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;const P=n.hash;(P.directionalLength!==f||P.pointLength!==m||P.spotLength!==_||P.rectAreaLength!==g||P.hemiLength!==p||P.numDirectionalShadows!==S||P.numPointShadows!==M||P.numSpotShadows!==v||P.numSpotMaps!==D||P.numLightProbes!==C)&&(n.directional.length=f,n.spot.length=_,n.rectArea.length=g,n.point.length=m,n.hemi.length=p,n.directionalShadow.length=S,n.directionalShadowMap.length=S,n.pointShadow.length=M,n.pointShadowMap.length=M,n.spotShadow.length=v,n.spotShadowMap.length=v,n.directionalShadowMatrix.length=S,n.pointShadowMatrix.length=M,n.spotLightMatrix.length=v+D-T,n.spotLightMap.length=D,n.numSpotLightShadowsWithMaps=T,n.numLightProbes=C,P.directionalLength=f,P.pointLength=m,P.spotLength=_,P.rectAreaLength=g,P.hemiLength=p,P.numDirectionalShadows=S,P.numPointShadows=M,P.numSpotShadows=v,P.numSpotMaps=D,P.numLightProbes=C,n.version=Cg++)}function c(l,h){let u=0,d=0,f=0,m=0,_=0;const g=h.matrixWorldInverse;for(let p=0,S=l.length;p<S;p++){const M=l[p];if(M.isDirectionalLight){const v=n.directional[u];v.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(g),u++}else if(M.isSpotLight){const v=n.spot[f];v.position.setFromMatrixPosition(M.matrixWorld),v.position.applyMatrix4(g),v.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(g),f++}else if(M.isRectAreaLight){const v=n.rectArea[m];v.position.setFromMatrixPosition(M.matrixWorld),v.position.applyMatrix4(g),r.identity(),o.copy(M.matrixWorld),o.premultiply(g),r.extractRotation(o),v.halfWidth.set(M.width*.5,0,0),v.halfHeight.set(0,M.height*.5,0),v.halfWidth.applyMatrix4(r),v.halfHeight.applyMatrix4(r),m++}else if(M.isPointLight){const v=n.point[d];v.position.setFromMatrixPosition(M.matrixWorld),v.position.applyMatrix4(g),d++}else if(M.isHemisphereLight){const v=n.hemi[_];v.direction.setFromMatrixPosition(M.matrixWorld),v.direction.transformDirection(g),_++}}}return{setup:a,setupView:c,state:n}}function zl(i){const t=new Pg(i),e=[],n=[];function s(h){l.camera=h,e.length=0,n.length=0}function o(h){e.push(h)}function r(h){n.push(h)}function a(){t.setup(e)}function c(h){t.setupView(e,h)}const l={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:l,setupLights:a,setupLightsView:c,pushLight:o,pushShadow:r}}function Ig(i){let t=new WeakMap;function e(s,o=0){const r=t.get(s);let a;return r===void 0?(a=new zl(i),t.set(s,[a])):o>=r.length?(a=new zl(i),r.push(a)):a=r[o],a}function n(){t=new WeakMap}return{get:e,dispose:n}}class Dg extends Oi{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=Ad,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Ug extends Oi{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const Ng=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Fg=`uniform sampler2D shadow_pass;
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
}`;function Og(i,t,e){let n=new yc;const s=new gt,o=new gt,r=new ge,a=new Dg({depthPacking:Rd}),c=new Ug,l={},h=e.maxTextureSize,u={[fi]:He,[He]:fi,[Ee]:Ee},d=new pi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new gt},radius:{value:4}},vertexShader:Ng,fragmentShader:Fg}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const m=new De;m.setAttribute("position",new hn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new w(m,d),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Eh;let p=this.type;this.render=function(T,C,P){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||T.length===0)return;const E=i.getRenderTarget(),x=i.getActiveCubeFace(),R=i.getActiveMipmapLevel(),F=i.state;F.setBlending(ui),F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);const U=p!==Xn&&this.type===Xn,G=p===Xn&&this.type!==Xn;for(let J=0,X=T.length;J<X;J++){const rt=T[J],$=rt.shadow;if($===void 0){console.warn("THREE.WebGLShadowMap:",rt,"has no shadow.");continue}if($.autoUpdate===!1&&$.needsUpdate===!1)continue;s.copy($.mapSize);const mt=$.getFrameExtents();if(s.multiply(mt),o.copy($.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(o.x=Math.floor(h/mt.x),s.x=o.x*mt.x,$.mapSize.x=o.x),s.y>h&&(o.y=Math.floor(h/mt.y),s.y=o.y*mt.y,$.mapSize.y=o.y)),$.map===null||U===!0||G===!0){const Et=this.type!==Xn?{minFilter:ln,magFilter:ln}:{};$.map!==null&&$.map.dispose(),$.map=new Ni(s.x,s.y,Et),$.map.texture.name=rt.name+".shadowMap",$.camera.updateProjectionMatrix()}i.setRenderTarget($.map),i.clear();const yt=$.getViewportCount();for(let Et=0;Et<yt;Et++){const Gt=$.getViewport(Et);r.set(o.x*Gt.x,o.y*Gt.y,o.x*Gt.z,o.y*Gt.w),F.viewport(r),$.updateMatrices(rt,Et),n=$.getFrustum(),v(C,P,$.camera,rt,this.type)}$.isPointLightShadow!==!0&&this.type===Xn&&S($,P),$.needsUpdate=!1}p=this.type,g.needsUpdate=!1,i.setRenderTarget(E,x,R)};function S(T,C){const P=t.update(_);d.defines.VSM_SAMPLES!==T.blurSamples&&(d.defines.VSM_SAMPLES=T.blurSamples,f.defines.VSM_SAMPLES=T.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new Ni(s.x,s.y)),d.uniforms.shadow_pass.value=T.map.texture,d.uniforms.resolution.value=T.mapSize,d.uniforms.radius.value=T.radius,i.setRenderTarget(T.mapPass),i.clear(),i.renderBufferDirect(C,null,P,d,_,null),f.uniforms.shadow_pass.value=T.mapPass.texture,f.uniforms.resolution.value=T.mapSize,f.uniforms.radius.value=T.radius,i.setRenderTarget(T.map),i.clear(),i.renderBufferDirect(C,null,P,f,_,null)}function M(T,C,P,E){let x=null;const R=P.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(R!==void 0)x=R;else if(x=P.isPointLight===!0?c:a,i.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0){const F=x.uuid,U=C.uuid;let G=l[F];G===void 0&&(G={},l[F]=G);let J=G[U];J===void 0&&(J=x.clone(),G[U]=J,C.addEventListener("dispose",D)),x=J}if(x.visible=C.visible,x.wireframe=C.wireframe,E===Xn?x.side=C.shadowSide!==null?C.shadowSide:C.side:x.side=C.shadowSide!==null?C.shadowSide:u[C.side],x.alphaMap=C.alphaMap,x.alphaTest=C.alphaTest,x.map=C.map,x.clipShadows=C.clipShadows,x.clippingPlanes=C.clippingPlanes,x.clipIntersection=C.clipIntersection,x.displacementMap=C.displacementMap,x.displacementScale=C.displacementScale,x.displacementBias=C.displacementBias,x.wireframeLinewidth=C.wireframeLinewidth,x.linewidth=C.linewidth,P.isPointLight===!0&&x.isMeshDistanceMaterial===!0){const F=i.properties.get(x);F.light=P}return x}function v(T,C,P,E,x){if(T.visible===!1)return;if(T.layers.test(C.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&x===Xn)&&(!T.frustumCulled||n.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,T.matrixWorld);const U=t.update(T),G=T.material;if(Array.isArray(G)){const J=U.groups;for(let X=0,rt=J.length;X<rt;X++){const $=J[X],mt=G[$.materialIndex];if(mt&&mt.visible){const yt=M(T,mt,E,x);T.onBeforeShadow(i,T,C,P,U,yt,$),i.renderBufferDirect(P,null,U,yt,T,$),T.onAfterShadow(i,T,C,P,U,yt,$)}}}else if(G.visible){const J=M(T,G,E,x);T.onBeforeShadow(i,T,C,P,U,J,null),i.renderBufferDirect(P,null,U,J,T,null),T.onAfterShadow(i,T,C,P,U,J,null)}}const F=T.children;for(let U=0,G=F.length;U<G;U++)v(F[U],C,P,E,x)}function D(T){T.target.removeEventListener("dispose",D);for(const P in l){const E=l[P],x=T.target.uuid;x in E&&(E[x].dispose(),delete E[x])}}}const zg={[la]:ha,[ua]:pa,[da]:ma,[hs]:fa,[ha]:la,[pa]:ua,[ma]:da,[fa]:hs};function Bg(i,t){function e(){let N=!1;const At=new ge;let nt=null;const lt=new ge(0,0,0,0);return{setMask:function(It){nt!==It&&!N&&(i.colorMask(It,It,It,It),nt=It)},setLocked:function(It){N=It},setClear:function(It,Lt,Zt,Re,Xe){Xe===!0&&(It*=Re,Lt*=Re,Zt*=Re),At.set(It,Lt,Zt,Re),lt.equals(At)===!1&&(i.clearColor(It,Lt,Zt,Re),lt.copy(At))},reset:function(){N=!1,nt=null,lt.set(-1,0,0,0)}}}function n(){let N=!1,At=!1,nt=null,lt=null,It=null;return{setReversed:function(Lt){if(At!==Lt){const Zt=t.get("EXT_clip_control");At?Zt.clipControlEXT(Zt.LOWER_LEFT_EXT,Zt.ZERO_TO_ONE_EXT):Zt.clipControlEXT(Zt.LOWER_LEFT_EXT,Zt.NEGATIVE_ONE_TO_ONE_EXT);const Re=It;It=null,this.setClear(Re)}At=Lt},getReversed:function(){return At},setTest:function(Lt){Lt?W(i.DEPTH_TEST):st(i.DEPTH_TEST)},setMask:function(Lt){nt!==Lt&&!N&&(i.depthMask(Lt),nt=Lt)},setFunc:function(Lt){if(At&&(Lt=zg[Lt]),lt!==Lt){switch(Lt){case la:i.depthFunc(i.NEVER);break;case ha:i.depthFunc(i.ALWAYS);break;case ua:i.depthFunc(i.LESS);break;case hs:i.depthFunc(i.LEQUAL);break;case da:i.depthFunc(i.EQUAL);break;case fa:i.depthFunc(i.GEQUAL);break;case pa:i.depthFunc(i.GREATER);break;case ma:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}lt=Lt}},setLocked:function(Lt){N=Lt},setClear:function(Lt){It!==Lt&&(At&&(Lt=1-Lt),i.clearDepth(Lt),It=Lt)},reset:function(){N=!1,nt=null,lt=null,It=null,At=!1}}}function s(){let N=!1,At=null,nt=null,lt=null,It=null,Lt=null,Zt=null,Re=null,Xe=null;return{setTest:function(de){N||(de?W(i.STENCIL_TEST):st(i.STENCIL_TEST))},setMask:function(de){At!==de&&!N&&(i.stencilMask(de),At=de)},setFunc:function(de,pn,zn){(nt!==de||lt!==pn||It!==zn)&&(i.stencilFunc(de,pn,zn),nt=de,lt=pn,It=zn)},setOp:function(de,pn,zn){(Lt!==de||Zt!==pn||Re!==zn)&&(i.stencilOp(de,pn,zn),Lt=de,Zt=pn,Re=zn)},setLocked:function(de){N=de},setClear:function(de){Xe!==de&&(i.clearStencil(de),Xe=de)},reset:function(){N=!1,At=null,nt=null,lt=null,It=null,Lt=null,Zt=null,Re=null,Xe=null}}}const o=new e,r=new n,a=new s,c=new WeakMap,l=new WeakMap;let h={},u={},d=new WeakMap,f=[],m=null,_=!1,g=null,p=null,S=null,M=null,v=null,D=null,T=null,C=new St(0,0,0),P=0,E=!1,x=null,R=null,F=null,U=null,G=null;const J=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let X=!1,rt=0;const $=i.getParameter(i.VERSION);$.indexOf("WebGL")!==-1?(rt=parseFloat(/^WebGL (\d)/.exec($)[1]),X=rt>=1):$.indexOf("OpenGL ES")!==-1&&(rt=parseFloat(/^OpenGL ES (\d)/.exec($)[1]),X=rt>=2);let mt=null,yt={};const Et=i.getParameter(i.SCISSOR_BOX),Gt=i.getParameter(i.VIEWPORT),Yt=new ge().fromArray(Et),Q=new ge().fromArray(Gt);function ut(N,At,nt,lt){const It=new Uint8Array(4),Lt=i.createTexture();i.bindTexture(N,Lt),i.texParameteri(N,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(N,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Zt=0;Zt<nt;Zt++)N===i.TEXTURE_3D||N===i.TEXTURE_2D_ARRAY?i.texImage3D(At,0,i.RGBA,1,1,lt,0,i.RGBA,i.UNSIGNED_BYTE,It):i.texImage2D(At+Zt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,It);return Lt}const bt={};bt[i.TEXTURE_2D]=ut(i.TEXTURE_2D,i.TEXTURE_2D,1),bt[i.TEXTURE_CUBE_MAP]=ut(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),bt[i.TEXTURE_2D_ARRAY]=ut(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),bt[i.TEXTURE_3D]=ut(i.TEXTURE_3D,i.TEXTURE_3D,1,1),o.setClear(0,0,0,1),r.setClear(1),a.setClear(0),W(i.DEPTH_TEST),r.setFunc(hs),k(!1),K(Vc),W(i.CULL_FACE),L(ui);function W(N){h[N]!==!0&&(i.enable(N),h[N]=!0)}function st(N){h[N]!==!1&&(i.disable(N),h[N]=!1)}function vt(N,At){return u[N]!==At?(i.bindFramebuffer(N,At),u[N]=At,N===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=At),N===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=At),!0):!1}function wt(N,At){let nt=f,lt=!1;if(N){nt=d.get(At),nt===void 0&&(nt=[],d.set(At,nt));const It=N.textures;if(nt.length!==It.length||nt[0]!==i.COLOR_ATTACHMENT0){for(let Lt=0,Zt=It.length;Lt<Zt;Lt++)nt[Lt]=i.COLOR_ATTACHMENT0+Lt;nt.length=It.length,lt=!0}}else nt[0]!==i.BACK&&(nt[0]=i.BACK,lt=!0);lt&&i.drawBuffers(nt)}function at(N){return m!==N?(i.useProgram(N),m=N,!0):!1}const V={[Ti]:i.FUNC_ADD,[ed]:i.FUNC_SUBTRACT,[nd]:i.FUNC_REVERSE_SUBTRACT};V[id]=i.MIN,V[sd]=i.MAX;const et={[od]:i.ZERO,[rd]:i.ONE,[ad]:i.SRC_COLOR,[aa]:i.SRC_ALPHA,[fd]:i.SRC_ALPHA_SATURATE,[ud]:i.DST_COLOR,[ld]:i.DST_ALPHA,[cd]:i.ONE_MINUS_SRC_COLOR,[ca]:i.ONE_MINUS_SRC_ALPHA,[dd]:i.ONE_MINUS_DST_COLOR,[hd]:i.ONE_MINUS_DST_ALPHA,[pd]:i.CONSTANT_COLOR,[md]:i.ONE_MINUS_CONSTANT_COLOR,[gd]:i.CONSTANT_ALPHA,[_d]:i.ONE_MINUS_CONSTANT_ALPHA};function L(N,At,nt,lt,It,Lt,Zt,Re,Xe,de){if(N===ui){_===!0&&(st(i.BLEND),_=!1);return}if(_===!1&&(W(i.BLEND),_=!0),N!==td){if(N!==g||de!==E){if((p!==Ti||v!==Ti)&&(i.blendEquation(i.FUNC_ADD),p=Ti,v=Ti),de)switch(N){case rs:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Wc:i.blendFunc(i.ONE,i.ONE);break;case Xc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case qc:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}else switch(N){case rs:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Wc:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Xc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case qc:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}S=null,M=null,D=null,T=null,C.set(0,0,0),P=0,g=N,E=de}return}It=It||At,Lt=Lt||nt,Zt=Zt||lt,(At!==p||It!==v)&&(i.blendEquationSeparate(V[At],V[It]),p=At,v=It),(nt!==S||lt!==M||Lt!==D||Zt!==T)&&(i.blendFuncSeparate(et[nt],et[lt],et[Lt],et[Zt]),S=nt,M=lt,D=Lt,T=Zt),(Re.equals(C)===!1||Xe!==P)&&(i.blendColor(Re.r,Re.g,Re.b,Xe),C.copy(Re),P=Xe),g=N,E=!1}function xt(N,At){N.side===Ee?st(i.CULL_FACE):W(i.CULL_FACE);let nt=N.side===He;At&&(nt=!nt),k(nt),N.blending===rs&&N.transparent===!1?L(ui):L(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.blendColor,N.blendAlpha,N.premultipliedAlpha),r.setFunc(N.depthFunc),r.setTest(N.depthTest),r.setMask(N.depthWrite),o.setMask(N.colorWrite);const lt=N.stencilWrite;a.setTest(lt),lt&&(a.setMask(N.stencilWriteMask),a.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),a.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),pt(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?W(i.SAMPLE_ALPHA_TO_COVERAGE):st(i.SAMPLE_ALPHA_TO_COVERAGE)}function k(N){x!==N&&(N?i.frontFace(i.CW):i.frontFace(i.CCW),x=N)}function K(N){N!==ju?(W(i.CULL_FACE),N!==R&&(N===Vc?i.cullFace(i.BACK):N===Qu?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):st(i.CULL_FACE),R=N}function Z(N){N!==F&&(X&&i.lineWidth(N),F=N)}function pt(N,At,nt){N?(W(i.POLYGON_OFFSET_FILL),(U!==At||G!==nt)&&(i.polygonOffset(At,nt),U=At,G=nt)):st(i.POLYGON_OFFSET_FILL)}function ht(N){N?W(i.SCISSOR_TEST):st(i.SCISSOR_TEST)}function A(N){N===void 0&&(N=i.TEXTURE0+J-1),mt!==N&&(i.activeTexture(N),mt=N)}function y(N,At,nt){nt===void 0&&(mt===null?nt=i.TEXTURE0+J-1:nt=mt);let lt=yt[nt];lt===void 0&&(lt={type:void 0,texture:void 0},yt[nt]=lt),(lt.type!==N||lt.texture!==At)&&(mt!==nt&&(i.activeTexture(nt),mt=nt),i.bindTexture(N,At||bt[N]),lt.type=N,lt.texture=At)}function H(){const N=yt[mt];N!==void 0&&N.type!==void 0&&(i.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function j(){try{i.compressedTexImage2D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ct(){try{i.compressedTexImage3D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function it(){try{i.texSubImage2D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Ut(){try{i.texSubImage3D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Mt(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Rt(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ee(){try{i.texStorage2D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ft(){try{i.texStorage3D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Ct(){try{i.texImage2D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Wt(){try{i.texImage3D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function qt(N){Yt.equals(N)===!1&&(i.scissor(N.x,N.y,N.z,N.w),Yt.copy(N))}function Dt(N){Q.equals(N)===!1&&(i.viewport(N.x,N.y,N.z,N.w),Q.copy(N))}function jt(N,At){let nt=l.get(At);nt===void 0&&(nt=new WeakMap,l.set(At,nt));let lt=nt.get(N);lt===void 0&&(lt=i.getUniformBlockIndex(At,N.name),nt.set(N,lt))}function Qt(N,At){const lt=l.get(At).get(N);c.get(At)!==lt&&(i.uniformBlockBinding(At,lt,N.__bindingPointIndex),c.set(At,lt))}function _e(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),r.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},mt=null,yt={},u={},d=new WeakMap,f=[],m=null,_=!1,g=null,p=null,S=null,M=null,v=null,D=null,T=null,C=new St(0,0,0),P=0,E=!1,x=null,R=null,F=null,U=null,G=null,Yt.set(0,0,i.canvas.width,i.canvas.height),Q.set(0,0,i.canvas.width,i.canvas.height),o.reset(),r.reset(),a.reset()}return{buffers:{color:o,depth:r,stencil:a},enable:W,disable:st,bindFramebuffer:vt,drawBuffers:wt,useProgram:at,setBlending:L,setMaterial:xt,setFlipSided:k,setCullFace:K,setLineWidth:Z,setPolygonOffset:pt,setScissorTest:ht,activeTexture:A,bindTexture:y,unbindTexture:H,compressedTexImage2D:j,compressedTexImage3D:ct,texImage2D:Ct,texImage3D:Wt,updateUBOMapping:jt,uniformBlockBinding:Qt,texStorage2D:ee,texStorage3D:ft,texSubImage2D:it,texSubImage3D:Ut,compressedTexSubImage2D:Mt,compressedTexSubImage3D:Rt,scissor:qt,viewport:Dt,reset:_e}}function Bl(i,t,e,n){const s=kg(n);switch(e){case Lh:return i*t;case Ih:return i*t;case Dh:return i*t*2;case fc:return i*t/s.components*s.byteLength;case pc:return i*t/s.components*s.byteLength;case Uh:return i*t*2/s.components*s.byteLength;case mc:return i*t*2/s.components*s.byteLength;case Ph:return i*t*3/s.components*s.byteLength;case wn:return i*t*4/s.components*s.byteLength;case gc:return i*t*4/s.components*s.byteLength;case Fo:case Oo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case zo:case Bo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case ya:case wa:return Math.max(i,16)*Math.max(t,8)/4;case xa:case Ma:return Math.max(i,8)*Math.max(t,8)/2;case Sa:case Ea:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Ta:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case ba:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Aa:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case Ra:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case Ca:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case La:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case Pa:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case Ia:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case Da:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case Ua:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case Na:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case Fa:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case Oa:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case za:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case Ba:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case ko:case ka:case Ha:return Math.ceil(i/4)*Math.ceil(t/4)*16;case Nh:case Ga:return Math.ceil(i/4)*Math.ceil(t/4)*8;case Va:case Wa:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function kg(i){switch(i){case $n:case Ah:return{byteLength:1,components:1};case Gs:case Rh:case $s:return{byteLength:2,components:1};case uc:case dc:return{byteLength:2,components:4};case Ui:case hc:case Nn:return{byteLength:4,components:1};case Ch:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function Hg(i,t,e,n,s,o,r){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new gt,h=new WeakMap;let u;const d=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(A,y){return f?new OffscreenCanvas(A,y):Wo("canvas")}function _(A,y,H){let j=1;const ct=ht(A);if((ct.width>H||ct.height>H)&&(j=H/Math.max(ct.width,ct.height)),j<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){const it=Math.floor(j*ct.width),Ut=Math.floor(j*ct.height);u===void 0&&(u=m(it,Ut));const Mt=y?m(it,Ut):u;return Mt.width=it,Mt.height=Ut,Mt.getContext("2d").drawImage(A,0,0,it,Ut),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ct.width+"x"+ct.height+") to ("+it+"x"+Ut+")."),Mt}else return"data"in A&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ct.width+"x"+ct.height+")."),A;return A}function g(A){return A.generateMipmaps}function p(A){i.generateMipmap(A)}function S(A){return A.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:A.isWebGL3DRenderTarget?i.TEXTURE_3D:A.isWebGLArrayRenderTarget||A.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function M(A,y,H,j,ct=!1){if(A!==null){if(i[A]!==void 0)return i[A];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let it=y;if(y===i.RED&&(H===i.FLOAT&&(it=i.R32F),H===i.HALF_FLOAT&&(it=i.R16F),H===i.UNSIGNED_BYTE&&(it=i.R8)),y===i.RED_INTEGER&&(H===i.UNSIGNED_BYTE&&(it=i.R8UI),H===i.UNSIGNED_SHORT&&(it=i.R16UI),H===i.UNSIGNED_INT&&(it=i.R32UI),H===i.BYTE&&(it=i.R8I),H===i.SHORT&&(it=i.R16I),H===i.INT&&(it=i.R32I)),y===i.RG&&(H===i.FLOAT&&(it=i.RG32F),H===i.HALF_FLOAT&&(it=i.RG16F),H===i.UNSIGNED_BYTE&&(it=i.RG8)),y===i.RG_INTEGER&&(H===i.UNSIGNED_BYTE&&(it=i.RG8UI),H===i.UNSIGNED_SHORT&&(it=i.RG16UI),H===i.UNSIGNED_INT&&(it=i.RG32UI),H===i.BYTE&&(it=i.RG8I),H===i.SHORT&&(it=i.RG16I),H===i.INT&&(it=i.RG32I)),y===i.RGB_INTEGER&&(H===i.UNSIGNED_BYTE&&(it=i.RGB8UI),H===i.UNSIGNED_SHORT&&(it=i.RGB16UI),H===i.UNSIGNED_INT&&(it=i.RGB32UI),H===i.BYTE&&(it=i.RGB8I),H===i.SHORT&&(it=i.RGB16I),H===i.INT&&(it=i.RGB32I)),y===i.RGBA_INTEGER&&(H===i.UNSIGNED_BYTE&&(it=i.RGBA8UI),H===i.UNSIGNED_SHORT&&(it=i.RGBA16UI),H===i.UNSIGNED_INT&&(it=i.RGBA32UI),H===i.BYTE&&(it=i.RGBA8I),H===i.SHORT&&(it=i.RGBA16I),H===i.INT&&(it=i.RGBA32I)),y===i.RGB&&H===i.UNSIGNED_INT_5_9_9_9_REV&&(it=i.RGB9_E5),y===i.RGBA){const Ut=ct?ir:oe.getTransfer(j);H===i.FLOAT&&(it=i.RGBA32F),H===i.HALF_FLOAT&&(it=i.RGBA16F),H===i.UNSIGNED_BYTE&&(it=Ut===me?i.SRGB8_ALPHA8:i.RGBA8),H===i.UNSIGNED_SHORT_4_4_4_4&&(it=i.RGBA4),H===i.UNSIGNED_SHORT_5_5_5_1&&(it=i.RGB5_A1)}return(it===i.R16F||it===i.R32F||it===i.RG16F||it===i.RG32F||it===i.RGBA16F||it===i.RGBA32F)&&t.get("EXT_color_buffer_float"),it}function v(A,y){let H;return A?y===null||y===Ui||y===ps?H=i.DEPTH24_STENCIL8:y===Nn?H=i.DEPTH32F_STENCIL8:y===Gs&&(H=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):y===null||y===Ui||y===ps?H=i.DEPTH_COMPONENT24:y===Nn?H=i.DEPTH_COMPONENT32F:y===Gs&&(H=i.DEPTH_COMPONENT16),H}function D(A,y){return g(A)===!0||A.isFramebufferTexture&&A.minFilter!==ln&&A.minFilter!==Un?Math.log2(Math.max(y.width,y.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?y.mipmaps.length:1}function T(A){const y=A.target;y.removeEventListener("dispose",T),P(y),y.isVideoTexture&&h.delete(y)}function C(A){const y=A.target;y.removeEventListener("dispose",C),x(y)}function P(A){const y=n.get(A);if(y.__webglInit===void 0)return;const H=A.source,j=d.get(H);if(j){const ct=j[y.__cacheKey];ct.usedTimes--,ct.usedTimes===0&&E(A),Object.keys(j).length===0&&d.delete(H)}n.remove(A)}function E(A){const y=n.get(A);i.deleteTexture(y.__webglTexture);const H=A.source,j=d.get(H);delete j[y.__cacheKey],r.memory.textures--}function x(A){const y=n.get(A);if(A.depthTexture&&(A.depthTexture.dispose(),n.remove(A.depthTexture)),A.isWebGLCubeRenderTarget)for(let j=0;j<6;j++){if(Array.isArray(y.__webglFramebuffer[j]))for(let ct=0;ct<y.__webglFramebuffer[j].length;ct++)i.deleteFramebuffer(y.__webglFramebuffer[j][ct]);else i.deleteFramebuffer(y.__webglFramebuffer[j]);y.__webglDepthbuffer&&i.deleteRenderbuffer(y.__webglDepthbuffer[j])}else{if(Array.isArray(y.__webglFramebuffer))for(let j=0;j<y.__webglFramebuffer.length;j++)i.deleteFramebuffer(y.__webglFramebuffer[j]);else i.deleteFramebuffer(y.__webglFramebuffer);if(y.__webglDepthbuffer&&i.deleteRenderbuffer(y.__webglDepthbuffer),y.__webglMultisampledFramebuffer&&i.deleteFramebuffer(y.__webglMultisampledFramebuffer),y.__webglColorRenderbuffer)for(let j=0;j<y.__webglColorRenderbuffer.length;j++)y.__webglColorRenderbuffer[j]&&i.deleteRenderbuffer(y.__webglColorRenderbuffer[j]);y.__webglDepthRenderbuffer&&i.deleteRenderbuffer(y.__webglDepthRenderbuffer)}const H=A.textures;for(let j=0,ct=H.length;j<ct;j++){const it=n.get(H[j]);it.__webglTexture&&(i.deleteTexture(it.__webglTexture),r.memory.textures--),n.remove(H[j])}n.remove(A)}let R=0;function F(){R=0}function U(){const A=R;return A>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+s.maxTextures),R+=1,A}function G(A){const y=[];return y.push(A.wrapS),y.push(A.wrapT),y.push(A.wrapR||0),y.push(A.magFilter),y.push(A.minFilter),y.push(A.anisotropy),y.push(A.internalFormat),y.push(A.format),y.push(A.type),y.push(A.generateMipmaps),y.push(A.premultiplyAlpha),y.push(A.flipY),y.push(A.unpackAlignment),y.push(A.colorSpace),y.join()}function J(A,y){const H=n.get(A);if(A.isVideoTexture&&Z(A),A.isRenderTargetTexture===!1&&A.version>0&&H.__version!==A.version){const j=A.image;if(j===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(j.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Q(H,A,y);return}}e.bindTexture(i.TEXTURE_2D,H.__webglTexture,i.TEXTURE0+y)}function X(A,y){const H=n.get(A);if(A.version>0&&H.__version!==A.version){Q(H,A,y);return}e.bindTexture(i.TEXTURE_2D_ARRAY,H.__webglTexture,i.TEXTURE0+y)}function rt(A,y){const H=n.get(A);if(A.version>0&&H.__version!==A.version){Q(H,A,y);return}e.bindTexture(i.TEXTURE_3D,H.__webglTexture,i.TEXTURE0+y)}function $(A,y){const H=n.get(A);if(A.version>0&&H.__version!==A.version){ut(H,A,y);return}e.bindTexture(i.TEXTURE_CUBE_MAP,H.__webglTexture,i.TEXTURE0+y)}const mt={[fs]:i.REPEAT,[Ci]:i.CLAMP_TO_EDGE,[va]:i.MIRRORED_REPEAT},yt={[ln]:i.NEAREST,[bd]:i.NEAREST_MIPMAP_NEAREST,[no]:i.NEAREST_MIPMAP_LINEAR,[Un]:i.LINEAR,[dr]:i.LINEAR_MIPMAP_NEAREST,[Li]:i.LINEAR_MIPMAP_LINEAR},Et={[Ld]:i.NEVER,[Fd]:i.ALWAYS,[Pd]:i.LESS,[Fh]:i.LEQUAL,[Id]:i.EQUAL,[Nd]:i.GEQUAL,[Dd]:i.GREATER,[Ud]:i.NOTEQUAL};function Gt(A,y){if(y.type===Nn&&t.has("OES_texture_float_linear")===!1&&(y.magFilter===Un||y.magFilter===dr||y.magFilter===no||y.magFilter===Li||y.minFilter===Un||y.minFilter===dr||y.minFilter===no||y.minFilter===Li)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(A,i.TEXTURE_WRAP_S,mt[y.wrapS]),i.texParameteri(A,i.TEXTURE_WRAP_T,mt[y.wrapT]),(A===i.TEXTURE_3D||A===i.TEXTURE_2D_ARRAY)&&i.texParameteri(A,i.TEXTURE_WRAP_R,mt[y.wrapR]),i.texParameteri(A,i.TEXTURE_MAG_FILTER,yt[y.magFilter]),i.texParameteri(A,i.TEXTURE_MIN_FILTER,yt[y.minFilter]),y.compareFunction&&(i.texParameteri(A,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(A,i.TEXTURE_COMPARE_FUNC,Et[y.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(y.magFilter===ln||y.minFilter!==no&&y.minFilter!==Li||y.type===Nn&&t.has("OES_texture_float_linear")===!1)return;if(y.anisotropy>1||n.get(y).__currentAnisotropy){const H=t.get("EXT_texture_filter_anisotropic");i.texParameterf(A,H.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,s.getMaxAnisotropy())),n.get(y).__currentAnisotropy=y.anisotropy}}}function Yt(A,y){let H=!1;A.__webglInit===void 0&&(A.__webglInit=!0,y.addEventListener("dispose",T));const j=y.source;let ct=d.get(j);ct===void 0&&(ct={},d.set(j,ct));const it=G(y);if(it!==A.__cacheKey){ct[it]===void 0&&(ct[it]={texture:i.createTexture(),usedTimes:0},r.memory.textures++,H=!0),ct[it].usedTimes++;const Ut=ct[A.__cacheKey];Ut!==void 0&&(ct[A.__cacheKey].usedTimes--,Ut.usedTimes===0&&E(y)),A.__cacheKey=it,A.__webglTexture=ct[it].texture}return H}function Q(A,y,H){let j=i.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(j=i.TEXTURE_2D_ARRAY),y.isData3DTexture&&(j=i.TEXTURE_3D);const ct=Yt(A,y),it=y.source;e.bindTexture(j,A.__webglTexture,i.TEXTURE0+H);const Ut=n.get(it);if(it.version!==Ut.__version||ct===!0){e.activeTexture(i.TEXTURE0+H);const Mt=oe.getPrimaries(oe.workingColorSpace),Rt=y.colorSpace===Dn?null:oe.getPrimaries(y.colorSpace),ee=y.colorSpace===Dn||Mt===Rt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,y.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,y.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ee);let ft=_(y.image,!1,s.maxTextureSize);ft=pt(y,ft);const Ct=o.convert(y.format,y.colorSpace),Wt=o.convert(y.type);let qt=M(y.internalFormat,Ct,Wt,y.colorSpace,y.isVideoTexture);Gt(j,y);let Dt;const jt=y.mipmaps,Qt=y.isVideoTexture!==!0,_e=Ut.__version===void 0||ct===!0,N=it.dataReady,At=D(y,ft);if(y.isDepthTexture)qt=v(y.format===ms,y.type),_e&&(Qt?e.texStorage2D(i.TEXTURE_2D,1,qt,ft.width,ft.height):e.texImage2D(i.TEXTURE_2D,0,qt,ft.width,ft.height,0,Ct,Wt,null));else if(y.isDataTexture)if(jt.length>0){Qt&&_e&&e.texStorage2D(i.TEXTURE_2D,At,qt,jt[0].width,jt[0].height);for(let nt=0,lt=jt.length;nt<lt;nt++)Dt=jt[nt],Qt?N&&e.texSubImage2D(i.TEXTURE_2D,nt,0,0,Dt.width,Dt.height,Ct,Wt,Dt.data):e.texImage2D(i.TEXTURE_2D,nt,qt,Dt.width,Dt.height,0,Ct,Wt,Dt.data);y.generateMipmaps=!1}else Qt?(_e&&e.texStorage2D(i.TEXTURE_2D,At,qt,ft.width,ft.height),N&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,ft.width,ft.height,Ct,Wt,ft.data)):e.texImage2D(i.TEXTURE_2D,0,qt,ft.width,ft.height,0,Ct,Wt,ft.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){Qt&&_e&&e.texStorage3D(i.TEXTURE_2D_ARRAY,At,qt,jt[0].width,jt[0].height,ft.depth);for(let nt=0,lt=jt.length;nt<lt;nt++)if(Dt=jt[nt],y.format!==wn)if(Ct!==null)if(Qt){if(N)if(y.layerUpdates.size>0){const It=Bl(Dt.width,Dt.height,y.format,y.type);for(const Lt of y.layerUpdates){const Zt=Dt.data.subarray(Lt*It/Dt.data.BYTES_PER_ELEMENT,(Lt+1)*It/Dt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,nt,0,0,Lt,Dt.width,Dt.height,1,Ct,Zt)}y.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,nt,0,0,0,Dt.width,Dt.height,ft.depth,Ct,Dt.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,nt,qt,Dt.width,Dt.height,ft.depth,0,Dt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Qt?N&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,nt,0,0,0,Dt.width,Dt.height,ft.depth,Ct,Wt,Dt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,nt,qt,Dt.width,Dt.height,ft.depth,0,Ct,Wt,Dt.data)}else{Qt&&_e&&e.texStorage2D(i.TEXTURE_2D,At,qt,jt[0].width,jt[0].height);for(let nt=0,lt=jt.length;nt<lt;nt++)Dt=jt[nt],y.format!==wn?Ct!==null?Qt?N&&e.compressedTexSubImage2D(i.TEXTURE_2D,nt,0,0,Dt.width,Dt.height,Ct,Dt.data):e.compressedTexImage2D(i.TEXTURE_2D,nt,qt,Dt.width,Dt.height,0,Dt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Qt?N&&e.texSubImage2D(i.TEXTURE_2D,nt,0,0,Dt.width,Dt.height,Ct,Wt,Dt.data):e.texImage2D(i.TEXTURE_2D,nt,qt,Dt.width,Dt.height,0,Ct,Wt,Dt.data)}else if(y.isDataArrayTexture)if(Qt){if(_e&&e.texStorage3D(i.TEXTURE_2D_ARRAY,At,qt,ft.width,ft.height,ft.depth),N)if(y.layerUpdates.size>0){const nt=Bl(ft.width,ft.height,y.format,y.type);for(const lt of y.layerUpdates){const It=ft.data.subarray(lt*nt/ft.data.BYTES_PER_ELEMENT,(lt+1)*nt/ft.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,lt,ft.width,ft.height,1,Ct,Wt,It)}y.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ft.width,ft.height,ft.depth,Ct,Wt,ft.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,qt,ft.width,ft.height,ft.depth,0,Ct,Wt,ft.data);else if(y.isData3DTexture)Qt?(_e&&e.texStorage3D(i.TEXTURE_3D,At,qt,ft.width,ft.height,ft.depth),N&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ft.width,ft.height,ft.depth,Ct,Wt,ft.data)):e.texImage3D(i.TEXTURE_3D,0,qt,ft.width,ft.height,ft.depth,0,Ct,Wt,ft.data);else if(y.isFramebufferTexture){if(_e)if(Qt)e.texStorage2D(i.TEXTURE_2D,At,qt,ft.width,ft.height);else{let nt=ft.width,lt=ft.height;for(let It=0;It<At;It++)e.texImage2D(i.TEXTURE_2D,It,qt,nt,lt,0,Ct,Wt,null),nt>>=1,lt>>=1}}else if(jt.length>0){if(Qt&&_e){const nt=ht(jt[0]);e.texStorage2D(i.TEXTURE_2D,At,qt,nt.width,nt.height)}for(let nt=0,lt=jt.length;nt<lt;nt++)Dt=jt[nt],Qt?N&&e.texSubImage2D(i.TEXTURE_2D,nt,0,0,Ct,Wt,Dt):e.texImage2D(i.TEXTURE_2D,nt,qt,Ct,Wt,Dt);y.generateMipmaps=!1}else if(Qt){if(_e){const nt=ht(ft);e.texStorage2D(i.TEXTURE_2D,At,qt,nt.width,nt.height)}N&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,Ct,Wt,ft)}else e.texImage2D(i.TEXTURE_2D,0,qt,Ct,Wt,ft);g(y)&&p(j),Ut.__version=it.version,y.onUpdate&&y.onUpdate(y)}A.__version=y.version}function ut(A,y,H){if(y.image.length!==6)return;const j=Yt(A,y),ct=y.source;e.bindTexture(i.TEXTURE_CUBE_MAP,A.__webglTexture,i.TEXTURE0+H);const it=n.get(ct);if(ct.version!==it.__version||j===!0){e.activeTexture(i.TEXTURE0+H);const Ut=oe.getPrimaries(oe.workingColorSpace),Mt=y.colorSpace===Dn?null:oe.getPrimaries(y.colorSpace),Rt=y.colorSpace===Dn||Ut===Mt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,y.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,y.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Rt);const ee=y.isCompressedTexture||y.image[0].isCompressedTexture,ft=y.image[0]&&y.image[0].isDataTexture,Ct=[];for(let lt=0;lt<6;lt++)!ee&&!ft?Ct[lt]=_(y.image[lt],!0,s.maxCubemapSize):Ct[lt]=ft?y.image[lt].image:y.image[lt],Ct[lt]=pt(y,Ct[lt]);const Wt=Ct[0],qt=o.convert(y.format,y.colorSpace),Dt=o.convert(y.type),jt=M(y.internalFormat,qt,Dt,y.colorSpace),Qt=y.isVideoTexture!==!0,_e=it.__version===void 0||j===!0,N=ct.dataReady;let At=D(y,Wt);Gt(i.TEXTURE_CUBE_MAP,y);let nt;if(ee){Qt&&_e&&e.texStorage2D(i.TEXTURE_CUBE_MAP,At,jt,Wt.width,Wt.height);for(let lt=0;lt<6;lt++){nt=Ct[lt].mipmaps;for(let It=0;It<nt.length;It++){const Lt=nt[It];y.format!==wn?qt!==null?Qt?N&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,It,0,0,Lt.width,Lt.height,qt,Lt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,It,jt,Lt.width,Lt.height,0,Lt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Qt?N&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,It,0,0,Lt.width,Lt.height,qt,Dt,Lt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,It,jt,Lt.width,Lt.height,0,qt,Dt,Lt.data)}}}else{if(nt=y.mipmaps,Qt&&_e){nt.length>0&&At++;const lt=ht(Ct[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,At,jt,lt.width,lt.height)}for(let lt=0;lt<6;lt++)if(ft){Qt?N&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,0,0,0,Ct[lt].width,Ct[lt].height,qt,Dt,Ct[lt].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,0,jt,Ct[lt].width,Ct[lt].height,0,qt,Dt,Ct[lt].data);for(let It=0;It<nt.length;It++){const Zt=nt[It].image[lt].image;Qt?N&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,It+1,0,0,Zt.width,Zt.height,qt,Dt,Zt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,It+1,jt,Zt.width,Zt.height,0,qt,Dt,Zt.data)}}else{Qt?N&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,0,0,0,qt,Dt,Ct[lt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,0,jt,qt,Dt,Ct[lt]);for(let It=0;It<nt.length;It++){const Lt=nt[It];Qt?N&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,It+1,0,0,qt,Dt,Lt.image[lt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,It+1,jt,qt,Dt,Lt.image[lt])}}}g(y)&&p(i.TEXTURE_CUBE_MAP),it.__version=ct.version,y.onUpdate&&y.onUpdate(y)}A.__version=y.version}function bt(A,y,H,j,ct,it){const Ut=o.convert(H.format,H.colorSpace),Mt=o.convert(H.type),Rt=M(H.internalFormat,Ut,Mt,H.colorSpace),ee=n.get(y),ft=n.get(H);if(ft.__renderTarget=y,!ee.__hasExternalTextures){const Ct=Math.max(1,y.width>>it),Wt=Math.max(1,y.height>>it);ct===i.TEXTURE_3D||ct===i.TEXTURE_2D_ARRAY?e.texImage3D(ct,it,Rt,Ct,Wt,y.depth,0,Ut,Mt,null):e.texImage2D(ct,it,Rt,Ct,Wt,0,Ut,Mt,null)}e.bindFramebuffer(i.FRAMEBUFFER,A),K(y)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,j,ct,ft.__webglTexture,0,k(y)):(ct===i.TEXTURE_2D||ct>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&ct<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,j,ct,ft.__webglTexture,it),e.bindFramebuffer(i.FRAMEBUFFER,null)}function W(A,y,H){if(i.bindRenderbuffer(i.RENDERBUFFER,A),y.depthBuffer){const j=y.depthTexture,ct=j&&j.isDepthTexture?j.type:null,it=v(y.stencilBuffer,ct),Ut=y.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Mt=k(y);K(y)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Mt,it,y.width,y.height):H?i.renderbufferStorageMultisample(i.RENDERBUFFER,Mt,it,y.width,y.height):i.renderbufferStorage(i.RENDERBUFFER,it,y.width,y.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Ut,i.RENDERBUFFER,A)}else{const j=y.textures;for(let ct=0;ct<j.length;ct++){const it=j[ct],Ut=o.convert(it.format,it.colorSpace),Mt=o.convert(it.type),Rt=M(it.internalFormat,Ut,Mt,it.colorSpace),ee=k(y);H&&K(y)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,ee,Rt,y.width,y.height):K(y)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ee,Rt,y.width,y.height):i.renderbufferStorage(i.RENDERBUFFER,Rt,y.width,y.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function st(A,y){if(y&&y.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,A),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const j=n.get(y.depthTexture);j.__renderTarget=y,(!j.__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),J(y.depthTexture,0);const ct=j.__webglTexture,it=k(y);if(y.depthTexture.format===as)K(y)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ct,0,it):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ct,0);else if(y.depthTexture.format===ms)K(y)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ct,0,it):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ct,0);else throw new Error("Unknown depthTexture format")}function vt(A){const y=n.get(A),H=A.isWebGLCubeRenderTarget===!0;if(y.__boundDepthTexture!==A.depthTexture){const j=A.depthTexture;if(y.__depthDisposeCallback&&y.__depthDisposeCallback(),j){const ct=()=>{delete y.__boundDepthTexture,delete y.__depthDisposeCallback,j.removeEventListener("dispose",ct)};j.addEventListener("dispose",ct),y.__depthDisposeCallback=ct}y.__boundDepthTexture=j}if(A.depthTexture&&!y.__autoAllocateDepthBuffer){if(H)throw new Error("target.depthTexture not supported in Cube render targets");st(y.__webglFramebuffer,A)}else if(H){y.__webglDepthbuffer=[];for(let j=0;j<6;j++)if(e.bindFramebuffer(i.FRAMEBUFFER,y.__webglFramebuffer[j]),y.__webglDepthbuffer[j]===void 0)y.__webglDepthbuffer[j]=i.createRenderbuffer(),W(y.__webglDepthbuffer[j],A,!1);else{const ct=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,it=y.__webglDepthbuffer[j];i.bindRenderbuffer(i.RENDERBUFFER,it),i.framebufferRenderbuffer(i.FRAMEBUFFER,ct,i.RENDERBUFFER,it)}}else if(e.bindFramebuffer(i.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer===void 0)y.__webglDepthbuffer=i.createRenderbuffer(),W(y.__webglDepthbuffer,A,!1);else{const j=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ct=y.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,ct),i.framebufferRenderbuffer(i.FRAMEBUFFER,j,i.RENDERBUFFER,ct)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function wt(A,y,H){const j=n.get(A);y!==void 0&&bt(j.__webglFramebuffer,A,A.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),H!==void 0&&vt(A)}function at(A){const y=A.texture,H=n.get(A),j=n.get(y);A.addEventListener("dispose",C);const ct=A.textures,it=A.isWebGLCubeRenderTarget===!0,Ut=ct.length>1;if(Ut||(j.__webglTexture===void 0&&(j.__webglTexture=i.createTexture()),j.__version=y.version,r.memory.textures++),it){H.__webglFramebuffer=[];for(let Mt=0;Mt<6;Mt++)if(y.mipmaps&&y.mipmaps.length>0){H.__webglFramebuffer[Mt]=[];for(let Rt=0;Rt<y.mipmaps.length;Rt++)H.__webglFramebuffer[Mt][Rt]=i.createFramebuffer()}else H.__webglFramebuffer[Mt]=i.createFramebuffer()}else{if(y.mipmaps&&y.mipmaps.length>0){H.__webglFramebuffer=[];for(let Mt=0;Mt<y.mipmaps.length;Mt++)H.__webglFramebuffer[Mt]=i.createFramebuffer()}else H.__webglFramebuffer=i.createFramebuffer();if(Ut)for(let Mt=0,Rt=ct.length;Mt<Rt;Mt++){const ee=n.get(ct[Mt]);ee.__webglTexture===void 0&&(ee.__webglTexture=i.createTexture(),r.memory.textures++)}if(A.samples>0&&K(A)===!1){H.__webglMultisampledFramebuffer=i.createFramebuffer(),H.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,H.__webglMultisampledFramebuffer);for(let Mt=0;Mt<ct.length;Mt++){const Rt=ct[Mt];H.__webglColorRenderbuffer[Mt]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,H.__webglColorRenderbuffer[Mt]);const ee=o.convert(Rt.format,Rt.colorSpace),ft=o.convert(Rt.type),Ct=M(Rt.internalFormat,ee,ft,Rt.colorSpace,A.isXRRenderTarget===!0),Wt=k(A);i.renderbufferStorageMultisample(i.RENDERBUFFER,Wt,Ct,A.width,A.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Mt,i.RENDERBUFFER,H.__webglColorRenderbuffer[Mt])}i.bindRenderbuffer(i.RENDERBUFFER,null),A.depthBuffer&&(H.__webglDepthRenderbuffer=i.createRenderbuffer(),W(H.__webglDepthRenderbuffer,A,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(it){e.bindTexture(i.TEXTURE_CUBE_MAP,j.__webglTexture),Gt(i.TEXTURE_CUBE_MAP,y);for(let Mt=0;Mt<6;Mt++)if(y.mipmaps&&y.mipmaps.length>0)for(let Rt=0;Rt<y.mipmaps.length;Rt++)bt(H.__webglFramebuffer[Mt][Rt],A,y,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,Rt);else bt(H.__webglFramebuffer[Mt],A,y,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Mt,0);g(y)&&p(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Ut){for(let Mt=0,Rt=ct.length;Mt<Rt;Mt++){const ee=ct[Mt],ft=n.get(ee);e.bindTexture(i.TEXTURE_2D,ft.__webglTexture),Gt(i.TEXTURE_2D,ee),bt(H.__webglFramebuffer,A,ee,i.COLOR_ATTACHMENT0+Mt,i.TEXTURE_2D,0),g(ee)&&p(i.TEXTURE_2D)}e.unbindTexture()}else{let Mt=i.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(Mt=A.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(Mt,j.__webglTexture),Gt(Mt,y),y.mipmaps&&y.mipmaps.length>0)for(let Rt=0;Rt<y.mipmaps.length;Rt++)bt(H.__webglFramebuffer[Rt],A,y,i.COLOR_ATTACHMENT0,Mt,Rt);else bt(H.__webglFramebuffer,A,y,i.COLOR_ATTACHMENT0,Mt,0);g(y)&&p(Mt),e.unbindTexture()}A.depthBuffer&&vt(A)}function V(A){const y=A.textures;for(let H=0,j=y.length;H<j;H++){const ct=y[H];if(g(ct)){const it=S(A),Ut=n.get(ct).__webglTexture;e.bindTexture(it,Ut),p(it),e.unbindTexture()}}}const et=[],L=[];function xt(A){if(A.samples>0){if(K(A)===!1){const y=A.textures,H=A.width,j=A.height;let ct=i.COLOR_BUFFER_BIT;const it=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Ut=n.get(A),Mt=y.length>1;if(Mt)for(let Rt=0;Rt<y.length;Rt++)e.bindFramebuffer(i.FRAMEBUFFER,Ut.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Rt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,Ut.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Rt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,Ut.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ut.__webglFramebuffer);for(let Rt=0;Rt<y.length;Rt++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(ct|=i.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(ct|=i.STENCIL_BUFFER_BIT)),Mt){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Ut.__webglColorRenderbuffer[Rt]);const ee=n.get(y[Rt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,ee,0)}i.blitFramebuffer(0,0,H,j,0,0,H,j,ct,i.NEAREST),c===!0&&(et.length=0,L.length=0,et.push(i.COLOR_ATTACHMENT0+Rt),A.depthBuffer&&A.resolveDepthBuffer===!1&&(et.push(it),L.push(it),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,L)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,et))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),Mt)for(let Rt=0;Rt<y.length;Rt++){e.bindFramebuffer(i.FRAMEBUFFER,Ut.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Rt,i.RENDERBUFFER,Ut.__webglColorRenderbuffer[Rt]);const ee=n.get(y[Rt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,Ut.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Rt,i.TEXTURE_2D,ee,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ut.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.resolveDepthBuffer===!1&&c){const y=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[y])}}}function k(A){return Math.min(s.maxSamples,A.samples)}function K(A){const y=n.get(A);return A.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function Z(A){const y=r.render.frame;h.get(A)!==y&&(h.set(A,y),A.update())}function pt(A,y){const H=A.colorSpace,j=A.format,ct=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||H!==_s&&H!==Dn&&(oe.getTransfer(H)===me?(j!==wn||ct!==$n)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",H)),y}function ht(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(l.width=A.naturalWidth||A.width,l.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(l.width=A.displayWidth,l.height=A.displayHeight):(l.width=A.width,l.height=A.height),l}this.allocateTextureUnit=U,this.resetTextureUnits=F,this.setTexture2D=J,this.setTexture2DArray=X,this.setTexture3D=rt,this.setTextureCube=$,this.rebindTextures=wt,this.setupRenderTarget=at,this.updateRenderTargetMipmap=V,this.updateMultisampleRenderTarget=xt,this.setupDepthRenderbuffer=vt,this.setupFrameBufferTexture=bt,this.useMultisampledRTT=K}function Gg(i,t){function e(n,s=Dn){let o;const r=oe.getTransfer(s);if(n===$n)return i.UNSIGNED_BYTE;if(n===uc)return i.UNSIGNED_SHORT_4_4_4_4;if(n===dc)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Ch)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Ah)return i.BYTE;if(n===Rh)return i.SHORT;if(n===Gs)return i.UNSIGNED_SHORT;if(n===hc)return i.INT;if(n===Ui)return i.UNSIGNED_INT;if(n===Nn)return i.FLOAT;if(n===$s)return i.HALF_FLOAT;if(n===Lh)return i.ALPHA;if(n===Ph)return i.RGB;if(n===wn)return i.RGBA;if(n===Ih)return i.LUMINANCE;if(n===Dh)return i.LUMINANCE_ALPHA;if(n===as)return i.DEPTH_COMPONENT;if(n===ms)return i.DEPTH_STENCIL;if(n===fc)return i.RED;if(n===pc)return i.RED_INTEGER;if(n===Uh)return i.RG;if(n===mc)return i.RG_INTEGER;if(n===gc)return i.RGBA_INTEGER;if(n===Fo||n===Oo||n===zo||n===Bo)if(r===me)if(o=t.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(n===Fo)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Oo)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===zo)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Bo)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=t.get("WEBGL_compressed_texture_s3tc"),o!==null){if(n===Fo)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Oo)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===zo)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Bo)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===xa||n===ya||n===Ma||n===wa)if(o=t.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(n===xa)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===ya)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Ma)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===wa)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Sa||n===Ea||n===Ta)if(o=t.get("WEBGL_compressed_texture_etc"),o!==null){if(n===Sa||n===Ea)return r===me?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(n===Ta)return r===me?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===ba||n===Aa||n===Ra||n===Ca||n===La||n===Pa||n===Ia||n===Da||n===Ua||n===Na||n===Fa||n===Oa||n===za||n===Ba)if(o=t.get("WEBGL_compressed_texture_astc"),o!==null){if(n===ba)return r===me?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Aa)return r===me?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Ra)return r===me?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Ca)return r===me?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===La)return r===me?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Pa)return r===me?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Ia)return r===me?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Da)return r===me?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Ua)return r===me?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Na)return r===me?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Fa)return r===me?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Oa)return r===me?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===za)return r===me?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Ba)return r===me?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===ko||n===ka||n===Ha)if(o=t.get("EXT_texture_compression_bptc"),o!==null){if(n===ko)return r===me?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===ka)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Ha)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Nh||n===Ga||n===Va||n===Wa)if(o=t.get("EXT_texture_compression_rgtc"),o!==null){if(n===ko)return o.COMPRESSED_RED_RGTC1_EXT;if(n===Ga)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Va)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Wa)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===ps?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}class Vg extends Ze{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class dt extends Fe{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Wg={type:"move"};class Hr{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new dt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new dt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new I,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new I),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new dt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new I,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new I),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,o=null,r=null;const a=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){r=!0;for(const _ of t.hand.values()){const g=e.getJointPose(_,n),p=this._getHandJoint(l,_);g!==null&&(p.matrix.fromArray(g.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=g.radius),p.visible=g!==null}const h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,m=.005;l.inputState.pinching&&d>f+m?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&d<=f-m&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(o=e.getPose(t.gripSpace,n),o!==null&&(c.matrix.fromArray(o.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,o.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(o.linearVelocity)):c.hasLinearVelocity=!1,o.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(o.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&o!==null&&(s=o),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Wg)))}return a!==null&&(a.visible=s!==null),c!==null&&(c.visible=o!==null),l!==null&&(l.visible=r!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new dt;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const Xg=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,qg=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class Yg{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const s=new Ke,o=t.properties.get(s);o.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new pi({vertexShader:Xg,fragmentShader:qg,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new w(new Mn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class $g extends vs{constructor(t,e){super();const n=this;let s=null,o=1,r=null,a="local-floor",c=1,l=null,h=null,u=null,d=null,f=null,m=null;const _=new Yg,g=e.getContextAttributes();let p=null,S=null;const M=[],v=[],D=new gt;let T=null;const C=new Ze;C.viewport=new ge;const P=new Ze;P.viewport=new ge;const E=[C,P],x=new Vg;let R=null,F=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Q){let ut=M[Q];return ut===void 0&&(ut=new Hr,M[Q]=ut),ut.getTargetRaySpace()},this.getControllerGrip=function(Q){let ut=M[Q];return ut===void 0&&(ut=new Hr,M[Q]=ut),ut.getGripSpace()},this.getHand=function(Q){let ut=M[Q];return ut===void 0&&(ut=new Hr,M[Q]=ut),ut.getHandSpace()};function U(Q){const ut=v.indexOf(Q.inputSource);if(ut===-1)return;const bt=M[ut];bt!==void 0&&(bt.update(Q.inputSource,Q.frame,l||r),bt.dispatchEvent({type:Q.type,data:Q.inputSource}))}function G(){s.removeEventListener("select",U),s.removeEventListener("selectstart",U),s.removeEventListener("selectend",U),s.removeEventListener("squeeze",U),s.removeEventListener("squeezestart",U),s.removeEventListener("squeezeend",U),s.removeEventListener("end",G),s.removeEventListener("inputsourceschange",J);for(let Q=0;Q<M.length;Q++){const ut=v[Q];ut!==null&&(v[Q]=null,M[Q].disconnect(ut))}R=null,F=null,_.reset(),t.setRenderTarget(p),f=null,d=null,u=null,s=null,S=null,Yt.stop(),n.isPresenting=!1,t.setPixelRatio(T),t.setSize(D.width,D.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Q){o=Q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Q){a=Q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||r},this.setReferenceSpace=function(Q){l=Q},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u},this.getFrame=function(){return m},this.getSession=function(){return s},this.setSession=async function(Q){if(s=Q,s!==null){if(p=t.getRenderTarget(),s.addEventListener("select",U),s.addEventListener("selectstart",U),s.addEventListener("selectend",U),s.addEventListener("squeeze",U),s.addEventListener("squeezestart",U),s.addEventListener("squeezeend",U),s.addEventListener("end",G),s.addEventListener("inputsourceschange",J),g.xrCompatible!==!0&&await e.makeXRCompatible(),T=t.getPixelRatio(),t.getSize(D),s.renderState.layers===void 0){const ut={antialias:g.antialias,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:o};f=new XRWebGLLayer(s,e,ut),s.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),S=new Ni(f.framebufferWidth,f.framebufferHeight,{format:wn,type:$n,colorSpace:t.outputColorSpace,stencilBuffer:g.stencil})}else{let ut=null,bt=null,W=null;g.depth&&(W=g.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,ut=g.stencil?ms:as,bt=g.stencil?ps:Ui);const st={colorFormat:e.RGBA8,depthFormat:W,scaleFactor:o};u=new XRWebGLBinding(s,e),d=u.createProjectionLayer(st),s.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),S=new Ni(d.textureWidth,d.textureHeight,{format:wn,type:$n,depthTexture:new $h(d.textureWidth,d.textureHeight,bt,void 0,void 0,void 0,void 0,void 0,void 0,ut),stencilBuffer:g.stencil,colorSpace:t.outputColorSpace,samples:g.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(c),l=null,r=await s.requestReferenceSpace(a),Yt.setContext(s),Yt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function J(Q){for(let ut=0;ut<Q.removed.length;ut++){const bt=Q.removed[ut],W=v.indexOf(bt);W>=0&&(v[W]=null,M[W].disconnect(bt))}for(let ut=0;ut<Q.added.length;ut++){const bt=Q.added[ut];let W=v.indexOf(bt);if(W===-1){for(let vt=0;vt<M.length;vt++)if(vt>=v.length){v.push(bt),W=vt;break}else if(v[vt]===null){v[vt]=bt,W=vt;break}if(W===-1)break}const st=M[W];st&&st.connect(bt)}}const X=new I,rt=new I;function $(Q,ut,bt){X.setFromMatrixPosition(ut.matrixWorld),rt.setFromMatrixPosition(bt.matrixWorld);const W=X.distanceTo(rt),st=ut.projectionMatrix.elements,vt=bt.projectionMatrix.elements,wt=st[14]/(st[10]-1),at=st[14]/(st[10]+1),V=(st[9]+1)/st[5],et=(st[9]-1)/st[5],L=(st[8]-1)/st[0],xt=(vt[8]+1)/vt[0],k=wt*L,K=wt*xt,Z=W/(-L+xt),pt=Z*-L;if(ut.matrixWorld.decompose(Q.position,Q.quaternion,Q.scale),Q.translateX(pt),Q.translateZ(Z),Q.matrixWorld.compose(Q.position,Q.quaternion,Q.scale),Q.matrixWorldInverse.copy(Q.matrixWorld).invert(),st[10]===-1)Q.projectionMatrix.copy(ut.projectionMatrix),Q.projectionMatrixInverse.copy(ut.projectionMatrixInverse);else{const ht=wt+Z,A=at+Z,y=k-pt,H=K+(W-pt),j=V*at/A*ht,ct=et*at/A*ht;Q.projectionMatrix.makePerspective(y,H,j,ct,ht,A),Q.projectionMatrixInverse.copy(Q.projectionMatrix).invert()}}function mt(Q,ut){ut===null?Q.matrixWorld.copy(Q.matrix):Q.matrixWorld.multiplyMatrices(ut.matrixWorld,Q.matrix),Q.matrixWorldInverse.copy(Q.matrixWorld).invert()}this.updateCamera=function(Q){if(s===null)return;let ut=Q.near,bt=Q.far;_.texture!==null&&(_.depthNear>0&&(ut=_.depthNear),_.depthFar>0&&(bt=_.depthFar)),x.near=P.near=C.near=ut,x.far=P.far=C.far=bt,(R!==x.near||F!==x.far)&&(s.updateRenderState({depthNear:x.near,depthFar:x.far}),R=x.near,F=x.far),C.layers.mask=Q.layers.mask|2,P.layers.mask=Q.layers.mask|4,x.layers.mask=C.layers.mask|P.layers.mask;const W=Q.parent,st=x.cameras;mt(x,W);for(let vt=0;vt<st.length;vt++)mt(st[vt],W);st.length===2?$(x,C,P):x.projectionMatrix.copy(C.projectionMatrix),yt(Q,x,W)};function yt(Q,ut,bt){bt===null?Q.matrix.copy(ut.matrixWorld):(Q.matrix.copy(bt.matrixWorld),Q.matrix.invert(),Q.matrix.multiply(ut.matrixWorld)),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale),Q.updateMatrixWorld(!0),Q.projectionMatrix.copy(ut.projectionMatrix),Q.projectionMatrixInverse.copy(ut.projectionMatrixInverse),Q.isPerspectiveCamera&&(Q.fov=Xa*2*Math.atan(1/Q.projectionMatrix.elements[5]),Q.zoom=1)}this.getCamera=function(){return x},this.getFoveation=function(){if(!(d===null&&f===null))return c},this.setFoveation=function(Q){c=Q,d!==null&&(d.fixedFoveation=Q),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=Q)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(x)};let Et=null;function Gt(Q,ut){if(h=ut.getViewerPose(l||r),m=ut,h!==null){const bt=h.views;f!==null&&(t.setRenderTargetFramebuffer(S,f.framebuffer),t.setRenderTarget(S));let W=!1;bt.length!==x.cameras.length&&(x.cameras.length=0,W=!0);for(let vt=0;vt<bt.length;vt++){const wt=bt[vt];let at=null;if(f!==null)at=f.getViewport(wt);else{const et=u.getViewSubImage(d,wt);at=et.viewport,vt===0&&(t.setRenderTargetTextures(S,et.colorTexture,d.ignoreDepthValues?void 0:et.depthStencilTexture),t.setRenderTarget(S))}let V=E[vt];V===void 0&&(V=new Ze,V.layers.enable(vt),V.viewport=new ge,E[vt]=V),V.matrix.fromArray(wt.transform.matrix),V.matrix.decompose(V.position,V.quaternion,V.scale),V.projectionMatrix.fromArray(wt.projectionMatrix),V.projectionMatrixInverse.copy(V.projectionMatrix).invert(),V.viewport.set(at.x,at.y,at.width,at.height),vt===0&&(x.matrix.copy(V.matrix),x.matrix.decompose(x.position,x.quaternion,x.scale)),W===!0&&x.cameras.push(V)}const st=s.enabledFeatures;if(st&&st.includes("depth-sensing")){const vt=u.getDepthInformation(bt[0]);vt&&vt.isValid&&vt.texture&&_.init(t,vt,s.renderState)}}for(let bt=0;bt<M.length;bt++){const W=v[bt],st=M[bt];W!==null&&st!==void 0&&st.update(W,ut,l||r)}Et&&Et(Q,ut),ut.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ut}),m=null}const Yt=new qh;Yt.setAnimationLoop(Gt),this.setAnimationLoop=function(Q){Et=Q},this.dispose=function(){}}}const wi=new En,Zg=new pe;function Kg(i,t){function e(g,p){g.matrixAutoUpdate===!0&&g.updateMatrix(),p.value.copy(g.matrix)}function n(g,p){p.color.getRGB(g.fogColor.value,Vh(i)),p.isFog?(g.fogNear.value=p.near,g.fogFar.value=p.far):p.isFogExp2&&(g.fogDensity.value=p.density)}function s(g,p,S,M,v){p.isMeshBasicMaterial||p.isMeshLambertMaterial?o(g,p):p.isMeshToonMaterial?(o(g,p),u(g,p)):p.isMeshPhongMaterial?(o(g,p),h(g,p)):p.isMeshStandardMaterial?(o(g,p),d(g,p),p.isMeshPhysicalMaterial&&f(g,p,v)):p.isMeshMatcapMaterial?(o(g,p),m(g,p)):p.isMeshDepthMaterial?o(g,p):p.isMeshDistanceMaterial?(o(g,p),_(g,p)):p.isMeshNormalMaterial?o(g,p):p.isLineBasicMaterial?(r(g,p),p.isLineDashedMaterial&&a(g,p)):p.isPointsMaterial?c(g,p,S,M):p.isSpriteMaterial?l(g,p):p.isShadowMaterial?(g.color.value.copy(p.color),g.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function o(g,p){g.opacity.value=p.opacity,p.color&&g.diffuse.value.copy(p.color),p.emissive&&g.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(g.map.value=p.map,e(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.bumpMap&&(g.bumpMap.value=p.bumpMap,e(p.bumpMap,g.bumpMapTransform),g.bumpScale.value=p.bumpScale,p.side===He&&(g.bumpScale.value*=-1)),p.normalMap&&(g.normalMap.value=p.normalMap,e(p.normalMap,g.normalMapTransform),g.normalScale.value.copy(p.normalScale),p.side===He&&g.normalScale.value.negate()),p.displacementMap&&(g.displacementMap.value=p.displacementMap,e(p.displacementMap,g.displacementMapTransform),g.displacementScale.value=p.displacementScale,g.displacementBias.value=p.displacementBias),p.emissiveMap&&(g.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,g.emissiveMapTransform)),p.specularMap&&(g.specularMap.value=p.specularMap,e(p.specularMap,g.specularMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest);const S=t.get(p),M=S.envMap,v=S.envMapRotation;M&&(g.envMap.value=M,wi.copy(v),wi.x*=-1,wi.y*=-1,wi.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(wi.y*=-1,wi.z*=-1),g.envMapRotation.value.setFromMatrix4(Zg.makeRotationFromEuler(wi)),g.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=p.reflectivity,g.ior.value=p.ior,g.refractionRatio.value=p.refractionRatio),p.lightMap&&(g.lightMap.value=p.lightMap,g.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,g.lightMapTransform)),p.aoMap&&(g.aoMap.value=p.aoMap,g.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,g.aoMapTransform))}function r(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,p.map&&(g.map.value=p.map,e(p.map,g.mapTransform))}function a(g,p){g.dashSize.value=p.dashSize,g.totalSize.value=p.dashSize+p.gapSize,g.scale.value=p.scale}function c(g,p,S,M){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.size.value=p.size*S,g.scale.value=M*.5,p.map&&(g.map.value=p.map,e(p.map,g.uvTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function l(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.rotation.value=p.rotation,p.map&&(g.map.value=p.map,e(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function h(g,p){g.specular.value.copy(p.specular),g.shininess.value=Math.max(p.shininess,1e-4)}function u(g,p){p.gradientMap&&(g.gradientMap.value=p.gradientMap)}function d(g,p){g.metalness.value=p.metalness,p.metalnessMap&&(g.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,g.metalnessMapTransform)),g.roughness.value=p.roughness,p.roughnessMap&&(g.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,g.roughnessMapTransform)),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)}function f(g,p,S){g.ior.value=p.ior,p.sheen>0&&(g.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),g.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(g.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,g.sheenColorMapTransform)),p.sheenRoughnessMap&&(g.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,g.sheenRoughnessMapTransform))),p.clearcoat>0&&(g.clearcoat.value=p.clearcoat,g.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(g.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,g.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(g.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===He&&g.clearcoatNormalScale.value.negate())),p.dispersion>0&&(g.dispersion.value=p.dispersion),p.iridescence>0&&(g.iridescence.value=p.iridescence,g.iridescenceIOR.value=p.iridescenceIOR,g.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(g.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,g.iridescenceMapTransform)),p.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),p.transmission>0&&(g.transmission.value=p.transmission,g.transmissionSamplerMap.value=S.texture,g.transmissionSamplerSize.value.set(S.width,S.height),p.transmissionMap&&(g.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,g.transmissionMapTransform)),g.thickness.value=p.thickness,p.thicknessMap&&(g.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=p.attenuationDistance,g.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(g.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(g.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=p.specularIntensity,g.specularColor.value.copy(p.specularColor),p.specularColorMap&&(g.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,g.specularColorMapTransform)),p.specularIntensityMap&&(g.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,g.specularIntensityMapTransform))}function m(g,p){p.matcap&&(g.matcap.value=p.matcap)}function _(g,p){const S=t.get(p).light;g.referencePosition.value.setFromMatrixPosition(S.matrixWorld),g.nearDistance.value=S.shadow.camera.near,g.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function Jg(i,t,e,n){let s={},o={},r=[];const a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(S,M){const v=M.program;n.uniformBlockBinding(S,v)}function l(S,M){let v=s[S.id];v===void 0&&(m(S),v=h(S),s[S.id]=v,S.addEventListener("dispose",g));const D=M.program;n.updateUBOMapping(S,D);const T=t.render.frame;o[S.id]!==T&&(d(S),o[S.id]=T)}function h(S){const M=u();S.__bindingPointIndex=M;const v=i.createBuffer(),D=S.__size,T=S.usage;return i.bindBuffer(i.UNIFORM_BUFFER,v),i.bufferData(i.UNIFORM_BUFFER,D,T),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,M,v),v}function u(){for(let S=0;S<a;S++)if(r.indexOf(S)===-1)return r.push(S),S;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(S){const M=s[S.id],v=S.uniforms,D=S.__cache;i.bindBuffer(i.UNIFORM_BUFFER,M);for(let T=0,C=v.length;T<C;T++){const P=Array.isArray(v[T])?v[T]:[v[T]];for(let E=0,x=P.length;E<x;E++){const R=P[E];if(f(R,T,E,D)===!0){const F=R.__offset,U=Array.isArray(R.value)?R.value:[R.value];let G=0;for(let J=0;J<U.length;J++){const X=U[J],rt=_(X);typeof X=="number"||typeof X=="boolean"?(R.__data[0]=X,i.bufferSubData(i.UNIFORM_BUFFER,F+G,R.__data)):X.isMatrix3?(R.__data[0]=X.elements[0],R.__data[1]=X.elements[1],R.__data[2]=X.elements[2],R.__data[3]=0,R.__data[4]=X.elements[3],R.__data[5]=X.elements[4],R.__data[6]=X.elements[5],R.__data[7]=0,R.__data[8]=X.elements[6],R.__data[9]=X.elements[7],R.__data[10]=X.elements[8],R.__data[11]=0):(X.toArray(R.__data,G),G+=rt.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,F,R.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(S,M,v,D){const T=S.value,C=M+"_"+v;if(D[C]===void 0)return typeof T=="number"||typeof T=="boolean"?D[C]=T:D[C]=T.clone(),!0;{const P=D[C];if(typeof T=="number"||typeof T=="boolean"){if(P!==T)return D[C]=T,!0}else if(P.equals(T)===!1)return P.copy(T),!0}return!1}function m(S){const M=S.uniforms;let v=0;const D=16;for(let C=0,P=M.length;C<P;C++){const E=Array.isArray(M[C])?M[C]:[M[C]];for(let x=0,R=E.length;x<R;x++){const F=E[x],U=Array.isArray(F.value)?F.value:[F.value];for(let G=0,J=U.length;G<J;G++){const X=U[G],rt=_(X),$=v%D,mt=$%rt.boundary,yt=$+mt;v+=mt,yt!==0&&D-yt<rt.storage&&(v+=D-yt),F.__data=new Float32Array(rt.storage/Float32Array.BYTES_PER_ELEMENT),F.__offset=v,v+=rt.storage}}}const T=v%D;return T>0&&(v+=D-T),S.__size=v,S.__cache={},this}function _(S){const M={boundary:0,storage:0};return typeof S=="number"||typeof S=="boolean"?(M.boundary=4,M.storage=4):S.isVector2?(M.boundary=8,M.storage=8):S.isVector3||S.isColor?(M.boundary=16,M.storage=12):S.isVector4?(M.boundary=16,M.storage=16):S.isMatrix3?(M.boundary=48,M.storage=48):S.isMatrix4?(M.boundary=64,M.storage=64):S.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",S),M}function g(S){const M=S.target;M.removeEventListener("dispose",g);const v=r.indexOf(M.__bindingPointIndex);r.splice(v,1),i.deleteBuffer(s[M.id]),delete s[M.id],delete o[M.id]}function p(){for(const S in s)i.deleteBuffer(s[S]);r=[],s={},o={}}return{bind:c,update:l,dispose:p}}class wc{constructor(t={}){const{canvas:e=Bd(),context:n=null,depth:s=!0,stencil:o=!1,alpha:r=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:d=!1}=t;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=r;const m=new Uint32Array(4),_=new Int32Array(4);let g=null,p=null;const S=[],M=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=We,this.toneMapping=di,this.toneMappingExposure=1;const v=this;let D=!1,T=0,C=0,P=null,E=-1,x=null;const R=new ge,F=new ge;let U=null;const G=new St(0);let J=0,X=e.width,rt=e.height,$=1,mt=null,yt=null;const Et=new ge(0,0,X,rt),Gt=new ge(0,0,X,rt);let Yt=!1;const Q=new yc;let ut=!1,bt=!1;const W=new pe,st=new pe,vt=new I,wt=new ge,at={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let V=!1;function et(){return P===null?$:1}let L=n;function xt(b,z){return e.getContext(b,z)}try{const b={alpha:!0,depth:s,stencil:o,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${cc}`),e.addEventListener("webglcontextlost",lt,!1),e.addEventListener("webglcontextrestored",It,!1),e.addEventListener("webglcontextcreationerror",Lt,!1),L===null){const z="webgl2";if(L=xt(z,b),L===null)throw xt(z)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(b){throw console.error("THREE.WebGLRenderer: "+b.message),b}let k,K,Z,pt,ht,A,y,H,j,ct,it,Ut,Mt,Rt,ee,ft,Ct,Wt,qt,Dt,jt,Qt,_e,N;function At(){k=new im(L),k.init(),Qt=new Gg(L,k),K=new Jp(L,k,t,Qt),Z=new Bg(L,k),K.reverseDepthBuffer&&d&&Z.buffers.depth.setReversed(!0),pt=new rm(L),ht=new Eg,A=new Hg(L,k,Z,ht,K,Qt,pt),y=new Qp(v),H=new nm(v),j=new ff(L),_e=new Zp(L,j),ct=new sm(L,j,pt,_e),it=new cm(L,ct,j,pt),qt=new am(L,K,A),ft=new jp(ht),Ut=new Sg(v,y,H,k,K,_e,ft),Mt=new Kg(v,ht),Rt=new bg,ee=new Ig(k),Wt=new $p(v,y,H,Z,it,f,c),Ct=new Og(v,it,K),N=new Jg(L,pt,K,Z),Dt=new Kp(L,k,pt),jt=new om(L,k,pt),pt.programs=Ut.programs,v.capabilities=K,v.extensions=k,v.properties=ht,v.renderLists=Rt,v.shadowMap=Ct,v.state=Z,v.info=pt}At();const nt=new $g(v,L);this.xr=nt,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){const b=k.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){const b=k.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return $},this.setPixelRatio=function(b){b!==void 0&&($=b,this.setSize(X,rt,!1))},this.getSize=function(b){return b.set(X,rt)},this.setSize=function(b,z,q=!0){if(nt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}X=b,rt=z,e.width=Math.floor(b*$),e.height=Math.floor(z*$),q===!0&&(e.style.width=b+"px",e.style.height=z+"px"),this.setViewport(0,0,b,z)},this.getDrawingBufferSize=function(b){return b.set(X*$,rt*$).floor()},this.setDrawingBufferSize=function(b,z,q){X=b,rt=z,$=q,e.width=Math.floor(b*q),e.height=Math.floor(z*q),this.setViewport(0,0,b,z)},this.getCurrentViewport=function(b){return b.copy(R)},this.getViewport=function(b){return b.copy(Et)},this.setViewport=function(b,z,q,Y){b.isVector4?Et.set(b.x,b.y,b.z,b.w):Et.set(b,z,q,Y),Z.viewport(R.copy(Et).multiplyScalar($).round())},this.getScissor=function(b){return b.copy(Gt)},this.setScissor=function(b,z,q,Y){b.isVector4?Gt.set(b.x,b.y,b.z,b.w):Gt.set(b,z,q,Y),Z.scissor(F.copy(Gt).multiplyScalar($).round())},this.getScissorTest=function(){return Yt},this.setScissorTest=function(b){Z.setScissorTest(Yt=b)},this.setOpaqueSort=function(b){mt=b},this.setTransparentSort=function(b){yt=b},this.getClearColor=function(b){return b.copy(Wt.getClearColor())},this.setClearColor=function(){Wt.setClearColor.apply(Wt,arguments)},this.getClearAlpha=function(){return Wt.getClearAlpha()},this.setClearAlpha=function(){Wt.setClearAlpha.apply(Wt,arguments)},this.clear=function(b=!0,z=!0,q=!0){let Y=0;if(b){let B=!1;if(P!==null){const _t=P.texture.format;B=_t===gc||_t===mc||_t===pc}if(B){const _t=P.texture.type,Pt=_t===$n||_t===Ui||_t===Gs||_t===ps||_t===uc||_t===dc,Ft=Wt.getClearColor(),Ot=Wt.getClearAlpha(),$t=Ft.r,Kt=Ft.g,zt=Ft.b;Pt?(m[0]=$t,m[1]=Kt,m[2]=zt,m[3]=Ot,L.clearBufferuiv(L.COLOR,0,m)):(_[0]=$t,_[1]=Kt,_[2]=zt,_[3]=Ot,L.clearBufferiv(L.COLOR,0,_))}else Y|=L.COLOR_BUFFER_BIT}z&&(Y|=L.DEPTH_BUFFER_BIT),q&&(Y|=L.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),L.clear(Y)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",lt,!1),e.removeEventListener("webglcontextrestored",It,!1),e.removeEventListener("webglcontextcreationerror",Lt,!1),Rt.dispose(),ee.dispose(),ht.dispose(),y.dispose(),H.dispose(),it.dispose(),_e.dispose(),N.dispose(),Ut.dispose(),nt.dispose(),nt.removeEventListener("sessionstart",Nc),nt.removeEventListener("sessionend",Fc),gi.stop()};function lt(b){b.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),D=!0}function It(){console.log("THREE.WebGLRenderer: Context Restored."),D=!1;const b=pt.autoReset,z=Ct.enabled,q=Ct.autoUpdate,Y=Ct.needsUpdate,B=Ct.type;At(),pt.autoReset=b,Ct.enabled=z,Ct.autoUpdate=q,Ct.needsUpdate=Y,Ct.type=B}function Lt(b){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function Zt(b){const z=b.target;z.removeEventListener("dispose",Zt),Re(z)}function Re(b){Xe(b),ht.remove(b)}function Xe(b){const z=ht.get(b).programs;z!==void 0&&(z.forEach(function(q){Ut.releaseProgram(q)}),b.isShaderMaterial&&Ut.releaseShaderCache(b))}this.renderBufferDirect=function(b,z,q,Y,B,_t){z===null&&(z=at);const Pt=B.isMesh&&B.matrixWorld.determinant()<0,Ft=Zu(b,z,q,Y,B);Z.setMaterial(Y,Pt);let Ot=q.index,$t=1;if(Y.wireframe===!0){if(Ot=ct.getWireframeAttribute(q),Ot===void 0)return;$t=2}const Kt=q.drawRange,zt=q.attributes.position;let re=Kt.start*$t,ve=(Kt.start+Kt.count)*$t;_t!==null&&(re=Math.max(re,_t.start*$t),ve=Math.min(ve,(_t.start+_t.count)*$t)),Ot!==null?(re=Math.max(re,0),ve=Math.min(ve,Ot.count)):zt!=null&&(re=Math.max(re,0),ve=Math.min(ve,zt.count));const Me=ve-re;if(Me<0||Me===1/0)return;_e.setup(B,Y,Ft,q,Ot);let tn,le=Dt;if(Ot!==null&&(tn=j.get(Ot),le=jt,le.setIndex(tn)),B.isMesh)Y.wireframe===!0?(Z.setLineWidth(Y.wireframeLinewidth*et()),le.setMode(L.LINES)):le.setMode(L.TRIANGLES);else if(B.isLine){let kt=Y.linewidth;kt===void 0&&(kt=1),Z.setLineWidth(kt*et()),B.isLineSegments?le.setMode(L.LINES):B.isLineLoop?le.setMode(L.LINE_LOOP):le.setMode(L.LINE_STRIP)}else B.isPoints?le.setMode(L.POINTS):B.isSprite&&le.setMode(L.TRIANGLES);if(B.isBatchedMesh)if(B._multiDrawInstances!==null)le.renderMultiDrawInstances(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount,B._multiDrawInstances);else if(k.get("WEBGL_multi_draw"))le.renderMultiDraw(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount);else{const kt=B._multiDrawStarts,Bn=B._multiDrawCounts,he=B._multiDrawCount,mn=Ot?j.get(Ot).bytesPerElement:1,ki=ht.get(Y).currentProgram.getUniforms();for(let sn=0;sn<he;sn++)ki.setValue(L,"_gl_DrawID",sn),le.render(kt[sn]/mn,Bn[sn])}else if(B.isInstancedMesh)le.renderInstances(re,Me,B.count);else if(q.isInstancedBufferGeometry){const kt=q._maxInstanceCount!==void 0?q._maxInstanceCount:1/0,Bn=Math.min(q.instanceCount,kt);le.renderInstances(re,Me,Bn)}else le.render(re,Me)};function de(b,z,q){b.transparent===!0&&b.side===Ee&&b.forceSinglePass===!1?(b.side=He,b.needsUpdate=!0,eo(b,z,q),b.side=fi,b.needsUpdate=!0,eo(b,z,q),b.side=Ee):eo(b,z,q)}this.compile=function(b,z,q=null){q===null&&(q=b),p=ee.get(q),p.init(z),M.push(p),q.traverseVisible(function(B){B.isLight&&B.layers.test(z.layers)&&(p.pushLight(B),B.castShadow&&p.pushShadow(B))}),b!==q&&b.traverseVisible(function(B){B.isLight&&B.layers.test(z.layers)&&(p.pushLight(B),B.castShadow&&p.pushShadow(B))}),p.setupLights();const Y=new Set;return b.traverse(function(B){if(!(B.isMesh||B.isPoints||B.isLine||B.isSprite))return;const _t=B.material;if(_t)if(Array.isArray(_t))for(let Pt=0;Pt<_t.length;Pt++){const Ft=_t[Pt];de(Ft,q,B),Y.add(Ft)}else de(_t,q,B),Y.add(_t)}),M.pop(),p=null,Y},this.compileAsync=function(b,z,q=null){const Y=this.compile(b,z,q);return new Promise(B=>{function _t(){if(Y.forEach(function(Pt){ht.get(Pt).currentProgram.isReady()&&Y.delete(Pt)}),Y.size===0){B(b);return}setTimeout(_t,10)}k.get("KHR_parallel_shader_compile")!==null?_t():setTimeout(_t,10)})};let pn=null;function zn(b){pn&&pn(b)}function Nc(){gi.stop()}function Fc(){gi.start()}const gi=new qh;gi.setAnimationLoop(zn),typeof self<"u"&&gi.setContext(self),this.setAnimationLoop=function(b){pn=b,nt.setAnimationLoop(b),b===null?gi.stop():gi.start()},nt.addEventListener("sessionstart",Nc),nt.addEventListener("sessionend",Fc),this.render=function(b,z){if(z!==void 0&&z.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(D===!0)return;if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),z.parent===null&&z.matrixWorldAutoUpdate===!0&&z.updateMatrixWorld(),nt.enabled===!0&&nt.isPresenting===!0&&(nt.cameraAutoUpdate===!0&&nt.updateCamera(z),z=nt.getCamera()),b.isScene===!0&&b.onBeforeRender(v,b,z,P),p=ee.get(b,M.length),p.init(z),M.push(p),st.multiplyMatrices(z.projectionMatrix,z.matrixWorldInverse),Q.setFromProjectionMatrix(st),bt=this.localClippingEnabled,ut=ft.init(this.clippingPlanes,bt),g=Rt.get(b,S.length),g.init(),S.push(g),nt.enabled===!0&&nt.isPresenting===!0){const _t=v.xr.getDepthSensingMesh();_t!==null&&ur(_t,z,-1/0,v.sortObjects)}ur(b,z,0,v.sortObjects),g.finish(),v.sortObjects===!0&&g.sort(mt,yt),V=nt.enabled===!1||nt.isPresenting===!1||nt.hasDepthSensing()===!1,V&&Wt.addToRenderList(g,b),this.info.render.frame++,ut===!0&&ft.beginShadows();const q=p.state.shadowsArray;Ct.render(q,b,z),ut===!0&&ft.endShadows(),this.info.autoReset===!0&&this.info.reset();const Y=g.opaque,B=g.transmissive;if(p.setupLights(),z.isArrayCamera){const _t=z.cameras;if(B.length>0)for(let Pt=0,Ft=_t.length;Pt<Ft;Pt++){const Ot=_t[Pt];zc(Y,B,b,Ot)}V&&Wt.render(b);for(let Pt=0,Ft=_t.length;Pt<Ft;Pt++){const Ot=_t[Pt];Oc(g,b,Ot,Ot.viewport)}}else B.length>0&&zc(Y,B,b,z),V&&Wt.render(b),Oc(g,b,z);P!==null&&(A.updateMultisampleRenderTarget(P),A.updateRenderTargetMipmap(P)),b.isScene===!0&&b.onAfterRender(v,b,z),_e.resetDefaultState(),E=-1,x=null,M.pop(),M.length>0?(p=M[M.length-1],ut===!0&&ft.setGlobalState(v.clippingPlanes,p.state.camera)):p=null,S.pop(),S.length>0?g=S[S.length-1]:g=null};function ur(b,z,q,Y){if(b.visible===!1)return;if(b.layers.test(z.layers)){if(b.isGroup)q=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(z);else if(b.isLight)p.pushLight(b),b.castShadow&&p.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||Q.intersectsSprite(b)){Y&&wt.setFromMatrixPosition(b.matrixWorld).applyMatrix4(st);const Pt=it.update(b),Ft=b.material;Ft.visible&&g.push(b,Pt,Ft,q,wt.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||Q.intersectsObject(b))){const Pt=it.update(b),Ft=b.material;if(Y&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),wt.copy(b.boundingSphere.center)):(Pt.boundingSphere===null&&Pt.computeBoundingSphere(),wt.copy(Pt.boundingSphere.center)),wt.applyMatrix4(b.matrixWorld).applyMatrix4(st)),Array.isArray(Ft)){const Ot=Pt.groups;for(let $t=0,Kt=Ot.length;$t<Kt;$t++){const zt=Ot[$t],re=Ft[zt.materialIndex];re&&re.visible&&g.push(b,Pt,re,q,wt.z,zt)}}else Ft.visible&&g.push(b,Pt,Ft,q,wt.z,null)}}const _t=b.children;for(let Pt=0,Ft=_t.length;Pt<Ft;Pt++)ur(_t[Pt],z,q,Y)}function Oc(b,z,q,Y){const B=b.opaque,_t=b.transmissive,Pt=b.transparent;p.setupLightsView(q),ut===!0&&ft.setGlobalState(v.clippingPlanes,q),Y&&Z.viewport(R.copy(Y)),B.length>0&&to(B,z,q),_t.length>0&&to(_t,z,q),Pt.length>0&&to(Pt,z,q),Z.buffers.depth.setTest(!0),Z.buffers.depth.setMask(!0),Z.buffers.color.setMask(!0),Z.setPolygonOffset(!1)}function zc(b,z,q,Y){if((q.isScene===!0?q.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[Y.id]===void 0&&(p.state.transmissionRenderTarget[Y.id]=new Ni(1,1,{generateMipmaps:!0,type:k.has("EXT_color_buffer_half_float")||k.has("EXT_color_buffer_float")?$s:$n,minFilter:Li,samples:4,stencilBuffer:o,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:oe.workingColorSpace}));const _t=p.state.transmissionRenderTarget[Y.id],Pt=Y.viewport||R;_t.setSize(Pt.z,Pt.w);const Ft=v.getRenderTarget();v.setRenderTarget(_t),v.getClearColor(G),J=v.getClearAlpha(),J<1&&v.setClearColor(16777215,.5),v.clear(),V&&Wt.render(q);const Ot=v.toneMapping;v.toneMapping=di;const $t=Y.viewport;if(Y.viewport!==void 0&&(Y.viewport=void 0),p.setupLightsView(Y),ut===!0&&ft.setGlobalState(v.clippingPlanes,Y),to(b,q,Y),A.updateMultisampleRenderTarget(_t),A.updateRenderTargetMipmap(_t),k.has("WEBGL_multisampled_render_to_texture")===!1){let Kt=!1;for(let zt=0,re=z.length;zt<re;zt++){const ve=z[zt],Me=ve.object,tn=ve.geometry,le=ve.material,kt=ve.group;if(le.side===Ee&&Me.layers.test(Y.layers)){const Bn=le.side;le.side=He,le.needsUpdate=!0,Bc(Me,q,Y,tn,le,kt),le.side=Bn,le.needsUpdate=!0,Kt=!0}}Kt===!0&&(A.updateMultisampleRenderTarget(_t),A.updateRenderTargetMipmap(_t))}v.setRenderTarget(Ft),v.setClearColor(G,J),$t!==void 0&&(Y.viewport=$t),v.toneMapping=Ot}function to(b,z,q){const Y=z.isScene===!0?z.overrideMaterial:null;for(let B=0,_t=b.length;B<_t;B++){const Pt=b[B],Ft=Pt.object,Ot=Pt.geometry,$t=Y===null?Pt.material:Y,Kt=Pt.group;Ft.layers.test(q.layers)&&Bc(Ft,z,q,Ot,$t,Kt)}}function Bc(b,z,q,Y,B,_t){b.onBeforeRender(v,z,q,Y,B,_t),b.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),B.onBeforeRender(v,z,q,Y,b,_t),B.transparent===!0&&B.side===Ee&&B.forceSinglePass===!1?(B.side=He,B.needsUpdate=!0,v.renderBufferDirect(q,z,Y,B,b,_t),B.side=fi,B.needsUpdate=!0,v.renderBufferDirect(q,z,Y,B,b,_t),B.side=Ee):v.renderBufferDirect(q,z,Y,B,b,_t),b.onAfterRender(v,z,q,Y,B,_t)}function eo(b,z,q){z.isScene!==!0&&(z=at);const Y=ht.get(b),B=p.state.lights,_t=p.state.shadowsArray,Pt=B.state.version,Ft=Ut.getParameters(b,B.state,_t,z,q),Ot=Ut.getProgramCacheKey(Ft);let $t=Y.programs;Y.environment=b.isMeshStandardMaterial?z.environment:null,Y.fog=z.fog,Y.envMap=(b.isMeshStandardMaterial?H:y).get(b.envMap||Y.environment),Y.envMapRotation=Y.environment!==null&&b.envMap===null?z.environmentRotation:b.envMapRotation,$t===void 0&&(b.addEventListener("dispose",Zt),$t=new Map,Y.programs=$t);let Kt=$t.get(Ot);if(Kt!==void 0){if(Y.currentProgram===Kt&&Y.lightsStateVersion===Pt)return Hc(b,Ft),Kt}else Ft.uniforms=Ut.getUniforms(b),b.onBeforeCompile(Ft,v),Kt=Ut.acquireProgram(Ft,Ot),$t.set(Ot,Kt),Y.uniforms=Ft.uniforms;const zt=Y.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(zt.clippingPlanes=ft.uniform),Hc(b,Ft),Y.needsLights=Ju(b),Y.lightsStateVersion=Pt,Y.needsLights&&(zt.ambientLightColor.value=B.state.ambient,zt.lightProbe.value=B.state.probe,zt.directionalLights.value=B.state.directional,zt.directionalLightShadows.value=B.state.directionalShadow,zt.spotLights.value=B.state.spot,zt.spotLightShadows.value=B.state.spotShadow,zt.rectAreaLights.value=B.state.rectArea,zt.ltc_1.value=B.state.rectAreaLTC1,zt.ltc_2.value=B.state.rectAreaLTC2,zt.pointLights.value=B.state.point,zt.pointLightShadows.value=B.state.pointShadow,zt.hemisphereLights.value=B.state.hemi,zt.directionalShadowMap.value=B.state.directionalShadowMap,zt.directionalShadowMatrix.value=B.state.directionalShadowMatrix,zt.spotShadowMap.value=B.state.spotShadowMap,zt.spotLightMatrix.value=B.state.spotLightMatrix,zt.spotLightMap.value=B.state.spotLightMap,zt.pointShadowMap.value=B.state.pointShadowMap,zt.pointShadowMatrix.value=B.state.pointShadowMatrix),Y.currentProgram=Kt,Y.uniformsList=null,Kt}function kc(b){if(b.uniformsList===null){const z=b.currentProgram.getUniforms();b.uniformsList=Ho.seqWithValue(z.seq,b.uniforms)}return b.uniformsList}function Hc(b,z){const q=ht.get(b);q.outputColorSpace=z.outputColorSpace,q.batching=z.batching,q.batchingColor=z.batchingColor,q.instancing=z.instancing,q.instancingColor=z.instancingColor,q.instancingMorph=z.instancingMorph,q.skinning=z.skinning,q.morphTargets=z.morphTargets,q.morphNormals=z.morphNormals,q.morphColors=z.morphColors,q.morphTargetsCount=z.morphTargetsCount,q.numClippingPlanes=z.numClippingPlanes,q.numIntersection=z.numClipIntersection,q.vertexAlphas=z.vertexAlphas,q.vertexTangents=z.vertexTangents,q.toneMapping=z.toneMapping}function Zu(b,z,q,Y,B){z.isScene!==!0&&(z=at),A.resetTextureUnits();const _t=z.fog,Pt=Y.isMeshStandardMaterial?z.environment:null,Ft=P===null?v.outputColorSpace:P.isXRRenderTarget===!0?P.texture.colorSpace:_s,Ot=(Y.isMeshStandardMaterial?H:y).get(Y.envMap||Pt),$t=Y.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,Kt=!!q.attributes.tangent&&(!!Y.normalMap||Y.anisotropy>0),zt=!!q.morphAttributes.position,re=!!q.morphAttributes.normal,ve=!!q.morphAttributes.color;let Me=di;Y.toneMapped&&(P===null||P.isXRRenderTarget===!0)&&(Me=v.toneMapping);const tn=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,le=tn!==void 0?tn.length:0,kt=ht.get(Y),Bn=p.state.lights;if(ut===!0&&(bt===!0||b!==x)){const dn=b===x&&Y.id===E;ft.setState(Y,b,dn)}let he=!1;Y.version===kt.__version?(kt.needsLights&&kt.lightsStateVersion!==Bn.state.version||kt.outputColorSpace!==Ft||B.isBatchedMesh&&kt.batching===!1||!B.isBatchedMesh&&kt.batching===!0||B.isBatchedMesh&&kt.batchingColor===!0&&B.colorTexture===null||B.isBatchedMesh&&kt.batchingColor===!1&&B.colorTexture!==null||B.isInstancedMesh&&kt.instancing===!1||!B.isInstancedMesh&&kt.instancing===!0||B.isSkinnedMesh&&kt.skinning===!1||!B.isSkinnedMesh&&kt.skinning===!0||B.isInstancedMesh&&kt.instancingColor===!0&&B.instanceColor===null||B.isInstancedMesh&&kt.instancingColor===!1&&B.instanceColor!==null||B.isInstancedMesh&&kt.instancingMorph===!0&&B.morphTexture===null||B.isInstancedMesh&&kt.instancingMorph===!1&&B.morphTexture!==null||kt.envMap!==Ot||Y.fog===!0&&kt.fog!==_t||kt.numClippingPlanes!==void 0&&(kt.numClippingPlanes!==ft.numPlanes||kt.numIntersection!==ft.numIntersection)||kt.vertexAlphas!==$t||kt.vertexTangents!==Kt||kt.morphTargets!==zt||kt.morphNormals!==re||kt.morphColors!==ve||kt.toneMapping!==Me||kt.morphTargetsCount!==le)&&(he=!0):(he=!0,kt.__version=Y.version);let mn=kt.currentProgram;he===!0&&(mn=eo(Y,z,B));let ki=!1,sn=!1,ws=!1;const we=mn.getUniforms(),Cn=kt.uniforms;if(Z.useProgram(mn.program)&&(ki=!0,sn=!0,ws=!0),Y.id!==E&&(E=Y.id,sn=!0),ki||x!==b){Z.buffers.depth.getReversed()?(W.copy(b.projectionMatrix),Hd(W),Gd(W),we.setValue(L,"projectionMatrix",W)):we.setValue(L,"projectionMatrix",b.projectionMatrix),we.setValue(L,"viewMatrix",b.matrixWorldInverse);const jn=we.map.cameraPosition;jn!==void 0&&jn.setValue(L,vt.setFromMatrixPosition(b.matrixWorld)),K.logarithmicDepthBuffer&&we.setValue(L,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(Y.isMeshPhongMaterial||Y.isMeshToonMaterial||Y.isMeshLambertMaterial||Y.isMeshBasicMaterial||Y.isMeshStandardMaterial||Y.isShaderMaterial)&&we.setValue(L,"isOrthographic",b.isOrthographicCamera===!0),x!==b&&(x=b,sn=!0,ws=!0)}if(B.isSkinnedMesh){we.setOptional(L,B,"bindMatrix"),we.setOptional(L,B,"bindMatrixInverse");const dn=B.skeleton;dn&&(dn.boneTexture===null&&dn.computeBoneTexture(),we.setValue(L,"boneTexture",dn.boneTexture,A))}B.isBatchedMesh&&(we.setOptional(L,B,"batchingTexture"),we.setValue(L,"batchingTexture",B._matricesTexture,A),we.setOptional(L,B,"batchingIdTexture"),we.setValue(L,"batchingIdTexture",B._indirectTexture,A),we.setOptional(L,B,"batchingColorTexture"),B._colorsTexture!==null&&we.setValue(L,"batchingColorTexture",B._colorsTexture,A));const Ss=q.morphAttributes;if((Ss.position!==void 0||Ss.normal!==void 0||Ss.color!==void 0)&&qt.update(B,q,mn),(sn||kt.receiveShadow!==B.receiveShadow)&&(kt.receiveShadow=B.receiveShadow,we.setValue(L,"receiveShadow",B.receiveShadow)),Y.isMeshGouraudMaterial&&Y.envMap!==null&&(Cn.envMap.value=Ot,Cn.flipEnvMap.value=Ot.isCubeTexture&&Ot.isRenderTargetTexture===!1?-1:1),Y.isMeshStandardMaterial&&Y.envMap===null&&z.environment!==null&&(Cn.envMapIntensity.value=z.environmentIntensity),sn&&(we.setValue(L,"toneMappingExposure",v.toneMappingExposure),kt.needsLights&&Ku(Cn,ws),_t&&Y.fog===!0&&Mt.refreshFogUniforms(Cn,_t),Mt.refreshMaterialUniforms(Cn,Y,$,rt,p.state.transmissionRenderTarget[b.id]),Ho.upload(L,kc(kt),Cn,A)),Y.isShaderMaterial&&Y.uniformsNeedUpdate===!0&&(Ho.upload(L,kc(kt),Cn,A),Y.uniformsNeedUpdate=!1),Y.isSpriteMaterial&&we.setValue(L,"center",B.center),we.setValue(L,"modelViewMatrix",B.modelViewMatrix),we.setValue(L,"normalMatrix",B.normalMatrix),we.setValue(L,"modelMatrix",B.matrixWorld),Y.isShaderMaterial||Y.isRawShaderMaterial){const dn=Y.uniformsGroups;for(let jn=0,Qn=dn.length;jn<Qn;jn++){const Gc=dn[jn];N.update(Gc,mn),N.bind(Gc,mn)}}return mn}function Ku(b,z){b.ambientLightColor.needsUpdate=z,b.lightProbe.needsUpdate=z,b.directionalLights.needsUpdate=z,b.directionalLightShadows.needsUpdate=z,b.pointLights.needsUpdate=z,b.pointLightShadows.needsUpdate=z,b.spotLights.needsUpdate=z,b.spotLightShadows.needsUpdate=z,b.rectAreaLights.needsUpdate=z,b.hemisphereLights.needsUpdate=z}function Ju(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return T},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return P},this.setRenderTargetTextures=function(b,z,q){ht.get(b.texture).__webglTexture=z,ht.get(b.depthTexture).__webglTexture=q;const Y=ht.get(b);Y.__hasExternalTextures=!0,Y.__autoAllocateDepthBuffer=q===void 0,Y.__autoAllocateDepthBuffer||k.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),Y.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(b,z){const q=ht.get(b);q.__webglFramebuffer=z,q.__useDefaultFramebuffer=z===void 0},this.setRenderTarget=function(b,z=0,q=0){P=b,T=z,C=q;let Y=!0,B=null,_t=!1,Pt=!1;if(b){const Ot=ht.get(b);if(Ot.__useDefaultFramebuffer!==void 0)Z.bindFramebuffer(L.FRAMEBUFFER,null),Y=!1;else if(Ot.__webglFramebuffer===void 0)A.setupRenderTarget(b);else if(Ot.__hasExternalTextures)A.rebindTextures(b,ht.get(b.texture).__webglTexture,ht.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){const zt=b.depthTexture;if(Ot.__boundDepthTexture!==zt){if(zt!==null&&ht.has(zt)&&(b.width!==zt.image.width||b.height!==zt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");A.setupDepthRenderbuffer(b)}}const $t=b.texture;($t.isData3DTexture||$t.isDataArrayTexture||$t.isCompressedArrayTexture)&&(Pt=!0);const Kt=ht.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(Kt[z])?B=Kt[z][q]:B=Kt[z],_t=!0):b.samples>0&&A.useMultisampledRTT(b)===!1?B=ht.get(b).__webglMultisampledFramebuffer:Array.isArray(Kt)?B=Kt[q]:B=Kt,R.copy(b.viewport),F.copy(b.scissor),U=b.scissorTest}else R.copy(Et).multiplyScalar($).floor(),F.copy(Gt).multiplyScalar($).floor(),U=Yt;if(Z.bindFramebuffer(L.FRAMEBUFFER,B)&&Y&&Z.drawBuffers(b,B),Z.viewport(R),Z.scissor(F),Z.setScissorTest(U),_t){const Ot=ht.get(b.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+z,Ot.__webglTexture,q)}else if(Pt){const Ot=ht.get(b.texture),$t=z||0;L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,Ot.__webglTexture,q||0,$t)}E=-1},this.readRenderTargetPixels=function(b,z,q,Y,B,_t,Pt){if(!(b&&b.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ft=ht.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Pt!==void 0&&(Ft=Ft[Pt]),Ft){Z.bindFramebuffer(L.FRAMEBUFFER,Ft);try{const Ot=b.texture,$t=Ot.format,Kt=Ot.type;if(!K.textureFormatReadable($t)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!K.textureTypeReadable(Kt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}z>=0&&z<=b.width-Y&&q>=0&&q<=b.height-B&&L.readPixels(z,q,Y,B,Qt.convert($t),Qt.convert(Kt),_t)}finally{const Ot=P!==null?ht.get(P).__webglFramebuffer:null;Z.bindFramebuffer(L.FRAMEBUFFER,Ot)}}},this.readRenderTargetPixelsAsync=async function(b,z,q,Y,B,_t,Pt){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ft=ht.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Pt!==void 0&&(Ft=Ft[Pt]),Ft){const Ot=b.texture,$t=Ot.format,Kt=Ot.type;if(!K.textureFormatReadable($t))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!K.textureTypeReadable(Kt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(z>=0&&z<=b.width-Y&&q>=0&&q<=b.height-B){Z.bindFramebuffer(L.FRAMEBUFFER,Ft);const zt=L.createBuffer();L.bindBuffer(L.PIXEL_PACK_BUFFER,zt),L.bufferData(L.PIXEL_PACK_BUFFER,_t.byteLength,L.STREAM_READ),L.readPixels(z,q,Y,B,Qt.convert($t),Qt.convert(Kt),0);const re=P!==null?ht.get(P).__webglFramebuffer:null;Z.bindFramebuffer(L.FRAMEBUFFER,re);const ve=L.fenceSync(L.SYNC_GPU_COMMANDS_COMPLETE,0);return L.flush(),await kd(L,ve,4),L.bindBuffer(L.PIXEL_PACK_BUFFER,zt),L.getBufferSubData(L.PIXEL_PACK_BUFFER,0,_t),L.deleteBuffer(zt),L.deleteSync(ve),_t}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(b,z=null,q=0){b.isTexture!==!0&&(Fs("WebGLRenderer: copyFramebufferToTexture function signature has changed."),z=arguments[0]||null,b=arguments[1]);const Y=Math.pow(2,-q),B=Math.floor(b.image.width*Y),_t=Math.floor(b.image.height*Y),Pt=z!==null?z.x:0,Ft=z!==null?z.y:0;A.setTexture2D(b,0),L.copyTexSubImage2D(L.TEXTURE_2D,q,0,0,Pt,Ft,B,_t),Z.unbindTexture()},this.copyTextureToTexture=function(b,z,q=null,Y=null,B=0){b.isTexture!==!0&&(Fs("WebGLRenderer: copyTextureToTexture function signature has changed."),Y=arguments[0]||null,b=arguments[1],z=arguments[2],B=arguments[3]||0,q=null);let _t,Pt,Ft,Ot,$t,Kt,zt,re,ve;const Me=b.isCompressedTexture?b.mipmaps[B]:b.image;q!==null?(_t=q.max.x-q.min.x,Pt=q.max.y-q.min.y,Ft=q.isBox3?q.max.z-q.min.z:1,Ot=q.min.x,$t=q.min.y,Kt=q.isBox3?q.min.z:0):(_t=Me.width,Pt=Me.height,Ft=Me.depth||1,Ot=0,$t=0,Kt=0),Y!==null?(zt=Y.x,re=Y.y,ve=Y.z):(zt=0,re=0,ve=0);const tn=Qt.convert(z.format),le=Qt.convert(z.type);let kt;z.isData3DTexture?(A.setTexture3D(z,0),kt=L.TEXTURE_3D):z.isDataArrayTexture||z.isCompressedArrayTexture?(A.setTexture2DArray(z,0),kt=L.TEXTURE_2D_ARRAY):(A.setTexture2D(z,0),kt=L.TEXTURE_2D),L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,z.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,z.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,z.unpackAlignment);const Bn=L.getParameter(L.UNPACK_ROW_LENGTH),he=L.getParameter(L.UNPACK_IMAGE_HEIGHT),mn=L.getParameter(L.UNPACK_SKIP_PIXELS),ki=L.getParameter(L.UNPACK_SKIP_ROWS),sn=L.getParameter(L.UNPACK_SKIP_IMAGES);L.pixelStorei(L.UNPACK_ROW_LENGTH,Me.width),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,Me.height),L.pixelStorei(L.UNPACK_SKIP_PIXELS,Ot),L.pixelStorei(L.UNPACK_SKIP_ROWS,$t),L.pixelStorei(L.UNPACK_SKIP_IMAGES,Kt);const ws=b.isDataArrayTexture||b.isData3DTexture,we=z.isDataArrayTexture||z.isData3DTexture;if(b.isRenderTargetTexture||b.isDepthTexture){const Cn=ht.get(b),Ss=ht.get(z),dn=ht.get(Cn.__renderTarget),jn=ht.get(Ss.__renderTarget);Z.bindFramebuffer(L.READ_FRAMEBUFFER,dn.__webglFramebuffer),Z.bindFramebuffer(L.DRAW_FRAMEBUFFER,jn.__webglFramebuffer);for(let Qn=0;Qn<Ft;Qn++)ws&&L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,ht.get(b).__webglTexture,B,Kt+Qn),b.isDepthTexture?(we&&L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,ht.get(z).__webglTexture,B,ve+Qn),L.blitFramebuffer(Ot,$t,_t,Pt,zt,re,_t,Pt,L.DEPTH_BUFFER_BIT,L.NEAREST)):we?L.copyTexSubImage3D(kt,B,zt,re,ve+Qn,Ot,$t,_t,Pt):L.copyTexSubImage2D(kt,B,zt,re,ve+Qn,Ot,$t,_t,Pt);Z.bindFramebuffer(L.READ_FRAMEBUFFER,null),Z.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else we?b.isDataTexture||b.isData3DTexture?L.texSubImage3D(kt,B,zt,re,ve,_t,Pt,Ft,tn,le,Me.data):z.isCompressedArrayTexture?L.compressedTexSubImage3D(kt,B,zt,re,ve,_t,Pt,Ft,tn,Me.data):L.texSubImage3D(kt,B,zt,re,ve,_t,Pt,Ft,tn,le,Me):b.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,B,zt,re,_t,Pt,tn,le,Me.data):b.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,B,zt,re,Me.width,Me.height,tn,Me.data):L.texSubImage2D(L.TEXTURE_2D,B,zt,re,_t,Pt,tn,le,Me);L.pixelStorei(L.UNPACK_ROW_LENGTH,Bn),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,he),L.pixelStorei(L.UNPACK_SKIP_PIXELS,mn),L.pixelStorei(L.UNPACK_SKIP_ROWS,ki),L.pixelStorei(L.UNPACK_SKIP_IMAGES,sn),B===0&&z.generateMipmaps&&L.generateMipmap(kt),Z.unbindTexture()},this.copyTextureToTexture3D=function(b,z,q=null,Y=null,B=0){return b.isTexture!==!0&&(Fs("WebGLRenderer: copyTextureToTexture3D function signature has changed."),q=arguments[0]||null,Y=arguments[1]||null,b=arguments[2],z=arguments[3],B=arguments[4]||0),Fs('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(b,z,q,Y,B)},this.initRenderTarget=function(b){ht.get(b).__webglFramebuffer===void 0&&A.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?A.setTextureCube(b,0):b.isData3DTexture?A.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?A.setTexture2DArray(b,0):A.setTexture2D(b,0),Z.unbindTexture()},this.resetState=function(){T=0,C=0,P=null,Z.reset(),_e.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return qn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorspace=oe._getDrawingBufferColorSpace(t),e.unpackColorSpace=oe._getUnpackColorSpace()}}class Sc{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new St(t),this.density=e}clone(){return new Sc(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class Ec{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new St(t),this.near=e,this.far=n}clone(){return new Ec(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class Vs extends Fe{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new En,this.environmentIntensity=1,this.environmentRotation=new En,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class jg extends Ke{constructor(t=null,e=1,n=1,s,o,r,a,c,l=ln,h=ln,u,d){super(null,r,a,c,l,h,s,o,u,d),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class zs extends hn{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const es=new pe,kl=new pe,Eo=[],Hl=new Jn,Qg=new pe,Cs=new w,Ls=new ys;class Gr extends w{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new zs(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,Qg)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Jn),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,es),Hl.copy(t.boundingBox).applyMatrix4(es),this.boundingBox.union(Hl)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new ys),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,es),Ls.copy(t.boundingSphere).applyMatrix4(es),this.boundingSphere.union(Ls)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,o=n.length+1,r=t*o+1;for(let a=0;a<n.length;a++)n[a]=s[r+a]}raycast(t,e){const n=this.matrixWorld,s=this.count;if(Cs.geometry=this.geometry,Cs.material=this.material,Cs.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ls.copy(this.boundingSphere),Ls.applyMatrix4(n),t.ray.intersectsSphere(Ls)!==!1))for(let o=0;o<s;o++){this.getMatrixAt(o,es),kl.multiplyMatrices(n,es),Cs.matrixWorld=kl,Cs.raycast(t,Eo);for(let r=0,a=Eo.length;r<a;r++){const c=Eo[r];c.instanceId=o,c.object=this,e.push(c)}Eo.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new zs(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){const n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new jg(new Float32Array(s*this.count),s,this.count,fc,Nn));const o=this.morphTexture.source.data.data;let r=0;for(let l=0;l<n.length;l++)r+=n[l];const a=this.geometry.morphTargetsRelative?1:1-r,c=s*t;o[c]=a,o.set(n,c+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class Qh extends Oi{static get type(){return"LineBasicMaterial"}constructor(t){super(),this.isLineBasicMaterial=!0,this.color=new St(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const Xo=new I,qo=new I,Gl=new pe,Ps=new vc,To=new ys,Vr=new I,Vl=new I;class t_ extends Fe{constructor(t=new De,e=new Qh){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let s=1,o=e.count;s<o;s++)Xo.fromBufferAttribute(e,s-1),qo.fromBufferAttribute(e,s),n[s]=n[s-1],n[s]+=Xo.distanceTo(qo);t.setAttribute("lineDistance",new ne(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const n=this.geometry,s=this.matrixWorld,o=t.params.Line.threshold,r=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),To.copy(n.boundingSphere),To.applyMatrix4(s),To.radius+=o,t.ray.intersectsSphere(To)===!1)return;Gl.copy(s).invert(),Ps.copy(t.ray).applyMatrix4(Gl);const a=o/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=this.isLineSegments?2:1,h=n.index,d=n.attributes.position;if(h!==null){const f=Math.max(0,r.start),m=Math.min(h.count,r.start+r.count);for(let _=f,g=m-1;_<g;_+=l){const p=h.getX(_),S=h.getX(_+1),M=bo(this,t,Ps,c,p,S);M&&e.push(M)}if(this.isLineLoop){const _=h.getX(m-1),g=h.getX(f),p=bo(this,t,Ps,c,_,g);p&&e.push(p)}}else{const f=Math.max(0,r.start),m=Math.min(d.count,r.start+r.count);for(let _=f,g=m-1;_<g;_+=l){const p=bo(this,t,Ps,c,_,_+1);p&&e.push(p)}if(this.isLineLoop){const _=bo(this,t,Ps,c,m-1,f);_&&e.push(_)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,r=s.length;o<r;o++){const a=s[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=o}}}}}function bo(i,t,e,n,s,o){const r=i.geometry.attributes.position;if(Xo.fromBufferAttribute(r,s),qo.fromBufferAttribute(r,o),e.distanceSqToSegment(Xo,qo,Vr,Vl)>n)return;Vr.applyMatrix4(i.matrixWorld);const c=t.ray.origin.distanceTo(Vr);if(!(c<t.near||c>t.far))return{distance:c,point:Vl.clone().applyMatrix4(i.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:i}}const Wl=new I,Xl=new I;class e_ extends t_{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[];for(let s=0,o=e.count;s<o;s+=2)Wl.fromBufferAttribute(e,s),Xl.fromBufferAttribute(e,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+Wl.distanceTo(Xl);t.setAttribute("lineDistance",new ne(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Tc extends Ke{constructor(t,e,n,s,o,r,a,c,l){super(t,e,n,s,o,r,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class On{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,s=this.getPoint(0),o=0;e.push(0);for(let r=1;r<=t;r++)n=this.getPoint(r/t),o+=n.distanceTo(s),e.push(o),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){const n=this.getLengths();let s=0;const o=n.length;let r;e?r=e:r=t*n[o-1];let a=0,c=o-1,l;for(;a<=c;)if(s=Math.floor(a+(c-a)/2),l=n[s]-r,l<0)a=s+1;else if(l>0)c=s-1;else{c=s;break}if(s=c,n[s]===r)return s/(o-1);const h=n[s],d=n[s+1]-h,f=(r-h)/d;return(s+f)/(o-1)}getTangent(t,e){let s=t-1e-4,o=t+1e-4;s<0&&(s=0),o>1&&(o=1);const r=this.getPoint(s),a=this.getPoint(o),c=e||(r.isVector2?new gt:new I);return c.copy(a).sub(r).normalize(),c}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){const n=new I,s=[],o=[],r=[],a=new I,c=new pe;for(let f=0;f<=t;f++){const m=f/t;s[f]=this.getTangentAt(m,new I)}o[0]=new I,r[0]=new I;let l=Number.MAX_VALUE;const h=Math.abs(s[0].x),u=Math.abs(s[0].y),d=Math.abs(s[0].z);h<=l&&(l=h,n.set(1,0,0)),u<=l&&(l=u,n.set(0,1,0)),d<=l&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),o[0].crossVectors(s[0],a),r[0].crossVectors(s[0],o[0]);for(let f=1;f<=t;f++){if(o[f]=o[f-1].clone(),r[f]=r[f-1].clone(),a.crossVectors(s[f-1],s[f]),a.length()>Number.EPSILON){a.normalize();const m=Math.acos(Ne(s[f-1].dot(s[f]),-1,1));o[f].applyMatrix4(c.makeRotationAxis(a,m))}r[f].crossVectors(s[f],o[f])}if(e===!0){let f=Math.acos(Ne(o[0].dot(o[t]),-1,1));f/=t,s[0].dot(a.crossVectors(o[0],o[t]))>0&&(f=-f);for(let m=1;m<=t;m++)o[m].applyMatrix4(c.makeRotationAxis(s[m],f*m)),r[m].crossVectors(s[m],o[m])}return{tangents:s,normals:o,binormals:r}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class bc extends On{constructor(t=0,e=0,n=1,s=1,o=0,r=Math.PI*2,a=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=o,this.aEndAngle=r,this.aClockwise=a,this.aRotation=c}getPoint(t,e=new gt){const n=e,s=Math.PI*2;let o=this.aEndAngle-this.aStartAngle;const r=Math.abs(o)<Number.EPSILON;for(;o<0;)o+=s;for(;o>s;)o-=s;o<Number.EPSILON&&(r?o=0:o=s),this.aClockwise===!0&&!r&&(o===s?o=-s:o=o-s);const a=this.aStartAngle+t*o;let c=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=c-this.aX,f=l-this.aY;c=d*h-f*u+this.aX,l=d*u+f*h+this.aY}return n.set(c,l)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class n_ extends bc{constructor(t,e,n,s,o,r){super(t,e,n,n,s,o,r),this.isArcCurve=!0,this.type="ArcCurve"}}function Ac(){let i=0,t=0,e=0,n=0;function s(o,r,a,c){i=o,t=a,e=-3*o+3*r-2*a-c,n=2*o-2*r+a+c}return{initCatmullRom:function(o,r,a,c,l){s(r,a,l*(a-o),l*(c-r))},initNonuniformCatmullRom:function(o,r,a,c,l,h,u){let d=(r-o)/l-(a-o)/(l+h)+(a-r)/h,f=(a-r)/h-(c-r)/(h+u)+(c-a)/u;d*=h,f*=h,s(r,a,d,f)},calc:function(o){const r=o*o,a=r*o;return i+t*o+e*r+n*a}}}const Ao=new I,Wr=new Ac,Xr=new Ac,qr=new Ac;class i_ extends On{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new I){const n=e,s=this.points,o=s.length,r=(o-(this.closed?0:1))*t;let a=Math.floor(r),c=r-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/o)+1)*o:c===0&&a===o-1&&(a=o-2,c=1);let l,h;this.closed||a>0?l=s[(a-1)%o]:(Ao.subVectors(s[0],s[1]).add(s[0]),l=Ao);const u=s[a%o],d=s[(a+1)%o];if(this.closed||a+2<o?h=s[(a+2)%o]:(Ao.subVectors(s[o-1],s[o-2]).add(s[o-1]),h=Ao),this.curveType==="centripetal"||this.curveType==="chordal"){const f=this.curveType==="chordal"?.5:.25;let m=Math.pow(l.distanceToSquared(u),f),_=Math.pow(u.distanceToSquared(d),f),g=Math.pow(d.distanceToSquared(h),f);_<1e-4&&(_=1),m<1e-4&&(m=_),g<1e-4&&(g=_),Wr.initNonuniformCatmullRom(l.x,u.x,d.x,h.x,m,_,g),Xr.initNonuniformCatmullRom(l.y,u.y,d.y,h.y,m,_,g),qr.initNonuniformCatmullRom(l.z,u.z,d.z,h.z,m,_,g)}else this.curveType==="catmullrom"&&(Wr.initCatmullRom(l.x,u.x,d.x,h.x,this.tension),Xr.initCatmullRom(l.y,u.y,d.y,h.y,this.tension),qr.initCatmullRom(l.z,u.z,d.z,h.z,this.tension));return n.set(Wr.calc(c),Xr.calc(c),qr.calc(c)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new I().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function ql(i,t,e,n,s){const o=(n-t)*.5,r=(s-e)*.5,a=i*i,c=i*a;return(2*e-2*n+o+r)*c+(-3*e+3*n-2*o-r)*a+o*i+e}function s_(i,t){const e=1-i;return e*e*t}function o_(i,t){return 2*(1-i)*i*t}function r_(i,t){return i*i*t}function Bs(i,t,e,n){return s_(i,t)+o_(i,e)+r_(i,n)}function a_(i,t){const e=1-i;return e*e*e*t}function c_(i,t){const e=1-i;return 3*e*e*i*t}function l_(i,t){return 3*(1-i)*i*i*t}function h_(i,t){return i*i*i*t}function ks(i,t,e,n,s){return a_(i,t)+c_(i,e)+l_(i,n)+h_(i,s)}class tu extends On{constructor(t=new gt,e=new gt,n=new gt,s=new gt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new gt){const n=e,s=this.v0,o=this.v1,r=this.v2,a=this.v3;return n.set(ks(t,s.x,o.x,r.x,a.x),ks(t,s.y,o.y,r.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class u_ extends On{constructor(t=new I,e=new I,n=new I,s=new I){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new I){const n=e,s=this.v0,o=this.v1,r=this.v2,a=this.v3;return n.set(ks(t,s.x,o.x,r.x,a.x),ks(t,s.y,o.y,r.y,a.y),ks(t,s.z,o.z,r.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class eu extends On{constructor(t=new gt,e=new gt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new gt){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new gt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class d_ extends On{constructor(t=new I,e=new I){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new I){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new I){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class nu extends On{constructor(t=new gt,e=new gt,n=new gt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new gt){const n=e,s=this.v0,o=this.v1,r=this.v2;return n.set(Bs(t,s.x,o.x,r.x),Bs(t,s.y,o.y,r.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class f_ extends On{constructor(t=new I,e=new I,n=new I){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new I){const n=e,s=this.v0,o=this.v1,r=this.v2;return n.set(Bs(t,s.x,o.x,r.x),Bs(t,s.y,o.y,r.y),Bs(t,s.z,o.z,r.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class iu extends On{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new gt){const n=e,s=this.points,o=(s.length-1)*t,r=Math.floor(o),a=o-r,c=s[r===0?r:r-1],l=s[r],h=s[r>s.length-2?s.length-1:r+1],u=s[r>s.length-3?s.length-1:r+2];return n.set(ql(a,c.x,l.x,h.x,u.x),ql(a,c.y,l.y,h.y,u.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new gt().fromArray(s))}return this}}var $a=Object.freeze({__proto__:null,ArcCurve:n_,CatmullRomCurve3:i_,CubicBezierCurve:tu,CubicBezierCurve3:u_,EllipseCurve:bc,LineCurve:eu,LineCurve3:d_,QuadraticBezierCurve:nu,QuadraticBezierCurve3:f_,SplineCurve:iu});class p_ extends On{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new $a[n](e,t))}return this}getPoint(t,e){const n=t*this.getLength(),s=this.getCurveLengths();let o=0;for(;o<s.length;){if(s[o]>=n){const r=s[o]-n,a=this.curves[o],c=a.getLength(),l=c===0?0:1-r/c;return a.getPointAt(l,e)}o++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let n;for(let s=0,o=this.curves;s<o.length;s++){const r=o[s],a=r.isEllipseCurve?t*2:r.isLineCurve||r.isLineCurve3?1:r.isSplineCurve?t*r.points.length:t,c=r.getPoints(a);for(let l=0;l<c.length;l++){const h=c[l];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){const s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const s=t.curves[e];this.curves.push(new $a[s.type]().fromJSON(s))}return this}}class Za extends p_{constructor(t){super(),this.type="Path",this.currentPoint=new gt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const n=new eu(this.currentPoint.clone(),new gt(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){const o=new nu(this.currentPoint.clone(),new gt(t,e),new gt(n,s));return this.curves.push(o),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,o,r){const a=new tu(this.currentPoint.clone(),new gt(t,e),new gt(n,s),new gt(o,r));return this.curves.push(a),this.currentPoint.set(o,r),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),n=new iu(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,o,r){const a=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(t+a,e+c,n,s,o,r),this}absarc(t,e,n,s,o,r){return this.absellipse(t,e,n,n,s,o,r),this}ellipse(t,e,n,s,o,r,a,c){const l=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+l,e+h,n,s,o,r,a,c),this}absellipse(t,e,n,s,o,r,a,c){const l=new bc(t,e,n,s,o,r,a,c);if(this.curves.length>0){const u=l.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(l);const h=l.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class Ks extends De{constructor(t=[new gt(0,-.5),new gt(.5,0),new gt(0,.5)],e=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:s},e=Math.floor(e),s=Ne(s,0,Math.PI*2);const o=[],r=[],a=[],c=[],l=[],h=1/e,u=new I,d=new gt,f=new I,m=new I,_=new I;let g=0,p=0;for(let S=0;S<=t.length-1;S++)switch(S){case 0:g=t[S+1].x-t[S].x,p=t[S+1].y-t[S].y,f.x=p*1,f.y=-g,f.z=p*0,_.copy(f),f.normalize(),c.push(f.x,f.y,f.z);break;case t.length-1:c.push(_.x,_.y,_.z);break;default:g=t[S+1].x-t[S].x,p=t[S+1].y-t[S].y,f.x=p*1,f.y=-g,f.z=p*0,m.copy(f),f.x+=_.x,f.y+=_.y,f.z+=_.z,f.normalize(),c.push(f.x,f.y,f.z),_.copy(m)}for(let S=0;S<=e;S++){const M=n+S*h*s,v=Math.sin(M),D=Math.cos(M);for(let T=0;T<=t.length-1;T++){u.x=t[T].x*v,u.y=t[T].y,u.z=t[T].x*D,r.push(u.x,u.y,u.z),d.x=S/e,d.y=T/(t.length-1),a.push(d.x,d.y);const C=c[3*T+0]*v,P=c[3*T+1],E=c[3*T+0]*D;l.push(C,P,E)}}for(let S=0;S<e;S++)for(let M=0;M<t.length-1;M++){const v=M+S*t.length,D=v,T=v+t.length,C=v+t.length+1,P=v+1;o.push(D,T,P),o.push(C,P,T)}this.setIndex(o),this.setAttribute("position",new ne(r,3)),this.setAttribute("uv",new ne(a,2)),this.setAttribute("normal",new ne(l,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ks(t.points,t.segments,t.phiStart,t.phiLength)}}class Te extends Ks{constructor(t=1,e=1,n=4,s=8){const o=new Za;o.absarc(0,-e/2,t,Math.PI*1.5,0),o.absarc(0,e/2,t,0,Math.PI*.5),super(o.getPoints(n),s),this.type="CapsuleGeometry",this.parameters={radius:t,length:e,capSegments:n,radialSegments:s}}static fromJSON(t){return new Te(t.radius,t.length,t.capSegments,t.radialSegments)}}class Rn extends De{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);const o=[],r=[],a=[],c=[],l=new I,h=new gt;r.push(0,0,0),a.push(0,0,1),c.push(.5,.5);for(let u=0,d=3;u<=e;u++,d+=3){const f=n+u/e*s;l.x=t*Math.cos(f),l.y=t*Math.sin(f),r.push(l.x,l.y,l.z),a.push(0,0,1),h.x=(r[d]/t+1)/2,h.y=(r[d+1]/t+1)/2,c.push(h.x,h.y)}for(let u=1;u<=e;u++)o.push(u,u+1,0);this.setIndex(o),this.setAttribute("position",new ne(r,3)),this.setAttribute("normal",new ne(a,3)),this.setAttribute("uv",new ne(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Rn(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class Xt extends De{constructor(t=1,e=1,n=1,s=32,o=1,r=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:o,openEnded:r,thetaStart:a,thetaLength:c};const l=this;s=Math.floor(s),o=Math.floor(o);const h=[],u=[],d=[],f=[];let m=0;const _=[],g=n/2;let p=0;S(),r===!1&&(t>0&&M(!0),e>0&&M(!1)),this.setIndex(h),this.setAttribute("position",new ne(u,3)),this.setAttribute("normal",new ne(d,3)),this.setAttribute("uv",new ne(f,2));function S(){const v=new I,D=new I;let T=0;const C=(e-t)/n;for(let P=0;P<=o;P++){const E=[],x=P/o,R=x*(e-t)+t;for(let F=0;F<=s;F++){const U=F/s,G=U*c+a,J=Math.sin(G),X=Math.cos(G);D.x=R*J,D.y=-x*n+g,D.z=R*X,u.push(D.x,D.y,D.z),v.set(J,C,X).normalize(),d.push(v.x,v.y,v.z),f.push(U,1-x),E.push(m++)}_.push(E)}for(let P=0;P<s;P++)for(let E=0;E<o;E++){const x=_[E][P],R=_[E+1][P],F=_[E+1][P+1],U=_[E][P+1];(t>0||E!==0)&&(h.push(x,R,U),T+=3),(e>0||E!==o-1)&&(h.push(R,F,U),T+=3)}l.addGroup(p,T,0),p+=T}function M(v){const D=m,T=new gt,C=new I;let P=0;const E=v===!0?t:e,x=v===!0?1:-1;for(let F=1;F<=s;F++)u.push(0,g*x,0),d.push(0,x,0),f.push(.5,.5),m++;const R=m;for(let F=0;F<=s;F++){const G=F/s*c+a,J=Math.cos(G),X=Math.sin(G);C.x=E*X,C.y=g*x,C.z=E*J,u.push(C.x,C.y,C.z),d.push(0,x,0),T.x=J*.5+.5,T.y=X*.5*x+.5,f.push(T.x,T.y),m++}for(let F=0;F<s;F++){const U=D+F,G=R+F;v===!0?h.push(G,G+1,U):h.push(G+1,G,U),P+=3}l.addGroup(p,P,v===!0?1:2),p+=P}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Xt(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class ye extends Xt{constructor(t=1,e=1,n=32,s=1,o=!1,r=0,a=Math.PI*2){super(0,t,e,n,s,o,r,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:o,thetaStart:r,thetaLength:a}}static fromJSON(t){return new ye(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Js extends De{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};const o=[],r=[];a(s),l(n),h(),this.setAttribute("position",new ne(o,3)),this.setAttribute("normal",new ne(o.slice(),3)),this.setAttribute("uv",new ne(r,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(S){const M=new I,v=new I,D=new I;for(let T=0;T<e.length;T+=3)f(e[T+0],M),f(e[T+1],v),f(e[T+2],D),c(M,v,D,S)}function c(S,M,v,D){const T=D+1,C=[];for(let P=0;P<=T;P++){C[P]=[];const E=S.clone().lerp(v,P/T),x=M.clone().lerp(v,P/T),R=T-P;for(let F=0;F<=R;F++)F===0&&P===T?C[P][F]=E:C[P][F]=E.clone().lerp(x,F/R)}for(let P=0;P<T;P++)for(let E=0;E<2*(T-P)-1;E++){const x=Math.floor(E/2);E%2===0?(d(C[P][x+1]),d(C[P+1][x]),d(C[P][x])):(d(C[P][x+1]),d(C[P+1][x+1]),d(C[P+1][x]))}}function l(S){const M=new I;for(let v=0;v<o.length;v+=3)M.x=o[v+0],M.y=o[v+1],M.z=o[v+2],M.normalize().multiplyScalar(S),o[v+0]=M.x,o[v+1]=M.y,o[v+2]=M.z}function h(){const S=new I;for(let M=0;M<o.length;M+=3){S.x=o[M+0],S.y=o[M+1],S.z=o[M+2];const v=g(S)/2/Math.PI+.5,D=p(S)/Math.PI+.5;r.push(v,1-D)}m(),u()}function u(){for(let S=0;S<r.length;S+=6){const M=r[S+0],v=r[S+2],D=r[S+4],T=Math.max(M,v,D),C=Math.min(M,v,D);T>.9&&C<.1&&(M<.2&&(r[S+0]+=1),v<.2&&(r[S+2]+=1),D<.2&&(r[S+4]+=1))}}function d(S){o.push(S.x,S.y,S.z)}function f(S,M){const v=S*3;M.x=t[v+0],M.y=t[v+1],M.z=t[v+2]}function m(){const S=new I,M=new I,v=new I,D=new I,T=new gt,C=new gt,P=new gt;for(let E=0,x=0;E<o.length;E+=9,x+=6){S.set(o[E+0],o[E+1],o[E+2]),M.set(o[E+3],o[E+4],o[E+5]),v.set(o[E+6],o[E+7],o[E+8]),T.set(r[x+0],r[x+1]),C.set(r[x+2],r[x+3]),P.set(r[x+4],r[x+5]),D.copy(S).add(M).add(v).divideScalar(3);const R=g(D);_(T,x+0,S,R),_(C,x+2,M,R),_(P,x+4,v,R)}}function _(S,M,v,D){D<0&&S.x===1&&(r[M]=S.x-1),v.x===0&&v.z===0&&(r[M]=D/2/Math.PI+.5)}function g(S){return Math.atan2(S.z,-S.x)}function p(S){return Math.atan2(-S.y,Math.sqrt(S.x*S.x+S.z*S.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Js(t.vertices,t.indices,t.radius,t.details)}}class Zn extends Js{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,s=1/n,o=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-s,-n,0,-s,n,0,s,-n,0,s,n,-s,-n,0,-s,n,0,s,-n,0,s,n,0,-n,0,-s,n,0,-s,-n,0,s,n,0,s],r=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(o,r,t,e),this.type="DodecahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new Zn(t.radius,t.detail)}}class or extends Za{constructor(t){super(t),this.uuid=xs(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let n=0,s=this.holes.length;n<s;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){const s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const s=t.holes[e];this.holes.push(new Za().fromJSON(s))}return this}}const m_={triangulate:function(i,t,e=2){const n=t&&t.length,s=n?t[0]*e:i.length;let o=su(i,0,s,e,!0);const r=[];if(!o||o.next===o.prev)return r;let a,c,l,h,u,d,f;if(n&&(o=y_(i,t,o,e)),i.length>80*e){a=l=i[0],c=h=i[1];for(let m=e;m<s;m+=e)u=i[m],d=i[m+1],u<a&&(a=u),d<c&&(c=d),u>l&&(l=u),d>h&&(h=d);f=Math.max(l-a,h-c),f=f!==0?32767/f:0}return Ws(o,r,e,a,c,f,0),r}};function su(i,t,e,n,s){let o,r;if(s===P_(i,t,e,n)>0)for(o=t;o<e;o+=n)r=Yl(o,i[o],i[o+1],r);else for(o=e-n;o>=t;o-=n)r=Yl(o,i[o],i[o+1],r);return r&&rr(r,r.next)&&(qs(r),r=r.next),r}function Fi(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(rr(e,e.next)||be(e.prev,e,e.next)===0)){if(qs(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function Ws(i,t,e,n,s,o,r){if(!i)return;!r&&o&&T_(i,n,s,o);let a=i,c,l;for(;i.prev!==i.next;){if(c=i.prev,l=i.next,o?__(i,n,s,o):g_(i)){t.push(c.i/e|0),t.push(i.i/e|0),t.push(l.i/e|0),qs(i),i=l.next,a=l.next;continue}if(i=l,i===a){r?r===1?(i=v_(Fi(i),t,e),Ws(i,t,e,n,s,o,2)):r===2&&x_(i,t,e,n,s,o):Ws(Fi(i),t,e,n,s,o,1);break}}}function g_(i){const t=i.prev,e=i,n=i.next;if(be(t,e,n)>=0)return!1;const s=t.x,o=e.x,r=n.x,a=t.y,c=e.y,l=n.y,h=s<o?s<r?s:r:o<r?o:r,u=a<c?a<l?a:l:c<l?c:l,d=s>o?s>r?s:r:o>r?o:r,f=a>c?a>l?a:l:c>l?c:l;let m=n.next;for(;m!==t;){if(m.x>=h&&m.x<=d&&m.y>=u&&m.y<=f&&ss(s,a,o,c,r,l,m.x,m.y)&&be(m.prev,m,m.next)>=0)return!1;m=m.next}return!0}function __(i,t,e,n){const s=i.prev,o=i,r=i.next;if(be(s,o,r)>=0)return!1;const a=s.x,c=o.x,l=r.x,h=s.y,u=o.y,d=r.y,f=a<c?a<l?a:l:c<l?c:l,m=h<u?h<d?h:d:u<d?u:d,_=a>c?a>l?a:l:c>l?c:l,g=h>u?h>d?h:d:u>d?u:d,p=Ka(f,m,t,e,n),S=Ka(_,g,t,e,n);let M=i.prevZ,v=i.nextZ;for(;M&&M.z>=p&&v&&v.z<=S;){if(M.x>=f&&M.x<=_&&M.y>=m&&M.y<=g&&M!==s&&M!==r&&ss(a,h,c,u,l,d,M.x,M.y)&&be(M.prev,M,M.next)>=0||(M=M.prevZ,v.x>=f&&v.x<=_&&v.y>=m&&v.y<=g&&v!==s&&v!==r&&ss(a,h,c,u,l,d,v.x,v.y)&&be(v.prev,v,v.next)>=0))return!1;v=v.nextZ}for(;M&&M.z>=p;){if(M.x>=f&&M.x<=_&&M.y>=m&&M.y<=g&&M!==s&&M!==r&&ss(a,h,c,u,l,d,M.x,M.y)&&be(M.prev,M,M.next)>=0)return!1;M=M.prevZ}for(;v&&v.z<=S;){if(v.x>=f&&v.x<=_&&v.y>=m&&v.y<=g&&v!==s&&v!==r&&ss(a,h,c,u,l,d,v.x,v.y)&&be(v.prev,v,v.next)>=0)return!1;v=v.nextZ}return!0}function v_(i,t,e){let n=i;do{const s=n.prev,o=n.next.next;!rr(s,o)&&ou(s,n,n.next,o)&&Xs(s,o)&&Xs(o,s)&&(t.push(s.i/e|0),t.push(n.i/e|0),t.push(o.i/e|0),qs(n),qs(n.next),n=i=o),n=n.next}while(n!==i);return Fi(n)}function x_(i,t,e,n,s,o){let r=i;do{let a=r.next.next;for(;a!==r.prev;){if(r.i!==a.i&&R_(r,a)){let c=ru(r,a);r=Fi(r,r.next),c=Fi(c,c.next),Ws(r,t,e,n,s,o,0),Ws(c,t,e,n,s,o,0);return}a=a.next}r=r.next}while(r!==i)}function y_(i,t,e,n){const s=[];let o,r,a,c,l;for(o=0,r=t.length;o<r;o++)a=t[o]*n,c=o<r-1?t[o+1]*n:i.length,l=su(i,a,c,n,!1),l===l.next&&(l.steiner=!0),s.push(A_(l));for(s.sort(M_),o=0;o<s.length;o++)e=w_(s[o],e);return e}function M_(i,t){return i.x-t.x}function w_(i,t){const e=S_(i,t);if(!e)return t;const n=ru(e,i);return Fi(n,n.next),Fi(e,e.next)}function S_(i,t){let e=t,n=-1/0,s;const o=i.x,r=i.y;do{if(r<=e.y&&r>=e.next.y&&e.next.y!==e.y){const d=e.x+(r-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(d<=o&&d>n&&(n=d,s=e.x<e.next.x?e:e.next,d===o))return s}e=e.next}while(e!==t);if(!s)return null;const a=s,c=s.x,l=s.y;let h=1/0,u;e=s;do o>=e.x&&e.x>=c&&o!==e.x&&ss(r<l?o:n,r,c,l,r<l?n:o,r,e.x,e.y)&&(u=Math.abs(r-e.y)/(o-e.x),Xs(e,i)&&(u<h||u===h&&(e.x>s.x||e.x===s.x&&E_(s,e)))&&(s=e,h=u)),e=e.next;while(e!==a);return s}function E_(i,t){return be(i.prev,i,t.prev)<0&&be(t.next,i,i.next)<0}function T_(i,t,e,n){let s=i;do s.z===0&&(s.z=Ka(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,b_(s)}function b_(i){let t,e,n,s,o,r,a,c,l=1;do{for(e=i,i=null,o=null,r=0;e;){for(r++,n=e,a=0,t=0;t<l&&(a++,n=n.nextZ,!!n);t++);for(c=l;a>0||c>0&&n;)a!==0&&(c===0||!n||e.z<=n.z)?(s=e,e=e.nextZ,a--):(s=n,n=n.nextZ,c--),o?o.nextZ=s:i=s,s.prevZ=o,o=s;e=n}o.nextZ=null,l*=2}while(r>1);return i}function Ka(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function A_(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function ss(i,t,e,n,s,o,r,a){return(s-r)*(t-a)>=(i-r)*(o-a)&&(i-r)*(n-a)>=(e-r)*(t-a)&&(e-r)*(o-a)>=(s-r)*(n-a)}function R_(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!C_(i,t)&&(Xs(i,t)&&Xs(t,i)&&L_(i,t)&&(be(i.prev,i,t.prev)||be(i,t.prev,t))||rr(i,t)&&be(i.prev,i,i.next)>0&&be(t.prev,t,t.next)>0)}function be(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function rr(i,t){return i.x===t.x&&i.y===t.y}function ou(i,t,e,n){const s=Co(be(i,t,e)),o=Co(be(i,t,n)),r=Co(be(e,n,i)),a=Co(be(e,n,t));return!!(s!==o&&r!==a||s===0&&Ro(i,e,t)||o===0&&Ro(i,n,t)||r===0&&Ro(e,i,n)||a===0&&Ro(e,t,n))}function Ro(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function Co(i){return i>0?1:i<0?-1:0}function C_(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&ou(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function Xs(i,t){return be(i.prev,i,i.next)<0?be(i,t,i.next)>=0&&be(i,i.prev,t)>=0:be(i,t,i.prev)<0||be(i,i.next,t)<0}function L_(i,t){let e=i,n=!1;const s=(i.x+t.x)/2,o=(i.y+t.y)/2;do e.y>o!=e.next.y>o&&e.next.y!==e.y&&s<(e.next.x-e.x)*(o-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function ru(i,t){const e=new Ja(i.i,i.x,i.y),n=new Ja(t.i,t.x,t.y),s=i.next,o=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,o.next=n,n.prev=o,n}function Yl(i,t,e,n){const s=new Ja(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function qs(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Ja(i,t,e){this.i=i,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function P_(i,t,e,n){let s=0;for(let o=t,r=e-n;o<e;o+=n)s+=(i[r]-i[o])*(i[o+1]+i[r+1]),r=o;return s}class Hs{static area(t){const e=t.length;let n=0;for(let s=e-1,o=0;o<e;s=o++)n+=t[s].x*t[o].y-t[o].x*t[s].y;return n*.5}static isClockWise(t){return Hs.area(t)<0}static triangulateShape(t,e){const n=[],s=[],o=[];$l(t),Zl(n,t);let r=t.length;e.forEach($l);for(let c=0;c<e.length;c++)s.push(r),r+=e[c].length,Zl(n,e[c]);const a=m_.triangulate(n,s);for(let c=0;c<a.length;c+=3)o.push(a.slice(c,c+3));return o}}function $l(i){const t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function Zl(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}class js extends De{constructor(t=new or([new gt(.5,.5),new gt(-.5,.5),new gt(-.5,-.5),new gt(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];const n=this,s=[],o=[];for(let a=0,c=t.length;a<c;a++){const l=t[a];r(l)}this.setAttribute("position",new ne(s,3)),this.setAttribute("uv",new ne(o,2)),this.computeVertexNormals();function r(a){const c=[],l=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,u=e.depth!==void 0?e.depth:1;let d=e.bevelEnabled!==void 0?e.bevelEnabled:!0,f=e.bevelThickness!==void 0?e.bevelThickness:.2,m=e.bevelSize!==void 0?e.bevelSize:f-.1,_=e.bevelOffset!==void 0?e.bevelOffset:0,g=e.bevelSegments!==void 0?e.bevelSegments:3;const p=e.extrudePath,S=e.UVGenerator!==void 0?e.UVGenerator:I_;let M,v=!1,D,T,C,P;p&&(M=p.getSpacedPoints(h),v=!0,d=!1,D=p.computeFrenetFrames(h,!1),T=new I,C=new I,P=new I),d||(g=0,f=0,m=0,_=0);const E=a.extractPoints(l);let x=E.shape;const R=E.holes;if(!Hs.isClockWise(x)){x=x.reverse();for(let V=0,et=R.length;V<et;V++){const L=R[V];Hs.isClockWise(L)&&(R[V]=L.reverse())}}const U=Hs.triangulateShape(x,R),G=x;for(let V=0,et=R.length;V<et;V++){const L=R[V];x=x.concat(L)}function J(V,et,L){return et||console.error("THREE.ExtrudeGeometry: vec does not exist"),V.clone().addScaledVector(et,L)}const X=x.length,rt=U.length;function $(V,et,L){let xt,k,K;const Z=V.x-et.x,pt=V.y-et.y,ht=L.x-V.x,A=L.y-V.y,y=Z*Z+pt*pt,H=Z*A-pt*ht;if(Math.abs(H)>Number.EPSILON){const j=Math.sqrt(y),ct=Math.sqrt(ht*ht+A*A),it=et.x-pt/j,Ut=et.y+Z/j,Mt=L.x-A/ct,Rt=L.y+ht/ct,ee=((Mt-it)*A-(Rt-Ut)*ht)/(Z*A-pt*ht);xt=it+Z*ee-V.x,k=Ut+pt*ee-V.y;const ft=xt*xt+k*k;if(ft<=2)return new gt(xt,k);K=Math.sqrt(ft/2)}else{let j=!1;Z>Number.EPSILON?ht>Number.EPSILON&&(j=!0):Z<-Number.EPSILON?ht<-Number.EPSILON&&(j=!0):Math.sign(pt)===Math.sign(A)&&(j=!0),j?(xt=-pt,k=Z,K=Math.sqrt(y)):(xt=Z,k=pt,K=Math.sqrt(y/2))}return new gt(xt/K,k/K)}const mt=[];for(let V=0,et=G.length,L=et-1,xt=V+1;V<et;V++,L++,xt++)L===et&&(L=0),xt===et&&(xt=0),mt[V]=$(G[V],G[L],G[xt]);const yt=[];let Et,Gt=mt.concat();for(let V=0,et=R.length;V<et;V++){const L=R[V];Et=[];for(let xt=0,k=L.length,K=k-1,Z=xt+1;xt<k;xt++,K++,Z++)K===k&&(K=0),Z===k&&(Z=0),Et[xt]=$(L[xt],L[K],L[Z]);yt.push(Et),Gt=Gt.concat(Et)}for(let V=0;V<g;V++){const et=V/g,L=f*Math.cos(et*Math.PI/2),xt=m*Math.sin(et*Math.PI/2)+_;for(let k=0,K=G.length;k<K;k++){const Z=J(G[k],mt[k],xt);W(Z.x,Z.y,-L)}for(let k=0,K=R.length;k<K;k++){const Z=R[k];Et=yt[k];for(let pt=0,ht=Z.length;pt<ht;pt++){const A=J(Z[pt],Et[pt],xt);W(A.x,A.y,-L)}}}const Yt=m+_;for(let V=0;V<X;V++){const et=d?J(x[V],Gt[V],Yt):x[V];v?(C.copy(D.normals[0]).multiplyScalar(et.x),T.copy(D.binormals[0]).multiplyScalar(et.y),P.copy(M[0]).add(C).add(T),W(P.x,P.y,P.z)):W(et.x,et.y,0)}for(let V=1;V<=h;V++)for(let et=0;et<X;et++){const L=d?J(x[et],Gt[et],Yt):x[et];v?(C.copy(D.normals[V]).multiplyScalar(L.x),T.copy(D.binormals[V]).multiplyScalar(L.y),P.copy(M[V]).add(C).add(T),W(P.x,P.y,P.z)):W(L.x,L.y,u/h*V)}for(let V=g-1;V>=0;V--){const et=V/g,L=f*Math.cos(et*Math.PI/2),xt=m*Math.sin(et*Math.PI/2)+_;for(let k=0,K=G.length;k<K;k++){const Z=J(G[k],mt[k],xt);W(Z.x,Z.y,u+L)}for(let k=0,K=R.length;k<K;k++){const Z=R[k];Et=yt[k];for(let pt=0,ht=Z.length;pt<ht;pt++){const A=J(Z[pt],Et[pt],xt);v?W(A.x,A.y+M[h-1].y,M[h-1].x+L):W(A.x,A.y,u+L)}}}Q(),ut();function Q(){const V=s.length/3;if(d){let et=0,L=X*et;for(let xt=0;xt<rt;xt++){const k=U[xt];st(k[2]+L,k[1]+L,k[0]+L)}et=h+g*2,L=X*et;for(let xt=0;xt<rt;xt++){const k=U[xt];st(k[0]+L,k[1]+L,k[2]+L)}}else{for(let et=0;et<rt;et++){const L=U[et];st(L[2],L[1],L[0])}for(let et=0;et<rt;et++){const L=U[et];st(L[0]+X*h,L[1]+X*h,L[2]+X*h)}}n.addGroup(V,s.length/3-V,0)}function ut(){const V=s.length/3;let et=0;bt(G,et),et+=G.length;for(let L=0,xt=R.length;L<xt;L++){const k=R[L];bt(k,et),et+=k.length}n.addGroup(V,s.length/3-V,1)}function bt(V,et){let L=V.length;for(;--L>=0;){const xt=L;let k=L-1;k<0&&(k=V.length-1);for(let K=0,Z=h+g*2;K<Z;K++){const pt=X*K,ht=X*(K+1),A=et+xt+pt,y=et+k+pt,H=et+k+ht,j=et+xt+ht;vt(A,y,H,j)}}}function W(V,et,L){c.push(V),c.push(et),c.push(L)}function st(V,et,L){wt(V),wt(et),wt(L);const xt=s.length/3,k=S.generateTopUV(n,s,xt-3,xt-2,xt-1);at(k[0]),at(k[1]),at(k[2])}function vt(V,et,L,xt){wt(V),wt(et),wt(xt),wt(et),wt(L),wt(xt);const k=s.length/3,K=S.generateSideWallUV(n,s,k-6,k-3,k-2,k-1);at(K[0]),at(K[1]),at(K[3]),at(K[1]),at(K[2]),at(K[3])}function wt(V){s.push(c[V*3+0]),s.push(c[V*3+1]),s.push(c[V*3+2])}function at(V){o.push(V.x),o.push(V.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return D_(e,n,t)}static fromJSON(t,e){const n=[];for(let o=0,r=t.shapes.length;o<r;o++){const a=e[t.shapes[o]];n.push(a)}const s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new $a[s.type]().fromJSON(s)),new js(n,t.options)}}const I_={generateTopUV:function(i,t,e,n,s){const o=t[e*3],r=t[e*3+1],a=t[n*3],c=t[n*3+1],l=t[s*3],h=t[s*3+1];return[new gt(o,r),new gt(a,c),new gt(l,h)]},generateSideWallUV:function(i,t,e,n,s,o){const r=t[e*3],a=t[e*3+1],c=t[e*3+2],l=t[n*3],h=t[n*3+1],u=t[n*3+2],d=t[s*3],f=t[s*3+1],m=t[s*3+2],_=t[o*3],g=t[o*3+1],p=t[o*3+2];return Math.abs(a-h)<Math.abs(r-l)?[new gt(r,1-c),new gt(l,1-u),new gt(d,1-m),new gt(_,1-p)]:[new gt(a,1-c),new gt(h,1-u),new gt(f,1-m),new gt(g,1-p)]}};function D_(i,t,e){if(e.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){const o=i[n];e.shapes.push(o.uuid)}else e.shapes.push(i.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}class Tn extends Js{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],o=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,o,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new Tn(t.radius,t.detail)}}class Je extends Js{constructor(t=1,e=0){const n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,s,t,e),this.type="OctahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new Je(t.radius,t.detail)}}class Di extends De{constructor(t=.5,e=1,n=32,s=1,o=0,r=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:s,thetaStart:o,thetaLength:r},n=Math.max(3,n),s=Math.max(1,s);const a=[],c=[],l=[],h=[];let u=t;const d=(e-t)/s,f=new I,m=new gt;for(let _=0;_<=s;_++){for(let g=0;g<=n;g++){const p=o+g/n*r;f.x=u*Math.cos(p),f.y=u*Math.sin(p),c.push(f.x,f.y,f.z),l.push(0,0,1),m.x=(f.x/e+1)/2,m.y=(f.y/e+1)/2,h.push(m.x,m.y)}u+=d}for(let _=0;_<s;_++){const g=_*(n+1);for(let p=0;p<n;p++){const S=p+g,M=S,v=S+n+1,D=S+n+2,T=S+1;a.push(M,v,T),a.push(v,D,T)}}this.setIndex(a),this.setAttribute("position",new ne(c,3)),this.setAttribute("normal",new ne(l,3)),this.setAttribute("uv",new ne(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Di(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class tt extends De{constructor(t=1,e=32,n=16,s=0,o=Math.PI*2,r=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:o,thetaStart:r,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const c=Math.min(r+a,Math.PI);let l=0;const h=[],u=new I,d=new I,f=[],m=[],_=[],g=[];for(let p=0;p<=n;p++){const S=[],M=p/n;let v=0;p===0&&r===0?v=.5/e:p===n&&c===Math.PI&&(v=-.5/e);for(let D=0;D<=e;D++){const T=D/e;u.x=-t*Math.cos(s+T*o)*Math.sin(r+M*a),u.y=t*Math.cos(r+M*a),u.z=t*Math.sin(s+T*o)*Math.sin(r+M*a),m.push(u.x,u.y,u.z),d.copy(u).normalize(),_.push(d.x,d.y,d.z),g.push(T+v,1-M),S.push(l++)}h.push(S)}for(let p=0;p<n;p++)for(let S=0;S<e;S++){const M=h[p][S+1],v=h[p][S],D=h[p+1][S],T=h[p+1][S+1];(p!==0||r>0)&&f.push(M,v,T),(p!==n-1||c<Math.PI)&&f.push(v,D,T)}this.setIndex(f),this.setAttribute("position",new ne(m,3)),this.setAttribute("normal",new ne(_,3)),this.setAttribute("uv",new ne(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new tt(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class ke extends De{constructor(t=1,e=.4,n=12,s=48,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:o},n=Math.floor(n),s=Math.floor(s);const r=[],a=[],c=[],l=[],h=new I,u=new I,d=new I;for(let f=0;f<=n;f++)for(let m=0;m<=s;m++){const _=m/s*o,g=f/n*Math.PI*2;u.x=(t+e*Math.cos(g))*Math.cos(_),u.y=(t+e*Math.cos(g))*Math.sin(_),u.z=e*Math.sin(g),a.push(u.x,u.y,u.z),h.x=t*Math.cos(_),h.y=t*Math.sin(_),d.subVectors(u,h).normalize(),c.push(d.x,d.y,d.z),l.push(m/s),l.push(f/n)}for(let f=1;f<=n;f++)for(let m=1;m<=s;m++){const _=(s+1)*f+m-1,g=(s+1)*(f-1)+m-1,p=(s+1)*(f-1)+m,S=(s+1)*f+m;r.push(_,g,S),r.push(g,p,S)}this.setIndex(r),this.setAttribute("position",new ne(a,3)),this.setAttribute("normal",new ne(c,3)),this.setAttribute("uv",new ne(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ke(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class Ue extends Oi{static get type(){return"MeshStandardMaterial"}constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new St(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new St(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=_c,this.normalScale=new gt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new En,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class zi extends Ue{static get type(){return"MeshPhysicalMaterial"}constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new gt(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Ne(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new St(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new St(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new St(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}}class Yr extends Oi{static get type(){return"MeshLambertMaterial"}constructor(t){super(),this.isMeshLambertMaterial=!0,this.color=new St(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new St(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=_c,this.normalScale=new gt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new En,this.combine=lc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class ar extends Fe{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new St(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class Ys extends ar{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Fe.DEFAULT_UP),this.updateMatrix(),this.groundColor=new St(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const $r=new pe,Kl=new I,Jl=new I;class au{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new gt(512,512),this.map=null,this.mapPass=null,this.matrix=new pe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new yc,this._frameExtents=new gt(1,1),this._viewportCount=1,this._viewports=[new ge(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;Kl.setFromMatrixPosition(t.matrixWorld),e.position.copy(Kl),Jl.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Jl),e.updateMatrixWorld(),$r.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix($r),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply($r)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const jl=new pe,Is=new I,Zr=new I;class U_ extends au{constructor(){super(new Ze(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new gt(4,2),this._viewportCount=6,this._viewports=[new ge(2,1,1,1),new ge(0,1,1,1),new ge(3,1,1,1),new ge(1,1,1,1),new ge(3,0,1,1),new ge(1,0,1,1)],this._cubeDirections=[new I(1,0,0),new I(-1,0,0),new I(0,0,1),new I(0,0,-1),new I(0,1,0),new I(0,-1,0)],this._cubeUps=[new I(0,1,0),new I(0,1,0),new I(0,1,0),new I(0,1,0),new I(0,0,1),new I(0,0,-1)]}updateMatrices(t,e=0){const n=this.camera,s=this.matrix,o=t.distance||n.far;o!==n.far&&(n.far=o,n.updateProjectionMatrix()),Is.setFromMatrixPosition(t.matrixWorld),n.position.copy(Is),Zr.copy(n.position),Zr.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(Zr),n.updateMatrixWorld(),s.makeTranslation(-Is.x,-Is.y,-Is.z),jl.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(jl)}}class cr extends ar{constructor(t,e,n=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new U_}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class N_ extends au{constructor(){super(new Yh(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Fn extends ar{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Fe.DEFAULT_UP),this.updateMatrix(),this.target=new Fe,this.shadow=new N_}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class cu extends ar{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}class lu{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Ql(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=Ql();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function Ql(){return performance.now()}const th=new pe;class F_{constructor(t,e,n=0,s=1/0){this.ray=new vc(t,e),this.near=n,this.far=s,this.camera=null,this.layers=new xc,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return th.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(th),this}intersectObject(t,e=!0,n=[]){return ja(t,this,n,e),n.sort(eh),n}intersectObjects(t,e=!0,n=[]){for(let s=0,o=t.length;s<o;s++)ja(t[s],this,n,e);return n.sort(eh),n}}function eh(i,t){return i.distance-t.distance}function ja(i,t,e,n){let s=!0;if(i.layers.test(t.layers)&&i.raycast(t,e)===!1&&(s=!1),s===!0&&n===!0){const o=i.children;for(let r=0,a=o.length;r<a;r++)ja(o[r],t,e,!0)}}class hu{constructor(t=1,e=0,n=0){return this.radius=t,this.phi=e,this.theta=n,this}set(t,e,n){return this.radius=t,this.phi=e,this.theta=n,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+e*e+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,n),this.phi=Math.acos(Ne(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class O_ extends e_{constructor(t=10,e=10,n=4473924,s=8947848){n=new St(n),s=new St(s);const o=e/2,r=t/e,a=t/2,c=[],l=[];for(let d=0,f=0,m=-a;d<=e;d++,m+=r){c.push(-a,0,m,a,0,m),c.push(m,0,-a,m,0,a);const _=d===o?n:s;_.toArray(l,f),f+=3,_.toArray(l,f),f+=3,_.toArray(l,f),f+=3,_.toArray(l,f),f+=3}const h=new De;h.setAttribute("position",new ne(c,3)),h.setAttribute("color",new ne(l,3));const u=new Qh({vertexColors:!0,toneMapped:!1});super(h,u),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:cc}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=cc);const nh={constitution:{name:"Constitution",icon:"❤️"},attack:{name:"Attack",icon:"⚔"},strength:{name:"Strength",icon:"💪"},defence:{name:"Defence",icon:"🛡"},woodcutting:{name:"Woodcutting",icon:"🪓"},mining:{name:"Mining",icon:"⛏"}},In={bronze_hatchet:{name:"Bronze Hatchet",icon:"🪓",stackable:!1,slot:"hatchet"},bronze_pickaxe:{name:"Bronze Pickaxe",icon:"⛏",stackable:!1,slot:"pickaxe"},bronze_sword:{name:"Bronze Sword",icon:"⚔",stackable:!1,slot:"weapon"},whisper_logs:{name:"Whisper Logs",icon:"🪵",stackable:!0},copper_ore:{name:"Copper Ore",icon:"🟠",stackable:!0},tin_ore:{name:"Tin Ore",icon:"⚪",stackable:!0},camp_rations:{name:"Camp Rations",icon:"🍖",stackable:!0},yeti_fur:{name:"Yeti Fur",icon:"🧣",stackable:!0},frost_claw:{name:"Frost Claw",icon:"🧊",stackable:!0},yeti_hide:{name:"Yeti Hide",icon:"🧥",stackable:!0},frost_fang:{name:"Frost Fang",icon:"🦷",stackable:!0},yeti_bone:{name:"Yeti Bone",icon:"🦴",stackable:!0},rime_shard:{name:"Rime Shard",icon:"❄",stackable:!0},frost_sword:{name:"Frostfang Blade",icon:"⚔",stackable:!1,slot:"weapon"},frost_shield:{name:"Rimehide Shield",icon:"🛡",stackable:!1,slot:"shield"},frost_bow:{name:"Icebone Bow",icon:"🏹",stackable:!1,slot:"weapon"},frost_hammer:{name:"Glacial Maul",icon:"🔨",stackable:!1,slot:"weapon"},frost_spear:{name:"Frostspine Spear",icon:"🔱",stackable:!1,slot:"weapon"},frost_chest:{name:"Yeti Hide Hauberk",icon:"🦺",stackable:!1,slot:"chest"},frost_greaves:{name:"Frost Greaves",icon:"🦵",stackable:!1,slot:"greaves"},frost_legs:{name:"Yeti Leg Wraps",icon:"👖",stackable:!1,slot:"legs"},frost_boots:{name:"Rimehide Boots",icon:"👢",stackable:!1,slot:"boots"},orc_tooth:{name:"Orc Tooth",icon:"🦷",stackable:!0},scout_leather:{name:"Scout Leather",icon:"🦺",stackable:!0}},z_=[{id:"weapon",label:"Weapon"},{id:"shield",label:"Shield"},{id:"chest",label:"Chest"},{id:"greaves",label:"Greaves"},{id:"legs",label:"Legs"},{id:"boots",label:"Boots"},{id:"hatchet",label:"Hatchet"},{id:"pickaxe",label:"Pickaxe"}],uu=[{id:"frost_sword",name:"Frostfang Blade",blurb:"A row of yeti claws fused along a bone spine, edged in rime.",cost:[{id:"frost_claw",qty:2},{id:"frost_fang",qty:1},{id:"yeti_bone",qty:1}]},{id:"frost_shield",name:"Rimehide Shield",blurb:"A hide disc rimmed with fur, its boss a frozen claw-knuckle.",cost:[{id:"yeti_hide",qty:2},{id:"yeti_fur",qty:2},{id:"frost_claw",qty:1}]},{id:"frost_bow",name:"Icebone Bow",blurb:"Paired yeti bones flexed with hide, strung on a claw tendon.",cost:[{id:"yeti_bone",qty:2},{id:"yeti_hide",qty:1},{id:"frost_claw",qty:1}]},{id:"frost_hammer",name:"Glacial Maul",blurb:"A bone haft capped with ice-bound hide and driving claws.",cost:[{id:"yeti_bone",qty:2},{id:"frost_claw",qty:2},{id:"rime_shard",qty:1}]},{id:"frost_spear",name:"Frostspine Spear",blurb:"A long bone shaft tipped with a frost fang and claw barbs.",cost:[{id:"yeti_bone",qty:1},{id:"frost_fang",qty:2},{id:"frost_claw",qty:1}]},{id:"frost_chest",name:"Yeti Hide Hauberk",blurb:"A hide vest under a frost-yeti mantle, ice shards at the shoulders.",cost:[{id:"yeti_hide",qty:3},{id:"yeti_fur",qty:3},{id:"rime_shard",qty:1}]},{id:"frost_greaves",name:"Frost Greaves",blurb:"Shin hides with fur cuffs and a ridge of claws down each plate.",cost:[{id:"yeti_hide",qty:2},{id:"yeti_fur",qty:1},{id:"rime_shard",qty:1}]},{id:"frost_legs",name:"Yeti Leg Wraps",blurb:"Fur chaps bound over hide, cut from the yeti’s haunches.",cost:[{id:"yeti_hide",qty:2},{id:"yeti_fur",qty:2}]},{id:"frost_boots",name:"Rimehide Boots",blurb:"Fur-lined hide boots whose toes are the yeti’s own claws.",cost:[{id:"yeti_fur",qty:2},{id:"yeti_hide",qty:1},{id:"frost_claw",qty:1}]}];function lr(i,t){return i.filter(e=>e.id===t).reduce((e,n)=>e+n.qty,0)}function du(i,t){return lr(i.inventory,t)>0?!0:Object.values(i.equipped).includes(t)}function fu(i,t){return du(i,t.id)?!1:t.cost.every(e=>lr(i.inventory,e.id)>=e.qty)}function ih(i){let t=0;return i.equipped.shield==="frost_shield"&&(t+=3),i.equipped.chest==="frost_chest"&&(t+=3),i.equipped.greaves==="frost_greaves"&&(t+=2),i.equipped.legs==="frost_legs"&&(t+=2),i.equipped.boots==="frost_boots"&&(t+=1),t}function B_(i){return i==="frost_hammer"?4:i==="frost_sword"||i==="frost_spear"?3:i==="frost_bow"?2:0}function k_(i){return i==="frost_bow"?2.2:i==="frost_spear"?.4:0}function Yo(i){let t=0;for(let e=1;e<i;e++)t+=Math.floor(e+300*Math.pow(2,e/7));return Math.floor(t/4)}function H_(i){let t=1;for(;t<99&&Yo(t+1)<=i;)t++;return t}function Lo(){return{version:1,x:0,z:2,hp:100,maxHp:100,focus:100,stamina:100,skills:{constitution:{level:10,xp:Yo(10)},attack:{level:1,xp:0},strength:{level:1,xp:0},defence:{level:1,xp:0},woodcutting:{level:1,xp:0},mining:{level:1,xp:0}},inventory:[{id:"camp_rations",qty:5}],equipped:{weapon:"bronze_sword",shield:null,chest:null,greaves:null,legs:null,boots:null,hatchet:"bronze_hatchet",pickaxe:"bronze_pickaxe"}}}function se(i,t={}){return new zi({color:i,roughness:t.roughness??.88,metalness:t.metalness??.02,flatShading:t.flatShading??!0,envMapIntensity:t.envMapIntensity??.55,...t})}function pu(i,t=1.07,e=660768){const n=new w(i.geometry,new ue({color:e,side:He,depthWrite:!1}));n.scale.setScalar(t),n.name="outline",i.add(n)}function xn(i,t=10){return new Ks(i.map(([e,n])=>new gt(e,n)),t)}function Qa(i,t,e,n,s,o,r,a=0,c=0){const l=[],h=(f,m,_)=>{l.push(Math.cos(f)*_,m,a+Math.sin(f)*_)};for(let f=0;f<n;f++){const m=(f+c)/n*Math.PI*2,_=(f+1+c)/n*Math.PI*2,g=(m+_)/2,p=f*7%5/5,S=s*(.7+p*.55);h(m,t,e),h(_,t,e),h(g,t-S,e*o)}const u=new De;u.setAttribute("position",new ne(l,3)),u.computeVertexNormals();const d=new w(u,r);d.castShadow=!0,i.add(d)}function xe(i,t,e,n,s,o,r,a,c=0){Qa(i,t+s*.1,e*.98,n,s*1.18,o*.96,a,c,.5),Qa(i,t,e,n,s,o,r,c)}function sh(i,t,e,n,s,o,r,a,c=0){const l=new w(new tt(.5,10,8),a);l.scale.set(s,o,r),l.position.set(t,e,n),l.rotation.z=c,i.add(l)}function Kr(i,t,e,n,s,o,r,a=.3,c=0){const l=new dt;l.position.set(t,e,n),l.rotation.order="ZXY",l.rotation.z=c,l.rotation.x=-a;const h=o*.55,u=new w(new Xt(o,h,s*.55,6),r);u.position.y=-s*.275,u.castShadow=!0,l.add(u);const d=new dt;d.position.y=-s*.55,d.rotation.x=-.72;const f=new w(new ye(h,s*.5,6),r);f.rotation.x=Math.PI,f.position.y=-s*.25,f.castShadow=!0,d.add(f),l.add(d),i.add(l)}function Po(i,t,e,n,s,o,r,a,c=1){for(let l=0;l<o;l++){const h=l/o*Math.PI*2+c,u=s*(.35+(l*5+c)%4/4*.75),d=r*(.6+l*3%5/5*.9),f=new w(new Je(d,0),a);f.position.set(t+Math.cos(h)*u,e+(l%3-1)*r*.3,n+Math.sin(h)*u),f.rotation.set(h*.7,h,(l%5-2)*.25),f.scale.set(.42,1.5+l*7%4*.35,.42),f.castShadow=!0,i.add(f)}}const ie={bodyX:.22,headX:-.12,armX:-.18,armZ:.22,forearmX:-.34,legX:.05,kneeX:.13,footX:-.04};function mu(){const i=new dt;i.name="yeti";const t=se(14083056,{roughness:.96,sheen:.3,sheenColor:new St(12900328),sheenRoughness:.8}),e=se(11124176,{roughness:.97,sheen:.18,sheenColor:new St(10269382)}),n=se(8229286,{roughness:.97}),s=se(7175306,{roughness:.8,flatShading:!1}),o=se(2699578,{roughness:.85,flatShading:!1}),r=se(1316378,{roughness:.3,metalness:.3,flatShading:!1}),a=se(1776417,{roughness:.62,flatShading:!1}),c=se(4004386,{roughness:.9,flatShading:!1}),l=se(15919830,{roughness:.3,flatShading:!1}),h=se(12118271,{roughness:.18,metalness:.28,emissive:4892872,emissiveIntensity:.22}),u=se(14083056,{roughness:.96,side:Ee,sheen:.26,sheenColor:new St(12900328)}),d=se(11913435,{roughness:.97,side:Ee}),f=se(11584470,{roughness:.97,side:Ee}),m=se(9611454,{roughness:.97,side:Ee}),_=se(9413818,{roughness:.97,side:Ee}),g=se(7637407,{roughness:.98,side:Ee}),p=new w(new Rn(.85,20),new ue({color:0,transparent:!0,opacity:.44,depthWrite:!1}));p.name="contactShadow",p.rotation.x=-Math.PI/2,p.position.y=.03,i.add(p);const S=W=>{const st=new dt;st.name=W<0?"yetiLegL":"yetiLegR",st.position.set(W*.3,1.18,0),st.rotation.x=ie.legX,st.rotation.z=W*.04;const vt=new w(new tt(.27,12,10),t);vt.scale.set(1,1.08,1.12),vt.position.set(0,-.05,-.02),vt.castShadow=!0,st.add(vt);const wt=new w(xn([[.25,.02],[.26,-.14],[.22,-.32],[.19,-.48]],12),t);wt.castShadow=!0,st.add(wt),xe(st,-.16,.26,15,.2,1.05,u,d),xe(st,-.34,.225,14,.18,1.08,f,m),Po(st,0,.02,-.12,.15,4,.045,h,W+1);const at=new dt;at.name=W<0?"yetiShinL":"yetiShinR",at.position.set(0,-.5,.03),at.rotation.x=ie.kneeX;const V=new w(new tt(.2,10,8),e);V.scale.set(1,.95,1.05),V.castShadow=!0,at.add(V);const et=new w(xn([[.2,.02],[.21,-.12],[.17,-.3],[.145,-.44]],12),n);et.castShadow=!0,at.add(et),xe(at,-.14,.205,14,.17,1.08,f,m),xe(at,-.32,.17,13,.15,1.1,_,g);const L=new dt;L.name=W<0?"yetiFootL":"yetiFootR",L.position.set(0,-.46,.02),L.rotation.x=ie.footX;const xt=new w(new tt(.15,10,8),e);xt.position.set(0,-.02,0),L.add(xt);const k=new w(new tt(.2,12,10),t);k.scale.set(1.05,.5,1.5),k.position.set(0,-.09,.12),k.castShadow=!0,L.add(k);const K=new w(new tt(.17,10,8),o);K.scale.set(.95,.2,1.45),K.position.set(0,-.15,.13),L.add(K),xe(L,0,.17,12,.13,1.3,f,m);for(let Z=0;Z<4;Z++){const pt=(Z-1.5)*.095,ht=new w(new tt(.065,8,6),t);ht.scale.set(1,.85,1.3),ht.position.set(pt,-.1,.3),ht.castShadow=!0,L.add(ht);const A=new w(new tt(.04,7,5),o);A.scale.set(1,.5,1),A.position.set(pt,-.15,.3),L.add(A),Kr(L,pt,-.11,.35,.14,.021,r,1.1,pt*1.2)}return at.add(L),st.add(at),st};i.add(S(-1)),i.add(S(1));const M=new dt;M.name="yetiBody",M.position.set(0,1.14,-.02),M.rotation.x=ie.bodyX,i.add(M);const v=new w(xn([[.3,-.12],[.42,.04],[.47,.24],[.52,.46],[.56,.66],[.5,.82],[.3,.95]],14),t);v.scale.set(1.24,1,.9),v.castShadow=!0,pu(v,1.04,1186854),M.add(v);const D=new w(new tt(.42,14,12),t);D.scale.set(1.32,.92,.7),D.position.set(0,.6,.18),D.castShadow=!0,M.add(D);const T=new w(new tt(.38,12,10),e);T.scale.set(1.2,1,.7),T.position.set(0,.2,.18),M.add(T);const C=new w(new tt(.34,12,10),t);C.scale.set(1.55,.78,1),C.position.set(0,.82,-.1),C.castShadow=!0,M.add(C);for(const W of[-1,1]){const st=new w(new tt(.29,12,10),t);st.scale.set(1.05,.98,1.05),st.position.set(W*.44,.74,.02),st.castShadow=!0,M.add(st);const vt=new w(new tt(.26,10,8),e);vt.scale.set(.9,1.5,.85),vt.position.set(W*.56,.42,0),M.add(vt);const wt=new dt;wt.position.set(W*.46,.78,.02),wt.rotation.z=W*.55,M.add(wt),xe(wt,.1,.27,14,.22,1.14,u,d),xe(wt,-.08,.29,14,.2,1.1,u,d),Po(wt,0,.16,-.04,.18,5,.055,h,W+4)}const P=new dt;P.scale.set(1.24,1,.9),M.add(P),xe(P,.8,.51,22,.24,1.08,u,d,-.02),xe(P,.68,.55,22,.18,1.04,u,d,-.01),xe(P,.56,.56,24,.24,1.05,u,d),xe(P,.43,.54,22,.18,1.03,f,m),xe(P,.3,.5,22,.24,1.05,f,m),xe(P,.17,.47,20,.18,1.04,_,g),xe(P,.04,.44,20,.22,1.07,_,g);for(const[W,st,vt,wt,at,V]of[[-.42,.88,-.2,.15,.35,.45],[.42,.88,-.2,.15,.35,-.45],[0,.94,-.32,.17,.25,0],[-.2,.6,-.44,.12,.5,.25],[.2,.6,-.44,.12,.5,-.25]]){const et=new w(new Je(wt,0),h);et.position.set(W,st,vt),et.rotation.set(at,.4,V),et.scale.set(.45,1.6,.4),et.castShadow=!0,M.add(et)}for(const[W,st,vt,wt]of[[-.32,.12,.4,.16],[.02,.05,.46,.21],[.34,.14,.38,.13],[-.54,.34,.26,.12],[.56,.32,.28,.14],[-.16,-.02,.38,.14]]){const at=new w(new ye(.026,wt,5),h);at.rotation.x=Math.PI,at.position.set(W,st-wt/2,vt),at.castShadow=!0,M.add(at)}const E=new w(new Xt(.24,.32,.22,12),e);E.position.set(0,.96,.05),E.rotation.x=-.18,M.add(E);const x=W=>{const st=new dt;st.name=W<0?"yetiArmL":"yetiArmR",st.position.set(W*.58,.72,.03),st.rotation.x=ie.armX,st.rotation.z=W*ie.armZ;const vt=new w(new tt(.24,12,10),t);vt.position.set(0,.02,0),vt.castShadow=!0,st.add(vt);const wt=new w(xn([[.23,.04],[.24,-.12],[.2,-.34],[.175,-.54]],12),t);wt.castShadow=!0,st.add(wt),xe(st,.04,.265,16,.22,1.12,u,d),xe(st,-.14,.235,15,.19,1.08,u,d),Po(st,0,.08,-.11,.16,4,.05,h,W+2),xe(st,-.38,.195,14,.17,1.1,f,m);const at=new dt;at.name=W<0?"yetiForearmL":"yetiForearmR",at.position.set(0,-.58,.02),at.rotation.x=ie.forearmX;const V=new w(new tt(.19,10,8),e);V.castShadow=!0,at.add(V);const et=new w(xn([[.2,.02],[.22,-.12],[.195,-.3],[.17,-.46]],12),e);et.castShadow=!0,at.add(et),xe(at,-.14,.2,14,.17,1.08,u,d),xe(at,-.36,.172,13,.16,1.14,f,m);const L=new dt;L.name=W<0?"yetiHandL":"yetiHandR",L.position.set(0,-.5,.02);const xt=new w(new tt(.15,10,8),e);L.add(xt);const k=new w(new tt(.19,12,10),t);k.scale.set(1.2,.92,.92),k.position.set(0,-.1,.03),k.castShadow=!0,L.add(k);const K=new w(new tt(.13,10,8),o);K.scale.set(1.2,.8,.5),K.position.set(0,-.14,.11),L.add(K),xe(L,.02,.18,13,.11,1.18,f,m);for(let ht=0;ht<4;ht++){const A=(ht-1.5)*.108,y=1-Math.abs(ht-1.5)*.1,H=new w(new tt(.06,8,6),t);H.position.set(A,-.165,.08),H.castShadow=!0,L.add(H);const j=new w(new ye(.053,.17,6),e);j.rotation.x=Math.PI-.25,j.position.set(A,-.245,.104),j.castShadow=!0,L.add(j);const ct=new w(new tt(.029,7,5),o);ct.scale.set(1.1,1.25,.22),ct.position.set(A,-.238,.138),L.add(ct),Kr(L,A,-.3,.12,.185*y,.021,r,.26,A*1.5)}const Z=-W*.2,pt=new w(new tt(.07,8,6),t);return pt.scale.set(1,1.1,1),pt.position.set(Z,-.09,.04),pt.castShadow=!0,L.add(pt),Kr(L,Z-W*.03,-.16,.06,.145,.019,r,.38,-W*.55),at.add(L),st.add(at),st};M.add(x(-1)),M.add(x(1));const R=new dt;R.name="yetiHead",R.position.set(0,1.06,.1),R.rotation.x=ie.headX,M.add(R);const F=new w(new tt(.32,14,12),t);F.scale.set(1,.95,1.12),F.position.set(0,.02,-.02),F.castShadow=!0,R.add(F),sh(R,0,.2,-.16,.42,.26,.34,n),xe(R,.2,.27,16,.22,1.2,u,d,-.08),xe(R,.1,.3,18,.24,1.3,u,d,-.06),xe(R,-.05,.31,18,.24,1.2,f,m,-.04),xe(R,-.16,.28,16,.2,1.3,u,d,.02),Po(R,0,.19,-.2,.18,5,.038,h,3),xe(R,.28,.16,10,.14,1.1,u,d,-.12),xe(R,.2,.2,12,.16,1.15,u,d,-.14),Qa(R,.25,.2,11,.12,1.08,u,.06);const U=new w(new tt(.22,12,10),t);U.scale.set(1.25,.44,.6),U.position.set(0,.13,.16),U.castShadow=!0,R.add(U);const G=W=>{const st=new w(new tt(.075,10,8),o);st.scale.set(1.3,1,.6),st.position.set(W,.04,.25),R.add(st);const vt=new w(new tt(.044,10,8),se(16761418,{emissive:16750848,emissiveIntensity:1.05,roughness:.2,flatShading:!1}));vt.scale.set(1.15,.68,.7),vt.position.set(W,.04,.285),vt.name="yetiEye",R.add(vt);const wt=new w(new Te(.006,.03,3,6),se(656900,{flatShading:!1}));wt.position.set(W,.042,.312),R.add(wt),sh(R,W*1.12,.03,.15,.34,.26,.3,n,Math.sign(W)*.3);const at=new w(new tt(.075,8,6),t);at.scale.set(1.3,.56,.5),at.position.set(W,.098,.235),at.rotation.z=Math.sign(W)*.55,R.add(at);const V=new cr(16750848,.3,1.4);V.name="yetiEyeLight",V.position.set(W,.04,.38),R.add(V)};G(-.125),G(.125);const J=new w(new tt(.1,10,8),t);J.scale.set(1.1,.85,1.7),J.position.set(0,.04,.24),R.add(J);const X=new w(new tt(.17,12,10),n);X.scale.set(.95,.78,1.2),X.position.set(0,-.05,.28),X.castShadow=!0,R.add(X);for(const W of[0,.055]){const st=new w(new Vt(.01,.16-W*.4,.01),o);st.position.set(-.235+W,.03-W*.3,.15+W*.35),st.rotation.set(.3,-.55,-.6),R.add(st)}const rt=new w(new tt(.045,10,8),a);rt.scale.set(1.4,.85,.8),rt.position.set(0,.005,.43),R.add(rt);for(const W of[-1,1]){const st=new w(new tt(.013,7,5),se(526348,{flatShading:!1}));st.position.set(W*.028,-.012,.47),R.add(st)}const $=new w(new tt(.12,12,10),c);$.scale.set(1.08,.9,.8),$.position.set(0,-.23,.26),R.add($);const mt=new w(new tt(.07,10,8),c);mt.scale.set(1,.35,1.5),mt.position.set(0,-.27,.29),R.add(mt);const yt=new w(new tt(.15,12,10),o);yt.scale.set(.94,.26,1.1),yt.position.set(0,-.115,.3),R.add(yt);const Et=new w(new tt(.15,12,10),s);Et.scale.set(.95,.44,1.15),Et.position.set(0,-.33,.25),Et.rotation.x=.28,Et.castShadow=!0,R.add(Et);const Gt=new w(new tt(.11,10,8),e);Gt.scale.set(1.1,.8,.9),Gt.position.set(0,-.38,.14),R.add(Gt);const Yt=(W,st,vt,wt,at,V)=>{const et=new w(new ye(at,wt,6),l);et.rotation.x=V?Math.PI:0,et.position.set(W,st+(V?-wt/2:wt/2),vt),R.add(et)};Yt(-.075,-.15,.35,.11,.023,!0),Yt(.075,-.15,.35,.11,.023,!0);for(let W=0;W<5;W++)Yt((W-2)*.033,-.155,.375,.05,.012,!0);Yt(-.1,-.285,.33,.095,.021,!1),Yt(.1,-.285,.33,.095,.021,!1);for(let W=0;W<5;W++)Yt((W-2)*.031,-.29,.355,.045,.011,!1);for(const W of[-1,1]){const st=new w(new tt(.07,10,8),t);st.scale.set(.85,1,.4),st.position.set(W*.245,.25,-.11),st.rotation.z=W*.3,st.castShadow=!0,R.add(st);const vt=new w(new tt(.042,8,6),n);vt.scale.set(.7,.85,.4),vt.position.set(W*.245,.248,-.075),R.add(vt)}const Q=new ue({color:14087935,transparent:!0,opacity:.2,depthWrite:!1}),ut=new dt;ut.name="yetiBreath",ut.position.set(0,-.24,.44);for(let W=0;W<4;W++){const st=new w(new Tn(.055+W*.026,0),Q);st.position.set((W%2?1:-1)*.018*W,-W*.014,W*.082),ut.add(st)}R.add(ut);for(let W=0;W<3;W++){const st=new w(new Tn(.06+W*.028,0),new ue({color:12118271,transparent:!0,opacity:.2-W*.045,depthWrite:!1}));st.position.set((W-1)*.045,-.24,.78+W*.11),st.name="yetiBreathMist",R.add(st)}const bt=new w(new Xt(.8,.9,2.4,10),new ue({visible:!1}));return bt.position.y=1.2,bt.name="hit",i.add(bt),i.scale.setScalar(1.15),i}function gu(){const i=new dt;i.name="orc";const t=se(7179330,{roughness:.72,sheen:.12,sheenColor:new St(8034376),flatShading:!0}),e=se(4875304,{roughness:.78,flatShading:!0}),n=se(6044194,{roughness:.78,flatShading:!0}),s=se(8016688,{roughness:.7,flatShading:!0}),o=se(3810324,{roughness:.84,flatShading:!0}),r=se(12887418,{roughness:.94,sheen:.16,sheenColor:new St(13150328),flatShading:!0}),a=se(9269320,{roughness:.95,flatShading:!0}),c=se(2764336,{roughness:.92,flatShading:!0}),l=se(1841696,{roughness:.96,flatShading:!0}),h=se(13949666,{metalness:.78,roughness:.22,flatShading:!0}),u=se(4861972,{roughness:.88,flatShading:!0}),d=se(15986402,{roughness:.38,flatShading:!1}),f=se(2759696,{roughness:.92,flatShading:!0}),m=(at,V,et)=>(at.castShadow=!0,at.receiveShadow=!0,et&&pu(at,et,659976),V.add(at),at),_=(at,V,et,L,xt,k,K,Z=.15)=>{for(let pt=0;pt<k;pt++){const ht=pt/k*Math.PI*2+.2,A=(pt%3-1)*.18,y=new w(new ye(K*.48,K*.85,5),pt%3===0?a:r);y.position.set(V+Math.cos(ht)*xt,et+A*K*.25,L+Math.sin(ht)*xt),y.lookAt(V,et-Z,L),y.rotateX(Math.PI),y.castShadow=!0,at.add(y)}},g=new w(new Rn(.4,18),new ue({color:0,transparent:!0,opacity:.4,depthWrite:!1}));g.name="contactShadow",g.rotation.x=-Math.PI/2,g.position.y=.03,i.add(g);const p=at=>{const V=new dt;V.name=at<0?"orcLegL":"orcLegR",V.position.set(at*.18,.8,0);const et=new w(xn([[.11,.02],[.125,-.1],[.11,-.22],[.09,-.34]],10),c);m(et,V);const L=new dt;L.name=at<0?"orcShinL":"orcShinR",L.position.set(0,-.36,0);const xt=new w(new tt(.085,9,7),c);m(xt,L);const k=new w(xn([[.085,0],[.09,-.08],[.08,-.16]],10),c);m(k,L);const K=new w(xn([[.095,.02],[.1,-.08],[.092,-.2],[.078,-.3]],10),s);K.position.set(0,-.12,.01),m(K,L,1.04);for(const ht of[-.08,-.18,-.26]){const A=new w(new Vt(.2,.018,.016),o);A.position.set(0,ht-.12,.02),A.rotation.z=.35,L.add(A)}_(L,0,-.08,.01,.1,12,.055,.05);const Z=new dt;Z.name=at<0?"orcFootL":"orcFootR",Z.position.set(0,-.36,0);const pt=new w(new Te(.06,.14,4,8),o);return pt.rotation.x=Math.PI/2,pt.position.set(0,0,.1),pt.scale.set(1.15,1,.65),m(pt,Z),L.add(Z),V.add(L),V};i.add(p(-1)),i.add(p(1));const S=new w(new Xt(.22,.25,.2,10),c);S.position.y=.78,m(S,i);const M=new dt;M.name="orcBody",M.position.set(0,1.12,0),i.add(M);const v=new w(xn([[.24,-.3],[.27,-.12],[.26,.08],[.24,.26]],12),n);m(v,M,1.06);const D=new w(new Vt(.36,.34,.05),s);D.position.set(0,.04,.22),m(D,M);const T=new w(new Xt(.28,.28,.07,10),o);T.position.y=.88,m(T,i);const C=new w(new Vt(.09,.055,.04),h);C.position.set(0,.88,.28),i.add(C);const P=(at,V)=>{const et=new w(new Vt(.055,.52,.03),o);et.position.set(0,.02,V),et.rotation.z=at,M.add(et);for(const L of[-.16,.16]){const xt=new w(new tt(.014,5,4),h);xt.position.set(Math.sin(at)*L*.12,.02+Math.cos(at)*L,V+.02),M.add(xt)}};P(.5,.26),P(-.5,.26),P(.5,-.26),P(-.5,-.26);const E=new w(new Je(.055,0),h);E.scale.set(1.2,.85,.4),E.position.set(0,.02,.29),M.add(E);for(const at of[-1,1]){const V=new w(new tt(.11,10,8),t);V.position.set(at*.32,.24,0),m(V,M)}_(M,0,.3,0,.22,22,.09,.05),_(M,0,.34,0,.18,16,.07,-.1);const x=at=>{const V=new dt;V.name=at<0?"orcArmL":"orcArmR",V.position.set(at*.32,.26,.02),V.rotation.z=at*.18,V.rotation.x=at>0?-.32:-.1;const et=new w(xn([[.095,.02],[.1,-.1],[.088,-.22],[.075,-.32]],10),t);m(et,V);const L=new dt;L.name=at<0?"orcForearmL":"orcForearmR",L.position.set(0,-.34,0),L.rotation.x=at>0?-.42:-.28;const xt=new w(xn([[.078,.02],[.082,-.08],[.07,-.18],[.058,-.26]],10),n);m(xt,L,1.03),_(L,0,0,0,.082,10,.05,.05);const k=new dt;k.name=at<0?"orcHandL":"orcHandR",k.position.set(0,-.28,.02);const K=new w(new tt(.058,9,7),t);K.scale.set(.85,1,.95),m(K,k);for(let pt=0;pt<4;pt++){const ht=new w(new Te(.014,.048,3,5),t);ht.position.set((pt-1.5)*.026,-.052,.018),ht.rotation.x=.35,k.add(ht)}const Z=new w(new Te(.014,.04,3,5),t);return Z.position.set(at*.048,-.018,.03),Z.rotation.set(.55,0,at*.65),k.add(Z),L.add(k),V.add(L),V};M.add(x(-1));const R=x(1);M.add(R);const F=new w(new Xt(.09,.11,.2,8),t);F.position.set(0,1.46,.005),m(F,i);const U=new dt;U.name="orcHead",U.position.set(0,1.72,.008);const G=new w(new tt(.185,12,10),t);G.scale.set(1.02,1.06,.92),m(G,U,1.08);const J=new w(new tt(.145,10,8),e);J.scale.set(1.18,.38,.72),J.position.set(0,.112,.1),m(J,U);for(const at of[-1,1]){const V=new w(new Vt(.07,.016,.02),e);V.rotation.z=at*-.22,V.position.set(at*.05,.082,.168),U.add(V)}const X=new w(new Te(.022,.055,4,7),t);X.rotation.x=.4,X.position.set(0,.028,.16),U.add(X);const rt=new w(new tt(.042,8,6),t);rt.scale.set(1.15,.75,1.05),rt.position.set(0,-.03,.178),U.add(rt);const $=new w(new tt(.14,11,9),e);$.scale.set(1.02,.7,1),$.position.set(0,-.12,.08),m($,U);const mt=new w(new tt(.045,8,6),e);mt.position.set(0,-.16,.14),U.add(mt);const yt=new w(new Te(.01,.05,3,6),se(3808280,{flatShading:!0}));yt.rotation.z=Math.PI/2,yt.position.set(0,-.09,.185),U.add(yt);for(const at of[-1,1]){const V=new w(new ye(.02,.11,6),d);V.position.set(at*.052,-.085,.188),V.rotation.set(.7,0,at*.28),U.add(V)}for(const at of[-1,1]){const V=new w(new tt(.04,8,6),e);V.scale.set(1.1,.8,.55),V.position.set(at*.068,.03,.145),U.add(V);const et=new w(new tt(.022,8,6),se(14998724,{roughness:.4,flatShading:!1}));et.scale.set(1.1,.8,.65),et.position.set(at*.068,.03,.158),U.add(et);const L=new w(new tt(.012,7,5),se(3809808,{roughness:.35,flatShading:!1}));L.position.set(at*.069,.03,.17),U.add(L)}for(const at of[-1,1]){const V=new w(new ye(.04,.14,5),t);V.position.set(at*.22,.05,-.01),V.rotation.z=at*-1.15,V.rotation.x=-.2,m(V,U)}const Et=new w(new tt(.175,10,8,0,Math.PI*2,0,Math.PI*.48),l);Et.position.set(0,.07,-.02),m(Et,U);const Gt=[[0,.26,.02,1.2],[-.07,.24,.05,1.05],[.07,.24,.05,1.05],[-.12,.2,0,.95],[.12,.2,0,.95],[0,.22,-.1,1.1],[-.08,.18,-.08,.9],[.08,.18,-.08,.9],[-.04,.27,-.02,1.15],[.04,.27,-.02,1.15]];for(const[at,V,et,L]of Gt){const xt=new w(new ye(.035*L,.11*L,5),l);xt.position.set(at,V,et),xt.rotation.x=.25+et*.8,xt.rotation.z=-at*.6,U.add(xt)}const Yt=new w(new Vt(.18,.012,.01),f);Yt.position.set(0,.072,.16),U.add(Yt),i.add(U);const Q=new dt;Q.name="orcSpear",Q.position.set(.02,-.02,.03),Q.rotation.set(-.88,.08,.08),Q.userData.rest={x:.02,y:-.02,z:.03,rx:-.88,ry:.08,rz:.08};const ut=new w(new Xt(.018,.022,2.15,6),u);ut.position.y=-.95,m(ut,Q);const bt=new w(new Je(.11,0),h);bt.scale.set(.32,2.2,.22),bt.position.y=-2.12,m(bt,Q);const W=new w(new Xt(.03,.022,.06,6),h);W.position.y=-1.92,Q.add(W);const st=new w(new ye(.022,.07,4),h);st.position.y=.14,Q.add(st),(R.getObjectByName("orcHandR")??R).add(Q);const wt=new w(new Xt(.45,.5,1.9,8),new ue({visible:!1}));return wt.position.y=.95,wt.name="hit",i.add(wt),i}function Ve(i,t={}){return new zi({color:i,roughness:t.roughness??.78,metalness:t.metalness??.04,flatShading:t.flatShading??!0,envMapIntensity:t.envMapIntensity??.7,...t})}function Ht(i,t){return t.castShadow=!0,i.add(t),t}const Bt={fur:()=>Ve(14083056,{roughness:.96,sheen:.28,sheenColor:new St(12900328)}),furMid:()=>Ve(11124176,{roughness:.97}),hide:()=>Ve(7175306,{roughness:.82,flatShading:!1}),hideDark:()=>Ve(2699578,{roughness:.86,flatShading:!1}),claw:()=>Ve(1316378,{roughness:.3,metalness:.32,flatShading:!1}),bone:()=>Ve(15260868,{roughness:.48,flatShading:!1}),boneDark:()=>Ve(12890256,{roughness:.62}),ice:()=>Ve(12118271,{roughness:.16,metalness:.28,emissive:4892872,emissiveIntensity:.28}),amber:()=>Ve(16761418,{emissive:16750848,emissiveIntensity:.7,roughness:.28,flatShading:!1}),wrap:()=>Ve(3810324,{roughness:.9})};function bn(i,t,e=.35){const n=new dt,s=t*.55,o=new w(new Xt(t,s,i*.55,6),Bt.claw());o.position.y=-i*.275,Ht(n,o);const r=new dt;r.position.y=-i*.55,r.rotation.x=-.72;const a=new w(new ye(s,i*.5,6),Bt.claw());return a.rotation.x=Math.PI,a.position.y=-i*.25,Ht(r,a),n.add(r),n.rotation.x=-e,n}function mi(i){const t=new w(new Tn(i,0),Bt.fur());return t.scale.set(1.5,.55,1.05),t.castShadow=!0,t}function _u(i,t){const e=new dt,n=new w(new Xt(t*.92,t,i,8),Bt.bone());n.position.y=i*.5,Ht(e,n);for(let o=0;o<6;o++){const r=new w(new ke(t*1.12,.006,5,10),Bt.wrap());r.rotation.x=Math.PI/2,r.position.y=.03+o*.028,e.add(r)}const s=new w(new tt(t*1.35,8,6),Bt.boneDark());return s.scale.set(1,1.2,1),Ht(e,s),e}function G_(i,t,e,n,s){for(let o=0;o<e;o++){const r=o/e*Math.PI*2,a=new w(new Je(s,0),Bt.ice());a.position.set(Math.cos(r)*n,t,Math.sin(r)*n),a.rotation.set(.4,r,.3),a.scale.set(.4,1.7,.4),Ht(i,a)}}function vu(){const i=new dt,t=_u(.16,.024);t.position.y=-.02,i.add(t);const e=new w(new tt(.034,10,8),Bt.amber());e.name="toolHeel",e.position.y=-.1,Ht(i,e);for(const r of[-1,1]){const a=bn(.2,.022,.15);a.rotation.z=r*1.35,a.position.set(r*.03,.08,0),i.add(a)}const n=mi(.05);n.position.set(0,.09,0),i.add(n);const s=new w(new Vt(.028,.54,.03),Bt.bone());s.position.y=.38,Ht(i,s);for(let r=0;r<5;r++){const a=r/4,c=new w(new ye(.05-a*.016,.16-a*.018,6),Bt.claw());c.rotation.z=Math.PI,c.position.set(.022,.2+r*.1,0),c.rotation.x=.1,Ht(i,c);const l=new w(new Vt(.02,.11,.04),Bt.ice());l.position.set(-.012,.2+r*.1,0),i.add(l)}const o=new w(new ye(.032,.14,6),Bt.claw());return o.name="toolEdge",o.position.y=.76,Ht(i,o),i}function xu(){const i=new dt,t=_u(.42,.022);t.position.y=-.06,i.add(t);const e=new dt;e.position.y=.36;const n=new w(new Vt(.12,.11,.16),Bt.hide());Ht(e,n);const s=new w(new Vt(.13,.04,.17),Bt.ice());s.position.y=.07,Ht(e,s);const o=mi(.055);o.position.set(0,.02,0),e.add(o);for(const c of[.1,-.1]){const l=bn(.14,.02,c>0?1.1:.2);l.position.set(0,0,c),c<0&&(l.rotation.x=Math.PI),e.add(l)}const r=new w(new Vt(.08,.08,.02),Bt.claw());r.name="toolEdge",r.position.z=.1,e.add(r);const a=new w(new Vt(.08,.08,.02),Bt.hideDark());return a.name="toolHeel",a.position.z=-.1,e.add(a),i.add(e),i}function yu(){const i=new dt,t=new w(new Xt(.028,.034,.98,8),Bt.bone());t.position.y=.28,Ht(i,t);for(let a=0;a<4;a++){const c=new w(new ke(.036,.007,5,10),Bt.wrap());c.rotation.x=Math.PI/2,c.position.y=-.04+a*.03,i.add(c)}const e=mi(.055);e.position.y=.1,i.add(e);const n=new w(new tt(.05,8,6),Bt.ice());n.scale.set(1,.7,1),n.position.y=.72,Ht(i,n);const s=new w(new ye(.048,.26,6),Bt.claw());s.name="toolEdge",s.position.y=.9,Ht(i,s);const o=new w(new ye(.03,.18,6),Ve(15919830,{roughness:.32,flatShading:!1}));o.position.set(.02,.82,0),o.rotation.z=.28,Ht(i,o);for(const a of[-1,1]){const c=bn(.16,.018,.4);c.rotation.z=a*1.15,c.position.set(a*.02,.7,0),i.add(c)}const r=new w(new tt(.03,8,6),Bt.boneDark());return r.name="toolHeel",r.position.y=-.22,Ht(i,r),i}function Mu(){const i=new dt,t=new w(new Xt(.026,.03,.14,8),Bt.hide());Ht(i,t);const e=mi(.045);i.add(e);for(const o of[-1,1]){const r=new dt;r.position.y=o*.07;for(let c=0;c<5;c++){const l=c/4,h=new w(new Xt(.026-l*.008,.022-l*.007,.12,6),Bt.bone());h.position.y=o*(.06+c*.1),h.position.z=-l*.08,h.rotation.x=o*l*.5,Ht(r,h)}const a=new w(new Je(.03,0),Bt.ice());a.position.set(0,o*.56,-.32),Ht(r,a),i.add(r)}const n=new w(new Xt(.006,.006,1.12,5),Bt.claw());n.position.set(0,0,-.32),i.add(n);const s=bn(.14,.016,.2);return s.position.set(0,0,.03),i.add(s),i}function wu(){const i=new dt,t=new w(new Xt(.26,.28,.055,12),Bt.hide());t.rotation.x=Math.PI/2,Ht(i,t);const e=new w(new tt(.24,10,8),Bt.fur());e.scale.set(1,1,.28),e.position.z=.02,Ht(i,e);const n=new w(new tt(.09,10,8),Bt.ice());n.scale.set(1,1,.55),n.position.z=.04,Ht(i,n);const s=new w(new tt(.055,8,6),Bt.hideDark());s.position.z=.07,Ht(i,s);for(let o=0;o<8;o++){const r=o/8*Math.PI*2,a=mi(.055);a.position.set(Math.cos(r)*.24,Math.sin(r)*.24,0),a.rotation.z=r,i.add(a);const c=bn(.16,.018,1.15);c.position.set(Math.cos(r)*.27,Math.sin(r)*.27,.02),c.rotation.z=r+Math.PI/2,i.add(c)}return i}function Su(){const i=new dt,t=new w(new tt(.3,12,10),Bt.hide());t.scale.set(1.28,1.18,.86),t.position.y=0,Ht(i,t);const e=new w(new tt(.22,10,8),Bt.hideDark());e.scale.set(1.15,.95,.62),e.position.set(0,-.14,.1),Ht(i,e);const n=new w(new tt(.3,12,10),Bt.fur());n.scale.set(1.85,.52,1.25),n.position.set(0,.22,0),Ht(i,n);const s=new w(new tt(.26,10,8),Bt.fur());s.scale.set(1.15,1.45,.42),s.position.set(0,-.02,-.2),Ht(i,s);const o=new w(new ke(.26,.04,6,12),Bt.furMid());o.rotation.x=Math.PI/2,o.scale.set(1.15,.9,1),o.position.y=-.24,i.add(o);const r=new w(new tt(.16,10,8),Bt.hideDark());r.scale.set(1.7,.28,1.05),r.position.set(0,.28,.02),Ht(i,r);for(let c=0;c<10;c++){const l=c/10*Math.PI*2,h=mi(.055);h.position.set(Math.cos(l)*.3,.2+Math.sin(l*2)*.03,Math.sin(l)*.16),h.rotation.y=l,i.add(h)}for(const c of[-1,1]){const l=new w(new tt(.15,10,8),Bt.fur());l.scale.set(1.25,.75,1.1),l.position.set(c*.28,.2,.04),Ht(i,l);const h=new w(new Je(.09,0),Bt.ice());h.position.set(c*.3,.38,-.02),h.scale.set(.45,2.1,.4),Ht(i,h);const u=bn(.16,.02,.15);u.position.set(c*.32,.3,.08),u.rotation.z=c*.9,i.add(u);const d=bn(.14,.018,.45);d.position.set(c*.1,-.02,.2),d.rotation.z=c*.45,i.add(d)}const a=new w(new tt(.036,8,6),Bt.amber());return a.position.set(0,.04,.22),Ht(i,a),i}function Eu(){const i=new dt,t=new w(new Xt(.11,.095,.3,10),Bt.fur());t.position.y=-.12,Ht(i,t);const e=new w(new ke(.11,.03,6,10),Bt.furMid());e.rotation.x=Math.PI/2,e.position.y=.02,i.add(e);for(let s=0;s<3;s++){const o=bn(.1,.014,.2);o.position.set(0,-.04-s*.06,.09),i.add(o)}const n=new w(new Vt(.055,.16,.03),Bt.ice());return n.position.set(0,-.12,.095),i.add(n),i}function Tu(){const i=new dt,t=new w(new Xt(.145,.1,.44,10),Bt.fur());t.position.y=-.2,Ht(i,t);const e=new w(new Vt(.12,.26,.05),Bt.hide());e.position.set(0,-.18,.1),Ht(i,e);const n=new w(new tt(.08,8,6),Bt.hideDark());n.scale.set(1.4,.35,1.1),n.position.set(0,.02,.02),Ht(i,n);for(const[s,o,r]of[[.1,-.06,.04],[-.1,-.1,.02],[0,-.02,.08]]){const a=mi(.06);a.position.set(s,o,r),i.add(a)}return i}function bu(){const i=new dt,t=new w(new Xt(.085,.095,.14,10),Bt.fur());t.position.y=.04,Ht(i,t);const e=new w(new ke(.09,.028,6,10),Bt.furMid());e.rotation.x=Math.PI/2,e.position.y=.1,i.add(e);const n=new w(new tt(.085,10,8),Bt.hide());n.scale.set(1.15,.58,1.7),n.position.set(0,-.03,.1),Ht(i,n);for(let s=0;s<3;s++){const o=(s-1)*.038,r=bn(.12,.014,1.15);r.position.set(o,-.03,.2),i.add(r)}return i}function V_(){const i=new dt;i.name="forge";const t=Ve(6974054,{roughness:.94}),e=Ve(8013104,{roughness:.88}),n=Ve(2761760,{roughness:.96}),s=Ve(3817544,{metalness:.5,roughness:.38});for(let D=0;D<10;D++){const T=D/10*Math.PI*2,C=new w(new Zn(.16,0),t);C.position.set(Math.cos(T)*.62,.14,Math.sin(T)*.5),C.rotation.set(.2,T,.15),Ht(i,C)}const o=new w(new Xt(.42,.48,.16,12),n);o.position.y=.12,Ht(i,o);const r=new w(new tt(.22,8,6),Ve(16737826,{emissive:16729088,emissiveIntensity:1.6,roughness:.45}));r.scale.set(1.35,.55,1.15),r.position.set(0,.28,0),r.name="forgeEmber",Ht(i,r);const a=new w(new tt(.34,8,6),new ue({color:16755268,transparent:!0,opacity:.34,depthWrite:!1}));a.position.set(0,.32,0),a.name="forgeGlow",i.add(a);const c=new cr(16746564,1.35,9);c.position.set(0,.7,0),i.add(c);const l=new w(new Vt(.42,.7,.42),e);l.position.set(0,.62,-.42),Ht(i,l);const h=new w(new Vt(.52,.1,.52),t);h.position.set(0,1,-.42),Ht(i,h),G_(i,1.08,6,.2,.045);const u=new dt;u.position.set(.72,.28,.08);const d=new w(new Xt(.12,.16,.28,8),Bt.boneDark());d.position.y=.14,Ht(u,d);const f=new w(new Vt(.42,.12,.18),s);f.position.y=.32,Ht(u,f);const m=new w(new Vt(.2,.08,.1),s);m.position.set(.26,.3,0),Ht(u,m),i.add(u);const _=new w(new Xt(.03,.035,1.15,6),Bt.boneDark());_.position.set(-.7,.58,-.05),Ht(i,_);const g=new w(new tt(.28,10,8),Bt.fur());g.scale.set(.85,.22,1.35),g.position.set(-.7,.72,.12),g.rotation.x=-.35,Ht(i,g);for(const[D,T]of[[-.82,.28],[-.58,.3],[-.7,.38]]){const C=bn(.14,.016,1.1);C.position.set(D,.62,T),i.add(C)}const p=bn(.16,.02,.5);p.position.set(.72,.66,.08),p.rotation.z=.9,i.add(p);const S=new w(new ye(.03,.16,6),Bt.bone());S.position.set(.58,.62,.16),S.rotation.z=.8,Ht(i,S);const M=new w(new Xt(.02,.024,.28,6),Bt.boneDark());M.position.set(-.52,.42,.28),M.rotation.z=1.1,Ht(i,M);const v=new w(new Xt(.95,1.05,1.4,10),new ue({visible:!1}));return v.position.y=.7,v.name="hit",i.add(v),i}function W_(){const i=new dt,t=new w(new tt(.14,10,8),Bt.hide());t.scale.set(1.4,.35,1.1),Ht(i,t);const e=mi(.06);return e.position.y=.04,i.add(e),i}function X_(){const i=new dt,t=new w(new ye(.04,.26,7),Ve(15919830,{roughness:.32,flatShading:!1}));t.rotation.z=.2,Ht(i,t);const e=new w(new Je(.03,0),Bt.ice());return e.position.y=-.1,Ht(i,e),i}function q_(){const i=new dt,t=new w(new Xt(.03,.035,.32,8),Bt.bone());t.rotation.z=.4,Ht(i,t);for(const e of[-.14,.14]){const n=new w(new tt(.04,8,6),Bt.boneDark());n.position.set(e*.35,e,0),Ht(i,n)}return i}function Y_(){const i=new dt,t=new w(new Je(.12,0),Bt.ice());t.scale.set(.55,1.6,.55),Ht(i,t);const e=new w(new Je(.06,0),Bt.ice());return e.position.set(.05,-.04,.02),e.rotation.z=.6,Ht(i,e),i}function $_(i){const t=i.getObjectByName("playerTorso");if(t){const n=Su();n.name="wear_chest",n.visible=!1,n.position.set(0,0,.02),n.scale.setScalar(1.05),t.add(n)}const e=i.getObjectByName("forearmL");if(e){const n=wu();n.name="wear_shield",n.visible=!1,n.position.set(-.24,-.06,.1),n.rotation.set(1.05,-.55,.25),n.scale.setScalar(1.22),e.add(n)}for(const n of[-1,1]){const s=i.getObjectByName(n<0?"legL":"legR");if(s){const a=Tu();a.name=n<0?"wear_legL":"wear_legR",a.visible=!1,a.position.set(0,-.02,0),a.scale.setScalar(1.08),s.add(a)}const o=i.getObjectByName(n<0?"shinL":"shinR");if(o){const a=Eu();a.name=n<0?"wear_greaveL":"wear_greaveR",a.visible=!1,a.position.set(0,-.04,.02),a.scale.setScalar(1.12),o.add(a)}const r=i.getObjectByName(n<0?"footL":"footR");if(r){const a=bu();a.name=n<0?"wear_bootL":"wear_bootR",a.visible=!1,a.position.set(0,.02,.02),a.scale.setScalar(1.2),r.add(a)}}}function Io(i,t,e){i.traverse(n=>{n.userData.baseLayer===t&&(n.visible=e)})}function Z_(i,t){const e=(a,c)=>{const l=i.getObjectByName(a);l&&(l.visible=c)},n=t.chest==="frost_chest",s=t.legs==="frost_legs",o=t.greaves==="frost_greaves",r=t.boots==="frost_boots";e("wear_shield",t.shield==="frost_shield"),e("wear_chest",n),e("wear_legL",s),e("wear_legR",s),e("wear_greaveL",o),e("wear_greaveR",o),e("wear_bootL",r),e("wear_bootR",r),Io(i,"chest",!n),Io(i,"legs",!s),Io(i,"greaves",!o),Io(i,"boots",!r)}const oh=new Map;function Le(i,t={}){const e=`${i}_${t.roughness??.62}_${t.metalness??.06}_${t.clearcoat??0}_${t.sheen??0}_${t.emissive??0}_${t.emissiveIntensity??0}_${t.envMapIntensity??1}_${t.flatShading===!1?0:1}`;let n=oh.get(e);return n||(n=new zi({color:i,roughness:t.roughness??.62,metalness:t.metalness??.06,envMapIntensity:t.envMapIntensity??1,flatShading:t.flatShading??!1,...t}),oh.set(e,n)),n}function Do(i,t){const e=Math.sin(i*127.1+t*311.7)*43758.5453;return e-Math.floor(e)}function $o(i,t){const e=Math.floor(i),n=Math.floor(t),s=i-e,o=t-n,r=s*s*(3-2*s),a=o*o*(3-2*o),c=Do(e,n),l=Do(e+1,n),h=Do(e,n+1),u=Do(e+1,n+1);return c+(l-c)*r+(h-c)*a+(c-l-h+u)*r*a}function Zo(i,t,e=5){let n=0,s=.5,o=1;for(let r=0;r<e;r++)n+=s*$o(i*o,t*o),s*=.5,o*=2.05;return n}function Rc(i,t){const e=document.createElement("canvas"),n=document.createElement("canvas"),s=document.createElement("canvas");e.width=e.height=n.width=n.height=s.width=s.height=i;const o=e.getContext("2d"),r=n.getContext("2d"),a=s.getContext("2d"),c=o.createImageData(i,i),l=r.createImageData(i,i),h=a.createImageData(i,i);for(let d=0;d<i;d++)for(let f=0;f<i;f++){const m=t(f/i,d/i),_=(d*i+f)*4;c.data[_]=m.r,c.data[_+1]=m.g,c.data[_+2]=m.b,c.data[_+3]=255;const g=Math.max(0,Math.min(255,m.rough));l.data[_]=l.data[_+1]=l.data[_+2]=g,l.data[_+3]=255;const p=Math.max(0,Math.min(255,m.bump));h.data[_]=h.data[_+1]=h.data[_+2]=p,h.data[_+3]=255}o.putImageData(c,0,0),r.putImageData(l,0,0),a.putImageData(h,0,0);const u=(d,f)=>{const m=new Tc(d);return m.wrapS=m.wrapT=fs,m.anisotropy=8,m.colorSpace=f?We:Dn,m.needsUpdate=!0,m};return{map:u(e,!0),roughnessMap:u(n,!1),bumpMap:u(s,!1)}}let ri=null,ai=null,Jr=null;function K_(){return ri||(ri=Rc(256,(i,t)=>{const e=Zo(i*18,t*42),n=$o(i*70,t*70),s=Zo(i*4.5,t*3.2,3),o=Math.pow($o(i*9+t*40,t*2),8),r=.42+e*.28+s*.16-o*.22+n*.06,a=138+r*108,c=112+r*92,l=92+r*74;return{r:a,g:c,b:l,rough:110+e*90-o*40,bump:90+e*110+n*30-o*50}}),ri.map.repeat.set(2.2,2.2),ri.roughnessMap.repeat.copy(ri.map.repeat),ri.bumpMap.repeat.copy(ri.map.repeat)),ri}function J_(){return ai||(ai=Rc(256,(i,t)=>{const e=Math.abs(Math.sin(i*Math.PI*64))*.12+Math.abs(Math.sin(t*Math.PI*64))*.12,n=Zo(i*10,t*10,4),s=.28+n*.18+e;return{r:124+s*74,g:130+s*78,b:126+s*70,rough:170+e*80,bump:100+e*90+n*40}}),ai.map.repeat.set(3,3),ai.roughnessMap.repeat.copy(ai.map.repeat),ai.bumpMap.repeat.copy(ai.map.repeat)),ai}function j_(){return Jr||(Jr=Rc(256,(i,t)=>{const e=Zo(i*6,t*8,4),n=Math.pow($o(i*40,t*40),6),s=212+e*24-n*22,o=196+e*18-n*18,r=184+e*14-n*14;return{r:s,g:o,b:r,rough:96+e*40,bump:118+e*28}})),Jr}function jr(i,t={}){const e=K_();return new zi({color:i,map:e.map,roughnessMap:e.roughnessMap,bumpMap:e.bumpMap,bumpScale:.018,roughness:.58,metalness:.08,clearcoat:.16,clearcoatRoughness:.55,sheen:.22,sheenColor:new St(6963240),sheenRoughness:.7,envMapIntensity:.7,flatShading:!1,...t})}function rh(i){const t=J_();return new zi({color:i,map:t.map,roughnessMap:t.roughnessMap,bumpMap:t.bumpMap,bumpScale:.02,roughness:.86,metalness:.02,sheen:.18,sheenColor:new St(3818552),sheenRoughness:.85,envMapIntensity:.4,flatShading:!1})}function ah(i,t={}){const e=j_();return new zi({color:i,map:e.map,roughnessMap:e.roughnessMap,bumpMap:e.bumpMap,bumpScale:.012,roughness:.48,metalness:0,sheen:.35,sheenColor:new St(12611664),sheenRoughness:.55,envMapIntensity:.32,emissive:new St(2757648),emissiveIntensity:.012,flatShading:!1,...t})}function Nt(i,t){return i.castShadow=!0,i.receiveShadow=!0,t.add(i),i}function fe(i,t){i.userData.baseLayer=t}function ns(i,t=16){const e=i.map(([n,s])=>new gt(n,s));return new Ks(e,t)}function ch(i,t,e,n){const s=new or;s.moveTo(-i*.5,0),s.lineTo(i*.5,0),s.lineTo(0,-t),s.closePath();const o=new js(s,{depth:e,bevelEnabled:!1});o.translate(0,0,-e*.5);const r=new w(o,n);return r.castShadow=!0,r}function lh(i,t,e,n,s,o=0,r){const a=Math.hypot(n*1.7,e-t);for(const c of[-1,1]){const l=new w(new Vt(.028,a,.016),s);l.position.set(0,(t+e)*.5,o),l.rotation.z=c*Math.atan2(n*.95,(e-t)*.5),l.castShadow=!0,r&&fe(l,r),i.add(l)}}function hh(i,t,e,n){const s=new w(new Vt(i,i,t),n);s.castShadow=!0;const o=new w(new Vt(i*.42,i*.42,t+.008),new zi({color:2761752,roughness:.7,metalness:.2,flatShading:!1}));return s.add(o),s}function uh(i,t,e,n,s,o,r,a,c,l){for(let h=0;h<o;h++){const u=h/o*Math.PI*2,d=new w(new Tn(r,0),h%2?c:a);d.position.set(t+Math.cos(u)*s,e+h%2*.012,n+Math.sin(u)*s),d.rotation.set(.2,u,.15),d.scale.set(1.15,.85,1.05),d.castShadow=!0,l&&fe(d,l),i.add(d)}}const Au=new I(0,-.008,.041);function dh(i,t,e,n){const s=new dt,o=new w(new Te(n,e*.34,3,8),t);o.position.y=-e*.25,Nt(o,s);const r=new dt;r.position.y=-e*.48;const a=new w(new Te(n*.88,e*.24,3,8),i);a.position.y=-e*.16,Nt(a,r),s.add(r);const c=new dt;c.position.y=-e*.32;const l=new w(new Te(n*.74,e*.16,3,8),i);l.position.y=-e*.12,Nt(l,c);const h=new w(new tt(n*.6,6,5),i);return h.scale.set(.9,.5,.45),h.position.set(0,-e*.19,-n*.55),c.add(h),r.add(c),{root:s,mid:r,tip:c}}function cn(i,t){if(!i)return;const e=i.userData.fingers,n=i.userData.thumb;if(!e)return;const s=Math.max(0,Math.min(1.15,t));for(let o=0;o<e.length;o++){const r=1+(o-1.5)*-.07,a=e[o];a.root.rotation.x=-s*.98*r,a.mid.rotation.x=-s*1.22*r,a.tip.rotation.x=-s*.82*r}n&&(n.root.rotation.x=-.55-s*.35,n.mid.rotation.x=-s*.55,n.tip.rotation.x=-s*.45)}function Q_(i,t,e,n){const s=new dt,o=new w(new tt(.047,12,10),t);o.scale.set(1.02,.98,.66),o.position.set(0,-.016,.01),Nt(o,s);const r=new w(new Te(.037,.022,4,10),e);r.position.set(0,.018,.006),Nt(r,s);const a=new dt;a.name="grip",a.position.set(0,-.036,.012),a.rotation.z=0,s.add(a);const c=new w(new Te(.014,.058,4,8),t);c.rotation.z=Math.PI/2,c.position.set(0,.004,.014),Nt(c,a);const l=[];for(let u=0;u<4;u++){const d=.074-Math.abs(u-1.1)*.007,f=dh(i,t,d,.0118-u*9e-4);f.root.position.set(-.031+u*.0207,0,.012-Math.abs(u-1.5)*.005),a.add(f.root),l.push(f)}const h=dh(i,t,.064,.0136);return h.root.position.set(.04,.014,.03),h.root.rotation.z=-1.18,a.add(h.root),s.userData.fingers=l,s.userData.thumb=h,s.userData.gripPoint=Au.clone(),cn(s,.22),s}function Cc(){const i=new dt;i.name="player",i.userData.locomotionY=0;const t=ah(12618850),e=ah(10646092,{roughness:.56}),n=Le(3154714,{roughness:.94,sheen:.22,sheenColor:new St(3811352),flatShading:!0}),s=jr(10117688),o=jr(5386780,{roughness:.78,clearcoat:.04}),r=jr(12618322,{roughness:.58,clearcoat:.12}),a=Le(13215860,{roughness:.92,metalness:0,sheen:.22,sheenColor:new St(13148272),sheenRoughness:.7,envMapIntensity:.12,flatShading:!0}),c=Le(9268292,{roughness:.95,sheen:.16,sheenColor:new St(9068600),flatShading:!0}),l=Le(11307097,{roughness:.93,sheen:.18,sheenColor:new St(11173960),flatShading:!0}),h=rh(5594455),u=rh(4081215);Le(15265524,{metalness:.92,roughness:.18,clearcoat:.55,clearcoatRoughness:.12,envMapIntensity:1.35});const d=Le(16186108,{metalness:.96,roughness:.1,clearcoat:.7,clearcoatRoughness:.08,emissive:13161696,emissiveIntensity:.38,envMapIntensity:1.55}),f=new w(new Rn(.38,24),new ue({color:0,transparent:!0,opacity:.38,depthWrite:!1}));f.rotation.x=-Math.PI/2,f.position.y=.025,f.name="contactShadow",i.add(f);const m=new dt;m.name="playerHips",i.add(m);const _=k=>{const K=new dt;K.name=k<0?"legL":"legR",K.position.set(k*.16,.94,0);const Z=new w(new tt(.1,14,12),h);Z.scale.set(1.04,1,1.02),fe(Nt(Z,K),"legs");const pt=new w(ns([[.096,-.04],[.1,-.14],[.092,-.26],[.08,-.36],[.07,-.42]],14),h);fe(Nt(pt,K),"legs");const ht=new w(new tt(.075,12,9),h);ht.scale.set(1,1.7,.85),ht.position.set(0,-.2,.04),fe(Nt(ht,K),"legs");const A=new w(new tt(.07,12,9),u);A.scale.set(1,1.6,.8),A.position.set(0,-.18,-.04),fe(Nt(A,K),"legs");const y=new dt;y.name=k<0?"shinL":"shinR",y.position.set(0,-.44,0);const H=new w(new tt(.076,14,12),h);H.scale.set(1,.95,1),Nt(H,y);const j=new w(new tt(.04,10,8),h);j.scale.set(1.1,1.1,.7),j.position.set(0,-.01,.062),Nt(j,y);const ct=new w(ns([[.07,-.02],[.072,-.08],[.064,-.14],[.058,-.17]],14),u);ct.position.set(0,0,-.012),Nt(ct,y);const it=new w(new tt(.056,12,9),u);it.scale.set(1.05,1.5,.9),it.position.set(0,-.09,-.04),Nt(it,y);const Ut=new w(new Xt(.09,.098,.1,14),s);Ut.position.set(0,-.2,-.016),fe(Nt(Ut,y),"greaves"),lh(y,-.15,-.25,.094,o,.02,"greaves");const Mt=new w(new ke(.092,.022,6,10),a);Mt.rotation.x=Math.PI/2,Mt.position.set(0,-.14,.02),fe(Mt,"greaves"),y.add(Mt);const Rt=new w(new ke(.082,.018,6,10),c);Rt.rotation.x=Math.PI/2,Rt.position.set(0,-.24,0),fe(Rt,"greaves"),y.add(Rt);const ee=new w(new Xt(.048,.058,.14,12),o);ee.position.set(0,-.36,-.006),fe(Nt(ee,y),"boots");const ft=new w(new Xt(.052,.055,.045,12),s);ft.position.set(0,-.34,-.006),fe(Nt(ft,y),"boots");const Ct=new dt;Ct.name=k<0?"footL":"footR",Ct.position.set(0,-.48,.04);const Wt=new w(new tt(.04,12,10),o);fe(Nt(Wt,Ct),"boots");const qt=new w(new tt(.046,10,8),o);qt.position.set(0,-.016,-.05),fe(Nt(qt,Ct),"boots");const Dt=new w(new Te(.05,.16,5,12),s);Dt.rotation.x=Math.PI/2,Dt.position.set(0,-.004,.12),Dt.scale.set(1.2,1,.68),fe(Nt(Dt,Ct),"boots");const jt=new w(new Te(.052,.16,4,10),Le(1840144,{roughness:.96}));return jt.rotation.x=Math.PI/2,jt.scale.set(1.12,1,.36),jt.position.set(0,-.032,.1),fe(jt,"boots"),Ct.add(jt),y.add(Ct),K.add(y),K};m.add(_(-1)),m.add(_(1));const g=new w(ns([[.2,-.1],[.24,-.02],[.22,.1]],16),s);g.position.y=.92,g.scale.set(1,1,.86),fe(Nt(g,m),"legs");for(const[k,K]of[[.195,0],[-.19,Math.PI]]){const Z=ch(.26,.2,.038,o);Z.position.set(0,.86,k),Z.rotation.set(Math.sign(k)*.28,K,0),fe(Z,"legs"),m.add(Z)}for(const k of[-1,1]){const K=ch(.18,.18,.032,r);K.position.set(k*.24,.86,0),K.rotation.order="ZYX",K.rotation.set(0,k*Math.PI*.5,-k*.24),fe(K,"legs"),m.add(K)}const p=new dt;p.name="playerTorso",p.position.y=1.18,i.add(p);const S=new w(ns([[.205,-.3],[.215,-.2],[.23,-.06],[.245,.1],[.235,.22],[.15,.32]],14),s);S.scale.set(1.08,1,.88),fe(Nt(S,p),"chest");const M=new w(new tt(.2,14,12),s);M.scale.set(1.2,.95,.5),M.position.set(0,.06,-.1),fe(Nt(M,p),"chest");for(const k of[-1,1]){const K=new w(new tt(.085,14,12),s);K.scale.set(1.2,.72,.5),K.position.set(k*.1,.1,.16),fe(Nt(K,p),"chest")}const v=new w(new tt(.12,12,10),s);v.scale.set(1.1,1,.36),v.position.set(0,-.14,.16),fe(Nt(v,p),"chest");const D=new w(new ke(.225,.03,10,18),o);D.rotation.x=Math.PI/2,D.scale.set(1.04,1,.9),D.position.y=-.26,p.add(D);const T=hh(.1,.028,.042,d);T.position.set(0,-.26,.225),p.add(T);const C=(k,K)=>{const Z=new w(new Vt(.078,.56,.06),o);Z.position.set(0,.02,K),Z.rotation.set(Math.sign(K)*.09,0,k),Z.castShadow=!0,fe(Z,"chest"),p.add(Z)};C(.5,.18),C(-.5,.18),C(.5,-.175),C(-.5,-.175);const P=new w(new Vt(.15,.15,.03),o);P.position.set(0,.05,.205),fe(P,"chest"),p.add(P);const E=hh(.14,.038,.058,d);E.name="chestBuckle",E.position.set(0,.05,.24),fe(E,"chest"),p.add(E);const x=.31;for(const k of[-1,1]){const K=new w(new tt(.11,12,9),t);K.scale.set(1.35,.5,.7),K.rotation.z=k*.42,K.position.set(k*.17,.24,-.01),Nt(K,p);const Z=new w(new tt(.1,8,6),r);Z.scale.set(1.2,.5,1.05),Z.position.set(k*(x-.03),.18,.005),Z.rotation.z=k*-.34,fe(Nt(Z,p),"chest");const pt=new w(new tt(.108,12,9,0,Math.PI*2,0,Math.PI*.5),r);pt.scale.set(1.06,.9,1.02),pt.rotation.z=k*-.38,pt.position.set(k*(x-.01),.13,-.004),fe(Nt(pt,p),"chest");for(let ht=0;ht<3;ht++){const A=new w(new tt(.011,6,5),d),y=-.5+ht*.5;A.position.set(k*(x+Math.cos(y)*.02),.19,Math.sin(y)*.08),fe(A,"chest"),p.add(A)}}const R=new w(new ke(.17,.055,8,12),l);R.rotation.x=Math.PI/2,R.position.set(0,.28,.01),R.scale.set(1.08,1,.92),fe(Nt(R,p),"chest"),uh(p,0,.29,.01,.18,8,.042,a,c,"chest");const F=new w(new Te(.07,.1,6,14),t);F.position.set(0,.35,.012),Nt(F,p);for(const k of[-1,1]){const K=new w(new Te(.02,.09,4,8),e);K.position.set(k*.045,.34,.058),K.rotation.set(-.18,0,k*.3),Nt(K,p)}const U=k=>{const K=new dt;K.name=k<0?"clavL":"clavR",K.position.set(k*.2,.14,0);const Z=new dt;Z.name=k<0?"armL":"armR",Z.position.set(k*(x-.2),0,0);const pt=new w(new tt(.086,14,11),t);pt.scale.set(1.04,1.02,1),pt.position.set(k*.004,-.01,-.004),Nt(pt,Z);const ht=new w(ns([[.07,-.02],[.076,-.1],[.07,-.19],[.058,-.29],[.05,-.33]],12),t);Nt(ht,Z);const A=new w(new tt(.058,12,9),t);A.scale.set(1,1.6,.8),A.position.set(k*-.004,-.15,.024),Nt(A,Z);const y=new dt;y.name=k<0?"forearmL":"forearmR",y.position.set(0,-.34,0);const H=new w(new tt(.06,12,9),t);H.scale.set(1,.95,1.05),Nt(H,y);const j=new w(ns([[.062,-.03],[.072,-.08],[.068,-.15],[.058,-.22],[.05,-.27]],12),s);j.position.set(0,0,.008),Nt(j,y),lh(y,-.07,-.21,.066,o,.008);const ct=new w(new ke(.07,.022,6,10),a);ct.rotation.x=Math.PI/2,ct.position.set(0,-.045,.008),y.add(ct),uh(y,0,-.04,.008,.066,6,.024,a,c);const it=new w(new ke(.052,.014,6,10),o);it.rotation.x=Math.PI/2,it.position.set(0,-.25,.008),y.add(it);const Ut=Q_(t,s,o);return Ut.name=k<0?"handL":"handR",Ut.position.set(0,-.28,.02),y.add(Ut),Z.add(y),K.add(Z),K};p.add(U(-1)),p.add(U(1));const G=new dt;G.name="playerHead",G.position.set(0,.5,.015),G.scale.setScalar(.93);const J=Le(3877663,{roughness:.95,sheen:.18,sheenColor:new St(5455916)}),X=new w(new tt(.163,22,18),t);X.scale.set(.95,1.07,.9),X.position.z=-.012,Nt(X,G);const rt=new w(new tt(.13,18,14),t);rt.scale.set(1,1.12,.55),rt.position.set(0,-.01,.07),Nt(rt,G);const $=new w(new Te(.022,.1,5,12),t);$.rotation.z=Math.PI/2,$.scale.set(1,1,.8),$.position.set(0,.05,.132),Nt($,G);const mt=new w(new tt(.114,16,13),e);mt.scale.set(1.02,.74,.9),mt.position.set(0,-.093,.03),Nt(mt,G);const yt=new w(new tt(.114,16,13),J);yt.scale.set(1.06,.78,1.02),yt.position.set(0,-.11,.046),Nt(yt,G);const Et=new w(new tt(.06,12,9),J);Et.scale.set(1.15,.95,.9),Et.position.set(0,-.15,.095),G.add(Et);for(const k of[-1,1]){const K=new w(new tt(.024,8,6),J);K.scale.set(.3,1.7,.7),K.position.set(k*.147,-.024,-.012),K.rotation.z=k*.12,G.add(K);const Z=new w(new Te(.011,.028,3,8),J);Z.rotation.z=Math.PI/2,Z.rotation.y=k*.35,Z.position.set(k*.02,-.074,.164),G.add(Z)}const Gt=new w(new Te(.013,.034,4,10),t);Gt.rotation.x=-.3,Gt.position.set(0,.008,.15),Nt(Gt,G);const Yt=new w(new tt(.023,12,10),t);Yt.scale.set(1,.9,.95),Yt.position.set(0,-.03,.165),Nt(Yt,G);for(const k of[-1,1]){const K=new w(new tt(.015,10,8),t);K.scale.set(1,.85,.9),K.position.set(k*.022,-.038,.152),G.add(K);const Z=new w(new tt(.0055,8,6),e);Z.position.set(k*.012,-.047,.166),G.add(Z)}for(const k of[-1,1]){const K=new w(new Te(.011,.05,3,8),J);K.rotation.z=Math.PI/2+k*-.18,K.rotation.x=-.3,K.position.set(k*.052,.066,.146),G.add(K);const Z=new w(new tt(.021,14,11),Le(15129805,{roughness:.3}));Z.position.set(k*.051,.018,.128),G.add(Z);const pt=new w(new tt(.0122,10,8),Le(4864546,{roughness:.3,clearcoat:.6,clearcoatRoughness:.1}));pt.position.set(k*.051,.018,.1445),G.add(pt);const ht=new w(new tt(.0058,8,6),Le(657414,{roughness:.25}));ht.position.set(k*.051,.018,.153),G.add(ht);const A=new w(new tt(.024,12,9,0,Math.PI*2,0,Math.PI*.5),t);A.scale.set(1.06,1,.92),A.rotation.x=-.5,A.position.set(k*.051,.024,.126),G.add(A);const y=new w(new tt(.023,12,9,0,Math.PI*2,Math.PI*.62,Math.PI*.38),e);y.scale.set(1.06,1,.9),y.rotation.x=.35,y.position.set(k*.051,.014,.126),G.add(y);const H=new w(new tt(.03,10,8),t);H.scale.set(.36,1.05,.62),H.position.set(k*.15,.006,-.012),G.add(H);const j=new w(new tt(.014,8,6),t);j.scale.set(.4,.8,.65),j.position.set(k*.149,-.026,-.01),G.add(j)}const Q=new w(new Te(.0045,.04,3,8),Le(4858908,{roughness:.6}));Q.rotation.z=Math.PI/2,Q.position.set(0,-.098,.163),G.add(Q);const ut=new w(new Te(.0075,.03,3,8),e);ut.rotation.z=Math.PI/2,ut.position.set(0,-.109,.161),G.add(ut);const bt=new w(new tt(.171,16,12,0,Math.PI*2,0,Math.PI*.47),n);bt.position.set(0,.052,-.016),bt.scale.set(1.06,1,1.1),Nt(bt,G);const W=[[0,.15,.062,.082,.5],[-.078,.142,.05,.074,.35],[.078,.142,.05,.074,-.35],[-.128,.098,-.01,.07,.2],[.128,.098,-.01,.07,-.2],[-.072,.122,-.108,.078,.1],[.072,.122,-.108,.078,-.1],[0,.1,-.152,.082,0]];for(const[k,K,Z,pt,ht]of W){const A=new w(new Tn(pt,0),n);A.position.set(k,K,Z),A.rotation.set(-.4+Z*1.2,k*1.6,ht),A.scale.set(1.1,.52,1.25),G.add(A)}const st=new w(new Tn(.082,0),n);st.scale.set(1.6,.3,.62),st.rotation.set(.42,0,.12),st.position.set(.014,.125,.098),G.add(st),p.add(G);const vt=new dt;vt.name="toolRoot",vt.visible=!1,p.getObjectByName("armR").getObjectByName("handR").getObjectByName("grip").add(vt),Lc(vt,null);const et=Cu();et.name="tool_hatchet",et.visible=!1,vt.add(et);const L=Lu();L.name="tool_pickaxe",L.visible=!1,vt.add(L);const xt=Pu();return xt.name="tool_sword",xt.visible=!1,vt.add(xt),t1(vt),$_(i),i}function Sn(i=12766940,t={}){return Le(i,{metalness:.42,roughness:.28,clearcoat:.5,clearcoatRoughness:.2,envMapIntensity:1,...t})}function Ru(i,t,e){const n=new dt,s=Le(6964256,{roughness:.78,clearcoat:.1,clearcoatRoughness:.7}),o=new w(new Xt(t,t*1.06,i,12),s);o.position.y=i*.5,Nt(o,n);const r=new w(new tt(e,10,8),s);r.scale.set(1,1.35,1),Nt(r,n);const a=Le(3810324,{roughness:.88});for(let c=0;c<5;c++){const l=new w(new ke(t*1.12,.007,5,10),a);l.rotation.x=Math.PI/2,l.rotation.z=c*.4,l.position.y=.03+c*.032,n.add(l)}return n}function Cu(){const i=new dt,t=Ru(.46,.021,.03);t.position.y=-.06,i.add(t);const e=new dt;e.position.y=.36;const n=new w(new Xt(.034,.034,.11,10),Sn(9411496));n.scale.set(.68,1,1),Nt(n,e);const s=new or;s.moveTo(0,-.046),s.lineTo(.075,-.058),s.lineTo(.155,-.112),s.lineTo(.192,-.092),s.lineTo(.2,.082),s.lineTo(.15,.096),s.lineTo(.065,.054),s.lineTo(0,.046),s.closePath();const o=new w(new js(s,{depth:.008,bevelEnabled:!0,bevelSize:.013,bevelThickness:.017,bevelSegments:2}),Sn(11714768));o.rotation.y=-Math.PI/2,o.position.set(.021,0,0),Nt(o,e);const r=new w(new Vt(.007,.185,.01),Le(15397627,{metalness:.22,roughness:.16,clearcoat:.6,envMapIntensity:.9}));r.name="toolEdge",r.position.set(0,-.006,.206),r.rotation.x=.06,e.add(r);const a=new w(new Vt(.044,.058,.038),Sn(9674926,{roughness:.34}));a.name="toolHeel",a.position.set(0,.004,-.042),Nt(a,e);const c=new w(new Vt(.038,.01,.014),Sn(6187638,{roughness:.5}));return c.position.set(0,.052,.004),e.add(c),i.add(e),i}function Lu(){const i=new dt,t=Ru(.52,.021,.03);t.position.y=-.07,i.add(t);const e=new dt;e.position.y=.43;const n=new w(new Xt(.034,.038,.09,10),Sn(9082274));Nt(n,e);for(let a=0;a<6;a++){const c=a/5,l=new w(new Vt(.058-c*.034,.056-c*.031,.062-c*.032),Sn(10135736-a*197379));l.position.set(0,.02-c*c*.125,.055+c*.2),l.rotation.x=c*.72,Nt(l,e)}const s=new w(new ye(.018,.085,6),Le(15002868,{metalness:.24,roughness:.18,clearcoat:.5,envMapIntensity:.9}));s.name="toolEdge",s.rotation.x=Math.PI*.66,s.position.set(0,-.128,.292),Nt(s,e);const o=new w(new Vt(.048,.048,.17),Sn(9082274));o.name="toolHeel",o.position.set(0,.014,-.088),o.rotation.x=-.22,Nt(o,e);const r=new w(new Vt(.05,.012,.02),Le(14674162,{metalness:.24,roughness:.18,clearcoat:.5,envMapIntensity:.9}));return r.position.set(0,.042,-.175),e.add(r),i.add(e),i}function Pu(){const i=new dt,t=Le(14201944,{metalness:.78,roughness:.26,clearcoat:.4,envMapIntensity:1.2}),e=new w(new Xt(.019,.023,.17,10),Le(4860434,{roughness:.8}));Nt(e,i);const n=Le(3021840,{roughness:.9});for(let f=0;f<7;f++){const m=new w(new ke(.024,.006,5,10),n);m.rotation.x=Math.PI/2,m.rotation.y=f*.3,m.position.y=-.062+f*.021,i.add(m)}const s=new w(new tt(.031,12,10),t);s.name="toolHeel",s.scale.set(1,.85,1),s.position.y=-.098,Nt(s,i);const o=new w(new Xt(.02,.026,.016,10),t);o.position.y=-.076,i.add(o);const r=new or;r.moveTo(-.1,0),r.quadraticCurveTo(-.05,.034,0,.018),r.quadraticCurveTo(.05,.034,.1,0),r.quadraticCurveTo(.05,-.02,0,-.016),r.quadraticCurveTo(-.05,-.02,-.1,0);const a=new w(new js(r,{depth:.036,bevelEnabled:!0,bevelSize:.005,bevelThickness:.004,bevelSegments:1}),t);a.position.set(0,.092,-.018),Nt(a,i);const c=new w(new Vt(.042,.05,.026),Sn(11187908));c.position.y=.128,Nt(c,i);const l=Sn(13951212,{roughness:.14,clearcoat:.6,emissive:1911868,emissiveIntensity:.1}),h=6;for(let f=0;f<h;f++){const m=f/h,_=.078-m*.03,g=new w(new Vt(_,.58/h+.004,.02-m*.006),l);g.position.y=.17+.58/h*(f+.5),Nt(g,i)}const u=new w(new Vt(.016,.44,.024),Sn(10465474,{roughness:.3,clearcoat:.3}));u.position.y=.4,i.add(u);for(const f of[-1,1]){const m=new w(new Vt(.008,.58,.012),Sn(16054783,{roughness:.08,clearcoat:.75}));m.position.set(f*.032,.46,0),i.add(m)}const d=new w(new ye(.034,.12,4),l);return d.name="toolEdge",d.rotation.y=Math.PI/4,d.scale.set(1,1,.42),d.position.y=.81,Nt(d,i),i}const Iu=["sword","frost_sword","frost_hammer","frost_spear","frost_bow"],Du=["hatchet","pickaxe",...Iu];function tc(i){return i==="bronze_sword"?"sword":i==="frost_sword"?"frost_sword":i==="frost_hammer"?"frost_hammer":i==="frost_spear"?"frost_spear":i==="frost_bow"?"frost_bow":null}function t1(i){const t=vu();t.name="tool_frost_sword",t.visible=!1,t.scale.setScalar(1.18),i.add(t);const e=xu();e.name="tool_frost_hammer",e.visible=!1,e.scale.setScalar(1.12),i.add(e);const n=yu();n.name="tool_frost_spear",n.visible=!1,n.scale.setScalar(1.22),i.add(n);const s=Mu();s.name="tool_frost_bow",s.visible=!1,s.scale.setScalar(1.28),i.add(s)}function Lc(i,t){i.position.copy(Au),t==="hatchet"||t==="frost_hammer"?i.rotation.set(.12,-.14,-Math.PI/2):t==="pickaxe"?i.rotation.set(.08,-.1,-Math.PI/2):t==="frost_bow"?i.rotation.set(.35,-.2,-Math.PI/2):i.rotation.set(Math.PI/2+.7,-.1,-Math.PI/2)}function Uu(i){for(const t of Du)if(t&&i.getObjectByName(`tool_${t}`)?.visible)return t;return null}function Qs(i){const t=i.getObjectByName("toolRoot");!t||!t.visible||Lc(t,Uu(t))}function an(i,t){const e=i.getObjectByName("toolRoot");if(e){e.visible=t!==null;for(const n of Du){if(!n)continue;const s=e.getObjectByName(`tool_${n}`);s&&(s.visible=n===t)}Lc(e,t)}}function Pc(i){const t=i.getObjectByName("toolRoot");if(!t?.visible)return!1;const e=Uu(t);return!!e&&Iu.includes(e)}function ec(i,t){Z_(i,t.equipped)}function Bi(i){const t=Math.max(0,Math.min(1,i));return t*t*(3-2*t)}function Kn(i){const t=Math.max(0,Math.min(1,i));return t<.5?16*t*t*t*t*t:1-Math.pow(-2*t+2,5)/2}function O(i,t){return i.getObjectByName(t)}function Ko(i,t={}){if(!i)return;const e=i.userData.rest;e&&(i.position.set(e.x+(t.x??0),e.y+(t.y??0),e.z+(t.z??0)),i.rotation.set(e.rx+(t.rx??0),e.ry+(t.ry??0),e.rz))}function An(i,t){i.userData.locomotionY=t}function Ge(i){i&&i.rotation.set(0,0,0)}function ce(i,t,e){return i+(t-i)*e}function ot(i,t,e,n){i&&i.rotation.set(t,e,n)}function Ae(i){return Math.max(0,i)}const Nu=["playerHips","playerTorso","playerHead","clavL","clavR","armL","forearmL","handL","armR","forearmR","handR","legL","shinL","footL","legR","shinR","footR"],nc=[0,0,0];function e1(i,t,e){const n=i??nc,s=t??nc;return[ce(n[0],s[0],e),ce(n[1],s[1],e),ce(n[2],s[2],e)]}function li(i,t,e){const n={};for(const s of Nu)(i[s]||t[s])&&(n[s]=e1(i[s],t[s],e));return n.gripR=ce(i.gripR??.25,t.gripR??.25,e),n.gripL=ce(i.gripL??.25,t.gripL??.25,e),n.lift=ce(i.lift??0,t.lift??0,e),n}function Fu(i,t){for(const s of Nu){const o=t[s]??nc,r=O(i,s);r&&r.rotation.set(s==="shinL"||s==="shinR"?Ae(o[0]):o[0],o[1],o[2])}const e=O(i,"playerHips");e&&e.position.set(0,0,0);const n=O(i,"playerTorso");n&&(n.position.x=0,n.position.z=0,n.scale.set(1,1,1)),cn(O(i,"handR"),t.gripR??.25),cn(O(i,"handL"),t.gripL??.25),Qs(i),An(i,t.lift??0)}const n1=["playerHips","playerTorso","playerHead","clavL","clavR","armL","armR","forearmL","forearmR","handL","handR","legL","legR","shinL","shinR","footL","footR"],i1=["yetiBody","yetiHead","yetiArmL","yetiArmR","yetiForearmL","yetiForearmR","yetiLegL","yetiLegR","yetiShinL","yetiShinR","yetiFootL","yetiFootR"],s1=["orcBody","orcHead","orcArmL","orcArmR","orcForearmL","orcForearmR","orcLegL","orcLegR","orcShinL","orcShinR","orcFootL","orcFootR"],o1=3.35,r1=5.7,a1=1.18,c1=.78;class Qr{constructor(t=n1){this.joints=t}prev=new Map;reset(){this.prev.clear()}apply(t,e,n=18){const s=1-Math.exp(-n*Math.max(0,e));for(const o of this.joints){const r=O(t,o);if(!r)continue;const a=this.prev.get(o);if(!a){this.prev.set(o,r.rotation.clone());continue}r.rotation.set(a.x+(r.rotation.x-a.x)*s,a.y+(r.rotation.y-a.y)*s,a.z+(r.rotation.z-a.z)*s),a.copy(r.rotation)}Qs(t)}}function ci(i){Ge(O(i,"playerHips")),Ge(O(i,"legL")),Ge(O(i,"legR")),Ge(O(i,"shinL")),Ge(O(i,"shinR")),Ge(O(i,"footL")),Ge(O(i,"footR")),Ge(O(i,"clavL")),Ge(O(i,"clavR")),Ge(O(i,"armL")),Ge(O(i,"armR")),Ge(O(i,"forearmL")),Ge(O(i,"forearmR")),Ge(O(i,"handL")),Ge(O(i,"handR")),Ge(O(i,"playerHead")),Ge(O(i,"playerTorso"));const t=O(i,"playerHips");t&&t.position.set(0,0,0);const e=O(i,"playerTorso");e&&(e.position.x=0,e.position.z=0,e.scale.set(1,1,1)),cn(O(i,"handR"),Pc(i)?.96:.22),cn(O(i,"handL"),.22),Qs(i),i.rotation.z=0,i.rotation.x=0,An(i,0)}function Pi(i,t,e=!1){if(Pc(i)){l1(i,t);return}const n=Math.sin(t*1.35)*.018,s=Math.sin(t*.55)*.018,o=Math.sin(t*.37+1.1)*.012,r=Math.sin(t*.28)*.08+Math.sin(t*.11)*.04,a=O(i,"playerHips"),c=O(i,"playerTorso");a&&(a.rotation.set(0,s*.12,s*.1),a.position.set(s*.08,0,0)),c&&(c.rotation.set(.015+n*.55,s*.1,s*.04-o*.06),c.position.x=0,c.position.z=0,c.scale.set(1+n*.008,1+n*.014,1+n*.006)),ot(O(i,"playerHead"),-.04+n*.28,r,-s*.06),ot(O(i,"clavL"),.02,0,-.02),ot(O(i,"clavR"),.02,0,.02),ot(O(i,"armL"),.08+n*.05,.06,-.13+o*.08),ot(O(i,"forearmL"),-.24+o*.06,.08,-.03),ot(O(i,"handL"),.06,.06,.02),ot(O(i,"armR"),.08-n*.05,-.06,.13-o*.08),ot(O(i,"forearmR"),-.24-o*.06,-.08,.03),ot(O(i,"handR"),.06,-.06,-.02),ot(O(i,"legL"),.02+s*.04,0,.02),ot(O(i,"legR"),-.01-s*.04,0,-.02),ot(O(i,"shinL"),Ae(.06+Math.max(0,s)*.04),0,0),ot(O(i,"shinR"),Ae(.08+Math.max(0,-s)*.04),0,0),ot(O(i,"footL"),.02,0,0),ot(O(i,"footR"),.03,0,0),cn(O(i,"handL"),.2),cn(O(i,"handR"),.2),An(i,n*.02)}const Ou={playerHips:[.02,-.1,.02],playerTorso:[.08,-.2,.04],playerHead:[-.04,.18,-.04],clavR:[.1,-.12,-.1],clavL:[.04,.08,.08],armR:[-.075,.32,.533],forearmR:[-1.887,-.185,.06],handR:[.622,-1.425,-.209],armL:[-.7,.15,-.3],forearmL:[-1.15,.1,0],handL:[.1,.2,.1],legL:[-.22,.06,.05],shinL:[.3,0,0],footL:[.06,.1,0],legR:[.12,-.04,-.04],shinR:[.2,0,0],footR:[.04,-.08,0],gripR:.96,gripL:.3,lift:.02};function l1(i,t){const e=Math.sin(t*1.4)*.016,n=Math.sin(t*.7)*.012,s=Math.sin(t*.43+.6)*.02,o=Ou;ot(O(i,"playerHips"),o.playerHips[0],o.playerHips[1]+n,o.playerHips[2]);const r=O(i,"playerHips");r&&(r.position.x=.02);const a=O(i,"playerTorso");a&&(a.rotation.set(o.playerTorso[0]+e*.5,o.playerTorso[1]+n*.5,o.playerTorso[2]),a.position.x=0,a.scale.set(1+e*.008,1+e*.012,1)),ot(O(i,"playerHead"),o.playerHead[0]+e*.2,o.playerHead[1],o.playerHead[2]),ot(O(i,"clavL"),...o.clavL),ot(O(i,"clavR"),...o.clavR),ot(O(i,"armL"),o.armL[0]+e*.08,o.armL[1],o.armL[2]),ot(O(i,"forearmL"),...o.forearmL),ot(O(i,"handL"),...o.handL),ot(O(i,"armR"),o.armR[0]+s*.6,o.armR[1],o.armR[2]),ot(O(i,"forearmR"),o.forearmR[0]-s*.5,o.forearmR[1],o.forearmR[2]),ot(O(i,"handR"),o.handR[0]+s,o.handR[1],o.handR[2]+n*.6),ot(O(i,"legL"),...o.legL),ot(O(i,"legR"),...o.legR),ot(O(i,"shinL"),Ae(o.shinL[0]),0,0),ot(O(i,"shinR"),Ae(o.shinR[0]),0,0),ot(O(i,"footL"),...o.footL),ot(O(i,"footR"),...o.footR),cn(O(i,"handR"),.97),cn(O(i,"handL"),.3),Qs(i),An(i,e*.02)}const h1=.94,zu=.82;function Ic(i){return Bi((Math.max(.25,i)-.3)/.68)}function ic(i){return ce(3.4,7.2,Ic(i))}function u1(i){const t=ce(.3,zu,Ic(i));return 2*h1*Math.sin(t)*.92}function Jo(i,t,e=.85,n=1){const s=Math.max(0,Math.min(1,n)),o=Math.max(.25,e),r=Ic(o),a=Bi((o-.62)/.4),c=ce(.3,zu,r)*s,l=Pc(i),h=Math.sin(t),u=Math.sin(t+Math.PI),d=Math.max(0,-Math.cos(t)),f=Math.max(0,-Math.cos(t+Math.PI)),m=Math.max(0,Math.cos(t)),_=Math.max(0,Math.cos(t+Math.PI)),g=Math.max(0,h)*d,p=Math.max(0,u)*f,S=Math.max(0,-h)*(1-m),M=Math.max(0,-u)*(1-_),v=Math.cos(t*2),D=ce(v*.016,-v*.052,a)*s,T=ce(.72,1.95,a),C=ce(.08,.42,a),P=O(i,"playerHips"),E=O(i,"playerTorso");P&&(P.rotation.y=h*ce(.09,.2,a)*s,P.rotation.z=-Math.cos(t)*ce(.03,.075,a)*s,P.rotation.x=ce(0,.1,a)*s,P.position.x=-h*.018*s);const x=ce(.5,.95,a);ot(O(i,"legL"),h*c-d*x,0,.03-a*.02),ot(O(i,"legR"),u*c-f*x,0,-.03+a*.02),ot(O(i,"shinL"),Ae(.12+d*T+g*.4+S*.18+m*C),0,0),ot(O(i,"shinR"),Ae(.12+f*T+p*.4+M*.18+_*C),0,0);const R=ce(.34,.1,a),F=ce(.26,.62,a);ot(O(i,"footL"),-d*R+m*Math.max(0,h)*F+a*.12,0,0),ot(O(i,"footR"),-f*R+_*Math.max(0,u)*F+a*.12,0,0);const U=ce(.05,.16,a);if(ot(O(i,"clavL"),-h*U*s,0,-.04),ot(O(i,"clavR"),-u*U*s,0,.04),l){const J=Math.max(0,u)*ce(.08,.22,a);ot(O(i,"armL"),-h*ce(.55,1.05,a)*s+.1,.06,-.06),ot(O(i,"forearmL"),ce(-.28,-1.35,a)-Math.max(0,h)*.2,.04,0),ot(O(i,"handL"),.06,.04,.04),ot(O(i,"armR"),.22+J*.35,.08,.14),ot(O(i,"forearmR"),-.62-J*.4,-.06,.04),ot(O(i,"handR"),.18+J*.2,-1.18,-.26),cn(O(i,"handR"),.96),cn(O(i,"handL"),.22)}else{const J=c*ce(1,.85,a),X=ce(0,1,a);ot(O(i,"armL"),-h*J+ce(.08,.3,a),.04+X*.16,-.12-X*.04),ot(O(i,"armR"),-u*J+ce(.08,.3,a),-.04-X*.16,.12+X*.04),ot(O(i,"forearmL"),ce(-.35-Math.max(0,h)*.4,-1.52-Math.max(0,-h)*.35,a),.06,0),ot(O(i,"forearmR"),ce(-.35-Math.max(0,u)*.4,-1.52-Math.max(0,-u)*.35,a),-.06,0),ot(O(i,"handL"),-h*.12,.04,.04+X*.2),ot(O(i,"handR"),-u*.12,-.04,-.04-X*.2),cn(O(i,"handL"),ce(.28,.72,a)),cn(O(i,"handR"),ce(.28,.72,a))}const G=ce(.03,.26,a)*s;E&&(E.rotation.y=-h*ce(.1,.2,a)*s,E.rotation.x=G,E.rotation.z=h*.03*s,E.position.x=-h*.01*s,E.position.z=0,E.scale.set(1,1,1)),ot(O(i,"playerHead"),-G*.65-Math.max(0,-v)*.03,h*.05*s,-h*.02*s),Qs(i),An(i,D)}function Bu(i,t){const e=Math.max(0,Math.min(1,t)),n=Ou,s={playerHips:[.04,-.32,-.05],playerTorso:[-.12,-.55,-.08],playerHead:[-.1,.32,.06],clavR:[-.16,-.28,-.32],clavL:[.08,.16,.16],armR:[-2.23,-.47,1.1],forearmR:[-1.77,.14,0],handR:[.8,-1.9,-.8],armL:[-.55,.2,-.28],forearmL:[-1.05,.12,.08],handL:[.1,.16,.1],legL:[-.28,.08,.06],shinL:[.32,0,0],footL:[.02,.12,0],legR:[.16,-.06,-.05],shinR:[.22,0,0],footR:[.1,-.1,0],gripR:.96,gripL:.3,lift:.04},o={playerHips:[0,.26,.06],playerTorso:[.22,.48,.1],playerHead:[.1,.2,-.08],clavR:[.18,.14,.12],clavL:[.04,.06,.1],armR:[-1.7,-.48,-.74],forearmR:[-.65,-.5,0],handR:[.72,-1.9,-.25],armL:[-.35,.14,.22],forearmL:[-.7,.08,.06],handL:[.08,.08,.12],legL:[-.4,.06,-.04],shinL:[.22,0,0],footL:[.08,.08,0],legR:[.26,-.04,.04],shinR:[.4,0,0],footR:[-.04,-.06,0],gripR:1.08,gripL:.34,lift:.05},r={...o,playerHips:[-.02,.32,.06],playerTorso:[.18,.62,.12],playerHead:[.12,.28,-.08],clavR:[.2,.18,.12],clavL:[.04,.08,.12],armR:[-1.56,-1,-.9],forearmR:[-.98,-.5,0],handR:[.78,-1.9,.04],armL:[-.2,.16,.26],forearmL:[-.55,.08,.06],gripR:.98,lift:.03};let a;e<.36?a=li(n,s,Kn(e/.36)):e<.52?a=li(s,o,Math.pow((e-.36)/.16,2.1)):e<.64?a=li(o,r,Bi((e-.52)/.12)):a=li(r,n,Kn((e-.64)/.36)),Fu(i,a)}function sc(i,t,e){const n=t%1,s=e==="tree",o=s?{playerHips:[.02,-.1,0],playerTorso:[.12,-.16,.04],playerHead:[.08,.12,0],clavR:[.06,-.1,-.08],clavL:[.04,.08,.1],armR:[.23,-.11,-.06],forearmR:[-1.43,.3,.06],handR:[-.04,-.56,-.4],armL:[.18,.16,.26],forearmL:[-.62,.1,.06],handL:[.1,.06,.08],legL:[-.12,.04,.04],shinL:[.24,0,0],legR:[.1,-.04,-.04],shinR:[.2,0,0],footL:[.04,.06,0],footR:[.04,-.06,0],gripR:.96,gripL:.28}:{playerHips:[.03,-.06,0],playerTorso:[.18,-.1,.02],playerHead:[.14,.06,0],clavR:[.08,-.06,-.06],clavL:[.04,.06,.1],armR:[.18,-.2,-.03],forearmR:[-1.35,.3,.06],handR:[-.07,-.58,-.45],armL:[.24,.14,.22],forearmL:[-.76,.08,.06],handL:[.12,.06,.08],legL:[-.1,.04,.04],shinL:[.3,0,0],legR:[.12,-.04,-.04],shinR:[.28,0,0],footL:[.04,0,0],footR:[.04,0,0],gripR:.96,gripL:.28},r=s?{playerHips:[.02,-.2,-.04],playerTorso:[-.12,-.32,-.06],playerHead:[-.02,.24,.04],clavR:[-.1,-.18,-.26],clavL:[.1,.12,.16],armR:[-2.49,.35,.03],forearmR:[-1.25,-.3,.06],handR:[.5,-1.9,-.45],armL:[.4,.26,.42],forearmL:[-.72,.12,.08],handL:[.14,.1,.1],legL:[-.22,.06,.05],shinL:[.28,0,0],legR:[.16,-.05,-.05],shinR:[.18,0,0],footL:[.02,.06,0],footR:[.08,-.06,0],gripR:.9,gripL:.26,lift:.045}:{playerHips:[.02,-.04,0],playerTorso:[-.2,-.08,0],playerHead:[-.14,.06,0],clavR:[-.18,-.04,-.22],clavL:[.08,.1,.18],armR:[-1.94,.76,-.6],forearmR:[-.1,-.27,.06],handR:[.5,-.94,-.45],armL:[-.44,.2,.36],forearmL:[-1.05,.12,.08],handL:[.12,.08,.1],legL:[-.14,.04,.04],shinL:[.14,0,0],legR:[.12,-.04,-.04],shinR:[.12,0,0],footL:[.1,0,0],footR:[.12,0,0],gripR:.9,gripL:.26,lift:.075},a=s?{playerHips:[0,.14,.05],playerTorso:[.4,.2,.08],playerHead:[.26,.1,-.04],clavR:[.18,.1,.12],clavL:[.02,.04,.1],armR:[-.57,.15,-.51],forearmR:[-1.36,-.3,.06],handR:[.5,-1.62,-.45],armL:[-.22,.12,.3],forearmL:[-.42,.06,.04],handL:[.06,.04,.12],legL:[-.34,.05,-.04],shinL:[.34,0,0],legR:[.24,-.04,.04],shinR:[.46,0,0],footL:[.06,.06,0],footR:[-.02,-.04,0],gripR:1.1,gripL:.34,lift:-.035}:{playerHips:[.14,.04,0],playerTorso:[.52,.06,.02],playerHead:[.3,.04,0],clavR:[.22,.04,.1],clavL:[.02,.04,.1],armR:[-1.01,-.8,.24],forearmR:[-.38,-.3,.06],handR:[.5,-.85,-.45],armL:[-.32,.16,.34],forearmL:[-.36,.06,.04],handL:[.06,.04,.12],legL:[-.42,.05,.05],shinL:[.72,0,0],legR:[-.34,-.05,-.05],shinR:[.66,0,0],footL:[-.16,0,0],footR:[-.14,0,0],gripR:1.12,gripL:.36,lift:-.09},c=s?{...a,playerTorso:[.3,.14,.06],playerHips:[0,.1,.04],clavR:[.14,.08,.1],armR:[-.21,.08,-.5],forearmR:[-1.68,-.3,.06],handR:[.5,-1.23,-.19],gripR:1,lift:.005}:{...a,playerTorso:[.4,.05,.02],playerHips:[.1,.03,0],clavR:[.18,.03,.08],armR:[-.58,.1,-.12],forearmR:[-1.1,-.2,.06],handR:[.4,-1.05,-.3],shinL:[.6,0,0],shinR:[.56,0,0],gripR:1.02,lift:-.04},l=s?.38:.46,h=s?.16:.14;let u;n<l?u=li(o,r,Kn(n/l)):n<l+h?u=li(r,a,Math.pow((n-l)/h,s?2:2.4)):n<l+h+.1?u=li(a,c,Bi((n-l-h)/.1)):u=li(c,o,Kn((n-l-h-.1)/(.9-l-h))),Fu(i,u)}function fh(i,t,e=.55){const n=Math.max(0,Math.min(1,t)),s=Math.max(.2,Math.min(1.4,e)),o=Math.sin(n*Math.PI);i.rotation.z=o*.3*s,i.rotation.x=-o*(s>.7?.24:.13)*s;const r=s>.7?o*.3*(s-.7):o*.08*s,a=i.getObjectByName("playerTorso")||i.getObjectByName("yetiBody")||i.getObjectByName("orcBody");a&&(a.rotation.y=r,a.rotation.x=-o*.1*s)}function Ds(i,t,e,n){let s=t-i;for(;s>Math.PI;)s-=Math.PI*2;for(;s<-Math.PI;)s+=Math.PI*2;const o=Math.sign(s)*Math.min(Math.abs(s),e*n);return i+o}function ku(i,t){const e=Math.max(0,Math.min(1,t));let n=0,s=0;if(e<.42)n=e>.3?1:Kn(e/.3);else if(e<.62){const h=Kn((e-.42)/.2);n=1-h,s=h}else s=1-Bi((e-.62)/.38);const o=1-n-s,r=o*0+n*-.22+s*.28,a=n*.65+s*.85;ot(O(i,"yetiArmR"),o*ie.armX+n*-2.25+s*-1.85,o*.04+n*-.48+s*.55,o*ie.armZ+n*.85+s*.22),ot(O(i,"yetiArmL"),o*ie.armX+n*-2.05+s*-1.7,o*-.04+n*.4+s*-.5,o*-.22+n*-.78+s*-.2),ot(O(i,"yetiForearmR"),o*ie.forearmX+n*-1.25+s*-.18,.1,.06),ot(O(i,"yetiForearmL"),o*ie.forearmX+n*-1.1+s*-.16,-.1,-.06);const c=O(i,"yetiHead");c&&(c.rotation.x=ie.headX-a*.45+s*.18,c.rotation.y=s*.2,c.rotation.z=n*.06);const l=O(i,"yetiBody");l&&(l.rotation.x=ie.bodyX+r,l.rotation.y=s*.22-n*.1,l.rotation.z=s*.08),ot(O(i,"yetiLegL"),o*.06+n*.1+s*-.52,0,.05),ot(O(i,"yetiLegR"),o*.06+n*.48+s*.14,0,-.05),ot(O(i,"yetiShinL"),Ae(.14+n*.18+s*.4),0,0),ot(O(i,"yetiShinR"),Ae(.16+n*.55+s*.12),0,0),ot(O(i,"yetiFootL"),n*.1+s*-.16,0,0),ot(O(i,"yetiFootR"),n*.18+s*-.06,0,0),An(i,s*.09+n*.04)}function Hu(i,t){const e=Math.max(0,Math.min(1,t));let n=0,s=0;if(e<.4)n=e>.28?1:Kn(e/.28);else if(e<.58){const l=Kn((e-.4)/.18);n=1-l,s=l}else s=1-Bi((e-.58)/.42);const o=1-n-s,r=o*.04+n*-.2+s*.14;Ko(O(i,"orcSpear"),{rx:n*-.45+s*.85,z:n*-.04+s*.04,y:n*.02,ry:s*.02}),ot(O(i,"orcArmR"),o*-.32+n*.85+s*-1.95,o*.06+n*.18+s*.1,o*.18+n*.28+s*.12),ot(O(i,"orcForearmR"),o*-.42+n*-1.2+s*-.04,-.08,.05),ot(O(i,"orcArmL"),o*-.1+n*.35+s*-1.15,o*.02+n*-.12+s*.48,o*-.18+n*-.1+s*-.1),ot(O(i,"orcForearmL"),o*-.28+n*-.45+s*-.45,.1,-.05);const a=O(i,"orcHead");a&&(a.rotation.x=n*-.08+s*-.18+r*.2,a.rotation.y=s*.06,a.rotation.z=0);const c=O(i,"orcBody");c&&(c.rotation.x=r,c.rotation.y=n*-.08+s*.12,c.rotation.z=0),ot(O(i,"orcLegL"),o*0+n*.08+s*-.68,0,.04),ot(O(i,"orcLegR"),o*0+n*.58+s*.28,0,-.04),ot(O(i,"orcShinL"),Ae(.1+n*.16+s*.42),0,0),ot(O(i,"orcShinR"),Ae(.14+n*.55+s*.14),0,0),ot(O(i,"orcFootL"),s*-.14,0,0),ot(O(i,"orcFootR"),n*.12,0,0),An(i,Math.abs(r)*.05+s*.03)}function Ai(i,t,e,n=1){const s=Math.max(0,Math.min(1,n));if(!e||s<.05){const v=t,D=Math.sin(v*1.15)*.03,T=Math.sin(v*.48)*.02,C=Math.sin(v*.31+1.2)*.012,P=Math.sin(v*.22)*.07+Math.sin(v*.09)*.035;ot(O(i,"yetiArmR"),ie.armX+D*.3+T*.35,.05,ie.armZ),ot(O(i,"yetiArmL"),ie.armX-D*.22-T*.35,-.05,-.22),ot(O(i,"yetiForearmR"),ie.forearmX-D*.12,.05,.04),ot(O(i,"yetiForearmL"),ie.forearmX+D*.1,-.05,-.04),ot(O(i,"yetiLegL"),ie.legX+T*.32,0,.04),ot(O(i,"yetiLegR"),ie.legX-T*.32,0,-.04),ot(O(i,"yetiShinL"),Ae(ie.kneeX+Math.max(0,T)*.1),0,0),ot(O(i,"yetiShinR"),Ae(ie.kneeX+Math.max(0,-T)*.1),0,0),ot(O(i,"yetiFootL"),ie.footX,0,0),ot(O(i,"yetiFootR"),ie.footX,0,0);const E=O(i,"yetiHead");E&&(E.rotation.x=ie.headX+D*.28,E.rotation.y=P,E.rotation.z=C*.35);const x=O(i,"yetiBody");x&&(x.rotation.x=ie.bodyX+D*.1,x.rotation.y=T*.3,x.rotation.z=T*.18),An(i,Math.abs(D)*.35);return}const o=Math.sin(t),r=Math.sin(t+Math.PI),a=Math.max(0,-Math.cos(t)),c=Math.max(0,-Math.cos(t+Math.PI)),l=Math.max(0,Math.cos(t)),h=Math.max(0,Math.cos(t+Math.PI)),u=Math.max(0,o)*a,d=Math.max(0,r)*c,f=Math.max(0,-o)*(1-l),m=Math.max(0,-r)*(1-h),_=Math.cos(t*2),g=.64*s,p=Math.max(0,-_)*.055*s;ot(O(i,"yetiLegL"),o*g-a*.34,0,.05),ot(O(i,"yetiLegR"),r*g-c*.34,0,-.05),ot(O(i,"yetiShinL"),Ae(.16+a*.85+u*.4+f*.18+l*.14),0,0),ot(O(i,"yetiShinR"),Ae(.16+c*.85+d*.4+m*.18+h*.14),0,0),ot(O(i,"yetiFootL"),-a*.26+l*Math.max(0,o)*.24,0,0),ot(O(i,"yetiFootR"),-c*.26+h*Math.max(0,r)*.24,0,0),ot(O(i,"yetiArmL"),ie.armX-o*.72*s,.06,-.22),ot(O(i,"yetiArmR"),ie.armX-r*.72*s,-.06,ie.armZ),ot(O(i,"yetiForearmL"),ie.forearmX-Math.max(0,o)*.55,.06,-.04),ot(O(i,"yetiForearmR"),ie.forearmX-Math.max(0,r)*.55,-.06,.04);const S=O(i,"yetiBody");S&&(S.rotation.x=ie.bodyX+.02+p*.9,S.rotation.y=-o*.1*s,S.rotation.z=o*.05*s);const M=O(i,"yetiHead");M&&(M.rotation.x=ie.headX-.02-p*.55,M.rotation.y=o*.055*s,M.rotation.z=-o*.025*s),An(i,p)}function os(i,t,e,n=1){const s=Math.max(0,Math.min(1,n)),o=O(i,"orcSpear");if(!e||s<.05){const T=t,C=Math.sin(T*1.45)*.02,P=Math.sin(T*.62)*.016,E=Math.sin(T*.27)*.06+Math.sin(T*.11)*.03;ot(O(i,"orcArmL"),.02+C*.45,.05,-.18),ot(O(i,"orcArmR"),-.32+C*.2,.08,.2),ot(O(i,"orcForearmL"),-.3+C*.1,.04,-.04),ot(O(i,"orcForearmR"),-.42-C*.08,-.05,.05),Ko(o),ot(O(i,"orcLegL"),P*.25,0,.02),ot(O(i,"orcLegR"),-P*.25,0,-.02),ot(O(i,"orcShinL"),Ae(.08+Math.max(0,P)*.06),0,0),ot(O(i,"orcShinR"),Ae(.08+Math.max(0,-P)*.06),0,0),ot(O(i,"orcFootL"),-.03,0,0),ot(O(i,"orcFootR"),-.03,0,0);const x=O(i,"orcBody");x&&(x.rotation.x=.04+C*.15,x.rotation.y=P*.3,x.rotation.z=P*.15);const R=O(i,"orcHead");R&&(R.rotation.x=C*.35,R.rotation.y=E,R.rotation.z=0),An(i,Math.abs(C)*.4);return}const r=Math.sin(t),a=Math.sin(t+Math.PI),c=Math.max(0,-Math.cos(t)),l=Math.max(0,-Math.cos(t+Math.PI)),h=Math.max(0,Math.cos(t)),u=Math.max(0,Math.cos(t+Math.PI)),d=Math.max(0,r)*c,f=Math.max(0,a)*l,m=Math.max(0,-r)*(1-h),_=Math.max(0,-a)*(1-u),g=Math.cos(t*2),p=.56*s,S=Math.max(0,-g)*.04*s;ot(O(i,"orcLegL"),r*p-c*.45,0,.04),ot(O(i,"orcLegR"),a*p-l*.45,0,-.04),ot(O(i,"orcShinL"),Ae(.1+c*.85+d*.32+m*.14+h*.1),0,0),ot(O(i,"orcShinR"),Ae(.1+l*.85+f*.32+_*.14+u*.1),0,0),ot(O(i,"orcFootL"),-c*.28+h*Math.max(0,r)*.22,0,0),ot(O(i,"orcFootR"),-l*.28+u*Math.max(0,a)*.22,0,0),ot(O(i,"orcArmL"),-r*.78*s+.04,.05,-.18),ot(O(i,"orcForearmL"),-.3-Math.max(0,r)*.5,.05,-.03);const M=Math.max(0,a)*.16*s;ot(O(i,"orcArmR"),-.34-M*.4,.08,.18),ot(O(i,"orcForearmR"),-.42-M*.3,-.05,.05),Ko(o,{rx:-a*.03*s,y:S*.4});const v=O(i,"orcBody");v&&(v.rotation.x=.08*s+S*.7,v.rotation.y=-r*.08*s,v.rotation.z=r*.03*s);const D=O(i,"orcHead");D&&(D.rotation.x=-.05-S*.4,D.rotation.y=r*.04*s,D.rotation.z=0),An(i,S)}function d1(i,t,e){const n=Math.max(0,Math.min(1,e)),s=Kn(Math.min(1,n/.55)),o=Bi(Math.max(0,(n-.35)/.65));if(t==="yeti"){i.rotation.z=s*1.25,i.rotation.x=s*.42+o*.15,i.position.y=-s*.45-o*.12,i.scale.setScalar(1.15*(1-o*.12));const r=O(i,"yetiArmR"),a=O(i,"yetiArmL");r&&(r.rotation.x=o*.8),a&&(a.rotation.x=-o*.5),ot(O(i,"yetiForearmR"),ie.forearmX-o*.4,0,0),ot(O(i,"yetiForearmL"),ie.forearmX+o*.25,0,0),ot(O(i,"yetiShinL"),Ae(o*.55),0,0),ot(O(i,"yetiShinR"),Ae(o*.4),0,0);const c=O(i,"yetiHead");c&&(c.rotation.x=ie.headX+o*.6)}else if(t==="orc"){i.rotation.x=s*1.45,i.rotation.z=o*.25,i.position.y=-s*.18-o*.08,i.scale.setScalar(1-o*.22);const r=O(i,"orcArmR"),a=O(i,"orcArmL");r&&(r.rotation.x=-o*.9),a&&(a.rotation.x=o*.6),ot(O(i,"orcForearmR"),-.28-o*.35,0,0),ot(O(i,"orcForearmL"),-.28+o*.2,0,0),ot(O(i,"orcShinL"),Ae(o*.45),0,0),ot(O(i,"orcShinR"),Ae(o*.3),0,0);const c=O(i,"orcSpear");c&&Ko(c,{rx:o*.5,y:-o*.12})}else i.rotation.z=s*.7,i.rotation.x=o*.2,i.position.y=-s*.25-o*.05}const f1=.44,ph=.56,p1=.48,m1=.62,g1=.45,_1=.58,jo=.78,Qo=1.05,tr=.82,v1=.36,x1=.42,y1=.4;class M1{renderer;scene;camera;hero;pivot;clock=new lu;running=!1;raf=0;canvas;constructor(t){this.canvas=t,this.renderer=new wc({canvas:t,antialias:!0,alpha:!0}),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.renderer.outputColorSpace=We,this.renderer.toneMapping=er,this.renderer.toneMappingExposure=1.38,this.renderer.setClearColor(0,0),this.renderer.shadowMap.enabled=!0,this.scene=new Vs,this.scene.add(new Ys(15923199,4872754,1.05));const e=new Fn(16774880,1.9);e.position.set(2.4,4.2,3.2),e.castShadow=!0,this.scene.add(e);const n=new Fn(13163775,.45);n.position.set(-3,1.6,-2.4),this.scene.add(n),this.camera=new Ze(32,1,.1,20);const s=new I(0,1,0);this.camera.position.setFromSpherical(new hu(3.4,1.22,.55)).add(s),this.camera.lookAt(s),this.pivot=new dt,this.hero=Cc(),this.pivot.add(this.hero),this.scene.add(this.pivot);const o=new w(new Rn(.55,32),new ue({color:0,transparent:!0,opacity:.28}));o.rotation.x=-Math.PI/2,o.position.y=.01,this.scene.add(o),this.resize()}setEnvironment(t){this.scene.environment=t}syncEquipment(t){an(this.hero,tc(t.equipped.weapon)),ec(this.hero,t)}showSlot(t,e){ec(this.hero,e),t==="weapon"&&e.equipped.weapon?an(this.hero,tc(e.equipped.weapon)):t==="hatchet"&&e.equipped.hatchet?an(this.hero,"hatchet"):t==="pickaxe"&&e.equipped.pickaxe?an(this.hero,"pickaxe"):this.syncEquipment(e)}start(){if(this.running)return;this.running=!0,this.clock.getDelta(),this.resize();const t=()=>{if(!this.running)return;this.raf=requestAnimationFrame(t);const e=Math.min(.05,this.clock.getDelta());this.pivot.rotation.y+=e*.18,Pi(this.hero,this.clock.elapsedTime),this.renderer.render(this.scene,this.camera)};t()}stop(){this.running=!1,cancelAnimationFrame(this.raf)}resize(){const t=Math.max(120,this.canvas.clientWidth||220),e=Math.max(160,this.canvas.clientHeight||280);this.renderer.setSize(t,e,!1),this.camera.aspect=t/e,this.camera.updateProjectionMatrix()}}function Qe(i,t={}){return new Ue({color:i,roughness:t.roughness??.78,metalness:t.metalness??.08,...t})}function un(i,t){return t.castShadow=!0,i.add(t),t}function w1(i){return i==="bronze_sword"?Pu():i==="bronze_hatchet"?Cu():i==="bronze_pickaxe"?Lu():i==="whisper_logs"?S1():i==="copper_ore"?mh(12088115,9062940):i==="tin_ore"?mh(13160660,9081494):i==="camp_rations"?E1():i==="yeti_fur"?T1():i==="frost_claw"?b1():i==="yeti_hide"?W_():i==="frost_fang"?X_():i==="yeti_bone"?q_():i==="rime_shard"?Y_():i==="frost_sword"?vu():i==="frost_shield"?wu():i==="frost_bow"?Mu():i==="frost_hammer"?xu():i==="frost_spear"?yu():i==="frost_chest"?Su():i==="frost_greaves"?Eu():i==="frost_legs"?Tu():i==="frost_boots"?bu():i==="orc_tooth"?A1():i==="scout_leather"?R1():C1()}function S1(){const i=new dt,t=Qe(6964260,{roughness:.92}),e=Qe(12886122,{roughness:.7});for(let n=0;n<3;n++){const s=new dt,o=new w(new Xt(.055,.06,.42,8),t);o.rotation.z=Math.PI/2,un(s,o);for(const r of[-.21,.21]){const a=new w(new Rn(.056,8),e);a.rotation.y=Math.PI/2,a.position.x=r,s.add(a)}s.position.set(0,(n-1)*.07,(n-1)*.04),s.rotation.z=(n-1)*.18,i.add(s)}return i}function mh(i,t){const e=new dt,n=Qe(t,{roughness:.95}),s=Qe(i,{roughness:.45,metalness:.55}),o=new w(new Tn(.16,0),n);o.scale.set(1.15,.9,1.05),un(e,o);for(let r=0;r<4;r++){const a=r/4*Math.PI*2,c=new w(new Tn(.055,0),r%2?s:n);c.position.set(Math.cos(a)*.12,r%2*.06-.02,Math.sin(a)*.1),c.rotation.set(a,r,.3),un(e,c)}return e}function E1(){const i=new dt,t=Qe(9069112,{roughness:.88}),e=Qe(9054754,{roughness:.7}),n=new w(new Vt(.22,.1,.16),t);un(i,n);const s=new w(new ke(.09,.01,6,12),Qe(3810324,{roughness:.9}));s.rotation.x=Math.PI/2,i.add(s);const o=new w(new Vt(.16,.03,.05),e);return o.position.y=.06,un(i,o),i}function T1(){const i=new dt,t=Qe(15266038,{roughness:.97}),e=Qe(12110038,{roughness:.97}),n=new w(new tt(.14,10,8),t);n.scale.set(1.3,.45,1.1),un(i,n);for(let s=0;s<7;s++){const o=s/7*Math.PI*2,r=new w(new Tn(.055,0),s%2?e:t);r.position.set(Math.cos(o)*.1,.04,Math.sin(o)*.08),r.scale.set(1.4,.55,1),r.rotation.y=o,un(i,r)}return i}function b1(){const i=new dt,t=Qe(1909291,{roughness:.32,metalness:.4}),e=new w(new ye(.045,.28,7),t);e.rotation.x=.55,un(i,e);const n=new w(new tt(.05,8,6),Qe(3817544,{roughness:.8}));return n.position.y=-.1,un(i,n),i}function A1(){const i=new dt,t=new w(new ye(.04,.26,7),Qe(15920084,{roughness:.4}));return t.rotation.z=.25,t.rotation.x=-.15,un(i,t),i}function R1(){const i=new dt,t=Qe(7030054,{roughness:.86}),e=Qe(4073492,{roughness:.9}),n=new w(new Vt(.22,.04,.16),t);n.rotation.z=.12,un(i,n);const s=new w(new Vt(.14,.03,.12),e);return s.position.set(.02,.03,.01),s.rotation.z=-.2,un(i,s),i}function C1(){const i=new dt;return un(i,new w(new Vt(.16,.16,.16),Qe(6710886))),i}const hi=128,gh=new Map;let Ln=null,Ii=null,Ri=null;function L1(){if(Ln)return;Ln=new wc({antialias:!0,alpha:!0,preserveDrawingBuffer:!0}),Ln.setPixelRatio(1),Ln.setSize(hi,hi,!1),Ln.outputColorSpace=We,Ln.toneMapping=er,Ln.toneMappingExposure=1.35,Ln.setClearColor(0,0),Ii=new Vs,Ii.add(new Ys(16054271,4864552,1.05));const i=new Fn(16774364,1.8);i.position.set(2.2,3.4,2.6),Ii.add(i);const t=new Fn(13163775,.55);t.position.set(-2.4,1.2,-1.6),Ii.add(t),Ri=new Ze(32,1,.02,20)}function P1(i){const t=new Jn().setFromObject(i),e=t.getSize(new I),n=t.getCenter(new I);i.position.sub(n);const s=Math.max(e.x,e.y,e.z,.08);Ri.position.set(s*1.15,s*.55,s*1.7),Ri.near=s*.05,Ri.far=s*8,Ri.updateProjectionMatrix(),Ri.lookAt(0,0,0)}function I1(i){const t=gh.get(i);if(t)return t;L1();const e=w1(i);(i==="bronze_sword"||i==="frost_sword")&&e.rotation.set(.15,.85,-.85),i==="frost_spear"&&e.rotation.set(.2,.7,-1.05),(i==="bronze_hatchet"||i==="frost_hammer")&&e.rotation.set(.25,.95,-.35),i==="bronze_pickaxe"&&e.rotation.set(.15,.7,-.25),i==="frost_bow"&&e.rotation.set(.05,.9,.2),i==="frost_shield"&&e.rotation.set(.35,.85,.15),i==="frost_chest"&&e.rotation.set(.2,.7,0),(i==="frost_greaves"||i==="frost_legs")&&e.rotation.set(.15,.6,.15),i==="frost_boots"&&e.rotation.set(.6,.4,0),Ii.add(e),P1(e),Ln.render(Ii,Ri);const n=document.createElement("canvas");return n.width=hi,n.height=hi,n.getContext("2d").drawImage(Ln.domElement,0,0),Ii.remove(e),e.traverse(s=>{const o=s;o.geometry&&o.geometry.dispose()}),gh.set(i,n),n}function ta(i,t){const e=I1(t);i.width=hi,i.height=hi;const n=i.getContext("2d");n&&(n.clearRect(0,0,hi,hi),n.drawImage(e,0,0))}class D1{chatLog;invGrid;invCount;skillsList;skillsPanel;progressWrap;progressFill;progressLabel;targetInfo;targetName;targetHp;hpText;prayText;stamText;hpRing;prayRing;stamRing;minimap;minimapCtx;touchHint;inventory;btnInventory;gearPanel;btnGear;gearInspect;heroPane;forgePanel;forgeList;narrowMq;desktopInvInited=!1;circum=2*Math.PI*28;onAction=null;onInventoryClick=null;onGearSlotClick=null;onForgeCraft=null;constructor(){this.chatLog=ae("chat-log"),this.invGrid=ae("inv-grid"),this.invCount=ae("inv-count"),this.skillsList=ae("skills-list"),this.skillsPanel=ae("skills-panel"),this.progressWrap=ae("progress-wrap"),this.progressFill=ae("progress-fill"),this.progressLabel=ae("progress-label"),this.targetInfo=ae("target-info"),this.targetName=ae("target-name"),this.targetHp=ae("target-hp"),this.hpText=ae("hp-text"),this.prayText=ae("pray-text"),this.stamText=ae("stam-text"),this.hpRing=ae("hp-ring"),this.prayRing=ae("pray-ring"),this.stamRing=ae("stam-ring"),this.minimap=ae("minimap"),this.minimapCtx=this.minimap.getContext("2d"),this.touchHint=ae("touch-hint"),this.inventory=ae("inventory"),this.btnInventory=ae("btn-inventory"),this.gearPanel=ae("gear-panel"),this.btnGear=ae("btn-gear"),this.gearInspect=ae("gear-inspect"),this.heroPane=new M1(ae("gear-hero")),this.forgePanel=ae("forge-panel"),this.forgeList=ae("forge-list"),ae("forge-close").addEventListener("click",()=>this.setForgeOpen(!1)),this.narrowMq=window.matchMedia("(max-width: 480px)"),this.btnGear.addEventListener("click",()=>this.setGearOpen(this.gearPanel.hidden)),ae("gear-close").addEventListener("click",()=>this.setGearOpen(!1)),this.gearPanel.querySelectorAll(".gear-slot").forEach(e=>{e.addEventListener("click",()=>{const n=e.dataset.slot;n&&this.onGearSlotClick?.(n)})}),ae("btn-skills").addEventListener("click",()=>{this.skillsPanel.hidden=!this.skillsPanel.hidden}),ae("skills-close").addEventListener("click",()=>{this.skillsPanel.hidden=!0}),this.btnInventory.addEventListener("click",()=>{this.setInventoryOpen(this.inventory.hidden)}),ae("inv-close").addEventListener("click",()=>{this.setInventoryOpen(!1)});const t=()=>this.syncInventoryForViewport();typeof this.narrowMq.addEventListener=="function"?this.narrowMq.addEventListener("change",t):this.narrowMq.addListener(t),this.syncInventoryForViewport(),document.querySelectorAll(".ab-slot").forEach(e=>{e.addEventListener("click",()=>{const n=e.dataset.action;n&&this.onAction?.(n),e.classList.add("active"),setTimeout(()=>e.classList.remove("active"),120)})}),setTimeout(()=>this.touchHint.classList.add("fade"),8e3)}syncInventoryForViewport(){this.narrowMq.matches?(this.desktopInvInited=!1,this.setInventoryOpen(!1)):this.desktopInvInited||(this.desktopInvInited=!0,this.setInventoryOpen(!0))}setGearOpen(t){this.gearPanel.hidden=!t,this.btnGear.setAttribute("aria-expanded",t?"true":"false"),t?(this.heroPane.resize(),this.heroPane.start()):this.heroPane.stop()}isGearOpen(){return!this.gearPanel.hidden}setForgeOpen(t,e){this.forgePanel.hidden=!t,t&&e&&this.setForgeRecipes(e)}isForgeOpen(){return!this.forgePanel.hidden}setForgeRecipes(t){this.forgeList.innerHTML="";for(const e of uu){const n=du(t,e.id),s=fu(t,e),o=document.createElement("div");o.className=`forge-row${n?" owned":""}`;const r=document.createElement("canvas");r.className="item-icon",r.width=128,r.height=128,ta(r,e.id);const a=document.createElement("div");a.className="forge-meta";const c=e.cost.map(u=>{const d=lr(t.inventory,u.id),f=In[u.id]?.name??u.id;return`<span class="${d>=u.qty?"have":"need"}">${f} ${d}/${u.qty}</span>`}).join(" · ");a.innerHTML=`<div class="forge-name">${e.name}</div><div class="forge-desc">${e.blurb}</div><div class="forge-cost">${c}</div>`;const l=document.createElement("button");l.type="button",l.className="forge-craft",l.textContent=n?"Owned":"Forge",l.disabled=!s;const h=e.id;l.addEventListener("click",()=>this.onForgeCraft?.(h)),o.append(r,a,l),this.forgeList.appendChild(o)}}setEnvironment(t){this.heroPane.setEnvironment(t)}setEquipment(t,e){this.isForgeOpen()&&this.setForgeRecipes(t),this.heroPane.syncEquipment(t);for(const{id:n,label:s}of z_){const o=this.gearPanel.querySelector(`.gear-slot[data-slot="${n}"]`);if(!o)continue;const r=t.equipped[n],a=o.querySelector("canvas.item-icon"),c=o.querySelector(".gear-empty");if(o.classList.toggle("filled",!!r),r&&a){ta(a,r),a.hidden=!1,c&&(c.hidden=!0);const l=In[r];o.title=`${s}: ${l?.name??r} (click to unequip)`}else a&&(a.hidden=!0),c&&(c.hidden=!1),o.title=`${s}: empty`}e&&(this.gearInspect.textContent=e)}inspectGear(t){this.gearInspect.textContent=t}showSlotPreview(t,e){this.heroPane.showSlot(t,e)}setInventoryOpen(t){this.inventory.hidden=!t,this.btnInventory.setAttribute("aria-expanded",t?"true":"false"),this.narrowMq.matches||(this.btnInventory.style.display=t?"none":"flex")}chat(t,e="system"){const n=document.createElement("div");for(n.className=`chat-line ${e==="plain"?"":e}`.trim(),n.textContent=t,this.chatLog.appendChild(n);this.chatLog.children.length>40;)this.chatLog.removeChild(this.chatLog.firstChild);this.chatLog.scrollTop=this.chatLog.scrollHeight}setOrbs(t,e,n,s){this.hpText.textContent=String(Math.round(t)),this.prayText.textContent=String(Math.round(n)),this.stamText.textContent=String(Math.round(s)),this.setRing(this.hpRing,t/e),this.setRing(this.prayRing,n/100),this.setRing(this.stamRing,s/100)}setRing(t,e){const n=Math.max(0,Math.min(1,e));t.style.strokeDasharray=String(this.circum),t.style.strokeDashoffset=String(this.circum*(1-n))}setInventory(t){this.invGrid.innerHTML="";const e=28;for(let n=0;n<e;n++){const s=document.createElement("div");s.className="inv-slot";const o=t[n];if(o){s.classList.add("has-item");const r=In[o.id],a=document.createElement("canvas");if(a.className="item-icon",a.width=128,a.height=128,ta(a,o.id),s.appendChild(a),s.title=`${r?.name??o.id}${o.qty>1?` ×${o.qty}`:""}${r?.slot?" — click to equip":o.id==="camp_rations"?" — click to eat":""}`,o.qty>1){const l=document.createElement("span");l.className="inv-qty",l.textContent=String(o.qty),s.appendChild(l)}const c=n;s.addEventListener("click",()=>this.onInventoryClick?.(c))}this.invGrid.appendChild(s)}this.invCount.textContent=`${t.length}/${e}`}setSkills(t){this.skillsList.innerHTML="",Object.keys(nh).forEach(e=>{const n=t.skills[e],s=nh[e],o=document.createElement("div");o.className="skill-row";const r=Yo(n.level+1),a=Yo(n.level),c=n.level>=99?100:(n.xp-a)/(r-a)*100;o.innerHTML=`
        <div class="skill-icon">${s.icon}</div>
        <div class="skill-meta">
          <div class="skill-name">${s.name}</div>
          <div class="skill-xp"><div style="width:${c}%"></div></div>
        </div>
        <div class="skill-lvl">${n.level}</div>
      `,this.skillsList.appendChild(o)})}showProgress(t,e){this.progressWrap.hidden=!1,this.progressLabel.textContent=t,this.progressFill.style.width=`${Math.max(0,Math.min(100,e*100))}%`}hideProgress(){this.progressWrap.hidden=!0,this.progressFill.style.width="0%"}showTarget(t,e){this.targetInfo.hidden=!1,this.targetName.textContent=t,this.targetHp.style.width=`${Math.max(0,Math.min(100,e*100))}%`}hideTarget(){this.targetInfo.hidden=!0}drawMinimap(t,e,n,s){const o=this.minimapCtx,r=this.minimap.width,a=this.minimap.height,c=r/2,l=a/2,h=Math.min(r,a)/2-1;o.clearRect(0,0,r,a),o.save(),o.beginPath(),o.arc(c,l,h,0,Math.PI*2),o.clip();const u=o.createRadialGradient(c,l,4,c,l,h);u.addColorStop(0,"#4a7a30"),u.addColorStop(.65,"#2c4e20"),u.addColorStop(1,"#1a3014"),o.fillStyle=u,o.fillRect(0,0,r,a);for(let f=0;f<36;f++)o.fillStyle=f%2?"#3a6828":"#2e5420",o.fillRect(f*41%r,f*59%a,7,7);const d=3.2;for(const f of s){const m=c+(f.x-t)*d,_=l+(f.z-e)*d,g=m-c,p=_-l;g*g+p*p>(h-4)*(h-4)||(o.fillStyle=f.color,o.beginPath(),o.arc(m,_,3,0,Math.PI*2),o.fill())}o.save(),o.translate(c,l),o.rotate(n),o.fillStyle="#f0d070",o.beginPath(),o.moveTo(0,-6),o.lineTo(4,5),o.lineTo(0,2),o.lineTo(-4,5),o.closePath(),o.fill(),o.restore(),o.restore(),o.beginPath(),o.arc(c,l,h-.5,0,Math.PI*2),o.strokeStyle="#8a6a28",o.lineWidth=3,o.stroke(),o.beginPath(),o.arc(c,l,h-3,0,Math.PI*2),o.strokeStyle="rgba(212,168,75,0.35)",o.lineWidth=1.5,o.stroke(),o.fillStyle="#e8c060",o.beginPath(),o.moveTo(c,6),o.lineTo(c+5,14),o.lineTo(c-5,14),o.closePath(),o.fill(),o.fillStyle="#f0d070",o.font="bold 11px Segoe UI, system-ui, sans-serif",o.textAlign="center",o.fillText("N",c,26)}}function ae(i){const t=document.getElementById(i);if(!t)throw new Error(`Missing #${i}`);return t}const Gu=[];function nn(i,t){let e=Math.imul(i|0,1597334677)^Math.imul(t|0,3812015801);return e=Math.imul(e^e>>>16,2146121005),e=Math.imul(e^e>>>15,2221713035),((e^e>>>16)>>>0)/4294967296}function _h(i){return i*i*i*(i*(i*6-15)+10)}function hr(i,t){const e=Math.floor(i),n=Math.floor(t),s=i-e,o=t-n,r=_h(s),a=_h(o),c=nn(e,n),l=nn(e+1,n),h=nn(e,n+1),u=nn(e+1,n+1);return c+(l-c)*r+(h-c)*a+(c-l-h+u)*r*a}function ls(i,t,e=5){let n=0,s=.5,o=1,r=0;for(let a=0;a<e;a++)n+=s*hr(i*o,t*o),r+=s,s*=.5,o*=2.07;return n/r}function U1(i,t){const e=ls(i*.31+17.2,t*.31-9.4,3),n=ls(i*.31-8.1,t*.31+5.6,3);return ls(i*.11+e*1.65,t*.11+n*1.65,5)}function Dc(i,t){const e=Math.exp(-((i*.15+.05)**2)*8-(t*.12-.15)**2*3),n=Math.exp(-((i+.5-t*.35)**2)*2.2-(t-1.2)**2*.08),s=Math.exp(-((i+3.2-t*.15)**2)*1.4-(t+2.5)**2*.06);return Math.max(e,n*.85,s*.75)}function Uc(i,t){const e=Math.exp(-((i-4.2)**2)*.09-(t-7.2)**2*.08),n=Math.exp(-((i-5.5)**2)*.15-(t-6)**2*.12);return Math.max(e,n*.85)}function N1(i,t){return Math.exp(-((i+2.05)**2+(t+.55)**2)*.11)}function Ce(i,t){const e=(U1(i,t)-.5)*.38,n=(ls(i*1.65+41.2,t*1.65-18.7,4)-.5)*.07,s=(hr(i*7.2+3.1,t*7.2-2.4)-.5)*.022;let o=e+n+s;return o*=1-N1(i,t)*.84,o*=1-Dc(i,t)*.38,o+=Uc(i,t)*.045,o}function F1(i,t){return ls(i*2.4+12.7,t*2.4-6.3,4)}function O1(i=48){const e=new Mn(i,i,128,128),n=e.attributes.position,s=new Float32Array(n.count*3),o=new St(7189564),r=new St(9227338),a=new St(5149230),c=new St(11066466),l=new St(4094508),h=new St(10123848),u=new St(7230512),d=new St(15660795),f=new St(13163754),m=new St;for(let p=0;p<n.count;p++){const S=n.getX(p),v=-n.getY(p);n.setZ(p,Ce(S,v));const D=Dc(S,v),T=Uc(S,v),C=F1(S,v),P=hr(S*1.9+4.2,v*1.9-1.7);T>.24?(m.copy(d).lerp(f,C),m.lerp(o,1-Math.min(1,T*1.7))):D>.28?(m.copy(h).lerp(u,P),m.lerp(o,1-Math.min(1,D*1.4))):C>.72?m.copy(l).lerp(a,P*.45):(m.copy(o).lerp(C>.52?r:a,C*.7+P*.3),m.lerp(c,Math.max(0,P-.55)*.85)),s[p*3]=m.r,s[p*3+1]=m.g,s[p*3+2]=m.b}e.setAttribute("color",new hn(s,3)),e.computeVertexNormals();const _=z1(),g=new w(e,new Ue({vertexColors:!0,roughness:.86,metalness:0,flatShading:!1,bumpMap:_,bumpScale:.22}));return g.rotation.x=-Math.PI/2,g.receiveShadow=!0,g.name="ground",g}function z1(){const t=document.createElement("canvas");t.width=256,t.height=256;const e=t.getContext("2d"),n=e.createImageData(256,256);for(let o=0;o<256;o++)for(let r=0;r<256;r++){const a=ls(r*.11+2.2,o*.11-1.4,4),c=hr(r*.55,o*.38),l=Math.floor((a*.62+c*.38)*255),h=(o*256+r)*4;n.data[h]=l,n.data[h+1]=l,n.data[h+2]=l,n.data[h+3]=255}e.putImageData(n,0,0);const s=new Tc(t);return s.wrapS=fs,s.wrapT=fs,s.repeat.set(22,22),s.anisotropy=4,s.colorSpace=Dn,s}function B1(){const i=document.createElement("canvas");i.width=32,i.height=64;const t=i.getContext("2d"),e=t.createLinearGradient(16,64,16,0);e.addColorStop(0,"rgba(70, 130, 28, 0)"),e.addColorStop(.1,"rgba(96, 168, 40, 255)"),e.addColorStop(.5,"rgba(168, 220, 64, 255)"),e.addColorStop(1,"rgba(232, 255, 120, 240)"),t.fillStyle=e,t.beginPath(),t.moveTo(16,2),t.quadraticCurveTo(5,36,9,64),t.lineTo(23,64),t.quadraticCurveTo(27,36,16,2),t.fill();const n=new Tc(i);return n.colorSpace=We,n.anisotropy=4,n}function k1(){const i=[],t=[];for(let s=0;s<5;s++){const o=s/5*Math.PI,r=Math.cos(o),a=Math.sin(o),c=.085+s%3*.02,l=.26+s%4*.07,h=[[-c,0,0],[c,0,0],[c,l,0],[-c,l,0]],u=[0,1,2,0,2,3];for(const d of u){const[f,m]=h[d];i.push(f*r,m,f*a),t.push(d===0||d===3?0:1,m/l)}}const n=new De;return n.setAttribute("position",new ne(i,3)),n.setAttribute("uv",new ne(t,2)),n.computeVertexNormals(),n}function H1(){const i=[],t=[],s=[[-.012,0,0],[.012,0,0],[.012,.16,0],[-.012,.16,0]];for(const a of[0,1,2,0,2,3]){const[c,l,h]=s[a];i.push(c,l,h),t.push(a===0||a===3?.45:.55,l/.16)}const o=.09;for(const a of[0,Math.PI/2]){const c=Math.cos(a),l=Math.sin(a),h=[[-o,.16-.01],[o,.16-.01],[o,.16+.07],[-o,.16+.07]];for(const u of[0,1,2,0,2,3]){const[d,f]=h[u];i.push(d*c,f,d*l),t.push(u===0||u===3?0:1,(f-.16+.01)/.08)}}const r=new De;return r.setAttribute("position",new ne(i,3)),r.setAttribute("uv",new ne(t,2)),r.computeVertexNormals(),r}function vh(i,t){i.onBeforeCompile=e=>{e.uniforms.uTime={value:0},e.vertexShader=`uniform float uTime;
${e.vertexShader}`,e.vertexShader=e.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
       float hgt = max(transformed.y, 0.0);
       vec3 ip = vec3(instanceMatrix[3][0], instanceMatrix[3][1], instanceMatrix[3][2]);
       float t = uTime * 1.55 + ip.x * 0.82 + ip.z * 0.64;
       transformed.x += sin(t) * ${t.toFixed(3)} * hgt;
       transformed.z += cos(t * 0.88 + 0.35) * ${(t*.55).toFixed(3)} * hgt;`),Gu.push(e)}}function ea(i,t,e=.32,n=.22){return!(Dc(i,t)>e||Uc(i,t)>n||Math.hypot(i+1.2,t+.5)<1.55||Math.hypot(i+3.5,t+1.5)<1.35)}function G1(){const i=new dt;i.name="terrainFoliage";const t=new Fe,e=new Yr({map:B1(),color:15400856,side:Ee,alphaTest:.18});vh(e,.55);const n=[],s=new St(11853914),o=new St(6989874),r=new St,a=.5;for(let T=-20;T<=20;T+=a)for(let C=-20;C<=20;C+=a){const P=(nn(Math.floor(T*20+3),Math.floor(C*20+9))-.5)*a*.92,E=(nn(Math.floor(T*20+11),Math.floor(C*20+2))-.5)*a*.92,x=T+P,R=C+E,F=nn(Math.floor(x*17+4),Math.floor(R*19+8));if(F<.22||!ea(x,R))continue;const U=.75+F*.7;n.push({x,z:R,h:Ce(x,R),s:U,r:F*Math.PI*2,c:r.copy(s).lerp(o,nn(Math.floor(x*8),Math.floor(R*13)))})}const c=new Gr(k1(),e,n.length);c.name="instancedGrass",c.castShadow=!1,c.receiveShadow=!0,c.instanceMatrix.setUsage(Od);const l=new Float32Array(n.length*3);n.forEach((T,C)=>{t.position.set(T.x,T.h,T.z),t.rotation.set(0,T.r,0),t.scale.setScalar(T.s),t.updateMatrix(),c.setMatrixAt(C,t.matrix),l[C*3]=T.c.r,l[C*3+1]=T.c.g,l[C*3+2]=T.c.b}),c.instanceColor=new zs(l,3),c.instanceMatrix.needsUpdate=!0,c.frustumCulled=!1,c.raycast=()=>{},i.add(c);const h=new Yr({color:16777215,side:Ee});vh(h,.35);const u=[16774876,16768060,16738984,13142271,16747058],d=[],f=1.28;for(let T=-19;T<=19;T+=f)for(let C=-19;C<=19;C+=f){const P=(nn(Math.floor(T*13+21),Math.floor(C*13+5))-.5)*f,E=(nn(Math.floor(T*13+7),Math.floor(C*13+18))-.5)*f,x=T+P,R=C+E,F=nn(Math.floor(x*29+1),Math.floor(R*31+6));if(F<.28||!ea(x,R,.26,.18))continue;const U=new St(u[Math.floor(F*u.length)%u.length]);d.push({x,z:R,h:Ce(x,R),s:.85+F*.55,r:F*6.2,c:U})}const m=new Gr(H1(),h,d.length);m.name="instancedFlowers",m.castShadow=!1;const _=new Float32Array(d.length*3);d.forEach((T,C)=>{t.position.set(T.x,T.h,T.z),t.rotation.set(0,T.r,0),t.scale.setScalar(T.s),t.updateMatrix(),m.setMatrixAt(C,t.matrix),_[C*3]=T.c.r,_[C*3+1]=T.c.g,_[C*3+2]=T.c.b}),m.instanceColor=new zs(_,3),m.instanceMatrix.needsUpdate=!0,m.frustumCulled=!1,m.raycast=()=>{},i.add(m);const g=new Yr({color:16777215,flatShading:!0}),p=[9079942,7236194,10130568,6054996],S=[],M=1.7;for(let T=-18.5;T<=18.5;T+=M)for(let C=-18.5;C<=18.5;C+=M){const P=(nn(Math.floor(T*11+40),Math.floor(C*11+3))-.5)*M,E=(nn(Math.floor(T*11+8),Math.floor(C*11+33))-.5)*M,x=T+P,R=C+E,F=nn(Math.floor(x*23+2),Math.floor(R*27+9));F<.55||ea(x,R,.2,.16)&&S.push({x,z:R,h:Ce(x,R),s:.7+F*1.1,rx:F*2.2,ry:F*5.1,c:new St(p[Math.floor(F*p.length)%p.length])})}const v=new Gr(new Zn(.11,0),g,S.length);v.name="instancedStones",v.castShadow=!0,v.receiveShadow=!0;const D=new Float32Array(S.length*3);return S.forEach((T,C)=>{t.position.set(T.x,T.h+.04*T.s,T.z),t.rotation.set(T.rx,T.ry,T.rx*.4),t.scale.set(T.s*1.15,T.s*.7,T.s*1.05),t.updateMatrix(),v.setMatrixAt(C,t.matrix),D[C*3]=T.c.r,D[C*3+1]=T.c.g,D[C*3+2]=T.c.b}),v.instanceColor=new zs(D,3),v.instanceMatrix.needsUpdate=!0,v.frustumCulled=!1,v.raycast=()=>{},i.add(v),i}function V1(i){for(const t of Gu)t.uniforms.uTime.value=i}const xh=new Map;function Se(i,t={}){const e=`${i}_${t.roughness??.78}_${t.metalness??.08}_${t.flatShading===!1?0:1}_${t.emissive??0}_${t.emissiveIntensity??0}`;let n=xh.get(e);return n||(n=new Ue({color:i,roughness:t.roughness??.78,metalness:t.metalness??.08,flatShading:t.flatShading??!0,envMapIntensity:t.envMapIntensity??.85,...t}),xh.set(e,n)),n}function W1(i,t=1.08,e=659976){const n=new w(i.geometry,new ue({color:e,side:He,depthWrite:!1}));n.scale.setScalar(t),n.name="outline",i.add(n)}function Vu(i=0){const t=new dt;t.name="tree";const e=1.55+i%5*.18,n=i%3===0?4862488:i%3===1?5913114:4074002,s=new w(new Xt(.16,.28,e,8),Se(n,{roughness:.95}));s.position.y=e/2,s.castShadow=!0,s.receiveShadow=!0,t.add(s);for(let h=0;h<3;h++){const u=h/3*Math.PI*2+i*.3,d=new w(new Vt(.05,e*(.55+h%2*.15),.07),Se(2758664,{roughness:1}));d.position.set(Math.cos(u)*.15,e*.45,Math.sin(u)*.15),d.rotation.y=u,t.add(d)}for(let h=0;h<3;h++){const u=new w(new ke(.18+h*.02,.02,4,10),Se(3021836,{roughness:1}));u.rotation.x=Math.PI/2,u.position.y=.35+h*(e*.28),t.add(u)}const o=i%2===0?3109424:3835448,r=i%3===0?2254376:5016648,a=1856032;for(let h=0;h<5;h++){const u=.9-h*.12,d=h%3===0?o:h%3===1?r:a,f=new w(new ye(u,1-h*.1,9),Se(d,{roughness:.88}));if(f.position.y=e+.22+h*.42,f.rotation.y=(i+h)*.45,f.castShadow=!0,t.add(f),h<3){const m=new w(new ye(u*.55,.55,7),Se(1325080,{roughness:.95}));m.position.y=e+.35+h*.42,t.add(m)}}const c=new w(new Xt(.34,.44,.2,7),Se(3811344,{roughness:1}));c.position.y=.08,c.receiveShadow=!0,t.add(c);for(let h=0;h<4;h++){const u=h/4*Math.PI*2+i,d=new w(new Vt(.12,.1,.35),Se(3021836));d.position.set(Math.cos(u)*.28,.06,Math.sin(u)*.28),d.rotation.y=u,t.add(d)}const l=new w(new Xt(.55,.55,.2,8),new ue({visible:!1}));return l.position.y=.1,l.name="hit",t.add(l),t}function oc(i,t=0){const e=new dt;e.name="rock";const n=new w(new Zn(.55+t%3*.06,0),Se(t%2===0?6185576:5132888,{roughness:.9}));n.position.y=.4,n.rotation.set(.2,t,.1),n.castShadow=!0,n.receiveShadow=!0,e.add(n);const s=new w(new Rn(.55,12),new ue({color:0,transparent:!0,opacity:.28,depthWrite:!1}));s.rotation.x=-Math.PI/2,s.position.y=.02,e.add(s);const o=new w(new Zn(.28,0),Se(4869714));o.position.set(.35,.22,-.15),o.rotation.set(.4,t*.5,.2),o.castShadow=!0,e.add(o);const r=i==="copper"?12088115:12632264;for(let l=0;l<4;l++){const h=new w(new tt(.1+l%2*.03,6,4),Se(r,{metalness:.55,roughness:.4,emissive:r,emissiveIntensity:.15})),u=l/4*Math.PI*2+t;h.position.set(Math.cos(u)*.32,.42+l%2*.18,Math.sin(u)*.32),e.add(h)}const a=new w(new tt(.14,5,4),Se(3828272,{roughness:1}));a.position.set(-.25,.55,.2),a.scale.set(1.2,.5,1),e.add(a);const c=new w(new tt(.75,8,6),new ue({visible:!1}));return c.position.y=.4,c.name="hit",e.add(c),e}function Wu(){const i=new dt;i.name="dummy";const t=(h,u={})=>new Ue({color:h,roughness:u.roughness??.85,metalness:u.metalness??.05,flatShading:!0,...u}),e=new w(new Xt(.08,.1,1.4,6),t(5913114));e.position.y=.7,e.castShadow=!0,i.add(e);const n=new w(new Xt(.28,.32,.7,8),t(9071168));n.position.y=1.15,n.castShadow=!0,n.name="dummyBody",W1(n,1.06,1708040),i.add(n);const s=new w(new tt(.22,8,6),t(12886112));s.position.y=1.65,s.name="dummyHead",i.add(s);const o=t(4857872),r=new w(new Vt(.35,.06,.04),o);r.position.set(0,1.2,.3),r.rotation.z=.6,i.add(r);const a=r.clone();a.rotation.z=-.6,i.add(a);const c=new w(new Xt(.4,.45,.12,8),t(3811861));c.position.y=.06,c.receiveShadow=!0,i.add(c);const l=new w(new Xt(.45,.45,1.8,8),new ue({visible:!1}));return l.position.y=.9,l.name="hit",i.add(l),i}function X1(i,t=140){const e=[];i.traverse(s=>{s.isMesh&&s.name!=="hit"&&s.name!=="outline"&&e.push(s)});const n=[];for(const s of e){const o=s.material;!o||!o.emissive||(n.push({mesh:s,emissive:o.emissive.clone(),intensity:o.emissiveIntensity??0}),o.emissive.setHex(16772778),o.emissiveIntensity=.85)}setTimeout(()=>{for(const s of n){const o=s.mesh.material;o.emissive.copy(s.emissive),o.emissiveIntensity=s.intensity}},t)}function Xu(){const i=new dt;for(let s=0;s<8;s++){const o=new w(new Zn(.12,0),Se(5921368)),r=s/8*Math.PI*2;o.position.set(Math.cos(r)*.45,.08,Math.sin(r)*.45),o.rotation.set(Math.random(),r,.2),o.castShadow=!0,i.add(o)}for(let s=0;s<5;s++){const o=new w(new Xt(.06,.07,.7,5),Se(4860432));o.rotation.z=Math.PI/2,o.rotation.y=s/5*Math.PI*2,o.position.y=.1,i.add(o)}const t=new w(new ye(.2,.55,5),new Ue({color:16737826,emissive:16729088,emissiveIntensity:1.4,flatShading:!0,transparent:!0,opacity:.92}));t.position.y=.42,t.name="flame",i.add(t);const e=new w(new tt(.18,8,6),new ue({color:16755268,transparent:!0,opacity:.35,depthWrite:!1}));e.position.y=.28,e.name="flameGlow",i.add(e);const n=new cr(16746564,1.6,14);return n.position.y=.65,n.castShadow=!1,i.add(n),i}function qu(){const i=new dt,t=Se(6967344,{roughness:.92,side:Ee}),e=Se(4864024,{roughness:.94,side:Ee}),n=new w(new Xt(.035,.035,1.55,6),Se(3811856,{roughness:1}));n.rotation.z=Math.PI/2,n.position.y=1.18,i.add(n);for(const a of[-1,1]){const c=new w(new Mn(1.55,1.42),t);c.position.set(a*.52,.62,0),c.rotation.y=a*-.72,c.castShadow=!0,c.receiveShadow=!0,i.add(c);const l=new w(new Mn(1.5,1.36),e);l.position.set(a*.5,.62,0),l.rotation.y=a*-.72+Math.PI,i.add(l)}const s=new w(new Mn(1.05,1.05),e);s.position.set(0,.52,-.72),s.castShadow=!0,i.add(s);const o=new w(new Mn(.42,.85),e);o.position.set(-.18,.42,.7),o.rotation.y=.35,i.add(o);const r=new w(new Mn(.42,.85),t);r.position.set(.22,.42,.68),r.rotation.y=-.55,i.add(r);for(const[a,c]of[[-.9,-.9],[.9,-.9],[-.9,.9],[.9,.9]]){const l=new w(new Xt(.03,.03,.25,4),Se(3811856));l.position.set(a*.85,.12,c*.85),i.add(l)}return i}function rc(){const i=new dt,t=new w(new Vt(.55,.4,.45),Se(6965800));t.position.y=.2,t.castShadow=!0,t.receiveShadow=!0,i.add(t);const e=new w(new Vt(.58,.06,.48),Se(5913114));return e.position.y=.43,i.add(e),i}function Go(){const i=new dt,t=new w(new Xt(.28,.3,.55,10),Se(5913114));t.position.y=.28,t.castShadow=!0,i.add(t);const e=new w(new ke(.29,.025,6,12),Se(9079434,{metalness:.5}));return e.rotation.x=Math.PI/2,e.position.y=.35,i.add(e),i}function ac(){const i=new dt,t=new w(new Xt(.14,.14,.7,8),Se(3820138));return t.rotation.z=Math.PI/2,t.position.y=.12,t.castShadow=!0,i.add(t),i}function q1(i=60){const t=new tt(i,24,12),e=new Float32Array(t.attributes.position.count*3),n=t.attributes.position,s=new St(4888288),o=new St(9354472),r=new St(15914660),a=new St;for(let l=0;l<n.count;l++){const h=n.getY(l)/i,u=Math.max(0,Math.min(1,(h+.15)/1));u<.45?a.copy(r).lerp(o,u/.45):a.copy(o).lerp(s,(u-.45)/.55),e[l*3]=a.r,e[l*3+1]=a.g,e[l*3+2]=a.b}t.setAttribute("color",new hn(e,3));const c=new w(t,new ue({vertexColors:!0,side:He,depthWrite:!1,fog:!1}));return c.name="sky",c}function Uo(i,t){const e=i.getObjectByName("yetiArmR"),n=i.getObjectByName("yetiArmL"),s=Math.max(0,Math.min(1,t));let o=0,r=0;if(s<=0)return;if(s<.35){const c=s/.35;o=-1.35*c,r=-.4*c}else if(s<.55){const c=(s-.35)/.2;o=-1.35+2.4*c,r=-.4+1.6*c}else{const c=(s-.55)/.45;o=1.05*(1-c),r=1.2*(1-c)}e&&(e.rotation.x=o,e.rotation.y=r*.55),n&&(n.rotation.x=o*.55);const a=i.getObjectByName("yetiHead");a&&(a.rotation.x=-.15-Math.min(s,1)*.2)}function Y1(){const i=new dt;i.name="snowProps";const t=Se(15266552,{roughness:.78}),e=Se(11063528,{roughness:.35,metalness:.15,emissive:4491434,emissiveIntensity:.12}),n=Se(6975608,{roughness:.92}),s=[[3.2,6.4,.9],[5.4,8,1.1],[4.8,5.8,.7],[2.6,7.8,.85],[5.8,6.6,.75],[3.6,8.6,.95]];for(const[o,r,a]of s){const c=new w(new Zn(.35*a,0),t);if(c.position.set(o,.12*a,r),c.scale.set(1.4,.55,1.2),c.castShadow=!0,c.receiveShadow=!0,i.add(c),a>.85){const l=new w(new Je(.18*a,0),e);l.position.set(o+.15,.28*a,r-.1),l.rotation.set(.3,.5,.2),i.add(l)}}for(const[o,r]of[[6.2,7.5],[2.2,6]]){const a=new w(new Zn(.4,0),n);a.position.set(o,.25,r),a.castShadow=!0,i.add(a);const c=new w(new tt(.28,6,4),t);c.position.set(o,.48,r),c.scale.set(1.2,.45,1),i.add(c)}return i}function $1(){const i=new dt;i.name="godRays";const t=new ue({color:16773320,transparent:!0,opacity:.09,depthWrite:!1,side:Ee});for(let e=0;e<5;e++){const n=new w(new Mn(1.2+e*.15,18),t);n.position.set(-4+e*2.4,9,-2+e%3*3),n.rotation.z=-.35-e*.04,n.rotation.y=.25,i.add(n)}return i}function na(i,t){const e=i.getObjectByName("orcSpear"),n=i.getObjectByName("orcArmR"),s=Math.max(0,Math.min(1,t));let o=0,r=0;if(s<=0){const c=e?.userData.rest;e&&c&&(e.position.set(c.x,c.y,c.z),e.rotation.set(c.rx,c.ry,c.rz));return}else if(s<.32)o=s/.32,r=-.35*o;else if(s<.52){const c=(s-.32)/.2;o=1-c,r=-.35+1.45*c}else r=1.1*(1-(s-.52)/.48);if(e){const c=e.userData.rest;c?(e.rotation.x=c.rx-r*.35,e.position.z=c.z+r*.22-o*.1):(e.rotation.x=-r*.95,e.position.z=.12+r*.55-o*.25)}n&&(n.rotation.x=-r*1.05+o*.4);const a=i.getObjectByName("orcHead");a&&(a.rotation.x=-r*.12)}const Z1={idle:"Idle",walk:"Walk",attack:"Attack",sword:"Sword guard","sword-walk":"Sword walk",slash:"Slash",chop:"Chop",mine:"Mine"},ia=[{id:"hunter",name:"Male Hunter",group:"Characters",poses:["idle","walk","sword","sword-walk","slash","chop","mine"],build:()=>Cc()},{id:"yeti",name:"Frost Yeti",group:"Creatures",poses:["idle","walk","attack"],build:()=>mu()},{id:"orc",name:"Orc Scout",group:"Creatures",poses:["idle","walk","attack"],build:()=>gu()},{id:"dummy",name:"Training Dummy",group:"World",build:()=>Wu()},{id:"tree",name:"Whisperwood Tree",group:"World",build:()=>Vu(2)},{id:"copper",name:"Copper Rock",group:"World",build:()=>oc("copper",1)},{id:"tin",name:"Tin Rock",group:"World",build:()=>oc("tin",2)},{id:"campfire",name:"Campfire",group:"World",build:()=>Xu()},{id:"tent",name:"Tent",group:"World",build:()=>qu()},{id:"crate",name:"Crate",group:"World",build:()=>rc()},{id:"barrel",name:"Barrel",group:"World",build:()=>Go()},{id:"bedroll",name:"Bedroll",group:"World",build:()=>ac()}];class K1{constructor(t){this.canvas=t,this.camera=new Ze(42,window.innerWidth/window.innerHeight,.08,80),this.root=document.getElementById("studio"),this.listEl=document.getElementById("studio-list"),this.poseEl=document.getElementById("studio-poses"),this.titleEl=document.getElementById("studio-model-name"),this.buildScene(),this.buildList(),this.bindUi(),this.bindOrbit()}root;listEl;poseEl;titleEl;scene=new Vs;camera;current=null;entry=null;pose="idle";animT=0;spherical=new hu(4.6,1.12,.55);look=new I(0,1,0);dragging=!1;dragBtn=0;lastX=0;lastY=0;autoSpin=!1;openFlag=!1;stage;isOpen(){return this.openFlag}setEnvironment(t){this.scene.environment=t,this.scene.environmentIntensity=.7}toggle(){this.openFlag?this.close():this.open()}open(){this.openFlag=!0,this.root.hidden=!1;const t=document.getElementById("hud");t&&(t.hidden=!0),this.entry||this.select(ia[0].id),this.fitCurrent()}close(){this.openFlag=!1,this.dragging=!1,this.root.hidden=!0;const t=document.getElementById("hud");t&&(t.hidden=!1)}resize(t,e){this.camera.aspect=t/Math.max(1,e),this.camera.updateProjectionMatrix()}tick(t){this.openFlag&&(this.animT+=t,this.autoSpin&&(this.spherical.theta+=t*.55),this.applyPose(t),this.updateCamera())}render(t){t.setClearColor(7238764),t.render(this.scene,this.camera),t.setClearColor(10405604)}buildScene(){this.scene.background=new St(7238764),this.scene.fog=new Ec(7238764,16,36),this.scene.add(new Ys(16054271,3817528,1.05));const t=new Fn(16774364,2.05);t.position.set(4.5,7.5,5.5),t.castShadow=!0,t.shadow.mapSize.set(1024,1024),t.shadow.bias=-4e-4,t.shadow.camera.near=.5,t.shadow.camera.far=24,t.shadow.camera.left=-5,t.shadow.camera.right=5,t.shadow.camera.top=5,t.shadow.camera.bottom=-5,this.scene.add(t);const e=new Fn(13163775,.62);e.position.set(-6,3.5,-2),this.scene.add(e);const n=new Fn(16769208,.38);n.position.set(-2,4,7),this.scene.add(n),this.scene.add(new cu(6976640,.42));const s=new w(new Rn(6.5,48),new Ue({color:6054492,roughness:.94,metalness:.04}));s.rotation.x=-Math.PI/2,s.receiveShadow=!0,this.scene.add(s);const o=new w(new Di(1.55,1.62,48),new ue({color:9071144,transparent:!0,opacity:.55,side:Ee}));o.rotation.x=-Math.PI/2,o.position.y=.008,this.scene.add(o);const r=new O_(8,16,4866096,3027512);r.position.y=.004;const a=r.material;a.transparent=!0,a.opacity=.35,this.scene.add(r),this.stage=new dt,this.scene.add(this.stage)}buildList(){this.listEl.innerHTML="";let t="";for(const e of ia){if(e.group!==t){t=e.group;const s=document.createElement("div");s.className="studio-group",s.textContent=e.group,this.listEl.appendChild(s)}const n=document.createElement("button");n.type="button",n.className="studio-item",n.dataset.id=e.id,n.textContent=e.name,n.addEventListener("click",()=>this.select(e.id)),this.listEl.appendChild(n)}}bindUi(){document.getElementById("btn-studio")?.addEventListener("click",()=>this.toggle()),document.getElementById("studio-close")?.addEventListener("click",()=>this.close()),document.getElementById("studio-reset")?.addEventListener("click",()=>this.fitCurrent()),document.getElementById("studio-spin")?.addEventListener("click",t=>{this.autoSpin=!this.autoSpin,t.currentTarget.classList.toggle("on",this.autoSpin)}),window.addEventListener("keydown",t=>{if(t.key==="Escape"&&this.openFlag){this.close(),t.preventDefault();return}if(t.key.toLowerCase()==="v"&&!t.ctrlKey&&!t.metaKey&&!t.altKey){const e=t.target;if(e&&(e.tagName==="INPUT"||e.tagName==="TEXTAREA"))return;this.toggle()}})}bindOrbit(){const t=s=>{this.openFlag&&s.target===this.canvas&&(this.dragging=!0,this.dragBtn=s.button,this.lastX=s.clientX,this.lastY=s.clientY,this.canvas.setPointerCapture(s.pointerId),s.preventDefault())},e=s=>{if(!this.openFlag||!this.dragging)return;const o=s.clientX-this.lastX,r=s.clientY-this.lastY;if(this.lastX=s.clientX,this.lastY=s.clientY,this.dragBtn===2||s.shiftKey){const a=this.spherical.radius*.0016,c=new I,l=new I;this.camera.matrix.extractBasis(c,l,new I),this.look.addScaledVector(c,-o*a),this.look.addScaledVector(l,r*a)}else this.spherical.theta-=o*.007,this.spherical.phi-=r*.007,this.spherical.phi=Math.max(.06,Math.min(Math.PI-.06,this.spherical.phi))},n=s=>{if(this.dragging){this.dragging=!1;try{this.canvas.releasePointerCapture(s.pointerId)}catch{}}};this.canvas.addEventListener("pointerdown",t),window.addEventListener("pointermove",e),window.addEventListener("pointerup",n),this.canvas.addEventListener("contextmenu",s=>{this.openFlag&&s.preventDefault()}),this.canvas.addEventListener("wheel",s=>{if(!this.openFlag)return;s.preventDefault();const o=this.spherical.radius*(s.deltaY>0?1.08:.92);this.spherical.radius=Math.max(1.1,Math.min(18,o))},{passive:!1})}select(t){const e=ia.find(n=>n.id===t);e&&(this.entry=e,this.current&&this.stage.remove(this.current),this.current=e.build(),this.current.position.set(0,0,0),this.current.rotation.set(0,0,0),this.current.traverse(n=>{(n.name==="contactShadow"||n.name==="hit"||n.name==="yetiBreath"||n.name==="yetiBreathMist"||n.name==="yetiEyeGlow"||n.name==="yetiEyeLight")&&(n.visible=!1)}),this.stage.add(this.current),this.animT=0,this.pose=e.poses?.[0]??"idle",this.titleEl.textContent=e.name,this.listEl.querySelectorAll(".studio-item").forEach(n=>{n.classList.toggle("on",n.dataset.id===t)}),this.buildPoseBar(),this.fitCurrent())}buildPoseBar(){this.poseEl.innerHTML="";const t=this.entry?.poses;if(!t?.length){this.poseEl.hidden=!0;return}this.poseEl.hidden=!1;for(const e of t){const n=document.createElement("button");n.type="button",n.className="studio-pose",n.textContent=Z1[e],n.classList.toggle("on",e===this.pose),n.addEventListener("click",()=>{this.pose=e,this.animT=0,this.buildPoseBar()}),this.poseEl.appendChild(n)}}fitCurrent(){if(!this.current)return;this.current.updateWorldMatrix(!0,!0);const t=new Jn().setFromObject(this.current),e=t.getSize(new I),n=t.getCenter(new I);this.look.copy(n),this.spherical.radius=Math.max(2.4,e.length()*1.05),this.spherical.phi=1.12,this.spherical.theta=.55,this.autoSpin=!1,document.getElementById("studio-spin")?.classList.remove("on")}updateCamera(){const t=new I().setFromSpherical(this.spherical).add(this.look);this.camera.position.copy(t),this.camera.lookAt(this.look)}applyPose(t){if(!this.current||!this.entry)return;const e=this.entry.id;if(e==="hunter"&&this.current instanceof dt){this.applyHunter(this.current);const n=Number(this.current.userData.locomotionY)||0;this.current.position.y=n;return}if(e==="yeti"&&this.current instanceof dt){this.applyYeti(this.current);return}e==="orc"&&this.current instanceof dt&&this.applyOrc(this.current)}applyHunter(t){const e=this.pose;if(e==="idle"){an(t,null),Pi(t,this.animT);return}if(e==="walk"){an(t,null),Jo(t,this.animT*ic(.9),.9,1);return}if(e==="sword"){an(t,"sword"),Pi(t,this.animT);return}if(e==="sword-walk"){an(t,"sword"),Jo(t,this.animT*ic(.9),.9,1);return}if(e==="slash"){an(t,"sword");const n=this.animT%jo/jo;Bu(t,n);return}if(e==="chop"){an(t,"hatchet"),sc(t,this.animT*.7,"tree");return}an(t,"pickaxe"),sc(t,this.animT*.7,"rock")}applyYeti(t){if(this.pose==="walk"){Ai(t,this.animT*o1,!0,1);return}if(this.pose==="attack"){const e=this.animT%Qo/Qo;ku(t,e);return}Ai(t,this.animT,!1,0)}applyOrc(t){if(this.pose==="walk"){os(t,this.animT*r1,!0,1);return}if(this.pose==="attack"){const e=this.animT%tr/tr;Hu(t,e);return}os(t,this.animT,!1,0)}}class J1{scene;camera;overlay;particles=[];floats=[];tmp=new I;chipMat=new Ue({color:12880448,emissive:5910544,emissiveIntensity:.35,flatShading:!0,roughness:.85});sparkMat=new Ue({color:16769160,emissive:16763972,emissiveIntensity:2,flatShading:!0});hitMat=new Ue({color:16772778,emissive:16768392,emissiveIntensity:1.5,flatShading:!0});oreMat=new Ue({color:12088115,emissive:6697745,emissiveIntensity:.4,metalness:.5,roughness:.45,flatShading:!0});iceMat=new Ue({color:11069695,emissive:4500172,emissiveIntensity:1.2,flatShading:!0,transparent:!0,opacity:.9});clawMat=new Ue({color:14215416,emissive:8960989,emissiveIntensity:.8,flatShading:!0});spearMat=new Ue({color:13160608,emissive:8956484,emissiveIntensity:.9,flatShading:!0});impactMat=new Ue({color:16774864,emissive:16764006,emissiveIntensity:2.4,flatShading:!0,transparent:!0,opacity:.95});telegraphMat=new ue({color:16724753,transparent:!0,opacity:.7,depthWrite:!1,side:Ee});frostTeleMat=new ue({color:6737151,transparent:!0,opacity:.65,depthWrite:!1,side:Ee});constructor(t,e,n){this.scene=t,this.camera=e,this.overlay=document.createElement("div"),this.overlay.id="vfx-overlay",this.overlay.style.cssText="position:absolute;inset:0;pointer-events:none;overflow:hidden;z-index:15;",n.appendChild(this.overlay)}spawnWoodchips(t,e=10){for(let n=0;n<e;n++){const s=.14+Math.random()*.16,o=new w(new Vt(s,s*.35,s*.7),this.chipMat);o.position.copy(t),o.position.x+=(Math.random()-.5)*.35,o.position.y+=.35+Math.random()*.55,o.position.z+=(Math.random()-.5)*.35,o.castShadow=!1,this.scene.add(o),this.particles.push({mesh:o,vel:new I((Math.random()-.5)*3.4,2.2+Math.random()*2.8,(Math.random()-.5)*3.4),life:0,maxLife:1.05+Math.random()*.55,gravity:7,spin:(Math.random()-.5)*14})}}spawnMineSparks(t,e=12){for(let n=0;n<e;n++){const s=n%3===0,o=new w(new tt(s?.11:.07,5,4),s?this.oreMat:this.sparkMat);o.position.copy(t),o.position.x+=(Math.random()-.5)*.3,o.position.y+=.25+Math.random()*.45,o.position.z+=(Math.random()-.5)*.3,this.scene.add(o),this.particles.push({mesh:o,vel:new I((Math.random()-.5)*4.6,2+Math.random()*3.2,(Math.random()-.5)*4.6),life:0,maxLife:.85+Math.random()*.45,gravity:6,spin:(Math.random()-.5)*18})}}spawnHitSparks(t,e=18){for(let n=0;n<e;n++){const s=new w(new Je(.045+Math.random()*.04,0),this.hitMat);s.position.copy(t),s.position.y+=1+Math.random()*.45,this.scene.add(s),this.particles.push({mesh:s,vel:new I((Math.random()-.5)*5.2,1+Math.random()*2.8,(Math.random()-.5)*5.2),life:0,maxLife:.4+Math.random()*.3,gravity:4.5,spin:(Math.random()-.5)*20})}}spawnFloatingText(t,e,n="#7ec87e"){const s=document.createElement("div");s.className="float-xp",s.textContent=e,s.style.color=n,this.overlay.appendChild(s),this.floats.push({el:s,life:0,maxLife:1.55,world:t.clone(),driftY:0})}spawnXp(t,e,n){this.spawnFloatingText(t.clone().add(new I((Math.random()-.5)*.4,1.6,0)),`+${e} ${n}`,"#7ec87e")}spawnDamage(t,e,n=!1){this.spawnFloatingText(t.clone().add(new I((Math.random()-.5)*.25,1.7,0)),n?`${e}!`:String(e),n?"#ffe066":"#ff8a78")}spawnIceBurst(t,e=16){for(let n=0;n<e;n++){const s=new w(new Je(.06+Math.random()*.05,0),this.iceMat);s.position.copy(t),s.position.y+=.8+Math.random()*.6,s.position.x+=(Math.random()-.5)*.4,s.position.z+=(Math.random()-.5)*.4,this.scene.add(s),this.particles.push({mesh:s,vel:new I((Math.random()-.5)*5,1.2+Math.random()*3.5,(Math.random()-.5)*5),life:0,maxLife:.55+Math.random()*.4,gravity:5,spin:(Math.random()-.5)*20})}}spawnClawSlash(t,e=8){for(let n=0;n<e;n++){const s=new w(new Vt(.08,.02,.28+Math.random()*.15),this.clawMat);s.position.copy(t),s.position.y+=1+Math.random()*.5;const o=n/e*Math.PI-Math.PI/2;s.rotation.y=o,s.rotation.z=-.4,this.scene.add(s),this.particles.push({mesh:s,vel:new I(Math.cos(o)*3.5,.5+Math.random(),Math.sin(o)*3.5),life:0,maxLife:.28+Math.random()*.15,gravity:2,spin:8})}}spawnSpearThrust(t,e=8){for(let n=0;n<e;n++){const s=new w(new ye(.04,.22+Math.random()*.12,4),this.spearMat);s.position.copy(t),s.position.y+=.9+Math.random()*.5;const o=n/e*Math.PI*.6-.3;s.rotation.z=o,s.rotation.x=Math.PI/2,this.scene.add(s),this.particles.push({mesh:s,vel:new I(Math.sin(o)*3.2,.4+Math.random(),Math.cos(o)*3.2),life:0,maxLife:.28+Math.random()*.15,gravity:2,spin:10})}}spawnImpactBurst(t,e=18,n=!1){const s=n?this.iceMat:this.impactMat;for(let r=0;r<e;r++){const a=new w(new Je(.05+Math.random()*.06,0),s);a.position.copy(t),a.position.y+=.9+Math.random()*.55,this.scene.add(a);const c=Math.random()*Math.PI*2,l=2.5+Math.random()*4.5;this.particles.push({mesh:a,vel:new I(Math.cos(c)*l,1.5+Math.random()*3.2,Math.sin(c)*l),life:0,maxLife:.4+Math.random()*.35,gravity:5,spin:(Math.random()-.5)*22})}const o=new w(new Di(.15,.45,20),new ue({color:n?11069695:16771232,transparent:!0,opacity:.7,depthWrite:!1,side:Ee}));o.rotation.x=-Math.PI/2,o.position.set(t.x,.12,t.z),this.scene.add(o),this.particles.push({mesh:o,vel:new I(0,.05,0),life:0,maxLife:.35,gravity:0,spin:0})}spawnTelegraph(t,e=!1,n=.55,s=1.05){const o=new w(new Di(s*.72,s,28),e?this.frostTeleMat.clone():this.telegraphMat.clone());o.rotation.x=-Math.PI/2,o.position.set(t.x,.09,t.z),this.scene.add(o),this.particles.push({mesh:o,vel:new I(0,0,0),life:0,maxLife:n,gravity:0,spin:1.2});const r=(e?this.frostTeleMat:this.telegraphMat).clone();r.opacity=e?.28:.32;const a=new w(new Rn(s*.7,28),r);a.rotation.x=-Math.PI/2,a.position.set(t.x,.07,t.z),a.scale.setScalar(.15),this.scene.add(a),this.particles.push({mesh:a,vel:new I(0,.01,0),life:0,maxLife:n,gravity:0,spin:0}),a.userData.teleFill=!0}spawnArcTelegraph(t,e,n=!1,s=.5){const o=(n?this.frostTeleMat:this.telegraphMat).clone();o.opacity=.65;const r=new w(new Di(.55,1.15,20,1,0,Math.PI*.85),o);r.rotation.x=-Math.PI/2.6,r.rotation.z=e,r.position.set(t.x,.85,t.z),this.scene.add(r),this.particles.push({mesh:r,vel:new I(0,.15,0),life:0,maxLife:s,gravity:0,spin:0})}update(t){for(let e=this.particles.length-1;e>=0;e--){const n=this.particles[e];n.life+=t,n.vel.y-=n.gravity*t,n.mesh.position.addScaledVector(n.vel,t),n.mesh.rotation.x+=n.spin*t,n.mesh.rotation.z+=n.spin*.7*t;const s=n.life/n.maxLife,o=Math.max(.05,1-s*.85),r=n.mesh.geometry.type;if(!!(n.mesh.userData&&n.mesh.userData.teleFill)){const c=Math.min(1,s/.85);n.mesh.scale.setScalar(.15+c*.85);const l=n.mesh.material;l&&l.opacity!==void 0&&(l.opacity=Math.max(0,(1-s)*.35))}else if(r==="RingGeometry"){const c=n.gravity===0&&n.spin>0&&n.spin<3?1+Math.sin(s*Math.PI)*.08:1+s*1.8;n.mesh.scale.setScalar(c);const l=n.mesh.material;l&&l.opacity!==void 0&&(l.opacity=Math.max(0,(1-s)*(n.spin>0&&n.spin<3?.6:.7)))}else if(r==="CircleGeometry"){n.mesh.scale.setScalar(o);const c=n.mesh.material;c&&c.opacity!==void 0&&(c.opacity=Math.max(0,(1-s)*.5))}else n.mesh.scale.setScalar(o);n.life>=n.maxLife&&(this.scene.remove(n.mesh),n.mesh.geometry.dispose(),this.particles.splice(e,1))}for(let e=this.floats.length-1;e>=0;e--){const n=this.floats[e];n.life+=t,n.driftY+=t*.55,this.tmp.set(n.world.x,n.world.y+n.driftY,n.world.z),this.tmp.project(this.camera);const s=(this.tmp.x*.5+.5)*window.innerWidth,o=(-this.tmp.y*.5+.5)*window.innerHeight,r=Math.max(0,1-n.life/n.maxLife);n.el.style.transform=`translate(-50%, -50%) translate(${s}px, ${o}px)`,n.el.style.opacity=String(r),(n.life>=n.maxLife||this.tmp.z>1)&&(n.el.remove(),this.floats.splice(e,1))}}}const Yu="hunterscape_save_v1";function j1(i){const t=new Set(Object.values(i.equipped).filter(e=>!!e));return i.inventory=i.inventory.filter(e=>{const n=In[e.id];return!(n&&!n.stackable&&t.has(e.id))}),i}function Q1(){try{const i=localStorage.getItem(Yu);if(!i)return Lo();const t=JSON.parse(i);if(t.version!==1)return Lo();const e=Lo();return j1({...e,...t,skills:{...e.skills,...t.skills},equipped:{...e.equipped,...t.equipped},inventory:t.inventory??e.inventory})}catch{return Lo()}}function tv(i){try{localStorage.setItem(Yu,JSON.stringify(i))}catch{}}const No=1.6,ev=1.8,Us=2.35,sa=5.8,Ns=2.15,oa=5.4,ra=4.2,nv=.7,iv=2.45,sv=9.5,ov=12,rv=3,yh=80,av=28,Mh=5,cv=10,wh=62,lv=22,Sh=4,hv=8,$e={x:-6.2,z:-4.8},Ie={x:4.2,z:7.2},uv={constitution:"Constitution",attack:"Attack",strength:"Strength",defence:"Defence",woodcutting:"Woodcutting",mining:"Mining"};class dv{renderer;scene;camera;player;raycaster=new F_;pointer=new gt;clock=new lu;hud;studio;vfx;save;objects=[];ground;activity={type:"idle"};moveMarker;saveTimer=0;keys=new Set;camOffset=new I(0,8.7,7.15);camZoom=1;camZoomTarget=1;camLook=new I;dummyTarget=null;yetiTarget=null;yetiAttackCd=0;yetiSwipeT=0;yetiAggroed=!1;orcTarget=null;orcAttackCd=0;orcSwipeT=0;orcAggroed=!1;running=!0;sun;rim;pendingGather=null;pendingCombat=!1;toolSwing=0;animTime=0;playerFlinch=0;playerKnock=new I;yetiHitDone=!1;orcHitDone=!1;deathAnims=[];camSmooth=new I;lookSmooth=new I;combatCamPull=0;moveSpeedCur=0;moveBlend=0;stoppingSteps=0;gaitPhase=0;poseSmoother=new Qr;yetiGait=0;orcGait=0;yetiSmoother=new Qr(i1);orcSmoother=new Qr(s1);lastMoveDir=new I(0,0,1);hitReacts=[];yetiMoveBlend=0;orcMoveBlend=0;yetiTeleDone=!1;orcTeleDone=!1;playerTeleDone=!1;combatOorT=0;combatAbortT=0;pendingCombatTarget=null;pendingCombatChat="";pendingForge=!1;constructor(t){this.save=Q1(),this.hud=new D1,this.renderer=new wc({canvas:t,antialias:!0,alpha:!1}),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.renderer.setSize(window.innerWidth,window.innerHeight),this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=Th,this.renderer.outputColorSpace=We,this.renderer.toneMapping=er,this.renderer.toneMappingExposure=1.42,this.renderer.setClearColor(10405604),this.scene=new Vs,this.scene.fog=new Sc(12769e3,.012),this.camera=new Ze(48,window.innerWidth/window.innerHeight,.1,140),this.setupLights(),this.setupReflectionEnv(),this.studio=new K1(t),this.studio.setEnvironment(this.scene.environment),this.hud.setEnvironment(this.scene.environment),this.scene.add(q1(70)),this.ground=O1(48),this.scene.add(this.ground),this.scene.add(G1()),this.buildWorld(),this.player=Cc(),this.player.position.set(this.save.x,Ce(this.save.x,this.save.z),this.save.z),this.scene.add(this.player),this.syncHeldTool(),Pi(this.player,0);const e=document.getElementById("app")??document.body;this.vfx=new J1(this.scene,this.camera,e),this.moveMarker=new w(new Di(.25,.38,24),new ue({color:13936715,transparent:!0,opacity:.85,side:Ee})),this.moveMarker.rotation.x=-Math.PI/2,this.moveMarker.position.y=.06,this.moveMarker.visible=!1,this.scene.add(this.moveMarker),this.bindInput(t),this.hud.onAction=n=>this.handleAction(n),this.hud.onInventoryClick=n=>this.handleInvClick(n),this.hud.onGearSlotClick=n=>this.unequipSlot(n),this.hud.onForgeCraft=n=>this.craftAtForge(n),this.refreshUI(),this.hud.chat("Welcome to Thornrest Camp in the Whisperwood.","system"),this.hud.chat("Tap the ground to walk. Chop trees, mine rocks, or spar with the training dummy.","system"),this.hud.chat("A Frost Yeti stalks the north-east clearing — keep your distance until you are ready.","combat"),this.hud.chat("An Orc Scout prowls the south-west trail — spear ready, leather and tooth to loot.","combat"),this.hud.chat("The camp forge will work frost-yeti hide, fur, bone, and claws into a matching set.","system"),this.hud.chat("Open Gear (C) to inspect your hero and equip or unequip items.","system"),this.hud.chat("Scroll the wheel or use + / − to zoom the camera.","system"),this.hud.chat("Your progress is saved in this browser.","system"),window.addEventListener("resize",()=>this.onResize()),this.animate()}setupLights(){const t=new Ys(15923199,5929522,1.08);this.scene.add(t),this.sun=new Fn(16774880,2.08),this.sun.position.set(18,28,10),this.sun.castShadow=!0,this.sun.shadow.mapSize.set(2048,2048),this.sun.shadow.bias=-3e-4,this.sun.shadow.normalBias=.035,this.sun.shadow.radius=3.2,this.sun.shadow.camera.near=2,this.sun.shadow.camera.far=58,this.sun.shadow.camera.left=-24,this.sun.shadow.camera.right=24,this.sun.shadow.camera.top=24,this.sun.shadow.camera.bottom=-24,this.scene.add(this.sun),this.scene.add(this.sun.target),this.rim=new Fn(13690623,.48),this.rim.position.set(-14,10,-16),this.scene.add(this.rim);const e=new Fn(16769712,.46);e.position.set(-6,6,4),this.scene.add(e),this.scene.add(new cu(6978696,.44))}setupReflectionEnv(){const t=new qa(this.renderer),e=new Vs;e.add(new Ys(15923199,4020770,1.15));const n=new w(new tt(10,16,12),new ue({color:11848932,side:He}));e.add(n);const s=new w(new tt(2.2,12,10),new ue({color:16773576}));s.position.set(7,9,5),e.add(s);const o=new w(new Rn(10,16),new ue({color:4880952}));o.rotation.x=-Math.PI/2,o.position.y=-1.6,e.add(o),this.scene.environment=t.fromScene(e,.04).texture,this.scene.environmentIntensity=.62,t.dispose()}buildWorld(){const t=(x,R,F,U=0)=>{x.position.set(R,Ce(R,F)+U,F)},e=qu();t(e,-3.5,-1.5),this.scene.add(e);const n=Xu();t(n,-1.2,-.5),this.scene.add(n);const s=V_();t(s,2.2,.35),s.rotation.y=-.35,s.scale.setScalar(1.12),this.scene.add(s),this.objects.push({kind:"forge",mesh:s,id:"forge_0",hp:1,maxHp:1,depleted:!1,respawnAt:0});const o=rc();t(o,-2.4,-2.2),o.rotation.y=.3,this.scene.add(o);const r=Go();t(r,-4.2,-.4),this.scene.add(r);const a=Go();t(a,-4.55,.15),a.rotation.y=.6,this.scene.add(a);const c=ac();t(c,-2.8,.4),c.rotation.y=-.4,this.scene.add(c);const l=[[-8,-6],[8,-7],[-10,4],[9,5],[0,-10],[-6,8],[6,9],[10,0],[-11,-2]];for(const[x,R]of l){const F=new dt,U=new w(new tt(.4+Math.random()*.2,7,5),new Ue({color:2775592,flatShading:!0,roughness:.95}));U.position.y=.35,U.castShadow=!0,F.add(U);const G=new w(new tt(.28,6,4),new Ue({color:3828272,flatShading:!0}));G.position.set(.25,.3,.1),G.castShadow=!0,F.add(G),F.position.set(x,Ce(x,R),R),this.scene.add(F)}[[4.5,-3],[6.2,-1.5],[8.2,.2],[7.4,2.6],[1.2,5.6],[-4.2,5.2],[-8.2,2.4],[-8.4,-2.2],[2,-6],[-2.5,-7],[8,-5],[-9.2,-.4]].forEach(([x,R],F)=>{const U=Vu(F);U.position.set(x,Ce(x,R),R),this.scene.add(U),this.objects.push({kind:"tree",mesh:U,id:`tree_${F}`,hp:1,maxHp:1,depleted:!1,respawnAt:0})}),[{x:1.2,z:3.4,ore:"copper"},{x:-.3,z:4.1,ore:"copper"},{x:2.6,z:4,ore:"tin"},{x:-1.8,z:3.2,ore:"tin"},{x:.8,z:5.2,ore:"copper"},{x:3.4,z:2.2,ore:"copper"},{x:-3.2,z:2.8,ore:"tin"}].forEach((x,R)=>{const F=oc(x.ore,R);F.position.set(x.x,Ce(x.x,x.z),x.z),this.scene.add(F),this.objects.push({kind:"rock",mesh:F,id:`rock_${R}`,hp:1,maxHp:1,depleted:!1,respawnAt:0,meta:{ore:x.ore}})});const d=Wu();d.position.set(2.5,Ce(2.5,-2.5),-2.5),this.scene.add(d);const f={kind:"dummy",mesh:d,id:"dummy_0",hp:50,maxHp:50,depleted:!1,respawnAt:0};this.objects.push(f),this.dummyTarget=f;const m=mu();m.position.set(Ie.x,Ce(Ie.x,Ie.z),Ie.z),m.rotation.y=Math.PI*.85,m.visible=!0,m.scale.setScalar(1.15),this.scene.add(m);const _={kind:"yeti",mesh:m,id:"yeti_0",hp:yh,maxHp:yh,depleted:!1,respawnAt:0};this.objects.push(_),this.yetiTarget=_;const g=Y1();g.traverse(x=>{x===g||!x.isMesh||(x.position.y+=Ce(x.position.x,x.position.z))}),this.scene.add(g);const p=new dt;p.name="fallingSnow";for(let x=0;x<48;x++){const R=new w(new tt(.035+Math.random()*.03,4,3),new ue({color:15267071,transparent:!0,opacity:.55+Math.random()*.35,depthWrite:!1}));R.position.set(2.5+Math.random()*5.5,1.5+Math.random()*6,5.5+Math.random()*4.5),R.userData.fall=.4+Math.random()*.9,R.userData.drift=(Math.random()-.5)*.35,R.userData.baseY=R.position.y,p.add(R)}this.scene.add(p);const S=gu();S.position.set($e.x,Ce($e.x,$e.z),$e.z),S.rotation.y=Math.PI*.25,this.scene.add(S);const M={kind:"orc",mesh:S,id:"orc_0",hp:wh,maxHp:wh,depleted:!1,respawnAt:0};this.objects.push(M),this.orcTarget=M,this.scene.add($1());const v=rc();t(v,-3.6,-2.6),v.rotation.y=-.5,this.scene.add(v);const D=Go();t(D,-1.8,-2.4),this.scene.add(D);const T=ac();t(T,-3.9,.9),T.rotation.y=.8,this.scene.add(T);const C=new w(new Xt(.22,.28,.35,7),new Ue({color:4861972,flatShading:!0,roughness:.9}));C.position.set(.4,Ce(.4,-1.6)+.18,-1.6),C.castShadow=!0,this.scene.add(C);const P=new w(new tt(.08,8,6),new Ue({color:16764006,emissive:16755251,emissiveIntensity:1.2,flatShading:!0}));P.position.set(-.2,Ce(-.2,-1.8)+.85,-1.8),this.scene.add(P);const E=new cr(16755285,.55,6);E.position.copy(P.position),this.scene.add(E)}bindInput(t){const e=n=>{this.studio.isOpen()||n.target!==t||(this.pointer.x=n.clientX/window.innerWidth*2-1,this.pointer.y=-(n.clientY/window.innerHeight)*2+1,this.handleWorldClick())};t.addEventListener("pointerdown",e),window.addEventListener("wheel",n=>{this.studio.isOpen()||n.target?.closest("#gear-panel, #forge-panel, #inventory, #skills-panel, #chat, #studio")||(n.preventDefault(),this.nudgeZoom(Math.sign(n.deltaY)||1,.11))},{passive:!1}),window.addEventListener("keydown",n=>{if(!this.studio.isOpen()){if(this.keys.add(n.key.toLowerCase()),n.key==="1"&&this.handleAction("attack"),n.key==="2"&&this.handleAction("chop"),n.key==="3"&&this.handleAction("mine"),n.key==="4"&&this.handleAction("eat"),n.key==="5"&&this.handleAction("examine"),(n.key==="-"||n.key==="_")&&this.nudgeZoom(1,.16),(n.key==="="||n.key==="+")&&this.nudgeZoom(-1,.16),n.key.toLowerCase()==="k"){const s=document.getElementById("skills-panel");s&&(s.hidden=!s.hidden)}n.key.toLowerCase()==="c"&&this.hud.setGearOpen(!this.hud.isGearOpen()),n.key.toLowerCase()==="f"&&this.approachThenForge()}}),window.addEventListener("keyup",n=>this.keys.delete(n.key.toLowerCase()))}handleWorldClick(){this.raycaster.setFromCamera(this.pointer,this.camera);const t=[];for(const s of this.objects)s.depleted&&s.kind!=="dummy"&&s.kind!=="yeti"&&s.kind!=="orc"||s.mesh.traverse(o=>{o.isMesh&&o.name!=="outline"&&t.push(o)});const e=this.raycaster.intersectObjects(t,!1);if(e.length>0){let s=e[0].object;for(;s&&!this.objects.find(r=>r.mesh===s);)s=s.parent;const o=this.objects.find(r=>r.mesh===s);if(o){this.interactWith(o);return}}const n=this.raycaster.intersectObject(this.ground);if(n.length>0){const s=n[0].point;this.pendingCombat=!1,this.pendingCombatTarget=null,this.pendingCombatChat="",this.pendingGather=null,this.pendingForge=!1,this.startMove(s.x,s.z)}}interactWith(t){if(t.kind==="forge"){this.approachThenForge();return}if(t.kind==="yeti"){if(t.depleted||t.hp<=0){this.hud.chat("The Frost Yeti lies slain. It will return before long.","system");return}this.yetiAggroed=!0,this.approachThenCombat(t,`You ready your ${this.weaponName()} against the Frost Yeti!`);return}if(t.kind==="orc"){if(t.depleted||t.hp<=0){this.hud.chat("The Orc Scout lies slain. Another will take its place.","system");return}this.orcAggroed=!0,this.approachThenCombat(t,`You ready your ${this.weaponName()} against the Orc Scout!`);return}if(t.kind==="dummy"){if(t.hp<=0){this.hud.chat("The training dummy is already collapsed.","system");return}this.approachThenCombat(t,`You ready your ${this.weaponName()} against the training dummy.`);return}if(t.depleted){this.hud.chat("That resource is depleted. Wait for it to respawn.","system");return}if(t.kind==="tree"){if(!this.save.equipped.hatchet){this.hud.chat(this.hasItem("bronze_hatchet")?"Equip your hatchet from the Gear window first.":"You need a hatchet to chop trees.","system"),this.hasItem("bronze_hatchet")&&this.hud.setGearOpen(!0);return}this.approachThenGather(t,2.4,"Chopping Whisperwood…");return}if(t.kind==="rock"){if(!this.save.equipped.pickaxe){this.hud.chat(this.hasItem("bronze_pickaxe")?"Equip your pickaxe from the Gear window first.":"You need a pickaxe to mine rocks.","system"),this.hasItem("bronze_pickaxe")&&this.hud.setGearOpen(!0);return}this.approachThenGather(t,2.6,`Mining ${t.meta?.ore==="tin"?"tin":"copper"}…`)}}combatName(t){return t.kind==="yeti"?"Frost Yeti":t.kind==="orc"?"Orc Scout":t.kind==="dummy"?"Training Dummy":t.kind}isMonster(t){return t.kind==="yeti"||t.kind==="orc"}monsterAttackRange(t){return t.kind==="yeti"?Us:t.kind==="orc"?Ns:ev}beginCombat(t,e){if(!this.save.equipped.weapon){this.hud.chat("Equip a weapon from the Gear window first.","system"),this.hud.setGearOpen(!0);return}this.hud.chat(e,"combat"),this.pendingGather=null,this.pendingCombat=!1,this.pendingCombatTarget=null,this.pendingCombatChat="",this.combatOorT=0,this.combatAbortT=0,this.activity={type:"combat",target:t,cooldown:.15,swingT:0,swingDur:jo,hitDone:!1},this.syncHeldTool(),this.hud.showTarget(this.combatName(t),t.hp/t.maxHp),this.combatCamPull=1}approachThenCombat(t,e){if(!this.save.equipped.weapon){this.hud.chat("Equip a weapon from the Gear window first.","system"),this.hud.setGearOpen(!0);return}const n=this.playerAttackRange(t);if(this.distTo(t)>n*.92){const o=t.mesh.position.x-this.player.position.x,r=t.mesh.position.z-this.player.position.z,a=Math.hypot(o,r)||1,c=n*.78;this.startMove(t.mesh.position.x-o/a*c,t.mesh.position.z-r/a*c),this.pendingCombat=!0,this.pendingCombatTarget=t,this.pendingCombatChat=e,this.hud.chat(`You close on the ${this.combatName(t)}…`,"combat");return}this.beginCombat(t,e)}nearestCombatTarget(){let t=null,e=1/0;for(const n of this.objects){if(n.kind!=="yeti"&&n.kind!=="orc"&&n.kind!=="dummy"||n.hp<=0||n.depleted)continue;const s=this.distTo(n);s<e&&(e=s,t=n)}return e<16?t:null}approachThenGather(t,e,n){const s=t.mesh.position.x-this.player.position.x,o=t.mesh.position.z-this.player.position.z,r=Math.hypot(s,o);if(r>No){const a=t.mesh.position.x-s/r*(No*.85),c=t.mesh.position.z-o/r*(No*.85);this.startMove(a,c),this.pendingGather={obj:t,duration:e,label:n};return}this.faceToward(t.mesh.position.x,t.mesh.position.z),this.activity={type:"gather",target:t,elapsed:0,duration:e,label:n},an(this.player,t.kind==="tree"?"hatchet":"pickaxe"),this.hud.showProgress(n,0)}startMove(t,e){t=Math.max(-14,Math.min(14,t)),e=Math.max(-14,Math.min(14,e)),this.activity={type:"move",tx:t,tz:e},this.syncHeldTool(),this.moveMarker.position.set(t,Ce(t,e)+.06,e),this.moveMarker.visible=!0,this.hud.hideProgress(),this.hud.hideTarget()}handleAction(t){switch(t){case"attack":{if(!this.save.equipped.weapon){this.hud.chat("Equip a weapon from the Gear window first.","system"),this.hud.setGearOpen(!0);return}const e=this.nearestCombatTarget();if(!e){this.hud.chat("No enemies nearby to attack.","system");return}const n=this.playerAttackRange(e);if(this.distTo(e)>n+2){this.hud.chat(`${this.combatName(e)} is too far. Walk closer.`,"system"),this.pendingGather=null;const o=e.mesh.position.x-this.player.position.x,r=e.mesh.position.z-this.player.position.z,a=Math.hypot(o,r)||1;this.startMove(e.mesh.position.x-o/a*(n*.78),e.mesh.position.z-r/a*(n*.78)),this.pendingCombat=!0,this.pendingCombatTarget=e,this.pendingCombatChat=`You ready your ${this.weaponName()} against the ${this.combatName(e)}!`;return}this.interactWith(e);break}case"chop":{const e=this.nearest("tree");if(!e){this.hud.chat("No trees nearby.","system");return}this.interactWith(e);break}case"mine":{const e=this.nearest("rock");if(!e){this.hud.chat("No rocks nearby.","system");return}this.interactWith(e);break}case"eat":this.eatFood();break;case"examine":this.examineNearest();break}}nearest(t){let e=null,n=1/0;for(const s of this.objects){if(s.kind!==t||s.depleted&&t!=="dummy")continue;const o=this.distTo(s);o<n&&(n=o,e=s)}return n<14?e:null}examineNearest(){const t=[...this.objects].sort((e,n)=>this.distTo(e)-this.distTo(n))[0];if(!t||this.distTo(t)>5){this.hud.chat("You examine the Whisperwood clearing. Birds call from the canopy.","system");return}t.kind==="tree"?this.hud.chat("A tall Whisperwood tree. Good for training woodcutting.","system"):t.kind==="rock"?this.hud.chat(`A rocky outcrop laced with ${t.meta?.ore??"ore"}. Suitable for mining.`,"system"):t.kind==="yeti"?this.hud.chat("A massive Frost Yeti. Hide, fur, bone, claws, and rime — the camp forge can work them all.","combat"):t.kind==="orc"?this.hud.chat("An Orc Scout in spiked tan fur and leather. White tusks and a long spear gleam.","combat"):t.kind==="forge"?this.hud.chat("The Thornrest forge. Bring frost-yeti parts here to smith a matching set.","system"):this.hud.chat("A stuffed training dummy. Safe practice for combat skills.","system")}eatFood(){const t=this.save.inventory.findIndex(e=>e.id==="camp_rations");if(t<0){this.hud.chat("You have no camp rations left.","system");return}if(this.save.hp>=this.save.maxHp){this.hud.chat("You are already at full health.","system");return}this.consumeAt(t,1),this.save.hp=Math.min(this.save.maxHp,this.save.hp+25),this.hud.chat("You eat camp rations and recover 25 health.","loot"),this.refreshUI(),this.persist()}handleInvClick(t){const e=this.save.inventory[t];if(!e)return;const n=In[e.id];if(n?.slot){this.equipFromInventory(t);return}this.hud.chat(`${n?.name??e.id}${e.qty>1?` ×${e.qty}`:""}`,"system"),e.id==="camp_rations"&&this.eatFood()}heldTool(){if(this.activity.type==="gather"){const t=this.activity.target.kind;if(t==="tree")return this.save.equipped.hatchet?"hatchet":null;if(t==="rock")return this.save.equipped.pickaxe?"pickaxe":null}return tc(this.save.equipped.weapon)}syncHeldTool(){an(this.player,this.heldTool()),ec(this.player,this.save)}weaponName(){const t=this.save.equipped.weapon;return In[t??""]?.name??"weapon"}playerAttackRange(t){return this.monsterAttackRange(t)+k_(this.save.equipped.weapon)}equipFromInventory(t){const e=this.save.inventory[t];if(!e)return;const n=In[e.id];if(!n?.slot)return;const s=this.save.equipped[n.slot];this.save.inventory.splice(t,1),s&&this.addItem(s,1),this.save.equipped[n.slot]=e.id,this.syncHeldTool(),this.hud.setGearOpen(!0),this.hud.chat(`You equip the ${n.name}.`,"system"),this.refreshUI(),this.hud.setEquipment(this.save,`Equipped ${n.name}`),this.hud.showSlotPreview(n.slot,this.save),this.persist()}unequipSlot(t){const e=this.save.equipped[t];if(!e){this.hud.inspectGear(`${t[0].toUpperCase()}${t.slice(1)} slot is empty`);return}if(this.save.inventory.length>=28){this.hud.chat("Inventory full — cannot unequip.","system");return}this.save.equipped[t]=null,this.addItem(e,1),this.syncHeldTool();const n=In[e];this.hud.setEquipment(this.save,`Unequipped ${n?.name??e}`),this.hud.chat(`You unequip the ${n?.name??e}.`,"system"),this.refreshUI(),this.persist()}distTo(t){return Math.hypot(t.mesh.position.x-this.player.position.x,t.mesh.position.z-this.player.position.z)}faceToward(t,e,n=1/30,s=10){const o=t-this.player.position.x,r=e-this.player.position.z;if(Math.hypot(o,r)>.01){const a=Math.atan2(o,r);this.player.rotation.y=Ds(this.player.rotation.y,a,s,n)}}hasItem(t){return this.save.inventory.some(e=>e.id===t)}addItem(t,e=1){const n=In[t];if(!n)return!1;if(n.stackable){const s=this.save.inventory.find(o=>o.id===t);if(s)return s.qty+=e,!0}return this.save.inventory.length>=28?(this.hud.chat("Inventory full!","system"),!1):(this.save.inventory.push({id:t,qty:e}),!0)}consumeAt(t,e){const n=this.save.inventory[t];n&&(n.qty-=e,n.qty<=0&&this.save.inventory.splice(t,1))}consumeId(t,e){if(lr(this.save.inventory,t)<e)return!1;let n=e;for(let s=this.save.inventory.length-1;s>=0&&n>0;s--){const o=this.save.inventory[s];if(o.id!==t)continue;const r=Math.min(o.qty,n);this.consumeAt(s,r),n-=r}return n===0}approachThenForge(){const t=this.objects.find(n=>n.kind==="forge");if(!t)return;if(this.distTo(t)>8.5){const n=t.mesh.position.x-this.player.position.x,s=t.mesh.position.z-this.player.position.z,o=Math.hypot(n,s)||1;this.startMove(t.mesh.position.x-n/o*1.4,t.mesh.position.z-s/o*1.4),this.pendingForge=!0,this.hud.chat("You walk to the Thornrest forge…","system");return}this.openForge()}openForge(){this.hud.setForgeOpen(!0,this.save),this.hud.chat("The forge is hot. Choose a frost-yeti pattern to work.","system")}craftAtForge(t){const e=uu.find(n=>n.id===t);if(e){if(!fu(this.save,e)){this.hud.chat("You still need more frost-yeti parts for that.","system"),this.hud.setForgeRecipes(this.save);return}for(const n of e.cost)this.consumeId(n.id,n.qty);if(!this.addItem(e.id,1)){for(const n of e.cost)this.addItem(n.id,n.qty);return}this.hud.chat(`You forge the ${e.name} from frost-yeti parts.`,"loot"),this.refreshUI(),this.hud.setForgeRecipes(this.save),this.persist()}}grantXp(t,e){const n=this.save.skills[t],s=n.level;n.xp+=e,n.level=H_(n.xp),this.hud.chat(`+${e} ${t} XP`,"xp"),this.vfx.spawnXp(this.player.position,e,uv[t]),n.level>s&&(this.hud.chat(`Congratulations! Your ${t} level is now ${n.level}.`,"xp"),t==="constitution"&&(this.save.maxHp=100+(n.level-10)*10,this.save.hp=Math.min(this.save.hp+10,this.save.maxHp)))}update(t){this.save.stamina=Math.min(100,this.save.stamina+t*4),this.save.focus=Math.min(100,this.save.focus+t*2),this.save.hp<this.save.maxHp&&(this.save.hp=Math.min(this.save.maxHp,this.save.hp+t*1.5));const e=performance.now()/1e3;for(const s of this.objects)s.depleted&&s.kind!=="dummy"&&s.kind!=="yeti"&&s.kind!=="orc"&&e>=s.respawnAt&&(s.depleted=!1,s.mesh.visible=!0,this.hud.chat(s.kind==="tree"?"A Whisperwood tree has grown back.":"An ore rock has respawned.","system")),s.kind==="dummy"&&s.hp<=0&&e>=s.respawnAt&&(s.hp=s.maxHp,s.depleted=!1,s.mesh.visible=!0,s.mesh.rotation.set(0,0,0),s.mesh.position.y=Ce(s.mesh.position.x,s.mesh.position.z),s.mesh.scale.setScalar(1),this.hud.chat("The training dummy is patched up and ready again.","system")),s.kind==="yeti"&&s.depleted&&e>=s.respawnAt&&(s.hp=s.maxHp,s.depleted=!1,s.mesh.visible=!0,s.mesh.rotation.set(0,Math.PI*.85,0),s.mesh.scale.setScalar(1.15),s.mesh.position.set(Ie.x,Ce(Ie.x,Ie.z),Ie.z),this.deathAnims=this.deathAnims.filter(o=>o.mesh!==s.mesh),this.yetiAggroed=!1,this.yetiAttackCd=0,this.yetiSwipeT=0,this.yetiHitDone=!1,this.yetiTeleDone=!1,this.yetiMoveBlend=0,this.yetiGait=0,this.yetiSmoother.reset(),Uo(s.mesh,0),Ai(s.mesh,this.animTime,!1),this.hud.chat("A Frost Yeti stomps back into the north-east clearing!","combat")),s.kind==="orc"&&s.depleted&&e>=s.respawnAt&&(s.hp=s.maxHp,s.depleted=!1,s.mesh.visible=!0,s.mesh.rotation.set(0,Math.PI*.25,0),s.mesh.scale.setScalar(1),s.mesh.position.set($e.x,Ce($e.x,$e.z),$e.z),this.orcAggroed=!1,this.orcAttackCd=0,this.orcSwipeT=0,this.orcHitDone=!1,this.orcGait=0,this.orcSmoother.reset(),na(s.mesh,0),os(s.mesh,this.animTime,!1),this.hud.chat("An Orc Scout stalks back onto the south-west trail!","combat"));const n=this.scene.getObjectByName("fallingSnow");if(n&&n.children.forEach(s=>{s.position.y-=s.userData.fall*t,s.position.x+=s.userData.drift*t,s.position.y<.05&&(s.position.y=6+Math.random()*2,s.position.x=2.5+Math.random()*5.5,s.position.z=5.5+Math.random()*4.5)}),this.scene.traverse(s=>{if(s.name==="flame"&&(s.scale.y=.9+Math.sin(e*8)*.15,s.rotation.y+=t*2),s.name==="flameGlow"||s.name==="forgeGlow"){const o=.9+Math.sin(e*6)*.2;s.scale.setScalar(o)}if(s.name==="forgeEmber"&&(s.scale.y=.45+Math.sin(e*7)*.08),s.name==="yetiBreath"){const o=this.yetiAggroed?1.35:1,r=(.85+Math.sin(e*3.4)*.45)*o;s.scale.set(r,.9+r*.5,r*1.25);const a=s.material;a&&a.opacity!==void 0&&(a.opacity=(.4+Math.sin(e*4.2)*.22)*(this.yetiAggroed?1.15:1))}if(s.name==="yetiBreathMist"){const o=this.yetiAggroed?1.3:1,r=(.85+Math.sin(e*2.8+s.position.z)*.4)*o;s.scale.setScalar(r);const a=s.material;a&&a.opacity!==void 0&&(a.opacity=Math.max(.08,.28*r))}if(s.name==="yetiEyeGlow"){const o=this.yetiAggroed||this.activity.type==="combat"&&this.activity.target?.kind==="yeti",r=.95+Math.sin(e*6.2)*(o?.55:.28);s.scale.setScalar(r*(o?1.65:1.1));const a=s.material;a&&a.opacity!==void 0&&(a.opacity=o?.72+Math.sin(e*7)*.18:.45)}if(s.name==="yetiEye"){const o=this.yetiAggroed||this.activity.type==="combat"&&this.activity.target?.kind==="yeti",r=s.material;if(r&&r.emissiveIntensity!==void 0){const a=o?1.35:.55;r.emissiveIntensity=a+Math.sin(e*6.8)*(o?.35:.12)}}if(s.name==="yetiEyeLight"){const o=this.yetiAggroed||this.activity.type==="combat"&&this.activity.target?.kind==="yeti",r=s;r.intensity=(o?1.85:.85)+Math.sin(e*7.1)*(o?.55:.15),r.distance=o?5.2:3.4}}),this.sun.target.position.set(this.player.position.x,this.player.position.y,this.player.position.z),this.sun.target.updateMatrixWorld(),this.animTime+=t,this.playerFlinch>0){const s=this.playerFlinch>.65?2.4:3.6;if(this.playerFlinch=Math.max(0,this.playerFlinch-t*s),fh(this.player,this.playerFlinch,this.playerFlinch>.65?1.1:.55),this.player.position.x+=this.playerKnock.x*t,this.player.position.z+=this.playerKnock.z*t,this.playerKnock.multiplyScalar(Math.max(0,1-t*5.5)),this.playerFlinch<=0){this.player.rotation.z=0,this.player.rotation.x=0;const o=this.player.getObjectByName("playerTorso");o&&(o.rotation.y=0)}}for(let s=this.hitReacts.length-1;s>=0;s--){const o=this.hitReacts[s];o.t-=t;const r=Math.max(0,Math.min(1,o.t/.35));if(fh(o.mesh,r,o.inten),o.t<=0){o.mesh.rotation.z=0,o.mesh.rotation.x=0;const a=o.mesh.getObjectByName("playerTorso")||o.mesh.getObjectByName("yetiBody")||o.mesh.getObjectByName("orcBody");a&&(a.rotation.y=0),this.hitReacts.splice(s,1)}}for(let s=this.deathAnims.length-1;s>=0;s--){const o=this.deathAnims[s];o.t+=t;const r=Math.min(1,o.t/o.dur);d1(o.mesh,o.kind,r),o.mesh.position.y+=Ce(o.mesh.position.x,o.mesh.position.z),r>=1&&(o.mesh.visible=!1,o.mesh.rotation.set(0,o.mesh.rotation.y,0),o.mesh.scale.setScalar(o.kind==="yeti"?1.15:1),o.mesh.position.y=0,this.deathAnims.splice(s,1))}if(this.syncHeldTool(),this.activity.type==="move"){const{tx:s,tz:o}=this.activity,r=s-this.player.position.x,a=o-this.player.position.z,c=Math.hypot(r,a),l=c<.55?c/.55*ra:ra;if(this.moveSpeedCur<l?this.moveSpeedCur=Math.min(l,this.moveSpeedCur+sv*t):this.moveSpeedCur=Math.max(l,this.moveSpeedCur-ov*t),this.moveBlend=Math.min(1,this.moveBlend+t*4.5),c<.12){if(this.player.position.x=s,this.player.position.z=o,this.moveMarker.visible=!1,this.stoppingSteps=0,this.moveBlend=0,this.activity={type:"idle"},this.moveSpeedCur=0,this.pendingGather){const h=this.pendingGather;this.pendingGather=null,this.approachThenGather(h.obj,h.duration,h.label)}else if(this.pendingForge)this.pendingForge=!1,this.openForge();else if(this.pendingCombat){this.pendingCombat=!1;const h=this.pendingCombatTarget??this.nearestCombatTarget(),u=this.pendingCombatChat||(h?`You ready your ${this.weaponName()} against the ${this.combatName(h)}!`:"");this.pendingCombatTarget=null,this.pendingCombatChat="",h&&h.hp>0&&!h.depleted&&(h.kind==="yeti"&&(this.yetiAggroed=!0),h.kind==="orc"&&(this.orcAggroed=!0),this.beginCombat(h,u))}}else{const h=c||1,u=Math.min(c,this.moveSpeedCur*t);this.player.position.x+=r/h*u,this.player.position.z+=a/h*u,this.lastMoveDir.set(r/h,0,a/h);let f=Math.atan2(r,a)-this.player.rotation.y;for(;f>Math.PI;)f-=Math.PI*2;for(;f<-Math.PI;)f+=Math.PI*2;const m=Math.abs(f)>1.2?7:11;this.faceToward(s,o,t,m);const _=Math.min(1.05,.45+this.moveSpeedCur/ra*.55),g=Math.max(ic(_)*.5,Math.PI*this.moveSpeedCur/u1(_));this.gaitPhase+=g*t,Jo(this.player,this.gaitPhase,_,this.moveBlend),this.save.stamina=Math.max(0,this.save.stamina-t*2)}}else if(this.activity.type==="gather"){const s=this.activity;if(s.target.depleted)this.activity={type:"idle"},this.syncHeldTool(),ci(this.player),this.hud.hideProgress();else if(this.distTo(s.target)>No+.35)this.activity={type:"idle"},this.syncHeldTool(),ci(this.player),this.hud.hideProgress(),this.hud.chat("You move too far away.","system");else{s.elapsed+=t,this.hud.showProgress(s.label,s.elapsed/s.duration),this.faceToward(s.target.mesh.position.x,s.target.mesh.position.z,t,8),this.toolSwing+=t;const o=this.toolSwing*1.35%1;if(sc(this.player,o,s.target.kind==="tree"?"tree":"rock"),Math.floor(s.elapsed*4)!==Math.floor((s.elapsed-t)*4)){const r=s.target.mesh.position.clone();r.y=s.target.kind==="tree"?1.05:.7,s.target.kind==="tree"?this.vfx.spawnWoodchips(r,12):this.vfx.spawnMineSparks(r,14)}s.elapsed>=s.duration&&(this.completeGather(s.target),this.activity={type:"idle"},this.syncHeldTool(),ci(this.player),this.hud.hideProgress())}}else if(this.activity.type==="combat"){const s=this.activity,o=s.target;if(this.hud.showTarget(this.combatName(o),Math.max(0,o.hp)/o.maxHp),o.hp<=0||o.depleted)this.activity={type:"idle"},this.syncHeldTool(),ci(this.player),this.hud.hideTarget(),this.combatCamPull=0,this.combatOorT=0;else{const r=this.playerAttackRange(o),a=r+.55,c=r+1.45;let l=this.distTo(o);const h=s.swingT>0&&s.swingT/s.swingDur<ph+.08;if(l>a&&l<c+.35&&h){const d=o.mesh.position.x-this.player.position.x,f=o.mesh.position.z-this.player.position.z,m=Math.hypot(d,f)||1,_=Math.min(l-r*.88,3.6*t);this.player.position.x+=d/m*_,this.player.position.z+=f/m*_,l=this.distTo(o),this.combatOorT=Math.max(0,this.combatOorT-t*1.5)}else if(l>a&&l<=c&&!h){const d=o.mesh.position.x-this.player.position.x,f=o.mesh.position.z-this.player.position.z,m=Math.hypot(d,f)||1,_=Math.min(l-r*.9,2.4*t);this.player.position.x+=d/m*_,this.player.position.z+=f/m*_,l=this.distTo(o),this.combatOorT+=t*.55}else l>c?this.combatOorT+=t:this.combatOorT=Math.max(0,this.combatOorT-t*2.5);const u=h?.55:.3;if(l>c&&this.combatOorT>=u&&!h)this.abortCombatSoft(t,!0);else{if(this.faceToward(o.mesh.position.x,o.mesh.position.z,t,10),this.isMonster(o)){const d=this.player.position.x-o.mesh.position.x,f=this.player.position.z-o.mesh.position.z;Math.hypot(d,f)>.01&&(o.mesh.rotation.y=Ds(o.mesh.rotation.y,Math.atan2(d,f),6,t))}if(s.swingT>0){s.swingT+=t;const d=Math.min(1,s.swingT/s.swingDur);if(Bu(this.player,d),!this.playerTeleDone&&d<.12){this.playerTeleDone=!0;const f=v1*s.swingDur;this.vfx.spawnTelegraph(this.player.position.clone(),!1,f,.7)}!s.hitDone&&d>=f1&&d<=ph+.05&&this.distTo(o)<=r+.95&&(s.hitDone=!0,this.swingAtTarget(o)),d>=1&&(s.swingT=0,s.hitDone=!1,this.playerTeleDone=!1,s.cooldown=.72,this.syncHeldTool())}else s.cooldown-=t,Pi(this.player,this.animTime,!0),s.cooldown<=0&&this.distTo(o)<=a+.2&&(s.swingT=.001,s.swingDur=jo,s.hitDone=!1,this.playerTeleDone=!1,this.syncHeldTool())}}}else this.syncHeldTool(),this.stoppingSteps>0?(this.stoppingSteps-=t,this.moveBlend=Math.max(0,this.moveBlend-t*3.5),this.gaitPhase+=4.5*t,Jo(this.player,this.gaitPhase,.4,Math.max(.15,this.moveBlend))):(this.moveBlend=Math.max(0,this.moveBlend-t*5),this.moveSpeedCur=0,Pi(this.player,this.animTime)),this.combatCamPull=Math.max(0,this.combatCamPull-t*.6);this.updateYetiAI(t),this.updateOrcAI(t),this.vfx.update(t),this.updateCombatTreeFade(t),this.combatAbortT>0&&(this.combatAbortT=Math.max(0,this.combatAbortT-t),Pi(this.player,this.animTime),this.combatAbortT<=0&&(this.syncHeldTool(),ci(this.player))),this.poseSmoother.apply(this.player,t,this.activity.type==="combat"?26:18),this.yetiTarget&&this.yetiSmoother.apply(this.yetiTarget.mesh,t,this.yetiAggroed?22:16),this.orcTarget&&this.orcSmoother.apply(this.orcTarget.mesh,t,this.orcAggroed?24:16),this.snapMoversToGround(),V1(this.animTime),this.updateCamera(t),this.save.x=this.player.position.x,this.save.z=this.player.position.z,this.saveTimer+=t,this.saveTimer>=rv&&(this.saveTimer=0,this.persist()),this.hud.setOrbs(this.save.hp,this.save.maxHp,this.save.focus,this.save.stamina),this.drawMinimapMarkers()}completeGather(t){if(t.kind==="tree"){if(!this.addItem("whisper_logs",1))return;this.grantXp("woodcutting",25),this.hud.chat("You chop some Whisper Logs.","loot"),this.vfx.spawnWoodchips(t.mesh.position.clone().setY(1.1),22),t.depleted=!0,t.mesh.visible=!1,t.respawnAt=performance.now()/1e3+12}else if(t.kind==="rock"){const e=t.meta?.ore==="tin"?"tin_ore":"copper_ore";if(!this.addItem(e,1))return;this.grantXp("mining",28),this.hud.chat(`You mine some ${In[e].name}.`,"loot"),this.vfx.spawnMineSparks(t.mesh.position.clone().setY(.7),24),t.depleted=!0,t.mesh.visible=!1,t.respawnAt=performance.now()/1e3+14}this.refreshUI(),this.persist()}swingAtTarget(t){const e=this.save.skills.attack.level,n=this.save.skills.strength.level,s=.65+e*.01,o=this.combatName(t);if(Math.random()>s){this.hud.chat(`You swing and miss the ${o}.`,"combat");return}const r=3+B_(this.save.equipped.weapon)+Math.floor(Math.random()*(4+n));t.hp-=r;const a=t.kind==="yeti"?18:t.kind==="orc"?15:12,c=t.kind==="yeti"?14:t.kind==="orc"?12:8,l=t.kind==="yeti"?8:t.kind==="orc"?6:4;this.grantXp("attack",a),this.grantXp("strength",c),this.grantXp("constitution",l);const h=t.mesh.position.clone().setY(1.25);this.vfx.spawnHitSparks(h,14+Math.min(12,r)),this.vfx.spawnImpactBurst(h,t.kind==="yeti"?16:20,t.kind==="yeti"),this.vfx.spawnDamage(t.mesh.position.clone().setY(1.5),r,r>=8),X1(t.mesh,r>=10?260:160);const u=r>=12?1.25:r>=8?.9:.5,d=r>=12?.28:r>=8?.18:.1,f=Math.atan2(t.mesh.position.x-this.player.position.x,t.mesh.position.z-this.player.position.z);if(t.mesh.position.x+=Math.sin(f)*d,t.mesh.position.z+=Math.cos(f)*d,this.hitReacts.push({mesh:t.mesh,t:u>1?.48:.28,inten:u}),t.kind==="yeti"&&(this.vfx.spawnIceBurst(t.mesh.position.clone(),12),this.yetiAggroed=!0),t.kind==="orc"&&(this.vfx.spawnSpearThrust(t.mesh.position.clone(),8),this.orcAggroed=!0),t.kind==="dummy"){const m=Math.random()<.15?1:0;m?(this.save.hp=Math.max(1,this.save.hp-m),this.hud.chat(`You hit the dummy for ${r}. Splinter grazes you (-${m}).`,"combat")):this.hud.chat(`You hit the training dummy for ${r} damage.`,"combat")}else t.kind==="orc"?this.hud.chat(`You strike the Orc Scout for ${r} damage!`,"combat"):this.hud.chat(`You strike the Frost Yeti for ${r} damage!`,"combat");t.hp<=0?(t.hp=0,t.kind==="yeti"?this.onYetiDeath(t):t.kind==="orc"?this.onOrcDeath(t):this.onDummyDeath(t)):this.hud.showTarget(o,t.hp/t.maxHp),this.refreshUI(),this.persist()}onDummyDeath(t){t.respawnAt=performance.now()/1e3+8,this.deathAnims.push({mesh:t.mesh,kind:"dummy",t:0,dur:.85}),this.hud.chat("The training dummy collapses! It will be repaired shortly.","combat"),this.grantXp("defence",15),this.activity={type:"idle"},this.syncHeldTool(),ci(this.player),this.hud.hideTarget(),this.combatCamPull=0}onYetiDeath(t){t.depleted=!0,t.respawnAt=performance.now()/1e3+av,this.yetiAggroed=!1,this.yetiAttackCd=0,this.yetiSwipeT=0,this.vfx.spawnIceBurst(t.mesh.position.clone().setY(1.2),28),this.vfx.spawnImpactBurst(t.mesh.position.clone().setY(1),16,!0),this.deathAnims.push({mesh:t.mesh,kind:"yeti",t:0,dur:1.35}),this.hud.chat("The Frost Yeti collapses in a burst of frost!","combat"),this.grantXp("defence",28),this.grantXp("attack",12),this.grantXp("strength",10),this.grantXp("constitution",10);const e=[["yeti_fur",2,"You strip Yeti Fur from the pelt."],["yeti_hide",1,"You cut a sheet of Yeti Hide."],["frost_claw",1,"You pry free a Frost Claw."]];for(const[n,s,o]of e)this.addItem(n,s)&&this.hud.chat(o,"loot");Math.random()<.75&&this.addItem("yeti_bone",1)&&this.hud.chat("A Yeti Bone comes free of the carcass.","loot"),Math.random()<.6&&this.addItem("frost_fang",1)&&this.hud.chat("You wrench out a Frost Fang.","loot"),Math.random()<.45&&this.addItem("rime_shard",1)&&this.hud.chat("A Rime Shard cracks off the hide.","loot"),this.activity={type:"idle"},this.syncHeldTool(),this.hud.hideTarget(),this.refreshUI(),this.persist()}onOrcDeath(t){t.depleted=!0,t.respawnAt=performance.now()/1e3+lv,this.orcAggroed=!1,this.orcAttackCd=0,this.orcSwipeT=0,this.vfx.spawnSpearThrust(t.mesh.position.clone().setY(1.1),16),this.vfx.spawnHitSparks(t.mesh.position.clone().setY(1),20),this.vfx.spawnImpactBurst(t.mesh.position.clone().setY(1),14,!1),this.deathAnims.push({mesh:t.mesh,kind:"orc",t:0,dur:1.15}),this.hud.chat("The Orc Scout falls! Its spear clatters to the dirt.","combat"),this.grantXp("defence",22),this.grantXp("attack",10),this.grantXp("strength",8),this.grantXp("constitution",8),this.addItem("orc_tooth",1)&&this.hud.chat("You loot an Orc Tooth.","loot"),Math.random()<.65&&this.addItem("scout_leather",1)&&this.hud.chat("You strip Scout Leather from the vest.","loot"),this.activity={type:"idle"},this.syncHeldTool(),this.hud.hideTarget(),this.refreshUI(),this.persist()}updateYetiAI(t){const e=this.yetiTarget;if(!e||e.depleted||e.hp<=0){this.yetiSwipeT>0&&(this.yetiSwipeT=Math.max(0,this.yetiSwipeT-t));return}const n=this.distTo(e),s=Math.hypot(e.mesh.position.x-Ie.x,e.mesh.position.z-Ie.z);if(!this.yetiAggroed&&n<=sa&&(this.yetiAggroed=!0,this.hud.chat("The Frost Yeti snarls and charges!","combat"),(this.activity.type!=="combat"||this.activity.target!==e)&&this.beginCombat(e,"The Frost Yeti engages you!")),!this.yetiAggroed){const c=Ie.x-e.mesh.position.x,l=Ie.z-e.mesh.position.z,h=Math.hypot(c,l);if(h>.15){const u=Math.min(h,2.8*t);e.mesh.position.x+=c/h*u,e.mesh.position.z+=l/h*u,e.mesh.rotation.y=Ds(e.mesh.rotation.y,Math.atan2(c,l),4,t),e.mesh.position.y=0,Ai(e.mesh,this.tickMonsterGait("yeti",2.8,t),!0,Math.min(1,h/2)),Uo(e.mesh,0);return}e.mesh.position.set(Ie.x,0,Ie.z),Ai(e.mesh,this.animTime,!1),Uo(e.mesh,0);return}const o=this.player.position.x-e.mesh.position.x,r=this.player.position.z-e.mesh.position.z;Math.hypot(o,r)>.01&&(e.mesh.rotation.y=Ds(e.mesh.rotation.y,Math.atan2(o,r),5,t));let a=!1;if(n>Us&&n<sa+5&&s<7.5){this.yetiMoveBlend=Math.min(1,this.yetiMoveBlend+t*2.2);const c=Math.min(n-Us*.85,2.35*this.yetiMoveBlend*t),l=Math.hypot(o,r)||1;e.mesh.position.x+=o/l*c,e.mesh.position.z+=r/l*c,a=!0;const h=Ie.x,u=Ie.z,d=e.mesh.position.x-h,f=e.mesh.position.z-u,m=Math.hypot(d,f);m>7.5&&(e.mesh.position.x=h+d/m*7.5,e.mesh.position.z=u+f/m*7.5)}else this.yetiMoveBlend=Math.max(0,this.yetiMoveBlend-t*3);if(n>sa+7||s>8.5){this.yetiAggroed=!1,this.yetiSwipeT=0,this.hud.chat("The Frost Yeti loses interest and returns to the clearing.","system");const c=e.mesh.position.x,l=e.mesh.position.z;e.mesh.position.x+=(Ie.x-e.mesh.position.x)*Math.min(1,t*.9),e.mesh.position.z+=(Ie.z-e.mesh.position.z)*Math.min(1,t*.9),this.activity.type==="combat"&&this.activity.target===e&&(this.activity={type:"idle"},this.syncHeldTool(),ci(this.player),this.hud.hideTarget());const h=t>1e-5?Math.hypot(e.mesh.position.x-c,e.mesh.position.z-l)/t:0;Ai(e.mesh,this.tickMonsterGait("yeti",h,t),!0,.7);return}if(this.yetiSwipeT>0){this.yetiSwipeT+=t;const c=Math.min(1,this.yetiSwipeT/Qo);if(ku(e.mesh,c),!this.yetiTeleDone){this.yetiTeleDone=!0;const l=x1*Qo+.08;this.vfx.spawnTelegraph(e.mesh.position.clone(),!0,l,1.35),this.vfx.spawnArcTelegraph(e.mesh.position.clone(),e.mesh.rotation.y,!0,l)}!this.yetiHitDone&&c>=p1&&c<=m1+.05&&(this.yetiHitDone=!0,this.yetiMeleeHit(e)),c>=1&&(this.yetiSwipeT=0,this.yetiHitDone=!1,this.yetiTeleDone=!1,Uo(e.mesh,0))}else{const c=Math.max(this.yetiMoveBlend,a?.4:0),l=a?this.tickMonsterGait("yeti",2.35*this.yetiMoveBlend,t):this.animTime;Ai(e.mesh,l,a,c),this.yetiAttackCd-=t,n<=Us+.4&&this.yetiAttackCd<=0&&(this.yetiAttackCd=2.55,this.yetiSwipeT=.001,this.yetiHitDone=!1,this.yetiTeleDone=!1)}}yetiMeleeHit(t){if(this.distTo(t)>Us+.65)return;const n=this.save.skills.defence.level,s=Mh+Math.floor(Math.random()*(cv-Mh+1)),o=Math.max(1,s-Math.floor(n/5)-ih(this.save));this.save.hp=Math.max(0,this.save.hp-o),this.vfx.spawnClawSlash(this.player.position.clone(),14),this.vfx.spawnIceBurst(this.player.position.clone(),16),this.vfx.spawnImpactBurst(this.player.position.clone().setY(1.1),16,!0),this.vfx.spawnDamage(this.player.position.clone().setY(1.3),o),this.playerFlinch=o>=8?1.15:.75;const r=Math.atan2(this.player.position.x-t.mesh.position.x,this.player.position.z-t.mesh.position.z),a=o>=8?3.4:2.4;this.playerKnock.set(Math.sin(r)*a,0,Math.cos(r)*a),this.hud.chat(`The Frost Yeti swipes you for ${o} damage!`,"combat"),this.hud.setOrbs(this.save.hp,this.save.maxHp,this.save.focus,this.save.stamina),this.save.hp<=0&&(this.save.hp=Math.max(10,Math.floor(this.save.maxHp*.35)),this.player.position.set(0,0,2),this.yetiAggroed=!1,this.activity={type:"idle"},this.syncHeldTool(),this.hud.hideTarget(),this.hud.chat("You fall! You wake by the Thornrest campfire, battered but alive.","combat"),t.mesh.position.set(Ie.x,0,Ie.z)),this.activity.type!=="combat"&&t.hp>0&&!t.depleted&&this.beginCombat(t,"You raise your guard against the Frost Yeti!"),this.refreshUI(),this.persist()}updateOrcAI(t){const e=this.orcTarget;if(!e||e.depleted||e.hp<=0){this.orcSwipeT>0&&(this.orcSwipeT=Math.max(0,this.orcSwipeT-t));return}const n=this.distTo(e),s=Math.hypot(e.mesh.position.x-$e.x,e.mesh.position.z-$e.z);if(!this.orcAggroed&&n<=oa&&(this.orcAggroed=!0,this.hud.chat("The Orc Scout snarls and levels its spear!","combat"),(this.activity.type!=="combat"||this.activity.target!==e)&&this.beginCombat(e,"The Orc Scout engages you!")),!this.orcAggroed){os(e.mesh,this.animTime,!1),na(e.mesh,0);return}const o=this.player.position.x-e.mesh.position.x,r=this.player.position.z-e.mesh.position.z;Math.hypot(o,r)>.01&&(e.mesh.rotation.y=Ds(e.mesh.rotation.y,Math.atan2(o,r),7,t));let a=!1;if(n>Ns&&n<oa+5&&s<7.5){this.orcMoveBlend=Math.min(1,this.orcMoveBlend+t*3.5);const c=Math.min(n-Ns*.85,3.2*this.orcMoveBlend*t),l=Math.hypot(o,r)||1;e.mesh.position.x+=o/l*c,e.mesh.position.z+=r/l*c,a=!0;const h=$e.x,u=$e.z,d=e.mesh.position.x-h,f=e.mesh.position.z-u,m=Math.hypot(d,f);m>7.5&&(e.mesh.position.x=h+d/m*7.5,e.mesh.position.z=u+f/m*7.5)}else this.orcMoveBlend=Math.max(0,this.orcMoveBlend-t*4);if(n>oa+7||s>8.5){this.orcAggroed=!1,this.orcSwipeT=0,this.hud.chat("The Orc Scout loses interest and returns to the trail.","system");const c=e.mesh.position.x,l=e.mesh.position.z;e.mesh.position.x+=($e.x-e.mesh.position.x)*Math.min(1,t*1.1),e.mesh.position.z+=($e.z-e.mesh.position.z)*Math.min(1,t*1.1),this.activity.type==="combat"&&this.activity.target===e&&(this.activity={type:"idle"},this.syncHeldTool(),ci(this.player),this.hud.hideTarget());const h=t>1e-5?Math.hypot(e.mesh.position.x-c,e.mesh.position.z-l)/t:0;os(e.mesh,this.tickMonsterGait("orc",h,t),!0,.75);return}if(this.orcSwipeT>0){this.orcSwipeT+=t;const c=Math.min(1,this.orcSwipeT/tr);if(Hu(e.mesh,c),!this.orcTeleDone){this.orcTeleDone=!0;const l=y1*tr+.06;this.vfx.spawnTelegraph(e.mesh.position.clone(),!1,l,1.1)}!this.orcHitDone&&c>=g1&&c<=_1+.05&&(this.orcHitDone=!0,this.orcMeleeHit(e)),c>=1&&(this.orcSwipeT=0,this.orcHitDone=!1,this.orcTeleDone=!1,na(e.mesh,0))}else{const c=Math.max(this.orcMoveBlend,a?.45:0),l=a?this.tickMonsterGait("orc",3.2*this.orcMoveBlend,t):this.animTime;os(e.mesh,l,a,c),this.orcAttackCd-=t,n<=Ns+.4&&this.orcAttackCd<=0&&(this.orcAttackCd=2.05,this.orcSwipeT=.001,this.orcHitDone=!1,this.orcTeleDone=!1)}}orcMeleeHit(t){if(this.distTo(t)>Ns+.65)return;const n=this.save.skills.defence.level,s=Sh+Math.floor(Math.random()*(hv-Sh+1)),o=Math.max(1,s-Math.floor(n/5)-ih(this.save));this.save.hp=Math.max(0,this.save.hp-o),this.vfx.spawnSpearThrust(this.player.position.clone(),14),this.vfx.spawnHitSparks(this.player.position.clone().setY(1.1),14),this.vfx.spawnImpactBurst(this.player.position.clone().setY(1.05),16,!1),this.vfx.spawnDamage(this.player.position.clone().setY(1.3),o),this.playerFlinch=o>=7?1.05:.7;const r=Math.atan2(this.player.position.x-t.mesh.position.x,this.player.position.z-t.mesh.position.z),a=o>=7?2.9:2.1;this.playerKnock.set(Math.sin(r)*a,0,Math.cos(r)*a),this.hud.chat(`The Orc Scout thrusts its spear for ${o} damage!`,"combat"),this.hud.setOrbs(this.save.hp,this.save.maxHp,this.save.focus,this.save.stamina),this.save.hp<=0&&(this.save.hp=Math.max(10,Math.floor(this.save.maxHp*.35)),this.player.position.set(0,0,2),this.orcAggroed=!1,this.yetiAggroed=!1,this.activity={type:"idle"},this.syncHeldTool(),this.hud.hideTarget(),this.hud.chat("You fall! You wake by the Thornrest campfire, battered but alive.","combat"),t.mesh.position.set($e.x,0,$e.z)),this.activity.type!=="combat"&&t.hp>0&&!t.depleted&&this.beginCombat(t,"You raise your guard against the Orc Scout!"),this.refreshUI(),this.persist()}abortCombatSoft(t,e){e&&this.hud.chat("You step out of range.","combat"),this.combatAbortT=.22,this.combatOorT=0,this.activity={type:"idle"},this.hud.hideTarget(),this.combatCamPull=Math.max(.15,this.combatCamPull*.5),this.syncHeldTool()}tickMonsterGait(t,e,n){const s=t==="yeti"?a1:c1,o=t==="yeti"?2.4:4.2,r=t==="yeti"?this.yetiGait:this.orcGait;if(e<.08)return r;const a=r+Math.max(o*.5,Math.PI*e/s)*n;return t==="yeti"?this.yetiGait=a:this.orcGait=a,a}sitOnGround(t,e=0){t.position.y=Ce(t.position.x,t.position.z)+e}snapMoversToGround(){const t=new Set(this.deathAnims.map(e=>e.mesh));this.sitOnGround(this.player,Number(this.player.userData.locomotionY)||0),this.yetiTarget&&!t.has(this.yetiTarget.mesh)&&this.sitOnGround(this.yetiTarget.mesh,Number(this.yetiTarget.mesh.userData.locomotionY)||0),this.orcTarget&&!t.has(this.orcTarget.mesh)&&this.sitOnGround(this.orcTarget.mesh,Number(this.orcTarget.mesh.userData.locomotionY)||0),this.dummyTarget&&!t.has(this.dummyTarget.mesh)&&this.sitOnGround(this.dummyTarget.mesh),this.moveMarker.visible&&this.sitOnGround(this.moveMarker,.06)}nudgeZoom(t,e=.12){const n=this.camZoomTarget*Math.exp(t*e);this.camZoomTarget=Math.min(iv,Math.max(nv,n))}updateCamera(t){const e=Math.min(1,this.combatCamPull),n=1-Math.exp(-10*t);this.camZoom+=(this.camZoomTarget-this.camZoom)*n;const s=this.camZoom,o=this.camOffset.x,r=this.camOffset.y*s+e*1.55,a=this.camOffset.z*s+e*.85,c=this.camSmooth;c.set(this.player.position.x+o,r,this.player.position.z+a);const l=1-Math.exp(-4.2*t);this.camera.position.lerp(c,l);let h=this.player.position.x,u=this.player.position.z;if(this.activity.type==="combat"){const d=this.activity.target.mesh.position;h=this.player.position.x*.55+d.x*.45,u=this.player.position.z*.55+d.z*.45}this.lookSmooth.set(h,this.player.position.y+1.05+e*.55,u),this.camLook.lerp(this.lookSmooth,l),this.camera.lookAt(this.camLook)}updateCombatTreeFade(t){const e=this.activity.type==="combat"||this.yetiAggroed||this.orcAggroed,n=this.camera.position;let s=this.player.position.x,o=this.player.position.z;this.activity.type==="combat"?(s=s*.5+this.activity.target.mesh.position.x*.5,o=o*.5+this.activity.target.mesh.position.z*.5):this.yetiAggroed&&this.yetiTarget?(s=this.yetiTarget.mesh.position.x,o=this.yetiTarget.mesh.position.z):this.orcAggroed&&this.orcTarget&&(s=this.orcTarget.mesh.position.x,o=this.orcTarget.mesh.position.z);const r=s-n.x,a=o-n.z,c=Math.hypot(r,a)||1;for(const l of this.objects){if(l.kind!=="tree")continue;const h=l.mesh.position.x-n.x,u=l.mesh.position.z-n.z,d=Math.max(0,Math.min(1,(h*r+u*a)/(c*c))),f=n.x+r*d,m=n.z+a*d,_=Math.hypot(l.mesh.position.x-f,l.mesh.position.z-m),g=e&&d>.12&&d<.92&&_<2.15?.22:1;l.mesh.traverse(p=>{const S=p;if(!S.isMesh||S.name==="hit"||S.name==="outline")return;const M=S.material;if(!M||!("opacity"in M))return;if(!S.userData.fadeReady){const C=M.clone();C.transparent=!0,S.material=C,S.userData.fadeReady=!0,S.userData.fadeOpacity=1}const v=S.userData.fadeOpacity??1,D=v+(g-v)*Math.min(1,t*5.5);S.userData.fadeOpacity=D;const T=S.material;T.opacity=D,T.transparent=D<.98,T.depthWrite=D>.75})}}drawMinimapMarkers(){const t=[];for(const e of this.objects)e.depleted&&e.kind!=="dummy"&&e.kind!=="yeti"&&e.kind!=="orc"||(e.kind==="tree"?t.push({x:e.mesh.position.x,z:e.mesh.position.z,color:"#2d8a2d"}):e.kind==="rock"?t.push({x:e.mesh.position.x,z:e.mesh.position.z,color:"#888"}):e.kind==="yeti"?t.push({x:e.mesh.position.x,z:e.mesh.position.z,color:"#7ec8ff"}):e.kind==="orc"?t.push({x:e.mesh.position.x,z:e.mesh.position.z,color:"#6a9a2a"}):t.push({x:e.mesh.position.x,z:e.mesh.position.z,color:"#c43c3c"}));t.push({x:-1.2,z:-.5,color:"#ff8844"}),t.push({x:2.2,z:.35,color:"#8ec8ff"}),this.hud.drawMinimap(this.player.position.x,this.player.position.z,this.player.rotation.y,t)}refreshUI(){this.hud.setInventory(this.save.inventory),this.hud.setEquipment(this.save),this.hud.setSkills(this.save),this.hud.setOrbs(this.save.hp,this.save.maxHp,this.save.focus,this.save.stamina)}persist(){tv(this.save)}onResize(){this.camera.aspect=window.innerWidth/window.innerHeight,this.camera.updateProjectionMatrix(),this.renderer.setSize(window.innerWidth,window.innerHeight),this.studio.resize(window.innerWidth,window.innerHeight)}animate=()=>{if(!this.running)return;requestAnimationFrame(this.animate);const t=Math.min(.05,this.clock.getDelta());if(this.studio.isOpen()){this.studio.tick(t),this.studio.render(this.renderer);return}this.update(t),this.renderer.render(this.scene,this.camera)}}const $u=document.getElementById("game-canvas");if(!($u instanceof HTMLCanvasElement))throw new Error("Missing #game-canvas");new dv($u);
