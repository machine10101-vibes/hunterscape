(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function e(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=e(s);fetch(s.href,r)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Va="170",_u=0,Tc=1,vu=2,rh=1,oh=2,In=3,ei=0,Fe=1,Te=2,jn=0,$i=1,bc=2,Ac=3,Rc=4,xu=5,fi=100,Mu=101,yu=102,wu=103,Su=104,Eu=200,Tu=201,bu=202,Au=203,Xo=204,qo=205,Ru=206,Cu=207,Pu=208,Lu=209,Iu=210,Du=211,Uu=212,Nu=213,Fu=214,Yo=0,$o=1,Zo=2,ji=3,Ko=4,Jo=5,jo=6,Qo=7,Wa=0,Ou=1,zu=2,Qn=0,Bu=1,ku=2,Hu=3,Vr=4,Gu=5,Vu=6,Wu=7,ah=300,Qi=301,ts=302,ta=303,ea=304,Wr=306,es=1e3,_i=1001,na=1002,Qe=1003,Xu=1004,qs=1005,yn=1006,jr=1007,vi=1008,Nn=1009,ch=1010,lh=1011,Is=1012,Xa=1013,wi=1014,wn=1015,zs=1016,qa=1017,Ya=1018,ns=1020,hh=35902,uh=1021,dh=1022,fn=1023,fh=1024,ph=1025,Zi=1026,is=1027,$a=1028,Za=1029,mh=1030,Ka=1031,Ja=1033,Sr=33776,Er=33777,Tr=33778,br=33779,ia=35840,sa=35841,ra=35842,oa=35843,aa=36196,ca=37492,la=37496,ha=37808,ua=37809,da=37810,fa=37811,pa=37812,ma=37813,ga=37814,_a=37815,va=37816,xa=37817,Ma=37818,ya=37819,wa=37820,Sa=37821,Ar=36492,Ea=36494,Ta=36495,gh=36283,ba=36284,Aa=36285,Ra=36286,qu=3200,Yu=3201,ja=0,$u=1,Mn="",De="srgb",os="srgb-linear",Xr="linear",he="srgb",Pi=7680,Cc=519,Zu=512,Ku=513,Ju=514,_h=515,ju=516,Qu=517,td=518,ed=519,Pc=35044,nd=35048,Lc="300 es",Dn=2e3,Pr=2001;class as{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const s=this._listeners[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}}const ze=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Qr=Math.PI/180,Ca=180/Math.PI;function cs(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(ze[i&255]+ze[i>>8&255]+ze[i>>16&255]+ze[i>>24&255]+"-"+ze[t&255]+ze[t>>8&255]+"-"+ze[t>>16&15|64]+ze[t>>24&255]+"-"+ze[e&63|128]+ze[e>>8&255]+"-"+ze[e>>16&255]+ze[e>>24&255]+ze[n&255]+ze[n>>8&255]+ze[n>>16&255]+ze[n>>24&255]).toLowerCase()}function be(i,t,e){return Math.max(t,Math.min(e,i))}function id(i,t){return(i%t+t)%t}function to(i,t,e){return(1-e)*i+e*t}function fs(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Ye(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}class pt{constructor(t=0,e=0){pt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(be(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*s+t.x,this.y=r*s+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Yt{constructor(t,e,n,s,r,o,a,c,l){Yt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,c,l)}set(t,e,n,s,r,o,a,c,l){const h=this.elements;return h[0]=t,h[1]=s,h[2]=a,h[3]=e,h[4]=r,h[5]=c,h[6]=n,h[7]=o,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],h=n[4],u=n[7],d=n[2],f=n[5],m=n[8],_=s[0],g=s[3],p=s[6],w=s[1],S=s[4],x=s[7],D=s[2],E=s[5],R=s[8];return r[0]=o*_+a*w+c*D,r[3]=o*g+a*S+c*E,r[6]=o*p+a*x+c*R,r[1]=l*_+h*w+u*D,r[4]=l*g+h*S+u*E,r[7]=l*p+h*x+u*R,r[2]=d*_+f*w+m*D,r[5]=d*g+f*S+m*E,r[8]=d*p+f*x+m*R,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8];return e*o*h-e*a*l-n*r*h+n*a*c+s*r*l-s*o*c}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8],u=h*o-a*l,d=a*c-h*r,f=l*r-o*c,m=e*u+n*d+s*f;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/m;return t[0]=u*_,t[1]=(s*l-h*n)*_,t[2]=(a*n-s*o)*_,t[3]=d*_,t[4]=(h*e-s*c)*_,t[5]=(s*r-a*e)*_,t[6]=f*_,t[7]=(n*c-l*e)*_,t[8]=(o*e-n*r)*_,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,o,a){const c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*o+l*a)+o+t,-s*l,s*c,-s*(-l*o+c*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(eo.makeScale(t,e)),this}rotate(t){return this.premultiply(eo.makeRotation(-t)),this}translate(t,e){return this.premultiply(eo.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const eo=new Yt;function vh(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function Lr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function sd(){const i=Lr("canvas");return i.style.display="block",i}const Ic={};function Ts(i){i in Ic||(Ic[i]=!0,console.warn(i))}function rd(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}function od(i){const t=i.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function ad(i){const t=i.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const ne={enabled:!0,workingColorSpace:os,spaces:{},convert:function(i,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===he&&(i.r=Un(i.r),i.g=Un(i.g),i.b=Un(i.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(i.applyMatrix3(this.spaces[t].toXYZ),i.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===he&&(i.r=Ki(i.r),i.g=Ki(i.g),i.b=Ki(i.b))),i},fromWorkingColorSpace:function(i,t){return this.convert(i,this.workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===Mn?Xr:this.spaces[i].transfer},getLuminanceCoefficients:function(i,t=this.workingColorSpace){return i.fromArray(this.spaces[t].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,t,e){return i.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}};function Un(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Ki(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}const Dc=[.64,.33,.3,.6,.15,.06],Uc=[.2126,.7152,.0722],Nc=[.3127,.329],Fc=new Yt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Oc=new Yt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);ne.define({[os]:{primaries:Dc,whitePoint:Nc,transfer:Xr,toXYZ:Fc,fromXYZ:Oc,luminanceCoefficients:Uc,workingColorSpaceConfig:{unpackColorSpace:De},outputColorSpaceConfig:{drawingBufferColorSpace:De}},[De]:{primaries:Dc,whitePoint:Nc,transfer:he,toXYZ:Fc,fromXYZ:Oc,luminanceCoefficients:Uc,outputColorSpaceConfig:{drawingBufferColorSpace:De}}});let Li;class cd{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Li===void 0&&(Li=Lr("canvas")),Li.width=t.width,Li.height=t.height;const n=Li.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=Li}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Lr("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Un(r[o]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Un(e[n]/255)*255):e[n]=Un(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let ld=0;class xh{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:ld++}),this.uuid=cs(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(no(s[o].image)):r.push(no(s[o]))}else r=no(s);n.url=r}return e||(t.images[this.uuid]=n),n}}function no(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?cd.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let hd=0;class Ge extends as{constructor(t=Ge.DEFAULT_IMAGE,e=Ge.DEFAULT_MAPPING,n=_i,s=_i,r=yn,o=vi,a=fn,c=Nn,l=Ge.DEFAULT_ANISOTROPY,h=Mn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:hd++}),this.uuid=cs(),this.name="",this.source=new xh(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new pt(0,0),this.repeat=new pt(1,1),this.center=new pt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Yt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==ah)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case es:t.x=t.x-Math.floor(t.x);break;case _i:t.x=t.x<0?0:1;break;case na:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case es:t.y=t.y-Math.floor(t.y);break;case _i:t.y=t.y<0?0:1;break;case na:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Ge.DEFAULT_IMAGE=null;Ge.DEFAULT_MAPPING=ah;Ge.DEFAULT_ANISOTROPY=1;class ue{constructor(t=0,e=0,n=0,s=1){ue.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r;const c=t.elements,l=c[0],h=c[4],u=c[8],d=c[1],f=c[5],m=c[9],_=c[2],g=c[6],p=c[10];if(Math.abs(h-d)<.01&&Math.abs(u-_)<.01&&Math.abs(m-g)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+_)<.1&&Math.abs(m+g)<.1&&Math.abs(l+f+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const S=(l+1)/2,x=(f+1)/2,D=(p+1)/2,E=(h+d)/4,R=(u+_)/4,I=(m+g)/4;return S>x&&S>D?S<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(S),s=E/n,r=R/n):x>D?x<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(x),n=E/s,r=I/s):D<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(D),n=R/r,s=I/r),this.set(n,s,r,e),this}let w=Math.sqrt((g-m)*(g-m)+(u-_)*(u-_)+(d-h)*(d-h));return Math.abs(w)<.001&&(w=1),this.x=(g-m)/w,this.y=(u-_)/w,this.z=(d-h)/w,this.w=Math.acos((l+f+p-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class ud extends as{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new ue(0,0,t,e),this.scissorTest=!1,this.viewport=new ue(0,0,t,e);const s={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:yn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const r=new Ge(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,s=t.textures.length;n<s;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new xh(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Si extends ud{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class Mh extends Ge{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Qe,this.minFilter=Qe,this.wrapR=_i,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class dd extends Ge{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Qe,this.minFilter=Qe,this.wrapR=_i,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Bs{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,o,a){let c=n[s+0],l=n[s+1],h=n[s+2],u=n[s+3];const d=r[o+0],f=r[o+1],m=r[o+2],_=r[o+3];if(a===0){t[e+0]=c,t[e+1]=l,t[e+2]=h,t[e+3]=u;return}if(a===1){t[e+0]=d,t[e+1]=f,t[e+2]=m,t[e+3]=_;return}if(u!==_||c!==d||l!==f||h!==m){let g=1-a;const p=c*d+l*f+h*m+u*_,w=p>=0?1:-1,S=1-p*p;if(S>Number.EPSILON){const D=Math.sqrt(S),E=Math.atan2(D,p*w);g=Math.sin(g*E)/D,a=Math.sin(a*E)/D}const x=a*w;if(c=c*g+d*x,l=l*g+f*x,h=h*g+m*x,u=u*g+_*x,g===1-a){const D=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=D,l*=D,h*=D,u*=D}}t[e]=c,t[e+1]=l,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,s,r,o){const a=n[s],c=n[s+1],l=n[s+2],h=n[s+3],u=r[o],d=r[o+1],f=r[o+2],m=r[o+3];return t[e]=a*m+h*u+c*f-l*d,t[e+1]=c*m+h*d+l*u-a*f,t[e+2]=l*m+h*f+a*d-c*u,t[e+3]=h*m-a*u-c*d-l*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,c=Math.sin,l=a(n/2),h=a(s/2),u=a(r/2),d=c(n/2),f=c(s/2),m=c(r/2);switch(o){case"XYZ":this._x=d*h*u+l*f*m,this._y=l*f*u-d*h*m,this._z=l*h*m+d*f*u,this._w=l*h*u-d*f*m;break;case"YXZ":this._x=d*h*u+l*f*m,this._y=l*f*u-d*h*m,this._z=l*h*m-d*f*u,this._w=l*h*u+d*f*m;break;case"ZXY":this._x=d*h*u-l*f*m,this._y=l*f*u+d*h*m,this._z=l*h*m+d*f*u,this._w=l*h*u-d*f*m;break;case"ZYX":this._x=d*h*u-l*f*m,this._y=l*f*u+d*h*m,this._z=l*h*m-d*f*u,this._w=l*h*u+d*f*m;break;case"YZX":this._x=d*h*u+l*f*m,this._y=l*f*u+d*h*m,this._z=l*h*m-d*f*u,this._w=l*h*u-d*f*m;break;case"XZY":this._x=d*h*u-l*f*m,this._y=l*f*u-d*h*m,this._z=l*h*m+d*f*u,this._w=l*h*u+d*f*m;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],s=e[4],r=e[8],o=e[1],a=e[5],c=e[9],l=e[2],h=e[6],u=e[10],d=n+a+u;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-c)*f,this._y=(r-l)*f,this._z=(o-s)*f}else if(n>a&&n>u){const f=2*Math.sqrt(1+n-a-u);this._w=(h-c)/f,this._x=.25*f,this._y=(s+o)/f,this._z=(r+l)/f}else if(a>u){const f=2*Math.sqrt(1+a-n-u);this._w=(r-l)/f,this._x=(s+o)/f,this._y=.25*f,this._z=(c+h)/f}else{const f=2*Math.sqrt(1+u-n-a);this._w=(o-s)/f,this._x=(r+l)/f,this._y=(c+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(be(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,s=t._y,r=t._z,o=t._w,a=e._x,c=e._y,l=e._z,h=e._w;return this._x=n*h+o*a+s*l-r*c,this._y=s*h+o*c+r*a-n*l,this._z=r*h+o*l+n*c-s*a,this._w=o*h-n*a-s*c-r*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,s=this._y,r=this._z,o=this._w;let a=o*t._w+n*t._x+s*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;const c=1-a*a;if(c<=Number.EPSILON){const f=1-e;return this._w=f*o+e*this._w,this._x=f*n+e*this._x,this._y=f*s+e*this._y,this._z=f*r+e*this._z,this.normalize(),this}const l=Math.sqrt(c),h=Math.atan2(l,a),u=Math.sin((1-e)*h)/l,d=Math.sin(e*h)/l;return this._w=o*u+this._w*d,this._x=n*u+this._x*d,this._y=s*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class L{constructor(t=0,e=0,n=0){L.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(zc.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(zc.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(t){const e=this.x,n=this.y,s=this.z,r=t.x,o=t.y,a=t.z,c=t.w,l=2*(o*s-a*n),h=2*(a*e-r*s),u=2*(r*n-o*e);return this.x=e+c*l+o*u-a*h,this.y=n+c*h+a*l-r*u,this.z=s+c*u+r*h-o*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,s=t.y,r=t.z,o=e.x,a=e.y,c=e.z;return this.x=s*c-r*a,this.y=r*o-n*c,this.z=n*a-s*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return io.copy(this).projectOnVector(t),this.sub(io)}reflect(t){return this.sub(io.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(be(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const io=new L,zc=new Bs;class On{constructor(t=new L(1/0,1/0,1/0),e=new L(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(cn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(cn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=cn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,cn):cn.fromBufferAttribute(r,o),cn.applyMatrix4(t.matrixWorld),this.expandByPoint(cn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Ys.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Ys.copy(n.boundingBox)),Ys.applyMatrix4(t.matrixWorld),this.union(Ys)}const s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,cn),cn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(ps),$s.subVectors(this.max,ps),Ii.subVectors(t.a,ps),Di.subVectors(t.b,ps),Ui.subVectors(t.c,ps),kn.subVectors(Di,Ii),Hn.subVectors(Ui,Di),ri.subVectors(Ii,Ui);let e=[0,-kn.z,kn.y,0,-Hn.z,Hn.y,0,-ri.z,ri.y,kn.z,0,-kn.x,Hn.z,0,-Hn.x,ri.z,0,-ri.x,-kn.y,kn.x,0,-Hn.y,Hn.x,0,-ri.y,ri.x,0];return!so(e,Ii,Di,Ui,$s)||(e=[1,0,0,0,1,0,0,0,1],!so(e,Ii,Di,Ui,$s))?!1:(Zs.crossVectors(kn,Hn),e=[Zs.x,Zs.y,Zs.z],so(e,Ii,Di,Ui,$s))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,cn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(cn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(An[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),An[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),An[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),An[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),An[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),An[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),An[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),An[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(An),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const An=[new L,new L,new L,new L,new L,new L,new L,new L],cn=new L,Ys=new On,Ii=new L,Di=new L,Ui=new L,kn=new L,Hn=new L,ri=new L,ps=new L,$s=new L,Zs=new L,oi=new L;function so(i,t,e,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){oi.fromArray(i,r);const a=s.x*Math.abs(oi.x)+s.y*Math.abs(oi.y)+s.z*Math.abs(oi.z),c=t.dot(oi),l=e.dot(oi),h=n.dot(oi);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>a)return!1}return!0}const fd=new On,ms=new L,ro=new L;class ls{constructor(t=new L,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):fd.setFromPoints(t).getCenter(n);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;ms.subVectors(t,this.center);const e=ms.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(ms,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(ro.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(ms.copy(t.center).add(ro)),this.expandByPoint(ms.copy(t.center).sub(ro))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Rn=new L,oo=new L,Ks=new L,Gn=new L,ao=new L,Js=new L,co=new L;class Qa{constructor(t=new L,e=new L(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Rn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Rn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Rn.copy(this.origin).addScaledVector(this.direction,e),Rn.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){oo.copy(t).add(e).multiplyScalar(.5),Ks.copy(e).sub(t).normalize(),Gn.copy(this.origin).sub(oo);const r=t.distanceTo(e)*.5,o=-this.direction.dot(Ks),a=Gn.dot(this.direction),c=-Gn.dot(Ks),l=Gn.lengthSq(),h=Math.abs(1-o*o);let u,d,f,m;if(h>0)if(u=o*c-a,d=o*a-c,m=r*h,u>=0)if(d>=-m)if(d<=m){const _=1/h;u*=_,d*=_,f=u*(u+o*d+2*a)+d*(o*u+d+2*c)+l}else d=r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*c)+l;else d=-r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*c)+l;else d<=-m?(u=Math.max(0,-(-o*r+a)),d=u>0?-r:Math.min(Math.max(-r,-c),r),f=-u*u+d*(d+2*c)+l):d<=m?(u=0,d=Math.min(Math.max(-r,-c),r),f=d*(d+2*c)+l):(u=Math.max(0,-(o*r+a)),d=u>0?r:Math.min(Math.max(-r,-c),r),f=-u*u+d*(d+2*c)+l);else d=o>0?-r:r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(oo).addScaledVector(Ks,d),f}intersectSphere(t,e){Rn.subVectors(t.center,this.origin);const n=Rn.dot(this.direction),s=Rn.dot(Rn)-n*n,r=t.radius*t.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,o,a,c;const l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return l>=0?(n=(t.min.x-d.x)*l,s=(t.max.x-d.x)*l):(n=(t.max.x-d.x)*l,s=(t.min.x-d.x)*l),h>=0?(r=(t.min.y-d.y)*h,o=(t.max.y-d.y)*h):(r=(t.max.y-d.y)*h,o=(t.min.y-d.y)*h),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),u>=0?(a=(t.min.z-d.z)*u,c=(t.max.z-d.z)*u):(a=(t.max.z-d.z)*u,c=(t.min.z-d.z)*u),n>c||a>s)||((a>n||n!==n)&&(n=a),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,Rn)!==null}intersectTriangle(t,e,n,s,r){ao.subVectors(e,t),Js.subVectors(n,t),co.crossVectors(ao,Js);let o=this.direction.dot(co),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Gn.subVectors(this.origin,t);const c=a*this.direction.dot(Js.crossVectors(Gn,Js));if(c<0)return null;const l=a*this.direction.dot(ao.cross(Gn));if(l<0||c+l>o)return null;const h=-a*Gn.dot(co);return h<0?null:this.at(h/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class le{constructor(t,e,n,s,r,o,a,c,l,h,u,d,f,m,_,g){le.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,c,l,h,u,d,f,m,_,g)}set(t,e,n,s,r,o,a,c,l,h,u,d,f,m,_,g){const p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=s,p[1]=r,p[5]=o,p[9]=a,p[13]=c,p[2]=l,p[6]=h,p[10]=u,p[14]=d,p[3]=f,p[7]=m,p[11]=_,p[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new le().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,s=1/Ni.setFromMatrixColumn(t,0).length(),r=1/Ni.setFromMatrixColumn(t,1).length(),o=1/Ni.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,s=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(s),l=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){const d=o*h,f=o*u,m=a*h,_=a*u;e[0]=c*h,e[4]=-c*u,e[8]=l,e[1]=f+m*l,e[5]=d-_*l,e[9]=-a*c,e[2]=_-d*l,e[6]=m+f*l,e[10]=o*c}else if(t.order==="YXZ"){const d=c*h,f=c*u,m=l*h,_=l*u;e[0]=d+_*a,e[4]=m*a-f,e[8]=o*l,e[1]=o*u,e[5]=o*h,e[9]=-a,e[2]=f*a-m,e[6]=_+d*a,e[10]=o*c}else if(t.order==="ZXY"){const d=c*h,f=c*u,m=l*h,_=l*u;e[0]=d-_*a,e[4]=-o*u,e[8]=m+f*a,e[1]=f+m*a,e[5]=o*h,e[9]=_-d*a,e[2]=-o*l,e[6]=a,e[10]=o*c}else if(t.order==="ZYX"){const d=o*h,f=o*u,m=a*h,_=a*u;e[0]=c*h,e[4]=m*l-f,e[8]=d*l+_,e[1]=c*u,e[5]=_*l+d,e[9]=f*l-m,e[2]=-l,e[6]=a*c,e[10]=o*c}else if(t.order==="YZX"){const d=o*c,f=o*l,m=a*c,_=a*l;e[0]=c*h,e[4]=_-d*u,e[8]=m*u+f,e[1]=u,e[5]=o*h,e[9]=-a*h,e[2]=-l*h,e[6]=f*u+m,e[10]=d-_*u}else if(t.order==="XZY"){const d=o*c,f=o*l,m=a*c,_=a*l;e[0]=c*h,e[4]=-u,e[8]=l*h,e[1]=d*u+_,e[5]=o*h,e[9]=f*u-m,e[2]=m*u-f,e[6]=a*h,e[10]=_*u+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(pd,t,md)}lookAt(t,e,n){const s=this.elements;return Ke.subVectors(t,e),Ke.lengthSq()===0&&(Ke.z=1),Ke.normalize(),Vn.crossVectors(n,Ke),Vn.lengthSq()===0&&(Math.abs(n.z)===1?Ke.x+=1e-4:Ke.z+=1e-4,Ke.normalize(),Vn.crossVectors(n,Ke)),Vn.normalize(),js.crossVectors(Ke,Vn),s[0]=Vn.x,s[4]=js.x,s[8]=Ke.x,s[1]=Vn.y,s[5]=js.y,s[9]=Ke.y,s[2]=Vn.z,s[6]=js.z,s[10]=Ke.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],h=n[1],u=n[5],d=n[9],f=n[13],m=n[2],_=n[6],g=n[10],p=n[14],w=n[3],S=n[7],x=n[11],D=n[15],E=s[0],R=s[4],I=s[8],y=s[12],M=s[1],C=s[5],O=s[9],H=s[13],G=s[2],J=s[6],X=s[10],it=s[14],V=s[3],Q=s[7],K=s[11],lt=s[15];return r[0]=o*E+a*M+c*G+l*V,r[4]=o*R+a*C+c*J+l*Q,r[8]=o*I+a*O+c*X+l*K,r[12]=o*y+a*H+c*it+l*lt,r[1]=h*E+u*M+d*G+f*V,r[5]=h*R+u*C+d*J+f*Q,r[9]=h*I+u*O+d*X+f*K,r[13]=h*y+u*H+d*it+f*lt,r[2]=m*E+_*M+g*G+p*V,r[6]=m*R+_*C+g*J+p*Q,r[10]=m*I+_*O+g*X+p*K,r[14]=m*y+_*H+g*it+p*lt,r[3]=w*E+S*M+x*G+D*V,r[7]=w*R+S*C+x*J+D*Q,r[11]=w*I+S*O+x*X+D*K,r[15]=w*y+S*H+x*it+D*lt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],o=t[1],a=t[5],c=t[9],l=t[13],h=t[2],u=t[6],d=t[10],f=t[14],m=t[3],_=t[7],g=t[11],p=t[15];return m*(+r*c*u-s*l*u-r*a*d+n*l*d+s*a*f-n*c*f)+_*(+e*c*f-e*l*d+r*o*d-s*o*f+s*l*h-r*c*h)+g*(+e*l*u-e*a*f-r*o*u+n*o*f+r*a*h-n*l*h)+p*(-s*a*h-e*c*u+e*a*d+s*o*u-n*o*d+n*c*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8],u=t[9],d=t[10],f=t[11],m=t[12],_=t[13],g=t[14],p=t[15],w=u*g*l-_*d*l+_*c*f-a*g*f-u*c*p+a*d*p,S=m*d*l-h*g*l-m*c*f+o*g*f+h*c*p-o*d*p,x=h*_*l-m*u*l+m*a*f-o*_*f-h*a*p+o*u*p,D=m*u*c-h*_*c-m*a*d+o*_*d+h*a*g-o*u*g,E=e*w+n*S+s*x+r*D;if(E===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const R=1/E;return t[0]=w*R,t[1]=(_*d*r-u*g*r-_*s*f+n*g*f+u*s*p-n*d*p)*R,t[2]=(a*g*r-_*c*r+_*s*l-n*g*l-a*s*p+n*c*p)*R,t[3]=(u*c*r-a*d*r-u*s*l+n*d*l+a*s*f-n*c*f)*R,t[4]=S*R,t[5]=(h*g*r-m*d*r+m*s*f-e*g*f-h*s*p+e*d*p)*R,t[6]=(m*c*r-o*g*r-m*s*l+e*g*l+o*s*p-e*c*p)*R,t[7]=(o*d*r-h*c*r+h*s*l-e*d*l-o*s*f+e*c*f)*R,t[8]=x*R,t[9]=(m*u*r-h*_*r-m*n*f+e*_*f+h*n*p-e*u*p)*R,t[10]=(o*_*r-m*a*r+m*n*l-e*_*l-o*n*p+e*a*p)*R,t[11]=(h*a*r-o*u*r-h*n*l+e*u*l+o*n*f-e*a*f)*R,t[12]=D*R,t[13]=(h*_*s-m*u*s+m*n*d-e*_*d-h*n*g+e*u*g)*R,t[14]=(m*a*s-o*_*s-m*n*c+e*_*c+o*n*g-e*a*g)*R,t[15]=(o*u*s-h*a*s+h*n*c-e*u*c-o*n*d+e*a*d)*R,this}scale(t){const e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),s=Math.sin(e),r=1-n,o=t.x,a=t.y,c=t.z,l=r*o,h=r*a;return this.set(l*o+n,l*a-s*c,l*c+s*a,0,l*a+s*c,h*a+n,h*c-s*o,0,l*c-s*a,h*c+s*o,r*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,o){return this.set(1,n,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){const s=this.elements,r=e._x,o=e._y,a=e._z,c=e._w,l=r+r,h=o+o,u=a+a,d=r*l,f=r*h,m=r*u,_=o*h,g=o*u,p=a*u,w=c*l,S=c*h,x=c*u,D=n.x,E=n.y,R=n.z;return s[0]=(1-(_+p))*D,s[1]=(f+x)*D,s[2]=(m-S)*D,s[3]=0,s[4]=(f-x)*E,s[5]=(1-(d+p))*E,s[6]=(g+w)*E,s[7]=0,s[8]=(m+S)*R,s[9]=(g-w)*R,s[10]=(1-(d+_))*R,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){const s=this.elements;let r=Ni.set(s[0],s[1],s[2]).length();const o=Ni.set(s[4],s[5],s[6]).length(),a=Ni.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],ln.copy(this);const l=1/r,h=1/o,u=1/a;return ln.elements[0]*=l,ln.elements[1]*=l,ln.elements[2]*=l,ln.elements[4]*=h,ln.elements[5]*=h,ln.elements[6]*=h,ln.elements[8]*=u,ln.elements[9]*=u,ln.elements[10]*=u,e.setFromRotationMatrix(ln),n.x=r,n.y=o,n.z=a,this}makePerspective(t,e,n,s,r,o,a=Dn){const c=this.elements,l=2*r/(e-t),h=2*r/(n-s),u=(e+t)/(e-t),d=(n+s)/(n-s);let f,m;if(a===Dn)f=-(o+r)/(o-r),m=-2*o*r/(o-r);else if(a===Pr)f=-o/(o-r),m=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=l,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=h,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=f,c[14]=m,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,s,r,o,a=Dn){const c=this.elements,l=1/(e-t),h=1/(n-s),u=1/(o-r),d=(e+t)*l,f=(n+s)*h;let m,_;if(a===Dn)m=(o+r)*u,_=-2*u;else if(a===Pr)m=r*u,_=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-d,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-f,c[2]=0,c[6]=0,c[10]=_,c[14]=-m,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const Ni=new L,ln=new le,pd=new L(0,0,0),md=new L(1,1,1),Vn=new L,js=new L,Ke=new L,Bc=new le,kc=new Bs;class mn{constructor(t=0,e=0,n=0,s=mn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const s=t.elements,r=s[0],o=s[4],a=s[8],c=s[1],l=s[5],h=s[9],u=s[2],d=s[6],f=s[10];switch(e){case"XYZ":this._y=Math.asin(be(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-be(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(be(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-be(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(be(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-be(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Bc.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Bc,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return kc.setFromEuler(this),this.setFromQuaternion(kc,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}mn.DEFAULT_ORDER="XYZ";class tc{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let gd=0;const Hc=new L,Fi=new Bs,Cn=new le,Qs=new L,gs=new L,_d=new L,vd=new Bs,Gc=new L(1,0,0),Vc=new L(0,1,0),Wc=new L(0,0,1),Xc={type:"added"},xd={type:"removed"},Oi={type:"childadded",child:null},lo={type:"childremoved",child:null};class Ae extends as{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:gd++}),this.uuid=cs(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ae.DEFAULT_UP.clone();const t=new L,e=new mn,n=new Bs,s=new L(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new le},normalMatrix:{value:new Yt}}),this.matrix=new le,this.matrixWorld=new le,this.matrixAutoUpdate=Ae.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ae.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new tc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Fi.setFromAxisAngle(t,e),this.quaternion.multiply(Fi),this}rotateOnWorldAxis(t,e){return Fi.setFromAxisAngle(t,e),this.quaternion.premultiply(Fi),this}rotateX(t){return this.rotateOnAxis(Gc,t)}rotateY(t){return this.rotateOnAxis(Vc,t)}rotateZ(t){return this.rotateOnAxis(Wc,t)}translateOnAxis(t,e){return Hc.copy(t).applyQuaternion(this.quaternion),this.position.add(Hc.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Gc,t)}translateY(t){return this.translateOnAxis(Vc,t)}translateZ(t){return this.translateOnAxis(Wc,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Cn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Qs.copy(t):Qs.set(t,e,n);const s=this.parent;this.updateWorldMatrix(!0,!1),gs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Cn.lookAt(gs,Qs,this.up):Cn.lookAt(Qs,gs,this.up),this.quaternion.setFromRotationMatrix(Cn),s&&(Cn.extractRotation(s.matrixWorld),Fi.setFromRotationMatrix(Cn),this.quaternion.premultiply(Fi.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Xc),Oi.child=t,this.dispatchEvent(Oi),Oi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(xd),lo.child=t,this.dispatchEvent(lo),lo.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Cn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Cn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Cn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Xc),Oi.child=t,this.dispatchEvent(Oi),Oi.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){const o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(gs,t,_d),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(gs,vd,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){const u=c[l];r(t.shapes,u)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(t.materials,this.material[c]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];s.animations.push(r(t.animations,c))}}if(e){const a=o(t.geometries),c=o(t.materials),l=o(t.textures),h=o(t.images),u=o(t.shapes),d=o(t.skeletons),f=o(t.animations),m=o(t.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),m.length>0&&(n.nodes=m)}return n.object=s,n;function o(a){const c=[];for(const l in a){const h=a[l];delete h.metadata,c.push(h)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const s=t.children[n];this.add(s.clone())}return this}}Ae.DEFAULT_UP=new L(0,1,0);Ae.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ae.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const hn=new L,Pn=new L,ho=new L,Ln=new L,zi=new L,Bi=new L,qc=new L,uo=new L,fo=new L,po=new L,mo=new ue,go=new ue,_o=new ue;class un{constructor(t=new L,e=new L,n=new L){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),hn.subVectors(t,e),s.cross(hn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){hn.subVectors(s,e),Pn.subVectors(n,e),ho.subVectors(t,e);const o=hn.dot(hn),a=hn.dot(Pn),c=hn.dot(ho),l=Pn.dot(Pn),h=Pn.dot(ho),u=o*l-a*a;if(u===0)return r.set(0,0,0),null;const d=1/u,f=(l*c-a*h)*d,m=(o*h-a*c)*d;return r.set(1-f-m,m,f)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,Ln)===null?!1:Ln.x>=0&&Ln.y>=0&&Ln.x+Ln.y<=1}static getInterpolation(t,e,n,s,r,o,a,c){return this.getBarycoord(t,e,n,s,Ln)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,Ln.x),c.addScaledVector(o,Ln.y),c.addScaledVector(a,Ln.z),c)}static getInterpolatedAttribute(t,e,n,s,r,o){return mo.setScalar(0),go.setScalar(0),_o.setScalar(0),mo.fromBufferAttribute(t,e),go.fromBufferAttribute(t,n),_o.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(mo,r.x),o.addScaledVector(go,r.y),o.addScaledVector(_o,r.z),o}static isFrontFacing(t,e,n,s){return hn.subVectors(n,e),Pn.subVectors(t,e),hn.cross(Pn).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return hn.subVectors(this.c,this.b),Pn.subVectors(this.a,this.b),hn.cross(Pn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return un.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return un.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return un.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return un.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return un.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,s=this.b,r=this.c;let o,a;zi.subVectors(s,n),Bi.subVectors(r,n),uo.subVectors(t,n);const c=zi.dot(uo),l=Bi.dot(uo);if(c<=0&&l<=0)return e.copy(n);fo.subVectors(t,s);const h=zi.dot(fo),u=Bi.dot(fo);if(h>=0&&u<=h)return e.copy(s);const d=c*u-h*l;if(d<=0&&c>=0&&h<=0)return o=c/(c-h),e.copy(n).addScaledVector(zi,o);po.subVectors(t,r);const f=zi.dot(po),m=Bi.dot(po);if(m>=0&&f<=m)return e.copy(r);const _=f*l-c*m;if(_<=0&&l>=0&&m<=0)return a=l/(l-m),e.copy(n).addScaledVector(Bi,a);const g=h*m-f*u;if(g<=0&&u-h>=0&&f-m>=0)return qc.subVectors(r,s),a=(u-h)/(u-h+(f-m)),e.copy(s).addScaledVector(qc,a);const p=1/(g+_+d);return o=_*p,a=d*p,e.copy(n).addScaledVector(zi,o).addScaledVector(Bi,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const yh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Wn={h:0,s:0,l:0},tr={h:0,s:0,l:0};function vo(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class Et{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=De){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ne.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=ne.workingColorSpace){return this.r=t,this.g=e,this.b=n,ne.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=ne.workingColorSpace){if(t=id(t,1),e=be(e,0,1),n=be(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=vo(o,r,t+1/3),this.g=vo(o,r,t),this.b=vo(o,r,t-1/3)}return ne.toWorkingColorSpace(this,s),this}setStyle(t,e=De){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=De){const n=yh[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Un(t.r),this.g=Un(t.g),this.b=Un(t.b),this}copyLinearToSRGB(t){return this.r=Ki(t.r),this.g=Ki(t.g),this.b=Ki(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=De){return ne.fromWorkingColorSpace(Be.copy(this),t),Math.round(be(Be.r*255,0,255))*65536+Math.round(be(Be.g*255,0,255))*256+Math.round(be(Be.b*255,0,255))}getHexString(t=De){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ne.workingColorSpace){ne.fromWorkingColorSpace(Be.copy(this),e);const n=Be.r,s=Be.g,r=Be.b,o=Math.max(n,s,r),a=Math.min(n,s,r);let c,l;const h=(a+o)/2;if(a===o)c=0,l=0;else{const u=o-a;switch(l=h<=.5?u/(o+a):u/(2-o-a),o){case n:c=(s-r)/u+(s<r?6:0);break;case s:c=(r-n)/u+2;break;case r:c=(n-s)/u+4;break}c/=6}return t.h=c,t.s=l,t.l=h,t}getRGB(t,e=ne.workingColorSpace){return ne.fromWorkingColorSpace(Be.copy(this),e),t.r=Be.r,t.g=Be.g,t.b=Be.b,t}getStyle(t=De){ne.fromWorkingColorSpace(Be.copy(this),t);const e=Be.r,n=Be.g,s=Be.b;return t!==De?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(Wn),this.setHSL(Wn.h+t,Wn.s+e,Wn.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Wn),t.getHSL(tr);const n=to(Wn.h,tr.h,e),s=to(Wn.s,tr.s,e),r=to(Wn.l,tr.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Be=new Et;Et.NAMES=yh;let Md=0;class Ai extends as{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Md++}),this.uuid=cs(),this.name="",this.blending=$i,this.side=ei,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Xo,this.blendDst=qo,this.blendEquation=fi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Et(0,0,0),this.blendAlpha=0,this.depthFunc=ji,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Cc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Pi,this.stencilZFail=Pi,this.stencilZPass=Pi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==$i&&(n.blending=this.blending),this.side!==ei&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Xo&&(n.blendSrc=this.blendSrc),this.blendDst!==qo&&(n.blendDst=this.blendDst),this.blendEquation!==fi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==ji&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Cc&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Pi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Pi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Pi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const o=[];for(const a in r){const c=r[a];delete c.metadata,o.push(c)}return o}if(e){const r=s(t.textures),o=s(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class pe extends Ai{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new Et(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new mn,this.combine=Wa,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Se=new L,er=new pt;class tn{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Pc,this.updateRanges=[],this.gpuType=wn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)er.fromBufferAttribute(this,e),er.applyMatrix3(t),this.setXY(e,er.x,er.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Se.fromBufferAttribute(this,e),Se.applyMatrix3(t),this.setXYZ(e,Se.x,Se.y,Se.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Se.fromBufferAttribute(this,e),Se.applyMatrix4(t),this.setXYZ(e,Se.x,Se.y,Se.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Se.fromBufferAttribute(this,e),Se.applyNormalMatrix(t),this.setXYZ(e,Se.x,Se.y,Se.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Se.fromBufferAttribute(this,e),Se.transformDirection(t),this.setXYZ(e,Se.x,Se.y,Se.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=fs(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Ye(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=fs(e,this.array)),e}setX(t,e){return this.normalized&&(e=Ye(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=fs(e,this.array)),e}setY(t,e){return this.normalized&&(e=Ye(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=fs(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Ye(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=fs(e,this.array)),e}setW(t,e){return this.normalized&&(e=Ye(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Ye(e,this.array),n=Ye(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=Ye(e,this.array),n=Ye(n,this.array),s=Ye(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=Ye(e,this.array),n=Ye(n,this.array),s=Ye(s,this.array),r=Ye(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Pc&&(t.usage=this.usage),t}}class wh extends tn{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class Sh extends tn{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class te extends tn{constructor(t,e,n){super(new Float32Array(t),e,n)}}let yd=0;const sn=new le,xo=new Ae,ki=new L,Je=new On,_s=new On,Le=new L;class Pe extends as{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:yd++}),this.uuid=cs(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(vh(t)?Sh:wh)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Yt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return sn.makeRotationFromQuaternion(t),this.applyMatrix4(sn),this}rotateX(t){return sn.makeRotationX(t),this.applyMatrix4(sn),this}rotateY(t){return sn.makeRotationY(t),this.applyMatrix4(sn),this}rotateZ(t){return sn.makeRotationZ(t),this.applyMatrix4(sn),this}translate(t,e,n){return sn.makeTranslation(t,e,n),this.applyMatrix4(sn),this}scale(t,e,n){return sn.makeScale(t,e,n),this.applyMatrix4(sn),this}lookAt(t){return xo.lookAt(t),xo.updateMatrix(),this.applyMatrix4(xo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ki).negate(),this.translate(ki.x,ki.y,ki.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let s=0,r=t.length;s<r;s++){const o=t[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new te(n,3))}else{for(let n=0,s=e.count;n<s;n++){const r=t[n];e.setXYZ(n,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new On);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new L(-1/0,-1/0,-1/0),new L(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){const r=e[n];Je.setFromBufferAttribute(r),this.morphTargetsRelative?(Le.addVectors(this.boundingBox.min,Je.min),this.boundingBox.expandByPoint(Le),Le.addVectors(this.boundingBox.max,Je.max),this.boundingBox.expandByPoint(Le)):(this.boundingBox.expandByPoint(Je.min),this.boundingBox.expandByPoint(Je.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ls);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new L,1/0);return}if(t){const n=this.boundingSphere.center;if(Je.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){const a=e[r];_s.setFromBufferAttribute(a),this.morphTargetsRelative?(Le.addVectors(Je.min,_s.min),Je.expandByPoint(Le),Le.addVectors(Je.max,_s.max),Je.expandByPoint(Le)):(Je.expandByPoint(_s.min),Je.expandByPoint(_s.max))}Je.getCenter(n);let s=0;for(let r=0,o=t.count;r<o;r++)Le.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(Le));if(e)for(let r=0,o=e.length;r<o;r++){const a=e[r],c=this.morphTargetsRelative;for(let l=0,h=a.count;l<h;l++)Le.fromBufferAttribute(a,l),c&&(ki.fromBufferAttribute(t,l),Le.add(ki)),s=Math.max(s,n.distanceToSquared(Le))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new tn(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],c=[];for(let I=0;I<n.count;I++)a[I]=new L,c[I]=new L;const l=new L,h=new L,u=new L,d=new pt,f=new pt,m=new pt,_=new L,g=new L;function p(I,y,M){l.fromBufferAttribute(n,I),h.fromBufferAttribute(n,y),u.fromBufferAttribute(n,M),d.fromBufferAttribute(r,I),f.fromBufferAttribute(r,y),m.fromBufferAttribute(r,M),h.sub(l),u.sub(l),f.sub(d),m.sub(d);const C=1/(f.x*m.y-m.x*f.y);isFinite(C)&&(_.copy(h).multiplyScalar(m.y).addScaledVector(u,-f.y).multiplyScalar(C),g.copy(u).multiplyScalar(f.x).addScaledVector(h,-m.x).multiplyScalar(C),a[I].add(_),a[y].add(_),a[M].add(_),c[I].add(g),c[y].add(g),c[M].add(g))}let w=this.groups;w.length===0&&(w=[{start:0,count:t.count}]);for(let I=0,y=w.length;I<y;++I){const M=w[I],C=M.start,O=M.count;for(let H=C,G=C+O;H<G;H+=3)p(t.getX(H+0),t.getX(H+1),t.getX(H+2))}const S=new L,x=new L,D=new L,E=new L;function R(I){D.fromBufferAttribute(s,I),E.copy(D);const y=a[I];S.copy(y),S.sub(D.multiplyScalar(D.dot(y))).normalize(),x.crossVectors(E,y);const C=x.dot(c[I])<0?-1:1;o.setXYZW(I,S.x,S.y,S.z,C)}for(let I=0,y=w.length;I<y;++I){const M=w[I],C=M.start,O=M.count;for(let H=C,G=C+O;H<G;H+=3)R(t.getX(H+0)),R(t.getX(H+1)),R(t.getX(H+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new tn(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);const s=new L,r=new L,o=new L,a=new L,c=new L,l=new L,h=new L,u=new L;if(t)for(let d=0,f=t.count;d<f;d+=3){const m=t.getX(d+0),_=t.getX(d+1),g=t.getX(d+2);s.fromBufferAttribute(e,m),r.fromBufferAttribute(e,_),o.fromBufferAttribute(e,g),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),a.fromBufferAttribute(n,m),c.fromBufferAttribute(n,_),l.fromBufferAttribute(n,g),a.add(h),c.add(h),l.add(h),n.setXYZ(m,a.x,a.y,a.z),n.setXYZ(_,c.x,c.y,c.z),n.setXYZ(g,l.x,l.y,l.z)}else for(let d=0,f=e.count;d<f;d+=3)s.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),o.fromBufferAttribute(e,d+2),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Le.fromBufferAttribute(t,e),Le.normalize(),t.setXYZ(e,Le.x,Le.y,Le.z)}toNonIndexed(){function t(a,c){const l=a.array,h=a.itemSize,u=a.normalized,d=new l.constructor(c.length*h);let f=0,m=0;for(let _=0,g=c.length;_<g;_++){a.isInterleavedBufferAttribute?f=c[_]*a.data.stride+a.offset:f=c[_]*h;for(let p=0;p<h;p++)d[m++]=l[f++]}return new tn(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Pe,n=this.index.array,s=this.attributes;for(const a in s){const c=s[a],l=t(c,n);e.setAttribute(a,l)}const r=this.morphAttributes;for(const a in r){const c=[],l=r[a];for(let h=0,u=l.length;h<u;h++){const d=l[h],f=t(d,n);c.push(f)}e.morphAttributes[a]=c}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,c=o.length;a<c;a++){const l=o[a];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const c in n){const l=n[c];t.data.attributes[c]=l.toJSON(t.data)}const s={};let r=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],h=[];for(let u=0,d=l.length;u<d;u++){const f=l[u];h.push(f.toJSON(t.data))}h.length>0&&(s[c]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const s=t.attributes;for(const l in s){const h=s[l];this.setAttribute(l,h.clone(e))}const r=t.morphAttributes;for(const l in r){const h=[],u=r[l];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(e));this.morphAttributes[l]=h}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let l=0,h=o.length;l<h;l++){const u=o[l];this.addGroup(u.start,u.count,u.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Yc=new le,ai=new Qa,nr=new ls,$c=new L,ir=new L,sr=new L,rr=new L,Mo=new L,or=new L,Zc=new L,ar=new L;class A extends Ae{constructor(t=new Pe,e=new pe){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(s,t);const a=this.morphTargetInfluences;if(r&&a){or.set(0,0,0);for(let c=0,l=r.length;c<l;c++){const h=a[c],u=r[c];h!==0&&(Mo.fromBufferAttribute(u,t),o?or.addScaledVector(Mo,h):or.addScaledVector(Mo.sub(e),h))}e.add(or)}return e}raycast(t,e){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),nr.copy(n.boundingSphere),nr.applyMatrix4(r),ai.copy(t.ray).recast(t.near),!(nr.containsPoint(ai.origin)===!1&&(ai.intersectSphere(nr,$c)===null||ai.origin.distanceToSquared($c)>(t.far-t.near)**2))&&(Yc.copy(r).invert(),ai.copy(t.ray).applyMatrix4(Yc),!(n.boundingBox!==null&&ai.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,ai)))}_computeIntersections(t,e,n){let s;const r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let m=0,_=d.length;m<_;m++){const g=d[m],p=o[g.materialIndex],w=Math.max(g.start,f.start),S=Math.min(a.count,Math.min(g.start+g.count,f.start+f.count));for(let x=w,D=S;x<D;x+=3){const E=a.getX(x),R=a.getX(x+1),I=a.getX(x+2);s=cr(this,p,t,n,l,h,u,E,R,I),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=g.materialIndex,e.push(s))}}else{const m=Math.max(0,f.start),_=Math.min(a.count,f.start+f.count);for(let g=m,p=_;g<p;g+=3){const w=a.getX(g),S=a.getX(g+1),x=a.getX(g+2);s=cr(this,o,t,n,l,h,u,w,S,x),s&&(s.faceIndex=Math.floor(g/3),e.push(s))}}else if(c!==void 0)if(Array.isArray(o))for(let m=0,_=d.length;m<_;m++){const g=d[m],p=o[g.materialIndex],w=Math.max(g.start,f.start),S=Math.min(c.count,Math.min(g.start+g.count,f.start+f.count));for(let x=w,D=S;x<D;x+=3){const E=x,R=x+1,I=x+2;s=cr(this,p,t,n,l,h,u,E,R,I),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=g.materialIndex,e.push(s))}}else{const m=Math.max(0,f.start),_=Math.min(c.count,f.start+f.count);for(let g=m,p=_;g<p;g+=3){const w=g,S=g+1,x=g+2;s=cr(this,o,t,n,l,h,u,w,S,x),s&&(s.faceIndex=Math.floor(g/3),e.push(s))}}}}function wd(i,t,e,n,s,r,o,a){let c;if(t.side===Fe?c=n.intersectTriangle(o,r,s,!0,a):c=n.intersectTriangle(s,r,o,t.side===ei,a),c===null)return null;ar.copy(a),ar.applyMatrix4(i.matrixWorld);const l=e.ray.origin.distanceTo(ar);return l<e.near||l>e.far?null:{distance:l,point:ar.clone(),object:i}}function cr(i,t,e,n,s,r,o,a,c,l){i.getVertexPosition(a,ir),i.getVertexPosition(c,sr),i.getVertexPosition(l,rr);const h=wd(i,t,e,n,ir,sr,rr,Zc);if(h){const u=new L;un.getBarycoord(Zc,ir,sr,rr,u),s&&(h.uv=un.getInterpolatedAttribute(s,a,c,l,u,new pt)),r&&(h.uv1=un.getInterpolatedAttribute(r,a,c,l,u,new pt)),o&&(h.normal=un.getInterpolatedAttribute(o,a,c,l,u,new L),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const d={a,b:c,c:l,normal:new L,materialIndex:0};un.getNormal(ir,sr,rr,d.normal),h.face=d,h.barycoord=u}return h}class Kt extends Pe{constructor(t=1,e=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const c=[],l=[],h=[],u=[];let d=0,f=0;m("z","y","x",-1,-1,n,e,t,o,r,0),m("z","y","x",1,-1,n,e,-t,o,r,1),m("x","z","y",1,1,t,n,e,s,o,2),m("x","z","y",1,-1,t,n,-e,s,o,3),m("x","y","z",1,-1,t,e,n,s,r,4),m("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new te(l,3)),this.setAttribute("normal",new te(h,3)),this.setAttribute("uv",new te(u,2));function m(_,g,p,w,S,x,D,E,R,I,y){const M=x/R,C=D/I,O=x/2,H=D/2,G=E/2,J=R+1,X=I+1;let it=0,V=0;const Q=new L;for(let K=0;K<X;K++){const lt=K*C-H;for(let xt=0;xt<J;xt++){const Pt=xt*M-O;Q[_]=Pt*w,Q[g]=lt*S,Q[p]=G,l.push(Q.x,Q.y,Q.z),Q[_]=0,Q[g]=0,Q[p]=E>0?1:-1,h.push(Q.x,Q.y,Q.z),u.push(xt/R),u.push(1-K/I),it+=1}}for(let K=0;K<I;K++)for(let lt=0;lt<R;lt++){const xt=d+lt+J*K,Pt=d+lt+J*(K+1),q=d+(lt+1)+J*(K+1),st=d+(lt+1)+J*K;c.push(xt,Pt,st),c.push(Pt,q,st),V+=6}a.addGroup(f,V,y),f+=V,d+=it}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Kt(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function ss(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function Ve(i){const t={};for(let e=0;e<i.length;e++){const n=ss(i[e]);for(const s in n)t[s]=n[s]}return t}function Sd(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Eh(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:ne.workingColorSpace}const Ed={clone:ss,merge:Ve};var Td=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,bd=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ni extends Ai{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Td,this.fragmentShader=bd,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=ss(t.uniforms),this.uniformsGroups=Sd(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class Th extends Ae{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new le,this.projectionMatrix=new le,this.projectionMatrixInverse=new le,this.coordinateSystem=Dn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Xn=new L,Kc=new pt,Jc=new pt;class He extends Th{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Ca*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Qr*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Ca*2*Math.atan(Math.tan(Qr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Xn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Xn.x,Xn.y).multiplyScalar(-t/Xn.z),Xn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Xn.x,Xn.y).multiplyScalar(-t/Xn.z)}getViewSize(t,e){return this.getViewBounds(t,Kc,Jc),e.subVectors(Jc,Kc)}setViewOffset(t,e,n,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Qr*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*s/c,e-=o.offsetY*n/l,s*=o.width/c,n*=o.height/l}const a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Hi=-90,Gi=1;class Ad extends Ae{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new He(Hi,Gi,t,e);s.layers=this.layers,this.add(s);const r=new He(Hi,Gi,t,e);r.layers=this.layers,this.add(r);const o=new He(Hi,Gi,t,e);o.layers=this.layers,this.add(o);const a=new He(Hi,Gi,t,e);a.layers=this.layers,this.add(a);const c=new He(Hi,Gi,t,e);c.layers=this.layers,this.add(c);const l=new He(Hi,Gi,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,s,r,o,a,c]=e;for(const l of e)this.remove(l);if(t===Dn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===Pr)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,c,l,h]=this.children,u=t.getRenderTarget(),d=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),m=t.xr.enabled;t.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,o),t.setRenderTarget(n,2,s),t.render(e,a),t.setRenderTarget(n,3,s),t.render(e,c),t.setRenderTarget(n,4,s),t.render(e,l),n.texture.generateMipmaps=_,t.setRenderTarget(n,5,s),t.render(e,h),t.setRenderTarget(u,d,f),t.xr.enabled=m,n.texture.needsPMREMUpdate=!0}}class bh extends Ge{constructor(t,e,n,s,r,o,a,c,l,h){t=t!==void 0?t:[],e=e!==void 0?e:Qi,super(t,e,n,s,r,o,a,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Rd extends Si{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new bh(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:yn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Kt(5,5,5),r=new ni({name:"CubemapFromEquirect",uniforms:ss(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Fe,blending:jn});r.uniforms.tEquirect.value=e;const o=new A(s,r),a=e.minFilter;return e.minFilter===vi&&(e.minFilter=yn),new Ad(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,n,s){const r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,s);t.setRenderTarget(r)}}const yo=new L,Cd=new L,Pd=new Yt;class ui{constructor(t=new L(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const s=yo.subVectors(n,e).cross(Cd.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(yo),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||Pd.getNormalMatrix(t),s=this.coplanarPoint(yo).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ci=new ls,lr=new L;class ec{constructor(t=new ui,e=new ui,n=new ui,s=new ui,r=new ui,o=new ui){this.planes=[t,e,n,s,r,o]}set(t,e,n,s,r,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Dn){const n=this.planes,s=t.elements,r=s[0],o=s[1],a=s[2],c=s[3],l=s[4],h=s[5],u=s[6],d=s[7],f=s[8],m=s[9],_=s[10],g=s[11],p=s[12],w=s[13],S=s[14],x=s[15];if(n[0].setComponents(c-r,d-l,g-f,x-p).normalize(),n[1].setComponents(c+r,d+l,g+f,x+p).normalize(),n[2].setComponents(c+o,d+h,g+m,x+w).normalize(),n[3].setComponents(c-o,d-h,g-m,x-w).normalize(),n[4].setComponents(c-a,d-u,g-_,x-S).normalize(),e===Dn)n[5].setComponents(c+a,d+u,g+_,x+S).normalize();else if(e===Pr)n[5].setComponents(a,u,_,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),ci.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),ci.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(ci)}intersectsSprite(t){return ci.center.set(0,0,0),ci.radius=.7071067811865476,ci.applyMatrix4(t.matrixWorld),this.intersectsSphere(ci)}intersectsSphere(t){const e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const s=e[n];if(lr.x=s.normal.x>0?t.max.x:t.min.x,lr.y=s.normal.y>0?t.max.y:t.min.y,lr.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(lr)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Ah(){let i=null,t=!1,e=null,n=null;function s(r,o){e(r,o),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function Ld(i){const t=new WeakMap;function e(a,c){const l=a.array,h=a.usage,u=l.byteLength,d=i.createBuffer();i.bindBuffer(c,d),i.bufferData(c,l,h),a.onUploadCallback();let f;if(l instanceof Float32Array)f=i.FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)f=i.SHORT;else if(l instanceof Uint32Array)f=i.UNSIGNED_INT;else if(l instanceof Int32Array)f=i.INT;else if(l instanceof Int8Array)f=i.BYTE;else if(l instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:d,type:f,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,c,l){const h=c.array,u=c.updateRanges;if(i.bindBuffer(l,a),u.length===0)i.bufferSubData(l,0,h);else{u.sort((f,m)=>f.start-m.start);let d=0;for(let f=1;f<u.length;f++){const m=u[d],_=u[f];_.start<=m.start+m.count+1?m.count=Math.max(m.count,_.start+_.count-m.start):(++d,u[d]=_)}u.length=d+1;for(let f=0,m=u.length;f<m;f++){const _=u[f];i.bufferSubData(l,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const c=t.get(a);c&&(i.deleteBuffer(c.buffer),t.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const l=t.get(a);if(l===void 0)t.set(a,e(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,a,c),l.version=a.version}}return{get:s,remove:r,update:o}}class dn extends Pe{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};const r=t/2,o=e/2,a=Math.floor(n),c=Math.floor(s),l=a+1,h=c+1,u=t/a,d=e/c,f=[],m=[],_=[],g=[];for(let p=0;p<h;p++){const w=p*d-o;for(let S=0;S<l;S++){const x=S*u-r;m.push(x,-w,0),_.push(0,0,1),g.push(S/a),g.push(1-p/c)}}for(let p=0;p<c;p++)for(let w=0;w<a;w++){const S=w+l*p,x=w+l*(p+1),D=w+1+l*(p+1),E=w+1+l*p;f.push(S,x,E),f.push(x,D,E)}this.setIndex(f),this.setAttribute("position",new te(m,3)),this.setAttribute("normal",new te(_,3)),this.setAttribute("uv",new te(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new dn(t.width,t.height,t.widthSegments,t.heightSegments)}}var Id=`#ifdef USE_ALPHAHASH
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
#endif`,qd=`#ifdef USE_BUMPMAP
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
#endif`,Yd=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,rf=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,of=`#ifdef USE_DISPLACEMENTMAP
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
#endif`,qf=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Yf=`#ifdef USE_MORPHNORMALS
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
#endif`,rp=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,op=`#ifdef OPAQUE
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
}`,qp=`#include <common>
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
}`,Yp=`uniform vec3 diffuse;
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
}`,r0=`#define TOON
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
}`,o0=`uniform float size;
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
}`,Zt={alphahash_fragment:Id,alphahash_pars_fragment:Dd,alphamap_fragment:Ud,alphamap_pars_fragment:Nd,alphatest_fragment:Fd,alphatest_pars_fragment:Od,aomap_fragment:zd,aomap_pars_fragment:Bd,batching_pars_vertex:kd,batching_vertex:Hd,begin_vertex:Gd,beginnormal_vertex:Vd,bsdfs:Wd,iridescence_fragment:Xd,bumpmap_pars_fragment:qd,clipping_planes_fragment:Yd,clipping_planes_pars_fragment:$d,clipping_planes_pars_vertex:Zd,clipping_planes_vertex:Kd,color_fragment:Jd,color_pars_fragment:jd,color_pars_vertex:Qd,color_vertex:tf,common:ef,cube_uv_reflection_fragment:nf,defaultnormal_vertex:sf,displacementmap_pars_vertex:rf,displacementmap_vertex:of,emissivemap_fragment:af,emissivemap_pars_fragment:cf,colorspace_fragment:lf,colorspace_pars_fragment:hf,envmap_fragment:uf,envmap_common_pars_fragment:df,envmap_pars_fragment:ff,envmap_pars_vertex:pf,envmap_physical_pars_fragment:Tf,envmap_vertex:mf,fog_vertex:gf,fog_pars_vertex:_f,fog_fragment:vf,fog_pars_fragment:xf,gradientmap_pars_fragment:Mf,lightmap_pars_fragment:yf,lights_lambert_fragment:wf,lights_lambert_pars_fragment:Sf,lights_pars_begin:Ef,lights_toon_fragment:bf,lights_toon_pars_fragment:Af,lights_phong_fragment:Rf,lights_phong_pars_fragment:Cf,lights_physical_fragment:Pf,lights_physical_pars_fragment:Lf,lights_fragment_begin:If,lights_fragment_maps:Df,lights_fragment_end:Uf,logdepthbuf_fragment:Nf,logdepthbuf_pars_fragment:Ff,logdepthbuf_pars_vertex:Of,logdepthbuf_vertex:zf,map_fragment:Bf,map_pars_fragment:kf,map_particle_fragment:Hf,map_particle_pars_fragment:Gf,metalnessmap_fragment:Vf,metalnessmap_pars_fragment:Wf,morphinstance_vertex:Xf,morphcolor_vertex:qf,morphnormal_vertex:Yf,morphtarget_pars_vertex:$f,morphtarget_vertex:Zf,normal_fragment_begin:Kf,normal_fragment_maps:Jf,normal_pars_fragment:jf,normal_pars_vertex:Qf,normal_vertex:tp,normalmap_pars_fragment:ep,clearcoat_normal_fragment_begin:np,clearcoat_normal_fragment_maps:ip,clearcoat_pars_fragment:sp,iridescence_pars_fragment:rp,opaque_fragment:op,packing:ap,premultiplied_alpha_fragment:cp,project_vertex:lp,dithering_fragment:hp,dithering_pars_fragment:up,roughnessmap_fragment:dp,roughnessmap_pars_fragment:fp,shadowmap_pars_fragment:pp,shadowmap_pars_vertex:mp,shadowmap_vertex:gp,shadowmask_pars_fragment:_p,skinbase_vertex:vp,skinning_pars_vertex:xp,skinning_vertex:Mp,skinnormal_vertex:yp,specularmap_fragment:wp,specularmap_pars_fragment:Sp,tonemapping_fragment:Ep,tonemapping_pars_fragment:Tp,transmission_fragment:bp,transmission_pars_fragment:Ap,uv_pars_fragment:Rp,uv_pars_vertex:Cp,uv_vertex:Pp,worldpos_vertex:Lp,background_vert:Ip,background_frag:Dp,backgroundCube_vert:Up,backgroundCube_frag:Np,cube_vert:Fp,cube_frag:Op,depth_vert:zp,depth_frag:Bp,distanceRGBA_vert:kp,distanceRGBA_frag:Hp,equirect_vert:Gp,equirect_frag:Vp,linedashed_vert:Wp,linedashed_frag:Xp,meshbasic_vert:qp,meshbasic_frag:Yp,meshlambert_vert:$p,meshlambert_frag:Zp,meshmatcap_vert:Kp,meshmatcap_frag:Jp,meshnormal_vert:jp,meshnormal_frag:Qp,meshphong_vert:t0,meshphong_frag:e0,meshphysical_vert:n0,meshphysical_frag:i0,meshtoon_vert:s0,meshtoon_frag:r0,points_vert:o0,points_frag:a0,shadow_vert:c0,shadow_frag:l0,sprite_vert:h0,sprite_frag:u0},Mt={common:{diffuse:{value:new Et(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Yt},alphaMap:{value:null},alphaMapTransform:{value:new Yt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Yt}},envmap:{envMap:{value:null},envMapRotation:{value:new Yt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Yt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Yt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Yt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Yt},normalScale:{value:new pt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Yt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Yt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Yt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Yt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Et(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Et(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Yt},alphaTest:{value:0},uvTransform:{value:new Yt}},sprite:{diffuse:{value:new Et(16777215)},opacity:{value:1},center:{value:new pt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Yt},alphaMap:{value:null},alphaMapTransform:{value:new Yt},alphaTest:{value:0}}},xn={basic:{uniforms:Ve([Mt.common,Mt.specularmap,Mt.envmap,Mt.aomap,Mt.lightmap,Mt.fog]),vertexShader:Zt.meshbasic_vert,fragmentShader:Zt.meshbasic_frag},lambert:{uniforms:Ve([Mt.common,Mt.specularmap,Mt.envmap,Mt.aomap,Mt.lightmap,Mt.emissivemap,Mt.bumpmap,Mt.normalmap,Mt.displacementmap,Mt.fog,Mt.lights,{emissive:{value:new Et(0)}}]),vertexShader:Zt.meshlambert_vert,fragmentShader:Zt.meshlambert_frag},phong:{uniforms:Ve([Mt.common,Mt.specularmap,Mt.envmap,Mt.aomap,Mt.lightmap,Mt.emissivemap,Mt.bumpmap,Mt.normalmap,Mt.displacementmap,Mt.fog,Mt.lights,{emissive:{value:new Et(0)},specular:{value:new Et(1118481)},shininess:{value:30}}]),vertexShader:Zt.meshphong_vert,fragmentShader:Zt.meshphong_frag},standard:{uniforms:Ve([Mt.common,Mt.envmap,Mt.aomap,Mt.lightmap,Mt.emissivemap,Mt.bumpmap,Mt.normalmap,Mt.displacementmap,Mt.roughnessmap,Mt.metalnessmap,Mt.fog,Mt.lights,{emissive:{value:new Et(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Zt.meshphysical_vert,fragmentShader:Zt.meshphysical_frag},toon:{uniforms:Ve([Mt.common,Mt.aomap,Mt.lightmap,Mt.emissivemap,Mt.bumpmap,Mt.normalmap,Mt.displacementmap,Mt.gradientmap,Mt.fog,Mt.lights,{emissive:{value:new Et(0)}}]),vertexShader:Zt.meshtoon_vert,fragmentShader:Zt.meshtoon_frag},matcap:{uniforms:Ve([Mt.common,Mt.bumpmap,Mt.normalmap,Mt.displacementmap,Mt.fog,{matcap:{value:null}}]),vertexShader:Zt.meshmatcap_vert,fragmentShader:Zt.meshmatcap_frag},points:{uniforms:Ve([Mt.points,Mt.fog]),vertexShader:Zt.points_vert,fragmentShader:Zt.points_frag},dashed:{uniforms:Ve([Mt.common,Mt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Zt.linedashed_vert,fragmentShader:Zt.linedashed_frag},depth:{uniforms:Ve([Mt.common,Mt.displacementmap]),vertexShader:Zt.depth_vert,fragmentShader:Zt.depth_frag},normal:{uniforms:Ve([Mt.common,Mt.bumpmap,Mt.normalmap,Mt.displacementmap,{opacity:{value:1}}]),vertexShader:Zt.meshnormal_vert,fragmentShader:Zt.meshnormal_frag},sprite:{uniforms:Ve([Mt.sprite,Mt.fog]),vertexShader:Zt.sprite_vert,fragmentShader:Zt.sprite_frag},background:{uniforms:{uvTransform:{value:new Yt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Zt.background_vert,fragmentShader:Zt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Yt}},vertexShader:Zt.backgroundCube_vert,fragmentShader:Zt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Zt.cube_vert,fragmentShader:Zt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Zt.equirect_vert,fragmentShader:Zt.equirect_frag},distanceRGBA:{uniforms:Ve([Mt.common,Mt.displacementmap,{referencePosition:{value:new L},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Zt.distanceRGBA_vert,fragmentShader:Zt.distanceRGBA_frag},shadow:{uniforms:Ve([Mt.lights,Mt.fog,{color:{value:new Et(0)},opacity:{value:1}}]),vertexShader:Zt.shadow_vert,fragmentShader:Zt.shadow_frag}};xn.physical={uniforms:Ve([xn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Yt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Yt},clearcoatNormalScale:{value:new pt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Yt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Yt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Yt},sheen:{value:0},sheenColor:{value:new Et(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Yt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Yt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Yt},transmissionSamplerSize:{value:new pt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Yt},attenuationDistance:{value:0},attenuationColor:{value:new Et(0)},specularColor:{value:new Et(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Yt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Yt},anisotropyVector:{value:new pt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Yt}}]),vertexShader:Zt.meshphysical_vert,fragmentShader:Zt.meshphysical_frag};const hr={r:0,b:0,g:0},li=new mn,d0=new le;function f0(i,t,e,n,s,r,o){const a=new Et(0);let c=r===!0?0:1,l,h,u=null,d=0,f=null;function m(w){let S=w.isScene===!0?w.background:null;return S&&S.isTexture&&(S=(w.backgroundBlurriness>0?e:t).get(S)),S}function _(w){let S=!1;const x=m(w);x===null?p(a,c):x&&x.isColor&&(p(x,1),S=!0);const D=i.xr.getEnvironmentBlendMode();D==="additive"?n.buffers.color.setClear(0,0,0,1,o):D==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||S)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function g(w,S){const x=m(S);x&&(x.isCubeTexture||x.mapping===Wr)?(h===void 0&&(h=new A(new Kt(1,1,1),new ni({name:"BackgroundCubeMaterial",uniforms:ss(xn.backgroundCube.uniforms),vertexShader:xn.backgroundCube.vertexShader,fragmentShader:xn.backgroundCube.fragmentShader,side:Fe,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(D,E,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),li.copy(S.backgroundRotation),li.x*=-1,li.y*=-1,li.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(li.y*=-1,li.z*=-1),h.material.uniforms.envMap.value=x,h.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=S.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(d0.makeRotationFromEuler(li)),h.material.toneMapped=ne.getTransfer(x.colorSpace)!==he,(u!==x||d!==x.version||f!==i.toneMapping)&&(h.material.needsUpdate=!0,u=x,d=x.version,f=i.toneMapping),h.layers.enableAll(),w.unshift(h,h.geometry,h.material,0,0,null)):x&&x.isTexture&&(l===void 0&&(l=new A(new dn(2,2),new ni({name:"BackgroundMaterial",uniforms:ss(xn.background.uniforms),vertexShader:xn.background.vertexShader,fragmentShader:xn.background.fragmentShader,side:ei,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=x,l.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,l.material.toneMapped=ne.getTransfer(x.colorSpace)!==he,x.matrixAutoUpdate===!0&&x.updateMatrix(),l.material.uniforms.uvTransform.value.copy(x.matrix),(u!==x||d!==x.version||f!==i.toneMapping)&&(l.material.needsUpdate=!0,u=x,d=x.version,f=i.toneMapping),l.layers.enableAll(),w.unshift(l,l.geometry,l.material,0,0,null))}function p(w,S){w.getRGB(hr,Eh(i)),n.buffers.color.setClear(hr.r,hr.g,hr.b,S,o)}return{getClearColor:function(){return a},setClearColor:function(w,S=1){a.set(w),c=S,p(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(w){c=w,p(a,c)},render:_,addToRenderList:g}}function p0(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null);let r=s,o=!1;function a(M,C,O,H,G){let J=!1;const X=u(H,O,C);r!==X&&(r=X,l(r.object)),J=f(M,H,O,G),J&&m(M,H,O,G),G!==null&&t.update(G,i.ELEMENT_ARRAY_BUFFER),(J||o)&&(o=!1,x(M,C,O,H),G!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(G).buffer))}function c(){return i.createVertexArray()}function l(M){return i.bindVertexArray(M)}function h(M){return i.deleteVertexArray(M)}function u(M,C,O){const H=O.wireframe===!0;let G=n[M.id];G===void 0&&(G={},n[M.id]=G);let J=G[C.id];J===void 0&&(J={},G[C.id]=J);let X=J[H];return X===void 0&&(X=d(c()),J[H]=X),X}function d(M){const C=[],O=[],H=[];for(let G=0;G<e;G++)C[G]=0,O[G]=0,H[G]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:C,enabledAttributes:O,attributeDivisors:H,object:M,attributes:{},index:null}}function f(M,C,O,H){const G=r.attributes,J=C.attributes;let X=0;const it=O.getAttributes();for(const V in it)if(it[V].location>=0){const K=G[V];let lt=J[V];if(lt===void 0&&(V==="instanceMatrix"&&M.instanceMatrix&&(lt=M.instanceMatrix),V==="instanceColor"&&M.instanceColor&&(lt=M.instanceColor)),K===void 0||K.attribute!==lt||lt&&K.data!==lt.data)return!0;X++}return r.attributesNum!==X||r.index!==H}function m(M,C,O,H){const G={},J=C.attributes;let X=0;const it=O.getAttributes();for(const V in it)if(it[V].location>=0){let K=J[V];K===void 0&&(V==="instanceMatrix"&&M.instanceMatrix&&(K=M.instanceMatrix),V==="instanceColor"&&M.instanceColor&&(K=M.instanceColor));const lt={};lt.attribute=K,K&&K.data&&(lt.data=K.data),G[V]=lt,X++}r.attributes=G,r.attributesNum=X,r.index=H}function _(){const M=r.newAttributes;for(let C=0,O=M.length;C<O;C++)M[C]=0}function g(M){p(M,0)}function p(M,C){const O=r.newAttributes,H=r.enabledAttributes,G=r.attributeDivisors;O[M]=1,H[M]===0&&(i.enableVertexAttribArray(M),H[M]=1),G[M]!==C&&(i.vertexAttribDivisor(M,C),G[M]=C)}function w(){const M=r.newAttributes,C=r.enabledAttributes;for(let O=0,H=C.length;O<H;O++)C[O]!==M[O]&&(i.disableVertexAttribArray(O),C[O]=0)}function S(M,C,O,H,G,J,X){X===!0?i.vertexAttribIPointer(M,C,O,G,J):i.vertexAttribPointer(M,C,O,H,G,J)}function x(M,C,O,H){_();const G=H.attributes,J=O.getAttributes(),X=C.defaultAttributeValues;for(const it in J){const V=J[it];if(V.location>=0){let Q=G[it];if(Q===void 0&&(it==="instanceMatrix"&&M.instanceMatrix&&(Q=M.instanceMatrix),it==="instanceColor"&&M.instanceColor&&(Q=M.instanceColor)),Q!==void 0){const K=Q.normalized,lt=Q.itemSize,xt=t.get(Q);if(xt===void 0)continue;const Pt=xt.buffer,q=xt.type,st=xt.bytesPerElement,_t=q===i.INT||q===i.UNSIGNED_INT||Q.gpuType===Xa;if(Q.isInterleavedBufferAttribute){const ht=Q.data,gt=ht.stride,Lt=Q.offset;if(ht.isInstancedInterleavedBuffer){for(let Ut=0;Ut<V.locationSize;Ut++)p(V.location+Ut,ht.meshPerAttribute);M.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=ht.meshPerAttribute*ht.count)}else for(let Ut=0;Ut<V.locationSize;Ut++)g(V.location+Ut);i.bindBuffer(i.ARRAY_BUFFER,Pt);for(let Ut=0;Ut<V.locationSize;Ut++)S(V.location+Ut,lt/V.locationSize,q,K,gt*st,(Lt+lt/V.locationSize*Ut)*st,_t)}else{if(Q.isInstancedBufferAttribute){for(let ht=0;ht<V.locationSize;ht++)p(V.location+ht,Q.meshPerAttribute);M.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=Q.meshPerAttribute*Q.count)}else for(let ht=0;ht<V.locationSize;ht++)g(V.location+ht);i.bindBuffer(i.ARRAY_BUFFER,Pt);for(let ht=0;ht<V.locationSize;ht++)S(V.location+ht,lt/V.locationSize,q,K,lt*st,lt/V.locationSize*ht*st,_t)}}else if(X!==void 0){const K=X[it];if(K!==void 0)switch(K.length){case 2:i.vertexAttrib2fv(V.location,K);break;case 3:i.vertexAttrib3fv(V.location,K);break;case 4:i.vertexAttrib4fv(V.location,K);break;default:i.vertexAttrib1fv(V.location,K)}}}}w()}function D(){I();for(const M in n){const C=n[M];for(const O in C){const H=C[O];for(const G in H)h(H[G].object),delete H[G];delete C[O]}delete n[M]}}function E(M){if(n[M.id]===void 0)return;const C=n[M.id];for(const O in C){const H=C[O];for(const G in H)h(H[G].object),delete H[G];delete C[O]}delete n[M.id]}function R(M){for(const C in n){const O=n[C];if(O[M.id]===void 0)continue;const H=O[M.id];for(const G in H)h(H[G].object),delete H[G];delete O[M.id]}}function I(){y(),o=!0,r!==s&&(r=s,l(r.object))}function y(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:I,resetDefaultState:y,dispose:D,releaseStatesOfGeometry:E,releaseStatesOfProgram:R,initAttributes:_,enableAttribute:g,disableUnusedAttributes:w}}function m0(i,t,e){let n;function s(l){n=l}function r(l,h){i.drawArrays(n,l,h),e.update(h,n,1)}function o(l,h,u){u!==0&&(i.drawArraysInstanced(n,l,h,u),e.update(h,n,u))}function a(l,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,h,0,u);let f=0;for(let m=0;m<u;m++)f+=h[m];e.update(f,n,1)}function c(l,h,u,d){if(u===0)return;const f=t.get("WEBGL_multi_draw");if(f===null)for(let m=0;m<l.length;m++)o(l[m],h[m],d[m]);else{f.multiDrawArraysInstancedWEBGL(n,l,0,h,0,d,0,u);let m=0;for(let _=0;_<u;_++)m+=h[_]*d[_];e.update(m,n,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function g0(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const R=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(R){return!(R!==fn&&n.convert(R)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(R){const I=R===zs&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(R!==Nn&&n.convert(R)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&R!==wn&&!I)}function c(R){if(R==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp";const h=c(l);h!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);const u=e.logarithmicDepthBuffer===!0,d=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),m=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_TEXTURE_SIZE),g=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),w=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),S=i.getParameter(i.MAX_VARYING_VECTORS),x=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),D=m>0,E=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:u,reverseDepthBuffer:d,maxTextures:f,maxVertexTextures:m,maxTextureSize:_,maxCubemapSize:g,maxAttributes:p,maxVertexUniforms:w,maxVaryings:S,maxFragmentUniforms:x,vertexTextures:D,maxSamples:E}}function _0(i){const t=this;let e=null,n=0,s=!1,r=!1;const o=new ui,a=new Yt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){const f=u.length!==0||d||n!==0||s;return s=d,n=u.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){e=h(u,d,0)},this.setState=function(u,d,f){const m=u.clippingPlanes,_=u.clipIntersection,g=u.clipShadows,p=i.get(u);if(!s||m===null||m.length===0||r&&!g)r?h(null):l();else{const w=r?0:n,S=w*4;let x=p.clippingState||null;c.value=x,x=h(m,d,S,f);for(let D=0;D!==S;++D)x[D]=e[D];p.clippingState=x,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=w}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,d,f,m){const _=u!==null?u.length:0;let g=null;if(_!==0){if(g=c.value,m!==!0||g===null){const p=f+_*4,w=d.matrixWorldInverse;a.getNormalMatrix(w),(g===null||g.length<p)&&(g=new Float32Array(p));for(let S=0,x=f;S!==_;++S,x+=4)o.copy(u[S]).applyMatrix4(w,a),o.normal.toArray(g,x),g[x+3]=o.constant}c.value=g,c.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,g}}function v0(i){let t=new WeakMap;function e(o,a){return a===ta?o.mapping=Qi:a===ea&&(o.mapping=ts),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===ta||a===ea)if(t.has(o)){const c=t.get(o).texture;return e(c,o.mapping)}else{const c=o.image;if(c&&c.height>0){const l=new Rd(c.height);return l.fromEquirectangularTexture(i,o),t.set(o,l),o.addEventListener("dispose",s),e(l.texture,o.mapping)}else return null}}return o}function s(o){const a=o.target;a.removeEventListener("dispose",s);const c=t.get(a);c!==void 0&&(t.delete(a),c.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}class Rh extends Th{constructor(t=-1,e=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-t,o=n+t,a=s+e,c=s-e;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=h*this.view.offsetY,c=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const qi=4,jc=[.125,.215,.35,.446,.526,.582],pi=20,wo=new Rh,Qc=new Et;let So=null,Eo=0,To=0,bo=!1;const di=(1+Math.sqrt(5))/2,Vi=1/di,tl=[new L(-di,Vi,0),new L(di,Vi,0),new L(-Vi,0,di),new L(Vi,0,di),new L(0,di,-Vi),new L(0,di,Vi),new L(-1,1,-1),new L(1,1,-1),new L(-1,1,1),new L(1,1,1)];class Pa{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100){So=this._renderer.getRenderTarget(),Eo=this._renderer.getActiveCubeFace(),To=this._renderer.getActiveMipmapLevel(),bo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=il(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=nl(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(So,Eo,To),this._renderer.xr.enabled=bo,t.scissorTest=!1,ur(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Qi||t.mapping===ts?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),So=this._renderer.getRenderTarget(),Eo=this._renderer.getActiveCubeFace(),To=this._renderer.getActiveMipmapLevel(),bo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:yn,minFilter:yn,generateMipmaps:!1,type:zs,format:fn,colorSpace:os,depthBuffer:!1},s=el(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=el(t,e,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=x0(r)),this._blurMaterial=M0(r,t,e)}return s}_compileMaterial(t){const e=new A(this._lodPlanes[0],t);this._renderer.compile(e,wo)}_sceneToCubeUV(t,e,n,s){const a=new He(90,1,e,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(Qc),h.toneMapping=Qn,h.autoClear=!1;const f=new pe({name:"PMREM.Background",side:Fe,depthWrite:!1,depthTest:!1}),m=new A(new Kt,f);let _=!1;const g=t.background;g?g.isColor&&(f.color.copy(g),t.background=null,_=!0):(f.color.copy(Qc),_=!0);for(let p=0;p<6;p++){const w=p%3;w===0?(a.up.set(0,c[p],0),a.lookAt(l[p],0,0)):w===1?(a.up.set(0,0,c[p]),a.lookAt(0,l[p],0)):(a.up.set(0,c[p],0),a.lookAt(0,0,l[p]));const S=this._cubeSize;ur(s,w*S,p>2?S:0,S,S),h.setRenderTarget(s),_&&h.render(m,a),h.render(t,a)}m.geometry.dispose(),m.material.dispose(),h.toneMapping=d,h.autoClear=u,t.background=g}_textureToCubeUV(t,e){const n=this._renderer,s=t.mapping===Qi||t.mapping===ts;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=il()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=nl());const r=s?this._cubemapMaterial:this._equirectMaterial,o=new A(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;const c=this._cubeSize;ur(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(o,wo)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=tl[(s-r-1)%tl.length];this._blur(t,r-1,r,o,a)}e.autoClear=n}_blur(t,e,n,s,r){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,s,"latitudinal",r),this._halfBlur(o,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,o,a){const c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new A(this._lodPlanes[s],l),d=l.uniforms,f=this._sizeLods[n]-1,m=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*pi-1),_=r/m,g=isFinite(r)?1+Math.floor(h*_):pi;g>pi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${pi}`);const p=[];let w=0;for(let R=0;R<pi;++R){const I=R/_,y=Math.exp(-I*I/2);p.push(y),R===0?w+=y:R<g&&(w+=2*y)}for(let R=0;R<p.length;R++)p[R]=p[R]/w;d.envMap.value=t.texture,d.samples.value=g,d.weights.value=p,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:S}=this;d.dTheta.value=m,d.mipInt.value=S-n;const x=this._sizeLods[s],D=3*x*(s>S-qi?s-S+qi:0),E=4*(this._cubeSize-x);ur(e,D,E,3*x,2*x),c.setRenderTarget(e),c.render(u,wo)}}function x0(i){const t=[],e=[],n=[];let s=i;const r=i-qi+1+jc.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);e.push(a);let c=1/a;o>i-qi?c=jc[o-i+qi-1]:o===0&&(c=0),n.push(c);const l=1/(a-2),h=-l,u=1+l,d=[h,h,u,h,u,u,h,h,u,u,h,u],f=6,m=6,_=3,g=2,p=1,w=new Float32Array(_*m*f),S=new Float32Array(g*m*f),x=new Float32Array(p*m*f);for(let E=0;E<f;E++){const R=E%3*2/3-1,I=E>2?0:-1,y=[R,I,0,R+2/3,I,0,R+2/3,I+1,0,R,I,0,R+2/3,I+1,0,R,I+1,0];w.set(y,_*m*E),S.set(d,g*m*E);const M=[E,E,E,E,E,E];x.set(M,p*m*E)}const D=new Pe;D.setAttribute("position",new tn(w,_)),D.setAttribute("uv",new tn(S,g)),D.setAttribute("faceIndex",new tn(x,p)),t.push(D),s>qi&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function el(i,t,e){const n=new Si(i,t,e);return n.texture.mapping=Wr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function ur(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function M0(i,t,e){const n=new Float32Array(pi),s=new L(0,1,0);return new ni({name:"SphericalGaussianBlur",defines:{n:pi,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:nc(),fragmentShader:`

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
		`,blending:jn,depthTest:!1,depthWrite:!1})}function nl(){return new ni({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:nc(),fragmentShader:`

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
		`,blending:jn,depthTest:!1,depthWrite:!1})}function il(){return new ni({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:nc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:jn,depthTest:!1,depthWrite:!1})}function nc(){return`

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
	`}function y0(i){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){const c=a.mapping,l=c===ta||c===ea,h=c===Qi||c===ts;if(l||h){let u=t.get(a);const d=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return e===null&&(e=new Pa(i)),u=l?e.fromEquirectangular(a,u):e.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),u.texture;if(u!==void 0)return u.texture;{const f=a.image;return l&&f&&f.height>0||h&&f&&s(f)?(e===null&&(e=new Pa(i)),u=l?e.fromEquirectangular(a):e.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),a.addEventListener("dispose",r),u.texture):null}}}return a}function s(a){let c=0;const l=6;for(let h=0;h<l;h++)a[h]!==void 0&&c++;return c===l}function r(a){const c=a.target;c.removeEventListener("dispose",r);const l=t.get(c);l!==void 0&&(t.delete(c),l.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function w0(i){const t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const s=e(n);return s===null&&Ts("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function S0(i,t,e,n){const s={},r=new WeakMap;function o(u){const d=u.target;d.index!==null&&t.remove(d.index);for(const m in d.attributes)t.remove(d.attributes[m]);for(const m in d.morphAttributes){const _=d.morphAttributes[m];for(let g=0,p=_.length;g<p;g++)t.remove(_[g])}d.removeEventListener("dispose",o),delete s[d.id];const f=r.get(d);f&&(t.remove(f),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function a(u,d){return s[d.id]===!0||(d.addEventListener("dispose",o),s[d.id]=!0,e.memory.geometries++),d}function c(u){const d=u.attributes;for(const m in d)t.update(d[m],i.ARRAY_BUFFER);const f=u.morphAttributes;for(const m in f){const _=f[m];for(let g=0,p=_.length;g<p;g++)t.update(_[g],i.ARRAY_BUFFER)}}function l(u){const d=[],f=u.index,m=u.attributes.position;let _=0;if(f!==null){const w=f.array;_=f.version;for(let S=0,x=w.length;S<x;S+=3){const D=w[S+0],E=w[S+1],R=w[S+2];d.push(D,E,E,R,R,D)}}else if(m!==void 0){const w=m.array;_=m.version;for(let S=0,x=w.length/3-1;S<x;S+=3){const D=S+0,E=S+1,R=S+2;d.push(D,E,E,R,R,D)}}else return;const g=new(vh(d)?Sh:wh)(d,1);g.version=_;const p=r.get(u);p&&t.remove(p),r.set(u,g)}function h(u){const d=r.get(u);if(d){const f=u.index;f!==null&&d.version<f.version&&l(u)}else l(u);return r.get(u)}return{get:a,update:c,getWireframeAttribute:h}}function E0(i,t,e){let n;function s(d){n=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function c(d,f){i.drawElements(n,f,r,d*o),e.update(f,n,1)}function l(d,f,m){m!==0&&(i.drawElementsInstanced(n,f,r,d*o,m),e.update(f,n,m))}function h(d,f,m){if(m===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,d,0,m);let g=0;for(let p=0;p<m;p++)g+=f[p];e.update(g,n,1)}function u(d,f,m,_){if(m===0)return;const g=t.get("WEBGL_multi_draw");if(g===null)for(let p=0;p<d.length;p++)l(d[p]/o,f[p],_[p]);else{g.multiDrawElementsInstancedWEBGL(n,f,0,r,d,0,_,0,m);let p=0;for(let w=0;w<m;w++)p+=f[w]*_[w];e.update(p,n,1)}}this.setMode=s,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function T0(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(r/3);break;case i.LINES:e.lines+=a*(r/2);break;case i.LINE_STRIP:e.lines+=a*(r-1);break;case i.LINE_LOOP:e.lines+=a*r;break;case i.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function b0(i,t,e){const n=new WeakMap,s=new ue;function r(o,a,c){const l=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0;let d=n.get(a);if(d===void 0||d.count!==u){let M=function(){I.dispose(),n.delete(a),a.removeEventListener("dispose",M)};var f=M;d!==void 0&&d.texture.dispose();const m=a.morphAttributes.position!==void 0,_=a.morphAttributes.normal!==void 0,g=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],w=a.morphAttributes.normal||[],S=a.morphAttributes.color||[];let x=0;m===!0&&(x=1),_===!0&&(x=2),g===!0&&(x=3);let D=a.attributes.position.count*x,E=1;D>t.maxTextureSize&&(E=Math.ceil(D/t.maxTextureSize),D=t.maxTextureSize);const R=new Float32Array(D*E*4*u),I=new Mh(R,D,E,u);I.type=wn,I.needsUpdate=!0;const y=x*4;for(let C=0;C<u;C++){const O=p[C],H=w[C],G=S[C],J=D*E*4*C;for(let X=0;X<O.count;X++){const it=X*y;m===!0&&(s.fromBufferAttribute(O,X),R[J+it+0]=s.x,R[J+it+1]=s.y,R[J+it+2]=s.z,R[J+it+3]=0),_===!0&&(s.fromBufferAttribute(H,X),R[J+it+4]=s.x,R[J+it+5]=s.y,R[J+it+6]=s.z,R[J+it+7]=0),g===!0&&(s.fromBufferAttribute(G,X),R[J+it+8]=s.x,R[J+it+9]=s.y,R[J+it+10]=s.z,R[J+it+11]=G.itemSize===4?s.w:1)}}d={count:u,texture:I,size:new pt(D,E)},n.set(a,d),a.addEventListener("dispose",M)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",o.morphTexture,e);else{let m=0;for(let g=0;g<l.length;g++)m+=l[g];const _=a.morphTargetsRelative?1:1-m;c.getUniforms().setValue(i,"morphTargetBaseInfluence",_),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",d.texture,e),c.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:r}}function A0(i,t,e,n){let s=new WeakMap;function r(c){const l=n.render.frame,h=c.geometry,u=t.get(c,h);if(s.get(u)!==l&&(t.update(u),s.set(u,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),s.get(c)!==l&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),s.set(c,l))),c.isSkinnedMesh){const d=c.skeleton;s.get(d)!==l&&(d.update(),s.set(d,l))}return u}function o(){s=new WeakMap}function a(c){const l=c.target;l.removeEventListener("dispose",a),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:r,dispose:o}}class Ch extends Ge{constructor(t,e,n,s,r,o,a,c,l,h=Zi){if(h!==Zi&&h!==is)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Zi&&(n=wi),n===void 0&&h===is&&(n=ns),super(null,s,r,o,a,c,h,n,l),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:Qe,this.minFilter=c!==void 0?c:Qe,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const Ph=new Ge,sl=new Ch(1,1),Lh=new Mh,Ih=new dd,Dh=new bh,rl=[],ol=[],al=new Float32Array(16),cl=new Float32Array(9),ll=new Float32Array(4);function hs(i,t,e){const n=i[0];if(n<=0||n>0)return i;const s=t*e;let r=rl[s];if(r===void 0&&(r=new Float32Array(s),rl[s]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(r,a)}return r}function Re(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Ce(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function qr(i,t){let e=ol[t];e===void 0&&(e=new Int32Array(t),ol[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function R0(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function C0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Re(e,t))return;i.uniform2fv(this.addr,t),Ce(e,t)}}function P0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Re(e,t))return;i.uniform3fv(this.addr,t),Ce(e,t)}}function L0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Re(e,t))return;i.uniform4fv(this.addr,t),Ce(e,t)}}function I0(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Re(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Ce(e,t)}else{if(Re(e,n))return;ll.set(n),i.uniformMatrix2fv(this.addr,!1,ll),Ce(e,n)}}function D0(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Re(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Ce(e,t)}else{if(Re(e,n))return;cl.set(n),i.uniformMatrix3fv(this.addr,!1,cl),Ce(e,n)}}function U0(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Re(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Ce(e,t)}else{if(Re(e,n))return;al.set(n),i.uniformMatrix4fv(this.addr,!1,al),Ce(e,n)}}function N0(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function F0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Re(e,t))return;i.uniform2iv(this.addr,t),Ce(e,t)}}function O0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Re(e,t))return;i.uniform3iv(this.addr,t),Ce(e,t)}}function z0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Re(e,t))return;i.uniform4iv(this.addr,t),Ce(e,t)}}function B0(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function k0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Re(e,t))return;i.uniform2uiv(this.addr,t),Ce(e,t)}}function H0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Re(e,t))return;i.uniform3uiv(this.addr,t),Ce(e,t)}}function G0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Re(e,t))return;i.uniform4uiv(this.addr,t),Ce(e,t)}}function V0(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(sl.compareFunction=_h,r=sl):r=Ph,e.setTexture2D(t||r,s)}function W0(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||Ih,s)}function X0(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||Dh,s)}function q0(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||Lh,s)}function Y0(i){switch(i){case 5126:return R0;case 35664:return C0;case 35665:return P0;case 35666:return L0;case 35674:return I0;case 35675:return D0;case 35676:return U0;case 5124:case 35670:return N0;case 35667:case 35671:return F0;case 35668:case 35672:return O0;case 35669:case 35673:return z0;case 5125:return B0;case 36294:return k0;case 36295:return H0;case 36296:return G0;case 35678:case 36198:case 36298:case 36306:case 35682:return V0;case 35679:case 36299:case 36307:return W0;case 35680:case 36300:case 36308:case 36293:return X0;case 36289:case 36303:case 36311:case 36292:return q0}}function $0(i,t){i.uniform1fv(this.addr,t)}function Z0(i,t){const e=hs(t,this.size,2);i.uniform2fv(this.addr,e)}function K0(i,t){const e=hs(t,this.size,3);i.uniform3fv(this.addr,e)}function J0(i,t){const e=hs(t,this.size,4);i.uniform4fv(this.addr,e)}function j0(i,t){const e=hs(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function Q0(i,t){const e=hs(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function tm(i,t){const e=hs(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function em(i,t){i.uniform1iv(this.addr,t)}function nm(i,t){i.uniform2iv(this.addr,t)}function im(i,t){i.uniform3iv(this.addr,t)}function sm(i,t){i.uniform4iv(this.addr,t)}function rm(i,t){i.uniform1uiv(this.addr,t)}function om(i,t){i.uniform2uiv(this.addr,t)}function am(i,t){i.uniform3uiv(this.addr,t)}function cm(i,t){i.uniform4uiv(this.addr,t)}function lm(i,t,e){const n=this.cache,s=t.length,r=qr(e,s);Re(n,r)||(i.uniform1iv(this.addr,r),Ce(n,r));for(let o=0;o!==s;++o)e.setTexture2D(t[o]||Ph,r[o])}function hm(i,t,e){const n=this.cache,s=t.length,r=qr(e,s);Re(n,r)||(i.uniform1iv(this.addr,r),Ce(n,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||Ih,r[o])}function um(i,t,e){const n=this.cache,s=t.length,r=qr(e,s);Re(n,r)||(i.uniform1iv(this.addr,r),Ce(n,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||Dh,r[o])}function dm(i,t,e){const n=this.cache,s=t.length,r=qr(e,s);Re(n,r)||(i.uniform1iv(this.addr,r),Ce(n,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||Lh,r[o])}function fm(i){switch(i){case 5126:return $0;case 35664:return Z0;case 35665:return K0;case 35666:return J0;case 35674:return j0;case 35675:return Q0;case 35676:return tm;case 5124:case 35670:return em;case 35667:case 35671:return nm;case 35668:case 35672:return im;case 35669:case 35673:return sm;case 5125:return rm;case 36294:return om;case 36295:return am;case 36296:return cm;case 35678:case 36198:case 36298:case 36306:case 35682:return lm;case 35679:case 36299:case 36307:return hm;case 35680:case 36300:case 36308:case 36293:return um;case 36289:case 36303:case 36311:case 36292:return dm}}class pm{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Y0(e.type)}}class mm{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=fm(e.type)}}class gm{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(t,e[a.id],n)}}}const Ao=/(\w+)(\])?(\[|\.)?/g;function hl(i,t){i.seq.push(t),i.map[t.id]=t}function _m(i,t,e){const n=i.name,s=n.length;for(Ao.lastIndex=0;;){const r=Ao.exec(n),o=Ao.lastIndex;let a=r[1];const c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===s){hl(e,l===void 0?new pm(a,i,t):new mm(a,i,t));break}else{let u=e.map[a];u===void 0&&(u=new gm(a),hl(e,u)),e=u}}}class Rr{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const r=t.getActiveUniform(e,s),o=t.getUniformLocation(e,r.name);_m(r,o,this)}}setValue(t,e,n,s){const r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){const s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,o=e.length;r!==o;++r){const a=e[r],c=n[a.id];c.needsUpdate!==!1&&a.setValue(t,c.value,s)}}static seqWithValue(t,e){const n=[];for(let s=0,r=t.length;s!==r;++s){const o=t[s];o.id in e&&n.push(o)}return n}}function ul(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const vm=37297;let xm=0;function Mm(i,t){const e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){const a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}const dl=new Yt;function ym(i){ne._getMatrix(dl,ne.workingColorSpace,i);const t=`mat3( ${dl.elements.map(e=>e.toFixed(4))} )`;switch(ne.getTransfer(i)){case Xr:return[t,"LinearTransferOETF"];case he:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function fl(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const o=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+Mm(i.getShaderSource(t),o)}else return s}function wm(i,t){const e=ym(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function Sm(i,t){let e;switch(t){case Bu:e="Linear";break;case ku:e="Reinhard";break;case Hu:e="Cineon";break;case Vr:e="ACESFilmic";break;case Vu:e="AgX";break;case Wu:e="Neutral";break;case Gu:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const dr=new L;function Em(){ne.getLuminanceCoefficients(dr);const i=dr.x.toFixed(4),t=dr.y.toFixed(4),e=dr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Tm(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(bs).join(`
`)}function bm(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Am(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(t,s),o=r.name;let a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function bs(i){return i!==""}function pl(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function ml(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const Rm=/^[ \t]*#include +<([\w\d./]+)>/gm;function La(i){return i.replace(Rm,Pm)}const Cm=new Map;function Pm(i,t){let e=Zt[t];if(e===void 0){const n=Cm.get(t);if(n!==void 0)e=Zt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return La(e)}const Lm=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function gl(i){return i.replace(Lm,Im)}function Im(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function _l(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}function Dm(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===rh?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===oh?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===In&&(t="SHADOWMAP_TYPE_VSM"),t}function Um(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Qi:case ts:t="ENVMAP_TYPE_CUBE";break;case Wr:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Nm(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case ts:t="ENVMAP_MODE_REFRACTION";break}return t}function Fm(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Wa:t="ENVMAP_BLENDING_MULTIPLY";break;case Ou:t="ENVMAP_BLENDING_MIX";break;case zu:t="ENVMAP_BLENDING_ADD";break}return t}function Om(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function zm(i,t,e,n){const s=i.getContext(),r=e.defines;let o=e.vertexShader,a=e.fragmentShader;const c=Dm(e),l=Um(e),h=Nm(e),u=Fm(e),d=Om(e),f=Tm(e),m=bm(r),_=s.createProgram();let g,p,w=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(g=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(bs).join(`
`),g.length>0&&(g+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(bs).join(`
`),p.length>0&&(p+=`
`)):(g=[_l(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(bs).join(`
`),p=[_l(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Qn?"#define TONE_MAPPING":"",e.toneMapping!==Qn?Zt.tonemapping_pars_fragment:"",e.toneMapping!==Qn?Sm("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Zt.colorspace_pars_fragment,wm("linearToOutputTexel",e.outputColorSpace),Em(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(bs).join(`
`)),o=La(o),o=pl(o,e),o=ml(o,e),a=La(a),a=pl(a,e),a=ml(a,e),o=gl(o),a=gl(a),e.isRawShaderMaterial!==!0&&(w=`#version 300 es
`,g=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,p=["#define varying in",e.glslVersion===Lc?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Lc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const S=w+g+o,x=w+p+a,D=ul(s,s.VERTEX_SHADER,S),E=ul(s,s.FRAGMENT_SHADER,x);s.attachShader(_,D),s.attachShader(_,E),e.index0AttributeName!==void 0?s.bindAttribLocation(_,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function R(C){if(i.debug.checkShaderErrors){const O=s.getProgramInfoLog(_).trim(),H=s.getShaderInfoLog(D).trim(),G=s.getShaderInfoLog(E).trim();let J=!0,X=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(J=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,_,D,E);else{const it=fl(s,D,"vertex"),V=fl(s,E,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+C.name+`
Material Type: `+C.type+`

Program Info Log: `+O+`
`+it+`
`+V)}else O!==""?console.warn("THREE.WebGLProgram: Program Info Log:",O):(H===""||G==="")&&(X=!1);X&&(C.diagnostics={runnable:J,programLog:O,vertexShader:{log:H,prefix:g},fragmentShader:{log:G,prefix:p}})}s.deleteShader(D),s.deleteShader(E),I=new Rr(s,_),y=Am(s,_)}let I;this.getUniforms=function(){return I===void 0&&R(this),I};let y;this.getAttributes=function(){return y===void 0&&R(this),y};let M=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=s.getProgramParameter(_,vm)),M},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=xm++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=D,this.fragmentShader=E,this}let Bm=0;class km{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new Hm(t),e.set(t,n)),n}}class Hm{constructor(t){this.id=Bm++,this.code=t,this.usedTimes=0}}function Gm(i,t,e,n,s,r,o){const a=new tc,c=new km,l=new Set,h=[],u=s.logarithmicDepthBuffer,d=s.vertexTextures;let f=s.precision;const m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(y){return l.add(y),y===0?"uv":`uv${y}`}function g(y,M,C,O,H){const G=O.fog,J=H.geometry,X=y.isMeshStandardMaterial?O.environment:null,it=(y.isMeshStandardMaterial?e:t).get(y.envMap||X),V=it&&it.mapping===Wr?it.image.height:null,Q=m[y.type];y.precision!==null&&(f=s.getMaxPrecision(y.precision),f!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",f,"instead."));const K=J.morphAttributes.position||J.morphAttributes.normal||J.morphAttributes.color,lt=K!==void 0?K.length:0;let xt=0;J.morphAttributes.position!==void 0&&(xt=1),J.morphAttributes.normal!==void 0&&(xt=2),J.morphAttributes.color!==void 0&&(xt=3);let Pt,q,st,_t;if(Q){const ae=xn[Q];Pt=ae.vertexShader,q=ae.fragmentShader}else Pt=y.vertexShader,q=y.fragmentShader,c.update(y),st=c.getVertexShaderID(y),_t=c.getFragmentShaderID(y);const ht=i.getRenderTarget(),gt=i.state.buffers.depth.getReversed(),Lt=H.isInstancedMesh===!0,Ut=H.isBatchedMesh===!0,Wt=!!y.map,rt=!!y.matcap,dt=!!it,P=!!y.aoMap,It=!!y.lightMap,W=!!y.bumpMap,N=!!y.normalMap,U=!!y.displacementMap,ot=!!y.emissiveMap,ct=!!y.metalnessMap,T=!!y.roughnessMap,v=y.anisotropy>0,B=y.clearcoat>0,Z=y.dispersion>0,tt=y.iridescence>0,j=y.sheen>0,yt=y.transmission>0,vt=v&&!!y.anisotropyMap,Tt=B&&!!y.clearcoatMap,Jt=B&&!!y.clearcoatNormalMap,ft=B&&!!y.clearcoatRoughnessMap,St=tt&&!!y.iridescenceMap,Ht=tt&&!!y.iridescenceThicknessMap,Gt=j&&!!y.sheenColorMap,Ct=j&&!!y.sheenRoughnessMap,jt=!!y.specularMap,$t=!!y.specularColorMap,de=!!y.specularIntensityMap,F=yt&&!!y.transmissionMap,wt=yt&&!!y.thicknessMap,et=!!y.gradientMap,at=!!y.alphaMap,Rt=y.alphaTest>0,bt=!!y.alphaHash,Xt=!!y.extensions;let xe=Qn;y.toneMapped&&(ht===null||ht.isXRRenderTarget===!0)&&(xe=i.toneMapping);const Oe={shaderID:Q,shaderType:y.type,shaderName:y.name,vertexShader:Pt,fragmentShader:q,defines:y.defines,customVertexShaderID:st,customFragmentShaderID:_t,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:f,batching:Ut,batchingColor:Ut&&H._colorsTexture!==null,instancing:Lt,instancingColor:Lt&&H.instanceColor!==null,instancingMorph:Lt&&H.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:ht===null?i.outputColorSpace:ht.isXRRenderTarget===!0?ht.texture.colorSpace:os,alphaToCoverage:!!y.alphaToCoverage,map:Wt,matcap:rt,envMap:dt,envMapMode:dt&&it.mapping,envMapCubeUVHeight:V,aoMap:P,lightMap:It,bumpMap:W,normalMap:N,displacementMap:d&&U,emissiveMap:ot,normalMapObjectSpace:N&&y.normalMapType===$u,normalMapTangentSpace:N&&y.normalMapType===ja,metalnessMap:ct,roughnessMap:T,anisotropy:v,anisotropyMap:vt,clearcoat:B,clearcoatMap:Tt,clearcoatNormalMap:Jt,clearcoatRoughnessMap:ft,dispersion:Z,iridescence:tt,iridescenceMap:St,iridescenceThicknessMap:Ht,sheen:j,sheenColorMap:Gt,sheenRoughnessMap:Ct,specularMap:jt,specularColorMap:$t,specularIntensityMap:de,transmission:yt,transmissionMap:F,thicknessMap:wt,gradientMap:et,opaque:y.transparent===!1&&y.blending===$i&&y.alphaToCoverage===!1,alphaMap:at,alphaTest:Rt,alphaHash:bt,combine:y.combine,mapUv:Wt&&_(y.map.channel),aoMapUv:P&&_(y.aoMap.channel),lightMapUv:It&&_(y.lightMap.channel),bumpMapUv:W&&_(y.bumpMap.channel),normalMapUv:N&&_(y.normalMap.channel),displacementMapUv:U&&_(y.displacementMap.channel),emissiveMapUv:ot&&_(y.emissiveMap.channel),metalnessMapUv:ct&&_(y.metalnessMap.channel),roughnessMapUv:T&&_(y.roughnessMap.channel),anisotropyMapUv:vt&&_(y.anisotropyMap.channel),clearcoatMapUv:Tt&&_(y.clearcoatMap.channel),clearcoatNormalMapUv:Jt&&_(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ft&&_(y.clearcoatRoughnessMap.channel),iridescenceMapUv:St&&_(y.iridescenceMap.channel),iridescenceThicknessMapUv:Ht&&_(y.iridescenceThicknessMap.channel),sheenColorMapUv:Gt&&_(y.sheenColorMap.channel),sheenRoughnessMapUv:Ct&&_(y.sheenRoughnessMap.channel),specularMapUv:jt&&_(y.specularMap.channel),specularColorMapUv:$t&&_(y.specularColorMap.channel),specularIntensityMapUv:de&&_(y.specularIntensityMap.channel),transmissionMapUv:F&&_(y.transmissionMap.channel),thicknessMapUv:wt&&_(y.thicknessMap.channel),alphaMapUv:at&&_(y.alphaMap.channel),vertexTangents:!!J.attributes.tangent&&(N||v),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!J.attributes.color&&J.attributes.color.itemSize===4,pointsUvs:H.isPoints===!0&&!!J.attributes.uv&&(Wt||at),fog:!!G,useFog:y.fog===!0,fogExp2:!!G&&G.isFogExp2,flatShading:y.flatShading===!0,sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:gt,skinning:H.isSkinnedMesh===!0,morphTargets:J.morphAttributes.position!==void 0,morphNormals:J.morphAttributes.normal!==void 0,morphColors:J.morphAttributes.color!==void 0,morphTargetsCount:lt,morphTextureStride:xt,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:y.dithering,shadowMapEnabled:i.shadowMap.enabled&&C.length>0,shadowMapType:i.shadowMap.type,toneMapping:xe,decodeVideoTexture:Wt&&y.map.isVideoTexture===!0&&ne.getTransfer(y.map.colorSpace)===he,decodeVideoTextureEmissive:ot&&y.emissiveMap.isVideoTexture===!0&&ne.getTransfer(y.emissiveMap.colorSpace)===he,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===Te,flipSided:y.side===Fe,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:Xt&&y.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Xt&&y.extensions.multiDraw===!0||Ut)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return Oe.vertexUv1s=l.has(1),Oe.vertexUv2s=l.has(2),Oe.vertexUv3s=l.has(3),l.clear(),Oe}function p(y){const M=[];if(y.shaderID?M.push(y.shaderID):(M.push(y.customVertexShaderID),M.push(y.customFragmentShaderID)),y.defines!==void 0)for(const C in y.defines)M.push(C),M.push(y.defines[C]);return y.isRawShaderMaterial===!1&&(w(M,y),S(M,y),M.push(i.outputColorSpace)),M.push(y.customProgramCacheKey),M.join()}function w(y,M){y.push(M.precision),y.push(M.outputColorSpace),y.push(M.envMapMode),y.push(M.envMapCubeUVHeight),y.push(M.mapUv),y.push(M.alphaMapUv),y.push(M.lightMapUv),y.push(M.aoMapUv),y.push(M.bumpMapUv),y.push(M.normalMapUv),y.push(M.displacementMapUv),y.push(M.emissiveMapUv),y.push(M.metalnessMapUv),y.push(M.roughnessMapUv),y.push(M.anisotropyMapUv),y.push(M.clearcoatMapUv),y.push(M.clearcoatNormalMapUv),y.push(M.clearcoatRoughnessMapUv),y.push(M.iridescenceMapUv),y.push(M.iridescenceThicknessMapUv),y.push(M.sheenColorMapUv),y.push(M.sheenRoughnessMapUv),y.push(M.specularMapUv),y.push(M.specularColorMapUv),y.push(M.specularIntensityMapUv),y.push(M.transmissionMapUv),y.push(M.thicknessMapUv),y.push(M.combine),y.push(M.fogExp2),y.push(M.sizeAttenuation),y.push(M.morphTargetsCount),y.push(M.morphAttributeCount),y.push(M.numDirLights),y.push(M.numPointLights),y.push(M.numSpotLights),y.push(M.numSpotLightMaps),y.push(M.numHemiLights),y.push(M.numRectAreaLights),y.push(M.numDirLightShadows),y.push(M.numPointLightShadows),y.push(M.numSpotLightShadows),y.push(M.numSpotLightShadowsWithMaps),y.push(M.numLightProbes),y.push(M.shadowMapType),y.push(M.toneMapping),y.push(M.numClippingPlanes),y.push(M.numClipIntersection),y.push(M.depthPacking)}function S(y,M){a.disableAll(),M.supportsVertexTextures&&a.enable(0),M.instancing&&a.enable(1),M.instancingColor&&a.enable(2),M.instancingMorph&&a.enable(3),M.matcap&&a.enable(4),M.envMap&&a.enable(5),M.normalMapObjectSpace&&a.enable(6),M.normalMapTangentSpace&&a.enable(7),M.clearcoat&&a.enable(8),M.iridescence&&a.enable(9),M.alphaTest&&a.enable(10),M.vertexColors&&a.enable(11),M.vertexAlphas&&a.enable(12),M.vertexUv1s&&a.enable(13),M.vertexUv2s&&a.enable(14),M.vertexUv3s&&a.enable(15),M.vertexTangents&&a.enable(16),M.anisotropy&&a.enable(17),M.alphaHash&&a.enable(18),M.batching&&a.enable(19),M.dispersion&&a.enable(20),M.batchingColor&&a.enable(21),y.push(a.mask),a.disableAll(),M.fog&&a.enable(0),M.useFog&&a.enable(1),M.flatShading&&a.enable(2),M.logarithmicDepthBuffer&&a.enable(3),M.reverseDepthBuffer&&a.enable(4),M.skinning&&a.enable(5),M.morphTargets&&a.enable(6),M.morphNormals&&a.enable(7),M.morphColors&&a.enable(8),M.premultipliedAlpha&&a.enable(9),M.shadowMapEnabled&&a.enable(10),M.doubleSided&&a.enable(11),M.flipSided&&a.enable(12),M.useDepthPacking&&a.enable(13),M.dithering&&a.enable(14),M.transmission&&a.enable(15),M.sheen&&a.enable(16),M.opaque&&a.enable(17),M.pointsUvs&&a.enable(18),M.decodeVideoTexture&&a.enable(19),M.decodeVideoTextureEmissive&&a.enable(20),M.alphaToCoverage&&a.enable(21),y.push(a.mask)}function x(y){const M=m[y.type];let C;if(M){const O=xn[M];C=Ed.clone(O.uniforms)}else C=y.uniforms;return C}function D(y,M){let C;for(let O=0,H=h.length;O<H;O++){const G=h[O];if(G.cacheKey===M){C=G,++C.usedTimes;break}}return C===void 0&&(C=new zm(i,M,y,r),h.push(C)),C}function E(y){if(--y.usedTimes===0){const M=h.indexOf(y);h[M]=h[h.length-1],h.pop(),y.destroy()}}function R(y){c.remove(y)}function I(){c.dispose()}return{getParameters:g,getProgramCacheKey:p,getUniforms:x,acquireProgram:D,releaseProgram:E,releaseShaderCache:R,programs:h,dispose:I}}function Vm(){let i=new WeakMap;function t(o){return i.has(o)}function e(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,c){i.get(o)[a]=c}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function Wm(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function vl(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function xl(){const i=[];let t=0;const e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function o(u,d,f,m,_,g){let p=i[t];return p===void 0?(p={id:u.id,object:u,geometry:d,material:f,groupOrder:m,renderOrder:u.renderOrder,z:_,group:g},i[t]=p):(p.id=u.id,p.object=u,p.geometry=d,p.material=f,p.groupOrder=m,p.renderOrder=u.renderOrder,p.z=_,p.group=g),t++,p}function a(u,d,f,m,_,g){const p=o(u,d,f,m,_,g);f.transmission>0?n.push(p):f.transparent===!0?s.push(p):e.push(p)}function c(u,d,f,m,_,g){const p=o(u,d,f,m,_,g);f.transmission>0?n.unshift(p):f.transparent===!0?s.unshift(p):e.unshift(p)}function l(u,d){e.length>1&&e.sort(u||Wm),n.length>1&&n.sort(d||vl),s.length>1&&s.sort(d||vl)}function h(){for(let u=t,d=i.length;u<d;u++){const f=i[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:a,unshift:c,finish:h,sort:l}}function Xm(){let i=new WeakMap;function t(n,s){const r=i.get(n);let o;return r===void 0?(o=new xl,i.set(n,[o])):s>=r.length?(o=new xl,r.push(o)):o=r[s],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function qm(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new L,color:new Et};break;case"SpotLight":e={position:new L,direction:new L,color:new Et,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new L,color:new Et,distance:0,decay:0};break;case"HemisphereLight":e={direction:new L,skyColor:new Et,groundColor:new Et};break;case"RectAreaLight":e={color:new Et,position:new L,halfWidth:new L,halfHeight:new L};break}return i[t.id]=e,e}}}function Ym(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let $m=0;function Zm(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function Km(i){const t=new qm,e=Ym(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new L);const s=new L,r=new le,o=new le;function a(l){let h=0,u=0,d=0;for(let y=0;y<9;y++)n.probe[y].set(0,0,0);let f=0,m=0,_=0,g=0,p=0,w=0,S=0,x=0,D=0,E=0,R=0;l.sort(Zm);for(let y=0,M=l.length;y<M;y++){const C=l[y],O=C.color,H=C.intensity,G=C.distance,J=C.shadow&&C.shadow.map?C.shadow.map.texture:null;if(C.isAmbientLight)h+=O.r*H,u+=O.g*H,d+=O.b*H;else if(C.isLightProbe){for(let X=0;X<9;X++)n.probe[X].addScaledVector(C.sh.coefficients[X],H);R++}else if(C.isDirectionalLight){const X=t.get(C);if(X.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){const it=C.shadow,V=e.get(C);V.shadowIntensity=it.intensity,V.shadowBias=it.bias,V.shadowNormalBias=it.normalBias,V.shadowRadius=it.radius,V.shadowMapSize=it.mapSize,n.directionalShadow[f]=V,n.directionalShadowMap[f]=J,n.directionalShadowMatrix[f]=C.shadow.matrix,w++}n.directional[f]=X,f++}else if(C.isSpotLight){const X=t.get(C);X.position.setFromMatrixPosition(C.matrixWorld),X.color.copy(O).multiplyScalar(H),X.distance=G,X.coneCos=Math.cos(C.angle),X.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),X.decay=C.decay,n.spot[_]=X;const it=C.shadow;if(C.map&&(n.spotLightMap[D]=C.map,D++,it.updateMatrices(C),C.castShadow&&E++),n.spotLightMatrix[_]=it.matrix,C.castShadow){const V=e.get(C);V.shadowIntensity=it.intensity,V.shadowBias=it.bias,V.shadowNormalBias=it.normalBias,V.shadowRadius=it.radius,V.shadowMapSize=it.mapSize,n.spotShadow[_]=V,n.spotShadowMap[_]=J,x++}_++}else if(C.isRectAreaLight){const X=t.get(C);X.color.copy(O).multiplyScalar(H),X.halfWidth.set(C.width*.5,0,0),X.halfHeight.set(0,C.height*.5,0),n.rectArea[g]=X,g++}else if(C.isPointLight){const X=t.get(C);if(X.color.copy(C.color).multiplyScalar(C.intensity),X.distance=C.distance,X.decay=C.decay,C.castShadow){const it=C.shadow,V=e.get(C);V.shadowIntensity=it.intensity,V.shadowBias=it.bias,V.shadowNormalBias=it.normalBias,V.shadowRadius=it.radius,V.shadowMapSize=it.mapSize,V.shadowCameraNear=it.camera.near,V.shadowCameraFar=it.camera.far,n.pointShadow[m]=V,n.pointShadowMap[m]=J,n.pointShadowMatrix[m]=C.shadow.matrix,S++}n.point[m]=X,m++}else if(C.isHemisphereLight){const X=t.get(C);X.skyColor.copy(C.color).multiplyScalar(H),X.groundColor.copy(C.groundColor).multiplyScalar(H),n.hemi[p]=X,p++}}g>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Mt.LTC_FLOAT_1,n.rectAreaLTC2=Mt.LTC_FLOAT_2):(n.rectAreaLTC1=Mt.LTC_HALF_1,n.rectAreaLTC2=Mt.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;const I=n.hash;(I.directionalLength!==f||I.pointLength!==m||I.spotLength!==_||I.rectAreaLength!==g||I.hemiLength!==p||I.numDirectionalShadows!==w||I.numPointShadows!==S||I.numSpotShadows!==x||I.numSpotMaps!==D||I.numLightProbes!==R)&&(n.directional.length=f,n.spot.length=_,n.rectArea.length=g,n.point.length=m,n.hemi.length=p,n.directionalShadow.length=w,n.directionalShadowMap.length=w,n.pointShadow.length=S,n.pointShadowMap.length=S,n.spotShadow.length=x,n.spotShadowMap.length=x,n.directionalShadowMatrix.length=w,n.pointShadowMatrix.length=S,n.spotLightMatrix.length=x+D-E,n.spotLightMap.length=D,n.numSpotLightShadowsWithMaps=E,n.numLightProbes=R,I.directionalLength=f,I.pointLength=m,I.spotLength=_,I.rectAreaLength=g,I.hemiLength=p,I.numDirectionalShadows=w,I.numPointShadows=S,I.numSpotShadows=x,I.numSpotMaps=D,I.numLightProbes=R,n.version=$m++)}function c(l,h){let u=0,d=0,f=0,m=0,_=0;const g=h.matrixWorldInverse;for(let p=0,w=l.length;p<w;p++){const S=l[p];if(S.isDirectionalLight){const x=n.directional[u];x.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),x.direction.sub(s),x.direction.transformDirection(g),u++}else if(S.isSpotLight){const x=n.spot[f];x.position.setFromMatrixPosition(S.matrixWorld),x.position.applyMatrix4(g),x.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),x.direction.sub(s),x.direction.transformDirection(g),f++}else if(S.isRectAreaLight){const x=n.rectArea[m];x.position.setFromMatrixPosition(S.matrixWorld),x.position.applyMatrix4(g),o.identity(),r.copy(S.matrixWorld),r.premultiply(g),o.extractRotation(r),x.halfWidth.set(S.width*.5,0,0),x.halfHeight.set(0,S.height*.5,0),x.halfWidth.applyMatrix4(o),x.halfHeight.applyMatrix4(o),m++}else if(S.isPointLight){const x=n.point[d];x.position.setFromMatrixPosition(S.matrixWorld),x.position.applyMatrix4(g),d++}else if(S.isHemisphereLight){const x=n.hemi[_];x.direction.setFromMatrixPosition(S.matrixWorld),x.direction.transformDirection(g),_++}}}return{setup:a,setupView:c,state:n}}function Ml(i){const t=new Km(i),e=[],n=[];function s(h){l.camera=h,e.length=0,n.length=0}function r(h){e.push(h)}function o(h){n.push(h)}function a(){t.setup(e)}function c(h){t.setupView(e,h)}const l={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:l,setupLights:a,setupLightsView:c,pushLight:r,pushShadow:o}}function Jm(i){let t=new WeakMap;function e(s,r=0){const o=t.get(s);let a;return o===void 0?(a=new Ml(i),t.set(s,[a])):r>=o.length?(a=new Ml(i),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}class jm extends Ai{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=qu,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Qm extends Ai{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const tg=`void main() {
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
}`;function ng(i,t,e){let n=new ec;const s=new pt,r=new pt,o=new ue,a=new jm({depthPacking:Yu}),c=new Qm,l={},h=e.maxTextureSize,u={[ei]:Fe,[Fe]:ei,[Te]:Te},d=new ni({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new pt},radius:{value:4}},vertexShader:tg,fragmentShader:eg}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const m=new Pe;m.setAttribute("position",new tn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new A(m,d),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=rh;let p=this.type;this.render=function(E,R,I){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||E.length===0)return;const y=i.getRenderTarget(),M=i.getActiveCubeFace(),C=i.getActiveMipmapLevel(),O=i.state;O.setBlending(jn),O.buffers.color.setClear(1,1,1,1),O.buffers.depth.setTest(!0),O.setScissorTest(!1);const H=p!==In&&this.type===In,G=p===In&&this.type!==In;for(let J=0,X=E.length;J<X;J++){const it=E[J],V=it.shadow;if(V===void 0){console.warn("THREE.WebGLShadowMap:",it,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;s.copy(V.mapSize);const Q=V.getFrameExtents();if(s.multiply(Q),r.copy(V.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/Q.x),s.x=r.x*Q.x,V.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/Q.y),s.y=r.y*Q.y,V.mapSize.y=r.y)),V.map===null||H===!0||G===!0){const lt=this.type!==In?{minFilter:Qe,magFilter:Qe}:{};V.map!==null&&V.map.dispose(),V.map=new Si(s.x,s.y,lt),V.map.texture.name=it.name+".shadowMap",V.camera.updateProjectionMatrix()}i.setRenderTarget(V.map),i.clear();const K=V.getViewportCount();for(let lt=0;lt<K;lt++){const xt=V.getViewport(lt);o.set(r.x*xt.x,r.y*xt.y,r.x*xt.z,r.y*xt.w),O.viewport(o),V.updateMatrices(it,lt),n=V.getFrustum(),x(R,I,V.camera,it,this.type)}V.isPointLightShadow!==!0&&this.type===In&&w(V,I),V.needsUpdate=!1}p=this.type,g.needsUpdate=!1,i.setRenderTarget(y,M,C)};function w(E,R){const I=t.update(_);d.defines.VSM_SAMPLES!==E.blurSamples&&(d.defines.VSM_SAMPLES=E.blurSamples,f.defines.VSM_SAMPLES=E.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),E.mapPass===null&&(E.mapPass=new Si(s.x,s.y)),d.uniforms.shadow_pass.value=E.map.texture,d.uniforms.resolution.value=E.mapSize,d.uniforms.radius.value=E.radius,i.setRenderTarget(E.mapPass),i.clear(),i.renderBufferDirect(R,null,I,d,_,null),f.uniforms.shadow_pass.value=E.mapPass.texture,f.uniforms.resolution.value=E.mapSize,f.uniforms.radius.value=E.radius,i.setRenderTarget(E.map),i.clear(),i.renderBufferDirect(R,null,I,f,_,null)}function S(E,R,I,y){let M=null;const C=I.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(C!==void 0)M=C;else if(M=I.isPointLight===!0?c:a,i.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0){const O=M.uuid,H=R.uuid;let G=l[O];G===void 0&&(G={},l[O]=G);let J=G[H];J===void 0&&(J=M.clone(),G[H]=J,R.addEventListener("dispose",D)),M=J}if(M.visible=R.visible,M.wireframe=R.wireframe,y===In?M.side=R.shadowSide!==null?R.shadowSide:R.side:M.side=R.shadowSide!==null?R.shadowSide:u[R.side],M.alphaMap=R.alphaMap,M.alphaTest=R.alphaTest,M.map=R.map,M.clipShadows=R.clipShadows,M.clippingPlanes=R.clippingPlanes,M.clipIntersection=R.clipIntersection,M.displacementMap=R.displacementMap,M.displacementScale=R.displacementScale,M.displacementBias=R.displacementBias,M.wireframeLinewidth=R.wireframeLinewidth,M.linewidth=R.linewidth,I.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const O=i.properties.get(M);O.light=I}return M}function x(E,R,I,y,M){if(E.visible===!1)return;if(E.layers.test(R.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&M===In)&&(!E.frustumCulled||n.intersectsObject(E))){E.modelViewMatrix.multiplyMatrices(I.matrixWorldInverse,E.matrixWorld);const H=t.update(E),G=E.material;if(Array.isArray(G)){const J=H.groups;for(let X=0,it=J.length;X<it;X++){const V=J[X],Q=G[V.materialIndex];if(Q&&Q.visible){const K=S(E,Q,y,M);E.onBeforeShadow(i,E,R,I,H,K,V),i.renderBufferDirect(I,null,H,K,E,V),E.onAfterShadow(i,E,R,I,H,K,V)}}}else if(G.visible){const J=S(E,G,y,M);E.onBeforeShadow(i,E,R,I,H,J,null),i.renderBufferDirect(I,null,H,J,E,null),E.onAfterShadow(i,E,R,I,H,J,null)}}const O=E.children;for(let H=0,G=O.length;H<G;H++)x(O[H],R,I,y,M)}function D(E){E.target.removeEventListener("dispose",D);for(const I in l){const y=l[I],M=E.target.uuid;M in y&&(y[M].dispose(),delete y[M])}}}const ig={[Yo]:$o,[Zo]:jo,[Ko]:Qo,[ji]:Jo,[$o]:Yo,[jo]:Zo,[Qo]:Ko,[Jo]:ji};function sg(i,t){function e(){let F=!1;const wt=new ue;let et=null;const at=new ue(0,0,0,0);return{setMask:function(Rt){et!==Rt&&!F&&(i.colorMask(Rt,Rt,Rt,Rt),et=Rt)},setLocked:function(Rt){F=Rt},setClear:function(Rt,bt,Xt,xe,Oe){Oe===!0&&(Rt*=xe,bt*=xe,Xt*=xe),wt.set(Rt,bt,Xt,xe),at.equals(wt)===!1&&(i.clearColor(Rt,bt,Xt,xe),at.copy(wt))},reset:function(){F=!1,et=null,at.set(-1,0,0,0)}}}function n(){let F=!1,wt=!1,et=null,at=null,Rt=null;return{setReversed:function(bt){if(wt!==bt){const Xt=t.get("EXT_clip_control");wt?Xt.clipControlEXT(Xt.LOWER_LEFT_EXT,Xt.ZERO_TO_ONE_EXT):Xt.clipControlEXT(Xt.LOWER_LEFT_EXT,Xt.NEGATIVE_ONE_TO_ONE_EXT);const xe=Rt;Rt=null,this.setClear(xe)}wt=bt},getReversed:function(){return wt},setTest:function(bt){bt?ht(i.DEPTH_TEST):gt(i.DEPTH_TEST)},setMask:function(bt){et!==bt&&!F&&(i.depthMask(bt),et=bt)},setFunc:function(bt){if(wt&&(bt=ig[bt]),at!==bt){switch(bt){case Yo:i.depthFunc(i.NEVER);break;case $o:i.depthFunc(i.ALWAYS);break;case Zo:i.depthFunc(i.LESS);break;case ji:i.depthFunc(i.LEQUAL);break;case Ko:i.depthFunc(i.EQUAL);break;case Jo:i.depthFunc(i.GEQUAL);break;case jo:i.depthFunc(i.GREATER);break;case Qo:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}at=bt}},setLocked:function(bt){F=bt},setClear:function(bt){Rt!==bt&&(wt&&(bt=1-bt),i.clearDepth(bt),Rt=bt)},reset:function(){F=!1,et=null,at=null,Rt=null,wt=!1}}}function s(){let F=!1,wt=null,et=null,at=null,Rt=null,bt=null,Xt=null,xe=null,Oe=null;return{setTest:function(ae){F||(ae?ht(i.STENCIL_TEST):gt(i.STENCIL_TEST))},setMask:function(ae){wt!==ae&&!F&&(i.stencilMask(ae),wt=ae)},setFunc:function(ae,on,Tn){(et!==ae||at!==on||Rt!==Tn)&&(i.stencilFunc(ae,on,Tn),et=ae,at=on,Rt=Tn)},setOp:function(ae,on,Tn){(bt!==ae||Xt!==on||xe!==Tn)&&(i.stencilOp(ae,on,Tn),bt=ae,Xt=on,xe=Tn)},setLocked:function(ae){F=ae},setClear:function(ae){Oe!==ae&&(i.clearStencil(ae),Oe=ae)},reset:function(){F=!1,wt=null,et=null,at=null,Rt=null,bt=null,Xt=null,xe=null,Oe=null}}}const r=new e,o=new n,a=new s,c=new WeakMap,l=new WeakMap;let h={},u={},d=new WeakMap,f=[],m=null,_=!1,g=null,p=null,w=null,S=null,x=null,D=null,E=null,R=new Et(0,0,0),I=0,y=!1,M=null,C=null,O=null,H=null,G=null;const J=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let X=!1,it=0;const V=i.getParameter(i.VERSION);V.indexOf("WebGL")!==-1?(it=parseFloat(/^WebGL (\d)/.exec(V)[1]),X=it>=1):V.indexOf("OpenGL ES")!==-1&&(it=parseFloat(/^OpenGL ES (\d)/.exec(V)[1]),X=it>=2);let Q=null,K={};const lt=i.getParameter(i.SCISSOR_BOX),xt=i.getParameter(i.VIEWPORT),Pt=new ue().fromArray(lt),q=new ue().fromArray(xt);function st(F,wt,et,at){const Rt=new Uint8Array(4),bt=i.createTexture();i.bindTexture(F,bt),i.texParameteri(F,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(F,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Xt=0;Xt<et;Xt++)F===i.TEXTURE_3D||F===i.TEXTURE_2D_ARRAY?i.texImage3D(wt,0,i.RGBA,1,1,at,0,i.RGBA,i.UNSIGNED_BYTE,Rt):i.texImage2D(wt+Xt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Rt);return bt}const _t={};_t[i.TEXTURE_2D]=st(i.TEXTURE_2D,i.TEXTURE_2D,1),_t[i.TEXTURE_CUBE_MAP]=st(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),_t[i.TEXTURE_2D_ARRAY]=st(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),_t[i.TEXTURE_3D]=st(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),ht(i.DEPTH_TEST),o.setFunc(ji),W(!1),N(Tc),ht(i.CULL_FACE),P(jn);function ht(F){h[F]!==!0&&(i.enable(F),h[F]=!0)}function gt(F){h[F]!==!1&&(i.disable(F),h[F]=!1)}function Lt(F,wt){return u[F]!==wt?(i.bindFramebuffer(F,wt),u[F]=wt,F===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=wt),F===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=wt),!0):!1}function Ut(F,wt){let et=f,at=!1;if(F){et=d.get(wt),et===void 0&&(et=[],d.set(wt,et));const Rt=F.textures;if(et.length!==Rt.length||et[0]!==i.COLOR_ATTACHMENT0){for(let bt=0,Xt=Rt.length;bt<Xt;bt++)et[bt]=i.COLOR_ATTACHMENT0+bt;et.length=Rt.length,at=!0}}else et[0]!==i.BACK&&(et[0]=i.BACK,at=!0);at&&i.drawBuffers(et)}function Wt(F){return m!==F?(i.useProgram(F),m=F,!0):!1}const rt={[fi]:i.FUNC_ADD,[Mu]:i.FUNC_SUBTRACT,[yu]:i.FUNC_REVERSE_SUBTRACT};rt[wu]=i.MIN,rt[Su]=i.MAX;const dt={[Eu]:i.ZERO,[Tu]:i.ONE,[bu]:i.SRC_COLOR,[Xo]:i.SRC_ALPHA,[Iu]:i.SRC_ALPHA_SATURATE,[Pu]:i.DST_COLOR,[Ru]:i.DST_ALPHA,[Au]:i.ONE_MINUS_SRC_COLOR,[qo]:i.ONE_MINUS_SRC_ALPHA,[Lu]:i.ONE_MINUS_DST_COLOR,[Cu]:i.ONE_MINUS_DST_ALPHA,[Du]:i.CONSTANT_COLOR,[Uu]:i.ONE_MINUS_CONSTANT_COLOR,[Nu]:i.CONSTANT_ALPHA,[Fu]:i.ONE_MINUS_CONSTANT_ALPHA};function P(F,wt,et,at,Rt,bt,Xt,xe,Oe,ae){if(F===jn){_===!0&&(gt(i.BLEND),_=!1);return}if(_===!1&&(ht(i.BLEND),_=!0),F!==xu){if(F!==g||ae!==y){if((p!==fi||x!==fi)&&(i.blendEquation(i.FUNC_ADD),p=fi,x=fi),ae)switch(F){case $i:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case bc:i.blendFunc(i.ONE,i.ONE);break;case Ac:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Rc:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}else switch(F){case $i:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case bc:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Ac:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Rc:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}w=null,S=null,D=null,E=null,R.set(0,0,0),I=0,g=F,y=ae}return}Rt=Rt||wt,bt=bt||et,Xt=Xt||at,(wt!==p||Rt!==x)&&(i.blendEquationSeparate(rt[wt],rt[Rt]),p=wt,x=Rt),(et!==w||at!==S||bt!==D||Xt!==E)&&(i.blendFuncSeparate(dt[et],dt[at],dt[bt],dt[Xt]),w=et,S=at,D=bt,E=Xt),(xe.equals(R)===!1||Oe!==I)&&(i.blendColor(xe.r,xe.g,xe.b,Oe),R.copy(xe),I=Oe),g=F,y=!1}function It(F,wt){F.side===Te?gt(i.CULL_FACE):ht(i.CULL_FACE);let et=F.side===Fe;wt&&(et=!et),W(et),F.blending===$i&&F.transparent===!1?P(jn):P(F.blending,F.blendEquation,F.blendSrc,F.blendDst,F.blendEquationAlpha,F.blendSrcAlpha,F.blendDstAlpha,F.blendColor,F.blendAlpha,F.premultipliedAlpha),o.setFunc(F.depthFunc),o.setTest(F.depthTest),o.setMask(F.depthWrite),r.setMask(F.colorWrite);const at=F.stencilWrite;a.setTest(at),at&&(a.setMask(F.stencilWriteMask),a.setFunc(F.stencilFunc,F.stencilRef,F.stencilFuncMask),a.setOp(F.stencilFail,F.stencilZFail,F.stencilZPass)),ot(F.polygonOffset,F.polygonOffsetFactor,F.polygonOffsetUnits),F.alphaToCoverage===!0?ht(i.SAMPLE_ALPHA_TO_COVERAGE):gt(i.SAMPLE_ALPHA_TO_COVERAGE)}function W(F){M!==F&&(F?i.frontFace(i.CW):i.frontFace(i.CCW),M=F)}function N(F){F!==_u?(ht(i.CULL_FACE),F!==C&&(F===Tc?i.cullFace(i.BACK):F===vu?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):gt(i.CULL_FACE),C=F}function U(F){F!==O&&(X&&i.lineWidth(F),O=F)}function ot(F,wt,et){F?(ht(i.POLYGON_OFFSET_FILL),(H!==wt||G!==et)&&(i.polygonOffset(wt,et),H=wt,G=et)):gt(i.POLYGON_OFFSET_FILL)}function ct(F){F?ht(i.SCISSOR_TEST):gt(i.SCISSOR_TEST)}function T(F){F===void 0&&(F=i.TEXTURE0+J-1),Q!==F&&(i.activeTexture(F),Q=F)}function v(F,wt,et){et===void 0&&(Q===null?et=i.TEXTURE0+J-1:et=Q);let at=K[et];at===void 0&&(at={type:void 0,texture:void 0},K[et]=at),(at.type!==F||at.texture!==wt)&&(Q!==et&&(i.activeTexture(et),Q=et),i.bindTexture(F,wt||_t[F]),at.type=F,at.texture=wt)}function B(){const F=K[Q];F!==void 0&&F.type!==void 0&&(i.bindTexture(F.type,null),F.type=void 0,F.texture=void 0)}function Z(){try{i.compressedTexImage2D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function tt(){try{i.compressedTexImage3D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function j(){try{i.texSubImage2D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function yt(){try{i.texSubImage3D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function vt(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Tt(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Jt(){try{i.texStorage2D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function ft(){try{i.texStorage3D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function St(){try{i.texImage2D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Ht(){try{i.texImage3D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Gt(F){Pt.equals(F)===!1&&(i.scissor(F.x,F.y,F.z,F.w),Pt.copy(F))}function Ct(F){q.equals(F)===!1&&(i.viewport(F.x,F.y,F.z,F.w),q.copy(F))}function jt(F,wt){let et=l.get(wt);et===void 0&&(et=new WeakMap,l.set(wt,et));let at=et.get(F);at===void 0&&(at=i.getUniformBlockIndex(wt,F.name),et.set(F,at))}function $t(F,wt){const at=l.get(wt).get(F);c.get(wt)!==at&&(i.uniformBlockBinding(wt,at,F.__bindingPointIndex),c.set(wt,at))}function de(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},Q=null,K={},u={},d=new WeakMap,f=[],m=null,_=!1,g=null,p=null,w=null,S=null,x=null,D=null,E=null,R=new Et(0,0,0),I=0,y=!1,M=null,C=null,O=null,H=null,G=null,Pt.set(0,0,i.canvas.width,i.canvas.height),q.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:ht,disable:gt,bindFramebuffer:Lt,drawBuffers:Ut,useProgram:Wt,setBlending:P,setMaterial:It,setFlipSided:W,setCullFace:N,setLineWidth:U,setPolygonOffset:ot,setScissorTest:ct,activeTexture:T,bindTexture:v,unbindTexture:B,compressedTexImage2D:Z,compressedTexImage3D:tt,texImage2D:St,texImage3D:Ht,updateUBOMapping:jt,uniformBlockBinding:$t,texStorage2D:Jt,texStorage3D:ft,texSubImage2D:j,texSubImage3D:yt,compressedTexSubImage2D:vt,compressedTexSubImage3D:Tt,scissor:Gt,viewport:Ct,reset:de}}function yl(i,t,e,n){const s=rg(n);switch(e){case uh:return i*t;case fh:return i*t;case ph:return i*t*2;case $a:return i*t/s.components*s.byteLength;case Za:return i*t/s.components*s.byteLength;case mh:return i*t*2/s.components*s.byteLength;case Ka:return i*t*2/s.components*s.byteLength;case dh:return i*t*3/s.components*s.byteLength;case fn:return i*t*4/s.components*s.byteLength;case Ja:return i*t*4/s.components*s.byteLength;case Sr:case Er:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Tr:case br:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case sa:case oa:return Math.max(i,16)*Math.max(t,8)/4;case ia:case ra:return Math.max(i,8)*Math.max(t,8)/2;case aa:case ca:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case la:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case ha:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case ua:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case da:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case fa:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case pa:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case ma:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case ga:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case _a:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case va:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case xa:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case Ma:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case ya:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case wa:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case Sa:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case Ar:case Ea:case Ta:return Math.ceil(i/4)*Math.ceil(t/4)*16;case gh:case ba:return Math.ceil(i/4)*Math.ceil(t/4)*8;case Aa:case Ra:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function rg(i){switch(i){case Nn:case ch:return{byteLength:1,components:1};case Is:case lh:case zs:return{byteLength:2,components:1};case qa:case Ya:return{byteLength:2,components:4};case wi:case Xa:case wn:return{byteLength:4,components:1};case hh:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function og(i,t,e,n,s,r,o){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new pt,h=new WeakMap;let u;const d=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(T,v){return f?new OffscreenCanvas(T,v):Lr("canvas")}function _(T,v,B){let Z=1;const tt=ct(T);if((tt.width>B||tt.height>B)&&(Z=B/Math.max(tt.width,tt.height)),Z<1)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap||typeof VideoFrame<"u"&&T instanceof VideoFrame){const j=Math.floor(Z*tt.width),yt=Math.floor(Z*tt.height);u===void 0&&(u=m(j,yt));const vt=v?m(j,yt):u;return vt.width=j,vt.height=yt,vt.getContext("2d").drawImage(T,0,0,j,yt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+tt.width+"x"+tt.height+") to ("+j+"x"+yt+")."),vt}else return"data"in T&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+tt.width+"x"+tt.height+")."),T;return T}function g(T){return T.generateMipmaps}function p(T){i.generateMipmap(T)}function w(T){return T.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:T.isWebGL3DRenderTarget?i.TEXTURE_3D:T.isWebGLArrayRenderTarget||T.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function S(T,v,B,Z,tt=!1){if(T!==null){if(i[T]!==void 0)return i[T];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let j=v;if(v===i.RED&&(B===i.FLOAT&&(j=i.R32F),B===i.HALF_FLOAT&&(j=i.R16F),B===i.UNSIGNED_BYTE&&(j=i.R8)),v===i.RED_INTEGER&&(B===i.UNSIGNED_BYTE&&(j=i.R8UI),B===i.UNSIGNED_SHORT&&(j=i.R16UI),B===i.UNSIGNED_INT&&(j=i.R32UI),B===i.BYTE&&(j=i.R8I),B===i.SHORT&&(j=i.R16I),B===i.INT&&(j=i.R32I)),v===i.RG&&(B===i.FLOAT&&(j=i.RG32F),B===i.HALF_FLOAT&&(j=i.RG16F),B===i.UNSIGNED_BYTE&&(j=i.RG8)),v===i.RG_INTEGER&&(B===i.UNSIGNED_BYTE&&(j=i.RG8UI),B===i.UNSIGNED_SHORT&&(j=i.RG16UI),B===i.UNSIGNED_INT&&(j=i.RG32UI),B===i.BYTE&&(j=i.RG8I),B===i.SHORT&&(j=i.RG16I),B===i.INT&&(j=i.RG32I)),v===i.RGB_INTEGER&&(B===i.UNSIGNED_BYTE&&(j=i.RGB8UI),B===i.UNSIGNED_SHORT&&(j=i.RGB16UI),B===i.UNSIGNED_INT&&(j=i.RGB32UI),B===i.BYTE&&(j=i.RGB8I),B===i.SHORT&&(j=i.RGB16I),B===i.INT&&(j=i.RGB32I)),v===i.RGBA_INTEGER&&(B===i.UNSIGNED_BYTE&&(j=i.RGBA8UI),B===i.UNSIGNED_SHORT&&(j=i.RGBA16UI),B===i.UNSIGNED_INT&&(j=i.RGBA32UI),B===i.BYTE&&(j=i.RGBA8I),B===i.SHORT&&(j=i.RGBA16I),B===i.INT&&(j=i.RGBA32I)),v===i.RGB&&B===i.UNSIGNED_INT_5_9_9_9_REV&&(j=i.RGB9_E5),v===i.RGBA){const yt=tt?Xr:ne.getTransfer(Z);B===i.FLOAT&&(j=i.RGBA32F),B===i.HALF_FLOAT&&(j=i.RGBA16F),B===i.UNSIGNED_BYTE&&(j=yt===he?i.SRGB8_ALPHA8:i.RGBA8),B===i.UNSIGNED_SHORT_4_4_4_4&&(j=i.RGBA4),B===i.UNSIGNED_SHORT_5_5_5_1&&(j=i.RGB5_A1)}return(j===i.R16F||j===i.R32F||j===i.RG16F||j===i.RG32F||j===i.RGBA16F||j===i.RGBA32F)&&t.get("EXT_color_buffer_float"),j}function x(T,v){let B;return T?v===null||v===wi||v===ns?B=i.DEPTH24_STENCIL8:v===wn?B=i.DEPTH32F_STENCIL8:v===Is&&(B=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===wi||v===ns?B=i.DEPTH_COMPONENT24:v===wn?B=i.DEPTH_COMPONENT32F:v===Is&&(B=i.DEPTH_COMPONENT16),B}function D(T,v){return g(T)===!0||T.isFramebufferTexture&&T.minFilter!==Qe&&T.minFilter!==yn?Math.log2(Math.max(v.width,v.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?v.mipmaps.length:1}function E(T){const v=T.target;v.removeEventListener("dispose",E),I(v),v.isVideoTexture&&h.delete(v)}function R(T){const v=T.target;v.removeEventListener("dispose",R),M(v)}function I(T){const v=n.get(T);if(v.__webglInit===void 0)return;const B=T.source,Z=d.get(B);if(Z){const tt=Z[v.__cacheKey];tt.usedTimes--,tt.usedTimes===0&&y(T),Object.keys(Z).length===0&&d.delete(B)}n.remove(T)}function y(T){const v=n.get(T);i.deleteTexture(v.__webglTexture);const B=T.source,Z=d.get(B);delete Z[v.__cacheKey],o.memory.textures--}function M(T){const v=n.get(T);if(T.depthTexture&&(T.depthTexture.dispose(),n.remove(T.depthTexture)),T.isWebGLCubeRenderTarget)for(let Z=0;Z<6;Z++){if(Array.isArray(v.__webglFramebuffer[Z]))for(let tt=0;tt<v.__webglFramebuffer[Z].length;tt++)i.deleteFramebuffer(v.__webglFramebuffer[Z][tt]);else i.deleteFramebuffer(v.__webglFramebuffer[Z]);v.__webglDepthbuffer&&i.deleteRenderbuffer(v.__webglDepthbuffer[Z])}else{if(Array.isArray(v.__webglFramebuffer))for(let Z=0;Z<v.__webglFramebuffer.length;Z++)i.deleteFramebuffer(v.__webglFramebuffer[Z]);else i.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&i.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&i.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let Z=0;Z<v.__webglColorRenderbuffer.length;Z++)v.__webglColorRenderbuffer[Z]&&i.deleteRenderbuffer(v.__webglColorRenderbuffer[Z]);v.__webglDepthRenderbuffer&&i.deleteRenderbuffer(v.__webglDepthRenderbuffer)}const B=T.textures;for(let Z=0,tt=B.length;Z<tt;Z++){const j=n.get(B[Z]);j.__webglTexture&&(i.deleteTexture(j.__webglTexture),o.memory.textures--),n.remove(B[Z])}n.remove(T)}let C=0;function O(){C=0}function H(){const T=C;return T>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+T+" texture units while this GPU supports only "+s.maxTextures),C+=1,T}function G(T){const v=[];return v.push(T.wrapS),v.push(T.wrapT),v.push(T.wrapR||0),v.push(T.magFilter),v.push(T.minFilter),v.push(T.anisotropy),v.push(T.internalFormat),v.push(T.format),v.push(T.type),v.push(T.generateMipmaps),v.push(T.premultiplyAlpha),v.push(T.flipY),v.push(T.unpackAlignment),v.push(T.colorSpace),v.join()}function J(T,v){const B=n.get(T);if(T.isVideoTexture&&U(T),T.isRenderTargetTexture===!1&&T.version>0&&B.__version!==T.version){const Z=T.image;if(Z===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Z.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{q(B,T,v);return}}e.bindTexture(i.TEXTURE_2D,B.__webglTexture,i.TEXTURE0+v)}function X(T,v){const B=n.get(T);if(T.version>0&&B.__version!==T.version){q(B,T,v);return}e.bindTexture(i.TEXTURE_2D_ARRAY,B.__webglTexture,i.TEXTURE0+v)}function it(T,v){const B=n.get(T);if(T.version>0&&B.__version!==T.version){q(B,T,v);return}e.bindTexture(i.TEXTURE_3D,B.__webglTexture,i.TEXTURE0+v)}function V(T,v){const B=n.get(T);if(T.version>0&&B.__version!==T.version){st(B,T,v);return}e.bindTexture(i.TEXTURE_CUBE_MAP,B.__webglTexture,i.TEXTURE0+v)}const Q={[es]:i.REPEAT,[_i]:i.CLAMP_TO_EDGE,[na]:i.MIRRORED_REPEAT},K={[Qe]:i.NEAREST,[Xu]:i.NEAREST_MIPMAP_NEAREST,[qs]:i.NEAREST_MIPMAP_LINEAR,[yn]:i.LINEAR,[jr]:i.LINEAR_MIPMAP_NEAREST,[vi]:i.LINEAR_MIPMAP_LINEAR},lt={[Zu]:i.NEVER,[ed]:i.ALWAYS,[Ku]:i.LESS,[_h]:i.LEQUAL,[Ju]:i.EQUAL,[td]:i.GEQUAL,[ju]:i.GREATER,[Qu]:i.NOTEQUAL};function xt(T,v){if(v.type===wn&&t.has("OES_texture_float_linear")===!1&&(v.magFilter===yn||v.magFilter===jr||v.magFilter===qs||v.magFilter===vi||v.minFilter===yn||v.minFilter===jr||v.minFilter===qs||v.minFilter===vi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(T,i.TEXTURE_WRAP_S,Q[v.wrapS]),i.texParameteri(T,i.TEXTURE_WRAP_T,Q[v.wrapT]),(T===i.TEXTURE_3D||T===i.TEXTURE_2D_ARRAY)&&i.texParameteri(T,i.TEXTURE_WRAP_R,Q[v.wrapR]),i.texParameteri(T,i.TEXTURE_MAG_FILTER,K[v.magFilter]),i.texParameteri(T,i.TEXTURE_MIN_FILTER,K[v.minFilter]),v.compareFunction&&(i.texParameteri(T,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(T,i.TEXTURE_COMPARE_FUNC,lt[v.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===Qe||v.minFilter!==qs&&v.minFilter!==vi||v.type===wn&&t.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||n.get(v).__currentAnisotropy){const B=t.get("EXT_texture_filter_anisotropic");i.texParameterf(T,B.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,s.getMaxAnisotropy())),n.get(v).__currentAnisotropy=v.anisotropy}}}function Pt(T,v){let B=!1;T.__webglInit===void 0&&(T.__webglInit=!0,v.addEventListener("dispose",E));const Z=v.source;let tt=d.get(Z);tt===void 0&&(tt={},d.set(Z,tt));const j=G(v);if(j!==T.__cacheKey){tt[j]===void 0&&(tt[j]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,B=!0),tt[j].usedTimes++;const yt=tt[T.__cacheKey];yt!==void 0&&(tt[T.__cacheKey].usedTimes--,yt.usedTimes===0&&y(v)),T.__cacheKey=j,T.__webglTexture=tt[j].texture}return B}function q(T,v,B){let Z=i.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(Z=i.TEXTURE_2D_ARRAY),v.isData3DTexture&&(Z=i.TEXTURE_3D);const tt=Pt(T,v),j=v.source;e.bindTexture(Z,T.__webglTexture,i.TEXTURE0+B);const yt=n.get(j);if(j.version!==yt.__version||tt===!0){e.activeTexture(i.TEXTURE0+B);const vt=ne.getPrimaries(ne.workingColorSpace),Tt=v.colorSpace===Mn?null:ne.getPrimaries(v.colorSpace),Jt=v.colorSpace===Mn||vt===Tt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,v.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,v.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Jt);let ft=_(v.image,!1,s.maxTextureSize);ft=ot(v,ft);const St=r.convert(v.format,v.colorSpace),Ht=r.convert(v.type);let Gt=S(v.internalFormat,St,Ht,v.colorSpace,v.isVideoTexture);xt(Z,v);let Ct;const jt=v.mipmaps,$t=v.isVideoTexture!==!0,de=yt.__version===void 0||tt===!0,F=j.dataReady,wt=D(v,ft);if(v.isDepthTexture)Gt=x(v.format===is,v.type),de&&($t?e.texStorage2D(i.TEXTURE_2D,1,Gt,ft.width,ft.height):e.texImage2D(i.TEXTURE_2D,0,Gt,ft.width,ft.height,0,St,Ht,null));else if(v.isDataTexture)if(jt.length>0){$t&&de&&e.texStorage2D(i.TEXTURE_2D,wt,Gt,jt[0].width,jt[0].height);for(let et=0,at=jt.length;et<at;et++)Ct=jt[et],$t?F&&e.texSubImage2D(i.TEXTURE_2D,et,0,0,Ct.width,Ct.height,St,Ht,Ct.data):e.texImage2D(i.TEXTURE_2D,et,Gt,Ct.width,Ct.height,0,St,Ht,Ct.data);v.generateMipmaps=!1}else $t?(de&&e.texStorage2D(i.TEXTURE_2D,wt,Gt,ft.width,ft.height),F&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,ft.width,ft.height,St,Ht,ft.data)):e.texImage2D(i.TEXTURE_2D,0,Gt,ft.width,ft.height,0,St,Ht,ft.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){$t&&de&&e.texStorage3D(i.TEXTURE_2D_ARRAY,wt,Gt,jt[0].width,jt[0].height,ft.depth);for(let et=0,at=jt.length;et<at;et++)if(Ct=jt[et],v.format!==fn)if(St!==null)if($t){if(F)if(v.layerUpdates.size>0){const Rt=yl(Ct.width,Ct.height,v.format,v.type);for(const bt of v.layerUpdates){const Xt=Ct.data.subarray(bt*Rt/Ct.data.BYTES_PER_ELEMENT,(bt+1)*Rt/Ct.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,et,0,0,bt,Ct.width,Ct.height,1,St,Xt)}v.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,et,0,0,0,Ct.width,Ct.height,ft.depth,St,Ct.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,et,Gt,Ct.width,Ct.height,ft.depth,0,Ct.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else $t?F&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,et,0,0,0,Ct.width,Ct.height,ft.depth,St,Ht,Ct.data):e.texImage3D(i.TEXTURE_2D_ARRAY,et,Gt,Ct.width,Ct.height,ft.depth,0,St,Ht,Ct.data)}else{$t&&de&&e.texStorage2D(i.TEXTURE_2D,wt,Gt,jt[0].width,jt[0].height);for(let et=0,at=jt.length;et<at;et++)Ct=jt[et],v.format!==fn?St!==null?$t?F&&e.compressedTexSubImage2D(i.TEXTURE_2D,et,0,0,Ct.width,Ct.height,St,Ct.data):e.compressedTexImage2D(i.TEXTURE_2D,et,Gt,Ct.width,Ct.height,0,Ct.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):$t?F&&e.texSubImage2D(i.TEXTURE_2D,et,0,0,Ct.width,Ct.height,St,Ht,Ct.data):e.texImage2D(i.TEXTURE_2D,et,Gt,Ct.width,Ct.height,0,St,Ht,Ct.data)}else if(v.isDataArrayTexture)if($t){if(de&&e.texStorage3D(i.TEXTURE_2D_ARRAY,wt,Gt,ft.width,ft.height,ft.depth),F)if(v.layerUpdates.size>0){const et=yl(ft.width,ft.height,v.format,v.type);for(const at of v.layerUpdates){const Rt=ft.data.subarray(at*et/ft.data.BYTES_PER_ELEMENT,(at+1)*et/ft.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,at,ft.width,ft.height,1,St,Ht,Rt)}v.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ft.width,ft.height,ft.depth,St,Ht,ft.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Gt,ft.width,ft.height,ft.depth,0,St,Ht,ft.data);else if(v.isData3DTexture)$t?(de&&e.texStorage3D(i.TEXTURE_3D,wt,Gt,ft.width,ft.height,ft.depth),F&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ft.width,ft.height,ft.depth,St,Ht,ft.data)):e.texImage3D(i.TEXTURE_3D,0,Gt,ft.width,ft.height,ft.depth,0,St,Ht,ft.data);else if(v.isFramebufferTexture){if(de)if($t)e.texStorage2D(i.TEXTURE_2D,wt,Gt,ft.width,ft.height);else{let et=ft.width,at=ft.height;for(let Rt=0;Rt<wt;Rt++)e.texImage2D(i.TEXTURE_2D,Rt,Gt,et,at,0,St,Ht,null),et>>=1,at>>=1}}else if(jt.length>0){if($t&&de){const et=ct(jt[0]);e.texStorage2D(i.TEXTURE_2D,wt,Gt,et.width,et.height)}for(let et=0,at=jt.length;et<at;et++)Ct=jt[et],$t?F&&e.texSubImage2D(i.TEXTURE_2D,et,0,0,St,Ht,Ct):e.texImage2D(i.TEXTURE_2D,et,Gt,St,Ht,Ct);v.generateMipmaps=!1}else if($t){if(de){const et=ct(ft);e.texStorage2D(i.TEXTURE_2D,wt,Gt,et.width,et.height)}F&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,St,Ht,ft)}else e.texImage2D(i.TEXTURE_2D,0,Gt,St,Ht,ft);g(v)&&p(Z),yt.__version=j.version,v.onUpdate&&v.onUpdate(v)}T.__version=v.version}function st(T,v,B){if(v.image.length!==6)return;const Z=Pt(T,v),tt=v.source;e.bindTexture(i.TEXTURE_CUBE_MAP,T.__webglTexture,i.TEXTURE0+B);const j=n.get(tt);if(tt.version!==j.__version||Z===!0){e.activeTexture(i.TEXTURE0+B);const yt=ne.getPrimaries(ne.workingColorSpace),vt=v.colorSpace===Mn?null:ne.getPrimaries(v.colorSpace),Tt=v.colorSpace===Mn||yt===vt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,v.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,v.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Tt);const Jt=v.isCompressedTexture||v.image[0].isCompressedTexture,ft=v.image[0]&&v.image[0].isDataTexture,St=[];for(let at=0;at<6;at++)!Jt&&!ft?St[at]=_(v.image[at],!0,s.maxCubemapSize):St[at]=ft?v.image[at].image:v.image[at],St[at]=ot(v,St[at]);const Ht=St[0],Gt=r.convert(v.format,v.colorSpace),Ct=r.convert(v.type),jt=S(v.internalFormat,Gt,Ct,v.colorSpace),$t=v.isVideoTexture!==!0,de=j.__version===void 0||Z===!0,F=tt.dataReady;let wt=D(v,Ht);xt(i.TEXTURE_CUBE_MAP,v);let et;if(Jt){$t&&de&&e.texStorage2D(i.TEXTURE_CUBE_MAP,wt,jt,Ht.width,Ht.height);for(let at=0;at<6;at++){et=St[at].mipmaps;for(let Rt=0;Rt<et.length;Rt++){const bt=et[Rt];v.format!==fn?Gt!==null?$t?F&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+at,Rt,0,0,bt.width,bt.height,Gt,bt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+at,Rt,jt,bt.width,bt.height,0,bt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):$t?F&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+at,Rt,0,0,bt.width,bt.height,Gt,Ct,bt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+at,Rt,jt,bt.width,bt.height,0,Gt,Ct,bt.data)}}}else{if(et=v.mipmaps,$t&&de){et.length>0&&wt++;const at=ct(St[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,wt,jt,at.width,at.height)}for(let at=0;at<6;at++)if(ft){$t?F&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+at,0,0,0,St[at].width,St[at].height,Gt,Ct,St[at].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+at,0,jt,St[at].width,St[at].height,0,Gt,Ct,St[at].data);for(let Rt=0;Rt<et.length;Rt++){const Xt=et[Rt].image[at].image;$t?F&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+at,Rt+1,0,0,Xt.width,Xt.height,Gt,Ct,Xt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+at,Rt+1,jt,Xt.width,Xt.height,0,Gt,Ct,Xt.data)}}else{$t?F&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+at,0,0,0,Gt,Ct,St[at]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+at,0,jt,Gt,Ct,St[at]);for(let Rt=0;Rt<et.length;Rt++){const bt=et[Rt];$t?F&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+at,Rt+1,0,0,Gt,Ct,bt.image[at]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+at,Rt+1,jt,Gt,Ct,bt.image[at])}}}g(v)&&p(i.TEXTURE_CUBE_MAP),j.__version=tt.version,v.onUpdate&&v.onUpdate(v)}T.__version=v.version}function _t(T,v,B,Z,tt,j){const yt=r.convert(B.format,B.colorSpace),vt=r.convert(B.type),Tt=S(B.internalFormat,yt,vt,B.colorSpace),Jt=n.get(v),ft=n.get(B);if(ft.__renderTarget=v,!Jt.__hasExternalTextures){const St=Math.max(1,v.width>>j),Ht=Math.max(1,v.height>>j);tt===i.TEXTURE_3D||tt===i.TEXTURE_2D_ARRAY?e.texImage3D(tt,j,Tt,St,Ht,v.depth,0,yt,vt,null):e.texImage2D(tt,j,Tt,St,Ht,0,yt,vt,null)}e.bindFramebuffer(i.FRAMEBUFFER,T),N(v)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Z,tt,ft.__webglTexture,0,W(v)):(tt===i.TEXTURE_2D||tt>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&tt<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,Z,tt,ft.__webglTexture,j),e.bindFramebuffer(i.FRAMEBUFFER,null)}function ht(T,v,B){if(i.bindRenderbuffer(i.RENDERBUFFER,T),v.depthBuffer){const Z=v.depthTexture,tt=Z&&Z.isDepthTexture?Z.type:null,j=x(v.stencilBuffer,tt),yt=v.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,vt=W(v);N(v)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,vt,j,v.width,v.height):B?i.renderbufferStorageMultisample(i.RENDERBUFFER,vt,j,v.width,v.height):i.renderbufferStorage(i.RENDERBUFFER,j,v.width,v.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,yt,i.RENDERBUFFER,T)}else{const Z=v.textures;for(let tt=0;tt<Z.length;tt++){const j=Z[tt],yt=r.convert(j.format,j.colorSpace),vt=r.convert(j.type),Tt=S(j.internalFormat,yt,vt,j.colorSpace),Jt=W(v);B&&N(v)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Jt,Tt,v.width,v.height):N(v)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Jt,Tt,v.width,v.height):i.renderbufferStorage(i.RENDERBUFFER,Tt,v.width,v.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function gt(T,v){if(v&&v.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,T),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Z=n.get(v.depthTexture);Z.__renderTarget=v,(!Z.__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),J(v.depthTexture,0);const tt=Z.__webglTexture,j=W(v);if(v.depthTexture.format===Zi)N(v)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,tt,0,j):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,tt,0);else if(v.depthTexture.format===is)N(v)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,tt,0,j):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,tt,0);else throw new Error("Unknown depthTexture format")}function Lt(T){const v=n.get(T),B=T.isWebGLCubeRenderTarget===!0;if(v.__boundDepthTexture!==T.depthTexture){const Z=T.depthTexture;if(v.__depthDisposeCallback&&v.__depthDisposeCallback(),Z){const tt=()=>{delete v.__boundDepthTexture,delete v.__depthDisposeCallback,Z.removeEventListener("dispose",tt)};Z.addEventListener("dispose",tt),v.__depthDisposeCallback=tt}v.__boundDepthTexture=Z}if(T.depthTexture&&!v.__autoAllocateDepthBuffer){if(B)throw new Error("target.depthTexture not supported in Cube render targets");gt(v.__webglFramebuffer,T)}else if(B){v.__webglDepthbuffer=[];for(let Z=0;Z<6;Z++)if(e.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer[Z]),v.__webglDepthbuffer[Z]===void 0)v.__webglDepthbuffer[Z]=i.createRenderbuffer(),ht(v.__webglDepthbuffer[Z],T,!1);else{const tt=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,j=v.__webglDepthbuffer[Z];i.bindRenderbuffer(i.RENDERBUFFER,j),i.framebufferRenderbuffer(i.FRAMEBUFFER,tt,i.RENDERBUFFER,j)}}else if(e.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer===void 0)v.__webglDepthbuffer=i.createRenderbuffer(),ht(v.__webglDepthbuffer,T,!1);else{const Z=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,tt=v.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,tt),i.framebufferRenderbuffer(i.FRAMEBUFFER,Z,i.RENDERBUFFER,tt)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function Ut(T,v,B){const Z=n.get(T);v!==void 0&&_t(Z.__webglFramebuffer,T,T.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),B!==void 0&&Lt(T)}function Wt(T){const v=T.texture,B=n.get(T),Z=n.get(v);T.addEventListener("dispose",R);const tt=T.textures,j=T.isWebGLCubeRenderTarget===!0,yt=tt.length>1;if(yt||(Z.__webglTexture===void 0&&(Z.__webglTexture=i.createTexture()),Z.__version=v.version,o.memory.textures++),j){B.__webglFramebuffer=[];for(let vt=0;vt<6;vt++)if(v.mipmaps&&v.mipmaps.length>0){B.__webglFramebuffer[vt]=[];for(let Tt=0;Tt<v.mipmaps.length;Tt++)B.__webglFramebuffer[vt][Tt]=i.createFramebuffer()}else B.__webglFramebuffer[vt]=i.createFramebuffer()}else{if(v.mipmaps&&v.mipmaps.length>0){B.__webglFramebuffer=[];for(let vt=0;vt<v.mipmaps.length;vt++)B.__webglFramebuffer[vt]=i.createFramebuffer()}else B.__webglFramebuffer=i.createFramebuffer();if(yt)for(let vt=0,Tt=tt.length;vt<Tt;vt++){const Jt=n.get(tt[vt]);Jt.__webglTexture===void 0&&(Jt.__webglTexture=i.createTexture(),o.memory.textures++)}if(T.samples>0&&N(T)===!1){B.__webglMultisampledFramebuffer=i.createFramebuffer(),B.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,B.__webglMultisampledFramebuffer);for(let vt=0;vt<tt.length;vt++){const Tt=tt[vt];B.__webglColorRenderbuffer[vt]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,B.__webglColorRenderbuffer[vt]);const Jt=r.convert(Tt.format,Tt.colorSpace),ft=r.convert(Tt.type),St=S(Tt.internalFormat,Jt,ft,Tt.colorSpace,T.isXRRenderTarget===!0),Ht=W(T);i.renderbufferStorageMultisample(i.RENDERBUFFER,Ht,St,T.width,T.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+vt,i.RENDERBUFFER,B.__webglColorRenderbuffer[vt])}i.bindRenderbuffer(i.RENDERBUFFER,null),T.depthBuffer&&(B.__webglDepthRenderbuffer=i.createRenderbuffer(),ht(B.__webglDepthRenderbuffer,T,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(j){e.bindTexture(i.TEXTURE_CUBE_MAP,Z.__webglTexture),xt(i.TEXTURE_CUBE_MAP,v);for(let vt=0;vt<6;vt++)if(v.mipmaps&&v.mipmaps.length>0)for(let Tt=0;Tt<v.mipmaps.length;Tt++)_t(B.__webglFramebuffer[vt][Tt],T,v,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Tt);else _t(B.__webglFramebuffer[vt],T,v,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+vt,0);g(v)&&p(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(yt){for(let vt=0,Tt=tt.length;vt<Tt;vt++){const Jt=tt[vt],ft=n.get(Jt);e.bindTexture(i.TEXTURE_2D,ft.__webglTexture),xt(i.TEXTURE_2D,Jt),_t(B.__webglFramebuffer,T,Jt,i.COLOR_ATTACHMENT0+vt,i.TEXTURE_2D,0),g(Jt)&&p(i.TEXTURE_2D)}e.unbindTexture()}else{let vt=i.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(vt=T.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(vt,Z.__webglTexture),xt(vt,v),v.mipmaps&&v.mipmaps.length>0)for(let Tt=0;Tt<v.mipmaps.length;Tt++)_t(B.__webglFramebuffer[Tt],T,v,i.COLOR_ATTACHMENT0,vt,Tt);else _t(B.__webglFramebuffer,T,v,i.COLOR_ATTACHMENT0,vt,0);g(v)&&p(vt),e.unbindTexture()}T.depthBuffer&&Lt(T)}function rt(T){const v=T.textures;for(let B=0,Z=v.length;B<Z;B++){const tt=v[B];if(g(tt)){const j=w(T),yt=n.get(tt).__webglTexture;e.bindTexture(j,yt),p(j),e.unbindTexture()}}}const dt=[],P=[];function It(T){if(T.samples>0){if(N(T)===!1){const v=T.textures,B=T.width,Z=T.height;let tt=i.COLOR_BUFFER_BIT;const j=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,yt=n.get(T),vt=v.length>1;if(vt)for(let Tt=0;Tt<v.length;Tt++)e.bindFramebuffer(i.FRAMEBUFFER,yt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Tt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,yt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Tt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,yt.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,yt.__webglFramebuffer);for(let Tt=0;Tt<v.length;Tt++){if(T.resolveDepthBuffer&&(T.depthBuffer&&(tt|=i.DEPTH_BUFFER_BIT),T.stencilBuffer&&T.resolveStencilBuffer&&(tt|=i.STENCIL_BUFFER_BIT)),vt){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,yt.__webglColorRenderbuffer[Tt]);const Jt=n.get(v[Tt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Jt,0)}i.blitFramebuffer(0,0,B,Z,0,0,B,Z,tt,i.NEAREST),c===!0&&(dt.length=0,P.length=0,dt.push(i.COLOR_ATTACHMENT0+Tt),T.depthBuffer&&T.resolveDepthBuffer===!1&&(dt.push(j),P.push(j),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,P)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,dt))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),vt)for(let Tt=0;Tt<v.length;Tt++){e.bindFramebuffer(i.FRAMEBUFFER,yt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Tt,i.RENDERBUFFER,yt.__webglColorRenderbuffer[Tt]);const Jt=n.get(v[Tt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,yt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Tt,i.TEXTURE_2D,Jt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,yt.__webglMultisampledFramebuffer)}else if(T.depthBuffer&&T.resolveDepthBuffer===!1&&c){const v=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[v])}}}function W(T){return Math.min(s.maxSamples,T.samples)}function N(T){const v=n.get(T);return T.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function U(T){const v=o.render.frame;h.get(T)!==v&&(h.set(T,v),T.update())}function ot(T,v){const B=T.colorSpace,Z=T.format,tt=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||B!==os&&B!==Mn&&(ne.getTransfer(B)===he?(Z!==fn||tt!==Nn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",B)),v}function ct(T){return typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement?(l.width=T.naturalWidth||T.width,l.height=T.naturalHeight||T.height):typeof VideoFrame<"u"&&T instanceof VideoFrame?(l.width=T.displayWidth,l.height=T.displayHeight):(l.width=T.width,l.height=T.height),l}this.allocateTextureUnit=H,this.resetTextureUnits=O,this.setTexture2D=J,this.setTexture2DArray=X,this.setTexture3D=it,this.setTextureCube=V,this.rebindTextures=Ut,this.setupRenderTarget=Wt,this.updateRenderTargetMipmap=rt,this.updateMultisampleRenderTarget=It,this.setupDepthRenderbuffer=Lt,this.setupFrameBufferTexture=_t,this.useMultisampledRTT=N}function ag(i,t){function e(n,s=Mn){let r;const o=ne.getTransfer(s);if(n===Nn)return i.UNSIGNED_BYTE;if(n===qa)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Ya)return i.UNSIGNED_SHORT_5_5_5_1;if(n===hh)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===ch)return i.BYTE;if(n===lh)return i.SHORT;if(n===Is)return i.UNSIGNED_SHORT;if(n===Xa)return i.INT;if(n===wi)return i.UNSIGNED_INT;if(n===wn)return i.FLOAT;if(n===zs)return i.HALF_FLOAT;if(n===uh)return i.ALPHA;if(n===dh)return i.RGB;if(n===fn)return i.RGBA;if(n===fh)return i.LUMINANCE;if(n===ph)return i.LUMINANCE_ALPHA;if(n===Zi)return i.DEPTH_COMPONENT;if(n===is)return i.DEPTH_STENCIL;if(n===$a)return i.RED;if(n===Za)return i.RED_INTEGER;if(n===mh)return i.RG;if(n===Ka)return i.RG_INTEGER;if(n===Ja)return i.RGBA_INTEGER;if(n===Sr||n===Er||n===Tr||n===br)if(o===he)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Sr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Er)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Tr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===br)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Sr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Er)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Tr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===br)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===ia||n===sa||n===ra||n===oa)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===ia)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===sa)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===ra)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===oa)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===aa||n===ca||n===la)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===aa||n===ca)return o===he?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===la)return o===he?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===ha||n===ua||n===da||n===fa||n===pa||n===ma||n===ga||n===_a||n===va||n===xa||n===Ma||n===ya||n===wa||n===Sa)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===ha)return o===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===ua)return o===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===da)return o===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===fa)return o===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===pa)return o===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===ma)return o===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===ga)return o===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===_a)return o===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===va)return o===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===xa)return o===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Ma)return o===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===ya)return o===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===wa)return o===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Sa)return o===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Ar||n===Ea||n===Ta)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===Ar)return o===he?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Ea)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Ta)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===gh||n===ba||n===Aa||n===Ra)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===Ar)return r.COMPRESSED_RED_RGTC1_EXT;if(n===ba)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Aa)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Ra)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===ns?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}class cg extends He{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class Dt extends Ae{constructor(){super(),this.isGroup=!0,this.type="Group"}}const lg={type:"move"};class Ro{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Dt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Dt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new L,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new L),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Dt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new L,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new L),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,o=null;const a=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){o=!0;for(const _ of t.hand.values()){const g=e.getJointPose(_,n),p=this._getHandJoint(l,_);g!==null&&(p.matrix.fromArray(g.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=g.radius),p.visible=g!==null}const h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,m=.005;l.inputState.pinching&&d>f+m?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&d<=f-m&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(lg)))}return a!==null&&(a.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new Dt;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const hg=`
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

}`;class dg{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const s=new Ge,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new ni({vertexShader:hg,fragmentShader:ug,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new A(new dn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class fg extends as{constructor(t,e){super();const n=this;let s=null,r=1,o=null,a="local-floor",c=1,l=null,h=null,u=null,d=null,f=null,m=null;const _=new dg,g=e.getContextAttributes();let p=null,w=null;const S=[],x=[],D=new pt;let E=null;const R=new He;R.viewport=new ue;const I=new He;I.viewport=new ue;const y=[R,I],M=new cg;let C=null,O=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let st=S[q];return st===void 0&&(st=new Ro,S[q]=st),st.getTargetRaySpace()},this.getControllerGrip=function(q){let st=S[q];return st===void 0&&(st=new Ro,S[q]=st),st.getGripSpace()},this.getHand=function(q){let st=S[q];return st===void 0&&(st=new Ro,S[q]=st),st.getHandSpace()};function H(q){const st=x.indexOf(q.inputSource);if(st===-1)return;const _t=S[st];_t!==void 0&&(_t.update(q.inputSource,q.frame,l||o),_t.dispatchEvent({type:q.type,data:q.inputSource}))}function G(){s.removeEventListener("select",H),s.removeEventListener("selectstart",H),s.removeEventListener("selectend",H),s.removeEventListener("squeeze",H),s.removeEventListener("squeezestart",H),s.removeEventListener("squeezeend",H),s.removeEventListener("end",G),s.removeEventListener("inputsourceschange",J);for(let q=0;q<S.length;q++){const st=x[q];st!==null&&(x[q]=null,S[q].disconnect(st))}C=null,O=null,_.reset(),t.setRenderTarget(p),f=null,d=null,u=null,s=null,w=null,Pt.stop(),n.isPresenting=!1,t.setPixelRatio(E),t.setSize(D.width,D.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){r=q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){a=q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(q){l=q},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u},this.getFrame=function(){return m},this.getSession=function(){return s},this.setSession=async function(q){if(s=q,s!==null){if(p=t.getRenderTarget(),s.addEventListener("select",H),s.addEventListener("selectstart",H),s.addEventListener("selectend",H),s.addEventListener("squeeze",H),s.addEventListener("squeezestart",H),s.addEventListener("squeezeend",H),s.addEventListener("end",G),s.addEventListener("inputsourceschange",J),g.xrCompatible!==!0&&await e.makeXRCompatible(),E=t.getPixelRatio(),t.getSize(D),s.renderState.layers===void 0){const st={antialias:g.antialias,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,e,st),s.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),w=new Si(f.framebufferWidth,f.framebufferHeight,{format:fn,type:Nn,colorSpace:t.outputColorSpace,stencilBuffer:g.stencil})}else{let st=null,_t=null,ht=null;g.depth&&(ht=g.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,st=g.stencil?is:Zi,_t=g.stencil?ns:wi);const gt={colorFormat:e.RGBA8,depthFormat:ht,scaleFactor:r};u=new XRWebGLBinding(s,e),d=u.createProjectionLayer(gt),s.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),w=new Si(d.textureWidth,d.textureHeight,{format:fn,type:Nn,depthTexture:new Ch(d.textureWidth,d.textureHeight,_t,void 0,void 0,void 0,void 0,void 0,void 0,st),stencilBuffer:g.stencil,colorSpace:t.outputColorSpace,samples:g.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}w.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await s.requestReferenceSpace(a),Pt.setContext(s),Pt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function J(q){for(let st=0;st<q.removed.length;st++){const _t=q.removed[st],ht=x.indexOf(_t);ht>=0&&(x[ht]=null,S[ht].disconnect(_t))}for(let st=0;st<q.added.length;st++){const _t=q.added[st];let ht=x.indexOf(_t);if(ht===-1){for(let Lt=0;Lt<S.length;Lt++)if(Lt>=x.length){x.push(_t),ht=Lt;break}else if(x[Lt]===null){x[Lt]=_t,ht=Lt;break}if(ht===-1)break}const gt=S[ht];gt&&gt.connect(_t)}}const X=new L,it=new L;function V(q,st,_t){X.setFromMatrixPosition(st.matrixWorld),it.setFromMatrixPosition(_t.matrixWorld);const ht=X.distanceTo(it),gt=st.projectionMatrix.elements,Lt=_t.projectionMatrix.elements,Ut=gt[14]/(gt[10]-1),Wt=gt[14]/(gt[10]+1),rt=(gt[9]+1)/gt[5],dt=(gt[9]-1)/gt[5],P=(gt[8]-1)/gt[0],It=(Lt[8]+1)/Lt[0],W=Ut*P,N=Ut*It,U=ht/(-P+It),ot=U*-P;if(st.matrixWorld.decompose(q.position,q.quaternion,q.scale),q.translateX(ot),q.translateZ(U),q.matrixWorld.compose(q.position,q.quaternion,q.scale),q.matrixWorldInverse.copy(q.matrixWorld).invert(),gt[10]===-1)q.projectionMatrix.copy(st.projectionMatrix),q.projectionMatrixInverse.copy(st.projectionMatrixInverse);else{const ct=Ut+U,T=Wt+U,v=W-ot,B=N+(ht-ot),Z=rt*Wt/T*ct,tt=dt*Wt/T*ct;q.projectionMatrix.makePerspective(v,B,Z,tt,ct,T),q.projectionMatrixInverse.copy(q.projectionMatrix).invert()}}function Q(q,st){st===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(st.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(s===null)return;let st=q.near,_t=q.far;_.texture!==null&&(_.depthNear>0&&(st=_.depthNear),_.depthFar>0&&(_t=_.depthFar)),M.near=I.near=R.near=st,M.far=I.far=R.far=_t,(C!==M.near||O!==M.far)&&(s.updateRenderState({depthNear:M.near,depthFar:M.far}),C=M.near,O=M.far),R.layers.mask=q.layers.mask|2,I.layers.mask=q.layers.mask|4,M.layers.mask=R.layers.mask|I.layers.mask;const ht=q.parent,gt=M.cameras;Q(M,ht);for(let Lt=0;Lt<gt.length;Lt++)Q(gt[Lt],ht);gt.length===2?V(M,R,I):M.projectionMatrix.copy(R.projectionMatrix),K(q,M,ht)};function K(q,st,_t){_t===null?q.matrix.copy(st.matrixWorld):(q.matrix.copy(_t.matrixWorld),q.matrix.invert(),q.matrix.multiply(st.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy(st.projectionMatrix),q.projectionMatrixInverse.copy(st.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=Ca*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(d===null&&f===null))return c},this.setFoveation=function(q){c=q,d!==null&&(d.fixedFoveation=q),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=q)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(M)};let lt=null;function xt(q,st){if(h=st.getViewerPose(l||o),m=st,h!==null){const _t=h.views;f!==null&&(t.setRenderTargetFramebuffer(w,f.framebuffer),t.setRenderTarget(w));let ht=!1;_t.length!==M.cameras.length&&(M.cameras.length=0,ht=!0);for(let Lt=0;Lt<_t.length;Lt++){const Ut=_t[Lt];let Wt=null;if(f!==null)Wt=f.getViewport(Ut);else{const dt=u.getViewSubImage(d,Ut);Wt=dt.viewport,Lt===0&&(t.setRenderTargetTextures(w,dt.colorTexture,d.ignoreDepthValues?void 0:dt.depthStencilTexture),t.setRenderTarget(w))}let rt=y[Lt];rt===void 0&&(rt=new He,rt.layers.enable(Lt),rt.viewport=new ue,y[Lt]=rt),rt.matrix.fromArray(Ut.transform.matrix),rt.matrix.decompose(rt.position,rt.quaternion,rt.scale),rt.projectionMatrix.fromArray(Ut.projectionMatrix),rt.projectionMatrixInverse.copy(rt.projectionMatrix).invert(),rt.viewport.set(Wt.x,Wt.y,Wt.width,Wt.height),Lt===0&&(M.matrix.copy(rt.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),ht===!0&&M.cameras.push(rt)}const gt=s.enabledFeatures;if(gt&&gt.includes("depth-sensing")){const Lt=u.getDepthInformation(_t[0]);Lt&&Lt.isValid&&Lt.texture&&_.init(t,Lt,s.renderState)}}for(let _t=0;_t<S.length;_t++){const ht=x[_t],gt=S[_t];ht!==null&&gt!==void 0&&gt.update(ht,st,l||o)}lt&&lt(q,st),st.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:st}),m=null}const Pt=new Ah;Pt.setAnimationLoop(xt),this.setAnimationLoop=function(q){lt=q},this.dispose=function(){}}}const hi=new mn,pg=new le;function mg(i,t){function e(g,p){g.matrixAutoUpdate===!0&&g.updateMatrix(),p.value.copy(g.matrix)}function n(g,p){p.color.getRGB(g.fogColor.value,Eh(i)),p.isFog?(g.fogNear.value=p.near,g.fogFar.value=p.far):p.isFogExp2&&(g.fogDensity.value=p.density)}function s(g,p,w,S,x){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(g,p):p.isMeshToonMaterial?(r(g,p),u(g,p)):p.isMeshPhongMaterial?(r(g,p),h(g,p)):p.isMeshStandardMaterial?(r(g,p),d(g,p),p.isMeshPhysicalMaterial&&f(g,p,x)):p.isMeshMatcapMaterial?(r(g,p),m(g,p)):p.isMeshDepthMaterial?r(g,p):p.isMeshDistanceMaterial?(r(g,p),_(g,p)):p.isMeshNormalMaterial?r(g,p):p.isLineBasicMaterial?(o(g,p),p.isLineDashedMaterial&&a(g,p)):p.isPointsMaterial?c(g,p,w,S):p.isSpriteMaterial?l(g,p):p.isShadowMaterial?(g.color.value.copy(p.color),g.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(g,p){g.opacity.value=p.opacity,p.color&&g.diffuse.value.copy(p.color),p.emissive&&g.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(g.map.value=p.map,e(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.bumpMap&&(g.bumpMap.value=p.bumpMap,e(p.bumpMap,g.bumpMapTransform),g.bumpScale.value=p.bumpScale,p.side===Fe&&(g.bumpScale.value*=-1)),p.normalMap&&(g.normalMap.value=p.normalMap,e(p.normalMap,g.normalMapTransform),g.normalScale.value.copy(p.normalScale),p.side===Fe&&g.normalScale.value.negate()),p.displacementMap&&(g.displacementMap.value=p.displacementMap,e(p.displacementMap,g.displacementMapTransform),g.displacementScale.value=p.displacementScale,g.displacementBias.value=p.displacementBias),p.emissiveMap&&(g.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,g.emissiveMapTransform)),p.specularMap&&(g.specularMap.value=p.specularMap,e(p.specularMap,g.specularMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest);const w=t.get(p),S=w.envMap,x=w.envMapRotation;S&&(g.envMap.value=S,hi.copy(x),hi.x*=-1,hi.y*=-1,hi.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(hi.y*=-1,hi.z*=-1),g.envMapRotation.value.setFromMatrix4(pg.makeRotationFromEuler(hi)),g.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=p.reflectivity,g.ior.value=p.ior,g.refractionRatio.value=p.refractionRatio),p.lightMap&&(g.lightMap.value=p.lightMap,g.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,g.lightMapTransform)),p.aoMap&&(g.aoMap.value=p.aoMap,g.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,g.aoMapTransform))}function o(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,p.map&&(g.map.value=p.map,e(p.map,g.mapTransform))}function a(g,p){g.dashSize.value=p.dashSize,g.totalSize.value=p.dashSize+p.gapSize,g.scale.value=p.scale}function c(g,p,w,S){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.size.value=p.size*w,g.scale.value=S*.5,p.map&&(g.map.value=p.map,e(p.map,g.uvTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function l(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.rotation.value=p.rotation,p.map&&(g.map.value=p.map,e(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function h(g,p){g.specular.value.copy(p.specular),g.shininess.value=Math.max(p.shininess,1e-4)}function u(g,p){p.gradientMap&&(g.gradientMap.value=p.gradientMap)}function d(g,p){g.metalness.value=p.metalness,p.metalnessMap&&(g.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,g.metalnessMapTransform)),g.roughness.value=p.roughness,p.roughnessMap&&(g.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,g.roughnessMapTransform)),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)}function f(g,p,w){g.ior.value=p.ior,p.sheen>0&&(g.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),g.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(g.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,g.sheenColorMapTransform)),p.sheenRoughnessMap&&(g.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,g.sheenRoughnessMapTransform))),p.clearcoat>0&&(g.clearcoat.value=p.clearcoat,g.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(g.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,g.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(g.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Fe&&g.clearcoatNormalScale.value.negate())),p.dispersion>0&&(g.dispersion.value=p.dispersion),p.iridescence>0&&(g.iridescence.value=p.iridescence,g.iridescenceIOR.value=p.iridescenceIOR,g.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(g.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,g.iridescenceMapTransform)),p.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),p.transmission>0&&(g.transmission.value=p.transmission,g.transmissionSamplerMap.value=w.texture,g.transmissionSamplerSize.value.set(w.width,w.height),p.transmissionMap&&(g.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,g.transmissionMapTransform)),g.thickness.value=p.thickness,p.thicknessMap&&(g.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=p.attenuationDistance,g.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(g.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(g.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=p.specularIntensity,g.specularColor.value.copy(p.specularColor),p.specularColorMap&&(g.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,g.specularColorMapTransform)),p.specularIntensityMap&&(g.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,g.specularIntensityMapTransform))}function m(g,p){p.matcap&&(g.matcap.value=p.matcap)}function _(g,p){const w=t.get(p).light;g.referencePosition.value.setFromMatrixPosition(w.matrixWorld),g.nearDistance.value=w.shadow.camera.near,g.farDistance.value=w.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function gg(i,t,e,n){let s={},r={},o=[];const a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(w,S){const x=S.program;n.uniformBlockBinding(w,x)}function l(w,S){let x=s[w.id];x===void 0&&(m(w),x=h(w),s[w.id]=x,w.addEventListener("dispose",g));const D=S.program;n.updateUBOMapping(w,D);const E=t.render.frame;r[w.id]!==E&&(d(w),r[w.id]=E)}function h(w){const S=u();w.__bindingPointIndex=S;const x=i.createBuffer(),D=w.__size,E=w.usage;return i.bindBuffer(i.UNIFORM_BUFFER,x),i.bufferData(i.UNIFORM_BUFFER,D,E),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,S,x),x}function u(){for(let w=0;w<a;w++)if(o.indexOf(w)===-1)return o.push(w),w;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(w){const S=s[w.id],x=w.uniforms,D=w.__cache;i.bindBuffer(i.UNIFORM_BUFFER,S);for(let E=0,R=x.length;E<R;E++){const I=Array.isArray(x[E])?x[E]:[x[E]];for(let y=0,M=I.length;y<M;y++){const C=I[y];if(f(C,E,y,D)===!0){const O=C.__offset,H=Array.isArray(C.value)?C.value:[C.value];let G=0;for(let J=0;J<H.length;J++){const X=H[J],it=_(X);typeof X=="number"||typeof X=="boolean"?(C.__data[0]=X,i.bufferSubData(i.UNIFORM_BUFFER,O+G,C.__data)):X.isMatrix3?(C.__data[0]=X.elements[0],C.__data[1]=X.elements[1],C.__data[2]=X.elements[2],C.__data[3]=0,C.__data[4]=X.elements[3],C.__data[5]=X.elements[4],C.__data[6]=X.elements[5],C.__data[7]=0,C.__data[8]=X.elements[6],C.__data[9]=X.elements[7],C.__data[10]=X.elements[8],C.__data[11]=0):(X.toArray(C.__data,G),G+=it.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,O,C.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(w,S,x,D){const E=w.value,R=S+"_"+x;if(D[R]===void 0)return typeof E=="number"||typeof E=="boolean"?D[R]=E:D[R]=E.clone(),!0;{const I=D[R];if(typeof E=="number"||typeof E=="boolean"){if(I!==E)return D[R]=E,!0}else if(I.equals(E)===!1)return I.copy(E),!0}return!1}function m(w){const S=w.uniforms;let x=0;const D=16;for(let R=0,I=S.length;R<I;R++){const y=Array.isArray(S[R])?S[R]:[S[R]];for(let M=0,C=y.length;M<C;M++){const O=y[M],H=Array.isArray(O.value)?O.value:[O.value];for(let G=0,J=H.length;G<J;G++){const X=H[G],it=_(X),V=x%D,Q=V%it.boundary,K=V+Q;x+=Q,K!==0&&D-K<it.storage&&(x+=D-K),O.__data=new Float32Array(it.storage/Float32Array.BYTES_PER_ELEMENT),O.__offset=x,x+=it.storage}}}const E=x%D;return E>0&&(x+=D-E),w.__size=x,w.__cache={},this}function _(w){const S={boundary:0,storage:0};return typeof w=="number"||typeof w=="boolean"?(S.boundary=4,S.storage=4):w.isVector2?(S.boundary=8,S.storage=8):w.isVector3||w.isColor?(S.boundary=16,S.storage=12):w.isVector4?(S.boundary=16,S.storage=16):w.isMatrix3?(S.boundary=48,S.storage=48):w.isMatrix4?(S.boundary=64,S.storage=64):w.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",w),S}function g(w){const S=w.target;S.removeEventListener("dispose",g);const x=o.indexOf(S.__bindingPointIndex);o.splice(x,1),i.deleteBuffer(s[S.id]),delete s[S.id],delete r[S.id]}function p(){for(const w in s)i.deleteBuffer(s[w]);o=[],s={},r={}}return{bind:c,update:l,dispose:p}}class ic{constructor(t={}){const{canvas:e=sd(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:d=!1}=t;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=o;const m=new Uint32Array(4),_=new Int32Array(4);let g=null,p=null;const w=[],S=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=De,this.toneMapping=Qn,this.toneMappingExposure=1;const x=this;let D=!1,E=0,R=0,I=null,y=-1,M=null;const C=new ue,O=new ue;let H=null;const G=new Et(0);let J=0,X=e.width,it=e.height,V=1,Q=null,K=null;const lt=new ue(0,0,X,it),xt=new ue(0,0,X,it);let Pt=!1;const q=new ec;let st=!1,_t=!1;const ht=new le,gt=new le,Lt=new L,Ut=new ue,Wt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let rt=!1;function dt(){return I===null?V:1}let P=n;function It(b,z){return e.getContext(b,z)}try{const b={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Va}`),e.addEventListener("webglcontextlost",at,!1),e.addEventListener("webglcontextrestored",Rt,!1),e.addEventListener("webglcontextcreationerror",bt,!1),P===null){const z="webgl2";if(P=It(z,b),P===null)throw It(z)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(b){throw console.error("THREE.WebGLRenderer: "+b.message),b}let W,N,U,ot,ct,T,v,B,Z,tt,j,yt,vt,Tt,Jt,ft,St,Ht,Gt,Ct,jt,$t,de,F;function wt(){W=new w0(P),W.init(),$t=new ag(P,W),N=new g0(P,W,t,$t),U=new sg(P,W),N.reverseDepthBuffer&&d&&U.buffers.depth.setReversed(!0),ot=new T0(P),ct=new Vm,T=new og(P,W,U,ct,N,$t,ot),v=new v0(x),B=new y0(x),Z=new Ld(P),de=new p0(P,Z),tt=new S0(P,Z,ot,de),j=new A0(P,tt,Z,ot),Gt=new b0(P,N,T),ft=new _0(ct),yt=new Gm(x,v,B,W,N,de,ft),vt=new mg(x,ct),Tt=new Xm,Jt=new Jm(W),Ht=new f0(x,v,B,U,j,f,c),St=new ng(x,j,N),F=new gg(P,ot,N,U),Ct=new m0(P,W,ot),jt=new E0(P,W,ot),ot.programs=yt.programs,x.capabilities=N,x.extensions=W,x.properties=ct,x.renderLists=Tt,x.shadowMap=St,x.state=U,x.info=ot}wt();const et=new fg(x,P);this.xr=et,this.getContext=function(){return P},this.getContextAttributes=function(){return P.getContextAttributes()},this.forceContextLoss=function(){const b=W.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){const b=W.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return V},this.setPixelRatio=function(b){b!==void 0&&(V=b,this.setSize(X,it,!1))},this.getSize=function(b){return b.set(X,it)},this.setSize=function(b,z,Y=!0){if(et.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}X=b,it=z,e.width=Math.floor(b*V),e.height=Math.floor(z*V),Y===!0&&(e.style.width=b+"px",e.style.height=z+"px"),this.setViewport(0,0,b,z)},this.getDrawingBufferSize=function(b){return b.set(X*V,it*V).floor()},this.setDrawingBufferSize=function(b,z,Y){X=b,it=z,V=Y,e.width=Math.floor(b*Y),e.height=Math.floor(z*Y),this.setViewport(0,0,b,z)},this.getCurrentViewport=function(b){return b.copy(C)},this.getViewport=function(b){return b.copy(lt)},this.setViewport=function(b,z,Y,$){b.isVector4?lt.set(b.x,b.y,b.z,b.w):lt.set(b,z,Y,$),U.viewport(C.copy(lt).multiplyScalar(V).round())},this.getScissor=function(b){return b.copy(xt)},this.setScissor=function(b,z,Y,$){b.isVector4?xt.set(b.x,b.y,b.z,b.w):xt.set(b,z,Y,$),U.scissor(O.copy(xt).multiplyScalar(V).round())},this.getScissorTest=function(){return Pt},this.setScissorTest=function(b){U.setScissorTest(Pt=b)},this.setOpaqueSort=function(b){Q=b},this.setTransparentSort=function(b){K=b},this.getClearColor=function(b){return b.copy(Ht.getClearColor())},this.setClearColor=function(){Ht.setClearColor.apply(Ht,arguments)},this.getClearAlpha=function(){return Ht.getClearAlpha()},this.setClearAlpha=function(){Ht.setClearAlpha.apply(Ht,arguments)},this.clear=function(b=!0,z=!0,Y=!0){let $=0;if(b){let k=!1;if(I!==null){const mt=I.texture.format;k=mt===Ja||mt===Ka||mt===Za}if(k){const mt=I.texture.type,At=mt===Nn||mt===wi||mt===Is||mt===ns||mt===qa||mt===Ya,Ft=Ht.getClearColor(),Ot=Ht.getClearAlpha(),Vt=Ft.r,qt=Ft.g,zt=Ft.b;At?(m[0]=Vt,m[1]=qt,m[2]=zt,m[3]=Ot,P.clearBufferuiv(P.COLOR,0,m)):(_[0]=Vt,_[1]=qt,_[2]=zt,_[3]=Ot,P.clearBufferiv(P.COLOR,0,_))}else $|=P.COLOR_BUFFER_BIT}z&&($|=P.DEPTH_BUFFER_BIT),Y&&($|=P.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),P.clear($)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",at,!1),e.removeEventListener("webglcontextrestored",Rt,!1),e.removeEventListener("webglcontextcreationerror",bt,!1),Tt.dispose(),Jt.dispose(),ct.dispose(),v.dispose(),B.dispose(),j.dispose(),de.dispose(),F.dispose(),yt.dispose(),et.dispose(),et.removeEventListener("sessionstart",_c),et.removeEventListener("sessionend",vc),si.stop()};function at(b){b.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),D=!0}function Rt(){console.log("THREE.WebGLRenderer: Context Restored."),D=!1;const b=ot.autoReset,z=St.enabled,Y=St.autoUpdate,$=St.needsUpdate,k=St.type;wt(),ot.autoReset=b,St.enabled=z,St.autoUpdate=Y,St.needsUpdate=$,St.type=k}function bt(b){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function Xt(b){const z=b.target;z.removeEventListener("dispose",Xt),xe(z)}function xe(b){Oe(b),ct.remove(b)}function Oe(b){const z=ct.get(b).programs;z!==void 0&&(z.forEach(function(Y){yt.releaseProgram(Y)}),b.isShaderMaterial&&yt.releaseShaderCache(b))}this.renderBufferDirect=function(b,z,Y,$,k,mt){z===null&&(z=Wt);const At=k.isMesh&&k.matrixWorld.determinant()<0,Ft=pu(b,z,Y,$,k);U.setMaterial($,At);let Ot=Y.index,Vt=1;if($.wireframe===!0){if(Ot=tt.getWireframeAttribute(Y),Ot===void 0)return;Vt=2}const qt=Y.drawRange,zt=Y.attributes.position;let ie=qt.start*Vt,fe=(qt.start+qt.count)*Vt;mt!==null&&(ie=Math.max(ie,mt.start*Vt),fe=Math.min(fe,(mt.start+mt.count)*Vt)),Ot!==null?(ie=Math.max(ie,0),fe=Math.min(fe,Ot.count)):zt!=null&&(ie=Math.max(ie,0),fe=Math.min(fe,zt.count));const me=fe-ie;if(me<0||me===1/0)return;de.setup(k,$,Ft,Y,Ot);let qe,re=Ct;if(Ot!==null&&(qe=Z.get(Ot),re=jt,re.setIndex(qe)),k.isMesh)$.wireframe===!0?(U.setLineWidth($.wireframeLinewidth*dt()),re.setMode(P.LINES)):re.setMode(P.TRIANGLES);else if(k.isLine){let Bt=$.linewidth;Bt===void 0&&(Bt=1),U.setLineWidth(Bt*dt()),k.isLineSegments?re.setMode(P.LINES):k.isLineLoop?re.setMode(P.LINE_LOOP):re.setMode(P.LINE_STRIP)}else k.isPoints?re.setMode(P.POINTS):k.isSprite&&re.setMode(P.TRIANGLES);if(k.isBatchedMesh)if(k._multiDrawInstances!==null)re.renderMultiDrawInstances(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount,k._multiDrawInstances);else if(W.get("WEBGL_multi_draw"))re.renderMultiDraw(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount);else{const Bt=k._multiDrawStarts,bn=k._multiDrawCounts,oe=k._multiDrawCount,an=Ot?Z.get(Ot).bytesPerElement:1,Ci=ct.get($).currentProgram.getUniforms();for(let Ze=0;Ze<oe;Ze++)Ci.setValue(P,"_gl_DrawID",Ze),re.render(Bt[Ze]/an,bn[Ze])}else if(k.isInstancedMesh)re.renderInstances(ie,me,k.count);else if(Y.isInstancedBufferGeometry){const Bt=Y._maxInstanceCount!==void 0?Y._maxInstanceCount:1/0,bn=Math.min(Y.instanceCount,Bt);re.renderInstances(ie,me,bn)}else re.render(ie,me)};function ae(b,z,Y){b.transparent===!0&&b.side===Te&&b.forceSinglePass===!1?(b.side=Fe,b.needsUpdate=!0,Xs(b,z,Y),b.side=ei,b.needsUpdate=!0,Xs(b,z,Y),b.side=Te):Xs(b,z,Y)}this.compile=function(b,z,Y=null){Y===null&&(Y=b),p=Jt.get(Y),p.init(z),S.push(p),Y.traverseVisible(function(k){k.isLight&&k.layers.test(z.layers)&&(p.pushLight(k),k.castShadow&&p.pushShadow(k))}),b!==Y&&b.traverseVisible(function(k){k.isLight&&k.layers.test(z.layers)&&(p.pushLight(k),k.castShadow&&p.pushShadow(k))}),p.setupLights();const $=new Set;return b.traverse(function(k){if(!(k.isMesh||k.isPoints||k.isLine||k.isSprite))return;const mt=k.material;if(mt)if(Array.isArray(mt))for(let At=0;At<mt.length;At++){const Ft=mt[At];ae(Ft,Y,k),$.add(Ft)}else ae(mt,Y,k),$.add(mt)}),S.pop(),p=null,$},this.compileAsync=function(b,z,Y=null){const $=this.compile(b,z,Y);return new Promise(k=>{function mt(){if($.forEach(function(At){ct.get(At).currentProgram.isReady()&&$.delete(At)}),$.size===0){k(b);return}setTimeout(mt,10)}W.get("KHR_parallel_shader_compile")!==null?mt():setTimeout(mt,10)})};let on=null;function Tn(b){on&&on(b)}function _c(){si.stop()}function vc(){si.start()}const si=new Ah;si.setAnimationLoop(Tn),typeof self<"u"&&si.setContext(self),this.setAnimationLoop=function(b){on=b,et.setAnimationLoop(b),b===null?si.stop():si.start()},et.addEventListener("sessionstart",_c),et.addEventListener("sessionend",vc),this.render=function(b,z){if(z!==void 0&&z.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(D===!0)return;if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),z.parent===null&&z.matrixWorldAutoUpdate===!0&&z.updateMatrixWorld(),et.enabled===!0&&et.isPresenting===!0&&(et.cameraAutoUpdate===!0&&et.updateCamera(z),z=et.getCamera()),b.isScene===!0&&b.onBeforeRender(x,b,z,I),p=Jt.get(b,S.length),p.init(z),S.push(p),gt.multiplyMatrices(z.projectionMatrix,z.matrixWorldInverse),q.setFromProjectionMatrix(gt),_t=this.localClippingEnabled,st=ft.init(this.clippingPlanes,_t),g=Tt.get(b,w.length),g.init(),w.push(g),et.enabled===!0&&et.isPresenting===!0){const mt=x.xr.getDepthSensingMesh();mt!==null&&Jr(mt,z,-1/0,x.sortObjects)}Jr(b,z,0,x.sortObjects),g.finish(),x.sortObjects===!0&&g.sort(Q,K),rt=et.enabled===!1||et.isPresenting===!1||et.hasDepthSensing()===!1,rt&&Ht.addToRenderList(g,b),this.info.render.frame++,st===!0&&ft.beginShadows();const Y=p.state.shadowsArray;St.render(Y,b,z),st===!0&&ft.endShadows(),this.info.autoReset===!0&&this.info.reset();const $=g.opaque,k=g.transmissive;if(p.setupLights(),z.isArrayCamera){const mt=z.cameras;if(k.length>0)for(let At=0,Ft=mt.length;At<Ft;At++){const Ot=mt[At];Mc($,k,b,Ot)}rt&&Ht.render(b);for(let At=0,Ft=mt.length;At<Ft;At++){const Ot=mt[At];xc(g,b,Ot,Ot.viewport)}}else k.length>0&&Mc($,k,b,z),rt&&Ht.render(b),xc(g,b,z);I!==null&&(T.updateMultisampleRenderTarget(I),T.updateRenderTargetMipmap(I)),b.isScene===!0&&b.onAfterRender(x,b,z),de.resetDefaultState(),y=-1,M=null,S.pop(),S.length>0?(p=S[S.length-1],st===!0&&ft.setGlobalState(x.clippingPlanes,p.state.camera)):p=null,w.pop(),w.length>0?g=w[w.length-1]:g=null};function Jr(b,z,Y,$){if(b.visible===!1)return;if(b.layers.test(z.layers)){if(b.isGroup)Y=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(z);else if(b.isLight)p.pushLight(b),b.castShadow&&p.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||q.intersectsSprite(b)){$&&Ut.setFromMatrixPosition(b.matrixWorld).applyMatrix4(gt);const At=j.update(b),Ft=b.material;Ft.visible&&g.push(b,At,Ft,Y,Ut.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||q.intersectsObject(b))){const At=j.update(b),Ft=b.material;if($&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),Ut.copy(b.boundingSphere.center)):(At.boundingSphere===null&&At.computeBoundingSphere(),Ut.copy(At.boundingSphere.center)),Ut.applyMatrix4(b.matrixWorld).applyMatrix4(gt)),Array.isArray(Ft)){const Ot=At.groups;for(let Vt=0,qt=Ot.length;Vt<qt;Vt++){const zt=Ot[Vt],ie=Ft[zt.materialIndex];ie&&ie.visible&&g.push(b,At,ie,Y,Ut.z,zt)}}else Ft.visible&&g.push(b,At,Ft,Y,Ut.z,null)}}const mt=b.children;for(let At=0,Ft=mt.length;At<Ft;At++)Jr(mt[At],z,Y,$)}function xc(b,z,Y,$){const k=b.opaque,mt=b.transmissive,At=b.transparent;p.setupLightsView(Y),st===!0&&ft.setGlobalState(x.clippingPlanes,Y),$&&U.viewport(C.copy($)),k.length>0&&Ws(k,z,Y),mt.length>0&&Ws(mt,z,Y),At.length>0&&Ws(At,z,Y),U.buffers.depth.setTest(!0),U.buffers.depth.setMask(!0),U.buffers.color.setMask(!0),U.setPolygonOffset(!1)}function Mc(b,z,Y,$){if((Y.isScene===!0?Y.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[$.id]===void 0&&(p.state.transmissionRenderTarget[$.id]=new Si(1,1,{generateMipmaps:!0,type:W.has("EXT_color_buffer_half_float")||W.has("EXT_color_buffer_float")?zs:Nn,minFilter:vi,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ne.workingColorSpace}));const mt=p.state.transmissionRenderTarget[$.id],At=$.viewport||C;mt.setSize(At.z,At.w);const Ft=x.getRenderTarget();x.setRenderTarget(mt),x.getClearColor(G),J=x.getClearAlpha(),J<1&&x.setClearColor(16777215,.5),x.clear(),rt&&Ht.render(Y);const Ot=x.toneMapping;x.toneMapping=Qn;const Vt=$.viewport;if($.viewport!==void 0&&($.viewport=void 0),p.setupLightsView($),st===!0&&ft.setGlobalState(x.clippingPlanes,$),Ws(b,Y,$),T.updateMultisampleRenderTarget(mt),T.updateRenderTargetMipmap(mt),W.has("WEBGL_multisampled_render_to_texture")===!1){let qt=!1;for(let zt=0,ie=z.length;zt<ie;zt++){const fe=z[zt],me=fe.object,qe=fe.geometry,re=fe.material,Bt=fe.group;if(re.side===Te&&me.layers.test($.layers)){const bn=re.side;re.side=Fe,re.needsUpdate=!0,yc(me,Y,$,qe,re,Bt),re.side=bn,re.needsUpdate=!0,qt=!0}}qt===!0&&(T.updateMultisampleRenderTarget(mt),T.updateRenderTargetMipmap(mt))}x.setRenderTarget(Ft),x.setClearColor(G,J),Vt!==void 0&&($.viewport=Vt),x.toneMapping=Ot}function Ws(b,z,Y){const $=z.isScene===!0?z.overrideMaterial:null;for(let k=0,mt=b.length;k<mt;k++){const At=b[k],Ft=At.object,Ot=At.geometry,Vt=$===null?At.material:$,qt=At.group;Ft.layers.test(Y.layers)&&yc(Ft,z,Y,Ot,Vt,qt)}}function yc(b,z,Y,$,k,mt){b.onBeforeRender(x,z,Y,$,k,mt),b.modelViewMatrix.multiplyMatrices(Y.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),k.onBeforeRender(x,z,Y,$,b,mt),k.transparent===!0&&k.side===Te&&k.forceSinglePass===!1?(k.side=Fe,k.needsUpdate=!0,x.renderBufferDirect(Y,z,$,k,b,mt),k.side=ei,k.needsUpdate=!0,x.renderBufferDirect(Y,z,$,k,b,mt),k.side=Te):x.renderBufferDirect(Y,z,$,k,b,mt),b.onAfterRender(x,z,Y,$,k,mt)}function Xs(b,z,Y){z.isScene!==!0&&(z=Wt);const $=ct.get(b),k=p.state.lights,mt=p.state.shadowsArray,At=k.state.version,Ft=yt.getParameters(b,k.state,mt,z,Y),Ot=yt.getProgramCacheKey(Ft);let Vt=$.programs;$.environment=b.isMeshStandardMaterial?z.environment:null,$.fog=z.fog,$.envMap=(b.isMeshStandardMaterial?B:v).get(b.envMap||$.environment),$.envMapRotation=$.environment!==null&&b.envMap===null?z.environmentRotation:b.envMapRotation,Vt===void 0&&(b.addEventListener("dispose",Xt),Vt=new Map,$.programs=Vt);let qt=Vt.get(Ot);if(qt!==void 0){if($.currentProgram===qt&&$.lightsStateVersion===At)return Sc(b,Ft),qt}else Ft.uniforms=yt.getUniforms(b),b.onBeforeCompile(Ft,x),qt=yt.acquireProgram(Ft,Ot),Vt.set(Ot,qt),$.uniforms=Ft.uniforms;const zt=$.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(zt.clippingPlanes=ft.uniform),Sc(b,Ft),$.needsLights=gu(b),$.lightsStateVersion=At,$.needsLights&&(zt.ambientLightColor.value=k.state.ambient,zt.lightProbe.value=k.state.probe,zt.directionalLights.value=k.state.directional,zt.directionalLightShadows.value=k.state.directionalShadow,zt.spotLights.value=k.state.spot,zt.spotLightShadows.value=k.state.spotShadow,zt.rectAreaLights.value=k.state.rectArea,zt.ltc_1.value=k.state.rectAreaLTC1,zt.ltc_2.value=k.state.rectAreaLTC2,zt.pointLights.value=k.state.point,zt.pointLightShadows.value=k.state.pointShadow,zt.hemisphereLights.value=k.state.hemi,zt.directionalShadowMap.value=k.state.directionalShadowMap,zt.directionalShadowMatrix.value=k.state.directionalShadowMatrix,zt.spotShadowMap.value=k.state.spotShadowMap,zt.spotLightMatrix.value=k.state.spotLightMatrix,zt.spotLightMap.value=k.state.spotLightMap,zt.pointShadowMap.value=k.state.pointShadowMap,zt.pointShadowMatrix.value=k.state.pointShadowMatrix),$.currentProgram=qt,$.uniformsList=null,qt}function wc(b){if(b.uniformsList===null){const z=b.currentProgram.getUniforms();b.uniformsList=Rr.seqWithValue(z.seq,b.uniforms)}return b.uniformsList}function Sc(b,z){const Y=ct.get(b);Y.outputColorSpace=z.outputColorSpace,Y.batching=z.batching,Y.batchingColor=z.batchingColor,Y.instancing=z.instancing,Y.instancingColor=z.instancingColor,Y.instancingMorph=z.instancingMorph,Y.skinning=z.skinning,Y.morphTargets=z.morphTargets,Y.morphNormals=z.morphNormals,Y.morphColors=z.morphColors,Y.morphTargetsCount=z.morphTargetsCount,Y.numClippingPlanes=z.numClippingPlanes,Y.numIntersection=z.numClipIntersection,Y.vertexAlphas=z.vertexAlphas,Y.vertexTangents=z.vertexTangents,Y.toneMapping=z.toneMapping}function pu(b,z,Y,$,k){z.isScene!==!0&&(z=Wt),T.resetTextureUnits();const mt=z.fog,At=$.isMeshStandardMaterial?z.environment:null,Ft=I===null?x.outputColorSpace:I.isXRRenderTarget===!0?I.texture.colorSpace:os,Ot=($.isMeshStandardMaterial?B:v).get($.envMap||At),Vt=$.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,qt=!!Y.attributes.tangent&&(!!$.normalMap||$.anisotropy>0),zt=!!Y.morphAttributes.position,ie=!!Y.morphAttributes.normal,fe=!!Y.morphAttributes.color;let me=Qn;$.toneMapped&&(I===null||I.isXRRenderTarget===!0)&&(me=x.toneMapping);const qe=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,re=qe!==void 0?qe.length:0,Bt=ct.get($),bn=p.state.lights;if(st===!0&&(_t===!0||b!==M)){const nn=b===M&&$.id===y;ft.setState($,b,nn)}let oe=!1;$.version===Bt.__version?(Bt.needsLights&&Bt.lightsStateVersion!==bn.state.version||Bt.outputColorSpace!==Ft||k.isBatchedMesh&&Bt.batching===!1||!k.isBatchedMesh&&Bt.batching===!0||k.isBatchedMesh&&Bt.batchingColor===!0&&k.colorTexture===null||k.isBatchedMesh&&Bt.batchingColor===!1&&k.colorTexture!==null||k.isInstancedMesh&&Bt.instancing===!1||!k.isInstancedMesh&&Bt.instancing===!0||k.isSkinnedMesh&&Bt.skinning===!1||!k.isSkinnedMesh&&Bt.skinning===!0||k.isInstancedMesh&&Bt.instancingColor===!0&&k.instanceColor===null||k.isInstancedMesh&&Bt.instancingColor===!1&&k.instanceColor!==null||k.isInstancedMesh&&Bt.instancingMorph===!0&&k.morphTexture===null||k.isInstancedMesh&&Bt.instancingMorph===!1&&k.morphTexture!==null||Bt.envMap!==Ot||$.fog===!0&&Bt.fog!==mt||Bt.numClippingPlanes!==void 0&&(Bt.numClippingPlanes!==ft.numPlanes||Bt.numIntersection!==ft.numIntersection)||Bt.vertexAlphas!==Vt||Bt.vertexTangents!==qt||Bt.morphTargets!==zt||Bt.morphNormals!==ie||Bt.morphColors!==fe||Bt.toneMapping!==me||Bt.morphTargetsCount!==re)&&(oe=!0):(oe=!0,Bt.__version=$.version);let an=Bt.currentProgram;oe===!0&&(an=Xs($,z,k));let Ci=!1,Ze=!1,us=!1;const ge=an.getUniforms(),_n=Bt.uniforms;if(U.useProgram(an.program)&&(Ci=!0,Ze=!0,us=!0),$.id!==y&&(y=$.id,Ze=!0),Ci||M!==b){U.buffers.depth.getReversed()?(ht.copy(b.projectionMatrix),od(ht),ad(ht),ge.setValue(P,"projectionMatrix",ht)):ge.setValue(P,"projectionMatrix",b.projectionMatrix),ge.setValue(P,"viewMatrix",b.matrixWorldInverse);const zn=ge.map.cameraPosition;zn!==void 0&&zn.setValue(P,Lt.setFromMatrixPosition(b.matrixWorld)),N.logarithmicDepthBuffer&&ge.setValue(P,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),($.isMeshPhongMaterial||$.isMeshToonMaterial||$.isMeshLambertMaterial||$.isMeshBasicMaterial||$.isMeshStandardMaterial||$.isShaderMaterial)&&ge.setValue(P,"isOrthographic",b.isOrthographicCamera===!0),M!==b&&(M=b,Ze=!0,us=!0)}if(k.isSkinnedMesh){ge.setOptional(P,k,"bindMatrix"),ge.setOptional(P,k,"bindMatrixInverse");const nn=k.skeleton;nn&&(nn.boneTexture===null&&nn.computeBoneTexture(),ge.setValue(P,"boneTexture",nn.boneTexture,T))}k.isBatchedMesh&&(ge.setOptional(P,k,"batchingTexture"),ge.setValue(P,"batchingTexture",k._matricesTexture,T),ge.setOptional(P,k,"batchingIdTexture"),ge.setValue(P,"batchingIdTexture",k._indirectTexture,T),ge.setOptional(P,k,"batchingColorTexture"),k._colorsTexture!==null&&ge.setValue(P,"batchingColorTexture",k._colorsTexture,T));const ds=Y.morphAttributes;if((ds.position!==void 0||ds.normal!==void 0||ds.color!==void 0)&&Gt.update(k,Y,an),(Ze||Bt.receiveShadow!==k.receiveShadow)&&(Bt.receiveShadow=k.receiveShadow,ge.setValue(P,"receiveShadow",k.receiveShadow)),$.isMeshGouraudMaterial&&$.envMap!==null&&(_n.envMap.value=Ot,_n.flipEnvMap.value=Ot.isCubeTexture&&Ot.isRenderTargetTexture===!1?-1:1),$.isMeshStandardMaterial&&$.envMap===null&&z.environment!==null&&(_n.envMapIntensity.value=z.environmentIntensity),Ze&&(ge.setValue(P,"toneMappingExposure",x.toneMappingExposure),Bt.needsLights&&mu(_n,us),mt&&$.fog===!0&&vt.refreshFogUniforms(_n,mt),vt.refreshMaterialUniforms(_n,$,V,it,p.state.transmissionRenderTarget[b.id]),Rr.upload(P,wc(Bt),_n,T)),$.isShaderMaterial&&$.uniformsNeedUpdate===!0&&(Rr.upload(P,wc(Bt),_n,T),$.uniformsNeedUpdate=!1),$.isSpriteMaterial&&ge.setValue(P,"center",k.center),ge.setValue(P,"modelViewMatrix",k.modelViewMatrix),ge.setValue(P,"normalMatrix",k.normalMatrix),ge.setValue(P,"modelMatrix",k.matrixWorld),$.isShaderMaterial||$.isRawShaderMaterial){const nn=$.uniformsGroups;for(let zn=0,Bn=nn.length;zn<Bn;zn++){const Ec=nn[zn];F.update(Ec,an),F.bind(Ec,an)}}return an}function mu(b,z){b.ambientLightColor.needsUpdate=z,b.lightProbe.needsUpdate=z,b.directionalLights.needsUpdate=z,b.directionalLightShadows.needsUpdate=z,b.pointLights.needsUpdate=z,b.pointLightShadows.needsUpdate=z,b.spotLights.needsUpdate=z,b.spotLightShadows.needsUpdate=z,b.rectAreaLights.needsUpdate=z,b.hemisphereLights.needsUpdate=z}function gu(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return E},this.getActiveMipmapLevel=function(){return R},this.getRenderTarget=function(){return I},this.setRenderTargetTextures=function(b,z,Y){ct.get(b.texture).__webglTexture=z,ct.get(b.depthTexture).__webglTexture=Y;const $=ct.get(b);$.__hasExternalTextures=!0,$.__autoAllocateDepthBuffer=Y===void 0,$.__autoAllocateDepthBuffer||W.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),$.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(b,z){const Y=ct.get(b);Y.__webglFramebuffer=z,Y.__useDefaultFramebuffer=z===void 0},this.setRenderTarget=function(b,z=0,Y=0){I=b,E=z,R=Y;let $=!0,k=null,mt=!1,At=!1;if(b){const Ot=ct.get(b);if(Ot.__useDefaultFramebuffer!==void 0)U.bindFramebuffer(P.FRAMEBUFFER,null),$=!1;else if(Ot.__webglFramebuffer===void 0)T.setupRenderTarget(b);else if(Ot.__hasExternalTextures)T.rebindTextures(b,ct.get(b.texture).__webglTexture,ct.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){const zt=b.depthTexture;if(Ot.__boundDepthTexture!==zt){if(zt!==null&&ct.has(zt)&&(b.width!==zt.image.width||b.height!==zt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");T.setupDepthRenderbuffer(b)}}const Vt=b.texture;(Vt.isData3DTexture||Vt.isDataArrayTexture||Vt.isCompressedArrayTexture)&&(At=!0);const qt=ct.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(qt[z])?k=qt[z][Y]:k=qt[z],mt=!0):b.samples>0&&T.useMultisampledRTT(b)===!1?k=ct.get(b).__webglMultisampledFramebuffer:Array.isArray(qt)?k=qt[Y]:k=qt,C.copy(b.viewport),O.copy(b.scissor),H=b.scissorTest}else C.copy(lt).multiplyScalar(V).floor(),O.copy(xt).multiplyScalar(V).floor(),H=Pt;if(U.bindFramebuffer(P.FRAMEBUFFER,k)&&$&&U.drawBuffers(b,k),U.viewport(C),U.scissor(O),U.setScissorTest(H),mt){const Ot=ct.get(b.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_CUBE_MAP_POSITIVE_X+z,Ot.__webglTexture,Y)}else if(At){const Ot=ct.get(b.texture),Vt=z||0;P.framebufferTextureLayer(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,Ot.__webglTexture,Y||0,Vt)}y=-1},this.readRenderTargetPixels=function(b,z,Y,$,k,mt,At){if(!(b&&b.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ft=ct.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&At!==void 0&&(Ft=Ft[At]),Ft){U.bindFramebuffer(P.FRAMEBUFFER,Ft);try{const Ot=b.texture,Vt=Ot.format,qt=Ot.type;if(!N.textureFormatReadable(Vt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!N.textureTypeReadable(qt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}z>=0&&z<=b.width-$&&Y>=0&&Y<=b.height-k&&P.readPixels(z,Y,$,k,$t.convert(Vt),$t.convert(qt),mt)}finally{const Ot=I!==null?ct.get(I).__webglFramebuffer:null;U.bindFramebuffer(P.FRAMEBUFFER,Ot)}}},this.readRenderTargetPixelsAsync=async function(b,z,Y,$,k,mt,At){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ft=ct.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&At!==void 0&&(Ft=Ft[At]),Ft){const Ot=b.texture,Vt=Ot.format,qt=Ot.type;if(!N.textureFormatReadable(Vt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!N.textureTypeReadable(qt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(z>=0&&z<=b.width-$&&Y>=0&&Y<=b.height-k){U.bindFramebuffer(P.FRAMEBUFFER,Ft);const zt=P.createBuffer();P.bindBuffer(P.PIXEL_PACK_BUFFER,zt),P.bufferData(P.PIXEL_PACK_BUFFER,mt.byteLength,P.STREAM_READ),P.readPixels(z,Y,$,k,$t.convert(Vt),$t.convert(qt),0);const ie=I!==null?ct.get(I).__webglFramebuffer:null;U.bindFramebuffer(P.FRAMEBUFFER,ie);const fe=P.fenceSync(P.SYNC_GPU_COMMANDS_COMPLETE,0);return P.flush(),await rd(P,fe,4),P.bindBuffer(P.PIXEL_PACK_BUFFER,zt),P.getBufferSubData(P.PIXEL_PACK_BUFFER,0,mt),P.deleteBuffer(zt),P.deleteSync(fe),mt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(b,z=null,Y=0){b.isTexture!==!0&&(Ts("WebGLRenderer: copyFramebufferToTexture function signature has changed."),z=arguments[0]||null,b=arguments[1]);const $=Math.pow(2,-Y),k=Math.floor(b.image.width*$),mt=Math.floor(b.image.height*$),At=z!==null?z.x:0,Ft=z!==null?z.y:0;T.setTexture2D(b,0),P.copyTexSubImage2D(P.TEXTURE_2D,Y,0,0,At,Ft,k,mt),U.unbindTexture()},this.copyTextureToTexture=function(b,z,Y=null,$=null,k=0){b.isTexture!==!0&&(Ts("WebGLRenderer: copyTextureToTexture function signature has changed."),$=arguments[0]||null,b=arguments[1],z=arguments[2],k=arguments[3]||0,Y=null);let mt,At,Ft,Ot,Vt,qt,zt,ie,fe;const me=b.isCompressedTexture?b.mipmaps[k]:b.image;Y!==null?(mt=Y.max.x-Y.min.x,At=Y.max.y-Y.min.y,Ft=Y.isBox3?Y.max.z-Y.min.z:1,Ot=Y.min.x,Vt=Y.min.y,qt=Y.isBox3?Y.min.z:0):(mt=me.width,At=me.height,Ft=me.depth||1,Ot=0,Vt=0,qt=0),$!==null?(zt=$.x,ie=$.y,fe=$.z):(zt=0,ie=0,fe=0);const qe=$t.convert(z.format),re=$t.convert(z.type);let Bt;z.isData3DTexture?(T.setTexture3D(z,0),Bt=P.TEXTURE_3D):z.isDataArrayTexture||z.isCompressedArrayTexture?(T.setTexture2DArray(z,0),Bt=P.TEXTURE_2D_ARRAY):(T.setTexture2D(z,0),Bt=P.TEXTURE_2D),P.pixelStorei(P.UNPACK_FLIP_Y_WEBGL,z.flipY),P.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL,z.premultiplyAlpha),P.pixelStorei(P.UNPACK_ALIGNMENT,z.unpackAlignment);const bn=P.getParameter(P.UNPACK_ROW_LENGTH),oe=P.getParameter(P.UNPACK_IMAGE_HEIGHT),an=P.getParameter(P.UNPACK_SKIP_PIXELS),Ci=P.getParameter(P.UNPACK_SKIP_ROWS),Ze=P.getParameter(P.UNPACK_SKIP_IMAGES);P.pixelStorei(P.UNPACK_ROW_LENGTH,me.width),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,me.height),P.pixelStorei(P.UNPACK_SKIP_PIXELS,Ot),P.pixelStorei(P.UNPACK_SKIP_ROWS,Vt),P.pixelStorei(P.UNPACK_SKIP_IMAGES,qt);const us=b.isDataArrayTexture||b.isData3DTexture,ge=z.isDataArrayTexture||z.isData3DTexture;if(b.isRenderTargetTexture||b.isDepthTexture){const _n=ct.get(b),ds=ct.get(z),nn=ct.get(_n.__renderTarget),zn=ct.get(ds.__renderTarget);U.bindFramebuffer(P.READ_FRAMEBUFFER,nn.__webglFramebuffer),U.bindFramebuffer(P.DRAW_FRAMEBUFFER,zn.__webglFramebuffer);for(let Bn=0;Bn<Ft;Bn++)us&&P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,ct.get(b).__webglTexture,k,qt+Bn),b.isDepthTexture?(ge&&P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,ct.get(z).__webglTexture,k,fe+Bn),P.blitFramebuffer(Ot,Vt,mt,At,zt,ie,mt,At,P.DEPTH_BUFFER_BIT,P.NEAREST)):ge?P.copyTexSubImage3D(Bt,k,zt,ie,fe+Bn,Ot,Vt,mt,At):P.copyTexSubImage2D(Bt,k,zt,ie,fe+Bn,Ot,Vt,mt,At);U.bindFramebuffer(P.READ_FRAMEBUFFER,null),U.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else ge?b.isDataTexture||b.isData3DTexture?P.texSubImage3D(Bt,k,zt,ie,fe,mt,At,Ft,qe,re,me.data):z.isCompressedArrayTexture?P.compressedTexSubImage3D(Bt,k,zt,ie,fe,mt,At,Ft,qe,me.data):P.texSubImage3D(Bt,k,zt,ie,fe,mt,At,Ft,qe,re,me):b.isDataTexture?P.texSubImage2D(P.TEXTURE_2D,k,zt,ie,mt,At,qe,re,me.data):b.isCompressedTexture?P.compressedTexSubImage2D(P.TEXTURE_2D,k,zt,ie,me.width,me.height,qe,me.data):P.texSubImage2D(P.TEXTURE_2D,k,zt,ie,mt,At,qe,re,me);P.pixelStorei(P.UNPACK_ROW_LENGTH,bn),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,oe),P.pixelStorei(P.UNPACK_SKIP_PIXELS,an),P.pixelStorei(P.UNPACK_SKIP_ROWS,Ci),P.pixelStorei(P.UNPACK_SKIP_IMAGES,Ze),k===0&&z.generateMipmaps&&P.generateMipmap(Bt),U.unbindTexture()},this.copyTextureToTexture3D=function(b,z,Y=null,$=null,k=0){return b.isTexture!==!0&&(Ts("WebGLRenderer: copyTextureToTexture3D function signature has changed."),Y=arguments[0]||null,$=arguments[1]||null,b=arguments[2],z=arguments[3],k=arguments[4]||0),Ts('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(b,z,Y,$,k)},this.initRenderTarget=function(b){ct.get(b).__webglFramebuffer===void 0&&T.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?T.setTextureCube(b,0):b.isData3DTexture?T.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?T.setTexture2DArray(b,0):T.setTexture2D(b,0),U.unbindTexture()},this.resetState=function(){E=0,R=0,I=null,U.reset(),de.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Dn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorspace=ne._getDrawingBufferColorSpace(t),e.unpackColorSpace=ne._getUnpackColorSpace()}}class sc{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new Et(t),this.density=e}clone(){return new sc(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class rc{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new Et(t),this.near=e,this.far=n}clone(){return new rc(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class Ds extends Ae{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new mn,this.environmentIntensity=1,this.environmentRotation=new mn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class _g extends Ge{constructor(t=null,e=1,n=1,s,r,o,a,c,l=Qe,h=Qe,u,d){super(null,o,a,c,l,h,s,r,u,d),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class As extends tn{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const Wi=new le,wl=new le,fr=[],Sl=new On,vg=new le,vs=new A,xs=new ls;class Co extends A{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new As(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,vg)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new On),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Wi),Sl.copy(t.boundingBox).applyMatrix4(Wi),this.boundingBox.union(Sl)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new ls),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Wi),xs.copy(t.boundingSphere).applyMatrix4(Wi),this.boundingSphere.union(xs)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,o=t*r+1;for(let a=0;a<n.length;a++)n[a]=s[o+a]}raycast(t,e){const n=this.matrixWorld,s=this.count;if(vs.geometry=this.geometry,vs.material=this.material,vs.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),xs.copy(this.boundingSphere),xs.applyMatrix4(n),t.ray.intersectsSphere(xs)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Wi),wl.multiplyMatrices(n,Wi),vs.matrixWorld=wl,vs.raycast(t,fr);for(let o=0,a=fr.length;o<a;o++){const c=fr[o];c.instanceId=r,c.object=this,e.push(c)}fr.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new As(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){const n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new _g(new Float32Array(s*this.count),s,this.count,$a,wn));const r=this.morphTexture.source.data.data;let o=0;for(let l=0;l<n.length;l++)o+=n[l];const a=this.geometry.morphTargetsRelative?1:1-o,c=s*t;r[c]=a,r.set(n,c+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class Uh extends Ai{static get type(){return"LineBasicMaterial"}constructor(t){super(),this.isLineBasicMaterial=!0,this.color=new Et(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const Ir=new L,Dr=new L,El=new le,Ms=new Qa,pr=new ls,Po=new L,Tl=new L;class xg extends Ae{constructor(t=new Pe,e=new Uh){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let s=1,r=e.count;s<r;s++)Ir.fromBufferAttribute(e,s-1),Dr.fromBufferAttribute(e,s),n[s]=n[s-1],n[s]+=Ir.distanceTo(Dr);t.setAttribute("lineDistance",new te(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const n=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),pr.copy(n.boundingSphere),pr.applyMatrix4(s),pr.radius+=r,t.ray.intersectsSphere(pr)===!1)return;El.copy(s).invert(),Ms.copy(t.ray).applyMatrix4(El);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=this.isLineSegments?2:1,h=n.index,d=n.attributes.position;if(h!==null){const f=Math.max(0,o.start),m=Math.min(h.count,o.start+o.count);for(let _=f,g=m-1;_<g;_+=l){const p=h.getX(_),w=h.getX(_+1),S=mr(this,t,Ms,c,p,w);S&&e.push(S)}if(this.isLineLoop){const _=h.getX(m-1),g=h.getX(f),p=mr(this,t,Ms,c,_,g);p&&e.push(p)}}else{const f=Math.max(0,o.start),m=Math.min(d.count,o.start+o.count);for(let _=f,g=m-1;_<g;_+=l){const p=mr(this,t,Ms,c,_,_+1);p&&e.push(p)}if(this.isLineLoop){const _=mr(this,t,Ms,c,m-1,f);_&&e.push(_)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function mr(i,t,e,n,s,r){const o=i.geometry.attributes.position;if(Ir.fromBufferAttribute(o,s),Dr.fromBufferAttribute(o,r),e.distanceSqToSegment(Ir,Dr,Po,Tl)>n)return;Po.applyMatrix4(i.matrixWorld);const c=t.ray.origin.distanceTo(Po);if(!(c<t.near||c>t.far))return{distance:c,point:Tl.clone().applyMatrix4(i.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:i}}const bl=new L,Al=new L;class Mg extends xg{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[];for(let s=0,r=e.count;s<r;s+=2)bl.fromBufferAttribute(e,s),Al.fromBufferAttribute(e,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+bl.distanceTo(Al);t.setAttribute("lineDistance",new te(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class oc extends Ge{constructor(t,e,n,s,r,o,a,c,l){super(t,e,n,s,r,o,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class En{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,s=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){const n=this.getLengths();let s=0;const r=n.length;let o;e?o=e:o=t*n[r-1];let a=0,c=r-1,l;for(;a<=c;)if(s=Math.floor(a+(c-a)/2),l=n[s]-o,l<0)a=s+1;else if(l>0)c=s-1;else{c=s;break}if(s=c,n[s]===o)return s/(r-1);const h=n[s],d=n[s+1]-h,f=(o-h)/d;return(s+f)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);const o=this.getPoint(s),a=this.getPoint(r),c=e||(o.isVector2?new pt:new L);return c.copy(a).sub(o).normalize(),c}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){const n=new L,s=[],r=[],o=[],a=new L,c=new le;for(let f=0;f<=t;f++){const m=f/t;s[f]=this.getTangentAt(m,new L)}r[0]=new L,o[0]=new L;let l=Number.MAX_VALUE;const h=Math.abs(s[0].x),u=Math.abs(s[0].y),d=Math.abs(s[0].z);h<=l&&(l=h,n.set(1,0,0)),u<=l&&(l=u,n.set(0,1,0)),d<=l&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let f=1;f<=t;f++){if(r[f]=r[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(s[f-1],s[f]),a.length()>Number.EPSILON){a.normalize();const m=Math.acos(be(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(c.makeRotationAxis(a,m))}o[f].crossVectors(s[f],r[f])}if(e===!0){let f=Math.acos(be(r[0].dot(r[t]),-1,1));f/=t,s[0].dot(a.crossVectors(r[0],r[t]))>0&&(f=-f);for(let m=1;m<=t;m++)r[m].applyMatrix4(c.makeRotationAxis(s[m],f*m)),o[m].crossVectors(s[m],r[m])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class ac extends En{constructor(t=0,e=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=c}getPoint(t,e=new pt){const n=e,s=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);const a=this.aStartAngle+t*r;let c=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=c-this.aX,f=l-this.aY;c=d*h-f*u+this.aX,l=d*u+f*h+this.aY}return n.set(c,l)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class yg extends ac{constructor(t,e,n,s,r,o){super(t,e,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}}function cc(){let i=0,t=0,e=0,n=0;function s(r,o,a,c){i=r,t=a,e=-3*r+3*o-2*a-c,n=2*r-2*o+a+c}return{initCatmullRom:function(r,o,a,c,l){s(o,a,l*(a-r),l*(c-o))},initNonuniformCatmullRom:function(r,o,a,c,l,h,u){let d=(o-r)/l-(a-r)/(l+h)+(a-o)/h,f=(a-o)/h-(c-o)/(h+u)+(c-a)/u;d*=h,f*=h,s(o,a,d,f)},calc:function(r){const o=r*r,a=o*r;return i+t*r+e*o+n*a}}}const gr=new L,Lo=new cc,Io=new cc,Do=new cc;class wg extends En{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new L){const n=e,s=this.points,r=s.length,o=(r-(this.closed?0:1))*t;let a=Math.floor(o),c=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:c===0&&a===r-1&&(a=r-2,c=1);let l,h;this.closed||a>0?l=s[(a-1)%r]:(gr.subVectors(s[0],s[1]).add(s[0]),l=gr);const u=s[a%r],d=s[(a+1)%r];if(this.closed||a+2<r?h=s[(a+2)%r]:(gr.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=gr),this.curveType==="centripetal"||this.curveType==="chordal"){const f=this.curveType==="chordal"?.5:.25;let m=Math.pow(l.distanceToSquared(u),f),_=Math.pow(u.distanceToSquared(d),f),g=Math.pow(d.distanceToSquared(h),f);_<1e-4&&(_=1),m<1e-4&&(m=_),g<1e-4&&(g=_),Lo.initNonuniformCatmullRom(l.x,u.x,d.x,h.x,m,_,g),Io.initNonuniformCatmullRom(l.y,u.y,d.y,h.y,m,_,g),Do.initNonuniformCatmullRom(l.z,u.z,d.z,h.z,m,_,g)}else this.curveType==="catmullrom"&&(Lo.initCatmullRom(l.x,u.x,d.x,h.x,this.tension),Io.initCatmullRom(l.y,u.y,d.y,h.y,this.tension),Do.initCatmullRom(l.z,u.z,d.z,h.z,this.tension));return n.set(Lo.calc(c),Io.calc(c),Do.calc(c)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new L().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function Rl(i,t,e,n,s){const r=(n-t)*.5,o=(s-e)*.5,a=i*i,c=i*a;return(2*e-2*n+r+o)*c+(-3*e+3*n-2*r-o)*a+r*i+e}function Sg(i,t){const e=1-i;return e*e*t}function Eg(i,t){return 2*(1-i)*i*t}function Tg(i,t){return i*i*t}function Rs(i,t,e,n){return Sg(i,t)+Eg(i,e)+Tg(i,n)}function bg(i,t){const e=1-i;return e*e*e*t}function Ag(i,t){const e=1-i;return 3*e*e*i*t}function Rg(i,t){return 3*(1-i)*i*i*t}function Cg(i,t){return i*i*i*t}function Cs(i,t,e,n,s){return bg(i,t)+Ag(i,e)+Rg(i,n)+Cg(i,s)}class Nh extends En{constructor(t=new pt,e=new pt,n=new pt,s=new pt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new pt){const n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Cs(t,s.x,r.x,o.x,a.x),Cs(t,s.y,r.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Pg extends En{constructor(t=new L,e=new L,n=new L,s=new L){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new L){const n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Cs(t,s.x,r.x,o.x,a.x),Cs(t,s.y,r.y,o.y,a.y),Cs(t,s.z,r.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Fh extends En{constructor(t=new pt,e=new pt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new pt){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new pt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Lg extends En{constructor(t=new L,e=new L){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new L){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new L){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Oh extends En{constructor(t=new pt,e=new pt,n=new pt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new pt){const n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(Rs(t,s.x,r.x,o.x),Rs(t,s.y,r.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Ig extends En{constructor(t=new L,e=new L,n=new L){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new L){const n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(Rs(t,s.x,r.x,o.x),Rs(t,s.y,r.y,o.y),Rs(t,s.z,r.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class zh extends En{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new pt){const n=e,s=this.points,r=(s.length-1)*t,o=Math.floor(r),a=r-o,c=s[o===0?o:o-1],l=s[o],h=s[o>s.length-2?s.length-1:o+1],u=s[o>s.length-3?s.length-1:o+2];return n.set(Rl(a,c.x,l.x,h.x,u.x),Rl(a,c.y,l.y,h.y,u.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new pt().fromArray(s))}return this}}var Ia=Object.freeze({__proto__:null,ArcCurve:yg,CatmullRomCurve3:wg,CubicBezierCurve:Nh,CubicBezierCurve3:Pg,EllipseCurve:ac,LineCurve:Fh,LineCurve3:Lg,QuadraticBezierCurve:Oh,QuadraticBezierCurve3:Ig,SplineCurve:zh});class Dg extends En{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Ia[n](e,t))}return this}getPoint(t,e){const n=t*this.getLength(),s=this.getCurveLengths();let r=0;for(;r<s.length;){if(s[r]>=n){const o=s[r]-n,a=this.curves[r],c=a.getLength(),l=c===0?0:1-o/c;return a.getPointAt(l,e)}r++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let n;for(let s=0,r=this.curves;s<r.length;s++){const o=r[s],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,c=o.getPoints(a);for(let l=0;l<c.length;l++){const h=c[l];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){const s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const s=t.curves[e];this.curves.push(new Ia[s.type]().fromJSON(s))}return this}}class Da extends Dg{constructor(t){super(),this.type="Path",this.currentPoint=new pt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const n=new Fh(this.currentPoint.clone(),new pt(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){const r=new Oh(this.currentPoint.clone(),new pt(t,e),new pt(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,r,o){const a=new Nh(this.currentPoint.clone(),new pt(t,e),new pt(n,s),new pt(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),n=new zh(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,r,o){const a=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(t+a,e+c,n,s,r,o),this}absarc(t,e,n,s,r,o){return this.absellipse(t,e,n,n,s,r,o),this}ellipse(t,e,n,s,r,o,a,c){const l=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+l,e+h,n,s,r,o,a,c),this}absellipse(t,e,n,s,r,o,a,c){const l=new ac(t,e,n,s,r,o,a,c);if(this.curves.length>0){const u=l.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(l);const h=l.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class Yr extends Pe{constructor(t=[new pt(0,-.5),new pt(.5,0),new pt(0,.5)],e=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:s},e=Math.floor(e),s=be(s,0,Math.PI*2);const r=[],o=[],a=[],c=[],l=[],h=1/e,u=new L,d=new pt,f=new L,m=new L,_=new L;let g=0,p=0;for(let w=0;w<=t.length-1;w++)switch(w){case 0:g=t[w+1].x-t[w].x,p=t[w+1].y-t[w].y,f.x=p*1,f.y=-g,f.z=p*0,_.copy(f),f.normalize(),c.push(f.x,f.y,f.z);break;case t.length-1:c.push(_.x,_.y,_.z);break;default:g=t[w+1].x-t[w].x,p=t[w+1].y-t[w].y,f.x=p*1,f.y=-g,f.z=p*0,m.copy(f),f.x+=_.x,f.y+=_.y,f.z+=_.z,f.normalize(),c.push(f.x,f.y,f.z),_.copy(m)}for(let w=0;w<=e;w++){const S=n+w*h*s,x=Math.sin(S),D=Math.cos(S);for(let E=0;E<=t.length-1;E++){u.x=t[E].x*x,u.y=t[E].y,u.z=t[E].x*D,o.push(u.x,u.y,u.z),d.x=w/e,d.y=E/(t.length-1),a.push(d.x,d.y);const R=c[3*E+0]*x,I=c[3*E+1],y=c[3*E+0]*D;l.push(R,I,y)}}for(let w=0;w<e;w++)for(let S=0;S<t.length-1;S++){const x=S+w*t.length,D=x,E=x+t.length,R=x+t.length+1,I=x+1;r.push(D,E,I),r.push(R,I,E)}this.setIndex(r),this.setAttribute("position",new te(o,3)),this.setAttribute("uv",new te(a,2)),this.setAttribute("normal",new te(l,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Yr(t.points,t.segments,t.phiStart,t.phiLength)}}class ee extends Yr{constructor(t=1,e=1,n=4,s=8){const r=new Da;r.absarc(0,-e/2,t,Math.PI*1.5,0),r.absarc(0,e/2,t,0,Math.PI*.5),super(r.getPoints(n),s),this.type="CapsuleGeometry",this.parameters={radius:t,length:e,capSegments:n,radialSegments:s}}static fromJSON(t){return new ee(t.radius,t.length,t.capSegments,t.radialSegments)}}class gn extends Pe{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);const r=[],o=[],a=[],c=[],l=new L,h=new pt;o.push(0,0,0),a.push(0,0,1),c.push(.5,.5);for(let u=0,d=3;u<=e;u++,d+=3){const f=n+u/e*s;l.x=t*Math.cos(f),l.y=t*Math.sin(f),o.push(l.x,l.y,l.z),a.push(0,0,1),h.x=(o[d]/t+1)/2,h.y=(o[d+1]/t+1)/2,c.push(h.x,h.y)}for(let u=1;u<=e;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new te(o,3)),this.setAttribute("normal",new te(a,3)),this.setAttribute("uv",new te(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new gn(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class Qt extends Pe{constructor(t=1,e=1,n=1,s=32,r=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:c};const l=this;s=Math.floor(s),r=Math.floor(r);const h=[],u=[],d=[],f=[];let m=0;const _=[],g=n/2;let p=0;w(),o===!1&&(t>0&&S(!0),e>0&&S(!1)),this.setIndex(h),this.setAttribute("position",new te(u,3)),this.setAttribute("normal",new te(d,3)),this.setAttribute("uv",new te(f,2));function w(){const x=new L,D=new L;let E=0;const R=(e-t)/n;for(let I=0;I<=r;I++){const y=[],M=I/r,C=M*(e-t)+t;for(let O=0;O<=s;O++){const H=O/s,G=H*c+a,J=Math.sin(G),X=Math.cos(G);D.x=C*J,D.y=-M*n+g,D.z=C*X,u.push(D.x,D.y,D.z),x.set(J,R,X).normalize(),d.push(x.x,x.y,x.z),f.push(H,1-M),y.push(m++)}_.push(y)}for(let I=0;I<s;I++)for(let y=0;y<r;y++){const M=_[y][I],C=_[y+1][I],O=_[y+1][I+1],H=_[y][I+1];(t>0||y!==0)&&(h.push(M,C,H),E+=3),(e>0||y!==r-1)&&(h.push(C,O,H),E+=3)}l.addGroup(p,E,0),p+=E}function S(x){const D=m,E=new pt,R=new L;let I=0;const y=x===!0?t:e,M=x===!0?1:-1;for(let O=1;O<=s;O++)u.push(0,g*M,0),d.push(0,M,0),f.push(.5,.5),m++;const C=m;for(let O=0;O<=s;O++){const G=O/s*c+a,J=Math.cos(G),X=Math.sin(G);R.x=y*X,R.y=g*M,R.z=y*J,u.push(R.x,R.y,R.z),d.push(0,M,0),E.x=J*.5+.5,E.y=X*.5*M+.5,f.push(E.x,E.y),m++}for(let O=0;O<s;O++){const H=D+O,G=C+O;x===!0?h.push(G,G+1,H):h.push(G+1,G,H),I+=3}l.addGroup(p,I,x===!0?1:2),p+=I}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Qt(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Ne extends Qt{constructor(t=1,e=1,n=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,t,e,n,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(t){return new Ne(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class ks extends Pe{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};const r=[],o=[];a(s),l(n),h(),this.setAttribute("position",new te(r,3)),this.setAttribute("normal",new te(r.slice(),3)),this.setAttribute("uv",new te(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(w){const S=new L,x=new L,D=new L;for(let E=0;E<e.length;E+=3)f(e[E+0],S),f(e[E+1],x),f(e[E+2],D),c(S,x,D,w)}function c(w,S,x,D){const E=D+1,R=[];for(let I=0;I<=E;I++){R[I]=[];const y=w.clone().lerp(x,I/E),M=S.clone().lerp(x,I/E),C=E-I;for(let O=0;O<=C;O++)O===0&&I===E?R[I][O]=y:R[I][O]=y.clone().lerp(M,O/C)}for(let I=0;I<E;I++)for(let y=0;y<2*(E-I)-1;y++){const M=Math.floor(y/2);y%2===0?(d(R[I][M+1]),d(R[I+1][M]),d(R[I][M])):(d(R[I][M+1]),d(R[I+1][M+1]),d(R[I+1][M]))}}function l(w){const S=new L;for(let x=0;x<r.length;x+=3)S.x=r[x+0],S.y=r[x+1],S.z=r[x+2],S.normalize().multiplyScalar(w),r[x+0]=S.x,r[x+1]=S.y,r[x+2]=S.z}function h(){const w=new L;for(let S=0;S<r.length;S+=3){w.x=r[S+0],w.y=r[S+1],w.z=r[S+2];const x=g(w)/2/Math.PI+.5,D=p(w)/Math.PI+.5;o.push(x,1-D)}m(),u()}function u(){for(let w=0;w<o.length;w+=6){const S=o[w+0],x=o[w+2],D=o[w+4],E=Math.max(S,x,D),R=Math.min(S,x,D);E>.9&&R<.1&&(S<.2&&(o[w+0]+=1),x<.2&&(o[w+2]+=1),D<.2&&(o[w+4]+=1))}}function d(w){r.push(w.x,w.y,w.z)}function f(w,S){const x=w*3;S.x=t[x+0],S.y=t[x+1],S.z=t[x+2]}function m(){const w=new L,S=new L,x=new L,D=new L,E=new pt,R=new pt,I=new pt;for(let y=0,M=0;y<r.length;y+=9,M+=6){w.set(r[y+0],r[y+1],r[y+2]),S.set(r[y+3],r[y+4],r[y+5]),x.set(r[y+6],r[y+7],r[y+8]),E.set(o[M+0],o[M+1]),R.set(o[M+2],o[M+3]),I.set(o[M+4],o[M+5]),D.copy(w).add(S).add(x).divideScalar(3);const C=g(D);_(E,M+0,w,C),_(R,M+2,S,C),_(I,M+4,x,C)}}function _(w,S,x,D){D<0&&w.x===1&&(o[S]=w.x-1),x.x===0&&x.z===0&&(o[S]=D/2/Math.PI+.5)}function g(w){return Math.atan2(w.z,-w.x)}function p(w){return Math.atan2(-w.y,Math.sqrt(w.x*w.x+w.z*w.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ks(t.vertices,t.indices,t.radius,t.details)}}class ii extends ks{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,s=1/n,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-s,-n,0,-s,n,0,s,-n,0,s,n,-s,-n,0,-s,n,0,s,-n,0,s,n,0,-n,0,-s,n,0,-s,-n,0,s,n,0,s],o=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,o,t,e),this.type="DodecahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new ii(t.radius,t.detail)}}class rs extends Da{constructor(t){super(t),this.uuid=cs(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let n=0,s=this.holes.length;n<s;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){const s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const s=t.holes[e];this.holes.push(new Da().fromJSON(s))}return this}}const Ug={triangulate:function(i,t,e=2){const n=t&&t.length,s=n?t[0]*e:i.length;let r=Bh(i,0,s,e,!0);const o=[];if(!r||r.next===r.prev)return o;let a,c,l,h,u,d,f;if(n&&(r=Bg(i,t,r,e)),i.length>80*e){a=l=i[0],c=h=i[1];for(let m=e;m<s;m+=e)u=i[m],d=i[m+1],u<a&&(a=u),d<c&&(c=d),u>l&&(l=u),d>h&&(h=d);f=Math.max(l-a,h-c),f=f!==0?32767/f:0}return Us(r,o,e,a,c,f,0),o}};function Bh(i,t,e,n,s){let r,o;if(s===Kg(i,t,e,n)>0)for(r=t;r<e;r+=n)o=Cl(r,i[r],i[r+1],o);else for(r=e-n;r>=t;r-=n)o=Cl(r,i[r],i[r+1],o);return o&&$r(o,o.next)&&(Fs(o),o=o.next),o}function Ei(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&($r(e,e.next)||ve(e.prev,e,e.next)===0)){if(Fs(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function Us(i,t,e,n,s,r,o){if(!i)return;!o&&r&&Wg(i,n,s,r);let a=i,c,l;for(;i.prev!==i.next;){if(c=i.prev,l=i.next,r?Fg(i,n,s,r):Ng(i)){t.push(c.i/e|0),t.push(i.i/e|0),t.push(l.i/e|0),Fs(i),i=l.next,a=l.next;continue}if(i=l,i===a){o?o===1?(i=Og(Ei(i),t,e),Us(i,t,e,n,s,r,2)):o===2&&zg(i,t,e,n,s,r):Us(Ei(i),t,e,n,s,r,1);break}}}function Ng(i){const t=i.prev,e=i,n=i.next;if(ve(t,e,n)>=0)return!1;const s=t.x,r=e.x,o=n.x,a=t.y,c=e.y,l=n.y,h=s<r?s<o?s:o:r<o?r:o,u=a<c?a<l?a:l:c<l?c:l,d=s>r?s>o?s:o:r>o?r:o,f=a>c?a>l?a:l:c>l?c:l;let m=n.next;for(;m!==t;){if(m.x>=h&&m.x<=d&&m.y>=u&&m.y<=f&&Yi(s,a,r,c,o,l,m.x,m.y)&&ve(m.prev,m,m.next)>=0)return!1;m=m.next}return!0}function Fg(i,t,e,n){const s=i.prev,r=i,o=i.next;if(ve(s,r,o)>=0)return!1;const a=s.x,c=r.x,l=o.x,h=s.y,u=r.y,d=o.y,f=a<c?a<l?a:l:c<l?c:l,m=h<u?h<d?h:d:u<d?u:d,_=a>c?a>l?a:l:c>l?c:l,g=h>u?h>d?h:d:u>d?u:d,p=Ua(f,m,t,e,n),w=Ua(_,g,t,e,n);let S=i.prevZ,x=i.nextZ;for(;S&&S.z>=p&&x&&x.z<=w;){if(S.x>=f&&S.x<=_&&S.y>=m&&S.y<=g&&S!==s&&S!==o&&Yi(a,h,c,u,l,d,S.x,S.y)&&ve(S.prev,S,S.next)>=0||(S=S.prevZ,x.x>=f&&x.x<=_&&x.y>=m&&x.y<=g&&x!==s&&x!==o&&Yi(a,h,c,u,l,d,x.x,x.y)&&ve(x.prev,x,x.next)>=0))return!1;x=x.nextZ}for(;S&&S.z>=p;){if(S.x>=f&&S.x<=_&&S.y>=m&&S.y<=g&&S!==s&&S!==o&&Yi(a,h,c,u,l,d,S.x,S.y)&&ve(S.prev,S,S.next)>=0)return!1;S=S.prevZ}for(;x&&x.z<=w;){if(x.x>=f&&x.x<=_&&x.y>=m&&x.y<=g&&x!==s&&x!==o&&Yi(a,h,c,u,l,d,x.x,x.y)&&ve(x.prev,x,x.next)>=0)return!1;x=x.nextZ}return!0}function Og(i,t,e){let n=i;do{const s=n.prev,r=n.next.next;!$r(s,r)&&kh(s,n,n.next,r)&&Ns(s,r)&&Ns(r,s)&&(t.push(s.i/e|0),t.push(n.i/e|0),t.push(r.i/e|0),Fs(n),Fs(n.next),n=i=r),n=n.next}while(n!==i);return Ei(n)}function zg(i,t,e,n,s,r){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&Yg(o,a)){let c=Hh(o,a);o=Ei(o,o.next),c=Ei(c,c.next),Us(o,t,e,n,s,r,0),Us(c,t,e,n,s,r,0);return}a=a.next}o=o.next}while(o!==i)}function Bg(i,t,e,n){const s=[];let r,o,a,c,l;for(r=0,o=t.length;r<o;r++)a=t[r]*n,c=r<o-1?t[r+1]*n:i.length,l=Bh(i,a,c,n,!1),l===l.next&&(l.steiner=!0),s.push(qg(l));for(s.sort(kg),r=0;r<s.length;r++)e=Hg(s[r],e);return e}function kg(i,t){return i.x-t.x}function Hg(i,t){const e=Gg(i,t);if(!e)return t;const n=Hh(e,i);return Ei(n,n.next),Ei(e,e.next)}function Gg(i,t){let e=t,n=-1/0,s;const r=i.x,o=i.y;do{if(o<=e.y&&o>=e.next.y&&e.next.y!==e.y){const d=e.x+(o-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(d<=r&&d>n&&(n=d,s=e.x<e.next.x?e:e.next,d===r))return s}e=e.next}while(e!==t);if(!s)return null;const a=s,c=s.x,l=s.y;let h=1/0,u;e=s;do r>=e.x&&e.x>=c&&r!==e.x&&Yi(o<l?r:n,o,c,l,o<l?n:r,o,e.x,e.y)&&(u=Math.abs(o-e.y)/(r-e.x),Ns(e,i)&&(u<h||u===h&&(e.x>s.x||e.x===s.x&&Vg(s,e)))&&(s=e,h=u)),e=e.next;while(e!==a);return s}function Vg(i,t){return ve(i.prev,i,t.prev)<0&&ve(t.next,i,i.next)<0}function Wg(i,t,e,n){let s=i;do s.z===0&&(s.z=Ua(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,Xg(s)}function Xg(i){let t,e,n,s,r,o,a,c,l=1;do{for(e=i,i=null,r=null,o=0;e;){for(o++,n=e,a=0,t=0;t<l&&(a++,n=n.nextZ,!!n);t++);for(c=l;a>0||c>0&&n;)a!==0&&(c===0||!n||e.z<=n.z)?(s=e,e=e.nextZ,a--):(s=n,n=n.nextZ,c--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;e=n}r.nextZ=null,l*=2}while(o>1);return i}function Ua(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function qg(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function Yi(i,t,e,n,s,r,o,a){return(s-o)*(t-a)>=(i-o)*(r-a)&&(i-o)*(n-a)>=(e-o)*(t-a)&&(e-o)*(r-a)>=(s-o)*(n-a)}function Yg(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!$g(i,t)&&(Ns(i,t)&&Ns(t,i)&&Zg(i,t)&&(ve(i.prev,i,t.prev)||ve(i,t.prev,t))||$r(i,t)&&ve(i.prev,i,i.next)>0&&ve(t.prev,t,t.next)>0)}function ve(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function $r(i,t){return i.x===t.x&&i.y===t.y}function kh(i,t,e,n){const s=vr(ve(i,t,e)),r=vr(ve(i,t,n)),o=vr(ve(e,n,i)),a=vr(ve(e,n,t));return!!(s!==r&&o!==a||s===0&&_r(i,e,t)||r===0&&_r(i,n,t)||o===0&&_r(e,i,n)||a===0&&_r(e,t,n))}function _r(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function vr(i){return i>0?1:i<0?-1:0}function $g(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&kh(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function Ns(i,t){return ve(i.prev,i,i.next)<0?ve(i,t,i.next)>=0&&ve(i,i.prev,t)>=0:ve(i,t,i.prev)<0||ve(i,i.next,t)<0}function Zg(i,t){let e=i,n=!1;const s=(i.x+t.x)/2,r=(i.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function Hh(i,t){const e=new Na(i.i,i.x,i.y),n=new Na(t.i,t.x,t.y),s=i.next,r=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function Cl(i,t,e,n){const s=new Na(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function Fs(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Na(i,t,e){this.i=i,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function Kg(i,t,e,n){let s=0;for(let r=t,o=e-n;r<e;r+=n)s+=(i[o]-i[r])*(i[r+1]+i[o+1]),o=r;return s}class Ps{static area(t){const e=t.length;let n=0;for(let s=e-1,r=0;r<e;s=r++)n+=t[s].x*t[r].y-t[r].x*t[s].y;return n*.5}static isClockWise(t){return Ps.area(t)<0}static triangulateShape(t,e){const n=[],s=[],r=[];Pl(t),Ll(n,t);let o=t.length;e.forEach(Pl);for(let c=0;c<e.length;c++)s.push(o),o+=e[c].length,Ll(n,e[c]);const a=Ug.triangulate(n,s);for(let c=0;c<a.length;c+=3)r.push(a.slice(c,c+3));return r}}function Pl(i){const t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function Ll(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}class Ti extends Pe{constructor(t=new rs([new pt(.5,.5),new pt(-.5,.5),new pt(-.5,-.5),new pt(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];const n=this,s=[],r=[];for(let a=0,c=t.length;a<c;a++){const l=t[a];o(l)}this.setAttribute("position",new te(s,3)),this.setAttribute("uv",new te(r,2)),this.computeVertexNormals();function o(a){const c=[],l=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,u=e.depth!==void 0?e.depth:1;let d=e.bevelEnabled!==void 0?e.bevelEnabled:!0,f=e.bevelThickness!==void 0?e.bevelThickness:.2,m=e.bevelSize!==void 0?e.bevelSize:f-.1,_=e.bevelOffset!==void 0?e.bevelOffset:0,g=e.bevelSegments!==void 0?e.bevelSegments:3;const p=e.extrudePath,w=e.UVGenerator!==void 0?e.UVGenerator:Jg;let S,x=!1,D,E,R,I;p&&(S=p.getSpacedPoints(h),x=!0,d=!1,D=p.computeFrenetFrames(h,!1),E=new L,R=new L,I=new L),d||(g=0,f=0,m=0,_=0);const y=a.extractPoints(l);let M=y.shape;const C=y.holes;if(!Ps.isClockWise(M)){M=M.reverse();for(let rt=0,dt=C.length;rt<dt;rt++){const P=C[rt];Ps.isClockWise(P)&&(C[rt]=P.reverse())}}const H=Ps.triangulateShape(M,C),G=M;for(let rt=0,dt=C.length;rt<dt;rt++){const P=C[rt];M=M.concat(P)}function J(rt,dt,P){return dt||console.error("THREE.ExtrudeGeometry: vec does not exist"),rt.clone().addScaledVector(dt,P)}const X=M.length,it=H.length;function V(rt,dt,P){let It,W,N;const U=rt.x-dt.x,ot=rt.y-dt.y,ct=P.x-rt.x,T=P.y-rt.y,v=U*U+ot*ot,B=U*T-ot*ct;if(Math.abs(B)>Number.EPSILON){const Z=Math.sqrt(v),tt=Math.sqrt(ct*ct+T*T),j=dt.x-ot/Z,yt=dt.y+U/Z,vt=P.x-T/tt,Tt=P.y+ct/tt,Jt=((vt-j)*T-(Tt-yt)*ct)/(U*T-ot*ct);It=j+U*Jt-rt.x,W=yt+ot*Jt-rt.y;const ft=It*It+W*W;if(ft<=2)return new pt(It,W);N=Math.sqrt(ft/2)}else{let Z=!1;U>Number.EPSILON?ct>Number.EPSILON&&(Z=!0):U<-Number.EPSILON?ct<-Number.EPSILON&&(Z=!0):Math.sign(ot)===Math.sign(T)&&(Z=!0),Z?(It=-ot,W=U,N=Math.sqrt(v)):(It=U,W=ot,N=Math.sqrt(v/2))}return new pt(It/N,W/N)}const Q=[];for(let rt=0,dt=G.length,P=dt-1,It=rt+1;rt<dt;rt++,P++,It++)P===dt&&(P=0),It===dt&&(It=0),Q[rt]=V(G[rt],G[P],G[It]);const K=[];let lt,xt=Q.concat();for(let rt=0,dt=C.length;rt<dt;rt++){const P=C[rt];lt=[];for(let It=0,W=P.length,N=W-1,U=It+1;It<W;It++,N++,U++)N===W&&(N=0),U===W&&(U=0),lt[It]=V(P[It],P[N],P[U]);K.push(lt),xt=xt.concat(lt)}for(let rt=0;rt<g;rt++){const dt=rt/g,P=f*Math.cos(dt*Math.PI/2),It=m*Math.sin(dt*Math.PI/2)+_;for(let W=0,N=G.length;W<N;W++){const U=J(G[W],Q[W],It);ht(U.x,U.y,-P)}for(let W=0,N=C.length;W<N;W++){const U=C[W];lt=K[W];for(let ot=0,ct=U.length;ot<ct;ot++){const T=J(U[ot],lt[ot],It);ht(T.x,T.y,-P)}}}const Pt=m+_;for(let rt=0;rt<X;rt++){const dt=d?J(M[rt],xt[rt],Pt):M[rt];x?(R.copy(D.normals[0]).multiplyScalar(dt.x),E.copy(D.binormals[0]).multiplyScalar(dt.y),I.copy(S[0]).add(R).add(E),ht(I.x,I.y,I.z)):ht(dt.x,dt.y,0)}for(let rt=1;rt<=h;rt++)for(let dt=0;dt<X;dt++){const P=d?J(M[dt],xt[dt],Pt):M[dt];x?(R.copy(D.normals[rt]).multiplyScalar(P.x),E.copy(D.binormals[rt]).multiplyScalar(P.y),I.copy(S[rt]).add(R).add(E),ht(I.x,I.y,I.z)):ht(P.x,P.y,u/h*rt)}for(let rt=g-1;rt>=0;rt--){const dt=rt/g,P=f*Math.cos(dt*Math.PI/2),It=m*Math.sin(dt*Math.PI/2)+_;for(let W=0,N=G.length;W<N;W++){const U=J(G[W],Q[W],It);ht(U.x,U.y,u+P)}for(let W=0,N=C.length;W<N;W++){const U=C[W];lt=K[W];for(let ot=0,ct=U.length;ot<ct;ot++){const T=J(U[ot],lt[ot],It);x?ht(T.x,T.y+S[h-1].y,S[h-1].x+P):ht(T.x,T.y,u+P)}}}q(),st();function q(){const rt=s.length/3;if(d){let dt=0,P=X*dt;for(let It=0;It<it;It++){const W=H[It];gt(W[2]+P,W[1]+P,W[0]+P)}dt=h+g*2,P=X*dt;for(let It=0;It<it;It++){const W=H[It];gt(W[0]+P,W[1]+P,W[2]+P)}}else{for(let dt=0;dt<it;dt++){const P=H[dt];gt(P[2],P[1],P[0])}for(let dt=0;dt<it;dt++){const P=H[dt];gt(P[0]+X*h,P[1]+X*h,P[2]+X*h)}}n.addGroup(rt,s.length/3-rt,0)}function st(){const rt=s.length/3;let dt=0;_t(G,dt),dt+=G.length;for(let P=0,It=C.length;P<It;P++){const W=C[P];_t(W,dt),dt+=W.length}n.addGroup(rt,s.length/3-rt,1)}function _t(rt,dt){let P=rt.length;for(;--P>=0;){const It=P;let W=P-1;W<0&&(W=rt.length-1);for(let N=0,U=h+g*2;N<U;N++){const ot=X*N,ct=X*(N+1),T=dt+It+ot,v=dt+W+ot,B=dt+W+ct,Z=dt+It+ct;Lt(T,v,B,Z)}}}function ht(rt,dt,P){c.push(rt),c.push(dt),c.push(P)}function gt(rt,dt,P){Ut(rt),Ut(dt),Ut(P);const It=s.length/3,W=w.generateTopUV(n,s,It-3,It-2,It-1);Wt(W[0]),Wt(W[1]),Wt(W[2])}function Lt(rt,dt,P,It){Ut(rt),Ut(dt),Ut(It),Ut(dt),Ut(P),Ut(It);const W=s.length/3,N=w.generateSideWallUV(n,s,W-6,W-3,W-2,W-1);Wt(N[0]),Wt(N[1]),Wt(N[3]),Wt(N[1]),Wt(N[2]),Wt(N[3])}function Ut(rt){s.push(c[rt*3+0]),s.push(c[rt*3+1]),s.push(c[rt*3+2])}function Wt(rt){r.push(rt.x),r.push(rt.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return jg(e,n,t)}static fromJSON(t,e){const n=[];for(let r=0,o=t.shapes.length;r<o;r++){const a=e[t.shapes[r]];n.push(a)}const s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new Ia[s.type]().fromJSON(s)),new Ti(n,t.options)}}const Jg={generateTopUV:function(i,t,e,n,s){const r=t[e*3],o=t[e*3+1],a=t[n*3],c=t[n*3+1],l=t[s*3],h=t[s*3+1];return[new pt(r,o),new pt(a,c),new pt(l,h)]},generateSideWallUV:function(i,t,e,n,s,r){const o=t[e*3],a=t[e*3+1],c=t[e*3+2],l=t[n*3],h=t[n*3+1],u=t[n*3+2],d=t[s*3],f=t[s*3+1],m=t[s*3+2],_=t[r*3],g=t[r*3+1],p=t[r*3+2];return Math.abs(a-h)<Math.abs(o-l)?[new pt(o,1-c),new pt(l,1-u),new pt(d,1-m),new pt(_,1-p)]:[new pt(a,1-c),new pt(h,1-u),new pt(f,1-m),new pt(g,1-p)]}};function jg(i,t,e){if(e.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){const r=i[n];e.shapes.push(r.uuid)}else e.shapes.push(i.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}class rn extends ks{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new rn(t.radius,t.detail)}}class ti extends ks{constructor(t=1,e=0){const n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,s,t,e),this.type="OctahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new ti(t.radius,t.detail)}}class yi extends Pe{constructor(t=.5,e=1,n=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:o},n=Math.max(3,n),s=Math.max(1,s);const a=[],c=[],l=[],h=[];let u=t;const d=(e-t)/s,f=new L,m=new pt;for(let _=0;_<=s;_++){for(let g=0;g<=n;g++){const p=r+g/n*o;f.x=u*Math.cos(p),f.y=u*Math.sin(p),c.push(f.x,f.y,f.z),l.push(0,0,1),m.x=(f.x/e+1)/2,m.y=(f.y/e+1)/2,h.push(m.x,m.y)}u+=d}for(let _=0;_<s;_++){const g=_*(n+1);for(let p=0;p<n;p++){const w=p+g,S=w,x=w+n+1,D=w+n+2,E=w+1;a.push(S,x,E),a.push(x,D,E)}}this.setIndex(a),this.setAttribute("position",new te(c,3)),this.setAttribute("normal",new te(l,3)),this.setAttribute("uv",new te(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new yi(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class ut extends Pe{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const c=Math.min(o+a,Math.PI);let l=0;const h=[],u=new L,d=new L,f=[],m=[],_=[],g=[];for(let p=0;p<=n;p++){const w=[],S=p/n;let x=0;p===0&&o===0?x=.5/e:p===n&&c===Math.PI&&(x=-.5/e);for(let D=0;D<=e;D++){const E=D/e;u.x=-t*Math.cos(s+E*r)*Math.sin(o+S*a),u.y=t*Math.cos(o+S*a),u.z=t*Math.sin(s+E*r)*Math.sin(o+S*a),m.push(u.x,u.y,u.z),d.copy(u).normalize(),_.push(d.x,d.y,d.z),g.push(E+x,1-S),w.push(l++)}h.push(w)}for(let p=0;p<n;p++)for(let w=0;w<e;w++){const S=h[p][w+1],x=h[p][w],D=h[p+1][w],E=h[p+1][w+1];(p!==0||o>0)&&f.push(S,x,E),(p!==n-1||c<Math.PI)&&f.push(x,D,E)}this.setIndex(f),this.setAttribute("position",new te(m,3)),this.setAttribute("normal",new te(_,3)),this.setAttribute("uv",new te(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ut(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class We extends Pe{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);const o=[],a=[],c=[],l=[],h=new L,u=new L,d=new L;for(let f=0;f<=n;f++)for(let m=0;m<=s;m++){const _=m/s*r,g=f/n*Math.PI*2;u.x=(t+e*Math.cos(g))*Math.cos(_),u.y=(t+e*Math.cos(g))*Math.sin(_),u.z=e*Math.sin(g),a.push(u.x,u.y,u.z),h.x=t*Math.cos(_),h.y=t*Math.sin(_),d.subVectors(u,h).normalize(),c.push(d.x,d.y,d.z),l.push(m/s),l.push(f/n)}for(let f=1;f<=n;f++)for(let m=1;m<=s;m++){const _=(s+1)*f+m-1,g=(s+1)*(f-1)+m-1,p=(s+1)*(f-1)+m,w=(s+1)*f+m;o.push(_,g,w),o.push(g,p,w)}this.setIndex(o),this.setAttribute("position",new te(a,3)),this.setAttribute("normal",new te(c,3)),this.setAttribute("uv",new te(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new We(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class Me extends Ai{static get type(){return"MeshStandardMaterial"}constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new Et(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Et(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ja,this.normalScale=new pt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new mn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Hs extends Me{static get type(){return"MeshPhysicalMaterial"}constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new pt(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return be(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Et(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Et(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Et(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}}class Uo extends Ai{static get type(){return"MeshLambertMaterial"}constructor(t){super(),this.isMeshLambertMaterial=!0,this.color=new Et(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Et(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ja,this.normalScale=new pt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new mn,this.combine=Wa,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Zr extends Ae{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Et(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class Os extends Zr{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ae.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Et(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const No=new le,Il=new L,Dl=new L;class Gh{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new pt(512,512),this.map=null,this.mapPass=null,this.matrix=new le,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ec,this._frameExtents=new pt(1,1),this._viewportCount=1,this._viewports=[new ue(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;Il.setFromMatrixPosition(t.matrixWorld),e.position.copy(Il),Dl.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Dl),e.updateMatrixWorld(),No.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(No),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(No)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const Ul=new le,ys=new L,Fo=new L;class Qg extends Gh{constructor(){super(new He(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new pt(4,2),this._viewportCount=6,this._viewports=[new ue(2,1,1,1),new ue(0,1,1,1),new ue(3,1,1,1),new ue(1,1,1,1),new ue(3,0,1,1),new ue(1,0,1,1)],this._cubeDirections=[new L(1,0,0),new L(-1,0,0),new L(0,0,1),new L(0,0,-1),new L(0,1,0),new L(0,-1,0)],this._cubeUps=[new L(0,1,0),new L(0,1,0),new L(0,1,0),new L(0,1,0),new L(0,0,1),new L(0,0,-1)]}updateMatrices(t,e=0){const n=this.camera,s=this.matrix,r=t.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),ys.setFromMatrixPosition(t.matrixWorld),n.position.copy(ys),Fo.copy(n.position),Fo.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(Fo),n.updateMatrixWorld(),s.makeTranslation(-ys.x,-ys.y,-ys.z),Ul.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ul)}}class lc extends Zr{constructor(t,e,n=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new Qg}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class t_ extends Gh{constructor(){super(new Rh(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Sn extends Zr{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ae.DEFAULT_UP),this.updateMatrix(),this.target=new Ae,this.shadow=new t_}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class Vh extends Zr{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}class Wh{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Nl(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=Nl();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function Nl(){return performance.now()}const Fl=new le;class e_{constructor(t,e,n=0,s=1/0){this.ray=new Qa(t,e),this.near=n,this.far=s,this.camera=null,this.layers=new tc,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return Fl.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Fl),this}intersectObject(t,e=!0,n=[]){return Fa(t,this,n,e),n.sort(Ol),n}intersectObjects(t,e=!0,n=[]){for(let s=0,r=t.length;s<r;s++)Fa(t[s],this,n,e);return n.sort(Ol),n}}function Ol(i,t){return i.distance-t.distance}function Fa(i,t,e,n){let s=!0;if(i.layers.test(t.layers)&&i.raycast(t,e)===!1&&(s=!1),s===!0&&n===!0){const r=i.children;for(let o=0,a=r.length;o<a;o++)Fa(r[o],t,e,!0)}}class Xh{constructor(t=1,e=0,n=0){return this.radius=t,this.phi=e,this.theta=n,this}set(t,e,n){return this.radius=t,this.phi=e,this.theta=n,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+e*e+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,n),this.phi=Math.acos(be(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class n_ extends Mg{constructor(t=10,e=10,n=4473924,s=8947848){n=new Et(n),s=new Et(s);const r=e/2,o=t/e,a=t/2,c=[],l=[];for(let d=0,f=0,m=-a;d<=e;d++,m+=o){c.push(-a,0,m,a,0,m),c.push(m,0,-a,m,0,a);const _=d===r?n:s;_.toArray(l,f),f+=3,_.toArray(l,f),f+=3,_.toArray(l,f),f+=3,_.toArray(l,f),f+=3}const h=new Pe;h.setAttribute("position",new te(c,3)),h.setAttribute("color",new te(l,3));const u=new Uh({vertexColors:!0,toneMapped:!1});super(h,u),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Va}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Va);const zl={constitution:{name:"Constitution",icon:"❤️"},attack:{name:"Attack",icon:"⚔"},strength:{name:"Strength",icon:"💪"},defence:{name:"Defence",icon:"🛡"},woodcutting:{name:"Woodcutting",icon:"🪓"},mining:{name:"Mining",icon:"⛏"}},Zn={bronze_hatchet:{name:"Bronze Hatchet",icon:"🪓",stackable:!1,slot:"hatchet"},bronze_pickaxe:{name:"Bronze Pickaxe",icon:"⛏",stackable:!1,slot:"pickaxe"},bronze_sword:{name:"Bronze Sword",icon:"⚔",stackable:!1,slot:"weapon"},whisper_logs:{name:"Whisper Logs",icon:"🪵",stackable:!0},copper_ore:{name:"Copper Ore",icon:"🟠",stackable:!0},tin_ore:{name:"Tin Ore",icon:"⚪",stackable:!0},camp_rations:{name:"Camp Rations",icon:"🍖",stackable:!0},yeti_fur:{name:"Yeti Fur",icon:"🧣",stackable:!0},frost_claw:{name:"Frost Claw",icon:"🧊",stackable:!0},orc_tooth:{name:"Orc Tooth",icon:"🦷",stackable:!0},scout_leather:{name:"Scout Leather",icon:"🦺",stackable:!0}},i_=[{id:"weapon",label:"Weapon"},{id:"hatchet",label:"Hatchet"},{id:"pickaxe",label:"Pickaxe"}];function Ur(i){let t=0;for(let e=1;e<i;e++)t+=Math.floor(e+300*Math.pow(2,e/7));return Math.floor(t/4)}function s_(i){let t=1;for(;t<99&&Ur(t+1)<=i;)t++;return t}function xr(){return{version:1,x:0,z:2,hp:100,maxHp:100,focus:100,stamina:100,skills:{constitution:{level:10,xp:Ur(10)},attack:{level:1,xp:0},strength:{level:1,xp:0},defence:{level:1,xp:0},woodcutting:{level:1,xp:0},mining:{level:1,xp:0}},inventory:[{id:"camp_rations",qty:5}],equipped:{weapon:"bronze_sword",hatchet:"bronze_hatchet",pickaxe:"bronze_pickaxe"}}}const Bl=new Map;function we(i,t={}){const e=`${i}_${t.roughness??.62}_${t.metalness??.06}_${t.clearcoat??0}_${t.sheen??0}_${t.emissive??0}_${t.emissiveIntensity??0}_${t.envMapIntensity??1}_${t.flatShading===!1?0:1}`;let n=Bl.get(e);return n||(n=new Hs({color:i,roughness:t.roughness??.62,metalness:t.metalness??.06,envMapIntensity:t.envMapIntensity??1,flatShading:t.flatShading??!1,...t}),Bl.set(e,n)),n}function Mr(i,t){const e=Math.sin(i*127.1+t*311.7)*43758.5453;return e-Math.floor(e)}function Nr(i,t){const e=Math.floor(i),n=Math.floor(t),s=i-e,r=t-n,o=s*s*(3-2*s),a=r*r*(3-2*r),c=Mr(e,n),l=Mr(e+1,n),h=Mr(e,n+1),u=Mr(e+1,n+1);return c+(l-c)*o+(h-c)*a+(c-l-h+u)*o*a}function Fr(i,t,e=5){let n=0,s=.5,r=1;for(let o=0;o<e;o++)n+=s*Nr(i*r,t*r),s*=.5,r*=2.05;return n}function hc(i,t){const e=document.createElement("canvas"),n=document.createElement("canvas"),s=document.createElement("canvas");e.width=e.height=n.width=n.height=s.width=s.height=i;const r=e.getContext("2d"),o=n.getContext("2d"),a=s.getContext("2d"),c=r.createImageData(i,i),l=o.createImageData(i,i),h=a.createImageData(i,i);for(let d=0;d<i;d++)for(let f=0;f<i;f++){const m=t(f/i,d/i),_=(d*i+f)*4;c.data[_]=m.r,c.data[_+1]=m.g,c.data[_+2]=m.b,c.data[_+3]=255;const g=Math.max(0,Math.min(255,m.rough));l.data[_]=l.data[_+1]=l.data[_+2]=g,l.data[_+3]=255;const p=Math.max(0,Math.min(255,m.bump));h.data[_]=h.data[_+1]=h.data[_+2]=p,h.data[_+3]=255}r.putImageData(c,0,0),o.putImageData(l,0,0),a.putImageData(h,0,0);const u=(d,f)=>{const m=new oc(d);return m.wrapS=m.wrapT=es,m.anisotropy=8,m.colorSpace=f?De:Mn,m.needsUpdate=!0,m};return{map:u(e,!0),roughnessMap:u(n,!1),bumpMap:u(s,!1)}}let qn=null,Yn=null,Oo=null;function r_(){return qn||(qn=hc(256,(i,t)=>{const e=Fr(i*18,t*42),n=Nr(i*70,t*70),s=Fr(i*4.5,t*3.2,3),r=Math.pow(Nr(i*9+t*40,t*2),8),o=.42+e*.28+s*.16-r*.22+n*.06,a=138+o*108,c=112+o*92,l=92+o*74;return{r:a,g:c,b:l,rough:110+e*90-r*40,bump:90+e*110+n*30-r*50}}),qn.map.repeat.set(2.2,2.2),qn.roughnessMap.repeat.copy(qn.map.repeat),qn.bumpMap.repeat.copy(qn.map.repeat)),qn}function o_(){return Yn||(Yn=hc(256,(i,t)=>{const e=Math.abs(Math.sin(i*Math.PI*64))*.12+Math.abs(Math.sin(t*Math.PI*64))*.12,n=Fr(i*10,t*10,4),s=.28+n*.18+e;return{r:124+s*74,g:130+s*78,b:126+s*70,rough:170+e*80,bump:100+e*90+n*40}}),Yn.map.repeat.set(3,3),Yn.roughnessMap.repeat.copy(Yn.map.repeat),Yn.bumpMap.repeat.copy(Yn.map.repeat)),Yn}function a_(){return Oo||(Oo=hc(256,(i,t)=>{const e=Fr(i*6,t*8,4),n=Math.pow(Nr(i*40,t*40),6),s=212+e*24-n*22,r=196+e*18-n*18,o=184+e*14-n*14;return{r:s,g:r,b:o,rough:96+e*40,bump:118+e*28}})),Oo}function zo(i,t={}){const e=r_();return new Hs({color:i,map:e.map,roughnessMap:e.roughnessMap,bumpMap:e.bumpMap,bumpScale:.018,roughness:.58,metalness:.08,clearcoat:.16,clearcoatRoughness:.55,sheen:.22,sheenColor:new Et(6963240),sheenRoughness:.7,envMapIntensity:.7,flatShading:!1,...t})}function kl(i){const t=o_();return new Hs({color:i,map:t.map,roughnessMap:t.roughnessMap,bumpMap:t.bumpMap,bumpScale:.02,roughness:.86,metalness:.02,sheen:.18,sheenColor:new Et(3818552),sheenRoughness:.85,envMapIntensity:.4,flatShading:!1})}function Hl(i,t={}){const e=a_();return new Hs({color:i,map:e.map,roughnessMap:e.roughnessMap,bumpMap:e.bumpMap,bumpScale:.012,roughness:.48,metalness:0,sheen:.35,sheenColor:new Et(12611664),sheenRoughness:.55,envMapIntensity:.32,emissive:new Et(2757648),emissiveIntensity:.012,flatShading:!1,...t})}function Nt(i,t){return i.castShadow=!0,i.receiveShadow=!0,t.add(i),i}function Xi(i,t=16){const e=i.map(([n,s])=>new pt(n,s));return new Yr(e,t)}function Gl(i,t,e,n){const s=new rs;s.moveTo(-i*.5,0),s.lineTo(i*.5,0),s.lineTo(0,-t),s.closePath();const r=new Ti(s,{depth:e,bevelEnabled:!1});r.translate(0,0,-e*.5);const o=new A(r,n);return o.castShadow=!0,o}function Vl(i,t,e,n,s,r=0){const o=Math.hypot(n*1.7,e-t);for(const a of[-1,1]){const c=new A(new Kt(.028,o,.016),s);c.position.set(0,(t+e)*.5,r),c.rotation.z=a*Math.atan2(n*.95,(e-t)*.5),c.castShadow=!0,i.add(c)}}function Wl(i,t,e,n){const s=new A(new Kt(i,i,t),n);s.castShadow=!0;const r=new A(new Kt(i*.42,i*.42,t+.008),new Hs({color:2761752,roughness:.7,metalness:.2,flatShading:!1}));return s.add(r),s}function Xl(i,t,e,n,s,r,o,a,c){for(let l=0;l<r;l++){const h=l/r*Math.PI*2,u=new A(new rn(o,0),l%2?c:a);u.position.set(t+Math.cos(h)*s,e+l%2*.012,n+Math.sin(h)*s),u.rotation.set(.2,h,.15),u.scale.set(1.15,.85,1.05),u.castShadow=!0,i.add(u)}}const qh=new L(0,-.008,.041);function ql(i,t,e,n){const s=new Dt,r=new A(new ee(n,e*.34,3,8),t);r.position.y=-e*.25,Nt(r,s);const o=new Dt;o.position.y=-e*.48;const a=new A(new ee(n*.88,e*.24,3,8),i);a.position.y=-e*.16,Nt(a,o),s.add(o);const c=new Dt;c.position.y=-e*.32;const l=new A(new ee(n*.74,e*.16,3,8),i);l.position.y=-e*.12,Nt(l,c);const h=new A(new ut(n*.6,6,5),i);return h.scale.set(.9,.5,.45),h.position.set(0,-e*.19,-n*.55),c.add(h),o.add(c),{root:s,mid:o,tip:c}}function je(i,t){if(!i)return;const e=i.userData.fingers,n=i.userData.thumb;if(!e)return;const s=Math.max(0,Math.min(1.15,t));for(let r=0;r<e.length;r++){const o=1+(r-1.5)*-.07,a=e[r];a.root.rotation.x=-s*.98*o,a.mid.rotation.x=-s*1.22*o,a.tip.rotation.x=-s*.82*o}n&&(n.root.rotation.x=-.55-s*.35,n.mid.rotation.x=-s*.55,n.tip.rotation.x=-s*.45)}function c_(i,t,e,n){const s=new Dt,r=new A(new ut(.047,12,10),t);r.scale.set(1.02,.98,.66),r.position.set(0,-.016,.01),Nt(r,s);const o=new A(new ee(.037,.022,4,10),e);o.position.set(0,.018,.006),Nt(o,s);const a=new Dt;a.name="grip",a.position.set(0,-.036,.012),a.rotation.z=0,s.add(a);const c=new A(new ee(.014,.058,4,8),t);c.rotation.z=Math.PI/2,c.position.set(0,.004,.014),Nt(c,a);const l=[];for(let u=0;u<4;u++){const d=.074-Math.abs(u-1.1)*.007,f=ql(i,t,d,.0118-u*9e-4);f.root.position.set(-.031+u*.0207,0,.012-Math.abs(u-1.5)*.005),a.add(f.root),l.push(f)}const h=ql(i,t,.064,.0136);return h.root.position.set(.04,.014,.03),h.root.rotation.z=-1.18,a.add(h.root),s.userData.fingers=l,s.userData.thumb=h,s.userData.gripPoint=qh.clone(),je(s,.22),s}function uc(){const i=new Dt;i.name="player",i.userData.locomotionY=0;const t=Hl(12618850),e=Hl(10646092,{roughness:.56}),n=we(3154714,{roughness:.94,sheen:.22,sheenColor:new Et(3811352),flatShading:!0}),s=zo(10117688),r=zo(5386780,{roughness:.78,clearcoat:.04}),o=zo(12618322,{roughness:.58,clearcoat:.12}),a=we(13215860,{roughness:.92,metalness:0,sheen:.22,sheenColor:new Et(13148272),sheenRoughness:.7,envMapIntensity:.12,flatShading:!0}),c=we(9268292,{roughness:.95,sheen:.16,sheenColor:new Et(9068600),flatShading:!0}),l=we(11307097,{roughness:.93,sheen:.18,sheenColor:new Et(11173960),flatShading:!0}),h=kl(5594455),u=kl(4081215);we(15265524,{metalness:.92,roughness:.18,clearcoat:.55,clearcoatRoughness:.12,envMapIntensity:1.35});const d=we(16186108,{metalness:.96,roughness:.1,clearcoat:.7,clearcoatRoughness:.08,emissive:13161696,emissiveIntensity:.38,envMapIntensity:1.55}),f=new A(new gn(.38,24),new pe({color:0,transparent:!0,opacity:.38,depthWrite:!1}));f.rotation.x=-Math.PI/2,f.position.y=.025,f.name="contactShadow",i.add(f);const m=new Dt;m.name="playerHips",i.add(m);const _=W=>{const N=new Dt;N.name=W<0?"legL":"legR",N.position.set(W*.16,.94,0);const U=new A(new ut(.1,14,12),h);U.scale.set(1.04,1,1.02),Nt(U,N);const ot=new A(Xi([[.096,-.04],[.1,-.14],[.092,-.26],[.08,-.36],[.07,-.42]],14),h);Nt(ot,N);const ct=new A(new ut(.075,12,9),h);ct.scale.set(1,1.7,.85),ct.position.set(0,-.2,.04),Nt(ct,N);const T=new A(new ut(.07,12,9),u);T.scale.set(1,1.6,.8),T.position.set(0,-.18,-.04),Nt(T,N);const v=new Dt;v.name=W<0?"shinL":"shinR",v.position.set(0,-.44,0);const B=new A(new ut(.076,14,12),h);B.scale.set(1,.95,1),Nt(B,v);const Z=new A(new ut(.04,10,8),h);Z.scale.set(1.1,1.1,.7),Z.position.set(0,-.01,.062),Nt(Z,v);const tt=new A(Xi([[.07,-.02],[.072,-.08],[.064,-.14],[.058,-.17]],14),u);tt.position.set(0,0,-.012),Nt(tt,v);const j=new A(new ut(.056,12,9),u);j.scale.set(1.05,1.5,.9),j.position.set(0,-.09,-.04),Nt(j,v);const yt=new A(new Qt(.09,.098,.1,14),s);yt.position.set(0,-.2,-.016),Nt(yt,v),Vl(v,-.15,-.25,.094,r,.02);const vt=new A(new We(.092,.022,6,10),a);vt.rotation.x=Math.PI/2,vt.position.set(0,-.14,.02),v.add(vt);const Tt=new A(new We(.082,.018,6,10),c);Tt.rotation.x=Math.PI/2,Tt.position.set(0,-.24,0),v.add(Tt);const Jt=new A(new Qt(.048,.058,.14,12),r);Jt.position.set(0,-.36,-.006),Nt(Jt,v);const ft=new A(new Qt(.052,.055,.045,12),s);ft.position.set(0,-.34,-.006),Nt(ft,v);const St=new Dt;St.name=W<0?"footL":"footR",St.position.set(0,-.48,.04);const Ht=new A(new ut(.04,12,10),r);Nt(Ht,St);const Gt=new A(new ut(.046,10,8),r);Gt.position.set(0,-.016,-.05),Nt(Gt,St);const Ct=new A(new ee(.05,.16,5,12),s);Ct.rotation.x=Math.PI/2,Ct.position.set(0,-.004,.12),Ct.scale.set(1.2,1,.68),Nt(Ct,St);const jt=new A(new ee(.052,.16,4,10),we(1840144,{roughness:.96}));return jt.rotation.x=Math.PI/2,jt.scale.set(1.12,1,.36),jt.position.set(0,-.032,.1),St.add(jt),v.add(St),N.add(v),N};m.add(_(-1)),m.add(_(1));const g=new A(Xi([[.2,-.1],[.24,-.02],[.22,.1]],16),s);g.position.y=.92,g.scale.set(1,1,.86),Nt(g,m);for(const[W,N]of[[.195,0],[-.19,Math.PI]]){const U=Gl(.26,.2,.038,r);U.position.set(0,.86,W),U.rotation.set(Math.sign(W)*.28,N,0),m.add(U)}for(const W of[-1,1]){const N=Gl(.18,.18,.032,o);N.position.set(W*.24,.86,0),N.rotation.order="ZYX",N.rotation.set(0,W*Math.PI*.5,-W*.24),m.add(N)}const p=new Dt;p.name="playerTorso",p.position.y=1.18,i.add(p);const w=new A(Xi([[.205,-.3],[.215,-.2],[.23,-.06],[.245,.1],[.235,.22],[.15,.32]],14),s);w.scale.set(1.08,1,.88),Nt(w,p);const S=new A(new ut(.2,14,12),s);S.scale.set(1.2,.95,.5),S.position.set(0,.06,-.1),Nt(S,p);for(const W of[-1,1]){const N=new A(new ut(.085,14,12),s);N.scale.set(1.2,.72,.5),N.position.set(W*.1,.1,.16),Nt(N,p)}const x=new A(new ut(.12,12,10),s);x.scale.set(1.1,1,.36),x.position.set(0,-.14,.16),Nt(x,p);const D=new A(new We(.225,.03,10,18),r);D.rotation.x=Math.PI/2,D.scale.set(1.04,1,.9),D.position.y=-.26,p.add(D);const E=Wl(.1,.028,.042,d);E.position.set(0,-.26,.225),p.add(E);const R=(W,N)=>{const U=new A(new Kt(.078,.56,.06),r);U.position.set(0,.02,N),U.rotation.set(Math.sign(N)*.09,0,W),U.castShadow=!0,p.add(U)};R(.5,.18),R(-.5,.18),R(.5,-.175),R(-.5,-.175);const I=new A(new Kt(.15,.15,.03),r);I.position.set(0,.05,.205),p.add(I);const y=Wl(.14,.038,.058,d);y.name="chestBuckle",y.position.set(0,.05,.24),p.add(y);const M=.31;for(const W of[-1,1]){const N=new A(new ut(.11,12,9),t);N.scale.set(1.35,.5,.7),N.rotation.z=W*.42,N.position.set(W*.17,.24,-.01),Nt(N,p);const U=new A(new ut(.1,8,6),o);U.scale.set(1.2,.5,1.05),U.position.set(W*(M-.03),.18,.005),U.rotation.z=W*-.34,Nt(U,p);const ot=new A(new ut(.108,12,9,0,Math.PI*2,0,Math.PI*.5),o);ot.scale.set(1.06,.9,1.02),ot.rotation.z=W*-.38,ot.position.set(W*(M-.01),.13,-.004),Nt(ot,p);for(let ct=0;ct<3;ct++){const T=new A(new ut(.011,6,5),d),v=-.5+ct*.5;T.position.set(W*(M+Math.cos(v)*.02),.19,Math.sin(v)*.08),p.add(T)}}const C=new A(new We(.17,.055,8,12),l);C.rotation.x=Math.PI/2,C.position.set(0,.28,.01),C.scale.set(1.08,1,.92),Nt(C,p),Xl(p,0,.29,.01,.18,8,.042,a,c);const O=new A(new ee(.07,.1,6,14),t);O.position.set(0,.35,.012),Nt(O,p);for(const W of[-1,1]){const N=new A(new ee(.02,.09,4,8),e);N.position.set(W*.045,.34,.058),N.rotation.set(-.18,0,W*.3),Nt(N,p)}const H=W=>{const N=new Dt;N.name=W<0?"clavL":"clavR",N.position.set(W*.2,.14,0);const U=new Dt;U.name=W<0?"armL":"armR",U.position.set(W*(M-.2),0,0);const ot=new A(new ut(.086,14,11),t);ot.scale.set(1.04,1.02,1),ot.position.set(W*.004,-.01,-.004),Nt(ot,U);const ct=new A(Xi([[.07,-.02],[.076,-.1],[.07,-.19],[.058,-.29],[.05,-.33]],12),t);Nt(ct,U);const T=new A(new ut(.058,12,9),t);T.scale.set(1,1.6,.8),T.position.set(W*-.004,-.15,.024),Nt(T,U);const v=new Dt;v.name=W<0?"forearmL":"forearmR",v.position.set(0,-.34,0);const B=new A(new ut(.06,12,9),t);B.scale.set(1,.95,1.05),Nt(B,v);const Z=new A(Xi([[.062,-.03],[.072,-.08],[.068,-.15],[.058,-.22],[.05,-.27]],12),s);Z.position.set(0,0,.008),Nt(Z,v),Vl(v,-.07,-.21,.066,r,.008);const tt=new A(new We(.07,.022,6,10),a);tt.rotation.x=Math.PI/2,tt.position.set(0,-.045,.008),v.add(tt),Xl(v,0,-.04,.008,.066,6,.024,a,c);const j=new A(new We(.052,.014,6,10),r);j.rotation.x=Math.PI/2,j.position.set(0,-.25,.008),v.add(j);const yt=c_(t,s,r);return yt.name=W<0?"handL":"handR",yt.position.set(0,-.28,.02),v.add(yt),U.add(v),N.add(U),N};p.add(H(-1)),p.add(H(1));const G=new Dt;G.name="playerHead",G.position.set(0,.5,.015),G.scale.setScalar(.93);const J=we(3877663,{roughness:.95,sheen:.18,sheenColor:new Et(5455916)}),X=new A(new ut(.163,22,18),t);X.scale.set(.95,1.07,.9),X.position.z=-.012,Nt(X,G);const it=new A(new ut(.13,18,14),t);it.scale.set(1,1.12,.55),it.position.set(0,-.01,.07),Nt(it,G);const V=new A(new ee(.022,.1,5,12),t);V.rotation.z=Math.PI/2,V.scale.set(1,1,.8),V.position.set(0,.05,.132),Nt(V,G);const Q=new A(new ut(.114,16,13),e);Q.scale.set(1.02,.74,.9),Q.position.set(0,-.093,.03),Nt(Q,G);const K=new A(new ut(.114,16,13),J);K.scale.set(1.06,.78,1.02),K.position.set(0,-.11,.046),Nt(K,G);const lt=new A(new ut(.06,12,9),J);lt.scale.set(1.15,.95,.9),lt.position.set(0,-.15,.095),G.add(lt);for(const W of[-1,1]){const N=new A(new ut(.024,8,6),J);N.scale.set(.3,1.7,.7),N.position.set(W*.147,-.024,-.012),N.rotation.z=W*.12,G.add(N);const U=new A(new ee(.011,.028,3,8),J);U.rotation.z=Math.PI/2,U.rotation.y=W*.35,U.position.set(W*.02,-.074,.164),G.add(U)}const xt=new A(new ee(.013,.034,4,10),t);xt.rotation.x=-.3,xt.position.set(0,.008,.15),Nt(xt,G);const Pt=new A(new ut(.023,12,10),t);Pt.scale.set(1,.9,.95),Pt.position.set(0,-.03,.165),Nt(Pt,G);for(const W of[-1,1]){const N=new A(new ut(.015,10,8),t);N.scale.set(1,.85,.9),N.position.set(W*.022,-.038,.152),G.add(N);const U=new A(new ut(.0055,8,6),e);U.position.set(W*.012,-.047,.166),G.add(U)}for(const W of[-1,1]){const N=new A(new ee(.011,.05,3,8),J);N.rotation.z=Math.PI/2+W*-.18,N.rotation.x=-.3,N.position.set(W*.052,.066,.146),G.add(N);const U=new A(new ut(.021,14,11),we(15129805,{roughness:.3}));U.position.set(W*.051,.018,.128),G.add(U);const ot=new A(new ut(.0122,10,8),we(4864546,{roughness:.3,clearcoat:.6,clearcoatRoughness:.1}));ot.position.set(W*.051,.018,.1445),G.add(ot);const ct=new A(new ut(.0058,8,6),we(657414,{roughness:.25}));ct.position.set(W*.051,.018,.153),G.add(ct);const T=new A(new ut(.024,12,9,0,Math.PI*2,0,Math.PI*.5),t);T.scale.set(1.06,1,.92),T.rotation.x=-.5,T.position.set(W*.051,.024,.126),G.add(T);const v=new A(new ut(.023,12,9,0,Math.PI*2,Math.PI*.62,Math.PI*.38),e);v.scale.set(1.06,1,.9),v.rotation.x=.35,v.position.set(W*.051,.014,.126),G.add(v);const B=new A(new ut(.03,10,8),t);B.scale.set(.36,1.05,.62),B.position.set(W*.15,.006,-.012),G.add(B);const Z=new A(new ut(.014,8,6),t);Z.scale.set(.4,.8,.65),Z.position.set(W*.149,-.026,-.01),G.add(Z)}const q=new A(new ee(.0045,.04,3,8),we(4858908,{roughness:.6}));q.rotation.z=Math.PI/2,q.position.set(0,-.098,.163),G.add(q);const st=new A(new ee(.0075,.03,3,8),e);st.rotation.z=Math.PI/2,st.position.set(0,-.109,.161),G.add(st);const _t=new A(new ut(.171,16,12,0,Math.PI*2,0,Math.PI*.47),n);_t.position.set(0,.052,-.016),_t.scale.set(1.06,1,1.1),Nt(_t,G);const ht=[[0,.15,.062,.082,.5],[-.078,.142,.05,.074,.35],[.078,.142,.05,.074,-.35],[-.128,.098,-.01,.07,.2],[.128,.098,-.01,.07,-.2],[-.072,.122,-.108,.078,.1],[.072,.122,-.108,.078,-.1],[0,.1,-.152,.082,0]];for(const[W,N,U,ot,ct]of ht){const T=new A(new rn(ot,0),n);T.position.set(W,N,U),T.rotation.set(-.4+U*1.2,W*1.6,ct),T.scale.set(1.1,.52,1.25),G.add(T)}const gt=new A(new rn(.082,0),n);gt.scale.set(1.6,.3,.62),gt.rotation.set(.42,0,.12),gt.position.set(.014,.125,.098),G.add(gt),p.add(G);const Lt=new Dt;Lt.name="toolRoot",Lt.visible=!1,p.getObjectByName("armR").getObjectByName("handR").getObjectByName("grip").add(Lt),dc(Lt,null);const dt=$h();dt.name="tool_hatchet",dt.visible=!1,Lt.add(dt);const P=Zh();P.name="tool_pickaxe",P.visible=!1,Lt.add(P);const It=Kh();return It.name="tool_sword",It.visible=!1,Lt.add(It),i}function pn(i=12766940,t={}){return we(i,{metalness:.42,roughness:.28,clearcoat:.5,clearcoatRoughness:.2,envMapIntensity:1,...t})}function Yh(i,t,e){const n=new Dt,s=we(6964256,{roughness:.78,clearcoat:.1,clearcoatRoughness:.7}),r=new A(new Qt(t,t*1.06,i,12),s);r.position.y=i*.5,Nt(r,n);const o=new A(new ut(e,10,8),s);o.scale.set(1,1.35,1),Nt(o,n);const a=we(3810324,{roughness:.88});for(let c=0;c<5;c++){const l=new A(new We(t*1.12,.007,5,10),a);l.rotation.x=Math.PI/2,l.rotation.z=c*.4,l.position.y=.03+c*.032,n.add(l)}return n}function $h(){const i=new Dt,t=Yh(.46,.021,.03);t.position.y=-.06,i.add(t);const e=new Dt;e.position.y=.36;const n=new A(new Qt(.034,.034,.11,10),pn(9411496));n.scale.set(.68,1,1),Nt(n,e);const s=new rs;s.moveTo(0,-.046),s.lineTo(.075,-.058),s.lineTo(.155,-.112),s.lineTo(.192,-.092),s.lineTo(.2,.082),s.lineTo(.15,.096),s.lineTo(.065,.054),s.lineTo(0,.046),s.closePath();const r=new A(new Ti(s,{depth:.008,bevelEnabled:!0,bevelSize:.013,bevelThickness:.017,bevelSegments:2}),pn(11714768));r.rotation.y=-Math.PI/2,r.position.set(.021,0,0),Nt(r,e);const o=new A(new Kt(.007,.185,.01),we(15397627,{metalness:.22,roughness:.16,clearcoat:.6,envMapIntensity:.9}));o.name="toolEdge",o.position.set(0,-.006,.206),o.rotation.x=.06,e.add(o);const a=new A(new Kt(.044,.058,.038),pn(9674926,{roughness:.34}));a.name="toolHeel",a.position.set(0,.004,-.042),Nt(a,e);const c=new A(new Kt(.038,.01,.014),pn(6187638,{roughness:.5}));return c.position.set(0,.052,.004),e.add(c),i.add(e),i}function Zh(){const i=new Dt,t=Yh(.52,.021,.03);t.position.y=-.07,i.add(t);const e=new Dt;e.position.y=.43;const n=new A(new Qt(.034,.038,.09,10),pn(9082274));Nt(n,e);for(let a=0;a<6;a++){const c=a/5,l=new A(new Kt(.058-c*.034,.056-c*.031,.062-c*.032),pn(10135736-a*197379));l.position.set(0,.02-c*c*.125,.055+c*.2),l.rotation.x=c*.72,Nt(l,e)}const s=new A(new Ne(.018,.085,6),we(15002868,{metalness:.24,roughness:.18,clearcoat:.5,envMapIntensity:.9}));s.name="toolEdge",s.rotation.x=Math.PI*.66,s.position.set(0,-.128,.292),Nt(s,e);const r=new A(new Kt(.048,.048,.17),pn(9082274));r.name="toolHeel",r.position.set(0,.014,-.088),r.rotation.x=-.22,Nt(r,e);const o=new A(new Kt(.05,.012,.02),we(14674162,{metalness:.24,roughness:.18,clearcoat:.5,envMapIntensity:.9}));return o.position.set(0,.042,-.175),e.add(o),i.add(e),i}function Kh(){const i=new Dt,t=we(14201944,{metalness:.78,roughness:.26,clearcoat:.4,envMapIntensity:1.2}),e=new A(new Qt(.019,.023,.17,10),we(4860434,{roughness:.8}));Nt(e,i);const n=we(3021840,{roughness:.9});for(let f=0;f<7;f++){const m=new A(new We(.024,.006,5,10),n);m.rotation.x=Math.PI/2,m.rotation.y=f*.3,m.position.y=-.062+f*.021,i.add(m)}const s=new A(new ut(.031,12,10),t);s.name="toolHeel",s.scale.set(1,.85,1),s.position.y=-.098,Nt(s,i);const r=new A(new Qt(.02,.026,.016,10),t);r.position.y=-.076,i.add(r);const o=new rs;o.moveTo(-.1,0),o.quadraticCurveTo(-.05,.034,0,.018),o.quadraticCurveTo(.05,.034,.1,0),o.quadraticCurveTo(.05,-.02,0,-.016),o.quadraticCurveTo(-.05,-.02,-.1,0);const a=new A(new Ti(o,{depth:.036,bevelEnabled:!0,bevelSize:.005,bevelThickness:.004,bevelSegments:1}),t);a.position.set(0,.092,-.018),Nt(a,i);const c=new A(new Kt(.042,.05,.026),pn(11187908));c.position.y=.128,Nt(c,i);const l=pn(13951212,{roughness:.14,clearcoat:.6,emissive:1911868,emissiveIntensity:.1}),h=6;for(let f=0;f<h;f++){const m=f/h,_=.078-m*.03,g=new A(new Kt(_,.58/h+.004,.02-m*.006),l);g.position.y=.17+.58/h*(f+.5),Nt(g,i)}const u=new A(new Kt(.016,.44,.024),pn(10465474,{roughness:.3,clearcoat:.3}));u.position.y=.4,i.add(u);for(const f of[-1,1]){const m=new A(new Kt(.008,.58,.012),pn(16054783,{roughness:.08,clearcoat:.75}));m.position.set(f*.032,.46,0),i.add(m)}const d=new A(new Ne(.034,.12,4),l);return d.name="toolEdge",d.rotation.y=Math.PI/4,d.scale.set(1,1,.42),d.position.y=.81,Nt(d,i),i}function dc(i,t){i.position.copy(qh),t==="hatchet"?i.rotation.set(.12,-.14,-Math.PI/2):t==="pickaxe"?i.rotation.set(.08,-.1,-Math.PI/2):i.rotation.set(Math.PI/2+.7,-.1,-Math.PI/2)}function Gs(i){const t=i.getObjectByName("toolRoot");if(!t||!t.visible)return;const e=t.getObjectByName("tool_sword"),n=t.getObjectByName("tool_hatchet"),s=t.getObjectByName("tool_pickaxe"),r=e?.visible?"sword":n?.visible?"hatchet":s?.visible?"pickaxe":null;dc(t,r)}function Ue(i,t){const e=i.getObjectByName("toolRoot");if(e){e.visible=t!==null;for(const n of["tool_hatchet","tool_pickaxe","tool_sword"]){const s=e.getObjectByName(n);s&&(s.visible=n===`tool_${t}`)}dc(e,t)}}function Ri(i){const t=Math.max(0,Math.min(1,i));return t*t*(3-2*t)}function Fn(i){const t=Math.max(0,Math.min(1,i));return t<.5?16*t*t*t*t*t:1-Math.pow(-2*t+2,5)/2}function nt(i,t){return i.getObjectByName(t)}function Or(i,t={}){if(!i)return;const e=i.userData.rest;e&&(i.position.set(e.x+(t.x??0),e.y+(t.y??0),e.z+(t.z??0)),i.rotation.set(e.rx+(t.rx??0),e.ry,e.rz))}function Jh(i){const t=Math.sin(i),e=Math.cos(i);return t*(.62+.38*Math.abs(e))}function Vs(i,t){i.userData.locomotionY=t}function Ie(i){i&&i.rotation.set(0,0,0)}function se(i,t,e){return i+(t-i)*e}function kt(i,t,e,n){i&&i.rotation.set(t,e,n)}function bi(i){return Math.max(0,i)}function fc(i,t){return!!nt(i,t)?.visible}const jh=["playerHips","playerTorso","playerHead","clavL","clavR","armL","forearmL","handL","armR","forearmR","handR","legL","shinL","footL","legR","shinR","footR"],Oa=[0,0,0];function l_(i,t,e){const n=i??Oa,s=t??Oa;return[se(n[0],s[0],e),se(n[1],s[1],e),se(n[2],s[2],e)]}function Kn(i,t,e){const n={};for(const s of jh)(i[s]||t[s])&&(n[s]=l_(i[s],t[s],e));return n.gripR=se(i.gripR??.25,t.gripR??.25,e),n.gripL=se(i.gripL??.25,t.gripL??.25,e),n.lift=se(i.lift??0,t.lift??0,e),n}function Qh(i,t){for(const s of jh){const r=t[s]??Oa,o=nt(i,s);o&&o.rotation.set(s==="shinL"||s==="shinR"?bi(r[0]):r[0],r[1],r[2])}const e=nt(i,"playerHips");e&&e.position.set(0,0,0);const n=nt(i,"playerTorso");n&&(n.position.x=0,n.position.z=0,n.scale.set(1,1,1)),je(nt(i,"handR"),t.gripR??.25),je(nt(i,"handL"),t.gripL??.25),Gs(i),Vs(i,t.lift??0)}const h_=["playerHips","playerTorso","playerHead","clavL","clavR","armL","armR","forearmL","forearmR","handL","handR","legL","legR","shinL","shinR","footL","footR"];class u_{prev=new Map;reset(){this.prev.clear()}apply(t,e,n=18){const s=1-Math.exp(-n*Math.max(0,e));for(const r of h_){const o=nt(t,r);if(!o)continue;const a=this.prev.get(r);if(!a){this.prev.set(r,o.rotation.clone());continue}o.rotation.set(a.x+(o.rotation.x-a.x)*s,a.y+(o.rotation.y-a.y)*s,a.z+(o.rotation.z-a.z)*s),a.copy(o.rotation)}Gs(t)}}function $n(i){Ie(nt(i,"playerHips")),Ie(nt(i,"legL")),Ie(nt(i,"legR")),Ie(nt(i,"shinL")),Ie(nt(i,"shinR")),Ie(nt(i,"footL")),Ie(nt(i,"footR")),Ie(nt(i,"clavL")),Ie(nt(i,"clavR")),Ie(nt(i,"armL")),Ie(nt(i,"armR")),Ie(nt(i,"forearmL")),Ie(nt(i,"forearmR")),Ie(nt(i,"handL")),Ie(nt(i,"handR")),Ie(nt(i,"playerHead")),Ie(nt(i,"playerTorso"));const t=nt(i,"playerHips");t&&t.position.set(0,0,0);const e=nt(i,"playerTorso");e&&(e.position.x=0,e.position.z=0,e.scale.set(1,1,1)),je(nt(i,"handR"),fc(i,"tool_sword")?.96:.22),je(nt(i,"handL"),.22),Gs(i),i.rotation.z=0,i.rotation.x=0,Vs(i,0)}function xi(i,t,e=!1){if(fc(i,"tool_sword")){d_(i,t);return}const n=Math.sin(t*1.35)*.018,s=Math.sin(t*.55)*.018,r=Math.sin(t*.37+1.1)*.012,o=Math.sin(t*.28)*.08+Math.sin(t*.11)*.04,a=nt(i,"playerHips"),c=nt(i,"playerTorso");a&&(a.rotation.set(0,s*.12,s*.1),a.position.set(s*.08,0,0)),c&&(c.rotation.set(.015+n*.55,s*.1,s*.04-r*.06),c.position.x=0,c.position.z=0,c.scale.set(1+n*.008,1+n*.014,1+n*.006)),kt(nt(i,"playerHead"),-.04+n*.28,o,-s*.06),kt(nt(i,"clavL"),.02,0,-.02),kt(nt(i,"clavR"),.02,0,.02),kt(nt(i,"armL"),.08+n*.05,.06,-.13+r*.08),kt(nt(i,"forearmL"),-.24+r*.06,.08,-.03),kt(nt(i,"handL"),.06,.06,.02),kt(nt(i,"armR"),.08-n*.05,-.06,.13-r*.08),kt(nt(i,"forearmR"),-.24-r*.06,-.08,.03),kt(nt(i,"handR"),.06,-.06,-.02),kt(nt(i,"legL"),.02+s*.04,0,.02),kt(nt(i,"legR"),-.01-s*.04,0,-.02),kt(nt(i,"shinL"),bi(.06+Math.max(0,s)*.04),0,0),kt(nt(i,"shinR"),bi(.08+Math.max(0,-s)*.04),0,0),kt(nt(i,"footL"),.02,0,0),kt(nt(i,"footR"),.03,0,0),je(nt(i,"handL"),.2),je(nt(i,"handR"),.2),Vs(i,n*.02)}const tu={playerHips:[.02,-.1,.02],playerTorso:[.08,-.2,.04],playerHead:[-.04,.18,-.04],clavR:[.1,-.12,-.1],clavL:[.04,.08,.08],armR:[-.075,.32,.533],forearmR:[-1.887,-.185,.06],handR:[.622,-1.425,-.209],armL:[-.7,.15,-.3],forearmL:[-1.15,.1,0],handL:[.1,.2,.1],legL:[-.22,.06,.05],shinL:[.3,0,0],footL:[.06,.1,0],legR:[.12,-.04,-.04],shinR:[.2,0,0],footR:[.04,-.08,0],gripR:.96,gripL:.3,lift:.02};function d_(i,t){const e=Math.sin(t*1.4)*.016,n=Math.sin(t*.7)*.012,s=Math.sin(t*.43+.6)*.02,r=tu;kt(nt(i,"playerHips"),r.playerHips[0],r.playerHips[1]+n,r.playerHips[2]);const o=nt(i,"playerHips");o&&(o.position.x=.02);const a=nt(i,"playerTorso");a&&(a.rotation.set(r.playerTorso[0]+e*.5,r.playerTorso[1]+n*.5,r.playerTorso[2]),a.position.x=0,a.scale.set(1+e*.008,1+e*.012,1)),kt(nt(i,"playerHead"),r.playerHead[0]+e*.2,r.playerHead[1],r.playerHead[2]),kt(nt(i,"clavL"),...r.clavL),kt(nt(i,"clavR"),...r.clavR),kt(nt(i,"armL"),r.armL[0]+e*.08,r.armL[1],r.armL[2]),kt(nt(i,"forearmL"),...r.forearmL),kt(nt(i,"handL"),...r.handL),kt(nt(i,"armR"),r.armR[0]+s*.6,r.armR[1],r.armR[2]),kt(nt(i,"forearmR"),r.forearmR[0]-s*.5,r.forearmR[1],r.forearmR[2]),kt(nt(i,"handR"),r.handR[0]+s,r.handR[1],r.handR[2]+n*.6),kt(nt(i,"legL"),...r.legL),kt(nt(i,"legR"),...r.legR),kt(nt(i,"shinL"),bi(r.shinL[0]),0,0),kt(nt(i,"shinR"),bi(r.shinR[0]),0,0),kt(nt(i,"footL"),...r.footL),kt(nt(i,"footR"),...r.footR),je(nt(i,"handR"),.97),je(nt(i,"handL"),.3),Gs(i),Vs(i,e*.02)}const f_=.94,eu=.82;function pc(i){return Ri((Math.max(.25,i)-.3)/.68)}function za(i){return se(3.4,7.2,pc(i))}function p_(i){const t=se(.3,eu,pc(i));return 2*f_*Math.sin(t)*.92}function zr(i,t,e=.85,n=1){const s=Math.max(0,Math.min(1,n)),r=Math.max(.25,e),o=pc(r),a=Ri((r-.62)/.4),c=se(.3,eu,o)*s,l=fc(i,"tool_sword"),h=Math.sin(t),u=Math.sin(t+Math.PI),d=Math.max(0,-Math.cos(t)),f=Math.max(0,-Math.cos(t+Math.PI)),m=Math.max(0,Math.cos(t)),_=Math.max(0,Math.cos(t+Math.PI)),g=Math.max(0,h)*d,p=Math.max(0,u)*f,w=Math.max(0,-h)*(1-m),S=Math.max(0,-u)*(1-_),x=Math.cos(t*2),D=se(x*.016,-x*.052,a)*s,E=se(.72,1.95,a),R=se(.08,.42,a),I=nt(i,"playerHips"),y=nt(i,"playerTorso");I&&(I.rotation.y=h*se(.09,.2,a)*s,I.rotation.z=-Math.cos(t)*se(.03,.075,a)*s,I.rotation.x=se(0,.1,a)*s,I.position.x=-h*.018*s);const M=se(.5,.95,a);kt(nt(i,"legL"),h*c-d*M,0,.03-a*.02),kt(nt(i,"legR"),u*c-f*M,0,-.03+a*.02),kt(nt(i,"shinL"),bi(.12+d*E+g*.4+w*.18+m*R),0,0),kt(nt(i,"shinR"),bi(.12+f*E+p*.4+S*.18+_*R),0,0);const C=se(.34,.1,a),O=se(.26,.62,a);kt(nt(i,"footL"),-d*C+m*Math.max(0,h)*O+a*.12,0,0),kt(nt(i,"footR"),-f*C+_*Math.max(0,u)*O+a*.12,0,0);const H=se(.05,.16,a);if(kt(nt(i,"clavL"),-h*H*s,0,-.04),kt(nt(i,"clavR"),-u*H*s,0,.04),l){const J=Math.max(0,u)*se(.08,.22,a);kt(nt(i,"armL"),-h*se(.55,1.05,a)*s+.1,.06,-.06),kt(nt(i,"forearmL"),se(-.28,-1.35,a)-Math.max(0,h)*.2,.04,0),kt(nt(i,"handL"),.06,.04,.04),kt(nt(i,"armR"),.22+J*.35,.08,.14),kt(nt(i,"forearmR"),-.62-J*.4,-.06,.04),kt(nt(i,"handR"),.18+J*.2,-1.18,-.26),je(nt(i,"handR"),.96),je(nt(i,"handL"),.22)}else{const J=c*se(1,.85,a),X=se(0,1,a);kt(nt(i,"armL"),-h*J+se(.08,.3,a),.04+X*.16,-.12-X*.04),kt(nt(i,"armR"),-u*J+se(.08,.3,a),-.04-X*.16,.12+X*.04),kt(nt(i,"forearmL"),se(-.35-Math.max(0,h)*.4,-1.52-Math.max(0,-h)*.35,a),.06,0),kt(nt(i,"forearmR"),se(-.35-Math.max(0,u)*.4,-1.52-Math.max(0,-u)*.35,a),-.06,0),kt(nt(i,"handL"),-h*.12,.04,.04+X*.2),kt(nt(i,"handR"),-u*.12,-.04,-.04-X*.2),je(nt(i,"handL"),se(.28,.72,a)),je(nt(i,"handR"),se(.28,.72,a))}const G=se(.03,.26,a)*s;y&&(y.rotation.y=-h*se(.1,.2,a)*s,y.rotation.x=G,y.rotation.z=h*.03*s,y.position.x=-h*.01*s,y.position.z=0,y.scale.set(1,1,1)),kt(nt(i,"playerHead"),-G*.65-Math.max(0,-x)*.03,h*.05*s,-h*.02*s),Gs(i),Vs(i,D)}function nu(i,t){const e=Math.max(0,Math.min(1,t)),n=tu,s={playerHips:[.04,-.32,-.05],playerTorso:[-.12,-.55,-.08],playerHead:[-.1,.32,.06],clavR:[-.16,-.28,-.32],clavL:[.08,.16,.16],armR:[-2.23,-.47,1.1],forearmR:[-1.77,.14,0],handR:[.8,-1.9,-.8],armL:[-.55,.2,-.28],forearmL:[-1.05,.12,.08],handL:[.1,.16,.1],legL:[-.28,.08,.06],shinL:[.32,0,0],footL:[.02,.12,0],legR:[.16,-.06,-.05],shinR:[.22,0,0],footR:[.1,-.1,0],gripR:.96,gripL:.3,lift:.04},r={playerHips:[0,.26,.06],playerTorso:[.22,.48,.1],playerHead:[.1,.2,-.08],clavR:[.18,.14,.12],clavL:[.04,.06,.1],armR:[-1.7,-.48,-.74],forearmR:[-.65,-.5,0],handR:[.72,-1.9,-.25],armL:[-.35,.14,.22],forearmL:[-.7,.08,.06],handL:[.08,.08,.12],legL:[-.4,.06,-.04],shinL:[.22,0,0],footL:[.08,.08,0],legR:[.26,-.04,.04],shinR:[.4,0,0],footR:[-.04,-.06,0],gripR:1.08,gripL:.34,lift:.05},o={...r,playerHips:[-.02,.32,.06],playerTorso:[.18,.62,.12],playerHead:[.12,.28,-.08],clavR:[.2,.18,.12],clavL:[.04,.08,.12],armR:[-1.56,-1,-.9],forearmR:[-.98,-.5,0],handR:[.78,-1.9,.04],armL:[-.2,.16,.26],forearmL:[-.55,.08,.06],gripR:.98,lift:.03};let a;e<.36?a=Kn(n,s,Fn(e/.36)):e<.52?a=Kn(s,r,Math.pow((e-.36)/.16,2.1)):e<.64?a=Kn(r,o,Ri((e-.52)/.12)):a=Kn(o,n,Fn((e-.64)/.36)),Qh(i,a)}function Ba(i,t,e){const n=t%1,s=e==="tree",r=s?{playerHips:[.02,-.1,0],playerTorso:[.12,-.16,.04],playerHead:[.08,.12,0],clavR:[.06,-.1,-.08],clavL:[.04,.08,.1],armR:[.23,-.11,-.06],forearmR:[-1.43,.3,.06],handR:[-.04,-.56,-.4],armL:[.18,.16,.26],forearmL:[-.62,.1,.06],handL:[.1,.06,.08],legL:[-.12,.04,.04],shinL:[.24,0,0],legR:[.1,-.04,-.04],shinR:[.2,0,0],footL:[.04,.06,0],footR:[.04,-.06,0],gripR:.96,gripL:.28}:{playerHips:[.03,-.06,0],playerTorso:[.18,-.1,.02],playerHead:[.14,.06,0],clavR:[.08,-.06,-.06],clavL:[.04,.06,.1],armR:[.18,-.2,-.03],forearmR:[-1.35,.3,.06],handR:[-.07,-.58,-.45],armL:[.24,.14,.22],forearmL:[-.76,.08,.06],handL:[.12,.06,.08],legL:[-.1,.04,.04],shinL:[.3,0,0],legR:[.12,-.04,-.04],shinR:[.28,0,0],footL:[.04,0,0],footR:[.04,0,0],gripR:.96,gripL:.28},o=s?{playerHips:[.02,-.2,-.04],playerTorso:[-.12,-.32,-.06],playerHead:[-.02,.24,.04],clavR:[-.1,-.18,-.26],clavL:[.1,.12,.16],armR:[-2.49,.35,.03],forearmR:[-1.25,-.3,.06],handR:[.5,-1.9,-.45],armL:[.4,.26,.42],forearmL:[-.72,.12,.08],handL:[.14,.1,.1],legL:[-.22,.06,.05],shinL:[.28,0,0],legR:[.16,-.05,-.05],shinR:[.18,0,0],footL:[.02,.06,0],footR:[.08,-.06,0],gripR:.9,gripL:.26,lift:.045}:{playerHips:[.02,-.04,0],playerTorso:[-.2,-.08,0],playerHead:[-.14,.06,0],clavR:[-.18,-.04,-.22],clavL:[.08,.1,.18],armR:[-1.94,.76,-.6],forearmR:[-.1,-.27,.06],handR:[.5,-.94,-.45],armL:[-.44,.2,.36],forearmL:[-1.05,.12,.08],handL:[.12,.08,.1],legL:[-.14,.04,.04],shinL:[.14,0,0],legR:[.12,-.04,-.04],shinR:[.12,0,0],footL:[.1,0,0],footR:[.12,0,0],gripR:.9,gripL:.26,lift:.075},a=s?{playerHips:[0,.14,.05],playerTorso:[.4,.2,.08],playerHead:[.26,.1,-.04],clavR:[.18,.1,.12],clavL:[.02,.04,.1],armR:[-.57,.15,-.51],forearmR:[-1.36,-.3,.06],handR:[.5,-1.62,-.45],armL:[-.22,.12,.3],forearmL:[-.42,.06,.04],handL:[.06,.04,.12],legL:[-.34,.05,-.04],shinL:[.34,0,0],legR:[.24,-.04,.04],shinR:[.46,0,0],footL:[.06,.06,0],footR:[-.02,-.04,0],gripR:1.1,gripL:.34,lift:-.035}:{playerHips:[.14,.04,0],playerTorso:[.52,.06,.02],playerHead:[.3,.04,0],clavR:[.22,.04,.1],clavL:[.02,.04,.1],armR:[-1.01,-.8,.24],forearmR:[-.38,-.3,.06],handR:[.5,-.85,-.45],armL:[-.32,.16,.34],forearmL:[-.36,.06,.04],handL:[.06,.04,.12],legL:[-.42,.05,.05],shinL:[.72,0,0],legR:[-.34,-.05,-.05],shinR:[.66,0,0],footL:[-.16,0,0],footR:[-.14,0,0],gripR:1.12,gripL:.36,lift:-.09},c=s?{...a,playerTorso:[.3,.14,.06],playerHips:[0,.1,.04],clavR:[.14,.08,.1],armR:[-.21,.08,-.5],forearmR:[-1.68,-.3,.06],handR:[.5,-1.23,-.19],gripR:1,lift:.005}:{...a,playerTorso:[.4,.05,.02],playerHips:[.1,.03,0],clavR:[.18,.03,.08],armR:[-.58,.1,-.12],forearmR:[-1.1,-.2,.06],handR:[.4,-1.05,-.3],shinL:[.6,0,0],shinR:[.56,0,0],gripR:1.02,lift:-.04},l=s?.38:.46,h=s?.16:.14;let u;n<l?u=Kn(r,o,Fn(n/l)):n<l+h?u=Kn(o,a,Math.pow((n-l)/h,s?2:2.4)):n<l+h+.1?u=Kn(a,c,Ri((n-l-h)/.1)):u=Kn(c,r,Fn((n-l-h-.1)/(.9-l-h))),Qh(i,u)}function Yl(i,t,e=.55){const n=Math.max(0,Math.min(1,t)),s=Math.max(.2,Math.min(1.4,e)),r=Math.sin(n*Math.PI);i.rotation.z=r*.3*s,i.rotation.x=-r*(s>.7?.24:.13)*s;const o=s>.7?r*.3*(s-.7):r*.08*s,a=i.getObjectByName("playerTorso")||i.getObjectByName("yetiBody")||i.getObjectByName("orcBody");a&&(a.rotation.y=o,a.rotation.x=-r*.1*s)}function ws(i,t,e,n){let s=t-i;for(;s>Math.PI;)s-=Math.PI*2;for(;s<-Math.PI;)s+=Math.PI*2;const r=Math.sign(s)*Math.min(Math.abs(s),e*n);return i+r}function iu(i,t){const e=Math.max(0,Math.min(1,t)),n=nt(i,"yetiArmR"),s=nt(i,"yetiArmL"),r=nt(i,"yetiHead"),o=nt(i,"yetiBody"),a=nt(i,"yetiLegL"),c=nt(i,"yetiLegR");let l=0,h=0,u=0,d=0;if(e<.42){const f=Fn(Math.min(1,e/.3)),m=e>.3?1:f;l=-1.65*m,h=-.62*m,u=-.28*m,d=.4*m}else if(e<.62){const f=Fn((e-.42)/.2);l=-1.65+3.05*f,h=-.62+2.2*f,u=-.28+.7*f,d=.4+.3*f}else{const f=Ri((e-.62)/.38);l=1.4*(1-f),h=1.58*(1-f),u=.42*(1-f),d=.7*(1-f)}n&&(n.rotation.x=l,n.rotation.y=h*.7,n.rotation.z=h*.4),s&&(s.rotation.x=l*.7,s.rotation.y=-h*.3,s.rotation.z=-h*.18),r&&(r.rotation.x=-.15-d*.5,r.rotation.y=h*.14),o&&(o.rotation.x=.2+u,o.rotation.y=h*.22),a&&(a.rotation.x=u*.45),c&&(c.rotation.x=-u*.55),i.position.y=Math.max(0,u)*.08}function su(i,t){const e=Math.max(0,Math.min(1,t)),n=nt(i,"orcSpear"),s=nt(i,"orcArmR"),r=nt(i,"orcArmL"),o=nt(i,"orcHead"),a=nt(i,"orcBody"),c=nt(i,"orcLegL"),l=nt(i,"orcLegR");let h=0,u=0,d=0;if(e<.4){const f=Fn(Math.min(1,e/.28)),m=e>.28?1:f;h=m,u=-.52*m,d=-.2*m}else if(e<.58){const f=Fn((e-.4)/.18);h=1-f,u=-.52+1.95*f,d=-.2+.55*f}else{const f=Ri((e-.58)/.42);h=0,u=1.43*(1-f),d=.35*(1-f)}n&&Or(n,{rx:-u*.35,z:u*.22-h*.1,y:h*.04-u*.02}),s&&(s.rotation.x=-u*1.3+h*.55,s.rotation.z=h*.25,s.rotation.y=u*.18),r&&(r.rotation.x=h*.4+u*.3,r.rotation.z=.18),o&&(o.rotation.x=-u*.22+d*.35,o.rotation.y=u*.08),a&&(a.rotation.x=d,a.rotation.y=u*.16),c&&(c.rotation.x=d*.65+u*.32,c.rotation.z=-d*.05),l&&(l.rotation.x=-d*.85-u*.2,l.rotation.z=d*.04),i.position.y=Math.abs(d)*.07}function mi(i,t,e,n=1){const s=nt(i,"yetiArmR"),r=nt(i,"yetiArmL"),o=nt(i,"yetiLegL"),a=nt(i,"yetiLegR"),c=nt(i,"yetiHead"),l=nt(i,"yetiBody"),h=Math.max(0,Math.min(1,n));if(!e||h<.05){const g=Math.sin(t*1.15)*.045;s&&(s.rotation.x=g,s.rotation.y=0,s.rotation.z=.08),r&&(r.rotation.x=-g*.7,r.rotation.y=0,r.rotation.z=-.08),o&&o.rotation.set(.05,0,0),a&&a.rotation.set(-.05,0,0),c&&(c.rotation.x=-.12+g*.3),l&&(l.rotation.x=.2+g*.15),i.position.y=Math.abs(Math.sin(t*1.2))*.02;return}const d=t*3.1,f=.42*h,m=Jh(d)*f,_=Math.max(0,-Math.cos(d*2))*.065*h;o&&(o.rotation.x=m+.1,o.rotation.z=Math.sin(d)*.05),a&&(a.rotation.x=-m+.1,a.rotation.z=-Math.sin(d)*.05),s&&(s.rotation.x=-m*.85,s.rotation.z=.12,s.rotation.y=Math.sin(d)*.08),r&&(r.rotation.x=m*.85,r.rotation.z=-.12,r.rotation.y=-Math.sin(d)*.08),l&&(l.rotation.x=.22+_*.5,l.rotation.y=Math.sin(d)*.08*h,l.rotation.z=Math.sin(d)*.04*h),c&&(c.rotation.x=-.18-_,c.rotation.y=-Math.sin(d)*.05),i.position.y=_}function Ls(i,t,e,n=1){const s=nt(i,"orcArmL"),r=nt(i,"orcArmR"),o=nt(i,"orcLegL"),a=nt(i,"orcLegR"),c=nt(i,"orcSpear"),l=nt(i,"orcHead"),h=nt(i,"orcBody"),u=Math.max(0,Math.min(1,n));if(!e||u<.05){const p=Math.sin(t*1.6)*.028;i.position.y=Math.abs(p)*.5,s&&(s.rotation.x=p,s.rotation.z=-.16),r&&(r.rotation.x=-.18+p*.4,r.rotation.z=.16),c&&Or(c),h&&(h.rotation.x=.04),l&&(l.rotation.x=p*.4),o&&o.rotation.set(0,0,0),a&&a.rotation.set(0,0,0);return}const f=t*5.8,m=.48*u,_=Jh(f)*m,g=Math.max(0,-Math.cos(f*2))*.042*u;o&&(o.rotation.x=_,o.rotation.z=Math.sin(f)*.04),a&&(a.rotation.x=-_,a.rotation.z=-Math.sin(f)*.04),s&&(s.rotation.x=-_*.75,s.rotation.z=-.14),r&&(r.rotation.x=-.22-_*.12,r.rotation.z=.14),c&&Or(c,{rx:-_*.04,y:g*.3}),h&&(h.rotation.x=.08*u+g*.4,h.rotation.y=Math.sin(f)*.07*u),l&&(l.rotation.x=-.05,l.rotation.y=-Math.sin(f)*.04),i.position.y=g}function m_(i,t,e){const n=Math.max(0,Math.min(1,e)),s=Fn(Math.min(1,n/.55)),r=Ri(Math.max(0,(n-.35)/.65));if(t==="yeti"){i.rotation.z=s*1.25,i.rotation.x=s*.42+r*.15,i.position.y=-s*.45-r*.12,i.scale.setScalar(1.15*(1-r*.12));const o=nt(i,"yetiArmR"),a=nt(i,"yetiArmL");o&&(o.rotation.x=r*.8),a&&(a.rotation.x=-r*.5);const c=nt(i,"yetiHead");c&&(c.rotation.x=-.15+r*.6)}else if(t==="orc"){i.rotation.x=s*1.45,i.rotation.z=r*.25,i.position.y=-s*.18-r*.08,i.scale.setScalar(1-r*.22);const o=nt(i,"orcArmR"),a=nt(i,"orcArmL");o&&(o.rotation.x=-r*.9),a&&(a.rotation.x=r*.6);const c=nt(i,"orcSpear");c&&Or(c,{rx:r*.5,y:-r*.12})}else i.rotation.z=s*.7,i.rotation.x=r*.2,i.position.y=-s*.25-r*.05}const g_=.44,$l=.56,__=.48,v_=.62,x_=.45,M_=.58,Br=.78,kr=1.05,Hr=.82,y_=.36,w_=.42,S_=.4;class E_{renderer;scene;camera;hero;pivot;clock=new Wh;running=!1;raf=0;canvas;constructor(t){this.canvas=t,this.renderer=new ic({canvas:t,antialias:!0,alpha:!0}),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.renderer.outputColorSpace=De,this.renderer.toneMapping=Vr,this.renderer.toneMappingExposure=1.38,this.renderer.setClearColor(0,0),this.renderer.shadowMap.enabled=!0,this.scene=new Ds,this.scene.add(new Os(15923199,4872754,1.05));const e=new Sn(16774880,1.9);e.position.set(2.4,4.2,3.2),e.castShadow=!0,this.scene.add(e);const n=new Sn(13163775,.45);n.position.set(-3,1.6,-2.4),this.scene.add(n),this.camera=new He(32,1,.1,20);const s=new L(0,1,0);this.camera.position.setFromSpherical(new Xh(3.4,1.22,.55)).add(s),this.camera.lookAt(s),this.pivot=new Dt,this.hero=uc(),this.pivot.add(this.hero),this.scene.add(this.pivot);const r=new A(new gn(.55,32),new pe({color:0,transparent:!0,opacity:.28}));r.rotation.x=-Math.PI/2,r.position.y=.01,this.scene.add(r),this.resize()}setEnvironment(t){this.scene.environment=t}syncEquipment(t){Ue(this.hero,t.equipped.weapon?"sword":null)}showSlot(t,e){t==="weapon"&&e.equipped.weapon?Ue(this.hero,"sword"):t==="hatchet"&&e.equipped.hatchet?Ue(this.hero,"hatchet"):t==="pickaxe"&&e.equipped.pickaxe?Ue(this.hero,"pickaxe"):this.syncEquipment(e)}start(){if(this.running)return;this.running=!0,this.clock.getDelta(),this.resize();const t=()=>{if(!this.running)return;this.raf=requestAnimationFrame(t);const e=Math.min(.05,this.clock.getDelta());this.pivot.rotation.y+=e*.18,xi(this.hero,this.clock.elapsedTime),this.renderer.render(this.scene,this.camera)};t()}stop(){this.running=!1,cancelAnimationFrame(this.raf)}resize(){const t=Math.max(120,this.canvas.clientWidth||220),e=Math.max(160,this.canvas.clientHeight||280);this.renderer.setSize(t,e,!1),this.camera.aspect=t/e,this.camera.updateProjectionMatrix()}}function Xe(i,t={}){return new Me({color:i,roughness:t.roughness??.78,metalness:t.metalness??.08,...t})}function en(i,t){return t.castShadow=!0,i.add(t),t}function T_(i){return i==="bronze_sword"?Kh():i==="bronze_hatchet"?$h():i==="bronze_pickaxe"?Zh():i==="whisper_logs"?b_():i==="copper_ore"?Zl(12088115,9062940):i==="tin_ore"?Zl(13160660,9081494):i==="camp_rations"?A_():i==="yeti_fur"?R_():i==="frost_claw"?C_():i==="orc_tooth"?P_():i==="scout_leather"?L_():I_()}function b_(){const i=new Dt,t=Xe(6964260,{roughness:.92}),e=Xe(12886122,{roughness:.7});for(let n=0;n<3;n++){const s=new Dt,r=new A(new Qt(.055,.06,.42,8),t);r.rotation.z=Math.PI/2,en(s,r);for(const o of[-.21,.21]){const a=new A(new gn(.056,8),e);a.rotation.y=Math.PI/2,a.position.x=o,s.add(a)}s.position.set(0,(n-1)*.07,(n-1)*.04),s.rotation.z=(n-1)*.18,i.add(s)}return i}function Zl(i,t){const e=new Dt,n=Xe(t,{roughness:.95}),s=Xe(i,{roughness:.45,metalness:.55}),r=new A(new rn(.16,0),n);r.scale.set(1.15,.9,1.05),en(e,r);for(let o=0;o<4;o++){const a=o/4*Math.PI*2,c=new A(new rn(.055,0),o%2?s:n);c.position.set(Math.cos(a)*.12,o%2*.06-.02,Math.sin(a)*.1),c.rotation.set(a,o,.3),en(e,c)}return e}function A_(){const i=new Dt,t=Xe(9069112,{roughness:.88}),e=Xe(9054754,{roughness:.7}),n=new A(new Kt(.22,.1,.16),t);en(i,n);const s=new A(new We(.09,.01,6,12),Xe(3810324,{roughness:.9}));s.rotation.x=Math.PI/2,i.add(s);const r=new A(new Kt(.16,.03,.05),e);return r.position.y=.06,en(i,r),i}function R_(){const i=new Dt,t=Xe(15266038,{roughness:.97}),e=Xe(12110038,{roughness:.97}),n=new A(new ut(.14,10,8),t);n.scale.set(1.3,.45,1.1),en(i,n);for(let s=0;s<7;s++){const r=s/7*Math.PI*2,o=new A(new rn(.055,0),s%2?e:t);o.position.set(Math.cos(r)*.1,.04,Math.sin(r)*.08),o.scale.set(1.4,.55,1),o.rotation.y=r,en(i,o)}return i}function C_(){const i=new Dt,t=Xe(1909291,{roughness:.32,metalness:.4}),e=new A(new Ne(.045,.28,7),t);e.rotation.x=.55,en(i,e);const n=new A(new ut(.05,8,6),Xe(3817544,{roughness:.8}));return n.position.y=-.1,en(i,n),i}function P_(){const i=new Dt,t=new A(new Ne(.04,.26,7),Xe(15920084,{roughness:.4}));return t.rotation.z=.25,t.rotation.x=-.15,en(i,t),i}function L_(){const i=new Dt,t=Xe(7030054,{roughness:.86}),e=Xe(4073492,{roughness:.9}),n=new A(new Kt(.22,.04,.16),t);n.rotation.z=.12,en(i,n);const s=new A(new Kt(.14,.03,.12),e);return s.position.set(.02,.03,.01),s.rotation.z=-.2,en(i,s),i}function I_(){const i=new Dt;return en(i,new A(new Kt(.16,.16,.16),Xe(6710886))),i}const Jn=128,Kl=new Map;let vn=null,Mi=null,gi=null;function D_(){if(vn)return;vn=new ic({antialias:!0,alpha:!0,preserveDrawingBuffer:!0}),vn.setPixelRatio(1),vn.setSize(Jn,Jn,!1),vn.outputColorSpace=De,vn.toneMapping=Vr,vn.toneMappingExposure=1.35,vn.setClearColor(0,0),Mi=new Ds,Mi.add(new Os(16054271,4864552,1.05));const i=new Sn(16774364,1.8);i.position.set(2.2,3.4,2.6),Mi.add(i);const t=new Sn(13163775,.55);t.position.set(-2.4,1.2,-1.6),Mi.add(t),gi=new He(32,1,.02,20)}function U_(i){const t=new On().setFromObject(i),e=t.getSize(new L),n=t.getCenter(new L);i.position.sub(n);const s=Math.max(e.x,e.y,e.z,.08);gi.position.set(s*1.15,s*.55,s*1.7),gi.near=s*.05,gi.far=s*8,gi.updateProjectionMatrix(),gi.lookAt(0,0,0)}function N_(i){const t=Kl.get(i);if(t)return t;D_();const e=T_(i);i==="bronze_sword"&&e.rotation.set(0,.6,-.55),i==="bronze_hatchet"&&e.rotation.set(.2,.8,-.3),i==="bronze_pickaxe"&&e.rotation.set(.15,.7,-.25),Mi.add(e),U_(e),vn.render(Mi,gi);const n=document.createElement("canvas");return n.width=Jn,n.height=Jn,n.getContext("2d").drawImage(vn.domElement,0,0),Mi.remove(e),e.traverse(s=>{const r=s;r.geometry&&r.geometry.dispose()}),Kl.set(i,n),n}function Jl(i,t){const e=N_(t);i.width=Jn,i.height=Jn;const n=i.getContext("2d");n&&(n.clearRect(0,0,Jn,Jn),n.drawImage(e,0,0))}class F_{chatLog;invGrid;invCount;skillsList;skillsPanel;progressWrap;progressFill;progressLabel;targetInfo;targetName;targetHp;hpText;prayText;stamText;hpRing;prayRing;stamRing;minimap;minimapCtx;touchHint;inventory;btnInventory;gearPanel;btnGear;gearInspect;heroPane;narrowMq;desktopInvInited=!1;circum=2*Math.PI*28;onAction=null;onInventoryClick=null;onGearSlotClick=null;constructor(){this.chatLog=ce("chat-log"),this.invGrid=ce("inv-grid"),this.invCount=ce("inv-count"),this.skillsList=ce("skills-list"),this.skillsPanel=ce("skills-panel"),this.progressWrap=ce("progress-wrap"),this.progressFill=ce("progress-fill"),this.progressLabel=ce("progress-label"),this.targetInfo=ce("target-info"),this.targetName=ce("target-name"),this.targetHp=ce("target-hp"),this.hpText=ce("hp-text"),this.prayText=ce("pray-text"),this.stamText=ce("stam-text"),this.hpRing=ce("hp-ring"),this.prayRing=ce("pray-ring"),this.stamRing=ce("stam-ring"),this.minimap=ce("minimap"),this.minimapCtx=this.minimap.getContext("2d"),this.touchHint=ce("touch-hint"),this.inventory=ce("inventory"),this.btnInventory=ce("btn-inventory"),this.gearPanel=ce("gear-panel"),this.btnGear=ce("btn-gear"),this.gearInspect=ce("gear-inspect"),this.heroPane=new E_(ce("gear-hero")),this.narrowMq=window.matchMedia("(max-width: 480px)"),this.btnGear.addEventListener("click",()=>this.setGearOpen(this.gearPanel.hidden)),ce("gear-close").addEventListener("click",()=>this.setGearOpen(!1)),this.gearPanel.querySelectorAll(".gear-slot").forEach(e=>{e.addEventListener("click",()=>{const n=e.dataset.slot;n&&this.onGearSlotClick?.(n)})}),ce("btn-skills").addEventListener("click",()=>{this.skillsPanel.hidden=!this.skillsPanel.hidden}),ce("skills-close").addEventListener("click",()=>{this.skillsPanel.hidden=!0}),this.btnInventory.addEventListener("click",()=>{this.setInventoryOpen(this.inventory.hidden)}),ce("inv-close").addEventListener("click",()=>{this.setInventoryOpen(!1)});const t=()=>this.syncInventoryForViewport();typeof this.narrowMq.addEventListener=="function"?this.narrowMq.addEventListener("change",t):this.narrowMq.addListener(t),this.syncInventoryForViewport(),document.querySelectorAll(".ab-slot").forEach(e=>{e.addEventListener("click",()=>{const n=e.dataset.action;n&&this.onAction?.(n),e.classList.add("active"),setTimeout(()=>e.classList.remove("active"),120)})}),setTimeout(()=>this.touchHint.classList.add("fade"),8e3)}syncInventoryForViewport(){this.narrowMq.matches?(this.desktopInvInited=!1,this.setInventoryOpen(!1)):this.desktopInvInited||(this.desktopInvInited=!0,this.setInventoryOpen(!0))}setGearOpen(t){this.gearPanel.hidden=!t,this.btnGear.setAttribute("aria-expanded",t?"true":"false"),t?(this.heroPane.resize(),this.heroPane.start()):this.heroPane.stop()}isGearOpen(){return!this.gearPanel.hidden}setEnvironment(t){this.heroPane.setEnvironment(t)}setEquipment(t,e){this.heroPane.syncEquipment(t);for(const{id:n,label:s}of i_){const r=this.gearPanel.querySelector(`.gear-slot[data-slot="${n}"]`);if(!r)continue;const o=t.equipped[n],a=r.querySelector("canvas.item-icon"),c=r.querySelector(".gear-empty");if(r.classList.toggle("filled",!!o),o&&a){Jl(a,o),a.hidden=!1,c&&(c.hidden=!0);const l=Zn[o];r.title=`${s}: ${l?.name??o} (click to unequip)`}else a&&(a.hidden=!0),c&&(c.hidden=!1),r.title=`${s}: empty`}e&&(this.gearInspect.textContent=e)}inspectGear(t){this.gearInspect.textContent=t}showSlotPreview(t,e){this.heroPane.showSlot(t,e)}setInventoryOpen(t){this.inventory.hidden=!t,this.btnInventory.setAttribute("aria-expanded",t?"true":"false"),this.narrowMq.matches||(this.btnInventory.style.display=t?"none":"flex")}chat(t,e="system"){const n=document.createElement("div");for(n.className=`chat-line ${e==="plain"?"":e}`.trim(),n.textContent=t,this.chatLog.appendChild(n);this.chatLog.children.length>40;)this.chatLog.removeChild(this.chatLog.firstChild);this.chatLog.scrollTop=this.chatLog.scrollHeight}setOrbs(t,e,n,s){this.hpText.textContent=String(Math.round(t)),this.prayText.textContent=String(Math.round(n)),this.stamText.textContent=String(Math.round(s)),this.setRing(this.hpRing,t/e),this.setRing(this.prayRing,n/100),this.setRing(this.stamRing,s/100)}setRing(t,e){const n=Math.max(0,Math.min(1,e));t.style.strokeDasharray=String(this.circum),t.style.strokeDashoffset=String(this.circum*(1-n))}setInventory(t){this.invGrid.innerHTML="";const e=28;for(let n=0;n<e;n++){const s=document.createElement("div");s.className="inv-slot";const r=t[n];if(r){s.classList.add("has-item");const o=Zn[r.id],a=document.createElement("canvas");if(a.className="item-icon",a.width=128,a.height=128,Jl(a,r.id),s.appendChild(a),s.title=`${o?.name??r.id}${r.qty>1?` ×${r.qty}`:""}${o?.slot?" — click to equip":r.id==="camp_rations"?" — click to eat":""}`,r.qty>1){const l=document.createElement("span");l.className="inv-qty",l.textContent=String(r.qty),s.appendChild(l)}const c=n;s.addEventListener("click",()=>this.onInventoryClick?.(c))}this.invGrid.appendChild(s)}this.invCount.textContent=`${t.length}/${e}`}setSkills(t){this.skillsList.innerHTML="",Object.keys(zl).forEach(e=>{const n=t.skills[e],s=zl[e],r=document.createElement("div");r.className="skill-row";const o=Ur(n.level+1),a=Ur(n.level),c=n.level>=99?100:(n.xp-a)/(o-a)*100;r.innerHTML=`
        <div class="skill-icon">${s.icon}</div>
        <div class="skill-meta">
          <div class="skill-name">${s.name}</div>
          <div class="skill-xp"><div style="width:${c}%"></div></div>
        </div>
        <div class="skill-lvl">${n.level}</div>
      `,this.skillsList.appendChild(r)})}showProgress(t,e){this.progressWrap.hidden=!1,this.progressLabel.textContent=t,this.progressFill.style.width=`${Math.max(0,Math.min(100,e*100))}%`}hideProgress(){this.progressWrap.hidden=!0,this.progressFill.style.width="0%"}showTarget(t,e){this.targetInfo.hidden=!1,this.targetName.textContent=t,this.targetHp.style.width=`${Math.max(0,Math.min(100,e*100))}%`}hideTarget(){this.targetInfo.hidden=!0}drawMinimap(t,e,n,s){const r=this.minimapCtx,o=this.minimap.width,a=this.minimap.height,c=o/2,l=a/2,h=Math.min(o,a)/2-1;r.clearRect(0,0,o,a),r.save(),r.beginPath(),r.arc(c,l,h,0,Math.PI*2),r.clip();const u=r.createRadialGradient(c,l,4,c,l,h);u.addColorStop(0,"#4a7a30"),u.addColorStop(.65,"#2c4e20"),u.addColorStop(1,"#1a3014"),r.fillStyle=u,r.fillRect(0,0,o,a);for(let f=0;f<36;f++)r.fillStyle=f%2?"#3a6828":"#2e5420",r.fillRect(f*41%o,f*59%a,7,7);const d=3.2;for(const f of s){const m=c+(f.x-t)*d,_=l+(f.z-e)*d,g=m-c,p=_-l;g*g+p*p>(h-4)*(h-4)||(r.fillStyle=f.color,r.beginPath(),r.arc(m,_,3,0,Math.PI*2),r.fill())}r.save(),r.translate(c,l),r.rotate(n),r.fillStyle="#f0d070",r.beginPath(),r.moveTo(0,-6),r.lineTo(4,5),r.lineTo(0,2),r.lineTo(-4,5),r.closePath(),r.fill(),r.restore(),r.restore(),r.beginPath(),r.arc(c,l,h-.5,0,Math.PI*2),r.strokeStyle="#8a6a28",r.lineWidth=3,r.stroke(),r.beginPath(),r.arc(c,l,h-3,0,Math.PI*2),r.strokeStyle="rgba(212,168,75,0.35)",r.lineWidth=1.5,r.stroke(),r.fillStyle="#e8c060",r.beginPath(),r.moveTo(c,6),r.lineTo(c+5,14),r.lineTo(c-5,14),r.closePath(),r.fill(),r.fillStyle="#f0d070",r.font="bold 11px Segoe UI, system-ui, sans-serif",r.textAlign="center",r.fillText("N",c,26)}}function ce(i){const t=document.getElementById(i);if(!t)throw new Error(`Missing #${i}`);return t}const ru=[];function $e(i,t){let e=Math.imul(i|0,1597334677)^Math.imul(t|0,3812015801);return e=Math.imul(e^e>>>16,2146121005),e=Math.imul(e^e>>>15,2221713035),((e^e>>>16)>>>0)/4294967296}function jl(i){return i*i*i*(i*(i*6-15)+10)}function Kr(i,t){const e=Math.floor(i),n=Math.floor(t),s=i-e,r=t-n,o=jl(s),a=jl(r),c=$e(e,n),l=$e(e+1,n),h=$e(e,n+1),u=$e(e+1,n+1);return c+(l-c)*o+(h-c)*a+(c-l-h+u)*o*a}function Ji(i,t,e=5){let n=0,s=.5,r=1,o=0;for(let a=0;a<e;a++)n+=s*Kr(i*r,t*r),o+=s,s*=.5,r*=2.07;return n/o}function O_(i,t){const e=Ji(i*.31+17.2,t*.31-9.4,3),n=Ji(i*.31-8.1,t*.31+5.6,3);return Ji(i*.11+e*1.65,t*.11+n*1.65,5)}function mc(i,t){const e=Math.exp(-((i*.15+.05)**2)*8-(t*.12-.15)**2*3),n=Math.exp(-((i+.5-t*.35)**2)*2.2-(t-1.2)**2*.08),s=Math.exp(-((i+3.2-t*.15)**2)*1.4-(t+2.5)**2*.06);return Math.max(e,n*.85,s*.75)}function gc(i,t){const e=Math.exp(-((i-4.2)**2)*.09-(t-7.2)**2*.08),n=Math.exp(-((i-5.5)**2)*.15-(t-6)**2*.12);return Math.max(e,n*.85)}function z_(i,t){return Math.exp(-((i+2.05)**2+(t+.55)**2)*.11)}function ye(i,t){const e=(O_(i,t)-.5)*.38,n=(Ji(i*1.65+41.2,t*1.65-18.7,4)-.5)*.07,s=(Kr(i*7.2+3.1,t*7.2-2.4)-.5)*.022;let r=e+n+s;return r*=1-z_(i,t)*.84,r*=1-mc(i,t)*.38,r+=gc(i,t)*.045,r}function B_(i,t){return Ji(i*2.4+12.7,t*2.4-6.3,4)}function k_(i=48){const e=new dn(i,i,128,128),n=e.attributes.position,s=new Float32Array(n.count*3),r=new Et(7189564),o=new Et(9227338),a=new Et(5149230),c=new Et(11066466),l=new Et(4094508),h=new Et(10123848),u=new Et(7230512),d=new Et(15660795),f=new Et(13163754),m=new Et;for(let p=0;p<n.count;p++){const w=n.getX(p),x=-n.getY(p);n.setZ(p,ye(w,x));const D=mc(w,x),E=gc(w,x),R=B_(w,x),I=Kr(w*1.9+4.2,x*1.9-1.7);E>.24?(m.copy(d).lerp(f,R),m.lerp(r,1-Math.min(1,E*1.7))):D>.28?(m.copy(h).lerp(u,I),m.lerp(r,1-Math.min(1,D*1.4))):R>.72?m.copy(l).lerp(a,I*.45):(m.copy(r).lerp(R>.52?o:a,R*.7+I*.3),m.lerp(c,Math.max(0,I-.55)*.85)),s[p*3]=m.r,s[p*3+1]=m.g,s[p*3+2]=m.b}e.setAttribute("color",new tn(s,3)),e.computeVertexNormals();const _=H_(),g=new A(e,new Me({vertexColors:!0,roughness:.86,metalness:0,flatShading:!1,bumpMap:_,bumpScale:.22}));return g.rotation.x=-Math.PI/2,g.receiveShadow=!0,g.name="ground",g}function H_(){const t=document.createElement("canvas");t.width=256,t.height=256;const e=t.getContext("2d"),n=e.createImageData(256,256);for(let r=0;r<256;r++)for(let o=0;o<256;o++){const a=Ji(o*.11+2.2,r*.11-1.4,4),c=Kr(o*.55,r*.38),l=Math.floor((a*.62+c*.38)*255),h=(r*256+o)*4;n.data[h]=l,n.data[h+1]=l,n.data[h+2]=l,n.data[h+3]=255}e.putImageData(n,0,0);const s=new oc(t);return s.wrapS=es,s.wrapT=es,s.repeat.set(22,22),s.anisotropy=4,s.colorSpace=Mn,s}function G_(){const i=document.createElement("canvas");i.width=32,i.height=64;const t=i.getContext("2d"),e=t.createLinearGradient(16,64,16,0);e.addColorStop(0,"rgba(70, 130, 28, 0)"),e.addColorStop(.1,"rgba(96, 168, 40, 255)"),e.addColorStop(.5,"rgba(168, 220, 64, 255)"),e.addColorStop(1,"rgba(232, 255, 120, 240)"),t.fillStyle=e,t.beginPath(),t.moveTo(16,2),t.quadraticCurveTo(5,36,9,64),t.lineTo(23,64),t.quadraticCurveTo(27,36,16,2),t.fill();const n=new oc(i);return n.colorSpace=De,n.anisotropy=4,n}function V_(){const i=[],t=[];for(let s=0;s<5;s++){const r=s/5*Math.PI,o=Math.cos(r),a=Math.sin(r),c=.085+s%3*.02,l=.26+s%4*.07,h=[[-c,0,0],[c,0,0],[c,l,0],[-c,l,0]],u=[0,1,2,0,2,3];for(const d of u){const[f,m]=h[d];i.push(f*o,m,f*a),t.push(d===0||d===3?0:1,m/l)}}const n=new Pe;return n.setAttribute("position",new te(i,3)),n.setAttribute("uv",new te(t,2)),n.computeVertexNormals(),n}function W_(){const i=[],t=[],s=[[-.012,0,0],[.012,0,0],[.012,.16,0],[-.012,.16,0]];for(const a of[0,1,2,0,2,3]){const[c,l,h]=s[a];i.push(c,l,h),t.push(a===0||a===3?.45:.55,l/.16)}const r=.09;for(const a of[0,Math.PI/2]){const c=Math.cos(a),l=Math.sin(a),h=[[-r,.16-.01],[r,.16-.01],[r,.16+.07],[-r,.16+.07]];for(const u of[0,1,2,0,2,3]){const[d,f]=h[u];i.push(d*c,f,d*l),t.push(u===0||u===3?0:1,(f-.16+.01)/.08)}}const o=new Pe;return o.setAttribute("position",new te(i,3)),o.setAttribute("uv",new te(t,2)),o.computeVertexNormals(),o}function Ql(i,t){i.onBeforeCompile=e=>{e.uniforms.uTime={value:0},e.vertexShader=`uniform float uTime;
${e.vertexShader}`,e.vertexShader=e.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
       float hgt = max(transformed.y, 0.0);
       vec3 ip = vec3(instanceMatrix[3][0], instanceMatrix[3][1], instanceMatrix[3][2]);
       float t = uTime * 1.55 + ip.x * 0.82 + ip.z * 0.64;
       transformed.x += sin(t) * ${t.toFixed(3)} * hgt;
       transformed.z += cos(t * 0.88 + 0.35) * ${(t*.55).toFixed(3)} * hgt;`),ru.push(e)}}function Bo(i,t,e=.32,n=.22){return!(mc(i,t)>e||gc(i,t)>n||Math.hypot(i+1.2,t+.5)<1.55||Math.hypot(i+3.5,t+1.5)<1.35)}function X_(){const i=new Dt;i.name="terrainFoliage";const t=new Ae,e=new Uo({map:G_(),color:15400856,side:Te,alphaTest:.18});Ql(e,.55);const n=[],s=new Et(11853914),r=new Et(6989874),o=new Et,a=.5;for(let E=-20;E<=20;E+=a)for(let R=-20;R<=20;R+=a){const I=($e(Math.floor(E*20+3),Math.floor(R*20+9))-.5)*a*.92,y=($e(Math.floor(E*20+11),Math.floor(R*20+2))-.5)*a*.92,M=E+I,C=R+y,O=$e(Math.floor(M*17+4),Math.floor(C*19+8));if(O<.22||!Bo(M,C))continue;const H=.75+O*.7;n.push({x:M,z:C,h:ye(M,C),s:H,r:O*Math.PI*2,c:o.copy(s).lerp(r,$e(Math.floor(M*8),Math.floor(C*13)))})}const c=new Co(V_(),e,n.length);c.name="instancedGrass",c.castShadow=!1,c.receiveShadow=!0,c.instanceMatrix.setUsage(nd);const l=new Float32Array(n.length*3);n.forEach((E,R)=>{t.position.set(E.x,E.h,E.z),t.rotation.set(0,E.r,0),t.scale.setScalar(E.s),t.updateMatrix(),c.setMatrixAt(R,t.matrix),l[R*3]=E.c.r,l[R*3+1]=E.c.g,l[R*3+2]=E.c.b}),c.instanceColor=new As(l,3),c.instanceMatrix.needsUpdate=!0,c.frustumCulled=!1,c.raycast=()=>{},i.add(c);const h=new Uo({color:16777215,side:Te});Ql(h,.35);const u=[16774876,16768060,16738984,13142271,16747058],d=[],f=1.28;for(let E=-19;E<=19;E+=f)for(let R=-19;R<=19;R+=f){const I=($e(Math.floor(E*13+21),Math.floor(R*13+5))-.5)*f,y=($e(Math.floor(E*13+7),Math.floor(R*13+18))-.5)*f,M=E+I,C=R+y,O=$e(Math.floor(M*29+1),Math.floor(C*31+6));if(O<.28||!Bo(M,C,.26,.18))continue;const H=new Et(u[Math.floor(O*u.length)%u.length]);d.push({x:M,z:C,h:ye(M,C),s:.85+O*.55,r:O*6.2,c:H})}const m=new Co(W_(),h,d.length);m.name="instancedFlowers",m.castShadow=!1;const _=new Float32Array(d.length*3);d.forEach((E,R)=>{t.position.set(E.x,E.h,E.z),t.rotation.set(0,E.r,0),t.scale.setScalar(E.s),t.updateMatrix(),m.setMatrixAt(R,t.matrix),_[R*3]=E.c.r,_[R*3+1]=E.c.g,_[R*3+2]=E.c.b}),m.instanceColor=new As(_,3),m.instanceMatrix.needsUpdate=!0,m.frustumCulled=!1,m.raycast=()=>{},i.add(m);const g=new Uo({color:16777215,flatShading:!0}),p=[9079942,7236194,10130568,6054996],w=[],S=1.7;for(let E=-18.5;E<=18.5;E+=S)for(let R=-18.5;R<=18.5;R+=S){const I=($e(Math.floor(E*11+40),Math.floor(R*11+3))-.5)*S,y=($e(Math.floor(E*11+8),Math.floor(R*11+33))-.5)*S,M=E+I,C=R+y,O=$e(Math.floor(M*23+2),Math.floor(C*27+9));O<.55||Bo(M,C,.2,.16)&&w.push({x:M,z:C,h:ye(M,C),s:.7+O*1.1,rx:O*2.2,ry:O*5.1,c:new Et(p[Math.floor(O*p.length)%p.length])})}const x=new Co(new ii(.11,0),g,w.length);x.name="instancedStones",x.castShadow=!0,x.receiveShadow=!0;const D=new Float32Array(w.length*3);return w.forEach((E,R)=>{t.position.set(E.x,E.h+.04*E.s,E.z),t.rotation.set(E.rx,E.ry,E.rx*.4),t.scale.set(E.s*1.15,E.s*.7,E.s*1.05),t.updateMatrix(),x.setMatrixAt(R,t.matrix),D[R*3]=E.c.r,D[R*3+1]=E.c.g,D[R*3+2]=E.c.b}),x.instanceColor=new As(D,3),x.instanceMatrix.needsUpdate=!0,x.frustumCulled=!1,x.raycast=()=>{},i.add(x),i}function q_(i){for(const t of ru)t.uniforms.uTime.value=i}const th=new Map;function _e(i,t={}){const e=`${i}_${t.roughness??.78}_${t.metalness??.08}_${t.flatShading===!1?0:1}_${t.emissive??0}_${t.emissiveIntensity??0}`;let n=th.get(e);return n||(n=new Me({color:i,roughness:t.roughness??.78,metalness:t.metalness??.08,flatShading:t.flatShading??!0,envMapIntensity:t.envMapIntensity??.85,...t}),th.set(e,n)),n}function Gr(i,t=1.08,e=659976){const n=new A(i.geometry,new pe({color:e,side:Fe,depthWrite:!1}));n.scale.setScalar(t),n.name="outline",i.add(n)}function ou(i=0){const t=new Dt;t.name="tree";const e=1.55+i%5*.18,n=i%3===0?4862488:i%3===1?5913114:4074002,s=new A(new Qt(.16,.28,e,8),_e(n,{roughness:.95}));s.position.y=e/2,s.castShadow=!0,s.receiveShadow=!0,t.add(s);for(let h=0;h<3;h++){const u=h/3*Math.PI*2+i*.3,d=new A(new Kt(.05,e*(.55+h%2*.15),.07),_e(2758664,{roughness:1}));d.position.set(Math.cos(u)*.15,e*.45,Math.sin(u)*.15),d.rotation.y=u,t.add(d)}for(let h=0;h<3;h++){const u=new A(new We(.18+h*.02,.02,4,10),_e(3021836,{roughness:1}));u.rotation.x=Math.PI/2,u.position.y=.35+h*(e*.28),t.add(u)}const r=i%2===0?3109424:3835448,o=i%3===0?2254376:5016648,a=1856032;for(let h=0;h<5;h++){const u=.9-h*.12,d=h%3===0?r:h%3===1?o:a,f=new A(new Ne(u,1-h*.1,9),_e(d,{roughness:.88}));if(f.position.y=e+.22+h*.42,f.rotation.y=(i+h)*.45,f.castShadow=!0,t.add(f),h<3){const m=new A(new Ne(u*.55,.55,7),_e(1325080,{roughness:.95}));m.position.y=e+.35+h*.42,t.add(m)}}const c=new A(new Qt(.34,.44,.2,7),_e(3811344,{roughness:1}));c.position.y=.08,c.receiveShadow=!0,t.add(c);for(let h=0;h<4;h++){const u=h/4*Math.PI*2+i,d=new A(new Kt(.12,.1,.35),_e(3021836));d.position.set(Math.cos(u)*.28,.06,Math.sin(u)*.28),d.rotation.y=u,t.add(d)}const l=new A(new Qt(.55,.55,.2,8),new pe({visible:!1}));return l.position.y=.1,l.name="hit",t.add(l),t}function ka(i,t=0){const e=new Dt;e.name="rock";const n=new A(new ii(.55+t%3*.06,0),_e(t%2===0?6185576:5132888,{roughness:.9}));n.position.y=.4,n.rotation.set(.2,t,.1),n.castShadow=!0,n.receiveShadow=!0,e.add(n);const s=new A(new gn(.55,12),new pe({color:0,transparent:!0,opacity:.28,depthWrite:!1}));s.rotation.x=-Math.PI/2,s.position.y=.02,e.add(s);const r=new A(new ii(.28,0),_e(4869714));r.position.set(.35,.22,-.15),r.rotation.set(.4,t*.5,.2),r.castShadow=!0,e.add(r);const o=i==="copper"?12088115:12632264;for(let l=0;l<4;l++){const h=new A(new ut(.1+l%2*.03,6,4),_e(o,{metalness:.55,roughness:.4,emissive:o,emissiveIntensity:.15})),u=l/4*Math.PI*2+t;h.position.set(Math.cos(u)*.32,.42+l%2*.18,Math.sin(u)*.32),e.add(h)}const a=new A(new ut(.14,5,4),_e(3828272,{roughness:1}));a.position.set(-.25,.55,.2),a.scale.set(1.2,.5,1),e.add(a);const c=new A(new ut(.75,8,6),new pe({visible:!1}));return c.position.y=.4,c.name="hit",e.add(c),e}function au(){const i=new Dt;i.name="dummy";const t=(h,u={})=>new Me({color:h,roughness:u.roughness??.85,metalness:u.metalness??.05,flatShading:!0,...u}),e=new A(new Qt(.08,.1,1.4,6),t(5913114));e.position.y=.7,e.castShadow=!0,i.add(e);const n=new A(new Qt(.28,.32,.7,8),t(9071168));n.position.y=1.15,n.castShadow=!0,n.name="dummyBody",Gr(n,1.06,1708040),i.add(n);const s=new A(new ut(.22,8,6),t(12886112));s.position.y=1.65,s.name="dummyHead",i.add(s);const r=t(4857872),o=new A(new Kt(.35,.06,.04),r);o.position.set(0,1.2,.3),o.rotation.z=.6,i.add(o);const a=o.clone();a.rotation.z=-.6,i.add(a);const c=new A(new Qt(.4,.45,.12,8),t(3811861));c.position.y=.06,c.receiveShadow=!0,i.add(c);const l=new A(new Qt(.45,.45,1.8,8),new pe({visible:!1}));return l.position.y=.9,l.name="hit",i.add(l),i}function Y_(i,t=140){const e=[];i.traverse(s=>{s.isMesh&&s.name!=="hit"&&s.name!=="outline"&&e.push(s)});const n=[];for(const s of e){const r=s.material;!r||!r.emissive||(n.push({mesh:s,emissive:r.emissive.clone(),intensity:r.emissiveIntensity??0}),r.emissive.setHex(16772778),r.emissiveIntensity=.85)}setTimeout(()=>{for(const s of n){const r=s.mesh.material;r.emissive.copy(s.emissive),r.emissiveIntensity=s.intensity}},t)}function cu(){const i=new Dt;for(let s=0;s<8;s++){const r=new A(new ii(.12,0),_e(5921368)),o=s/8*Math.PI*2;r.position.set(Math.cos(o)*.45,.08,Math.sin(o)*.45),r.rotation.set(Math.random(),o,.2),r.castShadow=!0,i.add(r)}for(let s=0;s<5;s++){const r=new A(new Qt(.06,.07,.7,5),_e(4860432));r.rotation.z=Math.PI/2,r.rotation.y=s/5*Math.PI*2,r.position.y=.1,i.add(r)}const t=new A(new Ne(.2,.55,5),new Me({color:16737826,emissive:16729088,emissiveIntensity:1.4,flatShading:!0,transparent:!0,opacity:.92}));t.position.y=.42,t.name="flame",i.add(t);const e=new A(new ut(.18,8,6),new pe({color:16755268,transparent:!0,opacity:.35,depthWrite:!1}));e.position.y=.28,e.name="flameGlow",i.add(e);const n=new lc(16746564,1.6,14);return n.position.y=.65,n.castShadow=!1,i.add(n),i}function lu(){const i=new Dt,t=_e(6967344,{roughness:.92,side:Te}),e=_e(4864024,{roughness:.94,side:Te}),n=new A(new Qt(.035,.035,1.55,6),_e(3811856,{roughness:1}));n.rotation.z=Math.PI/2,n.position.y=1.18,i.add(n);for(const a of[-1,1]){const c=new A(new dn(1.55,1.42),t);c.position.set(a*.52,.62,0),c.rotation.y=a*-.72,c.castShadow=!0,c.receiveShadow=!0,i.add(c);const l=new A(new dn(1.5,1.36),e);l.position.set(a*.5,.62,0),l.rotation.y=a*-.72+Math.PI,i.add(l)}const s=new A(new dn(1.05,1.05),e);s.position.set(0,.52,-.72),s.castShadow=!0,i.add(s);const r=new A(new dn(.42,.85),e);r.position.set(-.18,.42,.7),r.rotation.y=.35,i.add(r);const o=new A(new dn(.42,.85),t);o.position.set(.22,.42,.68),o.rotation.y=-.55,i.add(o);for(const[a,c]of[[-.9,-.9],[.9,-.9],[-.9,.9],[.9,.9]]){const l=new A(new Qt(.03,.03,.25,4),_e(3811856));l.position.set(a*.85,.12,c*.85),i.add(l)}return i}function Ha(){const i=new Dt,t=new A(new Kt(.55,.4,.45),_e(6965800));t.position.y=.2,t.castShadow=!0,t.receiveShadow=!0,i.add(t);const e=new A(new Kt(.58,.06,.48),_e(5913114));return e.position.y=.43,i.add(e),i}function Cr(){const i=new Dt,t=new A(new Qt(.28,.3,.55,10),_e(5913114));t.position.y=.28,t.castShadow=!0,i.add(t);const e=new A(new We(.29,.025,6,12),_e(9079434,{metalness:.5}));return e.rotation.x=Math.PI/2,e.position.y=.35,i.add(e),i}function Ga(){const i=new Dt,t=new A(new Qt(.14,.14,.7,8),_e(3820138));return t.rotation.z=Math.PI/2,t.position.y=.12,t.castShadow=!0,i.add(t),i}function $_(i=60){const t=new ut(i,24,12),e=new Float32Array(t.attributes.position.count*3),n=t.attributes.position,s=new Et(4888288),r=new Et(9354472),o=new Et(15914660),a=new Et;for(let l=0;l<n.count;l++){const h=n.getY(l)/i,u=Math.max(0,Math.min(1,(h+.15)/1));u<.45?a.copy(o).lerp(r,u/.45):a.copy(r).lerp(s,(u-.45)/.55),e[l*3]=a.r,e[l*3+1]=a.g,e[l*3+2]=a.b}t.setAttribute("color",new tn(e,3));const c=new A(t,new pe({vertexColors:!0,side:Fe,depthWrite:!1,fog:!1}));return c.name="sky",c}function hu(){const i=new Dt;i.name="yeti";const t=(Q,K={})=>new Me({color:Q,roughness:K.roughness??.92,metalness:K.metalness??.02,flatShading:!1,...K}),e=t(15003126,{roughness:.94}),n=t(12242914,{roughness:.9}),s=t(13359848,{roughness:.96}),r=t(9677503,{roughness:.97}),o=t(4871782,{roughness:.88}),a=t(3292234,{roughness:.9}),c=t(1909291,{roughness:.3,metalness:.4}),l=t(2236458,{roughness:.5}),h=t(6038576,{roughness:.85}),u=t(15920084,{roughness:.4}),d=(Q,K,lt,xt,Pt,q,st,_t=.5,ht=e,gt=s)=>{for(let Lt=0;Lt<q;Lt++){const Ut=Lt/q*Math.PI*2+Pt*9,Wt=st*(.82+Lt%3*.12),rt=new A(new rn(Wt,0),Lt%2?gt:ht);rt.position.set(K+Math.cos(Ut)*Pt*.8,lt-Wt*.45,xt+Math.sin(Ut)*Pt*.8),rt.rotation.set(_t*(.8+Lt%3*.2),Math.PI/2-Ut,Lt%4*.16),rt.scale.set(1.7,.55,.95),rt.castShadow=!0,Q.add(rt)}},f=(Q,K,lt,xt,Pt,q)=>{const st=new A(new Ne(q,Pt,6),c);st.rotation.x=Math.PI/2+.45,st.position.set(K,lt,xt),st.castShadow=!0,Q.add(st)},m=new A(new gn(.85,20),new pe({color:0,transparent:!0,opacity:.42,depthWrite:!1}));m.name="contactShadow",m.rotation.x=-Math.PI/2,m.position.y=.03,i.add(m);const _=Q=>{const K=new Dt,lt=new A(new ee(.22,.35,6,12),e);lt.position.set(0,.55,.05),lt.rotation.x=.25,lt.castShadow=!0,K.add(lt),d(K,0,.68,.06,.235,14,.07,.45);const xt=new A(new ee(.18,.28,6,12),n);xt.position.set(0,.22,.12),xt.rotation.x=-.15,xt.castShadow=!0,K.add(xt),d(K,0,.4,.1,.195,13,.06,.4,s,r);const Pt=new A(new ut(.2,12,10),e);Pt.position.set(0,.08,.16),Pt.scale.set(.95,.44,1.25),Pt.castShadow=!0,K.add(Pt);const q=new A(new ut(.13,10,8),a);q.position.set(0,.035,.2),q.scale.set(.9,.22,1),K.add(q);for(let st=0;st<4;st++){const _t=(st-1.5)*.078,ht=new A(new ut(.055,8,6),e);ht.position.set(_t,.055,.3),ht.scale.set(1,.8,1.25),K.add(ht),f(K,_t,.05,.37,.11,.026)}return K.position.x=Q*.32,K},g=_(-1);g.name="yetiLegL",i.add(g);const p=_(1);p.name="yetiLegR",i.add(p);const w=new A(new ee(.55,.55,6,12),e);w.position.set(0,1.35,-.08),w.scale.set(1.15,1,.95),w.rotation.x=.2,w.castShadow=!0,w.name="yetiBody",Gr(w,1.06,660768),i.add(w),d(i,0,1.14,-.04,.68,24,.095,.5),d(i,0,1.74,-.1,.66,22,.09,.7,s,r);const S=new A(new ut(.38,12,10),n);S.position.set(0,1.15,.28),S.scale.set(1.1,1,.55),i.add(S);const x=(Q,K,lt,xt,Pt,q=e)=>{const st=new A(new ee(.08*Pt,.22*Pt,5,10),q);st.position.set(K,lt,xt),st.rotation.x=-.45,st.rotation.z=(K>0?1:K<0?-1:0)*.12*Pt,st.castShadow=!0,Q.add(st);for(let _t=0;_t<3;_t++){const ht=_t/3*Math.PI*2+Pt,gt=new A(new ee(.028*Pt,.16*Pt,4,8),_t%2===0?s:q);gt.position.set(K+Math.cos(ht)*.05*Pt,lt+.03*Pt,xt+Math.sin(ht)*.04*Pt),gt.rotation.x=-.55,gt.rotation.z=(K>0?1:-1)*.14,gt.castShadow=!0,Q.add(gt)}};x(w,-.42,.42,-.12,1.05),x(w,.42,.42,-.12,1.05),x(w,0,.52,-.28,1,s),x(w,-.28,.48,.12,.75,n),x(w,.28,.48,.12,.75,n);const D=Q=>{const K=new Dt;K.name=Q<0?"yetiArmL":"yetiArmR",K.position.set(Q*.68,1.72,.08),K.rotation.z=Q*.28,K.rotation.x=-.22;const lt=new A(new ee(.2,.38,6,12),e);lt.position.set(0,-.22,0),lt.castShadow=!0,K.add(lt),d(K,0,-.02,0,.215,13,.072,.6),d(K,0,-.4,0,.205,12,.062,.45,s,r);const xt=new Dt;xt.position.set(0,-.46,0),xt.rotation.x=-.38;const Pt=new A(new ee(.16,.32,6,12),n);Pt.position.set(0,-.2,0),Pt.castShadow=!0,xt.add(Pt),d(xt,0,-.3,0,.175,12,.055,.4,s,r);const q=new Dt;q.position.set(0,-.4,.05);const st=new A(new ut(.17,10,8),e);st.scale.set(1,.85,.95),st.castShadow=!0,q.add(st);const _t=new A(new ut(.11,10,8),a);_t.position.set(0,-.02,.1),_t.scale.set(1,.95,.35),q.add(_t);for(let gt=0;gt<4;gt++){const Lt=(gt-1.5)*.075,Ut=new A(new ut(.05,8,6),e);Ut.position.set(Lt,-.05,.14),Ut.scale.set(1,.9,1.2),q.add(Ut),f(q,Lt,-.06,.22,.12,.026)}const ht=new A(new ut(.055,8,6),e);return ht.position.set(Q*.13,-.01,.06),q.add(ht),f(q,Q*.17,-.02,.12,.1,.024),xt.add(q),K.add(xt),K};i.add(D(-1)),i.add(D(1));const E=new Dt;E.name="yetiHead",E.position.set(0,2.15,.15),E.rotation.x=-.15;const R=new A(new ut(.38,14,12),e);R.scale.set(1.05,.95,1.1),R.castShadow=!0,Gr(R,1.08,660768),E.add(R),x(E,0,.28,-.18,.85,s),x(E,-.22,.22,-.08,.7),x(E,.22,.22,-.08,.7);const I=new A(new ut(.34,16,14),o);I.scale.set(.84,.74,.76),I.position.set(0,-.08,.18),E.add(I);const y=new A(new ut(.27,16,12),a);y.scale.set(.96,.34,.6),y.position.set(0,.125,.2),E.add(y);for(const Q of[-1,1]){const K=new A(new ut(.078,10,8),a);K.scale.set(1.1,.46,.62),K.rotation.z=Q*-.3,K.position.set(Q*.15,.105,.345),E.add(K)}const M=Q=>{const K=new A(new ut(.068,12,10),a);K.scale.set(1.1,.9,.6),K.position.set(Q,.04,.355),E.add(K);const lt=new A(new ut(.044,12,10),t(15771704,{emissive:12609536,emissiveIntensity:.55,roughness:.25}));lt.scale.set(1,.86,.75),lt.position.set(Q,.04,.395),lt.name="yetiEye",E.add(lt);const xt=new A(new ee(.008,.036,3,6),t(1313284));xt.position.set(Q,.04,.428),E.add(xt);const Pt=new lc(16750848,.18,1.2);Pt.name="yetiEyeLight",Pt.position.set(Q,.05,.52),E.add(Pt)};M(-.145),M(.145);const C=new A(new ee(.055,.1,5,10),o);C.rotation.x=Math.PI/2-.4,C.position.set(0,.015,.42),E.add(C);const O=new A(new ut(.175,14,12),o);O.scale.set(1,.8,1),O.position.set(0,-.1,.44),E.add(O);const H=new A(new ut(.052,12,10),l);H.scale.set(1.3,.8,.85),H.position.set(0,-.03,.585),E.add(H);for(const Q of[-1,1]){const K=new A(new ut(.014,8,6),t(920592));K.position.set(Q*.03,-.047,.608),E.add(K)}const G=new A(new ut(.145,12,10),h);G.scale.set(1,.62,.7),G.position.set(0,-.2,.46),E.add(G);const J=new A(new ut(.17,12,10),o);J.scale.set(1,.5,.9),J.position.set(0,-.27,.41),E.add(J),d(E,0,-.32,.24,.27,11,.052,.6,s,r);const X=(Q,K,lt)=>{const xt=new A(new Ne(.021,.08,7),u);xt.rotation.x=lt?Math.PI:0,xt.position.set(Q,K,.535),E.add(xt)};X(-.082,-.16,!0),X(.082,-.16,!0),X(-.07,-.245,!1),X(.07,-.245,!1);for(let Q=0;Q<5;Q++){const K=new A(new Kt(.022,.028,.022),u);K.position.set(-.08+Q*.04,-.178,.542),E.add(K)}for(const Q of[-1,1]){const K=new A(new ut(.08,10,8),e);K.position.set(Q*.28,.18,-.08),K.scale.set(.7,.85,.55),E.add(K);const lt=new A(new ut(.045,8,6),o);lt.scale.set(.5,.85,.55),lt.position.set(Q*.3,.18,-.05),E.add(lt)}d(E,0,.02,-.08,.43,16,.08,.55,e,s),i.add(E);const it=new A(new Ne(.12,.38,8,1,!0),new Me({color:13694719,emissive:6745855,emissiveIntensity:.9,transparent:!0,opacity:.32,flatShading:!1,side:Te,depthWrite:!1}));it.rotation.x=Math.PI/2,it.position.set(0,-.15,.62),it.name="yetiBreath",E.add(it);for(let Q=0;Q<3;Q++){const K=new A(new ut(.07+Q*.025,6,5),new pe({color:12118271,transparent:!0,opacity:.22-Q*.04,depthWrite:!1}));K.position.set((Q-1)*.04,-.13,.75+Q*.1),K.name="yetiBreathMist",E.add(K)}const V=new A(new Qt(.85,.95,2.4,10),new pe({visible:!1}));return V.position.y=1.2,V.name="hit",i.add(V),i.scale.setScalar(1.15),i}function yr(i,t){const e=i.getObjectByName("yetiArmR"),n=i.getObjectByName("yetiArmL"),s=Math.max(0,Math.min(1,t));let r=0,o=0;if(s<=0)r=0,o=0;else if(s<.35){const c=s/.35;r=-1.35*c,o=-.4*c}else if(s<.55){const c=(s-.35)/.2;r=-1.35+2.4*c,o=-.4+1.6*c}else{const c=(s-.55)/.45;r=1.05*(1-c),o=1.2*(1-c)}e&&(e.rotation.x=r,e.rotation.y=o*.55),n&&(n.rotation.x=r*.55);const a=i.getObjectByName("yetiHead");a&&(a.rotation.x=-.15-Math.min(s,1)*.2)}function Z_(){const i=new Dt;i.name="snowProps";const t=_e(15266552,{roughness:.78}),e=_e(11063528,{roughness:.35,metalness:.15,emissive:4491434,emissiveIntensity:.12}),n=_e(6975608,{roughness:.92}),s=[[3.2,6.4,.9],[5.4,8,1.1],[4.8,5.8,.7],[2.6,7.8,.85],[5.8,6.6,.75],[3.6,8.6,.95]];for(const[r,o,a]of s){const c=new A(new ii(.35*a,0),t);if(c.position.set(r,.12*a,o),c.scale.set(1.4,.55,1.2),c.castShadow=!0,c.receiveShadow=!0,i.add(c),a>.85){const l=new A(new ti(.18*a,0),e);l.position.set(r+.15,.28*a,o-.1),l.rotation.set(.3,.5,.2),i.add(l)}}for(const[r,o]of[[6.2,7.5],[2.2,6]]){const a=new A(new ii(.4,0),n);a.position.set(r,.25,o),a.castShadow=!0,i.add(a);const c=new A(new ut(.28,6,4),t);c.position.set(r,.48,o),c.scale.set(1.2,.45,1),i.add(c)}return i}function K_(){const i=new Dt;i.name="godRays";const t=new pe({color:16773320,transparent:!0,opacity:.09,depthWrite:!1,side:Te});for(let e=0;e<5;e++){const n=new A(new dn(1.2+e*.15,18),t);n.position.set(-4+e*2.4,9,-2+e%3*3),n.rotation.z=-.35-e*.04,n.rotation.y=.25,i.add(n)}return i}function uu(){const i=new Dt;i.name="orc";const t=(N,U={})=>new Me({color:N,roughness:U.roughness??.85,metalness:U.metalness??.05,flatShading:!1,...U}),e=t(9412694,{roughness:.82}),n=t(6189112,{roughness:.88}),s=t(2762544,{roughness:.96}),r=t(3946564,{roughness:.94}),o=t(7030054,{roughness:.82}),a=t(4073492,{roughness:.88}),c=t(9133882,{roughness:.7}),l=t(11309160,{roughness:.97}),h=t(8218435,{roughness:.97}),u=t(3356730,{roughness:.93}),d=t(13686494,{metalness:.82,roughness:.2}),f=t(4861972,{roughness:.88}),m=t(16117988,{roughness:.4,metalness:.08}),_=(N,U=i,ot)=>(N.castShadow=!0,N.receiveShadow=!0,ot&&Gr(N,ot,659976),U.add(N),N),g=(N,U,ot,ct,T,v,B=0)=>{const Z=new A(new We(T,v,6,14),l);Z.rotation.x=Math.PI/2,Z.position.set(U,ot,ct),Z.castShadow=!0,N.add(Z);for(let tt=0;tt<B;tt++){const j=tt/B*Math.PI*2+.3,yt=new A(new rn(v*1.45,0),tt%2?h:l);yt.position.set(U+Math.cos(j)*T,ot+tt%2*v*.4,ct+Math.sin(j)*T),yt.rotation.set(.3,j,.2),yt.scale.set(1.2,.8,1.1),yt.castShadow=!0,N.add(yt)}},p=new A(new gn(.4,18),new pe({color:0,transparent:!0,opacity:.4,depthWrite:!1}));p.name="contactShadow",p.rotation.x=-Math.PI/2,p.position.y=.03,i.add(p);const w=N=>{const U=new Dt,ot=new A(new ee(.12,.22,5,12),u);ot.position.set(0,.62,0),_(ot,U);const ct=new A(new ee(.1,.12,5,12),u);ct.position.set(0,.36,.015),_(ct,U);const T=new A(new Qt(.11,.12,.16,12),o);T.position.set(0,.2,.02),_(T,U,1.05);const v=new A(new Qt(.055,.07,.1,12),a);v.position.set(0,.08,.03),_(v,U);const B=new A(new ee(.07,.14,4,10),a);B.rotation.x=Math.PI/2,B.position.set(0,.04,.1),B.scale.set(1.1,1,.7),_(B,U);for(const Z of[-1,1]){const tt=new A(new Kt(.03,.22,.018),c);tt.position.set(0,.16,.02),tt.rotation.z=Z*.7,U.add(tt)}return g(U,0,.29,.02,.114,.02,6),U.position.x=N*.18,U},S=w(-1);S.name="orcLegL",i.add(S);const x=w(1);x.name="orcLegR",i.add(x);const D=new A(new Qt(.24,.27,.22,14),o);D.position.y=.78,_(D,i);for(const[N,U]of[[.18,0],[-.18,Math.PI]]){const ot=new rs;ot.moveTo(-.14,0),ot.lineTo(.14,0),ot.lineTo(0,-.22),ot.closePath();const ct=new A(new Ti(ot,{depth:.04,bevelEnabled:!1}),a);ct.position.set(0,.72,N),ct.rotation.y=U,_(ct,i)}for(const N of[-1,1]){const U=new rs;U.moveTo(-.1,0),U.lineTo(.1,0),U.lineTo(0,-.18),U.closePath();const ot=new A(new Ti(U,{depth:.035,bevelEnabled:!1}),c);ot.position.set(N*.24,.72,0),ot.rotation.y=N*Math.PI*.5,_(ot,i)}const E=new A(new Qt(.25,.27,.55,14),o);E.position.y=1.12,_(E,i,1.07),E.name="orcBody";const R=new A(new Kt(.42,.32,.16),c);R.position.set(0,1.2,.14),_(R,i);for(const N of[-1,1]){const U=new A(new ut(.11,12,10),e);U.position.set(N*.34,1.38,0),U.scale.set(.9,.85,1),_(U,i)}const I=new A(new Qt(.3,.3,.09,10),a);I.position.y=.88,_(I,i);const y=new A(new Kt(.11,.08,.05),d);y.position.set(0,.88,.29),i.add(y);const M=(N,U=.22)=>{const ot=new A(new Kt(.08,.58,.038),a);ot.position.set(0,1.18,U),ot.rotation.z=N,i.add(ot);for(const ct of[-.18,.18]){const T=new A(new ut(.018,5,4),d);T.position.set(Math.sin(N)*ct*.15,1.18+Math.cos(N)*ct,U+.025),i.add(T)}};M(.55,.27),M(-.55,.27),M(.55,-.27),M(-.55,-.27);const C=new A(new Qt(.04,.04,.04,6),d);C.rotation.x=Math.PI/2,C.position.set(0,1.18,-.29),i.add(C);const O=new A(new ti(.075,0),d);O.scale.set(1.15,.9,.45),O.position.set(0,1.18,.29),i.add(O);const H=new A(new Kt(.12,.14,.08),c);H.position.set(.28,.82,.12),_(H,i);for(const[N,U]of[[0,.11],[Math.PI,-.11]]){const ot=new A(new We(.19,.045,6,12,Math.PI*1.05),l);ot.rotation.set(Math.PI/2,0,N-Math.PI*.52),ot.position.set(0,1.4,U),ot.scale.set(1.5,1,1),_(ot,i)}for(let N=0;N<13;N++){const U=N/13*Math.PI*2+.28,ot=new A(new rn(.052,0),N%2?h:l);ot.position.set(Math.cos(U)*.285,1.38+N%3*.02,Math.sin(U)*.175),ot.rotation.set(.35,Math.PI/2-U,.2),ot.scale.set(1.5,.7,1),_(ot,i)}const G=N=>{const U=new Dt;U.name=N<0?"orcArmL":"orcArmR";const ot=new A(new ee(.09,.22,5,12),e);ot.position.set(0,0,0),ot.rotation.z=N*.22,_(ot,U);const ct=new A(new Qt(.072,.088,.24,12),o);ct.position.set(N*.11,-.31,.02),ct.rotation.z=N*.14,_(ct,U,1.04);for(const Z of[-1,1]){const tt=new A(new Kt(.024,.22,.014),a);tt.position.set(N*.1,-.31,.03),tt.rotation.z=N*.16+Z*.55,U.add(tt)}g(U,N*.07,-.17,.02,.094,.017,0);const T=new Dt;T.position.set(N*.14,-.48,.03);const v=new A(new ut(.062,10,8),e);v.scale.set(.85,1,.95),_(v,T);for(let Z=0;Z<4;Z++){const tt=new A(new ee(.016,.05,3,6),e);tt.position.set((Z-1.5)*.03,-.05,.045),tt.rotation.x=1.15,T.add(tt)}const B=new A(new ee(.016,.045,3,6),e);return B.position.set(N*.05,-.015,.05),B.rotation.set(.9,0,N*.8),T.add(B),U.add(T),U.position.set(N*.32,1.3,0),U};i.add(G(-1));const J=G(1);i.add(J);const X=new A(new Qt(.095,.115,.22,10),e);X.position.set(0,1.46,.005),_(X,i);const it=new A(new ut(.17,12,10),e);it.scale.set(1.25,.55,.9),it.position.set(0,1.37,0),_(it,i);const V=new Dt;V.name="orcHead",V.position.set(0,1.72,.008);const Q=new A(new ut(.19,14,12),e);Q.scale.set(1.05,1.05,.95),_(Q,V,1.1);const K=new A(new ut(.15,14,10),e);K.scale.set(1.04,.34,.58),K.position.set(0,.098,.088),_(K,V);for(const N of[-1,1]){const U=new A(new ee(.016,.055,3,8),n);U.rotation.z=Math.PI/2+N*-.24,U.rotation.x=-.2,U.position.set(N*.06,.088,.152),V.add(U);const ot=new A(new ut(.055,10,8),e);ot.scale.set(.78,.58,.45),ot.position.set(N*.1,-.035,.105),V.add(ot)}const lt=new A(new ee(.026,.06,4,8),e);lt.rotation.x=.35,lt.position.set(0,.03,.158),V.add(lt);const xt=new A(new ut(.048,10,8),e);xt.scale.set(1.25,.78,1),xt.position.set(0,-.034,.178),V.add(xt);for(const N of[-1,1]){const U=new A(new ut(.015,8,6),n);U.scale.set(.8,1,.7),U.position.set(N*.032,-.052,.195),V.add(U)}const Pt=new A(new ut(.135,14,11),n);Pt.scale.set(1,.7,.95),Pt.position.set(0,-.105,.07),_(Pt,V);const q=new A(new ut(.05,10,8),n);q.scale.set(1.15,.85,1),q.position.set(0,-.155,.14),V.add(q);const st=new A(new ee(.011,.055,3,8),t(3808280));st.rotation.z=Math.PI/2,st.position.set(0,-.095,.185),V.add(st);for(const N of[-1,1]){const U=new A(new Ne(.024,.115,7),m);U.position.set(N*.092,-.065,.155),U.rotation.set(-.3,0,N*-.26),V.add(U)}for(const N of[-1,1]){const U=new A(new ut(.048,10,8),n);U.scale.set(1.1,.9,.6),U.position.set(N*.072,.022,.135),V.add(U);const ot=new A(new ut(.027,10,8),t(14209720,{roughness:.45}));ot.scale.set(1.1,.82,.66),ot.position.set(N*.072,.022,.149),V.add(ot);const ct=new A(new ut(.014,8,6),t(9062944,{emissive:5250052,emissiveIntensity:.35,roughness:.35}));ct.position.set(N*.074,.022,.163),V.add(ct);const T=new A(new ut(.008,6,5),t(1182212));T.position.set(N*.075,.022,.172),V.add(T)}for(const N of[-1,1]){const U=new A(new ut(.055,10,8),e);U.scale.set(.55,1.7,.45),U.position.set(N*.24,.04,-.02),U.rotation.z=N*-1.25,U.rotation.y=N*.18,U.rotation.x=-.12,_(U,V)}const _t=new A(new ut(.192,14,11,0,Math.PI*2,0,Math.PI*.46),s);_t.position.set(0,.072,-.018),_t.scale.set(1.04,1,1.06),_(_t,V),[[0,.22,.04,1.15],[-.09,.2,.08,1],[.09,.2,.08,1],[-.14,.16,-.02,.95],[.14,.16,-.02,.95],[0,.18,-.12,1.05],[-.1,.14,-.1,.9],[.1,.14,-.1,.9],[-.05,.24,-.02,1.1],[.05,.24,-.02,1.1],[0,.2,.14,.85]].forEach(([N,U,ot,ct],T)=>{const v=new A(new rn(.07*ct,0),T%3===0?r:s);v.position.set(N,U-.012,ot),v.rotation.set(-.45+ot*1.4,N*1.8,-N*1.2),v.scale.set(1.1,.42,1.25),V.add(v)}),i.add(V);const gt=new Dt;gt.name="orcSpear",gt.position.set(.14,-.62,.062),gt.rotation.set(.12,0,.05),gt.userData.rest={x:.14,y:-.62,z:.062,rx:.12,ry:0,rz:.05};const Lt=new A(new Qt(.026,.03,2.05,6),f);Lt.position.y=1.05,_(Lt,gt);const Ut=new A(new Qt(.042,.04,.1,6),a);Ut.position.y=1.9,gt.add(Ut);const Wt=new A(new ti(.13,0),d);Wt.scale.set(.4,1.85,.28),Wt.position.y=2.2,_(Wt,gt);const rt=new A(new Kt(.018,.34,.085),t(15659766,{metalness:.9,roughness:.14}));rt.position.y=2.2,gt.add(rt);const dt=new A(new Qt(.052,.038,.1,6),d);dt.position.y=1.96,gt.add(dt);for(const N of[-1,1]){const U=new A(new Ne(.04,.14,4),d);U.position.set(N*.055,2.08,0),U.rotation.z=N*1.15,gt.add(U)}const P=new A(new Ne(.06,.22,4),t(15791352,{metalness:.88,roughness:.15}));P.position.y=2.4,gt.add(P);const It=new A(new Ne(.032,.1,4),d);It.rotation.x=Math.PI,It.position.y=.02,gt.add(It),J.add(gt);const W=new A(new Qt(.45,.5,1.9,8),new pe({visible:!1}));return W.position.y=.95,W.name="hit",i.add(W),i}function ko(i,t){const e=i.getObjectByName("orcSpear"),n=i.getObjectByName("orcArmR"),s=Math.max(0,Math.min(1,t));let r=0,o=0;if(s<=0)r=0,o=0;else if(s<.32)r=s/.32,o=-.35*r;else if(s<.52){const c=(s-.32)/.2;r=1-c,o=-.35+1.45*c}else o=1.1*(1-(s-.52)/.48);if(e){const c=e.userData.rest;c?(e.rotation.x=c.rx-o*.35,e.position.z=c.z+o*.22-r*.1):(e.rotation.x=-o*.95,e.position.z=.12+o*.55-r*.25)}n&&(n.rotation.x=-o*1.05+r*.4);const a=i.getObjectByName("orcHead");a&&(a.rotation.x=-o*.12)}const J_={idle:"Idle",walk:"Walk",attack:"Attack",sword:"Sword guard","sword-walk":"Sword walk",slash:"Slash",chop:"Chop",mine:"Mine"},Ho=[{id:"hunter",name:"Male Hunter",group:"Characters",poses:["idle","walk","sword","sword-walk","slash","chop","mine"],build:()=>uc()},{id:"yeti",name:"Frost Yeti",group:"Creatures",poses:["idle","walk","attack"],build:()=>hu()},{id:"orc",name:"Orc Scout",group:"Creatures",poses:["idle","walk","attack"],build:()=>uu()},{id:"dummy",name:"Training Dummy",group:"World",build:()=>au()},{id:"tree",name:"Whisperwood Tree",group:"World",build:()=>ou(2)},{id:"copper",name:"Copper Rock",group:"World",build:()=>ka("copper",1)},{id:"tin",name:"Tin Rock",group:"World",build:()=>ka("tin",2)},{id:"campfire",name:"Campfire",group:"World",build:()=>cu()},{id:"tent",name:"Tent",group:"World",build:()=>lu()},{id:"crate",name:"Crate",group:"World",build:()=>Ha()},{id:"barrel",name:"Barrel",group:"World",build:()=>Cr()},{id:"bedroll",name:"Bedroll",group:"World",build:()=>Ga()}];class j_{constructor(t){this.canvas=t,this.camera=new He(42,window.innerWidth/window.innerHeight,.08,80),this.root=document.getElementById("studio"),this.listEl=document.getElementById("studio-list"),this.poseEl=document.getElementById("studio-poses"),this.titleEl=document.getElementById("studio-model-name"),this.buildScene(),this.buildList(),this.bindUi(),this.bindOrbit()}root;listEl;poseEl;titleEl;scene=new Ds;camera;current=null;entry=null;pose="idle";animT=0;spherical=new Xh(4.6,1.12,.55);look=new L(0,1,0);dragging=!1;dragBtn=0;lastX=0;lastY=0;autoSpin=!1;openFlag=!1;stage;isOpen(){return this.openFlag}setEnvironment(t){this.scene.environment=t,this.scene.environmentIntensity=.7}toggle(){this.openFlag?this.close():this.open()}open(){this.openFlag=!0,this.root.hidden=!1;const t=document.getElementById("hud");t&&(t.hidden=!0),this.entry||this.select(Ho[0].id),this.fitCurrent()}close(){this.openFlag=!1,this.dragging=!1,this.root.hidden=!0;const t=document.getElementById("hud");t&&(t.hidden=!1)}resize(t,e){this.camera.aspect=t/Math.max(1,e),this.camera.updateProjectionMatrix()}tick(t){this.openFlag&&(this.animT+=t,this.autoSpin&&(this.spherical.theta+=t*.55),this.applyPose(t),this.updateCamera())}render(t){t.setClearColor(7238764),t.render(this.scene,this.camera),t.setClearColor(10405604)}buildScene(){this.scene.background=new Et(7238764),this.scene.fog=new rc(7238764,16,36),this.scene.add(new Os(16054271,3817528,1.05));const t=new Sn(16774364,2.05);t.position.set(4.5,7.5,5.5),t.castShadow=!0,t.shadow.mapSize.set(1024,1024),t.shadow.bias=-4e-4,t.shadow.camera.near=.5,t.shadow.camera.far=24,t.shadow.camera.left=-5,t.shadow.camera.right=5,t.shadow.camera.top=5,t.shadow.camera.bottom=-5,this.scene.add(t);const e=new Sn(13163775,.62);e.position.set(-6,3.5,-2),this.scene.add(e);const n=new Sn(16769208,.38);n.position.set(-2,4,7),this.scene.add(n),this.scene.add(new Vh(6976640,.42));const s=new A(new gn(6.5,48),new Me({color:6054492,roughness:.94,metalness:.04}));s.rotation.x=-Math.PI/2,s.receiveShadow=!0,this.scene.add(s);const r=new A(new yi(1.55,1.62,48),new pe({color:9071144,transparent:!0,opacity:.55,side:Te}));r.rotation.x=-Math.PI/2,r.position.y=.008,this.scene.add(r);const o=new n_(8,16,4866096,3027512);o.position.y=.004;const a=o.material;a.transparent=!0,a.opacity=.35,this.scene.add(o),this.stage=new Dt,this.scene.add(this.stage)}buildList(){this.listEl.innerHTML="";let t="";for(const e of Ho){if(e.group!==t){t=e.group;const s=document.createElement("div");s.className="studio-group",s.textContent=e.group,this.listEl.appendChild(s)}const n=document.createElement("button");n.type="button",n.className="studio-item",n.dataset.id=e.id,n.textContent=e.name,n.addEventListener("click",()=>this.select(e.id)),this.listEl.appendChild(n)}}bindUi(){document.getElementById("btn-studio")?.addEventListener("click",()=>this.toggle()),document.getElementById("studio-close")?.addEventListener("click",()=>this.close()),document.getElementById("studio-reset")?.addEventListener("click",()=>this.fitCurrent()),document.getElementById("studio-spin")?.addEventListener("click",t=>{this.autoSpin=!this.autoSpin,t.currentTarget.classList.toggle("on",this.autoSpin)}),window.addEventListener("keydown",t=>{if(t.key==="Escape"&&this.openFlag){this.close(),t.preventDefault();return}if(t.key.toLowerCase()==="v"&&!t.ctrlKey&&!t.metaKey&&!t.altKey){const e=t.target;if(e&&(e.tagName==="INPUT"||e.tagName==="TEXTAREA"))return;this.toggle()}})}bindOrbit(){const t=s=>{this.openFlag&&s.target===this.canvas&&(this.dragging=!0,this.dragBtn=s.button,this.lastX=s.clientX,this.lastY=s.clientY,this.canvas.setPointerCapture(s.pointerId),s.preventDefault())},e=s=>{if(!this.openFlag||!this.dragging)return;const r=s.clientX-this.lastX,o=s.clientY-this.lastY;if(this.lastX=s.clientX,this.lastY=s.clientY,this.dragBtn===2||s.shiftKey){const a=this.spherical.radius*.0016,c=new L,l=new L;this.camera.matrix.extractBasis(c,l,new L),this.look.addScaledVector(c,-r*a),this.look.addScaledVector(l,o*a)}else this.spherical.theta-=r*.007,this.spherical.phi-=o*.007,this.spherical.phi=Math.max(.06,Math.min(Math.PI-.06,this.spherical.phi))},n=s=>{if(this.dragging){this.dragging=!1;try{this.canvas.releasePointerCapture(s.pointerId)}catch{}}};this.canvas.addEventListener("pointerdown",t),window.addEventListener("pointermove",e),window.addEventListener("pointerup",n),this.canvas.addEventListener("contextmenu",s=>{this.openFlag&&s.preventDefault()}),this.canvas.addEventListener("wheel",s=>{if(!this.openFlag)return;s.preventDefault();const r=this.spherical.radius*(s.deltaY>0?1.08:.92);this.spherical.radius=Math.max(1.1,Math.min(18,r))},{passive:!1})}select(t){const e=Ho.find(n=>n.id===t);e&&(this.entry=e,this.current&&this.stage.remove(this.current),this.current=e.build(),this.current.position.set(0,0,0),this.current.rotation.set(0,0,0),this.current.traverse(n=>{(n.name==="contactShadow"||n.name==="hit"||n.name==="yetiBreath"||n.name==="yetiBreathMist"||n.name==="yetiEyeGlow"||n.name==="yetiEyeLight")&&(n.visible=!1)}),this.stage.add(this.current),this.animT=0,this.pose=e.poses?.[0]??"idle",this.titleEl.textContent=e.name,this.listEl.querySelectorAll(".studio-item").forEach(n=>{n.classList.toggle("on",n.dataset.id===t)}),this.buildPoseBar(),this.fitCurrent())}buildPoseBar(){this.poseEl.innerHTML="";const t=this.entry?.poses;if(!t?.length){this.poseEl.hidden=!0;return}this.poseEl.hidden=!1;for(const e of t){const n=document.createElement("button");n.type="button",n.className="studio-pose",n.textContent=J_[e],n.classList.toggle("on",e===this.pose),n.addEventListener("click",()=>{this.pose=e,this.animT=0,this.buildPoseBar()}),this.poseEl.appendChild(n)}}fitCurrent(){if(!this.current)return;this.current.updateWorldMatrix(!0,!0);const t=new On().setFromObject(this.current),e=t.getSize(new L),n=t.getCenter(new L);this.look.copy(n),this.spherical.radius=Math.max(2.4,e.length()*1.05),this.spherical.phi=1.12,this.spherical.theta=.55,this.autoSpin=!1,document.getElementById("studio-spin")?.classList.remove("on")}updateCamera(){const t=new L().setFromSpherical(this.spherical).add(this.look);this.camera.position.copy(t),this.camera.lookAt(this.look)}applyPose(t){if(!this.current||!this.entry)return;const e=this.entry.id;if(e==="hunter"&&this.current instanceof Dt){this.applyHunter(this.current);const n=Number(this.current.userData.locomotionY)||0;this.current.position.y=n;return}if(e==="yeti"&&this.current instanceof Dt){this.applyYeti(this.current);return}e==="orc"&&this.current instanceof Dt&&this.applyOrc(this.current)}applyHunter(t){const e=this.pose;if(e==="idle"){Ue(t,null),xi(t,this.animT);return}if(e==="walk"){Ue(t,null),zr(t,this.animT*za(.9),.9,1);return}if(e==="sword"){Ue(t,"sword"),xi(t,this.animT);return}if(e==="sword-walk"){Ue(t,"sword"),zr(t,this.animT*za(.9),.9,1);return}if(e==="slash"){Ue(t,"sword");const n=this.animT%Br/Br;nu(t,n);return}if(e==="chop"){Ue(t,"hatchet"),Ba(t,this.animT*.7,"tree");return}Ue(t,"pickaxe"),Ba(t,this.animT*.7,"rock")}applyYeti(t){if(this.pose==="walk"){mi(t,this.animT,!0,1);return}if(this.pose==="attack"){const e=this.animT%kr/kr;iu(t,e);return}mi(t,this.animT,!1,0)}applyOrc(t){if(this.pose==="walk"){Ls(t,this.animT,!0,1);return}if(this.pose==="attack"){const e=this.animT%Hr/Hr;su(t,e);return}Ls(t,this.animT,!1,0)}}class Q_{scene;camera;overlay;particles=[];floats=[];tmp=new L;chipMat=new Me({color:12880448,emissive:5910544,emissiveIntensity:.35,flatShading:!0,roughness:.85});sparkMat=new Me({color:16769160,emissive:16763972,emissiveIntensity:2,flatShading:!0});hitMat=new Me({color:16772778,emissive:16768392,emissiveIntensity:1.5,flatShading:!0});oreMat=new Me({color:12088115,emissive:6697745,emissiveIntensity:.4,metalness:.5,roughness:.45,flatShading:!0});iceMat=new Me({color:11069695,emissive:4500172,emissiveIntensity:1.2,flatShading:!0,transparent:!0,opacity:.9});clawMat=new Me({color:14215416,emissive:8960989,emissiveIntensity:.8,flatShading:!0});spearMat=new Me({color:13160608,emissive:8956484,emissiveIntensity:.9,flatShading:!0});impactMat=new Me({color:16774864,emissive:16764006,emissiveIntensity:2.4,flatShading:!0,transparent:!0,opacity:.95});telegraphMat=new pe({color:16724753,transparent:!0,opacity:.7,depthWrite:!1,side:Te});frostTeleMat=new pe({color:6737151,transparent:!0,opacity:.65,depthWrite:!1,side:Te});constructor(t,e,n){this.scene=t,this.camera=e,this.overlay=document.createElement("div"),this.overlay.id="vfx-overlay",this.overlay.style.cssText="position:absolute;inset:0;pointer-events:none;overflow:hidden;z-index:15;",n.appendChild(this.overlay)}spawnWoodchips(t,e=10){for(let n=0;n<e;n++){const s=.14+Math.random()*.16,r=new A(new Kt(s,s*.35,s*.7),this.chipMat);r.position.copy(t),r.position.x+=(Math.random()-.5)*.35,r.position.y+=.35+Math.random()*.55,r.position.z+=(Math.random()-.5)*.35,r.castShadow=!1,this.scene.add(r),this.particles.push({mesh:r,vel:new L((Math.random()-.5)*3.4,2.2+Math.random()*2.8,(Math.random()-.5)*3.4),life:0,maxLife:1.05+Math.random()*.55,gravity:7,spin:(Math.random()-.5)*14})}}spawnMineSparks(t,e=12){for(let n=0;n<e;n++){const s=n%3===0,r=new A(new ut(s?.11:.07,5,4),s?this.oreMat:this.sparkMat);r.position.copy(t),r.position.x+=(Math.random()-.5)*.3,r.position.y+=.25+Math.random()*.45,r.position.z+=(Math.random()-.5)*.3,this.scene.add(r),this.particles.push({mesh:r,vel:new L((Math.random()-.5)*4.6,2+Math.random()*3.2,(Math.random()-.5)*4.6),life:0,maxLife:.85+Math.random()*.45,gravity:6,spin:(Math.random()-.5)*18})}}spawnHitSparks(t,e=18){for(let n=0;n<e;n++){const s=new A(new ti(.045+Math.random()*.04,0),this.hitMat);s.position.copy(t),s.position.y+=1+Math.random()*.45,this.scene.add(s),this.particles.push({mesh:s,vel:new L((Math.random()-.5)*5.2,1+Math.random()*2.8,(Math.random()-.5)*5.2),life:0,maxLife:.4+Math.random()*.3,gravity:4.5,spin:(Math.random()-.5)*20})}}spawnFloatingText(t,e,n="#7ec87e"){const s=document.createElement("div");s.className="float-xp",s.textContent=e,s.style.color=n,this.overlay.appendChild(s),this.floats.push({el:s,life:0,maxLife:1.55,world:t.clone(),driftY:0})}spawnXp(t,e,n){this.spawnFloatingText(t.clone().add(new L((Math.random()-.5)*.4,1.6,0)),`+${e} ${n}`,"#7ec87e")}spawnDamage(t,e,n=!1){this.spawnFloatingText(t.clone().add(new L((Math.random()-.5)*.25,1.7,0)),n?`${e}!`:String(e),n?"#ffe066":"#ff8a78")}spawnIceBurst(t,e=16){for(let n=0;n<e;n++){const s=new A(new ti(.06+Math.random()*.05,0),this.iceMat);s.position.copy(t),s.position.y+=.8+Math.random()*.6,s.position.x+=(Math.random()-.5)*.4,s.position.z+=(Math.random()-.5)*.4,this.scene.add(s),this.particles.push({mesh:s,vel:new L((Math.random()-.5)*5,1.2+Math.random()*3.5,(Math.random()-.5)*5),life:0,maxLife:.55+Math.random()*.4,gravity:5,spin:(Math.random()-.5)*20})}}spawnClawSlash(t,e=8){for(let n=0;n<e;n++){const s=new A(new Kt(.08,.02,.28+Math.random()*.15),this.clawMat);s.position.copy(t),s.position.y+=1+Math.random()*.5;const r=n/e*Math.PI-Math.PI/2;s.rotation.y=r,s.rotation.z=-.4,this.scene.add(s),this.particles.push({mesh:s,vel:new L(Math.cos(r)*3.5,.5+Math.random(),Math.sin(r)*3.5),life:0,maxLife:.28+Math.random()*.15,gravity:2,spin:8})}}spawnSpearThrust(t,e=8){for(let n=0;n<e;n++){const s=new A(new Ne(.04,.22+Math.random()*.12,4),this.spearMat);s.position.copy(t),s.position.y+=.9+Math.random()*.5;const r=n/e*Math.PI*.6-.3;s.rotation.z=r,s.rotation.x=Math.PI/2,this.scene.add(s),this.particles.push({mesh:s,vel:new L(Math.sin(r)*3.2,.4+Math.random(),Math.cos(r)*3.2),life:0,maxLife:.28+Math.random()*.15,gravity:2,spin:10})}}spawnImpactBurst(t,e=18,n=!1){const s=n?this.iceMat:this.impactMat;for(let o=0;o<e;o++){const a=new A(new ti(.05+Math.random()*.06,0),s);a.position.copy(t),a.position.y+=.9+Math.random()*.55,this.scene.add(a);const c=Math.random()*Math.PI*2,l=2.5+Math.random()*4.5;this.particles.push({mesh:a,vel:new L(Math.cos(c)*l,1.5+Math.random()*3.2,Math.sin(c)*l),life:0,maxLife:.4+Math.random()*.35,gravity:5,spin:(Math.random()-.5)*22})}const r=new A(new yi(.15,.45,20),new pe({color:n?11069695:16771232,transparent:!0,opacity:.7,depthWrite:!1,side:Te}));r.rotation.x=-Math.PI/2,r.position.set(t.x,.12,t.z),this.scene.add(r),this.particles.push({mesh:r,vel:new L(0,.05,0),life:0,maxLife:.35,gravity:0,spin:0})}spawnTelegraph(t,e=!1,n=.55,s=1.05){const r=new A(new yi(s*.72,s,28),e?this.frostTeleMat.clone():this.telegraphMat.clone());r.rotation.x=-Math.PI/2,r.position.set(t.x,.09,t.z),this.scene.add(r),this.particles.push({mesh:r,vel:new L(0,0,0),life:0,maxLife:n,gravity:0,spin:1.2});const o=(e?this.frostTeleMat:this.telegraphMat).clone();o.opacity=e?.28:.32;const a=new A(new gn(s*.7,28),o);a.rotation.x=-Math.PI/2,a.position.set(t.x,.07,t.z),a.scale.setScalar(.15),this.scene.add(a),this.particles.push({mesh:a,vel:new L(0,.01,0),life:0,maxLife:n,gravity:0,spin:0}),a.userData.teleFill=!0}spawnArcTelegraph(t,e,n=!1,s=.5){const r=(n?this.frostTeleMat:this.telegraphMat).clone();r.opacity=.65;const o=new A(new yi(.55,1.15,20,1,0,Math.PI*.85),r);o.rotation.x=-Math.PI/2.6,o.rotation.z=e,o.position.set(t.x,.85,t.z),this.scene.add(o),this.particles.push({mesh:o,vel:new L(0,.15,0),life:0,maxLife:s,gravity:0,spin:0})}update(t){for(let e=this.particles.length-1;e>=0;e--){const n=this.particles[e];n.life+=t,n.vel.y-=n.gravity*t,n.mesh.position.addScaledVector(n.vel,t),n.mesh.rotation.x+=n.spin*t,n.mesh.rotation.z+=n.spin*.7*t;const s=n.life/n.maxLife,r=Math.max(.05,1-s*.85),o=n.mesh.geometry.type;if(!!(n.mesh.userData&&n.mesh.userData.teleFill)){const c=Math.min(1,s/.85);n.mesh.scale.setScalar(.15+c*.85);const l=n.mesh.material;l&&l.opacity!==void 0&&(l.opacity=Math.max(0,(1-s)*.35))}else if(o==="RingGeometry"){const c=n.gravity===0&&n.spin>0&&n.spin<3?1+Math.sin(s*Math.PI)*.08:1+s*1.8;n.mesh.scale.setScalar(c);const l=n.mesh.material;l&&l.opacity!==void 0&&(l.opacity=Math.max(0,(1-s)*(n.spin>0&&n.spin<3?.6:.7)))}else if(o==="CircleGeometry"){n.mesh.scale.setScalar(r);const c=n.mesh.material;c&&c.opacity!==void 0&&(c.opacity=Math.max(0,(1-s)*.5))}else n.mesh.scale.setScalar(r);n.life>=n.maxLife&&(this.scene.remove(n.mesh),n.mesh.geometry.dispose(),this.particles.splice(e,1))}for(let e=this.floats.length-1;e>=0;e--){const n=this.floats[e];n.life+=t,n.driftY+=t*.55,this.tmp.set(n.world.x,n.world.y+n.driftY,n.world.z),this.tmp.project(this.camera);const s=(this.tmp.x*.5+.5)*window.innerWidth,r=(-this.tmp.y*.5+.5)*window.innerHeight,o=Math.max(0,1-n.life/n.maxLife);n.el.style.transform=`translate(-50%, -50%) translate(${s}px, ${r}px)`,n.el.style.opacity=String(o),(n.life>=n.maxLife||this.tmp.z>1)&&(n.el.remove(),this.floats.splice(e,1))}}}const du="hunterscape_save_v1";function tv(i){const t=new Set(Object.values(i.equipped).filter(e=>!!e));return i.inventory=i.inventory.filter(e=>{const n=Zn[e.id];return!(n&&!n.stackable&&t.has(e.id))}),i}function ev(){try{const i=localStorage.getItem(du);if(!i)return xr();const t=JSON.parse(i);if(t.version!==1)return xr();const e=xr();return tv({...e,...t,skills:{...e.skills,...t.skills},equipped:{...e.equipped,...t.equipped},inventory:t.inventory??e.inventory})}catch{return xr()}}function nv(i){try{localStorage.setItem(du,JSON.stringify(i))}catch{}}const wr=1.6,iv=1.8,Ss=2.35,Go=5.8,Es=2.15,Vo=5.4,Wo=4.2,sv=9.5,rv=12,ov=3,eh=80,av=28,nh=5,cv=10,ih=62,lv=22,sh=4,hv=8,ke={x:-6.2,z:-4.8},Ee={x:4.2,z:7.2},uv={constitution:"Constitution",attack:"Attack",strength:"Strength",defence:"Defence",woodcutting:"Woodcutting",mining:"Mining"};class dv{renderer;scene;camera;player;raycaster=new e_;pointer=new pt;clock=new Wh;hud;studio;vfx;save;objects=[];ground;activity={type:"idle"};moveMarker;saveTimer=0;keys=new Set;camOffset=new L(0,8.7,7.15);camLook=new L;dummyTarget=null;yetiTarget=null;yetiAttackCd=0;yetiSwipeT=0;yetiAggroed=!1;orcTarget=null;orcAttackCd=0;orcSwipeT=0;orcAggroed=!1;running=!0;sun;rim;pendingGather=null;pendingCombat=!1;toolSwing=0;animTime=0;playerFlinch=0;playerKnock=new L;yetiHitDone=!1;orcHitDone=!1;deathAnims=[];camSmooth=new L;lookSmooth=new L;combatCamPull=0;moveSpeedCur=0;moveBlend=0;stoppingSteps=0;gaitPhase=0;poseSmoother=new u_;lastMoveDir=new L(0,0,1);hitReacts=[];yetiMoveBlend=0;orcMoveBlend=0;yetiTeleDone=!1;orcTeleDone=!1;playerTeleDone=!1;combatOorT=0;combatAbortT=0;pendingCombatTarget=null;pendingCombatChat="";constructor(t){this.save=ev(),this.hud=new F_,this.renderer=new ic({canvas:t,antialias:!0,alpha:!1}),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.renderer.setSize(window.innerWidth,window.innerHeight),this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=oh,this.renderer.outputColorSpace=De,this.renderer.toneMapping=Vr,this.renderer.toneMappingExposure=1.42,this.renderer.setClearColor(10405604),this.scene=new Ds,this.scene.fog=new sc(12769e3,.012),this.camera=new He(48,window.innerWidth/window.innerHeight,.1,140),this.setupLights(),this.setupReflectionEnv(),this.studio=new j_(t),this.studio.setEnvironment(this.scene.environment),this.hud.setEnvironment(this.scene.environment),this.scene.add($_(70)),this.ground=k_(48),this.scene.add(this.ground),this.scene.add(X_()),this.buildWorld(),this.player=uc(),this.player.position.set(this.save.x,ye(this.save.x,this.save.z),this.save.z),this.scene.add(this.player),this.syncHeldTool(),xi(this.player,0);const e=document.getElementById("app")??document.body;this.vfx=new Q_(this.scene,this.camera,e),this.moveMarker=new A(new yi(.25,.38,24),new pe({color:13936715,transparent:!0,opacity:.85,side:Te})),this.moveMarker.rotation.x=-Math.PI/2,this.moveMarker.position.y=.06,this.moveMarker.visible=!1,this.scene.add(this.moveMarker),this.bindInput(t),this.hud.onAction=n=>this.handleAction(n),this.hud.onInventoryClick=n=>this.handleInvClick(n),this.hud.onGearSlotClick=n=>this.unequipSlot(n),this.refreshUI(),this.hud.chat("Welcome to Thornrest Camp in the Whisperwood.","system"),this.hud.chat("Tap the ground to walk. Chop trees, mine rocks, or spar with the training dummy.","system"),this.hud.chat("A Frost Yeti stalks the north-east clearing — keep your distance until you are ready.","combat"),this.hud.chat("An Orc Scout prowls the south-west trail — spear ready, leather and tooth to loot.","combat"),this.hud.chat("Open Gear (C) to inspect your hero and equip or unequip items.","system"),this.hud.chat("Your progress is saved in this browser.","system"),window.addEventListener("resize",()=>this.onResize()),this.animate()}setupLights(){const t=new Os(15923199,5929522,1.08);this.scene.add(t),this.sun=new Sn(16774880,2.08),this.sun.position.set(18,28,10),this.sun.castShadow=!0,this.sun.shadow.mapSize.set(2048,2048),this.sun.shadow.bias=-3e-4,this.sun.shadow.normalBias=.035,this.sun.shadow.radius=3.2,this.sun.shadow.camera.near=2,this.sun.shadow.camera.far=58,this.sun.shadow.camera.left=-24,this.sun.shadow.camera.right=24,this.sun.shadow.camera.top=24,this.sun.shadow.camera.bottom=-24,this.scene.add(this.sun),this.scene.add(this.sun.target),this.rim=new Sn(13690623,.48),this.rim.position.set(-14,10,-16),this.scene.add(this.rim);const e=new Sn(16769712,.46);e.position.set(-6,6,4),this.scene.add(e),this.scene.add(new Vh(6978696,.44))}setupReflectionEnv(){const t=new Pa(this.renderer),e=new Ds;e.add(new Os(15923199,4020770,1.15));const n=new A(new ut(10,16,12),new pe({color:11848932,side:Fe}));e.add(n);const s=new A(new ut(2.2,12,10),new pe({color:16773576}));s.position.set(7,9,5),e.add(s);const r=new A(new gn(10,16),new pe({color:4880952}));r.rotation.x=-Math.PI/2,r.position.y=-1.6,e.add(r),this.scene.environment=t.fromScene(e,.04).texture,this.scene.environmentIntensity=.62,t.dispose()}buildWorld(){const t=(y,M,C,O=0)=>{y.position.set(M,ye(M,C)+O,C)},e=lu();t(e,-3.5,-1.5),this.scene.add(e);const n=cu();t(n,-1.2,-.5),this.scene.add(n);const s=Ha();t(s,-2.4,-2.2),s.rotation.y=.3,this.scene.add(s);const r=Cr();t(r,-4.2,-.4),this.scene.add(r);const o=Cr();t(o,-4.55,.15),o.rotation.y=.6,this.scene.add(o);const a=Ga();t(a,-2.8,.4),a.rotation.y=-.4,this.scene.add(a);const c=[[-8,-6],[8,-7],[-10,4],[9,5],[0,-10],[-6,8],[6,9],[10,0],[-11,-2]];for(const[y,M]of c){const C=new Dt,O=new A(new ut(.4+Math.random()*.2,7,5),new Me({color:2775592,flatShading:!0,roughness:.95}));O.position.y=.35,O.castShadow=!0,C.add(O);const H=new A(new ut(.28,6,4),new Me({color:3828272,flatShading:!0}));H.position.set(.25,.3,.1),H.castShadow=!0,C.add(H),C.position.set(y,ye(y,M),M),this.scene.add(C)}[[4.5,-3],[6.2,-1.5],[8.2,.2],[7.4,2.6],[1.2,5.6],[-4.2,5.2],[-8.2,2.4],[-8.4,-2.2],[2,-6],[-2.5,-7],[8,-5],[-9.2,-.4]].forEach(([y,M],C)=>{const O=ou(C);O.position.set(y,ye(y,M),M),this.scene.add(O),this.objects.push({kind:"tree",mesh:O,id:`tree_${C}`,hp:1,maxHp:1,depleted:!1,respawnAt:0})}),[{x:1.2,z:3.4,ore:"copper"},{x:-.3,z:4.1,ore:"copper"},{x:2.6,z:4,ore:"tin"},{x:-1.8,z:3.2,ore:"tin"},{x:.8,z:5.2,ore:"copper"},{x:3.4,z:2.2,ore:"copper"},{x:-3.2,z:2.8,ore:"tin"}].forEach((y,M)=>{const C=ka(y.ore,M);C.position.set(y.x,ye(y.x,y.z),y.z),this.scene.add(C),this.objects.push({kind:"rock",mesh:C,id:`rock_${M}`,hp:1,maxHp:1,depleted:!1,respawnAt:0,meta:{ore:y.ore}})});const u=au();u.position.set(2.5,ye(2.5,-2.5),-2.5),this.scene.add(u);const d={kind:"dummy",mesh:u,id:"dummy_0",hp:50,maxHp:50,depleted:!1,respawnAt:0};this.objects.push(d),this.dummyTarget=d;const f=hu();f.position.set(Ee.x,ye(Ee.x,Ee.z),Ee.z),f.rotation.y=Math.PI*.85,f.visible=!0,f.scale.setScalar(1.15),this.scene.add(f);const m={kind:"yeti",mesh:f,id:"yeti_0",hp:eh,maxHp:eh,depleted:!1,respawnAt:0};this.objects.push(m),this.yetiTarget=m;const _=Z_();_.traverse(y=>{y===_||!y.isMesh||(y.position.y+=ye(y.position.x,y.position.z))}),this.scene.add(_);const g=new Dt;g.name="fallingSnow";for(let y=0;y<48;y++){const M=new A(new ut(.035+Math.random()*.03,4,3),new pe({color:15267071,transparent:!0,opacity:.55+Math.random()*.35,depthWrite:!1}));M.position.set(2.5+Math.random()*5.5,1.5+Math.random()*6,5.5+Math.random()*4.5),M.userData.fall=.4+Math.random()*.9,M.userData.drift=(Math.random()-.5)*.35,M.userData.baseY=M.position.y,g.add(M)}this.scene.add(g);const p=uu();p.position.set(ke.x,ye(ke.x,ke.z),ke.z),p.rotation.y=Math.PI*.25,this.scene.add(p);const w={kind:"orc",mesh:p,id:"orc_0",hp:ih,maxHp:ih,depleted:!1,respawnAt:0};this.objects.push(w),this.orcTarget=w,this.scene.add(K_());const S=Ha();t(S,-3.6,-2.6),S.rotation.y=-.5,this.scene.add(S);const x=Cr();t(x,-1.8,-2.4),this.scene.add(x);const D=Ga();t(D,-3.9,.9),D.rotation.y=.8,this.scene.add(D);const E=new A(new Qt(.22,.28,.35,7),new Me({color:4861972,flatShading:!0,roughness:.9}));E.position.set(.4,ye(.4,-1.6)+.18,-1.6),E.castShadow=!0,this.scene.add(E);const R=new A(new ut(.08,8,6),new Me({color:16764006,emissive:16755251,emissiveIntensity:1.2,flatShading:!0}));R.position.set(-.2,ye(-.2,-1.8)+.85,-1.8),this.scene.add(R);const I=new lc(16755285,.55,6);I.position.copy(R.position),this.scene.add(I)}bindInput(t){const e=n=>{this.studio.isOpen()||n.target!==t||(this.pointer.x=n.clientX/window.innerWidth*2-1,this.pointer.y=-(n.clientY/window.innerHeight)*2+1,this.handleWorldClick())};t.addEventListener("pointerdown",e),window.addEventListener("keydown",n=>{if(!this.studio.isOpen()){if(this.keys.add(n.key.toLowerCase()),n.key==="1"&&this.handleAction("attack"),n.key==="2"&&this.handleAction("chop"),n.key==="3"&&this.handleAction("mine"),n.key==="4"&&this.handleAction("eat"),n.key==="5"&&this.handleAction("examine"),n.key.toLowerCase()==="k"){const s=document.getElementById("skills-panel");s&&(s.hidden=!s.hidden)}n.key.toLowerCase()==="c"&&this.hud.setGearOpen(!this.hud.isGearOpen())}}),window.addEventListener("keyup",n=>this.keys.delete(n.key.toLowerCase()))}handleWorldClick(){this.raycaster.setFromCamera(this.pointer,this.camera);const t=[];for(const s of this.objects)s.depleted&&s.kind!=="dummy"&&s.kind!=="yeti"&&s.kind!=="orc"||s.mesh.traverse(r=>{r.isMesh&&r.name!=="outline"&&t.push(r)});const e=this.raycaster.intersectObjects(t,!1);if(e.length>0){let s=e[0].object;for(;s&&!this.objects.find(o=>o.mesh===s);)s=s.parent;const r=this.objects.find(o=>o.mesh===s);if(r){this.interactWith(r);return}}const n=this.raycaster.intersectObject(this.ground);if(n.length>0){const s=n[0].point;this.pendingCombat=!1,this.pendingCombatTarget=null,this.pendingCombatChat="",this.pendingGather=null,this.startMove(s.x,s.z)}}interactWith(t){if(t.kind==="yeti"){if(t.depleted||t.hp<=0){this.hud.chat("The Frost Yeti lies slain. It will return before long.","system");return}this.yetiAggroed=!0,this.approachThenCombat(t,"You ready your bronze sword against the Frost Yeti!");return}if(t.kind==="orc"){if(t.depleted||t.hp<=0){this.hud.chat("The Orc Scout lies slain. Another will take its place.","system");return}this.orcAggroed=!0,this.approachThenCombat(t,"You ready your bronze sword against the Orc Scout!");return}if(t.kind==="dummy"){if(t.hp<=0){this.hud.chat("The training dummy is already collapsed.","system");return}this.approachThenCombat(t,"You ready your bronze sword against the training dummy.");return}if(t.depleted){this.hud.chat("That resource is depleted. Wait for it to respawn.","system");return}if(t.kind==="tree"){if(!this.save.equipped.hatchet){this.hud.chat(this.hasItem("bronze_hatchet")?"Equip your hatchet from the Gear window first.":"You need a hatchet to chop trees.","system"),this.hasItem("bronze_hatchet")&&this.hud.setGearOpen(!0);return}this.approachThenGather(t,2.4,"Chopping Whisperwood…");return}if(t.kind==="rock"){if(!this.save.equipped.pickaxe){this.hud.chat(this.hasItem("bronze_pickaxe")?"Equip your pickaxe from the Gear window first.":"You need a pickaxe to mine rocks.","system"),this.hasItem("bronze_pickaxe")&&this.hud.setGearOpen(!0);return}this.approachThenGather(t,2.6,`Mining ${t.meta?.ore==="tin"?"tin":"copper"}…`)}}combatName(t){return t.kind==="yeti"?"Frost Yeti":t.kind==="orc"?"Orc Scout":t.kind==="dummy"?"Training Dummy":t.kind}isMonster(t){return t.kind==="yeti"||t.kind==="orc"}monsterAttackRange(t){return t.kind==="yeti"?Ss:t.kind==="orc"?Es:iv}beginCombat(t,e){if(!this.save.equipped.weapon){this.hud.chat("Equip a weapon from the Gear window first.","system"),this.hud.setGearOpen(!0);return}this.hud.chat(e,"combat"),this.pendingGather=null,this.pendingCombat=!1,this.pendingCombatTarget=null,this.pendingCombatChat="",this.combatOorT=0,this.combatAbortT=0,this.activity={type:"combat",target:t,cooldown:.15,swingT:0,swingDur:Br,hitDone:!1},Ue(this.player,"sword"),this.hud.showTarget(this.combatName(t),t.hp/t.maxHp),this.combatCamPull=1}approachThenCombat(t,e){if(!this.save.equipped.weapon){this.hud.chat("Equip a weapon from the Gear window first.","system"),this.hud.setGearOpen(!0);return}const n=this.monsterAttackRange(t);if(this.distTo(t)>n*.92){const r=t.mesh.position.x-this.player.position.x,o=t.mesh.position.z-this.player.position.z,a=Math.hypot(r,o)||1,c=n*.78;this.startMove(t.mesh.position.x-r/a*c,t.mesh.position.z-o/a*c),this.pendingCombat=!0,this.pendingCombatTarget=t,this.pendingCombatChat=e,this.hud.chat(`You close on the ${this.combatName(t)}…`,"combat");return}this.beginCombat(t,e)}nearestCombatTarget(){let t=null,e=1/0;for(const n of this.objects){if(n.kind!=="yeti"&&n.kind!=="orc"&&n.kind!=="dummy"||n.hp<=0||n.depleted)continue;const s=this.distTo(n);s<e&&(e=s,t=n)}return e<16?t:null}approachThenGather(t,e,n){const s=t.mesh.position.x-this.player.position.x,r=t.mesh.position.z-this.player.position.z,o=Math.hypot(s,r);if(o>wr){const a=t.mesh.position.x-s/o*(wr*.85),c=t.mesh.position.z-r/o*(wr*.85);this.startMove(a,c),this.pendingGather={obj:t,duration:e,label:n};return}this.faceToward(t.mesh.position.x,t.mesh.position.z),this.activity={type:"gather",target:t,elapsed:0,duration:e,label:n},Ue(this.player,t.kind==="tree"?"hatchet":"pickaxe"),this.hud.showProgress(n,0)}startMove(t,e){t=Math.max(-14,Math.min(14,t)),e=Math.max(-14,Math.min(14,e)),this.activity={type:"move",tx:t,tz:e},this.syncHeldTool(),this.moveMarker.position.set(t,ye(t,e)+.06,e),this.moveMarker.visible=!0,this.hud.hideProgress(),this.hud.hideTarget()}handleAction(t){switch(t){case"attack":{if(!this.save.equipped.weapon){this.hud.chat("Equip a weapon from the Gear window first.","system"),this.hud.setGearOpen(!0);return}const e=this.nearestCombatTarget();if(!e){this.hud.chat("No enemies nearby to attack.","system");return}const n=this.monsterAttackRange(e);if(this.distTo(e)>n+2){this.hud.chat(`${this.combatName(e)} is too far. Walk closer.`,"system"),this.pendingGather=null;const r=e.mesh.position.x-this.player.position.x,o=e.mesh.position.z-this.player.position.z,a=Math.hypot(r,o)||1;this.startMove(e.mesh.position.x-r/a*(n*.78),e.mesh.position.z-o/a*(n*.78)),this.pendingCombat=!0,this.pendingCombatTarget=e,this.pendingCombatChat=`You ready your bronze sword against the ${this.combatName(e)}!`;return}this.interactWith(e);break}case"chop":{const e=this.nearest("tree");if(!e){this.hud.chat("No trees nearby.","system");return}this.interactWith(e);break}case"mine":{const e=this.nearest("rock");if(!e){this.hud.chat("No rocks nearby.","system");return}this.interactWith(e);break}case"eat":this.eatFood();break;case"examine":this.examineNearest();break}}nearest(t){let e=null,n=1/0;for(const s of this.objects){if(s.kind!==t||s.depleted&&t!=="dummy")continue;const r=this.distTo(s);r<n&&(n=r,e=s)}return n<14?e:null}examineNearest(){const t=[...this.objects].sort((e,n)=>this.distTo(e)-this.distTo(n))[0];if(!t||this.distTo(t)>5){this.hud.chat("You examine the Whisperwood clearing. Birds call from the canopy.","system");return}t.kind==="tree"?this.hud.chat("A tall Whisperwood tree. Good for training woodcutting.","system"):t.kind==="rock"?this.hud.chat(`A rocky outcrop laced with ${t.meta?.ore??"ore"}. Suitable for mining.`,"system"):t.kind==="yeti"?this.hud.chat("A massive Frost Yeti. Dark stripes mark its fur; amber eyes burn with hunger.","combat"):t.kind==="orc"?this.hud.chat("An Orc Scout in spiked tan fur and leather. White tusks and a long spear gleam.","combat"):this.hud.chat("A stuffed training dummy. Safe practice for combat skills.","system")}eatFood(){const t=this.save.inventory.findIndex(e=>e.id==="camp_rations");if(t<0){this.hud.chat("You have no camp rations left.","system");return}if(this.save.hp>=this.save.maxHp){this.hud.chat("You are already at full health.","system");return}this.consumeAt(t,1),this.save.hp=Math.min(this.save.maxHp,this.save.hp+25),this.hud.chat("You eat camp rations and recover 25 health.","loot"),this.refreshUI(),this.persist()}handleInvClick(t){const e=this.save.inventory[t];if(!e)return;const n=Zn[e.id];if(n?.slot){this.equipFromInventory(t);return}this.hud.chat(`${n?.name??e.id}${e.qty>1?` ×${e.qty}`:""}`,"system"),e.id==="camp_rations"&&this.eatFood()}heldTool(){if(this.activity.type==="combat"||this.combatAbortT>0)return this.save.equipped.weapon?"sword":null;if(this.activity.type==="gather"){const t=this.activity.target.kind;if(t==="tree")return this.save.equipped.hatchet?"hatchet":null;if(t==="rock")return this.save.equipped.pickaxe?"pickaxe":null}return this.save.equipped.weapon?"sword":null}syncHeldTool(){Ue(this.player,this.heldTool())}equipFromInventory(t){const e=this.save.inventory[t];if(!e)return;const n=Zn[e.id];if(!n?.slot)return;const s=this.save.equipped[n.slot];this.save.inventory.splice(t,1),s&&this.addItem(s,1),this.save.equipped[n.slot]=e.id,this.syncHeldTool(),this.hud.setGearOpen(!0),this.hud.chat(`You equip the ${n.name}.`,"system"),this.refreshUI(),this.hud.setEquipment(this.save,`Equipped ${n.name}`),this.hud.showSlotPreview(n.slot,this.save),this.persist()}unequipSlot(t){const e=this.save.equipped[t];if(!e){this.hud.inspectGear(`${t[0].toUpperCase()}${t.slice(1)} slot is empty`);return}if(this.save.inventory.length>=28){this.hud.chat("Inventory full — cannot unequip.","system");return}this.save.equipped[t]=null,this.addItem(e,1),this.syncHeldTool();const n=Zn[e];this.hud.setEquipment(this.save,`Unequipped ${n?.name??e}`),this.hud.chat(`You unequip the ${n?.name??e}.`,"system"),this.refreshUI(),this.persist()}distTo(t){return Math.hypot(t.mesh.position.x-this.player.position.x,t.mesh.position.z-this.player.position.z)}faceToward(t,e,n=1/30,s=10){const r=t-this.player.position.x,o=e-this.player.position.z;if(Math.hypot(r,o)>.01){const a=Math.atan2(r,o);this.player.rotation.y=ws(this.player.rotation.y,a,s,n)}}hasItem(t){return this.save.inventory.some(e=>e.id===t)}addItem(t,e=1){const n=Zn[t];if(!n)return!1;if(n.stackable){const s=this.save.inventory.find(r=>r.id===t);if(s)return s.qty+=e,!0}return this.save.inventory.length>=28?(this.hud.chat("Inventory full!","system"),!1):(this.save.inventory.push({id:t,qty:e}),!0)}consumeAt(t,e){const n=this.save.inventory[t];n&&(n.qty-=e,n.qty<=0&&this.save.inventory.splice(t,1))}grantXp(t,e){const n=this.save.skills[t],s=n.level;n.xp+=e,n.level=s_(n.xp),this.hud.chat(`+${e} ${t} XP`,"xp"),this.vfx.spawnXp(this.player.position,e,uv[t]),n.level>s&&(this.hud.chat(`Congratulations! Your ${t} level is now ${n.level}.`,"xp"),t==="constitution"&&(this.save.maxHp=100+(n.level-10)*10,this.save.hp=Math.min(this.save.hp+10,this.save.maxHp)))}update(t){this.save.stamina=Math.min(100,this.save.stamina+t*4),this.save.focus=Math.min(100,this.save.focus+t*2),this.save.hp<this.save.maxHp&&(this.save.hp=Math.min(this.save.maxHp,this.save.hp+t*1.5));const e=performance.now()/1e3;for(const s of this.objects)s.depleted&&s.kind!=="dummy"&&s.kind!=="yeti"&&s.kind!=="orc"&&e>=s.respawnAt&&(s.depleted=!1,s.mesh.visible=!0,this.hud.chat(s.kind==="tree"?"A Whisperwood tree has grown back.":"An ore rock has respawned.","system")),s.kind==="dummy"&&s.hp<=0&&e>=s.respawnAt&&(s.hp=s.maxHp,s.depleted=!1,s.mesh.visible=!0,s.mesh.rotation.set(0,0,0),s.mesh.position.y=ye(s.mesh.position.x,s.mesh.position.z),s.mesh.scale.setScalar(1),this.hud.chat("The training dummy is patched up and ready again.","system")),s.kind==="yeti"&&s.depleted&&e>=s.respawnAt&&(s.hp=s.maxHp,s.depleted=!1,s.mesh.visible=!0,s.mesh.rotation.set(0,Math.PI*.85,0),s.mesh.scale.setScalar(1.15),s.mesh.position.set(Ee.x,ye(Ee.x,Ee.z),Ee.z),this.deathAnims=this.deathAnims.filter(r=>r.mesh!==s.mesh),this.yetiAggroed=!1,this.yetiAttackCd=0,this.yetiSwipeT=0,this.yetiHitDone=!1,this.yetiTeleDone=!1,this.yetiMoveBlend=0,yr(s.mesh,0),mi(s.mesh,this.animTime,!1),this.hud.chat("A Frost Yeti stomps back into the north-east clearing!","combat")),s.kind==="orc"&&s.depleted&&e>=s.respawnAt&&(s.hp=s.maxHp,s.depleted=!1,s.mesh.visible=!0,s.mesh.rotation.set(0,Math.PI*.25,0),s.mesh.scale.setScalar(1),s.mesh.position.set(ke.x,ye(ke.x,ke.z),ke.z),this.orcAggroed=!1,this.orcAttackCd=0,this.orcSwipeT=0,this.orcHitDone=!1,ko(s.mesh,0),this.hud.chat("An Orc Scout stalks back onto the south-west trail!","combat"));const n=this.scene.getObjectByName("fallingSnow");if(n&&n.children.forEach(s=>{s.position.y-=s.userData.fall*t,s.position.x+=s.userData.drift*t,s.position.y<.05&&(s.position.y=6+Math.random()*2,s.position.x=2.5+Math.random()*5.5,s.position.z=5.5+Math.random()*4.5)}),this.scene.traverse(s=>{if(s.name==="flame"&&(s.scale.y=.9+Math.sin(e*8)*.15,s.rotation.y+=t*2),s.name==="flameGlow"){const r=.9+Math.sin(e*6)*.2;s.scale.setScalar(r)}if(s.name==="yetiBreath"){const r=this.yetiAggroed?1.35:1,o=(.85+Math.sin(e*3.4)*.45)*r;s.scale.set(o,.9+o*.5,o*1.25);const a=s.material;a&&a.opacity!==void 0&&(a.opacity=(.4+Math.sin(e*4.2)*.22)*(this.yetiAggroed?1.15:1))}if(s.name==="yetiBreathMist"){const r=this.yetiAggroed?1.3:1,o=(.85+Math.sin(e*2.8+s.position.z)*.4)*r;s.scale.setScalar(o);const a=s.material;a&&a.opacity!==void 0&&(a.opacity=Math.max(.08,.28*o))}if(s.name==="yetiEyeGlow"){const r=this.yetiAggroed||this.activity.type==="combat"&&this.activity.target?.kind==="yeti",o=.95+Math.sin(e*6.2)*(r?.55:.28);s.scale.setScalar(o*(r?1.65:1.1));const a=s.material;a&&a.opacity!==void 0&&(a.opacity=r?.72+Math.sin(e*7)*.18:.45)}if(s.name==="yetiEye"){const r=this.yetiAggroed||this.activity.type==="combat"&&this.activity.target?.kind==="yeti",o=s.material;if(o&&o.emissiveIntensity!==void 0){const a=r?1.35:.55;o.emissiveIntensity=a+Math.sin(e*6.8)*(r?.35:.12)}}if(s.name==="yetiEyeLight"){const r=this.yetiAggroed||this.activity.type==="combat"&&this.activity.target?.kind==="yeti",o=s;o.intensity=(r?1.85:.85)+Math.sin(e*7.1)*(r?.55:.15),o.distance=r?5.2:3.4}}),this.sun.target.position.set(this.player.position.x,this.player.position.y,this.player.position.z),this.sun.target.updateMatrixWorld(),this.animTime+=t,this.playerFlinch>0){const s=this.playerFlinch>.65?2.4:3.6;if(this.playerFlinch=Math.max(0,this.playerFlinch-t*s),Yl(this.player,this.playerFlinch,this.playerFlinch>.65?1.1:.55),this.player.position.x+=this.playerKnock.x*t,this.player.position.z+=this.playerKnock.z*t,this.playerKnock.multiplyScalar(Math.max(0,1-t*5.5)),this.playerFlinch<=0){this.player.rotation.z=0,this.player.rotation.x=0;const r=this.player.getObjectByName("playerTorso");r&&(r.rotation.y=0)}}for(let s=this.hitReacts.length-1;s>=0;s--){const r=this.hitReacts[s];r.t-=t;const o=Math.max(0,Math.min(1,r.t/.35));if(Yl(r.mesh,o,r.inten),r.t<=0){r.mesh.rotation.z=0,r.mesh.rotation.x=0;const a=r.mesh.getObjectByName("playerTorso")||r.mesh.getObjectByName("yetiBody")||r.mesh.getObjectByName("orcBody");a&&(a.rotation.y=0),this.hitReacts.splice(s,1)}}for(let s=this.deathAnims.length-1;s>=0;s--){const r=this.deathAnims[s];r.t+=t;const o=Math.min(1,r.t/r.dur);m_(r.mesh,r.kind,o),r.mesh.position.y+=ye(r.mesh.position.x,r.mesh.position.z),o>=1&&(r.mesh.visible=!1,r.mesh.rotation.set(0,r.mesh.rotation.y,0),r.mesh.scale.setScalar(r.kind==="yeti"?1.15:1),r.mesh.position.y=0,this.deathAnims.splice(s,1))}if(this.syncHeldTool(),this.activity.type==="move"){const{tx:s,tz:r}=this.activity,o=s-this.player.position.x,a=r-this.player.position.z,c=Math.hypot(o,a),l=c<.55?c/.55*Wo:Wo;if(this.moveSpeedCur<l?this.moveSpeedCur=Math.min(l,this.moveSpeedCur+sv*t):this.moveSpeedCur=Math.max(l,this.moveSpeedCur-rv*t),this.moveBlend=Math.min(1,this.moveBlend+t*4.5),c<.12){if(this.player.position.x=s,this.player.position.z=r,this.moveMarker.visible=!1,this.stoppingSteps=0,this.moveBlend=0,this.activity={type:"idle"},this.moveSpeedCur=0,this.pendingGather){const h=this.pendingGather;this.pendingGather=null,this.approachThenGather(h.obj,h.duration,h.label)}else if(this.pendingCombat){this.pendingCombat=!1;const h=this.pendingCombatTarget??this.nearestCombatTarget(),u=this.pendingCombatChat||(h?`You ready your bronze sword against the ${this.combatName(h)}!`:"");this.pendingCombatTarget=null,this.pendingCombatChat="",h&&h.hp>0&&!h.depleted&&(h.kind==="yeti"&&(this.yetiAggroed=!0),h.kind==="orc"&&(this.orcAggroed=!0),this.beginCombat(h,u))}}else{const h=c||1,u=Math.min(c,this.moveSpeedCur*t);this.player.position.x+=o/h*u,this.player.position.z+=a/h*u,this.lastMoveDir.set(o/h,0,a/h);let f=Math.atan2(o,a)-this.player.rotation.y;for(;f>Math.PI;)f-=Math.PI*2;for(;f<-Math.PI;)f+=Math.PI*2;const m=Math.abs(f)>1.2?7:11;this.faceToward(s,r,t,m);const _=Math.min(1.05,.45+this.moveSpeedCur/Wo*.55),g=Math.max(za(_)*.5,Math.PI*this.moveSpeedCur/p_(_));this.gaitPhase+=g*t,zr(this.player,this.gaitPhase,_,this.moveBlend),this.save.stamina=Math.max(0,this.save.stamina-t*2)}}else if(this.activity.type==="gather"){const s=this.activity;if(s.target.depleted)this.activity={type:"idle"},this.syncHeldTool(),$n(this.player),this.hud.hideProgress();else if(this.distTo(s.target)>wr+.35)this.activity={type:"idle"},this.syncHeldTool(),$n(this.player),this.hud.hideProgress(),this.hud.chat("You move too far away.","system");else{s.elapsed+=t,this.hud.showProgress(s.label,s.elapsed/s.duration),this.faceToward(s.target.mesh.position.x,s.target.mesh.position.z,t,8),this.toolSwing+=t;const r=this.toolSwing*1.35%1;if(Ba(this.player,r,s.target.kind==="tree"?"tree":"rock"),Math.floor(s.elapsed*4)!==Math.floor((s.elapsed-t)*4)){const o=s.target.mesh.position.clone();o.y=s.target.kind==="tree"?1.05:.7,s.target.kind==="tree"?this.vfx.spawnWoodchips(o,12):this.vfx.spawnMineSparks(o,14)}s.elapsed>=s.duration&&(this.completeGather(s.target),this.activity={type:"idle"},this.syncHeldTool(),$n(this.player),this.hud.hideProgress())}}else if(this.activity.type==="combat"){const s=this.activity,r=s.target;if(this.hud.showTarget(this.combatName(r),Math.max(0,r.hp)/r.maxHp),r.hp<=0||r.depleted)this.activity={type:"idle"},this.syncHeldTool(),$n(this.player),this.hud.hideTarget(),this.combatCamPull=0,this.combatOorT=0;else{const o=this.monsterAttackRange(r),a=o+.55,c=o+1.45;let l=this.distTo(r);const h=s.swingT>0&&s.swingT/s.swingDur<$l+.08;if(l>a&&l<c+.35&&h){const d=r.mesh.position.x-this.player.position.x,f=r.mesh.position.z-this.player.position.z,m=Math.hypot(d,f)||1,_=Math.min(l-o*.88,3.6*t);this.player.position.x+=d/m*_,this.player.position.z+=f/m*_,l=this.distTo(r),this.combatOorT=Math.max(0,this.combatOorT-t*1.5)}else if(l>a&&l<=c&&!h){const d=r.mesh.position.x-this.player.position.x,f=r.mesh.position.z-this.player.position.z,m=Math.hypot(d,f)||1,_=Math.min(l-o*.9,2.4*t);this.player.position.x+=d/m*_,this.player.position.z+=f/m*_,l=this.distTo(r),this.combatOorT+=t*.55}else l>c?this.combatOorT+=t:this.combatOorT=Math.max(0,this.combatOorT-t*2.5);const u=h?.55:.3;if(l>c&&this.combatOorT>=u&&!h)this.abortCombatSoft(t,!0);else{if(this.faceToward(r.mesh.position.x,r.mesh.position.z,t,10),this.isMonster(r)){const d=this.player.position.x-r.mesh.position.x,f=this.player.position.z-r.mesh.position.z;Math.hypot(d,f)>.01&&(r.mesh.rotation.y=ws(r.mesh.rotation.y,Math.atan2(d,f),6,t))}if(s.swingT>0){s.swingT+=t;const d=Math.min(1,s.swingT/s.swingDur);if(nu(this.player,d),!this.playerTeleDone&&d<.12){this.playerTeleDone=!0;const f=y_*s.swingDur;this.vfx.spawnTelegraph(this.player.position.clone(),!1,f,.7)}!s.hitDone&&d>=g_&&d<=$l+.05&&this.distTo(r)<=o+.95&&(s.hitDone=!0,this.swingAtTarget(r)),d>=1&&(s.swingT=0,s.hitDone=!1,this.playerTeleDone=!1,s.cooldown=.72,Ue(this.player,"sword"))}else s.cooldown-=t,xi(this.player,this.animTime,!0),s.cooldown<=0&&this.distTo(r)<=a+.2&&(s.swingT=.001,s.swingDur=Br,s.hitDone=!1,this.playerTeleDone=!1,Ue(this.player,"sword"))}}}else this.syncHeldTool(),this.stoppingSteps>0?(this.stoppingSteps-=t,this.moveBlend=Math.max(0,this.moveBlend-t*3.5),this.gaitPhase+=4.5*t,zr(this.player,this.gaitPhase,.4,Math.max(.15,this.moveBlend))):(this.moveBlend=Math.max(0,this.moveBlend-t*5),this.moveSpeedCur=0,xi(this.player,this.animTime)),this.combatCamPull=Math.max(0,this.combatCamPull-t*.6);this.updateYetiAI(t),this.updateOrcAI(t),this.vfx.update(t),this.updateCombatTreeFade(t),this.combatAbortT>0&&(this.combatAbortT=Math.max(0,this.combatAbortT-t),xi(this.player,this.animTime),this.combatAbortT<=0&&(this.syncHeldTool(),$n(this.player))),this.poseSmoother.apply(this.player,t,this.activity.type==="combat"?26:18),this.snapMoversToGround(),q_(this.animTime),this.updateCamera(t),this.save.x=this.player.position.x,this.save.z=this.player.position.z,this.saveTimer+=t,this.saveTimer>=ov&&(this.saveTimer=0,this.persist()),this.hud.setOrbs(this.save.hp,this.save.maxHp,this.save.focus,this.save.stamina),this.drawMinimapMarkers()}completeGather(t){if(t.kind==="tree"){if(!this.addItem("whisper_logs",1))return;this.grantXp("woodcutting",25),this.hud.chat("You chop some Whisper Logs.","loot"),this.vfx.spawnWoodchips(t.mesh.position.clone().setY(1.1),22),t.depleted=!0,t.mesh.visible=!1,t.respawnAt=performance.now()/1e3+12}else if(t.kind==="rock"){const e=t.meta?.ore==="tin"?"tin_ore":"copper_ore";if(!this.addItem(e,1))return;this.grantXp("mining",28),this.hud.chat(`You mine some ${Zn[e].name}.`,"loot"),this.vfx.spawnMineSparks(t.mesh.position.clone().setY(.7),24),t.depleted=!0,t.mesh.visible=!1,t.respawnAt=performance.now()/1e3+14}this.refreshUI(),this.persist()}swingAtTarget(t){const e=this.save.skills.attack.level,n=this.save.skills.strength.level,s=.65+e*.01,r=this.combatName(t);if(Math.random()>s){this.hud.chat(`You swing and miss the ${r}.`,"combat");return}const o=3+Math.floor(Math.random()*(4+n));t.hp-=o;const a=t.kind==="yeti"?18:t.kind==="orc"?15:12,c=t.kind==="yeti"?14:t.kind==="orc"?12:8,l=t.kind==="yeti"?8:t.kind==="orc"?6:4;this.grantXp("attack",a),this.grantXp("strength",c),this.grantXp("constitution",l);const h=t.mesh.position.clone().setY(1.25);this.vfx.spawnHitSparks(h,14+Math.min(12,o)),this.vfx.spawnImpactBurst(h,t.kind==="yeti"?16:20,t.kind==="yeti"),this.vfx.spawnDamage(t.mesh.position.clone().setY(1.5),o,o>=8),Y_(t.mesh,o>=10?260:160);const u=o>=12?1.25:o>=8?.9:.5,d=o>=12?.28:o>=8?.18:.1,f=Math.atan2(t.mesh.position.x-this.player.position.x,t.mesh.position.z-this.player.position.z);if(t.mesh.position.x+=Math.sin(f)*d,t.mesh.position.z+=Math.cos(f)*d,this.hitReacts.push({mesh:t.mesh,t:u>1?.48:.28,inten:u}),t.kind==="yeti"&&(this.vfx.spawnIceBurst(t.mesh.position.clone(),12),this.yetiAggroed=!0),t.kind==="orc"&&(this.vfx.spawnSpearThrust(t.mesh.position.clone(),8),this.orcAggroed=!0),t.kind==="dummy"){const m=Math.random()<.15?1:0;m?(this.save.hp=Math.max(1,this.save.hp-m),this.hud.chat(`You hit the dummy for ${o}. Splinter grazes you (-${m}).`,"combat")):this.hud.chat(`You hit the training dummy for ${o} damage.`,"combat")}else t.kind==="orc"?this.hud.chat(`You strike the Orc Scout for ${o} damage!`,"combat"):this.hud.chat(`You strike the Frost Yeti for ${o} damage!`,"combat");t.hp<=0?(t.hp=0,t.kind==="yeti"?this.onYetiDeath(t):t.kind==="orc"?this.onOrcDeath(t):this.onDummyDeath(t)):this.hud.showTarget(r,t.hp/t.maxHp),this.refreshUI(),this.persist()}onDummyDeath(t){t.respawnAt=performance.now()/1e3+8,this.deathAnims.push({mesh:t.mesh,kind:"dummy",t:0,dur:.85}),this.hud.chat("The training dummy collapses! It will be repaired shortly.","combat"),this.grantXp("defence",15),this.activity={type:"idle"},this.syncHeldTool(),$n(this.player),this.hud.hideTarget(),this.combatCamPull=0}onYetiDeath(t){t.depleted=!0,t.respawnAt=performance.now()/1e3+av,this.yetiAggroed=!1,this.yetiAttackCd=0,this.yetiSwipeT=0,this.vfx.spawnIceBurst(t.mesh.position.clone().setY(1.2),28),this.vfx.spawnImpactBurst(t.mesh.position.clone().setY(1),16,!0),this.deathAnims.push({mesh:t.mesh,kind:"yeti",t:0,dur:1.35}),this.hud.chat("The Frost Yeti collapses in a burst of frost!","combat"),this.grantXp("defence",28),this.grantXp("attack",12),this.grantXp("strength",10),this.grantXp("constitution",10),this.addItem("yeti_fur",1)&&this.hud.chat("You loot Yeti Fur.","loot"),Math.random()<.55&&this.addItem("frost_claw",1)&&this.hud.chat("You pry free a Frost Claw!","loot"),this.activity={type:"idle"},this.syncHeldTool(),this.hud.hideTarget(),this.refreshUI(),this.persist()}onOrcDeath(t){t.depleted=!0,t.respawnAt=performance.now()/1e3+lv,this.orcAggroed=!1,this.orcAttackCd=0,this.orcSwipeT=0,this.vfx.spawnSpearThrust(t.mesh.position.clone().setY(1.1),16),this.vfx.spawnHitSparks(t.mesh.position.clone().setY(1),20),this.vfx.spawnImpactBurst(t.mesh.position.clone().setY(1),14,!1),this.deathAnims.push({mesh:t.mesh,kind:"orc",t:0,dur:1.15}),this.hud.chat("The Orc Scout falls! Its spear clatters to the dirt.","combat"),this.grantXp("defence",22),this.grantXp("attack",10),this.grantXp("strength",8),this.grantXp("constitution",8),this.addItem("orc_tooth",1)&&this.hud.chat("You loot an Orc Tooth.","loot"),Math.random()<.65&&this.addItem("scout_leather",1)&&this.hud.chat("You strip Scout Leather from the vest.","loot"),this.activity={type:"idle"},this.syncHeldTool(),this.hud.hideTarget(),this.refreshUI(),this.persist()}updateYetiAI(t){const e=this.yetiTarget;if(!e||e.depleted||e.hp<=0){this.yetiSwipeT>0&&(this.yetiSwipeT=Math.max(0,this.yetiSwipeT-t));return}const n=this.distTo(e),s=Math.hypot(e.mesh.position.x-Ee.x,e.mesh.position.z-Ee.z);if(!this.yetiAggroed&&n<=Go&&(this.yetiAggroed=!0,this.hud.chat("The Frost Yeti snarls and charges!","combat"),(this.activity.type!=="combat"||this.activity.target!==e)&&this.beginCombat(e,"The Frost Yeti engages you!")),!this.yetiAggroed){const c=Ee.x-e.mesh.position.x,l=Ee.z-e.mesh.position.z,h=Math.hypot(c,l);if(h>.15){const u=Math.min(h,2.8*t);e.mesh.position.x+=c/h*u,e.mesh.position.z+=l/h*u,e.mesh.rotation.y=ws(e.mesh.rotation.y,Math.atan2(c,l),4,t),e.mesh.position.y=0,mi(e.mesh,this.animTime,!0,Math.min(1,h/2)),yr(e.mesh,0);return}e.mesh.position.set(Ee.x,0,Ee.z),mi(e.mesh,this.animTime,!1),yr(e.mesh,0);return}const r=this.player.position.x-e.mesh.position.x,o=this.player.position.z-e.mesh.position.z;Math.hypot(r,o)>.01&&(e.mesh.rotation.y=ws(e.mesh.rotation.y,Math.atan2(r,o),5,t));let a=!1;if(n>Ss&&n<Go+5&&s<7.5){this.yetiMoveBlend=Math.min(1,this.yetiMoveBlend+t*2.2);const c=Math.min(n-Ss*.85,2.35*this.yetiMoveBlend*t),l=Math.hypot(r,o)||1;e.mesh.position.x+=r/l*c,e.mesh.position.z+=o/l*c,a=!0;const h=Ee.x,u=Ee.z,d=e.mesh.position.x-h,f=e.mesh.position.z-u,m=Math.hypot(d,f);m>7.5&&(e.mesh.position.x=h+d/m*7.5,e.mesh.position.z=u+f/m*7.5)}else this.yetiMoveBlend=Math.max(0,this.yetiMoveBlend-t*3);if(n>Go+7||s>8.5){this.yetiAggroed=!1,this.yetiSwipeT=0,this.hud.chat("The Frost Yeti loses interest and returns to the clearing.","system"),e.mesh.position.x+=(Ee.x-e.mesh.position.x)*Math.min(1,t*.9),e.mesh.position.z+=(Ee.z-e.mesh.position.z)*Math.min(1,t*.9),this.activity.type==="combat"&&this.activity.target===e&&(this.activity={type:"idle"},this.syncHeldTool(),$n(this.player),this.hud.hideTarget()),mi(e.mesh,this.animTime,!0,.7);return}if(this.yetiSwipeT>0){this.yetiSwipeT+=t;const c=Math.min(1,this.yetiSwipeT/kr);if(iu(e.mesh,c),!this.yetiTeleDone){this.yetiTeleDone=!0;const l=w_*kr+.08;this.vfx.spawnTelegraph(e.mesh.position.clone(),!0,l,1.35),this.vfx.spawnArcTelegraph(e.mesh.position.clone(),e.mesh.rotation.y,!0,l)}!this.yetiHitDone&&c>=__&&c<=v_+.05&&(this.yetiHitDone=!0,this.yetiMeleeHit(e)),c>=1&&(this.yetiSwipeT=0,this.yetiHitDone=!1,this.yetiTeleDone=!1,yr(e.mesh,0))}else mi(e.mesh,this.animTime,a,Math.max(this.yetiMoveBlend,a?.4:0)),this.yetiAttackCd-=t,n<=Ss+.4&&this.yetiAttackCd<=0&&(this.yetiAttackCd=2.55,this.yetiSwipeT=.001,this.yetiHitDone=!1,this.yetiTeleDone=!1)}yetiMeleeHit(t){if(this.distTo(t)>Ss+.65)return;const n=this.save.skills.defence.level,s=nh+Math.floor(Math.random()*(cv-nh+1)),r=Math.max(2,s-Math.floor(n/5));this.save.hp=Math.max(0,this.save.hp-r),this.vfx.spawnClawSlash(this.player.position.clone(),14),this.vfx.spawnIceBurst(this.player.position.clone(),16),this.vfx.spawnImpactBurst(this.player.position.clone().setY(1.1),16,!0),this.vfx.spawnDamage(this.player.position.clone().setY(1.3),r),this.playerFlinch=r>=8?1.15:.75;const o=Math.atan2(this.player.position.x-t.mesh.position.x,this.player.position.z-t.mesh.position.z),a=r>=8?3.4:2.4;this.playerKnock.set(Math.sin(o)*a,0,Math.cos(o)*a),this.hud.chat(`The Frost Yeti swipes you for ${r} damage!`,"combat"),this.hud.setOrbs(this.save.hp,this.save.maxHp,this.save.focus,this.save.stamina),this.save.hp<=0&&(this.save.hp=Math.max(10,Math.floor(this.save.maxHp*.35)),this.player.position.set(0,0,2),this.yetiAggroed=!1,this.activity={type:"idle"},this.syncHeldTool(),this.hud.hideTarget(),this.hud.chat("You fall! You wake by the Thornrest campfire, battered but alive.","combat"),t.mesh.position.set(Ee.x,0,Ee.z)),this.activity.type!=="combat"&&t.hp>0&&!t.depleted&&this.beginCombat(t,"You raise your guard against the Frost Yeti!"),this.refreshUI(),this.persist()}updateOrcAI(t){const e=this.orcTarget;if(!e||e.depleted||e.hp<=0){this.orcSwipeT>0&&(this.orcSwipeT=Math.max(0,this.orcSwipeT-t));return}const n=this.distTo(e),s=Math.hypot(e.mesh.position.x-ke.x,e.mesh.position.z-ke.z);if(!this.orcAggroed&&n<=Vo&&(this.orcAggroed=!0,this.hud.chat("The Orc Scout snarls and levels its spear!","combat"),(this.activity.type!=="combat"||this.activity.target!==e)&&this.beginCombat(e,"The Orc Scout engages you!")),!this.orcAggroed){Ls(e.mesh,this.animTime,!1),ko(e.mesh,0);return}const r=this.player.position.x-e.mesh.position.x,o=this.player.position.z-e.mesh.position.z;Math.hypot(r,o)>.01&&(e.mesh.rotation.y=ws(e.mesh.rotation.y,Math.atan2(r,o),7,t));let a=!1;if(n>Es&&n<Vo+5&&s<7.5){this.orcMoveBlend=Math.min(1,this.orcMoveBlend+t*3.5);const c=Math.min(n-Es*.85,3.2*this.orcMoveBlend*t),l=Math.hypot(r,o)||1;e.mesh.position.x+=r/l*c,e.mesh.position.z+=o/l*c,a=!0;const h=ke.x,u=ke.z,d=e.mesh.position.x-h,f=e.mesh.position.z-u,m=Math.hypot(d,f);m>7.5&&(e.mesh.position.x=h+d/m*7.5,e.mesh.position.z=u+f/m*7.5)}else this.orcMoveBlend=Math.max(0,this.orcMoveBlend-t*4);if(n>Vo+7||s>8.5){this.orcAggroed=!1,this.orcSwipeT=0,this.hud.chat("The Orc Scout loses interest and returns to the trail.","system"),e.mesh.position.x+=(ke.x-e.mesh.position.x)*Math.min(1,t*1.1),e.mesh.position.z+=(ke.z-e.mesh.position.z)*Math.min(1,t*1.1),this.activity.type==="combat"&&this.activity.target===e&&(this.activity={type:"idle"},this.syncHeldTool(),$n(this.player),this.hud.hideTarget()),Ls(e.mesh,this.animTime,!0,.75);return}if(this.orcSwipeT>0){this.orcSwipeT+=t;const c=Math.min(1,this.orcSwipeT/Hr);if(su(e.mesh,c),!this.orcTeleDone){this.orcTeleDone=!0;const l=S_*Hr+.06;this.vfx.spawnTelegraph(e.mesh.position.clone(),!1,l,1.1)}!this.orcHitDone&&c>=x_&&c<=M_+.05&&(this.orcHitDone=!0,this.orcMeleeHit(e)),c>=1&&(this.orcSwipeT=0,this.orcHitDone=!1,this.orcTeleDone=!1,ko(e.mesh,0))}else Ls(e.mesh,this.animTime,a,Math.max(this.orcMoveBlend,a?.45:0)),this.orcAttackCd-=t,n<=Es+.4&&this.orcAttackCd<=0&&(this.orcAttackCd=2.05,this.orcSwipeT=.001,this.orcHitDone=!1,this.orcTeleDone=!1)}orcMeleeHit(t){if(this.distTo(t)>Es+.65)return;const n=this.save.skills.defence.level,s=sh+Math.floor(Math.random()*(hv-sh+1)),r=Math.max(2,s-Math.floor(n/5));this.save.hp=Math.max(0,this.save.hp-r),this.vfx.spawnSpearThrust(this.player.position.clone(),14),this.vfx.spawnHitSparks(this.player.position.clone().setY(1.1),14),this.vfx.spawnImpactBurst(this.player.position.clone().setY(1.05),16,!1),this.vfx.spawnDamage(this.player.position.clone().setY(1.3),r),this.playerFlinch=r>=7?1.05:.7;const o=Math.atan2(this.player.position.x-t.mesh.position.x,this.player.position.z-t.mesh.position.z),a=r>=7?2.9:2.1;this.playerKnock.set(Math.sin(o)*a,0,Math.cos(o)*a),this.hud.chat(`The Orc Scout thrusts its spear for ${r} damage!`,"combat"),this.hud.setOrbs(this.save.hp,this.save.maxHp,this.save.focus,this.save.stamina),this.save.hp<=0&&(this.save.hp=Math.max(10,Math.floor(this.save.maxHp*.35)),this.player.position.set(0,0,2),this.orcAggroed=!1,this.yetiAggroed=!1,this.activity={type:"idle"},this.syncHeldTool(),this.hud.hideTarget(),this.hud.chat("You fall! You wake by the Thornrest campfire, battered but alive.","combat"),t.mesh.position.set(ke.x,0,ke.z)),this.activity.type!=="combat"&&t.hp>0&&!t.depleted&&this.beginCombat(t,"You raise your guard against the Orc Scout!"),this.refreshUI(),this.persist()}abortCombatSoft(t,e){e&&this.hud.chat("You step out of range.","combat"),this.combatAbortT=.22,this.combatOorT=0,this.activity={type:"idle"},this.hud.hideTarget(),this.combatCamPull=Math.max(.15,this.combatCamPull*.5),Ue(this.player,"sword")}sitOnGround(t,e=0){t.position.y=ye(t.position.x,t.position.z)+e}snapMoversToGround(){const t=new Set(this.deathAnims.map(e=>e.mesh));this.sitOnGround(this.player,Number(this.player.userData.locomotionY)||0),this.yetiTarget&&!t.has(this.yetiTarget.mesh)&&this.sitOnGround(this.yetiTarget.mesh),this.orcTarget&&!t.has(this.orcTarget.mesh)&&this.sitOnGround(this.orcTarget.mesh),this.dummyTarget&&!t.has(this.dummyTarget.mesh)&&this.sitOnGround(this.dummyTarget.mesh),this.moveMarker.visible&&this.sitOnGround(this.moveMarker,.06)}updateCamera(t){const e=Math.min(1,this.combatCamPull),n=this.camOffset.x,s=this.camOffset.y+e*1.55,r=this.camOffset.z+e*.85,o=this.camSmooth;o.set(this.player.position.x+n,s,this.player.position.z+r);const a=1-Math.exp(-4.2*t);this.camera.position.lerp(o,a);let c=this.player.position.x,l=this.player.position.z;if(this.activity.type==="combat"){const h=this.activity.target.mesh.position;c=this.player.position.x*.55+h.x*.45,l=this.player.position.z*.55+h.z*.45}this.lookSmooth.set(c,this.player.position.y+1.05+e*.55,l),this.camLook.lerp(this.lookSmooth,a),this.camera.lookAt(this.camLook)}updateCombatTreeFade(t){const e=this.activity.type==="combat"||this.yetiAggroed||this.orcAggroed,n=this.camera.position;let s=this.player.position.x,r=this.player.position.z;this.activity.type==="combat"?(s=s*.5+this.activity.target.mesh.position.x*.5,r=r*.5+this.activity.target.mesh.position.z*.5):this.yetiAggroed&&this.yetiTarget?(s=this.yetiTarget.mesh.position.x,r=this.yetiTarget.mesh.position.z):this.orcAggroed&&this.orcTarget&&(s=this.orcTarget.mesh.position.x,r=this.orcTarget.mesh.position.z);const o=s-n.x,a=r-n.z,c=Math.hypot(o,a)||1;for(const l of this.objects){if(l.kind!=="tree")continue;const h=l.mesh.position.x-n.x,u=l.mesh.position.z-n.z,d=Math.max(0,Math.min(1,(h*o+u*a)/(c*c))),f=n.x+o*d,m=n.z+a*d,_=Math.hypot(l.mesh.position.x-f,l.mesh.position.z-m),g=e&&d>.12&&d<.92&&_<2.15?.22:1;l.mesh.traverse(p=>{const w=p;if(!w.isMesh||w.name==="hit"||w.name==="outline")return;const S=w.material;if(!S||!("opacity"in S))return;if(!w.userData.fadeReady){const R=S.clone();R.transparent=!0,w.material=R,w.userData.fadeReady=!0,w.userData.fadeOpacity=1}const x=w.userData.fadeOpacity??1,D=x+(g-x)*Math.min(1,t*5.5);w.userData.fadeOpacity=D;const E=w.material;E.opacity=D,E.transparent=D<.98,E.depthWrite=D>.75})}}drawMinimapMarkers(){const t=[];for(const e of this.objects)e.depleted&&e.kind!=="dummy"&&e.kind!=="yeti"&&e.kind!=="orc"||(e.kind==="tree"?t.push({x:e.mesh.position.x,z:e.mesh.position.z,color:"#2d8a2d"}):e.kind==="rock"?t.push({x:e.mesh.position.x,z:e.mesh.position.z,color:"#888"}):e.kind==="yeti"?t.push({x:e.mesh.position.x,z:e.mesh.position.z,color:"#7ec8ff"}):e.kind==="orc"?t.push({x:e.mesh.position.x,z:e.mesh.position.z,color:"#6a9a2a"}):t.push({x:e.mesh.position.x,z:e.mesh.position.z,color:"#c43c3c"}));t.push({x:-1.2,z:-.5,color:"#ff8844"}),this.hud.drawMinimap(this.player.position.x,this.player.position.z,this.player.rotation.y,t)}refreshUI(){this.hud.setInventory(this.save.inventory),this.hud.setEquipment(this.save),this.hud.setSkills(this.save),this.hud.setOrbs(this.save.hp,this.save.maxHp,this.save.focus,this.save.stamina)}persist(){nv(this.save)}onResize(){this.camera.aspect=window.innerWidth/window.innerHeight,this.camera.updateProjectionMatrix(),this.renderer.setSize(window.innerWidth,window.innerHeight),this.studio.resize(window.innerWidth,window.innerHeight)}animate=()=>{if(!this.running)return;requestAnimationFrame(this.animate);const t=Math.min(.05,this.clock.getDelta());if(this.studio.isOpen()){this.studio.tick(t),this.studio.render(this.renderer);return}this.update(t),this.renderer.render(this.scene,this.camera)}}const fu=document.getElementById("game-canvas");if(!(fu instanceof HTMLCanvasElement))throw new Error("Missing #game-canvas");new dv(fu);
