(this["webpackJsonp@coreui/coreui-free-react-admin-template"]=this["webpackJsonp@coreui/coreui-free-react-admin-template"]||[]).push([[11,19],{623:function(e,t,n){"use strict";function a(){return(a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}n.d(t,"a",(function(){return a}))},624:function(e,t,n){"use strict";function a(e,t){if(null==e)return{};var n,a,r={},c=Object.keys(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}n.d(t,"a",(function(){return a}))},626:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));n(623);var a=n(1),r=n.n(a),c=r.a.createContext({});c.Consumer,c.Provider;function s(e,t){var n=Object(a.useContext)(c);return e||n[t]||t}},640:function(e,t,n){e.exports=n(381)},641:function(e,t,n){"use strict";function a(e,t,n,a,r,c,s){try{var i=e[c](s),o=i.value}catch(l){return void n(l)}i.done?t(o):Promise.resolve(o).then(a,r)}function r(e){return function(){var t=this,n=arguments;return new Promise((function(r,c){var s=e.apply(t,n);function i(e){a(s,r,c,i,o,"next",e)}function o(e){a(s,r,c,i,o,"throw",e)}i(void 0)}))}}n.d(t,"a",(function(){return r}))},661:function(e,t,n){"use strict";var a=n(623),r=n(624),c=n(1),s=n.n(c);var i=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return t.filter((function(e){return null!=e})).reduce((function(e,t){if("function"!==typeof t)throw new Error("Invalid Argument Type, must only provide functions, undefined, or null.");return null===e?t:function(){for(var n=arguments.length,a=new Array(n),r=0;r<n;r++)a[r]=arguments[r];e.apply(this,a),t.apply(this,a)}}),null)},o=["as","disabled","onKeyDown"];function l(e){return!e||"#"===e.trim()}var u=s.a.forwardRef((function(e,t){var n=e.as,c=void 0===n?"a":n,u=e.disabled,d=e.onKeyDown,b=Object(r.a)(e,o),m=function(e){var t=b.href,n=b.onClick;(u||l(t))&&e.preventDefault(),u?e.stopPropagation():n&&n(e)};return l(b.href)&&(b.role=b.role||"button",b.href=b.href||"#"),u&&(b.tabIndex=-1,b["aria-disabled"]=!0),s.a.createElement(c,Object(a.a)({ref:t},b,{onClick:m,onKeyDown:i((function(e){" "===e.key&&(e.preventDefault(),m(e))}),d)}))}));u.displayName="SafeAnchor";t.a=u},677:function(e,t,n){"use strict";n(1);var a=n(627),r=n(17),c=[{_tag:"CSidebarNavItem",name:"Dashboard",to:"/dashboard",icon:Object(r.jsx)(a.a,{name:"cil-speedometer",customClasses:"c-sidebar-nav-icon"}),badge:{color:"info",text:"NEW"}},{_tag:"CSidebarNavItem",name:"Customers",to:"/customerlist",icon:Object(r.jsx)(a.a,{name:"cil-speedometer",customClasses:"c-sidebar-nav-icon"})},{_tag:"CSidebarNavDropdown",name:"Pages",route:"/pages",icon:"cil-star",_children:[{_tag:"CSidebarNavItem",name:"Login",to:"/login"}]}];t.a=c},710:function(e,t,n){"use strict";var a=n(623),r=n(624),c=n(625),s=n.n(c),i=n(1),o=n.n(i),l=n(626),u=n(661),d=["bsPrefix","variant","size","active","className","block","type","as"],b=o.a.forwardRef((function(e,t){var n=e.bsPrefix,c=e.variant,i=e.size,b=e.active,m=e.className,j=e.block,f=e.type,p=e.as,h=Object(r.a)(e,d),O=Object(l.a)(n,"btn"),v=s()(m,O,b&&"active",c&&O+"-"+c,j&&O+"-block",i&&O+"-"+i);if(h.href)return o.a.createElement(u.a,Object(a.a)({},h,{as:p,ref:t,className:s()(v,h.disabled&&"disabled")}));t&&(h.ref=t),f?h.type=f:p||(h.type="button");var x=p||"button";return o.a.createElement(x,Object(a.a)({},h,{className:v}))}));b.displayName="Button",b.defaultProps={variant:"primary",active:!1,disabled:!1},t.a=b},733:function(e,t,n){"use strict";n.r(t);var a=n(1),r=(n(628),n(627),n(40),n(659),n(654)),c=n(17),s=(Object(r.getStyle)("success"),Object(r.getStyle)("info"),Object(r.getStyle)("danger"),Object(a.lazy)((function(){return Promise.all([n.e(1),n.e(17)]).then(n.bind(null,790))})));t.default=function(){return Object(c.jsx)(c.Fragment,{children:Object(c.jsx)(s,{})})}},786:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),c=n(40),s=n(20),i=n(628),o=(n(733),[{path:"/",exact:!0,name:"Home"},{path:"/dashboard",name:"Dashboard",component:r.a.lazy((function(){return Promise.resolve().then(n.bind(null,733))}))},{path:"/users",exact:!0,name:"Users",component:r.a.lazy((function(){return Promise.all([n.e(1),n.e(3),n.e(4),n.e(6),n.e(13)]).then(n.bind(null,767))}))},{path:"/customerlist",exact:!0,name:"Customerlist",component:r.a.lazy((function(){return Promise.all([n.e(1),n.e(3),n.e(4),n.e(6),n.e(15)]).then(n.bind(null,783))}))},{path:"/customer-details/:id",exact:!0,name:"CustomerDetails",component:r.a.lazy((function(){return Promise.all([n.e(1),n.e(3),n.e(4),n.e(14)]).then(n.bind(null,784))}))}]),l=n(17),u=Object(l.jsx)("div",{className:"pt-3 text-center",children:Object(l.jsx)("div",{className:"sk-spinner sk-spinner-pulse"})}),d=function(){return Object(l.jsx)("main",{className:"c-main",children:Object(l.jsx)(i.m,{fluid:!0,children:Object(l.jsx)(a.Suspense,{fallback:u,children:Object(l.jsxs)(s.d,{children:[o.map((function(e,t){return e.component&&Object(l.jsx)(s.b,{path:e.path,exact:e.exact,name:e.name,render:function(t){return Object(l.jsx)(i.s,{children:Object(l.jsx)(e.component,Object(c.a)({},t))})}},t)})),Object(l.jsx)(s.a,{from:"/",to:"/dashboard"})]})})})})},b=r.a.memo(d),m=function(){return Object(l.jsxs)(i.t,{fixed:!1,children:[Object(l.jsx)("div",{children:Object(l.jsx)("span",{className:"ml-1",children:"  Atpl & 2021 Reserved"})}),Object(l.jsxs)("div",{className:"mfs-auto",children:[Object(l.jsx)("span",{className:"mr-1",children:"Powered by"}),Object(l.jsx)("a",{target:"_blank",rel:"noopener noreferrer",children:"winklix internet pvt ltd"})]})]})},j=r.a.memo(m),f=n(163),p=n(627),h=function(){var e=Object(f.b)(),t=Object(f.c)((function(e){return e.sidebarShow}));return Object(l.jsxs)(i.v,{withSubheader:!0,children:[Object(l.jsx)(i.R,{inHeader:!0,className:"ml-md-3 d-lg-none",onClick:function(){var n=!![!1,"responsive"].includes(t)||"responsive";e({type:"set",sidebarShow:n})}}),Object(l.jsx)(i.R,{inHeader:!0,className:"ml-3 d-md-down-none",onClick:function(){var n=![!0,"responsive"].includes(t)&&"responsive";e({type:"set",sidebarShow:n})}}),Object(l.jsx)(i.w,{className:"mx-auto d-lg-none",to:"/",children:Object(l.jsx)(p.a,{name:"logo",height:"48",alt:"Logo"})}),Object(l.jsx)(i.x,{className:"d-md-down-none mr-auto"}),Object(l.jsx)(i.x,{className:"px-3",children:Object(l.jsx)(C,{})}),Object(l.jsx)(i.P,{className:"px-3 justify-content-between",children:Object(l.jsx)(i.d,{className:"border-0 c-subheader-nav m-0 px-0 px-md-3",routes:o})})]})},O=n(640),v=n.n(O),x=n(641),y=n(710),C=function(){var e=Object(s.g)(),t=function(){var t=Object(x.a)(v.a.mark((function t(n){return v.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:console.log("hiiiii"),localStorage.clear(),e.push("/");case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return Object(l.jsxs)(i.o,{inNav:!0,className:"c-header-nav-items mx-2",direction:"down",children:[Object(l.jsx)(i.r,{className:"c-header-nav-link",caret:!1,children:Object(l.jsx)("div",{className:"c-avatar",children:Object(l.jsx)(i.y,{src:"data:image/png;base64,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",className:"c-avatar-img",alt:"admin@bootstrapmaster.com"})})}),Object(l.jsxs)(i.q,{className:"pt-0",placement:"bottom-end",children:[Object(l.jsx)(i.p,{header:!0,tag:"div",color:"light",className:"text-center"}),Object(l.jsx)(i.p,{children:Object(l.jsx)(y.a,{className:"btn-logout",onClick:function(e){return t(e)},children:"log out"})})]})]})},w=n(677),N=function(){var e=Object(f.b)(),t=Object(f.c)((function(e){return e.sidebarShow}));return Object(l.jsxs)(i.H,{show:t,onShowChange:function(t){return e({type:"set",sidebarShow:t})},children:[Object(l.jsx)(i.I,{className:"d-md-down-none",to:"/"}),Object(l.jsx)(i.K,{children:Object(l.jsx)(i.n,{items:w.a,components:{CSidebarNavDivider:i.L,CSidebarNavDropdown:i.M,CSidebarNavItem:i.N,CSidebarNavTitle:i.O}})}),Object(l.jsx)(i.J,{className:"c-d-md-down-none"})]})},g=r.a.memo(N);t.default=function(){return Object(l.jsxs)("div",{className:"c-app c-default-layout",children:[Object(l.jsx)(g,{}),Object(l.jsxs)("div",{className:"c-wrapper",children:[Object(l.jsx)(h,{}),Object(l.jsx)("div",{className:"c-body",children:Object(l.jsx)(b,{})}),Object(l.jsx)(j,{})]})]})}}}]);
//# sourceMappingURL=11.ee8ff468.chunk.js.map