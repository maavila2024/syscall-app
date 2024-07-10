import{i as W}from"./vue-tabler-icons.es-b630d5f1.js";import{a3 as oe,a4 as P,a5 as X,r as ue,o as v,e as T,w as t,a as n,c as N,q as ne,d as k,t as U,i as M,l as E,b as e,V as w,p as G,A as H,z as a,F as I,a6 as de,a7 as Y,a8 as A,ak as q,L as j,a9 as Z,a0 as ee,ai as b,_ as i,aa as te,ab as h,al as z,am as B,S as ae,ac as le,u as re,ad as ie,C as J,ae as O,af as R,ag as K,ah as Q,T as ce,aj as me}from"./index-65dccf04.js";import{u as se,a as x}from"./vee-validate.esm-b0cffe8a.js";const L=oe("tasksStatus",{state:()=>({tasksStatus:[],toEdit:{},toDelete:{}}),actions:{async getTasksStatus(){this.tasksStatus=await P.get("api/tasks-status").then(m=>m.data.data)},async storeTaskStatus(m){const u=await P.post("api/tasks-status",m).then(o=>o.data.data);this.tasksStatus.push(u)},async updateTaskStatus(m,u){const o=await P.put(`api/tasks-status/${m}`,u).then(V=>V.data.data),p=this.tasksStatus.findIndex(V=>V.id===m);this.tasksStatus.splice(p,1,o),this.getTasksStatus()},async deleteTaskStatus(m){await P.delete(`api/tasks-status/${m}`).then(o=>o.data.data);const u=this.tasksStatus.findIndex(o=>o.id===m);console.log(u),this.tasksStatus.splice(u,1)}}}),fe=n("thead",null,[n("tr",null,[n("th",{class:"text-left"},"Nome"),n("th",{class:"text-left"},"Padrão"),n("th",{class:"text-left"},"Ativo/Inativo"),n("th",{class:"text-left"},"Ações")])],-1),_e=k(" Default "),pe=k(" Default "),ve={class:"text-right"},he={class:"d-flex align-center"},Ve={setup(m){const u=L(),{tasksStatus:o,toEdit:p,toDelete:V}=X(u);return(g,S)=>{const y=ue("PencilIcon");return v(),T(de,{class:"border-opacity-100"},{default:t(()=>[fe,n("tbody",null,[(v(!0),N(I,null,ne(a(o),f=>(v(),N("tr",{key:f.name},[n("td",null,[k(U(f.name)+" ",1),f.default?(v(),T(M,{key:0,size:"small",variant:"tonal",color:"primary",class:"ml-2"},{default:t(()=>[_e]),_:1})):E("",!0)]),n("td",null,[f.is_default?(v(),T(M,{key:0,size:"small",variant:"tonal",color:"primary",class:"ml-2"},{default:t(()=>[pe]),_:1})):E("",!0)]),n("td",null,[e(M,{size:"small",variant:"tonal",color:"primary",class:"ml-2"},{default:t(()=>[k(U(f.status?"Ativo":"Inativo"),1)]),_:2},1024)]),n("td",ve,[n("div",he,[e(H,{text:"Edit"},{activator:t(({props:d})=>[e(w,G({icon:"",flat:"",onClick:r=>p.value=f},d),{default:t(()=>[e(y,{"stroke-width":"1.5",size:"20",class:"text-primary"})]),_:2},1040,["onClick"])]),_:2},1024),e(H,{text:"Delete"},{activator:t(({props:d})=>[e(w,G({icon:"",flat:"",onClick:r=>V.value=f},d),{default:t(()=>[e(a(W),{"stroke-width":"1.5",size:"20",class:"text-error"})]),_:2},1040,["onClick"])]),_:2},1024)])])]))),128))])]),_:1})}}},be=n("div",{class:"d-flex"},"Cor do texto:",-1),ke=n("div",{class:"d-flex"},"Cor de fundo do texto:",-1),ge={emits:["cancel","add"],setup(m,{emit:u}){const o=L(),p=Y({name:A().required().label("Nome"),is_default:q().required().label("Padrão"),status:q().required().label("Status"),color:A().label("Cor do texto"),bg_color:A().label("Cor de fundo do texto")}),{handleSubmit:V,errors:g,isSubmitting:S}=se({validationSchema:p,initialValues:{name:"",is_default:!1,status:!0,color:"#cecece",bg_color:"#cecece"}}),y=V(async D=>{await o.storeTaskStatus(D),u("add")}),f=j(""),{value:d}=x("name"),{value:r}=x("is_default"),{value:l}=x("status"),{value:_}=x("color"),{value:C}=x("bg_color"),$=[["#FF0000","#00FF00","#0000FF","#FFFF00"],["#FF00FF","#00FFFF","#800000","#808000"],["#800080","#008080","#000080","#FFA500"],["#A52A2A","#008000","#FFD700","#4B0082"]];return(D,c)=>(v(),N(I,null,[f.value?(v(),T(Z,{key:0,color:"error",class:"mb-2"},{default:t(()=>[k(U(f.value),1)]),_:1})):E("",!0),e(le,{onSubmit:ae(a(y),["prevent"])},{default:t(()=>[e(ee,null,{default:t(()=>[e(b,null,{default:t(()=>[e(i,{cols:"12"},{default:t(()=>[e(te,{modelValue:a(d),"onUpdate:modelValue":c[0]||(c[0]=s=>h(d)?d.value=s:null),"error-messages":a(g).name,label:"Nome",variant:"outlined",color:"primary"},null,8,["modelValue","error-messages"])]),_:1})]),_:1}),e(b,null,{default:t(()=>[e(i,{cols:"12",md:"6"},{default:t(()=>[e(z,{modelValue:a(r),"onUpdate:modelValue":c[1]||(c[1]=s=>h(r)?r.value=s:null),label:a(r)?"Padrão":"Não é Padrão",color:"primary",inset:""},null,8,["modelValue","label"])]),_:1}),e(i,{cols:"12",md:"6"},{default:t(()=>[e(z,{modelValue:a(l),"onUpdate:modelValue":c[2]||(c[2]=s=>h(l)?l.value=s:null),label:a(l)?"Ativo":"Inativo",color:"primary",inset:""},null,8,["modelValue","label"])]),_:1})]),_:1}),e(b,null,{default:t(()=>[e(i,{cols:"12"},{default:t(()=>[be,e(B,{modelValue:a(_),"onUpdate:modelValue":c[3]||(c[3]=s=>h(_)?_.value=s:null),swatches:$,class:"ma-2","hide-mode-switch":"","hide-canvas":"","hide-inputs":"","hide-sliders":"","show-swatches":"","error-messages":a(g).color},null,8,["modelValue","error-messages"])]),_:1})]),_:1}),e(b,null,{default:t(()=>[e(i,{cols:"12"},{default:t(()=>[ke,e(B,{modelValue:a(C),"onUpdate:modelValue":c[4]||(c[4]=s=>h(C)?C.value=s:null),swatches:$,class:"ma-2","hide-mode-switch":"","hide-canvas":"","hide-inputs":"","hide-sliders":"","show-swatches":"","error-messages":a(g).bg_color},null,8,["modelValue","error-messages"])]),_:1})]),_:1}),e(b,{justify:"end"},{default:t(()=>[e(i,{cols:"auto"},{default:t(()=>[e(w,{flat:"",text:"Cancelar",onClick:c[5]||(c[5]=s=>u("cancel"))})]),_:1}),e(i,{cols:"auto"},{default:t(()=>[e(w,{type:"submit",color:"primary",flat:"",loading:a(S),text:"Adicionar"},null,8,["loading"])]),_:1})]),_:1})]),_:1})]),_:1},8,["onSubmit"])],64))}},Se=n("div",{class:"d-flex"},"Cor do texto:",-1),Fe=n("div",{class:"d-flex"},"Cor de fundo do texto:",-1),xe={props:{taskStatus:{type:Object,required:!0}},emits:["cancel","edit"],setup(m,{emit:u}){const o=m,p=L(),V=Y({name:A().required().label("Nome"),is_default:q().required().label("Padrão"),status:q().required().label("Status"),color:A().label("Cor do texto"),bg_color:A().label("Cor de fundo do texto")}),{handleSubmit:g,errors:S,isSubmitting:y}=se({validationSchema:V,initialValues:{name:o.taskStatus.name,is_default:o.taskStatus.is_default,status:o.taskStatus.status,color:o.taskStatus.color,bg_color:o.taskStatus.bg_color}}),f=g(async c=>{await p.updateTaskStatus(o.taskStatus.id,c),u("edit")}),d=j(""),{value:r}=x("name"),{value:l}=x("is_default"),{value:_}=x("status"),{value:C}=x("color"),{value:$}=x("bg_color"),D=[["#FF0000","#00FF00","#0000FF","#FFFF00"],["#FF00FF","#00FFFF","#800000","#808000"],["#800080","#008080","#000080","#FFA500"],["#A52A2A","#008000","#FFD700","#4B0082"]];return(c,s)=>(v(),N(I,null,[d.value?(v(),T(Z,{key:0,color:"error",class:"mb-2"},{default:t(()=>[k(U(d.value),1)]),_:1})):E("",!0),e(le,{onSubmit:ae(a(f),["prevent"])},{default:t(()=>[e(ee,null,{default:t(()=>[e(b,null,{default:t(()=>[e(i,{cols:"12"},{default:t(()=>[e(te,{modelValue:a(r),"onUpdate:modelValue":s[0]||(s[0]=F=>h(r)?r.value=F:null),"error-messages":a(S).name,label:"Nome",variant:"outlined",color:"primary"},null,8,["modelValue","error-messages"])]),_:1})]),_:1}),e(b,null,{default:t(()=>[e(i,{cols:"12",md:"6"},{default:t(()=>[e(z,{modelValue:a(l),"onUpdate:modelValue":s[1]||(s[1]=F=>h(l)?l.value=F:null),label:a(l)?"Padrão":"Não é Padrão",color:"primary",inset:""},null,8,["modelValue","label"])]),_:1}),e(i,{cols:"12",md:"6"},{default:t(()=>[e(z,{modelValue:a(_),"onUpdate:modelValue":s[2]||(s[2]=F=>h(_)?_.value=F:null),label:a(_)?"Ativo":"Inativo",color:"primary",inset:""},null,8,["modelValue","label"])]),_:1})]),_:1}),e(b,null,{default:t(()=>[e(i,{cols:"12"},{default:t(()=>[Se,e(B,{modelValue:a(C),"onUpdate:modelValue":s[3]||(s[3]=F=>h(C)?C.value=F:null),swatches:D,class:"ma-2","hide-mode-switch":"","hide-canvas":"","hide-inputs":"","hide-sliders":"","show-swatches":"","error-messages":a(S).color},null,8,["modelValue","error-messages"])]),_:1})]),_:1}),e(b,null,{default:t(()=>[e(i,{cols:"12"},{default:t(()=>[Fe,e(B,{modelValue:a($),"onUpdate:modelValue":s[4]||(s[4]=F=>h($)?$.value=F:null),swatches:D,class:"ma-2","hide-mode-switch":"","hide-canvas":"","hide-inputs":"","hide-sliders":"","show-swatches":"","error-messages":a(S).bg_color},null,8,["modelValue","error-messages"])]),_:1})]),_:1}),e(b,{justify:"end"},{default:t(()=>[e(i,{cols:"auto"},{default:t(()=>[e(w,{flat:"",text:"Cancelar",onClick:s[5]||(s[5]=F=>u("cancel"))})]),_:1}),e(i,{cols:"auto"},{default:t(()=>[e(w,{type:"submit",color:"primary",flat:"",loading:a(y),text:"Editar"},null,8,["loading"])]),_:1})]),_:1})]),_:1})]),_:1},8,["onSubmit"])],64))}},ye={class:"mb-5 pb-5 border-b border-opacity-100"},we=n("h1",{class:"text-h3"},"Status dos Chamados",-1),Ce=k("Novo status "),$e=k("Adicionar status"),Te=k("Editar status"),Ae=k(" Cancelar "),Ne=k(" Deletar "),Ee=re({setup(m){const u=L(),{toEdit:o,toDelete:p}=X(u),{isLoading:V}=ie(u.getTasksStatus()),g=J({get(){return!!Object.keys(o.value).length},set(d){d||(o.value={})}}),S=J({get(){return!!Object.keys(p.value).length},set(d){d||(p.value={})}}),y=j(!1);async function f(d){y.value=!0,await u.deleteTaskStatus(d.id),p.value={},y.value=!1}return j([{text:"2 New Task",disabled:!0,href:"#"}]),(d,r)=>(v(),N("div",null,[n("div",ye,[e(b,null,{default:t(()=>[e(i,null,{default:t(()=>[we]),_:1}),e(i,{class:"text-right"},{default:t(()=>[e(O,{width:"auto"},{activator:t(({props:l})=>[e(w,G({flat:"",color:"primary"},l),{default:t(()=>[Ce]),_:2},1040)]),default:t(({isActive:l})=>[e(R,{width:"400"},{default:t(()=>[e(K,null,{default:t(()=>[$e]),_:1}),e(Q,null,{default:t(()=>[e(ge,{onAdd:_=>l.value=!1,onCancel:_=>l.value=!1},null,8,["onAdd","onCancel"])]),_:2},1024)]),_:2},1024)]),_:1})]),_:1})]),_:1})]),a(V)?(v(),T(me,{key:0,width:3,color:"primary",indeterminate:""})):(v(),N(I,{key:1},[e(Ve),e(O,{modelValue:a(g),"onUpdate:modelValue":r[0]||(r[0]=l=>h(g)?g.value=l:null),width:"auto"},{default:t(({isActive:l})=>[e(R,{width:"400"},{default:t(()=>[e(K,null,{default:t(()=>[Te]),_:1}),e(Q,null,{default:t(()=>[e(xe,{taskStatus:a(o),onCancel:_=>l.value=!1,onEdit:_=>l.value=!1},null,8,["taskStatus","onCancel","onEdit"])]),_:2},1024)]),_:2},1024)]),_:1},8,["modelValue"]),e(O,{modelValue:a(S),"onUpdate:modelValue":r[2]||(r[2]=l=>h(S)?S.value=l:null),width:"auto"},{default:t(({isActive:l})=>[e(R,{"prepend-icon":a(W),title:"Você tem certeza que deseja deletar este status?"},{actions:t(()=>[e(ce),e(w,{onClick:_=>l.value=!1},{default:t(()=>[Ae]),_:2},1032,["onClick"]),e(w,{onClick:r[1]||(r[1]=_=>f(a(p))),variant:"tonal",color:"error",loading:y.value},{default:t(()=>[Ne]),_:1},8,["loading"])]),_:2},1032,["prepend-icon"])]),_:1},8,["modelValue"])],64))]))}});export{Ee as default};