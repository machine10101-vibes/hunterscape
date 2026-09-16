(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const r of o.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&n(r)}).observe(document,{childList:!0,subtree:!0});function e(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerPolicy&&(o.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?o.credentials="include":s.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(s){if(s.ep)return;s.ep=!0;const o=e(s);fetch(s.href,o)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Mc="170",pd=0,il=1,md=2,kh=1,Hh=2,Yn=3,_i=0,Xe=1,le=2,mi=0,hs=1,sl=2,ol=3,rl=4,gd=5,Ri=100,_d=101,vd=102,xd=103,yd=104,Md=200,wd=201,Sd=202,Ed=203,xa=204,ya=205,Td=206,bd=207,Ad=208,Rd=209,Cd=210,Ld=211,Pd=212,Id=213,Dd=214,Ma=0,wa=1,Sa=2,ps=3,Ea=4,Ta=5,ba=6,Aa=7,wc=0,Ud=1,Nd=2,gi=0,Fd=1,Od=2,zd=3,hr=4,Bd=5,kd=6,Hd=7,Gh=300,ms=301,gs=302,Ra=303,Ca=304,ur=306,_s=1e3,Ii=1001,La=1002,un=1003,Gd=1004,co=1005,Nn=1006,Sr=1007,Di=1008,Jn=1009,Vh=1010,Wh=1011,Ys=1012,Sc=1013,Oi=1014,Fn=1015,Qs=1016,Ec=1017,Tc=1018,vs=1020,Xh=35902,qh=1021,Yh=1022,En=1023,$h=1024,Zh=1025,us=1026,xs=1027,bc=1028,Ac=1029,Jh=1030,Rc=1031,Cc=1033,Go=33776,Vo=33777,Wo=33778,Xo=33779,Pa=35840,Ia=35841,Da=35842,Ua=35843,Na=36196,Fa=37492,Oa=37496,za=37808,Ba=37809,ka=37810,Ha=37811,Ga=37812,Va=37813,Wa=37814,Xa=37815,qa=37816,Ya=37817,$a=37818,Za=37819,Ja=37820,Ka=37821,qo=36492,ja=36494,Qa=36495,Kh=36283,tc=36284,ec=36285,nc=36286,Vd=3200,Wd=3201,Lc=0,Xd=1,Un="",$e="srgb",Ms="srgb-linear",dr="linear",ge="srgb",Wi=7680,al=519,qd=512,Yd=513,$d=514,jh=515,Zd=516,Jd=517,Kd=518,jd=519,cl=35044,Qd=35048,ll="300 es",$n=2e3,Zo=2001;class ws{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const s=this._listeners[t];if(s!==void 0){const o=s.indexOf(e);o!==-1&&s.splice(o,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const s=n.slice(0);for(let o=0,r=s.length;o<r;o++)s[o].call(this,t);t.target=null}}}const Je=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Er=Math.PI/180,ic=180/Math.PI;function Ss(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Je[i&255]+Je[i>>8&255]+Je[i>>16&255]+Je[i>>24&255]+"-"+Je[t&255]+Je[t>>8&255]+"-"+Je[t>>16&15|64]+Je[t>>24&255]+"-"+Je[e&63|128]+Je[e>>8&255]+"-"+Je[e>>16&255]+Je[e>>24&255]+Je[n&255]+Je[n>>8&255]+Je[n>>16&255]+Je[n>>24&255]).toLowerCase()}function ze(i,t,e){return Math.max(t,Math.min(e,i))}function tf(i,t){return(i%t+t)%t}function Tr(i,t,e){return(1-e)*i+e*t}function Rs(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function on(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}class gt{constructor(t=0,e=0){gt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(ze(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),s=Math.sin(e),o=this.x-t.x,r=this.y-t.y;return this.x=o*n-r*s+t.x,this.y=o*s+r*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class jt{constructor(t,e,n,s,o,r,a,c,l){jt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,o,r,a,c,l)}set(t,e,n,s,o,r,a,c,l){const h=this.elements;return h[0]=t,h[1]=s,h[2]=a,h[3]=e,h[4]=o,h[5]=c,h[6]=n,h[7]=r,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,o=this.elements,r=n[0],a=n[3],c=n[6],l=n[1],h=n[4],u=n[7],d=n[2],f=n[5],m=n[8],_=s[0],g=s[3],p=s[6],S=s[1],y=s[4],v=s[7],D=s[2],T=s[5],C=s[8];return o[0]=r*_+a*S+c*D,o[3]=r*g+a*y+c*T,o[6]=r*p+a*v+c*C,o[1]=l*_+h*S+u*D,o[4]=l*g+h*y+u*T,o[7]=l*p+h*v+u*C,o[2]=d*_+f*S+m*D,o[5]=d*g+f*y+m*T,o[8]=d*p+f*v+m*C,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],s=t[2],o=t[3],r=t[4],a=t[5],c=t[6],l=t[7],h=t[8];return e*r*h-e*a*l-n*o*h+n*a*c+s*o*l-s*r*c}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],o=t[3],r=t[4],a=t[5],c=t[6],l=t[7],h=t[8],u=h*r-a*l,d=a*c-h*o,f=l*o-r*c,m=e*u+n*d+s*f;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/m;return t[0]=u*_,t[1]=(s*l-h*n)*_,t[2]=(a*n-s*r)*_,t[3]=d*_,t[4]=(h*e-s*c)*_,t[5]=(s*o-a*e)*_,t[6]=f*_,t[7]=(n*c-l*e)*_,t[8]=(r*e-n*o)*_,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,o,r,a){const c=Math.cos(o),l=Math.sin(o);return this.set(n*c,n*l,-n*(c*r+l*a)+r+t,-s*l,s*c,-s*(-l*r+c*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(br.makeScale(t,e)),this}rotate(t){return this.premultiply(br.makeRotation(-t)),this}translate(t,e){return this.premultiply(br.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const br=new jt;function Qh(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function Jo(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function ef(){const i=Jo("canvas");return i.style.display="block",i}const hl={};function Hs(i){i in hl||(hl[i]=!0,console.warn(i))}function nf(i,t,e){return new Promise(function(n,s){function o(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(o,e);break;default:n()}}setTimeout(o,e)})}function sf(i){const t=i.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function of(i){const t=i.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const oe={enabled:!0,workingColorSpace:Ms,spaces:{},convert:function(i,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===ge&&(i.r=Zn(i.r),i.g=Zn(i.g),i.b=Zn(i.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(i.applyMatrix3(this.spaces[t].toXYZ),i.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===ge&&(i.r=ds(i.r),i.g=ds(i.g),i.b=ds(i.b))),i},fromWorkingColorSpace:function(i,t){return this.convert(i,this.workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===Un?dr:this.spaces[i].transfer},getLuminanceCoefficients:function(i,t=this.workingColorSpace){return i.fromArray(this.spaces[t].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,t,e){return i.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}};function Zn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function ds(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}const ul=[.64,.33,.3,.6,.15,.06],dl=[.2126,.7152,.0722],fl=[.3127,.329],pl=new jt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),ml=new jt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);oe.define({[Ms]:{primaries:ul,whitePoint:fl,transfer:dr,toXYZ:pl,fromXYZ:ml,luminanceCoefficients:dl,workingColorSpaceConfig:{unpackColorSpace:$e},outputColorSpaceConfig:{drawingBufferColorSpace:$e}},[$e]:{primaries:ul,whitePoint:fl,transfer:ge,toXYZ:pl,fromXYZ:ml,luminanceCoefficients:dl,outputColorSpaceConfig:{drawingBufferColorSpace:$e}}});let Xi;class rf{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Xi===void 0&&(Xi=Jo("canvas")),Xi.width=t.width,Xi.height=t.height;const n=Xi.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=Xi}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Jo("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const s=n.getImageData(0,0,t.width,t.height),o=s.data;for(let r=0;r<o.length;r++)o[r]=Zn(o[r]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Zn(e[n]/255)*255):e[n]=Zn(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let af=0;class tu{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:af++}),this.uuid=Ss(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let o;if(Array.isArray(s)){o=[];for(let r=0,a=s.length;r<a;r++)s[r].isDataTexture?o.push(Ar(s[r].image)):o.push(Ar(s[r]))}else o=Ar(s);n.url=o}return e||(t.images[this.uuid]=n),n}}function Ar(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?rf.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let cf=0;class tn extends ws{constructor(t=tn.DEFAULT_IMAGE,e=tn.DEFAULT_MAPPING,n=Ii,s=Ii,o=Nn,r=Di,a=En,c=Jn,l=tn.DEFAULT_ANISOTROPY,h=Un){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:cf++}),this.uuid=Ss(),this.name="",this.source=new tu(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=o,this.minFilter=r,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new gt(0,0),this.repeat=new gt(1,1),this.center=new gt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new jt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Gh)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case _s:t.x=t.x-Math.floor(t.x);break;case Ii:t.x=t.x<0?0:1;break;case La:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case _s:t.y=t.y-Math.floor(t.y);break;case Ii:t.y=t.y<0?0:1;break;case La:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}tn.DEFAULT_IMAGE=null;tn.DEFAULT_MAPPING=Gh;tn.DEFAULT_ANISOTROPY=1;class _e{constructor(t=0,e=0,n=0,s=1){_e.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,o=this.w,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s+r[12]*o,this.y=r[1]*e+r[5]*n+r[9]*s+r[13]*o,this.z=r[2]*e+r[6]*n+r[10]*s+r[14]*o,this.w=r[3]*e+r[7]*n+r[11]*s+r[15]*o,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,o;const c=t.elements,l=c[0],h=c[4],u=c[8],d=c[1],f=c[5],m=c[9],_=c[2],g=c[6],p=c[10];if(Math.abs(h-d)<.01&&Math.abs(u-_)<.01&&Math.abs(m-g)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+_)<.1&&Math.abs(m+g)<.1&&Math.abs(l+f+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const y=(l+1)/2,v=(f+1)/2,D=(p+1)/2,T=(h+d)/4,C=(u+_)/4,P=(m+g)/4;return y>v&&y>D?y<.01?(n=0,s=.707106781,o=.707106781):(n=Math.sqrt(y),s=T/n,o=C/n):v>D?v<.01?(n=.707106781,s=0,o=.707106781):(s=Math.sqrt(v),n=T/s,o=P/s):D<.01?(n=.707106781,s=.707106781,o=0):(o=Math.sqrt(D),n=C/o,s=P/o),this.set(n,s,o,e),this}let S=Math.sqrt((g-m)*(g-m)+(u-_)*(u-_)+(d-h)*(d-h));return Math.abs(S)<.001&&(S=1),this.x=(g-m)/S,this.y=(u-_)/S,this.z=(d-h)/S,this.w=Math.acos((l+f+p-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class lf extends ws{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new _e(0,0,t,e),this.scissorTest=!1,this.viewport=new _e(0,0,t,e);const s={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Nn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const o=new tn(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);o.flipY=!1,o.generateMipmaps=n.generateMipmaps,o.internalFormat=n.internalFormat,this.textures=[];const r=n.count;for(let a=0;a<r;a++)this.textures[a]=o.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,o=this.textures.length;s<o;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,s=t.textures.length;n<s;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new tu(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class zi extends lf{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class eu extends tn{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=un,this.minFilter=un,this.wrapR=Ii,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class hf extends tn{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=un,this.minFilter=un,this.wrapR=Ii,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class to{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,o,r,a){let c=n[s+0],l=n[s+1],h=n[s+2],u=n[s+3];const d=o[r+0],f=o[r+1],m=o[r+2],_=o[r+3];if(a===0){t[e+0]=c,t[e+1]=l,t[e+2]=h,t[e+3]=u;return}if(a===1){t[e+0]=d,t[e+1]=f,t[e+2]=m,t[e+3]=_;return}if(u!==_||c!==d||l!==f||h!==m){let g=1-a;const p=c*d+l*f+h*m+u*_,S=p>=0?1:-1,y=1-p*p;if(y>Number.EPSILON){const D=Math.sqrt(y),T=Math.atan2(D,p*S);g=Math.sin(g*T)/D,a=Math.sin(a*T)/D}const v=a*S;if(c=c*g+d*v,l=l*g+f*v,h=h*g+m*v,u=u*g+_*v,g===1-a){const D=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=D,l*=D,h*=D,u*=D}}t[e]=c,t[e+1]=l,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,s,o,r){const a=n[s],c=n[s+1],l=n[s+2],h=n[s+3],u=o[r],d=o[r+1],f=o[r+2],m=o[r+3];return t[e]=a*m+h*u+c*f-l*d,t[e+1]=c*m+h*d+l*u-a*f,t[e+2]=l*m+h*f+a*d-c*u,t[e+3]=h*m-a*u-c*d-l*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,s=t._y,o=t._z,r=t._order,a=Math.cos,c=Math.sin,l=a(n/2),h=a(s/2),u=a(o/2),d=c(n/2),f=c(s/2),m=c(o/2);switch(r){case"XYZ":this._x=d*h*u+l*f*m,this._y=l*f*u-d*h*m,this._z=l*h*m+d*f*u,this._w=l*h*u-d*f*m;break;case"YXZ":this._x=d*h*u+l*f*m,this._y=l*f*u-d*h*m,this._z=l*h*m-d*f*u,this._w=l*h*u+d*f*m;break;case"ZXY":this._x=d*h*u-l*f*m,this._y=l*f*u+d*h*m,this._z=l*h*m+d*f*u,this._w=l*h*u-d*f*m;break;case"ZYX":this._x=d*h*u-l*f*m,this._y=l*f*u+d*h*m,this._z=l*h*m-d*f*u,this._w=l*h*u+d*f*m;break;case"YZX":this._x=d*h*u+l*f*m,this._y=l*f*u+d*h*m,this._z=l*h*m-d*f*u,this._w=l*h*u-d*f*m;break;case"XZY":this._x=d*h*u-l*f*m,this._y=l*f*u-d*h*m,this._z=l*h*m+d*f*u,this._w=l*h*u+d*f*m;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+r)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],s=e[4],o=e[8],r=e[1],a=e[5],c=e[9],l=e[2],h=e[6],u=e[10],d=n+a+u;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-c)*f,this._y=(o-l)*f,this._z=(r-s)*f}else if(n>a&&n>u){const f=2*Math.sqrt(1+n-a-u);this._w=(h-c)/f,this._x=.25*f,this._y=(s+r)/f,this._z=(o+l)/f}else if(a>u){const f=2*Math.sqrt(1+a-n-u);this._w=(o-l)/f,this._x=(s+r)/f,this._y=.25*f,this._z=(c+h)/f}else{const f=2*Math.sqrt(1+u-n-a);this._w=(r-s)/f,this._x=(o+l)/f,this._y=(c+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(ze(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,s=t._y,o=t._z,r=t._w,a=e._x,c=e._y,l=e._z,h=e._w;return this._x=n*h+r*a+s*l-o*c,this._y=s*h+r*c+o*a-n*l,this._z=o*h+r*l+n*c-s*a,this._w=r*h-n*a-s*c-o*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,s=this._y,o=this._z,r=this._w;let a=r*t._w+n*t._x+s*t._y+o*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=r,this._x=n,this._y=s,this._z=o,this;const c=1-a*a;if(c<=Number.EPSILON){const f=1-e;return this._w=f*r+e*this._w,this._x=f*n+e*this._x,this._y=f*s+e*this._y,this._z=f*o+e*this._z,this.normalize(),this}const l=Math.sqrt(c),h=Math.atan2(l,a),u=Math.sin((1-e)*h)/l,d=Math.sin(e*h)/l;return this._w=r*u+this._w*d,this._x=n*u+this._x*d,this._y=s*u+this._y*d,this._z=o*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),o=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),o*Math.sin(e),o*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class I{constructor(t=0,e=0,n=0){I.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(gl.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(gl.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,s=this.z,o=t.elements;return this.x=o[0]*e+o[3]*n+o[6]*s,this.y=o[1]*e+o[4]*n+o[7]*s,this.z=o[2]*e+o[5]*n+o[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,o=t.elements,r=1/(o[3]*e+o[7]*n+o[11]*s+o[15]);return this.x=(o[0]*e+o[4]*n+o[8]*s+o[12])*r,this.y=(o[1]*e+o[5]*n+o[9]*s+o[13])*r,this.z=(o[2]*e+o[6]*n+o[10]*s+o[14])*r,this}applyQuaternion(t){const e=this.x,n=this.y,s=this.z,o=t.x,r=t.y,a=t.z,c=t.w,l=2*(r*s-a*n),h=2*(a*e-o*s),u=2*(o*n-r*e);return this.x=e+c*l+r*u-a*h,this.y=n+c*h+a*l-o*u,this.z=s+c*u+o*h-r*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,s=this.z,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*s,this.y=o[1]*e+o[5]*n+o[9]*s,this.z=o[2]*e+o[6]*n+o[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,s=t.y,o=t.z,r=e.x,a=e.y,c=e.z;return this.x=s*c-o*a,this.y=o*r-n*c,this.z=n*a-s*r,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Rr.copy(this).projectOnVector(t),this.sub(Rr)}reflect(t){return this.sub(Rr.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(ze(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Rr=new I,gl=new to;class Qn{constructor(t=new I(1/0,1/0,1/0),e=new I(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(vn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(vn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=vn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const o=n.getAttribute("position");if(e===!0&&o!==void 0&&t.isInstancedMesh!==!0)for(let r=0,a=o.count;r<a;r++)t.isMesh===!0?t.getVertexPosition(r,vn):vn.fromBufferAttribute(o,r),vn.applyMatrix4(t.matrixWorld),this.expandByPoint(vn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),lo.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),lo.copy(n.boundingBox)),lo.applyMatrix4(t.matrixWorld),this.union(lo)}const s=t.children;for(let o=0,r=s.length;o<r;o++)this.expandByObject(s[o],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,vn),vn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Cs),ho.subVectors(this.max,Cs),qi.subVectors(t.a,Cs),Yi.subVectors(t.b,Cs),$i.subVectors(t.c,Cs),ii.subVectors(Yi,qi),si.subVectors($i,Yi),yi.subVectors(qi,$i);let e=[0,-ii.z,ii.y,0,-si.z,si.y,0,-yi.z,yi.y,ii.z,0,-ii.x,si.z,0,-si.x,yi.z,0,-yi.x,-ii.y,ii.x,0,-si.y,si.x,0,-yi.y,yi.x,0];return!Cr(e,qi,Yi,$i,ho)||(e=[1,0,0,0,1,0,0,0,1],!Cr(e,qi,Yi,$i,ho))?!1:(uo.crossVectors(ii,si),e=[uo.x,uo.y,uo.z],Cr(e,qi,Yi,$i,ho))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,vn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(vn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Gn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Gn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Gn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Gn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Gn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Gn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Gn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Gn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Gn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const Gn=[new I,new I,new I,new I,new I,new I,new I,new I],vn=new I,lo=new Qn,qi=new I,Yi=new I,$i=new I,ii=new I,si=new I,yi=new I,Cs=new I,ho=new I,uo=new I,Mi=new I;function Cr(i,t,e,n,s){for(let o=0,r=i.length-3;o<=r;o+=3){Mi.fromArray(i,o);const a=s.x*Math.abs(Mi.x)+s.y*Math.abs(Mi.y)+s.z*Math.abs(Mi.z),c=t.dot(Mi),l=e.dot(Mi),h=n.dot(Mi);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>a)return!1}return!0}const uf=new Qn,Ls=new I,Lr=new I;class Es{constructor(t=new I,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):uf.setFromPoints(t).getCenter(n);let s=0;for(let o=0,r=t.length;o<r;o++)s=Math.max(s,n.distanceToSquared(t[o]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Ls.subVectors(t,this.center);const e=Ls.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(Ls,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Lr.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Ls.copy(t.center).add(Lr)),this.expandByPoint(Ls.copy(t.center).sub(Lr))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Vn=new I,Pr=new I,fo=new I,oi=new I,Ir=new I,po=new I,Dr=new I;class Pc{constructor(t=new I,e=new I(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Vn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Vn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Vn.copy(this.origin).addScaledVector(this.direction,e),Vn.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){Pr.copy(t).add(e).multiplyScalar(.5),fo.copy(e).sub(t).normalize(),oi.copy(this.origin).sub(Pr);const o=t.distanceTo(e)*.5,r=-this.direction.dot(fo),a=oi.dot(this.direction),c=-oi.dot(fo),l=oi.lengthSq(),h=Math.abs(1-r*r);let u,d,f,m;if(h>0)if(u=r*c-a,d=r*a-c,m=o*h,u>=0)if(d>=-m)if(d<=m){const _=1/h;u*=_,d*=_,f=u*(u+r*d+2*a)+d*(r*u+d+2*c)+l}else d=o,u=Math.max(0,-(r*d+a)),f=-u*u+d*(d+2*c)+l;else d=-o,u=Math.max(0,-(r*d+a)),f=-u*u+d*(d+2*c)+l;else d<=-m?(u=Math.max(0,-(-r*o+a)),d=u>0?-o:Math.min(Math.max(-o,-c),o),f=-u*u+d*(d+2*c)+l):d<=m?(u=0,d=Math.min(Math.max(-o,-c),o),f=d*(d+2*c)+l):(u=Math.max(0,-(r*o+a)),d=u>0?o:Math.min(Math.max(-o,-c),o),f=-u*u+d*(d+2*c)+l);else d=r>0?-o:o,u=Math.max(0,-(r*d+a)),f=-u*u+d*(d+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(Pr).addScaledVector(fo,d),f}intersectSphere(t,e){Vn.subVectors(t.center,this.origin);const n=Vn.dot(this.direction),s=Vn.dot(Vn)-n*n,o=t.radius*t.radius;if(s>o)return null;const r=Math.sqrt(o-s),a=n-r,c=n+r;return c<0?null:a<0?this.at(c,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,o,r,a,c;const l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return l>=0?(n=(t.min.x-d.x)*l,s=(t.max.x-d.x)*l):(n=(t.max.x-d.x)*l,s=(t.min.x-d.x)*l),h>=0?(o=(t.min.y-d.y)*h,r=(t.max.y-d.y)*h):(o=(t.max.y-d.y)*h,r=(t.min.y-d.y)*h),n>r||o>s||((o>n||isNaN(n))&&(n=o),(r<s||isNaN(s))&&(s=r),u>=0?(a=(t.min.z-d.z)*u,c=(t.max.z-d.z)*u):(a=(t.max.z-d.z)*u,c=(t.min.z-d.z)*u),n>c||a>s)||((a>n||n!==n)&&(n=a),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,Vn)!==null}intersectTriangle(t,e,n,s,o){Ir.subVectors(e,t),po.subVectors(n,t),Dr.crossVectors(Ir,po);let r=this.direction.dot(Dr),a;if(r>0){if(s)return null;a=1}else if(r<0)a=-1,r=-r;else return null;oi.subVectors(this.origin,t);const c=a*this.direction.dot(po.crossVectors(oi,po));if(c<0)return null;const l=a*this.direction.dot(Ir.cross(oi));if(l<0||c+l>r)return null;const h=-a*oi.dot(Dr);return h<0?null:this.at(h/r,o)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class fe{constructor(t,e,n,s,o,r,a,c,l,h,u,d,f,m,_,g){fe.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,o,r,a,c,l,h,u,d,f,m,_,g)}set(t,e,n,s,o,r,a,c,l,h,u,d,f,m,_,g){const p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=s,p[1]=o,p[5]=r,p[9]=a,p[13]=c,p[2]=l,p[6]=h,p[10]=u,p[14]=d,p[3]=f,p[7]=m,p[11]=_,p[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new fe().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,s=1/Zi.setFromMatrixColumn(t,0).length(),o=1/Zi.setFromMatrixColumn(t,1).length(),r=1/Zi.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*o,e[5]=n[5]*o,e[6]=n[6]*o,e[7]=0,e[8]=n[8]*r,e[9]=n[9]*r,e[10]=n[10]*r,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,s=t.y,o=t.z,r=Math.cos(n),a=Math.sin(n),c=Math.cos(s),l=Math.sin(s),h=Math.cos(o),u=Math.sin(o);if(t.order==="XYZ"){const d=r*h,f=r*u,m=a*h,_=a*u;e[0]=c*h,e[4]=-c*u,e[8]=l,e[1]=f+m*l,e[5]=d-_*l,e[9]=-a*c,e[2]=_-d*l,e[6]=m+f*l,e[10]=r*c}else if(t.order==="YXZ"){const d=c*h,f=c*u,m=l*h,_=l*u;e[0]=d+_*a,e[4]=m*a-f,e[8]=r*l,e[1]=r*u,e[5]=r*h,e[9]=-a,e[2]=f*a-m,e[6]=_+d*a,e[10]=r*c}else if(t.order==="ZXY"){const d=c*h,f=c*u,m=l*h,_=l*u;e[0]=d-_*a,e[4]=-r*u,e[8]=m+f*a,e[1]=f+m*a,e[5]=r*h,e[9]=_-d*a,e[2]=-r*l,e[6]=a,e[10]=r*c}else if(t.order==="ZYX"){const d=r*h,f=r*u,m=a*h,_=a*u;e[0]=c*h,e[4]=m*l-f,e[8]=d*l+_,e[1]=c*u,e[5]=_*l+d,e[9]=f*l-m,e[2]=-l,e[6]=a*c,e[10]=r*c}else if(t.order==="YZX"){const d=r*c,f=r*l,m=a*c,_=a*l;e[0]=c*h,e[4]=_-d*u,e[8]=m*u+f,e[1]=u,e[5]=r*h,e[9]=-a*h,e[2]=-l*h,e[6]=f*u+m,e[10]=d-_*u}else if(t.order==="XZY"){const d=r*c,f=r*l,m=a*c,_=a*l;e[0]=c*h,e[4]=-u,e[8]=l*h,e[1]=d*u+_,e[5]=r*h,e[9]=f*u-m,e[2]=m*u-f,e[6]=a*h,e[10]=_*u+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(df,t,ff)}lookAt(t,e,n){const s=this.elements;return cn.subVectors(t,e),cn.lengthSq()===0&&(cn.z=1),cn.normalize(),ri.crossVectors(n,cn),ri.lengthSq()===0&&(Math.abs(n.z)===1?cn.x+=1e-4:cn.z+=1e-4,cn.normalize(),ri.crossVectors(n,cn)),ri.normalize(),mo.crossVectors(cn,ri),s[0]=ri.x,s[4]=mo.x,s[8]=cn.x,s[1]=ri.y,s[5]=mo.y,s[9]=cn.y,s[2]=ri.z,s[6]=mo.z,s[10]=cn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,o=this.elements,r=n[0],a=n[4],c=n[8],l=n[12],h=n[1],u=n[5],d=n[9],f=n[13],m=n[2],_=n[6],g=n[10],p=n[14],S=n[3],y=n[7],v=n[11],D=n[15],T=s[0],C=s[4],P=s[8],E=s[12],x=s[1],R=s[5],O=s[9],N=s[13],V=s[2],tt=s[6],$=s[10],Q=s[14],k=s[3],_t=s[7],Mt=s[11],bt=s[15];return o[0]=r*T+a*x+c*V+l*k,o[4]=r*C+a*R+c*tt+l*_t,o[8]=r*P+a*O+c*$+l*Mt,o[12]=r*E+a*N+c*Q+l*bt,o[1]=h*T+u*x+d*V+f*k,o[5]=h*C+u*R+d*tt+f*_t,o[9]=h*P+u*O+d*$+f*Mt,o[13]=h*E+u*N+d*Q+f*bt,o[2]=m*T+_*x+g*V+p*k,o[6]=m*C+_*R+g*tt+p*_t,o[10]=m*P+_*O+g*$+p*Mt,o[14]=m*E+_*N+g*Q+p*bt,o[3]=S*T+y*x+v*V+D*k,o[7]=S*C+y*R+v*tt+D*_t,o[11]=S*P+y*O+v*$+D*Mt,o[15]=S*E+y*N+v*Q+D*bt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],s=t[8],o=t[12],r=t[1],a=t[5],c=t[9],l=t[13],h=t[2],u=t[6],d=t[10],f=t[14],m=t[3],_=t[7],g=t[11],p=t[15];return m*(+o*c*u-s*l*u-o*a*d+n*l*d+s*a*f-n*c*f)+_*(+e*c*f-e*l*d+o*r*d-s*r*f+s*l*h-o*c*h)+g*(+e*l*u-e*a*f-o*r*u+n*r*f+o*a*h-n*l*h)+p*(-s*a*h-e*c*u+e*a*d+s*r*u-n*r*d+n*c*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],o=t[3],r=t[4],a=t[5],c=t[6],l=t[7],h=t[8],u=t[9],d=t[10],f=t[11],m=t[12],_=t[13],g=t[14],p=t[15],S=u*g*l-_*d*l+_*c*f-a*g*f-u*c*p+a*d*p,y=m*d*l-h*g*l-m*c*f+r*g*f+h*c*p-r*d*p,v=h*_*l-m*u*l+m*a*f-r*_*f-h*a*p+r*u*p,D=m*u*c-h*_*c-m*a*d+r*_*d+h*a*g-r*u*g,T=e*S+n*y+s*v+o*D;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const C=1/T;return t[0]=S*C,t[1]=(_*d*o-u*g*o-_*s*f+n*g*f+u*s*p-n*d*p)*C,t[2]=(a*g*o-_*c*o+_*s*l-n*g*l-a*s*p+n*c*p)*C,t[3]=(u*c*o-a*d*o-u*s*l+n*d*l+a*s*f-n*c*f)*C,t[4]=y*C,t[5]=(h*g*o-m*d*o+m*s*f-e*g*f-h*s*p+e*d*p)*C,t[6]=(m*c*o-r*g*o-m*s*l+e*g*l+r*s*p-e*c*p)*C,t[7]=(r*d*o-h*c*o+h*s*l-e*d*l-r*s*f+e*c*f)*C,t[8]=v*C,t[9]=(m*u*o-h*_*o-m*n*f+e*_*f+h*n*p-e*u*p)*C,t[10]=(r*_*o-m*a*o+m*n*l-e*_*l-r*n*p+e*a*p)*C,t[11]=(h*a*o-r*u*o-h*n*l+e*u*l+r*n*f-e*a*f)*C,t[12]=D*C,t[13]=(h*_*s-m*u*s+m*n*d-e*_*d-h*n*g+e*u*g)*C,t[14]=(m*a*s-r*_*s-m*n*c+e*_*c+r*n*g-e*a*g)*C,t[15]=(r*u*s-h*a*s+h*n*c-e*u*c-r*n*d+e*a*d)*C,this}scale(t){const e=this.elements,n=t.x,s=t.y,o=t.z;return e[0]*=n,e[4]*=s,e[8]*=o,e[1]*=n,e[5]*=s,e[9]*=o,e[2]*=n,e[6]*=s,e[10]*=o,e[3]*=n,e[7]*=s,e[11]*=o,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),s=Math.sin(e),o=1-n,r=t.x,a=t.y,c=t.z,l=o*r,h=o*a;return this.set(l*r+n,l*a-s*c,l*c+s*a,0,l*a+s*c,h*a+n,h*c-s*r,0,l*c-s*a,h*c+s*r,o*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,o,r){return this.set(1,n,o,0,t,1,r,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){const s=this.elements,o=e._x,r=e._y,a=e._z,c=e._w,l=o+o,h=r+r,u=a+a,d=o*l,f=o*h,m=o*u,_=r*h,g=r*u,p=a*u,S=c*l,y=c*h,v=c*u,D=n.x,T=n.y,C=n.z;return s[0]=(1-(_+p))*D,s[1]=(f+v)*D,s[2]=(m-y)*D,s[3]=0,s[4]=(f-v)*T,s[5]=(1-(d+p))*T,s[6]=(g+S)*T,s[7]=0,s[8]=(m+y)*C,s[9]=(g-S)*C,s[10]=(1-(d+_))*C,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){const s=this.elements;let o=Zi.set(s[0],s[1],s[2]).length();const r=Zi.set(s[4],s[5],s[6]).length(),a=Zi.set(s[8],s[9],s[10]).length();this.determinant()<0&&(o=-o),t.x=s[12],t.y=s[13],t.z=s[14],xn.copy(this);const l=1/o,h=1/r,u=1/a;return xn.elements[0]*=l,xn.elements[1]*=l,xn.elements[2]*=l,xn.elements[4]*=h,xn.elements[5]*=h,xn.elements[6]*=h,xn.elements[8]*=u,xn.elements[9]*=u,xn.elements[10]*=u,e.setFromRotationMatrix(xn),n.x=o,n.y=r,n.z=a,this}makePerspective(t,e,n,s,o,r,a=$n){const c=this.elements,l=2*o/(e-t),h=2*o/(n-s),u=(e+t)/(e-t),d=(n+s)/(n-s);let f,m;if(a===$n)f=-(r+o)/(r-o),m=-2*r*o/(r-o);else if(a===Zo)f=-r/(r-o),m=-r*o/(r-o);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=l,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=h,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=f,c[14]=m,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,s,o,r,a=$n){const c=this.elements,l=1/(e-t),h=1/(n-s),u=1/(r-o),d=(e+t)*l,f=(n+s)*h;let m,_;if(a===$n)m=(r+o)*u,_=-2*u;else if(a===Zo)m=o*u,_=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-d,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-f,c[2]=0,c[6]=0,c[10]=_,c[14]=-m,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const Zi=new I,xn=new fe,df=new I(0,0,0),ff=new I(1,1,1),ri=new I,mo=new I,cn=new I,_l=new fe,vl=new to;class bn{constructor(t=0,e=0,n=0,s=bn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const s=t.elements,o=s[0],r=s[4],a=s[8],c=s[1],l=s[5],h=s[9],u=s[2],d=s[6],f=s[10];switch(e){case"XYZ":this._y=Math.asin(ze(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-r,o)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-ze(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,o),this._z=0);break;case"ZXY":this._x=Math.asin(ze(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-r,l)):(this._y=0,this._z=Math.atan2(c,o));break;case"ZYX":this._y=Math.asin(-ze(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(c,o)):(this._x=0,this._z=Math.atan2(-r,l));break;case"YZX":this._z=Math.asin(ze(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,o)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-ze(r,-1,1)),Math.abs(r)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(a,o)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return _l.makeRotationFromQuaternion(t),this.setFromRotationMatrix(_l,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return vl.setFromEuler(this),this.setFromQuaternion(vl,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}bn.DEFAULT_ORDER="XYZ";class Ic{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let pf=0;const xl=new I,Ji=new to,Wn=new fe,go=new I,Ps=new I,mf=new I,gf=new to,yl=new I(1,0,0),Ml=new I(0,1,0),wl=new I(0,0,1),Sl={type:"added"},_f={type:"removed"},Ki={type:"childadded",child:null},Ur={type:"childremoved",child:null};class Be extends ws{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:pf++}),this.uuid=Ss(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Be.DEFAULT_UP.clone();const t=new I,e=new bn,n=new to,s=new I(1,1,1);function o(){n.setFromEuler(e,!1)}function r(){e.setFromQuaternion(n,void 0,!1)}e._onChange(o),n._onChange(r),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new fe},normalMatrix:{value:new jt}}),this.matrix=new fe,this.matrixWorld=new fe,this.matrixAutoUpdate=Be.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Be.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ic,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Ji.setFromAxisAngle(t,e),this.quaternion.multiply(Ji),this}rotateOnWorldAxis(t,e){return Ji.setFromAxisAngle(t,e),this.quaternion.premultiply(Ji),this}rotateX(t){return this.rotateOnAxis(yl,t)}rotateY(t){return this.rotateOnAxis(Ml,t)}rotateZ(t){return this.rotateOnAxis(wl,t)}translateOnAxis(t,e){return xl.copy(t).applyQuaternion(this.quaternion),this.position.add(xl.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(yl,t)}translateY(t){return this.translateOnAxis(Ml,t)}translateZ(t){return this.translateOnAxis(wl,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Wn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?go.copy(t):go.set(t,e,n);const s=this.parent;this.updateWorldMatrix(!0,!1),Ps.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Wn.lookAt(Ps,go,this.up):Wn.lookAt(go,Ps,this.up),this.quaternion.setFromRotationMatrix(Wn),s&&(Wn.extractRotation(s.matrixWorld),Ji.setFromRotationMatrix(Wn),this.quaternion.premultiply(Ji.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Sl),Ki.child=t,this.dispatchEvent(Ki),Ki.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(_f),Ur.child=t,this.dispatchEvent(Ur),Ur.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Wn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Wn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Wn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Sl),Ki.child=t,this.dispatchEvent(Ki),Ki.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){const r=this.children[n].getObjectByProperty(t,e);if(r!==void 0)return r}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const s=this.children;for(let o=0,r=s.length;o<r;o++)s[o].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ps,t,mf),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ps,gf,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const s=this.children;for(let o=0,r=s.length;o<r;o++)s[o].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function o(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=o(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){const u=c[l];o(t.shapes,u)}else o(t.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(o(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(o(t.materials,this.material[c]));s.material=a}else s.material=o(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];s.animations.push(o(t.animations,c))}}if(e){const a=r(t.geometries),c=r(t.materials),l=r(t.textures),h=r(t.images),u=r(t.shapes),d=r(t.skeletons),f=r(t.animations),m=r(t.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),m.length>0&&(n.nodes=m)}return n.object=s,n;function r(a){const c=[];for(const l in a){const h=a[l];delete h.metadata,c.push(h)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const s=t.children[n];this.add(s.clone())}return this}}Be.DEFAULT_UP=new I(0,1,0);Be.DEFAULT_MATRIX_AUTO_UPDATE=!0;Be.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const yn=new I,Xn=new I,Nr=new I,qn=new I,ji=new I,Qi=new I,El=new I,Fr=new I,Or=new I,zr=new I,Br=new _e,kr=new _e,Hr=new _e;class wn{constructor(t=new I,e=new I,n=new I){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),yn.subVectors(t,e),s.cross(yn);const o=s.lengthSq();return o>0?s.multiplyScalar(1/Math.sqrt(o)):s.set(0,0,0)}static getBarycoord(t,e,n,s,o){yn.subVectors(s,e),Xn.subVectors(n,e),Nr.subVectors(t,e);const r=yn.dot(yn),a=yn.dot(Xn),c=yn.dot(Nr),l=Xn.dot(Xn),h=Xn.dot(Nr),u=r*l-a*a;if(u===0)return o.set(0,0,0),null;const d=1/u,f=(l*c-a*h)*d,m=(r*h-a*c)*d;return o.set(1-f-m,m,f)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,qn)===null?!1:qn.x>=0&&qn.y>=0&&qn.x+qn.y<=1}static getInterpolation(t,e,n,s,o,r,a,c){return this.getBarycoord(t,e,n,s,qn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(o,qn.x),c.addScaledVector(r,qn.y),c.addScaledVector(a,qn.z),c)}static getInterpolatedAttribute(t,e,n,s,o,r){return Br.setScalar(0),kr.setScalar(0),Hr.setScalar(0),Br.fromBufferAttribute(t,e),kr.fromBufferAttribute(t,n),Hr.fromBufferAttribute(t,s),r.setScalar(0),r.addScaledVector(Br,o.x),r.addScaledVector(kr,o.y),r.addScaledVector(Hr,o.z),r}static isFrontFacing(t,e,n,s){return yn.subVectors(n,e),Xn.subVectors(t,e),yn.cross(Xn).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return yn.subVectors(this.c,this.b),Xn.subVectors(this.a,this.b),yn.cross(Xn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return wn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return wn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,o){return wn.getInterpolation(t,this.a,this.b,this.c,e,n,s,o)}containsPoint(t){return wn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return wn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,s=this.b,o=this.c;let r,a;ji.subVectors(s,n),Qi.subVectors(o,n),Fr.subVectors(t,n);const c=ji.dot(Fr),l=Qi.dot(Fr);if(c<=0&&l<=0)return e.copy(n);Or.subVectors(t,s);const h=ji.dot(Or),u=Qi.dot(Or);if(h>=0&&u<=h)return e.copy(s);const d=c*u-h*l;if(d<=0&&c>=0&&h<=0)return r=c/(c-h),e.copy(n).addScaledVector(ji,r);zr.subVectors(t,o);const f=ji.dot(zr),m=Qi.dot(zr);if(m>=0&&f<=m)return e.copy(o);const _=f*l-c*m;if(_<=0&&l>=0&&m<=0)return a=l/(l-m),e.copy(n).addScaledVector(Qi,a);const g=h*m-f*u;if(g<=0&&u-h>=0&&f-m>=0)return El.subVectors(o,s),a=(u-h)/(u-h+(f-m)),e.copy(s).addScaledVector(El,a);const p=1/(g+_+d);return r=_*p,a=d*p,e.copy(n).addScaledVector(ji,r).addScaledVector(Qi,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const nu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ai={h:0,s:0,l:0},_o={h:0,s:0,l:0};function Gr(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class St{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=$e){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,oe.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=oe.workingColorSpace){return this.r=t,this.g=e,this.b=n,oe.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=oe.workingColorSpace){if(t=tf(t,1),e=ze(e,0,1),n=ze(n,0,1),e===0)this.r=this.g=this.b=n;else{const o=n<=.5?n*(1+e):n+e-n*e,r=2*n-o;this.r=Gr(r,o,t+1/3),this.g=Gr(r,o,t),this.b=Gr(r,o,t-1/3)}return oe.toWorkingColorSpace(this,s),this}setStyle(t,e=$e){function n(o){o!==void 0&&parseFloat(o)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let o;const r=s[1],a=s[2];switch(r){case"rgb":case"rgba":if(o=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(o[4]),this.setRGB(Math.min(255,parseInt(o[1],10))/255,Math.min(255,parseInt(o[2],10))/255,Math.min(255,parseInt(o[3],10))/255,e);if(o=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(o[4]),this.setRGB(Math.min(100,parseInt(o[1],10))/100,Math.min(100,parseInt(o[2],10))/100,Math.min(100,parseInt(o[3],10))/100,e);break;case"hsl":case"hsla":if(o=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(o[4]),this.setHSL(parseFloat(o[1])/360,parseFloat(o[2])/100,parseFloat(o[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const o=s[1],r=o.length;if(r===3)return this.setRGB(parseInt(o.charAt(0),16)/15,parseInt(o.charAt(1),16)/15,parseInt(o.charAt(2),16)/15,e);if(r===6)return this.setHex(parseInt(o,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=$e){const n=nu[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Zn(t.r),this.g=Zn(t.g),this.b=Zn(t.b),this}copyLinearToSRGB(t){return this.r=ds(t.r),this.g=ds(t.g),this.b=ds(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=$e){return oe.fromWorkingColorSpace(Ke.copy(this),t),Math.round(ze(Ke.r*255,0,255))*65536+Math.round(ze(Ke.g*255,0,255))*256+Math.round(ze(Ke.b*255,0,255))}getHexString(t=$e){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=oe.workingColorSpace){oe.fromWorkingColorSpace(Ke.copy(this),e);const n=Ke.r,s=Ke.g,o=Ke.b,r=Math.max(n,s,o),a=Math.min(n,s,o);let c,l;const h=(a+r)/2;if(a===r)c=0,l=0;else{const u=r-a;switch(l=h<=.5?u/(r+a):u/(2-r-a),r){case n:c=(s-o)/u+(s<o?6:0);break;case s:c=(o-n)/u+2;break;case o:c=(n-s)/u+4;break}c/=6}return t.h=c,t.s=l,t.l=h,t}getRGB(t,e=oe.workingColorSpace){return oe.fromWorkingColorSpace(Ke.copy(this),e),t.r=Ke.r,t.g=Ke.g,t.b=Ke.b,t}getStyle(t=$e){oe.fromWorkingColorSpace(Ke.copy(this),t);const e=Ke.r,n=Ke.g,s=Ke.b;return t!==$e?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(ai),this.setHSL(ai.h+t,ai.s+e,ai.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(ai),t.getHSL(_o);const n=Tr(ai.h,_o.h,e),s=Tr(ai.s,_o.s,e),o=Tr(ai.l,_o.l,e);return this.setHSL(n,s,o),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,s=this.b,o=t.elements;return this.r=o[0]*e+o[3]*n+o[6]*s,this.g=o[1]*e+o[4]*n+o[7]*s,this.b=o[2]*e+o[5]*n+o[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Ke=new St;St.NAMES=nu;let vf=0;class ki extends ws{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:vf++}),this.uuid=Ss(),this.name="",this.blending=hs,this.side=_i,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=xa,this.blendDst=ya,this.blendEquation=Ri,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new St(0,0,0),this.blendAlpha=0,this.depthFunc=ps,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=al,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Wi,this.stencilZFail=Wi,this.stencilZPass=Wi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==hs&&(n.blending=this.blending),this.side!==_i&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==xa&&(n.blendSrc=this.blendSrc),this.blendDst!==ya&&(n.blendDst=this.blendDst),this.blendEquation!==Ri&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==ps&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==al&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Wi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Wi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Wi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(o){const r=[];for(const a in o){const c=o[a];delete c.metadata,r.push(c)}return r}if(e){const o=s(t.textures),r=s(t.images);o.length>0&&(n.textures=o),r.length>0&&(n.images=r)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const s=e.length;n=new Array(s);for(let o=0;o!==s;++o)n[o]=e[o].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class de extends ki{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new St(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new bn,this.combine=wc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const De=new I,vo=new gt;class dn{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=cl,this.updateRanges=[],this.gpuType=Fn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,o=this.itemSize;s<o;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)vo.fromBufferAttribute(this,e),vo.applyMatrix3(t),this.setXY(e,vo.x,vo.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)De.fromBufferAttribute(this,e),De.applyMatrix3(t),this.setXYZ(e,De.x,De.y,De.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)De.fromBufferAttribute(this,e),De.applyMatrix4(t),this.setXYZ(e,De.x,De.y,De.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)De.fromBufferAttribute(this,e),De.applyNormalMatrix(t),this.setXYZ(e,De.x,De.y,De.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)De.fromBufferAttribute(this,e),De.transformDirection(t),this.setXYZ(e,De.x,De.y,De.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Rs(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=on(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Rs(e,this.array)),e}setX(t,e){return this.normalized&&(e=on(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Rs(e,this.array)),e}setY(t,e){return this.normalized&&(e=on(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Rs(e,this.array)),e}setZ(t,e){return this.normalized&&(e=on(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Rs(e,this.array)),e}setW(t,e){return this.normalized&&(e=on(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=on(e,this.array),n=on(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=on(e,this.array),n=on(n,this.array),s=on(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,o){return t*=this.itemSize,this.normalized&&(e=on(e,this.array),n=on(n,this.array),s=on(s,this.array),o=on(o,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=o,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==cl&&(t.usage=this.usage),t}}class iu extends dn{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class su extends dn{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class Zt extends dn{constructor(t,e,n){super(new Float32Array(t),e,n)}}let xf=0;const mn=new fe,Vr=new Be,ts=new I,ln=new Qn,Is=new Qn,Ve=new I;class Le extends ws{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:xf++}),this.uuid=Ss(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Qh(t)?su:iu)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const o=new jt().getNormalMatrix(t);n.applyNormalMatrix(o),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return mn.makeRotationFromQuaternion(t),this.applyMatrix4(mn),this}rotateX(t){return mn.makeRotationX(t),this.applyMatrix4(mn),this}rotateY(t){return mn.makeRotationY(t),this.applyMatrix4(mn),this}rotateZ(t){return mn.makeRotationZ(t),this.applyMatrix4(mn),this}translate(t,e,n){return mn.makeTranslation(t,e,n),this.applyMatrix4(mn),this}scale(t,e,n){return mn.makeScale(t,e,n),this.applyMatrix4(mn),this}lookAt(t){return Vr.lookAt(t),Vr.updateMatrix(),this.applyMatrix4(Vr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ts).negate(),this.translate(ts.x,ts.y,ts.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let s=0,o=t.length;s<o;s++){const r=t[s];n.push(r.x,r.y,r.z||0)}this.setAttribute("position",new Zt(n,3))}else{for(let n=0,s=e.count;n<s;n++){const o=t[n];e.setXYZ(n,o.x,o.y,o.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Qn);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new I(-1/0,-1/0,-1/0),new I(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){const o=e[n];ln.setFromBufferAttribute(o),this.morphTargetsRelative?(Ve.addVectors(this.boundingBox.min,ln.min),this.boundingBox.expandByPoint(Ve),Ve.addVectors(this.boundingBox.max,ln.max),this.boundingBox.expandByPoint(Ve)):(this.boundingBox.expandByPoint(ln.min),this.boundingBox.expandByPoint(ln.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Es);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new I,1/0);return}if(t){const n=this.boundingSphere.center;if(ln.setFromBufferAttribute(t),e)for(let o=0,r=e.length;o<r;o++){const a=e[o];Is.setFromBufferAttribute(a),this.morphTargetsRelative?(Ve.addVectors(ln.min,Is.min),ln.expandByPoint(Ve),Ve.addVectors(ln.max,Is.max),ln.expandByPoint(Ve)):(ln.expandByPoint(Is.min),ln.expandByPoint(Is.max))}ln.getCenter(n);let s=0;for(let o=0,r=t.count;o<r;o++)Ve.fromBufferAttribute(t,o),s=Math.max(s,n.distanceToSquared(Ve));if(e)for(let o=0,r=e.length;o<r;o++){const a=e[o],c=this.morphTargetsRelative;for(let l=0,h=a.count;l<h;l++)Ve.fromBufferAttribute(a,l),c&&(ts.fromBufferAttribute(t,l),Ve.add(ts)),s=Math.max(s,n.distanceToSquared(Ve))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,s=e.normal,o=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new dn(new Float32Array(4*n.count),4));const r=this.getAttribute("tangent"),a=[],c=[];for(let P=0;P<n.count;P++)a[P]=new I,c[P]=new I;const l=new I,h=new I,u=new I,d=new gt,f=new gt,m=new gt,_=new I,g=new I;function p(P,E,x){l.fromBufferAttribute(n,P),h.fromBufferAttribute(n,E),u.fromBufferAttribute(n,x),d.fromBufferAttribute(o,P),f.fromBufferAttribute(o,E),m.fromBufferAttribute(o,x),h.sub(l),u.sub(l),f.sub(d),m.sub(d);const R=1/(f.x*m.y-m.x*f.y);isFinite(R)&&(_.copy(h).multiplyScalar(m.y).addScaledVector(u,-f.y).multiplyScalar(R),g.copy(u).multiplyScalar(f.x).addScaledVector(h,-m.x).multiplyScalar(R),a[P].add(_),a[E].add(_),a[x].add(_),c[P].add(g),c[E].add(g),c[x].add(g))}let S=this.groups;S.length===0&&(S=[{start:0,count:t.count}]);for(let P=0,E=S.length;P<E;++P){const x=S[P],R=x.start,O=x.count;for(let N=R,V=R+O;N<V;N+=3)p(t.getX(N+0),t.getX(N+1),t.getX(N+2))}const y=new I,v=new I,D=new I,T=new I;function C(P){D.fromBufferAttribute(s,P),T.copy(D);const E=a[P];y.copy(E),y.sub(D.multiplyScalar(D.dot(E))).normalize(),v.crossVectors(T,E);const R=v.dot(c[P])<0?-1:1;r.setXYZW(P,y.x,y.y,y.z,R)}for(let P=0,E=S.length;P<E;++P){const x=S[P],R=x.start,O=x.count;for(let N=R,V=R+O;N<V;N+=3)C(t.getX(N+0)),C(t.getX(N+1)),C(t.getX(N+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new dn(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);const s=new I,o=new I,r=new I,a=new I,c=new I,l=new I,h=new I,u=new I;if(t)for(let d=0,f=t.count;d<f;d+=3){const m=t.getX(d+0),_=t.getX(d+1),g=t.getX(d+2);s.fromBufferAttribute(e,m),o.fromBufferAttribute(e,_),r.fromBufferAttribute(e,g),h.subVectors(r,o),u.subVectors(s,o),h.cross(u),a.fromBufferAttribute(n,m),c.fromBufferAttribute(n,_),l.fromBufferAttribute(n,g),a.add(h),c.add(h),l.add(h),n.setXYZ(m,a.x,a.y,a.z),n.setXYZ(_,c.x,c.y,c.z),n.setXYZ(g,l.x,l.y,l.z)}else for(let d=0,f=e.count;d<f;d+=3)s.fromBufferAttribute(e,d+0),o.fromBufferAttribute(e,d+1),r.fromBufferAttribute(e,d+2),h.subVectors(r,o),u.subVectors(s,o),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Ve.fromBufferAttribute(t,e),Ve.normalize(),t.setXYZ(e,Ve.x,Ve.y,Ve.z)}toNonIndexed(){function t(a,c){const l=a.array,h=a.itemSize,u=a.normalized,d=new l.constructor(c.length*h);let f=0,m=0;for(let _=0,g=c.length;_<g;_++){a.isInterleavedBufferAttribute?f=c[_]*a.data.stride+a.offset:f=c[_]*h;for(let p=0;p<h;p++)d[m++]=l[f++]}return new dn(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Le,n=this.index.array,s=this.attributes;for(const a in s){const c=s[a],l=t(c,n);e.setAttribute(a,l)}const o=this.morphAttributes;for(const a in o){const c=[],l=o[a];for(let h=0,u=l.length;h<u;h++){const d=l[h],f=t(d,n);c.push(f)}e.morphAttributes[a]=c}e.morphTargetsRelative=this.morphTargetsRelative;const r=this.groups;for(let a=0,c=r.length;a<c;a++){const l=r[a];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const c in n){const l=n[c];t.data.attributes[c]=l.toJSON(t.data)}const s={};let o=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],h=[];for(let u=0,d=l.length;u<d;u++){const f=l[u];h.push(f.toJSON(t.data))}h.length>0&&(s[c]=h,o=!0)}o&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const r=this.groups;r.length>0&&(t.data.groups=JSON.parse(JSON.stringify(r)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const s=t.attributes;for(const l in s){const h=s[l];this.setAttribute(l,h.clone(e))}const o=t.morphAttributes;for(const l in o){const h=[],u=o[l];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(e));this.morphAttributes[l]=h}this.morphTargetsRelative=t.morphTargetsRelative;const r=t.groups;for(let l=0,h=r.length;l<h;l++){const u=r[l];this.addGroup(u.start,u.count,u.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Tl=new fe,wi=new Pc,xo=new Es,bl=new I,yo=new I,Mo=new I,wo=new I,Wr=new I,So=new I,Al=new I,Eo=new I;class w extends Be{constructor(t=new Le,e=new de){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,r=s.length;o<r;o++){const a=s[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=o}}}}getVertexPosition(t,e){const n=this.geometry,s=n.attributes.position,o=n.morphAttributes.position,r=n.morphTargetsRelative;e.fromBufferAttribute(s,t);const a=this.morphTargetInfluences;if(o&&a){So.set(0,0,0);for(let c=0,l=o.length;c<l;c++){const h=a[c],u=o[c];h!==0&&(Wr.fromBufferAttribute(u,t),r?So.addScaledVector(Wr,h):So.addScaledVector(Wr.sub(e),h))}e.add(So)}return e}raycast(t,e){const n=this.geometry,s=this.material,o=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),xo.copy(n.boundingSphere),xo.applyMatrix4(o),wi.copy(t.ray).recast(t.near),!(xo.containsPoint(wi.origin)===!1&&(wi.intersectSphere(xo,bl)===null||wi.origin.distanceToSquared(bl)>(t.far-t.near)**2))&&(Tl.copy(o).invert(),wi.copy(t.ray).applyMatrix4(Tl),!(n.boundingBox!==null&&wi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,wi)))}_computeIntersections(t,e,n){let s;const o=this.geometry,r=this.material,a=o.index,c=o.attributes.position,l=o.attributes.uv,h=o.attributes.uv1,u=o.attributes.normal,d=o.groups,f=o.drawRange;if(a!==null)if(Array.isArray(r))for(let m=0,_=d.length;m<_;m++){const g=d[m],p=r[g.materialIndex],S=Math.max(g.start,f.start),y=Math.min(a.count,Math.min(g.start+g.count,f.start+f.count));for(let v=S,D=y;v<D;v+=3){const T=a.getX(v),C=a.getX(v+1),P=a.getX(v+2);s=To(this,p,t,n,l,h,u,T,C,P),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=g.materialIndex,e.push(s))}}else{const m=Math.max(0,f.start),_=Math.min(a.count,f.start+f.count);for(let g=m,p=_;g<p;g+=3){const S=a.getX(g),y=a.getX(g+1),v=a.getX(g+2);s=To(this,r,t,n,l,h,u,S,y,v),s&&(s.faceIndex=Math.floor(g/3),e.push(s))}}else if(c!==void 0)if(Array.isArray(r))for(let m=0,_=d.length;m<_;m++){const g=d[m],p=r[g.materialIndex],S=Math.max(g.start,f.start),y=Math.min(c.count,Math.min(g.start+g.count,f.start+f.count));for(let v=S,D=y;v<D;v+=3){const T=v,C=v+1,P=v+2;s=To(this,p,t,n,l,h,u,T,C,P),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=g.materialIndex,e.push(s))}}else{const m=Math.max(0,f.start),_=Math.min(c.count,f.start+f.count);for(let g=m,p=_;g<p;g+=3){const S=g,y=g+1,v=g+2;s=To(this,r,t,n,l,h,u,S,y,v),s&&(s.faceIndex=Math.floor(g/3),e.push(s))}}}}function yf(i,t,e,n,s,o,r,a){let c;if(t.side===Xe?c=n.intersectTriangle(r,o,s,!0,a):c=n.intersectTriangle(s,o,r,t.side===_i,a),c===null)return null;Eo.copy(a),Eo.applyMatrix4(i.matrixWorld);const l=e.ray.origin.distanceTo(Eo);return l<e.near||l>e.far?null:{distance:l,point:Eo.clone(),object:i}}function To(i,t,e,n,s,o,r,a,c,l){i.getVertexPosition(a,yo),i.getVertexPosition(c,Mo),i.getVertexPosition(l,wo);const h=yf(i,t,e,n,yo,Mo,wo,Al);if(h){const u=new I;wn.getBarycoord(Al,yo,Mo,wo,u),s&&(h.uv=wn.getInterpolatedAttribute(s,a,c,l,u,new gt)),o&&(h.uv1=wn.getInterpolatedAttribute(o,a,c,l,u,new gt)),r&&(h.normal=wn.getInterpolatedAttribute(r,a,c,l,u,new I),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const d={a,b:c,c:l,normal:new I,materialIndex:0};wn.getNormal(yo,Mo,wo,d.normal),h.face=d,h.barycoord=u}return h}class zt extends Le{constructor(t=1,e=1,n=1,s=1,o=1,r=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:o,depthSegments:r};const a=this;s=Math.floor(s),o=Math.floor(o),r=Math.floor(r);const c=[],l=[],h=[],u=[];let d=0,f=0;m("z","y","x",-1,-1,n,e,t,r,o,0),m("z","y","x",1,-1,n,e,-t,r,o,1),m("x","z","y",1,1,t,n,e,s,r,2),m("x","z","y",1,-1,t,n,-e,s,r,3),m("x","y","z",1,-1,t,e,n,s,o,4),m("x","y","z",-1,-1,t,e,-n,s,o,5),this.setIndex(c),this.setAttribute("position",new Zt(l,3)),this.setAttribute("normal",new Zt(h,3)),this.setAttribute("uv",new Zt(u,2));function m(_,g,p,S,y,v,D,T,C,P,E){const x=v/C,R=D/P,O=v/2,N=D/2,V=T/2,tt=C+1,$=P+1;let Q=0,k=0;const _t=new I;for(let Mt=0;Mt<$;Mt++){const bt=Mt*R-N;for(let Wt=0;Wt<tt;Wt++){const Yt=Wt*x-O;_t[_]=Yt*S,_t[g]=bt*y,_t[p]=V,l.push(_t.x,_t.y,_t.z),_t[_]=0,_t[g]=0,_t[p]=T>0?1:-1,h.push(_t.x,_t.y,_t.z),u.push(Wt/C),u.push(1-Mt/P),Q+=1}}for(let Mt=0;Mt<P;Mt++)for(let bt=0;bt<C;bt++){const Wt=d+bt+tt*Mt,Yt=d+bt+tt*(Mt+1),et=d+(bt+1)+tt*(Mt+1),ft=d+(bt+1)+tt*Mt;c.push(Wt,Yt,ft),c.push(Yt,et,ft),k+=6}a.addGroup(f,k,E),f+=k,d+=Q}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new zt(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function ys(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function en(i){const t={};for(let e=0;e<i.length;e++){const n=ys(i[e]);for(const s in n)t[s]=n[s]}return t}function Mf(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function ou(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:oe.workingColorSpace}const wf={clone:ys,merge:en};var Sf=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Ef=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class vi extends ki{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Sf,this.fragmentShader=Ef,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=ys(t.uniforms),this.uniformsGroups=Mf(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const r=this.uniforms[s].value;r&&r.isTexture?e.uniforms[s]={type:"t",value:r.toJSON(t).uuid}:r&&r.isColor?e.uniforms[s]={type:"c",value:r.getHex()}:r&&r.isVector2?e.uniforms[s]={type:"v2",value:r.toArray()}:r&&r.isVector3?e.uniforms[s]={type:"v3",value:r.toArray()}:r&&r.isVector4?e.uniforms[s]={type:"v4",value:r.toArray()}:r&&r.isMatrix3?e.uniforms[s]={type:"m3",value:r.toArray()}:r&&r.isMatrix4?e.uniforms[s]={type:"m4",value:r.toArray()}:e.uniforms[s]={value:r}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class ru extends Be{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new fe,this.projectionMatrix=new fe,this.projectionMatrixInverse=new fe,this.coordinateSystem=$n}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const ci=new I,Rl=new gt,Cl=new gt;class Qe extends ru{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=ic*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Er*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return ic*2*Math.atan(Math.tan(Er*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){ci.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(ci.x,ci.y).multiplyScalar(-t/ci.z),ci.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ci.x,ci.y).multiplyScalar(-t/ci.z)}getViewSize(t,e){return this.getViewBounds(t,Rl,Cl),e.subVectors(Cl,Rl)}setViewOffset(t,e,n,s,o,r){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=o,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Er*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,o=-.5*s;const r=this.view;if(this.view!==null&&this.view.enabled){const c=r.fullWidth,l=r.fullHeight;o+=r.offsetX*s/c,e-=r.offsetY*n/l,s*=r.width/c,n*=r.height/l}const a=this.filmOffset;a!==0&&(o+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(o,o+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const es=-90,ns=1;class Tf extends Be{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Qe(es,ns,t,e);s.layers=this.layers,this.add(s);const o=new Qe(es,ns,t,e);o.layers=this.layers,this.add(o);const r=new Qe(es,ns,t,e);r.layers=this.layers,this.add(r);const a=new Qe(es,ns,t,e);a.layers=this.layers,this.add(a);const c=new Qe(es,ns,t,e);c.layers=this.layers,this.add(c);const l=new Qe(es,ns,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,s,o,r,a,c]=e;for(const l of e)this.remove(l);if(t===$n)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),o.up.set(0,0,-1),o.lookAt(0,1,0),r.up.set(0,0,1),r.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===Zo)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),o.up.set(0,0,1),o.lookAt(0,1,0),r.up.set(0,0,-1),r.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[o,r,a,c,l,h]=this.children,u=t.getRenderTarget(),d=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),m=t.xr.enabled;t.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,o),t.setRenderTarget(n,1,s),t.render(e,r),t.setRenderTarget(n,2,s),t.render(e,a),t.setRenderTarget(n,3,s),t.render(e,c),t.setRenderTarget(n,4,s),t.render(e,l),n.texture.generateMipmaps=_,t.setRenderTarget(n,5,s),t.render(e,h),t.setRenderTarget(u,d,f),t.xr.enabled=m,n.texture.needsPMREMUpdate=!0}}class au extends tn{constructor(t,e,n,s,o,r,a,c,l,h){t=t!==void 0?t:[],e=e!==void 0?e:ms,super(t,e,n,s,o,r,a,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class bf extends zi{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new au(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:Nn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new zt(5,5,5),o=new vi({name:"CubemapFromEquirect",uniforms:ys(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Xe,blending:mi});o.uniforms.tEquirect.value=e;const r=new w(s,o),a=e.minFilter;return e.minFilter===Di&&(e.minFilter=Nn),new Tf(1,10,this).update(t,r),e.minFilter=a,r.geometry.dispose(),r.material.dispose(),this}clear(t,e,n,s){const o=t.getRenderTarget();for(let r=0;r<6;r++)t.setRenderTarget(this,r),t.clear(e,n,s);t.setRenderTarget(o)}}const Xr=new I,Af=new I,Rf=new jt;class bi{constructor(t=new I(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const s=Xr.subVectors(n,e).cross(Af.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(Xr),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const o=-(t.start.dot(this.normal)+this.constant)/s;return o<0||o>1?null:e.copy(t.start).addScaledVector(n,o)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||Rf.getNormalMatrix(t),s=this.coplanarPoint(Xr).applyMatrix4(t),o=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(o),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Si=new Es,bo=new I;class Dc{constructor(t=new bi,e=new bi,n=new bi,s=new bi,o=new bi,r=new bi){this.planes=[t,e,n,s,o,r]}set(t,e,n,s,o,r){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(s),a[4].copy(o),a[5].copy(r),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=$n){const n=this.planes,s=t.elements,o=s[0],r=s[1],a=s[2],c=s[3],l=s[4],h=s[5],u=s[6],d=s[7],f=s[8],m=s[9],_=s[10],g=s[11],p=s[12],S=s[13],y=s[14],v=s[15];if(n[0].setComponents(c-o,d-l,g-f,v-p).normalize(),n[1].setComponents(c+o,d+l,g+f,v+p).normalize(),n[2].setComponents(c+r,d+h,g+m,v+S).normalize(),n[3].setComponents(c-r,d-h,g-m,v-S).normalize(),n[4].setComponents(c-a,d-u,g-_,v-y).normalize(),e===$n)n[5].setComponents(c+a,d+u,g+_,v+y).normalize();else if(e===Zo)n[5].setComponents(a,u,_,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Si.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Si.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Si)}intersectsSprite(t){return Si.center.set(0,0,0),Si.radius=.7071067811865476,Si.applyMatrix4(t.matrixWorld),this.intersectsSphere(Si)}intersectsSphere(t){const e=this.planes,n=t.center,s=-t.radius;for(let o=0;o<6;o++)if(e[o].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const s=e[n];if(bo.x=s.normal.x>0?t.max.x:t.min.x,bo.y=s.normal.y>0?t.max.y:t.min.y,bo.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(bo)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function cu(){let i=null,t=!1,e=null,n=null;function s(o,r){e(o,r),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(o){e=o},setContext:function(o){i=o}}}function Cf(i){const t=new WeakMap;function e(a,c){const l=a.array,h=a.usage,u=l.byteLength,d=i.createBuffer();i.bindBuffer(c,d),i.bufferData(c,l,h),a.onUploadCallback();let f;if(l instanceof Float32Array)f=i.FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)f=i.SHORT;else if(l instanceof Uint32Array)f=i.UNSIGNED_INT;else if(l instanceof Int32Array)f=i.INT;else if(l instanceof Int8Array)f=i.BYTE;else if(l instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:d,type:f,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,c,l){const h=c.array,u=c.updateRanges;if(i.bindBuffer(l,a),u.length===0)i.bufferSubData(l,0,h);else{u.sort((f,m)=>f.start-m.start);let d=0;for(let f=1;f<u.length;f++){const m=u[d],_=u[f];_.start<=m.start+m.count+1?m.count=Math.max(m.count,_.start+_.count-m.start):(++d,u[d]=_)}u.length=d+1;for(let f=0,m=u.length;f<m;f++){const _=u[f];i.bufferSubData(l,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function o(a){a.isInterleavedBufferAttribute&&(a=a.data);const c=t.get(a);c&&(i.deleteBuffer(c.buffer),t.delete(a))}function r(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const l=t.get(a);if(l===void 0)t.set(a,e(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,a,c),l.version=a.version}}return{get:s,remove:o,update:r}}class Sn extends Le{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};const o=t/2,r=e/2,a=Math.floor(n),c=Math.floor(s),l=a+1,h=c+1,u=t/a,d=e/c,f=[],m=[],_=[],g=[];for(let p=0;p<h;p++){const S=p*d-r;for(let y=0;y<l;y++){const v=y*u-o;m.push(v,-S,0),_.push(0,0,1),g.push(y/a),g.push(1-p/c)}}for(let p=0;p<c;p++)for(let S=0;S<a;S++){const y=S+l*p,v=S+l*(p+1),D=S+1+l*(p+1),T=S+1+l*p;f.push(y,v,T),f.push(v,D,T)}this.setIndex(f),this.setAttribute("position",new Zt(m,3)),this.setAttribute("normal",new Zt(_,3)),this.setAttribute("uv",new Zt(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Sn(t.width,t.height,t.widthSegments,t.heightSegments)}}var Lf=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Pf=`#ifdef USE_ALPHAHASH
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
#endif`,If=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Df=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Uf=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Nf=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Ff=`#ifdef USE_AOMAP
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
#endif`,Of=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,zf=`#ifdef USE_BATCHING
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
#endif`,Bf=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,kf=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Hf=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Gf=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Vf=`#ifdef USE_IRIDESCENCE
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
#endif`,Wf=`#ifdef USE_BUMPMAP
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
#endif`,Xf=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,qf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Yf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,$f=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Zf=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Jf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Kf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,jf=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Qf=`#define PI 3.141592653589793
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
} // validated`,t0=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,e0=`vec3 transformedNormal = objectNormal;
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
#endif`,n0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,i0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,s0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,o0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,r0="gl_FragColor = linearToOutputTexel( gl_FragColor );",a0=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,c0=`#ifdef USE_ENVMAP
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
#endif`,l0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,h0=`#ifdef USE_ENVMAP
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
#endif`,u0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,d0=`#ifdef USE_ENVMAP
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
#endif`,f0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,p0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,m0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,g0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,_0=`#ifdef USE_GRADIENTMAP
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
}`,v0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,x0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,y0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,M0=`uniform bool receiveShadow;
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
#endif`,w0=`#ifdef USE_ENVMAP
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
#endif`,S0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,E0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,T0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,b0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,A0=`PhysicalMaterial material;
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
#endif`,R0=`struct PhysicalMaterial {
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
}`,C0=`
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
#endif`,L0=`#if defined( RE_IndirectDiffuse )
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
#endif`,P0=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,I0=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,D0=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,U0=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,N0=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,F0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,O0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,z0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,B0=`#if defined( USE_POINTS_UV )
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
#endif`,k0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,H0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,G0=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,V0=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,W0=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,X0=`#ifdef USE_MORPHTARGETS
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
#endif`,q0=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Y0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,$0=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Z0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,J0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,K0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,j0=`#ifdef USE_NORMALMAP
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
#endif`,Q0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,tp=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,ep=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,np=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,ip=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,sp=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,op=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,rp=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,ap=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,cp=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,lp=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,hp=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,up=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,dp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,fp=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,pp=`float getShadowMask() {
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
}`,mp=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,gp=`#ifdef USE_SKINNING
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
#endif`,_p=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,vp=`#ifdef USE_SKINNING
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
#endif`,xp=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,yp=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Mp=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,wp=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Sp=`#ifdef USE_TRANSMISSION
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
#endif`,Ep=`#ifdef USE_TRANSMISSION
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
#endif`,Tp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,bp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Ap=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Rp=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Cp=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Lp=`uniform sampler2D t2D;
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
}`,Pp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ip=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Dp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Up=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Np=`#include <common>
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
}`,Fp=`#if DEPTH_PACKING == 3200
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
}`,Op=`#define DISTANCE
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
}`,zp=`#define DISTANCE
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
}`,Bp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,kp=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Hp=`uniform float scale;
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
}`,Gp=`uniform vec3 diffuse;
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
}`,Vp=`#include <common>
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
}`,Wp=`uniform vec3 diffuse;
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
}`,Xp=`#define LAMBERT
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
}`,qp=`#define LAMBERT
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
}`,Yp=`#define MATCAP
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
}`,$p=`#define MATCAP
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
}`,Zp=`#define NORMAL
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
}`,Jp=`#define NORMAL
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
}`,Kp=`#define PHONG
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
}`,jp=`#define PHONG
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
}`,Qp=`#define STANDARD
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
}`,tm=`#define STANDARD
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
}`,em=`#define TOON
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
}`,nm=`#define TOON
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
}`,im=`uniform float size;
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
}`,sm=`uniform vec3 diffuse;
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
}`,om=`#include <common>
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
}`,rm=`uniform vec3 color;
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
}`,am=`uniform float rotation;
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
}`,cm=`uniform vec3 diffuse;
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
}`,ee={alphahash_fragment:Lf,alphahash_pars_fragment:Pf,alphamap_fragment:If,alphamap_pars_fragment:Df,alphatest_fragment:Uf,alphatest_pars_fragment:Nf,aomap_fragment:Ff,aomap_pars_fragment:Of,batching_pars_vertex:zf,batching_vertex:Bf,begin_vertex:kf,beginnormal_vertex:Hf,bsdfs:Gf,iridescence_fragment:Vf,bumpmap_pars_fragment:Wf,clipping_planes_fragment:Xf,clipping_planes_pars_fragment:qf,clipping_planes_pars_vertex:Yf,clipping_planes_vertex:$f,color_fragment:Zf,color_pars_fragment:Jf,color_pars_vertex:Kf,color_vertex:jf,common:Qf,cube_uv_reflection_fragment:t0,defaultnormal_vertex:e0,displacementmap_pars_vertex:n0,displacementmap_vertex:i0,emissivemap_fragment:s0,emissivemap_pars_fragment:o0,colorspace_fragment:r0,colorspace_pars_fragment:a0,envmap_fragment:c0,envmap_common_pars_fragment:l0,envmap_pars_fragment:h0,envmap_pars_vertex:u0,envmap_physical_pars_fragment:w0,envmap_vertex:d0,fog_vertex:f0,fog_pars_vertex:p0,fog_fragment:m0,fog_pars_fragment:g0,gradientmap_pars_fragment:_0,lightmap_pars_fragment:v0,lights_lambert_fragment:x0,lights_lambert_pars_fragment:y0,lights_pars_begin:M0,lights_toon_fragment:S0,lights_toon_pars_fragment:E0,lights_phong_fragment:T0,lights_phong_pars_fragment:b0,lights_physical_fragment:A0,lights_physical_pars_fragment:R0,lights_fragment_begin:C0,lights_fragment_maps:L0,lights_fragment_end:P0,logdepthbuf_fragment:I0,logdepthbuf_pars_fragment:D0,logdepthbuf_pars_vertex:U0,logdepthbuf_vertex:N0,map_fragment:F0,map_pars_fragment:O0,map_particle_fragment:z0,map_particle_pars_fragment:B0,metalnessmap_fragment:k0,metalnessmap_pars_fragment:H0,morphinstance_vertex:G0,morphcolor_vertex:V0,morphnormal_vertex:W0,morphtarget_pars_vertex:X0,morphtarget_vertex:q0,normal_fragment_begin:Y0,normal_fragment_maps:$0,normal_pars_fragment:Z0,normal_pars_vertex:J0,normal_vertex:K0,normalmap_pars_fragment:j0,clearcoat_normal_fragment_begin:Q0,clearcoat_normal_fragment_maps:tp,clearcoat_pars_fragment:ep,iridescence_pars_fragment:np,opaque_fragment:ip,packing:sp,premultiplied_alpha_fragment:op,project_vertex:rp,dithering_fragment:ap,dithering_pars_fragment:cp,roughnessmap_fragment:lp,roughnessmap_pars_fragment:hp,shadowmap_pars_fragment:up,shadowmap_pars_vertex:dp,shadowmap_vertex:fp,shadowmask_pars_fragment:pp,skinbase_vertex:mp,skinning_pars_vertex:gp,skinning_vertex:_p,skinnormal_vertex:vp,specularmap_fragment:xp,specularmap_pars_fragment:yp,tonemapping_fragment:Mp,tonemapping_pars_fragment:wp,transmission_fragment:Sp,transmission_pars_fragment:Ep,uv_pars_fragment:Tp,uv_pars_vertex:bp,uv_vertex:Ap,worldpos_vertex:Rp,background_vert:Cp,background_frag:Lp,backgroundCube_vert:Pp,backgroundCube_frag:Ip,cube_vert:Dp,cube_frag:Up,depth_vert:Np,depth_frag:Fp,distanceRGBA_vert:Op,distanceRGBA_frag:zp,equirect_vert:Bp,equirect_frag:kp,linedashed_vert:Hp,linedashed_frag:Gp,meshbasic_vert:Vp,meshbasic_frag:Wp,meshlambert_vert:Xp,meshlambert_frag:qp,meshmatcap_vert:Yp,meshmatcap_frag:$p,meshnormal_vert:Zp,meshnormal_frag:Jp,meshphong_vert:Kp,meshphong_frag:jp,meshphysical_vert:Qp,meshphysical_frag:tm,meshtoon_vert:em,meshtoon_frag:nm,points_vert:im,points_frag:sm,shadow_vert:om,shadow_frag:rm,sprite_vert:am,sprite_frag:cm},At={common:{diffuse:{value:new St(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new jt},alphaMap:{value:null},alphaMapTransform:{value:new jt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new jt}},envmap:{envMap:{value:null},envMapRotation:{value:new jt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new jt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new jt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new jt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new jt},normalScale:{value:new gt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new jt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new jt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new jt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new jt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new St(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new St(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new jt},alphaTest:{value:0},uvTransform:{value:new jt}},sprite:{diffuse:{value:new St(16777215)},opacity:{value:1},center:{value:new gt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new jt},alphaMap:{value:null},alphaMapTransform:{value:new jt},alphaTest:{value:0}}},In={basic:{uniforms:en([At.common,At.specularmap,At.envmap,At.aomap,At.lightmap,At.fog]),vertexShader:ee.meshbasic_vert,fragmentShader:ee.meshbasic_frag},lambert:{uniforms:en([At.common,At.specularmap,At.envmap,At.aomap,At.lightmap,At.emissivemap,At.bumpmap,At.normalmap,At.displacementmap,At.fog,At.lights,{emissive:{value:new St(0)}}]),vertexShader:ee.meshlambert_vert,fragmentShader:ee.meshlambert_frag},phong:{uniforms:en([At.common,At.specularmap,At.envmap,At.aomap,At.lightmap,At.emissivemap,At.bumpmap,At.normalmap,At.displacementmap,At.fog,At.lights,{emissive:{value:new St(0)},specular:{value:new St(1118481)},shininess:{value:30}}]),vertexShader:ee.meshphong_vert,fragmentShader:ee.meshphong_frag},standard:{uniforms:en([At.common,At.envmap,At.aomap,At.lightmap,At.emissivemap,At.bumpmap,At.normalmap,At.displacementmap,At.roughnessmap,At.metalnessmap,At.fog,At.lights,{emissive:{value:new St(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ee.meshphysical_vert,fragmentShader:ee.meshphysical_frag},toon:{uniforms:en([At.common,At.aomap,At.lightmap,At.emissivemap,At.bumpmap,At.normalmap,At.displacementmap,At.gradientmap,At.fog,At.lights,{emissive:{value:new St(0)}}]),vertexShader:ee.meshtoon_vert,fragmentShader:ee.meshtoon_frag},matcap:{uniforms:en([At.common,At.bumpmap,At.normalmap,At.displacementmap,At.fog,{matcap:{value:null}}]),vertexShader:ee.meshmatcap_vert,fragmentShader:ee.meshmatcap_frag},points:{uniforms:en([At.points,At.fog]),vertexShader:ee.points_vert,fragmentShader:ee.points_frag},dashed:{uniforms:en([At.common,At.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ee.linedashed_vert,fragmentShader:ee.linedashed_frag},depth:{uniforms:en([At.common,At.displacementmap]),vertexShader:ee.depth_vert,fragmentShader:ee.depth_frag},normal:{uniforms:en([At.common,At.bumpmap,At.normalmap,At.displacementmap,{opacity:{value:1}}]),vertexShader:ee.meshnormal_vert,fragmentShader:ee.meshnormal_frag},sprite:{uniforms:en([At.sprite,At.fog]),vertexShader:ee.sprite_vert,fragmentShader:ee.sprite_frag},background:{uniforms:{uvTransform:{value:new jt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ee.background_vert,fragmentShader:ee.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new jt}},vertexShader:ee.backgroundCube_vert,fragmentShader:ee.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ee.cube_vert,fragmentShader:ee.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ee.equirect_vert,fragmentShader:ee.equirect_frag},distanceRGBA:{uniforms:en([At.common,At.displacementmap,{referencePosition:{value:new I},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ee.distanceRGBA_vert,fragmentShader:ee.distanceRGBA_frag},shadow:{uniforms:en([At.lights,At.fog,{color:{value:new St(0)},opacity:{value:1}}]),vertexShader:ee.shadow_vert,fragmentShader:ee.shadow_frag}};In.physical={uniforms:en([In.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new jt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new jt},clearcoatNormalScale:{value:new gt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new jt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new jt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new jt},sheen:{value:0},sheenColor:{value:new St(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new jt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new jt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new jt},transmissionSamplerSize:{value:new gt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new jt},attenuationDistance:{value:0},attenuationColor:{value:new St(0)},specularColor:{value:new St(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new jt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new jt},anisotropyVector:{value:new gt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new jt}}]),vertexShader:ee.meshphysical_vert,fragmentShader:ee.meshphysical_frag};const Ao={r:0,b:0,g:0},Ei=new bn,lm=new fe;function hm(i,t,e,n,s,o,r){const a=new St(0);let c=o===!0?0:1,l,h,u=null,d=0,f=null;function m(S){let y=S.isScene===!0?S.background:null;return y&&y.isTexture&&(y=(S.backgroundBlurriness>0?e:t).get(y)),y}function _(S){let y=!1;const v=m(S);v===null?p(a,c):v&&v.isColor&&(p(v,1),y=!0);const D=i.xr.getEnvironmentBlendMode();D==="additive"?n.buffers.color.setClear(0,0,0,1,r):D==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,r),(i.autoClear||y)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function g(S,y){const v=m(y);v&&(v.isCubeTexture||v.mapping===ur)?(h===void 0&&(h=new w(new zt(1,1,1),new vi({name:"BackgroundCubeMaterial",uniforms:ys(In.backgroundCube.uniforms),vertexShader:In.backgroundCube.vertexShader,fragmentShader:In.backgroundCube.fragmentShader,side:Xe,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(D,T,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),Ei.copy(y.backgroundRotation),Ei.x*=-1,Ei.y*=-1,Ei.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(Ei.y*=-1,Ei.z*=-1),h.material.uniforms.envMap.value=v,h.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(lm.makeRotationFromEuler(Ei)),h.material.toneMapped=oe.getTransfer(v.colorSpace)!==ge,(u!==v||d!==v.version||f!==i.toneMapping)&&(h.material.needsUpdate=!0,u=v,d=v.version,f=i.toneMapping),h.layers.enableAll(),S.unshift(h,h.geometry,h.material,0,0,null)):v&&v.isTexture&&(l===void 0&&(l=new w(new Sn(2,2),new vi({name:"BackgroundMaterial",uniforms:ys(In.background.uniforms),vertexShader:In.background.vertexShader,fragmentShader:In.background.fragmentShader,side:_i,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=v,l.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,l.material.toneMapped=oe.getTransfer(v.colorSpace)!==ge,v.matrixAutoUpdate===!0&&v.updateMatrix(),l.material.uniforms.uvTransform.value.copy(v.matrix),(u!==v||d!==v.version||f!==i.toneMapping)&&(l.material.needsUpdate=!0,u=v,d=v.version,f=i.toneMapping),l.layers.enableAll(),S.unshift(l,l.geometry,l.material,0,0,null))}function p(S,y){S.getRGB(Ao,ou(i)),n.buffers.color.setClear(Ao.r,Ao.g,Ao.b,y,r)}return{getClearColor:function(){return a},setClearColor:function(S,y=1){a.set(S),c=y,p(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(S){c=S,p(a,c)},render:_,addToRenderList:g}}function um(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null);let o=s,r=!1;function a(x,R,O,N,V){let tt=!1;const $=u(N,O,R);o!==$&&(o=$,l(o.object)),tt=f(x,N,O,V),tt&&m(x,N,O,V),V!==null&&t.update(V,i.ELEMENT_ARRAY_BUFFER),(tt||r)&&(r=!1,v(x,R,O,N),V!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(V).buffer))}function c(){return i.createVertexArray()}function l(x){return i.bindVertexArray(x)}function h(x){return i.deleteVertexArray(x)}function u(x,R,O){const N=O.wireframe===!0;let V=n[x.id];V===void 0&&(V={},n[x.id]=V);let tt=V[R.id];tt===void 0&&(tt={},V[R.id]=tt);let $=tt[N];return $===void 0&&($=d(c()),tt[N]=$),$}function d(x){const R=[],O=[],N=[];for(let V=0;V<e;V++)R[V]=0,O[V]=0,N[V]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:R,enabledAttributes:O,attributeDivisors:N,object:x,attributes:{},index:null}}function f(x,R,O,N){const V=o.attributes,tt=R.attributes;let $=0;const Q=O.getAttributes();for(const k in Q)if(Q[k].location>=0){const Mt=V[k];let bt=tt[k];if(bt===void 0&&(k==="instanceMatrix"&&x.instanceMatrix&&(bt=x.instanceMatrix),k==="instanceColor"&&x.instanceColor&&(bt=x.instanceColor)),Mt===void 0||Mt.attribute!==bt||bt&&Mt.data!==bt.data)return!0;$++}return o.attributesNum!==$||o.index!==N}function m(x,R,O,N){const V={},tt=R.attributes;let $=0;const Q=O.getAttributes();for(const k in Q)if(Q[k].location>=0){let Mt=tt[k];Mt===void 0&&(k==="instanceMatrix"&&x.instanceMatrix&&(Mt=x.instanceMatrix),k==="instanceColor"&&x.instanceColor&&(Mt=x.instanceColor));const bt={};bt.attribute=Mt,Mt&&Mt.data&&(bt.data=Mt.data),V[k]=bt,$++}o.attributes=V,o.attributesNum=$,o.index=N}function _(){const x=o.newAttributes;for(let R=0,O=x.length;R<O;R++)x[R]=0}function g(x){p(x,0)}function p(x,R){const O=o.newAttributes,N=o.enabledAttributes,V=o.attributeDivisors;O[x]=1,N[x]===0&&(i.enableVertexAttribArray(x),N[x]=1),V[x]!==R&&(i.vertexAttribDivisor(x,R),V[x]=R)}function S(){const x=o.newAttributes,R=o.enabledAttributes;for(let O=0,N=R.length;O<N;O++)R[O]!==x[O]&&(i.disableVertexAttribArray(O),R[O]=0)}function y(x,R,O,N,V,tt,$){$===!0?i.vertexAttribIPointer(x,R,O,V,tt):i.vertexAttribPointer(x,R,O,N,V,tt)}function v(x,R,O,N){_();const V=N.attributes,tt=O.getAttributes(),$=R.defaultAttributeValues;for(const Q in tt){const k=tt[Q];if(k.location>=0){let _t=V[Q];if(_t===void 0&&(Q==="instanceMatrix"&&x.instanceMatrix&&(_t=x.instanceMatrix),Q==="instanceColor"&&x.instanceColor&&(_t=x.instanceColor)),_t!==void 0){const Mt=_t.normalized,bt=_t.itemSize,Wt=t.get(_t);if(Wt===void 0)continue;const Yt=Wt.buffer,et=Wt.type,ft=Wt.bytesPerElement,Rt=et===i.INT||et===i.UNSIGNED_INT||_t.gpuType===Sc;if(_t.isInterleavedBufferAttribute){const X=_t.data,rt=X.stride,xt=_t.offset;if(X.isInstancedInterleavedBuffer){for(let Tt=0;Tt<k.locationSize;Tt++)p(k.location+Tt,X.meshPerAttribute);x.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=X.meshPerAttribute*X.count)}else for(let Tt=0;Tt<k.locationSize;Tt++)g(k.location+Tt);i.bindBuffer(i.ARRAY_BUFFER,Yt);for(let Tt=0;Tt<k.locationSize;Tt++)y(k.location+Tt,bt/k.locationSize,et,Mt,rt*ft,(xt+bt/k.locationSize*Tt)*ft,Rt)}else{if(_t.isInstancedBufferAttribute){for(let X=0;X<k.locationSize;X++)p(k.location+X,_t.meshPerAttribute);x.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=_t.meshPerAttribute*_t.count)}else for(let X=0;X<k.locationSize;X++)g(k.location+X);i.bindBuffer(i.ARRAY_BUFFER,Yt);for(let X=0;X<k.locationSize;X++)y(k.location+X,bt/k.locationSize,et,Mt,bt*ft,bt/k.locationSize*X*ft,Rt)}}else if($!==void 0){const Mt=$[Q];if(Mt!==void 0)switch(Mt.length){case 2:i.vertexAttrib2fv(k.location,Mt);break;case 3:i.vertexAttrib3fv(k.location,Mt);break;case 4:i.vertexAttrib4fv(k.location,Mt);break;default:i.vertexAttrib1fv(k.location,Mt)}}}}S()}function D(){P();for(const x in n){const R=n[x];for(const O in R){const N=R[O];for(const V in N)h(N[V].object),delete N[V];delete R[O]}delete n[x]}}function T(x){if(n[x.id]===void 0)return;const R=n[x.id];for(const O in R){const N=R[O];for(const V in N)h(N[V].object),delete N[V];delete R[O]}delete n[x.id]}function C(x){for(const R in n){const O=n[R];if(O[x.id]===void 0)continue;const N=O[x.id];for(const V in N)h(N[V].object),delete N[V];delete O[x.id]}}function P(){E(),r=!0,o!==s&&(o=s,l(o.object))}function E(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:P,resetDefaultState:E,dispose:D,releaseStatesOfGeometry:T,releaseStatesOfProgram:C,initAttributes:_,enableAttribute:g,disableUnusedAttributes:S}}function dm(i,t,e){let n;function s(l){n=l}function o(l,h){i.drawArrays(n,l,h),e.update(h,n,1)}function r(l,h,u){u!==0&&(i.drawArraysInstanced(n,l,h,u),e.update(h,n,u))}function a(l,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,h,0,u);let f=0;for(let m=0;m<u;m++)f+=h[m];e.update(f,n,1)}function c(l,h,u,d){if(u===0)return;const f=t.get("WEBGL_multi_draw");if(f===null)for(let m=0;m<l.length;m++)r(l[m],h[m],d[m]);else{f.multiDrawArraysInstancedWEBGL(n,l,0,h,0,d,0,u);let m=0;for(let _=0;_<u;_++)m+=h[_]*d[_];e.update(m,n,1)}}this.setMode=s,this.render=o,this.renderInstances=r,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function fm(i,t,e,n){let s;function o(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const C=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function r(C){return!(C!==En&&n.convert(C)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(C){const P=C===Qs&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(C!==Jn&&n.convert(C)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&C!==Fn&&!P)}function c(C){if(C==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp";const h=c(l);h!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);const u=e.logarithmicDepthBuffer===!0,d=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),m=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_TEXTURE_SIZE),g=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),S=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),y=i.getParameter(i.MAX_VARYING_VECTORS),v=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),D=m>0,T=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:o,getMaxPrecision:c,textureFormatReadable:r,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:u,reverseDepthBuffer:d,maxTextures:f,maxVertexTextures:m,maxTextureSize:_,maxCubemapSize:g,maxAttributes:p,maxVertexUniforms:S,maxVaryings:y,maxFragmentUniforms:v,vertexTextures:D,maxSamples:T}}function pm(i){const t=this;let e=null,n=0,s=!1,o=!1;const r=new bi,a=new jt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){const f=u.length!==0||d||n!==0||s;return s=d,n=u.length,f},this.beginShadows=function(){o=!0,h(null)},this.endShadows=function(){o=!1},this.setGlobalState=function(u,d){e=h(u,d,0)},this.setState=function(u,d,f){const m=u.clippingPlanes,_=u.clipIntersection,g=u.clipShadows,p=i.get(u);if(!s||m===null||m.length===0||o&&!g)o?h(null):l();else{const S=o?0:n,y=S*4;let v=p.clippingState||null;c.value=v,v=h(m,d,y,f);for(let D=0;D!==y;++D)v[D]=e[D];p.clippingState=v,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=S}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,d,f,m){const _=u!==null?u.length:0;let g=null;if(_!==0){if(g=c.value,m!==!0||g===null){const p=f+_*4,S=d.matrixWorldInverse;a.getNormalMatrix(S),(g===null||g.length<p)&&(g=new Float32Array(p));for(let y=0,v=f;y!==_;++y,v+=4)r.copy(u[y]).applyMatrix4(S,a),r.normal.toArray(g,v),g[v+3]=r.constant}c.value=g,c.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,g}}function mm(i){let t=new WeakMap;function e(r,a){return a===Ra?r.mapping=ms:a===Ca&&(r.mapping=gs),r}function n(r){if(r&&r.isTexture){const a=r.mapping;if(a===Ra||a===Ca)if(t.has(r)){const c=t.get(r).texture;return e(c,r.mapping)}else{const c=r.image;if(c&&c.height>0){const l=new bf(c.height);return l.fromEquirectangularTexture(i,r),t.set(r,l),r.addEventListener("dispose",s),e(l.texture,r.mapping)}else return null}}return r}function s(r){const a=r.target;a.removeEventListener("dispose",s);const c=t.get(a);c!==void 0&&(t.delete(a),c.dispose())}function o(){t=new WeakMap}return{get:n,dispose:o}}class lu extends ru{constructor(t=-1,e=1,n=1,s=-1,o=.1,r=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=o,this.far=r,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,o,r){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=o,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let o=n-t,r=n+t,a=s+e,c=s-e;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;o+=l*this.view.offsetX,r=o+l*this.view.width,a-=h*this.view.offsetY,c=a-h*this.view.height}this.projectionMatrix.makeOrthographic(o,r,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const as=4,Ll=[.125,.215,.35,.446,.526,.582],Ci=20,qr=new lu,Pl=new St;let Yr=null,$r=0,Zr=0,Jr=!1;const Ai=(1+Math.sqrt(5))/2,is=1/Ai,Il=[new I(-Ai,is,0),new I(Ai,is,0),new I(-is,0,Ai),new I(is,0,Ai),new I(0,Ai,-is),new I(0,Ai,is),new I(-1,1,-1),new I(1,1,-1),new I(-1,1,1),new I(1,1,1)];class sc{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100){Yr=this._renderer.getRenderTarget(),$r=this._renderer.getActiveCubeFace(),Zr=this._renderer.getActiveMipmapLevel(),Jr=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const o=this._allocateTargets();return o.depthBuffer=!0,this._sceneToCubeUV(t,n,s,o),e>0&&this._blur(o,0,0,e),this._applyPMREM(o),this._cleanup(o),o}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Nl(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ul(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Yr,$r,Zr),this._renderer.xr.enabled=Jr,t.scissorTest=!1,Ro(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===ms||t.mapping===gs?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Yr=this._renderer.getRenderTarget(),$r=this._renderer.getActiveCubeFace(),Zr=this._renderer.getActiveMipmapLevel(),Jr=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Nn,minFilter:Nn,generateMipmaps:!1,type:Qs,format:En,colorSpace:Ms,depthBuffer:!1},s=Dl(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Dl(t,e,n);const{_lodMax:o}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=gm(o)),this._blurMaterial=_m(o,t,e)}return s}_compileMaterial(t){const e=new w(this._lodPlanes[0],t);this._renderer.compile(e,qr)}_sceneToCubeUV(t,e,n,s){const a=new Qe(90,1,e,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(Pl),h.toneMapping=gi,h.autoClear=!1;const f=new de({name:"PMREM.Background",side:Xe,depthWrite:!1,depthTest:!1}),m=new w(new zt,f);let _=!1;const g=t.background;g?g.isColor&&(f.color.copy(g),t.background=null,_=!0):(f.color.copy(Pl),_=!0);for(let p=0;p<6;p++){const S=p%3;S===0?(a.up.set(0,c[p],0),a.lookAt(l[p],0,0)):S===1?(a.up.set(0,0,c[p]),a.lookAt(0,l[p],0)):(a.up.set(0,c[p],0),a.lookAt(0,0,l[p]));const y=this._cubeSize;Ro(s,S*y,p>2?y:0,y,y),h.setRenderTarget(s),_&&h.render(m,a),h.render(t,a)}m.geometry.dispose(),m.material.dispose(),h.toneMapping=d,h.autoClear=u,t.background=g}_textureToCubeUV(t,e){const n=this._renderer,s=t.mapping===ms||t.mapping===gs;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Nl()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Ul());const o=s?this._cubemapMaterial:this._equirectMaterial,r=new w(this._lodPlanes[0],o),a=o.uniforms;a.envMap.value=t;const c=this._cubeSize;Ro(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(r,qr)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const s=this._lodPlanes.length;for(let o=1;o<s;o++){const r=Math.sqrt(this._sigmas[o]*this._sigmas[o]-this._sigmas[o-1]*this._sigmas[o-1]),a=Il[(s-o-1)%Il.length];this._blur(t,o-1,o,r,a)}e.autoClear=n}_blur(t,e,n,s,o){const r=this._pingPongRenderTarget;this._halfBlur(t,r,e,n,s,"latitudinal",o),this._halfBlur(r,t,n,n,s,"longitudinal",o)}_halfBlur(t,e,n,s,o,r,a){const c=this._renderer,l=this._blurMaterial;r!=="latitudinal"&&r!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new w(this._lodPlanes[s],l),d=l.uniforms,f=this._sizeLods[n]-1,m=isFinite(o)?Math.PI/(2*f):2*Math.PI/(2*Ci-1),_=o/m,g=isFinite(o)?1+Math.floor(h*_):Ci;g>Ci&&console.warn(`sigmaRadians, ${o}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${Ci}`);const p=[];let S=0;for(let C=0;C<Ci;++C){const P=C/_,E=Math.exp(-P*P/2);p.push(E),C===0?S+=E:C<g&&(S+=2*E)}for(let C=0;C<p.length;C++)p[C]=p[C]/S;d.envMap.value=t.texture,d.samples.value=g,d.weights.value=p,d.latitudinal.value=r==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:y}=this;d.dTheta.value=m,d.mipInt.value=y-n;const v=this._sizeLods[s],D=3*v*(s>y-as?s-y+as:0),T=4*(this._cubeSize-v);Ro(e,D,T,3*v,2*v),c.setRenderTarget(e),c.render(u,qr)}}function gm(i){const t=[],e=[],n=[];let s=i;const o=i-as+1+Ll.length;for(let r=0;r<o;r++){const a=Math.pow(2,s);e.push(a);let c=1/a;r>i-as?c=Ll[r-i+as-1]:r===0&&(c=0),n.push(c);const l=1/(a-2),h=-l,u=1+l,d=[h,h,u,h,u,u,h,h,u,u,h,u],f=6,m=6,_=3,g=2,p=1,S=new Float32Array(_*m*f),y=new Float32Array(g*m*f),v=new Float32Array(p*m*f);for(let T=0;T<f;T++){const C=T%3*2/3-1,P=T>2?0:-1,E=[C,P,0,C+2/3,P,0,C+2/3,P+1,0,C,P,0,C+2/3,P+1,0,C,P+1,0];S.set(E,_*m*T),y.set(d,g*m*T);const x=[T,T,T,T,T,T];v.set(x,p*m*T)}const D=new Le;D.setAttribute("position",new dn(S,_)),D.setAttribute("uv",new dn(y,g)),D.setAttribute("faceIndex",new dn(v,p)),t.push(D),s>as&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Dl(i,t,e){const n=new zi(i,t,e);return n.texture.mapping=ur,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Ro(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function _m(i,t,e){const n=new Float32Array(Ci),s=new I(0,1,0);return new vi({name:"SphericalGaussianBlur",defines:{n:Ci,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Uc(),fragmentShader:`

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
		`,blending:mi,depthTest:!1,depthWrite:!1})}function Ul(){return new vi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Uc(),fragmentShader:`

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
		`,blending:mi,depthTest:!1,depthWrite:!1})}function Nl(){return new vi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Uc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:mi,depthTest:!1,depthWrite:!1})}function Uc(){return`

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
	`}function vm(i){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){const c=a.mapping,l=c===Ra||c===Ca,h=c===ms||c===gs;if(l||h){let u=t.get(a);const d=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return e===null&&(e=new sc(i)),u=l?e.fromEquirectangular(a,u):e.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),u.texture;if(u!==void 0)return u.texture;{const f=a.image;return l&&f&&f.height>0||h&&f&&s(f)?(e===null&&(e=new sc(i)),u=l?e.fromEquirectangular(a):e.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),a.addEventListener("dispose",o),u.texture):null}}}return a}function s(a){let c=0;const l=6;for(let h=0;h<l;h++)a[h]!==void 0&&c++;return c===l}function o(a){const c=a.target;c.removeEventListener("dispose",o);const l=t.get(c);l!==void 0&&(t.delete(c),l.dispose())}function r(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:r}}function xm(i){const t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const s=e(n);return s===null&&Hs("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function ym(i,t,e,n){const s={},o=new WeakMap;function r(u){const d=u.target;d.index!==null&&t.remove(d.index);for(const m in d.attributes)t.remove(d.attributes[m]);for(const m in d.morphAttributes){const _=d.morphAttributes[m];for(let g=0,p=_.length;g<p;g++)t.remove(_[g])}d.removeEventListener("dispose",r),delete s[d.id];const f=o.get(d);f&&(t.remove(f),o.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function a(u,d){return s[d.id]===!0||(d.addEventListener("dispose",r),s[d.id]=!0,e.memory.geometries++),d}function c(u){const d=u.attributes;for(const m in d)t.update(d[m],i.ARRAY_BUFFER);const f=u.morphAttributes;for(const m in f){const _=f[m];for(let g=0,p=_.length;g<p;g++)t.update(_[g],i.ARRAY_BUFFER)}}function l(u){const d=[],f=u.index,m=u.attributes.position;let _=0;if(f!==null){const S=f.array;_=f.version;for(let y=0,v=S.length;y<v;y+=3){const D=S[y+0],T=S[y+1],C=S[y+2];d.push(D,T,T,C,C,D)}}else if(m!==void 0){const S=m.array;_=m.version;for(let y=0,v=S.length/3-1;y<v;y+=3){const D=y+0,T=y+1,C=y+2;d.push(D,T,T,C,C,D)}}else return;const g=new(Qh(d)?su:iu)(d,1);g.version=_;const p=o.get(u);p&&t.remove(p),o.set(u,g)}function h(u){const d=o.get(u);if(d){const f=u.index;f!==null&&d.version<f.version&&l(u)}else l(u);return o.get(u)}return{get:a,update:c,getWireframeAttribute:h}}function Mm(i,t,e){let n;function s(d){n=d}let o,r;function a(d){o=d.type,r=d.bytesPerElement}function c(d,f){i.drawElements(n,f,o,d*r),e.update(f,n,1)}function l(d,f,m){m!==0&&(i.drawElementsInstanced(n,f,o,d*r,m),e.update(f,n,m))}function h(d,f,m){if(m===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,o,d,0,m);let g=0;for(let p=0;p<m;p++)g+=f[p];e.update(g,n,1)}function u(d,f,m,_){if(m===0)return;const g=t.get("WEBGL_multi_draw");if(g===null)for(let p=0;p<d.length;p++)l(d[p]/r,f[p],_[p]);else{g.multiDrawElementsInstancedWEBGL(n,f,0,o,d,0,_,0,m);let p=0;for(let S=0;S<m;S++)p+=f[S]*_[S];e.update(p,n,1)}}this.setMode=s,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function wm(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(o,r,a){switch(e.calls++,r){case i.TRIANGLES:e.triangles+=a*(o/3);break;case i.LINES:e.lines+=a*(o/2);break;case i.LINE_STRIP:e.lines+=a*(o-1);break;case i.LINE_LOOP:e.lines+=a*o;break;case i.POINTS:e.points+=a*o;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",r);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function Sm(i,t,e){const n=new WeakMap,s=new _e;function o(r,a,c){const l=r.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0;let d=n.get(a);if(d===void 0||d.count!==u){let x=function(){P.dispose(),n.delete(a),a.removeEventListener("dispose",x)};var f=x;d!==void 0&&d.texture.dispose();const m=a.morphAttributes.position!==void 0,_=a.morphAttributes.normal!==void 0,g=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],S=a.morphAttributes.normal||[],y=a.morphAttributes.color||[];let v=0;m===!0&&(v=1),_===!0&&(v=2),g===!0&&(v=3);let D=a.attributes.position.count*v,T=1;D>t.maxTextureSize&&(T=Math.ceil(D/t.maxTextureSize),D=t.maxTextureSize);const C=new Float32Array(D*T*4*u),P=new eu(C,D,T,u);P.type=Fn,P.needsUpdate=!0;const E=v*4;for(let R=0;R<u;R++){const O=p[R],N=S[R],V=y[R],tt=D*T*4*R;for(let $=0;$<O.count;$++){const Q=$*E;m===!0&&(s.fromBufferAttribute(O,$),C[tt+Q+0]=s.x,C[tt+Q+1]=s.y,C[tt+Q+2]=s.z,C[tt+Q+3]=0),_===!0&&(s.fromBufferAttribute(N,$),C[tt+Q+4]=s.x,C[tt+Q+5]=s.y,C[tt+Q+6]=s.z,C[tt+Q+7]=0),g===!0&&(s.fromBufferAttribute(V,$),C[tt+Q+8]=s.x,C[tt+Q+9]=s.y,C[tt+Q+10]=s.z,C[tt+Q+11]=V.itemSize===4?s.w:1)}}d={count:u,texture:P,size:new gt(D,T)},n.set(a,d),a.addEventListener("dispose",x)}if(r.isInstancedMesh===!0&&r.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",r.morphTexture,e);else{let m=0;for(let g=0;g<l.length;g++)m+=l[g];const _=a.morphTargetsRelative?1:1-m;c.getUniforms().setValue(i,"morphTargetBaseInfluence",_),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",d.texture,e),c.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:o}}function Em(i,t,e,n){let s=new WeakMap;function o(c){const l=n.render.frame,h=c.geometry,u=t.get(c,h);if(s.get(u)!==l&&(t.update(u),s.set(u,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),s.get(c)!==l&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),s.set(c,l))),c.isSkinnedMesh){const d=c.skeleton;s.get(d)!==l&&(d.update(),s.set(d,l))}return u}function r(){s=new WeakMap}function a(c){const l=c.target;l.removeEventListener("dispose",a),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:o,dispose:r}}class hu extends tn{constructor(t,e,n,s,o,r,a,c,l,h=us){if(h!==us&&h!==xs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===us&&(n=Oi),n===void 0&&h===xs&&(n=vs),super(null,s,o,r,a,c,h,n,l),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:un,this.minFilter=c!==void 0?c:un,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const uu=new tn,Fl=new hu(1,1),du=new eu,fu=new hf,pu=new au,Ol=[],zl=[],Bl=new Float32Array(16),kl=new Float32Array(9),Hl=new Float32Array(4);function Ts(i,t,e){const n=i[0];if(n<=0||n>0)return i;const s=t*e;let o=Ol[s];if(o===void 0&&(o=new Float32Array(s),Ol[s]=o),t!==0){n.toArray(o,0);for(let r=1,a=0;r!==t;++r)a+=e,i[r].toArray(o,a)}return o}function He(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Ge(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function fr(i,t){let e=zl[t];e===void 0&&(e=new Int32Array(t),zl[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function Tm(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function bm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(He(e,t))return;i.uniform2fv(this.addr,t),Ge(e,t)}}function Am(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(He(e,t))return;i.uniform3fv(this.addr,t),Ge(e,t)}}function Rm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(He(e,t))return;i.uniform4fv(this.addr,t),Ge(e,t)}}function Cm(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(He(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Ge(e,t)}else{if(He(e,n))return;Hl.set(n),i.uniformMatrix2fv(this.addr,!1,Hl),Ge(e,n)}}function Lm(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(He(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Ge(e,t)}else{if(He(e,n))return;kl.set(n),i.uniformMatrix3fv(this.addr,!1,kl),Ge(e,n)}}function Pm(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(He(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Ge(e,t)}else{if(He(e,n))return;Bl.set(n),i.uniformMatrix4fv(this.addr,!1,Bl),Ge(e,n)}}function Im(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function Dm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(He(e,t))return;i.uniform2iv(this.addr,t),Ge(e,t)}}function Um(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(He(e,t))return;i.uniform3iv(this.addr,t),Ge(e,t)}}function Nm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(He(e,t))return;i.uniform4iv(this.addr,t),Ge(e,t)}}function Fm(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function Om(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(He(e,t))return;i.uniform2uiv(this.addr,t),Ge(e,t)}}function zm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(He(e,t))return;i.uniform3uiv(this.addr,t),Ge(e,t)}}function Bm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(He(e,t))return;i.uniform4uiv(this.addr,t),Ge(e,t)}}function km(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let o;this.type===i.SAMPLER_2D_SHADOW?(Fl.compareFunction=jh,o=Fl):o=uu,e.setTexture2D(t||o,s)}function Hm(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||fu,s)}function Gm(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||pu,s)}function Vm(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||du,s)}function Wm(i){switch(i){case 5126:return Tm;case 35664:return bm;case 35665:return Am;case 35666:return Rm;case 35674:return Cm;case 35675:return Lm;case 35676:return Pm;case 5124:case 35670:return Im;case 35667:case 35671:return Dm;case 35668:case 35672:return Um;case 35669:case 35673:return Nm;case 5125:return Fm;case 36294:return Om;case 36295:return zm;case 36296:return Bm;case 35678:case 36198:case 36298:case 36306:case 35682:return km;case 35679:case 36299:case 36307:return Hm;case 35680:case 36300:case 36308:case 36293:return Gm;case 36289:case 36303:case 36311:case 36292:return Vm}}function Xm(i,t){i.uniform1fv(this.addr,t)}function qm(i,t){const e=Ts(t,this.size,2);i.uniform2fv(this.addr,e)}function Ym(i,t){const e=Ts(t,this.size,3);i.uniform3fv(this.addr,e)}function $m(i,t){const e=Ts(t,this.size,4);i.uniform4fv(this.addr,e)}function Zm(i,t){const e=Ts(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function Jm(i,t){const e=Ts(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function Km(i,t){const e=Ts(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function jm(i,t){i.uniform1iv(this.addr,t)}function Qm(i,t){i.uniform2iv(this.addr,t)}function tg(i,t){i.uniform3iv(this.addr,t)}function eg(i,t){i.uniform4iv(this.addr,t)}function ng(i,t){i.uniform1uiv(this.addr,t)}function ig(i,t){i.uniform2uiv(this.addr,t)}function sg(i,t){i.uniform3uiv(this.addr,t)}function og(i,t){i.uniform4uiv(this.addr,t)}function rg(i,t,e){const n=this.cache,s=t.length,o=fr(e,s);He(n,o)||(i.uniform1iv(this.addr,o),Ge(n,o));for(let r=0;r!==s;++r)e.setTexture2D(t[r]||uu,o[r])}function ag(i,t,e){const n=this.cache,s=t.length,o=fr(e,s);He(n,o)||(i.uniform1iv(this.addr,o),Ge(n,o));for(let r=0;r!==s;++r)e.setTexture3D(t[r]||fu,o[r])}function cg(i,t,e){const n=this.cache,s=t.length,o=fr(e,s);He(n,o)||(i.uniform1iv(this.addr,o),Ge(n,o));for(let r=0;r!==s;++r)e.setTextureCube(t[r]||pu,o[r])}function lg(i,t,e){const n=this.cache,s=t.length,o=fr(e,s);He(n,o)||(i.uniform1iv(this.addr,o),Ge(n,o));for(let r=0;r!==s;++r)e.setTexture2DArray(t[r]||du,o[r])}function hg(i){switch(i){case 5126:return Xm;case 35664:return qm;case 35665:return Ym;case 35666:return $m;case 35674:return Zm;case 35675:return Jm;case 35676:return Km;case 5124:case 35670:return jm;case 35667:case 35671:return Qm;case 35668:case 35672:return tg;case 35669:case 35673:return eg;case 5125:return ng;case 36294:return ig;case 36295:return sg;case 36296:return og;case 35678:case 36198:case 36298:case 36306:case 35682:return rg;case 35679:case 36299:case 36307:return ag;case 35680:case 36300:case 36308:case 36293:return cg;case 36289:case 36303:case 36311:case 36292:return lg}}class ug{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Wm(e.type)}}class dg{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=hg(e.type)}}class fg{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const s=this.seq;for(let o=0,r=s.length;o!==r;++o){const a=s[o];a.setValue(t,e[a.id],n)}}}const Kr=/(\w+)(\])?(\[|\.)?/g;function Gl(i,t){i.seq.push(t),i.map[t.id]=t}function pg(i,t,e){const n=i.name,s=n.length;for(Kr.lastIndex=0;;){const o=Kr.exec(n),r=Kr.lastIndex;let a=o[1];const c=o[2]==="]",l=o[3];if(c&&(a=a|0),l===void 0||l==="["&&r+2===s){Gl(e,l===void 0?new ug(a,i,t):new dg(a,i,t));break}else{let u=e.map[a];u===void 0&&(u=new fg(a),Gl(e,u)),e=u}}}class Yo{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const o=t.getActiveUniform(e,s),r=t.getUniformLocation(e,o.name);pg(o,r,this)}}setValue(t,e,n,s){const o=this.map[e];o!==void 0&&o.setValue(t,n,s)}setOptional(t,e,n){const s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let o=0,r=e.length;o!==r;++o){const a=e[o],c=n[a.id];c.needsUpdate!==!1&&a.setValue(t,c.value,s)}}static seqWithValue(t,e){const n=[];for(let s=0,o=t.length;s!==o;++s){const r=t[s];r.id in e&&n.push(r)}return n}}function Vl(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const mg=37297;let gg=0;function _g(i,t){const e=i.split(`
`),n=[],s=Math.max(t-6,0),o=Math.min(t+6,e.length);for(let r=s;r<o;r++){const a=r+1;n.push(`${a===t?">":" "} ${a}: ${e[r]}`)}return n.join(`
`)}const Wl=new jt;function vg(i){oe._getMatrix(Wl,oe.workingColorSpace,i);const t=`mat3( ${Wl.elements.map(e=>e.toFixed(4))} )`;switch(oe.getTransfer(i)){case dr:return[t,"LinearTransferOETF"];case ge:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function Xl(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";const o=/ERROR: 0:(\d+)/.exec(s);if(o){const r=parseInt(o[1]);return e.toUpperCase()+`

`+s+`

`+_g(i.getShaderSource(t),r)}else return s}function xg(i,t){const e=vg(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function yg(i,t){let e;switch(t){case Fd:e="Linear";break;case Od:e="Reinhard";break;case zd:e="Cineon";break;case hr:e="ACESFilmic";break;case kd:e="AgX";break;case Hd:e="Neutral";break;case Bd:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const Co=new I;function Mg(){oe.getLuminanceCoefficients(Co);const i=Co.x.toFixed(4),t=Co.y.toFixed(4),e=Co.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function wg(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Gs).join(`
`)}function Sg(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Eg(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const o=i.getActiveAttrib(t,s),r=o.name;let a=1;o.type===i.FLOAT_MAT2&&(a=2),o.type===i.FLOAT_MAT3&&(a=3),o.type===i.FLOAT_MAT4&&(a=4),e[r]={type:o.type,location:i.getAttribLocation(t,r),locationSize:a}}return e}function Gs(i){return i!==""}function ql(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Yl(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const Tg=/^[ \t]*#include +<([\w\d./]+)>/gm;function oc(i){return i.replace(Tg,Ag)}const bg=new Map;function Ag(i,t){let e=ee[t];if(e===void 0){const n=bg.get(t);if(n!==void 0)e=ee[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return oc(e)}const Rg=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function $l(i){return i.replace(Rg,Cg)}function Cg(i,t,e,n){let s="";for(let o=parseInt(t);o<parseInt(e);o++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+o+" ]").replace(/UNROLLED_LOOP_INDEX/g,o);return s}function Zl(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}function Lg(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===kh?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===Hh?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Yn&&(t="SHADOWMAP_TYPE_VSM"),t}function Pg(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case ms:case gs:t="ENVMAP_TYPE_CUBE";break;case ur:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Ig(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case gs:t="ENVMAP_MODE_REFRACTION";break}return t}function Dg(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case wc:t="ENVMAP_BLENDING_MULTIPLY";break;case Ud:t="ENVMAP_BLENDING_MIX";break;case Nd:t="ENVMAP_BLENDING_ADD";break}return t}function Ug(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function Ng(i,t,e,n){const s=i.getContext(),o=e.defines;let r=e.vertexShader,a=e.fragmentShader;const c=Lg(e),l=Pg(e),h=Ig(e),u=Dg(e),d=Ug(e),f=wg(e),m=Sg(o),_=s.createProgram();let g,p,S=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(g=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(Gs).join(`
`),g.length>0&&(g+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(Gs).join(`
`),p.length>0&&(p+=`
`)):(g=[Zl(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Gs).join(`
`),p=[Zl(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==gi?"#define TONE_MAPPING":"",e.toneMapping!==gi?ee.tonemapping_pars_fragment:"",e.toneMapping!==gi?yg("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",ee.colorspace_pars_fragment,xg("linearToOutputTexel",e.outputColorSpace),Mg(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Gs).join(`
`)),r=oc(r),r=ql(r,e),r=Yl(r,e),a=oc(a),a=ql(a,e),a=Yl(a,e),r=$l(r),a=$l(a),e.isRawShaderMaterial!==!0&&(S=`#version 300 es
`,g=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,p=["#define varying in",e.glslVersion===ll?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===ll?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const y=S+g+r,v=S+p+a,D=Vl(s,s.VERTEX_SHADER,y),T=Vl(s,s.FRAGMENT_SHADER,v);s.attachShader(_,D),s.attachShader(_,T),e.index0AttributeName!==void 0?s.bindAttribLocation(_,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function C(R){if(i.debug.checkShaderErrors){const O=s.getProgramInfoLog(_).trim(),N=s.getShaderInfoLog(D).trim(),V=s.getShaderInfoLog(T).trim();let tt=!0,$=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(tt=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,_,D,T);else{const Q=Xl(s,D,"vertex"),k=Xl(s,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+R.name+`
Material Type: `+R.type+`

Program Info Log: `+O+`
`+Q+`
`+k)}else O!==""?console.warn("THREE.WebGLProgram: Program Info Log:",O):(N===""||V==="")&&($=!1);$&&(R.diagnostics={runnable:tt,programLog:O,vertexShader:{log:N,prefix:g},fragmentShader:{log:V,prefix:p}})}s.deleteShader(D),s.deleteShader(T),P=new Yo(s,_),E=Eg(s,_)}let P;this.getUniforms=function(){return P===void 0&&C(this),P};let E;this.getAttributes=function(){return E===void 0&&C(this),E};let x=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return x===!1&&(x=s.getProgramParameter(_,mg)),x},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=gg++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=D,this.fragmentShader=T,this}let Fg=0;class Og{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),o=this._getShaderStage(n),r=this._getShaderCacheForMaterial(t);return r.has(s)===!1&&(r.add(s),s.usedTimes++),r.has(o)===!1&&(r.add(o),o.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new zg(t),e.set(t,n)),n}}class zg{constructor(t){this.id=Fg++,this.code=t,this.usedTimes=0}}function Bg(i,t,e,n,s,o,r){const a=new Ic,c=new Og,l=new Set,h=[],u=s.logarithmicDepthBuffer,d=s.vertexTextures;let f=s.precision;const m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(E){return l.add(E),E===0?"uv":`uv${E}`}function g(E,x,R,O,N){const V=O.fog,tt=N.geometry,$=E.isMeshStandardMaterial?O.environment:null,Q=(E.isMeshStandardMaterial?e:t).get(E.envMap||$),k=Q&&Q.mapping===ur?Q.image.height:null,_t=m[E.type];E.precision!==null&&(f=s.getMaxPrecision(E.precision),f!==E.precision&&console.warn("THREE.WebGLProgram.getParameters:",E.precision,"not supported, using",f,"instead."));const Mt=tt.morphAttributes.position||tt.morphAttributes.normal||tt.morphAttributes.color,bt=Mt!==void 0?Mt.length:0;let Wt=0;tt.morphAttributes.position!==void 0&&(Wt=1),tt.morphAttributes.normal!==void 0&&(Wt=2),tt.morphAttributes.color!==void 0&&(Wt=3);let Yt,et,ft,Rt;if(_t){const pe=In[_t];Yt=pe.vertexShader,et=pe.fragmentShader}else Yt=E.vertexShader,et=E.fragmentShader,c.update(E),ft=c.getVertexShaderID(E),Rt=c.getFragmentShaderID(E);const X=i.getRenderTarget(),rt=i.state.buffers.depth.getReversed(),xt=N.isInstancedMesh===!0,Tt=N.isBatchedMesh===!0,ct=!!E.map,W=!!E.matcap,it=!!Q,L=!!E.aoMap,yt=!!E.lightMap,H=!!E.bumpMap,K=!!E.normalMap,Z=!!E.displacementMap,mt=!!E.emissiveMap,dt=!!E.metalnessMap,A=!!E.roughnessMap,M=E.anisotropy>0,G=E.clearcoat>0,j=E.dispersion>0,lt=E.iridescence>0,ot=E.sheen>0,Ft=E.transmission>0,Et=M&&!!E.anisotropyMap,Lt=G&&!!E.clearcoatMap,ne=G&&!!E.clearcoatNormalMap,pt=G&&!!E.clearcoatRoughnessMap,Pt=lt&&!!E.iridescenceMap,Xt=lt&&!!E.iridescenceThicknessMap,qt=ot&&!!E.sheenColorMap,Nt=ot&&!!E.sheenRoughnessMap,Qt=!!E.specularMap,te=!!E.specularColorMap,ve=!!E.specularIntensityMap,F=Ft&&!!E.transmissionMap,Ct=Ft&&!!E.thicknessMap,st=!!E.gradientMap,ht=!!E.alphaMap,Ut=E.alphaTest>0,It=!!E.alphaHash,Jt=!!E.extensions;let Ce=gi;E.toneMapped&&(X===null||X.isXRRenderTarget===!0)&&(Ce=i.toneMapping);const Ze={shaderID:_t,shaderType:E.type,shaderName:E.name,vertexShader:Yt,fragmentShader:et,defines:E.defines,customVertexShaderID:ft,customFragmentShaderID:Rt,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:f,batching:Tt,batchingColor:Tt&&N._colorsTexture!==null,instancing:xt,instancingColor:xt&&N.instanceColor!==null,instancingMorph:xt&&N.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:X===null?i.outputColorSpace:X.isXRRenderTarget===!0?X.texture.colorSpace:Ms,alphaToCoverage:!!E.alphaToCoverage,map:ct,matcap:W,envMap:it,envMapMode:it&&Q.mapping,envMapCubeUVHeight:k,aoMap:L,lightMap:yt,bumpMap:H,normalMap:K,displacementMap:d&&Z,emissiveMap:mt,normalMapObjectSpace:K&&E.normalMapType===Xd,normalMapTangentSpace:K&&E.normalMapType===Lc,metalnessMap:dt,roughnessMap:A,anisotropy:M,anisotropyMap:Et,clearcoat:G,clearcoatMap:Lt,clearcoatNormalMap:ne,clearcoatRoughnessMap:pt,dispersion:j,iridescence:lt,iridescenceMap:Pt,iridescenceThicknessMap:Xt,sheen:ot,sheenColorMap:qt,sheenRoughnessMap:Nt,specularMap:Qt,specularColorMap:te,specularIntensityMap:ve,transmission:Ft,transmissionMap:F,thicknessMap:Ct,gradientMap:st,opaque:E.transparent===!1&&E.blending===hs&&E.alphaToCoverage===!1,alphaMap:ht,alphaTest:Ut,alphaHash:It,combine:E.combine,mapUv:ct&&_(E.map.channel),aoMapUv:L&&_(E.aoMap.channel),lightMapUv:yt&&_(E.lightMap.channel),bumpMapUv:H&&_(E.bumpMap.channel),normalMapUv:K&&_(E.normalMap.channel),displacementMapUv:Z&&_(E.displacementMap.channel),emissiveMapUv:mt&&_(E.emissiveMap.channel),metalnessMapUv:dt&&_(E.metalnessMap.channel),roughnessMapUv:A&&_(E.roughnessMap.channel),anisotropyMapUv:Et&&_(E.anisotropyMap.channel),clearcoatMapUv:Lt&&_(E.clearcoatMap.channel),clearcoatNormalMapUv:ne&&_(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:pt&&_(E.clearcoatRoughnessMap.channel),iridescenceMapUv:Pt&&_(E.iridescenceMap.channel),iridescenceThicknessMapUv:Xt&&_(E.iridescenceThicknessMap.channel),sheenColorMapUv:qt&&_(E.sheenColorMap.channel),sheenRoughnessMapUv:Nt&&_(E.sheenRoughnessMap.channel),specularMapUv:Qt&&_(E.specularMap.channel),specularColorMapUv:te&&_(E.specularColorMap.channel),specularIntensityMapUv:ve&&_(E.specularIntensityMap.channel),transmissionMapUv:F&&_(E.transmissionMap.channel),thicknessMapUv:Ct&&_(E.thicknessMap.channel),alphaMapUv:ht&&_(E.alphaMap.channel),vertexTangents:!!tt.attributes.tangent&&(K||M),vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!tt.attributes.color&&tt.attributes.color.itemSize===4,pointsUvs:N.isPoints===!0&&!!tt.attributes.uv&&(ct||ht),fog:!!V,useFog:E.fog===!0,fogExp2:!!V&&V.isFogExp2,flatShading:E.flatShading===!0,sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:rt,skinning:N.isSkinnedMesh===!0,morphTargets:tt.morphAttributes.position!==void 0,morphNormals:tt.morphAttributes.normal!==void 0,morphColors:tt.morphAttributes.color!==void 0,morphTargetsCount:bt,morphTextureStride:Wt,numDirLights:x.directional.length,numPointLights:x.point.length,numSpotLights:x.spot.length,numSpotLightMaps:x.spotLightMap.length,numRectAreaLights:x.rectArea.length,numHemiLights:x.hemi.length,numDirLightShadows:x.directionalShadowMap.length,numPointLightShadows:x.pointShadowMap.length,numSpotLightShadows:x.spotShadowMap.length,numSpotLightShadowsWithMaps:x.numSpotLightShadowsWithMaps,numLightProbes:x.numLightProbes,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:E.dithering,shadowMapEnabled:i.shadowMap.enabled&&R.length>0,shadowMapType:i.shadowMap.type,toneMapping:Ce,decodeVideoTexture:ct&&E.map.isVideoTexture===!0&&oe.getTransfer(E.map.colorSpace)===ge,decodeVideoTextureEmissive:mt&&E.emissiveMap.isVideoTexture===!0&&oe.getTransfer(E.emissiveMap.colorSpace)===ge,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===le,flipSided:E.side===Xe,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionClipCullDistance:Jt&&E.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Jt&&E.extensions.multiDraw===!0||Tt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()};return Ze.vertexUv1s=l.has(1),Ze.vertexUv2s=l.has(2),Ze.vertexUv3s=l.has(3),l.clear(),Ze}function p(E){const x=[];if(E.shaderID?x.push(E.shaderID):(x.push(E.customVertexShaderID),x.push(E.customFragmentShaderID)),E.defines!==void 0)for(const R in E.defines)x.push(R),x.push(E.defines[R]);return E.isRawShaderMaterial===!1&&(S(x,E),y(x,E),x.push(i.outputColorSpace)),x.push(E.customProgramCacheKey),x.join()}function S(E,x){E.push(x.precision),E.push(x.outputColorSpace),E.push(x.envMapMode),E.push(x.envMapCubeUVHeight),E.push(x.mapUv),E.push(x.alphaMapUv),E.push(x.lightMapUv),E.push(x.aoMapUv),E.push(x.bumpMapUv),E.push(x.normalMapUv),E.push(x.displacementMapUv),E.push(x.emissiveMapUv),E.push(x.metalnessMapUv),E.push(x.roughnessMapUv),E.push(x.anisotropyMapUv),E.push(x.clearcoatMapUv),E.push(x.clearcoatNormalMapUv),E.push(x.clearcoatRoughnessMapUv),E.push(x.iridescenceMapUv),E.push(x.iridescenceThicknessMapUv),E.push(x.sheenColorMapUv),E.push(x.sheenRoughnessMapUv),E.push(x.specularMapUv),E.push(x.specularColorMapUv),E.push(x.specularIntensityMapUv),E.push(x.transmissionMapUv),E.push(x.thicknessMapUv),E.push(x.combine),E.push(x.fogExp2),E.push(x.sizeAttenuation),E.push(x.morphTargetsCount),E.push(x.morphAttributeCount),E.push(x.numDirLights),E.push(x.numPointLights),E.push(x.numSpotLights),E.push(x.numSpotLightMaps),E.push(x.numHemiLights),E.push(x.numRectAreaLights),E.push(x.numDirLightShadows),E.push(x.numPointLightShadows),E.push(x.numSpotLightShadows),E.push(x.numSpotLightShadowsWithMaps),E.push(x.numLightProbes),E.push(x.shadowMapType),E.push(x.toneMapping),E.push(x.numClippingPlanes),E.push(x.numClipIntersection),E.push(x.depthPacking)}function y(E,x){a.disableAll(),x.supportsVertexTextures&&a.enable(0),x.instancing&&a.enable(1),x.instancingColor&&a.enable(2),x.instancingMorph&&a.enable(3),x.matcap&&a.enable(4),x.envMap&&a.enable(5),x.normalMapObjectSpace&&a.enable(6),x.normalMapTangentSpace&&a.enable(7),x.clearcoat&&a.enable(8),x.iridescence&&a.enable(9),x.alphaTest&&a.enable(10),x.vertexColors&&a.enable(11),x.vertexAlphas&&a.enable(12),x.vertexUv1s&&a.enable(13),x.vertexUv2s&&a.enable(14),x.vertexUv3s&&a.enable(15),x.vertexTangents&&a.enable(16),x.anisotropy&&a.enable(17),x.alphaHash&&a.enable(18),x.batching&&a.enable(19),x.dispersion&&a.enable(20),x.batchingColor&&a.enable(21),E.push(a.mask),a.disableAll(),x.fog&&a.enable(0),x.useFog&&a.enable(1),x.flatShading&&a.enable(2),x.logarithmicDepthBuffer&&a.enable(3),x.reverseDepthBuffer&&a.enable(4),x.skinning&&a.enable(5),x.morphTargets&&a.enable(6),x.morphNormals&&a.enable(7),x.morphColors&&a.enable(8),x.premultipliedAlpha&&a.enable(9),x.shadowMapEnabled&&a.enable(10),x.doubleSided&&a.enable(11),x.flipSided&&a.enable(12),x.useDepthPacking&&a.enable(13),x.dithering&&a.enable(14),x.transmission&&a.enable(15),x.sheen&&a.enable(16),x.opaque&&a.enable(17),x.pointsUvs&&a.enable(18),x.decodeVideoTexture&&a.enable(19),x.decodeVideoTextureEmissive&&a.enable(20),x.alphaToCoverage&&a.enable(21),E.push(a.mask)}function v(E){const x=m[E.type];let R;if(x){const O=In[x];R=wf.clone(O.uniforms)}else R=E.uniforms;return R}function D(E,x){let R;for(let O=0,N=h.length;O<N;O++){const V=h[O];if(V.cacheKey===x){R=V,++R.usedTimes;break}}return R===void 0&&(R=new Ng(i,x,E,o),h.push(R)),R}function T(E){if(--E.usedTimes===0){const x=h.indexOf(E);h[x]=h[h.length-1],h.pop(),E.destroy()}}function C(E){c.remove(E)}function P(){c.dispose()}return{getParameters:g,getProgramCacheKey:p,getUniforms:v,acquireProgram:D,releaseProgram:T,releaseShaderCache:C,programs:h,dispose:P}}function kg(){let i=new WeakMap;function t(r){return i.has(r)}function e(r){let a=i.get(r);return a===void 0&&(a={},i.set(r,a)),a}function n(r){i.delete(r)}function s(r,a,c){i.get(r)[a]=c}function o(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:o}}function Hg(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function Jl(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Kl(){const i=[];let t=0;const e=[],n=[],s=[];function o(){t=0,e.length=0,n.length=0,s.length=0}function r(u,d,f,m,_,g){let p=i[t];return p===void 0?(p={id:u.id,object:u,geometry:d,material:f,groupOrder:m,renderOrder:u.renderOrder,z:_,group:g},i[t]=p):(p.id=u.id,p.object=u,p.geometry=d,p.material=f,p.groupOrder=m,p.renderOrder=u.renderOrder,p.z=_,p.group=g),t++,p}function a(u,d,f,m,_,g){const p=r(u,d,f,m,_,g);f.transmission>0?n.push(p):f.transparent===!0?s.push(p):e.push(p)}function c(u,d,f,m,_,g){const p=r(u,d,f,m,_,g);f.transmission>0?n.unshift(p):f.transparent===!0?s.unshift(p):e.unshift(p)}function l(u,d){e.length>1&&e.sort(u||Hg),n.length>1&&n.sort(d||Jl),s.length>1&&s.sort(d||Jl)}function h(){for(let u=t,d=i.length;u<d;u++){const f=i[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:e,transmissive:n,transparent:s,init:o,push:a,unshift:c,finish:h,sort:l}}function Gg(){let i=new WeakMap;function t(n,s){const o=i.get(n);let r;return o===void 0?(r=new Kl,i.set(n,[r])):s>=o.length?(r=new Kl,o.push(r)):r=o[s],r}function e(){i=new WeakMap}return{get:t,dispose:e}}function Vg(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new I,color:new St};break;case"SpotLight":e={position:new I,direction:new I,color:new St,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new I,color:new St,distance:0,decay:0};break;case"HemisphereLight":e={direction:new I,skyColor:new St,groundColor:new St};break;case"RectAreaLight":e={color:new St,position:new I,halfWidth:new I,halfHeight:new I};break}return i[t.id]=e,e}}}function Wg(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new gt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new gt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new gt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let Xg=0;function qg(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function Yg(i){const t=new Vg,e=Wg(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new I);const s=new I,o=new fe,r=new fe;function a(l){let h=0,u=0,d=0;for(let E=0;E<9;E++)n.probe[E].set(0,0,0);let f=0,m=0,_=0,g=0,p=0,S=0,y=0,v=0,D=0,T=0,C=0;l.sort(qg);for(let E=0,x=l.length;E<x;E++){const R=l[E],O=R.color,N=R.intensity,V=R.distance,tt=R.shadow&&R.shadow.map?R.shadow.map.texture:null;if(R.isAmbientLight)h+=O.r*N,u+=O.g*N,d+=O.b*N;else if(R.isLightProbe){for(let $=0;$<9;$++)n.probe[$].addScaledVector(R.sh.coefficients[$],N);C++}else if(R.isDirectionalLight){const $=t.get(R);if($.color.copy(R.color).multiplyScalar(R.intensity),R.castShadow){const Q=R.shadow,k=e.get(R);k.shadowIntensity=Q.intensity,k.shadowBias=Q.bias,k.shadowNormalBias=Q.normalBias,k.shadowRadius=Q.radius,k.shadowMapSize=Q.mapSize,n.directionalShadow[f]=k,n.directionalShadowMap[f]=tt,n.directionalShadowMatrix[f]=R.shadow.matrix,S++}n.directional[f]=$,f++}else if(R.isSpotLight){const $=t.get(R);$.position.setFromMatrixPosition(R.matrixWorld),$.color.copy(O).multiplyScalar(N),$.distance=V,$.coneCos=Math.cos(R.angle),$.penumbraCos=Math.cos(R.angle*(1-R.penumbra)),$.decay=R.decay,n.spot[_]=$;const Q=R.shadow;if(R.map&&(n.spotLightMap[D]=R.map,D++,Q.updateMatrices(R),R.castShadow&&T++),n.spotLightMatrix[_]=Q.matrix,R.castShadow){const k=e.get(R);k.shadowIntensity=Q.intensity,k.shadowBias=Q.bias,k.shadowNormalBias=Q.normalBias,k.shadowRadius=Q.radius,k.shadowMapSize=Q.mapSize,n.spotShadow[_]=k,n.spotShadowMap[_]=tt,v++}_++}else if(R.isRectAreaLight){const $=t.get(R);$.color.copy(O).multiplyScalar(N),$.halfWidth.set(R.width*.5,0,0),$.halfHeight.set(0,R.height*.5,0),n.rectArea[g]=$,g++}else if(R.isPointLight){const $=t.get(R);if($.color.copy(R.color).multiplyScalar(R.intensity),$.distance=R.distance,$.decay=R.decay,R.castShadow){const Q=R.shadow,k=e.get(R);k.shadowIntensity=Q.intensity,k.shadowBias=Q.bias,k.shadowNormalBias=Q.normalBias,k.shadowRadius=Q.radius,k.shadowMapSize=Q.mapSize,k.shadowCameraNear=Q.camera.near,k.shadowCameraFar=Q.camera.far,n.pointShadow[m]=k,n.pointShadowMap[m]=tt,n.pointShadowMatrix[m]=R.shadow.matrix,y++}n.point[m]=$,m++}else if(R.isHemisphereLight){const $=t.get(R);$.skyColor.copy(R.color).multiplyScalar(N),$.groundColor.copy(R.groundColor).multiplyScalar(N),n.hemi[p]=$,p++}}g>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=At.LTC_FLOAT_1,n.rectAreaLTC2=At.LTC_FLOAT_2):(n.rectAreaLTC1=At.LTC_HALF_1,n.rectAreaLTC2=At.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;const P=n.hash;(P.directionalLength!==f||P.pointLength!==m||P.spotLength!==_||P.rectAreaLength!==g||P.hemiLength!==p||P.numDirectionalShadows!==S||P.numPointShadows!==y||P.numSpotShadows!==v||P.numSpotMaps!==D||P.numLightProbes!==C)&&(n.directional.length=f,n.spot.length=_,n.rectArea.length=g,n.point.length=m,n.hemi.length=p,n.directionalShadow.length=S,n.directionalShadowMap.length=S,n.pointShadow.length=y,n.pointShadowMap.length=y,n.spotShadow.length=v,n.spotShadowMap.length=v,n.directionalShadowMatrix.length=S,n.pointShadowMatrix.length=y,n.spotLightMatrix.length=v+D-T,n.spotLightMap.length=D,n.numSpotLightShadowsWithMaps=T,n.numLightProbes=C,P.directionalLength=f,P.pointLength=m,P.spotLength=_,P.rectAreaLength=g,P.hemiLength=p,P.numDirectionalShadows=S,P.numPointShadows=y,P.numSpotShadows=v,P.numSpotMaps=D,P.numLightProbes=C,n.version=Xg++)}function c(l,h){let u=0,d=0,f=0,m=0,_=0;const g=h.matrixWorldInverse;for(let p=0,S=l.length;p<S;p++){const y=l[p];if(y.isDirectionalLight){const v=n.directional[u];v.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(g),u++}else if(y.isSpotLight){const v=n.spot[f];v.position.setFromMatrixPosition(y.matrixWorld),v.position.applyMatrix4(g),v.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(g),f++}else if(y.isRectAreaLight){const v=n.rectArea[m];v.position.setFromMatrixPosition(y.matrixWorld),v.position.applyMatrix4(g),r.identity(),o.copy(y.matrixWorld),o.premultiply(g),r.extractRotation(o),v.halfWidth.set(y.width*.5,0,0),v.halfHeight.set(0,y.height*.5,0),v.halfWidth.applyMatrix4(r),v.halfHeight.applyMatrix4(r),m++}else if(y.isPointLight){const v=n.point[d];v.position.setFromMatrixPosition(y.matrixWorld),v.position.applyMatrix4(g),d++}else if(y.isHemisphereLight){const v=n.hemi[_];v.direction.setFromMatrixPosition(y.matrixWorld),v.direction.transformDirection(g),_++}}}return{setup:a,setupView:c,state:n}}function jl(i){const t=new Yg(i),e=[],n=[];function s(h){l.camera=h,e.length=0,n.length=0}function o(h){e.push(h)}function r(h){n.push(h)}function a(){t.setup(e)}function c(h){t.setupView(e,h)}const l={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:l,setupLights:a,setupLightsView:c,pushLight:o,pushShadow:r}}function $g(i){let t=new WeakMap;function e(s,o=0){const r=t.get(s);let a;return r===void 0?(a=new jl(i),t.set(s,[a])):o>=r.length?(a=new jl(i),r.push(a)):a=r[o],a}function n(){t=new WeakMap}return{get:e,dispose:n}}class Zg extends ki{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=Vd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Jg extends ki{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const Kg=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,jg=`uniform sampler2D shadow_pass;
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
}`;function Qg(i,t,e){let n=new Dc;const s=new gt,o=new gt,r=new _e,a=new Zg({depthPacking:Wd}),c=new Jg,l={},h=e.maxTextureSize,u={[_i]:Xe,[Xe]:_i,[le]:le},d=new vi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new gt},radius:{value:4}},vertexShader:Kg,fragmentShader:jg}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const m=new Le;m.setAttribute("position",new dn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new w(m,d),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=kh;let p=this.type;this.render=function(T,C,P){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||T.length===0)return;const E=i.getRenderTarget(),x=i.getActiveCubeFace(),R=i.getActiveMipmapLevel(),O=i.state;O.setBlending(mi),O.buffers.color.setClear(1,1,1,1),O.buffers.depth.setTest(!0),O.setScissorTest(!1);const N=p!==Yn&&this.type===Yn,V=p===Yn&&this.type!==Yn;for(let tt=0,$=T.length;tt<$;tt++){const Q=T[tt],k=Q.shadow;if(k===void 0){console.warn("THREE.WebGLShadowMap:",Q,"has no shadow.");continue}if(k.autoUpdate===!1&&k.needsUpdate===!1)continue;s.copy(k.mapSize);const _t=k.getFrameExtents();if(s.multiply(_t),o.copy(k.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(o.x=Math.floor(h/_t.x),s.x=o.x*_t.x,k.mapSize.x=o.x),s.y>h&&(o.y=Math.floor(h/_t.y),s.y=o.y*_t.y,k.mapSize.y=o.y)),k.map===null||N===!0||V===!0){const bt=this.type!==Yn?{minFilter:un,magFilter:un}:{};k.map!==null&&k.map.dispose(),k.map=new zi(s.x,s.y,bt),k.map.texture.name=Q.name+".shadowMap",k.camera.updateProjectionMatrix()}i.setRenderTarget(k.map),i.clear();const Mt=k.getViewportCount();for(let bt=0;bt<Mt;bt++){const Wt=k.getViewport(bt);r.set(o.x*Wt.x,o.y*Wt.y,o.x*Wt.z,o.y*Wt.w),O.viewport(r),k.updateMatrices(Q,bt),n=k.getFrustum(),v(C,P,k.camera,Q,this.type)}k.isPointLightShadow!==!0&&this.type===Yn&&S(k,P),k.needsUpdate=!1}p=this.type,g.needsUpdate=!1,i.setRenderTarget(E,x,R)};function S(T,C){const P=t.update(_);d.defines.VSM_SAMPLES!==T.blurSamples&&(d.defines.VSM_SAMPLES=T.blurSamples,f.defines.VSM_SAMPLES=T.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new zi(s.x,s.y)),d.uniforms.shadow_pass.value=T.map.texture,d.uniforms.resolution.value=T.mapSize,d.uniforms.radius.value=T.radius,i.setRenderTarget(T.mapPass),i.clear(),i.renderBufferDirect(C,null,P,d,_,null),f.uniforms.shadow_pass.value=T.mapPass.texture,f.uniforms.resolution.value=T.mapSize,f.uniforms.radius.value=T.radius,i.setRenderTarget(T.map),i.clear(),i.renderBufferDirect(C,null,P,f,_,null)}function y(T,C,P,E){let x=null;const R=P.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(R!==void 0)x=R;else if(x=P.isPointLight===!0?c:a,i.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0){const O=x.uuid,N=C.uuid;let V=l[O];V===void 0&&(V={},l[O]=V);let tt=V[N];tt===void 0&&(tt=x.clone(),V[N]=tt,C.addEventListener("dispose",D)),x=tt}if(x.visible=C.visible,x.wireframe=C.wireframe,E===Yn?x.side=C.shadowSide!==null?C.shadowSide:C.side:x.side=C.shadowSide!==null?C.shadowSide:u[C.side],x.alphaMap=C.alphaMap,x.alphaTest=C.alphaTest,x.map=C.map,x.clipShadows=C.clipShadows,x.clippingPlanes=C.clippingPlanes,x.clipIntersection=C.clipIntersection,x.displacementMap=C.displacementMap,x.displacementScale=C.displacementScale,x.displacementBias=C.displacementBias,x.wireframeLinewidth=C.wireframeLinewidth,x.linewidth=C.linewidth,P.isPointLight===!0&&x.isMeshDistanceMaterial===!0){const O=i.properties.get(x);O.light=P}return x}function v(T,C,P,E,x){if(T.visible===!1)return;if(T.layers.test(C.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&x===Yn)&&(!T.frustumCulled||n.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,T.matrixWorld);const N=t.update(T),V=T.material;if(Array.isArray(V)){const tt=N.groups;for(let $=0,Q=tt.length;$<Q;$++){const k=tt[$],_t=V[k.materialIndex];if(_t&&_t.visible){const Mt=y(T,_t,E,x);T.onBeforeShadow(i,T,C,P,N,Mt,k),i.renderBufferDirect(P,null,N,Mt,T,k),T.onAfterShadow(i,T,C,P,N,Mt,k)}}}else if(V.visible){const tt=y(T,V,E,x);T.onBeforeShadow(i,T,C,P,N,tt,null),i.renderBufferDirect(P,null,N,tt,T,null),T.onAfterShadow(i,T,C,P,N,tt,null)}}const O=T.children;for(let N=0,V=O.length;N<V;N++)v(O[N],C,P,E,x)}function D(T){T.target.removeEventListener("dispose",D);for(const P in l){const E=l[P],x=T.target.uuid;x in E&&(E[x].dispose(),delete E[x])}}}const t1={[Ma]:wa,[Sa]:ba,[Ea]:Aa,[ps]:Ta,[wa]:Ma,[ba]:Sa,[Aa]:Ea,[Ta]:ps};function e1(i,t){function e(){let F=!1;const Ct=new _e;let st=null;const ht=new _e(0,0,0,0);return{setMask:function(Ut){st!==Ut&&!F&&(i.colorMask(Ut,Ut,Ut,Ut),st=Ut)},setLocked:function(Ut){F=Ut},setClear:function(Ut,It,Jt,Ce,Ze){Ze===!0&&(Ut*=Ce,It*=Ce,Jt*=Ce),Ct.set(Ut,It,Jt,Ce),ht.equals(Ct)===!1&&(i.clearColor(Ut,It,Jt,Ce),ht.copy(Ct))},reset:function(){F=!1,st=null,ht.set(-1,0,0,0)}}}function n(){let F=!1,Ct=!1,st=null,ht=null,Ut=null;return{setReversed:function(It){if(Ct!==It){const Jt=t.get("EXT_clip_control");Ct?Jt.clipControlEXT(Jt.LOWER_LEFT_EXT,Jt.ZERO_TO_ONE_EXT):Jt.clipControlEXT(Jt.LOWER_LEFT_EXT,Jt.NEGATIVE_ONE_TO_ONE_EXT);const Ce=Ut;Ut=null,this.setClear(Ce)}Ct=It},getReversed:function(){return Ct},setTest:function(It){It?X(i.DEPTH_TEST):rt(i.DEPTH_TEST)},setMask:function(It){st!==It&&!F&&(i.depthMask(It),st=It)},setFunc:function(It){if(Ct&&(It=t1[It]),ht!==It){switch(It){case Ma:i.depthFunc(i.NEVER);break;case wa:i.depthFunc(i.ALWAYS);break;case Sa:i.depthFunc(i.LESS);break;case ps:i.depthFunc(i.LEQUAL);break;case Ea:i.depthFunc(i.EQUAL);break;case Ta:i.depthFunc(i.GEQUAL);break;case ba:i.depthFunc(i.GREATER);break;case Aa:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}ht=It}},setLocked:function(It){F=It},setClear:function(It){Ut!==It&&(Ct&&(It=1-It),i.clearDepth(It),Ut=It)},reset:function(){F=!1,st=null,ht=null,Ut=null,Ct=!1}}}function s(){let F=!1,Ct=null,st=null,ht=null,Ut=null,It=null,Jt=null,Ce=null,Ze=null;return{setTest:function(pe){F||(pe?X(i.STENCIL_TEST):rt(i.STENCIL_TEST))},setMask:function(pe){Ct!==pe&&!F&&(i.stencilMask(pe),Ct=pe)},setFunc:function(pe,gn,kn){(st!==pe||ht!==gn||Ut!==kn)&&(i.stencilFunc(pe,gn,kn),st=pe,ht=gn,Ut=kn)},setOp:function(pe,gn,kn){(It!==pe||Jt!==gn||Ce!==kn)&&(i.stencilOp(pe,gn,kn),It=pe,Jt=gn,Ce=kn)},setLocked:function(pe){F=pe},setClear:function(pe){Ze!==pe&&(i.clearStencil(pe),Ze=pe)},reset:function(){F=!1,Ct=null,st=null,ht=null,Ut=null,It=null,Jt=null,Ce=null,Ze=null}}}const o=new e,r=new n,a=new s,c=new WeakMap,l=new WeakMap;let h={},u={},d=new WeakMap,f=[],m=null,_=!1,g=null,p=null,S=null,y=null,v=null,D=null,T=null,C=new St(0,0,0),P=0,E=!1,x=null,R=null,O=null,N=null,V=null;const tt=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let $=!1,Q=0;const k=i.getParameter(i.VERSION);k.indexOf("WebGL")!==-1?(Q=parseFloat(/^WebGL (\d)/.exec(k)[1]),$=Q>=1):k.indexOf("OpenGL ES")!==-1&&(Q=parseFloat(/^OpenGL ES (\d)/.exec(k)[1]),$=Q>=2);let _t=null,Mt={};const bt=i.getParameter(i.SCISSOR_BOX),Wt=i.getParameter(i.VIEWPORT),Yt=new _e().fromArray(bt),et=new _e().fromArray(Wt);function ft(F,Ct,st,ht){const Ut=new Uint8Array(4),It=i.createTexture();i.bindTexture(F,It),i.texParameteri(F,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(F,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Jt=0;Jt<st;Jt++)F===i.TEXTURE_3D||F===i.TEXTURE_2D_ARRAY?i.texImage3D(Ct,0,i.RGBA,1,1,ht,0,i.RGBA,i.UNSIGNED_BYTE,Ut):i.texImage2D(Ct+Jt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Ut);return It}const Rt={};Rt[i.TEXTURE_2D]=ft(i.TEXTURE_2D,i.TEXTURE_2D,1),Rt[i.TEXTURE_CUBE_MAP]=ft(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),Rt[i.TEXTURE_2D_ARRAY]=ft(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Rt[i.TEXTURE_3D]=ft(i.TEXTURE_3D,i.TEXTURE_3D,1,1),o.setClear(0,0,0,1),r.setClear(1),a.setClear(0),X(i.DEPTH_TEST),r.setFunc(ps),H(!1),K(il),X(i.CULL_FACE),L(mi);function X(F){h[F]!==!0&&(i.enable(F),h[F]=!0)}function rt(F){h[F]!==!1&&(i.disable(F),h[F]=!1)}function xt(F,Ct){return u[F]!==Ct?(i.bindFramebuffer(F,Ct),u[F]=Ct,F===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=Ct),F===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=Ct),!0):!1}function Tt(F,Ct){let st=f,ht=!1;if(F){st=d.get(Ct),st===void 0&&(st=[],d.set(Ct,st));const Ut=F.textures;if(st.length!==Ut.length||st[0]!==i.COLOR_ATTACHMENT0){for(let It=0,Jt=Ut.length;It<Jt;It++)st[It]=i.COLOR_ATTACHMENT0+It;st.length=Ut.length,ht=!0}}else st[0]!==i.BACK&&(st[0]=i.BACK,ht=!0);ht&&i.drawBuffers(st)}function ct(F){return m!==F?(i.useProgram(F),m=F,!0):!1}const W={[Ri]:i.FUNC_ADD,[_d]:i.FUNC_SUBTRACT,[vd]:i.FUNC_REVERSE_SUBTRACT};W[xd]=i.MIN,W[yd]=i.MAX;const it={[Md]:i.ZERO,[wd]:i.ONE,[Sd]:i.SRC_COLOR,[xa]:i.SRC_ALPHA,[Cd]:i.SRC_ALPHA_SATURATE,[Ad]:i.DST_COLOR,[Td]:i.DST_ALPHA,[Ed]:i.ONE_MINUS_SRC_COLOR,[ya]:i.ONE_MINUS_SRC_ALPHA,[Rd]:i.ONE_MINUS_DST_COLOR,[bd]:i.ONE_MINUS_DST_ALPHA,[Ld]:i.CONSTANT_COLOR,[Pd]:i.ONE_MINUS_CONSTANT_COLOR,[Id]:i.CONSTANT_ALPHA,[Dd]:i.ONE_MINUS_CONSTANT_ALPHA};function L(F,Ct,st,ht,Ut,It,Jt,Ce,Ze,pe){if(F===mi){_===!0&&(rt(i.BLEND),_=!1);return}if(_===!1&&(X(i.BLEND),_=!0),F!==gd){if(F!==g||pe!==E){if((p!==Ri||v!==Ri)&&(i.blendEquation(i.FUNC_ADD),p=Ri,v=Ri),pe)switch(F){case hs:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case sl:i.blendFunc(i.ONE,i.ONE);break;case ol:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case rl:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}else switch(F){case hs:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case sl:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case ol:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case rl:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}S=null,y=null,D=null,T=null,C.set(0,0,0),P=0,g=F,E=pe}return}Ut=Ut||Ct,It=It||st,Jt=Jt||ht,(Ct!==p||Ut!==v)&&(i.blendEquationSeparate(W[Ct],W[Ut]),p=Ct,v=Ut),(st!==S||ht!==y||It!==D||Jt!==T)&&(i.blendFuncSeparate(it[st],it[ht],it[It],it[Jt]),S=st,y=ht,D=It,T=Jt),(Ce.equals(C)===!1||Ze!==P)&&(i.blendColor(Ce.r,Ce.g,Ce.b,Ze),C.copy(Ce),P=Ze),g=F,E=!1}function yt(F,Ct){F.side===le?rt(i.CULL_FACE):X(i.CULL_FACE);let st=F.side===Xe;Ct&&(st=!st),H(st),F.blending===hs&&F.transparent===!1?L(mi):L(F.blending,F.blendEquation,F.blendSrc,F.blendDst,F.blendEquationAlpha,F.blendSrcAlpha,F.blendDstAlpha,F.blendColor,F.blendAlpha,F.premultipliedAlpha),r.setFunc(F.depthFunc),r.setTest(F.depthTest),r.setMask(F.depthWrite),o.setMask(F.colorWrite);const ht=F.stencilWrite;a.setTest(ht),ht&&(a.setMask(F.stencilWriteMask),a.setFunc(F.stencilFunc,F.stencilRef,F.stencilFuncMask),a.setOp(F.stencilFail,F.stencilZFail,F.stencilZPass)),mt(F.polygonOffset,F.polygonOffsetFactor,F.polygonOffsetUnits),F.alphaToCoverage===!0?X(i.SAMPLE_ALPHA_TO_COVERAGE):rt(i.SAMPLE_ALPHA_TO_COVERAGE)}function H(F){x!==F&&(F?i.frontFace(i.CW):i.frontFace(i.CCW),x=F)}function K(F){F!==pd?(X(i.CULL_FACE),F!==R&&(F===il?i.cullFace(i.BACK):F===md?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):rt(i.CULL_FACE),R=F}function Z(F){F!==O&&($&&i.lineWidth(F),O=F)}function mt(F,Ct,st){F?(X(i.POLYGON_OFFSET_FILL),(N!==Ct||V!==st)&&(i.polygonOffset(Ct,st),N=Ct,V=st)):rt(i.POLYGON_OFFSET_FILL)}function dt(F){F?X(i.SCISSOR_TEST):rt(i.SCISSOR_TEST)}function A(F){F===void 0&&(F=i.TEXTURE0+tt-1),_t!==F&&(i.activeTexture(F),_t=F)}function M(F,Ct,st){st===void 0&&(_t===null?st=i.TEXTURE0+tt-1:st=_t);let ht=Mt[st];ht===void 0&&(ht={type:void 0,texture:void 0},Mt[st]=ht),(ht.type!==F||ht.texture!==Ct)&&(_t!==st&&(i.activeTexture(st),_t=st),i.bindTexture(F,Ct||Rt[F]),ht.type=F,ht.texture=Ct)}function G(){const F=Mt[_t];F!==void 0&&F.type!==void 0&&(i.bindTexture(F.type,null),F.type=void 0,F.texture=void 0)}function j(){try{i.compressedTexImage2D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function lt(){try{i.compressedTexImage3D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function ot(){try{i.texSubImage2D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Ft(){try{i.texSubImage3D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Et(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Lt(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function ne(){try{i.texStorage2D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function pt(){try{i.texStorage3D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Pt(){try{i.texImage2D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Xt(){try{i.texImage3D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function qt(F){Yt.equals(F)===!1&&(i.scissor(F.x,F.y,F.z,F.w),Yt.copy(F))}function Nt(F){et.equals(F)===!1&&(i.viewport(F.x,F.y,F.z,F.w),et.copy(F))}function Qt(F,Ct){let st=l.get(Ct);st===void 0&&(st=new WeakMap,l.set(Ct,st));let ht=st.get(F);ht===void 0&&(ht=i.getUniformBlockIndex(Ct,F.name),st.set(F,ht))}function te(F,Ct){const ht=l.get(Ct).get(F);c.get(Ct)!==ht&&(i.uniformBlockBinding(Ct,ht,F.__bindingPointIndex),c.set(Ct,ht))}function ve(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),r.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},_t=null,Mt={},u={},d=new WeakMap,f=[],m=null,_=!1,g=null,p=null,S=null,y=null,v=null,D=null,T=null,C=new St(0,0,0),P=0,E=!1,x=null,R=null,O=null,N=null,V=null,Yt.set(0,0,i.canvas.width,i.canvas.height),et.set(0,0,i.canvas.width,i.canvas.height),o.reset(),r.reset(),a.reset()}return{buffers:{color:o,depth:r,stencil:a},enable:X,disable:rt,bindFramebuffer:xt,drawBuffers:Tt,useProgram:ct,setBlending:L,setMaterial:yt,setFlipSided:H,setCullFace:K,setLineWidth:Z,setPolygonOffset:mt,setScissorTest:dt,activeTexture:A,bindTexture:M,unbindTexture:G,compressedTexImage2D:j,compressedTexImage3D:lt,texImage2D:Pt,texImage3D:Xt,updateUBOMapping:Qt,uniformBlockBinding:te,texStorage2D:ne,texStorage3D:pt,texSubImage2D:ot,texSubImage3D:Ft,compressedTexSubImage2D:Et,compressedTexSubImage3D:Lt,scissor:qt,viewport:Nt,reset:ve}}function Ql(i,t,e,n){const s=n1(n);switch(e){case qh:return i*t;case $h:return i*t;case Zh:return i*t*2;case bc:return i*t/s.components*s.byteLength;case Ac:return i*t/s.components*s.byteLength;case Jh:return i*t*2/s.components*s.byteLength;case Rc:return i*t*2/s.components*s.byteLength;case Yh:return i*t*3/s.components*s.byteLength;case En:return i*t*4/s.components*s.byteLength;case Cc:return i*t*4/s.components*s.byteLength;case Go:case Vo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Wo:case Xo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Ia:case Ua:return Math.max(i,16)*Math.max(t,8)/4;case Pa:case Da:return Math.max(i,8)*Math.max(t,8)/2;case Na:case Fa:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Oa:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case za:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Ba:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case ka:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case Ha:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case Ga:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case Va:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case Wa:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case Xa:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case qa:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case Ya:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case $a:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case Za:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case Ja:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case Ka:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case qo:case ja:case Qa:return Math.ceil(i/4)*Math.ceil(t/4)*16;case Kh:case tc:return Math.ceil(i/4)*Math.ceil(t/4)*8;case ec:case nc:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function n1(i){switch(i){case Jn:case Vh:return{byteLength:1,components:1};case Ys:case Wh:case Qs:return{byteLength:2,components:1};case Ec:case Tc:return{byteLength:2,components:4};case Oi:case Sc:case Fn:return{byteLength:4,components:1};case Xh:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function i1(i,t,e,n,s,o,r){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new gt,h=new WeakMap;let u;const d=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(A,M){return f?new OffscreenCanvas(A,M):Jo("canvas")}function _(A,M,G){let j=1;const lt=dt(A);if((lt.width>G||lt.height>G)&&(j=G/Math.max(lt.width,lt.height)),j<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){const ot=Math.floor(j*lt.width),Ft=Math.floor(j*lt.height);u===void 0&&(u=m(ot,Ft));const Et=M?m(ot,Ft):u;return Et.width=ot,Et.height=Ft,Et.getContext("2d").drawImage(A,0,0,ot,Ft),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+lt.width+"x"+lt.height+") to ("+ot+"x"+Ft+")."),Et}else return"data"in A&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+lt.width+"x"+lt.height+")."),A;return A}function g(A){return A.generateMipmaps}function p(A){i.generateMipmap(A)}function S(A){return A.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:A.isWebGL3DRenderTarget?i.TEXTURE_3D:A.isWebGLArrayRenderTarget||A.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function y(A,M,G,j,lt=!1){if(A!==null){if(i[A]!==void 0)return i[A];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let ot=M;if(M===i.RED&&(G===i.FLOAT&&(ot=i.R32F),G===i.HALF_FLOAT&&(ot=i.R16F),G===i.UNSIGNED_BYTE&&(ot=i.R8)),M===i.RED_INTEGER&&(G===i.UNSIGNED_BYTE&&(ot=i.R8UI),G===i.UNSIGNED_SHORT&&(ot=i.R16UI),G===i.UNSIGNED_INT&&(ot=i.R32UI),G===i.BYTE&&(ot=i.R8I),G===i.SHORT&&(ot=i.R16I),G===i.INT&&(ot=i.R32I)),M===i.RG&&(G===i.FLOAT&&(ot=i.RG32F),G===i.HALF_FLOAT&&(ot=i.RG16F),G===i.UNSIGNED_BYTE&&(ot=i.RG8)),M===i.RG_INTEGER&&(G===i.UNSIGNED_BYTE&&(ot=i.RG8UI),G===i.UNSIGNED_SHORT&&(ot=i.RG16UI),G===i.UNSIGNED_INT&&(ot=i.RG32UI),G===i.BYTE&&(ot=i.RG8I),G===i.SHORT&&(ot=i.RG16I),G===i.INT&&(ot=i.RG32I)),M===i.RGB_INTEGER&&(G===i.UNSIGNED_BYTE&&(ot=i.RGB8UI),G===i.UNSIGNED_SHORT&&(ot=i.RGB16UI),G===i.UNSIGNED_INT&&(ot=i.RGB32UI),G===i.BYTE&&(ot=i.RGB8I),G===i.SHORT&&(ot=i.RGB16I),G===i.INT&&(ot=i.RGB32I)),M===i.RGBA_INTEGER&&(G===i.UNSIGNED_BYTE&&(ot=i.RGBA8UI),G===i.UNSIGNED_SHORT&&(ot=i.RGBA16UI),G===i.UNSIGNED_INT&&(ot=i.RGBA32UI),G===i.BYTE&&(ot=i.RGBA8I),G===i.SHORT&&(ot=i.RGBA16I),G===i.INT&&(ot=i.RGBA32I)),M===i.RGB&&G===i.UNSIGNED_INT_5_9_9_9_REV&&(ot=i.RGB9_E5),M===i.RGBA){const Ft=lt?dr:oe.getTransfer(j);G===i.FLOAT&&(ot=i.RGBA32F),G===i.HALF_FLOAT&&(ot=i.RGBA16F),G===i.UNSIGNED_BYTE&&(ot=Ft===ge?i.SRGB8_ALPHA8:i.RGBA8),G===i.UNSIGNED_SHORT_4_4_4_4&&(ot=i.RGBA4),G===i.UNSIGNED_SHORT_5_5_5_1&&(ot=i.RGB5_A1)}return(ot===i.R16F||ot===i.R32F||ot===i.RG16F||ot===i.RG32F||ot===i.RGBA16F||ot===i.RGBA32F)&&t.get("EXT_color_buffer_float"),ot}function v(A,M){let G;return A?M===null||M===Oi||M===vs?G=i.DEPTH24_STENCIL8:M===Fn?G=i.DEPTH32F_STENCIL8:M===Ys&&(G=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===Oi||M===vs?G=i.DEPTH_COMPONENT24:M===Fn?G=i.DEPTH_COMPONENT32F:M===Ys&&(G=i.DEPTH_COMPONENT16),G}function D(A,M){return g(A)===!0||A.isFramebufferTexture&&A.minFilter!==un&&A.minFilter!==Nn?Math.log2(Math.max(M.width,M.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?M.mipmaps.length:1}function T(A){const M=A.target;M.removeEventListener("dispose",T),P(M),M.isVideoTexture&&h.delete(M)}function C(A){const M=A.target;M.removeEventListener("dispose",C),x(M)}function P(A){const M=n.get(A);if(M.__webglInit===void 0)return;const G=A.source,j=d.get(G);if(j){const lt=j[M.__cacheKey];lt.usedTimes--,lt.usedTimes===0&&E(A),Object.keys(j).length===0&&d.delete(G)}n.remove(A)}function E(A){const M=n.get(A);i.deleteTexture(M.__webglTexture);const G=A.source,j=d.get(G);delete j[M.__cacheKey],r.memory.textures--}function x(A){const M=n.get(A);if(A.depthTexture&&(A.depthTexture.dispose(),n.remove(A.depthTexture)),A.isWebGLCubeRenderTarget)for(let j=0;j<6;j++){if(Array.isArray(M.__webglFramebuffer[j]))for(let lt=0;lt<M.__webglFramebuffer[j].length;lt++)i.deleteFramebuffer(M.__webglFramebuffer[j][lt]);else i.deleteFramebuffer(M.__webglFramebuffer[j]);M.__webglDepthbuffer&&i.deleteRenderbuffer(M.__webglDepthbuffer[j])}else{if(Array.isArray(M.__webglFramebuffer))for(let j=0;j<M.__webglFramebuffer.length;j++)i.deleteFramebuffer(M.__webglFramebuffer[j]);else i.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&i.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&i.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let j=0;j<M.__webglColorRenderbuffer.length;j++)M.__webglColorRenderbuffer[j]&&i.deleteRenderbuffer(M.__webglColorRenderbuffer[j]);M.__webglDepthRenderbuffer&&i.deleteRenderbuffer(M.__webglDepthRenderbuffer)}const G=A.textures;for(let j=0,lt=G.length;j<lt;j++){const ot=n.get(G[j]);ot.__webglTexture&&(i.deleteTexture(ot.__webglTexture),r.memory.textures--),n.remove(G[j])}n.remove(A)}let R=0;function O(){R=0}function N(){const A=R;return A>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+s.maxTextures),R+=1,A}function V(A){const M=[];return M.push(A.wrapS),M.push(A.wrapT),M.push(A.wrapR||0),M.push(A.magFilter),M.push(A.minFilter),M.push(A.anisotropy),M.push(A.internalFormat),M.push(A.format),M.push(A.type),M.push(A.generateMipmaps),M.push(A.premultiplyAlpha),M.push(A.flipY),M.push(A.unpackAlignment),M.push(A.colorSpace),M.join()}function tt(A,M){const G=n.get(A);if(A.isVideoTexture&&Z(A),A.isRenderTargetTexture===!1&&A.version>0&&G.__version!==A.version){const j=A.image;if(j===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(j.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{et(G,A,M);return}}e.bindTexture(i.TEXTURE_2D,G.__webglTexture,i.TEXTURE0+M)}function $(A,M){const G=n.get(A);if(A.version>0&&G.__version!==A.version){et(G,A,M);return}e.bindTexture(i.TEXTURE_2D_ARRAY,G.__webglTexture,i.TEXTURE0+M)}function Q(A,M){const G=n.get(A);if(A.version>0&&G.__version!==A.version){et(G,A,M);return}e.bindTexture(i.TEXTURE_3D,G.__webglTexture,i.TEXTURE0+M)}function k(A,M){const G=n.get(A);if(A.version>0&&G.__version!==A.version){ft(G,A,M);return}e.bindTexture(i.TEXTURE_CUBE_MAP,G.__webglTexture,i.TEXTURE0+M)}const _t={[_s]:i.REPEAT,[Ii]:i.CLAMP_TO_EDGE,[La]:i.MIRRORED_REPEAT},Mt={[un]:i.NEAREST,[Gd]:i.NEAREST_MIPMAP_NEAREST,[co]:i.NEAREST_MIPMAP_LINEAR,[Nn]:i.LINEAR,[Sr]:i.LINEAR_MIPMAP_NEAREST,[Di]:i.LINEAR_MIPMAP_LINEAR},bt={[qd]:i.NEVER,[jd]:i.ALWAYS,[Yd]:i.LESS,[jh]:i.LEQUAL,[$d]:i.EQUAL,[Kd]:i.GEQUAL,[Zd]:i.GREATER,[Jd]:i.NOTEQUAL};function Wt(A,M){if(M.type===Fn&&t.has("OES_texture_float_linear")===!1&&(M.magFilter===Nn||M.magFilter===Sr||M.magFilter===co||M.magFilter===Di||M.minFilter===Nn||M.minFilter===Sr||M.minFilter===co||M.minFilter===Di)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(A,i.TEXTURE_WRAP_S,_t[M.wrapS]),i.texParameteri(A,i.TEXTURE_WRAP_T,_t[M.wrapT]),(A===i.TEXTURE_3D||A===i.TEXTURE_2D_ARRAY)&&i.texParameteri(A,i.TEXTURE_WRAP_R,_t[M.wrapR]),i.texParameteri(A,i.TEXTURE_MAG_FILTER,Mt[M.magFilter]),i.texParameteri(A,i.TEXTURE_MIN_FILTER,Mt[M.minFilter]),M.compareFunction&&(i.texParameteri(A,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(A,i.TEXTURE_COMPARE_FUNC,bt[M.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===un||M.minFilter!==co&&M.minFilter!==Di||M.type===Fn&&t.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||n.get(M).__currentAnisotropy){const G=t.get("EXT_texture_filter_anisotropic");i.texParameterf(A,G.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,s.getMaxAnisotropy())),n.get(M).__currentAnisotropy=M.anisotropy}}}function Yt(A,M){let G=!1;A.__webglInit===void 0&&(A.__webglInit=!0,M.addEventListener("dispose",T));const j=M.source;let lt=d.get(j);lt===void 0&&(lt={},d.set(j,lt));const ot=V(M);if(ot!==A.__cacheKey){lt[ot]===void 0&&(lt[ot]={texture:i.createTexture(),usedTimes:0},r.memory.textures++,G=!0),lt[ot].usedTimes++;const Ft=lt[A.__cacheKey];Ft!==void 0&&(lt[A.__cacheKey].usedTimes--,Ft.usedTimes===0&&E(M)),A.__cacheKey=ot,A.__webglTexture=lt[ot].texture}return G}function et(A,M,G){let j=i.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(j=i.TEXTURE_2D_ARRAY),M.isData3DTexture&&(j=i.TEXTURE_3D);const lt=Yt(A,M),ot=M.source;e.bindTexture(j,A.__webglTexture,i.TEXTURE0+G);const Ft=n.get(ot);if(ot.version!==Ft.__version||lt===!0){e.activeTexture(i.TEXTURE0+G);const Et=oe.getPrimaries(oe.workingColorSpace),Lt=M.colorSpace===Un?null:oe.getPrimaries(M.colorSpace),ne=M.colorSpace===Un||Et===Lt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,M.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,M.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ne);let pt=_(M.image,!1,s.maxTextureSize);pt=mt(M,pt);const Pt=o.convert(M.format,M.colorSpace),Xt=o.convert(M.type);let qt=y(M.internalFormat,Pt,Xt,M.colorSpace,M.isVideoTexture);Wt(j,M);let Nt;const Qt=M.mipmaps,te=M.isVideoTexture!==!0,ve=Ft.__version===void 0||lt===!0,F=ot.dataReady,Ct=D(M,pt);if(M.isDepthTexture)qt=v(M.format===xs,M.type),ve&&(te?e.texStorage2D(i.TEXTURE_2D,1,qt,pt.width,pt.height):e.texImage2D(i.TEXTURE_2D,0,qt,pt.width,pt.height,0,Pt,Xt,null));else if(M.isDataTexture)if(Qt.length>0){te&&ve&&e.texStorage2D(i.TEXTURE_2D,Ct,qt,Qt[0].width,Qt[0].height);for(let st=0,ht=Qt.length;st<ht;st++)Nt=Qt[st],te?F&&e.texSubImage2D(i.TEXTURE_2D,st,0,0,Nt.width,Nt.height,Pt,Xt,Nt.data):e.texImage2D(i.TEXTURE_2D,st,qt,Nt.width,Nt.height,0,Pt,Xt,Nt.data);M.generateMipmaps=!1}else te?(ve&&e.texStorage2D(i.TEXTURE_2D,Ct,qt,pt.width,pt.height),F&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,pt.width,pt.height,Pt,Xt,pt.data)):e.texImage2D(i.TEXTURE_2D,0,qt,pt.width,pt.height,0,Pt,Xt,pt.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){te&&ve&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Ct,qt,Qt[0].width,Qt[0].height,pt.depth);for(let st=0,ht=Qt.length;st<ht;st++)if(Nt=Qt[st],M.format!==En)if(Pt!==null)if(te){if(F)if(M.layerUpdates.size>0){const Ut=Ql(Nt.width,Nt.height,M.format,M.type);for(const It of M.layerUpdates){const Jt=Nt.data.subarray(It*Ut/Nt.data.BYTES_PER_ELEMENT,(It+1)*Ut/Nt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,st,0,0,It,Nt.width,Nt.height,1,Pt,Jt)}M.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,st,0,0,0,Nt.width,Nt.height,pt.depth,Pt,Nt.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,st,qt,Nt.width,Nt.height,pt.depth,0,Nt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else te?F&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,st,0,0,0,Nt.width,Nt.height,pt.depth,Pt,Xt,Nt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,st,qt,Nt.width,Nt.height,pt.depth,0,Pt,Xt,Nt.data)}else{te&&ve&&e.texStorage2D(i.TEXTURE_2D,Ct,qt,Qt[0].width,Qt[0].height);for(let st=0,ht=Qt.length;st<ht;st++)Nt=Qt[st],M.format!==En?Pt!==null?te?F&&e.compressedTexSubImage2D(i.TEXTURE_2D,st,0,0,Nt.width,Nt.height,Pt,Nt.data):e.compressedTexImage2D(i.TEXTURE_2D,st,qt,Nt.width,Nt.height,0,Nt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):te?F&&e.texSubImage2D(i.TEXTURE_2D,st,0,0,Nt.width,Nt.height,Pt,Xt,Nt.data):e.texImage2D(i.TEXTURE_2D,st,qt,Nt.width,Nt.height,0,Pt,Xt,Nt.data)}else if(M.isDataArrayTexture)if(te){if(ve&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Ct,qt,pt.width,pt.height,pt.depth),F)if(M.layerUpdates.size>0){const st=Ql(pt.width,pt.height,M.format,M.type);for(const ht of M.layerUpdates){const Ut=pt.data.subarray(ht*st/pt.data.BYTES_PER_ELEMENT,(ht+1)*st/pt.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,ht,pt.width,pt.height,1,Pt,Xt,Ut)}M.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,pt.width,pt.height,pt.depth,Pt,Xt,pt.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,qt,pt.width,pt.height,pt.depth,0,Pt,Xt,pt.data);else if(M.isData3DTexture)te?(ve&&e.texStorage3D(i.TEXTURE_3D,Ct,qt,pt.width,pt.height,pt.depth),F&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,pt.width,pt.height,pt.depth,Pt,Xt,pt.data)):e.texImage3D(i.TEXTURE_3D,0,qt,pt.width,pt.height,pt.depth,0,Pt,Xt,pt.data);else if(M.isFramebufferTexture){if(ve)if(te)e.texStorage2D(i.TEXTURE_2D,Ct,qt,pt.width,pt.height);else{let st=pt.width,ht=pt.height;for(let Ut=0;Ut<Ct;Ut++)e.texImage2D(i.TEXTURE_2D,Ut,qt,st,ht,0,Pt,Xt,null),st>>=1,ht>>=1}}else if(Qt.length>0){if(te&&ve){const st=dt(Qt[0]);e.texStorage2D(i.TEXTURE_2D,Ct,qt,st.width,st.height)}for(let st=0,ht=Qt.length;st<ht;st++)Nt=Qt[st],te?F&&e.texSubImage2D(i.TEXTURE_2D,st,0,0,Pt,Xt,Nt):e.texImage2D(i.TEXTURE_2D,st,qt,Pt,Xt,Nt);M.generateMipmaps=!1}else if(te){if(ve){const st=dt(pt);e.texStorage2D(i.TEXTURE_2D,Ct,qt,st.width,st.height)}F&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,Pt,Xt,pt)}else e.texImage2D(i.TEXTURE_2D,0,qt,Pt,Xt,pt);g(M)&&p(j),Ft.__version=ot.version,M.onUpdate&&M.onUpdate(M)}A.__version=M.version}function ft(A,M,G){if(M.image.length!==6)return;const j=Yt(A,M),lt=M.source;e.bindTexture(i.TEXTURE_CUBE_MAP,A.__webglTexture,i.TEXTURE0+G);const ot=n.get(lt);if(lt.version!==ot.__version||j===!0){e.activeTexture(i.TEXTURE0+G);const Ft=oe.getPrimaries(oe.workingColorSpace),Et=M.colorSpace===Un?null:oe.getPrimaries(M.colorSpace),Lt=M.colorSpace===Un||Ft===Et?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,M.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,M.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Lt);const ne=M.isCompressedTexture||M.image[0].isCompressedTexture,pt=M.image[0]&&M.image[0].isDataTexture,Pt=[];for(let ht=0;ht<6;ht++)!ne&&!pt?Pt[ht]=_(M.image[ht],!0,s.maxCubemapSize):Pt[ht]=pt?M.image[ht].image:M.image[ht],Pt[ht]=mt(M,Pt[ht]);const Xt=Pt[0],qt=o.convert(M.format,M.colorSpace),Nt=o.convert(M.type),Qt=y(M.internalFormat,qt,Nt,M.colorSpace),te=M.isVideoTexture!==!0,ve=ot.__version===void 0||j===!0,F=lt.dataReady;let Ct=D(M,Xt);Wt(i.TEXTURE_CUBE_MAP,M);let st;if(ne){te&&ve&&e.texStorage2D(i.TEXTURE_CUBE_MAP,Ct,Qt,Xt.width,Xt.height);for(let ht=0;ht<6;ht++){st=Pt[ht].mipmaps;for(let Ut=0;Ut<st.length;Ut++){const It=st[Ut];M.format!==En?qt!==null?te?F&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ht,Ut,0,0,It.width,It.height,qt,It.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ht,Ut,Qt,It.width,It.height,0,It.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):te?F&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ht,Ut,0,0,It.width,It.height,qt,Nt,It.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ht,Ut,Qt,It.width,It.height,0,qt,Nt,It.data)}}}else{if(st=M.mipmaps,te&&ve){st.length>0&&Ct++;const ht=dt(Pt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,Ct,Qt,ht.width,ht.height)}for(let ht=0;ht<6;ht++)if(pt){te?F&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ht,0,0,0,Pt[ht].width,Pt[ht].height,qt,Nt,Pt[ht].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ht,0,Qt,Pt[ht].width,Pt[ht].height,0,qt,Nt,Pt[ht].data);for(let Ut=0;Ut<st.length;Ut++){const Jt=st[Ut].image[ht].image;te?F&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ht,Ut+1,0,0,Jt.width,Jt.height,qt,Nt,Jt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ht,Ut+1,Qt,Jt.width,Jt.height,0,qt,Nt,Jt.data)}}else{te?F&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ht,0,0,0,qt,Nt,Pt[ht]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ht,0,Qt,qt,Nt,Pt[ht]);for(let Ut=0;Ut<st.length;Ut++){const It=st[Ut];te?F&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ht,Ut+1,0,0,qt,Nt,It.image[ht]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ht,Ut+1,Qt,qt,Nt,It.image[ht])}}}g(M)&&p(i.TEXTURE_CUBE_MAP),ot.__version=lt.version,M.onUpdate&&M.onUpdate(M)}A.__version=M.version}function Rt(A,M,G,j,lt,ot){const Ft=o.convert(G.format,G.colorSpace),Et=o.convert(G.type),Lt=y(G.internalFormat,Ft,Et,G.colorSpace),ne=n.get(M),pt=n.get(G);if(pt.__renderTarget=M,!ne.__hasExternalTextures){const Pt=Math.max(1,M.width>>ot),Xt=Math.max(1,M.height>>ot);lt===i.TEXTURE_3D||lt===i.TEXTURE_2D_ARRAY?e.texImage3D(lt,ot,Lt,Pt,Xt,M.depth,0,Ft,Et,null):e.texImage2D(lt,ot,Lt,Pt,Xt,0,Ft,Et,null)}e.bindFramebuffer(i.FRAMEBUFFER,A),K(M)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,j,lt,pt.__webglTexture,0,H(M)):(lt===i.TEXTURE_2D||lt>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&lt<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,j,lt,pt.__webglTexture,ot),e.bindFramebuffer(i.FRAMEBUFFER,null)}function X(A,M,G){if(i.bindRenderbuffer(i.RENDERBUFFER,A),M.depthBuffer){const j=M.depthTexture,lt=j&&j.isDepthTexture?j.type:null,ot=v(M.stencilBuffer,lt),Ft=M.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Et=H(M);K(M)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Et,ot,M.width,M.height):G?i.renderbufferStorageMultisample(i.RENDERBUFFER,Et,ot,M.width,M.height):i.renderbufferStorage(i.RENDERBUFFER,ot,M.width,M.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Ft,i.RENDERBUFFER,A)}else{const j=M.textures;for(let lt=0;lt<j.length;lt++){const ot=j[lt],Ft=o.convert(ot.format,ot.colorSpace),Et=o.convert(ot.type),Lt=y(ot.internalFormat,Ft,Et,ot.colorSpace),ne=H(M);G&&K(M)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,ne,Lt,M.width,M.height):K(M)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ne,Lt,M.width,M.height):i.renderbufferStorage(i.RENDERBUFFER,Lt,M.width,M.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function rt(A,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,A),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const j=n.get(M.depthTexture);j.__renderTarget=M,(!j.__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),tt(M.depthTexture,0);const lt=j.__webglTexture,ot=H(M);if(M.depthTexture.format===us)K(M)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,lt,0,ot):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,lt,0);else if(M.depthTexture.format===xs)K(M)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,lt,0,ot):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,lt,0);else throw new Error("Unknown depthTexture format")}function xt(A){const M=n.get(A),G=A.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==A.depthTexture){const j=A.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),j){const lt=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,j.removeEventListener("dispose",lt)};j.addEventListener("dispose",lt),M.__depthDisposeCallback=lt}M.__boundDepthTexture=j}if(A.depthTexture&&!M.__autoAllocateDepthBuffer){if(G)throw new Error("target.depthTexture not supported in Cube render targets");rt(M.__webglFramebuffer,A)}else if(G){M.__webglDepthbuffer=[];for(let j=0;j<6;j++)if(e.bindFramebuffer(i.FRAMEBUFFER,M.__webglFramebuffer[j]),M.__webglDepthbuffer[j]===void 0)M.__webglDepthbuffer[j]=i.createRenderbuffer(),X(M.__webglDepthbuffer[j],A,!1);else{const lt=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ot=M.__webglDepthbuffer[j];i.bindRenderbuffer(i.RENDERBUFFER,ot),i.framebufferRenderbuffer(i.FRAMEBUFFER,lt,i.RENDERBUFFER,ot)}}else if(e.bindFramebuffer(i.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=i.createRenderbuffer(),X(M.__webglDepthbuffer,A,!1);else{const j=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,lt=M.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,lt),i.framebufferRenderbuffer(i.FRAMEBUFFER,j,i.RENDERBUFFER,lt)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function Tt(A,M,G){const j=n.get(A);M!==void 0&&Rt(j.__webglFramebuffer,A,A.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),G!==void 0&&xt(A)}function ct(A){const M=A.texture,G=n.get(A),j=n.get(M);A.addEventListener("dispose",C);const lt=A.textures,ot=A.isWebGLCubeRenderTarget===!0,Ft=lt.length>1;if(Ft||(j.__webglTexture===void 0&&(j.__webglTexture=i.createTexture()),j.__version=M.version,r.memory.textures++),ot){G.__webglFramebuffer=[];for(let Et=0;Et<6;Et++)if(M.mipmaps&&M.mipmaps.length>0){G.__webglFramebuffer[Et]=[];for(let Lt=0;Lt<M.mipmaps.length;Lt++)G.__webglFramebuffer[Et][Lt]=i.createFramebuffer()}else G.__webglFramebuffer[Et]=i.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){G.__webglFramebuffer=[];for(let Et=0;Et<M.mipmaps.length;Et++)G.__webglFramebuffer[Et]=i.createFramebuffer()}else G.__webglFramebuffer=i.createFramebuffer();if(Ft)for(let Et=0,Lt=lt.length;Et<Lt;Et++){const ne=n.get(lt[Et]);ne.__webglTexture===void 0&&(ne.__webglTexture=i.createTexture(),r.memory.textures++)}if(A.samples>0&&K(A)===!1){G.__webglMultisampledFramebuffer=i.createFramebuffer(),G.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,G.__webglMultisampledFramebuffer);for(let Et=0;Et<lt.length;Et++){const Lt=lt[Et];G.__webglColorRenderbuffer[Et]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,G.__webglColorRenderbuffer[Et]);const ne=o.convert(Lt.format,Lt.colorSpace),pt=o.convert(Lt.type),Pt=y(Lt.internalFormat,ne,pt,Lt.colorSpace,A.isXRRenderTarget===!0),Xt=H(A);i.renderbufferStorageMultisample(i.RENDERBUFFER,Xt,Pt,A.width,A.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Et,i.RENDERBUFFER,G.__webglColorRenderbuffer[Et])}i.bindRenderbuffer(i.RENDERBUFFER,null),A.depthBuffer&&(G.__webglDepthRenderbuffer=i.createRenderbuffer(),X(G.__webglDepthRenderbuffer,A,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(ot){e.bindTexture(i.TEXTURE_CUBE_MAP,j.__webglTexture),Wt(i.TEXTURE_CUBE_MAP,M);for(let Et=0;Et<6;Et++)if(M.mipmaps&&M.mipmaps.length>0)for(let Lt=0;Lt<M.mipmaps.length;Lt++)Rt(G.__webglFramebuffer[Et][Lt],A,M,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Et,Lt);else Rt(G.__webglFramebuffer[Et],A,M,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Et,0);g(M)&&p(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Ft){for(let Et=0,Lt=lt.length;Et<Lt;Et++){const ne=lt[Et],pt=n.get(ne);e.bindTexture(i.TEXTURE_2D,pt.__webglTexture),Wt(i.TEXTURE_2D,ne),Rt(G.__webglFramebuffer,A,ne,i.COLOR_ATTACHMENT0+Et,i.TEXTURE_2D,0),g(ne)&&p(i.TEXTURE_2D)}e.unbindTexture()}else{let Et=i.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(Et=A.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(Et,j.__webglTexture),Wt(Et,M),M.mipmaps&&M.mipmaps.length>0)for(let Lt=0;Lt<M.mipmaps.length;Lt++)Rt(G.__webglFramebuffer[Lt],A,M,i.COLOR_ATTACHMENT0,Et,Lt);else Rt(G.__webglFramebuffer,A,M,i.COLOR_ATTACHMENT0,Et,0);g(M)&&p(Et),e.unbindTexture()}A.depthBuffer&&xt(A)}function W(A){const M=A.textures;for(let G=0,j=M.length;G<j;G++){const lt=M[G];if(g(lt)){const ot=S(A),Ft=n.get(lt).__webglTexture;e.bindTexture(ot,Ft),p(ot),e.unbindTexture()}}}const it=[],L=[];function yt(A){if(A.samples>0){if(K(A)===!1){const M=A.textures,G=A.width,j=A.height;let lt=i.COLOR_BUFFER_BIT;const ot=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Ft=n.get(A),Et=M.length>1;if(Et)for(let Lt=0;Lt<M.length;Lt++)e.bindFramebuffer(i.FRAMEBUFFER,Ft.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Lt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,Ft.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Lt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,Ft.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ft.__webglFramebuffer);for(let Lt=0;Lt<M.length;Lt++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(lt|=i.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(lt|=i.STENCIL_BUFFER_BIT)),Et){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Ft.__webglColorRenderbuffer[Lt]);const ne=n.get(M[Lt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,ne,0)}i.blitFramebuffer(0,0,G,j,0,0,G,j,lt,i.NEAREST),c===!0&&(it.length=0,L.length=0,it.push(i.COLOR_ATTACHMENT0+Lt),A.depthBuffer&&A.resolveDepthBuffer===!1&&(it.push(ot),L.push(ot),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,L)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,it))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),Et)for(let Lt=0;Lt<M.length;Lt++){e.bindFramebuffer(i.FRAMEBUFFER,Ft.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Lt,i.RENDERBUFFER,Ft.__webglColorRenderbuffer[Lt]);const ne=n.get(M[Lt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,Ft.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Lt,i.TEXTURE_2D,ne,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ft.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.resolveDepthBuffer===!1&&c){const M=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[M])}}}function H(A){return Math.min(s.maxSamples,A.samples)}function K(A){const M=n.get(A);return A.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function Z(A){const M=r.render.frame;h.get(A)!==M&&(h.set(A,M),A.update())}function mt(A,M){const G=A.colorSpace,j=A.format,lt=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||G!==Ms&&G!==Un&&(oe.getTransfer(G)===ge?(j!==En||lt!==Jn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",G)),M}function dt(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(l.width=A.naturalWidth||A.width,l.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(l.width=A.displayWidth,l.height=A.displayHeight):(l.width=A.width,l.height=A.height),l}this.allocateTextureUnit=N,this.resetTextureUnits=O,this.setTexture2D=tt,this.setTexture2DArray=$,this.setTexture3D=Q,this.setTextureCube=k,this.rebindTextures=Tt,this.setupRenderTarget=ct,this.updateRenderTargetMipmap=W,this.updateMultisampleRenderTarget=yt,this.setupDepthRenderbuffer=xt,this.setupFrameBufferTexture=Rt,this.useMultisampledRTT=K}function s1(i,t){function e(n,s=Un){let o;const r=oe.getTransfer(s);if(n===Jn)return i.UNSIGNED_BYTE;if(n===Ec)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Tc)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Xh)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Vh)return i.BYTE;if(n===Wh)return i.SHORT;if(n===Ys)return i.UNSIGNED_SHORT;if(n===Sc)return i.INT;if(n===Oi)return i.UNSIGNED_INT;if(n===Fn)return i.FLOAT;if(n===Qs)return i.HALF_FLOAT;if(n===qh)return i.ALPHA;if(n===Yh)return i.RGB;if(n===En)return i.RGBA;if(n===$h)return i.LUMINANCE;if(n===Zh)return i.LUMINANCE_ALPHA;if(n===us)return i.DEPTH_COMPONENT;if(n===xs)return i.DEPTH_STENCIL;if(n===bc)return i.RED;if(n===Ac)return i.RED_INTEGER;if(n===Jh)return i.RG;if(n===Rc)return i.RG_INTEGER;if(n===Cc)return i.RGBA_INTEGER;if(n===Go||n===Vo||n===Wo||n===Xo)if(r===ge)if(o=t.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(n===Go)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Vo)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Wo)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Xo)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=t.get("WEBGL_compressed_texture_s3tc"),o!==null){if(n===Go)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Vo)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Wo)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Xo)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Pa||n===Ia||n===Da||n===Ua)if(o=t.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(n===Pa)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Ia)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Da)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Ua)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Na||n===Fa||n===Oa)if(o=t.get("WEBGL_compressed_texture_etc"),o!==null){if(n===Na||n===Fa)return r===ge?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(n===Oa)return r===ge?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===za||n===Ba||n===ka||n===Ha||n===Ga||n===Va||n===Wa||n===Xa||n===qa||n===Ya||n===$a||n===Za||n===Ja||n===Ka)if(o=t.get("WEBGL_compressed_texture_astc"),o!==null){if(n===za)return r===ge?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Ba)return r===ge?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===ka)return r===ge?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Ha)return r===ge?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Ga)return r===ge?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Va)return r===ge?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Wa)return r===ge?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Xa)return r===ge?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===qa)return r===ge?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Ya)return r===ge?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===$a)return r===ge?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Za)return r===ge?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Ja)return r===ge?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Ka)return r===ge?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===qo||n===ja||n===Qa)if(o=t.get("EXT_texture_compression_bptc"),o!==null){if(n===qo)return r===ge?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===ja)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Qa)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Kh||n===tc||n===ec||n===nc)if(o=t.get("EXT_texture_compression_rgtc"),o!==null){if(n===qo)return o.COMPRESSED_RED_RGTC1_EXT;if(n===tc)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===ec)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===nc)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===vs?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}class o1 extends Qe{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class ut extends Be{constructor(){super(),this.isGroup=!0,this.type="Group"}}const r1={type:"move"};class jr{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ut,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ut,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new I,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new I),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ut,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new I,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new I),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,o=null,r=null;const a=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){r=!0;for(const _ of t.hand.values()){const g=e.getJointPose(_,n),p=this._getHandJoint(l,_);g!==null&&(p.matrix.fromArray(g.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=g.radius),p.visible=g!==null}const h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,m=.005;l.inputState.pinching&&d>f+m?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&d<=f-m&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(o=e.getPose(t.gripSpace,n),o!==null&&(c.matrix.fromArray(o.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,o.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(o.linearVelocity)):c.hasLinearVelocity=!1,o.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(o.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&o!==null&&(s=o),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(r1)))}return a!==null&&(a.visible=s!==null),c!==null&&(c.visible=o!==null),l!==null&&(l.visible=r!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new ut;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const a1=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,c1=`
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

}`;class l1{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const s=new tn,o=t.properties.get(s);o.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new vi({vertexShader:a1,fragmentShader:c1,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new w(new Sn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class h1 extends ws{constructor(t,e){super();const n=this;let s=null,o=1,r=null,a="local-floor",c=1,l=null,h=null,u=null,d=null,f=null,m=null;const _=new l1,g=e.getContextAttributes();let p=null,S=null;const y=[],v=[],D=new gt;let T=null;const C=new Qe;C.viewport=new _e;const P=new Qe;P.viewport=new _e;const E=[C,P],x=new o1;let R=null,O=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(et){let ft=y[et];return ft===void 0&&(ft=new jr,y[et]=ft),ft.getTargetRaySpace()},this.getControllerGrip=function(et){let ft=y[et];return ft===void 0&&(ft=new jr,y[et]=ft),ft.getGripSpace()},this.getHand=function(et){let ft=y[et];return ft===void 0&&(ft=new jr,y[et]=ft),ft.getHandSpace()};function N(et){const ft=v.indexOf(et.inputSource);if(ft===-1)return;const Rt=y[ft];Rt!==void 0&&(Rt.update(et.inputSource,et.frame,l||r),Rt.dispatchEvent({type:et.type,data:et.inputSource}))}function V(){s.removeEventListener("select",N),s.removeEventListener("selectstart",N),s.removeEventListener("selectend",N),s.removeEventListener("squeeze",N),s.removeEventListener("squeezestart",N),s.removeEventListener("squeezeend",N),s.removeEventListener("end",V),s.removeEventListener("inputsourceschange",tt);for(let et=0;et<y.length;et++){const ft=v[et];ft!==null&&(v[et]=null,y[et].disconnect(ft))}R=null,O=null,_.reset(),t.setRenderTarget(p),f=null,d=null,u=null,s=null,S=null,Yt.stop(),n.isPresenting=!1,t.setPixelRatio(T),t.setSize(D.width,D.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(et){o=et,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(et){a=et,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||r},this.setReferenceSpace=function(et){l=et},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u},this.getFrame=function(){return m},this.getSession=function(){return s},this.setSession=async function(et){if(s=et,s!==null){if(p=t.getRenderTarget(),s.addEventListener("select",N),s.addEventListener("selectstart",N),s.addEventListener("selectend",N),s.addEventListener("squeeze",N),s.addEventListener("squeezestart",N),s.addEventListener("squeezeend",N),s.addEventListener("end",V),s.addEventListener("inputsourceschange",tt),g.xrCompatible!==!0&&await e.makeXRCompatible(),T=t.getPixelRatio(),t.getSize(D),s.renderState.layers===void 0){const ft={antialias:g.antialias,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:o};f=new XRWebGLLayer(s,e,ft),s.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),S=new zi(f.framebufferWidth,f.framebufferHeight,{format:En,type:Jn,colorSpace:t.outputColorSpace,stencilBuffer:g.stencil})}else{let ft=null,Rt=null,X=null;g.depth&&(X=g.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,ft=g.stencil?xs:us,Rt=g.stencil?vs:Oi);const rt={colorFormat:e.RGBA8,depthFormat:X,scaleFactor:o};u=new XRWebGLBinding(s,e),d=u.createProjectionLayer(rt),s.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),S=new zi(d.textureWidth,d.textureHeight,{format:En,type:Jn,depthTexture:new hu(d.textureWidth,d.textureHeight,Rt,void 0,void 0,void 0,void 0,void 0,void 0,ft),stencilBuffer:g.stencil,colorSpace:t.outputColorSpace,samples:g.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(c),l=null,r=await s.requestReferenceSpace(a),Yt.setContext(s),Yt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function tt(et){for(let ft=0;ft<et.removed.length;ft++){const Rt=et.removed[ft],X=v.indexOf(Rt);X>=0&&(v[X]=null,y[X].disconnect(Rt))}for(let ft=0;ft<et.added.length;ft++){const Rt=et.added[ft];let X=v.indexOf(Rt);if(X===-1){for(let xt=0;xt<y.length;xt++)if(xt>=v.length){v.push(Rt),X=xt;break}else if(v[xt]===null){v[xt]=Rt,X=xt;break}if(X===-1)break}const rt=y[X];rt&&rt.connect(Rt)}}const $=new I,Q=new I;function k(et,ft,Rt){$.setFromMatrixPosition(ft.matrixWorld),Q.setFromMatrixPosition(Rt.matrixWorld);const X=$.distanceTo(Q),rt=ft.projectionMatrix.elements,xt=Rt.projectionMatrix.elements,Tt=rt[14]/(rt[10]-1),ct=rt[14]/(rt[10]+1),W=(rt[9]+1)/rt[5],it=(rt[9]-1)/rt[5],L=(rt[8]-1)/rt[0],yt=(xt[8]+1)/xt[0],H=Tt*L,K=Tt*yt,Z=X/(-L+yt),mt=Z*-L;if(ft.matrixWorld.decompose(et.position,et.quaternion,et.scale),et.translateX(mt),et.translateZ(Z),et.matrixWorld.compose(et.position,et.quaternion,et.scale),et.matrixWorldInverse.copy(et.matrixWorld).invert(),rt[10]===-1)et.projectionMatrix.copy(ft.projectionMatrix),et.projectionMatrixInverse.copy(ft.projectionMatrixInverse);else{const dt=Tt+Z,A=ct+Z,M=H-mt,G=K+(X-mt),j=W*ct/A*dt,lt=it*ct/A*dt;et.projectionMatrix.makePerspective(M,G,j,lt,dt,A),et.projectionMatrixInverse.copy(et.projectionMatrix).invert()}}function _t(et,ft){ft===null?et.matrixWorld.copy(et.matrix):et.matrixWorld.multiplyMatrices(ft.matrixWorld,et.matrix),et.matrixWorldInverse.copy(et.matrixWorld).invert()}this.updateCamera=function(et){if(s===null)return;let ft=et.near,Rt=et.far;_.texture!==null&&(_.depthNear>0&&(ft=_.depthNear),_.depthFar>0&&(Rt=_.depthFar)),x.near=P.near=C.near=ft,x.far=P.far=C.far=Rt,(R!==x.near||O!==x.far)&&(s.updateRenderState({depthNear:x.near,depthFar:x.far}),R=x.near,O=x.far),C.layers.mask=et.layers.mask|2,P.layers.mask=et.layers.mask|4,x.layers.mask=C.layers.mask|P.layers.mask;const X=et.parent,rt=x.cameras;_t(x,X);for(let xt=0;xt<rt.length;xt++)_t(rt[xt],X);rt.length===2?k(x,C,P):x.projectionMatrix.copy(C.projectionMatrix),Mt(et,x,X)};function Mt(et,ft,Rt){Rt===null?et.matrix.copy(ft.matrixWorld):(et.matrix.copy(Rt.matrixWorld),et.matrix.invert(),et.matrix.multiply(ft.matrixWorld)),et.matrix.decompose(et.position,et.quaternion,et.scale),et.updateMatrixWorld(!0),et.projectionMatrix.copy(ft.projectionMatrix),et.projectionMatrixInverse.copy(ft.projectionMatrixInverse),et.isPerspectiveCamera&&(et.fov=ic*2*Math.atan(1/et.projectionMatrix.elements[5]),et.zoom=1)}this.getCamera=function(){return x},this.getFoveation=function(){if(!(d===null&&f===null))return c},this.setFoveation=function(et){c=et,d!==null&&(d.fixedFoveation=et),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=et)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(x)};let bt=null;function Wt(et,ft){if(h=ft.getViewerPose(l||r),m=ft,h!==null){const Rt=h.views;f!==null&&(t.setRenderTargetFramebuffer(S,f.framebuffer),t.setRenderTarget(S));let X=!1;Rt.length!==x.cameras.length&&(x.cameras.length=0,X=!0);for(let xt=0;xt<Rt.length;xt++){const Tt=Rt[xt];let ct=null;if(f!==null)ct=f.getViewport(Tt);else{const it=u.getViewSubImage(d,Tt);ct=it.viewport,xt===0&&(t.setRenderTargetTextures(S,it.colorTexture,d.ignoreDepthValues?void 0:it.depthStencilTexture),t.setRenderTarget(S))}let W=E[xt];W===void 0&&(W=new Qe,W.layers.enable(xt),W.viewport=new _e,E[xt]=W),W.matrix.fromArray(Tt.transform.matrix),W.matrix.decompose(W.position,W.quaternion,W.scale),W.projectionMatrix.fromArray(Tt.projectionMatrix),W.projectionMatrixInverse.copy(W.projectionMatrix).invert(),W.viewport.set(ct.x,ct.y,ct.width,ct.height),xt===0&&(x.matrix.copy(W.matrix),x.matrix.decompose(x.position,x.quaternion,x.scale)),X===!0&&x.cameras.push(W)}const rt=s.enabledFeatures;if(rt&&rt.includes("depth-sensing")){const xt=u.getDepthInformation(Rt[0]);xt&&xt.isValid&&xt.texture&&_.init(t,xt,s.renderState)}}for(let Rt=0;Rt<y.length;Rt++){const X=v[Rt],rt=y[Rt];X!==null&&rt!==void 0&&rt.update(X,ft,l||r)}bt&&bt(et,ft),ft.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ft}),m=null}const Yt=new cu;Yt.setAnimationLoop(Wt),this.setAnimationLoop=function(et){bt=et},this.dispose=function(){}}}const Ti=new bn,u1=new fe;function d1(i,t){function e(g,p){g.matrixAutoUpdate===!0&&g.updateMatrix(),p.value.copy(g.matrix)}function n(g,p){p.color.getRGB(g.fogColor.value,ou(i)),p.isFog?(g.fogNear.value=p.near,g.fogFar.value=p.far):p.isFogExp2&&(g.fogDensity.value=p.density)}function s(g,p,S,y,v){p.isMeshBasicMaterial||p.isMeshLambertMaterial?o(g,p):p.isMeshToonMaterial?(o(g,p),u(g,p)):p.isMeshPhongMaterial?(o(g,p),h(g,p)):p.isMeshStandardMaterial?(o(g,p),d(g,p),p.isMeshPhysicalMaterial&&f(g,p,v)):p.isMeshMatcapMaterial?(o(g,p),m(g,p)):p.isMeshDepthMaterial?o(g,p):p.isMeshDistanceMaterial?(o(g,p),_(g,p)):p.isMeshNormalMaterial?o(g,p):p.isLineBasicMaterial?(r(g,p),p.isLineDashedMaterial&&a(g,p)):p.isPointsMaterial?c(g,p,S,y):p.isSpriteMaterial?l(g,p):p.isShadowMaterial?(g.color.value.copy(p.color),g.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function o(g,p){g.opacity.value=p.opacity,p.color&&g.diffuse.value.copy(p.color),p.emissive&&g.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(g.map.value=p.map,e(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.bumpMap&&(g.bumpMap.value=p.bumpMap,e(p.bumpMap,g.bumpMapTransform),g.bumpScale.value=p.bumpScale,p.side===Xe&&(g.bumpScale.value*=-1)),p.normalMap&&(g.normalMap.value=p.normalMap,e(p.normalMap,g.normalMapTransform),g.normalScale.value.copy(p.normalScale),p.side===Xe&&g.normalScale.value.negate()),p.displacementMap&&(g.displacementMap.value=p.displacementMap,e(p.displacementMap,g.displacementMapTransform),g.displacementScale.value=p.displacementScale,g.displacementBias.value=p.displacementBias),p.emissiveMap&&(g.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,g.emissiveMapTransform)),p.specularMap&&(g.specularMap.value=p.specularMap,e(p.specularMap,g.specularMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest);const S=t.get(p),y=S.envMap,v=S.envMapRotation;y&&(g.envMap.value=y,Ti.copy(v),Ti.x*=-1,Ti.y*=-1,Ti.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(Ti.y*=-1,Ti.z*=-1),g.envMapRotation.value.setFromMatrix4(u1.makeRotationFromEuler(Ti)),g.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=p.reflectivity,g.ior.value=p.ior,g.refractionRatio.value=p.refractionRatio),p.lightMap&&(g.lightMap.value=p.lightMap,g.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,g.lightMapTransform)),p.aoMap&&(g.aoMap.value=p.aoMap,g.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,g.aoMapTransform))}function r(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,p.map&&(g.map.value=p.map,e(p.map,g.mapTransform))}function a(g,p){g.dashSize.value=p.dashSize,g.totalSize.value=p.dashSize+p.gapSize,g.scale.value=p.scale}function c(g,p,S,y){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.size.value=p.size*S,g.scale.value=y*.5,p.map&&(g.map.value=p.map,e(p.map,g.uvTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function l(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.rotation.value=p.rotation,p.map&&(g.map.value=p.map,e(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function h(g,p){g.specular.value.copy(p.specular),g.shininess.value=Math.max(p.shininess,1e-4)}function u(g,p){p.gradientMap&&(g.gradientMap.value=p.gradientMap)}function d(g,p){g.metalness.value=p.metalness,p.metalnessMap&&(g.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,g.metalnessMapTransform)),g.roughness.value=p.roughness,p.roughnessMap&&(g.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,g.roughnessMapTransform)),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)}function f(g,p,S){g.ior.value=p.ior,p.sheen>0&&(g.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),g.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(g.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,g.sheenColorMapTransform)),p.sheenRoughnessMap&&(g.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,g.sheenRoughnessMapTransform))),p.clearcoat>0&&(g.clearcoat.value=p.clearcoat,g.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(g.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,g.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(g.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Xe&&g.clearcoatNormalScale.value.negate())),p.dispersion>0&&(g.dispersion.value=p.dispersion),p.iridescence>0&&(g.iridescence.value=p.iridescence,g.iridescenceIOR.value=p.iridescenceIOR,g.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(g.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,g.iridescenceMapTransform)),p.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),p.transmission>0&&(g.transmission.value=p.transmission,g.transmissionSamplerMap.value=S.texture,g.transmissionSamplerSize.value.set(S.width,S.height),p.transmissionMap&&(g.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,g.transmissionMapTransform)),g.thickness.value=p.thickness,p.thicknessMap&&(g.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=p.attenuationDistance,g.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(g.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(g.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=p.specularIntensity,g.specularColor.value.copy(p.specularColor),p.specularColorMap&&(g.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,g.specularColorMapTransform)),p.specularIntensityMap&&(g.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,g.specularIntensityMapTransform))}function m(g,p){p.matcap&&(g.matcap.value=p.matcap)}function _(g,p){const S=t.get(p).light;g.referencePosition.value.setFromMatrixPosition(S.matrixWorld),g.nearDistance.value=S.shadow.camera.near,g.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function f1(i,t,e,n){let s={},o={},r=[];const a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(S,y){const v=y.program;n.uniformBlockBinding(S,v)}function l(S,y){let v=s[S.id];v===void 0&&(m(S),v=h(S),s[S.id]=v,S.addEventListener("dispose",g));const D=y.program;n.updateUBOMapping(S,D);const T=t.render.frame;o[S.id]!==T&&(d(S),o[S.id]=T)}function h(S){const y=u();S.__bindingPointIndex=y;const v=i.createBuffer(),D=S.__size,T=S.usage;return i.bindBuffer(i.UNIFORM_BUFFER,v),i.bufferData(i.UNIFORM_BUFFER,D,T),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,y,v),v}function u(){for(let S=0;S<a;S++)if(r.indexOf(S)===-1)return r.push(S),S;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(S){const y=s[S.id],v=S.uniforms,D=S.__cache;i.bindBuffer(i.UNIFORM_BUFFER,y);for(let T=0,C=v.length;T<C;T++){const P=Array.isArray(v[T])?v[T]:[v[T]];for(let E=0,x=P.length;E<x;E++){const R=P[E];if(f(R,T,E,D)===!0){const O=R.__offset,N=Array.isArray(R.value)?R.value:[R.value];let V=0;for(let tt=0;tt<N.length;tt++){const $=N[tt],Q=_($);typeof $=="number"||typeof $=="boolean"?(R.__data[0]=$,i.bufferSubData(i.UNIFORM_BUFFER,O+V,R.__data)):$.isMatrix3?(R.__data[0]=$.elements[0],R.__data[1]=$.elements[1],R.__data[2]=$.elements[2],R.__data[3]=0,R.__data[4]=$.elements[3],R.__data[5]=$.elements[4],R.__data[6]=$.elements[5],R.__data[7]=0,R.__data[8]=$.elements[6],R.__data[9]=$.elements[7],R.__data[10]=$.elements[8],R.__data[11]=0):($.toArray(R.__data,V),V+=Q.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,O,R.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(S,y,v,D){const T=S.value,C=y+"_"+v;if(D[C]===void 0)return typeof T=="number"||typeof T=="boolean"?D[C]=T:D[C]=T.clone(),!0;{const P=D[C];if(typeof T=="number"||typeof T=="boolean"){if(P!==T)return D[C]=T,!0}else if(P.equals(T)===!1)return P.copy(T),!0}return!1}function m(S){const y=S.uniforms;let v=0;const D=16;for(let C=0,P=y.length;C<P;C++){const E=Array.isArray(y[C])?y[C]:[y[C]];for(let x=0,R=E.length;x<R;x++){const O=E[x],N=Array.isArray(O.value)?O.value:[O.value];for(let V=0,tt=N.length;V<tt;V++){const $=N[V],Q=_($),k=v%D,_t=k%Q.boundary,Mt=k+_t;v+=_t,Mt!==0&&D-Mt<Q.storage&&(v+=D-Mt),O.__data=new Float32Array(Q.storage/Float32Array.BYTES_PER_ELEMENT),O.__offset=v,v+=Q.storage}}}const T=v%D;return T>0&&(v+=D-T),S.__size=v,S.__cache={},this}function _(S){const y={boundary:0,storage:0};return typeof S=="number"||typeof S=="boolean"?(y.boundary=4,y.storage=4):S.isVector2?(y.boundary=8,y.storage=8):S.isVector3||S.isColor?(y.boundary=16,y.storage=12):S.isVector4?(y.boundary=16,y.storage=16):S.isMatrix3?(y.boundary=48,y.storage=48):S.isMatrix4?(y.boundary=64,y.storage=64):S.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",S),y}function g(S){const y=S.target;y.removeEventListener("dispose",g);const v=r.indexOf(y.__bindingPointIndex);r.splice(v,1),i.deleteBuffer(s[y.id]),delete s[y.id],delete o[y.id]}function p(){for(const S in s)i.deleteBuffer(s[S]);r=[],s={},o={}}return{bind:c,update:l,dispose:p}}class Nc{constructor(t={}){const{canvas:e=ef(),context:n=null,depth:s=!0,stencil:o=!1,alpha:r=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:d=!1}=t;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=r;const m=new Uint32Array(4),_=new Int32Array(4);let g=null,p=null;const S=[],y=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=$e,this.toneMapping=gi,this.toneMappingExposure=1;const v=this;let D=!1,T=0,C=0,P=null,E=-1,x=null;const R=new _e,O=new _e;let N=null;const V=new St(0);let tt=0,$=e.width,Q=e.height,k=1,_t=null,Mt=null;const bt=new _e(0,0,$,Q),Wt=new _e(0,0,$,Q);let Yt=!1;const et=new Dc;let ft=!1,Rt=!1;const X=new fe,rt=new fe,xt=new I,Tt=new _e,ct={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let W=!1;function it(){return P===null?k:1}let L=n;function yt(b,z){return e.getContext(b,z)}try{const b={alpha:!0,depth:s,stencil:o,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Mc}`),e.addEventListener("webglcontextlost",ht,!1),e.addEventListener("webglcontextrestored",Ut,!1),e.addEventListener("webglcontextcreationerror",It,!1),L===null){const z="webgl2";if(L=yt(z,b),L===null)throw yt(z)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(b){throw console.error("THREE.WebGLRenderer: "+b.message),b}let H,K,Z,mt,dt,A,M,G,j,lt,ot,Ft,Et,Lt,ne,pt,Pt,Xt,qt,Nt,Qt,te,ve,F;function Ct(){H=new xm(L),H.init(),te=new s1(L,H),K=new fm(L,H,t,te),Z=new e1(L,H),K.reverseDepthBuffer&&d&&Z.buffers.depth.setReversed(!0),mt=new wm(L),dt=new kg,A=new i1(L,H,Z,dt,K,te,mt),M=new mm(v),G=new vm(v),j=new Cf(L),ve=new um(L,j),lt=new ym(L,j,mt,ve),ot=new Em(L,lt,j,mt),qt=new Sm(L,K,A),pt=new pm(dt),Ft=new Bg(v,M,G,H,K,ve,pt),Et=new d1(v,dt),Lt=new Gg,ne=new $g(H),Xt=new hm(v,M,G,Z,ot,f,c),Pt=new Qg(v,ot,K),F=new f1(L,mt,K,Z),Nt=new dm(L,H,mt),Qt=new Mm(L,H,mt),mt.programs=Ft.programs,v.capabilities=K,v.extensions=H,v.properties=dt,v.renderLists=Lt,v.shadowMap=Pt,v.state=Z,v.info=mt}Ct();const st=new h1(v,L);this.xr=st,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){const b=H.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){const b=H.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return k},this.setPixelRatio=function(b){b!==void 0&&(k=b,this.setSize($,Q,!1))},this.getSize=function(b){return b.set($,Q)},this.setSize=function(b,z,q=!0){if(st.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}$=b,Q=z,e.width=Math.floor(b*k),e.height=Math.floor(z*k),q===!0&&(e.style.width=b+"px",e.style.height=z+"px"),this.setViewport(0,0,b,z)},this.getDrawingBufferSize=function(b){return b.set($*k,Q*k).floor()},this.setDrawingBufferSize=function(b,z,q){$=b,Q=z,k=q,e.width=Math.floor(b*q),e.height=Math.floor(z*q),this.setViewport(0,0,b,z)},this.getCurrentViewport=function(b){return b.copy(R)},this.getViewport=function(b){return b.copy(bt)},this.setViewport=function(b,z,q,Y){b.isVector4?bt.set(b.x,b.y,b.z,b.w):bt.set(b,z,q,Y),Z.viewport(R.copy(bt).multiplyScalar(k).round())},this.getScissor=function(b){return b.copy(Wt)},this.setScissor=function(b,z,q,Y){b.isVector4?Wt.set(b.x,b.y,b.z,b.w):Wt.set(b,z,q,Y),Z.scissor(O.copy(Wt).multiplyScalar(k).round())},this.getScissorTest=function(){return Yt},this.setScissorTest=function(b){Z.setScissorTest(Yt=b)},this.setOpaqueSort=function(b){_t=b},this.setTransparentSort=function(b){Mt=b},this.getClearColor=function(b){return b.copy(Xt.getClearColor())},this.setClearColor=function(){Xt.setClearColor.apply(Xt,arguments)},this.getClearAlpha=function(){return Xt.getClearAlpha()},this.setClearAlpha=function(){Xt.setClearAlpha.apply(Xt,arguments)},this.clear=function(b=!0,z=!0,q=!0){let Y=0;if(b){let B=!1;if(P!==null){const vt=P.texture.format;B=vt===Cc||vt===Rc||vt===Ac}if(B){const vt=P.texture.type,Dt=vt===Jn||vt===Oi||vt===Ys||vt===vs||vt===Ec||vt===Tc,Bt=Xt.getClearColor(),kt=Xt.getClearAlpha(),$t=Bt.r,Kt=Bt.g,Ht=Bt.b;Dt?(m[0]=$t,m[1]=Kt,m[2]=Ht,m[3]=kt,L.clearBufferuiv(L.COLOR,0,m)):(_[0]=$t,_[1]=Kt,_[2]=Ht,_[3]=kt,L.clearBufferiv(L.COLOR,0,_))}else Y|=L.COLOR_BUFFER_BIT}z&&(Y|=L.DEPTH_BUFFER_BIT),q&&(Y|=L.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),L.clear(Y)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",ht,!1),e.removeEventListener("webglcontextrestored",Ut,!1),e.removeEventListener("webglcontextcreationerror",It,!1),Lt.dispose(),ne.dispose(),dt.dispose(),M.dispose(),G.dispose(),ot.dispose(),ve.dispose(),F.dispose(),Ft.dispose(),st.dispose(),st.removeEventListener("sessionstart",Zc),st.removeEventListener("sessionend",Jc),xi.stop()};function ht(b){b.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),D=!0}function Ut(){console.log("THREE.WebGLRenderer: Context Restored."),D=!1;const b=mt.autoReset,z=Pt.enabled,q=Pt.autoUpdate,Y=Pt.needsUpdate,B=Pt.type;Ct(),mt.autoReset=b,Pt.enabled=z,Pt.autoUpdate=q,Pt.needsUpdate=Y,Pt.type=B}function It(b){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function Jt(b){const z=b.target;z.removeEventListener("dispose",Jt),Ce(z)}function Ce(b){Ze(b),dt.remove(b)}function Ze(b){const z=dt.get(b).programs;z!==void 0&&(z.forEach(function(q){Ft.releaseProgram(q)}),b.isShaderMaterial&&Ft.releaseShaderCache(b))}this.renderBufferDirect=function(b,z,q,Y,B,vt){z===null&&(z=ct);const Dt=B.isMesh&&B.matrixWorld.determinant()<0,Bt=ud(b,z,q,Y,B);Z.setMaterial(Y,Dt);let kt=q.index,$t=1;if(Y.wireframe===!0){if(kt=lt.getWireframeAttribute(q),kt===void 0)return;$t=2}const Kt=q.drawRange,Ht=q.attributes.position;let re=Kt.start*$t,xe=(Kt.start+Kt.count)*$t;vt!==null&&(re=Math.max(re,vt.start*$t),xe=Math.min(xe,(vt.start+vt.count)*$t)),kt!==null?(re=Math.max(re,0),xe=Math.min(xe,kt.count)):Ht!=null&&(re=Math.max(re,0),xe=Math.min(xe,Ht.count));const we=xe-re;if(we<0||we===1/0)return;ve.setup(B,Y,Bt,q,kt);let sn,he=Nt;if(kt!==null&&(sn=j.get(kt),he=Qt,he.setIndex(sn)),B.isMesh)Y.wireframe===!0?(Z.setLineWidth(Y.wireframeLinewidth*it()),he.setMode(L.LINES)):he.setMode(L.TRIANGLES);else if(B.isLine){let Gt=Y.linewidth;Gt===void 0&&(Gt=1),Z.setLineWidth(Gt*it()),B.isLineSegments?he.setMode(L.LINES):B.isLineLoop?he.setMode(L.LINE_LOOP):he.setMode(L.LINE_STRIP)}else B.isPoints?he.setMode(L.POINTS):B.isSprite&&he.setMode(L.TRIANGLES);if(B.isBatchedMesh)if(B._multiDrawInstances!==null)he.renderMultiDrawInstances(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount,B._multiDrawInstances);else if(H.get("WEBGL_multi_draw"))he.renderMultiDraw(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount);else{const Gt=B._multiDrawStarts,Hn=B._multiDrawCounts,ue=B._multiDrawCount,_n=kt?j.get(kt).bytesPerElement:1,Vi=dt.get(Y).currentProgram.getUniforms();for(let an=0;an<ue;an++)Vi.setValue(L,"_gl_DrawID",an),he.render(Gt[an]/_n,Hn[an])}else if(B.isInstancedMesh)he.renderInstances(re,we,B.count);else if(q.isInstancedBufferGeometry){const Gt=q._maxInstanceCount!==void 0?q._maxInstanceCount:1/0,Hn=Math.min(q.instanceCount,Gt);he.renderInstances(re,we,Hn)}else he.render(re,we)};function pe(b,z,q){b.transparent===!0&&b.side===le&&b.forceSinglePass===!1?(b.side=Xe,b.needsUpdate=!0,ao(b,z,q),b.side=_i,b.needsUpdate=!0,ao(b,z,q),b.side=le):ao(b,z,q)}this.compile=function(b,z,q=null){q===null&&(q=b),p=ne.get(q),p.init(z),y.push(p),q.traverseVisible(function(B){B.isLight&&B.layers.test(z.layers)&&(p.pushLight(B),B.castShadow&&p.pushShadow(B))}),b!==q&&b.traverseVisible(function(B){B.isLight&&B.layers.test(z.layers)&&(p.pushLight(B),B.castShadow&&p.pushShadow(B))}),p.setupLights();const Y=new Set;return b.traverse(function(B){if(!(B.isMesh||B.isPoints||B.isLine||B.isSprite))return;const vt=B.material;if(vt)if(Array.isArray(vt))for(let Dt=0;Dt<vt.length;Dt++){const Bt=vt[Dt];pe(Bt,q,B),Y.add(Bt)}else pe(vt,q,B),Y.add(vt)}),y.pop(),p=null,Y},this.compileAsync=function(b,z,q=null){const Y=this.compile(b,z,q);return new Promise(B=>{function vt(){if(Y.forEach(function(Dt){dt.get(Dt).currentProgram.isReady()&&Y.delete(Dt)}),Y.size===0){B(b);return}setTimeout(vt,10)}H.get("KHR_parallel_shader_compile")!==null?vt():setTimeout(vt,10)})};let gn=null;function kn(b){gn&&gn(b)}function Zc(){xi.stop()}function Jc(){xi.start()}const xi=new cu;xi.setAnimationLoop(kn),typeof self<"u"&&xi.setContext(self),this.setAnimationLoop=function(b){gn=b,st.setAnimationLoop(b),b===null?xi.stop():xi.start()},st.addEventListener("sessionstart",Zc),st.addEventListener("sessionend",Jc),this.render=function(b,z){if(z!==void 0&&z.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(D===!0)return;if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),z.parent===null&&z.matrixWorldAutoUpdate===!0&&z.updateMatrixWorld(),st.enabled===!0&&st.isPresenting===!0&&(st.cameraAutoUpdate===!0&&st.updateCamera(z),z=st.getCamera()),b.isScene===!0&&b.onBeforeRender(v,b,z,P),p=ne.get(b,y.length),p.init(z),y.push(p),rt.multiplyMatrices(z.projectionMatrix,z.matrixWorldInverse),et.setFromProjectionMatrix(rt),Rt=this.localClippingEnabled,ft=pt.init(this.clippingPlanes,Rt),g=Lt.get(b,S.length),g.init(),S.push(g),st.enabled===!0&&st.isPresenting===!0){const vt=v.xr.getDepthSensingMesh();vt!==null&&wr(vt,z,-1/0,v.sortObjects)}wr(b,z,0,v.sortObjects),g.finish(),v.sortObjects===!0&&g.sort(_t,Mt),W=st.enabled===!1||st.isPresenting===!1||st.hasDepthSensing()===!1,W&&Xt.addToRenderList(g,b),this.info.render.frame++,ft===!0&&pt.beginShadows();const q=p.state.shadowsArray;Pt.render(q,b,z),ft===!0&&pt.endShadows(),this.info.autoReset===!0&&this.info.reset();const Y=g.opaque,B=g.transmissive;if(p.setupLights(),z.isArrayCamera){const vt=z.cameras;if(B.length>0)for(let Dt=0,Bt=vt.length;Dt<Bt;Dt++){const kt=vt[Dt];jc(Y,B,b,kt)}W&&Xt.render(b);for(let Dt=0,Bt=vt.length;Dt<Bt;Dt++){const kt=vt[Dt];Kc(g,b,kt,kt.viewport)}}else B.length>0&&jc(Y,B,b,z),W&&Xt.render(b),Kc(g,b,z);P!==null&&(A.updateMultisampleRenderTarget(P),A.updateRenderTargetMipmap(P)),b.isScene===!0&&b.onAfterRender(v,b,z),ve.resetDefaultState(),E=-1,x=null,y.pop(),y.length>0?(p=y[y.length-1],ft===!0&&pt.setGlobalState(v.clippingPlanes,p.state.camera)):p=null,S.pop(),S.length>0?g=S[S.length-1]:g=null};function wr(b,z,q,Y){if(b.visible===!1)return;if(b.layers.test(z.layers)){if(b.isGroup)q=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(z);else if(b.isLight)p.pushLight(b),b.castShadow&&p.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||et.intersectsSprite(b)){Y&&Tt.setFromMatrixPosition(b.matrixWorld).applyMatrix4(rt);const Dt=ot.update(b),Bt=b.material;Bt.visible&&g.push(b,Dt,Bt,q,Tt.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||et.intersectsObject(b))){const Dt=ot.update(b),Bt=b.material;if(Y&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),Tt.copy(b.boundingSphere.center)):(Dt.boundingSphere===null&&Dt.computeBoundingSphere(),Tt.copy(Dt.boundingSphere.center)),Tt.applyMatrix4(b.matrixWorld).applyMatrix4(rt)),Array.isArray(Bt)){const kt=Dt.groups;for(let $t=0,Kt=kt.length;$t<Kt;$t++){const Ht=kt[$t],re=Bt[Ht.materialIndex];re&&re.visible&&g.push(b,Dt,re,q,Tt.z,Ht)}}else Bt.visible&&g.push(b,Dt,Bt,q,Tt.z,null)}}const vt=b.children;for(let Dt=0,Bt=vt.length;Dt<Bt;Dt++)wr(vt[Dt],z,q,Y)}function Kc(b,z,q,Y){const B=b.opaque,vt=b.transmissive,Dt=b.transparent;p.setupLightsView(q),ft===!0&&pt.setGlobalState(v.clippingPlanes,q),Y&&Z.viewport(R.copy(Y)),B.length>0&&ro(B,z,q),vt.length>0&&ro(vt,z,q),Dt.length>0&&ro(Dt,z,q),Z.buffers.depth.setTest(!0),Z.buffers.depth.setMask(!0),Z.buffers.color.setMask(!0),Z.setPolygonOffset(!1)}function jc(b,z,q,Y){if((q.isScene===!0?q.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[Y.id]===void 0&&(p.state.transmissionRenderTarget[Y.id]=new zi(1,1,{generateMipmaps:!0,type:H.has("EXT_color_buffer_half_float")||H.has("EXT_color_buffer_float")?Qs:Jn,minFilter:Di,samples:4,stencilBuffer:o,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:oe.workingColorSpace}));const vt=p.state.transmissionRenderTarget[Y.id],Dt=Y.viewport||R;vt.setSize(Dt.z,Dt.w);const Bt=v.getRenderTarget();v.setRenderTarget(vt),v.getClearColor(V),tt=v.getClearAlpha(),tt<1&&v.setClearColor(16777215,.5),v.clear(),W&&Xt.render(q);const kt=v.toneMapping;v.toneMapping=gi;const $t=Y.viewport;if(Y.viewport!==void 0&&(Y.viewport=void 0),p.setupLightsView(Y),ft===!0&&pt.setGlobalState(v.clippingPlanes,Y),ro(b,q,Y),A.updateMultisampleRenderTarget(vt),A.updateRenderTargetMipmap(vt),H.has("WEBGL_multisampled_render_to_texture")===!1){let Kt=!1;for(let Ht=0,re=z.length;Ht<re;Ht++){const xe=z[Ht],we=xe.object,sn=xe.geometry,he=xe.material,Gt=xe.group;if(he.side===le&&we.layers.test(Y.layers)){const Hn=he.side;he.side=Xe,he.needsUpdate=!0,Qc(we,q,Y,sn,he,Gt),he.side=Hn,he.needsUpdate=!0,Kt=!0}}Kt===!0&&(A.updateMultisampleRenderTarget(vt),A.updateRenderTargetMipmap(vt))}v.setRenderTarget(Bt),v.setClearColor(V,tt),$t!==void 0&&(Y.viewport=$t),v.toneMapping=kt}function ro(b,z,q){const Y=z.isScene===!0?z.overrideMaterial:null;for(let B=0,vt=b.length;B<vt;B++){const Dt=b[B],Bt=Dt.object,kt=Dt.geometry,$t=Y===null?Dt.material:Y,Kt=Dt.group;Bt.layers.test(q.layers)&&Qc(Bt,z,q,kt,$t,Kt)}}function Qc(b,z,q,Y,B,vt){b.onBeforeRender(v,z,q,Y,B,vt),b.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),B.onBeforeRender(v,z,q,Y,b,vt),B.transparent===!0&&B.side===le&&B.forceSinglePass===!1?(B.side=Xe,B.needsUpdate=!0,v.renderBufferDirect(q,z,Y,B,b,vt),B.side=_i,B.needsUpdate=!0,v.renderBufferDirect(q,z,Y,B,b,vt),B.side=le):v.renderBufferDirect(q,z,Y,B,b,vt),b.onAfterRender(v,z,q,Y,B,vt)}function ao(b,z,q){z.isScene!==!0&&(z=ct);const Y=dt.get(b),B=p.state.lights,vt=p.state.shadowsArray,Dt=B.state.version,Bt=Ft.getParameters(b,B.state,vt,z,q),kt=Ft.getProgramCacheKey(Bt);let $t=Y.programs;Y.environment=b.isMeshStandardMaterial?z.environment:null,Y.fog=z.fog,Y.envMap=(b.isMeshStandardMaterial?G:M).get(b.envMap||Y.environment),Y.envMapRotation=Y.environment!==null&&b.envMap===null?z.environmentRotation:b.envMapRotation,$t===void 0&&(b.addEventListener("dispose",Jt),$t=new Map,Y.programs=$t);let Kt=$t.get(kt);if(Kt!==void 0){if(Y.currentProgram===Kt&&Y.lightsStateVersion===Dt)return el(b,Bt),Kt}else Bt.uniforms=Ft.getUniforms(b),b.onBeforeCompile(Bt,v),Kt=Ft.acquireProgram(Bt,kt),$t.set(kt,Kt),Y.uniforms=Bt.uniforms;const Ht=Y.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(Ht.clippingPlanes=pt.uniform),el(b,Bt),Y.needsLights=fd(b),Y.lightsStateVersion=Dt,Y.needsLights&&(Ht.ambientLightColor.value=B.state.ambient,Ht.lightProbe.value=B.state.probe,Ht.directionalLights.value=B.state.directional,Ht.directionalLightShadows.value=B.state.directionalShadow,Ht.spotLights.value=B.state.spot,Ht.spotLightShadows.value=B.state.spotShadow,Ht.rectAreaLights.value=B.state.rectArea,Ht.ltc_1.value=B.state.rectAreaLTC1,Ht.ltc_2.value=B.state.rectAreaLTC2,Ht.pointLights.value=B.state.point,Ht.pointLightShadows.value=B.state.pointShadow,Ht.hemisphereLights.value=B.state.hemi,Ht.directionalShadowMap.value=B.state.directionalShadowMap,Ht.directionalShadowMatrix.value=B.state.directionalShadowMatrix,Ht.spotShadowMap.value=B.state.spotShadowMap,Ht.spotLightMatrix.value=B.state.spotLightMatrix,Ht.spotLightMap.value=B.state.spotLightMap,Ht.pointShadowMap.value=B.state.pointShadowMap,Ht.pointShadowMatrix.value=B.state.pointShadowMatrix),Y.currentProgram=Kt,Y.uniformsList=null,Kt}function tl(b){if(b.uniformsList===null){const z=b.currentProgram.getUniforms();b.uniformsList=Yo.seqWithValue(z.seq,b.uniforms)}return b.uniformsList}function el(b,z){const q=dt.get(b);q.outputColorSpace=z.outputColorSpace,q.batching=z.batching,q.batchingColor=z.batchingColor,q.instancing=z.instancing,q.instancingColor=z.instancingColor,q.instancingMorph=z.instancingMorph,q.skinning=z.skinning,q.morphTargets=z.morphTargets,q.morphNormals=z.morphNormals,q.morphColors=z.morphColors,q.morphTargetsCount=z.morphTargetsCount,q.numClippingPlanes=z.numClippingPlanes,q.numIntersection=z.numClipIntersection,q.vertexAlphas=z.vertexAlphas,q.vertexTangents=z.vertexTangents,q.toneMapping=z.toneMapping}function ud(b,z,q,Y,B){z.isScene!==!0&&(z=ct),A.resetTextureUnits();const vt=z.fog,Dt=Y.isMeshStandardMaterial?z.environment:null,Bt=P===null?v.outputColorSpace:P.isXRRenderTarget===!0?P.texture.colorSpace:Ms,kt=(Y.isMeshStandardMaterial?G:M).get(Y.envMap||Dt),$t=Y.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,Kt=!!q.attributes.tangent&&(!!Y.normalMap||Y.anisotropy>0),Ht=!!q.morphAttributes.position,re=!!q.morphAttributes.normal,xe=!!q.morphAttributes.color;let we=gi;Y.toneMapped&&(P===null||P.isXRRenderTarget===!0)&&(we=v.toneMapping);const sn=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,he=sn!==void 0?sn.length:0,Gt=dt.get(Y),Hn=p.state.lights;if(ft===!0&&(Rt===!0||b!==x)){const pn=b===x&&Y.id===E;pt.setState(Y,b,pn)}let ue=!1;Y.version===Gt.__version?(Gt.needsLights&&Gt.lightsStateVersion!==Hn.state.version||Gt.outputColorSpace!==Bt||B.isBatchedMesh&&Gt.batching===!1||!B.isBatchedMesh&&Gt.batching===!0||B.isBatchedMesh&&Gt.batchingColor===!0&&B.colorTexture===null||B.isBatchedMesh&&Gt.batchingColor===!1&&B.colorTexture!==null||B.isInstancedMesh&&Gt.instancing===!1||!B.isInstancedMesh&&Gt.instancing===!0||B.isSkinnedMesh&&Gt.skinning===!1||!B.isSkinnedMesh&&Gt.skinning===!0||B.isInstancedMesh&&Gt.instancingColor===!0&&B.instanceColor===null||B.isInstancedMesh&&Gt.instancingColor===!1&&B.instanceColor!==null||B.isInstancedMesh&&Gt.instancingMorph===!0&&B.morphTexture===null||B.isInstancedMesh&&Gt.instancingMorph===!1&&B.morphTexture!==null||Gt.envMap!==kt||Y.fog===!0&&Gt.fog!==vt||Gt.numClippingPlanes!==void 0&&(Gt.numClippingPlanes!==pt.numPlanes||Gt.numIntersection!==pt.numIntersection)||Gt.vertexAlphas!==$t||Gt.vertexTangents!==Kt||Gt.morphTargets!==Ht||Gt.morphNormals!==re||Gt.morphColors!==xe||Gt.toneMapping!==we||Gt.morphTargetsCount!==he)&&(ue=!0):(ue=!0,Gt.__version=Y.version);let _n=Gt.currentProgram;ue===!0&&(_n=ao(Y,z,B));let Vi=!1,an=!1,bs=!1;const Se=_n.getUniforms(),Ln=Gt.uniforms;if(Z.useProgram(_n.program)&&(Vi=!0,an=!0,bs=!0),Y.id!==E&&(E=Y.id,an=!0),Vi||x!==b){Z.buffers.depth.getReversed()?(X.copy(b.projectionMatrix),sf(X),of(X),Se.setValue(L,"projectionMatrix",X)):Se.setValue(L,"projectionMatrix",b.projectionMatrix),Se.setValue(L,"viewMatrix",b.matrixWorldInverse);const ei=Se.map.cameraPosition;ei!==void 0&&ei.setValue(L,xt.setFromMatrixPosition(b.matrixWorld)),K.logarithmicDepthBuffer&&Se.setValue(L,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(Y.isMeshPhongMaterial||Y.isMeshToonMaterial||Y.isMeshLambertMaterial||Y.isMeshBasicMaterial||Y.isMeshStandardMaterial||Y.isShaderMaterial)&&Se.setValue(L,"isOrthographic",b.isOrthographicCamera===!0),x!==b&&(x=b,an=!0,bs=!0)}if(B.isSkinnedMesh){Se.setOptional(L,B,"bindMatrix"),Se.setOptional(L,B,"bindMatrixInverse");const pn=B.skeleton;pn&&(pn.boneTexture===null&&pn.computeBoneTexture(),Se.setValue(L,"boneTexture",pn.boneTexture,A))}B.isBatchedMesh&&(Se.setOptional(L,B,"batchingTexture"),Se.setValue(L,"batchingTexture",B._matricesTexture,A),Se.setOptional(L,B,"batchingIdTexture"),Se.setValue(L,"batchingIdTexture",B._indirectTexture,A),Se.setOptional(L,B,"batchingColorTexture"),B._colorsTexture!==null&&Se.setValue(L,"batchingColorTexture",B._colorsTexture,A));const As=q.morphAttributes;if((As.position!==void 0||As.normal!==void 0||As.color!==void 0)&&qt.update(B,q,_n),(an||Gt.receiveShadow!==B.receiveShadow)&&(Gt.receiveShadow=B.receiveShadow,Se.setValue(L,"receiveShadow",B.receiveShadow)),Y.isMeshGouraudMaterial&&Y.envMap!==null&&(Ln.envMap.value=kt,Ln.flipEnvMap.value=kt.isCubeTexture&&kt.isRenderTargetTexture===!1?-1:1),Y.isMeshStandardMaterial&&Y.envMap===null&&z.environment!==null&&(Ln.envMapIntensity.value=z.environmentIntensity),an&&(Se.setValue(L,"toneMappingExposure",v.toneMappingExposure),Gt.needsLights&&dd(Ln,bs),vt&&Y.fog===!0&&Et.refreshFogUniforms(Ln,vt),Et.refreshMaterialUniforms(Ln,Y,k,Q,p.state.transmissionRenderTarget[b.id]),Yo.upload(L,tl(Gt),Ln,A)),Y.isShaderMaterial&&Y.uniformsNeedUpdate===!0&&(Yo.upload(L,tl(Gt),Ln,A),Y.uniformsNeedUpdate=!1),Y.isSpriteMaterial&&Se.setValue(L,"center",B.center),Se.setValue(L,"modelViewMatrix",B.modelViewMatrix),Se.setValue(L,"normalMatrix",B.normalMatrix),Se.setValue(L,"modelMatrix",B.matrixWorld),Y.isShaderMaterial||Y.isRawShaderMaterial){const pn=Y.uniformsGroups;for(let ei=0,ni=pn.length;ei<ni;ei++){const nl=pn[ei];F.update(nl,_n),F.bind(nl,_n)}}return _n}function dd(b,z){b.ambientLightColor.needsUpdate=z,b.lightProbe.needsUpdate=z,b.directionalLights.needsUpdate=z,b.directionalLightShadows.needsUpdate=z,b.pointLights.needsUpdate=z,b.pointLightShadows.needsUpdate=z,b.spotLights.needsUpdate=z,b.spotLightShadows.needsUpdate=z,b.rectAreaLights.needsUpdate=z,b.hemisphereLights.needsUpdate=z}function fd(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return T},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return P},this.setRenderTargetTextures=function(b,z,q){dt.get(b.texture).__webglTexture=z,dt.get(b.depthTexture).__webglTexture=q;const Y=dt.get(b);Y.__hasExternalTextures=!0,Y.__autoAllocateDepthBuffer=q===void 0,Y.__autoAllocateDepthBuffer||H.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),Y.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(b,z){const q=dt.get(b);q.__webglFramebuffer=z,q.__useDefaultFramebuffer=z===void 0},this.setRenderTarget=function(b,z=0,q=0){P=b,T=z,C=q;let Y=!0,B=null,vt=!1,Dt=!1;if(b){const kt=dt.get(b);if(kt.__useDefaultFramebuffer!==void 0)Z.bindFramebuffer(L.FRAMEBUFFER,null),Y=!1;else if(kt.__webglFramebuffer===void 0)A.setupRenderTarget(b);else if(kt.__hasExternalTextures)A.rebindTextures(b,dt.get(b.texture).__webglTexture,dt.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){const Ht=b.depthTexture;if(kt.__boundDepthTexture!==Ht){if(Ht!==null&&dt.has(Ht)&&(b.width!==Ht.image.width||b.height!==Ht.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");A.setupDepthRenderbuffer(b)}}const $t=b.texture;($t.isData3DTexture||$t.isDataArrayTexture||$t.isCompressedArrayTexture)&&(Dt=!0);const Kt=dt.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(Kt[z])?B=Kt[z][q]:B=Kt[z],vt=!0):b.samples>0&&A.useMultisampledRTT(b)===!1?B=dt.get(b).__webglMultisampledFramebuffer:Array.isArray(Kt)?B=Kt[q]:B=Kt,R.copy(b.viewport),O.copy(b.scissor),N=b.scissorTest}else R.copy(bt).multiplyScalar(k).floor(),O.copy(Wt).multiplyScalar(k).floor(),N=Yt;if(Z.bindFramebuffer(L.FRAMEBUFFER,B)&&Y&&Z.drawBuffers(b,B),Z.viewport(R),Z.scissor(O),Z.setScissorTest(N),vt){const kt=dt.get(b.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+z,kt.__webglTexture,q)}else if(Dt){const kt=dt.get(b.texture),$t=z||0;L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,kt.__webglTexture,q||0,$t)}E=-1},this.readRenderTargetPixels=function(b,z,q,Y,B,vt,Dt){if(!(b&&b.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Bt=dt.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Dt!==void 0&&(Bt=Bt[Dt]),Bt){Z.bindFramebuffer(L.FRAMEBUFFER,Bt);try{const kt=b.texture,$t=kt.format,Kt=kt.type;if(!K.textureFormatReadable($t)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!K.textureTypeReadable(Kt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}z>=0&&z<=b.width-Y&&q>=0&&q<=b.height-B&&L.readPixels(z,q,Y,B,te.convert($t),te.convert(Kt),vt)}finally{const kt=P!==null?dt.get(P).__webglFramebuffer:null;Z.bindFramebuffer(L.FRAMEBUFFER,kt)}}},this.readRenderTargetPixelsAsync=async function(b,z,q,Y,B,vt,Dt){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Bt=dt.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Dt!==void 0&&(Bt=Bt[Dt]),Bt){const kt=b.texture,$t=kt.format,Kt=kt.type;if(!K.textureFormatReadable($t))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!K.textureTypeReadable(Kt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(z>=0&&z<=b.width-Y&&q>=0&&q<=b.height-B){Z.bindFramebuffer(L.FRAMEBUFFER,Bt);const Ht=L.createBuffer();L.bindBuffer(L.PIXEL_PACK_BUFFER,Ht),L.bufferData(L.PIXEL_PACK_BUFFER,vt.byteLength,L.STREAM_READ),L.readPixels(z,q,Y,B,te.convert($t),te.convert(Kt),0);const re=P!==null?dt.get(P).__webglFramebuffer:null;Z.bindFramebuffer(L.FRAMEBUFFER,re);const xe=L.fenceSync(L.SYNC_GPU_COMMANDS_COMPLETE,0);return L.flush(),await nf(L,xe,4),L.bindBuffer(L.PIXEL_PACK_BUFFER,Ht),L.getBufferSubData(L.PIXEL_PACK_BUFFER,0,vt),L.deleteBuffer(Ht),L.deleteSync(xe),vt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(b,z=null,q=0){b.isTexture!==!0&&(Hs("WebGLRenderer: copyFramebufferToTexture function signature has changed."),z=arguments[0]||null,b=arguments[1]);const Y=Math.pow(2,-q),B=Math.floor(b.image.width*Y),vt=Math.floor(b.image.height*Y),Dt=z!==null?z.x:0,Bt=z!==null?z.y:0;A.setTexture2D(b,0),L.copyTexSubImage2D(L.TEXTURE_2D,q,0,0,Dt,Bt,B,vt),Z.unbindTexture()},this.copyTextureToTexture=function(b,z,q=null,Y=null,B=0){b.isTexture!==!0&&(Hs("WebGLRenderer: copyTextureToTexture function signature has changed."),Y=arguments[0]||null,b=arguments[1],z=arguments[2],B=arguments[3]||0,q=null);let vt,Dt,Bt,kt,$t,Kt,Ht,re,xe;const we=b.isCompressedTexture?b.mipmaps[B]:b.image;q!==null?(vt=q.max.x-q.min.x,Dt=q.max.y-q.min.y,Bt=q.isBox3?q.max.z-q.min.z:1,kt=q.min.x,$t=q.min.y,Kt=q.isBox3?q.min.z:0):(vt=we.width,Dt=we.height,Bt=we.depth||1,kt=0,$t=0,Kt=0),Y!==null?(Ht=Y.x,re=Y.y,xe=Y.z):(Ht=0,re=0,xe=0);const sn=te.convert(z.format),he=te.convert(z.type);let Gt;z.isData3DTexture?(A.setTexture3D(z,0),Gt=L.TEXTURE_3D):z.isDataArrayTexture||z.isCompressedArrayTexture?(A.setTexture2DArray(z,0),Gt=L.TEXTURE_2D_ARRAY):(A.setTexture2D(z,0),Gt=L.TEXTURE_2D),L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,z.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,z.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,z.unpackAlignment);const Hn=L.getParameter(L.UNPACK_ROW_LENGTH),ue=L.getParameter(L.UNPACK_IMAGE_HEIGHT),_n=L.getParameter(L.UNPACK_SKIP_PIXELS),Vi=L.getParameter(L.UNPACK_SKIP_ROWS),an=L.getParameter(L.UNPACK_SKIP_IMAGES);L.pixelStorei(L.UNPACK_ROW_LENGTH,we.width),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,we.height),L.pixelStorei(L.UNPACK_SKIP_PIXELS,kt),L.pixelStorei(L.UNPACK_SKIP_ROWS,$t),L.pixelStorei(L.UNPACK_SKIP_IMAGES,Kt);const bs=b.isDataArrayTexture||b.isData3DTexture,Se=z.isDataArrayTexture||z.isData3DTexture;if(b.isRenderTargetTexture||b.isDepthTexture){const Ln=dt.get(b),As=dt.get(z),pn=dt.get(Ln.__renderTarget),ei=dt.get(As.__renderTarget);Z.bindFramebuffer(L.READ_FRAMEBUFFER,pn.__webglFramebuffer),Z.bindFramebuffer(L.DRAW_FRAMEBUFFER,ei.__webglFramebuffer);for(let ni=0;ni<Bt;ni++)bs&&L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,dt.get(b).__webglTexture,B,Kt+ni),b.isDepthTexture?(Se&&L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,dt.get(z).__webglTexture,B,xe+ni),L.blitFramebuffer(kt,$t,vt,Dt,Ht,re,vt,Dt,L.DEPTH_BUFFER_BIT,L.NEAREST)):Se?L.copyTexSubImage3D(Gt,B,Ht,re,xe+ni,kt,$t,vt,Dt):L.copyTexSubImage2D(Gt,B,Ht,re,xe+ni,kt,$t,vt,Dt);Z.bindFramebuffer(L.READ_FRAMEBUFFER,null),Z.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else Se?b.isDataTexture||b.isData3DTexture?L.texSubImage3D(Gt,B,Ht,re,xe,vt,Dt,Bt,sn,he,we.data):z.isCompressedArrayTexture?L.compressedTexSubImage3D(Gt,B,Ht,re,xe,vt,Dt,Bt,sn,we.data):L.texSubImage3D(Gt,B,Ht,re,xe,vt,Dt,Bt,sn,he,we):b.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,B,Ht,re,vt,Dt,sn,he,we.data):b.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,B,Ht,re,we.width,we.height,sn,we.data):L.texSubImage2D(L.TEXTURE_2D,B,Ht,re,vt,Dt,sn,he,we);L.pixelStorei(L.UNPACK_ROW_LENGTH,Hn),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,ue),L.pixelStorei(L.UNPACK_SKIP_PIXELS,_n),L.pixelStorei(L.UNPACK_SKIP_ROWS,Vi),L.pixelStorei(L.UNPACK_SKIP_IMAGES,an),B===0&&z.generateMipmaps&&L.generateMipmap(Gt),Z.unbindTexture()},this.copyTextureToTexture3D=function(b,z,q=null,Y=null,B=0){return b.isTexture!==!0&&(Hs("WebGLRenderer: copyTextureToTexture3D function signature has changed."),q=arguments[0]||null,Y=arguments[1]||null,b=arguments[2],z=arguments[3],B=arguments[4]||0),Hs('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(b,z,q,Y,B)},this.initRenderTarget=function(b){dt.get(b).__webglFramebuffer===void 0&&A.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?A.setTextureCube(b,0):b.isData3DTexture?A.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?A.setTexture2DArray(b,0):A.setTexture2D(b,0),Z.unbindTexture()},this.resetState=function(){T=0,C=0,P=null,Z.reset(),ve.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return $n}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorspace=oe._getDrawingBufferColorSpace(t),e.unpackColorSpace=oe._getUnpackColorSpace()}}class Fc{constructor(t,e=25e-5){this.isFogExp2=!0,this.name="",this.color=new St(t),this.density=e}clone(){return new Fc(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class Oc{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new St(t),this.near=e,this.far=n}clone(){return new Oc(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class $s extends Be{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new bn,this.environmentIntensity=1,this.environmentRotation=new bn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class p1 extends tn{constructor(t=null,e=1,n=1,s,o,r,a,c,l=un,h=un,u,d){super(null,r,a,c,l,h,s,o,u,d),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Vs extends dn{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const ss=new fe,th=new fe,Lo=[],eh=new Qn,m1=new fe,Ds=new w,Us=new Es;class Qr extends w{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Vs(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,m1)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Qn),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,ss),eh.copy(t.boundingBox).applyMatrix4(ss),this.boundingBox.union(eh)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Es),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,ss),Us.copy(t.boundingSphere).applyMatrix4(ss),this.boundingSphere.union(Us)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,o=n.length+1,r=t*o+1;for(let a=0;a<n.length;a++)n[a]=s[r+a]}raycast(t,e){const n=this.matrixWorld,s=this.count;if(Ds.geometry=this.geometry,Ds.material=this.material,Ds.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Us.copy(this.boundingSphere),Us.applyMatrix4(n),t.ray.intersectsSphere(Us)!==!1))for(let o=0;o<s;o++){this.getMatrixAt(o,ss),th.multiplyMatrices(n,ss),Ds.matrixWorld=th,Ds.raycast(t,Lo);for(let r=0,a=Lo.length;r<a;r++){const c=Lo[r];c.instanceId=o,c.object=this,e.push(c)}Lo.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new Vs(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){const n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new p1(new Float32Array(s*this.count),s,this.count,bc,Fn));const o=this.morphTexture.source.data.data;let r=0;for(let l=0;l<n.length;l++)r+=n[l];const a=this.geometry.morphTargetsRelative?1:1-r,c=s*t;o[c]=a,o.set(n,c+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class mu extends ki{static get type(){return"LineBasicMaterial"}constructor(t){super(),this.isLineBasicMaterial=!0,this.color=new St(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const Ko=new I,jo=new I,nh=new fe,Ns=new Pc,Po=new Es,ta=new I,ih=new I;class g1 extends Be{constructor(t=new Le,e=new mu){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let s=1,o=e.count;s<o;s++)Ko.fromBufferAttribute(e,s-1),jo.fromBufferAttribute(e,s),n[s]=n[s-1],n[s]+=Ko.distanceTo(jo);t.setAttribute("lineDistance",new Zt(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const n=this.geometry,s=this.matrixWorld,o=t.params.Line.threshold,r=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Po.copy(n.boundingSphere),Po.applyMatrix4(s),Po.radius+=o,t.ray.intersectsSphere(Po)===!1)return;nh.copy(s).invert(),Ns.copy(t.ray).applyMatrix4(nh);const a=o/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=this.isLineSegments?2:1,h=n.index,d=n.attributes.position;if(h!==null){const f=Math.max(0,r.start),m=Math.min(h.count,r.start+r.count);for(let _=f,g=m-1;_<g;_+=l){const p=h.getX(_),S=h.getX(_+1),y=Io(this,t,Ns,c,p,S);y&&e.push(y)}if(this.isLineLoop){const _=h.getX(m-1),g=h.getX(f),p=Io(this,t,Ns,c,_,g);p&&e.push(p)}}else{const f=Math.max(0,r.start),m=Math.min(d.count,r.start+r.count);for(let _=f,g=m-1;_<g;_+=l){const p=Io(this,t,Ns,c,_,_+1);p&&e.push(p)}if(this.isLineLoop){const _=Io(this,t,Ns,c,m-1,f);_&&e.push(_)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,r=s.length;o<r;o++){const a=s[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=o}}}}}function Io(i,t,e,n,s,o){const r=i.geometry.attributes.position;if(Ko.fromBufferAttribute(r,s),jo.fromBufferAttribute(r,o),e.distanceSqToSegment(Ko,jo,ta,ih)>n)return;ta.applyMatrix4(i.matrixWorld);const c=t.ray.origin.distanceTo(ta);if(!(c<t.near||c>t.far))return{distance:c,point:ih.clone().applyMatrix4(i.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:i}}const sh=new I,oh=new I;class _1 extends g1{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[];for(let s=0,o=e.count;s<o;s+=2)sh.fromBufferAttribute(e,s),oh.fromBufferAttribute(e,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+sh.distanceTo(oh);t.setAttribute("lineDistance",new Zt(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class zc extends tn{constructor(t,e,n,s,o,r,a,c,l){super(t,e,n,s,o,r,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Bn{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,s=this.getPoint(0),o=0;e.push(0);for(let r=1;r<=t;r++)n=this.getPoint(r/t),o+=n.distanceTo(s),e.push(o),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){const n=this.getLengths();let s=0;const o=n.length;let r;e?r=e:r=t*n[o-1];let a=0,c=o-1,l;for(;a<=c;)if(s=Math.floor(a+(c-a)/2),l=n[s]-r,l<0)a=s+1;else if(l>0)c=s-1;else{c=s;break}if(s=c,n[s]===r)return s/(o-1);const h=n[s],d=n[s+1]-h,f=(r-h)/d;return(s+f)/(o-1)}getTangent(t,e){let s=t-1e-4,o=t+1e-4;s<0&&(s=0),o>1&&(o=1);const r=this.getPoint(s),a=this.getPoint(o),c=e||(r.isVector2?new gt:new I);return c.copy(a).sub(r).normalize(),c}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){const n=new I,s=[],o=[],r=[],a=new I,c=new fe;for(let f=0;f<=t;f++){const m=f/t;s[f]=this.getTangentAt(m,new I)}o[0]=new I,r[0]=new I;let l=Number.MAX_VALUE;const h=Math.abs(s[0].x),u=Math.abs(s[0].y),d=Math.abs(s[0].z);h<=l&&(l=h,n.set(1,0,0)),u<=l&&(l=u,n.set(0,1,0)),d<=l&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),o[0].crossVectors(s[0],a),r[0].crossVectors(s[0],o[0]);for(let f=1;f<=t;f++){if(o[f]=o[f-1].clone(),r[f]=r[f-1].clone(),a.crossVectors(s[f-1],s[f]),a.length()>Number.EPSILON){a.normalize();const m=Math.acos(ze(s[f-1].dot(s[f]),-1,1));o[f].applyMatrix4(c.makeRotationAxis(a,m))}r[f].crossVectors(s[f],o[f])}if(e===!0){let f=Math.acos(ze(o[0].dot(o[t]),-1,1));f/=t,s[0].dot(a.crossVectors(o[0],o[t]))>0&&(f=-f);for(let m=1;m<=t;m++)o[m].applyMatrix4(c.makeRotationAxis(s[m],f*m)),r[m].crossVectors(s[m],o[m])}return{tangents:s,normals:o,binormals:r}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class Bc extends Bn{constructor(t=0,e=0,n=1,s=1,o=0,r=Math.PI*2,a=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=o,this.aEndAngle=r,this.aClockwise=a,this.aRotation=c}getPoint(t,e=new gt){const n=e,s=Math.PI*2;let o=this.aEndAngle-this.aStartAngle;const r=Math.abs(o)<Number.EPSILON;for(;o<0;)o+=s;for(;o>s;)o-=s;o<Number.EPSILON&&(r?o=0:o=s),this.aClockwise===!0&&!r&&(o===s?o=-s:o=o-s);const a=this.aStartAngle+t*o;let c=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=c-this.aX,f=l-this.aY;c=d*h-f*u+this.aX,l=d*u+f*h+this.aY}return n.set(c,l)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class v1 extends Bc{constructor(t,e,n,s,o,r){super(t,e,n,n,s,o,r),this.isArcCurve=!0,this.type="ArcCurve"}}function kc(){let i=0,t=0,e=0,n=0;function s(o,r,a,c){i=o,t=a,e=-3*o+3*r-2*a-c,n=2*o-2*r+a+c}return{initCatmullRom:function(o,r,a,c,l){s(r,a,l*(a-o),l*(c-r))},initNonuniformCatmullRom:function(o,r,a,c,l,h,u){let d=(r-o)/l-(a-o)/(l+h)+(a-r)/h,f=(a-r)/h-(c-r)/(h+u)+(c-a)/u;d*=h,f*=h,s(r,a,d,f)},calc:function(o){const r=o*o,a=r*o;return i+t*o+e*r+n*a}}}const Do=new I,ea=new kc,na=new kc,ia=new kc;class x1 extends Bn{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new I){const n=e,s=this.points,o=s.length,r=(o-(this.closed?0:1))*t;let a=Math.floor(r),c=r-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/o)+1)*o:c===0&&a===o-1&&(a=o-2,c=1);let l,h;this.closed||a>0?l=s[(a-1)%o]:(Do.subVectors(s[0],s[1]).add(s[0]),l=Do);const u=s[a%o],d=s[(a+1)%o];if(this.closed||a+2<o?h=s[(a+2)%o]:(Do.subVectors(s[o-1],s[o-2]).add(s[o-1]),h=Do),this.curveType==="centripetal"||this.curveType==="chordal"){const f=this.curveType==="chordal"?.5:.25;let m=Math.pow(l.distanceToSquared(u),f),_=Math.pow(u.distanceToSquared(d),f),g=Math.pow(d.distanceToSquared(h),f);_<1e-4&&(_=1),m<1e-4&&(m=_),g<1e-4&&(g=_),ea.initNonuniformCatmullRom(l.x,u.x,d.x,h.x,m,_,g),na.initNonuniformCatmullRom(l.y,u.y,d.y,h.y,m,_,g),ia.initNonuniformCatmullRom(l.z,u.z,d.z,h.z,m,_,g)}else this.curveType==="catmullrom"&&(ea.initCatmullRom(l.x,u.x,d.x,h.x,this.tension),na.initCatmullRom(l.y,u.y,d.y,h.y,this.tension),ia.initCatmullRom(l.z,u.z,d.z,h.z,this.tension));return n.set(ea.calc(c),na.calc(c),ia.calc(c)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new I().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function rh(i,t,e,n,s){const o=(n-t)*.5,r=(s-e)*.5,a=i*i,c=i*a;return(2*e-2*n+o+r)*c+(-3*e+3*n-2*o-r)*a+o*i+e}function y1(i,t){const e=1-i;return e*e*t}function M1(i,t){return 2*(1-i)*i*t}function w1(i,t){return i*i*t}function Ws(i,t,e,n){return y1(i,t)+M1(i,e)+w1(i,n)}function S1(i,t){const e=1-i;return e*e*e*t}function E1(i,t){const e=1-i;return 3*e*e*i*t}function T1(i,t){return 3*(1-i)*i*i*t}function b1(i,t){return i*i*i*t}function Xs(i,t,e,n,s){return S1(i,t)+E1(i,e)+T1(i,n)+b1(i,s)}class gu extends Bn{constructor(t=new gt,e=new gt,n=new gt,s=new gt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new gt){const n=e,s=this.v0,o=this.v1,r=this.v2,a=this.v3;return n.set(Xs(t,s.x,o.x,r.x,a.x),Xs(t,s.y,o.y,r.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class A1 extends Bn{constructor(t=new I,e=new I,n=new I,s=new I){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new I){const n=e,s=this.v0,o=this.v1,r=this.v2,a=this.v3;return n.set(Xs(t,s.x,o.x,r.x,a.x),Xs(t,s.y,o.y,r.y,a.y),Xs(t,s.z,o.z,r.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class _u extends Bn{constructor(t=new gt,e=new gt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new gt){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new gt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class R1 extends Bn{constructor(t=new I,e=new I){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new I){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new I){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class vu extends Bn{constructor(t=new gt,e=new gt,n=new gt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new gt){const n=e,s=this.v0,o=this.v1,r=this.v2;return n.set(Ws(t,s.x,o.x,r.x),Ws(t,s.y,o.y,r.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Hc extends Bn{constructor(t=new I,e=new I,n=new I){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new I){const n=e,s=this.v0,o=this.v1,r=this.v2;return n.set(Ws(t,s.x,o.x,r.x),Ws(t,s.y,o.y,r.y),Ws(t,s.z,o.z,r.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class xu extends Bn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new gt){const n=e,s=this.points,o=(s.length-1)*t,r=Math.floor(o),a=o-r,c=s[r===0?r:r-1],l=s[r],h=s[r>s.length-2?s.length-1:r+1],u=s[r>s.length-3?s.length-1:r+2];return n.set(rh(a,c.x,l.x,h.x,u.x),rh(a,c.y,l.y,h.y,u.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new gt().fromArray(s))}return this}}var Qo=Object.freeze({__proto__:null,ArcCurve:v1,CatmullRomCurve3:x1,CubicBezierCurve:gu,CubicBezierCurve3:A1,EllipseCurve:Bc,LineCurve:_u,LineCurve3:R1,QuadraticBezierCurve:vu,QuadraticBezierCurve3:Hc,SplineCurve:xu});class C1 extends Bn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Qo[n](e,t))}return this}getPoint(t,e){const n=t*this.getLength(),s=this.getCurveLengths();let o=0;for(;o<s.length;){if(s[o]>=n){const r=s[o]-n,a=this.curves[o],c=a.getLength(),l=c===0?0:1-r/c;return a.getPointAt(l,e)}o++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let n;for(let s=0,o=this.curves;s<o.length;s++){const r=o[s],a=r.isEllipseCurve?t*2:r.isLineCurve||r.isLineCurve3?1:r.isSplineCurve?t*r.points.length:t,c=r.getPoints(a);for(let l=0;l<c.length;l++){const h=c[l];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){const s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const s=t.curves[e];this.curves.push(new Qo[s.type]().fromJSON(s))}return this}}class rc extends C1{constructor(t){super(),this.type="Path",this.currentPoint=new gt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const n=new _u(this.currentPoint.clone(),new gt(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){const o=new vu(this.currentPoint.clone(),new gt(t,e),new gt(n,s));return this.curves.push(o),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,o,r){const a=new gu(this.currentPoint.clone(),new gt(t,e),new gt(n,s),new gt(o,r));return this.curves.push(a),this.currentPoint.set(o,r),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),n=new xu(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,o,r){const a=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(t+a,e+c,n,s,o,r),this}absarc(t,e,n,s,o,r){return this.absellipse(t,e,n,n,s,o,r),this}ellipse(t,e,n,s,o,r,a,c){const l=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+l,e+h,n,s,o,r,a,c),this}absellipse(t,e,n,s,o,r,a,c){const l=new Bc(t,e,n,s,o,r,a,c);if(this.curves.length>0){const u=l.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(l);const h=l.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class eo extends Le{constructor(t=[new gt(0,-.5),new gt(.5,0),new gt(0,.5)],e=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:s},e=Math.floor(e),s=ze(s,0,Math.PI*2);const o=[],r=[],a=[],c=[],l=[],h=1/e,u=new I,d=new gt,f=new I,m=new I,_=new I;let g=0,p=0;for(let S=0;S<=t.length-1;S++)switch(S){case 0:g=t[S+1].x-t[S].x,p=t[S+1].y-t[S].y,f.x=p*1,f.y=-g,f.z=p*0,_.copy(f),f.normalize(),c.push(f.x,f.y,f.z);break;case t.length-1:c.push(_.x,_.y,_.z);break;default:g=t[S+1].x-t[S].x,p=t[S+1].y-t[S].y,f.x=p*1,f.y=-g,f.z=p*0,m.copy(f),f.x+=_.x,f.y+=_.y,f.z+=_.z,f.normalize(),c.push(f.x,f.y,f.z),_.copy(m)}for(let S=0;S<=e;S++){const y=n+S*h*s,v=Math.sin(y),D=Math.cos(y);for(let T=0;T<=t.length-1;T++){u.x=t[T].x*v,u.y=t[T].y,u.z=t[T].x*D,r.push(u.x,u.y,u.z),d.x=S/e,d.y=T/(t.length-1),a.push(d.x,d.y);const C=c[3*T+0]*v,P=c[3*T+1],E=c[3*T+0]*D;l.push(C,P,E)}}for(let S=0;S<e;S++)for(let y=0;y<t.length-1;y++){const v=y+S*t.length,D=v,T=v+t.length,C=v+t.length+1,P=v+1;o.push(D,T,P),o.push(C,P,T)}this.setIndex(o),this.setAttribute("position",new Zt(r,3)),this.setAttribute("uv",new Zt(a,2)),this.setAttribute("normal",new Zt(l,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new eo(t.points,t.segments,t.phiStart,t.phiLength)}}class be extends eo{constructor(t=1,e=1,n=4,s=8){const o=new rc;o.absarc(0,-e/2,t,Math.PI*1.5,0),o.absarc(0,e/2,t,0,Math.PI*.5),super(o.getPoints(n),s),this.type="CapsuleGeometry",this.parameters={radius:t,length:e,capSegments:n,radialSegments:s}}static fromJSON(t){return new be(t.radius,t.length,t.capSegments,t.radialSegments)}}class Cn extends Le{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);const o=[],r=[],a=[],c=[],l=new I,h=new gt;r.push(0,0,0),a.push(0,0,1),c.push(.5,.5);for(let u=0,d=3;u<=e;u++,d+=3){const f=n+u/e*s;l.x=t*Math.cos(f),l.y=t*Math.sin(f),r.push(l.x,l.y,l.z),a.push(0,0,1),h.x=(r[d]/t+1)/2,h.y=(r[d+1]/t+1)/2,c.push(h.x,h.y)}for(let u=1;u<=e;u++)o.push(u,u+1,0);this.setIndex(o),this.setAttribute("position",new Zt(r,3)),this.setAttribute("normal",new Zt(a,3)),this.setAttribute("uv",new Zt(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Cn(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class Vt extends Le{constructor(t=1,e=1,n=1,s=32,o=1,r=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:o,openEnded:r,thetaStart:a,thetaLength:c};const l=this;s=Math.floor(s),o=Math.floor(o);const h=[],u=[],d=[],f=[];let m=0;const _=[],g=n/2;let p=0;S(),r===!1&&(t>0&&y(!0),e>0&&y(!1)),this.setIndex(h),this.setAttribute("position",new Zt(u,3)),this.setAttribute("normal",new Zt(d,3)),this.setAttribute("uv",new Zt(f,2));function S(){const v=new I,D=new I;let T=0;const C=(e-t)/n;for(let P=0;P<=o;P++){const E=[],x=P/o,R=x*(e-t)+t;for(let O=0;O<=s;O++){const N=O/s,V=N*c+a,tt=Math.sin(V),$=Math.cos(V);D.x=R*tt,D.y=-x*n+g,D.z=R*$,u.push(D.x,D.y,D.z),v.set(tt,C,$).normalize(),d.push(v.x,v.y,v.z),f.push(N,1-x),E.push(m++)}_.push(E)}for(let P=0;P<s;P++)for(let E=0;E<o;E++){const x=_[E][P],R=_[E+1][P],O=_[E+1][P+1],N=_[E][P+1];(t>0||E!==0)&&(h.push(x,R,N),T+=3),(e>0||E!==o-1)&&(h.push(R,O,N),T+=3)}l.addGroup(p,T,0),p+=T}function y(v){const D=m,T=new gt,C=new I;let P=0;const E=v===!0?t:e,x=v===!0?1:-1;for(let O=1;O<=s;O++)u.push(0,g*x,0),d.push(0,x,0),f.push(.5,.5),m++;const R=m;for(let O=0;O<=s;O++){const V=O/s*c+a,tt=Math.cos(V),$=Math.sin(V);C.x=E*$,C.y=g*x,C.z=E*tt,u.push(C.x,C.y,C.z),d.push(0,x,0),T.x=tt*.5+.5,T.y=$*.5*x+.5,f.push(T.x,T.y),m++}for(let O=0;O<s;O++){const N=D+O,V=R+O;v===!0?h.push(V,V+1,N):h.push(V+1,V,N),P+=3}l.addGroup(p,P,v===!0?1:2),p+=P}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Vt(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Te extends Vt{constructor(t=1,e=1,n=32,s=1,o=!1,r=0,a=Math.PI*2){super(0,t,e,n,s,o,r,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:o,thetaStart:r,thetaLength:a}}static fromJSON(t){return new Te(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class no extends Le{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};const o=[],r=[];a(s),l(n),h(),this.setAttribute("position",new Zt(o,3)),this.setAttribute("normal",new Zt(o.slice(),3)),this.setAttribute("uv",new Zt(r,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(S){const y=new I,v=new I,D=new I;for(let T=0;T<e.length;T+=3)f(e[T+0],y),f(e[T+1],v),f(e[T+2],D),c(y,v,D,S)}function c(S,y,v,D){const T=D+1,C=[];for(let P=0;P<=T;P++){C[P]=[];const E=S.clone().lerp(v,P/T),x=y.clone().lerp(v,P/T),R=T-P;for(let O=0;O<=R;O++)O===0&&P===T?C[P][O]=E:C[P][O]=E.clone().lerp(x,O/R)}for(let P=0;P<T;P++)for(let E=0;E<2*(T-P)-1;E++){const x=Math.floor(E/2);E%2===0?(d(C[P][x+1]),d(C[P+1][x]),d(C[P][x])):(d(C[P][x+1]),d(C[P+1][x+1]),d(C[P+1][x]))}}function l(S){const y=new I;for(let v=0;v<o.length;v+=3)y.x=o[v+0],y.y=o[v+1],y.z=o[v+2],y.normalize().multiplyScalar(S),o[v+0]=y.x,o[v+1]=y.y,o[v+2]=y.z}function h(){const S=new I;for(let y=0;y<o.length;y+=3){S.x=o[y+0],S.y=o[y+1],S.z=o[y+2];const v=g(S)/2/Math.PI+.5,D=p(S)/Math.PI+.5;r.push(v,1-D)}m(),u()}function u(){for(let S=0;S<r.length;S+=6){const y=r[S+0],v=r[S+2],D=r[S+4],T=Math.max(y,v,D),C=Math.min(y,v,D);T>.9&&C<.1&&(y<.2&&(r[S+0]+=1),v<.2&&(r[S+2]+=1),D<.2&&(r[S+4]+=1))}}function d(S){o.push(S.x,S.y,S.z)}function f(S,y){const v=S*3;y.x=t[v+0],y.y=t[v+1],y.z=t[v+2]}function m(){const S=new I,y=new I,v=new I,D=new I,T=new gt,C=new gt,P=new gt;for(let E=0,x=0;E<o.length;E+=9,x+=6){S.set(o[E+0],o[E+1],o[E+2]),y.set(o[E+3],o[E+4],o[E+5]),v.set(o[E+6],o[E+7],o[E+8]),T.set(r[x+0],r[x+1]),C.set(r[x+2],r[x+3]),P.set(r[x+4],r[x+5]),D.copy(S).add(y).add(v).divideScalar(3);const R=g(D);_(T,x+0,S,R),_(C,x+2,y,R),_(P,x+4,v,R)}}function _(S,y,v,D){D<0&&S.x===1&&(r[y]=S.x-1),v.x===0&&v.z===0&&(r[y]=D/2/Math.PI+.5)}function g(S){return Math.atan2(S.z,-S.x)}function p(S){return Math.atan2(-S.y,Math.sqrt(S.x*S.x+S.z*S.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new no(t.vertices,t.indices,t.radius,t.details)}}class Kn extends no{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,s=1/n,o=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-s,-n,0,-s,n,0,s,-n,0,s,n,-s,-n,0,-s,n,0,s,-n,0,s,n,0,-n,0,-s,n,0,-s,-n,0,s,n,0,s],r=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(o,r,t,e),this.type="DodecahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new Kn(t.radius,t.detail)}}class pr extends rc{constructor(t){super(t),this.uuid=Ss(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let n=0,s=this.holes.length;n<s;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){const s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const s=t.holes[e];this.holes.push(new rc().fromJSON(s))}return this}}const L1={triangulate:function(i,t,e=2){const n=t&&t.length,s=n?t[0]*e:i.length;let o=yu(i,0,s,e,!0);const r=[];if(!o||o.next===o.prev)return r;let a,c,l,h,u,d,f;if(n&&(o=N1(i,t,o,e)),i.length>80*e){a=l=i[0],c=h=i[1];for(let m=e;m<s;m+=e)u=i[m],d=i[m+1],u<a&&(a=u),d<c&&(c=d),u>l&&(l=u),d>h&&(h=d);f=Math.max(l-a,h-c),f=f!==0?32767/f:0}return Zs(o,r,e,a,c,f,0),r}};function yu(i,t,e,n,s){let o,r;if(s===q1(i,t,e,n)>0)for(o=t;o<e;o+=n)r=ah(o,i[o],i[o+1],r);else for(o=e-n;o>=t;o-=n)r=ah(o,i[o],i[o+1],r);return r&&mr(r,r.next)&&(Ks(r),r=r.next),r}function Bi(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(mr(e,e.next)||Ae(e.prev,e,e.next)===0)){if(Ks(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function Zs(i,t,e,n,s,o,r){if(!i)return;!r&&o&&k1(i,n,s,o);let a=i,c,l;for(;i.prev!==i.next;){if(c=i.prev,l=i.next,o?I1(i,n,s,o):P1(i)){t.push(c.i/e|0),t.push(i.i/e|0),t.push(l.i/e|0),Ks(i),i=l.next,a=l.next;continue}if(i=l,i===a){r?r===1?(i=D1(Bi(i),t,e),Zs(i,t,e,n,s,o,2)):r===2&&U1(i,t,e,n,s,o):Zs(Bi(i),t,e,n,s,o,1);break}}}function P1(i){const t=i.prev,e=i,n=i.next;if(Ae(t,e,n)>=0)return!1;const s=t.x,o=e.x,r=n.x,a=t.y,c=e.y,l=n.y,h=s<o?s<r?s:r:o<r?o:r,u=a<c?a<l?a:l:c<l?c:l,d=s>o?s>r?s:r:o>r?o:r,f=a>c?a>l?a:l:c>l?c:l;let m=n.next;for(;m!==t;){if(m.x>=h&&m.x<=d&&m.y>=u&&m.y<=f&&cs(s,a,o,c,r,l,m.x,m.y)&&Ae(m.prev,m,m.next)>=0)return!1;m=m.next}return!0}function I1(i,t,e,n){const s=i.prev,o=i,r=i.next;if(Ae(s,o,r)>=0)return!1;const a=s.x,c=o.x,l=r.x,h=s.y,u=o.y,d=r.y,f=a<c?a<l?a:l:c<l?c:l,m=h<u?h<d?h:d:u<d?u:d,_=a>c?a>l?a:l:c>l?c:l,g=h>u?h>d?h:d:u>d?u:d,p=ac(f,m,t,e,n),S=ac(_,g,t,e,n);let y=i.prevZ,v=i.nextZ;for(;y&&y.z>=p&&v&&v.z<=S;){if(y.x>=f&&y.x<=_&&y.y>=m&&y.y<=g&&y!==s&&y!==r&&cs(a,h,c,u,l,d,y.x,y.y)&&Ae(y.prev,y,y.next)>=0||(y=y.prevZ,v.x>=f&&v.x<=_&&v.y>=m&&v.y<=g&&v!==s&&v!==r&&cs(a,h,c,u,l,d,v.x,v.y)&&Ae(v.prev,v,v.next)>=0))return!1;v=v.nextZ}for(;y&&y.z>=p;){if(y.x>=f&&y.x<=_&&y.y>=m&&y.y<=g&&y!==s&&y!==r&&cs(a,h,c,u,l,d,y.x,y.y)&&Ae(y.prev,y,y.next)>=0)return!1;y=y.prevZ}for(;v&&v.z<=S;){if(v.x>=f&&v.x<=_&&v.y>=m&&v.y<=g&&v!==s&&v!==r&&cs(a,h,c,u,l,d,v.x,v.y)&&Ae(v.prev,v,v.next)>=0)return!1;v=v.nextZ}return!0}function D1(i,t,e){let n=i;do{const s=n.prev,o=n.next.next;!mr(s,o)&&Mu(s,n,n.next,o)&&Js(s,o)&&Js(o,s)&&(t.push(s.i/e|0),t.push(n.i/e|0),t.push(o.i/e|0),Ks(n),Ks(n.next),n=i=o),n=n.next}while(n!==i);return Bi(n)}function U1(i,t,e,n,s,o){let r=i;do{let a=r.next.next;for(;a!==r.prev;){if(r.i!==a.i&&V1(r,a)){let c=wu(r,a);r=Bi(r,r.next),c=Bi(c,c.next),Zs(r,t,e,n,s,o,0),Zs(c,t,e,n,s,o,0);return}a=a.next}r=r.next}while(r!==i)}function N1(i,t,e,n){const s=[];let o,r,a,c,l;for(o=0,r=t.length;o<r;o++)a=t[o]*n,c=o<r-1?t[o+1]*n:i.length,l=yu(i,a,c,n,!1),l===l.next&&(l.steiner=!0),s.push(G1(l));for(s.sort(F1),o=0;o<s.length;o++)e=O1(s[o],e);return e}function F1(i,t){return i.x-t.x}function O1(i,t){const e=z1(i,t);if(!e)return t;const n=wu(e,i);return Bi(n,n.next),Bi(e,e.next)}function z1(i,t){let e=t,n=-1/0,s;const o=i.x,r=i.y;do{if(r<=e.y&&r>=e.next.y&&e.next.y!==e.y){const d=e.x+(r-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(d<=o&&d>n&&(n=d,s=e.x<e.next.x?e:e.next,d===o))return s}e=e.next}while(e!==t);if(!s)return null;const a=s,c=s.x,l=s.y;let h=1/0,u;e=s;do o>=e.x&&e.x>=c&&o!==e.x&&cs(r<l?o:n,r,c,l,r<l?n:o,r,e.x,e.y)&&(u=Math.abs(r-e.y)/(o-e.x),Js(e,i)&&(u<h||u===h&&(e.x>s.x||e.x===s.x&&B1(s,e)))&&(s=e,h=u)),e=e.next;while(e!==a);return s}function B1(i,t){return Ae(i.prev,i,t.prev)<0&&Ae(t.next,i,i.next)<0}function k1(i,t,e,n){let s=i;do s.z===0&&(s.z=ac(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,H1(s)}function H1(i){let t,e,n,s,o,r,a,c,l=1;do{for(e=i,i=null,o=null,r=0;e;){for(r++,n=e,a=0,t=0;t<l&&(a++,n=n.nextZ,!!n);t++);for(c=l;a>0||c>0&&n;)a!==0&&(c===0||!n||e.z<=n.z)?(s=e,e=e.nextZ,a--):(s=n,n=n.nextZ,c--),o?o.nextZ=s:i=s,s.prevZ=o,o=s;e=n}o.nextZ=null,l*=2}while(r>1);return i}function ac(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function G1(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function cs(i,t,e,n,s,o,r,a){return(s-r)*(t-a)>=(i-r)*(o-a)&&(i-r)*(n-a)>=(e-r)*(t-a)&&(e-r)*(o-a)>=(s-r)*(n-a)}function V1(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!W1(i,t)&&(Js(i,t)&&Js(t,i)&&X1(i,t)&&(Ae(i.prev,i,t.prev)||Ae(i,t.prev,t))||mr(i,t)&&Ae(i.prev,i,i.next)>0&&Ae(t.prev,t,t.next)>0)}function Ae(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function mr(i,t){return i.x===t.x&&i.y===t.y}function Mu(i,t,e,n){const s=No(Ae(i,t,e)),o=No(Ae(i,t,n)),r=No(Ae(e,n,i)),a=No(Ae(e,n,t));return!!(s!==o&&r!==a||s===0&&Uo(i,e,t)||o===0&&Uo(i,n,t)||r===0&&Uo(e,i,n)||a===0&&Uo(e,t,n))}function Uo(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function No(i){return i>0?1:i<0?-1:0}function W1(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&Mu(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function Js(i,t){return Ae(i.prev,i,i.next)<0?Ae(i,t,i.next)>=0&&Ae(i,i.prev,t)>=0:Ae(i,t,i.prev)<0||Ae(i,i.next,t)<0}function X1(i,t){let e=i,n=!1;const s=(i.x+t.x)/2,o=(i.y+t.y)/2;do e.y>o!=e.next.y>o&&e.next.y!==e.y&&s<(e.next.x-e.x)*(o-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function wu(i,t){const e=new cc(i.i,i.x,i.y),n=new cc(t.i,t.x,t.y),s=i.next,o=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,o.next=n,n.prev=o,n}function ah(i,t,e,n){const s=new cc(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function Ks(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function cc(i,t,e){this.i=i,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function q1(i,t,e,n){let s=0;for(let o=t,r=e-n;o<e;o+=n)s+=(i[r]-i[o])*(i[o+1]+i[r+1]),r=o;return s}class qs{static area(t){const e=t.length;let n=0;for(let s=e-1,o=0;o<e;s=o++)n+=t[s].x*t[o].y-t[o].x*t[s].y;return n*.5}static isClockWise(t){return qs.area(t)<0}static triangulateShape(t,e){const n=[],s=[],o=[];ch(t),lh(n,t);let r=t.length;e.forEach(ch);for(let c=0;c<e.length;c++)s.push(r),r+=e[c].length,lh(n,e[c]);const a=L1.triangulate(n,s);for(let c=0;c<a.length;c+=3)o.push(a.slice(c,c+3));return o}}function ch(i){const t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function lh(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}class io extends Le{constructor(t=new pr([new gt(.5,.5),new gt(-.5,.5),new gt(-.5,-.5),new gt(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];const n=this,s=[],o=[];for(let a=0,c=t.length;a<c;a++){const l=t[a];r(l)}this.setAttribute("position",new Zt(s,3)),this.setAttribute("uv",new Zt(o,2)),this.computeVertexNormals();function r(a){const c=[],l=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,u=e.depth!==void 0?e.depth:1;let d=e.bevelEnabled!==void 0?e.bevelEnabled:!0,f=e.bevelThickness!==void 0?e.bevelThickness:.2,m=e.bevelSize!==void 0?e.bevelSize:f-.1,_=e.bevelOffset!==void 0?e.bevelOffset:0,g=e.bevelSegments!==void 0?e.bevelSegments:3;const p=e.extrudePath,S=e.UVGenerator!==void 0?e.UVGenerator:Y1;let y,v=!1,D,T,C,P;p&&(y=p.getSpacedPoints(h),v=!0,d=!1,D=p.computeFrenetFrames(h,!1),T=new I,C=new I,P=new I),d||(g=0,f=0,m=0,_=0);const E=a.extractPoints(l);let x=E.shape;const R=E.holes;if(!qs.isClockWise(x)){x=x.reverse();for(let W=0,it=R.length;W<it;W++){const L=R[W];qs.isClockWise(L)&&(R[W]=L.reverse())}}const N=qs.triangulateShape(x,R),V=x;for(let W=0,it=R.length;W<it;W++){const L=R[W];x=x.concat(L)}function tt(W,it,L){return it||console.error("THREE.ExtrudeGeometry: vec does not exist"),W.clone().addScaledVector(it,L)}const $=x.length,Q=N.length;function k(W,it,L){let yt,H,K;const Z=W.x-it.x,mt=W.y-it.y,dt=L.x-W.x,A=L.y-W.y,M=Z*Z+mt*mt,G=Z*A-mt*dt;if(Math.abs(G)>Number.EPSILON){const j=Math.sqrt(M),lt=Math.sqrt(dt*dt+A*A),ot=it.x-mt/j,Ft=it.y+Z/j,Et=L.x-A/lt,Lt=L.y+dt/lt,ne=((Et-ot)*A-(Lt-Ft)*dt)/(Z*A-mt*dt);yt=ot+Z*ne-W.x,H=Ft+mt*ne-W.y;const pt=yt*yt+H*H;if(pt<=2)return new gt(yt,H);K=Math.sqrt(pt/2)}else{let j=!1;Z>Number.EPSILON?dt>Number.EPSILON&&(j=!0):Z<-Number.EPSILON?dt<-Number.EPSILON&&(j=!0):Math.sign(mt)===Math.sign(A)&&(j=!0),j?(yt=-mt,H=Z,K=Math.sqrt(M)):(yt=Z,H=mt,K=Math.sqrt(M/2))}return new gt(yt/K,H/K)}const _t=[];for(let W=0,it=V.length,L=it-1,yt=W+1;W<it;W++,L++,yt++)L===it&&(L=0),yt===it&&(yt=0),_t[W]=k(V[W],V[L],V[yt]);const Mt=[];let bt,Wt=_t.concat();for(let W=0,it=R.length;W<it;W++){const L=R[W];bt=[];for(let yt=0,H=L.length,K=H-1,Z=yt+1;yt<H;yt++,K++,Z++)K===H&&(K=0),Z===H&&(Z=0),bt[yt]=k(L[yt],L[K],L[Z]);Mt.push(bt),Wt=Wt.concat(bt)}for(let W=0;W<g;W++){const it=W/g,L=f*Math.cos(it*Math.PI/2),yt=m*Math.sin(it*Math.PI/2)+_;for(let H=0,K=V.length;H<K;H++){const Z=tt(V[H],_t[H],yt);X(Z.x,Z.y,-L)}for(let H=0,K=R.length;H<K;H++){const Z=R[H];bt=Mt[H];for(let mt=0,dt=Z.length;mt<dt;mt++){const A=tt(Z[mt],bt[mt],yt);X(A.x,A.y,-L)}}}const Yt=m+_;for(let W=0;W<$;W++){const it=d?tt(x[W],Wt[W],Yt):x[W];v?(C.copy(D.normals[0]).multiplyScalar(it.x),T.copy(D.binormals[0]).multiplyScalar(it.y),P.copy(y[0]).add(C).add(T),X(P.x,P.y,P.z)):X(it.x,it.y,0)}for(let W=1;W<=h;W++)for(let it=0;it<$;it++){const L=d?tt(x[it],Wt[it],Yt):x[it];v?(C.copy(D.normals[W]).multiplyScalar(L.x),T.copy(D.binormals[W]).multiplyScalar(L.y),P.copy(y[W]).add(C).add(T),X(P.x,P.y,P.z)):X(L.x,L.y,u/h*W)}for(let W=g-1;W>=0;W--){const it=W/g,L=f*Math.cos(it*Math.PI/2),yt=m*Math.sin(it*Math.PI/2)+_;for(let H=0,K=V.length;H<K;H++){const Z=tt(V[H],_t[H],yt);X(Z.x,Z.y,u+L)}for(let H=0,K=R.length;H<K;H++){const Z=R[H];bt=Mt[H];for(let mt=0,dt=Z.length;mt<dt;mt++){const A=tt(Z[mt],bt[mt],yt);v?X(A.x,A.y+y[h-1].y,y[h-1].x+L):X(A.x,A.y,u+L)}}}et(),ft();function et(){const W=s.length/3;if(d){let it=0,L=$*it;for(let yt=0;yt<Q;yt++){const H=N[yt];rt(H[2]+L,H[1]+L,H[0]+L)}it=h+g*2,L=$*it;for(let yt=0;yt<Q;yt++){const H=N[yt];rt(H[0]+L,H[1]+L,H[2]+L)}}else{for(let it=0;it<Q;it++){const L=N[it];rt(L[2],L[1],L[0])}for(let it=0;it<Q;it++){const L=N[it];rt(L[0]+$*h,L[1]+$*h,L[2]+$*h)}}n.addGroup(W,s.length/3-W,0)}function ft(){const W=s.length/3;let it=0;Rt(V,it),it+=V.length;for(let L=0,yt=R.length;L<yt;L++){const H=R[L];Rt(H,it),it+=H.length}n.addGroup(W,s.length/3-W,1)}function Rt(W,it){let L=W.length;for(;--L>=0;){const yt=L;let H=L-1;H<0&&(H=W.length-1);for(let K=0,Z=h+g*2;K<Z;K++){const mt=$*K,dt=$*(K+1),A=it+yt+mt,M=it+H+mt,G=it+H+dt,j=it+yt+dt;xt(A,M,G,j)}}}function X(W,it,L){c.push(W),c.push(it),c.push(L)}function rt(W,it,L){Tt(W),Tt(it),Tt(L);const yt=s.length/3,H=S.generateTopUV(n,s,yt-3,yt-2,yt-1);ct(H[0]),ct(H[1]),ct(H[2])}function xt(W,it,L,yt){Tt(W),Tt(it),Tt(yt),Tt(it),Tt(L),Tt(yt);const H=s.length/3,K=S.generateSideWallUV(n,s,H-6,H-3,H-2,H-1);ct(K[0]),ct(K[1]),ct(K[3]),ct(K[1]),ct(K[2]),ct(K[3])}function Tt(W){s.push(c[W*3+0]),s.push(c[W*3+1]),s.push(c[W*3+2])}function ct(W){o.push(W.x),o.push(W.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return $1(e,n,t)}static fromJSON(t,e){const n=[];for(let o=0,r=t.shapes.length;o<r;o++){const a=e[t.shapes[o]];n.push(a)}const s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new Qo[s.type]().fromJSON(s)),new io(n,t.options)}}const Y1={generateTopUV:function(i,t,e,n,s){const o=t[e*3],r=t[e*3+1],a=t[n*3],c=t[n*3+1],l=t[s*3],h=t[s*3+1];return[new gt(o,r),new gt(a,c),new gt(l,h)]},generateSideWallUV:function(i,t,e,n,s,o){const r=t[e*3],a=t[e*3+1],c=t[e*3+2],l=t[n*3],h=t[n*3+1],u=t[n*3+2],d=t[s*3],f=t[s*3+1],m=t[s*3+2],_=t[o*3],g=t[o*3+1],p=t[o*3+2];return Math.abs(a-h)<Math.abs(r-l)?[new gt(r,1-c),new gt(l,1-u),new gt(d,1-m),new gt(_,1-p)]:[new gt(a,1-c),new gt(h,1-u),new gt(f,1-m),new gt(g,1-p)]}};function $1(i,t,e){if(e.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){const o=i[n];e.shapes.push(o.uuid)}else e.shapes.push(i.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}class zn extends no{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],o=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,o,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new zn(t.radius,t.detail)}}class Fe extends no{constructor(t=1,e=0){const n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,s,t,e),this.type="OctahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new Fe(t.radius,t.detail)}}class Fi extends Le{constructor(t=.5,e=1,n=32,s=1,o=0,r=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:s,thetaStart:o,thetaLength:r},n=Math.max(3,n),s=Math.max(1,s);const a=[],c=[],l=[],h=[];let u=t;const d=(e-t)/s,f=new I,m=new gt;for(let _=0;_<=s;_++){for(let g=0;g<=n;g++){const p=o+g/n*r;f.x=u*Math.cos(p),f.y=u*Math.sin(p),c.push(f.x,f.y,f.z),l.push(0,0,1),m.x=(f.x/e+1)/2,m.y=(f.y/e+1)/2,h.push(m.x,m.y)}u+=d}for(let _=0;_<s;_++){const g=_*(n+1);for(let p=0;p<n;p++){const S=p+g,y=S,v=S+n+1,D=S+n+2,T=S+1;a.push(y,v,T),a.push(v,D,T)}}this.setIndex(a),this.setAttribute("position",new Zt(c,3)),this.setAttribute("normal",new Zt(l,3)),this.setAttribute("uv",new Zt(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Fi(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}}class nt extends Le{constructor(t=1,e=32,n=16,s=0,o=Math.PI*2,r=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:o,thetaStart:r,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const c=Math.min(r+a,Math.PI);let l=0;const h=[],u=new I,d=new I,f=[],m=[],_=[],g=[];for(let p=0;p<=n;p++){const S=[],y=p/n;let v=0;p===0&&r===0?v=.5/e:p===n&&c===Math.PI&&(v=-.5/e);for(let D=0;D<=e;D++){const T=D/e;u.x=-t*Math.cos(s+T*o)*Math.sin(r+y*a),u.y=t*Math.cos(r+y*a),u.z=t*Math.sin(s+T*o)*Math.sin(r+y*a),m.push(u.x,u.y,u.z),d.copy(u).normalize(),_.push(d.x,d.y,d.z),g.push(T+v,1-y),S.push(l++)}h.push(S)}for(let p=0;p<n;p++)for(let S=0;S<e;S++){const y=h[p][S+1],v=h[p][S],D=h[p+1][S],T=h[p+1][S+1];(p!==0||r>0)&&f.push(y,v,T),(p!==n-1||c<Math.PI)&&f.push(v,D,T)}this.setIndex(f),this.setAttribute("position",new Zt(m,3)),this.setAttribute("normal",new Zt(_,3)),this.setAttribute("uv",new Zt(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new nt(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class Ne extends Le{constructor(t=1,e=.4,n=12,s=48,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:o},n=Math.floor(n),s=Math.floor(s);const r=[],a=[],c=[],l=[],h=new I,u=new I,d=new I;for(let f=0;f<=n;f++)for(let m=0;m<=s;m++){const _=m/s*o,g=f/n*Math.PI*2;u.x=(t+e*Math.cos(g))*Math.cos(_),u.y=(t+e*Math.cos(g))*Math.sin(_),u.z=e*Math.sin(g),a.push(u.x,u.y,u.z),h.x=t*Math.cos(_),h.y=t*Math.sin(_),d.subVectors(u,h).normalize(),c.push(d.x,d.y,d.z),l.push(m/s),l.push(f/n)}for(let f=1;f<=n;f++)for(let m=1;m<=s;m++){const _=(s+1)*f+m-1,g=(s+1)*(f-1)+m-1,p=(s+1)*(f-1)+m,S=(s+1)*f+m;r.push(_,g,S),r.push(g,p,S)}this.setIndex(r),this.setAttribute("position",new Zt(a,3)),this.setAttribute("normal",new Zt(c,3)),this.setAttribute("uv",new Zt(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ne(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class tr extends Le{constructor(t=new Hc(new I(-1,-1,0),new I(-1,1,0),new I(1,1,0)),e=64,n=1,s=8,o=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:n,radialSegments:s,closed:o};const r=t.computeFrenetFrames(e,o);this.tangents=r.tangents,this.normals=r.normals,this.binormals=r.binormals;const a=new I,c=new I,l=new gt;let h=new I;const u=[],d=[],f=[],m=[];_(),this.setIndex(m),this.setAttribute("position",new Zt(u,3)),this.setAttribute("normal",new Zt(d,3)),this.setAttribute("uv",new Zt(f,2));function _(){for(let y=0;y<e;y++)g(y);g(o===!1?e:0),S(),p()}function g(y){h=t.getPointAt(y/e,h);const v=r.normals[y],D=r.binormals[y];for(let T=0;T<=s;T++){const C=T/s*Math.PI*2,P=Math.sin(C),E=-Math.cos(C);c.x=E*v.x+P*D.x,c.y=E*v.y+P*D.y,c.z=E*v.z+P*D.z,c.normalize(),d.push(c.x,c.y,c.z),a.x=h.x+n*c.x,a.y=h.y+n*c.y,a.z=h.z+n*c.z,u.push(a.x,a.y,a.z)}}function p(){for(let y=1;y<=e;y++)for(let v=1;v<=s;v++){const D=(s+1)*(y-1)+(v-1),T=(s+1)*y+(v-1),C=(s+1)*y+v,P=(s+1)*(y-1)+v;m.push(D,T,P),m.push(T,C,P)}}function S(){for(let y=0;y<=e;y++)for(let v=0;v<=s;v++)l.x=y/e,l.y=v/s,f.push(l.x,l.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new tr(new Qo[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}}class Oe extends ki{static get type(){return"MeshStandardMaterial"}constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new St(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new St(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Lc,this.normalScale=new gt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new bn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Hi extends Oe{static get type(){return"MeshPhysicalMaterial"}constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new gt(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return ze(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new St(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new St(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new St(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}}class sa extends ki{static get type(){return"MeshLambertMaterial"}constructor(t){super(),this.isMeshLambertMaterial=!0,this.color=new St(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new St(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Lc,this.normalScale=new gt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new bn,this.combine=wc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class gr extends Be{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new St(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class js extends gr{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Be.DEFAULT_UP),this.updateMatrix(),this.groundColor=new St(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const oa=new fe,hh=new I,uh=new I;class Su{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new gt(512,512),this.map=null,this.mapPass=null,this.matrix=new fe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Dc,this._frameExtents=new gt(1,1),this._viewportCount=1,this._viewports=[new _e(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;hh.setFromMatrixPosition(t.matrixWorld),e.position.copy(hh),uh.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(uh),e.updateMatrixWorld(),oa.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(oa),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(oa)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const dh=new fe,Fs=new I,ra=new I;class Z1 extends Su{constructor(){super(new Qe(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new gt(4,2),this._viewportCount=6,this._viewports=[new _e(2,1,1,1),new _e(0,1,1,1),new _e(3,1,1,1),new _e(1,1,1,1),new _e(3,0,1,1),new _e(1,0,1,1)],this._cubeDirections=[new I(1,0,0),new I(-1,0,0),new I(0,0,1),new I(0,0,-1),new I(0,1,0),new I(0,-1,0)],this._cubeUps=[new I(0,1,0),new I(0,1,0),new I(0,1,0),new I(0,1,0),new I(0,0,1),new I(0,0,-1)]}updateMatrices(t,e=0){const n=this.camera,s=this.matrix,o=t.distance||n.far;o!==n.far&&(n.far=o,n.updateProjectionMatrix()),Fs.setFromMatrixPosition(t.matrixWorld),n.position.copy(Fs),ra.copy(n.position),ra.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(ra),n.updateMatrixWorld(),s.makeTranslation(-Fs.x,-Fs.y,-Fs.z),dh.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(dh)}}class _r extends gr{constructor(t,e,n=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new Z1}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class J1 extends Su{constructor(){super(new lu(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class On extends gr{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Be.DEFAULT_UP),this.updateMatrix(),this.target=new Be,this.shadow=new J1}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class Eu extends gr{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}class Tu{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=fh(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=fh();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function fh(){return performance.now()}const ph=new fe;class K1{constructor(t,e,n=0,s=1/0){this.ray=new Pc(t,e),this.near=n,this.far=s,this.camera=null,this.layers=new Ic,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return ph.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(ph),this}intersectObject(t,e=!0,n=[]){return lc(t,this,n,e),n.sort(mh),n}intersectObjects(t,e=!0,n=[]){for(let s=0,o=t.length;s<o;s++)lc(t[s],this,n,e);return n.sort(mh),n}}function mh(i,t){return i.distance-t.distance}function lc(i,t,e,n){let s=!0;if(i.layers.test(t.layers)&&i.raycast(t,e)===!1&&(s=!1),s===!0&&n===!0){const o=i.children;for(let r=0,a=o.length;r<a;r++)lc(o[r],t,e,!0)}}class bu{constructor(t=1,e=0,n=0){return this.radius=t,this.phi=e,this.theta=n,this}set(t,e,n){return this.radius=t,this.phi=e,this.theta=n,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+e*e+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,n),this.phi=Math.acos(ze(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class j1 extends _1{constructor(t=10,e=10,n=4473924,s=8947848){n=new St(n),s=new St(s);const o=e/2,r=t/e,a=t/2,c=[],l=[];for(let d=0,f=0,m=-a;d<=e;d++,m+=r){c.push(-a,0,m,a,0,m),c.push(m,0,-a,m,0,a);const _=d===o?n:s;_.toArray(l,f),f+=3,_.toArray(l,f),f+=3,_.toArray(l,f),f+=3,_.toArray(l,f),f+=3}const h=new Le;h.setAttribute("position",new Zt(c,3)),h.setAttribute("color",new Zt(l,3));const u=new mu({vertexColors:!0,toneMapped:!1});super(h,u),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Mc}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Mc);const gh={constitution:{name:"Constitution",icon:"❤️"},attack:{name:"Attack",icon:"⚔"},strength:{name:"Strength",icon:"💪"},defence:{name:"Defence",icon:"🛡"},woodcutting:{name:"Woodcutting",icon:"🪓"},mining:{name:"Mining",icon:"⛏"}},Dn={bronze_hatchet:{name:"Bronze Hatchet",icon:"🪓",stackable:!1,slot:"hatchet"},bronze_pickaxe:{name:"Bronze Pickaxe",icon:"⛏",stackable:!1,slot:"pickaxe"},bronze_sword:{name:"Bronze Sword",icon:"⚔",stackable:!1,slot:"weapon"},whisper_logs:{name:"Whisper Logs",icon:"🪵",stackable:!0},copper_ore:{name:"Copper Ore",icon:"🟠",stackable:!0},tin_ore:{name:"Tin Ore",icon:"⚪",stackable:!0},camp_rations:{name:"Camp Rations",icon:"🍖",stackable:!0},yeti_fur:{name:"Yeti Fur",icon:"🧣",stackable:!0},frost_claw:{name:"Frost Claw",icon:"🧊",stackable:!0},yeti_hide:{name:"Yeti Hide",icon:"🧥",stackable:!0},frost_fang:{name:"Frost Fang",icon:"🦷",stackable:!0},yeti_bone:{name:"Yeti Bone",icon:"🦴",stackable:!0},rime_shard:{name:"Rime Shard",icon:"❄",stackable:!0},frost_sword:{name:"Frostfang Blade",icon:"⚔",stackable:!1,slot:"weapon"},frost_shield:{name:"Rimehide Shield",icon:"🛡",stackable:!1,slot:"shield"},frost_bow:{name:"Icebone Bow",icon:"🏹",stackable:!1,slot:"weapon"},frost_hammer:{name:"Glacial Maul",icon:"🔨",stackable:!1,slot:"weapon"},frost_spear:{name:"Frostspine Spear",icon:"🔱",stackable:!1,slot:"weapon"},frost_chest:{name:"Yeti Hide Hauberk",icon:"🦺",stackable:!1,slot:"chest"},frost_greaves:{name:"Frost Greaves",icon:"🦵",stackable:!1,slot:"greaves"},frost_legs:{name:"Yeti Leg Wraps",icon:"👖",stackable:!1,slot:"legs"},frost_boots:{name:"Rimehide Boots",icon:"👢",stackable:!1,slot:"boots"},orc_tooth:{name:"Orc Tooth",icon:"🦷",stackable:!0},scout_leather:{name:"Scout Leather",icon:"🦺",stackable:!0}},Q1=[{id:"weapon",label:"Weapon"},{id:"shield",label:"Shield"},{id:"chest",label:"Chest"},{id:"greaves",label:"Greaves"},{id:"legs",label:"Legs"},{id:"boots",label:"Boots"},{id:"hatchet",label:"Hatchet"},{id:"pickaxe",label:"Pickaxe"}],Au=[{id:"frost_sword",name:"Frostfang Blade",blurb:"A row of yeti claws fused along a bone spine, edged in rime.",cost:[{id:"frost_claw",qty:2},{id:"frost_fang",qty:1},{id:"yeti_bone",qty:1}]},{id:"frost_shield",name:"Rimehide Shield",blurb:"A hide disc rimmed with fur, its boss a frozen claw-knuckle.",cost:[{id:"yeti_hide",qty:2},{id:"yeti_fur",qty:2},{id:"frost_claw",qty:1}]},{id:"frost_bow",name:"Icebone Bow",blurb:"Paired yeti bones flexed with hide, strung on a claw tendon.",cost:[{id:"yeti_bone",qty:2},{id:"yeti_hide",qty:1},{id:"frost_claw",qty:1}]},{id:"frost_hammer",name:"Glacial Maul",blurb:"A bone haft capped with ice-bound hide and driving claws.",cost:[{id:"yeti_bone",qty:2},{id:"frost_claw",qty:2},{id:"rime_shard",qty:1}]},{id:"frost_spear",name:"Frostspine Spear",blurb:"A long bone shaft tipped with a frost fang and claw barbs.",cost:[{id:"yeti_bone",qty:1},{id:"frost_fang",qty:2},{id:"frost_claw",qty:1}]},{id:"frost_chest",name:"Yeti Hide Hauberk",blurb:"A hide vest under a frost-yeti mantle, ice shards at the shoulders.",cost:[{id:"yeti_hide",qty:3},{id:"yeti_fur",qty:3},{id:"rime_shard",qty:1}]},{id:"frost_greaves",name:"Frost Greaves",blurb:"Shin hides with fur cuffs and a ridge of claws down each plate.",cost:[{id:"yeti_hide",qty:2},{id:"yeti_fur",qty:1},{id:"rime_shard",qty:1}]},{id:"frost_legs",name:"Yeti Leg Wraps",blurb:"Fur chaps bound over hide, cut from the yeti’s haunches.",cost:[{id:"yeti_hide",qty:2},{id:"yeti_fur",qty:2}]},{id:"frost_boots",name:"Rimehide Boots",blurb:"Fur-lined hide boots whose toes are the yeti’s own claws.",cost:[{id:"yeti_fur",qty:2},{id:"yeti_hide",qty:1},{id:"frost_claw",qty:1}]}];function vr(i,t){return i.filter(e=>e.id===t).reduce((e,n)=>e+n.qty,0)}function Ru(i,t){return vr(i.inventory,t)>0?!0:Object.values(i.equipped).includes(t)}function Cu(i,t){return Ru(i,t.id)?!1:t.cost.every(e=>vr(i.inventory,e.id)>=e.qty)}function _h(i){let t=0;return i.equipped.shield==="frost_shield"&&(t+=3),i.equipped.chest==="frost_chest"&&(t+=3),i.equipped.greaves==="frost_greaves"&&(t+=2),i.equipped.legs==="frost_legs"&&(t+=2),i.equipped.boots==="frost_boots"&&(t+=1),t}function t_(i){return i==="frost_hammer"?4:i==="frost_sword"||i==="frost_spear"?3:i==="frost_bow"?2:0}function e_(i){return i==="frost_bow"?2.2:i==="frost_spear"?.4:0}function er(i){let t=0;for(let e=1;e<i;e++)t+=Math.floor(e+300*Math.pow(2,e/7));return Math.floor(t/4)}function n_(i){let t=1;for(;t<99&&er(t+1)<=i;)t++;return t}function Fo(){return{version:1,x:0,z:2,hp:100,maxHp:100,focus:100,stamina:100,skills:{constitution:{level:10,xp:er(10)},attack:{level:1,xp:0},strength:{level:1,xp:0},defence:{level:1,xp:0},woodcutting:{level:1,xp:0},mining:{level:1,xp:0}},inventory:[{id:"camp_rations",qty:5}],equipped:{weapon:"bronze_sword",shield:null,chest:null,greaves:null,legs:null,boots:null,hatchet:"bronze_hatchet",pickaxe:"bronze_pickaxe"}}}function se(i,t={}){return new Hi({color:i,roughness:t.roughness??.88,metalness:t.metalness??.02,flatShading:t.flatShading??!0,envMapIntensity:t.envMapIntensity??.55,...t})}function Lu(i,t=1.07,e=660768){const n=new w(i.geometry,new de({color:e,side:Xe,depthWrite:!1}));n.scale.setScalar(t),n.name="outline",i.add(n)}function Mn(i,t=10){return new eo(i.map(([e,n])=>new gt(e,n)),t)}function hc(i,t,e,n,s,o,r,a=0,c=0){const l=[],h=(f,m,_)=>{l.push(Math.cos(f)*_,m,a+Math.sin(f)*_)};for(let f=0;f<n;f++){const m=(f+c)/n*Math.PI*2,_=(f+1+c)/n*Math.PI*2,g=(m+_)/2,p=f*7%5/5,S=s*(.7+p*.55);h(m,t,e),h(_,t,e),h(g,t-S,e*o)}const u=new Le;u.setAttribute("position",new Zt(l,3)),u.computeVertexNormals();const d=new w(u,r);d.castShadow=!0,i.add(d)}function ye(i,t,e,n,s,o,r,a,c=0){hc(i,t+s*.1,e*.98,n,s*1.18,o*.96,a,c,.5),hc(i,t,e,n,s,o,r,c)}function vh(i,t,e,n,s,o,r,a,c=0){const l=new w(new nt(.5,10,8),a);l.scale.set(s,o,r),l.position.set(t,e,n),l.rotation.z=c,i.add(l)}function aa(i,t,e,n,s,o,r,a=.3,c=0){const l=new ut;l.position.set(t,e,n),l.rotation.order="ZXY",l.rotation.z=c,l.rotation.x=-a;const h=o*.55,u=new w(new Vt(o,h,s*.55,6),r);u.position.y=-s*.275,u.castShadow=!0,l.add(u);const d=new ut;d.position.y=-s*.55,d.rotation.x=-.72;const f=new w(new Te(h,s*.5,6),r);f.rotation.x=Math.PI,f.position.y=-s*.25,f.castShadow=!0,d.add(f),l.add(d),i.add(l)}function Oo(i,t,e,n,s,o,r,a,c=1){for(let l=0;l<o;l++){const h=l/o*Math.PI*2+c,u=s*(.35+(l*5+c)%4/4*.75),d=r*(.6+l*3%5/5*.9),f=new w(new Fe(d,0),a);f.position.set(t+Math.cos(h)*u,e+(l%3-1)*r*.3,n+Math.sin(h)*u),f.rotation.set(h*.7,h,(l%5-2)*.25),f.scale.set(.42,1.5+l*7%4*.35,.42),f.castShadow=!0,i.add(f)}}const ie={bodyX:.22,headX:-.12,armX:-.18,armZ:.22,forearmX:-.34,legX:.05,kneeX:.13,footX:-.04};function Pu(){const i=new ut;i.name="yeti";const t=se(14083056,{roughness:.96,sheen:.3,sheenColor:new St(12900328),sheenRoughness:.8}),e=se(11124176,{roughness:.97,sheen:.18,sheenColor:new St(10269382)}),n=se(8229286,{roughness:.97}),s=se(7175306,{roughness:.8,flatShading:!1}),o=se(2699578,{roughness:.85,flatShading:!1}),r=se(1316378,{roughness:.3,metalness:.3,flatShading:!1}),a=se(1776417,{roughness:.62,flatShading:!1}),c=se(4004386,{roughness:.9,flatShading:!1}),l=se(15919830,{roughness:.3,flatShading:!1}),h=se(12118271,{roughness:.18,metalness:.28,emissive:4892872,emissiveIntensity:.22}),u=se(14083056,{roughness:.96,side:le,sheen:.26,sheenColor:new St(12900328)}),d=se(11913435,{roughness:.97,side:le}),f=se(11584470,{roughness:.97,side:le}),m=se(9611454,{roughness:.97,side:le}),_=se(9413818,{roughness:.97,side:le}),g=se(7637407,{roughness:.98,side:le}),p=new w(new Cn(.85,20),new de({color:0,transparent:!0,opacity:.44,depthWrite:!1}));p.name="contactShadow",p.rotation.x=-Math.PI/2,p.position.y=.03,i.add(p);const S=X=>{const rt=new ut;rt.name=X<0?"yetiLegL":"yetiLegR",rt.position.set(X*.3,1.18,0),rt.rotation.x=ie.legX,rt.rotation.z=X*.04;const xt=new w(new nt(.27,12,10),t);xt.scale.set(1,1.08,1.12),xt.position.set(0,-.05,-.02),xt.castShadow=!0,rt.add(xt);const Tt=new w(Mn([[.25,.02],[.26,-.14],[.22,-.32],[.19,-.48]],12),t);Tt.castShadow=!0,rt.add(Tt),ye(rt,-.16,.26,15,.2,1.05,u,d),ye(rt,-.34,.225,14,.18,1.08,f,m),Oo(rt,0,.02,-.12,.15,4,.045,h,X+1);const ct=new ut;ct.name=X<0?"yetiShinL":"yetiShinR",ct.position.set(0,-.5,.03),ct.rotation.x=ie.kneeX;const W=new w(new nt(.2,10,8),e);W.scale.set(1,.95,1.05),W.castShadow=!0,ct.add(W);const it=new w(Mn([[.2,.02],[.21,-.12],[.17,-.3],[.145,-.44]],12),n);it.castShadow=!0,ct.add(it),ye(ct,-.14,.205,14,.17,1.08,f,m),ye(ct,-.32,.17,13,.15,1.1,_,g);const L=new ut;L.name=X<0?"yetiFootL":"yetiFootR",L.position.set(0,-.46,.02),L.rotation.x=ie.footX;const yt=new w(new nt(.15,10,8),e);yt.position.set(0,-.02,0),L.add(yt);const H=new w(new nt(.2,12,10),t);H.scale.set(1.05,.5,1.5),H.position.set(0,-.09,.12),H.castShadow=!0,L.add(H);const K=new w(new nt(.17,10,8),o);K.scale.set(.95,.2,1.45),K.position.set(0,-.15,.13),L.add(K),ye(L,0,.17,12,.13,1.3,f,m);for(let Z=0;Z<4;Z++){const mt=(Z-1.5)*.095,dt=new w(new nt(.065,8,6),t);dt.scale.set(1,.85,1.3),dt.position.set(mt,-.1,.3),dt.castShadow=!0,L.add(dt);const A=new w(new nt(.04,7,5),o);A.scale.set(1,.5,1),A.position.set(mt,-.15,.3),L.add(A),aa(L,mt,-.11,.35,.14,.021,r,1.1,mt*1.2)}return ct.add(L),rt.add(ct),rt};i.add(S(-1)),i.add(S(1));const y=new ut;y.name="yetiBody",y.position.set(0,1.14,-.02),y.rotation.x=ie.bodyX,i.add(y);const v=new w(Mn([[.3,-.12],[.42,.04],[.47,.24],[.52,.46],[.56,.66],[.5,.82],[.3,.95]],14),t);v.scale.set(1.24,1,.9),v.castShadow=!0,Lu(v,1.04,1186854),y.add(v);const D=new w(new nt(.42,14,12),t);D.scale.set(1.32,.92,.7),D.position.set(0,.6,.18),D.castShadow=!0,y.add(D);const T=new w(new nt(.38,12,10),e);T.scale.set(1.2,1,.7),T.position.set(0,.2,.18),y.add(T);const C=new w(new nt(.34,12,10),t);C.scale.set(1.55,.78,1),C.position.set(0,.82,-.1),C.castShadow=!0,y.add(C);for(const X of[-1,1]){const rt=new w(new nt(.29,12,10),t);rt.scale.set(1.05,.98,1.05),rt.position.set(X*.44,.74,.02),rt.castShadow=!0,y.add(rt);const xt=new w(new nt(.26,10,8),e);xt.scale.set(.9,1.5,.85),xt.position.set(X*.56,.42,0),y.add(xt);const Tt=new ut;Tt.position.set(X*.46,.78,.02),Tt.rotation.z=X*.55,y.add(Tt),ye(Tt,.1,.27,14,.22,1.14,u,d),ye(Tt,-.08,.29,14,.2,1.1,u,d),Oo(Tt,0,.16,-.04,.18,5,.055,h,X+4)}const P=new ut;P.scale.set(1.24,1,.9),y.add(P),ye(P,.8,.51,22,.24,1.08,u,d,-.02),ye(P,.68,.55,22,.18,1.04,u,d,-.01),ye(P,.56,.56,24,.24,1.05,u,d),ye(P,.43,.54,22,.18,1.03,f,m),ye(P,.3,.5,22,.24,1.05,f,m),ye(P,.17,.47,20,.18,1.04,_,g),ye(P,.04,.44,20,.22,1.07,_,g);for(const[X,rt,xt,Tt,ct,W]of[[-.42,.88,-.2,.15,.35,.45],[.42,.88,-.2,.15,.35,-.45],[0,.94,-.32,.17,.25,0],[-.2,.6,-.44,.12,.5,.25],[.2,.6,-.44,.12,.5,-.25]]){const it=new w(new Fe(Tt,0),h);it.position.set(X,rt,xt),it.rotation.set(ct,.4,W),it.scale.set(.45,1.6,.4),it.castShadow=!0,y.add(it)}for(const[X,rt,xt,Tt]of[[-.32,.12,.4,.16],[.02,.05,.46,.21],[.34,.14,.38,.13],[-.54,.34,.26,.12],[.56,.32,.28,.14],[-.16,-.02,.38,.14]]){const ct=new w(new Te(.026,Tt,5),h);ct.rotation.x=Math.PI,ct.position.set(X,rt-Tt/2,xt),ct.castShadow=!0,y.add(ct)}const E=new w(new Vt(.24,.32,.22,12),e);E.position.set(0,.96,.05),E.rotation.x=-.18,y.add(E);const x=X=>{const rt=new ut;rt.name=X<0?"yetiArmL":"yetiArmR",rt.position.set(X*.58,.72,.03),rt.rotation.x=ie.armX,rt.rotation.z=X*ie.armZ;const xt=new w(new nt(.24,12,10),t);xt.position.set(0,.02,0),xt.castShadow=!0,rt.add(xt);const Tt=new w(Mn([[.23,.04],[.24,-.12],[.2,-.34],[.175,-.54]],12),t);Tt.castShadow=!0,rt.add(Tt),ye(rt,.04,.265,16,.22,1.12,u,d),ye(rt,-.14,.235,15,.19,1.08,u,d),Oo(rt,0,.08,-.11,.16,4,.05,h,X+2),ye(rt,-.38,.195,14,.17,1.1,f,m);const ct=new ut;ct.name=X<0?"yetiForearmL":"yetiForearmR",ct.position.set(0,-.58,.02),ct.rotation.x=ie.forearmX;const W=new w(new nt(.19,10,8),e);W.castShadow=!0,ct.add(W);const it=new w(Mn([[.2,.02],[.22,-.12],[.195,-.3],[.17,-.46]],12),e);it.castShadow=!0,ct.add(it),ye(ct,-.14,.2,14,.17,1.08,u,d),ye(ct,-.36,.172,13,.16,1.14,f,m);const L=new ut;L.name=X<0?"yetiHandL":"yetiHandR",L.position.set(0,-.5,.02);const yt=new w(new nt(.15,10,8),e);L.add(yt);const H=new w(new nt(.19,12,10),t);H.scale.set(1.2,.92,.92),H.position.set(0,-.1,.03),H.castShadow=!0,L.add(H);const K=new w(new nt(.13,10,8),o);K.scale.set(1.2,.8,.5),K.position.set(0,-.14,.11),L.add(K),ye(L,.02,.18,13,.11,1.18,f,m);for(let dt=0;dt<4;dt++){const A=(dt-1.5)*.108,M=1-Math.abs(dt-1.5)*.1,G=new w(new nt(.06,8,6),t);G.position.set(A,-.165,.08),G.castShadow=!0,L.add(G);const j=new w(new Te(.053,.17,6),e);j.rotation.x=Math.PI-.25,j.position.set(A,-.245,.104),j.castShadow=!0,L.add(j);const lt=new w(new nt(.029,7,5),o);lt.scale.set(1.1,1.25,.22),lt.position.set(A,-.238,.138),L.add(lt),aa(L,A,-.3,.12,.185*M,.021,r,.26,A*1.5)}const Z=-X*.2,mt=new w(new nt(.07,8,6),t);return mt.scale.set(1,1.1,1),mt.position.set(Z,-.09,.04),mt.castShadow=!0,L.add(mt),aa(L,Z-X*.03,-.16,.06,.145,.019,r,.38,-X*.55),ct.add(L),rt.add(ct),rt};y.add(x(-1)),y.add(x(1));const R=new ut;R.name="yetiHead",R.position.set(0,1.06,.1),R.rotation.x=ie.headX,y.add(R);const O=new w(new nt(.32,14,12),t);O.scale.set(1,.95,1.12),O.position.set(0,.02,-.02),O.castShadow=!0,R.add(O),vh(R,0,.2,-.16,.42,.26,.34,n),ye(R,.2,.27,16,.22,1.2,u,d,-.08),ye(R,.1,.3,18,.24,1.3,u,d,-.06),ye(R,-.05,.31,18,.24,1.2,f,m,-.04),ye(R,-.16,.28,16,.2,1.3,u,d,.02),Oo(R,0,.19,-.2,.18,5,.038,h,3),ye(R,.28,.16,10,.14,1.1,u,d,-.12),ye(R,.2,.2,12,.16,1.15,u,d,-.14),hc(R,.25,.2,11,.12,1.08,u,.06);const N=new w(new nt(.22,12,10),t);N.scale.set(1.25,.44,.6),N.position.set(0,.13,.16),N.castShadow=!0,R.add(N);const V=X=>{const rt=new w(new nt(.075,10,8),o);rt.scale.set(1.3,1,.6),rt.position.set(X,.04,.25),R.add(rt);const xt=new w(new nt(.044,10,8),se(16761418,{emissive:16750848,emissiveIntensity:1.05,roughness:.2,flatShading:!1}));xt.scale.set(1.15,.68,.7),xt.position.set(X,.04,.285),xt.name="yetiEye",R.add(xt);const Tt=new w(new be(.006,.03,3,6),se(656900,{flatShading:!1}));Tt.position.set(X,.042,.312),R.add(Tt),vh(R,X*1.12,.03,.15,.34,.26,.3,n,Math.sign(X)*.3);const ct=new w(new nt(.075,8,6),t);ct.scale.set(1.3,.56,.5),ct.position.set(X,.098,.235),ct.rotation.z=Math.sign(X)*.55,R.add(ct);const W=new _r(16750848,.3,1.4);W.name="yetiEyeLight",W.position.set(X,.04,.38),R.add(W)};V(-.125),V(.125);const tt=new w(new nt(.1,10,8),t);tt.scale.set(1.1,.85,1.7),tt.position.set(0,.04,.24),R.add(tt);const $=new w(new nt(.17,12,10),n);$.scale.set(.95,.78,1.2),$.position.set(0,-.05,.28),$.castShadow=!0,R.add($);for(const X of[0,.055]){const rt=new w(new zt(.01,.16-X*.4,.01),o);rt.position.set(-.235+X,.03-X*.3,.15+X*.35),rt.rotation.set(.3,-.55,-.6),R.add(rt)}const Q=new w(new nt(.045,10,8),a);Q.scale.set(1.4,.85,.8),Q.position.set(0,.005,.43),R.add(Q);for(const X of[-1,1]){const rt=new w(new nt(.013,7,5),se(526348,{flatShading:!1}));rt.position.set(X*.028,-.012,.47),R.add(rt)}const k=new w(new nt(.12,12,10),c);k.scale.set(1.08,.9,.8),k.position.set(0,-.23,.26),R.add(k);const _t=new w(new nt(.07,10,8),c);_t.scale.set(1,.35,1.5),_t.position.set(0,-.27,.29),R.add(_t);const Mt=new w(new nt(.15,12,10),o);Mt.scale.set(.94,.26,1.1),Mt.position.set(0,-.115,.3),R.add(Mt);const bt=new w(new nt(.15,12,10),s);bt.scale.set(.95,.44,1.15),bt.position.set(0,-.33,.25),bt.rotation.x=.28,bt.castShadow=!0,R.add(bt);const Wt=new w(new nt(.11,10,8),e);Wt.scale.set(1.1,.8,.9),Wt.position.set(0,-.38,.14),R.add(Wt);const Yt=(X,rt,xt,Tt,ct,W)=>{const it=new w(new Te(ct,Tt,6),l);it.rotation.x=W?Math.PI:0,it.position.set(X,rt+(W?-Tt/2:Tt/2),xt),R.add(it)};Yt(-.075,-.15,.35,.11,.023,!0),Yt(.075,-.15,.35,.11,.023,!0);for(let X=0;X<5;X++)Yt((X-2)*.033,-.155,.375,.05,.012,!0);Yt(-.1,-.285,.33,.095,.021,!1),Yt(.1,-.285,.33,.095,.021,!1);for(let X=0;X<5;X++)Yt((X-2)*.031,-.29,.355,.045,.011,!1);for(const X of[-1,1]){const rt=new w(new nt(.07,10,8),t);rt.scale.set(.85,1,.4),rt.position.set(X*.245,.25,-.11),rt.rotation.z=X*.3,rt.castShadow=!0,R.add(rt);const xt=new w(new nt(.042,8,6),n);xt.scale.set(.7,.85,.4),xt.position.set(X*.245,.248,-.075),R.add(xt)}const et=new de({color:14087935,transparent:!0,opacity:.2,depthWrite:!1}),ft=new ut;ft.name="yetiBreath",ft.position.set(0,-.24,.44);for(let X=0;X<4;X++){const rt=new w(new zn(.055+X*.026,0),et);rt.position.set((X%2?1:-1)*.018*X,-X*.014,X*.082),ft.add(rt)}R.add(ft);for(let X=0;X<3;X++){const rt=new w(new zn(.06+X*.028,0),new de({color:12118271,transparent:!0,opacity:.2-X*.045,depthWrite:!1}));rt.position.set((X-1)*.045,-.24,.78+X*.11),rt.name="yetiBreathMist",R.add(rt)}const Rt=new w(new Vt(.8,.9,2.4,10),new de({visible:!1}));return Rt.position.y=1.2,Rt.name="hit",i.add(Rt),i.scale.setScalar(1.15),i}function Iu(){const i=new ut;i.name="orc";const t=se(7179330,{roughness:.72,sheen:.12,sheenColor:new St(8034376),flatShading:!0}),e=se(4875304,{roughness:.78,flatShading:!0}),n=se(6044194,{roughness:.78,flatShading:!0}),s=se(8016688,{roughness:.7,flatShading:!0}),o=se(3810324,{roughness:.84,flatShading:!0}),r=se(12887418,{roughness:.94,sheen:.16,sheenColor:new St(13150328),flatShading:!0}),a=se(9269320,{roughness:.95,flatShading:!0}),c=se(2764336,{roughness:.92,flatShading:!0}),l=se(1841696,{roughness:.96,flatShading:!0}),h=se(13949666,{metalness:.78,roughness:.22,flatShading:!0}),u=se(4861972,{roughness:.88,flatShading:!0}),d=se(15986402,{roughness:.38,flatShading:!1}),f=se(2759696,{roughness:.92,flatShading:!0}),m=(ct,W,it)=>(ct.castShadow=!0,ct.receiveShadow=!0,it&&Lu(ct,it,659976),W.add(ct),ct),_=(ct,W,it,L,yt,H,K,Z=.15)=>{for(let mt=0;mt<H;mt++){const dt=mt/H*Math.PI*2+.2,A=(mt%3-1)*.18,M=new w(new Te(K*.48,K*.85,5),mt%3===0?a:r);M.position.set(W+Math.cos(dt)*yt,it+A*K*.25,L+Math.sin(dt)*yt),M.lookAt(W,it-Z,L),M.rotateX(Math.PI),M.castShadow=!0,ct.add(M)}},g=new w(new Cn(.4,18),new de({color:0,transparent:!0,opacity:.4,depthWrite:!1}));g.name="contactShadow",g.rotation.x=-Math.PI/2,g.position.y=.03,i.add(g);const p=ct=>{const W=new ut;W.name=ct<0?"orcLegL":"orcLegR",W.position.set(ct*.18,.8,0);const it=new w(Mn([[.11,.02],[.125,-.1],[.11,-.22],[.09,-.34]],10),c);m(it,W);const L=new ut;L.name=ct<0?"orcShinL":"orcShinR",L.position.set(0,-.36,0);const yt=new w(new nt(.085,9,7),c);m(yt,L);const H=new w(Mn([[.085,0],[.09,-.08],[.08,-.16]],10),c);m(H,L);const K=new w(Mn([[.095,.02],[.1,-.08],[.092,-.2],[.078,-.3]],10),s);K.position.set(0,-.12,.01),m(K,L,1.04);for(const dt of[-.08,-.18,-.26]){const A=new w(new zt(.2,.018,.016),o);A.position.set(0,dt-.12,.02),A.rotation.z=.35,L.add(A)}_(L,0,-.08,.01,.1,12,.055,.05);const Z=new ut;Z.name=ct<0?"orcFootL":"orcFootR",Z.position.set(0,-.36,0);const mt=new w(new be(.06,.14,4,8),o);return mt.rotation.x=Math.PI/2,mt.position.set(0,0,.1),mt.scale.set(1.15,1,.65),m(mt,Z),L.add(Z),W.add(L),W};i.add(p(-1)),i.add(p(1));const S=new w(new Vt(.22,.25,.2,10),c);S.position.y=.78,m(S,i);const y=new ut;y.name="orcBody",y.position.set(0,1.12,0),i.add(y);const v=new w(Mn([[.24,-.3],[.27,-.12],[.26,.08],[.24,.26]],12),n);m(v,y,1.06);const D=new w(new zt(.36,.34,.05),s);D.position.set(0,.04,.22),m(D,y);const T=new w(new Vt(.28,.28,.07,10),o);T.position.y=.88,m(T,i);const C=new w(new zt(.09,.055,.04),h);C.position.set(0,.88,.28),i.add(C);const P=(ct,W)=>{const it=new w(new zt(.055,.52,.03),o);it.position.set(0,.02,W),it.rotation.z=ct,y.add(it);for(const L of[-.16,.16]){const yt=new w(new nt(.014,5,4),h);yt.position.set(Math.sin(ct)*L*.12,.02+Math.cos(ct)*L,W+.02),y.add(yt)}};P(.5,.26),P(-.5,.26),P(.5,-.26),P(-.5,-.26);const E=new w(new Fe(.055,0),h);E.scale.set(1.2,.85,.4),E.position.set(0,.02,.29),y.add(E);for(const ct of[-1,1]){const W=new w(new nt(.11,10,8),t);W.position.set(ct*.32,.24,0),m(W,y)}_(y,0,.3,0,.22,22,.09,.05),_(y,0,.34,0,.18,16,.07,-.1);const x=ct=>{const W=new ut;W.name=ct<0?"orcArmL":"orcArmR",W.position.set(ct*.32,.26,.02),W.rotation.z=ct*.18,W.rotation.x=ct>0?-.32:-.1;const it=new w(Mn([[.095,.02],[.1,-.1],[.088,-.22],[.075,-.32]],10),t);m(it,W);const L=new ut;L.name=ct<0?"orcForearmL":"orcForearmR",L.position.set(0,-.34,0),L.rotation.x=ct>0?-.42:-.28;const yt=new w(Mn([[.078,.02],[.082,-.08],[.07,-.18],[.058,-.26]],10),n);m(yt,L,1.03),_(L,0,0,0,.082,10,.05,.05);const H=new ut;H.name=ct<0?"orcHandL":"orcHandR",H.position.set(0,-.28,.02);const K=new w(new nt(.058,9,7),t);K.scale.set(.85,1,.95),m(K,H);for(let mt=0;mt<4;mt++){const dt=new w(new be(.014,.048,3,5),t);dt.position.set((mt-1.5)*.026,-.052,.018),dt.rotation.x=.35,H.add(dt)}const Z=new w(new be(.014,.04,3,5),t);return Z.position.set(ct*.048,-.018,.03),Z.rotation.set(.55,0,ct*.65),H.add(Z),L.add(H),W.add(L),W};y.add(x(-1));const R=x(1);y.add(R);const O=new w(new Vt(.09,.11,.2,8),t);O.position.set(0,1.46,.005),m(O,i);const N=new ut;N.name="orcHead",N.position.set(0,1.72,.008);const V=new w(new nt(.185,12,10),t);V.scale.set(1.02,1.06,.92),m(V,N,1.08);const tt=new w(new nt(.145,10,8),e);tt.scale.set(1.18,.38,.72),tt.position.set(0,.112,.1),m(tt,N);for(const ct of[-1,1]){const W=new w(new zt(.07,.016,.02),e);W.rotation.z=ct*-.22,W.position.set(ct*.05,.082,.168),N.add(W)}const $=new w(new be(.022,.055,4,7),t);$.rotation.x=.4,$.position.set(0,.028,.16),N.add($);const Q=new w(new nt(.042,8,6),t);Q.scale.set(1.15,.75,1.05),Q.position.set(0,-.03,.178),N.add(Q);const k=new w(new nt(.14,11,9),e);k.scale.set(1.02,.7,1),k.position.set(0,-.12,.08),m(k,N);const _t=new w(new nt(.045,8,6),e);_t.position.set(0,-.16,.14),N.add(_t);const Mt=new w(new be(.01,.05,3,6),se(3808280,{flatShading:!0}));Mt.rotation.z=Math.PI/2,Mt.position.set(0,-.09,.185),N.add(Mt);for(const ct of[-1,1]){const W=new w(new Te(.02,.11,6),d);W.position.set(ct*.052,-.085,.188),W.rotation.set(.7,0,ct*.28),N.add(W)}for(const ct of[-1,1]){const W=new w(new nt(.04,8,6),e);W.scale.set(1.1,.8,.55),W.position.set(ct*.068,.03,.145),N.add(W);const it=new w(new nt(.022,8,6),se(14998724,{roughness:.4,flatShading:!1}));it.scale.set(1.1,.8,.65),it.position.set(ct*.068,.03,.158),N.add(it);const L=new w(new nt(.012,7,5),se(3809808,{roughness:.35,flatShading:!1}));L.position.set(ct*.069,.03,.17),N.add(L)}for(const ct of[-1,1]){const W=new w(new Te(.04,.14,5),t);W.position.set(ct*.22,.05,-.01),W.rotation.z=ct*-1.15,W.rotation.x=-.2,m(W,N)}const bt=new w(new nt(.175,10,8,0,Math.PI*2,0,Math.PI*.48),l);bt.position.set(0,.07,-.02),m(bt,N);const Wt=[[0,.26,.02,1.2],[-.07,.24,.05,1.05],[.07,.24,.05,1.05],[-.12,.2,0,.95],[.12,.2,0,.95],[0,.22,-.1,1.1],[-.08,.18,-.08,.9],[.08,.18,-.08,.9],[-.04,.27,-.02,1.15],[.04,.27,-.02,1.15]];for(const[ct,W,it,L]of Wt){const yt=new w(new Te(.035*L,.11*L,5),l);yt.position.set(ct,W,it),yt.rotation.x=.25+it*.8,yt.rotation.z=-ct*.6,N.add(yt)}const Yt=new w(new zt(.18,.012,.01),f);Yt.position.set(0,.072,.16),N.add(Yt),i.add(N);const et=new ut;et.name="orcSpear",et.position.set(.02,-.02,.03),et.rotation.set(-.88,.08,.08),et.userData.rest={x:.02,y:-.02,z:.03,rx:-.88,ry:.08,rz:.08};const ft=new w(new Vt(.018,.022,2.15,6),u);ft.position.y=-.95,m(ft,et);const Rt=new w(new Fe(.11,0),h);Rt.scale.set(.32,2.2,.22),Rt.position.y=-2.12,m(Rt,et);const X=new w(new Vt(.03,.022,.06,6),h);X.position.y=-1.92,et.add(X);const rt=new w(new Te(.022,.07,4),h);rt.position.y=.14,et.add(rt),(R.getObjectByName("orcHandR")??R).add(et);const Tt=new w(new Vt(.45,.5,1.9,8),new de({visible:!1}));return Tt.position.y=.95,Tt.name="hit",i.add(Tt),i}function Me(i,t={}){return new Hi({color:i,roughness:t.roughness??.78,metalness:t.metalness??.04,flatShading:t.flatShading??!0,envMapIntensity:t.envMapIntensity??.7,...t})}function wt(i,t){return t.castShadow=!0,i.add(t),t}const at={fur:()=>Me(14083056,{roughness:.96,sheen:.3,sheenColor:new St(12900328),sheenRoughness:.8}),furMid:()=>Me(11124176,{roughness:.97,sheen:.18,sheenColor:new St(10269382)}),hide:()=>Me(7175306,{roughness:.82,flatShading:!1}),hideDark:()=>Me(2699578,{roughness:.86,flatShading:!1}),claw:()=>Me(1316378,{roughness:.3,metalness:.32,flatShading:!1}),bone:()=>Me(15260868,{roughness:.48,flatShading:!1}),boneDark:()=>Me(12890256,{roughness:.62}),fang:()=>Me(15919830,{roughness:.3,flatShading:!1}),ice:()=>Me(12118271,{roughness:.14,metalness:.3,emissive:4892872,emissiveIntensity:.42}),amber:()=>Me(16761418,{emissive:16750848,emissiveIntensity:.7,roughness:.28,flatShading:!1}),wrap:()=>Me(3810324,{roughness:.9}),sinew:()=>Me(5913122,{roughness:.86,flatShading:!1}),clawTip:()=>Me(2763826,{roughness:.22,metalness:.42,flatShading:!1}),iceHot:()=>Me(13956351,{roughness:.1,metalness:.34,emissive:6211816,emissiveIntensity:.55}),pelt:()=>Me(14083056,{roughness:.96,side:le,sheen:.26,sheenColor:new St(12900328)}),peltU:()=>Me(11913435,{roughness:.97,side:le}),peltMid:()=>Me(11584470,{roughness:.97,side:le}),peltMidU:()=>Me(9611454,{roughness:.97,side:le}),peltDeep:()=>Me(9413818,{roughness:.97,side:le}),peltDeepU:()=>Me(7637407,{roughness:.98,side:le})};function xh(i,t,e,n,s,o,r,a=0,c=0,l=Math.PI*2,h=0){const u=[],d=(_,g,p)=>{u.push(Math.cos(_)*p,g,a+Math.sin(_)*p)};for(let _=0;_<n;_++){const g=h-l/2+(_+c)/n*l,p=h-l/2+(_+1+c)/n*l,S=(g+p)/2,y=_*7%5/5,v=s*(.7+y*.55);d(g,t,e),d(p,t,e),d(S,t-v,e*o)}const f=new Le;f.setAttribute("position",new Zt(u,3)),f.computeVertexNormals();const m=new w(f,r);m.castShadow=!0,i.add(m)}function We(i,t,e,n,s,o,r,a,c=0,l=Math.PI*2,h=0){xh(i,t+s*.1,e*.98,n,s*1.18,o*.96,a,c,.5,l,h),xh(i,t,e,n,s,o,r,c,0,l,h)}function ke(i,t,e=.35){const n=new ut,s=t*.55,o=new w(new Vt(t,s,i*.55,6),at.claw());o.position.y=-i*.275,wt(n,o);const r=new ut;r.position.y=-i*.55,r.rotation.x=-.86;const a=new w(new Te(s,i*.58,6),at.clawTip());return a.rotation.x=Math.PI,a.position.y=-i*.28,wt(r,a),n.add(r),n.rotation.x=-e,n}function Du(i,t){const e=new ut,n=new w(new Vt(t*.88,t*1.04,i,8),at.bone());n.position.y=i*.5,wt(e,n);const s=new w(new Vt(t*1.16,t*1.26,Math.min(i*.48,.2),8),at.hide());s.position.y=.03+Math.min(i*.18,.08),wt(e,s);const o=7;for(let a=0;a<o;a++){const c=new w(new Ne(t*1.3,.0075,5,10),at.sinew());c.rotation.x=Math.PI/2,c.rotation.z=a*.35,c.position.y=.02+a*.026,e.add(c)}const r=new w(new nt(t*1.45,8,6),at.boneDark());return r.scale.set(1,1.3,1),wt(e,r),e}function i_(i,t,e,n,s){for(let o=0;o<e;o++){const r=o/e*Math.PI*2,a=new w(new Fe(s,0),at.ice());a.position.set(Math.cos(r)*n,t,Math.sin(r)*n),a.rotation.set(.4,r,.3),a.scale.set(.4,1.9,.4),wt(i,a)}}function ti(i,t,e,n,s,o,r,a=1){for(let c=0;c<o;c++){const l=c/o*Math.PI*2+a,h=s*(.35+(c*5+a)%4/4*.75),u=r*(.65+c*3%5/5*.9),d=new w(new Fe(u,0),c%2?at.iceHot():at.ice());d.position.set(t+Math.cos(l)*h,e+(c%3-1)*r*.28,n+Math.sin(l)*h),d.rotation.set(l*.7,l,(c%5-2)*.25),d.scale.set(.4,1.7+c*7%4*.35,.4),wt(i,d)}}function An(i,t,e,n,s,o,r="y"){for(let a=0;a<s;a++){const c=new w(new zt(.006,.014,.004),at.sinew());r==="y"?c.position.set(t,e+a*o,n):(c.rotation.z=Math.PI/2,c.position.set(t+a*o,e,n)),i.add(c)}}function Uu(){const i=new ut,t=Du(.18,.028);t.position.y=-.02,i.add(t);const e=new w(new nt(.042,10,8),at.boneDark());e.scale.set(1,.85,1),e.position.y=-.1,wt(i,e);const n=new w(new nt(.028,10,8),at.amber());n.name="toolHeel",n.position.y=-.1,wt(i,n);for(const c of[-1,1]){const l=ke(.28,.028,.18);l.rotation.z=c*1.45,l.position.set(c*.04,.1,0),i.add(l);const h=new w(new Fe(.022,0),at.iceHot());h.position.set(c*.05,.12,.02),h.scale.set(.45,1.6,.45),wt(i,h)}We(i,.1,.055,10,.09,1.28,at.pelt(),at.peltU());const s=6;for(let c=0;c<s;c++){const l=c/s,h=.074-l*.028,u=new w(new zt(h,.58/s+.006,.028-l*.008),at.bone());u.position.y=.18+.58/s*(c+.5),wt(i,u)}const o=new w(new zt(.016,.46,.032),at.boneDark());o.position.y=.42,wt(i,o);const r=new w(new zt(.014,.56,.048),at.iceHot());r.position.set(-.034,.42,0),wt(i,r),ti(i,-.03,.48,0,.04,5,.018,2);for(let c=0;c<5;c++){const l=c/4,h=ke(.24-l*.05,.022-l*.003,.12);h.rotation.z=-1.28,h.position.set(.036,.2+c*.11,0),i.add(h)}const a=ke(.24,.02,.04);return a.name="toolEdge",a.position.y=.82,i.add(a),i}function Nu(){const i=new ut,t=Du(.46,.028);t.position.y=-.06,i.add(t);const e=new ut;e.position.y=.4;const n=new w(new Vt(.038,.044,.08,8),at.boneDark());n.position.y=-.08,wt(e,n);const s=new w(new nt(.1,10,8),at.hideDark());s.scale.set(1.2,1,1.4),wt(e,s);const o=new w(new Fe(.12,0),at.iceHot());o.scale.set(.9,.75,1.25),o.position.z=.08,wt(e,o);const r=new w(new zt(.14,.12,.08),at.iceHot());r.position.z=.1,wt(e,r),We(e,.05,.1,12,.1,1.22,at.pelt(),at.peltU()),ti(e,0,.04,.08,.08,7,.028,3);const a=ke(.26,.03,1.2);a.position.z=.14,e.add(a);const c=ke(.2,.024,.12);c.rotation.x=Math.PI,c.position.z=-.14,e.add(c);for(const u of[-1,1]){const d=ke(.16,.018,.35);d.rotation.z=u*1.25,d.position.set(u*.09,.02,.02),e.add(d)}const l=new w(new zt(.07,.07,.02),at.claw());l.name="toolEdge",l.position.z=.17,e.add(l);const h=new w(new zt(.06,.06,.02),at.hideDark());return h.name="toolHeel",h.position.z=-.16,e.add(h),i.add(e),i}function Fu(){const i=new ut,t=new w(new Vt(.028,.036,1.02,8),at.bone());t.position.y=.28,wt(i,t);const e=new w(new Vt(.034,.04,.28,8),at.hide());e.position.y=.02,wt(i,e);for(let c=0;c<7;c++){const l=new w(new Ne(.042,.007,5,10),at.sinew());l.rotation.x=Math.PI/2,l.rotation.z=c*.4,l.position.y=-.06+c*.026,i.add(l)}We(i,.14,.05,10,.1,1.32,at.pelt(),at.peltU());const n=new w(new nt(.07,10,8),at.hideDark());n.scale.set(1.25,.85,1.15),n.position.y=.7,wt(i,n);const s=new w(new nt(.068,8,6),at.iceHot());s.scale.set(1.05,.5,1.05),s.position.y=.66,wt(i,s),ti(i,0,.7,.02,.06,6,.022,4);const o=ke(.28,.024,.06);o.name="toolEdge",o.position.y=.8,i.add(o);for(const c of[-1,1]){const l=new w(new Te(.024,.22,6),at.fang());l.position.set(c*.034,.88,0),l.rotation.z=c*.34,wt(i,l);const h=ke(.2,.02,.32);h.rotation.z=c*1.22,h.position.set(c*.038,.7,.01),i.add(h)}const r=new w(new nt(.036,8,6),at.boneDark());r.name="toolHeel",r.position.y=-.24,wt(i,r);const a=new w(new Te(.014,.06,5),at.ice());return a.position.y=-.28,a.rotation.x=Math.PI,wt(i,a),i}function Ou(){const i=new ut,t=new w(new Vt(.034,.04,.17,8),at.hide());wt(i,t);const e=new w(new Vt(.01,.01,.08,6),at.bone());e.rotation.z=Math.PI/2,wt(i,e),We(i,.02,.045,9,.08,1.28,at.pelt(),at.peltU()),An(i,.02,-.05,.03,5,.022);for(const s of[-1,1]){const o=new Hc(new I(0,s*.08,0),new I(0,s*.36,-.08),new I(0,s*.6,-.38)),r=new w(new tr(o,12,.024,7,!1),at.bone());wt(i,r);const a=new w(new tr(o,10,.018,6,!1),at.hide());a.position.x=.014,i.add(a);const c=new w(new Fe(.038,0),at.iceHot());c.position.set(0,s*.6,-.38),c.scale.set(.7,1.35,.7),wt(i,c);const l=ke(.15,.016,.22);l.position.set(0,s*.58,-.36),i.add(l),ti(i,0,s*.38,-.16,.04,3,.016,s+2)}const n=new w(new Vt(.006,.006,1.2,5),at.claw());return n.position.set(0,0,-.38),i.add(n),i}function zu(){const i=new ut,t=new w(new Vt(.26,.3,.07,12),at.hideDark());t.rotation.x=Math.PI/2,wt(i,t);const e=new w(new Vt(.24,.26,.04,12),at.hide());e.rotation.x=Math.PI/2,e.position.z=.03,wt(i,e);for(const[h,u,d]of[[.08,.1,.1],[-.1,.06,.09],[.02,-.12,.1],[-.08,-.04,.08]]){const f=new w(new nt(d,8,6),at.fur());f.scale.set(1.15,1.1,.45),f.position.set(h,u,.05),wt(i,f)}const n=new w(new Ne(.29,.022,6,16),at.bone());n.position.z=.02,wt(i,n);const s=new ut;s.rotation.x=Math.PI/2,We(s,0,.3,18,.12,1.18,at.pelt(),at.peltU()),i.add(s);const o=new w(new nt(.12,10,8),at.iceHot());o.scale.set(1,1,.62),o.position.z=.055,wt(i,o);const r=new w(new nt(.07,8,6),at.hideDark());r.position.z=.1,wt(i,r);const a=ke(.2,.024,1.15);a.position.z=.13,i.add(a),ti(i,0,0,.08,.1,6,.024,5),An(i,.09,-.08,.055,6,.028),An(i,-.1,-.08,.055,6,.028);for(let h=0;h<8;h++){const u=h/8*Math.PI*2,d=ke(.22,.022,1.18);if(d.position.set(Math.cos(u)*.31,Math.sin(u)*.31,.03),d.rotation.z=u+Math.PI/2,i.add(d),h%2===0){const f=new w(new Fe(.028,0),at.ice());f.position.set(Math.cos(u)*.27,Math.sin(u)*.27,.05),f.scale.set(.4,1.6,.4),wt(i,f)}}const c=-.08,l=new w(new zt(.13,.24,.028),at.hideDark());l.position.set(0,-.01,-.032),wt(i,l);for(const[h,u]of[[.075,"shieldStrapElbow"],[-.085,"shieldStrapWrist"]]){const d=new w(new Ne(.072,.02,6,14),at.wrap());d.name=u,d.rotation.x=Math.PI/2,d.position.set(0,h,c),wt(i,d);const f=new w(new Ne(.072,.013,5,12),at.hide());f.rotation.x=Math.PI/2,f.position.set(0,h,c),wt(i,f);for(const m of[-1,1]){const _=new w(new zt(.022,.03,.042),at.boneDark());_.position.set(m*.058,h,-.03),wt(i,_)}}return i}function Bu(){const i=new ut,t=new w(new nt(.29,12,10),at.hideDark());t.scale.set(.88,1.14,.78),t.position.set(0,.02,.03),wt(i,t);const e=new w(new nt(.2,10,8),at.hide());e.scale.set(.95,.88,.55),e.position.set(0,-.14,.1),wt(i,e);for(const a of[-1,1]){const c=new w(new nt(.09,10,8),at.hide());c.scale.set(1.15,.7,.55),c.position.set(a*.1,.06,.18),wt(i,c)}We(i,.28,.26,16,.14,1.14,at.pelt(),at.peltU()),We(i,-.22,.15,8,.1,1.1,at.peltMid(),at.peltMidU(),0,Math.PI*.7,Math.PI/2),We(i,-.22,.14,8,.1,1.1,at.peltMid(),at.peltMidU(),0,Math.PI*.7,-Math.PI/2);const n=new ut;n.position.set(0,.22,-.12),n.rotation.x=.52,We(n,0,.21,16,.4,1.26,at.pelt(),at.peltU()),We(n,-.06,.18,12,.28,1.18,at.peltDeep(),at.peltDeepU()),i.add(n);const s=new w(new nt(.14,10,8),at.hide());s.scale.set(1.45,.24,1),s.position.set(0,.28,.02),wt(i,s);for(let a=0;a<4;a++){const c=new w(new zt(.2-a*.018,.028,.04),at.bone());c.position.set(0,.12-a*.07,.2),c.rotation.x=-.12,wt(i,c),An(i,-.09,.12-a*.07,.22,1,0),An(i,.09,.12-a*.07,.22,1,0)}for(const a of[-1,1]){const c=new w(new nt(.11,10,8),at.hide());c.scale.set(1.15,.64,1.05),c.position.set(a*.24,.22,.03),wt(i,c);const l=new w(new Fe(.1,0),at.iceHot());l.position.set(a*.28,.36,.05),l.scale.set(.4,2.05,.36),wt(i,l),ti(i,a*.26,.3,.08,.06,4,.02,a+3);const h=ke(.22,.022,.1);h.position.set(a*.28,.26,.12),h.rotation.z=a*.98,i.add(h);const u=ke(.16,.02,.48);u.position.set(a*.1,-.02,.21),u.rotation.z=a*.42,i.add(u)}const o=new w(new Ne(.038,.008,5,10),at.boneDark());o.position.set(0,.05,.23),wt(i,o);const r=new w(new nt(.036,8,6),at.amber());return r.position.set(0,.05,.236),wt(i,r),i}function s_(){const i=new ut,t=new w(new Vt(.064,.08,.24,10),at.hide());t.position.set(0,-.14,.008),wt(i,t);const e=new w(new Vt(.07,.082,.08,8),at.hideDark());e.position.set(0,-.09,.008),wt(i,e);const n=new w(new zt(.058,.18,.034),at.bone());n.position.set(0,-.14,.074),wt(i,n);const s=new w(new zt(.038,.16,.024),at.iceHot());s.position.set(0,-.14,.094),wt(i,s),We(i,-.02,.084,10,.075,1.2,at.pelt(),at.peltU());const o=new w(new Ne(.054,.014,5,10),at.bone());o.rotation.x=Math.PI/2,o.position.set(0,-.25,.008),wt(i,o),ti(i,0,-.12,.09,.032,3,.014,4),An(i,-.032,-.22,.07,4,.03),An(i,.032,-.22,.07,4,.03);const r=ke(.11,.013,.15);return r.position.set(.02,-.05,.08),r.rotation.z=.4,i.add(r),i}function ku(){const i=new ut,t=new w(new Vt(.1,.088,.3,10),at.hideDark());t.position.y=-.12,wt(i,t),We(i,.03,.115,12,.12,1.2,at.pelt(),at.peltU());const e=new w(new zt(.08,.22,.03),at.bone());e.position.set(0,-.12,.09),wt(i,e);for(let s=0;s<3;s++){const o=ke(.13,.016,.22);o.position.set(0,-.02-s*.065,.1),i.add(o)}const n=new w(new zt(.07,.2,.038),at.iceHot());return n.position.set(0,-.12,.11),wt(i,n),ti(i,0,-.08,.12,.04,4,.016,6),An(i,-.045,-.2,.1,5,.03),An(i,.045,-.2,.1,5,.03),i}function Hu(){const i=new ut,t=new w(new Vt(.13,.095,.4,10),at.hideDark());t.position.y=-.2,wt(i,t),We(i,.02,.14,14,.2,1.16,at.pelt(),at.peltU()),We(i,-.14,.12,13,.18,1.14,at.peltMid(),at.peltMidU()),We(i,-.28,.1,11,.12,1.12,at.peltDeep(),at.peltDeepU());const e=new w(new zt(.13,.26,.055),at.hide());e.position.set(0,-.16,.105),wt(i,e),An(i,-.05,-.26,.13,6,.032),An(i,.05,-.26,.13,6,.032);const n=ke(.14,.016,.2);return n.position.set(.04,.02,.12),n.rotation.z=.6,i.add(n),i}function Gu(){const i=new ut,t=new w(new Vt(.08,.092,.14,10),at.hideDark());t.position.y=.04,wt(i,t),We(i,.11,.095,11,.1,1.22,at.pelt(),at.peltU());const e=new w(new nt(.086,10,8),at.hide());e.scale.set(1.25,.58,1.85),e.position.set(0,-.03,.11),wt(i,e);const n=new w(new zt(.06,.03,.1),at.ice());n.position.set(0,0,.14),wt(i,n);for(let s=0;s<4;s++){const o=(s-1.5)*.032,r=ke(.16+(s===1||s===2?.03:0),.016,1.18);r.position.set(o,-.03,.22),i.add(r)}return ti(i,0,.04,.08,.04,3,.014,7),i}function o_(){const i=new ut;i.name="forge";const t=Me(6974054,{roughness:.94}),e=Me(8013104,{roughness:.88}),n=Me(2761760,{roughness:.96}),s=Me(3817544,{metalness:.5,roughness:.38});for(let D=0;D<10;D++){const T=D/10*Math.PI*2,C=new w(new Kn(.16,0),t);C.position.set(Math.cos(T)*.62,.14,Math.sin(T)*.5),C.rotation.set(.2,T,.15),wt(i,C)}const o=new w(new Vt(.42,.48,.16,12),n);o.position.y=.12,wt(i,o);const r=new w(new nt(.22,8,6),Me(16737826,{emissive:16729088,emissiveIntensity:1.6,roughness:.45}));r.scale.set(1.35,.55,1.15),r.position.set(0,.28,0),r.name="forgeEmber",wt(i,r);const a=new w(new nt(.34,8,6),new de({color:16755268,transparent:!0,opacity:.34,depthWrite:!1}));a.position.set(0,.32,0),a.name="forgeGlow",i.add(a);const c=new _r(16746564,1.35,9);c.position.set(0,.7,0),i.add(c);const l=new w(new zt(.42,.7,.42),e);l.position.set(0,.62,-.42),wt(i,l);const h=new w(new zt(.52,.1,.52),t);h.position.set(0,1,-.42),wt(i,h),i_(i,1.08,6,.2,.045);const u=new ut;u.position.set(.72,.28,.08);const d=new w(new Vt(.12,.16,.28,8),at.boneDark());d.position.y=.14,wt(u,d);const f=new w(new zt(.42,.12,.18),s);f.position.y=.32,wt(u,f);const m=new w(new zt(.2,.08,.1),s);m.position.set(.26,.3,0),wt(u,m),i.add(u);const _=new w(new Vt(.03,.035,1.15,6),at.boneDark());_.position.set(-.7,.58,-.05),wt(i,_);const g=new ut;g.position.set(-.7,.78,.1),g.rotation.x=-.4,We(g,0,.22,14,.2,1.2,at.pelt(),at.peltU()),i.add(g);for(const[D,T]of[[-.82,.28],[-.58,.3],[-.7,.38]]){const C=ke(.14,.016,1.1);C.position.set(D,.62,T),i.add(C)}const p=ke(.16,.02,.5);p.position.set(.72,.66,.08),p.rotation.z=.9,i.add(p);const S=new w(new Te(.03,.16,6),at.bone());S.position.set(.58,.62,.16),S.rotation.z=.8,wt(i,S);const y=new w(new Vt(.02,.024,.28,6),at.boneDark());y.position.set(-.52,.42,.28),y.rotation.z=1.1,wt(i,y);const v=new w(new Vt(.95,1.05,1.4,10),new de({visible:!1}));return v.position.y=.7,v.name="hit",i.add(v),i}function r_(){const i=new ut,t=new w(new nt(.14,10,8),at.hide());return t.scale.set(1.4,.35,1.1),wt(i,t),We(i,.04,.12,10,.08,1.2,at.pelt(),at.peltU()),i}function a_(){const i=new ut,t=new w(new Te(.04,.26,7),Me(15919830,{roughness:.32,flatShading:!1}));t.rotation.z=.2,wt(i,t);const e=new w(new Fe(.03,0),at.ice());return e.position.y=-.1,wt(i,e),i}function c_(){const i=new ut,t=new w(new Vt(.03,.035,.32,8),at.bone());t.rotation.z=.4,wt(i,t);for(const e of[-.14,.14]){const n=new w(new nt(.04,8,6),at.boneDark());n.position.set(e*.35,e,0),wt(i,n)}return i}function l_(){const i=new ut,t=new w(new Fe(.12,0),at.ice());t.scale.set(.55,1.6,.55),wt(i,t);const e=new w(new Fe(.06,0),at.ice());return e.position.set(.05,-.04,.02),e.rotation.z=.6,wt(i,e),i}function h_(i){const t=i.getObjectByName("playerTorso");if(t){const n=Bu();n.name="wear_chest",n.visible=!1,n.position.set(0,0,.02),n.scale.setScalar(1.02),t.add(n)}for(const n of[-1,1]){const s=i.getObjectByName(n<0?"forearmL":"forearmR");if(s){const o=s_();o.name=n<0?"wear_bracerL":"wear_bracerR",o.visible=!1,s.add(o)}}const e=i.getObjectByName("forearmL");if(e){const n=zu();n.name="wear_shield",n.visible=!1,n.position.set(0,-.14,-.08),n.rotation.set(0,Math.PI,0),n.scale.setScalar(1.12),e.add(n)}for(const n of[-1,1]){const s=i.getObjectByName(n<0?"legL":"legR");if(s){const a=Hu();a.name=n<0?"wear_legL":"wear_legR",a.visible=!1,a.position.set(0,-.02,0),a.scale.setScalar(1.08),s.add(a)}const o=i.getObjectByName(n<0?"shinL":"shinR");if(o){const a=ku();a.name=n<0?"wear_greaveL":"wear_greaveR",a.visible=!1,a.position.set(0,-.04,.02),a.scale.setScalar(1.12),o.add(a)}const r=i.getObjectByName(n<0?"footL":"footR");if(r){const a=Gu();a.name=n<0?"wear_bootL":"wear_bootR",a.visible=!1,a.position.set(0,.02,.02),a.scale.setScalar(1.2),r.add(a)}}}function zo(i,t,e){i.traverse(n=>{n.userData.baseLayer===t&&(n.visible=e)})}function u_(i,t){const e=(l,h)=>{const u=i.getObjectByName(l);u&&(u.visible=h)},n=t.chest==="frost_chest",s=t.legs==="frost_legs",o=t.greaves==="frost_greaves",r=t.boots==="frost_boots",a=!!i.getObjectByName("bowRoot")?.visible,c=t.shield==="frost_shield"&&!a;e("wear_shield",c),e("wear_chest",n),e("wear_bracerL",n&&!c),e("wear_bracerR",n),e("wear_legL",s),e("wear_legR",s),e("wear_greaveL",o),e("wear_greaveR",o),e("wear_bootL",r),e("wear_bootR",r),zo(i,"chest",!n),zo(i,"legs",!s),zo(i,"greaves",!o),zo(i,"boots",!r)}const yh=new Map;function Ie(i,t={}){const e=`${i}_${t.roughness??.62}_${t.metalness??.06}_${t.clearcoat??0}_${t.sheen??0}_${t.emissive??0}_${t.emissiveIntensity??0}_${t.envMapIntensity??1}_${t.flatShading===!1?0:1}`;let n=yh.get(e);return n||(n=new Hi({color:i,roughness:t.roughness??.62,metalness:t.metalness??.06,envMapIntensity:t.envMapIntensity??1,flatShading:t.flatShading??!1,...t}),yh.set(e,n)),n}function Bo(i,t){const e=Math.sin(i*127.1+t*311.7)*43758.5453;return e-Math.floor(e)}function nr(i,t){const e=Math.floor(i),n=Math.floor(t),s=i-e,o=t-n,r=s*s*(3-2*s),a=o*o*(3-2*o),c=Bo(e,n),l=Bo(e+1,n),h=Bo(e,n+1),u=Bo(e+1,n+1);return c+(l-c)*r+(h-c)*a+(c-l-h+u)*r*a}function ir(i,t,e=5){let n=0,s=.5,o=1;for(let r=0;r<e;r++)n+=s*nr(i*o,t*o),s*=.5,o*=2.05;return n}function Gc(i,t){const e=document.createElement("canvas"),n=document.createElement("canvas"),s=document.createElement("canvas");e.width=e.height=n.width=n.height=s.width=s.height=i;const o=e.getContext("2d"),r=n.getContext("2d"),a=s.getContext("2d"),c=o.createImageData(i,i),l=r.createImageData(i,i),h=a.createImageData(i,i);for(let d=0;d<i;d++)for(let f=0;f<i;f++){const m=t(f/i,d/i),_=(d*i+f)*4;c.data[_]=m.r,c.data[_+1]=m.g,c.data[_+2]=m.b,c.data[_+3]=255;const g=Math.max(0,Math.min(255,m.rough));l.data[_]=l.data[_+1]=l.data[_+2]=g,l.data[_+3]=255;const p=Math.max(0,Math.min(255,m.bump));h.data[_]=h.data[_+1]=h.data[_+2]=p,h.data[_+3]=255}o.putImageData(c,0,0),r.putImageData(l,0,0),a.putImageData(h,0,0);const u=(d,f)=>{const m=new zc(d);return m.wrapS=m.wrapT=_s,m.anisotropy=8,m.colorSpace=f?$e:Un,m.needsUpdate=!0,m};return{map:u(e,!0),roughnessMap:u(n,!1),bumpMap:u(s,!1)}}let li=null,hi=null,ca=null;function d_(){return li||(li=Gc(256,(i,t)=>{const e=ir(i*18,t*42),n=nr(i*70,t*70),s=ir(i*4.5,t*3.2,3),o=Math.pow(nr(i*9+t*40,t*2),8),r=.42+e*.28+s*.16-o*.22+n*.06,a=138+r*108,c=112+r*92,l=92+r*74;return{r:a,g:c,b:l,rough:110+e*90-o*40,bump:90+e*110+n*30-o*50}}),li.map.repeat.set(2.2,2.2),li.roughnessMap.repeat.copy(li.map.repeat),li.bumpMap.repeat.copy(li.map.repeat)),li}function f_(){return hi||(hi=Gc(256,(i,t)=>{const e=Math.abs(Math.sin(i*Math.PI*64))*.12+Math.abs(Math.sin(t*Math.PI*64))*.12,n=ir(i*10,t*10,4),s=.28+n*.18+e;return{r:124+s*74,g:130+s*78,b:126+s*70,rough:170+e*80,bump:100+e*90+n*40}}),hi.map.repeat.set(3,3),hi.roughnessMap.repeat.copy(hi.map.repeat),hi.bumpMap.repeat.copy(hi.map.repeat)),hi}function p_(){return ca||(ca=Gc(256,(i,t)=>{const e=ir(i*6,t*8,4),n=Math.pow(nr(i*40,t*40),6),s=212+e*24-n*22,o=196+e*18-n*18,r=184+e*14-n*14;return{r:s,g:o,b:r,rough:96+e*40,bump:118+e*28}})),ca}function la(i,t={}){const e=d_();return new Hi({color:i,map:e.map,roughnessMap:e.roughnessMap,bumpMap:e.bumpMap,bumpScale:.018,roughness:.58,metalness:.08,clearcoat:.16,clearcoatRoughness:.55,sheen:.22,sheenColor:new St(6963240),sheenRoughness:.7,envMapIntensity:.7,flatShading:!1,...t})}function Mh(i){const t=f_();return new Hi({color:i,map:t.map,roughnessMap:t.roughnessMap,bumpMap:t.bumpMap,bumpScale:.02,roughness:.86,metalness:.02,sheen:.18,sheenColor:new St(3818552),sheenRoughness:.85,envMapIntensity:.4,flatShading:!1})}function wh(i,t={}){const e=p_();return new Hi({color:i,map:e.map,roughnessMap:e.roughnessMap,bumpMap:e.bumpMap,bumpScale:.012,roughness:.48,metalness:0,sheen:.35,sheenColor:new St(12611664),sheenRoughness:.55,envMapIntensity:.32,emissive:new St(2757648),emissiveIntensity:.012,flatShading:!1,...t})}function Ot(i,t){return i.castShadow=!0,i.receiveShadow=!0,t.add(i),i}function me(i,t){i.userData.baseLayer=t}function os(i,t=16){const e=i.map(([n,s])=>new gt(n,s));return new eo(e,t)}function Sh(i,t,e,n){const s=new pr;s.moveTo(-i*.5,0),s.lineTo(i*.5,0),s.lineTo(0,-t),s.closePath();const o=new io(s,{depth:e,bevelEnabled:!1});o.translate(0,0,-e*.5);const r=new w(o,n);return r.castShadow=!0,r}function Eh(i,t,e,n,s,o=0,r){const a=Math.hypot(n*1.7,e-t);for(const c of[-1,1]){const l=new w(new zt(.028,a,.016),s);l.position.set(0,(t+e)*.5,o),l.rotation.z=c*Math.atan2(n*.95,(e-t)*.5),l.castShadow=!0,r&&me(l,r),i.add(l)}}function Th(i,t,e,n){const s=new w(new zt(i,i,t),n);s.castShadow=!0;const o=new w(new zt(i*.42,i*.42,t+.008),new Hi({color:2761752,roughness:.7,metalness:.2,flatShading:!1}));return s.add(o),s}function bh(i,t,e,n,s,o,r,a,c,l){for(let h=0;h<o;h++){const u=h/o*Math.PI*2,d=new w(new zn(r,0),h%2?c:a);d.position.set(t+Math.cos(u)*s,e+h%2*.012,n+Math.sin(u)*s),d.rotation.set(.2,u,.15),d.scale.set(1.15,.85,1.05),d.castShadow=!0,l&&me(d,l),i.add(d)}}const Vc=new I(0,-.008,.041);function Ah(i,t,e,n){const s=new ut,o=new w(new be(n,e*.34,3,8),t);o.position.y=-e*.25,Ot(o,s);const r=new ut;r.position.y=-e*.48;const a=new w(new be(n*.88,e*.24,3,8),i);a.position.y=-e*.16,Ot(a,r),s.add(r);const c=new ut;c.position.y=-e*.32;const l=new w(new be(n*.74,e*.16,3,8),i);l.position.y=-e*.12,Ot(l,c);const h=new w(new nt(n*.6,6,5),i);return h.scale.set(.9,.5,.45),h.position.set(0,-e*.19,-n*.55),c.add(h),r.add(c),{root:s,mid:r,tip:c}}function Ye(i,t){if(!i)return;const e=i.userData.fingers,n=i.userData.thumb;if(!e)return;const s=Math.max(0,Math.min(1.15,t));for(let o=0;o<e.length;o++){const r=1+(o-1.5)*-.07,a=e[o];a.root.rotation.x=-s*.98*r,a.mid.rotation.x=-s*1.22*r,a.tip.rotation.x=-s*.82*r}n&&(n.root.rotation.x=-.55-s*.35,n.mid.rotation.x=-s*.55,n.tip.rotation.x=-s*.45)}function m_(i,t,e,n){const s=new ut,o=new w(new nt(.047,12,10),t);o.scale.set(1.02,.98,.66),o.position.set(0,-.016,.01),Ot(o,s);const r=new w(new be(.037,.022,4,10),e);r.position.set(0,.018,.006),Ot(r,s);const a=new ut;a.name="grip",a.position.set(0,-.036,.012),a.rotation.z=0,s.add(a);const c=new w(new be(.014,.058,4,8),t);c.rotation.z=Math.PI/2,c.position.set(0,.004,.014),Ot(c,a);const l=[];for(let u=0;u<4;u++){const d=.074-Math.abs(u-1.1)*.007,f=Ah(i,t,d,.0118-u*9e-4);f.root.position.set(-.031+u*.0207,0,.012-Math.abs(u-1.5)*.005),a.add(f.root),l.push(f)}const h=Ah(i,t,.064,.0136);return h.root.position.set(.04,.014,.03),h.root.rotation.z=-1.18,a.add(h.root),s.userData.fingers=l,s.userData.thumb=h,s.userData.gripPoint=Vc.clone(),Ye(s,.22),s}function Wc(){const i=new ut;i.name="player",i.userData.locomotionY=0;const t=wh(12618850),e=wh(10646092,{roughness:.56}),n=Ie(3154714,{roughness:.94,sheen:.22,sheenColor:new St(3811352),flatShading:!0}),s=la(10117688),o=la(5386780,{roughness:.78,clearcoat:.04}),r=la(12618322,{roughness:.58,clearcoat:.12}),a=Ie(13215860,{roughness:.92,metalness:0,sheen:.22,sheenColor:new St(13148272),sheenRoughness:.7,envMapIntensity:.12,flatShading:!0}),c=Ie(9268292,{roughness:.95,sheen:.16,sheenColor:new St(9068600),flatShading:!0}),l=Ie(11307097,{roughness:.93,sheen:.18,sheenColor:new St(11173960),flatShading:!0}),h=Mh(5594455),u=Mh(4081215);Ie(15265524,{metalness:.92,roughness:.18,clearcoat:.55,clearcoatRoughness:.12,envMapIntensity:1.35});const d=Ie(16186108,{metalness:.96,roughness:.1,clearcoat:.7,clearcoatRoughness:.08,emissive:13161696,emissiveIntensity:.38,envMapIntensity:1.55}),f=new w(new Cn(.38,24),new de({color:0,transparent:!0,opacity:.38,depthWrite:!1}));f.rotation.x=-Math.PI/2,f.position.y=.025,f.name="contactShadow",i.add(f);const m=new ut;m.name="playerHips",i.add(m);const _=H=>{const K=new ut;K.name=H<0?"legL":"legR",K.position.set(H*.16,.94,0);const Z=new w(new nt(.1,14,12),h);Z.scale.set(1.04,1,1.02),me(Ot(Z,K),"legs");const mt=new w(os([[.096,-.04],[.1,-.14],[.092,-.26],[.08,-.36],[.07,-.42]],14),h);me(Ot(mt,K),"legs");const dt=new w(new nt(.075,12,9),h);dt.scale.set(1,1.7,.85),dt.position.set(0,-.2,.04),me(Ot(dt,K),"legs");const A=new w(new nt(.07,12,9),u);A.scale.set(1,1.6,.8),A.position.set(0,-.18,-.04),me(Ot(A,K),"legs");const M=new ut;M.name=H<0?"shinL":"shinR",M.position.set(0,-.44,0);const G=new w(new nt(.076,14,12),h);G.scale.set(1,.95,1),Ot(G,M);const j=new w(new nt(.04,10,8),h);j.scale.set(1.1,1.1,.7),j.position.set(0,-.01,.062),Ot(j,M);const lt=new w(os([[.07,-.02],[.072,-.08],[.064,-.14],[.058,-.17]],14),u);lt.position.set(0,0,-.012),Ot(lt,M);const ot=new w(new nt(.056,12,9),u);ot.scale.set(1.05,1.5,.9),ot.position.set(0,-.09,-.04),Ot(ot,M);const Ft=new w(new Vt(.09,.098,.1,14),s);Ft.position.set(0,-.2,-.016),me(Ot(Ft,M),"greaves"),Eh(M,-.15,-.25,.094,o,.02,"greaves");const Et=new w(new Ne(.092,.022,6,10),a);Et.rotation.x=Math.PI/2,Et.position.set(0,-.14,.02),me(Et,"greaves"),M.add(Et);const Lt=new w(new Ne(.082,.018,6,10),c);Lt.rotation.x=Math.PI/2,Lt.position.set(0,-.24,0),me(Lt,"greaves"),M.add(Lt);const ne=new w(new Vt(.048,.058,.14,12),o);ne.position.set(0,-.36,-.006),me(Ot(ne,M),"boots");const pt=new w(new Vt(.052,.055,.045,12),s);pt.position.set(0,-.34,-.006),me(Ot(pt,M),"boots");const Pt=new ut;Pt.name=H<0?"footL":"footR",Pt.position.set(0,-.48,.04);const Xt=new w(new nt(.04,12,10),o);me(Ot(Xt,Pt),"boots");const qt=new w(new nt(.046,10,8),o);qt.position.set(0,-.016,-.05),me(Ot(qt,Pt),"boots");const Nt=new w(new be(.05,.16,5,12),s);Nt.rotation.x=Math.PI/2,Nt.position.set(0,-.004,.12),Nt.scale.set(1.2,1,.68),me(Ot(Nt,Pt),"boots");const Qt=new w(new be(.052,.16,4,10),Ie(1840144,{roughness:.96}));return Qt.rotation.x=Math.PI/2,Qt.scale.set(1.12,1,.36),Qt.position.set(0,-.032,.1),me(Qt,"boots"),Pt.add(Qt),M.add(Pt),K.add(M),K};m.add(_(-1)),m.add(_(1));const g=new w(os([[.2,-.1],[.24,-.02],[.22,.1]],16),s);g.position.y=.92,g.scale.set(1,1,.86),me(Ot(g,m),"legs");for(const[H,K]of[[.195,0],[-.19,Math.PI]]){const Z=Sh(.26,.2,.038,o);Z.position.set(0,.86,H),Z.rotation.set(Math.sign(H)*.28,K,0),me(Z,"legs"),m.add(Z)}for(const H of[-1,1]){const K=Sh(.18,.18,.032,r);K.position.set(H*.24,.86,0),K.rotation.order="ZYX",K.rotation.set(0,H*Math.PI*.5,-H*.24),me(K,"legs"),m.add(K)}const p=new ut;p.name="playerTorso",p.position.y=1.18,i.add(p);const S=new w(os([[.205,-.3],[.215,-.2],[.23,-.06],[.245,.1],[.235,.22],[.15,.32]],14),s);S.scale.set(1.08,1,.88),me(Ot(S,p),"chest");const y=new w(new nt(.2,14,12),s);y.scale.set(1.2,.95,.5),y.position.set(0,.06,-.1),me(Ot(y,p),"chest");for(const H of[-1,1]){const K=new w(new nt(.085,14,12),s);K.scale.set(1.2,.72,.5),K.position.set(H*.1,.1,.16),me(Ot(K,p),"chest")}const v=new w(new nt(.12,12,10),s);v.scale.set(1.1,1,.36),v.position.set(0,-.14,.16),me(Ot(v,p),"chest");const D=new w(new Ne(.225,.03,10,18),o);D.rotation.x=Math.PI/2,D.scale.set(1.04,1,.9),D.position.y=-.26,p.add(D);const T=Th(.1,.028,.042,d);T.position.set(0,-.26,.225),p.add(T);const C=(H,K)=>{const Z=new w(new zt(.078,.56,.06),o);Z.position.set(0,.02,K),Z.rotation.set(Math.sign(K)*.09,0,H),Z.castShadow=!0,me(Z,"chest"),p.add(Z)};C(.5,.18),C(-.5,.18),C(.5,-.175),C(-.5,-.175);const P=new w(new zt(.15,.15,.03),o);P.position.set(0,.05,.205),me(P,"chest"),p.add(P);const E=Th(.14,.038,.058,d);E.name="chestBuckle",E.position.set(0,.05,.24),me(E,"chest"),p.add(E);const x=.31;for(const H of[-1,1]){const K=new w(new nt(.11,12,9),t);K.scale.set(1.35,.5,.7),K.rotation.z=H*.42,K.position.set(H*.17,.24,-.01),Ot(K,p);const Z=new w(new nt(.1,8,6),r);Z.scale.set(1.2,.5,1.05),Z.position.set(H*(x-.03),.18,.005),Z.rotation.z=H*-.34,me(Ot(Z,p),"chest");const mt=new w(new nt(.108,12,9,0,Math.PI*2,0,Math.PI*.5),r);mt.scale.set(1.06,.9,1.02),mt.rotation.z=H*-.38,mt.position.set(H*(x-.01),.13,-.004),me(Ot(mt,p),"chest");for(let dt=0;dt<3;dt++){const A=new w(new nt(.011,6,5),d),M=-.5+dt*.5;A.position.set(H*(x+Math.cos(M)*.02),.19,Math.sin(M)*.08),me(A,"chest"),p.add(A)}}const R=new w(new Ne(.17,.055,8,12),l);R.rotation.x=Math.PI/2,R.position.set(0,.28,.01),R.scale.set(1.08,1,.92),me(Ot(R,p),"chest"),bh(p,0,.29,.01,.18,8,.042,a,c,"chest");const O=new w(new be(.07,.1,6,14),t);O.position.set(0,.35,.012),Ot(O,p);for(const H of[-1,1]){const K=new w(new be(.02,.09,4,8),e);K.position.set(H*.045,.34,.058),K.rotation.set(-.18,0,H*.3),Ot(K,p)}const N=H=>{const K=new ut;K.name=H<0?"clavL":"clavR",K.position.set(H*.2,.14,0);const Z=new ut;Z.name=H<0?"armL":"armR",Z.position.set(H*(x-.2),0,0);const mt=new w(new nt(.086,14,11),t);mt.scale.set(1.04,1.02,1),mt.position.set(H*.004,-.01,-.004),Ot(mt,Z);const dt=new w(os([[.07,-.02],[.076,-.1],[.07,-.19],[.058,-.29],[.05,-.33]],12),t);Ot(dt,Z);const A=new w(new nt(.058,12,9),t);A.scale.set(1,1.6,.8),A.position.set(H*-.004,-.15,.024),Ot(A,Z);const M=new ut;M.name=H<0?"forearmL":"forearmR",M.position.set(0,-.34,0);const G=new w(new nt(.06,12,9),t);G.scale.set(1,.95,1.05),Ot(G,M);const j=new w(os([[.062,-.03],[.072,-.08],[.068,-.15],[.058,-.22],[.05,-.27]],12),s);j.position.set(0,0,.008),Ot(j,M),Eh(M,-.07,-.21,.066,o,.008);const lt=new w(new Ne(.07,.022,6,10),a);lt.rotation.x=Math.PI/2,lt.position.set(0,-.045,.008),M.add(lt),bh(M,0,-.04,.008,.066,6,.024,a,c);const ot=new w(new Ne(.052,.014,6,10),o);ot.rotation.x=Math.PI/2,ot.position.set(0,-.25,.008),M.add(ot);const Ft=m_(t,s,o);return Ft.name=H<0?"handL":"handR",Ft.position.set(0,-.28,.02),M.add(Ft),Z.add(M),K.add(Z),K};p.add(N(-1)),p.add(N(1));const V=new ut;V.name="playerHead",V.position.set(0,.5,.015),V.scale.setScalar(.93);const tt=Ie(3877663,{roughness:.95,sheen:.18,sheenColor:new St(5455916)}),$=new w(new nt(.163,22,18),t);$.scale.set(.95,1.07,.9),$.position.z=-.012,Ot($,V);const Q=new w(new nt(.13,18,14),t);Q.scale.set(1,1.12,.55),Q.position.set(0,-.01,.07),Ot(Q,V);const k=new w(new be(.022,.1,5,12),t);k.rotation.z=Math.PI/2,k.scale.set(1,1,.8),k.position.set(0,.05,.132),Ot(k,V);const _t=new w(new nt(.114,16,13),e);_t.scale.set(1.02,.74,.9),_t.position.set(0,-.093,.03),Ot(_t,V);const Mt=new w(new nt(.114,16,13),tt);Mt.scale.set(1.06,.78,1.02),Mt.position.set(0,-.11,.046),Ot(Mt,V);const bt=new w(new nt(.06,12,9),tt);bt.scale.set(1.15,.95,.9),bt.position.set(0,-.15,.095),V.add(bt);for(const H of[-1,1]){const K=new w(new nt(.024,8,6),tt);K.scale.set(.3,1.7,.7),K.position.set(H*.147,-.024,-.012),K.rotation.z=H*.12,V.add(K);const Z=new w(new be(.011,.028,3,8),tt);Z.rotation.z=Math.PI/2,Z.rotation.y=H*.35,Z.position.set(H*.02,-.074,.164),V.add(Z)}const Wt=new w(new be(.013,.034,4,10),t);Wt.rotation.x=-.3,Wt.position.set(0,.008,.15),Ot(Wt,V);const Yt=new w(new nt(.023,12,10),t);Yt.scale.set(1,.9,.95),Yt.position.set(0,-.03,.165),Ot(Yt,V);for(const H of[-1,1]){const K=new w(new nt(.015,10,8),t);K.scale.set(1,.85,.9),K.position.set(H*.022,-.038,.152),V.add(K);const Z=new w(new nt(.0055,8,6),e);Z.position.set(H*.012,-.047,.166),V.add(Z)}for(const H of[-1,1]){const K=new w(new be(.011,.05,3,8),tt);K.rotation.z=Math.PI/2+H*-.18,K.rotation.x=-.3,K.position.set(H*.052,.066,.146),V.add(K);const Z=new w(new nt(.021,14,11),Ie(15129805,{roughness:.3}));Z.position.set(H*.051,.018,.128),V.add(Z);const mt=new w(new nt(.0122,10,8),Ie(4864546,{roughness:.3,clearcoat:.6,clearcoatRoughness:.1}));mt.position.set(H*.051,.018,.1445),V.add(mt);const dt=new w(new nt(.0058,8,6),Ie(657414,{roughness:.25}));dt.position.set(H*.051,.018,.153),V.add(dt);const A=new w(new nt(.024,12,9,0,Math.PI*2,0,Math.PI*.5),t);A.scale.set(1.06,1,.92),A.rotation.x=-.5,A.position.set(H*.051,.024,.126),V.add(A);const M=new w(new nt(.023,12,9,0,Math.PI*2,Math.PI*.62,Math.PI*.38),e);M.scale.set(1.06,1,.9),M.rotation.x=.35,M.position.set(H*.051,.014,.126),V.add(M);const G=new w(new nt(.03,10,8),t);G.scale.set(.36,1.05,.62),G.position.set(H*.15,.006,-.012),V.add(G);const j=new w(new nt(.014,8,6),t);j.scale.set(.4,.8,.65),j.position.set(H*.149,-.026,-.01),V.add(j)}const et=new w(new be(.0045,.04,3,8),Ie(4858908,{roughness:.6}));et.rotation.z=Math.PI/2,et.position.set(0,-.098,.163),V.add(et);const ft=new w(new be(.0075,.03,3,8),e);ft.rotation.z=Math.PI/2,ft.position.set(0,-.109,.161),V.add(ft);const Rt=new w(new nt(.171,16,12,0,Math.PI*2,0,Math.PI*.47),n);Rt.position.set(0,.052,-.016),Rt.scale.set(1.06,1,1.1),Ot(Rt,V);const X=[[0,.15,.062,.082,.5],[-.078,.142,.05,.074,.35],[.078,.142,.05,.074,-.35],[-.128,.098,-.01,.07,.2],[.128,.098,-.01,.07,-.2],[-.072,.122,-.108,.078,.1],[.072,.122,-.108,.078,-.1],[0,.1,-.152,.082,0]];for(const[H,K,Z,mt,dt]of X){const A=new w(new zn(mt,0),n);A.position.set(H,K,Z),A.rotation.set(-.4+Z*1.2,H*1.6,dt),A.scale.set(1.1,.52,1.25),V.add(A)}const rt=new w(new zn(.082,0),n);rt.scale.set(1.6,.3,.62),rt.rotation.set(.42,0,.12),rt.position.set(.014,.125,.098),V.add(rt),p.add(V);const xt=new ut;xt.name="toolRoot",xt.visible=!1,p.getObjectByName("armR").getObjectByName("handR").getObjectByName("grip").add(xt),Xc(xt,null);const it=Wu();it.name="tool_hatchet",it.visible=!1,xt.add(it);const L=Xu();L.name="tool_pickaxe",L.visible=!1,xt.add(L);const yt=qu();return yt.name="tool_sword",yt.visible=!1,xt.add(yt),__(xt),v_(i),h_(i),i}function Tn(i=12766940,t={}){return Ie(i,{metalness:.42,roughness:.28,clearcoat:.5,clearcoatRoughness:.2,envMapIntensity:1,...t})}function Vu(i,t,e){const n=new ut,s=Ie(6964256,{roughness:.78,clearcoat:.1,clearcoatRoughness:.7}),o=new w(new Vt(t,t*1.06,i,12),s);o.position.y=i*.5,Ot(o,n);const r=new w(new nt(e,10,8),s);r.scale.set(1,1.35,1),Ot(r,n);const a=Ie(3810324,{roughness:.88});for(let c=0;c<5;c++){const l=new w(new Ne(t*1.12,.007,5,10),a);l.rotation.x=Math.PI/2,l.rotation.z=c*.4,l.position.y=.03+c*.032,n.add(l)}return n}function Wu(){const i=new ut,t=Vu(.46,.021,.03);t.position.y=-.06,i.add(t);const e=new ut;e.position.y=.36;const n=new w(new Vt(.034,.034,.11,10),Tn(9411496));n.scale.set(.68,1,1),Ot(n,e);const s=new pr;s.moveTo(0,-.046),s.lineTo(.075,-.058),s.lineTo(.155,-.112),s.lineTo(.192,-.092),s.lineTo(.2,.082),s.lineTo(.15,.096),s.lineTo(.065,.054),s.lineTo(0,.046),s.closePath();const o=new w(new io(s,{depth:.008,bevelEnabled:!0,bevelSize:.013,bevelThickness:.017,bevelSegments:2}),Tn(11714768));o.rotation.y=-Math.PI/2,o.position.set(.021,0,0),Ot(o,e);const r=new w(new zt(.007,.185,.01),Ie(15397627,{metalness:.22,roughness:.16,clearcoat:.6,envMapIntensity:.9}));r.name="toolEdge",r.position.set(0,-.006,.206),r.rotation.x=.06,e.add(r);const a=new w(new zt(.044,.058,.038),Tn(9674926,{roughness:.34}));a.name="toolHeel",a.position.set(0,.004,-.042),Ot(a,e);const c=new w(new zt(.038,.01,.014),Tn(6187638,{roughness:.5}));return c.position.set(0,.052,.004),e.add(c),i.add(e),i}function Xu(){const i=new ut,t=Vu(.52,.021,.03);t.position.y=-.07,i.add(t);const e=new ut;e.position.y=.43;const n=new w(new Vt(.034,.038,.09,10),Tn(9082274));Ot(n,e);for(let a=0;a<6;a++){const c=a/5,l=new w(new zt(.058-c*.034,.056-c*.031,.062-c*.032),Tn(10135736-a*197379));l.position.set(0,.02-c*c*.125,.055+c*.2),l.rotation.x=c*.72,Ot(l,e)}const s=new w(new Te(.018,.085,6),Ie(15002868,{metalness:.24,roughness:.18,clearcoat:.5,envMapIntensity:.9}));s.name="toolEdge",s.rotation.x=Math.PI*.66,s.position.set(0,-.128,.292),Ot(s,e);const o=new w(new zt(.048,.048,.17),Tn(9082274));o.name="toolHeel",o.position.set(0,.014,-.088),o.rotation.x=-.22,Ot(o,e);const r=new w(new zt(.05,.012,.02),Ie(14674162,{metalness:.24,roughness:.18,clearcoat:.5,envMapIntensity:.9}));return r.position.set(0,.042,-.175),e.add(r),i.add(e),i}function qu(){const i=new ut,t=Ie(14201944,{metalness:.78,roughness:.26,clearcoat:.4,envMapIntensity:1.2}),e=new w(new Vt(.019,.023,.17,10),Ie(4860434,{roughness:.8}));Ot(e,i);const n=Ie(3021840,{roughness:.9});for(let f=0;f<7;f++){const m=new w(new Ne(.024,.006,5,10),n);m.rotation.x=Math.PI/2,m.rotation.y=f*.3,m.position.y=-.062+f*.021,i.add(m)}const s=new w(new nt(.031,12,10),t);s.name="toolHeel",s.scale.set(1,.85,1),s.position.y=-.098,Ot(s,i);const o=new w(new Vt(.02,.026,.016,10),t);o.position.y=-.076,i.add(o);const r=new pr;r.moveTo(-.1,0),r.quadraticCurveTo(-.05,.034,0,.018),r.quadraticCurveTo(.05,.034,.1,0),r.quadraticCurveTo(.05,-.02,0,-.016),r.quadraticCurveTo(-.05,-.02,-.1,0);const a=new w(new io(r,{depth:.036,bevelEnabled:!0,bevelSize:.005,bevelThickness:.004,bevelSegments:1}),t);a.position.set(0,.092,-.018),Ot(a,i);const c=new w(new zt(.042,.05,.026),Tn(11187908));c.position.y=.128,Ot(c,i);const l=Tn(13951212,{roughness:.14,clearcoat:.6,emissive:1911868,emissiveIntensity:.1}),h=6;for(let f=0;f<h;f++){const m=f/h,_=.078-m*.03,g=new w(new zt(_,.58/h+.004,.02-m*.006),l);g.position.y=.17+.58/h*(f+.5),Ot(g,i)}const u=new w(new zt(.016,.44,.024),Tn(10465474,{roughness:.3,clearcoat:.3}));u.position.y=.4,i.add(u);for(const f of[-1,1]){const m=new w(new zt(.008,.58,.012),Tn(16054783,{roughness:.08,clearcoat:.75}));m.position.set(f*.032,.46,0),i.add(m)}const d=new w(new Te(.034,.12,4),l);return d.name="toolEdge",d.rotation.y=Math.PI/4,d.scale.set(1,1,.42),d.position.y=.81,Ot(d,i),i}const Yu=["sword","frost_sword","frost_hammer","frost_spear","frost_bow"],g_=["hatchet","pickaxe",...Yu];function uc(i){return i==="bronze_sword"?"sword":i==="frost_sword"?"frost_sword":i==="frost_hammer"?"frost_hammer":i==="frost_spear"?"frost_spear":i==="frost_bow"?"frost_bow":null}function __(i){const t=Uu();t.name="tool_frost_sword",t.visible=!1,t.scale.setScalar(1.18),i.add(t);const e=Nu();e.name="tool_frost_hammer",e.visible=!1,e.scale.setScalar(1.12),i.add(e);const n=Fu();n.name="tool_frost_spear",n.visible=!1,n.scale.setScalar(1.22),i.add(n)}function v_(i){const t=i.getObjectByName("handL")?.getObjectByName("grip");if(!t)return;const e=new ut;e.name="bowRoot",e.visible=!1;const n=Ou();n.name="tool_frost_bow",n.scale.setScalar(1.08),e.add(n),t.add(e),xr(e)}function Xc(i,t){i.position.copy(Vc),t==="hatchet"||t==="frost_hammer"?i.rotation.set(.16,-.12,-Math.PI/2):t==="pickaxe"?i.rotation.set(.08,-.1,-Math.PI/2):t==="frost_spear"?(i.position.x+=.02,i.rotation.set(.22,-.06,-Math.PI/2)):t==="frost_bow"?xr(i):(i.position.x+=.008,i.rotation.set(Math.PI/2+.32,-.06,-Math.PI/2))}function xr(i){i.position.copy(Vc),i.rotation.set(.88,.1,-Math.PI/2)}function $u(i){for(const t of g_)if(t&&i.getObjectByName(`tool_${t}`)?.visible)return t;return null}const Os=new I,ui=new I,Rh=new fe;function x_(i){const t=i.parent;if(!t)return;t.updateWorldMatrix(!0,!1);let e=t;for(;e&&e.name!=="player";)e=e.parent;Os.set(0,0,1),e&&(e.updateWorldMatrix(!0,!1),Os.transformDirection(e.matrixWorld)),Rh.copy(t.matrixWorld).invert(),Os.transformDirection(Rh),ui.set(Os.x,0,Os.z),ui.lengthSq()<.04&&ui.set(0,0,-1),ui.normalize();const n=Math.atan2(ui.x,ui.z);i.rotation.set(0,n,0);const s=.08*(i.scale.x||1);i.position.set(ui.x*s,-.14,ui.z*s)}function so(i){const t=i.getObjectByName("toolRoot");t?.visible&&Xc(t,$u(t));const e=i.getObjectByName("bowRoot");e?.visible&&xr(e);const n=i.getObjectByName("wear_shield");n?.visible&&x_(n)}function hn(i,t){const e=i.getObjectByName("toolRoot"),n=i.getObjectByName("bowRoot"),s=["hatchet","pickaxe","sword","frost_sword","frost_hammer","frost_spear"];if(e){for(const r of s){const a=e.getObjectByName(`tool_${r}`);a&&(a.visible=r===t)}e.visible=t!==null&&t!=="frost_bow",e.visible&&Xc(e,t)}if(n){const r=n.getObjectByName("tool_frost_bow");r&&(r.visible=t==="frost_bow"),n.visible=t==="frost_bow",n.visible&&xr(n)}const o=i.getObjectByName("wear_shield");o&&t==="frost_bow"&&(o.visible=!1)}function Zu(i){return oo(i)!==null}function oo(i){const t=i.getObjectByName("bowRoot");if(t?.visible&&t.getObjectByName("tool_frost_bow")?.visible)return"frost_bow";const e=i.getObjectByName("toolRoot");if(!e?.visible)return null;const n=$u(e);return n&&Yu.includes(n)?n:null}function yr(i){return!!i.getObjectByName("wear_shield")?.visible}function dc(i,t){u_(i,t.equipped)}function Gi(i){const t=Math.max(0,Math.min(1,i));return t*t*(3-2*t)}function jn(i){const t=Math.max(0,Math.min(1,i));return t<.5?16*t*t*t*t*t:1-Math.pow(-2*t+2,5)/2}function U(i,t){return i.getObjectByName(t)}function sr(i,t={}){if(!i)return;const e=i.userData.rest;e&&(i.position.set(e.x+(t.x??0),e.y+(t.y??0),e.z+(t.z??0)),i.rotation.set(e.rx+(t.rx??0),e.ry+(t.ry??0),e.rz))}function Rn(i,t){i.userData.locomotionY=t}function qe(i){i&&i.rotation.set(0,0,0)}function ce(i,t,e){return i+(t-i)*e}function J(i,t,e,n){i&&i.rotation.set(t,e,n)}function Re(i){return Math.max(0,i)}const Ju=["playerHips","playerTorso","playerHead","clavL","clavR","armL","forearmL","handL","armR","forearmR","handR","legL","shinL","footL","legR","shinR","footR"],fc=[0,0,0];function y_(i,t,e){const n=i??fc,s=t??fc;return[ce(n[0],s[0],e),ce(n[1],s[1],e),ce(n[2],s[2],e)]}function fi(i,t,e){const n={};for(const s of Ju)(i[s]||t[s])&&(n[s]=y_(i[s],t[s],e));return n.gripR=ce(i.gripR??.25,t.gripR??.25,e),n.gripL=ce(i.gripL??.25,t.gripL??.25,e),n.lift=ce(i.lift??0,t.lift??0,e),n}function Ku(i,t){for(const s of Ju){const o=t[s]??fc,r=U(i,s);r&&r.rotation.set(s==="shinL"||s==="shinR"?Re(o[0]):o[0],o[1],o[2])}const e=U(i,"playerHips");e&&e.position.set(0,0,0);const n=U(i,"playerTorso");n&&(n.position.x=0,n.position.z=0,n.scale.set(1,1,1)),Ye(U(i,"handR"),t.gripR??.25),Ye(U(i,"handL"),t.gripL??.25),so(i),Rn(i,t.lift??0)}const M_=["playerHips","playerTorso","playerHead","clavL","clavR","armL","armR","forearmL","forearmR","handL","handR","legL","legR","shinL","shinR","footL","footR"],w_=["yetiBody","yetiHead","yetiArmL","yetiArmR","yetiForearmL","yetiForearmR","yetiLegL","yetiLegR","yetiShinL","yetiShinR","yetiFootL","yetiFootR"],S_=["orcBody","orcHead","orcArmL","orcArmR","orcForearmL","orcForearmR","orcLegL","orcLegR","orcShinL","orcShinR","orcFootL","orcFootR"],E_=3.35,T_=5.7,b_=1.18,A_=.78;class ha{constructor(t=M_){this.joints=t}prev=new Map;reset(){this.prev.clear()}apply(t,e,n=18){const s=1-Math.exp(-n*Math.max(0,e));for(const o of this.joints){const r=U(t,o);if(!r)continue;const a=this.prev.get(o);if(!a){this.prev.set(o,r.rotation.clone());continue}r.rotation.set(a.x+(r.rotation.x-a.x)*s,a.y+(r.rotation.y-a.y)*s,a.z+(r.rotation.z-a.z)*s),a.copy(r.rotation)}so(t)}}function di(i){qe(U(i,"playerHips")),qe(U(i,"legL")),qe(U(i,"legR")),qe(U(i,"shinL")),qe(U(i,"shinR")),qe(U(i,"footL")),qe(U(i,"footR")),qe(U(i,"clavL")),qe(U(i,"clavR")),qe(U(i,"armL")),qe(U(i,"armR")),qe(U(i,"forearmL")),qe(U(i,"forearmR")),qe(U(i,"handL")),qe(U(i,"handR")),qe(U(i,"playerHead")),qe(U(i,"playerTorso"));const t=U(i,"playerHips");t&&t.position.set(0,0,0);const e=U(i,"playerTorso");e&&(e.position.x=0,e.position.z=0,e.scale.set(1,1,1));const n=oo(i)==="frost_bow";Ye(U(i,"handR"),Zu(i)&&!n?.96:n?.38:.22),Ye(U(i,"handL"),n||yr(i)?.84:.22),so(i),i.rotation.z=0,i.rotation.x=0,Rn(i,0)}function Ui(i,t,e=!1){if(Zu(i)){R_(i,t,Qu(i));return}const n=Math.sin(t*1.35)*.018,s=Math.sin(t*.55)*.018,o=Math.sin(t*.37+1.1)*.012,r=Math.sin(t*.28)*.08+Math.sin(t*.11)*.04,a=U(i,"playerHips"),c=U(i,"playerTorso");a&&(a.rotation.set(0,s*.12,s*.1),a.position.set(s*.08,0,0)),c&&(c.rotation.set(.015+n*.55,s*.1,s*.04-o*.06),c.position.x=0,c.position.z=0,c.scale.set(1+n*.008,1+n*.014,1+n*.006)),J(U(i,"playerHead"),-.04+n*.28,r,-s*.06),J(U(i,"clavL"),.02,0,-.02),J(U(i,"clavR"),.02,0,.02),J(U(i,"armL"),.08+n*.05,.06,-.13+o*.08),J(U(i,"forearmL"),-.24+o*.06,.08,-.03),J(U(i,"handL"),.06,.06,.02),J(U(i,"armR"),.08-n*.05,-.06,.13-o*.08),J(U(i,"forearmR"),-.24-o*.06,-.08,.03),J(U(i,"handR"),.06,-.06,-.02),J(U(i,"legL"),.02+s*.04,0,.02),J(U(i,"legR"),-.01-s*.04,0,-.02),J(U(i,"shinL"),Re(.06+Math.max(0,s)*.04),0,0),J(U(i,"shinR"),Re(.08+Math.max(0,-s)*.04),0,0),J(U(i,"footL"),.02,0,0),J(U(i,"footR"),.03,0,0),Ye(U(i,"handL"),.2),Ye(U(i,"handR"),.2),Rn(i,n*.02)}const or={playerHips:[.02,-.1,.02],playerTorso:[.08,-.2,.04],playerHead:[-.04,.18,-.04],clavR:[.1,-.12,-.1],clavL:[.04,.08,.08],armR:[-.075,.32,.533],forearmR:[-1.887,-.185,.06],handR:[.622,-1.425,-.209],armL:[-.7,.15,-.3],forearmL:[-1.15,.1,0],handL:[.1,.2,.1],legL:[-.22,.06,.05],shinL:[.3,0,0],footL:[.06,.1,0],legR:[.12,-.04,-.04],shinR:[.2,0,0],footR:[.04,-.08,0],gripR:.96,gripL:.3,lift:.02},rs={clavL:[.08,.18,.14],armL:[-.15,1.2,-.35],forearmL:[-1.25,.4,.15],handL:[.06,.08,.06],gripL:.32},pc={...or,playerTorso:[.06,-.12,.03],clavR:[.08,-.08,-.08],clavL:[.08,.12,.1],armR:[-.22,.26,.4],forearmR:[-1.28,-.1,.08],handR:[.28,-1.05,-.12],armL:[-.42,.3,-.16],forearmL:[-1.02,.2,.06],handL:[.18,.38,.1],gripR:.96,gripL:.88},mc={...or,playerTorso:[.1,-.16,.04],clavR:[.08,-.1,-.08],clavL:[.08,.12,.1],armR:[-.14,.22,.46],forearmR:[-1.52,-.12,.04],handR:[.28,-1.18,-.16],armL:[-.52,.22,-.2],forearmL:[-1.22,.16,.04],handL:[.12,.28,.1],gripR:.97,gripL:.86},ju={playerHips:[.02,.12,.02],playerTorso:[.04,.22,-.04],playerHead:[-.02,-.16,.02],clavL:[.1,.2,.16],clavR:[.1,-.1,-.1],armL:[-1.32,.06,-.32],forearmL:[-.14,.04,.04],handL:[.16,.08,-1.05],armR:[-.95,.16,.48],forearmR:[-.82,-.12,.12],handR:[.16,-.22,.14],legL:[-.18,.05,.04],shinL:[.26,0,0],footL:[.04,.08,0],legR:[.1,-.04,-.04],shinR:[.22,0,0],footR:[.04,-.06,0],gripR:.38,gripL:.9,lift:.02};function ua(i){return{...i,clavL:rs.clavL,armL:rs.armL,forearmL:rs.forearmL,handL:rs.handL,gripL:rs.gripL}}function Qu(i){const t=oo(i),e=yr(i);return t==="frost_bow"?ju:t==="frost_spear"?e?ua(pc):pc:t==="frost_hammer"?e?ua(mc):mc:e?ua(or):or}function R_(i,t,e){const n=Math.sin(t*1.4)*.016,s=Math.sin(t*.7)*.012,o=Math.sin(t*.43+.6)*.02;J(U(i,"playerHips"),e.playerHips[0],e.playerHips[1]+s,e.playerHips[2]);const r=U(i,"playerHips");r&&(r.position.x=.02);const a=U(i,"playerTorso");a&&(a.rotation.set(e.playerTorso[0]+n*.5,e.playerTorso[1]+s*.5,e.playerTorso[2]),a.position.x=0,a.scale.set(1+n*.008,1+n*.012,1)),J(U(i,"playerHead"),e.playerHead[0]+n*.2,e.playerHead[1],e.playerHead[2]),J(U(i,"clavL"),...e.clavL),J(U(i,"clavR"),...e.clavR),J(U(i,"armL"),e.armL[0]+n*.08,e.armL[1],e.armL[2]),J(U(i,"forearmL"),...e.forearmL),J(U(i,"handL"),...e.handL),J(U(i,"armR"),e.armR[0]+o*.6,e.armR[1],e.armR[2]),J(U(i,"forearmR"),e.forearmR[0]-o*.5,e.forearmR[1],e.forearmR[2]),J(U(i,"handR"),e.handR[0]+o,e.handR[1],e.handR[2]+s*.6),J(U(i,"legL"),...e.legL),J(U(i,"legR"),...e.legR),J(U(i,"shinL"),Re(e.shinL[0]),0,0),J(U(i,"shinR"),Re(e.shinR[0]),0,0),J(U(i,"footL"),...e.footL),J(U(i,"footR"),...e.footR),Ye(U(i,"handR"),e.gripR??.96),Ye(U(i,"handL"),e.gripL??.3),so(i),Rn(i,n*.02)}const C_=.94,td=.82;function qc(i){return Gi((Math.max(.25,i)-.3)/.68)}function gc(i){return ce(3.4,7.2,qc(i))}function L_(i){const t=ce(.3,td,qc(i));return 2*C_*Math.sin(t)*.92}function rr(i,t,e=.85,n=1){const s=Math.max(0,Math.min(1,n)),o=Math.max(.25,e),r=qc(o),a=Gi((o-.62)/.4),c=ce(.3,td,r)*s,l=oo(i),h=yr(i),u=l!==null,d=Math.sin(t),f=Math.sin(t+Math.PI),m=Math.max(0,-Math.cos(t)),_=Math.max(0,-Math.cos(t+Math.PI)),g=Math.max(0,Math.cos(t)),p=Math.max(0,Math.cos(t+Math.PI)),S=Math.max(0,d)*m,y=Math.max(0,f)*_,v=Math.max(0,-d)*(1-g),D=Math.max(0,-f)*(1-p),T=Math.cos(t*2),C=ce(T*.016,-T*.052,a)*s,P=ce(.72,1.95,a),E=ce(.08,.42,a),x=U(i,"playerHips"),R=U(i,"playerTorso");x&&(x.rotation.y=d*ce(.09,.2,a)*s,x.rotation.z=-Math.cos(t)*ce(.03,.075,a)*s,x.rotation.x=ce(0,.1,a)*s,x.position.x=-d*.018*s);const O=ce(.5,.95,a);J(U(i,"legL"),d*c-m*O,0,.03-a*.02),J(U(i,"legR"),f*c-_*O,0,-.03+a*.02),J(U(i,"shinL"),Re(.12+m*P+S*.4+v*.18+g*E),0,0),J(U(i,"shinR"),Re(.12+_*P+y*.4+D*.18+p*E),0,0);const N=ce(.34,.1,a),V=ce(.26,.62,a);J(U(i,"footL"),-m*N+g*Math.max(0,d)*V+a*.12,0,0),J(U(i,"footR"),-_*N+p*Math.max(0,f)*V+a*.12,0,0);const tt=ce(.05,.16,a);if(J(U(i,"clavL"),-d*tt*s,0,-.04),J(U(i,"clavR"),-f*tt*s,0,.04),u){const Q=Math.max(0,f)*ce(.08,.22,a);if(l==="frost_bow"){const k=ju;J(U(i,"armL"),k.armL[0]+Q*.08,k.armL[1],k.armL[2]),J(U(i,"forearmL"),...k.forearmL),J(U(i,"handL"),...k.handL),J(U(i,"armR"),k.armR[0]+Q*.12,k.armR[1],k.armR[2]),J(U(i,"forearmR"),k.forearmR[0]-Q*.08,k.forearmR[1],k.forearmR[2]),J(U(i,"handR"),...k.handR),Ye(U(i,"handR"),.38),Ye(U(i,"handL"),.9)}else if(l==="frost_spear"?(J(U(i,"armR"),.04+Q*.16,.2,.3),J(U(i,"forearmR"),-1.18-Q*.16,-.08,.06),J(U(i,"handR"),.24,-1.02,-.12)):l==="frost_hammer"?(J(U(i,"armR"),.14+Q*.22,.1,.2),J(U(i,"forearmR"),-.88-Q*.22,-.08,.04),J(U(i,"handR"),.18+Q*.12,-1.12,-.18)):(J(U(i,"armR"),.22+Q*.35,.08,.14),J(U(i,"forearmR"),-.62-Q*.4,-.06,.04),J(U(i,"handR"),.18+Q*.2,-1.18,-.26)),Ye(U(i,"handR"),.96),h){const k=rs;J(U(i,"armL"),k.armL[0]+Q*.06,k.armL[1],k.armL[2]),J(U(i,"forearmL"),...k.forearmL),J(U(i,"handL"),...k.handL),Ye(U(i,"handL"),k.gripL)}else if(l==="frost_spear"||l==="frost_hammer"){const k=l==="frost_spear"?pc:mc;J(U(i,"armL"),k.armL[0]+Q*.08,k.armL[1],k.armL[2]),J(U(i,"forearmL"),...k.forearmL),J(U(i,"handL"),...k.handL),Ye(U(i,"handL"),k.gripL??.86)}else J(U(i,"armL"),-d*ce(.55,1.05,a)*s+.1,.06,-.06),J(U(i,"forearmL"),ce(-.28,-1.35,a)-Math.max(0,d)*.2,.04,0),J(U(i,"handL"),.06,.04,.04),Ye(U(i,"handL"),.22)}else{const Q=c*ce(1,.85,a),k=ce(0,1,a);J(U(i,"armL"),-d*Q+ce(.08,.3,a),.04+k*.16,-.12-k*.04),J(U(i,"armR"),-f*Q+ce(.08,.3,a),-.04-k*.16,.12+k*.04),J(U(i,"forearmL"),ce(-.35-Math.max(0,d)*.4,-1.52-Math.max(0,-d)*.35,a),.06,0),J(U(i,"forearmR"),ce(-.35-Math.max(0,f)*.4,-1.52-Math.max(0,-f)*.35,a),-.06,0),J(U(i,"handL"),-d*.12,.04,.04+k*.2),J(U(i,"handR"),-f*.12,-.04,-.04-k*.2),Ye(U(i,"handL"),ce(.28,.72,a)),Ye(U(i,"handR"),ce(.28,.72,a))}const $=ce(.03,.26,a)*s;R&&(R.rotation.y=-d*ce(.1,.2,a)*s,R.rotation.x=$,R.rotation.z=d*.03*s,R.position.x=-d*.01*s,R.position.z=0,R.scale.set(1,1,1)),J(U(i,"playerHead"),-$*.65-Math.max(0,-T)*.03,d*.05*s,-d*.02*s),so(i),Rn(i,C)}function ed(i,t){const e=Math.max(0,Math.min(1,t)),n=Qu(i),s=yr(i)||oo(i)==="frost_bow",o=h=>s?{...h,clavL:n.clavL,armL:n.armL,forearmL:n.forearmL,handL:n.handL,gripL:n.gripL}:h,r={playerHips:[.04,-.32,-.05],playerTorso:[-.12,-.55,-.08],playerHead:[-.1,.32,.06],clavR:[-.16,-.28,-.32],clavL:[.08,.16,.16],armR:[-2.23,-.47,1.1],forearmR:[-1.77,.14,0],handR:[.8,-1.9,-.8],armL:[-.55,.2,-.28],forearmL:[-1.05,.12,.08],handL:[.1,.16,.1],legL:[-.28,.08,.06],shinL:[.32,0,0],footL:[.02,.12,0],legR:[.16,-.06,-.05],shinR:[.22,0,0],footR:[.1,-.1,0],gripR:.96,gripL:.3,lift:.04},a={playerHips:[0,.26,.06],playerTorso:[.22,.48,.1],playerHead:[.1,.2,-.08],clavR:[.18,.14,.12],clavL:[.04,.06,.1],armR:[-1.7,-.48,-.74],forearmR:[-.65,-.5,0],handR:[.72,-1.9,-.25],armL:[-.35,.14,.22],forearmL:[-.7,.08,.06],handL:[.08,.08,.12],legL:[-.4,.06,-.04],shinL:[.22,0,0],footL:[.08,.08,0],legR:[.26,-.04,.04],shinR:[.4,0,0],footR:[-.04,-.06,0],gripR:1.08,gripL:.34,lift:.05},c={...a,playerHips:[-.02,.32,.06],playerTorso:[.18,.62,.12],playerHead:[.12,.28,-.08],clavR:[.2,.18,.12],clavL:[.04,.08,.12],armR:[-1.56,-1,-.9],forearmR:[-.98,-.5,0],handR:[.78,-1.9,.04],armL:[-.2,.16,.26],forearmL:[-.55,.08,.06],gripR:.98,lift:.03};let l;e<.36?l=fi(n,o(r),jn(e/.36)):e<.52?l=fi(o(r),o(a),Math.pow((e-.36)/.16,2.1)):e<.64?l=fi(o(a),o(c),Gi((e-.52)/.12)):l=fi(o(c),n,jn((e-.64)/.36)),Ku(i,l)}function _c(i,t,e){const n=t%1,s=e==="tree",o=s?{playerHips:[.02,-.1,0],playerTorso:[.12,-.16,.04],playerHead:[.08,.12,0],clavR:[.06,-.1,-.08],clavL:[.04,.08,.1],armR:[.23,-.11,-.06],forearmR:[-1.43,.3,.06],handR:[-.04,-.56,-.4],armL:[.18,.16,.26],forearmL:[-.62,.1,.06],handL:[.1,.06,.08],legL:[-.12,.04,.04],shinL:[.24,0,0],legR:[.1,-.04,-.04],shinR:[.2,0,0],footL:[.04,.06,0],footR:[.04,-.06,0],gripR:.96,gripL:.28}:{playerHips:[.03,-.06,0],playerTorso:[.18,-.1,.02],playerHead:[.14,.06,0],clavR:[.08,-.06,-.06],clavL:[.04,.06,.1],armR:[.18,-.2,-.03],forearmR:[-1.35,.3,.06],handR:[-.07,-.58,-.45],armL:[.24,.14,.22],forearmL:[-.76,.08,.06],handL:[.12,.06,.08],legL:[-.1,.04,.04],shinL:[.3,0,0],legR:[.12,-.04,-.04],shinR:[.28,0,0],footL:[.04,0,0],footR:[.04,0,0],gripR:.96,gripL:.28},r=s?{playerHips:[.02,-.2,-.04],playerTorso:[-.12,-.32,-.06],playerHead:[-.02,.24,.04],clavR:[-.1,-.18,-.26],clavL:[.1,.12,.16],armR:[-2.49,.35,.03],forearmR:[-1.25,-.3,.06],handR:[.5,-1.9,-.45],armL:[.4,.26,.42],forearmL:[-.72,.12,.08],handL:[.14,.1,.1],legL:[-.22,.06,.05],shinL:[.28,0,0],legR:[.16,-.05,-.05],shinR:[.18,0,0],footL:[.02,.06,0],footR:[.08,-.06,0],gripR:.9,gripL:.26,lift:.045}:{playerHips:[.02,-.04,0],playerTorso:[-.2,-.08,0],playerHead:[-.14,.06,0],clavR:[-.18,-.04,-.22],clavL:[.08,.1,.18],armR:[-1.94,.76,-.6],forearmR:[-.1,-.27,.06],handR:[.5,-.94,-.45],armL:[-.44,.2,.36],forearmL:[-1.05,.12,.08],handL:[.12,.08,.1],legL:[-.14,.04,.04],shinL:[.14,0,0],legR:[.12,-.04,-.04],shinR:[.12,0,0],footL:[.1,0,0],footR:[.12,0,0],gripR:.9,gripL:.26,lift:.075},a=s?{playerHips:[0,.14,.05],playerTorso:[.4,.2,.08],playerHead:[.26,.1,-.04],clavR:[.18,.1,.12],clavL:[.02,.04,.1],armR:[-.57,.15,-.51],forearmR:[-1.36,-.3,.06],handR:[.5,-1.62,-.45],armL:[-.22,.12,.3],forearmL:[-.42,.06,.04],handL:[.06,.04,.12],legL:[-.34,.05,-.04],shinL:[.34,0,0],legR:[.24,-.04,.04],shinR:[.46,0,0],footL:[.06,.06,0],footR:[-.02,-.04,0],gripR:1.1,gripL:.34,lift:-.035}:{playerHips:[.14,.04,0],playerTorso:[.52,.06,.02],playerHead:[.3,.04,0],clavR:[.22,.04,.1],clavL:[.02,.04,.1],armR:[-1.01,-.8,.24],forearmR:[-.38,-.3,.06],handR:[.5,-.85,-.45],armL:[-.32,.16,.34],forearmL:[-.36,.06,.04],handL:[.06,.04,.12],legL:[-.42,.05,.05],shinL:[.72,0,0],legR:[-.34,-.05,-.05],shinR:[.66,0,0],footL:[-.16,0,0],footR:[-.14,0,0],gripR:1.12,gripL:.36,lift:-.09},c=s?{...a,playerTorso:[.3,.14,.06],playerHips:[0,.1,.04],clavR:[.14,.08,.1],armR:[-.21,.08,-.5],forearmR:[-1.68,-.3,.06],handR:[.5,-1.23,-.19],gripR:1,lift:.005}:{...a,playerTorso:[.4,.05,.02],playerHips:[.1,.03,0],clavR:[.18,.03,.08],armR:[-.58,.1,-.12],forearmR:[-1.1,-.2,.06],handR:[.4,-1.05,-.3],shinL:[.6,0,0],shinR:[.56,0,0],gripR:1.02,lift:-.04},l=s?.38:.46,h=s?.16:.14;let u;n<l?u=fi(o,r,jn(n/l)):n<l+h?u=fi(r,a,Math.pow((n-l)/h,s?2:2.4)):n<l+h+.1?u=fi(a,c,Gi((n-l-h)/.1)):u=fi(c,o,jn((n-l-h-.1)/(.9-l-h))),Ku(i,u)}function Ch(i,t,e=.55){const n=Math.max(0,Math.min(1,t)),s=Math.max(.2,Math.min(1.4,e)),o=Math.sin(n*Math.PI);i.rotation.z=o*.3*s,i.rotation.x=-o*(s>.7?.24:.13)*s;const r=s>.7?o*.3*(s-.7):o*.08*s,a=i.getObjectByName("playerTorso")||i.getObjectByName("yetiBody")||i.getObjectByName("orcBody");a&&(a.rotation.y=r,a.rotation.x=-o*.1*s)}function zs(i,t,e,n){let s=t-i;for(;s>Math.PI;)s-=Math.PI*2;for(;s<-Math.PI;)s+=Math.PI*2;const o=Math.sign(s)*Math.min(Math.abs(s),e*n);return i+o}function nd(i,t){const e=Math.max(0,Math.min(1,t));let n=0,s=0;if(e<.42)n=e>.3?1:jn(e/.3);else if(e<.62){const h=jn((e-.42)/.2);n=1-h,s=h}else s=1-Gi((e-.62)/.38);const o=1-n-s,r=o*0+n*-.22+s*.28,a=n*.65+s*.85;J(U(i,"yetiArmR"),o*ie.armX+n*-2.25+s*-1.85,o*.04+n*-.48+s*.55,o*ie.armZ+n*.85+s*.22),J(U(i,"yetiArmL"),o*ie.armX+n*-2.05+s*-1.7,o*-.04+n*.4+s*-.5,o*-.22+n*-.78+s*-.2),J(U(i,"yetiForearmR"),o*ie.forearmX+n*-1.25+s*-.18,.1,.06),J(U(i,"yetiForearmL"),o*ie.forearmX+n*-1.1+s*-.16,-.1,-.06);const c=U(i,"yetiHead");c&&(c.rotation.x=ie.headX-a*.45+s*.18,c.rotation.y=s*.2,c.rotation.z=n*.06);const l=U(i,"yetiBody");l&&(l.rotation.x=ie.bodyX+r,l.rotation.y=s*.22-n*.1,l.rotation.z=s*.08),J(U(i,"yetiLegL"),o*.06+n*.1+s*-.52,0,.05),J(U(i,"yetiLegR"),o*.06+n*.48+s*.14,0,-.05),J(U(i,"yetiShinL"),Re(.14+n*.18+s*.4),0,0),J(U(i,"yetiShinR"),Re(.16+n*.55+s*.12),0,0),J(U(i,"yetiFootL"),n*.1+s*-.16,0,0),J(U(i,"yetiFootR"),n*.18+s*-.06,0,0),Rn(i,s*.09+n*.04)}function id(i,t){const e=Math.max(0,Math.min(1,t));let n=0,s=0;if(e<.4)n=e>.28?1:jn(e/.28);else if(e<.58){const l=jn((e-.4)/.18);n=1-l,s=l}else s=1-Gi((e-.58)/.42);const o=1-n-s,r=o*.04+n*-.2+s*.14;sr(U(i,"orcSpear"),{rx:n*-.45+s*.85,z:n*-.04+s*.04,y:n*.02,ry:s*.02}),J(U(i,"orcArmR"),o*-.32+n*.85+s*-1.95,o*.06+n*.18+s*.1,o*.18+n*.28+s*.12),J(U(i,"orcForearmR"),o*-.42+n*-1.2+s*-.04,-.08,.05),J(U(i,"orcArmL"),o*-.1+n*.35+s*-1.15,o*.02+n*-.12+s*.48,o*-.18+n*-.1+s*-.1),J(U(i,"orcForearmL"),o*-.28+n*-.45+s*-.45,.1,-.05);const a=U(i,"orcHead");a&&(a.rotation.x=n*-.08+s*-.18+r*.2,a.rotation.y=s*.06,a.rotation.z=0);const c=U(i,"orcBody");c&&(c.rotation.x=r,c.rotation.y=n*-.08+s*.12,c.rotation.z=0),J(U(i,"orcLegL"),o*0+n*.08+s*-.68,0,.04),J(U(i,"orcLegR"),o*0+n*.58+s*.28,0,-.04),J(U(i,"orcShinL"),Re(.1+n*.16+s*.42),0,0),J(U(i,"orcShinR"),Re(.14+n*.55+s*.14),0,0),J(U(i,"orcFootL"),s*-.14,0,0),J(U(i,"orcFootR"),n*.12,0,0),Rn(i,Math.abs(r)*.05+s*.03)}function Li(i,t,e,n=1){const s=Math.max(0,Math.min(1,n));if(!e||s<.05){const v=t,D=Math.sin(v*1.15)*.03,T=Math.sin(v*.48)*.02,C=Math.sin(v*.31+1.2)*.012,P=Math.sin(v*.22)*.07+Math.sin(v*.09)*.035;J(U(i,"yetiArmR"),ie.armX+D*.3+T*.35,.05,ie.armZ),J(U(i,"yetiArmL"),ie.armX-D*.22-T*.35,-.05,-.22),J(U(i,"yetiForearmR"),ie.forearmX-D*.12,.05,.04),J(U(i,"yetiForearmL"),ie.forearmX+D*.1,-.05,-.04),J(U(i,"yetiLegL"),ie.legX+T*.32,0,.04),J(U(i,"yetiLegR"),ie.legX-T*.32,0,-.04),J(U(i,"yetiShinL"),Re(ie.kneeX+Math.max(0,T)*.1),0,0),J(U(i,"yetiShinR"),Re(ie.kneeX+Math.max(0,-T)*.1),0,0),J(U(i,"yetiFootL"),ie.footX,0,0),J(U(i,"yetiFootR"),ie.footX,0,0);const E=U(i,"yetiHead");E&&(E.rotation.x=ie.headX+D*.28,E.rotation.y=P,E.rotation.z=C*.35);const x=U(i,"yetiBody");x&&(x.rotation.x=ie.bodyX+D*.1,x.rotation.y=T*.3,x.rotation.z=T*.18),Rn(i,Math.abs(D)*.35);return}const o=Math.sin(t),r=Math.sin(t+Math.PI),a=Math.max(0,-Math.cos(t)),c=Math.max(0,-Math.cos(t+Math.PI)),l=Math.max(0,Math.cos(t)),h=Math.max(0,Math.cos(t+Math.PI)),u=Math.max(0,o)*a,d=Math.max(0,r)*c,f=Math.max(0,-o)*(1-l),m=Math.max(0,-r)*(1-h),_=Math.cos(t*2),g=.64*s,p=Math.max(0,-_)*.055*s;J(U(i,"yetiLegL"),o*g-a*.34,0,.05),J(U(i,"yetiLegR"),r*g-c*.34,0,-.05),J(U(i,"yetiShinL"),Re(.16+a*.85+u*.4+f*.18+l*.14),0,0),J(U(i,"yetiShinR"),Re(.16+c*.85+d*.4+m*.18+h*.14),0,0),J(U(i,"yetiFootL"),-a*.26+l*Math.max(0,o)*.24,0,0),J(U(i,"yetiFootR"),-c*.26+h*Math.max(0,r)*.24,0,0),J(U(i,"yetiArmL"),ie.armX-o*.72*s,.06,-.22),J(U(i,"yetiArmR"),ie.armX-r*.72*s,-.06,ie.armZ),J(U(i,"yetiForearmL"),ie.forearmX-Math.max(0,o)*.55,.06,-.04),J(U(i,"yetiForearmR"),ie.forearmX-Math.max(0,r)*.55,-.06,.04);const S=U(i,"yetiBody");S&&(S.rotation.x=ie.bodyX+.02+p*.9,S.rotation.y=-o*.1*s,S.rotation.z=o*.05*s);const y=U(i,"yetiHead");y&&(y.rotation.x=ie.headX-.02-p*.55,y.rotation.y=o*.055*s,y.rotation.z=-o*.025*s),Rn(i,p)}function ls(i,t,e,n=1){const s=Math.max(0,Math.min(1,n)),o=U(i,"orcSpear");if(!e||s<.05){const T=t,C=Math.sin(T*1.45)*.02,P=Math.sin(T*.62)*.016,E=Math.sin(T*.27)*.06+Math.sin(T*.11)*.03;J(U(i,"orcArmL"),.02+C*.45,.05,-.18),J(U(i,"orcArmR"),-.32+C*.2,.08,.2),J(U(i,"orcForearmL"),-.3+C*.1,.04,-.04),J(U(i,"orcForearmR"),-.42-C*.08,-.05,.05),sr(o),J(U(i,"orcLegL"),P*.25,0,.02),J(U(i,"orcLegR"),-P*.25,0,-.02),J(U(i,"orcShinL"),Re(.08+Math.max(0,P)*.06),0,0),J(U(i,"orcShinR"),Re(.08+Math.max(0,-P)*.06),0,0),J(U(i,"orcFootL"),-.03,0,0),J(U(i,"orcFootR"),-.03,0,0);const x=U(i,"orcBody");x&&(x.rotation.x=.04+C*.15,x.rotation.y=P*.3,x.rotation.z=P*.15);const R=U(i,"orcHead");R&&(R.rotation.x=C*.35,R.rotation.y=E,R.rotation.z=0),Rn(i,Math.abs(C)*.4);return}const r=Math.sin(t),a=Math.sin(t+Math.PI),c=Math.max(0,-Math.cos(t)),l=Math.max(0,-Math.cos(t+Math.PI)),h=Math.max(0,Math.cos(t)),u=Math.max(0,Math.cos(t+Math.PI)),d=Math.max(0,r)*c,f=Math.max(0,a)*l,m=Math.max(0,-r)*(1-h),_=Math.max(0,-a)*(1-u),g=Math.cos(t*2),p=.56*s,S=Math.max(0,-g)*.04*s;J(U(i,"orcLegL"),r*p-c*.45,0,.04),J(U(i,"orcLegR"),a*p-l*.45,0,-.04),J(U(i,"orcShinL"),Re(.1+c*.85+d*.32+m*.14+h*.1),0,0),J(U(i,"orcShinR"),Re(.1+l*.85+f*.32+_*.14+u*.1),0,0),J(U(i,"orcFootL"),-c*.28+h*Math.max(0,r)*.22,0,0),J(U(i,"orcFootR"),-l*.28+u*Math.max(0,a)*.22,0,0),J(U(i,"orcArmL"),-r*.78*s+.04,.05,-.18),J(U(i,"orcForearmL"),-.3-Math.max(0,r)*.5,.05,-.03);const y=Math.max(0,a)*.16*s;J(U(i,"orcArmR"),-.34-y*.4,.08,.18),J(U(i,"orcForearmR"),-.42-y*.3,-.05,.05),sr(o,{rx:-a*.03*s,y:S*.4});const v=U(i,"orcBody");v&&(v.rotation.x=.08*s+S*.7,v.rotation.y=-r*.08*s,v.rotation.z=r*.03*s);const D=U(i,"orcHead");D&&(D.rotation.x=-.05-S*.4,D.rotation.y=r*.04*s,D.rotation.z=0),Rn(i,S)}function P_(i,t,e){const n=Math.max(0,Math.min(1,e)),s=jn(Math.min(1,n/.55)),o=Gi(Math.max(0,(n-.35)/.65));if(t==="yeti"){i.rotation.z=s*1.25,i.rotation.x=s*.42+o*.15,i.position.y=-s*.45-o*.12,i.scale.setScalar(1.15*(1-o*.12));const r=U(i,"yetiArmR"),a=U(i,"yetiArmL");r&&(r.rotation.x=o*.8),a&&(a.rotation.x=-o*.5),J(U(i,"yetiForearmR"),ie.forearmX-o*.4,0,0),J(U(i,"yetiForearmL"),ie.forearmX+o*.25,0,0),J(U(i,"yetiShinL"),Re(o*.55),0,0),J(U(i,"yetiShinR"),Re(o*.4),0,0);const c=U(i,"yetiHead");c&&(c.rotation.x=ie.headX+o*.6)}else if(t==="orc"){i.rotation.x=s*1.45,i.rotation.z=o*.25,i.position.y=-s*.18-o*.08,i.scale.setScalar(1-o*.22);const r=U(i,"orcArmR"),a=U(i,"orcArmL");r&&(r.rotation.x=-o*.9),a&&(a.rotation.x=o*.6),J(U(i,"orcForearmR"),-.28-o*.35,0,0),J(U(i,"orcForearmL"),-.28+o*.2,0,0),J(U(i,"orcShinL"),Re(o*.45),0,0),J(U(i,"orcShinR"),Re(o*.3),0,0);const c=U(i,"orcSpear");c&&sr(c,{rx:o*.5,y:-o*.12})}else i.rotation.z=s*.7,i.rotation.x=o*.2,i.position.y=-s*.25-o*.05}const I_=.44,Lh=.56,D_=.48,U_=.62,N_=.45,F_=.58,ar=.78,cr=1.05,lr=.82,O_=.36,z_=.42,B_=.4;class k_{renderer;scene;camera;hero;pivot;clock=new Tu;running=!1;raf=0;canvas;constructor(t){this.canvas=t,this.renderer=new Nc({canvas:t,antialias:!0,alpha:!0}),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.renderer.outputColorSpace=$e,this.renderer.toneMapping=hr,this.renderer.toneMappingExposure=1.38,this.renderer.setClearColor(0,0),this.renderer.shadowMap.enabled=!0,this.scene=new $s,this.scene.add(new js(15923199,4872754,1.05));const e=new On(16774880,1.9);e.position.set(2.4,4.2,3.2),e.castShadow=!0,this.scene.add(e);const n=new On(13163775,.45);n.position.set(-3,1.6,-2.4),this.scene.add(n),this.camera=new Qe(32,1,.1,20);const s=new I(0,1,0);this.camera.position.setFromSpherical(new bu(4.05,1.22,.55)).add(s),this.camera.lookAt(s),this.pivot=new ut,this.hero=Wc(),this.pivot.add(this.hero),this.scene.add(this.pivot);const o=new w(new Cn(.55,32),new de({color:0,transparent:!0,opacity:.28}));o.rotation.x=-Math.PI/2,o.position.y=.01,this.scene.add(o),this.resize()}setEnvironment(t){this.scene.environment=t}syncEquipment(t){hn(this.hero,uc(t.equipped.weapon)),dc(this.hero,t)}showSlot(t,e){dc(this.hero,e),t==="weapon"&&e.equipped.weapon?hn(this.hero,uc(e.equipped.weapon)):t==="hatchet"&&e.equipped.hatchet?hn(this.hero,"hatchet"):t==="pickaxe"&&e.equipped.pickaxe?hn(this.hero,"pickaxe"):this.syncEquipment(e)}start(){if(this.running)return;this.running=!0,this.clock.getDelta(),this.resize();const t=()=>{if(!this.running)return;this.raf=requestAnimationFrame(t);const e=Math.min(.05,this.clock.getDelta());this.pivot.rotation.y+=e*.18,Ui(this.hero,this.clock.elapsedTime),this.renderer.render(this.scene,this.camera)};t()}stop(){this.running=!1,cancelAnimationFrame(this.raf)}resize(){const t=Math.max(120,this.canvas.clientWidth||220),e=Math.max(160,this.canvas.clientHeight||280);this.renderer.setSize(t,e,!1),this.camera.aspect=t/e,this.camera.updateProjectionMatrix()}}function nn(i,t={}){return new Oe({color:i,roughness:t.roughness??.78,metalness:t.metalness??.08,...t})}function fn(i,t){return t.castShadow=!0,i.add(t),t}function H_(i){return i==="bronze_sword"?qu():i==="bronze_hatchet"?Wu():i==="bronze_pickaxe"?Xu():i==="whisper_logs"?G_():i==="copper_ore"?Ph(12088115,9062940):i==="tin_ore"?Ph(13160660,9081494):i==="camp_rations"?V_():i==="yeti_fur"?W_():i==="frost_claw"?X_():i==="yeti_hide"?r_():i==="frost_fang"?a_():i==="yeti_bone"?c_():i==="rime_shard"?l_():i==="frost_sword"?Uu():i==="frost_shield"?zu():i==="frost_bow"?Ou():i==="frost_hammer"?Nu():i==="frost_spear"?Fu():i==="frost_chest"?Bu():i==="frost_greaves"?ku():i==="frost_legs"?Hu():i==="frost_boots"?Gu():i==="orc_tooth"?q_():i==="scout_leather"?Y_():$_()}function G_(){const i=new ut,t=nn(6964260,{roughness:.92}),e=nn(12886122,{roughness:.7});for(let n=0;n<3;n++){const s=new ut,o=new w(new Vt(.055,.06,.42,8),t);o.rotation.z=Math.PI/2,fn(s,o);for(const r of[-.21,.21]){const a=new w(new Cn(.056,8),e);a.rotation.y=Math.PI/2,a.position.x=r,s.add(a)}s.position.set(0,(n-1)*.07,(n-1)*.04),s.rotation.z=(n-1)*.18,i.add(s)}return i}function Ph(i,t){const e=new ut,n=nn(t,{roughness:.95}),s=nn(i,{roughness:.45,metalness:.55}),o=new w(new zn(.16,0),n);o.scale.set(1.15,.9,1.05),fn(e,o);for(let r=0;r<4;r++){const a=r/4*Math.PI*2,c=new w(new zn(.055,0),r%2?s:n);c.position.set(Math.cos(a)*.12,r%2*.06-.02,Math.sin(a)*.1),c.rotation.set(a,r,.3),fn(e,c)}return e}function V_(){const i=new ut,t=nn(9069112,{roughness:.88}),e=nn(9054754,{roughness:.7}),n=new w(new zt(.22,.1,.16),t);fn(i,n);const s=new w(new Ne(.09,.01,6,12),nn(3810324,{roughness:.9}));s.rotation.x=Math.PI/2,i.add(s);const o=new w(new zt(.16,.03,.05),e);return o.position.y=.06,fn(i,o),i}function W_(){const i=new ut,t=nn(15266038,{roughness:.97}),e=nn(12110038,{roughness:.97}),n=new w(new nt(.14,10,8),t);n.scale.set(1.3,.45,1.1),fn(i,n);for(let s=0;s<7;s++){const o=s/7*Math.PI*2,r=new w(new zn(.055,0),s%2?e:t);r.position.set(Math.cos(o)*.1,.04,Math.sin(o)*.08),r.scale.set(1.4,.55,1),r.rotation.y=o,fn(i,r)}return i}function X_(){const i=new ut,t=nn(1909291,{roughness:.32,metalness:.4}),e=new w(new Te(.045,.28,7),t);e.rotation.x=.55,fn(i,e);const n=new w(new nt(.05,8,6),nn(3817544,{roughness:.8}));return n.position.y=-.1,fn(i,n),i}function q_(){const i=new ut,t=new w(new Te(.04,.26,7),nn(15920084,{roughness:.4}));return t.rotation.z=.25,t.rotation.x=-.15,fn(i,t),i}function Y_(){const i=new ut,t=nn(7030054,{roughness:.86}),e=nn(4073492,{roughness:.9}),n=new w(new zt(.22,.04,.16),t);n.rotation.z=.12,fn(i,n);const s=new w(new zt(.14,.03,.12),e);return s.position.set(.02,.03,.01),s.rotation.z=-.2,fn(i,s),i}function $_(){const i=new ut;return fn(i,new w(new zt(.16,.16,.16),nn(6710886))),i}const pi=128,Ih=new Map;let Pn=null,Ni=null,Pi=null;function Z_(){if(Pn)return;Pn=new Nc({antialias:!0,alpha:!0,preserveDrawingBuffer:!0}),Pn.setPixelRatio(1),Pn.setSize(pi,pi,!1),Pn.outputColorSpace=$e,Pn.toneMapping=hr,Pn.toneMappingExposure=1.35,Pn.setClearColor(0,0),Ni=new $s,Ni.add(new js(16054271,4864552,1.05));const i=new On(16774364,1.8);i.position.set(2.2,3.4,2.6),Ni.add(i);const t=new On(13163775,.55);t.position.set(-2.4,1.2,-1.6),Ni.add(t),Pi=new Qe(32,1,.02,20)}function J_(i){const t=new Qn().setFromObject(i),e=t.getSize(new I),n=t.getCenter(new I);i.position.sub(n);const s=Math.max(e.x,e.y,e.z,.08);Pi.position.set(s*1.15,s*.55,s*1.7),Pi.near=s*.05,Pi.far=s*8,Pi.updateProjectionMatrix(),Pi.lookAt(0,0,0)}function K_(i){const t=Ih.get(i);if(t)return t;Z_();const e=H_(i);(i==="bronze_sword"||i==="frost_sword")&&e.rotation.set(.15,.85,-.85),i==="frost_spear"&&e.rotation.set(.2,.7,-1.05),(i==="bronze_hatchet"||i==="frost_hammer")&&e.rotation.set(.25,.95,-.35),i==="bronze_pickaxe"&&e.rotation.set(.15,.7,-.25),i==="frost_bow"&&e.rotation.set(.05,.9,.2),i==="frost_shield"&&e.rotation.set(.22,.38,.06),i==="frost_chest"&&e.rotation.set(.2,.7,0),(i==="frost_greaves"||i==="frost_legs")&&e.rotation.set(.15,.6,.15),i==="frost_boots"&&e.rotation.set(.6,.4,0),Ni.add(e),J_(e),Pn.render(Ni,Pi);const n=document.createElement("canvas");return n.width=pi,n.height=pi,n.getContext("2d").drawImage(Pn.domElement,0,0),Ni.remove(e),e.traverse(s=>{const o=s;o.geometry&&o.geometry.dispose()}),Ih.set(i,n),n}function da(i,t){const e=K_(t);i.width=pi,i.height=pi;const n=i.getContext("2d");n&&(n.clearRect(0,0,pi,pi),n.drawImage(e,0,0))}class j_{chatLog;invGrid;invCount;skillsList;skillsPanel;progressWrap;progressFill;progressLabel;targetInfo;targetName;targetHp;hpText;prayText;stamText;hpRing;prayRing;stamRing;minimap;minimapCtx;touchHint;inventory;btnInventory;gearPanel;btnGear;gearInspect;heroPane;forgePanel;forgeList;narrowMq;desktopInvInited=!1;circum=2*Math.PI*28;onAction=null;onInventoryClick=null;onGearSlotClick=null;onForgeCraft=null;constructor(){this.chatLog=ae("chat-log"),this.invGrid=ae("inv-grid"),this.invCount=ae("inv-count"),this.skillsList=ae("skills-list"),this.skillsPanel=ae("skills-panel"),this.progressWrap=ae("progress-wrap"),this.progressFill=ae("progress-fill"),this.progressLabel=ae("progress-label"),this.targetInfo=ae("target-info"),this.targetName=ae("target-name"),this.targetHp=ae("target-hp"),this.hpText=ae("hp-text"),this.prayText=ae("pray-text"),this.stamText=ae("stam-text"),this.hpRing=ae("hp-ring"),this.prayRing=ae("pray-ring"),this.stamRing=ae("stam-ring"),this.minimap=ae("minimap"),this.minimapCtx=this.minimap.getContext("2d"),this.touchHint=ae("touch-hint"),this.inventory=ae("inventory"),this.btnInventory=ae("btn-inventory"),this.gearPanel=ae("gear-panel"),this.btnGear=ae("btn-gear"),this.gearInspect=ae("gear-inspect"),this.heroPane=new k_(ae("gear-hero")),this.forgePanel=ae("forge-panel"),this.forgeList=ae("forge-list"),ae("forge-close").addEventListener("click",()=>this.setForgeOpen(!1)),this.narrowMq=window.matchMedia("(max-width: 480px)"),this.btnGear.addEventListener("click",()=>this.setGearOpen(this.gearPanel.hidden)),ae("gear-close").addEventListener("click",()=>this.setGearOpen(!1)),this.gearPanel.querySelectorAll(".gear-slot").forEach(e=>{e.addEventListener("click",()=>{const n=e.dataset.slot;n&&this.onGearSlotClick?.(n)})}),ae("btn-skills").addEventListener("click",()=>{this.skillsPanel.hidden=!this.skillsPanel.hidden}),ae("skills-close").addEventListener("click",()=>{this.skillsPanel.hidden=!0}),this.btnInventory.addEventListener("click",()=>{this.setInventoryOpen(this.inventory.hidden)}),ae("inv-close").addEventListener("click",()=>{this.setInventoryOpen(!1)});const t=()=>this.syncInventoryForViewport();typeof this.narrowMq.addEventListener=="function"?this.narrowMq.addEventListener("change",t):this.narrowMq.addListener(t),this.syncInventoryForViewport(),document.querySelectorAll(".ab-slot").forEach(e=>{e.addEventListener("click",()=>{const n=e.dataset.action;n&&this.onAction?.(n),e.classList.add("active"),setTimeout(()=>e.classList.remove("active"),120)})}),setTimeout(()=>this.touchHint.classList.add("fade"),8e3)}syncInventoryForViewport(){this.narrowMq.matches?(this.desktopInvInited=!1,this.setInventoryOpen(!1)):this.desktopInvInited||(this.desktopInvInited=!0,this.setInventoryOpen(!0))}setGearOpen(t){this.gearPanel.hidden=!t,this.btnGear.setAttribute("aria-expanded",t?"true":"false"),t?(this.heroPane.resize(),this.heroPane.start()):this.heroPane.stop()}isGearOpen(){return!this.gearPanel.hidden}setForgeOpen(t,e){this.forgePanel.hidden=!t,t&&e&&this.setForgeRecipes(e)}isForgeOpen(){return!this.forgePanel.hidden}setForgeRecipes(t){this.forgeList.innerHTML="";for(const e of Au){const n=Ru(t,e.id),s=Cu(t,e),o=document.createElement("div");o.className=`forge-row${n?" owned":""}`;const r=document.createElement("canvas");r.className="item-icon",r.width=128,r.height=128,da(r,e.id);const a=document.createElement("div");a.className="forge-meta";const c=e.cost.map(u=>{const d=vr(t.inventory,u.id),f=Dn[u.id]?.name??u.id;return`<span class="${d>=u.qty?"have":"need"}">${f} ${d}/${u.qty}</span>`}).join(" · ");a.innerHTML=`<div class="forge-name">${e.name}</div><div class="forge-desc">${e.blurb}</div><div class="forge-cost">${c}</div>`;const l=document.createElement("button");l.type="button",l.className="forge-craft",l.textContent=n?"Owned":"Forge",l.disabled=!s;const h=e.id;l.addEventListener("click",()=>this.onForgeCraft?.(h)),o.append(r,a,l),this.forgeList.appendChild(o)}}setEnvironment(t){this.heroPane.setEnvironment(t)}setEquipment(t,e){this.isForgeOpen()&&this.setForgeRecipes(t),this.heroPane.syncEquipment(t);for(const{id:n,label:s}of Q1){const o=this.gearPanel.querySelector(`.gear-slot[data-slot="${n}"]`);if(!o)continue;const r=t.equipped[n],a=o.querySelector("canvas.item-icon"),c=o.querySelector(".gear-empty");if(o.classList.toggle("filled",!!r),r&&a){da(a,r),a.hidden=!1,c&&(c.hidden=!0);const l=Dn[r];o.title=`${s}: ${l?.name??r} (click to unequip)`}else a&&(a.hidden=!0),c&&(c.hidden=!1),o.title=`${s}: empty`}e&&(this.gearInspect.textContent=e)}inspectGear(t){this.gearInspect.textContent=t}showSlotPreview(t,e){this.heroPane.showSlot(t,e)}setInventoryOpen(t){this.inventory.hidden=!t,this.btnInventory.setAttribute("aria-expanded",t?"true":"false"),this.narrowMq.matches||(this.btnInventory.style.display=t?"none":"flex")}chat(t,e="system"){const n=document.createElement("div");for(n.className=`chat-line ${e==="plain"?"":e}`.trim(),n.textContent=t,this.chatLog.appendChild(n);this.chatLog.children.length>40;)this.chatLog.removeChild(this.chatLog.firstChild);this.chatLog.scrollTop=this.chatLog.scrollHeight}setOrbs(t,e,n,s){this.hpText.textContent=String(Math.round(t)),this.prayText.textContent=String(Math.round(n)),this.stamText.textContent=String(Math.round(s)),this.setRing(this.hpRing,t/e),this.setRing(this.prayRing,n/100),this.setRing(this.stamRing,s/100)}setRing(t,e){const n=Math.max(0,Math.min(1,e));t.style.strokeDasharray=String(this.circum),t.style.strokeDashoffset=String(this.circum*(1-n))}setInventory(t){this.invGrid.innerHTML="";const e=28;for(let n=0;n<e;n++){const s=document.createElement("div");s.className="inv-slot";const o=t[n];if(o){s.classList.add("has-item");const r=Dn[o.id],a=document.createElement("canvas");if(a.className="item-icon",a.width=128,a.height=128,da(a,o.id),s.appendChild(a),s.title=`${r?.name??o.id}${o.qty>1?` ×${o.qty}`:""}${r?.slot?" — click to equip":o.id==="camp_rations"?" — click to eat":""}`,o.qty>1){const l=document.createElement("span");l.className="inv-qty",l.textContent=String(o.qty),s.appendChild(l)}const c=n;s.addEventListener("click",()=>this.onInventoryClick?.(c))}this.invGrid.appendChild(s)}this.invCount.textContent=`${t.length}/${e}`}setSkills(t){this.skillsList.innerHTML="",Object.keys(gh).forEach(e=>{const n=t.skills[e],s=gh[e],o=document.createElement("div");o.className="skill-row";const r=er(n.level+1),a=er(n.level),c=n.level>=99?100:(n.xp-a)/(r-a)*100;o.innerHTML=`
        <div class="skill-icon">${s.icon}</div>
        <div class="skill-meta">
          <div class="skill-name">${s.name}</div>
          <div class="skill-xp"><div style="width:${c}%"></div></div>
        </div>
        <div class="skill-lvl">${n.level}</div>
      `,this.skillsList.appendChild(o)})}showProgress(t,e){this.progressWrap.hidden=!1,this.progressLabel.textContent=t,this.progressFill.style.width=`${Math.max(0,Math.min(100,e*100))}%`}hideProgress(){this.progressWrap.hidden=!0,this.progressFill.style.width="0%"}showTarget(t,e){this.targetInfo.hidden=!1,this.targetName.textContent=t,this.targetHp.style.width=`${Math.max(0,Math.min(100,e*100))}%`}hideTarget(){this.targetInfo.hidden=!0}drawMinimap(t,e,n,s){const o=this.minimapCtx,r=this.minimap.width,a=this.minimap.height,c=r/2,l=a/2,h=Math.min(r,a)/2-1;o.clearRect(0,0,r,a),o.save(),o.beginPath(),o.arc(c,l,h,0,Math.PI*2),o.clip();const u=o.createRadialGradient(c,l,4,c,l,h);u.addColorStop(0,"#4a7a30"),u.addColorStop(.65,"#2c4e20"),u.addColorStop(1,"#1a3014"),o.fillStyle=u,o.fillRect(0,0,r,a);for(let f=0;f<36;f++)o.fillStyle=f%2?"#3a6828":"#2e5420",o.fillRect(f*41%r,f*59%a,7,7);const d=3.2;for(const f of s){const m=c+(f.x-t)*d,_=l+(f.z-e)*d,g=m-c,p=_-l;g*g+p*p>(h-4)*(h-4)||(o.fillStyle=f.color,o.beginPath(),o.arc(m,_,3,0,Math.PI*2),o.fill())}o.save(),o.translate(c,l),o.rotate(n),o.fillStyle="#f0d070",o.beginPath(),o.moveTo(0,-6),o.lineTo(4,5),o.lineTo(0,2),o.lineTo(-4,5),o.closePath(),o.fill(),o.restore(),o.restore(),o.beginPath(),o.arc(c,l,h-.5,0,Math.PI*2),o.strokeStyle="#8a6a28",o.lineWidth=3,o.stroke(),o.beginPath(),o.arc(c,l,h-3,0,Math.PI*2),o.strokeStyle="rgba(212,168,75,0.35)",o.lineWidth=1.5,o.stroke(),o.fillStyle="#e8c060",o.beginPath(),o.moveTo(c,6),o.lineTo(c+5,14),o.lineTo(c-5,14),o.closePath(),o.fill(),o.fillStyle="#f0d070",o.font="bold 11px Segoe UI, system-ui, sans-serif",o.textAlign="center",o.fillText("N",c,26)}}function ae(i){const t=document.getElementById(i);if(!t)throw new Error(`Missing #${i}`);return t}const sd=[];function rn(i,t){let e=Math.imul(i|0,1597334677)^Math.imul(t|0,3812015801);return e=Math.imul(e^e>>>16,2146121005),e=Math.imul(e^e>>>15,2221713035),((e^e>>>16)>>>0)/4294967296}function Dh(i){return i*i*i*(i*(i*6-15)+10)}function Mr(i,t){const e=Math.floor(i),n=Math.floor(t),s=i-e,o=t-n,r=Dh(s),a=Dh(o),c=rn(e,n),l=rn(e+1,n),h=rn(e,n+1),u=rn(e+1,n+1);return c+(l-c)*r+(h-c)*a+(c-l-h+u)*r*a}function fs(i,t,e=5){let n=0,s=.5,o=1,r=0;for(let a=0;a<e;a++)n+=s*Mr(i*o,t*o),r+=s,s*=.5,o*=2.07;return n/r}function Q_(i,t){const e=fs(i*.31+17.2,t*.31-9.4,3),n=fs(i*.31-8.1,t*.31+5.6,3);return fs(i*.11+e*1.65,t*.11+n*1.65,5)}function Yc(i,t){const e=Math.exp(-((i*.15+.05)**2)*8-(t*.12-.15)**2*3),n=Math.exp(-((i+.5-t*.35)**2)*2.2-(t-1.2)**2*.08),s=Math.exp(-((i+3.2-t*.15)**2)*1.4-(t+2.5)**2*.06);return Math.max(e,n*.85,s*.75)}function $c(i,t){const e=Math.exp(-((i-4.2)**2)*.09-(t-7.2)**2*.08),n=Math.exp(-((i-5.5)**2)*.15-(t-6)**2*.12);return Math.max(e,n*.85)}function tv(i,t){return Math.exp(-((i+2.05)**2+(t+.55)**2)*.11)}function Pe(i,t){const e=(Q_(i,t)-.5)*.38,n=(fs(i*1.65+41.2,t*1.65-18.7,4)-.5)*.07,s=(Mr(i*7.2+3.1,t*7.2-2.4)-.5)*.022;let o=e+n+s;return o*=1-tv(i,t)*.84,o*=1-Yc(i,t)*.38,o+=$c(i,t)*.045,o}function ev(i,t){return fs(i*2.4+12.7,t*2.4-6.3,4)}function nv(i=48){const e=new Sn(i,i,128,128),n=e.attributes.position,s=new Float32Array(n.count*3),o=new St(7189564),r=new St(9227338),a=new St(5149230),c=new St(11066466),l=new St(4094508),h=new St(10123848),u=new St(7230512),d=new St(15660795),f=new St(13163754),m=new St;for(let p=0;p<n.count;p++){const S=n.getX(p),v=-n.getY(p);n.setZ(p,Pe(S,v));const D=Yc(S,v),T=$c(S,v),C=ev(S,v),P=Mr(S*1.9+4.2,v*1.9-1.7);T>.24?(m.copy(d).lerp(f,C),m.lerp(o,1-Math.min(1,T*1.7))):D>.28?(m.copy(h).lerp(u,P),m.lerp(o,1-Math.min(1,D*1.4))):C>.72?m.copy(l).lerp(a,P*.45):(m.copy(o).lerp(C>.52?r:a,C*.7+P*.3),m.lerp(c,Math.max(0,P-.55)*.85)),s[p*3]=m.r,s[p*3+1]=m.g,s[p*3+2]=m.b}e.setAttribute("color",new dn(s,3)),e.computeVertexNormals();const _=iv(),g=new w(e,new Oe({vertexColors:!0,roughness:.86,metalness:0,flatShading:!1,bumpMap:_,bumpScale:.22}));return g.rotation.x=-Math.PI/2,g.receiveShadow=!0,g.name="ground",g}function iv(){const t=document.createElement("canvas");t.width=256,t.height=256;const e=t.getContext("2d"),n=e.createImageData(256,256);for(let o=0;o<256;o++)for(let r=0;r<256;r++){const a=fs(r*.11+2.2,o*.11-1.4,4),c=Mr(r*.55,o*.38),l=Math.floor((a*.62+c*.38)*255),h=(o*256+r)*4;n.data[h]=l,n.data[h+1]=l,n.data[h+2]=l,n.data[h+3]=255}e.putImageData(n,0,0);const s=new zc(t);return s.wrapS=_s,s.wrapT=_s,s.repeat.set(22,22),s.anisotropy=4,s.colorSpace=Un,s}function sv(){const i=document.createElement("canvas");i.width=32,i.height=64;const t=i.getContext("2d"),e=t.createLinearGradient(16,64,16,0);e.addColorStop(0,"rgba(70, 130, 28, 0)"),e.addColorStop(.1,"rgba(96, 168, 40, 255)"),e.addColorStop(.5,"rgba(168, 220, 64, 255)"),e.addColorStop(1,"rgba(232, 255, 120, 240)"),t.fillStyle=e,t.beginPath(),t.moveTo(16,2),t.quadraticCurveTo(5,36,9,64),t.lineTo(23,64),t.quadraticCurveTo(27,36,16,2),t.fill();const n=new zc(i);return n.colorSpace=$e,n.anisotropy=4,n}function ov(){const i=[],t=[];for(let s=0;s<5;s++){const o=s/5*Math.PI,r=Math.cos(o),a=Math.sin(o),c=.085+s%3*.02,l=.26+s%4*.07,h=[[-c,0,0],[c,0,0],[c,l,0],[-c,l,0]],u=[0,1,2,0,2,3];for(const d of u){const[f,m]=h[d];i.push(f*r,m,f*a),t.push(d===0||d===3?0:1,m/l)}}const n=new Le;return n.setAttribute("position",new Zt(i,3)),n.setAttribute("uv",new Zt(t,2)),n.computeVertexNormals(),n}function rv(){const i=[],t=[],s=[[-.012,0,0],[.012,0,0],[.012,.16,0],[-.012,.16,0]];for(const a of[0,1,2,0,2,3]){const[c,l,h]=s[a];i.push(c,l,h),t.push(a===0||a===3?.45:.55,l/.16)}const o=.09;for(const a of[0,Math.PI/2]){const c=Math.cos(a),l=Math.sin(a),h=[[-o,.16-.01],[o,.16-.01],[o,.16+.07],[-o,.16+.07]];for(const u of[0,1,2,0,2,3]){const[d,f]=h[u];i.push(d*c,f,d*l),t.push(u===0||u===3?0:1,(f-.16+.01)/.08)}}const r=new Le;return r.setAttribute("position",new Zt(i,3)),r.setAttribute("uv",new Zt(t,2)),r.computeVertexNormals(),r}function Uh(i,t){i.onBeforeCompile=e=>{e.uniforms.uTime={value:0},e.vertexShader=`uniform float uTime;
${e.vertexShader}`,e.vertexShader=e.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
       float hgt = max(transformed.y, 0.0);
       vec3 ip = vec3(instanceMatrix[3][0], instanceMatrix[3][1], instanceMatrix[3][2]);
       float t = uTime * 1.55 + ip.x * 0.82 + ip.z * 0.64;
       transformed.x += sin(t) * ${t.toFixed(3)} * hgt;
       transformed.z += cos(t * 0.88 + 0.35) * ${(t*.55).toFixed(3)} * hgt;`),sd.push(e)}}function fa(i,t,e=.32,n=.22){return!(Yc(i,t)>e||$c(i,t)>n||Math.hypot(i+1.2,t+.5)<1.55||Math.hypot(i+3.5,t+1.5)<1.35)}function av(){const i=new ut;i.name="terrainFoliage";const t=new Be,e=new sa({map:sv(),color:15400856,side:le,alphaTest:.18});Uh(e,.55);const n=[],s=new St(11853914),o=new St(6989874),r=new St,a=.5;for(let T=-20;T<=20;T+=a)for(let C=-20;C<=20;C+=a){const P=(rn(Math.floor(T*20+3),Math.floor(C*20+9))-.5)*a*.92,E=(rn(Math.floor(T*20+11),Math.floor(C*20+2))-.5)*a*.92,x=T+P,R=C+E,O=rn(Math.floor(x*17+4),Math.floor(R*19+8));if(O<.22||!fa(x,R))continue;const N=.75+O*.7;n.push({x,z:R,h:Pe(x,R),s:N,r:O*Math.PI*2,c:r.copy(s).lerp(o,rn(Math.floor(x*8),Math.floor(R*13)))})}const c=new Qr(ov(),e,n.length);c.name="instancedGrass",c.castShadow=!1,c.receiveShadow=!0,c.instanceMatrix.setUsage(Qd);const l=new Float32Array(n.length*3);n.forEach((T,C)=>{t.position.set(T.x,T.h,T.z),t.rotation.set(0,T.r,0),t.scale.setScalar(T.s),t.updateMatrix(),c.setMatrixAt(C,t.matrix),l[C*3]=T.c.r,l[C*3+1]=T.c.g,l[C*3+2]=T.c.b}),c.instanceColor=new Vs(l,3),c.instanceMatrix.needsUpdate=!0,c.frustumCulled=!1,c.raycast=()=>{},i.add(c);const h=new sa({color:16777215,side:le});Uh(h,.35);const u=[16774876,16768060,16738984,13142271,16747058],d=[],f=1.28;for(let T=-19;T<=19;T+=f)for(let C=-19;C<=19;C+=f){const P=(rn(Math.floor(T*13+21),Math.floor(C*13+5))-.5)*f,E=(rn(Math.floor(T*13+7),Math.floor(C*13+18))-.5)*f,x=T+P,R=C+E,O=rn(Math.floor(x*29+1),Math.floor(R*31+6));if(O<.28||!fa(x,R,.26,.18))continue;const N=new St(u[Math.floor(O*u.length)%u.length]);d.push({x,z:R,h:Pe(x,R),s:.85+O*.55,r:O*6.2,c:N})}const m=new Qr(rv(),h,d.length);m.name="instancedFlowers",m.castShadow=!1;const _=new Float32Array(d.length*3);d.forEach((T,C)=>{t.position.set(T.x,T.h,T.z),t.rotation.set(0,T.r,0),t.scale.setScalar(T.s),t.updateMatrix(),m.setMatrixAt(C,t.matrix),_[C*3]=T.c.r,_[C*3+1]=T.c.g,_[C*3+2]=T.c.b}),m.instanceColor=new Vs(_,3),m.instanceMatrix.needsUpdate=!0,m.frustumCulled=!1,m.raycast=()=>{},i.add(m);const g=new sa({color:16777215,flatShading:!0}),p=[9079942,7236194,10130568,6054996],S=[],y=1.7;for(let T=-18.5;T<=18.5;T+=y)for(let C=-18.5;C<=18.5;C+=y){const P=(rn(Math.floor(T*11+40),Math.floor(C*11+3))-.5)*y,E=(rn(Math.floor(T*11+8),Math.floor(C*11+33))-.5)*y,x=T+P,R=C+E,O=rn(Math.floor(x*23+2),Math.floor(R*27+9));O<.55||fa(x,R,.2,.16)&&S.push({x,z:R,h:Pe(x,R),s:.7+O*1.1,rx:O*2.2,ry:O*5.1,c:new St(p[Math.floor(O*p.length)%p.length])})}const v=new Qr(new Kn(.11,0),g,S.length);v.name="instancedStones",v.castShadow=!0,v.receiveShadow=!0;const D=new Float32Array(S.length*3);return S.forEach((T,C)=>{t.position.set(T.x,T.h+.04*T.s,T.z),t.rotation.set(T.rx,T.ry,T.rx*.4),t.scale.set(T.s*1.15,T.s*.7,T.s*1.05),t.updateMatrix(),v.setMatrixAt(C,t.matrix),D[C*3]=T.c.r,D[C*3+1]=T.c.g,D[C*3+2]=T.c.b}),v.instanceColor=new Vs(D,3),v.instanceMatrix.needsUpdate=!0,v.frustumCulled=!1,v.raycast=()=>{},i.add(v),i}function cv(i){for(const t of sd)t.uniforms.uTime.value=i}const Nh=new Map;function Ee(i,t={}){const e=`${i}_${t.roughness??.78}_${t.metalness??.08}_${t.flatShading===!1?0:1}_${t.emissive??0}_${t.emissiveIntensity??0}`;let n=Nh.get(e);return n||(n=new Oe({color:i,roughness:t.roughness??.78,metalness:t.metalness??.08,flatShading:t.flatShading??!0,envMapIntensity:t.envMapIntensity??.85,...t}),Nh.set(e,n)),n}function lv(i,t=1.08,e=659976){const n=new w(i.geometry,new de({color:e,side:Xe,depthWrite:!1}));n.scale.setScalar(t),n.name="outline",i.add(n)}function od(i=0){const t=new ut;t.name="tree";const e=1.55+i%5*.18,n=i%3===0?4862488:i%3===1?5913114:4074002,s=new w(new Vt(.16,.28,e,8),Ee(n,{roughness:.95}));s.position.y=e/2,s.castShadow=!0,s.receiveShadow=!0,t.add(s);for(let h=0;h<3;h++){const u=h/3*Math.PI*2+i*.3,d=new w(new zt(.05,e*(.55+h%2*.15),.07),Ee(2758664,{roughness:1}));d.position.set(Math.cos(u)*.15,e*.45,Math.sin(u)*.15),d.rotation.y=u,t.add(d)}for(let h=0;h<3;h++){const u=new w(new Ne(.18+h*.02,.02,4,10),Ee(3021836,{roughness:1}));u.rotation.x=Math.PI/2,u.position.y=.35+h*(e*.28),t.add(u)}const o=i%2===0?3109424:3835448,r=i%3===0?2254376:5016648,a=1856032;for(let h=0;h<5;h++){const u=.9-h*.12,d=h%3===0?o:h%3===1?r:a,f=new w(new Te(u,1-h*.1,9),Ee(d,{roughness:.88}));if(f.position.y=e+.22+h*.42,f.rotation.y=(i+h)*.45,f.castShadow=!0,t.add(f),h<3){const m=new w(new Te(u*.55,.55,7),Ee(1325080,{roughness:.95}));m.position.y=e+.35+h*.42,t.add(m)}}const c=new w(new Vt(.34,.44,.2,7),Ee(3811344,{roughness:1}));c.position.y=.08,c.receiveShadow=!0,t.add(c);for(let h=0;h<4;h++){const u=h/4*Math.PI*2+i,d=new w(new zt(.12,.1,.35),Ee(3021836));d.position.set(Math.cos(u)*.28,.06,Math.sin(u)*.28),d.rotation.y=u,t.add(d)}const l=new w(new Vt(.55,.55,.2,8),new de({visible:!1}));return l.position.y=.1,l.name="hit",t.add(l),t}function vc(i,t=0){const e=new ut;e.name="rock";const n=new w(new Kn(.55+t%3*.06,0),Ee(t%2===0?6185576:5132888,{roughness:.9}));n.position.y=.4,n.rotation.set(.2,t,.1),n.castShadow=!0,n.receiveShadow=!0,e.add(n);const s=new w(new Cn(.55,12),new de({color:0,transparent:!0,opacity:.28,depthWrite:!1}));s.rotation.x=-Math.PI/2,s.position.y=.02,e.add(s);const o=new w(new Kn(.28,0),Ee(4869714));o.position.set(.35,.22,-.15),o.rotation.set(.4,t*.5,.2),o.castShadow=!0,e.add(o);const r=i==="copper"?12088115:12632264;for(let l=0;l<4;l++){const h=new w(new nt(.1+l%2*.03,6,4),Ee(r,{metalness:.55,roughness:.4,emissive:r,emissiveIntensity:.15})),u=l/4*Math.PI*2+t;h.position.set(Math.cos(u)*.32,.42+l%2*.18,Math.sin(u)*.32),e.add(h)}const a=new w(new nt(.14,5,4),Ee(3828272,{roughness:1}));a.position.set(-.25,.55,.2),a.scale.set(1.2,.5,1),e.add(a);const c=new w(new nt(.75,8,6),new de({visible:!1}));return c.position.y=.4,c.name="hit",e.add(c),e}function rd(){const i=new ut;i.name="dummy";const t=(h,u={})=>new Oe({color:h,roughness:u.roughness??.85,metalness:u.metalness??.05,flatShading:!0,...u}),e=new w(new Vt(.08,.1,1.4,6),t(5913114));e.position.y=.7,e.castShadow=!0,i.add(e);const n=new w(new Vt(.28,.32,.7,8),t(9071168));n.position.y=1.15,n.castShadow=!0,n.name="dummyBody",lv(n,1.06,1708040),i.add(n);const s=new w(new nt(.22,8,6),t(12886112));s.position.y=1.65,s.name="dummyHead",i.add(s);const o=t(4857872),r=new w(new zt(.35,.06,.04),o);r.position.set(0,1.2,.3),r.rotation.z=.6,i.add(r);const a=r.clone();a.rotation.z=-.6,i.add(a);const c=new w(new Vt(.4,.45,.12,8),t(3811861));c.position.y=.06,c.receiveShadow=!0,i.add(c);const l=new w(new Vt(.45,.45,1.8,8),new de({visible:!1}));return l.position.y=.9,l.name="hit",i.add(l),i}function hv(i,t=140){const e=[];i.traverse(s=>{s.isMesh&&s.name!=="hit"&&s.name!=="outline"&&e.push(s)});const n=[];for(const s of e){const o=s.material;!o||!o.emissive||(n.push({mesh:s,emissive:o.emissive.clone(),intensity:o.emissiveIntensity??0}),o.emissive.setHex(16772778),o.emissiveIntensity=.85)}setTimeout(()=>{for(const s of n){const o=s.mesh.material;o.emissive.copy(s.emissive),o.emissiveIntensity=s.intensity}},t)}function ad(){const i=new ut;for(let s=0;s<8;s++){const o=new w(new Kn(.12,0),Ee(5921368)),r=s/8*Math.PI*2;o.position.set(Math.cos(r)*.45,.08,Math.sin(r)*.45),o.rotation.set(Math.random(),r,.2),o.castShadow=!0,i.add(o)}for(let s=0;s<5;s++){const o=new w(new Vt(.06,.07,.7,5),Ee(4860432));o.rotation.z=Math.PI/2,o.rotation.y=s/5*Math.PI*2,o.position.y=.1,i.add(o)}const t=new w(new Te(.2,.55,5),new Oe({color:16737826,emissive:16729088,emissiveIntensity:1.4,flatShading:!0,transparent:!0,opacity:.92}));t.position.y=.42,t.name="flame",i.add(t);const e=new w(new nt(.18,8,6),new de({color:16755268,transparent:!0,opacity:.35,depthWrite:!1}));e.position.y=.28,e.name="flameGlow",i.add(e);const n=new _r(16746564,1.6,14);return n.position.y=.65,n.castShadow=!1,i.add(n),i}function cd(){const i=new ut,t=Ee(6967344,{roughness:.92,side:le}),e=Ee(4864024,{roughness:.94,side:le}),n=new w(new Vt(.035,.035,1.55,6),Ee(3811856,{roughness:1}));n.rotation.z=Math.PI/2,n.position.y=1.18,i.add(n);for(const a of[-1,1]){const c=new w(new Sn(1.55,1.42),t);c.position.set(a*.52,.62,0),c.rotation.y=a*-.72,c.castShadow=!0,c.receiveShadow=!0,i.add(c);const l=new w(new Sn(1.5,1.36),e);l.position.set(a*.5,.62,0),l.rotation.y=a*-.72+Math.PI,i.add(l)}const s=new w(new Sn(1.05,1.05),e);s.position.set(0,.52,-.72),s.castShadow=!0,i.add(s);const o=new w(new Sn(.42,.85),e);o.position.set(-.18,.42,.7),o.rotation.y=.35,i.add(o);const r=new w(new Sn(.42,.85),t);r.position.set(.22,.42,.68),r.rotation.y=-.55,i.add(r);for(const[a,c]of[[-.9,-.9],[.9,-.9],[-.9,.9],[.9,.9]]){const l=new w(new Vt(.03,.03,.25,4),Ee(3811856));l.position.set(a*.85,.12,c*.85),i.add(l)}return i}function xc(){const i=new ut,t=new w(new zt(.55,.4,.45),Ee(6965800));t.position.y=.2,t.castShadow=!0,t.receiveShadow=!0,i.add(t);const e=new w(new zt(.58,.06,.48),Ee(5913114));return e.position.y=.43,i.add(e),i}function $o(){const i=new ut,t=new w(new Vt(.28,.3,.55,10),Ee(5913114));t.position.y=.28,t.castShadow=!0,i.add(t);const e=new w(new Ne(.29,.025,6,12),Ee(9079434,{metalness:.5}));return e.rotation.x=Math.PI/2,e.position.y=.35,i.add(e),i}function yc(){const i=new ut,t=new w(new Vt(.14,.14,.7,8),Ee(3820138));return t.rotation.z=Math.PI/2,t.position.y=.12,t.castShadow=!0,i.add(t),i}function uv(i=60){const t=new nt(i,24,12),e=new Float32Array(t.attributes.position.count*3),n=t.attributes.position,s=new St(4888288),o=new St(9354472),r=new St(15914660),a=new St;for(let l=0;l<n.count;l++){const h=n.getY(l)/i,u=Math.max(0,Math.min(1,(h+.15)/1));u<.45?a.copy(r).lerp(o,u/.45):a.copy(o).lerp(s,(u-.45)/.55),e[l*3]=a.r,e[l*3+1]=a.g,e[l*3+2]=a.b}t.setAttribute("color",new dn(e,3));const c=new w(t,new de({vertexColors:!0,side:Xe,depthWrite:!1,fog:!1}));return c.name="sky",c}function ko(i,t){const e=i.getObjectByName("yetiArmR"),n=i.getObjectByName("yetiArmL"),s=Math.max(0,Math.min(1,t));let o=0,r=0;if(s<=0)return;if(s<.35){const c=s/.35;o=-1.35*c,r=-.4*c}else if(s<.55){const c=(s-.35)/.2;o=-1.35+2.4*c,r=-.4+1.6*c}else{const c=(s-.55)/.45;o=1.05*(1-c),r=1.2*(1-c)}e&&(e.rotation.x=o,e.rotation.y=r*.55),n&&(n.rotation.x=o*.55);const a=i.getObjectByName("yetiHead");a&&(a.rotation.x=-.15-Math.min(s,1)*.2)}function dv(){const i=new ut;i.name="snowProps";const t=Ee(15266552,{roughness:.78}),e=Ee(11063528,{roughness:.35,metalness:.15,emissive:4491434,emissiveIntensity:.12}),n=Ee(6975608,{roughness:.92}),s=[[3.2,6.4,.9],[5.4,8,1.1],[4.8,5.8,.7],[2.6,7.8,.85],[5.8,6.6,.75],[3.6,8.6,.95]];for(const[o,r,a]of s){const c=new w(new Kn(.35*a,0),t);if(c.position.set(o,.12*a,r),c.scale.set(1.4,.55,1.2),c.castShadow=!0,c.receiveShadow=!0,i.add(c),a>.85){const l=new w(new Fe(.18*a,0),e);l.position.set(o+.15,.28*a,r-.1),l.rotation.set(.3,.5,.2),i.add(l)}}for(const[o,r]of[[6.2,7.5],[2.2,6]]){const a=new w(new Kn(.4,0),n);a.position.set(o,.25,r),a.castShadow=!0,i.add(a);const c=new w(new nt(.28,6,4),t);c.position.set(o,.48,r),c.scale.set(1.2,.45,1),i.add(c)}return i}function fv(){const i=new ut;i.name="godRays";const t=new de({color:16773320,transparent:!0,opacity:.09,depthWrite:!1,side:le});for(let e=0;e<5;e++){const n=new w(new Sn(1.2+e*.15,18),t);n.position.set(-4+e*2.4,9,-2+e%3*3),n.rotation.z=-.35-e*.04,n.rotation.y=.25,i.add(n)}return i}function pa(i,t){const e=i.getObjectByName("orcSpear"),n=i.getObjectByName("orcArmR"),s=Math.max(0,Math.min(1,t));let o=0,r=0;if(s<=0){const c=e?.userData.rest;e&&c&&(e.position.set(c.x,c.y,c.z),e.rotation.set(c.rx,c.ry,c.rz));return}else if(s<.32)o=s/.32,r=-.35*o;else if(s<.52){const c=(s-.32)/.2;o=1-c,r=-.35+1.45*c}else r=1.1*(1-(s-.52)/.48);if(e){const c=e.userData.rest;c?(e.rotation.x=c.rx-r*.35,e.position.z=c.z+r*.22-o*.1):(e.rotation.x=-r*.95,e.position.z=.12+r*.55-o*.25)}n&&(n.rotation.x=-r*1.05+o*.4);const a=i.getObjectByName("orcHead");a&&(a.rotation.x=-r*.12)}const pv={idle:"Idle",walk:"Walk",attack:"Attack",sword:"Sword guard","sword-walk":"Sword walk",slash:"Slash",chop:"Chop",mine:"Mine"},ma=[{id:"hunter",name:"Male Hunter",group:"Characters",poses:["idle","walk","sword","sword-walk","slash","chop","mine"],build:()=>Wc()},{id:"yeti",name:"Frost Yeti",group:"Creatures",poses:["idle","walk","attack"],build:()=>Pu()},{id:"orc",name:"Orc Scout",group:"Creatures",poses:["idle","walk","attack"],build:()=>Iu()},{id:"dummy",name:"Training Dummy",group:"World",build:()=>rd()},{id:"tree",name:"Whisperwood Tree",group:"World",build:()=>od(2)},{id:"copper",name:"Copper Rock",group:"World",build:()=>vc("copper",1)},{id:"tin",name:"Tin Rock",group:"World",build:()=>vc("tin",2)},{id:"campfire",name:"Campfire",group:"World",build:()=>ad()},{id:"tent",name:"Tent",group:"World",build:()=>cd()},{id:"crate",name:"Crate",group:"World",build:()=>xc()},{id:"barrel",name:"Barrel",group:"World",build:()=>$o()},{id:"bedroll",name:"Bedroll",group:"World",build:()=>yc()}];class mv{constructor(t){this.canvas=t,this.camera=new Qe(42,window.innerWidth/window.innerHeight,.08,80),this.root=document.getElementById("studio"),this.listEl=document.getElementById("studio-list"),this.poseEl=document.getElementById("studio-poses"),this.titleEl=document.getElementById("studio-model-name"),this.buildScene(),this.buildList(),this.bindUi(),this.bindOrbit()}root;listEl;poseEl;titleEl;scene=new $s;camera;current=null;entry=null;pose="idle";animT=0;spherical=new bu(4.6,1.12,.55);look=new I(0,1,0);dragging=!1;dragBtn=0;lastX=0;lastY=0;autoSpin=!1;openFlag=!1;stage;isOpen(){return this.openFlag}setEnvironment(t){this.scene.environment=t,this.scene.environmentIntensity=.7}toggle(){this.openFlag?this.close():this.open()}open(){this.openFlag=!0,this.root.hidden=!1;const t=document.getElementById("hud");t&&(t.hidden=!0),this.entry||this.select(ma[0].id),this.fitCurrent()}close(){this.openFlag=!1,this.dragging=!1,this.root.hidden=!0;const t=document.getElementById("hud");t&&(t.hidden=!1)}resize(t,e){this.camera.aspect=t/Math.max(1,e),this.camera.updateProjectionMatrix()}tick(t){this.openFlag&&(this.animT+=t,this.autoSpin&&(this.spherical.theta+=t*.55),this.applyPose(t),this.updateCamera())}render(t){t.setClearColor(7238764),t.render(this.scene,this.camera),t.setClearColor(10405604)}buildScene(){this.scene.background=new St(7238764),this.scene.fog=new Oc(7238764,16,36),this.scene.add(new js(16054271,3817528,1.05));const t=new On(16774364,2.05);t.position.set(4.5,7.5,5.5),t.castShadow=!0,t.shadow.mapSize.set(1024,1024),t.shadow.bias=-4e-4,t.shadow.camera.near=.5,t.shadow.camera.far=24,t.shadow.camera.left=-5,t.shadow.camera.right=5,t.shadow.camera.top=5,t.shadow.camera.bottom=-5,this.scene.add(t);const e=new On(13163775,.62);e.position.set(-6,3.5,-2),this.scene.add(e);const n=new On(16769208,.38);n.position.set(-2,4,7),this.scene.add(n),this.scene.add(new Eu(6976640,.42));const s=new w(new Cn(6.5,48),new Oe({color:6054492,roughness:.94,metalness:.04}));s.rotation.x=-Math.PI/2,s.receiveShadow=!0,this.scene.add(s);const o=new w(new Fi(1.55,1.62,48),new de({color:9071144,transparent:!0,opacity:.55,side:le}));o.rotation.x=-Math.PI/2,o.position.y=.008,this.scene.add(o);const r=new j1(8,16,4866096,3027512);r.position.y=.004;const a=r.material;a.transparent=!0,a.opacity=.35,this.scene.add(r),this.stage=new ut,this.scene.add(this.stage)}buildList(){this.listEl.innerHTML="";let t="";for(const e of ma){if(e.group!==t){t=e.group;const s=document.createElement("div");s.className="studio-group",s.textContent=e.group,this.listEl.appendChild(s)}const n=document.createElement("button");n.type="button",n.className="studio-item",n.dataset.id=e.id,n.textContent=e.name,n.addEventListener("click",()=>this.select(e.id)),this.listEl.appendChild(n)}}bindUi(){document.getElementById("btn-studio")?.addEventListener("click",()=>this.toggle()),document.getElementById("studio-close")?.addEventListener("click",()=>this.close()),document.getElementById("studio-reset")?.addEventListener("click",()=>this.fitCurrent()),document.getElementById("studio-spin")?.addEventListener("click",t=>{this.autoSpin=!this.autoSpin,t.currentTarget.classList.toggle("on",this.autoSpin)}),window.addEventListener("keydown",t=>{if(t.key==="Escape"&&this.openFlag){this.close(),t.preventDefault();return}if(t.key.toLowerCase()==="v"&&!t.ctrlKey&&!t.metaKey&&!t.altKey){const e=t.target;if(e&&(e.tagName==="INPUT"||e.tagName==="TEXTAREA"))return;this.toggle()}})}bindOrbit(){const t=s=>{this.openFlag&&s.target===this.canvas&&(this.dragging=!0,this.dragBtn=s.button,this.lastX=s.clientX,this.lastY=s.clientY,this.canvas.setPointerCapture(s.pointerId),s.preventDefault())},e=s=>{if(!this.openFlag||!this.dragging)return;const o=s.clientX-this.lastX,r=s.clientY-this.lastY;if(this.lastX=s.clientX,this.lastY=s.clientY,this.dragBtn===2||s.shiftKey){const a=this.spherical.radius*.0016,c=new I,l=new I;this.camera.matrix.extractBasis(c,l,new I),this.look.addScaledVector(c,-o*a),this.look.addScaledVector(l,r*a)}else this.spherical.theta-=o*.007,this.spherical.phi-=r*.007,this.spherical.phi=Math.max(.06,Math.min(Math.PI-.06,this.spherical.phi))},n=s=>{if(this.dragging){this.dragging=!1;try{this.canvas.releasePointerCapture(s.pointerId)}catch{}}};this.canvas.addEventListener("pointerdown",t),window.addEventListener("pointermove",e),window.addEventListener("pointerup",n),this.canvas.addEventListener("contextmenu",s=>{this.openFlag&&s.preventDefault()}),this.canvas.addEventListener("wheel",s=>{if(!this.openFlag)return;s.preventDefault();const o=this.spherical.radius*(s.deltaY>0?1.08:.92);this.spherical.radius=Math.max(1.1,Math.min(18,o))},{passive:!1})}select(t){const e=ma.find(n=>n.id===t);e&&(this.entry=e,this.current&&this.stage.remove(this.current),this.current=e.build(),this.current.position.set(0,0,0),this.current.rotation.set(0,0,0),this.current.traverse(n=>{(n.name==="contactShadow"||n.name==="hit"||n.name==="yetiBreath"||n.name==="yetiBreathMist"||n.name==="yetiEyeGlow"||n.name==="yetiEyeLight")&&(n.visible=!1)}),this.stage.add(this.current),this.animT=0,this.pose=e.poses?.[0]??"idle",this.titleEl.textContent=e.name,this.listEl.querySelectorAll(".studio-item").forEach(n=>{n.classList.toggle("on",n.dataset.id===t)}),this.buildPoseBar(),this.fitCurrent())}buildPoseBar(){this.poseEl.innerHTML="";const t=this.entry?.poses;if(!t?.length){this.poseEl.hidden=!0;return}this.poseEl.hidden=!1;for(const e of t){const n=document.createElement("button");n.type="button",n.className="studio-pose",n.textContent=pv[e],n.classList.toggle("on",e===this.pose),n.addEventListener("click",()=>{this.pose=e,this.animT=0,this.buildPoseBar()}),this.poseEl.appendChild(n)}}fitCurrent(){if(!this.current)return;this.current.updateWorldMatrix(!0,!0);const t=new Qn().setFromObject(this.current),e=t.getSize(new I),n=t.getCenter(new I);this.look.copy(n),this.spherical.radius=Math.max(2.4,e.length()*1.05),this.spherical.phi=1.12,this.spherical.theta=.55,this.autoSpin=!1,document.getElementById("studio-spin")?.classList.remove("on")}updateCamera(){const t=new I().setFromSpherical(this.spherical).add(this.look);this.camera.position.copy(t),this.camera.lookAt(this.look)}applyPose(t){if(!this.current||!this.entry)return;const e=this.entry.id;if(e==="hunter"&&this.current instanceof ut){this.applyHunter(this.current);const n=Number(this.current.userData.locomotionY)||0;this.current.position.y=n;return}if(e==="yeti"&&this.current instanceof ut){this.applyYeti(this.current);return}e==="orc"&&this.current instanceof ut&&this.applyOrc(this.current)}applyHunter(t){const e=this.pose;if(e==="idle"){hn(t,null),Ui(t,this.animT);return}if(e==="walk"){hn(t,null),rr(t,this.animT*gc(.9),.9,1);return}if(e==="sword"){hn(t,"sword"),Ui(t,this.animT);return}if(e==="sword-walk"){hn(t,"sword"),rr(t,this.animT*gc(.9),.9,1);return}if(e==="slash"){hn(t,"sword");const n=this.animT%ar/ar;ed(t,n);return}if(e==="chop"){hn(t,"hatchet"),_c(t,this.animT*.7,"tree");return}hn(t,"pickaxe"),_c(t,this.animT*.7,"rock")}applyYeti(t){if(this.pose==="walk"){Li(t,this.animT*E_,!0,1);return}if(this.pose==="attack"){const e=this.animT%cr/cr;nd(t,e);return}Li(t,this.animT,!1,0)}applyOrc(t){if(this.pose==="walk"){ls(t,this.animT*T_,!0,1);return}if(this.pose==="attack"){const e=this.animT%lr/lr;id(t,e);return}ls(t,this.animT,!1,0)}}class gv{scene;camera;overlay;particles=[];floats=[];tmp=new I;chipMat=new Oe({color:12880448,emissive:5910544,emissiveIntensity:.35,flatShading:!0,roughness:.85});sparkMat=new Oe({color:16769160,emissive:16763972,emissiveIntensity:2,flatShading:!0});hitMat=new Oe({color:16772778,emissive:16768392,emissiveIntensity:1.5,flatShading:!0});oreMat=new Oe({color:12088115,emissive:6697745,emissiveIntensity:.4,metalness:.5,roughness:.45,flatShading:!0});iceMat=new Oe({color:11069695,emissive:4500172,emissiveIntensity:1.2,flatShading:!0,transparent:!0,opacity:.9});clawMat=new Oe({color:14215416,emissive:8960989,emissiveIntensity:.8,flatShading:!0});spearMat=new Oe({color:13160608,emissive:8956484,emissiveIntensity:.9,flatShading:!0});impactMat=new Oe({color:16774864,emissive:16764006,emissiveIntensity:2.4,flatShading:!0,transparent:!0,opacity:.95});telegraphMat=new de({color:16724753,transparent:!0,opacity:.7,depthWrite:!1,side:le});frostTeleMat=new de({color:6737151,transparent:!0,opacity:.65,depthWrite:!1,side:le});constructor(t,e,n){this.scene=t,this.camera=e,this.overlay=document.createElement("div"),this.overlay.id="vfx-overlay",this.overlay.style.cssText="position:absolute;inset:0;pointer-events:none;overflow:hidden;z-index:15;",n.appendChild(this.overlay)}spawnWoodchips(t,e=10){for(let n=0;n<e;n++){const s=.14+Math.random()*.16,o=new w(new zt(s,s*.35,s*.7),this.chipMat);o.position.copy(t),o.position.x+=(Math.random()-.5)*.35,o.position.y+=.35+Math.random()*.55,o.position.z+=(Math.random()-.5)*.35,o.castShadow=!1,this.scene.add(o),this.particles.push({mesh:o,vel:new I((Math.random()-.5)*3.4,2.2+Math.random()*2.8,(Math.random()-.5)*3.4),life:0,maxLife:1.05+Math.random()*.55,gravity:7,spin:(Math.random()-.5)*14})}}spawnMineSparks(t,e=12){for(let n=0;n<e;n++){const s=n%3===0,o=new w(new nt(s?.11:.07,5,4),s?this.oreMat:this.sparkMat);o.position.copy(t),o.position.x+=(Math.random()-.5)*.3,o.position.y+=.25+Math.random()*.45,o.position.z+=(Math.random()-.5)*.3,this.scene.add(o),this.particles.push({mesh:o,vel:new I((Math.random()-.5)*4.6,2+Math.random()*3.2,(Math.random()-.5)*4.6),life:0,maxLife:.85+Math.random()*.45,gravity:6,spin:(Math.random()-.5)*18})}}spawnHitSparks(t,e=18){for(let n=0;n<e;n++){const s=new w(new Fe(.045+Math.random()*.04,0),this.hitMat);s.position.copy(t),s.position.y+=1+Math.random()*.45,this.scene.add(s),this.particles.push({mesh:s,vel:new I((Math.random()-.5)*5.2,1+Math.random()*2.8,(Math.random()-.5)*5.2),life:0,maxLife:.4+Math.random()*.3,gravity:4.5,spin:(Math.random()-.5)*20})}}spawnFloatingText(t,e,n="#7ec87e"){const s=document.createElement("div");s.className="float-xp",s.textContent=e,s.style.color=n,this.overlay.appendChild(s),this.floats.push({el:s,life:0,maxLife:1.55,world:t.clone(),driftY:0})}spawnXp(t,e,n){this.spawnFloatingText(t.clone().add(new I((Math.random()-.5)*.4,1.6,0)),`+${e} ${n}`,"#7ec87e")}spawnDamage(t,e,n=!1){this.spawnFloatingText(t.clone().add(new I((Math.random()-.5)*.25,1.7,0)),n?`${e}!`:String(e),n?"#ffe066":"#ff8a78")}spawnIceBurst(t,e=16){for(let n=0;n<e;n++){const s=new w(new Fe(.06+Math.random()*.05,0),this.iceMat);s.position.copy(t),s.position.y+=.8+Math.random()*.6,s.position.x+=(Math.random()-.5)*.4,s.position.z+=(Math.random()-.5)*.4,this.scene.add(s),this.particles.push({mesh:s,vel:new I((Math.random()-.5)*5,1.2+Math.random()*3.5,(Math.random()-.5)*5),life:0,maxLife:.55+Math.random()*.4,gravity:5,spin:(Math.random()-.5)*20})}}spawnClawSlash(t,e=8){for(let n=0;n<e;n++){const s=new w(new zt(.08,.02,.28+Math.random()*.15),this.clawMat);s.position.copy(t),s.position.y+=1+Math.random()*.5;const o=n/e*Math.PI-Math.PI/2;s.rotation.y=o,s.rotation.z=-.4,this.scene.add(s),this.particles.push({mesh:s,vel:new I(Math.cos(o)*3.5,.5+Math.random(),Math.sin(o)*3.5),life:0,maxLife:.28+Math.random()*.15,gravity:2,spin:8})}}spawnSpearThrust(t,e=8){for(let n=0;n<e;n++){const s=new w(new Te(.04,.22+Math.random()*.12,4),this.spearMat);s.position.copy(t),s.position.y+=.9+Math.random()*.5;const o=n/e*Math.PI*.6-.3;s.rotation.z=o,s.rotation.x=Math.PI/2,this.scene.add(s),this.particles.push({mesh:s,vel:new I(Math.sin(o)*3.2,.4+Math.random(),Math.cos(o)*3.2),life:0,maxLife:.28+Math.random()*.15,gravity:2,spin:10})}}spawnImpactBurst(t,e=18,n=!1){const s=n?this.iceMat:this.impactMat;for(let r=0;r<e;r++){const a=new w(new Fe(.05+Math.random()*.06,0),s);a.position.copy(t),a.position.y+=.9+Math.random()*.55,this.scene.add(a);const c=Math.random()*Math.PI*2,l=2.5+Math.random()*4.5;this.particles.push({mesh:a,vel:new I(Math.cos(c)*l,1.5+Math.random()*3.2,Math.sin(c)*l),life:0,maxLife:.4+Math.random()*.35,gravity:5,spin:(Math.random()-.5)*22})}const o=new w(new Fi(.15,.45,20),new de({color:n?11069695:16771232,transparent:!0,opacity:.7,depthWrite:!1,side:le}));o.rotation.x=-Math.PI/2,o.position.set(t.x,.12,t.z),this.scene.add(o),this.particles.push({mesh:o,vel:new I(0,.05,0),life:0,maxLife:.35,gravity:0,spin:0})}spawnTelegraph(t,e=!1,n=.55,s=1.05){const o=new w(new Fi(s*.72,s,28),e?this.frostTeleMat.clone():this.telegraphMat.clone());o.rotation.x=-Math.PI/2,o.position.set(t.x,.09,t.z),this.scene.add(o),this.particles.push({mesh:o,vel:new I(0,0,0),life:0,maxLife:n,gravity:0,spin:1.2});const r=(e?this.frostTeleMat:this.telegraphMat).clone();r.opacity=e?.28:.32;const a=new w(new Cn(s*.7,28),r);a.rotation.x=-Math.PI/2,a.position.set(t.x,.07,t.z),a.scale.setScalar(.15),this.scene.add(a),this.particles.push({mesh:a,vel:new I(0,.01,0),life:0,maxLife:n,gravity:0,spin:0}),a.userData.teleFill=!0}spawnArcTelegraph(t,e,n=!1,s=.5){const o=(n?this.frostTeleMat:this.telegraphMat).clone();o.opacity=.65;const r=new w(new Fi(.55,1.15,20,1,0,Math.PI*.85),o);r.rotation.x=-Math.PI/2.6,r.rotation.z=e,r.position.set(t.x,.85,t.z),this.scene.add(r),this.particles.push({mesh:r,vel:new I(0,.15,0),life:0,maxLife:s,gravity:0,spin:0})}update(t){for(let e=this.particles.length-1;e>=0;e--){const n=this.particles[e];n.life+=t,n.vel.y-=n.gravity*t,n.mesh.position.addScaledVector(n.vel,t),n.mesh.rotation.x+=n.spin*t,n.mesh.rotation.z+=n.spin*.7*t;const s=n.life/n.maxLife,o=Math.max(.05,1-s*.85),r=n.mesh.geometry.type;if(!!(n.mesh.userData&&n.mesh.userData.teleFill)){const c=Math.min(1,s/.85);n.mesh.scale.setScalar(.15+c*.85);const l=n.mesh.material;l&&l.opacity!==void 0&&(l.opacity=Math.max(0,(1-s)*.35))}else if(r==="RingGeometry"){const c=n.gravity===0&&n.spin>0&&n.spin<3?1+Math.sin(s*Math.PI)*.08:1+s*1.8;n.mesh.scale.setScalar(c);const l=n.mesh.material;l&&l.opacity!==void 0&&(l.opacity=Math.max(0,(1-s)*(n.spin>0&&n.spin<3?.6:.7)))}else if(r==="CircleGeometry"){n.mesh.scale.setScalar(o);const c=n.mesh.material;c&&c.opacity!==void 0&&(c.opacity=Math.max(0,(1-s)*.5))}else n.mesh.scale.setScalar(o);n.life>=n.maxLife&&(this.scene.remove(n.mesh),n.mesh.geometry.dispose(),this.particles.splice(e,1))}for(let e=this.floats.length-1;e>=0;e--){const n=this.floats[e];n.life+=t,n.driftY+=t*.55,this.tmp.set(n.world.x,n.world.y+n.driftY,n.world.z),this.tmp.project(this.camera);const s=(this.tmp.x*.5+.5)*window.innerWidth,o=(-this.tmp.y*.5+.5)*window.innerHeight,r=Math.max(0,1-n.life/n.maxLife);n.el.style.transform=`translate(-50%, -50%) translate(${s}px, ${o}px)`,n.el.style.opacity=String(r),(n.life>=n.maxLife||this.tmp.z>1)&&(n.el.remove(),this.floats.splice(e,1))}}}const ld="hunterscape_save_v1";function _v(i){const t=new Set(Object.values(i.equipped).filter(e=>!!e));return i.inventory=i.inventory.filter(e=>{const n=Dn[e.id];return!(n&&!n.stackable&&t.has(e.id))}),i}function vv(){try{const i=localStorage.getItem(ld);if(!i)return Fo();const t=JSON.parse(i);if(t.version!==1)return Fo();const e=Fo();return _v({...e,...t,skills:{...e.skills,...t.skills},equipped:{...e.equipped,...t.equipped},inventory:t.inventory??e.inventory})}catch{return Fo()}}function xv(i){try{localStorage.setItem(ld,JSON.stringify(i))}catch{}}const Ho=1.6,yv=1.8,Bs=2.35,ga=5.8,ks=2.15,_a=5.4,va=4.2,Mv=.7,wv=2.45,Sv=9.5,Ev=12,Tv=3,Fh=80,bv=28,Oh=5,Av=10,zh=62,Rv=22,Bh=4,Cv=8,je={x:-6.2,z:-4.8},Ue={x:4.2,z:7.2},Lv={constitution:"Constitution",attack:"Attack",strength:"Strength",defence:"Defence",woodcutting:"Woodcutting",mining:"Mining"};class Pv{renderer;scene;camera;player;raycaster=new K1;pointer=new gt;clock=new Tu;hud;studio;vfx;save;objects=[];ground;activity={type:"idle"};moveMarker;saveTimer=0;keys=new Set;camOffset=new I(0,8.7,7.15);camZoom=1;camZoomTarget=1;camLook=new I;dummyTarget=null;yetiTarget=null;yetiAttackCd=0;yetiSwipeT=0;yetiAggroed=!1;orcTarget=null;orcAttackCd=0;orcSwipeT=0;orcAggroed=!1;running=!0;sun;rim;pendingGather=null;pendingCombat=!1;toolSwing=0;animTime=0;playerFlinch=0;playerKnock=new I;yetiHitDone=!1;orcHitDone=!1;deathAnims=[];camSmooth=new I;lookSmooth=new I;combatCamPull=0;moveSpeedCur=0;moveBlend=0;stoppingSteps=0;gaitPhase=0;poseSmoother=new ha;yetiGait=0;orcGait=0;yetiSmoother=new ha(w_);orcSmoother=new ha(S_);lastMoveDir=new I(0,0,1);hitReacts=[];yetiMoveBlend=0;orcMoveBlend=0;yetiTeleDone=!1;orcTeleDone=!1;playerTeleDone=!1;combatOorT=0;combatAbortT=0;pendingCombatTarget=null;pendingCombatChat="";pendingForge=!1;constructor(t){this.save=vv(),this.hud=new j_,this.renderer=new Nc({canvas:t,antialias:!0,alpha:!1}),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.renderer.setSize(window.innerWidth,window.innerHeight),this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=Hh,this.renderer.outputColorSpace=$e,this.renderer.toneMapping=hr,this.renderer.toneMappingExposure=1.42,this.renderer.setClearColor(10405604),this.scene=new $s,this.scene.fog=new Fc(12769e3,.012),this.camera=new Qe(48,window.innerWidth/window.innerHeight,.1,140),this.setupLights(),this.setupReflectionEnv(),this.studio=new mv(t),this.studio.setEnvironment(this.scene.environment),this.hud.setEnvironment(this.scene.environment),this.scene.add(uv(70)),this.ground=nv(48),this.scene.add(this.ground),this.scene.add(av()),this.buildWorld(),this.player=Wc(),this.player.position.set(this.save.x,Pe(this.save.x,this.save.z),this.save.z),this.scene.add(this.player),this.syncHeldTool(),Ui(this.player,0);const e=document.getElementById("app")??document.body;this.vfx=new gv(this.scene,this.camera,e),this.moveMarker=new w(new Fi(.25,.38,24),new de({color:13936715,transparent:!0,opacity:.85,side:le})),this.moveMarker.rotation.x=-Math.PI/2,this.moveMarker.position.y=.06,this.moveMarker.visible=!1,this.scene.add(this.moveMarker),this.bindInput(t),this.hud.onAction=n=>this.handleAction(n),this.hud.onInventoryClick=n=>this.handleInvClick(n),this.hud.onGearSlotClick=n=>this.unequipSlot(n),this.hud.onForgeCraft=n=>this.craftAtForge(n),this.refreshUI(),this.hud.chat("Welcome to Thornrest Camp in the Whisperwood.","system"),this.hud.chat("Tap the ground to walk. Chop trees, mine rocks, or spar with the training dummy.","system"),this.hud.chat("A Frost Yeti stalks the north-east clearing — keep your distance until you are ready.","combat"),this.hud.chat("An Orc Scout prowls the south-west trail — spear ready, leather and tooth to loot.","combat"),this.hud.chat("The camp forge will work frost-yeti hide, fur, bone, and claws into a matching set.","system"),this.hud.chat("Open Gear (C) to inspect your hero and equip or unequip items.","system"),this.hud.chat("Scroll the wheel or use + / − to zoom the camera.","system"),this.hud.chat("Your progress is saved in this browser.","system"),window.addEventListener("resize",()=>this.onResize()),this.animate()}setupLights(){const t=new js(15923199,5929522,1.08);this.scene.add(t),this.sun=new On(16774880,2.08),this.sun.position.set(18,28,10),this.sun.castShadow=!0,this.sun.shadow.mapSize.set(2048,2048),this.sun.shadow.bias=-3e-4,this.sun.shadow.normalBias=.035,this.sun.shadow.radius=3.2,this.sun.shadow.camera.near=2,this.sun.shadow.camera.far=58,this.sun.shadow.camera.left=-24,this.sun.shadow.camera.right=24,this.sun.shadow.camera.top=24,this.sun.shadow.camera.bottom=-24,this.scene.add(this.sun),this.scene.add(this.sun.target),this.rim=new On(13690623,.48),this.rim.position.set(-14,10,-16),this.scene.add(this.rim);const e=new On(16769712,.46);e.position.set(-6,6,4),this.scene.add(e),this.scene.add(new Eu(6978696,.44))}setupReflectionEnv(){const t=new sc(this.renderer),e=new $s;e.add(new js(15923199,4020770,1.15));const n=new w(new nt(10,16,12),new de({color:11848932,side:Xe}));e.add(n);const s=new w(new nt(2.2,12,10),new de({color:16773576}));s.position.set(7,9,5),e.add(s);const o=new w(new Cn(10,16),new de({color:4880952}));o.rotation.x=-Math.PI/2,o.position.y=-1.6,e.add(o),this.scene.environment=t.fromScene(e,.04).texture,this.scene.environmentIntensity=.62,t.dispose()}buildWorld(){const t=(x,R,O,N=0)=>{x.position.set(R,Pe(R,O)+N,O)},e=cd();t(e,-3.5,-1.5),this.scene.add(e);const n=ad();t(n,-1.2,-.5),this.scene.add(n);const s=o_();t(s,2.2,.35),s.rotation.y=-.35,s.scale.setScalar(1.12),this.scene.add(s),this.objects.push({kind:"forge",mesh:s,id:"forge_0",hp:1,maxHp:1,depleted:!1,respawnAt:0});const o=xc();t(o,-2.4,-2.2),o.rotation.y=.3,this.scene.add(o);const r=$o();t(r,-4.2,-.4),this.scene.add(r);const a=$o();t(a,-4.55,.15),a.rotation.y=.6,this.scene.add(a);const c=yc();t(c,-2.8,.4),c.rotation.y=-.4,this.scene.add(c);const l=[[-8,-6],[8,-7],[-10,4],[9,5],[0,-10],[-6,8],[6,9],[10,0],[-11,-2]];for(const[x,R]of l){const O=new ut,N=new w(new nt(.4+Math.random()*.2,7,5),new Oe({color:2775592,flatShading:!0,roughness:.95}));N.position.y=.35,N.castShadow=!0,O.add(N);const V=new w(new nt(.28,6,4),new Oe({color:3828272,flatShading:!0}));V.position.set(.25,.3,.1),V.castShadow=!0,O.add(V),O.position.set(x,Pe(x,R),R),this.scene.add(O)}[[4.5,-3],[6.2,-1.5],[8.2,.2],[7.4,2.6],[1.2,5.6],[-4.2,5.2],[-8.2,2.4],[-8.4,-2.2],[2,-6],[-2.5,-7],[8,-5],[-9.2,-.4]].forEach(([x,R],O)=>{const N=od(O);N.position.set(x,Pe(x,R),R),this.scene.add(N),this.objects.push({kind:"tree",mesh:N,id:`tree_${O}`,hp:1,maxHp:1,depleted:!1,respawnAt:0})}),[{x:1.2,z:3.4,ore:"copper"},{x:-.3,z:4.1,ore:"copper"},{x:2.6,z:4,ore:"tin"},{x:-1.8,z:3.2,ore:"tin"},{x:.8,z:5.2,ore:"copper"},{x:3.4,z:2.2,ore:"copper"},{x:-3.2,z:2.8,ore:"tin"}].forEach((x,R)=>{const O=vc(x.ore,R);O.position.set(x.x,Pe(x.x,x.z),x.z),this.scene.add(O),this.objects.push({kind:"rock",mesh:O,id:`rock_${R}`,hp:1,maxHp:1,depleted:!1,respawnAt:0,meta:{ore:x.ore}})});const d=rd();d.position.set(2.5,Pe(2.5,-2.5),-2.5),this.scene.add(d);const f={kind:"dummy",mesh:d,id:"dummy_0",hp:50,maxHp:50,depleted:!1,respawnAt:0};this.objects.push(f),this.dummyTarget=f;const m=Pu();m.position.set(Ue.x,Pe(Ue.x,Ue.z),Ue.z),m.rotation.y=Math.PI*.85,m.visible=!0,m.scale.setScalar(1.15),this.scene.add(m);const _={kind:"yeti",mesh:m,id:"yeti_0",hp:Fh,maxHp:Fh,depleted:!1,respawnAt:0};this.objects.push(_),this.yetiTarget=_;const g=dv();g.traverse(x=>{x===g||!x.isMesh||(x.position.y+=Pe(x.position.x,x.position.z))}),this.scene.add(g);const p=new ut;p.name="fallingSnow";for(let x=0;x<48;x++){const R=new w(new nt(.035+Math.random()*.03,4,3),new de({color:15267071,transparent:!0,opacity:.55+Math.random()*.35,depthWrite:!1}));R.position.set(2.5+Math.random()*5.5,1.5+Math.random()*6,5.5+Math.random()*4.5),R.userData.fall=.4+Math.random()*.9,R.userData.drift=(Math.random()-.5)*.35,R.userData.baseY=R.position.y,p.add(R)}this.scene.add(p);const S=Iu();S.position.set(je.x,Pe(je.x,je.z),je.z),S.rotation.y=Math.PI*.25,this.scene.add(S);const y={kind:"orc",mesh:S,id:"orc_0",hp:zh,maxHp:zh,depleted:!1,respawnAt:0};this.objects.push(y),this.orcTarget=y,this.scene.add(fv());const v=xc();t(v,-3.6,-2.6),v.rotation.y=-.5,this.scene.add(v);const D=$o();t(D,-1.8,-2.4),this.scene.add(D);const T=yc();t(T,-3.9,.9),T.rotation.y=.8,this.scene.add(T);const C=new w(new Vt(.22,.28,.35,7),new Oe({color:4861972,flatShading:!0,roughness:.9}));C.position.set(.4,Pe(.4,-1.6)+.18,-1.6),C.castShadow=!0,this.scene.add(C);const P=new w(new nt(.08,8,6),new Oe({color:16764006,emissive:16755251,emissiveIntensity:1.2,flatShading:!0}));P.position.set(-.2,Pe(-.2,-1.8)+.85,-1.8),this.scene.add(P);const E=new _r(16755285,.55,6);E.position.copy(P.position),this.scene.add(E)}bindInput(t){const e=n=>{this.studio.isOpen()||n.target!==t||(this.pointer.x=n.clientX/window.innerWidth*2-1,this.pointer.y=-(n.clientY/window.innerHeight)*2+1,this.handleWorldClick())};t.addEventListener("pointerdown",e),window.addEventListener("wheel",n=>{this.studio.isOpen()||n.target?.closest("#gear-panel, #forge-panel, #inventory, #skills-panel, #chat, #studio")||(n.preventDefault(),this.nudgeZoom(Math.sign(n.deltaY)||1,.11))},{passive:!1}),window.addEventListener("keydown",n=>{if(!this.studio.isOpen()){if(this.keys.add(n.key.toLowerCase()),n.key==="1"&&this.handleAction("attack"),n.key==="2"&&this.handleAction("chop"),n.key==="3"&&this.handleAction("mine"),n.key==="4"&&this.handleAction("eat"),n.key==="5"&&this.handleAction("examine"),(n.key==="-"||n.key==="_")&&this.nudgeZoom(1,.16),(n.key==="="||n.key==="+")&&this.nudgeZoom(-1,.16),n.key.toLowerCase()==="k"){const s=document.getElementById("skills-panel");s&&(s.hidden=!s.hidden)}n.key.toLowerCase()==="c"&&this.hud.setGearOpen(!this.hud.isGearOpen()),n.key.toLowerCase()==="f"&&this.approachThenForge()}}),window.addEventListener("keyup",n=>this.keys.delete(n.key.toLowerCase()))}handleWorldClick(){this.raycaster.setFromCamera(this.pointer,this.camera);const t=[];for(const s of this.objects)s.depleted&&s.kind!=="dummy"&&s.kind!=="yeti"&&s.kind!=="orc"||s.mesh.traverse(o=>{o.isMesh&&o.name!=="outline"&&t.push(o)});const e=this.raycaster.intersectObjects(t,!1);if(e.length>0){let s=e[0].object;for(;s&&!this.objects.find(r=>r.mesh===s);)s=s.parent;const o=this.objects.find(r=>r.mesh===s);if(o){this.interactWith(o);return}}const n=this.raycaster.intersectObject(this.ground);if(n.length>0){const s=n[0].point;this.pendingCombat=!1,this.pendingCombatTarget=null,this.pendingCombatChat="",this.pendingGather=null,this.pendingForge=!1,this.startMove(s.x,s.z)}}interactWith(t){if(t.kind==="forge"){this.approachThenForge();return}if(t.kind==="yeti"){if(t.depleted||t.hp<=0){this.hud.chat("The Frost Yeti lies slain. It will return before long.","system");return}this.yetiAggroed=!0,this.approachThenCombat(t,`You ready your ${this.weaponName()} against the Frost Yeti!`);return}if(t.kind==="orc"){if(t.depleted||t.hp<=0){this.hud.chat("The Orc Scout lies slain. Another will take its place.","system");return}this.orcAggroed=!0,this.approachThenCombat(t,`You ready your ${this.weaponName()} against the Orc Scout!`);return}if(t.kind==="dummy"){if(t.hp<=0){this.hud.chat("The training dummy is already collapsed.","system");return}this.approachThenCombat(t,`You ready your ${this.weaponName()} against the training dummy.`);return}if(t.depleted){this.hud.chat("That resource is depleted. Wait for it to respawn.","system");return}if(t.kind==="tree"){if(!this.save.equipped.hatchet){this.hud.chat(this.hasItem("bronze_hatchet")?"Equip your hatchet from the Gear window first.":"You need a hatchet to chop trees.","system"),this.hasItem("bronze_hatchet")&&this.hud.setGearOpen(!0);return}this.approachThenGather(t,2.4,"Chopping Whisperwood…");return}if(t.kind==="rock"){if(!this.save.equipped.pickaxe){this.hud.chat(this.hasItem("bronze_pickaxe")?"Equip your pickaxe from the Gear window first.":"You need a pickaxe to mine rocks.","system"),this.hasItem("bronze_pickaxe")&&this.hud.setGearOpen(!0);return}this.approachThenGather(t,2.6,`Mining ${t.meta?.ore==="tin"?"tin":"copper"}…`)}}combatName(t){return t.kind==="yeti"?"Frost Yeti":t.kind==="orc"?"Orc Scout":t.kind==="dummy"?"Training Dummy":t.kind}isMonster(t){return t.kind==="yeti"||t.kind==="orc"}monsterAttackRange(t){return t.kind==="yeti"?Bs:t.kind==="orc"?ks:yv}beginCombat(t,e){if(!this.save.equipped.weapon){this.hud.chat("Equip a weapon from the Gear window first.","system"),this.hud.setGearOpen(!0);return}this.hud.chat(e,"combat"),this.pendingGather=null,this.pendingCombat=!1,this.pendingCombatTarget=null,this.pendingCombatChat="",this.combatOorT=0,this.combatAbortT=0,this.activity={type:"combat",target:t,cooldown:.15,swingT:0,swingDur:ar,hitDone:!1},this.syncHeldTool(),this.hud.showTarget(this.combatName(t),t.hp/t.maxHp),this.combatCamPull=1}approachThenCombat(t,e){if(!this.save.equipped.weapon){this.hud.chat("Equip a weapon from the Gear window first.","system"),this.hud.setGearOpen(!0);return}const n=this.playerAttackRange(t);if(this.distTo(t)>n*.92){const o=t.mesh.position.x-this.player.position.x,r=t.mesh.position.z-this.player.position.z,a=Math.hypot(o,r)||1,c=n*.78;this.startMove(t.mesh.position.x-o/a*c,t.mesh.position.z-r/a*c),this.pendingCombat=!0,this.pendingCombatTarget=t,this.pendingCombatChat=e,this.hud.chat(`You close on the ${this.combatName(t)}…`,"combat");return}this.beginCombat(t,e)}nearestCombatTarget(){let t=null,e=1/0;for(const n of this.objects){if(n.kind!=="yeti"&&n.kind!=="orc"&&n.kind!=="dummy"||n.hp<=0||n.depleted)continue;const s=this.distTo(n);s<e&&(e=s,t=n)}return e<16?t:null}approachThenGather(t,e,n){const s=t.mesh.position.x-this.player.position.x,o=t.mesh.position.z-this.player.position.z,r=Math.hypot(s,o);if(r>Ho){const a=t.mesh.position.x-s/r*(Ho*.85),c=t.mesh.position.z-o/r*(Ho*.85);this.startMove(a,c),this.pendingGather={obj:t,duration:e,label:n};return}this.faceToward(t.mesh.position.x,t.mesh.position.z),this.activity={type:"gather",target:t,elapsed:0,duration:e,label:n},hn(this.player,t.kind==="tree"?"hatchet":"pickaxe"),this.hud.showProgress(n,0)}startMove(t,e){t=Math.max(-14,Math.min(14,t)),e=Math.max(-14,Math.min(14,e)),this.activity={type:"move",tx:t,tz:e},this.syncHeldTool(),this.moveMarker.position.set(t,Pe(t,e)+.06,e),this.moveMarker.visible=!0,this.hud.hideProgress(),this.hud.hideTarget()}handleAction(t){switch(t){case"attack":{if(!this.save.equipped.weapon){this.hud.chat("Equip a weapon from the Gear window first.","system"),this.hud.setGearOpen(!0);return}const e=this.nearestCombatTarget();if(!e){this.hud.chat("No enemies nearby to attack.","system");return}const n=this.playerAttackRange(e);if(this.distTo(e)>n+2){this.hud.chat(`${this.combatName(e)} is too far. Walk closer.`,"system"),this.pendingGather=null;const o=e.mesh.position.x-this.player.position.x,r=e.mesh.position.z-this.player.position.z,a=Math.hypot(o,r)||1;this.startMove(e.mesh.position.x-o/a*(n*.78),e.mesh.position.z-r/a*(n*.78)),this.pendingCombat=!0,this.pendingCombatTarget=e,this.pendingCombatChat=`You ready your ${this.weaponName()} against the ${this.combatName(e)}!`;return}this.interactWith(e);break}case"chop":{const e=this.nearest("tree");if(!e){this.hud.chat("No trees nearby.","system");return}this.interactWith(e);break}case"mine":{const e=this.nearest("rock");if(!e){this.hud.chat("No rocks nearby.","system");return}this.interactWith(e);break}case"eat":this.eatFood();break;case"examine":this.examineNearest();break}}nearest(t){let e=null,n=1/0;for(const s of this.objects){if(s.kind!==t||s.depleted&&t!=="dummy")continue;const o=this.distTo(s);o<n&&(n=o,e=s)}return n<14?e:null}examineNearest(){const t=[...this.objects].sort((e,n)=>this.distTo(e)-this.distTo(n))[0];if(!t||this.distTo(t)>5){this.hud.chat("You examine the Whisperwood clearing. Birds call from the canopy.","system");return}t.kind==="tree"?this.hud.chat("A tall Whisperwood tree. Good for training woodcutting.","system"):t.kind==="rock"?this.hud.chat(`A rocky outcrop laced with ${t.meta?.ore??"ore"}. Suitable for mining.`,"system"):t.kind==="yeti"?this.hud.chat("A massive Frost Yeti. Hide, fur, bone, claws, and rime — the camp forge can work them all.","combat"):t.kind==="orc"?this.hud.chat("An Orc Scout in spiked tan fur and leather. White tusks and a long spear gleam.","combat"):t.kind==="forge"?this.hud.chat("The Thornrest forge. Bring frost-yeti parts here to smith a matching set.","system"):this.hud.chat("A stuffed training dummy. Safe practice for combat skills.","system")}eatFood(){const t=this.save.inventory.findIndex(e=>e.id==="camp_rations");if(t<0){this.hud.chat("You have no camp rations left.","system");return}if(this.save.hp>=this.save.maxHp){this.hud.chat("You are already at full health.","system");return}this.consumeAt(t,1),this.save.hp=Math.min(this.save.maxHp,this.save.hp+25),this.hud.chat("You eat camp rations and recover 25 health.","loot"),this.refreshUI(),this.persist()}handleInvClick(t){const e=this.save.inventory[t];if(!e)return;const n=Dn[e.id];if(n?.slot){this.equipFromInventory(t);return}this.hud.chat(`${n?.name??e.id}${e.qty>1?` ×${e.qty}`:""}`,"system"),e.id==="camp_rations"&&this.eatFood()}heldTool(){if(this.activity.type==="gather"){const t=this.activity.target.kind;if(t==="tree")return this.save.equipped.hatchet?"hatchet":null;if(t==="rock")return this.save.equipped.pickaxe?"pickaxe":null}return uc(this.save.equipped.weapon)}syncHeldTool(){hn(this.player,this.heldTool()),dc(this.player,this.save)}weaponName(){const t=this.save.equipped.weapon;return Dn[t??""]?.name??"weapon"}playerAttackRange(t){return this.monsterAttackRange(t)+e_(this.save.equipped.weapon)}equipFromInventory(t){const e=this.save.inventory[t];if(!e)return;const n=Dn[e.id];if(!n?.slot)return;const s=this.save.equipped[n.slot];this.save.inventory.splice(t,1),s&&this.addItem(s,1),this.save.equipped[n.slot]=e.id,this.syncHeldTool(),this.hud.setGearOpen(!0),this.hud.chat(`You equip the ${n.name}.`,"system"),this.refreshUI(),this.hud.setEquipment(this.save,`Equipped ${n.name}`),this.hud.showSlotPreview(n.slot,this.save),this.persist()}unequipSlot(t){const e=this.save.equipped[t];if(!e){this.hud.inspectGear(`${t[0].toUpperCase()}${t.slice(1)} slot is empty`);return}if(this.save.inventory.length>=28){this.hud.chat("Inventory full — cannot unequip.","system");return}this.save.equipped[t]=null,this.addItem(e,1),this.syncHeldTool();const n=Dn[e];this.hud.setEquipment(this.save,`Unequipped ${n?.name??e}`),this.hud.chat(`You unequip the ${n?.name??e}.`,"system"),this.refreshUI(),this.persist()}distTo(t){return Math.hypot(t.mesh.position.x-this.player.position.x,t.mesh.position.z-this.player.position.z)}faceToward(t,e,n=1/30,s=10){const o=t-this.player.position.x,r=e-this.player.position.z;if(Math.hypot(o,r)>.01){const a=Math.atan2(o,r);this.player.rotation.y=zs(this.player.rotation.y,a,s,n)}}hasItem(t){return this.save.inventory.some(e=>e.id===t)}addItem(t,e=1){const n=Dn[t];if(!n)return!1;if(n.stackable){const s=this.save.inventory.find(o=>o.id===t);if(s)return s.qty+=e,!0}return this.save.inventory.length>=28?(this.hud.chat("Inventory full!","system"),!1):(this.save.inventory.push({id:t,qty:e}),!0)}consumeAt(t,e){const n=this.save.inventory[t];n&&(n.qty-=e,n.qty<=0&&this.save.inventory.splice(t,1))}consumeId(t,e){if(vr(this.save.inventory,t)<e)return!1;let n=e;for(let s=this.save.inventory.length-1;s>=0&&n>0;s--){const o=this.save.inventory[s];if(o.id!==t)continue;const r=Math.min(o.qty,n);this.consumeAt(s,r),n-=r}return n===0}approachThenForge(){const t=this.objects.find(n=>n.kind==="forge");if(!t)return;if(this.distTo(t)>8.5){const n=t.mesh.position.x-this.player.position.x,s=t.mesh.position.z-this.player.position.z,o=Math.hypot(n,s)||1;this.startMove(t.mesh.position.x-n/o*1.4,t.mesh.position.z-s/o*1.4),this.pendingForge=!0,this.hud.chat("You walk to the Thornrest forge…","system");return}this.openForge()}openForge(){this.hud.setForgeOpen(!0,this.save),this.hud.chat("The forge is hot. Choose a frost-yeti pattern to work.","system")}craftAtForge(t){const e=Au.find(n=>n.id===t);if(e){if(!Cu(this.save,e)){this.hud.chat("You still need more frost-yeti parts for that.","system"),this.hud.setForgeRecipes(this.save);return}for(const n of e.cost)this.consumeId(n.id,n.qty);if(!this.addItem(e.id,1)){for(const n of e.cost)this.addItem(n.id,n.qty);return}this.hud.chat(`You forge the ${e.name} from frost-yeti parts.`,"loot"),this.refreshUI(),this.hud.setForgeRecipes(this.save),this.persist()}}grantXp(t,e){const n=this.save.skills[t],s=n.level;n.xp+=e,n.level=n_(n.xp),this.hud.chat(`+${e} ${t} XP`,"xp"),this.vfx.spawnXp(this.player.position,e,Lv[t]),n.level>s&&(this.hud.chat(`Congratulations! Your ${t} level is now ${n.level}.`,"xp"),t==="constitution"&&(this.save.maxHp=100+(n.level-10)*10,this.save.hp=Math.min(this.save.hp+10,this.save.maxHp)))}update(t){this.save.stamina=Math.min(100,this.save.stamina+t*4),this.save.focus=Math.min(100,this.save.focus+t*2),this.save.hp<this.save.maxHp&&(this.save.hp=Math.min(this.save.maxHp,this.save.hp+t*1.5));const e=performance.now()/1e3;for(const s of this.objects)s.depleted&&s.kind!=="dummy"&&s.kind!=="yeti"&&s.kind!=="orc"&&e>=s.respawnAt&&(s.depleted=!1,s.mesh.visible=!0,this.hud.chat(s.kind==="tree"?"A Whisperwood tree has grown back.":"An ore rock has respawned.","system")),s.kind==="dummy"&&s.hp<=0&&e>=s.respawnAt&&(s.hp=s.maxHp,s.depleted=!1,s.mesh.visible=!0,s.mesh.rotation.set(0,0,0),s.mesh.position.y=Pe(s.mesh.position.x,s.mesh.position.z),s.mesh.scale.setScalar(1),this.hud.chat("The training dummy is patched up and ready again.","system")),s.kind==="yeti"&&s.depleted&&e>=s.respawnAt&&(s.hp=s.maxHp,s.depleted=!1,s.mesh.visible=!0,s.mesh.rotation.set(0,Math.PI*.85,0),s.mesh.scale.setScalar(1.15),s.mesh.position.set(Ue.x,Pe(Ue.x,Ue.z),Ue.z),this.deathAnims=this.deathAnims.filter(o=>o.mesh!==s.mesh),this.yetiAggroed=!1,this.yetiAttackCd=0,this.yetiSwipeT=0,this.yetiHitDone=!1,this.yetiTeleDone=!1,this.yetiMoveBlend=0,this.yetiGait=0,this.yetiSmoother.reset(),ko(s.mesh,0),Li(s.mesh,this.animTime,!1),this.hud.chat("A Frost Yeti stomps back into the north-east clearing!","combat")),s.kind==="orc"&&s.depleted&&e>=s.respawnAt&&(s.hp=s.maxHp,s.depleted=!1,s.mesh.visible=!0,s.mesh.rotation.set(0,Math.PI*.25,0),s.mesh.scale.setScalar(1),s.mesh.position.set(je.x,Pe(je.x,je.z),je.z),this.orcAggroed=!1,this.orcAttackCd=0,this.orcSwipeT=0,this.orcHitDone=!1,this.orcGait=0,this.orcSmoother.reset(),pa(s.mesh,0),ls(s.mesh,this.animTime,!1),this.hud.chat("An Orc Scout stalks back onto the south-west trail!","combat"));const n=this.scene.getObjectByName("fallingSnow");if(n&&n.children.forEach(s=>{s.position.y-=s.userData.fall*t,s.position.x+=s.userData.drift*t,s.position.y<.05&&(s.position.y=6+Math.random()*2,s.position.x=2.5+Math.random()*5.5,s.position.z=5.5+Math.random()*4.5)}),this.scene.traverse(s=>{if(s.name==="flame"&&(s.scale.y=.9+Math.sin(e*8)*.15,s.rotation.y+=t*2),s.name==="flameGlow"||s.name==="forgeGlow"){const o=.9+Math.sin(e*6)*.2;s.scale.setScalar(o)}if(s.name==="forgeEmber"&&(s.scale.y=.45+Math.sin(e*7)*.08),s.name==="yetiBreath"){const o=this.yetiAggroed?1.35:1,r=(.85+Math.sin(e*3.4)*.45)*o;s.scale.set(r,.9+r*.5,r*1.25);const a=s.material;a&&a.opacity!==void 0&&(a.opacity=(.4+Math.sin(e*4.2)*.22)*(this.yetiAggroed?1.15:1))}if(s.name==="yetiBreathMist"){const o=this.yetiAggroed?1.3:1,r=(.85+Math.sin(e*2.8+s.position.z)*.4)*o;s.scale.setScalar(r);const a=s.material;a&&a.opacity!==void 0&&(a.opacity=Math.max(.08,.28*r))}if(s.name==="yetiEyeGlow"){const o=this.yetiAggroed||this.activity.type==="combat"&&this.activity.target?.kind==="yeti",r=.95+Math.sin(e*6.2)*(o?.55:.28);s.scale.setScalar(r*(o?1.65:1.1));const a=s.material;a&&a.opacity!==void 0&&(a.opacity=o?.72+Math.sin(e*7)*.18:.45)}if(s.name==="yetiEye"){const o=this.yetiAggroed||this.activity.type==="combat"&&this.activity.target?.kind==="yeti",r=s.material;if(r&&r.emissiveIntensity!==void 0){const a=o?1.35:.55;r.emissiveIntensity=a+Math.sin(e*6.8)*(o?.35:.12)}}if(s.name==="yetiEyeLight"){const o=this.yetiAggroed||this.activity.type==="combat"&&this.activity.target?.kind==="yeti",r=s;r.intensity=(o?1.85:.85)+Math.sin(e*7.1)*(o?.55:.15),r.distance=o?5.2:3.4}}),this.sun.target.position.set(this.player.position.x,this.player.position.y,this.player.position.z),this.sun.target.updateMatrixWorld(),this.animTime+=t,this.playerFlinch>0){const s=this.playerFlinch>.65?2.4:3.6;if(this.playerFlinch=Math.max(0,this.playerFlinch-t*s),Ch(this.player,this.playerFlinch,this.playerFlinch>.65?1.1:.55),this.player.position.x+=this.playerKnock.x*t,this.player.position.z+=this.playerKnock.z*t,this.playerKnock.multiplyScalar(Math.max(0,1-t*5.5)),this.playerFlinch<=0){this.player.rotation.z=0,this.player.rotation.x=0;const o=this.player.getObjectByName("playerTorso");o&&(o.rotation.y=0)}}for(let s=this.hitReacts.length-1;s>=0;s--){const o=this.hitReacts[s];o.t-=t;const r=Math.max(0,Math.min(1,o.t/.35));if(Ch(o.mesh,r,o.inten),o.t<=0){o.mesh.rotation.z=0,o.mesh.rotation.x=0;const a=o.mesh.getObjectByName("playerTorso")||o.mesh.getObjectByName("yetiBody")||o.mesh.getObjectByName("orcBody");a&&(a.rotation.y=0),this.hitReacts.splice(s,1)}}for(let s=this.deathAnims.length-1;s>=0;s--){const o=this.deathAnims[s];o.t+=t;const r=Math.min(1,o.t/o.dur);P_(o.mesh,o.kind,r),o.mesh.position.y+=Pe(o.mesh.position.x,o.mesh.position.z),r>=1&&(o.mesh.visible=!1,o.mesh.rotation.set(0,o.mesh.rotation.y,0),o.mesh.scale.setScalar(o.kind==="yeti"?1.15:1),o.mesh.position.y=0,this.deathAnims.splice(s,1))}if(this.syncHeldTool(),this.activity.type==="move"){const{tx:s,tz:o}=this.activity,r=s-this.player.position.x,a=o-this.player.position.z,c=Math.hypot(r,a),l=c<.55?c/.55*va:va;if(this.moveSpeedCur<l?this.moveSpeedCur=Math.min(l,this.moveSpeedCur+Sv*t):this.moveSpeedCur=Math.max(l,this.moveSpeedCur-Ev*t),this.moveBlend=Math.min(1,this.moveBlend+t*4.5),c<.12){if(this.player.position.x=s,this.player.position.z=o,this.moveMarker.visible=!1,this.stoppingSteps=0,this.moveBlend=0,this.activity={type:"idle"},this.moveSpeedCur=0,this.pendingGather){const h=this.pendingGather;this.pendingGather=null,this.approachThenGather(h.obj,h.duration,h.label)}else if(this.pendingForge)this.pendingForge=!1,this.openForge();else if(this.pendingCombat){this.pendingCombat=!1;const h=this.pendingCombatTarget??this.nearestCombatTarget(),u=this.pendingCombatChat||(h?`You ready your ${this.weaponName()} against the ${this.combatName(h)}!`:"");this.pendingCombatTarget=null,this.pendingCombatChat="",h&&h.hp>0&&!h.depleted&&(h.kind==="yeti"&&(this.yetiAggroed=!0),h.kind==="orc"&&(this.orcAggroed=!0),this.beginCombat(h,u))}}else{const h=c||1,u=Math.min(c,this.moveSpeedCur*t);this.player.position.x+=r/h*u,this.player.position.z+=a/h*u,this.lastMoveDir.set(r/h,0,a/h);let f=Math.atan2(r,a)-this.player.rotation.y;for(;f>Math.PI;)f-=Math.PI*2;for(;f<-Math.PI;)f+=Math.PI*2;const m=Math.abs(f)>1.2?7:11;this.faceToward(s,o,t,m);const _=Math.min(1.05,.45+this.moveSpeedCur/va*.55),g=Math.max(gc(_)*.5,Math.PI*this.moveSpeedCur/L_(_));this.gaitPhase+=g*t,rr(this.player,this.gaitPhase,_,this.moveBlend),this.save.stamina=Math.max(0,this.save.stamina-t*2)}}else if(this.activity.type==="gather"){const s=this.activity;if(s.target.depleted)this.activity={type:"idle"},this.syncHeldTool(),di(this.player),this.hud.hideProgress();else if(this.distTo(s.target)>Ho+.35)this.activity={type:"idle"},this.syncHeldTool(),di(this.player),this.hud.hideProgress(),this.hud.chat("You move too far away.","system");else{s.elapsed+=t,this.hud.showProgress(s.label,s.elapsed/s.duration),this.faceToward(s.target.mesh.position.x,s.target.mesh.position.z,t,8),this.toolSwing+=t;const o=this.toolSwing*1.35%1;if(_c(this.player,o,s.target.kind==="tree"?"tree":"rock"),Math.floor(s.elapsed*4)!==Math.floor((s.elapsed-t)*4)){const r=s.target.mesh.position.clone();r.y=s.target.kind==="tree"?1.05:.7,s.target.kind==="tree"?this.vfx.spawnWoodchips(r,12):this.vfx.spawnMineSparks(r,14)}s.elapsed>=s.duration&&(this.completeGather(s.target),this.activity={type:"idle"},this.syncHeldTool(),di(this.player),this.hud.hideProgress())}}else if(this.activity.type==="combat"){const s=this.activity,o=s.target;if(this.hud.showTarget(this.combatName(o),Math.max(0,o.hp)/o.maxHp),o.hp<=0||o.depleted)this.activity={type:"idle"},this.syncHeldTool(),di(this.player),this.hud.hideTarget(),this.combatCamPull=0,this.combatOorT=0;else{const r=this.playerAttackRange(o),a=r+.55,c=r+1.45;let l=this.distTo(o);const h=s.swingT>0&&s.swingT/s.swingDur<Lh+.08;if(l>a&&l<c+.35&&h){const d=o.mesh.position.x-this.player.position.x,f=o.mesh.position.z-this.player.position.z,m=Math.hypot(d,f)||1,_=Math.min(l-r*.88,3.6*t);this.player.position.x+=d/m*_,this.player.position.z+=f/m*_,l=this.distTo(o),this.combatOorT=Math.max(0,this.combatOorT-t*1.5)}else if(l>a&&l<=c&&!h){const d=o.mesh.position.x-this.player.position.x,f=o.mesh.position.z-this.player.position.z,m=Math.hypot(d,f)||1,_=Math.min(l-r*.9,2.4*t);this.player.position.x+=d/m*_,this.player.position.z+=f/m*_,l=this.distTo(o),this.combatOorT+=t*.55}else l>c?this.combatOorT+=t:this.combatOorT=Math.max(0,this.combatOorT-t*2.5);const u=h?.55:.3;if(l>c&&this.combatOorT>=u&&!h)this.abortCombatSoft(t,!0);else{if(this.faceToward(o.mesh.position.x,o.mesh.position.z,t,10),this.isMonster(o)){const d=this.player.position.x-o.mesh.position.x,f=this.player.position.z-o.mesh.position.z;Math.hypot(d,f)>.01&&(o.mesh.rotation.y=zs(o.mesh.rotation.y,Math.atan2(d,f),6,t))}if(s.swingT>0){s.swingT+=t;const d=Math.min(1,s.swingT/s.swingDur);if(ed(this.player,d),!this.playerTeleDone&&d<.12){this.playerTeleDone=!0;const f=O_*s.swingDur;this.vfx.spawnTelegraph(this.player.position.clone(),!1,f,.7)}!s.hitDone&&d>=I_&&d<=Lh+.05&&this.distTo(o)<=r+.95&&(s.hitDone=!0,this.swingAtTarget(o)),d>=1&&(s.swingT=0,s.hitDone=!1,this.playerTeleDone=!1,s.cooldown=.72,this.syncHeldTool())}else s.cooldown-=t,Ui(this.player,this.animTime,!0),s.cooldown<=0&&this.distTo(o)<=a+.2&&(s.swingT=.001,s.swingDur=ar,s.hitDone=!1,this.playerTeleDone=!1,this.syncHeldTool())}}}else this.syncHeldTool(),this.stoppingSteps>0?(this.stoppingSteps-=t,this.moveBlend=Math.max(0,this.moveBlend-t*3.5),this.gaitPhase+=4.5*t,rr(this.player,this.gaitPhase,.4,Math.max(.15,this.moveBlend))):(this.moveBlend=Math.max(0,this.moveBlend-t*5),this.moveSpeedCur=0,Ui(this.player,this.animTime)),this.combatCamPull=Math.max(0,this.combatCamPull-t*.6);this.updateYetiAI(t),this.updateOrcAI(t),this.vfx.update(t),this.updateCombatTreeFade(t),this.combatAbortT>0&&(this.combatAbortT=Math.max(0,this.combatAbortT-t),Ui(this.player,this.animTime),this.combatAbortT<=0&&(this.syncHeldTool(),di(this.player))),this.poseSmoother.apply(this.player,t,this.activity.type==="combat"?26:18),this.yetiTarget&&this.yetiSmoother.apply(this.yetiTarget.mesh,t,this.yetiAggroed?22:16),this.orcTarget&&this.orcSmoother.apply(this.orcTarget.mesh,t,this.orcAggroed?24:16),this.snapMoversToGround(),cv(this.animTime),this.updateCamera(t),this.save.x=this.player.position.x,this.save.z=this.player.position.z,this.saveTimer+=t,this.saveTimer>=Tv&&(this.saveTimer=0,this.persist()),this.hud.setOrbs(this.save.hp,this.save.maxHp,this.save.focus,this.save.stamina),this.drawMinimapMarkers()}completeGather(t){if(t.kind==="tree"){if(!this.addItem("whisper_logs",1))return;this.grantXp("woodcutting",25),this.hud.chat("You chop some Whisper Logs.","loot"),this.vfx.spawnWoodchips(t.mesh.position.clone().setY(1.1),22),t.depleted=!0,t.mesh.visible=!1,t.respawnAt=performance.now()/1e3+12}else if(t.kind==="rock"){const e=t.meta?.ore==="tin"?"tin_ore":"copper_ore";if(!this.addItem(e,1))return;this.grantXp("mining",28),this.hud.chat(`You mine some ${Dn[e].name}.`,"loot"),this.vfx.spawnMineSparks(t.mesh.position.clone().setY(.7),24),t.depleted=!0,t.mesh.visible=!1,t.respawnAt=performance.now()/1e3+14}this.refreshUI(),this.persist()}swingAtTarget(t){const e=this.save.skills.attack.level,n=this.save.skills.strength.level,s=.65+e*.01,o=this.combatName(t);if(Math.random()>s){this.hud.chat(`You swing and miss the ${o}.`,"combat");return}const r=3+t_(this.save.equipped.weapon)+Math.floor(Math.random()*(4+n));t.hp-=r;const a=t.kind==="yeti"?18:t.kind==="orc"?15:12,c=t.kind==="yeti"?14:t.kind==="orc"?12:8,l=t.kind==="yeti"?8:t.kind==="orc"?6:4;this.grantXp("attack",a),this.grantXp("strength",c),this.grantXp("constitution",l);const h=t.mesh.position.clone().setY(1.25);this.vfx.spawnHitSparks(h,14+Math.min(12,r)),this.vfx.spawnImpactBurst(h,t.kind==="yeti"?16:20,t.kind==="yeti"),this.vfx.spawnDamage(t.mesh.position.clone().setY(1.5),r,r>=8),hv(t.mesh,r>=10?260:160);const u=r>=12?1.25:r>=8?.9:.5,d=r>=12?.28:r>=8?.18:.1,f=Math.atan2(t.mesh.position.x-this.player.position.x,t.mesh.position.z-this.player.position.z);if(t.mesh.position.x+=Math.sin(f)*d,t.mesh.position.z+=Math.cos(f)*d,this.hitReacts.push({mesh:t.mesh,t:u>1?.48:.28,inten:u}),t.kind==="yeti"&&(this.vfx.spawnIceBurst(t.mesh.position.clone(),12),this.yetiAggroed=!0),t.kind==="orc"&&(this.vfx.spawnSpearThrust(t.mesh.position.clone(),8),this.orcAggroed=!0),t.kind==="dummy"){const m=Math.random()<.15?1:0;m?(this.save.hp=Math.max(1,this.save.hp-m),this.hud.chat(`You hit the dummy for ${r}. Splinter grazes you (-${m}).`,"combat")):this.hud.chat(`You hit the training dummy for ${r} damage.`,"combat")}else t.kind==="orc"?this.hud.chat(`You strike the Orc Scout for ${r} damage!`,"combat"):this.hud.chat(`You strike the Frost Yeti for ${r} damage!`,"combat");t.hp<=0?(t.hp=0,t.kind==="yeti"?this.onYetiDeath(t):t.kind==="orc"?this.onOrcDeath(t):this.onDummyDeath(t)):this.hud.showTarget(o,t.hp/t.maxHp),this.refreshUI(),this.persist()}onDummyDeath(t){t.respawnAt=performance.now()/1e3+8,this.deathAnims.push({mesh:t.mesh,kind:"dummy",t:0,dur:.85}),this.hud.chat("The training dummy collapses! It will be repaired shortly.","combat"),this.grantXp("defence",15),this.activity={type:"idle"},this.syncHeldTool(),di(this.player),this.hud.hideTarget(),this.combatCamPull=0}onYetiDeath(t){t.depleted=!0,t.respawnAt=performance.now()/1e3+bv,this.yetiAggroed=!1,this.yetiAttackCd=0,this.yetiSwipeT=0,this.vfx.spawnIceBurst(t.mesh.position.clone().setY(1.2),28),this.vfx.spawnImpactBurst(t.mesh.position.clone().setY(1),16,!0),this.deathAnims.push({mesh:t.mesh,kind:"yeti",t:0,dur:1.35}),this.hud.chat("The Frost Yeti collapses in a burst of frost!","combat"),this.grantXp("defence",28),this.grantXp("attack",12),this.grantXp("strength",10),this.grantXp("constitution",10);const e=[["yeti_fur",2,"You strip Yeti Fur from the pelt."],["yeti_hide",1,"You cut a sheet of Yeti Hide."],["frost_claw",1,"You pry free a Frost Claw."]];for(const[n,s,o]of e)this.addItem(n,s)&&this.hud.chat(o,"loot");Math.random()<.75&&this.addItem("yeti_bone",1)&&this.hud.chat("A Yeti Bone comes free of the carcass.","loot"),Math.random()<.6&&this.addItem("frost_fang",1)&&this.hud.chat("You wrench out a Frost Fang.","loot"),Math.random()<.45&&this.addItem("rime_shard",1)&&this.hud.chat("A Rime Shard cracks off the hide.","loot"),this.activity={type:"idle"},this.syncHeldTool(),this.hud.hideTarget(),this.refreshUI(),this.persist()}onOrcDeath(t){t.depleted=!0,t.respawnAt=performance.now()/1e3+Rv,this.orcAggroed=!1,this.orcAttackCd=0,this.orcSwipeT=0,this.vfx.spawnSpearThrust(t.mesh.position.clone().setY(1.1),16),this.vfx.spawnHitSparks(t.mesh.position.clone().setY(1),20),this.vfx.spawnImpactBurst(t.mesh.position.clone().setY(1),14,!1),this.deathAnims.push({mesh:t.mesh,kind:"orc",t:0,dur:1.15}),this.hud.chat("The Orc Scout falls! Its spear clatters to the dirt.","combat"),this.grantXp("defence",22),this.grantXp("attack",10),this.grantXp("strength",8),this.grantXp("constitution",8),this.addItem("orc_tooth",1)&&this.hud.chat("You loot an Orc Tooth.","loot"),Math.random()<.65&&this.addItem("scout_leather",1)&&this.hud.chat("You strip Scout Leather from the vest.","loot"),this.activity={type:"idle"},this.syncHeldTool(),this.hud.hideTarget(),this.refreshUI(),this.persist()}updateYetiAI(t){const e=this.yetiTarget;if(!e||e.depleted||e.hp<=0){this.yetiSwipeT>0&&(this.yetiSwipeT=Math.max(0,this.yetiSwipeT-t));return}const n=this.distTo(e),s=Math.hypot(e.mesh.position.x-Ue.x,e.mesh.position.z-Ue.z);if(!this.yetiAggroed&&n<=ga&&(this.yetiAggroed=!0,this.hud.chat("The Frost Yeti snarls and charges!","combat"),(this.activity.type!=="combat"||this.activity.target!==e)&&this.beginCombat(e,"The Frost Yeti engages you!")),!this.yetiAggroed){const c=Ue.x-e.mesh.position.x,l=Ue.z-e.mesh.position.z,h=Math.hypot(c,l);if(h>.15){const u=Math.min(h,2.8*t);e.mesh.position.x+=c/h*u,e.mesh.position.z+=l/h*u,e.mesh.rotation.y=zs(e.mesh.rotation.y,Math.atan2(c,l),4,t),e.mesh.position.y=0,Li(e.mesh,this.tickMonsterGait("yeti",2.8,t),!0,Math.min(1,h/2)),ko(e.mesh,0);return}e.mesh.position.set(Ue.x,0,Ue.z),Li(e.mesh,this.animTime,!1),ko(e.mesh,0);return}const o=this.player.position.x-e.mesh.position.x,r=this.player.position.z-e.mesh.position.z;Math.hypot(o,r)>.01&&(e.mesh.rotation.y=zs(e.mesh.rotation.y,Math.atan2(o,r),5,t));let a=!1;if(n>Bs&&n<ga+5&&s<7.5){this.yetiMoveBlend=Math.min(1,this.yetiMoveBlend+t*2.2);const c=Math.min(n-Bs*.85,2.35*this.yetiMoveBlend*t),l=Math.hypot(o,r)||1;e.mesh.position.x+=o/l*c,e.mesh.position.z+=r/l*c,a=!0;const h=Ue.x,u=Ue.z,d=e.mesh.position.x-h,f=e.mesh.position.z-u,m=Math.hypot(d,f);m>7.5&&(e.mesh.position.x=h+d/m*7.5,e.mesh.position.z=u+f/m*7.5)}else this.yetiMoveBlend=Math.max(0,this.yetiMoveBlend-t*3);if(n>ga+7||s>8.5){this.yetiAggroed=!1,this.yetiSwipeT=0,this.hud.chat("The Frost Yeti loses interest and returns to the clearing.","system");const c=e.mesh.position.x,l=e.mesh.position.z;e.mesh.position.x+=(Ue.x-e.mesh.position.x)*Math.min(1,t*.9),e.mesh.position.z+=(Ue.z-e.mesh.position.z)*Math.min(1,t*.9),this.activity.type==="combat"&&this.activity.target===e&&(this.activity={type:"idle"},this.syncHeldTool(),di(this.player),this.hud.hideTarget());const h=t>1e-5?Math.hypot(e.mesh.position.x-c,e.mesh.position.z-l)/t:0;Li(e.mesh,this.tickMonsterGait("yeti",h,t),!0,.7);return}if(this.yetiSwipeT>0){this.yetiSwipeT+=t;const c=Math.min(1,this.yetiSwipeT/cr);if(nd(e.mesh,c),!this.yetiTeleDone){this.yetiTeleDone=!0;const l=z_*cr+.08;this.vfx.spawnTelegraph(e.mesh.position.clone(),!0,l,1.35),this.vfx.spawnArcTelegraph(e.mesh.position.clone(),e.mesh.rotation.y,!0,l)}!this.yetiHitDone&&c>=D_&&c<=U_+.05&&(this.yetiHitDone=!0,this.yetiMeleeHit(e)),c>=1&&(this.yetiSwipeT=0,this.yetiHitDone=!1,this.yetiTeleDone=!1,ko(e.mesh,0))}else{const c=Math.max(this.yetiMoveBlend,a?.4:0),l=a?this.tickMonsterGait("yeti",2.35*this.yetiMoveBlend,t):this.animTime;Li(e.mesh,l,a,c),this.yetiAttackCd-=t,n<=Bs+.4&&this.yetiAttackCd<=0&&(this.yetiAttackCd=2.55,this.yetiSwipeT=.001,this.yetiHitDone=!1,this.yetiTeleDone=!1)}}yetiMeleeHit(t){if(this.distTo(t)>Bs+.65)return;const n=this.save.skills.defence.level,s=Oh+Math.floor(Math.random()*(Av-Oh+1)),o=Math.max(1,s-Math.floor(n/5)-_h(this.save));this.save.hp=Math.max(0,this.save.hp-o),this.vfx.spawnClawSlash(this.player.position.clone(),14),this.vfx.spawnIceBurst(this.player.position.clone(),16),this.vfx.spawnImpactBurst(this.player.position.clone().setY(1.1),16,!0),this.vfx.spawnDamage(this.player.position.clone().setY(1.3),o),this.playerFlinch=o>=8?1.15:.75;const r=Math.atan2(this.player.position.x-t.mesh.position.x,this.player.position.z-t.mesh.position.z),a=o>=8?3.4:2.4;this.playerKnock.set(Math.sin(r)*a,0,Math.cos(r)*a),this.hud.chat(`The Frost Yeti swipes you for ${o} damage!`,"combat"),this.hud.setOrbs(this.save.hp,this.save.maxHp,this.save.focus,this.save.stamina),this.save.hp<=0&&(this.save.hp=Math.max(10,Math.floor(this.save.maxHp*.35)),this.player.position.set(0,0,2),this.yetiAggroed=!1,this.activity={type:"idle"},this.syncHeldTool(),this.hud.hideTarget(),this.hud.chat("You fall! You wake by the Thornrest campfire, battered but alive.","combat"),t.mesh.position.set(Ue.x,0,Ue.z)),this.activity.type!=="combat"&&t.hp>0&&!t.depleted&&this.beginCombat(t,"You raise your guard against the Frost Yeti!"),this.refreshUI(),this.persist()}updateOrcAI(t){const e=this.orcTarget;if(!e||e.depleted||e.hp<=0){this.orcSwipeT>0&&(this.orcSwipeT=Math.max(0,this.orcSwipeT-t));return}const n=this.distTo(e),s=Math.hypot(e.mesh.position.x-je.x,e.mesh.position.z-je.z);if(!this.orcAggroed&&n<=_a&&(this.orcAggroed=!0,this.hud.chat("The Orc Scout snarls and levels its spear!","combat"),(this.activity.type!=="combat"||this.activity.target!==e)&&this.beginCombat(e,"The Orc Scout engages you!")),!this.orcAggroed){ls(e.mesh,this.animTime,!1),pa(e.mesh,0);return}const o=this.player.position.x-e.mesh.position.x,r=this.player.position.z-e.mesh.position.z;Math.hypot(o,r)>.01&&(e.mesh.rotation.y=zs(e.mesh.rotation.y,Math.atan2(o,r),7,t));let a=!1;if(n>ks&&n<_a+5&&s<7.5){this.orcMoveBlend=Math.min(1,this.orcMoveBlend+t*3.5);const c=Math.min(n-ks*.85,3.2*this.orcMoveBlend*t),l=Math.hypot(o,r)||1;e.mesh.position.x+=o/l*c,e.mesh.position.z+=r/l*c,a=!0;const h=je.x,u=je.z,d=e.mesh.position.x-h,f=e.mesh.position.z-u,m=Math.hypot(d,f);m>7.5&&(e.mesh.position.x=h+d/m*7.5,e.mesh.position.z=u+f/m*7.5)}else this.orcMoveBlend=Math.max(0,this.orcMoveBlend-t*4);if(n>_a+7||s>8.5){this.orcAggroed=!1,this.orcSwipeT=0,this.hud.chat("The Orc Scout loses interest and returns to the trail.","system");const c=e.mesh.position.x,l=e.mesh.position.z;e.mesh.position.x+=(je.x-e.mesh.position.x)*Math.min(1,t*1.1),e.mesh.position.z+=(je.z-e.mesh.position.z)*Math.min(1,t*1.1),this.activity.type==="combat"&&this.activity.target===e&&(this.activity={type:"idle"},this.syncHeldTool(),di(this.player),this.hud.hideTarget());const h=t>1e-5?Math.hypot(e.mesh.position.x-c,e.mesh.position.z-l)/t:0;ls(e.mesh,this.tickMonsterGait("orc",h,t),!0,.75);return}if(this.orcSwipeT>0){this.orcSwipeT+=t;const c=Math.min(1,this.orcSwipeT/lr);if(id(e.mesh,c),!this.orcTeleDone){this.orcTeleDone=!0;const l=B_*lr+.06;this.vfx.spawnTelegraph(e.mesh.position.clone(),!1,l,1.1)}!this.orcHitDone&&c>=N_&&c<=F_+.05&&(this.orcHitDone=!0,this.orcMeleeHit(e)),c>=1&&(this.orcSwipeT=0,this.orcHitDone=!1,this.orcTeleDone=!1,pa(e.mesh,0))}else{const c=Math.max(this.orcMoveBlend,a?.45:0),l=a?this.tickMonsterGait("orc",3.2*this.orcMoveBlend,t):this.animTime;ls(e.mesh,l,a,c),this.orcAttackCd-=t,n<=ks+.4&&this.orcAttackCd<=0&&(this.orcAttackCd=2.05,this.orcSwipeT=.001,this.orcHitDone=!1,this.orcTeleDone=!1)}}orcMeleeHit(t){if(this.distTo(t)>ks+.65)return;const n=this.save.skills.defence.level,s=Bh+Math.floor(Math.random()*(Cv-Bh+1)),o=Math.max(1,s-Math.floor(n/5)-_h(this.save));this.save.hp=Math.max(0,this.save.hp-o),this.vfx.spawnSpearThrust(this.player.position.clone(),14),this.vfx.spawnHitSparks(this.player.position.clone().setY(1.1),14),this.vfx.spawnImpactBurst(this.player.position.clone().setY(1.05),16,!1),this.vfx.spawnDamage(this.player.position.clone().setY(1.3),o),this.playerFlinch=o>=7?1.05:.7;const r=Math.atan2(this.player.position.x-t.mesh.position.x,this.player.position.z-t.mesh.position.z),a=o>=7?2.9:2.1;this.playerKnock.set(Math.sin(r)*a,0,Math.cos(r)*a),this.hud.chat(`The Orc Scout thrusts its spear for ${o} damage!`,"combat"),this.hud.setOrbs(this.save.hp,this.save.maxHp,this.save.focus,this.save.stamina),this.save.hp<=0&&(this.save.hp=Math.max(10,Math.floor(this.save.maxHp*.35)),this.player.position.set(0,0,2),this.orcAggroed=!1,this.yetiAggroed=!1,this.activity={type:"idle"},this.syncHeldTool(),this.hud.hideTarget(),this.hud.chat("You fall! You wake by the Thornrest campfire, battered but alive.","combat"),t.mesh.position.set(je.x,0,je.z)),this.activity.type!=="combat"&&t.hp>0&&!t.depleted&&this.beginCombat(t,"You raise your guard against the Orc Scout!"),this.refreshUI(),this.persist()}abortCombatSoft(t,e){e&&this.hud.chat("You step out of range.","combat"),this.combatAbortT=.22,this.combatOorT=0,this.activity={type:"idle"},this.hud.hideTarget(),this.combatCamPull=Math.max(.15,this.combatCamPull*.5),this.syncHeldTool()}tickMonsterGait(t,e,n){const s=t==="yeti"?b_:A_,o=t==="yeti"?2.4:4.2,r=t==="yeti"?this.yetiGait:this.orcGait;if(e<.08)return r;const a=r+Math.max(o*.5,Math.PI*e/s)*n;return t==="yeti"?this.yetiGait=a:this.orcGait=a,a}sitOnGround(t,e=0){t.position.y=Pe(t.position.x,t.position.z)+e}snapMoversToGround(){const t=new Set(this.deathAnims.map(e=>e.mesh));this.sitOnGround(this.player,Number(this.player.userData.locomotionY)||0),this.yetiTarget&&!t.has(this.yetiTarget.mesh)&&this.sitOnGround(this.yetiTarget.mesh,Number(this.yetiTarget.mesh.userData.locomotionY)||0),this.orcTarget&&!t.has(this.orcTarget.mesh)&&this.sitOnGround(this.orcTarget.mesh,Number(this.orcTarget.mesh.userData.locomotionY)||0),this.dummyTarget&&!t.has(this.dummyTarget.mesh)&&this.sitOnGround(this.dummyTarget.mesh),this.moveMarker.visible&&this.sitOnGround(this.moveMarker,.06)}nudgeZoom(t,e=.12){const n=this.camZoomTarget*Math.exp(t*e);this.camZoomTarget=Math.min(wv,Math.max(Mv,n))}updateCamera(t){const e=Math.min(1,this.combatCamPull),n=1-Math.exp(-10*t);this.camZoom+=(this.camZoomTarget-this.camZoom)*n;const s=this.camZoom,o=this.camOffset.x,r=this.camOffset.y*s+e*1.55,a=this.camOffset.z*s+e*.85,c=this.camSmooth;c.set(this.player.position.x+o,r,this.player.position.z+a);const l=1-Math.exp(-4.2*t);this.camera.position.lerp(c,l);let h=this.player.position.x,u=this.player.position.z;if(this.activity.type==="combat"){const d=this.activity.target.mesh.position;h=this.player.position.x*.55+d.x*.45,u=this.player.position.z*.55+d.z*.45}this.lookSmooth.set(h,this.player.position.y+1.05+e*.55,u),this.camLook.lerp(this.lookSmooth,l),this.camera.lookAt(this.camLook)}updateCombatTreeFade(t){const e=this.activity.type==="combat"||this.yetiAggroed||this.orcAggroed,n=this.camera.position;let s=this.player.position.x,o=this.player.position.z;this.activity.type==="combat"?(s=s*.5+this.activity.target.mesh.position.x*.5,o=o*.5+this.activity.target.mesh.position.z*.5):this.yetiAggroed&&this.yetiTarget?(s=this.yetiTarget.mesh.position.x,o=this.yetiTarget.mesh.position.z):this.orcAggroed&&this.orcTarget&&(s=this.orcTarget.mesh.position.x,o=this.orcTarget.mesh.position.z);const r=s-n.x,a=o-n.z,c=Math.hypot(r,a)||1;for(const l of this.objects){if(l.kind!=="tree")continue;const h=l.mesh.position.x-n.x,u=l.mesh.position.z-n.z,d=Math.max(0,Math.min(1,(h*r+u*a)/(c*c))),f=n.x+r*d,m=n.z+a*d,_=Math.hypot(l.mesh.position.x-f,l.mesh.position.z-m),g=e&&d>.12&&d<.92&&_<2.15?.22:1;l.mesh.traverse(p=>{const S=p;if(!S.isMesh||S.name==="hit"||S.name==="outline")return;const y=S.material;if(!y||!("opacity"in y))return;if(!S.userData.fadeReady){const C=y.clone();C.transparent=!0,S.material=C,S.userData.fadeReady=!0,S.userData.fadeOpacity=1}const v=S.userData.fadeOpacity??1,D=v+(g-v)*Math.min(1,t*5.5);S.userData.fadeOpacity=D;const T=S.material;T.opacity=D,T.transparent=D<.98,T.depthWrite=D>.75})}}drawMinimapMarkers(){const t=[];for(const e of this.objects)e.depleted&&e.kind!=="dummy"&&e.kind!=="yeti"&&e.kind!=="orc"||(e.kind==="tree"?t.push({x:e.mesh.position.x,z:e.mesh.position.z,color:"#2d8a2d"}):e.kind==="rock"?t.push({x:e.mesh.position.x,z:e.mesh.position.z,color:"#888"}):e.kind==="yeti"?t.push({x:e.mesh.position.x,z:e.mesh.position.z,color:"#7ec8ff"}):e.kind==="orc"?t.push({x:e.mesh.position.x,z:e.mesh.position.z,color:"#6a9a2a"}):t.push({x:e.mesh.position.x,z:e.mesh.position.z,color:"#c43c3c"}));t.push({x:-1.2,z:-.5,color:"#ff8844"}),t.push({x:2.2,z:.35,color:"#8ec8ff"}),this.hud.drawMinimap(this.player.position.x,this.player.position.z,this.player.rotation.y,t)}refreshUI(){this.hud.setInventory(this.save.inventory),this.hud.setEquipment(this.save),this.hud.setSkills(this.save),this.hud.setOrbs(this.save.hp,this.save.maxHp,this.save.focus,this.save.stamina)}persist(){xv(this.save)}onResize(){this.camera.aspect=window.innerWidth/window.innerHeight,this.camera.updateProjectionMatrix(),this.renderer.setSize(window.innerWidth,window.innerHeight),this.studio.resize(window.innerWidth,window.innerHeight)}animate=()=>{if(!this.running)return;requestAnimationFrame(this.animate);const t=Math.min(.05,this.clock.getDelta());if(this.studio.isOpen()){this.studio.tick(t),this.studio.render(this.renderer);return}this.update(t),this.renderer.render(this.scene,this.camera)}}const hd=document.getElementById("game-canvas");if(!(hd instanceof HTMLCanvasElement))throw new Error("Missing #game-canvas");new Pv(hd);
