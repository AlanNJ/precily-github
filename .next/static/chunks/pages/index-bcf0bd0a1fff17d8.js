(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8581:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(5139)}])},5139:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return x},index:function(){return g}});var r=n(5893),u=n(7294),s=n(4051),a=n.n(s),i=n(1163),o=n(9669),c=n.n(o),l=n(4416),f=n(8681),p=n(1664),h=n(5538);function d(e,t,n,r,u,s,a){try{var i=e[s](a),o=i.value}catch(c){return void n(c)}i.done?t(o):Promise.resolve(o).then(r,u)}var v=(0,l.$j)((function(e){return{user:e.allUsers}}),(function(e){return{getState:function(t){e(getUser(t))}}}))((function(e){var t=(0,u.useState)(""),n=t[0],s=t[1],o=(0,u.useState)(""),l=o[0],v=o[1],g=(0,u.useState)(""),x=g[0],m=g[1],j=(0,u.useState)("gdgdgdgdgdg"),w=j[0],_=j[1],y=(0,u.useState)(""),S=(y[0],y[1],(0,u.useState)(!1)),k=S[0],b=S[1],C=(0,u.useState)(!1),N=(C[0],C[1],(0,u.useState)("")),E=(N[0],N[1],(0,i.useRouter)()),P=function(){var e,t=(e=a().mark((function e(){return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n&&l&&x&&w){e.next=4;break}h.Am.error("Please fill all the forms"),e.next=8;break;case 4:return e.next=6,c().post("https://precily-dev-team.herokuapp.com/api/register",{name:n,phone:l,email:x,password:w});case 6:e.sent,h.Am.success("Registration successfull");case 8:case"end":return e.stop()}}),e)})),function(){var t=this,n=arguments;return new Promise((function(r,u){var s=e.apply(t,n);function a(e){d(s,r,u,a,i,"next",e)}function i(e){d(s,r,u,a,i,"throw",e)}a(void 0)}))});return function(){return t.apply(this,arguments)}}();return(0,u.useEffect)((function(){e.user.user&&E.push("/home")}),[e.user]),(0,r.jsxs)("div",{className:"reg-container",children:[(0,r.jsx)("input",{type:"text",placeholder:"Name",className:"input",onChange:function(e){return s(e.target.value)}}),"name",(0,r.jsx)("input",{type:"text",placeholder:"Email",onChange:function(e){return m(e.target.value)}}),"email",(0,r.jsx)("input",{type:"text",placeholder:"Password",onChange:function(e){return _(e.target.value)}}),"password",(0,r.jsx)("input",{type:"text",placeholder:"Phone.no",onChange:function(e){return v(e.target.value)}}),"phone",(0,r.jsx)("button",{type:"submit",onClick:function(e){return P(e)},children:"Submit"}),(0,r.jsx)("div",{children:(0,r.jsxs)(f.Z,{title:"congratulations",visible:k,onCancel:function(){return b(!1)},footer:null,children:[(0,r.jsx)("p",{children:"You have successfully registered"}),(0,r.jsx)(p.default,{href:"/login",children:(0,r.jsx)("a",{children:"Login"})})]})})]})})),g=function(){return(0,r.jsx)("div",{children:(0,r.jsx)(v,{})})},x=g}},function(e){e.O(0,[730,774,888,179],(function(){return t=8581,e(e.s=t);var t}));var t=e.O();_N_E=t}]);