(this["webpackJsonp@coreui/coreui-free-react-admin-template"]=this["webpackJsonp@coreui/coreui-free-react-admin-template"]||[]).push([[16],{623:function(e,t,n){"use strict";n.d(t,"a",(function(){return r})),n.d(t,"b",(function(){return a}));var r="http://3.12.65.48:4001",a="http://3.12.65.48:4001/"},625:function(e,t,n){},632:function(e,t,n){"use strict";var r=n(624),a=n(1),c=n(17);t.a=function(e){var t=e.showPerPage,n=e.onPaginationChange,i=e.total,s=e.page,o=Object(a.useState)(s),l=Object(r.a)(o,2),u=l[0],b=l[1],j=Object(a.useState)(),d=Object(r.a)(j,2),f=d[0],h=d[1];console.log("numberOfButtons",f),console.log("total",i),console.log("counter",u),console.log("showPerPage",t),Object(a.useEffect)((function(){n(u,t*u-t),h(Math.ceil(i/t))}),[u]);var O=function(e){"prev"===e?b(1===u?1:u-1):"next"===e&&b(f===u?u:u+1)};return Object(c.jsx)("div",{className:"d-flex justify-content-center",children:Object(c.jsx)("nav",{"aria-label":"Page navigation example",children:Object(c.jsxs)("ul",{class:"pagination",children:[Object(c.jsx)("li",{class:"page-item",children:Object(c.jsx)("a",{class:"page-link",onClick:function(){return O("prev")},children:"Previous"})}),new Array(f).fill("").map((function(e,t){return Object(c.jsx)("li",{class:"page-item ".concat(t+1===u?"active":null),children:Object(c.jsx)("a",{class:"page-link",onClick:function(){return b(t+1)},children:t+1})})})),Object(c.jsx)("li",{class:"page-item",children:Object(c.jsx)("a",{class:"page-link",onClick:function(){return O("next")},children:"Next"})})]})})})}},640:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var r=n(641);function a(e,t){var n;if("undefined"===typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(n=Object(r.a)(e))||t&&e&&"number"===typeof e.length){n&&(e=n);var a=0,c=function(){};return{s:c,n:function(){return a>=e.length?{done:!0}:{done:!1,value:e[a++]}},e:function(e){throw e},f:c}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,s=!0,o=!1;return{s:function(){n=e[Symbol.iterator]()},n:function(){var e=n.next();return s=e.done,e},e:function(e){o=!0,i=e},f:function(){try{s||null==n.return||n.return()}finally{if(o)throw i}}}}},643:function(e,t,n){"use strict";var r=n(13),a=n(30),c=n(635),i=n.n(c),s=n(1),o=n.n(s),l=n(636),u=o.a.forwardRef((function(e,t){var n=e.bsPrefix,c=e.className,s=e.striped,u=e.bordered,b=e.borderless,j=e.hover,d=e.size,f=e.variant,h=e.responsive,O=Object(a.a)(e,["bsPrefix","className","striped","bordered","borderless","hover","size","variant","responsive"]),p=Object(l.a)(n,"table"),v=i()(c,p,f&&p+"-"+f,d&&p+"-"+d,s&&p+"-striped",u&&p+"-bordered",b&&p+"-borderless",j&&p+"-hover"),x=o.a.createElement("table",Object(r.a)({},O,{className:v,ref:t}));if(h){var m=p+"-responsive";return"string"===typeof h&&(m=m+"-"+h),o.a.createElement("div",{className:m},x)}return x}));t.a=u},909:function(e,t,n){"use strict";n.r(t);var r=n(161),a=n(40),c=n(627),i=n.n(c),s=n(640),o=n(628),l=n(624),u=n(1),b=n(20),j=n(160),d=n(629),f=n.n(d),h=n(643),O=n(623),p=n(630),v=(n(625),n(632)),x=n(17);t.default=function(){Object(b.g)();var e=Object(u.useState)(10),t=Object(l.a)(e,2),n=t[0],c=(t[1],Object(u.useState)(0)),d=Object(l.a)(c,2),m=d[0],g=d[1],y=Object(u.useState)(1),w=Object(l.a)(y,2),P=w[0],S=w[1],k=Object(u.useState)(1),N=Object(l.a)(k,2),C=(N[0],N[1]),E=Object(u.useState)([]),A=Object(l.a)(E,2),z=A[0],B=A[1],D=(Object(b.i)().id,Object(u.useState)({})),I=Object(l.a)(D,2),J=I[0],T=I[1];Object(u.useEffect)((function(){M()}),[J,m,P]);var M=function(){var e=Object(o.a)(i.a.mark((function e(){var t,r,a,c,o,l;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=[],r={page:P,limit:n},0===Object.keys(J).length&&J.constructor===Object||(r.searchData=J.text),e.next=5,f.a.post("".concat(O.a,"/api/admin/list-subscription"),r);case 5:a=e.sent,console.warn(a.data.data),c=Object(s.a)(a.data.data.docs);try{for(c.s();!(o=c.n()).done;)(l=o.value).title&&t.push(l)}catch(i){c.e(i)}finally{c.f()}return e.next=11,g(a.data.data.total);case 11:B(t);case 12:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),R=function(){var e=Object(o.a)(i.a.mark((function e(t){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:console.log("search text",t.target.name,t.target.value),T(Object(a.a)(Object(a.a)({},J),{},Object(r.a)({},t.target.name,t.target.value)));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(x.jsxs)("div",{children:[Object(x.jsx)(j.b,{className:"btn btn-primary add-blog",to:"/add/subscription",children:"Add Subscription Pack"}),Object(x.jsx)("div",{children:Object(x.jsx)("input",{type:"text",className:"searchBox",placeholder:"search here....",name:"text",value:J.text,onChange:function(e){return R(e)}})}),Object(x.jsxs)(h.a,{striped:!0,bordered:!0,hover:!0,children:[Object(x.jsx)("thead",{children:Object(x.jsxs)("tr",{children:[Object(x.jsx)("th",{children:"S.no"}),Object(x.jsx)("th",{children:"Title"}),Object(x.jsx)("th",{children:"Price"}),Object(x.jsx)("th",{children:"Days"})]})}),Object(x.jsx)("tbody",{children:z.map((function(e,t){return Object(x.jsxs)("tr",{children:[Object(x.jsx)("td",{children:t+1}),Object(x.jsx)("td",{children:e.title}),Object(x.jsx)("td",{children:e.price}),Object(x.jsx)("td",{children:e.days?e.days:""})]})}))})]}),Object(x.jsx)(p.a,{}),m>0?Object(x.jsx)(v.a,{showPerPage:n,onPaginationChange:function(e,t){S(e),C(t)},total:m,page:P}):""]})}}}]);
//# sourceMappingURL=16.4cc7684f.chunk.js.map