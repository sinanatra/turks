import{s as L,o as M,n as u}from"../chunks/scheduler.DlkIgXc2.js";import{S as q,i as z,e as v,a as k,t as m,b as A,d as p,f as _,p as G,g as C,r as $,s as y,h as T,j as I,u as d,c as w,k as E,v as g,y as x,w as h,x as R}from"../chunks/index.hfIOWo0e.js";import{T as S}from"../chunks/Text_1.BfSo3o2i.js";import{M as j}from"../chunks/Map.CE453v2V.js";import{G as N}from"../chunks/Gallery.Bs7cfiQK.js";import{t as P}from"../chunks/transform.BALDiI-M.js";function B(l){let t,a,n,o,c,r,i;return a=new S({}),o=new j({props:{data:l[0]}}),r=new N({props:{data:l[0]}}),{c(){t=C("article"),$(a.$$.fragment),n=y(),$(o.$$.fragment),c=y(),$(r.$$.fragment),this.h()},l(e){t=T(e,"ARTICLE",{class:!0});var s=I(t);d(a.$$.fragment,s),n=w(s),d(o.$$.fragment,s),c=w(s),d(r.$$.fragment,s),s.forEach(_),this.h()},h(){E(t,"class","container svelte-1a8zxb4")},m(e,s){k(e,t,s),g(a,t,null),x(t,n),g(o,t,null),x(t,c),g(r,t,null),i=!0},p(e,s){const f={};s&1&&(f.data=e[0]),o.$set(f);const b={};s&1&&(b.data=e[0]),r.$set(b)},i(e){i||(p(a.$$.fragment,e),p(o.$$.fragment,e),p(r.$$.fragment,e),i=!0)},o(e){m(a.$$.fragment,e),m(o.$$.fragment,e),m(r.$$.fragment,e),i=!1},d(e){e&&_(t),h(a),h(o),h(r)}}}function D(l){let t,a="Loading...";return{c(){t=C("article"),t.textContent=a,this.h()},l(n){t=T(n,"ARTICLE",{class:!0,"data-svelte-h":!0}),R(t)!=="svelte-1qk6kpe"&&(t.textContent=a),this.h()},h(){E(t,"class","svelte-1a8zxb4")},m(n,o){k(n,t,o)},p:u,i:u,o:u,d(n){n&&_(t)}}}function F(l){let t,a,n,o;const c=[D,B],r=[];function i(e,s){return e[0].length==0?0:1}return t=i(l),a=r[t]=c[t](l),{c(){a.c(),n=v()},l(e){a.l(e),n=v()},m(e,s){r[t].m(e,s),k(e,n,s),o=!0},p(e,[s]){let f=t;t=i(e),t===f?r[t].p(e,s):(G(),m(r[f],1,1,()=>{r[f]=null}),A(),a=r[t],a?a.p(e,s):(a=r[t]=c[t](e),a.c()),p(a,1),a.m(n.parentNode,n))},i(e){o||(p(a),o=!0)},o(e){m(a),o=!1},d(e){e&&_(n),r[t].d(e)}}}function H(l,t,a){let n=[];return M(async o=>{a(0,n=await P("windows.tsv"))}),[n]}class W extends q{constructor(t){super(),z(this,t,H,F,L,{})}}export{W as component};