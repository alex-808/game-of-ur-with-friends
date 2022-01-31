(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{41:function(e,t,n){},72:function(e,t,n){},76:function(e,t,n){"use strict";n.r(t);var i=n(2),a=n.n(i),c=n(34),o=n.n(c),l=(n(41),n(8)),r=n(35),s=n.n(r),d="https://ur-io.herokuapp.com/";console.log(d);var j=s()(d),h=function(){j.emit("newGame")},u=function(e){j.emit("joinGame",e)},b=function(e,t){j.emit("tokenClick",e,t)},m=function(e,t){j.emit("tokenHover",e,t)},g=function(){j.emit("rollDice")},O=function(){j.emit("reset")},v=function(){j.emit("leaveGame")},p=(n(72),n(36)),x=n(0),f=function(){return Object(x.jsxs)("div",{className:"help centering",children:[Object(x.jsx)("a",{className:"tooltipBtn","data-tip":!0,"data-for":"rules",children:"?"}),Object(x.jsxs)(p.a,{className:"tooltipText",id:"rules",place:"bottom",children:[Object(x.jsx)("span",{children:"How to Start:"}),Object(x.jsxs)("ol",{children:[Object(x.jsx)("li",{children:"Start a new game and share the game code you receive with your opponent. The game starts when they join."}),Object(x.jsx)("li",{children:"If your opponent has already started a game, take their game code and enter it below then press 'Join Game' to get started."})]}),Object(x.jsx)("span",{children:"Game Rules:"}),Object(x.jsxs)("ol",{children:[Object(x.jsx)("li",{children:"You win by getting all your pieces to the end of the board"}),Object(x.jsx)("li",{children:"The die can only roll from 0 to 4"}),Object(x.jsx)("li",{children:"A 0 rolled means that turn is skipped"}),Object(x.jsx)("li",{children:"If you land on a rosette (yellow) tile, that token is protected and you get to roll again"}),Object(x.jsx)("li",{children:"You can capture an opponent's pieces by placing your token where their token is if they are in the middle lane and aren't on a yellow tile"})]})]})]})},k=n.p+"static/media/face_black_24dp.286f1073.svg",y=function(e){var t=e.createNewGame,n=e.joinGame,a=e.children,c=Object(i.useState)(""),o=Object(l.a)(c,2),r=o[0],s=o[1];return Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)("header",{className:"landing-header centering drop-shadow",children:Object(x.jsxs)("div",{className:"header-text",children:["Ur.io",Object(x.jsx)("div",{className:"header-subtext",children:"A game with friends"})]})}),a,Object(x.jsx)(f,{}),Object(x.jsxs)("div",{className:"session-buttons",children:[Object(x.jsx)("div",{className:"top-left",children:Object(x.jsx)("button",{className:"landing-button new-game-btn drop-shadow",onClick:t,children:"New Game"})}),Object(x.jsx)("div",{className:"top-right",children:Object(x.jsx)("img",{className:"face-img drop-shadow",src:k,alt:"logo"})}),Object(x.jsx)("div",{className:"bottom-left",children:Object(x.jsx)("button",{className:"landing-button join-game-btn drop-shadow",onClick:n.bind(null,r),children:"Join Game"})}),Object(x.jsx)("div",{className:"bottom-right",children:Object(x.jsxs)("div",{className:"input-bkground drop-shadow",children:[Object(x.jsx)("h2",{children:"ENTER GAME CODE:"}),Object(x.jsx)("input",{className:"game-code-input",onChange:function(e){var t=e.target;s(t.value),console.log(t.value)}})]})})]})]})},N=function(e){var t=e.roomID,n=e.children;return Object(x.jsxs)(x.Fragment,{children:[n,Object(x.jsx)("div",{"data-testid":"waiting-room",className:"waiting-header",children:"Waiting for partner"}),Object(x.jsxs)("span",{className:"waiting-room",children:[Object(x.jsx)("div",{children:"Game code:"}),Object(x.jsx)("span",{"data-testid":"roomID",className:"roomID",children:t})]})]})},w=function(e){var t=e.playerID;return Object(x.jsx)("div",{className:"player-".concat(t,"-token")})},T=function(e){var t=e.player,n=e.onClick,i=e.onHover;return console.log(t),Object(x.jsx)("div",{className:"player".concat(t.id,"Start"),onClick:n.bind(null,t.id,-1),onMouseEnter:i.bind(null,t.id,-1),onMouseLeave:i.bind(null,null,null),children:t.tokens.filter((function(e){return-1===e})).map((function(e){return Object(x.jsx)(w,{playerID:t.id},Math.random())}))})},C=function(e){var t=e.player,n=e.gameWinners,i=function(e,t){var n=0;return t.forEach((function(t){t===e&&n++})),n}(t.id,n);return Object(x.jsxs)("p",{className:"Player".concat(t.id,"Wins"),children:["Wins: ",i]})},G=function(e){var t=e.player,n=e.activePlayer,i=e.gameWinners;return Object(x.jsxs)("div",{className:"player".concat(t.id,"Score\n      "),children:[Object(x.jsx)("div",{className:"".concat(t.id===(null===n||void 0===n?void 0:n.id)?"active":""),children:t.score}),Object(x.jsx)(C,{player:t,gameWinners:i})]})},S=function(e){var t=e.oc,n=e.token,i=e.type,a=e.index,c=e.handleTokenClick,o=e.handleTokenHover,l=a===e.highlightedTile?"highlighted ":"";switch(i){case"normal":l+=a%2===0?"tile-style-1":"tile-style-0";break;case"rosette":l+="rosette";break;case"goal":l+="goal"}return Object(x.jsx)("div",{className:"".concat(l," centering"),onClick:c.bind(null,t,n),onMouseEnter:o.bind(null,t,n),onMouseLeave:o.bind(null,null,null),children:null!==t?Object(x.jsx)(w,{playerID:t}):Object(x.jsx)("div",{})})},D=function(e){var t=e.tiles,n=e.handleTokenClick,i=e.handleTokenHover,a=e.highlightedTile;return console.log(a),Object(x.jsx)("div",{className:"board",children:t.map((function(e,t){return Object(x.jsx)(S,{oc:e.oc,type:e.type,index:t,token:e.token,handleTokenClick:n,handleTokenHover:i,highlightedTile:a},t)}))})},I=function(e){var t=e.notification,n=e.gridPlacement,a=void 0===n?"top-center":n,c=Object(i.useState)("notification-panel"),o=Object(l.a)(c,2),r=o[0],s=o[1],d=Object(i.useRef)("");return Object(i.useEffect)((function(){t!==d.current?(s("notification-panel-active"),d.current=t,setTimeout((function(){s("notification-panel")}),1e3)):s("notification-panel")}),[t]),Object(x.jsx)("div",{className:"".concat(r," centering"),style:{gridArea:"".concat(a)},children:t})},H=function(e){var t=e.leaveGame;return Object(x.jsx)("div",{className:"centering",children:Object(x.jsxs)("button",{className:"button centering",onClick:t,children:[Object(x.jsx)("span",{className:"material-icons leave-icon",children:"logout"}),"Leave Room"]})})},E=function(e){var t=e.gameState,n=e.handleTokenClick,i=e.handleTokenHover,a=e.highlightedTile,c=e.rollDice,o=e.resetGame,l=e.notification,r=e.leaveGame;return t?Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)(H,{leaveGame:r}),Object(x.jsx)(T,{player:t.players[0],onClick:n,onHover:i}),Object(x.jsx)(G,{activePlayer:t.activePlayer,player:t.players[0],gameWinners:t.gameWinners}),Object(x.jsx)(I,{notification:l}),Object(x.jsx)(D,{tiles:t.board,handleTokenClick:n,handleTokenHover:i,highlightedTile:a}),Object(x.jsxs)("div",{className:"game-buttons",children:[Object(x.jsx)("button",{className:"gameOver"!==t.phase?"game-button":"invisible",onClick:c,children:"rolling"!==t.phase?t.rollVal:"Roll"}),Object(x.jsx)("button",{className:"gameOver"!==t.phase?"invisible":"game-button",onClick:o,children:"New Game"})]}),Object(x.jsx)(T,{player:t.players[1],onClick:n,onHover:i}),Object(x.jsx)(G,{activePlayer:t.activePlayer,player:t.players[1],gameWinners:t.gameWinners})]}):Object(x.jsx)("div",{children:"Error: No State"})},P=function(e){var t,n=e.gameState,i=e.roomID,a=e.notification,c=e.highlightedTile;return n||i?!n&&i?t=Object(x.jsxs)(N,{roomID:i,children:[Object(x.jsx)(H,{leaveGame:v}),Object(x.jsx)(I,{notification:a})]}):n&&i&&(t=Object(x.jsx)(E,{notification:a,gameState:n,handleTokenClick:b,handleTokenHover:m,highlightedTile:c,rollDice:g,resetGame:O,leaveGame:v})):t=Object(x.jsx)(y,{createNewGame:h,joinGame:u,children:Object(x.jsx)(I,{notification:a,gridPlacement:"bottom-center"})}),Object(x.jsx)(x.Fragment,{children:t})};var W=function(){var e=Object(i.useState)(null),t=Object(l.a)(e,2),n=t[0],a=t[1],c=Object(i.useState)(""),o=Object(l.a)(c,2),r=o[0],s=o[1],d=Object(i.useState)(""),h=Object(l.a)(d,2),u=h[0],b=h[1],m=Object(i.useState)(null),g=Object(l.a)(m,2),O=g[0],v=g[1];Object(i.useEffect)((function(){j.on("roomID",(function(e){s(e)})),j.on("init",(function(e){p(e)})),j.on("updateState",(function(e){console.log(e),p(e)})),j.on("notification",(function(e){var t=e.msg;b(t)})),j.on("tileHighlight",(function(e){v(e)}))}),[]);var p=function(e){a(e),v(null)};return Object(x.jsx)("div",{className:"App",children:Object(x.jsx)(P,{gameState:n,roomID:r,notification:u,highlightedTile:O})})},F=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,79)).then((function(t){var n=t.getCLS,i=t.getFID,a=t.getFCP,c=t.getLCP,o=t.getTTFB;n(e),i(e),a(e),c(e),o(e)}))};o.a.render(Object(x.jsx)(a.a.StrictMode,{children:Object(x.jsx)(W,{})}),document.getElementById("root")),F()}},[[76,1,2]]]);
//# sourceMappingURL=main.fc7dee93.chunk.js.map