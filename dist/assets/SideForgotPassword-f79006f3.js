import{_ as M}from"./principal_syscall-fb96c94f.js";import"./customizer-78b9077b.js";import{v as C,L as P,a7 as L,a8 as V,o as r,c as h,e as p,w as t,d as a,t as A,a9 as F,l as f,b as e,aC as y,aa as S,y as l,ab as $,V as T,S as B,ac as D,F as N,a as n,r as U,ai as j,_ as q}from"./index-19f3b6a9.js";import{u as z,a as R}from"./vee-validate.esm-c235669a.js";const O=n("p",{class:"text-subtitle-1 py-6 text-10"}," Por favor, insira o endereço de e-mail associado à sua conta e nós lhe enviaremos um link por e-mail, para redefinir sua senha. ",-1),Z=a("E-mail"),G=a("Recuperar senha "),H={emits:["after-request"],setup(v,{emit:o}){const m=C(),s=P(null),_=L({email:V().required().email().label("E-mail")}),{handleSubmit:b,errors:g,isSubmitting:x}=z({validationSchema:_,initialValues:{email:""}}),w=b(async d=>{s.value=null,await m.forgotPassword(d.email).then(()=>{o("after-request")}).catch(i=>{s.value=i.message})}),{value:c}=R("email");return(d,i)=>(r(),h(N,null,[s.value?(r(),p(F,{key:0,color:"error"},{default:t(()=>[a(A(s.value),1)]),_:1})):f("",!0),e(D,{onSubmit:B(l(w),["prevent"]),class:"mt-sm-13 mt-8"},{default:t(()=>[O,e(y,{class:"text-subtitle-1 font-weight-semibold pb-2 text-lightText"},{default:t(()=>[Z]),_:1}),e(S,{modelValue:l(c),"onUpdate:modelValue":i[0]||(i[0]=u=>$(c)?c.value=u:null),placeholder:"email@agcocorp.com",type:"email",autofocus:"","error-messages":l(g).email},null,8,["modelValue","error-messages"]),e(T,{size:"large",type:"submit",loading:l(x),color:"primary",block:"",flat:""},{default:t(()=>[G]),_:1},8,["loading"])]),_:1},8,["onSubmit"])],64))}},I={class:"mt-sm-13 mt-8"},J=a("Digite o seu código de segurança de 6 dígitos."),K={class:"d-flex"},Q=a("Digite a nova senha."),W={class:"d-flex"},X=a("Resetar a senha "),Y={class:"text-h6 mt-5 font-weight-regular"},ee=a(" Didn't get the code? "),te=a(" Resend"),se={emits:["after-reset"],setup(v,{emit:o}){const m=C(),s=P(null),_=L({token:V().required().label("Token"),password:V().min(8).required().matches(/^(?=.*[a-zA-Z])(?=.*[0-9])/,"Senha deve conter 8 caracteres e pelo menos uma letra e um número").label("Senha")}),{handleSubmit:b,errors:g,isSubmitting:x}=z({validationSchema:_,initialValues:{token:"",password:""}}),w=b(async i=>{s.value=null,await m.resetPassword(i.token,i.password).then(()=>{o("after-reset")}).catch(u=>{s.value=u.message})}),{value:c}=R("token"),{value:d}=R("password");return(i,u)=>{const E=U("RouterLink");return r(),h(N,null,[s.value?(r(),p(F,{key:0,color:"error"},{default:t(()=>[a(A(s.value),1)]),_:1})):f("",!0),e(D,{onSubmit:B(l(w),["prevent"]),class:"mt-sm-13 mt-8"},{default:t(()=>[n("div",I,[e(y,{class:"text-subtitle-1 font-weight-semibold pb-2 text-lightText"},{default:t(()=>[J]),_:1}),n("div",K,[e(S,{modelValue:l(c),"onUpdate:modelValue":u[0]||(u[0]=k=>$(c)?c.value=k:null),autofocus:"",maxlength:6,"error-messages":l(g).token},null,8,["modelValue","error-messages"])]),e(y,{class:"text-subtitle-1 font-weight-semibold pb-2 text-lightText"},{default:t(()=>[Q]),_:1}),n("div",W,[e(S,{modelValue:l(d),"onUpdate:modelValue":u[1]||(u[1]=k=>$(d)?d.value=k:null),type:"password",autofocus:"","error-messages":l(g).password},null,8,["modelValue","error-messages"])]),e(T,{size:"large",type:"submit",loading:l(x),color:"primary",block:"",flat:""},{default:t(()=>[X]),_:1},8,["loading"]),n("h6",Y,[ee,e(E,{to:"/",class:"text-primary text-subtitle-1 text-decoration-none pl-1 font-weight-medium"},{default:t(()=>[te]),_:1})])])]),_:1},8,["onSubmit"])],64)}}},ae=a(" Sua senha foi redefinida com sucesso! "),oe={setup(v){const o=P("forgotPassword");return(m,s)=>(r(),h("div",null,[o.value==="forgotPassword"?(r(),p(H,{key:0,onAfterRequest:s[0]||(s[0]=_=>o.value="resetPassword")})):f("",!0),o.value==="resetPassword"?(r(),p(se,{key:1,onAfterReset:s[1]||(s[1]=_=>o.value="reset")})):f("",!0),o.value==="reset"?(r(),p(F,{key:2,color:"success",class:"mb-2"},{default:t(()=>[ae]),_:1})):f("",!0)]))}};const le={class:"pa-3"},re=n("div",{class:"image-container"},[n("img",{src:M,class:"login-image",alt:"forgot-password-background"})],-1),ne={class:"pa-sm-7 pa-4"},ie=n("h2",{class:"text--darken-2 text-h4 font-weight-bold"},"D-CONTROL",-1),ue=a("Voltar para Login"),pe={setup(v){return(o,m)=>(r(),h("div",le,[e(j,{class:"h-100vh mh-100 auth"},{default:t(()=>[e(q,{cols:"12",lg:"8",xl:"8",xxl:"9",class:"d-lg-flex align-center justify-center position-relative auth-background"},{default:t(()=>[re]),_:1}),e(q,{cols:"12",lg:"4",xl:"4",xxl:"3",class:"d-flex align-center justify-center"},{default:t(()=>[n("div",ne,[ie,e(oe),e(T,{size:"large",color:"lightprimary",to:"/login",block:"",class:"mt-5 text-primary",flat:""},{default:t(()=>[ue]),_:1})])]),_:1})]),_:1})]))}};export{pe as default};