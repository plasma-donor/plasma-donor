(this.webpackJsonpplasma=this.webpackJsonpplasma||[]).push([[6],{116:function(e,a,t){"use strict";var n=t(3),s=t(1),c=t(4),r=t.n(c),l=t(0),o=t.n(l),i=t(9),j=t(5),d=Object(i.a)("input-group-append"),u=Object(i.a)("input-group-prepend"),b=Object(i.a)("input-group-text",{Component:"span"}),h=o.a.forwardRef((function(e,a){var t=e.bsPrefix,c=e.size,l=e.className,i=e.as,d=void 0===i?"div":i,u=Object(n.a)(e,["bsPrefix","size","className","as"]);return t=Object(j.a)(t,"input-group"),o.a.createElement(d,Object(s.a)({ref:a},u,{className:r()(l,t,c&&t+"-"+c)}))}));h.displayName="InputGroup";var p=Object(s.a)({},h,{Text:b,Radio:function(e){return o.a.createElement(b,null,o.a.createElement("input",Object(s.a)({type:"radio"},e)))},Checkbox:function(e){return o.a.createElement(b,null,o.a.createElement("input",Object(s.a)({type:"checkbox"},e)))},Append:d,Prepend:u});a.a=p},118:function(e,a,t){"use strict";t.r(a);var n=t(87),s=t(89),c=t(2),r=t(0),l=t(14),o=t(77),i=t(124),j=t(80),d=t(76),u=t(50),b=t(116),h=t(51),p=t(49),O=t(86),x=t.n(O),m=t(85),y=t(7),v={name:"",age:"",gender:"",mobile:"",email:"",address:"",city:"",state:"",zip:"",weight:"",bloodGroup:"A",hbLevel:"",admissionDate:"",dischargeDate:"",willingToDonate:"Y",hasCovidRecovered:"N",hasCancerPatient:"N",hasHIV:"N",hasHepatitis:"N",hasBP:"N",hasHTLV1:"N",hasHeartAilment:"N",hasKidneyAilment:"N",hasPrgenantInPast:"N",hasTB:"N",hasTatto:"N",hasSurgery:"N"},g=function(e,a){switch(a.type){case"name":return Object(s.a)(Object(s.a)({},e),{},{name:a.payload});case"age":return Object(s.a)(Object(s.a)({},e),{},{age:a.payload});case"gender":return Object(s.a)(Object(s.a)({},e),{},{gender:a.payload});case"mobile":return Object(s.a)(Object(s.a)({},e),{},{mobile:a.payload});case"email":return Object(s.a)(Object(s.a)({},e),{},{email:a.payload});case"address":return Object(s.a)(Object(s.a)({},e),{},{address:a.payload});case"state":return Object(s.a)(Object(s.a)({},e),{},{state:a.payload});case"city":return Object(s.a)(Object(s.a)({},e),{},{city:a.payload});case"zip":return Object(s.a)(Object(s.a)({},e),{},{zip:a.payload});case"weight":return Object(s.a)(Object(s.a)({},e),{},{weight:a.payload});case"bloodGroup":return Object(s.a)(Object(s.a)({},e),{},{bloodGroup:a.payload});case"hbLevel":return Object(s.a)(Object(s.a)({},e),{},{hbLevel:a.payload});case"admissionDate":return Object(s.a)(Object(s.a)({},e),{},{admissionDate:a.payload});case"dischargeDate":return Object(s.a)(Object(s.a)({},e),{},{dischargeDate:a.payload});case"willingToDonate":return Object(s.a)(Object(s.a)({},e),{},{willingToDonate:a.payload});case"hasCovidRecovered":return Object(s.a)(Object(s.a)({},e),{},{hasCovidRecovered:a.payload});case"hasCancerPatient":return Object(s.a)(Object(s.a)({},e),{},{hasCancerPatient:a.payload});case"hasHIV":return Object(s.a)(Object(s.a)({},e),{},{hasHIV:a.payload});case"hasHepatitis":return Object(s.a)(Object(s.a)({},e),{},{hasHepatitis:a.payload});case"hasBP":return Object(s.a)(Object(s.a)({},e),{},{hasBP:a.payload});case"hasHTLV1":return Object(s.a)(Object(s.a)({},e),{},{hasHTLV1:a.payload});case"hasHeartAilment":return Object(s.a)(Object(s.a)({},e),{},{hasHeartAilment:a.payload});case"hasKidneyAilment":return Object(s.a)(Object(s.a)({},e),{},{hasKidneyAilment:a.payload});case"hasPrgenantInPast":return Object(s.a)(Object(s.a)({},e),{},{hasPrgenantInPast:a.payload});case"hasTB":return Object(s.a)(Object(s.a)({},e),{},{hasTB:a.payload});case"hasTatto":return Object(s.a)(Object(s.a)({},e),{},{hasTatto:a.payload});case"hasSurgery":return Object(s.a)(Object(s.a)({},e),{},{hasSurgery:a.payload});case"submit":case"reset":return v;case"get":return Object(s.a)({},a.payload);case"update":return e;default:throw new Error}};a.default=function(){var e=Object(r.useReducer)(g,v),a=Object(n.a)(e,2),t=a[0],s=a[1],O=Object(r.useState)(!1),f=Object(n.a)(O,2),C=f[0],N=f[1],P=Object(r.useState)(""),L=Object(n.a)(P,2),H=L[0],A=L[1],D=Object(y.g)().id,E=Object(y.f)();Object(r.useEffect)((function(){D?(N(!0),x.a.post("".concat(m.a.editPatient,"/").concat(D)).then((function(e){e&&e.data&&200===e.data.statusCode&&(N(!1),"string"===typeof e.data.data?A(e.data.data):s({type:"get",payload:e.data.data}))})).catch((function(e){N(!1),A(l.a.msgError)}))):s({type:"reset"})}),[D]);var Y=function(){return C?Object(c.jsx)("div",{className:"text-center",children:Object(c.jsx)(o.a,{animation:"border",role:"status"})}):H?Object(c.jsx)(i.a,{variant:"primary",children:H}):null};return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)("h4",{className:"text-center mar-top-bot-2rem",children:l.a.msgAddPatient}),Object(c.jsx)("hr",{}),Y(),Object(c.jsx)("br",{}),Object(c.jsxs)(j.a,{onSubmit:function(e){N(!0),D?x.a.post("".concat(m.a.updatePatient,"/").concat(D),t).then((function(e){e&&e.data&&200===e.data.statusCode&&(N(!1),E.push("/patients"))})).catch((function(e){N(!1),A(l.a.msgError)})):x.a.post(m.a.addPatient,t).then((function(e){e&&e.data&&200===e.data.statusCode&&(N(!1),E.push("/patients"))})).catch((function(e){N(!1),A(l.a.msgError)})),e.preventDefault()},onReset:function(){A(""),s({type:"reset"})},children:[Object(c.jsxs)(j.a.Group,{as:d.a,children:[Object(c.jsx)(j.a.Label,{as:u.a,sm:"2",children:"Full Name"}),Object(c.jsx)(u.a,{sm:"10",children:Object(c.jsx)(j.a.Control,{type:"text",placeholder:"Enter Full Name",size:"sm",value:t.name,onChange:function(e){return s({type:"name",payload:e.target.value})},required:!0})})]}),Object(c.jsxs)(j.a.Group,{as:d.a,children:[Object(c.jsx)(j.a.Label,{as:u.a,sm:"2",children:"Age"}),Object(c.jsx)(u.a,{sm:"4",children:Object(c.jsx)(j.a.Control,{type:"number",placeholder:"Enter Age",size:"sm",value:t.age,onChange:function(e){return s({type:"age",payload:e.target.value})},required:!0})}),Object(c.jsxs)(j.a.Label,{as:u.a,sm:"2",children:["Gender"," "]}),Object(c.jsx)(u.a,{sm:"4",children:Object(c.jsxs)(j.a.Control,{as:"select",value:t.gender,onChange:function(e){return s({type:"gender",payload:e.target.value})},required:!0,children:[Object(c.jsx)("option",{value:"",children:"Select Gender"}),Object(c.jsx)("option",{value:"M",children:"Male"}),Object(c.jsx)("option",{value:"F",children:"Female"})]})})]}),Object(c.jsxs)(j.a.Group,{as:d.a,children:[Object(c.jsx)(j.a.Label,{as:u.a,sm:"2",children:"Mobile"}),Object(c.jsx)(u.a,{sm:"4",children:Object(c.jsxs)(b.a,{className:"mb-3",children:[Object(c.jsx)(b.a.Prepend,{children:Object(c.jsx)(b.a.Text,{id:"basic-addon1",children:"+91"})}),Object(c.jsx)(h.a,{type:"number",placeholder:"Enter Mobile No",value:t.mobile,onChange:function(e){return s({type:"mobile",payload:e.target.value})},required:!0})]})}),Object(c.jsx)(j.a.Label,{as:u.a,sm:"2",children:"Email Id"}),Object(c.jsx)(u.a,{sm:"4",children:Object(c.jsx)(j.a.Control,{type:"email",placeholder:"Enter Email Id",value:t.email,onChange:function(e){return s({type:"email",payload:e.target.value})},required:!0})})]}),Object(c.jsxs)(j.a.Group,{as:d.a,children:[Object(c.jsx)(j.a.Label,{as:u.a,sm:"2",children:"Address"}),Object(c.jsx)(u.a,{children:Object(c.jsx)(j.a.Control,{type:"text",placeholder:"Enter Address",size:"sm",value:t.address,onChange:function(e){return s({type:"address",payload:e.target.value})},required:!0})})]}),Object(c.jsxs)(j.a.Group,{as:d.a,children:[Object(c.jsx)(j.a.Label,{as:u.a,sm:"2",children:"State"}),Object(c.jsx)(u.a,{sm:"4",children:Object(c.jsx)(j.a.Control,{type:"text",placeholder:"Enter State",size:"sm",value:t.state,onChange:function(e){return s({type:"state",payload:e.target.value})},required:!0})}),Object(c.jsx)(j.a.Label,{as:u.a,sm:"2",children:"City"}),Object(c.jsx)(u.a,{sm:"4",children:Object(c.jsx)(j.a.Control,{type:"text",placeholder:"Enter City",size:"sm",value:t.city,onChange:function(e){return s({type:"city",payload:e.target.value})},required:!0})})]}),Object(c.jsxs)(j.a.Group,{as:d.a,children:[Object(c.jsx)(j.a.Label,{as:u.a,sm:"2",children:"Zip"}),Object(c.jsx)(u.a,{sm:"4",children:Object(c.jsx)(j.a.Control,{type:"number",placeholder:"Enter Zip",size:"sm",value:t.zip,onChange:function(e){return s({type:"zip",payload:e.target.value})},required:!0})}),Object(c.jsx)(j.a.Label,{as:u.a,sm:"2",children:"Weight"}),Object(c.jsx)(u.a,{sm:"4",children:Object(c.jsx)(j.a.Control,{type:"number",placeholder:"Enter Weight",size:"sm",value:t.weight,onChange:function(e){return s({type:"weight",payload:e.target.value})},required:!0})})]}),Object(c.jsxs)(j.a.Group,{as:d.a,children:[Object(c.jsx)(j.a.Label,{as:u.a,sm:"2",children:"Blood"}),Object(c.jsx)(u.a,{sm:"4",children:Object(c.jsxs)(j.a.Control,{as:"select",value:t.bloodGroup,onChange:function(e){return s({type:"bloodGroup",payload:e.target.value})},children:[Object(c.jsx)("option",{value:"A+",children:"A+"}),Object(c.jsx)("option",{value:"A-",children:"A-"}),Object(c.jsx)("option",{value:"B+",children:"B+"}),Object(c.jsx)("option",{value:"B-",children:"B-"}),Object(c.jsx)("option",{value:"AB+",children:"AB+"}),Object(c.jsx)("option",{value:"AB-",children:"AB-"}),Object(c.jsx)("option",{value:"O+",children:"O+"}),Object(c.jsx)("option",{value:"O-",children:"O-"})]})}),Object(c.jsx)(j.a.Label,{as:u.a,sm:"2",children:"HB Level"}),Object(c.jsx)(u.a,{sm:"4",children:Object(c.jsx)(j.a.Control,{type:"text",placeholder:"Enter HB Level",size:"sm",value:t.hbLevel,onChange:function(e){return s({type:"hbLevel",payload:e.target.value})}})})]}),Object(c.jsxs)(j.a.Group,{as:d.a,children:[Object(c.jsx)(j.a.Label,{as:u.a,sm:"2",children:"Admission Date"}),Object(c.jsx)(u.a,{sm:"4",children:Object(c.jsx)(j.a.Control,{type:"date",placeholder:"Enter Admission Date",size:"sm",value:t.admissionDate,onChange:function(e){return s({type:"admissionDate",payload:e.target.value})},required:!0})}),Object(c.jsx)(j.a.Label,{as:u.a,sm:"2",children:"Discharge Date"}),Object(c.jsx)(u.a,{sm:"4",children:Object(c.jsx)(j.a.Control,{type:"date",placeholder:"Enter Discharge Date",size:"sm",value:t.dischargeDate,onChange:function(e){return s({type:"dischargeDate",payload:e.target.value})}})})]}),Object(c.jsxs)(j.a.Group,{as:d.a,children:[Object(c.jsx)(j.a.Label,{as:u.a,sm:"2",children:"Willing to donate?"}),Object(c.jsx)(u.a,{sm:"4",children:Object(c.jsxs)(j.a.Control,{as:"select",value:t.willingToDonate,onChange:function(e){return s({type:"willingToDonate",payload:e.target.value})},children:[Object(c.jsx)("option",{children:"Yes"}),Object(c.jsx)("option",{children:"No"})]})}),Object(c.jsx)(j.a.Label,{as:u.a,sm:"2",children:"Has covid recovered?"}),Object(c.jsx)(u.a,{sm:"4",children:Object(c.jsxs)(j.a.Control,{as:"select",value:t.hasCovidRecovered,onChange:function(e){return s({type:"hasCovidRecovered",payload:e.target.value})},disabled:!0,children:[Object(c.jsx)("option",{value:"N",children:"No"}),Object(c.jsx)("option",{value:"Y",children:"Yes"})]})})]}),Object(c.jsxs)(j.a.Group,{as:d.a,children:[Object(c.jsx)(j.a.Label,{as:u.a,sm:"2",children:"Has Cancer patient?"}),Object(c.jsx)(u.a,{sm:"4",children:Object(c.jsxs)(j.a.Control,{as:"select",value:t.hasCancerPatient,onChange:function(e){return s({type:"hasCancerPatient",payload:e.target.value})},children:[Object(c.jsx)("option",{value:"N",children:"No"}),Object(c.jsx)("option",{value:"Y",children:"Yes"})]})}),Object(c.jsx)(j.a.Label,{as:u.a,sm:"2",children:"Has HIV?"}),Object(c.jsx)(u.a,{sm:"4",children:Object(c.jsxs)(j.a.Control,{as:"select",value:t.hasHIV,onChange:function(e){return s({type:"hasHIV",payload:e.target.value})},children:[Object(c.jsx)("option",{value:"N",children:"No"}),Object(c.jsx)("option",{value:"Y",children:"Yes"})]})})]}),Object(c.jsxs)(j.a.Group,{as:d.a,children:[Object(c.jsx)(j.a.Label,{as:u.a,sm:"2",children:"Has Hepatitis?"}),Object(c.jsx)(u.a,{sm:"4",children:Object(c.jsxs)(j.a.Control,{as:"select",value:t.hasHepatitis,onChange:function(e){return s({type:"hasHepatitis",payload:e.target.value})},children:[Object(c.jsx)("option",{value:"N",children:"No"}),Object(c.jsx)("option",{value:"Y",children:"Yes"})]})}),Object(c.jsx)(j.a.Label,{as:u.a,sm:"2",children:"Has BP?"}),Object(c.jsx)(u.a,{sm:"4",children:Object(c.jsxs)(j.a.Control,{as:"select",value:t.hasBP,onChange:function(e){return s({type:"hasBP",payload:e.target.value})},children:[Object(c.jsx)("option",{value:"N",children:"No"}),Object(c.jsx)("option",{value:"Y",children:"Yes"})]})})]}),Object(c.jsxs)(j.a.Group,{as:d.a,children:[Object(c.jsx)(j.a.Label,{as:u.a,sm:"2",children:"Has HTLV1?"}),Object(c.jsx)(u.a,{sm:"4",children:Object(c.jsxs)(j.a.Control,{as:"select",value:t.hasHTLV1,onChange:function(e){return s({type:"hasHTLV1",payload:e.target.value})},children:[Object(c.jsx)("option",{value:"N",children:"No"}),Object(c.jsx)("option",{value:"Y",children:"Yes"})]})}),Object(c.jsx)(j.a.Label,{as:u.a,sm:"2",children:"Has Heart Ailment?"}),Object(c.jsx)(u.a,{sm:"4",children:Object(c.jsxs)(j.a.Control,{as:"select",value:t.hasHeartAilment,onChange:function(e){return s({type:"hasHeartAilment",payload:e.target.value})},children:[Object(c.jsx)("option",{value:"N",children:"No"}),Object(c.jsx)("option",{value:"Y",children:"Yes"})]})})]}),Object(c.jsxs)(j.a.Group,{as:d.a,children:[Object(c.jsx)(j.a.Label,{as:u.a,sm:"2",children:"Has Kidney Ailment?"}),Object(c.jsx)(u.a,{sm:"4",children:Object(c.jsxs)(j.a.Control,{as:"select",value:t.hasKidneyAilment,onChange:function(e){return s({type:"hasKidneyAilment",payload:e.target.value})},children:[Object(c.jsx)("option",{value:"N",children:"No"}),Object(c.jsx)("option",{value:"Y",children:"Yes"})]})}),Object(c.jsx)(j.a.Label,{as:u.a,sm:"2",children:"Has Pregnant in Past?"}),Object(c.jsx)(u.a,{sm:"4",children:Object(c.jsxs)(j.a.Control,{as:"select",value:t.hasPrgenantInPast,onChange:function(e){return s({type:"hasPrgenantInPast",payload:e.target.value})},children:[Object(c.jsx)("option",{value:"N",children:"No"}),Object(c.jsx)("option",{value:"Y",children:"Yes"})]})})]}),Object(c.jsxs)(j.a.Group,{as:d.a,children:[Object(c.jsx)(j.a.Label,{as:u.a,sm:"2",children:"Has TB?"}),Object(c.jsx)(u.a,{sm:"4",children:Object(c.jsxs)(j.a.Control,{as:"select",value:t.hasTB,onChange:function(e){return s({type:"hasTB",payload:e.target.value})},children:[Object(c.jsx)("option",{value:"N",children:"No"}),Object(c.jsx)("option",{value:"Y",children:"Yes"})]})}),Object(c.jsx)(j.a.Label,{as:u.a,sm:"2",children:"Has Tatto?"}),Object(c.jsx)(u.a,{sm:"4",children:Object(c.jsxs)(j.a.Control,{as:"select",value:t.hasTatto,onChange:function(e){return s({type:"hasTatto",payload:e.target.value})},children:[Object(c.jsx)("option",{value:"N",children:"No"}),Object(c.jsx)("option",{value:"Y",children:"Yes"})]})})]}),Object(c.jsxs)(j.a.Group,{as:d.a,children:[Object(c.jsx)(j.a.Label,{as:u.a,sm:"2",children:"Has Surgery?"}),Object(c.jsx)(u.a,{sm:"4",children:Object(c.jsxs)(j.a.Control,{as:"select",value:t.hasSurgery,onChange:function(e){return s({type:"hasSurgery",payload:e.target.value})},children:[Object(c.jsx)("option",{value:"N",children:"No"}),Object(c.jsx)("option",{value:"Y",children:"Yes"})]})})]}),Object(c.jsxs)("div",{className:"text-center",children:[Object(c.jsx)(p.a,{variant:"primary",type:"submit",size:"sm",children:"Submit"})," ",Object(c.jsx)(p.a,{variant:"secondary",type:"reset",size:"sm",children:"Reset"})]})]}),Object(c.jsx)("br",{}),Y()]})}},85:function(e,a,t){"use strict";t.d(a,"a",(function(){return s}));var n="https://plasma-donor.herokuapp.com/",s={upload:"".concat(n,"api/patient/upload"),addPatient:"".concat(n,"api/patient/create"),editPatient:"".concat(n,"api/patient/findById"),updatePatient:"".concat(n,"api/patient/update"),listPatients:"".concat(n,"api/patient/findAll"),requestPlasma:"".concat(n,"api/plasma/request"),listDonors:"".concat(n,"api/plasma/request/close/getdata"),closeDonationRequest:"".concat(n,"api/plasma/request/close/submit"),listDonorsList:"".concat(n,"api/patient/findAllDonors")}},89:function(e,a,t){"use strict";function n(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function s(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function c(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?s(Object(t),!0).forEach((function(a){n(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}t.d(a,"a",(function(){return c}))}}]);
//# sourceMappingURL=6.5eb87826.chunk.js.map