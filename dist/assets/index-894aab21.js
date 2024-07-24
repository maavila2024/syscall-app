import{i as W,j as U}from"./vue-tabler-icons.es-1b6b56fc.js";import{a6 as X,a7 as k,a3 as L,o as d,e as y,w as t,a as u,c as b,q as z,d as v,t as C,i as B,l as $,F as x,b as e,V as h,p as D,y as n,z as F,a8 as Y,a9 as O,aa as P,L as w,ab as R,ac as G,ad as S,S as H,ae as J,C as Z,af as ee,B as q,_ as A,ag as E,ah as N,ai as I,aj as M,a5 as te,T as ae,ak as se}from"./index-c2e1008c.js";import{u as K,a as Q}from"./vee-validate.esm-a36a519d.js";const T=X("teams",{state:()=>({teams:[],toEdit:{},toDelete:{}}),actions:{async getTeams(){this.teams=await k.get("api/teams").then(r=>r.data.data)},async storeTeam(r){const l=await k.post("api/teams",r).then(s=>s.data.data);this.teams.push(l)},async updateTeam(r,l){const s=await k.put(`api/teams/${r}`,l).then(_=>_.data.data),p=this.teams.findIndex(_=>_.token===r);this.teams.splice(p,1,s)},async deleteTeam(r){await k.delete(`api/teams/${r}`).then(s=>s.data.data);const l=this.teams.findIndex(s=>s.token===r);this.teams.splice(l,1)}}}),le=u("thead",null,[u("tr",null,[u("th",{class:"text-left"}," Time "),u("th",{class:"text-left"}," Cargo "),u("th",{class:"text-left"}," Ações "),u("th")])],-1),ne=v(" Default "),oe={class:"text-right"},ie={key:0,class:"d-flex align-center"},re={setup(r){const l=T(),{teams:s,toEdit:p,toDelete:_}=L(l);return(g,V)=>(d(),y(Y,{class:"border-opacity-100"},{default:t(()=>[le,u("tbody",null,[(d(!0),b(x,null,z(n(s),o=>(d(),b("tr",{key:o.name},[u("td",null,[v(C(o.name)+" ",1),o.default?(d(),y(B,{key:0,size:"small",variant:"tonal",color:"primary",class:"ml-2"},{default:t(()=>[ne]),_:1})):$("",!0)]),u("td",null,[(d(!0),b(x,null,z(o.roles,c=>(d(),y(B,{key:`${o.token}_${c.name}`,size:"small",variant:"tonal"},{default:t(()=>[v(C(c.name),1)]),_:2},1024))),128))]),u("td",oe,[o.is_admin?(d(),b("div",ie,[e(F,{text:"Edit"},{activator:t(({props:c})=>[e(h,D({icon:"",flat:"",onClick:i=>p.value=o},c),{default:t(()=>[e(n(W),{"stroke-width":"1.5",size:"20",class:"text-primary"})]),_:2},1040,["onClick"])]),_:2},1024),e(F,{text:"Delete"},{activator:t(({props:c})=>[e(h,D({icon:"",flat:"",onClick:i=>_.value=o},c),{default:t(()=>[e(n(U),{"stroke-width":"1.5",size:"20",class:"text-error"})]),_:2},1040,["onClick"])]),_:2},1024)])):$("",!0)])]))),128))])]),_:1}))}},de={class:"text-right"},ue={emits:["cancel","add"],setup(r,{emit:l}){const s=T(),p=O({name:P().required().label("Nome")}),{handleSubmit:_,errors:g,isSubmitting:V}=K({validationSchema:p,initialValues:{name:""}}),o=_(async m=>{await s.storeTeam(m),l("add")}),c=w(""),{value:i}=Q("name");return(m,a)=>(d(),b(x,null,[c.value?(d(),y(R,{key:0,color:"error",class:"mb-2"},{default:t(()=>[v(C(c.value),1)]),_:1})):$("",!0),e(J,{onSubmit:H(n(o),["prevent"])},{default:t(()=>[e(G,{modelValue:n(i),"onUpdate:modelValue":a[0]||(a[0]=f=>S(i)?i.value=f:null),"error-messages":n(g).name,label:"Nome",variant:"outlined",color:"primary"},null,8,["modelValue","error-messages"]),u("div",de,[e(h,{flat:"",text:"Cancelar",onClick:a[1]||(a[1]=f=>l("cancel"))}),e(h,{type:"submit",color:"primary",flat:"",loading:n(V),text:"Adicionar"},null,8,["loading"])])]),_:1},8,["onSubmit"])],64))}},ce={class:"text-right"},me={props:{team:{type:Object,required:!0}},emits:["cancel","edit"],setup(r,{emit:l}){const s=r,p=T(),_=O({name:P().required().label("Nome")}),{handleSubmit:g,errors:V,isSubmitting:o}=K({validationSchema:_,initialValues:{name:s.team.name}}),c=g(async a=>{await p.updateTeam(s.team.token,a),l("edit")}),i=w(""),{value:m}=Q("name");return(a,f)=>(d(),b(x,null,[i.value?(d(),y(R,{key:0,color:"error",class:"mb-2"},{default:t(()=>[v(C(i.value),1)]),_:1})):$("",!0),e(J,{onSubmit:H(n(c),["prevent"])},{default:t(()=>[e(G,{modelValue:n(m),"onUpdate:modelValue":f[0]||(f[0]=j=>S(m)?m.value=j:null),"error-messages":n(V).name,label:"Nome",variant:"outlined",color:"primary"},null,8,["modelValue","error-messages"]),u("div",ce,[e(h,{flat:"",text:"Cancelar",onClick:f[1]||(f[1]=j=>l("cancel"))}),e(h,{type:"submit",color:"primary",flat:"",loading:n(o),text:"Editar"},null,8,["loading"])])]),_:1},8,["onSubmit"])],64))}},fe={class:"mb-5 pb-5 border-b border-opacity-100"},pe=u("h1",{class:"text-h3"},"Meus times",-1),_e=v("Novo time "),ve=v("Adicionar time"),he=v("Editar time"),ge=v(" Cancelar "),Ve=v(" Deletar "),ke=Z({setup(r){const l=T(),{toEdit:s,toDelete:p}=L(l),{isLoading:_}=ee(l.getTeams()),g=q({get(){return!!Object.keys(s.value).length},set(i){i||(s.value={})}}),V=q({get(){return!!Object.keys(p.value).length},set(i){i||(p.value={})}}),o=w(!1);async function c(i){o.value=!0,await l.deleteTeam(i.token),p.value={},o.value=!1}return w([{text:"2 New Team",disabled:!0,href:"#"}]),(i,m)=>(d(),b("div",null,[u("div",fe,[e(te,null,{default:t(()=>[e(A,null,{default:t(()=>[pe]),_:1}),e(A,{class:"text-right"},{default:t(()=>[e(E,{width:"auto"},{activator:t(({props:a})=>[e(h,D({flat:"",color:"primary"},a),{default:t(()=>[_e]),_:2},1040)]),default:t(({isActive:a})=>[e(N,{width:"400"},{default:t(()=>[e(I,null,{default:t(()=>[ve]),_:1}),e(M,null,{default:t(()=>[e(ue,{onAdd:f=>a.value=!1,onCancel:f=>a.value=!1},null,8,["onAdd","onCancel"])]),_:2},1024)]),_:2},1024)]),_:1})]),_:1})]),_:1})]),n(_)?(d(),y(se,{key:0,width:3,color:"primary",indeterminate:""})):(d(),b(x,{key:1},[e(re),e(E,{modelValue:n(g),"onUpdate:modelValue":m[0]||(m[0]=a=>S(g)?g.value=a:null),width:"auto"},{default:t(({isActive:a})=>[e(N,{width:"400"},{default:t(()=>[e(I,null,{default:t(()=>[he]),_:1}),e(M,null,{default:t(()=>[e(me,{team:n(s),onCancel:f=>a.value=!1,onEdit:f=>a.value=!1},null,8,["team","onCancel","onEdit"])]),_:2},1024)]),_:2},1024)]),_:1},8,["modelValue"]),e(E,{modelValue:n(V),"onUpdate:modelValue":m[2]||(m[2]=a=>S(V)?V.value=a:null),width:"auto"},{default:t(({isActive:a})=>[e(N,{"prepend-icon":n(U),title:"Você tem certeza que deseja deletar este time?"},{actions:t(()=>[e(ae),e(h,{onClick:f=>a.value=!1},{default:t(()=>[ge]),_:2},1032,["onClick"]),e(h,{onClick:m[1]||(m[1]=f=>c(n(p))),variant:"tonal",color:"error",loading:o.value},{default:t(()=>[Ve]),_:1},8,["loading"])]),_:2},1032,["prepend-icon"])]),_:1},8,["modelValue"])],64))]))}});export{ke as default};
