import{d as ve,u as He,g as pe,_ as ct,c as i,a as Be,P as Se,D as Ee,f as dt,w as Nt,b as Bt,e as Et,h as tt,M as Te,i as Tt,j as zt,F as ze,A as pt,k as Fe,l as jt,r as de,m as je,n as at,o as Vt,s as Oe,p as V,q as nt,t as Ut,v as Wt,x as Ht,y as ce,z as B,B as qt,C as Gt,E as _e,G as ot,H as Qt,I as Kt,J as Ve,K as Jt,L as Xt,N as Le,O as Ne,Q as Yt,R as ft,S as R,T as j,U as g,V as ee,W as C,X as Ue,Y as K,Z as mt,$ as Zt,a0 as G,a1 as h,a2 as e,a3 as k,a4 as Q,a5 as ea,a6 as st,a7 as ta,a8 as aa,a9 as na,aa as oa,ab as sa,ac as ra,ad as la,ae as rt,af as ia,ag as ua,ah as ca,ai as da,aj as pa}from"./index-b4b95ab0.js";import{S as fe,s as fa}from"./index-9f916fee.js";import{F as J,_ as vt,a as ma}from"./numInput-d82c20f8.js";import"./index-5762bc04.js";/* empty css              */import{_ as va}from"./index-f9c4a42f.js";import{D as gt}from"./index-ae4abcd1.js";/* empty css              */import"./index-3bfccaf8.js";import{u as ht,N as ga,g as S,s as kt,a as ha,b as ka,c as ya,d as ba,F as Ca}from"./FileItem-97e4c1b8.js";import{u as wa,a as _a,b as Sa,c as Ia,_ as Pa,L as xa,R as $a,f as Aa}from"./MultiSelectKeep-45694de9.js";import{g as we,o as Ra}from"./functionalCallableComp-b6f8c4d2.js";import{u as Ma}from"./useGenInfoDiff-ea53e857.js";import"./_isIterateeCall-b2266fc9.js";import"./shortcut-7319839f.js";import"./Checkbox-125bf371.js";var Da=["class","style"],Fa=function(){return{prefixCls:String,href:String,separator:Se.any,overlay:Se.any,onClick:Function}};const me=ve({compatConfig:{MODE:3},name:"ABreadcrumbItem",inheritAttrs:!1,__ANT_BREADCRUMB_ITEM:!0,props:Fa(),slots:["separator","overlay"],setup:function(t,r){var s=r.slots,p=r.attrs,c=He("breadcrumb",t),y=c.prefixCls,x=function(f,b){var m=pe(s,t,"overlay");return m?i(gt,{overlay:m,placement:"bottom"},{default:function(){return[i("span",{class:"".concat(b,"-overlay-link")},[f,i(Ee,null,null)])]}}):f};return function(){var D,f=(D=pe(s,t,"separator"))!==null&&D!==void 0?D:"/",b=pe(s,t),m=p.class,$=p.style,I=ct(p,Da),P;return t.href!==void 0?P=i("a",Be({class:"".concat(y.value,"-link"),onClick:t.onClick},I),[b]):P=i("span",Be({class:"".concat(y.value,"-link"),onClick:t.onClick},I),[b]),P=x(P,y.value),b?i("span",{class:m,style:$},[P,f&&i("span",{class:"".concat(y.value,"-separator")},[f])]):null}}});var Oa=function(){return{prefixCls:String,routes:{type:Array},params:Se.any,separator:Se.any,itemRender:{type:Function}}};function La(o,t){if(!o.breadcrumbName)return null;var r=Object.keys(t).join("|"),s=o.breadcrumbName.replace(new RegExp(":(".concat(r,")"),"g"),function(p,c){return t[c]||p});return s}function lt(o){var t=o.route,r=o.params,s=o.routes,p=o.paths,c=s.indexOf(t)===s.length-1,y=La(t,r);return c?i("span",null,[y]):i("a",{href:"#/".concat(p.join("/"))},[y])}const oe=ve({compatConfig:{MODE:3},name:"ABreadcrumb",props:Oa(),slots:["separator","itemRender"],setup:function(t,r){var s=r.slots,p=He("breadcrumb",t),c=p.prefixCls,y=p.direction,x=function(m,$){return m=(m||"").replace(/^\//,""),Object.keys($).forEach(function(I){m=m.replace(":".concat(I),$[I])}),m},D=function(m,$,I){var P=Tt(m),O=x($||"",I);return O&&P.push(O),P},f=function(m){var $=m.routes,I=$===void 0?[]:$,P=m.params,O=P===void 0?{}:P,U=m.separator,E=m.itemRender,T=E===void 0?lt:E,L=[];return I.map(function(F){var N=x(F.path,O);N&&L.push(N);var W=[].concat(L),X=null;return F.children&&F.children.length&&(X=i(Te,null,{default:function(){return[F.children.map(function(H){return i(Te.Item,{key:H.path||H.breadcrumbName},{default:function(){return[T({route:H,params:O,routes:I,paths:D(W,H.path,O)})]}})})]}})),i(me,{overlay:X,separator:U,key:N||F.breadcrumbName},{default:function(){return[T({route:F,params:O,routes:I,paths:W})]}})})};return function(){var b,m,$,I=t.routes,P=t.params,O=P===void 0?{}:P,U=dt(pe(s,t)),E=(b=pe(s,t,"separator"))!==null&&b!==void 0?b:"/",T=t.itemRender||s.itemRender||lt;I&&I.length>0?$=f({routes:I,params:O,separator:E,itemRender:T}):U.length&&($=U.map(function(F,N){return Nt(Bt(F.type)==="object"&&(F.type.__ANT_BREADCRUMB_ITEM||F.type.__ANT_BREADCRUMB_SEPARATOR),"Breadcrumb","Only accepts Breadcrumb.Item and Breadcrumb.Separator as it's children"),Et(F,{separator:E,key:N})}));var L=(m={},tt(m,c.value,!0),tt(m,"".concat(c.value,"-rtl"),y.value==="rtl"),m);return i("div",{class:L},[$])}}});var Na=["separator","class"],Ba=function(){return{prefixCls:String}};const We=ve({compatConfig:{MODE:3},name:"ABreadcrumbSeparator",__ANT_BREADCRUMB_SEPARATOR:!0,inheritAttrs:!1,props:Ba(),setup:function(t,r){var s=r.slots,p=r.attrs,c=He("breadcrumb",t),y=c.prefixCls;return function(){var x;p.separator;var D=p.class,f=ct(p,Na),b=dt((x=s.default)===null||x===void 0?void 0:x.call(s));return i("span",Be({class:["".concat(y.value,"-separator"),D]},f),[b.length>0?b:"/"])}}});oe.Item=me;oe.Separator=We;oe.install=function(o){return o.component(oe.name,oe),o.component(me.name,me),o.component(We.name,We),o};J.useInjectFormItemContext=zt;J.ItemRest=ze;J.install=function(o){return o.component(J.name,J),o.component(J.Item.name,J.Item),o.component(ze.name,ze),o};fe.setDefaultIndicator=fa;fe.install=function(o){return o.component(fe.name,fe),o};var Ea={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M872 474H286.9l350.2-304c5.6-4.9 2.2-14-5.2-14h-88.5c-3.9 0-7.6 1.4-10.5 3.9L155 487.8a31.96 31.96 0 000 48.3L535.1 866c1.5 1.3 3.3 2 5.2 2h91.5c7.4 0 10.8-9.2 5.2-14L286.9 550H872c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8z"}}]},name:"arrow-left",theme:"outlined"};const Ta=Ea;function it(o){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?Object(arguments[t]):{},s=Object.keys(r);typeof Object.getOwnPropertySymbols=="function"&&(s=s.concat(Object.getOwnPropertySymbols(r).filter(function(p){return Object.getOwnPropertyDescriptor(r,p).enumerable}))),s.forEach(function(p){za(o,p,r[p])})}return o}function za(o,t,r){return t in o?Object.defineProperty(o,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):o[t]=r,o}var qe=function(t,r){var s=it({},t,r.attrs);return i(pt,it({},s,{icon:Ta}),null)};qe.displayName="ArrowLeftOutlined";qe.inheritAttrs=!1;const ja=qe;class Ie{static run(t){const r=Object.assign({immediately:!0,id:-1,isFinished:!1,errorHandleMethod:"ignore"},t);let s,p;const c=new Promise((f,b)=>{p=f,s=b}),y=()=>{r.isFinished=!0,clearTimeout(r.id)},x=()=>Fe(this,void 0,void 0,function*(){try{r.res=yield r.action(),r.validator&&r.validator(r.res)&&(p(r.res),y())}catch(f){Ie.silent||console.error(f),r.errorHandleMethod==="stop"&&(y(),s(f))}}),D=()=>{r.isFinished||(r.id=setTimeout(()=>Fe(this,void 0,void 0,function*(){yield x(),D()}),r.pollInterval))};return setTimeout(()=>Fe(this,void 0,void 0,function*(){r.immediately&&(yield x()),D()}),0),jt({task:r,clearTask:y,completedTask:c})}}Ie.silent=!1;var Va={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M832 64H192c-17.7 0-32 14.3-32 32v832c0 17.7 14.3 32 32 32h640c17.7 0 32-14.3 32-32V96c0-17.7-14.3-32-32-32zm-600 72h560v208H232V136zm560 480H232V408h560v208zm0 272H232V680h560v208zM304 240a40 40 0 1080 0 40 40 0 10-80 0zm0 272a40 40 0 1080 0 40 40 0 10-80 0zm0 272a40 40 0 1080 0 40 40 0 10-80 0z"}}]},name:"database",theme:"outlined"};const Ua=Va;function ut(o){for(var t=1;t<arguments.length;t++){var r=arguments[t]!=null?Object(arguments[t]):{},s=Object.keys(r);typeof Object.getOwnPropertySymbols=="function"&&(s=s.concat(Object.getOwnPropertySymbols(r).filter(function(p){return Object.getOwnPropertyDescriptor(r,p).enumerable}))),s.forEach(function(p){Wa(o,p,r[p])})}return o}function Wa(o,t,r){return t in o?Object.defineProperty(o,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):o[t]=r,o}var Ge=function(t,r){var s=ut({},t,r.attrs);return i(pt,ut({},s,{icon:Ua}),null)};Ge.displayName="DatabaseOutlined";Ge.inheritAttrs=!1;const Ha=Ge;function qa(){const o=de(),{scroller:t,stackViewEl:r,stack:s,currPage:p,currLocation:c,useEventListen:y,eventEmitter:x,getPane:D,props:f,deletedFiles:b,walker:m,sortedFiles:$,previewing:I}=ht().toRefs();je(()=>s.value.length,at((n,u)=>{var d;n!==u&&((d=t.value)==null||d.scrollToItem(0))},300)),Vt(async()=>{var n;if(!s.value.length)if(f.value.mode==="scanned-fixed"||f.value.mode==="walk")s.value=[{files:[],curr:f.value.path??""}];else{const u=await we("/");s.value.push({files:u.files,curr:"/"})}o.value=new ga,o.value.configure({parent:r.value}),f.value.path&&f.value.path!=="/"?await L(f.value.path):(n=S.conf)!=null&&n.home&&L(S.conf.home)}),je(c,at(n=>{const u=D.value();if(!u)return;u.path=n;const d=Oe(n).pop()??"",_=(()=>{const M={walk:"Walk","scanned-fixed":"Fixed",scanned:null}[f.value.mode??"scanned"],A=q=>M?`${M}: ${q}`:q,z=S.getShortPath(n);return A(z.length>24&&d?d:z)})();u.name=V("div",{style:"display:flex;align-items:center"},[V(Ha),V("span",{class:"line-clamp-1",style:"max-width: 256px"},_)]),u.nameFallbackStr=_,S.recent=S.recent.filter(M=>M.key!==u.key),S.recent.unshift({path:n,key:u.key,mode:f.value.mode}),S.recent.length>20&&(S.recent=S.recent.slice(0,20))},300));const P=()=>Ve(c.value),O=async n=>{var u,d;if(n.type==="dir")try{(u=o.value)==null||u.start();const{files:w}=await we(n.fullpath);f.value.mode=="scanned-fixed"?s.value=[{files:w,curr:n.fullpath}]:s.value.push({files:w,curr:n.name})}finally{(d=o.value)==null||d.done()}},U=n=>{if(f.value.mode!="walk")for(;n<s.value.length-1;)s.value.pop()},E=()=>{L(Jt(c.value))},T=(n,u)=>(Xt(S.conf,"global.conf load failed"),S.conf.is_win?n.toLowerCase()==u.toLowerCase():n==u),L=async n=>{f.value.mode==="walk"?D.value().path=n:f.value.mode==="scanned-fixed"?await O({fullpath:n,name:n,type:"dir"}):await F(n),nt(500).then(()=>x.value.emit("viewableAreaFilesChange"))},F=async n=>{var d,w;const u=s.value.slice();try{Ut(n)||(n=Wt(((d=S.conf)==null?void 0:d.sd_cwd)??"/",n));const _=Oe(n),M=s.value.map(A=>A.curr);for(M.shift();M[0]&&_[0]&&T(M[0],_[0]);)M.shift(),_.shift();for(let A=0;A<M.length;A++)s.value.pop();if(!_.length)return N();for(const A of _){const z=(w=p.value)==null?void 0:w.files.find(q=>T(q.name,A));if(!z)throw console.error({frags:_,frag:A,stack:Ht(s.value)}),new Error(`${A} not found`);await O(z)}}catch(_){throw ce.error(B("moveFailedCheckPath")+(_ instanceof Error?_.message:"")),console.error(n,Oe(n),p.value),s.value=u,_}},N=qt(async()=>{var n,u,d;try{if((n=o.value)==null||n.start(),m.value)await m.value.reset(),x.value.emit("loadNextDir");else{const{files:w}=await we(c.value);Le(s.value).files=w}b.value.clear(),(u=t.value)==null||u.scrollToItem(0),ce.success(B("refreshCompleted"))}finally{(d=o.value)==null||d.done()}}),W=async(n=!1)=>{var u,d,w;if(!(n===!0&&I.value)){if(f.value.mode==="walk"&&m.value){const _=((u=t.value)==null?void 0:u.$_endIndex)??64;if(S.autoRefreshWalkMode&&_<S.autoRefreshWalkModePosLimit&&await m.value.isExpired()){const M=de(!1),A=()=>{M.value=!0,S.autoRefreshWalkMode=!1,z(),ce.success(B("walkModeAutoRefreshDisabled"))},z=ce.loading(V("span",{},[B("autoUpdate"),V("span",{onClick:A,style:{paddingLeft:"16px",cursor:"pointer",color:"var(--primary-color)"}},B("disable"))]),0);try{const q=new Promise(ke=>{m.value.seamlessRefresh(_,M).then(ae=>{M.value||(m.value=ae,x.value.emit("loadNextDir"),ke())})});await Promise.all([q,nt(1500)])}finally{z()}}return}try{if(!S.autoRefreshNormalFixedMode)return;(d=o.value)==null||d.start();const{files:_}=await we(c.value);Le(s.value).files.map(A=>A.date).join()!==_.map(A=>A.date).join()&&(Le(s.value).files=_,ce.success(B("autoUpdate")))}finally{(w=o.value)==null||w.done()}}};Gt("returnToIIB",W),y.value("refresh",N);const X=n=>{L(n)},te=_e(()=>S.quickMovePaths.map(n=>({...n,path:ot(n.dir)}))),H=_e(()=>{const n=ot(c.value);return te.value.find(d=>d.path===n)}),se=async()=>{const n=S.tabList[f.value.tabIdx],u={type:"empty",name:B("emptyStartPage"),key:Date.now()+Ne(),popAddPathModal:{path:c.value,type:"scanned"}};n.panes.push(u),n.key=u.key},Y=de(!1),re=de(c.value),ge=()=>{Y.value=!0,re.value=c.value},Pe=async()=>{await L(re.value),Y.value=!1};wa("click",n=>{var u,d,w;(w=(d=(u=n.target)==null?void 0:u.className)==null?void 0:d.includes)!=null&&w.call(d,"ant-input")||(Y.value=!1)});const xe=()=>{const n=parent.location,u=n.href.substring(0,n.href.length-n.search.length),d=new URLSearchParams(n.search);d.set("action","open"),d.set("path",c.value),d.set("mode",f.value.mode??"scanned");const w=`${u}?${d.toString()}`;Ve(w,B("copyLocationUrlSuccessMsg"))},le=(n="tag-search")=>{const u=S.tabList[f.value.tabIdx],d={type:n,key:Ne(),searchScope:c.value,name:B(n==="tag-search"?"imgSearch":"fuzzy-search")};u.panes.push(d),u.key=d.key},Z=()=>x.value.emit("selectAll"),ie=async()=>{await Ra(c.value),await N()},he=()=>{const n=c.value;kt.set(n,s.value);const u=S.tabList[f.value.tabIdx],d={type:"local",key:Ne(),path:n,name:B("local"),stackKey:n,mode:"walk"};u.panes.push(d),u.key=d.key},$e=_e(()=>!m.value&&$.value.some(n=>n.type==="dir"));return{locInputValue:re,isLocationEditing:Y,onLocEditEnter:Pe,onEditBtnClick:ge,addToSearchScanPathAndQuickMove:se,searchPathInfo:H,refresh:N,copyLocation:P,back:U,openNext:O,currPage:p,currLocation:c,stack:s,scroller:t,share:xe,selectAll:Z,quickMoveTo:X,onCreateFloderBtnClick:ie,onWalkBtnClick:he,showWalkButton:$e,searchInCurrentDir:le,backToLastUseTo:E,...Ga(()=>W(!0))}}const Ga=o=>{const t=de([]),r=_e(()=>t.value.length>0);Qt(()=>{t.value.forEach(c=>c())});const s=Kt(Yt+"poll-interval",3);return{onPollRefreshClick:()=>{if(t.value.length){t.value.forEach(c=>c()),t.value=[];return}ft.confirm({title:B("pollRefresh"),width:640,content:()=>V("div",{},[V("p",{class:"uni-desc primary-bg"},B("pollRefreshTip")),V("div",{style:{display:"flex",alignItems:"center",gap:"4px"}},[V("span",{},B("pollInterval")+"(s): "),V(vt,{min:1,max:60*10,modelValue:s.value,"onUpdate:modelValue":c=>{s.value=c}})])]),onOk:()=>{const{clearTask:c}=Ie.run({pollInterval:s.value*1e3,action:o});t.value.push(c)}})},polling:r}};const Qa={class:"base-info"},Ka=ve({__name:"BaseFileListInfo",props:{fileNum:{},selectedFileNum:{}},setup(o){return(t,r)=>(R(),j("div",Qa,[g("span",null,[ee(C(t.$t("items",[t.fileNum]))+" ",1),t.selectedFileNum?(R(),j(Ue,{key:0},[ee(", "+C(t.$t("selectedItems",[t.selectedFileNum])),1)],64)):K("",!0)])]))}});const Ja=mt(Ka,[["__scopeId","data-v-afd25667"]]),Xa={class:"hint"},Ya={class:"location-bar"},Za=["onClick"],en={key:3,class:"location-act"},tn={class:"actions"},an=["onClick"],nn={style:{width:"512px",background:"var(--zp-primary-background)",padding:"16px","border-radius":"4px","box-shadow":"0 0 4px var(--zp-secondary-background)",border:"1px solid var(--zp-secondary-background)"}},on={style:{padding:"4px"}},sn={style:{padding:"4px"}},rn={style:{padding:"4px"}},ln={key:0,class:"view"},un={style:{padding:"16px 0 512px"}},cn={key:0,class:"preview-switch"},dn=ve({__name:"stackView",props:{tabIdx:{},paneIdx:{},path:{},mode:{},stackKey:{}},setup(o){const t=o,r=Zt(),{scroller:s,stackViewEl:p,props:c,multiSelectedIdxs:y,spinning:x}=ht().toRefs(),{currLocation:D,currPage:f,refresh:b,copyLocation:m,back:$,openNext:I,stack:P,quickMoveTo:O,addToSearchScanPathAndQuickMove:U,locInputValue:E,isLocationEditing:T,onLocEditEnter:L,onEditBtnClick:F,share:N,selectAll:W,onCreateFloderBtnClick:X,onWalkBtnClick:te,showWalkButton:H,searchInCurrentDir:se,backToLastUseTo:Y,polling:re,onPollRefreshClick:ge}=qa(),{gridItems:Pe,sortMethodConv:xe,moreActionsDropdownShow:le,sortedFiles:Z,sortMethod:ie,itemSize:he,loadNextDir:$e,loadNextDirLoading:n,canLoadNext:u,onScroll:d,cellWidth:w,dirCoverCache:_}=ha(),{onDrop:M,onFileDragStart:A,onFileDragEnd:z}=_a(),{onFileItemClick:q,onContextMenuClick:ke,showGenInfo:ae,imageGenInfo:Qe,q:yt}=Sa({openNext:I}),{previewIdx:ye,onPreviewVisibleChange:bt,previewing:Ae,previewImgMove:Ke,canPreview:Je}=Ia(),{showMenuIdx:Re}=ka(),{onClearAllSelected:Ct,onReverseSelect:wt,onSelectAll:_t}=ya(),{getGenDiff:St,changeIndchecked:ue,seedChangeChecked:be,getRawGenParams:It,getGenDiffWatchDep:Pt}=Ma();return je(()=>t,()=>{c.value=t;const v=kt.get(t.stackKey??"");v&&(P.value=v.slice())},{immediate:!0}),(v,a)=>{const xt=ia,$t=ua,At=ft,Rt=ca,Mt=me,Dt=oe,Xe=da,Me=pa,Ye=Te,De=gt,Ft=vt,Ce=ma,Ze=va,Ot=J,Lt=fe;return R(),G(Lt,{spinning:e(x),size:"large"},{default:h(()=>[i(Pa,{show:e(r).keepMultiSelect||!!e(y).length,onClearAllSelected:e(Ct),onSelectAll:e(_t),onReverseSelect:e(wt)},null,8,["show","onClearAllSelected","onSelectAll","onReverseSelect"]),i(xt,{style:{display:"none"}}),g("div",{ref_key:"stackViewEl",ref:p,onDragover:a[31]||(a[31]=k(()=>{},["prevent"])),onDrop:a[32]||(a[32]=k(l=>e(M)(l),["prevent"])),class:"container"},[i(At,{visible:e(ae),"onUpdate:visible":a[1]||(a[1]=l=>Q(ae)?ae.value=l:null),width:"70vw","mask-closable":"",onOk:a[2]||(a[2]=l=>ae.value=!1)},{cancelText:h(()=>[]),default:h(()=>[i($t,{active:"",loading:!e(yt).isIdle},{default:h(()=>[g("div",{style:{width:"100%","word-break":"break-all","white-space":"pre-line","max-height":"70vh",overflow:"auto","z-index":"9999"},onDblclick:a[0]||(a[0]=l=>e(Ve)(e(Qe)))},[g("div",Xa,C(v.$t("doubleClickToCopy")),1),ee(" "+C(e(Qe)),1)],32)]),_:1},8,["loading"])]),_:1},8,["visible"]),g("div",Ya,[g("div",{class:"breadcrumb",style:ea({flex:e(T)?1:""})},[e(T)?(R(),G(Rt,{key:0,style:{flex:"1"},value:e(E),"onUpdate:value":a[3]||(a[3]=l=>Q(E)?E.value=l:null),onClick:a[4]||(a[4]=k(()=>{},["stop"])),onKeydown:a[5]||(a[5]=k(()=>{},["stop"])),onPressEnter:e(L),"allow-clear":""},null,8,["value","onPressEnter"])):(R(),G(Dt,{key:1,style:{flex:"1"}},{default:h(()=>[(R(!0),j(Ue,null,st(e(P),(l,ne)=>(R(),G(Mt,{key:ne},{default:h(()=>[g("a",{onClick:k(et=>e($)(ne),["prevent"])},C(l.curr==="/"?v.$t("root"):l.curr.replace(/:\/$/,v.$t("drive"))),9,Za)]),_:2},1024))),128))]),_:1})),e(T)?(R(),G(Xe,{key:2,size:"small",onClick:e(L),type:"primary"},{default:h(()=>[ee(C(v.$t("go")),1)]),_:1},8,["onClick"])):(R(),j("div",en,[v.mode==="scanned-fixed"?(R(),j("a",{key:0,onClick:a[6]||(a[6]=k((...l)=>e(Y)&&e(Y)(...l),["prevent"])),style:{margin:"0 8px 16px 0"}},[i(e(ja))])):K("",!0),g("a",{onClick:a[7]||(a[7]=k((...l)=>e(m)&&e(m)(...l),["prevent"])),class:"copy"},C(v.$t("copy")),1),g("a",{onClick:a[8]||(a[8]=k((...l)=>e(F)&&e(F)(...l),["prevent","stop"]))},C(v.$t("edit")),1)]))],4),g("div",tn,[g("a",{class:"opt",onClick:a[9]||(a[9]=k((...l)=>e(b)&&e(b)(...l),["prevent"]))},C(v.$t("refresh")),1),g("a",{class:"opt",onClick:a[10]||(a[10]=k((...l)=>e(ge)&&e(ge)(...l),["prevent"]))},C(e(re)?v.$t("stopPollRefresh"):v.$t("pollRefresh")),1),i(De,null,{overlay:h(()=>[i(Ye,null,{default:h(()=>[i(Me,{key:"tag-search"},{default:h(()=>[g("a",{onClick:a[12]||(a[12]=k(l=>e(se)("tag-search"),["prevent"]))},C(v.$t("imgSearch")),1)]),_:1}),i(Me,{key:"tag-search"},{default:h(()=>[g("a",{onClick:a[13]||(a[13]=k(l=>e(se)("fuzzy-search"),["prevent"]))},C(v.$t("fuzzy-search")),1)]),_:1})]),_:1})]),default:h(()=>[g("a",{class:"opt",onClick:a[11]||(a[11]=k(()=>{},["prevent"]))},[ee(C(v.$t("search"))+" ",1),i(e(Ee))])]),_:1}),e(H)?(R(),j("a",{key:0,class:"opt",onClick:a[14]||(a[14]=k((...l)=>e(te)&&e(te)(...l),["prevent"]))}," Walk ")):K("",!0),g("a",{class:"opt",onClick:a[15]||(a[15]=k((...l)=>e(W)&&e(W)(...l),["prevent","stop"]))},C(v.$t("selectAll")),1),e(ta)?K("",!0):(R(),j("a",{key:1,class:"opt",onClick:a[16]||(a[16]=k((...l)=>e(N)&&e(N)(...l),["prevent"]))},C(v.$t("share")),1)),i(De,null,{overlay:h(()=>[i(Ye,null,{default:h(()=>[(R(!0),j(Ue,null,st(e(r).quickMovePaths,l=>(R(),G(Me,{key:l.dir},{default:h(()=>[g("a",{onClick:k(ne=>e(O)(l.dir),["prevent"])},C(l.zh),9,an)]),_:2},1024))),128))]),_:1})]),default:h(()=>[g("a",{class:"opt",onClick:a[17]||(a[17]=k(()=>{},["prevent"]))},[ee(C(v.$t("quickMove"))+" ",1),i(e(Ee))])]),_:1}),i(De,{trigger:["click"],visible:e(le),"onUpdate:visible":a[27]||(a[27]=l=>Q(le)?le.value=l:null),placement:"bottomLeft",getPopupContainer:l=>l.parentNode},{overlay:h(()=>[g("div",nn,[i(Ot,aa(na({labelCol:{span:10},wrapperCol:{span:14}})),{default:h(()=>[i(Ce,{label:v.$t("gridCellWidth")},{default:h(()=>[i(Ft,{modelValue:e(w),"onUpdate:modelValue":a[19]||(a[19]=l=>Q(w)?w.value=l:null),max:1024,min:64,step:16},null,8,["modelValue"])]),_:1},8,["label"]),i(Ce,{label:v.$t("sortingMethod")},{default:h(()=>[i(e(oa),{value:e(ie),"onUpdate:value":a[20]||(a[20]=l=>Q(ie)?ie.value=l:null),onClick:a[21]||(a[21]=k(()=>{},["stop"])),conv:e(xe),options:e(sa)},null,8,["value","conv","options"])]),_:1},8,["label"]),i(Ce,{label:v.$t("showChangeIndicators")},{default:h(()=>[i(Ze,{checked:e(ue),"onUpdate:checked":a[22]||(a[22]=l=>Q(ue)?ue.value=l:null),onClick:e(It)},null,8,["checked","onClick"])]),_:1},8,["label"]),i(Ce,{label:v.$t("seedAsChange")},{default:h(()=>[i(Ze,{checked:e(be),"onUpdate:checked":a[23]||(a[23]=l=>Q(be)?be.value=l:null),disabled:!e(ue)},null,8,["checked","disabled"])]),_:1},8,["label"]),g("div",on,[g("a",{onClick:a[24]||(a[24]=k((...l)=>e(U)&&e(U)(...l),["prevent"]))},C(v.$t("addToSearchScanPathAndQuickMove")),1)]),g("div",sn,[g("a",{onClick:a[25]||(a[25]=k(l=>e(ra)(e(D)+"/"),["prevent"]))},C(v.$t("openWithLocalFileBrowser")),1)]),g("div",rn,[g("a",{onClick:a[26]||(a[26]=k((...l)=>e(X)&&e(X)(...l),["prevent"]))},C(v.$t("createFolder")),1)])]),_:1},16)])]),default:h(()=>[g("a",{class:"opt",onClick:a[18]||(a[18]=k(()=>{},["prevent"]))},C(v.$t("more")),1)]),_:1},8,["visible","getPopupContainer"])])]),e(f)?(R(),j("div",ln,[i(e(ba),{class:"file-list",items:e(Z),ref_key:"scroller",ref:s,onScroll:e(d),"item-size":e(he).first,"key-field":"fullpath","item-secondary-size":e(he).second,gridItems:e(Pe)},{default:h(({item:l,index:ne})=>[i(Ca,{idx:parseInt(ne),file:l,"full-screen-preview-image-url":e(Z)[e(ye)]?e(la)(e(Z)[e(ye)]):"","show-menu-idx":e(Re),"onUpdate:showMenuIdx":a[28]||(a[28]=et=>Q(Re)?Re.value=et:null),selected:e(y).includes(ne),"cell-width":e(w),onFileItemClick:e(q),onDragstart:e(A),onDragend:e(z),onPreviewVisibleChange:e(bt),onContextMenuClick:e(ke),"is-selected-mutil-files":e(y).length>1,"enable-change-indicator":e(ue),"seed-change-checked":e(be),"get-gen-diff":e(St),"get-gen-diff-watch-dep":e(Pt),previewing:e(Ae),"cover-files":e(_).get(l.fullpath)},null,8,["idx","file","full-screen-preview-image-url","show-menu-idx","selected","cell-width","onFileItemClick","onDragstart","onDragend","onPreviewVisibleChange","onContextMenuClick","is-selected-mutil-files","enable-change-indicator","seed-change-checked","get-gen-diff","get-gen-diff-watch-dep","previewing","cover-files"])]),after:h(()=>[g("div",un,[t.mode==="walk"?(R(),G(Xe,{key:0,onClick:e($e),loading:e(n),block:"",type:"primary",disabled:!e(u),ghost:""},{default:h(()=>[ee(C(v.$t("loadNextPage")),1)]),_:1},8,["onClick","loading","disabled"])):K("",!0)])]),_:1},8,["items","onScroll","item-size","item-secondary-size","gridItems"]),e(Ae)?(R(),j("div",cn,[i(e(xa),{onClick:a[29]||(a[29]=l=>e(Ke)("prev")),class:rt({disable:!e(Je)("prev")})},null,8,["class"]),i(e($a),{onClick:a[30]||(a[30]=l=>e(Ke)("next")),class:rt({disable:!e(Je)("next")})},null,8,["class"])])):K("",!0)])):K("",!0)],544),e(Ae)?(R(),G(Aa,{key:0,file:e(Z)[e(ye)],idx:e(ye),onContextMenuClick:e(ke)},null,8,["file","idx","onContextMenuClick"])):K("",!0),i(Ja,{"file-num":e(Z).length,"selected-file-num":e(y).length},null,8,["file-num","selected-file-num"])]),_:1},8,["spinning"])}}});const $n=mt(dn,[["__scopeId","data-v-bd9da014"]]);export{$n as default};
