import{F as Ve,E as al,i as ol,j as ze,N as sl,k as nl,l as ul}from"./vue-tabler-icons.es-10f8a4eb.js";import{u as Fe,a3 as ke,B as H,L as i,o as g,e as Z,w as l,a as u,b as e,y as t,V as $,c as R,m as _e,ao as ge,I as fe,ap as O,l as ie,q as Ue,t as W,i as il,aq as dl,M as Re,N as Oe,p as ne,ar as Ne,z as re,F as xe,a8 as rl,d as N,a4 as ml,a9 as je,as as ee,aa as Y,al as Je,at as Be,au as Le,Q as de,ab as Ge,a0 as Ce,a5 as b,_ as n,ad as C,ac as X,av as le,aw as He,S as qe,ae as Pe,ax as Ae,am as Qe,ay as Me,a6 as cl,a7 as Ie,r as vl,ai as me,aj as se,ah as ae,G as pl,j as _l,az as $e,ag as ue,O as fl,P as bl,af as he,T as yl,ak as Vl}from"./index-b8e79387.js";import{u as be}from"./tasks-f49ebbf3.js";import{a as f,u as De}from"./vee-validate.esm-5771e9f1.js";import{_ as Ke}from"./_plugin-vue_export-helper-c27b6911.js";const gl=u("th",{class:"text-left",style:{width:"50px"}},"Chamado",-1),hl=u("th",{class:"text-left",style:{width:"50px"}},"Título",-1),kl=u("th",{class:"text-left",style:{width:"150px"}},"Descrição",-1),xl={class:"text-left",style:{width:"100px"}},Cl=N("Solicitante "),wl={class:"text-left",style:{width:"100px"}},Sl=N("Responsável "),Ul={class:"text-left",style:{width:"120px"}},$l=N("Status "),Tl={class:"text-left",style:{width:"120px"}},Al=N("Prioridade "),Ml={class:"text-left",style:{width:"150px"}},Il=N("Complexidade "),Fl=u("th",{class:"text-left",style:{width:"100px"}},"Ações",-1),jl=u("th",null,null,-1),ql={key:0},Pl=u("td",null,null,-1),Dl=u("td",null,null,-1),Rl=u("td",null,null,-1),Ol={key:0},Nl={key:1},El={key:2},zl={key:3},Jl={key:4},Bl={key:5},Ll={key:6},Gl={key:7},Hl={key:8},Ql={key:9},Kl=u("td",null,null,-1),Wl=u("td",null,null,-1),Xl={class:"text-clamp"},Yl=N(" Default "),Zl={class:"text-clamp"},et={class:"text-clamp"},lt={class:"text-clamp"},tt={class:"text-right"},at={class:"d-flex align-center"},ot={class:"text-clamp"},st={class:"text-right"},nt={class:"d-flex align-center"},ut={class:"text-clamp"},it={class:"text-right"},dt={class:"d-flex align-center"},rt={setup(F){const T=Fe(),s=be(),{tasks:r,toShow:Q,toEdit:j,toDelete:q,taskFiles:p}=ke(s),P=H(()=>T.user.teams.some(A=>A.is_admin)),k=i([]),w=i([]),S=i([]),z=i([]),M=i([]),x=i(!1),E=i(!1),J=i(!1),B=i(!1),L=i(!1),U=H(()=>[...new Set(r.value.map(A=>A.task_status.name))]),y=H(()=>[...new Set(r.value.map(A=>A.user_owner.first_name))]),I=H(()=>[...new Set(r.value.map(A=>{var V;return((V=A.user_responsible)==null?void 0:V.first_name)||"Nenhum responsável"}))]),h=H(()=>[...new Set(r.value.map(A=>A.priority.name))]),D=H(()=>[...new Set(r.value.map(A=>A.complexity.name))]),_=i(!1),o=i(!1),a=i(!1),c=i(!1),oe=i(!1),ce=()=>{_.value=k.value.length===U.value.length},ve=()=>{o.value=w.value.length===y.value.length},ye=()=>{a.value=S.value.length===I.value.length},pe=()=>{c.value=z.value.length===h.value.length},we=()=>{oe.value=M.value.length===D.value.length},G=()=>{_.value?k.value=[]:k.value=[...U.value]},d=()=>{o.value?w.value=[]:w.value=[...y.value]},v=()=>{a.value?S.value=[]:S.value=[...I.value]},Ze=()=>{c.value?z.value=[]:z.value=[...h.value]},el=()=>{oe.value?M.value=[]:M.value=[...D.value]},ll=H(()=>r.value.filter(A=>{var te;const V=k.value.length===0||k.value.includes(A.task_status.name),m=w.value.length===0||w.value.includes(A.user_owner.first_name),Te=S.value.length===0||S.value.includes(((te=A.user_responsible)==null?void 0:te.first_name)||"Nenhum responsável"),Se=z.value.length===0||z.value.includes(A.priority.name),K=M.value.length===0||M.value.includes(A.complexity.name);return V&&m&&Te&&Se&&K})),tl=A=>({color:A.color});return(A,V)=>(g(),Z(rl,{class:"border-opacity-100"},{default:l(()=>[u("thead",null,[u("tr",null,[gl,hl,kl,u("th",xl,[Cl,e($,{icon:"",onClick:V[0]||(V[0]=m=>E.value=!E.value)},{default:l(()=>[e(t(Ve))]),_:1})]),u("th",wl,[Sl,e($,{icon:"",onClick:V[1]||(V[1]=m=>J.value=!J.value)},{default:l(()=>[e(t(Ve))]),_:1})]),u("th",Ul,[$l,e($,{icon:"",onClick:V[2]||(V[2]=m=>x.value=!x.value)},{default:l(()=>[e(t(Ve))]),_:1})]),u("th",Tl,[Al,e($,{icon:"",onClick:V[3]||(V[3]=m=>B.value=!B.value)},{default:l(()=>[e(t(Ve))]),_:1})]),u("th",Ml,[Il,e($,{icon:"",onClick:V[4]||(V[4]=m=>L.value=!L.value)},{default:l(()=>[e(t(Ve))]),_:1})]),Fl,jl])]),u("tbody",null,[E.value||J.value||x.value||B.value||L.value?(g(),R("tr",ql,[Pl,Dl,Rl,E.value?(g(),R("td",Ol,[e(O,{modelValue:w.value,"onUpdate:modelValue":V[6]||(V[6]=m=>w.value=m),items:t(y),label:"Filtro Solicitante",multiple:"",onChange:ve},{"prepend-item":l(()=>[e(_e,null,{default:l(()=>[e(ge,{modelValue:o.value,"onUpdate:modelValue":V[5]||(V[5]=m=>o.value=m),label:o.value?"Desmarcar todos":"Selecionar todos",onChange:d},null,8,["modelValue","label"])]),_:1}),e(fe)]),_:1},8,["modelValue","items"])])):(g(),R("td",Nl)),J.value?(g(),R("td",El,[e(O,{modelValue:S.value,"onUpdate:modelValue":V[8]||(V[8]=m=>S.value=m),items:t(I),label:"Filtro Responsável",multiple:"",onChange:ye},{"prepend-item":l(()=>[e(_e,null,{default:l(()=>[e(ge,{modelValue:a.value,"onUpdate:modelValue":V[7]||(V[7]=m=>a.value=m),label:a.value?"Desmarcar todos":"Selecionar todos",onChange:v},null,8,["modelValue","label"])]),_:1}),e(fe)]),_:1},8,["modelValue","items"])])):(g(),R("td",zl)),x.value?(g(),R("td",Jl,[e(O,{modelValue:k.value,"onUpdate:modelValue":V[10]||(V[10]=m=>k.value=m),items:t(U),label:"Filtro Status",multiple:"",onChange:ce},{"prepend-item":l(()=>[e(_e,null,{default:l(()=>[e(ge,{modelValue:_.value,"onUpdate:modelValue":V[9]||(V[9]=m=>_.value=m),label:_.value?"Desmarcar todos":"Selecionar todos",onChange:G},null,8,["modelValue","label"])]),_:1}),e(fe)]),_:1},8,["modelValue","items"])])):(g(),R("td",Bl)),B.value?(g(),R("td",Ll,[e(O,{modelValue:z.value,"onUpdate:modelValue":V[12]||(V[12]=m=>z.value=m),items:t(h),label:"Filtro Prioridade",multiple:"",onChange:pe},{"prepend-item":l(()=>[e(_e,null,{default:l(()=>[e(ge,{modelValue:c.value,"onUpdate:modelValue":V[11]||(V[11]=m=>c.value=m),label:c.value?"Desmarcar todos":"Selecionar todos",onChange:Ze},null,8,["modelValue","label"])]),_:1}),e(fe)]),_:1},8,["modelValue","items"])])):(g(),R("td",Gl)),L.value?(g(),R("td",Hl,[e(O,{modelValue:M.value,"onUpdate:modelValue":V[14]||(V[14]=m=>M.value=m),items:t(D),label:"Filtro Complexidade",multiple:"",onChange:we},{"prepend-item":l(()=>[e(_e,null,{default:l(()=>[e(ge,{modelValue:oe.value,"onUpdate:modelValue":V[13]||(V[13]=m=>oe.value=m),label:oe.value?"Desmarcar todos":"Selecionar todos",onChange:el},null,8,["modelValue","label"])]),_:1}),e(fe)]),_:1},8,["modelValue","items"])])):(g(),R("td",Ql)),Kl,Wl])):ie("",!0),(g(!0),R(xe,null,Ue(t(ll),(m,Te)=>{var Se;return g(),R("tr",{key:Te},[u("td",null,W(m.task_code),1),u("td",null,[u("div",Xl,W(m.name),1),m.default?(g(),Z(il,{key:0,size:"small",variant:"tonal",color:"primary",class:"ml-2"},{default:l(()=>[Yl]),_:1})):ie("",!0)]),u("td",null,[u("div",Zl,W(m.description),1)]),u("td",null,[u("div",et,W(m.user_owner.first_name),1)]),u("td",null,[u("div",lt,W(((Se=m.user_responsible)==null?void 0:Se.first_name)||"Nenhum responsável"),1)]),u("td",null,[u("div",{class:"text-clamp",style:dl(tl(m.task_status))},W(m.task_status.name),5)]),u("td",tt,[u("div",at,[e(re,{text:m.priority_justification},{activator:l(({props:K})=>[e($,Re(Oe(K)),{default:l(()=>[u("span",ne(A.attrs,Ne(A.on)),[u("div",ot,W(m.priority.name),1)],16)]),_:2},1040)]),_:2},1032,["text"])])]),u("td",st,[u("div",nt,[e(re,{text:m.complexity_justification||"Aguardando análise"},{activator:l(({props:K})=>[e($,Re(Oe(K)),{default:l(()=>{var te;return[u("span",ne(A.attrs,Ne(A.on)),[u("div",ut,W(((te=m.complexity)==null?void 0:te.name)||"Aguardando análise"),1)],16)]}),_:2},1040)]),_:2},1032,["text"])])]),u("td",it,[u("div",dt,[e(re,{text:"Visualizar Chamado"},{activator:l(({props:K})=>[e($,ne({icon:"",flat:"",onClick:te=>Q.value=m},K),{default:l(()=>[e(t(al),{"stroke-width":"1.5",size:"20",class:"text-primary"})]),_:2},1040,["onClick"])]),_:2},1024),t(P)?(g(),Z(re,{key:0,text:"Editar Chamado"},{activator:l(({props:K})=>[e($,ne({icon:"",flat:"",onClick:te=>j.value=m},K),{default:l(()=>[e(t(ol),{"stroke-width":"1.5",size:"20",class:"text-primary"})]),_:2},1040,["onClick"])]),_:2},1024)):ie("",!0),t(P)?(g(),Z(re,{key:1,text:"Deletar Chamado"},{activator:l(({props:K})=>[e($,ne({icon:"",flat:"",onClick:te=>q.value=m},K),{default:l(()=>[e(t(ze),{"stroke-width":"1.5",size:"20",class:"text-error"})]),_:2},1040,["onClick"])]),_:2},1024)):ie("",!0),e(re,{text:"Consultar Notas de Trabalho"},{activator:l(({props:K})=>[e($,ne({icon:"",flat:"",onClick:te=>A.$emit("openChat",m)},K),{default:l(()=>[e(t(sl),{"stroke-width":"1.5",size:"20",class:"text-primary"})]),_:2},1040,["onClick"])]),_:2},1024),e(re,{text:"Anexos"},{activator:l(({props:K})=>[e($,ne({icon:"",flat:"",onClick:te=>A.$emit("openAttachments",m)},K),{default:l(()=>[e(t(nl),{"stroke-width":"1.5",size:"20",class:"text-primary"})]),_:2},1040,["onClick"])]),_:2},1024)])])])}),128))])]),_:1}))}},mt={emits:["cancel","add"],setup(F,{emit:T}){const s=Fe(),r=be();i([]);const Q=[{label:"Grãos",value:1},{label:"Proteína",value:2}],j=[{label:"Algo que funcionava, parou de funcionar?",value:1},{label:"Fazer uma solicitação, algo novo (melhoria)?",value:2}],q=H(()=>{var o;return((o=r.priori.find(a=>a.is_default))==null?void 0:o.id)||null}),p=H(()=>{var o;return((o=r.taskStatus.find(a=>a.is_default))==null?void 0:o.id)||null}),{value:P}=f("segment",2),{value:k}=f("priority_id"),{value:w}=f("task_status_id");ml(()=>{q.value&&!k.value&&(k.value=q.value),p.value&&!w.value&&(w.value=p.value)});const S=H(()=>{const o=r.priori.find(a=>a.id===k.value);return o&&o.justify}),z=H(()=>je({segment:ee().required().label("Segmento"),task_type:ee().required().label("Tipo de chamado"),name:Y().required().label("Título"),system_screen:Y().required().label("Tela"),description:Y().required().label("Descrição"),owner_id:ee().required().label("Solicitante"),task_status_id:ee().required().label("Status do Chamado"),priority_id:ee().required().label("Prioridade"),observation:Y().nullable().label("Observação"),priority_justification:S.value?Y().required().label("Justificativa da Prioridade"):Y().label("Justificativa da Prioridade"),status:Je().required().label("Status"),files:Be().of(Le()).nullable()})),{handleSubmit:M,errors:x,isSubmitting:E}=De({validationSchema:z,initialValues:{segment:1,task_type:"",name:"",system_screen:"",description:"",owner_id:s.user.id,responsible_id:"",task_status_id:p.value,priority_id:q.value,observation:"",created_at:"",expected_date:"",finish_date:"",priority_justification:"",status:!0,files:[]}}),J=M(async o=>{console.log("values",o);try{const a=_.value,c=await r.storeTask(o,a);T("add")}catch(a){console.error("Erro ao adicionar comentário ou fazer upload dos arquivos:",a)}}),B=i(""),{value:L}=f("name"),{value:U}=f("task_type"),{value:y}=f("system_screen"),{value:I}=f("description");f("owner_id"),f("responsible_id");const{value:h}=f("observation");f("created_at"),f("expected_date"),f("finish_date");const{value:D}=f("priority_justification");f("status");const{value:_}=f("files");return de(q,o=>{o&&!k.value&&(k.value=o)}),de(p,o=>{o&&!w.value&&(w.value=o)}),de(k,()=>{S.value||(D.value="")}),(o,a)=>(g(),R("div",null,[B.value?(g(),Z(Ge,{key:0,color:"error",class:"mb-2"},{default:l(()=>[N(W(B.value),1)]),_:1})):ie("",!0),e(Pe,{onSubmit:qe(t(J),["prevent"])},{default:l(()=>[e(Ce,null,{default:l(()=>[e(b,null,{default:l(()=>[e(n,{cols:"6"},{default:l(()=>[e(O,{modelValue:t(P),"onUpdate:modelValue":a[0]||(a[0]=c=>C(P)?P.value=c:null),"error-messages":t(x).segment,items:Q,label:"Segmento","item-title":"label","item-value":"value"},null,8,["modelValue","error-messages"])]),_:1}),e(n,{cols:"6"},{default:l(()=>[e(O,{modelValue:t(U),"onUpdate:modelValue":a[1]||(a[1]=c=>C(U)?U.value=c:null),"error-messages":t(x).task_type,items:j,label:"Tipo de chamado","item-title":"label","item-value":"value"},null,8,["modelValue","error-messages"])]),_:1})]),_:1}),e(b,null,{default:l(()=>[e(n,{cols:"12"},{default:l(()=>[e(X,{modelValue:t(L),"onUpdate:modelValue":a[2]||(a[2]=c=>C(L)?L.value=c:null),"error-messages":t(x).name,label:"Título",variant:"outlined",color:"primary",maxlength:"60",counter:""},null,8,["modelValue","error-messages"])]),_:1})]),_:1}),e(b,null,{default:l(()=>[e(n,{cols:"12"},{default:l(()=>[e(X,{modelValue:t(y),"onUpdate:modelValue":a[3]||(a[3]=c=>C(y)?y.value=c:null),"error-messages":t(x).system_screen,label:"Tela",variant:"outlined",color:"primary",maxlength:"60",counter:""},null,8,["modelValue","error-messages"])]),_:1})]),_:1}),e(b,null,{default:l(()=>[e(n,{cols:"12"},{default:l(()=>[e(le,{modelValue:t(I),"onUpdate:modelValue":a[4]||(a[4]=c=>C(I)?I.value=c:null),"error-messages":t(x).description,label:"Descrição",variant:"outlined",color:"primary",rows:"5",maxlength:"500",counter:""},null,8,["modelValue","error-messages"])]),_:1})]),_:1}),e(b,null,{default:l(()=>[e(n,{cols:"12"},{default:l(()=>[e(le,{modelValue:t(h),"onUpdate:modelValue":a[5]||(a[5]=c=>C(h)?h.value=c:null),"error-messages":t(x).observation,label:"Observação",variant:"outlined",color:"primary",rows:"5",maxlength:"500",counter:""},null,8,["modelValue","error-messages"])]),_:1})]),_:1}),e(b,null,{default:l(()=>[e(n,{cols:"12",md:"12"},{default:l(()=>[e(O,{modelValue:t(k),"onUpdate:modelValue":a[6]||(a[6]=c=>C(k)?k.value=c:null),"error-messages":t(x).priority_id,items:t(r).priori,label:"Prioridade","item-title":"name","item-value":"id"},null,8,["modelValue","error-messages","items"])]),_:1})]),_:1}),t(S)?(g(),Z(b,{key:0},{default:l(()=>[e(n,{cols:"12"},{default:l(()=>[e(le,{modelValue:t(D),"onUpdate:modelValue":a[7]||(a[7]=c=>C(D)?D.value=c:null),"error-messages":t(x).priority_justification,label:"Justificativa da Prioridade",variant:"outlined",color:"primary",rows:"5",maxlength:"500",counter:""},null,8,["modelValue","error-messages"])]),_:1})]),_:1})):ie("",!0),e(b,null,{default:l(()=>[e(n,{cols:"12"},{default:l(()=>[e(He,{modelValue:t(_),"onUpdate:modelValue":a[8]||(a[8]=c=>C(_)?_.value=c:null),label:"Anexos do chamado",multiple:"","error-messages":t(x).files,"show-size":""},null,8,["modelValue","error-messages"])]),_:1})]),_:1}),e(b,{justify:"end"},{default:l(()=>[e(n,{cols:"12",md:"auto"},{default:l(()=>[e($,{flat:"",text:"Cancelar",onClick:a[9]||(a[9]=c=>T("cancel"))})]),_:1}),e(n,{cols:"12",md:"auto"},{default:l(()=>[e($,{type:"submit",color:"primary",flat:"",loading:t(E),text:"Adicionar"},null,8,["loading"])]),_:1})]),_:1})]),_:1})]),_:1},8,["onSubmit"])]))}},ct={props:{task:{type:Object,required:!0}},emits:["cancel","edit"],setup(F,{emit:T}){const s=F,r=be(),Q=[{label:"Grãos",value:1},{label:"Proteína",value:2}],j=[{label:"Algo que funcionava, parou de funcionar?",value:1},{label:"Fazer uma solicitação, algo novo (melhoria)?",value:2}],{handleSubmit:q,errors:p,isSubmitting:P,setFieldValue:k,setErrors:w}=De({validationSchema:je({segment:ee().required().label("Segmento"),task_type:ee().required().label("Tipo de chamado"),task_code:Y().required().label("Número do chamado"),name:Y().required().label("Título"),system_screen:Y().required().label("Tela"),description:Y().required().label("Descrição"),owner_id:ee().required().label("Solicitante"),responsible_id:ee().required().label("Responsável"),task_status_id:ee().required().label("Status do Chamado"),priority_id:ee().required().label("Prioridade do Chamado"),complexity_id:ee().required().label("Complexidade do Chamado"),observation:Y().nullable().label("Observação"),created_at:Ae().nullable().label("Data de Criação"),expected_date:Ae().nullable().label("Data de Criação").transform((G,d)=>d===""?null:G),finish_date:Ae().nullable().label("Data de Conclusão").transform((G,d)=>d===""?null:G),priority_justification:Y().nullable().label("Justificativa da Prioridade"),complexity_justification:Y().nullable().label("Justificativa da Complexidade"),status:Je().required().label("Status")}),initialValues:{segment:s.task.segment,task_type:s.task.task_type,task_code:s.task.task_code,name:s.task.name,description:s.task.description,owner_id:s.task.owner_id,responsible_id:s.task.responsible_id,task_status_id:s.task.task_status_id,system_screen:s.task.system_screen,observation:s.task.observation,priority_id:s.task.priority_id,complexity_id:s.task.complexity_id,priority_justification:s.task.priority_justification,complexity_justification:s.task.complexity_justification,finish_date:s.task.finish_date?s.task.finish_date.split("T")[0]:null,expected_date:s.task.expected_date?s.task.expected_date.split("T")[0]:null,created_at:s.task.created_at?s.task.created_at.split("T")[0]:null,status:s.task.status}}),S={complexityRef:i(null),complexityJustificationRef:i(null),responsibleRef:i(null)},z=()=>{p.responsible_id?Me(()=>{S.responsibleRef.value.focus(),S.responsibleRef.value.$el.scrollIntoView({behavior:"smooth",block:"center"})}):p.complexity_id?Me(()=>{S.complexityRef.value.focus(),S.complexityRef.value.$el.scrollIntoView({behavior:"smooth",block:"center"})}):p.complexity_justification&&Me(()=>{S.complexityJustificationRef.value.focus(),S.complexityJustificationRef.value.$el.scrollIntoView({behavior:"smooth",block:"center"})})};de(p,G=>{console.log(p),z()});const M=q(async G=>{we.value||delete G.priority_justification,ce.value||(G.expected_date=null),ve.value||(G.finish_date=null),console.log("Payload being sent to the backend:",G),await r.updateTask(s.task.id,G),T("edit")}),x=i(""),{value:E}=f("segment"),{value:J}=f("priority_id"),{value:B}=f("complexity_id"),{value:L}=f("name"),{value:U}=f("task_code"),{value:y}=f("task_type"),{value:I}=f("description"),{value:h}=f("owner_id"),{value:D}=f("responsible_id"),{value:_}=f("task_status_id"),{value:o}=f("system_screen"),{value:a}=f("observation"),{value:c}=f("priority_justification"),{value:oe}=f("complexity_justification"),{value:ce}=f("expected_date"),{value:ve}=f("finish_date"),{value:ye}=f("created_at"),{value:pe}=f("status"),we=H(()=>{const G=r.priori.find(d=>d.id===J.value);return G&&G.is_justify});return de(J,G=>{we.value?k("priority_justification",c.value||""):(c.value="",w({priority_justification:void 0}))}),(G,d)=>(g(),R("div",null,[x.value?(g(),Z(Ge,{key:0,color:"error",class:"mb-2"},{default:l(()=>[N(W(x.value),1)]),_:1})):ie("",!0),e(Pe,{onSubmit:qe(t(M),["prevent"])},{default:l(()=>[e(Ce,null,{default:l(()=>[e(b,null,{default:l(()=>[e(n,{cols:"6"},{default:l(()=>[e(O,{modelValue:t(E),"onUpdate:modelValue":d[0]||(d[0]=v=>C(E)?E.value=v:null),"error-messages":t(p).segment,items:Q,label:"Segmento","item-title":"label","item-value":"value"},null,8,["modelValue","error-messages"])]),_:1}),e(n,{cols:"6"},{default:l(()=>[e(O,{modelValue:t(y),"onUpdate:modelValue":d[1]||(d[1]=v=>C(y)?y.value=v:null),"error-messages":t(p).task_type,items:j,label:"Tipo de chamado","item-title":"label","item-value":"value"},null,8,["modelValue","error-messages"])]),_:1})]),_:1}),e(b,null,{default:l(()=>[e(n,{cols:"6"},{default:l(()=>[e(X,{modelValue:t(U),"onUpdate:modelValue":d[2]||(d[2]=v=>C(U)?U.value=v:null),"error-messages":t(p).task_code,label:"Número do chamado",variant:"outlined",color:"primary",disabled:""},null,8,["modelValue","error-messages"])]),_:1}),e(n,{cols:"6"},{default:l(()=>[e(X,{modelValue:t(L),"onUpdate:modelValue":d[3]||(d[3]=v=>C(L)?L.value=v:null),"error-messages":t(p).name,label:"Título",variant:"outlined",color:"primary",maxlength:"60",counter:""},null,8,["modelValue","error-messages"])]),_:1})]),_:1}),e(b,null,{default:l(()=>[e(n,{cols:"6"},{default:l(()=>[e(X,{modelValue:t(o),"onUpdate:modelValue":d[4]||(d[4]=v=>C(o)?o.value=v:null),"error-messages":t(p).system_screen,label:"Tela",variant:"outlined",color:"primary",maxlength:"60",counter:""},null,8,["modelValue","error-messages"])]),_:1})]),_:1}),e(b,null,{default:l(()=>[e(n,{cols:"12"},{default:l(()=>[e(le,{modelValue:t(I),"onUpdate:modelValue":d[5]||(d[5]=v=>C(I)?I.value=v:null),"error-messages":t(p).description,label:"Descrição",variant:"outlined",color:"primary",rows:"5",maxlength:"500",counter:""},null,8,["modelValue","error-messages"])]),_:1})]),_:1}),e(b,null,{default:l(()=>[e(n,{cols:"6"},{default:l(()=>[e(O,{modelValue:t(h),"onUpdate:modelValue":d[6]||(d[6]=v=>C(h)?h.value=v:null),"error-messages":t(p).owner_id,items:t(r).users,label:"Solicitante","item-title":"first_name","item-value":"id",disabled:""},null,8,["modelValue","error-messages","items"])]),_:1}),e(n,{cols:"6"},{default:l(()=>[e(X,{modelValue:t(ye),"onUpdate:modelValue":d[7]||(d[7]=v=>C(ye)?ye.value=v:null),"error-messages":t(p).created_at,label:"Data de Criação",variant:"outlined",type:"date",disabled:""},null,8,["modelValue","error-messages"])]),_:1})]),_:1}),e(b,null,{default:l(()=>[e(n,{cols:"6"},{default:l(()=>[e(O,{modelValue:t(_),"onUpdate:modelValue":d[8]||(d[8]=v=>C(_)?_.value=v:null),"error-messages":t(p).task_status_id,items:t(r).taskStatus,label:"Status do Chamado","item-title":"name","item-value":"id"},null,8,["modelValue","error-messages","items"])]),_:1}),e(n,{cols:"6"},{default:l(()=>[e(O,{modelValue:t(D),"onUpdate:modelValue":d[9]||(d[9]=v=>C(D)?D.value=v:null),"error-messages":t(p).responsible_id,items:t(r).users,label:"Responsável","item-title":"first_name","item-value":"id",ref:"responsibleRef"},null,8,["modelValue","error-messages","items"])]),_:1})]),_:1}),e(b,null,{default:l(()=>[e(n,{cols:"12"},{default:l(()=>[e(le,{modelValue:t(a),"onUpdate:modelValue":d[10]||(d[10]=v=>C(a)?a.value=v:null),"error-messages":t(p).observation,label:"Observação",variant:"outlined",color:"primary",rows:"5",maxlength:"500",counter:""},null,8,["modelValue","error-messages"])]),_:1})]),_:1}),e(b,null,{default:l(()=>[e(n,{cols:"6"},{default:l(()=>[e(X,{modelValue:t(ce),"onUpdate:modelValue":d[11]||(d[11]=v=>C(ce)?ce.value=v:null),"error-messages":t(p).expected_date,label:"Data Esperada",variant:"outlined",type:"date"},null,8,["modelValue","error-messages"])]),_:1}),e(n,{cols:"6"},{default:l(()=>[e(X,{modelValue:t(ve),"onUpdate:modelValue":d[12]||(d[12]=v=>C(ve)?ve.value=v:null),"error-messages":t(p).finish_date,label:"Data de Conclusão",variant:"outlined",type:"date"},null,8,["modelValue","error-messages"])]),_:1})]),_:1}),e(b,null,{default:l(()=>[e(n,{cols:"6"},{default:l(()=>[e(O,{modelValue:t(J),"onUpdate:modelValue":d[13]||(d[13]=v=>C(J)?J.value=v:null),"error-messages":t(p).priority_id,items:t(r).priori,label:"Prioridade","item-title":"name","item-value":"id"},null,8,["modelValue","error-messages","items"])]),_:1}),e(n,{cols:"6"},{default:l(()=>[e(le,{modelValue:t(c),"onUpdate:modelValue":d[14]||(d[14]=v=>C(c)?c.value=v:null),"error-messages":t(p).priority_justification,label:"Justificativa da Prioridade",variant:"outlined",color:"primary",rows:"5",maxlength:"500",counter:""},null,8,["modelValue","error-messages"])]),_:1})]),_:1}),e(b,null,{default:l(()=>[e(n,{cols:"6"},{default:l(()=>[e(O,{modelValue:t(B),"onUpdate:modelValue":d[15]||(d[15]=v=>C(B)?B.value=v:null),"error-messages":t(p).complexity_id,items:t(r).complexity,label:"Complexidade do Chamado","item-title":"name","item-value":"id",ref:"complexityRef"},null,8,["modelValue","error-messages","items"])]),_:1}),e(n,{cols:"6"},{default:l(()=>[e(le,{modelValue:t(oe),"onUpdate:modelValue":d[16]||(d[16]=v=>C(oe)?oe.value=v:null),"error-messages":t(p).complexity_justification,label:"Justificativa da Complexidade",variant:"outlined",color:"primary",rows:"5",ref:"complexityJustificationRef",maxlength:"500",counter:""},null,8,["modelValue","error-messages"])]),_:1})]),_:1}),e(b,null,{default:l(()=>[e(n,{cols:"12"},{default:l(()=>[e(Qe,{modelValue:t(pe),"onUpdate:modelValue":d[17]||(d[17]=v=>C(pe)?pe.value=v:null),label:t(pe)?"Ativo":"Inativo",color:"primary",inset:""},null,8,["modelValue","label"])]),_:1})]),_:1}),e(b,{justify:"end"},{default:l(()=>[e(n,{cols:"12",md:"auto"},{default:l(()=>[e($,{flat:"",text:"Cancelar",onClick:d[18]||(d[18]=v=>T("cancel"))})]),_:1}),e(n,{cols:"12",md:"auto"},{default:l(()=>[e($,{type:"submit",color:"primary",flat:"",loading:t(P),text:"Editar"},null,8,["loading"])]),_:1})]),_:1})]),_:1})]),_:1},8,["onSubmit"])]))}};const vt={props:{task:{type:Object,required:!0}},emits:["cancel"],setup(F,{emit:T}){const s=F,r=be(),Q=[{label:"Grãos",value:1},{label:"Proteína",value:2}],j=[{label:"Algo que funcionava, parou de funcionar!",value:1},{label:"Fazer uma solicitação, algo novo (melhoria)!",value:2}],q=i(s.task.segment),p=i(s.task.task_type),P=i(s.task.task_code),k=i(s.task.name),w=i(s.task.description),S=i(s.task.owner_id),z=i(s.task.responsible_id),M=i(s.task.task_status_id),x=i(s.task.system_screen),E=i(s.task.observation),J=i(s.task.priority_id),B=i(s.task.complexity_id),L=i(s.task.priority_justification),U=i(s.task.complexity_justification),y=i(s.task.finish_date?s.task.finish_date.split("T")[0]:null),I=i(s.task.expected_date?s.task.expected_date.split("T")[0]:null),h=i(s.task.created_at?s.task.created_at.split("T")[0]:null),D=i(s.task.status);return(_,o)=>(g(),R("div",null,[e(Ce,null,{default:l(()=>[e(b,null,{default:l(()=>[e(n,{cols:"6"},{default:l(()=>[e(O,{modelValue:q.value,"onUpdate:modelValue":o[0]||(o[0]=a=>q.value=a),items:Q,label:"Segmento","item-title":"label","item-value":"value",disabled:"",class:"custom-label"},null,8,["modelValue"])]),_:1}),e(n,{cols:"6"},{default:l(()=>[e(O,{modelValue:p.value,"onUpdate:modelValue":o[1]||(o[1]=a=>p.value=a),items:j,label:"Tipo de chamado","item-title":"label","item-value":"value",disabled:"",class:"custom-label"},null,8,["modelValue"])]),_:1})]),_:1}),e(b,null,{default:l(()=>[e(n,{cols:"6"},{default:l(()=>[e(X,{modelValue:P.value,"onUpdate:modelValue":o[2]||(o[2]=a=>P.value=a),label:"Número do chamado",variant:"outlined",color:"primary",disabled:"",class:"custom-label"},null,8,["modelValue"])]),_:1}),e(n,{cols:"6"},{default:l(()=>[e(X,{modelValue:k.value,"onUpdate:modelValue":o[3]||(o[3]=a=>k.value=a),label:"Título",variant:"outlined",color:"primary",readonly:"",class:"custom-label",rows:"2",maxlength:"60"},null,8,["modelValue"])]),_:1})]),_:1}),e(b,null,{default:l(()=>[e(n,{cols:"6"},{default:l(()=>[e(X,{modelValue:x.value,"onUpdate:modelValue":o[4]||(o[4]=a=>x.value=a),label:"Tela",variant:"outlined",color:"primary",disabled:"",class:"custom-label"},null,8,["modelValue"])]),_:1})]),_:1}),e(b,null,{default:l(()=>[e(n,{cols:"12"},{default:l(()=>[e(le,{modelValue:w.value,"onUpdate:modelValue":o[5]||(o[5]=a=>w.value=a),label:"Descrição",variant:"outlined",color:"primary",rows:"5",readonly:"",class:"custom-label",maxlength:"150",counter:""},null,8,["modelValue"])]),_:1})]),_:1}),e(b,null,{default:l(()=>[e(n,{cols:"6"},{default:l(()=>[e(O,{modelValue:S.value,"onUpdate:modelValue":o[6]||(o[6]=a=>S.value=a),items:t(r).users,label:"Solicitante","item-title":"first_name","item-value":"id",disabled:"",class:"custom-label"},null,8,["modelValue","items"])]),_:1}),e(n,{cols:"6"},{default:l(()=>[e(X,{modelValue:h.value,"onUpdate:modelValue":o[7]||(o[7]=a=>h.value=a),label:"Data de Criação",variant:"outlined",type:"date",disabled:"",class:"custom-label"},null,8,["modelValue"])]),_:1})]),_:1}),e(b,null,{default:l(()=>[e(n,{cols:"6"},{default:l(()=>[e(O,{modelValue:M.value,"onUpdate:modelValue":o[8]||(o[8]=a=>M.value=a),items:t(r).taskStatus,label:"Status do Chamado","item-title":"name","item-value":"id",disabled:"",class:"custom-label"},null,8,["modelValue","items"])]),_:1}),e(n,{cols:"6"},{default:l(()=>[e(O,{modelValue:z.value,"onUpdate:modelValue":o[9]||(o[9]=a=>z.value=a),items:t(r).users,label:"Responsável","item-title":"first_name","item-value":"id",disabled:"",class:"custom-label"},null,8,["modelValue","items"])]),_:1})]),_:1}),e(b,null,{default:l(()=>[e(n,{cols:"12"},{default:l(()=>[e(le,{modelValue:E.value,"onUpdate:modelValue":o[10]||(o[10]=a=>E.value=a),label:"Observação",variant:"outlined",color:"primary",rows:"5",readonly:"",class:"custom-label",maxlength:"500",counter:""},null,8,["modelValue"])]),_:1})]),_:1}),e(b,null,{default:l(()=>[e(n,{cols:"6"},{default:l(()=>[e(X,{modelValue:I.value,"onUpdate:modelValue":o[11]||(o[11]=a=>I.value=a),label:"Data Esperada",variant:"outlined",type:"date",disabled:"",class:"custom-label"},null,8,["modelValue"])]),_:1}),e(n,{cols:"6"},{default:l(()=>[e(X,{modelValue:y.value,"onUpdate:modelValue":o[12]||(o[12]=a=>y.value=a),label:"Data de Conclusão",variant:"outlined",type:"date",disabled:"",class:"custom-label"},null,8,["modelValue"])]),_:1})]),_:1}),e(b,null,{default:l(()=>[e(n,{cols:"6"},{default:l(()=>[e(O,{modelValue:J.value,"onUpdate:modelValue":o[13]||(o[13]=a=>J.value=a),items:t(r).priori,label:"Prioridade","item-title":"name","item-value":"id",disabled:"",class:"custom-label"},null,8,["modelValue","items"])]),_:1}),e(n,{cols:"6"},{default:l(()=>[e(le,{modelValue:L.value,"onUpdate:modelValue":o[14]||(o[14]=a=>L.value=a),label:"Justificativa da Prioridade",variant:"outlined",color:"primary",rows:"5",readonly:"",class:"custom-label",maxlength:"500",counter:""},null,8,["modelValue"])]),_:1})]),_:1}),e(b,null,{default:l(()=>[e(n,{cols:"6"},{default:l(()=>[e(O,{modelValue:B.value,"onUpdate:modelValue":o[15]||(o[15]=a=>B.value=a),items:t(r).complexity,label:"Complexidade do Chamado","item-title":"name","item-value":"id",disabled:"",class:"custom-label"},null,8,["modelValue","items"])]),_:1}),e(n,{cols:"6"},{default:l(()=>[e(le,{modelValue:U.value,"onUpdate:modelValue":o[16]||(o[16]=a=>U.value=a),label:"Justificativa da Complexidade",variant:"outlined",color:"primary",rows:"5",readonly:"",class:"custom-label",maxlength:"500",counter:""},null,8,["modelValue"])]),_:1})]),_:1}),e(b,null,{default:l(()=>[e(n,{cols:"12"},{default:l(()=>[e(Qe,{modelValue:D.value,"onUpdate:modelValue":o[17]||(o[17]=a=>D.value=a),label:D.value?"Ativo":"Inativo",color:"primary",inset:"",disabled:""},null,8,["modelValue","label"])]),_:1})]),_:1}),e(b,{justify:"end"},{default:l(()=>[e(n,{cols:"12",md:"auto"},{default:l(()=>[e($,{flat:"",text:"Fechar",onClick:o[18]||(o[18]=a=>_.$emit("cancel"))})]),_:1})]),_:1})]),_:1})]))}},pt=Ke(vt,[["__scopeId","data-v-068686dd"]]),We=cl("chats",{state:()=>({messages:[]}),actions:{async fetchMessages(F){try{const T=await Ie.get(`/api/interactions/${F}`);this.messages=T.data}catch(T){console.error("Error fetching messages:",T)}},async createInteraction(F,T,s){try{return(await Ie.post("/api/interactions",{task_id:F,comment:T,user_id:s})).data}catch(r){console.error("Error creating interaction:",r)}},async uploadFile(F){try{return(await Ie.post("/api/interaction-file",F,{headers:{"Content-Type":"multipart/form-data"}})).data}catch(T){throw console.error("Error uploading file:",T),T}}}});function Xe(F){return`https://syscall-api.devtest.com.br//storage/${F}`}const Ye=F=>(fl("data-v-cfb68499"),F=F(),bl(),F),_t=Ye(()=>u("span",{class:"text-h5"},"Notas de Trabalho",-1)),ft={class:"comment-text"},bt={key:0},yt=["href"],Vt={class:"text-right text-caption mt-2"},gt={class:"email-text"},ht=N(" - "),kt={class:"email-text"},xt=N("Adicionar Comentário"),Ct=N("Fechar"),wt=Ye(()=>u("span",{class:"text-h5"},"Adicionar Comentário",-1)),St=N("Cancelar"),Ut=N("Adicionar"),$t={props:{taskId:{type:Number,required:!0},showChatModal:{type:Boolean,required:!0},userId:{type:Number,required:!0}},emits:["update:showChatModal"],setup(F,{emit:T}){const s=F,r=We(),{messages:Q}=ke(r),j=i(!1),q=i(!1),p=je({comment:Y().required().label("Comentário"),files:Be().of(Le()).nullable()}),{handleSubmit:P,errors:k,isSubmitting:w,resetForm:S}=De({validationSchema:p,initialValues:{comment:"",files:[]}}),z=P(async U=>{try{const y=await r.createInteraction(s.taskId,U.comment,s.userId);if(U.files&&U.files.length>0){const I=new FormData;I.append("interaction_id",y.id);for(const h of U.files)I.append("files[]",h);await r.uploadFile(I)}await r.fetchMessages(s.taskId),q.value=!1,T("update:showChatModal",!1)}catch(y){console.error("Erro ao adicionar comentário ou fazer upload dos arquivos:",y)}}),{value:M}=f("comment"),{value:x}=f("files");de(()=>s.showChatModal,async U=>{U?(j.value=!0,await r.fetchMessages(s.taskId)):j.value=!1});const E=()=>{T("update:showChatModal",!1)},J=()=>{S(),q.value=!0},B=U=>{const y={year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit"};return new Date(U).toLocaleDateString("pt-BR",y)},L=H(()=>[...Q.value].sort((U,y)=>y.id-U.id));return(U,y)=>{const I=vl("v-list-item-content");return g(),Z(ue,{modelValue:j.value,"onUpdate:modelValue":y[4]||(y[4]=h=>j.value=h),"max-width":"800px"},{default:l(()=>[e(ae,null,{default:l(()=>[e(me,null,{default:l(()=>[_t]),_:1}),e(se,null,{default:l(()=>[e(Ce,null,{default:l(()=>[e(b,null,{default:l(()=>[(g(!0),R(xe,null,Ue(t(L),(h,D)=>(g(),Z(n,{key:D,cols:"12"},{default:l(()=>[e(ae,{class:"mb-3"},{default:l(()=>[e(se,null,{default:l(()=>[u("div",ft,W(h.comment),1),h.interaction_files&&h.interaction_files.length?(g(),R("div",bt,[e(fe),e(pl,null,{default:l(()=>[(g(!0),R(xe,null,Ue(h.interaction_files,(_,o)=>(g(),Z(_e,{key:o},{default:l(()=>[e(I,null,{default:l(()=>[e(_l,null,{default:l(()=>[u("a",{href:t(Xe)(_.path),target:"_blank"},W(_.name),9,yt)]),_:2},1024)]),_:2},1024)]),_:2},1024))),128))]),_:2},1024)])):ie("",!0),u("div",Vt,[u("span",gt,W(h.user_email),1),ht,u("span",kt,W(B(h.created_at)),1)])]),_:2},1024)]),_:2},1024)]),_:2},1024))),128))]),_:1})]),_:1})]),_:1}),e($e,null,{default:l(()=>[e($,{color:"primary",onClick:J},{default:l(()=>[xt]),_:1}),e($,{color:"secondary",onClick:E},{default:l(()=>[Ct]),_:1})]),_:1})]),_:1}),e(ue,{modelValue:q.value,"onUpdate:modelValue":y[3]||(y[3]=h=>q.value=h),"max-width":"500px"},{default:l(()=>[e(ae,null,{default:l(()=>[e(me,null,{default:l(()=>[wt]),_:1}),e(se,null,{default:l(()=>[e(Pe,{onSubmit:qe(t(z),["prevent"])},{default:l(()=>[e(le,{modelValue:t(M),"onUpdate:modelValue":y[0]||(y[0]=h=>C(M)?M.value=h:null),label:"Comentário","error-messages":t(k).comment},null,8,["modelValue","error-messages"]),e(He,{modelValue:t(x),"onUpdate:modelValue":y[1]||(y[1]=h=>C(x)?x.value=h:null),label:"Selecionar Arquivos","error-messages":t(k).files,"show-size":"",multiple:""},null,8,["modelValue","error-messages"])]),_:1},8,["onSubmit"])]),_:1}),e($e,null,{default:l(()=>[e($,{color:"blue darken-1",text:"",onClick:y[2]||(y[2]=h=>q.value=!1)},{default:l(()=>[St]),_:1}),e($,{color:"blue darken-1",text:"",loading:t(w),onClick:t(z)},{default:l(()=>[Ut]),_:1},8,["loading","onClick"])]),_:1})]),_:1})]),_:1},8,["modelValue"])]),_:1},8,["modelValue"])}}},Ee=Ke($t,[["__scopeId","data-v-cfb68499"]]),Tt=u("span",{class:"text-h5"},"Anexos do Chamado",-1),At=["href"],Mt=N("Fechar"),It={props:{taskId:{type:Number,required:!0},showAttachmentsModal:{type:Boolean,required:!0}},emits:["update:showAttachmentsModal"],setup(F,{emit:T}){const s=F,r=be(),{taskFiles:Q}=ke(r),j=i(!1);de(()=>s.showAttachmentsModal,async P=>{P?(await r.getTaskFiles(s.taskId),j.value=!0):j.value=!1});const q=()=>{T("update:showAttachmentsModal",!1)},p=async P=>{await r.deleteTaskFile(P),await r.getTaskFiles(s.taskId)};return(P,k)=>(g(),Z(ue,{modelValue:j.value,"onUpdate:modelValue":k[0]||(k[0]=w=>j.value=w),"max-width":"800px"},{default:l(()=>[e(ae,null,{default:l(()=>[e(me,null,{default:l(()=>[Tt]),_:1}),e(se,null,{default:l(()=>[e(Ce,null,{default:l(()=>[e(b,null,{default:l(()=>[(g(!0),R(xe,null,Ue(t(Q),(w,S)=>(g(),Z(n,{key:S,cols:"12"},{default:l(()=>[e(ae,{class:"mb-3"},{default:l(()=>[e(se,null,{default:l(()=>[u("a",{href:t(Xe)(w.path),target:"_blank"},W(w.name),9,At),e($,{icon:"",onClick:z=>p(w.id)},{default:l(()=>[e(t(ul))]),_:2},1032,["onClick"])]),_:2},1024)]),_:2},1024)]),_:2},1024))),128))]),_:1})]),_:1})]),_:1}),e($e,null,{default:l(()=>[e($,{color:"secondary",onClick:q},{default:l(()=>[Mt]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"]))}},Ft={class:"mb-5 pb-5 border-b border-opacity-100"},jt=N("Novo Chamado"),qt=N("Adicionar chamado"),Pt=N("Visualizar chamado"),Dt=N("Editar chamado"),Rt=N("Cancelar"),Ot=N("Deletar"),Nt=u("span",{class:"text-h5"},"Adicionar Nota de Trabalho",-1),Et=N("Cancelar"),zt=N("Adicionar"),Qt={setup(F){const T=Fe(),s=be(),{toShow:r,toEdit:Q,toDelete:j}=ke(s),q=We();ke(q);const{isLoading:p}=he(s.getTasks());he(s.getPriorities()),he(s.getComplexities()),he(s.getTasksStatus()),he(s.getUsers());const P=H({get(){return!!Object.keys(Q.value).length},set(_){_||(Q.value={})}}),k=H({get(){return!!Object.keys(r.value).length},set(_){_||(r.value={})}}),w=H({get(){return!!Object.keys(j.value).length},set(_){_||(j.value={})}}),S=i(!1);async function z(_){S.value=!0,await s.deleteTask(_.id),j.value={},S.value=!1}const M=i(!1),x=i(null),E=i(!1),J=i(""),B=i(T.user.id),L=_=>{x.value=_.id,M.value=!0},U=_=>{x.value=_.id,E.value=!0},y=async()=>{await q.addMessage(x.value,J.value,B.value),J.value="",E.value=!1},I=i(!1),h=_=>{x.value=_.id,I.value=!0},D=i("");return de(D,_=>{s.getTasks(_)}),(_,o)=>(g(),R("div",null,[u("div",Ft,[e(b,null,{default:l(()=>[e(n,{cols:"12",lg:"4",md:"6"},{default:l(()=>[e(X,{density:"compact",modelValue:D.value,"onUpdate:modelValue":o[0]||(o[0]=a=>D.value=a),label:"Pesquisar Chamados","append-inner-icon":"mdi-magnify","hide-details":"",variant:"outlined"},null,8,["modelValue"])]),_:1}),e(n,{class:"text-right"},{default:l(()=>[e(ue,{width:"800"},{activator:l(({props:a})=>[e($,ne({flat:"",color:"primary"},a),{default:l(()=>[jt]),_:2},1040)]),default:l(({isActive:a})=>[e(ae,{width:"800"},{default:l(()=>[e(me,null,{default:l(()=>[qt]),_:1}),e(se,null,{default:l(()=>[e(mt,{onAdd:c=>a.value=!1,onCancel:c=>a.value=!1},null,8,["onAdd","onCancel"])]),_:2},1024)]),_:2},1024)]),_:1})]),_:1})]),_:1})]),t(p)?(g(),Z(Vl,{key:0,width:3,color:"primary",indeterminate:""})):(g(),R(xe,{key:1},[e(rt,{onOpenChat:L,onAddNote:U,onOpenAttachments:h}),e(ue,{modelValue:t(k),"onUpdate:modelValue":o[1]||(o[1]=a=>C(k)?k.value=a:null),width:"800"},{default:l(({isActive:a})=>[e(ae,{width:"800"},{default:l(()=>[e(me,null,{default:l(()=>[Pt]),_:1}),e(se,null,{default:l(()=>[e(pt,{task:t(r),onCancel:c=>a.value=!1,onShow:c=>a.value=!1},null,8,["task","onCancel","onShow"])]),_:2},1024)]),_:2},1024)]),_:1},8,["modelValue"]),e(ue,{modelValue:t(P),"onUpdate:modelValue":o[2]||(o[2]=a=>C(P)?P.value=a:null),width:"800"},{default:l(({isActive:a})=>[e(ae,{width:"800"},{default:l(()=>[e(me,null,{default:l(()=>[Dt]),_:1}),e(se,null,{default:l(()=>[e(ct,{task:t(Q),onCancel:c=>a.value=!1,onEdit:c=>a.value=!1},null,8,["task","onCancel","onEdit"])]),_:2},1024)]),_:2},1024)]),_:1},8,["modelValue"]),e(ue,{modelValue:t(w),"onUpdate:modelValue":o[4]||(o[4]=a=>C(w)?w.value=a:null),width:"800"},{default:l(({isActive:a})=>[e(ae,{"prepend-icon":t(ze),title:"Você tem certeza que deseja deletar este chamado?"},{actions:l(()=>[e(yl),e($,{onClick:c=>a.value=!1},{default:l(()=>[Rt]),_:2},1032,["onClick"]),e($,{onClick:o[3]||(o[3]=c=>z(t(j))),variant:"tonal",color:"error",loading:S.value},{default:l(()=>[Ot]),_:1},8,["loading"])]),_:2},1032,["prepend-icon"])]),_:1},8,["modelValue"])],64)),e(Ee,{taskId:x.value,showChatModal:M.value,userId:B.value,"onUpdate:showChatModal":o[5]||(o[5]=a=>M.value=a)},null,8,["taskId","showChatModal","userId"]),e(ue,{modelValue:E.value,"onUpdate:modelValue":o[8]||(o[8]=a=>E.value=a),"max-width":"500px"},{default:l(()=>[e(ae,null,{default:l(()=>[e(me,null,{default:l(()=>[Nt]),_:1}),e(se,null,{default:l(()=>[e(Ee,{taskId:x.value,showChatModal:M.value,userId:B.value,"onUpdate:showChatModal":o[6]||(o[6]=a=>M.value=a)},null,8,["taskId","showChatModal","userId"])]),_:1}),e($e,null,{default:l(()=>[e($,{color:"blue darken-1",text:"",onClick:o[7]||(o[7]=a=>E.value=!1)},{default:l(()=>[Et]),_:1}),e($,{color:"blue darken-1",text:"",onClick:y},{default:l(()=>[zt]),_:1})]),_:1})]),_:1})]),_:1},8,["modelValue"]),e(It,{taskId:x.value,showAttachmentsModal:I.value,"onUpdate:showAttachmentsModal":o[9]||(o[9]=a=>I.value=a)},null,8,["taskId","showAttachmentsModal"])]))}};export{Qt as default};