(this["webpackJsonpwedding-site"]=this["webpackJsonpwedding-site"]||[]).push([[0],[,,,,,function(e,a,t){e.exports=t(16)},,,,,function(e,a,t){},,,function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(3),c=t.n(r),i=(t(10),t(1)),m=t(4);var s=function(e){var a=Object(n.useState)(0),t=Object(i.a)(a,2)[1],l=0,r=Object(m.throttle)((function(){var a=(document.documentElement||document.body).scrollTop;t((function(e){return l=e,a})),e({previousScrollTop:l,currentScrollTop:a})}),250);Object(n.useEffect)((function(){return window.addEventListener("scroll",r),function(){return window.removeEventListener("scroll",r)}}),[r])};t(13);var o=function(){var e=Object(n.useState)(!1),a=Object(i.a)(e,2),t=a[0],r=a[1],c=Object(n.useState)(!1),m=Object(i.a)(c,2),o=m[0],u=m[1];s((function(e){var a=e.previousScrollTop,t=e.currentScrollTop,n=a<t,l=t>80;u(0===t),setTimeout((function(){r(n&&l)}),400)}));var d=o?" navigation-at-top":"",E=t?"navigation-hidden":"";return l.a.createElement("header",null,l.a.createElement("ul",{className:"navigation".concat(d," ").concat(E)},l.a.createElement("li",null,l.a.createElement("a",{href:"#home"},"Home")),l.a.createElement("li",null,l.a.createElement("a",{href:"#about"},"About Us")),l.a.createElement("li",null,l.a.createElement("a",{href:"#times"},"Time & Place"))))},u=(t(14),function(){return l.a.createElement("footer",{className:"footer"},l.a.createElement("div",{className:"img-footer"}),l.a.createElement("div",{className:"footer-entity"},l.a.createElement("p",{className:"footer-title"},"\xa9"," ",l.a.createElement("a",{className:"footer-link",href:"https://github.com/rizk19"},l.a.createElement("strong",null,"Rizki Ahmad Faris"))," .2020"),l.a.createElement("p",{className:"footer-title"},l.a.createElement("a",{className:"footer-link",href:"https://github.com/rizk19"},"rizk19.github.io")),l.a.createElement("caption",{className:"footer-caption"},"Created with love. By designers and developers who love to work together.")))});t(15);var d=function(){return l.a.createElement("div",{className:"wrapper"},l.a.createElement("div",{className:"main-title"},l.a.createElement("h1",null,"We're Getting Married")),l.a.createElement("div",{className:"main",id:"about"},l.a.createElement("ul",{className:"flex-container"},l.a.createElement("li",{className:"flex-item left-box"},l.a.createElement("div",{className:"flex-item-1"}),l.a.createElement("div",{className:"flex-item-wrapperbox-left"},l.a.createElement("div",{className:"flex-item-textbox-left"},l.a.createElement("div",{className:"flex-item-avatar-left"}),l.a.createElement("p",{className:"flex-item-name"},"Sri Hardiana Azizah"),l.a.createElement("p",{className:"flex-item-subname"},"Putri dari Bapak Harun dan Ibu Sri Retno")))),l.a.createElement("li",{className:"flex-item right-box"},l.a.createElement("div",{className:"flex-item-2"}),l.a.createElement("div",{className:"flex-item-wrapperbox-right"},l.a.createElement("div",{className:"flex-item-textbox-right"},l.a.createElement("div",{className:"flex-item-avatar-right"}),l.a.createElement("p",{className:"flex-item-name"},"Rizki Ahmad Faris"),l.a.createElement("p",{className:"flex-item-subname"},"Putra dari Bapak Deni Sobari dan Ibu Siti Nurbayani K.")))))))},E=function(){var e=Object(n.useState)(new Date("10/24/2020").getTime()),a=Object(i.a)(e,1)[0],t=Object(n.useState)({days:0,hours:0,minutes:0,seconds:0}),r=Object(i.a)(t,2),c=r[0],m=r[1];l.a.useEffect((function(){setInterval((function(){return s()}),1e3)}),[]);var s=function(){if(a){var e=(new Date).getTime(),t=a-e,n=Math.floor(t/864e5),l=Math.floor(t%864e5/36e5),r=Math.floor(t%36e5/6e4),c=Math.floor(t%6e4/1e3),i=[1,2,3,4,5,6,7,8,9];n="".concat(n),i.includes(l)?l="0".concat(l):i.includes(r)?r="0".concat(r):i.includes(c)&&(c="0".concat(c)),m({days:n,hours:l,minutes:r,seconds:c})}};return l.a.createElement("div",{className:"section-gap-time"},l.a.createElement("div",{className:"texture-bg"},l.a.createElement("h3",{className:"section-title",id:"times"},"Sabtu, 24 Oktober 2020"),l.a.createElement("ul",{className:"times-container"},l.a.createElement("li",{className:"times-item"},l.a.createElement("div",{className:"times-frame"}),l.a.createElement("p",{className:"times-number"},c.days),l.a.createElement("p",{className:"times-title"},"Hari")),l.a.createElement("li",{className:"times-item"},l.a.createElement("div",{className:"times-frame"}),l.a.createElement("p",{className:"times-number"},c.hours),l.a.createElement("p",{className:"times-title"},"Jam")),l.a.createElement("li",{className:"times-item"},l.a.createElement("div",{className:"times-frame"}),l.a.createElement("p",{className:"times-number"},c.minutes),l.a.createElement("p",{className:"times-title"},"Menit")),l.a.createElement("li",{className:"times-item"},l.a.createElement("div",{className:"times-frame"}),l.a.createElement("p",{className:"times-number"},c.seconds),l.a.createElement("p",{className:"times-title"},"Detik")))))},f=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"section-gap-place"},l.a.createElement("div",{className:"place-wrapper-header"},l.a.createElement("p",{className:"place-title"},"Tempat Resepsi"),l.a.createElement("div",{className:"place-border-address"},l.a.createElement("h3",{className:"place-address-title"},"Masjid Bani Umar"),l.a.createElement("p",{type:"text",disabled:!0,id:"place-address",className:"place-address"},"Jalan Graha Bintaro Kav. GK 4 No. 2-4, Parigi Baru, Pondok Aren, South Tangerang City, Banten 15226"))),l.a.createElement("div",{style:{width:"100%"}},l.a.createElement("iframe",{title:"wedding-route",width:"100%",height:"600",frameBorder:0,scrolling:"no",marginHeight:0,marginWidth:0,src:"https://maps.google.com/maps?width=100%25&height=600&hl=en&q=-6.270600,%20106.689304+(Masjid%20Bani%20Umar)&t=&z=15&ie=UTF8&iwloc=B&output=embed"})),l.a.createElement("a",{className:"maps-button",href:"https://goo.gl/maps/uQ2PEJQ7khdQvT5NA"},"Buka Maps")))};var h=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{style:{}},l.a.createElement("header",{className:"header",id:"home"}),l.a.createElement("div",{className:"header-text-box"},l.a.createElement("h1",{className:"title-header"},"Rizki & Azizah"),l.a.createElement("h4",{className:"side-title-header"},"Wedding"),l.a.createElement("h4",{className:"side-title-header"},"24 - 10 - 2020"))),l.a.createElement("div",{style:{position:"relative"}},l.a.createElement(d,null)),l.a.createElement(E,null),l.a.createElement(f,null))};var p=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(o,null),l.a.createElement(h,null),l.a.createElement(u,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(p,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[5,1,2]]]);
//# sourceMappingURL=main.82b0042b.chunk.js.map