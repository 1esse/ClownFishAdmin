import{d as V,i as E,u as M,c as S,_ as r,a as e,P as b,t as G,f as H,L as J,b as K,e as Q,o as R,g as U,w as i,h as o,j as l}from"./index-6b87b9fd.js";var W=function(){return{prefixCls:String,color:String,dot:b.any,pending:{type:Boolean,default:void 0},position:b.oneOf(G("left","right","")).def(""),label:b.any}};const T=V({compatConfig:{MODE:3},name:"ATimelineItem",props:E(W(),{color:"blue",pending:!1}),slots:["dot","label"],setup:function(u,n){var a=n.slots,k=M("timeline",u),t=k.prefixCls;return function(){var C,y,d,c,v,s=u.color,p=s===void 0?"":s,f=u.pending,x=u.label,O=x===void 0?(C=a.label)===null||C===void 0?void 0:C.call(a):x,g=u.dot,N=g===void 0?(y=a.dot)===null||y===void 0?void 0:y.call(a):g,w=S((d={},r(d,"".concat(t.value,"-item"),!0),r(d,"".concat(t.value,"-item-pending"),f),d)),$=S((c={},r(c,"".concat(t.value,"-item-head"),!0),r(c,"".concat(t.value,"-item-head-custom"),N),r(c,"".concat(t.value,"-item-head-").concat(p),!0),c)),I=/blue|red|green|gray/.test(p||"")?void 0:p;return e("li",{class:w},[O&&e("div",{class:"".concat(t.value,"-item-label")},[O]),e("div",{class:"".concat(t.value,"-item-tail")},null),e("div",{class:$,style:{borderColor:I,color:I}},[N]),e("div",{class:"".concat(t.value,"-item-content")},[(v=a.default)===null||v===void 0?void 0:v.call(a)])])}}});var X=function(){return{prefixCls:String,pending:b.any,pendingDot:b.any,reverse:{type:Boolean,default:void 0},mode:b.oneOf(G("left","alternate","right",""))}};const P=V({compatConfig:{MODE:3},name:"ATimeline",props:E(X(),{reverse:!1,mode:""}),slots:["pending","pendingDot"],setup:function(u,n){var a=n.slots,k=M("timeline",u),t=k.prefixCls,C=k.direction,y=function(c,v){var s=c.props||{};return u.mode==="alternate"?s.position==="right"?"".concat(t.value,"-item-right"):s.position==="left"||v%2===0?"".concat(t.value,"-item-left"):"".concat(t.value,"-item-right"):u.mode==="left"?"".concat(t.value,"-item-left"):u.mode==="right"||s.position==="right"?"".concat(t.value,"-item-right"):""};return function(){var d,c,v,s,p=u.pending,f=p===void 0?(d=a.pending)===null||d===void 0?void 0:d.call(a):p,x=u.pendingDot,O=x===void 0?(c=a.pendingDot)===null||c===void 0?void 0:c.call(a):x,g=u.reverse,N=u.mode,w=typeof f=="boolean"?null:f,$=H((v=a.default)===null||v===void 0?void 0:v.call(a)),I=f?e(T,{pending:!!f,dot:O||e(J,null,null)},{default:function(){return[w]}}):null;I&&$.push(I);var B=g?$.reverse():$,L=B.length,j="".concat(t.value,"-item-last"),q=B.map(function(h,m){var D=m===L-2?j:"",F=m===L-1?j:"";return K(h,{class:S([!g&&f?D:F,y(h,m)])})}),A=B.some(function(h){var m,D;return!!((m=h.props)!==null&&m!==void 0&&m.label||(D=h.children)!==null&&D!==void 0&&D.label)}),z=S(t.value,(s={},r(s,"".concat(t.value,"-pending"),!!f),r(s,"".concat(t.value,"-reverse"),!!g),r(s,"".concat(t.value,"-").concat(N),!!N&&!A),r(s,"".concat(t.value,"-label"),A),r(s,"".concat(t.value,"-rtl"),C.value==="rtl"),s));return e("ul",{class:z},[q])}}});P.Item=T;P.install=function(_){return _.component(P.name,P),_.component(T.name,T),_};const Y={},Z=l("ul",null,[l("li",null,"修改types文件夹名称，使用typings代替")],-1),ll=l("ul",null,[l("li",null,"更新vite版本至4.0.4"),l("li",null,"更新其他依赖包至最新版本")],-1),el=l("ul",null,[l("li",null,"标签页关于页面被缓存显示小圆点可自主控制（layout/index页，设置Tabsbar组件的withDot值）"),l("li",null,"新增页面布局相关函数示例页面（关闭当前标签页，获取当前所有标签页，重命名当前标签页名称，刷新当前面包屑）"),l("li",null,"优化dialog组件"),l("li",null,"为了减少困惑，mock接口现在默认关闭文件名称拼接url，可在appConfig.ts设置mockNamespace为true重新开启（开启后各个文件的url路径需要重新修改正确）"),l("li",null,"更新vite版本至4.0.0"),l("li",null,"更新其他依赖包至最新版本")],-1),nl=l("ul",null,[l("li",null,"默认关闭标签页标题的图标显示（开启只需到layout/index页，将Tabsbar组件的withIcon值设为true）。如果页面被缓存，标题会显示小圆点。"),l("li",null,"优化搜索，可根据菜单名称，拼音，首字母搜索菜单"),l("li",null,"更新vite版本至3.2.4")],-1),tl=l("ul",null,[l("li",null,"修复缩放浏览器后，菜单栏logo图标显示成收起状态")],-1),il=l("ul",null,[l("li",null,"更新vue版本至3.2.45"),l("li",null,"更新vite版本至3.2.3"),l("li",null,"更新其他依赖包至最新版本")],-1),ol=l("ul",null,[l("li",null,"使用h函数替换tsx渲染，方便不想用tsx开发的同学移除依赖包"),l("li",null,"更新依赖包至最新版本")],-1),ul=l("ul",null,[l("li",null,"新增菜单搜索，页面全屏功能")],-1),al=l("ul",null,[l("li",null,"支持更多的自动导入（vue，pinia，vue-router等常用函数）")],-1),sl=l("ul",null,[l("li",null,"魔改antd布局样式，大幅优化菜单展开及收起时的性能"),l("li",null,"优化菜单，展开和收起的时候图标不抖动")],-1),cl=l("ul",null,[l("li",null,"修复标签页超出边界问题"),l("li",null,"修复设置弹窗询问关闭的标签页在关闭全部下无效"),l("li",null,"支持标签页拖拽切换顺序"),l("li",null,"新增关闭右侧选项"),l("li",null,"修复频繁点击刷新页面按钮导致刷新失败问题")],-1),rl=l("ul",null,[l("li",null,"弃用postcss-nesting，改用scss以获得编辑器更好的支持")],-1),dl=l("ul",null,[l("li",null,"增加菜单选中动画"),l("li",null,"优化缓存页面"),l("li",null,"新增功能示例")],-1),vl=l("ul",null,[l("li",null,"新增动态固定头部，appconfig可配置初始值"),l("li",null,"tabs不再局限于菜单页保持一致，可添加任意路径的路由，包括hidden页"),l("li",null,"关闭tab标签页可以弹窗确认"),l("li",null,"优化路由监听"),l("li",null,"mock支持获取get参数")],-1),_l=l("ul",null,[l("li",null,"cookie增加SameSite=None;Secure设置"),l("li",null,"优化侧边栏和标签栏滚动速度"),l("li",null,"将vite版本更新至3.0，更新所有其他依赖包至最新版本"),l("li",null,"运行项目成功后默认不自动打开浏览器窗口")],-1),fl=l("ul",null,[l("li",null,"修复路由只有一个子节点时生成的导航条在手机端路径不对的bug")],-1),ml=l("ul",null,[l("li",null,"优化动画效果，使其更加流畅自然"),l("li",null,"新增环境配置，支持staging预发布环境"),l("li",null,"支持mock模拟接口，appConfig.ts文件中开启")],-1),pl=l("ul",null,[l("li",null,"优化手机端侧边栏展示"),l("li",null,"可添加LOGO")],-1),gl=l("ul",null,[l("li",null,"vue-clownfish-admin初版发布 :)")],-1);function hl(_,u){const n=T,a=P;return R(),U(a,null,{default:i(()=>[e(n,null,{default:i(()=>[o("v1.3.2 "),Z]),_:1}),e(n,null,{default:i(()=>[o("v1.3.1 "),ll]),_:1}),e(n,null,{default:i(()=>[o("v1.3.0 "),el]),_:1}),e(n,null,{default:i(()=>[o("v1.2.6 "),nl]),_:1}),e(n,null,{default:i(()=>[o("v1.2.5 "),tl]),_:1}),e(n,null,{default:i(()=>[o("v1.2.4 "),il]),_:1}),e(n,null,{default:i(()=>[o("v1.2.3 "),ol]),_:1}),e(n,null,{default:i(()=>[o("v1.2.1 "),ul]),_:1}),e(n,null,{default:i(()=>[o("v1.2.0 "),al]),_:1}),e(n,null,{default:i(()=>[o("v1.1.9 "),sl]),_:1}),e(n,null,{default:i(()=>[o("v1.1.7 "),cl]),_:1}),e(n,null,{default:i(()=>[o("v1.1.3 "),rl]),_:1}),e(n,null,{default:i(()=>[o("v1.1.0 "),dl]),_:1}),e(n,null,{default:i(()=>[o("v1.0.19 "),vl]),_:1}),e(n,null,{default:i(()=>[o("v1.0.16 "),_l]),_:1}),e(n,null,{default:i(()=>[o("v1.0.8 "),fl]),_:1}),e(n,null,{default:i(()=>[o("v1.0.6 "),ml]),_:1}),e(n,null,{default:i(()=>[o("v1.0.3 "),pl]),_:1}),e(n,null,{default:i(()=>[o("v1.0.0 "),gl]),_:1})]),_:1})}const Cl=Q(Y,[["render",hl]]);export{Cl as default};
