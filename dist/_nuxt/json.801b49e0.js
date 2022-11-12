import{s as T,w as U,l as j}from"./entry.97536b20.js";const z=decodeURIComponent,N=encodeURIComponent,O=/; */,_=/^[\u0009\u0020-\u007e\u0080-\u00ff]+$/;function v(r,s){if(typeof r!="string")throw new TypeError("argument str must be a string");let n={},t=s||{},e=r.split(O),a=t.decode||z;for(let i=0;i<e.length;i++){let c=e[i],o=c.indexOf("=");if(o<0)continue;let u=c.substr(0,o).trim(),l=c.substr(++o,c.length).trim();l[0]=='"'&&(l=l.slice(1,-1)),n[u]==null&&(n[u]=H(l,a))}return n}function w(r,s,n){let t=n||{},e=t.encode||N;if(typeof e!="function")throw new TypeError("option encode is invalid");if(!_.test(r))throw new TypeError("argument name is invalid");let a=e(s);if(a&&!_.test(a))throw new TypeError("argument val is invalid");let i=r+"="+a;if(t.maxAge!=null){let c=t.maxAge-0;if(isNaN(c)||!isFinite(c))throw new TypeError("option maxAge is invalid");i+="; Max-Age="+Math.floor(c)}if(t.domain){if(!_.test(t.domain))throw new TypeError("option domain is invalid");i+="; Domain="+t.domain}if(t.path){if(!_.test(t.path))throw new TypeError("option path is invalid");i+="; Path="+t.path}if(t.expires){if(typeof t.expires.toUTCString!="function")throw new TypeError("option expires is invalid");i+="; Expires="+t.expires.toUTCString()}if(t.httpOnly&&(i+="; HttpOnly"),t.secure&&(i+="; Secure"),t.sameSite)switch(typeof t.sameSite=="string"?t.sameSite.toLowerCase():t.sameSite){case!0:i+="; SameSite=Strict";break;case"lax":i+="; SameSite=Lax";break;case"strict":i+="; SameSite=Strict";break;case"none":i+="; SameSite=None";break;default:throw new TypeError("option sameSite is invalid")}return i}function H(r,s){try{return s(r)}catch{return r}}const L={ignoreUnknown:!1,respectType:!1,respectFunctionNames:!1,respectFunctionProperties:!1,unorderedObjects:!0,unorderedArrays:!1,unorderedSets:!1};function M(r,s={}){s={...L,...s};const n=x(s);return n.dispatch(r),n.toString()}function x(r){const s=[];let n=[];const t=e=>{s.push(e)};return{toString(){return s.join("")},getContext(){return n},dispatch(e){return r.replacer&&(e=r.replacer(e)),this["_"+(e===null?"null":typeof e)](e)},_object(e){const a=/\[object (.*)\]/i,i=Object.prototype.toString.call(e),c=a.exec(i),o=c?c[1].toLowerCase():"unknown:["+i.toLowerCase()+"]";let u=null;if((u=n.indexOf(e))>=0)return this.dispatch("[CIRCULAR:"+u+"]");if(n.push(e),typeof Buffer<"u"&&Buffer.isBuffer&&Buffer.isBuffer(e))return t("buffer:"),t(e.toString("utf8"));if(o!=="object"&&o!=="function"&&o!=="asyncfunction")if(this["_"+o])this["_"+o](e);else{if(r.ignoreUnknown)return t("["+o+"]");throw new Error('Unknown object type "'+o+'"')}else{let l=Object.keys(e);return r.unorderedObjects&&(l=l.sort()),r.respectType!==!1&&!S(e)&&l.splice(0,0,"prototype","__proto__","letructor"),r.excludeKeys&&(l=l.filter(function(f){return!r.excludeKeys(f)})),t("object:"+l.length+":"),l.forEach(f=>{this.dispatch(f),t(":"),r.excludeValues||this.dispatch(e[f]),t(",")})}},_array(e,a){if(a=typeof a<"u"?a:r.unorderedArrays!==!1,t("array:"+e.length+":"),!a||e.length<=1)return e.forEach(o=>this.dispatch(o));const i=[],c=e.map(o=>{const u=x(r);return u.dispatch(o),i.push(u.getContext()),u.toString()});return n=n.concat(i),c.sort(),this._array(c,!1)},_date(e){return t("date:"+e.toJSON())},_symbol(e){return t("symbol:"+e.toString())},_error(e){return t("error:"+e.toString())},_boolean(e){return t("bool:"+e.toString())},_string(e){t("string:"+e.length+":"),t(e.toString())},_function(e){t("fn:"),S(e)?this.dispatch("[native]"):this.dispatch(e.toString()),r.respectFunctionNames!==!1&&this.dispatch("function-name:"+String(e.name)),r.respectFunctionProperties&&this._object(e)},_number(e){return t("number:"+e.toString())},_xml(e){return t("xml:"+e.toString())},_null(){return t("Null")},_undefined(){return t("Undefined")},_regexp(e){return t("regex:"+e.toString())},_uint8array(e){return t("uint8array:"),this.dispatch(Array.prototype.slice.call(e))},_uint8clampedarray(e){return t("uint8clampedarray:"),this.dispatch(Array.prototype.slice.call(e))},_int8array(e){return t("int8array:"),this.dispatch(Array.prototype.slice.call(e))},_uint16array(e){return t("uint16array:"),this.dispatch(Array.prototype.slice.call(e))},_int16array(e){return t("int16array:"),this.dispatch(Array.prototype.slice.call(e))},_uint32array(e){return t("uint32array:"),this.dispatch(Array.prototype.slice.call(e))},_int32array(e){return t("int32array:"),this.dispatch(Array.prototype.slice.call(e))},_float32array(e){return t("float32array:"),this.dispatch(Array.prototype.slice.call(e))},_float64array(e){return t("float64array:"),this.dispatch(Array.prototype.slice.call(e))},_arraybuffer(e){return t("arraybuffer:"),this.dispatch(new Uint8Array(e))},_url(e){return t("url:"+e.toString())},_map(e){t("map:");const a=Array.from(e);return this._array(a,r.unorderedSets!==!1)},_set(e){t("set:");const a=Array.from(e);return this._array(a,r.unorderedSets!==!1)},_file(e){return t("file:"),this.dispatch([e.name,e.size,e.type,e.lastModfied])},_blob(){if(r.ignoreUnknown)return t("[blob]");throw new Error(`Hashing Blob objects is currently not supported
Use "options.replacer" or "options.ignoreUnknown"
`)},_domwindow(){return t("domwindow")},_bigint(e){return t("bigint:"+e.toString())},_process(){return t("process")},_timer(){return t("timer")},_pipe(){return t("pipe")},_tcp(){return t("tcp")},_udp(){return t("udp")},_tty(){return t("tty")},_statwatcher(){return t("statwatcher")},_securecontext(){return t("securecontext")},_connection(){return t("connection")},_zlib(){return t("zlib")},_context(){return t("context")},_nodescript(){return t("nodescript")},_httpparser(){return t("httpparser")},_dataview(){return t("dataview")},_signal(){return t("signal")},_fsevent(){return t("fsevent")},_tlswrap(){return t("tlswrap")}}}function S(r){return typeof r!="function"?!1:/^function\s+\w*\s*\(\s*\)\s*{\s+\[native code\]\s+}$/i.exec(Function.prototype.toString.call(r))!=null}class d{constructor(s,n){s=this.words=s||[],n!==void 0?this.sigBytes=n:this.sigBytes=s.length*4}toString(s){return(s||F).stringify(this)}concat(s){if(this.clamp(),this.sigBytes%4)for(let n=0;n<s.sigBytes;n++){const t=s.words[n>>>2]>>>24-n%4*8&255;this.words[this.sigBytes+n>>>2]|=t<<24-(this.sigBytes+n)%4*8}else for(let n=0;n<s.sigBytes;n+=4)this.words[this.sigBytes+n>>>2]=s.words[n>>>2];return this.sigBytes+=s.sigBytes,this}clamp(){this.words[this.sigBytes>>>2]&=4294967295<<32-this.sigBytes%4*8,this.words.length=Math.ceil(this.sigBytes/4)}clone(){return new d(this.words.slice(0))}}const F={stringify(r){const s=[];for(let n=0;n<r.sigBytes;n++){const t=r.words[n>>>2]>>>24-n%4*8&255;s.push((t>>>4).toString(16)),s.push((t&15).toString(16))}return s.join("")}},D={stringify(r){const s="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=[];for(let t=0;t<r.sigBytes;t+=3){const e=r.words[t>>>2]>>>24-t%4*8&255,a=r.words[t+1>>>2]>>>24-(t+1)%4*8&255,i=r.words[t+2>>>2]>>>24-(t+2)%4*8&255,c=e<<16|a<<8|i;for(let o=0;o<4&&t*8+o*6<r.sigBytes*8;o++)n.push(s.charAt(c>>>6*(3-o)&63))}return n.join("")}},I={parse(r){const s=r.length,n=[];for(let t=0;t<s;t++)n[t>>>2]|=(r.charCodeAt(t)&255)<<24-t%4*8;return new d(n,s)}},P={parse(r){return I.parse(unescape(encodeURIComponent(r)))}};class W{constructor(){this._minBufferSize=0,this.blockSize=512/32,this.reset()}reset(){this._data=new d,this._nDataBytes=0}_append(s){typeof s=="string"&&(s=P.parse(s)),this._data.concat(s),this._nDataBytes+=s.sigBytes}_doProcessBlock(s,n){}_process(s){let n,t=this._data.sigBytes/(this.blockSize*4);s?t=Math.ceil(t):t=Math.max((t|0)-this._minBufferSize,0);const e=t*this.blockSize,a=Math.min(e*4,this._data.sigBytes);if(e){for(let i=0;i<e;i+=this.blockSize)this._doProcessBlock(this._data.words,i);n=this._data.words.splice(0,e),this._data.sigBytes-=a}return new d(n,a)}}class J extends W{update(s){return this._append(s),this._process(),this}finalize(s){s&&this._append(s)}}const K=[1779033703,-1150833019,1013904242,-1521486534,1359893119,-1694144372,528734635,1541459225],V=[1116352408,1899447441,-1245643825,-373957723,961987163,1508970993,-1841331548,-1424204075,-670586216,310598401,607225278,1426881987,1925078388,-2132889090,-1680079193,-1046744716,-459576895,-272742522,264347078,604807628,770255983,1249150122,1555081692,1996064986,-1740746414,-1473132947,-1341970488,-1084653625,-958395405,-710438585,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,-2117940946,-1838011259,-1564481375,-1474664885,-1035236496,-949202525,-778901479,-694614492,-200395387,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,-2067236844,-1933114872,-1866530822,-1538233109,-1090935817,-965641998],p=[];class $ extends J{constructor(){super(),this.reset()}reset(){super.reset(),this._hash=new d(K.slice(0))}_doProcessBlock(s,n){const t=this._hash.words;let e=t[0],a=t[1],i=t[2],c=t[3],o=t[4],u=t[5],l=t[6],f=t[7];for(let h=0;h<64;h++){if(h<16)p[h]=s[n+h]|0;else{const y=p[h-15],A=(y<<25|y>>>7)^(y<<14|y>>>18)^y>>>3,g=p[h-2],R=(g<<15|g>>>17)^(g<<13|g>>>19)^g>>>10;p[h]=A+p[h-7]+R+p[h-16]}const b=o&u^~o&l,B=e&a^e&i^a&i,k=(e<<30|e>>>2)^(e<<19|e>>>13)^(e<<10|e>>>22),C=(o<<26|o>>>6)^(o<<21|o>>>11)^(o<<7|o>>>25),m=f+C+b+V[h]+p[h],E=k+B;f=l,l=u,u=o,o=c+m|0,c=i,i=a,a=e,e=m+E|0}t[0]=t[0]+e|0,t[1]=t[1]+a|0,t[2]=t[2]+i|0,t[3]=t[3]+c|0,t[4]=t[4]+o|0,t[5]=t[5]+u|0,t[6]=t[6]+l|0,t[7]=t[7]+f|0}finalize(s){super.finalize(s);const n=this._nDataBytes*8,t=this._data.sigBytes*8;return this._data.words[t>>>5]|=128<<24-t%32,this._data.words[(t+64>>>9<<4)+14]=Math.floor(n/4294967296),this._data.words[(t+64>>>9<<4)+15]=n,this._data.sigBytes=this._data.words.length*4,this._process(),this._hash}}function q(r){return new $().finalize(r).toString(D)}function et(r,s={}){const n=typeof r=="string"?r:M(r,s);return q(n).substr(0,10)}const G={path:"/",decode:r=>j(decodeURIComponent(r)),encode:r=>encodeURIComponent(typeof r=="string"?r:JSON.stringify(r))};function rt(r,s){var a,i;const n={...G,...s},t=X(n)||{},e=T((i=t[r])!=null?i:(a=n.default)==null?void 0:a.call(n));return U(e,()=>{Y(r,e.value,n)}),e}function X(r={}){return v(document.cookie,r)}function Q(r,s,n={}){return s==null?w(r,s,{...n,maxAge:-1}):w(r,s,n)}function Y(r,s,n={}){document.cookie=Q(r,s,n)}function st(r){return JSON.stringify(r,Z)}function Z(r,s){return s instanceof RegExp?`--REGEX ${s.toString()}`:s}export{et as h,st as j,rt as u};
