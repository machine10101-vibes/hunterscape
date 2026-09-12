(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const r of o.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&n(r)}).observe(document,{childList:!0,subtree:!0});function e(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerPolicy&&(o.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?o.credentials="include":s.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(s){if(s.ep)return;s.ep=!0;const o=e(s);fetch(s.href,o)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Wa="170",_u=0,bc=1,vu=2,rh=1,ah=2,Un=3,ii=0,Oe=1,be=2,ei=0,Ki=1,Ac=2,Rc=3,Cc=4,xu=5,mi=100,Mu=101,yu=102,wu=103,Su=104,Eu=200,Tu=201,bu=202,Au=203,Yr=204,qr=205,Ru=206,Cu=207,Pu=208,Lu=209,Iu=210,Du=211,Uu=212,Nu=213,Fu=214,$r=0,Zr=1,Kr=2,ts=3,Jr=4,jr=5,Qr=6,ta=7,Xa=0,Ou=1,zu=2,ni=0,Bu=1,ku=2,Hu=3,Wo=4,Gu=5,Vu=6,Wu=7,ch=300,es=301,ns=302,ea=303,na=304,Xo=306,is=1e3,xi=1001,ia=1002,tn=1003,Xu=1004,Ys=1005,Sn=1006,Qo=1007,Mi=1008,zn=1009,lh=1010,hh=1011,Ds=1012,Ya=1013,Ei=1014,En=1015,Bs=1016,qa=1017,$a=1018,ss=1020,uh=35902,dh=1021,fh=1022,pn=1023,ph=1024,mh=1025,Ji=1026,os=1027,Za=1028,Ka=1029,gh=1030,Ja=1031,ja=1033,Eo=33776,To=33777,bo=33778,Ao=33779,sa=35840,oa=35841,ra=35842,aa=35843,ca=36196,la=37492,ha=37496,ua=37808,da=37809,fa=37810,pa=37811,ma=37812,ga=37813,_a=37814,va=37815,xa=37816,Ma=37817,ya=37818,wa=37819,Sa=37820,Ea=37821,Ro=36492,Ta=36494,ba=36495,_h=36283,Aa=36284,Ra=36285,Ca=36286,Yu=3200,qu=3201,Qa=0,$u=1,wn="",Ne="srgb",cs="srgb-linear",Yo="linear",he="srgb",Li=7680,Pc=519,Zu=512,Ku=513,Ju=514,vh=515,ju=516,Qu=517,td=518,ed=519,Lc=35044,nd=35048,Ic="300 es",Nn=2e3,Lo=2001;class ls{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const s=this._listeners[t];if(s!==void 0){const o=s.indexOf(e);o!==-1&&s.splice(o,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const s=n.slice(0);for(let o=0,r=s.length;o<r;o++)s[o].call(this,t);t.target=null}}}const Be=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],tr=Math.PI/180,Pa=180/Math.PI;function hs(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Be[i&255]+Be[i>>8&255]+Be[i>>16&255]+Be[i>>24&255]+"-"+Be[t&255]+Be[t>>8&255]+"-"+Be[t>>16&15|64]+Be[t>>24&255]+"-"+Be[e&63|128]+Be[e>>8&255]+"-"+Be[e>>16&255]+Be[e>>24&255]+Be[n&255]+Be[n>>8&255]+Be[n>>16&255]+Be[n>>24&255]).toLowerCase()}function Ae(i,t,e){return Math.max(t,Math.min(e,i))}function id(i,t){return(i%t+t)%t}function er(i,t,e){return(1-e)*i+e*t}function ms(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function $e(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}class _t{constructor(t=0,e=0){_t.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Ae(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),s=Math.sin(e),o=this.x-t.x,r=this.y-t.y;return this.x=o*n-r*s+t.x,this.y=o*s+r*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Kt{constructor(t,e,n,s,o,r,a,c,l){Kt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,o,r,a,c,l)}set(t,e,n,s,o,r,a,c,l){const h=this.elements;return h[0]=t,h[1]=s,h[2]=a,h[3]=e,h[4]=o,h[5]=c,h[6]=n,h[7]=r,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,o=this.elements,r=n[0],a=n[3],c=n[6],l=n[1],h=n[4],u=n[7],f=n[2],p=n[5],g=n[8],_=s[0],m=s[3],d=s[6],S=s[1],w=s[4],v=s[7],U=s[2],T=s[5],A=s[8];return o[0]=r*_+a*S+c*U,o[3]=r*m+a*w+c*T,o[6]=r*d+a*v+c*A,o[1]=l*_+h*S+u*U,o[4]=l*m+h*w+u*T,o[7]=l*d+h*v+u*A,o[2]=f*_+p*S+g*U,o[5]=f*m+p*w+g*T,o[8]=f*d+p*v+g*A,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],s=t[2],o=t[3],r=t[4],a=t[5],c=t[6],l=t[7],h=t[8];return e*r*h-e*a*l-n*o*h+n*a*c+s*o*l-s*r*c}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],o=t[3],r=t[4],a=t[5],c=t[6],l=t[7],h=t[8],u=h*r-a*l,f=a*c-h*o,p=l*o-r*c,g=e*u+n*f+s*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return t[0]=u*_,t[1]=(s*l-h*n)*_,t[2]=(a*n-s*r)*_,t[3]=f*_,t[4]=(h*e-s*c)*_,t[5]=(s*o-a*e)*_,t[6]=p*_,t[7]=(n*c-l*e)*_,t[8]=(r*e-n*o)*_,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,o,r,a){const c=Math.cos(o),l=Math.sin(o);return this.set(n*c,n*l,-n*(c*r+l*a)+r+t,-s*l,s*c,-s*(-l*r+c*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(nr.makeScale(t,e)),this}rotate(t){return this.premultiply(nr.makeRotation(-t)),this}translate(t,e){return this.premultiply(nr.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const nr=new Kt;function xh(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function Io(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function sd(){const i=Io("canvas");return i.style.display="block",i}const Dc={};function As(i){i in Dc||(Dc[i]=!0,console.warn(i))}function od(i,t,e){return new Promise(function(n,s){function o(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(o,e);break;default:n()}}setTimeout(o,e)})}function rd(i){const t=i.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function ad(i){const t=i.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const ne={enabled:!0,workingColorSpace:cs,spaces:{},convert:function(i,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===he&&(i.r=Fn(i.r),i.g=Fn(i.g),i.b=Fn(i.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(i.applyMatrix3(this.spaces[t].toXYZ),i.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===he&&(i.r=ji(i.r),i.g=ji(i.g),i.b=ji(i.b))),i},fromWorkingColorSpace:function(i,t){return this.convert(i,this.workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===wn?Yo:this.spaces[i].transfer},getLuminanceCoefficients:function(i,t=this.workingColorSpace){return i.fromArray(this.spaces[t].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,t,e){return i.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}};function Fn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function ji(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}const Uc=[.64,.33,.3,.6,.15,.06],Nc=[.2126,.7152,.0722],Fc=[.3127,.329],Oc=new Kt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),zc=new Kt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);ne.define({[cs]:{primaries:Uc,whitePoint:Fc,transfer:Yo,toXYZ:Oc,fromXYZ:zc,luminanceCoefficients:Nc,workingColorSpaceConfig:{unpackColorSpace:Ne},outputColorSpaceConfig:{drawingBufferColorSpace:Ne}},[Ne]:{primaries:Uc,whitePoint:Fc,transfer:he,toXYZ:Oc,fromXYZ:zc,luminanceCoefficients:Nc,outputColorSpaceConfig:{drawingBufferColorSpace:Ne}}});let Ii;class cd{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Ii===void 0&&(Ii=Io("canvas")),Ii.width=t.width,Ii.height=t.height;const n=Ii.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=Ii}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Io("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const s=n.getImageData(0,0,t.width,t.height),o=s.data;for(let r=0;r<o.length;r++)o[r]=Fn(o[r]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Fn(e[n]/255)*255):e[n]=Fn(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let ld=0;class Mh{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:ld++}),this.uuid=hs(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let o;if(Array.isArray(s)){o=[];for(let r=0,a=s.length;r<a;r++)s[r].isDataTexture?o.push(ir(s[r].image)):o.push(ir(s[r]))}else o=ir(s);n.url=o}return e||(t.images[this.uuid]=n),n}}function ir(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?cd.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let hd=0;class Ve extends ls{constructor(t=Ve.DEFAULT_IMAGE,e=Ve.DEFAULT_MAPPING,n=xi,s=xi,o=Sn,r=Mi,a=pn,c=zn,l=Ve.DEFAULT_ANISOTROPY,h=wn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:hd++}),this.uuid=hs(),this.name="",this.source=new Mh(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=o,this.minFilter=r,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new _t(0,0),this.repeat=new _t(1,1),this.center=new _t(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Kt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==ch)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case is:t.x=t.x-Math.floor(t.x);break;case xi:t.x=t.x<0?0:1;break;case ia:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case is:t.y=t.y-Math.floor(t.y);break;case xi:t.y=t.y<0?0:1;break;case ia:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Ve.DEFAULT_IMAGE=null;Ve.DEFAULT_MAPPING=ch;Ve.DEFAULT_ANISOTROPY=1;class ue{constructor(t=0,e=0,n=0,s=1){ue.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,o=this.w,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s+r[12]*o,this.y=r[1]*e+r[5]*n+r[9]*s+r[13]*o,this.z=r[2]*e+r[6]*n+r[10]*s+r[14]*o,this.w=r[3]*e+r[7]*n+r[11]*s+r[15]*o,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,o;const c=t.elements,l=c[0],h=c[4],u=c[8],f=c[1],p=c[5],g=c[9],_=c[2],m=c[6],d=c[10];if(Math.abs(h-f)<.01&&Math.abs(u-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+_)<.1&&Math.abs(g+m)<.1&&Math.abs(l+p+d-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const w=(l+1)/2,v=(p+1)/2,U=(d+1)/2,T=(h+f)/4,A=(u+_)/4,I=(g+m)/4;return w>v&&w>U?w<.01?(n=0,s=.707106781,o=.707106781):(n=Math.sqrt(w),s=T/n,o=A/n):v>U?v<.01?(n=.707106781,s=0,o=.707106781):(s=Math.sqrt(v),n=T/s,o=I/s):U<.01?(n=.707106781,s=.707106781,o=0):(o=Math.sqrt(U),n=A/o,s=I/o),this.set(n,s,o,e),this}let S=Math.sqrt((m-g)*(m-g)+(u-_)*(u-_)+(f-h)*(f-h));return Math.abs(S)<.001&&(S=1),this.x=(m-g)/S,this.y=(u-_)/S,this.z=(f-h)/S,this.w=Math.acos((l+p+d-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class ud extends ls{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new ue(0,0,t,e),this.scissorTest=!1,this.viewport=new ue(0,0,t,e);const s={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Sn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const o=new Ve(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);o.flipY=!1,o.generateMipmaps=n.generateMipmaps,o.internalFormat=n.internalFormat,this.textures=[];const r=n.count;for(let a=0;a<r;a++)this.textures[a]=o.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,o=this.textures.length;s<o;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,s=t.textures.length;n<s;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new Mh(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ti extends ud{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class yh extends Ve{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=tn,this.minFilter=tn,this.wrapR=xi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class dd extends Ve{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=tn,this.minFilter=tn,this.wrapR=xi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ks{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,o,r,a){let c=n[s+0],l=n[s+1],h=n[s+2],u=n[s+3];const f=o[r+0],p=o[r+1],g=o[r+2],_=o[r+3];if(a===0){t[e+0]=c,t[e+1]=l,t[e+2]=h,t[e+3]=u;return}if(a===1){t[e+0]=f,t[e+1]=p,t[e+2]=g,t[e+3]=_;return}if(u!==_||c!==f||l!==p||h!==g){let m=1-a;const d=c*f+l*p+h*g+u*_,S=d>=0?1:-1,w=1-d*d;if(w>Number.EPSILON){const U=Math.sqrt(w),T=Math.atan2(U,d*S);m=Math.sin(m*T)/U,a=Math.sin(a*T)/U}const v=a*S;if(c=c*m+f*v,l=l*m+p*v,h=h*m+g*v,u=u*m+_*v,m===1-a){const U=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=U,l*=U,h*=U,u*=U}}t[e]=c,t[e+1]=l,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,s,o,r){const a=n[s],c=n[s+1],l=n[s+2],h=n[s+3],u=o[r],f=o[r+1],p=o[r+2],g=o[r+3];return t[e]=a*g+h*u+c*p-l*f,t[e+1]=c*g+h*f+l*u-a*p,t[e+2]=l*g+h*p+a*f-c*u,t[e+3]=h*g-a*u-c*f-l*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,s=t._y,o=t._z,r=t._order,a=Math.cos,c=Math.sin,l=a(n/2),h=a(s/2),u=a(o/2),f=c(n/2),p=c(s/2),g=c(o/2);switch(r){case"XYZ":this._x=f*h*u+l*p*g,this._y=l*p*u-f*h*g,this._z=l*h*g+f*p*u,this._w=l*h*u-f*p*g;break;case"YXZ":this._x=f*h*u+l*p*g,this._y=l*p*u-f*h*g,this._z=l*h*g-f*p*u,this._w=l*h*u+f*p*g;break;case"ZXY":this._x=f*h*u-l*p*g,this._y=l*p*u+f*h*g,this._z=l*h*g+f*p*u,this._w=l*h*u-f*p*g;break;case"ZYX":this._x=f*h*u-l*p*g,this._y=l*p*u+f*h*g,this._z=l*h*g-f*p*u,this._w=l*h*u+f*p*g;break;case"YZX":this._x=f*h*u+l*p*g,this._y=l*p*u+f*h*g,this._z=l*h*g-f*p*u,this._w=l*h*u-f*p*g;break;case"XZY":this._x=f*h*u-l*p*g,this._y=l*p*u-f*h*g,this._z=l*h*g+f*p*u,this._w=l*h*u+f*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+r)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],s=e[4],o=e[8],r=e[1],a=e[5],c=e[9],l=e[2],h=e[6],u=e[10],f=n+a+u;if(f>0){const p=.5/Math.sqrt(f+1);this._w=.25/p,this._x=(h-c)*p,this._y=(o-l)*p,this._z=(r-s)*p}else if(n>a&&n>u){const p=2*Math.sqrt(1+n-a-u);this._w=(h-c)/p,this._x=.25*p,this._y=(s+r)/p,this._z=(o+l)/p}else if(a>u){const p=2*Math.sqrt(1+a-n-u);this._w=(o-l)/p,this._x=(s+r)/p,this._y=.25*p,this._z=(c+h)/p}else{const p=2*Math.sqrt(1+u-n-a);this._w=(r-s)/p,this._x=(o+l)/p,this._y=(c+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Ae(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,s=t._y,o=t._z,r=t._w,a=e._x,c=e._y,l=e._z,h=e._w;return this._x=n*h+r*a+s*l-o*c,this._y=s*h+r*c+o*a-n*l,this._z=o*h+r*l+n*c-s*a,this._w=r*h-n*a-s*c-o*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,s=this._y,o=this._z,r=this._w;let a=r*t._w+n*t._x+s*t._y+o*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=r,this._x=n,this._y=s,this._z=o,this;const c=1-a*a;if(c<=Number.EPSILON){const p=1-e;return this._w=p*r+e*this._w,this._x=p*n+e*this._x,this._y=p*s+e*this._y,this._z=p*o+e*this._z,this.normalize(),this}const l=Math.sqrt(c),h=Math.atan2(l,a),u=Math.sin((1-e)*h)/l,f=Math.sin(e*h)/l;return this._w=r*u+this._w*f,this._x=n*u+this._x*f,this._y=s*u+this._y*f,this._z=o*u+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),o=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),o*Math.sin(e),o*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class D{constructor(t=0,e=0,n=0){D.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Bc.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Bc.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,s=this.z,o=t.elements;return this.x=o[0]*e+o[3]*n+o[6]*s,this.y=o[1]*e+o[4]*n+o[7]*s,this.z=o[2]*e+o[5]*n+o[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,o=t.elements,r=1/(o[3]*e+o[7]*n+o[11]*s+o[15]);return this.x=(o[0]*e+o[4]*n+o[8]*s+o[12])*r,this.y=(o[1]*e+o[5]*n+o[9]*s+o[13])*r,this.z=(o[2]*e+o[6]*n+o[10]*s+o[14])*r,this}applyQuaternion(t){const e=this.x,n=this.y,s=this.z,o=t.x,r=t.y,a=t.z,c=t.w,l=2*(r*s-a*n),h=2*(a*e-o*s),u=2*(o*n-r*e);return this.x=e+c*l+r*u-a*h,this.y=n+c*h+a*l-o*u,this.z=s+c*u+o*h-r*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,s=this.z,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*s,this.y=o[1]*e+o[5]*n+o[9]*s,this.z=o[2]*e+o[6]*n+o[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,s=t.y,o=t.z,r=e.x,a=e.y,c=e.z;return this.x=s*c-o*a,this.y=o*r-n*c,this.z=n*a-s*r,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return sr.copy(this).projectOnVector(t),this.sub(sr)}reflect(t){return this.sub(sr.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Ae(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const sr=new D,Bc=new ks;class kn{constructor(t=new D(1/0,1/0,1/0),e=new D(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(ln.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(ln.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=ln.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const o=n.getAttribute("position");if(e===!0&&o!==void 0&&t.isInstancedMesh!==!0)for(let r=0,a=o.count;r<a;r++)t.isMesh===!0?t.getVertexPosition(r,ln):ln.fromBufferAttribute(o,r),ln.applyMatrix4(t.matrixWorld),this.expandByPoint(ln);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),qs.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),qs.copy(n.boundingBox)),qs.applyMatrix4(t.matrixWorld),this.union(qs)}const s=t.children;for(let o=0,r=s.length;o<r;o++)this.expandByObject(s[o],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,ln),ln.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(gs),$s.subVectors(this.max,gs),Di.subVectors(t.a,gs),Ui.subVectors(t.b,gs),Ni.subVectors(t.c,gs),Vn.subVectors(Ui,Di),Wn.subVectors(Ni,Ui),ai.subVectors(Di,Ni);let e=[0,-Vn.z,Vn.y,0,-Wn.z,Wn.y,0,-ai.z,ai.y,Vn.z,0,-Vn.x,Wn.z,0,-Wn.x,ai.z,0,-ai.x,-Vn.y,Vn.x,0,-Wn.y,Wn.x,0,-ai.y,ai.x,0];return!or(e,Di,Ui,Ni,$s)||(e=[1,0,0,0,1,0,0,0,1],!or(e,Di,Ui,Ni,$s))?!1:(Zs.crossVectors(Vn,Wn),e=[Zs.x,Zs.y,Zs.z],or(e,Di,Ui,Ni,$s))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,ln).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(ln).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Cn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Cn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Cn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Cn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Cn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Cn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Cn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Cn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Cn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const Cn=[new D,new D,new D,new D,new D,new D,new D,new D],ln=new D,qs=new kn,Di=new D,Ui=new D,Ni=new D,Vn=new D,Wn=new D,ai=new D,gs=new D,$s=new D,Zs=new D,ci=new D;function or(i,t,e,n,s){for(let o=0,r=i.length-3;o<=r;o+=3){ci.fromArray(i,o);const a=s.x*Math.abs(ci.x)+s.y*Math.abs(ci.y)+s.z*Math.abs(ci.z),c=t.dot(ci),l=e.dot(ci),h=n.dot(ci);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>a)return!1}return!0}const fd=new kn,_s=new D,rr=new D;class us{constructor(t=new D,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):fd.setFromPoints(t).getCenter(n);let s=0;for(let o=0,r=t.length;o<r;o++)s=Math.max(s,n.distanceToSquared(t[o]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;_s.subVectors(t,this.center);const e=_s.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(_s,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(rr.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(_s.copy(t.center).add(rr)),this.expandByPoint(_s.copy(t.center).sub(rr))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Pn=new D,ar=new D,Ks=new D,Xn=new D,cr=new D,Js=new D,lr=new D;class tc{constructor(t=new D,e=new D(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Pn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Pn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Pn.copy(this.origin).addScaledVector(this.direction,e),Pn.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){ar.copy(t).add(e).multiplyScalar(.5),Ks.copy(e).sub(t).normalize(),Xn.copy(this.origin).sub(ar);const o=t.distanceTo(e)*.5,r=-this.direction.dot(Ks),a=Xn.dot(this.direction),c=-Xn.dot(Ks),l=Xn.lengthSq(),h=Math.abs(1-r*r);let u,f,p,g;if(h>0)if(u=r*c-a,f=r*a-c,g=o*h,u>=0)if(f>=-g)if(f<=g){const _=1/h;u*=_,f*=_,p=u*(u+r*f+2*a)+f*(r*u+f+2*c)+l}else f=o,u=Math.max(0,-(r*f+a)),p=-u*u+f*(f+2*c)+l;else f=-o,u=Math.max(0,-(r*f+a)),p=-u*u+f*(f+2*c)+l;else f<=-g?(u=Math.max(0,-(-r*o+a)),f=u>0?-o:Math.min(Math.max(-o,-c),o),p=-u*u+f*(f+2*c)+l):f<=g?(u=0,f=Math.min(Math.max(-o,-c),o),p=f*(f+2*c)+l):(u=Math.max(0,-(r*o+a)),f=u>0?o:Math.min(Math.max(-o,-c),o),p=-u*u+f*(f+2*c)+l);else f=r>0?-o:o,u=Math.max(0,-(r*f+a)),p=-u*u+f*(f+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(ar).addScaledVector(Ks,f),p}intersectSphere(t,e){Pn.subVectors(t.center,this.origin);const n=Pn.dot(this.direction),s=Pn.dot(Pn)-n*n,o=t.radius*t.radius;if(s>o)return null;const r=Math.sqrt(o-s),a=n-r,c=n+r;return c<0?null:a<0?this.at(c,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,o,r,a,c;const l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return l>=0?(n=(t.min.x-f.x)*l,s=(t.max.x-f.x)*l):(n=(t.max.x-f.x)*l,s=(t.min.x-f.x)*l),h>=0?(o=(t.min.y-f.y)*h,r=(t.max.y-f.y)*h):(o=(t.max.y-f.y)*h,r=(t.min.y-f.y)*h),n>r||o>s||((o>n||isNaN(n))&&(n=o),(r<s||isNaN(s))&&(s=r),u>=0?(a=(t.min.z-f.z)*u,c=(t.max.z-f.z)*u):(a=(t.max.z-f.z)*u,c=(t.min.z-f.z)*u),n>c||a>s)||((a>n||n!==n)&&(n=a),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,Pn)!==null}intersectTriangle(t,e,n,s,o){cr.subVectors(e,t),Js.subVectors(n,t),lr.crossVectors(cr,Js);let r=this.direction.dot(lr),a;if(r>0){if(s)return null;a=1}else if(r<0)a=-1,r=-r;else return null;Xn.subVectors(this.origin,t);const c=a*this.direction.dot(Js.crossVectors(Xn,Js));if(c<0)return null;const l=a*this.direction.dot(cr.cross(Xn));if(l<0||c+l>r)return null;const h=-a*Xn.dot(lr);return h<0?null:this.at(h/r,o)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class le{constructor(t,e,n,s,o,r,a,c,l,h,u,f,p,g,_,m){le.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,o,r,a,c,l,h,u,f,p,g,_,m)}set(t,e,n,s,o,r,a,c,l,h,u,f,p,g,_,m){const d=this.elements;return d[0]=t,d[4]=e,d[8]=n,d[12]=s,d[1]=o,d[5]=r,d[9]=a,d[13]=c,d[2]=l,d[6]=h,d[10]=u,d[14]=f,d[3]=p,d[7]=g,d[11]=_,d[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new le().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,s=1/Fi.setFromMatrixColumn(t,0).length(),o=1/Fi.setFromMatrixColumn(t,1).length(),r=1/Fi.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*o,e[5]=n[5]*o,e[6]=n[6]*o,e[7]=0,e[8]=n[8]*r,e[9]=n[9]*r,e[10]=n[10]*r,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,s=t.y,o=t.z,r=Math.cos(n),a=Math.sin(n),c=Math.cos(s),l=Math.sin(s),h=Math.cos(o),u=Math.sin(o);if(t.order==="XYZ"){const f=r*h,p=r*u,g=a*h,_=a*u;e[0]=c*h,e[4]=-c*u,e[8]=l,e[1]=p+g*l,e[5]=f-_*l,e[9]=-a*c,e[2]=_-f*l,e[6]=g+p*l,e[10]=r*c}else if(t.order==="YXZ"){const f=c*h,p=c*u,g=l*h,_=l*u;e[0]=f+_*a,e[4]=g*a-p,e[8]=r*l,e[1]=r*u,e[5]=r*h,e[9]=-a,e[2]=p*a-g,e[6]=_+f*a,e[10]=r*c}else if(t.order==="ZXY"){const f=c*h,p=c*u,g=l*h,_=l*u;e[0]=f-_*a,e[4]=-r*u,e[8]=g+p*a,e[1]=p+g*a,e[5]=r*h,e[9]=_-f*a,e[2]=-r*l,e[6]=a,e[10]=r*c}else if(t.order==="ZYX"){const f=r*h,p=r*u,g=a*h,_=a*u;e[0]=c*h,e[4]=g*l-p,e[8]=f*l+_,e[1]=c*u,e[5]=_*l+f,e[9]=p*l-g,e[2]=-l,e[6]=a*c,e[10]=r*c}else if(t.order==="YZX"){const f=r*c,p=r*l,g=a*c,_=a*l;e[0]=c*h,e[4]=_-f*u,e[8]=g*u+p,e[1]=u,e[5]=r*h,e[9]=-a*h,e[2]=-l*h,e[6]=p*u+g,e[10]=f-_*u}else if(t.order==="XZY"){const f=r*c,p=r*l,g=a*c,_=a*l;e[0]=c*h,e[4]=-u,e[8]=l*h,e[1]=f*u+_,e[5]=r*h,e[9]=p*u-g,e[2]=g*u-p,e[6]=a*h,e[10]=_*u+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(pd,t,md)}lookAt(t,e,n){const s=this.elements;return Je.subVectors(t,e),Je.lengthSq()===0&&(Je.z=1),Je.normalize(),Yn.crossVectors(n,Je),Yn.lengthSq()===0&&(Math.abs(n.z)===1?Je.x+=1e-4:Je.z+=1e-4,Je.normalize(),Yn.crossVectors(n,Je)),Yn.normalize(),js.crossVectors(Je,Yn),s[0]=Yn.x,s[4]=js.x,s[8]=Je.x,s[1]=Yn.y,s[5]=js.y,s[9]=Je.y,s[2]=Yn.z,s[6]=js.z,s[10]=Je.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,o=this.elements,r=n[0],a=n[4],c=n[8],l=n[12],h=n[1],u=n[5],f=n[9],p=n[13],g=n[2],_=n[6],m=n[10],d=n[14],S=n[3],w=n[7],v=n[11],U=n[15],T=s[0],A=s[4],I=s[8],M=s[12],x=s[1],C=s[5],k=s[9],G=s[13],V=s[2],J=s[6],q=s[10],at=s[14],K=s[3],pt=s[7],wt=s[11],dt=s[15];return o[0]=r*T+a*x+c*V+l*K,o[4]=r*A+a*C+c*J+l*pt,o[8]=r*I+a*k+c*q+l*wt,o[12]=r*M+a*G+c*at+l*dt,o[1]=h*T+u*x+f*V+p*K,o[5]=h*A+u*C+f*J+p*pt,o[9]=h*I+u*k+f*q+p*wt,o[13]=h*M+u*G+f*at+p*dt,o[2]=g*T+_*x+m*V+d*K,o[6]=g*A+_*C+m*J+d*pt,o[10]=g*I+_*k+m*q+d*wt,o[14]=g*M+_*G+m*at+d*dt,o[3]=S*T+w*x+v*V+U*K,o[7]=S*A+w*C+v*J+U*pt,o[11]=S*I+w*k+v*q+U*wt,o[15]=S*M+w*G+v*at+U*dt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],s=t[8],o=t[12],r=t[1],a=t[5],c=t[9],l=t[13],h=t[2],u=t[6],f=t[10],p=t[14],g=t[3],_=t[7],m=t[11],d=t[15];return g*(+o*c*u-s*l*u-o*a*f+n*l*f+s*a*p-n*c*p)+_*(+e*c*p-e*l*f+o*r*f-s*r*p+s*l*h-o*c*h)+m*(+e*l*u-e*a*p-o*r*u+n*r*p+o*a*h-n*l*h)+d*(-s*a*h-e*c*u+e*a*f+s*r*u-n*r*f+n*c*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],o=t[3],r=t[4],a=t[5],c=t[6],l=t[7],h=t[8],u=t[9],f=t[10],p=t[11],g=t[12],_=t[13],m=t[14],d=t[15],S=u*m*l-_*f*l+_*c*p-a*m*p-u*c*d+a*f*d,w=g*f*l-h*m*l-g*c*p+r*m*p+h*c*d-r*f*d,v=h*_*l-g*u*l+g*a*p-r*_*p-h*a*d+r*u*d,U=g*u*c-h*_*c-g*a*f+r*_*f+h*a*m-r*u*m,T=e*S+n*w+s*v+o*U;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/T;return t[0]=S*A,t[1]=(_*f*o-u*m*o-_*s*p+n*m*p+u*s*d-n*f*d)*A,t[2]=(a*m*o-_*c*o+_*s*l-n*m*l-a*s*d+n*c*d)*A,t[3]=(u*c*o-a*f*o-u*s*l+n*f*l+a*s*p-n*c*p)*A,t[4]=w*A,t[5]=(h*m*o-g*f*o+g*s*p-e*m*p-h*s*d+e*f*d)*A,t[6]=(g*c*o-r*m*o-g*s*l+e*m*l+r*s*d-e*c*d)*A,t[7]=(r*f*o-h*c*o+h*s*l-e*f*l-r*s*p+e*c*p)*A,t[8]=v*A,t[9]=(g*u*o-h*_*o-g*n*p+e*_*p+h*n*d-e*u*d)*A,t[10]=(r*_*o-g*a*o+g*n*l-e*_*l-r*n*d+e*a*d)*A,t[11]=(h*a*o-r*u*o-h*n*l+e*u*l+r*n*p-e*a*p)*A,t[12]=U*A,t[13]=(h*_*s-g*u*s+g*n*f-e*_*f-h*n*m+e*u*m)*A,t[14]=(g*a*s-r*_*s-g*n*c+e*_*c+r*n*m-e*a*m)*A,t[15]=(r*u*s-h*a*s+h*n*c-e*u*c-r*n*f+e*a*f)*A,this}scale(t){const e=this.elements,n=t.x,s=t.y,o=t.z;return e[0]*=n,e[4]*=s,e[8]*=o,e[1]*=n,e[5]*=s,e[9]*=o,e[2]*=n,e[6]*=s,e[10]*=o,e[3]*=n,e[7]*=s,e[11]*=o,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),s=Math.sin(e),o=1-n,r=t.x,a=t.y,c=t.z,l=o*r,h=o*a;return this.set(l*r+n,l*a-s*c,l*c+s*a,0,l*a+s*c,h*a+n,h*c-s*r,0,l*c-s*a,h*c+s*r,o*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,o,r){return this.set(1,n,o,0,t,1,r,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){const s=this.elements,o=e._x,r=e._y,a=e._z,c=e._w,l=o+o,h=r+r,u=a+a,f=o*l,p=o*h,g=o*u,_=r*h,m=r*u,d=a*u,S=c*l,w=c*h,v=c*u,U=n.x,T=n.y,A=n.z;return s[0]=(1-(_+d))*U,s[1]=(p+v)*U,s[2]=(g-w)*U,s[3]=0,s[4]=(p-v)*T,s[5]=(1-(f+d))*T,s[6]=(m+S)*T,s[7]=0,s[8]=(g+w)*A,s[9]=(m-S)*A,s[10]=(1-(f+_))*A,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){const s=this.elements;let o=Fi.set(s[0],s[1],s[2]).length();const r=Fi.set(s[4],s[5],s[6]).length(),a=Fi.set(s[8],s[9],s[10]).length();this.determinant()<0&&(o=-o),t.x=s[12],t.y=s[13],t.z=s[14],hn.copy(this);const l=1/o,h=1/r,u=1/a;return hn.elements[0]*=l,hn.elements[1]*=l,hn.elements[2]*=l,hn.elements[4]*=h,hn.elements[5]*=h,hn.elements[6]*=h,hn.elements[8]*=u,hn.elements[9]*=u,hn.elements[10]*=u,e.setFromRotationMatrix(hn),n.x=o,n.y=r,n.z=a,this}makePerspective(t,e,n,s,o,r,a=Nn){const c=this.elements,l=2*o/(e-t),h=2*o/(n-s),u=(e+t)/(e-t),f=(n+s)/(n-s);let p,g;if(a===Nn)p=-(r+o)/(r-o),g=-2*r*o/(r-o);else if(a===Lo)p=-r/(r-o),g=-r*o/(r-o);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=l,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=h,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,s,o,r,a=Nn){const c=this.elements,l=1/(e-t),h=1/(n-s),u=1/(r-o),f=(e+t)*l,p=(n+s)*h;let g,_;if(a===Nn)g=(r+o)*u,_=-2*u;else if(a===Lo)g=o*u,_=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-f,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-p,c[2]=0,c[6]=0,c[10]=_,c[14]=-g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const Fi=new D,hn=new le,pd=new D(0,0,0),md=new D(1,1,1),Yn=new D,js=new D,Je=new D,kc=new le,Hc=new ks;class gn{constructor(t=0,e=0,n=0,s=gn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const s=t.elements,o=s[0],r=s[4],a=s[8],c=s[1],l=s[5],h=s[9],u=s[2],f=s[6],p=s[10];switch(e){case"XYZ":this._y=Math.asin(Ae(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-r,o)):(this._x=Math.atan2(f,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Ae(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,o),this._z=0);break;case"ZXY":this._x=Math.asin(Ae(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,p),this._z=Math.atan2(-r,l)):(this._y=0,this._z=Math.atan2(c,o));break;case"ZYX":this._y=Math.asin(-Ae(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,p),this._z=Math.atan2(c,o)):(this._x=0,this._z=Math.atan2(-r,l));break;case"YZX":this._z=Math.asin(Ae(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,o)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-Ae(r,-1,1)),Math.abs(r)<.9999999?(this._x=Math.atan2(f,l),this._y=Math.atan2(a,o)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return kc.makeRotationFromQuaternion(t),this.setFromRotationMatrix(kc,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Hc.setFromEuler(this),this.setFromQuaternion(Hc,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}gn.DEFAULT_ORDER="XYZ";class ec{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let gd=0;const Gc=new D,Oi=new ks,Ln=new le,Qs=new D,vs=new D,_d=new D,vd=new ks,Vc=new D(1,0,0),Wc=new D(0,1,0),Xc=new D(0,0,1),Yc={type:"added"},xd={type:"removed"},zi={type:"childadded",child:null},hr={type:"childremoved",child:null};class Re extends ls{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:gd++}),this.uuid=hs(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Re.DEFAULT_UP.clone();const t=new D,e=new gn,n=new ks,s=new D(1,1,1);function o(){n.setFromEuler(e,!1)}function r(){e.setFromQuaternion(n,void 0,!1)}e._onChange(o),n._onChange(r),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new le},normalMatrix:{value:new Kt}}),this.matrix=new le,this.matrixWorld=new le,this.matrixAutoUpdate=Re.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Re.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ec,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Oi.setFromAxisAngle(t,e),this.quaternion.multiply(Oi),this}rotateOnWorldAxis(t,e){return Oi.setFromAxisAngle(t,e),this.quaternion.premultiply(Oi),this}rotateX(t){return this.rotateOnAxis(Vc,t)}rotateY(t){return this.rotateOnAxis(Wc,t)}rotateZ(t){return this.rotateOnAxis(Xc,t)}translateOnAxis(t,e){return Gc.copy(t).applyQuaternion(this.quaternion),this.position.add(Gc.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Vc,t)}translateY(t){return this.translateOnAxis(Wc,t)}translateZ(t){return this.translateOnAxis(Xc,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Ln.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Qs.copy(t):Qs.set(t,e,n);const s=this.parent;this.updateWorldMatrix(!0,!1),vs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ln.lookAt(vs,Qs,this.up):Ln.lookAt(Qs,vs,this.up),this.quaternion.setFromRotationMatrix(Ln),s&&(Ln.extractRotation(s.matrixWorld),Oi.setFromRotationMatrix(Ln),this.quaternion.premultiply(Oi.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Yc),zi.child=t,this.dispatchEvent(zi),zi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(xd),hr.child=t,this.dispatchEvent(hr),hr.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Ln.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Ln.multiply(t.parent.matrixWorld)),t.applyMatrix4(Ln),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Yc),zi.child=t,this.dispatchEvent(zi),zi.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){const r=this.children[n].getObjectByProperty(t,e);if(r!==void 0)return r}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const s=this.children;for(let o=0,r=s.length;o<r;o++)s[o].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(vs,t,_d),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(vs,vd,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const s=this.children;for(let o=0,r=s.length;o<r;o++)s[o].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function o(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=o(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){const u=c[l];o(t.shapes,u)}else o(t.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(o(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(o(t.materials,this.material[c]));s.material=a}else s.material=o(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];s.animations.push(o(t.animations,c))}}if(e){const a=r(t.geometries),c=r(t.materials),l=r(t.textures),h=r(t.images),u=r(t.shapes),f=r(t.skeletons),p=r(t.animations),g=r(t.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),f.length>0&&(n.skeletons=f),p.length>0&&(n.animations=p),g.length>0&&(n.nodes=g)}return n.object=s,n;function r(a){const c=[];for(const l in a){const h=a[l];delete h.metadata,c.push(h)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const s=t.children[n];this.add(s.clone())}return this}}Re.DEFAULT_UP=new D(0,1,0);Re.DEFAULT_MATRIX_AUTO_UPDATE=!0;Re.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const un=new D,In=new D,ur=new D,Dn=new D,Bi=new D,ki=new D,qc=new D,dr=new D,fr=new D,pr=new D,mr=new ue,gr=new ue,_r=new ue;class dn{constructor(t=new D,e=new D,n=new D){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),un.subVectors(t,e),s.cross(un);const o=s.lengthSq();return o>0?s.multiplyScalar(1/Math.sqrt(o)):s.set(0,0,0)}static getBarycoord(t,e,n,s,o){un.subVectors(s,e),In.subVectors(n,e),ur.subVectors(t,e);const r=un.dot(un),a=un.dot(In),c=un.dot(ur),l=In.dot(In),h=In.dot(ur),u=r*l-a*a;if(u===0)return o.set(0,0,0),null;const f=1/u,p=(l*c-a*h)*f,g=(r*h-a*c)*f;return o.set(1-p-g,g,p)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,Dn)===null?!1:Dn.x>=0&&Dn.y>=0&&Dn.x+Dn.y<=1}static getInterpolation(t,e,n,s,o,r,a,c){return this.getBarycoord(t,e,n,s,Dn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(o,Dn.x),c.addScaledVector(r,Dn.y),c.addScaledVector(a,Dn.z),c)}static getInterpolatedAttribute(t,e,n,s,o,r){return mr.setScalar(0),gr.setScalar(0),_r.setScalar(0),mr.fromBufferAttribute(t,e),gr.fromBufferAttribute(t,n),_r.fromBufferAttribute(t,s),r.setScalar(0),r.addScaledVector(mr,o.x),r.addScaledVector(gr,o.y),r.addScaledVector(_r,o.z),r}static isFrontFacing(t,e,n,s){return un.subVectors(n,e),In.subVectors(t,e),un.cross(In).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return un.subVectors(this.c,this.b),In.subVectors(this.a,this.b),un.cross(In).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return dn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return dn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,o){return dn.getInterpolation(t,this.a,this.b,this.c,e,n,s,o)}containsPoint(t){return dn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return dn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,s=this.b,o=this.c;let r,a;Bi.subVectors(s,n),ki.subVectors(o,n),dr.subVectors(t,n);const c=Bi.dot(dr),l=ki.dot(dr);if(c<=0&&l<=0)return e.copy(n);fr.subVectors(t,s);const h=Bi.dot(fr),u=ki.dot(fr);if(h>=0&&u<=h)return e.copy(s);const f=c*u-h*l;if(f<=0&&c>=0&&h<=0)return r=c/(c-h),e.copy(n).addScaledVector(Bi,r);pr.subVectors(t,o);const p=Bi.dot(pr),g=ki.dot(pr);if(g>=0&&p<=g)return e.copy(o);const _=p*l-c*g;if(_<=0&&l>=0&&g<=0)return a=l/(l-g),e.copy(n).addScaledVector(ki,a);const m=h*g-p*u;if(m<=0&&u-h>=0&&p-g>=0)return qc.subVectors(o,s),a=(u-h)/(u-h+(p-g)),e.copy(s).addScaledVector(qc,a);const d=1/(m+_+f);return r=_*d,a=f*d,e.copy(n).addScaledVector(Bi,r).addScaledVector(ki,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const wh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},qn={h:0,s:0,l:0},to={h:0,s:0,l:0};function vr(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class Rt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Ne){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ne.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=ne.workingColorSpace){return this.r=t,this.g=e,this.b=n,ne.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=ne.workingColorSpace){if(t=id(t,1),e=Ae(e,0,1),n=Ae(n,0,1),e===0)this.r=this.g=this.b=n;else{const o=n<=.5?n*(1+e):n+e-n*e,r=2*n-o;this.r=vr(r,o,t+1/3),this.g=vr(r,o,t),this.b=vr(r,o,t-1/3)}return ne.toWorkingColorSpace(this,s),this}setStyle(t,e=Ne){function n(o){o!==void 0&&parseFloat(o)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let o;const r=s[1],a=s[2];switch(r){case"rgb":case"rgba":if(o=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(o[4]),this.setRGB(Math.min(255,parseInt(o[1],10))/255,Math.min(255,parseInt(o[2],10))/255,Math.min(255,parseInt(o[3],10))/255,e);if(o=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(o[4]),this.setRGB(Math.min(100,parseInt(o[1],10))/100,Math.min(100,parseInt(o[2],10))/100,Math.min(100,parseInt(o[3],10))/100,e);break;case"hsl":case"hsla":if(o=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(o[4]),this.setHSL(parseFloat(o[1])/360,parseFloat(o[2])/100,parseFloat(o[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const o=s[1],r=o.length;if(r===3)return this.setRGB(parseInt(o.charAt(0),16)/15,parseInt(o.charAt(1),16)/15,parseInt(o.charAt(2),16)/15,e);if(r===6)return this.setHex(parseInt(o,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Ne){const n=wh[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Fn(t.r),this.g=Fn(t.g),this.b=Fn(t.b),this}copyLinearToSRGB(t){return this.r=ji(t.r),this.g=ji(t.g),this.b=ji(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Ne){return ne.fromWorkingColorSpace(ke.copy(this),t),Math.round(Ae(ke.r*255,0,255))*65536+Math.round(Ae(ke.g*255,0,255))*256+Math.round(Ae(ke.b*255,0,255))}getHexString(t=Ne){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ne.workingColorSpace){ne.fromWorkingColorSpace(ke.copy(this),e);const n=ke.r,s=ke.g,o=ke.b,r=Math.max(n,s,o),a=Math.min(n,s,o);let c,l;const h=(a+r)/2;if(a===r)c=0,l=0;else{const u=r-a;switch(l=h<=.5?u/(r+a):u/(2-r-a),r){case n:c=(s-o)/u+(s<o?6:0);break;case s:c=(o-n)/u+2;break;case o:c=(n-s)/u+4;break}c/=6}return t.h=c,t.s=l,t.l=h,t}getRGB(t,e=ne.workingColorSpace){return ne.fromWorkingColorSpace(ke.copy(this),e),t.r=ke.r,t.g=ke.g,t.b=ke.b,t}getStyle(t=Ne){ne.fromWorkingColorSpace(ke.copy(this),t);const e=ke.r,n=ke.g,s=ke.b;return t!==Ne?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(qn),this.setHSL(qn.h+t,qn.s+e,qn.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(qn),t.getHSL(to);const n=er(qn.h,to.h,e),s=er(qn.s,to.s,e),o=er(qn.l,to.l,e);return this.setHSL(n,s,o),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,s=this.b,o=t.elements;return this.r=o[0]*e+o[3]*n+o[6]*s,this.g=o[1]*e+o[4]*n+o[7]*s,this.b=o[2]*e+o[5]*n+o[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const ke=new Rt;Rt.NAMES=wh;let Md=0;class Ri extends ls{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Md++}),this.uuid=hs(),this.name="",this.blending=Ki,this.side=ii,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Yr,this.blendDst=qr,this.blendEquation=mi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Rt(0,0,0),this.blendAlpha=0,this.depthFunc=ts,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Pc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Li,this.stencilZFail=Li,this.stencilZPass=Li,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Ki&&(n.blending=this.blending),this.side!==ii&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Yr&&(n.blendSrc=this.blendSrc),this.blendDst!==qr&&(n.blendDst=this.blendDst),this.blendEquation!==mi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==ts&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Pc&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Li&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Li&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Li&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(o){const r=[];for(const a in o){const c=o[a];delete c.metadata,r.push(c)}return r}if(e){const o=s(t.textures),r=s(t.images);o.length>0&&(n.textures=o),r.length>0&&(n.images=r)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const s=e.length;n=new Array(s);for(let o=0;o!==s;++o)n[o]=e[o].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class pe extends Ri{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new Rt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new gn,this.combine=Xa,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Ee=new D,eo=new _t;class en{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Lc,this.updateRanges=[],this.gpuType=En,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,o=this.itemSize;s<o;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)eo.fromBufferAttribute(this,e),eo.applyMatrix3(t),this.setXY(e,eo.x,eo.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Ee.fromBufferAttribute(this,e),Ee.applyMatrix3(t),this.setXYZ(e,Ee.x,Ee.y,Ee.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Ee.fromBufferAttribute(this,e),Ee.applyMatrix4(t),this.setXYZ(e,Ee.x,Ee.y,Ee.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Ee.fromBufferAttribute(this,e),Ee.applyNormalMatrix(t),this.setXYZ(e,Ee.x,Ee.y,Ee.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Ee.fromBufferAttribute(this,e),Ee.transformDirection(t),this.setXYZ(e,Ee.x,Ee.y,Ee.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=ms(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=$e(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=ms(e,this.array)),e}setX(t,e){return this.normalized&&(e=$e(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=ms(e,this.array)),e}setY(t,e){return this.normalized&&(e=$e(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=ms(e,this.array)),e}setZ(t,e){return this.normalized&&(e=$e(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=ms(e,this.array)),e}setW(t,e){return this.normalized&&(e=$e(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=$e(e,this.array),n=$e(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=$e(e,this.array),n=$e(n,this.array),s=$e(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,o){return t*=this.itemSize,this.normalized&&(e=$e(e,this.array),n=$e(n,this.array),s=$e(s,this.array),o=$e(o,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=o,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Lc&&(t.usage=this.usage),t}}class Sh extends en{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class Eh extends en{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class te extends en{constructor(t,e,n){super(new Float32Array(t),e,n)}}let yd=0;const rn=new le,xr=new Re,Hi=new D,je=new kn,xs=new kn,Ie=new D;class Le extends ls{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:yd++}),this.uuid=hs(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(xh(t)?Eh:Sh)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const o=new Kt().getNormalMatrix(t);n.applyNormalMatrix(o),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return rn.makeRotationFromQuaternion(t),this.applyMatrix4(rn),this}rotateX(t){return rn.makeRotationX(t),this.applyMatrix4(rn),this}rotateY(t){return rn.makeRotationY(t),this.applyMatrix4(rn),this}rotateZ(t){return rn.makeRotationZ(t),this.applyMatrix4(rn),this}translate(t,e,n){return rn.makeTranslation(t,e,n),this.applyMatrix4(rn),this}scale(t,e,n){return rn.makeScale(t,e,n),this.applyMatrix4(rn),this}lookAt(t){return xr.lookAt(t),xr.updateMatrix(),this.applyMatrix4(xr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Hi).negate(),this.translate(Hi.x,Hi.y,Hi.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let s=0,o=t.length;s<o;s++){const r=t[s];n.push(r.x,r.y,r.z||0)}this.setAttribute("position",new te(n,3))}else{for(let n=0,s=e.count;n<s;n++){const o=t[n];e.setXYZ(n,o.x,o.y,o.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new kn);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new D(-1/0,-1/0,-1/0),new D(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){const o=e[n];je.setFromBufferAttribute(o),this.morphTargetsRelative?(Ie.addVectors(this.boundingBox.min,je.min),this.boundingBox.expandByPoint(Ie),Ie.addVectors(this.boundingBox.max,je.max),this.boundingBox.expandByPoint(Ie)):(this.boundingBox.expandByPoint(je.min),this.boundingBox.expandByPoint(je.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new us);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new D,1/0);return}if(t){const n=this.boundingSphere.center;if(je.setFromBufferAttribute(t),e)for(let o=0,r=e.length;o<r;o++){const a=e[o];xs.setFromBufferAttribute(a),this.morphTargetsRelative?(Ie.addVectors(je.min,xs.min),je.expandByPoint(Ie),Ie.addVectors(je.max,xs.max),je.expandByPoint(Ie)):(je.expandByPoint(xs.min),je.expandByPoint(xs.max))}je.getCenter(n);let s=0;for(let o=0,r=t.count;o<r;o++)Ie.fromBufferAttribute(t,o),s=Math.max(s,n.distanceToSquared(Ie));if(e)for(let o=0,r=e.length;o<r;o++){const a=e[o],c=this.morphTargetsRelative;for(let l=0,h=a.count;l<h;l++)Ie.fromBufferAttribute(a,l),c&&(Hi.fromBufferAttribute(t,l),Ie.add(Hi)),s=Math.max(s,n.distanceToSquared(Ie))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,s=e.normal,o=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new en(new Float32Array(4*n.count),4));const r=this.getAttribute("tangent"),a=[],c=[];for(let I=0;I<n.count;I++)a[I]=new D,c[I]=new D;const l=new D,h=new D,u=new D,f=new _t,p=new _t,g=new _t,_=new D,m=new D;function d(I,M,x){l.fromBufferAttribute(n,I),h.fromBufferAttribute(n,M),u.fromBufferAttribute(n,x),f.fromBufferAttribute(o,I),p.fromBufferAttribute(o,M),g.fromBufferAttribute(o,x),h.sub(l),u.sub(l),p.sub(f),g.sub(f);const C=1/(p.x*g.y-g.x*p.y);isFinite(C)&&(_.copy(h).multiplyScalar(g.y).addScaledVector(u,-p.y).multiplyScalar(C),m.copy(u).multiplyScalar(p.x).addScaledVector(h,-g.x).multiplyScalar(C),a[I].add(_),a[M].add(_),a[x].add(_),c[I].add(m),c[M].add(m),c[x].add(m))}let S=this.groups;S.length===0&&(S=[{start:0,count:t.count}]);for(let I=0,M=S.length;I<M;++I){const x=S[I],C=x.start,k=x.count;for(let G=C,V=C+k;G<V;G+=3)d(t.getX(G+0),t.getX(G+1),t.getX(G+2))}const w=new D,v=new D,U=new D,T=new D;function A(I){U.fromBufferAttribute(s,I),T.copy(U);const M=a[I];w.copy(M),w.sub(U.multiplyScalar(U.dot(M))).normalize(),v.crossVectors(T,M);const C=v.dot(c[I])<0?-1:1;r.setXYZW(I,w.x,w.y,w.z,C)}for(let I=0,M=S.length;I<M;++I){const x=S[I],C=x.start,k=x.count;for(let G=C,V=C+k;G<V;G+=3)A(t.getX(G+0)),A(t.getX(G+1)),A(t.getX(G+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new en(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let f=0,p=n.count;f<p;f++)n.setXYZ(f,0,0,0);const s=new D,o=new D,r=new D,a=new D,c=new D,l=new D,h=new D,u=new D;if(t)for(let f=0,p=t.count;f<p;f+=3){const g=t.getX(f+0),_=t.getX(f+1),m=t.getX(f+2);s.fromBufferAttribute(e,g),o.fromBufferAttribute(e,_),r.fromBufferAttribute(e,m),h.subVectors(r,o),u.subVectors(s,o),h.cross(u),a.fromBufferAttribute(n,g),c.fromBufferAttribute(n,_),l.fromBufferAttribute(n,m),a.add(h),c.add(h),l.add(h),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(_,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let f=0,p=e.count;f<p;f+=3)s.fromBufferAttribute(e,f+0),o.fromBufferAttribute(e,f+1),r.fromBufferAttribute(e,f+2),h.subVectors(r,o),u.subVectors(s,o),h.cross(u),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Ie.fromBufferAttribute(t,e),Ie.normalize(),t.setXYZ(e,Ie.x,Ie.y,Ie.z)}toNonIndexed(){function t(a,c){const l=a.array,h=a.itemSize,u=a.normalized,f=new l.constructor(c.length*h);let p=0,g=0;for(let _=0,m=c.length;_<m;_++){a.isInterleavedBufferAttribute?p=c[_]*a.data.stride+a.offset:p=c[_]*h;for(let d=0;d<h;d++)f[g++]=l[p++]}return new en(f,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Le,n=this.index.array,s=this.attributes;for(const a in s){const c=s[a],l=t(c,n);e.setAttribute(a,l)}const o=this.morphAttributes;for(const a in o){const c=[],l=o[a];for(let h=0,u=l.length;h<u;h++){const f=l[h],p=t(f,n);c.push(p)}e.morphAttributes[a]=c}e.morphTargetsRelative=this.morphTargetsRelative;const r=this.groups;for(let a=0,c=r.length;a<c;a++){const l=r[a];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const c in n){const l=n[c];t.data.attributes[c]=l.toJSON(t.data)}const s={};let o=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],h=[];for(let u=0,f=l.length;u<f;u++){const p=l[u];h.push(p.toJSON(t.data))}h.length>0&&(s[c]=h,o=!0)}o&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const r=this.groups;r.length>0&&(t.data.groups=JSON.parse(JSON.stringify(r)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const s=t.attributes;for(const l in s){const h=s[l];this.setAttribute(l,h.clone(e))}const o=t.morphAttributes;for(const l in o){const h=[],u=o[l];for(let f=0,p=u.length;f<p;f++)h.push(u[f].clone(e));this.morphAttributes[l]=h}this.morphTargetsRelative=t.morphTargetsRelative;const r=t.groups;for(let l=0,h=r.length;l<h;l++){const u=r[l];this.addGroup(u.start,u.count,u.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const $c=new le,li=new tc,no=new us,Zc=new D,io=new D,so=new D,oo=new D,Mr=new D,ro=new D,Kc=new D,ao=new D;class b extends Re{constructor(t=new Le,e=new pe){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,r=s.length;o<r;o++){const a=s[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=o}}}}getVertexPosition(t,e){const n=this.geometry,s=n.attributes.position,o=n.morphAttributes.position,r=n.morphTargetsRelative;e.fromBufferAttribute(s,t);const a=this.morphTargetInfluences;if(o&&a){ro.set(0,0,0);for(let c=0,l=o.length;c<l;c++){const h=a[c],u=o[c];h!==0&&(Mr.fromBufferAttribute(u,t),r?ro.addScaledVector(Mr,h):ro.addScaledVector(Mr.sub(e),h))}e.add(ro)}return e}raycast(t,e){const n=this.geometry,s=this.material,o=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),no.copy(n.boundingSphere),no.applyMatrix4(o),li.copy(t.ray).recast(t.near),!(no.containsPoint(li.origin)===!1&&(li.intersectSphere(no,Zc)===null||li.origin.distanceToSquared(Zc)>(t.far-t.near)**2))&&($c.copy(o).invert(),li.copy(t.ray).applyMatrix4($c),!(n.boundingBox!==null&&li.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,li)))}_computeIntersections(t,e,n){let s;const o=this.geometry,r=this.material,a=o.index,c=o.attributes.position,l=o.attributes.uv,h=o.attributes.uv1,u=o.attributes.normal,f=o.groups,p=o.drawRange;if(a!==null)if(Array.isArray(r))for(let g=0,_=f.length;g<_;g++){const m=f[g],d=r[m.materialIndex],S=Math.max(m.start,p.start),w=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let v=S,U=w;v<U;v+=3){const T=a.getX(v),A=a.getX(v+1),I=a.getX(v+2);s=co(this,d,t,n,l,h,u,T,A,I),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const g=Math.max(0,p.start),_=Math.min(a.count,p.start+p.count);for(let m=g,d=_;m<d;m+=3){const S=a.getX(m),w=a.getX(m+1),v=a.getX(m+2);s=co(this,r,t,n,l,h,u,S,w,v),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(c!==void 0)if(Array.isArray(r))for(let g=0,_=f.length;g<_;g++){const m=f[g],d=r[m.materialIndex],S=Math.max(m.start,p.start),w=Math.min(c.count,Math.min(m.start+m.count,p.start+p.count));for(let v=S,U=w;v<U;v+=3){const T=v,A=v+1,I=v+2;s=co(this,d,t,n,l,h,u,T,A,I),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const g=Math.max(0,p.start),_=Math.min(c.count,p.start+p.count);for(let m=g,d=_;m<d;m+=3){const S=m,w=m+1,v=m+2;s=co(this,r,t,n,l,h,u,S,w,v),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}}function wd(i,t,e,n,s,o,r,a){let c;if(t.side===Oe?c=n.intersectTriangle(r,o,s,!0,a):c=n.intersectTriangle(s,o,r,t.side===ii,a),c===null)return null;ao.copy(a),ao.applyMatrix4(i.matrixWorld);const l=e.ray.origin.distanceTo(ao);return l<e.near||l>e.far?null:{distance:l,point:ao.clone(),object:i}}function co(i,t,e,n,s,o,r,a,c,l){i.getVertexPosition(a,io),i.getVertexPosition(c,so),i.getVertexPosition(l,oo);const h=wd(i,t,e,n,io,so,oo,Kc);if(h){const u=new D;dn.getBarycoord(Kc,io,so,oo,u),s&&(h.uv=dn.getInterpolatedAttribute(s,a,c,l,u,new _t)),o&&(h.uv1=dn.getInterpolatedAttribute(o,a,c,l,u,new _t)),r&&(h.normal=dn.getInterpolatedAttribute(r,a,c,l,u,new D),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const f={a,b:c,c:l,normal:new D,materialIndex:0};dn.getNormal(io,so,oo,f.normal),h.face=f,h.barycoord=u}return h}class Yt extends Le{constructor(t=1,e=1,n=1,s=1,o=1,r=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:o,depthSegments:r};const a=this;s=Math.floor(s),o=Math.floor(o),r=Math.floor(r);const c=[],l=[],h=[],u=[];let f=0,p=0;g("z","y","x",-1,-1,n,e,t,r,o,0),g("z","y","x",1,-1,n,e,-t,r,o,1),g("x","z","y",1,1,t,n,e,s,r,2),g("x","z","y",1,-1,t,n,-e,s,r,3),g("x","y","z",1,-1,t,e,n,s,o,4),g("x","y","z",-1,-1,t,e,-n,s,o,5),this.setIndex(c),this.setAttribute("position",new te(l,3)),this.setAttribute("normal",new te(h,3)),this.setAttribute("uv",new te(u,2));function g(_,m,d,S,w,v,U,T,A,I,M){const x=v/A,C=U/I,k=v/2,G=U/2,V=T/2,J=A+1,q=I+1;let at=0,K=0;const pt=new D;for(let wt=0;wt<q;wt++){const dt=wt*C-G;for(let Vt=0;Vt<J;Vt++){const ut=Vt*x-k;pt[_]=ut*S,pt[m]=dt*w,pt[d]=V,l.push(pt.x,pt.y,pt.z),pt[_]=0,pt[m]=0,pt[d]=T>0?1:-1,h.push(pt.x,pt.y,pt.z),u.push(Vt/A),u.push(1-wt/I),at+=1}}for(let wt=0;wt<I;wt++)for(let dt=0;dt<A;dt++){const Vt=f+dt+J*wt,ut=f+dt+J*(wt+1),F=f+(dt+1)+J*(wt+1),Q=f+(dt+1)+J*wt;c.push(Vt,ut,Q),c.push(ut,F,Q),K+=6}a.addGroup(p,K,M),p+=K,f+=at}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Yt(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function rs(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function We(i){const t={};for(let e=0;e<i.length;e++){const n=rs(i[e]);for(const s in n)t[s]=n[s]}return t}function Sd(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Th(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:ne.workingColorSpace}const Ed={clone:rs,merge:We};var Td=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,bd=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class si extends Ri{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Td,this.fragmentShader=bd,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=rs(t.uniforms),this.uniformsGroups=Sd(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const r=this.uniforms[s].value;r&&r.isTexture?e.uniforms[s]={type:"t",value:r.toJSON(t).uuid}:r&&r.isColor?e.uniforms[s]={type:"c",value:r.getHex()}:r&&r.isVector2?e.uniforms[s]={type:"v2",value:r.toArray()}:r&&r.isVector3?e.uniforms[s]={type:"v3",value:r.toArray()}:r&&r.isVector4?e.uniforms[s]={type:"v4",value:r.toArray()}:r&&r.isMatrix3?e.uniforms[s]={type:"m3",value:r.toArray()}:r&&r.isMatrix4?e.uniforms[s]={type:"m4",value:r.toArray()}:e.uniforms[s]={value:r}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class bh extends Re{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new le,this.projectionMatrix=new le,this.projectionMatrixInverse=new le,this.coordinateSystem=Nn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const $n=new D,Jc=new _t,jc=new _t;class Ge extends bh{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Pa*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(tr*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Pa*2*Math.atan(Math.tan(tr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){$n.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set($n.x,$n.y).multiplyScalar(-t/$n.z),$n.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set($n.x,$n.y).multiplyScalar(-t/$n.z)}getViewSize(t,e){return this.getViewBounds(t,Jc,jc),e.subVectors(jc,Jc)}setViewOffset(t,e,n,s,o,r){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=o,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(tr*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,o=-.5*s;const r=this.view;if(this.view!==null&&this.view.enabled){const c=r.fullWidth,l=r.fullHeight;o+=r.offsetX*s/c,e-=r.offsetY*n/l,s*=r.width/c,n*=r.height/l}const a=this.filmOffset;a!==0&&(o+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(o,o+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Gi=-90,Vi=1;class Ad extends Re{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Ge(Gi,Vi,t,e);s.layers=this.layers,this.add(s);const o=new Ge(Gi,Vi,t,e);o.layers=this.layers,this.add(o);const r=new Ge(Gi,Vi,t,e);r.layers=this.layers,this.add(r);const a=new Ge(Gi,Vi,t,e);a.layers=this.layers,this.add(a);const c=new Ge(Gi,Vi,t,e);c.layers=this.layers,this.add(c);const l=new Ge(Gi,Vi,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,s,o,r,a,c]=e;for(const l of e)this.remove(l);if(t===Nn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),o.up.set(0,0,-1),o.lookAt(0,1,0),r.up.set(0,0,1),r.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===Lo)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),o.up.set(0,0,1),o.lookAt(0,1,0),r.up.set(0,0,-1),r.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[o,r,a,c,l,h]=this.children,u=t.getRenderTarget(),f=t.getActiveCubeFace(),p=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,o),t.setRenderTarget(n,1,s),t.render(e,r),t.setRenderTarget(n,2,s),t.render(e,a),t.setRenderTarget(n,3,s),t.render(e,c),t.setRenderTarget(n,4,s),t.render(e,l),n.texture.generateMipmaps=_,t.setRenderTarget(n,5,s),t.render(e,h),t.setRenderTarget(u,f,p),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class Ah extends Ve{constructor(t,e,n,s,o,r,a,c,l,h){t=t!==void 0?t:[],e=e!==void 0?e:es,super(t,e,n,s,o,r,a,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Rd extends Ti{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new Ah(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:Sn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Yt(5,5,5),o=new si({name:"CubemapFromEquirect",uniforms:rs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Oe,blending:ei});o.uniforms.tEquirect.value=e;const r=new b(s,o),a=e.minFilter;return e.minFilter===Mi&&(e.minFilter=Sn),new Ad(1,10,this).update(t,r),e.minFilter=a,r.geometry.dispose(),r.material.dispose(),this}clear(t,e,n,s){const o=t.getRenderTarget();for(let r=0;r<6;r++)t.setRenderTarget(this,r),t.clear(e,n,s);t.setRenderTarget(o)}}const yr=new D,Cd=new D,Pd=new Kt;class fi{constructor(t=new D(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const s=yr.subVectors(n,e).cross(Cd.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(yr),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const o=-(t.start.dot(this.normal)+this.constant)/s;return o<0||o>1?null:e.copy(t.start).addScaledVector(n,o)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||Pd.getNormalMatrix(t),s=this.coplanarPoint(yr).applyMatrix4(t),o=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(o),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const hi=new us,lo=new D;class nc{constructor(t=new fi,e=new fi,n=new fi,s=new fi,o=new fi,r=new fi){this.planes=[t,e,n,s,o,r]}set(t,e,n,s,o,r){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(s),a[4].copy(o),a[5].copy(r),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Nn){const n=this.planes,s=t.elements,o=s[0],r=s[1],a=s[2],c=s[3],l=s[4],h=s[5],u=s[6],f=s[7],p=s[8],g=s[9],_=s[10],m=s[11],d=s[12],S=s[13],w=s[14],v=s[15];if(n[0].setComponents(c-o,f-l,m-p,v-d).normalize(),n[1].setComponents(c+o,f+l,m+p,v+d).normalize(),n[2].setComponents(c+r,f+h,m+g,v+S).normalize(),n[3].setComponents(c-r,f-h,m-g,v-S).normalize(),n[4].setComponents(c-a,f-u,m-_,v-w).normalize(),e===Nn)n[5].setComponents(c+a,f+u,m+_,v+w).normalize();else if(e===Lo)n[5].setComponents(a,u,_,w).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),hi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),hi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(hi)}intersectsSprite(t){return hi.center.set(0,0,0),hi.radius=.7071067811865476,hi.applyMatrix4(t.matrixWorld),this.intersectsSphere(hi)}intersectsSphere(t){const e=this.planes,n=t.center,s=-t.radius;for(let o=0;o<6;o++)if(e[o].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const s=e[n];if(lo.x=s.normal.x>0?t.max.x:t.min.x,lo.y=s.normal.y>0?t.max.y:t.min.y,lo.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(lo)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Rh(){let i=null,t=!1,e=null,n=null;function s(o,r){e(o,r),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(o){e=o},setContext:function(o){i=o}}}function Ld(i){const t=new WeakMap;function e(a,c){const l=a.array,h=a.usage,u=l.byteLength,f=i.createBuffer();i.bindBuffer(c,f),i.bufferData(c,l,h),a.onUploadCallback();let p;if(l instanceof Float32Array)p=i.FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?p=i.HALF_FLOAT:p=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)p=i.SHORT;else if(l instanceof Uint32Array)p=i.UNSIGNED_INT;else if(l instanceof Int32Array)p=i.INT;else if(l instanceof Int8Array)p=i.BYTE;else if(l instanceof Uint8Array)p=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)p=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:f,type:p,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,c,l){const h=c.array,u=c.updateRanges;if(i.bindBuffer(l,a),u.length===0)i.bufferSubData(l,0,h);else{u.sort((p,g)=>p.start-g.start);let f=0;for(let p=1;p<u.length;p++){const g=u[f],_=u[p];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++f,u[f]=_)}u.length=f+1;for(let p=0,g=u.length;p<g;p++){const _=u[p];i.bufferSubData(l,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function o(a){a.isInterleavedBufferAttribute&&(a=a.data);const c=t.get(a);c&&(i.deleteBuffer(c.buffer),t.delete(a))}function r(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const l=t.get(a);if(l===void 0)t.set(a,e(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,a,c),l.version=a.version}}return{get:s,remove:o,update:r}}class fn extends Le{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};const o=t/2,r=e/2,a=Math.floor(n),c=Math.floor(s),l=a+1,h=c+1,u=t/a,f=e/c,p=[],g=[],_=[],m=[];for(let d=0;d<h;d++){const S=d*f-r;for(let w=0;w<l;w++){const v=w*u-o;g.push(v,-S,0),_.push(0,0,1),m.push(w/a),m.push(1-d/c)}}for(let d=0;d<c;d++)for(let S=0;S<a;S++){const w=S+l*d,v=S+l*(d+1),U=S+1+l*(d+1),T=S+1+l*d;p.push(w,v,T),p.push(v,U,T)}this.setIndex(p),this.setAttribute("position",new te(g,3)),this.setAttribute("normal",new te(_,3)),this.setAttribute("uv",new te(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new fn(t.width,t.height,t.widthSegments,t.heightSegments)}}var Id=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Dd=`#ifdef USE_ALPHAHASH
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
#endif`,Ud=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Nd=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Fd=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Od=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,zd=`#ifdef USE_AOMAP
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
#endif`,Bd=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,kd=`#ifdef USE_BATCHING
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
#endif`,Hd=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Gd=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Vd=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Wd=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Xd=`#ifdef USE_IRIDESCENCE
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
#endif`,Yd=`#ifdef USE_BUMPMAP
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
#endif`,qd=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,$d=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Zd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Kd=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Jd=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,jd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Qd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,tf=`#if defined( USE_COLOR_ALPHA )
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
#endif`,ef=`#define PI 3.141592653589793
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
} // validated`,nf=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,sf=`vec3 transformedNormal = objectNormal;
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
#endif`,of=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,rf=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,af=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,cf=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,lf="gl_FragColor = linearToOutputTexel( gl_FragColor );",hf=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,uf=`#ifdef USE_ENVMAP
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
#endif`,df=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,ff=`#ifdef USE_ENVMAP
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
#endif`,pf=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,mf=`#ifdef USE_ENVMAP
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
#endif`,gf=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,_f=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,vf=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,xf=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Mf=`#ifdef USE_GRADIENTMAP
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
}`,yf=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,wf=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Sf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Ef=`uniform bool receiveShadow;
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
#endif`,Tf=`#ifdef USE_ENVMAP
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
#endif`,bf=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Af=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Rf=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Cf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Pf=`PhysicalMaterial material;
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
#endif`,Lf=`struct PhysicalMaterial {
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
}`,If=`
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
#endif`,Df=`#if defined( RE_IndirectDiffuse )
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
#endif`,Uf=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Nf=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Ff=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Of=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,zf=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Bf=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,kf=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Hf=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Gf=`#if defined( USE_POINTS_UV )
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
#endif`,Vf=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Wf=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Xf=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Yf=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,qf=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,$f=`#ifdef USE_MORPHTARGETS
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
#endif`,Zf=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Kf=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Jf=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,jf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Qf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,tp=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,ep=`#ifdef USE_NORMALMAP
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
#endif`,np=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,ip=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,sp=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,op=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,rp=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,ap=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,cp=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,lp=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,hp=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,up=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,dp=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,fp=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,pp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,mp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,gp=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,_p=`float getShadowMask() {
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
}`,vp=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,xp=`#ifdef USE_SKINNING
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
#endif`,Mp=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,yp=`#ifdef USE_SKINNING
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
#endif`,wp=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Sp=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Ep=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Tp=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,bp=`#ifdef USE_TRANSMISSION
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
#endif`,Ap=`#ifdef USE_TRANSMISSION
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
#endif`,Rp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Cp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Pp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Lp=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Ip=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Dp=`uniform sampler2D t2D;
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
}`,Up=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Np=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Fp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Op=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,zp=`#include <common>
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
}`,Bp=`#if DEPTH_PACKING == 3200
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
}`,kp=`#define DISTANCE
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
}`,Hp=`#define DISTANCE
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
}`,Gp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Vp=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Wp=`uniform float scale;
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
}`,Xp=`uniform vec3 diffuse;
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
}`,Yp=`#include <common>
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
}`,qp=`uniform vec3 diffuse;
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
}`,$p=`#define LAMBERT
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
}`,Zp=`#define LAMBERT
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
}`,Kp=`#define MATCAP
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
}`,Jp=`#define MATCAP
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
}`,jp=`#define NORMAL
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
}`,Qp=`#define NORMAL
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
}`,t0=`#define PHONG
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
}`,e0=`#define PHONG
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
}`,n0=`#define STANDARD
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
}`,i0=`#define STANDARD
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
}`,s0=`#define TOON
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
}`,o0=`#define TOON
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
}`,r0=`uniform float size;
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
}`,a0=`uniform vec3 diffuse;
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
}`,c0=`#include <common>
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
}`,l0=`uniform vec3 color;
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
}`,h0=`uniform float rotation;
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
}`,u0=`uniform vec3 diffuse;
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
}`,jt={alphahash_fragment:Id,alphahash_pars_fragment:Dd,alphamap_fragment:Ud,alphamap_pars_fragment:Nd,alphatest_fragment:Fd,alphatest_pars_fragment:Od,aomap_fragment:zd,aomap_pars_fragment:Bd,batching_pars_vertex:kd,batching_vertex:Hd,begin_vertex:Gd,beginnormal_vertex:Vd,bsdfs:Wd,iridescence_fragment:Xd,bumpmap_pars_fragment:Yd,clipping_planes_fragment:qd,clipping_planes_pars_fragment:$d,clipping_planes_pars_vertex:Zd,clipping_planes_vertex:Kd,color_fragment:Jd,color_pars_fragment:jd,color_pars_vertex:Qd,color_vertex:tf,common:ef,cube_uv_reflection_fragment:nf,defaultnormal_vertex:sf,displacementmap_pars_vertex:of,displacementmap_vertex:rf,emissivemap_fragment:af,emissivemap_pars_fragment:cf,colorspace_fragment:lf,colorspace_pars_fragment:hf,envmap_fragment:uf,envmap_common_pars_fragment:df,envmap_pars_fragment:ff,envmap_pars_vertex:pf,envmap_physical_pars_fragment:Tf,envmap_vertex:mf,fog_vertex:gf,fog_pars_vertex:_f,fog_fragment:vf,fog_pars_fragment:xf,gradientmap_pars_fragment:Mf,lightmap_pars_fragment:yf,lights_lambert_fragment:wf,lights_lambert_pars_fragment:Sf,lights_pars_begin:Ef,lights_toon_fragment:bf,lights_toon_pars_fragment:Af,lights_phong_fragment:Rf,lights_phong_pars_fragment:Cf,lights_physical_fragment:Pf,lights_physical_pars_fragment:Lf,lights_fragment_begin:If,lights_fragment_maps:Df,lights_fragment_end:Uf,logdepthbuf_fragment:Nf,logdepthbuf_pars_fragment:Ff,logdepthbuf_pars_vertex:Of,logdepthbuf_vertex:zf,map_fragment:Bf,map_pars_fragment:kf,map_particle_fragment:Hf,map_particle_pars_fragment:Gf,metalnessmap_fragment:Vf,metalnessmap_pars_fragment:Wf,morphinstance_vertex:Xf,morphcolor_vertex:Yf,morphnormal_vertex:qf,morphtarget_pars_vertex:$f,morphtarget_vertex:Zf,normal_fragment_begin:Kf,normal_fragment_maps:Jf,normal_pars_fragment:jf,normal_pars_vertex:Qf,normal_vertex:tp,normalmap_pars_fragment:ep,clearcoat_normal_fragment_begin:np,clearcoat_normal_fragment_maps:ip,clearcoat_pars_fragment:sp,iridescence_pars_fragment:op,opaque_fragment:rp,packing:ap,premultiplied_alpha_fragment:cp,project_vertex:lp,dithering_fragment:hp,dithering_pars_fragment:up,roughnessmap_fragment:dp,roughnessmap_pars_fragment:fp,shadowmap_pars_fragment:pp,shadowmap_pars_vertex:mp,shadowmap_vertex:gp,shadowmask_pars_fragment:_p,skinbase_vertex:vp,skinning_pars_vertex:xp,skinning_vertex:Mp,skinnormal_vertex:yp,specularmap_fragment:wp,specularmap_pars_fragment:Sp,tonemapping_fragment:Ep,tonemapping_pars_fragment:Tp,transmission_fragment:bp,transmission_pars_fragment:Ap,uv_pars_fragment:Rp,uv_pars_vertex:Cp,uv_vertex:Pp,worldpos_vertex:Lp,background_vert:Ip,background_frag:Dp,backgroundCube_vert:Up,backgroundCube_frag:Np,cube_vert:Fp,cube_frag:Op,depth_vert:zp,depth_frag:Bp,distanceRGBA_vert:kp,distanceRGBA_frag:Hp,equirect_vert:Gp,equirect_frag:Vp,linedashed_vert:Wp,linedashed_frag:Xp,meshbasic_vert:Yp,meshbasic_frag:qp,meshlambert_vert:$p,meshlambert_frag:Zp,meshmatcap_vert:Kp,meshmatcap_frag:Jp,meshnormal_vert:jp,meshnormal_frag:Qp,meshphong_vert:t0,meshphong_frag:e0,meshphysical_vert:n0,meshphysical_frag:i0,meshtoon_vert:s0,meshtoon_frag:o0,points_vert:r0,points_frag:a0,shadow_vert:c0,shadow_frag:l0,sprite_vert:h0,sprite_frag:u0},Tt={common:{diffuse:{value:new Rt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Kt},alphaMap:{value:null},alphaMapTransform:{value:new Kt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Kt}},envmap:{envMap:{value:null},envMapRotation:{value:new Kt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Kt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Kt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Kt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Kt},normalScale:{value:new _t(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Kt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Kt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Kt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Kt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Rt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Rt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Kt},alphaTest:{value:0},uvTransform:{value:new Kt}},sprite:{diffuse:{value:new Rt(16777215)},opacity:{value:1},center:{value:new _t(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Kt},alphaMap:{value:null},alphaMapTransform:{value:new Kt},alphaTest:{value:0}}},yn={basic:{uniforms:We([Tt.common,Tt.specularmap,Tt.envmap,Tt.aomap,Tt.lightmap,Tt.fog]),vertexShader:jt.meshbasic_vert,fragmentShader:jt.meshbasic_frag},lambert:{uniforms:We([Tt.common,Tt.specularmap,Tt.envmap,Tt.aomap,Tt.lightmap,Tt.emissivemap,Tt.bumpmap,Tt.normalmap,Tt.displacementmap,Tt.fog,Tt.lights,{emissive:{value:new Rt(0)}}]),vertexShader:jt.meshlambert_vert,fragmentShader:jt.meshlambert_frag},phong:{uniforms:We([Tt.common,Tt.specularmap,Tt.envmap,Tt.aomap,Tt.lightmap,Tt.emissivemap,Tt.bumpmap,Tt.normalmap,Tt.displacementmap,Tt.fog,Tt.lights,{emissive:{value:new Rt(0)},specular:{value:new Rt(1118481)},shininess:{value:30}}]),vertexShader:jt.meshphong_vert,fragmentShader:jt.meshphong_frag},standard:{uniforms:We([Tt.common,Tt.envmap,Tt.aomap,Tt.lightmap,Tt.emissivemap,Tt.bumpmap,Tt.normalmap,Tt.displacementmap,Tt.roughnessmap,Tt.metalnessmap,Tt.fog,Tt.lights,{emissive:{value:new Rt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:jt.meshphysical_vert,fragmentShader:jt.meshphysical_frag},toon:{uniforms:We([Tt.common,Tt.aomap,Tt.lightmap,Tt.emissivemap,Tt.bumpmap,Tt.normalmap,Tt.displacementmap,Tt.gradientmap,Tt.fog,Tt.lights,{emissive:{value:new Rt(0)}}]),vertexShader:jt.meshtoon_vert,fragmentShader:jt.meshtoon_frag},matcap:{uniforms:We([Tt.common,Tt.bumpmap,Tt.normalmap,Tt.displacementmap,Tt.fog,{matcap:{value:null}}]),vertexShader:jt.meshmatcap_vert,fragmentShader:jt.meshmatcap_frag},points:{uniforms:We([Tt.points,Tt.fog]),vertexShader:jt.points_vert,fragmentShader:jt.points_frag},dashed:{uniforms:We([Tt.common,Tt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:jt.linedashed_vert,fragmentShader:jt.linedashed_frag},depth:{uniforms:We([Tt.common,Tt.displacementmap]),vertexShader:jt.depth_vert,fragmentShader:jt.depth_frag},normal:{uniforms:We([Tt.common,Tt.bumpmap,Tt.normalmap,Tt.displacementmap,{opacity:{value:1}}]),vertexShader:jt.meshnormal_vert,fragmentShader:jt.meshnormal_frag},sprite:{uniforms:We([Tt.sprite,Tt.fog]),vertexShader:jt.sprite_vert,fragmentShader:jt.sprite_frag},background:{uniforms:{uvTransform:{value:new Kt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:jt.background_vert,fragmentShader:jt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Kt}},vertexShader:jt.backgroundCube_vert,fragmentShader:jt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:jt.cube_vert,fragmentShader:jt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:jt.equirect_vert,fragmentShader:jt.equirect_frag},distanceRGBA:{uniforms:We([Tt.common,Tt.displacementmap,{referencePosition:{value:new D},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:jt.distanceRGBA_vert,fragmentShader:jt.distanceRGBA_frag},shadow:{uniforms:We([Tt.lights,Tt.fog,{color:{value:new Rt(0)},opacity:{value:1}}]),vertexShader:jt.shadow_vert,fragmentShader:jt.shadow_frag}};yn.physical={uniforms:We([yn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Kt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Kt},clearcoatNormalScale:{value:new _t(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Kt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Kt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Kt},sheen:{value:0},sheenColor:{value:new Rt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Kt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Kt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Kt},transmissionSamplerSize:{value:new _t},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Kt},attenuationDistance:{value:0},attenuationColor:{value:new Rt(0)},specularColor:{value:new Rt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Kt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Kt},anisotropyVector:{value:new _t},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Kt}}]),vertexShader:jt.meshphysical_vert,fragmentShader:jt.meshphysical_frag};const ho={r:0,b:0,g:0},ui=new gn,d0=new le;function f0(i,t,e,n,s,o,r){const a=new Rt(0);let c=o===!0?0:1,l,h,u=null,f=0,p=null;function g(S){let w=S.isScene===!0?S.background:null;return w&&w.isTexture&&(w=(S.backgroundBlurriness>0?e:t).get(w)),w}function _(S){let w=!1;const v=g(S);v===null?d(a,c):v&&v.isColor&&(d(v,1),w=!0);const U=i.xr.getEnvironmentBlendMode();U==="additive"?n.buffers.color.setClear(0,0,0,1,r):U==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,r),(i.autoClear||w)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(S,w){const v=g(w);v&&(v.isCubeTexture||v.mapping===Xo)?(h===void 0&&(h=new b(new Yt(1,1,1),new si({name:"BackgroundCubeMaterial",uniforms:rs(yn.backgroundCube.uniforms),vertexShader:yn.backgroundCube.vertexShader,fragmentShader:yn.backgroundCube.fragmentShader,side:Oe,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(U,T,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),ui.copy(w.backgroundRotation),ui.x*=-1,ui.y*=-1,ui.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(ui.y*=-1,ui.z*=-1),h.material.uniforms.envMap.value=v,h.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=w.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(d0.makeRotationFromEuler(ui)),h.material.toneMapped=ne.getTransfer(v.colorSpace)!==he,(u!==v||f!==v.version||p!==i.toneMapping)&&(h.material.needsUpdate=!0,u=v,f=v.version,p=i.toneMapping),h.layers.enableAll(),S.unshift(h,h.geometry,h.material,0,0,null)):v&&v.isTexture&&(l===void 0&&(l=new b(new fn(2,2),new si({name:"BackgroundMaterial",uniforms:rs(yn.background.uniforms),vertexShader:yn.background.vertexShader,fragmentShader:yn.background.fragmentShader,side:ii,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=v,l.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,l.material.toneMapped=ne.getTransfer(v.colorSpace)!==he,v.matrixAutoUpdate===!0&&v.updateMatrix(),l.material.uniforms.uvTransform.value.copy(v.matrix),(u!==v||f!==v.version||p!==i.toneMapping)&&(l.material.needsUpdate=!0,u=v,f=v.version,p=i.toneMapping),l.layers.enableAll(),S.unshift(l,l.geometry,l.material,0,0,null))}function d(S,w){S.getRGB(ho,Th(i)),n.buffers.color.setClear(ho.r,ho.g,ho.b,w,r)}return{getClearColor:function(){return a},setClearColor:function(S,w=1){a.set(S),c=w,d(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(S){c=S,d(a,c)},render:_,addToRenderList:m}}function p0(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=f(null);let o=s,r=!1;function a(x,C,k,G,V){let J=!1;const q=u(G,k,C);o!==q&&(o=q,l(o.object)),J=p(x,G,k,V),J&&g(x,G,k,V),V!==null&&t.update(V,i.ELEMENT_ARRAY_BUFFER),(J||r)&&(r=!1,v(x,C,k,G),V!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(V).buffer))}function c(){return i.createVertexArray()}function l(x){return i.bindVertexArray(x)}function h(x){return i.deleteVertexArray(x)}function u(x,C,k){const G=k.wireframe===!0;let V=n[x.id];V===void 0&&(V={},n[x.id]=V);let J=V[C.id];J===void 0&&(J={},V[C.id]=J);let q=J[G];return q===void 0&&(q=f(c()),J[G]=q),q}function f(x){const C=[],k=[],G=[];for(let V=0;V<e;V++)C[V]=0,k[V]=0,G[V]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:C,enabledAttributes:k,attributeDivisors:G,object:x,attributes:{},index:null}}function p(x,C,k,G){const V=o.attributes,J=C.attributes;let q=0;const at=k.getAttributes();for(const K in at)if(at[K].location>=0){const wt=V[K];let dt=J[K];if(dt===void 0&&(K==="instanceMatrix"&&x.instanceMatrix&&(dt=x.instanceMatrix),K==="instanceColor"&&x.instanceColor&&(dt=x.instanceColor)),wt===void 0||wt.attribute!==dt||dt&&wt.data!==dt.data)return!0;q++}return o.attributesNum!==q||o.index!==G}function g(x,C,k,G){const V={},J=C.attributes;let q=0;const at=k.getAttributes();for(const K in at)if(at[K].location>=0){let wt=J[K];wt===void 0&&(K==="instanceMatrix"&&x.instanceMatrix&&(wt=x.instanceMatrix),K==="instanceColor"&&x.instanceColor&&(wt=x.instanceColor));const dt={};dt.attribute=wt,wt&&wt.data&&(dt.data=wt.data),V[K]=dt,q++}o.attributes=V,o.attributesNum=q,o.index=G}function _(){const x=o.newAttributes;for(let C=0,k=x.length;C<k;C++)x[C]=0}function m(x){d(x,0)}function d(x,C){const k=o.newAttributes,G=o.enabledAttributes,V=o.attributeDivisors;k[x]=1,G[x]===0&&(i.enableVertexAttribArray(x),G[x]=1),V[x]!==C&&(i.vertexAttribDivisor(x,C),V[x]=C)}function S(){const x=o.newAttributes,C=o.enabledAttributes;for(let k=0,G=C.length;k<G;k++)C[k]!==x[k]&&(i.disableVertexAttribArray(k),C[k]=0)}function w(x,C,k,G,V,J,q){q===!0?i.vertexAttribIPointer(x,C,k,V,J):i.vertexAttribPointer(x,C,k,G,V,J)}function v(x,C,k,G){_();const V=G.attributes,J=k.getAttributes(),q=C.defaultAttributeValues;for(const at in J){const K=J[at];if(K.location>=0){let pt=V[at];if(pt===void 0&&(at==="instanceMatrix"&&x.instanceMatrix&&(pt=x.instanceMatrix),at==="instanceColor"&&x.instanceColor&&(pt=x.instanceColor)),pt!==void 0){const wt=pt.normalized,dt=pt.itemSize,Vt=t.get(pt);if(Vt===void 0)continue;const ut=Vt.buffer,F=Vt.type,Q=Vt.bytesPerElement,ft=F===i.INT||F===i.UNSIGNED_INT||pt.gpuType===Ya;if(pt.isInterleavedBufferAttribute){const ot=pt.data,mt=ot.stride,Mt=pt.offset;if(ot.isInstancedInterleavedBuffer){for(let Et=0;Et<K.locationSize;Et++)d(K.location+Et,ot.meshPerAttribute);x.isInstancedMesh!==!0&&G._maxInstanceCount===void 0&&(G._maxInstanceCount=ot.meshPerAttribute*ot.count)}else for(let Et=0;Et<K.locationSize;Et++)m(K.location+Et);i.bindBuffer(i.ARRAY_BUFFER,ut);for(let Et=0;Et<K.locationSize;Et++)w(K.location+Et,dt/K.locationSize,F,wt,mt*Q,(Mt+dt/K.locationSize*Et)*Q,ft)}else{if(pt.isInstancedBufferAttribute){for(let ot=0;ot<K.locationSize;ot++)d(K.location+ot,pt.meshPerAttribute);x.isInstancedMesh!==!0&&G._maxInstanceCount===void 0&&(G._maxInstanceCount=pt.meshPerAttribute*pt.count)}else for(let ot=0;ot<K.locationSize;ot++)m(K.location+ot);i.bindBuffer(i.ARRAY_BUFFER,ut);for(let ot=0;ot<K.locationSize;ot++)w(K.location+ot,dt/K.locationSize,F,wt,dt*Q,dt/K.locationSize*ot*Q,ft)}}else if(q!==void 0){const wt=q[at];if(wt!==void 0)switch(wt.length){case 2:i.vertexAttrib2fv(K.location,wt);break;case 3:i.vertexAttrib3fv(K.location,wt);break;case 4:i.vertexAttrib4fv(K.location,wt);break;default:i.vertexAttrib1fv(K.location,wt)}}}}S()}function U(){I();for(const x in n){const C=n[x];for(const k in C){const G=C[k];for(const V in G)h(G[V].object),delete G[V];delete C[k]}delete n[x]}}function T(x){if(n[x.id]===void 0)return;const C=n[x.id];for(const k in C){const G=C[k];for(const V in G)h(G[V].object),delete G[V];delete C[k]}delete n[x.id]}function A(x){for(const C in n){const k=n[C];if(k[x.id]===void 0)continue;const G=k[x.id];for(const V in G)h(G[V].object),delete G[V];delete k[x.id]}}function I(){M(),r=!0,o!==s&&(o=s,l(o.object))}function M(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:I,resetDefaultState:M,dispose:U,releaseStatesOfGeometry:T,releaseStatesOfProgram:A,initAttributes:_,enableAttribute:m,disableUnusedAttributes:S}}function m0(i,t,e){let n;function s(l){n=l}function o(l,h){i.drawArrays(n,l,h),e.update(h,n,1)}function r(l,h,u){u!==0&&(i.drawArraysInstanced(n,l,h,u),e.update(h,n,u))}function a(l,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,h,0,u);let p=0;for(let g=0;g<u;g++)p+=h[g];e.update(p,n,1)}function c(l,h,u,f){if(u===0)return;const p=t.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<l.length;g++)r(l[g],h[g],f[g]);else{p.multiDrawArraysInstancedWEBGL(n,l,0,h,0,f,0,u);let g=0;for(let _=0;_<u;_++)g+=h[_]*f[_];e.update(g,n,1)}}this.setMode=s,this.render=o,this.renderInstances=r,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function g0(i,t,e,n){let s;function o(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const A=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function r(A){return!(A!==pn&&n.convert(A)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(A){const I=A===Bs&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(A!==zn&&n.convert(A)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==En&&!I)}function c(A){if(A==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp";const h=c(l);h!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);const u=e.logarithmicDepthBuffer===!0,f=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),p=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),d=i.getParameter(i.MAX_VERTEX_ATTRIBS),S=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),w=i.getParameter(i.MAX_VARYING_VECTORS),v=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),U=g>0,T=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:o,getMaxPrecision:c,textureFormatReadable:r,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:u,reverseDepthBuffer:f,maxTextures:p,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:d,maxVertexUniforms:S,maxVaryings:w,maxFragmentUniforms:v,vertexTextures:U,maxSamples:T}}function _0(i){const t=this;let e=null,n=0,s=!1,o=!1;const r=new fi,a=new Kt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){const p=u.length!==0||f||n!==0||s;return s=f,n=u.length,p},this.beginShadows=function(){o=!0,h(null)},this.endShadows=function(){o=!1},this.setGlobalState=function(u,f){e=h(u,f,0)},this.setState=function(u,f,p){const g=u.clippingPlanes,_=u.clipIntersection,m=u.clipShadows,d=i.get(u);if(!s||g===null||g.length===0||o&&!m)o?h(null):l();else{const S=o?0:n,w=S*4;let v=d.clippingState||null;c.value=v,v=h(g,f,w,p);for(let U=0;U!==w;++U)v[U]=e[U];d.clippingState=v,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=S}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,f,p,g){const _=u!==null?u.length:0;let m=null;if(_!==0){if(m=c.value,g!==!0||m===null){const d=p+_*4,S=f.matrixWorldInverse;a.getNormalMatrix(S),(m===null||m.length<d)&&(m=new Float32Array(d));for(let w=0,v=p;w!==_;++w,v+=4)r.copy(u[w]).applyMatrix4(S,a),r.normal.toArray(m,v),m[v+3]=r.constant}c.value=m,c.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,m}}function v0(i){let t=new WeakMap;function e(r,a){return a===ea?r.mapping=es:a===na&&(r.mapping=ns),r}function n(r){if(r&&r.isTexture){const a=r.mapping;if(a===ea||a===na)if(t.has(r)){const c=t.get(r).texture;return e(c,r.mapping)}else{const c=r.image;if(c&&c.height>0){const l=new Rd(c.height);return l.fromEquirectangularTexture(i,r),t.set(r,l),r.addEventListener("dispose",s),e(l.texture,r.mapping)}else return null}}return r}function s(r){const a=r.target;a.removeEventListener("dispose",s);const c=t.get(a);c!==void 0&&(t.delete(a),c.dispose())}function o(){t=new WeakMap}return{get:n,dispose:o}}class Ch extends bh{constructor(t=-1,e=1,n=1,s=-1,o=.1,r=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=o,this.far=r,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,o,r){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=o,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let o=n-t,r=n+t,a=s+e,c=s-e;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;o+=l*this.view.offsetX,r=o+l*this.view.width,a-=h*this.view.offsetY,c=a-h*this.view.height}this.projectionMatrix.makeOrthographic(o,r,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const qi=4,Qc=[.125,.215,.35,.446,.526,.582],gi=20,wr=new Ch,tl=new Rt;let Sr=null,Er=0,Tr=0,br=!1;const pi=(1+Math.sqrt(5))/2,Wi=1/pi,el=[new D(-pi,Wi,0),new D(pi,Wi,0),new D(-Wi,0,pi),new D(Wi,0,pi),new D(0,pi,-Wi),new D(0,pi,Wi),new D(-1,1,-1),new D(1,1,-1),new D(-1,1,1),new D(1,1,1)];class La{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100){Sr=this._renderer.getRenderTarget(),Er=this._renderer.getActiveCubeFace(),Tr=this._renderer.getActiveMipmapLevel(),br=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const o=this._allocateTargets();return o.depthBuffer=!0,this._sceneToCubeUV(t,n,s,o),e>0&&this._blur(o,0,0,e),this._applyPMREM(o),this._cleanup(o),o}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=sl(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=il(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Sr,Er,Tr),this._renderer.xr.enabled=br,t.scissorTest=!1,uo(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===es||t.mapping===ns?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Sr=this._renderer.getRenderTarget(),Er=this._renderer.getActiveCubeFace(),Tr=this._renderer.getActiveMipmapLevel(),br=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Sn,minFilter:Sn,generateMipmaps:!1,type:Bs,format:pn,colorSpace:cs,depthBuffer:!1},s=nl(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=nl(t,e,n);const{_lodMax:o}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=x0(o)),this._blurMaterial=M0(o,t,e)}return s}_compileMaterial(t){const e=new b(this._lodPlanes[0],t);this._renderer.compile(e,wr)}_sceneToCubeUV(t,e,n,s){const a=new Ge(90,1,e,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,f=h.toneMapping;h.getClearColor(tl),h.toneMapping=ni,h.autoClear=!1;const p=new pe({name:"PMREM.Background",side:Oe,depthWrite:!1,depthTest:!1}),g=new b(new Yt,p);let _=!1;const m=t.background;m?m.isColor&&(p.color.copy(m),t.background=null,_=!0):(p.color.copy(tl),_=!0);for(let d=0;d<6;d++){const S=d%3;S===0?(a.up.set(0,c[d],0),a.lookAt(l[d],0,0)):S===1?(a.up.set(0,0,c[d]),a.lookAt(0,l[d],0)):(a.up.set(0,c[d],0),a.lookAt(0,0,l[d]));const w=this._cubeSize;uo(s,S*w,d>2?w:0,w,w),h.setRenderTarget(s),_&&h.render(g,a),h.render(t,a)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=f,h.autoClear=u,t.background=m}_textureToCubeUV(t,e){const n=this._renderer,s=t.mapping===es||t.mapping===ns;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=sl()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=il());const o=s?this._cubemapMaterial:this._equirectMaterial,r=new b(this._lodPlanes[0],o),a=o.uniforms;a.envMap.value=t;const c=this._cubeSize;uo(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(r,wr)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const s=this._lodPlanes.length;for(let o=1;o<s;o++){const r=Math.sqrt(this._sigmas[o]*this._sigmas[o]-this._sigmas[o-1]*this._sigmas[o-1]),a=el[(s-o-1)%el.length];this._blur(t,o-1,o,r,a)}e.autoClear=n}_blur(t,e,n,s,o){const r=this._pingPongRenderTarget;this._halfBlur(t,r,e,n,s,"latitudinal",o),this._halfBlur(r,t,n,n,s,"longitudinal",o)}_halfBlur(t,e,n,s,o,r,a){const c=this._renderer,l=this._blurMaterial;r!=="latitudinal"&&r!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new b(this._lodPlanes[s],l),f=l.uniforms,p=this._sizeLods[n]-1,g=isFinite(o)?Math.PI/(2*p):2*Math.PI/(2*gi-1),_=o/g,m=isFinite(o)?1+Math.floor(h*_):gi;m>gi&&console.warn(`sigmaRadians, ${o}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${gi}`);const d=[];let S=0;for(let A=0;A<gi;++A){const I=A/_,M=Math.exp(-I*I/2);d.push(M),A===0?S+=M:A<m&&(S+=2*M)}for(let A=0;A<d.length;A++)d[A]=d[A]/S;f.envMap.value=t.texture,f.samples.value=m,f.weights.value=d,f.latitudinal.value=r==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:w}=this;f.dTheta.value=g,f.mipInt.value=w-n;const v=this._sizeLods[s],U=3*v*(s>w-qi?s-w+qi:0),T=4*(this._cubeSize-v);uo(e,U,T,3*v,2*v),c.setRenderTarget(e),c.render(u,wr)}}function x0(i){const t=[],e=[],n=[];let s=i;const o=i-qi+1+Qc.length;for(let r=0;r<o;r++){const a=Math.pow(2,s);e.push(a);let c=1/a;r>i-qi?c=Qc[r-i+qi-1]:r===0&&(c=0),n.push(c);const l=1/(a-2),h=-l,u=1+l,f=[h,h,u,h,u,u,h,h,u,u,h,u],p=6,g=6,_=3,m=2,d=1,S=new Float32Array(_*g*p),w=new Float32Array(m*g*p),v=new Float32Array(d*g*p);for(let T=0;T<p;T++){const A=T%3*2/3-1,I=T>2?0:-1,M=[A,I,0,A+2/3,I,0,A+2/3,I+1,0,A,I,0,A+2/3,I+1,0,A,I+1,0];S.set(M,_*g*T),w.set(f,m*g*T);const x=[T,T,T,T,T,T];v.set(x,d*g*T)}const U=new Le;U.setAttribute("position",new en(S,_)),U.setAttribute("uv",new en(w,m)),U.setAttribute("faceIndex",new en(v,d)),t.push(U),s>qi&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function nl(i,t,e){const n=new Ti(i,t,e);return n.texture.mapping=Xo,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function uo(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function M0(i,t,e){const n=new Float32Array(gi),s=new D(0,1,0);return new si({name:"SphericalGaussianBlur",defines:{n:gi,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:ic(),fragmentShader:`

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
		`,blending:ei,depthTest:!1,depthWrite:!1})}function il(){return new si({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ic(),fragmentShader:`

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
		`,blending:ei,depthTest:!1,depthWrite:!1})}function sl(){return new si({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ic(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ei,depthTest:!1,depthWrite:!1})}function ic(){return`

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
	`}function y0(i){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){const c=a.mapping,l=c===ea||c===na,h=c===es||c===ns;if(l||h){let u=t.get(a);const f=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return e===null&&(e=new La(i)),u=l?e.fromEquirectangular(a,u):e.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),u.texture;if(u!==void 0)return u.texture;{const p=a.image;return l&&p&&p.height>0||h&&p&&s(p)?(e===null&&(e=new La(i)),u=l?e.fromEquirectangular(a):e.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),a.addEventListener("dispose",o),u.texture):null}}}return a}function s(a){let c=0;const l=6;for(let h=0;h<l;h++)a[h]!==void 0&&c++;return c===l}function o(a){const c=a.target;c.removeEventListener("dispose",o);const l=t.get(c);l!==void 0&&(t.delete(c),l.dispose())}function r(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:r}}function w0(i){const t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const s=e(n);return s===null&&As("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function S0(i,t,e,n){const s={},o=new WeakMap;function r(u){const f=u.target;f.index!==null&&t.remove(f.index);for(const g in f.attributes)t.remove(f.attributes[g]);for(const g in f.morphAttributes){const _=f.morphAttributes[g];for(let m=0,d=_.length;m<d;m++)t.remove(_[m])}f.removeEventListener("dispose",r),delete s[f.id];const p=o.get(f);p&&(t.remove(p),o.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function a(u,f){return s[f.id]===!0||(f.addEventListener("dispose",r),s[f.id]=!0,e.memory.geometries++),f}function c(u){const f=u.attributes;for(const g in f)t.update(f[g],i.ARRAY_BUFFER);const p=u.morphAttributes;for(const g in p){const _=p[g];for(let m=0,d=_.length;m<d;m++)t.update(_[m],i.ARRAY_BUFFER)}}function l(u){const f=[],p=u.index,g=u.attributes.position;let _=0;if(p!==null){const S=p.array;_=p.version;for(let w=0,v=S.length;w<v;w+=3){const U=S[w+0],T=S[w+1],A=S[w+2];f.push(U,T,T,A,A,U)}}else if(g!==void 0){const S=g.array;_=g.version;for(let w=0,v=S.length/3-1;w<v;w+=3){const U=w+0,T=w+1,A=w+2;f.push(U,T,T,A,A,U)}}else return;const m=new(xh(f)?Eh:Sh)(f,1);m.version=_;const d=o.get(u);d&&t.remove(d),o.set(u,m)}function h(u){const f=o.get(u);if(f){const p=u.index;p!==null&&f.version<p.version&&l(u)}else l(u);return o.get(u)}return{get:a,update:c,getWireframeAttribute:h}}function E0(i,t,e){let n;function s(f){n=f}let o,r;function a(f){o=f.type,r=f.bytesPerElement}function c(f,p){i.drawElements(n,p,o,f*r),e.update(p,n,1)}function l(f,p,g){g!==0&&(i.drawElementsInstanced(n,p,o,f*r,g),e.update(p,n,g))}function h(f,p,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,p,0,o,f,0,g);let m=0;for(let d=0;d<g;d++)m+=p[d];e.update(m,n,1)}function u(f,p,g,_){if(g===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let d=0;d<f.length;d++)l(f[d]/r,p[d],_[d]);else{m.multiDrawElementsInstancedWEBGL(n,p,0,o,f,0,_,0,g);let d=0;for(let S=0;S<g;S++)d+=p[S]*_[S];e.update(d,n,1)}}this.setMode=s,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function T0(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(o,r,a){switch(e.calls++,r){case i.TRIANGLES:e.triangles+=a*(o/3);break;case i.LINES:e.lines+=a*(o/2);break;case i.LINE_STRIP:e.lines+=a*(o-1);break;case i.LINE_LOOP:e.lines+=a*o;break;case i.POINTS:e.points+=a*o;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",r);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function b0(i,t,e){const n=new WeakMap,s=new ue;function o(r,a,c){const l=r.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0;let f=n.get(a);if(f===void 0||f.count!==u){let x=function(){I.dispose(),n.delete(a),a.removeEventListener("dispose",x)};var p=x;f!==void 0&&f.texture.dispose();const g=a.morphAttributes.position!==void 0,_=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,d=a.morphAttributes.position||[],S=a.morphAttributes.normal||[],w=a.morphAttributes.color||[];let v=0;g===!0&&(v=1),_===!0&&(v=2),m===!0&&(v=3);let U=a.attributes.position.count*v,T=1;U>t.maxTextureSize&&(T=Math.ceil(U/t.maxTextureSize),U=t.maxTextureSize);const A=new Float32Array(U*T*4*u),I=new yh(A,U,T,u);I.type=En,I.needsUpdate=!0;const M=v*4;for(let C=0;C<u;C++){const k=d[C],G=S[C],V=w[C],J=U*T*4*C;for(let q=0;q<k.count;q++){const at=q*M;g===!0&&(s.fromBufferAttribute(k,q),A[J+at+0]=s.x,A[J+at+1]=s.y,A[J+at+2]=s.z,A[J+at+3]=0),_===!0&&(s.fromBufferAttribute(G,q),A[J+at+4]=s.x,A[J+at+5]=s.y,A[J+at+6]=s.z,A[J+at+7]=0),m===!0&&(s.fromBufferAttribute(V,q),A[J+at+8]=s.x,A[J+at+9]=s.y,A[J+at+10]=s.z,A[J+at+11]=V.itemSize===4?s.w:1)}}f={count:u,texture:I,size:new _t(U,T)},n.set(a,f),a.addEventListener("dispose",x)}if(r.isInstancedMesh===!0&&r.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",r.morphTexture,e);else{let g=0;for(let m=0;m<l.length;m++)g+=l[m];const _=a.morphTargetsRelative?1:1-g;c.getUniforms().setValue(i,"morphTargetBaseInfluence",_),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",f.texture,e),c.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:o}}function A0(i,t,e,n){let s=new WeakMap;function o(c){const l=n.render.frame,h=c.geometry,u=t.get(c,h);if(s.get(u)!==l&&(t.update(u),s.set(u,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),s.get(c)!==l&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),s.set(c,l))),c.isSkinnedMesh){const f=c.skeleton;s.get(f)!==l&&(f.update(),s.set(f,l))}return u}function r(){s=new WeakMap}function a(c){const l=c.target;l.removeEventListener("dispose",a),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:o,dispose:r}}class Ph extends Ve{constructor(t,e,n,s,o,r,a,c,l,h=Ji){if(h!==Ji&&h!==os)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Ji&&(n=Ei),n===void 0&&h===os&&(n=ss),super(null,s,o,r,a,c,h,n,l),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:tn,this.minFilter=c!==void 0?c:tn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const Lh=new Ve,ol=new Ph(1,1),Ih=new yh,Dh=new dd,Uh=new Ah,rl=[],al=[],cl=new Float32Array(16),ll=new Float32Array(9),hl=new Float32Array(4);function ds(i,t,e){const n=i[0];if(n<=0||n>0)return i;const s=t*e;let o=rl[s];if(o===void 0&&(o=new Float32Array(s),rl[s]=o),t!==0){n.toArray(o,0);for(let r=1,a=0;r!==t;++r)a+=e,i[r].toArray(o,a)}return o}function Ce(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Pe(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function qo(i,t){let e=al[t];e===void 0&&(e=new Int32Array(t),al[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function R0(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function C0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ce(e,t))return;i.uniform2fv(this.addr,t),Pe(e,t)}}function P0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Ce(e,t))return;i.uniform3fv(this.addr,t),Pe(e,t)}}function L0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ce(e,t))return;i.uniform4fv(this.addr,t),Pe(e,t)}}function I0(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ce(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Pe(e,t)}else{if(Ce(e,n))return;hl.set(n),i.uniformMatrix2fv(this.addr,!1,hl),Pe(e,n)}}function D0(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ce(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Pe(e,t)}else{if(Ce(e,n))return;ll.set(n),i.uniformMatrix3fv(this.addr,!1,ll),Pe(e,n)}}function U0(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Ce(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Pe(e,t)}else{if(Ce(e,n))return;cl.set(n),i.uniformMatrix4fv(this.addr,!1,cl),Pe(e,n)}}function N0(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function F0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ce(e,t))return;i.uniform2iv(this.addr,t),Pe(e,t)}}function O0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ce(e,t))return;i.uniform3iv(this.addr,t),Pe(e,t)}}function z0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ce(e,t))return;i.uniform4iv(this.addr,t),Pe(e,t)}}function B0(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function k0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Ce(e,t))return;i.uniform2uiv(this.addr,t),Pe(e,t)}}function H0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Ce(e,t))return;i.uniform3uiv(this.addr,t),Pe(e,t)}}function G0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Ce(e,t))return;i.uniform4uiv(this.addr,t),Pe(e,t)}}function V0(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let o;this.type===i.SAMPLER_2D_SHADOW?(ol.compareFunction=vh,o=ol):o=Lh,e.setTexture2D(t||o,s)}function W0(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||Dh,s)}function X0(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||Uh,s)}function Y0(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||Ih,s)}function q0(i){switch(i){case 5126:return R0;case 35664:return C0;case 35665:return P0;case 35666:return L0;case 35674:return I0;case 35675:return D0;case 35676:return U0;case 5124:case 35670:return N0;case 35667:case 35671:return F0;case 35668:case 35672:return O0;case 35669:case 35673:return z0;case 5125:return B0;case 36294:return k0;case 36295:return H0;case 36296:return G0;case 35678:case 36198:case 36298:case 36306:case 35682:return V0;case 35679:case 36299:case 36307:return W0;case 35680:case 36300:case 36308:case 36293:return X0;case 36289:case 36303:case 36311:case 36292:return Y0}}function $0(i,t){i.uniform1fv(this.addr,t)}function Z0(i,t){const e=ds(t,this.size,2);i.uniform2fv(this.addr,e)}function K0(i,t){const e=ds(t,this.size,3);i.uniform3fv(this.addr,e)}function J0(i,t){const e=ds(t,this.size,4);i.uniform4fv(this.addr,e)}function j0(i,t){const e=ds(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function Q0(i,t){const e=ds(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function tm(i,t){const e=ds(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function em(i,t){i.uniform1iv(this.addr,t)}function nm(i,t){i.uniform2iv(this.addr,t)}function im(i,t){i.uniform3iv(this.addr,t)}function sm(i,t){i.uniform4iv(this.addr,t)}function om(i,t){i.uniform1uiv(this.addr,t)}function rm(i,t){i.uniform2uiv(this.addr,t)}function am(i,t){i.uniform3uiv(this.addr,t)}function cm(i,t){i.uniform4uiv(this.addr,t)}function lm(i,t,e){const n=this.cache,s=t.length,o=qo(e,s);Ce(n,o)||(i.uniform1iv(this.addr,o),Pe(n,o));for(let r=0;r!==s;++r)e.setTexture2D(t[r]||Lh,o[r])}function hm(i,t,e){const n=this.cache,s=t.length,o=qo(e,s);Ce(n,o)||(i.uniform1iv(this.addr,o),Pe(n,o));for(let r=0;r!==s;++r)e.setTexture3D(t[r]||Dh,o[r])}function um(i,t,e){const n=this.cache,s=t.length,o=qo(e,s);Ce(n,o)||(i.uniform1iv(this.addr,o),Pe(n,o));for(let r=0;r!==s;++r)e.setTextureCube(t[r]||Uh,o[r])}function dm(i,t,e){const n=this.cache,s=t.length,o=qo(e,s);Ce(n,o)||(i.uniform1iv(this.addr,o),Pe(n,o));for(let r=0;r!==s;++r)e.setTexture2DArray(t[r]||Ih,o[r])}function fm(i){switch(i){case 5126:return $0;case 35664:return Z0;case 35665:return K0;case 35666:return J0;case 35674:return j0;case 35675:return Q0;case 35676:return tm;case 5124:case 35670:return em;case 35667:case 35671:return nm;case 35668:case 35672:return im;case 35669:case 35673:return sm;case 5125:return om;case 36294:return rm;case 36295:return am;case 36296:return cm;case 35678:case 36198:case 36298:case 36306:case 35682:return lm;case 35679:case 36299:case 36307:return hm;case 35680:case 36300:case 36308:case 36293:return um;case 36289:case 36303:case 36311:case 36292:return dm}}class pm{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=q0(e.type)}}class mm{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=fm(e.type)}}class gm{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const s=this.seq;for(let o=0,r=s.length;o!==r;++o){const a=s[o];a.setValue(t,e[a.id],n)}}}const Ar=/(\w+)(\])?(\[|\.)?/g;function ul(i,t){i.seq.push(t),i.map[t.id]=t}function _m(i,t,e){const n=i.name,s=n.length;for(Ar.lastIndex=0;;){const o=Ar.exec(n),r=Ar.lastIndex;let a=o[1];const c=o[2]==="]",l=o[3];if(c&&(a=a|0),l===void 0||l==="["&&r+2===s){ul(e,l===void 0?new pm(a,i,t):new mm(a,i,t));break}else{let u=e.map[a];u===void 0&&(u=new gm(a),ul(e,u)),e=u}}}class Co{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const o=t.getActiveUniform(e,s),r=t.getUniformLocation(e,o.name);_m(o,r,this)}}setValue(t,e,n,s){const o=this.map[e];o!==void 0&&o.setValue(t,n,s)}setOptional(t,e,n){const s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let o=0,r=e.length;o!==r;++o){const a=e[o],c=n[a.id];c.needsUpdate!==!1&&a.setValue(t,c.value,s)}}static seqWithValue(t,e){const n=[];for(let s=0,o=t.length;s!==o;++s){const r=t[s];r.id in e&&n.push(r)}return n}}function dl(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const vm=37297;let xm=0;function Mm(i,t){const e=i.split(`
`),n=[],s=Math.max(t-6,0),o=Math.min(t+6,e.length);for(let r=s;r<o;r++){const a=r+1;n.push(`${a===t?">":" "} ${a}: ${e[r]}`)}return n.join(`
`)}const fl=new Kt;function ym(i){ne._getMatrix(fl,ne.workingColorSpace,i);const t=`mat3( ${fl.elements.map(e=>e.toFixed(4))} )`;switch(ne.getTransfer(i)){case Yo:return[t,"LinearTransferOETF"];case he:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function pl(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";const o=/ERROR: 0:(\d+)/.exec(s);if(o){const r=parseInt(o[1]);return e.toUpperCase()+`

`+s+`

`+Mm(i.getShaderSource(t),r)}else return s}function wm(i,t){const e=ym(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function Sm(i,t){let e;switch(t){case Bu:e="Linear";break;case ku:e="Reinhard";break;case Hu:e="Cineon";break;case Wo:e="ACESFilmic";break;case Vu:e="AgX";break;case Wu:e="Neutral";break;case Gu:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const fo=new D;function Em(){ne.getLuminanceCoefficients(fo);const i=fo.x.toFixed(4),t=fo.y.toFixed(4),e=fo.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Tm(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Rs).join(`
`)}function bm(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Am(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const o=i.getActiveAttrib(t,s),r=o.name;let a=1;o.type===i.FLOAT_MAT2&&(a=2),o.type===i.FLOAT_MAT3&&(a=3),o.type===i.FLOAT_MAT4&&(a=4),e[r]={type:o.type,location:i.getAttribLocation(t,r),locationSize:a}}return e}function Rs(i){return i!==""}function ml(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function gl(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const Rm=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ia(i){return i.replace(Rm,Pm)}const Cm=new Map;function Pm(i,t){let e=jt[t];if(e===void 0){const n=Cm.get(t);if(n!==void 0)e=jt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Ia(e)}const Lm=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function _l(i){return i.replace(Lm,Im)}function Im(i,t,e,n){let s="";for(let o=parseInt(t);o<parseInt(e);o++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+o+" ]").replace(/UNROLLED_LOOP_INDEX/g,o);return s}function vl(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}function Dm(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===rh?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===ah?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Un&&(t="SHADOWMAP_TYPE_VSM"),t}function Um(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case es:case ns:t="ENVMAP_TYPE_CUBE";break;case Xo:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Nm(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case ns:t="ENVMAP_MODE_REFRACTION";break}return t}function Fm(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Xa:t="ENVMAP_BLENDING_MULTIPLY";break;case Ou:t="ENVMAP_BLENDING_MIX";break;case zu:t="ENVMAP_BLENDING_ADD";break}return t}function Om(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function zm(i,t,e,n){const s=i.getContext(),o=e.defines;let r=e.vertexShader,a=e.fragmentShader;const c=Dm(e),l=Um(e),h=Nm(e),u=Fm(e),f=Om(e),p=Tm(e),g=bm(o),_=s.createProgram();let m,d,S=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Rs).join(`
`),m.length>0&&(m+=`
`),d=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Rs).join(`
`),d.length>0&&(d+=`
`)):(m=[vl(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Rs).join(`
`),d=[vl(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==ni?"#define TONE_MAPPING":"",e.toneMapping!==ni?jt.tonemapping_pars_fragment:"",e.toneMapping!==ni?Sm("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",jt.colorspace_pars_fragment,wm("linearToOutputTexel",e.outputColorSpace),Em(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Rs).join(`
`)),r=Ia(r),r=ml(r,e),r=gl(r,e),a=Ia(a),a=ml(a,e),a=gl(a,e),r=_l(r),a=_l(a),e.isRawShaderMaterial!==!0&&(S=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,d=["#define varying in",e.glslVersion===Ic?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Ic?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);const w=S+m+r,v=S+d+a,U=dl(s,s.VERTEX_SHADER,w),T=dl(s,s.FRAGMENT_SHADER,v);s.attachShader(_,U),s.attachShader(_,T),e.index0AttributeName!==void 0?s.bindAttribLocation(_,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function A(C){if(i.debug.checkShaderErrors){const k=s.getProgramInfoLog(_).trim(),G=s.getShaderInfoLog(U).trim(),V=s.getShaderInfoLog(T).trim();let J=!0,q=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(J=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,_,U,T);else{const at=pl(s,U,"vertex"),K=pl(s,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+C.name+`
Material Type: `+C.type+`

Program Info Log: `+k+`
`+at+`
`+K)}else k!==""?console.warn("THREE.WebGLProgram: Program Info Log:",k):(G===""||V==="")&&(q=!1);q&&(C.diagnostics={runnable:J,programLog:k,vertexShader:{log:G,prefix:m},fragmentShader:{log:V,prefix:d}})}s.deleteShader(U),s.deleteShader(T),I=new Co(s,_),M=Am(s,_)}let I;this.getUniforms=function(){return I===void 0&&A(this),I};let M;this.getAttributes=function(){return M===void 0&&A(this),M};let x=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return x===!1&&(x=s.getProgramParameter(_,vm)),x},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=xm++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=U,this.fragmentShader=T,this}let Bm=0;class km{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),o=this._getShaderStage(n),r=this._getShaderCacheForMaterial(t);return r.has(s)===!1&&(r.add(s),s.usedTimes++),r.has(o)===!1&&(r.add(o),o.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new Hm(t),e.set(t,n)),n}}class Hm{constructor(t){this.id=Bm++,this.code=t,this.usedTimes=0}}function Gm(i,t,e,n,s,o,r){const a=new ec,c=new km,l=new Set,h=[],u=s.logarithmicDepthBuffer,f=s.vertexTextures;let p=s.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(M){return l.add(M),M===0?"uv":`uv${M}`}function m(M,x,C,k,G){const V=k.fog,J=G.geometry,q=M.isMeshStandardMaterial?k.environment:null,at=(M.isMeshStandardMaterial?e:t).get(M.envMap||q),K=at&&at.mapping===Xo?at.image.height:null,pt=g[M.type];M.precision!==null&&(p=s.getMaxPrecision(M.precision),p!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",p,"instead."));const wt=J.morphAttributes.position||J.morphAttributes.normal||J.morphAttributes.color,dt=wt!==void 0?wt.length:0;let Vt=0;J.morphAttributes.position!==void 0&&(Vt=1),J.morphAttributes.normal!==void 0&&(Vt=2),J.morphAttributes.color!==void 0&&(Vt=3);let ut,F,Q,ft;if(pt){const ae=yn[pt];ut=ae.vertexShader,F=ae.fragmentShader}else ut=M.vertexShader,F=M.fragmentShader,c.update(M),Q=c.getVertexShaderID(M),ft=c.getFragmentShaderID(M);const ot=i.getRenderTarget(),mt=i.state.buffers.depth.getReversed(),Mt=G.isInstancedMesh===!0,Et=G.isBatchedMesh===!0,Wt=!!M.map,j=!!M.matcap,nt=!!at,P=!!M.aoMap,At=!!M.lightMap,W=!!M.bumpMap,et=!!M.normalMap,it=!!M.displacementMap,Ut=!!M.emissiveMap,vt=!!M.metalnessMap,R=!!M.roughnessMap,y=M.anisotropy>0,L=M.clearcoat>0,N=M.dispersion>0,X=M.iridescence>0,Y=M.sheen>0,gt=M.transmission>0,ct=y&&!!M.anisotropyMap,St=L&&!!M.clearcoatMap,Gt=L&&!!M.clearcoatNormalMap,ht=L&&!!M.clearcoatRoughnessMap,yt=X&&!!M.iridescenceMap,Nt=X&&!!M.iridescenceThicknessMap,Ft=Y&&!!M.sheenColorMap,Ct=Y&&!!M.sheenRoughnessMap,qt=!!M.specularMap,Jt=!!M.specularColorMap,de=!!M.specularIntensityMap,O=gt&&!!M.transmissionMap,bt=gt&&!!M.thicknessMap,tt=!!M.gradientMap,lt=!!M.alphaMap,Dt=M.alphaTest>0,Pt=!!M.alphaHash,$t=!!M.extensions;let Me=ni;M.toneMapped&&(ot===null||ot.isXRRenderTarget===!0)&&(Me=i.toneMapping);const ze={shaderID:pt,shaderType:M.type,shaderName:M.name,vertexShader:ut,fragmentShader:F,defines:M.defines,customVertexShaderID:Q,customFragmentShaderID:ft,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:p,batching:Et,batchingColor:Et&&G._colorsTexture!==null,instancing:Mt,instancingColor:Mt&&G.instanceColor!==null,instancingMorph:Mt&&G.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:ot===null?i.outputColorSpace:ot.isXRRenderTarget===!0?ot.texture.colorSpace:cs,alphaToCoverage:!!M.alphaToCoverage,map:Wt,matcap:j,envMap:nt,envMapMode:nt&&at.mapping,envMapCubeUVHeight:K,aoMap:P,lightMap:At,bumpMap:W,normalMap:et,displacementMap:f&&it,emissiveMap:Ut,normalMapObjectSpace:et&&M.normalMapType===$u,normalMapTangentSpace:et&&M.normalMapType===Qa,metalnessMap:vt,roughnessMap:R,anisotropy:y,anisotropyMap:ct,clearcoat:L,clearcoatMap:St,clearcoatNormalMap:Gt,clearcoatRoughnessMap:ht,dispersion:N,iridescence:X,iridescenceMap:yt,iridescenceThicknessMap:Nt,sheen:Y,sheenColorMap:Ft,sheenRoughnessMap:Ct,specularMap:qt,specularColorMap:Jt,specularIntensityMap:de,transmission:gt,transmissionMap:O,thicknessMap:bt,gradientMap:tt,opaque:M.transparent===!1&&M.blending===Ki&&M.alphaToCoverage===!1,alphaMap:lt,alphaTest:Dt,alphaHash:Pt,combine:M.combine,mapUv:Wt&&_(M.map.channel),aoMapUv:P&&_(M.aoMap.channel),lightMapUv:At&&_(M.lightMap.channel),bumpMapUv:W&&_(M.bumpMap.channel),normalMapUv:et&&_(M.normalMap.channel),displacementMapUv:it&&_(M.displacementMap.channel),emissiveMapUv:Ut&&_(M.emissiveMap.channel),metalnessMapUv:vt&&_(M.metalnessMap.channel),roughnessMapUv:R&&_(M.roughnessMap.channel),anisotropyMapUv:ct&&_(M.anisotropyMap.channel),clearcoatMapUv:St&&_(M.clearcoatMap.channel),clearcoatNormalMapUv:Gt&&_(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ht&&_(M.clearcoatRoughnessMap.channel),iridescenceMapUv:yt&&_(M.iridescenceMap.channel),iridescenceThicknessMapUv:Nt&&_(M.iridescenceThicknessMap.channel),sheenColorMapUv:Ft&&_(M.sheenColorMap.channel),sheenRoughnessMapUv:Ct&&_(M.sheenRoughnessMap.channel),specularMapUv:qt&&_(M.specularMap.channel),specularColorMapUv:Jt&&_(M.specularColorMap.channel),specularIntensityMapUv:de&&_(M.specularIntensityMap.channel),transmissionMapUv:O&&_(M.transmissionMap.channel),thicknessMapUv:bt&&_(M.thicknessMap.channel),alphaMapUv:lt&&_(M.alphaMap.channel),vertexTangents:!!J.attributes.tangent&&(et||y),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!J.attributes.color&&J.attributes.color.itemSize===4,pointsUvs:G.isPoints===!0&&!!J.attributes.uv&&(Wt||lt),fog:!!V,useFog:M.fog===!0,fogExp2:!!V&&V.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:mt,skinning:G.isSkinnedMesh===!0,morphTargets:J.morphAttributes.position!==void 0,morphNormals:J.morphAttributes.normal!==void 0,morphColors:J.morphAttributes.color!==void 0,morphTargetsCount:dt,morphTextureStride:Vt,numDirLights:x.directional.length,numPointLights:x.point.length,numSpotLights:x.spot.length,numSpotLightMaps:x.spotLightMap.length,numRectAreaLights:x.rectArea.length,numHemiLights:x.hemi.length,numDirLightShadows:x.directionalShadowMap.length,numPointLightShadows:x.pointShadowMap.length,numSpotLightShadows:x.spotShadowMap.length,numSpotLightShadowsWithMaps:x.numSpotLightShadowsWithMaps,numLightProbes:x.numLightProbes,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:M.dithering,shadowMapEnabled:i.shadowMap.enabled&&C.length>0,shadowMapType:i.shadowMap.type,toneMapping:Me,decodeVideoTexture:Wt&&M.map.isVideoTexture===!0&&ne.getTransfer(M.map.colorSpace)===he,decodeVideoTextureEmissive:Ut&&M.emissiveMap.isVideoTexture===!0&&ne.getTransfer(M.emissiveMap.colorSpace)===he,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===be,flipSided:M.side===Oe,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:$t&&M.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:($t&&M.extensions.multiDraw===!0||Et)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return ze.vertexUv1s=l.has(1),ze.vertexUv2s=l.has(2),ze.vertexUv3s=l.has(3),l.clear(),ze}function d(M){const x=[];if(M.shaderID?x.push(M.shaderID):(x.push(M.customVertexShaderID),x.push(M.customFragmentShaderID)),M.defines!==void 0)for(const C in M.defines)x.push(C),x.push(M.defines[C]);return M.isRawShaderMaterial===!1&&(S(x,M),w(x,M),x.push(i.outputColorSpace)),x.push(M.customProgramCacheKey),x.join()}function S(M,x){M.push(x.precision),M.push(x.outputColorSpace),M.push(x.envMapMode),M.push(x.envMapCubeUVHeight),M.push(x.mapUv),M.push(x.alphaMapUv),M.push(x.lightMapUv),M.push(x.aoMapUv),M.push(x.bumpMapUv),M.push(x.normalMapUv),M.push(x.displacementMapUv),M.push(x.emissiveMapUv),M.push(x.metalnessMapUv),M.push(x.roughnessMapUv),M.push(x.anisotropyMapUv),M.push(x.clearcoatMapUv),M.push(x.clearcoatNormalMapUv),M.push(x.clearcoatRoughnessMapUv),M.push(x.iridescenceMapUv),M.push(x.iridescenceThicknessMapUv),M.push(x.sheenColorMapUv),M.push(x.sheenRoughnessMapUv),M.push(x.specularMapUv),M.push(x.specularColorMapUv),M.push(x.specularIntensityMapUv),M.push(x.transmissionMapUv),M.push(x.thicknessMapUv),M.push(x.combine),M.push(x.fogExp2),M.push(x.sizeAttenuation),M.push(x.morphTargetsCount),M.push(x.morphAttributeCount),M.push(x.numDirLights),M.push(x.numPointLights),M.push(x.numSpotLights),M.push(x.numSpotLightMaps),M.push(x.numHemiLights),M.push(x.numRectAreaLights),M.push(x.numDirLightShadows),M.push(x.numPointLightShadows),M.push(x.numSpotLightShadows),M.push(x.numSpotLightShadowsWithMaps),M.push(x.numLightProbes),M.push(x.shadowMapType),M.push(x.toneMapping),M.push(x.numClippingPlanes),M.push(x.numClipIntersection),M.push(x.depthPacking)}function w(M,x){a.disableAll(),x.supportsVertexTextures&&a.enable(0),x.instancing&&a.enable(1),x.instancingColor&&a.enable(2),x.instancingMorph&&a.enable(3),x.matcap&&a.enable(4),x.envMap&&a.enable(5),x.normalMapObjectSpace&&a.enable(6),x.normalMapTangentSpace&&a.enable(7),x.clearcoat&&a.enable(8),x.iridescence&&a.enable(9),x.alphaTest&&a.enable(10),x.vertexColors&&a.enable(11),x.vertexAlphas&&a.enable(12),x.vertexUv1s&&a.enable(13),x.vertexUv2s&&a.enable(14),x.vertexUv3s&&a.enable(15),x.vertexTangents&&a.enable(16),x.anisotropy&&a.enable(17),x.alphaHash&&a.enable(18),x.batching&&a.enable(19),x.dispersion&&a.enable(20),x.batchingColor&&a.enable(21),M.push(a.mask),a.disableAll(),x.fog&&a.enable(0),x.useFog&&a.enable(1),x.flatShading&&a.enable(2),x.logarithmicDepthBuffer&&a.enable(3),x.reverseDepthBuffer&&a.enable(4),x.skinning&&a.enable(5),x.morphTargets&&a.enable(6),x.morphNormals&&a.enable(7),x.morphColors&&a.enable(8),x.premultipliedAlpha&&a.enable(9),x.shadowMapEnabled&&a.enable(10),x.doubleSided&&a.enable(11),x.flipSided&&a.enable(12),x.useDepthPacking&&a.enable(13),x.dithering&&a.enable(14),x.transmission&&a.enable(15),x.sheen&&a.enable(16),x.opaque&&a.enable(17),x.pointsUvs&&a.enable(18),x.decodeVideoTexture&&a.enable(19),x.decodeVideoTextureEmissive&&a.enable(20),x.alphaToCoverage&&a.enable(21),M.push(a.mask)}function v(M){const x=g[M.type];let C;if(x){const k=yn[x];C=Ed.clone(k.uniforms)}else C=M.uniforms;return C}function U(M,x){let C;for(let k=0,G=h.length;k<G;k++){const V=h[k];if(V.cacheKey===x){C=V,++C.usedTimes;break}}return C===void 0&&(C=new zm(i,x,M,o),h.push(C)),C}function T(M){if(--M.usedTimes===0){const x=h.indexOf(M);h[x]=h[h.length-1],h.pop(),M.destroy()}}function A(M){c.remove(M)}function I(){c.dispose()}return{getParameters:m,getProgramCacheKey:d,getUniforms:v,acquireProgram:U,releaseProgram:T,releaseShaderCache:A,programs:h,dispose:I}}function Vm(){let i=new WeakMap;function t(r){return i.has(r)}function e(r){let a=i.get(r);return a===void 0&&(a={},i.set(r,a)),a}function n(r){i.delete(r)}function s(r,a,c){i.get(r)[a]=c}function o(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:o}}function Wm(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function xl(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Ml(){const i=[];let t=0;const e=[],n=[],s=[];function o(){t=0,e.length=0,n.length=0,s.length=0}function r(u,f,p,g,_,m){let d=i[t];return d===void 0?(d={id:u.id,object:u,geometry:f,material:p,groupOrder:g,renderOrder:u.renderOrder,z:_,group:m},i[t]=d):(d.id=u.id,d.object=u,d.geometry=f,d.material=p,d.groupOrder=g,d.renderOrder=u.renderOrder,d.z=_,d.group=m),t++,d}function a(u,f,p,g,_,m){const d=r(u,f,p,g,_,m);p.transmission>0?n.push(d):p.transparent===!0?s.push(d):e.push(d)}function c(u,f,p,g,_,m){const d=r(u,f,p,g,_,m);p.transmission>0?n.unshift(d):p.transparent===!0?s.unshift(d):e.unshift(d)}function l(u,f){e.length>1&&e.sort(u||Wm),n.length>1&&n.sort(f||xl),s.length>1&&s.sort(f||xl)}function h(){for(let u=t,f=i.length;u<f;u++){const p=i[u];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:n,transparent:s,init:o,push:a,unshift:c,finish:h,sort:l}}function Xm(){let i=new WeakMap;function t(n,s){const o=i.get(n);let r;return o===void 0?(r=new Ml,i.set(n,[r])):s>=o.length?(r=new Ml,o.push(r)):r=o[s],r}function e(){i=new WeakMap}return{get:t,dispose:e}}function Ym(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new D,color:new Rt};break;case"SpotLight":e={position:new D,direction:new D,color:new Rt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new D,color:new Rt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new D,skyColor:new Rt,groundColor:new Rt};break;case"RectAreaLight":e={color:new Rt,position:new D,halfWidth:new D,halfHeight:new D};break}return i[t.id]=e,e}}}function qm(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new _t};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new _t};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new _t,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let $m=0;function Zm(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function Km(i){const t=new Ym,e=qm(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new D);const s=new D,o=new le,r=new le;function a(l){let h=0,u=0,f=0;for(let M=0;M<9;M++)n.probe[M].set(0,0,0);let p=0,g=0,_=0,m=0,d=0,S=0,w=0,v=0,U=0,T=0,A=0;l.sort(Zm);for(let M=0,x=l.length;M<x;M++){const C=l[M],k=C.color,G=C.intensity,V=C.distance,J=C.shadow&&C.shadow.map?C.shadow.map.texture:null;if(C.isAmbientLight)h+=k.r*G,u+=k.g*G,f+=k.b*G;else if(C.isLightProbe){for(let q=0;q<9;q++)n.probe[q].addScaledVector(C.sh.coefficients[q],G);A++}else if(C.isDirectionalLight){const q=t.get(C);if(q.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){const at=C.shadow,K=e.get(C);K.shadowIntensity=at.intensity,K.shadowBias=at.bias,K.shadowNormalBias=at.normalBias,K.shadowRadius=at.radius,K.shadowMapSize=at.mapSize,n.directionalShadow[p]=K,n.directionalShadowMap[p]=J,n.directionalShadowMatrix[p]=C.shadow.matrix,S++}n.directional[p]=q,p++}else if(C.isSpotLight){const q=t.get(C);q.position.setFromMatrixPosition(C.matrixWorld),q.color.copy(k).multiplyScalar(G),q.distance=V,q.coneCos=Math.cos(C.angle),q.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),q.decay=C.decay,n.spot[_]=q;const at=C.shadow;if(C.map&&(n.spotLightMap[U]=C.map,U++,at.updateMatrices(C),C.castShadow&&T++),n.spotLightMatrix[_]=at.matrix,C.castShadow){const K=e.get(C);K.shadowIntensity=at.intensity,K.shadowBias=at.bias,K.shadowNormalBias=at.normalBias,K.shadowRadius=at.radius,K.shadowMapSize=at.mapSize,n.spotShadow[_]=K,n.spotShadowMap[_]=J,v++}_++}else if(C.isRectAreaLight){const q=t.get(C);q.color.copy(k).multiplyScalar(G),q.halfWidth.set(C.width*.5,0,0),q.halfHeight.set(0,C.height*.5,0),n.rectArea[m]=q,m++}else if(C.isPointLight){const q=t.get(C);if(q.color.copy(C.color).multiplyScalar(C.intensity),q.distance=C.distance,q.decay=C.decay,C.castShadow){const at=C.shadow,K=e.get(C);K.shadowIntensity=at.intensity,K.shadowBias=at.bias,K.shadowNormalBias=at.normalBias,K.shadowRadius=at.radius,K.shadowMapSize=at.mapSize,K.shadowCameraNear=at.camera.near,K.shadowCameraFar=at.camera.far,n.pointShadow[g]=K,n.pointShadowMap[g]=J,n.pointShadowMatrix[g]=C.shadow.matrix,w++}n.point[g]=q,g++}else if(C.isHemisphereLight){const q=t.get(C);q.skyColor.copy(C.color).multiplyScalar(G),q.groundColor.copy(C.groundColor).multiplyScalar(G),n.hemi[d]=q,d++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Tt.LTC_FLOAT_1,n.rectAreaLTC2=Tt.LTC_FLOAT_2):(n.rectAreaLTC1=Tt.LTC_HALF_1,n.rectAreaLTC2=Tt.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=f;const I=n.hash;(I.directionalLength!==p||I.pointLength!==g||I.spotLength!==_||I.rectAreaLength!==m||I.hemiLength!==d||I.numDirectionalShadows!==S||I.numPointShadows!==w||I.numSpotShadows!==v||I.numSpotMaps!==U||I.numLightProbes!==A)&&(n.directional.length=p,n.spot.length=_,n.rectArea.length=m,n.point.length=g,n.hemi.length=d,n.directionalShadow.length=S,n.directionalShadowMap.length=S,n.pointShadow.length=w,n.pointShadowMap.length=w,n.spotShadow.length=v,n.spotShadowMap.length=v,n.directionalShadowMatrix.length=S,n.pointShadowMatrix.length=w,n.spotLightMatrix.length=v+U-T,n.spotLightMap.length=U,n.numSpotLightShadowsWithMaps=T,n.numLightProbes=A,I.directionalLength=p,I.pointLength=g,I.spotLength=_,I.rectAreaLength=m,I.hemiLength=d,I.numDirectionalShadows=S,I.numPointShadows=w,I.numSpotShadows=v,I.numSpotMaps=U,I.numLightProbes=A,n.version=$m++)}function c(l,h){let u=0,f=0,p=0,g=0,_=0;const m=h.matrixWorldInverse;for(let d=0,S=l.length;d<S;d++){const w=l[d];if(w.isDirectionalLight){const v=n.directional[u];v.direction.setFromMatrixPosition(w.matrixWorld),s.setFromMatrixPosition(w.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(m),u++}else if(w.isSpotLight){const v=n.spot[p];v.position.setFromMatrixPosition(w.matrixWorld),v.position.applyMatrix4(m),v.direction.setFromMatrixPosition(w.matrixWorld),s.setFromMatrixPosition(w.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(m),p++}else if(w.isRectAreaLight){const v=n.rectArea[g];v.position.setFromMatrixPosition(w.matrixWorld),v.position.applyMatrix4(m),r.identity(),o.copy(w.matrixWorld),o.premultiply(m),r.extractRotation(o),v.halfWidth.set(w.width*.5,0,0),v.halfHeight.set(0,w.height*.5,0),v.halfWidth.applyMatrix4(r),v.halfHeight.applyMatrix4(r),g++}else if(w.isPointLight){const v=n.point[f];v.position.setFromMatrixPosition(w.matrixWorld),v.position.applyMatrix4(m),f++}else if(w.isHemisphereLight){const v=n.hemi[_];v.direction.setFromMatrixPosition(w.matrixWorld),v.direction.transformDirection(m),_++}}}return{setup:a,setupView:c,state:n}}function yl(i){const t=new Km(i),e=[],n=[];function s(h){l.camera=h,e.length=0,n.length=0}function o(h){e.push(h)}function r(h){n.push(h)}function a(){t.setup(e)}function c(h){t.setupView(e,h)}const l={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:l,setupLights:a,setupLightsView:c,pushLight:o,pushShadow:r}}function Jm(i){let t=new WeakMap;function e(s,o=0){const r=t.get(s);let a;return r===void 0?(a=new yl(i),t.set(s,[a])):o>=r.length?(a=new yl(i),r.push(a)):a=r[o],a}function n(){t=new WeakMap}return{get:e,dispose:n}}class jm extends Ri{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=Yu,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Qm extends Ri{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const tg=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,eg=`uniform sampler2D shadow_pass;
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
}`;function ng(i,t,e){let n=new nc;const s=new _t,o=new _t,r=new ue,a=new jm({depthPacking:qu}),c=new Qm,l={},h=e.maxTextureSize,u={[ii]:Oe,[Oe]:ii,[be]:be},f=new si({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new _t},radius:{value:4}},vertexShader:tg,fragmentShader:eg}),p=f.clone();p.defines.HORIZONTAL_PASS=1;const g=new Le;g.setAttribute("position",new en(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new b(g,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=rh;let d=this.type;this.render=function(T,A,I){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||T.length===0)return;const M=i.getRenderTarget(),x=i.getActiveCubeFace(),C=i.getActiveMipmapLevel(),k=i.state;k.setBlending(ei),k.buffers.color.setClear(1,1,1,1),k.buffers.depth.setTest(!0),k.setScissorTest(!1);const G=d!==Un&&this.type===Un,V=d===Un&&this.type!==Un;for(let J=0,q=T.length;J<q;J++){const at=T[J],K=at.shadow;if(K===void 0){console.warn("THREE.WebGLShadowMap:",at,"has no shadow.");continue}if(K.autoUpdate===!1&&K.needsUpdate===!1)continue;s.copy(K.mapSize);const pt=K.getFrameExtents();if(s.multiply(pt),o.copy(K.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(o.x=Math.floor(h/pt.x),s.x=o.x*pt.x,K.mapSize.x=o.x),s.y>h&&(o.y=Math.floor(h/pt.y),s.y=o.y*pt.y,K.mapSize.y=o.y)),K.map===null||G===!0||V===!0){const dt=this.type!==Un?{minFilter:tn,magFilter:tn}:{};K.map!==null&&K.map.dispose(),K.map=new Ti(s.x,s.y,dt),K.map.texture.name=at.name+".shadowMap",K.camera.updateProjectionMatrix()}i.setRenderTarget(K.map),i.clear();const wt=K.getViewportCount();for(let dt=0;dt<wt;dt++){const Vt=K.getViewport(dt);r.set(o.x*Vt.x,o.y*Vt.y,o.x*Vt.z,o.y*Vt.w),k.viewport(r),K.updateMatrices(at,dt),n=K.getFrustum(),v(A,I,K.camera,at,this.type)}K.isPointLightShadow!==!0&&this.type===Un&&S(K,I),K.needsUpdate=!1}d=this.type,m.needsUpdate=!1,i.setRenderTarget(M,x,C)};function S(T,A){const I=t.update(_);f.defines.VSM_SAMPLES!==T.blurSamples&&(f.defines.VSM_SAMPLES=T.blurSamples,p.defines.VSM_SAMPLES=T.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new Ti(s.x,s.y)),f.uniforms.shadow_pass.value=T.map.texture,f.uniforms.resolution.value=T.mapSize,f.uniforms.radius.value=T.radius,i.setRenderTarget(T.mapPass),i.clear(),i.renderBufferDirect(A,null,I,f,_,null),p.uniforms.shadow_pass.value=T.mapPass.texture,p.uniforms.resolution.value=T.mapSize,p.uniforms.radius.value=T.radius,i.setRenderTarget(T.map),i.clear(),i.renderBufferDirect(A,null,I,p,_,null)}function w(T,A,I,M){let x=null;const C=I.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(C!==void 0)x=C;else if(x=I.isPointLight===!0?c:a,i.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0){const k=x.uuid,G=A.uuid;let V=l[k];V===void 0&&(V={},l[k]=V);let J=V[G];J===void 0&&(J=x.clone(),V[G]=J,A.addEventListener("dispose",U)),x=J}if(x.visible=A.visible,x.wireframe=A.wireframe,M===Un?x.side=A.shadowSide!==null?A.shadowSide:A.side:x.side=A.shadowSide!==null?A.shadowSide:u[A.side],x.alphaMap=A.alphaMap,x.alphaTest=A.alphaTest,x.map=A.map,x.clipShadows=A.clipShadows,x.clippingPlanes=A.clippingPlanes,x.clipIntersection=A.clipIntersection,x.displacementMap=A.displacementMap,x.displacementScale=A.displacementScale,x.displacementBias=A.displacementBias,x.wireframeLinewidth=A.wireframeLinewidth,x.linewidth=A.linewidth,I.isPointLight===!0&&x.isMeshDistanceMaterial===!0){const k=i.properties.get(x);k.light=I}return x}function v(T,A,I,M,x){if(T.visible===!1)return;if(T.layers.test(A.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&x===Un)&&(!T.frustumCulled||n.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(I.matrixWorldInverse,T.matrixWorld);const G=t.update(T),V=T.material;if(Array.isArray(V)){const J=G.groups;for(let q=0,at=J.length;q<at;q++){const K=J[q],pt=V[K.materialIndex];if(pt&&pt.visible){const wt=w(T,pt,M,x);T.onBeforeShadow(i,T,A,I,G,wt,K),i.renderBufferDirect(I,null,G,wt,T,K),T.onAfterShadow(i,T,A,I,G,wt,K)}}}else if(V.visible){const J=w(T,V,M,x);T.onBeforeShadow(i,T,A,I,G,J,null),i.renderBufferDirect(I,null,G,J,T,null),T.onAfterShadow(i,T,A,I,G,J,null)}}const k=T.children;for(let G=0,V=k.length;G<V;G++)v(k[G],A,I,M,x)}function U(T){T.target.removeEventListener("dispose",U);for(const I in l){const M=l[I],x=T.target.uuid;x in M&&(M[x].dispose(),delete M[x])}}}const ig={[$r]:Zr,[Kr]:Qr,[Jr]:ta,[ts]:jr,[Zr]:$r,[Qr]:Kr,[ta]:Jr,[jr]:ts};function sg(i,t){function e(){let O=!1;const bt=new ue;let tt=null;const lt=new ue(0,0,0,0);return{setMask:function(Dt){tt!==Dt&&!O&&(i.colorMask(Dt,Dt,Dt,Dt),tt=Dt)},setLocked:function(Dt){O=Dt},setClear:function(Dt,Pt,$t,Me,ze){ze===!0&&(Dt*=Me,Pt*=Me,$t*=Me),bt.set(Dt,Pt,$t,Me),lt.equals(bt)===!1&&(i.clearColor(Dt,Pt,$t,Me),lt.copy(bt))},reset:function(){O=!1,tt=null,lt.set(-1,0,0,0)}}}function n(){let O=!1,bt=!1,tt=null,lt=null,Dt=null;return{setReversed:function(Pt){if(bt!==Pt){const $t=t.get("EXT_clip_control");bt?$t.clipControlEXT($t.LOWER_LEFT_EXT,$t.ZERO_TO_ONE_EXT):$t.clipControlEXT($t.LOWER_LEFT_EXT,$t.NEGATIVE_ONE_TO_ONE_EXT);const Me=Dt;Dt=null,this.setClear(Me)}bt=Pt},getReversed:function(){return bt},setTest:function(Pt){Pt?ot(i.DEPTH_TEST):mt(i.DEPTH_TEST)},setMask:function(Pt){tt!==Pt&&!O&&(i.depthMask(Pt),tt=Pt)},setFunc:function(Pt){if(bt&&(Pt=ig[Pt]),lt!==Pt){switch(Pt){case $r:i.depthFunc(i.NEVER);break;case Zr:i.depthFunc(i.ALWAYS);break;case Kr:i.depthFunc(i.LESS);break;case ts:i.depthFunc(i.LEQUAL);break;case Jr:i.depthFunc(i.EQUAL);break;case jr:i.depthFunc(i.GEQUAL);break;case Qr:i.depthFunc(i.GREATER);break;case ta:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}lt=Pt}},setLocked:function(Pt){O=Pt},setClear:function(Pt){Dt!==Pt&&(bt&&(Pt=1-Pt),i.clearDepth(Pt),Dt=Pt)},reset:function(){O=!1,tt=null,lt=null,Dt=null,bt=!1}}}function s(){let O=!1,bt=null,tt=null,lt=null,Dt=null,Pt=null,$t=null,Me=null,ze=null;return{setTest:function(ae){O||(ae?ot(i.STENCIL_TEST):mt(i.STENCIL_TEST))},setMask:function(ae){bt!==ae&&!O&&(i.stencilMask(ae),bt=ae)},setFunc:function(ae,an,An){(tt!==ae||lt!==an||Dt!==An)&&(i.stencilFunc(ae,an,An),tt=ae,lt=an,Dt=An)},setOp:function(ae,an,An){(Pt!==ae||$t!==an||Me!==An)&&(i.stencilOp(ae,an,An),Pt=ae,$t=an,Me=An)},setLocked:function(ae){O=ae},setClear:function(ae){ze!==ae&&(i.clearStencil(ae),ze=ae)},reset:function(){O=!1,bt=null,tt=null,lt=null,Dt=null,Pt=null,$t=null,Me=null,ze=null}}}const o=new e,r=new n,a=new s,c=new WeakMap,l=new WeakMap;let h={},u={},f=new WeakMap,p=[],g=null,_=!1,m=null,d=null,S=null,w=null,v=null,U=null,T=null,A=new Rt(0,0,0),I=0,M=!1,x=null,C=null,k=null,G=null,V=null;const J=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let q=!1,at=0;const K=i.getParameter(i.VERSION);K.indexOf("WebGL")!==-1?(at=parseFloat(/^WebGL (\d)/.exec(K)[1]),q=at>=1):K.indexOf("OpenGL ES")!==-1&&(at=parseFloat(/^OpenGL ES (\d)/.exec(K)[1]),q=at>=2);let pt=null,wt={};const dt=i.getParameter(i.SCISSOR_BOX),Vt=i.getParameter(i.VIEWPORT),ut=new ue().fromArray(dt),F=new ue().fromArray(Vt);function Q(O,bt,tt,lt){const Dt=new Uint8Array(4),Pt=i.createTexture();i.bindTexture(O,Pt),i.texParameteri(O,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(O,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let $t=0;$t<tt;$t++)O===i.TEXTURE_3D||O===i.TEXTURE_2D_ARRAY?i.texImage3D(bt,0,i.RGBA,1,1,lt,0,i.RGBA,i.UNSIGNED_BYTE,Dt):i.texImage2D(bt+$t,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Dt);return Pt}const ft={};ft[i.TEXTURE_2D]=Q(i.TEXTURE_2D,i.TEXTURE_2D,1),ft[i.TEXTURE_CUBE_MAP]=Q(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),ft[i.TEXTURE_2D_ARRAY]=Q(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),ft[i.TEXTURE_3D]=Q(i.TEXTURE_3D,i.TEXTURE_3D,1,1),o.setClear(0,0,0,1),r.setClear(1),a.setClear(0),ot(i.DEPTH_TEST),r.setFunc(ts),W(!1),et(bc),ot(i.CULL_FACE),P(ei);function ot(O){h[O]!==!0&&(i.enable(O),h[O]=!0)}function mt(O){h[O]!==!1&&(i.disable(O),h[O]=!1)}function Mt(O,bt){return u[O]!==bt?(i.bindFramebuffer(O,bt),u[O]=bt,O===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=bt),O===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=bt),!0):!1}function Et(O,bt){let tt=p,lt=!1;if(O){tt=f.get(bt),tt===void 0&&(tt=[],f.set(bt,tt));const Dt=O.textures;if(tt.length!==Dt.length||tt[0]!==i.COLOR_ATTACHMENT0){for(let Pt=0,$t=Dt.length;Pt<$t;Pt++)tt[Pt]=i.COLOR_ATTACHMENT0+Pt;tt.length=Dt.length,lt=!0}}else tt[0]!==i.BACK&&(tt[0]=i.BACK,lt=!0);lt&&i.drawBuffers(tt)}function Wt(O){return g!==O?(i.useProgram(O),g=O,!0):!1}const j={[mi]:i.FUNC_ADD,[Mu]:i.FUNC_SUBTRACT,[yu]:i.FUNC_REVERSE_SUBTRACT};j[wu]=i.MIN,j[Su]=i.MAX;const nt={[Eu]:i.ZERO,[Tu]:i.ONE,[bu]:i.SRC_COLOR,[Yr]:i.SRC_ALPHA,[Iu]:i.SRC_ALPHA_SATURATE,[Pu]:i.DST_COLOR,[Ru]:i.DST_ALPHA,[Au]:i.ONE_MINUS_SRC_COLOR,[qr]:i.ONE_MINUS_SRC_ALPHA,[Lu]:i.ONE_MINUS_DST_COLOR,[Cu]:i.ONE_MINUS_DST_ALPHA,[Du]:i.CONSTANT_COLOR,[Uu]:i.ONE_MINUS_CONSTANT_COLOR,[Nu]:i.CONSTANT_ALPHA,[Fu]:i.ONE_MINUS_CONSTANT_ALPHA};function P(O,bt,tt,lt,Dt,Pt,$t,Me,ze,ae){if(O===ei){_===!0&&(mt(i.BLEND),_=!1);return}if(_===!1&&(ot(i.BLEND),_=!0),O!==xu){if(O!==m||ae!==M){if((d!==mi||v!==mi)&&(i.blendEquation(i.FUNC_ADD),d=mi,v=mi),ae)switch(O){case Ki:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Ac:i.blendFunc(i.ONE,i.ONE);break;case Rc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Cc:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}else switch(O){case Ki:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Ac:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Rc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Cc:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}S=null,w=null,U=null,T=null,A.set(0,0,0),I=0,m=O,M=ae}return}Dt=Dt||bt,Pt=Pt||tt,$t=$t||lt,(bt!==d||Dt!==v)&&(i.blendEquationSeparate(j[bt],j[Dt]),d=bt,v=Dt),(tt!==S||lt!==w||Pt!==U||$t!==T)&&(i.blendFuncSeparate(nt[tt],nt[lt],nt[Pt],nt[$t]),S=tt,w=lt,U=Pt,T=$t),(Me.equals(A)===!1||ze!==I)&&(i.blendColor(Me.r,Me.g,Me.b,ze),A.copy(Me),I=ze),m=O,M=!1}function At(O,bt){O.side===be?mt(i.CULL_FACE):ot(i.CULL_FACE);let tt=O.side===Oe;bt&&(tt=!tt),W(tt),O.blending===Ki&&O.transparent===!1?P(ei):P(O.blending,O.blendEquation,O.blendSrc,O.blendDst,O.blendEquationAlpha,O.blendSrcAlpha,O.blendDstAlpha,O.blendColor,O.blendAlpha,O.premultipliedAlpha),r.setFunc(O.depthFunc),r.setTest(O.depthTest),r.setMask(O.depthWrite),o.setMask(O.colorWrite);const lt=O.stencilWrite;a.setTest(lt),lt&&(a.setMask(O.stencilWriteMask),a.setFunc(O.stencilFunc,O.stencilRef,O.stencilFuncMask),a.setOp(O.stencilFail,O.stencilZFail,O.stencilZPass)),Ut(O.polygonOffset,O.polygonOffsetFactor,O.polygonOffsetUnits),O.alphaToCoverage===!0?ot(i.SAMPLE_ALPHA_TO_COVERAGE):mt(i.SAMPLE_ALPHA_TO_COVERAGE)}function W(O){x!==O&&(O?i.frontFace(i.CW):i.frontFace(i.CCW),x=O)}function et(O){O!==_u?(ot(i.CULL_FACE),O!==C&&(O===bc?i.cullFace(i.BACK):O===vu?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):mt(i.CULL_FACE),C=O}function it(O){O!==k&&(q&&i.lineWidth(O),k=O)}function Ut(O,bt,tt){O?(ot(i.POLYGON_OFFSET_FILL),(G!==bt||V!==tt)&&(i.polygonOffset(bt,tt),G=bt,V=tt)):mt(i.POLYGON_OFFSET_FILL)}function vt(O){O?ot(i.SCISSOR_TEST):mt(i.SCISSOR_TEST)}function R(O){O===void 0&&(O=i.TEXTURE0+J-1),pt!==O&&(i.activeTexture(O),pt=O)}function y(O,bt,tt){tt===void 0&&(pt===null?tt=i.TEXTURE0+J-1:tt=pt);let lt=wt[tt];lt===void 0&&(lt={type:void 0,texture:void 0},wt[tt]=lt),(lt.type!==O||lt.texture!==bt)&&(pt!==tt&&(i.activeTexture(tt),pt=tt),i.bindTexture(O,bt||ft[O]),lt.type=O,lt.texture=bt)}function L(){const O=wt[pt];O!==void 0&&O.type!==void 0&&(i.bindTexture(O.type,null),O.type=void 0,O.texture=void 0)}function N(){try{i.compressedTexImage2D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function X(){try{i.compressedTexImage3D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Y(){try{i.texSubImage2D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function gt(){try{i.texSubImage3D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function ct(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function St(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Gt(){try{i.texStorage2D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function ht(){try{i.texStorage3D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function yt(){try{i.texImage2D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Nt(){try{i.texImage3D.apply(i,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Ft(O){ut.equals(O)===!1&&(i.scissor(O.x,O.y,O.z,O.w),ut.copy(O))}function Ct(O){F.equals(O)===!1&&(i.viewport(O.x,O.y,O.z,O.w),F.copy(O))}function qt(O,bt){let tt=l.get(bt);tt===void 0&&(tt=new WeakMap,l.set(bt,tt));let lt=tt.get(O);lt===void 0&&(lt=i.getUniformBlockIndex(bt,O.name),tt.set(O,lt))}function Jt(O,bt){const lt=l.get(bt).get(O);c.get(bt)!==lt&&(i.uniformBlockBinding(bt,lt,O.__bindingPointIndex),c.set(bt,lt))}function de(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),r.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},pt=null,wt={},u={},f=new WeakMap,p=[],g=null,_=!1,m=null,d=null,S=null,w=null,v=null,U=null,T=null,A=new Rt(0,0,0),I=0,M=!1,x=null,C=null,k=null,G=null,V=null,ut.set(0,0,i.canvas.width,i.canvas.height),F.set(0,0,i.canvas.width,i.canvas.height),o.reset(),r.reset(),a.reset()}return{buffers:{color:o,depth:r,stencil:a},enable:ot,disable:mt,bindFramebuffer:Mt,drawBuffers:Et,useProgram:Wt,setBlending:P,setMaterial:At,setFlipSided:W,setCullFace:et,setLineWidth:it,setPolygonOffset:Ut,setScissorTest:vt,activeTexture:R,bindTexture:y,unbindTexture:L,compressedTexImage2D:N,compressedTexImage3D:X,texImage2D:yt,texImage3D:Nt,updateUBOMapping:qt,uniformBlockBinding:Jt,texStorage2D:Gt,texStorage3D:ht,texSubImage2D:Y,texSubImage3D:gt,compressedTexSubImage2D:ct,compressedTexSubImage3D:St,scissor:Ft,viewport:Ct,reset:de}}function wl(i,t,e,n){const s=og(n);switch(e){case dh:return i*t;case ph:return i*t;case mh:return i*t*2;case Za:return i*t/s.components*s.byteLength;case Ka:return i*t/s.components*s.byteLength;case gh:return i*t*2/s.components*s.byteLength;case Ja:return i*t*2/s.components*s.byteLength;case fh:return i*t*3/s.components*s.byteLength;case pn:return i*t*4/s.components*s.byteLength;case ja:return i*t*4/s.components*s.byteLength;case Eo:case To:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case bo:case Ao:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case oa:case aa:return Math.max(i,16)*Math.max(t,8)/4;case sa:case ra:return Math.max(i,8)*Math.max(t,8)/2;case ca:case la:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case ha:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case ua:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case da:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case fa:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case pa:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case ma:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case ga:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case _a:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case va:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case xa:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case Ma:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case ya:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case wa:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case Sa:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case Ea:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case Ro:case Ta:case ba:return Math.ceil(i/4)*Math.ceil(t/4)*16;case _h:case Aa:return Math.ceil(i/4)*Math.ceil(t/4)*8;case Ra:case Ca:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function og(i){switch(i){case zn:case lh:return{byteLength:1,components:1};case Ds:case hh:case Bs:return{byteLength:2,components:1};case qa:case $a:return{byteLength:2,components:4};case Ei:case Ya:case En:return{byteLength:4,components:1};case uh:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function rg(i,t,e,n,s,o,r){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new _t,h=new WeakMap;let u;const f=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(R,y){return p?new OffscreenCanvas(R,y):Io("canvas")}function _(R,y,L){let N=1;const X=vt(R);if((X.width>L||X.height>L)&&(N=L/Math.max(X.width,X.height)),N<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){const Y=Math.floor(N*X.width),gt=Math.floor(N*X.height);u===void 0&&(u=g(Y,gt));const ct=y?g(Y,gt):u;return ct.width=Y,ct.height=gt,ct.getContext("2d").drawImage(R,0,0,Y,gt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+X.width+"x"+X.height+") to ("+Y+"x"+gt+")."),ct}else return"data"in R&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+X.width+"x"+X.height+")."),R;return R}function m(R){return R.generateMipmaps}function d(R){i.generateMipmap(R)}function S(R){return R.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?i.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function w(R,y,L,N,X=!1){if(R!==null){if(i[R]!==void 0)return i[R];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let Y=y;if(y===i.RED&&(L===i.FLOAT&&(Y=i.R32F),L===i.HALF_FLOAT&&(Y=i.R16F),L===i.UNSIGNED_BYTE&&(Y=i.R8)),y===i.RED_INTEGER&&(L===i.UNSIGNED_BYTE&&(Y=i.R8UI),L===i.UNSIGNED_SHORT&&(Y=i.R16UI),L===i.UNSIGNED_INT&&(Y=i.R32UI),L===i.BYTE&&(Y=i.R8I),L===i.SHORT&&(Y=i.R16I),L===i.INT&&(Y=i.R32I)),y===i.RG&&(L===i.FLOAT&&(Y=i.RG32F),L===i.HALF_FLOAT&&(Y=i.RG16F),L===i.UNSIGNED_BYTE&&(Y=i.RG8)),y===i.RG_INTEGER&&(L===i.UNSIGNED_BYTE&&(Y=i.RG8UI),L===i.UNSIGNED_SHORT&&(Y=i.RG16UI),L===i.UNSIGNED_INT&&(Y=i.RG32UI),L===i.BYTE&&(Y=i.RG8I),L===i.SHORT&&(Y=i.RG16I),L===i.INT&&(Y=i.RG32I)),y===i.RGB_INTEGER&&(L===i.UNSIGNED_BYTE&&(Y=i.RGB8UI),L===i.UNSIGNED_SHORT&&(Y=i.RGB16UI),L===i.UNSIGNED_INT&&(Y=i.RGB32UI),L===i.BYTE&&(Y=i.RGB8I),L===i.SHORT&&(Y=i.RGB16I),L===i.INT&&(Y=i.RGB32I)),y===i.RGBA_INTEGER&&(L===i.UNSIGNED_BYTE&&(Y=i.RGBA8UI),L===i.UNSIGNED_SHORT&&(Y=i.RGBA16UI),L===i.UNSIGNED_INT&&(Y=i.RGBA32UI),L===i.BYTE&&(Y=i.RGBA8I),L===i.SHORT&&(Y=i.RGBA16I),L===i.INT&&(Y=i.RGBA32I)),y===i.RGB&&L===i.UNSIGNED_INT_5_9_9_9_REV&&(Y=i.RGB9_E5),y===i.RGBA){const gt=X?Yo:ne.getTransfer(N);L===i.FLOAT&&(Y=i.RGBA32F),L===i.HALF_FLOAT&&(Y=i.RGBA16F),L===i.UNSIGNED_BYTE&&(Y=gt===he?i.SRGB8_ALPHA8:i.RGBA8),L===i.UNSIGNED_SHORT_4_4_4_4&&(Y=i.RGBA4),L===i.UNSIGNED_SHORT_5_5_5_1&&(Y=i.RGB5_A1)}return(Y===i.R16F||Y===i.R32F||Y===i.RG16F||Y===i.RG32F||Y===i.RGBA16F||Y===i.RGBA32F)&&t.get("EXT_color_buffer_float"),Y}function v(R,y){let L;return R?y===null||y===Ei||y===ss?L=i.DEPTH24_STENCIL8:y===En?L=i.DEPTH32F_STENCIL8:y===Ds&&(L=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):y===null||y===Ei||y===ss?L=i.DEPTH_COMPONENT24:y===En?L=i.DEPTH_COMPONENT32F:y===Ds&&(L=i.DEPTH_COMPONENT16),L}function U(R,y){return m(R)===!0||R.isFramebufferTexture&&R.minFilter!==tn&&R.minFilter!==Sn?Math.log2(Math.max(y.width,y.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?y.mipmaps.length:1}function T(R){const y=R.target;y.removeEventListener("dispose",T),I(y),y.isVideoTexture&&h.delete(y)}function A(R){const y=R.target;y.removeEventListener("dispose",A),x(y)}function I(R){const y=n.get(R);if(y.__webglInit===void 0)return;const L=R.source,N=f.get(L);if(N){const X=N[y.__cacheKey];X.usedTimes--,X.usedTimes===0&&M(R),Object.keys(N).length===0&&f.delete(L)}n.remove(R)}function M(R){const y=n.get(R);i.deleteTexture(y.__webglTexture);const L=R.source,N=f.get(L);delete N[y.__cacheKey],r.memory.textures--}function x(R){const y=n.get(R);if(R.depthTexture&&(R.depthTexture.dispose(),n.remove(R.depthTexture)),R.isWebGLCubeRenderTarget)for(let N=0;N<6;N++){if(Array.isArray(y.__webglFramebuffer[N]))for(let X=0;X<y.__webglFramebuffer[N].length;X++)i.deleteFramebuffer(y.__webglFramebuffer[N][X]);else i.deleteFramebuffer(y.__webglFramebuffer[N]);y.__webglDepthbuffer&&i.deleteRenderbuffer(y.__webglDepthbuffer[N])}else{if(Array.isArray(y.__webglFramebuffer))for(let N=0;N<y.__webglFramebuffer.length;N++)i.deleteFramebuffer(y.__webglFramebuffer[N]);else i.deleteFramebuffer(y.__webglFramebuffer);if(y.__webglDepthbuffer&&i.deleteRenderbuffer(y.__webglDepthbuffer),y.__webglMultisampledFramebuffer&&i.deleteFramebuffer(y.__webglMultisampledFramebuffer),y.__webglColorRenderbuffer)for(let N=0;N<y.__webglColorRenderbuffer.length;N++)y.__webglColorRenderbuffer[N]&&i.deleteRenderbuffer(y.__webglColorRenderbuffer[N]);y.__webglDepthRenderbuffer&&i.deleteRenderbuffer(y.__webglDepthRenderbuffer)}const L=R.textures;for(let N=0,X=L.length;N<X;N++){const Y=n.get(L[N]);Y.__webglTexture&&(i.deleteTexture(Y.__webglTexture),r.memory.textures--),n.remove(L[N])}n.remove(R)}let C=0;function k(){C=0}function G(){const R=C;return R>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+s.maxTextures),C+=1,R}function V(R){const y=[];return y.push(R.wrapS),y.push(R.wrapT),y.push(R.wrapR||0),y.push(R.magFilter),y.push(R.minFilter),y.push(R.anisotropy),y.push(R.internalFormat),y.push(R.format),y.push(R.type),y.push(R.generateMipmaps),y.push(R.premultiplyAlpha),y.push(R.flipY),y.push(R.unpackAlignment),y.push(R.colorSpace),y.join()}function J(R,y){const L=n.get(R);if(R.isVideoTexture&&it(R),R.isRenderTargetTexture===!1&&R.version>0&&L.__version!==R.version){const N=R.image;if(N===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(N.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{F(L,R,y);return}}e.bindTexture(i.TEXTURE_2D,L.__webglTexture,i.TEXTURE0+y)}function q(R,y){const L=n.get(R);if(R.version>0&&L.__version!==R.version){F(L,R,y);return}e.bindTexture(i.TEXTURE_2D_ARRAY,L.__webglTexture,i.TEXTURE0+y)}function at(R,y){const L=n.get(R);if(R.version>0&&L.__version!==R.version){F(L,R,y);return}e.bindTexture(i.TEXTURE_3D,L.__webglTexture,i.TEXTURE0+y)}function K(R,y){const L=n.get(R);if(R.version>0&&L.__version!==R.version){Q(L,R,y);return}e.bindTexture(i.TEXTURE_CUBE_MAP,L.__webglTexture,i.TEXTURE0+y)}const pt={[is]:i.REPEAT,[xi]:i.CLAMP_TO_EDGE,[ia]:i.MIRRORED_REPEAT},wt={[tn]:i.NEAREST,[Xu]:i.NEAREST_MIPMAP_NEAREST,[Ys]:i.NEAREST_MIPMAP_LINEAR,[Sn]:i.LINEAR,[Qo]:i.LINEAR_MIPMAP_NEAREST,[Mi]:i.LINEAR_MIPMAP_LINEAR},dt={[Zu]:i.NEVER,[ed]:i.ALWAYS,[Ku]:i.LESS,[vh]:i.LEQUAL,[Ju]:i.EQUAL,[td]:i.GEQUAL,[ju]:i.GREATER,[Qu]:i.NOTEQUAL};function Vt(R,y){if(y.type===En&&t.has("OES_texture_float_linear")===!1&&(y.magFilter===Sn||y.magFilter===Qo||y.magFilter===Ys||y.magFilter===Mi||y.minFilter===Sn||y.minFilter===Qo||y.minFilter===Ys||y.minFilter===Mi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(R,i.TEXTURE_WRAP_S,pt[y.wrapS]),i.texParameteri(R,i.TEXTURE_WRAP_T,pt[y.wrapT]),(R===i.TEXTURE_3D||R===i.TEXTURE_2D_ARRAY)&&i.texParameteri(R,i.TEXTURE_WRAP_R,pt[y.wrapR]),i.texParameteri(R,i.TEXTURE_MAG_FILTER,wt[y.magFilter]),i.texParameteri(R,i.TEXTURE_MIN_FILTER,wt[y.minFilter]),y.compareFunction&&(i.texParameteri(R,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(R,i.TEXTURE_COMPARE_FUNC,dt[y.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(y.magFilter===tn||y.minFilter!==Ys&&y.minFilter!==Mi||y.type===En&&t.has("OES_texture_float_linear")===!1)return;if(y.anisotropy>1||n.get(y).__currentAnisotropy){const L=t.get("EXT_texture_filter_anisotropic");i.texParameterf(R,L.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,s.getMaxAnisotropy())),n.get(y).__currentAnisotropy=y.anisotropy}}}function ut(R,y){let L=!1;R.__webglInit===void 0&&(R.__webglInit=!0,y.addEventListener("dispose",T));const N=y.source;let X=f.get(N);X===void 0&&(X={},f.set(N,X));const Y=V(y);if(Y!==R.__cacheKey){X[Y]===void 0&&(X[Y]={texture:i.createTexture(),usedTimes:0},r.memory.textures++,L=!0),X[Y].usedTimes++;const gt=X[R.__cacheKey];gt!==void 0&&(X[R.__cacheKey].usedTimes--,gt.usedTimes===0&&M(y)),R.__cacheKey=Y,R.__webglTexture=X[Y].texture}return L}function F(R,y,L){let N=i.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(N=i.TEXTURE_2D_ARRAY),y.isData3DTexture&&(N=i.TEXTURE_3D);const X=ut(R,y),Y=y.source;e.bindTexture(N,R.__webglTexture,i.TEXTURE0+L);const gt=n.get(Y);if(Y.version!==gt.__version||X===!0){e.activeTexture(i.TEXTURE0+L);const ct=ne.getPrimaries(ne.workingColorSpace),St=y.colorSpace===wn?null:ne.getPrimaries(y.colorSpace),Gt=y.colorSpace===wn||ct===St?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,y.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,y.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Gt);let ht=_(y.image,!1,s.maxTextureSize);ht=Ut(y,ht);const yt=o.convert(y.format,y.colorSpace),Nt=o.convert(y.type);let Ft=w(y.internalFormat,yt,Nt,y.colorSpace,y.isVideoTexture);Vt(N,y);let Ct;const qt=y.mipmaps,Jt=y.isVideoTexture!==!0,de=gt.__version===void 0||X===!0,O=Y.dataReady,bt=U(y,ht);if(y.isDepthTexture)Ft=v(y.format===os,y.type),de&&(Jt?e.texStorage2D(i.TEXTURE_2D,1,Ft,ht.width,ht.height):e.texImage2D(i.TEXTURE_2D,0,Ft,ht.width,ht.height,0,yt,Nt,null));else if(y.isDataTexture)if(qt.length>0){Jt&&de&&e.texStorage2D(i.TEXTURE_2D,bt,Ft,qt[0].width,qt[0].height);for(let tt=0,lt=qt.length;tt<lt;tt++)Ct=qt[tt],Jt?O&&e.texSubImage2D(i.TEXTURE_2D,tt,0,0,Ct.width,Ct.height,yt,Nt,Ct.data):e.texImage2D(i.TEXTURE_2D,tt,Ft,Ct.width,Ct.height,0,yt,Nt,Ct.data);y.generateMipmaps=!1}else Jt?(de&&e.texStorage2D(i.TEXTURE_2D,bt,Ft,ht.width,ht.height),O&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,ht.width,ht.height,yt,Nt,ht.data)):e.texImage2D(i.TEXTURE_2D,0,Ft,ht.width,ht.height,0,yt,Nt,ht.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){Jt&&de&&e.texStorage3D(i.TEXTURE_2D_ARRAY,bt,Ft,qt[0].width,qt[0].height,ht.depth);for(let tt=0,lt=qt.length;tt<lt;tt++)if(Ct=qt[tt],y.format!==pn)if(yt!==null)if(Jt){if(O)if(y.layerUpdates.size>0){const Dt=wl(Ct.width,Ct.height,y.format,y.type);for(const Pt of y.layerUpdates){const $t=Ct.data.subarray(Pt*Dt/Ct.data.BYTES_PER_ELEMENT,(Pt+1)*Dt/Ct.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,tt,0,0,Pt,Ct.width,Ct.height,1,yt,$t)}y.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,tt,0,0,0,Ct.width,Ct.height,ht.depth,yt,Ct.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,tt,Ft,Ct.width,Ct.height,ht.depth,0,Ct.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Jt?O&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,tt,0,0,0,Ct.width,Ct.height,ht.depth,yt,Nt,Ct.data):e.texImage3D(i.TEXTURE_2D_ARRAY,tt,Ft,Ct.width,Ct.height,ht.depth,0,yt,Nt,Ct.data)}else{Jt&&de&&e.texStorage2D(i.TEXTURE_2D,bt,Ft,qt[0].width,qt[0].height);for(let tt=0,lt=qt.length;tt<lt;tt++)Ct=qt[tt],y.format!==pn?yt!==null?Jt?O&&e.compressedTexSubImage2D(i.TEXTURE_2D,tt,0,0,Ct.width,Ct.height,yt,Ct.data):e.compressedTexImage2D(i.TEXTURE_2D,tt,Ft,Ct.width,Ct.height,0,Ct.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Jt?O&&e.texSubImage2D(i.TEXTURE_2D,tt,0,0,Ct.width,Ct.height,yt,Nt,Ct.data):e.texImage2D(i.TEXTURE_2D,tt,Ft,Ct.width,Ct.height,0,yt,Nt,Ct.data)}else if(y.isDataArrayTexture)if(Jt){if(de&&e.texStorage3D(i.TEXTURE_2D_ARRAY,bt,Ft,ht.width,ht.height,ht.depth),O)if(y.layerUpdates.size>0){const tt=wl(ht.width,ht.height,y.format,y.type);for(const lt of y.layerUpdates){const Dt=ht.data.subarray(lt*tt/ht.data.BYTES_PER_ELEMENT,(lt+1)*tt/ht.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,lt,ht.width,ht.height,1,yt,Nt,Dt)}y.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ht.width,ht.height,ht.depth,yt,Nt,ht.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Ft,ht.width,ht.height,ht.depth,0,yt,Nt,ht.data);else if(y.isData3DTexture)Jt?(de&&e.texStorage3D(i.TEXTURE_3D,bt,Ft,ht.width,ht.height,ht.depth),O&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ht.width,ht.height,ht.depth,yt,Nt,ht.data)):e.texImage3D(i.TEXTURE_3D,0,Ft,ht.width,ht.height,ht.depth,0,yt,Nt,ht.data);else if(y.isFramebufferTexture){if(de)if(Jt)e.texStorage2D(i.TEXTURE_2D,bt,Ft,ht.width,ht.height);else{let tt=ht.width,lt=ht.height;for(let Dt=0;Dt<bt;Dt++)e.texImage2D(i.TEXTURE_2D,Dt,Ft,tt,lt,0,yt,Nt,null),tt>>=1,lt>>=1}}else if(qt.length>0){if(Jt&&de){const tt=vt(qt[0]);e.texStorage2D(i.TEXTURE_2D,bt,Ft,tt.width,tt.height)}for(let tt=0,lt=qt.length;tt<lt;tt++)Ct=qt[tt],Jt?O&&e.texSubImage2D(i.TEXTURE_2D,tt,0,0,yt,Nt,Ct):e.texImage2D(i.TEXTURE_2D,tt,Ft,yt,Nt,Ct);y.generateMipmaps=!1}else if(Jt){if(de){const tt=vt(ht);e.texStorage2D(i.TEXTURE_2D,bt,Ft,tt.width,tt.height)}O&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,yt,Nt,ht)}else e.texImage2D(i.TEXTURE_2D,0,Ft,yt,Nt,ht);m(y)&&d(N),gt.__version=Y.version,y.onUpdate&&y.onUpdate(y)}R.__version=y.version}function Q(R,y,L){if(y.image.length!==6)return;const N=ut(R,y),X=y.source;e.bindTexture(i.TEXTURE_CUBE_MAP,R.__webglTexture,i.TEXTURE0+L);const Y=n.get(X);if(X.version!==Y.__version||N===!0){e.activeTexture(i.TEXTURE0+L);const gt=ne.getPrimaries(ne.workingColorSpace),ct=y.colorSpace===wn?null:ne.getPrimaries(y.colorSpace),St=y.colorSpace===wn||gt===ct?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,y.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,y.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,St);const Gt=y.isCompressedTexture||y.image[0].isCompressedTexture,ht=y.image[0]&&y.image[0].isDataTexture,yt=[];for(let lt=0;lt<6;lt++)!Gt&&!ht?yt[lt]=_(y.image[lt],!0,s.maxCubemapSize):yt[lt]=ht?y.image[lt].image:y.image[lt],yt[lt]=Ut(y,yt[lt]);const Nt=yt[0],Ft=o.convert(y.format,y.colorSpace),Ct=o.convert(y.type),qt=w(y.internalFormat,Ft,Ct,y.colorSpace),Jt=y.isVideoTexture!==!0,de=Y.__version===void 0||N===!0,O=X.dataReady;let bt=U(y,Nt);Vt(i.TEXTURE_CUBE_MAP,y);let tt;if(Gt){Jt&&de&&e.texStorage2D(i.TEXTURE_CUBE_MAP,bt,qt,Nt.width,Nt.height);for(let lt=0;lt<6;lt++){tt=yt[lt].mipmaps;for(let Dt=0;Dt<tt.length;Dt++){const Pt=tt[Dt];y.format!==pn?Ft!==null?Jt?O&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,Dt,0,0,Pt.width,Pt.height,Ft,Pt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,Dt,qt,Pt.width,Pt.height,0,Pt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Jt?O&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,Dt,0,0,Pt.width,Pt.height,Ft,Ct,Pt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,Dt,qt,Pt.width,Pt.height,0,Ft,Ct,Pt.data)}}}else{if(tt=y.mipmaps,Jt&&de){tt.length>0&&bt++;const lt=vt(yt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,bt,qt,lt.width,lt.height)}for(let lt=0;lt<6;lt++)if(ht){Jt?O&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,0,0,0,yt[lt].width,yt[lt].height,Ft,Ct,yt[lt].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,0,qt,yt[lt].width,yt[lt].height,0,Ft,Ct,yt[lt].data);for(let Dt=0;Dt<tt.length;Dt++){const $t=tt[Dt].image[lt].image;Jt?O&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,Dt+1,0,0,$t.width,$t.height,Ft,Ct,$t.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,Dt+1,qt,$t.width,$t.height,0,Ft,Ct,$t.data)}}else{Jt?O&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,0,0,0,Ft,Ct,yt[lt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,0,qt,Ft,Ct,yt[lt]);for(let Dt=0;Dt<tt.length;Dt++){const Pt=tt[Dt];Jt?O&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,Dt+1,0,0,Ft,Ct,Pt.image[lt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+lt,Dt+1,qt,Ft,Ct,Pt.image[lt])}}}m(y)&&d(i.TEXTURE_CUBE_MAP),Y.__version=X.version,y.onUpdate&&y.onUpdate(y)}R.__version=y.version}function ft(R,y,L,N,X,Y){const gt=o.convert(L.format,L.colorSpace),ct=o.convert(L.type),St=w(L.internalFormat,gt,ct,L.colorSpace),Gt=n.get(y),ht=n.get(L);if(ht.__renderTarget=y,!Gt.__hasExternalTextures){const yt=Math.max(1,y.width>>Y),Nt=Math.max(1,y.height>>Y);X===i.TEXTURE_3D||X===i.TEXTURE_2D_ARRAY?e.texImage3D(X,Y,St,yt,Nt,y.depth,0,gt,ct,null):e.texImage2D(X,Y,St,yt,Nt,0,gt,ct,null)}e.bindFramebuffer(i.FRAMEBUFFER,R),et(y)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,N,X,ht.__webglTexture,0,W(y)):(X===i.TEXTURE_2D||X>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&X<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,N,X,ht.__webglTexture,Y),e.bindFramebuffer(i.FRAMEBUFFER,null)}function ot(R,y,L){if(i.bindRenderbuffer(i.RENDERBUFFER,R),y.depthBuffer){const N=y.depthTexture,X=N&&N.isDepthTexture?N.type:null,Y=v(y.stencilBuffer,X),gt=y.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ct=W(y);et(y)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ct,Y,y.width,y.height):L?i.renderbufferStorageMultisample(i.RENDERBUFFER,ct,Y,y.width,y.height):i.renderbufferStorage(i.RENDERBUFFER,Y,y.width,y.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,gt,i.RENDERBUFFER,R)}else{const N=y.textures;for(let X=0;X<N.length;X++){const Y=N[X],gt=o.convert(Y.format,Y.colorSpace),ct=o.convert(Y.type),St=w(Y.internalFormat,gt,ct,Y.colorSpace),Gt=W(y);L&&et(y)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Gt,St,y.width,y.height):et(y)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Gt,St,y.width,y.height):i.renderbufferStorage(i.RENDERBUFFER,St,y.width,y.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function mt(R,y){if(y&&y.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,R),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const N=n.get(y.depthTexture);N.__renderTarget=y,(!N.__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),J(y.depthTexture,0);const X=N.__webglTexture,Y=W(y);if(y.depthTexture.format===Ji)et(y)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,X,0,Y):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,X,0);else if(y.depthTexture.format===os)et(y)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,X,0,Y):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,X,0);else throw new Error("Unknown depthTexture format")}function Mt(R){const y=n.get(R),L=R.isWebGLCubeRenderTarget===!0;if(y.__boundDepthTexture!==R.depthTexture){const N=R.depthTexture;if(y.__depthDisposeCallback&&y.__depthDisposeCallback(),N){const X=()=>{delete y.__boundDepthTexture,delete y.__depthDisposeCallback,N.removeEventListener("dispose",X)};N.addEventListener("dispose",X),y.__depthDisposeCallback=X}y.__boundDepthTexture=N}if(R.depthTexture&&!y.__autoAllocateDepthBuffer){if(L)throw new Error("target.depthTexture not supported in Cube render targets");mt(y.__webglFramebuffer,R)}else if(L){y.__webglDepthbuffer=[];for(let N=0;N<6;N++)if(e.bindFramebuffer(i.FRAMEBUFFER,y.__webglFramebuffer[N]),y.__webglDepthbuffer[N]===void 0)y.__webglDepthbuffer[N]=i.createRenderbuffer(),ot(y.__webglDepthbuffer[N],R,!1);else{const X=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Y=y.__webglDepthbuffer[N];i.bindRenderbuffer(i.RENDERBUFFER,Y),i.framebufferRenderbuffer(i.FRAMEBUFFER,X,i.RENDERBUFFER,Y)}}else if(e.bindFramebuffer(i.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer===void 0)y.__webglDepthbuffer=i.createRenderbuffer(),ot(y.__webglDepthbuffer,R,!1);else{const N=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,X=y.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,X),i.framebufferRenderbuffer(i.FRAMEBUFFER,N,i.RENDERBUFFER,X)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function Et(R,y,L){const N=n.get(R);y!==void 0&&ft(N.__webglFramebuffer,R,R.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),L!==void 0&&Mt(R)}function Wt(R){const y=R.texture,L=n.get(R),N=n.get(y);R.addEventListener("dispose",A);const X=R.textures,Y=R.isWebGLCubeRenderTarget===!0,gt=X.length>1;if(gt||(N.__webglTexture===void 0&&(N.__webglTexture=i.createTexture()),N.__version=y.version,r.memory.textures++),Y){L.__webglFramebuffer=[];for(let ct=0;ct<6;ct++)if(y.mipmaps&&y.mipmaps.length>0){L.__webglFramebuffer[ct]=[];for(let St=0;St<y.mipmaps.length;St++)L.__webglFramebuffer[ct][St]=i.createFramebuffer()}else L.__webglFramebuffer[ct]=i.createFramebuffer()}else{if(y.mipmaps&&y.mipmaps.length>0){L.__webglFramebuffer=[];for(let ct=0;ct<y.mipmaps.length;ct++)L.__webglFramebuffer[ct]=i.createFramebuffer()}else L.__webglFramebuffer=i.createFramebuffer();if(gt)for(let ct=0,St=X.length;ct<St;ct++){const Gt=n.get(X[ct]);Gt.__webglTexture===void 0&&(Gt.__webglTexture=i.createTexture(),r.memory.textures++)}if(R.samples>0&&et(R)===!1){L.__webglMultisampledFramebuffer=i.createFramebuffer(),L.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,L.__webglMultisampledFramebuffer);for(let ct=0;ct<X.length;ct++){const St=X[ct];L.__webglColorRenderbuffer[ct]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,L.__webglColorRenderbuffer[ct]);const Gt=o.convert(St.format,St.colorSpace),ht=o.convert(St.type),yt=w(St.internalFormat,Gt,ht,St.colorSpace,R.isXRRenderTarget===!0),Nt=W(R);i.renderbufferStorageMultisample(i.RENDERBUFFER,Nt,yt,R.width,R.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ct,i.RENDERBUFFER,L.__webglColorRenderbuffer[ct])}i.bindRenderbuffer(i.RENDERBUFFER,null),R.depthBuffer&&(L.__webglDepthRenderbuffer=i.createRenderbuffer(),ot(L.__webglDepthRenderbuffer,R,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(Y){e.bindTexture(i.TEXTURE_CUBE_MAP,N.__webglTexture),Vt(i.TEXTURE_CUBE_MAP,y);for(let ct=0;ct<6;ct++)if(y.mipmaps&&y.mipmaps.length>0)for(let St=0;St<y.mipmaps.length;St++)ft(L.__webglFramebuffer[ct][St],R,y,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,St);else ft(L.__webglFramebuffer[ct],R,y,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,0);m(y)&&d(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(gt){for(let ct=0,St=X.length;ct<St;ct++){const Gt=X[ct],ht=n.get(Gt);e.bindTexture(i.TEXTURE_2D,ht.__webglTexture),Vt(i.TEXTURE_2D,Gt),ft(L.__webglFramebuffer,R,Gt,i.COLOR_ATTACHMENT0+ct,i.TEXTURE_2D,0),m(Gt)&&d(i.TEXTURE_2D)}e.unbindTexture()}else{let ct=i.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(ct=R.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(ct,N.__webglTexture),Vt(ct,y),y.mipmaps&&y.mipmaps.length>0)for(let St=0;St<y.mipmaps.length;St++)ft(L.__webglFramebuffer[St],R,y,i.COLOR_ATTACHMENT0,ct,St);else ft(L.__webglFramebuffer,R,y,i.COLOR_ATTACHMENT0,ct,0);m(y)&&d(ct),e.unbindTexture()}R.depthBuffer&&Mt(R)}function j(R){const y=R.textures;for(let L=0,N=y.length;L<N;L++){const X=y[L];if(m(X)){const Y=S(R),gt=n.get(X).__webglTexture;e.bindTexture(Y,gt),d(Y),e.unbindTexture()}}}const nt=[],P=[];function At(R){if(R.samples>0){if(et(R)===!1){const y=R.textures,L=R.width,N=R.height;let X=i.COLOR_BUFFER_BIT;const Y=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,gt=n.get(R),ct=y.length>1;if(ct)for(let St=0;St<y.length;St++)e.bindFramebuffer(i.FRAMEBUFFER,gt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+St,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,gt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+St,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,gt.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,gt.__webglFramebuffer);for(let St=0;St<y.length;St++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(X|=i.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(X|=i.STENCIL_BUFFER_BIT)),ct){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,gt.__webglColorRenderbuffer[St]);const Gt=n.get(y[St]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Gt,0)}i.blitFramebuffer(0,0,L,N,0,0,L,N,X,i.NEAREST),c===!0&&(nt.length=0,P.length=0,nt.push(i.COLOR_ATTACHMENT0+St),R.depthBuffer&&R.resolveDepthBuffer===!1&&(nt.push(Y),P.push(Y),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,P)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,nt))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ct)for(let St=0;St<y.length;St++){e.bindFramebuffer(i.FRAMEBUFFER,gt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+St,i.RENDERBUFFER,gt.__webglColorRenderbuffer[St]);const Gt=n.get(y[St]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,gt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+St,i.TEXTURE_2D,Gt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,gt.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.resolveDepthBuffer===!1&&c){const y=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[y])}}}function W(R){return Math.min(s.maxSamples,R.samples)}function et(R){const y=n.get(R);return R.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function it(R){const y=r.render.frame;h.get(R)!==y&&(h.set(R,y),R.update())}function Ut(R,y){const L=R.colorSpace,N=R.format,X=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||L!==cs&&L!==wn&&(ne.getTransfer(L)===he?(N!==pn||X!==zn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",L)),y}function vt(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(l.width=R.naturalWidth||R.width,l.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(l.width=R.displayWidth,l.height=R.displayHeight):(l.width=R.width,l.height=R.height),l}this.allocateTextureUnit=G,this.resetTextureUnits=k,this.setTexture2D=J,this.setTexture2DArray=q,this.setTexture3D=at,this.setTextureCube=K,this.rebindTextures=Et,this.setupRenderTarget=Wt,this.updateRenderTargetMipmap=j,this.updateMultisampleRenderTarget=At,this.setupDepthRenderbuffer=Mt,this.setupFrameBufferTexture=ft,this.useMultisampledRTT=et}function ag(i,t){function e(n,s=wn){let o;const r=ne.getTransfer(s);if(n===zn)return i.UNSIGNED_BYTE;if(n===qa)return i.UNSIGNED_SHORT_4_4_4_4;if(n===$a)return i.UNSIGNED_SHORT_5_5_5_1;if(n===uh)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===lh)return i.BYTE;if(n===hh)return i.SHORT;if(n===Ds)return i.UNSIGNED_SHORT;if(n===Ya)return i.INT;if(n===Ei)return i.UNSIGNED_INT;if(n===En)return i.FLOAT;if(n===Bs)return i.HALF_FLOAT;if(n===dh)return i.ALPHA;if(n===fh)return i.RGB;if(n===pn)return i.RGBA;if(n===ph)return i.LUMINANCE;if(n===mh)return i.LUMINANCE_ALPHA;if(n===Ji)return i.DEPTH_COMPONENT;if(n===os)return i.DEPTH_STENCIL;if(n===Za)return i.RED;if(n===Ka)return i.RED_INTEGER;if(n===gh)return i.RG;if(n===Ja)return i.RG_INTEGER;if(n===ja)return i.RGBA_INTEGER;if(n===Eo||n===To||n===bo||n===Ao)if(r===he)if(o=t.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(n===Eo)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===To)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===bo)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Ao)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=t.get("WEBGL_compressed_texture_s3tc"),o!==null){if(n===Eo)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===To)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===bo)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Ao)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===sa||n===oa||n===ra||n===aa)if(o=t.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(n===sa)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===oa)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===ra)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===aa)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===ca||n===la||n===ha)if(o=t.get("WEBGL_compressed_texture_etc"),o!==null){if(n===ca||n===la)return r===he?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(n===ha)return r===he?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===ua||n===da||n===fa||n===pa||n===ma||n===ga||n===_a||n===va||n===xa||n===Ma||n===ya||n===wa||n===Sa||n===Ea)if(o=t.get("WEBGL_compressed_texture_astc"),o!==null){if(n===ua)return r===he?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===da)return r===he?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===fa)return r===he?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===pa)return r===he?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===ma)return r===he?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===ga)return r===he?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===_a)return r===he?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===va)return r===he?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===xa)return r===he?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Ma)return r===he?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===ya)return r===he?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===wa)return r===he?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Sa)return r===he?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Ea)return r===he?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Ro||n===Ta||n===ba)if(o=t.get("EXT_texture_compression_bptc"),o!==null){if(n===Ro)return r===he?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Ta)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===ba)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===_h||n===Aa||n===Ra||n===Ca)if(o=t.get("EXT_texture_compression_rgtc"),o!==null){if(n===Ro)return o.COMPRESSED_RED_RGTC1_EXT;if(n===Aa)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Ra)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Ca)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===ss?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}class cg extends Ge{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class It extends Re{constructor(){super(),this.isGroup=!0,this.type="Group"}}const lg={type:"move"};class Rr{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new It,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new It,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new D,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new D),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new It,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new D,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new D),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,o=null,r=null;const a=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){r=!0;for(const _ of t.hand.values()){const m=e.getJointPose(_,n),d=this._getHandJoint(l,_);m!==null&&(d.matrix.fromArray(m.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=m.radius),d.visible=m!==null}const h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],f=h.position.distanceTo(u.position),p=.02,g=.005;l.inputState.pinching&&f>p+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&f<=p-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(o=e.getPose(t.gripSpace,n),o!==null&&(c.matrix.fromArray(o.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,o.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(o.linearVelocity)):c.hasLinearVelocity=!1,o.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(o.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&o!==null&&(s=o),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(lg)))}return a!==null&&(a.visible=s!==null),c!==null&&(c.visible=o!==null),l!==null&&(l.visible=r!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new It;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const hg=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,ug=`
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

}`;class dg{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const s=new Ve,o=t.properties.get(s);o.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new si({vertexShader:hg,fragmentShader:ug,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new b(new fn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class fg extends ls{constructor(t,e){super();const n=this;let s=null,o=1,r=null,a="local-floor",c=1,l=null,h=null,u=null,f=null,p=null,g=null;const _=new dg,m=e.getContextAttributes();let d=null,S=null;const w=[],v=[],U=new _t;let T=null;const A=new Ge;A.viewport=new ue;const I=new Ge;I.viewport=new ue;const M=[A,I],x=new cg;let C=null,k=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(F){let Q=w[F];return Q===void 0&&(Q=new Rr,w[F]=Q),Q.getTargetRaySpace()},this.getControllerGrip=function(F){let Q=w[F];return Q===void 0&&(Q=new Rr,w[F]=Q),Q.getGripSpace()},this.getHand=function(F){let Q=w[F];return Q===void 0&&(Q=new Rr,w[F]=Q),Q.getHandSpace()};function G(F){const Q=v.indexOf(F.inputSource);if(Q===-1)return;const ft=w[Q];ft!==void 0&&(ft.update(F.inputSource,F.frame,l||r),ft.dispatchEvent({type:F.type,data:F.inputSource}))}function V(){s.removeEventListener("select",G),s.removeEventListener("selectstart",G),s.removeEventListener("selectend",G),s.removeEventListener("squeeze",G),s.removeEventListener("squeezestart",G),s.removeEventListener("squeezeend",G),s.removeEventListener("end",V),s.removeEventListener("inputsourceschange",J);for(let F=0;F<w.length;F++){const Q=v[F];Q!==null&&(v[F]=null,w[F].disconnect(Q))}C=null,k=null,_.reset(),t.setRenderTarget(d),p=null,f=null,u=null,s=null,S=null,ut.stop(),n.isPresenting=!1,t.setPixelRatio(T),t.setSize(U.width,U.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(F){o=F,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(F){a=F,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||r},this.setReferenceSpace=function(F){l=F},this.getBaseLayer=function(){return f!==null?f:p},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(F){if(s=F,s!==null){if(d=t.getRenderTarget(),s.addEventListener("select",G),s.addEventListener("selectstart",G),s.addEventListener("selectend",G),s.addEventListener("squeeze",G),s.addEventListener("squeezestart",G),s.addEventListener("squeezeend",G),s.addEventListener("end",V),s.addEventListener("inputsourceschange",J),m.xrCompatible!==!0&&await e.makeXRCompatible(),T=t.getPixelRatio(),t.getSize(U),s.renderState.layers===void 0){const Q={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:o};p=new XRWebGLLayer(s,e,Q),s.updateRenderState({baseLayer:p}),t.setPixelRatio(1),t.setSize(p.framebufferWidth,p.framebufferHeight,!1),S=new Ti(p.framebufferWidth,p.framebufferHeight,{format:pn,type:zn,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil})}else{let Q=null,ft=null,ot=null;m.depth&&(ot=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,Q=m.stencil?os:Ji,ft=m.stencil?ss:Ei);const mt={colorFormat:e.RGBA8,depthFormat:ot,scaleFactor:o};u=new XRWebGLBinding(s,e),f=u.createProjectionLayer(mt),s.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),S=new Ti(f.textureWidth,f.textureHeight,{format:pn,type:zn,depthTexture:new Ph(f.textureWidth,f.textureHeight,ft,void 0,void 0,void 0,void 0,void 0,void 0,Q),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(c),l=null,r=await s.requestReferenceSpace(a),ut.setContext(s),ut.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function J(F){for(let Q=0;Q<F.removed.length;Q++){const ft=F.removed[Q],ot=v.indexOf(ft);ot>=0&&(v[ot]=null,w[ot].disconnect(ft))}for(let Q=0;Q<F.added.length;Q++){const ft=F.added[Q];let ot=v.indexOf(ft);if(ot===-1){for(let Mt=0;Mt<w.length;Mt++)if(Mt>=v.length){v.push(ft),ot=Mt;break}else if(v[Mt]===null){v[Mt]=ft,ot=Mt;break}if(ot===-1)break}const mt=w[ot];mt&&mt.connect(ft)}}const q=new D,at=new D;function K(F,Q,ft){q.setFromMatrixPosition(Q.matrixWorld),at.setFromMatrixPosition(ft.matrixWorld);const ot=q.distanceTo(at),mt=Q.projectionMatrix.elements,Mt=ft.projectionMatrix.elements,Et=mt[14]/(mt[10]-1),Wt=mt[14]/(mt[10]+1),j=(mt[9]+1)/mt[5],nt=(mt[9]-1)/mt[5],P=(mt[8]-1)/mt[0],At=(Mt[8]+1)/Mt[0],W=Et*P,et=Et*At,it=ot/(-P+At),Ut=it*-P;if(Q.matrixWorld.decompose(F.position,F.quaternion,F.scale),F.translateX(Ut),F.translateZ(it),F.matrixWorld.compose(F.position,F.quaternion,F.scale),F.matrixWorldInverse.copy(F.matrixWorld).invert(),mt[10]===-1)F.projectionMatrix.copy(Q.projectionMatrix),F.projectionMatrixInverse.copy(Q.projectionMatrixInverse);else{const vt=Et+it,R=Wt+it,y=W-Ut,L=et+(ot-Ut),N=j*Wt/R*vt,X=nt*Wt/R*vt;F.projectionMatrix.makePerspective(y,L,N,X,vt,R),F.projectionMatrixInverse.copy(F.projectionMatrix).invert()}}function pt(F,Q){Q===null?F.matrixWorld.copy(F.matrix):F.matrixWorld.multiplyMatrices(Q.matrixWorld,F.matrix),F.matrixWorldInverse.copy(F.matrixWorld).invert()}this.updateCamera=function(F){if(s===null)return;let Q=F.near,ft=F.far;_.texture!==null&&(_.depthNear>0&&(Q=_.depthNear),_.depthFar>0&&(ft=_.depthFar)),x.near=I.near=A.near=Q,x.far=I.far=A.far=ft,(C!==x.near||k!==x.far)&&(s.updateRenderState({depthNear:x.near,depthFar:x.far}),C=x.near,k=x.far),A.layers.mask=F.layers.mask|2,I.layers.mask=F.layers.mask|4,x.layers.mask=A.layers.mask|I.layers.mask;const ot=F.parent,mt=x.cameras;pt(x,ot);for(let Mt=0;Mt<mt.length;Mt++)pt(mt[Mt],ot);mt.length===2?K(x,A,I):x.projectionMatrix.copy(A.projectionMatrix),wt(F,x,ot)};function wt(F,Q,ft){ft===null?F.matrix.copy(Q.matrixWorld):(F.matrix.copy(ft.matrixWorld),F.matrix.invert(),F.matrix.multiply(Q.matrixWorld)),F.matrix.decompose(F.position,F.quaternion,F.scale),F.updateMatrixWorld(!0),F.projectionMatrix.copy(Q.projectionMatrix),F.projectionMatrixInverse.copy(Q.projectionMatrixInverse),F.isPerspectiveCamera&&(F.fov=Pa*2*Math.atan(1/F.projectionMatrix.elements[5]),F.zoom=1)}this.getCamera=function(){return x},this.getFoveation=function(){if(!(f===null&&p===null))return c},this.setFoveation=function(F){c=F,f!==null&&(f.fixedFoveation=F),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=F)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(x)};let dt=null;function Vt(F,Q){if(h=Q.getViewerPose(l||r),g=Q,h!==null){const ft=h.views;p!==null&&(t.setRenderTargetFramebuffer(S,p.framebuffer),t.setRenderTarget(S));let ot=!1;ft.length!==x.cameras.length&&(x.cameras.length=0,ot=!0);for(let Mt=0;Mt<ft.length;Mt++){const Et=ft[Mt];let Wt=null;if(p!==null)Wt=p.getViewport(Et);else{const nt=u.getViewSubImage(f,Et);Wt=nt.viewport,Mt===0&&(t.setRenderTargetTextures(S,nt.colorTexture,f.ignoreDepthValues?void 0:nt.depthStencilTexture),t.setRenderTarget(S))}let j=M[Mt];j===void 0&&(j=new Ge,j.layers.enable(Mt),j.viewport=new ue,M[Mt]=j),j.matrix.fromArray(Et.transform.matrix),j.matrix.decompose(j.position,j.quaternion,j.scale),j.projectionMatrix.fromArray(Et.projectionMatrix),j.projectionMatrixInverse.copy(j.projectionMatrix).invert(),j.viewport.set(Wt.x,Wt.y,Wt.width,Wt.height),Mt===0&&(x.matrix.copy(j.matrix),x.matrix.decompose(x.position,x.quaternion,x.scale)),ot===!0&&x.cameras.push(j)}const mt=s.enabledFeatures;if(mt&&mt.includes("depth-sensing")){const Mt=u.getDepthInformation(ft[0]);Mt&&Mt.isValid&&Mt.texture&&_.init(t,Mt,s.renderState)}}for(let ft=0;ft<w.length;ft++){const ot=v[ft],mt=w[ft];ot!==null&&mt!==void 0&&mt.update(ot,Q,l||r)}dt&&dt(F,Q),Q.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:Q}),g=null}const ut=new Rh;ut.setAnimationLoop(Vt),this.setAnimationLoop=function(F){dt=F},this.dispose=function(){}}}const di=new gn,pg=new le;function mg(i,t){function e(m,d){m.matrixAutoUpdate===!0&&m.updateMatrix(),d.value.copy(m.matrix)}function n(m,d){d.color.getRGB(m.fogColor.value,Th(i)),d.isFog?(m.fogNear.value=d.near,m.fogFar.value=d.far):d.isFogExp2&&(m.fogDensity.value=d.density)}function s(m,d,S,w,v){d.isMeshBasicMaterial||d.isMeshLambertMaterial?o(m,d):d.isMeshToonMaterial?(o(m,d),u(m,d)):d.isMeshPhongMaterial?(o(m,d),h(m,d)):d.isMeshStandardMaterial?(o(m,d),f(m,d),d.isMeshPhysicalMaterial&&p(m,d,v)):d.isMeshMatcapMaterial?(o(m,d),g(m,d)):d.isMeshDepthMaterial?o(m,d):d.isMeshDistanceMaterial?(o(m,d),_(m,d)):d.isMeshNormalMaterial?o(m,d):d.isLineBasicMaterial?(r(m,d),d.isLineDashedMaterial&&a(m,d)):d.isPointsMaterial?c(m,d,S,w):d.isSpriteMaterial?l(m,d):d.isShadowMaterial?(m.color.value.copy(d.color),m.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function o(m,d){m.opacity.value=d.opacity,d.color&&m.diffuse.value.copy(d.color),d.emissive&&m.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(m.map.value=d.map,e(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,e(d.alphaMap,m.alphaMapTransform)),d.bumpMap&&(m.bumpMap.value=d.bumpMap,e(d.bumpMap,m.bumpMapTransform),m.bumpScale.value=d.bumpScale,d.side===Oe&&(m.bumpScale.value*=-1)),d.normalMap&&(m.normalMap.value=d.normalMap,e(d.normalMap,m.normalMapTransform),m.normalScale.value.copy(d.normalScale),d.side===Oe&&m.normalScale.value.negate()),d.displacementMap&&(m.displacementMap.value=d.displacementMap,e(d.displacementMap,m.displacementMapTransform),m.displacementScale.value=d.displacementScale,m.displacementBias.value=d.displacementBias),d.emissiveMap&&(m.emissiveMap.value=d.emissiveMap,e(d.emissiveMap,m.emissiveMapTransform)),d.specularMap&&(m.specularMap.value=d.specularMap,e(d.specularMap,m.specularMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest);const S=t.get(d),w=S.envMap,v=S.envMapRotation;w&&(m.envMap.value=w,di.copy(v),di.x*=-1,di.y*=-1,di.z*=-1,w.isCubeTexture&&w.isRenderTargetTexture===!1&&(di.y*=-1,di.z*=-1),m.envMapRotation.value.setFromMatrix4(pg.makeRotationFromEuler(di)),m.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=d.reflectivity,m.ior.value=d.ior,m.refractionRatio.value=d.refractionRatio),d.lightMap&&(m.lightMap.value=d.lightMap,m.lightMapIntensity.value=d.lightMapIntensity,e(d.lightMap,m.lightMapTransform)),d.aoMap&&(m.aoMap.value=d.aoMap,m.aoMapIntensity.value=d.aoMapIntensity,e(d.aoMap,m.aoMapTransform))}function r(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,d.map&&(m.map.value=d.map,e(d.map,m.mapTransform))}function a(m,d){m.dashSize.value=d.dashSize,m.totalSize.value=d.dashSize+d.gapSize,m.scale.value=d.scale}function c(m,d,S,w){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.size.value=d.size*S,m.scale.value=w*.5,d.map&&(m.map.value=d.map,e(d.map,m.uvTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,e(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function l(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.rotation.value=d.rotation,d.map&&(m.map.value=d.map,e(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,e(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function h(m,d){m.specular.value.copy(d.specular),m.shininess.value=Math.max(d.shininess,1e-4)}function u(m,d){d.gradientMap&&(m.gradientMap.value=d.gradientMap)}function f(m,d){m.metalness.value=d.metalness,d.metalnessMap&&(m.metalnessMap.value=d.metalnessMap,e(d.metalnessMap,m.metalnessMapTransform)),m.roughness.value=d.roughness,d.roughnessMap&&(m.roughnessMap.value=d.roughnessMap,e(d.roughnessMap,m.roughnessMapTransform)),d.envMap&&(m.envMapIntensity.value=d.envMapIntensity)}function p(m,d,S){m.ior.value=d.ior,d.sheen>0&&(m.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),m.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(m.sheenColorMap.value=d.sheenColorMap,e(d.sheenColorMap,m.sheenColorMapTransform)),d.sheenRoughnessMap&&(m.sheenRoughnessMap.value=d.sheenRoughnessMap,e(d.sheenRoughnessMap,m.sheenRoughnessMapTransform))),d.clearcoat>0&&(m.clearcoat.value=d.clearcoat,m.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(m.clearcoatMap.value=d.clearcoatMap,e(d.clearcoatMap,m.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,e(d.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(m.clearcoatNormalMap.value=d.clearcoatNormalMap,e(d.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===Oe&&m.clearcoatNormalScale.value.negate())),d.dispersion>0&&(m.dispersion.value=d.dispersion),d.iridescence>0&&(m.iridescence.value=d.iridescence,m.iridescenceIOR.value=d.iridescenceIOR,m.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(m.iridescenceMap.value=d.iridescenceMap,e(d.iridescenceMap,m.iridescenceMapTransform)),d.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=d.iridescenceThicknessMap,e(d.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),d.transmission>0&&(m.transmission.value=d.transmission,m.transmissionSamplerMap.value=S.texture,m.transmissionSamplerSize.value.set(S.width,S.height),d.transmissionMap&&(m.transmissionMap.value=d.transmissionMap,e(d.transmissionMap,m.transmissionMapTransform)),m.thickness.value=d.thickness,d.thicknessMap&&(m.thicknessMap.value=d.thicknessMap,e(d.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=d.attenuationDistance,m.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(m.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(m.anisotropyMap.value=d.anisotropyMap,e(d.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=d.specularIntensity,m.specularColor.value.copy(d.specularColor),d.specularColorMap&&(m.specularColorMap.value=d.specularColorMap,e(d.specularColorMap,m.specularColorMapTransform)),d.specularIntensityMap&&(m.specularIntensityMap.value=d.specularIntensityMap,e(d.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,d){d.matcap&&(m.matcap.value=d.matcap)}function _(m,d){const S=t.get(d).light;m.referencePosition.value.setFromMatrixPosition(S.matrixWorld),m.nearDistance.value=S.shadow.camera.near,m.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function gg(i,t,e,n){let s={},o={},r=[];const a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(S,w){const v=w.program;n.uniformBlockBinding(S,v)}function l(S,w){let v=s[S.id];v===void 0&&(g(S),v=h(S),s[S.id]=v,S.addEventListener("dispose",m));const U=w.program;n.updateUBOMapping(S,U);const T=t.render.frame;o[S.id]!==T&&(f(S),o[S.id]=T)}function h(S){const w=u();S.__bindingPointIndex=w;const v=i.createBuffer(),U=S.__size,T=S.usage;return i.bindBuffer(i.UNIFORM_BUFFER,v),i.bufferData(i.UNIFORM_BUFFER,U,T),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,w,v),v}function u(){for(let S=0;S<a;S++)if(r.indexOf(S)===-1)return r.push(S),S;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(S){const w=s[S.id],v=S.uniforms,U=S.__cache;i.bindBuffer(i.UNIFORM_BUFFER,w);for(let T=0,A=v.length;T<A;T++){const I=Array.isArray(v[T])?v[T]:[v[T]];for(let M=0,x=I.length;M<x;M++){const C=I[M];if(p(C,T,M,U)===!0){const k=C.__offset,G=Array.isArray(C.value)?C.value:[C.value];let V=0;for(let J=0;J<G.length;J++){const q=G[J],at=_(q);typeof q=="number"||typeof q=="boolean"?(C.__data[0]=q,i.bufferSubData(i.UNIFORM_BUFFER,k+V,C.__data)):q.isMatrix3?(C.__data[0]=q.elements[0],C.__data[1]=q.elements[1],C.__data[2]=q.elements[2],C.__data[3]=0,C.__data[4]=q.elements[3],C.__data[5]=q.elements[4],C.__data[6]=q.elements[5],C.__data[7]=0,C.__data[8]=q.elements[6],C.__data[9]=q.elements[7],C.__data[10]=q.elements[8],C.__data[11]=0):(q.toArray(C.__data,V),V+=at.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,k,C.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function p(S,w,v,U){const T=S.value,A=w+"_"+v;if(U[A]===void 0)return typeof T=="number"||typeof T=="boolean"?U[A]=T:U[A]=T.clone(),!0;{const I=U[A];if(typeof T=="number"||typeof T=="boolean"){if(I!==T)return U[A]=T,!0}else if(I.equals(T)===!1)return I.copy(T),!0}return!1}function g(S){const w=S.uniforms;let v=0;const U=16;for(let A=0,I=w.length;A<I;A++){const M=Array.isArray(w[A])?w[A]:[w[A]];for(let x=0,C=M.length;x<C;x++){const k=M[x],G=Array.isArray(k.value)?k.value:[k.value];for(let V=0,J=G.length;V<J;V++){const q=G[V],at=_(q),K=v%U,pt=K%at.boundary,wt=K+pt;v+=pt,wt!==0&&U-wt<at.storage&&(v+=U-wt),k.__data=new Float32Array(at.storage/Float32Array.BYTES_PER_ELEMENT),k.__offset=v,v+=at.storage}}}const T=v%U;return T>0&&(v+=U-T),S.__size=v,S.__cache={},this}function _(S){const w={boundary:0,storage:0};return typeof S=="number"||typeof S=="boolean"?(w.boundary=4,w.storage=4):S.isVector2?(w.boundary=8,w.storage=8):S.isVector3||S.isColor?(w.boundary=16,w.storage=12):S.isVector4?(w.boundary=16,w.storage=16):S.isMatrix3?(w.boundary=48,w.storage=48):S.isMatrix4?(w.boundary=64,w.storage=64):S.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",S),w}function m(S){const w=S.target;w.removeEventListener("dispose",m);const v=r.indexOf(w.__bindingPointIndex);r.splice(v,1),i.deleteBuffer(s[w.id]),delete s[w.id],delete o[w.id]}function d(){for(const S in s)i.deleteBuffer(s[S]);r=[],s={},o={}}return{bind:c,update:l,dispose:d}}class sc{constructor(t={}){const{canvas:e=sd(),context:n=null,depth:s=!0,stencil:o=!1,alpha:r=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:f=!1}=t;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=r;const g=new Uint32Array(4),_=new Int32Array(4);let m=null,d=null;const S=[],w=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Ne,this.toneMapping=ni,this.toneMappingExposure=1;const v=this;let U=!1,T=0,A=0,I=null,M=-1,x=null;const C=new ue,k=new ue;let G=null;const V=new Rt(0);let J=0,q=e.width,at=e.height,K=1,pt=null,wt=null;const dt=new ue(0,0,q,at),Vt=new ue(0,0,q,at);let ut=!1;const F=new nc;let Q=!1,ft=!1;const ot=new le,mt=new le,Mt=new D,Et=new ue,Wt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let j=!1;function nt(){return I===null?K:1}let P=n;function At(E,B){return e.getContext(E,B)}try{const E={alpha:!0,depth:s,stencil:o,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Wa}`),e.addEventListener("webglcontextlost",lt,!1),e.addEventListener("webglcontextrestored",Dt,!1),e.addEventListener("webglcontextcreationerror",Pt,!1),P===null){const B="webgl2";if(P=At(B,E),P===null)throw At(B)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}let W,et,it,Ut,vt,R,y,L,N,X,Y,gt,ct,St,Gt,ht,yt,Nt,Ft,Ct,qt,Jt,de,O;function bt(){W=new w0(P),W.init(),Jt=new ag(P,W),et=new g0(P,W,t,Jt),it=new sg(P,W),et.reverseDepthBuffer&&f&&it.buffers.depth.setReversed(!0),Ut=new T0(P),vt=new Vm,R=new rg(P,W,it,vt,et,Jt,Ut),y=new v0(v),L=new y0(v),N=new Ld(P),de=new p0(P,N),X=new S0(P,N,Ut,de),Y=new A0(P,X,N,Ut),Ft=new b0(P,et,R),ht=new _0(vt),gt=new Gm(v,y,L,W,et,de,ht),ct=new mg(v,vt),St=new Xm,Gt=new Jm(W),Nt=new f0(v,y,L,it,Y,p,c),yt=new ng(v,Y,et),O=new gg(P,Ut,et,it),Ct=new m0(P,W,Ut),qt=new E0(P,W,Ut),Ut.programs=gt.programs,v.capabilities=et,v.extensions=W,v.properties=vt,v.renderLists=St,v.shadowMap=yt,v.state=it,v.info=Ut}bt();const tt=new fg(v,P);this.xr=tt,this.getContext=function(){return P},this.getContextAttributes=function(){return P.getContextAttributes()},this.forceContextLoss=function(){const E=W.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=W.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return K},this.setPixelRatio=function(E){E!==void 0&&(K=E,this.setSize(q,at,!1))},this.getSize=function(E){return E.set(q,at)},this.setSize=function(E,B,$=!0){if(tt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}q=E,at=B,e.width=Math.floor(E*K),e.height=Math.floor(B*K),$===!0&&(e.style.width=E+"px",e.style.height=B+"px"),this.setViewport(0,0,E,B)},this.getDrawingBufferSize=function(E){return E.set(q*K,at*K).floor()},this.setDrawingBufferSize=function(E,B,$){q=E,at=B,K=$,e.width=Math.floor(E*$),e.height=Math.floor(B*$),this.setViewport(0,0,E,B)},this.getCurrentViewport=function(E){return E.copy(C)},this.getViewport=function(E){return E.copy(dt)},this.setViewport=function(E,B,$,Z){E.isVector4?dt.set(E.x,E.y,E.z,E.w):dt.set(E,B,$,Z),it.viewport(C.copy(dt).multiplyScalar(K).round())},this.getScissor=function(E){return E.copy(Vt)},this.setScissor=function(E,B,$,Z){E.isVector4?Vt.set(E.x,E.y,E.z,E.w):Vt.set(E,B,$,Z),it.scissor(k.copy(Vt).multiplyScalar(K).round())},this.getScissorTest=function(){return ut},this.setScissorTest=function(E){it.setScissorTest(ut=E)},this.setOpaqueSort=function(E){pt=E},this.setTransparentSort=function(E){wt=E},this.getClearColor=function(E){return E.copy(Nt.getClearColor())},this.setClearColor=function(){Nt.setClearColor.apply(Nt,arguments)},this.getClearAlpha=function(){return Nt.getClearAlpha()},this.setClearAlpha=function(){Nt.setClearAlpha.apply(Nt,arguments)},this.clear=function(E=!0,B=!0,$=!0){let Z=0;if(E){let H=!1;if(I!==null){const xt=I.texture.format;H=xt===ja||xt===Ja||xt===Ka}if(H){const xt=I.texture.type,Lt=xt===zn||xt===Ei||xt===Ds||xt===ss||xt===qa||xt===$a,zt=Nt.getClearColor(),Bt=Nt.getClearAlpha(),Xt=zt.r,Zt=zt.g,kt=zt.b;Lt?(g[0]=Xt,g[1]=Zt,g[2]=kt,g[3]=Bt,P.clearBufferuiv(P.COLOR,0,g)):(_[0]=Xt,_[1]=Zt,_[2]=kt,_[3]=Bt,P.clearBufferiv(P.COLOR,0,_))}else Z|=P.COLOR_BUFFER_BIT}B&&(Z|=P.DEPTH_BUFFER_BIT),$&&(Z|=P.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),P.clear(Z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",lt,!1),e.removeEventListener("webglcontextrestored",Dt,!1),e.removeEventListener("webglcontextcreationerror",Pt,!1),St.dispose(),Gt.dispose(),vt.dispose(),y.dispose(),L.dispose(),Y.dispose(),de.dispose(),O.dispose(),gt.dispose(),tt.dispose(),tt.removeEventListener("sessionstart",vc),tt.removeEventListener("sessionend",xc),ri.stop()};function lt(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),U=!0}function Dt(){console.log("THREE.WebGLRenderer: Context Restored."),U=!1;const E=Ut.autoReset,B=yt.enabled,$=yt.autoUpdate,Z=yt.needsUpdate,H=yt.type;bt(),Ut.autoReset=E,yt.enabled=B,yt.autoUpdate=$,yt.needsUpdate=Z,yt.type=H}function Pt(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function $t(E){const B=E.target;B.removeEventListener("dispose",$t),Me(B)}function Me(E){ze(E),vt.remove(E)}function ze(E){const B=vt.get(E).programs;B!==void 0&&(B.forEach(function($){gt.releaseProgram($)}),E.isShaderMaterial&&gt.releaseShaderCache(E))}this.renderBufferDirect=function(E,B,$,Z,H,xt){B===null&&(B=Wt);const Lt=H.isMesh&&H.matrixWorld.determinant()<0,zt=pu(E,B,$,Z,H);it.setMaterial(Z,Lt);let Bt=$.index,Xt=1;if(Z.wireframe===!0){if(Bt=X.getWireframeAttribute($),Bt===void 0)return;Xt=2}const Zt=$.drawRange,kt=$.attributes.position;let ie=Zt.start*Xt,fe=(Zt.start+Zt.count)*Xt;xt!==null&&(ie=Math.max(ie,xt.start*Xt),fe=Math.min(fe,(xt.start+xt.count)*Xt)),Bt!==null?(ie=Math.max(ie,0),fe=Math.min(fe,Bt.count)):kt!=null&&(ie=Math.max(ie,0),fe=Math.min(fe,kt.count));const me=fe-ie;if(me<0||me===1/0)return;de.setup(H,Z,zt,$,Bt);let qe,oe=Ct;if(Bt!==null&&(qe=N.get(Bt),oe=qt,oe.setIndex(qe)),H.isMesh)Z.wireframe===!0?(it.setLineWidth(Z.wireframeLinewidth*nt()),oe.setMode(P.LINES)):oe.setMode(P.TRIANGLES);else if(H.isLine){let Ht=Z.linewidth;Ht===void 0&&(Ht=1),it.setLineWidth(Ht*nt()),H.isLineSegments?oe.setMode(P.LINES):H.isLineLoop?oe.setMode(P.LINE_LOOP):oe.setMode(P.LINE_STRIP)}else H.isPoints?oe.setMode(P.POINTS):H.isSprite&&oe.setMode(P.TRIANGLES);if(H.isBatchedMesh)if(H._multiDrawInstances!==null)oe.renderMultiDrawInstances(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount,H._multiDrawInstances);else if(W.get("WEBGL_multi_draw"))oe.renderMultiDraw(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount);else{const Ht=H._multiDrawStarts,Rn=H._multiDrawCounts,re=H._multiDrawCount,cn=Bt?N.get(Bt).bytesPerElement:1,Pi=vt.get(Z).currentProgram.getUniforms();for(let Ke=0;Ke<re;Ke++)Pi.setValue(P,"_gl_DrawID",Ke),oe.render(Ht[Ke]/cn,Rn[Ke])}else if(H.isInstancedMesh)oe.renderInstances(ie,me,H.count);else if($.isInstancedBufferGeometry){const Ht=$._maxInstanceCount!==void 0?$._maxInstanceCount:1/0,Rn=Math.min($.instanceCount,Ht);oe.renderInstances(ie,me,Rn)}else oe.render(ie,me)};function ae(E,B,$){E.transparent===!0&&E.side===be&&E.forceSinglePass===!1?(E.side=Oe,E.needsUpdate=!0,Xs(E,B,$),E.side=ii,E.needsUpdate=!0,Xs(E,B,$),E.side=be):Xs(E,B,$)}this.compile=function(E,B,$=null){$===null&&($=E),d=Gt.get($),d.init(B),w.push(d),$.traverseVisible(function(H){H.isLight&&H.layers.test(B.layers)&&(d.pushLight(H),H.castShadow&&d.pushShadow(H))}),E!==$&&E.traverseVisible(function(H){H.isLight&&H.layers.test(B.layers)&&(d.pushLight(H),H.castShadow&&d.pushShadow(H))}),d.setupLights();const Z=new Set;return E.traverse(function(H){if(!(H.isMesh||H.isPoints||H.isLine||H.isSprite))return;const xt=H.material;if(xt)if(Array.isArray(xt))for(let Lt=0;Lt<xt.length;Lt++){const zt=xt[Lt];ae(zt,$,H),Z.add(zt)}else ae(xt,$,H),Z.add(xt)}),w.pop(),d=null,Z},this.compileAsync=function(E,B,$=null){const Z=this.compile(E,B,$);return new Promise(H=>{function xt(){if(Z.forEach(function(Lt){vt.get(Lt).currentProgram.isReady()&&Z.delete(Lt)}),Z.size===0){H(E);return}setTimeout(xt,10)}W.get("KHR_parallel_shader_compile")!==null?xt():setTimeout(xt,10)})};let an=null;function An(E){an&&an(E)}function vc(){ri.stop()}function xc(){ri.start()}const ri=new Rh;ri.setAnimationLoop(An),typeof self<"u"&&ri.setContext(self),this.setAnimationLoop=function(E){an=E,tt.setAnimationLoop(E),E===null?ri.stop():ri.start()},tt.addEventListener("sessionstart",vc),tt.addEventListener("sessionend",xc),this.render=function(E,B){if(B!==void 0&&B.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(U===!0)return;if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),B.parent===null&&B.matrixWorldAutoUpdate===!0&&B.updateMatrixWorld(),tt.enabled===!0&&tt.isPresenting===!0&&(tt.cameraAutoUpdate===!0&&tt.updateCamera(B),B=tt.getCamera()),E.isScene===!0&&E.onBeforeRender(v,E,B,I),d=Gt.get(E,w.length),d.init(B),w.push(d),mt.multiplyMatrices(B.projectionMatrix,B.matrixWorldInverse),F.setFromProjectionMatrix(mt),ft=this.localClippingEnabled,Q=ht.init(this.clippingPlanes,ft),m=St.get(E,S.length),m.init(),S.push(m),tt.enabled===!0&&tt.isPresenting===!0){const xt=v.xr.getDepthSensingMesh();xt!==null&&jo(xt,B,-1/0,v.sortObjects)}jo(E,B,0,v.sortObjects),m.finish(),v.sortObjects===!0&&m.sort(pt,wt),j=tt.enabled===!1||tt.isPresenting===!1||tt.hasDepthSensing()===!1,j&&Nt.addToRenderList(m,E),this.info.render.frame++,Q===!0&&ht.beginShadows();const $=d.state.shadowsArray;yt.render($,E,B),Q===!0&&ht.endShadows(),this.info.autoReset===!0&&this.info.reset();const Z=m.opaque,H=m.transmissive;if(d.setupLights(),B.isArrayCamera){const xt=B.cameras;if(H.length>0)for(let Lt=0,zt=xt.length;Lt<zt;Lt++){const Bt=xt[Lt];yc(Z,H,E,Bt)}j&&Nt.render(E);for(let Lt=0,zt=xt.length;Lt<zt;Lt++){const Bt=xt[Lt];Mc(m,E,Bt,Bt.viewport)}}else H.length>0&&yc(Z,H,E,B),j&&Nt.render(E),Mc(m,E,B);I!==null&&(R.updateMultisampleRenderTarget(I),R.updateRenderTargetMipmap(I)),E.isScene===!0&&E.onAfterRender(v,E,B),de.resetDefaultState(),M=-1,x=null,w.pop(),w.length>0?(d=w[w.length-1],Q===!0&&ht.setGlobalState(v.clippingPlanes,d.state.camera)):d=null,S.pop(),S.length>0?m=S[S.length-1]:m=null};function jo(E,B,$,Z){if(E.visible===!1)return;if(E.layers.test(B.layers)){if(E.isGroup)$=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(B);else if(E.isLight)d.pushLight(E),E.castShadow&&d.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||F.intersectsSprite(E)){Z&&Et.setFromMatrixPosition(E.matrixWorld).applyMatrix4(mt);const Lt=Y.update(E),zt=E.material;zt.visible&&m.push(E,Lt,zt,$,Et.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||F.intersectsObject(E))){const Lt=Y.update(E),zt=E.material;if(Z&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),Et.copy(E.boundingSphere.center)):(Lt.boundingSphere===null&&Lt.computeBoundingSphere(),Et.copy(Lt.boundingSphere.center)),Et.applyMatrix4(E.matrixWorld).applyMatrix4(mt)),Array.isArray(zt)){const Bt=Lt.groups;for(let Xt=0,Zt=Bt.length;Xt<Zt;Xt++){const kt=Bt[Xt],ie=zt[kt.materialIndex];ie&&ie.visible&&m.push(E,Lt,ie,$,Et.z,kt)}}else zt.visible&&m.push(E,Lt,zt,$,Et.z,null)}}const xt=E.children;for(let Lt=0,zt=xt.length;Lt<zt;Lt++)jo(xt[Lt],B,$,Z)}function Mc(E,B,$,Z){const H=E.opaque,xt=E.transmissive,Lt=E.transparent;d.setupLightsView($),Q===!0&&ht.setGlobalState(v.clippingPlanes,$),Z&&it.viewport(C.copy(Z)),H.length>0&&Ws(H,B,$),xt.length>0&&Ws(xt,B,$),Lt.length>0&&Ws(Lt,B,$),it.buffers.depth.setTest(!0),it.buffers.depth.setMask(!0),it.buffers.color.setMask(!0),it.setPolygonOffset(!1)}function yc(E,B,$,Z){if(($.isScene===!0?$.overrideMaterial:null)!==null)return;d.state.transmissionRenderTarget[Z.id]===void 0&&(d.state.transmissionRenderTarget[Z.id]=new Ti(1,1,{generateMipmaps:!0,type:W.has("EXT_color_buffer_half_float")||W.has("EXT_color_buffer_float")?Bs:zn,minFilter:Mi,samples:4,stencilBuffer:o,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ne.workingColorSpace}));const xt=d.state.transmissionRenderTarget[Z.id],Lt=Z.viewport||C;xt.setSize(Lt.z,Lt.w);const zt=v.getRenderTarget();v.setRenderTarget(xt),v.getClearColor(V),J=v.getClearAlpha(),J<1&&v.setClearColor(16777215,.5),v.clear(),j&&Nt.render($);const Bt=v.toneMapping;v.toneMapping=ni;const Xt=Z.viewport;if(Z.viewport!==void 0&&(Z.viewport=void 0),d.setupLightsView(Z),Q===!0&&ht.setGlobalState(v.clippingPlanes,Z),Ws(E,$,Z),R.updateMultisampleRenderTarget(xt),R.updateRenderTargetMipmap(xt),W.has("WEBGL_multisampled_render_to_texture")===!1){let Zt=!1;for(let kt=0,ie=B.length;kt<ie;kt++){const fe=B[kt],me=fe.object,qe=fe.geometry,oe=fe.material,Ht=fe.group;if(oe.side===be&&me.layers.test(Z.layers)){const Rn=oe.side;oe.side=Oe,oe.needsUpdate=!0,wc(me,$,Z,qe,oe,Ht),oe.side=Rn,oe.needsUpdate=!0,Zt=!0}}Zt===!0&&(R.updateMultisampleRenderTarget(xt),R.updateRenderTargetMipmap(xt))}v.setRenderTarget(zt),v.setClearColor(V,J),Xt!==void 0&&(Z.viewport=Xt),v.toneMapping=Bt}function Ws(E,B,$){const Z=B.isScene===!0?B.overrideMaterial:null;for(let H=0,xt=E.length;H<xt;H++){const Lt=E[H],zt=Lt.object,Bt=Lt.geometry,Xt=Z===null?Lt.material:Z,Zt=Lt.group;zt.layers.test($.layers)&&wc(zt,B,$,Bt,Xt,Zt)}}function wc(E,B,$,Z,H,xt){E.onBeforeRender(v,B,$,Z,H,xt),E.modelViewMatrix.multiplyMatrices($.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),H.onBeforeRender(v,B,$,Z,E,xt),H.transparent===!0&&H.side===be&&H.forceSinglePass===!1?(H.side=Oe,H.needsUpdate=!0,v.renderBufferDirect($,B,Z,H,E,xt),H.side=ii,H.needsUpdate=!0,v.renderBufferDirect($,B,Z,H,E,xt),H.side=be):v.renderBufferDirect($,B,Z,H,E,xt),E.onAfterRender(v,B,$,Z,H,xt)}function Xs(E,B,$){B.isScene!==!0&&(B=Wt);const Z=vt.get(E),H=d.state.lights,xt=d.state.shadowsArray,Lt=H.state.version,zt=gt.getParameters(E,H.state,xt,B,$),Bt=gt.getProgramCacheKey(zt);let Xt=Z.programs;Z.environment=E.isMeshStandardMaterial?B.environment:null,Z.fog=B.fog,Z.envMap=(E.isMeshStandardMaterial?L:y).get(E.envMap||Z.environment),Z.envMapRotation=Z.environment!==null&&E.envMap===null?B.environmentRotation:E.envMapRotation,Xt===void 0&&(E.addEventListener("dispose",$t),Xt=new Map,Z.programs=Xt);let Zt=Xt.get(Bt);if(Zt!==void 0){if(Z.currentProgram===Zt&&Z.lightsStateVersion===Lt)return Ec(E,zt),Zt}else zt.uniforms=gt.getUniforms(E),E.onBeforeCompile(zt,v),Zt=gt.acquireProgram(zt,Bt),Xt.set(Bt,Zt),Z.uniforms=zt.uniforms;const kt=Z.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(kt.clippingPlanes=ht.uniform),Ec(E,zt),Z.needsLights=gu(E),Z.lightsStateVersion=Lt,Z.needsLights&&(kt.ambientLightColor.value=H.state.ambient,kt.lightProbe.value=H.state.probe,kt.directionalLights.value=H.state.directional,kt.directionalLightShadows.value=H.state.directionalShadow,kt.spotLights.value=H.state.spot,kt.spotLightShadows.value=H.state.spotShadow,kt.rectAreaLights.value=H.state.rectArea,kt.ltc_1.value=H.state.rectAreaLTC1,kt.ltc_2.value=H.state.rectAreaLTC2,kt.pointLights.value=H.state.point,kt.pointLightShadows.value=H.state.pointShadow,kt.hemisphereLights.value=H.state.hemi,kt.directionalShadowMap.value=H.state.directionalShadowMap,kt.directionalShadowMatrix.value=H.state.directionalShadowMatrix,kt.spotShadowMap.value=H.state.spotShadowMap,kt.spotLightMatrix.value=H.state.spotLightMatrix,kt.spotLightMap.value=H.state.spotLightMap,kt.pointShadowMap.value=H.state.pointShadowMap,kt.pointShadowMatrix.value=H.state.pointShadowMatrix),Z.currentProgram=Zt,Z.uniformsList=null,Zt}function Sc(E){if(E.uniformsList===null){const B=E.currentProgram.getUniforms();E.uniformsList=Co.seqWithValue(B.seq,E.uniforms)}return E.uniformsList}function Ec(E,B){const $=vt.get(E);$.outputColorSpace=B.outputColorSpace,$.batching=B.batching,$.batchingColor=B.batchingColor,$.instancing=B.instancing,$.instancingColor=B.instancingColor,$.instancingMorph=B.instancingMorph,$.skinning=B.skinning,$.morphTargets=B.morphTargets,$.morphNormals=B.morphNormals,$.morphColors=B.morphColors,$.morphTargetsCount=B.morphTargetsCount,$.numClippingPlanes=B.numClippingPlanes,$.numIntersection=B.numClipIntersection,$.vertexAlphas=B.vertexAlphas,$.vertexTangents=B.vertexTangents,$.toneMapping=B.toneMapping}function pu(E,B,$,Z,H){B.isScene!==!0&&(B=Wt),R.resetTextureUnits();const xt=B.fog,Lt=Z.isMeshStandardMaterial?B.environment:null,zt=I===null?v.outputColorSpace:I.isXRRenderTarget===!0?I.texture.colorSpace:cs,Bt=(Z.isMeshStandardMaterial?L:y).get(Z.envMap||Lt),Xt=Z.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,Zt=!!$.attributes.tangent&&(!!Z.normalMap||Z.anisotropy>0),kt=!!$.morphAttributes.position,ie=!!$.morphAttributes.normal,fe=!!$.morphAttributes.color;let me=ni;Z.toneMapped&&(I===null||I.isXRRenderTarget===!0)&&(me=v.toneMapping);const qe=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,oe=qe!==void 0?qe.length:0,Ht=vt.get(Z),Rn=d.state.lights;if(Q===!0&&(ft===!0||E!==x)){const on=E===x&&Z.id===M;ht.setState(Z,E,on)}let re=!1;Z.version===Ht.__version?(Ht.needsLights&&Ht.lightsStateVersion!==Rn.state.version||Ht.outputColorSpace!==zt||H.isBatchedMesh&&Ht.batching===!1||!H.isBatchedMesh&&Ht.batching===!0||H.isBatchedMesh&&Ht.batchingColor===!0&&H.colorTexture===null||H.isBatchedMesh&&Ht.batchingColor===!1&&H.colorTexture!==null||H.isInstancedMesh&&Ht.instancing===!1||!H.isInstancedMesh&&Ht.instancing===!0||H.isSkinnedMesh&&Ht.skinning===!1||!H.isSkinnedMesh&&Ht.skinning===!0||H.isInstancedMesh&&Ht.instancingColor===!0&&H.instanceColor===null||H.isInstancedMesh&&Ht.instancingColor===!1&&H.instanceColor!==null||H.isInstancedMesh&&Ht.instancingMorph===!0&&H.morphTexture===null||H.isInstancedMesh&&Ht.instancingMorph===!1&&H.morphTexture!==null||Ht.envMap!==Bt||Z.fog===!0&&Ht.fog!==xt||Ht.numClippingPlanes!==void 0&&(Ht.numClippingPlanes!==ht.numPlanes||Ht.numIntersection!==ht.numIntersection)||Ht.vertexAlphas!==Xt||Ht.vertexTangents!==Zt||Ht.morphTargets!==kt||Ht.morphNormals!==ie||Ht.morphColors!==fe||Ht.toneMapping!==me||Ht.morphTargetsCount!==oe)&&(re=!0):(re=!0,Ht.__version=Z.version);let cn=Ht.currentProgram;re===!0&&(cn=Xs(Z,B,H));let Pi=!1,Ke=!1,fs=!1;const ge=cn.getUniforms(),xn=Ht.uniforms;if(it.useProgram(cn.program)&&(Pi=!0,Ke=!0,fs=!0),Z.id!==M&&(M=Z.id,Ke=!0),Pi||x!==E){it.buffers.depth.getReversed()?(ot.copy(E.projectionMatrix),rd(ot),ad(ot),ge.setValue(P,"projectionMatrix",ot)):ge.setValue(P,"projectionMatrix",E.projectionMatrix),ge.setValue(P,"viewMatrix",E.matrixWorldInverse);const Hn=ge.map.cameraPosition;Hn!==void 0&&Hn.setValue(P,Mt.setFromMatrixPosition(E.matrixWorld)),et.logarithmicDepthBuffer&&ge.setValue(P,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(Z.isMeshPhongMaterial||Z.isMeshToonMaterial||Z.isMeshLambertMaterial||Z.isMeshBasicMaterial||Z.isMeshStandardMaterial||Z.isShaderMaterial)&&ge.setValue(P,"isOrthographic",E.isOrthographicCamera===!0),x!==E&&(x=E,Ke=!0,fs=!0)}if(H.isSkinnedMesh){ge.setOptional(P,H,"bindMatrix"),ge.setOptional(P,H,"bindMatrixInverse");const on=H.skeleton;on&&(on.boneTexture===null&&on.computeBoneTexture(),ge.setValue(P,"boneTexture",on.boneTexture,R))}H.isBatchedMesh&&(ge.setOptional(P,H,"batchingTexture"),ge.setValue(P,"batchingTexture",H._matricesTexture,R),ge.setOptional(P,H,"batchingIdTexture"),ge.setValue(P,"batchingIdTexture",H._indirectTexture,R),ge.setOptional(P,H,"batchingColorTexture"),H._colorsTexture!==null&&ge.setValue(P,"batchingColorTexture",H._colorsTexture,R));const ps=$.morphAttributes;if((ps.position!==void 0||ps.normal!==void 0||ps.color!==void 0)&&Ft.update(H,$,cn),(Ke||Ht.receiveShadow!==H.receiveShadow)&&(Ht.receiveShadow=H.receiveShadow,ge.setValue(P,"receiveShadow",H.receiveShadow)),Z.isMeshGouraudMaterial&&Z.envMap!==null&&(xn.envMap.value=Bt,xn.flipEnvMap.value=Bt.isCubeTexture&&Bt.isRenderTargetTexture===!1?-1:1),Z.isMeshStandardMaterial&&Z.envMap===null&&B.environment!==null&&(xn.envMapIntensity.value=B.environmentIntensity),Ke&&(ge.setValue(P,"toneMappingExposure",v.toneMappingExposure),Ht.needsLights&&mu(xn,fs),xt&&Z.fog===!0&&ct.refreshFogUniforms(xn,xt),ct.refreshMaterialUniforms(xn,Z,K,at,d.state.transmissionRenderTarget[E.id]),Co.upload(P,Sc(Ht),xn,R)),Z.isShaderMaterial&&Z.uniformsNeedUpdate===!0&&(Co.upload(P,Sc(Ht),xn,R),Z.uniformsNeedUpdate=!1),Z.isSpriteMaterial&&ge.setValue(P,"center",H.center),ge.setValue(P,"modelViewMatrix",H.modelViewMatrix),ge.setValue(P,"normalMatrix",H.normalMatrix),ge.setValue(P,"modelMatrix",H.matrixWorld),Z.isShaderMaterial||Z.isRawShaderMaterial){const on=Z.uniformsGroups;for(let Hn=0,Gn=on.length;Hn<Gn;Hn++){const Tc=on[Hn];O.update(Tc,cn),O.bind(Tc,cn)}}return cn}function mu(E,B){E.ambientLightColor.needsUpdate=B,E.lightProbe.needsUpdate=B,E.directionalLights.needsUpdate=B,E.directionalLightShadows.needsUpdate=B,E.pointLights.needsUpdate=B,E.pointLightShadows.needsUpdate=B,E.spotLights.needsUpdate=B,E.spotLightShadows.needsUpdate=B,E.rectAreaLights.needsUpdate=B,E.hemisphereLights.needsUpdate=B}function gu(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return T},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return I},this.setRenderTargetTextures=function(E,B,$){vt.get(E.texture).__webglTexture=B,vt.get(E.depthTexture).__webglTexture=$;const Z=vt.get(E);Z.__hasExternalTextures=!0,Z.__autoAllocateDepthBuffer=$===void 0,Z.__autoAllocateDepthBuffer||W.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),Z.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(E,B){const $=vt.get(E);$.__webglFramebuffer=B,$.__useDefaultFramebuffer=B===void 0},this.setRenderTarget=function(E,B=0,$=0){I=E,T=B,A=$;let Z=!0,H=null,xt=!1,Lt=!1;if(E){const Bt=vt.get(E);if(Bt.__useDefaultFramebuffer!==void 0)it.bindFramebuffer(P.FRAMEBUFFER,null),Z=!1;else if(Bt.__webglFramebuffer===void 0)R.setupRenderTarget(E);else if(Bt.__hasExternalTextures)R.rebindTextures(E,vt.get(E.texture).__webglTexture,vt.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){const kt=E.depthTexture;if(Bt.__boundDepthTexture!==kt){if(kt!==null&&vt.has(kt)&&(E.width!==kt.image.width||E.height!==kt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");R.setupDepthRenderbuffer(E)}}const Xt=E.texture;(Xt.isData3DTexture||Xt.isDataArrayTexture||Xt.isCompressedArrayTexture)&&(Lt=!0);const Zt=vt.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(Zt[B])?H=Zt[B][$]:H=Zt[B],xt=!0):E.samples>0&&R.useMultisampledRTT(E)===!1?H=vt.get(E).__webglMultisampledFramebuffer:Array.isArray(Zt)?H=Zt[$]:H=Zt,C.copy(E.viewport),k.copy(E.scissor),G=E.scissorTest}else C.copy(dt).multiplyScalar(K).floor(),k.copy(Vt).multiplyScalar(K).floor(),G=ut;if(it.bindFramebuffer(P.FRAMEBUFFER,H)&&Z&&it.drawBuffers(E,H),it.viewport(C),it.scissor(k),it.setScissorTest(G),xt){const Bt=vt.get(E.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_CUBE_MAP_POSITIVE_X+B,Bt.__webglTexture,$)}else if(Lt){const Bt=vt.get(E.texture),Xt=B||0;P.framebufferTextureLayer(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,Bt.__webglTexture,$||0,Xt)}M=-1},this.readRenderTargetPixels=function(E,B,$,Z,H,xt,Lt){if(!(E&&E.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let zt=vt.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Lt!==void 0&&(zt=zt[Lt]),zt){it.bindFramebuffer(P.FRAMEBUFFER,zt);try{const Bt=E.texture,Xt=Bt.format,Zt=Bt.type;if(!et.textureFormatReadable(Xt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!et.textureTypeReadable(Zt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}B>=0&&B<=E.width-Z&&$>=0&&$<=E.height-H&&P.readPixels(B,$,Z,H,Jt.convert(Xt),Jt.convert(Zt),xt)}finally{const Bt=I!==null?vt.get(I).__webglFramebuffer:null;it.bindFramebuffer(P.FRAMEBUFFER,Bt)}}},this.readRenderTargetPixelsAsync=async function(E,B,$,Z,H,xt,Lt){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let zt=vt.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Lt!==void 0&&(zt=zt[Lt]),zt){const Bt=E.texture,Xt=Bt.format,Zt=Bt.type;if(!et.textureFormatReadable(Xt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!et.textureTypeReadable(Zt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(B>=0&&B<=E.width-Z&&$>=0&&$<=E.height-H){it.bindFramebuffer(P.FRAMEBUFFER,zt);const kt=P.createBuffer();P.bindBuffer(P.PIXEL_PACK_BUFFER,kt),P.bufferData(P.PIXEL_PACK_BUFFER,xt.byteLength,P.STREAM_READ),P.readPixels(B,$,Z,H,Jt.convert(Xt),Jt.convert(Zt),0);const ie=I!==null?vt.get(I).__webglFramebuffer:null;it.bindFramebuffer(P.FRAMEBUFFER,ie);const fe=P.fenceSync(P.SYNC_GPU_COMMANDS_COMPLETE,0);return P.flush(),await od(P,fe,4),P.bindBuffer(P.PIXEL_PACK_BUFFER,kt),P.getBufferSubData(P.PIXEL_PACK_BUFFER,0,xt),P.deleteBuffer(kt),P.deleteSync(fe),xt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(E,B=null,$=0){E.isTexture!==!0&&(As("WebGLRenderer: copyFramebufferToTexture function signature has changed."),B=arguments[0]||null,E=arguments[1]);const Z=Math.pow(2,-$),H=Math.floor(E.image.width*Z),xt=Math.floor(E.image.height*Z),Lt=B!==null?B.x:0,zt=B!==null?B.y:0;R.setTexture2D(E,0),P.copyTexSubImage2D(P.TEXTURE_2D,$,0,0,Lt,zt,H,xt),it.unbindTexture()},this.copyTextureToTexture=function(E,B,$=null,Z=null,H=0){E.isTexture!==!0&&(As("WebGLRenderer: copyTextureToTexture function signature has changed."),Z=arguments[0]||null,E=arguments[1],B=arguments[2],H=arguments[3]||0,$=null);let xt,Lt,zt,Bt,Xt,Zt,kt,ie,fe;const me=E.isCompressedTexture?E.mipmaps[H]:E.image;$!==null?(xt=$.max.x-$.min.x,Lt=$.max.y-$.min.y,zt=$.isBox3?$.max.z-$.min.z:1,Bt=$.min.x,Xt=$.min.y,Zt=$.isBox3?$.min.z:0):(xt=me.width,Lt=me.height,zt=me.depth||1,Bt=0,Xt=0,Zt=0),Z!==null?(kt=Z.x,ie=Z.y,fe=Z.z):(kt=0,ie=0,fe=0);const qe=Jt.convert(B.format),oe=Jt.convert(B.type);let Ht;B.isData3DTexture?(R.setTexture3D(B,0),Ht=P.TEXTURE_3D):B.isDataArrayTexture||B.isCompressedArrayTexture?(R.setTexture2DArray(B,0),Ht=P.TEXTURE_2D_ARRAY):(R.setTexture2D(B,0),Ht=P.TEXTURE_2D),P.pixelStorei(P.UNPACK_FLIP_Y_WEBGL,B.flipY),P.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL,B.premultiplyAlpha),P.pixelStorei(P.UNPACK_ALIGNMENT,B.unpackAlignment);const Rn=P.getParameter(P.UNPACK_ROW_LENGTH),re=P.getParameter(P.UNPACK_IMAGE_HEIGHT),cn=P.getParameter(P.UNPACK_SKIP_PIXELS),Pi=P.getParameter(P.UNPACK_SKIP_ROWS),Ke=P.getParameter(P.UNPACK_SKIP_IMAGES);P.pixelStorei(P.UNPACK_ROW_LENGTH,me.width),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,me.height),P.pixelStorei(P.UNPACK_SKIP_PIXELS,Bt),P.pixelStorei(P.UNPACK_SKIP_ROWS,Xt),P.pixelStorei(P.UNPACK_SKIP_IMAGES,Zt);const fs=E.isDataArrayTexture||E.isData3DTexture,ge=B.isDataArrayTexture||B.isData3DTexture;if(E.isRenderTargetTexture||E.isDepthTexture){const xn=vt.get(E),ps=vt.get(B),on=vt.get(xn.__renderTarget),Hn=vt.get(ps.__renderTarget);it.bindFramebuffer(P.READ_FRAMEBUFFER,on.__webglFramebuffer),it.bindFramebuffer(P.DRAW_FRAMEBUFFER,Hn.__webglFramebuffer);for(let Gn=0;Gn<zt;Gn++)fs&&P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,vt.get(E).__webglTexture,H,Zt+Gn),E.isDepthTexture?(ge&&P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,vt.get(B).__webglTexture,H,fe+Gn),P.blitFramebuffer(Bt,Xt,xt,Lt,kt,ie,xt,Lt,P.DEPTH_BUFFER_BIT,P.NEAREST)):ge?P.copyTexSubImage3D(Ht,H,kt,ie,fe+Gn,Bt,Xt,xt,Lt):P.copyTexSubImage2D(Ht,H,kt,ie,fe+Gn,Bt,Xt,xt,Lt);it.bindFramebuffer(P.READ_FRAMEBUFFER,null),it.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else ge?E.isDataTexture||E.isData3DTexture?P.texSubImage3D(Ht,H,kt,ie,fe,xt,Lt,zt,qe,oe,me.data):B.isCompressedArrayTexture?P.compressedTexSubImage3D(Ht,H,kt,ie,fe,xt,Lt,zt,qe,me.data):P.texSubImage3D(Ht,H,kt,ie,fe,xt,Lt,zt,qe,oe,me):E.isDataTexture?P.texSubImage2D(P.TEXTURE_2D,H,kt,ie,xt,Lt,qe,oe,me.data):E.isCompressedTexture?P.compressedTexSubImage2D(P.TEXTURE_2D,H,kt,ie,me.width,me.height,qe,me.data):P.texSubImage2D(P.TEXTURE_2D,H,kt,ie,xt,Lt,qe,oe,me);P.pixelStorei(P.UNPACK_ROW_LENGTH,Rn),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,re),P.pixelStorei(P.UNPACK_SKIP_PIXELS,cn),P.pixelStorei(P.UNPACK_SKIP_ROWS,Pi),P.pixelStorei(P.UNPACK_SKIP_IMAGES,Ke),H===0&&B.generateMipmaps&&P.generateMipmap(Ht),it.unbindTexture()},this.copyTextureToTexture3D=function(E,B,$=null,Z=null,H=0){return E.isTexture!==!0&&(As("WebGLRenderer: copyTextureToTexture3D function signature has changed."),$=arguments[0]||null,Z=arguments[1]||null,E=arguments[2],B=arguments[3],H=arguments[4]||0),As('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(E,B,$,Z,H)},this.initRenderTarget=function(E){vt.get(E).__webglFramebuffer===void 0&&R.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?R.setTextureCube(E,0):E.isData3DTexture?R.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?R.setTexture2DArray(E,0):R.setTexture2D(E,0),it.unbindTexture()},this.resetState=function(){T=0,A=0,I=null,it.reset(),de.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Nn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorspace=ne._getDrawingBufferColorSpace(t),e.unpackColorSpace=ne._getUnpackColorSpace()}}class oc{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new Rt(t),this.density=e}clone(){return new oc(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class rc{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new Rt(t),this.near=e,this.far=n}clone(){return new rc(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class Us extends Re{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new gn,this.environmentIntensity=1,this.environmentRotation=new gn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class _g extends Ve{constructor(t=null,e=1,n=1,s,o,r,a,c,l=tn,h=tn,u,f){super(null,r,a,c,l,h,s,o,u,f),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Cs extends en{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const Xi=new le,Sl=new le,po=[],El=new kn,vg=new le,Ms=new b,ys=new us;class Cr extends b{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Cs(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,vg)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new kn),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Xi),El.copy(t.boundingBox).applyMatrix4(Xi),this.boundingBox.union(El)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new us),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Xi),ys.copy(t.boundingSphere).applyMatrix4(Xi),this.boundingSphere.union(ys)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,o=n.length+1,r=t*o+1;for(let a=0;a<n.length;a++)n[a]=s[r+a]}raycast(t,e){const n=this.matrixWorld,s=this.count;if(Ms.geometry=this.geometry,Ms.material=this.material,Ms.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ys.copy(this.boundingSphere),ys.applyMatrix4(n),t.ray.intersectsSphere(ys)!==!1))for(let o=0;o<s;o++){this.getMatrixAt(o,Xi),Sl.multiplyMatrices(n,Xi),Ms.matrixWorld=Sl,Ms.raycast(t,po);for(let r=0,a=po.length;r<a;r++){const c=po[r];c.instanceId=o,c.object=this,e.push(c)}po.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new Cs(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){const n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new _g(new Float32Array(s*this.count),s,this.count,Za,En));const o=this.morphTexture.source.data.data;let r=0;for(let l=0;l<n.length;l++)r+=n[l];const a=this.geometry.morphTargetsRelative?1:1-r,c=s*t;o[c]=a,o.set(n,c+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class Nh extends Ri{static get type(){return"LineBasicMaterial"}constructor(t){super(),this.isLineBasicMaterial=!0,this.color=new Rt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const Do=new D,Uo=new D,Tl=new le,ws=new tc,mo=new us,Pr=new D,bl=new D;class xg extends Re{constructor(t=new Le,e=new Nh){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let s=1,o=e.count;s<o;s++)Do.fromBufferAttribute(e,s-1),Uo.fromBufferAttribute(e,s),n[s]=n[s-1],n[s]+=Do.distanceTo(Uo);t.setAttribute("lineDistance",new te(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const n=this.geometry,s=this.matrixWorld,o=t.params.Line.threshold,r=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),mo.copy(n.boundingSphere),mo.applyMatrix4(s),mo.radius+=o,t.ray.intersectsSphere(mo)===!1)return;Tl.copy(s).invert(),ws.copy(t.ray).applyMatrix4(Tl);const a=o/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=this.isLineSegments?2:1,h=n.index,f=n.attributes.position;if(h!==null){const p=Math.max(0,r.start),g=Math.min(h.count,r.start+r.count);for(let _=p,m=g-1;_<m;_+=l){const d=h.getX(_),S=h.getX(_+1),w=go(this,t,ws,c,d,S);w&&e.push(w)}if(this.isLineLoop){const _=h.getX(g-1),m=h.getX(p),d=go(this,t,ws,c,_,m);d&&e.push(d)}}else{const p=Math.max(0,r.start),g=Math.min(f.count,r.start+r.count);for(let _=p,m=g-1;_<m;_+=l){const d=go(this,t,ws,c,_,_+1);d&&e.push(d)}if(this.isLineLoop){const _=go(this,t,ws,c,g-1,p);_&&e.push(_)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,r=s.length;o<r;o++){const a=s[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=o}}}}}function go(i,t,e,n,s,o){const r=i.geometry.attributes.position;if(Do.fromBufferAttribute(r,s),Uo.fromBufferAttribute(r,o),e.distanceSqToSegment(Do,Uo,Pr,bl)>n)return;Pr.applyMatrix4(i.matrixWorld);const c=t.ray.origin.distanceTo(Pr);if(!(c<t.near||c>t.far))return{distance:c,point:bl.clone().applyMatrix4(i.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:i}}const Al=new D,Rl=new D;class Mg extends xg{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[];for(let s=0,o=e.count;s<o;s+=2)Al.fromBufferAttribute(e,s),Rl.fromBufferAttribute(e,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+Al.distanceTo(Rl);t.setAttribute("lineDistance",new te(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class ac extends Ve{constructor(t,e,n,s,o,r,a,c,l){super(t,e,n,s,o,r,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class bn{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,s=this.getPoint(0),o=0;e.push(0);for(let r=1;r<=t;r++)n=this.getPoint(r/t),o+=n.distanceTo(s),e.push(o),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){const n=this.getLengths();let s=0;const o=n.length;let r;e?r=e:r=t*n[o-1];let a=0,c=o-1,l;for(;a<=c;)if(s=Math.floor(a+(c-a)/2),l=n[s]-r,l<0)a=s+1;else if(l>0)c=s-1;else{c=s;break}if(s=c,n[s]===r)return s/(o-1);const h=n[s],f=n[s+1]-h,p=(r-h)/f;return(s+p)/(o-1)}getTangent(t,e){let s=t-1e-4,o=t+1e-4;s<0&&(s=0),o>1&&(o=1);const r=this.getPoint(s),a=this.getPoint(o),c=e||(r.isVector2?new _t:new D);return c.copy(a).sub(r).normalize(),c}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){const n=new D,s=[],o=[],r=[],a=new D,c=new le;for(let p=0;p<=t;p++){const g=p/t;s[p]=this.getTangentAt(g,new D)}o[0]=new D,r[0]=new D;let l=Number.MAX_VALUE;const h=Math.abs(s[0].x),u=Math.abs(s[0].y),f=Math.abs(s[0].z);h<=l&&(l=h,n.set(1,0,0)),u<=l&&(l=u,n.set(0,1,0)),f<=l&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),o[0].crossVectors(s[0],a),r[0].crossVectors(s[0],o[0]);for(let p=1;p<=t;p++){if(o[p]=o[p-1].clone(),r[p]=r[p-1].clone(),a.crossVectors(s[p-1],s[p]),a.length()>Number.EPSILON){a.normalize();const g=Math.acos(Ae(s[p-1].dot(s[p]),-1,1));o[p].applyMatrix4(c.makeRotationAxis(a,g))}r[p].crossVectors(s[p],o[p])}if(e===!0){let p=Math.acos(Ae(o[0].dot(o[t]),-1,1));p/=t,s[0].dot(a.crossVectors(o[0],o[t]))>0&&(p=-p);for(let g=1;g<=t;g++)o[g].applyMatrix4(c.makeRotationAxis(s[g],p*g)),r[g].crossVectors(s[g],o[g])}return{tangents:s,normals:o,binormals:r}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class cc extends bn{constructor(t=0,e=0,n=1,s=1,o=0,r=Math.PI*2,a=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=o,this.aEndAngle=r,this.aClockwise=a,this.aRotation=c}getPoint(t,e=new _t){const n=e,s=Math.PI*2;let o=this.aEndAngle-this.aStartAngle;const r=Math.abs(o)<Number.EPSILON;for(;o<0;)o+=s;for(;o>s;)o-=s;o<Number.EPSILON&&(r?o=0:o=s),this.aClockwise===!0&&!r&&(o===s?o=-s:o=o-s);const a=this.aStartAngle+t*o;let c=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),f=c-this.aX,p=l-this.aY;c=f*h-p*u+this.aX,l=f*u+p*h+this.aY}return n.set(c,l)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class yg extends cc{constructor(t,e,n,s,o,r){super(t,e,n,n,s,o,r),this.isArcCurve=!0,this.type="ArcCurve"}}function lc(){let i=0,t=0,e=0,n=0;function s(o,r,a,c){i=o,t=a,e=-3*o+3*r-2*a-c,n=2*o-2*r+a+c}return{initCatmullRom:function(o,r,a,c,l){s(r,a,l*(a-o),l*(c-r))},initNonuniformCatmullRom:function(o,r,a,c,l,h,u){let f=(r-o)/l-(a-o)/(l+h)+(a-r)/h,p=(a-r)/h-(c-r)/(h+u)+(c-a)/u;f*=h,p*=h,s(r,a,f,p)},calc:function(o){const r=o*o,a=r*o;return i+t*o+e*r+n*a}}}const _o=new D,Lr=new lc,Ir=new lc,Dr=new lc;class wg extends bn{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new D){const n=e,s=this.points,o=s.length,r=(o-(this.closed?0:1))*t;let a=Math.floor(r),c=r-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/o)+1)*o:c===0&&a===o-1&&(a=o-2,c=1);let l,h;this.closed||a>0?l=s[(a-1)%o]:(_o.subVectors(s[0],s[1]).add(s[0]),l=_o);const u=s[a%o],f=s[(a+1)%o];if(this.closed||a+2<o?h=s[(a+2)%o]:(_o.subVectors(s[o-1],s[o-2]).add(s[o-1]),h=_o),this.curveType==="centripetal"||this.curveType==="chordal"){const p=this.curveType==="chordal"?.5:.25;let g=Math.pow(l.distanceToSquared(u),p),_=Math.pow(u.distanceToSquared(f),p),m=Math.pow(f.distanceToSquared(h),p);_<1e-4&&(_=1),g<1e-4&&(g=_),m<1e-4&&(m=_),Lr.initNonuniformCatmullRom(l.x,u.x,f.x,h.x,g,_,m),Ir.initNonuniformCatmullRom(l.y,u.y,f.y,h.y,g,_,m),Dr.initNonuniformCatmullRom(l.z,u.z,f.z,h.z,g,_,m)}else this.curveType==="catmullrom"&&(Lr.initCatmullRom(l.x,u.x,f.x,h.x,this.tension),Ir.initCatmullRom(l.y,u.y,f.y,h.y,this.tension),Dr.initCatmullRom(l.z,u.z,f.z,h.z,this.tension));return n.set(Lr.calc(c),Ir.calc(c),Dr.calc(c)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new D().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function Cl(i,t,e,n,s){const o=(n-t)*.5,r=(s-e)*.5,a=i*i,c=i*a;return(2*e-2*n+o+r)*c+(-3*e+3*n-2*o-r)*a+o*i+e}function Sg(i,t){const e=1-i;return e*e*t}function Eg(i,t){return 2*(1-i)*i*t}function Tg(i,t){return i*i*t}function Ps(i,t,e,n){return Sg(i,t)+Eg(i,e)+Tg(i,n)}function bg(i,t){const e=1-i;return e*e*e*t}function Ag(i,t){const e=1-i;return 3*e*e*i*t}function Rg(i,t){return 3*(1-i)*i*i*t}function Cg(i,t){return i*i*i*t}function Ls(i,t,e,n,s){return bg(i,t)+Ag(i,e)+Rg(i,n)+Cg(i,s)}class Fh extends bn{constructor(t=new _t,e=new _t,n=new _t,s=new _t){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new _t){const n=e,s=this.v0,o=this.v1,r=this.v2,a=this.v3;return n.set(Ls(t,s.x,o.x,r.x,a.x),Ls(t,s.y,o.y,r.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Pg extends bn{constructor(t=new D,e=new D,n=new D,s=new D){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new D){const n=e,s=this.v0,o=this.v1,r=this.v2,a=this.v3;return n.set(Ls(t,s.x,o.x,r.x,a.x),Ls(t,s.y,o.y,r.y,a.y),Ls(t,s.z,o.z,r.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Oh extends bn{constructor(t=new _t,e=new _t){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new _t){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new _t){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Lg extends bn{constructor(t=new D,e=new D){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new D){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new D){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class zh extends bn{constructor(t=new _t,e=new _t,n=new _t){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new _t){const n=e,s=this.v0,o=this.v1,r=this.v2;return n.set(Ps(t,s.x,o.x,r.x),Ps(t,s.y,o.y,r.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Ig extends bn{constructor(t=new D,e=new D,n=new D){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new D){const n=e,s=this.v0,o=this.v1,r=this.v2;return n.set(Ps(t,s.x,o.x,r.x),Ps(t,s.y,o.y,r.y),Ps(t,s.z,o.z,r.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Bh extends bn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new _t){const n=e,s=this.points,o=(s.length-1)*t,r=Math.floor(o),a=o-r,c=s[r===0?r:r-1],l=s[r],h=s[r>s.length-2?s.length-1:r+1],u=s[r>s.length-3?s.length-1:r+2];return n.set(Cl(a,c.x,l.x,h.x,u.x),Cl(a,c.y,l.y,h.y,u.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new _t().fromArray(s))}return this}}var Da=Object.freeze({__proto__:null,ArcCurve:yg,CatmullRomCurve3:wg,CubicBezierCurve:Fh,CubicBezierCurve3:Pg,EllipseCurve:cc,LineCurve:Oh,LineCurve3:Lg,QuadraticBezierCurve:zh,QuadraticBezierCurve3:Ig,SplineCurve:Bh});class Dg extends bn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Da[n](e,t))}return this}getPoint(t,e){const n=t*this.getLength(),s=this.getCurveLengths();let o=0;for(;o<s.length;){if(s[o]>=n){const r=s[o]-n,a=this.curves[o],c=a.getLength(),l=c===0?0:1-r/c;return a.getPointAt(l,e)}o++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let n;for(let s=0,o=this.curves;s<o.length;s++){const r=o[s],a=r.isEllipseCurve?t*2:r.isLineCurve||r.isLineCurve3?1:r.isSplineCurve?t*r.points.length:t,c=r.getPoints(a);for(let l=0;l<c.length;l++){const h=c[l];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){const s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const s=t.curves[e];this.curves.push(new Da[s.type]().fromJSON(s))}return this}}class Ua extends Dg{constructor(t){super(),this.type="Path",this.currentPoint=new _t,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const n=new Oh(this.currentPoint.clone(),new _t(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){const o=new zh(this.currentPoint.clone(),new _t(t,e),new _t(n,s));return this.curves.push(o),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,o,r){const a=new Fh(this.currentPoint.clone(),new _t(t,e),new _t(n,s),new _t(o,r));return this.curves.push(a),this.currentPoint.set(o,r),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),n=new Bh(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,o,r){const a=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(t+a,e+c,n,s,o,r),this}absarc(t,e,n,s,o,r){return this.absellipse(t,e,n,n,s,o,r),this}ellipse(t,e,n,s,o,r,a,c){const l=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+l,e+h,n,s,o,r,a,c),this}absellipse(t,e,n,s,o,r,a,c){const l=new cc(t,e,n,s,o,r,a,c);if(this.curves.length>0){const u=l.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(l);const h=l.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class $o extends Le{constructor(t=[new _t(0,-.5),new _t(.5,0),new _t(0,.5)],e=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:s},e=Math.floor(e),s=Ae(s,0,Math.PI*2);const o=[],r=[],a=[],c=[],l=[],h=1/e,u=new D,f=new _t,p=new D,g=new D,_=new D;let m=0,d=0;for(let S=0;S<=t.length-1;S++)switch(S){case 0:m=t[S+1].x-t[S].x,d=t[S+1].y-t[S].y,p.x=d*1,p.y=-m,p.z=d*0,_.copy(p),p.normalize(),c.push(p.x,p.y,p.z);break;case t.length-1:c.push(_.x,_.y,_.z);break;default:m=t[S+1].x-t[S].x,d=t[S+1].y-t[S].y,p.x=d*1,p.y=-m,p.z=d*0,g.copy(p),p.x+=_.x,p.y+=_.y,p.z+=_.z,p.normalize(),c.push(p.x,p.y,p.z),_.copy(g)}for(let S=0;S<=e;S++){const w=n+S*h*s,v=Math.sin(w),U=Math.cos(w);for(let T=0;T<=t.length-1;T++){u.x=t[T].x*v,u.y=t[T].y,u.z=t[T].x*U,r.push(u.x,u.y,u.z),f.x=S/e,f.y=T/(t.length-1),a.push(f.x,f.y);const A=c[3*T+0]*v,I=c[3*T+1],M=c[3*T+0]*U;l.push(A,I,M)}}for(let S=0;S<e;S++)for(let w=0;w<t.length-1;w++){const v=w+S*t.length,U=v,T=v+t.length,A=v+t.length+1,I=v+1;o.push(U,T,I),o.push(A,I,T)}this.setIndex(o),this.setAttribute("position",new te(r,3)),this.setAttribute("uv",new te(a,2)),this.setAttribute("normal",new te(l,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new $o(t.points,t.segments,t.phiStart,t.phiLength)}}class ee extends $o{constructor(t=1,e=1,n=4,s=8){const o=new Ua;o.absarc(0,-e/2,t,Math.PI*1.5,0),o.absarc(0,e/2,t,0,Math.PI*.5),super(o.getPoints(n),s),this.type="CapsuleGeometry",this.parameters={radius:t,length:e,capSegments:n,radialSegments:s}}static fromJSON(t){return new ee(t.radius,t.length,t.capSegments,t.radialSegments)}}class vn extends Le{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);const o=[],r=[],a=[],c=[],l=new D,h=new _t;r.push(0,0,0),a.push(0,0,1),c.push(.5,.5);for(let u=0,f=3;u<=e;u++,f+=3){const p=n+u/e*s;l.x=t*Math.cos(p),l.y=t*Math.sin(p),r.push(l.x,l.y,l.z),a.push(0,0,1),h.x=(r[f]/t+1)/2,h.y=(r[f+1]/t+1)/2,c.push(h.x,h.y)}for(let u=1;u<=e;u++)o.push(u,u+1,0);this.setIndex(o),this.setAttribute("position",new te(r,3)),this.setAttribute("normal",new te(a,3)),this.setAttribute("uv",new te(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new vn(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class Qt extends Le{constructor(t=1,e=1,n=1,s=32,o=1,r=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:o,openEnded:r,thetaStart:a,thetaLength:c};const l=this;s=Math.floor(s),o=Math.floor(o);const h=[],u=[],f=[],p=[];let g=0;const _=[],m=n/2;let d=0;S(),r===!1&&(t>0&&w(!0),e>0&&w(!1)),this.setIndex(h),this.setAttribute("position",new te(u,3)),this.setAttribute("normal",new te(f,3)),this.setAttribute("uv",new te(p,2));function S(){const v=new D,U=new D;let T=0;const A=(e-t)/n;for(let I=0;I<=o;I++){const M=[],x=I/o,C=x*(e-t)+t;for(let k=0;k<=s;k++){const G=k/s,V=G*c+a,J=Math.sin(V),q=Math.cos(V);U.x=C*J,U.y=-x*n+m,U.z=C*q,u.push(U.x,U.y,U.z),v.set(J,A,q).normalize(),f.push(v.x,v.y,v.z),p.push(G,1-x),M.push(g++)}_.push(M)}for(let I=0;I<s;I++)for(let M=0;M<o;M++){const x=_[M][I],C=_[M+1][I],k=_[M+1][I+1],G=_[M][I+1];(t>0||M!==0)&&(h.push(x,C,G),T+=3),(e>0||M!==o-1)&&(h.push(C,k,G),T+=3)}l.addGroup(d,T,0),d+=T}function w(v){const U=g,T=new _t,A=new D;let I=0;const M=v===!0?t:e,x=v===!0?1:-1;for(let k=1;k<=s;k++)u.push(0,m*x,0),f.push(0,x,0),p.push(.5,.5),g++;const C=g;for(let k=0;k<=s;k++){const V=k/s*c+a,J=Math.cos(V),q=Math.sin(V);A.x=M*q,A.y=m*x,A.z=M*J,u.push(A.x,A.y,A.z),f.push(0,x,0),T.x=J*.5+.5,T.y=q*.5*x+.5,p.push(T.x,T.y),g++}for(let k=0;k<s;k++){const G=U+k,V=C+k;v===!0?h.push(V,V+1,G):h.push(V+1,V,G),I+=3}l.addGroup(d,I,v===!0?1:2),d+=I}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Qt(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class De extends Qt{constructor(t=1,e=1,n=32,s=1,o=!1,r=0,a=Math.PI*2){super(0,t,e,n,s,o,r,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:o,thetaStart:r,thetaLength:a}}static fromJSON(t){return new De(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Hs extends Le{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};const o=[],r=[];a(s),l(n),h(),this.setAttribute("position",new te(o,3)),this.setAttribute("normal",new te(o.slice(),3)),this.setAttribute("uv",new te(r,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(S){const w=new D,v=new D,U=new D;for(let T=0;T<e.length;T+=3)p(e[T+0],w),p(e[T+1],v),p(e[T+2],U),c(w,v,U,S)}function c(S,w,v,U){const T=U+1,A=[];for(let I=0;I<=T;I++){A[I]=[];const M=S.clone().lerp(v,I/T),x=w.clone().lerp(v,I/T),C=T-I;for(let k=0;k<=C;k++)k===0&&I===T?A[I][k]=M:A[I][k]=M.clone().lerp(x,k/C)}for(let I=0;I<T;I++)for(let M=0;M<2*(T-I)-1;M++){const x=Math.floor(M/2);M%2===0?(f(A[I][x+1]),f(A[I+1][x]),f(A[I][x])):(f(A[I][x+1]),f(A[I+1][x+1]),f(A[I+1][x]))}}function l(S){const w=new D;for(let v=0;v<o.length;v+=3)w.x=o[v+0],w.y=o[v+1],w.z=o[v+2],w.normalize().multiplyScalar(S),o[v+0]=w.x,o[v+1]=w.y,o[v+2]=w.z}function h(){const S=new D;for(let w=0;w<o.length;w+=3){S.x=o[w+0],S.y=o[w+1],S.z=o[w+2];const v=m(S)/2/Math.PI+.5,U=d(S)/Math.PI+.5;r.push(v,1-U)}g(),u()}function u(){for(let S=0;S<r.length;S+=6){const w=r[S+0],v=r[S+2],U=r[S+4],T=Math.max(w,v,U),A=Math.min(w,v,U);T>.9&&A<.1&&(w<.2&&(r[S+0]+=1),v<.2&&(r[S+2]+=1),U<.2&&(r[S+4]+=1))}}function f(S){o.push(S.x,S.y,S.z)}function p(S,w){const v=S*3;w.x=t[v+0],w.y=t[v+1],w.z=t[v+2]}function g(){const S=new D,w=new D,v=new D,U=new D,T=new _t,A=new _t,I=new _t;for(let M=0,x=0;M<o.length;M+=9,x+=6){S.set(o[M+0],o[M+1],o[M+2]),w.set(o[M+3],o[M+4],o[M+5]),v.set(o[M+6],o[M+7],o[M+8]),T.set(r[x+0],r[x+1]),A.set(r[x+2],r[x+3]),I.set(r[x+4],r[x+5]),U.copy(S).add(w).add(v).divideScalar(3);const C=m(U);_(T,x+0,S,C),_(A,x+2,w,C),_(I,x+4,v,C)}}function _(S,w,v,U){U<0&&S.x===1&&(r[w]=S.x-1),v.x===0&&v.z===0&&(r[w]=U/2/Math.PI+.5)}function m(S){return Math.atan2(S.z,-S.x)}function d(S){return Math.atan2(-S.y,Math.sqrt(S.x*S.x+S.z*S.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Hs(t.vertices,t.indices,t.radius,t.details)}}class oi extends Hs{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,s=1/n,o=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-s,-n,0,-s,n,0,s,-n,0,s,n,-s,-n,0,-s,n,0,s,-n,0,s,n,0,-n,0,-s,n,0,-s,-n,0,s,n,0,s],r=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(o,r,t,e),this.type="DodecahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new oi(t.radius,t.detail)}}class as extends Ua{constructor(t){super(t),this.uuid=hs(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let n=0,s=this.holes.length;n<s;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){const s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const s=t.holes[e];this.holes.push(new Ua().fromJSON(s))}return this}}const Ug={triangulate:function(i,t,e=2){const n=t&&t.length,s=n?t[0]*e:i.length;let o=kh(i,0,s,e,!0);const r=[];if(!o||o.next===o.prev)return r;let a,c,l,h,u,f,p;if(n&&(o=Bg(i,t,o,e)),i.length>80*e){a=l=i[0],c=h=i[1];for(let g=e;g<s;g+=e)u=i[g],f=i[g+1],u<a&&(a=u),f<c&&(c=f),u>l&&(l=u),f>h&&(h=f);p=Math.max(l-a,h-c),p=p!==0?32767/p:0}return Ns(o,r,e,a,c,p,0),r}};function kh(i,t,e,n,s){let o,r;if(s===Kg(i,t,e,n)>0)for(o=t;o<e;o+=n)r=Pl(o,i[o],i[o+1],r);else for(o=e-n;o>=t;o-=n)r=Pl(o,i[o],i[o+1],r);return r&&Zo(r,r.next)&&(Os(r),r=r.next),r}function bi(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(Zo(e,e.next)||ve(e.prev,e,e.next)===0)){if(Os(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function Ns(i,t,e,n,s,o,r){if(!i)return;!r&&o&&Wg(i,n,s,o);let a=i,c,l;for(;i.prev!==i.next;){if(c=i.prev,l=i.next,o?Fg(i,n,s,o):Ng(i)){t.push(c.i/e|0),t.push(i.i/e|0),t.push(l.i/e|0),Os(i),i=l.next,a=l.next;continue}if(i=l,i===a){r?r===1?(i=Og(bi(i),t,e),Ns(i,t,e,n,s,o,2)):r===2&&zg(i,t,e,n,s,o):Ns(bi(i),t,e,n,s,o,1);break}}}function Ng(i){const t=i.prev,e=i,n=i.next;if(ve(t,e,n)>=0)return!1;const s=t.x,o=e.x,r=n.x,a=t.y,c=e.y,l=n.y,h=s<o?s<r?s:r:o<r?o:r,u=a<c?a<l?a:l:c<l?c:l,f=s>o?s>r?s:r:o>r?o:r,p=a>c?a>l?a:l:c>l?c:l;let g=n.next;for(;g!==t;){if(g.x>=h&&g.x<=f&&g.y>=u&&g.y<=p&&$i(s,a,o,c,r,l,g.x,g.y)&&ve(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function Fg(i,t,e,n){const s=i.prev,o=i,r=i.next;if(ve(s,o,r)>=0)return!1;const a=s.x,c=o.x,l=r.x,h=s.y,u=o.y,f=r.y,p=a<c?a<l?a:l:c<l?c:l,g=h<u?h<f?h:f:u<f?u:f,_=a>c?a>l?a:l:c>l?c:l,m=h>u?h>f?h:f:u>f?u:f,d=Na(p,g,t,e,n),S=Na(_,m,t,e,n);let w=i.prevZ,v=i.nextZ;for(;w&&w.z>=d&&v&&v.z<=S;){if(w.x>=p&&w.x<=_&&w.y>=g&&w.y<=m&&w!==s&&w!==r&&$i(a,h,c,u,l,f,w.x,w.y)&&ve(w.prev,w,w.next)>=0||(w=w.prevZ,v.x>=p&&v.x<=_&&v.y>=g&&v.y<=m&&v!==s&&v!==r&&$i(a,h,c,u,l,f,v.x,v.y)&&ve(v.prev,v,v.next)>=0))return!1;v=v.nextZ}for(;w&&w.z>=d;){if(w.x>=p&&w.x<=_&&w.y>=g&&w.y<=m&&w!==s&&w!==r&&$i(a,h,c,u,l,f,w.x,w.y)&&ve(w.prev,w,w.next)>=0)return!1;w=w.prevZ}for(;v&&v.z<=S;){if(v.x>=p&&v.x<=_&&v.y>=g&&v.y<=m&&v!==s&&v!==r&&$i(a,h,c,u,l,f,v.x,v.y)&&ve(v.prev,v,v.next)>=0)return!1;v=v.nextZ}return!0}function Og(i,t,e){let n=i;do{const s=n.prev,o=n.next.next;!Zo(s,o)&&Hh(s,n,n.next,o)&&Fs(s,o)&&Fs(o,s)&&(t.push(s.i/e|0),t.push(n.i/e|0),t.push(o.i/e|0),Os(n),Os(n.next),n=i=o),n=n.next}while(n!==i);return bi(n)}function zg(i,t,e,n,s,o){let r=i;do{let a=r.next.next;for(;a!==r.prev;){if(r.i!==a.i&&qg(r,a)){let c=Gh(r,a);r=bi(r,r.next),c=bi(c,c.next),Ns(r,t,e,n,s,o,0),Ns(c,t,e,n,s,o,0);return}a=a.next}r=r.next}while(r!==i)}function Bg(i,t,e,n){const s=[];let o,r,a,c,l;for(o=0,r=t.length;o<r;o++)a=t[o]*n,c=o<r-1?t[o+1]*n:i.length,l=kh(i,a,c,n,!1),l===l.next&&(l.steiner=!0),s.push(Yg(l));for(s.sort(kg),o=0;o<s.length;o++)e=Hg(s[o],e);return e}function kg(i,t){return i.x-t.x}function Hg(i,t){const e=Gg(i,t);if(!e)return t;const n=Gh(e,i);return bi(n,n.next),bi(e,e.next)}function Gg(i,t){let e=t,n=-1/0,s;const o=i.x,r=i.y;do{if(r<=e.y&&r>=e.next.y&&e.next.y!==e.y){const f=e.x+(r-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(f<=o&&f>n&&(n=f,s=e.x<e.next.x?e:e.next,f===o))return s}e=e.next}while(e!==t);if(!s)return null;const a=s,c=s.x,l=s.y;let h=1/0,u;e=s;do o>=e.x&&e.x>=c&&o!==e.x&&$i(r<l?o:n,r,c,l,r<l?n:o,r,e.x,e.y)&&(u=Math.abs(r-e.y)/(o-e.x),Fs(e,i)&&(u<h||u===h&&(e.x>s.x||e.x===s.x&&Vg(s,e)))&&(s=e,h=u)),e=e.next;while(e!==a);return s}function Vg(i,t){return ve(i.prev,i,t.prev)<0&&ve(t.next,i,i.next)<0}function Wg(i,t,e,n){let s=i;do s.z===0&&(s.z=Na(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,Xg(s)}function Xg(i){let t,e,n,s,o,r,a,c,l=1;do{for(e=i,i=null,o=null,r=0;e;){for(r++,n=e,a=0,t=0;t<l&&(a++,n=n.nextZ,!!n);t++);for(c=l;a>0||c>0&&n;)a!==0&&(c===0||!n||e.z<=n.z)?(s=e,e=e.nextZ,a--):(s=n,n=n.nextZ,c--),o?o.nextZ=s:i=s,s.prevZ=o,o=s;e=n}o.nextZ=null,l*=2}while(r>1);return i}function Na(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function Yg(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function $i(i,t,e,n,s,o,r,a){return(s-r)*(t-a)>=(i-r)*(o-a)&&(i-r)*(n-a)>=(e-r)*(t-a)&&(e-r)*(o-a)>=(s-r)*(n-a)}function qg(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!$g(i,t)&&(Fs(i,t)&&Fs(t,i)&&Zg(i,t)&&(ve(i.prev,i,t.prev)||ve(i,t.prev,t))||Zo(i,t)&&ve(i.prev,i,i.next)>0&&ve(t.prev,t,t.next)>0)}function ve(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function Zo(i,t){return i.x===t.x&&i.y===t.y}function Hh(i,t,e,n){const s=xo(ve(i,t,e)),o=xo(ve(i,t,n)),r=xo(ve(e,n,i)),a=xo(ve(e,n,t));return!!(s!==o&&r!==a||s===0&&vo(i,e,t)||o===0&&vo(i,n,t)||r===0&&vo(e,i,n)||a===0&&vo(e,t,n))}function vo(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function xo(i){return i>0?1:i<0?-1:0}function $g(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&Hh(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function Fs(i,t){return ve(i.prev,i,i.next)<0?ve(i,t,i.next)>=0&&ve(i,i.prev,t)>=0:ve(i,t,i.prev)<0||ve(i,i.next,t)<0}function Zg(i,t){let e=i,n=!1;const s=(i.x+t.x)/2,o=(i.y+t.y)/2;do e.y>o!=e.next.y>o&&e.next.y!==e.y&&s<(e.next.x-e.x)*(o-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function Gh(i,t){const e=new Fa(i.i,i.x,i.y),n=new Fa(t.i,t.x,t.y),s=i.next,o=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,o.next=n,n.prev=o,n}function Pl(i,t,e,n){const s=new Fa(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function Os(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Fa(i,t,e){this.i=i,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function Kg(i,t,e,n){let s=0;for(let o=t,r=e-n;o<e;o+=n)s+=(i[r]-i[o])*(i[o+1]+i[r+1]),r=o;return s}class Is{static area(t){const e=t.length;let n=0;for(let s=e-1,o=0;o<e;s=o++)n+=t[s].x*t[o].y-t[o].x*t[s].y;return n*.5}static isClockWise(t){return Is.area(t)<0}static triangulateShape(t,e){const n=[],s=[],o=[];Ll(t),Il(n,t);let r=t.length;e.forEach(Ll);for(let c=0;c<e.length;c++)s.push(r),r+=e[c].length,Il(n,e[c]);const a=Ug.triangulate(n,s);for(let c=0;c<a.length;c+=3)o.push(a.slice(c,c+3));return o}}function Ll(i){const t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function Il(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}class Ai extends Le{constructor(t=new as([new _t(.5,.5),new _t(-.5,.5),new _t(-.5,-.5),new _t(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];const n=this,s=[],o=[];for(let a=0,c=t.length;a<c;a++){const l=t[a];r(l)}this.setAttribute("position",new te(s,3)),this.setAttribute("uv",new te(o,2)),this.computeVertexNormals();function r(a){const c=[],l=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,u=e.depth!==void 0?e.depth:1;let f=e.bevelEnabled!==void 0?e.bevelEnabled:!0,p=e.bevelThickness!==void 0?e.bevelThickness:.2,g=e.bevelSize!==void 0?e.bevelSize:p-.1,_=e.bevelOffset!==void 0?e.bevelOffset:0,m=e.bevelSegments!==void 0?e.bevelSegments:3;const d=e.extrudePath,S=e.UVGenerator!==void 0?e.UVGenerator:Jg;let w,v=!1,U,T,A,I;d&&(w=d.getSpacedPoints(h),v=!0,f=!1,U=d.computeFrenetFrames(h,!1),T=new D,A=new D,I=new D),f||(m=0,p=0,g=0,_=0);const M=a.extractPoints(l);let x=M.shape;const C=M.holes;if(!Is.isClockWise(x)){x=x.reverse();for(let j=0,nt=C.length;j<nt;j++){const P=C[j];Is.isClockWise(P)&&(C[j]=P.reverse())}}const G=Is.triangulateShape(x,C),V=x;for(let j=0,nt=C.length;j<nt;j++){const P=C[j];x=x.concat(P)}function J(j,nt,P){return nt||console.error("THREE.ExtrudeGeometry: vec does not exist"),j.clone().addScaledVector(nt,P)}const q=x.length,at=G.length;function K(j,nt,P){let At,W,et;const it=j.x-nt.x,Ut=j.y-nt.y,vt=P.x-j.x,R=P.y-j.y,y=it*it+Ut*Ut,L=it*R-Ut*vt;if(Math.abs(L)>Number.EPSILON){const N=Math.sqrt(y),X=Math.sqrt(vt*vt+R*R),Y=nt.x-Ut/N,gt=nt.y+it/N,ct=P.x-R/X,St=P.y+vt/X,Gt=((ct-Y)*R-(St-gt)*vt)/(it*R-Ut*vt);At=Y+it*Gt-j.x,W=gt+Ut*Gt-j.y;const ht=At*At+W*W;if(ht<=2)return new _t(At,W);et=Math.sqrt(ht/2)}else{let N=!1;it>Number.EPSILON?vt>Number.EPSILON&&(N=!0):it<-Number.EPSILON?vt<-Number.EPSILON&&(N=!0):Math.sign(Ut)===Math.sign(R)&&(N=!0),N?(At=-Ut,W=it,et=Math.sqrt(y)):(At=it,W=Ut,et=Math.sqrt(y/2))}return new _t(At/et,W/et)}const pt=[];for(let j=0,nt=V.length,P=nt-1,At=j+1;j<nt;j++,P++,At++)P===nt&&(P=0),At===nt&&(At=0),pt[j]=K(V[j],V[P],V[At]);const wt=[];let dt,Vt=pt.concat();for(let j=0,nt=C.length;j<nt;j++){const P=C[j];dt=[];for(let At=0,W=P.length,et=W-1,it=At+1;At<W;At++,et++,it++)et===W&&(et=0),it===W&&(it=0),dt[At]=K(P[At],P[et],P[it]);wt.push(dt),Vt=Vt.concat(dt)}for(let j=0;j<m;j++){const nt=j/m,P=p*Math.cos(nt*Math.PI/2),At=g*Math.sin(nt*Math.PI/2)+_;for(let W=0,et=V.length;W<et;W++){const it=J(V[W],pt[W],At);ot(it.x,it.y,-P)}for(let W=0,et=C.length;W<et;W++){const it=C[W];dt=wt[W];for(let Ut=0,vt=it.length;Ut<vt;Ut++){const R=J(it[Ut],dt[Ut],At);ot(R.x,R.y,-P)}}}const ut=g+_;for(let j=0;j<q;j++){const nt=f?J(x[j],Vt[j],ut):x[j];v?(A.copy(U.normals[0]).multiplyScalar(nt.x),T.copy(U.binormals[0]).multiplyScalar(nt.y),I.copy(w[0]).add(A).add(T),ot(I.x,I.y,I.z)):ot(nt.x,nt.y,0)}for(let j=1;j<=h;j++)for(let nt=0;nt<q;nt++){const P=f?J(x[nt],Vt[nt],ut):x[nt];v?(A.copy(U.normals[j]).multiplyScalar(P.x),T.copy(U.binormals[j]).multiplyScalar(P.y),I.copy(w[j]).add(A).add(T),ot(I.x,I.y,I.z)):ot(P.x,P.y,u/h*j)}for(let j=m-1;j>=0;j--){const nt=j/m,P=p*Math.cos(nt*Math.PI/2),At=g*Math.sin(nt*Math.PI/2)+_;for(let W=0,et=V.length;W<et;W++){const it=J(V[W],pt[W],At);ot(it.x,it.y,u+P)}for(let W=0,et=C.length;W<et;W++){const it=C[W];dt=wt[W];for(let Ut=0,vt=it.length;Ut<vt;Ut++){const R=J(it[Ut],dt[Ut],At);v?ot(R.x,R.y+w[h-1].y,w[h-1].x+P):ot(R.x,R.y,u+P)}}}F(),Q();function F(){const j=s.length/3;if(f){let nt=0,P=q*nt;for(let At=0;At<at;At++){const W=G[At];mt(W[2]+P,W[1]+P,W[0]+P)}nt=h+m*2,P=q*nt;for(let At=0;At<at;At++){const W=G[At];mt(W[0]+P,W[1]+P,W[2]+P)}}else{for(let nt=0;nt<at;nt++){const P=G[nt];mt(P[2],P[1],P[0])}for(let nt=0;nt<at;nt++){const P=G[nt];mt(P[0]+q*h,P[1]+q*h,P[2]+q*h)}}n.addGroup(j,s.length/3-j,0)}function Q(){const j=s.length/3;let nt=0;ft(V,nt),nt+=V.length;for(let P=0,At=C.length;P<At;P++){const W=C[P];ft(W,nt),nt+=W.length}n.addGroup(j,s.length/3-j,1)}function ft(j,nt){let P=j.length;for(;--P>=0;){const At=P;let W=P-1;W<0&&(W=j.length-1);for(let et=0,it=h+m*2;et<it;et++){const Ut=q*et,vt=q*(et+1),R=nt+At+Ut,y=nt+W+Ut,L=nt+W+vt,N=nt+At+vt;Mt(R,y,L,N)}}}function ot(j,nt,P){c.push(j),c.push(nt),c.push(P)}function mt(j,nt,P){Et(j),Et(nt),Et(P);const At=s.length/3,W=S.generateTopUV(n,s,At-3,At-2,At-1);Wt(W[0]),Wt(W[1]),Wt(W[2])}function Mt(j,nt,P,At){Et(j),Et(nt),Et(At),Et(nt),Et(P),Et(At);const W=s.length/3,et=S.generateSideWallUV(n,s,W-6,W-3,W-2,W-1);Wt(et[0]),Wt(et[1]),Wt(et[3]),Wt(et[1]),Wt(et[2]),Wt(et[3])}function Et(j){s.push(c[j*3+0]),s.push(c[j*3+1]),s.push(c[j*3+2])}function Wt(j){o.push(j.x),o.push(j.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return jg(e,n,t)}static fromJSON(t,e){const n=[];for(let o=0,r=t.shapes.length;o<r;o++){const a=e[t.shapes[o]];n.push(a)}const s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new Da[s.type]().fromJSON(s)),new Ai(n,t.options)}}const Jg={generateTopUV:function(i,t,e,n,s){const o=t[e*3],r=t[e*3+1],a=t[n*3],c=t[n*3+1],l=t[s*3],h=t[s*3+1];return[new _t(o,r),new _t(a,c),new _t(l,h)]},generateSideWallUV:function(i,t,e,n,s,o){const r=t[e*3],a=t[e*3+1],c=t[e*3+2],l=t[n*3],h=t[n*3+1],u=t[n*3+2],f=t[s*3],p=t[s*3+1],g=t[s*3+2],_=t[o*3],m=t[o*3+1],d=t[o*3+2];return Math.abs(a-h)<Math.abs(r-l)?[new _t(r,1-c),new _t(l,1-u),new _t(f,1-g),new _t(_,1-d)]:[new _t(a,1-c),new _t(h,1-u),new _t(p,1-g),new _t(m,1-d)]}};function jg(i,t,e){if(e.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){const o=i[n];e.shapes.push(o.uuid)}else e.shapes.push(i.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}class nn extends Hs{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],o=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,o,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new nn(t.radius,t.detail)}}class On extends Hs{constructor(t=1,e=0){const n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,s,t,e),this.type="OctahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new On(t.radius,t.detail)}}class Si extends Le{constructor(t=.5,e=1,n=32,s=1,o=0,r=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:s,thetaStart:o,thetaLength:r},n=Math.max(3,n),s=Math.max(1,s);const a=[],c=[],l=[],h=[];let u=t;const f=(e-t)/s,p=new D,g=new _t;for(let _=0;_<=s;_++){for(let m=0;m<=n;m++){const d=o+m/n*r;p.x=u*Math.cos(d),p.y=u*Math.sin(d),c.push(p.x,p.y,p.z),l.push(0,0,1),g.x=(p.x/e+1)/2,g.y=(p.y/e+1)/2,h.push(g.x,g.y)}u+=f}for(let _=0;_<s;_++){const m=_*(n+1);for(let d=0;d<n;d++){const S=d+m,w=S,v=S+n+1,U=S+n+2,T=S+1;a.push(w,v,T),a.push(v,U,T)}}this.setIndex(a),this.setAttribute("position",new te(c,3)),this.setAttribute("normal",new te(l,3)),this.setAttribute("uv",new te(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Si(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class rt extends Le{constructor(t=1,e=32,n=16,s=0,o=Math.PI*2,r=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:o,thetaStart:r,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const c=Math.min(r+a,Math.PI);let l=0;const h=[],u=new D,f=new D,p=[],g=[],_=[],m=[];for(let d=0;d<=n;d++){const S=[],w=d/n;let v=0;d===0&&r===0?v=.5/e:d===n&&c===Math.PI&&(v=-.5/e);for(let U=0;U<=e;U++){const T=U/e;u.x=-t*Math.cos(s+T*o)*Math.sin(r+w*a),u.y=t*Math.cos(r+w*a),u.z=t*Math.sin(s+T*o)*Math.sin(r+w*a),g.push(u.x,u.y,u.z),f.copy(u).normalize(),_.push(f.x,f.y,f.z),m.push(T+v,1-w),S.push(l++)}h.push(S)}for(let d=0;d<n;d++)for(let S=0;S<e;S++){const w=h[d][S+1],v=h[d][S],U=h[d+1][S],T=h[d+1][S+1];(d!==0||r>0)&&p.push(w,v,T),(d!==n-1||c<Math.PI)&&p.push(v,U,T)}this.setIndex(p),this.setAttribute("position",new te(g,3)),this.setAttribute("normal",new te(_,3)),this.setAttribute("uv",new te(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new rt(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class Xe extends Le{constructor(t=1,e=.4,n=12,s=48,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:o},n=Math.floor(n),s=Math.floor(s);const r=[],a=[],c=[],l=[],h=new D,u=new D,f=new D;for(let p=0;p<=n;p++)for(let g=0;g<=s;g++){const _=g/s*o,m=p/n*Math.PI*2;u.x=(t+e*Math.cos(m))*Math.cos(_),u.y=(t+e*Math.cos(m))*Math.sin(_),u.z=e*Math.sin(m),a.push(u.x,u.y,u.z),h.x=t*Math.cos(_),h.y=t*Math.sin(_),f.subVectors(u,h).normalize(),c.push(f.x,f.y,f.z),l.push(g/s),l.push(p/n)}for(let p=1;p<=n;p++)for(let g=1;g<=s;g++){const _=(s+1)*p+g-1,m=(s+1)*(p-1)+g-1,d=(s+1)*(p-1)+g,S=(s+1)*p+g;r.push(_,m,S),r.push(m,d,S)}this.setIndex(r),this.setAttribute("position",new te(a,3)),this.setAttribute("normal",new te(c,3)),this.setAttribute("uv",new te(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Xe(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class ye extends Ri{static get type(){return"MeshStandardMaterial"}constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new Rt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Rt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Qa,this.normalScale=new _t(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new gn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Gs extends ye{static get type(){return"MeshPhysicalMaterial"}constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new _t(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Ae(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Rt(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Rt(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Rt(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}}class Ur extends Ri{static get type(){return"MeshLambertMaterial"}constructor(t){super(),this.isMeshLambertMaterial=!0,this.color=new Rt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Rt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Qa,this.normalScale=new _t(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new gn,this.combine=Xa,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Ko extends Re{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Rt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class zs extends Ko{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Re.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Rt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const Nr=new le,Dl=new D,Ul=new D;class Vh{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new _t(512,512),this.map=null,this.mapPass=null,this.matrix=new le,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new nc,this._frameExtents=new _t(1,1),this._viewportCount=1,this._viewports=[new ue(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;Dl.setFromMatrixPosition(t.matrixWorld),e.position.copy(Dl),Ul.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Ul),e.updateMatrixWorld(),Nr.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Nr),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Nr)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const Nl=new le,Ss=new D,Fr=new D;class Qg extends Vh{constructor(){super(new Ge(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new _t(4,2),this._viewportCount=6,this._viewports=[new ue(2,1,1,1),new ue(0,1,1,1),new ue(3,1,1,1),new ue(1,1,1,1),new ue(3,0,1,1),new ue(1,0,1,1)],this._cubeDirections=[new D(1,0,0),new D(-1,0,0),new D(0,0,1),new D(0,0,-1),new D(0,1,0),new D(0,-1,0)],this._cubeUps=[new D(0,1,0),new D(0,1,0),new D(0,1,0),new D(0,1,0),new D(0,0,1),new D(0,0,-1)]}updateMatrices(t,e=0){const n=this.camera,s=this.matrix,o=t.distance||n.far;o!==n.far&&(n.far=o,n.updateProjectionMatrix()),Ss.setFromMatrixPosition(t.matrixWorld),n.position.copy(Ss),Fr.copy(n.position),Fr.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(Fr),n.updateMatrixWorld(),s.makeTranslation(-Ss.x,-Ss.y,-Ss.z),Nl.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Nl)}}class hc extends Ko{constructor(t,e,n=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new Qg}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class t_ extends Vh{constructor(){super(new Ch(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Tn extends Ko{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Re.DEFAULT_UP),this.updateMatrix(),this.target=new Re,this.shadow=new t_}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class Wh extends Ko{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}class Xh{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Fl(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=Fl();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function Fl(){return performance.now()}const Ol=new le;class e_{constructor(t,e,n=0,s=1/0){this.ray=new tc(t,e),this.near=n,this.far=s,this.camera=null,this.layers=new ec,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return Ol.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Ol),this}intersectObject(t,e=!0,n=[]){return Oa(t,this,n,e),n.sort(zl),n}intersectObjects(t,e=!0,n=[]){for(let s=0,o=t.length;s<o;s++)Oa(t[s],this,n,e);return n.sort(zl),n}}function zl(i,t){return i.distance-t.distance}function Oa(i,t,e,n){let s=!0;if(i.layers.test(t.layers)&&i.raycast(t,e)===!1&&(s=!1),s===!0&&n===!0){const o=i.children;for(let r=0,a=o.length;r<a;r++)Oa(o[r],t,e,!0)}}class Yh{constructor(t=1,e=0,n=0){return this.radius=t,this.phi=e,this.theta=n,this}set(t,e,n){return this.radius=t,this.phi=e,this.theta=n,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+e*e+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,n),this.phi=Math.acos(Ae(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class n_ extends Mg{constructor(t=10,e=10,n=4473924,s=8947848){n=new Rt(n),s=new Rt(s);const o=e/2,r=t/e,a=t/2,c=[],l=[];for(let f=0,p=0,g=-a;f<=e;f++,g+=r){c.push(-a,0,g,a,0,g),c.push(g,0,-a,g,0,a);const _=f===o?n:s;_.toArray(l,p),p+=3,_.toArray(l,p),p+=3,_.toArray(l,p),p+=3,_.toArray(l,p),p+=3}const h=new Le;h.setAttribute("position",new te(c,3)),h.setAttribute("color",new te(l,3));const u=new Nh({vertexColors:!0,toneMapped:!1});super(h,u),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Wa}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Wa);const Bl={constitution:{name:"Constitution",icon:"❤️"},attack:{name:"Attack",icon:"⚔"},strength:{name:"Strength",icon:"💪"},defence:{name:"Defence",icon:"🛡"},woodcutting:{name:"Woodcutting",icon:"🪓"},mining:{name:"Mining",icon:"⛏"}},jn={bronze_hatchet:{name:"Bronze Hatchet",icon:"🪓",stackable:!1,slot:"hatchet"},bronze_pickaxe:{name:"Bronze Pickaxe",icon:"⛏",stackable:!1,slot:"pickaxe"},bronze_sword:{name:"Bronze Sword",icon:"⚔",stackable:!1,slot:"weapon"},whisper_logs:{name:"Whisper Logs",icon:"🪵",stackable:!0},copper_ore:{name:"Copper Ore",icon:"🟠",stackable:!0},tin_ore:{name:"Tin Ore",icon:"⚪",stackable:!0},camp_rations:{name:"Camp Rations",icon:"🍖",stackable:!0},yeti_fur:{name:"Yeti Fur",icon:"🧣",stackable:!0},frost_claw:{name:"Frost Claw",icon:"🧊",stackable:!0},orc_tooth:{name:"Orc Tooth",icon:"🦷",stackable:!0},scout_leather:{name:"Scout Leather",icon:"🦺",stackable:!0}},i_=[{id:"weapon",label:"Weapon"},{id:"hatchet",label:"Hatchet"},{id:"pickaxe",label:"Pickaxe"}];function No(i){let t=0;for(let e=1;e<i;e++)t+=Math.floor(e+300*Math.pow(2,e/7));return Math.floor(t/4)}function s_(i){let t=1;for(;t<99&&No(t+1)<=i;)t++;return t}function Mo(){return{version:1,x:0,z:2,hp:100,maxHp:100,focus:100,stamina:100,skills:{constitution:{level:10,xp:No(10)},attack:{level:1,xp:0},strength:{level:1,xp:0},defence:{level:1,xp:0},woodcutting:{level:1,xp:0},mining:{level:1,xp:0}},inventory:[{id:"camp_rations",qty:5}],equipped:{weapon:"bronze_sword",hatchet:"bronze_hatchet",pickaxe:"bronze_pickaxe"}}}const kl=new Map;function Se(i,t={}){const e=`${i}_${t.roughness??.62}_${t.metalness??.06}_${t.clearcoat??0}_${t.sheen??0}_${t.emissive??0}_${t.emissiveIntensity??0}_${t.envMapIntensity??1}_${t.flatShading===!1?0:1}`;let n=kl.get(e);return n||(n=new Gs({color:i,roughness:t.roughness??.62,metalness:t.metalness??.06,envMapIntensity:t.envMapIntensity??1,flatShading:t.flatShading??!1,...t}),kl.set(e,n)),n}function yo(i,t){const e=Math.sin(i*127.1+t*311.7)*43758.5453;return e-Math.floor(e)}function Fo(i,t){const e=Math.floor(i),n=Math.floor(t),s=i-e,o=t-n,r=s*s*(3-2*s),a=o*o*(3-2*o),c=yo(e,n),l=yo(e+1,n),h=yo(e,n+1),u=yo(e+1,n+1);return c+(l-c)*r+(h-c)*a+(c-l-h+u)*r*a}function Oo(i,t,e=5){let n=0,s=.5,o=1;for(let r=0;r<e;r++)n+=s*Fo(i*o,t*o),s*=.5,o*=2.05;return n}function uc(i,t){const e=document.createElement("canvas"),n=document.createElement("canvas"),s=document.createElement("canvas");e.width=e.height=n.width=n.height=s.width=s.height=i;const o=e.getContext("2d"),r=n.getContext("2d"),a=s.getContext("2d"),c=o.createImageData(i,i),l=r.createImageData(i,i),h=a.createImageData(i,i);for(let f=0;f<i;f++)for(let p=0;p<i;p++){const g=t(p/i,f/i),_=(f*i+p)*4;c.data[_]=g.r,c.data[_+1]=g.g,c.data[_+2]=g.b,c.data[_+3]=255;const m=Math.max(0,Math.min(255,g.rough));l.data[_]=l.data[_+1]=l.data[_+2]=m,l.data[_+3]=255;const d=Math.max(0,Math.min(255,g.bump));h.data[_]=h.data[_+1]=h.data[_+2]=d,h.data[_+3]=255}o.putImageData(c,0,0),r.putImageData(l,0,0),a.putImageData(h,0,0);const u=(f,p)=>{const g=new ac(f);return g.wrapS=g.wrapT=is,g.anisotropy=8,g.colorSpace=p?Ne:wn,g.needsUpdate=!0,g};return{map:u(e,!0),roughnessMap:u(n,!1),bumpMap:u(s,!1)}}let Zn=null,Kn=null,Or=null;function o_(){return Zn||(Zn=uc(256,(i,t)=>{const e=Oo(i*18,t*42),n=Fo(i*70,t*70),s=Oo(i*4.5,t*3.2,3),o=Math.pow(Fo(i*9+t*40,t*2),8),r=.42+e*.28+s*.16-o*.22+n*.06,a=138+r*108,c=112+r*92,l=92+r*74;return{r:a,g:c,b:l,rough:110+e*90-o*40,bump:90+e*110+n*30-o*50}}),Zn.map.repeat.set(2.2,2.2),Zn.roughnessMap.repeat.copy(Zn.map.repeat),Zn.bumpMap.repeat.copy(Zn.map.repeat)),Zn}function r_(){return Kn||(Kn=uc(256,(i,t)=>{const e=Math.abs(Math.sin(i*Math.PI*64))*.12+Math.abs(Math.sin(t*Math.PI*64))*.12,n=Oo(i*10,t*10,4),s=.28+n*.18+e;return{r:124+s*74,g:130+s*78,b:126+s*70,rough:170+e*80,bump:100+e*90+n*40}}),Kn.map.repeat.set(3,3),Kn.roughnessMap.repeat.copy(Kn.map.repeat),Kn.bumpMap.repeat.copy(Kn.map.repeat)),Kn}function a_(){return Or||(Or=uc(256,(i,t)=>{const e=Oo(i*6,t*8,4),n=Math.pow(Fo(i*40,t*40),6),s=212+e*24-n*22,o=196+e*18-n*18,r=184+e*14-n*14;return{r:s,g:o,b:r,rough:96+e*40,bump:118+e*28}})),Or}function zr(i,t={}){const e=o_();return new Gs({color:i,map:e.map,roughnessMap:e.roughnessMap,bumpMap:e.bumpMap,bumpScale:.018,roughness:.58,metalness:.08,clearcoat:.16,clearcoatRoughness:.55,sheen:.22,sheenColor:new Rt(6963240),sheenRoughness:.7,envMapIntensity:.7,flatShading:!1,...t})}function Hl(i){const t=r_();return new Gs({color:i,map:t.map,roughnessMap:t.roughnessMap,bumpMap:t.bumpMap,bumpScale:.02,roughness:.86,metalness:.02,sheen:.18,sheenColor:new Rt(3818552),sheenRoughness:.85,envMapIntensity:.4,flatShading:!1})}function Gl(i,t={}){const e=a_();return new Gs({color:i,map:e.map,roughnessMap:e.roughnessMap,bumpMap:e.bumpMap,bumpScale:.012,roughness:.48,metalness:0,sheen:.35,sheenColor:new Rt(12611664),sheenRoughness:.55,envMapIntensity:.32,emissive:new Rt(2757648),emissiveIntensity:.012,flatShading:!1,...t})}function Ot(i,t){return i.castShadow=!0,i.receiveShadow=!0,t.add(i),i}function Yi(i,t=16){const e=i.map(([n,s])=>new _t(n,s));return new $o(e,t)}function Vl(i,t,e,n){const s=new as;s.moveTo(-i*.5,0),s.lineTo(i*.5,0),s.lineTo(0,-t),s.closePath();const o=new Ai(s,{depth:e,bevelEnabled:!1});o.translate(0,0,-e*.5);const r=new b(o,n);return r.castShadow=!0,r}function Wl(i,t,e,n,s,o=0){const r=Math.hypot(n*1.7,e-t);for(const a of[-1,1]){const c=new b(new Yt(.028,r,.016),s);c.position.set(0,(t+e)*.5,o),c.rotation.z=a*Math.atan2(n*.95,(e-t)*.5),c.castShadow=!0,i.add(c)}}function Xl(i,t,e,n){const s=new b(new Yt(i,i,t),n);s.castShadow=!0;const o=new b(new Yt(i*.42,i*.42,t+.008),new Gs({color:2761752,roughness:.7,metalness:.2,flatShading:!1}));return s.add(o),s}function Yl(i,t,e,n,s,o,r,a,c){for(let l=0;l<o;l++){const h=l/o*Math.PI*2,u=new b(new nn(r,0),l%2?c:a);u.position.set(t+Math.cos(h)*s,e+l%2*.012,n+Math.sin(h)*s),u.rotation.set(.2,h,.15),u.scale.set(1.15,.85,1.05),u.castShadow=!0,i.add(u)}}const qh=new D(0,-.008,.041);function ql(i,t,e,n){const s=new It,o=new b(new ee(n,e*.34,3,8),t);o.position.y=-e*.25,Ot(o,s);const r=new It;r.position.y=-e*.48;const a=new b(new ee(n*.88,e*.24,3,8),i);a.position.y=-e*.16,Ot(a,r),s.add(r);const c=new It;c.position.y=-e*.32;const l=new b(new ee(n*.74,e*.16,3,8),i);l.position.y=-e*.12,Ot(l,c);const h=new b(new rt(n*.6,6,5),i);return h.scale.set(.9,.5,.45),h.position.set(0,-e*.19,-n*.55),c.add(h),r.add(c),{root:s,mid:r,tip:c}}function Qe(i,t){if(!i)return;const e=i.userData.fingers,n=i.userData.thumb;if(!e)return;const s=Math.max(0,Math.min(1.15,t));for(let o=0;o<e.length;o++){const r=1+(o-1.5)*-.07,a=e[o];a.root.rotation.x=-s*.98*r,a.mid.rotation.x=-s*1.22*r,a.tip.rotation.x=-s*.82*r}n&&(n.root.rotation.x=-.55-s*.35,n.mid.rotation.x=-s*.55,n.tip.rotation.x=-s*.45)}function c_(i,t,e,n){const s=new It,o=new b(new rt(.047,12,10),t);o.scale.set(1.02,.98,.66),o.position.set(0,-.016,.01),Ot(o,s);const r=new b(new ee(.037,.022,4,10),e);r.position.set(0,.018,.006),Ot(r,s);const a=new It;a.name="grip",a.position.set(0,-.036,.012),a.rotation.z=0,s.add(a);const c=new b(new ee(.014,.058,4,8),t);c.rotation.z=Math.PI/2,c.position.set(0,.004,.014),Ot(c,a);const l=[];for(let u=0;u<4;u++){const f=.074-Math.abs(u-1.1)*.007,p=ql(i,t,f,.0118-u*9e-4);p.root.position.set(-.031+u*.0207,0,.012-Math.abs(u-1.5)*.005),a.add(p.root),l.push(p)}const h=ql(i,t,.064,.0136);return h.root.position.set(.04,.014,.03),h.root.rotation.z=-1.18,a.add(h.root),s.userData.fingers=l,s.userData.thumb=h,s.userData.gripPoint=qh.clone(),Qe(s,.22),s}function dc(){const i=new It;i.name="player",i.userData.locomotionY=0;const t=Gl(12618850),e=Gl(10646092,{roughness:.56}),n=Se(3154714,{roughness:.94,sheen:.22,sheenColor:new Rt(3811352),flatShading:!0}),s=zr(10117688),o=zr(5386780,{roughness:.78,clearcoat:.04}),r=zr(12618322,{roughness:.58,clearcoat:.12}),a=Se(13215860,{roughness:.92,metalness:0,sheen:.22,sheenColor:new Rt(13148272),sheenRoughness:.7,envMapIntensity:.12,flatShading:!0}),c=Se(9268292,{roughness:.95,sheen:.16,sheenColor:new Rt(9068600),flatShading:!0}),l=Se(11307097,{roughness:.93,sheen:.18,sheenColor:new Rt(11173960),flatShading:!0}),h=Hl(5594455),u=Hl(4081215);Se(15265524,{metalness:.92,roughness:.18,clearcoat:.55,clearcoatRoughness:.12,envMapIntensity:1.35});const f=Se(16186108,{metalness:.96,roughness:.1,clearcoat:.7,clearcoatRoughness:.08,emissive:13161696,emissiveIntensity:.38,envMapIntensity:1.55}),p=new b(new vn(.38,24),new pe({color:0,transparent:!0,opacity:.38,depthWrite:!1}));p.rotation.x=-Math.PI/2,p.position.y=.025,p.name="contactShadow",i.add(p);const g=new It;g.name="playerHips",i.add(g);const _=W=>{const et=new It;et.name=W<0?"legL":"legR",et.position.set(W*.16,.94,0);const it=new b(new rt(.1,14,12),h);it.scale.set(1.04,1,1.02),Ot(it,et);const Ut=new b(Yi([[.096,-.04],[.1,-.14],[.092,-.26],[.08,-.36],[.07,-.42]],14),h);Ot(Ut,et);const vt=new b(new rt(.075,12,9),h);vt.scale.set(1,1.7,.85),vt.position.set(0,-.2,.04),Ot(vt,et);const R=new b(new rt(.07,12,9),u);R.scale.set(1,1.6,.8),R.position.set(0,-.18,-.04),Ot(R,et);const y=new It;y.name=W<0?"shinL":"shinR",y.position.set(0,-.44,0);const L=new b(new rt(.076,14,12),h);L.scale.set(1,.95,1),Ot(L,y);const N=new b(new rt(.04,10,8),h);N.scale.set(1.1,1.1,.7),N.position.set(0,-.01,.062),Ot(N,y);const X=new b(Yi([[.07,-.02],[.072,-.08],[.064,-.14],[.058,-.17]],14),u);X.position.set(0,0,-.012),Ot(X,y);const Y=new b(new rt(.056,12,9),u);Y.scale.set(1.05,1.5,.9),Y.position.set(0,-.09,-.04),Ot(Y,y);const gt=new b(new Qt(.09,.098,.1,14),s);gt.position.set(0,-.2,-.016),Ot(gt,y),Wl(y,-.15,-.25,.094,o,.02);const ct=new b(new Xe(.092,.022,6,10),a);ct.rotation.x=Math.PI/2,ct.position.set(0,-.14,.02),y.add(ct);const St=new b(new Xe(.082,.018,6,10),c);St.rotation.x=Math.PI/2,St.position.set(0,-.24,0),y.add(St);const Gt=new b(new Qt(.048,.058,.14,12),o);Gt.position.set(0,-.36,-.006),Ot(Gt,y);const ht=new b(new Qt(.052,.055,.045,12),s);ht.position.set(0,-.34,-.006),Ot(ht,y);const yt=new It;yt.name=W<0?"footL":"footR",yt.position.set(0,-.48,.04);const Nt=new b(new rt(.04,12,10),o);Ot(Nt,yt);const Ft=new b(new rt(.046,10,8),o);Ft.position.set(0,-.016,-.05),Ot(Ft,yt);const Ct=new b(new ee(.05,.16,5,12),s);Ct.rotation.x=Math.PI/2,Ct.position.set(0,-.004,.12),Ct.scale.set(1.2,1,.68),Ot(Ct,yt);const qt=new b(new ee(.052,.16,4,10),Se(1840144,{roughness:.96}));return qt.rotation.x=Math.PI/2,qt.scale.set(1.12,1,.36),qt.position.set(0,-.032,.1),yt.add(qt),y.add(yt),et.add(y),et};g.add(_(-1)),g.add(_(1));const m=new b(Yi([[.2,-.1],[.24,-.02],[.22,.1]],16),s);m.position.y=.92,m.scale.set(1,1,.86),Ot(m,g);for(const[W,et]of[[.195,0],[-.19,Math.PI]]){const it=Vl(.26,.2,.038,o);it.position.set(0,.86,W),it.rotation.set(Math.sign(W)*.28,et,0),g.add(it)}for(const W of[-1,1]){const et=Vl(.18,.18,.032,r);et.position.set(W*.24,.86,0),et.rotation.order="ZYX",et.rotation.set(0,W*Math.PI*.5,-W*.24),g.add(et)}const d=new It;d.name="playerTorso",d.position.y=1.18,i.add(d);const S=new b(Yi([[.205,-.3],[.215,-.2],[.23,-.06],[.245,.1],[.235,.22],[.15,.32]],14),s);S.scale.set(1.08,1,.88),Ot(S,d);const w=new b(new rt(.2,14,12),s);w.scale.set(1.2,.95,.5),w.position.set(0,.06,-.1),Ot(w,d);for(const W of[-1,1]){const et=new b(new rt(.085,14,12),s);et.scale.set(1.2,.72,.5),et.position.set(W*.1,.1,.16),Ot(et,d)}const v=new b(new rt(.12,12,10),s);v.scale.set(1.1,1,.36),v.position.set(0,-.14,.16),Ot(v,d);const U=new b(new Xe(.225,.03,10,18),o);U.rotation.x=Math.PI/2,U.scale.set(1.04,1,.9),U.position.y=-.26,d.add(U);const T=Xl(.1,.028,.042,f);T.position.set(0,-.26,.225),d.add(T);const A=(W,et)=>{const it=new b(new Yt(.078,.56,.06),o);it.position.set(0,.02,et),it.rotation.set(Math.sign(et)*.09,0,W),it.castShadow=!0,d.add(it)};A(.5,.18),A(-.5,.18),A(.5,-.175),A(-.5,-.175);const I=new b(new Yt(.15,.15,.03),o);I.position.set(0,.05,.205),d.add(I);const M=Xl(.14,.038,.058,f);M.name="chestBuckle",M.position.set(0,.05,.24),d.add(M);const x=.31;for(const W of[-1,1]){const et=new b(new rt(.11,12,9),t);et.scale.set(1.35,.5,.7),et.rotation.z=W*.42,et.position.set(W*.17,.24,-.01),Ot(et,d);const it=new b(new rt(.1,8,6),r);it.scale.set(1.2,.5,1.05),it.position.set(W*(x-.03),.18,.005),it.rotation.z=W*-.34,Ot(it,d);const Ut=new b(new rt(.108,12,9,0,Math.PI*2,0,Math.PI*.5),r);Ut.scale.set(1.06,.9,1.02),Ut.rotation.z=W*-.38,Ut.position.set(W*(x-.01),.13,-.004),Ot(Ut,d);for(let vt=0;vt<3;vt++){const R=new b(new rt(.011,6,5),f),y=-.5+vt*.5;R.position.set(W*(x+Math.cos(y)*.02),.19,Math.sin(y)*.08),d.add(R)}}const C=new b(new Xe(.17,.055,8,12),l);C.rotation.x=Math.PI/2,C.position.set(0,.28,.01),C.scale.set(1.08,1,.92),Ot(C,d),Yl(d,0,.29,.01,.18,8,.042,a,c);const k=new b(new ee(.07,.1,6,14),t);k.position.set(0,.35,.012),Ot(k,d);for(const W of[-1,1]){const et=new b(new ee(.02,.09,4,8),e);et.position.set(W*.045,.34,.058),et.rotation.set(-.18,0,W*.3),Ot(et,d)}const G=W=>{const et=new It;et.name=W<0?"clavL":"clavR",et.position.set(W*.2,.14,0);const it=new It;it.name=W<0?"armL":"armR",it.position.set(W*(x-.2),0,0);const Ut=new b(new rt(.086,14,11),t);Ut.scale.set(1.04,1.02,1),Ut.position.set(W*.004,-.01,-.004),Ot(Ut,it);const vt=new b(Yi([[.07,-.02],[.076,-.1],[.07,-.19],[.058,-.29],[.05,-.33]],12),t);Ot(vt,it);const R=new b(new rt(.058,12,9),t);R.scale.set(1,1.6,.8),R.position.set(W*-.004,-.15,.024),Ot(R,it);const y=new It;y.name=W<0?"forearmL":"forearmR",y.position.set(0,-.34,0);const L=new b(new rt(.06,12,9),t);L.scale.set(1,.95,1.05),Ot(L,y);const N=new b(Yi([[.062,-.03],[.072,-.08],[.068,-.15],[.058,-.22],[.05,-.27]],12),s);N.position.set(0,0,.008),Ot(N,y),Wl(y,-.07,-.21,.066,o,.008);const X=new b(new Xe(.07,.022,6,10),a);X.rotation.x=Math.PI/2,X.position.set(0,-.045,.008),y.add(X),Yl(y,0,-.04,.008,.066,6,.024,a,c);const Y=new b(new Xe(.052,.014,6,10),o);Y.rotation.x=Math.PI/2,Y.position.set(0,-.25,.008),y.add(Y);const gt=c_(t,s,o);return gt.name=W<0?"handL":"handR",gt.position.set(0,-.28,.02),y.add(gt),it.add(y),et.add(it),et};d.add(G(-1)),d.add(G(1));const V=new It;V.name="playerHead",V.position.set(0,.5,.015),V.scale.setScalar(.93);const J=Se(3877663,{roughness:.95,sheen:.18,sheenColor:new Rt(5455916)}),q=new b(new rt(.163,22,18),t);q.scale.set(.95,1.07,.9),q.position.z=-.012,Ot(q,V);const at=new b(new rt(.13,18,14),t);at.scale.set(1,1.12,.55),at.position.set(0,-.01,.07),Ot(at,V);const K=new b(new ee(.022,.1,5,12),t);K.rotation.z=Math.PI/2,K.scale.set(1,1,.8),K.position.set(0,.05,.132),Ot(K,V);const pt=new b(new rt(.114,16,13),e);pt.scale.set(1.02,.74,.9),pt.position.set(0,-.093,.03),Ot(pt,V);const wt=new b(new rt(.114,16,13),J);wt.scale.set(1.06,.78,1.02),wt.position.set(0,-.11,.046),Ot(wt,V);const dt=new b(new rt(.06,12,9),J);dt.scale.set(1.15,.95,.9),dt.position.set(0,-.15,.095),V.add(dt);for(const W of[-1,1]){const et=new b(new rt(.024,8,6),J);et.scale.set(.3,1.7,.7),et.position.set(W*.147,-.024,-.012),et.rotation.z=W*.12,V.add(et);const it=new b(new ee(.011,.028,3,8),J);it.rotation.z=Math.PI/2,it.rotation.y=W*.35,it.position.set(W*.02,-.074,.164),V.add(it)}const Vt=new b(new ee(.013,.034,4,10),t);Vt.rotation.x=-.3,Vt.position.set(0,.008,.15),Ot(Vt,V);const ut=new b(new rt(.023,12,10),t);ut.scale.set(1,.9,.95),ut.position.set(0,-.03,.165),Ot(ut,V);for(const W of[-1,1]){const et=new b(new rt(.015,10,8),t);et.scale.set(1,.85,.9),et.position.set(W*.022,-.038,.152),V.add(et);const it=new b(new rt(.0055,8,6),e);it.position.set(W*.012,-.047,.166),V.add(it)}for(const W of[-1,1]){const et=new b(new ee(.011,.05,3,8),J);et.rotation.z=Math.PI/2+W*-.18,et.rotation.x=-.3,et.position.set(W*.052,.066,.146),V.add(et);const it=new b(new rt(.021,14,11),Se(15129805,{roughness:.3}));it.position.set(W*.051,.018,.128),V.add(it);const Ut=new b(new rt(.0122,10,8),Se(4864546,{roughness:.3,clearcoat:.6,clearcoatRoughness:.1}));Ut.position.set(W*.051,.018,.1445),V.add(Ut);const vt=new b(new rt(.0058,8,6),Se(657414,{roughness:.25}));vt.position.set(W*.051,.018,.153),V.add(vt);const R=new b(new rt(.024,12,9,0,Math.PI*2,0,Math.PI*.5),t);R.scale.set(1.06,1,.92),R.rotation.x=-.5,R.position.set(W*.051,.024,.126),V.add(R);const y=new b(new rt(.023,12,9,0,Math.PI*2,Math.PI*.62,Math.PI*.38),e);y.scale.set(1.06,1,.9),y.rotation.x=.35,y.position.set(W*.051,.014,.126),V.add(y);const L=new b(new rt(.03,10,8),t);L.scale.set(.36,1.05,.62),L.position.set(W*.15,.006,-.012),V.add(L);const N=new b(new rt(.014,8,6),t);N.scale.set(.4,.8,.65),N.position.set(W*.149,-.026,-.01),V.add(N)}const F=new b(new ee(.0045,.04,3,8),Se(4858908,{roughness:.6}));F.rotation.z=Math.PI/2,F.position.set(0,-.098,.163),V.add(F);const Q=new b(new ee(.0075,.03,3,8),e);Q.rotation.z=Math.PI/2,Q.position.set(0,-.109,.161),V.add(Q);const ft=new b(new rt(.171,16,12,0,Math.PI*2,0,Math.PI*.47),n);ft.position.set(0,.052,-.016),ft.scale.set(1.06,1,1.1),Ot(ft,V);const ot=[[0,.15,.062,.082,.5],[-.078,.142,.05,.074,.35],[.078,.142,.05,.074,-.35],[-.128,.098,-.01,.07,.2],[.128,.098,-.01,.07,-.2],[-.072,.122,-.108,.078,.1],[.072,.122,-.108,.078,-.1],[0,.1,-.152,.082,0]];for(const[W,et,it,Ut,vt]of ot){const R=new b(new nn(Ut,0),n);R.position.set(W,et,it),R.rotation.set(-.4+it*1.2,W*1.6,vt),R.scale.set(1.1,.52,1.25),V.add(R)}const mt=new b(new nn(.082,0),n);mt.scale.set(1.6,.3,.62),mt.rotation.set(.42,0,.12),mt.position.set(.014,.125,.098),V.add(mt),d.add(V);const Mt=new It;Mt.name="toolRoot",Mt.visible=!1,d.getObjectByName("armR").getObjectByName("handR").getObjectByName("grip").add(Mt),fc(Mt,null);const nt=Zh();nt.name="tool_hatchet",nt.visible=!1,Mt.add(nt);const P=Kh();P.name="tool_pickaxe",P.visible=!1,Mt.add(P);const At=Jh();return At.name="tool_sword",At.visible=!1,Mt.add(At),i}function mn(i=12766940,t={}){return Se(i,{metalness:.42,roughness:.28,clearcoat:.5,clearcoatRoughness:.2,envMapIntensity:1,...t})}function $h(i,t,e){const n=new It,s=Se(6964256,{roughness:.78,clearcoat:.1,clearcoatRoughness:.7}),o=new b(new Qt(t,t*1.06,i,12),s);o.position.y=i*.5,Ot(o,n);const r=new b(new rt(e,10,8),s);r.scale.set(1,1.35,1),Ot(r,n);const a=Se(3810324,{roughness:.88});for(let c=0;c<5;c++){const l=new b(new Xe(t*1.12,.007,5,10),a);l.rotation.x=Math.PI/2,l.rotation.z=c*.4,l.position.y=.03+c*.032,n.add(l)}return n}function Zh(){const i=new It,t=$h(.46,.021,.03);t.position.y=-.06,i.add(t);const e=new It;e.position.y=.36;const n=new b(new Qt(.034,.034,.11,10),mn(9411496));n.scale.set(.68,1,1),Ot(n,e);const s=new as;s.moveTo(0,-.046),s.lineTo(.075,-.058),s.lineTo(.155,-.112),s.lineTo(.192,-.092),s.lineTo(.2,.082),s.lineTo(.15,.096),s.lineTo(.065,.054),s.lineTo(0,.046),s.closePath();const o=new b(new Ai(s,{depth:.008,bevelEnabled:!0,bevelSize:.013,bevelThickness:.017,bevelSegments:2}),mn(11714768));o.rotation.y=-Math.PI/2,o.position.set(.021,0,0),Ot(o,e);const r=new b(new Yt(.007,.185,.01),Se(15397627,{metalness:.22,roughness:.16,clearcoat:.6,envMapIntensity:.9}));r.name="toolEdge",r.position.set(0,-.006,.206),r.rotation.x=.06,e.add(r);const a=new b(new Yt(.044,.058,.038),mn(9674926,{roughness:.34}));a.name="toolHeel",a.position.set(0,.004,-.042),Ot(a,e);const c=new b(new Yt(.038,.01,.014),mn(6187638,{roughness:.5}));return c.position.set(0,.052,.004),e.add(c),i.add(e),i}function Kh(){const i=new It,t=$h(.52,.021,.03);t.position.y=-.07,i.add(t);const e=new It;e.position.y=.43;const n=new b(new Qt(.034,.038,.09,10),mn(9082274));Ot(n,e);for(let a=0;a<6;a++){const c=a/5,l=new b(new Yt(.058-c*.034,.056-c*.031,.062-c*.032),mn(10135736-a*197379));l.position.set(0,.02-c*c*.125,.055+c*.2),l.rotation.x=c*.72,Ot(l,e)}const s=new b(new De(.018,.085,6),Se(15002868,{metalness:.24,roughness:.18,clearcoat:.5,envMapIntensity:.9}));s.name="toolEdge",s.rotation.x=Math.PI*.66,s.position.set(0,-.128,.292),Ot(s,e);const o=new b(new Yt(.048,.048,.17),mn(9082274));o.name="toolHeel",o.position.set(0,.014,-.088),o.rotation.x=-.22,Ot(o,e);const r=new b(new Yt(.05,.012,.02),Se(14674162,{metalness:.24,roughness:.18,clearcoat:.5,envMapIntensity:.9}));return r.position.set(0,.042,-.175),e.add(r),i.add(e),i}function Jh(){const i=new It,t=Se(14201944,{metalness:.78,roughness:.26,clearcoat:.4,envMapIntensity:1.2}),e=new b(new Qt(.019,.023,.17,10),Se(4860434,{roughness:.8}));Ot(e,i);const n=Se(3021840,{roughness:.9});for(let p=0;p<7;p++){const g=new b(new Xe(.024,.006,5,10),n);g.rotation.x=Math.PI/2,g.rotation.y=p*.3,g.position.y=-.062+p*.021,i.add(g)}const s=new b(new rt(.031,12,10),t);s.name="toolHeel",s.scale.set(1,.85,1),s.position.y=-.098,Ot(s,i);const o=new b(new Qt(.02,.026,.016,10),t);o.position.y=-.076,i.add(o);const r=new as;r.moveTo(-.1,0),r.quadraticCurveTo(-.05,.034,0,.018),r.quadraticCurveTo(.05,.034,.1,0),r.quadraticCurveTo(.05,-.02,0,-.016),r.quadraticCurveTo(-.05,-.02,-.1,0);const a=new b(new Ai(r,{depth:.036,bevelEnabled:!0,bevelSize:.005,bevelThickness:.004,bevelSegments:1}),t);a.position.set(0,.092,-.018),Ot(a,i);const c=new b(new Yt(.042,.05,.026),mn(11187908));c.position.y=.128,Ot(c,i);const l=mn(13951212,{roughness:.14,clearcoat:.6,emissive:1911868,emissiveIntensity:.1}),h=6;for(let p=0;p<h;p++){const g=p/h,_=.078-g*.03,m=new b(new Yt(_,.58/h+.004,.02-g*.006),l);m.position.y=.17+.58/h*(p+.5),Ot(m,i)}const u=new b(new Yt(.016,.44,.024),mn(10465474,{roughness:.3,clearcoat:.3}));u.position.y=.4,i.add(u);for(const p of[-1,1]){const g=new b(new Yt(.008,.58,.012),mn(16054783,{roughness:.08,clearcoat:.75}));g.position.set(p*.032,.46,0),i.add(g)}const f=new b(new De(.034,.12,4),l);return f.name="toolEdge",f.rotation.y=Math.PI/4,f.scale.set(1,1,.42),f.position.y=.81,Ot(f,i),i}function fc(i,t){i.position.copy(qh),t==="hatchet"?i.rotation.set(.12,-.14,-Math.PI/2):t==="pickaxe"?i.rotation.set(.08,-.1,-Math.PI/2):i.rotation.set(Math.PI/2+.7,-.1,-Math.PI/2)}function Vs(i){const t=i.getObjectByName("toolRoot");if(!t||!t.visible)return;const e=t.getObjectByName("tool_sword"),n=t.getObjectByName("tool_hatchet"),s=t.getObjectByName("tool_pickaxe"),o=e?.visible?"sword":n?.visible?"hatchet":s?.visible?"pickaxe":null;fc(t,o)}function Fe(i,t){const e=i.getObjectByName("toolRoot");if(e){e.visible=t!==null;for(const n of["tool_hatchet","tool_pickaxe","tool_sword"]){const s=e.getObjectByName(n);s&&(s.visible=n===`tool_${t}`)}fc(e,t)}}function Ci(i){const t=Math.max(0,Math.min(1,i));return t*t*(3-2*t)}function Bn(i){const t=Math.max(0,Math.min(1,i));return t<.5?16*t*t*t*t*t:1-Math.pow(-2*t+2,5)/2}function z(i,t){return i.getObjectByName(t)}function zo(i,t={}){if(!i)return;const e=i.userData.rest;e&&(i.position.set(e.x+(t.x??0),e.y+(t.y??0),e.z+(t.z??0)),i.rotation.set(e.rx+(t.rx??0),e.ry,e.rz))}function _n(i,t){i.userData.locomotionY=t}function Ue(i){i&&i.rotation.set(0,0,0)}function se(i,t,e){return i+(t-i)*e}function st(i,t,e,n){i&&i.rotation.set(t,e,n)}function xe(i){return Math.max(0,i)}function pc(i,t){return!!z(i,t)?.visible}const jh=["playerHips","playerTorso","playerHead","clavL","clavR","armL","forearmL","handL","armR","forearmR","handR","legL","shinL","footL","legR","shinR","footR"],za=[0,0,0];function l_(i,t,e){const n=i??za,s=t??za;return[se(n[0],s[0],e),se(n[1],s[1],e),se(n[2],s[2],e)]}function Qn(i,t,e){const n={};for(const s of jh)(i[s]||t[s])&&(n[s]=l_(i[s],t[s],e));return n.gripR=se(i.gripR??.25,t.gripR??.25,e),n.gripL=se(i.gripL??.25,t.gripL??.25,e),n.lift=se(i.lift??0,t.lift??0,e),n}function Qh(i,t){for(const s of jh){const o=t[s]??za,r=z(i,s);r&&r.rotation.set(s==="shinL"||s==="shinR"?xe(o[0]):o[0],o[1],o[2])}const e=z(i,"playerHips");e&&e.position.set(0,0,0);const n=z(i,"playerTorso");n&&(n.position.x=0,n.position.z=0,n.scale.set(1,1,1)),Qe(z(i,"handR"),t.gripR??.25),Qe(z(i,"handL"),t.gripL??.25),Vs(i),_n(i,t.lift??0)}const h_=["playerHips","playerTorso","playerHead","clavL","clavR","armL","armR","forearmL","forearmR","handL","handR","legL","legR","shinL","shinR","footL","footR"],u_=["yetiBody","yetiHead","yetiArmL","yetiArmR","yetiForearmL","yetiForearmR","yetiLegL","yetiLegR","yetiShinL","yetiShinR","yetiFootL","yetiFootR"],d_=["orcBody","orcHead","orcArmL","orcArmR","orcForearmL","orcForearmR","orcLegL","orcLegR","orcShinL","orcShinR","orcFootL","orcFootR"],f_=3.35,p_=5.7,m_=1.18,g_=.78;class Br{constructor(t=h_){this.joints=t}prev=new Map;reset(){this.prev.clear()}apply(t,e,n=18){const s=1-Math.exp(-n*Math.max(0,e));for(const o of this.joints){const r=z(t,o);if(!r)continue;const a=this.prev.get(o);if(!a){this.prev.set(o,r.rotation.clone());continue}r.rotation.set(a.x+(r.rotation.x-a.x)*s,a.y+(r.rotation.y-a.y)*s,a.z+(r.rotation.z-a.z)*s),a.copy(r.rotation)}Vs(t)}}function Jn(i){Ue(z(i,"playerHips")),Ue(z(i,"legL")),Ue(z(i,"legR")),Ue(z(i,"shinL")),Ue(z(i,"shinR")),Ue(z(i,"footL")),Ue(z(i,"footR")),Ue(z(i,"clavL")),Ue(z(i,"clavR")),Ue(z(i,"armL")),Ue(z(i,"armR")),Ue(z(i,"forearmL")),Ue(z(i,"forearmR")),Ue(z(i,"handL")),Ue(z(i,"handR")),Ue(z(i,"playerHead")),Ue(z(i,"playerTorso"));const t=z(i,"playerHips");t&&t.position.set(0,0,0);const e=z(i,"playerTorso");e&&(e.position.x=0,e.position.z=0,e.scale.set(1,1,1)),Qe(z(i,"handR"),pc(i,"tool_sword")?.96:.22),Qe(z(i,"handL"),.22),Vs(i),i.rotation.z=0,i.rotation.x=0,_n(i,0)}function yi(i,t,e=!1){if(pc(i,"tool_sword")){__(i,t);return}const n=Math.sin(t*1.35)*.018,s=Math.sin(t*.55)*.018,o=Math.sin(t*.37+1.1)*.012,r=Math.sin(t*.28)*.08+Math.sin(t*.11)*.04,a=z(i,"playerHips"),c=z(i,"playerTorso");a&&(a.rotation.set(0,s*.12,s*.1),a.position.set(s*.08,0,0)),c&&(c.rotation.set(.015+n*.55,s*.1,s*.04-o*.06),c.position.x=0,c.position.z=0,c.scale.set(1+n*.008,1+n*.014,1+n*.006)),st(z(i,"playerHead"),-.04+n*.28,r,-s*.06),st(z(i,"clavL"),.02,0,-.02),st(z(i,"clavR"),.02,0,.02),st(z(i,"armL"),.08+n*.05,.06,-.13+o*.08),st(z(i,"forearmL"),-.24+o*.06,.08,-.03),st(z(i,"handL"),.06,.06,.02),st(z(i,"armR"),.08-n*.05,-.06,.13-o*.08),st(z(i,"forearmR"),-.24-o*.06,-.08,.03),st(z(i,"handR"),.06,-.06,-.02),st(z(i,"legL"),.02+s*.04,0,.02),st(z(i,"legR"),-.01-s*.04,0,-.02),st(z(i,"shinL"),xe(.06+Math.max(0,s)*.04),0,0),st(z(i,"shinR"),xe(.08+Math.max(0,-s)*.04),0,0),st(z(i,"footL"),.02,0,0),st(z(i,"footR"),.03,0,0),Qe(z(i,"handL"),.2),Qe(z(i,"handR"),.2),_n(i,n*.02)}const tu={playerHips:[.02,-.1,.02],playerTorso:[.08,-.2,.04],playerHead:[-.04,.18,-.04],clavR:[.1,-.12,-.1],clavL:[.04,.08,.08],armR:[-.075,.32,.533],forearmR:[-1.887,-.185,.06],handR:[.622,-1.425,-.209],armL:[-.7,.15,-.3],forearmL:[-1.15,.1,0],handL:[.1,.2,.1],legL:[-.22,.06,.05],shinL:[.3,0,0],footL:[.06,.1,0],legR:[.12,-.04,-.04],shinR:[.2,0,0],footR:[.04,-.08,0],gripR:.96,gripL:.3,lift:.02};function __(i,t){const e=Math.sin(t*1.4)*.016,n=Math.sin(t*.7)*.012,s=Math.sin(t*.43+.6)*.02,o=tu;st(z(i,"playerHips"),o.playerHips[0],o.playerHips[1]+n,o.playerHips[2]);const r=z(i,"playerHips");r&&(r.position.x=.02);const a=z(i,"playerTorso");a&&(a.rotation.set(o.playerTorso[0]+e*.5,o.playerTorso[1]+n*.5,o.playerTorso[2]),a.position.x=0,a.scale.set(1+e*.008,1+e*.012,1)),st(z(i,"playerHead"),o.playerHead[0]+e*.2,o.playerHead[1],o.playerHead[2]),st(z(i,"clavL"),...o.clavL),st(z(i,"clavR"),...o.clavR),st(z(i,"armL"),o.armL[0]+e*.08,o.armL[1],o.armL[2]),st(z(i,"forearmL"),...o.forearmL),st(z(i,"handL"),...o.handL),st(z(i,"armR"),o.armR[0]+s*.6,o.armR[1],o.armR[2]),st(z(i,"forearmR"),o.forearmR[0]-s*.5,o.forearmR[1],o.forearmR[2]),st(z(i,"handR"),o.handR[0]+s,o.handR[1],o.handR[2]+n*.6),st(z(i,"legL"),...o.legL),st(z(i,"legR"),...o.legR),st(z(i,"shinL"),xe(o.shinL[0]),0,0),st(z(i,"shinR"),xe(o.shinR[0]),0,0),st(z(i,"footL"),...o.footL),st(z(i,"footR"),...o.footR),Qe(z(i,"handR"),.97),Qe(z(i,"handL"),.3),Vs(i),_n(i,e*.02)}const v_=.94,eu=.82;function mc(i){return Ci((Math.max(.25,i)-.3)/.68)}function Ba(i){return se(3.4,7.2,mc(i))}function x_(i){const t=se(.3,eu,mc(i));return 2*v_*Math.sin(t)*.92}function Bo(i,t,e=.85,n=1){const s=Math.max(0,Math.min(1,n)),o=Math.max(.25,e),r=mc(o),a=Ci((o-.62)/.4),c=se(.3,eu,r)*s,l=pc(i,"tool_sword"),h=Math.sin(t),u=Math.sin(t+Math.PI),f=Math.max(0,-Math.cos(t)),p=Math.max(0,-Math.cos(t+Math.PI)),g=Math.max(0,Math.cos(t)),_=Math.max(0,Math.cos(t+Math.PI)),m=Math.max(0,h)*f,d=Math.max(0,u)*p,S=Math.max(0,-h)*(1-g),w=Math.max(0,-u)*(1-_),v=Math.cos(t*2),U=se(v*.016,-v*.052,a)*s,T=se(.72,1.95,a),A=se(.08,.42,a),I=z(i,"playerHips"),M=z(i,"playerTorso");I&&(I.rotation.y=h*se(.09,.2,a)*s,I.rotation.z=-Math.cos(t)*se(.03,.075,a)*s,I.rotation.x=se(0,.1,a)*s,I.position.x=-h*.018*s);const x=se(.5,.95,a);st(z(i,"legL"),h*c-f*x,0,.03-a*.02),st(z(i,"legR"),u*c-p*x,0,-.03+a*.02),st(z(i,"shinL"),xe(.12+f*T+m*.4+S*.18+g*A),0,0),st(z(i,"shinR"),xe(.12+p*T+d*.4+w*.18+_*A),0,0);const C=se(.34,.1,a),k=se(.26,.62,a);st(z(i,"footL"),-f*C+g*Math.max(0,h)*k+a*.12,0,0),st(z(i,"footR"),-p*C+_*Math.max(0,u)*k+a*.12,0,0);const G=se(.05,.16,a);if(st(z(i,"clavL"),-h*G*s,0,-.04),st(z(i,"clavR"),-u*G*s,0,.04),l){const J=Math.max(0,u)*se(.08,.22,a);st(z(i,"armL"),-h*se(.55,1.05,a)*s+.1,.06,-.06),st(z(i,"forearmL"),se(-.28,-1.35,a)-Math.max(0,h)*.2,.04,0),st(z(i,"handL"),.06,.04,.04),st(z(i,"armR"),.22+J*.35,.08,.14),st(z(i,"forearmR"),-.62-J*.4,-.06,.04),st(z(i,"handR"),.18+J*.2,-1.18,-.26),Qe(z(i,"handR"),.96),Qe(z(i,"handL"),.22)}else{const J=c*se(1,.85,a),q=se(0,1,a);st(z(i,"armL"),-h*J+se(.08,.3,a),.04+q*.16,-.12-q*.04),st(z(i,"armR"),-u*J+se(.08,.3,a),-.04-q*.16,.12+q*.04),st(z(i,"forearmL"),se(-.35-Math.max(0,h)*.4,-1.52-Math.max(0,-h)*.35,a),.06,0),st(z(i,"forearmR"),se(-.35-Math.max(0,u)*.4,-1.52-Math.max(0,-u)*.35,a),-.06,0),st(z(i,"handL"),-h*.12,.04,.04+q*.2),st(z(i,"handR"),-u*.12,-.04,-.04-q*.2),Qe(z(i,"handL"),se(.28,.72,a)),Qe(z(i,"handR"),se(.28,.72,a))}const V=se(.03,.26,a)*s;M&&(M.rotation.y=-h*se(.1,.2,a)*s,M.rotation.x=V,M.rotation.z=h*.03*s,M.position.x=-h*.01*s,M.position.z=0,M.scale.set(1,1,1)),st(z(i,"playerHead"),-V*.65-Math.max(0,-v)*.03,h*.05*s,-h*.02*s),Vs(i),_n(i,U)}function nu(i,t){const e=Math.max(0,Math.min(1,t)),n=tu,s={playerHips:[.04,-.32,-.05],playerTorso:[-.12,-.55,-.08],playerHead:[-.1,.32,.06],clavR:[-.16,-.28,-.32],clavL:[.08,.16,.16],armR:[-2.23,-.47,1.1],forearmR:[-1.77,.14,0],handR:[.8,-1.9,-.8],armL:[-.55,.2,-.28],forearmL:[-1.05,.12,.08],handL:[.1,.16,.1],legL:[-.28,.08,.06],shinL:[.32,0,0],footL:[.02,.12,0],legR:[.16,-.06,-.05],shinR:[.22,0,0],footR:[.1,-.1,0],gripR:.96,gripL:.3,lift:.04},o={playerHips:[0,.26,.06],playerTorso:[.22,.48,.1],playerHead:[.1,.2,-.08],clavR:[.18,.14,.12],clavL:[.04,.06,.1],armR:[-1.7,-.48,-.74],forearmR:[-.65,-.5,0],handR:[.72,-1.9,-.25],armL:[-.35,.14,.22],forearmL:[-.7,.08,.06],handL:[.08,.08,.12],legL:[-.4,.06,-.04],shinL:[.22,0,0],footL:[.08,.08,0],legR:[.26,-.04,.04],shinR:[.4,0,0],footR:[-.04,-.06,0],gripR:1.08,gripL:.34,lift:.05},r={...o,playerHips:[-.02,.32,.06],playerTorso:[.18,.62,.12],playerHead:[.12,.28,-.08],clavR:[.2,.18,.12],clavL:[.04,.08,.12],armR:[-1.56,-1,-.9],forearmR:[-.98,-.5,0],handR:[.78,-1.9,.04],armL:[-.2,.16,.26],forearmL:[-.55,.08,.06],gripR:.98,lift:.03};let a;e<.36?a=Qn(n,s,Bn(e/.36)):e<.52?a=Qn(s,o,Math.pow((e-.36)/.16,2.1)):e<.64?a=Qn(o,r,Ci((e-.52)/.12)):a=Qn(r,n,Bn((e-.64)/.36)),Qh(i,a)}function ka(i,t,e){const n=t%1,s=e==="tree",o=s?{playerHips:[.02,-.1,0],playerTorso:[.12,-.16,.04],playerHead:[.08,.12,0],clavR:[.06,-.1,-.08],clavL:[.04,.08,.1],armR:[.23,-.11,-.06],forearmR:[-1.43,.3,.06],handR:[-.04,-.56,-.4],armL:[.18,.16,.26],forearmL:[-.62,.1,.06],handL:[.1,.06,.08],legL:[-.12,.04,.04],shinL:[.24,0,0],legR:[.1,-.04,-.04],shinR:[.2,0,0],footL:[.04,.06,0],footR:[.04,-.06,0],gripR:.96,gripL:.28}:{playerHips:[.03,-.06,0],playerTorso:[.18,-.1,.02],playerHead:[.14,.06,0],clavR:[.08,-.06,-.06],clavL:[.04,.06,.1],armR:[.18,-.2,-.03],forearmR:[-1.35,.3,.06],handR:[-.07,-.58,-.45],armL:[.24,.14,.22],forearmL:[-.76,.08,.06],handL:[.12,.06,.08],legL:[-.1,.04,.04],shinL:[.3,0,0],legR:[.12,-.04,-.04],shinR:[.28,0,0],footL:[.04,0,0],footR:[.04,0,0],gripR:.96,gripL:.28},r=s?{playerHips:[.02,-.2,-.04],playerTorso:[-.12,-.32,-.06],playerHead:[-.02,.24,.04],clavR:[-.1,-.18,-.26],clavL:[.1,.12,.16],armR:[-2.49,.35,.03],forearmR:[-1.25,-.3,.06],handR:[.5,-1.9,-.45],armL:[.4,.26,.42],forearmL:[-.72,.12,.08],handL:[.14,.1,.1],legL:[-.22,.06,.05],shinL:[.28,0,0],legR:[.16,-.05,-.05],shinR:[.18,0,0],footL:[.02,.06,0],footR:[.08,-.06,0],gripR:.9,gripL:.26,lift:.045}:{playerHips:[.02,-.04,0],playerTorso:[-.2,-.08,0],playerHead:[-.14,.06,0],clavR:[-.18,-.04,-.22],clavL:[.08,.1,.18],armR:[-1.94,.76,-.6],forearmR:[-.1,-.27,.06],handR:[.5,-.94,-.45],armL:[-.44,.2,.36],forearmL:[-1.05,.12,.08],handL:[.12,.08,.1],legL:[-.14,.04,.04],shinL:[.14,0,0],legR:[.12,-.04,-.04],shinR:[.12,0,0],footL:[.1,0,0],footR:[.12,0,0],gripR:.9,gripL:.26,lift:.075},a=s?{playerHips:[0,.14,.05],playerTorso:[.4,.2,.08],playerHead:[.26,.1,-.04],clavR:[.18,.1,.12],clavL:[.02,.04,.1],armR:[-.57,.15,-.51],forearmR:[-1.36,-.3,.06],handR:[.5,-1.62,-.45],armL:[-.22,.12,.3],forearmL:[-.42,.06,.04],handL:[.06,.04,.12],legL:[-.34,.05,-.04],shinL:[.34,0,0],legR:[.24,-.04,.04],shinR:[.46,0,0],footL:[.06,.06,0],footR:[-.02,-.04,0],gripR:1.1,gripL:.34,lift:-.035}:{playerHips:[.14,.04,0],playerTorso:[.52,.06,.02],playerHead:[.3,.04,0],clavR:[.22,.04,.1],clavL:[.02,.04,.1],armR:[-1.01,-.8,.24],forearmR:[-.38,-.3,.06],handR:[.5,-.85,-.45],armL:[-.32,.16,.34],forearmL:[-.36,.06,.04],handL:[.06,.04,.12],legL:[-.42,.05,.05],shinL:[.72,0,0],legR:[-.34,-.05,-.05],shinR:[.66,0,0],footL:[-.16,0,0],footR:[-.14,0,0],gripR:1.12,gripL:.36,lift:-.09},c=s?{...a,playerTorso:[.3,.14,.06],playerHips:[0,.1,.04],clavR:[.14,.08,.1],armR:[-.21,.08,-.5],forearmR:[-1.68,-.3,.06],handR:[.5,-1.23,-.19],gripR:1,lift:.005}:{...a,playerTorso:[.4,.05,.02],playerHips:[.1,.03,0],clavR:[.18,.03,.08],armR:[-.58,.1,-.12],forearmR:[-1.1,-.2,.06],handR:[.4,-1.05,-.3],shinL:[.6,0,0],shinR:[.56,0,0],gripR:1.02,lift:-.04},l=s?.38:.46,h=s?.16:.14;let u;n<l?u=Qn(o,r,Bn(n/l)):n<l+h?u=Qn(r,a,Math.pow((n-l)/h,s?2:2.4)):n<l+h+.1?u=Qn(a,c,Ci((n-l-h)/.1)):u=Qn(c,o,Bn((n-l-h-.1)/(.9-l-h))),Qh(i,u)}function $l(i,t,e=.55){const n=Math.max(0,Math.min(1,t)),s=Math.max(.2,Math.min(1.4,e)),o=Math.sin(n*Math.PI);i.rotation.z=o*.3*s,i.rotation.x=-o*(s>.7?.24:.13)*s;const r=s>.7?o*.3*(s-.7):o*.08*s,a=i.getObjectByName("playerTorso")||i.getObjectByName("yetiBody")||i.getObjectByName("orcBody");a&&(a.rotation.y=r,a.rotation.x=-o*.1*s)}function Es(i,t,e,n){let s=t-i;for(;s>Math.PI;)s-=Math.PI*2;for(;s<-Math.PI;)s+=Math.PI*2;const o=Math.sign(s)*Math.min(Math.abs(s),e*n);return i+o}function iu(i,t){const e=Math.max(0,Math.min(1,t));let n=0,s=0;if(e<.42)n=e>.3?1:Bn(e/.3);else if(e<.62){const h=Bn((e-.42)/.2);n=1-h,s=h}else s=1-Ci((e-.62)/.38);const o=1-n-s,r=o*0+n*-.2+s*.48,a=n*.5+s*.75;st(z(i,"yetiArmR"),o*-.22+n*-2.05+s*-.95,o*.04+n*-.4+s*.7,o*.28+n*.72+s*.22),st(z(i,"yetiArmL"),o*-.22+n*-1.85+s*-.8,o*-.04+n*.32+s*-.55,o*-.28+n*-.65+s*-.18),st(z(i,"yetiForearmR"),o*-.38+n*-1.15+s*-.18,.08,.05),st(z(i,"yetiForearmL"),o*-.38+n*-1+s*-.16,-.08,-.05);const c=z(i,"yetiHead");c&&(c.rotation.x=-.15-a*.55+s*.1,c.rotation.y=s*.16,c.rotation.z=0);const l=z(i,"yetiBody");l&&(l.rotation.x=.2+r,l.rotation.y=s*.18-n*.08,l.rotation.z=s*.05),st(z(i,"yetiLegL"),o*.04+n*.08+s*-.42,0,.04),st(z(i,"yetiLegR"),o*.04+n*.4+s*.1,0,-.04),st(z(i,"yetiShinL"),xe(.12+n*.16+s*.32),0,0),st(z(i,"yetiShinR"),xe(.14+n*.48+s*.1),0,0),st(z(i,"yetiFootL"),n*.08+s*-.14,0,0),st(z(i,"yetiFootR"),n*.16+s*-.06,0,0),_n(i,s*.07+n*.03)}function su(i,t){const e=Math.max(0,Math.min(1,t));let n=0,s=0;if(e<.4)n=e>.28?1:Bn(e/.28);else if(e<.58){const l=Bn((e-.4)/.18);n=1-l,s=l}else s=1-Ci((e-.58)/.42);const o=1-n-s,r=o*.04+n*-.16+s*.42;zo(z(i,"orcSpear"),{rx:n*.06+s*.42,z:n*-.04+s*.05,y:n*.02}),st(z(i,"orcArmR"),o*-.2+n*.72+s*-.95,o*.05+n*.16+s*.08,o*.16+n*.22+s*.1),st(z(i,"orcForearmR"),o*-.32+n*-1.05+s*-.12,-.06,.04),st(z(i,"orcArmL"),o*-.08+n*.4+s*-.55,o*0+n*-.12+s*.04,o*-.18+n*-.1+s*-.08),st(z(i,"orcForearmL"),o*-.28+n*-.5+s*-.22,.08,-.04);const a=z(i,"orcHead");a&&(a.rotation.x=n*-.08+s*-.18+r*.2,a.rotation.y=s*.06,a.rotation.z=0);const c=z(i,"orcBody");c&&(c.rotation.x=r,c.rotation.y=n*-.08+s*.12,c.rotation.z=0),st(z(i,"orcLegL"),o*0+n*.06+s*-.55,0,.03),st(z(i,"orcLegR"),o*0+n*.5+s*.22,0,-.03),st(z(i,"orcShinL"),xe(.1+n*.14+s*.36),0,0),st(z(i,"orcShinR"),xe(.14+n*.48+s*.12),0,0),st(z(i,"orcFootL"),s*-.14,0,0),st(z(i,"orcFootR"),n*.12,0,0),_n(i,Math.abs(r)*.05+s*.03)}function _i(i,t,e,n=1){const s=Math.max(0,Math.min(1,n));if(!e||s<.05){const v=t,U=Math.sin(v*1.15)*.03,T=Math.sin(v*.48)*.02,A=Math.sin(v*.31+1.2)*.012,I=Math.sin(v*.22)*.07+Math.sin(v*.09)*.035;st(z(i,"yetiArmR"),-.2+U*.35+T*.4,.04,.26),st(z(i,"yetiArmL"),-.2-U*.25-T*.4,-.04,-.26),st(z(i,"yetiForearmR"),-.4-U*.15,.05,.04),st(z(i,"yetiForearmL"),-.4+U*.1,-.05,-.04),st(z(i,"yetiLegL"),.04+T*.35,0,.03),st(z(i,"yetiLegR"),.04-T*.35,0,-.03),st(z(i,"yetiShinL"),xe(.1+Math.max(0,T)*.08),0,0),st(z(i,"yetiShinR"),xe(.1+Math.max(0,-T)*.08),0,0),st(z(i,"yetiFootL"),-.04,0,0),st(z(i,"yetiFootR"),-.04,0,0);const M=z(i,"yetiHead");M&&(M.rotation.x=-.14+U*.35,M.rotation.y=I,M.rotation.z=A*.4);const x=z(i,"yetiBody");x&&(x.rotation.x=.2+U*.12,x.rotation.y=T*.35,x.rotation.z=T*.2),_n(i,Math.abs(U)*.35);return}const o=Math.sin(t),r=Math.sin(t+Math.PI),a=Math.max(0,-Math.cos(t)),c=Math.max(0,-Math.cos(t+Math.PI)),l=Math.max(0,Math.cos(t)),h=Math.max(0,Math.cos(t+Math.PI)),u=Math.max(0,o)*a,f=Math.max(0,r)*c,p=Math.max(0,-o)*(1-l),g=Math.max(0,-r)*(1-h),_=Math.cos(t*2),m=.58*s,d=Math.max(0,-_)*.045*s;st(z(i,"yetiLegL"),o*m-a*.28,0,.04),st(z(i,"yetiLegR"),r*m-c*.28,0,-.04),st(z(i,"yetiShinL"),xe(.14+a*.72+u*.35+p*.16+l*.12),0,0),st(z(i,"yetiShinR"),xe(.14+c*.72+f*.35+g*.16+h*.12),0,0),st(z(i,"yetiFootL"),-a*.22+l*Math.max(0,o)*.2,0,0),st(z(i,"yetiFootR"),-c*.22+h*Math.max(0,r)*.2,0,0),st(z(i,"yetiArmL"),-.2-o*.55*s,.05,-.26),st(z(i,"yetiArmR"),-.2-r*.55*s,-.05,.26),st(z(i,"yetiForearmL"),-.38-Math.max(0,o)*.45,.06,-.04),st(z(i,"yetiForearmR"),-.38-Math.max(0,r)*.45,-.06,.04);const S=z(i,"yetiBody");S&&(S.rotation.x=.22+d*.8,S.rotation.y=-o*.07*s,S.rotation.z=o*.035*s);const w=z(i,"yetiHead");w&&(w.rotation.x=-.16-d*.6,w.rotation.y=o*.045*s,w.rotation.z=-o*.02*s),_n(i,d)}function Zi(i,t,e,n=1){const s=Math.max(0,Math.min(1,n)),o=z(i,"orcSpear");if(!e||s<.05){const T=t,A=Math.sin(T*1.45)*.02,I=Math.sin(T*.62)*.016,M=Math.sin(T*.27)*.06+Math.sin(T*.11)*.03;st(z(i,"orcArmL"),.04+A*.5,.04,-.16),st(z(i,"orcArmR"),-.2+A*.25,.05,.16),st(z(i,"orcForearmL"),-.28+A*.12,.04,-.04),st(z(i,"orcForearmR"),-.32-A*.08,-.04,.04),zo(o),st(z(i,"orcLegL"),I*.25,0,.02),st(z(i,"orcLegR"),-I*.25,0,-.02),st(z(i,"orcShinL"),xe(.08+Math.max(0,I)*.06),0,0),st(z(i,"orcShinR"),xe(.08+Math.max(0,-I)*.06),0,0),st(z(i,"orcFootL"),-.03,0,0),st(z(i,"orcFootR"),-.03,0,0);const x=z(i,"orcBody");x&&(x.rotation.x=.04+A*.15,x.rotation.y=I*.3,x.rotation.z=I*.15);const C=z(i,"orcHead");C&&(C.rotation.x=A*.35,C.rotation.y=M,C.rotation.z=0),_n(i,Math.abs(A)*.4);return}const r=Math.sin(t),a=Math.sin(t+Math.PI),c=Math.max(0,-Math.cos(t)),l=Math.max(0,-Math.cos(t+Math.PI)),h=Math.max(0,Math.cos(t)),u=Math.max(0,Math.cos(t+Math.PI)),f=Math.max(0,r)*c,p=Math.max(0,a)*l,g=Math.max(0,-r)*(1-h),_=Math.max(0,-a)*(1-u),m=Math.cos(t*2),d=.48*s,S=Math.max(0,-m)*.032*s;st(z(i,"orcLegL"),r*d-c*.38,0,.03),st(z(i,"orcLegR"),a*d-l*.38,0,-.03),st(z(i,"orcShinL"),xe(.1+c*.85+f*.32+g*.14+h*.1),0,0),st(z(i,"orcShinR"),xe(.1+l*.85+p*.32+_*.14+u*.1),0,0),st(z(i,"orcFootL"),-c*.28+h*Math.max(0,r)*.22,0,0),st(z(i,"orcFootR"),-l*.28+u*Math.max(0,a)*.22,0,0),st(z(i,"orcArmL"),-r*.62*s+.06,.04,-.15),st(z(i,"orcForearmL"),-.28-Math.max(0,r)*.4,.05,-.03);const w=Math.max(0,a)*.12*s;st(z(i,"orcArmR"),-.22-w*.35,.06,.15),st(z(i,"orcForearmR"),-.32-w*.25,-.04,.04),zo(o,{rx:-a*.03*s,y:S*.4});const v=z(i,"orcBody");v&&(v.rotation.x=.08*s+S*.7,v.rotation.y=-r*.08*s,v.rotation.z=r*.03*s);const U=z(i,"orcHead");U&&(U.rotation.x=-.05-S*.4,U.rotation.y=r*.04*s,U.rotation.z=0),_n(i,S)}function M_(i,t,e){const n=Math.max(0,Math.min(1,e)),s=Bn(Math.min(1,n/.55)),o=Ci(Math.max(0,(n-.35)/.65));if(t==="yeti"){i.rotation.z=s*1.25,i.rotation.x=s*.42+o*.15,i.position.y=-s*.45-o*.12,i.scale.setScalar(1.15*(1-o*.12));const r=z(i,"yetiArmR"),a=z(i,"yetiArmL");r&&(r.rotation.x=o*.8),a&&(a.rotation.x=-o*.5),st(z(i,"yetiForearmR"),-.38-o*.4,0,0),st(z(i,"yetiForearmL"),-.38+o*.25,0,0),st(z(i,"yetiShinL"),xe(o*.55),0,0),st(z(i,"yetiShinR"),xe(o*.4),0,0);const c=z(i,"yetiHead");c&&(c.rotation.x=-.15+o*.6)}else if(t==="orc"){i.rotation.x=s*1.45,i.rotation.z=o*.25,i.position.y=-s*.18-o*.08,i.scale.setScalar(1-o*.22);const r=z(i,"orcArmR"),a=z(i,"orcArmL");r&&(r.rotation.x=-o*.9),a&&(a.rotation.x=o*.6),st(z(i,"orcForearmR"),-.28-o*.35,0,0),st(z(i,"orcForearmL"),-.28+o*.2,0,0),st(z(i,"orcShinL"),xe(o*.45),0,0),st(z(i,"orcShinR"),xe(o*.3),0,0);const c=z(i,"orcSpear");c&&zo(c,{rx:o*.5,y:-o*.12})}else i.rotation.z=s*.7,i.rotation.x=o*.2,i.position.y=-s*.25-o*.05}const y_=.44,Zl=.56,w_=.48,S_=.62,E_=.45,T_=.58,ko=.78,Ho=1.05,Go=.82,b_=.36,A_=.42,R_=.4;class C_{renderer;scene;camera;hero;pivot;clock=new Xh;running=!1;raf=0;canvas;constructor(t){this.canvas=t,this.renderer=new sc({canvas:t,antialias:!0,alpha:!0}),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.renderer.outputColorSpace=Ne,this.renderer.toneMapping=Wo,this.renderer.toneMappingExposure=1.38,this.renderer.setClearColor(0,0),this.renderer.shadowMap.enabled=!0,this.scene=new Us,this.scene.add(new zs(15923199,4872754,1.05));const e=new Tn(16774880,1.9);e.position.set(2.4,4.2,3.2),e.castShadow=!0,this.scene.add(e);const n=new Tn(13163775,.45);n.position.set(-3,1.6,-2.4),this.scene.add(n),this.camera=new Ge(32,1,.1,20);const s=new D(0,1,0);this.camera.position.setFromSpherical(new Yh(3.4,1.22,.55)).add(s),this.camera.lookAt(s),this.pivot=new It,this.hero=dc(),this.pivot.add(this.hero),this.scene.add(this.pivot);const o=new b(new vn(.55,32),new pe({color:0,transparent:!0,opacity:.28}));o.rotation.x=-Math.PI/2,o.position.y=.01,this.scene.add(o),this.resize()}setEnvironment(t){this.scene.environment=t}syncEquipment(t){Fe(this.hero,t.equipped.weapon?"sword":null)}showSlot(t,e){t==="weapon"&&e.equipped.weapon?Fe(this.hero,"sword"):t==="hatchet"&&e.equipped.hatchet?Fe(this.hero,"hatchet"):t==="pickaxe"&&e.equipped.pickaxe?Fe(this.hero,"pickaxe"):this.syncEquipment(e)}start(){if(this.running)return;this.running=!0,this.clock.getDelta(),this.resize();const t=()=>{if(!this.running)return;this.raf=requestAnimationFrame(t);const e=Math.min(.05,this.clock.getDelta());this.pivot.rotation.y+=e*.18,yi(this.hero,this.clock.elapsedTime),this.renderer.render(this.scene,this.camera)};t()}stop(){this.running=!1,cancelAnimationFrame(this.raf)}resize(){const t=Math.max(120,this.canvas.clientWidth||220),e=Math.max(160,this.canvas.clientHeight||280);this.renderer.setSize(t,e,!1),this.camera.aspect=t/e,this.camera.updateProjectionMatrix()}}function Ye(i,t={}){return new ye({color:i,roughness:t.roughness??.78,metalness:t.metalness??.08,...t})}function sn(i,t){return t.castShadow=!0,i.add(t),t}function P_(i){return i==="bronze_sword"?Jh():i==="bronze_hatchet"?Zh():i==="bronze_pickaxe"?Kh():i==="whisper_logs"?L_():i==="copper_ore"?Kl(12088115,9062940):i==="tin_ore"?Kl(13160660,9081494):i==="camp_rations"?I_():i==="yeti_fur"?D_():i==="frost_claw"?U_():i==="orc_tooth"?N_():i==="scout_leather"?F_():O_()}function L_(){const i=new It,t=Ye(6964260,{roughness:.92}),e=Ye(12886122,{roughness:.7});for(let n=0;n<3;n++){const s=new It,o=new b(new Qt(.055,.06,.42,8),t);o.rotation.z=Math.PI/2,sn(s,o);for(const r of[-.21,.21]){const a=new b(new vn(.056,8),e);a.rotation.y=Math.PI/2,a.position.x=r,s.add(a)}s.position.set(0,(n-1)*.07,(n-1)*.04),s.rotation.z=(n-1)*.18,i.add(s)}return i}function Kl(i,t){const e=new It,n=Ye(t,{roughness:.95}),s=Ye(i,{roughness:.45,metalness:.55}),o=new b(new nn(.16,0),n);o.scale.set(1.15,.9,1.05),sn(e,o);for(let r=0;r<4;r++){const a=r/4*Math.PI*2,c=new b(new nn(.055,0),r%2?s:n);c.position.set(Math.cos(a)*.12,r%2*.06-.02,Math.sin(a)*.1),c.rotation.set(a,r,.3),sn(e,c)}return e}function I_(){const i=new It,t=Ye(9069112,{roughness:.88}),e=Ye(9054754,{roughness:.7}),n=new b(new Yt(.22,.1,.16),t);sn(i,n);const s=new b(new Xe(.09,.01,6,12),Ye(3810324,{roughness:.9}));s.rotation.x=Math.PI/2,i.add(s);const o=new b(new Yt(.16,.03,.05),e);return o.position.y=.06,sn(i,o),i}function D_(){const i=new It,t=Ye(15266038,{roughness:.97}),e=Ye(12110038,{roughness:.97}),n=new b(new rt(.14,10,8),t);n.scale.set(1.3,.45,1.1),sn(i,n);for(let s=0;s<7;s++){const o=s/7*Math.PI*2,r=new b(new nn(.055,0),s%2?e:t);r.position.set(Math.cos(o)*.1,.04,Math.sin(o)*.08),r.scale.set(1.4,.55,1),r.rotation.y=o,sn(i,r)}return i}function U_(){const i=new It,t=Ye(1909291,{roughness:.32,metalness:.4}),e=new b(new De(.045,.28,7),t);e.rotation.x=.55,sn(i,e);const n=new b(new rt(.05,8,6),Ye(3817544,{roughness:.8}));return n.position.y=-.1,sn(i,n),i}function N_(){const i=new It,t=new b(new De(.04,.26,7),Ye(15920084,{roughness:.4}));return t.rotation.z=.25,t.rotation.x=-.15,sn(i,t),i}function F_(){const i=new It,t=Ye(7030054,{roughness:.86}),e=Ye(4073492,{roughness:.9}),n=new b(new Yt(.22,.04,.16),t);n.rotation.z=.12,sn(i,n);const s=new b(new Yt(.14,.03,.12),e);return s.position.set(.02,.03,.01),s.rotation.z=-.2,sn(i,s),i}function O_(){const i=new It;return sn(i,new b(new Yt(.16,.16,.16),Ye(6710886))),i}const ti=128,Jl=new Map;let Mn=null,wi=null,vi=null;function z_(){if(Mn)return;Mn=new sc({antialias:!0,alpha:!0,preserveDrawingBuffer:!0}),Mn.setPixelRatio(1),Mn.setSize(ti,ti,!1),Mn.outputColorSpace=Ne,Mn.toneMapping=Wo,Mn.toneMappingExposure=1.35,Mn.setClearColor(0,0),wi=new Us,wi.add(new zs(16054271,4864552,1.05));const i=new Tn(16774364,1.8);i.position.set(2.2,3.4,2.6),wi.add(i);const t=new Tn(13163775,.55);t.position.set(-2.4,1.2,-1.6),wi.add(t),vi=new Ge(32,1,.02,20)}function B_(i){const t=new kn().setFromObject(i),e=t.getSize(new D),n=t.getCenter(new D);i.position.sub(n);const s=Math.max(e.x,e.y,e.z,.08);vi.position.set(s*1.15,s*.55,s*1.7),vi.near=s*.05,vi.far=s*8,vi.updateProjectionMatrix(),vi.lookAt(0,0,0)}function k_(i){const t=Jl.get(i);if(t)return t;z_();const e=P_(i);i==="bronze_sword"&&e.rotation.set(0,.6,-.55),i==="bronze_hatchet"&&e.rotation.set(.2,.8,-.3),i==="bronze_pickaxe"&&e.rotation.set(.15,.7,-.25),wi.add(e),B_(e),Mn.render(wi,vi);const n=document.createElement("canvas");return n.width=ti,n.height=ti,n.getContext("2d").drawImage(Mn.domElement,0,0),wi.remove(e),e.traverse(s=>{const o=s;o.geometry&&o.geometry.dispose()}),Jl.set(i,n),n}function jl(i,t){const e=k_(t);i.width=ti,i.height=ti;const n=i.getContext("2d");n&&(n.clearRect(0,0,ti,ti),n.drawImage(e,0,0))}class H_{chatLog;invGrid;invCount;skillsList;skillsPanel;progressWrap;progressFill;progressLabel;targetInfo;targetName;targetHp;hpText;prayText;stamText;hpRing;prayRing;stamRing;minimap;minimapCtx;touchHint;inventory;btnInventory;gearPanel;btnGear;gearInspect;heroPane;narrowMq;desktopInvInited=!1;circum=2*Math.PI*28;onAction=null;onInventoryClick=null;onGearSlotClick=null;constructor(){this.chatLog=ce("chat-log"),this.invGrid=ce("inv-grid"),this.invCount=ce("inv-count"),this.skillsList=ce("skills-list"),this.skillsPanel=ce("skills-panel"),this.progressWrap=ce("progress-wrap"),this.progressFill=ce("progress-fill"),this.progressLabel=ce("progress-label"),this.targetInfo=ce("target-info"),this.targetName=ce("target-name"),this.targetHp=ce("target-hp"),this.hpText=ce("hp-text"),this.prayText=ce("pray-text"),this.stamText=ce("stam-text"),this.hpRing=ce("hp-ring"),this.prayRing=ce("pray-ring"),this.stamRing=ce("stam-ring"),this.minimap=ce("minimap"),this.minimapCtx=this.minimap.getContext("2d"),this.touchHint=ce("touch-hint"),this.inventory=ce("inventory"),this.btnInventory=ce("btn-inventory"),this.gearPanel=ce("gear-panel"),this.btnGear=ce("btn-gear"),this.gearInspect=ce("gear-inspect"),this.heroPane=new C_(ce("gear-hero")),this.narrowMq=window.matchMedia("(max-width: 480px)"),this.btnGear.addEventListener("click",()=>this.setGearOpen(this.gearPanel.hidden)),ce("gear-close").addEventListener("click",()=>this.setGearOpen(!1)),this.gearPanel.querySelectorAll(".gear-slot").forEach(e=>{e.addEventListener("click",()=>{const n=e.dataset.slot;n&&this.onGearSlotClick?.(n)})}),ce("btn-skills").addEventListener("click",()=>{this.skillsPanel.hidden=!this.skillsPanel.hidden}),ce("skills-close").addEventListener("click",()=>{this.skillsPanel.hidden=!0}),this.btnInventory.addEventListener("click",()=>{this.setInventoryOpen(this.inventory.hidden)}),ce("inv-close").addEventListener("click",()=>{this.setInventoryOpen(!1)});const t=()=>this.syncInventoryForViewport();typeof this.narrowMq.addEventListener=="function"?this.narrowMq.addEventListener("change",t):this.narrowMq.addListener(t),this.syncInventoryForViewport(),document.querySelectorAll(".ab-slot").forEach(e=>{e.addEventListener("click",()=>{const n=e.dataset.action;n&&this.onAction?.(n),e.classList.add("active"),setTimeout(()=>e.classList.remove("active"),120)})}),setTimeout(()=>this.touchHint.classList.add("fade"),8e3)}syncInventoryForViewport(){this.narrowMq.matches?(this.desktopInvInited=!1,this.setInventoryOpen(!1)):this.desktopInvInited||(this.desktopInvInited=!0,this.setInventoryOpen(!0))}setGearOpen(t){this.gearPanel.hidden=!t,this.btnGear.setAttribute("aria-expanded",t?"true":"false"),t?(this.heroPane.resize(),this.heroPane.start()):this.heroPane.stop()}isGearOpen(){return!this.gearPanel.hidden}setEnvironment(t){this.heroPane.setEnvironment(t)}setEquipment(t,e){this.heroPane.syncEquipment(t);for(const{id:n,label:s}of i_){const o=this.gearPanel.querySelector(`.gear-slot[data-slot="${n}"]`);if(!o)continue;const r=t.equipped[n],a=o.querySelector("canvas.item-icon"),c=o.querySelector(".gear-empty");if(o.classList.toggle("filled",!!r),r&&a){jl(a,r),a.hidden=!1,c&&(c.hidden=!0);const l=jn[r];o.title=`${s}: ${l?.name??r} (click to unequip)`}else a&&(a.hidden=!0),c&&(c.hidden=!1),o.title=`${s}: empty`}e&&(this.gearInspect.textContent=e)}inspectGear(t){this.gearInspect.textContent=t}showSlotPreview(t,e){this.heroPane.showSlot(t,e)}setInventoryOpen(t){this.inventory.hidden=!t,this.btnInventory.setAttribute("aria-expanded",t?"true":"false"),this.narrowMq.matches||(this.btnInventory.style.display=t?"none":"flex")}chat(t,e="system"){const n=document.createElement("div");for(n.className=`chat-line ${e==="plain"?"":e}`.trim(),n.textContent=t,this.chatLog.appendChild(n);this.chatLog.children.length>40;)this.chatLog.removeChild(this.chatLog.firstChild);this.chatLog.scrollTop=this.chatLog.scrollHeight}setOrbs(t,e,n,s){this.hpText.textContent=String(Math.round(t)),this.prayText.textContent=String(Math.round(n)),this.stamText.textContent=String(Math.round(s)),this.setRing(this.hpRing,t/e),this.setRing(this.prayRing,n/100),this.setRing(this.stamRing,s/100)}setRing(t,e){const n=Math.max(0,Math.min(1,e));t.style.strokeDasharray=String(this.circum),t.style.strokeDashoffset=String(this.circum*(1-n))}setInventory(t){this.invGrid.innerHTML="";const e=28;for(let n=0;n<e;n++){const s=document.createElement("div");s.className="inv-slot";const o=t[n];if(o){s.classList.add("has-item");const r=jn[o.id],a=document.createElement("canvas");if(a.className="item-icon",a.width=128,a.height=128,jl(a,o.id),s.appendChild(a),s.title=`${r?.name??o.id}${o.qty>1?` ×${o.qty}`:""}${r?.slot?" — click to equip":o.id==="camp_rations"?" — click to eat":""}`,o.qty>1){const l=document.createElement("span");l.className="inv-qty",l.textContent=String(o.qty),s.appendChild(l)}const c=n;s.addEventListener("click",()=>this.onInventoryClick?.(c))}this.invGrid.appendChild(s)}this.invCount.textContent=`${t.length}/${e}`}setSkills(t){this.skillsList.innerHTML="",Object.keys(Bl).forEach(e=>{const n=t.skills[e],s=Bl[e],o=document.createElement("div");o.className="skill-row";const r=No(n.level+1),a=No(n.level),c=n.level>=99?100:(n.xp-a)/(r-a)*100;o.innerHTML=`
        <div class="skill-icon">${s.icon}</div>
        <div class="skill-meta">
          <div class="skill-name">${s.name}</div>
          <div class="skill-xp"><div style="width:${c}%"></div></div>
        </div>
        <div class="skill-lvl">${n.level}</div>
      `,this.skillsList.appendChild(o)})}showProgress(t,e){this.progressWrap.hidden=!1,this.progressLabel.textContent=t,this.progressFill.style.width=`${Math.max(0,Math.min(100,e*100))}%`}hideProgress(){this.progressWrap.hidden=!0,this.progressFill.style.width="0%"}showTarget(t,e){this.targetInfo.hidden=!1,this.targetName.textContent=t,this.targetHp.style.width=`${Math.max(0,Math.min(100,e*100))}%`}hideTarget(){this.targetInfo.hidden=!0}drawMinimap(t,e,n,s){const o=this.minimapCtx,r=this.minimap.width,a=this.minimap.height,c=r/2,l=a/2,h=Math.min(r,a)/2-1;o.clearRect(0,0,r,a),o.save(),o.beginPath(),o.arc(c,l,h,0,Math.PI*2),o.clip();const u=o.createRadialGradient(c,l,4,c,l,h);u.addColorStop(0,"#4a7a30"),u.addColorStop(.65,"#2c4e20"),u.addColorStop(1,"#1a3014"),o.fillStyle=u,o.fillRect(0,0,r,a);for(let p=0;p<36;p++)o.fillStyle=p%2?"#3a6828":"#2e5420",o.fillRect(p*41%r,p*59%a,7,7);const f=3.2;for(const p of s){const g=c+(p.x-t)*f,_=l+(p.z-e)*f,m=g-c,d=_-l;m*m+d*d>(h-4)*(h-4)||(o.fillStyle=p.color,o.beginPath(),o.arc(g,_,3,0,Math.PI*2),o.fill())}o.save(),o.translate(c,l),o.rotate(n),o.fillStyle="#f0d070",o.beginPath(),o.moveTo(0,-6),o.lineTo(4,5),o.lineTo(0,2),o.lineTo(-4,5),o.closePath(),o.fill(),o.restore(),o.restore(),o.beginPath(),o.arc(c,l,h-.5,0,Math.PI*2),o.strokeStyle="#8a6a28",o.lineWidth=3,o.stroke(),o.beginPath(),o.arc(c,l,h-3,0,Math.PI*2),o.strokeStyle="rgba(212,168,75,0.35)",o.lineWidth=1.5,o.stroke(),o.fillStyle="#e8c060",o.beginPath(),o.moveTo(c,6),o.lineTo(c+5,14),o.lineTo(c-5,14),o.closePath(),o.fill(),o.fillStyle="#f0d070",o.font="bold 11px Segoe UI, system-ui, sans-serif",o.textAlign="center",o.fillText("N",c,26)}}function ce(i){const t=document.getElementById(i);if(!t)throw new Error(`Missing #${i}`);return t}const ou=[];function Ze(i,t){let e=Math.imul(i|0,1597334677)^Math.imul(t|0,3812015801);return e=Math.imul(e^e>>>16,2146121005),e=Math.imul(e^e>>>15,2221713035),((e^e>>>16)>>>0)/4294967296}function Ql(i){return i*i*i*(i*(i*6-15)+10)}function Jo(i,t){const e=Math.floor(i),n=Math.floor(t),s=i-e,o=t-n,r=Ql(s),a=Ql(o),c=Ze(e,n),l=Ze(e+1,n),h=Ze(e,n+1),u=Ze(e+1,n+1);return c+(l-c)*r+(h-c)*a+(c-l-h+u)*r*a}function Qi(i,t,e=5){let n=0,s=.5,o=1,r=0;for(let a=0;a<e;a++)n+=s*Jo(i*o,t*o),r+=s,s*=.5,o*=2.07;return n/r}function G_(i,t){const e=Qi(i*.31+17.2,t*.31-9.4,3),n=Qi(i*.31-8.1,t*.31+5.6,3);return Qi(i*.11+e*1.65,t*.11+n*1.65,5)}function gc(i,t){const e=Math.exp(-((i*.15+.05)**2)*8-(t*.12-.15)**2*3),n=Math.exp(-((i+.5-t*.35)**2)*2.2-(t-1.2)**2*.08),s=Math.exp(-((i+3.2-t*.15)**2)*1.4-(t+2.5)**2*.06);return Math.max(e,n*.85,s*.75)}function _c(i,t){const e=Math.exp(-((i-4.2)**2)*.09-(t-7.2)**2*.08),n=Math.exp(-((i-5.5)**2)*.15-(t-6)**2*.12);return Math.max(e,n*.85)}function V_(i,t){return Math.exp(-((i+2.05)**2+(t+.55)**2)*.11)}function we(i,t){const e=(G_(i,t)-.5)*.38,n=(Qi(i*1.65+41.2,t*1.65-18.7,4)-.5)*.07,s=(Jo(i*7.2+3.1,t*7.2-2.4)-.5)*.022;let o=e+n+s;return o*=1-V_(i,t)*.84,o*=1-gc(i,t)*.38,o+=_c(i,t)*.045,o}function W_(i,t){return Qi(i*2.4+12.7,t*2.4-6.3,4)}function X_(i=48){const e=new fn(i,i,128,128),n=e.attributes.position,s=new Float32Array(n.count*3),o=new Rt(7189564),r=new Rt(9227338),a=new Rt(5149230),c=new Rt(11066466),l=new Rt(4094508),h=new Rt(10123848),u=new Rt(7230512),f=new Rt(15660795),p=new Rt(13163754),g=new Rt;for(let d=0;d<n.count;d++){const S=n.getX(d),v=-n.getY(d);n.setZ(d,we(S,v));const U=gc(S,v),T=_c(S,v),A=W_(S,v),I=Jo(S*1.9+4.2,v*1.9-1.7);T>.24?(g.copy(f).lerp(p,A),g.lerp(o,1-Math.min(1,T*1.7))):U>.28?(g.copy(h).lerp(u,I),g.lerp(o,1-Math.min(1,U*1.4))):A>.72?g.copy(l).lerp(a,I*.45):(g.copy(o).lerp(A>.52?r:a,A*.7+I*.3),g.lerp(c,Math.max(0,I-.55)*.85)),s[d*3]=g.r,s[d*3+1]=g.g,s[d*3+2]=g.b}e.setAttribute("color",new en(s,3)),e.computeVertexNormals();const _=Y_(),m=new b(e,new ye({vertexColors:!0,roughness:.86,metalness:0,flatShading:!1,bumpMap:_,bumpScale:.22}));return m.rotation.x=-Math.PI/2,m.receiveShadow=!0,m.name="ground",m}function Y_(){const t=document.createElement("canvas");t.width=256,t.height=256;const e=t.getContext("2d"),n=e.createImageData(256,256);for(let o=0;o<256;o++)for(let r=0;r<256;r++){const a=Qi(r*.11+2.2,o*.11-1.4,4),c=Jo(r*.55,o*.38),l=Math.floor((a*.62+c*.38)*255),h=(o*256+r)*4;n.data[h]=l,n.data[h+1]=l,n.data[h+2]=l,n.data[h+3]=255}e.putImageData(n,0,0);const s=new ac(t);return s.wrapS=is,s.wrapT=is,s.repeat.set(22,22),s.anisotropy=4,s.colorSpace=wn,s}function q_(){const i=document.createElement("canvas");i.width=32,i.height=64;const t=i.getContext("2d"),e=t.createLinearGradient(16,64,16,0);e.addColorStop(0,"rgba(70, 130, 28, 0)"),e.addColorStop(.1,"rgba(96, 168, 40, 255)"),e.addColorStop(.5,"rgba(168, 220, 64, 255)"),e.addColorStop(1,"rgba(232, 255, 120, 240)"),t.fillStyle=e,t.beginPath(),t.moveTo(16,2),t.quadraticCurveTo(5,36,9,64),t.lineTo(23,64),t.quadraticCurveTo(27,36,16,2),t.fill();const n=new ac(i);return n.colorSpace=Ne,n.anisotropy=4,n}function $_(){const i=[],t=[];for(let s=0;s<5;s++){const o=s/5*Math.PI,r=Math.cos(o),a=Math.sin(o),c=.085+s%3*.02,l=.26+s%4*.07,h=[[-c,0,0],[c,0,0],[c,l,0],[-c,l,0]],u=[0,1,2,0,2,3];for(const f of u){const[p,g]=h[f];i.push(p*r,g,p*a),t.push(f===0||f===3?0:1,g/l)}}const n=new Le;return n.setAttribute("position",new te(i,3)),n.setAttribute("uv",new te(t,2)),n.computeVertexNormals(),n}function Z_(){const i=[],t=[],s=[[-.012,0,0],[.012,0,0],[.012,.16,0],[-.012,.16,0]];for(const a of[0,1,2,0,2,3]){const[c,l,h]=s[a];i.push(c,l,h),t.push(a===0||a===3?.45:.55,l/.16)}const o=.09;for(const a of[0,Math.PI/2]){const c=Math.cos(a),l=Math.sin(a),h=[[-o,.16-.01],[o,.16-.01],[o,.16+.07],[-o,.16+.07]];for(const u of[0,1,2,0,2,3]){const[f,p]=h[u];i.push(f*c,p,f*l),t.push(u===0||u===3?0:1,(p-.16+.01)/.08)}}const r=new Le;return r.setAttribute("position",new te(i,3)),r.setAttribute("uv",new te(t,2)),r.computeVertexNormals(),r}function th(i,t){i.onBeforeCompile=e=>{e.uniforms.uTime={value:0},e.vertexShader=`uniform float uTime;
${e.vertexShader}`,e.vertexShader=e.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
       float hgt = max(transformed.y, 0.0);
       vec3 ip = vec3(instanceMatrix[3][0], instanceMatrix[3][1], instanceMatrix[3][2]);
       float t = uTime * 1.55 + ip.x * 0.82 + ip.z * 0.64;
       transformed.x += sin(t) * ${t.toFixed(3)} * hgt;
       transformed.z += cos(t * 0.88 + 0.35) * ${(t*.55).toFixed(3)} * hgt;`),ou.push(e)}}function kr(i,t,e=.32,n=.22){return!(gc(i,t)>e||_c(i,t)>n||Math.hypot(i+1.2,t+.5)<1.55||Math.hypot(i+3.5,t+1.5)<1.35)}function K_(){const i=new It;i.name="terrainFoliage";const t=new Re,e=new Ur({map:q_(),color:15400856,side:be,alphaTest:.18});th(e,.55);const n=[],s=new Rt(11853914),o=new Rt(6989874),r=new Rt,a=.5;for(let T=-20;T<=20;T+=a)for(let A=-20;A<=20;A+=a){const I=(Ze(Math.floor(T*20+3),Math.floor(A*20+9))-.5)*a*.92,M=(Ze(Math.floor(T*20+11),Math.floor(A*20+2))-.5)*a*.92,x=T+I,C=A+M,k=Ze(Math.floor(x*17+4),Math.floor(C*19+8));if(k<.22||!kr(x,C))continue;const G=.75+k*.7;n.push({x,z:C,h:we(x,C),s:G,r:k*Math.PI*2,c:r.copy(s).lerp(o,Ze(Math.floor(x*8),Math.floor(C*13)))})}const c=new Cr($_(),e,n.length);c.name="instancedGrass",c.castShadow=!1,c.receiveShadow=!0,c.instanceMatrix.setUsage(nd);const l=new Float32Array(n.length*3);n.forEach((T,A)=>{t.position.set(T.x,T.h,T.z),t.rotation.set(0,T.r,0),t.scale.setScalar(T.s),t.updateMatrix(),c.setMatrixAt(A,t.matrix),l[A*3]=T.c.r,l[A*3+1]=T.c.g,l[A*3+2]=T.c.b}),c.instanceColor=new Cs(l,3),c.instanceMatrix.needsUpdate=!0,c.frustumCulled=!1,c.raycast=()=>{},i.add(c);const h=new Ur({color:16777215,side:be});th(h,.35);const u=[16774876,16768060,16738984,13142271,16747058],f=[],p=1.28;for(let T=-19;T<=19;T+=p)for(let A=-19;A<=19;A+=p){const I=(Ze(Math.floor(T*13+21),Math.floor(A*13+5))-.5)*p,M=(Ze(Math.floor(T*13+7),Math.floor(A*13+18))-.5)*p,x=T+I,C=A+M,k=Ze(Math.floor(x*29+1),Math.floor(C*31+6));if(k<.28||!kr(x,C,.26,.18))continue;const G=new Rt(u[Math.floor(k*u.length)%u.length]);f.push({x,z:C,h:we(x,C),s:.85+k*.55,r:k*6.2,c:G})}const g=new Cr(Z_(),h,f.length);g.name="instancedFlowers",g.castShadow=!1;const _=new Float32Array(f.length*3);f.forEach((T,A)=>{t.position.set(T.x,T.h,T.z),t.rotation.set(0,T.r,0),t.scale.setScalar(T.s),t.updateMatrix(),g.setMatrixAt(A,t.matrix),_[A*3]=T.c.r,_[A*3+1]=T.c.g,_[A*3+2]=T.c.b}),g.instanceColor=new Cs(_,3),g.instanceMatrix.needsUpdate=!0,g.frustumCulled=!1,g.raycast=()=>{},i.add(g);const m=new Ur({color:16777215,flatShading:!0}),d=[9079942,7236194,10130568,6054996],S=[],w=1.7;for(let T=-18.5;T<=18.5;T+=w)for(let A=-18.5;A<=18.5;A+=w){const I=(Ze(Math.floor(T*11+40),Math.floor(A*11+3))-.5)*w,M=(Ze(Math.floor(T*11+8),Math.floor(A*11+33))-.5)*w,x=T+I,C=A+M,k=Ze(Math.floor(x*23+2),Math.floor(C*27+9));k<.55||kr(x,C,.2,.16)&&S.push({x,z:C,h:we(x,C),s:.7+k*1.1,rx:k*2.2,ry:k*5.1,c:new Rt(d[Math.floor(k*d.length)%d.length])})}const v=new Cr(new oi(.11,0),m,S.length);v.name="instancedStones",v.castShadow=!0,v.receiveShadow=!0;const U=new Float32Array(S.length*3);return S.forEach((T,A)=>{t.position.set(T.x,T.h+.04*T.s,T.z),t.rotation.set(T.rx,T.ry,T.rx*.4),t.scale.set(T.s*1.15,T.s*.7,T.s*1.05),t.updateMatrix(),v.setMatrixAt(A,t.matrix),U[A*3]=T.c.r,U[A*3+1]=T.c.g,U[A*3+2]=T.c.b}),v.instanceColor=new Cs(U,3),v.instanceMatrix.needsUpdate=!0,v.frustumCulled=!1,v.raycast=()=>{},i.add(v),i}function J_(i){for(const t of ou)t.uniforms.uTime.value=i}const eh=new Map;function _e(i,t={}){const e=`${i}_${t.roughness??.78}_${t.metalness??.08}_${t.flatShading===!1?0:1}_${t.emissive??0}_${t.emissiveIntensity??0}`;let n=eh.get(e);return n||(n=new ye({color:i,roughness:t.roughness??.78,metalness:t.metalness??.08,flatShading:t.flatShading??!0,envMapIntensity:t.envMapIntensity??.85,...t}),eh.set(e,n)),n}function Vo(i,t=1.08,e=659976){const n=new b(i.geometry,new pe({color:e,side:Oe,depthWrite:!1}));n.scale.setScalar(t),n.name="outline",i.add(n)}function ru(i=0){const t=new It;t.name="tree";const e=1.55+i%5*.18,n=i%3===0?4862488:i%3===1?5913114:4074002,s=new b(new Qt(.16,.28,e,8),_e(n,{roughness:.95}));s.position.y=e/2,s.castShadow=!0,s.receiveShadow=!0,t.add(s);for(let h=0;h<3;h++){const u=h/3*Math.PI*2+i*.3,f=new b(new Yt(.05,e*(.55+h%2*.15),.07),_e(2758664,{roughness:1}));f.position.set(Math.cos(u)*.15,e*.45,Math.sin(u)*.15),f.rotation.y=u,t.add(f)}for(let h=0;h<3;h++){const u=new b(new Xe(.18+h*.02,.02,4,10),_e(3021836,{roughness:1}));u.rotation.x=Math.PI/2,u.position.y=.35+h*(e*.28),t.add(u)}const o=i%2===0?3109424:3835448,r=i%3===0?2254376:5016648,a=1856032;for(let h=0;h<5;h++){const u=.9-h*.12,f=h%3===0?o:h%3===1?r:a,p=new b(new De(u,1-h*.1,9),_e(f,{roughness:.88}));if(p.position.y=e+.22+h*.42,p.rotation.y=(i+h)*.45,p.castShadow=!0,t.add(p),h<3){const g=new b(new De(u*.55,.55,7),_e(1325080,{roughness:.95}));g.position.y=e+.35+h*.42,t.add(g)}}const c=new b(new Qt(.34,.44,.2,7),_e(3811344,{roughness:1}));c.position.y=.08,c.receiveShadow=!0,t.add(c);for(let h=0;h<4;h++){const u=h/4*Math.PI*2+i,f=new b(new Yt(.12,.1,.35),_e(3021836));f.position.set(Math.cos(u)*.28,.06,Math.sin(u)*.28),f.rotation.y=u,t.add(f)}const l=new b(new Qt(.55,.55,.2,8),new pe({visible:!1}));return l.position.y=.1,l.name="hit",t.add(l),t}function Ha(i,t=0){const e=new It;e.name="rock";const n=new b(new oi(.55+t%3*.06,0),_e(t%2===0?6185576:5132888,{roughness:.9}));n.position.y=.4,n.rotation.set(.2,t,.1),n.castShadow=!0,n.receiveShadow=!0,e.add(n);const s=new b(new vn(.55,12),new pe({color:0,transparent:!0,opacity:.28,depthWrite:!1}));s.rotation.x=-Math.PI/2,s.position.y=.02,e.add(s);const o=new b(new oi(.28,0),_e(4869714));o.position.set(.35,.22,-.15),o.rotation.set(.4,t*.5,.2),o.castShadow=!0,e.add(o);const r=i==="copper"?12088115:12632264;for(let l=0;l<4;l++){const h=new b(new rt(.1+l%2*.03,6,4),_e(r,{metalness:.55,roughness:.4,emissive:r,emissiveIntensity:.15})),u=l/4*Math.PI*2+t;h.position.set(Math.cos(u)*.32,.42+l%2*.18,Math.sin(u)*.32),e.add(h)}const a=new b(new rt(.14,5,4),_e(3828272,{roughness:1}));a.position.set(-.25,.55,.2),a.scale.set(1.2,.5,1),e.add(a);const c=new b(new rt(.75,8,6),new pe({visible:!1}));return c.position.y=.4,c.name="hit",e.add(c),e}function au(){const i=new It;i.name="dummy";const t=(h,u={})=>new ye({color:h,roughness:u.roughness??.85,metalness:u.metalness??.05,flatShading:!0,...u}),e=new b(new Qt(.08,.1,1.4,6),t(5913114));e.position.y=.7,e.castShadow=!0,i.add(e);const n=new b(new Qt(.28,.32,.7,8),t(9071168));n.position.y=1.15,n.castShadow=!0,n.name="dummyBody",Vo(n,1.06,1708040),i.add(n);const s=new b(new rt(.22,8,6),t(12886112));s.position.y=1.65,s.name="dummyHead",i.add(s);const o=t(4857872),r=new b(new Yt(.35,.06,.04),o);r.position.set(0,1.2,.3),r.rotation.z=.6,i.add(r);const a=r.clone();a.rotation.z=-.6,i.add(a);const c=new b(new Qt(.4,.45,.12,8),t(3811861));c.position.y=.06,c.receiveShadow=!0,i.add(c);const l=new b(new Qt(.45,.45,1.8,8),new pe({visible:!1}));return l.position.y=.9,l.name="hit",i.add(l),i}function j_(i,t=140){const e=[];i.traverse(s=>{s.isMesh&&s.name!=="hit"&&s.name!=="outline"&&e.push(s)});const n=[];for(const s of e){const o=s.material;!o||!o.emissive||(n.push({mesh:s,emissive:o.emissive.clone(),intensity:o.emissiveIntensity??0}),o.emissive.setHex(16772778),o.emissiveIntensity=.85)}setTimeout(()=>{for(const s of n){const o=s.mesh.material;o.emissive.copy(s.emissive),o.emissiveIntensity=s.intensity}},t)}function cu(){const i=new It;for(let s=0;s<8;s++){const o=new b(new oi(.12,0),_e(5921368)),r=s/8*Math.PI*2;o.position.set(Math.cos(r)*.45,.08,Math.sin(r)*.45),o.rotation.set(Math.random(),r,.2),o.castShadow=!0,i.add(o)}for(let s=0;s<5;s++){const o=new b(new Qt(.06,.07,.7,5),_e(4860432));o.rotation.z=Math.PI/2,o.rotation.y=s/5*Math.PI*2,o.position.y=.1,i.add(o)}const t=new b(new De(.2,.55,5),new ye({color:16737826,emissive:16729088,emissiveIntensity:1.4,flatShading:!0,transparent:!0,opacity:.92}));t.position.y=.42,t.name="flame",i.add(t);const e=new b(new rt(.18,8,6),new pe({color:16755268,transparent:!0,opacity:.35,depthWrite:!1}));e.position.y=.28,e.name="flameGlow",i.add(e);const n=new hc(16746564,1.6,14);return n.position.y=.65,n.castShadow=!1,i.add(n),i}function lu(){const i=new It,t=_e(6967344,{roughness:.92,side:be}),e=_e(4864024,{roughness:.94,side:be}),n=new b(new Qt(.035,.035,1.55,6),_e(3811856,{roughness:1}));n.rotation.z=Math.PI/2,n.position.y=1.18,i.add(n);for(const a of[-1,1]){const c=new b(new fn(1.55,1.42),t);c.position.set(a*.52,.62,0),c.rotation.y=a*-.72,c.castShadow=!0,c.receiveShadow=!0,i.add(c);const l=new b(new fn(1.5,1.36),e);l.position.set(a*.5,.62,0),l.rotation.y=a*-.72+Math.PI,i.add(l)}const s=new b(new fn(1.05,1.05),e);s.position.set(0,.52,-.72),s.castShadow=!0,i.add(s);const o=new b(new fn(.42,.85),e);o.position.set(-.18,.42,.7),o.rotation.y=.35,i.add(o);const r=new b(new fn(.42,.85),t);r.position.set(.22,.42,.68),r.rotation.y=-.55,i.add(r);for(const[a,c]of[[-.9,-.9],[.9,-.9],[-.9,.9],[.9,.9]]){const l=new b(new Qt(.03,.03,.25,4),_e(3811856));l.position.set(a*.85,.12,c*.85),i.add(l)}return i}function Ga(){const i=new It,t=new b(new Yt(.55,.4,.45),_e(6965800));t.position.y=.2,t.castShadow=!0,t.receiveShadow=!0,i.add(t);const e=new b(new Yt(.58,.06,.48),_e(5913114));return e.position.y=.43,i.add(e),i}function Po(){const i=new It,t=new b(new Qt(.28,.3,.55,10),_e(5913114));t.position.y=.28,t.castShadow=!0,i.add(t);const e=new b(new Xe(.29,.025,6,12),_e(9079434,{metalness:.5}));return e.rotation.x=Math.PI/2,e.position.y=.35,i.add(e),i}function Va(){const i=new It,t=new b(new Qt(.14,.14,.7,8),_e(3820138));return t.rotation.z=Math.PI/2,t.position.y=.12,t.castShadow=!0,i.add(t),i}function Q_(i=60){const t=new rt(i,24,12),e=new Float32Array(t.attributes.position.count*3),n=t.attributes.position,s=new Rt(4888288),o=new Rt(9354472),r=new Rt(15914660),a=new Rt;for(let l=0;l<n.count;l++){const h=n.getY(l)/i,u=Math.max(0,Math.min(1,(h+.15)/1));u<.45?a.copy(r).lerp(o,u/.45):a.copy(o).lerp(s,(u-.45)/.55),e[l*3]=a.r,e[l*3+1]=a.g,e[l*3+2]=a.b}t.setAttribute("color",new en(e,3));const c=new b(t,new pe({vertexColors:!0,side:Oe,depthWrite:!1,fog:!1}));return c.name="sky",c}function hu(){const i=new It;i.name="yeti";const t=(ut,F={})=>new ye({color:ut,roughness:F.roughness??.92,metalness:F.metalness??.02,flatShading:!1,...F}),e=t(15003126,{roughness:.94}),n=t(12242914,{roughness:.9}),s=t(13359848,{roughness:.96}),o=t(9677503,{roughness:.97}),r=t(4871782,{roughness:.88}),a=t(3292234,{roughness:.9}),c=t(1909291,{roughness:.3,metalness:.4}),l=t(2236458,{roughness:.5}),h=t(6038576,{roughness:.85}),u=t(15920084,{roughness:.4}),f=(ut,F,Q,ft,ot,mt,Mt,Et=.5,Wt=e,j=s)=>{for(let nt=0;nt<mt;nt++){const P=nt/mt*Math.PI*2+ot*9,At=Mt*(.82+nt%3*.12),W=new b(new nn(At,0),nt%2?j:Wt);W.position.set(F+Math.cos(P)*ot*.8,Q-At*.45,ft+Math.sin(P)*ot*.8),W.rotation.set(Et*(.8+nt%3*.2),Math.PI/2-P,nt%4*.16),W.scale.set(1.7,.55,.95),W.castShadow=!0,ut.add(W)}},p=t(12118271,{roughness:.22,metalness:.35,emissive:4892872,emissiveIntensity:.18}),g=(ut,F,Q,ft,ot,mt)=>{const Mt=new b(new De(mt,ot,6),c);Mt.rotation.x=Math.PI/2+.45,Mt.position.set(F,Q,ft),Mt.castShadow=!0,ut.add(Mt);const Et=new b(new De(mt*.55,ot*.42,5),p);Et.rotation.x=Math.PI/2+.45,Et.position.set(F,Q-.01,ft+ot*.38),ut.add(Et)},_=(ut,F,Q,ft,ot,mt=.2,Mt=.15)=>{const Et=new b(new On(ot,0),p);Et.position.set(F,Q,ft),Et.rotation.set(mt,.4,Mt),Et.scale.set(.55,1.6,.45),Et.castShadow=!0,ut.add(Et)},m=new b(new vn(.85,20),new pe({color:0,transparent:!0,opacity:.42,depthWrite:!1}));m.name="contactShadow",m.rotation.x=-Math.PI/2,m.position.y=.03,i.add(m);const d=ut=>{const F=new It;F.name=ut<0?"yetiLegL":"yetiLegR",F.position.set(ut*.34,.94,.02);const Q=new b(new rt(.2,12,10),e);Q.position.set(0,-.02,.02),Q.castShadow=!0,F.add(Q);const ft=new b(new rt(.18,12,10),s);ft.scale.set(1.05,.85,.95),ft.position.set(ut*-.02,.02,-.08),F.add(ft);const ot=new b(new rt(.16,12,10),e);ot.scale.set(1.15,1.35,.85),ot.position.set(0,-.2,.1),F.add(ot);const mt=new b(new ee(.2,.28,6,12),e);mt.position.set(0,-.22,.04),mt.castShadow=!0,F.add(mt),f(F,0,-.12,.04,.22,12,.065,.45);const Mt=new It;Mt.name=ut<0?"yetiShinL":"yetiShinR",Mt.position.set(0,-.46,.06);const Et=new b(new rt(.16,12,10),e);Et.castShadow=!0,Mt.add(Et);const Wt=new b(new ee(.16,.22,6,12),n);Wt.position.set(0,-.18,.02),Wt.castShadow=!0,Mt.add(Wt),f(Mt,0,-.16,.02,.175,11,.055,.4,s,o);const j=new It;j.name=ut<0?"yetiFootL":"yetiFootR",j.position.set(0,-.38,.06);const nt=new b(new rt(.18,12,10),e);nt.scale.set(.95,.42,1.3),nt.position.set(0,-.02,.1),nt.castShadow=!0,j.add(nt);const P=new b(new rt(.12,10,8),a);P.position.set(0,-.055,.12),P.scale.set(.9,.22,1.05),j.add(P);for(let At=0;At<4;At++){const W=(At-1.5)*.078,et=new b(new rt(.052,8,6),e);et.position.set(W,-.02,.24),et.scale.set(1,.75,1.25),j.add(et),g(j,W,-.02,.32,.12,.026)}return Mt.add(j),F.add(Mt),F},S=d(-1);S.name="yetiLegL",i.add(S);const w=d(1);w.name="yetiLegR",i.add(w);const v=new b(new ee(.55,.55,6,12),e);v.position.set(0,1.35,-.08),v.scale.set(1.15,1,.95),v.rotation.x=.2,v.castShadow=!0,v.name="yetiBody",Vo(v,1.06,660768),i.add(v),f(i,0,1.14,-.04,.68,24,.095,.5),f(i,0,1.74,-.1,.66,22,.09,.7,s,o);const U=new b(new rt(.38,12,10),n);U.position.set(0,1.15,.28),U.scale.set(1.1,1,.55),i.add(U);for(const ut of[-1,1]){const F=new b(new rt(.22,14,12),e);F.scale.set(1.15,.85,.7),F.position.set(ut*.22,1.52,.32),F.castShadow=!0,i.add(F);const Q=new b(new rt(.2,12,10),s);Q.scale.set(1.1,1.2,.7),Q.position.set(ut*.42,1.42,-.12),i.add(Q)}const T=new b(new ee(.045,.34,4,8),t(3820120,{roughness:.96}));T.position.set(0,1.48,.4),i.add(T);for(const ut of[-1,1]){const F=new b(new ee(.04,.22,4,8),t(3820120,{roughness:.96}));F.position.set(ut*.18,1.22,.4),F.rotation.z=ut*.35,i.add(F)}_(i,-.52,1.88,-.18,.14,.4,.35),_(i,.52,1.88,-.18,.14,.4,-.35),_(i,0,1.98,-.32,.16,.15,0),_(i,-.28,1.7,-.38,.11,.5,.2),_(i,.28,1.7,-.38,.11,.5,-.2);const A=(ut,F,Q,ft,ot,mt=e)=>{const Mt=new b(new ee(.08*ot,.22*ot,5,10),mt);Mt.position.set(F,Q,ft),Mt.rotation.x=-.45,Mt.rotation.z=(F>0?1:F<0?-1:0)*.12*ot,Mt.castShadow=!0,ut.add(Mt);for(let Et=0;Et<3;Et++){const Wt=Et/3*Math.PI*2+ot,j=new b(new ee(.028*ot,.16*ot,4,8),Et%2===0?s:mt);j.position.set(F+Math.cos(Wt)*.05*ot,Q+.03*ot,ft+Math.sin(Wt)*.04*ot),j.rotation.x=-.55,j.rotation.z=(F>0?1:-1)*.14,j.castShadow=!0,ut.add(j)}};for(const ut of[-1,1]){const F=new b(new rt(.24,12,10),e);F.position.set(ut*.52,.38,.02),F.scale.set(1.15,.85,1.05),v.add(F)}A(v,-.42,.42,-.12,1.05),A(v,.42,.42,-.12,1.05),A(v,0,.52,-.28,1,s),A(v,-.28,.48,.12,.75,n),A(v,.28,.48,.12,.75,n);const I=ut=>{const F=new It;F.name=ut<0?"yetiArmL":"yetiArmR",F.position.set(ut*.68,1.72,.08),F.rotation.z=ut*.28,F.rotation.x=-.22;const Q=new b(new ee(.2,.48,6,12),e);Q.position.set(0,-.22,0),Q.castShadow=!0,F.add(Q),f(F,0,-.02,0,.215,13,.072,.6),f(F,0,-.48,0,.205,12,.062,.45,s,o);const ft=new It;ft.name=ut<0?"yetiForearmL":"yetiForearmR",ft.position.set(0,-.56,0),ft.rotation.x=-.38;const ot=new b(new ee(.16,.38,6,12),n);ot.position.set(0,-.2,0),ot.castShadow=!0,ft.add(ot),f(ft,0,-.3,0,.175,12,.055,.4,s,o);const mt=new It;mt.position.set(0,-.48,.05);const Mt=new b(new rt(.17,10,8),e);Mt.scale.set(1,.85,.95),Mt.castShadow=!0,mt.add(Mt);const Et=new b(new rt(.11,10,8),a);Et.position.set(0,-.02,.1),Et.scale.set(1,.95,.35),mt.add(Et);for(let j=0;j<4;j++){const nt=(j-1.5)*.075,P=new b(new rt(.05,8,6),e);P.position.set(nt,-.05,.14),P.scale.set(1,.9,1.2),mt.add(P),g(mt,nt,-.06,.22,.16,.028)}const Wt=new b(new rt(.055,8,6),e);Wt.position.set(ut*.13,-.01,.06),mt.add(Wt),g(mt,ut*.17,-.02,.12,.1,.024);for(let j=0;j<4;j++){const nt=new b(new nn(.034,0),j%2?s:e);nt.position.set((j-1.5)*.07,.04,.1),nt.scale.set(1.3,.55,.9),mt.add(nt)}return ft.add(mt),F.add(ft),F};i.add(I(-1)),i.add(I(1));const M=new It;M.name="yetiHead",M.position.set(0,2.15,.15),M.rotation.x=-.15;const x=new b(new rt(.38,14,12),e);x.scale.set(1.05,.95,1.1),x.castShadow=!0,Vo(x,1.08,660768),M.add(x),A(M,0,.28,-.18,.85,s),A(M,-.22,.22,-.08,.7),A(M,.22,.22,-.08,.7);const C=new b(new rt(.34,16,14),r);C.scale.set(.84,.74,.76),C.position.set(0,-.08,.18),M.add(C);const k=new b(new rt(.27,16,12),a);k.scale.set(.96,.34,.6),k.position.set(0,.125,.2),M.add(k);for(const ut of[-1,1]){const F=new b(new rt(.078,10,8),a);F.scale.set(1.1,.46,.62),F.rotation.z=ut*-.3,F.position.set(ut*.15,.105,.345),M.add(F)}const G=ut=>{const F=new b(new rt(.068,12,10),a);F.scale.set(1.1,.9,.6),F.position.set(ut,.04,.355),M.add(F);const Q=new b(new rt(.044,12,10),t(15771704,{emissive:12609536,emissiveIntensity:.55,roughness:.25}));Q.scale.set(1,.86,.75),Q.position.set(ut,.04,.395),Q.name="yetiEye",M.add(Q);const ft=new b(new ee(.008,.036,3,6),t(1313284));ft.position.set(ut,.04,.428),M.add(ft);const ot=new hc(16750848,.18,1.2);ot.name="yetiEyeLight",ot.position.set(ut,.05,.52),M.add(ot)};G(-.145),G(.145);for(const ut of[-1,1]){const F=new b(new rt(.05,10,8),a);F.scale.set(1.15,.32,.55),F.position.set(ut*.145,.072,.4),F.rotation.x=-.35,M.add(F);const Q=new b(new rt(.04,8,6),r);Q.scale.set(1.2,.35,.5),Q.position.set(ut*.145,.002,.4),M.add(Q)}const V=new b(new ee(.055,.1,5,10),r);V.rotation.x=Math.PI/2-.4,V.position.set(0,.015,.42),M.add(V);const J=new b(new rt(.175,14,12),r);J.scale.set(1,.8,1),J.position.set(0,-.1,.44),M.add(J);const q=new b(new rt(.052,12,10),l);q.scale.set(1.3,.8,.85),q.position.set(0,-.03,.585),M.add(q);for(const ut of[-1,1]){const F=new b(new rt(.014,8,6),t(920592));F.position.set(ut*.03,-.047,.608),M.add(F)}const at=new b(new rt(.145,12,10),h);at.scale.set(1,.62,.7),at.position.set(0,-.2,.46),M.add(at);const K=new b(new rt(.17,12,10),r);K.scale.set(1,.5,.9),K.position.set(0,-.27,.41),M.add(K),f(M,0,-.32,.24,.27,11,.052,.6,s,o);const pt=(ut,F,Q)=>{const ft=new b(new De(.021,.08,7),u);ft.rotation.x=Q?Math.PI:0,ft.position.set(ut,F,.535),M.add(ft)};pt(-.082,-.16,!0),pt(.082,-.16,!0),pt(-.07,-.245,!1),pt(.07,-.245,!1),_(M,-.16,.22,.12,.045,.6,.3),_(M,.16,.22,.12,.045,.6,-.3),_(M,0,.34,-.06,.055,.2,0);for(let ut=0;ut<5;ut++){const F=new b(new Yt(.022,.028,.022),u);F.position.set(-.08+ut*.04,-.178,.542),M.add(F)}for(const ut of[-1,1]){const F=new b(new rt(.08,10,8),e);F.position.set(ut*.28,.18,-.08),F.scale.set(.7,.85,.55),M.add(F);const Q=new b(new rt(.045,8,6),r);Q.scale.set(.5,.85,.55),Q.position.set(ut*.3,.18,-.05),M.add(Q)}f(M,0,.02,-.08,.43,16,.08,.55,e,s),i.add(M);const wt=new b(new rt(.28,12,10),e);wt.scale.set(1.15,.7,.85),wt.position.set(0,1.92,.08),wt.castShadow=!0,i.add(wt),f(i,0,1.88,.06,.34,14,.07,.55,s,o);const dt=new b(new De(.12,.38,8,1,!0),new ye({color:13694719,emissive:6745855,emissiveIntensity:.9,transparent:!0,opacity:.32,flatShading:!1,side:be,depthWrite:!1}));dt.rotation.x=Math.PI/2,dt.position.set(0,-.15,.62),dt.name="yetiBreath",M.add(dt);for(let ut=0;ut<3;ut++){const F=new b(new rt(.07+ut*.025,6,5),new pe({color:12118271,transparent:!0,opacity:.22-ut*.04,depthWrite:!1}));F.position.set((ut-1)*.04,-.13,.75+ut*.1),F.name="yetiBreathMist",M.add(F)}const Vt=new b(new Qt(.85,.95,2.4,10),new pe({visible:!1}));return Vt.position.y=1.2,Vt.name="hit",i.add(Vt),i.scale.setScalar(1.15),i}function wo(i,t){const e=i.getObjectByName("yetiArmR"),n=i.getObjectByName("yetiArmL"),s=Math.max(0,Math.min(1,t));let o=0,r=0;if(s<=0)return;if(s<.35){const c=s/.35;o=-1.35*c,r=-.4*c}else if(s<.55){const c=(s-.35)/.2;o=-1.35+2.4*c,r=-.4+1.6*c}else{const c=(s-.55)/.45;o=1.05*(1-c),r=1.2*(1-c)}e&&(e.rotation.x=o,e.rotation.y=r*.55),n&&(n.rotation.x=o*.55);const a=i.getObjectByName("yetiHead");a&&(a.rotation.x=-.15-Math.min(s,1)*.2)}function tv(){const i=new It;i.name="snowProps";const t=_e(15266552,{roughness:.78}),e=_e(11063528,{roughness:.35,metalness:.15,emissive:4491434,emissiveIntensity:.12}),n=_e(6975608,{roughness:.92}),s=[[3.2,6.4,.9],[5.4,8,1.1],[4.8,5.8,.7],[2.6,7.8,.85],[5.8,6.6,.75],[3.6,8.6,.95]];for(const[o,r,a]of s){const c=new b(new oi(.35*a,0),t);if(c.position.set(o,.12*a,r),c.scale.set(1.4,.55,1.2),c.castShadow=!0,c.receiveShadow=!0,i.add(c),a>.85){const l=new b(new On(.18*a,0),e);l.position.set(o+.15,.28*a,r-.1),l.rotation.set(.3,.5,.2),i.add(l)}}for(const[o,r]of[[6.2,7.5],[2.2,6]]){const a=new b(new oi(.4,0),n);a.position.set(o,.25,r),a.castShadow=!0,i.add(a);const c=new b(new rt(.28,6,4),t);c.position.set(o,.48,r),c.scale.set(1.2,.45,1),i.add(c)}return i}function ev(){const i=new It;i.name="godRays";const t=new pe({color:16773320,transparent:!0,opacity:.09,depthWrite:!1,side:be});for(let e=0;e<5;e++){const n=new b(new fn(1.2+e*.15,18),t);n.position.set(-4+e*2.4,9,-2+e%3*3),n.rotation.z=-.35-e*.04,n.rotation.y=.25,i.add(n)}return i}function uu(){const i=new It;i.name="orc";const t=(L,N={})=>new ye({color:L,roughness:N.roughness??.85,metalness:N.metalness??.05,flatShading:!1,...N}),e=t(8034372,{roughness:.82}),n=t(4875304,{roughness:.88}),s=t(2759696,{roughness:.92}),o=t(6955544,{roughness:.88}),r=t(2762544,{roughness:.96}),a=t(3946564,{roughness:.94}),c=t(7030054,{roughness:.82}),l=t(4073492,{roughness:.88}),h=t(9133882,{roughness:.7}),u=t(11309160,{roughness:.97}),f=t(8218435,{roughness:.97}),p=t(3356730,{roughness:.93}),g=t(13686494,{metalness:.82,roughness:.2}),_=t(4861972,{roughness:.88}),m=t(16117988,{roughness:.4,metalness:.08}),d=(L,N=i,X)=>(L.castShadow=!0,L.receiveShadow=!0,X&&Vo(L,X,659976),N.add(L),L),S=(L,N,X,Y,gt,ct,St=0)=>{const Gt=new b(new Xe(gt,ct,6,14),u);Gt.rotation.x=Math.PI/2,Gt.position.set(N,X,Y),Gt.castShadow=!0,L.add(Gt);for(let ht=0;ht<St;ht++){const yt=ht/St*Math.PI*2+.3,Nt=new b(new nn(ct*1.45,0),ht%2?f:u);Nt.position.set(N+Math.cos(yt)*gt,X+ht%2*ct*.4,Y+Math.sin(yt)*gt),Nt.rotation.set(.3,yt,.2),Nt.scale.set(1.2,.8,1.1),Nt.castShadow=!0,L.add(Nt)}},w=new b(new vn(.4,18),new pe({color:0,transparent:!0,opacity:.4,depthWrite:!1}));w.name="contactShadow",w.rotation.x=-Math.PI/2,w.position.y=.03,i.add(w);const v=L=>{const N=new It;N.name=L<0?"orcLegL":"orcLegR",N.position.set(L*.18,.8,0);const X=new b(new ee(.11,.2,5,12),p);X.position.set(0,-.16,0),d(X,N);const Y=new b(new rt(.1,10,8),p);Y.scale.set(1.15,1.35,.85),Y.position.set(0,-.14,.06),d(Y,N);const gt=new b(new rt(.09,10,8),p);gt.scale.set(1.05,1.2,.8),gt.position.set(0,-.16,-.05),d(gt,N);const ct=new It;ct.name=L<0?"orcShinL":"orcShinR",ct.position.set(0,-.36,0);const St=new b(new rt(.09,10,8),p);d(St,ct);const Gt=new b(new ee(.09,.08,5,12),p);Gt.position.set(0,-.1,.01),d(Gt,ct);const ht=new b(new Qt(.1,.112,.14,12),c);ht.position.set(0,-.22,.02),d(ht,ct,1.05);const yt=new b(new Qt(.05,.065,.08,12),l);yt.position.set(0,-.32,.025),d(yt,ct);const Nt=new It;Nt.name=L<0?"orcFootL":"orcFootR",Nt.position.set(0,-.36,0);const Ft=new b(new ee(.065,.13,4,10),l);Ft.rotation.x=Math.PI/2,Ft.position.set(0,0,.09),Ft.scale.set(1.1,1,.7),d(Ft,Nt),ct.add(Nt);for(const Ct of[-1,1]){const qt=new b(new Yt(.03,.18,.018),h);qt.position.set(0,-.24,.02),qt.rotation.z=Ct*.7,ct.add(qt)}return S(ct,0,-.16,.02,.11,.02,6),N.add(ct),N},U=v(-1);U.name="orcLegL",i.add(U);const T=v(1);T.name="orcLegR",i.add(T);const A=new b(new Qt(.24,.27,.22,14),c);A.position.y=.78,d(A,i);for(const[L,N]of[[.18,0],[-.18,Math.PI]]){const X=new as;X.moveTo(-.14,0),X.lineTo(.14,0),X.lineTo(0,-.22),X.closePath();const Y=new b(new Ai(X,{depth:.04,bevelEnabled:!1}),l);Y.position.set(0,.72,L),Y.rotation.y=N,d(Y,i)}for(const L of[-1,1]){const N=new as;N.moveTo(-.1,0),N.lineTo(.1,0),N.lineTo(0,-.18),N.closePath();const X=new b(new Ai(N,{depth:.035,bevelEnabled:!1}),h);X.position.set(L*.24,.72,0),X.rotation.y=L*Math.PI*.5,d(X,i)}const I=new b(new Qt(.25,.27,.55,14),c);I.position.y=1.12,d(I,i,1.07),I.name="orcBody";for(const L of[-1,1]){const N=new b(new rt(.15,12,10),h);N.scale.set(1.25,.52,.48),N.position.set(L*.13,1.26,.17),d(N,i)}const M=new b(new Yt(.06,.22,.04),l);M.position.set(0,1.22,.22),d(M,i);for(const L of[-1,1]){const N=new b(new rt(.12,12,10),e);N.position.set(L*.34,1.38,0),N.scale.set(.95,.9,1.05),d(N,i)}const x=new b(new rt(.14,12,9,0,Math.PI*2,0,Math.PI*.58),h);x.scale.set(1.15,.85,1.1),x.rotation.z=.4,x.position.set(-.36,1.42,.02),d(x,i,1.04);for(let L=0;L<3;L++){const N=new b(new rt(.016,6,5),g),X=-.4+L*.4;N.position.set(-.36+Math.cos(X)*.02,1.5,Math.sin(X)*.08),i.add(N)}const C=new b(new Qt(.3,.3,.09,10),l);C.position.y=.88,d(C,i);const k=new b(new Yt(.11,.08,.05),g);k.position.set(0,.88,.29),i.add(k);const G=(L,N=.22)=>{const X=new b(new Yt(.08,.58,.038),l);X.position.set(0,1.18,N),X.rotation.z=L,i.add(X);for(const Y of[-.18,.18]){const gt=new b(new rt(.018,5,4),g);gt.position.set(Math.sin(L)*Y*.15,1.18+Math.cos(L)*Y,N+.025),i.add(gt)}};G(.55,.27),G(-.55,.27),G(.55,-.27),G(-.55,-.27);const V=new b(new Qt(.04,.04,.04,6),g);V.rotation.x=Math.PI/2,V.position.set(0,1.18,-.29),i.add(V);const J=new b(new On(.075,0),g);J.scale.set(1.15,.9,.45),J.position.set(0,1.18,.29),i.add(J);const q=new b(new Yt(.12,.14,.08),h);q.position.set(.28,.82,.12),d(q,i);for(const[L,N]of[[0,.11],[Math.PI,-.11]]){const X=new b(new Xe(.19,.045,6,12,Math.PI*1.05),u);X.rotation.set(Math.PI/2,0,L-Math.PI*.52),X.position.set(0,1.4,N),X.scale.set(1.5,1,1),d(X,i)}for(let L=0;L<13;L++){const N=L/13*Math.PI*2+.28,X=new b(new nn(.052,0),L%2?f:u);X.position.set(Math.cos(N)*.285,1.38+L%3*.02,Math.sin(N)*.175),X.rotation.set(.35,Math.PI/2-N,.2),X.scale.set(1.5,.7,1),d(X,i)}const at=L=>{const N=new It;N.name=L<0?"orcArmL":"orcArmR";const X=new b(new ee(.105,.24,5,12),e);X.position.set(0,0,0),X.rotation.z=L*.22,d(X,N);const Y=new b(new rt(.09,10,8),e);Y.scale.set(1.15,1.25,.9),Y.position.set(L*.02,-.04,.03),d(Y,N);const gt=new b(new Yt(.02,.16,.04),s);gt.position.set(L*-.02,.02,.09),gt.rotation.z=L*.22,N.add(gt);const ct=new It;ct.name=L<0?"orcForearmL":"orcForearmR",ct.position.set(L*.08,-.2,.01),ct.rotation.x=-.28;const St=new b(new Qt(.072,.088,.24,12),c);St.position.set(L*.03,-.12,.01),St.rotation.z=L*.14,d(St,ct,1.04);for(const Nt of[-1,1]){const Ft=new b(new Yt(.024,.22,.014),l);Ft.position.set(L*.02,-.12,.02),Ft.rotation.z=L*.16+Nt*.55,ct.add(Ft)}S(ct,L*0,.02,.01,.094,.017,0);const Gt=new It;Gt.name=L<0?"orcHandL":"orcHandR",Gt.position.set(L*.06,-.28,.02);const ht=new b(new rt(.062,10,8),e);ht.scale.set(.85,1,.95),d(ht,Gt);for(let Nt=0;Nt<4;Nt++){const Ft=new b(new ee(.016,.05,3,6),e);Ft.position.set((Nt-1.5)*.03,-.05,.045),Ft.rotation.x=1.15,Gt.add(Ft)}const yt=new b(new ee(.016,.045,3,6),e);return yt.position.set(L*.05,-.015,.05),yt.rotation.set(.9,0,L*.8),Gt.add(yt),ct.add(Gt),N.add(ct),N.position.set(L*.32,1.3,0),N};i.add(at(-1));const K=at(1);i.add(K);const pt=new b(new Qt(.095,.115,.22,10),e);pt.position.set(0,1.46,.005),d(pt,i);const wt=new b(new rt(.17,12,10),e);wt.scale.set(1.25,.55,.9),wt.position.set(0,1.37,0),d(wt,i);const dt=new It;dt.name="orcHead",dt.position.set(0,1.72,.008);const Vt=new b(new rt(.19,14,12),e);Vt.scale.set(1.05,1.05,.95),d(Vt,dt,1.1);const ut=new b(new rt(.15,14,10),e);ut.scale.set(1.08,.4,.62),ut.position.set(0,.105,.092),d(ut,dt);for(const L of[-1,1]){const N=new b(new ee(.016,.055,3,8),n);N.rotation.z=Math.PI/2+L*-.24,N.rotation.x=-.2,N.position.set(L*.06,.088,.152),dt.add(N);const X=new b(new rt(.055,10,8),e);X.scale.set(.78,.58,.45),X.position.set(L*.1,-.035,.105),dt.add(X)}const F=new b(new ee(.026,.06,4,8),e);F.rotation.x=.35,F.position.set(0,.03,.158),dt.add(F);const Q=new b(new rt(.048,10,8),e);Q.scale.set(1.25,.78,1),Q.position.set(0,-.034,.178),dt.add(Q);for(const L of[-1,1]){const N=new b(new rt(.015,8,6),n);N.scale.set(.8,1,.7),N.position.set(L*.032,-.052,.195),dt.add(N)}const ft=new b(new rt(.135,14,11),n);ft.scale.set(1,.7,.95),ft.position.set(0,-.105,.07),d(ft,dt);const ot=new b(new rt(.05,10,8),n);ot.scale.set(1.15,.85,1),ot.position.set(0,-.155,.14),dt.add(ot);const mt=new b(new ee(.011,.055,3,8),t(3808280));mt.rotation.z=Math.PI/2,mt.position.set(0,-.095,.185),dt.add(mt);for(const L of[-1,1]){const N=new b(new De(.026,.14,7),m);N.position.set(L*.078,-.118,.168),N.rotation.set(.15,0,L*.38),dt.add(N);const X=new b(new rt(.022,8,6),m);X.position.set(L*.07,-.132,.155),dt.add(X)}const Mt=new b(new Yt(.26,.022,.016),s);Mt.position.set(0,.078,.162),dt.add(Mt);const Et=new b(new Yt(.012,.09,.012),o);Et.position.set(-.055,.01,.175),Et.rotation.z=.55,dt.add(Et);for(const L of[-1,1]){const N=new b(new Yt(.018,.07,.012),s);N.position.set(L*.11,-.05,.132),N.rotation.z=L*-.2,dt.add(N)}for(const L of[-1,1]){const N=new b(new rt(.048,10,8),n);N.scale.set(1.1,.9,.6),N.position.set(L*.072,.022,.135),dt.add(N);const X=new b(new rt(.027,10,8),t(14209720,{roughness:.45}));X.scale.set(1.1,.82,.66),X.position.set(L*.072,.022,.149),dt.add(X);const Y=new b(new rt(.014,8,6),t(12868120,{emissive:8398856,emissiveIntensity:.45,roughness:.32}));Y.position.set(L*.074,.022,.163),dt.add(Y);const gt=new b(new rt(.008,6,5),t(1182212));gt.position.set(L*.075,.022,.172),dt.add(gt)}for(const L of[-1,1]){const N=new b(new rt(.055,10,8),e);N.scale.set(.55,1.7,.45),N.position.set(L*.24,.04,-.02),N.rotation.z=L*-1.25,N.rotation.y=L*.18,N.rotation.x=-.12,d(N,dt)}const Wt=new b(new rt(.192,14,11,0,Math.PI*2,0,Math.PI*.46),r);Wt.position.set(0,.072,-.018),Wt.scale.set(1.04,1,1.06),d(Wt,dt),[[0,.22,.04,1.15],[-.09,.2,.08,1],[.09,.2,.08,1],[-.14,.16,-.02,.95],[.14,.16,-.02,.95],[0,.18,-.12,1.05],[-.1,.14,-.1,.9],[.1,.14,-.1,.9],[-.05,.24,-.02,1.1],[.05,.24,-.02,1.1],[0,.2,.14,.85]].forEach(([L,N,X,Y],gt)=>{const ct=new b(new nn(.07*Y,0),gt%3===0?a:r);ct.position.set(L,N-.012,X),ct.rotation.set(-.45+X*1.4,L*1.8,-L*1.2),ct.scale.set(1.1,.42,1.25),dt.add(ct)}),i.add(dt);const nt=new It;nt.name="orcSpear",nt.position.set(.01,-.045,.05),nt.rotation.set(.18,.04,.1),nt.userData.rest={x:.01,y:-.045,z:.05,rx:.18,ry:.04,rz:.1};const P=new b(new Qt(.026,.03,2.05,6),_);P.position.y=1.05,d(P,nt);const At=new b(new Qt(.042,.04,.1,6),l);At.position.y=1.9,nt.add(At);const W=new b(new On(.13,0),g);W.scale.set(.4,1.85,.28),W.position.y=2.2,d(W,nt);const et=new b(new Yt(.018,.34,.085),t(15659766,{metalness:.9,roughness:.14}));et.position.y=2.2,nt.add(et);const it=new b(new Qt(.052,.038,.1,6),g);it.position.y=1.96,nt.add(it);for(const L of[-1,1]){const N=new b(new De(.04,.14,4),g);N.position.set(L*.055,2.08,0),N.rotation.z=L*1.15,nt.add(N)}const Ut=new b(new De(.06,.22,4),t(15791352,{metalness:.88,roughness:.15}));Ut.position.y=2.4,nt.add(Ut);const vt=new b(new De(.032,.1,4),g);vt.rotation.x=Math.PI,vt.position.y=.02,nt.add(vt),(K.getObjectByName("orcHandR")??K).add(nt);const y=new b(new Qt(.45,.5,1.9,8),new pe({visible:!1}));return y.position.y=.95,y.name="hit",i.add(y),i}function Hr(i,t){const e=i.getObjectByName("orcSpear"),n=i.getObjectByName("orcArmR"),s=Math.max(0,Math.min(1,t));let o=0,r=0;if(s<=0){const c=e?.userData.rest;e&&c&&(e.position.set(c.x,c.y,c.z),e.rotation.set(c.rx,c.ry,c.rz));return}else if(s<.32)o=s/.32,r=-.35*o;else if(s<.52){const c=(s-.32)/.2;o=1-c,r=-.35+1.45*c}else r=1.1*(1-(s-.52)/.48);if(e){const c=e.userData.rest;c?(e.rotation.x=c.rx-r*.35,e.position.z=c.z+r*.22-o*.1):(e.rotation.x=-r*.95,e.position.z=.12+r*.55-o*.25)}n&&(n.rotation.x=-r*1.05+o*.4);const a=i.getObjectByName("orcHead");a&&(a.rotation.x=-r*.12)}const nv={idle:"Idle",walk:"Walk",attack:"Attack",sword:"Sword guard","sword-walk":"Sword walk",slash:"Slash",chop:"Chop",mine:"Mine"},Gr=[{id:"hunter",name:"Male Hunter",group:"Characters",poses:["idle","walk","sword","sword-walk","slash","chop","mine"],build:()=>dc()},{id:"yeti",name:"Frost Yeti",group:"Creatures",poses:["idle","walk","attack"],build:()=>hu()},{id:"orc",name:"Orc Scout",group:"Creatures",poses:["idle","walk","attack"],build:()=>uu()},{id:"dummy",name:"Training Dummy",group:"World",build:()=>au()},{id:"tree",name:"Whisperwood Tree",group:"World",build:()=>ru(2)},{id:"copper",name:"Copper Rock",group:"World",build:()=>Ha("copper",1)},{id:"tin",name:"Tin Rock",group:"World",build:()=>Ha("tin",2)},{id:"campfire",name:"Campfire",group:"World",build:()=>cu()},{id:"tent",name:"Tent",group:"World",build:()=>lu()},{id:"crate",name:"Crate",group:"World",build:()=>Ga()},{id:"barrel",name:"Barrel",group:"World",build:()=>Po()},{id:"bedroll",name:"Bedroll",group:"World",build:()=>Va()}];class iv{constructor(t){this.canvas=t,this.camera=new Ge(42,window.innerWidth/window.innerHeight,.08,80),this.root=document.getElementById("studio"),this.listEl=document.getElementById("studio-list"),this.poseEl=document.getElementById("studio-poses"),this.titleEl=document.getElementById("studio-model-name"),this.buildScene(),this.buildList(),this.bindUi(),this.bindOrbit()}root;listEl;poseEl;titleEl;scene=new Us;camera;current=null;entry=null;pose="idle";animT=0;spherical=new Yh(4.6,1.12,.55);look=new D(0,1,0);dragging=!1;dragBtn=0;lastX=0;lastY=0;autoSpin=!1;openFlag=!1;stage;isOpen(){return this.openFlag}setEnvironment(t){this.scene.environment=t,this.scene.environmentIntensity=.7}toggle(){this.openFlag?this.close():this.open()}open(){this.openFlag=!0,this.root.hidden=!1;const t=document.getElementById("hud");t&&(t.hidden=!0),this.entry||this.select(Gr[0].id),this.fitCurrent()}close(){this.openFlag=!1,this.dragging=!1,this.root.hidden=!0;const t=document.getElementById("hud");t&&(t.hidden=!1)}resize(t,e){this.camera.aspect=t/Math.max(1,e),this.camera.updateProjectionMatrix()}tick(t){this.openFlag&&(this.animT+=t,this.autoSpin&&(this.spherical.theta+=t*.55),this.applyPose(t),this.updateCamera())}render(t){t.setClearColor(7238764),t.render(this.scene,this.camera),t.setClearColor(10405604)}buildScene(){this.scene.background=new Rt(7238764),this.scene.fog=new rc(7238764,16,36),this.scene.add(new zs(16054271,3817528,1.05));const t=new Tn(16774364,2.05);t.position.set(4.5,7.5,5.5),t.castShadow=!0,t.shadow.mapSize.set(1024,1024),t.shadow.bias=-4e-4,t.shadow.camera.near=.5,t.shadow.camera.far=24,t.shadow.camera.left=-5,t.shadow.camera.right=5,t.shadow.camera.top=5,t.shadow.camera.bottom=-5,this.scene.add(t);const e=new Tn(13163775,.62);e.position.set(-6,3.5,-2),this.scene.add(e);const n=new Tn(16769208,.38);n.position.set(-2,4,7),this.scene.add(n),this.scene.add(new Wh(6976640,.42));const s=new b(new vn(6.5,48),new ye({color:6054492,roughness:.94,metalness:.04}));s.rotation.x=-Math.PI/2,s.receiveShadow=!0,this.scene.add(s);const o=new b(new Si(1.55,1.62,48),new pe({color:9071144,transparent:!0,opacity:.55,side:be}));o.rotation.x=-Math.PI/2,o.position.y=.008,this.scene.add(o);const r=new n_(8,16,4866096,3027512);r.position.y=.004;const a=r.material;a.transparent=!0,a.opacity=.35,this.scene.add(r),this.stage=new It,this.scene.add(this.stage)}buildList(){this.listEl.innerHTML="";let t="";for(const e of Gr){if(e.group!==t){t=e.group;const s=document.createElement("div");s.className="studio-group",s.textContent=e.group,this.listEl.appendChild(s)}const n=document.createElement("button");n.type="button",n.className="studio-item",n.dataset.id=e.id,n.textContent=e.name,n.addEventListener("click",()=>this.select(e.id)),this.listEl.appendChild(n)}}bindUi(){document.getElementById("btn-studio")?.addEventListener("click",()=>this.toggle()),document.getElementById("studio-close")?.addEventListener("click",()=>this.close()),document.getElementById("studio-reset")?.addEventListener("click",()=>this.fitCurrent()),document.getElementById("studio-spin")?.addEventListener("click",t=>{this.autoSpin=!this.autoSpin,t.currentTarget.classList.toggle("on",this.autoSpin)}),window.addEventListener("keydown",t=>{if(t.key==="Escape"&&this.openFlag){this.close(),t.preventDefault();return}if(t.key.toLowerCase()==="v"&&!t.ctrlKey&&!t.metaKey&&!t.altKey){const e=t.target;if(e&&(e.tagName==="INPUT"||e.tagName==="TEXTAREA"))return;this.toggle()}})}bindOrbit(){const t=s=>{this.openFlag&&s.target===this.canvas&&(this.dragging=!0,this.dragBtn=s.button,this.lastX=s.clientX,this.lastY=s.clientY,this.canvas.setPointerCapture(s.pointerId),s.preventDefault())},e=s=>{if(!this.openFlag||!this.dragging)return;const o=s.clientX-this.lastX,r=s.clientY-this.lastY;if(this.lastX=s.clientX,this.lastY=s.clientY,this.dragBtn===2||s.shiftKey){const a=this.spherical.radius*.0016,c=new D,l=new D;this.camera.matrix.extractBasis(c,l,new D),this.look.addScaledVector(c,-o*a),this.look.addScaledVector(l,r*a)}else this.spherical.theta-=o*.007,this.spherical.phi-=r*.007,this.spherical.phi=Math.max(.06,Math.min(Math.PI-.06,this.spherical.phi))},n=s=>{if(this.dragging){this.dragging=!1;try{this.canvas.releasePointerCapture(s.pointerId)}catch{}}};this.canvas.addEventListener("pointerdown",t),window.addEventListener("pointermove",e),window.addEventListener("pointerup",n),this.canvas.addEventListener("contextmenu",s=>{this.openFlag&&s.preventDefault()}),this.canvas.addEventListener("wheel",s=>{if(!this.openFlag)return;s.preventDefault();const o=this.spherical.radius*(s.deltaY>0?1.08:.92);this.spherical.radius=Math.max(1.1,Math.min(18,o))},{passive:!1})}select(t){const e=Gr.find(n=>n.id===t);e&&(this.entry=e,this.current&&this.stage.remove(this.current),this.current=e.build(),this.current.position.set(0,0,0),this.current.rotation.set(0,0,0),this.current.traverse(n=>{(n.name==="contactShadow"||n.name==="hit"||n.name==="yetiBreath"||n.name==="yetiBreathMist"||n.name==="yetiEyeGlow"||n.name==="yetiEyeLight")&&(n.visible=!1)}),this.stage.add(this.current),this.animT=0,this.pose=e.poses?.[0]??"idle",this.titleEl.textContent=e.name,this.listEl.querySelectorAll(".studio-item").forEach(n=>{n.classList.toggle("on",n.dataset.id===t)}),this.buildPoseBar(),this.fitCurrent())}buildPoseBar(){this.poseEl.innerHTML="";const t=this.entry?.poses;if(!t?.length){this.poseEl.hidden=!0;return}this.poseEl.hidden=!1;for(const e of t){const n=document.createElement("button");n.type="button",n.className="studio-pose",n.textContent=nv[e],n.classList.toggle("on",e===this.pose),n.addEventListener("click",()=>{this.pose=e,this.animT=0,this.buildPoseBar()}),this.poseEl.appendChild(n)}}fitCurrent(){if(!this.current)return;this.current.updateWorldMatrix(!0,!0);const t=new kn().setFromObject(this.current),e=t.getSize(new D),n=t.getCenter(new D);this.look.copy(n),this.spherical.radius=Math.max(2.4,e.length()*1.05),this.spherical.phi=1.12,this.spherical.theta=.55,this.autoSpin=!1,document.getElementById("studio-spin")?.classList.remove("on")}updateCamera(){const t=new D().setFromSpherical(this.spherical).add(this.look);this.camera.position.copy(t),this.camera.lookAt(this.look)}applyPose(t){if(!this.current||!this.entry)return;const e=this.entry.id;if(e==="hunter"&&this.current instanceof It){this.applyHunter(this.current);const n=Number(this.current.userData.locomotionY)||0;this.current.position.y=n;return}if(e==="yeti"&&this.current instanceof It){this.applyYeti(this.current);return}e==="orc"&&this.current instanceof It&&this.applyOrc(this.current)}applyHunter(t){const e=this.pose;if(e==="idle"){Fe(t,null),yi(t,this.animT);return}if(e==="walk"){Fe(t,null),Bo(t,this.animT*Ba(.9),.9,1);return}if(e==="sword"){Fe(t,"sword"),yi(t,this.animT);return}if(e==="sword-walk"){Fe(t,"sword"),Bo(t,this.animT*Ba(.9),.9,1);return}if(e==="slash"){Fe(t,"sword");const n=this.animT%ko/ko;nu(t,n);return}if(e==="chop"){Fe(t,"hatchet"),ka(t,this.animT*.7,"tree");return}Fe(t,"pickaxe"),ka(t,this.animT*.7,"rock")}applyYeti(t){if(this.pose==="walk"){_i(t,this.animT*f_,!0,1);return}if(this.pose==="attack"){const e=this.animT%Ho/Ho;iu(t,e);return}_i(t,this.animT,!1,0)}applyOrc(t){if(this.pose==="walk"){Zi(t,this.animT*p_,!0,1);return}if(this.pose==="attack"){const e=this.animT%Go/Go;su(t,e);return}Zi(t,this.animT,!1,0)}}class sv{scene;camera;overlay;particles=[];floats=[];tmp=new D;chipMat=new ye({color:12880448,emissive:5910544,emissiveIntensity:.35,flatShading:!0,roughness:.85});sparkMat=new ye({color:16769160,emissive:16763972,emissiveIntensity:2,flatShading:!0});hitMat=new ye({color:16772778,emissive:16768392,emissiveIntensity:1.5,flatShading:!0});oreMat=new ye({color:12088115,emissive:6697745,emissiveIntensity:.4,metalness:.5,roughness:.45,flatShading:!0});iceMat=new ye({color:11069695,emissive:4500172,emissiveIntensity:1.2,flatShading:!0,transparent:!0,opacity:.9});clawMat=new ye({color:14215416,emissive:8960989,emissiveIntensity:.8,flatShading:!0});spearMat=new ye({color:13160608,emissive:8956484,emissiveIntensity:.9,flatShading:!0});impactMat=new ye({color:16774864,emissive:16764006,emissiveIntensity:2.4,flatShading:!0,transparent:!0,opacity:.95});telegraphMat=new pe({color:16724753,transparent:!0,opacity:.7,depthWrite:!1,side:be});frostTeleMat=new pe({color:6737151,transparent:!0,opacity:.65,depthWrite:!1,side:be});constructor(t,e,n){this.scene=t,this.camera=e,this.overlay=document.createElement("div"),this.overlay.id="vfx-overlay",this.overlay.style.cssText="position:absolute;inset:0;pointer-events:none;overflow:hidden;z-index:15;",n.appendChild(this.overlay)}spawnWoodchips(t,e=10){for(let n=0;n<e;n++){const s=.14+Math.random()*.16,o=new b(new Yt(s,s*.35,s*.7),this.chipMat);o.position.copy(t),o.position.x+=(Math.random()-.5)*.35,o.position.y+=.35+Math.random()*.55,o.position.z+=(Math.random()-.5)*.35,o.castShadow=!1,this.scene.add(o),this.particles.push({mesh:o,vel:new D((Math.random()-.5)*3.4,2.2+Math.random()*2.8,(Math.random()-.5)*3.4),life:0,maxLife:1.05+Math.random()*.55,gravity:7,spin:(Math.random()-.5)*14})}}spawnMineSparks(t,e=12){for(let n=0;n<e;n++){const s=n%3===0,o=new b(new rt(s?.11:.07,5,4),s?this.oreMat:this.sparkMat);o.position.copy(t),o.position.x+=(Math.random()-.5)*.3,o.position.y+=.25+Math.random()*.45,o.position.z+=(Math.random()-.5)*.3,this.scene.add(o),this.particles.push({mesh:o,vel:new D((Math.random()-.5)*4.6,2+Math.random()*3.2,(Math.random()-.5)*4.6),life:0,maxLife:.85+Math.random()*.45,gravity:6,spin:(Math.random()-.5)*18})}}spawnHitSparks(t,e=18){for(let n=0;n<e;n++){const s=new b(new On(.045+Math.random()*.04,0),this.hitMat);s.position.copy(t),s.position.y+=1+Math.random()*.45,this.scene.add(s),this.particles.push({mesh:s,vel:new D((Math.random()-.5)*5.2,1+Math.random()*2.8,(Math.random()-.5)*5.2),life:0,maxLife:.4+Math.random()*.3,gravity:4.5,spin:(Math.random()-.5)*20})}}spawnFloatingText(t,e,n="#7ec87e"){const s=document.createElement("div");s.className="float-xp",s.textContent=e,s.style.color=n,this.overlay.appendChild(s),this.floats.push({el:s,life:0,maxLife:1.55,world:t.clone(),driftY:0})}spawnXp(t,e,n){this.spawnFloatingText(t.clone().add(new D((Math.random()-.5)*.4,1.6,0)),`+${e} ${n}`,"#7ec87e")}spawnDamage(t,e,n=!1){this.spawnFloatingText(t.clone().add(new D((Math.random()-.5)*.25,1.7,0)),n?`${e}!`:String(e),n?"#ffe066":"#ff8a78")}spawnIceBurst(t,e=16){for(let n=0;n<e;n++){const s=new b(new On(.06+Math.random()*.05,0),this.iceMat);s.position.copy(t),s.position.y+=.8+Math.random()*.6,s.position.x+=(Math.random()-.5)*.4,s.position.z+=(Math.random()-.5)*.4,this.scene.add(s),this.particles.push({mesh:s,vel:new D((Math.random()-.5)*5,1.2+Math.random()*3.5,(Math.random()-.5)*5),life:0,maxLife:.55+Math.random()*.4,gravity:5,spin:(Math.random()-.5)*20})}}spawnClawSlash(t,e=8){for(let n=0;n<e;n++){const s=new b(new Yt(.08,.02,.28+Math.random()*.15),this.clawMat);s.position.copy(t),s.position.y+=1+Math.random()*.5;const o=n/e*Math.PI-Math.PI/2;s.rotation.y=o,s.rotation.z=-.4,this.scene.add(s),this.particles.push({mesh:s,vel:new D(Math.cos(o)*3.5,.5+Math.random(),Math.sin(o)*3.5),life:0,maxLife:.28+Math.random()*.15,gravity:2,spin:8})}}spawnSpearThrust(t,e=8){for(let n=0;n<e;n++){const s=new b(new De(.04,.22+Math.random()*.12,4),this.spearMat);s.position.copy(t),s.position.y+=.9+Math.random()*.5;const o=n/e*Math.PI*.6-.3;s.rotation.z=o,s.rotation.x=Math.PI/2,this.scene.add(s),this.particles.push({mesh:s,vel:new D(Math.sin(o)*3.2,.4+Math.random(),Math.cos(o)*3.2),life:0,maxLife:.28+Math.random()*.15,gravity:2,spin:10})}}spawnImpactBurst(t,e=18,n=!1){const s=n?this.iceMat:this.impactMat;for(let r=0;r<e;r++){const a=new b(new On(.05+Math.random()*.06,0),s);a.position.copy(t),a.position.y+=.9+Math.random()*.55,this.scene.add(a);const c=Math.random()*Math.PI*2,l=2.5+Math.random()*4.5;this.particles.push({mesh:a,vel:new D(Math.cos(c)*l,1.5+Math.random()*3.2,Math.sin(c)*l),life:0,maxLife:.4+Math.random()*.35,gravity:5,spin:(Math.random()-.5)*22})}const o=new b(new Si(.15,.45,20),new pe({color:n?11069695:16771232,transparent:!0,opacity:.7,depthWrite:!1,side:be}));o.rotation.x=-Math.PI/2,o.position.set(t.x,.12,t.z),this.scene.add(o),this.particles.push({mesh:o,vel:new D(0,.05,0),life:0,maxLife:.35,gravity:0,spin:0})}spawnTelegraph(t,e=!1,n=.55,s=1.05){const o=new b(new Si(s*.72,s,28),e?this.frostTeleMat.clone():this.telegraphMat.clone());o.rotation.x=-Math.PI/2,o.position.set(t.x,.09,t.z),this.scene.add(o),this.particles.push({mesh:o,vel:new D(0,0,0),life:0,maxLife:n,gravity:0,spin:1.2});const r=(e?this.frostTeleMat:this.telegraphMat).clone();r.opacity=e?.28:.32;const a=new b(new vn(s*.7,28),r);a.rotation.x=-Math.PI/2,a.position.set(t.x,.07,t.z),a.scale.setScalar(.15),this.scene.add(a),this.particles.push({mesh:a,vel:new D(0,.01,0),life:0,maxLife:n,gravity:0,spin:0}),a.userData.teleFill=!0}spawnArcTelegraph(t,e,n=!1,s=.5){const o=(n?this.frostTeleMat:this.telegraphMat).clone();o.opacity=.65;const r=new b(new Si(.55,1.15,20,1,0,Math.PI*.85),o);r.rotation.x=-Math.PI/2.6,r.rotation.z=e,r.position.set(t.x,.85,t.z),this.scene.add(r),this.particles.push({mesh:r,vel:new D(0,.15,0),life:0,maxLife:s,gravity:0,spin:0})}update(t){for(let e=this.particles.length-1;e>=0;e--){const n=this.particles[e];n.life+=t,n.vel.y-=n.gravity*t,n.mesh.position.addScaledVector(n.vel,t),n.mesh.rotation.x+=n.spin*t,n.mesh.rotation.z+=n.spin*.7*t;const s=n.life/n.maxLife,o=Math.max(.05,1-s*.85),r=n.mesh.geometry.type;if(!!(n.mesh.userData&&n.mesh.userData.teleFill)){const c=Math.min(1,s/.85);n.mesh.scale.setScalar(.15+c*.85);const l=n.mesh.material;l&&l.opacity!==void 0&&(l.opacity=Math.max(0,(1-s)*.35))}else if(r==="RingGeometry"){const c=n.gravity===0&&n.spin>0&&n.spin<3?1+Math.sin(s*Math.PI)*.08:1+s*1.8;n.mesh.scale.setScalar(c);const l=n.mesh.material;l&&l.opacity!==void 0&&(l.opacity=Math.max(0,(1-s)*(n.spin>0&&n.spin<3?.6:.7)))}else if(r==="CircleGeometry"){n.mesh.scale.setScalar(o);const c=n.mesh.material;c&&c.opacity!==void 0&&(c.opacity=Math.max(0,(1-s)*.5))}else n.mesh.scale.setScalar(o);n.life>=n.maxLife&&(this.scene.remove(n.mesh),n.mesh.geometry.dispose(),this.particles.splice(e,1))}for(let e=this.floats.length-1;e>=0;e--){const n=this.floats[e];n.life+=t,n.driftY+=t*.55,this.tmp.set(n.world.x,n.world.y+n.driftY,n.world.z),this.tmp.project(this.camera);const s=(this.tmp.x*.5+.5)*window.innerWidth,o=(-this.tmp.y*.5+.5)*window.innerHeight,r=Math.max(0,1-n.life/n.maxLife);n.el.style.transform=`translate(-50%, -50%) translate(${s}px, ${o}px)`,n.el.style.opacity=String(r),(n.life>=n.maxLife||this.tmp.z>1)&&(n.el.remove(),this.floats.splice(e,1))}}}const du="hunterscape_save_v1";function ov(i){const t=new Set(Object.values(i.equipped).filter(e=>!!e));return i.inventory=i.inventory.filter(e=>{const n=jn[e.id];return!(n&&!n.stackable&&t.has(e.id))}),i}function rv(){try{const i=localStorage.getItem(du);if(!i)return Mo();const t=JSON.parse(i);if(t.version!==1)return Mo();const e=Mo();return ov({...e,...t,skills:{...e.skills,...t.skills},equipped:{...e.equipped,...t.equipped},inventory:t.inventory??e.inventory})}catch{return Mo()}}function av(i){try{localStorage.setItem(du,JSON.stringify(i))}catch{}}const So=1.6,cv=1.8,Ts=2.35,Vr=5.8,bs=2.15,Wr=5.4,Xr=4.2,lv=.7,hv=2.45,uv=9.5,dv=12,fv=3,nh=80,pv=28,ih=5,mv=10,sh=62,gv=22,oh=4,_v=8,He={x:-6.2,z:-4.8},Te={x:4.2,z:7.2},vv={constitution:"Constitution",attack:"Attack",strength:"Strength",defence:"Defence",woodcutting:"Woodcutting",mining:"Mining"};class xv{renderer;scene;camera;player;raycaster=new e_;pointer=new _t;clock=new Xh;hud;studio;vfx;save;objects=[];ground;activity={type:"idle"};moveMarker;saveTimer=0;keys=new Set;camOffset=new D(0,8.7,7.15);camZoom=1;camZoomTarget=1;camLook=new D;dummyTarget=null;yetiTarget=null;yetiAttackCd=0;yetiSwipeT=0;yetiAggroed=!1;orcTarget=null;orcAttackCd=0;orcSwipeT=0;orcAggroed=!1;running=!0;sun;rim;pendingGather=null;pendingCombat=!1;toolSwing=0;animTime=0;playerFlinch=0;playerKnock=new D;yetiHitDone=!1;orcHitDone=!1;deathAnims=[];camSmooth=new D;lookSmooth=new D;combatCamPull=0;moveSpeedCur=0;moveBlend=0;stoppingSteps=0;gaitPhase=0;poseSmoother=new Br;yetiGait=0;orcGait=0;yetiSmoother=new Br(u_);orcSmoother=new Br(d_);lastMoveDir=new D(0,0,1);hitReacts=[];yetiMoveBlend=0;orcMoveBlend=0;yetiTeleDone=!1;orcTeleDone=!1;playerTeleDone=!1;combatOorT=0;combatAbortT=0;pendingCombatTarget=null;pendingCombatChat="";constructor(t){this.save=rv(),this.hud=new H_,this.renderer=new sc({canvas:t,antialias:!0,alpha:!1}),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.renderer.setSize(window.innerWidth,window.innerHeight),this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=ah,this.renderer.outputColorSpace=Ne,this.renderer.toneMapping=Wo,this.renderer.toneMappingExposure=1.42,this.renderer.setClearColor(10405604),this.scene=new Us,this.scene.fog=new oc(12769e3,.012),this.camera=new Ge(48,window.innerWidth/window.innerHeight,.1,140),this.setupLights(),this.setupReflectionEnv(),this.studio=new iv(t),this.studio.setEnvironment(this.scene.environment),this.hud.setEnvironment(this.scene.environment),this.scene.add(Q_(70)),this.ground=X_(48),this.scene.add(this.ground),this.scene.add(K_()),this.buildWorld(),this.player=dc(),this.player.position.set(this.save.x,we(this.save.x,this.save.z),this.save.z),this.scene.add(this.player),this.syncHeldTool(),yi(this.player,0);const e=document.getElementById("app")??document.body;this.vfx=new sv(this.scene,this.camera,e),this.moveMarker=new b(new Si(.25,.38,24),new pe({color:13936715,transparent:!0,opacity:.85,side:be})),this.moveMarker.rotation.x=-Math.PI/2,this.moveMarker.position.y=.06,this.moveMarker.visible=!1,this.scene.add(this.moveMarker),this.bindInput(t),this.hud.onAction=n=>this.handleAction(n),this.hud.onInventoryClick=n=>this.handleInvClick(n),this.hud.onGearSlotClick=n=>this.unequipSlot(n),this.refreshUI(),this.hud.chat("Welcome to Thornrest Camp in the Whisperwood.","system"),this.hud.chat("Tap the ground to walk. Chop trees, mine rocks, or spar with the training dummy.","system"),this.hud.chat("A Frost Yeti stalks the north-east clearing — keep your distance until you are ready.","combat"),this.hud.chat("An Orc Scout prowls the south-west trail — spear ready, leather and tooth to loot.","combat"),this.hud.chat("Open Gear (C) to inspect your hero and equip or unequip items.","system"),this.hud.chat("Scroll the wheel or use + / − to zoom the camera.","system"),this.hud.chat("Your progress is saved in this browser.","system"),window.addEventListener("resize",()=>this.onResize()),this.animate()}setupLights(){const t=new zs(15923199,5929522,1.08);this.scene.add(t),this.sun=new Tn(16774880,2.08),this.sun.position.set(18,28,10),this.sun.castShadow=!0,this.sun.shadow.mapSize.set(2048,2048),this.sun.shadow.bias=-3e-4,this.sun.shadow.normalBias=.035,this.sun.shadow.radius=3.2,this.sun.shadow.camera.near=2,this.sun.shadow.camera.far=58,this.sun.shadow.camera.left=-24,this.sun.shadow.camera.right=24,this.sun.shadow.camera.top=24,this.sun.shadow.camera.bottom=-24,this.scene.add(this.sun),this.scene.add(this.sun.target),this.rim=new Tn(13690623,.48),this.rim.position.set(-14,10,-16),this.scene.add(this.rim);const e=new Tn(16769712,.46);e.position.set(-6,6,4),this.scene.add(e),this.scene.add(new Wh(6978696,.44))}setupReflectionEnv(){const t=new La(this.renderer),e=new Us;e.add(new zs(15923199,4020770,1.15));const n=new b(new rt(10,16,12),new pe({color:11848932,side:Oe}));e.add(n);const s=new b(new rt(2.2,12,10),new pe({color:16773576}));s.position.set(7,9,5),e.add(s);const o=new b(new vn(10,16),new pe({color:4880952}));o.rotation.x=-Math.PI/2,o.position.y=-1.6,e.add(o),this.scene.environment=t.fromScene(e,.04).texture,this.scene.environmentIntensity=.62,t.dispose()}buildWorld(){const t=(M,x,C,k=0)=>{M.position.set(x,we(x,C)+k,C)},e=lu();t(e,-3.5,-1.5),this.scene.add(e);const n=cu();t(n,-1.2,-.5),this.scene.add(n);const s=Ga();t(s,-2.4,-2.2),s.rotation.y=.3,this.scene.add(s);const o=Po();t(o,-4.2,-.4),this.scene.add(o);const r=Po();t(r,-4.55,.15),r.rotation.y=.6,this.scene.add(r);const a=Va();t(a,-2.8,.4),a.rotation.y=-.4,this.scene.add(a);const c=[[-8,-6],[8,-7],[-10,4],[9,5],[0,-10],[-6,8],[6,9],[10,0],[-11,-2]];for(const[M,x]of c){const C=new It,k=new b(new rt(.4+Math.random()*.2,7,5),new ye({color:2775592,flatShading:!0,roughness:.95}));k.position.y=.35,k.castShadow=!0,C.add(k);const G=new b(new rt(.28,6,4),new ye({color:3828272,flatShading:!0}));G.position.set(.25,.3,.1),G.castShadow=!0,C.add(G),C.position.set(M,we(M,x),x),this.scene.add(C)}[[4.5,-3],[6.2,-1.5],[8.2,.2],[7.4,2.6],[1.2,5.6],[-4.2,5.2],[-8.2,2.4],[-8.4,-2.2],[2,-6],[-2.5,-7],[8,-5],[-9.2,-.4]].forEach(([M,x],C)=>{const k=ru(C);k.position.set(M,we(M,x),x),this.scene.add(k),this.objects.push({kind:"tree",mesh:k,id:`tree_${C}`,hp:1,maxHp:1,depleted:!1,respawnAt:0})}),[{x:1.2,z:3.4,ore:"copper"},{x:-.3,z:4.1,ore:"copper"},{x:2.6,z:4,ore:"tin"},{x:-1.8,z:3.2,ore:"tin"},{x:.8,z:5.2,ore:"copper"},{x:3.4,z:2.2,ore:"copper"},{x:-3.2,z:2.8,ore:"tin"}].forEach((M,x)=>{const C=Ha(M.ore,x);C.position.set(M.x,we(M.x,M.z),M.z),this.scene.add(C),this.objects.push({kind:"rock",mesh:C,id:`rock_${x}`,hp:1,maxHp:1,depleted:!1,respawnAt:0,meta:{ore:M.ore}})});const u=au();u.position.set(2.5,we(2.5,-2.5),-2.5),this.scene.add(u);const f={kind:"dummy",mesh:u,id:"dummy_0",hp:50,maxHp:50,depleted:!1,respawnAt:0};this.objects.push(f),this.dummyTarget=f;const p=hu();p.position.set(Te.x,we(Te.x,Te.z),Te.z),p.rotation.y=Math.PI*.85,p.visible=!0,p.scale.setScalar(1.15),this.scene.add(p);const g={kind:"yeti",mesh:p,id:"yeti_0",hp:nh,maxHp:nh,depleted:!1,respawnAt:0};this.objects.push(g),this.yetiTarget=g;const _=tv();_.traverse(M=>{M===_||!M.isMesh||(M.position.y+=we(M.position.x,M.position.z))}),this.scene.add(_);const m=new It;m.name="fallingSnow";for(let M=0;M<48;M++){const x=new b(new rt(.035+Math.random()*.03,4,3),new pe({color:15267071,transparent:!0,opacity:.55+Math.random()*.35,depthWrite:!1}));x.position.set(2.5+Math.random()*5.5,1.5+Math.random()*6,5.5+Math.random()*4.5),x.userData.fall=.4+Math.random()*.9,x.userData.drift=(Math.random()-.5)*.35,x.userData.baseY=x.position.y,m.add(x)}this.scene.add(m);const d=uu();d.position.set(He.x,we(He.x,He.z),He.z),d.rotation.y=Math.PI*.25,this.scene.add(d);const S={kind:"orc",mesh:d,id:"orc_0",hp:sh,maxHp:sh,depleted:!1,respawnAt:0};this.objects.push(S),this.orcTarget=S,this.scene.add(ev());const w=Ga();t(w,-3.6,-2.6),w.rotation.y=-.5,this.scene.add(w);const v=Po();t(v,-1.8,-2.4),this.scene.add(v);const U=Va();t(U,-3.9,.9),U.rotation.y=.8,this.scene.add(U);const T=new b(new Qt(.22,.28,.35,7),new ye({color:4861972,flatShading:!0,roughness:.9}));T.position.set(.4,we(.4,-1.6)+.18,-1.6),T.castShadow=!0,this.scene.add(T);const A=new b(new rt(.08,8,6),new ye({color:16764006,emissive:16755251,emissiveIntensity:1.2,flatShading:!0}));A.position.set(-.2,we(-.2,-1.8)+.85,-1.8),this.scene.add(A);const I=new hc(16755285,.55,6);I.position.copy(A.position),this.scene.add(I)}bindInput(t){const e=n=>{this.studio.isOpen()||n.target!==t||(this.pointer.x=n.clientX/window.innerWidth*2-1,this.pointer.y=-(n.clientY/window.innerHeight)*2+1,this.handleWorldClick())};t.addEventListener("pointerdown",e),window.addEventListener("wheel",n=>{this.studio.isOpen()||n.target?.closest("#gear-panel, #inventory, #skills-panel, #chat, #studio")||(n.preventDefault(),this.nudgeZoom(Math.sign(n.deltaY)||1,.11))},{passive:!1}),window.addEventListener("keydown",n=>{if(!this.studio.isOpen()){if(this.keys.add(n.key.toLowerCase()),n.key==="1"&&this.handleAction("attack"),n.key==="2"&&this.handleAction("chop"),n.key==="3"&&this.handleAction("mine"),n.key==="4"&&this.handleAction("eat"),n.key==="5"&&this.handleAction("examine"),(n.key==="-"||n.key==="_")&&this.nudgeZoom(1,.16),(n.key==="="||n.key==="+")&&this.nudgeZoom(-1,.16),n.key.toLowerCase()==="k"){const s=document.getElementById("skills-panel");s&&(s.hidden=!s.hidden)}n.key.toLowerCase()==="c"&&this.hud.setGearOpen(!this.hud.isGearOpen())}}),window.addEventListener("keyup",n=>this.keys.delete(n.key.toLowerCase()))}handleWorldClick(){this.raycaster.setFromCamera(this.pointer,this.camera);const t=[];for(const s of this.objects)s.depleted&&s.kind!=="dummy"&&s.kind!=="yeti"&&s.kind!=="orc"||s.mesh.traverse(o=>{o.isMesh&&o.name!=="outline"&&t.push(o)});const e=this.raycaster.intersectObjects(t,!1);if(e.length>0){let s=e[0].object;for(;s&&!this.objects.find(r=>r.mesh===s);)s=s.parent;const o=this.objects.find(r=>r.mesh===s);if(o){this.interactWith(o);return}}const n=this.raycaster.intersectObject(this.ground);if(n.length>0){const s=n[0].point;this.pendingCombat=!1,this.pendingCombatTarget=null,this.pendingCombatChat="",this.pendingGather=null,this.startMove(s.x,s.z)}}interactWith(t){if(t.kind==="yeti"){if(t.depleted||t.hp<=0){this.hud.chat("The Frost Yeti lies slain. It will return before long.","system");return}this.yetiAggroed=!0,this.approachThenCombat(t,"You ready your bronze sword against the Frost Yeti!");return}if(t.kind==="orc"){if(t.depleted||t.hp<=0){this.hud.chat("The Orc Scout lies slain. Another will take its place.","system");return}this.orcAggroed=!0,this.approachThenCombat(t,"You ready your bronze sword against the Orc Scout!");return}if(t.kind==="dummy"){if(t.hp<=0){this.hud.chat("The training dummy is already collapsed.","system");return}this.approachThenCombat(t,"You ready your bronze sword against the training dummy.");return}if(t.depleted){this.hud.chat("That resource is depleted. Wait for it to respawn.","system");return}if(t.kind==="tree"){if(!this.save.equipped.hatchet){this.hud.chat(this.hasItem("bronze_hatchet")?"Equip your hatchet from the Gear window first.":"You need a hatchet to chop trees.","system"),this.hasItem("bronze_hatchet")&&this.hud.setGearOpen(!0);return}this.approachThenGather(t,2.4,"Chopping Whisperwood…");return}if(t.kind==="rock"){if(!this.save.equipped.pickaxe){this.hud.chat(this.hasItem("bronze_pickaxe")?"Equip your pickaxe from the Gear window first.":"You need a pickaxe to mine rocks.","system"),this.hasItem("bronze_pickaxe")&&this.hud.setGearOpen(!0);return}this.approachThenGather(t,2.6,`Mining ${t.meta?.ore==="tin"?"tin":"copper"}…`)}}combatName(t){return t.kind==="yeti"?"Frost Yeti":t.kind==="orc"?"Orc Scout":t.kind==="dummy"?"Training Dummy":t.kind}isMonster(t){return t.kind==="yeti"||t.kind==="orc"}monsterAttackRange(t){return t.kind==="yeti"?Ts:t.kind==="orc"?bs:cv}beginCombat(t,e){if(!this.save.equipped.weapon){this.hud.chat("Equip a weapon from the Gear window first.","system"),this.hud.setGearOpen(!0);return}this.hud.chat(e,"combat"),this.pendingGather=null,this.pendingCombat=!1,this.pendingCombatTarget=null,this.pendingCombatChat="",this.combatOorT=0,this.combatAbortT=0,this.activity={type:"combat",target:t,cooldown:.15,swingT:0,swingDur:ko,hitDone:!1},Fe(this.player,"sword"),this.hud.showTarget(this.combatName(t),t.hp/t.maxHp),this.combatCamPull=1}approachThenCombat(t,e){if(!this.save.equipped.weapon){this.hud.chat("Equip a weapon from the Gear window first.","system"),this.hud.setGearOpen(!0);return}const n=this.monsterAttackRange(t);if(this.distTo(t)>n*.92){const o=t.mesh.position.x-this.player.position.x,r=t.mesh.position.z-this.player.position.z,a=Math.hypot(o,r)||1,c=n*.78;this.startMove(t.mesh.position.x-o/a*c,t.mesh.position.z-r/a*c),this.pendingCombat=!0,this.pendingCombatTarget=t,this.pendingCombatChat=e,this.hud.chat(`You close on the ${this.combatName(t)}…`,"combat");return}this.beginCombat(t,e)}nearestCombatTarget(){let t=null,e=1/0;for(const n of this.objects){if(n.kind!=="yeti"&&n.kind!=="orc"&&n.kind!=="dummy"||n.hp<=0||n.depleted)continue;const s=this.distTo(n);s<e&&(e=s,t=n)}return e<16?t:null}approachThenGather(t,e,n){const s=t.mesh.position.x-this.player.position.x,o=t.mesh.position.z-this.player.position.z,r=Math.hypot(s,o);if(r>So){const a=t.mesh.position.x-s/r*(So*.85),c=t.mesh.position.z-o/r*(So*.85);this.startMove(a,c),this.pendingGather={obj:t,duration:e,label:n};return}this.faceToward(t.mesh.position.x,t.mesh.position.z),this.activity={type:"gather",target:t,elapsed:0,duration:e,label:n},Fe(this.player,t.kind==="tree"?"hatchet":"pickaxe"),this.hud.showProgress(n,0)}startMove(t,e){t=Math.max(-14,Math.min(14,t)),e=Math.max(-14,Math.min(14,e)),this.activity={type:"move",tx:t,tz:e},this.syncHeldTool(),this.moveMarker.position.set(t,we(t,e)+.06,e),this.moveMarker.visible=!0,this.hud.hideProgress(),this.hud.hideTarget()}handleAction(t){switch(t){case"attack":{if(!this.save.equipped.weapon){this.hud.chat("Equip a weapon from the Gear window first.","system"),this.hud.setGearOpen(!0);return}const e=this.nearestCombatTarget();if(!e){this.hud.chat("No enemies nearby to attack.","system");return}const n=this.monsterAttackRange(e);if(this.distTo(e)>n+2){this.hud.chat(`${this.combatName(e)} is too far. Walk closer.`,"system"),this.pendingGather=null;const o=e.mesh.position.x-this.player.position.x,r=e.mesh.position.z-this.player.position.z,a=Math.hypot(o,r)||1;this.startMove(e.mesh.position.x-o/a*(n*.78),e.mesh.position.z-r/a*(n*.78)),this.pendingCombat=!0,this.pendingCombatTarget=e,this.pendingCombatChat=`You ready your bronze sword against the ${this.combatName(e)}!`;return}this.interactWith(e);break}case"chop":{const e=this.nearest("tree");if(!e){this.hud.chat("No trees nearby.","system");return}this.interactWith(e);break}case"mine":{const e=this.nearest("rock");if(!e){this.hud.chat("No rocks nearby.","system");return}this.interactWith(e);break}case"eat":this.eatFood();break;case"examine":this.examineNearest();break}}nearest(t){let e=null,n=1/0;for(const s of this.objects){if(s.kind!==t||s.depleted&&t!=="dummy")continue;const o=this.distTo(s);o<n&&(n=o,e=s)}return n<14?e:null}examineNearest(){const t=[...this.objects].sort((e,n)=>this.distTo(e)-this.distTo(n))[0];if(!t||this.distTo(t)>5){this.hud.chat("You examine the Whisperwood clearing. Birds call from the canopy.","system");return}t.kind==="tree"?this.hud.chat("A tall Whisperwood tree. Good for training woodcutting.","system"):t.kind==="rock"?this.hud.chat(`A rocky outcrop laced with ${t.meta?.ore??"ore"}. Suitable for mining.`,"system"):t.kind==="yeti"?this.hud.chat("A massive Frost Yeti. Dark stripes mark its fur; amber eyes burn with hunger.","combat"):t.kind==="orc"?this.hud.chat("An Orc Scout in spiked tan fur and leather. White tusks and a long spear gleam.","combat"):this.hud.chat("A stuffed training dummy. Safe practice for combat skills.","system")}eatFood(){const t=this.save.inventory.findIndex(e=>e.id==="camp_rations");if(t<0){this.hud.chat("You have no camp rations left.","system");return}if(this.save.hp>=this.save.maxHp){this.hud.chat("You are already at full health.","system");return}this.consumeAt(t,1),this.save.hp=Math.min(this.save.maxHp,this.save.hp+25),this.hud.chat("You eat camp rations and recover 25 health.","loot"),this.refreshUI(),this.persist()}handleInvClick(t){const e=this.save.inventory[t];if(!e)return;const n=jn[e.id];if(n?.slot){this.equipFromInventory(t);return}this.hud.chat(`${n?.name??e.id}${e.qty>1?` ×${e.qty}`:""}`,"system"),e.id==="camp_rations"&&this.eatFood()}heldTool(){if(this.activity.type==="combat"||this.combatAbortT>0)return this.save.equipped.weapon?"sword":null;if(this.activity.type==="gather"){const t=this.activity.target.kind;if(t==="tree")return this.save.equipped.hatchet?"hatchet":null;if(t==="rock")return this.save.equipped.pickaxe?"pickaxe":null}return this.save.equipped.weapon?"sword":null}syncHeldTool(){Fe(this.player,this.heldTool())}equipFromInventory(t){const e=this.save.inventory[t];if(!e)return;const n=jn[e.id];if(!n?.slot)return;const s=this.save.equipped[n.slot];this.save.inventory.splice(t,1),s&&this.addItem(s,1),this.save.equipped[n.slot]=e.id,this.syncHeldTool(),this.hud.setGearOpen(!0),this.hud.chat(`You equip the ${n.name}.`,"system"),this.refreshUI(),this.hud.setEquipment(this.save,`Equipped ${n.name}`),this.hud.showSlotPreview(n.slot,this.save),this.persist()}unequipSlot(t){const e=this.save.equipped[t];if(!e){this.hud.inspectGear(`${t[0].toUpperCase()}${t.slice(1)} slot is empty`);return}if(this.save.inventory.length>=28){this.hud.chat("Inventory full — cannot unequip.","system");return}this.save.equipped[t]=null,this.addItem(e,1),this.syncHeldTool();const n=jn[e];this.hud.setEquipment(this.save,`Unequipped ${n?.name??e}`),this.hud.chat(`You unequip the ${n?.name??e}.`,"system"),this.refreshUI(),this.persist()}distTo(t){return Math.hypot(t.mesh.position.x-this.player.position.x,t.mesh.position.z-this.player.position.z)}faceToward(t,e,n=1/30,s=10){const o=t-this.player.position.x,r=e-this.player.position.z;if(Math.hypot(o,r)>.01){const a=Math.atan2(o,r);this.player.rotation.y=Es(this.player.rotation.y,a,s,n)}}hasItem(t){return this.save.inventory.some(e=>e.id===t)}addItem(t,e=1){const n=jn[t];if(!n)return!1;if(n.stackable){const s=this.save.inventory.find(o=>o.id===t);if(s)return s.qty+=e,!0}return this.save.inventory.length>=28?(this.hud.chat("Inventory full!","system"),!1):(this.save.inventory.push({id:t,qty:e}),!0)}consumeAt(t,e){const n=this.save.inventory[t];n&&(n.qty-=e,n.qty<=0&&this.save.inventory.splice(t,1))}grantXp(t,e){const n=this.save.skills[t],s=n.level;n.xp+=e,n.level=s_(n.xp),this.hud.chat(`+${e} ${t} XP`,"xp"),this.vfx.spawnXp(this.player.position,e,vv[t]),n.level>s&&(this.hud.chat(`Congratulations! Your ${t} level is now ${n.level}.`,"xp"),t==="constitution"&&(this.save.maxHp=100+(n.level-10)*10,this.save.hp=Math.min(this.save.hp+10,this.save.maxHp)))}update(t){this.save.stamina=Math.min(100,this.save.stamina+t*4),this.save.focus=Math.min(100,this.save.focus+t*2),this.save.hp<this.save.maxHp&&(this.save.hp=Math.min(this.save.maxHp,this.save.hp+t*1.5));const e=performance.now()/1e3;for(const s of this.objects)s.depleted&&s.kind!=="dummy"&&s.kind!=="yeti"&&s.kind!=="orc"&&e>=s.respawnAt&&(s.depleted=!1,s.mesh.visible=!0,this.hud.chat(s.kind==="tree"?"A Whisperwood tree has grown back.":"An ore rock has respawned.","system")),s.kind==="dummy"&&s.hp<=0&&e>=s.respawnAt&&(s.hp=s.maxHp,s.depleted=!1,s.mesh.visible=!0,s.mesh.rotation.set(0,0,0),s.mesh.position.y=we(s.mesh.position.x,s.mesh.position.z),s.mesh.scale.setScalar(1),this.hud.chat("The training dummy is patched up and ready again.","system")),s.kind==="yeti"&&s.depleted&&e>=s.respawnAt&&(s.hp=s.maxHp,s.depleted=!1,s.mesh.visible=!0,s.mesh.rotation.set(0,Math.PI*.85,0),s.mesh.scale.setScalar(1.15),s.mesh.position.set(Te.x,we(Te.x,Te.z),Te.z),this.deathAnims=this.deathAnims.filter(o=>o.mesh!==s.mesh),this.yetiAggroed=!1,this.yetiAttackCd=0,this.yetiSwipeT=0,this.yetiHitDone=!1,this.yetiTeleDone=!1,this.yetiMoveBlend=0,this.yetiGait=0,this.yetiSmoother.reset(),wo(s.mesh,0),_i(s.mesh,this.animTime,!1),this.hud.chat("A Frost Yeti stomps back into the north-east clearing!","combat")),s.kind==="orc"&&s.depleted&&e>=s.respawnAt&&(s.hp=s.maxHp,s.depleted=!1,s.mesh.visible=!0,s.mesh.rotation.set(0,Math.PI*.25,0),s.mesh.scale.setScalar(1),s.mesh.position.set(He.x,we(He.x,He.z),He.z),this.orcAggroed=!1,this.orcAttackCd=0,this.orcSwipeT=0,this.orcHitDone=!1,this.orcGait=0,this.orcSmoother.reset(),Hr(s.mesh,0),Zi(s.mesh,this.animTime,!1),this.hud.chat("An Orc Scout stalks back onto the south-west trail!","combat"));const n=this.scene.getObjectByName("fallingSnow");if(n&&n.children.forEach(s=>{s.position.y-=s.userData.fall*t,s.position.x+=s.userData.drift*t,s.position.y<.05&&(s.position.y=6+Math.random()*2,s.position.x=2.5+Math.random()*5.5,s.position.z=5.5+Math.random()*4.5)}),this.scene.traverse(s=>{if(s.name==="flame"&&(s.scale.y=.9+Math.sin(e*8)*.15,s.rotation.y+=t*2),s.name==="flameGlow"){const o=.9+Math.sin(e*6)*.2;s.scale.setScalar(o)}if(s.name==="yetiBreath"){const o=this.yetiAggroed?1.35:1,r=(.85+Math.sin(e*3.4)*.45)*o;s.scale.set(r,.9+r*.5,r*1.25);const a=s.material;a&&a.opacity!==void 0&&(a.opacity=(.4+Math.sin(e*4.2)*.22)*(this.yetiAggroed?1.15:1))}if(s.name==="yetiBreathMist"){const o=this.yetiAggroed?1.3:1,r=(.85+Math.sin(e*2.8+s.position.z)*.4)*o;s.scale.setScalar(r);const a=s.material;a&&a.opacity!==void 0&&(a.opacity=Math.max(.08,.28*r))}if(s.name==="yetiEyeGlow"){const o=this.yetiAggroed||this.activity.type==="combat"&&this.activity.target?.kind==="yeti",r=.95+Math.sin(e*6.2)*(o?.55:.28);s.scale.setScalar(r*(o?1.65:1.1));const a=s.material;a&&a.opacity!==void 0&&(a.opacity=o?.72+Math.sin(e*7)*.18:.45)}if(s.name==="yetiEye"){const o=this.yetiAggroed||this.activity.type==="combat"&&this.activity.target?.kind==="yeti",r=s.material;if(r&&r.emissiveIntensity!==void 0){const a=o?1.35:.55;r.emissiveIntensity=a+Math.sin(e*6.8)*(o?.35:.12)}}if(s.name==="yetiEyeLight"){const o=this.yetiAggroed||this.activity.type==="combat"&&this.activity.target?.kind==="yeti",r=s;r.intensity=(o?1.85:.85)+Math.sin(e*7.1)*(o?.55:.15),r.distance=o?5.2:3.4}}),this.sun.target.position.set(this.player.position.x,this.player.position.y,this.player.position.z),this.sun.target.updateMatrixWorld(),this.animTime+=t,this.playerFlinch>0){const s=this.playerFlinch>.65?2.4:3.6;if(this.playerFlinch=Math.max(0,this.playerFlinch-t*s),$l(this.player,this.playerFlinch,this.playerFlinch>.65?1.1:.55),this.player.position.x+=this.playerKnock.x*t,this.player.position.z+=this.playerKnock.z*t,this.playerKnock.multiplyScalar(Math.max(0,1-t*5.5)),this.playerFlinch<=0){this.player.rotation.z=0,this.player.rotation.x=0;const o=this.player.getObjectByName("playerTorso");o&&(o.rotation.y=0)}}for(let s=this.hitReacts.length-1;s>=0;s--){const o=this.hitReacts[s];o.t-=t;const r=Math.max(0,Math.min(1,o.t/.35));if($l(o.mesh,r,o.inten),o.t<=0){o.mesh.rotation.z=0,o.mesh.rotation.x=0;const a=o.mesh.getObjectByName("playerTorso")||o.mesh.getObjectByName("yetiBody")||o.mesh.getObjectByName("orcBody");a&&(a.rotation.y=0),this.hitReacts.splice(s,1)}}for(let s=this.deathAnims.length-1;s>=0;s--){const o=this.deathAnims[s];o.t+=t;const r=Math.min(1,o.t/o.dur);M_(o.mesh,o.kind,r),o.mesh.position.y+=we(o.mesh.position.x,o.mesh.position.z),r>=1&&(o.mesh.visible=!1,o.mesh.rotation.set(0,o.mesh.rotation.y,0),o.mesh.scale.setScalar(o.kind==="yeti"?1.15:1),o.mesh.position.y=0,this.deathAnims.splice(s,1))}if(this.syncHeldTool(),this.activity.type==="move"){const{tx:s,tz:o}=this.activity,r=s-this.player.position.x,a=o-this.player.position.z,c=Math.hypot(r,a),l=c<.55?c/.55*Xr:Xr;if(this.moveSpeedCur<l?this.moveSpeedCur=Math.min(l,this.moveSpeedCur+uv*t):this.moveSpeedCur=Math.max(l,this.moveSpeedCur-dv*t),this.moveBlend=Math.min(1,this.moveBlend+t*4.5),c<.12){if(this.player.position.x=s,this.player.position.z=o,this.moveMarker.visible=!1,this.stoppingSteps=0,this.moveBlend=0,this.activity={type:"idle"},this.moveSpeedCur=0,this.pendingGather){const h=this.pendingGather;this.pendingGather=null,this.approachThenGather(h.obj,h.duration,h.label)}else if(this.pendingCombat){this.pendingCombat=!1;const h=this.pendingCombatTarget??this.nearestCombatTarget(),u=this.pendingCombatChat||(h?`You ready your bronze sword against the ${this.combatName(h)}!`:"");this.pendingCombatTarget=null,this.pendingCombatChat="",h&&h.hp>0&&!h.depleted&&(h.kind==="yeti"&&(this.yetiAggroed=!0),h.kind==="orc"&&(this.orcAggroed=!0),this.beginCombat(h,u))}}else{const h=c||1,u=Math.min(c,this.moveSpeedCur*t);this.player.position.x+=r/h*u,this.player.position.z+=a/h*u,this.lastMoveDir.set(r/h,0,a/h);let p=Math.atan2(r,a)-this.player.rotation.y;for(;p>Math.PI;)p-=Math.PI*2;for(;p<-Math.PI;)p+=Math.PI*2;const g=Math.abs(p)>1.2?7:11;this.faceToward(s,o,t,g);const _=Math.min(1.05,.45+this.moveSpeedCur/Xr*.55),m=Math.max(Ba(_)*.5,Math.PI*this.moveSpeedCur/x_(_));this.gaitPhase+=m*t,Bo(this.player,this.gaitPhase,_,this.moveBlend),this.save.stamina=Math.max(0,this.save.stamina-t*2)}}else if(this.activity.type==="gather"){const s=this.activity;if(s.target.depleted)this.activity={type:"idle"},this.syncHeldTool(),Jn(this.player),this.hud.hideProgress();else if(this.distTo(s.target)>So+.35)this.activity={type:"idle"},this.syncHeldTool(),Jn(this.player),this.hud.hideProgress(),this.hud.chat("You move too far away.","system");else{s.elapsed+=t,this.hud.showProgress(s.label,s.elapsed/s.duration),this.faceToward(s.target.mesh.position.x,s.target.mesh.position.z,t,8),this.toolSwing+=t;const o=this.toolSwing*1.35%1;if(ka(this.player,o,s.target.kind==="tree"?"tree":"rock"),Math.floor(s.elapsed*4)!==Math.floor((s.elapsed-t)*4)){const r=s.target.mesh.position.clone();r.y=s.target.kind==="tree"?1.05:.7,s.target.kind==="tree"?this.vfx.spawnWoodchips(r,12):this.vfx.spawnMineSparks(r,14)}s.elapsed>=s.duration&&(this.completeGather(s.target),this.activity={type:"idle"},this.syncHeldTool(),Jn(this.player),this.hud.hideProgress())}}else if(this.activity.type==="combat"){const s=this.activity,o=s.target;if(this.hud.showTarget(this.combatName(o),Math.max(0,o.hp)/o.maxHp),o.hp<=0||o.depleted)this.activity={type:"idle"},this.syncHeldTool(),Jn(this.player),this.hud.hideTarget(),this.combatCamPull=0,this.combatOorT=0;else{const r=this.monsterAttackRange(o),a=r+.55,c=r+1.45;let l=this.distTo(o);const h=s.swingT>0&&s.swingT/s.swingDur<Zl+.08;if(l>a&&l<c+.35&&h){const f=o.mesh.position.x-this.player.position.x,p=o.mesh.position.z-this.player.position.z,g=Math.hypot(f,p)||1,_=Math.min(l-r*.88,3.6*t);this.player.position.x+=f/g*_,this.player.position.z+=p/g*_,l=this.distTo(o),this.combatOorT=Math.max(0,this.combatOorT-t*1.5)}else if(l>a&&l<=c&&!h){const f=o.mesh.position.x-this.player.position.x,p=o.mesh.position.z-this.player.position.z,g=Math.hypot(f,p)||1,_=Math.min(l-r*.9,2.4*t);this.player.position.x+=f/g*_,this.player.position.z+=p/g*_,l=this.distTo(o),this.combatOorT+=t*.55}else l>c?this.combatOorT+=t:this.combatOorT=Math.max(0,this.combatOorT-t*2.5);const u=h?.55:.3;if(l>c&&this.combatOorT>=u&&!h)this.abortCombatSoft(t,!0);else{if(this.faceToward(o.mesh.position.x,o.mesh.position.z,t,10),this.isMonster(o)){const f=this.player.position.x-o.mesh.position.x,p=this.player.position.z-o.mesh.position.z;Math.hypot(f,p)>.01&&(o.mesh.rotation.y=Es(o.mesh.rotation.y,Math.atan2(f,p),6,t))}if(s.swingT>0){s.swingT+=t;const f=Math.min(1,s.swingT/s.swingDur);if(nu(this.player,f),!this.playerTeleDone&&f<.12){this.playerTeleDone=!0;const p=b_*s.swingDur;this.vfx.spawnTelegraph(this.player.position.clone(),!1,p,.7)}!s.hitDone&&f>=y_&&f<=Zl+.05&&this.distTo(o)<=r+.95&&(s.hitDone=!0,this.swingAtTarget(o)),f>=1&&(s.swingT=0,s.hitDone=!1,this.playerTeleDone=!1,s.cooldown=.72,Fe(this.player,"sword"))}else s.cooldown-=t,yi(this.player,this.animTime,!0),s.cooldown<=0&&this.distTo(o)<=a+.2&&(s.swingT=.001,s.swingDur=ko,s.hitDone=!1,this.playerTeleDone=!1,Fe(this.player,"sword"))}}}else this.syncHeldTool(),this.stoppingSteps>0?(this.stoppingSteps-=t,this.moveBlend=Math.max(0,this.moveBlend-t*3.5),this.gaitPhase+=4.5*t,Bo(this.player,this.gaitPhase,.4,Math.max(.15,this.moveBlend))):(this.moveBlend=Math.max(0,this.moveBlend-t*5),this.moveSpeedCur=0,yi(this.player,this.animTime)),this.combatCamPull=Math.max(0,this.combatCamPull-t*.6);this.updateYetiAI(t),this.updateOrcAI(t),this.vfx.update(t),this.updateCombatTreeFade(t),this.combatAbortT>0&&(this.combatAbortT=Math.max(0,this.combatAbortT-t),yi(this.player,this.animTime),this.combatAbortT<=0&&(this.syncHeldTool(),Jn(this.player))),this.poseSmoother.apply(this.player,t,this.activity.type==="combat"?26:18),this.yetiTarget&&this.yetiSmoother.apply(this.yetiTarget.mesh,t,this.yetiAggroed?22:16),this.orcTarget&&this.orcSmoother.apply(this.orcTarget.mesh,t,this.orcAggroed?24:16),this.snapMoversToGround(),J_(this.animTime),this.updateCamera(t),this.save.x=this.player.position.x,this.save.z=this.player.position.z,this.saveTimer+=t,this.saveTimer>=fv&&(this.saveTimer=0,this.persist()),this.hud.setOrbs(this.save.hp,this.save.maxHp,this.save.focus,this.save.stamina),this.drawMinimapMarkers()}completeGather(t){if(t.kind==="tree"){if(!this.addItem("whisper_logs",1))return;this.grantXp("woodcutting",25),this.hud.chat("You chop some Whisper Logs.","loot"),this.vfx.spawnWoodchips(t.mesh.position.clone().setY(1.1),22),t.depleted=!0,t.mesh.visible=!1,t.respawnAt=performance.now()/1e3+12}else if(t.kind==="rock"){const e=t.meta?.ore==="tin"?"tin_ore":"copper_ore";if(!this.addItem(e,1))return;this.grantXp("mining",28),this.hud.chat(`You mine some ${jn[e].name}.`,"loot"),this.vfx.spawnMineSparks(t.mesh.position.clone().setY(.7),24),t.depleted=!0,t.mesh.visible=!1,t.respawnAt=performance.now()/1e3+14}this.refreshUI(),this.persist()}swingAtTarget(t){const e=this.save.skills.attack.level,n=this.save.skills.strength.level,s=.65+e*.01,o=this.combatName(t);if(Math.random()>s){this.hud.chat(`You swing and miss the ${o}.`,"combat");return}const r=3+Math.floor(Math.random()*(4+n));t.hp-=r;const a=t.kind==="yeti"?18:t.kind==="orc"?15:12,c=t.kind==="yeti"?14:t.kind==="orc"?12:8,l=t.kind==="yeti"?8:t.kind==="orc"?6:4;this.grantXp("attack",a),this.grantXp("strength",c),this.grantXp("constitution",l);const h=t.mesh.position.clone().setY(1.25);this.vfx.spawnHitSparks(h,14+Math.min(12,r)),this.vfx.spawnImpactBurst(h,t.kind==="yeti"?16:20,t.kind==="yeti"),this.vfx.spawnDamage(t.mesh.position.clone().setY(1.5),r,r>=8),j_(t.mesh,r>=10?260:160);const u=r>=12?1.25:r>=8?.9:.5,f=r>=12?.28:r>=8?.18:.1,p=Math.atan2(t.mesh.position.x-this.player.position.x,t.mesh.position.z-this.player.position.z);if(t.mesh.position.x+=Math.sin(p)*f,t.mesh.position.z+=Math.cos(p)*f,this.hitReacts.push({mesh:t.mesh,t:u>1?.48:.28,inten:u}),t.kind==="yeti"&&(this.vfx.spawnIceBurst(t.mesh.position.clone(),12),this.yetiAggroed=!0),t.kind==="orc"&&(this.vfx.spawnSpearThrust(t.mesh.position.clone(),8),this.orcAggroed=!0),t.kind==="dummy"){const g=Math.random()<.15?1:0;g?(this.save.hp=Math.max(1,this.save.hp-g),this.hud.chat(`You hit the dummy for ${r}. Splinter grazes you (-${g}).`,"combat")):this.hud.chat(`You hit the training dummy for ${r} damage.`,"combat")}else t.kind==="orc"?this.hud.chat(`You strike the Orc Scout for ${r} damage!`,"combat"):this.hud.chat(`You strike the Frost Yeti for ${r} damage!`,"combat");t.hp<=0?(t.hp=0,t.kind==="yeti"?this.onYetiDeath(t):t.kind==="orc"?this.onOrcDeath(t):this.onDummyDeath(t)):this.hud.showTarget(o,t.hp/t.maxHp),this.refreshUI(),this.persist()}onDummyDeath(t){t.respawnAt=performance.now()/1e3+8,this.deathAnims.push({mesh:t.mesh,kind:"dummy",t:0,dur:.85}),this.hud.chat("The training dummy collapses! It will be repaired shortly.","combat"),this.grantXp("defence",15),this.activity={type:"idle"},this.syncHeldTool(),Jn(this.player),this.hud.hideTarget(),this.combatCamPull=0}onYetiDeath(t){t.depleted=!0,t.respawnAt=performance.now()/1e3+pv,this.yetiAggroed=!1,this.yetiAttackCd=0,this.yetiSwipeT=0,this.vfx.spawnIceBurst(t.mesh.position.clone().setY(1.2),28),this.vfx.spawnImpactBurst(t.mesh.position.clone().setY(1),16,!0),this.deathAnims.push({mesh:t.mesh,kind:"yeti",t:0,dur:1.35}),this.hud.chat("The Frost Yeti collapses in a burst of frost!","combat"),this.grantXp("defence",28),this.grantXp("attack",12),this.grantXp("strength",10),this.grantXp("constitution",10),this.addItem("yeti_fur",1)&&this.hud.chat("You loot Yeti Fur.","loot"),Math.random()<.55&&this.addItem("frost_claw",1)&&this.hud.chat("You pry free a Frost Claw!","loot"),this.activity={type:"idle"},this.syncHeldTool(),this.hud.hideTarget(),this.refreshUI(),this.persist()}onOrcDeath(t){t.depleted=!0,t.respawnAt=performance.now()/1e3+gv,this.orcAggroed=!1,this.orcAttackCd=0,this.orcSwipeT=0,this.vfx.spawnSpearThrust(t.mesh.position.clone().setY(1.1),16),this.vfx.spawnHitSparks(t.mesh.position.clone().setY(1),20),this.vfx.spawnImpactBurst(t.mesh.position.clone().setY(1),14,!1),this.deathAnims.push({mesh:t.mesh,kind:"orc",t:0,dur:1.15}),this.hud.chat("The Orc Scout falls! Its spear clatters to the dirt.","combat"),this.grantXp("defence",22),this.grantXp("attack",10),this.grantXp("strength",8),this.grantXp("constitution",8),this.addItem("orc_tooth",1)&&this.hud.chat("You loot an Orc Tooth.","loot"),Math.random()<.65&&this.addItem("scout_leather",1)&&this.hud.chat("You strip Scout Leather from the vest.","loot"),this.activity={type:"idle"},this.syncHeldTool(),this.hud.hideTarget(),this.refreshUI(),this.persist()}updateYetiAI(t){const e=this.yetiTarget;if(!e||e.depleted||e.hp<=0){this.yetiSwipeT>0&&(this.yetiSwipeT=Math.max(0,this.yetiSwipeT-t));return}const n=this.distTo(e),s=Math.hypot(e.mesh.position.x-Te.x,e.mesh.position.z-Te.z);if(!this.yetiAggroed&&n<=Vr&&(this.yetiAggroed=!0,this.hud.chat("The Frost Yeti snarls and charges!","combat"),(this.activity.type!=="combat"||this.activity.target!==e)&&this.beginCombat(e,"The Frost Yeti engages you!")),!this.yetiAggroed){const c=Te.x-e.mesh.position.x,l=Te.z-e.mesh.position.z,h=Math.hypot(c,l);if(h>.15){const u=Math.min(h,2.8*t);e.mesh.position.x+=c/h*u,e.mesh.position.z+=l/h*u,e.mesh.rotation.y=Es(e.mesh.rotation.y,Math.atan2(c,l),4,t),e.mesh.position.y=0,_i(e.mesh,this.tickMonsterGait("yeti",2.8,t),!0,Math.min(1,h/2)),wo(e.mesh,0);return}e.mesh.position.set(Te.x,0,Te.z),_i(e.mesh,this.animTime,!1),wo(e.mesh,0);return}const o=this.player.position.x-e.mesh.position.x,r=this.player.position.z-e.mesh.position.z;Math.hypot(o,r)>.01&&(e.mesh.rotation.y=Es(e.mesh.rotation.y,Math.atan2(o,r),5,t));let a=!1;if(n>Ts&&n<Vr+5&&s<7.5){this.yetiMoveBlend=Math.min(1,this.yetiMoveBlend+t*2.2);const c=Math.min(n-Ts*.85,2.35*this.yetiMoveBlend*t),l=Math.hypot(o,r)||1;e.mesh.position.x+=o/l*c,e.mesh.position.z+=r/l*c,a=!0;const h=Te.x,u=Te.z,f=e.mesh.position.x-h,p=e.mesh.position.z-u,g=Math.hypot(f,p);g>7.5&&(e.mesh.position.x=h+f/g*7.5,e.mesh.position.z=u+p/g*7.5)}else this.yetiMoveBlend=Math.max(0,this.yetiMoveBlend-t*3);if(n>Vr+7||s>8.5){this.yetiAggroed=!1,this.yetiSwipeT=0,this.hud.chat("The Frost Yeti loses interest and returns to the clearing.","system");const c=e.mesh.position.x,l=e.mesh.position.z;e.mesh.position.x+=(Te.x-e.mesh.position.x)*Math.min(1,t*.9),e.mesh.position.z+=(Te.z-e.mesh.position.z)*Math.min(1,t*.9),this.activity.type==="combat"&&this.activity.target===e&&(this.activity={type:"idle"},this.syncHeldTool(),Jn(this.player),this.hud.hideTarget());const h=t>1e-5?Math.hypot(e.mesh.position.x-c,e.mesh.position.z-l)/t:0;_i(e.mesh,this.tickMonsterGait("yeti",h,t),!0,.7);return}if(this.yetiSwipeT>0){this.yetiSwipeT+=t;const c=Math.min(1,this.yetiSwipeT/Ho);if(iu(e.mesh,c),!this.yetiTeleDone){this.yetiTeleDone=!0;const l=A_*Ho+.08;this.vfx.spawnTelegraph(e.mesh.position.clone(),!0,l,1.35),this.vfx.spawnArcTelegraph(e.mesh.position.clone(),e.mesh.rotation.y,!0,l)}!this.yetiHitDone&&c>=w_&&c<=S_+.05&&(this.yetiHitDone=!0,this.yetiMeleeHit(e)),c>=1&&(this.yetiSwipeT=0,this.yetiHitDone=!1,this.yetiTeleDone=!1,wo(e.mesh,0))}else{const c=Math.max(this.yetiMoveBlend,a?.4:0),l=a?this.tickMonsterGait("yeti",2.35*this.yetiMoveBlend,t):this.animTime;_i(e.mesh,l,a,c),this.yetiAttackCd-=t,n<=Ts+.4&&this.yetiAttackCd<=0&&(this.yetiAttackCd=2.55,this.yetiSwipeT=.001,this.yetiHitDone=!1,this.yetiTeleDone=!1)}}yetiMeleeHit(t){if(this.distTo(t)>Ts+.65)return;const n=this.save.skills.defence.level,s=ih+Math.floor(Math.random()*(mv-ih+1)),o=Math.max(2,s-Math.floor(n/5));this.save.hp=Math.max(0,this.save.hp-o),this.vfx.spawnClawSlash(this.player.position.clone(),14),this.vfx.spawnIceBurst(this.player.position.clone(),16),this.vfx.spawnImpactBurst(this.player.position.clone().setY(1.1),16,!0),this.vfx.spawnDamage(this.player.position.clone().setY(1.3),o),this.playerFlinch=o>=8?1.15:.75;const r=Math.atan2(this.player.position.x-t.mesh.position.x,this.player.position.z-t.mesh.position.z),a=o>=8?3.4:2.4;this.playerKnock.set(Math.sin(r)*a,0,Math.cos(r)*a),this.hud.chat(`The Frost Yeti swipes you for ${o} damage!`,"combat"),this.hud.setOrbs(this.save.hp,this.save.maxHp,this.save.focus,this.save.stamina),this.save.hp<=0&&(this.save.hp=Math.max(10,Math.floor(this.save.maxHp*.35)),this.player.position.set(0,0,2),this.yetiAggroed=!1,this.activity={type:"idle"},this.syncHeldTool(),this.hud.hideTarget(),this.hud.chat("You fall! You wake by the Thornrest campfire, battered but alive.","combat"),t.mesh.position.set(Te.x,0,Te.z)),this.activity.type!=="combat"&&t.hp>0&&!t.depleted&&this.beginCombat(t,"You raise your guard against the Frost Yeti!"),this.refreshUI(),this.persist()}updateOrcAI(t){const e=this.orcTarget;if(!e||e.depleted||e.hp<=0){this.orcSwipeT>0&&(this.orcSwipeT=Math.max(0,this.orcSwipeT-t));return}const n=this.distTo(e),s=Math.hypot(e.mesh.position.x-He.x,e.mesh.position.z-He.z);if(!this.orcAggroed&&n<=Wr&&(this.orcAggroed=!0,this.hud.chat("The Orc Scout snarls and levels its spear!","combat"),(this.activity.type!=="combat"||this.activity.target!==e)&&this.beginCombat(e,"The Orc Scout engages you!")),!this.orcAggroed){Zi(e.mesh,this.animTime,!1),Hr(e.mesh,0);return}const o=this.player.position.x-e.mesh.position.x,r=this.player.position.z-e.mesh.position.z;Math.hypot(o,r)>.01&&(e.mesh.rotation.y=Es(e.mesh.rotation.y,Math.atan2(o,r),7,t));let a=!1;if(n>bs&&n<Wr+5&&s<7.5){this.orcMoveBlend=Math.min(1,this.orcMoveBlend+t*3.5);const c=Math.min(n-bs*.85,3.2*this.orcMoveBlend*t),l=Math.hypot(o,r)||1;e.mesh.position.x+=o/l*c,e.mesh.position.z+=r/l*c,a=!0;const h=He.x,u=He.z,f=e.mesh.position.x-h,p=e.mesh.position.z-u,g=Math.hypot(f,p);g>7.5&&(e.mesh.position.x=h+f/g*7.5,e.mesh.position.z=u+p/g*7.5)}else this.orcMoveBlend=Math.max(0,this.orcMoveBlend-t*4);if(n>Wr+7||s>8.5){this.orcAggroed=!1,this.orcSwipeT=0,this.hud.chat("The Orc Scout loses interest and returns to the trail.","system");const c=e.mesh.position.x,l=e.mesh.position.z;e.mesh.position.x+=(He.x-e.mesh.position.x)*Math.min(1,t*1.1),e.mesh.position.z+=(He.z-e.mesh.position.z)*Math.min(1,t*1.1),this.activity.type==="combat"&&this.activity.target===e&&(this.activity={type:"idle"},this.syncHeldTool(),Jn(this.player),this.hud.hideTarget());const h=t>1e-5?Math.hypot(e.mesh.position.x-c,e.mesh.position.z-l)/t:0;Zi(e.mesh,this.tickMonsterGait("orc",h,t),!0,.75);return}if(this.orcSwipeT>0){this.orcSwipeT+=t;const c=Math.min(1,this.orcSwipeT/Go);if(su(e.mesh,c),!this.orcTeleDone){this.orcTeleDone=!0;const l=R_*Go+.06;this.vfx.spawnTelegraph(e.mesh.position.clone(),!1,l,1.1)}!this.orcHitDone&&c>=E_&&c<=T_+.05&&(this.orcHitDone=!0,this.orcMeleeHit(e)),c>=1&&(this.orcSwipeT=0,this.orcHitDone=!1,this.orcTeleDone=!1,Hr(e.mesh,0))}else{const c=Math.max(this.orcMoveBlend,a?.45:0),l=a?this.tickMonsterGait("orc",3.2*this.orcMoveBlend,t):this.animTime;Zi(e.mesh,l,a,c),this.orcAttackCd-=t,n<=bs+.4&&this.orcAttackCd<=0&&(this.orcAttackCd=2.05,this.orcSwipeT=.001,this.orcHitDone=!1,this.orcTeleDone=!1)}}orcMeleeHit(t){if(this.distTo(t)>bs+.65)return;const n=this.save.skills.defence.level,s=oh+Math.floor(Math.random()*(_v-oh+1)),o=Math.max(2,s-Math.floor(n/5));this.save.hp=Math.max(0,this.save.hp-o),this.vfx.spawnSpearThrust(this.player.position.clone(),14),this.vfx.spawnHitSparks(this.player.position.clone().setY(1.1),14),this.vfx.spawnImpactBurst(this.player.position.clone().setY(1.05),16,!1),this.vfx.spawnDamage(this.player.position.clone().setY(1.3),o),this.playerFlinch=o>=7?1.05:.7;const r=Math.atan2(this.player.position.x-t.mesh.position.x,this.player.position.z-t.mesh.position.z),a=o>=7?2.9:2.1;this.playerKnock.set(Math.sin(r)*a,0,Math.cos(r)*a),this.hud.chat(`The Orc Scout thrusts its spear for ${o} damage!`,"combat"),this.hud.setOrbs(this.save.hp,this.save.maxHp,this.save.focus,this.save.stamina),this.save.hp<=0&&(this.save.hp=Math.max(10,Math.floor(this.save.maxHp*.35)),this.player.position.set(0,0,2),this.orcAggroed=!1,this.yetiAggroed=!1,this.activity={type:"idle"},this.syncHeldTool(),this.hud.hideTarget(),this.hud.chat("You fall! You wake by the Thornrest campfire, battered but alive.","combat"),t.mesh.position.set(He.x,0,He.z)),this.activity.type!=="combat"&&t.hp>0&&!t.depleted&&this.beginCombat(t,"You raise your guard against the Orc Scout!"),this.refreshUI(),this.persist()}abortCombatSoft(t,e){e&&this.hud.chat("You step out of range.","combat"),this.combatAbortT=.22,this.combatOorT=0,this.activity={type:"idle"},this.hud.hideTarget(),this.combatCamPull=Math.max(.15,this.combatCamPull*.5),Fe(this.player,"sword")}tickMonsterGait(t,e,n){const s=t==="yeti"?m_:g_,o=t==="yeti"?2.4:4.2,r=t==="yeti"?this.yetiGait:this.orcGait;if(e<.08)return r;const a=r+Math.max(o*.5,Math.PI*e/s)*n;return t==="yeti"?this.yetiGait=a:this.orcGait=a,a}sitOnGround(t,e=0){t.position.y=we(t.position.x,t.position.z)+e}snapMoversToGround(){const t=new Set(this.deathAnims.map(e=>e.mesh));this.sitOnGround(this.player,Number(this.player.userData.locomotionY)||0),this.yetiTarget&&!t.has(this.yetiTarget.mesh)&&this.sitOnGround(this.yetiTarget.mesh,Number(this.yetiTarget.mesh.userData.locomotionY)||0),this.orcTarget&&!t.has(this.orcTarget.mesh)&&this.sitOnGround(this.orcTarget.mesh,Number(this.orcTarget.mesh.userData.locomotionY)||0),this.dummyTarget&&!t.has(this.dummyTarget.mesh)&&this.sitOnGround(this.dummyTarget.mesh),this.moveMarker.visible&&this.sitOnGround(this.moveMarker,.06)}nudgeZoom(t,e=.12){const n=this.camZoomTarget*Math.exp(t*e);this.camZoomTarget=Math.min(hv,Math.max(lv,n))}updateCamera(t){const e=Math.min(1,this.combatCamPull),n=1-Math.exp(-10*t);this.camZoom+=(this.camZoomTarget-this.camZoom)*n;const s=this.camZoom,o=this.camOffset.x,r=this.camOffset.y*s+e*1.55,a=this.camOffset.z*s+e*.85,c=this.camSmooth;c.set(this.player.position.x+o,r,this.player.position.z+a);const l=1-Math.exp(-4.2*t);this.camera.position.lerp(c,l);let h=this.player.position.x,u=this.player.position.z;if(this.activity.type==="combat"){const f=this.activity.target.mesh.position;h=this.player.position.x*.55+f.x*.45,u=this.player.position.z*.55+f.z*.45}this.lookSmooth.set(h,this.player.position.y+1.05+e*.55,u),this.camLook.lerp(this.lookSmooth,l),this.camera.lookAt(this.camLook)}updateCombatTreeFade(t){const e=this.activity.type==="combat"||this.yetiAggroed||this.orcAggroed,n=this.camera.position;let s=this.player.position.x,o=this.player.position.z;this.activity.type==="combat"?(s=s*.5+this.activity.target.mesh.position.x*.5,o=o*.5+this.activity.target.mesh.position.z*.5):this.yetiAggroed&&this.yetiTarget?(s=this.yetiTarget.mesh.position.x,o=this.yetiTarget.mesh.position.z):this.orcAggroed&&this.orcTarget&&(s=this.orcTarget.mesh.position.x,o=this.orcTarget.mesh.position.z);const r=s-n.x,a=o-n.z,c=Math.hypot(r,a)||1;for(const l of this.objects){if(l.kind!=="tree")continue;const h=l.mesh.position.x-n.x,u=l.mesh.position.z-n.z,f=Math.max(0,Math.min(1,(h*r+u*a)/(c*c))),p=n.x+r*f,g=n.z+a*f,_=Math.hypot(l.mesh.position.x-p,l.mesh.position.z-g),m=e&&f>.12&&f<.92&&_<2.15?.22:1;l.mesh.traverse(d=>{const S=d;if(!S.isMesh||S.name==="hit"||S.name==="outline")return;const w=S.material;if(!w||!("opacity"in w))return;if(!S.userData.fadeReady){const A=w.clone();A.transparent=!0,S.material=A,S.userData.fadeReady=!0,S.userData.fadeOpacity=1}const v=S.userData.fadeOpacity??1,U=v+(m-v)*Math.min(1,t*5.5);S.userData.fadeOpacity=U;const T=S.material;T.opacity=U,T.transparent=U<.98,T.depthWrite=U>.75})}}drawMinimapMarkers(){const t=[];for(const e of this.objects)e.depleted&&e.kind!=="dummy"&&e.kind!=="yeti"&&e.kind!=="orc"||(e.kind==="tree"?t.push({x:e.mesh.position.x,z:e.mesh.position.z,color:"#2d8a2d"}):e.kind==="rock"?t.push({x:e.mesh.position.x,z:e.mesh.position.z,color:"#888"}):e.kind==="yeti"?t.push({x:e.mesh.position.x,z:e.mesh.position.z,color:"#7ec8ff"}):e.kind==="orc"?t.push({x:e.mesh.position.x,z:e.mesh.position.z,color:"#6a9a2a"}):t.push({x:e.mesh.position.x,z:e.mesh.position.z,color:"#c43c3c"}));t.push({x:-1.2,z:-.5,color:"#ff8844"}),this.hud.drawMinimap(this.player.position.x,this.player.position.z,this.player.rotation.y,t)}refreshUI(){this.hud.setInventory(this.save.inventory),this.hud.setEquipment(this.save),this.hud.setSkills(this.save),this.hud.setOrbs(this.save.hp,this.save.maxHp,this.save.focus,this.save.stamina)}persist(){av(this.save)}onResize(){this.camera.aspect=window.innerWidth/window.innerHeight,this.camera.updateProjectionMatrix(),this.renderer.setSize(window.innerWidth,window.innerHeight),this.studio.resize(window.innerWidth,window.innerHeight)}animate=()=>{if(!this.running)return;requestAnimationFrame(this.animate);const t=Math.min(.05,this.clock.getDelta());if(this.studio.isOpen()){this.studio.tick(t),this.studio.render(this.renderer);return}this.update(t),this.renderer.render(this.scene,this.camera)}}const fu=document.getElementById("game-canvas");if(!(fu instanceof HTMLCanvasElement))throw new Error("Missing #game-canvas");new xv(fu);
