import{P as $e,i as ye,N as qe}from"./vue-tabler-icons.es-b089f3d0.js";import{a8 as he,a9 as R,aa as de,o as w,e as L,w as a,a as b,c as Q,q as pe,t as z,d as U,i as Me,l as le,b as e,V as T,p as ue,z as t,A as ce,F as ne,ab as Ie,v as Ce,C as W,M as De,ac as ve,ar as J,ad as E,ao as we,Q as B,X as se,ae as xe,a5 as be,am as v,a3 as i,as as F,ag as d,af as N,at as re,ap as Se,Y as Te,ah as Ve,au as fe,av as je,aw as Pe,ak as oe,al as te,E as ee,H as Ae,G as Ne,m as Ee,j as Fe,ax as _e,ay as Oe,aj as ae,r as ze,ai as ie,Z as Je,an as Re}from"./index-c6c85c3e.js";import{a as n,u as ge}from"./vee-validate.esm-4770a0ce.js";const me=he("tasks",{state:()=>({tasks:[],priori:[],users:[],taskStatus:[],toEdit:{},toDelete:{},toShowChat:{},toAddChat:{}}),actions:{async getTasks(){this.tasks=await R.get("api/tasks").then(p=>p.data.data)},async getPriorities(){this.priori=await R.get("api/priorities").then(p=>p.data.data)},async getUsers(){this.users=await R.get("api/users").then(p=>p.data.data)},async getTasksStatus(){this.taskStatus=await R.get("api/tasks-status").then(p=>p.data.data)},async storeTask(p){const _=await R.post("api/tasks",p).then(o=>o.data.data);this.tasks.push(_),this.getTasks()},async updateTask(p,_){const o=await R.put(`api/tasks/${p}`,_).then(S=>S.data.data),m=this.tasks.findIndex(S=>S.id===p);this.tasks.splice(m,1,o),this.getTasks()},async deleteTask(p){await R.delete(`api/tasks/${p}`).then(o=>o.data.data);const _=this.tasks.findIndex(o=>o.id===p);this.tasks.splice(_,1)}}}),Be=b("thead",null,[b("tr",null,[b("th",{class:"text-left"},"Número do chamado"),b("th",{class:"text-left"},"Título"),b("th",{class:"text-left"},"Descrição"),b("th",{class:"text-left"},"Solicitante"),b("th",{class:"text-left"},"Responsável"),b("th",{class:"text-left"},"Status"),b("th",{class:"text-left"},"Prioridade"),b("th",{class:"text-left"},"Ações"),b("th")])],-1),Le=U(" Default "),Ge={class:"text-right"},He={class:"d-flex align-center"},Qe={setup(p){const _=me(),{tasks:o,toEdit:m,toDelete:S}=de(_);return(P,$)=>(w(),L(Ie,{class:"border-opacity-100"},{default:a(()=>[Be,b("tbody",null,[(w(!0),Q(ne,null,pe(t(o),(r,A)=>{var y;return w(),Q("tr",{key:A},[b("td",null,z(r.task_code),1),b("td",null,[U(z(r.name)+" ",1),r.default?(w(),L(Me,{key:0,size:"small",variant:"tonal",color:"primary",class:"ml-2"},{default:a(()=>[Le]),_:1})):le("",!0)]),b("td",null,z(r.description),1),b("td",null,z(r.user_owner.first_name),1),b("td",null,z(((y=r.user_responsible)==null?void 0:y.first_name)||"Nenhum responsável"),1),b("td",null,z(r.task_status.name),1),b("td",null,z(r.priority.name),1),b("td",Ge,[b("div",He,[e(ce,{text:"Editar Chamado"},{activator:a(({props:C})=>[e(T,ue({icon:"",flat:"",onClick:x=>m.value=r},C),{default:a(()=>[e(t($e),{"stroke-width":"1.5",size:"20",class:"text-primary"})]),_:2},1040,["onClick"])]),_:2},1024),e(ce,{text:"Deletar Chamado"},{activator:a(({props:C})=>[e(T,ue({icon:"",flat:"",onClick:x=>S.value=r},C),{default:a(()=>[e(t(ye),{"stroke-width":"1.5",size:"20",class:"text-error"})]),_:2},1040,["onClick"])]),_:2},1024),e(ce,{text:"Consultar Notas de Trabalho"},{activator:a(({props:C})=>[e(T,ue({icon:"",flat:"",onClick:x=>P.$emit("openChat",r)},C),{default:a(()=>[e(t(qe),{"stroke-width":"1.5",size:"20",class:"text-primary"})]),_:2},1040,["onClick"])]),_:2},1024)])])])}),128))])]),_:1}))}},Xe={emits:["cancel","add"],setup(p,{emit:_}){const o=Ce(),m=me(),S=[{label:"Grãos",value:1},{label:"Proteína",value:2}],P=[{label:"É uma melhoria ?",value:1},{label:"É algo novo ?",value:2}],$=W(()=>{var h;return((h=m.priori.find(s=>s.is_default))==null?void 0:h.id)||null}),r=W(()=>{var h;return((h=m.taskStatus.find(s=>s.is_default))==null?void 0:h.id)||null}),{value:A}=n("segment",2),{value:y}=n("priority_id"),{value:C}=n("task_status_id");De(()=>{$.value&&!y.value&&(y.value=$.value),r.value&&!C.value&&(C.value=r.value)});const x=W(()=>{const h=m.priori.find(s=>s.id===y.value);return h&&h.justify}),j=W(()=>ve({segment:J().required().label("Segmento"),task_type:J().required().label("Tipo de chamado"),name:E().required().label("Título"),system_screen:E().required().label("Tela"),description:E().required().label("Descrição"),owner_id:J().required().label("Solicitante"),task_status_id:J().required().label("Status do Chamado"),priority_id:J().required().label("Prioridade"),observation:E().nullable().label("Observação"),priority_justification:x.value?E().required().label("Justificativa da Prioridade"):E().label("Justificativa da Prioridade"),status:we().required().label("Status")})),{handleSubmit:q,errors:V,isSubmitting:O}=ge({validationSchema:j,initialValues:{segment:1,task_type:"",name:"",system_screen:"",description:"",owner_id:o.user.id,responsible_id:"",task_status_id:r.value,priority_id:$.value,observation:"",created_at:"",expected_date:"",finish_date:"",priority_justification:"",status:!0}}),M=q(async h=>{await m.storeTask(h),_("add")}),k=B(""),{value:I}=n("name"),{value:u}=n("task_type"),{value:g}=n("system_screen"),{value:f}=n("description");n("owner_id");const{value:D}=n("responsible_id"),{value:Y}=n("observation"),{value:G}=n("created_at"),{value:Z}=n("expected_date"),{value:K}=n("finish_date"),{value:X}=n("priority_justification"),{value:H}=n("status");return se($,h=>{h&&!y.value&&(y.value=h)}),se(r,h=>{h&&!C.value&&(C.value=h)}),se(y,()=>{x.value||(X.value="")}),(h,s)=>(w(),Q("div",null,[k.value?(w(),L(xe,{key:0,color:"error",class:"mb-2"},{default:a(()=>[U(z(k.value),1)]),_:1})):le("",!0),e(Ve,{onSubmit:Te(t(M),["prevent"])},{default:a(()=>[e(be,null,{default:a(()=>[e(v,null,{default:a(()=>[e(i,{cols:"12"},{default:a(()=>[e(F,{modelValue:t(A),"onUpdate:modelValue":s[0]||(s[0]=l=>d(A)?A.value=l:null),"error-messages":t(V).segment,items:S,label:"Segmento","item-title":"label","item-value":"value"},null,8,["modelValue","error-messages"])]),_:1})]),_:1}),e(v,null,{default:a(()=>[e(i,{cols:"12"},{default:a(()=>[e(F,{modelValue:t(u),"onUpdate:modelValue":s[1]||(s[1]=l=>d(u)?u.value=l:null),"error-messages":t(V).task_type,items:P,label:"Tipo de chamado","item-title":"label","item-value":"value"},null,8,["modelValue","error-messages"])]),_:1})]),_:1}),e(v,null,{default:a(()=>[e(i,{cols:"12"},{default:a(()=>[e(N,{modelValue:t(I),"onUpdate:modelValue":s[2]||(s[2]=l=>d(I)?I.value=l:null),"error-messages":t(V).name,label:"Título",variant:"outlined",color:"primary"},null,8,["modelValue","error-messages"])]),_:1})]),_:1}),e(v,null,{default:a(()=>[e(i,{cols:"12"},{default:a(()=>[e(N,{modelValue:t(g),"onUpdate:modelValue":s[3]||(s[3]=l=>d(g)?g.value=l:null),"error-messages":t(V).system_screen,label:"Tela",variant:"outlined",color:"primary"},null,8,["modelValue","error-messages"])]),_:1})]),_:1}),e(v,null,{default:a(()=>[e(i,{cols:"12"},{default:a(()=>[e(re,{modelValue:t(f),"onUpdate:modelValue":s[4]||(s[4]=l=>d(f)?f.value=l:null),"error-messages":t(V).description,label:"Descrição",variant:"outlined",color:"primary",rows:"5"},null,8,["modelValue","error-messages"])]),_:1})]),_:1}),e(v,null,{default:a(()=>[e(i,{cols:"12",md:"6"},{default:a(()=>[e(F,{modelValue:t(o).user.id,"onUpdate:modelValue":s[5]||(s[5]=l=>t(o).user.id=l),"error-messages":t(V).owner_id,items:t(m).users,label:"Solicitante","item-title":"first_name","item-value":"id",disabled:!0},null,8,["modelValue","error-messages","items"])]),_:1}),e(i,{cols:"12",md:"6"},{default:a(()=>[e(F,{modelValue:t(D),"onUpdate:modelValue":s[6]||(s[6]=l=>d(D)?D.value=l:null),"error-messages":t(V).responsible_id,items:t(m).users,label:"Responsável","item-title":"first_name","item-value":"id",disabled:!0},null,8,["modelValue","error-messages","items"])]),_:1})]),_:1}),e(v,null,{default:a(()=>[e(i,{cols:"12",md:"6"},{default:a(()=>[e(F,{modelValue:t(C),"onUpdate:modelValue":s[7]||(s[7]=l=>d(C)?C.value=l:null),"error-messages":t(V).task_status_id,items:t(m).taskStatus,label:"Status do Chamado","item-title":"name","item-value":"id",disabled:!0},null,8,["modelValue","error-messages","items"])]),_:1}),e(i,{cols:"12",md:"6"},{default:a(()=>[e(F,{modelValue:t(y),"onUpdate:modelValue":s[8]||(s[8]=l=>d(y)?y.value=l:null),"error-messages":t(V).priority_id,items:t(m).priori,label:"Prioridade","item-title":"name","item-value":"id"},null,8,["modelValue","error-messages","items"])]),_:1})]),_:1}),e(v,null,{default:a(()=>[e(i,{cols:"12"},{default:a(()=>[e(re,{modelValue:t(Y),"onUpdate:modelValue":s[9]||(s[9]=l=>d(Y)?Y.value=l:null),"error-messages":t(V).observation,label:"Observação",variant:"outlined",color:"primary",rows:"5"},null,8,["modelValue","error-messages"])]),_:1})]),_:1}),e(v,null,{default:a(()=>[e(i,{cols:"12",md:"4"},{default:a(()=>[e(N,{modelValue:t(G),"onUpdate:modelValue":s[10]||(s[10]=l=>d(G)?G.value=l:null),"error-messages":t(V).created_at,label:"Data de Criação",variant:"outlined",type:"date",disabled:!0},null,8,["modelValue","error-messages"])]),_:1}),e(i,{cols:"12",md:"4"},{default:a(()=>[e(N,{modelValue:t(Z),"onUpdate:modelValue":s[11]||(s[11]=l=>d(Z)?Z.value=l:null),"error-messages":t(V).expected_date,label:"Data Esperada",variant:"outlined",type:"date",disabled:!0},null,8,["modelValue","error-messages"])]),_:1}),e(i,{cols:"12",md:"4"},{default:a(()=>[e(N,{modelValue:t(K),"onUpdate:modelValue":s[12]||(s[12]=l=>d(K)?K.value=l:null),"error-messages":t(V).finish_date,label:"Data de Conclusão",variant:"outlined",type:"date",disabled:!0},null,8,["modelValue","error-messages"])]),_:1})]),_:1}),t(x)?(w(),L(v,{key:0},{default:a(()=>[e(i,{cols:"12"},{default:a(()=>[e(N,{modelValue:t(X),"onUpdate:modelValue":s[13]||(s[13]=l=>d(X)?X.value=l:null),"error-messages":t(V).priority_justification,label:"Justificativa da Prioridade",variant:"outlined",color:"primary"},null,8,["modelValue","error-messages"])]),_:1})]),_:1})):le("",!0),e(v,null,{default:a(()=>[e(i,{cols:"12"},{default:a(()=>[e(Se,{modelValue:t(H),"onUpdate:modelValue":s[14]||(s[14]=l=>d(H)?H.value=l:null),label:t(H)?"Ativo":"Inativo",color:"primary",inset:"",disabled:"true"},null,8,["modelValue","label"])]),_:1})]),_:1}),e(v,{justify:"end"},{default:a(()=>[e(i,{cols:"12",md:"auto"},{default:a(()=>[e(T,{flat:"",text:"Cancelar",onClick:s[15]||(s[15]=l=>_("cancel"))})]),_:1}),e(i,{cols:"12",md:"auto"},{default:a(()=>[e(T,{type:"submit",color:"primary",flat:"",loading:t(O),text:"Adicionar"},null,8,["loading"])]),_:1})]),_:1})]),_:1})]),_:1},8,["onSubmit"])]))}},Ye={props:{task:{type:Object,required:!0}},emits:["cancel","edit"],setup(p,{emit:_}){const o=p,m=me(),S=[{label:"Grãos",value:1},{label:"Proteína",value:2}],P=[{label:"É uma melhoria ?",value:1},{label:"É algo novo ?",value:2}],{handleSubmit:$,errors:r,isSubmitting:A,setFieldValue:y,setErrors:C}=ge({validationSchema:ve({segment:J().required().label("Segmento"),task_type:J().required().label("Tipo de chamado"),task_code:E().required().label("Número do chamado"),name:E().required().label("Título"),system_screen:E().required().label("Tela"),description:E().required().label("Descrição"),owner_id:J().required().label("Solicitante"),responsible_id:J().required().label("Responsável"),task_status_id:J().required().label("Status do Chamado"),priority_id:J().required().label("Prioridade do Chamado"),observation:E().nullable().label("Observação"),created_at:fe().nullable().label("Data de Criação"),expected_date:fe().nullable().label("Data Esperada"),finish_date:fe().nullable().label("Data de Conclusão"),priority_justification:E().nullable().label("Justificativa da Prioridade"),status:we().required().label("Status")}),initialValues:{segment:o.task.segment,task_type:o.task.task_type,task_code:o.task.task_code,name:o.task.name,description:o.task.description,owner_id:o.task.owner_id,responsible_id:o.task.responsible_id,task_status_id:o.task.task_status_id,system_screen:o.task.system_screen,observation:o.task.observation,priority_id:o.task.priority_id,priority_justification:o.task.priority_justification,expected_date:o.task.expected_date,finish_date:o.task.finish_date,created_at:o.task.created_at,status:o.task.status}}),x=$(async s=>{h.value||delete s.priority_justification,console.log("Payload being sent to the backend:",s),await m.updateTask(o.task.id,s),_("edit")}),j=B(""),{value:q}=n("segment"),{value:V}=n("priority_id"),{value:O}=n("name"),{value:M}=n("task_code"),{value:k}=n("task_type"),{value:I}=n("description"),{value:u}=n("owner_id"),{value:g}=n("responsible_id"),{value:f}=n("task_status_id"),{value:D}=n("system_screen"),{value:Y}=n("observation"),{value:G}=n("priority_justification"),{value:Z}=n("expected_date"),{value:K}=n("finish_date"),{value:X}=n("created_at"),{value:H}=n("status"),h=W(()=>{const s=m.priori.find(l=>l.id===V.value);return s&&s.is_justify});return se(V,s=>{h.value?y("priority_justification",G.value||""):(G.value="",C({priority_justification:void 0}))}),(s,l)=>(w(),Q("div",null,[j.value?(w(),L(xe,{key:0,color:"error",class:"mb-2"},{default:a(()=>[U(z(j.value),1)]),_:1})):le("",!0),e(Ve,{onSubmit:Te(t(x),["prevent"])},{default:a(()=>[e(be,null,{default:a(()=>[e(v,null,{default:a(()=>[e(i,{cols:"12"},{default:a(()=>[e(F,{modelValue:t(q),"onUpdate:modelValue":l[0]||(l[0]=c=>d(q)?q.value=c:null),"error-messages":t(r).segment,items:S,label:"Segmento","item-title":"label","item-value":"value"},null,8,["modelValue","error-messages"])]),_:1})]),_:1}),e(v,null,{default:a(()=>[e(i,{cols:"12"},{default:a(()=>[e(F,{modelValue:t(k),"onUpdate:modelValue":l[1]||(l[1]=c=>d(k)?k.value=c:null),"error-messages":t(r).task_type,items:P,label:"Tipo de chamado","item-title":"label","item-value":"value"},null,8,["modelValue","error-messages"])]),_:1})]),_:1}),e(v,null,{default:a(()=>[e(i,{cols:"12"},{default:a(()=>[e(N,{modelValue:t(M),"onUpdate:modelValue":l[2]||(l[2]=c=>d(M)?M.value=c:null),"error-messages":t(r).task_code,label:"Número do chamado",variant:"outlined",color:"primary",disabled:""},null,8,["modelValue","error-messages"])]),_:1})]),_:1}),e(v,null,{default:a(()=>[e(i,{cols:"12"},{default:a(()=>[e(N,{modelValue:t(O),"onUpdate:modelValue":l[3]||(l[3]=c=>d(O)?O.value=c:null),"error-messages":t(r).name,label:"Título",variant:"outlined",color:"primary"},null,8,["modelValue","error-messages"])]),_:1})]),_:1}),e(v,null,{default:a(()=>[e(i,{cols:"12"},{default:a(()=>[e(N,{modelValue:t(D),"onUpdate:modelValue":l[4]||(l[4]=c=>d(D)?D.value=c:null),"error-messages":t(r).system_screen,label:"Tela",variant:"outlined",color:"primary"},null,8,["modelValue","error-messages"])]),_:1})]),_:1}),e(v,null,{default:a(()=>[e(i,{cols:"12"},{default:a(()=>[e(re,{modelValue:t(I),"onUpdate:modelValue":l[5]||(l[5]=c=>d(I)?I.value=c:null),"error-messages":t(r).description,label:"Descrição",variant:"outlined",color:"primary",rows:"5"},null,8,["modelValue","error-messages"])]),_:1})]),_:1}),e(v,null,{default:a(()=>[e(i,{cols:"12",md:"6"},{default:a(()=>[e(F,{modelValue:t(u),"onUpdate:modelValue":l[6]||(l[6]=c=>d(u)?u.value=c:null),"error-messages":t(r).owner_id,items:t(m).users,label:"Solicitante","item-title":"first_name","item-value":"id",disabled:""},null,8,["modelValue","error-messages","items"])]),_:1}),e(i,{cols:"12",md:"6"},{default:a(()=>[e(F,{modelValue:t(g),"onUpdate:modelValue":l[7]||(l[7]=c=>d(g)?g.value=c:null),"error-messages":t(r).responsible_id,items:t(m).users,label:"Responsável","item-title":"first_name","item-value":"id"},null,8,["modelValue","error-messages","items"])]),_:1})]),_:1}),e(v,null,{default:a(()=>[e(i,{cols:"12",md:"6"},{default:a(()=>[e(F,{modelValue:t(f),"onUpdate:modelValue":l[8]||(l[8]=c=>d(f)?f.value=c:null),"error-messages":t(r).task_status_id,items:t(m).taskStatus,label:"Status do Chamado","item-title":"name","item-value":"id"},null,8,["modelValue","error-messages","items"])]),_:1}),e(i,{cols:"12",md:"6"},{default:a(()=>[e(F,{modelValue:t(V),"onUpdate:modelValue":l[9]||(l[9]=c=>d(V)?V.value=c:null),"error-messages":t(r).priority_id,items:t(m).priori,label:"Prioridade","item-title":"name","item-value":"id"},null,8,["modelValue","error-messages","items"])]),_:1})]),_:1}),e(v,null,{default:a(()=>[e(i,{cols:"12"},{default:a(()=>[e(re,{modelValue:t(Y),"onUpdate:modelValue":l[10]||(l[10]=c=>d(Y)?Y.value=c:null),"error-messages":t(r).observation,label:"Observação",variant:"outlined",color:"primary",rows:"5"},null,8,["modelValue","error-messages"])]),_:1})]),_:1}),e(v,null,{default:a(()=>[e(i,{cols:"12",md:"4"},{default:a(()=>[e(N,{modelValue:t(X),"onUpdate:modelValue":l[11]||(l[11]=c=>d(X)?X.value=c:null),"error-messages":t(r).created_at,label:"Data de Criação",variant:"outlined",type:"date",disabled:""},null,8,["modelValue","error-messages"])]),_:1}),e(i,{cols:"12",md:"4"},{default:a(()=>[e(N,{modelValue:t(Z),"onUpdate:modelValue":l[12]||(l[12]=c=>d(Z)?Z.value=c:null),"error-messages":t(r).expected_date,label:"Data Esperada",variant:"outlined",type:"date"},null,8,["modelValue","error-messages"])]),_:1}),e(i,{cols:"12",md:"4"},{default:a(()=>[e(N,{modelValue:t(K),"onUpdate:modelValue":l[13]||(l[13]=c=>d(K)?K.value=c:null),"error-messages":t(r).finish_date,label:"Data de Conclusão",variant:"outlined",type:"date"},null,8,["modelValue","error-messages"])]),_:1})]),_:1}),t(h)?(w(),L(v,{key:0},{default:a(()=>[e(i,{cols:"12"},{default:a(()=>[e(N,{modelValue:t(G),"onUpdate:modelValue":l[14]||(l[14]=c=>d(G)?G.value=c:null),"error-messages":t(r).priority_justification,label:"Justificativa da Prioridade",variant:"outlined",color:"primary"},null,8,["modelValue","error-messages"])]),_:1})]),_:1})):le("",!0),e(v,null,{default:a(()=>[e(i,{cols:"12"},{default:a(()=>[e(Se,{modelValue:t(H),"onUpdate:modelValue":l[15]||(l[15]=c=>d(H)?H.value=c:null),label:t(H)?"Ativo":"Inativo",color:"primary",inset:""},null,8,["modelValue","label"])]),_:1})]),_:1}),e(v,{justify:"end"},{default:a(()=>[e(i,{cols:"12",md:"auto"},{default:a(()=>[e(T,{flat:"",text:"Cancelar",onClick:l[16]||(l[16]=c=>_("cancel"))})]),_:1}),e(i,{cols:"12",md:"auto"},{default:a(()=>[e(T,{type:"submit",color:"primary",flat:"",loading:t(A),text:"Editar"},null,8,["loading"])]),_:1})]),_:1})]),_:1})]),_:1},8,["onSubmit"])]))}},Ue=he("chats",{state:()=>({messages:[]}),actions:{async fetchMessages(p){try{const _=await R.get(`/api/interactions/${p}`);this.messages=_.data}catch(_){console.error("Error fetching messages:",_)}},async createInteraction(p,_,o){try{return(await R.post("/api/interactions",{task_id:p,comment:_,user_id:o})).data}catch(m){console.error("Error creating interaction:",m)}},async uploadFile(p){try{return(await R.post("/api/interaction-file",p,{headers:{"Content-Type":"multipart/form-data"}})).data}catch(_){throw console.error("Error uploading file:",_),_}}}}),Ze=b("span",{class:"text-h5"},"Notas de Trabalho",-1),Ke={key:0},We=["href"],ea=U("Adicionar Comentário"),aa=U("Fechar"),ta=b("span",{class:"text-h5"},"Adicionar Comentário",-1),la=U("Cancelar"),sa=U("Adicionar"),ke={props:{taskId:{type:Number,required:!0},showChatModal:{type:Boolean,required:!0},userId:{type:Number,required:!0}},emits:["update:showChatModal"],setup(p,{emit:_}){const o=p,m=Ue(),{messages:S}=de(m),P=B(!1),$=B(!1),r=ve({comment:E().required().label("Comentário"),files:je().of(Pe()).nullable()}),{handleSubmit:A,errors:y,isSubmitting:C}=ge({validationSchema:r,initialValues:{comment:"",files:[]}}),x=A(async M=>{try{const k=await m.createInteraction(o.taskId,M.comment,o.userId);if(M.files&&M.files.length>0){const I=new FormData;I.append("interaction_id",k.id);for(const u of M.files)I.append("files[]",u);await m.uploadFile(I)}await m.fetchMessages(o.taskId),$.value=!1,_("update:showChatModal",!1)}catch(k){console.error("Erro ao adicionar comentário ou fazer upload dos arquivos:",k)}}),{value:j}=n("comment"),{value:q}=n("files");se(()=>o.showChatModal,async M=>{M?(P.value=!0,await m.fetchMessages(o.taskId)):P.value=!1});const V=()=>{_("update:showChatModal",!1)},O=()=>{$.value=!0};return(M,k)=>{const I=ze("v-list-item-content");return w(),L(ae,{modelValue:P.value,"onUpdate:modelValue":k[4]||(k[4]=u=>P.value=u),"max-width":"800px"},{default:a(()=>[e(ee,null,{default:a(()=>[e(oe,null,{default:a(()=>[Ze]),_:1}),e(te,null,{default:a(()=>[e(be,null,{default:a(()=>[e(v,null,{default:a(()=>[(w(!0),Q(ne,null,pe(t(S),(u,g)=>(w(),L(i,{key:g,cols:"12"},{default:a(()=>[e(ee,{class:"mb-3"},{default:a(()=>[e(te,null,{default:a(()=>[U(z(u.comment)+" ",1),u.interaction_files&&u.interaction_files.length?(w(),Q("div",Ke,[e(Ae),e(Ne,null,{default:a(()=>[(w(!0),Q(ne,null,pe(u.interaction_files,(f,D)=>(w(),L(Ee,{key:D},{default:a(()=>[e(I,null,{default:a(()=>[e(Fe,null,{default:a(()=>[b("a",{href:f.file_url,target:"_blank"},z(f.name),9,We)]),_:2},1024)]),_:2},1024)]),_:2},1024))),128))]),_:2},1024)])):le("",!0)]),_:2},1024)]),_:2},1024)]),_:2},1024))),128))]),_:1})]),_:1})]),_:1}),e(_e,null,{default:a(()=>[e(T,{color:"primary",onClick:O},{default:a(()=>[ea]),_:1}),e(T,{color:"secondary",onClick:V},{default:a(()=>[aa]),_:1})]),_:1})]),_:1}),e(ae,{modelValue:$.value,"onUpdate:modelValue":k[3]||(k[3]=u=>$.value=u),"max-width":"500px"},{default:a(()=>[e(ee,null,{default:a(()=>[e(oe,null,{default:a(()=>[ta]),_:1}),e(te,null,{default:a(()=>[e(Ve,{onSubmit:t(x)},{default:a(()=>[e(re,{modelValue:t(j),"onUpdate:modelValue":k[0]||(k[0]=u=>d(j)?j.value=u:null),label:"Comentário","error-messages":t(y).comment},null,8,["modelValue","error-messages"]),e(Oe,{modelValue:t(q),"onUpdate:modelValue":k[1]||(k[1]=u=>d(q)?q.value=u:null),label:"Selecionar Arquivos","error-messages":t(y).files,"show-size":"",multiple:""},null,8,["modelValue","error-messages"])]),_:1},8,["onSubmit"])]),_:1}),e(_e,null,{default:a(()=>[e(T,{color:"blue darken-1",text:"",onClick:k[2]||(k[2]=u=>$.value=!1)},{default:a(()=>[la]),_:1}),e(T,{color:"blue darken-1",text:"",loading:t(C),onClick:t(x)},{default:a(()=>[sa]),_:1},8,["loading","onClick"])]),_:1})]),_:1})]),_:1},8,["modelValue"])]),_:1},8,["modelValue"])}}},oa={class:"mb-5 pb-5 border-b border-opacity-100"},ra=b("h1",{class:"text-h3"},"Meus chamados",-1),ia=U("Novo Chamado"),ua=U("Adicionar chamado"),da=U("Editar chamado"),na=U("Cancelar"),ma=U("Deletar"),ca=b("span",{class:"text-h5"},"Adicionar Nota de Trabalho",-1),fa=U("Cancelar"),pa=U("Adicionar"),Va={setup(p){const _=Ce(),o=me(),{toEdit:m,toDelete:S}=de(o),P=Ue();de(P);const{isLoading:$}=ie(o.getTasks());ie(o.getPriorities()),ie(o.getTasksStatus()),ie(o.getUsers());const r=W({get(){return!!Object.keys(m.value).length},set(u){u||(m.value={})}}),A=W({get(){return!!Object.keys(S.value).length},set(u){u||(S.value={})}}),y=B(!1);async function C(u){y.value=!0,await o.deleteTask(u.id),S.value={},y.value=!1}const x=B(!1),j=B(null),q=B(!1),V=B(""),O=B(_.user.id),M=u=>{j.value=u.id,x.value=!0},k=u=>{j.value=u.id,q.value=!0},I=async()=>{await P.addMessage(j.value,V.value,O.value),V.value="",q.value=!1};return(u,g)=>(w(),Q("div",null,[b("div",oa,[e(v,null,{default:a(()=>[e(i,null,{default:a(()=>[ra]),_:1}),e(i,{class:"text-right"},{default:a(()=>[e(ae,{width:"auto"},{activator:a(({props:f})=>[e(T,ue({flat:"",color:"primary"},f),{default:a(()=>[ia]),_:2},1040)]),default:a(({isActive:f})=>[e(ee,{width:"400"},{default:a(()=>[e(oe,null,{default:a(()=>[ua]),_:1}),e(te,null,{default:a(()=>[e(Xe,{onAdd:D=>f.value=!1,onCancel:D=>f.value=!1},null,8,["onAdd","onCancel"])]),_:2},1024)]),_:2},1024)]),_:1})]),_:1})]),_:1})]),t($)?(w(),L(Re,{key:0,width:3,color:"primary",indeterminate:""})):(w(),Q(ne,{key:1},[e(Qe,{onOpenChat:M,onAddNote:k}),e(ae,{modelValue:t(r),"onUpdate:modelValue":g[0]||(g[0]=f=>d(r)?r.value=f:null),width:"auto"},{default:a(({isActive:f})=>[e(ee,{width:"400"},{default:a(()=>[e(oe,null,{default:a(()=>[da]),_:1}),e(te,null,{default:a(()=>[e(Ye,{task:t(m),onCancel:D=>f.value=!1,onEdit:D=>f.value=!1},null,8,["task","onCancel","onEdit"])]),_:2},1024)]),_:2},1024)]),_:1},8,["modelValue"]),e(ae,{modelValue:t(A),"onUpdate:modelValue":g[2]||(g[2]=f=>d(A)?A.value=f:null),width:"auto"},{default:a(({isActive:f})=>[e(ee,{"prepend-icon":t(ye),title:"Você tem certeza que deseja deletar este chamado?"},{actions:a(()=>[e(Je),e(T,{onClick:D=>f.value=!1},{default:a(()=>[na]),_:2},1032,["onClick"]),e(T,{onClick:g[1]||(g[1]=D=>C(t(S))),variant:"tonal",color:"error",loading:y.value},{default:a(()=>[ma]),_:1},8,["loading"])]),_:2},1032,["prepend-icon"])]),_:1},8,["modelValue"])],64)),e(ke,{taskId:j.value,showChatModal:x.value,userId:O.value,"onUpdate:showChatModal":g[3]||(g[3]=f=>x.value=f)},null,8,["taskId","showChatModal","userId"]),e(ae,{modelValue:q.value,"onUpdate:modelValue":g[6]||(g[6]=f=>q.value=f),"max-width":"500px"},{default:a(()=>[e(ee,null,{default:a(()=>[e(oe,null,{default:a(()=>[ca]),_:1}),e(te,null,{default:a(()=>[e(ke,{taskId:j.value,showChatModal:x.value,userId:O.value,"onUpdate:showChatModal":g[4]||(g[4]=f=>x.value=f)},null,8,["taskId","showChatModal","userId"])]),_:1}),e(_e,null,{default:a(()=>[e(T,{color:"blue darken-1",text:"",onClick:g[5]||(g[5]=f=>q.value=!1)},{default:a(()=>[fa]),_:1}),e(T,{color:"blue darken-1",text:"",onClick:I},{default:a(()=>[pa]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"])]))}};export{Va as default};
