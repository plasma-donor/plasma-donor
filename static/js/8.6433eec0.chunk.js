(this.webpackJsonpplasma=this.webpackJsonpplasma||[]).push([[8],{121:function(e,t,a){"use strict";a.r(t);var s=a(45),c=a(1),n=a(88),r=a.n(n),i=a(0),o=a(79),d=a(125),l=a(89),j=a(14),b=a(87),p=a(7),u=a(24),h=[];t.default=function(){var e=Object(i.useState)(h),t=Object(s.a)(e,2),a=t[0],n=t[1],O=Object(i.useState)(!1),f=Object(s.a)(O,2),m=f[0],x=f[1],v=Object(i.useState)(""),g=Object(s.a)(v,2),N=g[0],y=g[1],E=Object(p.f)(),P=Object(i.useContext)(u.a).loggedIn;Object(i.useEffect)((function(){P||E.push("/login")}),[P,E]),Object(i.useEffect)((function(){x(!0),r.a.post("".concat(b.a.listDonorsList),{page:1,size:10}).then((function(e){e&&e.data&&200===e.data.statusCode&&(x(!1),"string"===typeof e.data.data?y(e.data.data):n(e.data.data))})).catch((function(e){x(!1),y(j.a.msgError)}))}),[]);return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)("h4",{className:"text-center mar-top-bot-2rem",children:j.a.msgDonors}),Object(c.jsx)("hr",{}),m?Object(c.jsx)("div",{className:"text-center",children:Object(c.jsx)(o.a,{animation:"border",role:"status"})}):N?Object(c.jsx)(d.a,{variant:"primary",children:N}):null,Object(c.jsx)("br",{}),Object(c.jsxs)(l.a,{responsive:!0,striped:!0,bordered:!0,hover:!0,size:"sm",children:[Object(c.jsx)("thead",{children:Object(c.jsxs)("tr",{children:[Object(c.jsx)("th",{children:"#"}),Object(c.jsx)("th",{children:"Name"}),Object(c.jsx)("th",{children:"Email"}),Object(c.jsx)("th",{children:"Blood Group"}),Object(c.jsx)("th",{children:"Mobile No"}),Object(c.jsx)("th",{style:{textAlign:"center"},children:"Actions"})]})}),Object(c.jsx)("tbody",{children:function(){if(a)return a.map((function(e,t){return Object(c.jsxs)("tr",{children:[Object(c.jsx)("td",{children:t+1}),Object(c.jsx)("td",{children:e.name}),Object(c.jsx)("td",{children:e.email}),Object(c.jsx)("td",{children:e.bloodGroup}),Object(c.jsx)("td",{children:e.mobile}),Object(c.jsx)("td",{style:{textAlign:"center"},children:Object(c.jsx)("span",{className:"link",onClick:function(){return E.push("donor/".concat(e.id))},children:"Edit"})})]},e.id)}))}()})]})]})}},87:function(e,t,a){"use strict";a.d(t,"a",(function(){return c}));var s="https://plasmadonation-env.eba-hycfdfsp.us-east-2.elasticbeanstalk.com/",c={upload:"".concat(s,"api/patient/upload"),addPatient:"".concat(s,"api/patient/create"),editPatient:"".concat(s,"api/patient/findById"),updatePatient:"".concat(s,"api/patient/update"),listPatients:"".concat(s,"api/patient/findAll"),requestPlasma:"".concat(s,"api/plasma/request"),listDonors:"".concat(s,"api/plasma/request/close/getdata"),closeDonationRequest:"".concat(s,"api/plasma/request/close/submit"),listDonorsList:"".concat(s,"api/patient/findAllDonors")}},89:function(e,t,a){"use strict";var s=a(2),c=a(3),n=a(4),r=a.n(n),i=a(0),o=a.n(i),d=a(5),l=o.a.forwardRef((function(e,t){var a=e.bsPrefix,n=e.className,i=e.striped,l=e.bordered,j=e.borderless,b=e.hover,p=e.size,u=e.variant,h=e.responsive,O=Object(c.a)(e,["bsPrefix","className","striped","bordered","borderless","hover","size","variant","responsive"]),f=Object(d.a)(a,"table"),m=r()(n,f,u&&f+"-"+u,p&&f+"-"+p,i&&f+"-striped",l&&f+"-bordered",j&&f+"-borderless",b&&f+"-hover"),x=o.a.createElement("table",Object(s.a)({},O,{className:m,ref:t}));if(h){var v=f+"-responsive";return"string"===typeof h&&(v=v+"-"+h),o.a.createElement("div",{className:v},x)}return x}));t.a=l}}]);
//# sourceMappingURL=8.6433eec0.chunk.js.map