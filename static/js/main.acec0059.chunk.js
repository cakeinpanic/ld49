(this["webpackJsonpunstable-game"]=this["webpackJsonpunstable-game"]||[]).push([[0],[,,,,,,,function(e,t,a){},,,,,,,function(e,t,a){},function(e,t,a){},,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t),t.default=a.p+"1e08c02ffb091b99fb2facf24618c7f8.mp3"},function(e,t,a){"use strict";a.r(t),t.default=a.p+"ed14d2196c6a0a8bf20a14c8c076ddd8.mp3"},function(e,t,a){"use strict";a.r(t),t.default=a.p+"e50d51ee58c6ec04b8cffdb182707bfa.mp3"},function(e,t,a){"use strict";a.r(t),t.default=a.p+"786120ca73fc6fc78ce66d044b9d37d2.mp3"},function(e,t,a){"use strict";a.r(t),t.default=a.p+"de8730f7f67fb59b3387c7dab07f1b00.mp3"},function(e,t,a){"use strict";a.r(t),t.default=a.p+"2547c50ab2ea29129121bb2e92415d91.mp3"},function(e,t,a){"use strict";a.r(t),t.default=a.p+"2ab3acbb7166e282f2465998f93c1c7e.mp3"},function(e,t,a){"use strict";a.r(t);var s,n=a(1),o=a.n(n),c=a(8),r=a.n(c),i=(a(14),a(2));a(7),a(15);function u(e){return e>=4.5?s.happy:e>=2.5?s.ok:e>=0?s.neutral:e>=-2.5?s.sad:s.nightmare}!function(e){e.happy="happy",e.ok="ok",e.neutral="neutral",e.sad="sad",e.nightmare="nightmare",e.dead="dead"}(s||(s={}));var l=o.a.createContext({score:0,isGameOver:!1,lampState:s.neutral,setScore:function(){}}),d=a(9),b={question:"Thank you, really, thank you! I was so unstable, I thought I'm gonna die from loneliness. But now I believe in my future",used:!1,answers:[{text:"Bye, Greg! It was so nice meeting you. I'm glad I helped! Let's chat again, I enjoyed it",score:0}]},m={question:"I was unstable in the beginning, but now I am just dead, just dead, I can not move, I can not light. I will stay here on the floor forever",used:!1,answers:[{text:"Oh no, did I really make you so desperate by only few words I said?\nAre words SO powerful?\nI want to try again",score:0}]},f={question:"I was so unstable in the beginning, and hoped that you could help me, but looks like I'm just a useless lamp and there is no chance for me to feel needed",used:!1,answers:[{text:"Greg, you are mistaken, you are needed and loved, I want to chat with you more to prove it",score:0}]},h=a(0),j={currentPhraseIndex:0,setNextPhrase:function(){},getQuestion:function(){return"string"},getAnswers:function(){return[]}},p=[{question:"Hey...I'm Greg the Lamp",used:!1,answers:[{text:"Hi, Greg",score:0},{text:"Just give me that light already",score:-1.5},{text:"You look sad, Greg, wanna talk?",score:.5},{text:"Wow, talking lamp, lol",score:-.5}]}].concat(Object(d.a)([{question:"I feel lonely",used:!1,answers:[{text:"Hug",score:1},{text:"Ignore",score:-1},{text:"Everyone's lonely...",score:-.5},{text:"I'm lonely too",score:.5}]},{question:"I feel abused, everyone uses me to get what they want!",used:!1,answers:[{text:"Hug",score:1},{text:"Turn him off",score:-1},{text:"...",score:-.5},{text:"Your are helping people to see things at night or just to feel cozy, you are a good lamp",score:1}]},{question:"I don't have any friends. Why do other lamps avoid me?",used:!1,answers:[{text:"I'm not a lamp, but we can be friends",score:1},{text:"Nobody wanna be a friend with you, you are just an old lamp",score:-2},{text:"Start looking for another lamp",score:-1},{text:"Tell me more about other lamps. Why do you think so?",score:.5}]},{question:"Sometimes I think about changing my job. Is it real for lamp like me to become a game dev?",used:!1,answers:[{text:"Nah, you should be good at math",score:-2},{text:"Hug",score:-.5},{text:"I heard that they have a nice salary",score:-1},{text:"You should give it a try. I belive in you.",score:1}]},{question:"They keep forgeting to turn me off, I can burn out!",used:!1,answers:[{text:"I don't know. You should ask your them, not me",score:-1},{text:"I thought you like your work",score:-2},{text:"...",score:0},{text:"You should not wait for their attention. You are just a lamp",score:-2}]},{question:"I think I'm burning out",used:!1,answers:[{text:"Oh lamps! I think I'am too",score:0},{text:"You are just being lazy",score:-2},{text:'"Burning out" it\'s a myth',score:-1},{text:"It must be tense. How long have you been feeling this?",score:2}]},{question:"Smart lamps?! Why do they buy them? Do you think I'am stupid?",used:!1,answers:[{text:"You could ask google if you had wifi",score:-3},{text:"People appreciate your warm light, have you notice that?",score:1},{text:"You are just to old to get it",score:-2},{text:"You just different, there are not better than you",score:.5}]},{question:"I have been feeling irritable lately",used:!1,answers:[{text:"... Oh sorry, What? I was checking Facebook.",score:-2},{text:"You should find a girlfiend. She will chill you",score:-2},{text:"Tell me what irrite you most",score:1},{text:"It's all about weather",score:-1}]},{question:"I feel like I don't do enough",used:!1,answers:[{text:"I think that we all do the best we can",score:1},{text:"What blocks you?",score:-1},{text:"Just work harder",score:-2},{text:"...",score:0}]}].map((function(e){return{value:e,sort:Math.random()}})).sort((function(e,t){return e.sort-t.sort})).map((function(e){return e.value})))),g=o.a.createContext(j);function y(e){var t=e.isGameOver,a=e.setGameOver,o=e.children,c=Object(n.useContext)(l).lampState,r=Object(n.useState)(0),u=Object(i.a)(r,2),d=u[0],j=u[1];return Object(h.jsx)(g.Provider,{value:{currentPhraseIndex:d,setNextPhrase:function(){p[d].used=!0,d===p.length-1?a():j(d+1)},getQuestion:function(){var e;return null===(e=t?c===s.nightmare?m:c===s.happy?b:f:p[d])||void 0===e?void 0:e.question},getAnswers:function(){var e;return(null===(e=t?c===s.nightmare?m:c===s.happy?b:f:p[d])||void 0===e?void 0:e.answers)||[]}},children:o})}function O(e){var t=e.doRestartGame,a=Object(n.useContext)(l),s=a.score,o=a.setScore,c=a.isGameOver,r=Object(n.useContext)(g),i=r.getAnswers,u=r.setNextPhrase;return Object(h.jsx)(h.Fragment,{children:Object(h.jsx)("div",{className:"Buttons-wrapper",children:Object(h.jsx)("div",{className:"Buttons "+(c?"gameover":""),children:i().map((function(e){return Object(h.jsx)("div",{className:"btn btn--stripe",onClick:function(){return a=e.score,void(c?t():(o(s+a),u()));var a},children:e.text},e.text)}))})})})}var v=o.a.createContext({});function A(e){var t=e.children,a=e.setAllIsLoaded,s=Object(n.useState)(!1),o=Object(i.a)(s,2),c=o[0],r=o[1],u=Object(n.useState)(!1),l=Object(i.a)(u,2),d=l[0],b=l[1];return Object(n.useEffect)((function(){c&&d&&setTimeout(a(c&&d),1e3)}),[c,d,a]),Object(h.jsx)(v.Provider,{value:{soundLoaded:r,imagesAreLoaded:b},children:t})}a(17);var x=function(e){var t=e.onStart,a=e.allIsLoaded,s=Object(n.useState)(!1),o=Object(i.a)(s,2),c=o[0],r=o[1],u=Object(n.useState)(!1),l=Object(i.a)(u,2),d=l[0];l[1];return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)("div",{className:"doors-container",children:Object(h.jsx)("div",{className:"door",onClick:function(){return a&&function(){var e=document.body;null===e||void 0===e||e.style.setProperty("--anim","infinite"),t(),r(!0)}()},children:Object(h.jsxs)("div",{className:"face",children:[Object(h.jsx)("button",{style:{opacity:a?"1":"0"},className:"loading-btn btn--stripe btn",children:"Start"}),Object(h.jsx)("div",{style:{opacity:a?"0":"1"},className:"running-stripe preloader",children:"Loading..."}),Object(h.jsx)("div",{className:"right"})]})})}),Object(h.jsxs)("button",{className:"welcome-btn  btn",style:{display:d?"block":void 0,opacity:c?"0":"1",bottom:c?"20px":"60px"},children:["Hi, this is a small cozy game about unstable emotions and things that surround us.",Object(h.jsx)("br",{}),Object(h.jsx)("br",{})," It was designed to be played with sound turned on, moreover sound makes the gamplay whole. ",Object(h.jsx)("br",{})," Please turn it on \u2764\ufe0f",Object(h.jsx)("br",{}),Object(h.jsx)("br",{}),Object(h.jsxs)("span",{className:"ref",children:["Developed for ",Object(h.jsx)("a",{rel:"noreferrer",target:"_blank",href:"https://ldjam.com/events/ludum-dare/49",children:"ludum dare 49 game jam"})]})]})]})},w=a.p+"static/media/dead_lamp.4ef1c2fd.png",I=a.p+"static/media/lamp.cf80ac2c.png",k=a.p+"static/media/light.59e00472.png",S=a.p+"static/media/medium_light.d3ef943c.png",B=a.p+"static/media/sad_lamp.d083bd5f.png",C=a.p+"static/media/sad_light.91eb97c4.png";var E=function(e,t){Object(n.useEffect)((function(){!function(e,t){var a=document.body,n=10,o=80,c=100;switch(e){case s.happy:if(t){n=80,o=100,c=0,null===a||void 0===a||a.style.setProperty("--bg","#6ea8c7");break}n=56,o=80,c=50;break;case s.ok:n=40,o=80,c=60;break;case s.neutral:n=30,o=80,c=70;break;case s.sad:n=30,o=80,c=90;break;case s.nightmare:if(t){n=0,o=100,c=100,null===a||void 0===a||a.style.setProperty("--bg","#0e0e15");break}n=10,o=80,c=100}null===a||void 0===a||a.style.setProperty("--darkness-start",n+"%"),null===a||void 0===a||a.style.setProperty("--darkness-end",o+"%"),null===a||void 0===a||a.style.setProperty("--darkness-opacity",c+"%")}(e,t)}),[e,t])};function P(e){var t=Object(i.a)(e,2),a=t[0],s=t[1];return Math.random()*(s-a)+a}var L=[{opacity:0,time:100},{opacity:100,time:1e3},{opacity:0,time:100},{opacity:100,time:100},{opacity:0,time:100},{opacity:100,time:100},{opacity:0,time:200},{opacity:100,time:200},{opacity:0,time:500},{opacity:100,time:5e3}],q=[{opacity:0,time:100},{opacity:100,time:1e3},{opacity:0,time:300},{opacity:100,time:100},{opacity:0,time:100},{opacity:100,time:1e3},{opacity:0,time:100},{opacity:100,time:1500},{opacity:0,time:200},{opacity:100,time:2e3}],Q=[{opacity:0,time:100},{opacity:100,time:2e3},{opacity:0,time:100},{opacity:100,time:1e3}],N=[{opacity:100,time:5e3},{opacity:100,time:5e3}];var T=function(e,t){var a=Object(n.useRef)(),o=Object(n.useCallback)((function(){clearTimeout(a.current),function(e){var t=document.getElementById("root");if(e===s.ok||e===s.happy||e===s.neutral){var a=e===s.happy?P([0,360]):P([90,150]),n=e===s.happy?P([90,120]):P([60,90]);null===t||void 0===t||t.style.setProperty("--brightness",n+"%"),null===t||void 0===t||t.style.setProperty("--hue",a+"deg"),null===t||void 0===t||t.style.setProperty("--saturate",P([90,110])+"%")}else null===t||void 0===t||t.style.setProperty("--hue","0deg"),null===t||void 0===t||t.style.setProperty("--saturate","30%")}(e);var n=[1e3,1e3];switch(e){case s.happy:if(t){n=[500,700];break}n=[500,1e3];break;case s.ok:case s.neutral:n=[2e3,5e3]}a.current=setTimeout(o,P(n))}),[e,t]);return Object(n.useEffect)((function(){o()}),[e,o]),a.current};a(18),a(19);function F(){var e=Object(n.useContext)(l),t=(e.score,e.setScore,Object(n.useContext)(g).getQuestion);return Object(h.jsx)("div",{className:"speech-container",children:Object(h.jsx)("div",{className:"speech",children:t()})})}function H(e){var t=e.showControls,a=Object(n.useContext)(l),o=a.lampState,c=a.isGameOver;T(o,c),function(e,t){var a=Object(n.useRef)(),o=Object(n.useState)(q),c=Object(i.a)(o,2),r=c[0],u=c[1],l=Object(n.useState)(0),d=Object(i.a)(l,2),b=d[0],m=d[1],f=Object(n.useCallback)((function(){var n=document.body;clearTimeout(a.current),t?e===s.nightmare?null===n||void 0===n||n.style.setProperty("--opacity","0%"):null===n||void 0===n||n.style.setProperty("--opacity","100%"):(null===n||void 0===n||n.style.setProperty("--opacity",r[b].opacity+"%"),a.current=setTimeout((function(){m((b+1)%r.length)}),r[b].time))}),[r,b,t,e]);Object(n.useEffect)((function(){var t;switch(e){case s.happy:case s.ok:t=N;break;case s.neutral:t=Q;break;case s.sad:t=q;break;case s.nightmare:t=L}u(t),m(b%2?1:0)}),[e,b,t]),Object(n.useEffect)((function(){f()}),[f])}(o,c),E(o,c);var r=Object(n.useContext)(v).imagesAreLoaded,u=Object(n.useState)(0),d=Object(i.a)(u,2),b=d[0],m=d[1],f=function(){m(b+1)};Object(n.useEffect)((function(){10===b&&r&&r(!0)}),[b,r]);return Object(h.jsxs)("div",{id:"lamp",children:[[s.dead,s.nightmare,s.sad,s.neutral,s.ok,s.happy].map((function(e){return function(e){var t,a,n;switch(t=o===e?"100%":0,e){case s.nightmare:c&&(t=0),a=B,n=C;break;case s.dead:if(c&&o===s.nightmare){t=1,a=w;break}break;case s.sad:case s.neutral:a=I,n=S;break;case s.ok:case s.happy:n=k,a=I}return Object(h.jsxs)("div",{style:{opacity:t},className:"lamp-container",children:[Object(h.jsx)("img",{className:"img light",src:n,onLoad:f}),Object(h.jsx)("img",{className:"img lamp",src:a,onLoad:f})]},e)}(e)})),t&&Object(h.jsx)(F,{})]})}var G=a(3),D=a(20).default,R=a(21).default,M=a(22).default,Y=a(23).default,J=a(24).default,V=a(25).default,X=a(26).default,W={loop:!0,soundEnabled:!0,volume:0};function z(e,t,a,s){a&&(e!==t||s?a.fade(a.volume(),0,800):a.fade(a.volume(),.3,800))}function Z(e){var t=e.gameStarted,a=Object(n.useContext)(l),o=a.score,c=a.lampState,r=Object(n.useContext)(v).soundLoaded,u=Object(n.useState)(!1),d=Object(i.a)(u,2),b=d[0],m=d[1],f=Object(G.a)(D,W),j=Object(i.a)(f,2)[1].sound,p=Object(G.a)(R,W),g=Object(i.a)(p,2)[1].sound,y=Object(G.a)(M,W),O=Object(i.a)(y,2)[1].sound,A=Object(G.a)(Y,W),x=Object(i.a)(A,2)[1].sound,w=Object(G.a)(J,W),I=Object(i.a)(w,2)[1].sound,k=Object(G.a)(V,{loop:!1,volume:.3}),S=Object(i.a)(k,2)[1].sound,B=Object(G.a)(X,{loop:!1,volume:.3}),C=Object(i.a)(B,2)[1].sound,E=Object(n.useState)(null),P=Object(i.a)(E,2),L=P[0],q=P[1],Q=Object(n.useRef)(o);Object(n.useEffect)((function(){"loaded"===(null===O||void 0===O?void 0:O.state())&&"loaded"===(null===x||void 0===x?void 0:x.state())&&"loaded"===(null===j||void 0===j?void 0:j.state())&&"loaded"===(null===g||void 0===g?void 0:g.state())&&"loaded"===(null===I||void 0===I?void 0:I.state())&&(r&&r(!0),O.play(),x.play(),I.play(),j.play(),g.play())}),[r,O,I,j,g,x]),Object(n.useEffect)((function(){t&&q(c)}),[c,t]),Object(n.useEffect)((function(){Q.current!==o&&(Q.current<o?null===S||void 0===S||S.play():null===C||void 0===C||C.play(),Q.current=o)}),[o,C,S]),Object(n.useEffect)((function(){z(L,s.neutral,O,b),z(L,s.nightmare,j,b),z(L,s.sad,g,b),z(L,s.ok,x,b),z(L,s.happy,I,b)}),[b,L,O,I,x,g,j]);return Object(n.useEffect)((function(){m("true"===localStorage.getItem("mute"))}),[]),Object(h.jsx)(h.Fragment,{children:Object(h.jsx)("img",{className:"mute "+b,src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAADsQAAA7EB9YPtSQAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAVISURBVHic7Z1LiBxFHIe/HSaYCLquh90oIvERJ0vAID5AxIMnWV94maPmZIIghoiSQy45GklQD6Je14uo8eJF8HkRNfi4iASDiRBf0cT4QFSQxENtg2S3u6umq+tfPf37oNnDVE8V/fu2erqrqhuEEEIIIYQQQgjRF2asG9BR7gPGwCzwMfAc8Ktpi0QSNgFvAufO274BrjBrlWidAbAL+IPV4Rfby2atE62yFfiQ8uCL7YxVA0U7rAP2AH9TH36xiSnhVuAL/IOXAFPChcCTwL+Ehy8BOs6duF/zkwQvATrMHPAicJZm4UuADjIGTtI8eAnQMS4DDhEveAnQEWaAHcBvxA9fAmTONcC7tBO8BMiYIe6Gzl+0G74EyJBtwCe0H7wEyIwNNLuhIwE6zO3AEdIGLwEyYJZ4N3QkQMe4FziBXfASwIiNwCvYBy8BEjMDPAicwj50CZCYq4G3sA9bAiRmSP28POtNtMT1wGHsA5YAiVkP7AP+wT5cCZCY24AvsQ91qgXIeWXQWfJu31p0rb0MrBtQQecOZhfJWQCRgOHK34uBR4CbgIsS1f0SsJyoLlHCEDc/7iPgysR1f5C4PrEGA+AZ0ocvMmEALFk3QtgxIN05X2SIrgJ6jgToORLAhk3ALbjVyKb1SoC0XAd8DhzHPVzqNLCX9u96ltUL2A2c7KtptPXATuzBoA3AsZL9nqU9CRaBH0vq3UHJBxIgvgD31+zbhgRV4Z8DPtMpIB3X1nz+KO6mXCwJFnFrIRcqymyWAOn4yqNMLAmK8DfWlDsCOgWkOgVcgJPA53uaSLAI/OBZz3ZaPBgSYDWbgW89v2sSCULC31/sJAHSCQBhEryAvwQj4HvP7z3w/x0lQFoBIL4EI+A7z+87cP7OEiC9ABBPgkbh0+LBkAD1NJWgcfi0eDAkgB+TShAlfFo8GBLAn1AJthApfCIfAAkwOSES+D7waj816E5gPhwF7sD9Z9ex3qPMQdzT0SqRAHkRIkEVB4HHfQpKgPxoKoF3+CABcmVSCYLCBwmQM0eBhwPKfwo8EVqJBMiXEe6xd77cCDxP4ACSBMiTEfAebtleCDsJlEAC5Mek4RcESSAB8qJp+AXeEkiAfFgE3scv/D89yuwEnqZGAgmQByPgHern8IG71LsBv0vEXXj0BBoLsB0LmHRUL9qkEglgJ0DTId0oEkgAGwFijec3lkACpBcg2mSOFRpJIAHSChA7/IKJJZAA6QTYwgTz9gMIXXcAkQ+ABCinanVwjPALQiR4iMgHQAKUU7c6OEb4Bb4SaHVwQupWBwM8hcc0Lg985xNodXBC6lYHxwq/wEcCrQ6OvFVRtTo4RrdfRtXpYDslH0iA+AIAXIV7RG5R/ndgt8d+TamsVwKkE6BgHtgKrAvYJwar6h2WlxUt8tPKZl6vfgT2HAnQcwa4W5OipwyAt60bIewY4BYTHLduiLBhCJwEtgGPATfjblik4FiiekQFOb+aLeS6OhdyPp5roquAniMBek7OAizhBjFEj5nFrZC1vscfeyxABLIEnMA+YAlgSBd6A5GAu/Cf9CgBppRLyLM3EInJrTcQBuTUGwhD7sZ/yZUEmFKsewORCVa9gciIOdL3BiJD7sH/ZUoSYEqZA5aRAL1njJsXLwF6zDzwKhKg97TRG4iOMQ+8hgToPWPgZyRAr5kHDiEBek+T3kBMCQtM1huIKWMMnEIC9JoF4HXqwz9t1UCRhgeAXygXYNmuaSIVlwNvsDr8r/F72UN2dG4xYyYs4X4fXAocxr2V44xpi4QQQgghhBBCCCFq+A+hqzfWpZaWiAAAAABJRU5ErkJggg==",onClick:function(){m(!b),localStorage.setItem("mute",""+!b)}})})}var U=function(){var e=Object(n.useState)(!1),t=Object(i.a)(e,2),a=t[0],s=t[1],o=Object(n.useState)(!0),c=Object(i.a)(o,2),r=c[0],d=c[1],b=Object(n.useState)(!1),m=Object(i.a)(b,2),f=m[0],j=m[1],p=Object(n.useState)(0),g=Object(i.a)(p,2),v=g[0],w=g[1],I=Object(n.useState)(u(v)),k=Object(i.a)(I,2),S=k[0],B=k[1],C=Object(n.useState)(!1),E=Object(i.a)(C,2),P=E[0],L=E[1],q=Object(n.useState)(!1),Q=Object(i.a)(q,2),N=Q[0],T=Q[1];return Object(n.useEffect)((function(){B(u(v))}),[v]),Object(h.jsx)(h.Fragment,{children:Object(h.jsx)(A,{setAllIsLoaded:L,children:Object(h.jsx)(l.Provider,{value:{isGameOver:N,score:v,setScore:w,lampState:S},children:Object(h.jsxs)(y,{isGameOver:N,setGameOver:function(){T(!0)},children:[Object(h.jsxs)("div",{className:["Game",S,a?" started":"",N?"gameover":""].join(" "),children:[Object(h.jsx)("div",{className:"dark bg "}),Object(h.jsx)("div",{className:"light bg "}),Object(h.jsx)(H,{showControls:f})]}),f&&Object(h.jsx)(O,{doRestartGame:function(){document.location.reload()}}),r&&Object(h.jsx)(x,{allIsLoaded:P,onStart:function(){setTimeout((function(){s(!0)}),900),setTimeout((function(){d(!1)}),5e3),setTimeout((function(){j(!0)}),3e3)}}),Object(h.jsx)(Z,{gameStarted:a})]})})})})},K=function(e){e&&e instanceof Function&&a.e(4).then(a.bind(null,30)).then((function(t){var a=t.getCLS,s=t.getFID,n=t.getFCP,o=t.getLCP,c=t.getTTFB;a(e),s(e),n(e),o(e),c(e)}))};r.a.render(Object(h.jsxs)(o.a.StrictMode,{children:[Object(h.jsx)("link",{href:"https://fonts.googleapis.com/css?family=Baloo+2:400,800",rel:"stylesheet"}),Object(h.jsx)(U,{}),Object(h.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",version:"1.1",style:{display:"none"},children:Object(h.jsxs)("defs",{children:[Object(h.jsxs)("filter",{id:"squiggly-0",children:[Object(h.jsx)("feTurbulence",{id:"turbulence",baseFrequency:"0.01",numOctaves:"3",result:"noise",seed:"0"}),Object(h.jsx)("feDisplacementMap",{id:"displacement",in:"SourceGraphic",in2:"noise",scale:"2"})]}),Object(h.jsxs)("filter",{id:"squiggly-1",children:[Object(h.jsx)("feTurbulence",{id:"turbulence",baseFrequency:"0.01",numOctaves:"3",result:"noise",seed:"1"}),Object(h.jsx)("feDisplacementMap",{in:"SourceGraphic",in2:"noise",scale:"3"})]}),Object(h.jsxs)("filter",{id:"squiggly-2",children:[Object(h.jsx)("feTurbulence",{id:"turbulence",baseFrequency:"0.01",numOctaves:"3",result:"noise",seed:"2"}),Object(h.jsx)("feDisplacementMap",{in:"SourceGraphic",in2:"noise",scale:"2"})]}),Object(h.jsxs)("filter",{id:"squiggly-3",children:[Object(h.jsx)("feTurbulence",{id:"turbulence",baseFrequency:"0.01",numOctaves:"3",result:"noise",seed:"3"}),Object(h.jsx)("feDisplacementMap",{in:"SourceGraphic",in2:"noise",scale:"3"})]}),Object(h.jsxs)("filter",{id:"squiggly-4",children:[Object(h.jsx)("feTurbulence",{id:"turbulence",baseFrequency:"0.01",numOctaves:"3",result:"noise",seed:"4"}),Object(h.jsx)("feDisplacementMap",{in:"SourceGraphic",in2:"noise",scale:"1"})]})]})})]}),document.getElementById("root")),K()}],[[27,1,2]]]);
//# sourceMappingURL=main.acec0059.chunk.js.map