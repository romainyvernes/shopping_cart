(this.webpackJsonpshopping_cart=this.webpackJsonpshopping_cart||[]).push([[0],{29:function(e,t,c){},31:function(e,t,c){},32:function(e,t,c){},42:function(e,t,c){},43:function(e,t,c){},44:function(e,t,c){},45:function(e,t,c){},46:function(e,t,c){},47:function(e,t,c){},48:function(e,t,c){},49:function(e,t,c){},50:function(e,t,c){"use strict";c.r(t);var n=c(1),r=c.n(n),a=c(23),s=c.n(a),i=c(4),o=(c(29),c(16)),j=c(13),l=c.n(j),d=c(18),h=c(11),b=(c(31),c(10)),u=c(3),m=(c(32),c(0)),p=function(){return Object(m.jsx)("div",{className:"sidebar",children:Object(m.jsxs)("ul",{children:[Object(m.jsx)("li",{children:Object(m.jsx)("h2",{children:Object(m.jsx)(i.c,{to:"/shop/all",activeClassName:"selected",children:"All releases"})})}),Object(m.jsx)("li",{children:Object(m.jsx)("h2",{children:Object(m.jsx)(i.c,{to:"/shop/movies",activeClassName:"selected",children:"Movies"})})}),Object(m.jsx)("li",{children:Object(m.jsx)("h2",{children:Object(m.jsx)(i.c,{to:"/shop/tv",activeClassName:"selected",children:"TV shows"})})})]})})},O=(c(42),function(e){var t=e.path,c=e.name;return Object(m.jsxs)("div",{className:"cover cover-header-bg",children:[Object(m.jsx)("p",{className:"caption cover-font",children:"BLU-RAY"}),Object(m.jsx)("img",{src:"https://image.tmdb.org/t/p/w300".concat(t),alt:"".concat(c," cover")})]})}),x=(c(43),function(e){var t=e.match.params.type,c=Object(n.useState)([]),r=Object(h.a)(c,2),a=r[0],s=r[1];return Object(n.useEffect)((function(){var c=e.movies.map((function(e){return e.type="movie",e})),n=e.shows.map((function(e){return e.type="tv",e}));switch(t){case"movies":s(c);break;case"tv":s(n);break;case"all":s(c.concat(n));break;default:throw new Error}}),[t,e.movies,e.shows]),Object(m.jsxs)("div",{className:"store",children:[Object(m.jsx)("aside",{children:Object(m.jsx)(p,{})}),Object(m.jsx)("section",{className:"items",children:Object(m.jsx)("ul",{children:a.map((function(e){if(e.poster_path)return Object(m.jsx)("li",{children:Object(m.jsxs)(i.b,{to:"/shop/".concat(e.type,"/").concat(e.id),children:[Object(m.jsx)(O,{path:e.poster_path,name:e.original_title||e.name}),Object(m.jsxs)("p",{className:"price",children:["$",e.price]})]})},e.id)}))})})]})}),f=(c(44),function(e){var t=e.count,c=e.itemId,n=e.decrementCount,r=e.handleCountChange,a=e.incrementCount;return Object(m.jsxs)("div",{className:"counter",children:[Object(m.jsx)("button",{name:"decrement",id:c,onClick:n,className:"button-bg primary-btn",children:"-"}),Object(m.jsx)("input",{type:"number",min:"0",max:"10",value:t,onChange:r}),Object(m.jsx)("button",{name:"increment button-bg",id:c,onClick:a,className:"button-bg primary-btn",children:"+"})]})}),v=(c(45),function(e){var t=e.cart,c=e.incrementCount,n=e.decrementCount,r=e.handleCountChange,a=e.deleteItemFromCart;return Object(m.jsx)("div",{className:"cart",children:t.length>0?Object(m.jsxs)("section",{className:"filled",children:[Object(m.jsx)("ul",{children:t.map((function(e,s){return Object(m.jsxs)("li",{className:"item",children:[Object(m.jsxs)("article",{children:[Object(m.jsx)("div",{className:"item-cover",children:Object(m.jsx)(i.b,{to:"/shop/".concat(e.type,"/").concat(e.id),children:Object(m.jsx)(O,{path:e.poster_path,name:e.original_title||e.name})})}),Object(m.jsxs)("div",{className:"purchase-info",children:[Object(m.jsxs)("p",{className:"price",children:["$",e.price]}),Object(m.jsxs)("div",{className:"counter-controls",children:[Object(m.jsx)(f,{itemId:e.id,count:e.count,incrementCount:c,decrementCount:n,handleCountChange:r}),Object(m.jsx)("button",{id:e.id,className:"delete button-bg primary-btn",onClick:a,children:"Delete"})]})]})]}),s!==t.length-1?Object(m.jsx)("hr",{}):null]},e.id)}))}),Object(m.jsxs)("article",{className:"checkout",children:[Object(m.jsxs)("p",{className:"subtotal",children:["Subtotal (",Object(m.jsx)("span",{children:t.reduce((function(e,t){return e+=t.count}),0)})," item(s)): $",Object(m.jsx)("span",{children:t.reduce((function(e,t){return e+=t.count*t.price,Math.round(100*e)/100}),0)})]}),Object(m.jsx)("button",{className:"checkout-btn button-bg primary-btn",onClick:function(){alert("Thank you for shopping with us!")},children:"Checkout"})]})]}):Object(m.jsx)("section",{className:"empty",children:Object(m.jsx)("p",{children:"Your cart is currently empty."})})})}),g=(c(46),function(e){var t=e.movies,c=e.shows,n=function(e){for(var t=[],c=0;c<e.length&&5!==t.length;c++)e[c].poster_path&&t.push(e[c]);return t};return Object(m.jsxs)("div",{className:"home",children:[Object(m.jsxs)("section",{className:"top-releases",children:[Object(m.jsx)(i.b,{to:"/shop/movies",children:Object(m.jsx)("h2",{className:"primary-background hovered-links",children:"Top movies"})}),Object(m.jsx)("ul",{className:"release-list",children:n(t).map((function(e){return Object(m.jsx)("li",{children:Object(m.jsx)(i.b,{to:"/shop/movie/".concat(e.id),children:Object(m.jsx)(O,{path:e.poster_path,name:e.original_title})})},e.id)}))})]}),Object(m.jsxs)("section",{className:"top-releases",children:[Object(m.jsx)(i.b,{to:"/shop/tv",children:Object(m.jsx)("h2",{className:"primary-background hovered-links",children:"Top TV shows"})}),Object(m.jsx)("ul",{className:"release-list",children:n(c).map((function(e){return Object(m.jsx)("li",{children:Object(m.jsx)(i.b,{to:"/shop/tv/".concat(e.id),children:Object(m.jsx)(O,{path:e.poster_path,name:e.name})})},e.id)}))})]})]})}),y=c(53),C=c(52),N=(c(47),function(e){var t=e.addToCart,c=e.cart,r=e.incrementCount,a=e.decrementCount,s=e.handleCountChange,i=e.movies,o=e.shows,j=e.match.params,b=j.type,u=j.id,p=Object(n.useState)({}),x=Object(h.a)(p,2),v=x[0],g=x[1],N=function(){var e=Object(d.a)(l.a.mark((function e(){var t,c;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"801f704ffebb5d5010aae65a474050c8",e.prev=1,e.next=4,fetch("https://api.themoviedb.org/3/".concat(b,"/").concat(u,"?api_key=").concat("801f704ffebb5d5010aae65a474050c8","&language=en-US"));case 4:return t=e.sent,e.next=7,t.json();case 7:c=e.sent,i.concat(o).map((function(e){return String(e.id)===u?c.price=e.price:null})),g(c),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(1),console.error(e.t0);case 15:case"end":return e.stop()}}),e,null,[[1,12]])})));return function(){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){N()}),[]),Object(m.jsx)("div",{className:"details",children:Object(m.jsxs)("section",{children:[Object(m.jsxs)("header",{className:"mobile",children:[Object(m.jsx)("h2",{children:v.original_title||v.name}),Object(m.jsxs)("p",{className:"info",children:[Object(m.jsx)("span",{children:v.genres?v.genres.map((function(e,t){return t>0?", "+e.name:e.name})):null}),Object(m.jsx)("span",{children:" | ".concat(v.runtime||v.episode_run_time," min")}),Object(m.jsxs)("span",{children:[v.release_date?" | ".concat(Object(y.a)(Object(C.a)(v.release_date),"d MMMM yyyy")):null,v.first_air_date?" | ".concat(Object(y.a)(Object(C.a)(v.first_air_date),"yyyy")," - ").concat(Object(y.a)(Object(C.a)(v.last_air_date),"yyyy")):null]}),Object(m.jsxs)("span",{children:[" | ",v.vote_average," / 10"]})]})]}),v.poster_path?Object(m.jsx)(O,{path:v.poster_path,name:v.original_title||v.name}):null,Object(m.jsxs)("article",{children:[Object(m.jsxs)("header",{className:"regular-display",children:[Object(m.jsx)("h2",{children:v.original_title||v.name}),Object(m.jsxs)("p",{className:"info",children:[Object(m.jsx)("span",{children:v.genres?v.genres.map((function(e,t){return t>0?", "+e.name:e.name})):null}),Object(m.jsx)("span",{children:" | ".concat(v.runtime||v.episode_run_time," min")}),Object(m.jsxs)("span",{children:[v.release_date?" | ".concat(Object(y.a)(Object(C.a)(v.release_date),"d MMMM yyyy")):null,v.first_air_date?" | ".concat(Object(y.a)(Object(C.a)(v.first_air_date),"yyyy")," - ").concat(Object(y.a)(Object(C.a)(v.last_air_date),"yyyy")):null]}),Object(m.jsxs)("span",{children:[" | ",v.vote_average," / 10"]})]}),Object(m.jsx)("hr",{})]}),Object(m.jsx)("p",{className:"summary",children:v.overview}),Object(m.jsxs)("footer",{children:[Object(m.jsxs)("p",{className:"price",children:["$",v.price]}),Object(m.jsx)("div",{className:"cart-btn",children:c.find((function(e){return e.id===v.id}))?Object(m.jsx)(f,{itemId:v.id,count:c.find((function(e){return e.id===v.id})).count,handleCountChange:s,decrementCount:a,incrementCount:r}):Object(m.jsx)("button",{name:b,id:v.id,onClick:t,className:"add-to-cart button-bg primary-btn",children:"Add to cart"})})]})]})]})})}),_=function(e){var t=e.cart,c=e.movies,n=e.shows,r=e.addToCart,a=e.incrementCount,s=e.decrementCount,i=e.handleCountChange,o=e.deleteItemFromCart;return Object(m.jsxs)(u.c,{children:[Object(m.jsx)(u.a,{exact:!0,path:"/",render:function(e){return Object(m.jsx)(g,Object(b.a)(Object(b.a)({},e),{},{movies:c,shows:n}))}}),Object(m.jsx)(u.a,{exact:!0,path:"/shopping_cart/",render:function(e){return Object(m.jsx)(g,Object(b.a)(Object(b.a)({},e),{},{movies:c,shows:n}))}}),Object(m.jsx)(u.a,{exact:!0,path:"/shop/:type",render:function(e){return Object(m.jsx)(x,Object(b.a)(Object(b.a)({},e),{},{movies:c,shows:n}))}}),Object(m.jsx)(u.a,{path:"/shop/:type/:id",render:function(e){return Object(m.jsx)(N,Object(b.a)(Object(b.a)({},e),{},{addToCart:r,cart:t,movies:c,shows:n,incrementCount:a,decrementCount:s,handleCountChange:i}))}}),Object(m.jsx)(u.a,{path:"/cart",render:function(e){return Object(m.jsx)(v,Object(b.a)(Object(b.a)({},e),{},{cart:t,incrementCount:a,decrementCount:s,handleCountChange:i,deleteItemFromCart:o}))}})]})},w=(c(48),function(e){var t=e.cart;return Object(m.jsx)("div",{className:"navigation",children:Object(m.jsxs)("nav",{children:[Object(m.jsx)(i.b,{to:"/shopping_cart/",children:Object(m.jsx)("h1",{children:"Blu-Ray Shop"})}),Object(m.jsxs)("ul",{children:[Object(m.jsx)("li",{children:Object(m.jsx)(i.b,{to:"/shop/all",children:"Store"})}),Object(m.jsx)("li",{className:"cart-icon",children:Object(m.jsxs)(i.b,{to:"/cart",children:[Object(m.jsxs)("svg",{viewBox:"0 -31 512.00026 512",xmlns:"http://www.w3.org/2000/svg",children:[Object(m.jsx)("path",{d:"m164.960938 300.003906h.023437c.019531 0 .039063-.003906.058594-.003906h271.957031c6.695312 0 12.582031-4.441406 14.421875-10.878906l60-210c1.292969-4.527344.386719-9.394532-2.445313-13.152344-2.835937-3.757812-7.269531-5.96875-11.976562-5.96875h-366.632812l-10.722657-48.253906c-1.527343-6.863282-7.613281-11.746094-14.644531-11.746094h-90c-8.285156 0-15 6.714844-15 15s6.714844 15 15 15h77.96875c1.898438 8.550781 51.3125 230.917969 54.15625 243.710938-15.941406 6.929687-27.125 22.824218-27.125 41.289062 0 24.8125 20.1875 45 45 45h272c8.285156 0 15-6.714844 15-15s-6.714844-15-15-15h-272c-8.269531 0-15-6.730469-15-15 0-8.257812 6.707031-14.976562 14.960938-14.996094zm312.152343-210.003906-51.429687 180h-248.652344l-40-180zm0 0"}),Object(m.jsx)("path",{d:"m150 405c0 24.8125 20.1875 45 45 45s45-20.1875 45-45-20.1875-45-45-45-45 20.1875-45 45zm45-15c8.269531 0 15 6.730469 15 15s-6.730469 15-15 15-15-6.730469-15-15 6.730469-15 15-15zm0 0"}),Object(m.jsx)("path",{d:"m362 405c0 24.8125 20.1875 45 45 45s45-20.1875 45-45-20.1875-45-45-45-45 20.1875-45 45zm45-15c8.269531 0 15 6.730469 15 15s-6.730469 15-15 15-15-6.730469-15-15 6.730469-15 15-15zm0 0"})]}),Object(m.jsx)("span",{children:t.reduce((function(e,t){return e+=t.count}),0)})]})})]})]})})}),k=(c(49),function(e){return Object(m.jsxs)("div",{className:"footer",children:[Object(m.jsxs)("p",{className:"license",children:["Data provided by",Object(m.jsx)("span",{children:Object(m.jsx)("a",{href:"https://www.themoviedb.org/",target:"_blank",rel:"noreferrer",children:Object(m.jsx)("img",{src:"https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg",alt:"TMDb logo",width:"100"})})})]}),Object(m.jsx)("p",{children:"This product uses the TMDb API but is not endorsed or certified by TMDb."})]})}),S=function(){var e=Object(n.useState)([]),t=Object(h.a)(e,2),c=t[0],r=t[1],a=Object(n.useState)([]),s=Object(h.a)(a,2),i=s[0],j=s[1],b=function(){var e=Object(d.a)(l.a.mark((function e(){var t,c,n,a,s,i,o;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t="801f704ffebb5d5010aae65a474050c8",e.prev=1,e.next=4,fetch("https://api.themoviedb.org/3/movie/popular?api_key=".concat(t,"&language=en-US&US"));case 4:return c=e.sent,e.next=7,c.json();case 7:return n=e.sent,a=["19.99","14.99","9.99"],r(n.results.map((function(e){return e.price=a[Math.floor(3*Math.random())],e}))),e.next=12,fetch("https://api.themoviedb.org/3/tv/popular?api_key=".concat(t,"&language=en-US"));case 12:return s=e.sent,e.next=15,s.json();case 15:i=e.sent,o=["99.99","149.99","129.99"],j(i.results.map((function(e){return e.price=o[Math.floor(3*Math.random())],e}))),e.next=23;break;case 20:e.prev=20,e.t0=e.catch(1),console.error(e.t0);case 23:case"end":return e.stop()}}),e,null,[[1,20]])})));return function(){return e.apply(this,arguments)}}();Object(n.useEffect)((function(){b()}),[]);var u=Object(n.useState)([]),p=Object(h.a)(u,2),O=p[0],x=p[1];return Object(m.jsxs)("div",{className:"app",children:[Object(m.jsx)("header",{className:"primary-header primary-background",children:Object(m.jsx)(w,{cart:O})}),Object(m.jsx)("main",{children:Object(m.jsx)(_,{cart:O,movies:c,shows:i,addToCart:function(e){for(var t=c.concat(i),n=0;n<t.length;n++)if(String(t[n].id)===e.currentTarget.id)return void x(O.concat({count:1,poster_path:t[n].poster_path,id:t[n].id,price:t[n].price,type:e.currentTarget.name}))},incrementCount:function(e){for(var t=Object(o.a)(O),c=0;c<t.length;c++)if(String(t[c].id)===e.currentTarget.id){t[c].count+=1,t[c].count>10&&(t[c].count=10);break}x(t)},decrementCount:function(e){for(var t=Object(o.a)(O),c=0;c<t.length;c++)if(String(t[c].id)===e.currentTarget.id){t[c].count-=1,t[c].count<=0&&t.splice(c,1);break}x(t)},handleCountChange:function(e){for(var t=Object(o.a)(O),c=e.currentTarget,n=c.id,r=c.value,a=0;a<t.length;a++)if(String(t[a].id)===n){t[a].count=r;break}x(t)},deleteItemFromCart:function(e){for(var t=Object(o.a)(O),c=0;c<t.length;c++)if(String(t[c].id)===e.currentTarget.id){t.splice(c,1);break}x(t)}})}),Object(m.jsx)("footer",{className:"primary-footer primary-background",children:Object(m.jsx)(k,{})})]})};s.a.render(Object(m.jsx)(r.a.StrictMode,{children:Object(m.jsx)(i.a,{children:Object(m.jsx)(S,{})})}),document.getElementById("root"))}},[[50,1,2]]]);
//# sourceMappingURL=main.fdbf05bc.chunk.js.map