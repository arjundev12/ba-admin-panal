(this["webpackJsonp@coreui/coreui-free-react-admin-template"]=this["webpackJsonp@coreui/coreui-free-react-admin-template"]||[]).push([[34],{623:function(e,t,n){"use strict";n.d(t,"a",(function(){return a})),n.d(t,"b",(function(){return c}));var a="http://3.12.65.48:4001",c="http://3.12.65.48:4001/"},905:function(e,t,n){"use strict";n.r(t);var a=n(627),c=n.n(a),r=n(628),o=n(161),s=n(40),u=n(624),i=n(1),l=n(629),b=n.n(l),j=n(20),p=n(623),f=n(630),m=(n(650),n(652),n(17));t.default=function(){var e=Object(j.g)(),t=Object(i.useState)({name:"",content:"",image:"",subcategory_meta:{}}),n=Object(u.a)(t,2),a=n[0],l=n[1],d=Object(i.useState)([]),h=Object(u.a)(d,2),O=h[0],x=h[1],g=Object(i.useState)(),v=Object(u.a)(g,2),y=v[0],w=v[1],S=Object(i.useState)([]),k=Object(u.a)(S,2),N=k[0],C=k[1],_=Object(i.useState)(),A=Object(u.a)(_,2),E=A[0],J=A[1],D=Object(i.useState)({}),T=Object(u.a)(D,2),q=(T[0],T[1],a.name);a.content;Object(i.useEffect)((function(){F()}),[]);var z=function(){var e=Object(r.a)(c.a.mark((function e(t){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("eeeeeeeeeeee",t.target.name,t.target.value),e.next=3,w(O[t.target.value]);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),B=function(){var e=Object(r.a)(c.a.mark((function e(t){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("eeeeeeeeeeee",t.target.name,t.target.value),e.next=3,J(N[t.target.value]);case 3:G(N[t.target.value]);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),F=function(){var e=Object(r.a)(c.a.mark((function e(){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.a.get("".concat(p.a,"/api/admin/category-list")).then((function(e){C(e.data.data)})).catch((function(e){alert("err in catch")}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),G=function(){var e=Object(r.a)(c.a.mark((function e(t){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("item......",t),e.next=3,b.a.get("".concat(p.a,"/api/admin/subcategory-list?_id=").concat(t._id)).then((function(e){x(e.data.data)})).catch((function(e){alert("err in catch")}));case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),H=function(){var t=Object(r.a)(c.a.mark((function t(n){var r;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n.preventDefault(),!y||!E){t.next=12;break}return a.subcategory_meta=y,a.category_meta=E,console.warn("onsumbit",a),t.next=7,b.a.post("".concat(p.a,"/api/admin/add-chapter"),a);case 7:r=t.sent,Object(f.b)(r.data.message),setTimeout((function(){e.push("/chapters")}),1e3),t.next=13;break;case 12:alert("please select any category");case 13:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return Object(m.jsxs)("div",{className:"container",children:[Object(m.jsxs)("div",{className:"w-75 mx-auto shadow p-5",children:[Object(m.jsx)("h2",{className:"text-center mb-4",children:"Add Chapter"}),Object(m.jsxs)("form",{onSubmit:function(e){return H(e)},children:[Object(m.jsxs)("div",{class:"form-group col-sm-6",children:[Object(m.jsx)("label",{children:"Select Category *"}),Object(m.jsxs)("select",{class:"form-control",onChange:function(e){return B(e)},children:[Object(m.jsx)("option",{value:"N/A",children:"Select"}),N.map((function(e,t){return Object(m.jsx)("option",{value:t,children:e.name},t)}))]})]}),Object(m.jsxs)("div",{class:"form-group col-sm-6",children:[Object(m.jsx)("label",{children:"Select Sub Category *"}),Object(m.jsxs)("select",{class:"form-control",onChange:function(e){return z(e)},children:[Object(m.jsx)("option",{value:"N/A",children:"Select"}),O.map((function(e,t){return Object(m.jsx)("option",{value:t,children:e.name},t)}))]})]}),Object(m.jsx)("div",{className:"form-group",children:Object(m.jsx)("input",{type:"text",className:"form-control form-control-lg",placeholder:"Enter name",name:"name",value:q,onChange:function(e){return function(e){l(Object(s.a)(Object(s.a)({},a),{},Object(o.a)({},e.target.name,e.target.value)))}(e)}})}),Object(m.jsx)("button",{className:"btn btn-primary btn-block",children:"Add chapter"})]})]}),Object(m.jsx)(f.a,{})]})}}}]);
//# sourceMappingURL=34.d0eaa714.chunk.js.map