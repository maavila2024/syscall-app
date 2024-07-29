import{i as oe,j as K}from"./vue-tabler-icons.es-4e540416.js";import{a8 as ue,a9 as U,a6 as Q,o as v,e as T,w as t,a as u,c as N,q as de,d as k,t as P,i as O,l as E,b as e,V as w,p as J,y as a,z as W,F as I,aa as ne,ab as Y,ac as A,an as q,J as j,ad as Z,a3 as ee,a7 as b,a1 as n,ae as te,af as h,ao as B,ap as z,W as ae,ag as le,C as re,ah as ie,B as X,ai as R,aj as L,ak as G,al as H,X as ce,am as me}from"./index-f3a8f3ae.js";import{u as se,a as y}from"./vee-validate.esm-f29a4fe7.js";const M=ue("tasksStatus",{state:()=>({tasksStatus:[],toEdit:{},toDelete:{}}),actions:{async getTasksStatus(){this.tasksStatus=await U.get("api/tasks-status").then(f=>f.data.data)},async storeTaskStatus(f){await U.post("api/tasks-status",f).then(d=>d.data.data),await this.getTasksStatus()},async updateTaskStatus(f,d){const o=await U.put(`api/tasks-status/${f}`,d).then(V=>V.data.data),p=this.tasksStatus.findIndex(V=>V.id===f);this.tasksStatus.splice(p,1,o),this.getTasksStatus()},async deleteTaskStatus(f){await U.delete(`api/tasks-status/${f}`).then(o=>o.data.data);const d=this.tasksStatus.findIndex(o=>o.id===f);this.tasksStatus.splice(d,1)}}}),fe=u("thead",null,[u("tr",null,[u("th",{class:"text-left"},"Nome"),u("th",{class:"text-left"},"Padrão"),u("th",{class:"text-left"},"Ativo/Inativo"),u("th",{class:"text-left"},"Ações")])],-1),_e=k(" Default "),pe=k(" Default "),ve={class:"text-right"},he={class:"d-flex align-center"},Ve={setup(f){const d=M(),{tasksStatus:o,toEdit:p,toDelete:V}=Q(d);return(g,F)=>(v(),T(ne,{class:"border-opacity-100"},{default:t(()=>[fe,u("tbody",null,[(v(!0),N(I,null,de(a(o),r=>(v(),N("tr",{key:r.name},[u("td",null,[k(P(r.name)+" ",1),r.default?(v(),T(O,{key:0,size:"small",variant:"tonal",color:"primary",class:"ml-2"},{default:t(()=>[_e]),_:1})):E("",!0)]),u("td",null,[r.is_default?(v(),T(O,{key:0,size:"small",variant:"tonal",color:"primary",class:"ml-2"},{default:t(()=>[pe]),_:1})):E("",!0)]),u("td",null,[e(O,{size:"small",variant:"tonal",color:"primary",class:"ml-2"},{default:t(()=>[k(P(r.status?"Ativo":"Inativo"),1)]),_:2},1024)]),u("td",ve,[u("div",he,[e(W,{text:"Edit"},{activator:t(({props:S})=>[e(w,J({icon:"",flat:"",onClick:i=>p.value=r},S),{default:t(()=>[e(a(oe),{"stroke-width":"1.5",size:"20",class:"text-primary"})]),_:2},1040,["onClick"])]),_:2},1024),e(W,{text:"Delete"},{activator:t(({props:S})=>[e(w,J({icon:"",flat:"",onClick:i=>V.value=r},S),{default:t(()=>[e(a(K),{"stroke-width":"1.5",size:"20",class:"text-error"})]),_:2},1040,["onClick"])]),_:2},1024)])])]))),128))])]),_:1}))}},be=u("div",{class:"d-flex"},"Cor do texto:",-1),ke=u("div",{class:"d-flex"},"Cor de fundo do texto:",-1),ge={emits:["cancel","add"],setup(f,{emit:d}){const o=M(),p=Y({name:A().required().label("Nome"),is_default:q().required().label("Padrão"),status:q().required().label("Status"),color:A().label("Cor do texto"),bg_color:A().label("Cor de fundo do texto")}),{handleSubmit:V,errors:g,isSubmitting:F}=se({validationSchema:p,initialValues:{name:"",is_default:!1,status:!0,color:"#cecece",bg_color:"#cecece"}}),r=V(async D=>{await o.storeTaskStatus(D),d("add")}),S=j(""),{value:i}=y("name"),{value:c}=y("is_default"),{value:l}=y("status"),{value:_}=y("color"),{value:C}=y("bg_color"),$=[["#FF0000","#00FF00","#0000FF","#FFFF00"],["#FF00FF","#00FFFF","#800000","#808000"],["#800080","#008080","#000080","#FFA500"],["#A52A2A","#008000","#FFD700","#4B0082"]];return(D,m)=>(v(),N(I,null,[S.value?(v(),T(Z,{key:0,color:"error",class:"mb-2"},{default:t(()=>[k(P(S.value),1)]),_:1})):E("",!0),e(le,{onSubmit:ae(a(r),["prevent"])},{default:t(()=>[e(ee,null,{default:t(()=>[e(b,null,{default:t(()=>[e(n,{cols:"12"},{default:t(()=>[e(te,{modelValue:a(i),"onUpdate:modelValue":m[0]||(m[0]=s=>h(i)?i.value=s:null),"error-messages":a(g).name,label:"Nome",variant:"outlined",color:"primary"},null,8,["modelValue","error-messages"])]),_:1})]),_:1}),e(b,null,{default:t(()=>[e(n,{cols:"12",md:"6"},{default:t(()=>[e(B,{modelValue:a(c),"onUpdate:modelValue":m[1]||(m[1]=s=>h(c)?c.value=s:null),label:a(c)?"Padrão":"Não é Padrão",color:"primary",inset:""},null,8,["modelValue","label"])]),_:1}),e(n,{cols:"12",md:"6"},{default:t(()=>[e(B,{modelValue:a(l),"onUpdate:modelValue":m[2]||(m[2]=s=>h(l)?l.value=s:null),label:a(l)?"Ativo":"Inativo",color:"primary",inset:""},null,8,["modelValue","label"])]),_:1})]),_:1}),e(b,null,{default:t(()=>[e(n,{cols:"12"},{default:t(()=>[be,e(z,{modelValue:a(_),"onUpdate:modelValue":m[3]||(m[3]=s=>h(_)?_.value=s:null),swatches:$,class:"ma-2","hide-mode-switch":"","hide-canvas":"","hide-inputs":"","hide-sliders":"","show-swatches":"","error-messages":a(g).color},null,8,["modelValue","error-messages"])]),_:1})]),_:1}),e(b,null,{default:t(()=>[e(n,{cols:"12"},{default:t(()=>[ke,e(z,{modelValue:a(C),"onUpdate:modelValue":m[4]||(m[4]=s=>h(C)?C.value=s:null),swatches:$,class:"ma-2","hide-mode-switch":"","hide-canvas":"","hide-inputs":"","hide-sliders":"","show-swatches":"","error-messages":a(g).bg_color},null,8,["modelValue","error-messages"])]),_:1})]),_:1}),e(b,{justify:"end"},{default:t(()=>[e(n,{cols:"auto"},{default:t(()=>[e(w,{flat:"",text:"Cancelar",onClick:m[5]||(m[5]=s=>d("cancel"))})]),_:1}),e(n,{cols:"auto"},{default:t(()=>[e(w,{type:"submit",color:"primary",flat:"",loading:a(F),text:"Adicionar"},null,8,["loading"])]),_:1})]),_:1})]),_:1})]),_:1},8,["onSubmit"])],64))}},Fe=u("div",{class:"d-flex"},"Cor do texto:",-1),Se=u("div",{class:"d-flex"},"Cor de fundo do texto:",-1),xe={props:{taskStatus:{type:Object,required:!0}},emits:["cancel","edit"],setup(f,{emit:d}){const o=f,p=M(),V=Y({name:A().required().label("Nome"),is_default:q().required().label("Padrão"),status:q().required().label("Status"),color:A().label("Cor do texto"),bg_color:A().label("Cor de fundo do texto")}),{handleSubmit:g,errors:F,isSubmitting:r}=se({validationSchema:V,initialValues:{name:o.taskStatus.name,is_default:o.taskStatus.is_default,status:o.taskStatus.status,color:o.taskStatus.color,bg_color:o.taskStatus.bg_color}}),S=g(async m=>{await p.updateTaskStatus(o.taskStatus.id,m),d("edit")}),i=j(""),{value:c}=y("name"),{value:l}=y("is_default"),{value:_}=y("status"),{value:C}=y("color"),{value:$}=y("bg_color"),D=[["#FF0000","#00FF00","#0000FF","#FFFF00"],["#FF00FF","#00FFFF","#800000","#808000"],["#800080","#008080","#000080","#FFA500"],["#A52A2A","#008000","#FFD700","#4B0082"]];return(m,s)=>(v(),N(I,null,[i.value?(v(),T(Z,{key:0,color:"error",class:"mb-2"},{default:t(()=>[k(P(i.value),1)]),_:1})):E("",!0),e(le,{onSubmit:ae(a(S),["prevent"])},{default:t(()=>[e(ee,null,{default:t(()=>[e(b,null,{default:t(()=>[e(n,{cols:"12"},{default:t(()=>[e(te,{modelValue:a(c),"onUpdate:modelValue":s[0]||(s[0]=x=>h(c)?c.value=x:null),"error-messages":a(F).name,label:"Nome",variant:"outlined",color:"primary"},null,8,["modelValue","error-messages"])]),_:1})]),_:1}),e(b,null,{default:t(()=>[e(n,{cols:"12",md:"6"},{default:t(()=>[e(B,{modelValue:a(l),"onUpdate:modelValue":s[1]||(s[1]=x=>h(l)?l.value=x:null),label:a(l)?"Padrão":"Não é Padrão",color:"primary",inset:""},null,8,["modelValue","label"])]),_:1}),e(n,{cols:"12",md:"6"},{default:t(()=>[e(B,{modelValue:a(_),"onUpdate:modelValue":s[2]||(s[2]=x=>h(_)?_.value=x:null),label:a(_)?"Ativo":"Inativo",color:"primary",inset:""},null,8,["modelValue","label"])]),_:1})]),_:1}),e(b,null,{default:t(()=>[e(n,{cols:"12"},{default:t(()=>[Fe,e(z,{modelValue:a(C),"onUpdate:modelValue":s[3]||(s[3]=x=>h(C)?C.value=x:null),swatches:D,class:"ma-2","hide-mode-switch":"","hide-canvas":"","hide-inputs":"","hide-sliders":"","show-swatches":"","error-messages":a(F).color},null,8,["modelValue","error-messages"])]),_:1})]),_:1}),e(b,null,{default:t(()=>[e(n,{cols:"12"},{default:t(()=>[Se,e(z,{modelValue:a($),"onUpdate:modelValue":s[4]||(s[4]=x=>h($)?$.value=x:null),swatches:D,class:"ma-2","hide-mode-switch":"","hide-canvas":"","hide-inputs":"","hide-sliders":"","show-swatches":"","error-messages":a(F).bg_color},null,8,["modelValue","error-messages"])]),_:1})]),_:1}),e(b,{justify:"end"},{default:t(()=>[e(n,{cols:"auto"},{default:t(()=>[e(w,{flat:"",text:"Cancelar",onClick:s[5]||(s[5]=x=>d("cancel"))})]),_:1}),e(n,{cols:"auto"},{default:t(()=>[e(w,{type:"submit",color:"primary",flat:"",loading:a(r),text:"Editar"},null,8,["loading"])]),_:1})]),_:1})]),_:1})]),_:1},8,["onSubmit"])],64))}},ye={class:"mb-5 pb-5 border-b border-opacity-100"},we=u("h1",{class:"text-h3"},"Status dos Chamados",-1),Ce=k("Novo status "),$e=k("Adicionar status"),Te=k("Editar status"),Ae=k(" Cancelar "),Ne=k(" Deletar "),Ee=re({setup(f){const d=M(),{toEdit:o,toDelete:p}=Q(d),{isLoading:V}=ie(d.getTasksStatus()),g=X({get(){return!!Object.keys(o.value).length},set(i){i||(o.value={})}}),F=X({get(){return!!Object.keys(p.value).length},set(i){i||(p.value={})}}),r=j(!1);async function S(i){r.value=!0,await d.deleteTaskStatus(i.id),p.value={},r.value=!1}return j([{text:"2 New Task",disabled:!0,href:"#"}]),(i,c)=>(v(),N("div",null,[u("div",ye,[e(b,null,{default:t(()=>[e(n,null,{default:t(()=>[we]),_:1}),e(n,{class:"text-right"},{default:t(()=>[e(R,{width:"auto"},{activator:t(({props:l})=>[e(w,J({flat:"",color:"primary"},l),{default:t(()=>[Ce]),_:2},1040)]),default:t(({isActive:l})=>[e(L,{width:"400"},{default:t(()=>[e(G,null,{default:t(()=>[$e]),_:1}),e(H,null,{default:t(()=>[e(ge,{onAdd:_=>l.value=!1,onCancel:_=>l.value=!1},null,8,["onAdd","onCancel"])]),_:2},1024)]),_:2},1024)]),_:1})]),_:1})]),_:1})]),a(V)?(v(),T(me,{key:0,width:3,color:"primary",indeterminate:""})):(v(),N(I,{key:1},[e(Ve),e(R,{modelValue:a(g),"onUpdate:modelValue":c[0]||(c[0]=l=>h(g)?g.value=l:null),width:"auto"},{default:t(({isActive:l})=>[e(L,{width:"400"},{default:t(()=>[e(G,null,{default:t(()=>[Te]),_:1}),e(H,null,{default:t(()=>[e(xe,{taskStatus:a(o),onCancel:_=>l.value=!1,onEdit:_=>l.value=!1},null,8,["taskStatus","onCancel","onEdit"])]),_:2},1024)]),_:2},1024)]),_:1},8,["modelValue"]),e(R,{modelValue:a(F),"onUpdate:modelValue":c[2]||(c[2]=l=>h(F)?F.value=l:null),width:"auto"},{default:t(({isActive:l})=>[e(L,{"prepend-icon":a(K),title:"Você tem certeza que deseja deletar este status?"},{actions:t(()=>[e(ce),e(w,{onClick:_=>l.value=!1},{default:t(()=>[Ae]),_:2},1032,["onClick"]),e(w,{onClick:c[1]||(c[1]=_=>S(a(p))),variant:"tonal",color:"error",loading:r.value},{default:t(()=>[Ne]),_:1},8,["loading"])]),_:2},1032,["prepend-icon"])]),_:1},8,["modelValue"])],64))]))}});export{Ee as default};
