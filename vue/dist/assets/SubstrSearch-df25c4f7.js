import{d as be,r as k,o as xe,c0 as Q,y as Ce,av as Ie,v as Re,x as $e,z as W,c1 as Ae,W as Me,N as c,O as I,c as t,Y as s,Z as e,Q as u,R as i,S as o,X as _,U as v,$ as X,c7 as ze,aa as F,a0 as Y,E as Fe,a9 as De,T as Ue,ad as Z,ae as Be,af as j,c4 as Ee,ac as Ve,aI as Te,aJ as He,c8 as Ke,c6 as Je,V as Le}from"./index-9dd45e76.js";import{S as Ne}from"./index-fc61699b.js";import"./index-25e130ff.js";import{c as Oe,d as qe,F as Ge}from"./FileItem-ef2bc8be.js";import{M as Pe,L as Qe,R as We,f as Xe}from"./MultiSelectKeep-5a53eabf.js";import{c as Ye,u as Ze}from"./hook-84e4f842.js";import{f as R,H as ee,_ as je,a as es}from"./searchHistory-401c3d34.js";import"./functionalCallableComp-869e128c.js";import"./index-1bda89ed.js";/* empty css              */import"./shortcut-91a43eea.js";import"./Checkbox-59729929.js";const ss="/infinite_image_browsing/fe-static/assets/regex-a447f877.svg",D=w=>(Te("data-v-89bc56e1"),w=w(),He(),w),ts={style:{"padding-right":"16px"}},ls=D(()=>u("div",null,null,-1)),as=["src"],ns={class:"search-bar"},os={class:"form-name"},is={class:"search-bar last actions"},rs={class:"hint"},us={key:0,style:{margin:"64px 16px 32px",padding:"8px",background:"var(--zp-secondary-variant-background)","border-radius":"16px"}},ds={style:{margin:"16px 32px 16px"}},cs={style:{"padding-right":"16px"}},ps=D(()=>u("div",null,null,-1)),vs=D(()=>u("div",{style:{padding:"16px 0 512px"}},null,-1)),fs={key:2,class:"preview-switch"},_s=be({__name:"SubstrSearch",props:{tabIdx:{},paneIdx:{},searchScope:{}},setup(w){const U=w,m=k(!1),g=k(""),h=k(U.searchScope??""),S=k(!1),B=k(0),$=Ye(l=>{const a={cursor:l,regexp:m.value?g.value:"",surstr:m.value?"":g.value,folder_paths:(h.value??"").split(/,|\n/).map(r=>r.trim()).filter(r=>r)};return Ke(a)}),{queue:y,images:p,onContextMenuClickU:E,stackViewEl:se,previewIdx:b,previewing:V,onPreviewVisibleChange:te,previewImgMove:T,canPreview:H,itemSize:K,gridItems:le,showGenInfo:x,imageGenInfo:J,q:ae,multiSelectedIdxs:A,onFileItemClick:ne,scroller:L,showMenuIdx:M,onFileDragStart:oe,onFileDragEnd:ie,cellWidth:re,onScroll:N,saveAllFileAsJson:ue,saveLoadedFileAsJson:de}=Ze($),d=k();xe(async()=>{d.value=await Q(),d.value.img_count&&d.value.expired&&await O(),U.searchScope&&await C()});const O=Ce(()=>y.pushAction(async()=>(await Je(),d.value=await Q(),d.value)).res),q=l=>{g.value=l.substr,h.value=l.folder_paths_str,m.value=l.isRegex,S.value=!1,C()},C=async()=>{B.value++,R.value.add({substr:g.value,folder_paths_str:h.value,isRegex:m.value}),await $.reset({refetch:!0}),await Ie(),N(),L.value.scrollToItem(0),p.value.length||Re.info($e("fuzzy-search-noResults"))};W("returnToIIB",async()=>{const l=await y.pushAction(Ae).res;d.value.expired=l.expired}),W("searchIndexExpired",()=>d.value&&(d.value.expired=!0));const ce=()=>{m.value=!m.value},pe=Me(),{onClearAllSelected:ve,onSelectAll:fe,onReverseSelect:_e}=Oe();return(l,a)=>{const r=je,f=es,me=Z,ge=Be,G=j,he=Ee,z=j,ye=Ve,ke=Z,we=Ne;return c(),I(Ue,null,[t(me,{visible:S.value,"onUpdate:visible":a[0]||(a[0]=n=>S.value=n),width:"70vw","mask-closable":"",onOk:a[1]||(a[1]=n=>S.value=!1)},{default:s(()=>[t(ee,{records:e(R),onReuseRecord:q},{default:s(({record:n})=>[u("div",ts,[t(f,null,{default:s(()=>[t(r,{span:4},{default:s(()=>[i(o(l.$t("historyRecordsSubstr"))+":",1)]),_:1}),t(r,{span:20},{default:s(()=>[i(o(n.substr),1)]),_:2},1024)]),_:2},1024),n.folder_paths_str?(c(),_(f,{key:0},{default:s(()=>[t(r,{span:4},{default:s(()=>[i(o(l.$t("searchScope"))+":",1)]),_:1}),t(r,{span:20},{default:s(()=>[i(o(n.folder_paths_str),1)]),_:2},1024)]),_:2},1024)):v("",!0),t(f,null,{default:s(()=>[t(r,{span:4},{default:s(()=>[i(o(l.$t("historyRecordsisRegex"))+":",1)]),_:1}),t(r,{span:20},{default:s(()=>[i(o(n.isRegex),1)]),_:2},1024)]),_:2},1024),t(f,null,{default:s(()=>[t(r,{span:4},{default:s(()=>[i(o(l.$t("time"))+":",1)]),_:1}),t(r,{span:20},{default:s(()=>[i(o(n.time),1)]),_:2},1024)]),_:2},1024),ls])]),_:1},8,["records"])]),_:1},8,["visible"]),u("div",{class:"container",ref_key:"stackViewEl",ref:se},[t(Pe,{show:!!e(A).length||e(pe).keepMultiSelect,onClearAllSelected:e(ve),onSelectAll:e(fe),onReverseSelect:e(_e)},null,8,["show","onClearAllSelected","onSelectAll","onReverseSelect"]),d.value?(c(),I("div",{key:0,class:"search-bar",onKeydown:a[4]||(a[4]=X(()=>{},["stop"]))},[t(ge,{value:g.value,"onUpdate:value":a[2]||(a[2]=n=>g.value=n),placeholder:l.$t("fuzzy-search-placeholder")+" "+l.$t("regexSearchEnabledHint"),disabled:!e(y).isIdle,onKeydown:ze(C,["enter"]),"allow-clear":""},null,8,["value","placeholder","disabled","onKeydown"]),u("div",{class:F(["regex-icon",{selected:m.value}]),onKeydown:a[3]||(a[3]=X(()=>{},["stop"])),onClick:ce,title:"Use Regular Expression"},[u("img",{src:e(ss)},null,8,as)],34),d.value.expired||!d.value.img_count?(c(),_(G,{key:0,onClick:e(O),loading:!e(y).isIdle,type:"primary"},{default:s(()=>[i(o(d.value.img_count===0?l.$t("generateIndexHint"):l.$t("UpdateIndex")),1)]),_:1},8,["onClick","loading"])):(c(),_(G,{key:1,type:"primary",onClick:C,loading:!e(y).isIdle||e($).loading,disabled:!g.value&&!h.value},{default:s(()=>[i(o(l.$t("search")),1)]),_:1},8,["loading","disabled"]))],32)):v("",!0),u("div",ns,[u("div",os,o(l.$t("searchScope")),1),t(he,{"auto-size":{maxRows:8},value:h.value,"onUpdate:value":a[5]||(a[5]=n=>h.value=n),placeholder:l.$t("specifiedSearchFolder")},null,8,["value","placeholder"])]),u("div",is,[e(p).length?(c(),_(z,{key:0,onClick:e(de)},{default:s(()=>[i(o(l.$t("saveLoadedImageAsJson")),1)]),_:1},8,["onClick"])):v("",!0),e(p).length?(c(),_(z,{key:1,onClick:e(ue)},{default:s(()=>[i(o(l.$t("saveAllAsJson")),1)]),_:1},8,["onClick"])):v("",!0),t(z,{onClick:a[6]||(a[6]=n=>S.value=!0)},{default:s(()=>[i(o(l.$t("history")),1)]),_:1})]),t(we,{size:"large",spinning:!e(y).isIdle},{default:s(()=>[t(ke,{visible:e(x),"onUpdate:visible":a[8]||(a[8]=n=>Y(x)?x.value=n:null),width:"70vw","mask-closable":"",onOk:a[9]||(a[9]=n=>x.value=!1)},{cancelText:s(()=>[]),default:s(()=>[t(ye,{active:"",loading:!e(ae).isIdle},{default:s(()=>[u("div",{style:{width:"100%","word-break":"break-all","white-space":"pre-line","max-height":"70vh",overflow:"auto"},onDblclick:a[7]||(a[7]=n=>e(Fe)(e(J)))},[u("div",rs,o(l.$t("doubleClickToCopy")),1),i(" "+o(e(J)),1)],32)]),_:1},8,["loading"])]),_:1},8,["visible"]),B.value===0&&!e(p).length&&e(R).getRecords().length?(c(),I("div",us,[u("h2",ds,o(l.$t("restoreFromHistory")),1),t(ee,{records:e(R),onReuseRecord:q},{default:s(({record:n})=>[u("div",cs,[t(f,null,{default:s(()=>[t(r,{span:4},{default:s(()=>[i(o(l.$t("historyRecordsSubstr"))+":",1)]),_:1}),t(r,{span:20},{default:s(()=>[i(o(n.substr),1)]),_:2},1024)]),_:2},1024),n.folder_paths_str?(c(),_(f,{key:0},{default:s(()=>[t(r,{span:4},{default:s(()=>[i(o(l.$t("searchScope"))+":",1)]),_:1}),t(r,{span:20},{default:s(()=>[i(o(n.folder_paths_str),1)]),_:2},1024)]),_:2},1024)):v("",!0),t(f,null,{default:s(()=>[t(r,{span:4},{default:s(()=>[i(o(l.$t("historyRecordsisRegex"))+":",1)]),_:1}),t(r,{span:20},{default:s(()=>[i(o(n.isRegex),1)]),_:2},1024)]),_:2},1024),t(f,null,{default:s(()=>[t(r,{span:4},{default:s(()=>[i(o(l.$t("time"))+":",1)]),_:1}),t(r,{span:20},{default:s(()=>[i(o(n.time),1)]),_:2},1024)]),_:2},1024),ps])]),_:1},8,["records"])])):v("",!0),e(p)?(c(),_(e(qe),{key:1,ref_key:"scroller",ref:L,class:"file-list",items:e(p),"item-size":e(K).first,"key-field":"fullpath","item-secondary-size":e(K).second,gridItems:e(le),onScroll:e(N)},{after:s(()=>[vs]),default:s(({item:n,index:P})=>[t(Ge,{idx:P,file:n,"show-menu-idx":e(M),"onUpdate:showMenuIdx":a[10]||(a[10]=Se=>Y(M)?M.value=Se:null),onFileItemClick:e(ne),"full-screen-preview-image-url":e(p)[e(b)]?e(De)(e(p)[e(b)]):"","cell-width":e(re),selected:e(A).includes(P),onContextMenuClick:e(E),onDragstart:e(oe),onDragend:e(ie),"is-selected-mutil-files":e(A).length>1,onPreviewVisibleChange:e(te)},null,8,["idx","file","show-menu-idx","onFileItemClick","full-screen-preview-image-url","cell-width","selected","onContextMenuClick","onDragstart","onDragend","is-selected-mutil-files","onPreviewVisibleChange"])]),_:1},8,["items","item-size","item-secondary-size","gridItems","onScroll"])):v("",!0),e(V)?(c(),I("div",fs,[t(e(Qe),{onClick:a[11]||(a[11]=n=>e(T)("prev")),class:F({disable:!e(H)("prev")})},null,8,["class"]),t(e(We),{onClick:a[12]||(a[12]=n=>e(T)("next")),class:F({disable:!e(H)("next")})},null,8,["class"])])):v("",!0)]),_:1},8,["spinning"]),e(V)&&e(p)&&e(p)[e(b)]?(c(),_(Xe,{key:1,file:e(p)[e(b)],idx:e(b),onContextMenuClick:e(E)},null,8,["file","idx","onContextMenuClick"])):v("",!0)],512)],64)}}});const $s=Le(_s,[["__scopeId","data-v-89bc56e1"]]);export{$s as default};
