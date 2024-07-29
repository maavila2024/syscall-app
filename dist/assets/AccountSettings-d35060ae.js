import{C as B,o as C,e as M,w as t,a as s,t as R,b as e,aG as K,aj as c,v as W,u as Y,J as y,ab as Z,ac as b,aH as Q,a1 as o,aI as x,aJ as f,ae as p,y as i,af as k,a7 as V,V as l,d as a,N as X,O as ee,r as D,c as E,ak as q,x as _,z as U,ao as te,F,P as I,aK as se,aL as ae,al as le,aM as oe,aN as N}from"./index-f3a8f3ae.js";/* empty css                                                       */import{m as ie,n as de,o as ne,p as re,D as O,q as ce,r as G,s as ue}from"./vue-tabler-icons.es-4e540416.js";import{u as me,a as T}from"./vee-validate.esm-f29a4fe7.js";import{_ as _e}from"./_plugin-vue_export-helper-c27b6911.js";const he="/assets/ChatBc-d6272e3c.png",fe={class:"px-8 py-8 py-lg-0"},pe={class:"d-flex justify-space-between"},ve={class:"d-flex py-0 align-center"},xe={class:"text-h3 mb-2"},be=s("div",{class:"d-flex align-center text-h3 mt-n4"},".",-1),ye={class:"text-medium-emphasis text-subtitle-1"},ge=s("div",{class:"d-none py-0 d-lg-block overflow-hidden"},[s("div",{class:"mb-n16 mt-3"},[s("img",{src:he,alt:"breadcrumb"})])],-1),we=B({props:{title:String,breadcrumbs:Array,icon:String},setup(h){return(d,u)=>(C(),M(c,{class:"bg-lightprimary elevation-0 rounded-md mb-8"},{default:t(()=>[s("div",fe,[s("div",pe,[s("div",ve,[s("div",null,[s("h3",xe,R(h.title),1),e(K,{items:h.breadcrumbs,class:"text-h6 font-weight-medium pa-0 ml-n1"},{divider:t(()=>[be]),title:t(({item:m})=>[s("h6",ye,R(m.title),1)]),_:1},8,["items"])])]),ge])])]),_:1}))}});const j=h=>(X("data-v-48ca75ce"),h=h(),ee(),h),$e=j(()=>s("h5",{class:"text-h5"},"Change Password",-1)),Ve=j(()=>s("div",{class:"text-subtitle-1 text-medium-emphasis mt-2"},"To change your password please confirm here",-1)),Pe={class:"mt-5"},ze=a("Current Password"),Ce=a("New Password"),Se=a("Confirm Password"),Ie=j(()=>s("h5",{class:"text-h5"},"Personal Details",-1)),Ae=j(()=>s("div",{class:"text-subtitle-1 text-medium-emphasis mt-2"},"To change your personal detail, edit and save from here",-1)),ke={class:"mt-5"},Ne=a("Your Name"),Te={class:"d-flex justify-end mt-5"},Be=a("Save"),je=a("Cancel"),De={setup(h){const d=W(),u=Y(),m=y(null),S=Z({firstName:b().required().label("First Name"),currentPassword:b().nullable().label("Current Password"),newPassword:b().when("currentPassword",{is:w=>w&&w.length>0,then:b().required().min(8).matches(/^(?=.*[a-zA-Z])(?=.*[0-9])/,"Password must contain 8 characters, at least one letter and one number").label("New Password"),otherwise:b().nullable()}),confirmPassword:b().when("currentPassword",{is:w=>w&&w.length>0,then:b().required().oneOf([Q("newPassword"),null],"Passwords must match").label("Confirm Password"),otherwise:b().nullable()})}),{handleSubmit:n,errors:r,isSubmitting:L}=me({validationSchema:S,initialValues:{firstName:u.user.first_name,currentPassword:"",newPassword:"",confirmPassword:""}}),{value:g}=T("firstName"),{value:P}=T("currentPassword"),{value:z}=T("newPassword"),{value:A}=T("confirmPassword"),H=n(async w=>{m.value=null;try{g.value!==u.user.first_name&&(await d.updateFirstName(g.value),u.user.first_name=g.value),P.value&&z.value&&await d.changePassword(P.value,z.value),alert("Profile updated successfully")}catch(v){m.value="Error updating profile: "+v.message}}),J=()=>{g.value=u.user.first_name,P.value="",z.value="",A.value=""};return(w,v)=>(C(),M(c,{elevation:"10"},{default:t(()=>[e(V,{class:"ma-sm-n2 ma-n1"},{default:t(()=>[e(o,{cols:"12",sm:"6"},{default:t(()=>[e(c,{elevation:"10"},{default:t(()=>[e(x,null,{default:t(()=>[$e,Ve,s("div",Pe,[e(f,{class:"mb-2 font-weight-medium"},{default:t(()=>[ze]),_:1}),e(p,{color:"primary",variant:"outlined",type:"password",modelValue:i(P),"onUpdate:modelValue":v[0]||(v[0]=$=>k(P)?P.value=$:null),"hide-details":""},null,8,["modelValue"]),e(f,{class:"mb-2 font-weight-medium"},{default:t(()=>[Ce]),_:1}),e(p,{color:"primary",variant:"outlined",type:"password",modelValue:i(z),"onUpdate:modelValue":v[1]||(v[1]=$=>k(z)?z.value=$:null),"error-messages":i(r).newPassword,"hide-details":""},null,8,["modelValue","error-messages"]),e(f,{class:"mb-2 font-weight-medium"},{default:t(()=>[Se]),_:1}),e(p,{color:"primary",variant:"outlined",type:"password",modelValue:i(A),"onUpdate:modelValue":v[2]||(v[2]=$=>k(A)?A.value=$:null),"error-messages":i(r).confirmPassword,"hide-details":""},null,8,["modelValue","error-messages"])])]),_:1})]),_:1})]),_:1}),e(o,{cols:"12"},{default:t(()=>[e(c,{elevation:"10"},{default:t(()=>[e(x,null,{default:t(()=>[Ie,Ae,s("div",ke,[e(V,null,{default:t(()=>[e(o,{cols:"12",md:"6"},{default:t(()=>[e(f,{class:"mb-2 font-weight-medium"},{default:t(()=>[Ne]),_:1}),e(p,{color:"primary",variant:"outlined",type:"text",modelValue:i(g),"onUpdate:modelValue":v[3]||(v[3]=$=>k(g)?g.value=$:null),"hide-details":""},null,8,["modelValue"])]),_:1})]),_:1})])]),_:1})]),_:1})]),_:1})]),_:1}),s("div",Te,[e(l,{size:"large",color:"primary",class:"mr-4",flat:"",onClick:i(H)},{default:t(()=>[Be]),_:1},8,["onClick"]),e(l,{size:"large",class:"bg-lighterror text-error",flat:"",onClick:J},{default:t(()=>[je]),_:1})])]),_:1}))}},Ue=_e(De,[["__scopeId","data-v-48ca75ce"]]),Me=s("h4",{class:"text-h4"},"Notification Preferences",-1),Ee=s("div",{class:"text-subtitle-1 text-medium-emphasis text-10 my-3"}," Select the notificaitons ou would like to receive via email. Please note that you cannot opt out of receving service messages, such as payment, security or legal notifications. ",-1),Fe={class:"mt-6"},Le=a("Email Address*"),Re=s("span",{class:"text-subtitle-1 text-medium-emphasis"},"Required for notificaitons.",-1),qe=a("Date & Time"),Oe=s("div",{class:"text-subtitle-1 text-medium-emphasis text-10 my-3"},"Time zones and calendar display settings.",-1),Ge={class:"d-flex align-center mt-7"},He=s("div",{class:"pl-4"},[s("h5",{class:"text-subtitle-1 text-medium-emphasis mb-1"},"Time zone"),s("h6",{class:"text-h6"},"(UTC + 02:00) Athens, Bucharet")],-1),Je={class:"ml-auto"},Ke=a("Download "),We=a("Ignore Tracking"),Ye={class:"d-flex align-center mt-7"},Ze=s("div",{class:"pl-4"},[s("h6",{class:"text-h6 mb-3 mt-n1"},"Ignore Browser Tracking"),s("h5",{class:"text-subtitle-1 text-medium-emphasis"},"Browser Cookie")],-1),Qe={class:"ml-auto mr-1 pa-sm-0 pl-sm-1 pa-6 pl-7"},Xe={class:"d-flex justify-end mt-5"},et=a("Save"),tt=a("Cancel"),st=B({setup(h){const d=y(!1);return(u,m)=>{const S=D("ClockIcon"),n=D("DownloadIcon"),r=D("PlayerPauseIcon");return C(),E(F,null,[e(V,{class:"justify-center ma-n2"},{default:t(()=>[e(o,{cols:"12",md:"9"},{default:t(()=>[e(c,{elevation:"10"},{default:t(()=>[e(x,null,{default:t(()=>[Me,Ee,s("div",Fe,[e(f,{class:"mb-2 font-weight-medium"},{default:t(()=>[Le]),_:1}),e(p,{color:"primary",variant:"outlined",type:"email","hide-details":""}),Re])]),_:1})]),_:1})]),_:1}),e(o,{cols:"12",md:"9"},{default:t(()=>[e(c,{elevation:"10"},{default:t(()=>[e(x,null,{default:t(()=>[e(q,{class:"text-h4"},{default:t(()=>[qe]),_:1}),Oe,s("div",null,[s("div",Ge,[e(_,{size:"48",class:"mr-2",rounded:"md",color:"lightprimary"},{default:t(()=>[e(S,{size:"22"})]),_:1}),He,s("div",Je,[e(l,{size:"30",icon:"",variant:"flat",class:"lightprimary d-flex"},{default:t(()=>[e(_,{size:"30"},{default:t(()=>[e(n,{size:"22"})]),_:1}),e(U,{activator:"parent",location:"bottom"},{default:t(()=>[Ke]),_:1})]),_:1})])])])]),_:1})]),_:1})]),_:1}),e(o,{cols:"12",md:"9"},{default:t(()=>[e(c,{elevation:"10"},{default:t(()=>[e(x,null,{default:t(()=>[e(q,{class:"text-h4"},{default:t(()=>[We]),_:1}),s("div",null,[s("div",Ye,[e(_,{size:"48",class:"mr-2",rounded:"md",color:"lightprimary"},{default:t(()=>[e(r,{size:"22"})]),_:1}),Ze,s("div",Qe,[e(te,{modelValue:d.value,"onUpdate:modelValue":m[0]||(m[0]=L=>d.value=L),"hide-details":"",color:"primary"},null,8,["modelValue"])])])])]),_:1})]),_:1})]),_:1})]),_:1}),s("div",Xe,[e(l,{size:"large",color:"primary",class:"mr-4",flat:""},{default:t(()=>[et]),_:1}),e(l,{size:"large",class:"bg-lighterror text-error",flat:""},{default:t(()=>[tt]),_:1})])],64)}}}),at=s("h4",{class:"text-h4"},"Billing Information",-1),lt={class:"mt-6"},ot=a("Business Name*"),it=a("Business Sector*"),dt=a("Business Address*"),nt=a("Country*"),rt=a("First Name*"),ct=a("Last Name*"),ut=s("h4",{class:"text-h4"},[a("Current Plan :"),s("span",{class:"text-success"},"Executive")],-1),mt=s("div",{class:"text-subtitle-1 text-medium-emphasis text-10 my-3"}," Thanks for being a premium member and supporting our development. ",-1),_t={class:"d-flex align-center mt-7"},ht=s("div",{class:"pl-4"},[s("h5",{class:"text-subtitle-1 text-medium-emphasis mb-1"},"Current Plan"),s("h6",{class:"text-h6"},"750.000 Monthly Visits")],-1),ft={class:"ml-auto"},pt=a("Add "),vt={class:"d-flex mt-5"},xt=a("Change Plan"),bt=a("Reset Plan"),yt=s("h4",{class:"text-h4"},"Payment Method",-1),gt=s("div",{class:"text-subtitle-1 text-medium-emphasis text-10 my-3"}," On 26 December, 2023 ",-1),wt={class:"d-flex align-center mt-7"},$t=s("div",{class:"pl-4"},[s("h6",{class:"text-h6 mb-3 mt-n1"},"Visa"),s("h5",{class:"text-subtitle-1"},"*****2102")],-1),Vt={class:"ml-auto"},Pt=a("Edit "),zt={class:"mt-4"},Ct=s("div",{class:"text-subtitle-1 text-medium-emphasis text-10 mb-3"}," If you updated your payment method, it will only be dislpayed here after your next billing cycle. ",-1),St=a("Cancel Subscription"),It={class:"d-flex justify-end mt-5"},At=a("Save"),kt=a("Cancel"),Nt=B({setup(h){const d=y("Visitor Analytics"),u=y("Arts, Media & Entertainment"),m=y("Romania");return(S,n)=>(C(),E(F,null,[e(V,{class:"justify-center ma-n2"},{default:t(()=>[e(o,{cols:"12",md:"9"},{default:t(()=>[e(c,{elevation:"10"},{default:t(()=>[e(x,null,{default:t(()=>[at,s("div",lt,[e(V,null,{default:t(()=>[e(o,{cols:"12",md:"6"},{default:t(()=>[e(f,{class:"mb-2 font-weight-medium"},{default:t(()=>[ot]),_:1}),e(p,{color:"primary",variant:"outlined",type:"text",modelValue:d.value,"onUpdate:modelValue":n[0]||(n[0]=r=>d.value=r),"hide-details":""},null,8,["modelValue"])]),_:1}),e(o,{cols:"12",md:"6"},{default:t(()=>[e(f,{class:"mb-2 font-weight-medium"},{default:t(()=>[it]),_:1}),e(p,{color:"primary",variant:"outlined",type:"text",modelValue:u.value,"onUpdate:modelValue":n[1]||(n[1]=r=>u.value=r),"hide-details":""},null,8,["modelValue"])]),_:1}),e(o,{cols:"12",md:"6"},{default:t(()=>[e(f,{class:"mb-2 font-weight-medium"},{default:t(()=>[dt]),_:1}),e(p,{color:"primary",variant:"outlined",type:"text","hide-details":""})]),_:1}),e(o,{cols:"12",md:"6"},{default:t(()=>[e(f,{class:"mb-2 font-weight-medium"},{default:t(()=>[nt]),_:1}),e(p,{color:"primary",variant:"outlined",type:"text",modelValue:m.value,"onUpdate:modelValue":n[2]||(n[2]=r=>m.value=r),"hide-details":""},null,8,["modelValue"])]),_:1}),e(o,{cols:"12",md:"6"},{default:t(()=>[e(f,{class:"mb-2 font-weight-medium"},{default:t(()=>[rt]),_:1}),e(p,{color:"primary",variant:"outlined",type:"text","hide-details":""})]),_:1}),e(o,{cols:"12",md:"6"},{default:t(()=>[e(f,{class:"mb-2 font-weight-medium"},{default:t(()=>[ct]),_:1}),e(p,{color:"primary",variant:"outlined",type:"text","hide-details":""})]),_:1})]),_:1})])]),_:1})]),_:1})]),_:1}),e(o,{cols:"12",md:"9"},{default:t(()=>[e(c,{elevation:"10"},{default:t(()=>[e(x,null,{default:t(()=>[ut,mt,s("div",_t,[e(_,{size:"48",class:"mr-2",rounded:"md",color:"lightprimary"},{default:t(()=>[e(i(ie),{size:"22"})]),_:1}),ht,s("div",ft,[e(l,{size:"35",icon:"",variant:"flat",class:"lightprimary d-flex"},{default:t(()=>[e(_,{size:"35"},{default:t(()=>[e(i(de),{size:"22"})]),_:1}),e(U,{activator:"parent",location:"bottom"},{default:t(()=>[pt]),_:1})]),_:1})])]),s("div",vt,[e(l,{color:"primary",class:"mr-4",flat:""},{default:t(()=>[xt]),_:1}),e(l,{class:"text-error",variant:"outlined",flat:""},{default:t(()=>[bt]),_:1})])]),_:1})]),_:1})]),_:1}),e(o,{cols:"12",md:"9"},{default:t(()=>[e(c,{elevation:"10"},{default:t(()=>[e(x,null,{default:t(()=>[yt,gt,s("div",wt,[e(_,{size:"48",class:"mr-2",rounded:"md",color:"lightprimary"},{default:t(()=>[e(i(ne),{size:"22"})]),_:1}),$t,s("div",Vt,[e(l,{size:"35",icon:"",variant:"flat",class:"lightprimary d-flex"},{default:t(()=>[e(_,{size:"35"},{default:t(()=>[e(i(re),{size:"22"})]),_:1}),e(U,{activator:"parent",location:"bottom"},{default:t(()=>[Pt]),_:1})]),_:1})])]),s("div",zt,[Ct,e(l,{class:"text-error",variant:"outlined",flat:""},{default:t(()=>[St]),_:1})])]),_:1})]),_:1})]),_:1})]),_:1}),s("div",It,[e(l,{size:"large",color:"primary",class:"mr-4",flat:""},{default:t(()=>[At]),_:1}),e(l,{size:"large",class:"bg-lighterror text-error",flat:""},{default:t(()=>[kt]),_:1})])],64))}}),Tt=s("h4",{class:"text-h4"},"Two-factor Authentication",-1),Bt={class:"d-sm-flex justify-space-between mt-4 mb-8"},jt=s("div",{class:"text-subtitle-1 text-medium-emphasis text-13 pr-5"}," Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corporis sapiente sunt earum officiis laboriosam ut. ",-1),Dt=a("Enable"),Ut={class:"d-flex justify-space-between my-4"},Mt=s("div",null,[s("h6",{class:"text-h6 mb-1"},"Authentication App"),s("h5",{class:"text-subtitle-1 text-medium-emphasis"},"Google auth app")],-1),Et=a("Setup"),Ft={class:"d-flex justify-space-between my-4"},Lt=s("div",null,[s("h6",{class:"text-h6 mb-1"},"Another e-mail"),s("h5",{class:"text-subtitle-1 text-medium-emphasis"},"E-mail to send verification link")],-1),Rt=a("Setup"),qt={class:"d-flex justify-space-between my-4"},Ot=s("div",null,[s("h6",{class:"text-h6 mb-1"},"SMS Recovery"),s("h5",{class:"text-subtitle-1 text-medium-emphasis"},"Your phone number or something")],-1),Gt=a("Setup"),Ht=s("h5",{class:"text-h5 mt-4"},"Devices",-1),Jt=s("div",{class:"text-subtitle-1 mt-3 text-medium-emphasis text-10"}," Lorem ipsum dolor sit amet consectetur adipisicing elit Rem. ",-1),Kt=a("Sign out from all devices"),Wt={class:"mt-sm-8 mt-5"},Yt={class:"d-flex align-center my-4"},Zt=s("div",{class:"ml-3 pr-3"},[s("h6",{class:"text-h6 mb-1"},"iPhone 14"),s("h5",{class:"text-subtitle-1 text-medium-emphasis"},"London UK, Oct 23 at 1:15 AM")],-1),Qt={class:"d-flex align-center my-4"},Xt=s("div",{class:"ml-3 pr-3"},[s("h6",{class:"text-h6 mb-1"},"Macbook Air"),s("h5",{class:"text-subtitle-1 text-medium-emphasis"},"Gujarat India, Oct 24 at 3:15 AM")],-1),es=a("Need Help?"),ts={class:"d-flex justify-end mt-5"},ss=a("Save"),as=a("Cancel"),ls=B({setup(h){return(d,u)=>(C(),M(c,{elevation:"10"},{default:t(()=>[e(V,{class:"ma-sm-n2 ma-n1"},{default:t(()=>[e(o,{cols:"12",md:"8"},{default:t(()=>[e(c,{elevation:"10"},{default:t(()=>[e(x,null,{default:t(()=>[Tt,s("div",Bt,[jt,e(l,{color:"primary",class:"mt-sm-0 mt-3",flat:""},{default:t(()=>[Dt]),_:1})]),e(I),s("div",Ut,[Mt,e(l,{class:"bg-lightprimary text-primary",flat:""},{default:t(()=>[Et]),_:1})]),e(I),s("div",Ft,[Lt,e(l,{class:"bg-lightprimary text-primary",flat:""},{default:t(()=>[Rt]),_:1})]),e(I),s("div",qt,[Ot,e(l,{class:"bg-lightprimary text-primary",flat:""},{default:t(()=>[Gt]),_:1})])]),_:1})]),_:1})]),_:1}),e(o,{cols:"12",md:"4"},{default:t(()=>[e(c,{elevation:"10"},{default:t(()=>[e(x,null,{default:t(()=>[e(_,{size:"48",class:"",rounded:"md",color:"lightprimary"},{default:t(()=>[e(i(O),{class:"text-primary",size:"25"})]),_:1}),Ht,Jt,e(l,{color:"primary",class:"mt-4",flat:""},{default:t(()=>[Kt]),_:1}),s("div",Wt,[s("div",Yt,[e(_,{size:"30",rounded:"md",color:"surface"},{default:t(()=>[e(i(ce),{size:"25"})]),_:1}),Zt,e(l,{size:"30",icon:"",variant:"flat",class:"lightprimary ml-auto"},{default:t(()=>[e(_,{size:"20"},{default:t(()=>[e(i(G))]),_:1})]),_:1})]),e(I),s("div",Qt,[e(_,{size:"30",rounded:"md",color:"surface"},{default:t(()=>[e(i(O),{size:"25"})]),_:1}),Xt,e(l,{size:"30",icon:"",variant:"flat",class:"lightprimary ml-auto"},{default:t(()=>[e(_,{size:"20"},{default:t(()=>[e(i(G))]),_:1})]),_:1})])]),e(l,{class:"bg-lightprimary text-primary mt-5",block:"",flat:""},{default:t(()=>[es]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),s("div",ts,[e(l,{size:"large",color:"primary",class:"mr-4",flat:""},{default:t(()=>[ss]),_:1}),e(l,{size:"large",class:"bg-lighterror text-error",flat:""},{default:t(()=>[as]),_:1})])]),_:1}))}}),os=a(" Account"),us={setup(h){const d=y(null),u=y({title:"Account Setting"}),m=y([{text:"Dashboard",disabled:!1,href:"#"},{text:"Account Setting",disabled:!0,href:"#"}]);return(S,n)=>(C(),E(F,null,[e(we,{title:u.value.title,breadcrumbs:m.value},null,8,["title","breadcrumbs"]),e(V,{class:"justify-center"},{default:t(()=>[e(o,{cols:"12",md:"12"},{default:t(()=>[e(c,{elevation:"10",class:"",rounded:"md"},{default:t(()=>[e(se,{modelValue:d.value,"onUpdate:modelValue":n[0]||(n[0]=r=>d.value=r),"bg-color":"transparent","min-height":"70",height:"70",color:"primary"},{default:t(()=>[e(ae,{value:"Account",class:"text-medium-emphasis"},{default:t(()=>[e(i(ue),{class:"mr-2",size:"20"}),os]),_:1})]),_:1},8,["modelValue"]),e(I),e(le,{class:"pa-sm-6 pa-3 pb-sm-6 pb-6"},{default:t(()=>[e(oe,{modelValue:d.value,"onUpdate:modelValue":n[1]||(n[1]=r=>d.value=r)},{default:t(()=>[e(N,{value:"Account"},{default:t(()=>[e(Ue)]),_:1}),e(N,{value:"Notification"},{default:t(()=>[e(st)]),_:1}),e(N,{value:"Bills"},{default:t(()=>[e(Nt)]),_:1}),e(N,{value:"Security"},{default:t(()=>[e(ls)]),_:1})]),_:1},8,["modelValue"])]),_:1})]),_:1})]),_:1})]),_:1})],64))}};export{us as default};
