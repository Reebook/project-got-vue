import{_ as p,a as l}from"./footerView.a16a5280.js";import{H as u,o,F as n,G as r,I as e,M as d,N as h,u as x,B as f,K as N,J as y,D as w}from"./entry.113c2bf6.js";import{q as V}from"./query.d5c95882.js";import"./json.b9fa68bc.js";import"./utils.fd7e41d7.js";const k={class:"container"},B={class:"row"},g=e("h2",{style:{"margin-top":"15px"}},"List of characters",-1),G={__name:"index_characters",async setup(C){let t,s;const c=([t,s]=u(()=>V("characters").only("characters").findOne()),t=await t,s(),t).characters;return(L,q)=>{const _=p,i=w,m=l;return o(),n("main",null,[r(_),e("div",k,[e("div",B,[g,e("ul",null,[(o(!0),n(d,null,h(x(c),a=>(o(),n("li",{key:a.characterName},[r(i,{to:`/characters/${a.characterName}`},{default:f(()=>[N(y(a.characterName),1)]),_:2},1032,["to"])]))),128))])])]),r(m)])}}};export{G as default};
