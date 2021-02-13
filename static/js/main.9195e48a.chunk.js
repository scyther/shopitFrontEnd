(this.webpackJsonpprojectfrontend=this.webpackJsonpprojectfrontend||[]).push([[0],{27:function(e,t,a){e.exports=a(38)},32:function(e,t,a){},38:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(16),o=a.n(r),l=a(11),s=a(9),i=(a(32),a(7)),m="http://localhost:8000/api",u=function(){return"undefined"!=typeof window&&(!!localStorage.getItem("jwt")&&JSON.parse(localStorage.getItem("jwt")))},d=function(e,t){return e.location.pathname===t?{color:"#2ecc72"}:{color:"#FFFFFF"}},p=Object(s.g)((function(e){var t=e.history;return c.a.createElement("div",null,c.a.createElement("ul",{className:"nav nav-tabs bg-dark"},c.a.createElement("li",{className:"nav-item"},c.a.createElement(l.b,{style:d(t,"/"),className:"nav-link",to:"/"},"Home")),c.a.createElement("li",{className:"nav-item"},c.a.createElement(l.b,{style:d(t,"/cart"),className:"nav-link",to:"/cart"},"Cart")),u()&&0===u().user.role&&c.a.createElement("li",{className:"nav-item"},c.a.createElement(l.b,{style:d(t,"/user/dashboard"),className:"nav-link",to:"/user/dashboard"},"Dashboard")),u()&&1===u().user.role&&c.a.createElement("li",{className:"nav-item"},c.a.createElement(l.b,{style:d(t,"/admin/dashboard"),className:"nav-link",to:"/admin/dashboard"},"A. Dashboard")),!u()&&c.a.createElement(n.Fragment,null,c.a.createElement("li",{className:"nav-item"},c.a.createElement(l.b,{style:d(t,"/signup"),className:"nav-link",to:"/signup"},"Signup")),c.a.createElement("li",{className:"nav-item"},c.a.createElement(l.b,{style:d(t,"/signin"),className:"nav-link",to:"/signin"},"Sign In"))),u()&&c.a.createElement("li",{className:"nav-item"},c.a.createElement("span",{style:{cursor:"pointer"},className:"nav-link text-warning",onClick:function(){var e;e=function(){t.push("/")},"undefined"!==typeof window&&(localStorage.removeItem("jwt"),e()),fetch("".concat(m,"/signout"),{method:"GET"}).then((function(e){return e.json()})).catch((function(e){return console.log(e)}))}},"Signout"))))})),f=a(10),E=function(e){var t=e.title,a=void 0===t?"My Title":t,n=e.description,r=void 0===n?"My desription":n,o=e.className,l=void 0===o?"bg-dark text-white p-4":o,s=e.children;return c.a.createElement("div",null,c.a.createElement(p,null),c.a.createElement("div",{className:"container-fluid"},c.a.createElement("div",{className:"jumbotron bg-dark text-white text-center"},c.a.createElement("h2",{className:"display-4"},a),c.a.createElement("p",{className:"lead"},r)),c.a.createElement(f.a,{position:"top-center"}),c.a.createElement("div",{className:l},s)),c.a.createElement("footer",{className:"footer bg-dark mt-auto py-3"},c.a.createElement("div",{className:"container-fluid bg-success text-white text-center py-3"},c.a.createElement("h4",null,"If you got any questions, feel free to reach out!"),c.a.createElement("button",{className:"btn btn-warning btn-lg"},"Contact Us")),c.a.createElement("div",{className:"container"},c.a.createElement("span",{className:"text-muted"},"Copyright \xa9 2020 Chirag. All rights reserved."))))},g=a(3),h=a(41),b=function(e){var t=e.product,a="".concat(m,"/product/photo/").concat(t._id);return c.a.createElement(h.a,{top:!0,width:"100%",src:a,alt:"Product Image Not loaded"})},v=a(42),N=function(e){var t=e.product,a=e.addedtoCart,r=e.className,o=void 0===r?" card text-white bg-dark border border-secondary col-md-3 m-2":r,l=e.removeFromCart,m=void 0!==l&&l,u=e.setReload,d=void 0===u?function(e){return e}:u,p=e.reload,f=void 0===p?void 0:p,E=Object(n.useState)(!1),h=Object(i.a)(E,2),v=h[0],N=h[1],j=Object(n.useState)(t.count),y=Object(i.a)(j,2),O=(y[0],y[1],t?t.name:"A photo from pexels"),k=t?t.description:"Default description",w=t?t.price:"DEFAULT",S=function(){!function(e,t){var a=[];"undefined"!==typeof window&&(localStorage.getItem("cart")&&(a=JSON.parse(localStorage.getItem("cart"))),a.push(Object(g.a)(Object(g.a)({},e),{},{count:1})),localStorage.setItem("cart",JSON.stringify(a)),t())}(t,(function(){return N(!0)}))};return c.a.createElement("div",{className:o},c.a.createElement("div",{className:"card-header lead"},O),c.a.createElement("div",{className:"card-body"},function(e){if(e)return c.a.createElement(s.a,{to:"/cart"})}(v),c.a.createElement(b,{product:t}),c.a.createElement("p",{className:"lead bg-success font-weight-normal text-wrap"},k),c.a.createElement("p",{className:"btn btn-success rounded  btn-sm px-4"},"$ ",w),c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-12"},function(e){return console.log(e),e?"":c.a.createElement("button",{onClick:S,className:"btn btn-block btn-outline-success mt-2 mb-2"},"Add to Cart")}(a)),c.a.createElement("div",{className:"col-12"},function(e){return e&&c.a.createElement("button",{onClick:function(){!function(e,t){var a=[];"undefined"!==typeof window&&(localStorage.getItem("cart")&&((a=JSON.parse(localStorage.getItem("cart"))).map((function(t,n){return t._id===e&&a.splice(n,1),a})),localStorage.setItem("cart",JSON.stringify(a))),t())}(t._id,(function(){})),d(!f)},className:"btn btn-block btn-outline-danger mt-2 mb-2"},"Remove from cart")}(m)))))},j=function(){var e=Object(n.useState)([]),t=Object(i.a)(e,2),a=t[0],r=t[1],o=function(){fetch("".concat(m,"/products")).then((function(e){return e.json()})).catch((function(e){return console.error(e)})).then((function(e){if(e.error)return f.b.error(e.error);r(e),console.log(e)})).catch((function(e){return console.log(e)}))};return Object(n.useEffect)((function(){o()}),[]),c.a.createElement(E,{title:"Home",description:"Wecome To the Tshirt Store"},c.a.createElement("div",{className:"row"},a.map((function(e){return c.a.createElement(N,{key:e._id,product:e,addtoCartButton:"true"})}))))},y=a(15),O=a(43),k=a(44),w=a(45),S=a(26),C=function(){var e=Object(n.useState)({email:"",name:"",password:"",error:"",success:!1}),t=Object(i.a)(e,2),a=t[0],r=t[1],o=a.email,s=a.name,u=a.password,d=a.error,p=a.success,f=function(e){return function(t){r(Object(g.a)(Object(g.a)({},a),{},Object(y.a)({error:!1},e,t.target.value)))}},h=function(e){var t;e.preventDefault(),r(Object(g.a)(Object(g.a)({},a),{},{error:!1})),(t={name:s,email:o,password:u},fetch("".concat(m,"/signup"),{method:"POST",headers:{Accept:"application/json","content-type":"application/json"},body:JSON.stringify(t)}).then((function(e){return e.json()})).catch((function(e){return console.log(e)}))).then((function(e){e.error?r(Object(g.a)(Object(g.a)({},a),{},{error:e.error,success:!1})):r(Object(g.a)(Object(g.a)({},a),{},{name:"",password:"",email:"",error:"",success:!0}))})).catch((function(e){return console.log(e)}))};return c.a.createElement(E,{title:"SignUp",description:"Signup Page"},c.a.createElement("div",{className:"alert alert-success",style:{display:p?"":"none"}},"New Account created Succesfully. ",c.a.createElement(l.b,{to:"/signin"},"Login Here")),c.a.createElement("div",{className:"alert alert-danger",style:{display:d?"":"none"}},d),c.a.createElement(O.a,{className:"container offset-md-3 col-md-6  "},c.a.createElement(k.a,null,c.a.createElement(w.a,{for:"Name"},"Name"),c.a.createElement(v.a,{type:"name",name:"name",id:"Name",placeholder:"Enter Your Name",className:"form-control",onChange:f("name"),value:s})),c.a.createElement(k.a,null,c.a.createElement(w.a,{for:"Email"},"Email"),c.a.createElement(v.a,{type:"email",name:"email",id:"Email",placeholder:"Enter Your Email",onChange:f("email"),value:o})),c.a.createElement(k.a,null,c.a.createElement(w.a,{for:"Password"},"Password"),c.a.createElement(v.a,{type:"password",name:"password",id:"Password",placeholder:"Enter Password",onChange:f("password"),value:u})),c.a.createElement(S.a,{onClick:h},"Submit")))},P=function(){var e=Object(n.useState)({email:"tester@shopit.com",password:"password",loading:!1,didRedirect:!1}),t=Object(i.a)(e,2),a=t[0],r=t[1],o=a.email,l=a.password,d=a.loading,p=a.didRedirect,h=u().user,b=function(e){return function(t){r(Object(g.a)(Object(g.a)({},a),{},Object(y.a)({},e,t.target.value)))}},v=function(e){e.preventDefault(),r(Object(g.a)(Object(g.a)({},a),{},{loading:!0})),function(e){return fetch("".concat(m,"/signin"),{method:"POST",headers:{Accept:"application/json","content-type":"application/json"},body:JSON.stringify(e)}).then((function(e){return e.json()})).catch((function(e){return console.log(e)}))}({email:o,password:l}).then((function(e){e.error?(r(Object(g.a)(Object(g.a)({},a),{},{loading:!1})),f.b.error(e.error)):function(e,t){"undefined"!==typeof window&&(localStorage.setItem("jwt",JSON.stringify(e)),t())}(e,(function(){r(Object(g.a)(Object(g.a)({},a),{},{didRedirect:!0,loading:!1})),f.b.success("Account Created Succesfully")}))})).catch(console.log("signin request failed"))};return c.a.createElement(E,{title:"Sign In page",description:"A page for user to sign in!",className:""},d&&c.a.createElement("div",{className:"alert alert-info col-md-4"},c.a.createElement("h2",null,"Loading...")),c.a.createElement("div",{className:"row "},c.a.createElement("div",{className:"col-md-4 offset-md-4 bg-dark mb-3 p-3  rounded"},c.a.createElement("h2",{className:"text-white text-center "},"Sign In Here"),c.a.createElement("form",null,c.a.createElement("div",{className:"form-group"},c.a.createElement("label",{className:"text-light"},"Email"),c.a.createElement("input",{onChange:b("email"),value:o,className:"form-control",type:"email"})),c.a.createElement("div",{className:"form-group"},c.a.createElement("label",{className:"text-light"},"Password"),c.a.createElement("input",{onChange:b("password"),value:l,className:"form-control",type:"password"})),c.a.createElement("button",{onClick:v,className:"btn btn-success btn-block"},"Submit")))),p?h&&1===h.role?c.a.createElement(s.a,{to:"/admin/dashboard"}):c.a.createElement(s.a,{to:"/user/dashboard"}):u()?c.a.createElement(s.a,{to:"/"}):void 0)},x=a(18),A=function(e){var t=e.component,a=Object(x.a)(e,["component"]);return c.a.createElement(s.b,Object.assign({},a,{render:function(e){var a=e.location;return u()&&1===u().user.role?c.a.createElement(t,null):c.a.createElement(s.a,{to:{pathname:"/signin",state:{from:a}}})}}))},F=function(e){var t=e.component,a=Object(x.a)(e,["component"]);return c.a.createElement(s.b,Object.assign({},a,{render:function(e){var a=e.location;return u()&&0===u().user.role?c.a.createElement(t,null):c.a.createElement(s.a,{to:{pathname:"/signin",state:{from:a}}})}}))},I=a(46),D=function(){return fetch("".concat(m,"/categories"),{method:"GET"}).then((function(e){return e.json()})).catch((function(e){return console.log(e)}))},_=(a(24),function(){var e=Object(n.useState)(""),t=Object(i.a)(e,2),a=t[0],r=t[1],o=u(),l=o.user,s=o.token;return c.a.createElement("div",{className:"card"},c.a.createElement("h4",{className:"card-header"},"Create Category"),c.a.createElement(O.a,{inline:!0,className:"p-4"},c.a.createElement(k.a,null,c.a.createElement(w.a,{for:"name"},"Name"),"  ",c.a.createElement(v.a,{id:"name",type:"text",value:a,onChange:function(e){r(e.target.value)},required:!0,placeholder:"Ex. Summer Collection"}),"  ",c.a.createElement(I.a,{color:"success",onClick:function(e){e.preventDefault(),function(e,t,a){return fetch("".concat(m,"/category/create/").concat(e),{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer ".concat(t)},body:JSON.stringify(a)}).then((function(e){return e.json()})).catch((function(e){console.log(e)}))}(l._id,s,{name:a}).then((function(e){if(e.error)return f.b.error(e.error);f.b.success("Category created Successfully"),r("")}))}},"Add Category"))))}),T=function(){var e=u().user,t=e.name,a=e.email;return c.a.createElement("div",{className:"card"},c.a.createElement("h4",{className:"card-header"},"Admin Panel"),c.a.createElement("ul",{className:"listgroup"},c.a.createElement("li",{className:"listgroup-item"},c.a.createElement("span",{className:"badge badge-success"},"Name"),t),c.a.createElement("li",{className:"listgroup-item"},c.a.createElement("span",{className:"badge badge-success"},"Email"),a)))},J=a(47),q=function(){var e=Object(n.useState)({name:"",price:"",photo:"",createdProduct:"",description:"",stock:"",categories:[],category:"",formdata:""}),t=Object(i.a)(e,2),a=t[0],r=t[1],o=a.name,l=a.price,s=a.description,d=a.stock,p=a.categories,E=a.formdata,h=a.category,b=a.createdProduct;Object(n.useEffect)((function(){D().then((function(e){if(e.error)return console.log(e.error);r(Object(g.a)(Object(g.a)({},a),{},{categories:e,formdata:new FormData}))}))}),[]);var N=function(e){return function(t){var n="photo"===e?t.target.files[0]:t.target.value;r(Object(g.a)(Object(g.a)({},a),{},Object(y.a)({},e,n))),E.set(e,n)}},j=u(),S=j.user,C=j.token,P=function(e){e.preventDefault(),function(e,t,a){return fetch("".concat(m,"/product/create/").concat(e),{method:"POST",headers:{Accept:"application/json",Authorization:"Bearer ".concat(t)},body:a}).then((function(e){return e.json()})).catch((function(e){return console.log(e)}))}(S._id,C,E).then((function(e){e.error?f.b.error(e.error):(r(Object(g.a)(Object(g.a)({},a),{},{name:"",price:"",description:"",stock:"",photo:"",createdProduct:e.name})),f.b.success("".concat(b," Product added Successfully")))}))};return c.a.createElement("div",{className:"card"},c.a.createElement(n.Fragment,null,c.a.createElement("h4",{className:"card-header"},"Add Product"),c.a.createElement(O.a,{className:"p-4",id:"form"},c.a.createElement(k.a,null,c.a.createElement(w.a,{for:"name"},"Name"),c.a.createElement(v.a,{id:"name",type:"text",value:o,onChange:N("name"),required:!0,placeholder:"Product Name"})),c.a.createElement(k.a,null,c.a.createElement(w.a,{for:"price"},"Price"),c.a.createElement(v.a,{id:"price",type:"number",value:l,onChange:N("price"),required:!0})),c.a.createElement(k.a,null,c.a.createElement(w.a,{for:"description"},"description"),c.a.createElement(v.a,{id:"description",type:"text",value:s,onChange:N("description"),required:!0,placeholder:"About Product"})),c.a.createElement(k.a,null,c.a.createElement(w.a,{for:"category"},"Select Category"),c.a.createElement(v.a,{type:"select",name:"select",id:"category",value:h,onChange:N("category")},p&&p.map((function(e,t){return c.a.createElement("option",{key:t,id:e._id},e.name,E.set("category",e._id))})))),c.a.createElement(k.a,null,c.a.createElement(w.a,{for:"stock"},"stock"),c.a.createElement(v.a,{id:"stock",type:"number",value:d,onChange:N("stock"),required:!0,placeholder:"Ex. 1,2....10"})),c.a.createElement(k.a,null,c.a.createElement(w.a,{for:"File"},"File"),c.a.createElement(v.a,{type:"file",name:"file",id:"File",accept:"image",onChange:N("photo")}),c.a.createElement(J.a,{color:"muted"},"upload Image")),c.a.createElement(I.a,{color:"success",onClick:P},"Add product"))))},B=a(48),U=a(49),M=function(e){var t=e.product,a=Object(n.useState)({name:"",price:"",photo:"",createdProduct:"",description:"",stock:"",categories:[],category:"",formdata:""}),r=Object(i.a)(a,2),o=r[0],l=r[1],s=o.name,d=o.price,p=o.description,E=o.stock,h=o.categories,b=o.formdata,N=o.category,j=o.createdProduct,S=function(){var e;D().then((function(e){if(e.error)return console.log(e.error);l(Object(g.a)(Object(g.a)({},o),{},{categories:e,formdata:new FormData}))})),(e=t._id,fetch("".concat(m,"/product/").concat(e),{method:"GET"}).then((function(e){return e.json()})).catch((function(e){return console.log(e)}))).then((function(e){e.error?f.b.error("Unable to get Product Details"):l(Object(g.a)(Object(g.a)({},o),{},{name:t.name,price:t.price,description:t.description,stock:t.stock,category:t.category,formdata:new FormData}))}))};Object(n.useEffect)((function(){S()}),[]);var C=function(e){return function(t){var a,n="photo"===e?t.target.files[0]:t.target.value;l(Object(g.a)(Object(g.a)({},o),{},(a={},Object(y.a)(a,e,n),Object(y.a)(a,"formdata",new FormData),a))),b.set(e,n)}},P=u(),x=P.user,A=P.token,F=function(e){e.preventDefault(),function(e,t,a){return fetch("".concat(m,"/product/").concat(e,"/").concat(t),{method:"PUT",headers:{Accept:"application/json",Authorization:"Bearer ".concat(a)}}).then((function(e){return e.json()})).catch((function(e){return console.log(e)}))}(t._id,x._id,A).then((function(e){console.log(e),e.error?f.b.error(e.error):(l(Object(g.a)(Object(g.a)({},o),{},{name:"",price:"",description:"",stock:"",photo:"",createdProduct:e.name})),f.b.success("".concat(j," Product updated Successfully")))}))},_=function(){return c.a.createElement("div",{className:"card center"},c.a.createElement("h4",{className:"card-header"},"Update Product"),c.a.createElement(O.a,{className:"p-4",id:"form"},c.a.createElement(k.a,null,c.a.createElement(w.a,{for:"name"},"Name"),c.a.createElement(v.a,{id:"name",type:"text",value:s,onChange:C("name"),required:!0,placeholder:"Product Name"})),c.a.createElement(k.a,null,c.a.createElement(w.a,{for:"price"},"Price"),c.a.createElement(v.a,{id:"price",type:"number",value:d,onChange:C("price"),required:!0})),c.a.createElement(k.a,null,c.a.createElement(w.a,{for:"description"},"description"),c.a.createElement(v.a,{id:"description",type:"text",value:p,onChange:C("description"),required:!0,placeholder:"About Product"})),c.a.createElement(k.a,null,c.a.createElement(w.a,{for:"category"},"Select Category"),c.a.createElement(v.a,{type:"select",name:"select",id:"category",value:N,onChange:C("category")},h&&h.map((function(e,t){return c.a.createElement("option",{key:t,id:e._id},e.name,b.set("category",e._id))})))),c.a.createElement(k.a,null,c.a.createElement(w.a,{for:"stock"},"stock"),c.a.createElement(v.a,{id:"stock",type:"number",value:E,onChange:C("stock"),required:!0,placeholder:"Ex. 1,2....10"})),c.a.createElement(k.a,null,c.a.createElement(w.a,{for:"File"},"File"),c.a.createElement(v.a,{type:"file",name:"file",id:"File",accept:"image",onChange:C("photo")}),c.a.createElement(J.a,{color:"muted"},"upload Image")),c.a.createElement(I.a,{color:"success",onClick:F},"Update product")))};return c.a.createElement(_,null)},R=function(e){var t=e.product,a=u(),r=a.user,o=a.token,l=Object(n.useState)(c.a.createElement("span",null)),s=Object(i.a)(l,2),d=s[0],p=s[1],E=function(e){(function(e,t,a,n){return fetch("".concat(m,"/product/").concat(e,"/").concat(t),{method:"DELETE",headers:{Accept:"application/json",Authorization:"Bearer ".concat(a)},body:n}).then((function(e){return e.json})).catch((function(e){return console.log(e)}))})(e._id,r._id,o).then((function(t){if(t.error)return f.b.error(t.error);f.b.success(e.name+" deleted Successfully")}))};return c.a.createElement(B.a,null,c.a.createElement("div",{className:"row"},c.a.createElement("span",{className:"col-md-4"},t.name),c.a.createElement("span",{className:"col-md-5"},t.description),c.a.createElement(S.a,{id:t._id,className:"col-md-1 mr-1 p-1",color:"success",onClick:function(){p(c.a.createElement(M,{product:t}))}},"Update"),c.a.createElement(S.a,{className:"col-md-1 p-1 col-sm-6",color:"danger",onClick:function(){E(t)}},"Delete")),c.a.createElement("div",{className:"row mt-3 "},c.a.createElement("div",{className:"col align-self-end "},d)))},z=function(){var e=Object(n.useState)([]),t=Object(i.a)(e,2),a=t[0],r=t[1],o=function(){fetch("".concat(m,"/products"),{method:"GET"}).then((function(e){return e.json()})).catch((function(e){return console.log(e)})).then((function(e){if(e.error)return f.b.error(e.error);r(e)}))};return Object(n.useEffect)((function(){o()}),[a]),c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"row"},c.a.createElement("h4",null,a.length?"Manage Products (".concat(a.length,")"):"Manage Products")),c.a.createElement(U.a,null,a.map((function(e,t){return c.a.createElement(R,{key:t,product:e})}))))},G=function(){var e=Object(n.useState)(c.a.createElement(T,null)),t=Object(i.a)(e,2),a=t[0],r=t[1];return c.a.createElement(E,{title:"Admin-DashBoard",description:"Welcome Admin",className:"container bg-success p-4 m-4"},c.a.createElement("div",{className:"row  "},c.a.createElement("div",{className:"col-md-3 "},c.a.createElement("div",{className:"card "},c.a.createElement("h4",{className:"card-header ",style:{cursor:"pointer"},onClick:function(){r(c.a.createElement(T,null))}},"Admin Info"),c.a.createElement("ul",{className:"list-group"},c.a.createElement("li",{className:"list-group-item"},c.a.createElement("span",{className:"nav-link text-success",style:{cursor:"pointer"},onClick:function(){r(c.a.createElement(_,null))}},"Create Category")),c.a.createElement("li",{className:"list-group-item"},c.a.createElement("span",{className:"nav-link text-success",style:{cursor:"pointer"},onClick:function(){r(c.a.createElement(q,null))}},"Add Product")),c.a.createElement("li",{className:"list-group-item"},c.a.createElement("span",{className:"nav-link text-success",style:{cursor:"pointer"},onClick:function(){r(c.a.createElement(z,null))}},"Manage Products")),c.a.createElement("li",{className:"list-group-item"},c.a.createElement(l.b,{className:"nav-link text-success",to:"/admin/orders"},"Manage Orders"))))),c.a.createElement("div",{className:"col-md-9 mt-3"},a)))},H=function(){return c.a.createElement(E,{title:"UserDashBoard",description:"UserDashBoard"},c.a.createElement("h1",null," User DashBoard"))},L=function(e){var t=e.products;return c.a.createElement("div",null,c.a.createElement("h2",null," ",t&&t.length>0?function(){var e=0;return t.map((function(t){return e+=t.price})),"Your Total Bill is: "+e+" $"}():"Add Something into the Cart "," "))},Y=function(){var e=Object(n.useState)([]),t=Object(i.a)(e,2),a=t[0],r=t[1],o=Object(n.useState)(!1),l=Object(i.a)(o,2),s=l[0],m=l[1];Object(n.useEffect)((function(){r(function(){if("undefined"!==typeof window&&localStorage.getItem("cart"))return JSON.parse(localStorage.getItem("cart"))}())}),[s]);return c.a.createElement(E,{title:"Cart",description:"Proceed to Checkout"},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-6"},a?a.map((function(e){return c.a.createElement(N,{key:e._id,product:e,className:"col-md-6 mb-2",addedtoCart:"false",removeFromCart:"true",setReload:m,reload:s})})):c.a.createElement("h3",{className:"text-center border border-success rounded-pill"},"No Products Added")),c.a.createElement("div",{className:"col-6"},c.a.createElement(L,{products:a}))))},W=function(){return c.a.createElement(l.a,null,c.a.createElement(s.d,null,c.a.createElement(s.b,{path:"/",exact:!0,component:j}),c.a.createElement(s.b,{path:"/signup",component:C}),c.a.createElement(s.b,{path:"/signin",component:P}),c.a.createElement(s.b,{path:"/cart",component:Y}),c.a.createElement(A,{path:"/admin/dashboard"},c.a.createElement(G,null)),c.a.createElement(F,{path:"/user/dashboard"},c.a.createElement(H,null))))};o.a.render(c.a.createElement(W,null),document.getElementById("root"))}},[[27,1,2]]]);
//# sourceMappingURL=main.9195e48a.chunk.js.map