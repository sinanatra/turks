import{s as I,b as g,t as M,f as C,h as v,j as $,l as S,d as m,k as q,p as k,z as B,i as E,v as p,x as D,w as N,n as b,A as Q,B as U,o as G,C as W,D as X,E as Y,e as P,q as R,m as Z}from"../chunks/scheduler.Bx9lCxiB.js";import{S as z,i as j,t as d,g as J,c as K,a as h,b as y,d as x,m as T,e as w}from"../chunks/index.D00NIsm6.js";import{T as ee}from"../chunks/Text_4.DorV4p2T.js";import{s as V,e as H,M as te}from"../chunks/Map.Knl79Mm5.js";import{t as se}from"../chunks/transform.Kr_La7z8.js";function ne(r){let e,a,n=r[0].text+"",s,f,l,o=r[0].city+"",t,i,c;return{c(){e=g("div"),a=g("p"),s=M(n),f=C(),l=g("h4"),t=M(o),this.h()},l(u){e=v(u,"DIV",{class:!0});var _=$(e);a=v(_,"P",{class:!0});var A=$(a);s=S(A,n),A.forEach(m),f=q(_),l=v(_,"H4",{});var L=$(l);t=S(L,o),L.forEach(m),_.forEach(m),this.h()},h(){k(a,"class","svelte-6phlej"),B(a,"selected",r[3]==r[0].img||r[3]==r[0].id),k(e,"class","svelte-6phlej")},m(u,_){E(u,e,_),p(e,a),p(a,s),p(e,f),p(e,l),p(l,t),r[6](e),i||(c=[D(e,"mouseover",r[5]),D(e,"focus",ae)],i=!0)},p(u,[_]){_&1&&n!==(n=u[0].text+"")&&N(s,n),_&9&&B(a,"selected",u[3]==u[0].img||u[3]==u[0].id),_&1&&o!==(o=u[0].city+"")&&N(t,o)},i:b,o:b,d(u){u&&m(e),r[6](null),i=!1,Q(c)}}}const ae=()=>{};function le(r,e,a){let n;U(r,V,c=>a(3,n=c));let{data:s}=e,{idx:f}=e,l,o=!0;G(()=>{l.parentElement});const t=()=>{a(2,o=!1),W(V,n=s==null?void 0:s.id,n)};function i(c){X[c?"unshift":"push"](()=>{l=c,a(1,l)})}return r.$$set=c=>{"data"in c&&a(0,s=c.data),"idx"in c&&a(4,f=c.idx)},r.$$.update=()=>{r.$$.dirty&15&&l&&o===!0&&n==s.id&&l.parentElement.scrollTo({top:l.offsetTop,behavior:"smooth"})},[s,l,o,n,f,t,i]}class re extends z{constructor(e){super(),j(this,e,le,ne,I,{data:0,idx:4})}}function O(r,e,a){const n=r.slice();return n[1]=e[a],n[3]=a,n}function F(r){let e,a;return e=new re({props:{data:r[1],idx:r[3]}}),{c(){y(e.$$.fragment)},l(n){x(e.$$.fragment,n)},m(n,s){T(e,n,s),a=!0},p(n,s){const f={};s&1&&(f.data=n[1]),e.$set(f)},i(n){a||(d(e.$$.fragment,n),a=!0)},o(n){h(e.$$.fragment,n),a=!1},d(n){w(e,n)}}}function oe(r){let e,a,n=H(r[0]),s=[];for(let l=0;l<n.length;l+=1)s[l]=F(O(r,n,l));const f=l=>h(s[l],1,1,()=>{s[l]=null});return{c(){e=g("section");for(let l=0;l<s.length;l+=1)s[l].c();this.h()},l(l){e=v(l,"SECTION",{class:!0});var o=$(e);for(let t=0;t<s.length;t+=1)s[t].l(o);o.forEach(m),this.h()},h(){k(e,"class","svelte-spkslf")},m(l,o){E(l,e,o);for(let t=0;t<s.length;t+=1)s[t]&&s[t].m(e,null);a=!0},p(l,[o]){if(o&1){n=H(l[0]);let t;for(t=0;t<n.length;t+=1){const i=O(l,n,t);s[t]?(s[t].p(i,o),d(s[t],1)):(s[t]=F(i),s[t].c(),d(s[t],1),s[t].m(e,null))}for(J(),t=n.length;t<s.length;t+=1)f(t);K()}},i(l){if(!a){for(let o=0;o<n.length;o+=1)d(s[o]);a=!0}},o(l){s=s.filter(Boolean);for(let o=0;o<s.length;o+=1)h(s[o]);a=!1},d(l){l&&m(e),Y(s,l)}}}function ie(r,e,a){let{data:n}=e;return r.$$set=s=>{"data"in s&&a(0,n=s.data)},[n]}class ce extends z{constructor(e){super(),j(this,e,ie,oe,I,{data:0})}}function fe(r){let e,a,n,s,f,l,o;return a=new ee({}),s=new te({props:{data:r[0]}}),l=new ce({props:{data:r[0]}}),{c(){e=g("article"),y(a.$$.fragment),n=C(),y(s.$$.fragment),f=C(),y(l.$$.fragment),this.h()},l(t){e=v(t,"ARTICLE",{class:!0,style:!0});var i=$(e);x(a.$$.fragment,i),n=q(i),x(s.$$.fragment,i),f=q(i),x(l.$$.fragment,i),i.forEach(m),this.h()},h(){k(e,"class","container svelte-1wl6qin"),R(e,"--color-1","#aec8ac"),R(e,"--color-2","#eae7d9")},m(t,i){E(t,e,i),T(a,e,null),p(e,n),T(s,e,null),p(e,f),T(l,e,null),o=!0},p(t,i){const c={};i&1&&(c.data=t[0]),s.$set(c);const u={};i&1&&(u.data=t[0]),l.$set(u)},i(t){o||(d(a.$$.fragment,t),d(s.$$.fragment,t),d(l.$$.fragment,t),o=!0)},o(t){h(a.$$.fragment,t),h(s.$$.fragment,t),h(l.$$.fragment,t),o=!1},d(t){t&&m(e),w(a),w(s),w(l)}}}function ue(r){let e,a="Loading...";return{c(){e=g("article"),e.textContent=a,this.h()},l(n){e=v(n,"ARTICLE",{class:!0,"data-svelte-h":!0}),Z(e)!=="svelte-1qk6kpe"&&(e.textContent=a),this.h()},h(){k(e,"class","svelte-1wl6qin")},m(n,s){E(n,e,s)},p:b,i:b,o:b,d(n){n&&m(e)}}}function _e(r){let e,a,n,s;const f=[ue,fe],l=[];function o(t,i){return t[0].length==0?0:1}return e=o(r),a=l[e]=f[e](r),{c(){a.c(),n=P()},l(t){a.l(t),n=P()},m(t,i){l[e].m(t,i),E(t,n,i),s=!0},p(t,[i]){let c=e;e=o(t),e===c?l[e].p(t,i):(J(),h(l[c],1,1,()=>{l[c]=null}),K(),a=l[e],a?a.p(t,i):(a=l[e]=f[e](t),a.c()),d(a,1),a.m(n.parentNode,n))},i(t){s||(d(a),s=!0)},o(t){h(a),s=!1},d(t){t&&m(n),l[e].d(t)}}}function me(r,e,a){let n=[];return G(async s=>{a(0,n=await se("opinions_out.tsv"))}),[n]}class $e extends z{constructor(e){super(),j(this,e,me,_e,I,{})}}export{$e as component};