(this["webpackJsonp@coreui/coreui-free-react-admin-template"]=this["webpackJsonp@coreui/coreui-free-react-admin-template"]||[]).push([[36],{623:function(e,t,a){"use strict";a.d(t,"a",(function(){return n})),a.d(t,"b",(function(){return c}));var n="http://3.12.65.48:4001",c="http://3.12.65.48:4001/"},926:function(e,t,a){"use strict";a.r(t);var n=a(627),c=a.n(n),r=a(628),o=a(161),s=a(40),i=a(624),l=a(1),u=a(629),p=a.n(u),j=a(20),d=a(623),m=a(630),b=(a(650),a(652),a.p+"static/media/samplesheet.49e860cc.xlsx"),f=a(17);t.default=function(){var e=Object(j.g)(),t=Object(l.useState)({question:"",content:"",image:"",difficulty_level:"",category_meta:{},chapter_meta:{},subcategory_meta:{},info:"",flage:"",pin:""}),a=Object(i.a)(t,2),n=a[0],u=a[1],O=Object(l.useState)([]),h=Object(i.a)(O,2),x=h[0],g=h[1],v=Object(l.useState)(),y=Object(i.a)(v,2),w=y[0],C=y[1],N=Object(l.useState)([]),k=Object(i.a)(N,2),S=k[0],A=k[1],_=Object(l.useState)(),D=Object(i.a)(_,2),q=D[0],E=D[1],B=Object(l.useState)([]),F=Object(i.a)(B,2),T=F[0],J=F[1],L=Object(l.useState)(),Q=Object(i.a)(L,2),R=Q[0],H=Q[1],I=Object(l.useState)(),M=Object(i.a)(I,2),U=M[0],X=M[1],z=n.question,G=(n.content,n.info);n.pin,n.flag;Object(l.useEffect)((function(){Z()}),[]);var K=function(e){X(Object(s.a)(Object(s.a)({},U),{},Object(o.a)({},e.target.name,e.target.value)))},P=function(e){u(Object(s.a)(Object(s.a)({},n),{},Object(o.a)({},e.target.name,e.target.value)))},V=function(){var e=Object(r.a)(c.a.mark((function e(t){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,H(T[t.target.value]);case 2:$(T[t.target.value]);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),W=function(){var e=Object(r.a)(c.a.mark((function e(t){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,C(x[t.target.value]);case 2:return e.next=4,ee(x[t.target.value]);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),Y=function(){var e=Object(r.a)(c.a.mark((function e(t){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E(S[t.target.value]);case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),Z=function(){var e=Object(r.a)(c.a.mark((function e(){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.a.get("".concat(d.a,"/api/admin/category-list")).then((function(e){J(e.data.data)})).catch((function(e){alert("err in catch")}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),$=function(){var e=Object(r.a)(c.a.mark((function e(t){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.a.get("".concat(d.a,"/api/admin/subcategory-list?_id=").concat(t._id)).then((function(e){g(e.data.data)})).catch((function(e){alert("err in catch")}));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),ee=function(){var e=Object(r.a)(c.a.mark((function e(t){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.a.get("".concat(d.a,"/api/admin/chapter-list?_id=").concat(t._id)).then((function(e){A(e.data.data)})).catch((function(e){alert("err in catch")}));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),te=Object(l.useState)({file:null,A:null,B:null,C:null,D:null}),ae=Object(i.a)(te,2),ne=(ae[0],ae[1],Object(l.useState)()),ce=Object(i.a)(ne,2),re=ce[0],oe=ce[1],se=function(){var e=Object(r.a)(c.a.mark((function e(t){var a,n;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.warn("............image....",[t.target.name],t.target.files[0]),(a=new FormData).append("xlsSheet",t.target.files[0]),console.warn("xlsfile",a),e.next=6,p.a.post("".concat(d.a,"/api/admin/uploade-sheet"),a,{"Content-Type":"multipart/form-data"});case 6:n=e.sent,console.log("response",n.data),200==n.data.code?oe(n.data.data):console.warn("error",n.data.message),console.log("filepath",re);case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),ie=function(){var e=Object(r.a)(c.a.mark((function e(t){var a;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.warn("............image....",[t.target.name],t.target.files[0]),e.next=3,new FileReader;case 3:(a=e.sent).readAsDataURL(t.target.files[0]),a.onload=Object(r.a)(c.a.mark((function e(){var r,o,i,l,j,b;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(console.warn("................",a.result),r={},"A"!=t.target.name){e.next=8;break}return r.image=a.result,e.next=6,p.a.post("".concat(d.a,"/api/admin/upload-image"),r);case 6:200==(o=e.sent).data.code&&(X(Object(s.a)(Object(s.a)({},U),{},{A:o.data.data})),Object(m.b)(o.data.message),console.warn("response",o.data.data));case 8:if("B"!=t.target.name){e.next=14;break}return r.image=a.result,e.next=12,p.a.post("".concat(d.a,"/api/admin/upload-image"),r);case 12:200==(i=e.sent).data.code&&(X(Object(s.a)(Object(s.a)({},U),{},{B:i.data.data})),Object(m.b)(i.data.message),console.warn("response",i.data.data));case 14:if("C"!=t.target.name){e.next=20;break}return r.image=a.result,e.next=18,p.a.post("".concat(d.a,"/api/admin/upload-image"),r);case 18:200==(l=e.sent).data.code&&(X(Object(s.a)(Object(s.a)({},U),{},{C:l.data.data})),Object(m.b)(l.data.message),console.warn("response",l.data.data));case 20:if("D"!=t.target.name){e.next=26;break}return r.image=a.result,e.next=24,p.a.post("".concat(d.a,"/api/admin/upload-image"),r);case 24:200==(j=e.sent).data.code&&(X(Object(s.a)(Object(s.a)({},U),{},{D:j.data.data})),Object(m.b)(j.data.message),console.warn("response",j.data.data));case 26:if("file"!=t.target.name){e.next=32;break}return r.image=a.result,e.next=30,p.a.post("".concat(d.a,"/api/admin/upload-image"),r);case 30:200==(b=e.sent).data.code&&(u(Object(s.a)(Object(s.a)({},n),{},{question:b.data.data})),Object(m.b)(b.data.message),console.warn("response",b.data.data));case 32:case"end":return e.stop()}}),e)})));case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),le=function(){var t=Object(r.a)(c.a.mark((function t(a){var r,o,s;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(a.preventDefault(),!(w&&q&&R)){t.next=27;break}if(n.category_meta=R,n.chapter_meta=q,n.subcategory_meta=w,n.options=U,console.warn("onsumbit",n),"xml"!=je){t.next=20;break}return(r={}).category_meta=R,r.chapter_meta=q,r.subcategory_meta=w,r.path=re,t.next=15,p.a.post("".concat(d.a,"/api/admin/insert-data"),r);case 15:o=t.sent,Object(m.b)(o.data.message),setTimeout((function(){e.push("/questions")}),1e3),t.next=25;break;case 20:return t.next=22,p.a.post("".concat(d.a,"/api/admin/add-question"),n);case 22:s=t.sent,Object(m.b)(s.data.message),setTimeout((function(){e.push("/questions")}),1e3);case 25:t.next=28;break;case 27:alert("please select any subcategory and chaptermeta");case 28:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),ue=Object(l.useState)("true"),pe=Object(i.a)(ue,2),je=pe[0],de=pe[1],me=Object(l.useState)("4"),be=Object(i.a)(me,2),fe=be[0],Oe=be[1],he=function(){var e=Object(r.a)(c.a.mark((function e(t){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:console.log("hiiiiiiii",t.target.value),Oe(t.target.value);case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),xe=function(){var e=Object(r.a)(c.a.mark((function e(t){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:console.log("e.target.valueup",t.target.value),de(t.target.value),console.log("e.target.valuedown",t.target.value);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(f.jsxs)("div",{className:"container",children:[Object(f.jsxs)("div",{className:"w-75 mx-auto shadow p-5",children:[Object(f.jsx)("h2",{className:"text-center mb-4",children:"Add question"}),Object(f.jsxs)("form",{onSubmit:function(e){return le(e)},children:[Object(f.jsxs)("div",{class:"form-group col-sm-6",children:[Object(f.jsx)("label",{children:"Select Category *"}),Object(f.jsxs)("select",{class:"form-control",onChange:function(e){return V(e)},children:[Object(f.jsx)("option",{value:"N/A",children:"Select"}),T.map((function(e,t){return Object(f.jsx)("option",{value:t,children:e.name},t)}))]})]}),Object(f.jsxs)("div",{class:"form-group col-sm-6",children:[Object(f.jsx)("label",{children:"Select Sub Category *"}),Object(f.jsxs)("select",{class:"form-control",onChange:function(e){return W(e)},children:[Object(f.jsx)("option",{value:"N/A",children:"Select"}),x.map((function(e,t){return Object(f.jsx)("option",{value:t,children:e.name},t)}))]})]}),Object(f.jsxs)("div",{class:"form-group col-sm-6",children:[Object(f.jsx)("label",{children:"Select Chapter *"}),Object(f.jsxs)("select",{class:"form-control",onChange:function(e){return Y(e)},children:[Object(f.jsx)("option",{value:"N/A",children:"Select"}),S.map((function(e,t){return Object(f.jsx)("option",{value:t,children:e.name},t)}))]})]}),Object(f.jsx)("h4",{children:"Question Type"}),Object(f.jsxs)("div",{value:je,onChange:function(e){return xe(e)},children:[Object(f.jsx)("input",{type:"radio",value:"true",name:"type"})," text",Object(f.jsx)("input",{type:"radio",value:"false",name:"type"})," image",Object(f.jsx)("input",{type:"radio",value:"xml",name:"type"})," upload Xml File"]}),Object(f.jsxs)("div",{children:[Object(f.jsx)("br",{}),"xml"==je?Object(f.jsx)("a",{className:"btn btn-primary",href:b,download:!0,children:"Download Sample File "}):""]}),Object(f.jsxs)("div",{children:[Object(f.jsx)("br",{}),"xml"==je?Object(f.jsx)("input",{type:"file",className:"form-control form-control-lg",placeholder:"select you image question description",name:"file",onChange:function(e){return se(e)}}):Object(f.jsxs)("div",{children:[Object(f.jsxs)("div",{children:[" ",Object(f.jsx)("h4",{children:"Option Number"}),Object(f.jsxs)("div",{onChange:function(e){return he(e)},children:[Object(f.jsx)("input",{type:"radio",value:"3",name:"optionNo"})," Three",Object(f.jsx)("input",{type:"radio",value:"4",name:"optionNo"})," Four"]})]}),Object(f.jsxs)("div",{className:"form-group",children:[Object(f.jsx)("label",{children:" Question"}),"true"==je?Object(f.jsx)("input",{type:"text",className:"form-control form-control-lg",placeholder:"Enter question description",name:"question",value:z,onChange:function(e){return P(e)}}):Object(f.jsx)("input",{type:"file",className:"form-control form-control-lg",placeholder:"select you image question description",name:"file",onChange:function(e){return ie(e)}})]}),Object(f.jsxs)("div",{className:"form-group",children:[Object(f.jsx)("label",{children:" Options A"}),"true"==je?Object(f.jsx)("input",{type:"text",className:"form-control form-control-lg",placeholder:"Enter Options A",name:"A",onChange:function(e){return K(e)}}):Object(f.jsx)("input",{type:"file",className:"form-control form-control-lg",placeholder:"select you image Enter Options A",name:"A",onChange:function(e){return ie(e)}})]}),Object(f.jsxs)("div",{className:"form-group",children:[Object(f.jsx)("label",{children:"  Options B"}),"true"==je?Object(f.jsx)("input",{type:"text",className:"form-control form-control-lg",placeholder:"Enter Options B",name:"B",onChange:function(e){return K(e)}}):Object(f.jsx)("input",{type:"file",className:"form-control form-control-lg",placeholder:"select you image Enter Options B",name:"B",onChange:function(e){return ie(e)}})]}),Object(f.jsxs)("div",{className:"form-group",children:[Object(f.jsx)("label",{children:"  Options C"}),"true"==je?Object(f.jsx)("input",{type:"text",className:"form-control form-control-lg",placeholder:"Enter Options C",name:"C",onChange:function(e){return K(e)}}):Object(f.jsx)("input",{type:"file",className:"form-control form-control-lg",placeholder:"select you image Enter Options C",name:"C",onChange:function(e){return ie(e)}})]}),"4"==fe?Object(f.jsxs)("div",{className:"form-group",children:[Object(f.jsx)("label",{children:"  Options D"}),"true"==je?Object(f.jsx)("input",{type:"text",className:"form-control form-control-lg",placeholder:"Enter Options D",name:"D",onChange:function(e){return K(e)}}):Object(f.jsx)("input",{type:"file",className:"form-control form-control-lg",placeholder:"select you image Enter Options D",name:"D",onChange:function(e){return ie(e)}})]}):"",Object(f.jsxs)("div",{class:"form-group col-sm-6",children:[Object(f.jsx)("label",{children:"Select Correct Answer *"}),Object(f.jsxs)("select",{class:"form-control",name:"answer",onChange:function(e){return K(e)},children:[Object(f.jsx)("option",{value:"A",children:" A "}),Object(f.jsx)("option",{value:"B",children:" B "}),Object(f.jsx)("option",{value:"C",children:" C "}),"4"==fe?Object(f.jsx)("option",{value:"D",children:" D "}):""]})]}),Object(f.jsxs)("div",{class:"form-group col-sm-6",children:[Object(f.jsx)("label",{children:"deficulti level *"}),Object(f.jsxs)("select",{class:"form-control",name:"difficulty_level",onChange:function(e){return P(e)},children:[Object(f.jsx)("option",{value:"0",children:" Low "}),Object(f.jsx)("option",{value:"1",children:" Medium "}),Object(f.jsx)("option",{value:"2",children:" High "})]})]}),Object(f.jsxs)("div",{className:"form-group",children:[Object(f.jsx)("label",{children:" Info"}),Object(f.jsx)("input",{type:"text",className:"form-control form-control-lg",placeholder:"Enter info description",name:"info",value:G,onChange:function(e){return P(e)}})]})]})]}),Object(f.jsx)("button",{className:"btn btn-primary btn-block",children:"Add question"})]})]}),Object(f.jsx)(m.a,{})]})}}}]);
//# sourceMappingURL=36.93c88868.chunk.js.map