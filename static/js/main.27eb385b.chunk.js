(this["webpackJsonpunstable-game"]=this["webpackJsonpunstable-game"]||[]).push([[0],[,,,,,,,function(e,t,n){},,,,,,,function(e,t,n){},function(e,t,n){},,function(e,t,n){"use strict";n.r(t),t.default=n.p+"91186c71ad4e82001831e6aefacfc75f.mp3"},function(e,t,n){"use strict";n.r(t),t.default=n.p+"d2278987e445e6e84db2e19883660273.mp3"},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var s=n(0),c=n.n(s),r=n(8),a=n.n(r),o=(n(14),n(2)),u=(n(7),n.p+"static/media/lamp.1ab1e7bb.png"),i=n.p+"static/media/light.e1e92035.png",l=(n(15),c.a.createContext({score:0,setScore:function(){}})),b=n(9),j=n(1),d={currentPhraseIndex:0,setNextPhrase:function(){},getQuestion:function(){return"string"},getAnswers:function(){return[]}},f=[{question:"Hey...I'm Greg the Lamp",used:!1,answers:[{text:"Hi, Greg",score:0},{text:"I'm not interested",score:-2},{text:"You look sad, Greg, wanna talk?",score:3},{text:"Wow, talking lamp, lol",score:-1}]}].concat(Object(b.a)([{question:"I feel lonely",used:!1,answers:[{text:"Hug",score:2},{text:"Ignore",score:-2},{text:"Everyone's lonely...",score:-1},{text:"I'm lonely too",score:1}]}].map((function(e){return{value:e,sort:Math.random()}})).sort((function(e,t){return e.sort-t.sort})).map((function(e){return e.value})))),m=c.a.createContext(d);function O(e){e.setGameOver;var t=e.children,n=Object(s.useState)(0),c=Object(o.a)(n,2),r=c[0],a=c[1];return Object(j.jsx)(m.Provider,{value:{currentPhraseIndex:r,setNextPhrase:function(){f[r].used=!0,r===f.length-1?a(0):a(r+1)},getQuestion:function(){var e;return(null===(e=f[r])||void 0===e?void 0:e.question)||"Game over"},getAnswers:function(){var e;return(null===(e=f[r])||void 0===e?void 0:e.answers)||[]}},children:t})}function p(){var e=Object(s.useContext)(l),t=e.score,n=e.setScore,c=Object(s.useContext)(m),r=c.getAnswers,a=c.setNextPhrase;return Object(j.jsxs)("div",{className:"Buttons",children:[Object(j.jsxs)("div",{className:"score",children:["Score: ",t]}),r().map((function(e){return Object(j.jsx)("div",{className:"btn btn--stripe",onClick:function(){return s=e.score,n(t+s),void a();var s},children:e.text},e.text)}))]})}var h,x=n(6),g=n(17).default,v=n(18).default;function y(e){var t=e.gameStarted,n=Object(s.useContext)(l).score,c=Object(x.a)(g,{loop:!0,soundEnabled:!0,volume:.4}),r=Object(o.a)(c,2),a=r[0],u=r[1].stop,i=Object(x.a)(v,{loop:!0,soundEnabled:!0,volume:.4}),b=Object(o.a)(i,2),d=b[0],f=b[1].stop,m=Object(s.useState)(null),O=Object(o.a)(m,2),p=O[0],y=O[1],P=Object(s.useRef)();return Object(s.useEffect)((function(){t&&(n>3?y(h.happy):n>2||n>-1?y(h.normal):n>-3&&y(h.sad))}),[n,t]),Object(s.useEffect)((function(){if(p&&(null===P.current||P.current!==p)){switch(P.current){case h.normal:u();break;case h.sad:break;case h.happy:f()}switch(p){case h.normal:a();break;case h.sad:break;case h.happy:d()}}}),[p,u,f,d,a]),Object(s.useEffect)((function(){P.current=p}),[p]),Object(j.jsx)(j.Fragment,{})}!function(e){e.happy="happy",e.normal="normal",e.sad="sad"}(h||(h={}));n(19);function P(){var e=Object(s.useContext)(l),t=(e.score,e.setScore,Object(s.useContext)(m).getQuestion);return Object(j.jsx)("div",{className:"speech-container",children:Object(j.jsx)("div",{className:"speech",children:t()})})}var S=document.documentElement;function N(e,t){return Math.random()*(t-e)+e}function k(e){setTimeout((function(){S.style.setProperty("--brightness",N(70,120)+"%"),S.style.setProperty("--hue",N(0,180)+"deg"),S.style.setProperty("--saturate",N(70,120)+"%"),k(N(1e3,1e4))}),e)}function w(){S.style.setProperty("--opacity","0%"),setTimeout((function(){S.style.setProperty("--opacity","100%"),setTimeout((function(){w()}),N(1e3,1e4))}),N(100,200))}var C=function(){k(0),w();var e=Object(s.useState)(!1),t=Object(o.a)(e,2),n=t[0],c=t[1],r=Object(s.useState)(!1),a=Object(o.a)(r,2),b=a[0],d=a[1],f=Object(s.useState)(0),m=Object(o.a)(f,2),h=m[0],x=m[1];return Object(s.useEffect)((function(){n&&d(!0)}),[n]),Object(j.jsx)(j.Fragment,{children:Object(j.jsx)(O,{setGameOver:function(){},children:Object(j.jsxs)(l.Provider,{value:{score:h,setScore:x},children:[Object(j.jsx)(y,{gameStarted:n}),Object(j.jsxs)("div",{className:"Game",children:[Object(j.jsx)("img",{className:"img light",src:i}),Object(j.jsx)("img",{className:"img lamp",src:u}),b&&Object(j.jsx)(P,{}),!n&&Object(j.jsx)("button",{className:"btn--stripe start-btn btn",onClick:function(){c(!0)},children:"Play"})]}),b&&Object(j.jsx)(p,{})]})})})},E=function(e){e&&e instanceof Function&&n.e(4).then(n.bind(null,23)).then((function(t){var n=t.getCLS,s=t.getFID,c=t.getFCP,r=t.getLCP,a=t.getTTFB;n(e),s(e),c(e),r(e),a(e)}))};a.a.render(Object(j.jsxs)(c.a.StrictMode,{children:[Object(j.jsx)("link",{href:"https://fonts.googleapis.com/css?family=Baloo+2:400,800",rel:"stylesheet"}),Object(j.jsx)("div",{className:"light bg"}),Object(j.jsx)(C,{})]}),document.getElementById("root")),E()}],[[20,1,2]]]);
//# sourceMappingURL=main.27eb385b.chunk.js.map