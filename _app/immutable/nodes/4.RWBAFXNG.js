import{s as M,n as m,o as P}from"../chunks/scheduler.DGlNlUkI.js";import{S as E,i as I,g as v,h as y,x as G,k as b,a as h,f as _,e as x,t as u,b as S,d as p,p as j,r as d,s as C,j as z,u as $,c as T,l as q,v as g,y as L,w as k}from"../chunks/index.DKXqwyW7.js";/* empty css                                                     */import{M as A,G as H}from"../chunks/Gallery.IEJw0h8Q.js";import{t as N}from"../chunks/transform.DbdcILkC.js";function R(o){let t,s='<h1>Views of the working desk</h1> <h2>Title</h2> <img src="https://lh3.googleusercontent.com/d/1tajUbDPP2r60-x6mq-yf4QlFaIv08pG8" alt="view from Bradtford,UK" class="svelte-9q0th3"/>';return{c(){t=v("section"),t.innerHTML=s,this.h()},l(a){t=y(a,"SECTION",{class:!0,"data-svelte-h":!0}),G(t)!=="svelte-1q5s24a"&&(t.innerHTML=s),this.h()},h(){b(t,"class","desc svelte-9q0th3")},m(a,n){h(a,t,n)},p:m,i:m,o:m,d(a){a&&_(t)}}}class U extends E{constructor(t){super(),I(this,t,null,R,M,{})}}function B(o){let t,s,a,n,c,l,i;return s=new U({}),n=new A({props:{data:o[0]}}),l=new H({props:{data:o[0]}}),{c(){t=v("article"),d(s.$$.fragment),a=C(),d(n.$$.fragment),c=C(),d(l.$$.fragment),this.h()},l(e){t=y(e,"ARTICLE",{class:!0,style:!0});var r=z(t);$(s.$$.fragment,r),a=T(r),$(n.$$.fragment,r),c=T(r),$(l.$$.fragment,r),r.forEach(_),this.h()},h(){b(t,"class","container svelte-1ktlpz3"),q(t,"--color-1","#d2e5ff"),q(t,"--color-2","#ead7fe")},m(e,r){h(e,t,r),g(s,t,null),L(t,a),g(n,t,null),L(t,c),g(l,t,null),i=!0},p(e,r){const f={};r&1&&(f.data=e[0]),n.$set(f);const w={};r&1&&(w.data=e[0]),l.$set(w)},i(e){i||(p(s.$$.fragment,e),p(n.$$.fragment,e),p(l.$$.fragment,e),i=!0)},o(e){u(s.$$.fragment,e),u(n.$$.fragment,e),u(l.$$.fragment,e),i=!1},d(e){e&&_(t),k(s),k(n),k(l)}}}function D(o){let t,s="Loading...";return{c(){t=v("article"),t.textContent=s,this.h()},l(a){t=y(a,"ARTICLE",{class:!0,"data-svelte-h":!0}),G(t)!=="svelte-1qk6kpe"&&(t.textContent=s),this.h()},h(){b(t,"class","svelte-1ktlpz3")},m(a,n){h(a,t,n)},p:m,i:m,o:m,d(a){a&&_(t)}}}function F(o){let t,s,a,n;const c=[D,B],l=[];function i(e,r){return e[0].length==0?0:1}return t=i(o),s=l[t]=c[t](o),{c(){s.c(),a=x()},l(e){s.l(e),a=x()},m(e,r){l[t].m(e,r),h(e,a,r),n=!0},p(e,[r]){let f=t;t=i(e),t===f?l[t].p(e,r):(j(),u(l[f],1,1,()=>{l[f]=null}),S(),s=l[t],s?s.p(e,r):(s=l[t]=c[t](e),s.c()),p(s,1),s.m(a.parentNode,a))},i(e){n||(p(s),n=!0)},o(e){u(s),n=!1},d(e){e&&_(a),l[t].d(e)}}}function K(o,t,s){let a=[];return P(async n=>{s(0,a=await N("windows.tsv"))}),[a]}class X extends E{constructor(t){super(),I(this,t,K,F,M,{})}}export{X as component};
