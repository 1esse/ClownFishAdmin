import{i as u}from"./index-050f448e.js";import{d as i,b_ as _,G as p,am as f,I as m,K as h,ai as v,o as r,aG as l,b$ as y,ax as g,q as x,a as b,e as k}from"./index-6b87b9fd.js";const A=i({__name:"Line",setup(c){const a=x("sidebarRelated"),s=_(),o=p(),e=f(null);m(()=>{d(),window.addEventListener("resize",n)}),h(()=>{e.value&&(e.value.dispose(),e.value=null,window.removeEventListener("resize",n))}),v(()=>a==null?void 0:a.collapsed,()=>{setTimeout(()=>{n()},300)});function d(){e.value=u(o.value);const t={backgroundColor:"#fff",title:{text:"堆叠折线图"},tooltip:{trigger:"axis"},legend:{data:["Email","Union Ads","Video Ads","Direct","Search Engine"]},grid:{left:"3%",right:"4%",bottom:"3%",containLabel:!0},toolbox:{feature:{saveAsImage:{}}},xAxis:{type:"category",boundaryGap:!1,data:["Mon","Tue","Wed","Thu","Fri","Sat","Sun"]},yAxis:{type:"value"},series:[{name:"Email",type:"line",stack:"Total",data:[120,132,101,134,90,230,210]},{name:"Union Ads",type:"line",stack:"Total",data:[220,182,191,234,290,330,310]},{name:"Video Ads",type:"line",stack:"Total",data:[150,232,201,154,190,330,410]},{name:"Direct",type:"line",stack:"Total",data:[320,332,301,334,390,330,320]},{name:"Search Engine",type:"line",stack:"Total",data:[820,932,901,934,1290,1330,1320]}]};e.value.setOption(t)}function n(){var t;(t=e.value)==null||t.resize()}return(t,E)=>(r(),l("div",y({ref_key:"chartRef",ref:o},g(s)),null,16))}}),T={class:"main"},w=i({__name:"line",setup(c){return(a,s)=>(r(),l("main",T,[b(A,{style:{width:"100%",height:"100%"}})]))}});const L=k(w,[["__scopeId","data-v-00b66ef7"]]);export{L as default};
