import{_ as m}from"./login-bg-c9719f74.js";import{_ as f}from"./Logo-2b63460d.js";import{u as h,x as p,N as l,o as i,c as n,b as e,w as t,L as u,a as s,aa as v,d as g,t as x,aj as b,l as y,M as V,aF as k}from"./index-e5ea640e.js";import"./customizer-3f7a4511.js";const C={class:"pa-3"},w={class:"auth-header pt-lg-6 pt-2 px-sm-6 px-3 pb-lg-6 pb-0"},N={class:"position-relative"},S=s("div",{class:""},[s("img",{src:m,class:"position-relative d-none d-lg-flex",alt:"login-background"})],-1),j={class:"mt-xl-0 mt-5 mw-100"},A=s("h2",{class:"text-h3 font-weight-bold mb-2"},"SYSCALL",-1),B={key:0,class:"text-center"},P=h({setup(E){const d=p(),_=k().query.token,c=l(!0),a=l(null),o=l(null);return d.verifyEmail(_).then(()=>{a.value="success",o.value="E-mail verificado com sucesso!"}).catch(r=>{a.value="error",o.value=r.message}).finally(()=>{c.value=!1}),(r,M)=>(i(),n("div",C,[e(V,{class:"h-100vh mh-100 auth"},{default:t(()=>[e(u,{cols:"12",lg:"7",xl:"8",class:"d-lg-flex align-center justify-center authentication position-relative"},{default:t(()=>[s("div",w,[s("div",N,[e(f)])]),S]),_:1}),e(u,{cols:"12",lg:"5",xl:"4",class:"d-flex align-center justify-center"},{default:t(()=>[s("div",j,[A,e(v,{color:a.value,class:"mb-2"},{default:t(()=>[g(x(o.value),1)]),_:1},8,["color"]),c.value?(i(),n("div",B,[e(b,{color:"primary",indeterminate:""})])):y("",!0)])]),_:1})]),_:1})]))}});export{P as default};
