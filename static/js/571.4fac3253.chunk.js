"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[571],{9628:function(s,t,n){n.d(t,{Z:function(){return c}});var e=n(1523),a="Navigation_nav__MsE7Z",r="Navigation_link__Jlf0e",i="Navigation_activeClass__Huhkg",o="Navigation_user__HhVvo",l=n(9177),A=n(184),c=function(){return(0,A.jsxs)("nav",{className:a,children:[(0,A.jsx)(e.OL,{exact:!0,to:"/",children:(0,A.jsx)("img",{src:l,alt:"logo",width:"80",height:"20"})}),(0,A.jsx)(e.OL,{className:r,activeClassName:i,to:"/streamingService",children:"Streaming Service"}),(0,A.jsx)(e.OL,{className:r,activeClassName:i,to:"/subscription",children:"Subscription"}),(0,A.jsx)("div",{className:o,children:(0,A.jsx)("p",{children:"U"})})]})}},1571:function(s,t,n){n.r(t),n.d(t,{default:function(){return u}});var e=n(9628),a="StreamingServicePage_wrapper__sS9Zr",r=n(2791),i=n(940),o=n(1523),l="NetworksList_list__gY4yP",A="NetworksList_item__Lh609",c="NetworksList_link__nBjPj",g="NetworksList_linkText__wPllP",m=n(9995),V=n(184),h=function(s){var t=s.networks,n=function(s){s.currentTarget.src=m};return(0,V.jsx)("ul",{className:l,children:t&&t.map((function(s){return(0,V.jsx)("li",{className:A,children:(0,V.jsxs)(o.rU,{to:"/streamingService/".concat(s.id),className:c,children:[(0,V.jsx)("p",{className:g,children:s.name}),(0,V.jsx)("img",{src:"https://image.tmdb.org/t/p/original/".concat(s.logo_path),alt:s.name,width:"50%",height:"50%",onError:n,loading:"lazy"})]})},s.id)}))})},u=function(){var s=(0,r.useContext)(i.J).networks;return(0,V.jsxs)(V.Fragment,{children:[(0,V.jsx)(e.Z,{}),(0,V.jsxs)("div",{className:a,children:[(0,V.jsx)("h2",{children:"Popular striming servises"}),(0,V.jsx)(h,{networks:s})]})]})}},9177:function(s){s.exports="data:image/png;base64,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"},9995:function(s,t,n){s.exports=n.p+"static/media/no-image-min.d54268585f778972bad9.png"}}]);
//# sourceMappingURL=571.4fac3253.chunk.js.map