(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[229],{76:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/home",function(){return n(3280)}])},3280:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return b},home:function(){return k}});var r=n(4051),s=n.n(r),c=n(5893),o=n(7294),a=n(1163),u=n(4416),i=n(9669),l=n.n(i),p=n(3474),d=function(e){return(0,c.jsxs)("div",{className:"leftside",children:[(0,c.jsx)("h2",{children:"On a mission of being India's largest AI hub"}),(0,c.jsx)("img",{src:"images/drone.svg"}),(0,c.jsxs)("div",{className:"card",children:[(0,c.jsx)("div",{className:"profile-image"}),e.user&&e.user.user&&(0,c.jsxs)(c.Fragment,{children:[" ",(0,c.jsxs)("p",{children:["Welcome back, ",(0,c.jsx)("b",{children:e.user.user.user.name})]}),(0,c.jsx)("p",{children:"Fullstack Developer"}),(0,c.jsx)("p",{children:"Working since july 2021"})]})]}),(0,c.jsx)("h1",{children:"Go to developer Dashboard"})]})},f=function(){return(0,c.jsxs)("div",{className:"main",children:[(0,c.jsxs)("p",{children:["Priceley, ",(0,c.jsx)("br",{}),"Where AI meets Innovation"]}),(0,c.jsxs)("div",{className:"main-wraper",children:[(0,c.jsx)("img",{src:"images/ballon.svg"}),(0,c.jsxs)("div",{children:[(0,c.jsx)("p1",{children:"Welcome to Preceily Developers Page"}),(0,c.jsx)("p2",{children:"No new notification for now."}),(0,c.jsx)("p3",{children:"Recent Announcement will be shown here."})]})]})]})},h=n(8193),v=n(5434),m=n(5538);function x(e,t,n,r,s,c,o){try{var a=e[c](o),u=a.value}catch(i){return void n(i)}a.done?t(u):Promise.resolve(u).then(r,s)}function j(e){return function(){var t=this,n=arguments;return new Promise((function(r,s){var c=e.apply(t,n);function o(e){x(c,r,s,o,a,"next",e)}function a(e){x(c,r,s,o,a,"throw",e)}o(void 0)}))}}var g=(0,u.$j)((function(e){return{user:e.allUsers.user}}),(function(e){return{getState:function(t){e(getUser(t))},getInitial:function(){e(getInitial())},emptyUser:function(){e(emptyUser())}}}))((function(e){var t=(0,o.useState)(),n=t[0],r=t[1],a=(0,o.useState)([]),u=a[0],i=a[1],p=(0,o.useState)(null),d=p[0],f=p[1],x=(0,o.useState)(!1),g=x[0],y=x[1],w=(0,o.useState)(),k=w[0],b=w[1];(0,o.useEffect)((function(){N()}),[]);var N=function(){var e=j(s().mark((function e(){var t;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l().get("https://precily-dev-team.herokuapp.com/post/get-post");case 2:t=e.sent,i(t.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),P=function(){var e=j(s().mark((function e(t){return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n){e.next=4;break}m.Am.error("Please Enter the name of the repo"),e.next=10;break;case 4:return e.next=6,l().post("https://precily-dev-team.herokuapp.com/post/repo",{content:n});case 6:e.sent,r(""),N(),m.Am.success("Repository Added Successfully");case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),_=function(){var e=j(s().mark((function e(t){var n;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l().delete("https://precily-dev-team.herokuapp.com/post/delete-post/".concat(t));case 2:n=e.sent,console.log(n.data),i([n.data]),m.Am.success("Repository Deleted Successfully");case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),S=function(){var e=j(s().mark((function e(t){var n;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l().get("https://precily-dev-team.herokuapp.com/post/update-post/".concat(t));case 2:n=e.sent,y(!0),f(n.data.post);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),E=function(){var e=j(s().mark((function e(t){var n;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(k){e.next=4;break}m.Am.error("please enter updated name"),e.next=12;break;case 4:return e.next=6,l().put("https://precily-dev-team.herokuapp.com/post/update-post/".concat(d._id),{updatedPost:k});case 6:n=e.sent,console.log(n),y(!1),N(),(0,v.gmf)(""),m.Am.success("Repository Updated Successfully");case 12:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return(0,c.jsxs)("div",{className:"bottom",children:[e.user&&e.user.user&&e.user.user.user&&(0,c.jsxs)("h1",{children:["Welcome back, ",e.user.user.user.name]}),(0,c.jsx)("h2",{children:"List of changes in Precily github main branch"}),(0,c.jsx)("input",{placeholder:"Enter the repository",value:n,onChange:function(e){return r(e.target.value)}}),(0,c.jsx)("br",{}),(0,c.jsx)("button",{onClick:P,children:"Add"}),g&&(0,c.jsxs)("div",{className:"update",children:[" ",(0,c.jsx)("input",{value:k,onChange:function(e){return b(e.target.value)},placeholder:"Enter Repo to update"}),(0,c.jsx)("button",{onClick:E,children:"Update"}),(0,c.jsx)("span",{children:"or"}),(0,c.jsx)("button",{className:"cancel-button",onClick:function(e){return y(!1)},children:"Cancel"})]}),null!==u&&u.map((function(e){return(0,c.jsxs)("div",{className:"listings",children:[(0,c.jsx)("div",{children:(0,c.jsx)("h4",{className:"first-list-item",children:e.content})}),(0,c.jsx)("div",{children:(0,c.jsx)("h4",{children:e.createdAt})}),(0,c.jsx)("div",{children:(0,c.jsx)("h4",{children:e.updatedAt})}),(0,c.jsx)(h.YK6,{onClick:function(){return _(e._id)},className:"delete"}),(0,c.jsx)(v.ZO5,{onClick:function(){return S(e._id)},className:"update"})]},e._id)}))]})}));function y(e,t,n,r,s,c,o){try{var a=e[c](o),u=a.value}catch(i){return void n(i)}a.done?t(u):Promise.resolve(u).then(r,s)}function w(e){return function(){var t=this,n=arguments;return new Promise((function(r,s){var c=e.apply(t,n);function o(e){y(c,r,s,o,a,"next",e)}function a(e){y(c,r,s,o,a,"throw",e)}o(void 0)}))}}var k=function(e){var t=(0,o.useState)(),n=t[0],r=(t[1],(0,o.useState)([])),u=r[0],i=r[1],p=(0,o.useState)(null),h=p[0],v=p[1],m=(0,o.useState)(!1),x=(m[0],m[1]),j=(0,o.useState)(),y=j[0],k=(j[1],(0,a.useRouter)());(0,o.useEffect)((function(){e.getInitial(),b(),null===e.user.user&&k.push("/login")}),[u.length]);!function(){var e=w(s().mark((function e(t){return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l().post("http://localhost:8000/post/repo",{content:n});case 2:e.sent,b();case 4:case"end":return e.stop()}}),e)})))}();var b=function(){var e=w(s().mark((function e(){var t;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l().get("http://localhost:8000/post/get-post");case 2:t=e.sent,i(t.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();(function(){var e=w(s().mark((function e(t){var n;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l().delete("http://localhost:8000/post/delete-post/".concat(t));case 2:n=e.sent,console.log(n.data),i([n.data]);case 5:case"end":return e.stop()}}),e)})))})(),function(){var e=w(s().mark((function e(t){var n;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l().get("http://localhost:8000/post/get-single-post/".concat(t));case 2:n=e.sent,x(!0),v(n.data.post);case 5:case"end":return e.stop()}}),e)})))}(),function(){var e=w(s().mark((function e(t){var n;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l().put("http://localhost:8000/post/update-post/".concat(h._id),{updatedPost:y});case 2:n=e.sent,console.log(n),x(!1),b();case 6:case"end":return e.stop()}}),e)})))}();return(0,c.jsx)(c.Fragment,{children:(0,c.jsxs)("div",{className:"home-container",children:[(0,c.jsxs)("div",{className:"first-section",children:[(0,c.jsx)(d,{user:e.user}),(0,c.jsx)(f,{})]}),(0,c.jsx)("h3",{children:"Developer Dashboard"}),(0,c.jsx)(g,{post:u,getAllPost:b})]})})},b=(0,u.$j)((function(e){return{user:e.allUsers}}),(function(e){return{getState:function(t){e(getUser(t))},getInitial:function(){e((0,p.gc)())},emptyUser:function(){e(emptyUser())}}}))(k)},8357:function(e,t,n){"use strict";n.d(t,{w_:function(){return i}});var r=n(7294),s={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},c=r.createContext&&r.createContext(s),o=function(){return(o=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var s in t=arguments[n])Object.prototype.hasOwnProperty.call(t,s)&&(e[s]=t[s]);return e}).apply(this,arguments)},a=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var s=0;for(r=Object.getOwnPropertySymbols(e);s<r.length;s++)t.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(e,r[s])&&(n[r[s]]=e[r[s]])}return n};function u(e){return e&&e.map((function(e,t){return r.createElement(e.tag,o({key:t},e.attr),u(e.child))}))}function i(e){return function(t){return r.createElement(l,o({attr:o({},e.attr)},t),u(e.child))}}function l(e){var t=function(t){var n,s=e.attr,c=e.size,u=e.title,i=a(e,["attr","size","title"]),l=c||t.size||"1em";return t.className&&(n=t.className),e.className&&(n=(n?n+" ":"")+e.className),r.createElement("svg",o({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,s,i,{className:n,style:o(o({color:e.color||t.color},t.style),e.style),height:l,width:l,xmlns:"http://www.w3.org/2000/svg"}),u&&r.createElement("title",null,u),e.children)};return void 0!==c?r.createElement(c.Consumer,null,(function(e){return t(e)})):t(s)}}},function(e){e.O(0,[228,617,774,888,179],(function(){return t=76,e(e.s=t);var t}));var t=e.O();_N_E=t}]);