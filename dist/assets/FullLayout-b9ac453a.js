import{r as f,o as l,e as c,w as t,a as n,b as e,t as x,f as pe,g as K,h as he,d as p,n as E,i as fe,j as oe,k as le,l as h,m as C,p as ne,c as v,q as D,F as k,s as ie,u as S,v as re,x as z,y as s,z as ve,V as m,A as T,B as M,C as N,R as ce,D as be,E as I,G as P,H,I as de,J as ye,K as ge,L as $,M as xe,N as ke,O as Ce,P as Ee,Q as ze,S as R,T as Te,U as $e,W as we,X as A,Y as G,Z as Q,_ as j,$ as W,a0 as Y,a1 as F,a2 as q}from"./index-3298f63e.js";import{u as w}from"./customizer-d0a5651f.js";import{L as Le,a as Z,U,P as Ve,M as Ae,b as J,G as Re,c as De,d as Ie,T as He,e as Se,C as X,f as Me,g as Be,h as ee}from"./vue-tabler-icons.es-9d3192e3.js";import{_ as O}from"./user-1-ec08f839.js";import{_ as Ue}from"./_plugin-vue_export-helper-c27b6911.js";const Ne=[{header:"Home"},{title:"Dashboard",icon:Le,chipColor:"surface",chipBgColor:"secondary",to:{name:"dashboard"}},{header:"Apps"},{title:"Chamados",icon:Z,to:{name:"tasks"},chipColor:"surface",chipBgColor:"secondary"},{title:"Status dos Chamados",icon:Z,to:{name:"tasksStatus"},chipColor:"surface",chipBgColor:"secondary",adminOnly:!0},{title:"Teams",icon:U,to:{name:"teams"},chipColor:"surface",chipBgColor:"secondary",adminOnly:!0},{title:"Priorities",icon:U,to:{name:"priorities"},chipColor:"surface",chipBgColor:"secondary",adminOnly:!0},{title:"Complexities",icon:U,to:{name:"complexities"},chipColor:"surface",chipBgColor:"secondary",adminOnly:!0}],Pe={class:"mini-icon"},Oe={class:"mini-text"},Ke={props:{item:Object},setup(o){const a=o;return(d,_)=>{const u=f("DotsIcon");return l(),c(pe,{class:"smallCap text-uppercase text-subtitle-2 mt-5 font-weight-bold d-flex align-items-center"},{default:t(()=>[n("span",Pe,[e(u,{size:"16","stroke-width":"1.5",class:"iconClass"})]),n("span",Oe,x(d.$t(a.item.header)),1)]),_:1})}}},ue={props:{item:Object,level:Number},setup(o){return(a,d)=>o.level>0?(l(),c(K(o.item),{key:0,size:"14","stroke-width":"1.5",class:"iconClass"})):(l(),c(K(o.item),{key:1,size:"20","stroke-width":"1.5",class:"iconClass"}))}},me={props:{item:Object,level:Number},setup(o){return(a,d)=>(l(),c(C,{to:o.item.type==="external"?"":o.item.to,href:o.item.type==="external"?o.item.to:"",exact:"",rounded:"",class:"mb-1",disabled:o.item.disabled,target:o.item.type==="external"?"_blank":""},he({prepend:t(()=>[e(ue,{item:o.item.icon,level:o.level},null,8,["item","level"])]),default:t(()=>[e(oe,null,{default:t(()=>[p(x(a.$t(o.item.title)),1)]),_:1}),o.item.subCaption?(l(),c(le,{key:0,class:"text-caption mt-n1 hide-menu"},{default:t(()=>[p(x(o.item.subCaption),1)]),_:1})):h("",!0)]),_:2},[o.item.chip?{name:"append",fn:t(()=>[e(fe,{color:o.item.chipColor,class:E("sidebarchip hide-menu bg-"+o.item.chipBgColor),size:(o.item.chipIcon,"small"),variant:o.item.chipVariant,"prepend-icon":o.item.chipIcon},{default:t(()=>[p(x(o.item.chip),1)]),_:1},8,["color","class","size","variant","prepend-icon"])])}:void 0]),1032,["to","href","disabled","target"]))}},Ge={props:{item:Object,level:Number},setup(o){return(a,d)=>{const _=f("NavCollapse",!0);return l(),c(ie,{"no-action":""},{activator:t(({props:u})=>[e(C,ne(u,{value:o.item.title,rounded:"",class:"mb-1"}),{prepend:t(()=>[e(ue,{item:o.item.icon,level:o.level},null,8,["item","level"])]),default:t(()=>[e(oe,{class:"mr-auto"},{default:t(()=>[p(x(a.$t(o.item.title)),1)]),_:1}),o.item.subCaption?(l(),c(le,{key:0,class:"text-caption mt-n1 hide-menu"},{default:t(()=>[p(x(o.item.subCaption),1)]),_:1})):h("",!0)]),_:2},1040,["value"])]),default:t(()=>[o.item.children?(l(!0),v(k,{key:0},D(o.item.children,(u,i)=>(l(),v(k,{key:i},[u.children?(l(),c(_,{key:0,item:u,level:o.level+1},null,8,["item","level"])):(l(),c(me,{key:1,item:u,level:o.level+1},null,8,["item","level"]))],64))),128)):h("",!0)]),_:1})}}};const Qe={class:"d-flex align-center hide-menu"},je=n("img",{src:O,alt:"user",height:"40"},null,-1),We={class:"ml-4"},Ye={class:"mb-n1 text-h6 textPrimary"},Fe=n("span",{class:"text-subtitle-2 textSecondary"},null,-1),qe={class:"ml-auto"},Ze=p("Logout"),Je={setup(o){const a=S();return re(),(d,_)=>(l(),c(T,{rounded:"md",color:"lightsecondary",class:"px-4 py-3 ExtraBox"},{default:t(()=>[n("div",Qe,[e(z,{size:"40"},{default:t(()=>[je]),_:1}),n("div",We,[n("h4",Ye,x(s(a).user.first_name),1),Fe]),n("div",qe,[e(m,{variant:"text",icon:"",rounded:"md",color:"primary",to:{name:"logout"}},{default:t(()=>[e(s(Ve)),e(ve,{activator:"parent",location:"top"},{default:t(()=>[Ze]),_:1})]),_:1})])])]),_:1}))}},Xe="/assets/logo_syscall-8e4c62cd.jpg",et={class:""},tt=n("img",{src:Xe,class:"position-relative d-none d-lg-flex logo-size",alt:"login-background",style:{"border-radius":"10px"}},null,-1),at=[tt],st={setup(o){const a=w();return M(()=>a.actTheme==="DARK_BLUE_THEME"||a.actTheme==="DARK_AQUA_THEME"||a.actTheme==="DARK_ORANGE_THEME"||a.actTheme==="DARK_PURPLE_THEME"||a.actTheme==="DARK_GREEN_THEME"||a.actTheme==="DARK_CYAN_THEME"),(d,_)=>(l(),v("div",et,at))}},ot="/assets/dark-rtl-logo-4f413703.svg",lt={class:"logo"},nt=["src"],it=N({setup(o){return(a,d)=>(l(),v("div",lt,[e(s(ce),{to:"/"},{default:t(()=>[n("img",{src:s(ot),alt:"home"},null,8,nt)]),_:1})]))}}),rt="/assets/light-logo-rtl-3c5742a3.svg",ct={class:"logo"},dt=["src"],ut=N({setup(o){return(a,d)=>(l(),v("div",ct,[e(s(ce),{to:"/"},{default:t(()=>[n("img",{src:s(rt),alt:"home"},null,8,dt)]),_:1})]))}}),mt={setup(o){const a=w(),d=M(()=>a.actTheme==="DARK_BLUE_THEME"||a.actTheme==="DARK_AQUA_THEME"||a.actTheme==="DARK_ORANGE_THEME"||a.actTheme==="DARK_PURPLE_THEME"||a.actTheme==="DARK_GREEN_THEME"||a.actTheme==="DARK_CYAN_THEME");return(_,u)=>s(d)?(l(),c(it,{key:0})):(l(),c(ut,{key:1}))}},_t={class:"pa-5"},pt={class:"pa-5"},ht={class:"pa-6 userbottom"},te={setup(o){const a=w(),d=be(Ne),_=S(),u=M(()=>_.user.teams.some(i=>i.is_admin));return(i,y)=>{const g=f("perfect-scrollbar");return l(),c(H,{left:"",modelValue:s(a).Sidebar_drawer,"onUpdate:modelValue":y[0]||(y[0]=r=>s(a).Sidebar_drawer=r),elevation:"0","rail-width":"75","mobile-breakpoint":"960",app:"",class:"leftSidebar",rail:s(a).mini_sidebar,"expand-on-hover":"",width:"270"},{default:t(()=>[s(a).setRTLLayout?(l(),c(I,{key:0,rtl:""},{default:t(()=>[n("div",_t,[e(mt)])]),_:1})):(l(),c(I,{key:1},{default:t(()=>[n("div",pt,[e(st)])]),_:1})),e(g,{class:"scrollnavbar"},{default:t(()=>[e(P,{class:"pa-6"},{default:t(()=>[(l(!0),v(k,null,D(s(d),(r,b)=>(l(),v(k,{key:b},[!r.adminOnly||r.adminOnly&&s(u)?(l(),v(k,{key:0},[r.header?(l(),c(Ke,{key:0,item:r},null,8,["item"])):r.children?(l(),c(Ge,{key:1,class:"leftPadding",item:r,level:0},null,8,["item"])):(l(),c(me,{key:2,item:r,class:"leftPadding"},null,8,["item"]))],64)):h("",!0)],64))),128))]),_:1}),n("div",ht,[e(Je)])]),_:1})]),_:1},8,["modelValue","rail"])}}},ft=[{avatar:"",title:"Meu perfil",subtitle:"Configurações pessoais",href:"/pages/account-settings"}],vt=n("img",{src:O,width:"35",alt:"Julia"},null,-1),bt={class:"px-8 pt-6"},yt=n("h6",{class:"text-h5 font-weight-medium"},"Dados do usuário",-1),gt={class:"d-flex align-center mt-4 pb-6"},xt=n("img",{src:O,width:"80"},null,-1),kt={class:"ml-3"},Ct={class:"text-h6 mb-n1"},Et=n("span",{class:"text-subtitle-1 font-weight-regular textSecondary"},null,-1),zt={class:"d-flex align-center mt-1"},Tt={class:"text-subtitle-1 font-weight-regular textSecondary ml-2"},$t={class:"text-subtitle-1 font-weight-bold mb-2 custom-title"},wt={class:"text-subtitle-1 font-weight-regular textSecondary"},Lt={class:"pt-4 pb-6 px-8 text-center"},Vt=p("Logout"),At={setup(o){const a=S();return re(),(d,_)=>{const u=f("perfect-scrollbar");return l(),c(ge,{"close-on-content-click":!1},{activator:t(({props:i})=>[e(m,ne({class:"custom-hover-primary",variant:"text"},i,{icon:""}),{default:t(()=>[e(z,{size:"35"},{default:t(()=>[vt]),_:1})]),_:2},1040)]),default:t(()=>[e(T,{rounded:"md",width:"360",elevation:"10"},{default:t(()=>[n("div",bt,[yt,n("div",gt,[e(z,{size:"80"},{default:t(()=>[xt]),_:1}),n("div",kt,[n("h6",Ct,x(s(a).user.first_name),1),Et,n("div",zt,[e(s(Ae),{size:"18","stroke-width":"1.5"}),n("span",Tt,x(s(a).user.email),1)])])]),e(de)]),e(u,{style:{height:"calc(100vh - 240px)","max-height":"240px"}},{default:t(()=>[e(P,{class:"py-0 theme-list",lines:"two"},{default:t(()=>[(l(!0),v(k,null,D(s(ft),i=>(l(),c(C,{key:i.title,class:"py-4 px-8 custom-text-primary",to:i.href},{prepend:t(()=>[e(z,{size:"48",color:"lightprimary",class:"mr-3",rounded:"md"},{default:t(()=>[e(ye,{src:i.avatar,width:"24",height:"24",alt:i.avatar},null,8,["src","alt"])]),_:2},1024)]),default:t(()=>[n("div",null,[n("h6",$t,x(i.title),1)]),n("p",wt,x(i.subtitle),1)]),_:2},1032,["to"]))),128))]),_:1})]),_:1}),n("div",Lt,[e(m,{color:"primary",variant:"outlined",block:"",to:{name:"logout"}},{default:t(()=>[Vt]),_:1})])]),_:1})]),_:1})}}};$(["Apps"]);const Rt={},L=o=>(Ce("data-v-2832bb93"),o=o(),Ee(),o),Dt={class:"pt-6"},It=L(()=>n("h5",{class:"text-h5 mb-4 px-5"},"Navigation",-1)),Ht=L(()=>n("h5",{class:"text-subtitle-1 ml-2"},"Apps",-1)),St=L(()=>n("h5",{class:"text-subtitle-1 ml-2"},"Chats",-1)),Mt=L(()=>n("h5",{class:"text-subtitle-1 ml-2"},"Calendar",-1)),Bt=L(()=>n("h5",{class:"text-subtitle-1 ml-2"},"Mail",-1)),Ut={class:"px-5"},Nt=L(()=>n("h5",{class:"text-h5 my-4"},"Quick Links",-1));function Pt(o,a,d,_,u,i){const y=f("AppsIcon"),g=f("AppsLink"),r=f("MessagesIcon"),b=f("CalendarIcon"),V=f("MailIcon"),_e=f("QuickLinks");return l(),v("div",Dt,[It,e(P,{opened:o.open,"onUpdate:opened":a[0]||(a[0]=B=>o.open=B),class:"right-sidebar"},{default:t(()=>[e(ie,{value:"Apps"},{activator:t(({props:B})=>[e(C,xe(ke(B)),{prepend:t(()=>[e(y,{width:"21","stroke-width":"1.5"})]),default:t(()=>[Ht]),_:2},1040)]),default:t(()=>[e(C,{class:"pl-6 pb-6"},{default:t(()=>[n("div",null,[e(g)])]),_:1})]),_:1}),e(C,null,{prepend:t(()=>[e(r,{width:"21","stroke-width":"1.5"})]),default:t(()=>[St]),_:1}),e(C,null,{prepend:t(()=>[e(b,{width:"21","stroke-width":"1.5"})]),default:t(()=>[Mt]),_:1}),e(C,null,{prepend:t(()=>[e(V,{width:"21","stroke-width":"1.5"})]),default:t(()=>[Bt]),_:1})]),_:1},8,["opened"]),n("div",Ut,[Nt,e(_e)])])}const Ot=Ue(Rt,[["render",Pt],["__scopeId","data-v-2832bb93"]]),Kt=n("div",{class:"hidden-md-and-down"},null,-1),Gt={class:"ml-2"},ae=N({setup(o){const a=w();$(!1);const d=$(!1),_=$((a.setHorizontalLayout,0));return ze(_,u=>{_.value=u}),(u,i)=>{const y=f("NotificationDD");return l(),v(k,null,[e($e,{elevation:"0",priority:_.value,height:"70",class:""},{default:t(()=>[e(m,{class:"hidden-md-and-down",icon:"",color:"primary",variant:"text",onClick:i[0]||(i[0]=R(g=>s(a).SET_MINI_SIDEBAR(!s(a).mini_sidebar),["stop"]))},{default:t(()=>[e(s(J),{size:"20","stroke-width":"1.5"})]),_:1}),e(m,{class:"hidden-lg-and-up",icon:"",variant:"flat",onClick:R(s(a).SET_SIDEBAR_DRAWER,["stop"]),size:"small"},{default:t(()=>[e(s(J),{size:"20","stroke-width":"1.5"})]),_:1},8,["onClick"]),e(T),Kt,e(Te),e(y),e(m,{variant:"text",color:"primary",class:"hidden-lg-and-up",icon:"",onClick:i[1]||(i[1]=R(g=>d.value=!d.value,["stop"]))},{default:t(()=>[e(s(Re),{size:"17","stroke-width":"1.5"})]),_:1}),n("div",Gt,[e(At)])]),_:1},8,["priority"]),e(H,{modelValue:d.value,"onUpdate:modelValue":i[2]||(i[2]=g=>d.value=g),location:"right",temporary:""},{default:t(()=>[e(Ot)]),_:1},8,["modelValue"])],64)}}}),Qt=n("div",{class:"pa-6"},[n("h5",{class:"text-h5"},"Settings")],-1),jt={class:"pa-6"},Wt=n("h6",{class:"text-h6 mb-2"},"Sidebar Layout",-1),Yt=p(" Vertical "),Ft=p(" Horizontal "),qt=n("h6",{class:"text-h6 mt-8 mb-5"},"Theme Direction",-1),Zt=p(" LTR "),Jt=p(" RTL "),Xt=n("h6",{class:"text-h6 mt-8 mb-5"},"Theme Color",-1),ea=n("h6",{class:"text-h6 mt-11 mb-5"},"Theme Dark Color",-1),ta=n("h6",{class:"text-h6 mt-11 mb-2"},"Container Option",-1),aa=p(" Boxed "),sa=p(" Full "),oa=n("h6",{class:"text-h6 mt-11 mb-2"},"Sidebar Type",-1),la=p(" Full "),na=p(" Collapse "),ia=n("h6",{class:"text-h6 mt-11 mb-2"},"Card with",-1),ra=p(" Shadow "),ca=p(" Border "),se={setup(o){we();const a=w(),d=$([{name:"BLUE_THEME",bg:"themeBlue"},{name:"AQUA_THEME",bg:"themeAqua"},{name:"PURPLE_THEME",bg:"themePurple"},{name:"GREEN_THEME",bg:"themeGreen"},{name:"CYAN_THEME",bg:"themeCyan"},{name:"ORANGE_THEME",bg:"themeOrange"}]),_=$([{name:"DARK_BLUE_THEME",bg:"themeDarkBlue"},{name:"DARK_AQUA_THEME",bg:"themeDarkAqua"},{name:"DARK_PURPLE_THEME",bg:"themeDarkPurple"},{name:"DARK_GREEN_THEME",bg:"themeDarkGreen"},{name:"DARK_CYAN_THEME",bg:"themeDarkCyan"},{name:"DARK_ORANGE_THEME",bg:"themeDarkOrange"}]);return(u,i)=>{const y=f("LayoutSidebarIcon"),g=f("perfect-scrollbar");return l(),v(k,null,[Qt,e(de),e(g,{style:{height:"calc(100vh - 90px)"}},{default:t(()=>[n("div",jt,[Wt,e(A,{modelValue:s(a).setHorizontalLayout,"onUpdate:modelValue":i[0]||(i[0]=r=>s(a).setHorizontalLayout=r),color:"primary",class:"my-2 btn-group-custom gap-3",rounded:"0",group:""},{default:t(()=>[e(m,{value:!1,variant:"text",elevation:"9",class:"rounded-md"},{default:t(()=>[e(s(De),{"stroke-width":"1.5",size:"21",class:"mr-2"}),Yt]),_:1}),e(m,{value:!0,variant:"text",elevation:"9",class:"rounded-md"},{default:t(()=>[e(s(Ie),{"stroke-width":"1.5",size:"21",class:"mr-2"}),Ft]),_:1})]),_:1},8,["modelValue"]),qt,e(A,{modelValue:s(a).setRTLLayout,"onUpdate:modelValue":i[1]||(i[1]=r=>s(a).setRTLLayout=r),color:"primary",class:"my-2 btn-group-custom gap-3",rounded:"0",group:""},{default:t(()=>[e(m,{value:!1,variant:"text",elevation:"9",class:"rounded-md"},{default:t(()=>[e(s(He),{"stroke-width":"1.5",size:"21"}),Zt]),_:1}),e(m,{value:!0,variant:"text",elevation:"9",class:"rounded-md"},{default:t(()=>[e(s(Se),{"stroke-width":"1.5",size:"21"}),Jt]),_:1})]),_:1},8,["modelValue"]),Xt,e(G,{mandatory:"",modelValue:s(a).actTheme,"onUpdate:modelValue":i[2]||(i[2]=r=>s(a).actTheme=r),class:"ml-n2 v-row"},{default:t(()=>[(l(!0),v(k,null,D(d.value,r=>(l(),c(j,{cols:"4",key:r.name,class:"pa-2"},{default:t(()=>[e(Q,{value:r.name},{default:t(({isSelected:b,toggle:V})=>[e(T,{rounded:"md",class:"border cursor-pointer d-block text-center px-5 py-4 hover-btns",elevation:"9",onClick:V},{default:t(()=>[e(z,{class:E(r.bg),size:"25"},{default:t(()=>[b?(l(),c(s(X),{key:0,color:"white",size:"18"})):h("",!0)]),_:2},1032,["class"])]),_:2},1032,["onClick"])]),_:2},1032,["value"])]),_:2},1024))),128))]),_:1},8,["modelValue"]),ea,e(G,{mandatory:"",modelValue:s(a).actTheme,"onUpdate:modelValue":i[3]||(i[3]=r=>s(a).actTheme=r),class:"ml-n2 v-row"},{default:t(()=>[(l(!0),v(k,null,D(_.value,r=>(l(),c(j,{cols:"4",key:r.name,class:"pa-2"},{default:t(()=>[e(Q,{value:r.name},{default:t(({isSelected:b,toggle:V})=>[e(T,{rounded:"md",class:"border cursor-pointer d-block text-center px-5 py-4 hover-btns",elevation:"9",onClick:V},{default:t(()=>[e(z,{class:E(r.bg),size:"25"},{default:t(()=>[b?(l(),c(s(X),{key:0,color:"white",size:"18"})):h("",!0)]),_:2},1032,["class"])]),_:2},1032,["onClick"])]),_:2},1032,["value"])]),_:2},1024))),128))]),_:1},8,["modelValue"]),ta,e(A,{modelValue:s(a).boxed,"onUpdate:modelValue":i[4]||(i[4]=r=>s(a).boxed=r),color:"primary",class:"my-2 btn-group-custom gap-3",rounded:"0",group:""},{default:t(()=>[e(m,{value:!0,variant:"text",elevation:"9",class:"rounded-md"},{default:t(()=>[e(s(Me),{"stroke-width":"1.5",size:"21",class:"mr-2"}),aa]),_:1}),e(m,{value:!1,variant:"text",elevation:"9",class:"rounded-md"},{default:t(()=>[e(s(Be),{"stroke-width":"1.5",size:"21",class:"mr-2"}),sa]),_:1})]),_:1},8,["modelValue"]),s(a).setHorizontalLayout!=!0?(l(),c(T,{key:0},{default:t(()=>[oa,e(A,{modelValue:s(a).mini_sidebar,"onUpdate:modelValue":i[5]||(i[5]=r=>s(a).mini_sidebar=r),color:"primary",class:"my-2 btn-group-custom gap-3",rounded:"0",group:""},{default:t(()=>[e(m,{value:!1,variant:"text",elevation:"9",class:"rounded-md"},{default:t(()=>[e(y,{"stroke-width":"1.5",size:"21",class:"mr-2"}),la]),_:1}),e(m,{value:!0,variant:"text",elevation:"9",class:"rounded-md"},{default:t(()=>[e(s(ee),{"stroke-width":"1.5",size:"21",class:"mr-2"}),na]),_:1})]),_:1},8,["modelValue"])]),_:1})):h("",!0),ia,e(A,{modelValue:s(a).setBorderCard,"onUpdate:modelValue":i[6]||(i[6]=r=>s(a).setBorderCard=r),color:"primary",class:"my-2 btn-group-custom gap-3",rounded:"0",group:""},{default:t(()=>[e(m,{value:!1,variant:"text",elevation:"9",class:"rounded-md"},{default:t(()=>[e(s(ee),{"stroke-width":"1.5",size:"21",class:"mr-2"}),ra]),_:1}),e(m,{value:!0,variant:"text",elevation:"9",class:"rounded-md"},{default:t(()=>[e(y,{"stroke-width":"1.5",size:"21",class:"mr-2"}),ca]),_:1})]),_:1},8,["modelValue"])])]),_:1})],64)}}},ha={setup(o){const a=w(),d=S(),_=M(()=>d.user.teams.some(u=>u.is_admin));return(u,i)=>{const y=f("HorizontalHeader"),g=f("HorizontalSidebar"),r=f("SettingsIcon");return s(a).setRTLLayout?(l(),c(I,{key:0,rtl:""},{default:t(()=>[e(q,{theme:s(a).actTheme,class:E([s(a).actTheme,s(a).mini_sidebar?"mini-sidebar":"",s(a).setHorizontalLayout?"horizontalLayout":"verticalLayout",s(a).setBorderCard?"cardBordered":""])},{default:t(()=>[e(H,{app:"",temporary:"",elevation:"10",location:"left",modelValue:s(a).Customizer_drawer,"onUpdate:modelValue":i[0]||(i[0]=b=>s(a).Customizer_drawer=b),width:"320",class:"left-customizer"},{default:t(()=>[e(se)]),_:1},8,["modelValue"]),s(a).setHorizontalLayout?h("",!0):(l(),c(te,{key:0})),s(a).setHorizontalLayout?h("",!0):(l(),c(ae,{key:1})),s(a).setHorizontalLayout?(l(),c(y,{key:2})):h("",!0),s(a).setHorizontalLayout?(l(),c(g,{key:3})):h("",!0),e(W,null,{default:t(()=>[e(Y,{fluid:"",class:"page-wrapper pb-sm-15 pb-10"},{default:t(()=>[n("div",{class:E(s(a).boxed?"maxWidth":"")},[e(s(F)),e(m,{class:"customizer-btn",size:"large",icon:"",variant:"flat",color:"primary",onClick:i[1]||(i[1]=R(b=>s(a).SET_CUSTOMIZER_DRAWER(!s(a).Customizer_drawer),["stop"]))},{default:t(()=>[e(r)]),_:1})],2)]),_:1})]),_:1})]),_:1},8,["theme","class"])]),_:1})):(l(),c(I,{key:1},{default:t(()=>[e(q,{theme:s(a).actTheme,class:E([s(a).actTheme,s(a).mini_sidebar?"mini-sidebar":"",s(a).setHorizontalLayout?"horizontalLayout":"verticalLayout",s(a).setBorderCard?"cardBordered":""])},{default:t(()=>[e(H,{app:"",temporary:"",elevation:"10",location:"right",modelValue:s(a).Customizer_drawer,"onUpdate:modelValue":i[2]||(i[2]=b=>s(a).Customizer_drawer=b),width:"320"},{default:t(()=>[e(se)]),_:1},8,["modelValue"]),s(a).setHorizontalLayout?h("",!0):(l(),c(te,{key:0})),s(a).setHorizontalLayout?h("",!0):(l(),c(ae,{key:1})),s(a).setHorizontalLayout?(l(),c(y,{key:2})):h("",!0),s(a).setHorizontalLayout?(l(),c(g,{key:3})):h("",!0),e(W,null,{default:t(()=>[e(Y,{fluid:"",class:"page-wrapper pb-sm-15 pb-10"},{default:t(()=>[n("div",{class:E(s(a).boxed?"maxWidth":"")},[e(s(F)),s(_)?(l(),c(m,{key:0,class:"customizer-btn",size:"large",icon:"",variant:"flat",color:"primary",onClick:i[3]||(i[3]=R(b=>s(a).SET_CUSTOMIZER_DRAWER(!s(a).Customizer_drawer),["stop"]))},{default:t(()=>[e(r)]),_:1})):h("",!0)],2)]),_:1})]),_:1})]),_:1},8,["theme","class"])]),_:1}))}}};export{ha as default};
