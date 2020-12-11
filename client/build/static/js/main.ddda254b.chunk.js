(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{48:function(t,e,n){"use strict";n.r(e);var c=n(0),a=n(1),s=n.n(a),l=n(17),r=n.n(l),i=(n(24),n(2)),o=n(5),d=n(3),u=n.n(d),j=function(t){var e=Object(a.useState)([]),n=Object(o.a)(e,2),s=n[0],l=n[1];Object(a.useEffect)((function(){u.a.get("http://localhost:8000/api/player/").then((function(t){console.log(t.data),l(t.data)}))}),[]);var r=function(t){window.confirm("Do you really want to delete this player?")?u.a.delete("http://localhost:8000/api/player/delete/"+t).then((function(e){var n;console.log(t),n=t,l(s.filter((function(t){return t._id!==n})))})):Object(i.c)("/player/list")};return console.log(s[0].game1.status),Object(c.jsx)("div",{children:Object(c.jsxs)("div",{className:"Card my-2 ",style:{maxWidth:"600px"},children:[Object(c.jsxs)("div",{className:"card-header justify-content-between",children:[Object(c.jsx)(i.a,{to:"/player/list",className:"card-link",children:"List"}),Object(c.jsx)(i.a,{to:"/player/new",className:"card-link",style:{float:"right"},children:"Add Player"})]}),Object(c.jsxs)("table",{className:"table",children:[Object(c.jsx)("thead",{children:Object(c.jsxs)("tr",{children:[Object(c.jsx)("th",{scope:"col",children:"Player Name:"}),Object(c.jsx)("th",{scope:"col",children:"Preffered Postion"}),Object(c.jsx)("th",{scope:"col",children:"Action"})]})}),Object(c.jsx)("tbody",{children:s.map((function(t,e){return Object(c.jsxs)("tr",{children:[Object(c.jsx)("td",{children:t.name}),Object(c.jsx)("td",{children:t.postion}),Object(c.jsx)("td",{children:Object(c.jsx)("button",{className:"btn btn-danger",onClick:function(e){return r(t._id)},children:"Delete"})})]},e)}))})]})]})})},b=function(t){var e=Object(a.useState)([]),n=Object(o.a)(e,2),s=n[0],l=n[1];Object(a.useEffect)((function(){u.a.get("http://localhost:8000/api/player/").then((function(t){console.log(t.data),l(t.data)}))}),[]);var r=function(t){u.a.put("http://localhost:8000/api/player/game1/"+t,{status:"Playing"}).then((function(t){return console.log("resault",t)})).catch((function(t){return console.log("error",t)}))},d=function(t){u.a.put("http://localhost:8000/api/player/game1/"+t,{status:"NotPlaying"}).then((function(t){return console.log("resault",t)})).catch((function(t){return console.log("error",t)}))},j=function(t){u.a.put("http://localhost:8000/api/player/game1/"+t,{status:"Undecided"}).then((function(t){return console.log("resault",t)})).catch((function(t){return console.log("error",t)}))};return Object(c.jsx)("div",{children:Object(c.jsxs)("div",{className:"Card my-2 ",style:{maxWidth:"600px"},children:[Object(c.jsxs)("div",{className:"card-header justify-content-between",children:[Object(c.jsx)(i.a,{to:"/game/1",className:"card-link ml-5 mr-5",children:"Game1"}),Object(c.jsx)(i.a,{to:"/game/2",className:"card-link mr-5",children:"Game2"}),Object(c.jsx)(i.a,{to:"/game/3",className:"card-link mr-5",children:"Game3"})]}),Object(c.jsxs)("table",{className:"table",children:[Object(c.jsx)("thead",{children:Object(c.jsxs)("tr",{children:[Object(c.jsx)("th",{scope:"col",children:"Player Name:"}),Object(c.jsx)("th",{scope:"col",children:"Action"})]})}),Object(c.jsx)("tbody",{children:s.map((function(t,e){return Object(c.jsxs)("tr",{children:[Object(c.jsx)("td",{children:t.name}),Object(c.jsx)("td",{children:t.game1.map((function(e,n){return Object(c.jsxs)("div",{children:["Playing"===e.status?Object(c.jsx)("button",{type:"button",className:"btn btn-success",onClick:function(e){return r(t._id)},children:"Playing"}):Object(c.jsx)("button",{type:"button",className:"btn btn-light",onClick:function(e){return r(t._id)},children:"Playing"}),"NotPlaying"===e.status?Object(c.jsx)("button",{type:"button",className:"btn btn-danger",onClick:function(e){return d(t._id)},children:"Not Playing"}):Object(c.jsx)("button",{type:"button",className:"btn btn-light",onClick:function(e){return d(t._id)},children:"Not Playing"}),"Undecided"===e.status?Object(c.jsx)("button",{type:"button",className:"btn btn-warning",onClick:function(e){return j(t._id)},children:"Undecided"}):Object(c.jsx)("button",{type:"button",className:"btn btn-light",onClick:function(e){return j(t._id)},children:"Undecided"})]})}))})]},e)}))})]})]})})},h=function(t){var e=Object(a.useState)(""),n=Object(o.a)(e,2),s=n[0],l=n[1],r=Object(a.useState)(""),d=Object(o.a)(r,2),j=d[0],b=d[1],h={status:"Undecided"},m={status:"Undecided"},p={status:"Undecided"},x=Object(a.useState)(""),O=Object(o.a)(x,2),g=O[0],f=O[1];return Object(c.jsx)("div",{children:Object(c.jsxs)("div",{className:"Card my-2",style:{maxWidth:"600px"},children:[Object(c.jsxs)("div",{className:"card-header justify-content-between",children:[Object(c.jsx)(i.a,{to:"/player/list",className:"card-link",children:"List"}),Object(c.jsx)(i.a,{to:"/player/new",className:"card-link",style:{float:"right"},children:"Add Player"})]}),Object(c.jsxs)("form",{className:"mt-2",onSubmit:function(t){t.preventDefault(),u.a.post("http://localhost:8000/api/player/new",{name:s,postion:j,game1:h,game2:m,game3:p}).then((function(t){t.data.error?f(t.data.error.errors.name.message):(console.log(t.data),Object(i.c)("/player/list"))}))},children:[Object(c.jsx)("label",{children:"Player Name"}),s.length<2&&s.length>0?Object(c.jsx)("input",{type:"text",className:"form-control",onChange:function(t){return l(t.target.value)},value:s,style:{"border-color":"rgba(229, 103, 23, 0.8)","box-shadow":" 0 1px 1px rgba(229, 103, 23, 0.075) inset, 0 0 8px rgba(229, 103, 23, 0.6)",outline:"0 none"}}):Object(c.jsx)("input",{type:"text",className:"form-control",onChange:function(t){return l(t.target.value)},value:s}),Object(c.jsx)("p",{className:"text-danger",children:g||""}),Object(c.jsx)("label",{children:"Preffered postion"}),Object(c.jsx)("input",{type:"text",className:"form-control",onChange:function(t){return b(t.target.value)}}),Object(c.jsx)("button",{className:"btn btn-block btn-dark mt-3",children:"Add"})]})]})})},m=function(t){var e=Object(a.useState)([]),n=Object(o.a)(e,2),s=n[0],l=n[1];Object(a.useEffect)((function(){u.a.get("http://localhost:8000/api/player/").then((function(t){console.log(t.data),l(t.data)}))}),[]);var r=function(t){u.a.put("http://localhost:8000/api/player/game2/"+t,{status:"Playing"}).then((function(t){return console.log("resault",t)})).catch((function(t){return console.log("error",t)}))},d=function(t){u.a.put("http://localhost:8000/api/player/game2/"+t,{status:"NotPlaying"}).then((function(t){return console.log("resault",t)})).catch((function(t){return console.log("error",t)}))},j=function(t){u.a.put("http://localhost:8000/api/player/game2/"+t,{status:"Undecided"}).then((function(t){return console.log("resault",t)})).catch((function(t){return console.log("error",t)}))};return Object(c.jsx)("div",{children:Object(c.jsxs)("div",{className:"Card my-2 ",style:{maxWidth:"600px"},children:[Object(c.jsxs)("div",{className:"card-header justify-content-between",children:[Object(c.jsx)(i.a,{to:"/game/1",className:"card-link ml-5 mr-5",children:"Game1"}),Object(c.jsx)(i.a,{to:"/game/2",className:"card-link mr-5",children:"Game2"}),Object(c.jsx)(i.a,{to:"/game/3",className:"card-link mr-5",children:"Game3"})]}),Object(c.jsxs)("table",{className:"table",children:[Object(c.jsx)("thead",{children:Object(c.jsxs)("tr",{children:[Object(c.jsx)("th",{scope:"col",children:"Player Name:"}),Object(c.jsx)("th",{scope:"col",children:"Action"})]})}),Object(c.jsx)("tbody",{children:s.map((function(t,e){return Object(c.jsxs)("tr",{children:[Object(c.jsx)("td",{children:t.name}),Object(c.jsx)("td",{children:t.game2.map((function(e,n){return Object(c.jsxs)("div",{children:["Playing"===e.status?Object(c.jsx)("button",{type:"button",className:"btn btn-success",onClick:function(e){return r(t._id)},children:"Playing"}):Object(c.jsx)("button",{type:"button",className:"btn btn-light",onClick:function(e){return r(t._id)},children:"Playing"}),"NotPlaying"===e.status?Object(c.jsx)("button",{type:"button",className:"btn btn-danger",onClick:function(e){return d(t._id)},children:"Not Playing"}):Object(c.jsx)("button",{type:"button",className:"btn btn-light",onClick:function(e){return d(t._id)},children:"Not Playing"}),"Undecided"===e.status?Object(c.jsx)("button",{type:"button",className:"btn btn-warning",onClick:function(e){return j(t._id)},children:"Undecided"}):Object(c.jsx)("button",{type:"button",className:"btn btn-light",onClick:function(e){return j(t._id)},children:"Undecided"})]})}))})]},e)}))})]})]})})},p=function(t){var e=Object(a.useState)([]),n=Object(o.a)(e,2),s=n[0],l=n[1];Object(a.useEffect)((function(){u.a.get("http://localhost:8000/api/player/").then((function(t){console.log(t.data),l(t.data)}))}),[]);var r=function(t){u.a.put("http://localhost:8000/api/player/game3/"+t,{status:"Playing"}).then((function(t){return console.log("resault",t)})).catch((function(t){return console.log("error",t)}))},d=function(t){u.a.put("http://localhost:8000/api/player/game3/"+t,{status:"NotPlaying"}).then((function(t){return console.log("resault",t)})).catch((function(t){return console.log("error",t)}))},j=function(t){u.a.put("http://localhost:8000/api/player/game3/"+t,{status:"Undecided"}).then((function(t){return console.log("resault",t)})).catch((function(t){return console.log("error",t)}))};return Object(c.jsx)("div",{children:Object(c.jsxs)("div",{className:"Card my-2 ",style:{maxWidth:"600px"},children:[Object(c.jsxs)("div",{className:"card-header justify-content-between",children:[Object(c.jsx)(i.a,{to:"/game/1",className:"card-link ml-5 mr-5",children:"Game1"}),Object(c.jsx)(i.a,{to:"/game/2",className:"card-link mr-5",children:"Game2"}),Object(c.jsx)(i.a,{to:"/game/3",className:"card-link mr-5",children:"Game3"})]}),Object(c.jsxs)("table",{className:"table",children:[Object(c.jsx)("thead",{children:Object(c.jsxs)("tr",{children:[Object(c.jsx)("th",{scope:"col",children:"Player Name:"}),Object(c.jsx)("th",{scope:"col",children:"Action"})]})}),Object(c.jsx)("tbody",{children:s.map((function(t,e){return Object(c.jsxs)("tr",{children:[Object(c.jsx)("td",{children:t.name}),Object(c.jsx)("td",{children:t.game3.map((function(e,n){return Object(c.jsxs)("div",{children:["Playing"===e.status?Object(c.jsx)("button",{type:"button",className:"btn btn-success",onClick:function(e){return r(t._id)},children:"Playing"}):Object(c.jsx)("button",{type:"button",className:"btn btn-light",onClick:function(e){return r(t._id)},children:"Playing"}),"NotPlaying"===e.status?Object(c.jsx)("button",{type:"button",className:"btn btn-danger",onClick:function(e){return d(t._id)},children:"Not Playing"}):Object(c.jsx)("button",{type:"button",className:"btn btn-light",onClick:function(e){return d(t._id)},children:"Not Playing"}),"Undecided"===e.status?Object(c.jsx)("button",{type:"button",className:"btn btn-warning",onClick:function(e){return j(t._id)},children:"Undecided"}):Object(c.jsx)("button",{type:"button",className:"btn btn-light",onClick:function(e){return j(t._id)},children:"Undecided"})]})}))})]},e)}))})]})]})})};var x=function(){return Object(c.jsx)("div",{className:"App",children:Object(c.jsx)("div",{className:"Card bg-white ",style:{maxWidth:"600px"},children:Object(c.jsxs)("div",{className:"card-header justify-content-between",children:[Object(c.jsx)(i.a,{to:"/player/list",className:"card-link",children:"Manage Player"}),Object(c.jsx)(i.a,{to:"/game/1",className:"card-link",style:{float:"right"},children:"Manage Player status"}),Object(c.jsxs)(i.b,{children:[Object(c.jsx)(b,{path:"/game/1"}),Object(c.jsx)(m,{path:"/game/2"}),Object(c.jsx)(p,{path:"/game/3"}),Object(c.jsx)(j,{path:"/player/list"}),Object(c.jsx)(h,{path:"/player/new"})]})]})})})},O=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,49)).then((function(e){var n=e.getCLS,c=e.getFID,a=e.getFCP,s=e.getLCP,l=e.getTTFB;n(t),c(t),a(t),s(t),l(t)}))};r.a.render(Object(c.jsx)(s.a.StrictMode,{children:Object(c.jsx)(x,{})}),document.getElementById("root")),O()}},[[48,1,2]]]);
//# sourceMappingURL=main.ddda254b.chunk.js.map