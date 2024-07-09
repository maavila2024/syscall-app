import{u as $,o as V,e as P,w as t,a as s,t as R,b as e,ax as K,ag as _,N as n,L as a,ay as x,y as f,V as o,az as u,ab as r,M as g,aq as L,d as l,c as B,ah as E,A as U,al as q,F as D,r as A,z as p,I as z,aA as O,aB as S,ai as H,aC as W,aD as I}from"./index-e5ea640e.js";import{l as Y,m as J,n as Q,o as X,D as F,p as Z,q as G,r as ee,B as te,s as se,t as le}from"./vue-tabler-icons.es-82030ec3.js";import{_ as ae}from"./user-1-ec08f839.js";const oe="/assets/ChatBc-d6272e3c.png",ie={class:"px-8 py-8 py-lg-0"},de={class:"d-flex justify-space-between"},ne={class:"d-flex py-0 align-center"},ue={class:"text-h3 mb-2"},ce=s("div",{class:"d-flex align-center text-h3 mt-n4"},".",-1),me={class:"text-medium-emphasis text-subtitle-1"},re=s("div",{class:"d-none py-0 d-lg-block overflow-hidden"},[s("div",{class:"mb-n16 mt-3"},[s("img",{src:oe,alt:"breadcrumb"})])],-1),_e=$({props:{title:String,breadcrumbs:Array,icon:String},setup(b){return(m,y)=>(V(),P(_,{class:"bg-lightprimary elevation-0 rounded-md mb-8"},{default:t(()=>[s("div",ie,[s("div",de,[s("div",ne,[s("div",null,[s("h3",ue,R(b.title),1),e(K,{items:b.breadcrumbs,class:"text-h6 font-weight-medium pa-0 ml-n1"},{divider:t(()=>[ce]),title:t(({item:v})=>[s("h6",me,R(v.title),1)]),_:1},8,["items"])])]),re])])]),_:1}))}});const he=s("h5",{class:"text-h5"},"Change Profile",-1),fe=s("div",{class:"text-subtitle-1 text-medium-emphasis mt-2"},"Change your profile picture from here",-1),pe={class:"text-center mt-6 mb-6"},ve=s("img",{src:ae,height:"120",alt:"image"},null,-1),xe={class:"d-flex justify-center"},ye=l(" Upload"),be=l("Reset"),ge=s("div",{class:"text-subtitle-1 text-medium-emphasis text-center my-sm-8 my-6"},"Allowed JPG, GIF or PNG. Max size of 800K",-1),$e=s("h5",{class:"text-h5"},"Change Password",-1),Ve=s("div",{class:"text-subtitle-1 text-medium-emphasis mt-2"},"To change your password please confirm here",-1),we={class:"mt-5"},ze=l("Current Password"),Ce=l("New Password"),Se=l("Confirm Password"),Ie=s("h5",{class:"text-h5"},"Personal Details",-1),Ae=s("div",{class:"text-subtitle-1 text-medium-emphasis mt-2"},"To change your personal detail , edit and save from here",-1),Ue={class:"mt-5"},Pe=l("Your Name"),Be=l("Store Name"),De=l("Location"),Ne=l("Currency"),Te=l("Email"),je=l("Phone"),ke=l("Address"),Me={class:"d-flex justify-end mt-5"},Re=l("Save"),Le=l("Cancel"),Ee=$({setup(b){const m=n("United States"),y=n(["United States","United Kingdom","India","Russia"]),v=n("US Dollar ($)"),w=n(["US Dollar ($)","United Kingdom (Pound)","India (INR)","Russia (Ruble)"]),c=n("123456789142"),h=n("123456789142"),C=n("123456789142"),N=n("Mathew Anderson"),T=n("Maxima Studio"),j=n("info@modernize.com"),k=n("+91 12345 65478"),M=n("814 Howard Street, 120065, India");return(_s,i)=>(V(),P(_,{elevation:"10"},{default:t(()=>[e(g,{class:"ma-sm-n2 ma-n1"},{default:t(()=>[e(a,{cols:"12",sm:"6"},{default:t(()=>[e(_,{elevation:"10"},{default:t(()=>[e(x,null,{default:t(()=>[he,fe,s("div",pe,[e(f,{size:"120"},{default:t(()=>[ve]),_:1})]),s("div",xe,[e(o,{color:"primary",class:"mx-2",flat:""},{default:t(()=>[ye]),_:1}),e(o,{color:"error",class:"mx-2",variant:"outlined",flat:""},{default:t(()=>[be]),_:1})]),ge]),_:1})]),_:1})]),_:1}),e(a,{cols:"12",sm:"6"},{default:t(()=>[e(_,{elevation:"10"},{default:t(()=>[e(x,null,{default:t(()=>[$e,Ve,s("div",we,[e(u,{class:"mb-2 font-weight-medium"},{default:t(()=>[ze]),_:1}),e(r,{color:"primary",variant:"outlined",type:"password",modelValue:c.value,"onUpdate:modelValue":i[0]||(i[0]=d=>c.value=d)},null,8,["modelValue"]),e(u,{class:"mb-2 font-weight-medium"},{default:t(()=>[Ce]),_:1}),e(r,{color:"primary",variant:"outlined",type:"password",modelValue:h.value,"onUpdate:modelValue":i[1]||(i[1]=d=>h.value=d)},null,8,["modelValue"]),e(u,{class:"mb-2 font-weight-medium"},{default:t(()=>[Se]),_:1}),e(r,{color:"primary",variant:"outlined",type:"password",modelValue:C.value,"onUpdate:modelValue":i[2]||(i[2]=d=>C.value=d),"hide-details":""},null,8,["modelValue"])])]),_:1})]),_:1})]),_:1}),e(a,{cols:"12"},{default:t(()=>[e(_,{elevation:"10"},{default:t(()=>[e(x,null,{default:t(()=>[Ie,Ae,s("div",Ue,[e(g,null,{default:t(()=>[e(a,{cols:"12",md:"6"},{default:t(()=>[e(u,{class:"mb-2 font-weight-medium"},{default:t(()=>[Pe]),_:1}),e(r,{color:"primary",variant:"outlined",type:"text",modelValue:N.value,"onUpdate:modelValue":i[3]||(i[3]=d=>N.value=d),"hide-details":""},null,8,["modelValue"])]),_:1}),e(a,{cols:"12",md:"6"},{default:t(()=>[e(u,{class:"mb-2 font-weight-medium"},{default:t(()=>[Be]),_:1}),e(r,{color:"primary",variant:"outlined",type:"text",modelValue:T.value,"onUpdate:modelValue":i[4]||(i[4]=d=>T.value=d),"hide-details":""},null,8,["modelValue"])]),_:1}),e(a,{cols:"12",md:"6"},{default:t(()=>[e(u,{class:"mb-2 font-weight-medium"},{default:t(()=>[De]),_:1}),e(L,{modelValue:m.value,"onUpdate:modelValue":i[5]||(i[5]=d=>m.value=d),items:y.value,"item-title":"state","item-value":"abbr",label:"Select","return-object":"","single-line":"",variant:"outlined","hide-details":""},null,8,["modelValue","items"])]),_:1}),e(a,{cols:"12",md:"6"},{default:t(()=>[e(u,{class:"mb-2 font-weight-medium"},{default:t(()=>[Ne]),_:1}),e(L,{modelValue:v.value,"onUpdate:modelValue":i[6]||(i[6]=d=>v.value=d),items:w.value,"item-title":"state","item-value":"abbr",label:"Select","return-object":"","single-line":"",variant:"outlined","hide-details":""},null,8,["modelValue","items"])]),_:1}),e(a,{cols:"12",md:"6"},{default:t(()=>[e(u,{class:"mb-2 font-weight-medium"},{default:t(()=>[Te]),_:1}),e(r,{color:"primary",variant:"outlined",type:"email",modelValue:j.value,"onUpdate:modelValue":i[7]||(i[7]=d=>j.value=d),"hide-details":""},null,8,["modelValue"])]),_:1}),e(a,{cols:"12",md:"6"},{default:t(()=>[e(u,{class:"mb-2 font-weight-medium"},{default:t(()=>[je]),_:1}),e(r,{color:"primary",variant:"outlined",type:"text",modelValue:k.value,"onUpdate:modelValue":i[8]||(i[8]=d=>k.value=d),"hide-details":""},null,8,["modelValue"])]),_:1}),e(a,{cols:"12"},{default:t(()=>[e(u,{class:"mb-2 font-weight-medium"},{default:t(()=>[ke]),_:1}),e(r,{color:"primary",variant:"outlined",type:"text",modelValue:M.value,"onUpdate:modelValue":i[9]||(i[9]=d=>M.value=d),"hide-details":""},null,8,["modelValue"])]),_:1})]),_:1})])]),_:1})]),_:1})]),_:1})]),_:1}),s("div",Me,[e(o,{size:"large",color:"primary",class:"mr-4",flat:""},{default:t(()=>[Re]),_:1}),e(o,{size:"large",class:"bg-lighterror text-error",flat:""},{default:t(()=>[Le]),_:1})])]),_:1}))}}),Fe=s("h4",{class:"text-h4"},"Notification Preferences",-1),Ge=s("div",{class:"text-subtitle-1 text-medium-emphasis text-10 my-3"}," Select the notificaitons ou would like to receive via email. Please note that you cannot opt out of receving service messages, such as payment, security or legal notifications. ",-1),Ke={class:"mt-6"},qe=l("Email Address*"),Oe=s("span",{class:"text-subtitle-1 text-medium-emphasis"},"Required for notificaitons.",-1),He=l("Date & Time"),We=s("div",{class:"text-subtitle-1 text-medium-emphasis text-10 my-3"},"Time zones and calendar display settings.",-1),Ye={class:"d-flex align-center mt-7"},Je=s("div",{class:"pl-4"},[s("h5",{class:"text-subtitle-1 text-medium-emphasis mb-1"},"Time zone"),s("h6",{class:"text-h6"},"(UTC + 02:00) Athens, Bucharet")],-1),Qe={class:"ml-auto"},Xe=l("Download "),Ze=l("Ignore Tracking"),et={class:"d-flex align-center mt-7"},tt=s("div",{class:"pl-4"},[s("h6",{class:"text-h6 mb-3 mt-n1"},"Ignore Browser Tracking"),s("h5",{class:"text-subtitle-1 text-medium-emphasis"},"Browser Cookie")],-1),st={class:"ml-auto mr-1 pa-sm-0 pl-sm-1 pa-6 pl-7"},lt={class:"d-flex justify-end mt-5"},at=l("Save"),ot=l("Cancel"),it=$({setup(b){const m=n(!1);return(y,v)=>{const w=A("ClockIcon"),c=A("DownloadIcon"),h=A("PlayerPauseIcon");return V(),B(D,null,[e(g,{class:"justify-center ma-n2"},{default:t(()=>[e(a,{cols:"12",md:"9"},{default:t(()=>[e(_,{elevation:"10"},{default:t(()=>[e(x,null,{default:t(()=>[Fe,Ge,s("div",Ke,[e(u,{class:"mb-2 font-weight-medium"},{default:t(()=>[qe]),_:1}),e(r,{color:"primary",variant:"outlined",type:"email","hide-details":""}),Oe])]),_:1})]),_:1})]),_:1}),e(a,{cols:"12",md:"9"},{default:t(()=>[e(_,{elevation:"10"},{default:t(()=>[e(x,null,{default:t(()=>[e(E,{class:"text-h4"},{default:t(()=>[He]),_:1}),We,s("div",null,[s("div",Ye,[e(f,{size:"48",class:"mr-2",rounded:"md",color:"lightprimary"},{default:t(()=>[e(w,{size:"22"})]),_:1}),Je,s("div",Qe,[e(o,{size:"30",icon:"",variant:"flat",class:"lightprimary d-flex"},{default:t(()=>[e(f,{size:"30"},{default:t(()=>[e(c,{size:"22"})]),_:1}),e(U,{activator:"parent",location:"bottom"},{default:t(()=>[Xe]),_:1})]),_:1})])])])]),_:1})]),_:1})]),_:1}),e(a,{cols:"12",md:"9"},{default:t(()=>[e(_,{elevation:"10"},{default:t(()=>[e(x,null,{default:t(()=>[e(E,{class:"text-h4"},{default:t(()=>[Ze]),_:1}),s("div",null,[s("div",et,[e(f,{size:"48",class:"mr-2",rounded:"md",color:"lightprimary"},{default:t(()=>[e(h,{size:"22"})]),_:1}),tt,s("div",st,[e(q,{modelValue:m.value,"onUpdate:modelValue":v[0]||(v[0]=C=>m.value=C),"hide-details":"",color:"primary"},null,8,["modelValue"])])])])]),_:1})]),_:1})]),_:1})]),_:1}),s("div",lt,[e(o,{size:"large",color:"primary",class:"mr-4",flat:""},{default:t(()=>[at]),_:1}),e(o,{size:"large",class:"bg-lighterror text-error",flat:""},{default:t(()=>[ot]),_:1})])],64)}}}),dt=s("h4",{class:"text-h4"},"Billing Information",-1),nt={class:"mt-6"},ut=l("Business Name*"),ct=l("Business Sector*"),mt=l("Business Address*"),rt=l("Country*"),_t=l("First Name*"),ht=l("Last Name*"),ft=s("h4",{class:"text-h4"},[l("Current Plan :"),s("span",{class:"text-success"},"Executive")],-1),pt=s("div",{class:"text-subtitle-1 text-medium-emphasis text-10 my-3"}," Thanks for being a premium member and supporting our development. ",-1),vt={class:"d-flex align-center mt-7"},xt=s("div",{class:"pl-4"},[s("h5",{class:"text-subtitle-1 text-medium-emphasis mb-1"},"Current Plan"),s("h6",{class:"text-h6"},"750.000 Monthly Visits")],-1),yt={class:"ml-auto"},bt=l("Add "),gt={class:"d-flex mt-5"},$t=l("Change Plan"),Vt=l("Reset Plan"),wt=s("h4",{class:"text-h4"},"Payment Method",-1),zt=s("div",{class:"text-subtitle-1 text-medium-emphasis text-10 my-3"}," On 26 December, 2023 ",-1),Ct={class:"d-flex align-center mt-7"},St=s("div",{class:"pl-4"},[s("h6",{class:"text-h6 mb-3 mt-n1"},"Visa"),s("h5",{class:"text-subtitle-1"},"*****2102")],-1),It={class:"ml-auto"},At=l("Edit "),Ut={class:"mt-4"},Pt=s("div",{class:"text-subtitle-1 text-medium-emphasis text-10 mb-3"}," If you updated your payment method, it will only be dislpayed here after your next billing cycle. ",-1),Bt=l("Cancel Subscription"),Dt={class:"d-flex justify-end mt-5"},Nt=l("Save"),Tt=l("Cancel"),jt=$({setup(b){const m=n("Visitor Analytics"),y=n("Arts, Media & Entertainment"),v=n("Romania");return(w,c)=>(V(),B(D,null,[e(g,{class:"justify-center ma-n2"},{default:t(()=>[e(a,{cols:"12",md:"9"},{default:t(()=>[e(_,{elevation:"10"},{default:t(()=>[e(x,null,{default:t(()=>[dt,s("div",nt,[e(g,null,{default:t(()=>[e(a,{cols:"12",md:"6"},{default:t(()=>[e(u,{class:"mb-2 font-weight-medium"},{default:t(()=>[ut]),_:1}),e(r,{color:"primary",variant:"outlined",type:"text",modelValue:m.value,"onUpdate:modelValue":c[0]||(c[0]=h=>m.value=h),"hide-details":""},null,8,["modelValue"])]),_:1}),e(a,{cols:"12",md:"6"},{default:t(()=>[e(u,{class:"mb-2 font-weight-medium"},{default:t(()=>[ct]),_:1}),e(r,{color:"primary",variant:"outlined",type:"text",modelValue:y.value,"onUpdate:modelValue":c[1]||(c[1]=h=>y.value=h),"hide-details":""},null,8,["modelValue"])]),_:1}),e(a,{cols:"12",md:"6"},{default:t(()=>[e(u,{class:"mb-2 font-weight-medium"},{default:t(()=>[mt]),_:1}),e(r,{color:"primary",variant:"outlined",type:"text","hide-details":""})]),_:1}),e(a,{cols:"12",md:"6"},{default:t(()=>[e(u,{class:"mb-2 font-weight-medium"},{default:t(()=>[rt]),_:1}),e(r,{color:"primary",variant:"outlined",type:"text",modelValue:v.value,"onUpdate:modelValue":c[2]||(c[2]=h=>v.value=h),"hide-details":""},null,8,["modelValue"])]),_:1}),e(a,{cols:"12",md:"6"},{default:t(()=>[e(u,{class:"mb-2 font-weight-medium"},{default:t(()=>[_t]),_:1}),e(r,{color:"primary",variant:"outlined",type:"text","hide-details":""})]),_:1}),e(a,{cols:"12",md:"6"},{default:t(()=>[e(u,{class:"mb-2 font-weight-medium"},{default:t(()=>[ht]),_:1}),e(r,{color:"primary",variant:"outlined",type:"text","hide-details":""})]),_:1})]),_:1})])]),_:1})]),_:1})]),_:1}),e(a,{cols:"12",md:"9"},{default:t(()=>[e(_,{elevation:"10"},{default:t(()=>[e(x,null,{default:t(()=>[ft,pt,s("div",vt,[e(f,{size:"48",class:"mr-2",rounded:"md",color:"lightprimary"},{default:t(()=>[e(p(Y),{size:"22"})]),_:1}),xt,s("div",yt,[e(o,{size:"35",icon:"",variant:"flat",class:"lightprimary d-flex"},{default:t(()=>[e(f,{size:"35"},{default:t(()=>[e(p(J),{size:"22"})]),_:1}),e(U,{activator:"parent",location:"bottom"},{default:t(()=>[bt]),_:1})]),_:1})])]),s("div",gt,[e(o,{color:"primary",class:"mr-4",flat:""},{default:t(()=>[$t]),_:1}),e(o,{class:"text-error",variant:"outlined",flat:""},{default:t(()=>[Vt]),_:1})])]),_:1})]),_:1})]),_:1}),e(a,{cols:"12",md:"9"},{default:t(()=>[e(_,{elevation:"10"},{default:t(()=>[e(x,null,{default:t(()=>[wt,zt,s("div",Ct,[e(f,{size:"48",class:"mr-2",rounded:"md",color:"lightprimary"},{default:t(()=>[e(p(Q),{size:"22"})]),_:1}),St,s("div",It,[e(o,{size:"35",icon:"",variant:"flat",class:"lightprimary d-flex"},{default:t(()=>[e(f,{size:"35"},{default:t(()=>[e(p(X),{size:"22"})]),_:1}),e(U,{activator:"parent",location:"bottom"},{default:t(()=>[At]),_:1})]),_:1})])]),s("div",Ut,[Pt,e(o,{class:"text-error",variant:"outlined",flat:""},{default:t(()=>[Bt]),_:1})])]),_:1})]),_:1})]),_:1})]),_:1}),s("div",Dt,[e(o,{size:"large",color:"primary",class:"mr-4",flat:""},{default:t(()=>[Nt]),_:1}),e(o,{size:"large",class:"bg-lighterror text-error",flat:""},{default:t(()=>[Tt]),_:1})])],64))}}),kt=s("h4",{class:"text-h4"},"Two-factor Authentication",-1),Mt={class:"d-sm-flex justify-space-between mt-4 mb-8"},Rt=s("div",{class:"text-subtitle-1 text-medium-emphasis text-13 pr-5"}," Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corporis sapiente sunt earum officiis laboriosam ut. ",-1),Lt=l("Enable"),Et={class:"d-flex justify-space-between my-4"},Ft=s("div",null,[s("h6",{class:"text-h6 mb-1"},"Authentication App"),s("h5",{class:"text-subtitle-1 text-medium-emphasis"},"Google auth app")],-1),Gt=l("Setup"),Kt={class:"d-flex justify-space-between my-4"},qt=s("div",null,[s("h6",{class:"text-h6 mb-1"},"Another e-mail"),s("h5",{class:"text-subtitle-1 text-medium-emphasis"},"E-mail to send verification link")],-1),Ot=l("Setup"),Ht={class:"d-flex justify-space-between my-4"},Wt=s("div",null,[s("h6",{class:"text-h6 mb-1"},"SMS Recovery"),s("h5",{class:"text-subtitle-1 text-medium-emphasis"},"Your phone number or something")],-1),Yt=l("Setup"),Jt=s("h5",{class:"text-h5 mt-4"},"Devices",-1),Qt=s("div",{class:"text-subtitle-1 mt-3 text-medium-emphasis text-10"}," Lorem ipsum dolor sit amet consectetur adipisicing elit Rem. ",-1),Xt=l("Sign out from all devices"),Zt={class:"mt-sm-8 mt-5"},es={class:"d-flex align-center my-4"},ts=s("div",{class:"ml-3 pr-3"},[s("h6",{class:"text-h6 mb-1"},"iPhone 14"),s("h5",{class:"text-subtitle-1 text-medium-emphasis"},"London UK, Oct 23 at 1:15 AM")],-1),ss={class:"d-flex align-center my-4"},ls=s("div",{class:"ml-3 pr-3"},[s("h6",{class:"text-h6 mb-1"},"Macbook Air"),s("h5",{class:"text-subtitle-1 text-medium-emphasis"},"Gujarat India, Oct 24 at 3:15 AM")],-1),as=l("Need Help?"),os={class:"d-flex justify-end mt-5"},is=l("Save"),ds=l("Cancel"),ns=$({setup(b){return(m,y)=>(V(),P(_,{elevation:"10"},{default:t(()=>[e(g,{class:"ma-sm-n2 ma-n1"},{default:t(()=>[e(a,{cols:"12",md:"8"},{default:t(()=>[e(_,{elevation:"10"},{default:t(()=>[e(x,null,{default:t(()=>[kt,s("div",Mt,[Rt,e(o,{color:"primary",class:"mt-sm-0 mt-3",flat:""},{default:t(()=>[Lt]),_:1})]),e(z),s("div",Et,[Ft,e(o,{class:"bg-lightprimary text-primary",flat:""},{default:t(()=>[Gt]),_:1})]),e(z),s("div",Kt,[qt,e(o,{class:"bg-lightprimary text-primary",flat:""},{default:t(()=>[Ot]),_:1})]),e(z),s("div",Ht,[Wt,e(o,{class:"bg-lightprimary text-primary",flat:""},{default:t(()=>[Yt]),_:1})])]),_:1})]),_:1})]),_:1}),e(a,{cols:"12",md:"4"},{default:t(()=>[e(_,{elevation:"10"},{default:t(()=>[e(x,null,{default:t(()=>[e(f,{size:"48",class:"",rounded:"md",color:"lightprimary"},{default:t(()=>[e(p(F),{class:"text-primary",size:"25"})]),_:1}),Jt,Qt,e(o,{color:"primary",class:"mt-4",flat:""},{default:t(()=>[Xt]),_:1}),s("div",Zt,[s("div",es,[e(f,{size:"30",rounded:"md",color:"surface"},{default:t(()=>[e(p(Z),{size:"25"})]),_:1}),ts,e(o,{size:"30",icon:"",variant:"flat",class:"lightprimary ml-auto"},{default:t(()=>[e(f,{size:"20"},{default:t(()=>[e(p(G))]),_:1})]),_:1})]),e(z),s("div",ss,[e(f,{size:"30",rounded:"md",color:"surface"},{default:t(()=>[e(p(F),{size:"25"})]),_:1}),ls,e(o,{size:"30",icon:"",variant:"flat",class:"lightprimary ml-auto"},{default:t(()=>[e(f,{size:"20"},{default:t(()=>[e(p(G))]),_:1})]),_:1})])]),e(o,{class:"bg-lightprimary text-primary mt-5",block:"",flat:""},{default:t(()=>[as]),_:1})]),_:1})]),_:1})]),_:1})]),_:1}),s("div",os,[e(o,{size:"large",color:"primary",class:"mr-4",flat:""},{default:t(()=>[is]),_:1}),e(o,{size:"large",class:"bg-lighterror text-error",flat:""},{default:t(()=>[ds]),_:1})])]),_:1}))}}),us=l(" Account"),cs=l("Notification"),ms=l("Bills"),rs=l("Security"),vs=$({setup(b){const m=n(null),y=n({title:"Account Setting"}),v=n([{text:"Dashboard",disabled:!1,href:"#"},{text:"Account Setting",disabled:!0,href:"#"}]);return(w,c)=>(V(),B(D,null,[e(_e,{title:y.value.title,breadcrumbs:v.value},null,8,["title","breadcrumbs"]),e(g,{class:"justify-center"},{default:t(()=>[e(a,{cols:"12",md:"12"},{default:t(()=>[e(_,{elevation:"10",class:"",rounded:"md"},{default:t(()=>[e(O,{modelValue:m.value,"onUpdate:modelValue":c[0]||(c[0]=h=>m.value=h),"bg-color":"transparent","min-height":"70",height:"70",color:"primary"},{default:t(()=>[e(S,{value:"Account",class:"text-medium-emphasis"},{default:t(()=>[e(p(ee),{class:"mr-2",size:"20"}),us]),_:1}),e(S,{value:"Notification",class:"text-medium-emphasis"},{default:t(()=>[e(p(te),{class:"mr-2",size:"20"}),cs]),_:1}),e(S,{value:"Bills",class:"text-medium-emphasis"},{default:t(()=>[e(p(se),{class:"mr-2",size:"20"}),ms]),_:1}),e(S,{value:"Security",class:"text-medium-emphasis"},{default:t(()=>[e(p(le),{class:"mr-2",size:"20"}),rs]),_:1})]),_:1},8,["modelValue"]),e(z),e(H,{class:"pa-sm-6 pa-3 pb-sm-6 pb-6"},{default:t(()=>[e(W,{modelValue:m.value,"onUpdate:modelValue":c[1]||(c[1]=h=>m.value=h)},{default:t(()=>[e(I,{value:"Account"},{default:t(()=>[e(Ee)]),_:1}),e(I,{value:"Notification"},{default:t(()=>[e(it)]),_:1}),e(I,{value:"Bills"},{default:t(()=>[e(jt)]),_:1}),e(I,{value:"Security"},{default:t(()=>[e(ns)]),_:1})]),_:1},8,["modelValue"])]),_:1})]),_:1})]),_:1})]),_:1})],64))}});export{vs as default};