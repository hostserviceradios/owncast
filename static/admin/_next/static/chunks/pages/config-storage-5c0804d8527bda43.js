(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[852],{11165:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/config-storage",function(){return t(67389)}])},15976:function(e,n,t){"use strict";t.d(n,{Z:function(){return h}});var a=t(28520),i=t.n(a),r=t(85893),s=t(67294),o=t(94594),c=t(83200),l=t(78464),u=t(25964),d=t(35159);function f(e,n,t,a,i,r,s){try{var o=e[r](s),c=o.value}catch(l){return void t(l)}o.done?n(c):Promise.resolve(c).then(a,i)}function h(e){var n,t=(0,s.useState)(null),a=t[0],h=t[1],v=null,g=((0,s.useContext)(d.aC)||{}).setFieldInConfigState,m=e.apiPath,p=e.checked,x=e.reversed,b=void 0!==x&&x,j=e.configPath,y=void 0===j?"":j,k=e.disabled,N=void 0!==k&&k,P=e.fieldName,w=e.label,C=e.tip,S=e.useSubmit,Z=e.onChange,E=function(){h(null),clearTimeout(v),v=null},O=(n=i().mark((function e(n){var t;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!S){e.next=6;break}return h((0,c.kg)(c.Jk)),t=b?!n:n,e.next=5,(0,u.Si)({apiPath:m,data:{value:t},onSuccess:function(){g({fieldName:P,value:t,path:y}),h((0,c.kg)(c.zv))},onError:function(e){h((0,c.kg)(c.Un,"There was an error: ".concat(e)))}});case 5:v=setTimeout(E,u.sI);case 6:Z&&Z(n);case 7:case"end":return e.stop()}}),e)})),function(){var e=this,t=arguments;return new Promise((function(a,i){var r=n.apply(e,t);function s(e){f(r,a,i,s,o,"next",e)}function o(e){f(r,a,i,s,o,"throw",e)}s(void 0)}))}),_=null!==a&&a.type===c.Jk;return(0,r.jsxs)("div",{className:"formfield-container toggleswitch-container",children:[w&&(0,r.jsx)("div",{className:"label-side",children:(0,r.jsx)("span",{className:"formfield-label",children:w})}),(0,r.jsxs)("div",{className:"input-side",children:[(0,r.jsxs)("div",{className:"input-group",children:[(0,r.jsx)(o.Z,{className:"switch field-".concat(P),loading:_,onChange:O,defaultChecked:p,checked:p,checkedChildren:"ON",unCheckedChildren:"OFF",disabled:N}),(0,r.jsx)(l.Z,{status:a})]}),(0,r.jsx)("p",{className:"field-tip",children:C})]})]})}h.defaultProps={apiPath:"",checked:!1,reversed:!1,configPath:"",disabled:!1,label:"",tip:"",useSubmit:!1,onChange:null}},67389:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return C}});var a=t(85893),i=t(17256),r=t(67294),s=t(28520),o=t.n(s),c=t(54907),l=t(71577),u=t(94184),d=t.n(u),f=t(35159),h=t(57553),v=t(25964),g=t(83200),m=t(19363),p=t(78464),x=t(19411),b=t(15976);function j(e,n,t,a,i,r,s){try{var o=e[r](s),c=o.value}catch(l){return void t(l)}o.done?n(c):Promise.resolve(c).then(a,i)}function y(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function k(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},a=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),a.forEach((function(n){y(e,n,t[n])}))}return e}var N=c.Z.Panel;function P(){var e=(0,r.useState)(null),n=e[0],t=e[1],i=(0,r.useState)(null),s=i[0],u=i[1],P=(0,r.useState)(!1),w=P[0],C=P[1],S=(0,r.useContext)(f.aC)||{},Z=S.serverConfig,E=S.setFieldInConfigState,O=(0,r.useContext)(h.k).setMessage,_=Z.s3,z=_.accessKey,T=void 0===z?"":z,K=_.acl,F=void 0===K?"":K,I=_.bucket,U=void 0===I?"":I,D=_.enabled,J=void 0!==D&&D,X=_.endpoint,L=void 0===X?"":X,M=_.region,$=void 0===M?"":M,q=_.secret,A=void 0===q?"":q,B=_.servingEndpoint,G=void 0===B?"":B,H=_.forcePathStyle,Q=void 0!==H&&H;if((0,r.useEffect)((function(){t({accessKey:T,acl:F,bucket:U,enabled:J,endpoint:L,region:$,secret:A,servingEndpoint:G,forcePathStyle:Q}),C(J)}),[_]),!n)return null;var R,V=null,W=function(){u(null),V=null,clearTimeout(V)},Y=function(e){var a=e.fieldName,i=e.value;t(k({},n,y({},a,i)))},ee=(R=o().mark((function e(){var t;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return u((0,g.kg)(g.Jk)),t=n,e.next=4,(0,v.Si)({apiPath:v.$w,data:{value:t},onSuccess:function(){E({fieldName:"s3",value:t,path:""}),u((0,g.kg)(g.zv,"Updated.")),V=setTimeout(W,v.sI),O("Changing your storage configuration will take place the next time you start a new stream.")},onError:function(e){u((0,g.kg)(g.Un,e)),V=setTimeout(W,v.sI)}});case 4:case"end":return e.stop()}}),e)})),function(){var e=this,n=arguments;return new Promise((function(t,a){var i=R.apply(e,n);function r(e){j(i,t,a,r,s,"next",e)}function s(e){j(i,t,a,r,s,"throw",e)}r(void 0)}))}),ne=d()({"edit-storage-container":!0,"form-module":!0,enabled:w}),te=function(e,n){var t=e.endpoint,a=e.accessKey,i=e.secret,r=e.bucket,s=e.region,o=e.enabled,c=e.servingEndpoint,l=e.acl,u=e.forcePathStyle;if(o){if(t&&(0,x.Z)(t)&&a&&i&&r&&s&&(o!==n.enabled||t!==n.endpoint||a!==n.accessKey||i!==n.secret||s!==n.region||!n.servingEndpoint&&""!==c||n.servingEndpoint&&c!==n.servingEndpoint||!n.acl&&""!==l||n.acl&&l!==n.acl||u!==n.forcePathStyle))return!0}else if(o!==n.enabled)return!0;return!1}(n,_);return(0,a.jsxs)("div",{className:ne,children:[(0,a.jsx)("div",{className:"enable-switch",children:(0,a.jsx)(b.Z,{apiPath:"",fieldName:"enabled",label:"Use S3 Storage Provider",checked:n.enabled,onChange:function(e){C(e),Y({fieldName:"enabled",value:e})}})}),(0,a.jsxs)("div",{className:"form-fields",children:[(0,a.jsx)("div",{className:"field-container",children:(0,a.jsx)(m.ZP,k({},v.zm.endpoint,{value:n.endpoint,onChange:Y}))}),(0,a.jsx)("div",{className:"field-container",children:(0,a.jsx)(m.ZP,k({},v.zm.accessKey,{value:n.accessKey,onChange:Y}))}),(0,a.jsx)("div",{className:"field-container",children:(0,a.jsx)(m.ZP,k({},v.zm.secret,{value:n.secret,onChange:Y}))}),(0,a.jsx)("div",{className:"field-container",children:(0,a.jsx)(m.ZP,k({},v.zm.bucket,{value:n.bucket,onChange:Y}))}),(0,a.jsx)("div",{className:"field-container",children:(0,a.jsx)(m.ZP,k({},v.zm.region,{value:n.region,onChange:Y}))}),(0,a.jsx)(c.Z,{className:"advanced-section",children:(0,a.jsxs)(N,{header:"Optional Settings",children:[(0,a.jsx)("div",{className:"field-container",children:(0,a.jsx)(m.ZP,k({},v.zm.acl,{value:n.acl,onChange:Y}))}),(0,a.jsx)("div",{className:"field-container",children:(0,a.jsx)(m.ZP,k({},v.zm.servingEndpoint,{value:n.servingEndpoint,onChange:Y}))}),(0,a.jsx)("div",{className:"enable-switch",children:(0,a.jsx)(b.Z,k({},v.zm.forcePathStyle,{fieldName:"forcePathStyle",checked:n.forcePathStyle,onChange:function(e){Y({fieldName:"forcePathStyle",value:e})}}))})]},"1")})]}),(0,a.jsxs)("div",{className:"button-container",children:[(0,a.jsx)(l.Z,{type:"primary",onClick:ee,disabled:!te,children:"Save"}),(0,a.jsx)(p.Z,{status:s})]})]})}var w=i.Z.Title;function C(){return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(w,{children:"Storage"}),(0,a.jsxs)("p",{className:"description",children:["Owncast supports optionally using external storage providers to distribute your video. Learn more about this by visiting our"," ",(0,a.jsx)("a",{href:"https://owncast.online/docs/storage/?source=admin",target:"_blank",rel:"noopener noreferrer",children:"Storage Documentation"}),"."]}),(0,a.jsx)("p",{className:"description",children:"Configuring this incorrectly will likely cause your video to be unplayable. Double check the documentation for your storage provider on how to configure the bucket you created for Owncast."}),(0,a.jsx)(P,{})]})}}},function(e){e.O(0,[473,774,888,179],(function(){return n=11165,e(e.s=n);var n}));var n=e.O();_N_E=n}]);