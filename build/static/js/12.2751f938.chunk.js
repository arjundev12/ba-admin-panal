(this["webpackJsonp@coreui/coreui-free-react-admin-template"]=this["webpackJsonp@coreui/coreui-free-react-admin-template"]||[]).push([[12],{637:function(e,t,c){"use strict";c.d(t,"a",(function(){return s}));var s="http://3.12.65.48:4004"},672:function(e,t,c){},770:function(e,t,c){"use strict";c.r(t);var s=c(640),n=c.n(s),r=c(162),a=c(641),l=c(40),i=c(638),j=c(1),d=c(20),o=c(657),b=c.n(o),h=c(778),x=c(768),O=c(781),u=c(783),p=c(779),m=c(696),f=c(662),g=(c(658),c(637)),v=c(17);c(672),t.default=function(){var e=Object(d.g)(),t=Object(j.useState)(!1),c=Object(i.a)(t,2),s=(c[0],c[1],Object(j.useState)({newCustomer:!1,invoice:!1})),o=Object(i.a)(s,2),_=o[0],y=o[1],C=function(e){"newCustomer"==e.target.name&&y(Object(l.a)(Object(l.a)({},_),{},{newCustomer:!1})),"invoice"==e.target.name&&y(Object(l.a)(Object(l.a)({},_),{},{invoice:!1})),"cardDetail"==e.target.name&&Ae(!1)},w=Object(j.useState)(!1),S=Object(i.a)(w,2),k=S[0],T=S[1],P=Object(j.useState)({is_sub_customer:!1,name:"",first_name:"",middle_name:"",last_name:"",suffix:"",company_name:"",display_name:"",gst_registration_type:"",gstin_no:"",email:"",number:"",mobile_no:"",fax:"",other:"",website:"",Shipping_Address_copy:!1,notes:"",tax_rego_no:"",cst_reg_no:"",pan_no:"",apply_tds_customer:!1,preferred_payment_method:"",preferred_delivery_method:"",term:"",oppning_balance:"",as_of_date:"",customer_meta:"",bill_with:""}),I=Object(i.a)(P,2),D=I[0],A=I[1],N=Object(j.useState)({b_street:"",b_city:"",b_state:"",b_pin:"",b_country:"",s_street:"",s_city:"",s_state:"",s_pin:"",s_country:""}),G=Object(i.a)(N,2),B=G[0],E=G[1],R=D.is_sub_customer,q=D.name,K=D.first_name,F=D.middle_name,M=D.last_name,U=D.suffix,L=D.company_name,W=D.display_name,Z=D.gst_registration_type,H=D.gstin_no,z=D.email,J=D.number,V=D.mobile_no,X=D.fax,Q=D.other,Y=D.website,$=D.Shipping_Address_copy,ee=D.notes,te=D.tax_rego_no,ce=D.cst_reg_no,se=D.pan_no,ne=D.apply_tds_customer,re=D.preferred_payment_method,ae=D.preferred_delivery_method,le=D.term,ie=D.oppning_balance,je=D.as_of_date,de=function(){var e=Object(a.a)(n.a.mark((function e(t){return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:console.log("targat",t.target.name,t.target.value),E(Object(l.a)(Object(l.a)({},B),{},Object(r.a)({},t.target.name,t.target.value)));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),oe=B.b_street,be=B.b_city,he=B.b_state,xe=B.b_pin,Oe=B.b_country,ue=B.s_street,pe=B.s_city,me=B.s_state,fe=B.s_pin,ge=B.s_country,ve=Object(j.useState)([]),_e=Object(i.a)(ve,2),ye=_e[0],Ce=_e[1],we=function(){var e=Object(a.a)(n.a.mark((function e(t){var c;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(console.log("targat",t.target.name,t.target.value),"is_sub_customer"!=t.target.name){e.next=11;break}if(R){e.next=7;break}return e.next=5,b.a.get("".concat(g.a,"/api/admin/get-customer?_id=").concat(localStorage.getItem("subadminid")));case 5:200==(c=e.sent).data.code?(Object(f.b)("Add successfully"),Ce(c.data.data)):console.log("response",c);case 7:console.log("response",ye),A(Object(l.a)(Object(l.a)({},D),{},{is_sub_customer:!R})),e.next=12;break;case 11:"preferred_payment_method"==t.target.name?A(Object(l.a)(Object(l.a)({},D),{},{preferred_payment_method:t.target.value})):"preferred_delivery_method"==t.target.name?A(Object(l.a)(Object(l.a)({},D),{},{preferred_delivery_method:t.target.value})):"term"==t.target.name?A(Object(l.a)(Object(l.a)({},D),{},{term:t.target.value})):"Shipping_Address_copy"==t.target.name?(A(Object(l.a)(Object(l.a)({},D),{},{Shipping_Address_copy:!$})),E(Object(l.a)(Object(l.a)({},B),{},{s_street:oe,s_city:be,s_state:he,s_pin:xe,s_country:Oe}))):"GST_registered_Regular"==t.target.value?(T(!0),A(Object(l.a)(Object(l.a)({},D),{},{gst_registration_type:"GST_registered_Regular"}))):"GST_registered_Composition"==t.target.value?(T(!0),A(Object(l.a)(Object(l.a)({},D),{},{gst_registration_type:"GST_registered_Composition"}))):"GST_unregistered"==t.target.value?(T(!1),A(Object(l.a)(Object(l.a)({},D),{},{gst_registration_type:"GST_unregistered"}))):"Consumer"==t.target.value?(T(!1),A(Object(l.a)(Object(l.a)({},D),{},{gst_registration_type:"Consumer"}))):"Overseas"==t.target.value?(T(!1),A(Object(l.a)(Object(l.a)({},D),{},{gst_registration_type:"Overseas"}))):"SEZ"==t.target.value?(T(!0),A(Object(l.a)(Object(l.a)({},D),{},{gst_registration_type:"SEZ"}))):"Deemed_exports"==t.target.value&&(T(!0),A(Object(l.a)(Object(l.a)({},D),{},{gst_registration_type:"Deemed_exports"})));case 12:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),Se=_.newCustomer,ke=(_.invoice,function(){var e=Object(a.a)(n.a.mark((function e(t){return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:console.log("formData",D),console.log("targat",t.target.name,t.target.value),A(Object(l.a)(Object(l.a)({},D),{},Object(r.a)({},t.target.name,t.target.value)));case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),Te=function(){var e=Object(a.a)(n.a.mark((function e(t){return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:({}),"option-1"==t&&y(Object(l.a)(Object(l.a)({},_),{},{newCustomer:!0})),"option-2"==t&&y(Object(l.a)(Object(l.a)({},_),{},{invoice:!0}));case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),Pe=Object(j.useState)(!1),Ie=Object(i.a)(Pe,2),De=Ie[0],Ae=Ie[1],Ne=function(){var e=Object(a.a)(n.a.mark((function e(t){return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:console.log("hiiiiiiiii",t.target.name,De),Ae(!De);case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),Ge=function(){var t=Object(a.a)(n.a.mark((function t(c){var s,r;return n.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return c.preventDefault(),console.log("form data",D,B),s=D,B&&(s.billing_address={street:oe,city:be,country:Oe,pin:xe,state:he},s.shipping_address={street:ue,city:pe,country:ge,pin:fe,state:me}),s.company={company_name:L},s.gstin=H,s.tax_info={tax_rego_no:te,cst_reg_no:ce,pan_no:se,apply_tds_customer:ne},s.payment_and_billing={preferred_payment_method:re,preferred_delivery_method:ae,term:le,oppning_balance:ie,as_of_date:je},t.next=10,localStorage.getItem("subadminid");case 10:return s.created_by=t.sent,console.log("data",s),t.next=14,b.a.post("".concat(g.a,"/api/admin/add-customer"),s);case 14:200==(r=t.sent).data.code?(Object(f.b)("Add successfully"),e.push("/users")):console.log("response",r);case 16:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),Be=Object(j.useState)("home"),Ee=Object(i.a)(Be,2),Re=Ee[0],qe=Ee[1],Ke=Object(j.useState)(),Fe=Object(i.a)(Ke,2),Me=Fe[0],Ue=Fe[1],Le=function(){var e=Object(a.a)(n.a.mark((function e(t){var c,s;return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.warn("............image....",[t.target.name],t.target.files[0]),(c=new FormData).append("file",t.target.files[0]),console.warn("file",c),e.next=6,b.a.post("".concat(g.a,"/api/admin/uploade-doc"),c,{"Content-Type":"multipart/form-data"});case 6:s=e.sent,console.log("response",s.data),200==s.data.code?Ue(s.data.data):console.warn("error",s.data.message),console.log("filepath",Me);case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(v.jsxs)(v.Fragment,{children:[Object(v.jsxs)("html",{lang:"en",children:[Object(v.jsx)("meta",{"http-equiv":"content-type",content:"text/html;charset=utf-8"}),Object(v.jsxs)("head",{children:[Object(v.jsx)("meta",{charset:"utf-8"}),Object(v.jsx)("meta",{"http-equiv":"X-UA-Compatible",content:"IE=edge"}),Object(v.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1, shrink-to-fit=no"}),Object(v.jsx)("meta",{name:"description",content:""}),Object(v.jsx)("meta",{name:"author",content:""}),Object(v.jsx)("meta",{name:"keyword",content:""}),Object(v.jsx)("title",{children:"Winklix Internet"}),Object(v.jsx)("link",{href:"css/font-awesome.min.css",rel:"stylesheet"}),Object(v.jsx)("link",{href:"css/simple-line-icons.min.css",rel:"stylesheet"}),Object(v.jsx)("link",{href:"https://fonts.googleapis.com/css?family=Poppins:100,200,300,400,500,700,800",rel:"stylesheet"}),Object(v.jsx)("link",{href:"css/style.css",rel:"stylesheet"}),Object(v.jsx)("link",{href:"css/custom.css",rel:"stylesheet"})]}),Object(v.jsxs)("body",{class:"app header-fixed sidebar-fixed aside-menu-fixed aside-menu-hidden    pace-done",children:[Object(v.jsxs)("div",{class:"pace  pace-inactive",children:[Object(v.jsx)("div",{class:"pace-progress","data-progress-text":"100%","data-progress":"99",children:Object(v.jsx)("div",{class:"pace-progress-inner"})}),Object(v.jsx)("div",{class:"pace-activity"})]}),Object(v.jsxs)("div",{class:"pace  pace-inactive",children:[Object(v.jsx)("div",{class:"pace-progress","data-progress-text":"100%","data-progress":"99",children:Object(v.jsx)("div",{class:"pace-progress-inner"})}),Object(v.jsx)("div",{class:"pace-activity"})]}),Object(v.jsx)("div",{class:"app-body",children:Object(v.jsxs)("div",{class:"container-fluid",children:[Object(v.jsxs)("div",{class:"row customer-text1",children:[Object(v.jsxs)("div",{class:"col-md-5 col-sm-5 heading-customer",children:[Object(v.jsx)("h2",{class:"customer-list",children:"Anisha Impex Limited"}),Object(v.jsxs)("ul",{children:[Object(v.jsx)("li",{children:Object(v.jsx)("a",{href:"#",children:Object(v.jsx)("i",{class:"fa fa-envelope-o"})})}),Object(v.jsx)("li",{children:Object(v.jsx)("span",{tooltip:"9582089971",flow:"down",children:Object(v.jsx)("i",{class:"fa fa-phone"})})}),Object(v.jsx)("div",{class:"main"})]}),Object(v.jsx)("p",{children:"Anisha Impex Limited | 56/53 Site IV Industries Area Sahibabad Gaziabad, Sahibabad,Gaziabad 201010"}),Object(v.jsx)("div",{class:"form-group",children:Object(v.jsx)("a",{href:"#",children:Object(v.jsx)("textarea",{class:"form-control",rows:"5",id:"comment",placeholder:"Add Notes"})})})]}),Object(v.jsx)("div",{class:"col-md-7 col-sm-7",children:Object(v.jsxs)("div",{class:"header-rightside hh",children:[Object(v.jsxs)("ul",{class:"list-inline header-top",children:[Object(v.jsx)("a",{class:"nav-item nav-link",id:"nav-contact-tab","data-toggle":"tab",href:"#nav-contact",role:"tab","aria-controls":"nav-contact","aria-selected":"false"}),Object(v.jsx)("li",{class:"edit-text",children:Object(v.jsx)("a",{href:"#",children:"Edit"})}),Object(v.jsx)("li",{class:"hidden-xs new-customer",children:Object(v.jsxs)(h.a,{className:"fltR",alignRight:!0,title:"New Customer",id:"dropdown-menu-align-right",onSelect:function(e){return Te(e)},children:[Object(v.jsx)(x.a.Item,{eventKey:"option-1",children:"New Customer"}),Object(v.jsx)(x.a.Item,{eventKey:"option-2",children:"Invoice"})]})})]}),Object(v.jsxs)("div",{class:"ibnslight-content",children:[Object(v.jsxs)("div",{class:"insights__amount-text",children:[Object(v.jsx)("h2",{children:"\u20b90.00"}),Object(v.jsx)("p",{children:"OPEN"})]}),Object(v.jsxs)("div",{class:"insights__amount-text stage__insight--overdue",children:[Object(v.jsx)("h2",{children:"\u20b90.00"}),Object(v.jsx)("p",{children:"OVERDUE"})]})]})]})})]}),Object(v.jsx)("div",{class:"row",children:Object(v.jsxs)("div",{class:"col-md-12 mb-4 pt-15",children:[Object(v.jsxs)("ul",{class:"nav nav-tabs",role:"tablist",children:[Object(v.jsx)("li",{class:"nav-item",children:Object(v.jsx)("a",{class:"nav-link active","data-toggle":"tab",href:"#transaction-list",role:"tab","aria-controls":"transaction-list","aria-expanded":"true",children:"Transaction List"})}),Object(v.jsx)("li",{class:"nav-item pl-15",children:Object(v.jsx)("a",{class:"nav-link","data-toggle":"tab",href:"#customer-details",role:"tab","aria-controls":"customer-details","aria-expanded":"false",children:"Customers Details"})})]}),Object(v.jsxs)("div",{class:"tab-content border-bg",children:[Object(v.jsxs)("div",{class:"tab-pane active",id:"transaction-list",role:"tabpanel","aria-expanded":"true",children:[Object(v.jsxs)("div",{class:"row search-box",children:[Object(v.jsx)("div",{class:"col-md-5 col-sm-5",children:Object(v.jsx)("div",{class:"filter",children:Object(v.jsxs)("select",{name:"fontType",id:"fontType",class:"form-control",children:[Object(v.jsx)("option",{value:"",children:"Filter"}),Object(v.jsx)("option",{value:"",children:"a"}),Object(v.jsx)("option",{value:"",children:"b"}),Object(v.jsx)("option",{value:"",children:"c"})]})})}),Object(v.jsx)("div",{class:"col-md-7 col-sm-7",children:Object(v.jsxs)("ul",{class:"icon-right",children:[Object(v.jsx)("li",{children:Object(v.jsx)("a",{href:"#",children:Object(v.jsx)("i",{class:"fa fa-cog"})})}),Object(v.jsx)("li",{children:Object(v.jsx)("a",{href:"#",children:Object(v.jsx)("i",{class:"fa fa-download"})})}),Object(v.jsx)("li",{children:Object(v.jsx)("a",{href:"#",children:Object(v.jsx)("i",{class:"fa fa-print"})})})]})})]}),Object(v.jsx)("div",{class:"customer-table1",children:Object(v.jsxs)("table",{class:"table",cellspacing:"0",children:[Object(v.jsx)("thead",{children:Object(v.jsxs)("tr",{children:[Object(v.jsx)("th",{children:Object(v.jsx)("input",{type:"checkbox",value:""})}),Object(v.jsx)("th",{children:" Date"}),Object(v.jsx)("th",{children:"Type"}),Object(v.jsx)("th",{children:"No"}),Object(v.jsx)("th",{children:"Memo"}),Object(v.jsx)("th",{children:"Due Date"}),Object(v.jsx)("th",{children:"Balance"}),Object(v.jsx)("th",{children:"Total Before"}),Object(v.jsx)("th",{children:"Tax"}),Object(v.jsx)("th",{children:"Total"}),Object(v.jsx)("th",{children:"Status"}),Object(v.jsx)("th",{children:"Action"})]})}),Object(v.jsxs)("tbody",{children:[Object(v.jsxs)("tr",{children:[Object(v.jsx)("td",{children:Object(v.jsx)("input",{type:"checkbox",value:""})}),Object(v.jsx)("td",{children:Object(v.jsx)("a",{href:"#",children:"23/08/2022"})}),Object(v.jsx)("td",{children:"Invoice"}),Object(v.jsx)("td",{children:"5036"}),Object(v.jsx)("td",{}),Object(v.jsx)("td",{children:"23/08/2022"}),Object(v.jsx)("td",{children:"\u20b90.00"}),Object(v.jsx)("td",{children:"\u20b970,000.00"}),Object(v.jsx)("td",{children:"\u20b912,600.00"}),Object(v.jsx)("td",{children:"\u20b982,600.00"}),Object(v.jsx)("td",{children:"Paid"}),Object(v.jsxs)("td",{children:["Print ",Object(v.jsx)("i",{class:"fa fa-angle-down"})]})]}),Object(v.jsxs)("tr",{children:[Object(v.jsx)("td",{children:Object(v.jsx)("input",{type:"checkbox",value:""})}),Object(v.jsx)("td",{children:Object(v.jsx)("a",{href:"#",children:"23/08/2022"})}),Object(v.jsx)("td",{children:"Invoice"}),Object(v.jsx)("td",{children:"5036"}),Object(v.jsx)("td",{}),Object(v.jsx)("td",{children:"23/08/2022"}),Object(v.jsx)("td",{children:"\u20b90.00"}),Object(v.jsx)("td",{children:"\u20b970,000.00"}),Object(v.jsx)("td",{children:"\u20b912,600.00"}),Object(v.jsx)("td",{children:"\u20b982,600.00"}),Object(v.jsx)("td",{children:"Paid"}),Object(v.jsxs)("td",{children:["Print ",Object(v.jsx)("i",{class:"fa fa-angle-down"})]})]}),Object(v.jsxs)("tr",{children:[Object(v.jsx)("td",{children:Object(v.jsx)("input",{type:"checkbox",value:""})}),Object(v.jsx)("td",{children:Object(v.jsx)("a",{href:"#",children:"23/08/2022"})}),Object(v.jsx)("td",{children:"Invoice"}),Object(v.jsx)("td",{children:"5036"}),Object(v.jsx)("td",{}),Object(v.jsx)("td",{children:"23/08/2022"}),Object(v.jsx)("td",{children:"\u20b90.00"}),Object(v.jsx)("td",{children:"\u20b970,000.00"}),Object(v.jsx)("td",{children:"\u20b912,600.00"}),Object(v.jsx)("td",{children:"\u20b982,600.00"}),Object(v.jsx)("td",{children:"Paid"}),Object(v.jsxs)("td",{children:["Print ",Object(v.jsx)("i",{class:"fa fa-angle-down"})]})]}),Object(v.jsxs)("tr",{children:[Object(v.jsx)("td",{children:Object(v.jsx)("input",{type:"checkbox",value:""})}),Object(v.jsx)("td",{children:Object(v.jsx)("a",{href:"#",children:"23/08/2022"})}),Object(v.jsx)("td",{children:"Invoice"}),Object(v.jsx)("td",{children:"5036"}),Object(v.jsx)("td",{}),Object(v.jsx)("td",{children:"23/08/2022"}),Object(v.jsx)("td",{children:"\u20b90.00"}),Object(v.jsx)("td",{children:"\u20b970,000.00"}),Object(v.jsx)("td",{children:"\u20b912,600.00"}),Object(v.jsx)("td",{children:"\u20b982,600.00"}),Object(v.jsx)("td",{children:"Paid"}),Object(v.jsxs)("td",{children:["Print ",Object(v.jsx)("i",{class:"fa fa-angle-down"})]})]}),Object(v.jsxs)("tr",{children:[Object(v.jsx)("td",{}),Object(v.jsx)("td",{children:Object(v.jsx)("a",{href:"#"})}),Object(v.jsx)("td",{children:"Total"}),Object(v.jsx)("td",{}),Object(v.jsx)("td",{}),Object(v.jsx)("td",{}),Object(v.jsx)("td",{}),Object(v.jsx)("td",{}),Object(v.jsx)("td",{}),Object(v.jsx)("td",{children:"\u20b9120,60,00.00"}),Object(v.jsx)("td",{}),Object(v.jsx)("td",{})]})]})]})})]}),Object(v.jsx)("div",{class:"tab-pane",id:"customer-details",role:"tabpanel","aria-expanded":"false",children:Object(v.jsx)("div",{class:"customer-table1",children:Object(v.jsxs)("table",{class:"table",cellspacing:"0",children:[Object(v.jsx)("thead",{children:Object(v.jsxs)("tr",{children:[Object(v.jsx)("th",{children:Object(v.jsx)("input",{type:"checkbox",value:""})}),Object(v.jsx)("th",{children:" Date"}),Object(v.jsx)("th",{children:"Type"}),Object(v.jsx)("th",{children:"No"}),Object(v.jsx)("th",{children:"Memo"}),Object(v.jsx)("th",{children:"Due Date"}),Object(v.jsx)("th",{children:"Balance"}),Object(v.jsx)("th",{children:"Total Before"}),Object(v.jsx)("th",{children:"Tax"}),Object(v.jsx)("th",{children:"Total"}),Object(v.jsx)("th",{children:"Status"}),Object(v.jsx)("th",{children:"Action"})]})}),Object(v.jsxs)("tbody",{children:[Object(v.jsxs)("tr",{children:[Object(v.jsx)("td",{children:Object(v.jsx)("input",{type:"checkbox",value:""})}),Object(v.jsx)("td",{children:Object(v.jsx)("a",{href:"#",children:"23/08/2022"})}),Object(v.jsx)("td",{children:"Invoice"}),Object(v.jsx)("td",{children:"5036"}),Object(v.jsx)("td",{}),Object(v.jsx)("td",{children:"23/08/2022"}),Object(v.jsx)("td",{children:"\u20b90.00"}),Object(v.jsx)("td",{children:"\u20b970,000.00"}),Object(v.jsx)("td",{children:"\u20b912,600.00"}),Object(v.jsx)("td",{children:"\u20b982,600.00"}),Object(v.jsx)("td",{children:"Paid"}),Object(v.jsxs)("td",{children:["Print ",Object(v.jsx)("i",{class:"fa fa-angle-down"})]})]}),Object(v.jsxs)("tr",{children:[Object(v.jsx)("td",{children:Object(v.jsx)("input",{type:"checkbox",value:""})}),Object(v.jsx)("td",{children:Object(v.jsx)("a",{href:"#",children:"23/08/2022"})}),Object(v.jsx)("td",{children:"Invoice"}),Object(v.jsx)("td",{children:"5036"}),Object(v.jsx)("td",{}),Object(v.jsx)("td",{children:"23/08/2022"}),Object(v.jsx)("td",{children:"\u20b90.00"}),Object(v.jsx)("td",{children:"\u20b970,000.00"}),Object(v.jsx)("td",{children:"\u20b912,600.00"}),Object(v.jsx)("td",{children:"\u20b982,600.00"}),Object(v.jsx)("td",{children:"Paid"}),Object(v.jsxs)("td",{children:["Print ",Object(v.jsx)("i",{class:"fa fa-angle-down"})]})]}),Object(v.jsxs)("tr",{children:[Object(v.jsx)("td",{children:Object(v.jsx)("input",{type:"checkbox",value:""})}),Object(v.jsx)("td",{children:Object(v.jsx)("a",{href:"#",children:"23/08/2022"})}),Object(v.jsx)("td",{children:"Invoice"}),Object(v.jsx)("td",{children:"5036"}),Object(v.jsx)("td",{}),Object(v.jsx)("td",{children:"23/08/2022"}),Object(v.jsx)("td",{children:"\u20b90.00"}),Object(v.jsx)("td",{children:"\u20b970,000.00"}),Object(v.jsx)("td",{children:"\u20b912,600.00"}),Object(v.jsx)("td",{children:"\u20b982,600.00"}),Object(v.jsx)("td",{children:"Paid"}),Object(v.jsxs)("td",{children:["Print ",Object(v.jsx)("i",{class:"fa fa-angle-down"})]})]}),Object(v.jsxs)("tr",{children:[Object(v.jsx)("td",{children:Object(v.jsx)("input",{type:"checkbox",value:""})}),Object(v.jsx)("td",{children:Object(v.jsx)("a",{href:"#",children:"23/08/2022"})}),Object(v.jsx)("td",{children:"Invoice"}),Object(v.jsx)("td",{children:"5036"}),Object(v.jsx)("td",{}),Object(v.jsx)("td",{children:"23/08/2022"}),Object(v.jsx)("td",{children:"\u20b90.00"}),Object(v.jsx)("td",{children:"\u20b970,000.00"}),Object(v.jsx)("td",{children:"\u20b912,600.00"}),Object(v.jsx)("td",{children:"\u20b982,600.00"}),Object(v.jsx)("td",{children:"Paid"}),Object(v.jsxs)("td",{children:["Print ",Object(v.jsx)("i",{class:"fa fa-angle-down"})]})]}),Object(v.jsxs)("tr",{children:[Object(v.jsx)("td",{}),Object(v.jsx)("td",{children:Object(v.jsx)("a",{href:"#"})}),Object(v.jsx)("td",{children:"Total"}),Object(v.jsx)("td",{}),Object(v.jsx)("td",{}),Object(v.jsx)("td",{}),Object(v.jsx)("td",{}),Object(v.jsx)("td",{}),Object(v.jsx)("td",{}),Object(v.jsx)("td",{children:"\u20b9120,60,00.00"}),Object(v.jsx)("td",{}),Object(v.jsx)("td",{})]})]})]})})})]})]})})]})}),Object(v.jsx)("div",{id:"add_project",class:"modal fade",role:"dialog",children:Object(v.jsx)("div",{class:"modal-dialog",children:Object(v.jsx)("div",{children:Object(v.jsxs)(O.a,{show:Se,children:[Object(v.jsx)(O.a.Header,{closeButton:!0,children:Object(v.jsx)(O.a.Title,{children:"cityData.name"})}),Object(v.jsxs)("div",{class:"modal-content",children:[Object(v.jsxs)("div",{class:"modal-header login-header",children:[Object(v.jsx)("h4",{class:"modal-title",children:"Customers Information"}),Object(v.jsx)("button",{type:"button",class:"close","data-dismiss":"modal",name:"newCustomer",onClick:C,children:"\xd7"})]}),Object(v.jsxs)("div",{class:"row mt-60",children:[Object(v.jsxs)("div",{class:"col-md-6 col-sm-6",children:[Object(v.jsx)("div",{class:"modal-body",children:Object(v.jsxs)("div",{class:"form-content",children:[Object(v.jsxs)("div",{class:"form-group name",children:[Object(v.jsx)("label",{children:"Name"}),Object(v.jsx)("input",{type:"text",name:"name",value:q,class:"form-control",onChange:function(e){return ke(e)}})]}),Object(v.jsxs)("div",{class:"form-group first-name mr-10",children:[Object(v.jsx)("label",{children:"First Name"}),Object(v.jsx)("input",{type:"text",name:"first_name",value:K,class:"form-control",onChange:function(e){return ke(e)}})]}),Object(v.jsxs)("div",{class:"form-group middle-name mr-10",children:[Object(v.jsx)("label",{children:"Middle Name"}),Object(v.jsx)("input",{type:"text",name:"middle_name",value:F,class:"form-control",placeholder:"",onChange:function(e){return ke(e)}})]}),Object(v.jsxs)("div",{class:"form-group last-name mr-10",children:[Object(v.jsx)("label",{children:"Last Name"}),Object(v.jsx)("input",{type:"text",name:"last_name",value:M,class:"form-control",placeholder:"",onChange:function(e){return ke(e)}})]}),Object(v.jsxs)("div",{class:"form-group suffix mr-10",children:[Object(v.jsx)("label",{children:"Suffix"}),Object(v.jsx)("input",{type:"text",name:"suffix",value:U,class:"form-control",placeholder:"",onChange:function(e){return ke(e)}})]})]})}),Object(v.jsxs)("div",{class:"form-group content-bg",children:[Object(v.jsx)("label",{children:"Company"}),Object(v.jsx)("input",{type:"text",name:"company_name",value:L,class:"form-control",placeholder:"",onChange:function(e){return ke(e)}})]}),Object(v.jsxs)("div",{class:"form-group display",children:[Object(v.jsxs)("label",{children:[Object(v.jsx)("sup",{children:"**"}),"Display name as"]}),Object(v.jsx)("input",{type:"text",name:"display_name",value:W,class:"form-control",placeholder:"",onChange:function(e){return ke(e)}})]}),Object(v.jsxs)("div",{class:"row",children:[Object(v.jsx)("div",{class:"md-6 col-sm-6",children:Object(v.jsxs)("div",{class:"form-group display",children:[Object(v.jsx)("label",{children:"GST Registration Type"}),Object(v.jsxs)("select",{name:"gst_registration_type",id:"fontType",value:Z,class:"form-control",onChange:function(e){return we(e)},children:[Object(v.jsx)("option",{value:"GST_registered_Regular",children:"GST registered- Regular"}),Object(v.jsx)("option",{value:"GST_registered_Composition",children:"GST registered- Composition"}),Object(v.jsx)("option",{value:"GST_unregistered",children:"GST unregistered"}),Object(v.jsx)("option",{value:"Consumer",children:"Consumer"}),Object(v.jsx)("option",{value:"Overseas",children:"Overseas"}),Object(v.jsx)("option",{value:"SEZ",children:"SEZ"}),Object(v.jsx)("option",{value:"Deemed_exports",children:"Deemed exports- EOU's, STP's EHTP's etc"})]}),Object(v.jsx)("span",{children:"What is GST registration type?"})]})}),Object(v.jsx)("div",{class:"md-6 col-sm-6 gst-bg",children:Object(v.jsxs)("div",{class:"form-group",children:[Object(v.jsx)("label",{children:"GSTIN"}),Object(v.jsx)("input",{type:"text",name:"gstin_no",value:H,class:"form-control",placeholder:"for eg.09AADCA1572H1ZS",disabled:0==k?"disabled":"",onChange:function(e){return ke(e)}})]})})]})]}),Object(v.jsx)("div",{class:"col-md-6 col-sm-6",children:Object(v.jsxs)("div",{class:"modal-body",children:[Object(v.jsxs)("div",{class:"form-group mail-bg",children:[Object(v.jsx)("label",{children:"Email"}),Object(v.jsx)("input",{type:"text",name:"email",value:z,class:"form-control",placeholder:"Separate Multiple Email",onChange:function(e){return ke(e)}})]}),Object(v.jsxs)("div",{class:"form-right",children:[Object(v.jsxs)("div",{class:"form-group phone",children:[Object(v.jsx)("label",{children:"Phone"}),Object(v.jsx)("input",{type:"text",name:"number",value:J,class:"form-control",placeholder:"",onChange:function(e){return ke(e)}})]}),Object(v.jsxs)("div",{class:"form-group phone mr-10",children:[Object(v.jsx)("label",{children:"Mobile"}),Object(v.jsx)("input",{type:"text",name:"mobile_no",value:V,class:"form-control",placeholder:"",onChange:function(e){return ke(e)}})]}),Object(v.jsxs)("div",{class:"form-group fax mr-10",children:[Object(v.jsx)("label",{children:"Fax"}),Object(v.jsx)("input",{type:"text",name:"fax",value:X,class:"form-control",placeholder:"",onChange:function(e){return ke(e)}})]})]}),Object(v.jsxs)("div",{class:"form-right",children:[Object(v.jsxs)("div",{class:"form-group phone",children:[Object(v.jsx)("label",{children:"Other"}),Object(v.jsx)("input",{type:"text",name:"other",value:Q,class:"form-control",placeholder:"",onChange:function(e){return ke(e)}})]}),Object(v.jsxs)("div",{class:"form-group website mr-10",children:[Object(v.jsx)("label",{children:"Websites"}),Object(v.jsx)("input",{type:"text",name:"website",value:Y,class:"form-control",placeholder:"",onChange:function(e){return ke(e)}})]})]}),Object(v.jsxs)("div",{class:"form-group checkbox-content",children:[Object(v.jsx)("input",{type:"checkbox",id:"html",defaultChecked:R,name:"is_sub_customer",onChange:function(e){return we(e)}}),Object(v.jsx)("label",{for:"html",children:"Is Sub-Customer"})]}),Object(v.jsxs)("div",{class:"form-box",children:[Object(v.jsx)("select",{class:"form-control",name:"customer_meta",disabled:0==R?"disabled":"",onChange:function(e){return ke(e)},children:ye.map((function(e){return Object(v.jsx)("option",{value:e,children:e.first_name})}))}),Object(v.jsx)("div",{class:"form-group phone bill-parent mr-10",children:Object(v.jsxs)("select",{name:"bill_with",class:"form-control",disabled:0==R?"disabled":"",onChange:function(e){return ke(e)},children:[Object(v.jsx)("option",{value:"bill_with_parent",children:"Bill With Parent"}),Object(v.jsx)("option",{value:"bill_with_this_customer",children:"Bill With this customer"})]})})]})]})})]}),Object(v.jsx)("div",{class:"row hh",children:Object(v.jsx)("div",{class:"col-md-12 mb-4",children:Object(v.jsxs)(u.a,{class:"nav nav-tabs",id:"controlled-tab-example",activeKey:Re,onSelect:function(e){return qe(e)},children:[Object(v.jsx)(p.a,{eventKey:"address",title:"Address",children:Object(v.jsxs)("div",{class:"row",children:[Object(v.jsx)("div",{class:"col-md-6 col-sm-6",children:Object(v.jsxs)("div",{class:"UserRight",children:[Object(v.jsxs)("h3",{children:["Billing address ",Object(v.jsx)("span",{children:"map"})]}),Object(v.jsx)("form",{children:Object(v.jsxs)("div",{class:"row",children:[Object(v.jsx)("div",{class:"form-group col-sm-12",children:Object(v.jsx)("textarea",{rows:"5",class:"form-control",name:"b_street",value:oe,placeholder:"Street",onChange:function(e){return de(e)}})}),Object(v.jsx)("div",{class:"form-group col-sm-6 pd-0",children:Object(v.jsx)("input",{type:"text",name:"b_city",value:be,class:"form-control",placeholder:"City/Town",onChange:function(e){return de(e)}})}),Object(v.jsx)("div",{class:"form-group col-sm-6 pd-0",children:Object(v.jsx)("input",{type:"text",name:"b_state",value:he,class:"form-control",placeholder:"State",onChange:function(e){return de(e)}})}),Object(v.jsx)("div",{class:"form-group col-sm-6 pd-0",children:Object(v.jsx)("input",{type:"text",name:"b_pin",value:xe,class:"form-control",placeholder:"PIN Code",onChange:function(e){return de(e)}})}),Object(v.jsx)("div",{class:"form-group col-sm-6 pd-0",children:Object(v.jsx)("input",{type:"text",name:"b_country",value:Oe,class:"form-control",placeholder:"Country",onChange:function(e){return de(e)}})})]})})]})}),Object(v.jsx)("div",{class:"col-md-6 col-sm-6",children:Object(v.jsxs)("div",{class:"UserRight background-bg",children:[Object(v.jsxs)("h3",{children:["Shipping Address ",Object(v.jsx)("span",{children:"map"}),Object(v.jsx)("input",{type:"checkbox",id:"html",defaultChecked:$,name:"Shipping_Address_copy",onChange:function(e){return we(e)}}),Object(v.jsx)("label",{for:"html",children:"Same as Billing address"})]}),Object(v.jsx)("form",{children:Object(v.jsxs)("div",{class:"row",children:[Object(v.jsx)("div",{class:"form-group col-sm-12",children:Object(v.jsx)("textarea",{rows:"5",name:"s_street",value:ue,class:"form-control",placeholder:"Street",onChange:function(e){return de(e)}})}),Object(v.jsx)("div",{class:"form-group col-sm-6 pd-0",children:Object(v.jsx)("input",{type:"text",name:"s_city",value:pe,class:"form-control",placeholder:"City/Town",onChange:function(e){return de(e)}})}),Object(v.jsx)("div",{class:"form-group col-sm-6 pd-0",children:Object(v.jsx)("input",{type:"text",name:"s_state",value:me,class:"form-control",placeholder:"State",onChange:function(e){return de(e)}})}),Object(v.jsx)("div",{class:"form-group col-sm-6 pd-0",children:Object(v.jsx)("input",{type:"text",name:"s_pin",value:fe,class:"form-control",placeholder:"PIN Code",onChange:function(e){return de(e)}})}),Object(v.jsx)("div",{class:"form-group col-sm-6 pd-0",children:Object(v.jsx)("input",{type:"text",name:"s_country",value:ge,class:"form-control",placeholder:"Country",onChange:function(e){return de(e)}})})]})})]})})]})}),Object(v.jsxs)(p.a,{eventKey:"notes",title:"Notes",children:[Object(v.jsx)("label",{children:"Notes"}),Object(v.jsx)("div",{class:"tab-pane",children:Object(v.jsx)("textarea",{type:"text",name:"notes",value:ee,class:"form-control",placeholder:"2. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod  aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure\r dolor in reprehenderit in m.\r ",onChange:function(e){return ke(e)}})})]}),Object(v.jsxs)(p.a,{eventKey:"Tax-Info",title:"Tax Info",children:[Object(v.jsxs)("div",{class:"form-group col-sm-6 pd-0",children:[Object(v.jsx)("label",{children:"Tax Rego. N."}),Object(v.jsx)("input",{type:"text",name:"tax_rego_no",value:te,class:"form-control",onChange:function(e){return ke(e)}})]}),Object(v.jsxs)("div",{class:"form-group col-sm-6 pd-0",children:[Object(v.jsx)("label",{children:"CST reg. no."}),Object(v.jsx)("input",{type:"text",name:"cst_reg_no",value:ce,class:"form-control",onChange:function(e){return ke(e)}})]}),Object(v.jsxs)("div",{class:"form-group col-sm-6 pd-0",children:[Object(v.jsx)("label",{children:"PAN No."}),Object(v.jsx)("input",{type:"text",name:"pan_no",value:se,class:"form-control",onChange:function(e){return ke(e)}})]}),Object(v.jsxs)("div",{class:"form-group checkbox-content",children:[Object(v.jsx)("input",{type:"checkbox",id:"html",defaultChecked:ne,name:"apply_tds_customer",onChange:function(e){return we(e)}}),Object(v.jsx)("label",{for:"html",children:"Apply TDS for this customer"})]})]}),Object(v.jsxs)(p.a,{eventKey:"Payment-and-Billing",title:"Payment and Billing",children:[Object(v.jsxs)("div",{class:"md-6 col-sm-6",children:[Object(v.jsxs)("div",{class:"form-group display",children:[Object(v.jsx)("label",{children:"Preferred payment method"}),Object(v.jsxs)("select",{name:"preferred_payment_method",value:re,id:"fontType",class:"form-control",onChange:function(e){return we(e)},children:[Object(v.jsx)("option",{value:"cash",children:"Cash"}),Object(v.jsx)("option",{value:"cheque",children:"Cheque"}),Object(v.jsx)("option",{value:"credit_Card",children:"Credit Card"})]}),"credit_Card"==re?Object(v.jsx)("button",{name:"carddetails",onClick:function(e){return Ne(e)},children:"enter credit card detail"}):""]}),Object(v.jsxs)("div",{class:"form-group display",children:[Object(v.jsx)("label",{children:"Preferred delivery method"}),Object(v.jsxs)("select",{name:"preferred_delivery_method",value:ae,id:"fontType",class:"form-control",onChange:function(e){return we(e)},children:[Object(v.jsx)("option",{value:"print_later",children:"Print later"}),Object(v.jsx)("option",{value:"send_later",children:"Send later"})]})]}),Object(v.jsxs)("div",{class:"form-group display",children:[Object(v.jsx)("label",{children:"Terms"}),Object(v.jsxs)("select",{name:"term",value:le,id:"fontType",class:"form-control",onChange:function(e){return we(e)},children:[Object(v.jsx)("option",{value:"due_on_receipt",children:"Due on receipt"}),Object(v.jsx)("option",{value:"net_15",children:"Net 15"}),Object(v.jsx)("option",{value:"net_30",children:"Net 30"}),Object(v.jsx)("option",{value:"net_60",children:"Net 60"})]})]})]}),Object(v.jsx)("div",{class:"md-6 col-sm-6",children:Object(v.jsxs)("div",{class:"form-group display",children:[Object(v.jsx)("label",{children:"Opening balance"}),Object(v.jsx)("input",{type:"text",name:"oppning_balance",value:ie,class:"form-control",onChange:function(e){return ke(e)}})]})}),Object(v.jsx)("div",{class:"md-6 col-sm-6 gst-bg",children:Object(v.jsxs)("div",{class:"form-group",children:[Object(v.jsx)("label",{children:"as of"}),Object(v.jsx)("input",{type:"date",name:"as_of_date",value:je,class:"form-control",onChange:function(e){return ke(e)}})]})})]}),Object(v.jsxs)(p.a,{eventKey:"Attachments",title:"Attachments",children:[Object(v.jsx)("div",{className:"md-6 col-sm-6 gst-bg"}),Object(v.jsx)("input",{type:"file",name:"doc",class:"form-control",onChange:function(e){return Le(e)}})]})]})})})]}),Object(v.jsx)("div",{class:"footer-side",children:Object(v.jsxs)(O.a.Footer,{children:[Object(v.jsx)(m.a,{variant:"secondary",name:"newCustomer",onClick:C,children:"Close"}),Object(v.jsx)(m.a,{variant:"primary",onClick:function(e){return Ge(e)},children:"Submit"})]})})]})})})}),Object(v.jsx)("script",{src:"js/jquery.min.js"}),Object(v.jsx)("script",{src:"js/popper.min.js"})]})]}),Object(v.jsx)("div",{children:Object(v.jsxs)(O.a,{show:De,children:[Object(v.jsx)(O.a.Header,{closeButton:!0,children:Object(v.jsx)(O.a.Title,{children:"Modal title111111111111"})}),Object(v.jsxs)("div",{class:"modal-header login-header",children:[Object(v.jsx)("h4",{class:"modal-title",children:"Card Information"}),Object(v.jsx)("button",{type:"button",class:"close","data-dismiss":"modal",name:"cardDetail",onClick:C,children:"\xd7"})]}),Object(v.jsx)(O.a.Body,{children:"Modal body text goeshgchgchggggggggggggggggggggcv vbvjhvjvjvnbnbkhvkhcvjgcgchchgcbvhg vjhvjhvjhvjhbkjhvkhvkhvjhvjhvjgvjh bvbjvjbmnbnbkhvhvbjhvjhvjhvjh here."}),Object(v.jsxs)(O.a.Footer,{children:[Object(v.jsx)(m.a,{variant:"secondary",name:"cardDetail",onClick:C,children:"Close"}),Object(v.jsx)(m.a,{variant:"primary",children:"Save changes"})]})]})}),Object(v.jsx)(f.a,{})]})}}}]);
//# sourceMappingURL=12.2751f938.chunk.js.map