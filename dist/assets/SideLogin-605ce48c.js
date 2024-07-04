import{_ as A}from"./principal_syscall-fb96c94f.js";import{u as $,ac as T,ad as g,x as j,Q as z,o as c,c as _,e as q,w as t,d as a,t as x,ae as b,l as w,b as e,az as v,af as y,z as s,ag as V,a as o,V as C,Y as I,ah as M,F as P,aA as U,r as Y,a3 as S,am as D}from"./index-c6c85c3e.js";import{u as Q,a as k}from"./vee-validate.esm-4770a0ce.js";const G=a("E-mail"),H=a("Password"),J={class:"d-flex flex-wrap align-center my-3 ml-n2"},K={class:"ml-sm-auto"},O=a("Forgot Password ? "),W=a("Sign In"),X={key:0,class:"mt-2"},Z=$({setup(F){const h=U(),p=T({email:g().required().email().label("E-mail"),password:g().required().label("Senha")}),{handleSubmit:B,errors:r,isSubmitting:E}=Q({validationSchema:p,initialValues:{email:"teste@teste.com",password:"12345"}}),L=B(async i=>{await N(i)}),{value:d}=k("email"),{value:u}=k("password"),f=j(),n=z("");function N(i){n.value="",f.sanctum().then(()=>{f.login(i.email,i.password).then(()=>{h.push({name:"dashboard"})}).catch(l=>{n.value=l.message})})}return(i,l)=>{const R=Y("RouterLink");return c(),_(P,null,[n.value?(c(),q(b,{key:0,color:"error"},{default:t(()=>[a(x(n.value),1)]),_:1})):w("",!0),e(M,{class:"mt-5",onSubmit:I(s(L),["prevent"])},{default:t(()=>[e(v,{class:"text-subtitle-1 font-weight-semibold pb-2 text-lightText"},{default:t(()=>[G]),_:1}),e(y,{modelValue:s(d),"onUpdate:modelValue":l[0]||(l[0]=m=>V(d)?d.value=m:null),class:"mb-8",placeholder:"email@agcocorp.com",type:"email",autofocus:"","error-messages":s(r).email},null,8,["modelValue","error-messages"]),e(v,{class:"text-subtitle-1 font-weight-semibold pb-2 text-lightText"},{default:t(()=>[H]),_:1}),e(y,{modelValue:s(u),"onUpdate:modelValue":l[1]||(l[1]=m=>V(u)?u.value=m:null),"hide-details":"auto",type:"password",class:"pwdInput","error-messages":s(r).password},null,8,["modelValue","error-messages"]),o("div",J,[o("div",K,[e(R,{to:"/forgot-password",class:"text-primary text-decoration-none text-body-1 opacity-1 font-weight-medium"},{default:t(()=>[O]),_:1})])]),e(C,{size:"large",type:"submit",loading:s(E),color:"primary",block:"",flat:""},{default:t(()=>[W]),_:1},8,["loading"]),s(r).apiError?(c(),_("div",X,[e(b,{color:"error"},{default:t(()=>[a(x(s(r).apiError),1)]),_:1})])):w("",!0)]),_:1},8,["onSubmit"])],64)}}}),ee={class:"pa-3"},te=o("div",null,[o("img",{src:A,class:"position-relative d-none d-lg-flex",alt:"login-background",style:{width:"100%",height:"100%","object-fit":"cover"}})],-1),se={class:"mt-xl-0 mt-5 mw-100"},ae=o("h2",{class:"text-h3 font-weight-bold mb-2"},"SYSCALL",-1),oe=o("div",{class:"text-subtitle-1 mb-6"},null,-1),le={class:"text-h6 d-flex align-center mt-6 font-weight-medium"},ie=a(" New to Syscall? "),re=a("Create an account"),ue=$({setup(F){return(h,p)=>(c(),_("div",ee,[e(D,{class:"h-100vh mh-100 auth"},{default:t(()=>[e(S,{cols:"12",lg:"7",xl:"8",class:"d-lg-flex align-center justify-center authentication position-relative"},{default:t(()=>[te]),_:1}),e(S,{cols:"12",lg:"5",xl:"4",class:"d-flex align-center justify-center"},{default:t(()=>[o("div",se,[ae,oe,e(Z),o("h6",le,[ie,e(C,{class:"pl-0 text-primary text-body-1 opacity-1 pl-2 font-weight-medium",height:"auto",to:"/register",variant:"plain"},{default:t(()=>[re]),_:1})])])]),_:1})]),_:1})]))}});export{ue as default};
