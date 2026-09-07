(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function e(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=e(s);fetch(s.href,r)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Da="170",Xh=0,dc=1,Yh=2,Hl=1,Gl=2,En=3,Vn=0,De=1,Te=2,Hn=0,Ui=1,fc=2,pc=3,mc=4,qh=5,si=100,$h=101,Kh=102,Zh=103,Jh=104,jh=200,Qh=201,tu=202,eu=203,No=204,Fo=205,nu=206,iu=207,su=208,ru=209,ou=210,au=211,cu=212,lu=213,hu=214,Oo=0,zo=1,Bo=2,Bi=3,ko=4,Ho=5,Go=6,Vo=7,Ua=0,uu=1,du=2,Gn=0,fu=1,pu=2,mu=3,Vl=4,gu=5,_u=6,vu=7,Wl=300,ki=301,Hi=302,Wo=303,Xo=304,Lr=306,Gi=1e3,ai=1001,Yo=1002,Je=1003,xu=1004,Ds=1005,pn=1006,kr=1007,ci=1008,Rn=1009,Xl=1010,Yl=1011,ys=1012,Na=1013,hi=1014,mn=1015,bs=1016,Fa=1017,Oa=1018,Vi=1020,ql=35902,$l=1021,Kl=1022,ln=1023,Zl=1024,Jl=1025,Ni=1026,Wi=1027,za=1028,Ba=1029,jl=1030,ka=1031,Ha=1033,lr=33776,hr=33777,ur=33778,dr=33779,qo=35840,$o=35841,Ko=35842,Zo=35843,Jo=36196,jo=37492,Qo=37496,ta=37808,ea=37809,na=37810,ia=37811,sa=37812,ra=37813,oa=37814,aa=37815,ca=37816,la=37817,ha=37818,ua=37819,da=37820,fa=37821,fr=36492,pa=36494,ma=36495,Ql=36283,ga=36284,_a=36285,va=36286,Mu=3200,yu=3201,Ga=0,Su=1,fn="",Ge="srgb",Yi="srgb-linear",Ir="linear",ae="srgb",_i=7680,gc=519,wu=512,Eu=513,Tu=514,th=515,bu=516,Au=517,Ru=518,Cu=519,_c=35044,Pu=35048,vc="300 es",Tn=2e3,_r=2001;class qi{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const s=this._listeners[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}}const Ne=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Hr=Math.PI/180,xa=180/Math.PI;function $i(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ne[i&255]+Ne[i>>8&255]+Ne[i>>16&255]+Ne[i>>24&255]+"-"+Ne[t&255]+Ne[t>>8&255]+"-"+Ne[t>>16&15|64]+Ne[t>>24&255]+"-"+Ne[e&63|128]+Ne[e>>8&255]+"-"+Ne[e>>16&255]+Ne[e>>24&255]+Ne[n&255]+Ne[n>>8&255]+Ne[n>>16&255]+Ne[n>>24&255]).toLowerCase()}function be(i,t,e){return Math.max(t,Math.min(e,i))}function Lu(i,t){return(i%t+t)%t}function Gr(i,t,e){return(1-e)*i+e*t}function ts(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function We(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}class lt{constructor(t=0,e=0){lt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(be(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*s+t.x,this.y=r*s+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class $t{constructor(t,e,n,s,r,o,a,c,l){$t.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,c,l)}set(t,e,n,s,r,o,a,c,l){const h=this.elements;return h[0]=t,h[1]=s,h[2]=a,h[3]=e,h[4]=r,h[5]=c,h[6]=n,h[7]=o,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],h=n[4],u=n[7],d=n[2],f=n[5],g=n[8],_=s[0],m=s[3],p=s[6],w=s[1],M=s[4],v=s[7],D=s[2],T=s[5],R=s[8];return r[0]=o*_+a*w+c*D,r[3]=o*m+a*M+c*T,r[6]=o*p+a*v+c*R,r[1]=l*_+h*w+u*D,r[4]=l*m+h*M+u*T,r[7]=l*p+h*v+u*R,r[2]=d*_+f*w+g*D,r[5]=d*m+f*M+g*T,r[8]=d*p+f*v+g*R,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8];return e*o*h-e*a*l-n*r*h+n*a*c+s*r*l-s*o*c}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8],u=h*o-a*l,d=a*c-h*r,f=l*r-o*c,g=e*u+n*d+s*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return t[0]=u*_,t[1]=(s*l-h*n)*_,t[2]=(a*n-s*o)*_,t[3]=d*_,t[4]=(h*e-s*c)*_,t[5]=(s*r-a*e)*_,t[6]=f*_,t[7]=(n*c-l*e)*_,t[8]=(o*e-n*r)*_,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,o,a){const c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*o+l*a)+o+t,-s*l,s*c,-s*(-l*o+c*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(Vr.makeScale(t,e)),this}rotate(t){return this.premultiply(Vr.makeRotation(-t)),this}translate(t,e){return this.premultiply(Vr.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Vr=new $t;function eh(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function vr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Iu(){const i=vr("canvas");return i.style.display="block",i}const xc={};function fs(i){i in xc||(xc[i]=!0,console.warn(i))}function Du(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}function Uu(i){const t=i.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function Nu(i){const t=i.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const te={enabled:!0,workingColorSpace:Yi,spaces:{},convert:function(i,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===ae&&(i.r=bn(i.r),i.g=bn(i.g),i.b=bn(i.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(i.applyMatrix3(this.spaces[t].toXYZ),i.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===ae&&(i.r=Fi(i.r),i.g=Fi(i.g),i.b=Fi(i.b))),i},fromWorkingColorSpace:function(i,t){return this.convert(i,this.workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===fn?Ir:this.spaces[i].transfer},getLuminanceCoefficients:function(i,t=this.workingColorSpace){return i.fromArray(this.spaces[t].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,t,e){return i.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}};function bn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Fi(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}const Mc=[.64,.33,.3,.6,.15,.06],yc=[.2126,.7152,.0722],Sc=[.3127,.329],wc=new $t().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Ec=new $t().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);te.define({[Yi]:{primaries:Mc,whitePoint:Sc,transfer:Ir,toXYZ:wc,fromXYZ:Ec,luminanceCoefficients:yc,workingColorSpaceConfig:{unpackColorSpace:Ge},outputColorSpaceConfig:{drawingBufferColorSpace:Ge}},[Ge]:{primaries:Mc,whitePoint:Sc,transfer:ae,toXYZ:wc,fromXYZ:Ec,luminanceCoefficients:yc,outputColorSpaceConfig:{drawingBufferColorSpace:Ge}}});let vi;class Fu{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{vi===void 0&&(vi=vr("canvas")),vi.width=t.width,vi.height=t.height;const n=vi.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=vi}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=vr("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=bn(r[o]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(bn(e[n]/255)*255):e[n]=bn(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Ou=0;class nh{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Ou++}),this.uuid=$i(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Wr(s[o].image)):r.push(Wr(s[o]))}else r=Wr(s);n.url=r}return e||(t.images[this.uuid]=n),n}}function Wr(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Fu.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let zu=0;class ze extends qi{constructor(t=ze.DEFAULT_IMAGE,e=ze.DEFAULT_MAPPING,n=ai,s=ai,r=pn,o=ci,a=ln,c=Rn,l=ze.DEFAULT_ANISOTROPY,h=fn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:zu++}),this.uuid=$i(),this.name="",this.source=new nh(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new lt(0,0),this.repeat=new lt(1,1),this.center=new lt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new $t,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Wl)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Gi:t.x=t.x-Math.floor(t.x);break;case ai:t.x=t.x<0?0:1;break;case Yo:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Gi:t.y=t.y-Math.floor(t.y);break;case ai:t.y=t.y<0?0:1;break;case Yo:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}ze.DEFAULT_IMAGE=null;ze.DEFAULT_MAPPING=Wl;ze.DEFAULT_ANISOTROPY=1;class ce{constructor(t=0,e=0,n=0,s=1){ce.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r;const c=t.elements,l=c[0],h=c[4],u=c[8],d=c[1],f=c[5],g=c[9],_=c[2],m=c[6],p=c[10];if(Math.abs(h-d)<.01&&Math.abs(u-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+_)<.1&&Math.abs(g+m)<.1&&Math.abs(l+f+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const M=(l+1)/2,v=(f+1)/2,D=(p+1)/2,T=(h+d)/4,R=(u+_)/4,P=(g+m)/4;return M>v&&M>D?M<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(M),s=T/n,r=R/n):v>D?v<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(v),n=T/s,r=P/s):D<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(D),n=R/r,s=P/r),this.set(n,s,r,e),this}let w=Math.sqrt((m-g)*(m-g)+(u-_)*(u-_)+(d-h)*(d-h));return Math.abs(w)<.001&&(w=1),this.x=(m-g)/w,this.y=(u-_)/w,this.z=(d-h)/w,this.w=Math.acos((l+f+p-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Bu extends qi{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new ce(0,0,t,e),this.scissorTest=!1,this.viewport=new ce(0,0,t,e);const s={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:pn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const r=new ze(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,s=t.textures.length;n<s;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new nh(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ui extends Bu{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class ih extends ze{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Je,this.minFilter=Je,this.wrapR=ai,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class ku extends ze{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Je,this.minFilter=Je,this.wrapR=ai,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class As{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,o,a){let c=n[s+0],l=n[s+1],h=n[s+2],u=n[s+3];const d=r[o+0],f=r[o+1],g=r[o+2],_=r[o+3];if(a===0){t[e+0]=c,t[e+1]=l,t[e+2]=h,t[e+3]=u;return}if(a===1){t[e+0]=d,t[e+1]=f,t[e+2]=g,t[e+3]=_;return}if(u!==_||c!==d||l!==f||h!==g){let m=1-a;const p=c*d+l*f+h*g+u*_,w=p>=0?1:-1,M=1-p*p;if(M>Number.EPSILON){const D=Math.sqrt(M),T=Math.atan2(D,p*w);m=Math.sin(m*T)/D,a=Math.sin(a*T)/D}const v=a*w;if(c=c*m+d*v,l=l*m+f*v,h=h*m+g*v,u=u*m+_*v,m===1-a){const D=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=D,l*=D,h*=D,u*=D}}t[e]=c,t[e+1]=l,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,s,r,o){const a=n[s],c=n[s+1],l=n[s+2],h=n[s+3],u=r[o],d=r[o+1],f=r[o+2],g=r[o+3];return t[e]=a*g+h*u+c*f-l*d,t[e+1]=c*g+h*d+l*u-a*f,t[e+2]=l*g+h*f+a*d-c*u,t[e+3]=h*g-a*u-c*d-l*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,c=Math.sin,l=a(n/2),h=a(s/2),u=a(r/2),d=c(n/2),f=c(s/2),g=c(r/2);switch(o){case"XYZ":this._x=d*h*u+l*f*g,this._y=l*f*u-d*h*g,this._z=l*h*g+d*f*u,this._w=l*h*u-d*f*g;break;case"YXZ":this._x=d*h*u+l*f*g,this._y=l*f*u-d*h*g,this._z=l*h*g-d*f*u,this._w=l*h*u+d*f*g;break;case"ZXY":this._x=d*h*u-l*f*g,this._y=l*f*u+d*h*g,this._z=l*h*g+d*f*u,this._w=l*h*u-d*f*g;break;case"ZYX":this._x=d*h*u-l*f*g,this._y=l*f*u+d*h*g,this._z=l*h*g-d*f*u,this._w=l*h*u+d*f*g;break;case"YZX":this._x=d*h*u+l*f*g,this._y=l*f*u+d*h*g,this._z=l*h*g-d*f*u,this._w=l*h*u-d*f*g;break;case"XZY":this._x=d*h*u-l*f*g,this._y=l*f*u-d*h*g,this._z=l*h*g+d*f*u,this._w=l*h*u+d*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],s=e[4],r=e[8],o=e[1],a=e[5],c=e[9],l=e[2],h=e[6],u=e[10],d=n+a+u;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-c)*f,this._y=(r-l)*f,this._z=(o-s)*f}else if(n>a&&n>u){const f=2*Math.sqrt(1+n-a-u);this._w=(h-c)/f,this._x=.25*f,this._y=(s+o)/f,this._z=(r+l)/f}else if(a>u){const f=2*Math.sqrt(1+a-n-u);this._w=(r-l)/f,this._x=(s+o)/f,this._y=.25*f,this._z=(c+h)/f}else{const f=2*Math.sqrt(1+u-n-a);this._w=(o-s)/f,this._x=(r+l)/f,this._y=(c+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(be(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,s=t._y,r=t._z,o=t._w,a=e._x,c=e._y,l=e._z,h=e._w;return this._x=n*h+o*a+s*l-r*c,this._y=s*h+o*c+r*a-n*l,this._z=r*h+o*l+n*c-s*a,this._w=o*h-n*a-s*c-r*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,s=this._y,r=this._z,o=this._w;let a=o*t._w+n*t._x+s*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;const c=1-a*a;if(c<=Number.EPSILON){const f=1-e;return this._w=f*o+e*this._w,this._x=f*n+e*this._x,this._y=f*s+e*this._y,this._z=f*r+e*this._z,this.normalize(),this}const l=Math.sqrt(c),h=Math.atan2(l,a),u=Math.sin((1-e)*h)/l,d=Math.sin(e*h)/l;return this._w=o*u+this._w*d,this._x=n*u+this._x*d,this._y=s*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class L{constructor(t=0,e=0,n=0){L.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Tc.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Tc.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(t){const e=this.x,n=this.y,s=this.z,r=t.x,o=t.y,a=t.z,c=t.w,l=2*(o*s-a*n),h=2*(a*e-r*s),u=2*(r*n-o*e);return this.x=e+c*l+o*u-a*h,this.y=n+c*h+a*l-r*u,this.z=s+c*u+r*h-o*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,s=t.y,r=t.z,o=e.x,a=e.y,c=e.z;return this.x=s*c-r*a,this.y=r*o-n*c,this.z=n*a-s*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Xr.copy(this).projectOnVector(t),this.sub(Xr)}reflect(t){return this.sub(Xr.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(be(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Xr=new L,Tc=new As;class qn{constructor(t=new L(1/0,1/0,1/0),e=new L(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(sn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(sn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=sn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,sn):sn.fromBufferAttribute(r,o),sn.applyMatrix4(t.matrixWorld),this.expandByPoint(sn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Us.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Us.copy(n.boundingBox)),Us.applyMatrix4(t.matrixWorld),this.union(Us)}const s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,sn),sn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(es),Ns.subVectors(this.max,es),xi.subVectors(t.a,es),Mi.subVectors(t.b,es),yi.subVectors(t.c,es),Ln.subVectors(Mi,xi),In.subVectors(yi,Mi),Kn.subVectors(xi,yi);let e=[0,-Ln.z,Ln.y,0,-In.z,In.y,0,-Kn.z,Kn.y,Ln.z,0,-Ln.x,In.z,0,-In.x,Kn.z,0,-Kn.x,-Ln.y,Ln.x,0,-In.y,In.x,0,-Kn.y,Kn.x,0];return!Yr(e,xi,Mi,yi,Ns)||(e=[1,0,0,0,1,0,0,0,1],!Yr(e,xi,Mi,yi,Ns))?!1:(Fs.crossVectors(Ln,In),e=[Fs.x,Fs.y,Fs.z],Yr(e,xi,Mi,yi,Ns))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,sn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(sn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(xn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),xn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),xn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),xn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),xn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),xn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),xn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),xn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(xn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const xn=[new L,new L,new L,new L,new L,new L,new L,new L],sn=new L,Us=new qn,xi=new L,Mi=new L,yi=new L,Ln=new L,In=new L,Kn=new L,es=new L,Ns=new L,Fs=new L,Zn=new L;function Yr(i,t,e,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){Zn.fromArray(i,r);const a=s.x*Math.abs(Zn.x)+s.y*Math.abs(Zn.y)+s.z*Math.abs(Zn.z),c=t.dot(Zn),l=e.dot(Zn),h=n.dot(Zn);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>a)return!1}return!0}const Hu=new qn,ns=new L,qr=new L;class Ki{constructor(t=new L,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):Hu.setFromPoints(t).getCenter(n);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;ns.subVectors(t,this.center);const e=ns.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(ns,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(qr.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(ns.copy(t.center).add(qr)),this.expandByPoint(ns.copy(t.center).sub(qr))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Mn=new L,$r=new L,Os=new L,Dn=new L,Kr=new L,zs=new L,Zr=new L;class Va{constructor(t=new L,e=new L(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Mn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Mn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Mn.copy(this.origin).addScaledVector(this.direction,e),Mn.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){$r.copy(t).add(e).multiplyScalar(.5),Os.copy(e).sub(t).normalize(),Dn.copy(this.origin).sub($r);const r=t.distanceTo(e)*.5,o=-this.direction.dot(Os),a=Dn.dot(this.direction),c=-Dn.dot(Os),l=Dn.lengthSq(),h=Math.abs(1-o*o);let u,d,f,g;if(h>0)if(u=o*c-a,d=o*a-c,g=r*h,u>=0)if(d>=-g)if(d<=g){const _=1/h;u*=_,d*=_,f=u*(u+o*d+2*a)+d*(o*u+d+2*c)+l}else d=r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*c)+l;else d=-r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*c)+l;else d<=-g?(u=Math.max(0,-(-o*r+a)),d=u>0?-r:Math.min(Math.max(-r,-c),r),f=-u*u+d*(d+2*c)+l):d<=g?(u=0,d=Math.min(Math.max(-r,-c),r),f=d*(d+2*c)+l):(u=Math.max(0,-(o*r+a)),d=u>0?r:Math.min(Math.max(-r,-c),r),f=-u*u+d*(d+2*c)+l);else d=o>0?-r:r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy($r).addScaledVector(Os,d),f}intersectSphere(t,e){Mn.subVectors(t.center,this.origin);const n=Mn.dot(this.direction),s=Mn.dot(Mn)-n*n,r=t.radius*t.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,o,a,c;const l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return l>=0?(n=(t.min.x-d.x)*l,s=(t.max.x-d.x)*l):(n=(t.max.x-d.x)*l,s=(t.min.x-d.x)*l),h>=0?(r=(t.min.y-d.y)*h,o=(t.max.y-d.y)*h):(r=(t.max.y-d.y)*h,o=(t.min.y-d.y)*h),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),u>=0?(a=(t.min.z-d.z)*u,c=(t.max.z-d.z)*u):(a=(t.max.z-d.z)*u,c=(t.min.z-d.z)*u),n>c||a>s)||((a>n||n!==n)&&(n=a),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,Mn)!==null}intersectTriangle(t,e,n,s,r){Kr.subVectors(e,t),zs.subVectors(n,t),Zr.crossVectors(Kr,zs);let o=this.direction.dot(Zr),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Dn.subVectors(this.origin,t);const c=a*this.direction.dot(zs.crossVectors(Dn,zs));if(c<0)return null;const l=a*this.direction.dot(Kr.cross(Dn));if(l<0||c+l>o)return null;const h=-a*Dn.dot(Zr);return h<0?null:this.at(h/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class oe{constructor(t,e,n,s,r,o,a,c,l,h,u,d,f,g,_,m){oe.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,c,l,h,u,d,f,g,_,m)}set(t,e,n,s,r,o,a,c,l,h,u,d,f,g,_,m){const p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=s,p[1]=r,p[5]=o,p[9]=a,p[13]=c,p[2]=l,p[6]=h,p[10]=u,p[14]=d,p[3]=f,p[7]=g,p[11]=_,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new oe().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,s=1/Si.setFromMatrixColumn(t,0).length(),r=1/Si.setFromMatrixColumn(t,1).length(),o=1/Si.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,s=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(s),l=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){const d=o*h,f=o*u,g=a*h,_=a*u;e[0]=c*h,e[4]=-c*u,e[8]=l,e[1]=f+g*l,e[5]=d-_*l,e[9]=-a*c,e[2]=_-d*l,e[6]=g+f*l,e[10]=o*c}else if(t.order==="YXZ"){const d=c*h,f=c*u,g=l*h,_=l*u;e[0]=d+_*a,e[4]=g*a-f,e[8]=o*l,e[1]=o*u,e[5]=o*h,e[9]=-a,e[2]=f*a-g,e[6]=_+d*a,e[10]=o*c}else if(t.order==="ZXY"){const d=c*h,f=c*u,g=l*h,_=l*u;e[0]=d-_*a,e[4]=-o*u,e[8]=g+f*a,e[1]=f+g*a,e[5]=o*h,e[9]=_-d*a,e[2]=-o*l,e[6]=a,e[10]=o*c}else if(t.order==="ZYX"){const d=o*h,f=o*u,g=a*h,_=a*u;e[0]=c*h,e[4]=g*l-f,e[8]=d*l+_,e[1]=c*u,e[5]=_*l+d,e[9]=f*l-g,e[2]=-l,e[6]=a*c,e[10]=o*c}else if(t.order==="YZX"){const d=o*c,f=o*l,g=a*c,_=a*l;e[0]=c*h,e[4]=_-d*u,e[8]=g*u+f,e[1]=u,e[5]=o*h,e[9]=-a*h,e[2]=-l*h,e[6]=f*u+g,e[10]=d-_*u}else if(t.order==="XZY"){const d=o*c,f=o*l,g=a*c,_=a*l;e[0]=c*h,e[4]=-u,e[8]=l*h,e[1]=d*u+_,e[5]=o*h,e[9]=f*u-g,e[2]=g*u-f,e[6]=a*h,e[10]=_*u+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Gu,t,Vu)}lookAt(t,e,n){const s=this.elements;return Ke.subVectors(t,e),Ke.lengthSq()===0&&(Ke.z=1),Ke.normalize(),Un.crossVectors(n,Ke),Un.lengthSq()===0&&(Math.abs(n.z)===1?Ke.x+=1e-4:Ke.z+=1e-4,Ke.normalize(),Un.crossVectors(n,Ke)),Un.normalize(),Bs.crossVectors(Ke,Un),s[0]=Un.x,s[4]=Bs.x,s[8]=Ke.x,s[1]=Un.y,s[5]=Bs.y,s[9]=Ke.y,s[2]=Un.z,s[6]=Bs.z,s[10]=Ke.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],h=n[1],u=n[5],d=n[9],f=n[13],g=n[2],_=n[6],m=n[10],p=n[14],w=n[3],M=n[7],v=n[11],D=n[15],T=s[0],R=s[4],P=s[8],S=s[12],x=s[1],C=s[5],H=s[9],N=s[13],F=s[2],$=s[6],G=s[10],K=s[14],X=s[3],it=s[7],ht=s[11],pt=s[15];return r[0]=o*T+a*x+c*F+l*X,r[4]=o*R+a*C+c*$+l*it,r[8]=o*P+a*H+c*G+l*ht,r[12]=o*S+a*N+c*K+l*pt,r[1]=h*T+u*x+d*F+f*X,r[5]=h*R+u*C+d*$+f*it,r[9]=h*P+u*H+d*G+f*ht,r[13]=h*S+u*N+d*K+f*pt,r[2]=g*T+_*x+m*F+p*X,r[6]=g*R+_*C+m*$+p*it,r[10]=g*P+_*H+m*G+p*ht,r[14]=g*S+_*N+m*K+p*pt,r[3]=w*T+M*x+v*F+D*X,r[7]=w*R+M*C+v*$+D*it,r[11]=w*P+M*H+v*G+D*ht,r[15]=w*S+M*N+v*K+D*pt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],o=t[1],a=t[5],c=t[9],l=t[13],h=t[2],u=t[6],d=t[10],f=t[14],g=t[3],_=t[7],m=t[11],p=t[15];return g*(+r*c*u-s*l*u-r*a*d+n*l*d+s*a*f-n*c*f)+_*(+e*c*f-e*l*d+r*o*d-s*o*f+s*l*h-r*c*h)+m*(+e*l*u-e*a*f-r*o*u+n*o*f+r*a*h-n*l*h)+p*(-s*a*h-e*c*u+e*a*d+s*o*u-n*o*d+n*c*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8],u=t[9],d=t[10],f=t[11],g=t[12],_=t[13],m=t[14],p=t[15],w=u*m*l-_*d*l+_*c*f-a*m*f-u*c*p+a*d*p,M=g*d*l-h*m*l-g*c*f+o*m*f+h*c*p-o*d*p,v=h*_*l-g*u*l+g*a*f-o*_*f-h*a*p+o*u*p,D=g*u*c-h*_*c-g*a*d+o*_*d+h*a*m-o*u*m,T=e*w+n*M+s*v+r*D;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const R=1/T;return t[0]=w*R,t[1]=(_*d*r-u*m*r-_*s*f+n*m*f+u*s*p-n*d*p)*R,t[2]=(a*m*r-_*c*r+_*s*l-n*m*l-a*s*p+n*c*p)*R,t[3]=(u*c*r-a*d*r-u*s*l+n*d*l+a*s*f-n*c*f)*R,t[4]=M*R,t[5]=(h*m*r-g*d*r+g*s*f-e*m*f-h*s*p+e*d*p)*R,t[6]=(g*c*r-o*m*r-g*s*l+e*m*l+o*s*p-e*c*p)*R,t[7]=(o*d*r-h*c*r+h*s*l-e*d*l-o*s*f+e*c*f)*R,t[8]=v*R,t[9]=(g*u*r-h*_*r-g*n*f+e*_*f+h*n*p-e*u*p)*R,t[10]=(o*_*r-g*a*r+g*n*l-e*_*l-o*n*p+e*a*p)*R,t[11]=(h*a*r-o*u*r-h*n*l+e*u*l+o*n*f-e*a*f)*R,t[12]=D*R,t[13]=(h*_*s-g*u*s+g*n*d-e*_*d-h*n*m+e*u*m)*R,t[14]=(g*a*s-o*_*s-g*n*c+e*_*c+o*n*m-e*a*m)*R,t[15]=(o*u*s-h*a*s+h*n*c-e*u*c-o*n*d+e*a*d)*R,this}scale(t){const e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),s=Math.sin(e),r=1-n,o=t.x,a=t.y,c=t.z,l=r*o,h=r*a;return this.set(l*o+n,l*a-s*c,l*c+s*a,0,l*a+s*c,h*a+n,h*c-s*o,0,l*c-s*a,h*c+s*o,r*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,o){return this.set(1,n,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){const s=this.elements,r=e._x,o=e._y,a=e._z,c=e._w,l=r+r,h=o+o,u=a+a,d=r*l,f=r*h,g=r*u,_=o*h,m=o*u,p=a*u,w=c*l,M=c*h,v=c*u,D=n.x,T=n.y,R=n.z;return s[0]=(1-(_+p))*D,s[1]=(f+v)*D,s[2]=(g-M)*D,s[3]=0,s[4]=(f-v)*T,s[5]=(1-(d+p))*T,s[6]=(m+w)*T,s[7]=0,s[8]=(g+M)*R,s[9]=(m-w)*R,s[10]=(1-(d+_))*R,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){const s=this.elements;let r=Si.set(s[0],s[1],s[2]).length();const o=Si.set(s[4],s[5],s[6]).length(),a=Si.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],rn.copy(this);const l=1/r,h=1/o,u=1/a;return rn.elements[0]*=l,rn.elements[1]*=l,rn.elements[2]*=l,rn.elements[4]*=h,rn.elements[5]*=h,rn.elements[6]*=h,rn.elements[8]*=u,rn.elements[9]*=u,rn.elements[10]*=u,e.setFromRotationMatrix(rn),n.x=r,n.y=o,n.z=a,this}makePerspective(t,e,n,s,r,o,a=Tn){const c=this.elements,l=2*r/(e-t),h=2*r/(n-s),u=(e+t)/(e-t),d=(n+s)/(n-s);let f,g;if(a===Tn)f=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===_r)f=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=l,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=h,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=f,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,s,r,o,a=Tn){const c=this.elements,l=1/(e-t),h=1/(n-s),u=1/(o-r),d=(e+t)*l,f=(n+s)*h;let g,_;if(a===Tn)g=(o+r)*u,_=-2*u;else if(a===_r)g=r*u,_=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-d,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-f,c[2]=0,c[6]=0,c[10]=_,c[14]=-g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const Si=new L,rn=new oe,Gu=new L(0,0,0),Vu=new L(1,1,1),Un=new L,Bs=new L,Ke=new L,bc=new oe,Ac=new As;class hn{constructor(t=0,e=0,n=0,s=hn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const s=t.elements,r=s[0],o=s[4],a=s[8],c=s[1],l=s[5],h=s[9],u=s[2],d=s[6],f=s[10];switch(e){case"XYZ":this._y=Math.asin(be(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-be(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(be(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-be(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(be(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-be(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return bc.makeRotationFromQuaternion(t),this.setFromRotationMatrix(bc,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Ac.setFromEuler(this),this.setFromQuaternion(Ac,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}hn.DEFAULT_ORDER="XYZ";class Wa{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Wu=0;const Rc=new L,wi=new As,yn=new oe,ks=new L,is=new L,Xu=new L,Yu=new As,Cc=new L(1,0,0),Pc=new L(0,1,0),Lc=new L(0,0,1),Ic={type:"added"},qu={type:"removed"},Ei={type:"childadded",child:null},Jr={type:"childremoved",child:null};class Ae extends qi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Wu++}),this.uuid=$i(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ae.DEFAULT_UP.clone();const t=new L,e=new hn,n=new As,s=new L(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new oe},normalMatrix:{value:new $t}}),this.matrix=new oe,this.matrixWorld=new oe,this.matrixAutoUpdate=Ae.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ae.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Wa,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return wi.setFromAxisAngle(t,e),this.quaternion.multiply(wi),this}rotateOnWorldAxis(t,e){return wi.setFromAxisAngle(t,e),this.quaternion.premultiply(wi),this}rotateX(t){return this.rotateOnAxis(Cc,t)}rotateY(t){return this.rotateOnAxis(Pc,t)}rotateZ(t){return this.rotateOnAxis(Lc,t)}translateOnAxis(t,e){return Rc.copy(t).applyQuaternion(this.quaternion),this.position.add(Rc.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Cc,t)}translateY(t){return this.translateOnAxis(Pc,t)}translateZ(t){return this.translateOnAxis(Lc,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(yn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?ks.copy(t):ks.set(t,e,n);const s=this.parent;this.updateWorldMatrix(!0,!1),is.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?yn.lookAt(is,ks,this.up):yn.lookAt(ks,is,this.up),this.quaternion.setFromRotationMatrix(yn),s&&(yn.extractRotation(s.matrixWorld),wi.setFromRotationMatrix(yn),this.quaternion.premultiply(wi.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Ic),Ei.child=t,this.dispatchEvent(Ei),Ei.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(qu),Jr.child=t,this.dispatchEvent(Jr),Jr.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),yn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),yn.multiply(t.parent.matrixWorld)),t.applyMatrix4(yn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Ic),Ei.child=t,this.dispatchEvent(Ei),Ei.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){const o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(is,t,Xu),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(is,Yu,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){const u=c[l];r(t.shapes,u)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(t.materials,this.material[c]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];s.animations.push(r(t.animations,c))}}if(e){const a=o(t.geometries),c=o(t.materials),l=o(t.textures),h=o(t.images),u=o(t.shapes),d=o(t.skeletons),f=o(t.animations),g=o(t.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=s,n;function o(a){const c=[];for(const l in a){const h=a[l];delete h.metadata,c.push(h)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const s=t.children[n];this.add(s.clone())}return this}}Ae.DEFAULT_UP=new L(0,1,0);Ae.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ae.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const on=new L,Sn=new L,jr=new L,wn=new L,Ti=new L,bi=new L,Dc=new L,Qr=new L,to=new L,eo=new L,no=new ce,io=new ce,so=new ce;class an{constructor(t=new L,e=new L,n=new L){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),on.subVectors(t,e),s.cross(on);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){on.subVectors(s,e),Sn.subVectors(n,e),jr.subVectors(t,e);const o=on.dot(on),a=on.dot(Sn),c=on.dot(jr),l=Sn.dot(Sn),h=Sn.dot(jr),u=o*l-a*a;if(u===0)return r.set(0,0,0),null;const d=1/u,f=(l*c-a*h)*d,g=(o*h-a*c)*d;return r.set(1-f-g,g,f)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,wn)===null?!1:wn.x>=0&&wn.y>=0&&wn.x+wn.y<=1}static getInterpolation(t,e,n,s,r,o,a,c){return this.getBarycoord(t,e,n,s,wn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,wn.x),c.addScaledVector(o,wn.y),c.addScaledVector(a,wn.z),c)}static getInterpolatedAttribute(t,e,n,s,r,o){return no.setScalar(0),io.setScalar(0),so.setScalar(0),no.fromBufferAttribute(t,e),io.fromBufferAttribute(t,n),so.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(no,r.x),o.addScaledVector(io,r.y),o.addScaledVector(so,r.z),o}static isFrontFacing(t,e,n,s){return on.subVectors(n,e),Sn.subVectors(t,e),on.cross(Sn).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return on.subVectors(this.c,this.b),Sn.subVectors(this.a,this.b),on.cross(Sn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return an.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return an.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return an.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return an.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return an.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,s=this.b,r=this.c;let o,a;Ti.subVectors(s,n),bi.subVectors(r,n),Qr.subVectors(t,n);const c=Ti.dot(Qr),l=bi.dot(Qr);if(c<=0&&l<=0)return e.copy(n);to.subVectors(t,s);const h=Ti.dot(to),u=bi.dot(to);if(h>=0&&u<=h)return e.copy(s);const d=c*u-h*l;if(d<=0&&c>=0&&h<=0)return o=c/(c-h),e.copy(n).addScaledVector(Ti,o);eo.subVectors(t,r);const f=Ti.dot(eo),g=bi.dot(eo);if(g>=0&&f<=g)return e.copy(r);const _=f*l-c*g;if(_<=0&&l>=0&&g<=0)return a=l/(l-g),e.copy(n).addScaledVector(bi,a);const m=h*g-f*u;if(m<=0&&u-h>=0&&f-g>=0)return Dc.subVectors(r,s),a=(u-h)/(u-h+(f-g)),e.copy(s).addScaledVector(Dc,a);const p=1/(m+_+d);return o=_*p,a=d*p,e.copy(n).addScaledVector(Ti,o).addScaledVector(bi,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const sh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Nn={h:0,s:0,l:0},Hs={h:0,s:0,l:0};function ro(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class Mt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Ge){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,te.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=te.workingColorSpace){return this.r=t,this.g=e,this.b=n,te.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=te.workingColorSpace){if(t=Lu(t,1),e=be(e,0,1),n=be(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=ro(o,r,t+1/3),this.g=ro(o,r,t),this.b=ro(o,r,t-1/3)}return te.toWorkingColorSpace(this,s),this}setStyle(t,e=Ge){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Ge){const n=sh[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=bn(t.r),this.g=bn(t.g),this.b=bn(t.b),this}copyLinearToSRGB(t){return this.r=Fi(t.r),this.g=Fi(t.g),this.b=Fi(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Ge){return te.fromWorkingColorSpace(Fe.copy(this),t),Math.round(be(Fe.r*255,0,255))*65536+Math.round(be(Fe.g*255,0,255))*256+Math.round(be(Fe.b*255,0,255))}getHexString(t=Ge){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=te.workingColorSpace){te.fromWorkingColorSpace(Fe.copy(this),e);const n=Fe.r,s=Fe.g,r=Fe.b,o=Math.max(n,s,r),a=Math.min(n,s,r);let c,l;const h=(a+o)/2;if(a===o)c=0,l=0;else{const u=o-a;switch(l=h<=.5?u/(o+a):u/(2-o-a),o){case n:c=(s-r)/u+(s<r?6:0);break;case s:c=(r-n)/u+2;break;case r:c=(n-s)/u+4;break}c/=6}return t.h=c,t.s=l,t.l=h,t}getRGB(t,e=te.workingColorSpace){return te.fromWorkingColorSpace(Fe.copy(this),e),t.r=Fe.r,t.g=Fe.g,t.b=Fe.b,t}getStyle(t=Ge){te.fromWorkingColorSpace(Fe.copy(this),t);const e=Fe.r,n=Fe.g,s=Fe.b;return t!==Ge?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(Nn),this.setHSL(Nn.h+t,Nn.s+e,Nn.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Nn),t.getHSL(Hs);const n=Gr(Nn.h,Hs.h,e),s=Gr(Nn.s,Hs.s,e),r=Gr(Nn.l,Hs.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Fe=new Mt;Mt.NAMES=sh;let $u=0;class mi extends qi{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:$u++}),this.uuid=$i(),this.name="",this.blending=Ui,this.side=Vn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=No,this.blendDst=Fo,this.blendEquation=si,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Mt(0,0,0),this.blendAlpha=0,this.depthFunc=Bi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=gc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=_i,this.stencilZFail=_i,this.stencilZPass=_i,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Ui&&(n.blending=this.blending),this.side!==Vn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==No&&(n.blendSrc=this.blendSrc),this.blendDst!==Fo&&(n.blendDst=this.blendDst),this.blendEquation!==si&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Bi&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==gc&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==_i&&(n.stencilFail=this.stencilFail),this.stencilZFail!==_i&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==_i&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const o=[];for(const a in r){const c=r[a];delete c.metadata,o.push(c)}return o}if(e){const r=s(t.textures),o=s(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class he extends mi{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new Mt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new hn,this.combine=Ua,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Se=new L,Gs=new lt;class je{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=_c,this.updateRanges=[],this.gpuType=mn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Gs.fromBufferAttribute(this,e),Gs.applyMatrix3(t),this.setXY(e,Gs.x,Gs.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Se.fromBufferAttribute(this,e),Se.applyMatrix3(t),this.setXYZ(e,Se.x,Se.y,Se.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Se.fromBufferAttribute(this,e),Se.applyMatrix4(t),this.setXYZ(e,Se.x,Se.y,Se.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Se.fromBufferAttribute(this,e),Se.applyNormalMatrix(t),this.setXYZ(e,Se.x,Se.y,Se.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Se.fromBufferAttribute(this,e),Se.transformDirection(t),this.setXYZ(e,Se.x,Se.y,Se.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=ts(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=We(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=ts(e,this.array)),e}setX(t,e){return this.normalized&&(e=We(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=ts(e,this.array)),e}setY(t,e){return this.normalized&&(e=We(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=ts(e,this.array)),e}setZ(t,e){return this.normalized&&(e=We(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=ts(e,this.array)),e}setW(t,e){return this.normalized&&(e=We(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=We(e,this.array),n=We(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=We(e,this.array),n=We(n,this.array),s=We(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=We(e,this.array),n=We(n,this.array),s=We(s,this.array),r=We(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==_c&&(t.usage=this.usage),t}}class rh extends je{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class oh extends je{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class Jt extends je{constructor(t,e,n){super(new Float32Array(t),e,n)}}let Ku=0;const tn=new oe,oo=new Ae,Ai=new L,Ze=new qn,ss=new qn,Le=new L;class Pe extends qi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Ku++}),this.uuid=$i(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(eh(t)?oh:rh)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new $t().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return tn.makeRotationFromQuaternion(t),this.applyMatrix4(tn),this}rotateX(t){return tn.makeRotationX(t),this.applyMatrix4(tn),this}rotateY(t){return tn.makeRotationY(t),this.applyMatrix4(tn),this}rotateZ(t){return tn.makeRotationZ(t),this.applyMatrix4(tn),this}translate(t,e,n){return tn.makeTranslation(t,e,n),this.applyMatrix4(tn),this}scale(t,e,n){return tn.makeScale(t,e,n),this.applyMatrix4(tn),this}lookAt(t){return oo.lookAt(t),oo.updateMatrix(),this.applyMatrix4(oo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ai).negate(),this.translate(Ai.x,Ai.y,Ai.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let s=0,r=t.length;s<r;s++){const o=t[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Jt(n,3))}else{for(let n=0,s=e.count;n<s;n++){const r=t[n];e.setXYZ(n,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new qn);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new L(-1/0,-1/0,-1/0),new L(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){const r=e[n];Ze.setFromBufferAttribute(r),this.morphTargetsRelative?(Le.addVectors(this.boundingBox.min,Ze.min),this.boundingBox.expandByPoint(Le),Le.addVectors(this.boundingBox.max,Ze.max),this.boundingBox.expandByPoint(Le)):(this.boundingBox.expandByPoint(Ze.min),this.boundingBox.expandByPoint(Ze.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ki);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new L,1/0);return}if(t){const n=this.boundingSphere.center;if(Ze.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){const a=e[r];ss.setFromBufferAttribute(a),this.morphTargetsRelative?(Le.addVectors(Ze.min,ss.min),Ze.expandByPoint(Le),Le.addVectors(Ze.max,ss.max),Ze.expandByPoint(Le)):(Ze.expandByPoint(ss.min),Ze.expandByPoint(ss.max))}Ze.getCenter(n);let s=0;for(let r=0,o=t.count;r<o;r++)Le.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(Le));if(e)for(let r=0,o=e.length;r<o;r++){const a=e[r],c=this.morphTargetsRelative;for(let l=0,h=a.count;l<h;l++)Le.fromBufferAttribute(a,l),c&&(Ai.fromBufferAttribute(t,l),Le.add(Ai)),s=Math.max(s,n.distanceToSquared(Le))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new je(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],c=[];for(let P=0;P<n.count;P++)a[P]=new L,c[P]=new L;const l=new L,h=new L,u=new L,d=new lt,f=new lt,g=new lt,_=new L,m=new L;function p(P,S,x){l.fromBufferAttribute(n,P),h.fromBufferAttribute(n,S),u.fromBufferAttribute(n,x),d.fromBufferAttribute(r,P),f.fromBufferAttribute(r,S),g.fromBufferAttribute(r,x),h.sub(l),u.sub(l),f.sub(d),g.sub(d);const C=1/(f.x*g.y-g.x*f.y);isFinite(C)&&(_.copy(h).multiplyScalar(g.y).addScaledVector(u,-f.y).multiplyScalar(C),m.copy(u).multiplyScalar(f.x).addScaledVector(h,-g.x).multiplyScalar(C),a[P].add(_),a[S].add(_),a[x].add(_),c[P].add(m),c[S].add(m),c[x].add(m))}let w=this.groups;w.length===0&&(w=[{start:0,count:t.count}]);for(let P=0,S=w.length;P<S;++P){const x=w[P],C=x.start,H=x.count;for(let N=C,F=C+H;N<F;N+=3)p(t.getX(N+0),t.getX(N+1),t.getX(N+2))}const M=new L,v=new L,D=new L,T=new L;function R(P){D.fromBufferAttribute(s,P),T.copy(D);const S=a[P];M.copy(S),M.sub(D.multiplyScalar(D.dot(S))).normalize(),v.crossVectors(T,S);const C=v.dot(c[P])<0?-1:1;o.setXYZW(P,M.x,M.y,M.z,C)}for(let P=0,S=w.length;P<S;++P){const x=w[P],C=x.start,H=x.count;for(let N=C,F=C+H;N<F;N+=3)R(t.getX(N+0)),R(t.getX(N+1)),R(t.getX(N+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new je(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);const s=new L,r=new L,o=new L,a=new L,c=new L,l=new L,h=new L,u=new L;if(t)for(let d=0,f=t.count;d<f;d+=3){const g=t.getX(d+0),_=t.getX(d+1),m=t.getX(d+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,_),o.fromBufferAttribute(e,m),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),a.fromBufferAttribute(n,g),c.fromBufferAttribute(n,_),l.fromBufferAttribute(n,m),a.add(h),c.add(h),l.add(h),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(_,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let d=0,f=e.count;d<f;d+=3)s.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),o.fromBufferAttribute(e,d+2),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Le.fromBufferAttribute(t,e),Le.normalize(),t.setXYZ(e,Le.x,Le.y,Le.z)}toNonIndexed(){function t(a,c){const l=a.array,h=a.itemSize,u=a.normalized,d=new l.constructor(c.length*h);let f=0,g=0;for(let _=0,m=c.length;_<m;_++){a.isInterleavedBufferAttribute?f=c[_]*a.data.stride+a.offset:f=c[_]*h;for(let p=0;p<h;p++)d[g++]=l[f++]}return new je(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Pe,n=this.index.array,s=this.attributes;for(const a in s){const c=s[a],l=t(c,n);e.setAttribute(a,l)}const r=this.morphAttributes;for(const a in r){const c=[],l=r[a];for(let h=0,u=l.length;h<u;h++){const d=l[h],f=t(d,n);c.push(f)}e.morphAttributes[a]=c}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,c=o.length;a<c;a++){const l=o[a];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const c in n){const l=n[c];t.data.attributes[c]=l.toJSON(t.data)}const s={};let r=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],h=[];for(let u=0,d=l.length;u<d;u++){const f=l[u];h.push(f.toJSON(t.data))}h.length>0&&(s[c]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const s=t.attributes;for(const l in s){const h=s[l];this.setAttribute(l,h.clone(e))}const r=t.morphAttributes;for(const l in r){const h=[],u=r[l];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(e));this.morphAttributes[l]=h}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let l=0,h=o.length;l<h;l++){const u=o[l];this.addGroup(u.start,u.count,u.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Uc=new oe,Jn=new Va,Vs=new Ki,Nc=new L,Ws=new L,Xs=new L,Ys=new L,ao=new L,qs=new L,Fc=new L,$s=new L;class I extends Ae{constructor(t=new Pe,e=new he){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(s,t);const a=this.morphTargetInfluences;if(r&&a){qs.set(0,0,0);for(let c=0,l=r.length;c<l;c++){const h=a[c],u=r[c];h!==0&&(ao.fromBufferAttribute(u,t),o?qs.addScaledVector(ao,h):qs.addScaledVector(ao.sub(e),h))}e.add(qs)}return e}raycast(t,e){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Vs.copy(n.boundingSphere),Vs.applyMatrix4(r),Jn.copy(t.ray).recast(t.near),!(Vs.containsPoint(Jn.origin)===!1&&(Jn.intersectSphere(Vs,Nc)===null||Jn.origin.distanceToSquared(Nc)>(t.far-t.near)**2))&&(Uc.copy(r).invert(),Jn.copy(t.ray).applyMatrix4(Uc),!(n.boundingBox!==null&&Jn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Jn)))}_computeIntersections(t,e,n){let s;const r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=d.length;g<_;g++){const m=d[g],p=o[m.materialIndex],w=Math.max(m.start,f.start),M=Math.min(a.count,Math.min(m.start+m.count,f.start+f.count));for(let v=w,D=M;v<D;v+=3){const T=a.getX(v),R=a.getX(v+1),P=a.getX(v+2);s=Ks(this,p,t,n,l,h,u,T,R,P),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const g=Math.max(0,f.start),_=Math.min(a.count,f.start+f.count);for(let m=g,p=_;m<p;m+=3){const w=a.getX(m),M=a.getX(m+1),v=a.getX(m+2);s=Ks(this,o,t,n,l,h,u,w,M,v),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(c!==void 0)if(Array.isArray(o))for(let g=0,_=d.length;g<_;g++){const m=d[g],p=o[m.materialIndex],w=Math.max(m.start,f.start),M=Math.min(c.count,Math.min(m.start+m.count,f.start+f.count));for(let v=w,D=M;v<D;v+=3){const T=v,R=v+1,P=v+2;s=Ks(this,p,t,n,l,h,u,T,R,P),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const g=Math.max(0,f.start),_=Math.min(c.count,f.start+f.count);for(let m=g,p=_;m<p;m+=3){const w=m,M=m+1,v=m+2;s=Ks(this,o,t,n,l,h,u,w,M,v),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}}function Zu(i,t,e,n,s,r,o,a){let c;if(t.side===De?c=n.intersectTriangle(o,r,s,!0,a):c=n.intersectTriangle(s,r,o,t.side===Vn,a),c===null)return null;$s.copy(a),$s.applyMatrix4(i.matrixWorld);const l=e.ray.origin.distanceTo($s);return l<e.near||l>e.far?null:{distance:l,point:$s.clone(),object:i}}function Ks(i,t,e,n,s,r,o,a,c,l){i.getVertexPosition(a,Ws),i.getVertexPosition(c,Xs),i.getVertexPosition(l,Ys);const h=Zu(i,t,e,n,Ws,Xs,Ys,Fc);if(h){const u=new L;an.getBarycoord(Fc,Ws,Xs,Ys,u),s&&(h.uv=an.getInterpolatedAttribute(s,a,c,l,u,new lt)),r&&(h.uv1=an.getInterpolatedAttribute(r,a,c,l,u,new lt)),o&&(h.normal=an.getInterpolatedAttribute(o,a,c,l,u,new L),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const d={a,b:c,c:l,normal:new L,materialIndex:0};an.getNormal(Ws,Xs,Ys,d.normal),h.face=d,h.barycoord=u}return h}class Ft extends Pe{constructor(t=1,e=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const c=[],l=[],h=[],u=[];let d=0,f=0;g("z","y","x",-1,-1,n,e,t,o,r,0),g("z","y","x",1,-1,n,e,-t,o,r,1),g("x","z","y",1,1,t,n,e,s,o,2),g("x","z","y",1,-1,t,n,-e,s,o,3),g("x","y","z",1,-1,t,e,n,s,r,4),g("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new Jt(l,3)),this.setAttribute("normal",new Jt(h,3)),this.setAttribute("uv",new Jt(u,2));function g(_,m,p,w,M,v,D,T,R,P,S){const x=v/R,C=D/P,H=v/2,N=D/2,F=T/2,$=R+1,G=P+1;let K=0,X=0;const it=new L;for(let ht=0;ht<G;ht++){const pt=ht*C-N;for(let wt=0;wt<$;wt++){const Ct=wt*x-H;it[_]=Ct*w,it[m]=pt*M,it[p]=F,l.push(it.x,it.y,it.z),it[_]=0,it[m]=0,it[p]=T>0?1:-1,h.push(it.x,it.y,it.z),u.push(wt/R),u.push(1-ht/P),K+=1}}for(let ht=0;ht<P;ht++)for(let pt=0;pt<R;pt++){const wt=d+pt+$*ht,Ct=d+pt+$*(ht+1),j=d+(pt+1)+$*(ht+1),rt=d+(pt+1)+$*ht;c.push(wt,Ct,rt),c.push(Ct,j,rt),X+=6}a.addGroup(f,X,S),f+=X,d+=K}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ft(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Xi(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function He(i){const t={};for(let e=0;e<i.length;e++){const n=Xi(i[e]);for(const s in n)t[s]=n[s]}return t}function Ju(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function ah(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:te.workingColorSpace}const ju={clone:Xi,merge:He};var Qu=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,td=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Wn extends mi{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Qu,this.fragmentShader=td,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Xi(t.uniforms),this.uniformsGroups=Ju(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class ch extends Ae{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new oe,this.projectionMatrix=new oe,this.projectionMatrixInverse=new oe,this.coordinateSystem=Tn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Fn=new L,Oc=new lt,zc=new lt;class Ye extends ch{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=xa*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Hr*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return xa*2*Math.atan(Math.tan(Hr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Fn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Fn.x,Fn.y).multiplyScalar(-t/Fn.z),Fn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Fn.x,Fn.y).multiplyScalar(-t/Fn.z)}getViewSize(t,e){return this.getViewBounds(t,Oc,zc),e.subVectors(zc,Oc)}setViewOffset(t,e,n,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Hr*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*s/c,e-=o.offsetY*n/l,s*=o.width/c,n*=o.height/l}const a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Ri=-90,Ci=1;class ed extends Ae{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Ye(Ri,Ci,t,e);s.layers=this.layers,this.add(s);const r=new Ye(Ri,Ci,t,e);r.layers=this.layers,this.add(r);const o=new Ye(Ri,Ci,t,e);o.layers=this.layers,this.add(o);const a=new Ye(Ri,Ci,t,e);a.layers=this.layers,this.add(a);const c=new Ye(Ri,Ci,t,e);c.layers=this.layers,this.add(c);const l=new Ye(Ri,Ci,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,s,r,o,a,c]=e;for(const l of e)this.remove(l);if(t===Tn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===_r)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,c,l,h]=this.children,u=t.getRenderTarget(),d=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,o),t.setRenderTarget(n,2,s),t.render(e,a),t.setRenderTarget(n,3,s),t.render(e,c),t.setRenderTarget(n,4,s),t.render(e,l),n.texture.generateMipmaps=_,t.setRenderTarget(n,5,s),t.render(e,h),t.setRenderTarget(u,d,f),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class lh extends ze{constructor(t,e,n,s,r,o,a,c,l,h){t=t!==void 0?t:[],e=e!==void 0?e:ki,super(t,e,n,s,r,o,a,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class nd extends ui{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new lh(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:pn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Ft(5,5,5),r=new Wn({name:"CubemapFromEquirect",uniforms:Xi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:De,blending:Hn});r.uniforms.tEquirect.value=e;const o=new I(s,r),a=e.minFilter;return e.minFilter===ci&&(e.minFilter=pn),new ed(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,n,s){const r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,s);t.setRenderTarget(r)}}const co=new L,id=new L,sd=new $t;class ni{constructor(t=new L(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const s=co.subVectors(n,e).cross(id.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(co),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||sd.getNormalMatrix(t),s=this.coplanarPoint(co).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const jn=new Ki,Zs=new L;class Xa{constructor(t=new ni,e=new ni,n=new ni,s=new ni,r=new ni,o=new ni){this.planes=[t,e,n,s,r,o]}set(t,e,n,s,r,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Tn){const n=this.planes,s=t.elements,r=s[0],o=s[1],a=s[2],c=s[3],l=s[4],h=s[5],u=s[6],d=s[7],f=s[8],g=s[9],_=s[10],m=s[11],p=s[12],w=s[13],M=s[14],v=s[15];if(n[0].setComponents(c-r,d-l,m-f,v-p).normalize(),n[1].setComponents(c+r,d+l,m+f,v+p).normalize(),n[2].setComponents(c+o,d+h,m+g,v+w).normalize(),n[3].setComponents(c-o,d-h,m-g,v-w).normalize(),n[4].setComponents(c-a,d-u,m-_,v-M).normalize(),e===Tn)n[5].setComponents(c+a,d+u,m+_,v+M).normalize();else if(e===_r)n[5].setComponents(a,u,_,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),jn.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),jn.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(jn)}intersectsSprite(t){return jn.center.set(0,0,0),jn.radius=.7071067811865476,jn.applyMatrix4(t.matrixWorld),this.intersectsSphere(jn)}intersectsSphere(t){const e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const s=e[n];if(Zs.x=s.normal.x>0?t.max.x:t.min.x,Zs.y=s.normal.y>0?t.max.y:t.min.y,Zs.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Zs)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function hh(){let i=null,t=!1,e=null,n=null;function s(r,o){e(r,o),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function rd(i){const t=new WeakMap;function e(a,c){const l=a.array,h=a.usage,u=l.byteLength,d=i.createBuffer();i.bindBuffer(c,d),i.bufferData(c,l,h),a.onUploadCallback();let f;if(l instanceof Float32Array)f=i.FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)f=i.SHORT;else if(l instanceof Uint32Array)f=i.UNSIGNED_INT;else if(l instanceof Int32Array)f=i.INT;else if(l instanceof Int8Array)f=i.BYTE;else if(l instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:d,type:f,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,c,l){const h=c.array,u=c.updateRanges;if(i.bindBuffer(l,a),u.length===0)i.bufferSubData(l,0,h);else{u.sort((f,g)=>f.start-g.start);let d=0;for(let f=1;f<u.length;f++){const g=u[d],_=u[f];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++d,u[d]=_)}u.length=d+1;for(let f=0,g=u.length;f<g;f++){const _=u[f];i.bufferSubData(l,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const c=t.get(a);c&&(i.deleteBuffer(c.buffer),t.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const l=t.get(a);if(l===void 0)t.set(a,e(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,a,c),l.version=a.version}}return{get:s,remove:r,update:o}}class cn extends Pe{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};const r=t/2,o=e/2,a=Math.floor(n),c=Math.floor(s),l=a+1,h=c+1,u=t/a,d=e/c,f=[],g=[],_=[],m=[];for(let p=0;p<h;p++){const w=p*d-o;for(let M=0;M<l;M++){const v=M*u-r;g.push(v,-w,0),_.push(0,0,1),m.push(M/a),m.push(1-p/c)}}for(let p=0;p<c;p++)for(let w=0;w<a;w++){const M=w+l*p,v=w+l*(p+1),D=w+1+l*(p+1),T=w+1+l*p;f.push(M,v,T),f.push(v,D,T)}this.setIndex(f),this.setAttribute("position",new Jt(g,3)),this.setAttribute("normal",new Jt(_,3)),this.setAttribute("uv",new Jt(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new cn(t.width,t.height,t.widthSegments,t.heightSegments)}}var od=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,ad=`#ifdef USE_ALPHAHASH
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
#endif`,cd=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,ld=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,hd=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,ud=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,dd=`#ifdef USE_AOMAP
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
#endif`,fd=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,pd=`#ifdef USE_BATCHING
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
#endif`,md=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,gd=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,_d=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,vd=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,xd=`#ifdef USE_IRIDESCENCE
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
#endif`,Md=`#ifdef USE_BUMPMAP
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
#endif`,yd=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Sd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,wd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Ed=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Td=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,bd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Ad=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Rd=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Cd=`#define PI 3.141592653589793
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
} // validated`,Pd=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Ld=`vec3 transformedNormal = objectNormal;
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
#endif`,Id=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Dd=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Ud=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Nd=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Fd="gl_FragColor = linearToOutputTexel( gl_FragColor );",Od=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,zd=`#ifdef USE_ENVMAP
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
#endif`,Bd=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,kd=`#ifdef USE_ENVMAP
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
#endif`,Hd=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Gd=`#ifdef USE_ENVMAP
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
#endif`,Vd=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Wd=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Xd=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Yd=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,qd=`#ifdef USE_GRADIENTMAP
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
}`,$d=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Kd=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Zd=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Jd=`uniform bool receiveShadow;
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
#endif`,jd=`#ifdef USE_ENVMAP
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
#endif`,Qd=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,tf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,ef=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,nf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,sf=`PhysicalMaterial material;
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
#endif`,rf=`struct PhysicalMaterial {
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
}`,of=`
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
#endif`,af=`#if defined( RE_IndirectDiffuse )
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
#endif`,cf=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,lf=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,hf=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,uf=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,df=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,ff=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,pf=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,mf=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,gf=`#if defined( USE_POINTS_UV )
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
#endif`,_f=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,vf=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,xf=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Mf=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,yf=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Sf=`#ifdef USE_MORPHTARGETS
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
#endif`,wf=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Ef=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Tf=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,bf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Af=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Rf=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Cf=`#ifdef USE_NORMALMAP
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
#endif`,Pf=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Lf=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,If=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Df=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Uf=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Nf=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Ff=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Of=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,zf=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Bf=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,kf=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Hf=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Gf=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Vf=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Wf=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Xf=`float getShadowMask() {
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
}`,Yf=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,qf=`#ifdef USE_SKINNING
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
#endif`,$f=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Kf=`#ifdef USE_SKINNING
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
#endif`,Zf=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Jf=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,jf=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Qf=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,tp=`#ifdef USE_TRANSMISSION
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
#endif`,ep=`#ifdef USE_TRANSMISSION
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
#endif`,np=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ip=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,sp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,rp=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const op=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,ap=`uniform sampler2D t2D;
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
}`,cp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,lp=`#ifdef ENVMAP_TYPE_CUBE
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
}`,hp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,up=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,dp=`#include <common>
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
}`,fp=`#if DEPTH_PACKING == 3200
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
}`,pp=`#define DISTANCE
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
}`,mp=`#define DISTANCE
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
}`,gp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,_p=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,vp=`uniform float scale;
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
}`,xp=`uniform vec3 diffuse;
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
}`,Mp=`#include <common>
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
}`,yp=`uniform vec3 diffuse;
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
}`,Sp=`#define LAMBERT
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
}`,wp=`#define LAMBERT
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
}`,Ep=`#define MATCAP
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
}`,Tp=`#define MATCAP
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
}`,bp=`#define NORMAL
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
}`,Ap=`#define NORMAL
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
}`,Rp=`#define PHONG
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
}`,Cp=`#define PHONG
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
}`,Pp=`#define STANDARD
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
}`,Lp=`#define STANDARD
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
}`,Ip=`#define TOON
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
}`,Dp=`#define TOON
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
}`,Up=`uniform float size;
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
}`,Np=`uniform vec3 diffuse;
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
}`,Fp=`#include <common>
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
}`,Op=`uniform vec3 color;
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
}`,zp=`uniform float rotation;
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
}`,Bp=`uniform vec3 diffuse;
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
}`,Zt={alphahash_fragment:od,alphahash_pars_fragment:ad,alphamap_fragment:cd,alphamap_pars_fragment:ld,alphatest_fragment:hd,alphatest_pars_fragment:ud,aomap_fragment:dd,aomap_pars_fragment:fd,batching_pars_vertex:pd,batching_vertex:md,begin_vertex:gd,beginnormal_vertex:_d,bsdfs:vd,iridescence_fragment:xd,bumpmap_pars_fragment:Md,clipping_planes_fragment:yd,clipping_planes_pars_fragment:Sd,clipping_planes_pars_vertex:wd,clipping_planes_vertex:Ed,color_fragment:Td,color_pars_fragment:bd,color_pars_vertex:Ad,color_vertex:Rd,common:Cd,cube_uv_reflection_fragment:Pd,defaultnormal_vertex:Ld,displacementmap_pars_vertex:Id,displacementmap_vertex:Dd,emissivemap_fragment:Ud,emissivemap_pars_fragment:Nd,colorspace_fragment:Fd,colorspace_pars_fragment:Od,envmap_fragment:zd,envmap_common_pars_fragment:Bd,envmap_pars_fragment:kd,envmap_pars_vertex:Hd,envmap_physical_pars_fragment:jd,envmap_vertex:Gd,fog_vertex:Vd,fog_pars_vertex:Wd,fog_fragment:Xd,fog_pars_fragment:Yd,gradientmap_pars_fragment:qd,lightmap_pars_fragment:$d,lights_lambert_fragment:Kd,lights_lambert_pars_fragment:Zd,lights_pars_begin:Jd,lights_toon_fragment:Qd,lights_toon_pars_fragment:tf,lights_phong_fragment:ef,lights_phong_pars_fragment:nf,lights_physical_fragment:sf,lights_physical_pars_fragment:rf,lights_fragment_begin:of,lights_fragment_maps:af,lights_fragment_end:cf,logdepthbuf_fragment:lf,logdepthbuf_pars_fragment:hf,logdepthbuf_pars_vertex:uf,logdepthbuf_vertex:df,map_fragment:ff,map_pars_fragment:pf,map_particle_fragment:mf,map_particle_pars_fragment:gf,metalnessmap_fragment:_f,metalnessmap_pars_fragment:vf,morphinstance_vertex:xf,morphcolor_vertex:Mf,morphnormal_vertex:yf,morphtarget_pars_vertex:Sf,morphtarget_vertex:wf,normal_fragment_begin:Ef,normal_fragment_maps:Tf,normal_pars_fragment:bf,normal_pars_vertex:Af,normal_vertex:Rf,normalmap_pars_fragment:Cf,clearcoat_normal_fragment_begin:Pf,clearcoat_normal_fragment_maps:Lf,clearcoat_pars_fragment:If,iridescence_pars_fragment:Df,opaque_fragment:Uf,packing:Nf,premultiplied_alpha_fragment:Ff,project_vertex:Of,dithering_fragment:zf,dithering_pars_fragment:Bf,roughnessmap_fragment:kf,roughnessmap_pars_fragment:Hf,shadowmap_pars_fragment:Gf,shadowmap_pars_vertex:Vf,shadowmap_vertex:Wf,shadowmask_pars_fragment:Xf,skinbase_vertex:Yf,skinning_pars_vertex:qf,skinning_vertex:$f,skinnormal_vertex:Kf,specularmap_fragment:Zf,specularmap_pars_fragment:Jf,tonemapping_fragment:jf,tonemapping_pars_fragment:Qf,transmission_fragment:tp,transmission_pars_fragment:ep,uv_pars_fragment:np,uv_pars_vertex:ip,uv_vertex:sp,worldpos_vertex:rp,background_vert:op,background_frag:ap,backgroundCube_vert:cp,backgroundCube_frag:lp,cube_vert:hp,cube_frag:up,depth_vert:dp,depth_frag:fp,distanceRGBA_vert:pp,distanceRGBA_frag:mp,equirect_vert:gp,equirect_frag:_p,linedashed_vert:vp,linedashed_frag:xp,meshbasic_vert:Mp,meshbasic_frag:yp,meshlambert_vert:Sp,meshlambert_frag:wp,meshmatcap_vert:Ep,meshmatcap_frag:Tp,meshnormal_vert:bp,meshnormal_frag:Ap,meshphong_vert:Rp,meshphong_frag:Cp,meshphysical_vert:Pp,meshphysical_frag:Lp,meshtoon_vert:Ip,meshtoon_frag:Dp,points_vert:Up,points_frag:Np,shadow_vert:Fp,shadow_frag:Op,sprite_vert:zp,sprite_frag:Bp},mt={common:{diffuse:{value:new Mt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new $t},alphaMap:{value:null},alphaMapTransform:{value:new $t},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new $t}},envmap:{envMap:{value:null},envMapRotation:{value:new $t},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new $t}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new $t}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new $t},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new $t},normalScale:{value:new lt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new $t},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new $t}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new $t}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new $t}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Mt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Mt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new $t},alphaTest:{value:0},uvTransform:{value:new $t}},sprite:{diffuse:{value:new Mt(16777215)},opacity:{value:1},center:{value:new lt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new $t},alphaMap:{value:null},alphaMapTransform:{value:new $t},alphaTest:{value:0}}},dn={basic:{uniforms:He([mt.common,mt.specularmap,mt.envmap,mt.aomap,mt.lightmap,mt.fog]),vertexShader:Zt.meshbasic_vert,fragmentShader:Zt.meshbasic_frag},lambert:{uniforms:He([mt.common,mt.specularmap,mt.envmap,mt.aomap,mt.lightmap,mt.emissivemap,mt.bumpmap,mt.normalmap,mt.displacementmap,mt.fog,mt.lights,{emissive:{value:new Mt(0)}}]),vertexShader:Zt.meshlambert_vert,fragmentShader:Zt.meshlambert_frag},phong:{uniforms:He([mt.common,mt.specularmap,mt.envmap,mt.aomap,mt.lightmap,mt.emissivemap,mt.bumpmap,mt.normalmap,mt.displacementmap,mt.fog,mt.lights,{emissive:{value:new Mt(0)},specular:{value:new Mt(1118481)},shininess:{value:30}}]),vertexShader:Zt.meshphong_vert,fragmentShader:Zt.meshphong_frag},standard:{uniforms:He([mt.common,mt.envmap,mt.aomap,mt.lightmap,mt.emissivemap,mt.bumpmap,mt.normalmap,mt.displacementmap,mt.roughnessmap,mt.metalnessmap,mt.fog,mt.lights,{emissive:{value:new Mt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Zt.meshphysical_vert,fragmentShader:Zt.meshphysical_frag},toon:{uniforms:He([mt.common,mt.aomap,mt.lightmap,mt.emissivemap,mt.bumpmap,mt.normalmap,mt.displacementmap,mt.gradientmap,mt.fog,mt.lights,{emissive:{value:new Mt(0)}}]),vertexShader:Zt.meshtoon_vert,fragmentShader:Zt.meshtoon_frag},matcap:{uniforms:He([mt.common,mt.bumpmap,mt.normalmap,mt.displacementmap,mt.fog,{matcap:{value:null}}]),vertexShader:Zt.meshmatcap_vert,fragmentShader:Zt.meshmatcap_frag},points:{uniforms:He([mt.points,mt.fog]),vertexShader:Zt.points_vert,fragmentShader:Zt.points_frag},dashed:{uniforms:He([mt.common,mt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Zt.linedashed_vert,fragmentShader:Zt.linedashed_frag},depth:{uniforms:He([mt.common,mt.displacementmap]),vertexShader:Zt.depth_vert,fragmentShader:Zt.depth_frag},normal:{uniforms:He([mt.common,mt.bumpmap,mt.normalmap,mt.displacementmap,{opacity:{value:1}}]),vertexShader:Zt.meshnormal_vert,fragmentShader:Zt.meshnormal_frag},sprite:{uniforms:He([mt.sprite,mt.fog]),vertexShader:Zt.sprite_vert,fragmentShader:Zt.sprite_frag},background:{uniforms:{uvTransform:{value:new $t},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Zt.background_vert,fragmentShader:Zt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new $t}},vertexShader:Zt.backgroundCube_vert,fragmentShader:Zt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Zt.cube_vert,fragmentShader:Zt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Zt.equirect_vert,fragmentShader:Zt.equirect_frag},distanceRGBA:{uniforms:He([mt.common,mt.displacementmap,{referencePosition:{value:new L},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Zt.distanceRGBA_vert,fragmentShader:Zt.distanceRGBA_frag},shadow:{uniforms:He([mt.lights,mt.fog,{color:{value:new Mt(0)},opacity:{value:1}}]),vertexShader:Zt.shadow_vert,fragmentShader:Zt.shadow_frag}};dn.physical={uniforms:He([dn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new $t},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new $t},clearcoatNormalScale:{value:new lt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new $t},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new $t},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new $t},sheen:{value:0},sheenColor:{value:new Mt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new $t},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new $t},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new $t},transmissionSamplerSize:{value:new lt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new $t},attenuationDistance:{value:0},attenuationColor:{value:new Mt(0)},specularColor:{value:new Mt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new $t},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new $t},anisotropyVector:{value:new lt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new $t}}]),vertexShader:Zt.meshphysical_vert,fragmentShader:Zt.meshphysical_frag};const Js={r:0,b:0,g:0},Qn=new hn,kp=new oe;function Hp(i,t,e,n,s,r,o){const a=new Mt(0);let c=r===!0?0:1,l,h,u=null,d=0,f=null;function g(w){let M=w.isScene===!0?w.background:null;return M&&M.isTexture&&(M=(w.backgroundBlurriness>0?e:t).get(M)),M}function _(w){let M=!1;const v=g(w);v===null?p(a,c):v&&v.isColor&&(p(v,1),M=!0);const D=i.xr.getEnvironmentBlendMode();D==="additive"?n.buffers.color.setClear(0,0,0,1,o):D==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||M)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(w,M){const v=g(M);v&&(v.isCubeTexture||v.mapping===Lr)?(h===void 0&&(h=new I(new Ft(1,1,1),new Wn({name:"BackgroundCubeMaterial",uniforms:Xi(dn.backgroundCube.uniforms),vertexShader:dn.backgroundCube.vertexShader,fragmentShader:dn.backgroundCube.fragmentShader,side:De,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(D,T,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),Qn.copy(M.backgroundRotation),Qn.x*=-1,Qn.y*=-1,Qn.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(Qn.y*=-1,Qn.z*=-1),h.material.uniforms.envMap.value=v,h.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(kp.makeRotationFromEuler(Qn)),h.material.toneMapped=te.getTransfer(v.colorSpace)!==ae,(u!==v||d!==v.version||f!==i.toneMapping)&&(h.material.needsUpdate=!0,u=v,d=v.version,f=i.toneMapping),h.layers.enableAll(),w.unshift(h,h.geometry,h.material,0,0,null)):v&&v.isTexture&&(l===void 0&&(l=new I(new cn(2,2),new Wn({name:"BackgroundMaterial",uniforms:Xi(dn.background.uniforms),vertexShader:dn.background.vertexShader,fragmentShader:dn.background.fragmentShader,side:Vn,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=v,l.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,l.material.toneMapped=te.getTransfer(v.colorSpace)!==ae,v.matrixAutoUpdate===!0&&v.updateMatrix(),l.material.uniforms.uvTransform.value.copy(v.matrix),(u!==v||d!==v.version||f!==i.toneMapping)&&(l.material.needsUpdate=!0,u=v,d=v.version,f=i.toneMapping),l.layers.enableAll(),w.unshift(l,l.geometry,l.material,0,0,null))}function p(w,M){w.getRGB(Js,ah(i)),n.buffers.color.setClear(Js.r,Js.g,Js.b,M,o)}return{getClearColor:function(){return a},setClearColor:function(w,M=1){a.set(w),c=M,p(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(w){c=w,p(a,c)},render:_,addToRenderList:m}}function Gp(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null);let r=s,o=!1;function a(x,C,H,N,F){let $=!1;const G=u(N,H,C);r!==G&&(r=G,l(r.object)),$=f(x,N,H,F),$&&g(x,N,H,F),F!==null&&t.update(F,i.ELEMENT_ARRAY_BUFFER),($||o)&&(o=!1,v(x,C,H,N),F!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(F).buffer))}function c(){return i.createVertexArray()}function l(x){return i.bindVertexArray(x)}function h(x){return i.deleteVertexArray(x)}function u(x,C,H){const N=H.wireframe===!0;let F=n[x.id];F===void 0&&(F={},n[x.id]=F);let $=F[C.id];$===void 0&&($={},F[C.id]=$);let G=$[N];return G===void 0&&(G=d(c()),$[N]=G),G}function d(x){const C=[],H=[],N=[];for(let F=0;F<e;F++)C[F]=0,H[F]=0,N[F]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:C,enabledAttributes:H,attributeDivisors:N,object:x,attributes:{},index:null}}function f(x,C,H,N){const F=r.attributes,$=C.attributes;let G=0;const K=H.getAttributes();for(const X in K)if(K[X].location>=0){const ht=F[X];let pt=$[X];if(pt===void 0&&(X==="instanceMatrix"&&x.instanceMatrix&&(pt=x.instanceMatrix),X==="instanceColor"&&x.instanceColor&&(pt=x.instanceColor)),ht===void 0||ht.attribute!==pt||pt&&ht.data!==pt.data)return!0;G++}return r.attributesNum!==G||r.index!==N}function g(x,C,H,N){const F={},$=C.attributes;let G=0;const K=H.getAttributes();for(const X in K)if(K[X].location>=0){let ht=$[X];ht===void 0&&(X==="instanceMatrix"&&x.instanceMatrix&&(ht=x.instanceMatrix),X==="instanceColor"&&x.instanceColor&&(ht=x.instanceColor));const pt={};pt.attribute=ht,ht&&ht.data&&(pt.data=ht.data),F[X]=pt,G++}r.attributes=F,r.attributesNum=G,r.index=N}function _(){const x=r.newAttributes;for(let C=0,H=x.length;C<H;C++)x[C]=0}function m(x){p(x,0)}function p(x,C){const H=r.newAttributes,N=r.enabledAttributes,F=r.attributeDivisors;H[x]=1,N[x]===0&&(i.enableVertexAttribArray(x),N[x]=1),F[x]!==C&&(i.vertexAttribDivisor(x,C),F[x]=C)}function w(){const x=r.newAttributes,C=r.enabledAttributes;for(let H=0,N=C.length;H<N;H++)C[H]!==x[H]&&(i.disableVertexAttribArray(H),C[H]=0)}function M(x,C,H,N,F,$,G){G===!0?i.vertexAttribIPointer(x,C,H,F,$):i.vertexAttribPointer(x,C,H,N,F,$)}function v(x,C,H,N){_();const F=N.attributes,$=H.getAttributes(),G=C.defaultAttributeValues;for(const K in $){const X=$[K];if(X.location>=0){let it=F[K];if(it===void 0&&(K==="instanceMatrix"&&x.instanceMatrix&&(it=x.instanceMatrix),K==="instanceColor"&&x.instanceColor&&(it=x.instanceColor)),it!==void 0){const ht=it.normalized,pt=it.itemSize,wt=t.get(it);if(wt===void 0)continue;const Ct=wt.buffer,j=wt.type,rt=wt.bytesPerElement,_t=j===i.INT||j===i.UNSIGNED_INT||it.gpuType===Na;if(it.isInterleavedBufferAttribute){const ut=it.data,Ut=ut.stride,zt=it.offset;if(ut.isInstancedInterleavedBuffer){for(let Ot=0;Ot<X.locationSize;Ot++)p(X.location+Ot,ut.meshPerAttribute);x.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=ut.meshPerAttribute*ut.count)}else for(let Ot=0;Ot<X.locationSize;Ot++)m(X.location+Ot);i.bindBuffer(i.ARRAY_BUFFER,Ct);for(let Ot=0;Ot<X.locationSize;Ot++)M(X.location+Ot,pt/X.locationSize,j,ht,Ut*rt,(zt+pt/X.locationSize*Ot)*rt,_t)}else{if(it.isInstancedBufferAttribute){for(let ut=0;ut<X.locationSize;ut++)p(X.location+ut,it.meshPerAttribute);x.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=it.meshPerAttribute*it.count)}else for(let ut=0;ut<X.locationSize;ut++)m(X.location+ut);i.bindBuffer(i.ARRAY_BUFFER,Ct);for(let ut=0;ut<X.locationSize;ut++)M(X.location+ut,pt/X.locationSize,j,ht,pt*rt,pt/X.locationSize*ut*rt,_t)}}else if(G!==void 0){const ht=G[K];if(ht!==void 0)switch(ht.length){case 2:i.vertexAttrib2fv(X.location,ht);break;case 3:i.vertexAttrib3fv(X.location,ht);break;case 4:i.vertexAttrib4fv(X.location,ht);break;default:i.vertexAttrib1fv(X.location,ht)}}}}w()}function D(){P();for(const x in n){const C=n[x];for(const H in C){const N=C[H];for(const F in N)h(N[F].object),delete N[F];delete C[H]}delete n[x]}}function T(x){if(n[x.id]===void 0)return;const C=n[x.id];for(const H in C){const N=C[H];for(const F in N)h(N[F].object),delete N[F];delete C[H]}delete n[x.id]}function R(x){for(const C in n){const H=n[C];if(H[x.id]===void 0)continue;const N=H[x.id];for(const F in N)h(N[F].object),delete N[F];delete H[x.id]}}function P(){S(),o=!0,r!==s&&(r=s,l(r.object))}function S(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:P,resetDefaultState:S,dispose:D,releaseStatesOfGeometry:T,releaseStatesOfProgram:R,initAttributes:_,enableAttribute:m,disableUnusedAttributes:w}}function Vp(i,t,e){let n;function s(l){n=l}function r(l,h){i.drawArrays(n,l,h),e.update(h,n,1)}function o(l,h,u){u!==0&&(i.drawArraysInstanced(n,l,h,u),e.update(h,n,u))}function a(l,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,h,0,u);let f=0;for(let g=0;g<u;g++)f+=h[g];e.update(f,n,1)}function c(l,h,u,d){if(u===0)return;const f=t.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<l.length;g++)o(l[g],h[g],d[g]);else{f.multiDrawArraysInstancedWEBGL(n,l,0,h,0,d,0,u);let g=0;for(let _=0;_<u;_++)g+=h[_]*d[_];e.update(g,n,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function Wp(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const R=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(R){return!(R!==ln&&n.convert(R)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(R){const P=R===bs&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(R!==Rn&&n.convert(R)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&R!==mn&&!P)}function c(R){if(R==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp";const h=c(l);h!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);const u=e.logarithmicDepthBuffer===!0,d=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),w=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),M=i.getParameter(i.MAX_VARYING_VECTORS),v=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),D=g>0,T=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:u,reverseDepthBuffer:d,maxTextures:f,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:w,maxVaryings:M,maxFragmentUniforms:v,vertexTextures:D,maxSamples:T}}function Xp(i){const t=this;let e=null,n=0,s=!1,r=!1;const o=new ni,a=new $t,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){const f=u.length!==0||d||n!==0||s;return s=d,n=u.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){e=h(u,d,0)},this.setState=function(u,d,f){const g=u.clippingPlanes,_=u.clipIntersection,m=u.clipShadows,p=i.get(u);if(!s||g===null||g.length===0||r&&!m)r?h(null):l();else{const w=r?0:n,M=w*4;let v=p.clippingState||null;c.value=v,v=h(g,d,M,f);for(let D=0;D!==M;++D)v[D]=e[D];p.clippingState=v,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=w}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,d,f,g){const _=u!==null?u.length:0;let m=null;if(_!==0){if(m=c.value,g!==!0||m===null){const p=f+_*4,w=d.matrixWorldInverse;a.getNormalMatrix(w),(m===null||m.length<p)&&(m=new Float32Array(p));for(let M=0,v=f;M!==_;++M,v+=4)o.copy(u[M]).applyMatrix4(w,a),o.normal.toArray(m,v),m[v+3]=o.constant}c.value=m,c.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,m}}function Yp(i){let t=new WeakMap;function e(o,a){return a===Wo?o.mapping=ki:a===Xo&&(o.mapping=Hi),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===Wo||a===Xo)if(t.has(o)){const c=t.get(o).texture;return e(c,o.mapping)}else{const c=o.image;if(c&&c.height>0){const l=new nd(c.height);return l.fromEquirectangularTexture(i,o),t.set(o,l),o.addEventListener("dispose",s),e(l.texture,o.mapping)}else return null}}return o}function s(o){const a=o.target;a.removeEventListener("dispose",s);const c=t.get(a);c!==void 0&&(t.delete(a),c.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}class uh extends ch{constructor(t=-1,e=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-t,o=n+t,a=s+e,c=s-e;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=h*this.view.offsetY,c=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const Ii=4,Bc=[.125,.215,.35,.446,.526,.582],ri=20,lo=new uh,kc=new Mt;let ho=null,uo=0,fo=0,po=!1;const ii=(1+Math.sqrt(5))/2,Pi=1/ii,Hc=[new L(-ii,Pi,0),new L(ii,Pi,0),new L(-Pi,0,ii),new L(Pi,0,ii),new L(0,ii,-Pi),new L(0,ii,Pi),new L(-1,1,-1),new L(1,1,-1),new L(-1,1,1),new L(1,1,1)];class Ma{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100){ho=this._renderer.getRenderTarget(),uo=this._renderer.getActiveCubeFace(),fo=this._renderer.getActiveMipmapLevel(),po=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Wc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Vc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(ho,uo,fo),this._renderer.xr.enabled=po,t.scissorTest=!1,js(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===ki||t.mapping===Hi?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),ho=this._renderer.getRenderTarget(),uo=this._renderer.getActiveCubeFace(),fo=this._renderer.getActiveMipmapLevel(),po=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:pn,minFilter:pn,generateMipmaps:!1,type:bs,format:ln,colorSpace:Yi,depthBuffer:!1},s=Gc(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Gc(t,e,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=qp(r)),this._blurMaterial=$p(r,t,e)}return s}_compileMaterial(t){const e=new I(this._lodPlanes[0],t);this._renderer.compile(e,lo)}_sceneToCubeUV(t,e,n,s){const a=new Ye(90,1,e,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(kc),h.toneMapping=Gn,h.autoClear=!1;const f=new he({name:"PMREM.Background",side:De,depthWrite:!1,depthTest:!1}),g=new I(new Ft,f);let _=!1;const m=t.background;m?m.isColor&&(f.color.copy(m),t.background=null,_=!0):(f.color.copy(kc),_=!0);for(let p=0;p<6;p++){const w=p%3;w===0?(a.up.set(0,c[p],0),a.lookAt(l[p],0,0)):w===1?(a.up.set(0,0,c[p]),a.lookAt(0,l[p],0)):(a.up.set(0,c[p],0),a.lookAt(0,0,l[p]));const M=this._cubeSize;js(s,w*M,p>2?M:0,M,M),h.setRenderTarget(s),_&&h.render(g,a),h.render(t,a)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=d,h.autoClear=u,t.background=m}_textureToCubeUV(t,e){const n=this._renderer,s=t.mapping===ki||t.mapping===Hi;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Wc()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Vc());const r=s?this._cubemapMaterial:this._equirectMaterial,o=new I(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;const c=this._cubeSize;js(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(o,lo)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=Hc[(s-r-1)%Hc.length];this._blur(t,r-1,r,o,a)}e.autoClear=n}_blur(t,e,n,s,r){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,s,"latitudinal",r),this._halfBlur(o,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,o,a){const c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new I(this._lodPlanes[s],l),d=l.uniforms,f=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*ri-1),_=r/g,m=isFinite(r)?1+Math.floor(h*_):ri;m>ri&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${ri}`);const p=[];let w=0;for(let R=0;R<ri;++R){const P=R/_,S=Math.exp(-P*P/2);p.push(S),R===0?w+=S:R<m&&(w+=2*S)}for(let R=0;R<p.length;R++)p[R]=p[R]/w;d.envMap.value=t.texture,d.samples.value=m,d.weights.value=p,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:M}=this;d.dTheta.value=g,d.mipInt.value=M-n;const v=this._sizeLods[s],D=3*v*(s>M-Ii?s-M+Ii:0),T=4*(this._cubeSize-v);js(e,D,T,3*v,2*v),c.setRenderTarget(e),c.render(u,lo)}}function qp(i){const t=[],e=[],n=[];let s=i;const r=i-Ii+1+Bc.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);e.push(a);let c=1/a;o>i-Ii?c=Bc[o-i+Ii-1]:o===0&&(c=0),n.push(c);const l=1/(a-2),h=-l,u=1+l,d=[h,h,u,h,u,u,h,h,u,u,h,u],f=6,g=6,_=3,m=2,p=1,w=new Float32Array(_*g*f),M=new Float32Array(m*g*f),v=new Float32Array(p*g*f);for(let T=0;T<f;T++){const R=T%3*2/3-1,P=T>2?0:-1,S=[R,P,0,R+2/3,P,0,R+2/3,P+1,0,R,P,0,R+2/3,P+1,0,R,P+1,0];w.set(S,_*g*T),M.set(d,m*g*T);const x=[T,T,T,T,T,T];v.set(x,p*g*T)}const D=new Pe;D.setAttribute("position",new je(w,_)),D.setAttribute("uv",new je(M,m)),D.setAttribute("faceIndex",new je(v,p)),t.push(D),s>Ii&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Gc(i,t,e){const n=new ui(i,t,e);return n.texture.mapping=Lr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function js(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function $p(i,t,e){const n=new Float32Array(ri),s=new L(0,1,0);return new Wn({name:"SphericalGaussianBlur",defines:{n:ri,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Ya(),fragmentShader:`

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
		`,blending:Hn,depthTest:!1,depthWrite:!1})}function Vc(){return new Wn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ya(),fragmentShader:`

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
		`,blending:Hn,depthTest:!1,depthWrite:!1})}function Wc(){return new Wn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ya(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Hn,depthTest:!1,depthWrite:!1})}function Ya(){return`

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
	`}function Kp(i){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){const c=a.mapping,l=c===Wo||c===Xo,h=c===ki||c===Hi;if(l||h){let u=t.get(a);const d=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return e===null&&(e=new Ma(i)),u=l?e.fromEquirectangular(a,u):e.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),u.texture;if(u!==void 0)return u.texture;{const f=a.image;return l&&f&&f.height>0||h&&f&&s(f)?(e===null&&(e=new Ma(i)),u=l?e.fromEquirectangular(a):e.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),a.addEventListener("dispose",r),u.texture):null}}}return a}function s(a){let c=0;const l=6;for(let h=0;h<l;h++)a[h]!==void 0&&c++;return c===l}function r(a){const c=a.target;c.removeEventListener("dispose",r);const l=t.get(c);l!==void 0&&(t.delete(c),l.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function Zp(i){const t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const s=e(n);return s===null&&fs("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function Jp(i,t,e,n){const s={},r=new WeakMap;function o(u){const d=u.target;d.index!==null&&t.remove(d.index);for(const g in d.attributes)t.remove(d.attributes[g]);for(const g in d.morphAttributes){const _=d.morphAttributes[g];for(let m=0,p=_.length;m<p;m++)t.remove(_[m])}d.removeEventListener("dispose",o),delete s[d.id];const f=r.get(d);f&&(t.remove(f),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function a(u,d){return s[d.id]===!0||(d.addEventListener("dispose",o),s[d.id]=!0,e.memory.geometries++),d}function c(u){const d=u.attributes;for(const g in d)t.update(d[g],i.ARRAY_BUFFER);const f=u.morphAttributes;for(const g in f){const _=f[g];for(let m=0,p=_.length;m<p;m++)t.update(_[m],i.ARRAY_BUFFER)}}function l(u){const d=[],f=u.index,g=u.attributes.position;let _=0;if(f!==null){const w=f.array;_=f.version;for(let M=0,v=w.length;M<v;M+=3){const D=w[M+0],T=w[M+1],R=w[M+2];d.push(D,T,T,R,R,D)}}else if(g!==void 0){const w=g.array;_=g.version;for(let M=0,v=w.length/3-1;M<v;M+=3){const D=M+0,T=M+1,R=M+2;d.push(D,T,T,R,R,D)}}else return;const m=new(eh(d)?oh:rh)(d,1);m.version=_;const p=r.get(u);p&&t.remove(p),r.set(u,m)}function h(u){const d=r.get(u);if(d){const f=u.index;f!==null&&d.version<f.version&&l(u)}else l(u);return r.get(u)}return{get:a,update:c,getWireframeAttribute:h}}function jp(i,t,e){let n;function s(d){n=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function c(d,f){i.drawElements(n,f,r,d*o),e.update(f,n,1)}function l(d,f,g){g!==0&&(i.drawElementsInstanced(n,f,r,d*o,g),e.update(f,n,g))}function h(d,f,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,d,0,g);let m=0;for(let p=0;p<g;p++)m+=f[p];e.update(m,n,1)}function u(d,f,g,_){if(g===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<d.length;p++)l(d[p]/o,f[p],_[p]);else{m.multiDrawElementsInstancedWEBGL(n,f,0,r,d,0,_,0,g);let p=0;for(let w=0;w<g;w++)p+=f[w]*_[w];e.update(p,n,1)}}this.setMode=s,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function Qp(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(r/3);break;case i.LINES:e.lines+=a*(r/2);break;case i.LINE_STRIP:e.lines+=a*(r-1);break;case i.LINE_LOOP:e.lines+=a*r;break;case i.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function t0(i,t,e){const n=new WeakMap,s=new ce;function r(o,a,c){const l=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0;let d=n.get(a);if(d===void 0||d.count!==u){let x=function(){P.dispose(),n.delete(a),a.removeEventListener("dispose",x)};var f=x;d!==void 0&&d.texture.dispose();const g=a.morphAttributes.position!==void 0,_=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],w=a.morphAttributes.normal||[],M=a.morphAttributes.color||[];let v=0;g===!0&&(v=1),_===!0&&(v=2),m===!0&&(v=3);let D=a.attributes.position.count*v,T=1;D>t.maxTextureSize&&(T=Math.ceil(D/t.maxTextureSize),D=t.maxTextureSize);const R=new Float32Array(D*T*4*u),P=new ih(R,D,T,u);P.type=mn,P.needsUpdate=!0;const S=v*4;for(let C=0;C<u;C++){const H=p[C],N=w[C],F=M[C],$=D*T*4*C;for(let G=0;G<H.count;G++){const K=G*S;g===!0&&(s.fromBufferAttribute(H,G),R[$+K+0]=s.x,R[$+K+1]=s.y,R[$+K+2]=s.z,R[$+K+3]=0),_===!0&&(s.fromBufferAttribute(N,G),R[$+K+4]=s.x,R[$+K+5]=s.y,R[$+K+6]=s.z,R[$+K+7]=0),m===!0&&(s.fromBufferAttribute(F,G),R[$+K+8]=s.x,R[$+K+9]=s.y,R[$+K+10]=s.z,R[$+K+11]=F.itemSize===4?s.w:1)}}d={count:u,texture:P,size:new lt(D,T)},n.set(a,d),a.addEventListener("dispose",x)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",o.morphTexture,e);else{let g=0;for(let m=0;m<l.length;m++)g+=l[m];const _=a.morphTargetsRelative?1:1-g;c.getUniforms().setValue(i,"morphTargetBaseInfluence",_),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",d.texture,e),c.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:r}}function e0(i,t,e,n){let s=new WeakMap;function r(c){const l=n.render.frame,h=c.geometry,u=t.get(c,h);if(s.get(u)!==l&&(t.update(u),s.set(u,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),s.get(c)!==l&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),s.set(c,l))),c.isSkinnedMesh){const d=c.skeleton;s.get(d)!==l&&(d.update(),s.set(d,l))}return u}function o(){s=new WeakMap}function a(c){const l=c.target;l.removeEventListener("dispose",a),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:r,dispose:o}}class dh extends ze{constructor(t,e,n,s,r,o,a,c,l,h=Ni){if(h!==Ni&&h!==Wi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Ni&&(n=hi),n===void 0&&h===Wi&&(n=Vi),super(null,s,r,o,a,c,h,n,l),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:Je,this.minFilter=c!==void 0?c:Je,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const fh=new ze,Xc=new dh(1,1),ph=new ih,mh=new ku,gh=new lh,Yc=[],qc=[],$c=new Float32Array(16),Kc=new Float32Array(9),Zc=new Float32Array(4);function Zi(i,t,e){const n=i[0];if(n<=0||n>0)return i;const s=t*e;let r=Yc[s];if(r===void 0&&(r=new Float32Array(s),Yc[s]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(r,a)}return r}function Re(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Ce(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Dr(i,t){let e=qc[t];e===void 0&&(e=new Int32Array(t),qc[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function n0(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function i0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Re(e,t))return;i.uniform2fv(this.addr,t),Ce(e,t)}}function s0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Re(e,t))return;i.uniform3fv(this.addr,t),Ce(e,t)}}function r0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Re(e,t))return;i.uniform4fv(this.addr,t),Ce(e,t)}}function o0(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Re(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Ce(e,t)}else{if(Re(e,n))return;Zc.set(n),i.uniformMatrix2fv(this.addr,!1,Zc),Ce(e,n)}}function a0(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Re(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Ce(e,t)}else{if(Re(e,n))return;Kc.set(n),i.uniformMatrix3fv(this.addr,!1,Kc),Ce(e,n)}}function c0(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Re(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Ce(e,t)}else{if(Re(e,n))return;$c.set(n),i.uniformMatrix4fv(this.addr,!1,$c),Ce(e,n)}}function l0(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function h0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Re(e,t))return;i.uniform2iv(this.addr,t),Ce(e,t)}}function u0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Re(e,t))return;i.uniform3iv(this.addr,t),Ce(e,t)}}function d0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Re(e,t))return;i.uniform4iv(this.addr,t),Ce(e,t)}}function f0(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function p0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Re(e,t))return;i.uniform2uiv(this.addr,t),Ce(e,t)}}function m0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Re(e,t))return;i.uniform3uiv(this.addr,t),Ce(e,t)}}function g0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Re(e,t))return;i.uniform4uiv(this.addr,t),Ce(e,t)}}function _0(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Xc.compareFunction=th,r=Xc):r=fh,e.setTexture2D(t||r,s)}function v0(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||mh,s)}function x0(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||gh,s)}function M0(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||ph,s)}function y0(i){switch(i){case 5126:return n0;case 35664:return i0;case 35665:return s0;case 35666:return r0;case 35674:return o0;case 35675:return a0;case 35676:return c0;case 5124:case 35670:return l0;case 35667:case 35671:return h0;case 35668:case 35672:return u0;case 35669:case 35673:return d0;case 5125:return f0;case 36294:return p0;case 36295:return m0;case 36296:return g0;case 35678:case 36198:case 36298:case 36306:case 35682:return _0;case 35679:case 36299:case 36307:return v0;case 35680:case 36300:case 36308:case 36293:return x0;case 36289:case 36303:case 36311:case 36292:return M0}}function S0(i,t){i.uniform1fv(this.addr,t)}function w0(i,t){const e=Zi(t,this.size,2);i.uniform2fv(this.addr,e)}function E0(i,t){const e=Zi(t,this.size,3);i.uniform3fv(this.addr,e)}function T0(i,t){const e=Zi(t,this.size,4);i.uniform4fv(this.addr,e)}function b0(i,t){const e=Zi(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function A0(i,t){const e=Zi(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function R0(i,t){const e=Zi(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function C0(i,t){i.uniform1iv(this.addr,t)}function P0(i,t){i.uniform2iv(this.addr,t)}function L0(i,t){i.uniform3iv(this.addr,t)}function I0(i,t){i.uniform4iv(this.addr,t)}function D0(i,t){i.uniform1uiv(this.addr,t)}function U0(i,t){i.uniform2uiv(this.addr,t)}function N0(i,t){i.uniform3uiv(this.addr,t)}function F0(i,t){i.uniform4uiv(this.addr,t)}function O0(i,t,e){const n=this.cache,s=t.length,r=Dr(e,s);Re(n,r)||(i.uniform1iv(this.addr,r),Ce(n,r));for(let o=0;o!==s;++o)e.setTexture2D(t[o]||fh,r[o])}function z0(i,t,e){const n=this.cache,s=t.length,r=Dr(e,s);Re(n,r)||(i.uniform1iv(this.addr,r),Ce(n,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||mh,r[o])}function B0(i,t,e){const n=this.cache,s=t.length,r=Dr(e,s);Re(n,r)||(i.uniform1iv(this.addr,r),Ce(n,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||gh,r[o])}function k0(i,t,e){const n=this.cache,s=t.length,r=Dr(e,s);Re(n,r)||(i.uniform1iv(this.addr,r),Ce(n,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||ph,r[o])}function H0(i){switch(i){case 5126:return S0;case 35664:return w0;case 35665:return E0;case 35666:return T0;case 35674:return b0;case 35675:return A0;case 35676:return R0;case 5124:case 35670:return C0;case 35667:case 35671:return P0;case 35668:case 35672:return L0;case 35669:case 35673:return I0;case 5125:return D0;case 36294:return U0;case 36295:return N0;case 36296:return F0;case 35678:case 36198:case 36298:case 36306:case 35682:return O0;case 35679:case 36299:case 36307:return z0;case 35680:case 36300:case 36308:case 36293:return B0;case 36289:case 36303:case 36311:case 36292:return k0}}class G0{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=y0(e.type)}}class V0{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=H0(e.type)}}class W0{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(t,e[a.id],n)}}}const mo=/(\w+)(\])?(\[|\.)?/g;function Jc(i,t){i.seq.push(t),i.map[t.id]=t}function X0(i,t,e){const n=i.name,s=n.length;for(mo.lastIndex=0;;){const r=mo.exec(n),o=mo.lastIndex;let a=r[1];const c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===s){Jc(e,l===void 0?new G0(a,i,t):new V0(a,i,t));break}else{let u=e.map[a];u===void 0&&(u=new W0(a),Jc(e,u)),e=u}}}class pr{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const r=t.getActiveUniform(e,s),o=t.getUniformLocation(e,r.name);X0(r,o,this)}}setValue(t,e,n,s){const r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){const s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,o=e.length;r!==o;++r){const a=e[r],c=n[a.id];c.needsUpdate!==!1&&a.setValue(t,c.value,s)}}static seqWithValue(t,e){const n=[];for(let s=0,r=t.length;s!==r;++s){const o=t[s];o.id in e&&n.push(o)}return n}}function jc(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const Y0=37297;let q0=0;function $0(i,t){const e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){const a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}const Qc=new $t;function K0(i){te._getMatrix(Qc,te.workingColorSpace,i);const t=`mat3( ${Qc.elements.map(e=>e.toFixed(4))} )`;switch(te.getTransfer(i)){case Ir:return[t,"LinearTransferOETF"];case ae:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function tl(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const o=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+$0(i.getShaderSource(t),o)}else return s}function Z0(i,t){const e=K0(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function J0(i,t){let e;switch(t){case fu:e="Linear";break;case pu:e="Reinhard";break;case mu:e="Cineon";break;case Vl:e="ACESFilmic";break;case _u:e="AgX";break;case vu:e="Neutral";break;case gu:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const Qs=new L;function j0(){te.getLuminanceCoefficients(Qs);const i=Qs.x.toFixed(4),t=Qs.y.toFixed(4),e=Qs.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Q0(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ps).join(`
`)}function tm(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function em(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(t,s),o=r.name;let a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function ps(i){return i!==""}function el(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function nl(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const nm=/^[ \t]*#include +<([\w\d./]+)>/gm;function ya(i){return i.replace(nm,sm)}const im=new Map;function sm(i,t){let e=Zt[t];if(e===void 0){const n=im.get(t);if(n!==void 0)e=Zt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return ya(e)}const rm=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function il(i){return i.replace(rm,om)}function om(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function sl(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}function am(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Hl?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===Gl?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===En&&(t="SHADOWMAP_TYPE_VSM"),t}function cm(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case ki:case Hi:t="ENVMAP_TYPE_CUBE";break;case Lr:t="ENVMAP_TYPE_CUBE_UV";break}return t}function lm(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Hi:t="ENVMAP_MODE_REFRACTION";break}return t}function hm(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Ua:t="ENVMAP_BLENDING_MULTIPLY";break;case uu:t="ENVMAP_BLENDING_MIX";break;case du:t="ENVMAP_BLENDING_ADD";break}return t}function um(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function dm(i,t,e,n){const s=i.getContext(),r=e.defines;let o=e.vertexShader,a=e.fragmentShader;const c=am(e),l=cm(e),h=lm(e),u=hm(e),d=um(e),f=Q0(e),g=tm(r),_=s.createProgram();let m,p,w=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(ps).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(ps).join(`
`),p.length>0&&(p+=`
`)):(m=[sl(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ps).join(`
`),p=[sl(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Gn?"#define TONE_MAPPING":"",e.toneMapping!==Gn?Zt.tonemapping_pars_fragment:"",e.toneMapping!==Gn?J0("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Zt.colorspace_pars_fragment,Z0("linearToOutputTexel",e.outputColorSpace),j0(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(ps).join(`
`)),o=ya(o),o=el(o,e),o=nl(o,e),a=ya(a),a=el(a,e),a=nl(a,e),o=il(o),a=il(a),e.isRawShaderMaterial!==!0&&(w=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",e.glslVersion===vc?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===vc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const M=w+m+o,v=w+p+a,D=jc(s,s.VERTEX_SHADER,M),T=jc(s,s.FRAGMENT_SHADER,v);s.attachShader(_,D),s.attachShader(_,T),e.index0AttributeName!==void 0?s.bindAttribLocation(_,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function R(C){if(i.debug.checkShaderErrors){const H=s.getProgramInfoLog(_).trim(),N=s.getShaderInfoLog(D).trim(),F=s.getShaderInfoLog(T).trim();let $=!0,G=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if($=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,_,D,T);else{const K=tl(s,D,"vertex"),X=tl(s,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+C.name+`
Material Type: `+C.type+`

Program Info Log: `+H+`
`+K+`
`+X)}else H!==""?console.warn("THREE.WebGLProgram: Program Info Log:",H):(N===""||F==="")&&(G=!1);G&&(C.diagnostics={runnable:$,programLog:H,vertexShader:{log:N,prefix:m},fragmentShader:{log:F,prefix:p}})}s.deleteShader(D),s.deleteShader(T),P=new pr(s,_),S=em(s,_)}let P;this.getUniforms=function(){return P===void 0&&R(this),P};let S;this.getAttributes=function(){return S===void 0&&R(this),S};let x=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return x===!1&&(x=s.getProgramParameter(_,Y0)),x},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=q0++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=D,this.fragmentShader=T,this}let fm=0;class pm{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new mm(t),e.set(t,n)),n}}class mm{constructor(t){this.id=fm++,this.code=t,this.usedTimes=0}}function gm(i,t,e,n,s,r,o){const a=new Wa,c=new pm,l=new Set,h=[],u=s.logarithmicDepthBuffer,d=s.vertexTextures;let f=s.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(S){return l.add(S),S===0?"uv":`uv${S}`}function m(S,x,C,H,N){const F=H.fog,$=N.geometry,G=S.isMeshStandardMaterial?H.environment:null,K=(S.isMeshStandardMaterial?e:t).get(S.envMap||G),X=K&&K.mapping===Lr?K.image.height:null,it=g[S.type];S.precision!==null&&(f=s.getMaxPrecision(S.precision),f!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",f,"instead."));const ht=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,pt=ht!==void 0?ht.length:0;let wt=0;$.morphAttributes.position!==void 0&&(wt=1),$.morphAttributes.normal!==void 0&&(wt=2),$.morphAttributes.color!==void 0&&(wt=3);let Ct,j,rt,_t;if(it){const re=dn[it];Ct=re.vertexShader,j=re.fragmentShader}else Ct=S.vertexShader,j=S.fragmentShader,c.update(S),rt=c.getVertexShaderID(S),_t=c.getFragmentShaderID(S);const ut=i.getRenderTarget(),Ut=i.state.buffers.depth.getReversed(),zt=N.isInstancedMesh===!0,Ot=N.isBatchedMesh===!0,Xt=!!S.map,U=!!S.matcap,O=!!K,b=!!S.aoMap,ct=!!S.lightMap,Z=!!S.bumpMap,ot=!!S.normalMap,st=!!S.displacementMap,Rt=!!S.emissiveMap,ft=!!S.metalnessMap,A=!!S.roughnessMap,y=S.anisotropy>0,V=S.clearcoat>0,Q=S.dispersion>0,nt=S.iridescence>0,tt=S.sheen>0,Pt=S.transmission>0,gt=y&&!!S.anisotropyMap,Tt=V&&!!S.clearcoatMap,jt=V&&!!S.clearcoatNormalMap,at=V&&!!S.clearcoatRoughnessMap,bt=nt&&!!S.iridescenceMap,kt=nt&&!!S.iridescenceThicknessMap,Ht=tt&&!!S.sheenColorMap,At=tt&&!!S.sheenRoughnessMap,Qt=!!S.specularMap,Kt=!!S.specularColorMap,ue=!!S.specularIntensityMap,z=Pt&&!!S.transmissionMap,vt=Pt&&!!S.thicknessMap,J=!!S.gradientMap,et=!!S.alphaMap,Et=S.alphaTest>0,yt=!!S.alphaHash,Yt=!!S.extensions;let xe=Gn;S.toneMapped&&(ut===null||ut.isXRRenderTarget===!0)&&(xe=i.toneMapping);const Ue={shaderID:it,shaderType:S.type,shaderName:S.name,vertexShader:Ct,fragmentShader:j,defines:S.defines,customVertexShaderID:rt,customFragmentShaderID:_t,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:f,batching:Ot,batchingColor:Ot&&N._colorsTexture!==null,instancing:zt,instancingColor:zt&&N.instanceColor!==null,instancingMorph:zt&&N.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:ut===null?i.outputColorSpace:ut.isXRRenderTarget===!0?ut.texture.colorSpace:Yi,alphaToCoverage:!!S.alphaToCoverage,map:Xt,matcap:U,envMap:O,envMapMode:O&&K.mapping,envMapCubeUVHeight:X,aoMap:b,lightMap:ct,bumpMap:Z,normalMap:ot,displacementMap:d&&st,emissiveMap:Rt,normalMapObjectSpace:ot&&S.normalMapType===Su,normalMapTangentSpace:ot&&S.normalMapType===Ga,metalnessMap:ft,roughnessMap:A,anisotropy:y,anisotropyMap:gt,clearcoat:V,clearcoatMap:Tt,clearcoatNormalMap:jt,clearcoatRoughnessMap:at,dispersion:Q,iridescence:nt,iridescenceMap:bt,iridescenceThicknessMap:kt,sheen:tt,sheenColorMap:Ht,sheenRoughnessMap:At,specularMap:Qt,specularColorMap:Kt,specularIntensityMap:ue,transmission:Pt,transmissionMap:z,thicknessMap:vt,gradientMap:J,opaque:S.transparent===!1&&S.blending===Ui&&S.alphaToCoverage===!1,alphaMap:et,alphaTest:Et,alphaHash:yt,combine:S.combine,mapUv:Xt&&_(S.map.channel),aoMapUv:b&&_(S.aoMap.channel),lightMapUv:ct&&_(S.lightMap.channel),bumpMapUv:Z&&_(S.bumpMap.channel),normalMapUv:ot&&_(S.normalMap.channel),displacementMapUv:st&&_(S.displacementMap.channel),emissiveMapUv:Rt&&_(S.emissiveMap.channel),metalnessMapUv:ft&&_(S.metalnessMap.channel),roughnessMapUv:A&&_(S.roughnessMap.channel),anisotropyMapUv:gt&&_(S.anisotropyMap.channel),clearcoatMapUv:Tt&&_(S.clearcoatMap.channel),clearcoatNormalMapUv:jt&&_(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:at&&_(S.clearcoatRoughnessMap.channel),iridescenceMapUv:bt&&_(S.iridescenceMap.channel),iridescenceThicknessMapUv:kt&&_(S.iridescenceThicknessMap.channel),sheenColorMapUv:Ht&&_(S.sheenColorMap.channel),sheenRoughnessMapUv:At&&_(S.sheenRoughnessMap.channel),specularMapUv:Qt&&_(S.specularMap.channel),specularColorMapUv:Kt&&_(S.specularColorMap.channel),specularIntensityMapUv:ue&&_(S.specularIntensityMap.channel),transmissionMapUv:z&&_(S.transmissionMap.channel),thicknessMapUv:vt&&_(S.thicknessMap.channel),alphaMapUv:et&&_(S.alphaMap.channel),vertexTangents:!!$.attributes.tangent&&(ot||y),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,pointsUvs:N.isPoints===!0&&!!$.attributes.uv&&(Xt||et),fog:!!F,useFog:S.fog===!0,fogExp2:!!F&&F.isFogExp2,flatShading:S.flatShading===!0,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:Ut,skinning:N.isSkinnedMesh===!0,morphTargets:$.morphAttributes.position!==void 0,morphNormals:$.morphAttributes.normal!==void 0,morphColors:$.morphAttributes.color!==void 0,morphTargetsCount:pt,morphTextureStride:wt,numDirLights:x.directional.length,numPointLights:x.point.length,numSpotLights:x.spot.length,numSpotLightMaps:x.spotLightMap.length,numRectAreaLights:x.rectArea.length,numHemiLights:x.hemi.length,numDirLightShadows:x.directionalShadowMap.length,numPointLightShadows:x.pointShadowMap.length,numSpotLightShadows:x.spotShadowMap.length,numSpotLightShadowsWithMaps:x.numSpotLightShadowsWithMaps,numLightProbes:x.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:S.dithering,shadowMapEnabled:i.shadowMap.enabled&&C.length>0,shadowMapType:i.shadowMap.type,toneMapping:xe,decodeVideoTexture:Xt&&S.map.isVideoTexture===!0&&te.getTransfer(S.map.colorSpace)===ae,decodeVideoTextureEmissive:Rt&&S.emissiveMap.isVideoTexture===!0&&te.getTransfer(S.emissiveMap.colorSpace)===ae,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===Te,flipSided:S.side===De,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:Yt&&S.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Yt&&S.extensions.multiDraw===!0||Ot)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return Ue.vertexUv1s=l.has(1),Ue.vertexUv2s=l.has(2),Ue.vertexUv3s=l.has(3),l.clear(),Ue}function p(S){const x=[];if(S.shaderID?x.push(S.shaderID):(x.push(S.customVertexShaderID),x.push(S.customFragmentShaderID)),S.defines!==void 0)for(const C in S.defines)x.push(C),x.push(S.defines[C]);return S.isRawShaderMaterial===!1&&(w(x,S),M(x,S),x.push(i.outputColorSpace)),x.push(S.customProgramCacheKey),x.join()}function w(S,x){S.push(x.precision),S.push(x.outputColorSpace),S.push(x.envMapMode),S.push(x.envMapCubeUVHeight),S.push(x.mapUv),S.push(x.alphaMapUv),S.push(x.lightMapUv),S.push(x.aoMapUv),S.push(x.bumpMapUv),S.push(x.normalMapUv),S.push(x.displacementMapUv),S.push(x.emissiveMapUv),S.push(x.metalnessMapUv),S.push(x.roughnessMapUv),S.push(x.anisotropyMapUv),S.push(x.clearcoatMapUv),S.push(x.clearcoatNormalMapUv),S.push(x.clearcoatRoughnessMapUv),S.push(x.iridescenceMapUv),S.push(x.iridescenceThicknessMapUv),S.push(x.sheenColorMapUv),S.push(x.sheenRoughnessMapUv),S.push(x.specularMapUv),S.push(x.specularColorMapUv),S.push(x.specularIntensityMapUv),S.push(x.transmissionMapUv),S.push(x.thicknessMapUv),S.push(x.combine),S.push(x.fogExp2),S.push(x.sizeAttenuation),S.push(x.morphTargetsCount),S.push(x.morphAttributeCount),S.push(x.numDirLights),S.push(x.numPointLights),S.push(x.numSpotLights),S.push(x.numSpotLightMaps),S.push(x.numHemiLights),S.push(x.numRectAreaLights),S.push(x.numDirLightShadows),S.push(x.numPointLightShadows),S.push(x.numSpotLightShadows),S.push(x.numSpotLightShadowsWithMaps),S.push(x.numLightProbes),S.push(x.shadowMapType),S.push(x.toneMapping),S.push(x.numClippingPlanes),S.push(x.numClipIntersection),S.push(x.depthPacking)}function M(S,x){a.disableAll(),x.supportsVertexTextures&&a.enable(0),x.instancing&&a.enable(1),x.instancingColor&&a.enable(2),x.instancingMorph&&a.enable(3),x.matcap&&a.enable(4),x.envMap&&a.enable(5),x.normalMapObjectSpace&&a.enable(6),x.normalMapTangentSpace&&a.enable(7),x.clearcoat&&a.enable(8),x.iridescence&&a.enable(9),x.alphaTest&&a.enable(10),x.vertexColors&&a.enable(11),x.vertexAlphas&&a.enable(12),x.vertexUv1s&&a.enable(13),x.vertexUv2s&&a.enable(14),x.vertexUv3s&&a.enable(15),x.vertexTangents&&a.enable(16),x.anisotropy&&a.enable(17),x.alphaHash&&a.enable(18),x.batching&&a.enable(19),x.dispersion&&a.enable(20),x.batchingColor&&a.enable(21),S.push(a.mask),a.disableAll(),x.fog&&a.enable(0),x.useFog&&a.enable(1),x.flatShading&&a.enable(2),x.logarithmicDepthBuffer&&a.enable(3),x.reverseDepthBuffer&&a.enable(4),x.skinning&&a.enable(5),x.morphTargets&&a.enable(6),x.morphNormals&&a.enable(7),x.morphColors&&a.enable(8),x.premultipliedAlpha&&a.enable(9),x.shadowMapEnabled&&a.enable(10),x.doubleSided&&a.enable(11),x.flipSided&&a.enable(12),x.useDepthPacking&&a.enable(13),x.dithering&&a.enable(14),x.transmission&&a.enable(15),x.sheen&&a.enable(16),x.opaque&&a.enable(17),x.pointsUvs&&a.enable(18),x.decodeVideoTexture&&a.enable(19),x.decodeVideoTextureEmissive&&a.enable(20),x.alphaToCoverage&&a.enable(21),S.push(a.mask)}function v(S){const x=g[S.type];let C;if(x){const H=dn[x];C=ju.clone(H.uniforms)}else C=S.uniforms;return C}function D(S,x){let C;for(let H=0,N=h.length;H<N;H++){const F=h[H];if(F.cacheKey===x){C=F,++C.usedTimes;break}}return C===void 0&&(C=new dm(i,x,S,r),h.push(C)),C}function T(S){if(--S.usedTimes===0){const x=h.indexOf(S);h[x]=h[h.length-1],h.pop(),S.destroy()}}function R(S){c.remove(S)}function P(){c.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:v,acquireProgram:D,releaseProgram:T,releaseShaderCache:R,programs:h,dispose:P}}function _m(){let i=new WeakMap;function t(o){return i.has(o)}function e(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,c){i.get(o)[a]=c}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function vm(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function rl(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function ol(){const i=[];let t=0;const e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function o(u,d,f,g,_,m){let p=i[t];return p===void 0?(p={id:u.id,object:u,geometry:d,material:f,groupOrder:g,renderOrder:u.renderOrder,z:_,group:m},i[t]=p):(p.id=u.id,p.object=u,p.geometry=d,p.material=f,p.groupOrder=g,p.renderOrder=u.renderOrder,p.z=_,p.group=m),t++,p}function a(u,d,f,g,_,m){const p=o(u,d,f,g,_,m);f.transmission>0?n.push(p):f.transparent===!0?s.push(p):e.push(p)}function c(u,d,f,g,_,m){const p=o(u,d,f,g,_,m);f.transmission>0?n.unshift(p):f.transparent===!0?s.unshift(p):e.unshift(p)}function l(u,d){e.length>1&&e.sort(u||vm),n.length>1&&n.sort(d||rl),s.length>1&&s.sort(d||rl)}function h(){for(let u=t,d=i.length;u<d;u++){const f=i[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:a,unshift:c,finish:h,sort:l}}function xm(){let i=new WeakMap;function t(n,s){const r=i.get(n);let o;return r===void 0?(o=new ol,i.set(n,[o])):s>=r.length?(o=new ol,r.push(o)):o=r[s],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function Mm(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new L,color:new Mt};break;case"SpotLight":e={position:new L,direction:new L,color:new Mt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new L,color:new Mt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new L,skyColor:new Mt,groundColor:new Mt};break;case"RectAreaLight":e={color:new Mt,position:new L,halfWidth:new L,halfHeight:new L};break}return i[t.id]=e,e}}}function ym(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new lt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new lt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new lt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let Sm=0;function wm(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function Em(i){const t=new Mm,e=ym(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new L);const s=new L,r=new oe,o=new oe;function a(l){let h=0,u=0,d=0;for(let S=0;S<9;S++)n.probe[S].set(0,0,0);let f=0,g=0,_=0,m=0,p=0,w=0,M=0,v=0,D=0,T=0,R=0;l.sort(wm);for(let S=0,x=l.length;S<x;S++){const C=l[S],H=C.color,N=C.intensity,F=C.distance,$=C.shadow&&C.shadow.map?C.shadow.map.texture:null;if(C.isAmbientLight)h+=H.r*N,u+=H.g*N,d+=H.b*N;else if(C.isLightProbe){for(let G=0;G<9;G++)n.probe[G].addScaledVector(C.sh.coefficients[G],N);R++}else if(C.isDirectionalLight){const G=t.get(C);if(G.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){const K=C.shadow,X=e.get(C);X.shadowIntensity=K.intensity,X.shadowBias=K.bias,X.shadowNormalBias=K.normalBias,X.shadowRadius=K.radius,X.shadowMapSize=K.mapSize,n.directionalShadow[f]=X,n.directionalShadowMap[f]=$,n.directionalShadowMatrix[f]=C.shadow.matrix,w++}n.directional[f]=G,f++}else if(C.isSpotLight){const G=t.get(C);G.position.setFromMatrixPosition(C.matrixWorld),G.color.copy(H).multiplyScalar(N),G.distance=F,G.coneCos=Math.cos(C.angle),G.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),G.decay=C.decay,n.spot[_]=G;const K=C.shadow;if(C.map&&(n.spotLightMap[D]=C.map,D++,K.updateMatrices(C),C.castShadow&&T++),n.spotLightMatrix[_]=K.matrix,C.castShadow){const X=e.get(C);X.shadowIntensity=K.intensity,X.shadowBias=K.bias,X.shadowNormalBias=K.normalBias,X.shadowRadius=K.radius,X.shadowMapSize=K.mapSize,n.spotShadow[_]=X,n.spotShadowMap[_]=$,v++}_++}else if(C.isRectAreaLight){const G=t.get(C);G.color.copy(H).multiplyScalar(N),G.halfWidth.set(C.width*.5,0,0),G.halfHeight.set(0,C.height*.5,0),n.rectArea[m]=G,m++}else if(C.isPointLight){const G=t.get(C);if(G.color.copy(C.color).multiplyScalar(C.intensity),G.distance=C.distance,G.decay=C.decay,C.castShadow){const K=C.shadow,X=e.get(C);X.shadowIntensity=K.intensity,X.shadowBias=K.bias,X.shadowNormalBias=K.normalBias,X.shadowRadius=K.radius,X.shadowMapSize=K.mapSize,X.shadowCameraNear=K.camera.near,X.shadowCameraFar=K.camera.far,n.pointShadow[g]=X,n.pointShadowMap[g]=$,n.pointShadowMatrix[g]=C.shadow.matrix,M++}n.point[g]=G,g++}else if(C.isHemisphereLight){const G=t.get(C);G.skyColor.copy(C.color).multiplyScalar(N),G.groundColor.copy(C.groundColor).multiplyScalar(N),n.hemi[p]=G,p++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=mt.LTC_FLOAT_1,n.rectAreaLTC2=mt.LTC_FLOAT_2):(n.rectAreaLTC1=mt.LTC_HALF_1,n.rectAreaLTC2=mt.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;const P=n.hash;(P.directionalLength!==f||P.pointLength!==g||P.spotLength!==_||P.rectAreaLength!==m||P.hemiLength!==p||P.numDirectionalShadows!==w||P.numPointShadows!==M||P.numSpotShadows!==v||P.numSpotMaps!==D||P.numLightProbes!==R)&&(n.directional.length=f,n.spot.length=_,n.rectArea.length=m,n.point.length=g,n.hemi.length=p,n.directionalShadow.length=w,n.directionalShadowMap.length=w,n.pointShadow.length=M,n.pointShadowMap.length=M,n.spotShadow.length=v,n.spotShadowMap.length=v,n.directionalShadowMatrix.length=w,n.pointShadowMatrix.length=M,n.spotLightMatrix.length=v+D-T,n.spotLightMap.length=D,n.numSpotLightShadowsWithMaps=T,n.numLightProbes=R,P.directionalLength=f,P.pointLength=g,P.spotLength=_,P.rectAreaLength=m,P.hemiLength=p,P.numDirectionalShadows=w,P.numPointShadows=M,P.numSpotShadows=v,P.numSpotMaps=D,P.numLightProbes=R,n.version=Sm++)}function c(l,h){let u=0,d=0,f=0,g=0,_=0;const m=h.matrixWorldInverse;for(let p=0,w=l.length;p<w;p++){const M=l[p];if(M.isDirectionalLight){const v=n.directional[u];v.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(m),u++}else if(M.isSpotLight){const v=n.spot[f];v.position.setFromMatrixPosition(M.matrixWorld),v.position.applyMatrix4(m),v.direction.setFromMatrixPosition(M.matrixWorld),s.setFromMatrixPosition(M.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(m),f++}else if(M.isRectAreaLight){const v=n.rectArea[g];v.position.setFromMatrixPosition(M.matrixWorld),v.position.applyMatrix4(m),o.identity(),r.copy(M.matrixWorld),r.premultiply(m),o.extractRotation(r),v.halfWidth.set(M.width*.5,0,0),v.halfHeight.set(0,M.height*.5,0),v.halfWidth.applyMatrix4(o),v.halfHeight.applyMatrix4(o),g++}else if(M.isPointLight){const v=n.point[d];v.position.setFromMatrixPosition(M.matrixWorld),v.position.applyMatrix4(m),d++}else if(M.isHemisphereLight){const v=n.hemi[_];v.direction.setFromMatrixPosition(M.matrixWorld),v.direction.transformDirection(m),_++}}}return{setup:a,setupView:c,state:n}}function al(i){const t=new Em(i),e=[],n=[];function s(h){l.camera=h,e.length=0,n.length=0}function r(h){e.push(h)}function o(h){n.push(h)}function a(){t.setup(e)}function c(h){t.setupView(e,h)}const l={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:l,setupLights:a,setupLightsView:c,pushLight:r,pushShadow:o}}function Tm(i){let t=new WeakMap;function e(s,r=0){const o=t.get(s);let a;return o===void 0?(a=new al(i),t.set(s,[a])):r>=o.length?(a=new al(i),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}class bm extends mi{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=Mu,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Am extends mi{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const Rm=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Cm=`uniform sampler2D shadow_pass;
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
}`;function Pm(i,t,e){let n=new Xa;const s=new lt,r=new lt,o=new ce,a=new bm({depthPacking:yu}),c=new Am,l={},h=e.maxTextureSize,u={[Vn]:De,[De]:Vn,[Te]:Te},d=new Wn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new lt},radius:{value:4}},vertexShader:Rm,fragmentShader:Cm}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const g=new Pe;g.setAttribute("position",new je(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new I(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Hl;let p=this.type;this.render=function(T,R,P){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||T.length===0)return;const S=i.getRenderTarget(),x=i.getActiveCubeFace(),C=i.getActiveMipmapLevel(),H=i.state;H.setBlending(Hn),H.buffers.color.setClear(1,1,1,1),H.buffers.depth.setTest(!0),H.setScissorTest(!1);const N=p!==En&&this.type===En,F=p===En&&this.type!==En;for(let $=0,G=T.length;$<G;$++){const K=T[$],X=K.shadow;if(X===void 0){console.warn("THREE.WebGLShadowMap:",K,"has no shadow.");continue}if(X.autoUpdate===!1&&X.needsUpdate===!1)continue;s.copy(X.mapSize);const it=X.getFrameExtents();if(s.multiply(it),r.copy(X.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/it.x),s.x=r.x*it.x,X.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/it.y),s.y=r.y*it.y,X.mapSize.y=r.y)),X.map===null||N===!0||F===!0){const pt=this.type!==En?{minFilter:Je,magFilter:Je}:{};X.map!==null&&X.map.dispose(),X.map=new ui(s.x,s.y,pt),X.map.texture.name=K.name+".shadowMap",X.camera.updateProjectionMatrix()}i.setRenderTarget(X.map),i.clear();const ht=X.getViewportCount();for(let pt=0;pt<ht;pt++){const wt=X.getViewport(pt);o.set(r.x*wt.x,r.y*wt.y,r.x*wt.z,r.y*wt.w),H.viewport(o),X.updateMatrices(K,pt),n=X.getFrustum(),v(R,P,X.camera,K,this.type)}X.isPointLightShadow!==!0&&this.type===En&&w(X,P),X.needsUpdate=!1}p=this.type,m.needsUpdate=!1,i.setRenderTarget(S,x,C)};function w(T,R){const P=t.update(_);d.defines.VSM_SAMPLES!==T.blurSamples&&(d.defines.VSM_SAMPLES=T.blurSamples,f.defines.VSM_SAMPLES=T.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new ui(s.x,s.y)),d.uniforms.shadow_pass.value=T.map.texture,d.uniforms.resolution.value=T.mapSize,d.uniforms.radius.value=T.radius,i.setRenderTarget(T.mapPass),i.clear(),i.renderBufferDirect(R,null,P,d,_,null),f.uniforms.shadow_pass.value=T.mapPass.texture,f.uniforms.resolution.value=T.mapSize,f.uniforms.radius.value=T.radius,i.setRenderTarget(T.map),i.clear(),i.renderBufferDirect(R,null,P,f,_,null)}function M(T,R,P,S){let x=null;const C=P.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(C!==void 0)x=C;else if(x=P.isPointLight===!0?c:a,i.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0){const H=x.uuid,N=R.uuid;let F=l[H];F===void 0&&(F={},l[H]=F);let $=F[N];$===void 0&&($=x.clone(),F[N]=$,R.addEventListener("dispose",D)),x=$}if(x.visible=R.visible,x.wireframe=R.wireframe,S===En?x.side=R.shadowSide!==null?R.shadowSide:R.side:x.side=R.shadowSide!==null?R.shadowSide:u[R.side],x.alphaMap=R.alphaMap,x.alphaTest=R.alphaTest,x.map=R.map,x.clipShadows=R.clipShadows,x.clippingPlanes=R.clippingPlanes,x.clipIntersection=R.clipIntersection,x.displacementMap=R.displacementMap,x.displacementScale=R.displacementScale,x.displacementBias=R.displacementBias,x.wireframeLinewidth=R.wireframeLinewidth,x.linewidth=R.linewidth,P.isPointLight===!0&&x.isMeshDistanceMaterial===!0){const H=i.properties.get(x);H.light=P}return x}function v(T,R,P,S,x){if(T.visible===!1)return;if(T.layers.test(R.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&x===En)&&(!T.frustumCulled||n.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,T.matrixWorld);const N=t.update(T),F=T.material;if(Array.isArray(F)){const $=N.groups;for(let G=0,K=$.length;G<K;G++){const X=$[G],it=F[X.materialIndex];if(it&&it.visible){const ht=M(T,it,S,x);T.onBeforeShadow(i,T,R,P,N,ht,X),i.renderBufferDirect(P,null,N,ht,T,X),T.onAfterShadow(i,T,R,P,N,ht,X)}}}else if(F.visible){const $=M(T,F,S,x);T.onBeforeShadow(i,T,R,P,N,$,null),i.renderBufferDirect(P,null,N,$,T,null),T.onAfterShadow(i,T,R,P,N,$,null)}}const H=T.children;for(let N=0,F=H.length;N<F;N++)v(H[N],R,P,S,x)}function D(T){T.target.removeEventListener("dispose",D);for(const P in l){const S=l[P],x=T.target.uuid;x in S&&(S[x].dispose(),delete S[x])}}}const Lm={[Oo]:zo,[Bo]:Go,[ko]:Vo,[Bi]:Ho,[zo]:Oo,[Go]:Bo,[Vo]:ko,[Ho]:Bi};function Im(i,t){function e(){let z=!1;const vt=new ce;let J=null;const et=new ce(0,0,0,0);return{setMask:function(Et){J!==Et&&!z&&(i.colorMask(Et,Et,Et,Et),J=Et)},setLocked:function(Et){z=Et},setClear:function(Et,yt,Yt,xe,Ue){Ue===!0&&(Et*=xe,yt*=xe,Yt*=xe),vt.set(Et,yt,Yt,xe),et.equals(vt)===!1&&(i.clearColor(Et,yt,Yt,xe),et.copy(vt))},reset:function(){z=!1,J=null,et.set(-1,0,0,0)}}}function n(){let z=!1,vt=!1,J=null,et=null,Et=null;return{setReversed:function(yt){if(vt!==yt){const Yt=t.get("EXT_clip_control");vt?Yt.clipControlEXT(Yt.LOWER_LEFT_EXT,Yt.ZERO_TO_ONE_EXT):Yt.clipControlEXT(Yt.LOWER_LEFT_EXT,Yt.NEGATIVE_ONE_TO_ONE_EXT);const xe=Et;Et=null,this.setClear(xe)}vt=yt},getReversed:function(){return vt},setTest:function(yt){yt?ut(i.DEPTH_TEST):Ut(i.DEPTH_TEST)},setMask:function(yt){J!==yt&&!z&&(i.depthMask(yt),J=yt)},setFunc:function(yt){if(vt&&(yt=Lm[yt]),et!==yt){switch(yt){case Oo:i.depthFunc(i.NEVER);break;case zo:i.depthFunc(i.ALWAYS);break;case Bo:i.depthFunc(i.LESS);break;case Bi:i.depthFunc(i.LEQUAL);break;case ko:i.depthFunc(i.EQUAL);break;case Ho:i.depthFunc(i.GEQUAL);break;case Go:i.depthFunc(i.GREATER);break;case Vo:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}et=yt}},setLocked:function(yt){z=yt},setClear:function(yt){Et!==yt&&(vt&&(yt=1-yt),i.clearDepth(yt),Et=yt)},reset:function(){z=!1,J=null,et=null,Et=null,vt=!1}}}function s(){let z=!1,vt=null,J=null,et=null,Et=null,yt=null,Yt=null,xe=null,Ue=null;return{setTest:function(re){z||(re?ut(i.STENCIL_TEST):Ut(i.STENCIL_TEST))},setMask:function(re){vt!==re&&!z&&(i.stencilMask(re),vt=re)},setFunc:function(re,en,_n){(J!==re||et!==en||Et!==_n)&&(i.stencilFunc(re,en,_n),J=re,et=en,Et=_n)},setOp:function(re,en,_n){(yt!==re||Yt!==en||xe!==_n)&&(i.stencilOp(re,en,_n),yt=re,Yt=en,xe=_n)},setLocked:function(re){z=re},setClear:function(re){Ue!==re&&(i.clearStencil(re),Ue=re)},reset:function(){z=!1,vt=null,J=null,et=null,Et=null,yt=null,Yt=null,xe=null,Ue=null}}}const r=new e,o=new n,a=new s,c=new WeakMap,l=new WeakMap;let h={},u={},d=new WeakMap,f=[],g=null,_=!1,m=null,p=null,w=null,M=null,v=null,D=null,T=null,R=new Mt(0,0,0),P=0,S=!1,x=null,C=null,H=null,N=null,F=null;const $=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let G=!1,K=0;const X=i.getParameter(i.VERSION);X.indexOf("WebGL")!==-1?(K=parseFloat(/^WebGL (\d)/.exec(X)[1]),G=K>=1):X.indexOf("OpenGL ES")!==-1&&(K=parseFloat(/^OpenGL ES (\d)/.exec(X)[1]),G=K>=2);let it=null,ht={};const pt=i.getParameter(i.SCISSOR_BOX),wt=i.getParameter(i.VIEWPORT),Ct=new ce().fromArray(pt),j=new ce().fromArray(wt);function rt(z,vt,J,et){const Et=new Uint8Array(4),yt=i.createTexture();i.bindTexture(z,yt),i.texParameteri(z,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(z,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Yt=0;Yt<J;Yt++)z===i.TEXTURE_3D||z===i.TEXTURE_2D_ARRAY?i.texImage3D(vt,0,i.RGBA,1,1,et,0,i.RGBA,i.UNSIGNED_BYTE,Et):i.texImage2D(vt+Yt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Et);return yt}const _t={};_t[i.TEXTURE_2D]=rt(i.TEXTURE_2D,i.TEXTURE_2D,1),_t[i.TEXTURE_CUBE_MAP]=rt(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),_t[i.TEXTURE_2D_ARRAY]=rt(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),_t[i.TEXTURE_3D]=rt(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),ut(i.DEPTH_TEST),o.setFunc(Bi),Z(!1),ot(dc),ut(i.CULL_FACE),b(Hn);function ut(z){h[z]!==!0&&(i.enable(z),h[z]=!0)}function Ut(z){h[z]!==!1&&(i.disable(z),h[z]=!1)}function zt(z,vt){return u[z]!==vt?(i.bindFramebuffer(z,vt),u[z]=vt,z===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=vt),z===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=vt),!0):!1}function Ot(z,vt){let J=f,et=!1;if(z){J=d.get(vt),J===void 0&&(J=[],d.set(vt,J));const Et=z.textures;if(J.length!==Et.length||J[0]!==i.COLOR_ATTACHMENT0){for(let yt=0,Yt=Et.length;yt<Yt;yt++)J[yt]=i.COLOR_ATTACHMENT0+yt;J.length=Et.length,et=!0}}else J[0]!==i.BACK&&(J[0]=i.BACK,et=!0);et&&i.drawBuffers(J)}function Xt(z){return g!==z?(i.useProgram(z),g=z,!0):!1}const U={[si]:i.FUNC_ADD,[$h]:i.FUNC_SUBTRACT,[Kh]:i.FUNC_REVERSE_SUBTRACT};U[Zh]=i.MIN,U[Jh]=i.MAX;const O={[jh]:i.ZERO,[Qh]:i.ONE,[tu]:i.SRC_COLOR,[No]:i.SRC_ALPHA,[ou]:i.SRC_ALPHA_SATURATE,[su]:i.DST_COLOR,[nu]:i.DST_ALPHA,[eu]:i.ONE_MINUS_SRC_COLOR,[Fo]:i.ONE_MINUS_SRC_ALPHA,[ru]:i.ONE_MINUS_DST_COLOR,[iu]:i.ONE_MINUS_DST_ALPHA,[au]:i.CONSTANT_COLOR,[cu]:i.ONE_MINUS_CONSTANT_COLOR,[lu]:i.CONSTANT_ALPHA,[hu]:i.ONE_MINUS_CONSTANT_ALPHA};function b(z,vt,J,et,Et,yt,Yt,xe,Ue,re){if(z===Hn){_===!0&&(Ut(i.BLEND),_=!1);return}if(_===!1&&(ut(i.BLEND),_=!0),z!==qh){if(z!==m||re!==S){if((p!==si||v!==si)&&(i.blendEquation(i.FUNC_ADD),p=si,v=si),re)switch(z){case Ui:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case fc:i.blendFunc(i.ONE,i.ONE);break;case pc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case mc:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",z);break}else switch(z){case Ui:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case fc:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case pc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case mc:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",z);break}w=null,M=null,D=null,T=null,R.set(0,0,0),P=0,m=z,S=re}return}Et=Et||vt,yt=yt||J,Yt=Yt||et,(vt!==p||Et!==v)&&(i.blendEquationSeparate(U[vt],U[Et]),p=vt,v=Et),(J!==w||et!==M||yt!==D||Yt!==T)&&(i.blendFuncSeparate(O[J],O[et],O[yt],O[Yt]),w=J,M=et,D=yt,T=Yt),(xe.equals(R)===!1||Ue!==P)&&(i.blendColor(xe.r,xe.g,xe.b,Ue),R.copy(xe),P=Ue),m=z,S=!1}function ct(z,vt){z.side===Te?Ut(i.CULL_FACE):ut(i.CULL_FACE);let J=z.side===De;vt&&(J=!J),Z(J),z.blending===Ui&&z.transparent===!1?b(Hn):b(z.blending,z.blendEquation,z.blendSrc,z.blendDst,z.blendEquationAlpha,z.blendSrcAlpha,z.blendDstAlpha,z.blendColor,z.blendAlpha,z.premultipliedAlpha),o.setFunc(z.depthFunc),o.setTest(z.depthTest),o.setMask(z.depthWrite),r.setMask(z.colorWrite);const et=z.stencilWrite;a.setTest(et),et&&(a.setMask(z.stencilWriteMask),a.setFunc(z.stencilFunc,z.stencilRef,z.stencilFuncMask),a.setOp(z.stencilFail,z.stencilZFail,z.stencilZPass)),Rt(z.polygonOffset,z.polygonOffsetFactor,z.polygonOffsetUnits),z.alphaToCoverage===!0?ut(i.SAMPLE_ALPHA_TO_COVERAGE):Ut(i.SAMPLE_ALPHA_TO_COVERAGE)}function Z(z){x!==z&&(z?i.frontFace(i.CW):i.frontFace(i.CCW),x=z)}function ot(z){z!==Xh?(ut(i.CULL_FACE),z!==C&&(z===dc?i.cullFace(i.BACK):z===Yh?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Ut(i.CULL_FACE),C=z}function st(z){z!==H&&(G&&i.lineWidth(z),H=z)}function Rt(z,vt,J){z?(ut(i.POLYGON_OFFSET_FILL),(N!==vt||F!==J)&&(i.polygonOffset(vt,J),N=vt,F=J)):Ut(i.POLYGON_OFFSET_FILL)}function ft(z){z?ut(i.SCISSOR_TEST):Ut(i.SCISSOR_TEST)}function A(z){z===void 0&&(z=i.TEXTURE0+$-1),it!==z&&(i.activeTexture(z),it=z)}function y(z,vt,J){J===void 0&&(it===null?J=i.TEXTURE0+$-1:J=it);let et=ht[J];et===void 0&&(et={type:void 0,texture:void 0},ht[J]=et),(et.type!==z||et.texture!==vt)&&(it!==J&&(i.activeTexture(J),it=J),i.bindTexture(z,vt||_t[z]),et.type=z,et.texture=vt)}function V(){const z=ht[it];z!==void 0&&z.type!==void 0&&(i.bindTexture(z.type,null),z.type=void 0,z.texture=void 0)}function Q(){try{i.compressedTexImage2D.apply(i,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function nt(){try{i.compressedTexImage3D.apply(i,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function tt(){try{i.texSubImage2D.apply(i,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Pt(){try{i.texSubImage3D.apply(i,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function gt(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Tt(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function jt(){try{i.texStorage2D.apply(i,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function at(){try{i.texStorage3D.apply(i,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function bt(){try{i.texImage2D.apply(i,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function kt(){try{i.texImage3D.apply(i,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Ht(z){Ct.equals(z)===!1&&(i.scissor(z.x,z.y,z.z,z.w),Ct.copy(z))}function At(z){j.equals(z)===!1&&(i.viewport(z.x,z.y,z.z,z.w),j.copy(z))}function Qt(z,vt){let J=l.get(vt);J===void 0&&(J=new WeakMap,l.set(vt,J));let et=J.get(z);et===void 0&&(et=i.getUniformBlockIndex(vt,z.name),J.set(z,et))}function Kt(z,vt){const et=l.get(vt).get(z);c.get(vt)!==et&&(i.uniformBlockBinding(vt,et,z.__bindingPointIndex),c.set(vt,et))}function ue(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},it=null,ht={},u={},d=new WeakMap,f=[],g=null,_=!1,m=null,p=null,w=null,M=null,v=null,D=null,T=null,R=new Mt(0,0,0),P=0,S=!1,x=null,C=null,H=null,N=null,F=null,Ct.set(0,0,i.canvas.width,i.canvas.height),j.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:ut,disable:Ut,bindFramebuffer:zt,drawBuffers:Ot,useProgram:Xt,setBlending:b,setMaterial:ct,setFlipSided:Z,setCullFace:ot,setLineWidth:st,setPolygonOffset:Rt,setScissorTest:ft,activeTexture:A,bindTexture:y,unbindTexture:V,compressedTexImage2D:Q,compressedTexImage3D:nt,texImage2D:bt,texImage3D:kt,updateUBOMapping:Qt,uniformBlockBinding:Kt,texStorage2D:jt,texStorage3D:at,texSubImage2D:tt,texSubImage3D:Pt,compressedTexSubImage2D:gt,compressedTexSubImage3D:Tt,scissor:Ht,viewport:At,reset:ue}}function cl(i,t,e,n){const s=Dm(n);switch(e){case $l:return i*t;case Zl:return i*t;case Jl:return i*t*2;case za:return i*t/s.components*s.byteLength;case Ba:return i*t/s.components*s.byteLength;case jl:return i*t*2/s.components*s.byteLength;case ka:return i*t*2/s.components*s.byteLength;case Kl:return i*t*3/s.components*s.byteLength;case ln:return i*t*4/s.components*s.byteLength;case Ha:return i*t*4/s.components*s.byteLength;case lr:case hr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case ur:case dr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case $o:case Zo:return Math.max(i,16)*Math.max(t,8)/4;case qo:case Ko:return Math.max(i,8)*Math.max(t,8)/2;case Jo:case jo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Qo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case ta:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case ea:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case na:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case ia:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case sa:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case ra:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case oa:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case aa:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case ca:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case la:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case ha:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case ua:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case da:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case fa:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case fr:case pa:case ma:return Math.ceil(i/4)*Math.ceil(t/4)*16;case Ql:case ga:return Math.ceil(i/4)*Math.ceil(t/4)*8;case _a:case va:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Dm(i){switch(i){case Rn:case Xl:return{byteLength:1,components:1};case ys:case Yl:case bs:return{byteLength:2,components:1};case Fa:case Oa:return{byteLength:2,components:4};case hi:case Na:case mn:return{byteLength:4,components:1};case ql:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function Um(i,t,e,n,s,r,o){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new lt,h=new WeakMap;let u;const d=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(A,y){return f?new OffscreenCanvas(A,y):vr("canvas")}function _(A,y,V){let Q=1;const nt=ft(A);if((nt.width>V||nt.height>V)&&(Q=V/Math.max(nt.width,nt.height)),Q<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){const tt=Math.floor(Q*nt.width),Pt=Math.floor(Q*nt.height);u===void 0&&(u=g(tt,Pt));const gt=y?g(tt,Pt):u;return gt.width=tt,gt.height=Pt,gt.getContext("2d").drawImage(A,0,0,tt,Pt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+nt.width+"x"+nt.height+") to ("+tt+"x"+Pt+")."),gt}else return"data"in A&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+nt.width+"x"+nt.height+")."),A;return A}function m(A){return A.generateMipmaps}function p(A){i.generateMipmap(A)}function w(A){return A.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:A.isWebGL3DRenderTarget?i.TEXTURE_3D:A.isWebGLArrayRenderTarget||A.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function M(A,y,V,Q,nt=!1){if(A!==null){if(i[A]!==void 0)return i[A];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let tt=y;if(y===i.RED&&(V===i.FLOAT&&(tt=i.R32F),V===i.HALF_FLOAT&&(tt=i.R16F),V===i.UNSIGNED_BYTE&&(tt=i.R8)),y===i.RED_INTEGER&&(V===i.UNSIGNED_BYTE&&(tt=i.R8UI),V===i.UNSIGNED_SHORT&&(tt=i.R16UI),V===i.UNSIGNED_INT&&(tt=i.R32UI),V===i.BYTE&&(tt=i.R8I),V===i.SHORT&&(tt=i.R16I),V===i.INT&&(tt=i.R32I)),y===i.RG&&(V===i.FLOAT&&(tt=i.RG32F),V===i.HALF_FLOAT&&(tt=i.RG16F),V===i.UNSIGNED_BYTE&&(tt=i.RG8)),y===i.RG_INTEGER&&(V===i.UNSIGNED_BYTE&&(tt=i.RG8UI),V===i.UNSIGNED_SHORT&&(tt=i.RG16UI),V===i.UNSIGNED_INT&&(tt=i.RG32UI),V===i.BYTE&&(tt=i.RG8I),V===i.SHORT&&(tt=i.RG16I),V===i.INT&&(tt=i.RG32I)),y===i.RGB_INTEGER&&(V===i.UNSIGNED_BYTE&&(tt=i.RGB8UI),V===i.UNSIGNED_SHORT&&(tt=i.RGB16UI),V===i.UNSIGNED_INT&&(tt=i.RGB32UI),V===i.BYTE&&(tt=i.RGB8I),V===i.SHORT&&(tt=i.RGB16I),V===i.INT&&(tt=i.RGB32I)),y===i.RGBA_INTEGER&&(V===i.UNSIGNED_BYTE&&(tt=i.RGBA8UI),V===i.UNSIGNED_SHORT&&(tt=i.RGBA16UI),V===i.UNSIGNED_INT&&(tt=i.RGBA32UI),V===i.BYTE&&(tt=i.RGBA8I),V===i.SHORT&&(tt=i.RGBA16I),V===i.INT&&(tt=i.RGBA32I)),y===i.RGB&&V===i.UNSIGNED_INT_5_9_9_9_REV&&(tt=i.RGB9_E5),y===i.RGBA){const Pt=nt?Ir:te.getTransfer(Q);V===i.FLOAT&&(tt=i.RGBA32F),V===i.HALF_FLOAT&&(tt=i.RGBA16F),V===i.UNSIGNED_BYTE&&(tt=Pt===ae?i.SRGB8_ALPHA8:i.RGBA8),V===i.UNSIGNED_SHORT_4_4_4_4&&(tt=i.RGBA4),V===i.UNSIGNED_SHORT_5_5_5_1&&(tt=i.RGB5_A1)}return(tt===i.R16F||tt===i.R32F||tt===i.RG16F||tt===i.RG32F||tt===i.RGBA16F||tt===i.RGBA32F)&&t.get("EXT_color_buffer_float"),tt}function v(A,y){let V;return A?y===null||y===hi||y===Vi?V=i.DEPTH24_STENCIL8:y===mn?V=i.DEPTH32F_STENCIL8:y===ys&&(V=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):y===null||y===hi||y===Vi?V=i.DEPTH_COMPONENT24:y===mn?V=i.DEPTH_COMPONENT32F:y===ys&&(V=i.DEPTH_COMPONENT16),V}function D(A,y){return m(A)===!0||A.isFramebufferTexture&&A.minFilter!==Je&&A.minFilter!==pn?Math.log2(Math.max(y.width,y.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?y.mipmaps.length:1}function T(A){const y=A.target;y.removeEventListener("dispose",T),P(y),y.isVideoTexture&&h.delete(y)}function R(A){const y=A.target;y.removeEventListener("dispose",R),x(y)}function P(A){const y=n.get(A);if(y.__webglInit===void 0)return;const V=A.source,Q=d.get(V);if(Q){const nt=Q[y.__cacheKey];nt.usedTimes--,nt.usedTimes===0&&S(A),Object.keys(Q).length===0&&d.delete(V)}n.remove(A)}function S(A){const y=n.get(A);i.deleteTexture(y.__webglTexture);const V=A.source,Q=d.get(V);delete Q[y.__cacheKey],o.memory.textures--}function x(A){const y=n.get(A);if(A.depthTexture&&(A.depthTexture.dispose(),n.remove(A.depthTexture)),A.isWebGLCubeRenderTarget)for(let Q=0;Q<6;Q++){if(Array.isArray(y.__webglFramebuffer[Q]))for(let nt=0;nt<y.__webglFramebuffer[Q].length;nt++)i.deleteFramebuffer(y.__webglFramebuffer[Q][nt]);else i.deleteFramebuffer(y.__webglFramebuffer[Q]);y.__webglDepthbuffer&&i.deleteRenderbuffer(y.__webglDepthbuffer[Q])}else{if(Array.isArray(y.__webglFramebuffer))for(let Q=0;Q<y.__webglFramebuffer.length;Q++)i.deleteFramebuffer(y.__webglFramebuffer[Q]);else i.deleteFramebuffer(y.__webglFramebuffer);if(y.__webglDepthbuffer&&i.deleteRenderbuffer(y.__webglDepthbuffer),y.__webglMultisampledFramebuffer&&i.deleteFramebuffer(y.__webglMultisampledFramebuffer),y.__webglColorRenderbuffer)for(let Q=0;Q<y.__webglColorRenderbuffer.length;Q++)y.__webglColorRenderbuffer[Q]&&i.deleteRenderbuffer(y.__webglColorRenderbuffer[Q]);y.__webglDepthRenderbuffer&&i.deleteRenderbuffer(y.__webglDepthRenderbuffer)}const V=A.textures;for(let Q=0,nt=V.length;Q<nt;Q++){const tt=n.get(V[Q]);tt.__webglTexture&&(i.deleteTexture(tt.__webglTexture),o.memory.textures--),n.remove(V[Q])}n.remove(A)}let C=0;function H(){C=0}function N(){const A=C;return A>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+s.maxTextures),C+=1,A}function F(A){const y=[];return y.push(A.wrapS),y.push(A.wrapT),y.push(A.wrapR||0),y.push(A.magFilter),y.push(A.minFilter),y.push(A.anisotropy),y.push(A.internalFormat),y.push(A.format),y.push(A.type),y.push(A.generateMipmaps),y.push(A.premultiplyAlpha),y.push(A.flipY),y.push(A.unpackAlignment),y.push(A.colorSpace),y.join()}function $(A,y){const V=n.get(A);if(A.isVideoTexture&&st(A),A.isRenderTargetTexture===!1&&A.version>0&&V.__version!==A.version){const Q=A.image;if(Q===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Q.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{j(V,A,y);return}}e.bindTexture(i.TEXTURE_2D,V.__webglTexture,i.TEXTURE0+y)}function G(A,y){const V=n.get(A);if(A.version>0&&V.__version!==A.version){j(V,A,y);return}e.bindTexture(i.TEXTURE_2D_ARRAY,V.__webglTexture,i.TEXTURE0+y)}function K(A,y){const V=n.get(A);if(A.version>0&&V.__version!==A.version){j(V,A,y);return}e.bindTexture(i.TEXTURE_3D,V.__webglTexture,i.TEXTURE0+y)}function X(A,y){const V=n.get(A);if(A.version>0&&V.__version!==A.version){rt(V,A,y);return}e.bindTexture(i.TEXTURE_CUBE_MAP,V.__webglTexture,i.TEXTURE0+y)}const it={[Gi]:i.REPEAT,[ai]:i.CLAMP_TO_EDGE,[Yo]:i.MIRRORED_REPEAT},ht={[Je]:i.NEAREST,[xu]:i.NEAREST_MIPMAP_NEAREST,[Ds]:i.NEAREST_MIPMAP_LINEAR,[pn]:i.LINEAR,[kr]:i.LINEAR_MIPMAP_NEAREST,[ci]:i.LINEAR_MIPMAP_LINEAR},pt={[wu]:i.NEVER,[Cu]:i.ALWAYS,[Eu]:i.LESS,[th]:i.LEQUAL,[Tu]:i.EQUAL,[Ru]:i.GEQUAL,[bu]:i.GREATER,[Au]:i.NOTEQUAL};function wt(A,y){if(y.type===mn&&t.has("OES_texture_float_linear")===!1&&(y.magFilter===pn||y.magFilter===kr||y.magFilter===Ds||y.magFilter===ci||y.minFilter===pn||y.minFilter===kr||y.minFilter===Ds||y.minFilter===ci)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(A,i.TEXTURE_WRAP_S,it[y.wrapS]),i.texParameteri(A,i.TEXTURE_WRAP_T,it[y.wrapT]),(A===i.TEXTURE_3D||A===i.TEXTURE_2D_ARRAY)&&i.texParameteri(A,i.TEXTURE_WRAP_R,it[y.wrapR]),i.texParameteri(A,i.TEXTURE_MAG_FILTER,ht[y.magFilter]),i.texParameteri(A,i.TEXTURE_MIN_FILTER,ht[y.minFilter]),y.compareFunction&&(i.texParameteri(A,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(A,i.TEXTURE_COMPARE_FUNC,pt[y.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(y.magFilter===Je||y.minFilter!==Ds&&y.minFilter!==ci||y.type===mn&&t.has("OES_texture_float_linear")===!1)return;if(y.anisotropy>1||n.get(y).__currentAnisotropy){const V=t.get("EXT_texture_filter_anisotropic");i.texParameterf(A,V.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,s.getMaxAnisotropy())),n.get(y).__currentAnisotropy=y.anisotropy}}}function Ct(A,y){let V=!1;A.__webglInit===void 0&&(A.__webglInit=!0,y.addEventListener("dispose",T));const Q=y.source;let nt=d.get(Q);nt===void 0&&(nt={},d.set(Q,nt));const tt=F(y);if(tt!==A.__cacheKey){nt[tt]===void 0&&(nt[tt]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,V=!0),nt[tt].usedTimes++;const Pt=nt[A.__cacheKey];Pt!==void 0&&(nt[A.__cacheKey].usedTimes--,Pt.usedTimes===0&&S(y)),A.__cacheKey=tt,A.__webglTexture=nt[tt].texture}return V}function j(A,y,V){let Q=i.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(Q=i.TEXTURE_2D_ARRAY),y.isData3DTexture&&(Q=i.TEXTURE_3D);const nt=Ct(A,y),tt=y.source;e.bindTexture(Q,A.__webglTexture,i.TEXTURE0+V);const Pt=n.get(tt);if(tt.version!==Pt.__version||nt===!0){e.activeTexture(i.TEXTURE0+V);const gt=te.getPrimaries(te.workingColorSpace),Tt=y.colorSpace===fn?null:te.getPrimaries(y.colorSpace),jt=y.colorSpace===fn||gt===Tt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,y.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,y.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,jt);let at=_(y.image,!1,s.maxTextureSize);at=Rt(y,at);const bt=r.convert(y.format,y.colorSpace),kt=r.convert(y.type);let Ht=M(y.internalFormat,bt,kt,y.colorSpace,y.isVideoTexture);wt(Q,y);let At;const Qt=y.mipmaps,Kt=y.isVideoTexture!==!0,ue=Pt.__version===void 0||nt===!0,z=tt.dataReady,vt=D(y,at);if(y.isDepthTexture)Ht=v(y.format===Wi,y.type),ue&&(Kt?e.texStorage2D(i.TEXTURE_2D,1,Ht,at.width,at.height):e.texImage2D(i.TEXTURE_2D,0,Ht,at.width,at.height,0,bt,kt,null));else if(y.isDataTexture)if(Qt.length>0){Kt&&ue&&e.texStorage2D(i.TEXTURE_2D,vt,Ht,Qt[0].width,Qt[0].height);for(let J=0,et=Qt.length;J<et;J++)At=Qt[J],Kt?z&&e.texSubImage2D(i.TEXTURE_2D,J,0,0,At.width,At.height,bt,kt,At.data):e.texImage2D(i.TEXTURE_2D,J,Ht,At.width,At.height,0,bt,kt,At.data);y.generateMipmaps=!1}else Kt?(ue&&e.texStorage2D(i.TEXTURE_2D,vt,Ht,at.width,at.height),z&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,at.width,at.height,bt,kt,at.data)):e.texImage2D(i.TEXTURE_2D,0,Ht,at.width,at.height,0,bt,kt,at.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){Kt&&ue&&e.texStorage3D(i.TEXTURE_2D_ARRAY,vt,Ht,Qt[0].width,Qt[0].height,at.depth);for(let J=0,et=Qt.length;J<et;J++)if(At=Qt[J],y.format!==ln)if(bt!==null)if(Kt){if(z)if(y.layerUpdates.size>0){const Et=cl(At.width,At.height,y.format,y.type);for(const yt of y.layerUpdates){const Yt=At.data.subarray(yt*Et/At.data.BYTES_PER_ELEMENT,(yt+1)*Et/At.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,J,0,0,yt,At.width,At.height,1,bt,Yt)}y.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,J,0,0,0,At.width,At.height,at.depth,bt,At.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,J,Ht,At.width,At.height,at.depth,0,At.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Kt?z&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,J,0,0,0,At.width,At.height,at.depth,bt,kt,At.data):e.texImage3D(i.TEXTURE_2D_ARRAY,J,Ht,At.width,At.height,at.depth,0,bt,kt,At.data)}else{Kt&&ue&&e.texStorage2D(i.TEXTURE_2D,vt,Ht,Qt[0].width,Qt[0].height);for(let J=0,et=Qt.length;J<et;J++)At=Qt[J],y.format!==ln?bt!==null?Kt?z&&e.compressedTexSubImage2D(i.TEXTURE_2D,J,0,0,At.width,At.height,bt,At.data):e.compressedTexImage2D(i.TEXTURE_2D,J,Ht,At.width,At.height,0,At.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Kt?z&&e.texSubImage2D(i.TEXTURE_2D,J,0,0,At.width,At.height,bt,kt,At.data):e.texImage2D(i.TEXTURE_2D,J,Ht,At.width,At.height,0,bt,kt,At.data)}else if(y.isDataArrayTexture)if(Kt){if(ue&&e.texStorage3D(i.TEXTURE_2D_ARRAY,vt,Ht,at.width,at.height,at.depth),z)if(y.layerUpdates.size>0){const J=cl(at.width,at.height,y.format,y.type);for(const et of y.layerUpdates){const Et=at.data.subarray(et*J/at.data.BYTES_PER_ELEMENT,(et+1)*J/at.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,et,at.width,at.height,1,bt,kt,Et)}y.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,at.width,at.height,at.depth,bt,kt,at.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Ht,at.width,at.height,at.depth,0,bt,kt,at.data);else if(y.isData3DTexture)Kt?(ue&&e.texStorage3D(i.TEXTURE_3D,vt,Ht,at.width,at.height,at.depth),z&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,at.width,at.height,at.depth,bt,kt,at.data)):e.texImage3D(i.TEXTURE_3D,0,Ht,at.width,at.height,at.depth,0,bt,kt,at.data);else if(y.isFramebufferTexture){if(ue)if(Kt)e.texStorage2D(i.TEXTURE_2D,vt,Ht,at.width,at.height);else{let J=at.width,et=at.height;for(let Et=0;Et<vt;Et++)e.texImage2D(i.TEXTURE_2D,Et,Ht,J,et,0,bt,kt,null),J>>=1,et>>=1}}else if(Qt.length>0){if(Kt&&ue){const J=ft(Qt[0]);e.texStorage2D(i.TEXTURE_2D,vt,Ht,J.width,J.height)}for(let J=0,et=Qt.length;J<et;J++)At=Qt[J],Kt?z&&e.texSubImage2D(i.TEXTURE_2D,J,0,0,bt,kt,At):e.texImage2D(i.TEXTURE_2D,J,Ht,bt,kt,At);y.generateMipmaps=!1}else if(Kt){if(ue){const J=ft(at);e.texStorage2D(i.TEXTURE_2D,vt,Ht,J.width,J.height)}z&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,bt,kt,at)}else e.texImage2D(i.TEXTURE_2D,0,Ht,bt,kt,at);m(y)&&p(Q),Pt.__version=tt.version,y.onUpdate&&y.onUpdate(y)}A.__version=y.version}function rt(A,y,V){if(y.image.length!==6)return;const Q=Ct(A,y),nt=y.source;e.bindTexture(i.TEXTURE_CUBE_MAP,A.__webglTexture,i.TEXTURE0+V);const tt=n.get(nt);if(nt.version!==tt.__version||Q===!0){e.activeTexture(i.TEXTURE0+V);const Pt=te.getPrimaries(te.workingColorSpace),gt=y.colorSpace===fn?null:te.getPrimaries(y.colorSpace),Tt=y.colorSpace===fn||Pt===gt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,y.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,y.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Tt);const jt=y.isCompressedTexture||y.image[0].isCompressedTexture,at=y.image[0]&&y.image[0].isDataTexture,bt=[];for(let et=0;et<6;et++)!jt&&!at?bt[et]=_(y.image[et],!0,s.maxCubemapSize):bt[et]=at?y.image[et].image:y.image[et],bt[et]=Rt(y,bt[et]);const kt=bt[0],Ht=r.convert(y.format,y.colorSpace),At=r.convert(y.type),Qt=M(y.internalFormat,Ht,At,y.colorSpace),Kt=y.isVideoTexture!==!0,ue=tt.__version===void 0||Q===!0,z=nt.dataReady;let vt=D(y,kt);wt(i.TEXTURE_CUBE_MAP,y);let J;if(jt){Kt&&ue&&e.texStorage2D(i.TEXTURE_CUBE_MAP,vt,Qt,kt.width,kt.height);for(let et=0;et<6;et++){J=bt[et].mipmaps;for(let Et=0;Et<J.length;Et++){const yt=J[Et];y.format!==ln?Ht!==null?Kt?z&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+et,Et,0,0,yt.width,yt.height,Ht,yt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+et,Et,Qt,yt.width,yt.height,0,yt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Kt?z&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+et,Et,0,0,yt.width,yt.height,Ht,At,yt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+et,Et,Qt,yt.width,yt.height,0,Ht,At,yt.data)}}}else{if(J=y.mipmaps,Kt&&ue){J.length>0&&vt++;const et=ft(bt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,vt,Qt,et.width,et.height)}for(let et=0;et<6;et++)if(at){Kt?z&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+et,0,0,0,bt[et].width,bt[et].height,Ht,At,bt[et].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+et,0,Qt,bt[et].width,bt[et].height,0,Ht,At,bt[et].data);for(let Et=0;Et<J.length;Et++){const Yt=J[Et].image[et].image;Kt?z&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+et,Et+1,0,0,Yt.width,Yt.height,Ht,At,Yt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+et,Et+1,Qt,Yt.width,Yt.height,0,Ht,At,Yt.data)}}else{Kt?z&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+et,0,0,0,Ht,At,bt[et]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+et,0,Qt,Ht,At,bt[et]);for(let Et=0;Et<J.length;Et++){const yt=J[Et];Kt?z&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+et,Et+1,0,0,Ht,At,yt.image[et]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+et,Et+1,Qt,Ht,At,yt.image[et])}}}m(y)&&p(i.TEXTURE_CUBE_MAP),tt.__version=nt.version,y.onUpdate&&y.onUpdate(y)}A.__version=y.version}function _t(A,y,V,Q,nt,tt){const Pt=r.convert(V.format,V.colorSpace),gt=r.convert(V.type),Tt=M(V.internalFormat,Pt,gt,V.colorSpace),jt=n.get(y),at=n.get(V);if(at.__renderTarget=y,!jt.__hasExternalTextures){const bt=Math.max(1,y.width>>tt),kt=Math.max(1,y.height>>tt);nt===i.TEXTURE_3D||nt===i.TEXTURE_2D_ARRAY?e.texImage3D(nt,tt,Tt,bt,kt,y.depth,0,Pt,gt,null):e.texImage2D(nt,tt,Tt,bt,kt,0,Pt,gt,null)}e.bindFramebuffer(i.FRAMEBUFFER,A),ot(y)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Q,nt,at.__webglTexture,0,Z(y)):(nt===i.TEXTURE_2D||nt>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&nt<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,Q,nt,at.__webglTexture,tt),e.bindFramebuffer(i.FRAMEBUFFER,null)}function ut(A,y,V){if(i.bindRenderbuffer(i.RENDERBUFFER,A),y.depthBuffer){const Q=y.depthTexture,nt=Q&&Q.isDepthTexture?Q.type:null,tt=v(y.stencilBuffer,nt),Pt=y.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,gt=Z(y);ot(y)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,gt,tt,y.width,y.height):V?i.renderbufferStorageMultisample(i.RENDERBUFFER,gt,tt,y.width,y.height):i.renderbufferStorage(i.RENDERBUFFER,tt,y.width,y.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Pt,i.RENDERBUFFER,A)}else{const Q=y.textures;for(let nt=0;nt<Q.length;nt++){const tt=Q[nt],Pt=r.convert(tt.format,tt.colorSpace),gt=r.convert(tt.type),Tt=M(tt.internalFormat,Pt,gt,tt.colorSpace),jt=Z(y);V&&ot(y)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,jt,Tt,y.width,y.height):ot(y)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,jt,Tt,y.width,y.height):i.renderbufferStorage(i.RENDERBUFFER,Tt,y.width,y.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Ut(A,y){if(y&&y.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,A),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Q=n.get(y.depthTexture);Q.__renderTarget=y,(!Q.__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),$(y.depthTexture,0);const nt=Q.__webglTexture,tt=Z(y);if(y.depthTexture.format===Ni)ot(y)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,nt,0,tt):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,nt,0);else if(y.depthTexture.format===Wi)ot(y)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,nt,0,tt):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,nt,0);else throw new Error("Unknown depthTexture format")}function zt(A){const y=n.get(A),V=A.isWebGLCubeRenderTarget===!0;if(y.__boundDepthTexture!==A.depthTexture){const Q=A.depthTexture;if(y.__depthDisposeCallback&&y.__depthDisposeCallback(),Q){const nt=()=>{delete y.__boundDepthTexture,delete y.__depthDisposeCallback,Q.removeEventListener("dispose",nt)};Q.addEventListener("dispose",nt),y.__depthDisposeCallback=nt}y.__boundDepthTexture=Q}if(A.depthTexture&&!y.__autoAllocateDepthBuffer){if(V)throw new Error("target.depthTexture not supported in Cube render targets");Ut(y.__webglFramebuffer,A)}else if(V){y.__webglDepthbuffer=[];for(let Q=0;Q<6;Q++)if(e.bindFramebuffer(i.FRAMEBUFFER,y.__webglFramebuffer[Q]),y.__webglDepthbuffer[Q]===void 0)y.__webglDepthbuffer[Q]=i.createRenderbuffer(),ut(y.__webglDepthbuffer[Q],A,!1);else{const nt=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,tt=y.__webglDepthbuffer[Q];i.bindRenderbuffer(i.RENDERBUFFER,tt),i.framebufferRenderbuffer(i.FRAMEBUFFER,nt,i.RENDERBUFFER,tt)}}else if(e.bindFramebuffer(i.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer===void 0)y.__webglDepthbuffer=i.createRenderbuffer(),ut(y.__webglDepthbuffer,A,!1);else{const Q=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,nt=y.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,nt),i.framebufferRenderbuffer(i.FRAMEBUFFER,Q,i.RENDERBUFFER,nt)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function Ot(A,y,V){const Q=n.get(A);y!==void 0&&_t(Q.__webglFramebuffer,A,A.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),V!==void 0&&zt(A)}function Xt(A){const y=A.texture,V=n.get(A),Q=n.get(y);A.addEventListener("dispose",R);const nt=A.textures,tt=A.isWebGLCubeRenderTarget===!0,Pt=nt.length>1;if(Pt||(Q.__webglTexture===void 0&&(Q.__webglTexture=i.createTexture()),Q.__version=y.version,o.memory.textures++),tt){V.__webglFramebuffer=[];for(let gt=0;gt<6;gt++)if(y.mipmaps&&y.mipmaps.length>0){V.__webglFramebuffer[gt]=[];for(let Tt=0;Tt<y.mipmaps.length;Tt++)V.__webglFramebuffer[gt][Tt]=i.createFramebuffer()}else V.__webglFramebuffer[gt]=i.createFramebuffer()}else{if(y.mipmaps&&y.mipmaps.length>0){V.__webglFramebuffer=[];for(let gt=0;gt<y.mipmaps.length;gt++)V.__webglFramebuffer[gt]=i.createFramebuffer()}else V.__webglFramebuffer=i.createFramebuffer();if(Pt)for(let gt=0,Tt=nt.length;gt<Tt;gt++){const jt=n.get(nt[gt]);jt.__webglTexture===void 0&&(jt.__webglTexture=i.createTexture(),o.memory.textures++)}if(A.samples>0&&ot(A)===!1){V.__webglMultisampledFramebuffer=i.createFramebuffer(),V.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,V.__webglMultisampledFramebuffer);for(let gt=0;gt<nt.length;gt++){const Tt=nt[gt];V.__webglColorRenderbuffer[gt]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,V.__webglColorRenderbuffer[gt]);const jt=r.convert(Tt.format,Tt.colorSpace),at=r.convert(Tt.type),bt=M(Tt.internalFormat,jt,at,Tt.colorSpace,A.isXRRenderTarget===!0),kt=Z(A);i.renderbufferStorageMultisample(i.RENDERBUFFER,kt,bt,A.width,A.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+gt,i.RENDERBUFFER,V.__webglColorRenderbuffer[gt])}i.bindRenderbuffer(i.RENDERBUFFER,null),A.depthBuffer&&(V.__webglDepthRenderbuffer=i.createRenderbuffer(),ut(V.__webglDepthRenderbuffer,A,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(tt){e.bindTexture(i.TEXTURE_CUBE_MAP,Q.__webglTexture),wt(i.TEXTURE_CUBE_MAP,y);for(let gt=0;gt<6;gt++)if(y.mipmaps&&y.mipmaps.length>0)for(let Tt=0;Tt<y.mipmaps.length;Tt++)_t(V.__webglFramebuffer[gt][Tt],A,y,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+gt,Tt);else _t(V.__webglFramebuffer[gt],A,y,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+gt,0);m(y)&&p(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Pt){for(let gt=0,Tt=nt.length;gt<Tt;gt++){const jt=nt[gt],at=n.get(jt);e.bindTexture(i.TEXTURE_2D,at.__webglTexture),wt(i.TEXTURE_2D,jt),_t(V.__webglFramebuffer,A,jt,i.COLOR_ATTACHMENT0+gt,i.TEXTURE_2D,0),m(jt)&&p(i.TEXTURE_2D)}e.unbindTexture()}else{let gt=i.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(gt=A.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(gt,Q.__webglTexture),wt(gt,y),y.mipmaps&&y.mipmaps.length>0)for(let Tt=0;Tt<y.mipmaps.length;Tt++)_t(V.__webglFramebuffer[Tt],A,y,i.COLOR_ATTACHMENT0,gt,Tt);else _t(V.__webglFramebuffer,A,y,i.COLOR_ATTACHMENT0,gt,0);m(y)&&p(gt),e.unbindTexture()}A.depthBuffer&&zt(A)}function U(A){const y=A.textures;for(let V=0,Q=y.length;V<Q;V++){const nt=y[V];if(m(nt)){const tt=w(A),Pt=n.get(nt).__webglTexture;e.bindTexture(tt,Pt),p(tt),e.unbindTexture()}}}const O=[],b=[];function ct(A){if(A.samples>0){if(ot(A)===!1){const y=A.textures,V=A.width,Q=A.height;let nt=i.COLOR_BUFFER_BIT;const tt=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Pt=n.get(A),gt=y.length>1;if(gt)for(let Tt=0;Tt<y.length;Tt++)e.bindFramebuffer(i.FRAMEBUFFER,Pt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Tt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,Pt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Tt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,Pt.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Pt.__webglFramebuffer);for(let Tt=0;Tt<y.length;Tt++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(nt|=i.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(nt|=i.STENCIL_BUFFER_BIT)),gt){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Pt.__webglColorRenderbuffer[Tt]);const jt=n.get(y[Tt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,jt,0)}i.blitFramebuffer(0,0,V,Q,0,0,V,Q,nt,i.NEAREST),c===!0&&(O.length=0,b.length=0,O.push(i.COLOR_ATTACHMENT0+Tt),A.depthBuffer&&A.resolveDepthBuffer===!1&&(O.push(tt),b.push(tt),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,b)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,O))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),gt)for(let Tt=0;Tt<y.length;Tt++){e.bindFramebuffer(i.FRAMEBUFFER,Pt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Tt,i.RENDERBUFFER,Pt.__webglColorRenderbuffer[Tt]);const jt=n.get(y[Tt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,Pt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Tt,i.TEXTURE_2D,jt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Pt.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.resolveDepthBuffer===!1&&c){const y=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[y])}}}function Z(A){return Math.min(s.maxSamples,A.samples)}function ot(A){const y=n.get(A);return A.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function st(A){const y=o.render.frame;h.get(A)!==y&&(h.set(A,y),A.update())}function Rt(A,y){const V=A.colorSpace,Q=A.format,nt=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||V!==Yi&&V!==fn&&(te.getTransfer(V)===ae?(Q!==ln||nt!==Rn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",V)),y}function ft(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(l.width=A.naturalWidth||A.width,l.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(l.width=A.displayWidth,l.height=A.displayHeight):(l.width=A.width,l.height=A.height),l}this.allocateTextureUnit=N,this.resetTextureUnits=H,this.setTexture2D=$,this.setTexture2DArray=G,this.setTexture3D=K,this.setTextureCube=X,this.rebindTextures=Ot,this.setupRenderTarget=Xt,this.updateRenderTargetMipmap=U,this.updateMultisampleRenderTarget=ct,this.setupDepthRenderbuffer=zt,this.setupFrameBufferTexture=_t,this.useMultisampledRTT=ot}function Nm(i,t){function e(n,s=fn){let r;const o=te.getTransfer(s);if(n===Rn)return i.UNSIGNED_BYTE;if(n===Fa)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Oa)return i.UNSIGNED_SHORT_5_5_5_1;if(n===ql)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Xl)return i.BYTE;if(n===Yl)return i.SHORT;if(n===ys)return i.UNSIGNED_SHORT;if(n===Na)return i.INT;if(n===hi)return i.UNSIGNED_INT;if(n===mn)return i.FLOAT;if(n===bs)return i.HALF_FLOAT;if(n===$l)return i.ALPHA;if(n===Kl)return i.RGB;if(n===ln)return i.RGBA;if(n===Zl)return i.LUMINANCE;if(n===Jl)return i.LUMINANCE_ALPHA;if(n===Ni)return i.DEPTH_COMPONENT;if(n===Wi)return i.DEPTH_STENCIL;if(n===za)return i.RED;if(n===Ba)return i.RED_INTEGER;if(n===jl)return i.RG;if(n===ka)return i.RG_INTEGER;if(n===Ha)return i.RGBA_INTEGER;if(n===lr||n===hr||n===ur||n===dr)if(o===ae)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===lr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===hr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===ur)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===dr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===lr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===hr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===ur)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===dr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===qo||n===$o||n===Ko||n===Zo)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===qo)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===$o)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Ko)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Zo)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Jo||n===jo||n===Qo)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Jo||n===jo)return o===ae?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Qo)return o===ae?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===ta||n===ea||n===na||n===ia||n===sa||n===ra||n===oa||n===aa||n===ca||n===la||n===ha||n===ua||n===da||n===fa)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===ta)return o===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===ea)return o===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===na)return o===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===ia)return o===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===sa)return o===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===ra)return o===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===oa)return o===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===aa)return o===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===ca)return o===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===la)return o===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===ha)return o===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===ua)return o===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===da)return o===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===fa)return o===ae?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===fr||n===pa||n===ma)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===fr)return o===ae?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===pa)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===ma)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Ql||n===ga||n===_a||n===va)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===fr)return r.COMPRESSED_RED_RGTC1_EXT;if(n===ga)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===_a)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===va)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Vi?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}class Fm extends Ye{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class Bt extends Ae{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Om={type:"move"};class go{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Bt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Bt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new L,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new L),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Bt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new L,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new L),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,o=null;const a=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){o=!0;for(const _ of t.hand.values()){const m=e.getJointPose(_,n),p=this._getHandJoint(l,_);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,g=.005;l.inputState.pinching&&d>f+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&d<=f-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Om)))}return a!==null&&(a.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new Bt;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const zm=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Bm=`
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

}`;class km{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const s=new ze,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new Wn({vertexShader:zm,fragmentShader:Bm,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new I(new cn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Hm extends qi{constructor(t,e){super();const n=this;let s=null,r=1,o=null,a="local-floor",c=1,l=null,h=null,u=null,d=null,f=null,g=null;const _=new km,m=e.getContextAttributes();let p=null,w=null;const M=[],v=[],D=new lt;let T=null;const R=new Ye;R.viewport=new ce;const P=new Ye;P.viewport=new ce;const S=[R,P],x=new Fm;let C=null,H=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(j){let rt=M[j];return rt===void 0&&(rt=new go,M[j]=rt),rt.getTargetRaySpace()},this.getControllerGrip=function(j){let rt=M[j];return rt===void 0&&(rt=new go,M[j]=rt),rt.getGripSpace()},this.getHand=function(j){let rt=M[j];return rt===void 0&&(rt=new go,M[j]=rt),rt.getHandSpace()};function N(j){const rt=v.indexOf(j.inputSource);if(rt===-1)return;const _t=M[rt];_t!==void 0&&(_t.update(j.inputSource,j.frame,l||o),_t.dispatchEvent({type:j.type,data:j.inputSource}))}function F(){s.removeEventListener("select",N),s.removeEventListener("selectstart",N),s.removeEventListener("selectend",N),s.removeEventListener("squeeze",N),s.removeEventListener("squeezestart",N),s.removeEventListener("squeezeend",N),s.removeEventListener("end",F),s.removeEventListener("inputsourceschange",$);for(let j=0;j<M.length;j++){const rt=v[j];rt!==null&&(v[j]=null,M[j].disconnect(rt))}C=null,H=null,_.reset(),t.setRenderTarget(p),f=null,d=null,u=null,s=null,w=null,Ct.stop(),n.isPresenting=!1,t.setPixelRatio(T),t.setSize(D.width,D.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(j){r=j,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(j){a=j,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(j){l=j},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(j){if(s=j,s!==null){if(p=t.getRenderTarget(),s.addEventListener("select",N),s.addEventListener("selectstart",N),s.addEventListener("selectend",N),s.addEventListener("squeeze",N),s.addEventListener("squeezestart",N),s.addEventListener("squeezeend",N),s.addEventListener("end",F),s.addEventListener("inputsourceschange",$),m.xrCompatible!==!0&&await e.makeXRCompatible(),T=t.getPixelRatio(),t.getSize(D),s.renderState.layers===void 0){const rt={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,e,rt),s.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),w=new ui(f.framebufferWidth,f.framebufferHeight,{format:ln,type:Rn,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil})}else{let rt=null,_t=null,ut=null;m.depth&&(ut=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,rt=m.stencil?Wi:Ni,_t=m.stencil?Vi:hi);const Ut={colorFormat:e.RGBA8,depthFormat:ut,scaleFactor:r};u=new XRWebGLBinding(s,e),d=u.createProjectionLayer(Ut),s.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),w=new ui(d.textureWidth,d.textureHeight,{format:ln,type:Rn,depthTexture:new dh(d.textureWidth,d.textureHeight,_t,void 0,void 0,void 0,void 0,void 0,void 0,rt),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}w.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await s.requestReferenceSpace(a),Ct.setContext(s),Ct.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function $(j){for(let rt=0;rt<j.removed.length;rt++){const _t=j.removed[rt],ut=v.indexOf(_t);ut>=0&&(v[ut]=null,M[ut].disconnect(_t))}for(let rt=0;rt<j.added.length;rt++){const _t=j.added[rt];let ut=v.indexOf(_t);if(ut===-1){for(let zt=0;zt<M.length;zt++)if(zt>=v.length){v.push(_t),ut=zt;break}else if(v[zt]===null){v[zt]=_t,ut=zt;break}if(ut===-1)break}const Ut=M[ut];Ut&&Ut.connect(_t)}}const G=new L,K=new L;function X(j,rt,_t){G.setFromMatrixPosition(rt.matrixWorld),K.setFromMatrixPosition(_t.matrixWorld);const ut=G.distanceTo(K),Ut=rt.projectionMatrix.elements,zt=_t.projectionMatrix.elements,Ot=Ut[14]/(Ut[10]-1),Xt=Ut[14]/(Ut[10]+1),U=(Ut[9]+1)/Ut[5],O=(Ut[9]-1)/Ut[5],b=(Ut[8]-1)/Ut[0],ct=(zt[8]+1)/zt[0],Z=Ot*b,ot=Ot*ct,st=ut/(-b+ct),Rt=st*-b;if(rt.matrixWorld.decompose(j.position,j.quaternion,j.scale),j.translateX(Rt),j.translateZ(st),j.matrixWorld.compose(j.position,j.quaternion,j.scale),j.matrixWorldInverse.copy(j.matrixWorld).invert(),Ut[10]===-1)j.projectionMatrix.copy(rt.projectionMatrix),j.projectionMatrixInverse.copy(rt.projectionMatrixInverse);else{const ft=Ot+st,A=Xt+st,y=Z-Rt,V=ot+(ut-Rt),Q=U*Xt/A*ft,nt=O*Xt/A*ft;j.projectionMatrix.makePerspective(y,V,Q,nt,ft,A),j.projectionMatrixInverse.copy(j.projectionMatrix).invert()}}function it(j,rt){rt===null?j.matrixWorld.copy(j.matrix):j.matrixWorld.multiplyMatrices(rt.matrixWorld,j.matrix),j.matrixWorldInverse.copy(j.matrixWorld).invert()}this.updateCamera=function(j){if(s===null)return;let rt=j.near,_t=j.far;_.texture!==null&&(_.depthNear>0&&(rt=_.depthNear),_.depthFar>0&&(_t=_.depthFar)),x.near=P.near=R.near=rt,x.far=P.far=R.far=_t,(C!==x.near||H!==x.far)&&(s.updateRenderState({depthNear:x.near,depthFar:x.far}),C=x.near,H=x.far),R.layers.mask=j.layers.mask|2,P.layers.mask=j.layers.mask|4,x.layers.mask=R.layers.mask|P.layers.mask;const ut=j.parent,Ut=x.cameras;it(x,ut);for(let zt=0;zt<Ut.length;zt++)it(Ut[zt],ut);Ut.length===2?X(x,R,P):x.projectionMatrix.copy(R.projectionMatrix),ht(j,x,ut)};function ht(j,rt,_t){_t===null?j.matrix.copy(rt.matrixWorld):(j.matrix.copy(_t.matrixWorld),j.matrix.invert(),j.matrix.multiply(rt.matrixWorld)),j.matrix.decompose(j.position,j.quaternion,j.scale),j.updateMatrixWorld(!0),j.projectionMatrix.copy(rt.projectionMatrix),j.projectionMatrixInverse.copy(rt.projectionMatrixInverse),j.isPerspectiveCamera&&(j.fov=xa*2*Math.atan(1/j.projectionMatrix.elements[5]),j.zoom=1)}this.getCamera=function(){return x},this.getFoveation=function(){if(!(d===null&&f===null))return c},this.setFoveation=function(j){c=j,d!==null&&(d.fixedFoveation=j),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=j)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(x)};let pt=null;function wt(j,rt){if(h=rt.getViewerPose(l||o),g=rt,h!==null){const _t=h.views;f!==null&&(t.setRenderTargetFramebuffer(w,f.framebuffer),t.setRenderTarget(w));let ut=!1;_t.length!==x.cameras.length&&(x.cameras.length=0,ut=!0);for(let zt=0;zt<_t.length;zt++){const Ot=_t[zt];let Xt=null;if(f!==null)Xt=f.getViewport(Ot);else{const O=u.getViewSubImage(d,Ot);Xt=O.viewport,zt===0&&(t.setRenderTargetTextures(w,O.colorTexture,d.ignoreDepthValues?void 0:O.depthStencilTexture),t.setRenderTarget(w))}let U=S[zt];U===void 0&&(U=new Ye,U.layers.enable(zt),U.viewport=new ce,S[zt]=U),U.matrix.fromArray(Ot.transform.matrix),U.matrix.decompose(U.position,U.quaternion,U.scale),U.projectionMatrix.fromArray(Ot.projectionMatrix),U.projectionMatrixInverse.copy(U.projectionMatrix).invert(),U.viewport.set(Xt.x,Xt.y,Xt.width,Xt.height),zt===0&&(x.matrix.copy(U.matrix),x.matrix.decompose(x.position,x.quaternion,x.scale)),ut===!0&&x.cameras.push(U)}const Ut=s.enabledFeatures;if(Ut&&Ut.includes("depth-sensing")){const zt=u.getDepthInformation(_t[0]);zt&&zt.isValid&&zt.texture&&_.init(t,zt,s.renderState)}}for(let _t=0;_t<M.length;_t++){const ut=v[_t],Ut=M[_t];ut!==null&&Ut!==void 0&&Ut.update(ut,rt,l||o)}pt&&pt(j,rt),rt.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:rt}),g=null}const Ct=new hh;Ct.setAnimationLoop(wt),this.setAnimationLoop=function(j){pt=j},this.dispose=function(){}}}const ti=new hn,Gm=new oe;function Vm(i,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,ah(i)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,w,M,v){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),u(m,p)):p.isMeshPhongMaterial?(r(m,p),h(m,p)):p.isMeshStandardMaterial?(r(m,p),d(m,p),p.isMeshPhysicalMaterial&&f(m,p,v)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),_(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?c(m,p,w,M):p.isSpriteMaterial?l(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===De&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===De&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const w=t.get(p),M=w.envMap,v=w.envMapRotation;M&&(m.envMap.value=M,ti.copy(v),ti.x*=-1,ti.y*=-1,ti.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(ti.y*=-1,ti.z*=-1),m.envMapRotation.value.setFromMatrix4(Gm.makeRotationFromEuler(ti)),m.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function c(m,p,w,M){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*w,m.scale.value=M*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function l(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function u(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,w){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===De&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=w.texture,m.transmissionSamplerSize.value.set(w.width,w.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function _(m,p){const w=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(w.matrixWorld),m.nearDistance.value=w.shadow.camera.near,m.farDistance.value=w.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function Wm(i,t,e,n){let s={},r={},o=[];const a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(w,M){const v=M.program;n.uniformBlockBinding(w,v)}function l(w,M){let v=s[w.id];v===void 0&&(g(w),v=h(w),s[w.id]=v,w.addEventListener("dispose",m));const D=M.program;n.updateUBOMapping(w,D);const T=t.render.frame;r[w.id]!==T&&(d(w),r[w.id]=T)}function h(w){const M=u();w.__bindingPointIndex=M;const v=i.createBuffer(),D=w.__size,T=w.usage;return i.bindBuffer(i.UNIFORM_BUFFER,v),i.bufferData(i.UNIFORM_BUFFER,D,T),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,M,v),v}function u(){for(let w=0;w<a;w++)if(o.indexOf(w)===-1)return o.push(w),w;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(w){const M=s[w.id],v=w.uniforms,D=w.__cache;i.bindBuffer(i.UNIFORM_BUFFER,M);for(let T=0,R=v.length;T<R;T++){const P=Array.isArray(v[T])?v[T]:[v[T]];for(let S=0,x=P.length;S<x;S++){const C=P[S];if(f(C,T,S,D)===!0){const H=C.__offset,N=Array.isArray(C.value)?C.value:[C.value];let F=0;for(let $=0;$<N.length;$++){const G=N[$],K=_(G);typeof G=="number"||typeof G=="boolean"?(C.__data[0]=G,i.bufferSubData(i.UNIFORM_BUFFER,H+F,C.__data)):G.isMatrix3?(C.__data[0]=G.elements[0],C.__data[1]=G.elements[1],C.__data[2]=G.elements[2],C.__data[3]=0,C.__data[4]=G.elements[3],C.__data[5]=G.elements[4],C.__data[6]=G.elements[5],C.__data[7]=0,C.__data[8]=G.elements[6],C.__data[9]=G.elements[7],C.__data[10]=G.elements[8],C.__data[11]=0):(G.toArray(C.__data,F),F+=K.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,H,C.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(w,M,v,D){const T=w.value,R=M+"_"+v;if(D[R]===void 0)return typeof T=="number"||typeof T=="boolean"?D[R]=T:D[R]=T.clone(),!0;{const P=D[R];if(typeof T=="number"||typeof T=="boolean"){if(P!==T)return D[R]=T,!0}else if(P.equals(T)===!1)return P.copy(T),!0}return!1}function g(w){const M=w.uniforms;let v=0;const D=16;for(let R=0,P=M.length;R<P;R++){const S=Array.isArray(M[R])?M[R]:[M[R]];for(let x=0,C=S.length;x<C;x++){const H=S[x],N=Array.isArray(H.value)?H.value:[H.value];for(let F=0,$=N.length;F<$;F++){const G=N[F],K=_(G),X=v%D,it=X%K.boundary,ht=X+it;v+=it,ht!==0&&D-ht<K.storage&&(v+=D-ht),H.__data=new Float32Array(K.storage/Float32Array.BYTES_PER_ELEMENT),H.__offset=v,v+=K.storage}}}const T=v%D;return T>0&&(v+=D-T),w.__size=v,w.__cache={},this}function _(w){const M={boundary:0,storage:0};return typeof w=="number"||typeof w=="boolean"?(M.boundary=4,M.storage=4):w.isVector2?(M.boundary=8,M.storage=8):w.isVector3||w.isColor?(M.boundary=16,M.storage=12):w.isVector4?(M.boundary=16,M.storage=16):w.isMatrix3?(M.boundary=48,M.storage=48):w.isMatrix4?(M.boundary=64,M.storage=64):w.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",w),M}function m(w){const M=w.target;M.removeEventListener("dispose",m);const v=o.indexOf(M.__bindingPointIndex);o.splice(v,1),i.deleteBuffer(s[M.id]),delete s[M.id],delete r[M.id]}function p(){for(const w in s)i.deleteBuffer(s[w]);o=[],s={},r={}}return{bind:c,update:l,dispose:p}}class Xm{constructor(t={}){const{canvas:e=Iu(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:d=!1}=t;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=o;const g=new Uint32Array(4),_=new Int32Array(4);let m=null,p=null;const w=[],M=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Ge,this.toneMapping=Gn,this.toneMappingExposure=1;const v=this;let D=!1,T=0,R=0,P=null,S=-1,x=null;const C=new ce,H=new ce;let N=null;const F=new Mt(0);let $=0,G=e.width,K=e.height,X=1,it=null,ht=null;const pt=new ce(0,0,G,K),wt=new ce(0,0,G,K);let Ct=!1;const j=new Xa;let rt=!1,_t=!1;const ut=new oe,Ut=new oe,zt=new L,Ot=new ce,Xt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let U=!1;function O(){return P===null?X:1}let b=n;function ct(E,B){return e.getContext(E,B)}try{const E={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Da}`),e.addEventListener("webglcontextlost",et,!1),e.addEventListener("webglcontextrestored",Et,!1),e.addEventListener("webglcontextcreationerror",yt,!1),b===null){const B="webgl2";if(b=ct(B,E),b===null)throw ct(B)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}let Z,ot,st,Rt,ft,A,y,V,Q,nt,tt,Pt,gt,Tt,jt,at,bt,kt,Ht,At,Qt,Kt,ue,z;function vt(){Z=new Zp(b),Z.init(),Kt=new Nm(b,Z),ot=new Wp(b,Z,t,Kt),st=new Im(b,Z),ot.reverseDepthBuffer&&d&&st.buffers.depth.setReversed(!0),Rt=new Qp(b),ft=new _m,A=new Um(b,Z,st,ft,ot,Kt,Rt),y=new Yp(v),V=new Kp(v),Q=new rd(b),ue=new Gp(b,Q),nt=new Jp(b,Q,Rt,ue),tt=new e0(b,nt,Q,Rt),Ht=new t0(b,ot,A),at=new Xp(ft),Pt=new gm(v,y,V,Z,ot,ue,at),gt=new Vm(v,ft),Tt=new xm,jt=new Tm(Z),kt=new Hp(v,y,V,st,tt,f,c),bt=new Pm(v,tt,ot),z=new Wm(b,Rt,ot,st),At=new Vp(b,Z,Rt),Qt=new jp(b,Z,Rt),Rt.programs=Pt.programs,v.capabilities=ot,v.extensions=Z,v.properties=ft,v.renderLists=Tt,v.shadowMap=bt,v.state=st,v.info=Rt}vt();const J=new Hm(v,b);this.xr=J,this.getContext=function(){return b},this.getContextAttributes=function(){return b.getContextAttributes()},this.forceContextLoss=function(){const E=Z.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=Z.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return X},this.setPixelRatio=function(E){E!==void 0&&(X=E,this.setSize(G,K,!1))},this.getSize=function(E){return E.set(G,K)},this.setSize=function(E,B,Y=!0){if(J.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}G=E,K=B,e.width=Math.floor(E*X),e.height=Math.floor(B*X),Y===!0&&(e.style.width=E+"px",e.style.height=B+"px"),this.setViewport(0,0,E,B)},this.getDrawingBufferSize=function(E){return E.set(G*X,K*X).floor()},this.setDrawingBufferSize=function(E,B,Y){G=E,K=B,X=Y,e.width=Math.floor(E*Y),e.height=Math.floor(B*Y),this.setViewport(0,0,E,B)},this.getCurrentViewport=function(E){return E.copy(C)},this.getViewport=function(E){return E.copy(pt)},this.setViewport=function(E,B,Y,q){E.isVector4?pt.set(E.x,E.y,E.z,E.w):pt.set(E,B,Y,q),st.viewport(C.copy(pt).multiplyScalar(X).round())},this.getScissor=function(E){return E.copy(wt)},this.setScissor=function(E,B,Y,q){E.isVector4?wt.set(E.x,E.y,E.z,E.w):wt.set(E,B,Y,q),st.scissor(H.copy(wt).multiplyScalar(X).round())},this.getScissorTest=function(){return Ct},this.setScissorTest=function(E){st.setScissorTest(Ct=E)},this.setOpaqueSort=function(E){it=E},this.setTransparentSort=function(E){ht=E},this.getClearColor=function(E){return E.copy(kt.getClearColor())},this.setClearColor=function(){kt.setClearColor.apply(kt,arguments)},this.getClearAlpha=function(){return kt.getClearAlpha()},this.setClearAlpha=function(){kt.setClearAlpha.apply(kt,arguments)},this.clear=function(E=!0,B=!0,Y=!0){let q=0;if(E){let k=!1;if(P!==null){const dt=P.texture.format;k=dt===Ha||dt===ka||dt===Ba}if(k){const dt=P.texture.type,St=dt===Rn||dt===hi||dt===ys||dt===Vi||dt===Fa||dt===Oa,Lt=kt.getClearColor(),It=kt.getClearAlpha(),Gt=Lt.r,qt=Lt.g,Dt=Lt.b;St?(g[0]=Gt,g[1]=qt,g[2]=Dt,g[3]=It,b.clearBufferuiv(b.COLOR,0,g)):(_[0]=Gt,_[1]=qt,_[2]=Dt,_[3]=It,b.clearBufferiv(b.COLOR,0,_))}else q|=b.COLOR_BUFFER_BIT}B&&(q|=b.DEPTH_BUFFER_BIT),Y&&(q|=b.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),b.clear(q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",et,!1),e.removeEventListener("webglcontextrestored",Et,!1),e.removeEventListener("webglcontextcreationerror",yt,!1),Tt.dispose(),jt.dispose(),ft.dispose(),y.dispose(),V.dispose(),tt.dispose(),ue.dispose(),z.dispose(),Pt.dispose(),J.dispose(),J.removeEventListener("sessionstart",sc),J.removeEventListener("sessionend",rc),$n.stop()};function et(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),D=!0}function Et(){console.log("THREE.WebGLRenderer: Context Restored."),D=!1;const E=Rt.autoReset,B=bt.enabled,Y=bt.autoUpdate,q=bt.needsUpdate,k=bt.type;vt(),Rt.autoReset=E,bt.enabled=B,bt.autoUpdate=Y,bt.needsUpdate=q,bt.type=k}function yt(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function Yt(E){const B=E.target;B.removeEventListener("dispose",Yt),xe(B)}function xe(E){Ue(E),ft.remove(E)}function Ue(E){const B=ft.get(E).programs;B!==void 0&&(B.forEach(function(Y){Pt.releaseProgram(Y)}),E.isShaderMaterial&&Pt.releaseShaderCache(E))}this.renderBufferDirect=function(E,B,Y,q,k,dt){B===null&&(B=Xt);const St=k.isMesh&&k.matrixWorld.determinant()<0,Lt=Gh(E,B,Y,q,k);st.setMaterial(q,St);let It=Y.index,Gt=1;if(q.wireframe===!0){if(It=nt.getWireframeAttribute(Y),It===void 0)return;Gt=2}const qt=Y.drawRange,Dt=Y.attributes.position;let ee=qt.start*Gt,de=(qt.start+qt.count)*Gt;dt!==null&&(ee=Math.max(ee,dt.start*Gt),de=Math.min(de,(dt.start+dt.count)*Gt)),It!==null?(ee=Math.max(ee,0),de=Math.min(de,It.count)):Dt!=null&&(ee=Math.max(ee,0),de=Math.min(de,Dt.count));const pe=de-ee;if(pe<0||pe===1/0)return;ue.setup(k,q,Lt,Y,It);let Ve,ne=At;if(It!==null&&(Ve=Q.get(It),ne=Qt,ne.setIndex(Ve)),k.isMesh)q.wireframe===!0?(st.setLineWidth(q.wireframeLinewidth*O()),ne.setMode(b.LINES)):ne.setMode(b.TRIANGLES);else if(k.isLine){let Nt=q.linewidth;Nt===void 0&&(Nt=1),st.setLineWidth(Nt*O()),k.isLineSegments?ne.setMode(b.LINES):k.isLineLoop?ne.setMode(b.LINE_LOOP):ne.setMode(b.LINE_STRIP)}else k.isPoints?ne.setMode(b.POINTS):k.isSprite&&ne.setMode(b.TRIANGLES);if(k.isBatchedMesh)if(k._multiDrawInstances!==null)ne.renderMultiDrawInstances(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount,k._multiDrawInstances);else if(Z.get("WEBGL_multi_draw"))ne.renderMultiDraw(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount);else{const Nt=k._multiDrawStarts,vn=k._multiDrawCounts,ie=k._multiDrawCount,nn=It?Q.get(It).bytesPerElement:1,gi=ft.get(q).currentProgram.getUniforms();for(let $e=0;$e<ie;$e++)gi.setValue(b,"_gl_DrawID",$e),ne.render(Nt[$e]/nn,vn[$e])}else if(k.isInstancedMesh)ne.renderInstances(ee,pe,k.count);else if(Y.isInstancedBufferGeometry){const Nt=Y._maxInstanceCount!==void 0?Y._maxInstanceCount:1/0,vn=Math.min(Y.instanceCount,Nt);ne.renderInstances(ee,pe,vn)}else ne.render(ee,pe)};function re(E,B,Y){E.transparent===!0&&E.side===Te&&E.forceSinglePass===!1?(E.side=De,E.needsUpdate=!0,Is(E,B,Y),E.side=Vn,E.needsUpdate=!0,Is(E,B,Y),E.side=Te):Is(E,B,Y)}this.compile=function(E,B,Y=null){Y===null&&(Y=E),p=jt.get(Y),p.init(B),M.push(p),Y.traverseVisible(function(k){k.isLight&&k.layers.test(B.layers)&&(p.pushLight(k),k.castShadow&&p.pushShadow(k))}),E!==Y&&E.traverseVisible(function(k){k.isLight&&k.layers.test(B.layers)&&(p.pushLight(k),k.castShadow&&p.pushShadow(k))}),p.setupLights();const q=new Set;return E.traverse(function(k){if(!(k.isMesh||k.isPoints||k.isLine||k.isSprite))return;const dt=k.material;if(dt)if(Array.isArray(dt))for(let St=0;St<dt.length;St++){const Lt=dt[St];re(Lt,Y,k),q.add(Lt)}else re(dt,Y,k),q.add(dt)}),M.pop(),p=null,q},this.compileAsync=function(E,B,Y=null){const q=this.compile(E,B,Y);return new Promise(k=>{function dt(){if(q.forEach(function(St){ft.get(St).currentProgram.isReady()&&q.delete(St)}),q.size===0){k(E);return}setTimeout(dt,10)}Z.get("KHR_parallel_shader_compile")!==null?dt():setTimeout(dt,10)})};let en=null;function _n(E){en&&en(E)}function sc(){$n.stop()}function rc(){$n.start()}const $n=new hh;$n.setAnimationLoop(_n),typeof self<"u"&&$n.setContext(self),this.setAnimationLoop=function(E){en=E,J.setAnimationLoop(E),E===null?$n.stop():$n.start()},J.addEventListener("sessionstart",sc),J.addEventListener("sessionend",rc),this.render=function(E,B){if(B!==void 0&&B.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(D===!0)return;if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),B.parent===null&&B.matrixWorldAutoUpdate===!0&&B.updateMatrixWorld(),J.enabled===!0&&J.isPresenting===!0&&(J.cameraAutoUpdate===!0&&J.updateCamera(B),B=J.getCamera()),E.isScene===!0&&E.onBeforeRender(v,E,B,P),p=jt.get(E,M.length),p.init(B),M.push(p),Ut.multiplyMatrices(B.projectionMatrix,B.matrixWorldInverse),j.setFromProjectionMatrix(Ut),_t=this.localClippingEnabled,rt=at.init(this.clippingPlanes,_t),m=Tt.get(E,w.length),m.init(),w.push(m),J.enabled===!0&&J.isPresenting===!0){const dt=v.xr.getDepthSensingMesh();dt!==null&&Br(dt,B,-1/0,v.sortObjects)}Br(E,B,0,v.sortObjects),m.finish(),v.sortObjects===!0&&m.sort(it,ht),U=J.enabled===!1||J.isPresenting===!1||J.hasDepthSensing()===!1,U&&kt.addToRenderList(m,E),this.info.render.frame++,rt===!0&&at.beginShadows();const Y=p.state.shadowsArray;bt.render(Y,E,B),rt===!0&&at.endShadows(),this.info.autoReset===!0&&this.info.reset();const q=m.opaque,k=m.transmissive;if(p.setupLights(),B.isArrayCamera){const dt=B.cameras;if(k.length>0)for(let St=0,Lt=dt.length;St<Lt;St++){const It=dt[St];ac(q,k,E,It)}U&&kt.render(E);for(let St=0,Lt=dt.length;St<Lt;St++){const It=dt[St];oc(m,E,It,It.viewport)}}else k.length>0&&ac(q,k,E,B),U&&kt.render(E),oc(m,E,B);P!==null&&(A.updateMultisampleRenderTarget(P),A.updateRenderTargetMipmap(P)),E.isScene===!0&&E.onAfterRender(v,E,B),ue.resetDefaultState(),S=-1,x=null,M.pop(),M.length>0?(p=M[M.length-1],rt===!0&&at.setGlobalState(v.clippingPlanes,p.state.camera)):p=null,w.pop(),w.length>0?m=w[w.length-1]:m=null};function Br(E,B,Y,q){if(E.visible===!1)return;if(E.layers.test(B.layers)){if(E.isGroup)Y=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(B);else if(E.isLight)p.pushLight(E),E.castShadow&&p.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||j.intersectsSprite(E)){q&&Ot.setFromMatrixPosition(E.matrixWorld).applyMatrix4(Ut);const St=tt.update(E),Lt=E.material;Lt.visible&&m.push(E,St,Lt,Y,Ot.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||j.intersectsObject(E))){const St=tt.update(E),Lt=E.material;if(q&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),Ot.copy(E.boundingSphere.center)):(St.boundingSphere===null&&St.computeBoundingSphere(),Ot.copy(St.boundingSphere.center)),Ot.applyMatrix4(E.matrixWorld).applyMatrix4(Ut)),Array.isArray(Lt)){const It=St.groups;for(let Gt=0,qt=It.length;Gt<qt;Gt++){const Dt=It[Gt],ee=Lt[Dt.materialIndex];ee&&ee.visible&&m.push(E,St,ee,Y,Ot.z,Dt)}}else Lt.visible&&m.push(E,St,Lt,Y,Ot.z,null)}}const dt=E.children;for(let St=0,Lt=dt.length;St<Lt;St++)Br(dt[St],B,Y,q)}function oc(E,B,Y,q){const k=E.opaque,dt=E.transmissive,St=E.transparent;p.setupLightsView(Y),rt===!0&&at.setGlobalState(v.clippingPlanes,Y),q&&st.viewport(C.copy(q)),k.length>0&&Ls(k,B,Y),dt.length>0&&Ls(dt,B,Y),St.length>0&&Ls(St,B,Y),st.buffers.depth.setTest(!0),st.buffers.depth.setMask(!0),st.buffers.color.setMask(!0),st.setPolygonOffset(!1)}function ac(E,B,Y,q){if((Y.isScene===!0?Y.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[q.id]===void 0&&(p.state.transmissionRenderTarget[q.id]=new ui(1,1,{generateMipmaps:!0,type:Z.has("EXT_color_buffer_half_float")||Z.has("EXT_color_buffer_float")?bs:Rn,minFilter:ci,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:te.workingColorSpace}));const dt=p.state.transmissionRenderTarget[q.id],St=q.viewport||C;dt.setSize(St.z,St.w);const Lt=v.getRenderTarget();v.setRenderTarget(dt),v.getClearColor(F),$=v.getClearAlpha(),$<1&&v.setClearColor(16777215,.5),v.clear(),U&&kt.render(Y);const It=v.toneMapping;v.toneMapping=Gn;const Gt=q.viewport;if(q.viewport!==void 0&&(q.viewport=void 0),p.setupLightsView(q),rt===!0&&at.setGlobalState(v.clippingPlanes,q),Ls(E,Y,q),A.updateMultisampleRenderTarget(dt),A.updateRenderTargetMipmap(dt),Z.has("WEBGL_multisampled_render_to_texture")===!1){let qt=!1;for(let Dt=0,ee=B.length;Dt<ee;Dt++){const de=B[Dt],pe=de.object,Ve=de.geometry,ne=de.material,Nt=de.group;if(ne.side===Te&&pe.layers.test(q.layers)){const vn=ne.side;ne.side=De,ne.needsUpdate=!0,cc(pe,Y,q,Ve,ne,Nt),ne.side=vn,ne.needsUpdate=!0,qt=!0}}qt===!0&&(A.updateMultisampleRenderTarget(dt),A.updateRenderTargetMipmap(dt))}v.setRenderTarget(Lt),v.setClearColor(F,$),Gt!==void 0&&(q.viewport=Gt),v.toneMapping=It}function Ls(E,B,Y){const q=B.isScene===!0?B.overrideMaterial:null;for(let k=0,dt=E.length;k<dt;k++){const St=E[k],Lt=St.object,It=St.geometry,Gt=q===null?St.material:q,qt=St.group;Lt.layers.test(Y.layers)&&cc(Lt,B,Y,It,Gt,qt)}}function cc(E,B,Y,q,k,dt){E.onBeforeRender(v,B,Y,q,k,dt),E.modelViewMatrix.multiplyMatrices(Y.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),k.onBeforeRender(v,B,Y,q,E,dt),k.transparent===!0&&k.side===Te&&k.forceSinglePass===!1?(k.side=De,k.needsUpdate=!0,v.renderBufferDirect(Y,B,q,k,E,dt),k.side=Vn,k.needsUpdate=!0,v.renderBufferDirect(Y,B,q,k,E,dt),k.side=Te):v.renderBufferDirect(Y,B,q,k,E,dt),E.onAfterRender(v,B,Y,q,k,dt)}function Is(E,B,Y){B.isScene!==!0&&(B=Xt);const q=ft.get(E),k=p.state.lights,dt=p.state.shadowsArray,St=k.state.version,Lt=Pt.getParameters(E,k.state,dt,B,Y),It=Pt.getProgramCacheKey(Lt);let Gt=q.programs;q.environment=E.isMeshStandardMaterial?B.environment:null,q.fog=B.fog,q.envMap=(E.isMeshStandardMaterial?V:y).get(E.envMap||q.environment),q.envMapRotation=q.environment!==null&&E.envMap===null?B.environmentRotation:E.envMapRotation,Gt===void 0&&(E.addEventListener("dispose",Yt),Gt=new Map,q.programs=Gt);let qt=Gt.get(It);if(qt!==void 0){if(q.currentProgram===qt&&q.lightsStateVersion===St)return hc(E,Lt),qt}else Lt.uniforms=Pt.getUniforms(E),E.onBeforeCompile(Lt,v),qt=Pt.acquireProgram(Lt,It),Gt.set(It,qt),q.uniforms=Lt.uniforms;const Dt=q.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(Dt.clippingPlanes=at.uniform),hc(E,Lt),q.needsLights=Wh(E),q.lightsStateVersion=St,q.needsLights&&(Dt.ambientLightColor.value=k.state.ambient,Dt.lightProbe.value=k.state.probe,Dt.directionalLights.value=k.state.directional,Dt.directionalLightShadows.value=k.state.directionalShadow,Dt.spotLights.value=k.state.spot,Dt.spotLightShadows.value=k.state.spotShadow,Dt.rectAreaLights.value=k.state.rectArea,Dt.ltc_1.value=k.state.rectAreaLTC1,Dt.ltc_2.value=k.state.rectAreaLTC2,Dt.pointLights.value=k.state.point,Dt.pointLightShadows.value=k.state.pointShadow,Dt.hemisphereLights.value=k.state.hemi,Dt.directionalShadowMap.value=k.state.directionalShadowMap,Dt.directionalShadowMatrix.value=k.state.directionalShadowMatrix,Dt.spotShadowMap.value=k.state.spotShadowMap,Dt.spotLightMatrix.value=k.state.spotLightMatrix,Dt.spotLightMap.value=k.state.spotLightMap,Dt.pointShadowMap.value=k.state.pointShadowMap,Dt.pointShadowMatrix.value=k.state.pointShadowMatrix),q.currentProgram=qt,q.uniformsList=null,qt}function lc(E){if(E.uniformsList===null){const B=E.currentProgram.getUniforms();E.uniformsList=pr.seqWithValue(B.seq,E.uniforms)}return E.uniformsList}function hc(E,B){const Y=ft.get(E);Y.outputColorSpace=B.outputColorSpace,Y.batching=B.batching,Y.batchingColor=B.batchingColor,Y.instancing=B.instancing,Y.instancingColor=B.instancingColor,Y.instancingMorph=B.instancingMorph,Y.skinning=B.skinning,Y.morphTargets=B.morphTargets,Y.morphNormals=B.morphNormals,Y.morphColors=B.morphColors,Y.morphTargetsCount=B.morphTargetsCount,Y.numClippingPlanes=B.numClippingPlanes,Y.numIntersection=B.numClipIntersection,Y.vertexAlphas=B.vertexAlphas,Y.vertexTangents=B.vertexTangents,Y.toneMapping=B.toneMapping}function Gh(E,B,Y,q,k){B.isScene!==!0&&(B=Xt),A.resetTextureUnits();const dt=B.fog,St=q.isMeshStandardMaterial?B.environment:null,Lt=P===null?v.outputColorSpace:P.isXRRenderTarget===!0?P.texture.colorSpace:Yi,It=(q.isMeshStandardMaterial?V:y).get(q.envMap||St),Gt=q.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,qt=!!Y.attributes.tangent&&(!!q.normalMap||q.anisotropy>0),Dt=!!Y.morphAttributes.position,ee=!!Y.morphAttributes.normal,de=!!Y.morphAttributes.color;let pe=Gn;q.toneMapped&&(P===null||P.isXRRenderTarget===!0)&&(pe=v.toneMapping);const Ve=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,ne=Ve!==void 0?Ve.length:0,Nt=ft.get(q),vn=p.state.lights;if(rt===!0&&(_t===!0||E!==x)){const Qe=E===x&&q.id===S;at.setState(q,E,Qe)}let ie=!1;q.version===Nt.__version?(Nt.needsLights&&Nt.lightsStateVersion!==vn.state.version||Nt.outputColorSpace!==Lt||k.isBatchedMesh&&Nt.batching===!1||!k.isBatchedMesh&&Nt.batching===!0||k.isBatchedMesh&&Nt.batchingColor===!0&&k.colorTexture===null||k.isBatchedMesh&&Nt.batchingColor===!1&&k.colorTexture!==null||k.isInstancedMesh&&Nt.instancing===!1||!k.isInstancedMesh&&Nt.instancing===!0||k.isSkinnedMesh&&Nt.skinning===!1||!k.isSkinnedMesh&&Nt.skinning===!0||k.isInstancedMesh&&Nt.instancingColor===!0&&k.instanceColor===null||k.isInstancedMesh&&Nt.instancingColor===!1&&k.instanceColor!==null||k.isInstancedMesh&&Nt.instancingMorph===!0&&k.morphTexture===null||k.isInstancedMesh&&Nt.instancingMorph===!1&&k.morphTexture!==null||Nt.envMap!==It||q.fog===!0&&Nt.fog!==dt||Nt.numClippingPlanes!==void 0&&(Nt.numClippingPlanes!==at.numPlanes||Nt.numIntersection!==at.numIntersection)||Nt.vertexAlphas!==Gt||Nt.vertexTangents!==qt||Nt.morphTargets!==Dt||Nt.morphNormals!==ee||Nt.morphColors!==de||Nt.toneMapping!==pe||Nt.morphTargetsCount!==ne)&&(ie=!0):(ie=!0,Nt.__version=q.version);let nn=Nt.currentProgram;ie===!0&&(nn=Is(q,B,k));let gi=!1,$e=!1,ji=!1;const me=nn.getUniforms(),un=Nt.uniforms;if(st.useProgram(nn.program)&&(gi=!0,$e=!0,ji=!0),q.id!==S&&(S=q.id,$e=!0),gi||x!==E){st.buffers.depth.getReversed()?(ut.copy(E.projectionMatrix),Uu(ut),Nu(ut),me.setValue(b,"projectionMatrix",ut)):me.setValue(b,"projectionMatrix",E.projectionMatrix),me.setValue(b,"viewMatrix",E.matrixWorldInverse);const Cn=me.map.cameraPosition;Cn!==void 0&&Cn.setValue(b,zt.setFromMatrixPosition(E.matrixWorld)),ot.logarithmicDepthBuffer&&me.setValue(b,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(q.isMeshPhongMaterial||q.isMeshToonMaterial||q.isMeshLambertMaterial||q.isMeshBasicMaterial||q.isMeshStandardMaterial||q.isShaderMaterial)&&me.setValue(b,"isOrthographic",E.isOrthographicCamera===!0),x!==E&&(x=E,$e=!0,ji=!0)}if(k.isSkinnedMesh){me.setOptional(b,k,"bindMatrix"),me.setOptional(b,k,"bindMatrixInverse");const Qe=k.skeleton;Qe&&(Qe.boneTexture===null&&Qe.computeBoneTexture(),me.setValue(b,"boneTexture",Qe.boneTexture,A))}k.isBatchedMesh&&(me.setOptional(b,k,"batchingTexture"),me.setValue(b,"batchingTexture",k._matricesTexture,A),me.setOptional(b,k,"batchingIdTexture"),me.setValue(b,"batchingIdTexture",k._indirectTexture,A),me.setOptional(b,k,"batchingColorTexture"),k._colorsTexture!==null&&me.setValue(b,"batchingColorTexture",k._colorsTexture,A));const Qi=Y.morphAttributes;if((Qi.position!==void 0||Qi.normal!==void 0||Qi.color!==void 0)&&Ht.update(k,Y,nn),($e||Nt.receiveShadow!==k.receiveShadow)&&(Nt.receiveShadow=k.receiveShadow,me.setValue(b,"receiveShadow",k.receiveShadow)),q.isMeshGouraudMaterial&&q.envMap!==null&&(un.envMap.value=It,un.flipEnvMap.value=It.isCubeTexture&&It.isRenderTargetTexture===!1?-1:1),q.isMeshStandardMaterial&&q.envMap===null&&B.environment!==null&&(un.envMapIntensity.value=B.environmentIntensity),$e&&(me.setValue(b,"toneMappingExposure",v.toneMappingExposure),Nt.needsLights&&Vh(un,ji),dt&&q.fog===!0&&gt.refreshFogUniforms(un,dt),gt.refreshMaterialUniforms(un,q,X,K,p.state.transmissionRenderTarget[E.id]),pr.upload(b,lc(Nt),un,A)),q.isShaderMaterial&&q.uniformsNeedUpdate===!0&&(pr.upload(b,lc(Nt),un,A),q.uniformsNeedUpdate=!1),q.isSpriteMaterial&&me.setValue(b,"center",k.center),me.setValue(b,"modelViewMatrix",k.modelViewMatrix),me.setValue(b,"normalMatrix",k.normalMatrix),me.setValue(b,"modelMatrix",k.matrixWorld),q.isShaderMaterial||q.isRawShaderMaterial){const Qe=q.uniformsGroups;for(let Cn=0,Pn=Qe.length;Cn<Pn;Cn++){const uc=Qe[Cn];z.update(uc,nn),z.bind(uc,nn)}}return nn}function Vh(E,B){E.ambientLightColor.needsUpdate=B,E.lightProbe.needsUpdate=B,E.directionalLights.needsUpdate=B,E.directionalLightShadows.needsUpdate=B,E.pointLights.needsUpdate=B,E.pointLightShadows.needsUpdate=B,E.spotLights.needsUpdate=B,E.spotLightShadows.needsUpdate=B,E.rectAreaLights.needsUpdate=B,E.hemisphereLights.needsUpdate=B}function Wh(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return T},this.getActiveMipmapLevel=function(){return R},this.getRenderTarget=function(){return P},this.setRenderTargetTextures=function(E,B,Y){ft.get(E.texture).__webglTexture=B,ft.get(E.depthTexture).__webglTexture=Y;const q=ft.get(E);q.__hasExternalTextures=!0,q.__autoAllocateDepthBuffer=Y===void 0,q.__autoAllocateDepthBuffer||Z.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),q.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(E,B){const Y=ft.get(E);Y.__webglFramebuffer=B,Y.__useDefaultFramebuffer=B===void 0},this.setRenderTarget=function(E,B=0,Y=0){P=E,T=B,R=Y;let q=!0,k=null,dt=!1,St=!1;if(E){const It=ft.get(E);if(It.__useDefaultFramebuffer!==void 0)st.bindFramebuffer(b.FRAMEBUFFER,null),q=!1;else if(It.__webglFramebuffer===void 0)A.setupRenderTarget(E);else if(It.__hasExternalTextures)A.rebindTextures(E,ft.get(E.texture).__webglTexture,ft.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){const Dt=E.depthTexture;if(It.__boundDepthTexture!==Dt){if(Dt!==null&&ft.has(Dt)&&(E.width!==Dt.image.width||E.height!==Dt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");A.setupDepthRenderbuffer(E)}}const Gt=E.texture;(Gt.isData3DTexture||Gt.isDataArrayTexture||Gt.isCompressedArrayTexture)&&(St=!0);const qt=ft.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(qt[B])?k=qt[B][Y]:k=qt[B],dt=!0):E.samples>0&&A.useMultisampledRTT(E)===!1?k=ft.get(E).__webglMultisampledFramebuffer:Array.isArray(qt)?k=qt[Y]:k=qt,C.copy(E.viewport),H.copy(E.scissor),N=E.scissorTest}else C.copy(pt).multiplyScalar(X).floor(),H.copy(wt).multiplyScalar(X).floor(),N=Ct;if(st.bindFramebuffer(b.FRAMEBUFFER,k)&&q&&st.drawBuffers(E,k),st.viewport(C),st.scissor(H),st.setScissorTest(N),dt){const It=ft.get(E.texture);b.framebufferTexture2D(b.FRAMEBUFFER,b.COLOR_ATTACHMENT0,b.TEXTURE_CUBE_MAP_POSITIVE_X+B,It.__webglTexture,Y)}else if(St){const It=ft.get(E.texture),Gt=B||0;b.framebufferTextureLayer(b.FRAMEBUFFER,b.COLOR_ATTACHMENT0,It.__webglTexture,Y||0,Gt)}S=-1},this.readRenderTargetPixels=function(E,B,Y,q,k,dt,St){if(!(E&&E.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Lt=ft.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&St!==void 0&&(Lt=Lt[St]),Lt){st.bindFramebuffer(b.FRAMEBUFFER,Lt);try{const It=E.texture,Gt=It.format,qt=It.type;if(!ot.textureFormatReadable(Gt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ot.textureTypeReadable(qt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}B>=0&&B<=E.width-q&&Y>=0&&Y<=E.height-k&&b.readPixels(B,Y,q,k,Kt.convert(Gt),Kt.convert(qt),dt)}finally{const It=P!==null?ft.get(P).__webglFramebuffer:null;st.bindFramebuffer(b.FRAMEBUFFER,It)}}},this.readRenderTargetPixelsAsync=async function(E,B,Y,q,k,dt,St){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Lt=ft.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&St!==void 0&&(Lt=Lt[St]),Lt){const It=E.texture,Gt=It.format,qt=It.type;if(!ot.textureFormatReadable(Gt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ot.textureTypeReadable(qt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(B>=0&&B<=E.width-q&&Y>=0&&Y<=E.height-k){st.bindFramebuffer(b.FRAMEBUFFER,Lt);const Dt=b.createBuffer();b.bindBuffer(b.PIXEL_PACK_BUFFER,Dt),b.bufferData(b.PIXEL_PACK_BUFFER,dt.byteLength,b.STREAM_READ),b.readPixels(B,Y,q,k,Kt.convert(Gt),Kt.convert(qt),0);const ee=P!==null?ft.get(P).__webglFramebuffer:null;st.bindFramebuffer(b.FRAMEBUFFER,ee);const de=b.fenceSync(b.SYNC_GPU_COMMANDS_COMPLETE,0);return b.flush(),await Du(b,de,4),b.bindBuffer(b.PIXEL_PACK_BUFFER,Dt),b.getBufferSubData(b.PIXEL_PACK_BUFFER,0,dt),b.deleteBuffer(Dt),b.deleteSync(de),dt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(E,B=null,Y=0){E.isTexture!==!0&&(fs("WebGLRenderer: copyFramebufferToTexture function signature has changed."),B=arguments[0]||null,E=arguments[1]);const q=Math.pow(2,-Y),k=Math.floor(E.image.width*q),dt=Math.floor(E.image.height*q),St=B!==null?B.x:0,Lt=B!==null?B.y:0;A.setTexture2D(E,0),b.copyTexSubImage2D(b.TEXTURE_2D,Y,0,0,St,Lt,k,dt),st.unbindTexture()},this.copyTextureToTexture=function(E,B,Y=null,q=null,k=0){E.isTexture!==!0&&(fs("WebGLRenderer: copyTextureToTexture function signature has changed."),q=arguments[0]||null,E=arguments[1],B=arguments[2],k=arguments[3]||0,Y=null);let dt,St,Lt,It,Gt,qt,Dt,ee,de;const pe=E.isCompressedTexture?E.mipmaps[k]:E.image;Y!==null?(dt=Y.max.x-Y.min.x,St=Y.max.y-Y.min.y,Lt=Y.isBox3?Y.max.z-Y.min.z:1,It=Y.min.x,Gt=Y.min.y,qt=Y.isBox3?Y.min.z:0):(dt=pe.width,St=pe.height,Lt=pe.depth||1,It=0,Gt=0,qt=0),q!==null?(Dt=q.x,ee=q.y,de=q.z):(Dt=0,ee=0,de=0);const Ve=Kt.convert(B.format),ne=Kt.convert(B.type);let Nt;B.isData3DTexture?(A.setTexture3D(B,0),Nt=b.TEXTURE_3D):B.isDataArrayTexture||B.isCompressedArrayTexture?(A.setTexture2DArray(B,0),Nt=b.TEXTURE_2D_ARRAY):(A.setTexture2D(B,0),Nt=b.TEXTURE_2D),b.pixelStorei(b.UNPACK_FLIP_Y_WEBGL,B.flipY),b.pixelStorei(b.UNPACK_PREMULTIPLY_ALPHA_WEBGL,B.premultiplyAlpha),b.pixelStorei(b.UNPACK_ALIGNMENT,B.unpackAlignment);const vn=b.getParameter(b.UNPACK_ROW_LENGTH),ie=b.getParameter(b.UNPACK_IMAGE_HEIGHT),nn=b.getParameter(b.UNPACK_SKIP_PIXELS),gi=b.getParameter(b.UNPACK_SKIP_ROWS),$e=b.getParameter(b.UNPACK_SKIP_IMAGES);b.pixelStorei(b.UNPACK_ROW_LENGTH,pe.width),b.pixelStorei(b.UNPACK_IMAGE_HEIGHT,pe.height),b.pixelStorei(b.UNPACK_SKIP_PIXELS,It),b.pixelStorei(b.UNPACK_SKIP_ROWS,Gt),b.pixelStorei(b.UNPACK_SKIP_IMAGES,qt);const ji=E.isDataArrayTexture||E.isData3DTexture,me=B.isDataArrayTexture||B.isData3DTexture;if(E.isRenderTargetTexture||E.isDepthTexture){const un=ft.get(E),Qi=ft.get(B),Qe=ft.get(un.__renderTarget),Cn=ft.get(Qi.__renderTarget);st.bindFramebuffer(b.READ_FRAMEBUFFER,Qe.__webglFramebuffer),st.bindFramebuffer(b.DRAW_FRAMEBUFFER,Cn.__webglFramebuffer);for(let Pn=0;Pn<Lt;Pn++)ji&&b.framebufferTextureLayer(b.READ_FRAMEBUFFER,b.COLOR_ATTACHMENT0,ft.get(E).__webglTexture,k,qt+Pn),E.isDepthTexture?(me&&b.framebufferTextureLayer(b.DRAW_FRAMEBUFFER,b.COLOR_ATTACHMENT0,ft.get(B).__webglTexture,k,de+Pn),b.blitFramebuffer(It,Gt,dt,St,Dt,ee,dt,St,b.DEPTH_BUFFER_BIT,b.NEAREST)):me?b.copyTexSubImage3D(Nt,k,Dt,ee,de+Pn,It,Gt,dt,St):b.copyTexSubImage2D(Nt,k,Dt,ee,de+Pn,It,Gt,dt,St);st.bindFramebuffer(b.READ_FRAMEBUFFER,null),st.bindFramebuffer(b.DRAW_FRAMEBUFFER,null)}else me?E.isDataTexture||E.isData3DTexture?b.texSubImage3D(Nt,k,Dt,ee,de,dt,St,Lt,Ve,ne,pe.data):B.isCompressedArrayTexture?b.compressedTexSubImage3D(Nt,k,Dt,ee,de,dt,St,Lt,Ve,pe.data):b.texSubImage3D(Nt,k,Dt,ee,de,dt,St,Lt,Ve,ne,pe):E.isDataTexture?b.texSubImage2D(b.TEXTURE_2D,k,Dt,ee,dt,St,Ve,ne,pe.data):E.isCompressedTexture?b.compressedTexSubImage2D(b.TEXTURE_2D,k,Dt,ee,pe.width,pe.height,Ve,pe.data):b.texSubImage2D(b.TEXTURE_2D,k,Dt,ee,dt,St,Ve,ne,pe);b.pixelStorei(b.UNPACK_ROW_LENGTH,vn),b.pixelStorei(b.UNPACK_IMAGE_HEIGHT,ie),b.pixelStorei(b.UNPACK_SKIP_PIXELS,nn),b.pixelStorei(b.UNPACK_SKIP_ROWS,gi),b.pixelStorei(b.UNPACK_SKIP_IMAGES,$e),k===0&&B.generateMipmaps&&b.generateMipmap(Nt),st.unbindTexture()},this.copyTextureToTexture3D=function(E,B,Y=null,q=null,k=0){return E.isTexture!==!0&&(fs("WebGLRenderer: copyTextureToTexture3D function signature has changed."),Y=arguments[0]||null,q=arguments[1]||null,E=arguments[2],B=arguments[3],k=arguments[4]||0),fs('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(E,B,Y,q,k)},this.initRenderTarget=function(E){ft.get(E).__webglFramebuffer===void 0&&A.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?A.setTextureCube(E,0):E.isData3DTexture?A.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?A.setTexture2DArray(E,0):A.setTexture2D(E,0),st.unbindTexture()},this.resetState=function(){T=0,R=0,P=null,st.reset(),ue.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Tn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorspace=te._getDrawingBufferColorSpace(t),e.unpackColorSpace=te._getUnpackColorSpace()}}class qa{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new Mt(t),this.density=e}clone(){return new qa(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class $a{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new Mt(t),this.near=e,this.far=n}clone(){return new $a(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class Sa extends Ae{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new hn,this.environmentIntensity=1,this.environmentRotation=new hn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class Ym extends ze{constructor(t=null,e=1,n=1,s,r,o,a,c,l=Je,h=Je,u,d){super(null,o,a,c,l,h,s,r,u,d),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ms extends je{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const Li=new oe,ll=new oe,tr=[],hl=new qn,qm=new oe,rs=new I,os=new Ki;class _o extends I{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new ms(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,qm)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new qn),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Li),hl.copy(t.boundingBox).applyMatrix4(Li),this.boundingBox.union(hl)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Ki),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Li),os.copy(t.boundingSphere).applyMatrix4(Li),this.boundingSphere.union(os)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,o=t*r+1;for(let a=0;a<n.length;a++)n[a]=s[o+a]}raycast(t,e){const n=this.matrixWorld,s=this.count;if(rs.geometry=this.geometry,rs.material=this.material,rs.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),os.copy(this.boundingSphere),os.applyMatrix4(n),t.ray.intersectsSphere(os)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Li),ll.multiplyMatrices(n,Li),rs.matrixWorld=ll,rs.raycast(t,tr);for(let o=0,a=tr.length;o<a;o++){const c=tr[o];c.instanceId=r,c.object=this,e.push(c)}tr.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new ms(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){const n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new Ym(new Float32Array(s*this.count),s,this.count,za,mn));const r=this.morphTexture.source.data.data;let o=0;for(let l=0;l<n.length;l++)o+=n[l];const a=this.geometry.morphTargetsRelative?1:1-o,c=s*t;r[c]=a,r.set(n,c+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class _h extends mi{static get type(){return"LineBasicMaterial"}constructor(t){super(),this.isLineBasicMaterial=!0,this.color=new Mt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const xr=new L,Mr=new L,ul=new oe,as=new Va,er=new Ki,vo=new L,dl=new L;class $m extends Ae{constructor(t=new Pe,e=new _h){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let s=1,r=e.count;s<r;s++)xr.fromBufferAttribute(e,s-1),Mr.fromBufferAttribute(e,s),n[s]=n[s-1],n[s]+=xr.distanceTo(Mr);t.setAttribute("lineDistance",new Jt(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const n=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),er.copy(n.boundingSphere),er.applyMatrix4(s),er.radius+=r,t.ray.intersectsSphere(er)===!1)return;ul.copy(s).invert(),as.copy(t.ray).applyMatrix4(ul);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=this.isLineSegments?2:1,h=n.index,d=n.attributes.position;if(h!==null){const f=Math.max(0,o.start),g=Math.min(h.count,o.start+o.count);for(let _=f,m=g-1;_<m;_+=l){const p=h.getX(_),w=h.getX(_+1),M=nr(this,t,as,c,p,w);M&&e.push(M)}if(this.isLineLoop){const _=h.getX(g-1),m=h.getX(f),p=nr(this,t,as,c,_,m);p&&e.push(p)}}else{const f=Math.max(0,o.start),g=Math.min(d.count,o.start+o.count);for(let _=f,m=g-1;_<m;_+=l){const p=nr(this,t,as,c,_,_+1);p&&e.push(p)}if(this.isLineLoop){const _=nr(this,t,as,c,g-1,f);_&&e.push(_)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function nr(i,t,e,n,s,r){const o=i.geometry.attributes.position;if(xr.fromBufferAttribute(o,s),Mr.fromBufferAttribute(o,r),e.distanceSqToSegment(xr,Mr,vo,dl)>n)return;vo.applyMatrix4(i.matrixWorld);const c=t.ray.origin.distanceTo(vo);if(!(c<t.near||c>t.far))return{distance:c,point:dl.clone().applyMatrix4(i.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:i}}const fl=new L,pl=new L;class Km extends $m{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[];for(let s=0,r=e.count;s<r;s+=2)fl.fromBufferAttribute(e,s),pl.fromBufferAttribute(e,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+fl.distanceTo(pl);t.setAttribute("lineDistance",new Jt(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Ka extends ze{constructor(t,e,n,s,r,o,a,c,l){super(t,e,n,s,r,o,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class gn{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,s=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){const n=this.getLengths();let s=0;const r=n.length;let o;e?o=e:o=t*n[r-1];let a=0,c=r-1,l;for(;a<=c;)if(s=Math.floor(a+(c-a)/2),l=n[s]-o,l<0)a=s+1;else if(l>0)c=s-1;else{c=s;break}if(s=c,n[s]===o)return s/(r-1);const h=n[s],d=n[s+1]-h,f=(o-h)/d;return(s+f)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);const o=this.getPoint(s),a=this.getPoint(r),c=e||(o.isVector2?new lt:new L);return c.copy(a).sub(o).normalize(),c}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){const n=new L,s=[],r=[],o=[],a=new L,c=new oe;for(let f=0;f<=t;f++){const g=f/t;s[f]=this.getTangentAt(g,new L)}r[0]=new L,o[0]=new L;let l=Number.MAX_VALUE;const h=Math.abs(s[0].x),u=Math.abs(s[0].y),d=Math.abs(s[0].z);h<=l&&(l=h,n.set(1,0,0)),u<=l&&(l=u,n.set(0,1,0)),d<=l&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let f=1;f<=t;f++){if(r[f]=r[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(s[f-1],s[f]),a.length()>Number.EPSILON){a.normalize();const g=Math.acos(be(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(c.makeRotationAxis(a,g))}o[f].crossVectors(s[f],r[f])}if(e===!0){let f=Math.acos(be(r[0].dot(r[t]),-1,1));f/=t,s[0].dot(a.crossVectors(r[0],r[t]))>0&&(f=-f);for(let g=1;g<=t;g++)r[g].applyMatrix4(c.makeRotationAxis(s[g],f*g)),o[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class Za extends gn{constructor(t=0,e=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=c}getPoint(t,e=new lt){const n=e,s=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);const a=this.aStartAngle+t*r;let c=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=c-this.aX,f=l-this.aY;c=d*h-f*u+this.aX,l=d*u+f*h+this.aY}return n.set(c,l)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class Zm extends Za{constructor(t,e,n,s,r,o){super(t,e,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}}function Ja(){let i=0,t=0,e=0,n=0;function s(r,o,a,c){i=r,t=a,e=-3*r+3*o-2*a-c,n=2*r-2*o+a+c}return{initCatmullRom:function(r,o,a,c,l){s(o,a,l*(a-r),l*(c-o))},initNonuniformCatmullRom:function(r,o,a,c,l,h,u){let d=(o-r)/l-(a-r)/(l+h)+(a-o)/h,f=(a-o)/h-(c-o)/(h+u)+(c-a)/u;d*=h,f*=h,s(o,a,d,f)},calc:function(r){const o=r*r,a=o*r;return i+t*r+e*o+n*a}}}const ir=new L,xo=new Ja,Mo=new Ja,yo=new Ja;class Jm extends gn{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new L){const n=e,s=this.points,r=s.length,o=(r-(this.closed?0:1))*t;let a=Math.floor(o),c=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:c===0&&a===r-1&&(a=r-2,c=1);let l,h;this.closed||a>0?l=s[(a-1)%r]:(ir.subVectors(s[0],s[1]).add(s[0]),l=ir);const u=s[a%r],d=s[(a+1)%r];if(this.closed||a+2<r?h=s[(a+2)%r]:(ir.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=ir),this.curveType==="centripetal"||this.curveType==="chordal"){const f=this.curveType==="chordal"?.5:.25;let g=Math.pow(l.distanceToSquared(u),f),_=Math.pow(u.distanceToSquared(d),f),m=Math.pow(d.distanceToSquared(h),f);_<1e-4&&(_=1),g<1e-4&&(g=_),m<1e-4&&(m=_),xo.initNonuniformCatmullRom(l.x,u.x,d.x,h.x,g,_,m),Mo.initNonuniformCatmullRom(l.y,u.y,d.y,h.y,g,_,m),yo.initNonuniformCatmullRom(l.z,u.z,d.z,h.z,g,_,m)}else this.curveType==="catmullrom"&&(xo.initCatmullRom(l.x,u.x,d.x,h.x,this.tension),Mo.initCatmullRom(l.y,u.y,d.y,h.y,this.tension),yo.initCatmullRom(l.z,u.z,d.z,h.z,this.tension));return n.set(xo.calc(c),Mo.calc(c),yo.calc(c)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new L().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function ml(i,t,e,n,s){const r=(n-t)*.5,o=(s-e)*.5,a=i*i,c=i*a;return(2*e-2*n+r+o)*c+(-3*e+3*n-2*r-o)*a+r*i+e}function jm(i,t){const e=1-i;return e*e*t}function Qm(i,t){return 2*(1-i)*i*t}function tg(i,t){return i*i*t}function gs(i,t,e,n){return jm(i,t)+Qm(i,e)+tg(i,n)}function eg(i,t){const e=1-i;return e*e*e*t}function ng(i,t){const e=1-i;return 3*e*e*i*t}function ig(i,t){return 3*(1-i)*i*i*t}function sg(i,t){return i*i*i*t}function _s(i,t,e,n,s){return eg(i,t)+ng(i,e)+ig(i,n)+sg(i,s)}class vh extends gn{constructor(t=new lt,e=new lt,n=new lt,s=new lt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new lt){const n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(_s(t,s.x,r.x,o.x,a.x),_s(t,s.y,r.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class rg extends gn{constructor(t=new L,e=new L,n=new L,s=new L){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new L){const n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(_s(t,s.x,r.x,o.x,a.x),_s(t,s.y,r.y,o.y,a.y),_s(t,s.z,r.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class xh extends gn{constructor(t=new lt,e=new lt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new lt){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new lt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class og extends gn{constructor(t=new L,e=new L){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new L){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new L){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Mh extends gn{constructor(t=new lt,e=new lt,n=new lt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new lt){const n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(gs(t,s.x,r.x,o.x),gs(t,s.y,r.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class ag extends gn{constructor(t=new L,e=new L,n=new L){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new L){const n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(gs(t,s.x,r.x,o.x),gs(t,s.y,r.y,o.y),gs(t,s.z,r.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class yh extends gn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new lt){const n=e,s=this.points,r=(s.length-1)*t,o=Math.floor(r),a=r-o,c=s[o===0?o:o-1],l=s[o],h=s[o>s.length-2?s.length-1:o+1],u=s[o>s.length-3?s.length-1:o+2];return n.set(ml(a,c.x,l.x,h.x,u.x),ml(a,c.y,l.y,h.y,u.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new lt().fromArray(s))}return this}}var wa=Object.freeze({__proto__:null,ArcCurve:Zm,CatmullRomCurve3:Jm,CubicBezierCurve:vh,CubicBezierCurve3:rg,EllipseCurve:Za,LineCurve:xh,LineCurve3:og,QuadraticBezierCurve:Mh,QuadraticBezierCurve3:ag,SplineCurve:yh});class cg extends gn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new wa[n](e,t))}return this}getPoint(t,e){const n=t*this.getLength(),s=this.getCurveLengths();let r=0;for(;r<s.length;){if(s[r]>=n){const o=s[r]-n,a=this.curves[r],c=a.getLength(),l=c===0?0:1-o/c;return a.getPointAt(l,e)}r++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let n;for(let s=0,r=this.curves;s<r.length;s++){const o=r[s],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,c=o.getPoints(a);for(let l=0;l<c.length;l++){const h=c[l];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){const s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const s=t.curves[e];this.curves.push(new wa[s.type]().fromJSON(s))}return this}}class Ea extends cg{constructor(t){super(),this.type="Path",this.currentPoint=new lt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const n=new xh(this.currentPoint.clone(),new lt(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){const r=new Mh(this.currentPoint.clone(),new lt(t,e),new lt(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,r,o){const a=new vh(this.currentPoint.clone(),new lt(t,e),new lt(n,s),new lt(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),n=new yh(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,r,o){const a=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(t+a,e+c,n,s,r,o),this}absarc(t,e,n,s,r,o){return this.absellipse(t,e,n,n,s,r,o),this}ellipse(t,e,n,s,r,o,a,c){const l=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+l,e+h,n,s,r,o,a,c),this}absellipse(t,e,n,s,r,o,a,c){const l=new Za(t,e,n,s,r,o,a,c);if(this.curves.length>0){const u=l.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(l);const h=l.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class Ur extends Pe{constructor(t=[new lt(0,-.5),new lt(.5,0),new lt(0,.5)],e=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:s},e=Math.floor(e),s=be(s,0,Math.PI*2);const r=[],o=[],a=[],c=[],l=[],h=1/e,u=new L,d=new lt,f=new L,g=new L,_=new L;let m=0,p=0;for(let w=0;w<=t.length-1;w++)switch(w){case 0:m=t[w+1].x-t[w].x,p=t[w+1].y-t[w].y,f.x=p*1,f.y=-m,f.z=p*0,_.copy(f),f.normalize(),c.push(f.x,f.y,f.z);break;case t.length-1:c.push(_.x,_.y,_.z);break;default:m=t[w+1].x-t[w].x,p=t[w+1].y-t[w].y,f.x=p*1,f.y=-m,f.z=p*0,g.copy(f),f.x+=_.x,f.y+=_.y,f.z+=_.z,f.normalize(),c.push(f.x,f.y,f.z),_.copy(g)}for(let w=0;w<=e;w++){const M=n+w*h*s,v=Math.sin(M),D=Math.cos(M);for(let T=0;T<=t.length-1;T++){u.x=t[T].x*v,u.y=t[T].y,u.z=t[T].x*D,o.push(u.x,u.y,u.z),d.x=w/e,d.y=T/(t.length-1),a.push(d.x,d.y);const R=c[3*T+0]*v,P=c[3*T+1],S=c[3*T+0]*D;l.push(R,P,S)}}for(let w=0;w<e;w++)for(let M=0;M<t.length-1;M++){const v=M+w*t.length,D=v,T=v+t.length,R=v+t.length+1,P=v+1;r.push(D,T,P),r.push(R,P,T)}this.setIndex(r),this.setAttribute("position",new Jt(o,3)),this.setAttribute("uv",new Jt(a,2)),this.setAttribute("normal",new Jt(l,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ur(t.points,t.segments,t.phiStart,t.phiLength)}}class kn extends Ur{constructor(t=1,e=1,n=4,s=8){const r=new Ea;r.absarc(0,-e/2,t,Math.PI*1.5,0),r.absarc(0,e/2,t,0,Math.PI*.5),super(r.getPoints(n),s),this.type="CapsuleGeometry",this.parameters={radius:t,length:e,capSegments:n,radialSegments:s}}static fromJSON(t){return new kn(t.radius,t.length,t.capSegments,t.radialSegments)}}class qe extends Pe{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);const r=[],o=[],a=[],c=[],l=new L,h=new lt;o.push(0,0,0),a.push(0,0,1),c.push(.5,.5);for(let u=0,d=3;u<=e;u++,d+=3){const f=n+u/e*s;l.x=t*Math.cos(f),l.y=t*Math.sin(f),o.push(l.x,l.y,l.z),a.push(0,0,1),h.x=(o[d]/t+1)/2,h.y=(o[d+1]/t+1)/2,c.push(h.x,h.y)}for(let u=1;u<=e;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new Jt(o,3)),this.setAttribute("normal",new Jt(a,3)),this.setAttribute("uv",new Jt(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new qe(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class Wt extends Pe{constructor(t=1,e=1,n=1,s=32,r=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:c};const l=this;s=Math.floor(s),r=Math.floor(r);const h=[],u=[],d=[],f=[];let g=0;const _=[],m=n/2;let p=0;w(),o===!1&&(t>0&&M(!0),e>0&&M(!1)),this.setIndex(h),this.setAttribute("position",new Jt(u,3)),this.setAttribute("normal",new Jt(d,3)),this.setAttribute("uv",new Jt(f,2));function w(){const v=new L,D=new L;let T=0;const R=(e-t)/n;for(let P=0;P<=r;P++){const S=[],x=P/r,C=x*(e-t)+t;for(let H=0;H<=s;H++){const N=H/s,F=N*c+a,$=Math.sin(F),G=Math.cos(F);D.x=C*$,D.y=-x*n+m,D.z=C*G,u.push(D.x,D.y,D.z),v.set($,R,G).normalize(),d.push(v.x,v.y,v.z),f.push(N,1-x),S.push(g++)}_.push(S)}for(let P=0;P<s;P++)for(let S=0;S<r;S++){const x=_[S][P],C=_[S+1][P],H=_[S+1][P+1],N=_[S][P+1];(t>0||S!==0)&&(h.push(x,C,N),T+=3),(e>0||S!==r-1)&&(h.push(C,H,N),T+=3)}l.addGroup(p,T,0),p+=T}function M(v){const D=g,T=new lt,R=new L;let P=0;const S=v===!0?t:e,x=v===!0?1:-1;for(let H=1;H<=s;H++)u.push(0,m*x,0),d.push(0,x,0),f.push(.5,.5),g++;const C=g;for(let H=0;H<=s;H++){const F=H/s*c+a,$=Math.cos(F),G=Math.sin(F);R.x=S*G,R.y=m*x,R.z=S*$,u.push(R.x,R.y,R.z),d.push(0,x,0),T.x=$*.5+.5,T.y=G*.5*x+.5,f.push(T.x,T.y),g++}for(let H=0;H<s;H++){const N=D+H,F=C+H;v===!0?h.push(F,F+1,N):h.push(F+1,F,N),P+=3}l.addGroup(p,P,v===!0?1:2),p+=P}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Wt(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class se extends Wt{constructor(t=1,e=1,n=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,t,e,n,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(t){return new se(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Rs extends Pe{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};const r=[],o=[];a(s),l(n),h(),this.setAttribute("position",new Jt(r,3)),this.setAttribute("normal",new Jt(r.slice(),3)),this.setAttribute("uv",new Jt(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(w){const M=new L,v=new L,D=new L;for(let T=0;T<e.length;T+=3)f(e[T+0],M),f(e[T+1],v),f(e[T+2],D),c(M,v,D,w)}function c(w,M,v,D){const T=D+1,R=[];for(let P=0;P<=T;P++){R[P]=[];const S=w.clone().lerp(v,P/T),x=M.clone().lerp(v,P/T),C=T-P;for(let H=0;H<=C;H++)H===0&&P===T?R[P][H]=S:R[P][H]=S.clone().lerp(x,H/C)}for(let P=0;P<T;P++)for(let S=0;S<2*(T-P)-1;S++){const x=Math.floor(S/2);S%2===0?(d(R[P][x+1]),d(R[P+1][x]),d(R[P][x])):(d(R[P][x+1]),d(R[P+1][x+1]),d(R[P+1][x]))}}function l(w){const M=new L;for(let v=0;v<r.length;v+=3)M.x=r[v+0],M.y=r[v+1],M.z=r[v+2],M.normalize().multiplyScalar(w),r[v+0]=M.x,r[v+1]=M.y,r[v+2]=M.z}function h(){const w=new L;for(let M=0;M<r.length;M+=3){w.x=r[M+0],w.y=r[M+1],w.z=r[M+2];const v=m(w)/2/Math.PI+.5,D=p(w)/Math.PI+.5;o.push(v,1-D)}g(),u()}function u(){for(let w=0;w<o.length;w+=6){const M=o[w+0],v=o[w+2],D=o[w+4],T=Math.max(M,v,D),R=Math.min(M,v,D);T>.9&&R<.1&&(M<.2&&(o[w+0]+=1),v<.2&&(o[w+2]+=1),D<.2&&(o[w+4]+=1))}}function d(w){r.push(w.x,w.y,w.z)}function f(w,M){const v=w*3;M.x=t[v+0],M.y=t[v+1],M.z=t[v+2]}function g(){const w=new L,M=new L,v=new L,D=new L,T=new lt,R=new lt,P=new lt;for(let S=0,x=0;S<r.length;S+=9,x+=6){w.set(r[S+0],r[S+1],r[S+2]),M.set(r[S+3],r[S+4],r[S+5]),v.set(r[S+6],r[S+7],r[S+8]),T.set(o[x+0],o[x+1]),R.set(o[x+2],o[x+3]),P.set(o[x+4],o[x+5]),D.copy(w).add(M).add(v).divideScalar(3);const C=m(D);_(T,x+0,w,C),_(R,x+2,M,C),_(P,x+4,v,C)}}function _(w,M,v,D){D<0&&w.x===1&&(o[M]=w.x-1),v.x===0&&v.z===0&&(o[M]=D/2/Math.PI+.5)}function m(w){return Math.atan2(w.z,-w.x)}function p(w){return Math.atan2(-w.y,Math.sqrt(w.x*w.x+w.z*w.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Rs(t.vertices,t.indices,t.radius,t.details)}}class Xn extends Rs{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,s=1/n,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-s,-n,0,-s,n,0,s,-n,0,s,n,-s,-n,0,-s,n,0,s,-n,0,s,n,0,-n,0,-s,n,0,-s,-n,0,s,n,0,s],o=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,o,t,e),this.type="DodecahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new Xn(t.radius,t.detail)}}class yr extends Ea{constructor(t){super(t),this.uuid=$i(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let n=0,s=this.holes.length;n<s;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){const s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const s=t.holes[e];this.holes.push(new Ea().fromJSON(s))}return this}}const lg={triangulate:function(i,t,e=2){const n=t&&t.length,s=n?t[0]*e:i.length;let r=Sh(i,0,s,e,!0);const o=[];if(!r||r.next===r.prev)return o;let a,c,l,h,u,d,f;if(n&&(r=pg(i,t,r,e)),i.length>80*e){a=l=i[0],c=h=i[1];for(let g=e;g<s;g+=e)u=i[g],d=i[g+1],u<a&&(a=u),d<c&&(c=d),u>l&&(l=u),d>h&&(h=d);f=Math.max(l-a,h-c),f=f!==0?32767/f:0}return Ss(r,o,e,a,c,f,0),o}};function Sh(i,t,e,n,s){let r,o;if(s===Tg(i,t,e,n)>0)for(r=t;r<e;r+=n)o=gl(r,i[r],i[r+1],o);else for(r=e-n;r>=t;r-=n)o=gl(r,i[r],i[r+1],o);return o&&Nr(o,o.next)&&(Es(o),o=o.next),o}function di(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(Nr(e,e.next)||ve(e.prev,e,e.next)===0)){if(Es(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function Ss(i,t,e,n,s,r,o){if(!i)return;!o&&r&&xg(i,n,s,r);let a=i,c,l;for(;i.prev!==i.next;){if(c=i.prev,l=i.next,r?ug(i,n,s,r):hg(i)){t.push(c.i/e|0),t.push(i.i/e|0),t.push(l.i/e|0),Es(i),i=l.next,a=l.next;continue}if(i=l,i===a){o?o===1?(i=dg(di(i),t,e),Ss(i,t,e,n,s,r,2)):o===2&&fg(i,t,e,n,s,r):Ss(di(i),t,e,n,s,r,1);break}}}function hg(i){const t=i.prev,e=i,n=i.next;if(ve(t,e,n)>=0)return!1;const s=t.x,r=e.x,o=n.x,a=t.y,c=e.y,l=n.y,h=s<r?s<o?s:o:r<o?r:o,u=a<c?a<l?a:l:c<l?c:l,d=s>r?s>o?s:o:r>o?r:o,f=a>c?a>l?a:l:c>l?c:l;let g=n.next;for(;g!==t;){if(g.x>=h&&g.x<=d&&g.y>=u&&g.y<=f&&Di(s,a,r,c,o,l,g.x,g.y)&&ve(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function ug(i,t,e,n){const s=i.prev,r=i,o=i.next;if(ve(s,r,o)>=0)return!1;const a=s.x,c=r.x,l=o.x,h=s.y,u=r.y,d=o.y,f=a<c?a<l?a:l:c<l?c:l,g=h<u?h<d?h:d:u<d?u:d,_=a>c?a>l?a:l:c>l?c:l,m=h>u?h>d?h:d:u>d?u:d,p=Ta(f,g,t,e,n),w=Ta(_,m,t,e,n);let M=i.prevZ,v=i.nextZ;for(;M&&M.z>=p&&v&&v.z<=w;){if(M.x>=f&&M.x<=_&&M.y>=g&&M.y<=m&&M!==s&&M!==o&&Di(a,h,c,u,l,d,M.x,M.y)&&ve(M.prev,M,M.next)>=0||(M=M.prevZ,v.x>=f&&v.x<=_&&v.y>=g&&v.y<=m&&v!==s&&v!==o&&Di(a,h,c,u,l,d,v.x,v.y)&&ve(v.prev,v,v.next)>=0))return!1;v=v.nextZ}for(;M&&M.z>=p;){if(M.x>=f&&M.x<=_&&M.y>=g&&M.y<=m&&M!==s&&M!==o&&Di(a,h,c,u,l,d,M.x,M.y)&&ve(M.prev,M,M.next)>=0)return!1;M=M.prevZ}for(;v&&v.z<=w;){if(v.x>=f&&v.x<=_&&v.y>=g&&v.y<=m&&v!==s&&v!==o&&Di(a,h,c,u,l,d,v.x,v.y)&&ve(v.prev,v,v.next)>=0)return!1;v=v.nextZ}return!0}function dg(i,t,e){let n=i;do{const s=n.prev,r=n.next.next;!Nr(s,r)&&wh(s,n,n.next,r)&&ws(s,r)&&ws(r,s)&&(t.push(s.i/e|0),t.push(n.i/e|0),t.push(r.i/e|0),Es(n),Es(n.next),n=i=r),n=n.next}while(n!==i);return di(n)}function fg(i,t,e,n,s,r){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&Sg(o,a)){let c=Eh(o,a);o=di(o,o.next),c=di(c,c.next),Ss(o,t,e,n,s,r,0),Ss(c,t,e,n,s,r,0);return}a=a.next}o=o.next}while(o!==i)}function pg(i,t,e,n){const s=[];let r,o,a,c,l;for(r=0,o=t.length;r<o;r++)a=t[r]*n,c=r<o-1?t[r+1]*n:i.length,l=Sh(i,a,c,n,!1),l===l.next&&(l.steiner=!0),s.push(yg(l));for(s.sort(mg),r=0;r<s.length;r++)e=gg(s[r],e);return e}function mg(i,t){return i.x-t.x}function gg(i,t){const e=_g(i,t);if(!e)return t;const n=Eh(e,i);return di(n,n.next),di(e,e.next)}function _g(i,t){let e=t,n=-1/0,s;const r=i.x,o=i.y;do{if(o<=e.y&&o>=e.next.y&&e.next.y!==e.y){const d=e.x+(o-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(d<=r&&d>n&&(n=d,s=e.x<e.next.x?e:e.next,d===r))return s}e=e.next}while(e!==t);if(!s)return null;const a=s,c=s.x,l=s.y;let h=1/0,u;e=s;do r>=e.x&&e.x>=c&&r!==e.x&&Di(o<l?r:n,o,c,l,o<l?n:r,o,e.x,e.y)&&(u=Math.abs(o-e.y)/(r-e.x),ws(e,i)&&(u<h||u===h&&(e.x>s.x||e.x===s.x&&vg(s,e)))&&(s=e,h=u)),e=e.next;while(e!==a);return s}function vg(i,t){return ve(i.prev,i,t.prev)<0&&ve(t.next,i,i.next)<0}function xg(i,t,e,n){let s=i;do s.z===0&&(s.z=Ta(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,Mg(s)}function Mg(i){let t,e,n,s,r,o,a,c,l=1;do{for(e=i,i=null,r=null,o=0;e;){for(o++,n=e,a=0,t=0;t<l&&(a++,n=n.nextZ,!!n);t++);for(c=l;a>0||c>0&&n;)a!==0&&(c===0||!n||e.z<=n.z)?(s=e,e=e.nextZ,a--):(s=n,n=n.nextZ,c--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;e=n}r.nextZ=null,l*=2}while(o>1);return i}function Ta(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function yg(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function Di(i,t,e,n,s,r,o,a){return(s-o)*(t-a)>=(i-o)*(r-a)&&(i-o)*(n-a)>=(e-o)*(t-a)&&(e-o)*(r-a)>=(s-o)*(n-a)}function Sg(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!wg(i,t)&&(ws(i,t)&&ws(t,i)&&Eg(i,t)&&(ve(i.prev,i,t.prev)||ve(i,t.prev,t))||Nr(i,t)&&ve(i.prev,i,i.next)>0&&ve(t.prev,t,t.next)>0)}function ve(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function Nr(i,t){return i.x===t.x&&i.y===t.y}function wh(i,t,e,n){const s=rr(ve(i,t,e)),r=rr(ve(i,t,n)),o=rr(ve(e,n,i)),a=rr(ve(e,n,t));return!!(s!==r&&o!==a||s===0&&sr(i,e,t)||r===0&&sr(i,n,t)||o===0&&sr(e,i,n)||a===0&&sr(e,t,n))}function sr(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function rr(i){return i>0?1:i<0?-1:0}function wg(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&wh(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function ws(i,t){return ve(i.prev,i,i.next)<0?ve(i,t,i.next)>=0&&ve(i,i.prev,t)>=0:ve(i,t,i.prev)<0||ve(i,i.next,t)<0}function Eg(i,t){let e=i,n=!1;const s=(i.x+t.x)/2,r=(i.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function Eh(i,t){const e=new ba(i.i,i.x,i.y),n=new ba(t.i,t.x,t.y),s=i.next,r=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function gl(i,t,e,n){const s=new ba(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function Es(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function ba(i,t,e){this.i=i,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function Tg(i,t,e,n){let s=0;for(let r=t,o=e-n;r<e;r+=n)s+=(i[o]-i[r])*(i[r+1]+i[o+1]),o=r;return s}class vs{static area(t){const e=t.length;let n=0;for(let s=e-1,r=0;r<e;s=r++)n+=t[s].x*t[r].y-t[r].x*t[s].y;return n*.5}static isClockWise(t){return vs.area(t)<0}static triangulateShape(t,e){const n=[],s=[],r=[];_l(t),vl(n,t);let o=t.length;e.forEach(_l);for(let c=0;c<e.length;c++)s.push(o),o+=e[c].length,vl(n,e[c]);const a=lg.triangulate(n,s);for(let c=0;c<a.length;c+=3)r.push(a.slice(c,c+3));return r}}function _l(i){const t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function vl(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}class Ts extends Pe{constructor(t=new yr([new lt(.5,.5),new lt(-.5,.5),new lt(-.5,-.5),new lt(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];const n=this,s=[],r=[];for(let a=0,c=t.length;a<c;a++){const l=t[a];o(l)}this.setAttribute("position",new Jt(s,3)),this.setAttribute("uv",new Jt(r,2)),this.computeVertexNormals();function o(a){const c=[],l=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,u=e.depth!==void 0?e.depth:1;let d=e.bevelEnabled!==void 0?e.bevelEnabled:!0,f=e.bevelThickness!==void 0?e.bevelThickness:.2,g=e.bevelSize!==void 0?e.bevelSize:f-.1,_=e.bevelOffset!==void 0?e.bevelOffset:0,m=e.bevelSegments!==void 0?e.bevelSegments:3;const p=e.extrudePath,w=e.UVGenerator!==void 0?e.UVGenerator:bg;let M,v=!1,D,T,R,P;p&&(M=p.getSpacedPoints(h),v=!0,d=!1,D=p.computeFrenetFrames(h,!1),T=new L,R=new L,P=new L),d||(m=0,f=0,g=0,_=0);const S=a.extractPoints(l);let x=S.shape;const C=S.holes;if(!vs.isClockWise(x)){x=x.reverse();for(let U=0,O=C.length;U<O;U++){const b=C[U];vs.isClockWise(b)&&(C[U]=b.reverse())}}const N=vs.triangulateShape(x,C),F=x;for(let U=0,O=C.length;U<O;U++){const b=C[U];x=x.concat(b)}function $(U,O,b){return O||console.error("THREE.ExtrudeGeometry: vec does not exist"),U.clone().addScaledVector(O,b)}const G=x.length,K=N.length;function X(U,O,b){let ct,Z,ot;const st=U.x-O.x,Rt=U.y-O.y,ft=b.x-U.x,A=b.y-U.y,y=st*st+Rt*Rt,V=st*A-Rt*ft;if(Math.abs(V)>Number.EPSILON){const Q=Math.sqrt(y),nt=Math.sqrt(ft*ft+A*A),tt=O.x-Rt/Q,Pt=O.y+st/Q,gt=b.x-A/nt,Tt=b.y+ft/nt,jt=((gt-tt)*A-(Tt-Pt)*ft)/(st*A-Rt*ft);ct=tt+st*jt-U.x,Z=Pt+Rt*jt-U.y;const at=ct*ct+Z*Z;if(at<=2)return new lt(ct,Z);ot=Math.sqrt(at/2)}else{let Q=!1;st>Number.EPSILON?ft>Number.EPSILON&&(Q=!0):st<-Number.EPSILON?ft<-Number.EPSILON&&(Q=!0):Math.sign(Rt)===Math.sign(A)&&(Q=!0),Q?(ct=-Rt,Z=st,ot=Math.sqrt(y)):(ct=st,Z=Rt,ot=Math.sqrt(y/2))}return new lt(ct/ot,Z/ot)}const it=[];for(let U=0,O=F.length,b=O-1,ct=U+1;U<O;U++,b++,ct++)b===O&&(b=0),ct===O&&(ct=0),it[U]=X(F[U],F[b],F[ct]);const ht=[];let pt,wt=it.concat();for(let U=0,O=C.length;U<O;U++){const b=C[U];pt=[];for(let ct=0,Z=b.length,ot=Z-1,st=ct+1;ct<Z;ct++,ot++,st++)ot===Z&&(ot=0),st===Z&&(st=0),pt[ct]=X(b[ct],b[ot],b[st]);ht.push(pt),wt=wt.concat(pt)}for(let U=0;U<m;U++){const O=U/m,b=f*Math.cos(O*Math.PI/2),ct=g*Math.sin(O*Math.PI/2)+_;for(let Z=0,ot=F.length;Z<ot;Z++){const st=$(F[Z],it[Z],ct);ut(st.x,st.y,-b)}for(let Z=0,ot=C.length;Z<ot;Z++){const st=C[Z];pt=ht[Z];for(let Rt=0,ft=st.length;Rt<ft;Rt++){const A=$(st[Rt],pt[Rt],ct);ut(A.x,A.y,-b)}}}const Ct=g+_;for(let U=0;U<G;U++){const O=d?$(x[U],wt[U],Ct):x[U];v?(R.copy(D.normals[0]).multiplyScalar(O.x),T.copy(D.binormals[0]).multiplyScalar(O.y),P.copy(M[0]).add(R).add(T),ut(P.x,P.y,P.z)):ut(O.x,O.y,0)}for(let U=1;U<=h;U++)for(let O=0;O<G;O++){const b=d?$(x[O],wt[O],Ct):x[O];v?(R.copy(D.normals[U]).multiplyScalar(b.x),T.copy(D.binormals[U]).multiplyScalar(b.y),P.copy(M[U]).add(R).add(T),ut(P.x,P.y,P.z)):ut(b.x,b.y,u/h*U)}for(let U=m-1;U>=0;U--){const O=U/m,b=f*Math.cos(O*Math.PI/2),ct=g*Math.sin(O*Math.PI/2)+_;for(let Z=0,ot=F.length;Z<ot;Z++){const st=$(F[Z],it[Z],ct);ut(st.x,st.y,u+b)}for(let Z=0,ot=C.length;Z<ot;Z++){const st=C[Z];pt=ht[Z];for(let Rt=0,ft=st.length;Rt<ft;Rt++){const A=$(st[Rt],pt[Rt],ct);v?ut(A.x,A.y+M[h-1].y,M[h-1].x+b):ut(A.x,A.y,u+b)}}}j(),rt();function j(){const U=s.length/3;if(d){let O=0,b=G*O;for(let ct=0;ct<K;ct++){const Z=N[ct];Ut(Z[2]+b,Z[1]+b,Z[0]+b)}O=h+m*2,b=G*O;for(let ct=0;ct<K;ct++){const Z=N[ct];Ut(Z[0]+b,Z[1]+b,Z[2]+b)}}else{for(let O=0;O<K;O++){const b=N[O];Ut(b[2],b[1],b[0])}for(let O=0;O<K;O++){const b=N[O];Ut(b[0]+G*h,b[1]+G*h,b[2]+G*h)}}n.addGroup(U,s.length/3-U,0)}function rt(){const U=s.length/3;let O=0;_t(F,O),O+=F.length;for(let b=0,ct=C.length;b<ct;b++){const Z=C[b];_t(Z,O),O+=Z.length}n.addGroup(U,s.length/3-U,1)}function _t(U,O){let b=U.length;for(;--b>=0;){const ct=b;let Z=b-1;Z<0&&(Z=U.length-1);for(let ot=0,st=h+m*2;ot<st;ot++){const Rt=G*ot,ft=G*(ot+1),A=O+ct+Rt,y=O+Z+Rt,V=O+Z+ft,Q=O+ct+ft;zt(A,y,V,Q)}}}function ut(U,O,b){c.push(U),c.push(O),c.push(b)}function Ut(U,O,b){Ot(U),Ot(O),Ot(b);const ct=s.length/3,Z=w.generateTopUV(n,s,ct-3,ct-2,ct-1);Xt(Z[0]),Xt(Z[1]),Xt(Z[2])}function zt(U,O,b,ct){Ot(U),Ot(O),Ot(ct),Ot(O),Ot(b),Ot(ct);const Z=s.length/3,ot=w.generateSideWallUV(n,s,Z-6,Z-3,Z-2,Z-1);Xt(ot[0]),Xt(ot[1]),Xt(ot[3]),Xt(ot[1]),Xt(ot[2]),Xt(ot[3])}function Ot(U){s.push(c[U*3+0]),s.push(c[U*3+1]),s.push(c[U*3+2])}function Xt(U){r.push(U.x),r.push(U.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return Ag(e,n,t)}static fromJSON(t,e){const n=[];for(let r=0,o=t.shapes.length;r<o;r++){const a=e[t.shapes[r]];n.push(a)}const s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new wa[s.type]().fromJSON(s)),new Ts(n,t.options)}}const bg={generateTopUV:function(i,t,e,n,s){const r=t[e*3],o=t[e*3+1],a=t[n*3],c=t[n*3+1],l=t[s*3],h=t[s*3+1];return[new lt(r,o),new lt(a,c),new lt(l,h)]},generateSideWallUV:function(i,t,e,n,s,r){const o=t[e*3],a=t[e*3+1],c=t[e*3+2],l=t[n*3],h=t[n*3+1],u=t[n*3+2],d=t[s*3],f=t[s*3+1],g=t[s*3+2],_=t[r*3],m=t[r*3+1],p=t[r*3+2];return Math.abs(a-h)<Math.abs(o-l)?[new lt(o,1-c),new lt(l,1-u),new lt(d,1-g),new lt(_,1-p)]:[new lt(a,1-c),new lt(h,1-u),new lt(f,1-g),new lt(m,1-p)]}};function Ag(i,t,e){if(e.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){const r=i[n];e.shapes.push(r.uuid)}else e.shapes.push(i.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}class ja extends Rs{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new ja(t.radius,t.detail)}}class An extends Rs{constructor(t=1,e=0){const n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,s,t,e),this.type="OctahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new An(t.radius,t.detail)}}class li extends Pe{constructor(t=.5,e=1,n=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:o},n=Math.max(3,n),s=Math.max(1,s);const a=[],c=[],l=[],h=[];let u=t;const d=(e-t)/s,f=new L,g=new lt;for(let _=0;_<=s;_++){for(let m=0;m<=n;m++){const p=r+m/n*o;f.x=u*Math.cos(p),f.y=u*Math.sin(p),c.push(f.x,f.y,f.z),l.push(0,0,1),g.x=(f.x/e+1)/2,g.y=(f.y/e+1)/2,h.push(g.x,g.y)}u+=d}for(let _=0;_<s;_++){const m=_*(n+1);for(let p=0;p<n;p++){const w=p+m,M=w,v=w+n+1,D=w+n+2,T=w+1;a.push(M,v,T),a.push(v,D,T)}}this.setIndex(a),this.setAttribute("position",new Jt(c,3)),this.setAttribute("normal",new Jt(l,3)),this.setAttribute("uv",new Jt(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new li(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class Vt extends Pe{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const c=Math.min(o+a,Math.PI);let l=0;const h=[],u=new L,d=new L,f=[],g=[],_=[],m=[];for(let p=0;p<=n;p++){const w=[],M=p/n;let v=0;p===0&&o===0?v=.5/e:p===n&&c===Math.PI&&(v=-.5/e);for(let D=0;D<=e;D++){const T=D/e;u.x=-t*Math.cos(s+T*r)*Math.sin(o+M*a),u.y=t*Math.cos(o+M*a),u.z=t*Math.sin(s+T*r)*Math.sin(o+M*a),g.push(u.x,u.y,u.z),d.copy(u).normalize(),_.push(d.x,d.y,d.z),m.push(T+v,1-M),w.push(l++)}h.push(w)}for(let p=0;p<n;p++)for(let w=0;w<e;w++){const M=h[p][w+1],v=h[p][w],D=h[p+1][w],T=h[p+1][w+1];(p!==0||o>0)&&f.push(M,v,T),(p!==n-1||c<Math.PI)&&f.push(v,D,T)}this.setIndex(f),this.setAttribute("position",new Jt(g,3)),this.setAttribute("normal",new Jt(_,3)),this.setAttribute("uv",new Jt(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Vt(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class fi extends Pe{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);const o=[],a=[],c=[],l=[],h=new L,u=new L,d=new L;for(let f=0;f<=n;f++)for(let g=0;g<=s;g++){const _=g/s*r,m=f/n*Math.PI*2;u.x=(t+e*Math.cos(m))*Math.cos(_),u.y=(t+e*Math.cos(m))*Math.sin(_),u.z=e*Math.sin(m),a.push(u.x,u.y,u.z),h.x=t*Math.cos(_),h.y=t*Math.sin(_),d.subVectors(u,h).normalize(),c.push(d.x,d.y,d.z),l.push(g/s),l.push(f/n)}for(let f=1;f<=n;f++)for(let g=1;g<=s;g++){const _=(s+1)*f+g-1,m=(s+1)*(f-1)+g-1,p=(s+1)*(f-1)+g,w=(s+1)*f+g;o.push(_,m,w),o.push(m,p,w)}this.setIndex(o),this.setAttribute("position",new Jt(a,3)),this.setAttribute("normal",new Jt(c,3)),this.setAttribute("uv",new Jt(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new fi(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class ye extends mi{static get type(){return"MeshStandardMaterial"}constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new Mt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Mt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ga,this.normalScale=new lt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new hn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Cs extends ye{static get type(){return"MeshPhysicalMaterial"}constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new lt(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return be(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Mt(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Mt(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Mt(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}}class So extends mi{static get type(){return"MeshLambertMaterial"}constructor(t){super(),this.isMeshLambertMaterial=!0,this.color=new Mt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Mt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ga,this.normalScale=new lt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new hn,this.combine=Ua,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Fr extends Ae{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Mt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class Aa extends Fr{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ae.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Mt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const wo=new oe,xl=new L,Ml=new L;class Th{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new lt(512,512),this.map=null,this.mapPass=null,this.matrix=new oe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Xa,this._frameExtents=new lt(1,1),this._viewportCount=1,this._viewports=[new ce(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;xl.setFromMatrixPosition(t.matrixWorld),e.position.copy(xl),Ml.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Ml),e.updateMatrixWorld(),wo.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(wo),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(wo)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const yl=new oe,cs=new L,Eo=new L;class Rg extends Th{constructor(){super(new Ye(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new lt(4,2),this._viewportCount=6,this._viewports=[new ce(2,1,1,1),new ce(0,1,1,1),new ce(3,1,1,1),new ce(1,1,1,1),new ce(3,0,1,1),new ce(1,0,1,1)],this._cubeDirections=[new L(1,0,0),new L(-1,0,0),new L(0,0,1),new L(0,0,-1),new L(0,1,0),new L(0,-1,0)],this._cubeUps=[new L(0,1,0),new L(0,1,0),new L(0,1,0),new L(0,1,0),new L(0,0,1),new L(0,0,-1)]}updateMatrices(t,e=0){const n=this.camera,s=this.matrix,r=t.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),cs.setFromMatrixPosition(t.matrixWorld),n.position.copy(cs),Eo.copy(n.position),Eo.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(Eo),n.updateMatrixWorld(),s.makeTranslation(-cs.x,-cs.y,-cs.z),yl.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(yl)}}class Qa extends Fr{constructor(t,e,n=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new Rg}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class Cg extends Th{constructor(){super(new uh(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Oi extends Fr{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ae.DEFAULT_UP),this.updateMatrix(),this.target=new Ae,this.shadow=new Cg}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class bh extends Fr{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}class Pg{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Sl(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=Sl();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function Sl(){return performance.now()}const wl=new oe;class Lg{constructor(t,e,n=0,s=1/0){this.ray=new Va(t,e),this.near=n,this.far=s,this.camera=null,this.layers=new Wa,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return wl.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(wl),this}intersectObject(t,e=!0,n=[]){return Ra(t,this,n,e),n.sort(El),n}intersectObjects(t,e=!0,n=[]){for(let s=0,r=t.length;s<r;s++)Ra(t[s],this,n,e);return n.sort(El),n}}function El(i,t){return i.distance-t.distance}function Ra(i,t,e,n){let s=!0;if(i.layers.test(t.layers)&&i.raycast(t,e)===!1&&(s=!1),s===!0&&n===!0){const r=i.children;for(let o=0,a=r.length;o<a;o++)Ra(r[o],t,e,!0)}}class Ig{constructor(t=1,e=0,n=0){return this.radius=t,this.phi=e,this.theta=n,this}set(t,e,n){return this.radius=t,this.phi=e,this.theta=n,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+e*e+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,n),this.phi=Math.acos(be(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class Dg extends Km{constructor(t=10,e=10,n=4473924,s=8947848){n=new Mt(n),s=new Mt(s);const r=e/2,o=t/e,a=t/2,c=[],l=[];for(let d=0,f=0,g=-a;d<=e;d++,g+=o){c.push(-a,0,g,a,0,g),c.push(g,0,-a,g,0,a);const _=d===r?n:s;_.toArray(l,f),f+=3,_.toArray(l,f),f+=3,_.toArray(l,f),f+=3,_.toArray(l,f),f+=3}const h=new Pe;h.setAttribute("position",new Jt(c,3)),h.setAttribute("color",new Jt(l,3));const u=new _h({vertexColors:!0,toneMapped:!1});super(h,u),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Da}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Da);const Tl={constitution:{name:"Constitution",icon:"❤️"},attack:{name:"Attack",icon:"⚔"},strength:{name:"Strength",icon:"💪"},defence:{name:"Defence",icon:"🛡"},woodcutting:{name:"Woodcutting",icon:"🪓"},mining:{name:"Mining",icon:"⛏"}},mr={bronze_hatchet:{name:"Bronze Hatchet",icon:"🪓",stackable:!1},bronze_pickaxe:{name:"Bronze Pickaxe",icon:"⛏",stackable:!1},bronze_sword:{name:"Bronze Sword",icon:"⚔",stackable:!1},whisper_logs:{name:"Whisper Logs",icon:"🪵",stackable:!0},copper_ore:{name:"Copper Ore",icon:"🟠",stackable:!0},tin_ore:{name:"Tin Ore",icon:"⚪",stackable:!0},camp_rations:{name:"Camp Rations",icon:"🍖",stackable:!0},yeti_fur:{name:"Yeti Fur",icon:"🧣",stackable:!0},frost_claw:{name:"Frost Claw",icon:"🧊",stackable:!0},orc_tooth:{name:"Orc Tooth",icon:"🦷",stackable:!0},scout_leather:{name:"Scout Leather",icon:"🦺",stackable:!0}};function Sr(i){let t=0;for(let e=1;e<i;e++)t+=Math.floor(e+300*Math.pow(2,e/7));return Math.floor(t/4)}function Ug(i){let t=1;for(;t<99&&Sr(t+1)<=i;)t++;return t}function ls(){return{version:1,x:0,z:2,hp:100,maxHp:100,focus:100,stamina:100,skills:{constitution:{level:10,xp:Sr(10)},attack:{level:1,xp:0},strength:{level:1,xp:0},defence:{level:1,xp:0},woodcutting:{level:1,xp:0},mining:{level:1,xp:0}},inventory:[{id:"bronze_hatchet",qty:1},{id:"bronze_pickaxe",qty:1},{id:"bronze_sword",qty:1},{id:"camp_rations",qty:5}],equipped:{weapon:"bronze_sword",hatchet:"bronze_hatchet",pickaxe:"bronze_pickaxe"}}}class Ng{chatLog;invGrid;invCount;skillsList;skillsPanel;progressWrap;progressFill;progressLabel;targetInfo;targetName;targetHp;hpText;prayText;stamText;hpRing;prayRing;stamRing;minimap;minimapCtx;touchHint;inventory;btnInventory;narrowMq;desktopInvInited=!1;circum=2*Math.PI*28;onAction=null;onInventoryClick=null;constructor(){this.chatLog=_e("chat-log"),this.invGrid=_e("inv-grid"),this.invCount=_e("inv-count"),this.skillsList=_e("skills-list"),this.skillsPanel=_e("skills-panel"),this.progressWrap=_e("progress-wrap"),this.progressFill=_e("progress-fill"),this.progressLabel=_e("progress-label"),this.targetInfo=_e("target-info"),this.targetName=_e("target-name"),this.targetHp=_e("target-hp"),this.hpText=_e("hp-text"),this.prayText=_e("pray-text"),this.stamText=_e("stam-text"),this.hpRing=_e("hp-ring"),this.prayRing=_e("pray-ring"),this.stamRing=_e("stam-ring"),this.minimap=_e("minimap"),this.minimapCtx=this.minimap.getContext("2d"),this.touchHint=_e("touch-hint"),this.inventory=_e("inventory"),this.btnInventory=_e("btn-inventory"),this.narrowMq=window.matchMedia("(max-width: 480px)"),_e("btn-skills").addEventListener("click",()=>{this.skillsPanel.hidden=!this.skillsPanel.hidden}),_e("skills-close").addEventListener("click",()=>{this.skillsPanel.hidden=!0}),this.btnInventory.addEventListener("click",()=>{this.setInventoryOpen(this.inventory.hidden)}),_e("inv-close").addEventListener("click",()=>{this.setInventoryOpen(!1)});const t=()=>this.syncInventoryForViewport();typeof this.narrowMq.addEventListener=="function"?this.narrowMq.addEventListener("change",t):this.narrowMq.addListener(t),this.syncInventoryForViewport(),document.querySelectorAll(".ab-slot").forEach(e=>{e.addEventListener("click",()=>{const n=e.dataset.action;n&&this.onAction?.(n),e.classList.add("active"),setTimeout(()=>e.classList.remove("active"),120)})}),setTimeout(()=>this.touchHint.classList.add("fade"),8e3)}syncInventoryForViewport(){this.narrowMq.matches?(this.desktopInvInited=!1,this.setInventoryOpen(!1)):this.desktopInvInited||(this.desktopInvInited=!0,this.setInventoryOpen(!0))}setInventoryOpen(t){this.inventory.hidden=!t,this.btnInventory.setAttribute("aria-expanded",t?"true":"false"),this.narrowMq.matches||(this.btnInventory.style.display=t?"none":"flex")}chat(t,e="system"){const n=document.createElement("div");for(n.className=`chat-line ${e==="plain"?"":e}`.trim(),n.textContent=t,this.chatLog.appendChild(n);this.chatLog.children.length>40;)this.chatLog.removeChild(this.chatLog.firstChild);this.chatLog.scrollTop=this.chatLog.scrollHeight}setOrbs(t,e,n,s){this.hpText.textContent=String(Math.round(t)),this.prayText.textContent=String(Math.round(n)),this.stamText.textContent=String(Math.round(s)),this.setRing(this.hpRing,t/e),this.setRing(this.prayRing,n/100),this.setRing(this.stamRing,s/100)}setRing(t,e){const n=Math.max(0,Math.min(1,e));t.style.strokeDasharray=String(this.circum),t.style.strokeDashoffset=String(this.circum*(1-n))}setInventory(t){this.invGrid.innerHTML="";const e=28;for(let n=0;n<e;n++){const s=document.createElement("div");s.className="inv-slot";const r=t[n];if(r){s.classList.add("has-item");const o=mr[r.id];if(s.textContent=o?.icon??"?",s.title=`${o?.name??r.id}${r.qty>1?` ×${r.qty}`:""}`,r.qty>1){const c=document.createElement("span");c.className="inv-qty",c.textContent=String(r.qty),s.appendChild(c)}const a=n;s.addEventListener("click",()=>this.onInventoryClick?.(a))}this.invGrid.appendChild(s)}this.invCount.textContent=`${t.length}/${e}`}setSkills(t){this.skillsList.innerHTML="",Object.keys(Tl).forEach(e=>{const n=t.skills[e],s=Tl[e],r=document.createElement("div");r.className="skill-row";const o=Sr(n.level+1),a=Sr(n.level),c=n.level>=99?100:(n.xp-a)/(o-a)*100;r.innerHTML=`
        <div class="skill-icon">${s.icon}</div>
        <div class="skill-meta">
          <div class="skill-name">${s.name}</div>
          <div class="skill-xp"><div style="width:${c}%"></div></div>
        </div>
        <div class="skill-lvl">${n.level}</div>
      `,this.skillsList.appendChild(r)})}showProgress(t,e){this.progressWrap.hidden=!1,this.progressLabel.textContent=t,this.progressFill.style.width=`${Math.max(0,Math.min(100,e*100))}%`}hideProgress(){this.progressWrap.hidden=!0,this.progressFill.style.width="0%"}showTarget(t,e){this.targetInfo.hidden=!1,this.targetName.textContent=t,this.targetHp.style.width=`${Math.max(0,Math.min(100,e*100))}%`}hideTarget(){this.targetInfo.hidden=!0}drawMinimap(t,e,n,s){const r=this.minimapCtx,o=this.minimap.width,a=this.minimap.height,c=o/2,l=a/2,h=Math.min(o,a)/2-1;r.clearRect(0,0,o,a),r.save(),r.beginPath(),r.arc(c,l,h,0,Math.PI*2),r.clip();const u=r.createRadialGradient(c,l,4,c,l,h);u.addColorStop(0,"#4a7a30"),u.addColorStop(.65,"#2c4e20"),u.addColorStop(1,"#1a3014"),r.fillStyle=u,r.fillRect(0,0,o,a);for(let f=0;f<36;f++)r.fillStyle=f%2?"#3a6828":"#2e5420",r.fillRect(f*41%o,f*59%a,7,7);const d=3.2;for(const f of s){const g=c+(f.x-t)*d,_=l+(f.z-e)*d,m=g-c,p=_-l;m*m+p*p>(h-4)*(h-4)||(r.fillStyle=f.color,r.beginPath(),r.arc(g,_,3,0,Math.PI*2),r.fill())}r.save(),r.translate(c,l),r.rotate(n),r.fillStyle="#f0d070",r.beginPath(),r.moveTo(0,-6),r.lineTo(4,5),r.lineTo(0,2),r.lineTo(-4,5),r.closePath(),r.fill(),r.restore(),r.restore(),r.beginPath(),r.arc(c,l,h-.5,0,Math.PI*2),r.strokeStyle="#8a6a28",r.lineWidth=3,r.stroke(),r.beginPath(),r.arc(c,l,h-3,0,Math.PI*2),r.strokeStyle="rgba(212,168,75,0.35)",r.lineWidth=1.5,r.stroke(),r.fillStyle="#e8c060",r.beginPath(),r.moveTo(c,6),r.lineTo(c+5,14),r.lineTo(c-5,14),r.closePath(),r.fill(),r.fillStyle="#f0d070",r.font="bold 11px Segoe UI, system-ui, sans-serif",r.textAlign="center",r.fillText("N",c,26)}}function _e(i){const t=document.getElementById(i);if(!t)throw new Error(`Missing #${i}`);return t}const bl=new Map;function le(i,t={}){const e=`${i}_${t.roughness??.62}_${t.metalness??.06}_${t.clearcoat??0}_${t.sheen??0}_${t.emissive??0}_${t.emissiveIntensity??0}_${t.envMapIntensity??1}_${t.flatShading===!1?0:1}`;let n=bl.get(e);return n||(n=new Cs({color:i,roughness:t.roughness??.62,metalness:t.metalness??.06,envMapIntensity:t.envMapIntensity??1,flatShading:t.flatShading??!0,...t}),bl.set(e,n)),n}function or(i,t){const e=Math.sin(i*127.1+t*311.7)*43758.5453;return e-Math.floor(e)}function wr(i,t){const e=Math.floor(i),n=Math.floor(t),s=i-e,r=t-n,o=s*s*(3-2*s),a=r*r*(3-2*r),c=or(e,n),l=or(e+1,n),h=or(e,n+1),u=or(e+1,n+1);return c+(l-c)*o+(h-c)*a+(c-l-h+u)*o*a}function Er(i,t,e=5){let n=0,s=.5,r=1;for(let o=0;o<e;o++)n+=s*wr(i*r,t*r),s*=.5,r*=2.05;return n}function tc(i,t){const e=document.createElement("canvas"),n=document.createElement("canvas"),s=document.createElement("canvas");e.width=e.height=n.width=n.height=s.width=s.height=i;const r=e.getContext("2d"),o=n.getContext("2d"),a=s.getContext("2d"),c=r.createImageData(i,i),l=o.createImageData(i,i),h=a.createImageData(i,i);for(let d=0;d<i;d++)for(let f=0;f<i;f++){const g=t(f/i,d/i),_=(d*i+f)*4;c.data[_]=g.r,c.data[_+1]=g.g,c.data[_+2]=g.b,c.data[_+3]=255;const m=Math.max(0,Math.min(255,g.rough));l.data[_]=l.data[_+1]=l.data[_+2]=m,l.data[_+3]=255;const p=Math.max(0,Math.min(255,g.bump));h.data[_]=h.data[_+1]=h.data[_+2]=p,h.data[_+3]=255}r.putImageData(c,0,0),o.putImageData(l,0,0),a.putImageData(h,0,0);const u=(d,f)=>{const g=new Ka(d);return g.wrapS=g.wrapT=Gi,g.anisotropy=8,g.colorSpace=f?Ge:fn,g.needsUpdate=!0,g};return{map:u(e,!0),roughnessMap:u(n,!1),bumpMap:u(s,!1)}}let On=null,zn=null,To=null;function Fg(){return On||(On=tc(256,(i,t)=>{const e=Er(i*18,t*42),n=wr(i*70,t*70),s=Er(i*4.5,t*3.2,3),r=Math.pow(wr(i*9+t*40,t*2),8),o=.42+e*.28+s*.16-r*.22+n*.06,a=48+o*110,c=28+o*62,l=16+o*32;return{r:a,g:c,b:l,rough:110+e*90-r*40,bump:90+e*110+n*30-r*50}}),On.map.repeat.set(2.2,2.2),On.roughnessMap.repeat.copy(On.map.repeat),On.bumpMap.repeat.copy(On.map.repeat)),On}function Og(){return zn||(zn=tc(256,(i,t)=>{const e=Math.abs(Math.sin(i*Math.PI*64))*.12+Math.abs(Math.sin(t*Math.PI*64))*.12,n=Er(i*10,t*10,4),s=.28+n*.18+e;return{r:28+s*40,g:32+s*46,b:30+s*38,rough:170+e*80,bump:100+e*90+n*40}}),zn.map.repeat.set(3,3),zn.roughnessMap.repeat.copy(zn.map.repeat),zn.bumpMap.repeat.copy(zn.map.repeat)),zn}function zg(){return To||(To=tc(256,(i,t)=>{const e=Er(i*6,t*8,4),n=Math.pow(wr(i*40,t*40),6),s=198+e*28-n*18,r=148+e*18-n*14,o=112+e*12-n*10;return{r:s,g:r,b:o,rough:96+e*40,bump:118+e*28}})),To}function bo(i,t={}){const e=Fg();return new Cs({color:i,map:e.map,roughnessMap:e.roughnessMap,bumpMap:e.bumpMap,bumpScale:.018,roughness:.58,metalness:.08,clearcoat:.16,clearcoatRoughness:.55,sheen:.22,sheenColor:new Mt(6963240),sheenRoughness:.7,envMapIntensity:.55,flatShading:!0,...t})}function Al(i){const t=Og();return new Cs({color:i,map:t.map,roughnessMap:t.roughnessMap,bumpMap:t.bumpMap,bumpScale:.02,roughness:.86,metalness:.02,sheen:.18,sheenColor:new Mt(3818552),sheenRoughness:.85,envMapIntensity:.28,flatShading:!0})}function Rl(i,t={}){const e=zg();return new Cs({color:i,map:e.map,roughnessMap:e.roughnessMap,bumpMap:e.bumpMap,bumpScale:.012,roughness:.48,metalness:0,sheen:.35,sheenColor:new Mt(12611664),sheenRoughness:.55,envMapIntensity:.32,emissive:new Mt(3807248),emissiveIntensity:.02,flatShading:!0,...t})}function we(i,t){return i.castShadow=!0,i.receiveShadow=!0,t.add(i),i}function Ao(i,t=6){const e=i.map(([n,s])=>new lt(n,s));return new Ur(e,t)}function Cl(i,t,e,n){const s=new yr;s.moveTo(-i*.5,0),s.lineTo(i*.5,0),s.lineTo(0,-t),s.closePath();const r=new Ts(s,{depth:e,bevelEnabled:!1});r.translate(0,0,-e*.5);const o=new I(r,n);return o.castShadow=!0,o}function Pl(i,t,e,n,s,r=0){const o=Math.hypot(n*1.7,e-t);for(const a of[-1,1]){const c=new I(new Ft(.028,o,.016),s);c.position.set(0,(t+e)*.5,r),c.rotation.z=a*Math.atan2(n*.95,(e-t)*.5),c.castShadow=!0,i.add(c)}}function Ll(i,t,e,n){const s=new I(new Ft(i,i,t),n);s.castShadow=!0;const r=new I(new Ft(i*.42,i*.42,t+.008),new Cs({color:2761752,roughness:.7,metalness:.2,flatShading:!0}));return s.add(r),s}function ei(i,t,e,n,s,r,o,a,c,l,h=.55){for(let u=0;u<r;u++){const d=u/r*Math.PI*2+u%5*.04,f=s*(.88+u%4*.04),g=o*(.78+u%5*.06),_=.018+u%3*.006,m=new I(new se(_,g,4),u%4===0?c:u%3===0?l:a);m.position.set(t+Math.cos(d)*f,e+g*.22,n+Math.sin(d)*f),m.rotation.z=-Math.cos(d)*h,m.rotation.x=Math.sin(d)*h,m.rotation.y=u%3*.4,m.castShadow=!0,i.add(m)}}function Bg(i,t,e){const n=new Bt,s=new I(new Ft(.09,.07,.11),t);s.castShadow=!0,n.add(s);const r=e==="fist"?1.05:e==="spear"?.72:.22;for(let a=0;a<4;a++){const c=new I(new Ft(.018,.028,.022),t);c.position.set(-.034+a*.022,-.048,.028),c.rotation.x=r*.35,c.castShadow=!0,n.add(c);const l=new I(new Ft(.014,.032,.016),i);l.position.set(-.034+a*.022,-.078,.04),l.rotation.x=r,l.castShadow=!0,n.add(l)}const o=new I(new Ft(.018,.036,.016),i);return o.position.set(-.052,-.01,.02),o.rotation.z=.85,o.rotation.x=.4,n.add(o),n}function Ah(){const i=new Bt;i.name="player",i.userData.locomotionY=0;const t=Rl(13934714),e=Rl(12092510,{roughness:.56}),n=le(1708556,{roughness:.94,sheen:.22,sheenColor:new Mt(3811352)}),s=bo(5913122),r=bo(3021840,{roughness:.78,clearcoat:.04}),o=bo(8015404,{roughness:.58,clearcoat:.12}),a=le(11569752,{roughness:.92,metalness:0,sheen:.22,sheenColor:new Mt(13148272),sheenRoughness:.7,envMapIntensity:.12}),c=le(6965800,{roughness:.95,sheen:.16,sheenColor:new Mt(9068600)}),l=le(9332800,{roughness:.93,sheen:.18,sheenColor:new Mt(11173960)}),h=Al(3817532),u=Al(2764844),d=le(15265524,{metalness:.92,roughness:.18,clearcoat:.55,clearcoatRoughness:.12,envMapIntensity:1.35}),f=le(16186108,{metalness:.96,roughness:.1,clearcoat:.7,clearcoatRoughness:.08,emissive:13161696,emissiveIntensity:.38,envMapIntensity:1.55}),g=le(6965284,{roughness:.72,clearcoat:.12,clearcoatRoughness:.6,envMapIntensity:.4}),_=new I(new qe(.38,24),new he({color:0,transparent:!0,opacity:.38,depthWrite:!1}));_.rotation.x=-Math.PI/2,_.position.y=.025,_.name="contactShadow",i.add(_);const m=new Bt;m.name="playerHips",i.add(m);const p=U=>{const O=new Bt;O.name=U<0?"legL":"legR",O.position.set(U*.125,.92,0);const b=new I(new Vt(.105,6,5),h);we(b,O);const ct=new I(new Wt(.09,.1,.32,6),h);ct.position.set(0,-.18,0),we(ct,O);const Z=new Bt;Z.name=U<0?"shinL":"shinR",Z.position.set(0,-.42,0);const ot=new I(new Vt(.092,6,5),h);we(ot,Z);const st=new I(new Wt(.078,.088,.16,6),u);st.position.set(0,-.1,-.032),we(st,Z);const Rt=new I(new Wt(.1,.108,.22,6),s);Rt.position.set(0,-.22,-.02),we(Rt,Z),Pl(Z,-.08,-.36,.118,r,.04);const ft=new Bt;ft.name=U<0?"footL":"footR",ft.position.set(0,-.48,.02);const A=new I(new Vt(.078,6,5),s);we(A,ft);const y=new I(new Ft(.15,.07,.22),r);y.position.set(0,.01,.1),we(y,ft);const V=new I(new Ft(.16,.035,.3),le(1314314,{roughness:.96}));return V.position.set(0,-.018,.08),ft.add(V),Z.add(ft),ei(Z,0,-.02,.02,.112,14,.09,a,c,l,.72),ei(Z,0,-.32,-.02,.1,12,.07,a,c,l,.58),O.add(Z),O};m.add(p(-1)),m.add(p(1));const w=new I(Ao([[.2,-.1],[.24,-.02],[.22,.1]],6),s);w.position.y=.92,we(w,m);for(const[U,O]of[[.22,0],[-.22,Math.PI]]){const b=Cl(.34,.28,.045,r);b.position.set(0,.86,U),b.rotation.y=O,m.add(b)}for(const U of[-1,1]){const O=Cl(.24,.24,.04,o);O.position.set(U*.24,.86,0),O.rotation.y=U*Math.PI*.5,m.add(O)}const M=new Bt;M.name="playerTorso",M.position.y=1.18,i.add(M);const v=new I(Ao([[.2,-.3],[.255,-.18],[.28,-.02],[.3,.12],[.26,.24],[.16,.32]],6),s);we(v,M);const D=new I(new Vt(.16,6,5),o);D.scale.set(1.35,.72,.55),D.position.set(0,.08,.12),we(D,M);const T=new I(new fi(.255,.038,5,8),r);T.rotation.x=Math.PI/2,T.position.y=-.26,M.add(T);const R=Ll(.1,.028,.042,f);R.position.set(0,-.26,.27),M.add(R);const P=(U,O)=>{const b=new I(new Ft(.078,.56,.045),r);b.position.set(0,.02,O),b.rotation.z=U,b.castShadow=!0,M.add(b)};P(.55,.265),P(-.55,.265),P(.55,-.22),P(-.55,-.22);const S=new I(new Ft(.15,.15,.03),r);S.position.set(0,.05,.24),M.add(S);const x=Ll(.14,.038,.058,f);x.name="chestBuckle",x.position.set(0,.05,.285),M.add(x);for(const U of[-1,1]){const O=new I(new Vt(.1,6,4),o);O.scale.set(1.15,.55,1.05),O.position.set(U*.26,.24,.02),O.rotation.z=U*-.28,we(O,M)}const C=new I(new fi(.2,.075,5,8),l);C.rotation.x=Math.PI/2,C.position.set(0,.26,.01),C.scale.set(1.22,1.05,.95),we(C,M),ei(M,0,.28,.01,.26,22,.16,a,c,l,.62),ei(M,0,.36,-.03,.2,16,.13,a,c,l,.5);for(const U of[-1,1])ei(M,U*.28,.2,.03,.1,10,.12,a,c,l,.7);const H=new I(new Wt(.068,.074,.12,6),t);H.position.set(0,.34,.01),we(H,M);const N=U=>{const O=new Bt;O.name=U<0?"clavL":"clavR",O.position.set(U*.12,.22,0);const b=new Bt;b.name=U<0?"armL":"armR",b.position.set(U*.2,0,0);const ct=new I(new Vt(.112,6,5),t);ct.scale.set(1.18,.88,1.08),we(ct,b);const Z=new I(new Wt(.074,.086,.24,6),t);Z.position.set(0,-.14,0),we(Z,b);const ot=new Bt;ot.name=U<0?"forearmL":"forearmR",ot.position.set(0,-.32,0);const st=new I(new Vt(.08,6,5),t);we(st,ot);const Rt=new I(new Wt(.078,.09,.2,6),s);Rt.position.set(0,-.13,.012),we(Rt,ot),Pl(ot,-.04,-.2,.086,r,.012),ei(ot,0,.02,.015,.092,12,.08,a,c,l,.65),ei(ot,0,-.22,.015,.086,10,.065,a,c,l,.55);const ft=Bg(t,s,U<0?"spear":"fist");return ft.name=U<0?"handL":"handR",ft.position.set(0,-.26,.02),ot.add(ft),b.add(ot),O.add(b),O};M.add(N(-1)),M.add(N(1));const F=new Bt;F.name="playerHead",F.position.set(0,.5,.015);const $=new I(new ja(.168,0),t);$.scale.set(.95,1.06,.9),we($,F);const G=new I(new Vt(.12,6,5),e);G.scale.set(1.02,.7,.92),G.position.set(0,-.095,.045),we(G,F);const K=new I(new Vt(.045,6,5),e);K.scale.set(1.15,.85,1.1),K.position.set(0,-.155,.11),F.add(K);const X=new I(new Vt(.09,6,4),le(4864044,{roughness:.95,sheen:.2,sheenColor:new Mt(2759700)}));X.scale.set(1.05,.45,.55),X.position.set(0,-.12,.12),F.add(X);for(const U of[-1,1]){const O=new I(new Vt(.055,6,4),e);O.scale.set(.7,1,.85),O.position.set(U*.11,-.02,.09),F.add(O)}const it=new I(Ao([[.008,.05],[.016,.02],[.022,-.01],[.012,-.03]],5),e);it.rotation.x=.15,it.position.set(0,-.01,.155),F.add(it);for(const U of[-1,1]){const O=new I(new Ft(.07,.018,.02),n);O.rotation.z=U*-.18,O.position.set(U*.055,.055,.145),F.add(O);const b=new I(new Vt(.032,5,4),le(1708044,{roughness:.8}));b.position.set(U*.05,.02,.128),F.add(b);const ct=new I(new qe(.018,5),le(15261136,{roughness:.4}));ct.position.set(U*.05,.02,.158),F.add(ct);const Z=new I(new qe(.011,5),le(4861980,{roughness:.45,emissive:2758668,emissiveIntensity:.15}));Z.position.set(U*.05,.02,.162),F.add(Z);const ot=new I(new qe(.005,5),le(525828));ot.position.set(U*.05,.02,.164),F.add(ot);const st=new I(new Vt(.032,6,4),t);st.scale.set(.45,1.15,.7),st.position.set(U*.162,.01,-.01),F.add(st)}const ht=new I(new Ft(.05,.012,.016),le(6959144,{roughness:.5}));ht.position.set(0,-.11,.155),F.add(ht);const pt=new I(new Vt(.17,7,5,0,Math.PI*2,0,Math.PI*.58),n);pt.position.set(0,.04,-.02),pt.scale.set(1.05,.85,1.08),we(pt,F);const wt=[[0,.2,.02,1.15],[-.07,.19,.05,1],[.07,.19,.05,1],[-.12,.15,-.02,.95],[.12,.15,-.02,.95],[0,.18,-.12,1.05],[-.1,.14,-.1,.9],[.1,.14,-.1,.9],[-.05,.21,-.04,1.1],[.05,.21,-.04,1.1],[0,.22,.06,.85],[-.14,.1,.02,.8],[.14,.1,.02,.8],[-.04,.24,0,1.05],[.04,.24,0,1.05],[0,.16,.1,.75],[-.08,.17,-.08,.88],[.08,.17,-.08,.88]];for(const[U,O,b,ct]of wt){const Z=new I(new se(.028*ct,.11*ct,4),n);Z.position.set(U,O,b),Z.rotation.x=b*.7-.12,Z.rotation.z=-U*1.15,F.add(Z)}M.add(F);const Ct=kg(g,r,d);Ct.name="idleSpear";const rt=M.getObjectByName("armL").getObjectByName("handL");Ct.position.set(.02,-.5,.02),Ct.rotation.set(.04,.02,.03),rt.add(Ct);const _t=new Bt;_t.name="toolRoot",_t.visible=!1,M.getObjectByName("armR").getObjectByName("handR").add(_t),ec(_t,null);const zt=Hg();zt.name="tool_hatchet",zt.visible=!1,_t.add(zt);const Ot=Gg();Ot.name="tool_pickaxe",Ot.visible=!1,_t.add(Ot);const Xt=Vg();return Xt.name="tool_sword",Xt.visible=!1,_t.add(Xt),i}function kg(i,t,e){const n=new Bt,s=new I(new Wt(.022,.026,1.92,6),i);s.position.y=.58,s.castShadow=!0,n.add(s);const r=new I(new Wt(.032,.03,.14,6),t);r.position.y=.16,n.add(r);const o=new I(new Wt(.038,.032,.08,6),t);o.position.y=1.38,n.add(o);const a=new I(new An(.12,0),e);a.scale.set(.38,1.85,.26),a.position.y=1.64,a.castShadow=!0,n.add(a);const c=new I(new Ft(.016,.34,.08),le(15922938,{metalness:.94,roughness:.12,clearcoat:.45}));c.position.y=1.64,n.add(c);const l=new I(new Wt(.048,.032,.08,6),e);l.position.y=1.42,n.add(l);for(const d of[-1,1]){const f=new I(new se(.036,.14,4),e);f.position.set(d*.055,1.52,0),f.rotation.z=d*1.12,n.add(f)}const h=new I(new se(.048,.18,4),le(16054524,{metalness:.9,roughness:.12,clearcoat:.5}));h.position.y=1.86,n.add(h);const u=new I(new se(.026,.1,4),e);return u.rotation.x=Math.PI,u.position.y=-.42,n.add(u),n}function Hg(){const i=new Bt,t=new I(new Wt(.022,.028,.55,10),le(6964256,{roughness:.75}));t.rotation.z=.35,i.add(t);const e=new I(new Ft(.22,.12,.035),le(11583696,{metalness:.72,roughness:.28,clearcoat:.35}));return e.position.set(.12,.22,0),e.rotation.z=.35,i.add(e),i}function Gg(){const i=new Bt,t=new I(new Wt(.022,.028,.6,10),le(6964256,{roughness:.75}));t.rotation.z=-.2,i.add(t);const e=new I(new Ft(.28,.07,.05),le(10135736,{metalness:.65,roughness:.32,clearcoat:.25}));return e.position.set(.05,.28,0),i.add(e),i}function Vg(){const i=new Bt,t=new I(new Wt(.02,.024,.16,10),le(5911060,{roughness:.75}));i.add(t);const e=new I(new Wt(.026,.026,.05,10),le(3810324,{roughness:.85}));e.position.y=.02,i.add(e);const n=new I(new Vt(.032,10,8),le(13938768,{metalness:.68,roughness:.3}));n.position.y=-.1,i.add(n);const s=new I(new Ft(.16,.032,.04),le(13938768,{metalness:.7,roughness:.28}));s.position.y=.09,i.add(s);const r=new I(new Ft(.038,.58,.012),le(13688040,{metalness:.88,roughness:.16,clearcoat:.55,emissive:2241348,emissiveIntensity:.08}));r.position.y=.4,i.add(r);const o=new I(new Ft(.01,.46,.014),le(15265524,{metalness:.9,roughness:.12,clearcoat:.5}));o.position.y=.38,i.add(o);const a=new I(new se(.028,.1,8),le(15003382,{metalness:.92,roughness:.12,clearcoat:.6}));return a.position.y=.73,i.add(a),i}function ec(i,t){t==="sword"?(i.position.set(.012,-.018,.038),i.rotation.set(Math.PI/2,.16,.22)):t==="hatchet"?(i.position.set(.02,-.02,.03),i.rotation.set(1.25,.2,.45)):t==="pickaxe"?(i.position.set(.02,-.02,.03),i.rotation.set(1.2,-.15,.2)):(i.position.set(.012,-.018,.038),i.rotation.set(Math.PI/2,.16,.22))}function Ps(i){const t=i.getObjectByName("toolRoot");if(!t||!t.visible)return;const e=t.getObjectByName("tool_sword"),n=t.getObjectByName("tool_hatchet"),s=t.getObjectByName("tool_pickaxe"),r=e?.visible?"sword":n?.visible?"hatchet":s?.visible?"pickaxe":null;ec(t,r)}function fe(i,t){const e=i.getObjectByName("toolRoot");if(!e)return;e.visible=t!==null;for(const s of["tool_hatchet","tool_pickaxe","tool_sword"]){const r=e.getObjectByName(s);r&&(r.visible=s===`tool_${t}`)}const n=i.getObjectByName("idleSpear");n&&(n.visible=t===null),ec(e,t)}function Or(i){const t=Math.max(0,Math.min(1,i));return t*t*(3-2*t)}function pi(i){const t=Math.max(0,Math.min(1,i));return t<.5?16*t*t*t*t*t:1-Math.pow(-2*t+2,5)/2}function W(i,t){return i.getObjectByName(t)}function Tr(i,t={}){if(!i)return;const e=i.userData.rest;e&&(i.position.set(e.x+(t.x??0),e.y+(t.y??0),e.z+(t.z??0)),i.rotation.set(e.rx+(t.rx??0),e.ry,e.rz))}function Rh(i){const t=Math.sin(i),e=Math.cos(i);return t*(.62+.38*Math.abs(e))}function Ji(i,t){i.userData.locomotionY=t}function Ie(i){i&&i.rotation.set(0,0,0)}function Ro(i,t,e){return i+(t-i)*e}function xt(i,t,e,n){i&&i.rotation.set(t,e,n)}function Yn(i){return Math.max(0,i)}function Ch(i,t){return!!W(i,t)?.visible}function Bn(i){Ie(W(i,"playerHips")),Ie(W(i,"legL")),Ie(W(i,"legR")),Ie(W(i,"shinL")),Ie(W(i,"shinR")),Ie(W(i,"footL")),Ie(W(i,"footR")),Ie(W(i,"clavL")),Ie(W(i,"clavR")),Ie(W(i,"armL")),Ie(W(i,"armR")),Ie(W(i,"forearmL")),Ie(W(i,"forearmR")),Ie(W(i,"handL")),Ie(W(i,"handR")),Ie(W(i,"playerHead")),Ie(W(i,"playerTorso"));const t=W(i,"playerHips");t&&t.position.set(0,0,0);const e=W(i,"playerTorso");e&&(e.position.x=0,e.position.z=0,e.scale.set(1,1,1));const n=W(i,"idleSpear");n&&n.rotation.set(.04,.02,.03),Ps(i),i.rotation.z=0,i.rotation.x=0,Ji(i,0)}function xs(i,t){if(Ch(i,"tool_sword")){Wg(i,t);return}const e=Math.sin(t*1.35)*.018,n=Math.sin(t*.55)*.032,s=Math.sin(t*.28)*.08+Math.sin(t*.11)*.04,r=W(i,"playerHips"),o=W(i,"playerTorso"),a=W(i,"idleSpear"),c=W(i,"toolRoot");r&&(r.rotation.y=n*.18,r.position.x=n*.22),o&&(o.rotation.x=e*.7,o.rotation.y=n*.22,o.rotation.z=n*.1,o.position.x=n*.14,o.scale.set(1+e*.01,1+e*.016,1+e*.008)),xt(W(i,"playerHead"),-.05+e*.32,s,-n*.08),xt(W(i,"clavL"),.02,0,.05+n*.08),xt(W(i,"clavR"),.02,0,-.05-n*.06),xt(W(i,"armL"),.1+e*.1,.04,.08+n*.08),xt(W(i,"armR"),.08-e*.08,-.04,-.1-n*.08),xt(W(i,"forearmL"),-.18,.04,.02),xt(W(i,"forearmR"),-.28,-.04,-.02),xt(W(i,"handL"),.08,.03,.04),xt(W(i,"handR"),.04,0,-.04),xt(W(i,"legL"),.06+n*.1,0,.035),xt(W(i,"legR"),-.04-n*.08,0,-.035),xt(W(i,"shinL"),Yn(.16+Math.max(0,n)*.12),0,0),xt(W(i,"shinR"),Yn(.2+Math.max(0,-n)*.1),0,0),xt(W(i,"footL"),.04,0,0),xt(W(i,"footR"),.06,0,0),a&&a.visible&&(a.rotation.z=.03+Math.sin(t*.9)*.01,a.rotation.x=.04+Math.sin(t*.7)*.008),c&&c.visible&&Ps(i),Ji(i,e*.025)}function Wg(i,t){const e=Math.sin(t*1.4)*.016,n=Math.sin(t*.7)*.012;xt(W(i,"playerHips"),.02,-.08+n,0);const s=W(i,"playerHips");s&&(s.position.x=.02);const r=W(i,"playerTorso");r&&(r.rotation.set(.08+e*.5,-.16,.05),r.position.x=0,r.scale.set(1+e*.008,1+e*.012,1)),xt(W(i,"playerHead"),-.04+e*.2,.12,-.04),xt(W(i,"clavL"),.04,.06,.08),xt(W(i,"clavR"),.08,-.1,-.12),xt(W(i,"armL"),.35+e*.08,.22,.38),xt(W(i,"forearmL"),-.85,.14,.1),xt(W(i,"handL"),.1,.05,.12),xt(W(i,"armR"),.55+e*.05,-.28,-.22),xt(W(i,"forearmR"),-1.35,.22,.12),xt(W(i,"handR"),.22,.14,.32),xt(W(i,"legL"),-.2,.04,.05),xt(W(i,"legR"),.08,-.02,-.04),xt(W(i,"shinL"),Yn(.28),0,0),xt(W(i,"shinR"),Yn(.18),0,0),xt(W(i,"footL"),.06,0,0),xt(W(i,"footR"),.04,0,0),Ps(i);const o=W(i,"toolRoot");o&&(o.rotation.x+=e*.04,o.rotation.z+=n*.08),Ji(i,e*.02)}function br(i,t,e=.85,n=1){const s=Math.max(0,Math.min(1,n)),r=Math.max(.25,e),o=4.15+r*1.55,a=t*o,c=(.4+r*.16)*s,l=Ch(i,"tool_sword"),h=!!W(i,"idleSpear")?.visible&&!l,u=Math.sin(a),d=Math.sin(a+Math.PI),f=Math.max(0,-Math.cos(a)),g=Math.max(0,-Math.cos(a+Math.PI)),_=Math.max(0,Math.cos(a)),m=Math.max(0,Math.cos(a+Math.PI)),p=Math.max(0,u)*f,w=Math.max(0,d)*g,M=Math.max(0,-u)*(1-_),v=Math.max(0,-d)*(1-m),D=Math.max(0,-Math.cos(a*2))*.018*s*r,T=W(i,"playerHips"),R=W(i,"playerTorso");T&&(T.rotation.y=u*.1*s,T.rotation.z=u*.025*s,T.position.x=-u*.018*s),xt(W(i,"legL"),u*c-f*.5,0,.03),xt(W(i,"legR"),d*c-g*.5,0,-.03),xt(W(i,"shinL"),Yn(.14+f*(.7+c*.22)+p*.28+M*.18+_*.1),0,0),xt(W(i,"shinR"),Yn(.14+g*(.7+c*.22)+w*.28+v*.18+m*.1),0,0),xt(W(i,"footL"),-f*.32+_*Math.max(0,u)*.24,0,0),xt(W(i,"footR"),-g*.32+m*Math.max(0,d)*.24,0,0),xt(W(i,"clavL"),-u*.04*s,0,.05),xt(W(i,"clavR"),-d*.04*s,0,-.05),l?(xt(W(i,"armL"),-u*.45*s+.18,.1,.22),xt(W(i,"forearmL"),-.5-Math.max(0,u)*.2,.08,.04),xt(W(i,"handL"),.08,0,.08),xt(W(i,"armR"),.5-d*.05*s,-.24,-.2),xt(W(i,"forearmR"),-1.32,.18,.1),xt(W(i,"handR"),.16,.1,.24),Ps(i)):h?(xt(W(i,"armL"),.1-u*.08*s,.04,.08),xt(W(i,"forearmL"),-.2,.04,.02),xt(W(i,"handL"),.06,.02,.04),xt(W(i,"armR"),-d*.62*c*1.4+.08,-.04,-.08),xt(W(i,"forearmR"),-.32-Math.max(0,d)*.45,-.04,0),xt(W(i,"handR"),-d*.12,0,-.04)):(xt(W(i,"armL"),-u*.7*c*1.35+.1,.04,.08),xt(W(i,"armR"),-d*.7*c*1.35+.1,-.04,-.08),xt(W(i,"forearmL"),-.35-Math.max(0,u)*.4,0,0),xt(W(i,"forearmR"),-.35-Math.max(0,d)*.4,0,0),xt(W(i,"handL"),-u*.1,0,.04),xt(W(i,"handR"),-d*.1,0,-.04)),R&&(R.rotation.y=-u*.12*s,R.rotation.x=-.06*r*s-D*.4,R.rotation.z=u*.03*s,R.position.x=-u*.01*s,R.scale.set(1,1,1)),xt(W(i,"playerHead"),-.03-D*.5,u*.05*s,-u*.02*s);const P=W(i,"idleSpear");P&&P.visible&&P.rotation.set(.04-u*.02,.02,.03+u*.01),Ji(i,D)}function Be(i,t,e){return{x:Ro(i.x,t.x,e),y:Ro(i.y,t.y,e),z:Ro(i.z,t.z,e)}}function ke(i,t){xt(i,t.x,t.y,t.z)}function Ph(i,t){const e=Math.max(0,Math.min(1,t)),n={armR:{x:.55,y:-.28,z:-.22},forearmR:{x:-1.35,y:.22,z:.12},handR:{x:.22,y:.14,z:.32},tool:{x:Math.PI/2,y:.16,z:.22},armL:{x:.35,y:.22,z:.38},forearmL:{x:-.85,y:.14,z:.1},torso:{x:.08,y:-.16,z:.05},hips:{x:.02,y:-.08,z:0},head:{x:-.04,y:.12,z:-.04},clavR:{x:.08,y:-.1,z:-.12},clavL:{x:.04,y:.06,z:.08},legL:{x:-.2,y:.04,z:.05},legR:{x:.08,y:-.02,z:-.04},shinL:{x:.28,y:0,z:0},shinR:{x:.18,y:0,z:0}},s={armR:{x:-1.05,y:-.72,z:-.58},forearmR:{x:-1.48,y:-.22,z:.12},handR:{x:-.28,y:.2,z:.42},tool:{x:1.05,y:.62,z:-.45},armL:{x:.48,y:.22,z:.42},forearmL:{x:-.78,y:.1,z:.1},torso:{x:-.16,y:-.52,z:-.1},hips:{x:.04,y:-.2,z:-.05},head:{x:-.1,y:-.28,z:.04},clavR:{x:-.12,y:-.22,z:-.28},clavL:{x:.1,y:.12,z:.14},legL:{x:-.28,y:.06,z:.06},legR:{x:.12,y:-.04,z:-.05},shinL:{x:.32,y:0,z:0},shinR:{x:.22,y:0,z:0}},r={armR:{x:.98,y:.58,z:.62},forearmR:{x:-.22,y:.28,z:.06},handR:{x:.48,y:-.08,z:-.32},tool:{x:1.92,y:-.42,z:.55},armL:{x:-.12,y:.08,z:.22},forearmL:{x:-.38,y:.06,z:.04},torso:{x:.24,y:.58,z:.14},hips:{x:-.02,y:.22,z:.06},head:{x:.1,y:.32,z:-.06},clavR:{x:.18,y:.16,z:.12},clavL:{x:.02,y:.04,z:.08},legL:{x:-.42,y:.05,z:-.05},legR:{x:.22,y:-.04,z:.04},shinL:{x:.18,y:0,z:0},shinR:{x:.38,y:0,z:0}};let o=n,a=s,c=0;e<.36?(o=n,a=s,c=pi(e/.36)):e<.52?(o=s,a=r,c=pi((e-.36)/.16)):(o=r,a=n,c=Or((e-.52)/.48)),ke(W(i,"armR"),Be(o.armR,a.armR,c)),ke(W(i,"forearmR"),Be(o.forearmR,a.forearmR,c)),ke(W(i,"handR"),Be(o.handR,a.handR,c)),ke(W(i,"toolRoot"),Be(o.tool,a.tool,c)),ke(W(i,"armL"),Be(o.armL,a.armL,c)),ke(W(i,"forearmL"),Be(o.forearmL,a.forearmL,c)),ke(W(i,"playerTorso"),Be(o.torso,a.torso,c)),ke(W(i,"playerHips"),Be(o.hips,a.hips,c)),ke(W(i,"playerHead"),Be(o.head,a.head,c)),ke(W(i,"clavR"),Be(o.clavR,a.clavR,c)),ke(W(i,"clavL"),Be(o.clavL,a.clavL,c)),ke(W(i,"legL"),Be(o.legL,a.legL,c)),ke(W(i,"legR"),Be(o.legR,a.legR,c)),ke(W(i,"shinL"),Be(o.shinL,a.shinL,c)),ke(W(i,"shinR"),Be(o.shinR,a.shinR,c)),xt(W(i,"footL"),.05,0,0),xt(W(i,"footR"),.04,0,0),xt(W(i,"handL"),.1,.05,.1);const l=W(i,"playerHips");l&&(l.position.x=0);const h=W(i,"playerTorso");h&&(h.position.x=0,h.scale.set(1,1,1));const u=e<.36?0:e<.52?c:1-c;Ji(i,.02+u*.04)}function Ca(i,t,e){const n=t%1,s=Math.max(0,Math.sin(n*Math.PI*2+.4)),r=Math.max(0,Math.sin(n*Math.PI*2-.55)),o=e==="tree"?1:.88;xt(W(i,"armR"),-.15-s*1.15*o+r*.85*o,-.15,-.22-r*.12),xt(W(i,"forearmR"),-.85+r*.7-s*.25,.1,.08),xt(W(i,"handR"),.15+r*.2,.08,.2),xt(W(i,"armL"),.25+r*.2,.1,.22),xt(W(i,"forearmL"),-.45,.06,.04),Ps(i);const a=W(i,"toolRoot");a&&(a.rotation.x+=-s*.25+r*.45,a.rotation.z+=r*.2);const c=W(i,"playerHips");c&&(c.position.x=0);const l=W(i,"playerTorso");l&&(l.rotation.x=r*.22-s*.08,l.rotation.y=(s-r)*.08,l.position.x=0,l.scale.set(1,1,1)),xt(W(i,"legL"),-r*.14,0,.03),xt(W(i,"legR"),r*.18,0,-.03),xt(W(i,"shinL"),Yn(.16+r*.1),0,0),xt(W(i,"shinR"),Yn(.2+r*.18),0,0),Ji(i,r*.025)}function Il(i,t,e=.55){const n=Math.max(0,Math.min(1,t)),s=Math.max(.2,Math.min(1.4,e)),r=Math.sin(n*Math.PI);i.rotation.z=r*.3*s,i.rotation.x=-r*(s>.7?.24:.13)*s;const o=s>.7?r*.3*(s-.7):r*.08*s,a=i.getObjectByName("playerTorso")||i.getObjectByName("yetiBody")||i.getObjectByName("orcBody");a&&(a.rotation.y=o,a.rotation.x=-r*.1*s)}function hs(i,t,e,n){let s=t-i;for(;s>Math.PI;)s-=Math.PI*2;for(;s<-Math.PI;)s+=Math.PI*2;const r=Math.sign(s)*Math.min(Math.abs(s),e*n);return i+r}function Lh(i,t){const e=Math.max(0,Math.min(1,t)),n=W(i,"yetiArmR"),s=W(i,"yetiArmL"),r=W(i,"yetiHead"),o=W(i,"yetiBody"),a=W(i,"yetiLegL"),c=W(i,"yetiLegR");let l=0,h=0,u=0,d=0;if(e<.42){const f=pi(Math.min(1,e/.3)),g=e>.3?1:f;l=-1.65*g,h=-.62*g,u=-.28*g,d=.4*g}else if(e<.62){const f=pi((e-.42)/.2);l=-1.65+3.05*f,h=-.62+2.2*f,u=-.28+.7*f,d=.4+.3*f}else{const f=Or((e-.62)/.38);l=1.4*(1-f),h=1.58*(1-f),u=.42*(1-f),d=.7*(1-f)}n&&(n.rotation.x=l,n.rotation.y=h*.7,n.rotation.z=h*.4),s&&(s.rotation.x=l*.7,s.rotation.y=-h*.3,s.rotation.z=-h*.18),r&&(r.rotation.x=-.15-d*.5,r.rotation.y=h*.14),o&&(o.rotation.x=.2+u,o.rotation.y=h*.22),a&&(a.rotation.x=u*.45),c&&(c.rotation.x=-u*.55),i.position.y=Math.max(0,u)*.08}function Ih(i,t){const e=Math.max(0,Math.min(1,t)),n=W(i,"orcSpear"),s=W(i,"orcArmR"),r=W(i,"orcArmL"),o=W(i,"orcHead"),a=W(i,"orcBody"),c=W(i,"orcLegL"),l=W(i,"orcLegR");let h=0,u=0,d=0;if(e<.4){const f=pi(Math.min(1,e/.28)),g=e>.28?1:f;h=g,u=-.52*g,d=-.2*g}else if(e<.58){const f=pi((e-.4)/.18);h=1-f,u=-.52+1.95*f,d=-.2+.55*f}else{const f=Or((e-.58)/.42);h=0,u=1.43*(1-f),d=.35*(1-f)}n&&Tr(n,{rx:-u*.35,z:u*.22-h*.1,y:h*.04-u*.02}),s&&(s.rotation.x=-u*1.3+h*.55,s.rotation.z=h*.25,s.rotation.y=u*.18),r&&(r.rotation.x=h*.4+u*.3,r.rotation.z=.18),o&&(o.rotation.x=-u*.22+d*.35,o.rotation.y=u*.08),a&&(a.rotation.x=d,a.rotation.y=u*.16),c&&(c.rotation.x=d*.65+u*.32,c.rotation.z=-d*.05),l&&(l.rotation.x=-d*.85-u*.2,l.rotation.z=d*.04),i.position.y=Math.abs(d)*.07}function oi(i,t,e,n=1){const s=W(i,"yetiArmR"),r=W(i,"yetiArmL"),o=W(i,"yetiLegL"),a=W(i,"yetiLegR"),c=W(i,"yetiHead"),l=W(i,"yetiBody"),h=Math.max(0,Math.min(1,n));if(!e||h<.05){const m=Math.sin(t*1.15)*.045;s&&(s.rotation.x=m,s.rotation.y=0,s.rotation.z=.08),r&&(r.rotation.x=-m*.7,r.rotation.y=0,r.rotation.z=-.08),o&&o.rotation.set(.05,0,0),a&&a.rotation.set(-.05,0,0),c&&(c.rotation.x=-.12+m*.3),l&&(l.rotation.x=.2+m*.15),i.position.y=Math.abs(Math.sin(t*1.2))*.02;return}const d=t*3.1,f=.42*h,g=Rh(d)*f,_=Math.max(0,-Math.cos(d*2))*.065*h;o&&(o.rotation.x=g+.1,o.rotation.z=Math.sin(d)*.05),a&&(a.rotation.x=-g+.1,a.rotation.z=-Math.sin(d)*.05),s&&(s.rotation.x=-g*.85,s.rotation.z=.12,s.rotation.y=Math.sin(d)*.08),r&&(r.rotation.x=g*.85,r.rotation.z=-.12,r.rotation.y=-Math.sin(d)*.08),l&&(l.rotation.x=.22+_*.5,l.rotation.y=Math.sin(d)*.08*h,l.rotation.z=Math.sin(d)*.04*h),c&&(c.rotation.x=-.18-_,c.rotation.y=-Math.sin(d)*.05),i.position.y=_}function Ms(i,t,e,n=1){const s=W(i,"orcArmL"),r=W(i,"orcArmR"),o=W(i,"orcLegL"),a=W(i,"orcLegR"),c=W(i,"orcSpear"),l=W(i,"orcHead"),h=W(i,"orcBody"),u=Math.max(0,Math.min(1,n));if(!e||u<.05){const p=Math.sin(t*1.6)*.028;i.position.y=Math.abs(p)*.5,s&&(s.rotation.x=p),r&&(r.rotation.x=-.18+p*.4),c&&Tr(c),h&&(h.rotation.x=.04),l&&(l.rotation.x=p*.4),o&&o.rotation.set(0,0,0),a&&a.rotation.set(0,0,0);return}const f=t*5.8,g=.48*u,_=Rh(f)*g,m=Math.max(0,-Math.cos(f*2))*.042*u;o&&(o.rotation.x=_,o.rotation.z=Math.sin(f)*.04),a&&(a.rotation.x=-_,a.rotation.z=-Math.sin(f)*.04),s&&(s.rotation.x=-_*.75,s.rotation.z=.12),r&&(r.rotation.x=-.22-_*.12,r.rotation.z=-.08),c&&Tr(c,{rx:-_*.04,y:m*.3}),h&&(h.rotation.x=.08*u+m*.4,h.rotation.y=Math.sin(f)*.07*u),l&&(l.rotation.x=-.05,l.rotation.y=-Math.sin(f)*.04),i.position.y=m}function Xg(i,t,e){const n=Math.max(0,Math.min(1,e)),s=pi(Math.min(1,n/.55)),r=Or(Math.max(0,(n-.35)/.65));if(t==="yeti"){i.rotation.z=s*1.25,i.rotation.x=s*.42+r*.15,i.position.y=-s*.45-r*.12,i.scale.setScalar(1.15*(1-r*.12));const o=W(i,"yetiArmR"),a=W(i,"yetiArmL");o&&(o.rotation.x=r*.8),a&&(a.rotation.x=-r*.5);const c=W(i,"yetiHead");c&&(c.rotation.x=-.15+r*.6)}else if(t==="orc"){i.rotation.x=s*1.45,i.rotation.z=r*.25,i.position.y=-s*.18-r*.08,i.scale.setScalar(1-r*.22);const o=W(i,"orcArmR"),a=W(i,"orcArmL");o&&(o.rotation.x=-r*.9),a&&(a.rotation.x=r*.6);const c=W(i,"orcSpear");c&&Tr(c,{rx:r*.5,y:-r*.12})}else i.rotation.z=s*.7,i.rotation.x=r*.2,i.position.y=-s*.25-r*.05}const Yg=.44,Dl=.56,qg=.48,$g=.62,Kg=.45,Zg=.58,Ar=.78,Rr=1.05,Cr=.82,Jg=.36,jg=.42,Qg=.4,Dh=[];function Xe(i,t){let e=Math.imul(i|0,1597334677)^Math.imul(t|0,3812015801);return e=Math.imul(e^e>>>16,2146121005),e=Math.imul(e^e>>>15,2221713035),((e^e>>>16)>>>0)/4294967296}function Ul(i){return i*i*i*(i*(i*6-15)+10)}function zr(i,t){const e=Math.floor(i),n=Math.floor(t),s=i-e,r=t-n,o=Ul(s),a=Ul(r),c=Xe(e,n),l=Xe(e+1,n),h=Xe(e,n+1),u=Xe(e+1,n+1);return c+(l-c)*o+(h-c)*a+(c-l-h+u)*o*a}function zi(i,t,e=5){let n=0,s=.5,r=1,o=0;for(let a=0;a<e;a++)n+=s*zr(i*r,t*r),o+=s,s*=.5,r*=2.07;return n/o}function t_(i,t){const e=zi(i*.31+17.2,t*.31-9.4,3),n=zi(i*.31-8.1,t*.31+5.6,3);return zi(i*.11+e*1.65,t*.11+n*1.65,5)}function nc(i,t){const e=Math.exp(-((i*.15+.05)**2)*8-(t*.12-.15)**2*3),n=Math.exp(-((i+.5-t*.35)**2)*2.2-(t-1.2)**2*.08),s=Math.exp(-((i+3.2-t*.15)**2)*1.4-(t+2.5)**2*.06);return Math.max(e,n*.85,s*.75)}function ic(i,t){const e=Math.exp(-((i-4.2)**2)*.09-(t-7.2)**2*.08),n=Math.exp(-((i-5.5)**2)*.15-(t-6)**2*.12);return Math.max(e,n*.85)}function e_(i,t){return Math.exp(-((i+2.05)**2+(t+.55)**2)*.11)}function Me(i,t){const e=(t_(i,t)-.5)*.38,n=(zi(i*1.65+41.2,t*1.65-18.7,4)-.5)*.07,s=(zr(i*7.2+3.1,t*7.2-2.4)-.5)*.022;let r=e+n+s;return r*=1-e_(i,t)*.84,r*=1-nc(i,t)*.38,r+=ic(i,t)*.045,r}function n_(i,t){return zi(i*2.4+12.7,t*2.4-6.3,4)}function i_(i=48){const e=new cn(i,i,128,128),n=e.attributes.position,s=new Float32Array(n.count*3),r=new Mt(7189564),o=new Mt(9227338),a=new Mt(5149230),c=new Mt(11066466),l=new Mt(4094508),h=new Mt(10123848),u=new Mt(7230512),d=new Mt(15660795),f=new Mt(13163754),g=new Mt;for(let p=0;p<n.count;p++){const w=n.getX(p),v=-n.getY(p);n.setZ(p,Me(w,v));const D=nc(w,v),T=ic(w,v),R=n_(w,v),P=zr(w*1.9+4.2,v*1.9-1.7);T>.24?(g.copy(d).lerp(f,R),g.lerp(r,1-Math.min(1,T*1.7))):D>.28?(g.copy(h).lerp(u,P),g.lerp(r,1-Math.min(1,D*1.4))):R>.72?g.copy(l).lerp(a,P*.45):(g.copy(r).lerp(R>.52?o:a,R*.7+P*.3),g.lerp(c,Math.max(0,P-.55)*.85)),s[p*3]=g.r,s[p*3+1]=g.g,s[p*3+2]=g.b}e.setAttribute("color",new je(s,3)),e.computeVertexNormals();const _=s_(),m=new I(e,new ye({vertexColors:!0,roughness:.86,metalness:0,flatShading:!1,bumpMap:_,bumpScale:.22}));return m.rotation.x=-Math.PI/2,m.receiveShadow=!0,m.name="ground",m}function s_(){const t=document.createElement("canvas");t.width=256,t.height=256;const e=t.getContext("2d"),n=e.createImageData(256,256);for(let r=0;r<256;r++)for(let o=0;o<256;o++){const a=zi(o*.11+2.2,r*.11-1.4,4),c=zr(o*.55,r*.38),l=Math.floor((a*.62+c*.38)*255),h=(r*256+o)*4;n.data[h]=l,n.data[h+1]=l,n.data[h+2]=l,n.data[h+3]=255}e.putImageData(n,0,0);const s=new Ka(t);return s.wrapS=Gi,s.wrapT=Gi,s.repeat.set(22,22),s.anisotropy=4,s.colorSpace=fn,s}function r_(){const i=document.createElement("canvas");i.width=32,i.height=64;const t=i.getContext("2d"),e=t.createLinearGradient(16,64,16,0);e.addColorStop(0,"rgba(70, 130, 28, 0)"),e.addColorStop(.1,"rgba(96, 168, 40, 255)"),e.addColorStop(.5,"rgba(168, 220, 64, 255)"),e.addColorStop(1,"rgba(232, 255, 120, 240)"),t.fillStyle=e,t.beginPath(),t.moveTo(16,2),t.quadraticCurveTo(5,36,9,64),t.lineTo(23,64),t.quadraticCurveTo(27,36,16,2),t.fill();const n=new Ka(i);return n.colorSpace=Ge,n.anisotropy=4,n}function o_(){const i=[],t=[];for(let s=0;s<5;s++){const r=s/5*Math.PI,o=Math.cos(r),a=Math.sin(r),c=.085+s%3*.02,l=.26+s%4*.07,h=[[-c,0,0],[c,0,0],[c,l,0],[-c,l,0]],u=[0,1,2,0,2,3];for(const d of u){const[f,g]=h[d];i.push(f*o,g,f*a),t.push(d===0||d===3?0:1,g/l)}}const n=new Pe;return n.setAttribute("position",new Jt(i,3)),n.setAttribute("uv",new Jt(t,2)),n.computeVertexNormals(),n}function a_(){const i=[],t=[],s=[[-.012,0,0],[.012,0,0],[.012,.16,0],[-.012,.16,0]];for(const a of[0,1,2,0,2,3]){const[c,l,h]=s[a];i.push(c,l,h),t.push(a===0||a===3?.45:.55,l/.16)}const r=.09;for(const a of[0,Math.PI/2]){const c=Math.cos(a),l=Math.sin(a),h=[[-r,.16-.01],[r,.16-.01],[r,.16+.07],[-r,.16+.07]];for(const u of[0,1,2,0,2,3]){const[d,f]=h[u];i.push(d*c,f,d*l),t.push(u===0||u===3?0:1,(f-.16+.01)/.08)}}const o=new Pe;return o.setAttribute("position",new Jt(i,3)),o.setAttribute("uv",new Jt(t,2)),o.computeVertexNormals(),o}function Nl(i,t){i.onBeforeCompile=e=>{e.uniforms.uTime={value:0},e.vertexShader=`uniform float uTime;
${e.vertexShader}`,e.vertexShader=e.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
       float hgt = max(transformed.y, 0.0);
       vec3 ip = vec3(instanceMatrix[3][0], instanceMatrix[3][1], instanceMatrix[3][2]);
       float t = uTime * 1.55 + ip.x * 0.82 + ip.z * 0.64;
       transformed.x += sin(t) * ${t.toFixed(3)} * hgt;
       transformed.z += cos(t * 0.88 + 0.35) * ${(t*.55).toFixed(3)} * hgt;`),Dh.push(e)}}function Co(i,t,e=.32,n=.22){return!(nc(i,t)>e||ic(i,t)>n||Math.hypot(i+1.2,t+.5)<1.55||Math.hypot(i+3.5,t+1.5)<1.35)}function c_(){const i=new Bt;i.name="terrainFoliage";const t=new Ae,e=new So({map:r_(),color:15400856,side:Te,alphaTest:.18});Nl(e,.55);const n=[],s=new Mt(11853914),r=new Mt(6989874),o=new Mt,a=.5;for(let T=-20;T<=20;T+=a)for(let R=-20;R<=20;R+=a){const P=(Xe(Math.floor(T*20+3),Math.floor(R*20+9))-.5)*a*.92,S=(Xe(Math.floor(T*20+11),Math.floor(R*20+2))-.5)*a*.92,x=T+P,C=R+S,H=Xe(Math.floor(x*17+4),Math.floor(C*19+8));if(H<.22||!Co(x,C))continue;const N=.75+H*.7;n.push({x,z:C,h:Me(x,C),s:N,r:H*Math.PI*2,c:o.copy(s).lerp(r,Xe(Math.floor(x*8),Math.floor(C*13)))})}const c=new _o(o_(),e,n.length);c.name="instancedGrass",c.castShadow=!1,c.receiveShadow=!0,c.instanceMatrix.setUsage(Pu);const l=new Float32Array(n.length*3);n.forEach((T,R)=>{t.position.set(T.x,T.h,T.z),t.rotation.set(0,T.r,0),t.scale.setScalar(T.s),t.updateMatrix(),c.setMatrixAt(R,t.matrix),l[R*3]=T.c.r,l[R*3+1]=T.c.g,l[R*3+2]=T.c.b}),c.instanceColor=new ms(l,3),c.instanceMatrix.needsUpdate=!0,c.frustumCulled=!1,c.raycast=()=>{},i.add(c);const h=new So({color:16777215,side:Te});Nl(h,.35);const u=[16774876,16768060,16738984,13142271,16747058],d=[],f=1.28;for(let T=-19;T<=19;T+=f)for(let R=-19;R<=19;R+=f){const P=(Xe(Math.floor(T*13+21),Math.floor(R*13+5))-.5)*f,S=(Xe(Math.floor(T*13+7),Math.floor(R*13+18))-.5)*f,x=T+P,C=R+S,H=Xe(Math.floor(x*29+1),Math.floor(C*31+6));if(H<.28||!Co(x,C,.26,.18))continue;const N=new Mt(u[Math.floor(H*u.length)%u.length]);d.push({x,z:C,h:Me(x,C),s:.85+H*.55,r:H*6.2,c:N})}const g=new _o(a_(),h,d.length);g.name="instancedFlowers",g.castShadow=!1;const _=new Float32Array(d.length*3);d.forEach((T,R)=>{t.position.set(T.x,T.h,T.z),t.rotation.set(0,T.r,0),t.scale.setScalar(T.s),t.updateMatrix(),g.setMatrixAt(R,t.matrix),_[R*3]=T.c.r,_[R*3+1]=T.c.g,_[R*3+2]=T.c.b}),g.instanceColor=new ms(_,3),g.instanceMatrix.needsUpdate=!0,g.frustumCulled=!1,g.raycast=()=>{},i.add(g);const m=new So({color:16777215,flatShading:!0}),p=[9079942,7236194,10130568,6054996],w=[],M=1.7;for(let T=-18.5;T<=18.5;T+=M)for(let R=-18.5;R<=18.5;R+=M){const P=(Xe(Math.floor(T*11+40),Math.floor(R*11+3))-.5)*M,S=(Xe(Math.floor(T*11+8),Math.floor(R*11+33))-.5)*M,x=T+P,C=R+S,H=Xe(Math.floor(x*23+2),Math.floor(C*27+9));H<.55||Co(x,C,.2,.16)&&w.push({x,z:C,h:Me(x,C),s:.7+H*1.1,rx:H*2.2,ry:H*5.1,c:new Mt(p[Math.floor(H*p.length)%p.length])})}const v=new _o(new Xn(.11,0),m,w.length);v.name="instancedStones",v.castShadow=!0,v.receiveShadow=!0;const D=new Float32Array(w.length*3);return w.forEach((T,R)=>{t.position.set(T.x,T.h+.04*T.s,T.z),t.rotation.set(T.rx,T.ry,T.rx*.4),t.scale.set(T.s*1.15,T.s*.7,T.s*1.05),t.updateMatrix(),v.setMatrixAt(R,t.matrix),D[R*3]=T.c.r,D[R*3+1]=T.c.g,D[R*3+2]=T.c.b}),v.instanceColor=new ms(D,3),v.instanceMatrix.needsUpdate=!0,v.frustumCulled=!1,v.raycast=()=>{},i.add(v),i}function l_(i){for(const t of Dh)t.uniforms.uTime.value=i}const Fl=new Map;function ge(i,t={}){const e=`${i}_${t.roughness??.78}_${t.metalness??.08}_${t.flatShading===!1?0:1}_${t.emissive??0}_${t.emissiveIntensity??0}`;let n=Fl.get(e);return n||(n=new ye({color:i,roughness:t.roughness??.78,metalness:t.metalness??.08,flatShading:t.flatShading??!0,envMapIntensity:t.envMapIntensity??.85,...t}),Fl.set(e,n)),n}function Pr(i,t=1.08,e=659976){const n=new I(i.geometry,new he({color:e,side:De,depthWrite:!1}));n.scale.setScalar(t),n.name="outline",i.add(n)}function Uh(i=0){const t=new Bt;t.name="tree";const e=1.55+i%5*.18,n=i%3===0?4862488:i%3===1?5913114:4074002,s=new I(new Wt(.16,.28,e,8),ge(n,{roughness:.95}));s.position.y=e/2,s.castShadow=!0,s.receiveShadow=!0,t.add(s);for(let h=0;h<3;h++){const u=h/3*Math.PI*2+i*.3,d=new I(new Ft(.05,e*(.55+h%2*.15),.07),ge(2758664,{roughness:1}));d.position.set(Math.cos(u)*.15,e*.45,Math.sin(u)*.15),d.rotation.y=u,t.add(d)}for(let h=0;h<3;h++){const u=new I(new fi(.18+h*.02,.02,4,10),ge(3021836,{roughness:1}));u.rotation.x=Math.PI/2,u.position.y=.35+h*(e*.28),t.add(u)}const r=i%2===0?3109424:3835448,o=i%3===0?2254376:5016648,a=1856032;for(let h=0;h<5;h++){const u=.9-h*.12,d=h%3===0?r:h%3===1?o:a,f=new I(new se(u,1-h*.1,9),ge(d,{roughness:.88}));if(f.position.y=e+.22+h*.42,f.rotation.y=(i+h)*.45,f.castShadow=!0,t.add(f),h<3){const g=new I(new se(u*.55,.55,7),ge(1325080,{roughness:.95}));g.position.y=e+.35+h*.42,t.add(g)}}const c=new I(new Wt(.34,.44,.2,7),ge(3811344,{roughness:1}));c.position.y=.08,c.receiveShadow=!0,t.add(c);for(let h=0;h<4;h++){const u=h/4*Math.PI*2+i,d=new I(new Ft(.12,.1,.35),ge(3021836));d.position.set(Math.cos(u)*.28,.06,Math.sin(u)*.28),d.rotation.y=u,t.add(d)}const l=new I(new Wt(.55,.55,.2,8),new he({visible:!1}));return l.position.y=.1,l.name="hit",t.add(l),t}function Pa(i,t=0){const e=new Bt;e.name="rock";const n=new I(new Xn(.55+t%3*.06,0),ge(t%2===0?6185576:5132888,{roughness:.9}));n.position.y=.4,n.rotation.set(.2,t,.1),n.castShadow=!0,n.receiveShadow=!0,e.add(n);const s=new I(new qe(.55,12),new he({color:0,transparent:!0,opacity:.28,depthWrite:!1}));s.rotation.x=-Math.PI/2,s.position.y=.02,e.add(s);const r=new I(new Xn(.28,0),ge(4869714));r.position.set(.35,.22,-.15),r.rotation.set(.4,t*.5,.2),r.castShadow=!0,e.add(r);const o=i==="copper"?12088115:12632264;for(let l=0;l<4;l++){const h=new I(new Vt(.1+l%2*.03,6,4),ge(o,{metalness:.55,roughness:.4,emissive:o,emissiveIntensity:.15})),u=l/4*Math.PI*2+t;h.position.set(Math.cos(u)*.32,.42+l%2*.18,Math.sin(u)*.32),e.add(h)}const a=new I(new Vt(.14,5,4),ge(3828272,{roughness:1}));a.position.set(-.25,.55,.2),a.scale.set(1.2,.5,1),e.add(a);const c=new I(new Vt(.75,8,6),new he({visible:!1}));return c.position.y=.4,c.name="hit",e.add(c),e}function Nh(){const i=new Bt;i.name="dummy";const t=(h,u={})=>new ye({color:h,roughness:u.roughness??.85,metalness:u.metalness??.05,flatShading:!0,...u}),e=new I(new Wt(.08,.1,1.4,6),t(5913114));e.position.y=.7,e.castShadow=!0,i.add(e);const n=new I(new Wt(.28,.32,.7,8),t(9071168));n.position.y=1.15,n.castShadow=!0,n.name="dummyBody",Pr(n,1.06,1708040),i.add(n);const s=new I(new Vt(.22,8,6),t(12886112));s.position.y=1.65,s.name="dummyHead",i.add(s);const r=t(4857872),o=new I(new Ft(.35,.06,.04),r);o.position.set(0,1.2,.3),o.rotation.z=.6,i.add(o);const a=o.clone();a.rotation.z=-.6,i.add(a);const c=new I(new Wt(.4,.45,.12,8),t(3811861));c.position.y=.06,c.receiveShadow=!0,i.add(c);const l=new I(new Wt(.45,.45,1.8,8),new he({visible:!1}));return l.position.y=.9,l.name="hit",i.add(l),i}function h_(i,t=140){const e=[];i.traverse(s=>{s.isMesh&&s.name!=="hit"&&s.name!=="outline"&&e.push(s)});const n=[];for(const s of e){const r=s.material;!r||!r.emissive||(n.push({mesh:s,emissive:r.emissive.clone(),intensity:r.emissiveIntensity??0}),r.emissive.setHex(16772778),r.emissiveIntensity=.85)}setTimeout(()=>{for(const s of n){const r=s.mesh.material;r.emissive.copy(s.emissive),r.emissiveIntensity=s.intensity}},t)}function Fh(){const i=new Bt;for(let s=0;s<8;s++){const r=new I(new Xn(.12,0),ge(5921368)),o=s/8*Math.PI*2;r.position.set(Math.cos(o)*.45,.08,Math.sin(o)*.45),r.rotation.set(Math.random(),o,.2),r.castShadow=!0,i.add(r)}for(let s=0;s<5;s++){const r=new I(new Wt(.06,.07,.7,5),ge(4860432));r.rotation.z=Math.PI/2,r.rotation.y=s/5*Math.PI*2,r.position.y=.1,i.add(r)}const t=new I(new se(.2,.55,5),new ye({color:16737826,emissive:16729088,emissiveIntensity:1.4,flatShading:!0,transparent:!0,opacity:.92}));t.position.y=.42,t.name="flame",i.add(t);const e=new I(new Vt(.18,8,6),new he({color:16755268,transparent:!0,opacity:.35,depthWrite:!1}));e.position.y=.28,e.name="flameGlow",i.add(e);const n=new Qa(16746564,1.6,14);return n.position.y=.65,n.castShadow=!1,i.add(n),i}function Oh(){const i=new Bt,t=ge(6967344,{roughness:.92,side:Te}),e=ge(4864024,{roughness:.94,side:Te}),n=new I(new Wt(.035,.035,1.55,6),ge(3811856,{roughness:1}));n.rotation.z=Math.PI/2,n.position.y=1.18,i.add(n);for(const a of[-1,1]){const c=new I(new cn(1.55,1.42),t);c.position.set(a*.52,.62,0),c.rotation.y=a*-.72,c.castShadow=!0,c.receiveShadow=!0,i.add(c);const l=new I(new cn(1.5,1.36),e);l.position.set(a*.5,.62,0),l.rotation.y=a*-.72+Math.PI,i.add(l)}const s=new I(new cn(1.05,1.05),e);s.position.set(0,.52,-.72),s.castShadow=!0,i.add(s);const r=new I(new cn(.42,.85),e);r.position.set(-.18,.42,.7),r.rotation.y=.35,i.add(r);const o=new I(new cn(.42,.85),t);o.position.set(.22,.42,.68),o.rotation.y=-.55,i.add(o);for(const[a,c]of[[-.9,-.9],[.9,-.9],[-.9,.9],[.9,.9]]){const l=new I(new Wt(.03,.03,.25,4),ge(3811856));l.position.set(a*.85,.12,c*.85),i.add(l)}return i}function La(){const i=new Bt,t=new I(new Ft(.55,.4,.45),ge(6965800));t.position.y=.2,t.castShadow=!0,t.receiveShadow=!0,i.add(t);const e=new I(new Ft(.58,.06,.48),ge(5913114));return e.position.y=.43,i.add(e),i}function gr(){const i=new Bt,t=new I(new Wt(.28,.3,.55,10),ge(5913114));t.position.y=.28,t.castShadow=!0,i.add(t);const e=new I(new fi(.29,.025,6,12),ge(9079434,{metalness:.5}));return e.rotation.x=Math.PI/2,e.position.y=.35,i.add(e),i}function Ia(){const i=new Bt,t=new I(new Wt(.14,.14,.7,8),ge(3820138));return t.rotation.z=Math.PI/2,t.position.y=.12,t.castShadow=!0,i.add(t),i}function u_(i=60){const t=new Vt(i,24,12),e=new Float32Array(t.attributes.position.count*3),n=t.attributes.position,s=new Mt(4888288),r=new Mt(9354472),o=new Mt(15914660),a=new Mt;for(let l=0;l<n.count;l++){const h=n.getY(l)/i,u=Math.max(0,Math.min(1,(h+.15)/1));u<.45?a.copy(o).lerp(r,u/.45):a.copy(r).lerp(s,(u-.45)/.55),e[l*3]=a.r,e[l*3+1]=a.g,e[l*3+2]=a.b}t.setAttribute("color",new je(e,3));const c=new I(t,new he({vertexColors:!0,side:De,depthWrite:!1,fog:!1}));return c.name="sky",c}function zh(){const i=new Bt;i.name="yeti";const t=(N,F={})=>new ye({color:N,roughness:F.roughness??.92,metalness:F.metalness??.02,flatShading:!0,...F}),e=t(15660282,{roughness:.94}),n=t(12900584,{roughness:.9}),s=t(13688296,{roughness:.96}),r=t(2763312,{roughness:.88}),o=t(526346,{roughness:.16,metalness:.62}),a=t(3816002,{roughness:.12,metalness:.7,emissive:1184280,emissiveIntensity:.25}),c=t(657930,{roughness:.35}),l=t(9056320,{roughness:.7}),h=t(15920084,{roughness:.4}),u=new I(new qe(.85,20),new he({color:0,transparent:!0,opacity:.42,depthWrite:!1}));u.name="contactShadow",u.rotation.x=-Math.PI/2,u.position.y=.03,i.add(u);const d=N=>{const F=new Bt,$=new I(new kn(.22,.35,3,6),e);$.position.set(0,.55,.05),$.rotation.x=.25,$.castShadow=!0,F.add($);const G=new I(new Ft(.48,.1,.38),r);G.position.set(0,.62,.08),F.add(G);const K=new I(new kn(.18,.28,3,6),n);K.position.set(0,.22,.12),K.rotation.x=-.15,K.castShadow=!0,F.add(K);const X=new I(new Ft(.4,.06,.32),r);X.position.set(0,.32,.14),F.add(X);const it=new I(new Ft(.38,.05,.3),r);it.position.set(0,.22,.14),F.add(it);const ht=new I(new Ft(.36,.05,.28),r);ht.position.set(0,.12,.15),F.add(ht);const pt=new I(new Ft(.32,.14,.48),e);pt.position.set(0,.07,.18),pt.castShadow=!0,F.add(pt);for(let wt=0;wt<5;wt++){const Ct=new I(new se(.036,.34,5),wt%2?a:o);if(Ct.rotation.x=Math.PI/2+.22,Ct.position.set(-.13+wt*.065,.05,.52),F.add(Ct),wt%2===0){const j=new I(new se(.018,.22,4),a);j.rotation.x=Math.PI/2+.22,j.position.set(-.13+wt*.065,.06,.58),F.add(j)}}return F.position.x=N*.32,F},f=d(-1);f.name="yetiLegL",i.add(f);const g=d(1);g.name="yetiLegR",i.add(g);const _=new I(new kn(.55,.55,4,10),e);_.position.set(0,1.35,-.08),_.scale.set(1.15,1,.95),_.rotation.x=.2,_.castShadow=!0,_.name="yetiBody",Pr(_,1.06,660768),i.add(_);for(let N=0;N<3;N++)for(const F of[-1,1]){const $=new I(new Ft(.18,.07,.42),r);$.position.set(F*.52,1.58-N*.18,.02),i.add($)}const m=new I(new Vt(.38,8,6),n);m.position.set(0,1.15,.28),m.scale.set(1.1,1,.55),i.add(m);const p=(N,F,$,G,K,X=e)=>{const it=new I(new se(.12*K,.32*K,5),X);it.position.set(F,$,G),it.rotation.x=-.45,it.rotation.z=(F>0?1:F<0?-1:0)*.12*K,it.castShadow=!0,N.add(it);for(let ht=0;ht<3;ht++){const pt=ht/3*Math.PI*2+K,wt=new I(new se(.04*K,.22*K,4),ht%2===0?s:X);wt.position.set(F+Math.cos(pt)*.05*K,$+.03*K,G+Math.sin(pt)*.04*K),wt.rotation.x=-.55,wt.rotation.z=(F>0?1:-1)*.14,wt.castShadow=!0,N.add(wt)}};p(_,-.42,.42,-.12,1.05),p(_,.42,.42,-.12,1.05),p(_,0,.52,-.28,1,s),p(_,-.28,.48,.12,.75,n),p(_,.28,.48,.12,.75,n);const w=N=>{const F=new Bt;F.name=N<0?"yetiArmL":"yetiArmR",F.position.set(N*.68,1.72,.08),F.rotation.z=N*.28,F.rotation.x=-.22;const $=new I(new kn(.2,.38,3,6),e);$.position.set(0,-.22,0),$.castShadow=!0,F.add($);const G=new I(new Ft(.42,.09,.28),r);G.position.set(0,-.18,.04),F.add(G);const K=new Bt;K.position.set(0,-.46,0),K.rotation.x=-.38;const X=new I(new kn(.16,.32,3,6),n);X.position.set(0,-.2,0),X.castShadow=!0,K.add(X);for(let wt=0;wt<3;wt++){const Ct=new I(new Ft(.34,.055,.24),r);Ct.position.set(0,-.08-wt*.1,.04),K.add(Ct)}const it=new Bt;it.position.set(0,-.4,.05);const ht=new I(new Vt(.16,6,5),e);ht.castShadow=!0,it.add(ht);for(let wt=0;wt<4;wt++){const Ct=new I(new se(.034,.28,5),wt%2?a:o);Ct.rotation.x=Math.PI/2+.18,Ct.position.set((wt-1.5)*.068,-.06,.18),it.add(Ct);const j=new I(new se(.014,.18,4),a);j.rotation.x=Math.PI/2+.18,j.position.set((wt-1.5)*.068,-.05,.26),it.add(j)}const pt=new I(new se(.03,.22,5),o);return pt.rotation.x=Math.PI/2+.1,pt.rotation.z=N*.7,pt.position.set(N*.12,-.02,.1),it.add(pt),K.add(it),F.add(K),F};i.add(w(-1)),i.add(w(1));const M=new Bt;M.name="yetiHead",M.position.set(0,2.15,.15),M.rotation.x=-.15;const v=new I(new Vt(.38,10,8),e);v.scale.set(1.05,.95,1.1),v.castShadow=!0,Pr(v,1.08,660768),M.add(v),p(M,0,.28,-.18,.85,s),p(M,-.22,.22,-.08,.7),p(M,.22,.22,-.08,.7);const D=new I(new Ft(.55,.12,.2),t(12110036));D.position.set(0,.12,.28),M.add(D);const T=N=>{const F=new I(new Vt(.1,5,4),t(525828));F.position.set(N,.06,.3),M.add(F);const $=new I(new qe(.07,6),new he({color:16756760}));$.position.set(N,.06,.4),$.name="yetiEye",M.add($);const G=new I(new qe(.1,6),new he({color:16755234,transparent:!0,opacity:.22,depthWrite:!1}));G.position.set(N,.06,.38),G.name="yetiEyeGlow",M.add(G);const K=new Qa(16750848,.45,2.6);K.name="yetiEyeLight",K.position.set(N,.06,.48),M.add(K)};T(-.15),T(.15);const R=new I(new kn(.16,.18,3,6),n);R.rotation.x=Math.PI/2,R.position.set(0,-.08,.42),M.add(R);const P=new I(new Vt(.08,6,5),c);P.position.set(0,-.02,.58),M.add(P);const S=new I(new Ft(.36,.16,.28),l);S.position.set(0,-.22,.38),M.add(S);const x=(N,F,$)=>{const G=new I(new se(.042,.2,4),h);G.rotation.x=$?Math.PI:0,G.position.set(N,F,.5),M.add(G)};x(-.11,-.1,!0),x(.11,-.1,!0),x(-.09,-.3,!1),x(.09,-.3,!1);for(let N=0;N<5;N++){const F=new I(new Ft(.04,.06,.04),h);F.position.set(-.12+N*.06,-.14,.52),M.add(F)}for(const N of[-1,1]){const F=new I(new Vt(.08,6,5),e);F.position.set(N*.28,.18,-.08),F.scale.set(.7,.85,.55),M.add(F)}i.add(M);const C=new I(new se(.12,.38,8,1,!0),new ye({color:13694719,emissive:6745855,emissiveIntensity:.9,transparent:!0,opacity:.32,flatShading:!0,side:Te,depthWrite:!1}));C.rotation.x=Math.PI/2,C.position.set(0,-.12,.72),C.name="yetiBreath",M.add(C);for(let N=0;N<3;N++){const F=new I(new Vt(.07+N*.025,6,5),new he({color:12118271,transparent:!0,opacity:.22-N*.04,depthWrite:!1}));F.position.set((N-1)*.04,-.1,.85+N*.1),F.name="yetiBreathMist",M.add(F)}const H=new I(new Wt(.85,.95,2.4,10),new he({visible:!1}));return H.position.y=1.2,H.name="hit",i.add(H),i.scale.setScalar(1.15),i}function ar(i,t){const e=i.getObjectByName("yetiArmR"),n=i.getObjectByName("yetiArmL"),s=Math.max(0,Math.min(1,t));let r=0,o=0;if(s<=0)r=0,o=0;else if(s<.35){const c=s/.35;r=-1.35*c,o=-.4*c}else if(s<.55){const c=(s-.35)/.2;r=-1.35+2.4*c,o=-.4+1.6*c}else{const c=(s-.55)/.45;r=1.05*(1-c),o=1.2*(1-c)}e&&(e.rotation.x=r,e.rotation.y=o*.55),n&&(n.rotation.x=r*.55);const a=i.getObjectByName("yetiHead");a&&(a.rotation.x=-.15-Math.min(s,1)*.2)}function d_(){const i=new Bt;i.name="snowProps";const t=ge(15266552,{roughness:.78}),e=ge(11063528,{roughness:.35,metalness:.15,emissive:4491434,emissiveIntensity:.12}),n=ge(6975608,{roughness:.92}),s=[[3.2,6.4,.9],[5.4,8,1.1],[4.8,5.8,.7],[2.6,7.8,.85],[5.8,6.6,.75],[3.6,8.6,.95]];for(const[r,o,a]of s){const c=new I(new Xn(.35*a,0),t);if(c.position.set(r,.12*a,o),c.scale.set(1.4,.55,1.2),c.castShadow=!0,c.receiveShadow=!0,i.add(c),a>.85){const l=new I(new An(.18*a,0),e);l.position.set(r+.15,.28*a,o-.1),l.rotation.set(.3,.5,.2),i.add(l)}}for(const[r,o]of[[6.2,7.5],[2.2,6]]){const a=new I(new Xn(.4,0),n);a.position.set(r,.25,o),a.castShadow=!0,i.add(a);const c=new I(new Vt(.28,6,4),t);c.position.set(r,.48,o),c.scale.set(1.2,.45,1),i.add(c)}return i}function f_(){const i=new Bt;i.name="godRays";const t=new he({color:16773320,transparent:!0,opacity:.09,depthWrite:!1,side:Te});for(let e=0;e<5;e++){const n=new I(new cn(1.2+e*.15,18),t);n.position.set(-4+e*2.4,9,-2+e%3*3),n.rotation.z=-.35-e*.04,n.rotation.y=.25,i.add(n)}return i}function Bh(){const i=new Bt;i.name="orc";const t=(U,O={})=>new ye({color:U,roughness:O.roughness??.85,metalness:O.metalness??.05,flatShading:!0,...O}),e=t(9412694,{roughness:.82}),n=t(6189112,{roughness:.88}),s=t(1315862,{roughness:.96}),r=t(3810836,{roughness:.82}),o=t(2365452,{roughness:.88}),a=t(5914155,{roughness:.7}),c=t(12888184,{roughness:.97}),l=t(10123858,{roughness:.97}),h=t(1711644,{roughness:.93}),u=t(13686494,{metalness:.82,roughness:.2}),d=t(4861972,{roughness:.88}),f=t(16117988,{roughness:.4,metalness:.08}),g=(U,O=i,b)=>(U.castShadow=!0,U.receiveShadow=!0,b&&Pr(U,b,659976),O.add(U),U),_=(U,O,b,ct,Z,ot,st,Rt,ft=0)=>{for(let A=0;A<ot;A++){const y=A/ot*Math.PI*2+ft,V=st*(.8+A%4*.08),Q=new I(new se(Rt*(.9+A%3*.08),V,4),A%3===0?l:c);Q.position.set(O+Math.cos(y)*Z,b+V*.2+A%3*.012,ct+Math.sin(y)*Z),Q.rotation.z=-Math.cos(y)*.55,Q.rotation.x=Math.sin(y)*.55,Q.rotation.y=A%5*.1,Q.castShadow=!0,U.add(Q)}},m=new I(new qe(.4,18),new he({color:0,transparent:!0,opacity:.4,depthWrite:!1}));m.name="contactShadow",m.rotation.x=-Math.PI/2,m.position.y=.03,i.add(m);const p=U=>{const O=new Bt,b=new I(new Wt(.12,.135,.36,7),h);b.position.set(0,.62,0),g(b,O);const ct=new I(new Wt(.105,.115,.22,7),h);ct.position.set(0,.34,.015),g(ct,O);const Z=new I(new Wt(.12,.13,.22,6),r);Z.position.set(0,.16,.02),g(Z,O,1.05);const ot=new I(new Ft(.16,.1,.28),o);ot.position.set(0,.05,.08),g(ot,O);for(const st of[-1,1]){const Rt=new I(new Ft(.03,.22,.018),a);Rt.position.set(0,.16,.02),Rt.rotation.z=st*.7,O.add(Rt)}return _(O,0,.28,.02,.13,12,.12,.032),O.position.x=U*.17,O},w=p(-1);w.name="orcLegL",i.add(w);const M=p(1);M.name="orcLegR",i.add(M);const v=new I(new Wt(.25,.29,.22,8),r);v.position.y=.78,g(v,i);for(const[U,O]of[[.18,0],[-.18,Math.PI]]){const b=new yr;b.moveTo(-.14,0),b.lineTo(.14,0),b.lineTo(0,-.22),b.closePath();const ct=new I(new Ts(b,{depth:.04,bevelEnabled:!1}),o);ct.position.set(0,.72,U),ct.rotation.y=O,g(ct,i)}for(const U of[-1,1]){const O=new yr;O.moveTo(-.1,0),O.lineTo(.1,0),O.lineTo(0,-.18),O.closePath();const b=new I(new Ts(O,{depth:.035,bevelEnabled:!1}),a);b.position.set(U*.24,.72,0),b.rotation.y=U*Math.PI*.5,g(b,i)}const D=new I(new Wt(.27,.29,.55,9),r);D.position.y=1.12,g(D,i,1.07),D.name="orcBody";const T=new I(new Ft(.42,.32,.16),a);T.position.set(0,1.2,.14),g(T,i);for(const U of[-1,1]){const O=new I(new Vt(.12,7,5),e);O.position.set(U*.3,1.38,0),O.scale.set(.9,.85,1),g(O,i)}const R=new I(new Wt(.3,.3,.09,10),o);R.position.y=.88,g(R,i);const P=new I(new Ft(.11,.08,.05),u);P.position.set(0,.88,.29),i.add(P);const S=(U,O=.22)=>{const b=new I(new Ft(.08,.58,.038),o);b.position.set(0,1.18,O),b.rotation.z=U,i.add(b);for(const ct of[-.18,.18]){const Z=new I(new Vt(.018,5,4),u);Z.position.set(Math.sin(U)*ct*.15,1.18+Math.cos(U)*ct,O+.025),i.add(Z)}};S(.55,.27),S(-.55,.27),S(.55,-.27),S(-.55,-.27);const x=new I(new Wt(.04,.04,.04,6),u);x.rotation.x=Math.PI/2,x.position.set(0,1.18,-.29),i.add(x);const C=new I(new An(.075,0),u);C.scale.set(1.15,.9,.45),C.position.set(0,1.18,.29),i.add(C);const H=new I(new Ft(.12,.14,.08),a);H.position.set(.28,.82,.12),g(H,i);const N=new I(new fi(.24,.11,6,14),c);N.rotation.x=Math.PI/2,N.position.set(0,1.42,0),N.scale.set(1.22,1.08,.98),g(N,i),_(i,0,1.4,0,.31,26,.22,.048),_(i,0,1.52,-.04,.25,18,.17,.04,.18),_(i,0,1.34,.06,.33,14,.14,.036,.35);for(const U of[-1,1]){_(i,U*.32,1.34,.04,.13,12,.15,.036);const O=new I(new se(.14,.32,5),l);O.position.set(U*.35,1.26,0),O.rotation.z=U*.7,O.rotation.x=-.28,g(O,i)}const F=U=>{const O=new Bt;O.name=U<0?"orcArmL":"orcArmR";const b=new I(new Wt(.095,.105,.34,6),e);b.position.set(0,0,0),b.rotation.z=U*.28,g(b,O);const ct=new I(new Wt(.1,.112,.3,6),r);ct.position.set(U*.1,-.3,.02),ct.rotation.z=U*.16,g(ct,O,1.04);for(const A of[-1,1]){const y=new I(new Ft(.028,.2,.016),o);y.position.set(U*.1,-.3,.02),y.rotation.z=U*.16+A*.65,O.add(y)}const Z=new Bt;Z.position.set(U*.06,-.12,.02),_(Z,0,0,0,.108,11,.1,.028),O.add(Z);const ot=new Bt;ot.position.set(U*.14,-.42,.03),_(ot,0,0,0,.1,10,.08,.024),O.add(ot);const st=new Bt;st.position.set(U*.16,-.5,.04);const Rt=new I(new Ft(.1,.08,.11),e);g(Rt,st);for(let A=0;A<3;A++){const y=new I(new Ft(.022,.06,.022),e);y.position.set(-.03+A*.03,-.06,.03),y.rotation.x=.45,st.add(y)}const ft=new I(new Ft(.02,.05,.02),e);return ft.position.set(U*.05,-.02,.04),ft.rotation.z=U*.7,st.add(ft),O.add(st),O.position.set(U*.36,1.28,0),O};i.add(F(-1));const $=F(1);i.add($);const G=new Bt;G.name="orcHead",G.position.set(0,1.58,0);const K=new I(new Vt(.19,10,8),e);K.scale.set(1.05,1.05,.95),g(K,G,1.1);const X=new I(new Ft(.28,.07,.12),n);X.position.set(0,.08,.12),G.add(X);const it=new I(new Ft(.08,.06,.1),n);it.position.set(0,-.02,.18),G.add(it);const ht=new I(new Ft(.24,.14,.18),n);ht.position.set(0,-.12,.06),g(ht,G);for(const U of[-1,1]){const O=new I(new se(.05,.26,5),f);O.position.set(U*.075,-.08,.22),O.rotation.x=Math.PI+.15,O.rotation.z=U*-.32,G.add(O);const b=new I(new se(.022,.08,4),t(16775408,{roughness:.28,metalness:.12}));b.position.set(U*.075,.06,.3),b.rotation.x=Math.PI+.15,b.rotation.z=U*-.32,G.add(b)}for(const U of[-1,1]){const O=new I(new Vt(.045,6,4),t(1708552));O.position.set(U*.075,.03,.15),G.add(O);const b=new I(new Vt(.025,5,4),t(2767384,{emissive:1714184,emissiveIntensity:.4}));b.position.set(U*.075,.03,.185),G.add(b)}for(const U of[-1,1]){const O=new I(new se(.055,.26,4),e);O.position.set(U*.24,.04,-.02),O.rotation.z=U*-1.25,O.rotation.y=U*.18,O.rotation.x=-.12,g(O,G)}const pt=new I(new Vt(.185,8,5),s);pt.position.set(0,.08,-.02),pt.scale.set(1.05,.65,1.05),g(pt,G);const wt=[[0,.22,.04,1.15],[-.09,.2,.08,1],[.09,.2,.08,1],[-.14,.16,-.02,.95],[.14,.16,-.02,.95],[0,.18,-.12,1.05],[-.1,.14,-.1,.9],[.1,.14,-.1,.9],[-.05,.24,-.02,1.1],[.05,.24,-.02,1.1],[0,.2,.14,.85],[-.16,.1,.04,.8],[.16,.1,.04,.8]];for(const[U,O,b,ct]of wt){const Z=new I(new se(.05*ct,.15*ct,4),s);Z.position.set(U,O,b),Z.rotation.x=b*1.1,Z.rotation.z=-U*1.4,G.add(Z)}i.add(G);const Ct=new Bt;Ct.name="orcSpear",Ct.position.set(.16,-.52,.06),Ct.rotation.set(.12,0,.05),Ct.userData.rest={x:.16,y:-.52,z:.06,rx:.12,ry:0,rz:.05};const j=new I(new Wt(.026,.03,2.05,6),d);j.position.y=1.05,g(j,Ct);const rt=new I(new Wt(.042,.04,.1,6),o);rt.position.y=1.9,Ct.add(rt);const _t=new I(new An(.13,0),u);_t.scale.set(.4,1.85,.28),_t.position.y=2.2,g(_t,Ct);const ut=new I(new Ft(.018,.34,.085),t(15659766,{metalness:.9,roughness:.14}));ut.position.y=2.2,Ct.add(ut);const Ut=new I(new Wt(.052,.038,.1,6),u);Ut.position.y=1.96,Ct.add(Ut);for(const U of[-1,1]){const O=new I(new se(.04,.14,4),u);O.position.set(U*.055,2.08,0),O.rotation.z=U*1.15,Ct.add(O)}const zt=new I(new se(.06,.22,4),t(15791352,{metalness:.88,roughness:.15}));zt.position.y=2.4,Ct.add(zt);const Ot=new I(new se(.032,.1,4),u);Ot.rotation.x=Math.PI,Ot.position.y=.02,Ct.add(Ot),$.add(Ct);const Xt=new I(new Wt(.45,.5,1.9,8),new he({visible:!1}));return Xt.position.y=.95,Xt.name="hit",i.add(Xt),i}function Po(i,t){const e=i.getObjectByName("orcSpear"),n=i.getObjectByName("orcArmR"),s=Math.max(0,Math.min(1,t));let r=0,o=0;if(s<=0)r=0,o=0;else if(s<.32)r=s/.32,o=-.35*r;else if(s<.52){const c=(s-.32)/.2;r=1-c,o=-.35+1.45*c}else o=1.1*(1-(s-.52)/.48);if(e){const c=e.userData.rest;c?(e.rotation.x=c.rx-o*.35,e.position.z=c.z+o*.22-r*.1):(e.rotation.x=-o*.95,e.position.z=.12+o*.55-r*.25)}n&&(n.rotation.x=-o*1.05+r*.4);const a=i.getObjectByName("orcHead");a&&(a.rotation.x=-o*.12)}const p_={idle:"Idle",walk:"Walk",attack:"Attack",sword:"Sword guard","sword-walk":"Sword walk",slash:"Slash",chop:"Chop",mine:"Mine"},Lo=[{id:"hunter",name:"Male Hunter",group:"Characters",poses:["idle","walk","sword","sword-walk","slash","chop","mine"],build:()=>Ah()},{id:"yeti",name:"Frost Yeti",group:"Creatures",poses:["idle","walk","attack"],build:()=>zh()},{id:"orc",name:"Orc Scout",group:"Creatures",poses:["idle","walk","attack"],build:()=>Bh()},{id:"dummy",name:"Training Dummy",group:"World",build:()=>Nh()},{id:"tree",name:"Whisperwood Tree",group:"World",build:()=>Uh(2)},{id:"copper",name:"Copper Rock",group:"World",build:()=>Pa("copper",1)},{id:"tin",name:"Tin Rock",group:"World",build:()=>Pa("tin",2)},{id:"campfire",name:"Campfire",group:"World",build:()=>Fh()},{id:"tent",name:"Tent",group:"World",build:()=>Oh()},{id:"crate",name:"Crate",group:"World",build:()=>La()},{id:"barrel",name:"Barrel",group:"World",build:()=>gr()},{id:"bedroll",name:"Bedroll",group:"World",build:()=>Ia()}];class m_{constructor(t){this.canvas=t,this.camera=new Ye(42,window.innerWidth/window.innerHeight,.08,80),this.root=document.getElementById("studio"),this.listEl=document.getElementById("studio-list"),this.poseEl=document.getElementById("studio-poses"),this.titleEl=document.getElementById("studio-model-name"),this.buildScene(),this.buildList(),this.bindUi(),this.bindOrbit()}root;listEl;poseEl;titleEl;scene=new Sa;camera;current=null;entry=null;pose="idle";animT=0;spherical=new Ig(4.6,1.12,.55);look=new L(0,1,0);dragging=!1;dragBtn=0;lastX=0;lastY=0;autoSpin=!1;openFlag=!1;stage;isOpen(){return this.openFlag}setEnvironment(t){this.scene.environment=t,this.scene.environmentIntensity=.7}toggle(){this.openFlag?this.close():this.open()}open(){this.openFlag=!0,this.root.hidden=!1;const t=document.getElementById("hud");t&&(t.hidden=!0),this.entry||this.select(Lo[0].id),this.fitCurrent()}close(){this.openFlag=!1,this.dragging=!1,this.root.hidden=!0;const t=document.getElementById("hud");t&&(t.hidden=!1)}resize(t,e){this.camera.aspect=t/Math.max(1,e),this.camera.updateProjectionMatrix()}tick(t){this.openFlag&&(this.animT+=t,this.autoSpin&&(this.spherical.theta+=t*.55),this.applyPose(t),this.updateCamera())}render(t){t.setClearColor(7238764),t.render(this.scene,this.camera),t.setClearColor(10405604)}buildScene(){this.scene.background=new Mt(7238764),this.scene.fog=new $a(7238764,16,36),this.scene.add(new Aa(16054271,3817528,1.05));const t=new Oi(16774364,2.05);t.position.set(4.5,7.5,5.5),t.castShadow=!0,t.shadow.mapSize.set(1024,1024),t.shadow.bias=-4e-4,t.shadow.camera.near=.5,t.shadow.camera.far=24,t.shadow.camera.left=-5,t.shadow.camera.right=5,t.shadow.camera.top=5,t.shadow.camera.bottom=-5,this.scene.add(t);const e=new Oi(13163775,.62);e.position.set(-6,3.5,-2),this.scene.add(e);const n=new Oi(16769208,.38);n.position.set(-2,4,7),this.scene.add(n),this.scene.add(new bh(6976640,.42));const s=new I(new qe(6.5,48),new ye({color:6054492,roughness:.94,metalness:.04}));s.rotation.x=-Math.PI/2,s.receiveShadow=!0,this.scene.add(s);const r=new I(new li(1.55,1.62,48),new he({color:9071144,transparent:!0,opacity:.55,side:Te}));r.rotation.x=-Math.PI/2,r.position.y=.008,this.scene.add(r);const o=new Dg(8,16,4866096,3027512);o.position.y=.004;const a=o.material;a.transparent=!0,a.opacity=.35,this.scene.add(o),this.stage=new Bt,this.scene.add(this.stage)}buildList(){this.listEl.innerHTML="";let t="";for(const e of Lo){if(e.group!==t){t=e.group;const s=document.createElement("div");s.className="studio-group",s.textContent=e.group,this.listEl.appendChild(s)}const n=document.createElement("button");n.type="button",n.className="studio-item",n.dataset.id=e.id,n.textContent=e.name,n.addEventListener("click",()=>this.select(e.id)),this.listEl.appendChild(n)}}bindUi(){document.getElementById("btn-studio")?.addEventListener("click",()=>this.toggle()),document.getElementById("studio-close")?.addEventListener("click",()=>this.close()),document.getElementById("studio-reset")?.addEventListener("click",()=>this.fitCurrent()),document.getElementById("studio-spin")?.addEventListener("click",t=>{this.autoSpin=!this.autoSpin,t.currentTarget.classList.toggle("on",this.autoSpin)}),window.addEventListener("keydown",t=>{if(t.key==="Escape"&&this.openFlag){this.close(),t.preventDefault();return}if(t.key.toLowerCase()==="v"&&!t.ctrlKey&&!t.metaKey&&!t.altKey){const e=t.target;if(e&&(e.tagName==="INPUT"||e.tagName==="TEXTAREA"))return;this.toggle()}})}bindOrbit(){const t=s=>{this.openFlag&&s.target===this.canvas&&(this.dragging=!0,this.dragBtn=s.button,this.lastX=s.clientX,this.lastY=s.clientY,this.canvas.setPointerCapture(s.pointerId),s.preventDefault())},e=s=>{if(!this.openFlag||!this.dragging)return;const r=s.clientX-this.lastX,o=s.clientY-this.lastY;if(this.lastX=s.clientX,this.lastY=s.clientY,this.dragBtn===2||s.shiftKey){const a=this.spherical.radius*.0016,c=new L,l=new L;this.camera.matrix.extractBasis(c,l,new L),this.look.addScaledVector(c,-r*a),this.look.addScaledVector(l,o*a)}else this.spherical.theta-=r*.007,this.spherical.phi-=o*.007,this.spherical.phi=Math.max(.06,Math.min(Math.PI-.06,this.spherical.phi))},n=s=>{if(this.dragging){this.dragging=!1;try{this.canvas.releasePointerCapture(s.pointerId)}catch{}}};this.canvas.addEventListener("pointerdown",t),window.addEventListener("pointermove",e),window.addEventListener("pointerup",n),this.canvas.addEventListener("contextmenu",s=>{this.openFlag&&s.preventDefault()}),this.canvas.addEventListener("wheel",s=>{if(!this.openFlag)return;s.preventDefault();const r=this.spherical.radius*(s.deltaY>0?1.08:.92);this.spherical.radius=Math.max(1.1,Math.min(18,r))},{passive:!1})}select(t){const e=Lo.find(n=>n.id===t);e&&(this.entry=e,this.current&&this.stage.remove(this.current),this.current=e.build(),this.current.position.set(0,0,0),this.current.rotation.set(0,0,0),this.current.traverse(n=>{(n.name==="contactShadow"||n.name==="hit"||n.name==="yetiBreath"||n.name==="yetiBreathMist"||n.name==="yetiEyeGlow"||n.name==="yetiEyeLight")&&(n.visible=!1)}),this.stage.add(this.current),this.animT=0,this.pose=e.poses?.[0]??"idle",this.titleEl.textContent=e.name,this.listEl.querySelectorAll(".studio-item").forEach(n=>{n.classList.toggle("on",n.dataset.id===t)}),this.buildPoseBar(),this.fitCurrent())}buildPoseBar(){this.poseEl.innerHTML="";const t=this.entry?.poses;if(!t?.length){this.poseEl.hidden=!0;return}this.poseEl.hidden=!1;for(const e of t){const n=document.createElement("button");n.type="button",n.className="studio-pose",n.textContent=p_[e],n.classList.toggle("on",e===this.pose),n.addEventListener("click",()=>{this.pose=e,this.animT=0,this.buildPoseBar()}),this.poseEl.appendChild(n)}}fitCurrent(){if(!this.current)return;this.current.updateWorldMatrix(!0,!0);const t=new qn().setFromObject(this.current),e=t.getSize(new L),n=t.getCenter(new L);this.look.copy(n),this.spherical.radius=Math.max(2.4,e.length()*1.05),this.spherical.phi=1.12,this.spherical.theta=.55,this.autoSpin=!1,document.getElementById("studio-spin")?.classList.remove("on")}updateCamera(){const t=new L().setFromSpherical(this.spherical).add(this.look);this.camera.position.copy(t),this.camera.lookAt(this.look)}applyPose(t){if(!this.current||!this.entry)return;const e=this.entry.id;if(e==="hunter"&&this.current instanceof Bt){this.applyHunter(this.current);const n=Number(this.current.userData.locomotionY)||0;this.current.position.y=n;return}if(e==="yeti"&&this.current instanceof Bt){this.applyYeti(this.current);return}e==="orc"&&this.current instanceof Bt&&this.applyOrc(this.current)}applyHunter(t){const e=this.pose;if(e==="idle"){fe(t,null),xs(t,this.animT);return}if(e==="walk"){fe(t,null),br(t,this.animT,.9,1);return}if(e==="sword"){fe(t,"sword"),xs(t,this.animT);return}if(e==="sword-walk"){fe(t,"sword"),br(t,this.animT,.9,1);return}if(e==="slash"){fe(t,"sword");const n=this.animT%Ar/Ar;Ph(t,n);return}if(e==="chop"){fe(t,"hatchet"),Ca(t,this.animT*.7,"tree");return}fe(t,"pickaxe"),Ca(t,this.animT*.7,"rock")}applyYeti(t){if(this.pose==="walk"){oi(t,this.animT,!0,1);return}if(this.pose==="attack"){const e=this.animT%Rr/Rr;Lh(t,e);return}oi(t,this.animT,!1,0)}applyOrc(t){if(this.pose==="walk"){Ms(t,this.animT,!0,1);return}if(this.pose==="attack"){const e=this.animT%Cr/Cr;Ih(t,e);return}Ms(t,this.animT,!1,0)}}class g_{scene;camera;overlay;particles=[];floats=[];tmp=new L;chipMat=new ye({color:12880448,emissive:5910544,emissiveIntensity:.35,flatShading:!0,roughness:.85});sparkMat=new ye({color:16769160,emissive:16763972,emissiveIntensity:2,flatShading:!0});hitMat=new ye({color:16772778,emissive:16768392,emissiveIntensity:1.5,flatShading:!0});oreMat=new ye({color:12088115,emissive:6697745,emissiveIntensity:.4,metalness:.5,roughness:.45,flatShading:!0});iceMat=new ye({color:11069695,emissive:4500172,emissiveIntensity:1.2,flatShading:!0,transparent:!0,opacity:.9});clawMat=new ye({color:14215416,emissive:8960989,emissiveIntensity:.8,flatShading:!0});spearMat=new ye({color:13160608,emissive:8956484,emissiveIntensity:.9,flatShading:!0});impactMat=new ye({color:16774864,emissive:16764006,emissiveIntensity:2.4,flatShading:!0,transparent:!0,opacity:.95});telegraphMat=new he({color:16724753,transparent:!0,opacity:.7,depthWrite:!1,side:Te});frostTeleMat=new he({color:6737151,transparent:!0,opacity:.65,depthWrite:!1,side:Te});constructor(t,e,n){this.scene=t,this.camera=e,this.overlay=document.createElement("div"),this.overlay.id="vfx-overlay",this.overlay.style.cssText="position:absolute;inset:0;pointer-events:none;overflow:hidden;z-index:15;",n.appendChild(this.overlay)}spawnWoodchips(t,e=10){for(let n=0;n<e;n++){const s=.14+Math.random()*.16,r=new I(new Ft(s,s*.35,s*.7),this.chipMat);r.position.copy(t),r.position.x+=(Math.random()-.5)*.35,r.position.y+=.35+Math.random()*.55,r.position.z+=(Math.random()-.5)*.35,r.castShadow=!1,this.scene.add(r),this.particles.push({mesh:r,vel:new L((Math.random()-.5)*3.4,2.2+Math.random()*2.8,(Math.random()-.5)*3.4),life:0,maxLife:1.05+Math.random()*.55,gravity:7,spin:(Math.random()-.5)*14})}}spawnMineSparks(t,e=12){for(let n=0;n<e;n++){const s=n%3===0,r=new I(new Vt(s?.11:.07,5,4),s?this.oreMat:this.sparkMat);r.position.copy(t),r.position.x+=(Math.random()-.5)*.3,r.position.y+=.25+Math.random()*.45,r.position.z+=(Math.random()-.5)*.3,this.scene.add(r),this.particles.push({mesh:r,vel:new L((Math.random()-.5)*4.6,2+Math.random()*3.2,(Math.random()-.5)*4.6),life:0,maxLife:.85+Math.random()*.45,gravity:6,spin:(Math.random()-.5)*18})}}spawnHitSparks(t,e=18){for(let n=0;n<e;n++){const s=new I(new An(.045+Math.random()*.04,0),this.hitMat);s.position.copy(t),s.position.y+=1+Math.random()*.45,this.scene.add(s),this.particles.push({mesh:s,vel:new L((Math.random()-.5)*5.2,1+Math.random()*2.8,(Math.random()-.5)*5.2),life:0,maxLife:.4+Math.random()*.3,gravity:4.5,spin:(Math.random()-.5)*20})}}spawnFloatingText(t,e,n="#7ec87e"){const s=document.createElement("div");s.className="float-xp",s.textContent=e,s.style.color=n,this.overlay.appendChild(s),this.floats.push({el:s,life:0,maxLife:1.55,world:t.clone(),driftY:0})}spawnXp(t,e,n){this.spawnFloatingText(t.clone().add(new L((Math.random()-.5)*.4,1.6,0)),`+${e} ${n}`,"#7ec87e")}spawnDamage(t,e,n=!1){this.spawnFloatingText(t.clone().add(new L((Math.random()-.5)*.25,1.7,0)),n?`${e}!`:String(e),n?"#ffe066":"#ff8a78")}spawnIceBurst(t,e=16){for(let n=0;n<e;n++){const s=new I(new An(.06+Math.random()*.05,0),this.iceMat);s.position.copy(t),s.position.y+=.8+Math.random()*.6,s.position.x+=(Math.random()-.5)*.4,s.position.z+=(Math.random()-.5)*.4,this.scene.add(s),this.particles.push({mesh:s,vel:new L((Math.random()-.5)*5,1.2+Math.random()*3.5,(Math.random()-.5)*5),life:0,maxLife:.55+Math.random()*.4,gravity:5,spin:(Math.random()-.5)*20})}}spawnClawSlash(t,e=8){for(let n=0;n<e;n++){const s=new I(new Ft(.08,.02,.28+Math.random()*.15),this.clawMat);s.position.copy(t),s.position.y+=1+Math.random()*.5;const r=n/e*Math.PI-Math.PI/2;s.rotation.y=r,s.rotation.z=-.4,this.scene.add(s),this.particles.push({mesh:s,vel:new L(Math.cos(r)*3.5,.5+Math.random(),Math.sin(r)*3.5),life:0,maxLife:.28+Math.random()*.15,gravity:2,spin:8})}}spawnSpearThrust(t,e=8){for(let n=0;n<e;n++){const s=new I(new se(.04,.22+Math.random()*.12,4),this.spearMat);s.position.copy(t),s.position.y+=.9+Math.random()*.5;const r=n/e*Math.PI*.6-.3;s.rotation.z=r,s.rotation.x=Math.PI/2,this.scene.add(s),this.particles.push({mesh:s,vel:new L(Math.sin(r)*3.2,.4+Math.random(),Math.cos(r)*3.2),life:0,maxLife:.28+Math.random()*.15,gravity:2,spin:10})}}spawnImpactBurst(t,e=18,n=!1){const s=n?this.iceMat:this.impactMat;for(let o=0;o<e;o++){const a=new I(new An(.05+Math.random()*.06,0),s);a.position.copy(t),a.position.y+=.9+Math.random()*.55,this.scene.add(a);const c=Math.random()*Math.PI*2,l=2.5+Math.random()*4.5;this.particles.push({mesh:a,vel:new L(Math.cos(c)*l,1.5+Math.random()*3.2,Math.sin(c)*l),life:0,maxLife:.4+Math.random()*.35,gravity:5,spin:(Math.random()-.5)*22})}const r=new I(new li(.15,.45,20),new he({color:n?11069695:16771232,transparent:!0,opacity:.7,depthWrite:!1,side:Te}));r.rotation.x=-Math.PI/2,r.position.set(t.x,.12,t.z),this.scene.add(r),this.particles.push({mesh:r,vel:new L(0,.05,0),life:0,maxLife:.35,gravity:0,spin:0})}spawnTelegraph(t,e=!1,n=.55,s=1.05){const r=new I(new li(s*.72,s,28),e?this.frostTeleMat.clone():this.telegraphMat.clone());r.rotation.x=-Math.PI/2,r.position.set(t.x,.09,t.z),this.scene.add(r),this.particles.push({mesh:r,vel:new L(0,0,0),life:0,maxLife:n,gravity:0,spin:1.2});const o=(e?this.frostTeleMat:this.telegraphMat).clone();o.opacity=e?.28:.32;const a=new I(new qe(s*.7,28),o);a.rotation.x=-Math.PI/2,a.position.set(t.x,.07,t.z),a.scale.setScalar(.15),this.scene.add(a),this.particles.push({mesh:a,vel:new L(0,.01,0),life:0,maxLife:n,gravity:0,spin:0}),a.userData.teleFill=!0}spawnArcTelegraph(t,e,n=!1,s=.5){const r=(n?this.frostTeleMat:this.telegraphMat).clone();r.opacity=.65;const o=new I(new li(.55,1.15,20,1,0,Math.PI*.85),r);o.rotation.x=-Math.PI/2.6,o.rotation.z=e,o.position.set(t.x,.85,t.z),this.scene.add(o),this.particles.push({mesh:o,vel:new L(0,.15,0),life:0,maxLife:s,gravity:0,spin:0})}update(t){for(let e=this.particles.length-1;e>=0;e--){const n=this.particles[e];n.life+=t,n.vel.y-=n.gravity*t,n.mesh.position.addScaledVector(n.vel,t),n.mesh.rotation.x+=n.spin*t,n.mesh.rotation.z+=n.spin*.7*t;const s=n.life/n.maxLife,r=Math.max(.05,1-s*.85),o=n.mesh.geometry.type;if(!!(n.mesh.userData&&n.mesh.userData.teleFill)){const c=Math.min(1,s/.85);n.mesh.scale.setScalar(.15+c*.85);const l=n.mesh.material;l&&l.opacity!==void 0&&(l.opacity=Math.max(0,(1-s)*.35))}else if(o==="RingGeometry"){const c=n.gravity===0&&n.spin>0&&n.spin<3?1+Math.sin(s*Math.PI)*.08:1+s*1.8;n.mesh.scale.setScalar(c);const l=n.mesh.material;l&&l.opacity!==void 0&&(l.opacity=Math.max(0,(1-s)*(n.spin>0&&n.spin<3?.6:.7)))}else if(o==="CircleGeometry"){n.mesh.scale.setScalar(r);const c=n.mesh.material;c&&c.opacity!==void 0&&(c.opacity=Math.max(0,(1-s)*.5))}else n.mesh.scale.setScalar(r);n.life>=n.maxLife&&(this.scene.remove(n.mesh),n.mesh.geometry.dispose(),this.particles.splice(e,1))}for(let e=this.floats.length-1;e>=0;e--){const n=this.floats[e];n.life+=t,n.driftY+=t*.55,this.tmp.set(n.world.x,n.world.y+n.driftY,n.world.z),this.tmp.project(this.camera);const s=(this.tmp.x*.5+.5)*window.innerWidth,r=(-this.tmp.y*.5+.5)*window.innerHeight,o=Math.max(0,1-n.life/n.maxLife);n.el.style.transform=`translate(-50%, -50%) translate(${s}px, ${r}px)`,n.el.style.opacity=String(o),(n.life>=n.maxLife||this.tmp.z>1)&&(n.el.remove(),this.floats.splice(e,1))}}}const kh="hunterscape_save_v1";function __(){try{const i=localStorage.getItem(kh);if(!i)return ls();const t=JSON.parse(i);return t.version!==1?ls():{...ls(),...t,skills:{...ls().skills,...t.skills}}}catch{return ls()}}function v_(i){try{localStorage.setItem(kh,JSON.stringify(i))}catch{}}const cr=1.6,x_=1.8,us=2.35,Io=5.8,ds=2.15,Do=5.4,Uo=4.2,M_=9.5,y_=12,S_=3,Ol=80,w_=28,zl=5,E_=10,Bl=62,T_=22,kl=4,b_=8,Oe={x:-6.2,z:-4.8},Ee={x:4.2,z:7.2},A_={constitution:"Constitution",attack:"Attack",strength:"Strength",defence:"Defence",woodcutting:"Woodcutting",mining:"Mining"};class R_{renderer;scene;camera;player;raycaster=new Lg;pointer=new lt;clock=new Pg;hud;studio;vfx;save;objects=[];ground;activity={type:"idle"};moveMarker;saveTimer=0;keys=new Set;camOffset=new L(0,8.7,7.15);camLook=new L;dummyTarget=null;yetiTarget=null;yetiAttackCd=0;yetiSwipeT=0;yetiAggroed=!1;orcTarget=null;orcAttackCd=0;orcSwipeT=0;orcAggroed=!1;running=!0;sun;rim;pendingGather=null;pendingCombat=!1;toolSwing=0;animTime=0;playerFlinch=0;playerKnock=new L;yetiHitDone=!1;orcHitDone=!1;deathAnims=[];camSmooth=new L;lookSmooth=new L;combatCamPull=0;moveSpeedCur=0;moveBlend=0;stoppingSteps=0;lastMoveDir=new L(0,0,1);hitReacts=[];yetiMoveBlend=0;orcMoveBlend=0;yetiTeleDone=!1;orcTeleDone=!1;playerTeleDone=!1;combatOorT=0;combatAbortT=0;pendingCombatTarget=null;pendingCombatChat="";constructor(t){this.save=__(),this.hud=new Ng,this.renderer=new Xm({canvas:t,antialias:!0,alpha:!1}),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.renderer.setSize(window.innerWidth,window.innerHeight),this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=Gl,this.renderer.outputColorSpace=Ge,this.renderer.toneMapping=Vl,this.renderer.toneMappingExposure=1.42,this.renderer.setClearColor(10405604),this.scene=new Sa,this.scene.fog=new qa(12769e3,.012),this.camera=new Ye(48,window.innerWidth/window.innerHeight,.1,140),this.setupLights(),this.setupReflectionEnv(),this.studio=new m_(t),this.studio.setEnvironment(this.scene.environment),this.scene.add(u_(70)),this.ground=i_(48),this.scene.add(this.ground),this.scene.add(c_()),this.buildWorld(),this.player=Ah(),this.player.position.set(this.save.x,Me(this.save.x,this.save.z),this.save.z),this.scene.add(this.player);const e=document.getElementById("app")??document.body;this.vfx=new g_(this.scene,this.camera,e),this.moveMarker=new I(new li(.25,.38,24),new he({color:13936715,transparent:!0,opacity:.85,side:Te})),this.moveMarker.rotation.x=-Math.PI/2,this.moveMarker.position.y=.06,this.moveMarker.visible=!1,this.scene.add(this.moveMarker),this.bindInput(t),this.hud.onAction=n=>this.handleAction(n),this.hud.onInventoryClick=n=>this.handleInvClick(n),this.refreshUI(),this.hud.chat("Welcome to Thornrest Camp in the Whisperwood.","system"),this.hud.chat("Tap the ground to walk. Chop trees, mine rocks, or spar with the training dummy.","system"),this.hud.chat("A Frost Yeti stalks the north-east clearing — keep your distance until you are ready.","combat"),this.hud.chat("An Orc Scout prowls the south-west trail — spear ready, leather and tooth to loot.","combat"),this.hud.chat("Your progress is saved in this browser.","system"),window.addEventListener("resize",()=>this.onResize()),this.animate()}setupLights(){const t=new Aa(15923199,5929522,1.08);this.scene.add(t),this.sun=new Oi(16774880,2.08),this.sun.position.set(18,28,10),this.sun.castShadow=!0,this.sun.shadow.mapSize.set(2048,2048),this.sun.shadow.bias=-3e-4,this.sun.shadow.normalBias=.035,this.sun.shadow.radius=3.2,this.sun.shadow.camera.near=2,this.sun.shadow.camera.far=58,this.sun.shadow.camera.left=-24,this.sun.shadow.camera.right=24,this.sun.shadow.camera.top=24,this.sun.shadow.camera.bottom=-24,this.scene.add(this.sun),this.scene.add(this.sun.target),this.rim=new Oi(13690623,.48),this.rim.position.set(-14,10,-16),this.scene.add(this.rim);const e=new Oi(16769712,.46);e.position.set(-6,6,4),this.scene.add(e),this.scene.add(new bh(6978696,.44))}setupReflectionEnv(){const t=new Ma(this.renderer),e=new Sa;e.add(new Aa(15923199,4020770,1.15));const n=new I(new Vt(10,16,12),new he({color:11848932,side:De}));e.add(n);const s=new I(new Vt(2.2,12,10),new he({color:16773576}));s.position.set(7,9,5),e.add(s);const r=new I(new qe(10,16),new he({color:4880952}));r.rotation.x=-Math.PI/2,r.position.y=-1.6,e.add(r),this.scene.environment=t.fromScene(e,.04).texture,this.scene.environmentIntensity=.62,t.dispose()}buildWorld(){const t=(S,x,C,H=0)=>{S.position.set(x,Me(x,C)+H,C)},e=Oh();t(e,-3.5,-1.5),this.scene.add(e);const n=Fh();t(n,-1.2,-.5),this.scene.add(n);const s=La();t(s,-2.4,-2.2),s.rotation.y=.3,this.scene.add(s);const r=gr();t(r,-4.2,-.4),this.scene.add(r);const o=gr();t(o,-4.55,.15),o.rotation.y=.6,this.scene.add(o);const a=Ia();t(a,-2.8,.4),a.rotation.y=-.4,this.scene.add(a);const c=[[-8,-6],[8,-7],[-10,4],[9,5],[0,-10],[-6,8],[6,9],[10,0],[-11,-2]];for(const[S,x]of c){const C=new Bt,H=new I(new Vt(.4+Math.random()*.2,7,5),new ye({color:2775592,flatShading:!0,roughness:.95}));H.position.y=.35,H.castShadow=!0,C.add(H);const N=new I(new Vt(.28,6,4),new ye({color:3828272,flatShading:!0}));N.position.set(.25,.3,.1),N.castShadow=!0,C.add(N),C.position.set(S,Me(S,x),x),this.scene.add(C)}[[4.5,-3],[6.2,-1.5],[8.2,.2],[7.4,2.6],[1.2,5.6],[-4.2,5.2],[-8.2,2.4],[-8.4,-2.2],[2,-6],[-2.5,-7],[8,-5],[-9.2,-.4]].forEach(([S,x],C)=>{const H=Uh(C);H.position.set(S,Me(S,x),x),this.scene.add(H),this.objects.push({kind:"tree",mesh:H,id:`tree_${C}`,hp:1,maxHp:1,depleted:!1,respawnAt:0})}),[{x:1.2,z:3.4,ore:"copper"},{x:-.3,z:4.1,ore:"copper"},{x:2.6,z:4,ore:"tin"},{x:-1.8,z:3.2,ore:"tin"},{x:.8,z:5.2,ore:"copper"},{x:3.4,z:2.2,ore:"copper"},{x:-3.2,z:2.8,ore:"tin"}].forEach((S,x)=>{const C=Pa(S.ore,x);C.position.set(S.x,Me(S.x,S.z),S.z),this.scene.add(C),this.objects.push({kind:"rock",mesh:C,id:`rock_${x}`,hp:1,maxHp:1,depleted:!1,respawnAt:0,meta:{ore:S.ore}})});const u=Nh();u.position.set(2.5,Me(2.5,-2.5),-2.5),this.scene.add(u);const d={kind:"dummy",mesh:u,id:"dummy_0",hp:50,maxHp:50,depleted:!1,respawnAt:0};this.objects.push(d),this.dummyTarget=d;const f=zh();f.position.set(Ee.x,Me(Ee.x,Ee.z),Ee.z),f.rotation.y=Math.PI*.85,f.visible=!0,f.scale.setScalar(1.15),this.scene.add(f);const g={kind:"yeti",mesh:f,id:"yeti_0",hp:Ol,maxHp:Ol,depleted:!1,respawnAt:0};this.objects.push(g),this.yetiTarget=g;const _=d_();_.traverse(S=>{S===_||!S.isMesh||(S.position.y+=Me(S.position.x,S.position.z))}),this.scene.add(_);const m=new Bt;m.name="fallingSnow";for(let S=0;S<48;S++){const x=new I(new Vt(.035+Math.random()*.03,4,3),new he({color:15267071,transparent:!0,opacity:.55+Math.random()*.35,depthWrite:!1}));x.position.set(2.5+Math.random()*5.5,1.5+Math.random()*6,5.5+Math.random()*4.5),x.userData.fall=.4+Math.random()*.9,x.userData.drift=(Math.random()-.5)*.35,x.userData.baseY=x.position.y,m.add(x)}this.scene.add(m);const p=Bh();p.position.set(Oe.x,Me(Oe.x,Oe.z),Oe.z),p.rotation.y=Math.PI*.25,this.scene.add(p);const w={kind:"orc",mesh:p,id:"orc_0",hp:Bl,maxHp:Bl,depleted:!1,respawnAt:0};this.objects.push(w),this.orcTarget=w,this.scene.add(f_());const M=La();t(M,-3.6,-2.6),M.rotation.y=-.5,this.scene.add(M);const v=gr();t(v,-1.8,-2.4),this.scene.add(v);const D=Ia();t(D,-3.9,.9),D.rotation.y=.8,this.scene.add(D);const T=new I(new Wt(.22,.28,.35,7),new ye({color:4861972,flatShading:!0,roughness:.9}));T.position.set(.4,Me(.4,-1.6)+.18,-1.6),T.castShadow=!0,this.scene.add(T);const R=new I(new Vt(.08,8,6),new ye({color:16764006,emissive:16755251,emissiveIntensity:1.2,flatShading:!0}));R.position.set(-.2,Me(-.2,-1.8)+.85,-1.8),this.scene.add(R);const P=new Qa(16755285,.55,6);P.position.copy(R.position),this.scene.add(P)}bindInput(t){const e=n=>{this.studio.isOpen()||n.target!==t||(this.pointer.x=n.clientX/window.innerWidth*2-1,this.pointer.y=-(n.clientY/window.innerHeight)*2+1,this.handleWorldClick())};t.addEventListener("pointerdown",e),window.addEventListener("keydown",n=>{if(!this.studio.isOpen()&&(this.keys.add(n.key.toLowerCase()),n.key==="1"&&this.handleAction("attack"),n.key==="2"&&this.handleAction("chop"),n.key==="3"&&this.handleAction("mine"),n.key==="4"&&this.handleAction("eat"),n.key==="5"&&this.handleAction("examine"),n.key.toLowerCase()==="k")){const s=document.getElementById("skills-panel");s&&(s.hidden=!s.hidden)}}),window.addEventListener("keyup",n=>this.keys.delete(n.key.toLowerCase()))}handleWorldClick(){this.raycaster.setFromCamera(this.pointer,this.camera);const t=[];for(const s of this.objects)s.depleted&&s.kind!=="dummy"&&s.kind!=="yeti"&&s.kind!=="orc"||s.mesh.traverse(r=>{r.isMesh&&r.name!=="outline"&&t.push(r)});const e=this.raycaster.intersectObjects(t,!1);if(e.length>0){let s=e[0].object;for(;s&&!this.objects.find(o=>o.mesh===s);)s=s.parent;const r=this.objects.find(o=>o.mesh===s);if(r){this.interactWith(r);return}}const n=this.raycaster.intersectObject(this.ground);if(n.length>0){const s=n[0].point;this.pendingCombat=!1,this.pendingCombatTarget=null,this.pendingCombatChat="",this.pendingGather=null,this.startMove(s.x,s.z)}}interactWith(t){if(t.kind==="yeti"){if(t.depleted||t.hp<=0){this.hud.chat("The Frost Yeti lies slain. It will return before long.","system");return}this.yetiAggroed=!0,this.approachThenCombat(t,"You ready your bronze sword against the Frost Yeti!");return}if(t.kind==="orc"){if(t.depleted||t.hp<=0){this.hud.chat("The Orc Scout lies slain. Another will take its place.","system");return}this.orcAggroed=!0,this.approachThenCombat(t,"You ready your bronze sword against the Orc Scout!");return}if(t.kind==="dummy"){if(t.hp<=0){this.hud.chat("The training dummy is already collapsed.","system");return}this.approachThenCombat(t,"You ready your bronze sword against the training dummy.");return}if(t.depleted){this.hud.chat("That resource is depleted. Wait for it to respawn.","system");return}if(t.kind==="tree"){if(!this.hasItem("bronze_hatchet")&&!this.save.equipped.hatchet){this.hud.chat("You need a hatchet to chop trees.","system");return}this.approachThenGather(t,2.4,"Chopping Whisperwood…");return}if(t.kind==="rock"){if(!this.hasItem("bronze_pickaxe")&&!this.save.equipped.pickaxe){this.hud.chat("You need a pickaxe to mine rocks.","system");return}this.approachThenGather(t,2.6,`Mining ${t.meta?.ore==="tin"?"tin":"copper"}…`)}}combatName(t){return t.kind==="yeti"?"Frost Yeti":t.kind==="orc"?"Orc Scout":t.kind==="dummy"?"Training Dummy":t.kind}isMonster(t){return t.kind==="yeti"||t.kind==="orc"}monsterAttackRange(t){return t.kind==="yeti"?us:t.kind==="orc"?ds:x_}beginCombat(t,e){this.hud.chat(e,"combat"),this.pendingGather=null,this.pendingCombat=!1,this.pendingCombatTarget=null,this.pendingCombatChat="",this.combatOorT=0,this.combatAbortT=0,this.activity={type:"combat",target:t,cooldown:.15,swingT:0,swingDur:Ar,hitDone:!1},fe(this.player,"sword"),this.hud.showTarget(this.combatName(t),t.hp/t.maxHp),this.combatCamPull=1}approachThenCombat(t,e){const n=this.monsterAttackRange(t);if(this.distTo(t)>n*.92){const r=t.mesh.position.x-this.player.position.x,o=t.mesh.position.z-this.player.position.z,a=Math.hypot(r,o)||1,c=n*.78;this.startMove(t.mesh.position.x-r/a*c,t.mesh.position.z-o/a*c),this.pendingCombat=!0,this.pendingCombatTarget=t,this.pendingCombatChat=e,this.hud.chat(`You close on the ${this.combatName(t)}…`,"combat");return}this.beginCombat(t,e)}nearestCombatTarget(){let t=null,e=1/0;for(const n of this.objects){if(n.kind!=="yeti"&&n.kind!=="orc"&&n.kind!=="dummy"||n.hp<=0||n.depleted)continue;const s=this.distTo(n);s<e&&(e=s,t=n)}return e<16?t:null}approachThenGather(t,e,n){const s=t.mesh.position.x-this.player.position.x,r=t.mesh.position.z-this.player.position.z,o=Math.hypot(s,r);if(o>cr){const a=t.mesh.position.x-s/o*(cr*.85),c=t.mesh.position.z-r/o*(cr*.85);this.startMove(a,c),this.pendingGather={obj:t,duration:e,label:n};return}this.faceToward(t.mesh.position.x,t.mesh.position.z),this.activity={type:"gather",target:t,elapsed:0,duration:e,label:n},fe(this.player,t.kind==="tree"?"hatchet":"pickaxe"),this.hud.showProgress(n,0)}startMove(t,e){t=Math.max(-14,Math.min(14,t)),e=Math.max(-14,Math.min(14,e)),this.activity={type:"move",tx:t,tz:e},fe(this.player,null),this.moveMarker.position.set(t,Me(t,e)+.06,e),this.moveMarker.visible=!0,this.hud.hideProgress(),this.hud.hideTarget()}handleAction(t){switch(t){case"attack":{const e=this.nearestCombatTarget();if(!e){this.hud.chat("No enemies nearby to attack.","system");return}const n=this.monsterAttackRange(e);if(this.distTo(e)>n+2){this.hud.chat(`${this.combatName(e)} is too far. Walk closer.`,"system"),this.pendingGather=null;const r=e.mesh.position.x-this.player.position.x,o=e.mesh.position.z-this.player.position.z,a=Math.hypot(r,o)||1;this.startMove(e.mesh.position.x-r/a*(n*.78),e.mesh.position.z-o/a*(n*.78)),this.pendingCombat=!0,this.pendingCombatTarget=e,this.pendingCombatChat=`You ready your bronze sword against the ${this.combatName(e)}!`;return}this.interactWith(e);break}case"chop":{const e=this.nearest("tree");if(!e){this.hud.chat("No trees nearby.","system");return}this.interactWith(e);break}case"mine":{const e=this.nearest("rock");if(!e){this.hud.chat("No rocks nearby.","system");return}this.interactWith(e);break}case"eat":this.eatFood();break;case"examine":this.examineNearest();break}}nearest(t){let e=null,n=1/0;for(const s of this.objects){if(s.kind!==t||s.depleted&&t!=="dummy")continue;const r=this.distTo(s);r<n&&(n=r,e=s)}return n<14?e:null}examineNearest(){const t=[...this.objects].sort((e,n)=>this.distTo(e)-this.distTo(n))[0];if(!t||this.distTo(t)>5){this.hud.chat("You examine the Whisperwood clearing. Birds call from the canopy.","system");return}t.kind==="tree"?this.hud.chat("A tall Whisperwood tree. Good for training woodcutting.","system"):t.kind==="rock"?this.hud.chat(`A rocky outcrop laced with ${t.meta?.ore??"ore"}. Suitable for mining.`,"system"):t.kind==="yeti"?this.hud.chat("A massive Frost Yeti. Dark stripes mark its fur; amber eyes burn with hunger.","combat"):t.kind==="orc"?this.hud.chat("An Orc Scout in spiked tan fur and leather. White tusks and a long spear gleam.","combat"):this.hud.chat("A stuffed training dummy. Safe practice for combat skills.","system")}eatFood(){const t=this.save.inventory.findIndex(e=>e.id==="camp_rations");if(t<0){this.hud.chat("You have no camp rations left.","system");return}if(this.save.hp>=this.save.maxHp){this.hud.chat("You are already at full health.","system");return}this.consumeAt(t,1),this.save.hp=Math.min(this.save.maxHp,this.save.hp+25),this.hud.chat("You eat camp rations and recover 25 health.","loot"),this.refreshUI(),this.persist()}handleInvClick(t){const e=this.save.inventory[t];if(!e)return;const n=mr[e.id];this.hud.chat(`${n?.name??e.id}${e.qty>1?` ×${e.qty}`:""}`,"system"),e.id==="camp_rations"&&this.eatFood()}distTo(t){return Math.hypot(t.mesh.position.x-this.player.position.x,t.mesh.position.z-this.player.position.z)}faceToward(t,e,n=1/30,s=10){const r=t-this.player.position.x,o=e-this.player.position.z;if(Math.hypot(r,o)>.01){const a=Math.atan2(r,o);this.player.rotation.y=hs(this.player.rotation.y,a,s,n)}}hasItem(t){return this.save.inventory.some(e=>e.id===t)}addItem(t,e=1){const n=mr[t];if(!n)return!1;if(n.stackable){const s=this.save.inventory.find(r=>r.id===t);if(s)return s.qty+=e,!0}return this.save.inventory.length>=28?(this.hud.chat("Inventory full!","system"),!1):(this.save.inventory.push({id:t,qty:e}),!0)}consumeAt(t,e){const n=this.save.inventory[t];n&&(n.qty-=e,n.qty<=0&&this.save.inventory.splice(t,1))}grantXp(t,e){const n=this.save.skills[t],s=n.level;n.xp+=e,n.level=Ug(n.xp),this.hud.chat(`+${e} ${t} XP`,"xp"),this.vfx.spawnXp(this.player.position,e,A_[t]),n.level>s&&(this.hud.chat(`Congratulations! Your ${t} level is now ${n.level}.`,"xp"),t==="constitution"&&(this.save.maxHp=100+(n.level-10)*10,this.save.hp=Math.min(this.save.hp+10,this.save.maxHp)))}update(t){this.save.stamina=Math.min(100,this.save.stamina+t*4),this.save.focus=Math.min(100,this.save.focus+t*2),this.save.hp<this.save.maxHp&&(this.save.hp=Math.min(this.save.maxHp,this.save.hp+t*1.5));const e=performance.now()/1e3;for(const s of this.objects)s.depleted&&s.kind!=="dummy"&&s.kind!=="yeti"&&s.kind!=="orc"&&e>=s.respawnAt&&(s.depleted=!1,s.mesh.visible=!0,this.hud.chat(s.kind==="tree"?"A Whisperwood tree has grown back.":"An ore rock has respawned.","system")),s.kind==="dummy"&&s.hp<=0&&e>=s.respawnAt&&(s.hp=s.maxHp,s.depleted=!1,s.mesh.visible=!0,s.mesh.rotation.set(0,0,0),s.mesh.position.y=Me(s.mesh.position.x,s.mesh.position.z),s.mesh.scale.setScalar(1),this.hud.chat("The training dummy is patched up and ready again.","system")),s.kind==="yeti"&&s.depleted&&e>=s.respawnAt&&(s.hp=s.maxHp,s.depleted=!1,s.mesh.visible=!0,s.mesh.rotation.set(0,Math.PI*.85,0),s.mesh.scale.setScalar(1.15),s.mesh.position.set(Ee.x,Me(Ee.x,Ee.z),Ee.z),this.deathAnims=this.deathAnims.filter(r=>r.mesh!==s.mesh),this.yetiAggroed=!1,this.yetiAttackCd=0,this.yetiSwipeT=0,this.yetiHitDone=!1,this.yetiTeleDone=!1,this.yetiMoveBlend=0,ar(s.mesh,0),oi(s.mesh,this.animTime,!1),this.hud.chat("A Frost Yeti stomps back into the north-east clearing!","combat")),s.kind==="orc"&&s.depleted&&e>=s.respawnAt&&(s.hp=s.maxHp,s.depleted=!1,s.mesh.visible=!0,s.mesh.rotation.set(0,Math.PI*.25,0),s.mesh.scale.setScalar(1),s.mesh.position.set(Oe.x,Me(Oe.x,Oe.z),Oe.z),this.orcAggroed=!1,this.orcAttackCd=0,this.orcSwipeT=0,this.orcHitDone=!1,Po(s.mesh,0),this.hud.chat("An Orc Scout stalks back onto the south-west trail!","combat"));const n=this.scene.getObjectByName("fallingSnow");if(n&&n.children.forEach(s=>{s.position.y-=s.userData.fall*t,s.position.x+=s.userData.drift*t,s.position.y<.05&&(s.position.y=6+Math.random()*2,s.position.x=2.5+Math.random()*5.5,s.position.z=5.5+Math.random()*4.5)}),this.scene.traverse(s=>{if(s.name==="flame"&&(s.scale.y=.9+Math.sin(e*8)*.15,s.rotation.y+=t*2),s.name==="flameGlow"){const r=.9+Math.sin(e*6)*.2;s.scale.setScalar(r)}if(s.name==="yetiBreath"){const r=this.yetiAggroed?1.35:1,o=(.85+Math.sin(e*3.4)*.45)*r;s.scale.set(o,.9+o*.5,o*1.25);const a=s.material;a&&a.opacity!==void 0&&(a.opacity=(.4+Math.sin(e*4.2)*.22)*(this.yetiAggroed?1.15:1))}if(s.name==="yetiBreathMist"){const r=this.yetiAggroed?1.3:1,o=(.85+Math.sin(e*2.8+s.position.z)*.4)*r;s.scale.setScalar(o);const a=s.material;a&&a.opacity!==void 0&&(a.opacity=Math.max(.08,.28*o))}if(s.name==="yetiEyeGlow"){const r=this.yetiAggroed||this.activity.type==="combat"&&this.activity.target?.kind==="yeti",o=.95+Math.sin(e*6.2)*(r?.55:.28);s.scale.setScalar(o*(r?1.65:1.1));const a=s.material;a&&a.opacity!==void 0&&(a.opacity=r?.72+Math.sin(e*7)*.18:.45)}if(s.name==="yetiEye"){const r=this.yetiAggroed||this.activity.type==="combat"&&this.activity.target?.kind==="yeti",o=s.material;if(o&&o.emissiveIntensity!==void 0){const c=r?7.2:4.8;o.emissiveIntensity=c+Math.sin(e*6.8)*(r?2.4:.8)}const a=1+Math.sin(e*6.5)*(r?.12:.04);s.scale.setScalar(a)}if(s.name==="yetiEyeLight"){const r=this.yetiAggroed||this.activity.type==="combat"&&this.activity.target?.kind==="yeti",o=s;o.intensity=(r?1.85:.85)+Math.sin(e*7.1)*(r?.55:.15),o.distance=r?5.2:3.4}}),this.sun.target.position.set(this.player.position.x,this.player.position.y,this.player.position.z),this.sun.target.updateMatrixWorld(),this.animTime+=t,this.playerFlinch>0){const s=this.playerFlinch>.65?2.4:3.6;if(this.playerFlinch=Math.max(0,this.playerFlinch-t*s),Il(this.player,this.playerFlinch,this.playerFlinch>.65?1.1:.55),this.player.position.x+=this.playerKnock.x*t,this.player.position.z+=this.playerKnock.z*t,this.playerKnock.multiplyScalar(Math.max(0,1-t*5.5)),this.playerFlinch<=0){this.player.rotation.z=0,this.player.rotation.x=0;const r=this.player.getObjectByName("playerTorso");r&&(r.rotation.y=0)}}for(let s=this.hitReacts.length-1;s>=0;s--){const r=this.hitReacts[s];r.t-=t;const o=Math.max(0,Math.min(1,r.t/.35));if(Il(r.mesh,o,r.inten),r.t<=0){r.mesh.rotation.z=0,r.mesh.rotation.x=0;const a=r.mesh.getObjectByName("playerTorso")||r.mesh.getObjectByName("yetiBody")||r.mesh.getObjectByName("orcBody");a&&(a.rotation.y=0),this.hitReacts.splice(s,1)}}for(let s=this.deathAnims.length-1;s>=0;s--){const r=this.deathAnims[s];r.t+=t;const o=Math.min(1,r.t/r.dur);Xg(r.mesh,r.kind,o),r.mesh.position.y+=Me(r.mesh.position.x,r.mesh.position.z),o>=1&&(r.mesh.visible=!1,r.mesh.rotation.set(0,r.mesh.rotation.y,0),r.mesh.scale.setScalar(r.kind==="yeti"?1.15:1),r.mesh.position.y=0,this.deathAnims.splice(s,1))}if(this.activity.type==="move"){const{tx:s,tz:r}=this.activity,o=s-this.player.position.x,a=r-this.player.position.z,c=Math.hypot(o,a),l=c<.55?Math.max(.35,c/.55)*Uo:Uo;if(this.moveSpeedCur<l?this.moveSpeedCur=Math.min(l,this.moveSpeedCur+M_*t):this.moveSpeedCur=Math.max(l,this.moveSpeedCur-y_*t),this.moveBlend=Math.min(1,this.moveBlend+t*4.5),c<.1&&this.moveSpeedCur<.55){if(this.player.position.x=s,this.player.position.z=r,this.moveMarker.visible=!1,this.stoppingSteps=.28,this.activity={type:"idle"},this.moveSpeedCur=0,this.pendingGather){const h=this.pendingGather;this.pendingGather=null,this.approachThenGather(h.obj,h.duration,h.label)}else if(this.pendingCombat){this.pendingCombat=!1;const h=this.pendingCombatTarget??this.nearestCombatTarget(),u=this.pendingCombatChat||(h?`You ready your bronze sword against the ${this.combatName(h)}!`:"");this.pendingCombatTarget=null,this.pendingCombatChat="",h&&h.hp>0&&!h.depleted&&(h.kind==="yeti"&&(this.yetiAggroed=!0),h.kind==="orc"&&(this.orcAggroed=!0),this.beginCombat(h,u))}}else{const h=c||1,u=Math.min(c,this.moveSpeedCur*t);this.player.position.x+=o/h*u,this.player.position.z+=a/h*u,this.lastMoveDir.set(o/h,0,a/h);let f=Math.atan2(o,a)-this.player.rotation.y;for(;f>Math.PI;)f-=Math.PI*2;for(;f<-Math.PI;)f+=Math.PI*2;const g=Math.abs(f)>1.2?7:11;this.faceToward(s,r,t,g);const _=Math.min(1.05,.45+this.moveSpeedCur/Uo*.55);br(this.player,this.animTime,_,this.moveBlend),this.save.stamina=Math.max(0,this.save.stamina-t*2)}}else if(this.activity.type==="gather"){const s=this.activity;if(s.target.depleted)this.activity={type:"idle"},fe(this.player,null),Bn(this.player),this.hud.hideProgress();else if(this.distTo(s.target)>cr+.35)this.activity={type:"idle"},fe(this.player,null),Bn(this.player),this.hud.hideProgress(),this.hud.chat("You move too far away.","system");else{s.elapsed+=t,this.hud.showProgress(s.label,s.elapsed/s.duration),this.faceToward(s.target.mesh.position.x,s.target.mesh.position.z,t,8),this.toolSwing+=t;const r=this.toolSwing*1.35%1;if(Ca(this.player,r,s.target.kind==="tree"?"tree":"rock"),Math.floor(s.elapsed*4)!==Math.floor((s.elapsed-t)*4)){const o=s.target.mesh.position.clone();o.y=s.target.kind==="tree"?1.05:.7,s.target.kind==="tree"?this.vfx.spawnWoodchips(o,12):this.vfx.spawnMineSparks(o,14)}s.elapsed>=s.duration&&(this.completeGather(s.target),this.activity={type:"idle"},fe(this.player,null),Bn(this.player),this.hud.hideProgress())}}else if(this.activity.type==="combat"){const s=this.activity,r=s.target;if(this.hud.showTarget(this.combatName(r),Math.max(0,r.hp)/r.maxHp),r.hp<=0||r.depleted)this.activity={type:"idle"},fe(this.player,null),Bn(this.player),this.hud.hideTarget(),this.combatCamPull=0,this.combatOorT=0;else{const o=this.monsterAttackRange(r),a=o+.55,c=o+1.45;let l=this.distTo(r);const h=s.swingT>0&&s.swingT/s.swingDur<Dl+.08;if(l>a&&l<c+.35&&h){const d=r.mesh.position.x-this.player.position.x,f=r.mesh.position.z-this.player.position.z,g=Math.hypot(d,f)||1,_=Math.min(l-o*.88,3.6*t);this.player.position.x+=d/g*_,this.player.position.z+=f/g*_,l=this.distTo(r),this.combatOorT=Math.max(0,this.combatOorT-t*1.5)}else if(l>a&&l<=c&&!h){const d=r.mesh.position.x-this.player.position.x,f=r.mesh.position.z-this.player.position.z,g=Math.hypot(d,f)||1,_=Math.min(l-o*.9,2.4*t);this.player.position.x+=d/g*_,this.player.position.z+=f/g*_,l=this.distTo(r),this.combatOorT+=t*.55}else l>c?this.combatOorT+=t:this.combatOorT=Math.max(0,this.combatOorT-t*2.5);const u=h?.55:.3;if(l>c&&this.combatOorT>=u&&!h)this.abortCombatSoft(t,!0);else{if(this.faceToward(r.mesh.position.x,r.mesh.position.z,t,10),this.isMonster(r)){const d=this.player.position.x-r.mesh.position.x,f=this.player.position.z-r.mesh.position.z;Math.hypot(d,f)>.01&&(r.mesh.rotation.y=hs(r.mesh.rotation.y,Math.atan2(d,f),6,t))}if(s.swingT>0){s.swingT+=t;const d=Math.min(1,s.swingT/s.swingDur);if(Ph(this.player,d),!this.playerTeleDone&&d<.12){this.playerTeleDone=!0;const f=Jg*s.swingDur;this.vfx.spawnTelegraph(this.player.position.clone(),!1,f,.7)}!s.hitDone&&d>=Yg&&d<=Dl+.05&&this.distTo(r)<=o+.95&&(s.hitDone=!0,this.swingAtTarget(r)),d>=1&&(s.swingT=0,s.hitDone=!1,this.playerTeleDone=!1,s.cooldown=.72,fe(this.player,"sword"))}else s.cooldown-=t,xs(this.player,this.animTime),s.cooldown<=0&&this.distTo(r)<=a+.2&&(s.swingT=.001,s.swingDur=Ar,s.hitDone=!1,this.playerTeleDone=!1,fe(this.player,"sword"))}}}else fe(this.player,null),this.stoppingSteps>0?(this.stoppingSteps-=t,this.moveBlend=Math.max(0,this.moveBlend-t*3.5),br(this.player,this.animTime,.4,Math.max(.15,this.moveBlend))):(this.moveBlend=Math.max(0,this.moveBlend-t*5),this.moveSpeedCur=0,xs(this.player,this.animTime)),this.combatCamPull=Math.max(0,this.combatCamPull-t*.6);this.updateYetiAI(t),this.updateOrcAI(t),this.vfx.update(t),this.updateCombatTreeFade(t),this.combatAbortT>0&&(this.combatAbortT=Math.max(0,this.combatAbortT-t),xs(this.player,this.animTime),this.combatAbortT<=0&&(fe(this.player,null),Bn(this.player))),this.snapMoversToGround(),l_(this.animTime),this.updateCamera(t),this.save.x=this.player.position.x,this.save.z=this.player.position.z,this.saveTimer+=t,this.saveTimer>=S_&&(this.saveTimer=0,this.persist()),this.hud.setOrbs(this.save.hp,this.save.maxHp,this.save.focus,this.save.stamina),this.drawMinimapMarkers()}completeGather(t){if(t.kind==="tree"){if(!this.addItem("whisper_logs",1))return;this.grantXp("woodcutting",25),this.hud.chat("You chop some Whisper Logs.","loot"),this.vfx.spawnWoodchips(t.mesh.position.clone().setY(1.1),22),t.depleted=!0,t.mesh.visible=!1,t.respawnAt=performance.now()/1e3+12}else if(t.kind==="rock"){const e=t.meta?.ore==="tin"?"tin_ore":"copper_ore";if(!this.addItem(e,1))return;this.grantXp("mining",28),this.hud.chat(`You mine some ${mr[e].name}.`,"loot"),this.vfx.spawnMineSparks(t.mesh.position.clone().setY(.7),24),t.depleted=!0,t.mesh.visible=!1,t.respawnAt=performance.now()/1e3+14}this.refreshUI(),this.persist()}swingAtTarget(t){const e=this.save.skills.attack.level,n=this.save.skills.strength.level,s=.65+e*.01,r=this.combatName(t);if(Math.random()>s){this.hud.chat(`You swing and miss the ${r}.`,"combat");return}const o=3+Math.floor(Math.random()*(4+n));t.hp-=o;const a=t.kind==="yeti"?18:t.kind==="orc"?15:12,c=t.kind==="yeti"?14:t.kind==="orc"?12:8,l=t.kind==="yeti"?8:t.kind==="orc"?6:4;this.grantXp("attack",a),this.grantXp("strength",c),this.grantXp("constitution",l);const h=t.mesh.position.clone().setY(1.25);this.vfx.spawnHitSparks(h,14+Math.min(12,o)),this.vfx.spawnImpactBurst(h,t.kind==="yeti"?16:20,t.kind==="yeti"),this.vfx.spawnDamage(t.mesh.position.clone().setY(1.5),o,o>=8),h_(t.mesh,o>=10?260:160);const u=o>=12?1.25:o>=8?.9:.5,d=o>=12?.28:o>=8?.18:.1,f=Math.atan2(t.mesh.position.x-this.player.position.x,t.mesh.position.z-this.player.position.z);if(t.mesh.position.x+=Math.sin(f)*d,t.mesh.position.z+=Math.cos(f)*d,this.hitReacts.push({mesh:t.mesh,t:u>1?.48:.28,inten:u}),t.kind==="yeti"&&(this.vfx.spawnIceBurst(t.mesh.position.clone(),12),this.yetiAggroed=!0),t.kind==="orc"&&(this.vfx.spawnSpearThrust(t.mesh.position.clone(),8),this.orcAggroed=!0),t.kind==="dummy"){const g=Math.random()<.15?1:0;g?(this.save.hp=Math.max(1,this.save.hp-g),this.hud.chat(`You hit the dummy for ${o}. Splinter grazes you (-${g}).`,"combat")):this.hud.chat(`You hit the training dummy for ${o} damage.`,"combat")}else t.kind==="orc"?this.hud.chat(`You strike the Orc Scout for ${o} damage!`,"combat"):this.hud.chat(`You strike the Frost Yeti for ${o} damage!`,"combat");t.hp<=0?(t.hp=0,t.kind==="yeti"?this.onYetiDeath(t):t.kind==="orc"?this.onOrcDeath(t):this.onDummyDeath(t)):this.hud.showTarget(r,t.hp/t.maxHp),this.refreshUI(),this.persist()}onDummyDeath(t){t.respawnAt=performance.now()/1e3+8,this.deathAnims.push({mesh:t.mesh,kind:"dummy",t:0,dur:.85}),this.hud.chat("The training dummy collapses! It will be repaired shortly.","combat"),this.grantXp("defence",15),this.activity={type:"idle"},fe(this.player,null),Bn(this.player),this.hud.hideTarget(),this.combatCamPull=0}onYetiDeath(t){t.depleted=!0,t.respawnAt=performance.now()/1e3+w_,this.yetiAggroed=!1,this.yetiAttackCd=0,this.yetiSwipeT=0,this.vfx.spawnIceBurst(t.mesh.position.clone().setY(1.2),28),this.vfx.spawnImpactBurst(t.mesh.position.clone().setY(1),16,!0),this.deathAnims.push({mesh:t.mesh,kind:"yeti",t:0,dur:1.35}),this.hud.chat("The Frost Yeti collapses in a burst of frost!","combat"),this.grantXp("defence",28),this.grantXp("attack",12),this.grantXp("strength",10),this.grantXp("constitution",10),this.addItem("yeti_fur",1)&&this.hud.chat("You loot Yeti Fur.","loot"),Math.random()<.55&&this.addItem("frost_claw",1)&&this.hud.chat("You pry free a Frost Claw!","loot"),this.activity={type:"idle"},fe(this.player,null),this.hud.hideTarget(),this.refreshUI(),this.persist()}onOrcDeath(t){t.depleted=!0,t.respawnAt=performance.now()/1e3+T_,this.orcAggroed=!1,this.orcAttackCd=0,this.orcSwipeT=0,this.vfx.spawnSpearThrust(t.mesh.position.clone().setY(1.1),16),this.vfx.spawnHitSparks(t.mesh.position.clone().setY(1),20),this.vfx.spawnImpactBurst(t.mesh.position.clone().setY(1),14,!1),this.deathAnims.push({mesh:t.mesh,kind:"orc",t:0,dur:1.15}),this.hud.chat("The Orc Scout falls! Its spear clatters to the dirt.","combat"),this.grantXp("defence",22),this.grantXp("attack",10),this.grantXp("strength",8),this.grantXp("constitution",8),this.addItem("orc_tooth",1)&&this.hud.chat("You loot an Orc Tooth.","loot"),Math.random()<.65&&this.addItem("scout_leather",1)&&this.hud.chat("You strip Scout Leather from the vest.","loot"),this.activity={type:"idle"},fe(this.player,null),this.hud.hideTarget(),this.refreshUI(),this.persist()}updateYetiAI(t){const e=this.yetiTarget;if(!e||e.depleted||e.hp<=0){this.yetiSwipeT>0&&(this.yetiSwipeT=Math.max(0,this.yetiSwipeT-t));return}const n=this.distTo(e),s=Math.hypot(e.mesh.position.x-Ee.x,e.mesh.position.z-Ee.z);if(!this.yetiAggroed&&n<=Io&&(this.yetiAggroed=!0,this.hud.chat("The Frost Yeti snarls and charges!","combat"),(this.activity.type!=="combat"||this.activity.target!==e)&&this.beginCombat(e,"The Frost Yeti engages you!")),!this.yetiAggroed){const c=Ee.x-e.mesh.position.x,l=Ee.z-e.mesh.position.z,h=Math.hypot(c,l);if(h>.15){const u=Math.min(h,2.8*t);e.mesh.position.x+=c/h*u,e.mesh.position.z+=l/h*u,e.mesh.rotation.y=hs(e.mesh.rotation.y,Math.atan2(c,l),4,t),e.mesh.position.y=0,oi(e.mesh,this.animTime,!0,Math.min(1,h/2)),ar(e.mesh,0);return}e.mesh.position.set(Ee.x,0,Ee.z),oi(e.mesh,this.animTime,!1),ar(e.mesh,0);return}const r=this.player.position.x-e.mesh.position.x,o=this.player.position.z-e.mesh.position.z;Math.hypot(r,o)>.01&&(e.mesh.rotation.y=hs(e.mesh.rotation.y,Math.atan2(r,o),5,t));let a=!1;if(n>us&&n<Io+5&&s<7.5){this.yetiMoveBlend=Math.min(1,this.yetiMoveBlend+t*2.2);const c=Math.min(n-us*.85,2.35*this.yetiMoveBlend*t),l=Math.hypot(r,o)||1;e.mesh.position.x+=r/l*c,e.mesh.position.z+=o/l*c,a=!0;const h=Ee.x,u=Ee.z,d=e.mesh.position.x-h,f=e.mesh.position.z-u,g=Math.hypot(d,f);g>7.5&&(e.mesh.position.x=h+d/g*7.5,e.mesh.position.z=u+f/g*7.5)}else this.yetiMoveBlend=Math.max(0,this.yetiMoveBlend-t*3);if(n>Io+7||s>8.5){this.yetiAggroed=!1,this.yetiSwipeT=0,this.hud.chat("The Frost Yeti loses interest and returns to the clearing.","system"),e.mesh.position.x+=(Ee.x-e.mesh.position.x)*Math.min(1,t*.9),e.mesh.position.z+=(Ee.z-e.mesh.position.z)*Math.min(1,t*.9),this.activity.type==="combat"&&this.activity.target===e&&(this.activity={type:"idle"},fe(this.player,null),Bn(this.player),this.hud.hideTarget()),oi(e.mesh,this.animTime,!0,.7);return}if(this.yetiSwipeT>0){this.yetiSwipeT+=t;const c=Math.min(1,this.yetiSwipeT/Rr);if(Lh(e.mesh,c),!this.yetiTeleDone){this.yetiTeleDone=!0;const l=jg*Rr+.08;this.vfx.spawnTelegraph(e.mesh.position.clone(),!0,l,1.35),this.vfx.spawnArcTelegraph(e.mesh.position.clone(),e.mesh.rotation.y,!0,l)}!this.yetiHitDone&&c>=qg&&c<=$g+.05&&(this.yetiHitDone=!0,this.yetiMeleeHit(e)),c>=1&&(this.yetiSwipeT=0,this.yetiHitDone=!1,this.yetiTeleDone=!1,ar(e.mesh,0))}else oi(e.mesh,this.animTime,a,Math.max(this.yetiMoveBlend,a?.4:0)),this.yetiAttackCd-=t,n<=us+.4&&this.yetiAttackCd<=0&&(this.yetiAttackCd=2.55,this.yetiSwipeT=.001,this.yetiHitDone=!1,this.yetiTeleDone=!1)}yetiMeleeHit(t){if(this.distTo(t)>us+.65)return;const n=this.save.skills.defence.level,s=zl+Math.floor(Math.random()*(E_-zl+1)),r=Math.max(2,s-Math.floor(n/5));this.save.hp=Math.max(0,this.save.hp-r),this.vfx.spawnClawSlash(this.player.position.clone(),14),this.vfx.spawnIceBurst(this.player.position.clone(),16),this.vfx.spawnImpactBurst(this.player.position.clone().setY(1.1),16,!0),this.vfx.spawnDamage(this.player.position.clone().setY(1.3),r),this.playerFlinch=r>=8?1.15:.75;const o=Math.atan2(this.player.position.x-t.mesh.position.x,this.player.position.z-t.mesh.position.z),a=r>=8?3.4:2.4;this.playerKnock.set(Math.sin(o)*a,0,Math.cos(o)*a),this.hud.chat(`The Frost Yeti swipes you for ${r} damage!`,"combat"),this.hud.setOrbs(this.save.hp,this.save.maxHp,this.save.focus,this.save.stamina),this.save.hp<=0&&(this.save.hp=Math.max(10,Math.floor(this.save.maxHp*.35)),this.player.position.set(0,0,2),this.yetiAggroed=!1,this.activity={type:"idle"},fe(this.player,null),this.hud.hideTarget(),this.hud.chat("You fall! You wake by the Thornrest campfire, battered but alive.","combat"),t.mesh.position.set(Ee.x,0,Ee.z)),this.activity.type!=="combat"&&t.hp>0&&!t.depleted&&this.beginCombat(t,"You raise your guard against the Frost Yeti!"),this.refreshUI(),this.persist()}updateOrcAI(t){const e=this.orcTarget;if(!e||e.depleted||e.hp<=0){this.orcSwipeT>0&&(this.orcSwipeT=Math.max(0,this.orcSwipeT-t));return}const n=this.distTo(e),s=Math.hypot(e.mesh.position.x-Oe.x,e.mesh.position.z-Oe.z);if(!this.orcAggroed&&n<=Do&&(this.orcAggroed=!0,this.hud.chat("The Orc Scout snarls and levels its spear!","combat"),(this.activity.type!=="combat"||this.activity.target!==e)&&this.beginCombat(e,"The Orc Scout engages you!")),!this.orcAggroed){Ms(e.mesh,this.animTime,!1),Po(e.mesh,0);return}const r=this.player.position.x-e.mesh.position.x,o=this.player.position.z-e.mesh.position.z;Math.hypot(r,o)>.01&&(e.mesh.rotation.y=hs(e.mesh.rotation.y,Math.atan2(r,o),7,t));let a=!1;if(n>ds&&n<Do+5&&s<7.5){this.orcMoveBlend=Math.min(1,this.orcMoveBlend+t*3.5);const c=Math.min(n-ds*.85,3.2*this.orcMoveBlend*t),l=Math.hypot(r,o)||1;e.mesh.position.x+=r/l*c,e.mesh.position.z+=o/l*c,a=!0;const h=Oe.x,u=Oe.z,d=e.mesh.position.x-h,f=e.mesh.position.z-u,g=Math.hypot(d,f);g>7.5&&(e.mesh.position.x=h+d/g*7.5,e.mesh.position.z=u+f/g*7.5)}else this.orcMoveBlend=Math.max(0,this.orcMoveBlend-t*4);if(n>Do+7||s>8.5){this.orcAggroed=!1,this.orcSwipeT=0,this.hud.chat("The Orc Scout loses interest and returns to the trail.","system"),e.mesh.position.x+=(Oe.x-e.mesh.position.x)*Math.min(1,t*1.1),e.mesh.position.z+=(Oe.z-e.mesh.position.z)*Math.min(1,t*1.1),this.activity.type==="combat"&&this.activity.target===e&&(this.activity={type:"idle"},fe(this.player,null),Bn(this.player),this.hud.hideTarget()),Ms(e.mesh,this.animTime,!0,.75);return}if(this.orcSwipeT>0){this.orcSwipeT+=t;const c=Math.min(1,this.orcSwipeT/Cr);if(Ih(e.mesh,c),!this.orcTeleDone){this.orcTeleDone=!0;const l=Qg*Cr+.06;this.vfx.spawnTelegraph(e.mesh.position.clone(),!1,l,1.1)}!this.orcHitDone&&c>=Kg&&c<=Zg+.05&&(this.orcHitDone=!0,this.orcMeleeHit(e)),c>=1&&(this.orcSwipeT=0,this.orcHitDone=!1,this.orcTeleDone=!1,Po(e.mesh,0))}else Ms(e.mesh,this.animTime,a,Math.max(this.orcMoveBlend,a?.45:0)),this.orcAttackCd-=t,n<=ds+.4&&this.orcAttackCd<=0&&(this.orcAttackCd=2.05,this.orcSwipeT=.001,this.orcHitDone=!1,this.orcTeleDone=!1)}orcMeleeHit(t){if(this.distTo(t)>ds+.65)return;const n=this.save.skills.defence.level,s=kl+Math.floor(Math.random()*(b_-kl+1)),r=Math.max(2,s-Math.floor(n/5));this.save.hp=Math.max(0,this.save.hp-r),this.vfx.spawnSpearThrust(this.player.position.clone(),14),this.vfx.spawnHitSparks(this.player.position.clone().setY(1.1),14),this.vfx.spawnImpactBurst(this.player.position.clone().setY(1.05),16,!1),this.vfx.spawnDamage(this.player.position.clone().setY(1.3),r),this.playerFlinch=r>=7?1.05:.7;const o=Math.atan2(this.player.position.x-t.mesh.position.x,this.player.position.z-t.mesh.position.z),a=r>=7?2.9:2.1;this.playerKnock.set(Math.sin(o)*a,0,Math.cos(o)*a),this.hud.chat(`The Orc Scout thrusts its spear for ${r} damage!`,"combat"),this.hud.setOrbs(this.save.hp,this.save.maxHp,this.save.focus,this.save.stamina),this.save.hp<=0&&(this.save.hp=Math.max(10,Math.floor(this.save.maxHp*.35)),this.player.position.set(0,0,2),this.orcAggroed=!1,this.yetiAggroed=!1,this.activity={type:"idle"},fe(this.player,null),this.hud.hideTarget(),this.hud.chat("You fall! You wake by the Thornrest campfire, battered but alive.","combat"),t.mesh.position.set(Oe.x,0,Oe.z)),this.activity.type!=="combat"&&t.hp>0&&!t.depleted&&this.beginCombat(t,"You raise your guard against the Orc Scout!"),this.refreshUI(),this.persist()}abortCombatSoft(t,e){e&&this.hud.chat("You step out of range.","combat"),this.combatAbortT=.22,this.combatOorT=0,this.activity={type:"idle"},this.hud.hideTarget(),this.combatCamPull=Math.max(.15,this.combatCamPull*.5),fe(this.player,"sword")}sitOnGround(t,e=0){t.position.y=Me(t.position.x,t.position.z)+e}snapMoversToGround(){const t=new Set(this.deathAnims.map(e=>e.mesh));this.sitOnGround(this.player,Number(this.player.userData.locomotionY)||0),this.yetiTarget&&!t.has(this.yetiTarget.mesh)&&this.sitOnGround(this.yetiTarget.mesh),this.orcTarget&&!t.has(this.orcTarget.mesh)&&this.sitOnGround(this.orcTarget.mesh),this.dummyTarget&&!t.has(this.dummyTarget.mesh)&&this.sitOnGround(this.dummyTarget.mesh),this.moveMarker.visible&&this.sitOnGround(this.moveMarker,.06)}updateCamera(t){const e=Math.min(1,this.combatCamPull),n=this.camOffset.x,s=this.camOffset.y+e*1.55,r=this.camOffset.z+e*.85,o=this.camSmooth;o.set(this.player.position.x+n,s,this.player.position.z+r);const a=1-Math.exp(-4.2*t);this.camera.position.lerp(o,a);let c=this.player.position.x,l=this.player.position.z;if(this.activity.type==="combat"){const h=this.activity.target.mesh.position;c=this.player.position.x*.55+h.x*.45,l=this.player.position.z*.55+h.z*.45}this.lookSmooth.set(c,this.player.position.y+1.05+e*.55,l),this.camLook.lerp(this.lookSmooth,a),this.camera.lookAt(this.camLook)}updateCombatTreeFade(t){const e=this.activity.type==="combat"||this.yetiAggroed||this.orcAggroed,n=this.camera.position;let s=this.player.position.x,r=this.player.position.z;this.activity.type==="combat"?(s=s*.5+this.activity.target.mesh.position.x*.5,r=r*.5+this.activity.target.mesh.position.z*.5):this.yetiAggroed&&this.yetiTarget?(s=this.yetiTarget.mesh.position.x,r=this.yetiTarget.mesh.position.z):this.orcAggroed&&this.orcTarget&&(s=this.orcTarget.mesh.position.x,r=this.orcTarget.mesh.position.z);const o=s-n.x,a=r-n.z,c=Math.hypot(o,a)||1;for(const l of this.objects){if(l.kind!=="tree")continue;const h=l.mesh.position.x-n.x,u=l.mesh.position.z-n.z,d=Math.max(0,Math.min(1,(h*o+u*a)/(c*c))),f=n.x+o*d,g=n.z+a*d,_=Math.hypot(l.mesh.position.x-f,l.mesh.position.z-g),m=e&&d>.12&&d<.92&&_<2.15?.22:1;l.mesh.traverse(p=>{const w=p;if(!w.isMesh||w.name==="hit"||w.name==="outline")return;const M=w.material;if(!M||!("opacity"in M))return;if(!w.userData.fadeReady){const R=M.clone();R.transparent=!0,w.material=R,w.userData.fadeReady=!0,w.userData.fadeOpacity=1}const v=w.userData.fadeOpacity??1,D=v+(m-v)*Math.min(1,t*5.5);w.userData.fadeOpacity=D;const T=w.material;T.opacity=D,T.transparent=D<.98,T.depthWrite=D>.75})}}drawMinimapMarkers(){const t=[];for(const e of this.objects)e.depleted&&e.kind!=="dummy"&&e.kind!=="yeti"&&e.kind!=="orc"||(e.kind==="tree"?t.push({x:e.mesh.position.x,z:e.mesh.position.z,color:"#2d8a2d"}):e.kind==="rock"?t.push({x:e.mesh.position.x,z:e.mesh.position.z,color:"#888"}):e.kind==="yeti"?t.push({x:e.mesh.position.x,z:e.mesh.position.z,color:"#7ec8ff"}):e.kind==="orc"?t.push({x:e.mesh.position.x,z:e.mesh.position.z,color:"#6a9a2a"}):t.push({x:e.mesh.position.x,z:e.mesh.position.z,color:"#c43c3c"}));t.push({x:-1.2,z:-.5,color:"#ff8844"}),this.hud.drawMinimap(this.player.position.x,this.player.position.z,this.player.rotation.y,t)}refreshUI(){this.hud.setInventory(this.save.inventory),this.hud.setSkills(this.save),this.hud.setOrbs(this.save.hp,this.save.maxHp,this.save.focus,this.save.stamina)}persist(){v_(this.save)}onResize(){this.camera.aspect=window.innerWidth/window.innerHeight,this.camera.updateProjectionMatrix(),this.renderer.setSize(window.innerWidth,window.innerHeight),this.studio.resize(window.innerWidth,window.innerHeight)}animate=()=>{if(!this.running)return;requestAnimationFrame(this.animate);const t=Math.min(.05,this.clock.getDelta());if(this.studio.isOpen()){this.studio.tick(t),this.studio.render(this.renderer);return}this.update(t),this.renderer.render(this.scene,this.camera)}}const Hh=document.getElementById("game-canvas");if(!(Hh instanceof HTMLCanvasElement))throw new Error("Missing #game-canvas");new R_(Hh);
