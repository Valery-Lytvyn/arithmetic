import{r as m,u as c,s as l,R as h,j as e}from"./index-31006efe.js";import{u as p,B as x}from"./Button-8497fc8c.js";import{L as d}from"./constants-3628f6d0.js";function f(){const[a,n]=m.useState(""),r=p(),t=c(),i=(s,u)=>{s==null||s.preventDefault();let o;!u||u.trim().length===0?o="user":o=u,r(l(o)),t(h.settings)};return{userName:a,setUserName:n,authUser:s=>{i(s,a)}}}function v(){const{userName:a,setUserName:n,authUser:r}=f();return e.jsxs("div",{className:"auth",children:[e.jsx("h2",{className:"p-3 text-danger",children:"Please enter your name:"}),e.jsxs("form",{className:"authForm",onSubmit:r,children:[e.jsxs("div",{className:"inputGroup",children:[e.jsx("label",{htmlFor:"name",children:"name:"}),e.jsx("input",{autoFocus:!0,type:"text",id:"name",name:"name",value:a,placeholder:"your name",onChange:t=>n(t.target.value),onKeyDown:t=>{t.key==="Enter"&&r(t)}})]}),e.jsx(x,{className:"btn-primary px-3",ariaLabel:"Login button",btnValue:d,type:"submit"})]})]})}export{v as default};