import{r as o,_ as V,R as n,b as i,c as z,P as e,a3 as J,f as K}from"./index-DJG7jQqG.js";import{u as Q,G as U,H as W}from"./DefaultLayout-AuR2vbVw.js";import{g as X,e as Y}from"./getRTLPlacement-AeiAwwuu.js";var T=o.forwardRef(function(t,C){var L=t.children,p=t.animation,S=p===void 0?!0:p,H=t.className,M=t.container,O=t.content,d=t.delay,c=d===void 0?0:d,m=t.fallbackPlacements,x=m===void 0?["top","right","bottom","left"]:m,v=t.offset,F=v===void 0?[0,8]:v,y=t.onHide,b=t.onShow,h=t.placement,q=h===void 0?"top":h,_=t.title,g=t.trigger,a=g===void 0?"click":g,u=t.visible,j=V(t,["children","animation","className","container","content","delay","fallbackPlacements","offset","onHide","onShow","placement","title","trigger","visible"]),r=o.useRef(null),l=o.useRef(null),A=Q(C,r),P=o.useRef("popover".concat(Math.floor(Math.random()*1e6))),w=U(),B=w.initPopper,k=w.destroyPopper,R=o.useState(!1),D=R[0],E=R[1],N=o.useState(u),f=N[0],s=N[1],G=typeof c=="number"?{show:c,hide:c}:c,I={modifiers:[{name:"arrow",options:{element:".popover-arrow"}},{name:"flip",options:{fallbackPlacements:x}},{name:"offset",options:{offset:F}}],placement:X(q,l.current)};return o.useEffect(function(){s(u)},[u]),o.useEffect(function(){return f&&(E(!0),r.current&&(r.current.classList.remove("fade","show"),k()),setTimeout(function(){l.current&&r.current&&(S&&r.current.classList.add("fade"),B(l.current,r.current,I),r.current.style.removeProperty("display"),r.current.classList.add("show"),b&&b())},G.show)),function(){r.current&&(r.current.classList.remove("show"),y&&y(),Y(function(){r.current&&(r.current.style.display="none"),k(),E(!1)},r.current))}},[f]),n.createElement(n.Fragment,null,n.cloneElement(L,i(i(i(i(i({},f&&{"aria-describedby":P.current}),{ref:l}),(a==="click"||a.includes("click"))&&{onClick:function(){return s(!f)}}),(a==="focus"||a.includes("focus"))&&{onFocus:function(){return s(!0)},onBlur:function(){return s(!1)}}),(a==="hover"||a.includes("hover"))&&{onMouseEnter:function(){return s(!0)},onMouseLeave:function(){return s(!1)}})),n.createElement(W,{container:M,portal:!0},D&&n.createElement("div",i({className:z("popover","bs-popover-auto",H),id:P.current,ref:A,role:"tooltip",style:{display:"none"}},j),n.createElement("div",{className:"popover-arrow"}),n.createElement("div",{className:"popover-header"},_),n.createElement("div",{className:"popover-body"},O))))});T.propTypes={animation:e.bool,children:e.node,className:e.string,container:e.any,content:e.oneOfType([e.string,e.node]),delay:e.oneOfType([e.number,e.shape({show:e.number.isRequired,hide:e.number.isRequired})]),fallbackPlacements:J,offset:e.any,onHide:e.func,onShow:e.func,placement:e.oneOf(["auto","top","right","bottom","left"]),title:e.oneOfType([e.string,e.node]),trigger:K,visible:e.bool};T.displayName="CPopover";export{T as C};