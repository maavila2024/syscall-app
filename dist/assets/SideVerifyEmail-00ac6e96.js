import{_ as m}from"./login-bg-c9719f74.js";import{_ as h}from"./Logo-9c074b54.js";import{u as f,x as p,L as l,o as i,c as n,b as e,w as t,_ as u,a as s,a9 as v,d as g,t as x,ai as b,l as y,ah as V,ax as k}from"./index-5bd303ee.js";import"./customizer-f4401013.js";const C={class:"pa-3"},w={class:"auth-header pt-lg-6 pt-2 px-sm-6 px-3 pb-lg-6 pb-0"},S={class:"position-relative"},N=s("div",{class:""},[s("img",{src:m,class:"position-relative d-none d-lg-flex",alt:"login-background"})],-1),A={class:"mt-xl-0 mt-5 mw-100"},B=s("h2",{class:"text-h3 font-weight-bold mb-2"},"SYSCALL",-1),E={key:0,class:"text-center"},T=f({setup(L){const d=p(),_=k().query.token,c=l(!0),a=l(null),o=l(null);return d.verifyEmail(_).then(()=>{a.value="success",o.value="E-mail verificado com sucesso!"}).catch(r=>{a.value="error",o.value=r.message}).finally(()=>{c.value=!1}),(r,R)=>(i(),n("div",C,[e(V,{class:"h-100vh mh-100 auth"},{default:t(()=>[e(u,{cols:"12",lg:"7",xl:"8",class:"d-lg-flex align-center justify-center authentication position-relative"},{default:t(()=>[s("div",w,[s("div",S,[e(h)])]),N]),_:1}),e(u,{cols:"12",lg:"5",xl:"4",class:"d-flex align-center justify-center"},{default:t(()=>[s("div",A,[B,e(v,{color:a.value,class:"mb-2"},{default:t(()=>[g(x(o.value),1)]),_:1},8,["color"]),c.value?(i(),n("div",E,[e(b,{color:"primary",indeterminate:""})])):y("",!0)])]),_:1})]),_:1})]))}});export{T as default};
