!function(){return function e(t,i,s){function o(r,a){if(!i[r]){if(!t[r]){var c="function"==typeof require&&require;if(!a&&c)return c(r,!0);if(n)return n(r,!0);var l=new Error("Cannot find module '"+r+"'");throw l.code="MODULE_NOT_FOUND",l}var f=i[r]={exports:{}};t[r][0].call(f.exports,function(e){return o(t[r][1][e]||e)},f,f.exports,e,t,i,s)}return i[r].exports}for(var n="function"==typeof require&&require,r=0;r<s.length;r++)o(s[r]);return o}}()({1:[function(e,t,i){"use strict";Object.defineProperty(i,"__esModule",{value:!0}),i.proceed_bricks_collisions=function(e,t){e.forEach(function(i,s){t.pos[0]+t.size>=i.pos[0]&&t.pos[0]+t.size<=i.pos[0]+i.size[0]&&t.pos[1]+t.size>=i.pos[1]&&t.pos[1]-t.size<=i.pos[1]+i.size[1]&&(delete e[s],t.speed_y=-t.speed)})},i.proceed_stick_collisions=function(e,t,i){if(t.pos[0]+t.size>=e.pos[0]-e.offset&&t.pos[0]+t.size<=e.pos[0]+e.size[0]+e.offset&&t.pos[1]+t.size>=e.pos[1])t.speed_y=t.speed;else if(t.pos[1]<t.size)t.speed_y=-t.speed_y;else if(t.pos[0]>i.width-t.size||t.pos[0]<t.size)t.speed_x=-t.speed_x;else if(t.pos[1]>i.height-t.size)return t.speed_x=0,t.speed_y=0,!1;return!0}},{}],2:[function(e,t,i){"use strict";var s=c(e("./obj/stick.js")),o=c(e("./obj/ball.js")),n=c(e("./obj/brick.js")),r=c(e("./render.js")),a=e("./collisions.js");function c(e){return e&&e.__esModule?e:{default:e}}var l=document.getElementById("canvas"),f=l.getContext("2d");l.width=800,l.height=600;var u,d,p,h=3,b=7,v=3,y=6,w=40,_={},x=[],k=!0;function j(){d=new o.default({canvas:l,speed:h}),p=new s.default({canvas:l,speed:b}),x=[];for(var e=0;e<v;e++)for(var t=0;t<y;t++)x.push(new n.default([l.width/y*t+15,w*e+15]));u=new r.default(l,f,x,d,p),k=!1}window.addEventListener("keyup",function(e){delete _[e.keyCode],e.preventDefault()}),window.addEventListener("keydown",function(e){_[e.keyCode]=!0,e.preventDefault()}),j(),function e(){f.clearRect(0,0,l.width,l.height),u.draw_all(),!k&&37 in _?(p.pos[0]-=p.speed,p.pos[0]<p.offset&&(p.pos[0]=p.offset)):!k&&39 in _?(p.pos[0]+=p.speed,p.pos[0]>l.width-p.size[0]-p.offset&&(p.pos[0]=l.width-p.size[0]-p.offset)):k&&32 in _&&j(),(0,a.proceed_bricks_collisions)(x,d),(0,a.proceed_stick_collisions)(p,d,l)||(u.draw_text("YOU DIED"),k=!0),d.pos[0]+=d.speed_x,d.pos[1]-=d.speed_y,window.requestAnimationFrame(e)}()},{"./collisions.js":1,"./obj/ball.js":3,"./obj/brick.js":4,"./obj/stick.js":5,"./render.js":6}],3:[function(e,t,i){"use strict";function s(e,t){for(var i=0;i<t.length;i++){var s=t[i];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(e,s.key,s)}}function o(e,t,i){return t&&s(e.prototype,t),i&&s(e,i),Object.defineProperty(e,"prototype",{writable:!1}),e}Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var n=o(function e(t){var i,s,o,n=t.canvas,r=t.size,a=void 0===r?15:r,c=t.speed,l=void 0===c?1:c;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),o="#FF0000",(s="color")in(i=this)?Object.defineProperty(i,s,{value:o,enumerable:!0,configurable:!0,writable:!0}):i[s]=o,this.size=a,this.speed=l,this.speed_x=Math.round(Math.random())?l:-l,this.speed_y=l,this.pos=[n.width/2,n.height/2]});i.default=n},{}],4:[function(e,t,i){"use strict";function s(e,t){for(var i=0;i<t.length;i++){var s=t[i];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(e,s.key,s)}}function o(e,t,i){return t&&s(e.prototype,t),i&&s(e,i),Object.defineProperty(e,"prototype",{writable:!1}),e}function n(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var r=o(function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),n(this,"color","#00FF00"),n(this,"padding",15),n(this,"size",[100,25]),this.pos=t});i.default=r},{}],5:[function(e,t,i){"use strict";function s(e,t){for(var i=0;i<t.length;i++){var s=t[i];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(e,s.key,s)}}function o(e,t,i){return t&&s(e.prototype,t),i&&s(e,i),Object.defineProperty(e,"prototype",{writable:!1}),e}function n(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var r=o(function e(t){var i=t.canvas,s=t.size,o=void 0===s?[80,5]:s,r=t.speed,a=void 0===r?5:r;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),n(this,"offset",15),n(this,"color","#FFFFFF"),this.size=o,this.speed=a,this.pos=[(i.width-this.size[0])/2,i.height-this.offset]});i.default=r},{}],6:[function(e,t,i){"use strict";function s(e,t){for(var i=0;i<t.length;i++){var s=t[i];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(e,s.key,s)}}Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var o=function(){function e(t,i,s,o,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.canvas=t,this.ctx=i,this.bricks=s,this.ball=o,this.stick=n}var t,i,o;return t=e,(i=[{key:"draw_text",value:function(e){this.ctx.font="32px Comic Sans MS",this.ctx.fillStyle="#FF0000",this.ctx.textAlign="left",this.ctx.fillText(e,this.canvas.width/2-75,this.canvas.height/2)}},{key:"draw_bricks",value:function(){var e=this;this.ctx.beginPath(),this.bricks.forEach(function(t){e.ctx.rect(t.pos[0],t.pos[1],t.size[0],t.size[1]),e.ctx.fillStyle=t.color,e.ctx.fill()}),this.ctx.closePath()}},{key:"draw_ball",value:function(){this.ctx.beginPath(),this.ctx.arc(this.ball.pos[0],this.ball.pos[1],this.ball.size,0,2*Math.PI,!0),this.ctx.fillStyle=this.ball.color,this.ctx.fill(),this.ctx.closePath()}},{key:"draw_stick",value:function(){this.ctx.beginPath(),this.ctx.rect(this.stick.pos[0],this.stick.pos[1],this.stick.size[0],this.stick.size[1]),this.ctx.fillStyle=this.stick.color,this.ctx.fill(),this.ctx.closePath()}},{key:"draw_all",value:function(){this.draw_stick(),this.draw_bricks(),this.draw_ball()}}])&&s(t.prototype,i),o&&s(t,o),Object.defineProperty(t,"prototype",{writable:!1}),e}();i.default=o},{}]},{},[2]);