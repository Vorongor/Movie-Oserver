"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[463],{572:function(r,e,t){t.d(e,{Hx:function(){return h},Y5:function(){return p},o1:function(){return u},wr:function(){return s},xc:function(){return v}});var n=t(861),a=t(757),c=t.n(a),o=t(243),i="79f2702b42ceb404ad51283cd44db6ad",s=function(){var r=(0,n.Z)(c().mark((function r(){var e;return c().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,o.Z.get("https://api.themoviedb.org/3/trending/movie/day",{params:{api_key:"".concat(i)}});case 3:return e=r.sent,r.abrupt("return",e.data.results);case 7:throw r.prev=7,r.t0=r.catch(0),console.error("Error fetching trending movies:",r.t0),r.t0;case 11:case"end":return r.stop()}}),r,null,[[0,7]])})));return function(){return r.apply(this,arguments)}}(),u=function(){var r=(0,n.Z)(c().mark((function r(e){var t;return c().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,o.Z.get("https://api.themoviedb.org/3/search/movie",{params:{api_key:"".concat(i),query:e}});case 3:return t=r.sent,r.abrupt("return",t.data.results);case 7:throw r.prev=7,r.t0=r.catch(0),console.error("Error searching movies:",r.t0),r.t0;case 11:case"end":return r.stop()}}),r,null,[[0,7]])})));return function(e){return r.apply(this,arguments)}}(),p=function(){var r=(0,n.Z)(c().mark((function r(e){var t;return c().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,o.Z.get("https://api.themoviedb.org/3/movie/".concat(e),{params:{api_key:i}});case 3:return t=r.sent,r.abrupt("return",t.data);case 7:throw r.prev=7,r.t0=r.catch(0),console.error("Error fetching movie details:",r.t0),r.t0;case 11:case"end":return r.stop()}}),r,null,[[0,7]])})));return function(e){return r.apply(this,arguments)}}(),v=function(){var r=(0,n.Z)(c().mark((function r(e){var t;return c().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,o.Z.get("https://api.themoviedb.org/3/movie/".concat(e,"/credits"),{params:{api_key:i}});case 3:return t=r.sent,r.abrupt("return",t.data);case 7:throw r.prev=7,r.t0=r.catch(0),console.error("Error fetching movie credits:",r.t0),r.t0;case 11:case"end":return r.stop()}}),r,null,[[0,7]])})));return function(e){return r.apply(this,arguments)}}(),h=function(){var r=(0,n.Z)(c().mark((function r(e){var t;return c().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,o.Z.get("https://api.themoviedb.org/3/movie/".concat(e,"/reviews"),{params:{api_key:i}});case 3:return t=r.sent,r.abrupt("return",t.data.results);case 7:throw r.prev=7,r.t0=r.catch(0),console.error("Error fetching movie reviews:",r.t0),r.t0;case 11:case"end":return r.stop()}}),r,null,[[0,7]])})));return function(e){return r.apply(this,arguments)}}()},567:function(r,e,t){t.r(e);var n=t(861),a=t(439),c=t(757),o=t.n(c),i=t(791),s=t(87),u=t(572),p=t(184);e.default=function(){var r=(0,i.useState)([]),e=(0,a.Z)(r,2),t=e[0],c=e[1];return(0,i.useEffect)((function(){var r=function(){var r=(0,n.Z)(o().mark((function r(){var e;return o().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,(0,u.wr)();case 3:e=r.sent,c(e),r.next=10;break;case 7:r.prev=7,r.t0=r.catch(0),console.error("Error fetching trending movies:",r.t0);case 10:case"end":return r.stop()}}),r,null,[[0,7]])})));return function(){return r.apply(this,arguments)}}();r()}),[]),(0,p.jsxs)("div",{children:[(0,p.jsx)("h2",{children:"Trending Movies Today"}),(0,p.jsx)("ul",{children:t.map((function(r){return(0,p.jsx)("li",{children:(0,p.jsx)(s.rU,{to:"/goit-react-hw-05-movies/movie?id=".concat(r.id),children:(0,p.jsx)("div",{children:(0,p.jsx)("p",{children:r.title})})})},r.id)}))})]})}}}]);
//# sourceMappingURL=463.fcaf1683.chunk.js.map