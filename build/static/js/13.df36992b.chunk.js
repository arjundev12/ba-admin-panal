(this["webpackJsonp@coreui/coreui-free-react-admin-template"]=this["webpackJsonp@coreui/coreui-free-react-admin-template"]||[]).push([[13],{1010:function(e,t,n){"use strict";var r=n(624),a=n(627),o=n(1),i=n.n(o),c=n(59),l=n.n(c),u=n(833),s=n(723),f=n(741),d=["title","children","bsPrefix","rootCloseEvent","variant","size","menuAlign","menuRole","renderMenuOnMount","disabled","href","id"],b={id:l.a.any,href:l.a.string,onClick:l.a.func,title:l.a.node.isRequired,disabled:l.a.bool,menuAlign:f.a,menuRole:l.a.string,renderMenuOnMount:l.a.bool,rootCloseEvent:l.a.string,bsPrefix:l.a.string,variant:l.a.string,size:l.a.string},v=i.a.forwardRef((function(e,t){var n=e.title,o=e.children,c=e.bsPrefix,l=e.rootCloseEvent,b=e.variant,v=e.size,p=e.menuAlign,m=e.menuRole,O=e.renderMenuOnMount,g=e.disabled,h=e.href,j=e.id,y=Object(a.a)(e,d);return i.a.createElement(u.a,Object(r.a)({ref:t},y),i.a.createElement(s.a,{id:j,href:h,size:v,variant:b,disabled:g,childBsPrefix:c},n),i.a.createElement(f.b,{align:p,role:m,renderOnMount:O,rootCloseEvent:l},o))}));v.displayName="DropdownButton",v.propTypes=b,t.a=v},1012:function(e,t,n){"use strict";var r=n(839),a=n(1),o=n.n(a),i=n(725),c=n(727),l=n(728),u=function(e){function t(){return e.apply(this,arguments)||this}return Object(r.a)(t,e),t.prototype.render=function(){throw new Error("ReactBootstrap: The `Tab` component is not meant to be rendered! It's an abstract component that is only valid as a direct Child of the `Tabs` Component. For custom tabs components use TabPane and TabsContainer directly")},t}(o.a.Component);u.Container=i.a,u.Content=c.a,u.Pane=l.a,t.a=u},1474:function(e,t,n){"use strict";var r=n(624),a=n(627),o=n(1),i=n.n(o),c=(n(724),n(667)),l=n(628),u=n.n(l),s=(n(726),n(630)),f=n(719),d=i.a.createContext(null);d.displayName="CardContext";var b=d,v=n(792),p=n(721),m=n(676),O=n(689),g=n(655),h=n(690),j=["as","onSelect","activeKey","role","onKeyDown"],y=function(){},E=i.a.forwardRef((function(e,t){var n,c,l=e.as,u=void 0===l?"ul":l,s=e.onSelect,f=e.activeKey,d=e.role,b=e.onKeyDown,E=Object(a.a)(e,j),w=Object(p.a)(),x=Object(o.useRef)(!1),C=Object(o.useContext)(g.a),P=Object(o.useContext)(h.a);P&&(d=d||"tablist",f=P.activeKey,n=P.getControlledId,c=P.getControllerId);var N=Object(o.useRef)(null),S=function(e){var t=N.current;if(!t)return null;var n=Object(v.a)(t,"[data-rb-event-key]:not(.disabled)"),r=t.querySelector(".active");if(!r)return null;var a=n.indexOf(r);if(-1===a)return null;var o=a+e;return o>=n.length&&(o=0),o<0&&(o=n.length-1),n[o]},k=function(e,t){null!=e&&(s&&s(e,t),C&&C(e,t))};Object(o.useEffect)((function(){if(N.current&&x.current){var e=N.current.querySelector("[data-rb-event-key].active");e&&e.focus()}x.current=!1}));var R=Object(m.a)(t,N);return i.a.createElement(g.a.Provider,{value:k},i.a.createElement(O.a.Provider,{value:{role:d,activeKey:Object(g.b)(f),getControlledId:n||y,getControllerId:c||y}},i.a.createElement(u,Object(r.a)({},E,{onKeyDown:function(e){var t;switch(b&&b(e),e.key){case"ArrowLeft":case"ArrowUp":t=S(-1);break;case"ArrowRight":case"ArrowDown":t=S(1);break;default:return}t&&(e.preventDefault(),k(t.dataset.rbEventKey,e),x.current=!0,w())},ref:R,role:d}))))})),w=["bsPrefix","className","children","as"],x=i.a.forwardRef((function(e,t){var n=e.bsPrefix,o=e.className,c=e.children,l=e.as,f=void 0===l?"div":l,d=Object(a.a)(e,w);return n=Object(s.a)(n,"nav-item"),i.a.createElement(f,Object(r.a)({},d,{ref:t,className:u()(o,n)}),c)}));x.displayName="NavItem";var C=x,P=n(743),N=n(651),S=(n(677),["active","className","eventKey","onSelect","onClick","as"]),k=i.a.forwardRef((function(e,t){var n=e.active,c=e.className,l=e.eventKey,s=e.onSelect,f=e.onClick,d=e.as,b=Object(a.a)(e,S),v=Object(g.b)(l,b.href),p=Object(o.useContext)(g.a),m=Object(o.useContext)(O.a),h=n;if(m){b.role||"tablist"!==m.role||(b.role="tab");var j=m.getControllerId(v),y=m.getControlledId(v);b["data-rb-event-key"]=v,b.id=j||b.id,b["aria-controls"]=y||b["aria-controls"],h=null==n&&null!=v?m.activeKey===v:n}"tab"===b.role&&(b.disabled&&(b.tabIndex=-1,b["aria-disabled"]=!0),b["aria-selected"]=h);var E=Object(N.a)((function(e){f&&f(e),null!=v&&(s&&s(v,e),p&&p(v,e))}));return i.a.createElement(d,Object(r.a)({},b,{ref:t,onClick:E,className:u()(c,h&&"active")}))}));k.defaultProps={disabled:!1};var R=k,K=["bsPrefix","disabled","className","href","eventKey","onSelect","as"],M={disabled:!1,as:P.a},T=i.a.forwardRef((function(e,t){var n=e.bsPrefix,o=e.disabled,c=e.className,l=e.href,f=e.eventKey,d=e.onSelect,b=e.as,v=Object(a.a)(e,K);return n=Object(s.a)(n,"nav-link"),i.a.createElement(R,Object(r.a)({},v,{href:l,ref:t,eventKey:f,as:b,disabled:o,onSelect:d,className:u()(c,n,o&&"disabled")}))}));T.displayName="NavLink",T.defaultProps=M;var D=T,I=["as","bsPrefix","variant","fill","justify","navbar","navbarScroll","className","children","activeKey"],A=i.a.forwardRef((function(e,t){var n,l,d,v=Object(c.a)(e,{activeKey:"onSelect"}),p=v.as,m=void 0===p?"div":p,O=v.bsPrefix,g=v.variant,h=v.fill,j=v.justify,y=v.navbar,w=v.navbarScroll,x=v.className,C=v.children,P=v.activeKey,N=Object(a.a)(v,I),S=Object(s.a)(O,"nav"),k=!1,R=Object(o.useContext)(f.a),K=Object(o.useContext)(b);return R?(l=R.bsPrefix,k=null==y||y):K&&(d=K.cardHeaderBsPrefix),i.a.createElement(E,Object(r.a)({as:m,ref:t,activeKey:P,className:u()(x,(n={},n[S]=!k,n[l+"-nav"]=k,n[l+"-nav-scroll"]=k&&w,n[d+"-"+g]=!!d,n[S+"-"+g]=!!g,n[S+"-fill"]=h,n[S+"-justified"]=j,n))},N),C)}));A.displayName="Nav",A.defaultProps={justify:!1,fill:!1},A.Item=C,A.Link=D;var F=A,_=n(725),L=n(727),q=n(728);function B(e,t){var n=0;return i.a.Children.map(e,(function(e){return i.a.isValidElement(e)?t(e,n++):e}))}var U=["id","onSelect","transition","mountOnEnter","unmountOnExit","children","activeKey"];function z(e){var t;return function(e,t){var n=0;i.a.Children.forEach(e,(function(e){i.a.isValidElement(e)&&t(e,n++)}))}(e,(function(e){null==t&&(t=e.props.eventKey)})),t}function V(e){var t=e.props,n=t.title,r=t.eventKey,a=t.disabled,o=t.tabClassName,c=t.id;return null==n?null:i.a.createElement(C,{as:D,eventKey:r,disabled:a,id:c,className:o},n)}var W=function(e){var t=Object(c.a)(e,{activeKey:"onSelect"}),n=t.id,o=t.onSelect,l=t.transition,u=t.mountOnEnter,s=t.unmountOnExit,f=t.children,d=t.activeKey,b=void 0===d?z(f):d,v=Object(a.a)(t,U);return i.a.createElement(_.a,{id:n,activeKey:b,onSelect:o,transition:l,mountOnEnter:u,unmountOnExit:s},i.a.createElement(F,Object(r.a)({},v,{role:"tablist",as:"nav"}),B(f,V)),i.a.createElement(L.a,null,B(f,(function(e){var t=Object(r.a)({},e.props);return delete t.title,delete t.disabled,delete t.tabClassName,i.a.createElement(q.a,t)}))))};W.defaultProps={variant:"tabs",mountOnEnter:!1,unmountOnExit:!1},W.displayName="Tabs";t.a=W},655:function(e,t,n){"use strict";n.d(t,"b",(function(){return o}));var r=n(1),a=n.n(r).a.createContext(null),o=function(e,t){return void 0===t&&(t=null),null!=e?String(e):t||null};t.a=a},667:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return l}));var r=n(13),a=n(30),o=n(1);n(688);function i(e){return"default"+e.charAt(0).toUpperCase()+e.substr(1)}function c(e){var t=function(e,t){if("object"!==typeof e||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,t||"default");if("object"!==typeof r)return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===typeof t?t:String(t)}function l(e,t,n){var r=Object(o.useRef)(void 0!==e),a=Object(o.useState)(t),i=a[0],c=a[1],l=void 0!==e,u=r.current;return r.current=l,!l&&u&&i!==t&&c(t),[l?e:i,Object(o.useCallback)((function(e){for(var t=arguments.length,r=new Array(t>1?t-1:0),a=1;a<t;a++)r[a-1]=arguments[a];n&&n.apply(void 0,[e].concat(r)),c(e)}),[n])]}function u(e,t){return Object.keys(t).reduce((function(n,o){var u,s=n,f=s[i(o)],d=s[o],b=Object(a.a)(s,[i(o),o].map(c)),v=t[o],p=l(d,f,e[v]),m=p[0],O=p[1];return Object(r.a)({},b,((u={})[o]=m,u[v]=O,u))}),e)}n(35);function s(){var e=this.constructor.getDerivedStateFromProps(this.props,this.state);null!==e&&void 0!==e&&this.setState(e)}function f(e){this.setState(function(t){var n=this.constructor.getDerivedStateFromProps(e,t);return null!==n&&void 0!==n?n:null}.bind(this))}function d(e,t){try{var n=this.props,r=this.state;this.props=e,this.state=t,this.__reactInternalSnapshotFlag=!0,this.__reactInternalSnapshot=this.getSnapshotBeforeUpdate(n,r)}finally{this.props=n,this.state=r}}s.__suppressDeprecationWarning=!0,f.__suppressDeprecationWarning=!0,d.__suppressDeprecationWarning=!0},676:function(e,t,n){"use strict";var r=n(1),a=function(e){return e&&"function"!==typeof e?function(t){e.current=t}:e};t.a=function(e,t){return Object(r.useMemo)((function(){return function(e,t){var n=a(e),r=a(t);return function(e){n&&n(e),r&&r(e)}}(e,t)}),[e,t])}},687:function(e,t,n){"use strict";var r=n(1),a=n.n(r).a.createContext(null);t.a=a},688:function(e,t,n){"use strict";e.exports=function(e,t,n,r,a,o,i,c){if(!e){var l;if(void 0===t)l=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var u=[n,r,a,o,i,c],s=0;(l=new Error(t.replace(/%s/g,(function(){return u[s++]})))).name="Invariant Violation"}throw l.framesToPop=1,l}}},689:function(e,t,n){"use strict";var r=n(1),a=n.n(r).a.createContext(null);a.displayName="NavContext",t.a=a},690:function(e,t,n){"use strict";var r=n(1),a=n.n(r).a.createContext(null);t.a=a},719:function(e,t,n){"use strict";var r=n(1),a=n.n(r).a.createContext(null);a.displayName="NavbarContext",t.a=a},720:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));n(688),n(1),n(676);function r(e,t){return e}},721:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var r=n(1);function a(){return Object(r.useReducer)((function(e){return!e}),!1)[1]}},722:function(e,t,n){"use strict";n.d(t,"b",(function(){return u}));var r=n(59),a=n.n(r),o=n(1),i=n.n(o),c=n(687),l=function(){};function u(){var e=Object(o.useContext)(c.a)||{},t=e.show,n=void 0!==t&&t,r=e.toggle,a=void 0===r?l:r,i=e.setToggle,u=Object(o.useCallback)((function(e){a(!n,e)}),[n,a]);return[{ref:i||l,onClick:u,"aria-haspopup":!0,"aria-expanded":!!n},{show:n,toggle:a}]}var s={children:a.a.func.isRequired};function f(e){var t=e.children,n=u(),r=n[0],a=n[1];return i.a.createElement(i.a.Fragment,null,t(r,a))}f.displayName="ReactOverlaysDropdownToggle",f.propTypes=s,t.a=f},723:function(e,t,n){"use strict";var r=n(624),a=n(627),o=n(628),i=n.n(o),c=(n(724),n(1)),l=n.n(c),u=n(722),s=n(676),f=n(851),d=n(630),b=n(720),v=["bsPrefix","split","className","childBsPrefix","as"],p=l.a.forwardRef((function(e,t){var n=e.bsPrefix,o=e.split,c=e.className,p=e.childBsPrefix,m=e.as,O=void 0===m?f.a:m,g=Object(a.a)(e,v),h=Object(d.a)(n,"dropdown-toggle");void 0!==p&&(g.bsPrefix=p);var j=Object(u.b)()[0];return j.ref=Object(s.a)(j.ref,Object(b.a)(t,"DropdownToggle")),l.a.createElement(O,Object(r.a)({className:i()(c,h,o&&h+"-split")},j,g))}));p.displayName="DropdownToggle",t.a=p},724:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return function(t,n,r,a,o){var i=r||"<<anonymous>>",c=o||n;if(null==t[n])return new Error("The "+a+" `"+c+"` is required to make `"+i+"` accessible for users of assistive technologies such as screen readers.");for(var l=arguments.length,u=Array(l>5?l-5:0),s=5;s<l;s++)u[s-5]=arguments[s];return e.apply(void 0,[t,n,r,a,o].concat(u))}},e.exports=t.default},725:function(e,t,n){"use strict";var r=n(1),a=n.n(r),o=n(667),i=n(690),c=n(655);t.a=function(e){var t=Object(o.a)(e,{activeKey:"onSelect"}),n=t.id,l=t.generateChildId,u=t.onSelect,s=t.activeKey,f=t.transition,d=t.mountOnEnter,b=t.unmountOnExit,v=t.children,p=Object(r.useMemo)((function(){return l||function(e,t){return n?n+"-"+t+"-"+e:null}}),[n,l]),m=Object(r.useMemo)((function(){return{onSelect:u,activeKey:s,transition:f,mountOnEnter:d||!1,unmountOnExit:b||!1,getControlledId:function(e){return p(e,"tabpane")},getControllerId:function(e){return p(e,"tab")}}}),[u,s,f,d,b,p]);return a.a.createElement(i.a.Provider,{value:m},a.a.createElement(c.a.Provider,{value:u||null},v))}},727:function(e,t,n){"use strict";var r=n(624),a=n(627),o=n(628),i=n.n(o),c=n(1),l=n.n(c),u=n(630),s=["bsPrefix","as","className"],f=l.a.forwardRef((function(e,t){var n=e.bsPrefix,o=e.as,c=void 0===o?"div":o,f=e.className,d=Object(a.a)(e,s),b=Object(u.a)(n,"tab-content");return l.a.createElement(c,Object(r.a)({ref:t},d,{className:i()(f,b)}))}));t.a=f},728:function(e,t,n){"use strict";var r=n(624),a=n(627),o=n(628),i=n.n(o),c=n(1),l=n.n(c),u=n(630),s=n(690),f=n(655),d=n(837),b=["activeKey","getControlledId","getControllerId"],v=["bsPrefix","className","active","onEnter","onEntering","onEntered","onExit","onExiting","onExited","mountOnEnter","unmountOnExit","transition","as","eventKey"];var p=l.a.forwardRef((function(e,t){var n=function(e){var t=Object(c.useContext)(s.a);if(!t)return e;var n=t.activeKey,o=t.getControlledId,i=t.getControllerId,l=Object(a.a)(t,b),u=!1!==e.transition&&!1!==l.transition,v=Object(f.b)(e.eventKey);return Object(r.a)({},e,{active:null==e.active&&null!=v?Object(f.b)(n)===v:e.active,id:o(e.eventKey),"aria-labelledby":i(e.eventKey),transition:u&&(e.transition||l.transition||d.a),mountOnEnter:null!=e.mountOnEnter?e.mountOnEnter:l.mountOnEnter,unmountOnExit:null!=e.unmountOnExit?e.unmountOnExit:l.unmountOnExit})}(e),o=n.bsPrefix,p=n.className,m=n.active,O=n.onEnter,g=n.onEntering,h=n.onEntered,j=n.onExit,y=n.onExiting,E=n.onExited,w=n.mountOnEnter,x=n.unmountOnExit,C=n.transition,P=n.as,N=void 0===P?"div":P,S=(n.eventKey,Object(a.a)(n,v)),k=Object(u.a)(o,"tab-pane");if(!m&&!C&&x)return null;var R=l.a.createElement(N,Object(r.a)({},S,{ref:t,role:"tabpanel","aria-hidden":!m,className:i()(p,k,{active:m})}));return C&&(R=l.a.createElement(C,{in:m,onEnter:O,onEntering:g,onEntered:h,onExit:j,onExiting:y,onExited:E,mountOnEnter:w,unmountOnExit:x},R)),l.a.createElement(s.a.Provider,{value:null},l.a.createElement(f.a.Provider,{value:null},R))}));p.displayName="TabPane",t.a=p},740:function(e,t,n){"use strict";n.d(t,"b",(function(){return U}));var r=n(30),a=n(13),o=n(59),i=n.n(o),c=n(1),l=n.n(c),u=n(785),s=n(687),f=n(786);var d=function(e){var t=Object(f.a)();return[e[0],Object(c.useCallback)((function(n){if(t())return e[1](n)}),[t,e[1]])]},b=n(779),v=n(773),p=n(770),m=n(836),O=n(780),g=n(774),h=n(771),j=n(840),y=n(973),E=Object(y.a)({defaultModifiers:[O.a,h.a,v.a,p.a,g.a,m.a,j.a,b.a]}),w=function(e){return{position:e,top:"0",left:"0",opacity:"0",pointerEvents:"none"}},x={name:"applyStyles",enabled:!1},C={name:"ariaDescribedBy",enabled:!0,phase:"afterWrite",effect:function(e){var t=e.state;return function(){var e=t.elements,n=e.reference,r=e.popper;if("removeAttribute"in n){var a=(n.getAttribute("aria-describedby")||"").split(",").filter((function(e){return e.trim()!==r.id}));a.length?n.setAttribute("aria-describedby",a.join(",")):n.removeAttribute("aria-describedby")}}},fn:function(e){var t,n=e.state.elements,r=n.popper,a=n.reference,o=null==(t=r.getAttribute("role"))?void 0:t.toLowerCase();if(r.id&&"tooltip"===o&&"setAttribute"in a){var i=a.getAttribute("aria-describedby");if(i&&-1!==i.split(",").indexOf(r.id))return;a.setAttribute("aria-describedby",i?i+","+r.id:r.id)}}},P=[];var N=function(e,t,n){var o=void 0===n?{}:n,i=o.enabled,l=void 0===i||i,u=o.placement,s=void 0===u?"bottom":u,f=o.strategy,b=void 0===f?"absolute":f,v=o.modifiers,p=void 0===v?P:v,m=Object(r.a)(o,["enabled","placement","strategy","modifiers"]),O=Object(c.useRef)(),g=Object(c.useCallback)((function(){var e;null==(e=O.current)||e.update()}),[]),h=Object(c.useCallback)((function(){var e;null==(e=O.current)||e.forceUpdate()}),[]),j=d(Object(c.useState)({placement:s,update:g,forceUpdate:h,attributes:{},styles:{popper:w(b),arrow:{}}})),y=j[0],N=j[1],S=Object(c.useMemo)((function(){return{name:"updateStateModifier",enabled:!0,phase:"write",requires:["computeStyles"],fn:function(e){var t=e.state,n={},r={};Object.keys(t.elements).forEach((function(e){n[e]=t.styles[e],r[e]=t.attributes[e]})),N({state:t,styles:n,attributes:r,update:g,forceUpdate:h,placement:t.placement})}}}),[g,h,N]);return Object(c.useEffect)((function(){O.current&&l&&O.current.setOptions({placement:s,strategy:b,modifiers:[].concat(p,[S,x])})}),[b,s,S,l]),Object(c.useEffect)((function(){if(l&&null!=e&&null!=t)return O.current=E(e,t,Object(a.a)({},m,{placement:s,strategy:b,modifiers:[].concat(p,[C,S])})),function(){null!=O.current&&(O.current.destroy(),O.current=void 0,N((function(e){return Object(a.a)({},e,{attributes:{},styles:{popper:w(b)}})})))}}),[l,e,t]),y},S=n(787),k=n(838),R=n(651),K=n(677),M=n.n(K),T=n(698),D=n(86),I=n.n(D);var A=function(e){return Object(T.a)(function(e){return e&&"setState"in e?I.a.findDOMNode(e):null!=e?e:null}(e))},F=function(){};var _=function(e){return e&&("current"in e?e.current:e)};var L=function(e,t,n){var r=void 0===n?{}:n,a=r.disabled,o=r.clickTrigger,i=void 0===o?"click":o,l=Object(c.useRef)(!1),u=t||F,s=Object(c.useCallback)((function(t){var n,r=_(e);M()(!!r,"RootClose captured a close event but does not have a ref to compare it to. useRootClose(), should be passed a ref that resolves to a DOM node"),l.current=!r||!!((n=t).metaKey||n.altKey||n.ctrlKey||n.shiftKey)||!function(e){return 0===e.button}(t)||!!Object(S.a)(r,t.target)}),[e]),f=Object(R.a)((function(e){l.current||u(e)})),d=Object(R.a)((function(e){27===e.keyCode&&u(e)}));Object(c.useEffect)((function(){if(!a&&null!=e){var t=window.event,n=A(_(e)),r=Object(k.a)(n,i,s,!0),o=Object(k.a)(n,i,(function(e){e!==t?f(e):t=void 0})),c=Object(k.a)(n,"keyup",(function(e){e!==t?d(e):t=void 0})),l=[];return"ontouchstart"in n.documentElement&&(l=[].slice.call(n.body.children).map((function(e){return Object(k.a)(e,"mousemove",F)}))),function(){r(),o(),c(),l.forEach((function(e){return e()}))}}}),[e,a,i,s,f,d])};function q(e){var t,n,r,o,i,c=e.enabled,l=e.enableEvents,u=e.placement,s=e.flip,f=e.offset,d=e.fixed,b=e.containerPadding,v=e.arrowElement,p=e.popperConfig,m=void 0===p?{}:p,O=function(e){var t={};return Array.isArray(e)?(null==e||e.forEach((function(e){t[e.name]=e})),t):e||t}(m.modifiers);return Object(a.a)({},m,{placement:u,enabled:c,strategy:d?"fixed":m.strategy,modifiers:(i=Object(a.a)({},O,{eventListeners:{enabled:l},preventOverflow:Object(a.a)({},O.preventOverflow,{options:b?Object(a.a)({padding:b},null==(t=O.preventOverflow)?void 0:t.options):null==(n=O.preventOverflow)?void 0:n.options}),offset:{options:Object(a.a)({offset:f},null==(r=O.offset)?void 0:r.options)},arrow:Object(a.a)({},O.arrow,{enabled:!!v,options:Object(a.a)({},null==(o=O.arrow)?void 0:o.options,{element:v})}),flip:Object(a.a)({enabled:!!s},O.flip)}),void 0===i&&(i={}),Array.isArray(i)?i:Object.keys(i).map((function(e){return i[e].name=e,i[e]})))})}var B=function(){};function U(e){void 0===e&&(e={});var t=Object(c.useContext)(s.a),n=Object(u.a)(),r=n[0],o=n[1],i=Object(c.useRef)(!1),l=e,f=l.flip,d=l.offset,b=l.rootCloseEvent,v=l.fixed,p=void 0!==v&&v,m=l.popperConfig,O=void 0===m?{}:m,g=l.usePopper,h=void 0===g?!!t:g,j=null==(null==t?void 0:t.show)?!!e.show:t.show,y=null==(null==t?void 0:t.alignEnd)?e.alignEnd:t.alignEnd;j&&!i.current&&(i.current=!0);var E=t||{},w=E.drop,x=E.setMenu,C=E.menuElement,P=E.toggleElement,S=y?"bottom-end":"bottom-start";"up"===w?S=y?"top-end":"top-start":"right"===w?S=y?"right-end":"right-start":"left"===w&&(S=y?"left-end":"left-start");var k=N(P,C,q({placement:S,enabled:!(!h||!j),enableEvents:j,offset:d,flip:f,fixed:p,arrowElement:r,popperConfig:O})),R=Object(a.a)({ref:x||B,"aria-labelledby":null==P?void 0:P.id},k.attributes.popper,{style:k.styles.popper}),K={show:j,alignEnd:y,hasShown:i.current,toggle:null==t?void 0:t.toggle,popper:h?k:null,arrowProps:h?Object(a.a)({ref:o},k.attributes.arrow,{style:k.styles.arrow}):{}};return L(C,(function(e){null==t||t.toggle(!1,e)}),{clickTrigger:b,disabled:!j}),[R,K]}var z={children:i.a.func.isRequired,show:i.a.bool,alignEnd:i.a.bool,flip:i.a.bool,usePopper:i.a.oneOf([!0,!1]),popperConfig:i.a.object,rootCloseEvent:i.a.string};function V(e){var t=e.children,n=U(Object(r.a)(e,["children"])),a=n[0],o=n[1];return l.a.createElement(l.a.Fragment,null,o.hasShown?t(a,o):null)}V.displayName="ReactOverlaysDropdownMenu",V.propTypes=z,V.defaultProps={usePopper:!0};t.a=V},741:function(e,t,n){"use strict";n.d(t,"a",(function(){return j}));var r=n(624),a=n(627),o=n(628),i=n.n(o),c=n(59),l=n.n(c),u=n(1),s=n.n(u),f=n(740),d=n(676),b=(n(677),n(719)),v=n(630),p=n(720);function m(e,t){return e.classList?!!t&&e.classList.contains(t):-1!==(" "+(e.className.baseVal||e.className)+" ").indexOf(" "+t+" ")}function O(e){var t=window.getComputedStyle(e);return{top:parseFloat(t.marginTop)||0,right:parseFloat(t.marginRight)||0,bottom:parseFloat(t.marginBottom)||0,left:parseFloat(t.marginLeft)||0}}var g=["bsPrefix","className","align","alignRight","rootCloseEvent","flip","show","renderOnMount","as","popperConfig"],h=l.a.oneOf(["left","right"]),j=l.a.oneOfType([h,l.a.shape({sm:h}),l.a.shape({md:h}),l.a.shape({lg:h}),l.a.shape({xl:h})]),y=s.a.forwardRef((function(e,t){var n=e.bsPrefix,o=e.className,c=e.align,l=e.alignRight,h=e.rootCloseEvent,j=e.flip,y=e.show,E=e.renderOnMount,w=e.as,x=void 0===w?"div":w,C=e.popperConfig,P=Object(a.a)(e,g),N=Object(u.useContext)(b.a),S=Object(v.a)(n,"dropdown-menu"),k=function(){var e=Object(u.useRef)(null),t=Object(u.useRef)(null),n=Object(u.useRef)(null),r=Object(v.a)(void 0,"popover"),a=Object(v.a)(void 0,"dropdown-menu");return[Object(u.useCallback)((function(n){n&&(m(n,r)||m(n,a))&&(t.current=O(n),n.style.margin="0",e.current=n)}),[r,a]),[Object(u.useMemo)((function(){return{name:"offset",options:{offset:function(e){var n=e.placement;if(!t.current)return[0,0];var r=t.current,a=r.top,o=r.left,i=r.bottom,c=r.right;switch(n.split("-")[0]){case"top":return[0,i];case"left":return[0,c];case"bottom":return[0,a];case"right":return[0,o];default:return[0,0]}}}}}),[t]),Object(u.useMemo)((function(){return{name:"arrow",options:{padding:function(){if(!n.current)return 0;var e=n.current,t=e.top,r=e.right,a=t||r;return{top:a,left:a,right:a,bottom:a}}}}}),[n]),Object(u.useMemo)((function(){return{name:"popoverArrowMargins",enabled:!0,phase:"main",requiresIfExists:["arrow"],effect:function(t){var a=t.state;if(e.current&&a.elements.arrow&&m(e.current,r)){if(a.modifiersData["arrow#persistent"]){var o=O(a.elements.arrow),i=o.top,c=o.right,l=i||c;a.modifiersData["arrow#persistent"].padding={top:l,left:l,right:l,bottom:l}}else n.current=O(a.elements.arrow);return a.elements.arrow.style.margin="0",function(){a.elements.arrow&&(a.elements.arrow.style.margin="")}}}}}),[r])]]}(),R=k[0],K=k[1],M=[];if(c)if("object"===typeof c){var T=Object.keys(c);if(T.length){var D=T[0],I=c[D];l="left"===I,M.push(S+"-"+D+"-"+I)}}else"right"===c&&(l=!0);var A=Object(f.b)({flip:j,rootCloseEvent:h,show:y,alignEnd:l,usePopper:!N&&0===M.length,popperConfig:Object(r.a)({},C,{modifiers:K.concat((null==C?void 0:C.modifiers)||[])})}),F=A[0],_=A[1],L=_.hasShown,q=_.popper,B=_.show,U=_.alignEnd,z=_.toggle;if(F.ref=Object(d.a)(R,Object(d.a)(Object(p.a)(t,"DropdownMenu"),F.ref)),!L&&!E)return null;"string"!==typeof x&&(F.show=B,F.close=function(){return null==z?void 0:z(!1)},F.alignRight=U);var V=P.style;return null!=q&&q.placement&&(V=Object(r.a)({},P.style,F.style),P["x-placement"]=q.placement),s.a.createElement(x,Object(r.a)({},P,F,{style:V,className:i.a.apply(void 0,[o,S,B&&"show",U&&S+"-right"].concat(M))}))}));y.displayName="DropdownMenu",y.defaultProps={align:"left",alignRight:!1,flip:!0};t.b=y},833:function(e,t,n){"use strict";var r,a=n(624),o=n(627),i=n(628),c=n.n(i),l=n(1),u=n.n(l);var s=Function.prototype.bind.call(Function.prototype.call,[].slice);function f(e,t){return s(e.querySelectorAll(t))}var d=n(788),b=n(59),v=n.n(b),p=n(667),m=n(790),O=n(721),g=n(651);function h(e,t,n){return void 0===n&&(n=!1),function(e,t,n,r){void 0===r&&(r=!1);var a=Object(g.a)(n);Object(l.useEffect)((function(){var n="function"===typeof e?e():e;return n.addEventListener(t,a,r),function(){return n.removeEventListener(t,a,r)}}),[e])}(Object(l.useCallback)((function(){return document}),[]),e,t,n)}var j=n(687),y=n(740),E=n(722),w={children:v.a.node,drop:v.a.oneOf(["up","left","right","down"]),focusFirstItemOnShow:v.a.oneOf([!1,!0,"keyboard"]),itemSelector:v.a.string,alignEnd:v.a.bool,show:v.a.bool,defaultShow:v.a.bool,onToggle:v.a.func};function x(){var e=Object(O.a)(),t=Object(l.useRef)(null),n=Object(l.useCallback)((function(n){t.current=n,e()}),[e]);return[t,n]}function C(e){var t=e.drop,n=e.alignEnd,a=e.defaultShow,o=e.show,i=e.onToggle,c=e.itemSelector,s=void 0===c?"* > *":c,b=e.focusFirstItemOnShow,v=e.children,O=Object(p.b)(o,a,i),y=O[0],E=O[1],w=x(),C=w[0],P=w[1],N=C.current,S=x(),k=S[0],R=S[1],K=k.current,M=Object(m.a)(y),T=Object(l.useRef)(null),D=Object(l.useRef)(!1),I=Object(l.useCallback)((function(e,t){E(e,t)}),[E]),A=Object(l.useMemo)((function(){return{toggle:I,drop:t,show:y,alignEnd:n,menuElement:N,toggleElement:K,setMenu:P,setToggle:R}}),[I,t,y,n,N,K,P,R]);N&&M&&!y&&(D.current=N.contains(document.activeElement));var F=Object(g.a)((function(){K&&K.focus&&K.focus()})),_=Object(g.a)((function(){var e=T.current,t=b;if(null==t&&(t=!(!C.current||!function(e,t){if(!r){var n=document.body,a=n.matches||n.matchesSelector||n.webkitMatchesSelector||n.mozMatchesSelector||n.msMatchesSelector;r=function(e,t){return a.call(e,t)}}return r(e,t)}(C.current,"[role=menu]"))&&"keyboard"),!1!==t&&("keyboard"!==t||/^key.+$/.test(e))){var n=f(C.current,s)[0];n&&n.focus&&n.focus()}}));Object(l.useEffect)((function(){y?_():D.current&&(D.current=!1,F())}),[y,D,F,_]),Object(l.useEffect)((function(){T.current=null}));var L=function(e,t){if(!C.current)return null;var n=f(C.current,s),r=n.indexOf(e)+t;return n[r=Math.max(0,Math.min(r,n.length))]};return h("keydown",(function(e){var t,n,r=e.key,a=e.target,o=null==(t=C.current)?void 0:t.contains(a),i=null==(n=k.current)?void 0:n.contains(a);if((!/input|textarea/i.test(a.tagName)||!(" "===r||"Escape"!==r&&o))&&(o||i)&&(C.current||"Tab"!==r))switch(T.current=e.type,r){case"ArrowUp":var c=L(a,-1);return c&&c.focus&&c.focus(),void e.preventDefault();case"ArrowDown":if(e.preventDefault(),y){var l=L(a,1);l&&l.focus&&l.focus()}else E(!0,e);return;case"Tab":Object(d.a)(document,"keyup",(function(t){var n;("Tab"!==t.key||t.target)&&null!=(n=C.current)&&n.contains(t.target)||E(!1,e)}),{once:!0});break;case"Escape":e.preventDefault(),e.stopPropagation(),E(!1,e)}})),u.a.createElement(j.a.Provider,{value:A},v)}C.displayName="ReactOverlaysDropdown",C.propTypes=w,C.Menu=y.a,C.Toggle=E.a;var P=C,N=n(655),S=n(630),k=n(689),R=n(743),K=["bsPrefix","className","children","eventKey","disabled","href","onClick","onSelect","active","as"],M={as:R.a,disabled:!1},T=u.a.forwardRef((function(e,t){var n=e.bsPrefix,r=e.className,i=e.children,s=e.eventKey,f=e.disabled,d=e.href,b=e.onClick,v=e.onSelect,p=e.active,m=e.as,O=Object(o.a)(e,K),h=Object(S.a)(n,"dropdown-item"),j=Object(l.useContext)(N.a),y=(Object(l.useContext)(k.a)||{}).activeKey,E=Object(N.b)(s,d),w=null==p&&null!=E?Object(N.b)(y)===E:p,x=Object(g.a)((function(e){f||(b&&b(e),j&&j(E,e),v&&v(E,e))}));return u.a.createElement(m,Object(a.a)({},O,{ref:t,href:d,disabled:f,className:c()(r,h,w&&"active",f&&"disabled"),onClick:x}),i)}));T.displayName="DropdownItem",T.defaultProps=M;var D=T,I=n(741),A=n(723),F=n(714),_=["bsPrefix","drop","show","className","alignRight","onSelect","onToggle","focusFirstItemOnShow","as","navbar"],L=Object(F.a)("dropdown-header",{defaultProps:{role:"heading"}}),q=Object(F.a)("dropdown-divider",{defaultProps:{role:"separator"}}),B=Object(F.a)("dropdown-item-text",{Component:"span"}),U=u.a.forwardRef((function(e,t){var n=Object(p.a)(e,{show:"onToggle"}),r=n.bsPrefix,i=n.drop,s=n.show,f=n.className,d=n.alignRight,b=n.onSelect,v=n.onToggle,m=n.focusFirstItemOnShow,O=n.as,h=void 0===O?"div":O,j=(n.navbar,Object(o.a)(n,_)),y=Object(l.useContext)(N.a),E=Object(S.a)(r,"dropdown"),w=Object(g.a)((function(e,t,n){void 0===n&&(n=t.type),t.currentTarget!==document||"keydown"===n&&"Escape"!==t.key||(n="rootClose"),v&&v(e,t,{source:n})})),x=Object(g.a)((function(e,t){y&&y(e,t),b&&b(e,t),w(!1,t,"select")}));return u.a.createElement(N.a.Provider,{value:x},u.a.createElement(P,{drop:i,show:s,alignEnd:d,onToggle:w,focusFirstItemOnShow:m,itemSelector:"."+E+"-item:not(.disabled):not(:disabled)"},u.a.createElement(h,Object(a.a)({},j,{ref:t,className:c()(f,s&&"show",(!i||"down"===i)&&E,"up"===i&&"dropup","right"===i&&"dropright","left"===i&&"dropleft")}))))}));U.displayName="Dropdown",U.defaultProps={navbar:!1},U.Divider=q,U.Header=L,U.Item=D,U.ItemText=B,U.Menu=I.b,U.Toggle=A.a;t.a=U}}]);
//# sourceMappingURL=13.df36992b.chunk.js.map