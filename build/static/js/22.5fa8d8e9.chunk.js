(this["webpackJsonp@coreui/coreui-free-react-admin-template"]=this["webpackJsonp@coreui/coreui-free-react-admin-template"]||[]).push([[22],{1482:function(e,t,c){"use strict";c.r(t);var n=c(631),r=c.n(n),a=c(661),s=c(161),o=c(40),i=c(653),l=c(1),u=c(674),j=c.n(u),d=c(20),b=c(680),p=(c(675),c(651)),m=(c(668),c(760),c(17));t.default=function(){Object(d.g)(),Object(d.i)().id;var e=Object(l.useState)({name:"",hsn_sac:"",discription:"",price:"",tax:""}),t=Object(i.a)(e,2),c=t[0],n=t[1],u={headers:{token:localStorage.getItem("token")}},h=c.name,x=c.hsn_sac,O=c.discription,f=c.price,g=c.tax,v=function(e){n(Object(o.a)(Object(o.a)({},c),{},Object(s.a)({},e.target.name,e.target.value)))},y=function(){var e=Object(a.a)(r.a.mark((function e(t){var a;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),console.log("request",c),c.created_by=localStorage.getItem("subadminid"),console.log("request",c),e.next=6,j.a.post("".concat(p.a,"/api/admin/add-product-service"),c,u);case 6:a=e.sent,console.log("response",a),200==a.data.code?(Object(b.b)("add successfully"),n({name:"",hsn_sac:"",discription:"",price:"",tax:""})):Object(b.b)("somthing went wrong");case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(m.jsx)(m.Fragment,{children:Object(m.jsxs)("html",{lang:"en",children:[Object(m.jsx)("h3",{children:"Add Master/Service"}),Object(m.jsx)("form",{onSubmit:function(e){return y(e)},children:Object(m.jsxs)("div",{class:"row",children:[Object(m.jsxs)("div",{class:"form-group col-sm-6",children:[Object(m.jsx)("label",{children:"Name "}),Object(m.jsx)("input",{type:"text",name:"name",class:"form-control",placeholder:"Name Product/service",value:h,onChange:function(e){return v(e)}})]}),Object(m.jsxs)("div",{class:"form-group col-sm-6",children:[Object(m.jsx)("label",{children:"HSN/SAC"}),Object(m.jsx)("input",{type:"text",name:"hsn_sac",class:"form-control",placeholder:"",value:x,onChange:function(e){return v(e)}})]}),Object(m.jsxs)("div",{class:"form-group col-sm-6",children:[Object(m.jsx)("label",{children:"Price"}),Object(m.jsx)("input",{type:"number",pattern:"[0-9]*",inputmode:"numeric",name:"price",class:"form-control",placeholder:"",value:f,onChange:function(e){return v(e)}})]}),Object(m.jsxs)("div",{class:"form-group col-sm-6",children:[Object(m.jsx)("label",{children:"Tax"}),Object(m.jsx)("input",{type:"text",name:"tax",class:"form-control",placeholder:"",value:g,onChange:function(e){return v(e)}})]}),Object(m.jsxs)("div",{class:"form-group col-sm-6",children:[Object(m.jsx)("label",{children:"Discription"}),Object(m.jsx)("textarea",{type:"text",name:"discription",class:"form-control",placeholder:"",value:O,onChange:function(e){return v(e)}})]}),Object(m.jsx)("div",{class:"col-sm-12",children:Object(m.jsx)("button",{children:"Submit"})})]})}),Object(m.jsx)(b.a,{})]})})}}}]);
//# sourceMappingURL=22.5fa8d8e9.chunk.js.map