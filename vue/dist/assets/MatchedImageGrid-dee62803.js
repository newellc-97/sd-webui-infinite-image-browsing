import{d as ce,m as F,ax as re,$ as pe,S as p,T as I,c as l,a2 as e,a1 as n,a4 as R,U as d,J as me,W as o,V as u,a0 as V,ad as ue,Y as _,ae as z,ag as ge,R as fe,ai as G,aN as ve,aO as he,bz as Ie,Z as _e}from"./index-b4b95ab0.js";import{S as ke}from"./index-9f916fee.js";import{L as Ce,R as we,f as Se,_ as be}from"./MultiSelectKeep-45694de9.js";import{c as xe,d as ye,F as Me}from"./FileItem-97e4c1b8.js";import{c as Ae,u as Te}from"./hook-455dea86.js";import{a as $e}from"./functionalCallableComp-b6f8c4d2.js";import"./shortcut-7319839f.js";import"./Checkbox-125bf371.js";/* empty css              */import"./index-f9c4a42f.js";import"./index-ae4abcd1.js";import"./_isIterateeCall-b2266fc9.js";import"./useGenInfoDiff-ea53e857.js";const De=c=>(ve("data-v-caebce58"),c=c(),he(),c),Fe={class:"hint"},Re={class:"action-bar"},Ve=De(()=>d("div",{style:{padding:"16px 0 512px"}},null,-1)),ze={key:1},Ge={class:"no-res-hint"},Be={class:"hint"},Ne={key:2,class:"preview-switch"},Ue=ce({__name:"MatchedImageGrid",props:{tabIdx:{},paneIdx:{},selectedTagIds:{},id:{}},setup(c){const g=c,f=Ae(t=>Ie(g.selectedTagIds,t)),{queue:B,images:i,onContextMenuClickU:k,stackViewEl:N,previewIdx:r,previewing:C,onPreviewVisibleChange:U,previewImgMove:w,canPreview:S,itemSize:b,gridItems:J,showGenInfo:m,imageGenInfo:x,q:E,multiSelectedIdxs:v,onFileItemClick:L,scroller:y,showMenuIdx:h,onFileDragStart:O,onFileDragEnd:P,cellWidth:W,onScroll:M,saveAllFileAsJson:q,props:K,saveLoadedFileAsJson:Q,changeIndchecked:Y,seedChangeChecked:Z,getGenDiff:j,getGenDiffWatchDep:H}=Te(f);F(()=>g.selectedTagIds,async()=>{var t;await f.reset(),await re(),(t=y.value)==null||t.scrollToItem(0),M()},{immediate:!0}),F(()=>g,async t=>{K.value=t},{deep:!0,immediate:!0});const X=pe(),{onClearAllSelected:ee,onSelectAll:te,onReverseSelect:se}=xe();return(t,s)=>{const le=be,ne=ge,ae=fe,A=G,ie=G,oe=ke;return p(),I("div",{class:"container",ref_key:"stackViewEl",ref:N},[l(le,{show:!!e(v).length||e(X).keepMultiSelect,onClearAllSelected:e(ee),onSelectAll:e(te),onReverseSelect:e(se)},null,8,["show","onClearAllSelected","onSelectAll","onReverseSelect"]),l(oe,{size:"large",spinning:!e(B).isIdle},{default:n(()=>{var T,$;return[l(ae,{visible:e(m),"onUpdate:visible":s[1]||(s[1]=a=>R(m)?m.value=a:null),width:"70vw","mask-closable":"",onOk:s[2]||(s[2]=a=>m.value=!1)},{cancelText:n(()=>[]),default:n(()=>[l(ne,{active:"",loading:!e(E).isIdle},{default:n(()=>[d("div",{style:{width:"100%","word-break":"break-all","white-space":"pre-line","max-height":"70vh",overflow:"auto"},onDblclick:s[0]||(s[0]=a=>e(me)(e(x)))},[d("div",Fe,o(t.$t("doubleClickToCopy")),1),u(" "+o(e(x)),1)],32)]),_:1},8,["loading"])]),_:1},8,["visible"]),d("div",Re,[l(A,{onClick:e(Q)},{default:n(()=>[u(o(t.$t("saveLoadedImageAsJson")),1)]),_:1},8,["onClick"]),l(A,{onClick:e(q)},{default:n(()=>[u(o(t.$t("saveAllAsJson")),1)]),_:1},8,["onClick"])]),(T=e(i))!=null&&T.length?(p(),V(e(ye),{key:0,ref_key:"scroller",ref:y,class:"file-list",items:e(i),"item-size":e(b).first,"key-field":"fullpath","item-secondary-size":e(b).second,gridItems:e(J),onScroll:e(M)},{after:n(()=>[Ve]),default:n(({item:a,index:D})=>[l(Me,{idx:D,file:a,"cell-width":e(W),"show-menu-idx":e(h),"onUpdate:showMenuIdx":s[3]||(s[3]=de=>R(h)?h.value=de:null),onDragstart:e(O),onDragend:e(P),onFileItemClick:e(L),"full-screen-preview-image-url":e(i)[e(r)]?e(ue)(e(i)[e(r)]):"",selected:e(v).includes(D),onContextMenuClick:e(k),onPreviewVisibleChange:e(U),"is-selected-mutil-files":e(v).length>1,"enable-change-indicator":e(Y),"seed-change-checked":e(Z),"get-gen-diff":e(j),"get-gen-diff-watch-dep":e(H)},null,8,["idx","file","cell-width","show-menu-idx","onDragstart","onDragend","onFileItemClick","full-screen-preview-image-url","selected","onContextMenuClick","onPreviewVisibleChange","is-selected-mutil-files","enable-change-indicator","seed-change-checked","get-gen-diff","get-gen-diff-watch-dep"])]),_:1},8,["items","item-size","item-secondary-size","gridItems","onScroll"])):e(f).load&&t.selectedTagIds.and_tags.length===1&&!(($=t.selectedTagIds.folder_paths_str)!=null&&$.trim())?(p(),I("div",ze,[d("div",Ge,[d("p",Be,o(t.$t("tagSearchNoResultsMessage")),1),l(ie,{onClick:s[4]||(s[4]=a=>e($e)()),type:"primary"},{default:n(()=>[u(o(t.$t("rebuildImageIndex")),1)]),_:1})])])):_("",!0),e(C)?(p(),I("div",Ne,[l(e(Ce),{onClick:s[5]||(s[5]=a=>e(w)("prev")),class:z({disable:!e(S)("prev")})},null,8,["class"]),l(e(we),{onClick:s[6]||(s[6]=a=>e(w)("next")),class:z({disable:!e(S)("next")})},null,8,["class"])])):_("",!0)]}),_:1},8,["spinning"]),e(C)&&e(i)&&e(i)[e(r)]?(p(),V(Se,{key:0,file:e(i)[e(r)],idx:e(r),onContextMenuClick:e(k)},null,8,["file","idx","onContextMenuClick"])):_("",!0)],512)}}});const Xe=_e(Ue,[["__scopeId","data-v-caebce58"]]);export{Xe as default};
