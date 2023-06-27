(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{41:function(e,t,n){},72:function(e,t,n){},76:function(e,t,n){"use strict";n.r(t);var i=n(2),a=n.n(i),c=n(34),o=n.n(c),l=(n(41),n(8)),r=n(35),s=n.n(r)()("https://ur-io.herokuapp.com/"),d=function(){s.emit("newGame")},j=function(e){s.emit("joinGame",e)},h=function(e,t){s.emit("tokenClick",e,t)},u=function(e,t){s.emit("tokenHover",e,t)},b=function(){s.emit("rollDice")},m=function(){s.emit("reset")},O=function(){s.emit("leaveGame")},g=(n(72),n(36)),p=n(0),v=function(){return Object(p.jsxs)("div",{className:"help centering",children:[Object(p.jsx)("a",{className:"tooltipBtn","data-tip":!0,"data-for":"rules",children:"?"}),Object(p.jsxs)(g.a,{className:"tooltipText",id:"rules",place:"bottom",children:[Object(p.jsx)("span",{children:"How to Start:"}),Object(p.jsxs)("ol",{children:[Object(p.jsx)("li",{children:"Start a new game and share the game code you receive with your opponent. The game starts when they join."}),Object(p.jsx)("li",{children:"If your opponent has already started a game, take their game code and enter it below then press 'Join Game' to get started."})]}),Object(p.jsx)("span",{children:"Game Rules:"}),Object(p.jsxs)("ol",{children:[Object(p.jsx)("li",{children:"You win by getting all your pieces to the end of the board"}),Object(p.jsx)("li",{children:"The die can only roll from 0 to 4"}),Object(p.jsx)("li",{children:"A 0 rolled means that turn is skipped"}),Object(p.jsx)("li",{children:"If you land on a rosette (yellow) tile, that token is protected and you get to roll again"}),Object(p.jsx)("li",{children:"You can capture an opponent's pieces by placing your token where their token is if they are in the middle lane and aren't on a yellow tile"})]})]})]})},x=n.p+"static/media/face_black_24dp.286f1073.svg",f=function(e){var t=e.createNewGame,n=e.joinGame,a=e.children,c=Object(i.useState)(""),o=Object(l.a)(c,2),r=o[0],s=o[1];return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)("header",{className:"landing-header centering drop-shadow",children:Object(p.jsxs)("div",{className:"header-text",children:["Ur.io",Object(p.jsx)("div",{className:"header-subtext",children:"A game with friends"})]})}),a,Object(p.jsx)(v,{}),Object(p.jsxs)("div",{className:"session-buttons",children:[Object(p.jsx)("div",{className:"top-left",children:Object(p.jsx)("button",{className:"landing-button new-game-btn drop-shadow",onClick:t,children:"New Game"})}),Object(p.jsx)("div",{className:"top-right",children:Object(p.jsx)("img",{className:"face-img drop-shadow",src:x,alt:"logo"})}),Object(p.jsx)("div",{className:"bottom-left",children:Object(p.jsx)("button",{className:"landing-button join-game-btn drop-shadow",onClick:n.bind(null,r),children:"Join Game"})}),Object(p.jsx)("div",{className:"bottom-right",children:Object(p.jsxs)("div",{className:"input-bkground drop-shadow",children:[Object(p.jsx)("h2",{children:"ENTER GAME CODE:"}),Object(p.jsx)("input",{className:"game-code-input",onChange:function(e){var t=e.target;s(t.value)}})]})})]})]})},k=function(e){var t=e.roomID,n=e.children;return Object(p.jsxs)(p.Fragment,{children:[n,Object(p.jsx)("div",{"data-testid":"waiting-room",className:"waiting-header",children:"Waiting for partner"}),Object(p.jsxs)("span",{className:"waiting-room",children:[Object(p.jsx)("div",{children:"Game code:"}),Object(p.jsx)("span",{"data-testid":"roomID",className:"roomID",children:t})]})]})},y=function(e){var t=e.playerID;return Object(p.jsx)("div",{className:"player-".concat(t,"-token")})},N=function(e){var t=e.player,n=e.onClick,i=e.onHover;return Object(p.jsx)("div",{className:"player".concat(t.id,"Start"),onClick:n.bind(null,t.id,-1),onMouseEnter:i.bind(null,t.id,-1),onMouseLeave:i.bind(null,null,null),children:t.tokens.filter((function(e){return-1===e})).map((function(e){return Object(p.jsx)(y,{playerID:t.id},Math.random())}))})},w=function(e){var t=e.player,n=e.gameWinners,i=function(e,t){var n=0;return t.forEach((function(t){t===e&&n++})),n}(t.id,n);return Object(p.jsxs)("p",{className:"Player".concat(t.id,"Wins"),children:["Wins: ",i]})},T=function(e){var t=e.player,n=e.activePlayer,i=e.gameWinners;return Object(p.jsxs)("div",{className:"player".concat(t.id,"Score\n      "),children:[Object(p.jsx)("div",{className:"".concat(t.id===(null===n||void 0===n?void 0:n.id)?"active":""),children:t.score}),Object(p.jsx)(w,{player:t,gameWinners:i})]})},C=function(e){var t=e.oc,n=e.token,i=e.type,a=e.index,c=e.handleTokenClick,o=e.handleTokenHover,l=a===e.highlightedTile?"highlighted ":"";switch(i){case"normal":l+=a%2===0?"tile-style-1":"tile-style-0";break;case"rosette":l+="rosette";break;case"goal":l+="goal"}return Object(p.jsx)("div",{className:"".concat(l," centering"),onClick:c.bind(null,t,n),onMouseEnter:o.bind(null,t,n),onMouseLeave:o.bind(null,null,null),children:null!==t?Object(p.jsx)(y,{playerID:t}):Object(p.jsx)("div",{})})},G=function(e){var t=e.tiles,n=e.handleTokenClick,i=e.handleTokenHover,a=e.highlightedTile;return Object(p.jsx)("div",{className:"board",children:t.map((function(e,t){return Object(p.jsx)(C,{oc:e.oc,type:e.type,index:t,token:e.token,handleTokenClick:n,handleTokenHover:i,highlightedTile:a},t)}))})},S=function(e){var t=e.notification,n=e.gridPlacement,a=void 0===n?"top-center":n,c=Object(i.useState)("notification-panel"),o=Object(l.a)(c,2),r=o[0],s=o[1],d=Object(i.useRef)("");return Object(i.useEffect)((function(){t!==d.current?(s("notification-panel-active"),d.current=t,setTimeout((function(){s("notification-panel")}),1e3)):s("notification-panel")}),[t]),Object(p.jsx)("div",{className:"".concat(r," centering"),style:{gridArea:"".concat(a)},children:t})},D=function(e){var t=e.leaveGame;return Object(p.jsx)("div",{className:"centering",children:Object(p.jsxs)("button",{className:"button centering",onClick:t,children:[Object(p.jsx)("span",{className:"material-icons leave-icon",children:"logout"}),"Leave Room"]})})},I=function(e){var t=e.gameState,n=e.handleTokenClick,i=e.handleTokenHover,a=e.highlightedTile,c=e.rollDice,o=e.resetGame,l=e.notification,r=e.leaveGame;return t?Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)(D,{leaveGame:r}),Object(p.jsx)(N,{player:t.players[0],onClick:n,onHover:i}),Object(p.jsx)(T,{activePlayer:t.activePlayer,player:t.players[0],gameWinners:t.gameWinners}),Object(p.jsx)(S,{notification:l}),Object(p.jsx)(G,{tiles:t.board,handleTokenClick:n,handleTokenHover:i,highlightedTile:a}),Object(p.jsxs)("div",{className:"game-buttons",children:[Object(p.jsx)("button",{className:"gameOver"!==t.phase?"game-button":"invisible",onClick:c,children:"rolling"!==t.phase?t.rollVal:"Roll"}),Object(p.jsx)("button",{className:"gameOver"!==t.phase?"invisible":"game-button",onClick:o,children:"New Game"})]}),Object(p.jsx)(N,{player:t.players[1],onClick:n,onHover:i}),Object(p.jsx)(T,{activePlayer:t.activePlayer,player:t.players[1],gameWinners:t.gameWinners})]}):Object(p.jsx)("div",{children:"Error: No State"})},H=function(e){var t,n=e.gameState,i=e.roomID,a=e.notification,c=e.highlightedTile;return n||i?!n&&i?t=Object(p.jsxs)(k,{roomID:i,children:[Object(p.jsx)(D,{leaveGame:O}),Object(p.jsx)(S,{notification:a})]}):n&&i&&(t=Object(p.jsx)(I,{notification:a,gameState:n,handleTokenClick:h,handleTokenHover:u,highlightedTile:c,rollDice:b,resetGame:m,leaveGame:O})):t=Object(p.jsx)(f,{createNewGame:d,joinGame:j,children:Object(p.jsx)(S,{notification:a,gridPlacement:"bottom-center"})}),Object(p.jsx)(p.Fragment,{children:t})};var E=function(){var e=Object(i.useState)(null),t=Object(l.a)(e,2),n=t[0],a=t[1],c=Object(i.useState)(""),o=Object(l.a)(c,2),r=o[0],d=o[1],j=Object(i.useState)(""),h=Object(l.a)(j,2),u=h[0],b=h[1],m=Object(i.useState)(null),O=Object(l.a)(m,2),g=O[0],v=O[1];Object(i.useEffect)((function(){s.on("roomID",(function(e){d(e)})),s.on("init",(function(e){x(e)})),s.on("updateState",(function(e){x(e)})),s.on("notification",(function(e){var t=e.msg;b(t)})),s.on("tileHighlight",(function(e){v(e)}))}),[]);var x=function(e){a(e),v(null)};return Object(p.jsx)("div",{className:"App",children:Object(p.jsx)(H,{gameState:n,roomID:r,notification:u,highlightedTile:g})})},P=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,79)).then((function(t){var n=t.getCLS,i=t.getFID,a=t.getFCP,c=t.getLCP,o=t.getTTFB;n(e),i(e),a(e),c(e),o(e)}))};o.a.render(Object(p.jsx)(a.a.StrictMode,{children:Object(p.jsx)(E,{})}),document.getElementById("root")),P()}},[[76,1,2]]]);
//# sourceMappingURL=main.b062ef2e.chunk.js.map