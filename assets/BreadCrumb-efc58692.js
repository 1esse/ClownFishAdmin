import{d as I,am as L,k as S,ai as q,aq as A,cr as u,o as t,g as o,w as i,ax as f,aG as m,aN as D,ag as k,cs as M,aS as g,a as T,aH as b,aU as V,m as E,aQ as F,cq as G,r as H,ct as Q,cu as U}from"./index-6b87b9fd.js";import{r as v}from"./pathe.92c04245-796500ea.js";const $=["href","onClick"],j={key:1},K=I({__name:"BreadCrumb",props:{withIcons:{type:Boolean,default:!1}},setup(y,{expose:B}){const C=y,R=E(),_=F(),w=R.getRoutes(),e=L([]);S(()=>p()),q(()=>_.path,p),B({refreshBreadCrumb:p});function p(){e.value=[],A(()=>{var h,c,r,l;const s=[];e.value=_.matched.filter(n=>n.meta.breadcrumb!==!1);for(const n of e.value){if(n.meta.belongs){const a=w.find(d=>d.path===n.meta.belongs);a&&s.push(a)}s.push(n)}if(e.value=s,e.value.length===0){e.value.unshift({...(h=u.children)==null?void 0:h[0],path:v("/",(c=u.children)==null?void 0:c[0].path)});return}e.value[0].path!=="/dashboard"&&e.value.unshift({...(r=u.children)==null?void 0:r[0],path:v("/",(l=u.children)==null?void 0:l[0].path)})})}return(s,h)=>{const c=G,r=H("RouterLink"),l=Q,n=U;return t(),o(V,{name:"fade-scale",mode:"out-in",appear:""},{default:i(()=>[f(e).length>0?(t(),o(n,{key:0},{default:i(()=>[(t(!0),m(k,null,D(f(e),(a,d)=>(t(),o(l,{key:a.path},{default:i(()=>[C.withIcons&&a.meta.icon?(t(),m(k,{key:0},[typeof a.meta.icon=="string"?(t(),o(c,{key:0,iconName:a.meta.icon},null,8,["iconName"])):(t(),o(M(a.meta.icon),{key:1}))],64)):g("",!0),T(r,{custom:"",to:a.path},{default:i(({navigate:x,href:N})=>[d<f(e).length-1?(t(),m("a",{key:0,href:N,onClick:x}," "+b(a.meta.title),9,$)):(t(),m("span",j," "+b(a.meta.title),1))]),_:2},1032,["to"])]),_:2},1024))),128))]),_:1})):g("",!0)]),_:1})}}});export{K as default};