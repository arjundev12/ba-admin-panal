(this["webpackJsonp@coreui/coreui-free-react-admin-template"]=this["webpackJsonp@coreui/coreui-free-react-admin-template"]||[]).push([[16],{717:function(e,t,s){"use strict";var c=s(623),n=s(624),r=s(625),a=s.n(r),i=s(1),l=s.n(i),o=s(627),d=["bsPrefix","className","striped","bordered","borderless","hover","size","variant","responsive"],j=l.a.forwardRef((function(e,t){var s=e.bsPrefix,r=e.className,i=e.striped,j=e.bordered,b=e.borderless,h=e.hover,u=e.size,m=e.variant,p=e.responsive,O=Object(n.a)(e,d),x=Object(o.a)(s,"table"),g=a()(r,x,m&&x+"-"+m,u&&x+"-"+u,i&&x+"-striped",j&&x+"-bordered",b&&x+"-borderless",h&&x+"-hover"),v=l.a.createElement("table",Object(c.a)({},O,{className:g,ref:t}));if(p){var f=x+"-responsive";return"string"===typeof p&&(f=f+"-"+p),l.a.createElement("div",{className:f},v)}return v}));t.a=j},768:function(e,t,s){"use strict";s.r(t);var c=s(161),n=s(40),r=s(638),a=s.n(r),i=s(639),l=s(634),o=s(1),d=s(20),j=s(643),b=s.n(j),h=s(780),u=s(771),m=s(717),p=s(783),O=s(785),x=s(781),g=s(697),v=s(647),f=(s(644),s(633)),_=(s(651),s(652),s(17));t.default=function(){var e=Object(d.g)(),t=Object(o.useState)(10),s=Object(l.a)(t,2),r=(s[0],s[1],Object(o.useState)(0)),j=Object(l.a)(r,2),y=j[0],C=j[1],S=Object(o.useState)(1),w=Object(l.a)(S,2),k=w[0],T=(w[1],Object(o.useState)(1)),N=Object(l.a)(T,2),A=(N[0],N[1],Object(o.useState)({})),E=Object(l.a)(A,2),I=E[0],P=(E[1],Object(o.useState)({})),D=Object(l.a)(P,2),G=D[0];D[1];Object(o.useEffect)((function(){U(k,I)}),[k,y,I,G]);var R=Object(o.useState)([]),q=Object(l.a)(R,2),B=q[0],K=q[1],U=function(){var e=Object(i.a)(a.a.mark((function e(t){var s,c,n,r=arguments;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s=r.length>1&&void 0!==r[1]?r[1]:null,c={page:t,limit:10},0===Object.keys(s).length&&s.constructor===Object||(c.sort=s),0===Object.keys(G).length&&G.constructor===Object||(c.toId=G.text),c._id=localStorage.getItem("subadminid"),console.log("datadata",c),e.next=8,b.a.post("".concat(f.a,"/api/admin/customer-list"),c);case 8:if(200!=(n=e.sent).data.code){e.next=17;break}return Object(v.b)("Add successfully"),console.log("datadata",n.data.data.docs),K(n.data.data.docs),e.next=15,C(n.data.data.total);case 15:e.next=18;break;case 17:console.log("response",n);case 18:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),F=Object(o.useState)(!1),H=Object(l.a)(F,2),M=(H[0],H[1],Object(o.useState)({newCustomer:!1,invoice:!1})),W=Object(l.a)(M,2),Z=W[0],L=W[1],z=function(e){"newCustomer"==e.target.name&&L(Object(n.a)(Object(n.a)({},Z),{},{newCustomer:!1})),"invoice"==e.target.name&&L(Object(n.a)(Object(n.a)({},Z),{},{invoice:!1})),"cardDetail"==e.target.name&&tt(!1)},J=Object(o.useState)(!1),V=Object(l.a)(J,2),X=V[0],Y=V[1],Q=Object(o.useState)({is_sub_customer:!1,name:"",first_name:"",middle_name:"",last_name:"",suffix:"",company_name:"",display_name:"",gst_registration_type:"",gstin_no:"",email:"",number:"",mobile_no:"",fax:"",other:"",website:"",Shipping_Address_copy:!1,notes:"",tax_rego_no:"",cst_reg_no:"",pan_no:"",apply_tds_customer:!1,preferred_payment_method:"",preferred_delivery_method:"",term:"",oppning_balance:"",as_of_date:"",customer_meta:"",bill_with:""}),$=Object(l.a)(Q,2),ee=$[0],te=$[1],se=Object(o.useState)({b_street:"",b_city:"",b_state:"",b_pin:"",b_country:"",s_street:"",s_city:"",s_state:"",s_pin:"",s_country:""}),ce=Object(l.a)(se,2),ne=ce[0],re=ce[1],ae=ee.is_sub_customer,ie=ee.name,le=ee.first_name,oe=ee.middle_name,de=ee.last_name,je=ee.suffix,be=ee.company_name,he=ee.display_name,ue=ee.gst_registration_type,me=ee.gstin_no,pe=ee.email,Oe=ee.number,xe=ee.mobile_no,ge=ee.fax,ve=ee.other,fe=ee.website,_e=ee.Shipping_Address_copy,ye=ee.notes,Ce=ee.tax_rego_no,Se=ee.cst_reg_no,we=ee.pan_no,ke=ee.apply_tds_customer,Te=ee.preferred_payment_method,Ne=ee.preferred_delivery_method,Ae=ee.term,Ee=ee.oppning_balance,Ie=ee.as_of_date,Pe=function(){var e=Object(i.a)(a.a.mark((function e(t){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:console.log("targat",t.target.name,t.target.value),re(Object(n.a)(Object(n.a)({},ne),{},Object(c.a)({},t.target.name,t.target.value)));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),De=ne.b_street,Ge=ne.b_city,Re=ne.b_state,qe=ne.b_pin,Be=ne.b_country,Ke=ne.s_street,Ue=ne.s_city,Fe=ne.s_state,He=ne.s_pin,Me=ne.s_country,We=Object(o.useState)([]),Ze=Object(l.a)(We,2),Le=Ze[0],ze=Ze[1],Je=function(){var e=Object(i.a)(a.a.mark((function e(t){var s;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(console.log("targat",t.target.name,t.target.value),"is_sub_customer"!=t.target.name){e.next=11;break}if(ae){e.next=7;break}return e.next=5,b.a.get("".concat(f.a,"/api/admin/get-customer?_id=").concat(localStorage.getItem("subadminid")));case 5:200==(s=e.sent).data.code?(Object(v.b)("Add successfully"),ze(s.data.data)):console.log("response",s);case 7:console.log("response",Le),te(Object(n.a)(Object(n.a)({},ee),{},{is_sub_customer:!ae})),e.next=12;break;case 11:"preferred_payment_method"==t.target.name?te(Object(n.a)(Object(n.a)({},ee),{},{preferred_payment_method:t.target.value})):"preferred_delivery_method"==t.target.name?te(Object(n.a)(Object(n.a)({},ee),{},{preferred_delivery_method:t.target.value})):"term"==t.target.name?te(Object(n.a)(Object(n.a)({},ee),{},{term:t.target.value})):"Shipping_Address_copy"==t.target.name?(te(Object(n.a)(Object(n.a)({},ee),{},{Shipping_Address_copy:!_e})),re(Object(n.a)(Object(n.a)({},ne),{},{s_street:De,s_city:Ge,s_state:Re,s_pin:qe,s_country:Be}))):"GST_registered_Regular"==t.target.value?(Y(!0),te(Object(n.a)(Object(n.a)({},ee),{},{gst_registration_type:"GST_registered_Regular"}))):"GST_registered_Composition"==t.target.value?(Y(!0),te(Object(n.a)(Object(n.a)({},ee),{},{gst_registration_type:"GST_registered_Composition"}))):"GST_unregistered"==t.target.value?(Y(!1),te(Object(n.a)(Object(n.a)({},ee),{},{gst_registration_type:"GST_unregistered"}))):"Consumer"==t.target.value?(Y(!1),te(Object(n.a)(Object(n.a)({},ee),{},{gst_registration_type:"Consumer"}))):"Overseas"==t.target.value?(Y(!1),te(Object(n.a)(Object(n.a)({},ee),{},{gst_registration_type:"Overseas"}))):"SEZ"==t.target.value?(Y(!0),te(Object(n.a)(Object(n.a)({},ee),{},{gst_registration_type:"SEZ"}))):"Deemed_exports"==t.target.value&&(Y(!0),te(Object(n.a)(Object(n.a)({},ee),{},{gst_registration_type:"Deemed_exports"})));case 12:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),Ve=Z.newCustomer,Xe=(Z.invoice,function(){var e=Object(i.a)(a.a.mark((function e(t){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:console.log("formData",ee),console.log("targat",t.target.name,t.target.value),te(Object(n.a)(Object(n.a)({},ee),{},Object(c.a)({},t.target.name,t.target.value)));case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),Ye=function(){var e=Object(i.a)(a.a.mark((function e(t){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:({}),"option-1"==t&&L(Object(n.a)(Object(n.a)({},Z),{},{newCustomer:!0})),"option-2"==t&&L(Object(n.a)(Object(n.a)({},Z),{},{invoice:!0}));case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),Qe=Object(o.useState)(!1),$e=Object(l.a)(Qe,2),et=$e[0],tt=$e[1],st=function(){var e=Object(i.a)(a.a.mark((function e(t){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:console.log("hiiiiiiiii",t.target.name,et),tt(!et);case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),ct=function(){var t=Object(i.a)(a.a.mark((function t(s){var c,n;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return s.preventDefault(),console.log("form data",ee,ne),c=ee,ne&&(c.billing_address={street:De,city:Ge,country:Be,pin:qe,state:Re},c.shipping_address={street:Ke,city:Ue,country:Me,pin:He,state:Fe}),c.company={company_name:be},c.gstin=me,c.tax_info={tax_rego_no:Ce,cst_reg_no:Se,pan_no:we,apply_tds_customer:ke},c.payment_and_billing={preferred_payment_method:Te,preferred_delivery_method:Ne,term:Ae,oppning_balance:Ee,as_of_date:Ie},t.next=10,localStorage.getItem("subadminid");case 10:return c.created_by=t.sent,console.log("data",c),t.next=14,b.a.post("".concat(f.a,"/api/admin/add-customer"),c);case 14:200==(n=t.sent).data.code?(Object(v.b)("Add successfully"),e.push("/users")):console.log("response",n);case 16:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),nt=Object(o.useState)("home"),rt=Object(l.a)(nt,2),at=rt[0],it=rt[1],lt=Object(o.useState)("transaction-list"),ot=Object(l.a)(lt,2),dt=(ot[0],ot[1],Object(o.useState)()),jt=Object(l.a)(dt,2),bt=jt[0],ht=jt[1],ut=function(){var e=Object(i.a)(a.a.mark((function e(t){var s,c;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.warn("............image....",[t.target.name],t.target.files[0]),(s=new FormData).append("file",t.target.files[0]),console.warn("file",s),e.next=6,b.a.post("".concat(f.a,"/api/admin/uploade-doc"),s,{"Content-Type":"multipart/form-data"});case 6:c=e.sent,console.log("response",c.data),200==c.data.code?ht(c.data.data):console.warn("error",c.data.message),console.log("filepath",bt);case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(_.jsxs)(_.Fragment,{children:[Object(_.jsxs)("html",{lang:"en",children:[Object(_.jsx)("meta",{"http-equiv":"content-type",content:"text/html;charset=utf-8"}),Object(_.jsxs)("head",{children:[Object(_.jsx)("meta",{charset:"utf-8"}),Object(_.jsx)("meta",{"http-equiv":"X-UA-Compatible",content:"IE=edge"}),Object(_.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1, shrink-to-fit=no"}),Object(_.jsx)("meta",{name:"description",content:""}),Object(_.jsx)("meta",{name:"author",content:""}),Object(_.jsx)("meta",{name:"keyword",content:""}),Object(_.jsx)("title",{children:"Winklix Internet"}),Object(_.jsx)("link",{href:"css/font-awesome.min.css",rel:"stylesheet"}),Object(_.jsx)("link",{href:"css/simple-line-icons.min.css",rel:"stylesheet"}),Object(_.jsx)("link",{href:"https://fonts.googleapis.com/css?family=Poppins:100,200,300,400,500,700,800",rel:"stylesheet"}),Object(_.jsx)("link",{href:"css/style.css",rel:"stylesheet"}),Object(_.jsx)("link",{href:"css/custom.css",rel:"stylesheet"})]}),Object(_.jsxs)("body",{class:"app header-fixed sidebar-fixed aside-menu-fixed aside-menu-hidden    pace-done",children:[Object(_.jsxs)("div",{class:"pace  pace-inactive",children:[Object(_.jsx)("div",{class:"pace-progress","data-progress-text":"100%","data-progress":"99",children:Object(_.jsx)("div",{class:"pace-progress-inner"})}),Object(_.jsx)("div",{class:"pace-activity"})]}),Object(_.jsxs)("div",{class:"pace  pace-inactive",children:[Object(_.jsx)("div",{class:"pace-progress","data-progress-text":"100%","data-progress":"99",children:Object(_.jsx)("div",{class:"pace-progress-inner"})}),Object(_.jsx)("div",{class:"pace-activity"})]}),Object(_.jsx)("div",{class:"app-body",children:Object(_.jsxs)("div",{class:"container-fluid",children:[Object(_.jsxs)("div",{class:"row customer-text1",children:[Object(_.jsx)("div",{class:"col-md-5 col-sm-5 heading-customer",children:Object(_.jsxs)("div",{class:"card-box",children:[Object(_.jsxs)("div",{class:"card1",children:[Object(_.jsx)("h2",{children:"\u20b923,50,570"}),Object(_.jsx)("p",{children:"26 Estimates"})]}),Object(_.jsxs)("div",{class:"card2",children:[Object(_.jsx)("div",{class:"activity-heading"}),Object(_.jsx)("h2",{children:"\u20b90"}),Object(_.jsx)("p",{children:"0 Unbilled Activity"})]}),Object(_.jsxs)("div",{class:"card3",children:[Object(_.jsx)("div",{class:"activity-heading"}),Object(_.jsx)("h2",{children:"\u20b921,00,609"}),Object(_.jsx)("p",{children:"12 Overdue"})]}),Object(_.jsxs)("div",{class:"card4",children:[Object(_.jsx)("h2",{children:"\u20b923,50,570"}),Object(_.jsx)("p",{children:"13 Open Invoices"})]}),Object(_.jsxs)("div",{class:"card5",children:[Object(_.jsx)("div",{class:"activity-heading"}),Object(_.jsx)("h2",{children:"\u20b923,600"}),Object(_.jsx)("p",{children:"2 Paid Last 30 Days"})]})]})}),Object(_.jsx)("div",{class:"col-md-7 col-sm-7",children:Object(_.jsxs)("div",{class:"header-rightside hh",children:[Object(_.jsxs)("ul",{class:"list-inline header-top",children:[Object(_.jsx)("a",{class:"nav-item nav-link",id:"nav-contact-tab","data-toggle":"tab",href:"#nav-contact",role:"tab","aria-controls":"nav-contact","aria-selected":"false"}),Object(_.jsx)("li",{class:"edit-text",children:Object(_.jsx)("a",{href:"#",children:"Edit"})}),Object(_.jsx)("li",{class:"hidden-xs new-customer",children:Object(_.jsxs)(h.a,{className:"fltR",alignRight:!0,title:"New Customer",id:"dropdown-menu-align-right",onSelect:function(e){return Ye(e)},children:[Object(_.jsx)(u.a.Item,{eventKey:"option-1",children:"New Customer"}),Object(_.jsx)(u.a.Item,{eventKey:"option-2",children:"Invoice"})]})})]}),Object(_.jsxs)("div",{class:"ibnslight-content",children:[Object(_.jsxs)("div",{class:"insights__amount-text",children:[Object(_.jsx)("h2",{children:"\u20b90.00"}),Object(_.jsx)("p",{children:"OPEN"})]}),Object(_.jsxs)("div",{class:"insights__amount-text stage__insight--overdue",children:[Object(_.jsx)("h2",{children:"\u20b90.00"}),Object(_.jsx)("p",{children:"OVERDUE"})]})]})]})})]}),Object(_.jsx)("div",{class:"row",children:Object(_.jsxs)("div",{class:"col-md-12 mb-4 pt-15",children:[Object(_.jsx)("div",{class:"col-md-5 col-sm-5",children:Object(_.jsx)("div",{id:"custom-search-input",children:Object(_.jsxs)("div",{class:"input-group",children:[Object(_.jsx)("input",{type:"text",class:"  search-query form-control",placeholder:"Search"}),Object(_.jsx)("span",{class:"input-group-btn",children:Object(_.jsx)("button",{class:"btn btn-danger",type:"button",children:Object(_.jsx)("i",{class:"fa fa-search","aria-hidden":"true"})})})]})})}),Object(_.jsxs)(m.a,{striped:!0,bordered:!0,hover:!0,children:[Object(_.jsx)("thead",{children:Object(_.jsxs)("tr",{children:[Object(_.jsx)("th",{children:"S.no"}),Object(_.jsx)("th",{children:"GST REGISTRATION TYPE11"}),Object(_.jsx)("th",{children:"GSTIN "}),Object(_.jsx)("th",{children:"PHONE"}),Object(_.jsx)("th",{children:"OPEN BALANCE"}),Object(_.jsx)("th",{children:"ACTION"})]})}),Object(_.jsx)("tbody",{children:B.map((function(e,t){return Object(_.jsxs)("tr",{children:[Object(_.jsx)("td",{children:t+1}),Object(_.jsx)("td",{children:e.gst_registration_type}),Object(_.jsx)("td",{children:e.gstin}),Object(_.jsx)("td",{children:e.number}),Object(_.jsx)("td",{children:"00"})]})}))})]})]})})]})}),Object(_.jsx)("div",{id:"add_project",class:"modal fade",role:"dialog",children:Object(_.jsx)("div",{class:"modal-dialog",children:Object(_.jsx)("div",{children:Object(_.jsxs)(p.a,{show:Ve,children:[Object(_.jsx)(p.a.Header,{closeButton:!0,children:Object(_.jsx)(p.a.Title,{children:"cityData.name"})}),Object(_.jsxs)("div",{class:"modal-content",children:[Object(_.jsxs)("div",{class:"modal-header login-header",children:[Object(_.jsx)("h4",{class:"modal-title",children:"Customers Information"}),Object(_.jsx)("button",{type:"button",class:"close","data-dismiss":"modal",name:"newCustomer",onClick:z,children:"\xd7"})]}),Object(_.jsxs)("div",{class:"row mt-60",children:[Object(_.jsxs)("div",{class:"col-md-6 col-sm-6",children:[Object(_.jsx)("div",{class:"modal-body",children:Object(_.jsxs)("div",{class:"form-content",children:[Object(_.jsxs)("div",{class:"form-group name",children:[Object(_.jsx)("label",{children:"Name"}),Object(_.jsx)("input",{type:"text",name:"name",value:ie,class:"form-control",onChange:function(e){return Xe(e)}})]}),Object(_.jsxs)("div",{class:"form-group first-name mr-10",children:[Object(_.jsx)("label",{children:"First Name"}),Object(_.jsx)("input",{type:"text",name:"first_name",value:le,class:"form-control",onChange:function(e){return Xe(e)}})]}),Object(_.jsxs)("div",{class:"form-group middle-name mr-10",children:[Object(_.jsx)("label",{children:"Middle Name"}),Object(_.jsx)("input",{type:"text",name:"middle_name",value:oe,class:"form-control",placeholder:"",onChange:function(e){return Xe(e)}})]}),Object(_.jsxs)("div",{class:"form-group last-name mr-10",children:[Object(_.jsx)("label",{children:"Last Name"}),Object(_.jsx)("input",{type:"text",name:"last_name",value:de,class:"form-control",placeholder:"",onChange:function(e){return Xe(e)}})]}),Object(_.jsxs)("div",{class:"form-group suffix mr-10",children:[Object(_.jsx)("label",{children:"Suffix"}),Object(_.jsx)("input",{type:"text",name:"suffix",value:je,class:"form-control",placeholder:"",onChange:function(e){return Xe(e)}})]})]})}),Object(_.jsxs)("div",{class:"form-group content-bg",children:[Object(_.jsx)("label",{children:"Company"}),Object(_.jsx)("input",{type:"text",name:"company_name",value:be,class:"form-control",placeholder:"",onChange:function(e){return Xe(e)}})]}),Object(_.jsxs)("div",{class:"form-group display",children:[Object(_.jsxs)("label",{children:[Object(_.jsx)("sup",{children:"**"}),"Display name as"]}),Object(_.jsx)("input",{type:"text",name:"display_name",value:he,class:"form-control",placeholder:"",onChange:function(e){return Xe(e)}})]}),Object(_.jsxs)("div",{class:"row",children:[Object(_.jsx)("div",{class:"md-6 col-sm-6",children:Object(_.jsxs)("div",{class:"form-group display",children:[Object(_.jsx)("label",{children:"GST Registration Type"}),Object(_.jsxs)("select",{name:"gst_registration_type",id:"fontType",value:ue,class:"form-control",onChange:function(e){return Je(e)},children:[Object(_.jsx)("option",{value:"GST_registered_Regular",children:"GST registered- Regular"}),Object(_.jsx)("option",{value:"GST_registered_Composition",children:"GST registered- Composition"}),Object(_.jsx)("option",{value:"GST_unregistered",children:"GST unregistered"}),Object(_.jsx)("option",{value:"Consumer",children:"Consumer"}),Object(_.jsx)("option",{value:"Overseas",children:"Overseas"}),Object(_.jsx)("option",{value:"SEZ",children:"SEZ"}),Object(_.jsx)("option",{value:"Deemed_exports",children:"Deemed exports- EOU's, STP's EHTP's etc"})]}),Object(_.jsx)("span",{children:"What is GST registration type?"})]})}),Object(_.jsx)("div",{class:"md-6 col-sm-6 gst-bg",children:Object(_.jsxs)("div",{class:"form-group",children:[Object(_.jsx)("label",{children:"GSTIN"}),Object(_.jsx)("input",{type:"text",name:"gstin_no",value:me,class:"form-control",placeholder:"for eg.09AADCA1572H1ZS",disabled:0==X?"disabled":"",onChange:function(e){return Xe(e)}})]})})]})]}),Object(_.jsx)("div",{class:"col-md-6 col-sm-6",children:Object(_.jsxs)("div",{class:"modal-body",children:[Object(_.jsxs)("div",{class:"form-group mail-bg",children:[Object(_.jsx)("label",{children:"Email"}),Object(_.jsx)("input",{type:"text",name:"email",value:pe,class:"form-control",placeholder:"Separate Multiple Email",onChange:function(e){return Xe(e)}})]}),Object(_.jsxs)("div",{class:"form-right",children:[Object(_.jsxs)("div",{class:"form-group phone",children:[Object(_.jsx)("label",{children:"Phone"}),Object(_.jsx)("input",{type:"text",name:"number",value:Oe,class:"form-control",placeholder:"",onChange:function(e){return Xe(e)}})]}),Object(_.jsxs)("div",{class:"form-group phone mr-10",children:[Object(_.jsx)("label",{children:"Mobile"}),Object(_.jsx)("input",{type:"text",name:"mobile_no",value:xe,class:"form-control",placeholder:"",onChange:function(e){return Xe(e)}})]}),Object(_.jsxs)("div",{class:"form-group fax mr-10",children:[Object(_.jsx)("label",{children:"Fax"}),Object(_.jsx)("input",{type:"text",name:"fax",value:ge,class:"form-control",placeholder:"",onChange:function(e){return Xe(e)}})]})]}),Object(_.jsxs)("div",{class:"form-right",children:[Object(_.jsxs)("div",{class:"form-group phone",children:[Object(_.jsx)("label",{children:"Other"}),Object(_.jsx)("input",{type:"text",name:"other",value:ve,class:"form-control",placeholder:"",onChange:function(e){return Xe(e)}})]}),Object(_.jsxs)("div",{class:"form-group website mr-10",children:[Object(_.jsx)("label",{children:"Websites"}),Object(_.jsx)("input",{type:"text",name:"website",value:fe,class:"form-control",placeholder:"",onChange:function(e){return Xe(e)}})]})]}),Object(_.jsxs)("div",{class:"form-group checkbox-content",children:[Object(_.jsx)("input",{type:"checkbox",id:"html",defaultChecked:ae,name:"is_sub_customer",onChange:function(e){return Je(e)}}),Object(_.jsx)("label",{for:"html",children:"Is Sub-Customer"})]}),Object(_.jsxs)("div",{class:"form-box",children:[Object(_.jsx)("select",{class:"form-control",name:"customer_meta",disabled:0==ae?"disabled":"",onChange:function(e){return Xe(e)},children:Le.map((function(e){return Object(_.jsx)("option",{value:e,children:e.first_name})}))}),Object(_.jsx)("div",{class:"form-group phone bill-parent mr-10",children:Object(_.jsxs)("select",{name:"bill_with",class:"form-control",disabled:0==ae?"disabled":"",onChange:function(e){return Xe(e)},children:[Object(_.jsx)("option",{value:"bill_with_parent",children:"Bill With Parent"}),Object(_.jsx)("option",{value:"bill_with_this_customer",children:"Bill With this customer"})]})})]})]})})]}),Object(_.jsx)("div",{class:"row hh",children:Object(_.jsx)("div",{class:"col-md-12 mb-4",children:Object(_.jsxs)(O.a,{class:"nav nav-tabs",id:"controlled-tab-example",activeKey:at,onSelect:function(e){return it(e)},children:[Object(_.jsx)(x.a,{eventKey:"address",title:"Address",children:Object(_.jsxs)("div",{class:"row",children:[Object(_.jsx)("div",{class:"col-md-6 col-sm-6",children:Object(_.jsxs)("div",{class:"UserRight",children:[Object(_.jsxs)("h3",{children:["Billing address ",Object(_.jsx)("span",{children:"map"})]}),Object(_.jsx)("form",{children:Object(_.jsxs)("div",{class:"row",children:[Object(_.jsx)("div",{class:"form-group col-sm-12",children:Object(_.jsx)("textarea",{rows:"5",class:"form-control",name:"b_street",value:De,placeholder:"Street",onChange:function(e){return Pe(e)}})}),Object(_.jsx)("div",{class:"form-group col-sm-6 pd-0",children:Object(_.jsx)("input",{type:"text",name:"b_city",value:Ge,class:"form-control",placeholder:"City/Town",onChange:function(e){return Pe(e)}})}),Object(_.jsx)("div",{class:"form-group col-sm-6 pd-0",children:Object(_.jsx)("input",{type:"text",name:"b_state",value:Re,class:"form-control",placeholder:"State",onChange:function(e){return Pe(e)}})}),Object(_.jsx)("div",{class:"form-group col-sm-6 pd-0",children:Object(_.jsx)("input",{type:"text",name:"b_pin",value:qe,class:"form-control",placeholder:"PIN Code",onChange:function(e){return Pe(e)}})}),Object(_.jsx)("div",{class:"form-group col-sm-6 pd-0",children:Object(_.jsx)("input",{type:"text",name:"b_country",value:Be,class:"form-control",placeholder:"Country",onChange:function(e){return Pe(e)}})})]})})]})}),Object(_.jsx)("div",{class:"col-md-6 col-sm-6",children:Object(_.jsxs)("div",{class:"UserRight background-bg",children:[Object(_.jsxs)("h3",{children:["Shipping Address ",Object(_.jsx)("span",{children:"map"}),Object(_.jsx)("input",{type:"checkbox",id:"html",defaultChecked:_e,name:"Shipping_Address_copy",onChange:function(e){return Je(e)}}),Object(_.jsx)("label",{for:"html",children:"Same as Billing address"})]}),Object(_.jsx)("form",{children:Object(_.jsxs)("div",{class:"row",children:[Object(_.jsx)("div",{class:"form-group col-sm-12",children:Object(_.jsx)("textarea",{rows:"5",name:"s_street",value:Ke,class:"form-control",placeholder:"Street",onChange:function(e){return Pe(e)}})}),Object(_.jsx)("div",{class:"form-group col-sm-6 pd-0",children:Object(_.jsx)("input",{type:"text",name:"s_city",value:Ue,class:"form-control",placeholder:"City/Town",onChange:function(e){return Pe(e)}})}),Object(_.jsx)("div",{class:"form-group col-sm-6 pd-0",children:Object(_.jsx)("input",{type:"text",name:"s_state",value:Fe,class:"form-control",placeholder:"State",onChange:function(e){return Pe(e)}})}),Object(_.jsx)("div",{class:"form-group col-sm-6 pd-0",children:Object(_.jsx)("input",{type:"text",name:"s_pin",value:He,class:"form-control",placeholder:"PIN Code",onChange:function(e){return Pe(e)}})}),Object(_.jsx)("div",{class:"form-group col-sm-6 pd-0",children:Object(_.jsx)("input",{type:"text",name:"s_country",value:Me,class:"form-control",placeholder:"Country",onChange:function(e){return Pe(e)}})})]})})]})})]})}),Object(_.jsxs)(x.a,{eventKey:"notes",title:"Notes",children:[Object(_.jsx)("label",{children:"Notes"}),Object(_.jsx)("div",{class:"tab-pane",children:Object(_.jsx)("textarea",{type:"text",name:"notes",value:ye,class:"form-control",placeholder:"2. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod  aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure\r dolor in reprehenderit in m.\r ",onChange:function(e){return Xe(e)}})})]}),Object(_.jsxs)(x.a,{eventKey:"Tax-Info",title:"Tax Info",children:[Object(_.jsxs)("div",{class:"form-group col-sm-6 pd-0",children:[Object(_.jsx)("label",{children:"Tax Rego. N."}),Object(_.jsx)("input",{type:"text",name:"tax_rego_no",value:Ce,class:"form-control",onChange:function(e){return Xe(e)}})]}),Object(_.jsxs)("div",{class:"form-group col-sm-6 pd-0",children:[Object(_.jsx)("label",{children:"CST reg. no."}),Object(_.jsx)("input",{type:"text",name:"cst_reg_no",value:Se,class:"form-control",onChange:function(e){return Xe(e)}})]}),Object(_.jsxs)("div",{class:"form-group col-sm-6 pd-0",children:[Object(_.jsx)("label",{children:"PAN No."}),Object(_.jsx)("input",{type:"text",name:"pan_no",value:we,class:"form-control",onChange:function(e){return Xe(e)}})]}),Object(_.jsxs)("div",{class:"form-group checkbox-content",children:[Object(_.jsx)("input",{type:"checkbox",id:"html",defaultChecked:ke,name:"apply_tds_customer",onChange:function(e){return Je(e)}}),Object(_.jsx)("label",{for:"html",children:"Apply TDS for this customer"})]})]}),Object(_.jsxs)(x.a,{eventKey:"Payment-and-Billing",title:"Payment and Billing",children:[Object(_.jsxs)("div",{class:"md-6 col-sm-6",children:[Object(_.jsxs)("div",{class:"form-group display",children:[Object(_.jsx)("label",{children:"Preferred payment method"}),Object(_.jsxs)("select",{name:"preferred_payment_method",value:Te,id:"fontType",class:"form-control",onChange:function(e){return Je(e)},children:[Object(_.jsx)("option",{value:"cash",children:"Cash"}),Object(_.jsx)("option",{value:"cheque",children:"Cheque"}),Object(_.jsx)("option",{value:"credit_Card",children:"Credit Card"})]}),"credit_Card"==Te?Object(_.jsx)("button",{name:"carddetails",onClick:function(e){return st(e)},children:"enter credit card detail"}):""]}),Object(_.jsxs)("div",{class:"form-group display",children:[Object(_.jsx)("label",{children:"Preferred delivery method"}),Object(_.jsxs)("select",{name:"preferred_delivery_method",value:Ne,id:"fontType",class:"form-control",onChange:function(e){return Je(e)},children:[Object(_.jsx)("option",{value:"print_later",children:"Print later"}),Object(_.jsx)("option",{value:"send_later",children:"Send later"})]})]}),Object(_.jsxs)("div",{class:"form-group display",children:[Object(_.jsx)("label",{children:"Terms"}),Object(_.jsxs)("select",{name:"term",value:Ae,id:"fontType",class:"form-control",onChange:function(e){return Je(e)},children:[Object(_.jsx)("option",{value:"due_on_receipt",children:"Due on receipt"}),Object(_.jsx)("option",{value:"net_15",children:"Net 15"}),Object(_.jsx)("option",{value:"net_30",children:"Net 30"}),Object(_.jsx)("option",{value:"net_60",children:"Net 60"})]})]})]}),Object(_.jsx)("div",{class:"md-6 col-sm-6",children:Object(_.jsxs)("div",{class:"form-group display",children:[Object(_.jsx)("label",{children:"Opening balance"}),Object(_.jsx)("input",{type:"text",name:"oppning_balance",value:Ee,class:"form-control",onChange:function(e){return Xe(e)}})]})}),Object(_.jsx)("div",{class:"md-6 col-sm-6 gst-bg",children:Object(_.jsxs)("div",{class:"form-group",children:[Object(_.jsx)("label",{children:"as of"}),Object(_.jsx)("input",{type:"date",name:"as_of_date",value:Ie,class:"form-control",onChange:function(e){return Xe(e)}})]})})]}),Object(_.jsxs)(x.a,{eventKey:"Attachments",title:"Attachments",children:[Object(_.jsx)("div",{className:"md-6 col-sm-6 gst-bg"}),Object(_.jsx)("input",{type:"file",name:"doc",class:"form-control",onChange:function(e){return ut(e)}})]})]})})})]}),Object(_.jsx)("div",{class:"footer-side",children:Object(_.jsxs)(p.a.Footer,{children:[Object(_.jsx)(g.a,{variant:"secondary",name:"newCustomer",onClick:z,children:"Close"}),Object(_.jsx)(g.a,{variant:"primary",onClick:function(e){return ct(e)},children:"Submit"})]})})]})})})}),Object(_.jsx)("script",{src:"js/jquery.min.js"}),Object(_.jsx)("script",{src:"js/popper.min.js"})]})]}),Object(_.jsx)("div",{children:Object(_.jsxs)(p.a,{show:et,children:[Object(_.jsx)(p.a.Header,{closeButton:!0,children:Object(_.jsx)(p.a.Title,{children:"Modal title111111111111"})}),Object(_.jsxs)("div",{class:"modal-header login-header",children:[Object(_.jsx)("h4",{class:"modal-title",children:"Card Information"}),Object(_.jsx)("button",{type:"button",class:"close","data-dismiss":"modal",name:"cardDetail",onClick:z,children:"\xd7"})]}),Object(_.jsx)(p.a.Body,{children:"Modal body text goeshgchgchggggggggggggggggggggcv vbvjhvjvjvnbnbkhvkhcvjgcgchchgcbvhg vjhvjhvjhvjhbkjhvkhvkhvjhvjhvjgvjh bvbjvjbmnbnbkhvhvbjhvjhvjhvjh here."}),Object(_.jsxs)(p.a.Footer,{children:[Object(_.jsx)(g.a,{variant:"secondary",name:"cardDetail",onClick:z,children:"Close"}),Object(_.jsx)(g.a,{variant:"primary",children:"Save changes"})]})]})}),Object(_.jsx)(v.a,{})]})}}}]);
//# sourceMappingURL=16.06a7f2d1.chunk.js.map