var N={},j={},A=34,m=10,E=13;function D(n){return new Function("d","return {"+n.map(function(r,e){return JSON.stringify(r)+": d["+e+'] || ""'}).join(",")+"}")}function X(n,r){var e=D(n);return function(o,f){return r(e(o),f,n)}}function Y(n){var r=Object.create(null),e=[];return n.forEach(function(o){for(var f in o)f in r||e.push(r[f]=f)}),e}function a(n,r){var e=n+"",o=e.length;return o<r?new Array(r-o+1).join(0)+e:e}function b(n){return n<0?"-"+a(-n,6):n>9999?"+"+a(n,6):a(n,4)}function B(n){var r=n.getUTCHours(),e=n.getUTCMinutes(),o=n.getUTCSeconds(),f=n.getUTCMilliseconds();return isNaN(n)?"Invalid Date":b(n.getUTCFullYear())+"-"+a(n.getUTCMonth()+1,2)+"-"+a(n.getUTCDate(),2)+(f?"T"+a(r,2)+":"+a(e,2)+":"+a(o,2)+"."+a(f,3)+"Z":o?"T"+a(r,2)+":"+a(e,2)+":"+a(o,2)+"Z":e||r?"T"+a(r,2)+":"+a(e,2)+"Z":"")}function F(n){var r=new RegExp('["'+n+`
\r]`),e=n.charCodeAt(0);function o(t,i){var c,s,u=f(t,function(l,h){if(c)return c(l,h-1);s=l,c=i?X(l,i):D(l)});return u.columns=s||[],u}function f(t,i){var c=[],s=t.length,u=0,l=0,h,y=s<=0,p=!1;t.charCodeAt(s-1)===m&&--s,t.charCodeAt(s-1)===E&&--s;function U(){if(y)return j;if(p)return p=!1,N;var d,k=u,v;if(t.charCodeAt(k)===A){for(;u++<s&&t.charCodeAt(u)!==A||t.charCodeAt(++u)===A;);return(d=u)>=s?y=!0:(v=t.charCodeAt(u++))===m?p=!0:v===E&&(p=!0,t.charCodeAt(u)===m&&++u),t.slice(k+1,d-1).replace(/""/g,'"')}for(;u<s;){if((v=t.charCodeAt(d=u++))===m)p=!0;else if(v===E)p=!0,t.charCodeAt(u)===m&&++u;else if(v!==e)continue;return t.slice(k,d)}return y=!0,t.slice(k,s)}for(;(h=U())!==j;){for(var T=[];h!==N&&h!==j;)T.push(h),h=U();i&&(T=i(T,l++))==null||c.push(T)}return c}function R(t,i){return t.map(function(c){return i.map(function(s){return g(c[s])}).join(n)})}function O(t,i){return i==null&&(i=Y(t)),[i.map(g).join(n)].concat(R(t,i)).join(`
`)}function M(t,i){return i==null&&(i=Y(t)),R(t,i).join(`
`)}function S(t){return t.map(w).join(`
`)}function w(t){return t.map(g).join(n)}function g(t){return t==null?"":t instanceof Date?B(t):r.test(t+="")?'"'+t.replace(/"/g,'""')+'"':t}return{parse:o,parseRows:f,format:O,formatBody:M,formatRows:S,formatRow:w,formatValue:g}}var L=F(","),P=L.parse,Z=F("	"),V=Z.parse;function $(n){if(!n.ok)throw new Error(n.status+" "+n.statusText);return n.text()}function H(n,r){return fetch(n,r).then($)}function I(n){return function(r,e,o){return arguments.length===2&&typeof e=="function"&&(o=e,e=void 0),H(r,e).then(function(f){return n(f,o)})}}var J=I(P),Q=I(V);function C(n,r,e){this.k=n,this.x=r,this.y=e}C.prototype={constructor:C,scale:function(n){return n===1?this:new C(this.k*n,this.x,this.y)},translate:function(n,r){return n===0&r===0?this:new C(this.k,this.x+this.k*n,this.y+this.k*r)},apply:function(n){return[n[0]*this.k+this.x,n[1]*this.k+this.y]},applyX:function(n){return n*this.k+this.x},applyY:function(n){return n*this.k+this.y},invert:function(n){return[(n[0]-this.x)/this.k,(n[1]-this.y)/this.k]},invertX:function(n){return(n-this.x)/this.k},invertY:function(n){return(n-this.y)/this.k},rescaleX:function(n){return n.copy().domain(n.range().map(this.invertX,this).map(n.invert,n))},rescaleY:function(n){return n.copy().domain(n.range().map(this.invertY,this).map(n.invert,n))},toString:function(){return"translate("+this.x+","+this.y+") scale("+this.k+")"}};C.prototype;export{J as c,Q as t};