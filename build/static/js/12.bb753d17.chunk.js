(this["webpackJsonp@coreui/coreui-free-react-admin-template"]=this["webpackJsonp@coreui/coreui-free-react-admin-template"]||[]).push([[12],{623:function(e,t,n){"use strict";n.d(t,"a",(function(){return a})),n.d(t,"b",(function(){return r}));var a="http://3.12.65.48:4001",r="http://3.12.65.48:4001/"},625:function(e,t,n){},632:function(e,t,n){"use strict";var a=n(624),r=n(1),c=n(17);t.a=function(e){var t=e.showPerPage,n=e.onPaginationChange,s=e.total,o=e.page,i=Object(r.useState)(o),u=Object(a.a)(i,2),l=u[0],b=u[1],d=Object(r.useState)(),j=Object(a.a)(d,2),f=j[0],h=j[1];console.log("numberOfButtons",f),console.log("total",s),console.log("counter",l),console.log("showPerPage",t),Object(r.useEffect)((function(){n(l,t*l-t),h(Math.ceil(s/t))}),[l]);var p=function(e){"prev"===e?b(1===l?1:l-1):"next"===e&&b(f===l?l:l+1)};return Object(c.jsx)("div",{className:"d-flex justify-content-center",children:Object(c.jsx)("nav",{"aria-label":"Page navigation example",children:Object(c.jsxs)("ul",{class:"pagination",children:[Object(c.jsx)("li",{class:"page-item",children:Object(c.jsx)("a",{class:"page-link",onClick:function(){return p("prev")},children:"Previous"})}),new Array(f).fill("").map((function(e,t){return Object(c.jsx)("li",{class:"page-item ".concat(t+1===l?"active":null),children:Object(c.jsx)("a",{class:"page-link",onClick:function(){return b(t+1)},children:t+1})})})),Object(c.jsx)("li",{class:"page-item",children:Object(c.jsx)("a",{class:"page-link",onClick:function(){return p("next")},children:"Next"})})]})})})}},640:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var a=n(641);function r(e,t){var n;if("undefined"===typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(n=Object(a.a)(e))||t&&e&&"number"===typeof e.length){n&&(e=n);var r=0,c=function(){};return{s:c,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:c}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var s,o=!0,i=!1;return{s:function(){n=e[Symbol.iterator]()},n:function(){var e=n.next();return o=e.done,e},e:function(e){i=!0,s=e},f:function(){try{o||null==n.return||n.return()}finally{if(i)throw s}}}}},643:function(e,t,n){"use strict";var a=n(13),r=n(30),c=n(635),s=n.n(c),o=n(1),i=n.n(o),u=n(636),l=i.a.forwardRef((function(e,t){var n=e.bsPrefix,c=e.className,o=e.striped,l=e.bordered,b=e.borderless,d=e.hover,j=e.size,f=e.variant,h=e.responsive,p=Object(r.a)(e,["bsPrefix","className","striped","bordered","borderless","hover","size","variant","responsive"]),O=Object(u.a)(n,"table"),m=s()(c,O,f&&O+"-"+f,j&&O+"-"+j,o&&O+"-striped",l&&O+"-bordered",b&&O+"-borderless",d&&O+"-hover"),g=i.a.createElement("table",Object(a.a)({},p,{className:m,ref:t}));if(h){var x=O+"-responsive";return"string"===typeof h&&(x=x+"-"+h),i.a.createElement("div",{className:x},g)}return g}));t.a=l},904:function(e,t,n){"use strict";n.r(t);var a=n(161),r=n(40),c=n(627),s=n.n(c),o=n(640),i=n(628),u=n(624),l=n(1),b=n(20),d=n(160),j=n(629),f=n.n(j),h=n(643),p=n(766),O=n(623),m=n(630),g=(n(625),n(632)),x=n(17);t.default=function(){Object(b.g)();var e=Object(l.useState)(5),t=Object(u.a)(e,2),n=t[0],c=(t[1],Object(l.useState)(0)),j=Object(u.a)(c,2),v=j[0],y=j[1],w=Object(l.useState)(1),S=Object(u.a)(w,2),k=S[0],P=S[1],C=Object(l.useState)(1),N=Object(u.a)(C,2),_=(N[0],N[1]),A=Object(l.useState)([{id:"",name:"",subcategory_meta:{name:""}}]),E=Object(u.a)(A,2),B=E[0],z=E[1],I=(Object(b.i)().id,Object(l.useState)({})),J=Object(u.a)(I,2),D=J[0],M=J[1];Object(l.useEffect)((function(){R()}),[D,v,k]);var R=function(){var e=Object(i.a)(s.a.mark((function e(){var t,a,r,c,i,u;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=[],a={page:k,limit:n},0===Object.keys(D).length&&D.constructor===Object||(a.searchData=D.text),e.next=5,f.a.post("".concat(O.a,"/api/admin/get-chapters"),a);case 5:r=e.sent,console.warn("response",r.data.data),c=Object(o.a)(r.data.data.docs);try{for(c.s();!(i=c.n()).done;)(u=i.value).name&&t.push(u)}catch(s){c.e(s)}finally{c.f()}return e.next=11,z(t);case 11:return e.next=13,y(r.data.data.total);case 13:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),T=function(){var e=Object(i.a)(s.a.mark((function e(t,n){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.a.delete("".concat(O.a,"/api/admin/delete-chapter?_id=").concat(n)).then((function(e){console.log("response",e),R()})).catch((function(e){console.log("error",e),Object(m.b)(e.data.message)}));case 2:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),q=function(){var e=Object(i.a)(s.a.mark((function e(t){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:console.log("search text",t.target.name,t.target.value),M(Object(r.a)(Object(r.a)({},D),{},Object(a.a)({},t.target.name,t.target.value)));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(x.jsxs)("div",{children:[Object(x.jsx)(d.b,{className:"btn btn-primary add-blog",to:"/add/chapter",children:"Add Chapter"}),Object(x.jsx)("div",{children:Object(x.jsx)("input",{type:"text",className:"searchBox",placeholder:"search here....",name:"text",value:D.text,onChange:function(e){return q(e)}})}),Object(x.jsxs)(h.a,{striped:!0,bordered:!0,hover:!0,children:[Object(x.jsx)("thead",{children:Object(x.jsxs)("tr",{children:[Object(x.jsx)("th",{children:"S.no"}),Object(x.jsx)("th",{children:"Chapters"}),Object(x.jsx)("th",{children:"Belonging Sub Category"}),Object(x.jsx)("th",{children:"Belonging  Category"}),Object(x.jsx)("th",{children:"Action"})]})}),Object(x.jsx)("tbody",{children:B.map((function(e,t){return Object(x.jsxs)("tr",{children:[Object(x.jsx)("td",{children:t+1}),Object(x.jsx)("td",{children:e.name}),Object(x.jsx)("td",{children:e.subcategory_meta.name?e.subcategory_meta.name:""}),Object(x.jsx)("td",{children:e.subcategory_meta.name?e.subcategory_meta.category_meta.name:""}),Object(x.jsx)(p.a,{className:"btn btn-primary bg-green mr-2",onClick:function(t){return T(t,e._id)},children:" delete "})]})}))})]}),Object(x.jsx)(m.a,{}),v>0?Object(x.jsx)(g.a,{showPerPage:n,onPaginationChange:function(e,t){P(e),_(t)},total:v,page:k}):""]})}}}]);
//# sourceMappingURL=12.bb753d17.chunk.js.map