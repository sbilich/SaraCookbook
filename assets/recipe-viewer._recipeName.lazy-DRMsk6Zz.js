import{r as A,j as o,f as R,b as I,d as $,e as T,k as z,a as G,B as S,t as xe,p as fe,v as ge,h as J,i as se,g as K,w as Ve,x as _e,U as qe,y as Se,z as Ce,m as De,q as Oe,T as ce,l as Ue}from"./index-DHLqRRCv.js";import{T as He}from"./tomato-soup-D62I_MkO.js";function je(t=null){const e=A.createContext(t);return[({children:r,value:a})=>o.jsx(e.Provider,{value:a,children:r}),()=>A.useContext(e)]}function Me({value:t,defaultValue:e,finalValue:s,onChange:i=()=>{}}){const[r,a]=A.useState(e!==void 0?e:s),c=(n,...d)=>{a(n),i==null||i(n,...d)};return t!==void 0?[t,i,!0]:[r,c,!1]}function Ie(t,e){return typeof t=="boolean"?t:e.autoContrast}const[Je,Q]=je({offsetBottom:!1,offsetTop:!1,describedBy:void 0,getStyles:null,inputId:void 0,labelId:void 0});var w={wrapper:"m_6c018570",input:"m_8fb7ebe7",section:"m_82577fc2",placeholder:"m_88bacfd0",root:"m_46b77525",label:"m_8fdc1311",required:"m_78a94662",error:"m_8f816625",description:"m_fe47ce59"};const ve={},Ke=T((t,{size:e})=>({description:{"--input-description-size":e===void 0?void 0:`calc(${z(e)} - ${G(2)})`}})),oe=R((t,e)=>{const s=I("InputDescription",ve,t),{classNames:i,className:r,style:a,styles:c,unstyled:n,vars:d,size:b,__staticSelector:p,__inheritStyles:y=!0,variant:u,...h}=I("InputDescription",ve,s),l=Q(),m=$({name:["InputWrapper",p],props:s,classes:w,className:r,style:a,classNames:i,styles:c,unstyled:n,rootSelector:"description",vars:d,varsResolver:Ke}),v=y&&(l==null?void 0:l.getStyles)||m;return o.jsx(S,{component:"p",ref:e,variant:u,size:b,...v("description",l!=null&&l.getStyles?{className:r,style:a}:void 0),...h})});oe.classes=w;oe.displayName="@mantine/core/InputDescription";const Qe={},Xe=T((t,{size:e})=>({error:{"--input-error-size":e===void 0?void 0:`calc(${z(e)} - ${G(2)})`}})),re=R((t,e)=>{const s=I("InputError",Qe,t),{classNames:i,className:r,style:a,styles:c,unstyled:n,vars:d,size:b,__staticSelector:p,__inheritStyles:y=!0,variant:u,...h}=s,l=$({name:["InputWrapper",p],props:s,classes:w,className:r,style:a,classNames:i,styles:c,unstyled:n,rootSelector:"error",vars:d,varsResolver:Xe}),m=Q(),v=y&&(m==null?void 0:m.getStyles)||l;return o.jsx(S,{component:"p",ref:e,variant:u,size:b,...v("error",m!=null&&m.getStyles?{className:r,style:a}:void 0),...h})});re.classes=w;re.displayName="@mantine/core/InputError";const be={labelElement:"label"},Ye=T((t,{size:e})=>({label:{"--input-label-size":z(e),"--input-asterisk-color":void 0}})),ne=R((t,e)=>{const s=I("InputLabel",be,t),{classNames:i,className:r,style:a,styles:c,unstyled:n,vars:d,labelElement:b,size:p,required:y,htmlFor:u,onMouseDown:h,children:l,__staticSelector:m,variant:v,mod:g,...x}=I("InputLabel",be,s),f=$({name:["InputWrapper",m],props:s,classes:w,className:r,style:a,classNames:i,styles:c,unstyled:n,rootSelector:"label",vars:d,varsResolver:Ye}),j=Q(),N=(j==null?void 0:j.getStyles)||f;return o.jsxs(S,{...N("label",j!=null&&j.getStyles?{className:r,style:a}:void 0),component:b,variant:v,size:p,ref:e,htmlFor:b==="label"?u:void 0,mod:[{required:y},g],onMouseDown:_=>{h==null||h(_),!_.defaultPrevented&&_.detail>1&&_.preventDefault()},...x,children:[l,y&&o.jsx("span",{...N("required"),"aria-hidden":!0,children:" *"})]})});ne.classes=w;ne.displayName="@mantine/core/InputLabel";const ye={},le=R((t,e)=>{const s=I("InputPlaceholder",ye,t),{classNames:i,className:r,style:a,styles:c,unstyled:n,vars:d,__staticSelector:b,variant:p,error:y,mod:u,...h}=I("InputPlaceholder",ye,s),l=$({name:["InputPlaceholder",b],props:s,classes:w,className:r,style:a,classNames:i,styles:c,unstyled:n,rootSelector:"placeholder"});return o.jsx(S,{...l("placeholder"),mod:[{error:!!y},u],component:"span",variant:p,ref:e,...h})});le.classes=w;le.displayName="@mantine/core/InputPlaceholder";function Ze(t,{hasDescription:e,hasError:s}){const i=t.findIndex(d=>d==="input"),r=t.slice(0,i),a=t.slice(i+1),c=e&&r.includes("description")||s&&r.includes("error");return{offsetBottom:e&&a.includes("description")||s&&a.includes("error"),offsetTop:c}}const et={labelElement:"label",inputContainer:t=>t,inputWrapperOrder:["label","description","input","error"]},tt=T((t,{size:e})=>({label:{"--input-label-size":z(e),"--input-asterisk-color":void 0},error:{"--input-error-size":e===void 0?void 0:`calc(${z(e)} - ${G(2)})`},description:{"--input-description-size":e===void 0?void 0:`calc(${z(e)} - ${G(2)})`}})),de=R((t,e)=>{const s=I("InputWrapper",et,t),{classNames:i,className:r,style:a,styles:c,unstyled:n,vars:d,size:b,variant:p,__staticSelector:y,inputContainer:u,inputWrapperOrder:h,label:l,error:m,description:v,labelProps:g,descriptionProps:x,errorProps:f,labelElement:j,children:N,withAsterisk:_,id:L,required:X,__stylesApiProps:E,mod:Y,...Z}=s,D=$({name:["InputWrapper",y],props:E||s,classes:w,className:r,style:a,classNames:i,styles:c,unstyled:n,vars:d,varsResolver:tt}),k={size:b,variant:p,__staticSelector:y},W=xe(L),M=typeof _=="boolean"?_:X,B=(f==null?void 0:f.id)||`${W}-error`,O=(x==null?void 0:x.id)||`${W}-description`,V=W,F=!!m&&typeof m!="boolean",C=!!v,q=`${F?B:""} ${C?O:""}`,U=q.trim().length>0?q.trim():void 0,ee=(g==null?void 0:g.id)||`${W}-label`,Be=l&&o.jsx(ne,{labelElement:j,id:ee,htmlFor:V,required:M,...k,...g,children:l},"label"),Le=C&&o.jsx(oe,{...x,...k,size:(x==null?void 0:x.size)||k.size,id:(x==null?void 0:x.id)||O,children:v},"description"),Ee=o.jsx(A.Fragment,{children:u(N)},"input"),Fe=F&&A.createElement(re,{...f,...k,size:(f==null?void 0:f.size)||k.size,key:"error",id:(f==null?void 0:f.id)||B},m),Ae=h.map(Ge=>{switch(Ge){case"label":return Be;case"input":return Ee;case"description":return Le;case"error":return Fe;default:return null}});return o.jsx(Je,{value:{getStyles:D,describedBy:U,inputId:V,labelId:ee,...Ze(h,{hasDescription:C,hasError:F})},children:o.jsx(S,{ref:e,variant:p,size:b,mod:[{error:!!m},Y],...D("root"),...Z,children:Ae})})});de.classes=w;de.displayName="@mantine/core/InputWrapper";const st={variant:"default",leftSectionPointerEvents:"none",rightSectionPointerEvents:"none",withAria:!0,withErrorStyles:!0},ot=T((t,e,s)=>({wrapper:{"--input-margin-top":s.offsetTop?"calc(var(--mantine-spacing-xs) / 2)":void 0,"--input-margin-bottom":s.offsetBottom?"calc(var(--mantine-spacing-xs) / 2)":void 0,"--input-height":J(e.size,"input-height"),"--input-fz":z(e.size),"--input-radius":e.radius===void 0?void 0:se(e.radius),"--input-left-section-width":e.leftSectionWidth!==void 0?G(e.leftSectionWidth):void 0,"--input-right-section-width":e.rightSectionWidth!==void 0?G(e.rightSectionWidth):void 0,"--input-padding-y":e.multiline?J(e.size,"input-padding-y"):void 0,"--input-left-section-pointer-events":e.leftSectionPointerEvents,"--input-right-section-pointer-events":e.rightSectionPointerEvents}})),P=fe((t,e)=>{const s=I("Input",st,t),{classNames:i,className:r,style:a,styles:c,unstyled:n,required:d,__staticSelector:b,__stylesApiProps:p,size:y,wrapperProps:u,error:h,disabled:l,leftSection:m,leftSectionProps:v,leftSectionWidth:g,rightSection:x,rightSectionProps:f,rightSectionWidth:j,rightSectionPointerEvents:N,leftSectionPointerEvents:_,variant:L,vars:X,pointer:E,multiline:Y,radius:Z,id:D,withAria:k,withErrorStyles:W,mod:M,inputSize:B,...O}=s,{styleProps:V,rest:F}=ge(O),C=Q(),q={offsetBottom:C==null?void 0:C.offsetBottom,offsetTop:C==null?void 0:C.offsetTop},U=$({name:["Input",b],props:p||s,classes:w,className:r,style:a,classNames:i,styles:c,unstyled:n,stylesCtx:q,rootSelector:"wrapper",vars:X,varsResolver:ot}),ee=k?{required:d,disabled:l,"aria-invalid":!!h,"aria-describedby":C==null?void 0:C.describedBy,id:(C==null?void 0:C.inputId)||D}:{};return o.jsxs(S,{...U("wrapper"),...V,...u,mod:[{error:!!h&&W,pointer:E,disabled:l,multiline:Y,"data-with-right-section":!!x,"data-with-left-section":!!m},M],variant:L,size:y,children:[m&&o.jsx("div",{...v,"data-position":"left",...U("section",{className:v==null?void 0:v.className,style:v==null?void 0:v.style}),children:m}),o.jsx(S,{component:"input",...F,...ee,ref:e,required:d,mod:{disabled:l,error:!!h&&W},variant:L,__size:B,...U("input")}),x&&o.jsx("div",{...f,"data-position":"right",...U("section",{className:f==null?void 0:f.className,style:f==null?void 0:f.style}),children:x})]})});P.classes=w;P.Wrapper=de;P.Label=ne;P.Error=re;P.Description=oe;P.Placeholder=le;P.displayName="@mantine/core/Input";var ke={root:"m_b6d8b162"};function rt(t){if(t==="start")return"start";if(t==="end"||t)return"end"}const nt={inherit:!1},it=T((t,{variant:e,lineClamp:s,gradient:i,size:r,color:a})=>({root:{"--text-fz":z(r),"--text-lh":_e(r),"--text-gradient":e==="gradient"?Ve(i,t):void 0,"--text-line-clamp":typeof s=="number"?s.toString():void 0,"--text-color":a?K(a,t):void 0}})),te=fe((t,e)=>{const s=I("Text",nt,t),{lineClamp:i,truncate:r,inline:a,inherit:c,gradient:n,span:d,__staticSelector:b,vars:p,className:y,style:u,classNames:h,styles:l,unstyled:m,variant:v,mod:g,size:x,...f}=s,j=$({name:["Text",b],props:s,classes:ke,className:y,style:u,classNames:h,styles:l,unstyled:m,vars:p,varsResolver:it});return o.jsx(S,{...j("root",{focusable:!0}),ref:e,component:d?"span":"p",variant:v,mod:[{"data-truncate":rt(r),"data-line-clamp":typeof i=="number","data-inline":a,"data-inherit":c},g],size:x,...f})});te.classes=ke;te.displayName="@mantine/core/Text";var Ne={root:"m_5f75b09e",body:"m_5f6e695e",labelWrapper:"m_d3ea56bb",label:"m_8ee546b8",description:"m_328f68c0",error:"m_8e8a99cc"};const at=Ne,$e=A.forwardRef(({__staticSelector:t,__stylesApiProps:e,className:s,classNames:i,styles:r,unstyled:a,children:c,label:n,description:d,id:b,disabled:p,error:y,size:u,labelPosition:h="left",bodyElement:l="div",labelElement:m="label",variant:v,style:g,vars:x,mod:f,...j},N)=>{const _=$({name:t,props:e,className:s,style:g,classes:Ne,classNames:i,styles:r,unstyled:a});return o.jsx(S,{..._("root"),ref:N,__vars:{"--label-fz":z(u),"--label-lh":J(u,"label-lh")},mod:[{"label-position":h},f],variant:v,size:u,...j,children:o.jsxs(S,{component:l,htmlFor:l==="label"?b:void 0,..._("body"),children:[c,o.jsxs("div",{..._("labelWrapper"),"data-disabled":p||void 0,children:[n&&o.jsx(S,{component:m,htmlFor:m==="label"?b:void 0,..._("label"),"data-disabled":p||void 0,children:n}),d&&o.jsx(P.Description,{size:u,__inheritStyles:!1,..._("description"),children:d}),y&&typeof y!="boolean"&&o.jsx(P.Error,{size:u,__inheritStyles:!1,..._("error"),children:y})]})]})})});$e.displayName="@mantine/core/InlineInput";const we=A.createContext(null),ct=we.Provider,Pe=()=>A.useContext(we),[lt,dt]=je();var Re={card:"m_26775b0a"};const pt={withBorder:!0},ut=T((t,{radius:e})=>({card:{"--card-radius":se(e)}})),pe=R((t,e)=>{const s=I("CheckboxCard",pt,t),{classNames:i,className:r,style:a,styles:c,unstyled:n,vars:d,checked:b,mod:p,withBorder:y,value:u,onClick:h,...l}=s,m=$({name:"CheckboxCard",classes:Re,props:s,className:r,style:a,classNames:i,styles:c,unstyled:n,vars:d,varsResolver:ut,rootSelector:"card"}),v=Pe(),g=typeof b=="boolean"?b:(v==null?void 0:v.value.includes(u||""))||!1;return o.jsx(lt,{value:{checked:g},children:o.jsx(qe,{ref:e,mod:[{"with-border":y,checked:g},p],...m("card"),...l,role:"checkbox","aria-checked":g,onClick:x=>{h==null||h(x),v==null||v.onChange(u||"")}})})});pe.displayName="@mantine/core/CheckboxCard";pe.classes=Re;function mt({children:t,role:e}){const s=Q();return s?o.jsx("div",{role:e,"aria-labelledby":s.labelId,"aria-describedby":s.describedBy,children:t}):o.jsx(o.Fragment,{children:t})}const ht={},ue=R((t,e)=>{const{value:s,defaultValue:i,onChange:r,size:a,wrapperProps:c,children:n,readOnly:d,...b}=I("CheckboxGroup",ht,t),[p,y]=Me({value:s,defaultValue:i,finalValue:[],onChange:r}),u=h=>{const l=typeof h=="string"?h:h.currentTarget.value;!d&&y(p.includes(l)?p.filter(m=>m!==l):[...p,l])};return o.jsx(ct,{value:{value:p,onChange:u,size:a},children:o.jsx(P.Wrapper,{size:a,ref:e,...c,...b,labelElement:"div",__staticSelector:"CheckboxGroup",children:o.jsx(mt,{role:"group",children:n})})})});ue.classes=P.Wrapper.classes;ue.displayName="@mantine/core/CheckboxGroup";function vt({size:t,style:e,...s}){const i=t!==void 0?{width:G(t),height:G(t),...e}:e;return o.jsx("svg",{viewBox:"0 0 10 7",fill:"none",xmlns:"http://www.w3.org/2000/svg",style:i,"aria-hidden":!0,...s,children:o.jsx("path",{d:"M4 4.586L1.707 2.293A1 1 0 1 0 .293 3.707l3 3a.997.997 0 0 0 1.414 0l5-5A1 1 0 1 0 8.293.293L4 4.586z",fill:"currentColor",fillRule:"evenodd",clipRule:"evenodd"})})}function ze({indeterminate:t,...e}){return t?o.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 32 6","aria-hidden":!0,...e,children:o.jsx("rect",{width:"32",height:"6",fill:"currentColor",rx:"3"})}):o.jsx(vt,{...e})}var Te={indicator:"m_5e5256ee",icon:"m_1b1c543a","indicator--outline":"m_76e20374"};const bt={icon:ze},yt=T((t,{radius:e,color:s,size:i,iconColor:r,variant:a,autoContrast:c})=>{const n=Se({color:s||t.primaryColor,theme:t}),d=n.isThemeColor&&n.shade===void 0?`var(--mantine-color-${n.color}-outline)`:n.color;return{indicator:{"--checkbox-size":J(i,"checkbox-size"),"--checkbox-radius":e===void 0?void 0:se(e),"--checkbox-color":a==="outline"?d:K(s,t),"--checkbox-icon-color":r?K(r,t):Ie(c,t)?Ce({color:s,theme:t,autoContrast:c}):void 0}}}),me=R((t,e)=>{const s=I("CheckboxIndicator",bt,t),{classNames:i,className:r,style:a,styles:c,unstyled:n,vars:d,icon:b,indeterminate:p,radius:y,color:u,iconColor:h,autoContrast:l,checked:m,mod:v,variant:g,disabled:x,...f}=s,j=b,N=$({name:"CheckboxIndicator",classes:Te,props:s,className:r,style:a,classNames:i,styles:c,unstyled:n,vars:d,varsResolver:yt,rootSelector:"indicator"}),_=dt(),L=typeof m=="boolean"||typeof p=="boolean"?m||p:(_==null?void 0:_.checked)||!1;return o.jsx(S,{ref:e,...N("indicator",{variant:g}),variant:g,mod:[{checked:L,disabled:x},v],...f,children:o.jsx(j,{indeterminate:p,...N("icon")})})});me.displayName="@mantine/core/CheckboxIndicator";me.classes=Te;var We={root:"m_bf2d988c",inner:"m_26062bec",input:"m_26063560",icon:"m_bf295423","input--outline":"m_215c4542"};const xt={labelPosition:"right",icon:ze},ft=T((t,{radius:e,color:s,size:i,iconColor:r,variant:a,autoContrast:c})=>{const n=Se({color:s||t.primaryColor,theme:t}),d=n.isThemeColor&&n.shade===void 0?`var(--mantine-color-${n.color}-outline)`:n.color;return{root:{"--checkbox-size":J(i,"checkbox-size"),"--checkbox-radius":e===void 0?void 0:se(e),"--checkbox-color":a==="outline"?d:K(s,t),"--checkbox-icon-color":r?K(r,t):Ie(c,t)?Ce({color:s,theme:t,autoContrast:c}):void 0}}}),H=R((t,e)=>{const s=I("Checkbox",xt,t),{classNames:i,className:r,style:a,styles:c,unstyled:n,vars:d,color:b,label:p,id:y,size:u,radius:h,wrapperProps:l,checked:m,labelPosition:v,description:g,error:x,disabled:f,variant:j,indeterminate:N,icon:_,rootRef:L,iconColor:X,onChange:E,autoContrast:Y,mod:Z,...D}=s,k=Pe(),W=u||(k==null?void 0:k.size),M=_,B=$({name:"Checkbox",props:s,classes:We,className:r,style:a,classNames:i,styles:c,unstyled:n,vars:d,varsResolver:ft}),{styleProps:O,rest:V}=ge(D),F=xe(y),C=k?{checked:k.value.includes(V.value),onChange:q=>{k.onChange(q),E==null||E(q)}}:{};return o.jsx($e,{...B("root"),__staticSelector:"Checkbox",__stylesApiProps:s,id:F,size:W,labelPosition:v,label:p,description:g,error:x,disabled:f,classNames:i,styles:c,unstyled:n,"data-checked":C.checked||m||void 0,variant:j,ref:L,mod:Z,...O,...l,children:o.jsxs(S,{...B("inner"),mod:{"data-label-position":v},children:[o.jsx(S,{component:"input",id:F,ref:e,checked:m,disabled:f,mod:{error:!!x,indeterminate:N},...B("input",{focusable:!0,variant:j}),onChange:E,...V,...C,type:"checkbox"}),o.jsx(M,{indeterminate:N,...B("icon")})]})})});H.classes={...We,...at};H.displayName="@mantine/core/Checkbox";H.Group=ue;H.Indicator=me;H.Card=pe;const[gt,_t]=De("List component was not found in tree");var he={root:"m_abbac491",item:"m_abb6bec2",itemWrapper:"m_75cd9f71",itemIcon:"m_60f83e5b"};const St={},ie=R((t,e)=>{const s=I("ListItem",St,t),{classNames:i,className:r,style:a,styles:c,vars:n,icon:d,children:b,mod:p,...y}=s,u=_t(),h=d||u.icon,l={classNames:i,styles:c};return o.jsx(S,{...u.getStyles("item",{...l,className:r,style:a}),component:"li",mod:[{"with-icon":!!h,centered:u.center},p],ref:e,...y,children:o.jsxs("div",{...u.getStyles("itemWrapper",l),children:[h&&o.jsx("span",{...u.getStyles("itemIcon",l),children:h}),o.jsx("span",{...u.getStyles("itemLabel",l),children:b})]})})});ie.classes=he;ie.displayName="@mantine/core/ListItem";const Ct={type:"unordered"},jt=T((t,{size:e,spacing:s})=>({root:{"--list-fz":z(e),"--list-lh":_e(e),"--list-spacing":Oe(s)}})),ae=R((t,e)=>{const s=I("List",Ct,t),{classNames:i,className:r,style:a,styles:c,unstyled:n,vars:d,children:b,type:p,withPadding:y,icon:u,spacing:h,center:l,listStyleType:m,mod:v,...g}=s,x=$({name:"List",classes:he,props:s,className:r,style:a,classNames:i,styles:c,unstyled:n,vars:d,varsResolver:jt});return o.jsx(gt,{value:{center:l,icon:u,getStyles:x},children:o.jsx(S,{...x("root",{style:{listStyleType:m}}),component:p==="unordered"?"ul":"ol",mod:[{"with-padding":y},v],ref:e,...g,children:b})})});ae.classes=he;ae.displayName="@mantine/core/List";ae.Item=ie;const It=(t,e)=>e<=1?t:`${t}s`,kt=({recipeName:t})=>{const e=He,{ingredients:s,description:i,baseServingSize:r,cuisine:a,instructions:c}=e;return o.jsxs(o.Fragment,{children:[o.jsx(ce,{order:2,children:t}),o.jsxs(S,{sx:{paddingTop:10},children:[o.jsxs(S,{sx:{display:"flex",gap:10},children:[o.jsxs(te,{children:[o.jsx("b",{children:"Serving Size:"})," ",r]}),"|",a.map(n=>o.jsx("i",{children:n}))]}),o.jsx(te,{sx:{paddingTop:10},children:i}),o.jsx(ce,{order:4,sx:{paddingTop:40,paddingBottom:10},children:"Ingredients"}),o.jsx(S,{sx:{display:"grid",gridTemplateColumns:"repeat(3, 1fr)",rowGap:5},children:s.map(({name:n,quantity:d,unit:b,notes:p,preparation:y})=>o.jsxs(o.Fragment,{children:[o.jsxs(S,{sx:{display:"flex",gap:10},children:[o.jsx(H,{}),n]}),o.jsxs("div",{children:[d," ",It(b,d)," ",y]}),o.jsx("div",{children:p})]}))}),o.jsx(ce,{order:4,sx:{paddingTop:40,paddingBottom:10},children:"Instructions"}),o.jsx(ae,{children:c.map(n=>o.jsx(ie,{children:n},n))})]})]})},Nt=Ue("/SaraCookbook/recipe-viewer/$recipeName")({component:$t});function $t(){const t=Nt.useParams();return o.jsx(kt,{recipeName:t.recipeName})}export{Nt as Route};
