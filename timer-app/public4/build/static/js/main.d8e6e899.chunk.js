(this["webpackJsonptimer-app"]=this["webpackJsonptimer-app"]||[]).push([[0],{20:function(e,t,n){},21:function(e,t,n){},22:function(e,t,n){},23:function(e,t,n){},28:function(e,t,n){"use strict";n.r(t);var c=n(3),s=n(7),i=n.n(s),o=n(14),r=n.n(o),a=(n(20),n(9)),l=(n(21),n(22),function(e){return Object(c.jsx)("div",{className:"button-container",onClick:function(){return e.buttonAction()},children:Object(c.jsx)("p",{className:"button-value",children:e.buttonValue})})}),j=function(){var e=Object(s.useState)({ms:0,s:0,m:0,h:0}),t=Object(a.a)(e,2),n=t[0],i=t[1],o=Object(s.useState)({}),r=Object(a.a)(o,2),j=r[0],u=r[1],b=Object(s.useState)(0),m=Object(a.a)(b,2),p=m[0],O=m[1],d=n.ms,f=n.s,x=n.m,h=n.h,v=function(){return 100===d&&(f++,d=0),60===f&&(x++,f=0),60===x&&(h++,f=0),d++,i({ms:d,s:f,m:x,h:h})};return Object(c.jsxs)("div",{className:"timer-container",children:[Object(c.jsx)("div",{className:"time-display",children:Object(c.jsxs)("p",{children:[n.m<10?"0".concat(n.m):n.m,":",n.s<10?"0".concat(n.s):n.s]})}),Object(c.jsxs)("div",{className:"timer-button-container",children:[Object(c.jsx)(l,{buttonAction:function(){1!==p&&(v(),O(1),u(setInterval(v,10)))},buttonValue:"Start"}),Object(c.jsx)(l,{buttonAction:function(){clearInterval(Number(j)),O(2)},buttonValue:"Pause"}),Object(c.jsx)(l,{buttonAction:function(){clearInterval(Number(j)),O(0),i({ms:0,s:0,m:0,h:0})},buttonValue:"Reset"})]})]})},u=(n(23),n(12));u.a.initializeApp({apiKey:"AIzaSyDnZp0VO_sxxOnQtcf5eGDcsGzita9c_Fc",authDomain:"timer-app-6f891.firebaseapp.com",projectId:"timer-app-6f891",storageBucket:"timer-app-6f891.appspot.com",messagingSenderId:"476493702093",appId:"1:476493702093:web:ace1396ff0928aba561a84",measurementId:"G-1Z2KLVYKEH"});var b=u.a.messaging();var m=function(){return Notification.requestPermission().then((function(e){b.getToken().then((function(e){alert(e),prompt("token",e),console.log(e),e||console.log("No registration token available. Request permission to generate one.")})).catch((function(e){console.log("An error occurred while retrieving token. ",e)}))})),Object(c.jsxs)("div",{className:"area",children:[Object(c.jsxs)("ul",{className:"circles",children:[Object(c.jsx)("li",{}),Object(c.jsx)("li",{}),Object(c.jsx)("li",{}),Object(c.jsx)("li",{}),Object(c.jsx)("li",{}),Object(c.jsx)("li",{}),Object(c.jsx)("li",{}),Object(c.jsx)("li",{}),Object(c.jsx)("li",{}),Object(c.jsx)("li",{})]}),Object(c.jsx)("div",{className:"container",children:Object(c.jsx)(j,{})})]})};r.a.render(Object(c.jsx)(i.a.StrictMode,{children:Object(c.jsx)(m,{})}),document.getElementById("root")),"serviceWorker"in navigator?navigator.serviceWorker.register("/sw.js").then((function(e){console.log("ServiceWorker registration successful with scope: ",e.scope)}),(function(e){console.log("ServiceWorker registration failed: ",e)})):console.log("ServiceWorker not found")}},[[28,1,2]]]);
//# sourceMappingURL=main.d8e6e899.chunk.js.map