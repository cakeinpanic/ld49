(this["webpackJsonpunstable-game"]=this["webpackJsonpunstable-game"]||[]).push([[0],[,,,,,,,function(e,t,a){},,,,,,,function(e,t,a){},function(e,t,a){},,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t),t.default=a.p+"1e08c02ffb091b99fb2facf24618c7f8.mp3"},function(e,t,a){"use strict";a.r(t),t.default=a.p+"ed14d2196c6a0a8bf20a14c8c076ddd8.mp3"},function(e,t,a){"use strict";a.r(t),t.default=a.p+"e50d51ee58c6ec04b8cffdb182707bfa.mp3"},function(e,t,a){"use strict";a.r(t),t.default=a.p+"786120ca73fc6fc78ce66d044b9d37d2.mp3"},function(e,t,a){"use strict";a.r(t),t.default=a.p+"de8730f7f67fb59b3387c7dab07f1b00.mp3"},function(e,t,a){"use strict";a.r(t),t.default=a.p+"2547c50ab2ea29129121bb2e92415d91.mp3"},function(e,t,a){"use strict";a.r(t),t.default=a.p+"2ab3acbb7166e282f2465998f93c1c7e.mp3"},function(e,t,a){"use strict";a.r(t);var s,n=a(1),c=a.n(n),o=a(8),r=a.n(o),i=(a(14),a(2));a(7),a(15);function u(e){return e>=4.5?s.happy:e>=2.5?s.ok:e>=0?s.neutral:e>=-2.5?s.sad:s.nightmare}!function(e){e.happy="happy",e.ok="ok",e.neutral="neutral",e.sad="sad",e.nightmare="nightmare"}(s||(s={}));var l=c.a.createContext({score:0,isGameOver:!1,lampState:s.neutral,setScore:function(){}}),d=a(9),b={question:"Thank you, really, thank you! I was so unstable, I thought I'm gonna die from loneliness. But now I believe in my future",used:!1,answers:[{text:"Bye, Greg! It was so nice meeting you. I'm glad I helped!",score:0}]},m={question:"I was unstable in the beginning, but now I am just dead, just dead, I can not move, I can not light. I will stay here on the floor forever",used:!1,answers:[{text:"Oh no, did I really make you so desperate by only few words I said?\nAre words SO powerful?\nI want to try again",score:0}]},j=a(0),f={currentPhraseIndex:0,setNextPhrase:function(){},getQuestion:function(){return"string"},getAnswers:function(){return[]}},p=[{question:"Hey...I'm Greg the Lamp",used:!1,answers:[{text:"Hi, Greg",score:0},{text:"I'm not interested",score:-1},{text:"You look sad, Greg, wanna talk?",score:.5},{text:"Wow, talking lamp, lol",score:-.5}]}].concat(Object(d.a)([{question:"I feel lonely",used:!1,answers:[{text:"Hug",score:1},{text:"Ignore",score:-1},{text:"Everyone's lonely...",score:-.5},{text:"I'm lonely too",score:.5}]},{question:"I feel abused, everyone uses me to get what they want!",used:!1,answers:[{text:"Hug",score:1},{text:"Turn him off",score:-1},{text:"...",score:-.5},{text:"Your are helping people to see things at night or just to feel cozy, you are good lamp",score:1}]},{question:"I don't have any friends, why do other lamps avoid me?",used:!1,answers:[{text:"I'm not a lamp, but we can be friends",score:1},{text:"Nobody wanna be a friend with you, you are just an old lamp",score:-2},{text:"Start looking for another lamp",score:-1},{text:"Tell me more about other lamps. Why do think so?",score:.5}]},{question:"Sometimes I think about changing my job. Is it real for lamp like me to become a game dev?",used:!1,answers:[{text:"Nah, you should be good at math",score:-2},{text:"Hug",score:-.5},{text:"I heard that they have a nice salary",score:-1},{text:"You should give it a try. I belive in you.",score:1}]},{question:"They keep forgeting to turn me off, I can burn out!",used:!1,answers:[{text:"I don't know. You should ask your them, not me",score:-1},{text:"I thought you like your work",score:-2},{text:"...",score:0},{text:"You should not wait for their attention. You are just a lamp",score:-2}]}].map((function(e){return{value:e,sort:Math.random()}})).sort((function(e,t){return e.sort-t.sort})).map((function(e){return e.value})))),h=c.a.createContext(f);function g(e){var t=e.isGameOver,a=e.setGameOver,c=e.children,o=Object(n.useContext)(l).lampState,r=Object(n.useState)(0),u=Object(i.a)(r,2),d=u[0],f=u[1];return Object(j.jsx)(h.Provider,{value:{currentPhraseIndex:d,setNextPhrase:function(){p[d].used=!0,d===p.length-1?a():f(d+1)},getQuestion:function(){var e;return t?o===s.nightmare?m.question:b.question:(null===(e=p[d])||void 0===e?void 0:e.question)||"Game over"},getAnswers:function(){var e;return t?o===s.nightmare?m.answers:b.answers:(null===(e=p[d])||void 0===e?void 0:e.answers)||[]}},children:c})}function O(e){var t=e.doRestartGame,a=Object(n.useContext)(l),s=a.score,c=a.setScore,o=a.isGameOver,r=Object(n.useContext)(h),i=r.getAnswers,u=r.setNextPhrase;return Object(j.jsx)(j.Fragment,{children:Object(j.jsx)("div",{className:"Buttons "+(o?"gameover":""),children:i().map((function(e){return Object(j.jsx)("div",{className:"btn btn--stripe",onClick:function(){return a=e.score,void(o?t():(c(s+a),u()));var a},children:e.text},e.text)}))})})}var y=c.a.createContext({});function A(e){var t=e.children,a=e.setAllIsLoaded,s=Object(n.useState)(!1),c=Object(i.a)(s,2),o=c[0],r=c[1],u=Object(n.useState)(!1),l=Object(i.a)(u,2),d=l[0],b=l[1];return Object(n.useEffect)((function(){o&&d&&setTimeout(a(o&&d),1e3)}),[o,d,a]),Object(j.jsx)(y.Provider,{value:{soundLoaded:r,imagesAreLoaded:b},children:t})}a(17);var v=function(e){var t=e.onStart,a=e.allIsLoaded,s=Object(n.useState)(!1),c=Object(i.a)(s,2),o=c[0],r=c[1];return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsxs)("div",{className:"doors-container",children:[Object(j.jsx)("div",{className:"door",onClick:function(){var e=document.body;null===e||void 0===e||e.style.setProperty("--anim","infinite"),t(),r(!0)},children:Object(j.jsxs)("div",{className:"face",children:[Object(j.jsx)("button",{style:{opacity:a?"100%":"0%"},className:"loading-btn btn--stripe btn",children:"Start"}),Object(j.jsx)("div",{className:"right"})]})}),Object(j.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",version:"1.1",style:{display:"none"},children:Object(j.jsxs)("defs",{children:[Object(j.jsxs)("filter",{id:"squiggly-0",children:[Object(j.jsx)("feTurbulence",{id:"turbulence",baseFrequency:"0.01",numOctaves:"3",result:"noise",seed:"0"}),Object(j.jsx)("feDisplacementMap",{id:"displacement",in:"SourceGraphic",in2:"noise",scale:"2"})]}),Object(j.jsxs)("filter",{id:"squiggly-1",children:[Object(j.jsx)("feTurbulence",{id:"turbulence",baseFrequency:"0.01",numOctaves:"3",result:"noise",seed:"1"}),Object(j.jsx)("feDisplacementMap",{in:"SourceGraphic",in2:"noise",scale:"3"})]}),Object(j.jsxs)("filter",{id:"squiggly-2",children:[Object(j.jsx)("feTurbulence",{id:"turbulence",baseFrequency:"0.01",numOctaves:"3",result:"noise",seed:"2"}),Object(j.jsx)("feDisplacementMap",{in:"SourceGraphic",in2:"noise",scale:"2"})]}),Object(j.jsxs)("filter",{id:"squiggly-3",children:[Object(j.jsx)("feTurbulence",{id:"turbulence",baseFrequency:"0.01",numOctaves:"3",result:"noise",seed:"3"}),Object(j.jsx)("feDisplacementMap",{in:"SourceGraphic",in2:"noise",scale:"3"})]}),Object(j.jsxs)("filter",{id:"squiggly-4",children:[Object(j.jsx)("feTurbulence",{id:"turbulence",baseFrequency:"0.01",numOctaves:"3",result:"noise",seed:"4"}),Object(j.jsx)("feDisplacementMap",{in:"SourceGraphic",in2:"noise",scale:"1"})]})]})})]}),Object(j.jsxs)("button",{className:"welcome-btn  btn",style:{opacity:o?"0":"100%",bottom:o?"20px":"60px"},children:["Hi, this is a small cozy game about unstable emotions and things that surround us.",Object(j.jsx)("br",{}),Object(j.jsx)("br",{}),"  It was designed to be played with sound turned on, moreover sound makes the gamplay whole. ",Object(j.jsx)("br",{})," Please turn it on \u2764\ufe0f",Object(j.jsx)("br",{}),Object(j.jsx)("br",{}),Object(j.jsxs)("span",{className:"ref",children:["Developed for ",Object(j.jsx)("a",{rel:"noreferrer",target:"_blank",href:"https://ldjam.com/events/ludum-dare/49",children:"ludum dare 49 game jam"})]})]})]})},x=a.p+"static/media/lamp.cf80ac2c.png",w=a.p+"static/media/light.59e00472.png",I=a.p+"static/media/medium_light.d3ef943c.png",k=a.p+"static/media/sad_lamp.d083bd5f.png",S=a.p+"static/media/sad_light.91eb97c4.png";var C=function(e,t){Object(n.useEffect)((function(){!function(e,t){var a=document.body,n=10,c=80,o=100;switch(e){case s.happy:if(t){n=80,c=100,o=0;break}n=56,c=80,o=50;break;case s.ok:n=40,c=80,o=60;break;case s.neutral:n=30,c=80,o=70;break;case s.sad:n=30,c=80,o=90;break;case s.nightmare:if(t){n=0,c=100,o=100,null===a||void 0===a||a.style.setProperty("--bg","#0e0e15");break}n=10,c=80,o=100}null===a||void 0===a||a.style.setProperty("--darkness-start",n+"%"),null===a||void 0===a||a.style.setProperty("--darkness-end",c+"%"),null===a||void 0===a||a.style.setProperty("--darkness-opacity",o+"%")}(e,t)}),[e,t])};function B(e){var t=Object(i.a)(e,2),a=t[0],s=t[1];return Math.random()*(s-a)+a}var E=[{opacity:0,time:100},{opacity:100,time:1e3},{opacity:0,time:100},{opacity:100,time:100},{opacity:0,time:100},{opacity:100,time:100},{opacity:0,time:200},{opacity:100,time:200},{opacity:0,time:500},{opacity:100,time:5e3}],P=[{opacity:0,time:100},{opacity:100,time:1e3},{opacity:0,time:300},{opacity:100,time:100},{opacity:0,time:100},{opacity:100,time:1e3},{opacity:0,time:100},{opacity:100,time:1500},{opacity:0,time:200},{opacity:100,time:2e3}],L=[{opacity:0,time:100},{opacity:100,time:2e3},{opacity:0,time:100},{opacity:100,time:1e3}],Q=[{opacity:100,time:5e3},{opacity:100,time:5e3}];var T=function(e,t){var a=Object(n.useRef)(),c=Object(n.useCallback)((function(){clearTimeout(a.current),function(e){var t=document.getElementById("root");if(e===s.ok||e===s.happy||e===s.neutral){var a=e===s.ok?B([0,180]):B([70,150]),n=e===s.happy?B([70,120]):B([60,90]);null===t||void 0===t||t.style.setProperty("--brightness",n+"%"),null===t||void 0===t||t.style.setProperty("--hue",a+"deg"),null===t||void 0===t||t.style.setProperty("--saturate",B([90,110])+"%")}else null===t||void 0===t||t.style.setProperty("--hue","0deg"),null===t||void 0===t||t.style.setProperty("--saturate","30%")}(e);var t=[1e3,1e3];switch(e){case s.happy:t=[500,1e3];break;case s.ok:case s.neutral:t=[2e3,5e3]}a.current=setTimeout(c,B(t))}),[e]);return Object(n.useEffect)((function(){c()}),[e,c]),a.current};a(18),a(19);function q(){var e=Object(n.useContext)(l),t=(e.score,e.setScore,Object(n.useContext)(h).getQuestion);return Object(j.jsx)("div",{className:"speech-container",children:Object(j.jsx)("div",{className:"speech",children:t()})})}function N(e){var t=e.showControls,a=Object(n.useContext)(l),c=a.lampState,o=a.isGameOver;T(c),function(e,t){var a=Object(n.useRef)(),c=Object(n.useState)(P),o=Object(i.a)(c,2),r=o[0],u=o[1],l=Object(n.useState)(0),d=Object(i.a)(l,2),b=d[0],m=d[1],j=Object(n.useCallback)((function(){var n=document.body;clearTimeout(a.current),t?e===s.nightmare?null===n||void 0===n||n.style.setProperty("--opacity","0%"):null===n||void 0===n||n.style.setProperty("--opacity","100%"):(null===n||void 0===n||n.style.setProperty("--opacity",r[b].opacity+"%"),a.current=setTimeout((function(){m((b+1)%r.length)}),r[b].time))}),[r,b,t,e]);Object(n.useEffect)((function(){var t;switch(e){case s.happy:case s.ok:t=Q;break;case s.neutral:t=L;break;case s.sad:t=P;break;case s.nightmare:t=E}u(t),m(b%2?1:0)}),[e,b,t]),Object(n.useEffect)((function(){j()}),[j])}(c,o),C(c,o);var r=Object(n.useContext)(y).imagesAreLoaded,u=Object(n.useState)(0),d=Object(i.a)(u,2),b=d[0],m=d[1],f=function(){m(b+1)};Object(n.useEffect)((function(){10===b&&r&&r(!0)}),[b,r]);return Object(j.jsxs)("div",{id:"lamp",children:[[s.nightmare,s.sad,s.neutral,s.ok,s.happy].map((function(e){return function(e){var t,a,n;switch(t=c===e?1:0,e){case s.nightmare:a=k,n=S;break;case s.sad:case s.neutral:a=x,n=I;break;case s.ok:case s.happy:n=w,a=x}return Object(j.jsxs)("div",{style:{opacity:t},className:"lamp-container",children:[Object(j.jsx)("img",{className:"img light",src:n,onLoad:f}),Object(j.jsx)("img",{className:"img lamp",src:a,onLoad:f})]},e)}(e)})),t&&Object(j.jsx)(q,{})]})}var F=a(3),G=a(20).default,H=a(21).default,R=a(22).default,D=a(23).default,M=a(24).default,J=a(25).default,Y=a(26).default,V={loop:!0,soundEnabled:!0,volume:0};function X(e,t,a,s){a&&(e!==t||s?a.fade(a.volume(),0,800):a.fade(a.volume(),.3,800))}function Z(e){var t=e.gameStarted,a=Object(n.useContext)(l),c=a.score,o=a.lampState,r=Object(n.useContext)(y).soundLoaded,u=Object(n.useState)(!1),d=Object(i.a)(u,2),b=d[0],m=d[1],f=Object(F.a)(G,V),p=Object(i.a)(f,2)[1].sound,h=Object(F.a)(H,V),g=Object(i.a)(h,2)[1].sound,O=Object(F.a)(R,V),A=Object(i.a)(O,2)[1].sound,v=Object(F.a)(D,V),x=Object(i.a)(v,2)[1].sound,w=Object(F.a)(M,V),I=Object(i.a)(w,2)[1].sound,k=Object(F.a)(J,{loop:!1,volume:.3}),S=Object(i.a)(k,2)[1].sound,C=Object(F.a)(Y,{loop:!1,volume:.3}),B=Object(i.a)(C,2)[1].sound,E=Object(n.useState)(null),P=Object(i.a)(E,2),L=P[0],Q=P[1],T=Object(n.useRef)(c);Object(n.useEffect)((function(){"loaded"===(null===A||void 0===A?void 0:A.state())&&"loaded"===(null===x||void 0===x?void 0:x.state())&&"loaded"===(null===p||void 0===p?void 0:p.state())&&"loaded"===(null===g||void 0===g?void 0:g.state())&&"loaded"===(null===I||void 0===I?void 0:I.state())&&(r&&r(!0),A.play(),x.play(),I.play(),p.play(),g.play())}),[r,A,I,p,g,x]),Object(n.useEffect)((function(){t&&Q(o)}),[o,t]),Object(n.useEffect)((function(){T.current!==c&&(T.current<c?null===S||void 0===S||S.play():null===B||void 0===B||B.play(),T.current=c)}),[c,B,S]),Object(n.useEffect)((function(){X(L,s.neutral,A,b),X(L,s.nightmare,p,b),X(L,s.sad,g,b),X(L,s.ok,x,b),X(L,s.happy,I,b)}),[b,L,A,I,x,g,p]);return Object(n.useEffect)((function(){m("true"===localStorage.getItem("mute"))}),[]),Object(j.jsx)(j.Fragment,{children:Object(j.jsx)("img",{className:"mute "+b,src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAADsQAAA7EB9YPtSQAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAVISURBVHic7Z1LiBxFHIe/HSaYCLquh90oIvERJ0vAID5AxIMnWV94maPmZIIghoiSQy45GklQD6Je14uo8eJF8HkRNfi4iASDiRBf0cT4QFSQxENtg2S3u6umq+tfPf37oNnDVE8V/fu2erqrqhuEEEIIIYQQQgjRF2asG9BR7gPGwCzwMfAc8Ktpi0QSNgFvAufO274BrjBrlWidAbAL+IPV4Rfby2atE62yFfiQ8uCL7YxVA0U7rAP2AH9TH36xiSnhVuAL/IOXAFPChcCTwL+Ehy8BOs6duF/zkwQvATrMHPAicJZm4UuADjIGTtI8eAnQMS4DDhEveAnQEWaAHcBvxA9fAmTONcC7tBO8BMiYIe6Gzl+0G74EyJBtwCe0H7wEyIwNNLuhIwE6zO3AEdIGLwEyYJZ4N3QkQMe4FziBXfASwIiNwCvYBy8BEjMDPAicwj50CZCYq4G3sA9bAiRmSP28POtNtMT1wGHsA5YAiVkP7AP+wT5cCZCY24AvsQ91qgXIeWXQWfJu31p0rb0MrBtQQecOZhfJWQCRgOHK34uBR4CbgIsS1f0SsJyoLlHCEDc/7iPgysR1f5C4PrEGA+AZ0ocvMmEALFk3QtgxIN05X2SIrgJ6jgToORLAhk3ALbjVyKb1SoC0XAd8DhzHPVzqNLCX9u96ltUL2A2c7KtptPXATuzBoA3AsZL9nqU9CRaBH0vq3UHJBxIgvgD31+zbhgRV4Z8DPtMpIB3X1nz+KO6mXCwJFnFrIRcqymyWAOn4yqNMLAmK8DfWlDsCOgWkOgVcgJPA53uaSLAI/OBZz3ZaPBgSYDWbgW89v2sSCULC31/sJAHSCQBhEryAvwQj4HvP7z3w/x0lQFoBIL4EI+A7z+87cP7OEiC9ABBPgkbh0+LBkAD1NJWgcfi0eDAkgB+TShAlfFo8GBLAn1AJthApfCIfAAkwOSES+D7waj816E5gPhwF7sD9Z9ex3qPMQdzT0SqRAHkRIkEVB4HHfQpKgPxoKoF3+CABcmVSCYLCBwmQM0eBhwPKfwo8EVqJBMiXEe6xd77cCDxP4ACSBMiTEfAebtleCDsJlEAC5Mek4RcESSAB8qJp+AXeEkiAfFgE3scv/D89yuwEnqZGAgmQByPgHern8IG71LsBv0vEXXj0BBoLsB0LmHRUL9qkEglgJ0DTId0oEkgAGwFijec3lkACpBcg2mSOFRpJIAHSChA7/IKJJZAA6QTYwgTz9gMIXXcAkQ+ABCinanVwjPALQiR4iMgHQAKUU7c6OEb4Bb4SaHVwQupWBwM8hcc0Lg985xNodXBC6lYHxwq/wEcCrQ6OvFVRtTo4RrdfRtXpYDslH0iA+AIAXIV7RG5R/ndgt8d+TamsVwKkE6BgHtgKrAvYJwar6h2WlxUt8tPKZl6vfgT2HAnQcwa4W5OipwyAt60bIewY4BYTHLduiLBhCJwEtgGPATfjblik4FiiekQFOb+aLeS6OhdyPp5roquAniMBek7OAizhBjFEj5nFrZC1vscfeyxABLIEnMA+YAlgSBd6A5GAu/Cf9CgBppRLyLM3EInJrTcQBuTUGwhD7sZ/yZUEmFKsewORCVa9gciIOdL3BiJD7sH/ZUoSYEqZA5aRAL1njJsXLwF6zDzwKhKg97TRG4iOMQ+8hgToPWPgZyRAr5kHDiEBek+T3kBMCQtM1huIKWMMnEIC9JoF4HXqwz9t1UCRhgeAXygXYNmuaSIVlwNvsDr8r/F72UN2dG4xYyYs4X4fXAocxr2V44xpi4QQQgghhBBCCCFq+A+hqzfWpZaWiAAAAABJRU5ErkJggg==",onClick:function(){m(!b),localStorage.setItem("mute",""+!b)}})})}var z=function(){var e=Object(n.useState)(!1),t=Object(i.a)(e,2),a=t[0],s=t[1],c=Object(n.useState)(!0),o=Object(i.a)(c,2),r=o[0],d=o[1],b=Object(n.useState)(!1),m=Object(i.a)(b,2),f=m[0],p=m[1],h=Object(n.useState)(0),y=Object(i.a)(h,2),x=y[0],w=y[1],I=Object(n.useState)(u(x)),k=Object(i.a)(I,2),S=k[0],C=k[1],B=Object(n.useState)(!1),E=Object(i.a)(B,2),P=E[0],L=E[1],Q=Object(n.useState)(!1),T=Object(i.a)(Q,2),q=T[0],F=T[1];return Object(n.useEffect)((function(){C(u(x))}),[x]),Object(j.jsx)(j.Fragment,{children:Object(j.jsx)(A,{setAllIsLoaded:L,children:Object(j.jsx)(l.Provider,{value:{isGameOver:q,score:x,setScore:w,lampState:S},children:Object(j.jsxs)(g,{isGameOver:q,setGameOver:function(){F(!0)},children:[Object(j.jsxs)("div",{className:["Game",S,a?" started":"",q?"gameover":""].join(" "),children:[Object(j.jsx)("div",{className:"dark bg "}),Object(j.jsx)("div",{className:"light bg "}),Object(j.jsx)(N,{showControls:f})]}),f&&Object(j.jsx)(O,{doRestartGame:function(){document.location.reload()}}),r&&Object(j.jsx)(v,{allIsLoaded:P,onStart:function(){setTimeout((function(){s(!0)}),900),setTimeout((function(){d(!1)}),5e3),setTimeout((function(){p(!0)}),3e3)}}),Object(j.jsx)(Z,{gameStarted:a})]})})})})},U=function(e){e&&e instanceof Function&&a.e(4).then(a.bind(null,30)).then((function(t){var a=t.getCLS,s=t.getFID,n=t.getFCP,c=t.getLCP,o=t.getTTFB;a(e),s(e),n(e),c(e),o(e)}))};r.a.render(Object(j.jsxs)(c.a.StrictMode,{children:[Object(j.jsx)("link",{href:"https://fonts.googleapis.com/css?family=Baloo+2:400,800",rel:"stylesheet"}),Object(j.jsx)(z,{})]}),document.getElementById("root")),U()}],[[27,1,2]]]);
//# sourceMappingURL=main.ac40dc41.chunk.js.map