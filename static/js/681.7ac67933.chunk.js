"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[681],{3908:function(t,n,e){e.d(n,{wi:function(){return o},WS:function(){return l},MN:function(){return p},NU:function(){return d},on:function(){return m},J_:function(){return x},QI:function(){return b}});var r=e(5861),s=e(7757),a=e.n(s),c=e(4569),i=e.n(c);function o(t){return u.apply(this,arguments)}function u(){return(u=(0,r.Z)(a().mark((function t(n){var e;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i().get("/3/network/".concat(n)).then((function(t){return t.data})).catch((function(t){throw t}));case 2:return e=t.sent,t.abrupt("return",e);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function l(t,n){return f.apply(this,arguments)}function f(){return(f=(0,r.Z)(a().mark((function t(n,e){var r;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=i().get("/3/discover/tv?&with_networks=".concat(n,"&page=").concat(e)).then((function(t){return t.data.results})).catch((function(t){throw t})),t.abrupt("return",r);case 2:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function p(t){return h.apply(this,arguments)}function h(){return(h=(0,r.Z)(a().mark((function t(n){var e;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=i().get("/3/tv/".concat(n)).then((function(t){return t.data})).catch((function(t){throw t})),t.abrupt("return",e);case 2:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function d(t,n){return v.apply(this,arguments)}function v(){return(v=(0,r.Z)(a().mark((function t(n,e){var r;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=i().get("/3/tv/".concat(n,"/season/").concat(e)).then((function(t){return t.data})).catch((function(t){throw t})),t.abrupt("return",r);case 2:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function m(){return g.apply(this,arguments)}function g(){return(g=(0,r.Z)(a().mark((function t(){var n;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=i().get("/3/tv/top_rated").then((function(t){return t.data.results})).catch((function(t){throw t})),t.abrupt("return",n);case 2:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function x(){return A.apply(this,arguments)}function A(){return(A=(0,r.Z)(a().mark((function t(){var n;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=i().get("/3/tv/popular").then((function(t){return t.data.results})).catch((function(t){throw t})),t.abrupt("return",n);case 2:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function b(){return w.apply(this,arguments)}function w(){return(w=(0,r.Z)(a().mark((function t(){var n;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=i().get("/3/discover/movie?&sort_by=popularity.desc&with_genres=35").then((function(t){return t.data.results})).catch((function(t){throw t})),t.abrupt("return",n);case 2:case"end":return t.stop()}}),t)})))).apply(this,arguments)}i().defaults.baseURL="https://api.themoviedb.org",i().defaults.params={api_key:"b30723d90054545e6fdab6d6887d20fb",language:"en-US"}},2153:function(t,n,e){e.d(n,{Z:function(){return c}});var r=e(9271),s="GoBackButton_button__A0mq5",a=e(184),c=function(){var t=(0,r.k6)();return(0,a.jsx)("button",{type:"button",className:s,onClick:function(){t.goBack()},children:"Go back"})}},9628:function(t,n,e){e.d(n,{Z:function(){return l}});var r=e(1523),s="Navigation_nav__MsE7Z",a="Navigation_link__Jlf0e",c="Navigation_activeClass__Huhkg",i="Navigation_user__HhVvo",o=e(9177),u=e(184),l=function(){return(0,u.jsxs)("nav",{className:s,children:[(0,u.jsx)(r.OL,{exact:!0,to:"/",children:(0,u.jsx)("img",{src:o,alt:"logo",width:"80",height:"20"})}),(0,u.jsx)(r.OL,{className:a,activeClassName:c,to:"/streamingService",children:"Streaming Service"}),(0,u.jsx)(r.OL,{className:a,activeClassName:c,to:"/subscription",children:"Subscription"}),(0,u.jsx)("div",{className:i,children:(0,u.jsx)("p",{children:"U"})})]})}},4262:function(t,n,e){e.d(n,{Z:function(){return c}});var r="PaginationButtons_buttonsWrapper__9jFof",s="PaginationButtons_paginationBtn__Tjkae",a=e(184),c=function(t){var n=t.page,e=t.onLoadMore,c=t.onLoadPrev;return(0,a.jsx)("div",{className:r,children:(0,a.jsxs)("div",{children:[(0,a.jsx)("button",{className:s,onClick:c,disabled:n<=1,children:"Previous Page"}),(0,a.jsx)("button",{className:s,onClick:e,children:"Next Page"})]})})}},9920:function(t,n,e){e.d(n,{Z:function(){return p}});var r="ServiceInfo_serviceInfo__dkJhG",s="ServiceInfo_serviceInfoText__mvIbY",a="ServiceInfo_imageWrapper__KGSDL",c="ServiceInfo_img__uFiT2",i="ServiceInfo_sub__nTICO",o=e(9995),u=e(9271),l=e(7087),f=(e(9713),e(184)),p=function(t){var n=t.service,e=t.subscribe,p=(0,u.TH)().pathname.split("/")[1];return(0,f.jsxs)("div",{className:r,children:[(0,f.jsx)("div",{className:a,children:(0,f.jsx)(l.LazyLoadImage,{alt:n.name,effect:"blur",src:"https://image.tmdb.org/t/p/original/".concat(n.logo_path),onError:function(t){t.currentTarget.src=o},className:c})}),(0,f.jsxs)("div",{className:s,children:[(0,f.jsx)("p",{children:n.name}),(0,f.jsx)("p",{children:n.headquarters}),(0,f.jsx)("a",{href:n.homepage,children:"Home page"}),(0,f.jsx)("button",{type:"button",className:i,onClick:function(){return e(n.id)},hidden:"subscription"===p,children:"Subscribe"})]})]})}},2701:function(t,n,e){e.r(n),e.d(n,{default:function(){return w}});var r=e(8152),s=e(9628),a=e(2791),c=e(9271),i=e(3908),o=e(5264),u=e(940),l="SubscribeStrimingService_serials__OK8hd",f="SubscribeStrimingService_wrapper__LOUM6",p=e(4262),h=e(9920),d=e(1523),v={list:"SubscribeShowList_list__oKDJv",item:"SubscribeShowList_item__wOMTD",img:"SubscribeShowList_img__0IHpJ",showText:"SubscribeShowList_showText__77Lsl",title:"SubscribeShowList_title__3ATrl",vote:"SubscribeShowList_vote__53kUS",rate:"SubscribeShowList_rate__FX+Gv",overview:"SubscribeShowList_overview__SOtrU"},m=e(9995),g=e(7087),x=(e(9713),e(184)),A=function(t){var n=t.shows,e=t.serviceId,r=function(t){t.currentTarget.src=m};return(0,x.jsx)("ul",{className:v.list,children:n&&n.map((function(t){return(0,x.jsxs)("li",{className:v.item,children:[(0,x.jsx)("div",{className:v.image,children:(0,x.jsx)(g.LazyLoadImage,{alt:t.name,effect:"blur",src:"https://image.tmdb.org/t/p/original/".concat(t.poster_path),onError:r,className:v.img})}),(0,x.jsxs)("div",{className:v.showText,children:[(0,x.jsx)(d.rU,{to:"/subscription/".concat(e,"/").concat(t.id),className:v.title,children:t.original_name}),(0,x.jsx)("p",{className:v.overview,children:t.overview}),(0,x.jsxs)("div",{className:v.rate,children:[(0,x.jsxs)("p",{children:[" Rate: ",t.popularity]}),(0,x.jsxs)("p",{className:v.vote,children:["Vote: ",t.vote_average," (",t.vote_count," votes)"]})]})]})]},t.id)}))})},b=e(2153),w=function(){var t=(0,c.UO)().serviceId,n=(0,a.useState)({}),e=(0,r.Z)(n,2),d=e[0],v=e[1],m=(0,a.useState)([]),g=(0,r.Z)(m,2),w=g[0],U=g[1],V=(0,a.useState)(1),S=(0,r.Z)(V,2),k=S[0],N=S[1],_=d.name,j=(0,a.useContext)(u.J),C=j.networks,J=j.setNetworks;return(0,a.useEffect)((function(){t&&(0,i.wi)(t).then((function(t){return v(t)})),(0,i.WS)(t,k).then((function(t){return U(t)}))}),[t,k]),(0,x.jsxs)("div",{className:f,children:[(0,x.jsx)(s.Z,{}),(0,x.jsx)(b.Z,{}),(0,x.jsx)(h.Z,{service:d,subscribe:function(t){J(C,C.find((function(n){return n.id===t})).sub=!0),o.Notify.success("You subscribe to ".concat(_,"!"))}}),(0,x.jsxs)("div",{className:l,children:[(0,x.jsx)(A,{shows:w,serviceId:t}),(0,x.jsx)(p.Z,{page:k,onLoadMore:function(){N((function(t){return t+1}))},onLoadPrev:function(){N((function(t){return t-1}))}})]})]})}},9177:function(t){t.exports="data:image/png;base64,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"},9995:function(t,n,e){t.exports=e.p+"static/media/no-image-min.d54268585f778972bad9.png"}}]);
//# sourceMappingURL=681.7ac67933.chunk.js.map