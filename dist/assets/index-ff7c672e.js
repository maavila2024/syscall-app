import{i as re,j as Y}from"./vue-tabler-icons.es-4e540416.js";import{a8 as de,a9 as z,a6 as Z,o as x,e as B,w as t,a as i,c as q,q as ue,d as V,t as E,i as M,l as X,b as e,V as C,p as W,y as l,z as G,F as J,aa as ne,ab as ee,ac as N,an as U,J as T,ad as te,a3 as le,a7 as F,a1 as s,ae,af as v,ao as D,ap as I,W as oe,ag as se,ah as ce,B as H,ai as R,aj as L,ak as K,al as Q,X as me,am as fe}from"./index-f3a8f3ae.js";import{u as ie,a as y}from"./vee-validate.esm-f29a4fe7.js";/* empty css                                                       */const O=de("priorities",{state:()=>({priorities:[],toEdit:{},toDelete:{}}),actions:{async getPriorities(){this.priorities=await z.get("api/priorities").then(p=>p.data.data)},async storePriority(p){await z.post("api/priorities",p).then(r=>r.data.data),await this.getPriorities()},async updatePriority(p,r){const o=await z.put(`api/priorities/${p}`,r).then(g=>g.data.data),b=this.priorities.findIndex(g=>g.id===p);this.priorities.splice(b,1,o),this.getPriorities()},async deletePriority(p){await z.delete(`api/priorities/${p}`).then(o=>o.data.data);const r=this.priorities.findIndex(o=>o.id===p);this.priorities.splice(r,1)}}}),pe=i("thead",null,[i("tr",null,[i("th",{class:"text-left"},"Nome"),i("th",{class:"text-left"},"Ativo/Inativo"),i("th",{class:"text-left"},"Justificar"),i("th",{class:"text-left"},"Ações")])],-1),_e=V(" Default "),ve={class:"text-right"},Ve={class:"d-flex align-center"},be={setup(p){const r=O(),{priorities:o,toEdit:b,toDelete:g}=Z(r);return(w,$)=>(x(),B(ne,{class:"border-opacity-100"},{default:t(()=>[pe,i("tbody",null,[(x(!0),q(J,null,ue(l(o),(u,k)=>(x(),q("tr",{key:k},[i("td",null,[V(E(u.name)+" ",1),u.is_default?(x(),B(M,{key:0,size:"small",variant:"tonal",color:"primary",class:"ml-2"},{default:t(()=>[_e]),_:1})):X("",!0)]),i("td",null,[e(M,{size:"small",variant:"tonal",color:"primary",class:"ml-2"},{default:t(()=>[V(E(u.status?"Ativo":"Inativo"),1)]),_:2},1024)]),i("td",null,[e(M,{size:"small",variant:"tonal",color:"primary",class:"ml-2"},{default:t(()=>[V(E(u.justify?"Sim":"Não"),1)]),_:2},1024)]),i("td",ve,[i("div",Ve,[e(G,{text:"Edit"},{activator:t(({props:n})=>[e(C,W({icon:"",flat:"",onClick:c=>b.value=u},n),{default:t(()=>[e(l(re),{"stroke-width":"1.5",size:"20",class:"text-primary"})]),_:2},1040,["onClick"])]),_:2},1024),e(G,{text:"Delete"},{activator:t(({props:n})=>[e(C,W({icon:"",flat:"",onClick:c=>g.value=u},n),{default:t(()=>[e(l(Y),{"stroke-width":"1.5",size:"20",class:"text-error"})]),_:2},1040,["onClick"])]),_:2},1024)])])]))),128))])]),_:1}))}},he=i("div",{class:"d-flex"},"Cor do texto:",-1),ye=i("div",{class:"d-flex"},"Cor de fundo do texto:",-1),ge={emits:["cancel","add"],setup(p,{emit:r}){const o=O(),b=ee({name:N().required().label("Nome"),is_default:U().required().label("Padrão"),status:U().required().label("Status"),justify:U().required().label("Justificar"),color:N().label("Cor do texto"),bg_color:N().label("Cor de fundo do texto")}),{handleSubmit:g,errors:w,isSubmitting:$}=ie({validationSchema:b,initialValues:{name:"",is_default:!1,status:!0,justify:!1,color:"#cecece",bg_color:"#cecece"}}),u=g(async A=>{await o.storePriority(A),r("add")}),k=T(""),{value:n}=y("name"),{value:c}=y("is_default"),{value:a}=y("status"),{value:m}=y("justify"),{value:P}=y("color"),{value:S}=y("bg_color"),j=[["#FF0000","#00FF00","#0000FF","#FFFF00"],["#FF00FF","#00FFFF","#800000","#808000"],["#800080","#008080","#000080","#FFA500"],["#A52A2A","#008000","#FFD700","#4B0082"]];return(A,d)=>(x(),q(J,null,[k.value?(x(),B(te,{key:0,color:"error",class:"mb-2"},{default:t(()=>[V(E(k.value),1)]),_:1})):X("",!0),e(se,{onSubmit:oe(l(u),["prevent"])},{default:t(()=>[e(le,null,{default:t(()=>[e(F,null,{default:t(()=>[e(s,{cols:"12",md:"6"},{default:t(()=>[e(ae,{modelValue:l(n),"onUpdate:modelValue":d[0]||(d[0]=f=>v(n)?n.value=f:null),"error-messages":l(w).name,label:"Nome",variant:"outlined",color:"primary"},null,8,["modelValue","error-messages"])]),_:1}),e(s,{cols:"12",md:"6"},{default:t(()=>[e(D,{modelValue:l(c),"onUpdate:modelValue":d[1]||(d[1]=f=>v(c)?c.value=f:null),label:l(c)?"Padrão":"Não é Padrão",color:"primary",inset:""},null,8,["modelValue","label"])]),_:1})]),_:1}),e(F,null,{default:t(()=>[e(s,{cols:"12",md:"6"},{default:t(()=>[e(D,{modelValue:l(a),"onUpdate:modelValue":d[2]||(d[2]=f=>v(a)?a.value=f:null),label:l(a)?"Ativo":"Inativo",color:"primary",inset:""},null,8,["modelValue","label"])]),_:1}),e(s,{cols:"12",md:"6"},{default:t(()=>[e(D,{modelValue:l(m),"onUpdate:modelValue":d[3]||(d[3]=f=>v(m)?m.value=f:null),label:l(m)?"Justificar":"Não justificar",color:"primary",inset:""},null,8,["modelValue","label"])]),_:1})]),_:1}),e(F,null,{default:t(()=>[e(s,{cols:"12"},{default:t(()=>[he,e(I,{modelValue:l(P),"onUpdate:modelValue":d[4]||(d[4]=f=>v(P)?P.value=f:null),swatches:j,class:"ma-2","hide-mode-switch":"","hide-canvas":"","hide-inputs":"","hide-sliders":"","show-swatches":"","error-messages":l(w).color},null,8,["modelValue","error-messages"])]),_:1})]),_:1}),e(F,null,{default:t(()=>[e(s,{cols:"12"},{default:t(()=>[ye,e(I,{modelValue:l(S),"onUpdate:modelValue":d[5]||(d[5]=f=>v(S)?S.value=f:null),swatches:j,class:"ma-2","hide-mode-switch":"","hide-canvas":"","hide-inputs":"","hide-sliders":"","show-swatches":"","error-messages":l(w).bg_color},null,8,["modelValue","error-messages"])]),_:1})]),_:1}),e(F,{justify:"end"},{default:t(()=>[e(s,{cols:"auto"},{default:t(()=>[e(C,{flat:"",text:"Cancelar",onClick:d[6]||(d[6]=f=>r("cancel"))})]),_:1}),e(s,{cols:"auto"},{default:t(()=>[e(C,{type:"submit",color:"primary",flat:"",loading:l($),text:"Adicionar"},null,8,["loading"])]),_:1})]),_:1})]),_:1})]),_:1},8,["onSubmit"])],64))}},Fe=i("div",{class:"d-flex"},"Cor do texto:",-1),xe=i("div",{class:"d-flex"},"Cor de fundo do texto:",-1),we=V("Cancelar"),Ce=V("Editar"),$e={props:{priority:{type:Object,required:!0}},emits:["cancel","edit"],setup(p,{emit:r}){const o=p,b=T(!0),g=O(),w=ee({name:N().required().label("Nome"),is_default:U().required().label("Padrão"),status:U().required().label("Status"),justify:U().required().label("Justificar"),color:N().label("Cor do texto"),bg_color:N().label("Cor de fundo do texto")}),{handleSubmit:$,errors:u,isSubmitting:k}=ie({validationSchema:w,initialValues:{name:o.priority.name,is_default:o.priority.is_default,status:o.priority.status,justify:o.priority.justify,color:o.priority.color,bg_color:o.priority.bg_color}}),n=$(async f=>{await g.updatePriority(o.priority.id,f),r("edit"),b.value=!1}),c=T(""),{value:a}=y("name"),{value:m}=y("is_default"),{value:P}=y("status"),{value:S}=y("justify"),{value:j}=y("color"),{value:A}=y("bg_color"),d=[["#FF0000","#00FF00","#0000FF","#FFFF00"],["#FF00FF","#00FFFF","#800000","#808000"],["#800080","#008080","#000080","#FFA500"],["#A52A2A","#008000","#FFD700","#4B0082"]];return(f,_)=>(x(),q(J,null,[c.value?(x(),B(te,{key:0,color:"error",class:"mb-2"},{default:t(()=>[V(E(c.value),1)]),_:1})):X("",!0),e(se,{onSubmit:oe(l(n),["prevent"])},{default:t(()=>[e(le,null,{default:t(()=>[e(F,null,{default:t(()=>[e(s,{cols:"12",md:"6"},{default:t(()=>[e(ae,{modelValue:l(a),"onUpdate:modelValue":_[0]||(_[0]=h=>v(a)?a.value=h:null),"error-messages":l(u).name,label:"Nome",variant:"outlined",color:"primary"},null,8,["modelValue","error-messages"])]),_:1}),e(s,{cols:"12",md:"6"},{default:t(()=>[e(D,{modelValue:l(m),"onUpdate:modelValue":_[1]||(_[1]=h=>v(m)?m.value=h:null),label:l(m)?"Padrão":"Não é Padrão",color:"primary",inset:""},null,8,["modelValue","label"])]),_:1})]),_:1}),e(F,null,{default:t(()=>[e(s,{cols:"12",md:"6"},{default:t(()=>[e(D,{modelValue:l(P),"onUpdate:modelValue":_[2]||(_[2]=h=>v(P)?P.value=h:null),label:l(P)?"Ativo":"Inativo",color:"primary",inset:""},null,8,["modelValue","label"])]),_:1}),e(s,{cols:"12",md:"6"},{default:t(()=>[e(D,{modelValue:l(S),"onUpdate:modelValue":_[3]||(_[3]=h=>v(S)?S.value=h:null),label:l(S)?"Justificar":"Não justificar",color:"primary",inset:""},null,8,["modelValue","label"])]),_:1})]),_:1}),e(F,null,{default:t(()=>[e(s,{cols:"12"},{default:t(()=>[Fe,e(I,{modelValue:l(j),"onUpdate:modelValue":_[4]||(_[4]=h=>v(j)?j.value=h:null),swatches:d,class:"ma-2","hide-mode-switch":"","hide-canvas":"","hide-inputs":"","hide-sliders":"","show-swatches":"","error-messages":l(u).color},null,8,["modelValue","error-messages"])]),_:1})]),_:1}),e(F,null,{default:t(()=>[e(s,{cols:"12"},{default:t(()=>[xe,e(I,{modelValue:l(A),"onUpdate:modelValue":_[5]||(_[5]=h=>v(A)?A.value=h:null),swatches:d,class:"ma-2","hide-mode-switch":"","hide-canvas":"","hide-inputs":"","hide-sliders":"","show-swatches":"","error-messages":l(u).bg_color},null,8,["modelValue","error-messages"])]),_:1})]),_:1}),e(F,{justify:"end"},{default:t(()=>[e(s,{cols:"auto"},{default:t(()=>[e(C,{flat:"",onClick:_[6]||(_[6]=h=>r("cancel"))},{default:t(()=>[we]),_:1})]),_:1}),e(s,{cols:"auto"},{default:t(()=>[e(C,{type:"submit",color:"primary",flat:"",loading:l(k)},{default:t(()=>[Ce]),_:1},8,["loading"])]),_:1})]),_:1})]),_:1})]),_:1},8,["onSubmit"])],64))}},ke={class:"mb-5 pb-5 border-b border-opacity-100"},Pe=i("h1",{class:"text-h3"},"Prioridades dos chamados",-1),Se=V("Nova prioridade "),je=V("Adicionar prioridade"),Ae=V("Editar prioridade"),Ne=V(" Cancelar "),Ue=V(" Deletar "),Te={setup(p){const r=O(),{toEdit:o,toDelete:b}=Z(r),{isLoading:g}=ce(r.getPriorities()),w=H({get(){return!!Object.keys(o.value).length},set(n){n||(o.value={})}}),$=H({get(){return!!Object.keys(b.value).length},set(n){n||(b.value={})}}),u=T(!1);async function k(n){u.value=!0,await r.deletePriority(n.id),b.value={},u.value=!1}return T([{text:"2 New Priority",disabled:!0,href:"#"}]),(n,c)=>(x(),q("div",null,[i("div",ke,[e(F,null,{default:t(()=>[e(s,null,{default:t(()=>[Pe]),_:1}),e(s,{class:"text-right"},{default:t(()=>[e(R,{width:"auto"},{activator:t(({props:a})=>[e(C,W({flat:"",color:"primary"},a),{default:t(()=>[Se]),_:2},1040)]),default:t(({isActive:a})=>[e(L,{width:"400"},{default:t(()=>[e(K,null,{default:t(()=>[je]),_:1}),e(Q,null,{default:t(()=>[e(ge,{onAdd:m=>a.value=!1,onCancel:m=>a.value=!1},null,8,["onAdd","onCancel"])]),_:2},1024)]),_:2},1024)]),_:1})]),_:1})]),_:1})]),l(g)?(x(),B(fe,{key:0,width:3,color:"primary",indeterminate:""})):(x(),q(J,{key:1},[e(be),e(R,{modelValue:l(w),"onUpdate:modelValue":c[0]||(c[0]=a=>v(w)?w.value=a:null),width:"auto"},{default:t(({isActive:a})=>[e(L,{width:"400"},{default:t(()=>[e(K,null,{default:t(()=>[Ae]),_:1}),e(Q,null,{default:t(()=>[e($e,{priority:l(o),onCancel:m=>a.value=!1,onEdit:m=>a.value=!1},null,8,["priority","onCancel","onEdit"])]),_:2},1024)]),_:2},1024)]),_:1},8,["modelValue"]),e(R,{modelValue:l($),"onUpdate:modelValue":c[2]||(c[2]=a=>v($)?$.value=a:null),width:"auto"},{default:t(({isActive:a})=>[e(L,{"prepend-icon":l(Y),title:"Você tem certeza que deseja deletar esta prioridade?"},{actions:t(()=>[e(me),e(C,{onClick:m=>a.value=!1},{default:t(()=>[Ne]),_:2},1032,["onClick"]),e(C,{onClick:c[1]||(c[1]=m=>k(l(b))),variant:"tonal",color:"error",loading:u.value},{default:t(()=>[Ue]),_:1},8,["loading"])]),_:2},1032,["prepend-icon"])]),_:1},8,["modelValue"])],64))]))}};export{Te as default};
