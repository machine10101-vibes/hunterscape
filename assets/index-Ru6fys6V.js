(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function e(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=e(s);fetch(s.href,r)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Va="170",_u=0,Tc=1,vu=2,rh=1,oh=2,In=3,ei=0,Fe=1,Te=2,Qn=0,$i=1,bc=2,Ac=3,Rc=4,xu=5,fi=100,Mu=101,yu=102,wu=103,Su=104,Eu=200,Tu=201,bu=202,Au=203,Xo=204,qo=205,Ru=206,Cu=207,Pu=208,Lu=209,Iu=210,Du=211,Uu=212,Nu=213,Fu=214,Yo=0,$o=1,Zo=2,ji=3,Ko=4,Jo=5,jo=6,Qo=7,Wa=0,Ou=1,zu=2,ti=0,Bu=1,ku=2,Hu=3,Vr=4,Gu=5,Vu=6,Wu=7,ah=300,Qi=301,ts=302,ta=303,ea=304,Wr=306,es=1e3,_i=1001,na=1002,Qe=1003,Xu=1004,qs=1005,yn=1006,jr=1007,vi=1008,Fn=1009,ch=1010,lh=1011,Is=1012,Xa=1013,wi=1014,wn=1015,zs=1016,qa=1017,Ya=1018,ns=1020,hh=35902,uh=1021,dh=1022,fn=1023,fh=1024,ph=1025,Zi=1026,is=1027,$a=1028,Za=1029,mh=1030,Ka=1031,Ja=1033,Sr=33776,Er=33777,Tr=33778,br=33779,ia=35840,sa=35841,ra=35842,oa=35843,aa=36196,ca=37492,la=37496,ha=37808,ua=37809,da=37810,fa=37811,pa=37812,ma=37813,ga=37814,_a=37815,va=37816,xa=37817,Ma=37818,ya=37819,wa=37820,Sa=37821,Ar=36492,Ea=36494,Ta=36495,gh=36283,ba=36284,Aa=36285,Ra=36286,qu=3200,Yu=3201,ja=0,$u=1,Mn="",Ue="srgb",os="srgb-linear",Xr="linear",he="srgb",Pi=7680,Cc=519,Zu=512,Ku=513,Ju=514,_h=515,ju=516,Qu=517,td=518,ed=519,Pc=35044,nd=35048,Lc="300 es",Dn=2e3,Pr=2001;class as{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const s=this._listeners[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}}const ze=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Qr=Math.PI/180,Ca=180/Math.PI;function cs(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(ze[i&255]+ze[i>>8&255]+ze[i>>16&255]+ze[i>>24&255]+"-"+ze[t&255]+ze[t>>8&255]+"-"+ze[t>>16&15|64]+ze[t>>24&255]+"-"+ze[e&63|128]+ze[e>>8&255]+"-"+ze[e>>16&255]+ze[e>>24&255]+ze[n&255]+ze[n>>8&255]+ze[n>>16&255]+ze[n>>24&255]).toLowerCase()}function be(i,t,e){return Math.max(t,Math.min(e,i))}function id(i,t){return(i%t+t)%t}function to(i,t,e){return(1-e)*i+e*t}function fs(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Ye(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}class gt{constructor(t=0,e=0){gt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(be(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*s+t.x,this.y=r*s+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Zt{constructor(t,e,n,s,r,o,a,c,l){Zt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,c,l)}set(t,e,n,s,r,o,a,c,l){const h=this.elements;return h[0]=t,h[1]=s,h[2]=a,h[3]=e,h[4]=r,h[5]=c,h[6]=n,h[7]=o,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],h=n[4],u=n[7],d=n[2],f=n[5],m=n[8],v=s[0],g=s[3],p=s[6],S=s[1],w=s[4],x=s[7],U=s[2],T=s[5],R=s[8];return r[0]=o*v+a*S+c*U,r[3]=o*g+a*w+c*T,r[6]=o*p+a*x+c*R,r[1]=l*v+h*S+u*U,r[4]=l*g+h*w+u*T,r[7]=l*p+h*x+u*R,r[2]=d*v+f*S+m*U,r[5]=d*g+f*w+m*T,r[8]=d*p+f*x+m*R,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8];return e*o*h-e*a*l-n*r*h+n*a*c+s*r*l-s*o*c}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8],u=h*o-a*l,d=a*c-h*r,f=l*r-o*c,m=e*u+n*d+s*f;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/m;return t[0]=u*v,t[1]=(s*l-h*n)*v,t[2]=(a*n-s*o)*v,t[3]=d*v,t[4]=(h*e-s*c)*v,t[5]=(s*r-a*e)*v,t[6]=f*v,t[7]=(n*c-l*e)*v,t[8]=(o*e-n*r)*v,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,o,a){const c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*o+l*a)+o+t,-s*l,s*c,-s*(-l*o+c*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(eo.makeScale(t,e)),this}rotate(t){return this.premultiply(eo.makeRotation(-t)),this}translate(t,e){return this.premultiply(eo.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const eo=new Zt;function vh(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function Lr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function sd(){const i=Lr("canvas");return i.style.display="block",i}const Ic={};function Ts(i){i in Ic||(Ic[i]=!0,console.warn(i))}function rd(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}function od(i){const t=i.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function ad(i){const t=i.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const ne={enabled:!0,workingColorSpace:os,spaces:{},convert:function(i,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===he&&(i.r=Un(i.r),i.g=Un(i.g),i.b=Un(i.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(i.applyMatrix3(this.spaces[t].toXYZ),i.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===he&&(i.r=Ki(i.r),i.g=Ki(i.g),i.b=Ki(i.b))),i},fromWorkingColorSpace:function(i,t){return this.convert(i,this.workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===Mn?Xr:this.spaces[i].transfer},getLuminanceCoefficients:function(i,t=this.workingColorSpace){return i.fromArray(this.spaces[t].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,t,e){return i.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}};function Un(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Ki(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}const Dc=[.64,.33,.3,.6,.15,.06],Uc=[.2126,.7152,.0722],Nc=[.3127,.329],Fc=new Zt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Oc=new Zt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);ne.define({[os]:{primaries:Dc,whitePoint:Nc,transfer:Xr,toXYZ:Fc,fromXYZ:Oc,luminanceCoefficients:Uc,workingColorSpaceConfig:{unpackColorSpace:Ue},outputColorSpaceConfig:{drawingBufferColorSpace:Ue}},[Ue]:{primaries:Dc,whitePoint:Nc,transfer:he,toXYZ:Fc,fromXYZ:Oc,luminanceCoefficients:Uc,outputColorSpaceConfig:{drawingBufferColorSpace:Ue}}});let Li;class cd{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Li===void 0&&(Li=Lr("canvas")),Li.width=t.width,Li.height=t.height;const n=Li.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=Li}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Lr("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Un(r[o]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Un(e[n]/255)*255):e[n]=Un(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let ld=0;class xh{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:ld++}),this.uuid=cs(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(no(s[o].image)):r.push(no(s[o]))}else r=no(s);n.url=r}return e||(t.images[this.uuid]=n),n}}function no(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?cd.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let hd=0;class Ge extends as{constructor(t=Ge.DEFAULT_IMAGE,e=Ge.DEFAULT_MAPPING,n=_i,s=_i,r=yn,o=vi,a=fn,c=Fn,l=Ge.DEFAULT_ANISOTROPY,h=Mn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:hd++}),this.uuid=cs(),this.name="",this.source=new xh(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new gt(0,0),this.repeat=new gt(1,1),this.center=new gt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Zt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==ah)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case es:t.x=t.x-Math.floor(t.x);break;case _i:t.x=t.x<0?0:1;break;case na:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case es:t.y=t.y-Math.floor(t.y);break;case _i:t.y=t.y<0?0:1;break;case na:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Ge.DEFAULT_IMAGE=null;Ge.DEFAULT_MAPPING=ah;Ge.DEFAULT_ANISOTROPY=1;class ue{constructor(t=0,e=0,n=0,s=1){ue.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r;const c=t.elements,l=c[0],h=c[4],u=c[8],d=c[1],f=c[5],m=c[9],v=c[2],g=c[6],p=c[10];if(Math.abs(h-d)<.01&&Math.abs(u-v)<.01&&Math.abs(m-g)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+v)<.1&&Math.abs(m+g)<.1&&Math.abs(l+f+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const w=(l+1)/2,x=(f+1)/2,U=(p+1)/2,T=(h+d)/4,R=(u+v)/4,D=(m+g)/4;return w>x&&w>U?w<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(w),s=T/n,r=R/n):x>U?x<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(x),n=T/s,r=D/s):U<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(U),n=R/r,s=D/r),this.set(n,s,r,e),this}let S=Math.sqrt((g-m)*(g-m)+(u-v)*(u-v)+(d-h)*(d-h));return Math.abs(S)<.001&&(S=1),this.x=(g-m)/S,this.y=(u-v)/S,this.z=(d-h)/S,this.w=Math.acos((l+f+p-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class ud extends as{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new ue(0,0,t,e),this.scissorTest=!1,this.viewport=new ue(0,0,t,e);const s={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:yn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const r=new Ge(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,s=t.textures.length;n<s;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new xh(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Si extends ud{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class Mh extends Ge{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Qe,this.minFilter=Qe,this.wrapR=_i,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class dd extends Ge{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Qe,this.minFilter=Qe,this.wrapR=_i,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Bs{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,o,a){let c=n[s+0],l=n[s+1],h=n[s+2],u=n[s+3];const d=r[o+0],f=r[o+1],m=r[o+2],v=r[o+3];if(a===0){t[e+0]=c,t[e+1]=l,t[e+2]=h,t[e+3]=u;return}if(a===1){t[e+0]=d,t[e+1]=f,t[e+2]=m,t[e+3]=v;return}if(u!==v||c!==d||l!==f||h!==m){let g=1-a;const p=c*d+l*f+h*m+u*v,S=p>=0?1:-1,w=1-p*p;if(w>Number.EPSILON){const U=Math.sqrt(w),T=Math.atan2(U,p*S);g=Math.sin(g*T)/U,a=Math.sin(a*T)/U}const x=a*S;if(c=c*g+d*x,l=l*g+f*x,h=h*g+m*x,u=u*g+v*x,g===1-a){const U=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=U,l*=U,h*=U,u*=U}}t[e]=c,t[e+1]=l,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,s,r,o){const a=n[s],c=n[s+1],l=n[s+2],h=n[s+3],u=r[o],d=r[o+1],f=r[o+2],m=r[o+3];return t[e]=a*m+h*u+c*f-l*d,t[e+1]=c*m+h*d+l*u-a*f,t[e+2]=l*m+h*f+a*d-c*u,t[e+3]=h*m-a*u-c*d-l*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,c=Math.sin,l=a(n/2),h=a(s/2),u=a(r/2),d=c(n/2),f=c(s/2),m=c(r/2);switch(o){case"XYZ":this._x=d*h*u+l*f*m,this._y=l*f*u-d*h*m,this._z=l*h*m+d*f*u,this._w=l*h*u-d*f*m;break;case"YXZ":this._x=d*h*u+l*f*m,this._y=l*f*u-d*h*m,this._z=l*h*m-d*f*u,this._w=l*h*u+d*f*m;break;case"ZXY":this._x=d*h*u-l*f*m,this._y=l*f*u+d*h*m,this._z=l*h*m+d*f*u,this._w=l*h*u-d*f*m;break;case"ZYX":this._x=d*h*u-l*f*m,this._y=l*f*u+d*h*m,this._z=l*h*m-d*f*u,this._w=l*h*u+d*f*m;break;case"YZX":this._x=d*h*u+l*f*m,this._y=l*f*u+d*h*m,this._z=l*h*m-d*f*u,this._w=l*h*u-d*f*m;break;case"XZY":this._x=d*h*u-l*f*m,this._y=l*f*u-d*h*m,this._z=l*h*m+d*f*u,this._w=l*h*u+d*f*m;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],s=e[4],r=e[8],o=e[1],a=e[5],c=e[9],l=e[2],h=e[6],u=e[10],d=n+a+u;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-c)*f,this._y=(r-l)*f,this._z=(o-s)*f}else if(n>a&&n>u){const f=2*Math.sqrt(1+n-a-u);this._w=(h-c)/f,this._x=.25*f,this._y=(s+o)/f,this._z=(r+l)/f}else if(a>u){const f=2*Math.sqrt(1+a-n-u);this._w=(r-l)/f,this._x=(s+o)/f,this._y=.25*f,this._z=(c+h)/f}else{const f=2*Math.sqrt(1+u-n-a);this._w=(o-s)/f,this._x=(r+l)/f,this._y=(c+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(be(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,s=t._y,r=t._z,o=t._w,a=e._x,c=e._y,l=e._z,h=e._w;return this._x=n*h+o*a+s*l-r*c,this._y=s*h+o*c+r*a-n*l,this._z=r*h+o*l+n*c-s*a,this._w=o*h-n*a-s*c-r*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,s=this._y,r=this._z,o=this._w;let a=o*t._w+n*t._x+s*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;const c=1-a*a;if(c<=Number.EPSILON){const f=1-e;return this._w=f*o+e*this._w,this._x=f*n+e*this._x,this._y=f*s+e*this._y,this._z=f*r+e*this._z,this.normalize(),this}const l=Math.sqrt(c),h=Math.atan2(l,a),u=Math.sin((1-e)*h)/l,d=Math.sin(e*h)/l;return this._w=o*u+this._w*d,this._x=n*u+this._x*d,this._y=s*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class I{constructor(t=0,e=0,n=0){I.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(zc.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(zc.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(t){const e=this.x,n=this.y,s=this.z,r=t.x,o=t.y,a=t.z,c=t.w,l=2*(o*s-a*n),h=2*(a*e-r*s),u=2*(r*n-o*e);return this.x=e+c*l+o*u-a*h,this.y=n+c*h+a*l-r*u,this.z=s+c*u+r*h-o*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,s=t.y,r=t.z,o=e.x,a=e.y,c=e.z;return this.x=s*c-r*a,this.y=r*o-n*c,this.z=n*a-s*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return io.copy(this).projectOnVector(t),this.sub(io)}reflect(t){return this.sub(io.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(be(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const io=new I,zc=new Bs;class zn{constructor(t=new I(1/0,1/0,1/0),e=new I(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(cn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(cn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=cn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,cn):cn.fromBufferAttribute(r,o),cn.applyMatrix4(t.matrixWorld),this.expandByPoint(cn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Ys.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Ys.copy(n.boundingBox)),Ys.applyMatrix4(t.matrixWorld),this.union(Ys)}const s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,cn),cn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(ps),$s.subVectors(this.max,ps),Ii.subVectors(t.a,ps),Di.subVectors(t.b,ps),Ui.subVectors(t.c,ps),Hn.subVectors(Di,Ii),Gn.subVectors(Ui,Di),ri.subVectors(Ii,Ui);let e=[0,-Hn.z,Hn.y,0,-Gn.z,Gn.y,0,-ri.z,ri.y,Hn.z,0,-Hn.x,Gn.z,0,-Gn.x,ri.z,0,-ri.x,-Hn.y,Hn.x,0,-Gn.y,Gn.x,0,-ri.y,ri.x,0];return!so(e,Ii,Di,Ui,$s)||(e=[1,0,0,0,1,0,0,0,1],!so(e,Ii,Di,Ui,$s))?!1:(Zs.crossVectors(Hn,Gn),e=[Zs.x,Zs.y,Zs.z],so(e,Ii,Di,Ui,$s))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,cn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(cn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(An[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),An[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),An[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),An[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),An[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),An[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),An[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),An[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(An),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const An=[new I,new I,new I,new I,new I,new I,new I,new I],cn=new I,Ys=new zn,Ii=new I,Di=new I,Ui=new I,Hn=new I,Gn=new I,ri=new I,ps=new I,$s=new I,Zs=new I,oi=new I;function so(i,t,e,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){oi.fromArray(i,r);const a=s.x*Math.abs(oi.x)+s.y*Math.abs(oi.y)+s.z*Math.abs(oi.z),c=t.dot(oi),l=e.dot(oi),h=n.dot(oi);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>a)return!1}return!0}const fd=new zn,ms=new I,ro=new I;class ls{constructor(t=new I,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):fd.setFromPoints(t).getCenter(n);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;ms.subVectors(t,this.center);const e=ms.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(ms,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(ro.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(ms.copy(t.center).add(ro)),this.expandByPoint(ms.copy(t.center).sub(ro))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Rn=new I,oo=new I,Ks=new I,Vn=new I,ao=new I,Js=new I,co=new I;class Qa{constructor(t=new I,e=new I(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Rn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Rn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Rn.copy(this.origin).addScaledVector(this.direction,e),Rn.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){oo.copy(t).add(e).multiplyScalar(.5),Ks.copy(e).sub(t).normalize(),Vn.copy(this.origin).sub(oo);const r=t.distanceTo(e)*.5,o=-this.direction.dot(Ks),a=Vn.dot(this.direction),c=-Vn.dot(Ks),l=Vn.lengthSq(),h=Math.abs(1-o*o);let u,d,f,m;if(h>0)if(u=o*c-a,d=o*a-c,m=r*h,u>=0)if(d>=-m)if(d<=m){const v=1/h;u*=v,d*=v,f=u*(u+o*d+2*a)+d*(o*u+d+2*c)+l}else d=r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*c)+l;else d=-r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*c)+l;else d<=-m?(u=Math.max(0,-(-o*r+a)),d=u>0?-r:Math.min(Math.max(-r,-c),r),f=-u*u+d*(d+2*c)+l):d<=m?(u=0,d=Math.min(Math.max(-r,-c),r),f=d*(d+2*c)+l):(u=Math.max(0,-(o*r+a)),d=u>0?r:Math.min(Math.max(-r,-c),r),f=-u*u+d*(d+2*c)+l);else d=o>0?-r:r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(oo).addScaledVector(Ks,d),f}intersectSphere(t,e){Rn.subVectors(t.center,this.origin);const n=Rn.dot(this.direction),s=Rn.dot(Rn)-n*n,r=t.radius*t.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,o,a,c;const l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return l>=0?(n=(t.min.x-d.x)*l,s=(t.max.x-d.x)*l):(n=(t.max.x-d.x)*l,s=(t.min.x-d.x)*l),h>=0?(r=(t.min.y-d.y)*h,o=(t.max.y-d.y)*h):(r=(t.max.y-d.y)*h,o=(t.min.y-d.y)*h),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),u>=0?(a=(t.min.z-d.z)*u,c=(t.max.z-d.z)*u):(a=(t.max.z-d.z)*u,c=(t.min.z-d.z)*u),n>c||a>s)||((a>n||n!==n)&&(n=a),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,Rn)!==null}intersectTriangle(t,e,n,s,r){ao.subVectors(e,t),Js.subVectors(n,t),co.crossVectors(ao,Js);let o=this.direction.dot(co),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Vn.subVectors(this.origin,t);const c=a*this.direction.dot(Js.crossVectors(Vn,Js));if(c<0)return null;const l=a*this.direction.dot(ao.cross(Vn));if(l<0||c+l>o)return null;const h=-a*Vn.dot(co);return h<0?null:this.at(h/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class le{constructor(t,e,n,s,r,o,a,c,l,h,u,d,f,m,v,g){le.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,c,l,h,u,d,f,m,v,g)}set(t,e,n,s,r,o,a,c,l,h,u,d,f,m,v,g){const p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=s,p[1]=r,p[5]=o,p[9]=a,p[13]=c,p[2]=l,p[6]=h,p[10]=u,p[14]=d,p[3]=f,p[7]=m,p[11]=v,p[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new le().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,s=1/Ni.setFromMatrixColumn(t,0).length(),r=1/Ni.setFromMatrixColumn(t,1).length(),o=1/Ni.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,s=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(s),l=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){const d=o*h,f=o*u,m=a*h,v=a*u;e[0]=c*h,e[4]=-c*u,e[8]=l,e[1]=f+m*l,e[5]=d-v*l,e[9]=-a*c,e[2]=v-d*l,e[6]=m+f*l,e[10]=o*c}else if(t.order==="YXZ"){const d=c*h,f=c*u,m=l*h,v=l*u;e[0]=d+v*a,e[4]=m*a-f,e[8]=o*l,e[1]=o*u,e[5]=o*h,e[9]=-a,e[2]=f*a-m,e[6]=v+d*a,e[10]=o*c}else if(t.order==="ZXY"){const d=c*h,f=c*u,m=l*h,v=l*u;e[0]=d-v*a,e[4]=-o*u,e[8]=m+f*a,e[1]=f+m*a,e[5]=o*h,e[9]=v-d*a,e[2]=-o*l,e[6]=a,e[10]=o*c}else if(t.order==="ZYX"){const d=o*h,f=o*u,m=a*h,v=a*u;e[0]=c*h,e[4]=m*l-f,e[8]=d*l+v,e[1]=c*u,e[5]=v*l+d,e[9]=f*l-m,e[2]=-l,e[6]=a*c,e[10]=o*c}else if(t.order==="YZX"){const d=o*c,f=o*l,m=a*c,v=a*l;e[0]=c*h,e[4]=v-d*u,e[8]=m*u+f,e[1]=u,e[5]=o*h,e[9]=-a*h,e[2]=-l*h,e[6]=f*u+m,e[10]=d-v*u}else if(t.order==="XZY"){const d=o*c,f=o*l,m=a*c,v=a*l;e[0]=c*h,e[4]=-u,e[8]=l*h,e[1]=d*u+v,e[5]=o*h,e[9]=f*u-m,e[2]=m*u-f,e[6]=a*h,e[10]=v*u+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(pd,t,md)}lookAt(t,e,n){const s=this.elements;return Ke.subVectors(t,e),Ke.lengthSq()===0&&(Ke.z=1),Ke.normalize(),Wn.crossVectors(n,Ke),Wn.lengthSq()===0&&(Math.abs(n.z)===1?Ke.x+=1e-4:Ke.z+=1e-4,Ke.normalize(),Wn.crossVectors(n,Ke)),Wn.normalize(),js.crossVectors(Ke,Wn),s[0]=Wn.x,s[4]=js.x,s[8]=Ke.x,s[1]=Wn.y,s[5]=js.y,s[9]=Ke.y,s[2]=Wn.z,s[6]=js.z,s[10]=Ke.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],h=n[1],u=n[5],d=n[9],f=n[13],m=n[2],v=n[6],g=n[10],p=n[14],S=n[3],w=n[7],x=n[11],U=n[15],T=s[0],R=s[4],D=s[8],y=s[12],M=s[1],C=s[5],z=s[9],k=s[13],H=s[2],Z=s[6],W=s[10],st=s[14],$=s[3],ft=s[7],Mt=s[11],dt=s[15];return r[0]=o*T+a*M+c*H+l*$,r[4]=o*R+a*C+c*Z+l*ft,r[8]=o*D+a*z+c*W+l*Mt,r[12]=o*y+a*k+c*st+l*dt,r[1]=h*T+u*M+d*H+f*$,r[5]=h*R+u*C+d*Z+f*ft,r[9]=h*D+u*z+d*W+f*Mt,r[13]=h*y+u*k+d*st+f*dt,r[2]=m*T+v*M+g*H+p*$,r[6]=m*R+v*C+g*Z+p*ft,r[10]=m*D+v*z+g*W+p*Mt,r[14]=m*y+v*k+g*st+p*dt,r[3]=S*T+w*M+x*H+U*$,r[7]=S*R+w*C+x*Z+U*ft,r[11]=S*D+w*z+x*W+U*Mt,r[15]=S*y+w*k+x*st+U*dt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],o=t[1],a=t[5],c=t[9],l=t[13],h=t[2],u=t[6],d=t[10],f=t[14],m=t[3],v=t[7],g=t[11],p=t[15];return m*(+r*c*u-s*l*u-r*a*d+n*l*d+s*a*f-n*c*f)+v*(+e*c*f-e*l*d+r*o*d-s*o*f+s*l*h-r*c*h)+g*(+e*l*u-e*a*f-r*o*u+n*o*f+r*a*h-n*l*h)+p*(-s*a*h-e*c*u+e*a*d+s*o*u-n*o*d+n*c*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8],u=t[9],d=t[10],f=t[11],m=t[12],v=t[13],g=t[14],p=t[15],S=u*g*l-v*d*l+v*c*f-a*g*f-u*c*p+a*d*p,w=m*d*l-h*g*l-m*c*f+o*g*f+h*c*p-o*d*p,x=h*v*l-m*u*l+m*a*f-o*v*f-h*a*p+o*u*p,U=m*u*c-h*v*c-m*a*d+o*v*d+h*a*g-o*u*g,T=e*S+n*w+s*x+r*U;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const R=1/T;return t[0]=S*R,t[1]=(v*d*r-u*g*r-v*s*f+n*g*f+u*s*p-n*d*p)*R,t[2]=(a*g*r-v*c*r+v*s*l-n*g*l-a*s*p+n*c*p)*R,t[3]=(u*c*r-a*d*r-u*s*l+n*d*l+a*s*f-n*c*f)*R,t[4]=w*R,t[5]=(h*g*r-m*d*r+m*s*f-e*g*f-h*s*p+e*d*p)*R,t[6]=(m*c*r-o*g*r-m*s*l+e*g*l+o*s*p-e*c*p)*R,t[7]=(o*d*r-h*c*r+h*s*l-e*d*l-o*s*f+e*c*f)*R,t[8]=x*R,t[9]=(m*u*r-h*v*r-m*n*f+e*v*f+h*n*p-e*u*p)*R,t[10]=(o*v*r-m*a*r+m*n*l-e*v*l-o*n*p+e*a*p)*R,t[11]=(h*a*r-o*u*r-h*n*l+e*u*l+o*n*f-e*a*f)*R,t[12]=U*R,t[13]=(h*v*s-m*u*s+m*n*d-e*v*d-h*n*g+e*u*g)*R,t[14]=(m*a*s-o*v*s-m*n*c+e*v*c+o*n*g-e*a*g)*R,t[15]=(o*u*s-h*a*s+h*n*c-e*u*c-o*n*d+e*a*d)*R,this}scale(t){const e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),s=Math.sin(e),r=1-n,o=t.x,a=t.y,c=t.z,l=r*o,h=r*a;return this.set(l*o+n,l*a-s*c,l*c+s*a,0,l*a+s*c,h*a+n,h*c-s*o,0,l*c-s*a,h*c+s*o,r*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,o){return this.set(1,n,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){const s=this.elements,r=e._x,o=e._y,a=e._z,c=e._w,l=r+r,h=o+o,u=a+a,d=r*l,f=r*h,m=r*u,v=o*h,g=o*u,p=a*u,S=c*l,w=c*h,x=c*u,U=n.x,T=n.y,R=n.z;return s[0]=(1-(v+p))*U,s[1]=(f+x)*U,s[2]=(m-w)*U,s[3]=0,s[4]=(f-x)*T,s[5]=(1-(d+p))*T,s[6]=(g+S)*T,s[7]=0,s[8]=(m+w)*R,s[9]=(g-S)*R,s[10]=(1-(d+v))*R,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){const s=this.elements;let r=Ni.set(s[0],s[1],s[2]).length();const o=Ni.set(s[4],s[5],s[6]).length(),a=Ni.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],ln.copy(this);const l=1/r,h=1/o,u=1/a;return ln.elements[0]*=l,ln.elements[1]*=l,ln.elements[2]*=l,ln.elements[4]*=h,ln.elements[5]*=h,ln.elements[6]*=h,ln.elements[8]*=u,ln.elements[9]*=u,ln.elements[10]*=u,e.setFromRotationMatrix(ln),n.x=r,n.y=o,n.z=a,this}makePerspective(t,e,n,s,r,o,a=Dn){const c=this.elements,l=2*r/(e-t),h=2*r/(n-s),u=(e+t)/(e-t),d=(n+s)/(n-s);let f,m;if(a===Dn)f=-(o+r)/(o-r),m=-2*o*r/(o-r);else if(a===Pr)f=-o/(o-r),m=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=l,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=h,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=f,c[14]=m,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,s,r,o,a=Dn){const c=this.elements,l=1/(e-t),h=1/(n-s),u=1/(o-r),d=(e+t)*l,f=(n+s)*h;let m,v;if(a===Dn)m=(o+r)*u,v=-2*u;else if(a===Pr)m=r*u,v=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-d,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-f,c[2]=0,c[6]=0,c[10]=v,c[14]=-m,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const Ni=new I,ln=new le,pd=new I(0,0,0),md=new I(1,1,1),Wn=new I,js=new I,Ke=new I,Bc=new le,kc=new Bs;class mn{constructor(t=0,e=0,n=0,s=mn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const s=t.elements,r=s[0],o=s[4],a=s[8],c=s[1],l=s[5],h=s[9],u=s[2],d=s[6],f=s[10];switch(e){case"XYZ":this._y=Math.asin(be(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-be(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(be(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-be(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(be(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-be(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Bc.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Bc,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return kc.setFromEuler(this),this.setFromQuaternion(kc,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}mn.DEFAULT_ORDER="XYZ";class tc{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let gd=0;const Hc=new I,Fi=new Bs,Cn=new le,Qs=new I,gs=new I,_d=new I,vd=new Bs,Gc=new I(1,0,0),Vc=new I(0,1,0),Wc=new I(0,0,1),Xc={type:"added"},xd={type:"removed"},Oi={type:"childadded",child:null},lo={type:"childremoved",child:null};class Ae extends as{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:gd++}),this.uuid=cs(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ae.DEFAULT_UP.clone();const t=new I,e=new mn,n=new Bs,s=new I(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new le},normalMatrix:{value:new Zt}}),this.matrix=new le,this.matrixWorld=new le,this.matrixAutoUpdate=Ae.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ae.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new tc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Fi.setFromAxisAngle(t,e),this.quaternion.multiply(Fi),this}rotateOnWorldAxis(t,e){return Fi.setFromAxisAngle(t,e),this.quaternion.premultiply(Fi),this}rotateX(t){return this.rotateOnAxis(Gc,t)}rotateY(t){return this.rotateOnAxis(Vc,t)}rotateZ(t){return this.rotateOnAxis(Wc,t)}translateOnAxis(t,e){return Hc.copy(t).applyQuaternion(this.quaternion),this.position.add(Hc.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Gc,t)}translateY(t){return this.translateOnAxis(Vc,t)}translateZ(t){return this.translateOnAxis(Wc,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Cn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Qs.copy(t):Qs.set(t,e,n);const s=this.parent;this.updateWorldMatrix(!0,!1),gs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Cn.lookAt(gs,Qs,this.up):Cn.lookAt(Qs,gs,this.up),this.quaternion.setFromRotationMatrix(Cn),s&&(Cn.extractRotation(s.matrixWorld),Fi.setFromRotationMatrix(Cn),this.quaternion.premultiply(Fi.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Xc),Oi.child=t,this.dispatchEvent(Oi),Oi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(xd),lo.child=t,this.dispatchEvent(lo),lo.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Cn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Cn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Cn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Xc),Oi.child=t,this.dispatchEvent(Oi),Oi.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){const o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(gs,t,_d),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(gs,vd,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){const u=c[l];r(t.shapes,u)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(t.materials,this.material[c]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];s.animations.push(r(t.animations,c))}}if(e){const a=o(t.geometries),c=o(t.materials),l=o(t.textures),h=o(t.images),u=o(t.shapes),d=o(t.skeletons),f=o(t.animations),m=o(t.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),m.length>0&&(n.nodes=m)}return n.object=s,n;function o(a){const c=[];for(const l in a){const h=a[l];delete h.metadata,c.push(h)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const s=t.children[n];this.add(s.clone())}return this}}Ae.DEFAULT_UP=new I(0,1,0);Ae.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ae.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const hn=new I,Pn=new I,ho=new I,Ln=new I,zi=new I,Bi=new I,qc=new I,uo=new I,fo=new I,po=new I,mo=new ue,go=new ue,_o=new ue;class un{constructor(t=new I,e=new I,n=new I){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),hn.subVectors(t,e),s.cross(hn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){hn.subVectors(s,e),Pn.subVectors(n,e),ho.subVectors(t,e);const o=hn.dot(hn),a=hn.dot(Pn),c=hn.dot(ho),l=Pn.dot(Pn),h=Pn.dot(ho),u=o*l-a*a;if(u===0)return r.set(0,0,0),null;const d=1/u,f=(l*c-a*h)*d,m=(o*h-a*c)*d;return r.set(1-f-m,m,f)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,Ln)===null?!1:Ln.x>=0&&Ln.y>=0&&Ln.x+Ln.y<=1}static getInterpolation(t,e,n,s,r,o,a,c){return this.getBarycoord(t,e,n,s,Ln)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,Ln.x),c.addScaledVector(o,Ln.y),c.addScaledVector(a,Ln.z),c)}static getInterpolatedAttribute(t,e,n,s,r,o){return mo.setScalar(0),go.setScalar(0),_o.setScalar(0),mo.fromBufferAttribute(t,e),go.fromBufferAttribute(t,n),_o.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(mo,r.x),o.addScaledVector(go,r.y),o.addScaledVector(_o,r.z),o}static isFrontFacing(t,e,n,s){return hn.subVectors(n,e),Pn.subVectors(t,e),hn.cross(Pn).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return hn.subVectors(this.c,this.b),Pn.subVectors(this.a,this.b),hn.cross(Pn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return un.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return un.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return un.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return un.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return un.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,s=this.b,r=this.c;let o,a;zi.subVectors(s,n),Bi.subVectors(r,n),uo.subVectors(t,n);const c=zi.dot(uo),l=Bi.dot(uo);if(c<=0&&l<=0)return e.copy(n);fo.subVectors(t,s);const h=zi.dot(fo),u=Bi.dot(fo);if(h>=0&&u<=h)return e.copy(s);const d=c*u-h*l;if(d<=0&&c>=0&&h<=0)return o=c/(c-h),e.copy(n).addScaledVector(zi,o);po.subVectors(t,r);const f=zi.dot(po),m=Bi.dot(po);if(m>=0&&f<=m)return e.copy(r);const v=f*l-c*m;if(v<=0&&l>=0&&m<=0)return a=l/(l-m),e.copy(n).addScaledVector(Bi,a);const g=h*m-f*u;if(g<=0&&u-h>=0&&f-m>=0)return qc.subVectors(r,s),a=(u-h)/(u-h+(f-m)),e.copy(s).addScaledVector(qc,a);const p=1/(g+v+d);return o=v*p,a=d*p,e.copy(n).addScaledVector(zi,o).addScaledVector(Bi,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const yh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Xn={h:0,s:0,l:0},tr={h:0,s:0,l:0};function vo(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class bt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Ue){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ne.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=ne.workingColorSpace){return this.r=t,this.g=e,this.b=n,ne.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=ne.workingColorSpace){if(t=id(t,1),e=be(e,0,1),n=be(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=vo(o,r,t+1/3),this.g=vo(o,r,t),this.b=vo(o,r,t-1/3)}return ne.toWorkingColorSpace(this,s),this}setStyle(t,e=Ue){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Ue){const n=yh[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Un(t.r),this.g=Un(t.g),this.b=Un(t.b),this}copyLinearToSRGB(t){return this.r=Ki(t.r),this.g=Ki(t.g),this.b=Ki(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Ue){return ne.fromWorkingColorSpace(Be.copy(this),t),Math.round(be(Be.r*255,0,255))*65536+Math.round(be(Be.g*255,0,255))*256+Math.round(be(Be.b*255,0,255))}getHexString(t=Ue){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ne.workingColorSpace){ne.fromWorkingColorSpace(Be.copy(this),e);const n=Be.r,s=Be.g,r=Be.b,o=Math.max(n,s,r),a=Math.min(n,s,r);let c,l;const h=(a+o)/2;if(a===o)c=0,l=0;else{const u=o-a;switch(l=h<=.5?u/(o+a):u/(2-o-a),o){case n:c=(s-r)/u+(s<r?6:0);break;case s:c=(r-n)/u+2;break;case r:c=(n-s)/u+4;break}c/=6}return t.h=c,t.s=l,t.l=h,t}getRGB(t,e=ne.workingColorSpace){return ne.fromWorkingColorSpace(Be.copy(this),e),t.r=Be.r,t.g=Be.g,t.b=Be.b,t}getStyle(t=Ue){ne.fromWorkingColorSpace(Be.copy(this),t);const e=Be.r,n=Be.g,s=Be.b;return t!==Ue?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(Xn),this.setHSL(Xn.h+t,Xn.s+e,Xn.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Xn),t.getHSL(tr);const n=to(Xn.h,tr.h,e),s=to(Xn.s,tr.s,e),r=to(Xn.l,tr.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Be=new bt;bt.NAMES=yh;let Md=0;class Ai extends as{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Md++}),this.uuid=cs(),this.name="",this.blending=$i,this.side=ei,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Xo,this.blendDst=qo,this.blendEquation=fi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new bt(0,0,0),this.blendAlpha=0,this.depthFunc=ji,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Cc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Pi,this.stencilZFail=Pi,this.stencilZPass=Pi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==$i&&(n.blending=this.blending),this.side!==ei&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Xo&&(n.blendSrc=this.blendSrc),this.blendDst!==qo&&(n.blendDst=this.blendDst),this.blendEquation!==fi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==ji&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Cc&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Pi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Pi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Pi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const o=[];for(const a in r){const c=r[a];delete c.metadata,o.push(c)}return o}if(e){const r=s(t.textures),o=s(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class pe extends Ai{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new bt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new mn,this.combine=Wa,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Se=new I,er=new gt;class tn{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Pc,this.updateRanges=[],this.gpuType=wn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)er.fromBufferAttribute(this,e),er.applyMatrix3(t),this.setXY(e,er.x,er.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Se.fromBufferAttribute(this,e),Se.applyMatrix3(t),this.setXYZ(e,Se.x,Se.y,Se.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Se.fromBufferAttribute(this,e),Se.applyMatrix4(t),this.setXYZ(e,Se.x,Se.y,Se.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Se.fromBufferAttribute(this,e),Se.applyNormalMatrix(t),this.setXYZ(e,Se.x,Se.y,Se.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Se.fromBufferAttribute(this,e),Se.transformDirection(t),this.setXYZ(e,Se.x,Se.y,Se.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=fs(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Ye(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=fs(e,this.array)),e}setX(t,e){return this.normalized&&(e=Ye(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=fs(e,this.array)),e}setY(t,e){return this.normalized&&(e=Ye(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=fs(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Ye(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=fs(e,this.array)),e}setW(t,e){return this.normalized&&(e=Ye(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Ye(e,this.array),n=Ye(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=Ye(e,this.array),n=Ye(n,this.array),s=Ye(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=Ye(e,this.array),n=Ye(n,this.array),s=Ye(s,this.array),r=Ye(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Pc&&(t.usage=this.usage),t}}class wh extends tn{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class Sh extends tn{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class te extends tn{constructor(t,e,n){super(new Float32Array(t),e,n)}}let yd=0;const sn=new le,xo=new Ae,ki=new I,Je=new zn,_s=new zn,Le=new I;class Pe extends as{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:yd++}),this.uuid=cs(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(vh(t)?Sh:wh)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Zt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return sn.makeRotationFromQuaternion(t),this.applyMatrix4(sn),this}rotateX(t){return sn.makeRotationX(t),this.applyMatrix4(sn),this}rotateY(t){return sn.makeRotationY(t),this.applyMatrix4(sn),this}rotateZ(t){return sn.makeRotationZ(t),this.applyMatrix4(sn),this}translate(t,e,n){return sn.makeTranslation(t,e,n),this.applyMatrix4(sn),this}scale(t,e,n){return sn.makeScale(t,e,n),this.applyMatrix4(sn),this}lookAt(t){return xo.lookAt(t),xo.updateMatrix(),this.applyMatrix4(xo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ki).negate(),this.translate(ki.x,ki.y,ki.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let s=0,r=t.length;s<r;s++){const o=t[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new te(n,3))}else{for(let n=0,s=e.count;n<s;n++){const r=t[n];e.setXYZ(n,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new zn);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new I(-1/0,-1/0,-1/0),new I(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){const r=e[n];Je.setFromBufferAttribute(r),this.morphTargetsRelative?(Le.addVectors(this.boundingBox.min,Je.min),this.boundingBox.expandByPoint(Le),Le.addVectors(this.boundingBox.max,Je.max),this.boundingBox.expandByPoint(Le)):(this.boundingBox.expandByPoint(Je.min),this.boundingBox.expandByPoint(Je.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ls);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new I,1/0);return}if(t){const n=this.boundingSphere.center;if(Je.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){const a=e[r];_s.setFromBufferAttribute(a),this.morphTargetsRelative?(Le.addVectors(Je.min,_s.min),Je.expandByPoint(Le),Le.addVectors(Je.max,_s.max),Je.expandByPoint(Le)):(Je.expandByPoint(_s.min),Je.expandByPoint(_s.max))}Je.getCenter(n);let s=0;for(let r=0,o=t.count;r<o;r++)Le.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(Le));if(e)for(let r=0,o=e.length;r<o;r++){const a=e[r],c=this.morphTargetsRelative;for(let l=0,h=a.count;l<h;l++)Le.fromBufferAttribute(a,l),c&&(ki.fromBufferAttribute(t,l),Le.add(ki)),s=Math.max(s,n.distanceToSquared(Le))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new tn(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],c=[];for(let D=0;D<n.count;D++)a[D]=new I,c[D]=new I;const l=new I,h=new I,u=new I,d=new gt,f=new gt,m=new gt,v=new I,g=new I;function p(D,y,M){l.fromBufferAttribute(n,D),h.fromBufferAttribute(n,y),u.fromBufferAttribute(n,M),d.fromBufferAttribute(r,D),f.fromBufferAttribute(r,y),m.fromBufferAttribute(r,M),h.sub(l),u.sub(l),f.sub(d),m.sub(d);const C=1/(f.x*m.y-m.x*f.y);isFinite(C)&&(v.copy(h).multiplyScalar(m.y).addScaledVector(u,-f.y).multiplyScalar(C),g.copy(u).multiplyScalar(f.x).addScaledVector(h,-m.x).multiplyScalar(C),a[D].add(v),a[y].add(v),a[M].add(v),c[D].add(g),c[y].add(g),c[M].add(g))}let S=this.groups;S.length===0&&(S=[{start:0,count:t.count}]);for(let D=0,y=S.length;D<y;++D){const M=S[D],C=M.start,z=M.count;for(let k=C,H=C+z;k<H;k+=3)p(t.getX(k+0),t.getX(k+1),t.getX(k+2))}const w=new I,x=new I,U=new I,T=new I;function R(D){U.fromBufferAttribute(s,D),T.copy(U);const y=a[D];w.copy(y),w.sub(U.multiplyScalar(U.dot(y))).normalize(),x.crossVectors(T,y);const C=x.dot(c[D])<0?-1:1;o.setXYZW(D,w.x,w.y,w.z,C)}for(let D=0,y=S.length;D<y;++D){const M=S[D],C=M.start,z=M.count;for(let k=C,H=C+z;k<H;k+=3)R(t.getX(k+0)),R(t.getX(k+1)),R(t.getX(k+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new tn(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);const s=new I,r=new I,o=new I,a=new I,c=new I,l=new I,h=new I,u=new I;if(t)for(let d=0,f=t.count;d<f;d+=3){const m=t.getX(d+0),v=t.getX(d+1),g=t.getX(d+2);s.fromBufferAttribute(e,m),r.fromBufferAttribute(e,v),o.fromBufferAttribute(e,g),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),a.fromBufferAttribute(n,m),c.fromBufferAttribute(n,v),l.fromBufferAttribute(n,g),a.add(h),c.add(h),l.add(h),n.setXYZ(m,a.x,a.y,a.z),n.setXYZ(v,c.x,c.y,c.z),n.setXYZ(g,l.x,l.y,l.z)}else for(let d=0,f=e.count;d<f;d+=3)s.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),o.fromBufferAttribute(e,d+2),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Le.fromBufferAttribute(t,e),Le.normalize(),t.setXYZ(e,Le.x,Le.y,Le.z)}toNonIndexed(){function t(a,c){const l=a.array,h=a.itemSize,u=a.normalized,d=new l.constructor(c.length*h);let f=0,m=0;for(let v=0,g=c.length;v<g;v++){a.isInterleavedBufferAttribute?f=c[v]*a.data.stride+a.offset:f=c[v]*h;for(let p=0;p<h;p++)d[m++]=l[f++]}return new tn(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Pe,n=this.index.array,s=this.attributes;for(const a in s){const c=s[a],l=t(c,n);e.setAttribute(a,l)}const r=this.morphAttributes;for(const a in r){const c=[],l=r[a];for(let h=0,u=l.length;h<u;h++){const d=l[h],f=t(d,n);c.push(f)}e.morphAttributes[a]=c}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,c=o.length;a<c;a++){const l=o[a];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const c in n){const l=n[c];t.data.attributes[c]=l.toJSON(t.data)}const s={};let r=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],h=[];for(let u=0,d=l.length;u<d;u++){const f=l[u];h.push(f.toJSON(t.data))}h.length>0&&(s[c]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const s=t.attributes;for(const l in s){const h=s[l];this.setAttribute(l,h.clone(e))}const r=t.morphAttributes;for(const l in r){const h=[],u=r[l];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(e));this.morphAttributes[l]=h}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let l=0,h=o.length;l<h;l++){const u=o[l];this.addGroup(u.start,u.count,u.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Yc=new le,ai=new Qa,nr=new ls,$c=new I,ir=new I,sr=new I,rr=new I,Mo=new I,or=new I,Zc=new I,ar=new I;class A extends Ae{constructor(t=new Pe,e=new pe){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(s,t);const a=this.morphTargetInfluences;if(r&&a){or.set(0,0,0);for(let c=0,l=r.length;c<l;c++){const h=a[c],u=r[c];h!==0&&(Mo.fromBufferAttribute(u,t),o?or.addScaledVector(Mo,h):or.addScaledVector(Mo.sub(e),h))}e.add(or)}return e}raycast(t,e){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),nr.copy(n.boundingSphere),nr.applyMatrix4(r),ai.copy(t.ray).recast(t.near),!(nr.containsPoint(ai.origin)===!1&&(ai.intersectSphere(nr,$c)===null||ai.origin.distanceToSquared($c)>(t.far-t.near)**2))&&(Yc.copy(r).invert(),ai.copy(t.ray).applyMatrix4(Yc),!(n.boundingBox!==null&&ai.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,ai)))}_computeIntersections(t,e,n){let s;const r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let m=0,v=d.length;m<v;m++){const g=d[m],p=o[g.materialIndex],S=Math.max(g.start,f.start),w=Math.min(a.count,Math.min(g.start+g.count,f.start+f.count));for(let x=S,U=w;x<U;x+=3){const T=a.getX(x),R=a.getX(x+1),D=a.getX(x+2);s=cr(this,p,t,n,l,h,u,T,R,D),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=g.materialIndex,e.push(s))}}else{const m=Math.max(0,f.start),v=Math.min(a.count,f.start+f.count);for(let g=m,p=v;g<p;g+=3){const S=a.getX(g),w=a.getX(g+1),x=a.getX(g+2);s=cr(this,o,t,n,l,h,u,S,w,x),s&&(s.faceIndex=Math.floor(g/3),e.push(s))}}else if(c!==void 0)if(Array.isArray(o))for(let m=0,v=d.length;m<v;m++){const g=d[m],p=o[g.materialIndex],S=Math.max(g.start,f.start),w=Math.min(c.count,Math.min(g.start+g.count,f.start+f.count));for(let x=S,U=w;x<U;x+=3){const T=x,R=x+1,D=x+2;s=cr(this,p,t,n,l,h,u,T,R,D),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=g.materialIndex,e.push(s))}}else{const m=Math.max(0,f.start),v=Math.min(c.count,f.start+f.count);for(let g=m,p=v;g<p;g+=3){const S=g,w=g+1,x=g+2;s=cr(this,o,t,n,l,h,u,S,w,x),s&&(s.faceIndex=Math.floor(g/3),e.push(s))}}}}function wd(i,t,e,n,s,r,o,a){let c;if(t.side===Fe?c=n.intersectTriangle(o,r,s,!0,a):c=n.intersectTriangle(s,r,o,t.side===ei,a),c===null)return null;ar.copy(a),ar.applyMatrix4(i.matrixWorld);const l=e.ray.origin.distanceTo(ar);return l<e.near||l>e.far?null:{distance:l,point:ar.clone(),object:i}}function cr(i,t,e,n,s,r,o,a,c,l){i.getVertexPosition(a,ir),i.getVertexPosition(c,sr),i.getVertexPosition(l,rr);const h=wd(i,t,e,n,ir,sr,rr,Zc);if(h){const u=new I;un.getBarycoord(Zc,ir,sr,rr,u),s&&(h.uv=un.getInterpolatedAttribute(s,a,c,l,u,new gt)),r&&(h.uv1=un.getInterpolatedAttribute(r,a,c,l,u,new gt)),o&&(h.normal=un.getInterpolatedAttribute(o,a,c,l,u,new I),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const d={a,b:c,c:l,normal:new I,materialIndex:0};un.getNormal(ir,sr,rr,d.normal),h.face=d,h.barycoord=u}return h}class qt extends Pe{constructor(t=1,e=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const c=[],l=[],h=[],u=[];let d=0,f=0;m("z","y","x",-1,-1,n,e,t,o,r,0),m("z","y","x",1,-1,n,e,-t,o,r,1),m("x","z","y",1,1,t,n,e,s,o,2),m("x","z","y",1,-1,t,n,-e,s,o,3),m("x","y","z",1,-1,t,e,n,s,r,4),m("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new te(l,3)),this.setAttribute("normal",new te(h,3)),this.setAttribute("uv",new te(u,2));function m(v,g,p,S,w,x,U,T,R,D,y){const M=x/R,C=U/D,z=x/2,k=U/2,H=T/2,Z=R+1,W=D+1;let st=0,$=0;const ft=new I;for(let Mt=0;Mt<W;Mt++){const dt=Mt*C-k;for(let ut=0;ut<Z;ut++){const ct=ut*M-z;ft[v]=ct*S,ft[g]=dt*w,ft[p]=H,l.push(ft.x,ft.y,ft.z),ft[v]=0,ft[g]=0,ft[p]=T>0?1:-1,h.push(ft.x,ft.y,ft.z),u.push(ut/R),u.push(1-Mt/D),st+=1}}for(let Mt=0;Mt<D;Mt++)for(let dt=0;dt<R;dt++){const ut=d+dt+Z*Mt,ct=d+dt+Z*(Mt+1),G=d+(dt+1)+Z*(Mt+1),Q=d+(dt+1)+Z*Mt;c.push(ut,ct,Q),c.push(ct,G,Q),$+=6}a.addGroup(f,$,y),f+=$,d+=st}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new qt(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function ss(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function Ve(i){const t={};for(let e=0;e<i.length;e++){const n=ss(i[e]);for(const s in n)t[s]=n[s]}return t}function Sd(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Eh(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:ne.workingColorSpace}const Ed={clone:ss,merge:Ve};var Td=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,bd=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ni extends Ai{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Td,this.fragmentShader=bd,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=ss(t.uniforms),this.uniformsGroups=Sd(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class Th extends Ae{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new le,this.projectionMatrix=new le,this.projectionMatrixInverse=new le,this.coordinateSystem=Dn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const qn=new I,Kc=new gt,Jc=new gt;class He extends Th{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Ca*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Qr*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Ca*2*Math.atan(Math.tan(Qr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){qn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(qn.x,qn.y).multiplyScalar(-t/qn.z),qn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(qn.x,qn.y).multiplyScalar(-t/qn.z)}getViewSize(t,e){return this.getViewBounds(t,Kc,Jc),e.subVectors(Jc,Kc)}setViewOffset(t,e,n,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Qr*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*s/c,e-=o.offsetY*n/l,s*=o.width/c,n*=o.height/l}const a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Hi=-90,Gi=1;class Ad extends Ae{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new He(Hi,Gi,t,e);s.layers=this.layers,this.add(s);const r=new He(Hi,Gi,t,e);r.layers=this.layers,this.add(r);const o=new He(Hi,Gi,t,e);o.layers=this.layers,this.add(o);const a=new He(Hi,Gi,t,e);a.layers=this.layers,this.add(a);const c=new He(Hi,Gi,t,e);c.layers=this.layers,this.add(c);const l=new He(Hi,Gi,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,s,r,o,a,c]=e;for(const l of e)this.remove(l);if(t===Dn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===Pr)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,c,l,h]=this.children,u=t.getRenderTarget(),d=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),m=t.xr.enabled;t.xr.enabled=!1;const v=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,o),t.setRenderTarget(n,2,s),t.render(e,a),t.setRenderTarget(n,3,s),t.render(e,c),t.setRenderTarget(n,4,s),t.render(e,l),n.texture.generateMipmaps=v,t.setRenderTarget(n,5,s),t.render(e,h),t.setRenderTarget(u,d,f),t.xr.enabled=m,n.texture.needsPMREMUpdate=!0}}class bh extends Ge{constructor(t,e,n,s,r,o,a,c,l,h){t=t!==void 0?t:[],e=e!==void 0?e:Qi,super(t,e,n,s,r,o,a,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Rd extends Si{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new bh(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:yn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new qt(5,5,5),r=new ni({name:"CubemapFromEquirect",uniforms:ss(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Fe,blending:Qn});r.uniforms.tEquirect.value=e;const o=new A(s,r),a=e.minFilter;return e.minFilter===vi&&(e.minFilter=yn),new Ad(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,n,s){const r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,s);t.setRenderTarget(r)}}const yo=new I,Cd=new I,Pd=new Zt;class ui{constructor(t=new I(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const s=yo.subVectors(n,e).cross(Cd.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(yo),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||Pd.getNormalMatrix(t),s=this.coplanarPoint(yo).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ci=new ls,lr=new I;class ec{constructor(t=new ui,e=new ui,n=new ui,s=new ui,r=new ui,o=new ui){this.planes=[t,e,n,s,r,o]}set(t,e,n,s,r,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Dn){const n=this.planes,s=t.elements,r=s[0],o=s[1],a=s[2],c=s[3],l=s[4],h=s[5],u=s[6],d=s[7],f=s[8],m=s[9],v=s[10],g=s[11],p=s[12],S=s[13],w=s[14],x=s[15];if(n[0].setComponents(c-r,d-l,g-f,x-p).normalize(),n[1].setComponents(c+r,d+l,g+f,x+p).normalize(),n[2].setComponents(c+o,d+h,g+m,x+S).normalize(),n[3].setComponents(c-o,d-h,g-m,x-S).normalize(),n[4].setComponents(c-a,d-u,g-v,x-w).normalize(),e===Dn)n[5].setComponents(c+a,d+u,g+v,x+w).normalize();else if(e===Pr)n[5].setComponents(a,u,v,w).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),ci.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),ci.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(ci)}intersectsSprite(t){return ci.center.set(0,0,0),ci.radius=.7071067811865476,ci.applyMatrix4(t.matrixWorld),this.intersectsSphere(ci)}intersectsSphere(t){const e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const s=e[n];if(lr.x=s.normal.x>0?t.max.x:t.min.x,lr.y=s.normal.y>0?t.max.y:t.min.y,lr.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(lr)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Ah(){let i=null,t=!1,e=null,n=null;function s(r,o){e(r,o),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function Ld(i){const t=new WeakMap;function e(a,c){const l=a.array,h=a.usage,u=l.byteLength,d=i.createBuffer();i.bindBuffer(c,d),i.bufferData(c,l,h),a.onUploadCallback();let f;if(l instanceof Float32Array)f=i.FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)f=i.SHORT;else if(l instanceof Uint32Array)f=i.UNSIGNED_INT;else if(l instanceof Int32Array)f=i.INT;else if(l instanceof Int8Array)f=i.BYTE;else if(l instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:d,type:f,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,c,l){const h=c.array,u=c.updateRanges;if(i.bindBuffer(l,a),u.length===0)i.bufferSubData(l,0,h);else{u.sort((f,m)=>f.start-m.start);let d=0;for(let f=1;f<u.length;f++){const m=u[d],v=u[f];v.start<=m.start+m.count+1?m.count=Math.max(m.count,v.start+v.count-m.start):(++d,u[d]=v)}u.length=d+1;for(let f=0,m=u.length;f<m;f++){const v=u[f];i.bufferSubData(l,v.start*h.BYTES_PER_ELEMENT,h,v.start,v.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const c=t.get(a);c&&(i.deleteBuffer(c.buffer),t.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const l=t.get(a);if(l===void 0)t.set(a,e(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,a,c),l.version=a.version}}return{get:s,remove:r,update:o}}class dn extends Pe{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};const r=t/2,o=e/2,a=Math.floor(n),c=Math.floor(s),l=a+1,h=c+1,u=t/a,d=e/c,f=[],m=[],v=[],g=[];for(let p=0;p<h;p++){const S=p*d-o;for(let w=0;w<l;w++){const x=w*u-r;m.push(x,-S,0),v.push(0,0,1),g.push(w/a),g.push(1-p/c)}}for(let p=0;p<c;p++)for(let S=0;S<a;S++){const w=S+l*p,x=S+l*(p+1),U=S+1+l*(p+1),T=S+1+l*p;f.push(w,x,T),f.push(x,U,T)}this.setIndex(f),this.setAttribute("position",new te(m,3)),this.setAttribute("normal",new te(v,3)),this.setAttribute("uv",new te(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new dn(t.width,t.height,t.widthSegments,t.heightSegments)}}var Id=`#ifdef USE_ALPHAHASH
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
}`,Jt={alphahash_fragment:Id,alphahash_pars_fragment:Dd,alphamap_fragment:Ud,alphamap_pars_fragment:Nd,alphatest_fragment:Fd,alphatest_pars_fragment:Od,aomap_fragment:zd,aomap_pars_fragment:Bd,batching_pars_vertex:kd,batching_vertex:Hd,begin_vertex:Gd,beginnormal_vertex:Vd,bsdfs:Wd,iridescence_fragment:Xd,bumpmap_pars_fragment:qd,clipping_planes_fragment:Yd,clipping_planes_pars_fragment:$d,clipping_planes_pars_vertex:Zd,clipping_planes_vertex:Kd,color_fragment:Jd,color_pars_fragment:jd,color_pars_vertex:Qd,color_vertex:tf,common:ef,cube_uv_reflection_fragment:nf,defaultnormal_vertex:sf,displacementmap_pars_vertex:rf,displacementmap_vertex:of,emissivemap_fragment:af,emissivemap_pars_fragment:cf,colorspace_fragment:lf,colorspace_pars_fragment:hf,envmap_fragment:uf,envmap_common_pars_fragment:df,envmap_pars_fragment:ff,envmap_pars_vertex:pf,envmap_physical_pars_fragment:Tf,envmap_vertex:mf,fog_vertex:gf,fog_pars_vertex:_f,fog_fragment:vf,fog_pars_fragment:xf,gradientmap_pars_fragment:Mf,lightmap_pars_fragment:yf,lights_lambert_fragment:wf,lights_lambert_pars_fragment:Sf,lights_pars_begin:Ef,lights_toon_fragment:bf,lights_toon_pars_fragment:Af,lights_phong_fragment:Rf,lights_phong_pars_fragment:Cf,lights_physical_fragment:Pf,lights_physical_pars_fragment:Lf,lights_fragment_begin:If,lights_fragment_maps:Df,lights_fragment_end:Uf,logdepthbuf_fragment:Nf,logdepthbuf_pars_fragment:Ff,logdepthbuf_pars_vertex:Of,logdepthbuf_vertex:zf,map_fragment:Bf,map_pars_fragment:kf,map_particle_fragment:Hf,map_particle_pars_fragment:Gf,metalnessmap_fragment:Vf,metalnessmap_pars_fragment:Wf,morphinstance_vertex:Xf,morphcolor_vertex:qf,morphnormal_vertex:Yf,morphtarget_pars_vertex:$f,morphtarget_vertex:Zf,normal_fragment_begin:Kf,normal_fragment_maps:Jf,normal_pars_fragment:jf,normal_pars_vertex:Qf,normal_vertex:tp,normalmap_pars_fragment:ep,clearcoat_normal_fragment_begin:np,clearcoat_normal_fragment_maps:ip,clearcoat_pars_fragment:sp,iridescence_pars_fragment:rp,opaque_fragment:op,packing:ap,premultiplied_alpha_fragment:cp,project_vertex:lp,dithering_fragment:hp,dithering_pars_fragment:up,roughnessmap_fragment:dp,roughnessmap_pars_fragment:fp,shadowmap_pars_fragment:pp,shadowmap_pars_vertex:mp,shadowmap_vertex:gp,shadowmask_pars_fragment:_p,skinbase_vertex:vp,skinning_pars_vertex:xp,skinning_vertex:Mp,skinnormal_vertex:yp,specularmap_fragment:wp,specularmap_pars_fragment:Sp,tonemapping_fragment:Ep,tonemapping_pars_fragment:Tp,transmission_fragment:bp,transmission_pars_fragment:Ap,uv_pars_fragment:Rp,uv_pars_vertex:Cp,uv_vertex:Pp,worldpos_vertex:Lp,background_vert:Ip,background_frag:Dp,backgroundCube_vert:Up,backgroundCube_frag:Np,cube_vert:Fp,cube_frag:Op,depth_vert:zp,depth_frag:Bp,distanceRGBA_vert:kp,distanceRGBA_frag:Hp,equirect_vert:Gp,equirect_frag:Vp,linedashed_vert:Wp,linedashed_frag:Xp,meshbasic_vert:qp,meshbasic_frag:Yp,meshlambert_vert:$p,meshlambert_frag:Zp,meshmatcap_vert:Kp,meshmatcap_frag:Jp,meshnormal_vert:jp,meshnormal_frag:Qp,meshphong_vert:t0,meshphong_frag:e0,meshphysical_vert:n0,meshphysical_frag:i0,meshtoon_vert:s0,meshtoon_frag:r0,points_vert:o0,points_frag:a0,shadow_vert:c0,shadow_frag:l0,sprite_vert:h0,sprite_frag:u0},Et={common:{diffuse:{value:new bt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Zt},alphaMap:{value:null},alphaMapTransform:{value:new Zt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Zt}},envmap:{envMap:{value:null},envMapRotation:{value:new Zt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Zt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Zt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Zt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Zt},normalScale:{value:new gt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Zt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Zt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Zt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Zt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new bt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new bt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Zt},alphaTest:{value:0},uvTransform:{value:new Zt}},sprite:{diffuse:{value:new bt(16777215)},opacity:{value:1},center:{value:new gt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Zt},alphaMap:{value:null},alphaMapTransform:{value:new Zt},alphaTest:{value:0}}},xn={basic:{uniforms:Ve([Et.common,Et.specularmap,Et.envmap,Et.aomap,Et.lightmap,Et.fog]),vertexShader:Jt.meshbasic_vert,fragmentShader:Jt.meshbasic_frag},lambert:{uniforms:Ve([Et.common,Et.specularmap,Et.envmap,Et.aomap,Et.lightmap,Et.emissivemap,Et.bumpmap,Et.normalmap,Et.displacementmap,Et.fog,Et.lights,{emissive:{value:new bt(0)}}]),vertexShader:Jt.meshlambert_vert,fragmentShader:Jt.meshlambert_frag},phong:{uniforms:Ve([Et.common,Et.specularmap,Et.envmap,Et.aomap,Et.lightmap,Et.emissivemap,Et.bumpmap,Et.normalmap,Et.displacementmap,Et.fog,Et.lights,{emissive:{value:new bt(0)},specular:{value:new bt(1118481)},shininess:{value:30}}]),vertexShader:Jt.meshphong_vert,fragmentShader:Jt.meshphong_frag},standard:{uniforms:Ve([Et.common,Et.envmap,Et.aomap,Et.lightmap,Et.emissivemap,Et.bumpmap,Et.normalmap,Et.displacementmap,Et.roughnessmap,Et.metalnessmap,Et.fog,Et.lights,{emissive:{value:new bt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Jt.meshphysical_vert,fragmentShader:Jt.meshphysical_frag},toon:{uniforms:Ve([Et.common,Et.aomap,Et.lightmap,Et.emissivemap,Et.bumpmap,Et.normalmap,Et.displacementmap,Et.gradientmap,Et.fog,Et.lights,{emissive:{value:new bt(0)}}]),vertexShader:Jt.meshtoon_vert,fragmentShader:Jt.meshtoon_frag},matcap:{uniforms:Ve([Et.common,Et.bumpmap,Et.normalmap,Et.displacementmap,Et.fog,{matcap:{value:null}}]),vertexShader:Jt.meshmatcap_vert,fragmentShader:Jt.meshmatcap_frag},points:{uniforms:Ve([Et.points,Et.fog]),vertexShader:Jt.points_vert,fragmentShader:Jt.points_frag},dashed:{uniforms:Ve([Et.common,Et.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Jt.linedashed_vert,fragmentShader:Jt.linedashed_frag},depth:{uniforms:Ve([Et.common,Et.displacementmap]),vertexShader:Jt.depth_vert,fragmentShader:Jt.depth_frag},normal:{uniforms:Ve([Et.common,Et.bumpmap,Et.normalmap,Et.displacementmap,{opacity:{value:1}}]),vertexShader:Jt.meshnormal_vert,fragmentShader:Jt.meshnormal_frag},sprite:{uniforms:Ve([Et.sprite,Et.fog]),vertexShader:Jt.sprite_vert,fragmentShader:Jt.sprite_frag},background:{uniforms:{uvTransform:{value:new Zt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Jt.background_vert,fragmentShader:Jt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Zt}},vertexShader:Jt.backgroundCube_vert,fragmentShader:Jt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Jt.cube_vert,fragmentShader:Jt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Jt.equirect_vert,fragmentShader:Jt.equirect_frag},distanceRGBA:{uniforms:Ve([Et.common,Et.displacementmap,{referencePosition:{value:new I},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Jt.distanceRGBA_vert,fragmentShader:Jt.distanceRGBA_frag},shadow:{uniforms:Ve([Et.lights,Et.fog,{color:{value:new bt(0)},opacity:{value:1}}]),vertexShader:Jt.shadow_vert,fragmentShader:Jt.shadow_frag}};xn.physical={uniforms:Ve([xn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Zt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Zt},clearcoatNormalScale:{value:new gt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Zt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Zt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Zt},sheen:{value:0},sheenColor:{value:new bt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Zt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Zt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Zt},transmissionSamplerSize:{value:new gt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Zt},attenuationDistance:{value:0},attenuationColor:{value:new bt(0)},specularColor:{value:new bt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Zt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Zt},anisotropyVector:{value:new gt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Zt}}]),vertexShader:Jt.meshphysical_vert,fragmentShader:Jt.meshphysical_frag};const hr={r:0,b:0,g:0},li=new mn,d0=new le;function f0(i,t,e,n,s,r,o){const a=new bt(0);let c=r===!0?0:1,l,h,u=null,d=0,f=null;function m(S){let w=S.isScene===!0?S.background:null;return w&&w.isTexture&&(w=(S.backgroundBlurriness>0?e:t).get(w)),w}function v(S){let w=!1;const x=m(S);x===null?p(a,c):x&&x.isColor&&(p(x,1),w=!0);const U=i.xr.getEnvironmentBlendMode();U==="additive"?n.buffers.color.setClear(0,0,0,1,o):U==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||w)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function g(S,w){const x=m(w);x&&(x.isCubeTexture||x.mapping===Wr)?(h===void 0&&(h=new A(new qt(1,1,1),new ni({name:"BackgroundCubeMaterial",uniforms:ss(xn.backgroundCube.uniforms),vertexShader:xn.backgroundCube.vertexShader,fragmentShader:xn.backgroundCube.fragmentShader,side:Fe,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(U,T,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),li.copy(w.backgroundRotation),li.x*=-1,li.y*=-1,li.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(li.y*=-1,li.z*=-1),h.material.uniforms.envMap.value=x,h.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=w.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(d0.makeRotationFromEuler(li)),h.material.toneMapped=ne.getTransfer(x.colorSpace)!==he,(u!==x||d!==x.version||f!==i.toneMapping)&&(h.material.needsUpdate=!0,u=x,d=x.version,f=i.toneMapping),h.layers.enableAll(),S.unshift(h,h.geometry,h.material,0,0,null)):x&&x.isTexture&&(l===void 0&&(l=new A(new dn(2,2),new ni({name:"BackgroundMaterial",uniforms:ss(xn.background.uniforms),vertexShader:xn.background.vertexShader,fragmentShader:xn.background.fragmentShader,side:ei,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=x,l.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,l.material.toneMapped=ne.getTransfer(x.colorSpace)!==he,x.matrixAutoUpdate===!0&&x.updateMatrix(),l.material.uniforms.uvTransform.value.copy(x.matrix),(u!==x||d!==x.version||f!==i.toneMapping)&&(l.material.needsUpdate=!0,u=x,d=x.version,f=i.toneMapping),l.layers.enableAll(),S.unshift(l,l.geometry,l.material,0,0,null))}function p(S,w){S.getRGB(hr,Eh(i)),n.buffers.color.setClear(hr.r,hr.g,hr.b,w,o)}return{getClearColor:function(){return a},setClearColor:function(S,w=1){a.set(S),c=w,p(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(S){c=S,p(a,c)},render:v,addToRenderList:g}}function p0(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null);let r=s,o=!1;function a(M,C,z,k,H){let Z=!1;const W=u(k,z,C);r!==W&&(r=W,l(r.object)),Z=f(M,k,z,H),Z&&m(M,k,z,H),H!==null&&t.update(H,i.ELEMENT_ARRAY_BUFFER),(Z||o)&&(o=!1,x(M,C,z,k),H!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(H).buffer))}function c(){return i.createVertexArray()}function l(M){return i.bindVertexArray(M)}function h(M){return i.deleteVertexArray(M)}function u(M,C,z){const k=z.wireframe===!0;let H=n[M.id];H===void 0&&(H={},n[M.id]=H);let Z=H[C.id];Z===void 0&&(Z={},H[C.id]=Z);let W=Z[k];return W===void 0&&(W=d(c()),Z[k]=W),W}function d(M){const C=[],z=[],k=[];for(let H=0;H<e;H++)C[H]=0,z[H]=0,k[H]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:C,enabledAttributes:z,attributeDivisors:k,object:M,attributes:{},index:null}}function f(M,C,z,k){const H=r.attributes,Z=C.attributes;let W=0;const st=z.getAttributes();for(const $ in st)if(st[$].location>=0){const Mt=H[$];let dt=Z[$];if(dt===void 0&&($==="instanceMatrix"&&M.instanceMatrix&&(dt=M.instanceMatrix),$==="instanceColor"&&M.instanceColor&&(dt=M.instanceColor)),Mt===void 0||Mt.attribute!==dt||dt&&Mt.data!==dt.data)return!0;W++}return r.attributesNum!==W||r.index!==k}function m(M,C,z,k){const H={},Z=C.attributes;let W=0;const st=z.getAttributes();for(const $ in st)if(st[$].location>=0){let Mt=Z[$];Mt===void 0&&($==="instanceMatrix"&&M.instanceMatrix&&(Mt=M.instanceMatrix),$==="instanceColor"&&M.instanceColor&&(Mt=M.instanceColor));const dt={};dt.attribute=Mt,Mt&&Mt.data&&(dt.data=Mt.data),H[$]=dt,W++}r.attributes=H,r.attributesNum=W,r.index=k}function v(){const M=r.newAttributes;for(let C=0,z=M.length;C<z;C++)M[C]=0}function g(M){p(M,0)}function p(M,C){const z=r.newAttributes,k=r.enabledAttributes,H=r.attributeDivisors;z[M]=1,k[M]===0&&(i.enableVertexAttribArray(M),k[M]=1),H[M]!==C&&(i.vertexAttribDivisor(M,C),H[M]=C)}function S(){const M=r.newAttributes,C=r.enabledAttributes;for(let z=0,k=C.length;z<k;z++)C[z]!==M[z]&&(i.disableVertexAttribArray(z),C[z]=0)}function w(M,C,z,k,H,Z,W){W===!0?i.vertexAttribIPointer(M,C,z,H,Z):i.vertexAttribPointer(M,C,z,k,H,Z)}function x(M,C,z,k){v();const H=k.attributes,Z=z.getAttributes(),W=C.defaultAttributeValues;for(const st in Z){const $=Z[st];if($.location>=0){let ft=H[st];if(ft===void 0&&(st==="instanceMatrix"&&M.instanceMatrix&&(ft=M.instanceMatrix),st==="instanceColor"&&M.instanceColor&&(ft=M.instanceColor)),ft!==void 0){const Mt=ft.normalized,dt=ft.itemSize,ut=t.get(ft);if(ut===void 0)continue;const ct=ut.buffer,G=ut.type,Q=ut.bytesPerElement,lt=G===i.INT||G===i.UNSIGNED_INT||ft.gpuType===Xa;if(ft.isInterleavedBufferAttribute){const it=ft.data,pt=it.stride,wt=ft.offset;if(it.isInstancedInterleavedBuffer){for(let Ut=0;Ut<$.locationSize;Ut++)p($.location+Ut,it.meshPerAttribute);M.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=it.meshPerAttribute*it.count)}else for(let Ut=0;Ut<$.locationSize;Ut++)g($.location+Ut);i.bindBuffer(i.ARRAY_BUFFER,ct);for(let Ut=0;Ut<$.locationSize;Ut++)w($.location+Ut,dt/$.locationSize,G,Mt,pt*Q,(wt+dt/$.locationSize*Ut)*Q,lt)}else{if(ft.isInstancedBufferAttribute){for(let it=0;it<$.locationSize;it++)p($.location+it,ft.meshPerAttribute);M.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=ft.meshPerAttribute*ft.count)}else for(let it=0;it<$.locationSize;it++)g($.location+it);i.bindBuffer(i.ARRAY_BUFFER,ct);for(let it=0;it<$.locationSize;it++)w($.location+it,dt/$.locationSize,G,Mt,dt*Q,dt/$.locationSize*it*Q,lt)}}else if(W!==void 0){const Mt=W[st];if(Mt!==void 0)switch(Mt.length){case 2:i.vertexAttrib2fv($.location,Mt);break;case 3:i.vertexAttrib3fv($.location,Mt);break;case 4:i.vertexAttrib4fv($.location,Mt);break;default:i.vertexAttrib1fv($.location,Mt)}}}}S()}function U(){D();for(const M in n){const C=n[M];for(const z in C){const k=C[z];for(const H in k)h(k[H].object),delete k[H];delete C[z]}delete n[M]}}function T(M){if(n[M.id]===void 0)return;const C=n[M.id];for(const z in C){const k=C[z];for(const H in k)h(k[H].object),delete k[H];delete C[z]}delete n[M.id]}function R(M){for(const C in n){const z=n[C];if(z[M.id]===void 0)continue;const k=z[M.id];for(const H in k)h(k[H].object),delete k[H];delete z[M.id]}}function D(){y(),o=!0,r!==s&&(r=s,l(r.object))}function y(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:D,resetDefaultState:y,dispose:U,releaseStatesOfGeometry:T,releaseStatesOfProgram:R,initAttributes:v,enableAttribute:g,disableUnusedAttributes:S}}function m0(i,t,e){let n;function s(l){n=l}function r(l,h){i.drawArrays(n,l,h),e.update(h,n,1)}function o(l,h,u){u!==0&&(i.drawArraysInstanced(n,l,h,u),e.update(h,n,u))}function a(l,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,h,0,u);let f=0;for(let m=0;m<u;m++)f+=h[m];e.update(f,n,1)}function c(l,h,u,d){if(u===0)return;const f=t.get("WEBGL_multi_draw");if(f===null)for(let m=0;m<l.length;m++)o(l[m],h[m],d[m]);else{f.multiDrawArraysInstancedWEBGL(n,l,0,h,0,d,0,u);let m=0;for(let v=0;v<u;v++)m+=h[v]*d[v];e.update(m,n,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function g0(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const R=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(R){return!(R!==fn&&n.convert(R)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(R){const D=R===zs&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(R!==Fn&&n.convert(R)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&R!==wn&&!D)}function c(R){if(R==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp";const h=c(l);h!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);const u=e.logarithmicDepthBuffer===!0,d=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),m=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=i.getParameter(i.MAX_TEXTURE_SIZE),g=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),S=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),w=i.getParameter(i.MAX_VARYING_VECTORS),x=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),U=m>0,T=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:u,reverseDepthBuffer:d,maxTextures:f,maxVertexTextures:m,maxTextureSize:v,maxCubemapSize:g,maxAttributes:p,maxVertexUniforms:S,maxVaryings:w,maxFragmentUniforms:x,vertexTextures:U,maxSamples:T}}function _0(i){const t=this;let e=null,n=0,s=!1,r=!1;const o=new ui,a=new Zt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){const f=u.length!==0||d||n!==0||s;return s=d,n=u.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){e=h(u,d,0)},this.setState=function(u,d,f){const m=u.clippingPlanes,v=u.clipIntersection,g=u.clipShadows,p=i.get(u);if(!s||m===null||m.length===0||r&&!g)r?h(null):l();else{const S=r?0:n,w=S*4;let x=p.clippingState||null;c.value=x,x=h(m,d,w,f);for(let U=0;U!==w;++U)x[U]=e[U];p.clippingState=x,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=S}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,d,f,m){const v=u!==null?u.length:0;let g=null;if(v!==0){if(g=c.value,m!==!0||g===null){const p=f+v*4,S=d.matrixWorldInverse;a.getNormalMatrix(S),(g===null||g.length<p)&&(g=new Float32Array(p));for(let w=0,x=f;w!==v;++w,x+=4)o.copy(u[w]).applyMatrix4(S,a),o.normal.toArray(g,x),g[x+3]=o.constant}c.value=g,c.needsUpdate=!0}return t.numPlanes=v,t.numIntersection=0,g}}function v0(i){let t=new WeakMap;function e(o,a){return a===ta?o.mapping=Qi:a===ea&&(o.mapping=ts),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===ta||a===ea)if(t.has(o)){const c=t.get(o).texture;return e(c,o.mapping)}else{const c=o.image;if(c&&c.height>0){const l=new Rd(c.height);return l.fromEquirectangularTexture(i,o),t.set(o,l),o.addEventListener("dispose",s),e(l.texture,o.mapping)}else return null}}return o}function s(o){const a=o.target;a.removeEventListener("dispose",s);const c=t.get(a);c!==void 0&&(t.delete(a),c.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}class Rh extends Th{constructor(t=-1,e=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-t,o=n+t,a=s+e,c=s-e;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=h*this.view.offsetY,c=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const qi=4,jc=[.125,.215,.35,.446,.526,.582],pi=20,wo=new Rh,Qc=new bt;let So=null,Eo=0,To=0,bo=!1;const di=(1+Math.sqrt(5))/2,Vi=1/di,tl=[new I(-di,Vi,0),new I(di,Vi,0),new I(-Vi,0,di),new I(Vi,0,di),new I(0,di,-Vi),new I(0,di,Vi),new I(-1,1,-1),new I(1,1,-1),new I(-1,1,1),new I(1,1,1)];class Pa{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100){So=this._renderer.getRenderTarget(),Eo=this._renderer.getActiveCubeFace(),To=this._renderer.getActiveMipmapLevel(),bo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=il(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=nl(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(So,Eo,To),this._renderer.xr.enabled=bo,t.scissorTest=!1,ur(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Qi||t.mapping===ts?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),So=this._renderer.getRenderTarget(),Eo=this._renderer.getActiveCubeFace(),To=this._renderer.getActiveMipmapLevel(),bo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:yn,minFilter:yn,generateMipmaps:!1,type:zs,format:fn,colorSpace:os,depthBuffer:!1},s=el(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=el(t,e,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=x0(r)),this._blurMaterial=M0(r,t,e)}return s}_compileMaterial(t){const e=new A(this._lodPlanes[0],t);this._renderer.compile(e,wo)}_sceneToCubeUV(t,e,n,s){const a=new He(90,1,e,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(Qc),h.toneMapping=ti,h.autoClear=!1;const f=new pe({name:"PMREM.Background",side:Fe,depthWrite:!1,depthTest:!1}),m=new A(new qt,f);let v=!1;const g=t.background;g?g.isColor&&(f.color.copy(g),t.background=null,v=!0):(f.color.copy(Qc),v=!0);for(let p=0;p<6;p++){const S=p%3;S===0?(a.up.set(0,c[p],0),a.lookAt(l[p],0,0)):S===1?(a.up.set(0,0,c[p]),a.lookAt(0,l[p],0)):(a.up.set(0,c[p],0),a.lookAt(0,0,l[p]));const w=this._cubeSize;ur(s,S*w,p>2?w:0,w,w),h.setRenderTarget(s),v&&h.render(m,a),h.render(t,a)}m.geometry.dispose(),m.material.dispose(),h.toneMapping=d,h.autoClear=u,t.background=g}_textureToCubeUV(t,e){const n=this._renderer,s=t.mapping===Qi||t.mapping===ts;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=il()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=nl());const r=s?this._cubemapMaterial:this._equirectMaterial,o=new A(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;const c=this._cubeSize;ur(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(o,wo)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=tl[(s-r-1)%tl.length];this._blur(t,r-1,r,o,a)}e.autoClear=n}_blur(t,e,n,s,r){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,s,"latitudinal",r),this._halfBlur(o,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,o,a){const c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new A(this._lodPlanes[s],l),d=l.uniforms,f=this._sizeLods[n]-1,m=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*pi-1),v=r/m,g=isFinite(r)?1+Math.floor(h*v):pi;g>pi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${pi}`);const p=[];let S=0;for(let R=0;R<pi;++R){const D=R/v,y=Math.exp(-D*D/2);p.push(y),R===0?S+=y:R<g&&(S+=2*y)}for(let R=0;R<p.length;R++)p[R]=p[R]/S;d.envMap.value=t.texture,d.samples.value=g,d.weights.value=p,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:w}=this;d.dTheta.value=m,d.mipInt.value=w-n;const x=this._sizeLods[s],U=3*x*(s>w-qi?s-w+qi:0),T=4*(this._cubeSize-x);ur(e,U,T,3*x,2*x),c.setRenderTarget(e),c.render(u,wo)}}function x0(i){const t=[],e=[],n=[];let s=i;const r=i-qi+1+jc.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);e.push(a);let c=1/a;o>i-qi?c=jc[o-i+qi-1]:o===0&&(c=0),n.push(c);const l=1/(a-2),h=-l,u=1+l,d=[h,h,u,h,u,u,h,h,u,u,h,u],f=6,m=6,v=3,g=2,p=1,S=new Float32Array(v*m*f),w=new Float32Array(g*m*f),x=new Float32Array(p*m*f);for(let T=0;T<f;T++){const R=T%3*2/3-1,D=T>2?0:-1,y=[R,D,0,R+2/3,D,0,R+2/3,D+1,0,R,D,0,R+2/3,D+1,0,R,D+1,0];S.set(y,v*m*T),w.set(d,g*m*T);const M=[T,T,T,T,T,T];x.set(M,p*m*T)}const U=new Pe;U.setAttribute("position",new tn(S,v)),U.setAttribute("uv",new tn(w,g)),U.setAttribute("faceIndex",new tn(x,p)),t.push(U),s>qi&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function el(i,t,e){const n=new Si(i,t,e);return n.texture.mapping=Wr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function ur(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function M0(i,t,e){const n=new Float32Array(pi),s=new I(0,1,0);return new ni({name:"SphericalGaussianBlur",defines:{n:pi,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:nc(),fragmentShader:`

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
		`,blending:Qn,depthTest:!1,depthWrite:!1})}function nl(){return new ni({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:nc(),fragmentShader:`

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
		`,blending:Qn,depthTest:!1,depthWrite:!1})}function il(){return new ni({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:nc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Qn,depthTest:!1,depthWrite:!1})}function nc(){return`

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
	`}function y0(i){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){const c=a.mapping,l=c===ta||c===ea,h=c===Qi||c===ts;if(l||h){let u=t.get(a);const d=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return e===null&&(e=new Pa(i)),u=l?e.fromEquirectangular(a,u):e.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),u.texture;if(u!==void 0)return u.texture;{const f=a.image;return l&&f&&f.height>0||h&&f&&s(f)?(e===null&&(e=new Pa(i)),u=l?e.fromEquirectangular(a):e.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),a.addEventListener("dispose",r),u.texture):null}}}return a}function s(a){let c=0;const l=6;for(let h=0;h<l;h++)a[h]!==void 0&&c++;return c===l}function r(a){const c=a.target;c.removeEventListener("dispose",r);const l=t.get(c);l!==void 0&&(t.delete(c),l.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function w0(i){const t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const s=e(n);return s===null&&Ts("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function S0(i,t,e,n){const s={},r=new WeakMap;function o(u){const d=u.target;d.index!==null&&t.remove(d.index);for(const m in d.attributes)t.remove(d.attributes[m]);for(const m in d.morphAttributes){const v=d.morphAttributes[m];for(let g=0,p=v.length;g<p;g++)t.remove(v[g])}d.removeEventListener("dispose",o),delete s[d.id];const f=r.get(d);f&&(t.remove(f),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function a(u,d){return s[d.id]===!0||(d.addEventListener("dispose",o),s[d.id]=!0,e.memory.geometries++),d}function c(u){const d=u.attributes;for(const m in d)t.update(d[m],i.ARRAY_BUFFER);const f=u.morphAttributes;for(const m in f){const v=f[m];for(let g=0,p=v.length;g<p;g++)t.update(v[g],i.ARRAY_BUFFER)}}function l(u){const d=[],f=u.index,m=u.attributes.position;let v=0;if(f!==null){const S=f.array;v=f.version;for(let w=0,x=S.length;w<x;w+=3){const U=S[w+0],T=S[w+1],R=S[w+2];d.push(U,T,T,R,R,U)}}else if(m!==void 0){const S=m.array;v=m.version;for(let w=0,x=S.length/3-1;w<x;w+=3){const U=w+0,T=w+1,R=w+2;d.push(U,T,T,R,R,U)}}else return;const g=new(vh(d)?Sh:wh)(d,1);g.version=v;const p=r.get(u);p&&t.remove(p),r.set(u,g)}function h(u){const d=r.get(u);if(d){const f=u.index;f!==null&&d.version<f.version&&l(u)}else l(u);return r.get(u)}return{get:a,update:c,getWireframeAttribute:h}}function E0(i,t,e){let n;function s(d){n=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function c(d,f){i.drawElements(n,f,r,d*o),e.update(f,n,1)}function l(d,f,m){m!==0&&(i.drawElementsInstanced(n,f,r,d*o,m),e.update(f,n,m))}function h(d,f,m){if(m===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,d,0,m);let g=0;for(let p=0;p<m;p++)g+=f[p];e.update(g,n,1)}function u(d,f,m,v){if(m===0)return;const g=t.get("WEBGL_multi_draw");if(g===null)for(let p=0;p<d.length;p++)l(d[p]/o,f[p],v[p]);else{g.multiDrawElementsInstancedWEBGL(n,f,0,r,d,0,v,0,m);let p=0;for(let S=0;S<m;S++)p+=f[S]*v[S];e.update(p,n,1)}}this.setMode=s,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function T0(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(r/3);break;case i.LINES:e.lines+=a*(r/2);break;case i.LINE_STRIP:e.lines+=a*(r-1);break;case i.LINE_LOOP:e.lines+=a*r;break;case i.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function b0(i,t,e){const n=new WeakMap,s=new ue;function r(o,a,c){const l=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0;let d=n.get(a);if(d===void 0||d.count!==u){let M=function(){D.dispose(),n.delete(a),a.removeEventListener("dispose",M)};var f=M;d!==void 0&&d.texture.dispose();const m=a.morphAttributes.position!==void 0,v=a.morphAttributes.normal!==void 0,g=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],S=a.morphAttributes.normal||[],w=a.morphAttributes.color||[];let x=0;m===!0&&(x=1),v===!0&&(x=2),g===!0&&(x=3);let U=a.attributes.position.count*x,T=1;U>t.maxTextureSize&&(T=Math.ceil(U/t.maxTextureSize),U=t.maxTextureSize);const R=new Float32Array(U*T*4*u),D=new Mh(R,U,T,u);D.type=wn,D.needsUpdate=!0;const y=x*4;for(let C=0;C<u;C++){const z=p[C],k=S[C],H=w[C],Z=U*T*4*C;for(let W=0;W<z.count;W++){const st=W*y;m===!0&&(s.fromBufferAttribute(z,W),R[Z+st+0]=s.x,R[Z+st+1]=s.y,R[Z+st+2]=s.z,R[Z+st+3]=0),v===!0&&(s.fromBufferAttribute(k,W),R[Z+st+4]=s.x,R[Z+st+5]=s.y,R[Z+st+6]=s.z,R[Z+st+7]=0),g===!0&&(s.fromBufferAttribute(H,W),R[Z+st+8]=s.x,R[Z+st+9]=s.y,R[Z+st+10]=s.z,R[Z+st+11]=H.itemSize===4?s.w:1)}}d={count:u,texture:D,size:new gt(U,T)},n.set(a,d),a.addEventListener("dispose",M)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",o.morphTexture,e);else{let m=0;for(let g=0;g<l.length;g++)m+=l[g];const v=a.morphTargetsRelative?1:1-m;c.getUniforms().setValue(i,"morphTargetBaseInfluence",v),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",d.texture,e),c.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:r}}function A0(i,t,e,n){let s=new WeakMap;function r(c){const l=n.render.frame,h=c.geometry,u=t.get(c,h);if(s.get(u)!==l&&(t.update(u),s.set(u,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),s.get(c)!==l&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),s.set(c,l))),c.isSkinnedMesh){const d=c.skeleton;s.get(d)!==l&&(d.update(),s.set(d,l))}return u}function o(){s=new WeakMap}function a(c){const l=c.target;l.removeEventListener("dispose",a),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:r,dispose:o}}class Ch extends Ge{constructor(t,e,n,s,r,o,a,c,l,h=Zi){if(h!==Zi&&h!==is)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Zi&&(n=wi),n===void 0&&h===is&&(n=ns),super(null,s,r,o,a,c,h,n,l),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:Qe,this.minFilter=c!==void 0?c:Qe,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const Ph=new Ge,sl=new Ch(1,1),Lh=new Mh,Ih=new dd,Dh=new bh,rl=[],ol=[],al=new Float32Array(16),cl=new Float32Array(9),ll=new Float32Array(4);function hs(i,t,e){const n=i[0];if(n<=0||n>0)return i;const s=t*e;let r=rl[s];if(r===void 0&&(r=new Float32Array(s),rl[s]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(r,a)}return r}function Re(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Ce(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function qr(i,t){let e=ol[t];e===void 0&&(e=new Int32Array(t),ol[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function R0(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function C0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Re(e,t))return;i.uniform2fv(this.addr,t),Ce(e,t)}}function P0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Re(e,t))return;i.uniform3fv(this.addr,t),Ce(e,t)}}function L0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Re(e,t))return;i.uniform4fv(this.addr,t),Ce(e,t)}}function I0(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Re(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Ce(e,t)}else{if(Re(e,n))return;ll.set(n),i.uniformMatrix2fv(this.addr,!1,ll),Ce(e,n)}}function D0(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Re(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Ce(e,t)}else{if(Re(e,n))return;cl.set(n),i.uniformMatrix3fv(this.addr,!1,cl),Ce(e,n)}}function U0(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Re(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Ce(e,t)}else{if(Re(e,n))return;al.set(n),i.uniformMatrix4fv(this.addr,!1,al),Ce(e,n)}}function N0(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function F0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Re(e,t))return;i.uniform2iv(this.addr,t),Ce(e,t)}}function O0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Re(e,t))return;i.uniform3iv(this.addr,t),Ce(e,t)}}function z0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Re(e,t))return;i.uniform4iv(this.addr,t),Ce(e,t)}}function B0(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function k0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Re(e,t))return;i.uniform2uiv(this.addr,t),Ce(e,t)}}function H0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Re(e,t))return;i.uniform3uiv(this.addr,t),Ce(e,t)}}function G0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Re(e,t))return;i.uniform4uiv(this.addr,t),Ce(e,t)}}function V0(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(sl.compareFunction=_h,r=sl):r=Ph,e.setTexture2D(t||r,s)}function W0(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||Ih,s)}function X0(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||Dh,s)}function q0(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||Lh,s)}function Y0(i){switch(i){case 5126:return R0;case 35664:return C0;case 35665:return P0;case 35666:return L0;case 35674:return I0;case 35675:return D0;case 35676:return U0;case 5124:case 35670:return N0;case 35667:case 35671:return F0;case 35668:case 35672:return O0;case 35669:case 35673:return z0;case 5125:return B0;case 36294:return k0;case 36295:return H0;case 36296:return G0;case 35678:case 36198:case 36298:case 36306:case 35682:return V0;case 35679:case 36299:case 36307:return W0;case 35680:case 36300:case 36308:case 36293:return X0;case 36289:case 36303:case 36311:case 36292:return q0}}function $0(i,t){i.uniform1fv(this.addr,t)}function Z0(i,t){const e=hs(t,this.size,2);i.uniform2fv(this.addr,e)}function K0(i,t){const e=hs(t,this.size,3);i.uniform3fv(this.addr,e)}function J0(i,t){const e=hs(t,this.size,4);i.uniform4fv(this.addr,e)}function j0(i,t){const e=hs(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function Q0(i,t){const e=hs(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function tm(i,t){const e=hs(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function em(i,t){i.uniform1iv(this.addr,t)}function nm(i,t){i.uniform2iv(this.addr,t)}function im(i,t){i.uniform3iv(this.addr,t)}function sm(i,t){i.uniform4iv(this.addr,t)}function rm(i,t){i.uniform1uiv(this.addr,t)}function om(i,t){i.uniform2uiv(this.addr,t)}function am(i,t){i.uniform3uiv(this.addr,t)}function cm(i,t){i.uniform4uiv(this.addr,t)}function lm(i,t,e){const n=this.cache,s=t.length,r=qr(e,s);Re(n,r)||(i.uniform1iv(this.addr,r),Ce(n,r));for(let o=0;o!==s;++o)e.setTexture2D(t[o]||Ph,r[o])}function hm(i,t,e){const n=this.cache,s=t.length,r=qr(e,s);Re(n,r)||(i.uniform1iv(this.addr,r),Ce(n,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||Ih,r[o])}function um(i,t,e){const n=this.cache,s=t.length,r=qr(e,s);Re(n,r)||(i.uniform1iv(this.addr,r),Ce(n,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||Dh,r[o])}function dm(i,t,e){const n=this.cache,s=t.length,r=qr(e,s);Re(n,r)||(i.uniform1iv(this.addr,r),Ce(n,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||Lh,r[o])}function fm(i){switch(i){case 5126:return $0;case 35664:return Z0;case 35665:return K0;case 35666:return J0;case 35674:return j0;case 35675:return Q0;case 35676:return tm;case 5124:case 35670:return em;case 35667:case 35671:return nm;case 35668:case 35672:return im;case 35669:case 35673:return sm;case 5125:return rm;case 36294:return om;case 36295:return am;case 36296:return cm;case 35678:case 36198:case 36298:case 36306:case 35682:return lm;case 35679:case 36299:case 36307:return hm;case 35680:case 36300:case 36308:case 36293:return um;case 36289:case 36303:case 36311:case 36292:return dm}}class pm{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Y0(e.type)}}class mm{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=fm(e.type)}}class gm{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(t,e[a.id],n)}}}const Ao=/(\w+)(\])?(\[|\.)?/g;function hl(i,t){i.seq.push(t),i.map[t.id]=t}function _m(i,t,e){const n=i.name,s=n.length;for(Ao.lastIndex=0;;){const r=Ao.exec(n),o=Ao.lastIndex;let a=r[1];const c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===s){hl(e,l===void 0?new pm(a,i,t):new mm(a,i,t));break}else{let u=e.map[a];u===void 0&&(u=new gm(a),hl(e,u)),e=u}}}class Rr{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const r=t.getActiveUniform(e,s),o=t.getUniformLocation(e,r.name);_m(r,o,this)}}setValue(t,e,n,s){const r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){const s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,o=e.length;r!==o;++r){const a=e[r],c=n[a.id];c.needsUpdate!==!1&&a.setValue(t,c.value,s)}}static seqWithValue(t,e){const n=[];for(let s=0,r=t.length;s!==r;++s){const o=t[s];o.id in e&&n.push(o)}return n}}function ul(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const vm=37297;let xm=0;function Mm(i,t){const e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){const a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}const dl=new Zt;function ym(i){ne._getMatrix(dl,ne.workingColorSpace,i);const t=`mat3( ${dl.elements.map(e=>e.toFixed(4))} )`;switch(ne.getTransfer(i)){case Xr:return[t,"LinearTransferOETF"];case he:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function fl(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const o=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+Mm(i.getShaderSource(t),o)}else return s}function wm(i,t){const e=ym(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function Sm(i,t){let e;switch(t){case Bu:e="Linear";break;case ku:e="Reinhard";break;case Hu:e="Cineon";break;case Vr:e="ACESFilmic";break;case Vu:e="AgX";break;case Wu:e="Neutral";break;case Gu:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const dr=new I;function Em(){ne.getLuminanceCoefficients(dr);const i=dr.x.toFixed(4),t=dr.y.toFixed(4),e=dr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Tm(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(bs).join(`
`)}function bm(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Am(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(t,s),o=r.name;let a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function bs(i){return i!==""}function pl(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function ml(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const Rm=/^[ \t]*#include +<([\w\d./]+)>/gm;function La(i){return i.replace(Rm,Pm)}const Cm=new Map;function Pm(i,t){let e=Jt[t];if(e===void 0){const n=Cm.get(t);if(n!==void 0)e=Jt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return La(e)}const Lm=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function gl(i){return i.replace(Lm,Im)}function Im(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function _l(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}function Dm(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===rh?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===oh?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===In&&(t="SHADOWMAP_TYPE_VSM"),t}function Um(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Qi:case ts:t="ENVMAP_TYPE_CUBE";break;case Wr:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Nm(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case ts:t="ENVMAP_MODE_REFRACTION";break}return t}function Fm(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Wa:t="ENVMAP_BLENDING_MULTIPLY";break;case Ou:t="ENVMAP_BLENDING_MIX";break;case zu:t="ENVMAP_BLENDING_ADD";break}return t}function Om(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function zm(i,t,e,n){const s=i.getContext(),r=e.defines;let o=e.vertexShader,a=e.fragmentShader;const c=Dm(e),l=Um(e),h=Nm(e),u=Fm(e),d=Om(e),f=Tm(e),m=bm(r),v=s.createProgram();let g,p,S=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(g=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(bs).join(`
`),g.length>0&&(g+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(bs).join(`
`),p.length>0&&(p+=`
`)):(g=[_l(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(bs).join(`
`),p=[_l(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==ti?"#define TONE_MAPPING":"",e.toneMapping!==ti?Jt.tonemapping_pars_fragment:"",e.toneMapping!==ti?Sm("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Jt.colorspace_pars_fragment,wm("linearToOutputTexel",e.outputColorSpace),Em(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(bs).join(`
`)),o=La(o),o=pl(o,e),o=ml(o,e),a=La(a),a=pl(a,e),a=ml(a,e),o=gl(o),a=gl(a),e.isRawShaderMaterial!==!0&&(S=`#version 300 es
`,g=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,p=["#define varying in",e.glslVersion===Lc?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Lc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const w=S+g+o,x=S+p+a,U=ul(s,s.VERTEX_SHADER,w),T=ul(s,s.FRAGMENT_SHADER,x);s.attachShader(v,U),s.attachShader(v,T),e.index0AttributeName!==void 0?s.bindAttribLocation(v,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(v,0,"position"),s.linkProgram(v);function R(C){if(i.debug.checkShaderErrors){const z=s.getProgramInfoLog(v).trim(),k=s.getShaderInfoLog(U).trim(),H=s.getShaderInfoLog(T).trim();let Z=!0,W=!0;if(s.getProgramParameter(v,s.LINK_STATUS)===!1)if(Z=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,v,U,T);else{const st=fl(s,U,"vertex"),$=fl(s,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(v,s.VALIDATE_STATUS)+`

Material Name: `+C.name+`
Material Type: `+C.type+`

Program Info Log: `+z+`
`+st+`
`+$)}else z!==""?console.warn("THREE.WebGLProgram: Program Info Log:",z):(k===""||H==="")&&(W=!1);W&&(C.diagnostics={runnable:Z,programLog:z,vertexShader:{log:k,prefix:g},fragmentShader:{log:H,prefix:p}})}s.deleteShader(U),s.deleteShader(T),D=new Rr(s,v),y=Am(s,v)}let D;this.getUniforms=function(){return D===void 0&&R(this),D};let y;this.getAttributes=function(){return y===void 0&&R(this),y};let M=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=s.getProgramParameter(v,vm)),M},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(v),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=xm++,this.cacheKey=t,this.usedTimes=1,this.program=v,this.vertexShader=U,this.fragmentShader=T,this}let Bm=0;class km{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new Hm(t),e.set(t,n)),n}}class Hm{constructor(t){this.id=Bm++,this.code=t,this.usedTimes=0}}function Gm(i,t,e,n,s,r,o){const a=new tc,c=new km,l=new Set,h=[],u=s.logarithmicDepthBuffer,d=s.vertexTextures;let f=s.precision;const m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(y){return l.add(y),y===0?"uv":`uv${y}`}function g(y,M,C,z,k){const H=z.fog,Z=k.geometry,W=y.isMeshStandardMaterial?z.environment:null,st=(y.isMeshStandardMaterial?e:t).get(y.envMap||W),$=st&&st.mapping===Wr?st.image.height:null,ft=m[y.type];y.precision!==null&&(f=s.getMaxPrecision(y.precision),f!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",f,"instead."));const Mt=Z.morphAttributes.position||Z.morphAttributes.normal||Z.morphAttributes.color,dt=Mt!==void 0?Mt.length:0;let ut=0;Z.morphAttributes.position!==void 0&&(ut=1),Z.morphAttributes.normal!==void 0&&(ut=2),Z.morphAttributes.color!==void 0&&(ut=3);let ct,G,Q,lt;if(ft){const ae=xn[ft];ct=ae.vertexShader,G=ae.fragmentShader}else ct=y.vertexShader,G=y.fragmentShader,c.update(y),Q=c.getVertexShaderID(y),lt=c.getFragmentShaderID(y);const it=i.getRenderTarget(),pt=i.state.buffers.depth.getReversed(),wt=k.isInstancedMesh===!0,Ut=k.isBatchedMesh===!0,Gt=!!y.map,nt=!!y.matcap,rt=!!st,L=!!y.aoMap,At=!!y.lightMap,V=!!y.bumpMap,tt=!!y.normalMap,et=!!y.displacementMap,It=!!y.emissiveMap,_t=!!y.metalnessMap,b=!!y.roughnessMap,_=y.anisotropy>0,P=y.clearcoat>0,F=y.dispersion>0,K=y.iridescence>0,X=y.sheen>0,xt=y.transmission>0,mt=_&&!!y.anisotropyMap,yt=P&&!!y.clearcoatMap,kt=P&&!!y.clearcoatNormalMap,at=P&&!!y.clearcoatRoughnessMap,St=K&&!!y.iridescenceMap,Vt=K&&!!y.iridescenceThicknessMap,Wt=X&&!!y.sheenColorMap,Lt=X&&!!y.sheenRoughnessMap,jt=!!y.specularMap,Kt=!!y.specularColorMap,de=!!y.specularIntensityMap,N=xt&&!!y.transmissionMap,Tt=xt&&!!y.thicknessMap,J=!!y.gradientMap,ot=!!y.alphaMap,Pt=y.alphaTest>0,Rt=!!y.alphaHash,Yt=!!y.extensions;let xe=ti;y.toneMapped&&(it===null||it.isXRRenderTarget===!0)&&(xe=i.toneMapping);const Oe={shaderID:ft,shaderType:y.type,shaderName:y.name,vertexShader:ct,fragmentShader:G,defines:y.defines,customVertexShaderID:Q,customFragmentShaderID:lt,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:f,batching:Ut,batchingColor:Ut&&k._colorsTexture!==null,instancing:wt,instancingColor:wt&&k.instanceColor!==null,instancingMorph:wt&&k.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:it===null?i.outputColorSpace:it.isXRRenderTarget===!0?it.texture.colorSpace:os,alphaToCoverage:!!y.alphaToCoverage,map:Gt,matcap:nt,envMap:rt,envMapMode:rt&&st.mapping,envMapCubeUVHeight:$,aoMap:L,lightMap:At,bumpMap:V,normalMap:tt,displacementMap:d&&et,emissiveMap:It,normalMapObjectSpace:tt&&y.normalMapType===$u,normalMapTangentSpace:tt&&y.normalMapType===ja,metalnessMap:_t,roughnessMap:b,anisotropy:_,anisotropyMap:mt,clearcoat:P,clearcoatMap:yt,clearcoatNormalMap:kt,clearcoatRoughnessMap:at,dispersion:F,iridescence:K,iridescenceMap:St,iridescenceThicknessMap:Vt,sheen:X,sheenColorMap:Wt,sheenRoughnessMap:Lt,specularMap:jt,specularColorMap:Kt,specularIntensityMap:de,transmission:xt,transmissionMap:N,thicknessMap:Tt,gradientMap:J,opaque:y.transparent===!1&&y.blending===$i&&y.alphaToCoverage===!1,alphaMap:ot,alphaTest:Pt,alphaHash:Rt,combine:y.combine,mapUv:Gt&&v(y.map.channel),aoMapUv:L&&v(y.aoMap.channel),lightMapUv:At&&v(y.lightMap.channel),bumpMapUv:V&&v(y.bumpMap.channel),normalMapUv:tt&&v(y.normalMap.channel),displacementMapUv:et&&v(y.displacementMap.channel),emissiveMapUv:It&&v(y.emissiveMap.channel),metalnessMapUv:_t&&v(y.metalnessMap.channel),roughnessMapUv:b&&v(y.roughnessMap.channel),anisotropyMapUv:mt&&v(y.anisotropyMap.channel),clearcoatMapUv:yt&&v(y.clearcoatMap.channel),clearcoatNormalMapUv:kt&&v(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:at&&v(y.clearcoatRoughnessMap.channel),iridescenceMapUv:St&&v(y.iridescenceMap.channel),iridescenceThicknessMapUv:Vt&&v(y.iridescenceThicknessMap.channel),sheenColorMapUv:Wt&&v(y.sheenColorMap.channel),sheenRoughnessMapUv:Lt&&v(y.sheenRoughnessMap.channel),specularMapUv:jt&&v(y.specularMap.channel),specularColorMapUv:Kt&&v(y.specularColorMap.channel),specularIntensityMapUv:de&&v(y.specularIntensityMap.channel),transmissionMapUv:N&&v(y.transmissionMap.channel),thicknessMapUv:Tt&&v(y.thicknessMap.channel),alphaMapUv:ot&&v(y.alphaMap.channel),vertexTangents:!!Z.attributes.tangent&&(tt||_),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!Z.attributes.color&&Z.attributes.color.itemSize===4,pointsUvs:k.isPoints===!0&&!!Z.attributes.uv&&(Gt||ot),fog:!!H,useFog:y.fog===!0,fogExp2:!!H&&H.isFogExp2,flatShading:y.flatShading===!0,sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:pt,skinning:k.isSkinnedMesh===!0,morphTargets:Z.morphAttributes.position!==void 0,morphNormals:Z.morphAttributes.normal!==void 0,morphColors:Z.morphAttributes.color!==void 0,morphTargetsCount:dt,morphTextureStride:ut,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:y.dithering,shadowMapEnabled:i.shadowMap.enabled&&C.length>0,shadowMapType:i.shadowMap.type,toneMapping:xe,decodeVideoTexture:Gt&&y.map.isVideoTexture===!0&&ne.getTransfer(y.map.colorSpace)===he,decodeVideoTextureEmissive:It&&y.emissiveMap.isVideoTexture===!0&&ne.getTransfer(y.emissiveMap.colorSpace)===he,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===Te,flipSided:y.side===Fe,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:Yt&&y.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Yt&&y.extensions.multiDraw===!0||Ut)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return Oe.vertexUv1s=l.has(1),Oe.vertexUv2s=l.has(2),Oe.vertexUv3s=l.has(3),l.clear(),Oe}function p(y){const M=[];if(y.shaderID?M.push(y.shaderID):(M.push(y.customVertexShaderID),M.push(y.customFragmentShaderID)),y.defines!==void 0)for(const C in y.defines)M.push(C),M.push(y.defines[C]);return y.isRawShaderMaterial===!1&&(S(M,y),w(M,y),M.push(i.outputColorSpace)),M.push(y.customProgramCacheKey),M.join()}function S(y,M){y.push(M.precision),y.push(M.outputColorSpace),y.push(M.envMapMode),y.push(M.envMapCubeUVHeight),y.push(M.mapUv),y.push(M.alphaMapUv),y.push(M.lightMapUv),y.push(M.aoMapUv),y.push(M.bumpMapUv),y.push(M.normalMapUv),y.push(M.displacementMapUv),y.push(M.emissiveMapUv),y.push(M.metalnessMapUv),y.push(M.roughnessMapUv),y.push(M.anisotropyMapUv),y.push(M.clearcoatMapUv),y.push(M.clearcoatNormalMapUv),y.push(M.clearcoatRoughnessMapUv),y.push(M.iridescenceMapUv),y.push(M.iridescenceThicknessMapUv),y.push(M.sheenColorMapUv),y.push(M.sheenRoughnessMapUv),y.push(M.specularMapUv),y.push(M.specularColorMapUv),y.push(M.specularIntensityMapUv),y.push(M.transmissionMapUv),y.push(M.thicknessMapUv),y.push(M.combine),y.push(M.fogExp2),y.push(M.sizeAttenuation),y.push(M.morphTargetsCount),y.push(M.morphAttributeCount),y.push(M.numDirLights),y.push(M.numPointLights),y.push(M.numSpotLights),y.push(M.numSpotLightMaps),y.push(M.numHemiLights),y.push(M.numRectAreaLights),y.push(M.numDirLightShadows),y.push(M.numPointLightShadows),y.push(M.numSpotLightShadows),y.push(M.numSpotLightShadowsWithMaps),y.push(M.numLightProbes),y.push(M.shadowMapType),y.push(M.toneMapping),y.push(M.numClippingPlanes),y.push(M.numClipIntersection),y.push(M.depthPacking)}function w(y,M){a.disableAll(),M.supportsVertexTextures&&a.enable(0),M.instancing&&a.enable(1),M.instancingColor&&a.enable(2),M.instancingMorph&&a.enable(3),M.matcap&&a.enable(4),M.envMap&&a.enable(5),M.normalMapObjectSpace&&a.enable(6),M.normalMapTangentSpace&&a.enable(7),M.clearcoat&&a.enable(8),M.iridescence&&a.enable(9),M.alphaTest&&a.enable(10),M.vertexColors&&a.enable(11),M.vertexAlphas&&a.enable(12),M.vertexUv1s&&a.enable(13),M.vertexUv2s&&a.enable(14),M.vertexUv3s&&a.enable(15),M.vertexTangents&&a.enable(16),M.anisotropy&&a.enable(17),M.alphaHash&&a.enable(18),M.batching&&a.enable(19),M.dispersion&&a.enable(20),M.batchingColor&&a.enable(21),y.push(a.mask),a.disableAll(),M.fog&&a.enable(0),M.useFog&&a.enable(1),M.flatShading&&a.enable(2),M.logarithmicDepthBuffer&&a.enable(3),M.reverseDepthBuffer&&a.enable(4),M.skinning&&a.enable(5),M.morphTargets&&a.enable(6),M.morphNormals&&a.enable(7),M.morphColors&&a.enable(8),M.premultipliedAlpha&&a.enable(9),M.shadowMapEnabled&&a.enable(10),M.doubleSided&&a.enable(11),M.flipSided&&a.enable(12),M.useDepthPacking&&a.enable(13),M.dithering&&a.enable(14),M.transmission&&a.enable(15),M.sheen&&a.enable(16),M.opaque&&a.enable(17),M.pointsUvs&&a.enable(18),M.decodeVideoTexture&&a.enable(19),M.decodeVideoTextureEmissive&&a.enable(20),M.alphaToCoverage&&a.enable(21),y.push(a.mask)}function x(y){const M=m[y.type];let C;if(M){const z=xn[M];C=Ed.clone(z.uniforms)}else C=y.uniforms;return C}function U(y,M){let C;for(let z=0,k=h.length;z<k;z++){const H=h[z];if(H.cacheKey===M){C=H,++C.usedTimes;break}}return C===void 0&&(C=new zm(i,M,y,r),h.push(C)),C}function T(y){if(--y.usedTimes===0){const M=h.indexOf(y);h[M]=h[h.length-1],h.pop(),y.destroy()}}function R(y){c.remove(y)}function D(){c.dispose()}return{getParameters:g,getProgramCacheKey:p,getUniforms:x,acquireProgram:U,releaseProgram:T,releaseShaderCache:R,programs:h,dispose:D}}function Vm(){let i=new WeakMap;function t(o){return i.has(o)}function e(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,c){i.get(o)[a]=c}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function Wm(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function vl(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function xl(){const i=[];let t=0;const e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function o(u,d,f,m,v,g){let p=i[t];return p===void 0?(p={id:u.id,object:u,geometry:d,material:f,groupOrder:m,renderOrder:u.renderOrder,z:v,group:g},i[t]=p):(p.id=u.id,p.object=u,p.geometry=d,p.material=f,p.groupOrder=m,p.renderOrder=u.renderOrder,p.z=v,p.group=g),t++,p}function a(u,d,f,m,v,g){const p=o(u,d,f,m,v,g);f.transmission>0?n.push(p):f.transparent===!0?s.push(p):e.push(p)}function c(u,d,f,m,v,g){const p=o(u,d,f,m,v,g);f.transmission>0?n.unshift(p):f.transparent===!0?s.unshift(p):e.unshift(p)}function l(u,d){e.length>1&&e.sort(u||Wm),n.length>1&&n.sort(d||vl),s.length>1&&s.sort(d||vl)}function h(){for(let u=t,d=i.length;u<d;u++){const f=i[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:a,unshift:c,finish:h,sort:l}}function Xm(){let i=new WeakMap;function t(n,s){const r=i.get(n);let o;return r===void 0?(o=new xl,i.set(n,[o])):s>=r.length?(o=new xl,r.push(o)):o=r[s],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function qm(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new I,color:new bt};break;case"SpotLight":e={position:new I,direction:new I,color:new bt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new I,color:new bt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new I,skyColor:new bt,groundColor:new bt};break;case"RectAreaLight":e={color:new bt,position:new I,halfWidth:new I,halfHeight:new I};break}return i[t.id]=e,e}}}function Ym(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new gt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new gt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new gt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let $m=0;function Zm(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function Km(i){const t=new qm,e=Ym(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new I);const s=new I,r=new le,o=new le;function a(l){let h=0,u=0,d=0;for(let y=0;y<9;y++)n.probe[y].set(0,0,0);let f=0,m=0,v=0,g=0,p=0,S=0,w=0,x=0,U=0,T=0,R=0;l.sort(Zm);for(let y=0,M=l.length;y<M;y++){const C=l[y],z=C.color,k=C.intensity,H=C.distance,Z=C.shadow&&C.shadow.map?C.shadow.map.texture:null;if(C.isAmbientLight)h+=z.r*k,u+=z.g*k,d+=z.b*k;else if(C.isLightProbe){for(let W=0;W<9;W++)n.probe[W].addScaledVector(C.sh.coefficients[W],k);R++}else if(C.isDirectionalLight){const W=t.get(C);if(W.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){const st=C.shadow,$=e.get(C);$.shadowIntensity=st.intensity,$.shadowBias=st.bias,$.shadowNormalBias=st.normalBias,$.shadowRadius=st.radius,$.shadowMapSize=st.mapSize,n.directionalShadow[f]=$,n.directionalShadowMap[f]=Z,n.directionalShadowMatrix[f]=C.shadow.matrix,S++}n.directional[f]=W,f++}else if(C.isSpotLight){const W=t.get(C);W.position.setFromMatrixPosition(C.matrixWorld),W.color.copy(z).multiplyScalar(k),W.distance=H,W.coneCos=Math.cos(C.angle),W.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),W.decay=C.decay,n.spot[v]=W;const st=C.shadow;if(C.map&&(n.spotLightMap[U]=C.map,U++,st.updateMatrices(C),C.castShadow&&T++),n.spotLightMatrix[v]=st.matrix,C.castShadow){const $=e.get(C);$.shadowIntensity=st.intensity,$.shadowBias=st.bias,$.shadowNormalBias=st.normalBias,$.shadowRadius=st.radius,$.shadowMapSize=st.mapSize,n.spotShadow[v]=$,n.spotShadowMap[v]=Z,x++}v++}else if(C.isRectAreaLight){const W=t.get(C);W.color.copy(z).multiplyScalar(k),W.halfWidth.set(C.width*.5,0,0),W.halfHeight.set(0,C.height*.5,0),n.rectArea[g]=W,g++}else if(C.isPointLight){const W=t.get(C);if(W.color.copy(C.color).multiplyScalar(C.intensity),W.distance=C.distance,W.decay=C.decay,C.castShadow){const st=C.shadow,$=e.get(C);$.shadowIntensity=st.intensity,$.shadowBias=st.bias,$.shadowNormalBias=st.normalBias,$.shadowRadius=st.radius,$.shadowMapSize=st.mapSize,$.shadowCameraNear=st.camera.near,$.shadowCameraFar=st.camera.far,n.pointShadow[m]=$,n.pointShadowMap[m]=Z,n.pointShadowMatrix[m]=C.shadow.matrix,w++}n.point[m]=W,m++}else if(C.isHemisphereLight){const W=t.get(C);W.skyColor.copy(C.color).multiplyScalar(k),W.groundColor.copy(C.groundColor).multiplyScalar(k),n.hemi[p]=W,p++}}g>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Et.LTC_FLOAT_1,n.rectAreaLTC2=Et.LTC_FLOAT_2):(n.rectAreaLTC1=Et.LTC_HALF_1,n.rectAreaLTC2=Et.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;const D=n.hash;(D.directionalLength!==f||D.pointLength!==m||D.spotLength!==v||D.rectAreaLength!==g||D.hemiLength!==p||D.numDirectionalShadows!==S||D.numPointShadows!==w||D.numSpotShadows!==x||D.numSpotMaps!==U||D.numLightProbes!==R)&&(n.directional.length=f,n.spot.length=v,n.rectArea.length=g,n.point.length=m,n.hemi.length=p,n.directionalShadow.length=S,n.directionalShadowMap.length=S,n.pointShadow.length=w,n.pointShadowMap.length=w,n.spotShadow.length=x,n.spotShadowMap.length=x,n.directionalShadowMatrix.length=S,n.pointShadowMatrix.length=w,n.spotLightMatrix.length=x+U-T,n.spotLightMap.length=U,n.numSpotLightShadowsWithMaps=T,n.numLightProbes=R,D.directionalLength=f,D.pointLength=m,D.spotLength=v,D.rectAreaLength=g,D.hemiLength=p,D.numDirectionalShadows=S,D.numPointShadows=w,D.numSpotShadows=x,D.numSpotMaps=U,D.numLightProbes=R,n.version=$m++)}function c(l,h){let u=0,d=0,f=0,m=0,v=0;const g=h.matrixWorldInverse;for(let p=0,S=l.length;p<S;p++){const w=l[p];if(w.isDirectionalLight){const x=n.directional[u];x.direction.setFromMatrixPosition(w.matrixWorld),s.setFromMatrixPosition(w.target.matrixWorld),x.direction.sub(s),x.direction.transformDirection(g),u++}else if(w.isSpotLight){const x=n.spot[f];x.position.setFromMatrixPosition(w.matrixWorld),x.position.applyMatrix4(g),x.direction.setFromMatrixPosition(w.matrixWorld),s.setFromMatrixPosition(w.target.matrixWorld),x.direction.sub(s),x.direction.transformDirection(g),f++}else if(w.isRectAreaLight){const x=n.rectArea[m];x.position.setFromMatrixPosition(w.matrixWorld),x.position.applyMatrix4(g),o.identity(),r.copy(w.matrixWorld),r.premultiply(g),o.extractRotation(r),x.halfWidth.set(w.width*.5,0,0),x.halfHeight.set(0,w.height*.5,0),x.halfWidth.applyMatrix4(o),x.halfHeight.applyMatrix4(o),m++}else if(w.isPointLight){const x=n.point[d];x.position.setFromMatrixPosition(w.matrixWorld),x.position.applyMatrix4(g),d++}else if(w.isHemisphereLight){const x=n.hemi[v];x.direction.setFromMatrixPosition(w.matrixWorld),x.direction.transformDirection(g),v++}}}return{setup:a,setupView:c,state:n}}function Ml(i){const t=new Km(i),e=[],n=[];function s(h){l.camera=h,e.length=0,n.length=0}function r(h){e.push(h)}function o(h){n.push(h)}function a(){t.setup(e)}function c(h){t.setupView(e,h)}const l={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:l,setupLights:a,setupLightsView:c,pushLight:r,pushShadow:o}}function Jm(i){let t=new WeakMap;function e(s,r=0){const o=t.get(s);let a;return o===void 0?(a=new Ml(i),t.set(s,[a])):r>=o.length?(a=new Ml(i),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}class jm extends Ai{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=qu,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Qm extends Ai{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const tg=`void main() {
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
}`;function ng(i,t,e){let n=new ec;const s=new gt,r=new gt,o=new ue,a=new jm({depthPacking:Yu}),c=new Qm,l={},h=e.maxTextureSize,u={[ei]:Fe,[Fe]:ei,[Te]:Te},d=new ni({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new gt},radius:{value:4}},vertexShader:tg,fragmentShader:eg}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const m=new Pe;m.setAttribute("position",new tn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new A(m,d),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=rh;let p=this.type;this.render=function(T,R,D){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||T.length===0)return;const y=i.getRenderTarget(),M=i.getActiveCubeFace(),C=i.getActiveMipmapLevel(),z=i.state;z.setBlending(Qn),z.buffers.color.setClear(1,1,1,1),z.buffers.depth.setTest(!0),z.setScissorTest(!1);const k=p!==In&&this.type===In,H=p===In&&this.type!==In;for(let Z=0,W=T.length;Z<W;Z++){const st=T[Z],$=st.shadow;if($===void 0){console.warn("THREE.WebGLShadowMap:",st,"has no shadow.");continue}if($.autoUpdate===!1&&$.needsUpdate===!1)continue;s.copy($.mapSize);const ft=$.getFrameExtents();if(s.multiply(ft),r.copy($.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/ft.x),s.x=r.x*ft.x,$.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/ft.y),s.y=r.y*ft.y,$.mapSize.y=r.y)),$.map===null||k===!0||H===!0){const dt=this.type!==In?{minFilter:Qe,magFilter:Qe}:{};$.map!==null&&$.map.dispose(),$.map=new Si(s.x,s.y,dt),$.map.texture.name=st.name+".shadowMap",$.camera.updateProjectionMatrix()}i.setRenderTarget($.map),i.clear();const Mt=$.getViewportCount();for(let dt=0;dt<Mt;dt++){const ut=$.getViewport(dt);o.set(r.x*ut.x,r.y*ut.y,r.x*ut.z,r.y*ut.w),z.viewport(o),$.updateMatrices(st,dt),n=$.getFrustum(),x(R,D,$.camera,st,this.type)}$.isPointLightShadow!==!0&&this.type===In&&S($,D),$.needsUpdate=!1}p=this.type,g.needsUpdate=!1,i.setRenderTarget(y,M,C)};function S(T,R){const D=t.update(v);d.defines.VSM_SAMPLES!==T.blurSamples&&(d.defines.VSM_SAMPLES=T.blurSamples,f.defines.VSM_SAMPLES=T.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new Si(s.x,s.y)),d.uniforms.shadow_pass.value=T.map.texture,d.uniforms.resolution.value=T.mapSize,d.uniforms.radius.value=T.radius,i.setRenderTarget(T.mapPass),i.clear(),i.renderBufferDirect(R,null,D,d,v,null),f.uniforms.shadow_pass.value=T.mapPass.texture,f.uniforms.resolution.value=T.mapSize,f.uniforms.radius.value=T.radius,i.setRenderTarget(T.map),i.clear(),i.renderBufferDirect(R,null,D,f,v,null)}function w(T,R,D,y){let M=null;const C=D.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(C!==void 0)M=C;else if(M=D.isPointLight===!0?c:a,i.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0){const z=M.uuid,k=R.uuid;let H=l[z];H===void 0&&(H={},l[z]=H);let Z=H[k];Z===void 0&&(Z=M.clone(),H[k]=Z,R.addEventListener("dispose",U)),M=Z}if(M.visible=R.visible,M.wireframe=R.wireframe,y===In?M.side=R.shadowSide!==null?R.shadowSide:R.side:M.side=R.shadowSide!==null?R.shadowSide:u[R.side],M.alphaMap=R.alphaMap,M.alphaTest=R.alphaTest,M.map=R.map,M.clipShadows=R.clipShadows,M.clippingPlanes=R.clippingPlanes,M.clipIntersection=R.clipIntersection,M.displacementMap=R.displacementMap,M.displacementScale=R.displacementScale,M.displacementBias=R.displacementBias,M.wireframeLinewidth=R.wireframeLinewidth,M.linewidth=R.linewidth,D.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const z=i.properties.get(M);z.light=D}return M}function x(T,R,D,y,M){if(T.visible===!1)return;if(T.layers.test(R.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&M===In)&&(!T.frustumCulled||n.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(D.matrixWorldInverse,T.matrixWorld);const k=t.update(T),H=T.material;if(Array.isArray(H)){const Z=k.groups;for(let W=0,st=Z.length;W<st;W++){const $=Z[W],ft=H[$.materialIndex];if(ft&&ft.visible){const Mt=w(T,ft,y,M);T.onBeforeShadow(i,T,R,D,k,Mt,$),i.renderBufferDirect(D,null,k,Mt,T,$),T.onAfterShadow(i,T,R,D,k,Mt,$)}}}else if(H.visible){const Z=w(T,H,y,M);T.onBeforeShadow(i,T,R,D,k,Z,null),i.renderBufferDirect(D,null,k,Z,T,null),T.onAfterShadow(i,T,R,D,k,Z,null)}}const z=T.children;for(let k=0,H=z.length;k<H;k++)x(z[k],R,D,y,M)}function U(T){T.target.removeEventListener("dispose",U);for(const D in l){const y=l[D],M=T.target.uuid;M in y&&(y[M].dispose(),delete y[M])}}}const ig={[Yo]:$o,[Zo]:jo,[Ko]:Qo,[ji]:Jo,[$o]:Yo,[jo]:Zo,[Qo]:Ko,[Jo]:ji};function sg(i,t){function e(){let N=!1;const Tt=new ue;let J=null;const ot=new ue(0,0,0,0);return{setMask:function(Pt){J!==Pt&&!N&&(i.colorMask(Pt,Pt,Pt,Pt),J=Pt)},setLocked:function(Pt){N=Pt},setClear:function(Pt,Rt,Yt,xe,Oe){Oe===!0&&(Pt*=xe,Rt*=xe,Yt*=xe),Tt.set(Pt,Rt,Yt,xe),ot.equals(Tt)===!1&&(i.clearColor(Pt,Rt,Yt,xe),ot.copy(Tt))},reset:function(){N=!1,J=null,ot.set(-1,0,0,0)}}}function n(){let N=!1,Tt=!1,J=null,ot=null,Pt=null;return{setReversed:function(Rt){if(Tt!==Rt){const Yt=t.get("EXT_clip_control");Tt?Yt.clipControlEXT(Yt.LOWER_LEFT_EXT,Yt.ZERO_TO_ONE_EXT):Yt.clipControlEXT(Yt.LOWER_LEFT_EXT,Yt.NEGATIVE_ONE_TO_ONE_EXT);const xe=Pt;Pt=null,this.setClear(xe)}Tt=Rt},getReversed:function(){return Tt},setTest:function(Rt){Rt?it(i.DEPTH_TEST):pt(i.DEPTH_TEST)},setMask:function(Rt){J!==Rt&&!N&&(i.depthMask(Rt),J=Rt)},setFunc:function(Rt){if(Tt&&(Rt=ig[Rt]),ot!==Rt){switch(Rt){case Yo:i.depthFunc(i.NEVER);break;case $o:i.depthFunc(i.ALWAYS);break;case Zo:i.depthFunc(i.LESS);break;case ji:i.depthFunc(i.LEQUAL);break;case Ko:i.depthFunc(i.EQUAL);break;case Jo:i.depthFunc(i.GEQUAL);break;case jo:i.depthFunc(i.GREATER);break;case Qo:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}ot=Rt}},setLocked:function(Rt){N=Rt},setClear:function(Rt){Pt!==Rt&&(Tt&&(Rt=1-Rt),i.clearDepth(Rt),Pt=Rt)},reset:function(){N=!1,J=null,ot=null,Pt=null,Tt=!1}}}function s(){let N=!1,Tt=null,J=null,ot=null,Pt=null,Rt=null,Yt=null,xe=null,Oe=null;return{setTest:function(ae){N||(ae?it(i.STENCIL_TEST):pt(i.STENCIL_TEST))},setMask:function(ae){Tt!==ae&&!N&&(i.stencilMask(ae),Tt=ae)},setFunc:function(ae,on,Tn){(J!==ae||ot!==on||Pt!==Tn)&&(i.stencilFunc(ae,on,Tn),J=ae,ot=on,Pt=Tn)},setOp:function(ae,on,Tn){(Rt!==ae||Yt!==on||xe!==Tn)&&(i.stencilOp(ae,on,Tn),Rt=ae,Yt=on,xe=Tn)},setLocked:function(ae){N=ae},setClear:function(ae){Oe!==ae&&(i.clearStencil(ae),Oe=ae)},reset:function(){N=!1,Tt=null,J=null,ot=null,Pt=null,Rt=null,Yt=null,xe=null,Oe=null}}}const r=new e,o=new n,a=new s,c=new WeakMap,l=new WeakMap;let h={},u={},d=new WeakMap,f=[],m=null,v=!1,g=null,p=null,S=null,w=null,x=null,U=null,T=null,R=new bt(0,0,0),D=0,y=!1,M=null,C=null,z=null,k=null,H=null;const Z=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let W=!1,st=0;const $=i.getParameter(i.VERSION);$.indexOf("WebGL")!==-1?(st=parseFloat(/^WebGL (\d)/.exec($)[1]),W=st>=1):$.indexOf("OpenGL ES")!==-1&&(st=parseFloat(/^OpenGL ES (\d)/.exec($)[1]),W=st>=2);let ft=null,Mt={};const dt=i.getParameter(i.SCISSOR_BOX),ut=i.getParameter(i.VIEWPORT),ct=new ue().fromArray(dt),G=new ue().fromArray(ut);function Q(N,Tt,J,ot){const Pt=new Uint8Array(4),Rt=i.createTexture();i.bindTexture(N,Rt),i.texParameteri(N,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(N,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Yt=0;Yt<J;Yt++)N===i.TEXTURE_3D||N===i.TEXTURE_2D_ARRAY?i.texImage3D(Tt,0,i.RGBA,1,1,ot,0,i.RGBA,i.UNSIGNED_BYTE,Pt):i.texImage2D(Tt+Yt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Pt);return Rt}const lt={};lt[i.TEXTURE_2D]=Q(i.TEXTURE_2D,i.TEXTURE_2D,1),lt[i.TEXTURE_CUBE_MAP]=Q(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),lt[i.TEXTURE_2D_ARRAY]=Q(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),lt[i.TEXTURE_3D]=Q(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),it(i.DEPTH_TEST),o.setFunc(ji),V(!1),tt(Tc),it(i.CULL_FACE),L(Qn);function it(N){h[N]!==!0&&(i.enable(N),h[N]=!0)}function pt(N){h[N]!==!1&&(i.disable(N),h[N]=!1)}function wt(N,Tt){return u[N]!==Tt?(i.bindFramebuffer(N,Tt),u[N]=Tt,N===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=Tt),N===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=Tt),!0):!1}function Ut(N,Tt){let J=f,ot=!1;if(N){J=d.get(Tt),J===void 0&&(J=[],d.set(Tt,J));const Pt=N.textures;if(J.length!==Pt.length||J[0]!==i.COLOR_ATTACHMENT0){for(let Rt=0,Yt=Pt.length;Rt<Yt;Rt++)J[Rt]=i.COLOR_ATTACHMENT0+Rt;J.length=Pt.length,ot=!0}}else J[0]!==i.BACK&&(J[0]=i.BACK,ot=!0);ot&&i.drawBuffers(J)}function Gt(N){return m!==N?(i.useProgram(N),m=N,!0):!1}const nt={[fi]:i.FUNC_ADD,[Mu]:i.FUNC_SUBTRACT,[yu]:i.FUNC_REVERSE_SUBTRACT};nt[wu]=i.MIN,nt[Su]=i.MAX;const rt={[Eu]:i.ZERO,[Tu]:i.ONE,[bu]:i.SRC_COLOR,[Xo]:i.SRC_ALPHA,[Iu]:i.SRC_ALPHA_SATURATE,[Pu]:i.DST_COLOR,[Ru]:i.DST_ALPHA,[Au]:i.ONE_MINUS_SRC_COLOR,[qo]:i.ONE_MINUS_SRC_ALPHA,[Lu]:i.ONE_MINUS_DST_COLOR,[Cu]:i.ONE_MINUS_DST_ALPHA,[Du]:i.CONSTANT_COLOR,[Uu]:i.ONE_MINUS_CONSTANT_COLOR,[Nu]:i.CONSTANT_ALPHA,[Fu]:i.ONE_MINUS_CONSTANT_ALPHA};function L(N,Tt,J,ot,Pt,Rt,Yt,xe,Oe,ae){if(N===Qn){v===!0&&(pt(i.BLEND),v=!1);return}if(v===!1&&(it(i.BLEND),v=!0),N!==xu){if(N!==g||ae!==y){if((p!==fi||x!==fi)&&(i.blendEquation(i.FUNC_ADD),p=fi,x=fi),ae)switch(N){case $i:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case bc:i.blendFunc(i.ONE,i.ONE);break;case Ac:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Rc:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}else switch(N){case $i:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case bc:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Ac:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Rc:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}S=null,w=null,U=null,T=null,R.set(0,0,0),D=0,g=N,y=ae}return}Pt=Pt||Tt,Rt=Rt||J,Yt=Yt||ot,(Tt!==p||Pt!==x)&&(i.blendEquationSeparate(nt[Tt],nt[Pt]),p=Tt,x=Pt),(J!==S||ot!==w||Rt!==U||Yt!==T)&&(i.blendFuncSeparate(rt[J],rt[ot],rt[Rt],rt[Yt]),S=J,w=ot,U=Rt,T=Yt),(xe.equals(R)===!1||Oe!==D)&&(i.blendColor(xe.r,xe.g,xe.b,Oe),R.copy(xe),D=Oe),g=N,y=!1}function At(N,Tt){N.side===Te?pt(i.CULL_FACE):it(i.CULL_FACE);let J=N.side===Fe;Tt&&(J=!J),V(J),N.blending===$i&&N.transparent===!1?L(Qn):L(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.blendColor,N.blendAlpha,N.premultipliedAlpha),o.setFunc(N.depthFunc),o.setTest(N.depthTest),o.setMask(N.depthWrite),r.setMask(N.colorWrite);const ot=N.stencilWrite;a.setTest(ot),ot&&(a.setMask(N.stencilWriteMask),a.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),a.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),It(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?it(i.SAMPLE_ALPHA_TO_COVERAGE):pt(i.SAMPLE_ALPHA_TO_COVERAGE)}function V(N){M!==N&&(N?i.frontFace(i.CW):i.frontFace(i.CCW),M=N)}function tt(N){N!==_u?(it(i.CULL_FACE),N!==C&&(N===Tc?i.cullFace(i.BACK):N===vu?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):pt(i.CULL_FACE),C=N}function et(N){N!==z&&(W&&i.lineWidth(N),z=N)}function It(N,Tt,J){N?(it(i.POLYGON_OFFSET_FILL),(k!==Tt||H!==J)&&(i.polygonOffset(Tt,J),k=Tt,H=J)):pt(i.POLYGON_OFFSET_FILL)}function _t(N){N?it(i.SCISSOR_TEST):pt(i.SCISSOR_TEST)}function b(N){N===void 0&&(N=i.TEXTURE0+Z-1),ft!==N&&(i.activeTexture(N),ft=N)}function _(N,Tt,J){J===void 0&&(ft===null?J=i.TEXTURE0+Z-1:J=ft);let ot=Mt[J];ot===void 0&&(ot={type:void 0,texture:void 0},Mt[J]=ot),(ot.type!==N||ot.texture!==Tt)&&(ft!==J&&(i.activeTexture(J),ft=J),i.bindTexture(N,Tt||lt[N]),ot.type=N,ot.texture=Tt)}function P(){const N=Mt[ft];N!==void 0&&N.type!==void 0&&(i.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function F(){try{i.compressedTexImage2D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function K(){try{i.compressedTexImage3D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function X(){try{i.texSubImage2D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function xt(){try{i.texSubImage3D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function mt(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function yt(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function kt(){try{i.texStorage2D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function at(){try{i.texStorage3D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function St(){try{i.texImage2D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Vt(){try{i.texImage3D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Wt(N){ct.equals(N)===!1&&(i.scissor(N.x,N.y,N.z,N.w),ct.copy(N))}function Lt(N){G.equals(N)===!1&&(i.viewport(N.x,N.y,N.z,N.w),G.copy(N))}function jt(N,Tt){let J=l.get(Tt);J===void 0&&(J=new WeakMap,l.set(Tt,J));let ot=J.get(N);ot===void 0&&(ot=i.getUniformBlockIndex(Tt,N.name),J.set(N,ot))}function Kt(N,Tt){const ot=l.get(Tt).get(N);c.get(Tt)!==ot&&(i.uniformBlockBinding(Tt,ot,N.__bindingPointIndex),c.set(Tt,ot))}function de(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},ft=null,Mt={},u={},d=new WeakMap,f=[],m=null,v=!1,g=null,p=null,S=null,w=null,x=null,U=null,T=null,R=new bt(0,0,0),D=0,y=!1,M=null,C=null,z=null,k=null,H=null,ct.set(0,0,i.canvas.width,i.canvas.height),G.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:it,disable:pt,bindFramebuffer:wt,drawBuffers:Ut,useProgram:Gt,setBlending:L,setMaterial:At,setFlipSided:V,setCullFace:tt,setLineWidth:et,setPolygonOffset:It,setScissorTest:_t,activeTexture:b,bindTexture:_,unbindTexture:P,compressedTexImage2D:F,compressedTexImage3D:K,texImage2D:St,texImage3D:Vt,updateUBOMapping:jt,uniformBlockBinding:Kt,texStorage2D:kt,texStorage3D:at,texSubImage2D:X,texSubImage3D:xt,compressedTexSubImage2D:mt,compressedTexSubImage3D:yt,scissor:Wt,viewport:Lt,reset:de}}function yl(i,t,e,n){const s=rg(n);switch(e){case uh:return i*t;case fh:return i*t;case ph:return i*t*2;case $a:return i*t/s.components*s.byteLength;case Za:return i*t/s.components*s.byteLength;case mh:return i*t*2/s.components*s.byteLength;case Ka:return i*t*2/s.components*s.byteLength;case dh:return i*t*3/s.components*s.byteLength;case fn:return i*t*4/s.components*s.byteLength;case Ja:return i*t*4/s.components*s.byteLength;case Sr:case Er:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Tr:case br:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case sa:case oa:return Math.max(i,16)*Math.max(t,8)/4;case ia:case ra:return Math.max(i,8)*Math.max(t,8)/2;case aa:case ca:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case la:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case ha:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case ua:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case da:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case fa:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case pa:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case ma:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case ga:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case _a:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case va:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case xa:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case Ma:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case ya:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case wa:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case Sa:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case Ar:case Ea:case Ta:return Math.ceil(i/4)*Math.ceil(t/4)*16;case gh:case ba:return Math.ceil(i/4)*Math.ceil(t/4)*8;case Aa:case Ra:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function rg(i){switch(i){case Fn:case ch:return{byteLength:1,components:1};case Is:case lh:case zs:return{byteLength:2,components:1};case qa:case Ya:return{byteLength:2,components:4};case wi:case Xa:case wn:return{byteLength:4,components:1};case hh:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function og(i,t,e,n,s,r,o){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new gt,h=new WeakMap;let u;const d=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(b,_){return f?new OffscreenCanvas(b,_):Lr("canvas")}function v(b,_,P){let F=1;const K=_t(b);if((K.width>P||K.height>P)&&(F=P/Math.max(K.width,K.height)),F<1)if(typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&b instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&b instanceof ImageBitmap||typeof VideoFrame<"u"&&b instanceof VideoFrame){const X=Math.floor(F*K.width),xt=Math.floor(F*K.height);u===void 0&&(u=m(X,xt));const mt=_?m(X,xt):u;return mt.width=X,mt.height=xt,mt.getContext("2d").drawImage(b,0,0,X,xt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+K.width+"x"+K.height+") to ("+X+"x"+xt+")."),mt}else return"data"in b&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+K.width+"x"+K.height+")."),b;return b}function g(b){return b.generateMipmaps}function p(b){i.generateMipmap(b)}function S(b){return b.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:b.isWebGL3DRenderTarget?i.TEXTURE_3D:b.isWebGLArrayRenderTarget||b.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function w(b,_,P,F,K=!1){if(b!==null){if(i[b]!==void 0)return i[b];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+b+"'")}let X=_;if(_===i.RED&&(P===i.FLOAT&&(X=i.R32F),P===i.HALF_FLOAT&&(X=i.R16F),P===i.UNSIGNED_BYTE&&(X=i.R8)),_===i.RED_INTEGER&&(P===i.UNSIGNED_BYTE&&(X=i.R8UI),P===i.UNSIGNED_SHORT&&(X=i.R16UI),P===i.UNSIGNED_INT&&(X=i.R32UI),P===i.BYTE&&(X=i.R8I),P===i.SHORT&&(X=i.R16I),P===i.INT&&(X=i.R32I)),_===i.RG&&(P===i.FLOAT&&(X=i.RG32F),P===i.HALF_FLOAT&&(X=i.RG16F),P===i.UNSIGNED_BYTE&&(X=i.RG8)),_===i.RG_INTEGER&&(P===i.UNSIGNED_BYTE&&(X=i.RG8UI),P===i.UNSIGNED_SHORT&&(X=i.RG16UI),P===i.UNSIGNED_INT&&(X=i.RG32UI),P===i.BYTE&&(X=i.RG8I),P===i.SHORT&&(X=i.RG16I),P===i.INT&&(X=i.RG32I)),_===i.RGB_INTEGER&&(P===i.UNSIGNED_BYTE&&(X=i.RGB8UI),P===i.UNSIGNED_SHORT&&(X=i.RGB16UI),P===i.UNSIGNED_INT&&(X=i.RGB32UI),P===i.BYTE&&(X=i.RGB8I),P===i.SHORT&&(X=i.RGB16I),P===i.INT&&(X=i.RGB32I)),_===i.RGBA_INTEGER&&(P===i.UNSIGNED_BYTE&&(X=i.RGBA8UI),P===i.UNSIGNED_SHORT&&(X=i.RGBA16UI),P===i.UNSIGNED_INT&&(X=i.RGBA32UI),P===i.BYTE&&(X=i.RGBA8I),P===i.SHORT&&(X=i.RGBA16I),P===i.INT&&(X=i.RGBA32I)),_===i.RGB&&P===i.UNSIGNED_INT_5_9_9_9_REV&&(X=i.RGB9_E5),_===i.RGBA){const xt=K?Xr:ne.getTransfer(F);P===i.FLOAT&&(X=i.RGBA32F),P===i.HALF_FLOAT&&(X=i.RGBA16F),P===i.UNSIGNED_BYTE&&(X=xt===he?i.SRGB8_ALPHA8:i.RGBA8),P===i.UNSIGNED_SHORT_4_4_4_4&&(X=i.RGBA4),P===i.UNSIGNED_SHORT_5_5_5_1&&(X=i.RGB5_A1)}return(X===i.R16F||X===i.R32F||X===i.RG16F||X===i.RG32F||X===i.RGBA16F||X===i.RGBA32F)&&t.get("EXT_color_buffer_float"),X}function x(b,_){let P;return b?_===null||_===wi||_===ns?P=i.DEPTH24_STENCIL8:_===wn?P=i.DEPTH32F_STENCIL8:_===Is&&(P=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):_===null||_===wi||_===ns?P=i.DEPTH_COMPONENT24:_===wn?P=i.DEPTH_COMPONENT32F:_===Is&&(P=i.DEPTH_COMPONENT16),P}function U(b,_){return g(b)===!0||b.isFramebufferTexture&&b.minFilter!==Qe&&b.minFilter!==yn?Math.log2(Math.max(_.width,_.height))+1:b.mipmaps!==void 0&&b.mipmaps.length>0?b.mipmaps.length:b.isCompressedTexture&&Array.isArray(b.image)?_.mipmaps.length:1}function T(b){const _=b.target;_.removeEventListener("dispose",T),D(_),_.isVideoTexture&&h.delete(_)}function R(b){const _=b.target;_.removeEventListener("dispose",R),M(_)}function D(b){const _=n.get(b);if(_.__webglInit===void 0)return;const P=b.source,F=d.get(P);if(F){const K=F[_.__cacheKey];K.usedTimes--,K.usedTimes===0&&y(b),Object.keys(F).length===0&&d.delete(P)}n.remove(b)}function y(b){const _=n.get(b);i.deleteTexture(_.__webglTexture);const P=b.source,F=d.get(P);delete F[_.__cacheKey],o.memory.textures--}function M(b){const _=n.get(b);if(b.depthTexture&&(b.depthTexture.dispose(),n.remove(b.depthTexture)),b.isWebGLCubeRenderTarget)for(let F=0;F<6;F++){if(Array.isArray(_.__webglFramebuffer[F]))for(let K=0;K<_.__webglFramebuffer[F].length;K++)i.deleteFramebuffer(_.__webglFramebuffer[F][K]);else i.deleteFramebuffer(_.__webglFramebuffer[F]);_.__webglDepthbuffer&&i.deleteRenderbuffer(_.__webglDepthbuffer[F])}else{if(Array.isArray(_.__webglFramebuffer))for(let F=0;F<_.__webglFramebuffer.length;F++)i.deleteFramebuffer(_.__webglFramebuffer[F]);else i.deleteFramebuffer(_.__webglFramebuffer);if(_.__webglDepthbuffer&&i.deleteRenderbuffer(_.__webglDepthbuffer),_.__webglMultisampledFramebuffer&&i.deleteFramebuffer(_.__webglMultisampledFramebuffer),_.__webglColorRenderbuffer)for(let F=0;F<_.__webglColorRenderbuffer.length;F++)_.__webglColorRenderbuffer[F]&&i.deleteRenderbuffer(_.__webglColorRenderbuffer[F]);_.__webglDepthRenderbuffer&&i.deleteRenderbuffer(_.__webglDepthRenderbuffer)}const P=b.textures;for(let F=0,K=P.length;F<K;F++){const X=n.get(P[F]);X.__webglTexture&&(i.deleteTexture(X.__webglTexture),o.memory.textures--),n.remove(P[F])}n.remove(b)}let C=0;function z(){C=0}function k(){const b=C;return b>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+b+" texture units while this GPU supports only "+s.maxTextures),C+=1,b}function H(b){const _=[];return _.push(b.wrapS),_.push(b.wrapT),_.push(b.wrapR||0),_.push(b.magFilter),_.push(b.minFilter),_.push(b.anisotropy),_.push(b.internalFormat),_.push(b.format),_.push(b.type),_.push(b.generateMipmaps),_.push(b.premultiplyAlpha),_.push(b.flipY),_.push(b.unpackAlignment),_.push(b.colorSpace),_.join()}function Z(b,_){const P=n.get(b);if(b.isVideoTexture&&et(b),b.isRenderTargetTexture===!1&&b.version>0&&P.__version!==b.version){const F=b.image;if(F===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(F.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{G(P,b,_);return}}e.bindTexture(i.TEXTURE_2D,P.__webglTexture,i.TEXTURE0+_)}function W(b,_){const P=n.get(b);if(b.version>0&&P.__version!==b.version){G(P,b,_);return}e.bindTexture(i.TEXTURE_2D_ARRAY,P.__webglTexture,i.TEXTURE0+_)}function st(b,_){const P=n.get(b);if(b.version>0&&P.__version!==b.version){G(P,b,_);return}e.bindTexture(i.TEXTURE_3D,P.__webglTexture,i.TEXTURE0+_)}function $(b,_){const P=n.get(b);if(b.version>0&&P.__version!==b.version){Q(P,b,_);return}e.bindTexture(i.TEXTURE_CUBE_MAP,P.__webglTexture,i.TEXTURE0+_)}const ft={[es]:i.REPEAT,[_i]:i.CLAMP_TO_EDGE,[na]:i.MIRRORED_REPEAT},Mt={[Qe]:i.NEAREST,[Xu]:i.NEAREST_MIPMAP_NEAREST,[qs]:i.NEAREST_MIPMAP_LINEAR,[yn]:i.LINEAR,[jr]:i.LINEAR_MIPMAP_NEAREST,[vi]:i.LINEAR_MIPMAP_LINEAR},dt={[Zu]:i.NEVER,[ed]:i.ALWAYS,[Ku]:i.LESS,[_h]:i.LEQUAL,[Ju]:i.EQUAL,[td]:i.GEQUAL,[ju]:i.GREATER,[Qu]:i.NOTEQUAL};function ut(b,_){if(_.type===wn&&t.has("OES_texture_float_linear")===!1&&(_.magFilter===yn||_.magFilter===jr||_.magFilter===qs||_.magFilter===vi||_.minFilter===yn||_.minFilter===jr||_.minFilter===qs||_.minFilter===vi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(b,i.TEXTURE_WRAP_S,ft[_.wrapS]),i.texParameteri(b,i.TEXTURE_WRAP_T,ft[_.wrapT]),(b===i.TEXTURE_3D||b===i.TEXTURE_2D_ARRAY)&&i.texParameteri(b,i.TEXTURE_WRAP_R,ft[_.wrapR]),i.texParameteri(b,i.TEXTURE_MAG_FILTER,Mt[_.magFilter]),i.texParameteri(b,i.TEXTURE_MIN_FILTER,Mt[_.minFilter]),_.compareFunction&&(i.texParameteri(b,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(b,i.TEXTURE_COMPARE_FUNC,dt[_.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(_.magFilter===Qe||_.minFilter!==qs&&_.minFilter!==vi||_.type===wn&&t.has("OES_texture_float_linear")===!1)return;if(_.anisotropy>1||n.get(_).__currentAnisotropy){const P=t.get("EXT_texture_filter_anisotropic");i.texParameterf(b,P.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,s.getMaxAnisotropy())),n.get(_).__currentAnisotropy=_.anisotropy}}}function ct(b,_){let P=!1;b.__webglInit===void 0&&(b.__webglInit=!0,_.addEventListener("dispose",T));const F=_.source;let K=d.get(F);K===void 0&&(K={},d.set(F,K));const X=H(_);if(X!==b.__cacheKey){K[X]===void 0&&(K[X]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,P=!0),K[X].usedTimes++;const xt=K[b.__cacheKey];xt!==void 0&&(K[b.__cacheKey].usedTimes--,xt.usedTimes===0&&y(_)),b.__cacheKey=X,b.__webglTexture=K[X].texture}return P}function G(b,_,P){let F=i.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&(F=i.TEXTURE_2D_ARRAY),_.isData3DTexture&&(F=i.TEXTURE_3D);const K=ct(b,_),X=_.source;e.bindTexture(F,b.__webglTexture,i.TEXTURE0+P);const xt=n.get(X);if(X.version!==xt.__version||K===!0){e.activeTexture(i.TEXTURE0+P);const mt=ne.getPrimaries(ne.workingColorSpace),yt=_.colorSpace===Mn?null:ne.getPrimaries(_.colorSpace),kt=_.colorSpace===Mn||mt===yt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,_.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,_.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,kt);let at=v(_.image,!1,s.maxTextureSize);at=It(_,at);const St=r.convert(_.format,_.colorSpace),Vt=r.convert(_.type);let Wt=w(_.internalFormat,St,Vt,_.colorSpace,_.isVideoTexture);ut(F,_);let Lt;const jt=_.mipmaps,Kt=_.isVideoTexture!==!0,de=xt.__version===void 0||K===!0,N=X.dataReady,Tt=U(_,at);if(_.isDepthTexture)Wt=x(_.format===is,_.type),de&&(Kt?e.texStorage2D(i.TEXTURE_2D,1,Wt,at.width,at.height):e.texImage2D(i.TEXTURE_2D,0,Wt,at.width,at.height,0,St,Vt,null));else if(_.isDataTexture)if(jt.length>0){Kt&&de&&e.texStorage2D(i.TEXTURE_2D,Tt,Wt,jt[0].width,jt[0].height);for(let J=0,ot=jt.length;J<ot;J++)Lt=jt[J],Kt?N&&e.texSubImage2D(i.TEXTURE_2D,J,0,0,Lt.width,Lt.height,St,Vt,Lt.data):e.texImage2D(i.TEXTURE_2D,J,Wt,Lt.width,Lt.height,0,St,Vt,Lt.data);_.generateMipmaps=!1}else Kt?(de&&e.texStorage2D(i.TEXTURE_2D,Tt,Wt,at.width,at.height),N&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,at.width,at.height,St,Vt,at.data)):e.texImage2D(i.TEXTURE_2D,0,Wt,at.width,at.height,0,St,Vt,at.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){Kt&&de&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Tt,Wt,jt[0].width,jt[0].height,at.depth);for(let J=0,ot=jt.length;J<ot;J++)if(Lt=jt[J],_.format!==fn)if(St!==null)if(Kt){if(N)if(_.layerUpdates.size>0){const Pt=yl(Lt.width,Lt.height,_.format,_.type);for(const Rt of _.layerUpdates){const Yt=Lt.data.subarray(Rt*Pt/Lt.data.BYTES_PER_ELEMENT,(Rt+1)*Pt/Lt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,J,0,0,Rt,Lt.width,Lt.height,1,St,Yt)}_.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,J,0,0,0,Lt.width,Lt.height,at.depth,St,Lt.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,J,Wt,Lt.width,Lt.height,at.depth,0,Lt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Kt?N&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,J,0,0,0,Lt.width,Lt.height,at.depth,St,Vt,Lt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,J,Wt,Lt.width,Lt.height,at.depth,0,St,Vt,Lt.data)}else{Kt&&de&&e.texStorage2D(i.TEXTURE_2D,Tt,Wt,jt[0].width,jt[0].height);for(let J=0,ot=jt.length;J<ot;J++)Lt=jt[J],_.format!==fn?St!==null?Kt?N&&e.compressedTexSubImage2D(i.TEXTURE_2D,J,0,0,Lt.width,Lt.height,St,Lt.data):e.compressedTexImage2D(i.TEXTURE_2D,J,Wt,Lt.width,Lt.height,0,Lt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Kt?N&&e.texSubImage2D(i.TEXTURE_2D,J,0,0,Lt.width,Lt.height,St,Vt,Lt.data):e.texImage2D(i.TEXTURE_2D,J,Wt,Lt.width,Lt.height,0,St,Vt,Lt.data)}else if(_.isDataArrayTexture)if(Kt){if(de&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Tt,Wt,at.width,at.height,at.depth),N)if(_.layerUpdates.size>0){const J=yl(at.width,at.height,_.format,_.type);for(const ot of _.layerUpdates){const Pt=at.data.subarray(ot*J/at.data.BYTES_PER_ELEMENT,(ot+1)*J/at.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,ot,at.width,at.height,1,St,Vt,Pt)}_.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,at.width,at.height,at.depth,St,Vt,at.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Wt,at.width,at.height,at.depth,0,St,Vt,at.data);else if(_.isData3DTexture)Kt?(de&&e.texStorage3D(i.TEXTURE_3D,Tt,Wt,at.width,at.height,at.depth),N&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,at.width,at.height,at.depth,St,Vt,at.data)):e.texImage3D(i.TEXTURE_3D,0,Wt,at.width,at.height,at.depth,0,St,Vt,at.data);else if(_.isFramebufferTexture){if(de)if(Kt)e.texStorage2D(i.TEXTURE_2D,Tt,Wt,at.width,at.height);else{let J=at.width,ot=at.height;for(let Pt=0;Pt<Tt;Pt++)e.texImage2D(i.TEXTURE_2D,Pt,Wt,J,ot,0,St,Vt,null),J>>=1,ot>>=1}}else if(jt.length>0){if(Kt&&de){const J=_t(jt[0]);e.texStorage2D(i.TEXTURE_2D,Tt,Wt,J.width,J.height)}for(let J=0,ot=jt.length;J<ot;J++)Lt=jt[J],Kt?N&&e.texSubImage2D(i.TEXTURE_2D,J,0,0,St,Vt,Lt):e.texImage2D(i.TEXTURE_2D,J,Wt,St,Vt,Lt);_.generateMipmaps=!1}else if(Kt){if(de){const J=_t(at);e.texStorage2D(i.TEXTURE_2D,Tt,Wt,J.width,J.height)}N&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,St,Vt,at)}else e.texImage2D(i.TEXTURE_2D,0,Wt,St,Vt,at);g(_)&&p(F),xt.__version=X.version,_.onUpdate&&_.onUpdate(_)}b.__version=_.version}function Q(b,_,P){if(_.image.length!==6)return;const F=ct(b,_),K=_.source;e.bindTexture(i.TEXTURE_CUBE_MAP,b.__webglTexture,i.TEXTURE0+P);const X=n.get(K);if(K.version!==X.__version||F===!0){e.activeTexture(i.TEXTURE0+P);const xt=ne.getPrimaries(ne.workingColorSpace),mt=_.colorSpace===Mn?null:ne.getPrimaries(_.colorSpace),yt=_.colorSpace===Mn||xt===mt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,_.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,_.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,yt);const kt=_.isCompressedTexture||_.image[0].isCompressedTexture,at=_.image[0]&&_.image[0].isDataTexture,St=[];for(let ot=0;ot<6;ot++)!kt&&!at?St[ot]=v(_.image[ot],!0,s.maxCubemapSize):St[ot]=at?_.image[ot].image:_.image[ot],St[ot]=It(_,St[ot]);const Vt=St[0],Wt=r.convert(_.format,_.colorSpace),Lt=r.convert(_.type),jt=w(_.internalFormat,Wt,Lt,_.colorSpace),Kt=_.isVideoTexture!==!0,de=X.__version===void 0||F===!0,N=K.dataReady;let Tt=U(_,Vt);ut(i.TEXTURE_CUBE_MAP,_);let J;if(kt){Kt&&de&&e.texStorage2D(i.TEXTURE_CUBE_MAP,Tt,jt,Vt.width,Vt.height);for(let ot=0;ot<6;ot++){J=St[ot].mipmaps;for(let Pt=0;Pt<J.length;Pt++){const Rt=J[Pt];_.format!==fn?Wt!==null?Kt?N&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ot,Pt,0,0,Rt.width,Rt.height,Wt,Rt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ot,Pt,jt,Rt.width,Rt.height,0,Rt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Kt?N&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ot,Pt,0,0,Rt.width,Rt.height,Wt,Lt,Rt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ot,Pt,jt,Rt.width,Rt.height,0,Wt,Lt,Rt.data)}}}else{if(J=_.mipmaps,Kt&&de){J.length>0&&Tt++;const ot=_t(St[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,Tt,jt,ot.width,ot.height)}for(let ot=0;ot<6;ot++)if(at){Kt?N&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ot,0,0,0,St[ot].width,St[ot].height,Wt,Lt,St[ot].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ot,0,jt,St[ot].width,St[ot].height,0,Wt,Lt,St[ot].data);for(let Pt=0;Pt<J.length;Pt++){const Yt=J[Pt].image[ot].image;Kt?N&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ot,Pt+1,0,0,Yt.width,Yt.height,Wt,Lt,Yt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ot,Pt+1,jt,Yt.width,Yt.height,0,Wt,Lt,Yt.data)}}else{Kt?N&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ot,0,0,0,Wt,Lt,St[ot]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ot,0,jt,Wt,Lt,St[ot]);for(let Pt=0;Pt<J.length;Pt++){const Rt=J[Pt];Kt?N&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ot,Pt+1,0,0,Wt,Lt,Rt.image[ot]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ot,Pt+1,jt,Wt,Lt,Rt.image[ot])}}}g(_)&&p(i.TEXTURE_CUBE_MAP),X.__version=K.version,_.onUpdate&&_.onUpdate(_)}b.__version=_.version}function lt(b,_,P,F,K,X){const xt=r.convert(P.format,P.colorSpace),mt=r.convert(P.type),yt=w(P.internalFormat,xt,mt,P.colorSpace),kt=n.get(_),at=n.get(P);if(at.__renderTarget=_,!kt.__hasExternalTextures){const St=Math.max(1,_.width>>X),Vt=Math.max(1,_.height>>X);K===i.TEXTURE_3D||K===i.TEXTURE_2D_ARRAY?e.texImage3D(K,X,yt,St,Vt,_.depth,0,xt,mt,null):e.texImage2D(K,X,yt,St,Vt,0,xt,mt,null)}e.bindFramebuffer(i.FRAMEBUFFER,b),tt(_)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,F,K,at.__webglTexture,0,V(_)):(K===i.TEXTURE_2D||K>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&K<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,F,K,at.__webglTexture,X),e.bindFramebuffer(i.FRAMEBUFFER,null)}function it(b,_,P){if(i.bindRenderbuffer(i.RENDERBUFFER,b),_.depthBuffer){const F=_.depthTexture,K=F&&F.isDepthTexture?F.type:null,X=x(_.stencilBuffer,K),xt=_.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,mt=V(_);tt(_)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,mt,X,_.width,_.height):P?i.renderbufferStorageMultisample(i.RENDERBUFFER,mt,X,_.width,_.height):i.renderbufferStorage(i.RENDERBUFFER,X,_.width,_.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,xt,i.RENDERBUFFER,b)}else{const F=_.textures;for(let K=0;K<F.length;K++){const X=F[K],xt=r.convert(X.format,X.colorSpace),mt=r.convert(X.type),yt=w(X.internalFormat,xt,mt,X.colorSpace),kt=V(_);P&&tt(_)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,kt,yt,_.width,_.height):tt(_)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,kt,yt,_.width,_.height):i.renderbufferStorage(i.RENDERBUFFER,yt,_.width,_.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function pt(b,_){if(_&&_.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,b),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const F=n.get(_.depthTexture);F.__renderTarget=_,(!F.__webglTexture||_.depthTexture.image.width!==_.width||_.depthTexture.image.height!==_.height)&&(_.depthTexture.image.width=_.width,_.depthTexture.image.height=_.height,_.depthTexture.needsUpdate=!0),Z(_.depthTexture,0);const K=F.__webglTexture,X=V(_);if(_.depthTexture.format===Zi)tt(_)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,K,0,X):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,K,0);else if(_.depthTexture.format===is)tt(_)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,K,0,X):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,K,0);else throw new Error("Unknown depthTexture format")}function wt(b){const _=n.get(b),P=b.isWebGLCubeRenderTarget===!0;if(_.__boundDepthTexture!==b.depthTexture){const F=b.depthTexture;if(_.__depthDisposeCallback&&_.__depthDisposeCallback(),F){const K=()=>{delete _.__boundDepthTexture,delete _.__depthDisposeCallback,F.removeEventListener("dispose",K)};F.addEventListener("dispose",K),_.__depthDisposeCallback=K}_.__boundDepthTexture=F}if(b.depthTexture&&!_.__autoAllocateDepthBuffer){if(P)throw new Error("target.depthTexture not supported in Cube render targets");pt(_.__webglFramebuffer,b)}else if(P){_.__webglDepthbuffer=[];for(let F=0;F<6;F++)if(e.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer[F]),_.__webglDepthbuffer[F]===void 0)_.__webglDepthbuffer[F]=i.createRenderbuffer(),it(_.__webglDepthbuffer[F],b,!1);else{const K=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,X=_.__webglDepthbuffer[F];i.bindRenderbuffer(i.RENDERBUFFER,X),i.framebufferRenderbuffer(i.FRAMEBUFFER,K,i.RENDERBUFFER,X)}}else if(e.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer===void 0)_.__webglDepthbuffer=i.createRenderbuffer(),it(_.__webglDepthbuffer,b,!1);else{const F=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,K=_.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,K),i.framebufferRenderbuffer(i.FRAMEBUFFER,F,i.RENDERBUFFER,K)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function Ut(b,_,P){const F=n.get(b);_!==void 0&&lt(F.__webglFramebuffer,b,b.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),P!==void 0&&wt(b)}function Gt(b){const _=b.texture,P=n.get(b),F=n.get(_);b.addEventListener("dispose",R);const K=b.textures,X=b.isWebGLCubeRenderTarget===!0,xt=K.length>1;if(xt||(F.__webglTexture===void 0&&(F.__webglTexture=i.createTexture()),F.__version=_.version,o.memory.textures++),X){P.__webglFramebuffer=[];for(let mt=0;mt<6;mt++)if(_.mipmaps&&_.mipmaps.length>0){P.__webglFramebuffer[mt]=[];for(let yt=0;yt<_.mipmaps.length;yt++)P.__webglFramebuffer[mt][yt]=i.createFramebuffer()}else P.__webglFramebuffer[mt]=i.createFramebuffer()}else{if(_.mipmaps&&_.mipmaps.length>0){P.__webglFramebuffer=[];for(let mt=0;mt<_.mipmaps.length;mt++)P.__webglFramebuffer[mt]=i.createFramebuffer()}else P.__webglFramebuffer=i.createFramebuffer();if(xt)for(let mt=0,yt=K.length;mt<yt;mt++){const kt=n.get(K[mt]);kt.__webglTexture===void 0&&(kt.__webglTexture=i.createTexture(),o.memory.textures++)}if(b.samples>0&&tt(b)===!1){P.__webglMultisampledFramebuffer=i.createFramebuffer(),P.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,P.__webglMultisampledFramebuffer);for(let mt=0;mt<K.length;mt++){const yt=K[mt];P.__webglColorRenderbuffer[mt]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,P.__webglColorRenderbuffer[mt]);const kt=r.convert(yt.format,yt.colorSpace),at=r.convert(yt.type),St=w(yt.internalFormat,kt,at,yt.colorSpace,b.isXRRenderTarget===!0),Vt=V(b);i.renderbufferStorageMultisample(i.RENDERBUFFER,Vt,St,b.width,b.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+mt,i.RENDERBUFFER,P.__webglColorRenderbuffer[mt])}i.bindRenderbuffer(i.RENDERBUFFER,null),b.depthBuffer&&(P.__webglDepthRenderbuffer=i.createRenderbuffer(),it(P.__webglDepthRenderbuffer,b,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(X){e.bindTexture(i.TEXTURE_CUBE_MAP,F.__webglTexture),ut(i.TEXTURE_CUBE_MAP,_);for(let mt=0;mt<6;mt++)if(_.mipmaps&&_.mipmaps.length>0)for(let yt=0;yt<_.mipmaps.length;yt++)lt(P.__webglFramebuffer[mt][yt],b,_,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+mt,yt);else lt(P.__webglFramebuffer[mt],b,_,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+mt,0);g(_)&&p(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(xt){for(let mt=0,yt=K.length;mt<yt;mt++){const kt=K[mt],at=n.get(kt);e.bindTexture(i.TEXTURE_2D,at.__webglTexture),ut(i.TEXTURE_2D,kt),lt(P.__webglFramebuffer,b,kt,i.COLOR_ATTACHMENT0+mt,i.TEXTURE_2D,0),g(kt)&&p(i.TEXTURE_2D)}e.unbindTexture()}else{let mt=i.TEXTURE_2D;if((b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(mt=b.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(mt,F.__webglTexture),ut(mt,_),_.mipmaps&&_.mipmaps.length>0)for(let yt=0;yt<_.mipmaps.length;yt++)lt(P.__webglFramebuffer[yt],b,_,i.COLOR_ATTACHMENT0,mt,yt);else lt(P.__webglFramebuffer,b,_,i.COLOR_ATTACHMENT0,mt,0);g(_)&&p(mt),e.unbindTexture()}b.depthBuffer&&wt(b)}function nt(b){const _=b.textures;for(let P=0,F=_.length;P<F;P++){const K=_[P];if(g(K)){const X=S(b),xt=n.get(K).__webglTexture;e.bindTexture(X,xt),p(X),e.unbindTexture()}}}const rt=[],L=[];function At(b){if(b.samples>0){if(tt(b)===!1){const _=b.textures,P=b.width,F=b.height;let K=i.COLOR_BUFFER_BIT;const X=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,xt=n.get(b),mt=_.length>1;if(mt)for(let yt=0;yt<_.length;yt++)e.bindFramebuffer(i.FRAMEBUFFER,xt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+yt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,xt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+yt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,xt.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,xt.__webglFramebuffer);for(let yt=0;yt<_.length;yt++){if(b.resolveDepthBuffer&&(b.depthBuffer&&(K|=i.DEPTH_BUFFER_BIT),b.stencilBuffer&&b.resolveStencilBuffer&&(K|=i.STENCIL_BUFFER_BIT)),mt){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,xt.__webglColorRenderbuffer[yt]);const kt=n.get(_[yt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,kt,0)}i.blitFramebuffer(0,0,P,F,0,0,P,F,K,i.NEAREST),c===!0&&(rt.length=0,L.length=0,rt.push(i.COLOR_ATTACHMENT0+yt),b.depthBuffer&&b.resolveDepthBuffer===!1&&(rt.push(X),L.push(X),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,L)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,rt))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),mt)for(let yt=0;yt<_.length;yt++){e.bindFramebuffer(i.FRAMEBUFFER,xt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+yt,i.RENDERBUFFER,xt.__webglColorRenderbuffer[yt]);const kt=n.get(_[yt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,xt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+yt,i.TEXTURE_2D,kt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,xt.__webglMultisampledFramebuffer)}else if(b.depthBuffer&&b.resolveDepthBuffer===!1&&c){const _=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[_])}}}function V(b){return Math.min(s.maxSamples,b.samples)}function tt(b){const _=n.get(b);return b.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function et(b){const _=o.render.frame;h.get(b)!==_&&(h.set(b,_),b.update())}function It(b,_){const P=b.colorSpace,F=b.format,K=b.type;return b.isCompressedTexture===!0||b.isVideoTexture===!0||P!==os&&P!==Mn&&(ne.getTransfer(P)===he?(F!==fn||K!==Fn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",P)),_}function _t(b){return typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement?(l.width=b.naturalWidth||b.width,l.height=b.naturalHeight||b.height):typeof VideoFrame<"u"&&b instanceof VideoFrame?(l.width=b.displayWidth,l.height=b.displayHeight):(l.width=b.width,l.height=b.height),l}this.allocateTextureUnit=k,this.resetTextureUnits=z,this.setTexture2D=Z,this.setTexture2DArray=W,this.setTexture3D=st,this.setTextureCube=$,this.rebindTextures=Ut,this.setupRenderTarget=Gt,this.updateRenderTargetMipmap=nt,this.updateMultisampleRenderTarget=At,this.setupDepthRenderbuffer=wt,this.setupFrameBufferTexture=lt,this.useMultisampledRTT=tt}function ag(i,t){function e(n,s=Mn){let r;const o=ne.getTransfer(s);if(n===Fn)return i.UNSIGNED_BYTE;if(n===qa)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Ya)return i.UNSIGNED_SHORT_5_5_5_1;if(n===hh)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===ch)return i.BYTE;if(n===lh)return i.SHORT;if(n===Is)return i.UNSIGNED_SHORT;if(n===Xa)return i.INT;if(n===wi)return i.UNSIGNED_INT;if(n===wn)return i.FLOAT;if(n===zs)return i.HALF_FLOAT;if(n===uh)return i.ALPHA;if(n===dh)return i.RGB;if(n===fn)return i.RGBA;if(n===fh)return i.LUMINANCE;if(n===ph)return i.LUMINANCE_ALPHA;if(n===Zi)return i.DEPTH_COMPONENT;if(n===is)return i.DEPTH_STENCIL;if(n===$a)return i.RED;if(n===Za)return i.RED_INTEGER;if(n===mh)return i.RG;if(n===Ka)return i.RG_INTEGER;if(n===Ja)return i.RGBA_INTEGER;if(n===Sr||n===Er||n===Tr||n===br)if(o===he)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Sr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Er)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Tr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===br)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Sr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Er)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Tr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===br)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===ia||n===sa||n===ra||n===oa)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===ia)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===sa)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===ra)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===oa)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===aa||n===ca||n===la)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===aa||n===ca)return o===he?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===la)return o===he?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===ha||n===ua||n===da||n===fa||n===pa||n===ma||n===ga||n===_a||n===va||n===xa||n===Ma||n===ya||n===wa||n===Sa)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===ha)return o===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===ua)return o===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===da)return o===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===fa)return o===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===pa)return o===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===ma)return o===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===ga)return o===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===_a)return o===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===va)return o===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===xa)return o===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Ma)return o===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===ya)return o===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===wa)return o===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Sa)return o===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Ar||n===Ea||n===Ta)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===Ar)return o===he?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Ea)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Ta)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===gh||n===ba||n===Aa||n===Ra)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===Ar)return r.COMPRESSED_RED_RGTC1_EXT;if(n===ba)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Aa)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Ra)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===ns?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}class cg extends He{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class Dt extends Ae{constructor(){super(),this.isGroup=!0,this.type="Group"}}const lg={type:"move"};class Ro{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Dt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Dt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new I,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new I),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Dt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new I,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new I),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,o=null;const a=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){o=!0;for(const v of t.hand.values()){const g=e.getJointPose(v,n),p=this._getHandJoint(l,v);g!==null&&(p.matrix.fromArray(g.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=g.radius),p.visible=g!==null}const h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,m=.005;l.inputState.pinching&&d>f+m?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&d<=f-m&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(lg)))}return a!==null&&(a.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new Dt;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const hg=`
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

}`;class dg{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const s=new Ge,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new ni({vertexShader:hg,fragmentShader:ug,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new A(new dn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class fg extends as{constructor(t,e){super();const n=this;let s=null,r=1,o=null,a="local-floor",c=1,l=null,h=null,u=null,d=null,f=null,m=null;const v=new dg,g=e.getContextAttributes();let p=null,S=null;const w=[],x=[],U=new gt;let T=null;const R=new He;R.viewport=new ue;const D=new He;D.viewport=new ue;const y=[R,D],M=new cg;let C=null,z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(G){let Q=w[G];return Q===void 0&&(Q=new Ro,w[G]=Q),Q.getTargetRaySpace()},this.getControllerGrip=function(G){let Q=w[G];return Q===void 0&&(Q=new Ro,w[G]=Q),Q.getGripSpace()},this.getHand=function(G){let Q=w[G];return Q===void 0&&(Q=new Ro,w[G]=Q),Q.getHandSpace()};function k(G){const Q=x.indexOf(G.inputSource);if(Q===-1)return;const lt=w[Q];lt!==void 0&&(lt.update(G.inputSource,G.frame,l||o),lt.dispatchEvent({type:G.type,data:G.inputSource}))}function H(){s.removeEventListener("select",k),s.removeEventListener("selectstart",k),s.removeEventListener("selectend",k),s.removeEventListener("squeeze",k),s.removeEventListener("squeezestart",k),s.removeEventListener("squeezeend",k),s.removeEventListener("end",H),s.removeEventListener("inputsourceschange",Z);for(let G=0;G<w.length;G++){const Q=x[G];Q!==null&&(x[G]=null,w[G].disconnect(Q))}C=null,z=null,v.reset(),t.setRenderTarget(p),f=null,d=null,u=null,s=null,S=null,ct.stop(),n.isPresenting=!1,t.setPixelRatio(T),t.setSize(U.width,U.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(G){r=G,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(G){a=G,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(G){l=G},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u},this.getFrame=function(){return m},this.getSession=function(){return s},this.setSession=async function(G){if(s=G,s!==null){if(p=t.getRenderTarget(),s.addEventListener("select",k),s.addEventListener("selectstart",k),s.addEventListener("selectend",k),s.addEventListener("squeeze",k),s.addEventListener("squeezestart",k),s.addEventListener("squeezeend",k),s.addEventListener("end",H),s.addEventListener("inputsourceschange",Z),g.xrCompatible!==!0&&await e.makeXRCompatible(),T=t.getPixelRatio(),t.getSize(U),s.renderState.layers===void 0){const Q={antialias:g.antialias,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,e,Q),s.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),S=new Si(f.framebufferWidth,f.framebufferHeight,{format:fn,type:Fn,colorSpace:t.outputColorSpace,stencilBuffer:g.stencil})}else{let Q=null,lt=null,it=null;g.depth&&(it=g.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,Q=g.stencil?is:Zi,lt=g.stencil?ns:wi);const pt={colorFormat:e.RGBA8,depthFormat:it,scaleFactor:r};u=new XRWebGLBinding(s,e),d=u.createProjectionLayer(pt),s.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),S=new Si(d.textureWidth,d.textureHeight,{format:fn,type:Fn,depthTexture:new Ch(d.textureWidth,d.textureHeight,lt,void 0,void 0,void 0,void 0,void 0,void 0,Q),stencilBuffer:g.stencil,colorSpace:t.outputColorSpace,samples:g.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await s.requestReferenceSpace(a),ct.setContext(s),ct.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return v.getDepthTexture()};function Z(G){for(let Q=0;Q<G.removed.length;Q++){const lt=G.removed[Q],it=x.indexOf(lt);it>=0&&(x[it]=null,w[it].disconnect(lt))}for(let Q=0;Q<G.added.length;Q++){const lt=G.added[Q];let it=x.indexOf(lt);if(it===-1){for(let wt=0;wt<w.length;wt++)if(wt>=x.length){x.push(lt),it=wt;break}else if(x[wt]===null){x[wt]=lt,it=wt;break}if(it===-1)break}const pt=w[it];pt&&pt.connect(lt)}}const W=new I,st=new I;function $(G,Q,lt){W.setFromMatrixPosition(Q.matrixWorld),st.setFromMatrixPosition(lt.matrixWorld);const it=W.distanceTo(st),pt=Q.projectionMatrix.elements,wt=lt.projectionMatrix.elements,Ut=pt[14]/(pt[10]-1),Gt=pt[14]/(pt[10]+1),nt=(pt[9]+1)/pt[5],rt=(pt[9]-1)/pt[5],L=(pt[8]-1)/pt[0],At=(wt[8]+1)/wt[0],V=Ut*L,tt=Ut*At,et=it/(-L+At),It=et*-L;if(Q.matrixWorld.decompose(G.position,G.quaternion,G.scale),G.translateX(It),G.translateZ(et),G.matrixWorld.compose(G.position,G.quaternion,G.scale),G.matrixWorldInverse.copy(G.matrixWorld).invert(),pt[10]===-1)G.projectionMatrix.copy(Q.projectionMatrix),G.projectionMatrixInverse.copy(Q.projectionMatrixInverse);else{const _t=Ut+et,b=Gt+et,_=V-It,P=tt+(it-It),F=nt*Gt/b*_t,K=rt*Gt/b*_t;G.projectionMatrix.makePerspective(_,P,F,K,_t,b),G.projectionMatrixInverse.copy(G.projectionMatrix).invert()}}function ft(G,Q){Q===null?G.matrixWorld.copy(G.matrix):G.matrixWorld.multiplyMatrices(Q.matrixWorld,G.matrix),G.matrixWorldInverse.copy(G.matrixWorld).invert()}this.updateCamera=function(G){if(s===null)return;let Q=G.near,lt=G.far;v.texture!==null&&(v.depthNear>0&&(Q=v.depthNear),v.depthFar>0&&(lt=v.depthFar)),M.near=D.near=R.near=Q,M.far=D.far=R.far=lt,(C!==M.near||z!==M.far)&&(s.updateRenderState({depthNear:M.near,depthFar:M.far}),C=M.near,z=M.far),R.layers.mask=G.layers.mask|2,D.layers.mask=G.layers.mask|4,M.layers.mask=R.layers.mask|D.layers.mask;const it=G.parent,pt=M.cameras;ft(M,it);for(let wt=0;wt<pt.length;wt++)ft(pt[wt],it);pt.length===2?$(M,R,D):M.projectionMatrix.copy(R.projectionMatrix),Mt(G,M,it)};function Mt(G,Q,lt){lt===null?G.matrix.copy(Q.matrixWorld):(G.matrix.copy(lt.matrixWorld),G.matrix.invert(),G.matrix.multiply(Q.matrixWorld)),G.matrix.decompose(G.position,G.quaternion,G.scale),G.updateMatrixWorld(!0),G.projectionMatrix.copy(Q.projectionMatrix),G.projectionMatrixInverse.copy(Q.projectionMatrixInverse),G.isPerspectiveCamera&&(G.fov=Ca*2*Math.atan(1/G.projectionMatrix.elements[5]),G.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(d===null&&f===null))return c},this.setFoveation=function(G){c=G,d!==null&&(d.fixedFoveation=G),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=G)},this.hasDepthSensing=function(){return v.texture!==null},this.getDepthSensingMesh=function(){return v.getMesh(M)};let dt=null;function ut(G,Q){if(h=Q.getViewerPose(l||o),m=Q,h!==null){const lt=h.views;f!==null&&(t.setRenderTargetFramebuffer(S,f.framebuffer),t.setRenderTarget(S));let it=!1;lt.length!==M.cameras.length&&(M.cameras.length=0,it=!0);for(let wt=0;wt<lt.length;wt++){const Ut=lt[wt];let Gt=null;if(f!==null)Gt=f.getViewport(Ut);else{const rt=u.getViewSubImage(d,Ut);Gt=rt.viewport,wt===0&&(t.setRenderTargetTextures(S,rt.colorTexture,d.ignoreDepthValues?void 0:rt.depthStencilTexture),t.setRenderTarget(S))}let nt=y[wt];nt===void 0&&(nt=new He,nt.layers.enable(wt),nt.viewport=new ue,y[wt]=nt),nt.matrix.fromArray(Ut.transform.matrix),nt.matrix.decompose(nt.position,nt.quaternion,nt.scale),nt.projectionMatrix.fromArray(Ut.projectionMatrix),nt.projectionMatrixInverse.copy(nt.projectionMatrix).invert(),nt.viewport.set(Gt.x,Gt.y,Gt.width,Gt.height),wt===0&&(M.matrix.copy(nt.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),it===!0&&M.cameras.push(nt)}const pt=s.enabledFeatures;if(pt&&pt.includes("depth-sensing")){const wt=u.getDepthInformation(lt[0]);wt&&wt.isValid&&wt.texture&&v.init(t,wt,s.renderState)}}for(let lt=0;lt<w.length;lt++){const it=x[lt],pt=w[lt];it!==null&&pt!==void 0&&pt.update(it,Q,l||o)}dt&&dt(G,Q),Q.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:Q}),m=null}const ct=new Ah;ct.setAnimationLoop(ut),this.setAnimationLoop=function(G){dt=G},this.dispose=function(){}}}const hi=new mn,pg=new le;function mg(i,t){function e(g,p){g.matrixAutoUpdate===!0&&g.updateMatrix(),p.value.copy(g.matrix)}function n(g,p){p.color.getRGB(g.fogColor.value,Eh(i)),p.isFog?(g.fogNear.value=p.near,g.fogFar.value=p.far):p.isFogExp2&&(g.fogDensity.value=p.density)}function s(g,p,S,w,x){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(g,p):p.isMeshToonMaterial?(r(g,p),u(g,p)):p.isMeshPhongMaterial?(r(g,p),h(g,p)):p.isMeshStandardMaterial?(r(g,p),d(g,p),p.isMeshPhysicalMaterial&&f(g,p,x)):p.isMeshMatcapMaterial?(r(g,p),m(g,p)):p.isMeshDepthMaterial?r(g,p):p.isMeshDistanceMaterial?(r(g,p),v(g,p)):p.isMeshNormalMaterial?r(g,p):p.isLineBasicMaterial?(o(g,p),p.isLineDashedMaterial&&a(g,p)):p.isPointsMaterial?c(g,p,S,w):p.isSpriteMaterial?l(g,p):p.isShadowMaterial?(g.color.value.copy(p.color),g.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(g,p){g.opacity.value=p.opacity,p.color&&g.diffuse.value.copy(p.color),p.emissive&&g.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(g.map.value=p.map,e(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.bumpMap&&(g.bumpMap.value=p.bumpMap,e(p.bumpMap,g.bumpMapTransform),g.bumpScale.value=p.bumpScale,p.side===Fe&&(g.bumpScale.value*=-1)),p.normalMap&&(g.normalMap.value=p.normalMap,e(p.normalMap,g.normalMapTransform),g.normalScale.value.copy(p.normalScale),p.side===Fe&&g.normalScale.value.negate()),p.displacementMap&&(g.displacementMap.value=p.displacementMap,e(p.displacementMap,g.displacementMapTransform),g.displacementScale.value=p.displacementScale,g.displacementBias.value=p.displacementBias),p.emissiveMap&&(g.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,g.emissiveMapTransform)),p.specularMap&&(g.specularMap.value=p.specularMap,e(p.specularMap,g.specularMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest);const S=t.get(p),w=S.envMap,x=S.envMapRotation;w&&(g.envMap.value=w,hi.copy(x),hi.x*=-1,hi.y*=-1,hi.z*=-1,w.isCubeTexture&&w.isRenderTargetTexture===!1&&(hi.y*=-1,hi.z*=-1),g.envMapRotation.value.setFromMatrix4(pg.makeRotationFromEuler(hi)),g.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=p.reflectivity,g.ior.value=p.ior,g.refractionRatio.value=p.refractionRatio),p.lightMap&&(g.lightMap.value=p.lightMap,g.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,g.lightMapTransform)),p.aoMap&&(g.aoMap.value=p.aoMap,g.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,g.aoMapTransform))}function o(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,p.map&&(g.map.value=p.map,e(p.map,g.mapTransform))}function a(g,p){g.dashSize.value=p.dashSize,g.totalSize.value=p.dashSize+p.gapSize,g.scale.value=p.scale}function c(g,p,S,w){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.size.value=p.size*S,g.scale.value=w*.5,p.map&&(g.map.value=p.map,e(p.map,g.uvTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function l(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.rotation.value=p.rotation,p.map&&(g.map.value=p.map,e(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function h(g,p){g.specular.value.copy(p.specular),g.shininess.value=Math.max(p.shininess,1e-4)}function u(g,p){p.gradientMap&&(g.gradientMap.value=p.gradientMap)}function d(g,p){g.metalness.value=p.metalness,p.metalnessMap&&(g.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,g.metalnessMapTransform)),g.roughness.value=p.roughness,p.roughnessMap&&(g.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,g.roughnessMapTransform)),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)}function f(g,p,S){g.ior.value=p.ior,p.sheen>0&&(g.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),g.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(g.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,g.sheenColorMapTransform)),p.sheenRoughnessMap&&(g.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,g.sheenRoughnessMapTransform))),p.clearcoat>0&&(g.clearcoat.value=p.clearcoat,g.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(g.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,g.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(g.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Fe&&g.clearcoatNormalScale.value.negate())),p.dispersion>0&&(g.dispersion.value=p.dispersion),p.iridescence>0&&(g.iridescence.value=p.iridescence,g.iridescenceIOR.value=p.iridescenceIOR,g.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(g.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,g.iridescenceMapTransform)),p.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),p.transmission>0&&(g.transmission.value=p.transmission,g.transmissionSamplerMap.value=S.texture,g.transmissionSamplerSize.value.set(S.width,S.height),p.transmissionMap&&(g.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,g.transmissionMapTransform)),g.thickness.value=p.thickness,p.thicknessMap&&(g.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=p.attenuationDistance,g.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(g.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(g.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=p.specularIntensity,g.specularColor.value.copy(p.specularColor),p.specularColorMap&&(g.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,g.specularColorMapTransform)),p.specularIntensityMap&&(g.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,g.specularIntensityMapTransform))}function m(g,p){p.matcap&&(g.matcap.value=p.matcap)}function v(g,p){const S=t.get(p).light;g.referencePosition.value.setFromMatrixPosition(S.matrixWorld),g.nearDistance.value=S.shadow.camera.near,g.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function gg(i,t,e,n){let s={},r={},o=[];const a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(S,w){const x=w.program;n.uniformBlockBinding(S,x)}function l(S,w){let x=s[S.id];x===void 0&&(m(S),x=h(S),s[S.id]=x,S.addEventListener("dispose",g));const U=w.program;n.updateUBOMapping(S,U);const T=t.render.frame;r[S.id]!==T&&(d(S),r[S.id]=T)}function h(S){const w=u();S.__bindingPointIndex=w;const x=i.createBuffer(),U=S.__size,T=S.usage;return i.bindBuffer(i.UNIFORM_BUFFER,x),i.bufferData(i.UNIFORM_BUFFER,U,T),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,w,x),x}function u(){for(let S=0;S<a;S++)if(o.indexOf(S)===-1)return o.push(S),S;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(S){const w=s[S.id],x=S.uniforms,U=S.__cache;i.bindBuffer(i.UNIFORM_BUFFER,w);for(let T=0,R=x.length;T<R;T++){const D=Array.isArray(x[T])?x[T]:[x[T]];for(let y=0,M=D.length;y<M;y++){const C=D[y];if(f(C,T,y,U)===!0){const z=C.__offset,k=Array.isArray(C.value)?C.value:[C.value];let H=0;for(let Z=0;Z<k.length;Z++){const W=k[Z],st=v(W);typeof W=="number"||typeof W=="boolean"?(C.__data[0]=W,i.bufferSubData(i.UNIFORM_BUFFER,z+H,C.__data)):W.isMatrix3?(C.__data[0]=W.elements[0],C.__data[1]=W.elements[1],C.__data[2]=W.elements[2],C.__data[3]=0,C.__data[4]=W.elements[3],C.__data[5]=W.elements[4],C.__data[6]=W.elements[5],C.__data[7]=0,C.__data[8]=W.elements[6],C.__data[9]=W.elements[7],C.__data[10]=W.elements[8],C.__data[11]=0):(W.toArray(C.__data,H),H+=st.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,z,C.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(S,w,x,U){const T=S.value,R=w+"_"+x;if(U[R]===void 0)return typeof T=="number"||typeof T=="boolean"?U[R]=T:U[R]=T.clone(),!0;{const D=U[R];if(typeof T=="number"||typeof T=="boolean"){if(D!==T)return U[R]=T,!0}else if(D.equals(T)===!1)return D.copy(T),!0}return!1}function m(S){const w=S.uniforms;let x=0;const U=16;for(let R=0,D=w.length;R<D;R++){const y=Array.isArray(w[R])?w[R]:[w[R]];for(let M=0,C=y.length;M<C;M++){const z=y[M],k=Array.isArray(z.value)?z.value:[z.value];for(let H=0,Z=k.length;H<Z;H++){const W=k[H],st=v(W),$=x%U,ft=$%st.boundary,Mt=$+ft;x+=ft,Mt!==0&&U-Mt<st.storage&&(x+=U-Mt),z.__data=new Float32Array(st.storage/Float32Array.BYTES_PER_ELEMENT),z.__offset=x,x+=st.storage}}}const T=x%U;return T>0&&(x+=U-T),S.__size=x,S.__cache={},this}function v(S){const w={boundary:0,storage:0};return typeof S=="number"||typeof S=="boolean"?(w.boundary=4,w.storage=4):S.isVector2?(w.boundary=8,w.storage=8):S.isVector3||S.isColor?(w.boundary=16,w.storage=12):S.isVector4?(w.boundary=16,w.storage=16):S.isMatrix3?(w.boundary=48,w.storage=48):S.isMatrix4?(w.boundary=64,w.storage=64):S.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",S),w}function g(S){const w=S.target;w.removeEventListener("dispose",g);const x=o.indexOf(w.__bindingPointIndex);o.splice(x,1),i.deleteBuffer(s[w.id]),delete s[w.id],delete r[w.id]}function p(){for(const S in s)i.deleteBuffer(s[S]);o=[],s={},r={}}return{bind:c,update:l,dispose:p}}class ic{constructor(t={}){const{canvas:e=sd(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:d=!1}=t;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=o;const m=new Uint32Array(4),v=new Int32Array(4);let g=null,p=null;const S=[],w=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Ue,this.toneMapping=ti,this.toneMappingExposure=1;const x=this;let U=!1,T=0,R=0,D=null,y=-1,M=null;const C=new ue,z=new ue;let k=null;const H=new bt(0);let Z=0,W=e.width,st=e.height,$=1,ft=null,Mt=null;const dt=new ue(0,0,W,st),ut=new ue(0,0,W,st);let ct=!1;const G=new ec;let Q=!1,lt=!1;const it=new le,pt=new le,wt=new I,Ut=new ue,Gt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let nt=!1;function rt(){return D===null?$:1}let L=n;function At(E,O){return e.getContext(E,O)}try{const E={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Va}`),e.addEventListener("webglcontextlost",ot,!1),e.addEventListener("webglcontextrestored",Pt,!1),e.addEventListener("webglcontextcreationerror",Rt,!1),L===null){const O="webgl2";if(L=At(O,E),L===null)throw At(O)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}let V,tt,et,It,_t,b,_,P,F,K,X,xt,mt,yt,kt,at,St,Vt,Wt,Lt,jt,Kt,de,N;function Tt(){V=new w0(L),V.init(),Kt=new ag(L,V),tt=new g0(L,V,t,Kt),et=new sg(L,V),tt.reverseDepthBuffer&&d&&et.buffers.depth.setReversed(!0),It=new T0(L),_t=new Vm,b=new og(L,V,et,_t,tt,Kt,It),_=new v0(x),P=new y0(x),F=new Ld(L),de=new p0(L,F),K=new S0(L,F,It,de),X=new A0(L,K,F,It),Wt=new b0(L,tt,b),at=new _0(_t),xt=new Gm(x,_,P,V,tt,de,at),mt=new mg(x,_t),yt=new Xm,kt=new Jm(V),Vt=new f0(x,_,P,et,X,f,c),St=new ng(x,X,tt),N=new gg(L,It,tt,et),Lt=new m0(L,V,It),jt=new E0(L,V,It),It.programs=xt.programs,x.capabilities=tt,x.extensions=V,x.properties=_t,x.renderLists=yt,x.shadowMap=St,x.state=et,x.info=It}Tt();const J=new fg(x,L);this.xr=J,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){const E=V.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=V.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return $},this.setPixelRatio=function(E){E!==void 0&&($=E,this.setSize(W,st,!1))},this.getSize=function(E){return E.set(W,st)},this.setSize=function(E,O,q=!0){if(J.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}W=E,st=O,e.width=Math.floor(E*$),e.height=Math.floor(O*$),q===!0&&(e.style.width=E+"px",e.style.height=O+"px"),this.setViewport(0,0,E,O)},this.getDrawingBufferSize=function(E){return E.set(W*$,st*$).floor()},this.setDrawingBufferSize=function(E,O,q){W=E,st=O,$=q,e.width=Math.floor(E*q),e.height=Math.floor(O*q),this.setViewport(0,0,E,O)},this.getCurrentViewport=function(E){return E.copy(C)},this.getViewport=function(E){return E.copy(dt)},this.setViewport=function(E,O,q,Y){E.isVector4?dt.set(E.x,E.y,E.z,E.w):dt.set(E,O,q,Y),et.viewport(C.copy(dt).multiplyScalar($).round())},this.getScissor=function(E){return E.copy(ut)},this.setScissor=function(E,O,q,Y){E.isVector4?ut.set(E.x,E.y,E.z,E.w):ut.set(E,O,q,Y),et.scissor(z.copy(ut).multiplyScalar($).round())},this.getScissorTest=function(){return ct},this.setScissorTest=function(E){et.setScissorTest(ct=E)},this.setOpaqueSort=function(E){ft=E},this.setTransparentSort=function(E){Mt=E},this.getClearColor=function(E){return E.copy(Vt.getClearColor())},this.setClearColor=function(){Vt.setClearColor.apply(Vt,arguments)},this.getClearAlpha=function(){return Vt.getClearAlpha()},this.setClearAlpha=function(){Vt.setClearAlpha.apply(Vt,arguments)},this.clear=function(E=!0,O=!0,q=!0){let Y=0;if(E){let B=!1;if(D!==null){const vt=D.texture.format;B=vt===Ja||vt===Ka||vt===Za}if(B){const vt=D.texture.type,Ct=vt===Fn||vt===wi||vt===Is||vt===ns||vt===qa||vt===Ya,Ft=Vt.getClearColor(),Ot=Vt.getClearAlpha(),Xt=Ft.r,$t=Ft.g,zt=Ft.b;Ct?(m[0]=Xt,m[1]=$t,m[2]=zt,m[3]=Ot,L.clearBufferuiv(L.COLOR,0,m)):(v[0]=Xt,v[1]=$t,v[2]=zt,v[3]=Ot,L.clearBufferiv(L.COLOR,0,v))}else Y|=L.COLOR_BUFFER_BIT}O&&(Y|=L.DEPTH_BUFFER_BIT),q&&(Y|=L.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),L.clear(Y)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",ot,!1),e.removeEventListener("webglcontextrestored",Pt,!1),e.removeEventListener("webglcontextcreationerror",Rt,!1),yt.dispose(),kt.dispose(),_t.dispose(),_.dispose(),P.dispose(),X.dispose(),de.dispose(),N.dispose(),xt.dispose(),J.dispose(),J.removeEventListener("sessionstart",_c),J.removeEventListener("sessionend",vc),si.stop()};function ot(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),U=!0}function Pt(){console.log("THREE.WebGLRenderer: Context Restored."),U=!1;const E=It.autoReset,O=St.enabled,q=St.autoUpdate,Y=St.needsUpdate,B=St.type;Tt(),It.autoReset=E,St.enabled=O,St.autoUpdate=q,St.needsUpdate=Y,St.type=B}function Rt(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function Yt(E){const O=E.target;O.removeEventListener("dispose",Yt),xe(O)}function xe(E){Oe(E),_t.remove(E)}function Oe(E){const O=_t.get(E).programs;O!==void 0&&(O.forEach(function(q){xt.releaseProgram(q)}),E.isShaderMaterial&&xt.releaseShaderCache(E))}this.renderBufferDirect=function(E,O,q,Y,B,vt){O===null&&(O=Gt);const Ct=B.isMesh&&B.matrixWorld.determinant()<0,Ft=pu(E,O,q,Y,B);et.setMaterial(Y,Ct);let Ot=q.index,Xt=1;if(Y.wireframe===!0){if(Ot=K.getWireframeAttribute(q),Ot===void 0)return;Xt=2}const $t=q.drawRange,zt=q.attributes.position;let ie=$t.start*Xt,fe=($t.start+$t.count)*Xt;vt!==null&&(ie=Math.max(ie,vt.start*Xt),fe=Math.min(fe,(vt.start+vt.count)*Xt)),Ot!==null?(ie=Math.max(ie,0),fe=Math.min(fe,Ot.count)):zt!=null&&(ie=Math.max(ie,0),fe=Math.min(fe,zt.count));const me=fe-ie;if(me<0||me===1/0)return;de.setup(B,Y,Ft,q,Ot);let qe,re=Lt;if(Ot!==null&&(qe=F.get(Ot),re=jt,re.setIndex(qe)),B.isMesh)Y.wireframe===!0?(et.setLineWidth(Y.wireframeLinewidth*rt()),re.setMode(L.LINES)):re.setMode(L.TRIANGLES);else if(B.isLine){let Bt=Y.linewidth;Bt===void 0&&(Bt=1),et.setLineWidth(Bt*rt()),B.isLineSegments?re.setMode(L.LINES):B.isLineLoop?re.setMode(L.LINE_LOOP):re.setMode(L.LINE_STRIP)}else B.isPoints?re.setMode(L.POINTS):B.isSprite&&re.setMode(L.TRIANGLES);if(B.isBatchedMesh)if(B._multiDrawInstances!==null)re.renderMultiDrawInstances(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount,B._multiDrawInstances);else if(V.get("WEBGL_multi_draw"))re.renderMultiDraw(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount);else{const Bt=B._multiDrawStarts,bn=B._multiDrawCounts,oe=B._multiDrawCount,an=Ot?F.get(Ot).bytesPerElement:1,Ci=_t.get(Y).currentProgram.getUniforms();for(let Ze=0;Ze<oe;Ze++)Ci.setValue(L,"_gl_DrawID",Ze),re.render(Bt[Ze]/an,bn[Ze])}else if(B.isInstancedMesh)re.renderInstances(ie,me,B.count);else if(q.isInstancedBufferGeometry){const Bt=q._maxInstanceCount!==void 0?q._maxInstanceCount:1/0,bn=Math.min(q.instanceCount,Bt);re.renderInstances(ie,me,bn)}else re.render(ie,me)};function ae(E,O,q){E.transparent===!0&&E.side===Te&&E.forceSinglePass===!1?(E.side=Fe,E.needsUpdate=!0,Xs(E,O,q),E.side=ei,E.needsUpdate=!0,Xs(E,O,q),E.side=Te):Xs(E,O,q)}this.compile=function(E,O,q=null){q===null&&(q=E),p=kt.get(q),p.init(O),w.push(p),q.traverseVisible(function(B){B.isLight&&B.layers.test(O.layers)&&(p.pushLight(B),B.castShadow&&p.pushShadow(B))}),E!==q&&E.traverseVisible(function(B){B.isLight&&B.layers.test(O.layers)&&(p.pushLight(B),B.castShadow&&p.pushShadow(B))}),p.setupLights();const Y=new Set;return E.traverse(function(B){if(!(B.isMesh||B.isPoints||B.isLine||B.isSprite))return;const vt=B.material;if(vt)if(Array.isArray(vt))for(let Ct=0;Ct<vt.length;Ct++){const Ft=vt[Ct];ae(Ft,q,B),Y.add(Ft)}else ae(vt,q,B),Y.add(vt)}),w.pop(),p=null,Y},this.compileAsync=function(E,O,q=null){const Y=this.compile(E,O,q);return new Promise(B=>{function vt(){if(Y.forEach(function(Ct){_t.get(Ct).currentProgram.isReady()&&Y.delete(Ct)}),Y.size===0){B(E);return}setTimeout(vt,10)}V.get("KHR_parallel_shader_compile")!==null?vt():setTimeout(vt,10)})};let on=null;function Tn(E){on&&on(E)}function _c(){si.stop()}function vc(){si.start()}const si=new Ah;si.setAnimationLoop(Tn),typeof self<"u"&&si.setContext(self),this.setAnimationLoop=function(E){on=E,J.setAnimationLoop(E),E===null?si.stop():si.start()},J.addEventListener("sessionstart",_c),J.addEventListener("sessionend",vc),this.render=function(E,O){if(O!==void 0&&O.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(U===!0)return;if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),O.parent===null&&O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),J.enabled===!0&&J.isPresenting===!0&&(J.cameraAutoUpdate===!0&&J.updateCamera(O),O=J.getCamera()),E.isScene===!0&&E.onBeforeRender(x,E,O,D),p=kt.get(E,w.length),p.init(O),w.push(p),pt.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),G.setFromProjectionMatrix(pt),lt=this.localClippingEnabled,Q=at.init(this.clippingPlanes,lt),g=yt.get(E,S.length),g.init(),S.push(g),J.enabled===!0&&J.isPresenting===!0){const vt=x.xr.getDepthSensingMesh();vt!==null&&Jr(vt,O,-1/0,x.sortObjects)}Jr(E,O,0,x.sortObjects),g.finish(),x.sortObjects===!0&&g.sort(ft,Mt),nt=J.enabled===!1||J.isPresenting===!1||J.hasDepthSensing()===!1,nt&&Vt.addToRenderList(g,E),this.info.render.frame++,Q===!0&&at.beginShadows();const q=p.state.shadowsArray;St.render(q,E,O),Q===!0&&at.endShadows(),this.info.autoReset===!0&&this.info.reset();const Y=g.opaque,B=g.transmissive;if(p.setupLights(),O.isArrayCamera){const vt=O.cameras;if(B.length>0)for(let Ct=0,Ft=vt.length;Ct<Ft;Ct++){const Ot=vt[Ct];Mc(Y,B,E,Ot)}nt&&Vt.render(E);for(let Ct=0,Ft=vt.length;Ct<Ft;Ct++){const Ot=vt[Ct];xc(g,E,Ot,Ot.viewport)}}else B.length>0&&Mc(Y,B,E,O),nt&&Vt.render(E),xc(g,E,O);D!==null&&(b.updateMultisampleRenderTarget(D),b.updateRenderTargetMipmap(D)),E.isScene===!0&&E.onAfterRender(x,E,O),de.resetDefaultState(),y=-1,M=null,w.pop(),w.length>0?(p=w[w.length-1],Q===!0&&at.setGlobalState(x.clippingPlanes,p.state.camera)):p=null,S.pop(),S.length>0?g=S[S.length-1]:g=null};function Jr(E,O,q,Y){if(E.visible===!1)return;if(E.layers.test(O.layers)){if(E.isGroup)q=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(O);else if(E.isLight)p.pushLight(E),E.castShadow&&p.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||G.intersectsSprite(E)){Y&&Ut.setFromMatrixPosition(E.matrixWorld).applyMatrix4(pt);const Ct=X.update(E),Ft=E.material;Ft.visible&&g.push(E,Ct,Ft,q,Ut.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||G.intersectsObject(E))){const Ct=X.update(E),Ft=E.material;if(Y&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),Ut.copy(E.boundingSphere.center)):(Ct.boundingSphere===null&&Ct.computeBoundingSphere(),Ut.copy(Ct.boundingSphere.center)),Ut.applyMatrix4(E.matrixWorld).applyMatrix4(pt)),Array.isArray(Ft)){const Ot=Ct.groups;for(let Xt=0,$t=Ot.length;Xt<$t;Xt++){const zt=Ot[Xt],ie=Ft[zt.materialIndex];ie&&ie.visible&&g.push(E,Ct,ie,q,Ut.z,zt)}}else Ft.visible&&g.push(E,Ct,Ft,q,Ut.z,null)}}const vt=E.children;for(let Ct=0,Ft=vt.length;Ct<Ft;Ct++)Jr(vt[Ct],O,q,Y)}function xc(E,O,q,Y){const B=E.opaque,vt=E.transmissive,Ct=E.transparent;p.setupLightsView(q),Q===!0&&at.setGlobalState(x.clippingPlanes,q),Y&&et.viewport(C.copy(Y)),B.length>0&&Ws(B,O,q),vt.length>0&&Ws(vt,O,q),Ct.length>0&&Ws(Ct,O,q),et.buffers.depth.setTest(!0),et.buffers.depth.setMask(!0),et.buffers.color.setMask(!0),et.setPolygonOffset(!1)}function Mc(E,O,q,Y){if((q.isScene===!0?q.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[Y.id]===void 0&&(p.state.transmissionRenderTarget[Y.id]=new Si(1,1,{generateMipmaps:!0,type:V.has("EXT_color_buffer_half_float")||V.has("EXT_color_buffer_float")?zs:Fn,minFilter:vi,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ne.workingColorSpace}));const vt=p.state.transmissionRenderTarget[Y.id],Ct=Y.viewport||C;vt.setSize(Ct.z,Ct.w);const Ft=x.getRenderTarget();x.setRenderTarget(vt),x.getClearColor(H),Z=x.getClearAlpha(),Z<1&&x.setClearColor(16777215,.5),x.clear(),nt&&Vt.render(q);const Ot=x.toneMapping;x.toneMapping=ti;const Xt=Y.viewport;if(Y.viewport!==void 0&&(Y.viewport=void 0),p.setupLightsView(Y),Q===!0&&at.setGlobalState(x.clippingPlanes,Y),Ws(E,q,Y),b.updateMultisampleRenderTarget(vt),b.updateRenderTargetMipmap(vt),V.has("WEBGL_multisampled_render_to_texture")===!1){let $t=!1;for(let zt=0,ie=O.length;zt<ie;zt++){const fe=O[zt],me=fe.object,qe=fe.geometry,re=fe.material,Bt=fe.group;if(re.side===Te&&me.layers.test(Y.layers)){const bn=re.side;re.side=Fe,re.needsUpdate=!0,yc(me,q,Y,qe,re,Bt),re.side=bn,re.needsUpdate=!0,$t=!0}}$t===!0&&(b.updateMultisampleRenderTarget(vt),b.updateRenderTargetMipmap(vt))}x.setRenderTarget(Ft),x.setClearColor(H,Z),Xt!==void 0&&(Y.viewport=Xt),x.toneMapping=Ot}function Ws(E,O,q){const Y=O.isScene===!0?O.overrideMaterial:null;for(let B=0,vt=E.length;B<vt;B++){const Ct=E[B],Ft=Ct.object,Ot=Ct.geometry,Xt=Y===null?Ct.material:Y,$t=Ct.group;Ft.layers.test(q.layers)&&yc(Ft,O,q,Ot,Xt,$t)}}function yc(E,O,q,Y,B,vt){E.onBeforeRender(x,O,q,Y,B,vt),E.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),B.onBeforeRender(x,O,q,Y,E,vt),B.transparent===!0&&B.side===Te&&B.forceSinglePass===!1?(B.side=Fe,B.needsUpdate=!0,x.renderBufferDirect(q,O,Y,B,E,vt),B.side=ei,B.needsUpdate=!0,x.renderBufferDirect(q,O,Y,B,E,vt),B.side=Te):x.renderBufferDirect(q,O,Y,B,E,vt),E.onAfterRender(x,O,q,Y,B,vt)}function Xs(E,O,q){O.isScene!==!0&&(O=Gt);const Y=_t.get(E),B=p.state.lights,vt=p.state.shadowsArray,Ct=B.state.version,Ft=xt.getParameters(E,B.state,vt,O,q),Ot=xt.getProgramCacheKey(Ft);let Xt=Y.programs;Y.environment=E.isMeshStandardMaterial?O.environment:null,Y.fog=O.fog,Y.envMap=(E.isMeshStandardMaterial?P:_).get(E.envMap||Y.environment),Y.envMapRotation=Y.environment!==null&&E.envMap===null?O.environmentRotation:E.envMapRotation,Xt===void 0&&(E.addEventListener("dispose",Yt),Xt=new Map,Y.programs=Xt);let $t=Xt.get(Ot);if($t!==void 0){if(Y.currentProgram===$t&&Y.lightsStateVersion===Ct)return Sc(E,Ft),$t}else Ft.uniforms=xt.getUniforms(E),E.onBeforeCompile(Ft,x),$t=xt.acquireProgram(Ft,Ot),Xt.set(Ot,$t),Y.uniforms=Ft.uniforms;const zt=Y.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(zt.clippingPlanes=at.uniform),Sc(E,Ft),Y.needsLights=gu(E),Y.lightsStateVersion=Ct,Y.needsLights&&(zt.ambientLightColor.value=B.state.ambient,zt.lightProbe.value=B.state.probe,zt.directionalLights.value=B.state.directional,zt.directionalLightShadows.value=B.state.directionalShadow,zt.spotLights.value=B.state.spot,zt.spotLightShadows.value=B.state.spotShadow,zt.rectAreaLights.value=B.state.rectArea,zt.ltc_1.value=B.state.rectAreaLTC1,zt.ltc_2.value=B.state.rectAreaLTC2,zt.pointLights.value=B.state.point,zt.pointLightShadows.value=B.state.pointShadow,zt.hemisphereLights.value=B.state.hemi,zt.directionalShadowMap.value=B.state.directionalShadowMap,zt.directionalShadowMatrix.value=B.state.directionalShadowMatrix,zt.spotShadowMap.value=B.state.spotShadowMap,zt.spotLightMatrix.value=B.state.spotLightMatrix,zt.spotLightMap.value=B.state.spotLightMap,zt.pointShadowMap.value=B.state.pointShadowMap,zt.pointShadowMatrix.value=B.state.pointShadowMatrix),Y.currentProgram=$t,Y.uniformsList=null,$t}function wc(E){if(E.uniformsList===null){const O=E.currentProgram.getUniforms();E.uniformsList=Rr.seqWithValue(O.seq,E.uniforms)}return E.uniformsList}function Sc(E,O){const q=_t.get(E);q.outputColorSpace=O.outputColorSpace,q.batching=O.batching,q.batchingColor=O.batchingColor,q.instancing=O.instancing,q.instancingColor=O.instancingColor,q.instancingMorph=O.instancingMorph,q.skinning=O.skinning,q.morphTargets=O.morphTargets,q.morphNormals=O.morphNormals,q.morphColors=O.morphColors,q.morphTargetsCount=O.morphTargetsCount,q.numClippingPlanes=O.numClippingPlanes,q.numIntersection=O.numClipIntersection,q.vertexAlphas=O.vertexAlphas,q.vertexTangents=O.vertexTangents,q.toneMapping=O.toneMapping}function pu(E,O,q,Y,B){O.isScene!==!0&&(O=Gt),b.resetTextureUnits();const vt=O.fog,Ct=Y.isMeshStandardMaterial?O.environment:null,Ft=D===null?x.outputColorSpace:D.isXRRenderTarget===!0?D.texture.colorSpace:os,Ot=(Y.isMeshStandardMaterial?P:_).get(Y.envMap||Ct),Xt=Y.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,$t=!!q.attributes.tangent&&(!!Y.normalMap||Y.anisotropy>0),zt=!!q.morphAttributes.position,ie=!!q.morphAttributes.normal,fe=!!q.morphAttributes.color;let me=ti;Y.toneMapped&&(D===null||D.isXRRenderTarget===!0)&&(me=x.toneMapping);const qe=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,re=qe!==void 0?qe.length:0,Bt=_t.get(Y),bn=p.state.lights;if(Q===!0&&(lt===!0||E!==M)){const nn=E===M&&Y.id===y;at.setState(Y,E,nn)}let oe=!1;Y.version===Bt.__version?(Bt.needsLights&&Bt.lightsStateVersion!==bn.state.version||Bt.outputColorSpace!==Ft||B.isBatchedMesh&&Bt.batching===!1||!B.isBatchedMesh&&Bt.batching===!0||B.isBatchedMesh&&Bt.batchingColor===!0&&B.colorTexture===null||B.isBatchedMesh&&Bt.batchingColor===!1&&B.colorTexture!==null||B.isInstancedMesh&&Bt.instancing===!1||!B.isInstancedMesh&&Bt.instancing===!0||B.isSkinnedMesh&&Bt.skinning===!1||!B.isSkinnedMesh&&Bt.skinning===!0||B.isInstancedMesh&&Bt.instancingColor===!0&&B.instanceColor===null||B.isInstancedMesh&&Bt.instancingColor===!1&&B.instanceColor!==null||B.isInstancedMesh&&Bt.instancingMorph===!0&&B.morphTexture===null||B.isInstancedMesh&&Bt.instancingMorph===!1&&B.morphTexture!==null||Bt.envMap!==Ot||Y.fog===!0&&Bt.fog!==vt||Bt.numClippingPlanes!==void 0&&(Bt.numClippingPlanes!==at.numPlanes||Bt.numIntersection!==at.numIntersection)||Bt.vertexAlphas!==Xt||Bt.vertexTangents!==$t||Bt.morphTargets!==zt||Bt.morphNormals!==ie||Bt.morphColors!==fe||Bt.toneMapping!==me||Bt.morphTargetsCount!==re)&&(oe=!0):(oe=!0,Bt.__version=Y.version);let an=Bt.currentProgram;oe===!0&&(an=Xs(Y,O,B));let Ci=!1,Ze=!1,us=!1;const ge=an.getUniforms(),_n=Bt.uniforms;if(et.useProgram(an.program)&&(Ci=!0,Ze=!0,us=!0),Y.id!==y&&(y=Y.id,Ze=!0),Ci||M!==E){et.buffers.depth.getReversed()?(it.copy(E.projectionMatrix),od(it),ad(it),ge.setValue(L,"projectionMatrix",it)):ge.setValue(L,"projectionMatrix",E.projectionMatrix),ge.setValue(L,"viewMatrix",E.matrixWorldInverse);const Bn=ge.map.cameraPosition;Bn!==void 0&&Bn.setValue(L,wt.setFromMatrixPosition(E.matrixWorld)),tt.logarithmicDepthBuffer&&ge.setValue(L,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(Y.isMeshPhongMaterial||Y.isMeshToonMaterial||Y.isMeshLambertMaterial||Y.isMeshBasicMaterial||Y.isMeshStandardMaterial||Y.isShaderMaterial)&&ge.setValue(L,"isOrthographic",E.isOrthographicCamera===!0),M!==E&&(M=E,Ze=!0,us=!0)}if(B.isSkinnedMesh){ge.setOptional(L,B,"bindMatrix"),ge.setOptional(L,B,"bindMatrixInverse");const nn=B.skeleton;nn&&(nn.boneTexture===null&&nn.computeBoneTexture(),ge.setValue(L,"boneTexture",nn.boneTexture,b))}B.isBatchedMesh&&(ge.setOptional(L,B,"batchingTexture"),ge.setValue(L,"batchingTexture",B._matricesTexture,b),ge.setOptional(L,B,"batchingIdTexture"),ge.setValue(L,"batchingIdTexture",B._indirectTexture,b),ge.setOptional(L,B,"batchingColorTexture"),B._colorsTexture!==null&&ge.setValue(L,"batchingColorTexture",B._colorsTexture,b));const ds=q.morphAttributes;if((ds.position!==void 0||ds.normal!==void 0||ds.color!==void 0)&&Wt.update(B,q,an),(Ze||Bt.receiveShadow!==B.receiveShadow)&&(Bt.receiveShadow=B.receiveShadow,ge.setValue(L,"receiveShadow",B.receiveShadow)),Y.isMeshGouraudMaterial&&Y.envMap!==null&&(_n.envMap.value=Ot,_n.flipEnvMap.value=Ot.isCubeTexture&&Ot.isRenderTargetTexture===!1?-1:1),Y.isMeshStandardMaterial&&Y.envMap===null&&O.environment!==null&&(_n.envMapIntensity.value=O.environmentIntensity),Ze&&(ge.setValue(L,"toneMappingExposure",x.toneMappingExposure),Bt.needsLights&&mu(_n,us),vt&&Y.fog===!0&&mt.refreshFogUniforms(_n,vt),mt.refreshMaterialUniforms(_n,Y,$,st,p.state.transmissionRenderTarget[E.id]),Rr.upload(L,wc(Bt),_n,b)),Y.isShaderMaterial&&Y.uniformsNeedUpdate===!0&&(Rr.upload(L,wc(Bt),_n,b),Y.uniformsNeedUpdate=!1),Y.isSpriteMaterial&&ge.setValue(L,"center",B.center),ge.setValue(L,"modelViewMatrix",B.modelViewMatrix),ge.setValue(L,"normalMatrix",B.normalMatrix),ge.setValue(L,"modelMatrix",B.matrixWorld),Y.isShaderMaterial||Y.isRawShaderMaterial){const nn=Y.uniformsGroups;for(let Bn=0,kn=nn.length;Bn<kn;Bn++){const Ec=nn[Bn];N.update(Ec,an),N.bind(Ec,an)}}return an}function mu(E,O){E.ambientLightColor.needsUpdate=O,E.lightProbe.needsUpdate=O,E.directionalLights.needsUpdate=O,E.directionalLightShadows.needsUpdate=O,E.pointLights.needsUpdate=O,E.pointLightShadows.needsUpdate=O,E.spotLights.needsUpdate=O,E.spotLightShadows.needsUpdate=O,E.rectAreaLights.needsUpdate=O,E.hemisphereLights.needsUpdate=O}function gu(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return T},this.getActiveMipmapLevel=function(){return R},this.getRenderTarget=function(){return D},this.setRenderTargetTextures=function(E,O,q){_t.get(E.texture).__webglTexture=O,_t.get(E.depthTexture).__webglTexture=q;const Y=_t.get(E);Y.__hasExternalTextures=!0,Y.__autoAllocateDepthBuffer=q===void 0,Y.__autoAllocateDepthBuffer||V.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),Y.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(E,O){const q=_t.get(E);q.__webglFramebuffer=O,q.__useDefaultFramebuffer=O===void 0},this.setRenderTarget=function(E,O=0,q=0){D=E,T=O,R=q;let Y=!0,B=null,vt=!1,Ct=!1;if(E){const Ot=_t.get(E);if(Ot.__useDefaultFramebuffer!==void 0)et.bindFramebuffer(L.FRAMEBUFFER,null),Y=!1;else if(Ot.__webglFramebuffer===void 0)b.setupRenderTarget(E);else if(Ot.__hasExternalTextures)b.rebindTextures(E,_t.get(E.texture).__webglTexture,_t.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){const zt=E.depthTexture;if(Ot.__boundDepthTexture!==zt){if(zt!==null&&_t.has(zt)&&(E.width!==zt.image.width||E.height!==zt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");b.setupDepthRenderbuffer(E)}}const Xt=E.texture;(Xt.isData3DTexture||Xt.isDataArrayTexture||Xt.isCompressedArrayTexture)&&(Ct=!0);const $t=_t.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray($t[O])?B=$t[O][q]:B=$t[O],vt=!0):E.samples>0&&b.useMultisampledRTT(E)===!1?B=_t.get(E).__webglMultisampledFramebuffer:Array.isArray($t)?B=$t[q]:B=$t,C.copy(E.viewport),z.copy(E.scissor),k=E.scissorTest}else C.copy(dt).multiplyScalar($).floor(),z.copy(ut).multiplyScalar($).floor(),k=ct;if(et.bindFramebuffer(L.FRAMEBUFFER,B)&&Y&&et.drawBuffers(E,B),et.viewport(C),et.scissor(z),et.setScissorTest(k),vt){const Ot=_t.get(E.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+O,Ot.__webglTexture,q)}else if(Ct){const Ot=_t.get(E.texture),Xt=O||0;L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,Ot.__webglTexture,q||0,Xt)}y=-1},this.readRenderTargetPixels=function(E,O,q,Y,B,vt,Ct){if(!(E&&E.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ft=_t.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Ct!==void 0&&(Ft=Ft[Ct]),Ft){et.bindFramebuffer(L.FRAMEBUFFER,Ft);try{const Ot=E.texture,Xt=Ot.format,$t=Ot.type;if(!tt.textureFormatReadable(Xt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!tt.textureTypeReadable($t)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}O>=0&&O<=E.width-Y&&q>=0&&q<=E.height-B&&L.readPixels(O,q,Y,B,Kt.convert(Xt),Kt.convert($t),vt)}finally{const Ot=D!==null?_t.get(D).__webglFramebuffer:null;et.bindFramebuffer(L.FRAMEBUFFER,Ot)}}},this.readRenderTargetPixelsAsync=async function(E,O,q,Y,B,vt,Ct){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ft=_t.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Ct!==void 0&&(Ft=Ft[Ct]),Ft){const Ot=E.texture,Xt=Ot.format,$t=Ot.type;if(!tt.textureFormatReadable(Xt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!tt.textureTypeReadable($t))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(O>=0&&O<=E.width-Y&&q>=0&&q<=E.height-B){et.bindFramebuffer(L.FRAMEBUFFER,Ft);const zt=L.createBuffer();L.bindBuffer(L.PIXEL_PACK_BUFFER,zt),L.bufferData(L.PIXEL_PACK_BUFFER,vt.byteLength,L.STREAM_READ),L.readPixels(O,q,Y,B,Kt.convert(Xt),Kt.convert($t),0);const ie=D!==null?_t.get(D).__webglFramebuffer:null;et.bindFramebuffer(L.FRAMEBUFFER,ie);const fe=L.fenceSync(L.SYNC_GPU_COMMANDS_COMPLETE,0);return L.flush(),await rd(L,fe,4),L.bindBuffer(L.PIXEL_PACK_BUFFER,zt),L.getBufferSubData(L.PIXEL_PACK_BUFFER,0,vt),L.deleteBuffer(zt),L.deleteSync(fe),vt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(E,O=null,q=0){E.isTexture!==!0&&(Ts("WebGLRenderer: copyFramebufferToTexture function signature has changed."),O=arguments[0]||null,E=arguments[1]);const Y=Math.pow(2,-q),B=Math.floor(E.image.width*Y),vt=Math.floor(E.image.height*Y),Ct=O!==null?O.x:0,Ft=O!==null?O.y:0;b.setTexture2D(E,0),L.copyTexSubImage2D(L.TEXTURE_2D,q,0,0,Ct,Ft,B,vt),et.unbindTexture()},this.copyTextureToTexture=function(E,O,q=null,Y=null,B=0){E.isTexture!==!0&&(Ts("WebGLRenderer: copyTextureToTexture function signature has changed."),Y=arguments[0]||null,E=arguments[1],O=arguments[2],B=arguments[3]||0,q=null);let vt,Ct,Ft,Ot,Xt,$t,zt,ie,fe;const me=E.isCompressedTexture?E.mipmaps[B]:E.image;q!==null?(vt=q.max.x-q.min.x,Ct=q.max.y-q.min.y,Ft=q.isBox3?q.max.z-q.min.z:1,Ot=q.min.x,Xt=q.min.y,$t=q.isBox3?q.min.z:0):(vt=me.width,Ct=me.height,Ft=me.depth||1,Ot=0,Xt=0,$t=0),Y!==null?(zt=Y.x,ie=Y.y,fe=Y.z):(zt=0,ie=0,fe=0);const qe=Kt.convert(O.format),re=Kt.convert(O.type);let Bt;O.isData3DTexture?(b.setTexture3D(O,0),Bt=L.TEXTURE_3D):O.isDataArrayTexture||O.isCompressedArrayTexture?(b.setTexture2DArray(O,0),Bt=L.TEXTURE_2D_ARRAY):(b.setTexture2D(O,0),Bt=L.TEXTURE_2D),L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,O.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,O.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,O.unpackAlignment);const bn=L.getParameter(L.UNPACK_ROW_LENGTH),oe=L.getParameter(L.UNPACK_IMAGE_HEIGHT),an=L.getParameter(L.UNPACK_SKIP_PIXELS),Ci=L.getParameter(L.UNPACK_SKIP_ROWS),Ze=L.getParameter(L.UNPACK_SKIP_IMAGES);L.pixelStorei(L.UNPACK_ROW_LENGTH,me.width),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,me.height),L.pixelStorei(L.UNPACK_SKIP_PIXELS,Ot),L.pixelStorei(L.UNPACK_SKIP_ROWS,Xt),L.pixelStorei(L.UNPACK_SKIP_IMAGES,$t);const us=E.isDataArrayTexture||E.isData3DTexture,ge=O.isDataArrayTexture||O.isData3DTexture;if(E.isRenderTargetTexture||E.isDepthTexture){const _n=_t.get(E),ds=_t.get(O),nn=_t.get(_n.__renderTarget),Bn=_t.get(ds.__renderTarget);et.bindFramebuffer(L.READ_FRAMEBUFFER,nn.__webglFramebuffer),et.bindFramebuffer(L.DRAW_FRAMEBUFFER,Bn.__webglFramebuffer);for(let kn=0;kn<Ft;kn++)us&&L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,_t.get(E).__webglTexture,B,$t+kn),E.isDepthTexture?(ge&&L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,_t.get(O).__webglTexture,B,fe+kn),L.blitFramebuffer(Ot,Xt,vt,Ct,zt,ie,vt,Ct,L.DEPTH_BUFFER_BIT,L.NEAREST)):ge?L.copyTexSubImage3D(Bt,B,zt,ie,fe+kn,Ot,Xt,vt,Ct):L.copyTexSubImage2D(Bt,B,zt,ie,fe+kn,Ot,Xt,vt,Ct);et.bindFramebuffer(L.READ_FRAMEBUFFER,null),et.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else ge?E.isDataTexture||E.isData3DTexture?L.texSubImage3D(Bt,B,zt,ie,fe,vt,Ct,Ft,qe,re,me.data):O.isCompressedArrayTexture?L.compressedTexSubImage3D(Bt,B,zt,ie,fe,vt,Ct,Ft,qe,me.data):L.texSubImage3D(Bt,B,zt,ie,fe,vt,Ct,Ft,qe,re,me):E.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,B,zt,ie,vt,Ct,qe,re,me.data):E.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,B,zt,ie,me.width,me.height,qe,me.data):L.texSubImage2D(L.TEXTURE_2D,B,zt,ie,vt,Ct,qe,re,me);L.pixelStorei(L.UNPACK_ROW_LENGTH,bn),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,oe),L.pixelStorei(L.UNPACK_SKIP_PIXELS,an),L.pixelStorei(L.UNPACK_SKIP_ROWS,Ci),L.pixelStorei(L.UNPACK_SKIP_IMAGES,Ze),B===0&&O.generateMipmaps&&L.generateMipmap(Bt),et.unbindTexture()},this.copyTextureToTexture3D=function(E,O,q=null,Y=null,B=0){return E.isTexture!==!0&&(Ts("WebGLRenderer: copyTextureToTexture3D function signature has changed."),q=arguments[0]||null,Y=arguments[1]||null,E=arguments[2],O=arguments[3],B=arguments[4]||0),Ts('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(E,O,q,Y,B)},this.initRenderTarget=function(E){_t.get(E).__webglFramebuffer===void 0&&b.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?b.setTextureCube(E,0):E.isData3DTexture?b.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?b.setTexture2DArray(E,0):b.setTexture2D(E,0),et.unbindTexture()},this.resetState=function(){T=0,R=0,D=null,et.reset(),de.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Dn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorspace=ne._getDrawingBufferColorSpace(t),e.unpackColorSpace=ne._getUnpackColorSpace()}}class sc{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new bt(t),this.density=e}clone(){return new sc(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class rc{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new bt(t),this.near=e,this.far=n}clone(){return new rc(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class Ds extends Ae{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new mn,this.environmentIntensity=1,this.environmentRotation=new mn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class _g extends Ge{constructor(t=null,e=1,n=1,s,r,o,a,c,l=Qe,h=Qe,u,d){super(null,o,a,c,l,h,s,r,u,d),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class As extends tn{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const Wi=new le,wl=new le,fr=[],Sl=new zn,vg=new le,vs=new A,xs=new ls;class Co extends A{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new As(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,vg)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new zn),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Wi),Sl.copy(t.boundingBox).applyMatrix4(Wi),this.boundingBox.union(Sl)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new ls),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Wi),xs.copy(t.boundingSphere).applyMatrix4(Wi),this.boundingSphere.union(xs)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,o=t*r+1;for(let a=0;a<n.length;a++)n[a]=s[o+a]}raycast(t,e){const n=this.matrixWorld,s=this.count;if(vs.geometry=this.geometry,vs.material=this.material,vs.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),xs.copy(this.boundingSphere),xs.applyMatrix4(n),t.ray.intersectsSphere(xs)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Wi),wl.multiplyMatrices(n,Wi),vs.matrixWorld=wl,vs.raycast(t,fr);for(let o=0,a=fr.length;o<a;o++){const c=fr[o];c.instanceId=r,c.object=this,e.push(c)}fr.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new As(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){const n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new _g(new Float32Array(s*this.count),s,this.count,$a,wn));const r=this.morphTexture.source.data.data;let o=0;for(let l=0;l<n.length;l++)o+=n[l];const a=this.geometry.morphTargetsRelative?1:1-o,c=s*t;r[c]=a,r.set(n,c+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class Uh extends Ai{static get type(){return"LineBasicMaterial"}constructor(t){super(),this.isLineBasicMaterial=!0,this.color=new bt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const Ir=new I,Dr=new I,El=new le,Ms=new Qa,pr=new ls,Po=new I,Tl=new I;class xg extends Ae{constructor(t=new Pe,e=new Uh){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let s=1,r=e.count;s<r;s++)Ir.fromBufferAttribute(e,s-1),Dr.fromBufferAttribute(e,s),n[s]=n[s-1],n[s]+=Ir.distanceTo(Dr);t.setAttribute("lineDistance",new te(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const n=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),pr.copy(n.boundingSphere),pr.applyMatrix4(s),pr.radius+=r,t.ray.intersectsSphere(pr)===!1)return;El.copy(s).invert(),Ms.copy(t.ray).applyMatrix4(El);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=this.isLineSegments?2:1,h=n.index,d=n.attributes.position;if(h!==null){const f=Math.max(0,o.start),m=Math.min(h.count,o.start+o.count);for(let v=f,g=m-1;v<g;v+=l){const p=h.getX(v),S=h.getX(v+1),w=mr(this,t,Ms,c,p,S);w&&e.push(w)}if(this.isLineLoop){const v=h.getX(m-1),g=h.getX(f),p=mr(this,t,Ms,c,v,g);p&&e.push(p)}}else{const f=Math.max(0,o.start),m=Math.min(d.count,o.start+o.count);for(let v=f,g=m-1;v<g;v+=l){const p=mr(this,t,Ms,c,v,v+1);p&&e.push(p)}if(this.isLineLoop){const v=mr(this,t,Ms,c,m-1,f);v&&e.push(v)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function mr(i,t,e,n,s,r){const o=i.geometry.attributes.position;if(Ir.fromBufferAttribute(o,s),Dr.fromBufferAttribute(o,r),e.distanceSqToSegment(Ir,Dr,Po,Tl)>n)return;Po.applyMatrix4(i.matrixWorld);const c=t.ray.origin.distanceTo(Po);if(!(c<t.near||c>t.far))return{distance:c,point:Tl.clone().applyMatrix4(i.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:i}}const bl=new I,Al=new I;class Mg extends xg{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[];for(let s=0,r=e.count;s<r;s+=2)bl.fromBufferAttribute(e,s),Al.fromBufferAttribute(e,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+bl.distanceTo(Al);t.setAttribute("lineDistance",new te(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class oc extends Ge{constructor(t,e,n,s,r,o,a,c,l){super(t,e,n,s,r,o,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class En{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,s=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){const n=this.getLengths();let s=0;const r=n.length;let o;e?o=e:o=t*n[r-1];let a=0,c=r-1,l;for(;a<=c;)if(s=Math.floor(a+(c-a)/2),l=n[s]-o,l<0)a=s+1;else if(l>0)c=s-1;else{c=s;break}if(s=c,n[s]===o)return s/(r-1);const h=n[s],d=n[s+1]-h,f=(o-h)/d;return(s+f)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);const o=this.getPoint(s),a=this.getPoint(r),c=e||(o.isVector2?new gt:new I);return c.copy(a).sub(o).normalize(),c}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){const n=new I,s=[],r=[],o=[],a=new I,c=new le;for(let f=0;f<=t;f++){const m=f/t;s[f]=this.getTangentAt(m,new I)}r[0]=new I,o[0]=new I;let l=Number.MAX_VALUE;const h=Math.abs(s[0].x),u=Math.abs(s[0].y),d=Math.abs(s[0].z);h<=l&&(l=h,n.set(1,0,0)),u<=l&&(l=u,n.set(0,1,0)),d<=l&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let f=1;f<=t;f++){if(r[f]=r[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(s[f-1],s[f]),a.length()>Number.EPSILON){a.normalize();const m=Math.acos(be(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(c.makeRotationAxis(a,m))}o[f].crossVectors(s[f],r[f])}if(e===!0){let f=Math.acos(be(r[0].dot(r[t]),-1,1));f/=t,s[0].dot(a.crossVectors(r[0],r[t]))>0&&(f=-f);for(let m=1;m<=t;m++)r[m].applyMatrix4(c.makeRotationAxis(s[m],f*m)),o[m].crossVectors(s[m],r[m])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class ac extends En{constructor(t=0,e=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=c}getPoint(t,e=new gt){const n=e,s=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);const a=this.aStartAngle+t*r;let c=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=c-this.aX,f=l-this.aY;c=d*h-f*u+this.aX,l=d*u+f*h+this.aY}return n.set(c,l)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class yg extends ac{constructor(t,e,n,s,r,o){super(t,e,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}}function cc(){let i=0,t=0,e=0,n=0;function s(r,o,a,c){i=r,t=a,e=-3*r+3*o-2*a-c,n=2*r-2*o+a+c}return{initCatmullRom:function(r,o,a,c,l){s(o,a,l*(a-r),l*(c-o))},initNonuniformCatmullRom:function(r,o,a,c,l,h,u){let d=(o-r)/l-(a-r)/(l+h)+(a-o)/h,f=(a-o)/h-(c-o)/(h+u)+(c-a)/u;d*=h,f*=h,s(o,a,d,f)},calc:function(r){const o=r*r,a=o*r;return i+t*r+e*o+n*a}}}const gr=new I,Lo=new cc,Io=new cc,Do=new cc;class wg extends En{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new I){const n=e,s=this.points,r=s.length,o=(r-(this.closed?0:1))*t;let a=Math.floor(o),c=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:c===0&&a===r-1&&(a=r-2,c=1);let l,h;this.closed||a>0?l=s[(a-1)%r]:(gr.subVectors(s[0],s[1]).add(s[0]),l=gr);const u=s[a%r],d=s[(a+1)%r];if(this.closed||a+2<r?h=s[(a+2)%r]:(gr.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=gr),this.curveType==="centripetal"||this.curveType==="chordal"){const f=this.curveType==="chordal"?.5:.25;let m=Math.pow(l.distanceToSquared(u),f),v=Math.pow(u.distanceToSquared(d),f),g=Math.pow(d.distanceToSquared(h),f);v<1e-4&&(v=1),m<1e-4&&(m=v),g<1e-4&&(g=v),Lo.initNonuniformCatmullRom(l.x,u.x,d.x,h.x,m,v,g),Io.initNonuniformCatmullRom(l.y,u.y,d.y,h.y,m,v,g),Do.initNonuniformCatmullRom(l.z,u.z,d.z,h.z,m,v,g)}else this.curveType==="catmullrom"&&(Lo.initCatmullRom(l.x,u.x,d.x,h.x,this.tension),Io.initCatmullRom(l.y,u.y,d.y,h.y,this.tension),Do.initCatmullRom(l.z,u.z,d.z,h.z,this.tension));return n.set(Lo.calc(c),Io.calc(c),Do.calc(c)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new I().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function Rl(i,t,e,n,s){const r=(n-t)*.5,o=(s-e)*.5,a=i*i,c=i*a;return(2*e-2*n+r+o)*c+(-3*e+3*n-2*r-o)*a+r*i+e}function Sg(i,t){const e=1-i;return e*e*t}function Eg(i,t){return 2*(1-i)*i*t}function Tg(i,t){return i*i*t}function Rs(i,t,e,n){return Sg(i,t)+Eg(i,e)+Tg(i,n)}function bg(i,t){const e=1-i;return e*e*e*t}function Ag(i,t){const e=1-i;return 3*e*e*i*t}function Rg(i,t){return 3*(1-i)*i*i*t}function Cg(i,t){return i*i*i*t}function Cs(i,t,e,n,s){return bg(i,t)+Ag(i,e)+Rg(i,n)+Cg(i,s)}class Nh extends En{constructor(t=new gt,e=new gt,n=new gt,s=new gt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new gt){const n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Cs(t,s.x,r.x,o.x,a.x),Cs(t,s.y,r.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Pg extends En{constructor(t=new I,e=new I,n=new I,s=new I){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new I){const n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Cs(t,s.x,r.x,o.x,a.x),Cs(t,s.y,r.y,o.y,a.y),Cs(t,s.z,r.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Fh extends En{constructor(t=new gt,e=new gt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new gt){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new gt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Lg extends En{constructor(t=new I,e=new I){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new I){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new I){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Oh extends En{constructor(t=new gt,e=new gt,n=new gt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new gt){const n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(Rs(t,s.x,r.x,o.x),Rs(t,s.y,r.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Ig extends En{constructor(t=new I,e=new I,n=new I){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new I){const n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(Rs(t,s.x,r.x,o.x),Rs(t,s.y,r.y,o.y),Rs(t,s.z,r.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class zh extends En{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new gt){const n=e,s=this.points,r=(s.length-1)*t,o=Math.floor(r),a=r-o,c=s[o===0?o:o-1],l=s[o],h=s[o>s.length-2?s.length-1:o+1],u=s[o>s.length-3?s.length-1:o+2];return n.set(Rl(a,c.x,l.x,h.x,u.x),Rl(a,c.y,l.y,h.y,u.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new gt().fromArray(s))}return this}}var Ia=Object.freeze({__proto__:null,ArcCurve:yg,CatmullRomCurve3:wg,CubicBezierCurve:Nh,CubicBezierCurve3:Pg,EllipseCurve:ac,LineCurve:Fh,LineCurve3:Lg,QuadraticBezierCurve:Oh,QuadraticBezierCurve3:Ig,SplineCurve:zh});class Dg extends En{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Ia[n](e,t))}return this}getPoint(t,e){const n=t*this.getLength(),s=this.getCurveLengths();let r=0;for(;r<s.length;){if(s[r]>=n){const o=s[r]-n,a=this.curves[r],c=a.getLength(),l=c===0?0:1-o/c;return a.getPointAt(l,e)}r++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let n;for(let s=0,r=this.curves;s<r.length;s++){const o=r[s],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,c=o.getPoints(a);for(let l=0;l<c.length;l++){const h=c[l];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){const s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const s=t.curves[e];this.curves.push(new Ia[s.type]().fromJSON(s))}return this}}class Da extends Dg{constructor(t){super(),this.type="Path",this.currentPoint=new gt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const n=new Fh(this.currentPoint.clone(),new gt(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){const r=new Oh(this.currentPoint.clone(),new gt(t,e),new gt(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,r,o){const a=new Nh(this.currentPoint.clone(),new gt(t,e),new gt(n,s),new gt(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),n=new zh(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,r,o){const a=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(t+a,e+c,n,s,r,o),this}absarc(t,e,n,s,r,o){return this.absellipse(t,e,n,n,s,r,o),this}ellipse(t,e,n,s,r,o,a,c){const l=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+l,e+h,n,s,r,o,a,c),this}absellipse(t,e,n,s,r,o,a,c){const l=new ac(t,e,n,s,r,o,a,c);if(this.curves.length>0){const u=l.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(l);const h=l.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class Yr extends Pe{constructor(t=[new gt(0,-.5),new gt(.5,0),new gt(0,.5)],e=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:s},e=Math.floor(e),s=be(s,0,Math.PI*2);const r=[],o=[],a=[],c=[],l=[],h=1/e,u=new I,d=new gt,f=new I,m=new I,v=new I;let g=0,p=0;for(let S=0;S<=t.length-1;S++)switch(S){case 0:g=t[S+1].x-t[S].x,p=t[S+1].y-t[S].y,f.x=p*1,f.y=-g,f.z=p*0,v.copy(f),f.normalize(),c.push(f.x,f.y,f.z);break;case t.length-1:c.push(v.x,v.y,v.z);break;default:g=t[S+1].x-t[S].x,p=t[S+1].y-t[S].y,f.x=p*1,f.y=-g,f.z=p*0,m.copy(f),f.x+=v.x,f.y+=v.y,f.z+=v.z,f.normalize(),c.push(f.x,f.y,f.z),v.copy(m)}for(let S=0;S<=e;S++){const w=n+S*h*s,x=Math.sin(w),U=Math.cos(w);for(let T=0;T<=t.length-1;T++){u.x=t[T].x*x,u.y=t[T].y,u.z=t[T].x*U,o.push(u.x,u.y,u.z),d.x=S/e,d.y=T/(t.length-1),a.push(d.x,d.y);const R=c[3*T+0]*x,D=c[3*T+1],y=c[3*T+0]*U;l.push(R,D,y)}}for(let S=0;S<e;S++)for(let w=0;w<t.length-1;w++){const x=w+S*t.length,U=x,T=x+t.length,R=x+t.length+1,D=x+1;r.push(U,T,D),r.push(R,D,T)}this.setIndex(r),this.setAttribute("position",new te(o,3)),this.setAttribute("uv",new te(a,2)),this.setAttribute("normal",new te(l,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Yr(t.points,t.segments,t.phiStart,t.phiLength)}}class ee extends Yr{constructor(t=1,e=1,n=4,s=8){const r=new Da;r.absarc(0,-e/2,t,Math.PI*1.5,0),r.absarc(0,e/2,t,0,Math.PI*.5),super(r.getPoints(n),s),this.type="CapsuleGeometry",this.parameters={radius:t,length:e,capSegments:n,radialSegments:s}}static fromJSON(t){return new ee(t.radius,t.length,t.capSegments,t.radialSegments)}}class gn extends Pe{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);const r=[],o=[],a=[],c=[],l=new I,h=new gt;o.push(0,0,0),a.push(0,0,1),c.push(.5,.5);for(let u=0,d=3;u<=e;u++,d+=3){const f=n+u/e*s;l.x=t*Math.cos(f),l.y=t*Math.sin(f),o.push(l.x,l.y,l.z),a.push(0,0,1),h.x=(o[d]/t+1)/2,h.y=(o[d+1]/t+1)/2,c.push(h.x,h.y)}for(let u=1;u<=e;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new te(o,3)),this.setAttribute("normal",new te(a,3)),this.setAttribute("uv",new te(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new gn(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class Qt extends Pe{constructor(t=1,e=1,n=1,s=32,r=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:c};const l=this;s=Math.floor(s),r=Math.floor(r);const h=[],u=[],d=[],f=[];let m=0;const v=[],g=n/2;let p=0;S(),o===!1&&(t>0&&w(!0),e>0&&w(!1)),this.setIndex(h),this.setAttribute("position",new te(u,3)),this.setAttribute("normal",new te(d,3)),this.setAttribute("uv",new te(f,2));function S(){const x=new I,U=new I;let T=0;const R=(e-t)/n;for(let D=0;D<=r;D++){const y=[],M=D/r,C=M*(e-t)+t;for(let z=0;z<=s;z++){const k=z/s,H=k*c+a,Z=Math.sin(H),W=Math.cos(H);U.x=C*Z,U.y=-M*n+g,U.z=C*W,u.push(U.x,U.y,U.z),x.set(Z,R,W).normalize(),d.push(x.x,x.y,x.z),f.push(k,1-M),y.push(m++)}v.push(y)}for(let D=0;D<s;D++)for(let y=0;y<r;y++){const M=v[y][D],C=v[y+1][D],z=v[y+1][D+1],k=v[y][D+1];(t>0||y!==0)&&(h.push(M,C,k),T+=3),(e>0||y!==r-1)&&(h.push(C,z,k),T+=3)}l.addGroup(p,T,0),p+=T}function w(x){const U=m,T=new gt,R=new I;let D=0;const y=x===!0?t:e,M=x===!0?1:-1;for(let z=1;z<=s;z++)u.push(0,g*M,0),d.push(0,M,0),f.push(.5,.5),m++;const C=m;for(let z=0;z<=s;z++){const H=z/s*c+a,Z=Math.cos(H),W=Math.sin(H);R.x=y*W,R.y=g*M,R.z=y*Z,u.push(R.x,R.y,R.z),d.push(0,M,0),T.x=Z*.5+.5,T.y=W*.5*M+.5,f.push(T.x,T.y),m++}for(let z=0;z<s;z++){const k=U+z,H=C+z;x===!0?h.push(H,H+1,k):h.push(H+1,H,k),D+=3}l.addGroup(p,D,x===!0?1:2),p+=D}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Qt(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Ie extends Qt{constructor(t=1,e=1,n=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,t,e,n,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(t){return new Ie(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class ks extends Pe{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};const r=[],o=[];a(s),l(n),h(),this.setAttribute("position",new te(r,3)),this.setAttribute("normal",new te(r.slice(),3)),this.setAttribute("uv",new te(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(S){const w=new I,x=new I,U=new I;for(let T=0;T<e.length;T+=3)f(e[T+0],w),f(e[T+1],x),f(e[T+2],U),c(w,x,U,S)}function c(S,w,x,U){const T=U+1,R=[];for(let D=0;D<=T;D++){R[D]=[];const y=S.clone().lerp(x,D/T),M=w.clone().lerp(x,D/T),C=T-D;for(let z=0;z<=C;z++)z===0&&D===T?R[D][z]=y:R[D][z]=y.clone().lerp(M,z/C)}for(let D=0;D<T;D++)for(let y=0;y<2*(T-D)-1;y++){const M=Math.floor(y/2);y%2===0?(d(R[D][M+1]),d(R[D+1][M]),d(R[D][M])):(d(R[D][M+1]),d(R[D+1][M+1]),d(R[D+1][M]))}}function l(S){const w=new I;for(let x=0;x<r.length;x+=3)w.x=r[x+0],w.y=r[x+1],w.z=r[x+2],w.normalize().multiplyScalar(S),r[x+0]=w.x,r[x+1]=w.y,r[x+2]=w.z}function h(){const S=new I;for(let w=0;w<r.length;w+=3){S.x=r[w+0],S.y=r[w+1],S.z=r[w+2];const x=g(S)/2/Math.PI+.5,U=p(S)/Math.PI+.5;o.push(x,1-U)}m(),u()}function u(){for(let S=0;S<o.length;S+=6){const w=o[S+0],x=o[S+2],U=o[S+4],T=Math.max(w,x,U),R=Math.min(w,x,U);T>.9&&R<.1&&(w<.2&&(o[S+0]+=1),x<.2&&(o[S+2]+=1),U<.2&&(o[S+4]+=1))}}function d(S){r.push(S.x,S.y,S.z)}function f(S,w){const x=S*3;w.x=t[x+0],w.y=t[x+1],w.z=t[x+2]}function m(){const S=new I,w=new I,x=new I,U=new I,T=new gt,R=new gt,D=new gt;for(let y=0,M=0;y<r.length;y+=9,M+=6){S.set(r[y+0],r[y+1],r[y+2]),w.set(r[y+3],r[y+4],r[y+5]),x.set(r[y+6],r[y+7],r[y+8]),T.set(o[M+0],o[M+1]),R.set(o[M+2],o[M+3]),D.set(o[M+4],o[M+5]),U.copy(S).add(w).add(x).divideScalar(3);const C=g(U);v(T,M+0,S,C),v(R,M+2,w,C),v(D,M+4,x,C)}}function v(S,w,x,U){U<0&&S.x===1&&(o[w]=S.x-1),x.x===0&&x.z===0&&(o[w]=U/2/Math.PI+.5)}function g(S){return Math.atan2(S.z,-S.x)}function p(S){return Math.atan2(-S.y,Math.sqrt(S.x*S.x+S.z*S.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ks(t.vertices,t.indices,t.radius,t.details)}}class ii extends ks{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,s=1/n,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-s,-n,0,-s,n,0,s,-n,0,s,n,-s,-n,0,-s,n,0,s,-n,0,s,n,0,-n,0,-s,n,0,-s,-n,0,s,n,0,s],o=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,o,t,e),this.type="DodecahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new ii(t.radius,t.detail)}}class rs extends Da{constructor(t){super(t),this.uuid=cs(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let n=0,s=this.holes.length;n<s;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){const s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const s=t.holes[e];this.holes.push(new Da().fromJSON(s))}return this}}const Ug={triangulate:function(i,t,e=2){const n=t&&t.length,s=n?t[0]*e:i.length;let r=Bh(i,0,s,e,!0);const o=[];if(!r||r.next===r.prev)return o;let a,c,l,h,u,d,f;if(n&&(r=Bg(i,t,r,e)),i.length>80*e){a=l=i[0],c=h=i[1];for(let m=e;m<s;m+=e)u=i[m],d=i[m+1],u<a&&(a=u),d<c&&(c=d),u>l&&(l=u),d>h&&(h=d);f=Math.max(l-a,h-c),f=f!==0?32767/f:0}return Us(r,o,e,a,c,f,0),o}};function Bh(i,t,e,n,s){let r,o;if(s===Kg(i,t,e,n)>0)for(r=t;r<e;r+=n)o=Cl(r,i[r],i[r+1],o);else for(r=e-n;r>=t;r-=n)o=Cl(r,i[r],i[r+1],o);return o&&$r(o,o.next)&&(Fs(o),o=o.next),o}function Ei(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&($r(e,e.next)||ve(e.prev,e,e.next)===0)){if(Fs(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function Us(i,t,e,n,s,r,o){if(!i)return;!o&&r&&Wg(i,n,s,r);let a=i,c,l;for(;i.prev!==i.next;){if(c=i.prev,l=i.next,r?Fg(i,n,s,r):Ng(i)){t.push(c.i/e|0),t.push(i.i/e|0),t.push(l.i/e|0),Fs(i),i=l.next,a=l.next;continue}if(i=l,i===a){o?o===1?(i=Og(Ei(i),t,e),Us(i,t,e,n,s,r,2)):o===2&&zg(i,t,e,n,s,r):Us(Ei(i),t,e,n,s,r,1);break}}}function Ng(i){const t=i.prev,e=i,n=i.next;if(ve(t,e,n)>=0)return!1;const s=t.x,r=e.x,o=n.x,a=t.y,c=e.y,l=n.y,h=s<r?s<o?s:o:r<o?r:o,u=a<c?a<l?a:l:c<l?c:l,d=s>r?s>o?s:o:r>o?r:o,f=a>c?a>l?a:l:c>l?c:l;let m=n.next;for(;m!==t;){if(m.x>=h&&m.x<=d&&m.y>=u&&m.y<=f&&Yi(s,a,r,c,o,l,m.x,m.y)&&ve(m.prev,m,m.next)>=0)return!1;m=m.next}return!0}function Fg(i,t,e,n){const s=i.prev,r=i,o=i.next;if(ve(s,r,o)>=0)return!1;const a=s.x,c=r.x,l=o.x,h=s.y,u=r.y,d=o.y,f=a<c?a<l?a:l:c<l?c:l,m=h<u?h<d?h:d:u<d?u:d,v=a>c?a>l?a:l:c>l?c:l,g=h>u?h>d?h:d:u>d?u:d,p=Ua(f,m,t,e,n),S=Ua(v,g,t,e,n);let w=i.prevZ,x=i.nextZ;for(;w&&w.z>=p&&x&&x.z<=S;){if(w.x>=f&&w.x<=v&&w.y>=m&&w.y<=g&&w!==s&&w!==o&&Yi(a,h,c,u,l,d,w.x,w.y)&&ve(w.prev,w,w.next)>=0||(w=w.prevZ,x.x>=f&&x.x<=v&&x.y>=m&&x.y<=g&&x!==s&&x!==o&&Yi(a,h,c,u,l,d,x.x,x.y)&&ve(x.prev,x,x.next)>=0))return!1;x=x.nextZ}for(;w&&w.z>=p;){if(w.x>=f&&w.x<=v&&w.y>=m&&w.y<=g&&w!==s&&w!==o&&Yi(a,h,c,u,l,d,w.x,w.y)&&ve(w.prev,w,w.next)>=0)return!1;w=w.prevZ}for(;x&&x.z<=S;){if(x.x>=f&&x.x<=v&&x.y>=m&&x.y<=g&&x!==s&&x!==o&&Yi(a,h,c,u,l,d,x.x,x.y)&&ve(x.prev,x,x.next)>=0)return!1;x=x.nextZ}return!0}function Og(i,t,e){let n=i;do{const s=n.prev,r=n.next.next;!$r(s,r)&&kh(s,n,n.next,r)&&Ns(s,r)&&Ns(r,s)&&(t.push(s.i/e|0),t.push(n.i/e|0),t.push(r.i/e|0),Fs(n),Fs(n.next),n=i=r),n=n.next}while(n!==i);return Ei(n)}function zg(i,t,e,n,s,r){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&Yg(o,a)){let c=Hh(o,a);o=Ei(o,o.next),c=Ei(c,c.next),Us(o,t,e,n,s,r,0),Us(c,t,e,n,s,r,0);return}a=a.next}o=o.next}while(o!==i)}function Bg(i,t,e,n){const s=[];let r,o,a,c,l;for(r=0,o=t.length;r<o;r++)a=t[r]*n,c=r<o-1?t[r+1]*n:i.length,l=Bh(i,a,c,n,!1),l===l.next&&(l.steiner=!0),s.push(qg(l));for(s.sort(kg),r=0;r<s.length;r++)e=Hg(s[r],e);return e}function kg(i,t){return i.x-t.x}function Hg(i,t){const e=Gg(i,t);if(!e)return t;const n=Hh(e,i);return Ei(n,n.next),Ei(e,e.next)}function Gg(i,t){let e=t,n=-1/0,s;const r=i.x,o=i.y;do{if(o<=e.y&&o>=e.next.y&&e.next.y!==e.y){const d=e.x+(o-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(d<=r&&d>n&&(n=d,s=e.x<e.next.x?e:e.next,d===r))return s}e=e.next}while(e!==t);if(!s)return null;const a=s,c=s.x,l=s.y;let h=1/0,u;e=s;do r>=e.x&&e.x>=c&&r!==e.x&&Yi(o<l?r:n,o,c,l,o<l?n:r,o,e.x,e.y)&&(u=Math.abs(o-e.y)/(r-e.x),Ns(e,i)&&(u<h||u===h&&(e.x>s.x||e.x===s.x&&Vg(s,e)))&&(s=e,h=u)),e=e.next;while(e!==a);return s}function Vg(i,t){return ve(i.prev,i,t.prev)<0&&ve(t.next,i,i.next)<0}function Wg(i,t,e,n){let s=i;do s.z===0&&(s.z=Ua(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,Xg(s)}function Xg(i){let t,e,n,s,r,o,a,c,l=1;do{for(e=i,i=null,r=null,o=0;e;){for(o++,n=e,a=0,t=0;t<l&&(a++,n=n.nextZ,!!n);t++);for(c=l;a>0||c>0&&n;)a!==0&&(c===0||!n||e.z<=n.z)?(s=e,e=e.nextZ,a--):(s=n,n=n.nextZ,c--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;e=n}r.nextZ=null,l*=2}while(o>1);return i}function Ua(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function qg(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function Yi(i,t,e,n,s,r,o,a){return(s-o)*(t-a)>=(i-o)*(r-a)&&(i-o)*(n-a)>=(e-o)*(t-a)&&(e-o)*(r-a)>=(s-o)*(n-a)}function Yg(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!$g(i,t)&&(Ns(i,t)&&Ns(t,i)&&Zg(i,t)&&(ve(i.prev,i,t.prev)||ve(i,t.prev,t))||$r(i,t)&&ve(i.prev,i,i.next)>0&&ve(t.prev,t,t.next)>0)}function ve(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function $r(i,t){return i.x===t.x&&i.y===t.y}function kh(i,t,e,n){const s=vr(ve(i,t,e)),r=vr(ve(i,t,n)),o=vr(ve(e,n,i)),a=vr(ve(e,n,t));return!!(s!==r&&o!==a||s===0&&_r(i,e,t)||r===0&&_r(i,n,t)||o===0&&_r(e,i,n)||a===0&&_r(e,t,n))}function _r(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function vr(i){return i>0?1:i<0?-1:0}function $g(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&kh(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function Ns(i,t){return ve(i.prev,i,i.next)<0?ve(i,t,i.next)>=0&&ve(i,i.prev,t)>=0:ve(i,t,i.prev)<0||ve(i,i.next,t)<0}function Zg(i,t){let e=i,n=!1;const s=(i.x+t.x)/2,r=(i.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function Hh(i,t){const e=new Na(i.i,i.x,i.y),n=new Na(t.i,t.x,t.y),s=i.next,r=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function Cl(i,t,e,n){const s=new Na(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function Fs(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Na(i,t,e){this.i=i,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function Kg(i,t,e,n){let s=0;for(let r=t,o=e-n;r<e;r+=n)s+=(i[o]-i[r])*(i[r+1]+i[o+1]),o=r;return s}class Ps{static area(t){const e=t.length;let n=0;for(let s=e-1,r=0;r<e;s=r++)n+=t[s].x*t[r].y-t[r].x*t[s].y;return n*.5}static isClockWise(t){return Ps.area(t)<0}static triangulateShape(t,e){const n=[],s=[],r=[];Pl(t),Ll(n,t);let o=t.length;e.forEach(Pl);for(let c=0;c<e.length;c++)s.push(o),o+=e[c].length,Ll(n,e[c]);const a=Ug.triangulate(n,s);for(let c=0;c<a.length;c+=3)r.push(a.slice(c,c+3));return r}}function Pl(i){const t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function Ll(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}class Ti extends Pe{constructor(t=new rs([new gt(.5,.5),new gt(-.5,.5),new gt(-.5,-.5),new gt(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];const n=this,s=[],r=[];for(let a=0,c=t.length;a<c;a++){const l=t[a];o(l)}this.setAttribute("position",new te(s,3)),this.setAttribute("uv",new te(r,2)),this.computeVertexNormals();function o(a){const c=[],l=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,u=e.depth!==void 0?e.depth:1;let d=e.bevelEnabled!==void 0?e.bevelEnabled:!0,f=e.bevelThickness!==void 0?e.bevelThickness:.2,m=e.bevelSize!==void 0?e.bevelSize:f-.1,v=e.bevelOffset!==void 0?e.bevelOffset:0,g=e.bevelSegments!==void 0?e.bevelSegments:3;const p=e.extrudePath,S=e.UVGenerator!==void 0?e.UVGenerator:Jg;let w,x=!1,U,T,R,D;p&&(w=p.getSpacedPoints(h),x=!0,d=!1,U=p.computeFrenetFrames(h,!1),T=new I,R=new I,D=new I),d||(g=0,f=0,m=0,v=0);const y=a.extractPoints(l);let M=y.shape;const C=y.holes;if(!Ps.isClockWise(M)){M=M.reverse();for(let nt=0,rt=C.length;nt<rt;nt++){const L=C[nt];Ps.isClockWise(L)&&(C[nt]=L.reverse())}}const k=Ps.triangulateShape(M,C),H=M;for(let nt=0,rt=C.length;nt<rt;nt++){const L=C[nt];M=M.concat(L)}function Z(nt,rt,L){return rt||console.error("THREE.ExtrudeGeometry: vec does not exist"),nt.clone().addScaledVector(rt,L)}const W=M.length,st=k.length;function $(nt,rt,L){let At,V,tt;const et=nt.x-rt.x,It=nt.y-rt.y,_t=L.x-nt.x,b=L.y-nt.y,_=et*et+It*It,P=et*b-It*_t;if(Math.abs(P)>Number.EPSILON){const F=Math.sqrt(_),K=Math.sqrt(_t*_t+b*b),X=rt.x-It/F,xt=rt.y+et/F,mt=L.x-b/K,yt=L.y+_t/K,kt=((mt-X)*b-(yt-xt)*_t)/(et*b-It*_t);At=X+et*kt-nt.x,V=xt+It*kt-nt.y;const at=At*At+V*V;if(at<=2)return new gt(At,V);tt=Math.sqrt(at/2)}else{let F=!1;et>Number.EPSILON?_t>Number.EPSILON&&(F=!0):et<-Number.EPSILON?_t<-Number.EPSILON&&(F=!0):Math.sign(It)===Math.sign(b)&&(F=!0),F?(At=-It,V=et,tt=Math.sqrt(_)):(At=et,V=It,tt=Math.sqrt(_/2))}return new gt(At/tt,V/tt)}const ft=[];for(let nt=0,rt=H.length,L=rt-1,At=nt+1;nt<rt;nt++,L++,At++)L===rt&&(L=0),At===rt&&(At=0),ft[nt]=$(H[nt],H[L],H[At]);const Mt=[];let dt,ut=ft.concat();for(let nt=0,rt=C.length;nt<rt;nt++){const L=C[nt];dt=[];for(let At=0,V=L.length,tt=V-1,et=At+1;At<V;At++,tt++,et++)tt===V&&(tt=0),et===V&&(et=0),dt[At]=$(L[At],L[tt],L[et]);Mt.push(dt),ut=ut.concat(dt)}for(let nt=0;nt<g;nt++){const rt=nt/g,L=f*Math.cos(rt*Math.PI/2),At=m*Math.sin(rt*Math.PI/2)+v;for(let V=0,tt=H.length;V<tt;V++){const et=Z(H[V],ft[V],At);it(et.x,et.y,-L)}for(let V=0,tt=C.length;V<tt;V++){const et=C[V];dt=Mt[V];for(let It=0,_t=et.length;It<_t;It++){const b=Z(et[It],dt[It],At);it(b.x,b.y,-L)}}}const ct=m+v;for(let nt=0;nt<W;nt++){const rt=d?Z(M[nt],ut[nt],ct):M[nt];x?(R.copy(U.normals[0]).multiplyScalar(rt.x),T.copy(U.binormals[0]).multiplyScalar(rt.y),D.copy(w[0]).add(R).add(T),it(D.x,D.y,D.z)):it(rt.x,rt.y,0)}for(let nt=1;nt<=h;nt++)for(let rt=0;rt<W;rt++){const L=d?Z(M[rt],ut[rt],ct):M[rt];x?(R.copy(U.normals[nt]).multiplyScalar(L.x),T.copy(U.binormals[nt]).multiplyScalar(L.y),D.copy(w[nt]).add(R).add(T),it(D.x,D.y,D.z)):it(L.x,L.y,u/h*nt)}for(let nt=g-1;nt>=0;nt--){const rt=nt/g,L=f*Math.cos(rt*Math.PI/2),At=m*Math.sin(rt*Math.PI/2)+v;for(let V=0,tt=H.length;V<tt;V++){const et=Z(H[V],ft[V],At);it(et.x,et.y,u+L)}for(let V=0,tt=C.length;V<tt;V++){const et=C[V];dt=Mt[V];for(let It=0,_t=et.length;It<_t;It++){const b=Z(et[It],dt[It],At);x?it(b.x,b.y+w[h-1].y,w[h-1].x+L):it(b.x,b.y,u+L)}}}G(),Q();function G(){const nt=s.length/3;if(d){let rt=0,L=W*rt;for(let At=0;At<st;At++){const V=k[At];pt(V[2]+L,V[1]+L,V[0]+L)}rt=h+g*2,L=W*rt;for(let At=0;At<st;At++){const V=k[At];pt(V[0]+L,V[1]+L,V[2]+L)}}else{for(let rt=0;rt<st;rt++){const L=k[rt];pt(L[2],L[1],L[0])}for(let rt=0;rt<st;rt++){const L=k[rt];pt(L[0]+W*h,L[1]+W*h,L[2]+W*h)}}n.addGroup(nt,s.length/3-nt,0)}function Q(){const nt=s.length/3;let rt=0;lt(H,rt),rt+=H.length;for(let L=0,At=C.length;L<At;L++){const V=C[L];lt(V,rt),rt+=V.length}n.addGroup(nt,s.length/3-nt,1)}function lt(nt,rt){let L=nt.length;for(;--L>=0;){const At=L;let V=L-1;V<0&&(V=nt.length-1);for(let tt=0,et=h+g*2;tt<et;tt++){const It=W*tt,_t=W*(tt+1),b=rt+At+It,_=rt+V+It,P=rt+V+_t,F=rt+At+_t;wt(b,_,P,F)}}}function it(nt,rt,L){c.push(nt),c.push(rt),c.push(L)}function pt(nt,rt,L){Ut(nt),Ut(rt),Ut(L);const At=s.length/3,V=S.generateTopUV(n,s,At-3,At-2,At-1);Gt(V[0]),Gt(V[1]),Gt(V[2])}function wt(nt,rt,L,At){Ut(nt),Ut(rt),Ut(At),Ut(rt),Ut(L),Ut(At);const V=s.length/3,tt=S.generateSideWallUV(n,s,V-6,V-3,V-2,V-1);Gt(tt[0]),Gt(tt[1]),Gt(tt[3]),Gt(tt[1]),Gt(tt[2]),Gt(tt[3])}function Ut(nt){s.push(c[nt*3+0]),s.push(c[nt*3+1]),s.push(c[nt*3+2])}function Gt(nt){r.push(nt.x),r.push(nt.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return jg(e,n,t)}static fromJSON(t,e){const n=[];for(let r=0,o=t.shapes.length;r<o;r++){const a=e[t.shapes[r]];n.push(a)}const s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new Ia[s.type]().fromJSON(s)),new Ti(n,t.options)}}const Jg={generateTopUV:function(i,t,e,n,s){const r=t[e*3],o=t[e*3+1],a=t[n*3],c=t[n*3+1],l=t[s*3],h=t[s*3+1];return[new gt(r,o),new gt(a,c),new gt(l,h)]},generateSideWallUV:function(i,t,e,n,s,r){const o=t[e*3],a=t[e*3+1],c=t[e*3+2],l=t[n*3],h=t[n*3+1],u=t[n*3+2],d=t[s*3],f=t[s*3+1],m=t[s*3+2],v=t[r*3],g=t[r*3+1],p=t[r*3+2];return Math.abs(a-h)<Math.abs(o-l)?[new gt(o,1-c),new gt(l,1-u),new gt(d,1-m),new gt(v,1-p)]:[new gt(a,1-c),new gt(h,1-u),new gt(f,1-m),new gt(g,1-p)]}};function jg(i,t,e){if(e.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){const r=i[n];e.shapes.push(r.uuid)}else e.shapes.push(i.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}class rn extends ks{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new rn(t.radius,t.detail)}}class Nn extends ks{constructor(t=1,e=0){const n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,s,t,e),this.type="OctahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new Nn(t.radius,t.detail)}}class yi extends Pe{constructor(t=.5,e=1,n=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:o},n=Math.max(3,n),s=Math.max(1,s);const a=[],c=[],l=[],h=[];let u=t;const d=(e-t)/s,f=new I,m=new gt;for(let v=0;v<=s;v++){for(let g=0;g<=n;g++){const p=r+g/n*o;f.x=u*Math.cos(p),f.y=u*Math.sin(p),c.push(f.x,f.y,f.z),l.push(0,0,1),m.x=(f.x/e+1)/2,m.y=(f.y/e+1)/2,h.push(m.x,m.y)}u+=d}for(let v=0;v<s;v++){const g=v*(n+1);for(let p=0;p<n;p++){const S=p+g,w=S,x=S+n+1,U=S+n+2,T=S+1;a.push(w,x,T),a.push(x,U,T)}}this.setIndex(a),this.setAttribute("position",new te(c,3)),this.setAttribute("normal",new te(l,3)),this.setAttribute("uv",new te(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new yi(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class ht extends Pe{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const c=Math.min(o+a,Math.PI);let l=0;const h=[],u=new I,d=new I,f=[],m=[],v=[],g=[];for(let p=0;p<=n;p++){const S=[],w=p/n;let x=0;p===0&&o===0?x=.5/e:p===n&&c===Math.PI&&(x=-.5/e);for(let U=0;U<=e;U++){const T=U/e;u.x=-t*Math.cos(s+T*r)*Math.sin(o+w*a),u.y=t*Math.cos(o+w*a),u.z=t*Math.sin(s+T*r)*Math.sin(o+w*a),m.push(u.x,u.y,u.z),d.copy(u).normalize(),v.push(d.x,d.y,d.z),g.push(T+x,1-w),S.push(l++)}h.push(S)}for(let p=0;p<n;p++)for(let S=0;S<e;S++){const w=h[p][S+1],x=h[p][S],U=h[p+1][S],T=h[p+1][S+1];(p!==0||o>0)&&f.push(w,x,T),(p!==n-1||c<Math.PI)&&f.push(x,U,T)}this.setIndex(f),this.setAttribute("position",new te(m,3)),this.setAttribute("normal",new te(v,3)),this.setAttribute("uv",new te(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ht(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class We extends Pe{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);const o=[],a=[],c=[],l=[],h=new I,u=new I,d=new I;for(let f=0;f<=n;f++)for(let m=0;m<=s;m++){const v=m/s*r,g=f/n*Math.PI*2;u.x=(t+e*Math.cos(g))*Math.cos(v),u.y=(t+e*Math.cos(g))*Math.sin(v),u.z=e*Math.sin(g),a.push(u.x,u.y,u.z),h.x=t*Math.cos(v),h.y=t*Math.sin(v),d.subVectors(u,h).normalize(),c.push(d.x,d.y,d.z),l.push(m/s),l.push(f/n)}for(let f=1;f<=n;f++)for(let m=1;m<=s;m++){const v=(s+1)*f+m-1,g=(s+1)*(f-1)+m-1,p=(s+1)*(f-1)+m,S=(s+1)*f+m;o.push(v,g,S),o.push(g,p,S)}this.setIndex(o),this.setAttribute("position",new te(a,3)),this.setAttribute("normal",new te(c,3)),this.setAttribute("uv",new te(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new We(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class Me extends Ai{static get type(){return"MeshStandardMaterial"}constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new bt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new bt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ja,this.normalScale=new gt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new mn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Hs extends Me{static get type(){return"MeshPhysicalMaterial"}constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new gt(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return be(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new bt(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new bt(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new bt(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}}class Uo extends Ai{static get type(){return"MeshLambertMaterial"}constructor(t){super(),this.isMeshLambertMaterial=!0,this.color=new bt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new bt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ja,this.normalScale=new gt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new mn,this.combine=Wa,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Zr extends Ae{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new bt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class Os extends Zr{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ae.DEFAULT_UP),this.updateMatrix(),this.groundColor=new bt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const No=new le,Il=new I,Dl=new I;class Gh{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new gt(512,512),this.map=null,this.mapPass=null,this.matrix=new le,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ec,this._frameExtents=new gt(1,1),this._viewportCount=1,this._viewports=[new ue(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;Il.setFromMatrixPosition(t.matrixWorld),e.position.copy(Il),Dl.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Dl),e.updateMatrixWorld(),No.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(No),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(No)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const Ul=new le,ys=new I,Fo=new I;class Qg extends Gh{constructor(){super(new He(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new gt(4,2),this._viewportCount=6,this._viewports=[new ue(2,1,1,1),new ue(0,1,1,1),new ue(3,1,1,1),new ue(1,1,1,1),new ue(3,0,1,1),new ue(1,0,1,1)],this._cubeDirections=[new I(1,0,0),new I(-1,0,0),new I(0,0,1),new I(0,0,-1),new I(0,1,0),new I(0,-1,0)],this._cubeUps=[new I(0,1,0),new I(0,1,0),new I(0,1,0),new I(0,1,0),new I(0,0,1),new I(0,0,-1)]}updateMatrices(t,e=0){const n=this.camera,s=this.matrix,r=t.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),ys.setFromMatrixPosition(t.matrixWorld),n.position.copy(ys),Fo.copy(n.position),Fo.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(Fo),n.updateMatrixWorld(),s.makeTranslation(-ys.x,-ys.y,-ys.z),Ul.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ul)}}class lc extends Zr{constructor(t,e,n=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new Qg}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class t_ extends Gh{constructor(){super(new Rh(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Sn extends Zr{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ae.DEFAULT_UP),this.updateMatrix(),this.target=new Ae,this.shadow=new t_}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class Vh extends Zr{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}class Wh{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Nl(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=Nl();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function Nl(){return performance.now()}const Fl=new le;class e_{constructor(t,e,n=0,s=1/0){this.ray=new Qa(t,e),this.near=n,this.far=s,this.camera=null,this.layers=new tc,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return Fl.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Fl),this}intersectObject(t,e=!0,n=[]){return Fa(t,this,n,e),n.sort(Ol),n}intersectObjects(t,e=!0,n=[]){for(let s=0,r=t.length;s<r;s++)Fa(t[s],this,n,e);return n.sort(Ol),n}}function Ol(i,t){return i.distance-t.distance}function Fa(i,t,e,n){let s=!0;if(i.layers.test(t.layers)&&i.raycast(t,e)===!1&&(s=!1),s===!0&&n===!0){const r=i.children;for(let o=0,a=r.length;o<a;o++)Fa(r[o],t,e,!0)}}class Xh{constructor(t=1,e=0,n=0){return this.radius=t,this.phi=e,this.theta=n,this}set(t,e,n){return this.radius=t,this.phi=e,this.theta=n,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+e*e+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,n),this.phi=Math.acos(be(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class n_ extends Mg{constructor(t=10,e=10,n=4473924,s=8947848){n=new bt(n),s=new bt(s);const r=e/2,o=t/e,a=t/2,c=[],l=[];for(let d=0,f=0,m=-a;d<=e;d++,m+=o){c.push(-a,0,m,a,0,m),c.push(m,0,-a,m,0,a);const v=d===r?n:s;v.toArray(l,f),f+=3,v.toArray(l,f),f+=3,v.toArray(l,f),f+=3,v.toArray(l,f),f+=3}const h=new Pe;h.setAttribute("position",new te(c,3)),h.setAttribute("color",new te(l,3));const u=new Uh({vertexColors:!0,toneMapped:!1});super(h,u),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Va}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Va);const zl={constitution:{name:"Constitution",icon:"❤️"},attack:{name:"Attack",icon:"⚔"},strength:{name:"Strength",icon:"💪"},defence:{name:"Defence",icon:"🛡"},woodcutting:{name:"Woodcutting",icon:"🪓"},mining:{name:"Mining",icon:"⛏"}},Kn={bronze_hatchet:{name:"Bronze Hatchet",icon:"🪓",stackable:!1,slot:"hatchet"},bronze_pickaxe:{name:"Bronze Pickaxe",icon:"⛏",stackable:!1,slot:"pickaxe"},bronze_sword:{name:"Bronze Sword",icon:"⚔",stackable:!1,slot:"weapon"},whisper_logs:{name:"Whisper Logs",icon:"🪵",stackable:!0},copper_ore:{name:"Copper Ore",icon:"🟠",stackable:!0},tin_ore:{name:"Tin Ore",icon:"⚪",stackable:!0},camp_rations:{name:"Camp Rations",icon:"🍖",stackable:!0},yeti_fur:{name:"Yeti Fur",icon:"🧣",stackable:!0},frost_claw:{name:"Frost Claw",icon:"🧊",stackable:!0},orc_tooth:{name:"Orc Tooth",icon:"🦷",stackable:!0},scout_leather:{name:"Scout Leather",icon:"🦺",stackable:!0}},i_=[{id:"weapon",label:"Weapon"},{id:"hatchet",label:"Hatchet"},{id:"pickaxe",label:"Pickaxe"}];function Ur(i){let t=0;for(let e=1;e<i;e++)t+=Math.floor(e+300*Math.pow(2,e/7));return Math.floor(t/4)}function s_(i){let t=1;for(;t<99&&Ur(t+1)<=i;)t++;return t}function xr(){return{version:1,x:0,z:2,hp:100,maxHp:100,focus:100,stamina:100,skills:{constitution:{level:10,xp:Ur(10)},attack:{level:1,xp:0},strength:{level:1,xp:0},defence:{level:1,xp:0},woodcutting:{level:1,xp:0},mining:{level:1,xp:0}},inventory:[{id:"camp_rations",qty:5}],equipped:{weapon:"bronze_sword",hatchet:"bronze_hatchet",pickaxe:"bronze_pickaxe"}}}const Bl=new Map;function we(i,t={}){const e=`${i}_${t.roughness??.62}_${t.metalness??.06}_${t.clearcoat??0}_${t.sheen??0}_${t.emissive??0}_${t.emissiveIntensity??0}_${t.envMapIntensity??1}_${t.flatShading===!1?0:1}`;let n=Bl.get(e);return n||(n=new Hs({color:i,roughness:t.roughness??.62,metalness:t.metalness??.06,envMapIntensity:t.envMapIntensity??1,flatShading:t.flatShading??!1,...t}),Bl.set(e,n)),n}function Mr(i,t){const e=Math.sin(i*127.1+t*311.7)*43758.5453;return e-Math.floor(e)}function Nr(i,t){const e=Math.floor(i),n=Math.floor(t),s=i-e,r=t-n,o=s*s*(3-2*s),a=r*r*(3-2*r),c=Mr(e,n),l=Mr(e+1,n),h=Mr(e,n+1),u=Mr(e+1,n+1);return c+(l-c)*o+(h-c)*a+(c-l-h+u)*o*a}function Fr(i,t,e=5){let n=0,s=.5,r=1;for(let o=0;o<e;o++)n+=s*Nr(i*r,t*r),s*=.5,r*=2.05;return n}function hc(i,t){const e=document.createElement("canvas"),n=document.createElement("canvas"),s=document.createElement("canvas");e.width=e.height=n.width=n.height=s.width=s.height=i;const r=e.getContext("2d"),o=n.getContext("2d"),a=s.getContext("2d"),c=r.createImageData(i,i),l=o.createImageData(i,i),h=a.createImageData(i,i);for(let d=0;d<i;d++)for(let f=0;f<i;f++){const m=t(f/i,d/i),v=(d*i+f)*4;c.data[v]=m.r,c.data[v+1]=m.g,c.data[v+2]=m.b,c.data[v+3]=255;const g=Math.max(0,Math.min(255,m.rough));l.data[v]=l.data[v+1]=l.data[v+2]=g,l.data[v+3]=255;const p=Math.max(0,Math.min(255,m.bump));h.data[v]=h.data[v+1]=h.data[v+2]=p,h.data[v+3]=255}r.putImageData(c,0,0),o.putImageData(l,0,0),a.putImageData(h,0,0);const u=(d,f)=>{const m=new oc(d);return m.wrapS=m.wrapT=es,m.anisotropy=8,m.colorSpace=f?Ue:Mn,m.needsUpdate=!0,m};return{map:u(e,!0),roughnessMap:u(n,!1),bumpMap:u(s,!1)}}let Yn=null,$n=null,Oo=null;function r_(){return Yn||(Yn=hc(256,(i,t)=>{const e=Fr(i*18,t*42),n=Nr(i*70,t*70),s=Fr(i*4.5,t*3.2,3),r=Math.pow(Nr(i*9+t*40,t*2),8),o=.42+e*.28+s*.16-r*.22+n*.06,a=138+o*108,c=112+o*92,l=92+o*74;return{r:a,g:c,b:l,rough:110+e*90-r*40,bump:90+e*110+n*30-r*50}}),Yn.map.repeat.set(2.2,2.2),Yn.roughnessMap.repeat.copy(Yn.map.repeat),Yn.bumpMap.repeat.copy(Yn.map.repeat)),Yn}function o_(){return $n||($n=hc(256,(i,t)=>{const e=Math.abs(Math.sin(i*Math.PI*64))*.12+Math.abs(Math.sin(t*Math.PI*64))*.12,n=Fr(i*10,t*10,4),s=.28+n*.18+e;return{r:124+s*74,g:130+s*78,b:126+s*70,rough:170+e*80,bump:100+e*90+n*40}}),$n.map.repeat.set(3,3),$n.roughnessMap.repeat.copy($n.map.repeat),$n.bumpMap.repeat.copy($n.map.repeat)),$n}function a_(){return Oo||(Oo=hc(256,(i,t)=>{const e=Fr(i*6,t*8,4),n=Math.pow(Nr(i*40,t*40),6),s=212+e*24-n*22,r=196+e*18-n*18,o=184+e*14-n*14;return{r:s,g:r,b:o,rough:96+e*40,bump:118+e*28}})),Oo}function zo(i,t={}){const e=r_();return new Hs({color:i,map:e.map,roughnessMap:e.roughnessMap,bumpMap:e.bumpMap,bumpScale:.018,roughness:.58,metalness:.08,clearcoat:.16,clearcoatRoughness:.55,sheen:.22,sheenColor:new bt(6963240),sheenRoughness:.7,envMapIntensity:.7,flatShading:!1,...t})}function kl(i){const t=o_();return new Hs({color:i,map:t.map,roughnessMap:t.roughnessMap,bumpMap:t.bumpMap,bumpScale:.02,roughness:.86,metalness:.02,sheen:.18,sheenColor:new bt(3818552),sheenRoughness:.85,envMapIntensity:.4,flatShading:!1})}function Hl(i,t={}){const e=a_();return new Hs({color:i,map:e.map,roughnessMap:e.roughnessMap,bumpMap:e.bumpMap,bumpScale:.012,roughness:.48,metalness:0,sheen:.35,sheenColor:new bt(12611664),sheenRoughness:.55,envMapIntensity:.32,emissive:new bt(2757648),emissiveIntensity:.012,flatShading:!1,...t})}function Nt(i,t){return i.castShadow=!0,i.receiveShadow=!0,t.add(i),i}function Xi(i,t=16){const e=i.map(([n,s])=>new gt(n,s));return new Yr(e,t)}function Gl(i,t,e,n){const s=new rs;s.moveTo(-i*.5,0),s.lineTo(i*.5,0),s.lineTo(0,-t),s.closePath();const r=new Ti(s,{depth:e,bevelEnabled:!1});r.translate(0,0,-e*.5);const o=new A(r,n);return o.castShadow=!0,o}function Vl(i,t,e,n,s,r=0){const o=Math.hypot(n*1.7,e-t);for(const a of[-1,1]){const c=new A(new qt(.028,o,.016),s);c.position.set(0,(t+e)*.5,r),c.rotation.z=a*Math.atan2(n*.95,(e-t)*.5),c.castShadow=!0,i.add(c)}}function Wl(i,t,e,n){const s=new A(new qt(i,i,t),n);s.castShadow=!0;const r=new A(new qt(i*.42,i*.42,t+.008),new Hs({color:2761752,roughness:.7,metalness:.2,flatShading:!1}));return s.add(r),s}function Xl(i,t,e,n,s,r,o,a,c){for(let l=0;l<r;l++){const h=l/r*Math.PI*2,u=new A(new rn(o,0),l%2?c:a);u.position.set(t+Math.cos(h)*s,e+l%2*.012,n+Math.sin(h)*s),u.rotation.set(.2,h,.15),u.scale.set(1.15,.85,1.05),u.castShadow=!0,i.add(u)}}const qh=new I(0,-.008,.041);function ql(i,t,e,n){const s=new Dt,r=new A(new ee(n,e*.34,3,8),t);r.position.y=-e*.25,Nt(r,s);const o=new Dt;o.position.y=-e*.48;const a=new A(new ee(n*.88,e*.24,3,8),i);a.position.y=-e*.16,Nt(a,o),s.add(o);const c=new Dt;c.position.y=-e*.32;const l=new A(new ee(n*.74,e*.16,3,8),i);l.position.y=-e*.12,Nt(l,c);const h=new A(new ht(n*.6,6,5),i);return h.scale.set(.9,.5,.45),h.position.set(0,-e*.19,-n*.55),c.add(h),o.add(c),{root:s,mid:o,tip:c}}function je(i,t){if(!i)return;const e=i.userData.fingers,n=i.userData.thumb;if(!e)return;const s=Math.max(0,Math.min(1.15,t));for(let r=0;r<e.length;r++){const o=1+(r-1.5)*-.07,a=e[r];a.root.rotation.x=-s*.98*o,a.mid.rotation.x=-s*1.22*o,a.tip.rotation.x=-s*.82*o}n&&(n.root.rotation.x=-.55-s*.35,n.mid.rotation.x=-s*.55,n.tip.rotation.x=-s*.45)}function c_(i,t,e,n){const s=new Dt,r=new A(new ht(.047,12,10),t);r.scale.set(1.02,.98,.66),r.position.set(0,-.016,.01),Nt(r,s);const o=new A(new ee(.037,.022,4,10),e);o.position.set(0,.018,.006),Nt(o,s);const a=new Dt;a.name="grip",a.position.set(0,-.036,.012),a.rotation.z=0,s.add(a);const c=new A(new ee(.014,.058,4,8),t);c.rotation.z=Math.PI/2,c.position.set(0,.004,.014),Nt(c,a);const l=[];for(let u=0;u<4;u++){const d=.074-Math.abs(u-1.1)*.007,f=ql(i,t,d,.0118-u*9e-4);f.root.position.set(-.031+u*.0207,0,.012-Math.abs(u-1.5)*.005),a.add(f.root),l.push(f)}const h=ql(i,t,.064,.0136);return h.root.position.set(.04,.014,.03),h.root.rotation.z=-1.18,a.add(h.root),s.userData.fingers=l,s.userData.thumb=h,s.userData.gripPoint=qh.clone(),je(s,.22),s}function uc(){const i=new Dt;i.name="player",i.userData.locomotionY=0;const t=Hl(12618850),e=Hl(10646092,{roughness:.56}),n=we(3154714,{roughness:.94,sheen:.22,sheenColor:new bt(3811352),flatShading:!0}),s=zo(10117688),r=zo(5386780,{roughness:.78,clearcoat:.04}),o=zo(12618322,{roughness:.58,clearcoat:.12}),a=we(13215860,{roughness:.92,metalness:0,sheen:.22,sheenColor:new bt(13148272),sheenRoughness:.7,envMapIntensity:.12,flatShading:!0}),c=we(9268292,{roughness:.95,sheen:.16,sheenColor:new bt(9068600),flatShading:!0}),l=we(11307097,{roughness:.93,sheen:.18,sheenColor:new bt(11173960),flatShading:!0}),h=kl(5594455),u=kl(4081215);we(15265524,{metalness:.92,roughness:.18,clearcoat:.55,clearcoatRoughness:.12,envMapIntensity:1.35});const d=we(16186108,{metalness:.96,roughness:.1,clearcoat:.7,clearcoatRoughness:.08,emissive:13161696,emissiveIntensity:.38,envMapIntensity:1.55}),f=new A(new gn(.38,24),new pe({color:0,transparent:!0,opacity:.38,depthWrite:!1}));f.rotation.x=-Math.PI/2,f.position.y=.025,f.name="contactShadow",i.add(f);const m=new Dt;m.name="playerHips",i.add(m);const v=V=>{const tt=new Dt;tt.name=V<0?"legL":"legR",tt.position.set(V*.16,.94,0);const et=new A(new ht(.1,14,12),h);et.scale.set(1.04,1,1.02),Nt(et,tt);const It=new A(Xi([[.096,-.04],[.1,-.14],[.092,-.26],[.08,-.36],[.07,-.42]],14),h);Nt(It,tt);const _t=new A(new ht(.075,12,9),h);_t.scale.set(1,1.7,.85),_t.position.set(0,-.2,.04),Nt(_t,tt);const b=new A(new ht(.07,12,9),u);b.scale.set(1,1.6,.8),b.position.set(0,-.18,-.04),Nt(b,tt);const _=new Dt;_.name=V<0?"shinL":"shinR",_.position.set(0,-.44,0);const P=new A(new ht(.076,14,12),h);P.scale.set(1,.95,1),Nt(P,_);const F=new A(new ht(.04,10,8),h);F.scale.set(1.1,1.1,.7),F.position.set(0,-.01,.062),Nt(F,_);const K=new A(Xi([[.07,-.02],[.072,-.08],[.064,-.14],[.058,-.17]],14),u);K.position.set(0,0,-.012),Nt(K,_);const X=new A(new ht(.056,12,9),u);X.scale.set(1.05,1.5,.9),X.position.set(0,-.09,-.04),Nt(X,_);const xt=new A(new Qt(.09,.098,.1,14),s);xt.position.set(0,-.2,-.016),Nt(xt,_),Vl(_,-.15,-.25,.094,r,.02);const mt=new A(new We(.092,.022,6,10),a);mt.rotation.x=Math.PI/2,mt.position.set(0,-.14,.02),_.add(mt);const yt=new A(new We(.082,.018,6,10),c);yt.rotation.x=Math.PI/2,yt.position.set(0,-.24,0),_.add(yt);const kt=new A(new Qt(.048,.058,.14,12),r);kt.position.set(0,-.36,-.006),Nt(kt,_);const at=new A(new Qt(.052,.055,.045,12),s);at.position.set(0,-.34,-.006),Nt(at,_);const St=new Dt;St.name=V<0?"footL":"footR",St.position.set(0,-.48,.04);const Vt=new A(new ht(.04,12,10),r);Nt(Vt,St);const Wt=new A(new ht(.046,10,8),r);Wt.position.set(0,-.016,-.05),Nt(Wt,St);const Lt=new A(new ee(.05,.16,5,12),s);Lt.rotation.x=Math.PI/2,Lt.position.set(0,-.004,.12),Lt.scale.set(1.2,1,.68),Nt(Lt,St);const jt=new A(new ee(.052,.16,4,10),we(1840144,{roughness:.96}));return jt.rotation.x=Math.PI/2,jt.scale.set(1.12,1,.36),jt.position.set(0,-.032,.1),St.add(jt),_.add(St),tt.add(_),tt};m.add(v(-1)),m.add(v(1));const g=new A(Xi([[.2,-.1],[.24,-.02],[.22,.1]],16),s);g.position.y=.92,g.scale.set(1,1,.86),Nt(g,m);for(const[V,tt]of[[.195,0],[-.19,Math.PI]]){const et=Gl(.26,.2,.038,r);et.position.set(0,.86,V),et.rotation.set(Math.sign(V)*.28,tt,0),m.add(et)}for(const V of[-1,1]){const tt=Gl(.18,.18,.032,o);tt.position.set(V*.24,.86,0),tt.rotation.order="ZYX",tt.rotation.set(0,V*Math.PI*.5,-V*.24),m.add(tt)}const p=new Dt;p.name="playerTorso",p.position.y=1.18,i.add(p);const S=new A(Xi([[.205,-.3],[.215,-.2],[.23,-.06],[.245,.1],[.235,.22],[.15,.32]],14),s);S.scale.set(1.08,1,.88),Nt(S,p);const w=new A(new ht(.2,14,12),s);w.scale.set(1.2,.95,.5),w.position.set(0,.06,-.1),Nt(w,p);for(const V of[-1,1]){const tt=new A(new ht(.085,14,12),s);tt.scale.set(1.2,.72,.5),tt.position.set(V*.1,.1,.16),Nt(tt,p)}const x=new A(new ht(.12,12,10),s);x.scale.set(1.1,1,.36),x.position.set(0,-.14,.16),Nt(x,p);const U=new A(new We(.225,.03,10,18),r);U.rotation.x=Math.PI/2,U.scale.set(1.04,1,.9),U.position.y=-.26,p.add(U);const T=Wl(.1,.028,.042,d);T.position.set(0,-.26,.225),p.add(T);const R=(V,tt)=>{const et=new A(new qt(.078,.56,.06),r);et.position.set(0,.02,tt),et.rotation.set(Math.sign(tt)*.09,0,V),et.castShadow=!0,p.add(et)};R(.5,.18),R(-.5,.18),R(.5,-.175),R(-.5,-.175);const D=new A(new qt(.15,.15,.03),r);D.position.set(0,.05,.205),p.add(D);const y=Wl(.14,.038,.058,d);y.name="chestBuckle",y.position.set(0,.05,.24),p.add(y);const M=.31;for(const V of[-1,1]){const tt=new A(new ht(.11,12,9),t);tt.scale.set(1.35,.5,.7),tt.rotation.z=V*.42,tt.position.set(V*.17,.24,-.01),Nt(tt,p);const et=new A(new ht(.1,8,6),o);et.scale.set(1.2,.5,1.05),et.position.set(V*(M-.03),.18,.005),et.rotation.z=V*-.34,Nt(et,p);const It=new A(new ht(.108,12,9,0,Math.PI*2,0,Math.PI*.5),o);It.scale.set(1.06,.9,1.02),It.rotation.z=V*-.38,It.position.set(V*(M-.01),.13,-.004),Nt(It,p);for(let _t=0;_t<3;_t++){const b=new A(new ht(.011,6,5),d),_=-.5+_t*.5;b.position.set(V*(M+Math.cos(_)*.02),.19,Math.sin(_)*.08),p.add(b)}}const C=new A(new We(.17,.055,8,12),l);C.rotation.x=Math.PI/2,C.position.set(0,.28,.01),C.scale.set(1.08,1,.92),Nt(C,p),Xl(p,0,.29,.01,.18,8,.042,a,c);const z=new A(new ee(.07,.1,6,14),t);z.position.set(0,.35,.012),Nt(z,p);for(const V of[-1,1]){const tt=new A(new ee(.02,.09,4,8),e);tt.position.set(V*.045,.34,.058),tt.rotation.set(-.18,0,V*.3),Nt(tt,p)}const k=V=>{const tt=new Dt;tt.name=V<0?"clavL":"clavR",tt.position.set(V*.2,.14,0);const et=new Dt;et.name=V<0?"armL":"armR",et.position.set(V*(M-.2),0,0);const It=new A(new ht(.086,14,11),t);It.scale.set(1.04,1.02,1),It.position.set(V*.004,-.01,-.004),Nt(It,et);const _t=new A(Xi([[.07,-.02],[.076,-.1],[.07,-.19],[.058,-.29],[.05,-.33]],12),t);Nt(_t,et);const b=new A(new ht(.058,12,9),t);b.scale.set(1,1.6,.8),b.position.set(V*-.004,-.15,.024),Nt(b,et);const _=new Dt;_.name=V<0?"forearmL":"forearmR",_.position.set(0,-.34,0);const P=new A(new ht(.06,12,9),t);P.scale.set(1,.95,1.05),Nt(P,_);const F=new A(Xi([[.062,-.03],[.072,-.08],[.068,-.15],[.058,-.22],[.05,-.27]],12),s);F.position.set(0,0,.008),Nt(F,_),Vl(_,-.07,-.21,.066,r,.008);const K=new A(new We(.07,.022,6,10),a);K.rotation.x=Math.PI/2,K.position.set(0,-.045,.008),_.add(K),Xl(_,0,-.04,.008,.066,6,.024,a,c);const X=new A(new We(.052,.014,6,10),r);X.rotation.x=Math.PI/2,X.position.set(0,-.25,.008),_.add(X);const xt=c_(t,s,r);return xt.name=V<0?"handL":"handR",xt.position.set(0,-.28,.02),_.add(xt),et.add(_),tt.add(et),tt};p.add(k(-1)),p.add(k(1));const H=new Dt;H.name="playerHead",H.position.set(0,.5,.015),H.scale.setScalar(.93);const Z=we(3877663,{roughness:.95,sheen:.18,sheenColor:new bt(5455916)}),W=new A(new ht(.163,22,18),t);W.scale.set(.95,1.07,.9),W.position.z=-.012,Nt(W,H);const st=new A(new ht(.13,18,14),t);st.scale.set(1,1.12,.55),st.position.set(0,-.01,.07),Nt(st,H);const $=new A(new ee(.022,.1,5,12),t);$.rotation.z=Math.PI/2,$.scale.set(1,1,.8),$.position.set(0,.05,.132),Nt($,H);const ft=new A(new ht(.114,16,13),e);ft.scale.set(1.02,.74,.9),ft.position.set(0,-.093,.03),Nt(ft,H);const Mt=new A(new ht(.114,16,13),Z);Mt.scale.set(1.06,.78,1.02),Mt.position.set(0,-.11,.046),Nt(Mt,H);const dt=new A(new ht(.06,12,9),Z);dt.scale.set(1.15,.95,.9),dt.position.set(0,-.15,.095),H.add(dt);for(const V of[-1,1]){const tt=new A(new ht(.024,8,6),Z);tt.scale.set(.3,1.7,.7),tt.position.set(V*.147,-.024,-.012),tt.rotation.z=V*.12,H.add(tt);const et=new A(new ee(.011,.028,3,8),Z);et.rotation.z=Math.PI/2,et.rotation.y=V*.35,et.position.set(V*.02,-.074,.164),H.add(et)}const ut=new A(new ee(.013,.034,4,10),t);ut.rotation.x=-.3,ut.position.set(0,.008,.15),Nt(ut,H);const ct=new A(new ht(.023,12,10),t);ct.scale.set(1,.9,.95),ct.position.set(0,-.03,.165),Nt(ct,H);for(const V of[-1,1]){const tt=new A(new ht(.015,10,8),t);tt.scale.set(1,.85,.9),tt.position.set(V*.022,-.038,.152),H.add(tt);const et=new A(new ht(.0055,8,6),e);et.position.set(V*.012,-.047,.166),H.add(et)}for(const V of[-1,1]){const tt=new A(new ee(.011,.05,3,8),Z);tt.rotation.z=Math.PI/2+V*-.18,tt.rotation.x=-.3,tt.position.set(V*.052,.066,.146),H.add(tt);const et=new A(new ht(.021,14,11),we(15129805,{roughness:.3}));et.position.set(V*.051,.018,.128),H.add(et);const It=new A(new ht(.0122,10,8),we(4864546,{roughness:.3,clearcoat:.6,clearcoatRoughness:.1}));It.position.set(V*.051,.018,.1445),H.add(It);const _t=new A(new ht(.0058,8,6),we(657414,{roughness:.25}));_t.position.set(V*.051,.018,.153),H.add(_t);const b=new A(new ht(.024,12,9,0,Math.PI*2,0,Math.PI*.5),t);b.scale.set(1.06,1,.92),b.rotation.x=-.5,b.position.set(V*.051,.024,.126),H.add(b);const _=new A(new ht(.023,12,9,0,Math.PI*2,Math.PI*.62,Math.PI*.38),e);_.scale.set(1.06,1,.9),_.rotation.x=.35,_.position.set(V*.051,.014,.126),H.add(_);const P=new A(new ht(.03,10,8),t);P.scale.set(.36,1.05,.62),P.position.set(V*.15,.006,-.012),H.add(P);const F=new A(new ht(.014,8,6),t);F.scale.set(.4,.8,.65),F.position.set(V*.149,-.026,-.01),H.add(F)}const G=new A(new ee(.0045,.04,3,8),we(4858908,{roughness:.6}));G.rotation.z=Math.PI/2,G.position.set(0,-.098,.163),H.add(G);const Q=new A(new ee(.0075,.03,3,8),e);Q.rotation.z=Math.PI/2,Q.position.set(0,-.109,.161),H.add(Q);const lt=new A(new ht(.171,16,12,0,Math.PI*2,0,Math.PI*.47),n);lt.position.set(0,.052,-.016),lt.scale.set(1.06,1,1.1),Nt(lt,H);const it=[[0,.15,.062,.082,.5],[-.078,.142,.05,.074,.35],[.078,.142,.05,.074,-.35],[-.128,.098,-.01,.07,.2],[.128,.098,-.01,.07,-.2],[-.072,.122,-.108,.078,.1],[.072,.122,-.108,.078,-.1],[0,.1,-.152,.082,0]];for(const[V,tt,et,It,_t]of it){const b=new A(new rn(It,0),n);b.position.set(V,tt,et),b.rotation.set(-.4+et*1.2,V*1.6,_t),b.scale.set(1.1,.52,1.25),H.add(b)}const pt=new A(new rn(.082,0),n);pt.scale.set(1.6,.3,.62),pt.rotation.set(.42,0,.12),pt.position.set(.014,.125,.098),H.add(pt),p.add(H);const wt=new Dt;wt.name="toolRoot",wt.visible=!1,p.getObjectByName("armR").getObjectByName("handR").getObjectByName("grip").add(wt),dc(wt,null);const rt=$h();rt.name="tool_hatchet",rt.visible=!1,wt.add(rt);const L=Zh();L.name="tool_pickaxe",L.visible=!1,wt.add(L);const At=Kh();return At.name="tool_sword",At.visible=!1,wt.add(At),i}function pn(i=12766940,t={}){return we(i,{metalness:.42,roughness:.28,clearcoat:.5,clearcoatRoughness:.2,envMapIntensity:1,...t})}function Yh(i,t,e){const n=new Dt,s=we(6964256,{roughness:.78,clearcoat:.1,clearcoatRoughness:.7}),r=new A(new Qt(t,t*1.06,i,12),s);r.position.y=i*.5,Nt(r,n);const o=new A(new ht(e,10,8),s);o.scale.set(1,1.35,1),Nt(o,n);const a=we(3810324,{roughness:.88});for(let c=0;c<5;c++){const l=new A(new We(t*1.12,.007,5,10),a);l.rotation.x=Math.PI/2,l.rotation.z=c*.4,l.position.y=.03+c*.032,n.add(l)}return n}function $h(){const i=new Dt,t=Yh(.46,.021,.03);t.position.y=-.06,i.add(t);const e=new Dt;e.position.y=.36;const n=new A(new Qt(.034,.034,.11,10),pn(9411496));n.scale.set(.68,1,1),Nt(n,e);const s=new rs;s.moveTo(0,-.046),s.lineTo(.075,-.058),s.lineTo(.155,-.112),s.lineTo(.192,-.092),s.lineTo(.2,.082),s.lineTo(.15,.096),s.lineTo(.065,.054),s.lineTo(0,.046),s.closePath();const r=new A(new Ti(s,{depth:.008,bevelEnabled:!0,bevelSize:.013,bevelThickness:.017,bevelSegments:2}),pn(11714768));r.rotation.y=-Math.PI/2,r.position.set(.021,0,0),Nt(r,e);const o=new A(new qt(.007,.185,.01),we(15397627,{metalness:.22,roughness:.16,clearcoat:.6,envMapIntensity:.9}));o.name="toolEdge",o.position.set(0,-.006,.206),o.rotation.x=.06,e.add(o);const a=new A(new qt(.044,.058,.038),pn(9674926,{roughness:.34}));a.name="toolHeel",a.position.set(0,.004,-.042),Nt(a,e);const c=new A(new qt(.038,.01,.014),pn(6187638,{roughness:.5}));return c.position.set(0,.052,.004),e.add(c),i.add(e),i}function Zh(){const i=new Dt,t=Yh(.52,.021,.03);t.position.y=-.07,i.add(t);const e=new Dt;e.position.y=.43;const n=new A(new Qt(.034,.038,.09,10),pn(9082274));Nt(n,e);for(let a=0;a<6;a++){const c=a/5,l=new A(new qt(.058-c*.034,.056-c*.031,.062-c*.032),pn(10135736-a*197379));l.position.set(0,.02-c*c*.125,.055+c*.2),l.rotation.x=c*.72,Nt(l,e)}const s=new A(new Ie(.018,.085,6),we(15002868,{metalness:.24,roughness:.18,clearcoat:.5,envMapIntensity:.9}));s.name="toolEdge",s.rotation.x=Math.PI*.66,s.position.set(0,-.128,.292),Nt(s,e);const r=new A(new qt(.048,.048,.17),pn(9082274));r.name="toolHeel",r.position.set(0,.014,-.088),r.rotation.x=-.22,Nt(r,e);const o=new A(new qt(.05,.012,.02),we(14674162,{metalness:.24,roughness:.18,clearcoat:.5,envMapIntensity:.9}));return o.position.set(0,.042,-.175),e.add(o),i.add(e),i}function Kh(){const i=new Dt,t=we(14201944,{metalness:.78,roughness:.26,clearcoat:.4,envMapIntensity:1.2}),e=new A(new Qt(.019,.023,.17,10),we(4860434,{roughness:.8}));Nt(e,i);const n=we(3021840,{roughness:.9});for(let f=0;f<7;f++){const m=new A(new We(.024,.006,5,10),n);m.rotation.x=Math.PI/2,m.rotation.y=f*.3,m.position.y=-.062+f*.021,i.add(m)}const s=new A(new ht(.031,12,10),t);s.name="toolHeel",s.scale.set(1,.85,1),s.position.y=-.098,Nt(s,i);const r=new A(new Qt(.02,.026,.016,10),t);r.position.y=-.076,i.add(r);const o=new rs;o.moveTo(-.1,0),o.quadraticCurveTo(-.05,.034,0,.018),o.quadraticCurveTo(.05,.034,.1,0),o.quadraticCurveTo(.05,-.02,0,-.016),o.quadraticCurveTo(-.05,-.02,-.1,0);const a=new A(new Ti(o,{depth:.036,bevelEnabled:!0,bevelSize:.005,bevelThickness:.004,bevelSegments:1}),t);a.position.set(0,.092,-.018),Nt(a,i);const c=new A(new qt(.042,.05,.026),pn(11187908));c.position.y=.128,Nt(c,i);const l=pn(13951212,{roughness:.14,clearcoat:.6,emissive:1911868,emissiveIntensity:.1}),h=6;for(let f=0;f<h;f++){const m=f/h,v=.078-m*.03,g=new A(new qt(v,.58/h+.004,.02-m*.006),l);g.position.y=.17+.58/h*(f+.5),Nt(g,i)}const u=new A(new qt(.016,.44,.024),pn(10465474,{roughness:.3,clearcoat:.3}));u.position.y=.4,i.add(u);for(const f of[-1,1]){const m=new A(new qt(.008,.58,.012),pn(16054783,{roughness:.08,clearcoat:.75}));m.position.set(f*.032,.46,0),i.add(m)}const d=new A(new Ie(.034,.12,4),l);return d.name="toolEdge",d.rotation.y=Math.PI/4,d.scale.set(1,1,.42),d.position.y=.81,Nt(d,i),i}function dc(i,t){i.position.copy(qh),t==="hatchet"?i.rotation.set(.12,-.14,-Math.PI/2):t==="pickaxe"?i.rotation.set(.08,-.1,-Math.PI/2):i.rotation.set(Math.PI/2+.7,-.1,-Math.PI/2)}function Gs(i){const t=i.getObjectByName("toolRoot");if(!t||!t.visible)return;const e=t.getObjectByName("tool_sword"),n=t.getObjectByName("tool_hatchet"),s=t.getObjectByName("tool_pickaxe"),r=e?.visible?"sword":n?.visible?"hatchet":s?.visible?"pickaxe":null;dc(t,r)}function Ne(i,t){const e=i.getObjectByName("toolRoot");if(e){e.visible=t!==null;for(const n of["tool_hatchet","tool_pickaxe","tool_sword"]){const s=e.getObjectByName(n);s&&(s.visible=n===`tool_${t}`)}dc(e,t)}}function Ri(i){const t=Math.max(0,Math.min(1,i));return t*t*(3-2*t)}function On(i){const t=Math.max(0,Math.min(1,i));return t<.5?16*t*t*t*t*t:1-Math.pow(-2*t+2,5)/2}function j(i,t){return i.getObjectByName(t)}function Or(i,t={}){if(!i)return;const e=i.userData.rest;e&&(i.position.set(e.x+(t.x??0),e.y+(t.y??0),e.z+(t.z??0)),i.rotation.set(e.rx+(t.rx??0),e.ry,e.rz))}function Jh(i){const t=Math.sin(i),e=Math.cos(i);return t*(.62+.38*Math.abs(e))}function Vs(i,t){i.userData.locomotionY=t}function De(i){i&&i.rotation.set(0,0,0)}function se(i,t,e){return i+(t-i)*e}function Ht(i,t,e,n){i&&i.rotation.set(t,e,n)}function bi(i){return Math.max(0,i)}function fc(i,t){return!!j(i,t)?.visible}const jh=["playerHips","playerTorso","playerHead","clavL","clavR","armL","forearmL","handL","armR","forearmR","handR","legL","shinL","footL","legR","shinR","footR"],Oa=[0,0,0];function l_(i,t,e){const n=i??Oa,s=t??Oa;return[se(n[0],s[0],e),se(n[1],s[1],e),se(n[2],s[2],e)]}function Jn(i,t,e){const n={};for(const s of jh)(i[s]||t[s])&&(n[s]=l_(i[s],t[s],e));return n.gripR=se(i.gripR??.25,t.gripR??.25,e),n.gripL=se(i.gripL??.25,t.gripL??.25,e),n.lift=se(i.lift??0,t.lift??0,e),n}function Qh(i,t){for(const s of jh){const r=t[s]??Oa,o=j(i,s);o&&o.rotation.set(s==="shinL"||s==="shinR"?bi(r[0]):r[0],r[1],r[2])}const e=j(i,"playerHips");e&&e.position.set(0,0,0);const n=j(i,"playerTorso");n&&(n.position.x=0,n.position.z=0,n.scale.set(1,1,1)),je(j(i,"handR"),t.gripR??.25),je(j(i,"handL"),t.gripL??.25),Gs(i),Vs(i,t.lift??0)}const h_=["playerHips","playerTorso","playerHead","clavL","clavR","armL","armR","forearmL","forearmR","handL","handR","legL","legR","shinL","shinR","footL","footR"];class u_{prev=new Map;reset(){this.prev.clear()}apply(t,e,n=18){const s=1-Math.exp(-n*Math.max(0,e));for(const r of h_){const o=j(t,r);if(!o)continue;const a=this.prev.get(r);if(!a){this.prev.set(r,o.rotation.clone());continue}o.rotation.set(a.x+(o.rotation.x-a.x)*s,a.y+(o.rotation.y-a.y)*s,a.z+(o.rotation.z-a.z)*s),a.copy(o.rotation)}Gs(t)}}function Zn(i){De(j(i,"playerHips")),De(j(i,"legL")),De(j(i,"legR")),De(j(i,"shinL")),De(j(i,"shinR")),De(j(i,"footL")),De(j(i,"footR")),De(j(i,"clavL")),De(j(i,"clavR")),De(j(i,"armL")),De(j(i,"armR")),De(j(i,"forearmL")),De(j(i,"forearmR")),De(j(i,"handL")),De(j(i,"handR")),De(j(i,"playerHead")),De(j(i,"playerTorso"));const t=j(i,"playerHips");t&&t.position.set(0,0,0);const e=j(i,"playerTorso");e&&(e.position.x=0,e.position.z=0,e.scale.set(1,1,1)),je(j(i,"handR"),fc(i,"tool_sword")?.96:.22),je(j(i,"handL"),.22),Gs(i),i.rotation.z=0,i.rotation.x=0,Vs(i,0)}function xi(i,t,e=!1){if(fc(i,"tool_sword")){d_(i,t);return}const n=Math.sin(t*1.35)*.018,s=Math.sin(t*.55)*.018,r=Math.sin(t*.37+1.1)*.012,o=Math.sin(t*.28)*.08+Math.sin(t*.11)*.04,a=j(i,"playerHips"),c=j(i,"playerTorso");a&&(a.rotation.set(0,s*.12,s*.1),a.position.set(s*.08,0,0)),c&&(c.rotation.set(.015+n*.55,s*.1,s*.04-r*.06),c.position.x=0,c.position.z=0,c.scale.set(1+n*.008,1+n*.014,1+n*.006)),Ht(j(i,"playerHead"),-.04+n*.28,o,-s*.06),Ht(j(i,"clavL"),.02,0,-.02),Ht(j(i,"clavR"),.02,0,.02),Ht(j(i,"armL"),.08+n*.05,.06,-.13+r*.08),Ht(j(i,"forearmL"),-.24+r*.06,.08,-.03),Ht(j(i,"handL"),.06,.06,.02),Ht(j(i,"armR"),.08-n*.05,-.06,.13-r*.08),Ht(j(i,"forearmR"),-.24-r*.06,-.08,.03),Ht(j(i,"handR"),.06,-.06,-.02),Ht(j(i,"legL"),.02+s*.04,0,.02),Ht(j(i,"legR"),-.01-s*.04,0,-.02),Ht(j(i,"shinL"),bi(.06+Math.max(0,s)*.04),0,0),Ht(j(i,"shinR"),bi(.08+Math.max(0,-s)*.04),0,0),Ht(j(i,"footL"),.02,0,0),Ht(j(i,"footR"),.03,0,0),je(j(i,"handL"),.2),je(j(i,"handR"),.2),Vs(i,n*.02)}const tu={playerHips:[.02,-.1,.02],playerTorso:[.08,-.2,.04],playerHead:[-.04,.18,-.04],clavR:[.1,-.12,-.1],clavL:[.04,.08,.08],armR:[-.075,.32,.533],forearmR:[-1.887,-.185,.06],handR:[.622,-1.425,-.209],armL:[-.7,.15,-.3],forearmL:[-1.15,.1,0],handL:[.1,.2,.1],legL:[-.22,.06,.05],shinL:[.3,0,0],footL:[.06,.1,0],legR:[.12,-.04,-.04],shinR:[.2,0,0],footR:[.04,-.08,0],gripR:.96,gripL:.3,lift:.02};function d_(i,t){const e=Math.sin(t*1.4)*.016,n=Math.sin(t*.7)*.012,s=Math.sin(t*.43+.6)*.02,r=tu;Ht(j(i,"playerHips"),r.playerHips[0],r.playerHips[1]+n,r.playerHips[2]);const o=j(i,"playerHips");o&&(o.position.x=.02);const a=j(i,"playerTorso");a&&(a.rotation.set(r.playerTorso[0]+e*.5,r.playerTorso[1]+n*.5,r.playerTorso[2]),a.position.x=0,a.scale.set(1+e*.008,1+e*.012,1)),Ht(j(i,"playerHead"),r.playerHead[0]+e*.2,r.playerHead[1],r.playerHead[2]),Ht(j(i,"clavL"),...r.clavL),Ht(j(i,"clavR"),...r.clavR),Ht(j(i,"armL"),r.armL[0]+e*.08,r.armL[1],r.armL[2]),Ht(j(i,"forearmL"),...r.forearmL),Ht(j(i,"handL"),...r.handL),Ht(j(i,"armR"),r.armR[0]+s*.6,r.armR[1],r.armR[2]),Ht(j(i,"forearmR"),r.forearmR[0]-s*.5,r.forearmR[1],r.forearmR[2]),Ht(j(i,"handR"),r.handR[0]+s,r.handR[1],r.handR[2]+n*.6),Ht(j(i,"legL"),...r.legL),Ht(j(i,"legR"),...r.legR),Ht(j(i,"shinL"),bi(r.shinL[0]),0,0),Ht(j(i,"shinR"),bi(r.shinR[0]),0,0),Ht(j(i,"footL"),...r.footL),Ht(j(i,"footR"),...r.footR),je(j(i,"handR"),.97),je(j(i,"handL"),.3),Gs(i),Vs(i,e*.02)}const f_=.94,eu=.82;function pc(i){return Ri((Math.max(.25,i)-.3)/.68)}function za(i){return se(3.4,7.2,pc(i))}function p_(i){const t=se(.3,eu,pc(i));return 2*f_*Math.sin(t)*.92}function zr(i,t,e=.85,n=1){const s=Math.max(0,Math.min(1,n)),r=Math.max(.25,e),o=pc(r),a=Ri((r-.62)/.4),c=se(.3,eu,o)*s,l=fc(i,"tool_sword"),h=Math.sin(t),u=Math.sin(t+Math.PI),d=Math.max(0,-Math.cos(t)),f=Math.max(0,-Math.cos(t+Math.PI)),m=Math.max(0,Math.cos(t)),v=Math.max(0,Math.cos(t+Math.PI)),g=Math.max(0,h)*d,p=Math.max(0,u)*f,S=Math.max(0,-h)*(1-m),w=Math.max(0,-u)*(1-v),x=Math.cos(t*2),U=se(x*.016,-x*.052,a)*s,T=se(.72,1.95,a),R=se(.08,.42,a),D=j(i,"playerHips"),y=j(i,"playerTorso");D&&(D.rotation.y=h*se(.09,.2,a)*s,D.rotation.z=-Math.cos(t)*se(.03,.075,a)*s,D.rotation.x=se(0,.1,a)*s,D.position.x=-h*.018*s);const M=se(.5,.95,a);Ht(j(i,"legL"),h*c-d*M,0,.03-a*.02),Ht(j(i,"legR"),u*c-f*M,0,-.03+a*.02),Ht(j(i,"shinL"),bi(.12+d*T+g*.4+S*.18+m*R),0,0),Ht(j(i,"shinR"),bi(.12+f*T+p*.4+w*.18+v*R),0,0);const C=se(.34,.1,a),z=se(.26,.62,a);Ht(j(i,"footL"),-d*C+m*Math.max(0,h)*z+a*.12,0,0),Ht(j(i,"footR"),-f*C+v*Math.max(0,u)*z+a*.12,0,0);const k=se(.05,.16,a);if(Ht(j(i,"clavL"),-h*k*s,0,-.04),Ht(j(i,"clavR"),-u*k*s,0,.04),l){const Z=Math.max(0,u)*se(.08,.22,a);Ht(j(i,"armL"),-h*se(.55,1.05,a)*s+.1,.06,-.06),Ht(j(i,"forearmL"),se(-.28,-1.35,a)-Math.max(0,h)*.2,.04,0),Ht(j(i,"handL"),.06,.04,.04),Ht(j(i,"armR"),.22+Z*.35,.08,.14),Ht(j(i,"forearmR"),-.62-Z*.4,-.06,.04),Ht(j(i,"handR"),.18+Z*.2,-1.18,-.26),je(j(i,"handR"),.96),je(j(i,"handL"),.22)}else{const Z=c*se(1,.85,a),W=se(0,1,a);Ht(j(i,"armL"),-h*Z+se(.08,.3,a),.04+W*.16,-.12-W*.04),Ht(j(i,"armR"),-u*Z+se(.08,.3,a),-.04-W*.16,.12+W*.04),Ht(j(i,"forearmL"),se(-.35-Math.max(0,h)*.4,-1.52-Math.max(0,-h)*.35,a),.06,0),Ht(j(i,"forearmR"),se(-.35-Math.max(0,u)*.4,-1.52-Math.max(0,-u)*.35,a),-.06,0),Ht(j(i,"handL"),-h*.12,.04,.04+W*.2),Ht(j(i,"handR"),-u*.12,-.04,-.04-W*.2),je(j(i,"handL"),se(.28,.72,a)),je(j(i,"handR"),se(.28,.72,a))}const H=se(.03,.26,a)*s;y&&(y.rotation.y=-h*se(.1,.2,a)*s,y.rotation.x=H,y.rotation.z=h*.03*s,y.position.x=-h*.01*s,y.position.z=0,y.scale.set(1,1,1)),Ht(j(i,"playerHead"),-H*.65-Math.max(0,-x)*.03,h*.05*s,-h*.02*s),Gs(i),Vs(i,U)}function nu(i,t){const e=Math.max(0,Math.min(1,t)),n=tu,s={playerHips:[.04,-.32,-.05],playerTorso:[-.12,-.55,-.08],playerHead:[-.1,.32,.06],clavR:[-.16,-.28,-.32],clavL:[.08,.16,.16],armR:[-2.23,-.47,1.1],forearmR:[-1.77,.14,0],handR:[.8,-1.9,-.8],armL:[-.55,.2,-.28],forearmL:[-1.05,.12,.08],handL:[.1,.16,.1],legL:[-.28,.08,.06],shinL:[.32,0,0],footL:[.02,.12,0],legR:[.16,-.06,-.05],shinR:[.22,0,0],footR:[.1,-.1,0],gripR:.96,gripL:.3,lift:.04},r={playerHips:[0,.26,.06],playerTorso:[.22,.48,.1],playerHead:[.1,.2,-.08],clavR:[.18,.14,.12],clavL:[.04,.06,.1],armR:[-1.7,-.48,-.74],forearmR:[-.65,-.5,0],handR:[.72,-1.9,-.25],armL:[-.35,.14,.22],forearmL:[-.7,.08,.06],handL:[.08,.08,.12],legL:[-.4,.06,-.04],shinL:[.22,0,0],footL:[.08,.08,0],legR:[.26,-.04,.04],shinR:[.4,0,0],footR:[-.04,-.06,0],gripR:1.08,gripL:.34,lift:.05},o={...r,playerHips:[-.02,.32,.06],playerTorso:[.18,.62,.12],playerHead:[.12,.28,-.08],clavR:[.2,.18,.12],clavL:[.04,.08,.12],armR:[-1.56,-1,-.9],forearmR:[-.98,-.5,0],handR:[.78,-1.9,.04],armL:[-.2,.16,.26],forearmL:[-.55,.08,.06],gripR:.98,lift:.03};let a;e<.36?a=Jn(n,s,On(e/.36)):e<.52?a=Jn(s,r,Math.pow((e-.36)/.16,2.1)):e<.64?a=Jn(r,o,Ri((e-.52)/.12)):a=Jn(o,n,On((e-.64)/.36)),Qh(i,a)}function Ba(i,t,e){const n=t%1,s=e==="tree",r=s?{playerHips:[.02,-.1,0],playerTorso:[.12,-.16,.04],playerHead:[.08,.12,0],clavR:[.06,-.1,-.08],clavL:[.04,.08,.1],armR:[.23,-.11,-.06],forearmR:[-1.43,.3,.06],handR:[-.04,-.56,-.4],armL:[.18,.16,.26],forearmL:[-.62,.1,.06],handL:[.1,.06,.08],legL:[-.12,.04,.04],shinL:[.24,0,0],legR:[.1,-.04,-.04],shinR:[.2,0,0],footL:[.04,.06,0],footR:[.04,-.06,0],gripR:.96,gripL:.28}:{playerHips:[.03,-.06,0],playerTorso:[.18,-.1,.02],playerHead:[.14,.06,0],clavR:[.08,-.06,-.06],clavL:[.04,.06,.1],armR:[.18,-.2,-.03],forearmR:[-1.35,.3,.06],handR:[-.07,-.58,-.45],armL:[.24,.14,.22],forearmL:[-.76,.08,.06],handL:[.12,.06,.08],legL:[-.1,.04,.04],shinL:[.3,0,0],legR:[.12,-.04,-.04],shinR:[.28,0,0],footL:[.04,0,0],footR:[.04,0,0],gripR:.96,gripL:.28},o=s?{playerHips:[.02,-.2,-.04],playerTorso:[-.12,-.32,-.06],playerHead:[-.02,.24,.04],clavR:[-.1,-.18,-.26],clavL:[.1,.12,.16],armR:[-2.49,.35,.03],forearmR:[-1.25,-.3,.06],handR:[.5,-1.9,-.45],armL:[.4,.26,.42],forearmL:[-.72,.12,.08],handL:[.14,.1,.1],legL:[-.22,.06,.05],shinL:[.28,0,0],legR:[.16,-.05,-.05],shinR:[.18,0,0],footL:[.02,.06,0],footR:[.08,-.06,0],gripR:.9,gripL:.26,lift:.045}:{playerHips:[.02,-.04,0],playerTorso:[-.2,-.08,0],playerHead:[-.14,.06,0],clavR:[-.18,-.04,-.22],clavL:[.08,.1,.18],armR:[-1.94,.76,-.6],forearmR:[-.1,-.27,.06],handR:[.5,-.94,-.45],armL:[-.44,.2,.36],forearmL:[-1.05,.12,.08],handL:[.12,.08,.1],legL:[-.14,.04,.04],shinL:[.14,0,0],legR:[.12,-.04,-.04],shinR:[.12,0,0],footL:[.1,0,0],footR:[.12,0,0],gripR:.9,gripL:.26,lift:.075},a=s?{playerHips:[0,.14,.05],playerTorso:[.4,.2,.08],playerHead:[.26,.1,-.04],clavR:[.18,.1,.12],clavL:[.02,.04,.1],armR:[-.57,.15,-.51],forearmR:[-1.36,-.3,.06],handR:[.5,-1.62,-.45],armL:[-.22,.12,.3],forearmL:[-.42,.06,.04],handL:[.06,.04,.12],legL:[-.34,.05,-.04],shinL:[.34,0,0],legR:[.24,-.04,.04],shinR:[.46,0,0],footL:[.06,.06,0],footR:[-.02,-.04,0],gripR:1.1,gripL:.34,lift:-.035}:{playerHips:[.14,.04,0],playerTorso:[.52,.06,.02],playerHead:[.3,.04,0],clavR:[.22,.04,.1],clavL:[.02,.04,.1],armR:[-1.01,-.8,.24],forearmR:[-.38,-.3,.06],handR:[.5,-.85,-.45],armL:[-.32,.16,.34],forearmL:[-.36,.06,.04],handL:[.06,.04,.12],legL:[-.42,.05,.05],shinL:[.72,0,0],legR:[-.34,-.05,-.05],shinR:[.66,0,0],footL:[-.16,0,0],footR:[-.14,0,0],gripR:1.12,gripL:.36,lift:-.09},c=s?{...a,playerTorso:[.3,.14,.06],playerHips:[0,.1,.04],clavR:[.14,.08,.1],armR:[-.21,.08,-.5],forearmR:[-1.68,-.3,.06],handR:[.5,-1.23,-.19],gripR:1,lift:.005}:{...a,playerTorso:[.4,.05,.02],playerHips:[.1,.03,0],clavR:[.18,.03,.08],armR:[-.58,.1,-.12],forearmR:[-1.1,-.2,.06],handR:[.4,-1.05,-.3],shinL:[.6,0,0],shinR:[.56,0,0],gripR:1.02,lift:-.04},l=s?.38:.46,h=s?.16:.14;let u;n<l?u=Jn(r,o,On(n/l)):n<l+h?u=Jn(o,a,Math.pow((n-l)/h,s?2:2.4)):n<l+h+.1?u=Jn(a,c,Ri((n-l-h)/.1)):u=Jn(c,r,On((n-l-h-.1)/(.9-l-h))),Qh(i,u)}function Yl(i,t,e=.55){const n=Math.max(0,Math.min(1,t)),s=Math.max(.2,Math.min(1.4,e)),r=Math.sin(n*Math.PI);i.rotation.z=r*.3*s,i.rotation.x=-r*(s>.7?.24:.13)*s;const o=s>.7?r*.3*(s-.7):r*.08*s,a=i.getObjectByName("playerTorso")||i.getObjectByName("yetiBody")||i.getObjectByName("orcBody");a&&(a.rotation.y=o,a.rotation.x=-r*.1*s)}function ws(i,t,e,n){let s=t-i;for(;s>Math.PI;)s-=Math.PI*2;for(;s<-Math.PI;)s+=Math.PI*2;const r=Math.sign(s)*Math.min(Math.abs(s),e*n);return i+r}function iu(i,t){const e=Math.max(0,Math.min(1,t)),n=j(i,"yetiArmR"),s=j(i,"yetiArmL"),r=j(i,"yetiHead"),o=j(i,"yetiBody"),a=j(i,"yetiLegL"),c=j(i,"yetiLegR");let l=0,h=0,u=0,d=0;if(e<.42){const f=On(Math.min(1,e/.3)),m=e>.3?1:f;l=-1.65*m,h=-.62*m,u=-.28*m,d=.4*m}else if(e<.62){const f=On((e-.42)/.2);l=-1.65+3.05*f,h=-.62+2.2*f,u=-.28+.7*f,d=.4+.3*f}else{const f=Ri((e-.62)/.38);l=1.4*(1-f),h=1.58*(1-f),u=.42*(1-f),d=.7*(1-f)}n&&(n.rotation.x=l,n.rotation.y=h*.7,n.rotation.z=h*.4),s&&(s.rotation.x=l*.7,s.rotation.y=-h*.3,s.rotation.z=-h*.18),r&&(r.rotation.x=-.15-d*.5,r.rotation.y=h*.14),o&&(o.rotation.x=.2+u,o.rotation.y=h*.22),a&&(a.rotation.x=u*.45),c&&(c.rotation.x=-u*.55),i.position.y=Math.max(0,u)*.08}function su(i,t){const e=Math.max(0,Math.min(1,t)),n=j(i,"orcSpear"),s=j(i,"orcArmR"),r=j(i,"orcArmL"),o=j(i,"orcHead"),a=j(i,"orcBody"),c=j(i,"orcLegL"),l=j(i,"orcLegR");let h=0,u=0,d=0;if(e<.4){const f=On(Math.min(1,e/.28)),m=e>.28?1:f;h=m,u=-.52*m,d=-.2*m}else if(e<.58){const f=On((e-.4)/.18);h=1-f,u=-.52+1.95*f,d=-.2+.55*f}else{const f=Ri((e-.58)/.42);h=0,u=1.43*(1-f),d=.35*(1-f)}n&&Or(n,{rx:-u*.35,z:u*.22-h*.1,y:h*.04-u*.02}),s&&(s.rotation.x=-u*1.3+h*.55,s.rotation.z=h*.25,s.rotation.y=u*.18),r&&(r.rotation.x=h*.4+u*.3,r.rotation.z=.18),o&&(o.rotation.x=-u*.22+d*.35,o.rotation.y=u*.08),a&&(a.rotation.x=d,a.rotation.y=u*.16),c&&(c.rotation.x=d*.65+u*.32,c.rotation.z=-d*.05),l&&(l.rotation.x=-d*.85-u*.2,l.rotation.z=d*.04),i.position.y=Math.abs(d)*.07}function mi(i,t,e,n=1){const s=j(i,"yetiArmR"),r=j(i,"yetiArmL"),o=j(i,"yetiLegL"),a=j(i,"yetiLegR"),c=j(i,"yetiHead"),l=j(i,"yetiBody"),h=Math.max(0,Math.min(1,n));if(!e||h<.05){const g=Math.sin(t*1.15)*.045;s&&(s.rotation.x=g,s.rotation.y=0,s.rotation.z=.08),r&&(r.rotation.x=-g*.7,r.rotation.y=0,r.rotation.z=-.08),o&&o.rotation.set(.05,0,0),a&&a.rotation.set(-.05,0,0),c&&(c.rotation.x=-.12+g*.3),l&&(l.rotation.x=.2+g*.15),i.position.y=Math.abs(Math.sin(t*1.2))*.02;return}const d=t*3.1,f=.42*h,m=Jh(d)*f,v=Math.max(0,-Math.cos(d*2))*.065*h;o&&(o.rotation.x=m+.1,o.rotation.z=Math.sin(d)*.05),a&&(a.rotation.x=-m+.1,a.rotation.z=-Math.sin(d)*.05),s&&(s.rotation.x=-m*.85,s.rotation.z=.12,s.rotation.y=Math.sin(d)*.08),r&&(r.rotation.x=m*.85,r.rotation.z=-.12,r.rotation.y=-Math.sin(d)*.08),l&&(l.rotation.x=.22+v*.5,l.rotation.y=Math.sin(d)*.08*h,l.rotation.z=Math.sin(d)*.04*h),c&&(c.rotation.x=-.18-v,c.rotation.y=-Math.sin(d)*.05),i.position.y=v}function Ls(i,t,e,n=1){const s=j(i,"orcArmL"),r=j(i,"orcArmR"),o=j(i,"orcLegL"),a=j(i,"orcLegR"),c=j(i,"orcSpear"),l=j(i,"orcHead"),h=j(i,"orcBody"),u=Math.max(0,Math.min(1,n));if(!e||u<.05){const p=Math.sin(t*1.6)*.028;i.position.y=Math.abs(p)*.5,s&&(s.rotation.x=p,s.rotation.z=-.16),r&&(r.rotation.x=-.18+p*.4,r.rotation.z=.16),c&&Or(c),h&&(h.rotation.x=.04),l&&(l.rotation.x=p*.4),o&&o.rotation.set(0,0,0),a&&a.rotation.set(0,0,0);return}const f=t*5.8,m=.48*u,v=Jh(f)*m,g=Math.max(0,-Math.cos(f*2))*.042*u;o&&(o.rotation.x=v,o.rotation.z=Math.sin(f)*.04),a&&(a.rotation.x=-v,a.rotation.z=-Math.sin(f)*.04),s&&(s.rotation.x=-v*.75,s.rotation.z=-.14),r&&(r.rotation.x=-.22-v*.12,r.rotation.z=.14),c&&Or(c,{rx:-v*.04,y:g*.3}),h&&(h.rotation.x=.08*u+g*.4,h.rotation.y=Math.sin(f)*.07*u),l&&(l.rotation.x=-.05,l.rotation.y=-Math.sin(f)*.04),i.position.y=g}function m_(i,t,e){const n=Math.max(0,Math.min(1,e)),s=On(Math.min(1,n/.55)),r=Ri(Math.max(0,(n-.35)/.65));if(t==="yeti"){i.rotation.z=s*1.25,i.rotation.x=s*.42+r*.15,i.position.y=-s*.45-r*.12,i.scale.setScalar(1.15*(1-r*.12));const o=j(i,"yetiArmR"),a=j(i,"yetiArmL");o&&(o.rotation.x=r*.8),a&&(a.rotation.x=-r*.5);const c=j(i,"yetiHead");c&&(c.rotation.x=-.15+r*.6)}else if(t==="orc"){i.rotation.x=s*1.45,i.rotation.z=r*.25,i.position.y=-s*.18-r*.08,i.scale.setScalar(1-r*.22);const o=j(i,"orcArmR"),a=j(i,"orcArmL");o&&(o.rotation.x=-r*.9),a&&(a.rotation.x=r*.6);const c=j(i,"orcSpear");c&&Or(c,{rx:r*.5,y:-r*.12})}else i.rotation.z=s*.7,i.rotation.x=r*.2,i.position.y=-s*.25-r*.05}const g_=.44,$l=.56,__=.48,v_=.62,x_=.45,M_=.58,Br=.78,kr=1.05,Hr=.82,y_=.36,w_=.42,S_=.4;class E_{renderer;scene;camera;hero;pivot;clock=new Wh;running=!1;raf=0;canvas;constructor(t){this.canvas=t,this.renderer=new ic({canvas:t,antialias:!0,alpha:!0}),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.renderer.outputColorSpace=Ue,this.renderer.toneMapping=Vr,this.renderer.toneMappingExposure=1.38,this.renderer.setClearColor(0,0),this.renderer.shadowMap.enabled=!0,this.scene=new Ds,this.scene.add(new Os(15923199,4872754,1.05));const e=new Sn(16774880,1.9);e.position.set(2.4,4.2,3.2),e.castShadow=!0,this.scene.add(e);const n=new Sn(13163775,.45);n.position.set(-3,1.6,-2.4),this.scene.add(n),this.camera=new He(32,1,.1,20);const s=new I(0,1,0);this.camera.position.setFromSpherical(new Xh(3.4,1.22,.55)).add(s),this.camera.lookAt(s),this.pivot=new Dt,this.hero=uc(),this.pivot.add(this.hero),this.scene.add(this.pivot);const r=new A(new gn(.55,32),new pe({color:0,transparent:!0,opacity:.28}));r.rotation.x=-Math.PI/2,r.position.y=.01,this.scene.add(r),this.resize()}setEnvironment(t){this.scene.environment=t}syncEquipment(t){Ne(this.hero,t.equipped.weapon?"sword":null)}showSlot(t,e){t==="weapon"&&e.equipped.weapon?Ne(this.hero,"sword"):t==="hatchet"&&e.equipped.hatchet?Ne(this.hero,"hatchet"):t==="pickaxe"&&e.equipped.pickaxe?Ne(this.hero,"pickaxe"):this.syncEquipment(e)}start(){if(this.running)return;this.running=!0,this.clock.getDelta(),this.resize();const t=()=>{if(!this.running)return;this.raf=requestAnimationFrame(t);const e=Math.min(.05,this.clock.getDelta());this.pivot.rotation.y+=e*.18,xi(this.hero,this.clock.elapsedTime),this.renderer.render(this.scene,this.camera)};t()}stop(){this.running=!1,cancelAnimationFrame(this.raf)}resize(){const t=Math.max(120,this.canvas.clientWidth||220),e=Math.max(160,this.canvas.clientHeight||280);this.renderer.setSize(t,e,!1),this.camera.aspect=t/e,this.camera.updateProjectionMatrix()}}function Xe(i,t={}){return new Me({color:i,roughness:t.roughness??.78,metalness:t.metalness??.08,...t})}function en(i,t){return t.castShadow=!0,i.add(t),t}function T_(i){return i==="bronze_sword"?Kh():i==="bronze_hatchet"?$h():i==="bronze_pickaxe"?Zh():i==="whisper_logs"?b_():i==="copper_ore"?Zl(12088115,9062940):i==="tin_ore"?Zl(13160660,9081494):i==="camp_rations"?A_():i==="yeti_fur"?R_():i==="frost_claw"?C_():i==="orc_tooth"?P_():i==="scout_leather"?L_():I_()}function b_(){const i=new Dt,t=Xe(6964260,{roughness:.92}),e=Xe(12886122,{roughness:.7});for(let n=0;n<3;n++){const s=new Dt,r=new A(new Qt(.055,.06,.42,8),t);r.rotation.z=Math.PI/2,en(s,r);for(const o of[-.21,.21]){const a=new A(new gn(.056,8),e);a.rotation.y=Math.PI/2,a.position.x=o,s.add(a)}s.position.set(0,(n-1)*.07,(n-1)*.04),s.rotation.z=(n-1)*.18,i.add(s)}return i}function Zl(i,t){const e=new Dt,n=Xe(t,{roughness:.95}),s=Xe(i,{roughness:.45,metalness:.55}),r=new A(new rn(.16,0),n);r.scale.set(1.15,.9,1.05),en(e,r);for(let o=0;o<4;o++){const a=o/4*Math.PI*2,c=new A(new rn(.055,0),o%2?s:n);c.position.set(Math.cos(a)*.12,o%2*.06-.02,Math.sin(a)*.1),c.rotation.set(a,o,.3),en(e,c)}return e}function A_(){const i=new Dt,t=Xe(9069112,{roughness:.88}),e=Xe(9054754,{roughness:.7}),n=new A(new qt(.22,.1,.16),t);en(i,n);const s=new A(new We(.09,.01,6,12),Xe(3810324,{roughness:.9}));s.rotation.x=Math.PI/2,i.add(s);const r=new A(new qt(.16,.03,.05),e);return r.position.y=.06,en(i,r),i}function R_(){const i=new Dt,t=Xe(15266038,{roughness:.97}),e=Xe(12110038,{roughness:.97}),n=new A(new ht(.14,10,8),t);n.scale.set(1.3,.45,1.1),en(i,n);for(let s=0;s<7;s++){const r=s/7*Math.PI*2,o=new A(new rn(.055,0),s%2?e:t);o.position.set(Math.cos(r)*.1,.04,Math.sin(r)*.08),o.scale.set(1.4,.55,1),o.rotation.y=r,en(i,o)}return i}function C_(){const i=new Dt,t=Xe(1909291,{roughness:.32,metalness:.4}),e=new A(new Ie(.045,.28,7),t);e.rotation.x=.55,en(i,e);const n=new A(new ht(.05,8,6),Xe(3817544,{roughness:.8}));return n.position.y=-.1,en(i,n),i}function P_(){const i=new Dt,t=new A(new Ie(.04,.26,7),Xe(15920084,{roughness:.4}));return t.rotation.z=.25,t.rotation.x=-.15,en(i,t),i}function L_(){const i=new Dt,t=Xe(7030054,{roughness:.86}),e=Xe(4073492,{roughness:.9}),n=new A(new qt(.22,.04,.16),t);n.rotation.z=.12,en(i,n);const s=new A(new qt(.14,.03,.12),e);return s.position.set(.02,.03,.01),s.rotation.z=-.2,en(i,s),i}function I_(){const i=new Dt;return en(i,new A(new qt(.16,.16,.16),Xe(6710886))),i}const jn=128,Kl=new Map;let vn=null,Mi=null,gi=null;function D_(){if(vn)return;vn=new ic({antialias:!0,alpha:!0,preserveDrawingBuffer:!0}),vn.setPixelRatio(1),vn.setSize(jn,jn,!1),vn.outputColorSpace=Ue,vn.toneMapping=Vr,vn.toneMappingExposure=1.35,vn.setClearColor(0,0),Mi=new Ds,Mi.add(new Os(16054271,4864552,1.05));const i=new Sn(16774364,1.8);i.position.set(2.2,3.4,2.6),Mi.add(i);const t=new Sn(13163775,.55);t.position.set(-2.4,1.2,-1.6),Mi.add(t),gi=new He(32,1,.02,20)}function U_(i){const t=new zn().setFromObject(i),e=t.getSize(new I),n=t.getCenter(new I);i.position.sub(n);const s=Math.max(e.x,e.y,e.z,.08);gi.position.set(s*1.15,s*.55,s*1.7),gi.near=s*.05,gi.far=s*8,gi.updateProjectionMatrix(),gi.lookAt(0,0,0)}function N_(i){const t=Kl.get(i);if(t)return t;D_();const e=T_(i);i==="bronze_sword"&&e.rotation.set(0,.6,-.55),i==="bronze_hatchet"&&e.rotation.set(.2,.8,-.3),i==="bronze_pickaxe"&&e.rotation.set(.15,.7,-.25),Mi.add(e),U_(e),vn.render(Mi,gi);const n=document.createElement("canvas");return n.width=jn,n.height=jn,n.getContext("2d").drawImage(vn.domElement,0,0),Mi.remove(e),e.traverse(s=>{const r=s;r.geometry&&r.geometry.dispose()}),Kl.set(i,n),n}function Jl(i,t){const e=N_(t);i.width=jn,i.height=jn;const n=i.getContext("2d");n&&(n.clearRect(0,0,jn,jn),n.drawImage(e,0,0))}class F_{chatLog;invGrid;invCount;skillsList;skillsPanel;progressWrap;progressFill;progressLabel;targetInfo;targetName;targetHp;hpText;prayText;stamText;hpRing;prayRing;stamRing;minimap;minimapCtx;touchHint;inventory;btnInventory;gearPanel;btnGear;gearInspect;heroPane;narrowMq;desktopInvInited=!1;circum=2*Math.PI*28;onAction=null;onInventoryClick=null;onGearSlotClick=null;constructor(){this.chatLog=ce("chat-log"),this.invGrid=ce("inv-grid"),this.invCount=ce("inv-count"),this.skillsList=ce("skills-list"),this.skillsPanel=ce("skills-panel"),this.progressWrap=ce("progress-wrap"),this.progressFill=ce("progress-fill"),this.progressLabel=ce("progress-label"),this.targetInfo=ce("target-info"),this.targetName=ce("target-name"),this.targetHp=ce("target-hp"),this.hpText=ce("hp-text"),this.prayText=ce("pray-text"),this.stamText=ce("stam-text"),this.hpRing=ce("hp-ring"),this.prayRing=ce("pray-ring"),this.stamRing=ce("stam-ring"),this.minimap=ce("minimap"),this.minimapCtx=this.minimap.getContext("2d"),this.touchHint=ce("touch-hint"),this.inventory=ce("inventory"),this.btnInventory=ce("btn-inventory"),this.gearPanel=ce("gear-panel"),this.btnGear=ce("btn-gear"),this.gearInspect=ce("gear-inspect"),this.heroPane=new E_(ce("gear-hero")),this.narrowMq=window.matchMedia("(max-width: 480px)"),this.btnGear.addEventListener("click",()=>this.setGearOpen(this.gearPanel.hidden)),ce("gear-close").addEventListener("click",()=>this.setGearOpen(!1)),this.gearPanel.querySelectorAll(".gear-slot").forEach(e=>{e.addEventListener("click",()=>{const n=e.dataset.slot;n&&this.onGearSlotClick?.(n)})}),ce("btn-skills").addEventListener("click",()=>{this.skillsPanel.hidden=!this.skillsPanel.hidden}),ce("skills-close").addEventListener("click",()=>{this.skillsPanel.hidden=!0}),this.btnInventory.addEventListener("click",()=>{this.setInventoryOpen(this.inventory.hidden)}),ce("inv-close").addEventListener("click",()=>{this.setInventoryOpen(!1)});const t=()=>this.syncInventoryForViewport();typeof this.narrowMq.addEventListener=="function"?this.narrowMq.addEventListener("change",t):this.narrowMq.addListener(t),this.syncInventoryForViewport(),document.querySelectorAll(".ab-slot").forEach(e=>{e.addEventListener("click",()=>{const n=e.dataset.action;n&&this.onAction?.(n),e.classList.add("active"),setTimeout(()=>e.classList.remove("active"),120)})}),setTimeout(()=>this.touchHint.classList.add("fade"),8e3)}syncInventoryForViewport(){this.narrowMq.matches?(this.desktopInvInited=!1,this.setInventoryOpen(!1)):this.desktopInvInited||(this.desktopInvInited=!0,this.setInventoryOpen(!0))}setGearOpen(t){this.gearPanel.hidden=!t,this.btnGear.setAttribute("aria-expanded",t?"true":"false"),t?(this.heroPane.resize(),this.heroPane.start()):this.heroPane.stop()}isGearOpen(){return!this.gearPanel.hidden}setEnvironment(t){this.heroPane.setEnvironment(t)}setEquipment(t,e){this.heroPane.syncEquipment(t);for(const{id:n,label:s}of i_){const r=this.gearPanel.querySelector(`.gear-slot[data-slot="${n}"]`);if(!r)continue;const o=t.equipped[n],a=r.querySelector("canvas.item-icon"),c=r.querySelector(".gear-empty");if(r.classList.toggle("filled",!!o),o&&a){Jl(a,o),a.hidden=!1,c&&(c.hidden=!0);const l=Kn[o];r.title=`${s}: ${l?.name??o} (click to unequip)`}else a&&(a.hidden=!0),c&&(c.hidden=!1),r.title=`${s}: empty`}e&&(this.gearInspect.textContent=e)}inspectGear(t){this.gearInspect.textContent=t}showSlotPreview(t,e){this.heroPane.showSlot(t,e)}setInventoryOpen(t){this.inventory.hidden=!t,this.btnInventory.setAttribute("aria-expanded",t?"true":"false"),this.narrowMq.matches||(this.btnInventory.style.display=t?"none":"flex")}chat(t,e="system"){const n=document.createElement("div");for(n.className=`chat-line ${e==="plain"?"":e}`.trim(),n.textContent=t,this.chatLog.appendChild(n);this.chatLog.children.length>40;)this.chatLog.removeChild(this.chatLog.firstChild);this.chatLog.scrollTop=this.chatLog.scrollHeight}setOrbs(t,e,n,s){this.hpText.textContent=String(Math.round(t)),this.prayText.textContent=String(Math.round(n)),this.stamText.textContent=String(Math.round(s)),this.setRing(this.hpRing,t/e),this.setRing(this.prayRing,n/100),this.setRing(this.stamRing,s/100)}setRing(t,e){const n=Math.max(0,Math.min(1,e));t.style.strokeDasharray=String(this.circum),t.style.strokeDashoffset=String(this.circum*(1-n))}setInventory(t){this.invGrid.innerHTML="";const e=28;for(let n=0;n<e;n++){const s=document.createElement("div");s.className="inv-slot";const r=t[n];if(r){s.classList.add("has-item");const o=Kn[r.id],a=document.createElement("canvas");if(a.className="item-icon",a.width=128,a.height=128,Jl(a,r.id),s.appendChild(a),s.title=`${o?.name??r.id}${r.qty>1?` ×${r.qty}`:""}${o?.slot?" — click to equip":r.id==="camp_rations"?" — click to eat":""}`,r.qty>1){const l=document.createElement("span");l.className="inv-qty",l.textContent=String(r.qty),s.appendChild(l)}const c=n;s.addEventListener("click",()=>this.onInventoryClick?.(c))}this.invGrid.appendChild(s)}this.invCount.textContent=`${t.length}/${e}`}setSkills(t){this.skillsList.innerHTML="",Object.keys(zl).forEach(e=>{const n=t.skills[e],s=zl[e],r=document.createElement("div");r.className="skill-row";const o=Ur(n.level+1),a=Ur(n.level),c=n.level>=99?100:(n.xp-a)/(o-a)*100;r.innerHTML=`
        <div class="skill-icon">${s.icon}</div>
        <div class="skill-meta">
          <div class="skill-name">${s.name}</div>
          <div class="skill-xp"><div style="width:${c}%"></div></div>
        </div>
        <div class="skill-lvl">${n.level}</div>
      `,this.skillsList.appendChild(r)})}showProgress(t,e){this.progressWrap.hidden=!1,this.progressLabel.textContent=t,this.progressFill.style.width=`${Math.max(0,Math.min(100,e*100))}%`}hideProgress(){this.progressWrap.hidden=!0,this.progressFill.style.width="0%"}showTarget(t,e){this.targetInfo.hidden=!1,this.targetName.textContent=t,this.targetHp.style.width=`${Math.max(0,Math.min(100,e*100))}%`}hideTarget(){this.targetInfo.hidden=!0}drawMinimap(t,e,n,s){const r=this.minimapCtx,o=this.minimap.width,a=this.minimap.height,c=o/2,l=a/2,h=Math.min(o,a)/2-1;r.clearRect(0,0,o,a),r.save(),r.beginPath(),r.arc(c,l,h,0,Math.PI*2),r.clip();const u=r.createRadialGradient(c,l,4,c,l,h);u.addColorStop(0,"#4a7a30"),u.addColorStop(.65,"#2c4e20"),u.addColorStop(1,"#1a3014"),r.fillStyle=u,r.fillRect(0,0,o,a);for(let f=0;f<36;f++)r.fillStyle=f%2?"#3a6828":"#2e5420",r.fillRect(f*41%o,f*59%a,7,7);const d=3.2;for(const f of s){const m=c+(f.x-t)*d,v=l+(f.z-e)*d,g=m-c,p=v-l;g*g+p*p>(h-4)*(h-4)||(r.fillStyle=f.color,r.beginPath(),r.arc(m,v,3,0,Math.PI*2),r.fill())}r.save(),r.translate(c,l),r.rotate(n),r.fillStyle="#f0d070",r.beginPath(),r.moveTo(0,-6),r.lineTo(4,5),r.lineTo(0,2),r.lineTo(-4,5),r.closePath(),r.fill(),r.restore(),r.restore(),r.beginPath(),r.arc(c,l,h-.5,0,Math.PI*2),r.strokeStyle="#8a6a28",r.lineWidth=3,r.stroke(),r.beginPath(),r.arc(c,l,h-3,0,Math.PI*2),r.strokeStyle="rgba(212,168,75,0.35)",r.lineWidth=1.5,r.stroke(),r.fillStyle="#e8c060",r.beginPath(),r.moveTo(c,6),r.lineTo(c+5,14),r.lineTo(c-5,14),r.closePath(),r.fill(),r.fillStyle="#f0d070",r.font="bold 11px Segoe UI, system-ui, sans-serif",r.textAlign="center",r.fillText("N",c,26)}}function ce(i){const t=document.getElementById(i);if(!t)throw new Error(`Missing #${i}`);return t}const ru=[];function $e(i,t){let e=Math.imul(i|0,1597334677)^Math.imul(t|0,3812015801);return e=Math.imul(e^e>>>16,2146121005),e=Math.imul(e^e>>>15,2221713035),((e^e>>>16)>>>0)/4294967296}function jl(i){return i*i*i*(i*(i*6-15)+10)}function Kr(i,t){const e=Math.floor(i),n=Math.floor(t),s=i-e,r=t-n,o=jl(s),a=jl(r),c=$e(e,n),l=$e(e+1,n),h=$e(e,n+1),u=$e(e+1,n+1);return c+(l-c)*o+(h-c)*a+(c-l-h+u)*o*a}function Ji(i,t,e=5){let n=0,s=.5,r=1,o=0;for(let a=0;a<e;a++)n+=s*Kr(i*r,t*r),o+=s,s*=.5,r*=2.07;return n/o}function O_(i,t){const e=Ji(i*.31+17.2,t*.31-9.4,3),n=Ji(i*.31-8.1,t*.31+5.6,3);return Ji(i*.11+e*1.65,t*.11+n*1.65,5)}function mc(i,t){const e=Math.exp(-((i*.15+.05)**2)*8-(t*.12-.15)**2*3),n=Math.exp(-((i+.5-t*.35)**2)*2.2-(t-1.2)**2*.08),s=Math.exp(-((i+3.2-t*.15)**2)*1.4-(t+2.5)**2*.06);return Math.max(e,n*.85,s*.75)}function gc(i,t){const e=Math.exp(-((i-4.2)**2)*.09-(t-7.2)**2*.08),n=Math.exp(-((i-5.5)**2)*.15-(t-6)**2*.12);return Math.max(e,n*.85)}function z_(i,t){return Math.exp(-((i+2.05)**2+(t+.55)**2)*.11)}function ye(i,t){const e=(O_(i,t)-.5)*.38,n=(Ji(i*1.65+41.2,t*1.65-18.7,4)-.5)*.07,s=(Kr(i*7.2+3.1,t*7.2-2.4)-.5)*.022;let r=e+n+s;return r*=1-z_(i,t)*.84,r*=1-mc(i,t)*.38,r+=gc(i,t)*.045,r}function B_(i,t){return Ji(i*2.4+12.7,t*2.4-6.3,4)}function k_(i=48){const e=new dn(i,i,128,128),n=e.attributes.position,s=new Float32Array(n.count*3),r=new bt(7189564),o=new bt(9227338),a=new bt(5149230),c=new bt(11066466),l=new bt(4094508),h=new bt(10123848),u=new bt(7230512),d=new bt(15660795),f=new bt(13163754),m=new bt;for(let p=0;p<n.count;p++){const S=n.getX(p),x=-n.getY(p);n.setZ(p,ye(S,x));const U=mc(S,x),T=gc(S,x),R=B_(S,x),D=Kr(S*1.9+4.2,x*1.9-1.7);T>.24?(m.copy(d).lerp(f,R),m.lerp(r,1-Math.min(1,T*1.7))):U>.28?(m.copy(h).lerp(u,D),m.lerp(r,1-Math.min(1,U*1.4))):R>.72?m.copy(l).lerp(a,D*.45):(m.copy(r).lerp(R>.52?o:a,R*.7+D*.3),m.lerp(c,Math.max(0,D-.55)*.85)),s[p*3]=m.r,s[p*3+1]=m.g,s[p*3+2]=m.b}e.setAttribute("color",new tn(s,3)),e.computeVertexNormals();const v=H_(),g=new A(e,new Me({vertexColors:!0,roughness:.86,metalness:0,flatShading:!1,bumpMap:v,bumpScale:.22}));return g.rotation.x=-Math.PI/2,g.receiveShadow=!0,g.name="ground",g}function H_(){const t=document.createElement("canvas");t.width=256,t.height=256;const e=t.getContext("2d"),n=e.createImageData(256,256);for(let r=0;r<256;r++)for(let o=0;o<256;o++){const a=Ji(o*.11+2.2,r*.11-1.4,4),c=Kr(o*.55,r*.38),l=Math.floor((a*.62+c*.38)*255),h=(r*256+o)*4;n.data[h]=l,n.data[h+1]=l,n.data[h+2]=l,n.data[h+3]=255}e.putImageData(n,0,0);const s=new oc(t);return s.wrapS=es,s.wrapT=es,s.repeat.set(22,22),s.anisotropy=4,s.colorSpace=Mn,s}function G_(){const i=document.createElement("canvas");i.width=32,i.height=64;const t=i.getContext("2d"),e=t.createLinearGradient(16,64,16,0);e.addColorStop(0,"rgba(70, 130, 28, 0)"),e.addColorStop(.1,"rgba(96, 168, 40, 255)"),e.addColorStop(.5,"rgba(168, 220, 64, 255)"),e.addColorStop(1,"rgba(232, 255, 120, 240)"),t.fillStyle=e,t.beginPath(),t.moveTo(16,2),t.quadraticCurveTo(5,36,9,64),t.lineTo(23,64),t.quadraticCurveTo(27,36,16,2),t.fill();const n=new oc(i);return n.colorSpace=Ue,n.anisotropy=4,n}function V_(){const i=[],t=[];for(let s=0;s<5;s++){const r=s/5*Math.PI,o=Math.cos(r),a=Math.sin(r),c=.085+s%3*.02,l=.26+s%4*.07,h=[[-c,0,0],[c,0,0],[c,l,0],[-c,l,0]],u=[0,1,2,0,2,3];for(const d of u){const[f,m]=h[d];i.push(f*o,m,f*a),t.push(d===0||d===3?0:1,m/l)}}const n=new Pe;return n.setAttribute("position",new te(i,3)),n.setAttribute("uv",new te(t,2)),n.computeVertexNormals(),n}function W_(){const i=[],t=[],s=[[-.012,0,0],[.012,0,0],[.012,.16,0],[-.012,.16,0]];for(const a of[0,1,2,0,2,3]){const[c,l,h]=s[a];i.push(c,l,h),t.push(a===0||a===3?.45:.55,l/.16)}const r=.09;for(const a of[0,Math.PI/2]){const c=Math.cos(a),l=Math.sin(a),h=[[-r,.16-.01],[r,.16-.01],[r,.16+.07],[-r,.16+.07]];for(const u of[0,1,2,0,2,3]){const[d,f]=h[u];i.push(d*c,f,d*l),t.push(u===0||u===3?0:1,(f-.16+.01)/.08)}}const o=new Pe;return o.setAttribute("position",new te(i,3)),o.setAttribute("uv",new te(t,2)),o.computeVertexNormals(),o}function Ql(i,t){i.onBeforeCompile=e=>{e.uniforms.uTime={value:0},e.vertexShader=`uniform float uTime;
${e.vertexShader}`,e.vertexShader=e.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
       float hgt = max(transformed.y, 0.0);
       vec3 ip = vec3(instanceMatrix[3][0], instanceMatrix[3][1], instanceMatrix[3][2]);
       float t = uTime * 1.55 + ip.x * 0.82 + ip.z * 0.64;
       transformed.x += sin(t) * ${t.toFixed(3)} * hgt;
       transformed.z += cos(t * 0.88 + 0.35) * ${(t*.55).toFixed(3)} * hgt;`),ru.push(e)}}function Bo(i,t,e=.32,n=.22){return!(mc(i,t)>e||gc(i,t)>n||Math.hypot(i+1.2,t+.5)<1.55||Math.hypot(i+3.5,t+1.5)<1.35)}function X_(){const i=new Dt;i.name="terrainFoliage";const t=new Ae,e=new Uo({map:G_(),color:15400856,side:Te,alphaTest:.18});Ql(e,.55);const n=[],s=new bt(11853914),r=new bt(6989874),o=new bt,a=.5;for(let T=-20;T<=20;T+=a)for(let R=-20;R<=20;R+=a){const D=($e(Math.floor(T*20+3),Math.floor(R*20+9))-.5)*a*.92,y=($e(Math.floor(T*20+11),Math.floor(R*20+2))-.5)*a*.92,M=T+D,C=R+y,z=$e(Math.floor(M*17+4),Math.floor(C*19+8));if(z<.22||!Bo(M,C))continue;const k=.75+z*.7;n.push({x:M,z:C,h:ye(M,C),s:k,r:z*Math.PI*2,c:o.copy(s).lerp(r,$e(Math.floor(M*8),Math.floor(C*13)))})}const c=new Co(V_(),e,n.length);c.name="instancedGrass",c.castShadow=!1,c.receiveShadow=!0,c.instanceMatrix.setUsage(nd);const l=new Float32Array(n.length*3);n.forEach((T,R)=>{t.position.set(T.x,T.h,T.z),t.rotation.set(0,T.r,0),t.scale.setScalar(T.s),t.updateMatrix(),c.setMatrixAt(R,t.matrix),l[R*3]=T.c.r,l[R*3+1]=T.c.g,l[R*3+2]=T.c.b}),c.instanceColor=new As(l,3),c.instanceMatrix.needsUpdate=!0,c.frustumCulled=!1,c.raycast=()=>{},i.add(c);const h=new Uo({color:16777215,side:Te});Ql(h,.35);const u=[16774876,16768060,16738984,13142271,16747058],d=[],f=1.28;for(let T=-19;T<=19;T+=f)for(let R=-19;R<=19;R+=f){const D=($e(Math.floor(T*13+21),Math.floor(R*13+5))-.5)*f,y=($e(Math.floor(T*13+7),Math.floor(R*13+18))-.5)*f,M=T+D,C=R+y,z=$e(Math.floor(M*29+1),Math.floor(C*31+6));if(z<.28||!Bo(M,C,.26,.18))continue;const k=new bt(u[Math.floor(z*u.length)%u.length]);d.push({x:M,z:C,h:ye(M,C),s:.85+z*.55,r:z*6.2,c:k})}const m=new Co(W_(),h,d.length);m.name="instancedFlowers",m.castShadow=!1;const v=new Float32Array(d.length*3);d.forEach((T,R)=>{t.position.set(T.x,T.h,T.z),t.rotation.set(0,T.r,0),t.scale.setScalar(T.s),t.updateMatrix(),m.setMatrixAt(R,t.matrix),v[R*3]=T.c.r,v[R*3+1]=T.c.g,v[R*3+2]=T.c.b}),m.instanceColor=new As(v,3),m.instanceMatrix.needsUpdate=!0,m.frustumCulled=!1,m.raycast=()=>{},i.add(m);const g=new Uo({color:16777215,flatShading:!0}),p=[9079942,7236194,10130568,6054996],S=[],w=1.7;for(let T=-18.5;T<=18.5;T+=w)for(let R=-18.5;R<=18.5;R+=w){const D=($e(Math.floor(T*11+40),Math.floor(R*11+3))-.5)*w,y=($e(Math.floor(T*11+8),Math.floor(R*11+33))-.5)*w,M=T+D,C=R+y,z=$e(Math.floor(M*23+2),Math.floor(C*27+9));z<.55||Bo(M,C,.2,.16)&&S.push({x:M,z:C,h:ye(M,C),s:.7+z*1.1,rx:z*2.2,ry:z*5.1,c:new bt(p[Math.floor(z*p.length)%p.length])})}const x=new Co(new ii(.11,0),g,S.length);x.name="instancedStones",x.castShadow=!0,x.receiveShadow=!0;const U=new Float32Array(S.length*3);return S.forEach((T,R)=>{t.position.set(T.x,T.h+.04*T.s,T.z),t.rotation.set(T.rx,T.ry,T.rx*.4),t.scale.set(T.s*1.15,T.s*.7,T.s*1.05),t.updateMatrix(),x.setMatrixAt(R,t.matrix),U[R*3]=T.c.r,U[R*3+1]=T.c.g,U[R*3+2]=T.c.b}),x.instanceColor=new As(U,3),x.instanceMatrix.needsUpdate=!0,x.frustumCulled=!1,x.raycast=()=>{},i.add(x),i}function q_(i){for(const t of ru)t.uniforms.uTime.value=i}const th=new Map;function _e(i,t={}){const e=`${i}_${t.roughness??.78}_${t.metalness??.08}_${t.flatShading===!1?0:1}_${t.emissive??0}_${t.emissiveIntensity??0}`;let n=th.get(e);return n||(n=new Me({color:i,roughness:t.roughness??.78,metalness:t.metalness??.08,flatShading:t.flatShading??!0,envMapIntensity:t.envMapIntensity??.85,...t}),th.set(e,n)),n}function Gr(i,t=1.08,e=659976){const n=new A(i.geometry,new pe({color:e,side:Fe,depthWrite:!1}));n.scale.setScalar(t),n.name="outline",i.add(n)}function ou(i=0){const t=new Dt;t.name="tree";const e=1.55+i%5*.18,n=i%3===0?4862488:i%3===1?5913114:4074002,s=new A(new Qt(.16,.28,e,8),_e(n,{roughness:.95}));s.position.y=e/2,s.castShadow=!0,s.receiveShadow=!0,t.add(s);for(let h=0;h<3;h++){const u=h/3*Math.PI*2+i*.3,d=new A(new qt(.05,e*(.55+h%2*.15),.07),_e(2758664,{roughness:1}));d.position.set(Math.cos(u)*.15,e*.45,Math.sin(u)*.15),d.rotation.y=u,t.add(d)}for(let h=0;h<3;h++){const u=new A(new We(.18+h*.02,.02,4,10),_e(3021836,{roughness:1}));u.rotation.x=Math.PI/2,u.position.y=.35+h*(e*.28),t.add(u)}const r=i%2===0?3109424:3835448,o=i%3===0?2254376:5016648,a=1856032;for(let h=0;h<5;h++){const u=.9-h*.12,d=h%3===0?r:h%3===1?o:a,f=new A(new Ie(u,1-h*.1,9),_e(d,{roughness:.88}));if(f.position.y=e+.22+h*.42,f.rotation.y=(i+h)*.45,f.castShadow=!0,t.add(f),h<3){const m=new A(new Ie(u*.55,.55,7),_e(1325080,{roughness:.95}));m.position.y=e+.35+h*.42,t.add(m)}}const c=new A(new Qt(.34,.44,.2,7),_e(3811344,{roughness:1}));c.position.y=.08,c.receiveShadow=!0,t.add(c);for(let h=0;h<4;h++){const u=h/4*Math.PI*2+i,d=new A(new qt(.12,.1,.35),_e(3021836));d.position.set(Math.cos(u)*.28,.06,Math.sin(u)*.28),d.rotation.y=u,t.add(d)}const l=new A(new Qt(.55,.55,.2,8),new pe({visible:!1}));return l.position.y=.1,l.name="hit",t.add(l),t}function ka(i,t=0){const e=new Dt;e.name="rock";const n=new A(new ii(.55+t%3*.06,0),_e(t%2===0?6185576:5132888,{roughness:.9}));n.position.y=.4,n.rotation.set(.2,t,.1),n.castShadow=!0,n.receiveShadow=!0,e.add(n);const s=new A(new gn(.55,12),new pe({color:0,transparent:!0,opacity:.28,depthWrite:!1}));s.rotation.x=-Math.PI/2,s.position.y=.02,e.add(s);const r=new A(new ii(.28,0),_e(4869714));r.position.set(.35,.22,-.15),r.rotation.set(.4,t*.5,.2),r.castShadow=!0,e.add(r);const o=i==="copper"?12088115:12632264;for(let l=0;l<4;l++){const h=new A(new ht(.1+l%2*.03,6,4),_e(o,{metalness:.55,roughness:.4,emissive:o,emissiveIntensity:.15})),u=l/4*Math.PI*2+t;h.position.set(Math.cos(u)*.32,.42+l%2*.18,Math.sin(u)*.32),e.add(h)}const a=new A(new ht(.14,5,4),_e(3828272,{roughness:1}));a.position.set(-.25,.55,.2),a.scale.set(1.2,.5,1),e.add(a);const c=new A(new ht(.75,8,6),new pe({visible:!1}));return c.position.y=.4,c.name="hit",e.add(c),e}function au(){const i=new Dt;i.name="dummy";const t=(h,u={})=>new Me({color:h,roughness:u.roughness??.85,metalness:u.metalness??.05,flatShading:!0,...u}),e=new A(new Qt(.08,.1,1.4,6),t(5913114));e.position.y=.7,e.castShadow=!0,i.add(e);const n=new A(new Qt(.28,.32,.7,8),t(9071168));n.position.y=1.15,n.castShadow=!0,n.name="dummyBody",Gr(n,1.06,1708040),i.add(n);const s=new A(new ht(.22,8,6),t(12886112));s.position.y=1.65,s.name="dummyHead",i.add(s);const r=t(4857872),o=new A(new qt(.35,.06,.04),r);o.position.set(0,1.2,.3),o.rotation.z=.6,i.add(o);const a=o.clone();a.rotation.z=-.6,i.add(a);const c=new A(new Qt(.4,.45,.12,8),t(3811861));c.position.y=.06,c.receiveShadow=!0,i.add(c);const l=new A(new Qt(.45,.45,1.8,8),new pe({visible:!1}));return l.position.y=.9,l.name="hit",i.add(l),i}function Y_(i,t=140){const e=[];i.traverse(s=>{s.isMesh&&s.name!=="hit"&&s.name!=="outline"&&e.push(s)});const n=[];for(const s of e){const r=s.material;!r||!r.emissive||(n.push({mesh:s,emissive:r.emissive.clone(),intensity:r.emissiveIntensity??0}),r.emissive.setHex(16772778),r.emissiveIntensity=.85)}setTimeout(()=>{for(const s of n){const r=s.mesh.material;r.emissive.copy(s.emissive),r.emissiveIntensity=s.intensity}},t)}function cu(){const i=new Dt;for(let s=0;s<8;s++){const r=new A(new ii(.12,0),_e(5921368)),o=s/8*Math.PI*2;r.position.set(Math.cos(o)*.45,.08,Math.sin(o)*.45),r.rotation.set(Math.random(),o,.2),r.castShadow=!0,i.add(r)}for(let s=0;s<5;s++){const r=new A(new Qt(.06,.07,.7,5),_e(4860432));r.rotation.z=Math.PI/2,r.rotation.y=s/5*Math.PI*2,r.position.y=.1,i.add(r)}const t=new A(new Ie(.2,.55,5),new Me({color:16737826,emissive:16729088,emissiveIntensity:1.4,flatShading:!0,transparent:!0,opacity:.92}));t.position.y=.42,t.name="flame",i.add(t);const e=new A(new ht(.18,8,6),new pe({color:16755268,transparent:!0,opacity:.35,depthWrite:!1}));e.position.y=.28,e.name="flameGlow",i.add(e);const n=new lc(16746564,1.6,14);return n.position.y=.65,n.castShadow=!1,i.add(n),i}function lu(){const i=new Dt,t=_e(6967344,{roughness:.92,side:Te}),e=_e(4864024,{roughness:.94,side:Te}),n=new A(new Qt(.035,.035,1.55,6),_e(3811856,{roughness:1}));n.rotation.z=Math.PI/2,n.position.y=1.18,i.add(n);for(const a of[-1,1]){const c=new A(new dn(1.55,1.42),t);c.position.set(a*.52,.62,0),c.rotation.y=a*-.72,c.castShadow=!0,c.receiveShadow=!0,i.add(c);const l=new A(new dn(1.5,1.36),e);l.position.set(a*.5,.62,0),l.rotation.y=a*-.72+Math.PI,i.add(l)}const s=new A(new dn(1.05,1.05),e);s.position.set(0,.52,-.72),s.castShadow=!0,i.add(s);const r=new A(new dn(.42,.85),e);r.position.set(-.18,.42,.7),r.rotation.y=.35,i.add(r);const o=new A(new dn(.42,.85),t);o.position.set(.22,.42,.68),o.rotation.y=-.55,i.add(o);for(const[a,c]of[[-.9,-.9],[.9,-.9],[-.9,.9],[.9,.9]]){const l=new A(new Qt(.03,.03,.25,4),_e(3811856));l.position.set(a*.85,.12,c*.85),i.add(l)}return i}function Ha(){const i=new Dt,t=new A(new qt(.55,.4,.45),_e(6965800));t.position.y=.2,t.castShadow=!0,t.receiveShadow=!0,i.add(t);const e=new A(new qt(.58,.06,.48),_e(5913114));return e.position.y=.43,i.add(e),i}function Cr(){const i=new Dt,t=new A(new Qt(.28,.3,.55,10),_e(5913114));t.position.y=.28,t.castShadow=!0,i.add(t);const e=new A(new We(.29,.025,6,12),_e(9079434,{metalness:.5}));return e.rotation.x=Math.PI/2,e.position.y=.35,i.add(e),i}function Ga(){const i=new Dt,t=new A(new Qt(.14,.14,.7,8),_e(3820138));return t.rotation.z=Math.PI/2,t.position.y=.12,t.castShadow=!0,i.add(t),i}function $_(i=60){const t=new ht(i,24,12),e=new Float32Array(t.attributes.position.count*3),n=t.attributes.position,s=new bt(4888288),r=new bt(9354472),o=new bt(15914660),a=new bt;for(let l=0;l<n.count;l++){const h=n.getY(l)/i,u=Math.max(0,Math.min(1,(h+.15)/1));u<.45?a.copy(o).lerp(r,u/.45):a.copy(r).lerp(s,(u-.45)/.55),e[l*3]=a.r,e[l*3+1]=a.g,e[l*3+2]=a.b}t.setAttribute("color",new tn(e,3));const c=new A(t,new pe({vertexColors:!0,side:Fe,depthWrite:!1,fog:!1}));return c.name="sky",c}function hu(){const i=new Dt;i.name="yeti";const t=(ut,ct={})=>new Me({color:ut,roughness:ct.roughness??.92,metalness:ct.metalness??.02,flatShading:!1,...ct}),e=t(15003126,{roughness:.94}),n=t(12242914,{roughness:.9}),s=t(13359848,{roughness:.96}),r=t(9677503,{roughness:.97}),o=t(4871782,{roughness:.88}),a=t(3292234,{roughness:.9}),c=t(1909291,{roughness:.3,metalness:.4}),l=t(2236458,{roughness:.5}),h=t(6038576,{roughness:.85}),u=t(15920084,{roughness:.4}),d=(ut,ct,G,Q,lt,it,pt,wt=.5,Ut=e,Gt=s)=>{for(let nt=0;nt<it;nt++){const rt=nt/it*Math.PI*2+lt*9,L=pt*(.82+nt%3*.12),At=new A(new rn(L,0),nt%2?Gt:Ut);At.position.set(ct+Math.cos(rt)*lt*.8,G-L*.45,Q+Math.sin(rt)*lt*.8),At.rotation.set(wt*(.8+nt%3*.2),Math.PI/2-rt,nt%4*.16),At.scale.set(1.7,.55,.95),At.castShadow=!0,ut.add(At)}},f=t(12118271,{roughness:.22,metalness:.35,emissive:4892872,emissiveIntensity:.18}),m=(ut,ct,G,Q,lt,it)=>{const pt=new A(new Ie(it,lt,6),c);pt.rotation.x=Math.PI/2+.45,pt.position.set(ct,G,Q),pt.castShadow=!0,ut.add(pt);const wt=new A(new Ie(it*.55,lt*.42,5),f);wt.rotation.x=Math.PI/2+.45,wt.position.set(ct,G-.01,Q+lt*.38),ut.add(wt)},v=(ut,ct,G,Q,lt,it=.2,pt=.15)=>{const wt=new A(new Nn(lt,0),f);wt.position.set(ct,G,Q),wt.rotation.set(it,.4,pt),wt.scale.set(.55,1.6,.45),wt.castShadow=!0,ut.add(wt)},g=new A(new gn(.85,20),new pe({color:0,transparent:!0,opacity:.42,depthWrite:!1}));g.name="contactShadow",g.rotation.x=-Math.PI/2,g.position.y=.03,i.add(g);const p=ut=>{const ct=new Dt,G=new A(new ee(.22,.35,6,12),e);G.position.set(0,.55,.05),G.rotation.x=.25,G.castShadow=!0,ct.add(G),d(ct,0,.68,.06,.235,14,.07,.45);const Q=new A(new ee(.18,.28,6,12),n);Q.position.set(0,.22,.12),Q.rotation.x=-.15,Q.castShadow=!0,ct.add(Q),d(ct,0,.4,.1,.195,13,.06,.4,s,r);const lt=new A(new ht(.2,12,10),e);lt.position.set(0,.08,.16),lt.scale.set(.95,.44,1.25),lt.castShadow=!0,ct.add(lt);const it=new A(new ht(.13,10,8),a);it.position.set(0,.035,.2),it.scale.set(.9,.22,1),ct.add(it);for(let pt=0;pt<4;pt++){const wt=(pt-1.5)*.078,Ut=new A(new ht(.055,8,6),e);Ut.position.set(wt,.055,.3),Ut.scale.set(1,.8,1.25),ct.add(Ut),m(ct,wt,.05,.37,.11,.026)}return ct.position.x=ut*.32,ct},S=p(-1);S.name="yetiLegL",i.add(S);const w=p(1);w.name="yetiLegR",i.add(w);const x=new A(new ee(.55,.55,6,12),e);x.position.set(0,1.35,-.08),x.scale.set(1.15,1,.95),x.rotation.x=.2,x.castShadow=!0,x.name="yetiBody",Gr(x,1.06,660768),i.add(x),d(i,0,1.14,-.04,.68,24,.095,.5),d(i,0,1.74,-.1,.66,22,.09,.7,s,r);const U=new A(new ht(.38,12,10),n);U.position.set(0,1.15,.28),U.scale.set(1.1,1,.55),i.add(U);const T=t(2766920,{roughness:.96});for(const[ut,ct,G,Q,lt,it]of[[-.22,1.46,.46,.42,.055,.28],[.22,1.46,.46,.42,.055,-.28],[-.12,1.18,.5,.3,.042,.15],[.12,1.18,.5,.3,.042,-.15],[0,1.58,.42,.26,.05,0]]){const pt=new A(new ee(lt,Q,4,8),T);pt.position.set(ut,ct,G),pt.rotation.z=it,i.add(pt)}v(i,-.52,1.88,-.18,.14,.4,.35),v(i,.52,1.88,-.18,.14,.4,-.35),v(i,0,1.98,-.32,.16,.15,0),v(i,-.28,1.7,-.38,.11,.5,.2),v(i,.28,1.7,-.38,.11,.5,-.2);const R=(ut,ct,G,Q,lt,it=e)=>{const pt=new A(new ee(.08*lt,.22*lt,5,10),it);pt.position.set(ct,G,Q),pt.rotation.x=-.45,pt.rotation.z=(ct>0?1:ct<0?-1:0)*.12*lt,pt.castShadow=!0,ut.add(pt);for(let wt=0;wt<3;wt++){const Ut=wt/3*Math.PI*2+lt,Gt=new A(new ee(.028*lt,.16*lt,4,8),wt%2===0?s:it);Gt.position.set(ct+Math.cos(Ut)*.05*lt,G+.03*lt,Q+Math.sin(Ut)*.04*lt),Gt.rotation.x=-.55,Gt.rotation.z=(ct>0?1:-1)*.14,Gt.castShadow=!0,ut.add(Gt)}};R(x,-.42,.42,-.12,1.05),R(x,.42,.42,-.12,1.05),R(x,0,.52,-.28,1,s),R(x,-.28,.48,.12,.75,n),R(x,.28,.48,.12,.75,n);const D=ut=>{const ct=new Dt;ct.name=ut<0?"yetiArmL":"yetiArmR",ct.position.set(ut*.68,1.72,.08),ct.rotation.z=ut*.28,ct.rotation.x=-.22;const G=new A(new ee(.2,.48,6,12),e);G.position.set(0,-.22,0),G.castShadow=!0,ct.add(G),d(ct,0,-.02,0,.215,13,.072,.6),d(ct,0,-.48,0,.205,12,.062,.45,s,r);const Q=new Dt;Q.position.set(0,-.56,0),Q.rotation.x=-.38;const lt=new A(new ee(.16,.38,6,12),n);lt.position.set(0,-.2,0),lt.castShadow=!0,Q.add(lt),d(Q,0,-.3,0,.175,12,.055,.4,s,r);const it=new Dt;it.position.set(0,-.48,.05);const pt=new A(new ht(.17,10,8),e);pt.scale.set(1,.85,.95),pt.castShadow=!0,it.add(pt);const wt=new A(new ht(.11,10,8),a);wt.position.set(0,-.02,.1),wt.scale.set(1,.95,.35),it.add(wt);for(let Gt=0;Gt<4;Gt++){const nt=(Gt-1.5)*.075,rt=new A(new ht(.05,8,6),e);rt.position.set(nt,-.05,.14),rt.scale.set(1,.9,1.2),it.add(rt),m(it,nt,-.06,.22,.16,.028)}const Ut=new A(new ht(.055,8,6),e);return Ut.position.set(ut*.13,-.01,.06),it.add(Ut),m(it,ut*.17,-.02,.12,.1,.024),Q.add(it),ct.add(Q),ct};i.add(D(-1)),i.add(D(1));const y=new Dt;y.name="yetiHead",y.position.set(0,2.15,.15),y.rotation.x=-.15;const M=new A(new ht(.38,14,12),e);M.scale.set(1.05,.95,1.1),M.castShadow=!0,Gr(M,1.08,660768),y.add(M),R(y,0,.28,-.18,.85,s),R(y,-.22,.22,-.08,.7),R(y,.22,.22,-.08,.7);const C=new A(new ht(.34,16,14),o);C.scale.set(.84,.74,.76),C.position.set(0,-.08,.18),y.add(C);const z=new A(new ht(.27,16,12),a);z.scale.set(.96,.34,.6),z.position.set(0,.125,.2),y.add(z);for(const ut of[-1,1]){const ct=new A(new ht(.078,10,8),a);ct.scale.set(1.1,.46,.62),ct.rotation.z=ut*-.3,ct.position.set(ut*.15,.105,.345),y.add(ct)}const k=ut=>{const ct=new A(new ht(.068,12,10),a);ct.scale.set(1.1,.9,.6),ct.position.set(ut,.04,.355),y.add(ct);const G=new A(new ht(.044,12,10),t(15771704,{emissive:12609536,emissiveIntensity:.55,roughness:.25}));G.scale.set(1,.86,.75),G.position.set(ut,.04,.395),G.name="yetiEye",y.add(G);const Q=new A(new ee(.008,.036,3,6),t(1313284));Q.position.set(ut,.04,.428),y.add(Q);const lt=new lc(16750848,.18,1.2);lt.name="yetiEyeLight",lt.position.set(ut,.05,.52),y.add(lt)};k(-.145),k(.145);const H=new A(new ee(.055,.1,5,10),o);H.rotation.x=Math.PI/2-.4,H.position.set(0,.015,.42),y.add(H);const Z=new A(new ht(.175,14,12),o);Z.scale.set(1,.8,1),Z.position.set(0,-.1,.44),y.add(Z);const W=new A(new ht(.052,12,10),l);W.scale.set(1.3,.8,.85),W.position.set(0,-.03,.585),y.add(W);for(const ut of[-1,1]){const ct=new A(new ht(.014,8,6),t(920592));ct.position.set(ut*.03,-.047,.608),y.add(ct)}const st=new A(new ht(.145,12,10),h);st.scale.set(1,.62,.7),st.position.set(0,-.2,.46),y.add(st);const $=new A(new ht(.17,12,10),o);$.scale.set(1,.5,.9),$.position.set(0,-.27,.41),y.add($),d(y,0,-.32,.24,.27,11,.052,.6,s,r);const ft=(ut,ct,G)=>{const Q=new A(new Ie(.021,.08,7),u);Q.rotation.x=G?Math.PI:0,Q.position.set(ut,ct,.535),y.add(Q)};ft(-.082,-.16,!0),ft(.082,-.16,!0),ft(-.07,-.245,!1),ft(.07,-.245,!1),v(y,-.16,.22,.12,.045,.6,.3),v(y,.16,.22,.12,.045,.6,-.3),v(y,0,.34,-.06,.055,.2,0);for(let ut=0;ut<5;ut++){const ct=new A(new qt(.022,.028,.022),u);ct.position.set(-.08+ut*.04,-.178,.542),y.add(ct)}for(const ut of[-1,1]){const ct=new A(new ht(.08,10,8),e);ct.position.set(ut*.28,.18,-.08),ct.scale.set(.7,.85,.55),y.add(ct);const G=new A(new ht(.045,8,6),o);G.scale.set(.5,.85,.55),G.position.set(ut*.3,.18,-.05),y.add(G)}d(y,0,.02,-.08,.43,16,.08,.55,e,s),i.add(y);const Mt=new A(new Ie(.12,.38,8,1,!0),new Me({color:13694719,emissive:6745855,emissiveIntensity:.9,transparent:!0,opacity:.32,flatShading:!1,side:Te,depthWrite:!1}));Mt.rotation.x=Math.PI/2,Mt.position.set(0,-.15,.62),Mt.name="yetiBreath",y.add(Mt);for(let ut=0;ut<3;ut++){const ct=new A(new ht(.07+ut*.025,6,5),new pe({color:12118271,transparent:!0,opacity:.22-ut*.04,depthWrite:!1}));ct.position.set((ut-1)*.04,-.13,.75+ut*.1),ct.name="yetiBreathMist",y.add(ct)}const dt=new A(new Qt(.85,.95,2.4,10),new pe({visible:!1}));return dt.position.y=1.2,dt.name="hit",i.add(dt),i.scale.setScalar(1.15),i}function yr(i,t){const e=i.getObjectByName("yetiArmR"),n=i.getObjectByName("yetiArmL"),s=Math.max(0,Math.min(1,t));let r=0,o=0;if(s<=0)r=0,o=0;else if(s<.35){const c=s/.35;r=-1.35*c,o=-.4*c}else if(s<.55){const c=(s-.35)/.2;r=-1.35+2.4*c,o=-.4+1.6*c}else{const c=(s-.55)/.45;r=1.05*(1-c),o=1.2*(1-c)}e&&(e.rotation.x=r,e.rotation.y=o*.55),n&&(n.rotation.x=r*.55);const a=i.getObjectByName("yetiHead");a&&(a.rotation.x=-.15-Math.min(s,1)*.2)}function Z_(){const i=new Dt;i.name="snowProps";const t=_e(15266552,{roughness:.78}),e=_e(11063528,{roughness:.35,metalness:.15,emissive:4491434,emissiveIntensity:.12}),n=_e(6975608,{roughness:.92}),s=[[3.2,6.4,.9],[5.4,8,1.1],[4.8,5.8,.7],[2.6,7.8,.85],[5.8,6.6,.75],[3.6,8.6,.95]];for(const[r,o,a]of s){const c=new A(new ii(.35*a,0),t);if(c.position.set(r,.12*a,o),c.scale.set(1.4,.55,1.2),c.castShadow=!0,c.receiveShadow=!0,i.add(c),a>.85){const l=new A(new Nn(.18*a,0),e);l.position.set(r+.15,.28*a,o-.1),l.rotation.set(.3,.5,.2),i.add(l)}}for(const[r,o]of[[6.2,7.5],[2.2,6]]){const a=new A(new ii(.4,0),n);a.position.set(r,.25,o),a.castShadow=!0,i.add(a);const c=new A(new ht(.28,6,4),t);c.position.set(r,.48,o),c.scale.set(1.2,.45,1),i.add(c)}return i}function K_(){const i=new Dt;i.name="godRays";const t=new pe({color:16773320,transparent:!0,opacity:.09,depthWrite:!1,side:Te});for(let e=0;e<5;e++){const n=new A(new dn(1.2+e*.15,18),t);n.position.set(-4+e*2.4,9,-2+e%3*3),n.rotation.z=-.35-e*.04,n.rotation.y=.25,i.add(n)}return i}function uu(){const i=new Dt;i.name="orc";const t=(_,P={})=>new Me({color:_,roughness:P.roughness??.85,metalness:P.metalness??.05,flatShading:!1,...P}),e=t(8034372,{roughness:.82}),n=t(4875304,{roughness:.88}),s=t(2759696,{roughness:.92}),r=t(6955544,{roughness:.88}),o=t(2762544,{roughness:.96}),a=t(3946564,{roughness:.94}),c=t(7030054,{roughness:.82}),l=t(4073492,{roughness:.88}),h=t(9133882,{roughness:.7}),u=t(11309160,{roughness:.97}),d=t(8218435,{roughness:.97}),f=t(3356730,{roughness:.93}),m=t(13686494,{metalness:.82,roughness:.2}),v=t(4861972,{roughness:.88}),g=t(16117988,{roughness:.4,metalness:.08}),p=(_,P=i,F)=>(_.castShadow=!0,_.receiveShadow=!0,F&&Gr(_,F,659976),P.add(_),_),S=(_,P,F,K,X,xt,mt=0)=>{const yt=new A(new We(X,xt,6,14),u);yt.rotation.x=Math.PI/2,yt.position.set(P,F,K),yt.castShadow=!0,_.add(yt);for(let kt=0;kt<mt;kt++){const at=kt/mt*Math.PI*2+.3,St=new A(new rn(xt*1.45,0),kt%2?d:u);St.position.set(P+Math.cos(at)*X,F+kt%2*xt*.4,K+Math.sin(at)*X),St.rotation.set(.3,at,.2),St.scale.set(1.2,.8,1.1),St.castShadow=!0,_.add(St)}},w=new A(new gn(.4,18),new pe({color:0,transparent:!0,opacity:.4,depthWrite:!1}));w.name="contactShadow",w.rotation.x=-Math.PI/2,w.position.y=.03,i.add(w);const x=_=>{const P=new Dt,F=new A(new ee(.12,.22,5,12),f);F.position.set(0,.62,0),p(F,P);const K=new A(new ee(.1,.12,5,12),f);K.position.set(0,.36,.015),p(K,P);const X=new A(new Qt(.11,.12,.16,12),c);X.position.set(0,.2,.02),p(X,P,1.05);const xt=new A(new Qt(.055,.07,.1,12),l);xt.position.set(0,.08,.03),p(xt,P);const mt=new A(new ee(.07,.14,4,10),l);mt.rotation.x=Math.PI/2,mt.position.set(0,.04,.1),mt.scale.set(1.1,1,.7),p(mt,P);for(const yt of[-1,1]){const kt=new A(new qt(.03,.22,.018),h);kt.position.set(0,.16,.02),kt.rotation.z=yt*.7,P.add(kt)}return S(P,0,.29,.02,.114,.02,6),P.position.x=_*.18,P},U=x(-1);U.name="orcLegL",i.add(U);const T=x(1);T.name="orcLegR",i.add(T);const R=new A(new Qt(.24,.27,.22,14),c);R.position.y=.78,p(R,i);for(const[_,P]of[[.18,0],[-.18,Math.PI]]){const F=new rs;F.moveTo(-.14,0),F.lineTo(.14,0),F.lineTo(0,-.22),F.closePath();const K=new A(new Ti(F,{depth:.04,bevelEnabled:!1}),l);K.position.set(0,.72,_),K.rotation.y=P,p(K,i)}for(const _ of[-1,1]){const P=new rs;P.moveTo(-.1,0),P.lineTo(.1,0),P.lineTo(0,-.18),P.closePath();const F=new A(new Ti(P,{depth:.035,bevelEnabled:!1}),h);F.position.set(_*.24,.72,0),F.rotation.y=_*Math.PI*.5,p(F,i)}const D=new A(new Qt(.25,.27,.55,14),c);D.position.y=1.12,p(D,i,1.07),D.name="orcBody";const y=new A(new qt(.42,.32,.16),h);y.position.set(0,1.2,.14),p(y,i);for(const _ of[-1,1]){const P=new A(new ht(.12,12,10),e);P.position.set(_*.34,1.38,0),P.scale.set(.95,.9,1.05),p(P,i)}const M=new A(new ht(.14,12,9,0,Math.PI*2,0,Math.PI*.58),h);M.scale.set(1.15,.85,1.1),M.rotation.z=.4,M.position.set(-.36,1.42,.02),p(M,i,1.04);for(let _=0;_<3;_++){const P=new A(new ht(.016,6,5),m),F=-.4+_*.4;P.position.set(-.36+Math.cos(F)*.02,1.5,Math.sin(F)*.08),i.add(P)}const C=new A(new Qt(.3,.3,.09,10),l);C.position.y=.88,p(C,i);const z=new A(new qt(.11,.08,.05),m);z.position.set(0,.88,.29),i.add(z);const k=(_,P=.22)=>{const F=new A(new qt(.08,.58,.038),l);F.position.set(0,1.18,P),F.rotation.z=_,i.add(F);for(const K of[-.18,.18]){const X=new A(new ht(.018,5,4),m);X.position.set(Math.sin(_)*K*.15,1.18+Math.cos(_)*K,P+.025),i.add(X)}};k(.55,.27),k(-.55,.27),k(.55,-.27),k(-.55,-.27);const H=new A(new Qt(.04,.04,.04,6),m);H.rotation.x=Math.PI/2,H.position.set(0,1.18,-.29),i.add(H);const Z=new A(new Nn(.075,0),m);Z.scale.set(1.15,.9,.45),Z.position.set(0,1.18,.29),i.add(Z);const W=new A(new qt(.12,.14,.08),h);W.position.set(.28,.82,.12),p(W,i);for(const[_,P]of[[0,.11],[Math.PI,-.11]]){const F=new A(new We(.19,.045,6,12,Math.PI*1.05),u);F.rotation.set(Math.PI/2,0,_-Math.PI*.52),F.position.set(0,1.4,P),F.scale.set(1.5,1,1),p(F,i)}for(let _=0;_<13;_++){const P=_/13*Math.PI*2+.28,F=new A(new rn(.052,0),_%2?d:u);F.position.set(Math.cos(P)*.285,1.38+_%3*.02,Math.sin(P)*.175),F.rotation.set(.35,Math.PI/2-P,.2),F.scale.set(1.5,.7,1),p(F,i)}const st=_=>{const P=new Dt;P.name=_<0?"orcArmL":"orcArmR";const F=new A(new ee(.105,.24,5,12),e);F.position.set(0,0,0),F.rotation.z=_*.22,p(F,P);const K=new A(new qt(.02,.16,.04),s);K.position.set(_*-.02,.02,.09),K.rotation.z=_*.22,P.add(K);const X=new A(new Qt(.072,.088,.24,12),c);X.position.set(_*.11,-.31,.02),X.rotation.z=_*.14,p(X,P,1.04);for(const kt of[-1,1]){const at=new A(new qt(.024,.22,.014),l);at.position.set(_*.1,-.31,.03),at.rotation.z=_*.16+kt*.55,P.add(at)}S(P,_*.07,-.17,.02,.094,.017,0);const xt=new Dt;xt.position.set(_*.14,-.48,.03);const mt=new A(new ht(.062,10,8),e);mt.scale.set(.85,1,.95),p(mt,xt);for(let kt=0;kt<4;kt++){const at=new A(new ee(.016,.05,3,6),e);at.position.set((kt-1.5)*.03,-.05,.045),at.rotation.x=1.15,xt.add(at)}const yt=new A(new ee(.016,.045,3,6),e);return yt.position.set(_*.05,-.015,.05),yt.rotation.set(.9,0,_*.8),xt.add(yt),P.add(xt),P.position.set(_*.32,1.3,0),P};i.add(st(-1));const $=st(1);i.add($);const ft=new A(new Qt(.095,.115,.22,10),e);ft.position.set(0,1.46,.005),p(ft,i);const Mt=new A(new ht(.17,12,10),e);Mt.scale.set(1.25,.55,.9),Mt.position.set(0,1.37,0),p(Mt,i);const dt=new Dt;dt.name="orcHead",dt.position.set(0,1.72,.008);const ut=new A(new ht(.19,14,12),e);ut.scale.set(1.05,1.05,.95),p(ut,dt,1.1);const ct=new A(new ht(.15,14,10),e);ct.scale.set(1.08,.4,.62),ct.position.set(0,.105,.092),p(ct,dt);for(const _ of[-1,1]){const P=new A(new ee(.016,.055,3,8),n);P.rotation.z=Math.PI/2+_*-.24,P.rotation.x=-.2,P.position.set(_*.06,.088,.152),dt.add(P);const F=new A(new ht(.055,10,8),e);F.scale.set(.78,.58,.45),F.position.set(_*.1,-.035,.105),dt.add(F)}const G=new A(new ee(.026,.06,4,8),e);G.rotation.x=.35,G.position.set(0,.03,.158),dt.add(G);const Q=new A(new ht(.048,10,8),e);Q.scale.set(1.25,.78,1),Q.position.set(0,-.034,.178),dt.add(Q);for(const _ of[-1,1]){const P=new A(new ht(.015,8,6),n);P.scale.set(.8,1,.7),P.position.set(_*.032,-.052,.195),dt.add(P)}const lt=new A(new ht(.135,14,11),n);lt.scale.set(1,.7,.95),lt.position.set(0,-.105,.07),p(lt,dt);const it=new A(new ht(.05,10,8),n);it.scale.set(1.15,.85,1),it.position.set(0,-.155,.14),dt.add(it);const pt=new A(new ee(.011,.055,3,8),t(3808280));pt.rotation.z=Math.PI/2,pt.position.set(0,-.095,.185),dt.add(pt);for(const _ of[-1,1]){const P=new A(new Ie(.026,.14,7),g);P.position.set(_*.078,-.118,.168),P.rotation.set(.15,0,_*.38),dt.add(P);const F=new A(new ht(.022,8,6),g);F.position.set(_*.07,-.132,.155),dt.add(F)}const wt=new A(new qt(.28,.028,.02),s);wt.position.set(0,.028,.168),dt.add(wt);const Ut=new A(new qt(.012,.09,.012),r);Ut.position.set(-.055,.01,.175),Ut.rotation.z=.55,dt.add(Ut);for(const _ of[-1,1]){const P=new A(new qt(.018,.07,.012),s);P.position.set(_*.11,-.05,.132),P.rotation.z=_*-.2,dt.add(P)}for(const _ of[-1,1]){const P=new A(new ht(.048,10,8),n);P.scale.set(1.1,.9,.6),P.position.set(_*.072,.022,.135),dt.add(P);const F=new A(new ht(.027,10,8),t(14209720,{roughness:.45}));F.scale.set(1.1,.82,.66),F.position.set(_*.072,.022,.149),dt.add(F);const K=new A(new ht(.014,8,6),t(12868120,{emissive:8398856,emissiveIntensity:.45,roughness:.32}));K.position.set(_*.074,.022,.163),dt.add(K);const X=new A(new ht(.008,6,5),t(1182212));X.position.set(_*.075,.022,.172),dt.add(X)}for(const _ of[-1,1]){const P=new A(new ht(.055,10,8),e);P.scale.set(.55,1.7,.45),P.position.set(_*.24,.04,-.02),P.rotation.z=_*-1.25,P.rotation.y=_*.18,P.rotation.x=-.12,p(P,dt)}const Gt=new A(new ht(.192,14,11,0,Math.PI*2,0,Math.PI*.46),o);Gt.position.set(0,.072,-.018),Gt.scale.set(1.04,1,1.06),p(Gt,dt),[[0,.22,.04,1.15],[-.09,.2,.08,1],[.09,.2,.08,1],[-.14,.16,-.02,.95],[.14,.16,-.02,.95],[0,.18,-.12,1.05],[-.1,.14,-.1,.9],[.1,.14,-.1,.9],[-.05,.24,-.02,1.1],[.05,.24,-.02,1.1],[0,.2,.14,.85]].forEach(([_,P,F,K],X)=>{const xt=new A(new rn(.07*K,0),X%3===0?a:o);xt.position.set(_,P-.012,F),xt.rotation.set(-.45+F*1.4,_*1.8,-_*1.2),xt.scale.set(1.1,.42,1.25),dt.add(xt)}),i.add(dt);const rt=new Dt;rt.name="orcSpear",rt.position.set(.14,-.62,.062),rt.rotation.set(.12,0,.05),rt.userData.rest={x:.14,y:-.62,z:.062,rx:.12,ry:0,rz:.05};const L=new A(new Qt(.026,.03,2.05,6),v);L.position.y=1.05,p(L,rt);const At=new A(new Qt(.042,.04,.1,6),l);At.position.y=1.9,rt.add(At);const V=new A(new Nn(.13,0),m);V.scale.set(.4,1.85,.28),V.position.y=2.2,p(V,rt);const tt=new A(new qt(.018,.34,.085),t(15659766,{metalness:.9,roughness:.14}));tt.position.y=2.2,rt.add(tt);const et=new A(new Qt(.052,.038,.1,6),m);et.position.y=1.96,rt.add(et);for(const _ of[-1,1]){const P=new A(new Ie(.04,.14,4),m);P.position.set(_*.055,2.08,0),P.rotation.z=_*1.15,rt.add(P)}const It=new A(new Ie(.06,.22,4),t(15791352,{metalness:.88,roughness:.15}));It.position.y=2.4,rt.add(It);const _t=new A(new Ie(.032,.1,4),m);_t.rotation.x=Math.PI,_t.position.y=.02,rt.add(_t),$.add(rt);const b=new A(new Qt(.45,.5,1.9,8),new pe({visible:!1}));return b.position.y=.95,b.name="hit",i.add(b),i}function ko(i,t){const e=i.getObjectByName("orcSpear"),n=i.getObjectByName("orcArmR"),s=Math.max(0,Math.min(1,t));let r=0,o=0;if(s<=0)r=0,o=0;else if(s<.32)r=s/.32,o=-.35*r;else if(s<.52){const c=(s-.32)/.2;r=1-c,o=-.35+1.45*c}else o=1.1*(1-(s-.52)/.48);if(e){const c=e.userData.rest;c?(e.rotation.x=c.rx-o*.35,e.position.z=c.z+o*.22-r*.1):(e.rotation.x=-o*.95,e.position.z=.12+o*.55-r*.25)}n&&(n.rotation.x=-o*1.05+r*.4);const a=i.getObjectByName("orcHead");a&&(a.rotation.x=-o*.12)}const J_={idle:"Idle",walk:"Walk",attack:"Attack",sword:"Sword guard","sword-walk":"Sword walk",slash:"Slash",chop:"Chop",mine:"Mine"},Ho=[{id:"hunter",name:"Male Hunter",group:"Characters",poses:["idle","walk","sword","sword-walk","slash","chop","mine"],build:()=>uc()},{id:"yeti",name:"Frost Yeti",group:"Creatures",poses:["idle","walk","attack"],build:()=>hu()},{id:"orc",name:"Orc Scout",group:"Creatures",poses:["idle","walk","attack"],build:()=>uu()},{id:"dummy",name:"Training Dummy",group:"World",build:()=>au()},{id:"tree",name:"Whisperwood Tree",group:"World",build:()=>ou(2)},{id:"copper",name:"Copper Rock",group:"World",build:()=>ka("copper",1)},{id:"tin",name:"Tin Rock",group:"World",build:()=>ka("tin",2)},{id:"campfire",name:"Campfire",group:"World",build:()=>cu()},{id:"tent",name:"Tent",group:"World",build:()=>lu()},{id:"crate",name:"Crate",group:"World",build:()=>Ha()},{id:"barrel",name:"Barrel",group:"World",build:()=>Cr()},{id:"bedroll",name:"Bedroll",group:"World",build:()=>Ga()}];class j_{constructor(t){this.canvas=t,this.camera=new He(42,window.innerWidth/window.innerHeight,.08,80),this.root=document.getElementById("studio"),this.listEl=document.getElementById("studio-list"),this.poseEl=document.getElementById("studio-poses"),this.titleEl=document.getElementById("studio-model-name"),this.buildScene(),this.buildList(),this.bindUi(),this.bindOrbit()}root;listEl;poseEl;titleEl;scene=new Ds;camera;current=null;entry=null;pose="idle";animT=0;spherical=new Xh(4.6,1.12,.55);look=new I(0,1,0);dragging=!1;dragBtn=0;lastX=0;lastY=0;autoSpin=!1;openFlag=!1;stage;isOpen(){return this.openFlag}setEnvironment(t){this.scene.environment=t,this.scene.environmentIntensity=.7}toggle(){this.openFlag?this.close():this.open()}open(){this.openFlag=!0,this.root.hidden=!1;const t=document.getElementById("hud");t&&(t.hidden=!0),this.entry||this.select(Ho[0].id),this.fitCurrent()}close(){this.openFlag=!1,this.dragging=!1,this.root.hidden=!0;const t=document.getElementById("hud");t&&(t.hidden=!1)}resize(t,e){this.camera.aspect=t/Math.max(1,e),this.camera.updateProjectionMatrix()}tick(t){this.openFlag&&(this.animT+=t,this.autoSpin&&(this.spherical.theta+=t*.55),this.applyPose(t),this.updateCamera())}render(t){t.setClearColor(7238764),t.render(this.scene,this.camera),t.setClearColor(10405604)}buildScene(){this.scene.background=new bt(7238764),this.scene.fog=new rc(7238764,16,36),this.scene.add(new Os(16054271,3817528,1.05));const t=new Sn(16774364,2.05);t.position.set(4.5,7.5,5.5),t.castShadow=!0,t.shadow.mapSize.set(1024,1024),t.shadow.bias=-4e-4,t.shadow.camera.near=.5,t.shadow.camera.far=24,t.shadow.camera.left=-5,t.shadow.camera.right=5,t.shadow.camera.top=5,t.shadow.camera.bottom=-5,this.scene.add(t);const e=new Sn(13163775,.62);e.position.set(-6,3.5,-2),this.scene.add(e);const n=new Sn(16769208,.38);n.position.set(-2,4,7),this.scene.add(n),this.scene.add(new Vh(6976640,.42));const s=new A(new gn(6.5,48),new Me({color:6054492,roughness:.94,metalness:.04}));s.rotation.x=-Math.PI/2,s.receiveShadow=!0,this.scene.add(s);const r=new A(new yi(1.55,1.62,48),new pe({color:9071144,transparent:!0,opacity:.55,side:Te}));r.rotation.x=-Math.PI/2,r.position.y=.008,this.scene.add(r);const o=new n_(8,16,4866096,3027512);o.position.y=.004;const a=o.material;a.transparent=!0,a.opacity=.35,this.scene.add(o),this.stage=new Dt,this.scene.add(this.stage)}buildList(){this.listEl.innerHTML="";let t="";for(const e of Ho){if(e.group!==t){t=e.group;const s=document.createElement("div");s.className="studio-group",s.textContent=e.group,this.listEl.appendChild(s)}const n=document.createElement("button");n.type="button",n.className="studio-item",n.dataset.id=e.id,n.textContent=e.name,n.addEventListener("click",()=>this.select(e.id)),this.listEl.appendChild(n)}}bindUi(){document.getElementById("btn-studio")?.addEventListener("click",()=>this.toggle()),document.getElementById("studio-close")?.addEventListener("click",()=>this.close()),document.getElementById("studio-reset")?.addEventListener("click",()=>this.fitCurrent()),document.getElementById("studio-spin")?.addEventListener("click",t=>{this.autoSpin=!this.autoSpin,t.currentTarget.classList.toggle("on",this.autoSpin)}),window.addEventListener("keydown",t=>{if(t.key==="Escape"&&this.openFlag){this.close(),t.preventDefault();return}if(t.key.toLowerCase()==="v"&&!t.ctrlKey&&!t.metaKey&&!t.altKey){const e=t.target;if(e&&(e.tagName==="INPUT"||e.tagName==="TEXTAREA"))return;this.toggle()}})}bindOrbit(){const t=s=>{this.openFlag&&s.target===this.canvas&&(this.dragging=!0,this.dragBtn=s.button,this.lastX=s.clientX,this.lastY=s.clientY,this.canvas.setPointerCapture(s.pointerId),s.preventDefault())},e=s=>{if(!this.openFlag||!this.dragging)return;const r=s.clientX-this.lastX,o=s.clientY-this.lastY;if(this.lastX=s.clientX,this.lastY=s.clientY,this.dragBtn===2||s.shiftKey){const a=this.spherical.radius*.0016,c=new I,l=new I;this.camera.matrix.extractBasis(c,l,new I),this.look.addScaledVector(c,-r*a),this.look.addScaledVector(l,o*a)}else this.spherical.theta-=r*.007,this.spherical.phi-=o*.007,this.spherical.phi=Math.max(.06,Math.min(Math.PI-.06,this.spherical.phi))},n=s=>{if(this.dragging){this.dragging=!1;try{this.canvas.releasePointerCapture(s.pointerId)}catch{}}};this.canvas.addEventListener("pointerdown",t),window.addEventListener("pointermove",e),window.addEventListener("pointerup",n),this.canvas.addEventListener("contextmenu",s=>{this.openFlag&&s.preventDefault()}),this.canvas.addEventListener("wheel",s=>{if(!this.openFlag)return;s.preventDefault();const r=this.spherical.radius*(s.deltaY>0?1.08:.92);this.spherical.radius=Math.max(1.1,Math.min(18,r))},{passive:!1})}select(t){const e=Ho.find(n=>n.id===t);e&&(this.entry=e,this.current&&this.stage.remove(this.current),this.current=e.build(),this.current.position.set(0,0,0),this.current.rotation.set(0,0,0),this.current.traverse(n=>{(n.name==="contactShadow"||n.name==="hit"||n.name==="yetiBreath"||n.name==="yetiBreathMist"||n.name==="yetiEyeGlow"||n.name==="yetiEyeLight")&&(n.visible=!1)}),this.stage.add(this.current),this.animT=0,this.pose=e.poses?.[0]??"idle",this.titleEl.textContent=e.name,this.listEl.querySelectorAll(".studio-item").forEach(n=>{n.classList.toggle("on",n.dataset.id===t)}),this.buildPoseBar(),this.fitCurrent())}buildPoseBar(){this.poseEl.innerHTML="";const t=this.entry?.poses;if(!t?.length){this.poseEl.hidden=!0;return}this.poseEl.hidden=!1;for(const e of t){const n=document.createElement("button");n.type="button",n.className="studio-pose",n.textContent=J_[e],n.classList.toggle("on",e===this.pose),n.addEventListener("click",()=>{this.pose=e,this.animT=0,this.buildPoseBar()}),this.poseEl.appendChild(n)}}fitCurrent(){if(!this.current)return;this.current.updateWorldMatrix(!0,!0);const t=new zn().setFromObject(this.current),e=t.getSize(new I),n=t.getCenter(new I);this.look.copy(n),this.spherical.radius=Math.max(2.4,e.length()*1.05),this.spherical.phi=1.12,this.spherical.theta=.55,this.autoSpin=!1,document.getElementById("studio-spin")?.classList.remove("on")}updateCamera(){const t=new I().setFromSpherical(this.spherical).add(this.look);this.camera.position.copy(t),this.camera.lookAt(this.look)}applyPose(t){if(!this.current||!this.entry)return;const e=this.entry.id;if(e==="hunter"&&this.current instanceof Dt){this.applyHunter(this.current);const n=Number(this.current.userData.locomotionY)||0;this.current.position.y=n;return}if(e==="yeti"&&this.current instanceof Dt){this.applyYeti(this.current);return}e==="orc"&&this.current instanceof Dt&&this.applyOrc(this.current)}applyHunter(t){const e=this.pose;if(e==="idle"){Ne(t,null),xi(t,this.animT);return}if(e==="walk"){Ne(t,null),zr(t,this.animT*za(.9),.9,1);return}if(e==="sword"){Ne(t,"sword"),xi(t,this.animT);return}if(e==="sword-walk"){Ne(t,"sword"),zr(t,this.animT*za(.9),.9,1);return}if(e==="slash"){Ne(t,"sword");const n=this.animT%Br/Br;nu(t,n);return}if(e==="chop"){Ne(t,"hatchet"),Ba(t,this.animT*.7,"tree");return}Ne(t,"pickaxe"),Ba(t,this.animT*.7,"rock")}applyYeti(t){if(this.pose==="walk"){mi(t,this.animT,!0,1);return}if(this.pose==="attack"){const e=this.animT%kr/kr;iu(t,e);return}mi(t,this.animT,!1,0)}applyOrc(t){if(this.pose==="walk"){Ls(t,this.animT,!0,1);return}if(this.pose==="attack"){const e=this.animT%Hr/Hr;su(t,e);return}Ls(t,this.animT,!1,0)}}class Q_{scene;camera;overlay;particles=[];floats=[];tmp=new I;chipMat=new Me({color:12880448,emissive:5910544,emissiveIntensity:.35,flatShading:!0,roughness:.85});sparkMat=new Me({color:16769160,emissive:16763972,emissiveIntensity:2,flatShading:!0});hitMat=new Me({color:16772778,emissive:16768392,emissiveIntensity:1.5,flatShading:!0});oreMat=new Me({color:12088115,emissive:6697745,emissiveIntensity:.4,metalness:.5,roughness:.45,flatShading:!0});iceMat=new Me({color:11069695,emissive:4500172,emissiveIntensity:1.2,flatShading:!0,transparent:!0,opacity:.9});clawMat=new Me({color:14215416,emissive:8960989,emissiveIntensity:.8,flatShading:!0});spearMat=new Me({color:13160608,emissive:8956484,emissiveIntensity:.9,flatShading:!0});impactMat=new Me({color:16774864,emissive:16764006,emissiveIntensity:2.4,flatShading:!0,transparent:!0,opacity:.95});telegraphMat=new pe({color:16724753,transparent:!0,opacity:.7,depthWrite:!1,side:Te});frostTeleMat=new pe({color:6737151,transparent:!0,opacity:.65,depthWrite:!1,side:Te});constructor(t,e,n){this.scene=t,this.camera=e,this.overlay=document.createElement("div"),this.overlay.id="vfx-overlay",this.overlay.style.cssText="position:absolute;inset:0;pointer-events:none;overflow:hidden;z-index:15;",n.appendChild(this.overlay)}spawnWoodchips(t,e=10){for(let n=0;n<e;n++){const s=.14+Math.random()*.16,r=new A(new qt(s,s*.35,s*.7),this.chipMat);r.position.copy(t),r.position.x+=(Math.random()-.5)*.35,r.position.y+=.35+Math.random()*.55,r.position.z+=(Math.random()-.5)*.35,r.castShadow=!1,this.scene.add(r),this.particles.push({mesh:r,vel:new I((Math.random()-.5)*3.4,2.2+Math.random()*2.8,(Math.random()-.5)*3.4),life:0,maxLife:1.05+Math.random()*.55,gravity:7,spin:(Math.random()-.5)*14})}}spawnMineSparks(t,e=12){for(let n=0;n<e;n++){const s=n%3===0,r=new A(new ht(s?.11:.07,5,4),s?this.oreMat:this.sparkMat);r.position.copy(t),r.position.x+=(Math.random()-.5)*.3,r.position.y+=.25+Math.random()*.45,r.position.z+=(Math.random()-.5)*.3,this.scene.add(r),this.particles.push({mesh:r,vel:new I((Math.random()-.5)*4.6,2+Math.random()*3.2,(Math.random()-.5)*4.6),life:0,maxLife:.85+Math.random()*.45,gravity:6,spin:(Math.random()-.5)*18})}}spawnHitSparks(t,e=18){for(let n=0;n<e;n++){const s=new A(new Nn(.045+Math.random()*.04,0),this.hitMat);s.position.copy(t),s.position.y+=1+Math.random()*.45,this.scene.add(s),this.particles.push({mesh:s,vel:new I((Math.random()-.5)*5.2,1+Math.random()*2.8,(Math.random()-.5)*5.2),life:0,maxLife:.4+Math.random()*.3,gravity:4.5,spin:(Math.random()-.5)*20})}}spawnFloatingText(t,e,n="#7ec87e"){const s=document.createElement("div");s.className="float-xp",s.textContent=e,s.style.color=n,this.overlay.appendChild(s),this.floats.push({el:s,life:0,maxLife:1.55,world:t.clone(),driftY:0})}spawnXp(t,e,n){this.spawnFloatingText(t.clone().add(new I((Math.random()-.5)*.4,1.6,0)),`+${e} ${n}`,"#7ec87e")}spawnDamage(t,e,n=!1){this.spawnFloatingText(t.clone().add(new I((Math.random()-.5)*.25,1.7,0)),n?`${e}!`:String(e),n?"#ffe066":"#ff8a78")}spawnIceBurst(t,e=16){for(let n=0;n<e;n++){const s=new A(new Nn(.06+Math.random()*.05,0),this.iceMat);s.position.copy(t),s.position.y+=.8+Math.random()*.6,s.position.x+=(Math.random()-.5)*.4,s.position.z+=(Math.random()-.5)*.4,this.scene.add(s),this.particles.push({mesh:s,vel:new I((Math.random()-.5)*5,1.2+Math.random()*3.5,(Math.random()-.5)*5),life:0,maxLife:.55+Math.random()*.4,gravity:5,spin:(Math.random()-.5)*20})}}spawnClawSlash(t,e=8){for(let n=0;n<e;n++){const s=new A(new qt(.08,.02,.28+Math.random()*.15),this.clawMat);s.position.copy(t),s.position.y+=1+Math.random()*.5;const r=n/e*Math.PI-Math.PI/2;s.rotation.y=r,s.rotation.z=-.4,this.scene.add(s),this.particles.push({mesh:s,vel:new I(Math.cos(r)*3.5,.5+Math.random(),Math.sin(r)*3.5),life:0,maxLife:.28+Math.random()*.15,gravity:2,spin:8})}}spawnSpearThrust(t,e=8){for(let n=0;n<e;n++){const s=new A(new Ie(.04,.22+Math.random()*.12,4),this.spearMat);s.position.copy(t),s.position.y+=.9+Math.random()*.5;const r=n/e*Math.PI*.6-.3;s.rotation.z=r,s.rotation.x=Math.PI/2,this.scene.add(s),this.particles.push({mesh:s,vel:new I(Math.sin(r)*3.2,.4+Math.random(),Math.cos(r)*3.2),life:0,maxLife:.28+Math.random()*.15,gravity:2,spin:10})}}spawnImpactBurst(t,e=18,n=!1){const s=n?this.iceMat:this.impactMat;for(let o=0;o<e;o++){const a=new A(new Nn(.05+Math.random()*.06,0),s);a.position.copy(t),a.position.y+=.9+Math.random()*.55,this.scene.add(a);const c=Math.random()*Math.PI*2,l=2.5+Math.random()*4.5;this.particles.push({mesh:a,vel:new I(Math.cos(c)*l,1.5+Math.random()*3.2,Math.sin(c)*l),life:0,maxLife:.4+Math.random()*.35,gravity:5,spin:(Math.random()-.5)*22})}const r=new A(new yi(.15,.45,20),new pe({color:n?11069695:16771232,transparent:!0,opacity:.7,depthWrite:!1,side:Te}));r.rotation.x=-Math.PI/2,r.position.set(t.x,.12,t.z),this.scene.add(r),this.particles.push({mesh:r,vel:new I(0,.05,0),life:0,maxLife:.35,gravity:0,spin:0})}spawnTelegraph(t,e=!1,n=.55,s=1.05){const r=new A(new yi(s*.72,s,28),e?this.frostTeleMat.clone():this.telegraphMat.clone());r.rotation.x=-Math.PI/2,r.position.set(t.x,.09,t.z),this.scene.add(r),this.particles.push({mesh:r,vel:new I(0,0,0),life:0,maxLife:n,gravity:0,spin:1.2});const o=(e?this.frostTeleMat:this.telegraphMat).clone();o.opacity=e?.28:.32;const a=new A(new gn(s*.7,28),o);a.rotation.x=-Math.PI/2,a.position.set(t.x,.07,t.z),a.scale.setScalar(.15),this.scene.add(a),this.particles.push({mesh:a,vel:new I(0,.01,0),life:0,maxLife:n,gravity:0,spin:0}),a.userData.teleFill=!0}spawnArcTelegraph(t,e,n=!1,s=.5){const r=(n?this.frostTeleMat:this.telegraphMat).clone();r.opacity=.65;const o=new A(new yi(.55,1.15,20,1,0,Math.PI*.85),r);o.rotation.x=-Math.PI/2.6,o.rotation.z=e,o.position.set(t.x,.85,t.z),this.scene.add(o),this.particles.push({mesh:o,vel:new I(0,.15,0),life:0,maxLife:s,gravity:0,spin:0})}update(t){for(let e=this.particles.length-1;e>=0;e--){const n=this.particles[e];n.life+=t,n.vel.y-=n.gravity*t,n.mesh.position.addScaledVector(n.vel,t),n.mesh.rotation.x+=n.spin*t,n.mesh.rotation.z+=n.spin*.7*t;const s=n.life/n.maxLife,r=Math.max(.05,1-s*.85),o=n.mesh.geometry.type;if(!!(n.mesh.userData&&n.mesh.userData.teleFill)){const c=Math.min(1,s/.85);n.mesh.scale.setScalar(.15+c*.85);const l=n.mesh.material;l&&l.opacity!==void 0&&(l.opacity=Math.max(0,(1-s)*.35))}else if(o==="RingGeometry"){const c=n.gravity===0&&n.spin>0&&n.spin<3?1+Math.sin(s*Math.PI)*.08:1+s*1.8;n.mesh.scale.setScalar(c);const l=n.mesh.material;l&&l.opacity!==void 0&&(l.opacity=Math.max(0,(1-s)*(n.spin>0&&n.spin<3?.6:.7)))}else if(o==="CircleGeometry"){n.mesh.scale.setScalar(r);const c=n.mesh.material;c&&c.opacity!==void 0&&(c.opacity=Math.max(0,(1-s)*.5))}else n.mesh.scale.setScalar(r);n.life>=n.maxLife&&(this.scene.remove(n.mesh),n.mesh.geometry.dispose(),this.particles.splice(e,1))}for(let e=this.floats.length-1;e>=0;e--){const n=this.floats[e];n.life+=t,n.driftY+=t*.55,this.tmp.set(n.world.x,n.world.y+n.driftY,n.world.z),this.tmp.project(this.camera);const s=(this.tmp.x*.5+.5)*window.innerWidth,r=(-this.tmp.y*.5+.5)*window.innerHeight,o=Math.max(0,1-n.life/n.maxLife);n.el.style.transform=`translate(-50%, -50%) translate(${s}px, ${r}px)`,n.el.style.opacity=String(o),(n.life>=n.maxLife||this.tmp.z>1)&&(n.el.remove(),this.floats.splice(e,1))}}}const du="hunterscape_save_v1";function tv(i){const t=new Set(Object.values(i.equipped).filter(e=>!!e));return i.inventory=i.inventory.filter(e=>{const n=Kn[e.id];return!(n&&!n.stackable&&t.has(e.id))}),i}function ev(){try{const i=localStorage.getItem(du);if(!i)return xr();const t=JSON.parse(i);if(t.version!==1)return xr();const e=xr();return tv({...e,...t,skills:{...e.skills,...t.skills},equipped:{...e.equipped,...t.equipped},inventory:t.inventory??e.inventory})}catch{return xr()}}function nv(i){try{localStorage.setItem(du,JSON.stringify(i))}catch{}}const wr=1.6,iv=1.8,Ss=2.35,Go=5.8,Es=2.15,Vo=5.4,Wo=4.2,sv=.7,rv=2.45,ov=9.5,av=12,cv=3,eh=80,lv=28,nh=5,hv=10,ih=62,uv=22,sh=4,dv=8,ke={x:-6.2,z:-4.8},Ee={x:4.2,z:7.2},fv={constitution:"Constitution",attack:"Attack",strength:"Strength",defence:"Defence",woodcutting:"Woodcutting",mining:"Mining"};class pv{renderer;scene;camera;player;raycaster=new e_;pointer=new gt;clock=new Wh;hud;studio;vfx;save;objects=[];ground;activity={type:"idle"};moveMarker;saveTimer=0;keys=new Set;camOffset=new I(0,8.7,7.15);camZoom=1;camZoomTarget=1;camLook=new I;dummyTarget=null;yetiTarget=null;yetiAttackCd=0;yetiSwipeT=0;yetiAggroed=!1;orcTarget=null;orcAttackCd=0;orcSwipeT=0;orcAggroed=!1;running=!0;sun;rim;pendingGather=null;pendingCombat=!1;toolSwing=0;animTime=0;playerFlinch=0;playerKnock=new I;yetiHitDone=!1;orcHitDone=!1;deathAnims=[];camSmooth=new I;lookSmooth=new I;combatCamPull=0;moveSpeedCur=0;moveBlend=0;stoppingSteps=0;gaitPhase=0;poseSmoother=new u_;lastMoveDir=new I(0,0,1);hitReacts=[];yetiMoveBlend=0;orcMoveBlend=0;yetiTeleDone=!1;orcTeleDone=!1;playerTeleDone=!1;combatOorT=0;combatAbortT=0;pendingCombatTarget=null;pendingCombatChat="";constructor(t){this.save=ev(),this.hud=new F_,this.renderer=new ic({canvas:t,antialias:!0,alpha:!1}),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.renderer.setSize(window.innerWidth,window.innerHeight),this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=oh,this.renderer.outputColorSpace=Ue,this.renderer.toneMapping=Vr,this.renderer.toneMappingExposure=1.42,this.renderer.setClearColor(10405604),this.scene=new Ds,this.scene.fog=new sc(12769e3,.012),this.camera=new He(48,window.innerWidth/window.innerHeight,.1,140),this.setupLights(),this.setupReflectionEnv(),this.studio=new j_(t),this.studio.setEnvironment(this.scene.environment),this.hud.setEnvironment(this.scene.environment),this.scene.add($_(70)),this.ground=k_(48),this.scene.add(this.ground),this.scene.add(X_()),this.buildWorld(),this.player=uc(),this.player.position.set(this.save.x,ye(this.save.x,this.save.z),this.save.z),this.scene.add(this.player),this.syncHeldTool(),xi(this.player,0);const e=document.getElementById("app")??document.body;this.vfx=new Q_(this.scene,this.camera,e),this.moveMarker=new A(new yi(.25,.38,24),new pe({color:13936715,transparent:!0,opacity:.85,side:Te})),this.moveMarker.rotation.x=-Math.PI/2,this.moveMarker.position.y=.06,this.moveMarker.visible=!1,this.scene.add(this.moveMarker),this.bindInput(t),this.hud.onAction=n=>this.handleAction(n),this.hud.onInventoryClick=n=>this.handleInvClick(n),this.hud.onGearSlotClick=n=>this.unequipSlot(n),this.refreshUI(),this.hud.chat("Welcome to Thornrest Camp in the Whisperwood.","system"),this.hud.chat("Tap the ground to walk. Chop trees, mine rocks, or spar with the training dummy.","system"),this.hud.chat("A Frost Yeti stalks the north-east clearing — keep your distance until you are ready.","combat"),this.hud.chat("An Orc Scout prowls the south-west trail — spear ready, leather and tooth to loot.","combat"),this.hud.chat("Open Gear (C) to inspect your hero and equip or unequip items.","system"),this.hud.chat("Scroll the wheel or use + / − to zoom the camera.","system"),this.hud.chat("Your progress is saved in this browser.","system"),window.addEventListener("resize",()=>this.onResize()),this.animate()}setupLights(){const t=new Os(15923199,5929522,1.08);this.scene.add(t),this.sun=new Sn(16774880,2.08),this.sun.position.set(18,28,10),this.sun.castShadow=!0,this.sun.shadow.mapSize.set(2048,2048),this.sun.shadow.bias=-3e-4,this.sun.shadow.normalBias=.035,this.sun.shadow.radius=3.2,this.sun.shadow.camera.near=2,this.sun.shadow.camera.far=58,this.sun.shadow.camera.left=-24,this.sun.shadow.camera.right=24,this.sun.shadow.camera.top=24,this.sun.shadow.camera.bottom=-24,this.scene.add(this.sun),this.scene.add(this.sun.target),this.rim=new Sn(13690623,.48),this.rim.position.set(-14,10,-16),this.scene.add(this.rim);const e=new Sn(16769712,.46);e.position.set(-6,6,4),this.scene.add(e),this.scene.add(new Vh(6978696,.44))}setupReflectionEnv(){const t=new Pa(this.renderer),e=new Ds;e.add(new Os(15923199,4020770,1.15));const n=new A(new ht(10,16,12),new pe({color:11848932,side:Fe}));e.add(n);const s=new A(new ht(2.2,12,10),new pe({color:16773576}));s.position.set(7,9,5),e.add(s);const r=new A(new gn(10,16),new pe({color:4880952}));r.rotation.x=-Math.PI/2,r.position.y=-1.6,e.add(r),this.scene.environment=t.fromScene(e,.04).texture,this.scene.environmentIntensity=.62,t.dispose()}buildWorld(){const t=(y,M,C,z=0)=>{y.position.set(M,ye(M,C)+z,C)},e=lu();t(e,-3.5,-1.5),this.scene.add(e);const n=cu();t(n,-1.2,-.5),this.scene.add(n);const s=Ha();t(s,-2.4,-2.2),s.rotation.y=.3,this.scene.add(s);const r=Cr();t(r,-4.2,-.4),this.scene.add(r);const o=Cr();t(o,-4.55,.15),o.rotation.y=.6,this.scene.add(o);const a=Ga();t(a,-2.8,.4),a.rotation.y=-.4,this.scene.add(a);const c=[[-8,-6],[8,-7],[-10,4],[9,5],[0,-10],[-6,8],[6,9],[10,0],[-11,-2]];for(const[y,M]of c){const C=new Dt,z=new A(new ht(.4+Math.random()*.2,7,5),new Me({color:2775592,flatShading:!0,roughness:.95}));z.position.y=.35,z.castShadow=!0,C.add(z);const k=new A(new ht(.28,6,4),new Me({color:3828272,flatShading:!0}));k.position.set(.25,.3,.1),k.castShadow=!0,C.add(k),C.position.set(y,ye(y,M),M),this.scene.add(C)}[[4.5,-3],[6.2,-1.5],[8.2,.2],[7.4,2.6],[1.2,5.6],[-4.2,5.2],[-8.2,2.4],[-8.4,-2.2],[2,-6],[-2.5,-7],[8,-5],[-9.2,-.4]].forEach(([y,M],C)=>{const z=ou(C);z.position.set(y,ye(y,M),M),this.scene.add(z),this.objects.push({kind:"tree",mesh:z,id:`tree_${C}`,hp:1,maxHp:1,depleted:!1,respawnAt:0})}),[{x:1.2,z:3.4,ore:"copper"},{x:-.3,z:4.1,ore:"copper"},{x:2.6,z:4,ore:"tin"},{x:-1.8,z:3.2,ore:"tin"},{x:.8,z:5.2,ore:"copper"},{x:3.4,z:2.2,ore:"copper"},{x:-3.2,z:2.8,ore:"tin"}].forEach((y,M)=>{const C=ka(y.ore,M);C.position.set(y.x,ye(y.x,y.z),y.z),this.scene.add(C),this.objects.push({kind:"rock",mesh:C,id:`rock_${M}`,hp:1,maxHp:1,depleted:!1,respawnAt:0,meta:{ore:y.ore}})});const u=au();u.position.set(2.5,ye(2.5,-2.5),-2.5),this.scene.add(u);const d={kind:"dummy",mesh:u,id:"dummy_0",hp:50,maxHp:50,depleted:!1,respawnAt:0};this.objects.push(d),this.dummyTarget=d;const f=hu();f.position.set(Ee.x,ye(Ee.x,Ee.z),Ee.z),f.rotation.y=Math.PI*.85,f.visible=!0,f.scale.setScalar(1.15),this.scene.add(f);const m={kind:"yeti",mesh:f,id:"yeti_0",hp:eh,maxHp:eh,depleted:!1,respawnAt:0};this.objects.push(m),this.yetiTarget=m;const v=Z_();v.traverse(y=>{y===v||!y.isMesh||(y.position.y+=ye(y.position.x,y.position.z))}),this.scene.add(v);const g=new Dt;g.name="fallingSnow";for(let y=0;y<48;y++){const M=new A(new ht(.035+Math.random()*.03,4,3),new pe({color:15267071,transparent:!0,opacity:.55+Math.random()*.35,depthWrite:!1}));M.position.set(2.5+Math.random()*5.5,1.5+Math.random()*6,5.5+Math.random()*4.5),M.userData.fall=.4+Math.random()*.9,M.userData.drift=(Math.random()-.5)*.35,M.userData.baseY=M.position.y,g.add(M)}this.scene.add(g);const p=uu();p.position.set(ke.x,ye(ke.x,ke.z),ke.z),p.rotation.y=Math.PI*.25,this.scene.add(p);const S={kind:"orc",mesh:p,id:"orc_0",hp:ih,maxHp:ih,depleted:!1,respawnAt:0};this.objects.push(S),this.orcTarget=S,this.scene.add(K_());const w=Ha();t(w,-3.6,-2.6),w.rotation.y=-.5,this.scene.add(w);const x=Cr();t(x,-1.8,-2.4),this.scene.add(x);const U=Ga();t(U,-3.9,.9),U.rotation.y=.8,this.scene.add(U);const T=new A(new Qt(.22,.28,.35,7),new Me({color:4861972,flatShading:!0,roughness:.9}));T.position.set(.4,ye(.4,-1.6)+.18,-1.6),T.castShadow=!0,this.scene.add(T);const R=new A(new ht(.08,8,6),new Me({color:16764006,emissive:16755251,emissiveIntensity:1.2,flatShading:!0}));R.position.set(-.2,ye(-.2,-1.8)+.85,-1.8),this.scene.add(R);const D=new lc(16755285,.55,6);D.position.copy(R.position),this.scene.add(D)}bindInput(t){const e=n=>{this.studio.isOpen()||n.target!==t||(this.pointer.x=n.clientX/window.innerWidth*2-1,this.pointer.y=-(n.clientY/window.innerHeight)*2+1,this.handleWorldClick())};t.addEventListener("pointerdown",e),window.addEventListener("wheel",n=>{this.studio.isOpen()||n.target?.closest("#gear-panel, #inventory, #skills-panel, #chat, #studio")||(n.preventDefault(),this.nudgeZoom(Math.sign(n.deltaY)||1,.11))},{passive:!1}),window.addEventListener("keydown",n=>{if(!this.studio.isOpen()){if(this.keys.add(n.key.toLowerCase()),n.key==="1"&&this.handleAction("attack"),n.key==="2"&&this.handleAction("chop"),n.key==="3"&&this.handleAction("mine"),n.key==="4"&&this.handleAction("eat"),n.key==="5"&&this.handleAction("examine"),(n.key==="-"||n.key==="_")&&this.nudgeZoom(1,.16),(n.key==="="||n.key==="+")&&this.nudgeZoom(-1,.16),n.key.toLowerCase()==="k"){const s=document.getElementById("skills-panel");s&&(s.hidden=!s.hidden)}n.key.toLowerCase()==="c"&&this.hud.setGearOpen(!this.hud.isGearOpen())}}),window.addEventListener("keyup",n=>this.keys.delete(n.key.toLowerCase()))}handleWorldClick(){this.raycaster.setFromCamera(this.pointer,this.camera);const t=[];for(const s of this.objects)s.depleted&&s.kind!=="dummy"&&s.kind!=="yeti"&&s.kind!=="orc"||s.mesh.traverse(r=>{r.isMesh&&r.name!=="outline"&&t.push(r)});const e=this.raycaster.intersectObjects(t,!1);if(e.length>0){let s=e[0].object;for(;s&&!this.objects.find(o=>o.mesh===s);)s=s.parent;const r=this.objects.find(o=>o.mesh===s);if(r){this.interactWith(r);return}}const n=this.raycaster.intersectObject(this.ground);if(n.length>0){const s=n[0].point;this.pendingCombat=!1,this.pendingCombatTarget=null,this.pendingCombatChat="",this.pendingGather=null,this.startMove(s.x,s.z)}}interactWith(t){if(t.kind==="yeti"){if(t.depleted||t.hp<=0){this.hud.chat("The Frost Yeti lies slain. It will return before long.","system");return}this.yetiAggroed=!0,this.approachThenCombat(t,"You ready your bronze sword against the Frost Yeti!");return}if(t.kind==="orc"){if(t.depleted||t.hp<=0){this.hud.chat("The Orc Scout lies slain. Another will take its place.","system");return}this.orcAggroed=!0,this.approachThenCombat(t,"You ready your bronze sword against the Orc Scout!");return}if(t.kind==="dummy"){if(t.hp<=0){this.hud.chat("The training dummy is already collapsed.","system");return}this.approachThenCombat(t,"You ready your bronze sword against the training dummy.");return}if(t.depleted){this.hud.chat("That resource is depleted. Wait for it to respawn.","system");return}if(t.kind==="tree"){if(!this.save.equipped.hatchet){this.hud.chat(this.hasItem("bronze_hatchet")?"Equip your hatchet from the Gear window first.":"You need a hatchet to chop trees.","system"),this.hasItem("bronze_hatchet")&&this.hud.setGearOpen(!0);return}this.approachThenGather(t,2.4,"Chopping Whisperwood…");return}if(t.kind==="rock"){if(!this.save.equipped.pickaxe){this.hud.chat(this.hasItem("bronze_pickaxe")?"Equip your pickaxe from the Gear window first.":"You need a pickaxe to mine rocks.","system"),this.hasItem("bronze_pickaxe")&&this.hud.setGearOpen(!0);return}this.approachThenGather(t,2.6,`Mining ${t.meta?.ore==="tin"?"tin":"copper"}…`)}}combatName(t){return t.kind==="yeti"?"Frost Yeti":t.kind==="orc"?"Orc Scout":t.kind==="dummy"?"Training Dummy":t.kind}isMonster(t){return t.kind==="yeti"||t.kind==="orc"}monsterAttackRange(t){return t.kind==="yeti"?Ss:t.kind==="orc"?Es:iv}beginCombat(t,e){if(!this.save.equipped.weapon){this.hud.chat("Equip a weapon from the Gear window first.","system"),this.hud.setGearOpen(!0);return}this.hud.chat(e,"combat"),this.pendingGather=null,this.pendingCombat=!1,this.pendingCombatTarget=null,this.pendingCombatChat="",this.combatOorT=0,this.combatAbortT=0,this.activity={type:"combat",target:t,cooldown:.15,swingT:0,swingDur:Br,hitDone:!1},Ne(this.player,"sword"),this.hud.showTarget(this.combatName(t),t.hp/t.maxHp),this.combatCamPull=1}approachThenCombat(t,e){if(!this.save.equipped.weapon){this.hud.chat("Equip a weapon from the Gear window first.","system"),this.hud.setGearOpen(!0);return}const n=this.monsterAttackRange(t);if(this.distTo(t)>n*.92){const r=t.mesh.position.x-this.player.position.x,o=t.mesh.position.z-this.player.position.z,a=Math.hypot(r,o)||1,c=n*.78;this.startMove(t.mesh.position.x-r/a*c,t.mesh.position.z-o/a*c),this.pendingCombat=!0,this.pendingCombatTarget=t,this.pendingCombatChat=e,this.hud.chat(`You close on the ${this.combatName(t)}…`,"combat");return}this.beginCombat(t,e)}nearestCombatTarget(){let t=null,e=1/0;for(const n of this.objects){if(n.kind!=="yeti"&&n.kind!=="orc"&&n.kind!=="dummy"||n.hp<=0||n.depleted)continue;const s=this.distTo(n);s<e&&(e=s,t=n)}return e<16?t:null}approachThenGather(t,e,n){const s=t.mesh.position.x-this.player.position.x,r=t.mesh.position.z-this.player.position.z,o=Math.hypot(s,r);if(o>wr){const a=t.mesh.position.x-s/o*(wr*.85),c=t.mesh.position.z-r/o*(wr*.85);this.startMove(a,c),this.pendingGather={obj:t,duration:e,label:n};return}this.faceToward(t.mesh.position.x,t.mesh.position.z),this.activity={type:"gather",target:t,elapsed:0,duration:e,label:n},Ne(this.player,t.kind==="tree"?"hatchet":"pickaxe"),this.hud.showProgress(n,0)}startMove(t,e){t=Math.max(-14,Math.min(14,t)),e=Math.max(-14,Math.min(14,e)),this.activity={type:"move",tx:t,tz:e},this.syncHeldTool(),this.moveMarker.position.set(t,ye(t,e)+.06,e),this.moveMarker.visible=!0,this.hud.hideProgress(),this.hud.hideTarget()}handleAction(t){switch(t){case"attack":{if(!this.save.equipped.weapon){this.hud.chat("Equip a weapon from the Gear window first.","system"),this.hud.setGearOpen(!0);return}const e=this.nearestCombatTarget();if(!e){this.hud.chat("No enemies nearby to attack.","system");return}const n=this.monsterAttackRange(e);if(this.distTo(e)>n+2){this.hud.chat(`${this.combatName(e)} is too far. Walk closer.`,"system"),this.pendingGather=null;const r=e.mesh.position.x-this.player.position.x,o=e.mesh.position.z-this.player.position.z,a=Math.hypot(r,o)||1;this.startMove(e.mesh.position.x-r/a*(n*.78),e.mesh.position.z-o/a*(n*.78)),this.pendingCombat=!0,this.pendingCombatTarget=e,this.pendingCombatChat=`You ready your bronze sword against the ${this.combatName(e)}!`;return}this.interactWith(e);break}case"chop":{const e=this.nearest("tree");if(!e){this.hud.chat("No trees nearby.","system");return}this.interactWith(e);break}case"mine":{const e=this.nearest("rock");if(!e){this.hud.chat("No rocks nearby.","system");return}this.interactWith(e);break}case"eat":this.eatFood();break;case"examine":this.examineNearest();break}}nearest(t){let e=null,n=1/0;for(const s of this.objects){if(s.kind!==t||s.depleted&&t!=="dummy")continue;const r=this.distTo(s);r<n&&(n=r,e=s)}return n<14?e:null}examineNearest(){const t=[...this.objects].sort((e,n)=>this.distTo(e)-this.distTo(n))[0];if(!t||this.distTo(t)>5){this.hud.chat("You examine the Whisperwood clearing. Birds call from the canopy.","system");return}t.kind==="tree"?this.hud.chat("A tall Whisperwood tree. Good for training woodcutting.","system"):t.kind==="rock"?this.hud.chat(`A rocky outcrop laced with ${t.meta?.ore??"ore"}. Suitable for mining.`,"system"):t.kind==="yeti"?this.hud.chat("A massive Frost Yeti. Dark stripes mark its fur; amber eyes burn with hunger.","combat"):t.kind==="orc"?this.hud.chat("An Orc Scout in spiked tan fur and leather. White tusks and a long spear gleam.","combat"):this.hud.chat("A stuffed training dummy. Safe practice for combat skills.","system")}eatFood(){const t=this.save.inventory.findIndex(e=>e.id==="camp_rations");if(t<0){this.hud.chat("You have no camp rations left.","system");return}if(this.save.hp>=this.save.maxHp){this.hud.chat("You are already at full health.","system");return}this.consumeAt(t,1),this.save.hp=Math.min(this.save.maxHp,this.save.hp+25),this.hud.chat("You eat camp rations and recover 25 health.","loot"),this.refreshUI(),this.persist()}handleInvClick(t){const e=this.save.inventory[t];if(!e)return;const n=Kn[e.id];if(n?.slot){this.equipFromInventory(t);return}this.hud.chat(`${n?.name??e.id}${e.qty>1?` ×${e.qty}`:""}`,"system"),e.id==="camp_rations"&&this.eatFood()}heldTool(){if(this.activity.type==="combat"||this.combatAbortT>0)return this.save.equipped.weapon?"sword":null;if(this.activity.type==="gather"){const t=this.activity.target.kind;if(t==="tree")return this.save.equipped.hatchet?"hatchet":null;if(t==="rock")return this.save.equipped.pickaxe?"pickaxe":null}return this.save.equipped.weapon?"sword":null}syncHeldTool(){Ne(this.player,this.heldTool())}equipFromInventory(t){const e=this.save.inventory[t];if(!e)return;const n=Kn[e.id];if(!n?.slot)return;const s=this.save.equipped[n.slot];this.save.inventory.splice(t,1),s&&this.addItem(s,1),this.save.equipped[n.slot]=e.id,this.syncHeldTool(),this.hud.setGearOpen(!0),this.hud.chat(`You equip the ${n.name}.`,"system"),this.refreshUI(),this.hud.setEquipment(this.save,`Equipped ${n.name}`),this.hud.showSlotPreview(n.slot,this.save),this.persist()}unequipSlot(t){const e=this.save.equipped[t];if(!e){this.hud.inspectGear(`${t[0].toUpperCase()}${t.slice(1)} slot is empty`);return}if(this.save.inventory.length>=28){this.hud.chat("Inventory full — cannot unequip.","system");return}this.save.equipped[t]=null,this.addItem(e,1),this.syncHeldTool();const n=Kn[e];this.hud.setEquipment(this.save,`Unequipped ${n?.name??e}`),this.hud.chat(`You unequip the ${n?.name??e}.`,"system"),this.refreshUI(),this.persist()}distTo(t){return Math.hypot(t.mesh.position.x-this.player.position.x,t.mesh.position.z-this.player.position.z)}faceToward(t,e,n=1/30,s=10){const r=t-this.player.position.x,o=e-this.player.position.z;if(Math.hypot(r,o)>.01){const a=Math.atan2(r,o);this.player.rotation.y=ws(this.player.rotation.y,a,s,n)}}hasItem(t){return this.save.inventory.some(e=>e.id===t)}addItem(t,e=1){const n=Kn[t];if(!n)return!1;if(n.stackable){const s=this.save.inventory.find(r=>r.id===t);if(s)return s.qty+=e,!0}return this.save.inventory.length>=28?(this.hud.chat("Inventory full!","system"),!1):(this.save.inventory.push({id:t,qty:e}),!0)}consumeAt(t,e){const n=this.save.inventory[t];n&&(n.qty-=e,n.qty<=0&&this.save.inventory.splice(t,1))}grantXp(t,e){const n=this.save.skills[t],s=n.level;n.xp+=e,n.level=s_(n.xp),this.hud.chat(`+${e} ${t} XP`,"xp"),this.vfx.spawnXp(this.player.position,e,fv[t]),n.level>s&&(this.hud.chat(`Congratulations! Your ${t} level is now ${n.level}.`,"xp"),t==="constitution"&&(this.save.maxHp=100+(n.level-10)*10,this.save.hp=Math.min(this.save.hp+10,this.save.maxHp)))}update(t){this.save.stamina=Math.min(100,this.save.stamina+t*4),this.save.focus=Math.min(100,this.save.focus+t*2),this.save.hp<this.save.maxHp&&(this.save.hp=Math.min(this.save.maxHp,this.save.hp+t*1.5));const e=performance.now()/1e3;for(const s of this.objects)s.depleted&&s.kind!=="dummy"&&s.kind!=="yeti"&&s.kind!=="orc"&&e>=s.respawnAt&&(s.depleted=!1,s.mesh.visible=!0,this.hud.chat(s.kind==="tree"?"A Whisperwood tree has grown back.":"An ore rock has respawned.","system")),s.kind==="dummy"&&s.hp<=0&&e>=s.respawnAt&&(s.hp=s.maxHp,s.depleted=!1,s.mesh.visible=!0,s.mesh.rotation.set(0,0,0),s.mesh.position.y=ye(s.mesh.position.x,s.mesh.position.z),s.mesh.scale.setScalar(1),this.hud.chat("The training dummy is patched up and ready again.","system")),s.kind==="yeti"&&s.depleted&&e>=s.respawnAt&&(s.hp=s.maxHp,s.depleted=!1,s.mesh.visible=!0,s.mesh.rotation.set(0,Math.PI*.85,0),s.mesh.scale.setScalar(1.15),s.mesh.position.set(Ee.x,ye(Ee.x,Ee.z),Ee.z),this.deathAnims=this.deathAnims.filter(r=>r.mesh!==s.mesh),this.yetiAggroed=!1,this.yetiAttackCd=0,this.yetiSwipeT=0,this.yetiHitDone=!1,this.yetiTeleDone=!1,this.yetiMoveBlend=0,yr(s.mesh,0),mi(s.mesh,this.animTime,!1),this.hud.chat("A Frost Yeti stomps back into the north-east clearing!","combat")),s.kind==="orc"&&s.depleted&&e>=s.respawnAt&&(s.hp=s.maxHp,s.depleted=!1,s.mesh.visible=!0,s.mesh.rotation.set(0,Math.PI*.25,0),s.mesh.scale.setScalar(1),s.mesh.position.set(ke.x,ye(ke.x,ke.z),ke.z),this.orcAggroed=!1,this.orcAttackCd=0,this.orcSwipeT=0,this.orcHitDone=!1,ko(s.mesh,0),this.hud.chat("An Orc Scout stalks back onto the south-west trail!","combat"));const n=this.scene.getObjectByName("fallingSnow");if(n&&n.children.forEach(s=>{s.position.y-=s.userData.fall*t,s.position.x+=s.userData.drift*t,s.position.y<.05&&(s.position.y=6+Math.random()*2,s.position.x=2.5+Math.random()*5.5,s.position.z=5.5+Math.random()*4.5)}),this.scene.traverse(s=>{if(s.name==="flame"&&(s.scale.y=.9+Math.sin(e*8)*.15,s.rotation.y+=t*2),s.name==="flameGlow"){const r=.9+Math.sin(e*6)*.2;s.scale.setScalar(r)}if(s.name==="yetiBreath"){const r=this.yetiAggroed?1.35:1,o=(.85+Math.sin(e*3.4)*.45)*r;s.scale.set(o,.9+o*.5,o*1.25);const a=s.material;a&&a.opacity!==void 0&&(a.opacity=(.4+Math.sin(e*4.2)*.22)*(this.yetiAggroed?1.15:1))}if(s.name==="yetiBreathMist"){const r=this.yetiAggroed?1.3:1,o=(.85+Math.sin(e*2.8+s.position.z)*.4)*r;s.scale.setScalar(o);const a=s.material;a&&a.opacity!==void 0&&(a.opacity=Math.max(.08,.28*o))}if(s.name==="yetiEyeGlow"){const r=this.yetiAggroed||this.activity.type==="combat"&&this.activity.target?.kind==="yeti",o=.95+Math.sin(e*6.2)*(r?.55:.28);s.scale.setScalar(o*(r?1.65:1.1));const a=s.material;a&&a.opacity!==void 0&&(a.opacity=r?.72+Math.sin(e*7)*.18:.45)}if(s.name==="yetiEye"){const r=this.yetiAggroed||this.activity.type==="combat"&&this.activity.target?.kind==="yeti",o=s.material;if(o&&o.emissiveIntensity!==void 0){const a=r?1.35:.55;o.emissiveIntensity=a+Math.sin(e*6.8)*(r?.35:.12)}}if(s.name==="yetiEyeLight"){const r=this.yetiAggroed||this.activity.type==="combat"&&this.activity.target?.kind==="yeti",o=s;o.intensity=(r?1.85:.85)+Math.sin(e*7.1)*(r?.55:.15),o.distance=r?5.2:3.4}}),this.sun.target.position.set(this.player.position.x,this.player.position.y,this.player.position.z),this.sun.target.updateMatrixWorld(),this.animTime+=t,this.playerFlinch>0){const s=this.playerFlinch>.65?2.4:3.6;if(this.playerFlinch=Math.max(0,this.playerFlinch-t*s),Yl(this.player,this.playerFlinch,this.playerFlinch>.65?1.1:.55),this.player.position.x+=this.playerKnock.x*t,this.player.position.z+=this.playerKnock.z*t,this.playerKnock.multiplyScalar(Math.max(0,1-t*5.5)),this.playerFlinch<=0){this.player.rotation.z=0,this.player.rotation.x=0;const r=this.player.getObjectByName("playerTorso");r&&(r.rotation.y=0)}}for(let s=this.hitReacts.length-1;s>=0;s--){const r=this.hitReacts[s];r.t-=t;const o=Math.max(0,Math.min(1,r.t/.35));if(Yl(r.mesh,o,r.inten),r.t<=0){r.mesh.rotation.z=0,r.mesh.rotation.x=0;const a=r.mesh.getObjectByName("playerTorso")||r.mesh.getObjectByName("yetiBody")||r.mesh.getObjectByName("orcBody");a&&(a.rotation.y=0),this.hitReacts.splice(s,1)}}for(let s=this.deathAnims.length-1;s>=0;s--){const r=this.deathAnims[s];r.t+=t;const o=Math.min(1,r.t/r.dur);m_(r.mesh,r.kind,o),r.mesh.position.y+=ye(r.mesh.position.x,r.mesh.position.z),o>=1&&(r.mesh.visible=!1,r.mesh.rotation.set(0,r.mesh.rotation.y,0),r.mesh.scale.setScalar(r.kind==="yeti"?1.15:1),r.mesh.position.y=0,this.deathAnims.splice(s,1))}if(this.syncHeldTool(),this.activity.type==="move"){const{tx:s,tz:r}=this.activity,o=s-this.player.position.x,a=r-this.player.position.z,c=Math.hypot(o,a),l=c<.55?c/.55*Wo:Wo;if(this.moveSpeedCur<l?this.moveSpeedCur=Math.min(l,this.moveSpeedCur+ov*t):this.moveSpeedCur=Math.max(l,this.moveSpeedCur-av*t),this.moveBlend=Math.min(1,this.moveBlend+t*4.5),c<.12){if(this.player.position.x=s,this.player.position.z=r,this.moveMarker.visible=!1,this.stoppingSteps=0,this.moveBlend=0,this.activity={type:"idle"},this.moveSpeedCur=0,this.pendingGather){const h=this.pendingGather;this.pendingGather=null,this.approachThenGather(h.obj,h.duration,h.label)}else if(this.pendingCombat){this.pendingCombat=!1;const h=this.pendingCombatTarget??this.nearestCombatTarget(),u=this.pendingCombatChat||(h?`You ready your bronze sword against the ${this.combatName(h)}!`:"");this.pendingCombatTarget=null,this.pendingCombatChat="",h&&h.hp>0&&!h.depleted&&(h.kind==="yeti"&&(this.yetiAggroed=!0),h.kind==="orc"&&(this.orcAggroed=!0),this.beginCombat(h,u))}}else{const h=c||1,u=Math.min(c,this.moveSpeedCur*t);this.player.position.x+=o/h*u,this.player.position.z+=a/h*u,this.lastMoveDir.set(o/h,0,a/h);let f=Math.atan2(o,a)-this.player.rotation.y;for(;f>Math.PI;)f-=Math.PI*2;for(;f<-Math.PI;)f+=Math.PI*2;const m=Math.abs(f)>1.2?7:11;this.faceToward(s,r,t,m);const v=Math.min(1.05,.45+this.moveSpeedCur/Wo*.55),g=Math.max(za(v)*.5,Math.PI*this.moveSpeedCur/p_(v));this.gaitPhase+=g*t,zr(this.player,this.gaitPhase,v,this.moveBlend),this.save.stamina=Math.max(0,this.save.stamina-t*2)}}else if(this.activity.type==="gather"){const s=this.activity;if(s.target.depleted)this.activity={type:"idle"},this.syncHeldTool(),Zn(this.player),this.hud.hideProgress();else if(this.distTo(s.target)>wr+.35)this.activity={type:"idle"},this.syncHeldTool(),Zn(this.player),this.hud.hideProgress(),this.hud.chat("You move too far away.","system");else{s.elapsed+=t,this.hud.showProgress(s.label,s.elapsed/s.duration),this.faceToward(s.target.mesh.position.x,s.target.mesh.position.z,t,8),this.toolSwing+=t;const r=this.toolSwing*1.35%1;if(Ba(this.player,r,s.target.kind==="tree"?"tree":"rock"),Math.floor(s.elapsed*4)!==Math.floor((s.elapsed-t)*4)){const o=s.target.mesh.position.clone();o.y=s.target.kind==="tree"?1.05:.7,s.target.kind==="tree"?this.vfx.spawnWoodchips(o,12):this.vfx.spawnMineSparks(o,14)}s.elapsed>=s.duration&&(this.completeGather(s.target),this.activity={type:"idle"},this.syncHeldTool(),Zn(this.player),this.hud.hideProgress())}}else if(this.activity.type==="combat"){const s=this.activity,r=s.target;if(this.hud.showTarget(this.combatName(r),Math.max(0,r.hp)/r.maxHp),r.hp<=0||r.depleted)this.activity={type:"idle"},this.syncHeldTool(),Zn(this.player),this.hud.hideTarget(),this.combatCamPull=0,this.combatOorT=0;else{const o=this.monsterAttackRange(r),a=o+.55,c=o+1.45;let l=this.distTo(r);const h=s.swingT>0&&s.swingT/s.swingDur<$l+.08;if(l>a&&l<c+.35&&h){const d=r.mesh.position.x-this.player.position.x,f=r.mesh.position.z-this.player.position.z,m=Math.hypot(d,f)||1,v=Math.min(l-o*.88,3.6*t);this.player.position.x+=d/m*v,this.player.position.z+=f/m*v,l=this.distTo(r),this.combatOorT=Math.max(0,this.combatOorT-t*1.5)}else if(l>a&&l<=c&&!h){const d=r.mesh.position.x-this.player.position.x,f=r.mesh.position.z-this.player.position.z,m=Math.hypot(d,f)||1,v=Math.min(l-o*.9,2.4*t);this.player.position.x+=d/m*v,this.player.position.z+=f/m*v,l=this.distTo(r),this.combatOorT+=t*.55}else l>c?this.combatOorT+=t:this.combatOorT=Math.max(0,this.combatOorT-t*2.5);const u=h?.55:.3;if(l>c&&this.combatOorT>=u&&!h)this.abortCombatSoft(t,!0);else{if(this.faceToward(r.mesh.position.x,r.mesh.position.z,t,10),this.isMonster(r)){const d=this.player.position.x-r.mesh.position.x,f=this.player.position.z-r.mesh.position.z;Math.hypot(d,f)>.01&&(r.mesh.rotation.y=ws(r.mesh.rotation.y,Math.atan2(d,f),6,t))}if(s.swingT>0){s.swingT+=t;const d=Math.min(1,s.swingT/s.swingDur);if(nu(this.player,d),!this.playerTeleDone&&d<.12){this.playerTeleDone=!0;const f=y_*s.swingDur;this.vfx.spawnTelegraph(this.player.position.clone(),!1,f,.7)}!s.hitDone&&d>=g_&&d<=$l+.05&&this.distTo(r)<=o+.95&&(s.hitDone=!0,this.swingAtTarget(r)),d>=1&&(s.swingT=0,s.hitDone=!1,this.playerTeleDone=!1,s.cooldown=.72,Ne(this.player,"sword"))}else s.cooldown-=t,xi(this.player,this.animTime,!0),s.cooldown<=0&&this.distTo(r)<=a+.2&&(s.swingT=.001,s.swingDur=Br,s.hitDone=!1,this.playerTeleDone=!1,Ne(this.player,"sword"))}}}else this.syncHeldTool(),this.stoppingSteps>0?(this.stoppingSteps-=t,this.moveBlend=Math.max(0,this.moveBlend-t*3.5),this.gaitPhase+=4.5*t,zr(this.player,this.gaitPhase,.4,Math.max(.15,this.moveBlend))):(this.moveBlend=Math.max(0,this.moveBlend-t*5),this.moveSpeedCur=0,xi(this.player,this.animTime)),this.combatCamPull=Math.max(0,this.combatCamPull-t*.6);this.updateYetiAI(t),this.updateOrcAI(t),this.vfx.update(t),this.updateCombatTreeFade(t),this.combatAbortT>0&&(this.combatAbortT=Math.max(0,this.combatAbortT-t),xi(this.player,this.animTime),this.combatAbortT<=0&&(this.syncHeldTool(),Zn(this.player))),this.poseSmoother.apply(this.player,t,this.activity.type==="combat"?26:18),this.snapMoversToGround(),q_(this.animTime),this.updateCamera(t),this.save.x=this.player.position.x,this.save.z=this.player.position.z,this.saveTimer+=t,this.saveTimer>=cv&&(this.saveTimer=0,this.persist()),this.hud.setOrbs(this.save.hp,this.save.maxHp,this.save.focus,this.save.stamina),this.drawMinimapMarkers()}completeGather(t){if(t.kind==="tree"){if(!this.addItem("whisper_logs",1))return;this.grantXp("woodcutting",25),this.hud.chat("You chop some Whisper Logs.","loot"),this.vfx.spawnWoodchips(t.mesh.position.clone().setY(1.1),22),t.depleted=!0,t.mesh.visible=!1,t.respawnAt=performance.now()/1e3+12}else if(t.kind==="rock"){const e=t.meta?.ore==="tin"?"tin_ore":"copper_ore";if(!this.addItem(e,1))return;this.grantXp("mining",28),this.hud.chat(`You mine some ${Kn[e].name}.`,"loot"),this.vfx.spawnMineSparks(t.mesh.position.clone().setY(.7),24),t.depleted=!0,t.mesh.visible=!1,t.respawnAt=performance.now()/1e3+14}this.refreshUI(),this.persist()}swingAtTarget(t){const e=this.save.skills.attack.level,n=this.save.skills.strength.level,s=.65+e*.01,r=this.combatName(t);if(Math.random()>s){this.hud.chat(`You swing and miss the ${r}.`,"combat");return}const o=3+Math.floor(Math.random()*(4+n));t.hp-=o;const a=t.kind==="yeti"?18:t.kind==="orc"?15:12,c=t.kind==="yeti"?14:t.kind==="orc"?12:8,l=t.kind==="yeti"?8:t.kind==="orc"?6:4;this.grantXp("attack",a),this.grantXp("strength",c),this.grantXp("constitution",l);const h=t.mesh.position.clone().setY(1.25);this.vfx.spawnHitSparks(h,14+Math.min(12,o)),this.vfx.spawnImpactBurst(h,t.kind==="yeti"?16:20,t.kind==="yeti"),this.vfx.spawnDamage(t.mesh.position.clone().setY(1.5),o,o>=8),Y_(t.mesh,o>=10?260:160);const u=o>=12?1.25:o>=8?.9:.5,d=o>=12?.28:o>=8?.18:.1,f=Math.atan2(t.mesh.position.x-this.player.position.x,t.mesh.position.z-this.player.position.z);if(t.mesh.position.x+=Math.sin(f)*d,t.mesh.position.z+=Math.cos(f)*d,this.hitReacts.push({mesh:t.mesh,t:u>1?.48:.28,inten:u}),t.kind==="yeti"&&(this.vfx.spawnIceBurst(t.mesh.position.clone(),12),this.yetiAggroed=!0),t.kind==="orc"&&(this.vfx.spawnSpearThrust(t.mesh.position.clone(),8),this.orcAggroed=!0),t.kind==="dummy"){const m=Math.random()<.15?1:0;m?(this.save.hp=Math.max(1,this.save.hp-m),this.hud.chat(`You hit the dummy for ${o}. Splinter grazes you (-${m}).`,"combat")):this.hud.chat(`You hit the training dummy for ${o} damage.`,"combat")}else t.kind==="orc"?this.hud.chat(`You strike the Orc Scout for ${o} damage!`,"combat"):this.hud.chat(`You strike the Frost Yeti for ${o} damage!`,"combat");t.hp<=0?(t.hp=0,t.kind==="yeti"?this.onYetiDeath(t):t.kind==="orc"?this.onOrcDeath(t):this.onDummyDeath(t)):this.hud.showTarget(r,t.hp/t.maxHp),this.refreshUI(),this.persist()}onDummyDeath(t){t.respawnAt=performance.now()/1e3+8,this.deathAnims.push({mesh:t.mesh,kind:"dummy",t:0,dur:.85}),this.hud.chat("The training dummy collapses! It will be repaired shortly.","combat"),this.grantXp("defence",15),this.activity={type:"idle"},this.syncHeldTool(),Zn(this.player),this.hud.hideTarget(),this.combatCamPull=0}onYetiDeath(t){t.depleted=!0,t.respawnAt=performance.now()/1e3+lv,this.yetiAggroed=!1,this.yetiAttackCd=0,this.yetiSwipeT=0,this.vfx.spawnIceBurst(t.mesh.position.clone().setY(1.2),28),this.vfx.spawnImpactBurst(t.mesh.position.clone().setY(1),16,!0),this.deathAnims.push({mesh:t.mesh,kind:"yeti",t:0,dur:1.35}),this.hud.chat("The Frost Yeti collapses in a burst of frost!","combat"),this.grantXp("defence",28),this.grantXp("attack",12),this.grantXp("strength",10),this.grantXp("constitution",10),this.addItem("yeti_fur",1)&&this.hud.chat("You loot Yeti Fur.","loot"),Math.random()<.55&&this.addItem("frost_claw",1)&&this.hud.chat("You pry free a Frost Claw!","loot"),this.activity={type:"idle"},this.syncHeldTool(),this.hud.hideTarget(),this.refreshUI(),this.persist()}onOrcDeath(t){t.depleted=!0,t.respawnAt=performance.now()/1e3+uv,this.orcAggroed=!1,this.orcAttackCd=0,this.orcSwipeT=0,this.vfx.spawnSpearThrust(t.mesh.position.clone().setY(1.1),16),this.vfx.spawnHitSparks(t.mesh.position.clone().setY(1),20),this.vfx.spawnImpactBurst(t.mesh.position.clone().setY(1),14,!1),this.deathAnims.push({mesh:t.mesh,kind:"orc",t:0,dur:1.15}),this.hud.chat("The Orc Scout falls! Its spear clatters to the dirt.","combat"),this.grantXp("defence",22),this.grantXp("attack",10),this.grantXp("strength",8),this.grantXp("constitution",8),this.addItem("orc_tooth",1)&&this.hud.chat("You loot an Orc Tooth.","loot"),Math.random()<.65&&this.addItem("scout_leather",1)&&this.hud.chat("You strip Scout Leather from the vest.","loot"),this.activity={type:"idle"},this.syncHeldTool(),this.hud.hideTarget(),this.refreshUI(),this.persist()}updateYetiAI(t){const e=this.yetiTarget;if(!e||e.depleted||e.hp<=0){this.yetiSwipeT>0&&(this.yetiSwipeT=Math.max(0,this.yetiSwipeT-t));return}const n=this.distTo(e),s=Math.hypot(e.mesh.position.x-Ee.x,e.mesh.position.z-Ee.z);if(!this.yetiAggroed&&n<=Go&&(this.yetiAggroed=!0,this.hud.chat("The Frost Yeti snarls and charges!","combat"),(this.activity.type!=="combat"||this.activity.target!==e)&&this.beginCombat(e,"The Frost Yeti engages you!")),!this.yetiAggroed){const c=Ee.x-e.mesh.position.x,l=Ee.z-e.mesh.position.z,h=Math.hypot(c,l);if(h>.15){const u=Math.min(h,2.8*t);e.mesh.position.x+=c/h*u,e.mesh.position.z+=l/h*u,e.mesh.rotation.y=ws(e.mesh.rotation.y,Math.atan2(c,l),4,t),e.mesh.position.y=0,mi(e.mesh,this.animTime,!0,Math.min(1,h/2)),yr(e.mesh,0);return}e.mesh.position.set(Ee.x,0,Ee.z),mi(e.mesh,this.animTime,!1),yr(e.mesh,0);return}const r=this.player.position.x-e.mesh.position.x,o=this.player.position.z-e.mesh.position.z;Math.hypot(r,o)>.01&&(e.mesh.rotation.y=ws(e.mesh.rotation.y,Math.atan2(r,o),5,t));let a=!1;if(n>Ss&&n<Go+5&&s<7.5){this.yetiMoveBlend=Math.min(1,this.yetiMoveBlend+t*2.2);const c=Math.min(n-Ss*.85,2.35*this.yetiMoveBlend*t),l=Math.hypot(r,o)||1;e.mesh.position.x+=r/l*c,e.mesh.position.z+=o/l*c,a=!0;const h=Ee.x,u=Ee.z,d=e.mesh.position.x-h,f=e.mesh.position.z-u,m=Math.hypot(d,f);m>7.5&&(e.mesh.position.x=h+d/m*7.5,e.mesh.position.z=u+f/m*7.5)}else this.yetiMoveBlend=Math.max(0,this.yetiMoveBlend-t*3);if(n>Go+7||s>8.5){this.yetiAggroed=!1,this.yetiSwipeT=0,this.hud.chat("The Frost Yeti loses interest and returns to the clearing.","system"),e.mesh.position.x+=(Ee.x-e.mesh.position.x)*Math.min(1,t*.9),e.mesh.position.z+=(Ee.z-e.mesh.position.z)*Math.min(1,t*.9),this.activity.type==="combat"&&this.activity.target===e&&(this.activity={type:"idle"},this.syncHeldTool(),Zn(this.player),this.hud.hideTarget()),mi(e.mesh,this.animTime,!0,.7);return}if(this.yetiSwipeT>0){this.yetiSwipeT+=t;const c=Math.min(1,this.yetiSwipeT/kr);if(iu(e.mesh,c),!this.yetiTeleDone){this.yetiTeleDone=!0;const l=w_*kr+.08;this.vfx.spawnTelegraph(e.mesh.position.clone(),!0,l,1.35),this.vfx.spawnArcTelegraph(e.mesh.position.clone(),e.mesh.rotation.y,!0,l)}!this.yetiHitDone&&c>=__&&c<=v_+.05&&(this.yetiHitDone=!0,this.yetiMeleeHit(e)),c>=1&&(this.yetiSwipeT=0,this.yetiHitDone=!1,this.yetiTeleDone=!1,yr(e.mesh,0))}else mi(e.mesh,this.animTime,a,Math.max(this.yetiMoveBlend,a?.4:0)),this.yetiAttackCd-=t,n<=Ss+.4&&this.yetiAttackCd<=0&&(this.yetiAttackCd=2.55,this.yetiSwipeT=.001,this.yetiHitDone=!1,this.yetiTeleDone=!1)}yetiMeleeHit(t){if(this.distTo(t)>Ss+.65)return;const n=this.save.skills.defence.level,s=nh+Math.floor(Math.random()*(hv-nh+1)),r=Math.max(2,s-Math.floor(n/5));this.save.hp=Math.max(0,this.save.hp-r),this.vfx.spawnClawSlash(this.player.position.clone(),14),this.vfx.spawnIceBurst(this.player.position.clone(),16),this.vfx.spawnImpactBurst(this.player.position.clone().setY(1.1),16,!0),this.vfx.spawnDamage(this.player.position.clone().setY(1.3),r),this.playerFlinch=r>=8?1.15:.75;const o=Math.atan2(this.player.position.x-t.mesh.position.x,this.player.position.z-t.mesh.position.z),a=r>=8?3.4:2.4;this.playerKnock.set(Math.sin(o)*a,0,Math.cos(o)*a),this.hud.chat(`The Frost Yeti swipes you for ${r} damage!`,"combat"),this.hud.setOrbs(this.save.hp,this.save.maxHp,this.save.focus,this.save.stamina),this.save.hp<=0&&(this.save.hp=Math.max(10,Math.floor(this.save.maxHp*.35)),this.player.position.set(0,0,2),this.yetiAggroed=!1,this.activity={type:"idle"},this.syncHeldTool(),this.hud.hideTarget(),this.hud.chat("You fall! You wake by the Thornrest campfire, battered but alive.","combat"),t.mesh.position.set(Ee.x,0,Ee.z)),this.activity.type!=="combat"&&t.hp>0&&!t.depleted&&this.beginCombat(t,"You raise your guard against the Frost Yeti!"),this.refreshUI(),this.persist()}updateOrcAI(t){const e=this.orcTarget;if(!e||e.depleted||e.hp<=0){this.orcSwipeT>0&&(this.orcSwipeT=Math.max(0,this.orcSwipeT-t));return}const n=this.distTo(e),s=Math.hypot(e.mesh.position.x-ke.x,e.mesh.position.z-ke.z);if(!this.orcAggroed&&n<=Vo&&(this.orcAggroed=!0,this.hud.chat("The Orc Scout snarls and levels its spear!","combat"),(this.activity.type!=="combat"||this.activity.target!==e)&&this.beginCombat(e,"The Orc Scout engages you!")),!this.orcAggroed){Ls(e.mesh,this.animTime,!1),ko(e.mesh,0);return}const r=this.player.position.x-e.mesh.position.x,o=this.player.position.z-e.mesh.position.z;Math.hypot(r,o)>.01&&(e.mesh.rotation.y=ws(e.mesh.rotation.y,Math.atan2(r,o),7,t));let a=!1;if(n>Es&&n<Vo+5&&s<7.5){this.orcMoveBlend=Math.min(1,this.orcMoveBlend+t*3.5);const c=Math.min(n-Es*.85,3.2*this.orcMoveBlend*t),l=Math.hypot(r,o)||1;e.mesh.position.x+=r/l*c,e.mesh.position.z+=o/l*c,a=!0;const h=ke.x,u=ke.z,d=e.mesh.position.x-h,f=e.mesh.position.z-u,m=Math.hypot(d,f);m>7.5&&(e.mesh.position.x=h+d/m*7.5,e.mesh.position.z=u+f/m*7.5)}else this.orcMoveBlend=Math.max(0,this.orcMoveBlend-t*4);if(n>Vo+7||s>8.5){this.orcAggroed=!1,this.orcSwipeT=0,this.hud.chat("The Orc Scout loses interest and returns to the trail.","system"),e.mesh.position.x+=(ke.x-e.mesh.position.x)*Math.min(1,t*1.1),e.mesh.position.z+=(ke.z-e.mesh.position.z)*Math.min(1,t*1.1),this.activity.type==="combat"&&this.activity.target===e&&(this.activity={type:"idle"},this.syncHeldTool(),Zn(this.player),this.hud.hideTarget()),Ls(e.mesh,this.animTime,!0,.75);return}if(this.orcSwipeT>0){this.orcSwipeT+=t;const c=Math.min(1,this.orcSwipeT/Hr);if(su(e.mesh,c),!this.orcTeleDone){this.orcTeleDone=!0;const l=S_*Hr+.06;this.vfx.spawnTelegraph(e.mesh.position.clone(),!1,l,1.1)}!this.orcHitDone&&c>=x_&&c<=M_+.05&&(this.orcHitDone=!0,this.orcMeleeHit(e)),c>=1&&(this.orcSwipeT=0,this.orcHitDone=!1,this.orcTeleDone=!1,ko(e.mesh,0))}else Ls(e.mesh,this.animTime,a,Math.max(this.orcMoveBlend,a?.45:0)),this.orcAttackCd-=t,n<=Es+.4&&this.orcAttackCd<=0&&(this.orcAttackCd=2.05,this.orcSwipeT=.001,this.orcHitDone=!1,this.orcTeleDone=!1)}orcMeleeHit(t){if(this.distTo(t)>Es+.65)return;const n=this.save.skills.defence.level,s=sh+Math.floor(Math.random()*(dv-sh+1)),r=Math.max(2,s-Math.floor(n/5));this.save.hp=Math.max(0,this.save.hp-r),this.vfx.spawnSpearThrust(this.player.position.clone(),14),this.vfx.spawnHitSparks(this.player.position.clone().setY(1.1),14),this.vfx.spawnImpactBurst(this.player.position.clone().setY(1.05),16,!1),this.vfx.spawnDamage(this.player.position.clone().setY(1.3),r),this.playerFlinch=r>=7?1.05:.7;const o=Math.atan2(this.player.position.x-t.mesh.position.x,this.player.position.z-t.mesh.position.z),a=r>=7?2.9:2.1;this.playerKnock.set(Math.sin(o)*a,0,Math.cos(o)*a),this.hud.chat(`The Orc Scout thrusts its spear for ${r} damage!`,"combat"),this.hud.setOrbs(this.save.hp,this.save.maxHp,this.save.focus,this.save.stamina),this.save.hp<=0&&(this.save.hp=Math.max(10,Math.floor(this.save.maxHp*.35)),this.player.position.set(0,0,2),this.orcAggroed=!1,this.yetiAggroed=!1,this.activity={type:"idle"},this.syncHeldTool(),this.hud.hideTarget(),this.hud.chat("You fall! You wake by the Thornrest campfire, battered but alive.","combat"),t.mesh.position.set(ke.x,0,ke.z)),this.activity.type!=="combat"&&t.hp>0&&!t.depleted&&this.beginCombat(t,"You raise your guard against the Orc Scout!"),this.refreshUI(),this.persist()}abortCombatSoft(t,e){e&&this.hud.chat("You step out of range.","combat"),this.combatAbortT=.22,this.combatOorT=0,this.activity={type:"idle"},this.hud.hideTarget(),this.combatCamPull=Math.max(.15,this.combatCamPull*.5),Ne(this.player,"sword")}sitOnGround(t,e=0){t.position.y=ye(t.position.x,t.position.z)+e}snapMoversToGround(){const t=new Set(this.deathAnims.map(e=>e.mesh));this.sitOnGround(this.player,Number(this.player.userData.locomotionY)||0),this.yetiTarget&&!t.has(this.yetiTarget.mesh)&&this.sitOnGround(this.yetiTarget.mesh),this.orcTarget&&!t.has(this.orcTarget.mesh)&&this.sitOnGround(this.orcTarget.mesh),this.dummyTarget&&!t.has(this.dummyTarget.mesh)&&this.sitOnGround(this.dummyTarget.mesh),this.moveMarker.visible&&this.sitOnGround(this.moveMarker,.06)}nudgeZoom(t,e=.12){const n=this.camZoomTarget*Math.exp(t*e);this.camZoomTarget=Math.min(rv,Math.max(sv,n))}updateCamera(t){const e=Math.min(1,this.combatCamPull),n=1-Math.exp(-10*t);this.camZoom+=(this.camZoomTarget-this.camZoom)*n;const s=this.camZoom,r=this.camOffset.x,o=this.camOffset.y*s+e*1.55,a=this.camOffset.z*s+e*.85,c=this.camSmooth;c.set(this.player.position.x+r,o,this.player.position.z+a);const l=1-Math.exp(-4.2*t);this.camera.position.lerp(c,l);let h=this.player.position.x,u=this.player.position.z;if(this.activity.type==="combat"){const d=this.activity.target.mesh.position;h=this.player.position.x*.55+d.x*.45,u=this.player.position.z*.55+d.z*.45}this.lookSmooth.set(h,this.player.position.y+1.05+e*.55,u),this.camLook.lerp(this.lookSmooth,l),this.camera.lookAt(this.camLook)}updateCombatTreeFade(t){const e=this.activity.type==="combat"||this.yetiAggroed||this.orcAggroed,n=this.camera.position;let s=this.player.position.x,r=this.player.position.z;this.activity.type==="combat"?(s=s*.5+this.activity.target.mesh.position.x*.5,r=r*.5+this.activity.target.mesh.position.z*.5):this.yetiAggroed&&this.yetiTarget?(s=this.yetiTarget.mesh.position.x,r=this.yetiTarget.mesh.position.z):this.orcAggroed&&this.orcTarget&&(s=this.orcTarget.mesh.position.x,r=this.orcTarget.mesh.position.z);const o=s-n.x,a=r-n.z,c=Math.hypot(o,a)||1;for(const l of this.objects){if(l.kind!=="tree")continue;const h=l.mesh.position.x-n.x,u=l.mesh.position.z-n.z,d=Math.max(0,Math.min(1,(h*o+u*a)/(c*c))),f=n.x+o*d,m=n.z+a*d,v=Math.hypot(l.mesh.position.x-f,l.mesh.position.z-m),g=e&&d>.12&&d<.92&&v<2.15?.22:1;l.mesh.traverse(p=>{const S=p;if(!S.isMesh||S.name==="hit"||S.name==="outline")return;const w=S.material;if(!w||!("opacity"in w))return;if(!S.userData.fadeReady){const R=w.clone();R.transparent=!0,S.material=R,S.userData.fadeReady=!0,S.userData.fadeOpacity=1}const x=S.userData.fadeOpacity??1,U=x+(g-x)*Math.min(1,t*5.5);S.userData.fadeOpacity=U;const T=S.material;T.opacity=U,T.transparent=U<.98,T.depthWrite=U>.75})}}drawMinimapMarkers(){const t=[];for(const e of this.objects)e.depleted&&e.kind!=="dummy"&&e.kind!=="yeti"&&e.kind!=="orc"||(e.kind==="tree"?t.push({x:e.mesh.position.x,z:e.mesh.position.z,color:"#2d8a2d"}):e.kind==="rock"?t.push({x:e.mesh.position.x,z:e.mesh.position.z,color:"#888"}):e.kind==="yeti"?t.push({x:e.mesh.position.x,z:e.mesh.position.z,color:"#7ec8ff"}):e.kind==="orc"?t.push({x:e.mesh.position.x,z:e.mesh.position.z,color:"#6a9a2a"}):t.push({x:e.mesh.position.x,z:e.mesh.position.z,color:"#c43c3c"}));t.push({x:-1.2,z:-.5,color:"#ff8844"}),this.hud.drawMinimap(this.player.position.x,this.player.position.z,this.player.rotation.y,t)}refreshUI(){this.hud.setInventory(this.save.inventory),this.hud.setEquipment(this.save),this.hud.setSkills(this.save),this.hud.setOrbs(this.save.hp,this.save.maxHp,this.save.focus,this.save.stamina)}persist(){nv(this.save)}onResize(){this.camera.aspect=window.innerWidth/window.innerHeight,this.camera.updateProjectionMatrix(),this.renderer.setSize(window.innerWidth,window.innerHeight),this.studio.resize(window.innerWidth,window.innerHeight)}animate=()=>{if(!this.running)return;requestAnimationFrame(this.animate);const t=Math.min(.05,this.clock.getDelta());if(this.studio.isOpen()){this.studio.tick(t),this.studio.render(this.renderer);return}this.update(t),this.renderer.render(this.scene,this.camera)}}const fu=document.getElementById("game-canvas");if(!(fu instanceof HTMLCanvasElement))throw new Error("Missing #game-canvas");new pv(fu);
