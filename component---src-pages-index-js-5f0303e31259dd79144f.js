(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{135:function(e,t,i){"use strict";i.r(t);var n=i(0),s=i.n(n),o=i(162),a=i(153),r=(i(152),i(149),i(265)),l=i.n(r),c=function(){return s.a.createElement("section",{className:"hero"},s.a.createElement("div",{className:"columns"},s.a.createElement("div",{className:"container hero-body"},s.a.createElement("div",{className:"is-two-fifths column "},s.a.createElement("p",{className:"title"},s.a.createElement(l.a,{bottom:!0},"Hi! I'm Edmund")),s.a.createElement("p",{className:"subtitle"},s.a.createElement(l.a,{bottom:!0},"Full Stack web and mobile developer, amateur ML data scientist, generalist programmer"),s.a.createElement("br",null),s.a.createElement(l.a,{bottom:!0},"I create App//ications"))))))},d=i(178),u=i(137);t.default=function(){return s.a.createElement(o.a,null,s.a.createElement(a.a,{title:"Home",keywords:["gatsby","application","react","bulma","github"]}),s.a.createElement(c,null),s.a.createElement("section",{className:"hero"},s.a.createElement("div",{className:"columns"},s.a.createElement("div",{className:"container hero-body"},s.a.createElement("div",{className:"tabs"},s.a.createElement("ul",null,s.a.createElement("li",{className:"is-active"},s.a.createElement(u.Link,{to:"/blog"},"Blog")),s.a.createElement("li",{title:"coming soon"},s.a.createElement(u.Link,{to:"/"},"Side Projects"))))))),s.a.createElement(d.a,null))}},178:function(e,t,i){"use strict";var n=i(6),s=i.n(n),o=i(179),a=i(0),r=i.n(a),l=(i(152),i(137)),c=(i(149),function(e){function t(){return e.apply(this,arguments)||this}return s()(t,e),t.prototype.render=function(){return r.a.createElement(l.StaticQuery,{query:"3424129496",render:function(e){var t=e.allMarkdownRemark.edges;return r.a.createElement("section",{className:"hero"},r.a.createElement("div",{className:"columns "},r.a.createElement("div",{className:"container hero-body"},t.map(function(e){var t=e.node,i=t.frontmatter.title,n=t.frontmatter.date,s=t.frontmatter.path,o=t.excerpt,a=t.timeToRead,c=t.frontmatter.tags;return r.a.createElement("div",{className:"is-three-fifths column has-shadow"},r.a.createElement("p",{className:"title"},i),r.a.createElement("div",{className:"subtitle is-6 columns is-multiline"},r.a.createElement("div",null,r.a.createElement("span",{className:"icon is-medium has-text-danger"},r.a.createElement("i",{className:"fa fa-calendar"})),n,r.a.createElement("span",{className:"icon is-medium has-text-primary"},r.a.createElement("i",{className:"fa fa-book"})),a," min"),r.a.createElement("div",{className:""},r.a.createElement("span",{className:"icon is-medium has-text-success"},r.a.createElement("i",{className:"fa fa-tags"})),c.map(function(e){return r.a.createElement("span",{className:"blogtag is-light tag"},e)}))),r.a.createElement("div",{className:"has-text-grey-dark"},o,r.a.createElement(l.Link,{to:s},"Read more")))}))))},data:o})},t}(r.a.Component));t.a=c},179:function(e){e.exports={data:{allMarkdownRemark:{edges:[{node:{frontmatter:{date:"09 January 2019",title:"JamStack: less is better",path:"/blog/jamstack",tags:["Technology","JamStack","Serverless","WIP"]},headings:[],excerpt:"\nJavascript, API and Markup. That is what the Jam in the stack stand for. Javascript for dynamic content, APIs that abstract database and Markup for the static content for the website. During the development of this website, I come across this term when looking for cheap and fast design pattern to…",timeToRead:2}},{node:{frontmatter:{date:"02 January 2019",title:"I just started this website",path:"/blog/My-first-post",tags:["Announcement","Features"]},headings:[],excerpt:"Hey! Welcome to the front page of me. For my new year resolution, I wanna start writing more to improve ways to express myself. For some reason I always struggle with writing, whether its for assignment or work. Its just that went I start writing, its a struggle to express the message I want to…",timeToRead:3}}]}}}},197:function(e,t,i){"use strict";function n(e){try{return f.insertRule(e,f.cssRules.length)}catch(e){console.warn("react-reveal - animation failed")}}function s(){d||(t.globalHide=d=!0,window.removeEventListener("scroll",s,!0),n("."+o+" { opacity: 0; }"),window.removeEventListener("orientationchange",s,!0),window.document.removeEventListener("visibilitychange",s))}Object.defineProperty(t,"__esModule",{value:!0}),t.insertRule=n,t.cascade=function(e,t,i,n,s){var o=Math.log(n),a=(Math.log(s)-o)/(i-t);return Math.exp(o+a*(e-t))},t.animation=function(e){if(!f)return"";var t="@keyframes "+(m+h)+"{"+e+"}",i=p[e];return i?""+m+i:(f.insertRule(t,f.cssRules.length),p[e]=h,""+m+h++)},t.hideAll=s,t.default=function(e){var i=e.ssrFadeout;t.fadeOutEnabled=i};var o=t.namespace="react-reveal",a=(t.defaults={duration:1e3,delay:0,count:1},t.ssr=!0),r=t.observerMode=!1,l=t.raf=function(e){return window.setTimeout(e,66)},c=t.disableSsr=function(){return t.ssr=a=!1},d=(t.fadeOutEnabled=!1,t.ssrFadeout=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];return t.fadeOutEnabled=e},t.globalHide=!1),u=(t.ie10=!1,t.collapseend=void 0),h=1,p={},f=!1,m=o+"-"+Math.floor(1e15*Math.random())+"-";if("undefined"!=typeof window&&"nodejs"!==window.name&&window.document&&"undefined"!=typeof navigator){t.observerMode=r="IntersectionObserver"in window&&"IntersectionObserverEntry"in window&&"intersectionRatio"in window.IntersectionObserverEntry.prototype&&/\{\s*\[native code\]\s*\}/.test(""+IntersectionObserver),t.raf=l=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||l,t.ssr=a=window.document.querySelectorAll("div[data-reactroot]").length>0,-1!==navigator.appVersion.indexOf("MSIE 10")&&(t.ie10=!0),a&&"performance"in window&&"timing"in window.performance&&"domContentLoadedEventEnd"in window.performance.timing&&window.performance.timing.domLoading&&Date.now()-window.performance.timing.domLoading<300&&(t.ssr=a=!1),a&&window.setTimeout(c,1500),r||(t.collapseend=u=document.createEvent("Event"),u.initEvent("collapseend",!0,!0));var v=document.createElement("style");document.head.appendChild(v),v.sheet&&v.sheet.cssRules&&v.sheet.insertRule&&(f=v.sheet,window.addEventListener("scroll",s,!0),window.addEventListener("orientationchange",s,!0),window.document.addEventListener("visibilitychange",s))}},265:function(e,t,i){"use strict";function n(e,t){var i=t.distance,n=t.left,s=t.right,o=t.up,a=t.down,l=t.top,c=t.bottom,d=t.big,h=t.mirror,p=t.opposite,f=(i?i.toString():0)+((n?1:0)|(s?2:0)|(l||a?4:0)|(c||o?8:0)|(h?16:0)|(p?32:0)|(e?64:0)|(d?128:0));if(u.hasOwnProperty(f))return u[f];var m=n||s||o||a||l||c,v=void 0,y=void 0;if(m){if(!h!=!(e&&p)){var w=[s,n,c,l,a,o];n=w[0],s=w[1],l=w[2],c=w[3],o=w[4],a=w[5]}var b=i||(d?"2000px":"100%");v=n?"-"+b:s?b:"0",y=a||l?"-"+b:o||c?b:"0"}return u[f]=(0,r.animation)((e?"to":"from")+" {opacity: 0;"+(m?" transform: translate3d("+v+", "+y+", 0);":"")+"}\n     "+(e?"from":"to")+" {opacity: 1;transform: none;} "),u[f]}function s(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:r.defaults,t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],i=e.children,s=(e.out,e.forever),o=e.timeout,a=e.duration,l=void 0===a?r.defaults.duration:a,d=e.delay,u=void 0===d?r.defaults.delay:d,h=e.count,p=void 0===h?r.defaults.count:h,f=function(e,t){var i={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(i[n]=e[n]);return i}(e,["children","out","forever","timeout","duration","delay","count"]),m={make:n,duration:void 0===o?l:o,delay:u,forever:s,count:p,style:{animationFillMode:"both"},reverse:f.left};return t?(0,c.default)(f,m,m,i):m}Object.defineProperty(t,"__esModule",{value:!0});var o,a=i(4),r=i(197),l=i(266),c=(o=l)&&o.__esModule?o:{default:o},d={out:a.bool,left:a.bool,right:a.bool,top:a.bool,bottom:a.bool,big:a.bool,mirror:a.bool,opposite:a.bool,duration:a.number,timeout:a.number,distance:a.string,delay:a.number,count:a.number,forever:a.bool},u={};s.propTypes=d,t.default=s,e.exports=t.default},266:function(e,t,i){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n])}return e};t.default=function(e,t,i,n){return"in"in e&&(e.when=e.in),o.default.Children.count(n)<2?o.default.createElement(a.default,s({},e,{inEffect:t,outEffect:i,children:n})):(n=o.default.Children.map(n,function(n){return o.default.createElement(a.default,s({},e,{inEffect:t,outEffect:i,children:n}))}),"Fragment"in o.default?o.default.createElement(o.default.Fragment,null,n):o.default.createElement("span",null,n))};var o=n(i(0)),a=n(i(267));e.exports=t.default},267:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n,s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o=function(){return function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var i=[],n=!0,s=!1,o=void 0;try{for(var a,r=e[Symbol.iterator]();!(n=(a=r.next()).done)&&(i.push(a.value),!t||i.length!==t);n=!0);}catch(e){s=!0,o=e}finally{try{!n&&r.return&&r.return()}finally{if(s)throw o}}return i}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n])}return e},r=function(){function e(e,t){for(var i=0;i<t.length;i++){var n=t[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,i,n){return i&&e(t.prototype,i),n&&e(t,n),t}}(),l=i(0),c=(n=l)&&n.__esModule?n:{default:n},d=i(4),u=i(197),h=(0,d.shape)({make:d.func,duration:d.number.isRequired,delay:d.number.isRequired,forever:d.bool,count:d.number.isRequired,style:d.object.isRequired,reverse:d.bool}),p={collapse:d.bool,collapseEl:d.element,cascade:d.bool,wait:d.number,force:d.bool,disabled:d.bool,appear:d.bool,enter:d.bool,exit:d.bool,fraction:d.number,refProp:d.string,innerRef:d.func,onReveal:d.func,unmountOnExit:d.bool,mountOnEnter:d.bool,inEffect:h.isRequired,outEffect:(0,d.oneOfType)([h,(0,d.oneOf)([!1])]).isRequired,ssrReveal:d.bool,collapseOnly:d.bool,ssrFadeout:d.bool},f={transitionGroup:d.object},m=function(e){function t(e,i){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e,i));return n.isOn=void 0===e.when||!!e.when,n.state={collapse:e.collapse?t.getInitialCollapseStyle(e):void 0,style:{opacity:n.isOn&&!e.ssrReveal||!e.outEffect?void 0:0}},n.savedChild=!1,n.isShown=!1,u.observerMode?n.handleObserve=n.handleObserve.bind(n):(n.revealHandler=n.makeHandler(n.reveal),n.resizeHandler=n.makeHandler(n.resize)),n.saveRef=n.saveRef.bind(n),n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,c.default.Component),r(t,[{key:"saveRef",value:function(e){this.childRef&&this.childRef(e),this.props.innerRef&&this.props.innerRef(e),this.el!==e&&(this.el=e&&"offsetHeight"in e?e:void 0,this.observe(this.props,!0))}},{key:"invisible",value:function(){this&&this.el&&(this.savedChild=!1,this.isShown||(this.setState({hasExited:!0,collapse:this.props.collapse?a({},this.state.collapse,{visibility:"hidden"}):null,style:{opacity:0}}),!u.observerMode&&this.props.collapse&&window.document.dispatchEvent(u.collapseend)))}},{key:"animationEnd",value:function(e,t,i){var n=this,s=i.forever,o=i.count,a=i.delay,r=i.duration;if(!s){this.animationEndTimeout=window.setTimeout(function(){n&&n.el&&(n.animationEndTimeout=void 0,e.call(n))},a+(r+(t?r:0)*o))}}},{key:"getDimensionValue",value:function(){return this.el.offsetHeight+parseInt(window.getComputedStyle(this.el,null).getPropertyValue("margin-top"),10)+parseInt(window.getComputedStyle(this.el,null).getPropertyValue("margin-bottom"),10)}},{key:"collapse",value:function(e,t,i){var n=i.duration+(t.cascade?i.duration:0),s=this.isOn?this.getDimensionValue():0,o=void 0,a=void 0;if(t.collapseOnly)o=i.duration/3,a=i.delay;else{var r=n>>2,l=r>>1;o=r,a=i.delay+(this.isOn?0:n-r-l),e.style.animationDuration=n-r+(this.isOn?l:-l)+"ms",e.style.animationDelay=i.delay+(this.isOn?r-l:0)+"ms"}return e.collapse={height:s,transition:"height "+o+"ms ease "+a+"ms",overflow:t.collapseOnly?"hidden":void 0},e}},{key:"animate",value:function(e){if(this&&this.el&&(this.unlisten(),this.isShown!==this.isOn)){this.isShown=this.isOn;var t=!this.isOn&&e.outEffect,i=e[t?"outEffect":"inEffect"],n="style"in i&&i.style.animationName||void 0,s=void 0;e.collapseOnly?s={hasAppeared:!0,hasExited:!1,style:{opacity:1}}:((e.outEffect||this.isOn)&&i.make&&(n=i.make),s={hasAppeared:!0,hasExited:!1,collapse:void 0,style:a({},i.style,{animationDuration:i.duration+"ms",animationDelay:i.delay+"ms",animationIterationCount:i.forever?"infinite":i.count,opacity:1,animationName:n}),className:i.className}),this.setState(e.collapse?this.collapse(s,e,i):s),t?(this.savedChild=c.default.cloneElement(this.getChild()),this.animationEnd(this.invisible,e.cascade,i)):this.savedChild=!1,this.onReveal(e)}}},{key:"onReveal",value:function(e){e.onReveal&&this.isOn&&(this.onRevealTimeout&&(this.onRevealTimeout=window.clearTimeout(this.onRevealTimeout)),e.wait?this.onRevealTimeout=window.setTimeout(e.onReveal,e.wait):e.onReveal())}},{key:"componentWillUnmount",value:function(){this.unlisten(),u.ssr&&(0,u.disableSsr)()}},{key:"handleObserve",value:function(e,t){o(e,1)[0].intersectionRatio>0&&(t.disconnect(),this.observer=null,this.reveal(this.props,!0))}},{key:"observe",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];if(this.el&&u.observerMode){if(this.observer){if(!t)return;this.observer.disconnect()}else if(t)return;this.observer=new IntersectionObserver(this.handleObserve,{threshold:e.fraction}),this.observer.observe(this.el)}}},{key:"reveal",value:function(e){var t=this,i=arguments.length>1&&void 0!==arguments[1]&&arguments[1];u.globalHide||(0,u.hideAll)(),this&&this.el&&(e||(e=this.props),u.ssr&&(0,u.disableSsr)(),this.isOn&&this.isShown&&void 0!==e.spy?(this.isShown=!1,this.setState({style:{}}),window.setTimeout(function(){return t.reveal(e)},200)):i||this.inViewport(e)||e.force?this.animate(e):u.observerMode?this.observe(e):this.listen())}},{key:"componentDidMount",value:function(){var e=this;if(this.el&&!this.props.disabled){this.props.collapseOnly||("make"in this.props.inEffect&&this.props.inEffect.make(!1,this.props),void 0!==this.props.when&&this.props.outEffect&&"make"in this.props.outEffect&&this.props.outEffect.make(!0,this.props));var i=this.context.transitionGroup,n=i&&!i.isMounting?!("enter"in this.props&&!1===this.props.enter):this.props.appear;return this.isOn&&((void 0!==this.props.when||void 0!==this.props.spy)&&!n||u.ssr&&!u.fadeOutEnabled&&!this.props.ssrFadeout&&this.props.outEffect&&!this.props.ssrReveal&&t.getTop(this.el)<window.pageYOffset+window.innerHeight)?(this.isShown=!0,this.setState({hasAppeared:!0,collapse:this.props.collapse?{height:this.getDimensionValue()}:this.state.collapse,style:{opacity:1}}),void this.onReveal(this.props)):u.ssr&&(u.fadeOutEnabled||this.props.ssrFadeout)&&this.props.outEffect&&t.getTop(this.el)<window.pageYOffset+window.innerHeight?(this.setState({style:{opacity:0,transition:"opacity 1000ms 1000ms"}}),void window.setTimeout(function(){return e.reveal(e.props,!0)},2e3)):void(this.isOn&&(this.props.force?this.animate(this.props):this.reveal(this.props)))}}},{key:"cascade",value:function(e){var t=this,i=void 0;i="string"==typeof e?e.split("").map(function(e,t){return c.default.createElement("span",{key:t,style:{display:"inline-block",whiteSpace:"pre"}},e)}):c.default.Children.toArray(e);var n=this.props[this.isOn||!this.props.outEffect?"inEffect":"outEffect"],o=n.duration,r=n.reverse,l=i.length,d=2*o;this.props.collapse&&(d=parseInt(this.state.style.animationDuration,10),o=d/2);var h=r?l:0;return i.map(function(e){return"object"===(void 0===e?"undefined":s(e))&&e?c.default.cloneElement(e,{style:a({},e.props.style,t.state.style,{animationDuration:Math.round((0,u.cascade)(r?h--:h++,0,l,o,d))+"ms"})}):e})}},{key:"componentWillReceiveProps",value:function(e){void 0!==e.when&&(this.isOn=!!e.when),e.fraction!==this.props.fraction&&this.observe(e,!0),!this.isOn&&e.onExited&&"exit"in e&&!1===e.exit?e.onExited():e.disabled||(e.collapse&&!this.props.collapse&&(this.setState({style:{},collapse:t.getInitialCollapseStyle(e)}),this.isShown=!1),e.when===this.props.when&&e.spy===this.props.spy||this.reveal(e),this.onRevealTimeout&&!this.isOn&&(this.onRevealTimeout=window.clearTimeout(this.onRevealTimeout)))}},{key:"getChild",value:function(){if(this.savedChild&&!this.props.disabled)return this.savedChild;if("object"===s(this.props.children)){var e=c.default.Children.only(this.props.children);return"type"in e&&"string"==typeof e.type||"ref"!==this.props.refProp?e:c.default.createElement("div",null,e)}return c.default.createElement("div",null,this.props.children)}},{key:"render",value:function(){var e;e=this.state.hasAppeared?!this.props.unmountOnExit||!this.state.hasExited||this.isOn:!this.props.mountOnEnter||this.isOn;var t=this.getChild();"function"==typeof t.ref&&(this.childRef=t.ref);var i=!1,n=t.props,s=n.style,o=n.className,r=n.children,l=this.props.disabled?o:(this.props.outEffect?u.namespace:"")+(this.state.className?" "+this.state.className:"")+(o?" "+o:"")||void 0,d=void 0;"function"==typeof this.state.style.animationName&&(this.state.style.animationName=this.state.style.animationName(!this.isOn,this.props)),this.props.cascade&&!this.props.disabled&&r&&this.state.style.animationName?(i=this.cascade(r),d=a({},s,{opacity:1})):d=this.props.disabled?s:a({},s,this.state.style);var h=a({},this.props.props,function(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}({className:l,style:d},this.props.refProp,this.saveRef)),p=c.default.cloneElement(t,h,e?i||r:void 0);return void 0!==this.props.collapse?this.props.collapseEl?c.default.cloneElement(this.props.collapseEl,{style:a({},this.props.collapseEl.style,this.props.disabled?void 0:this.state.collapse),children:p}):c.default.createElement("div",{style:this.props.disabled?void 0:this.state.collapse,children:p}):p}},{key:"makeHandler",value:function(e){var t=this,i=function(){e.call(t,t.props),t.ticking=!1};return function(){t.ticking||((0,u.raf)(i),t.ticking=!0)}}},{key:"inViewport",value:function(e){if(!this.el||window.document.hidden)return!1;var i=this.el.offsetHeight,n=window.pageYOffset-t.getTop(this.el),s=Math.min(i,window.innerHeight)*(u.globalHide?e.fraction:0);return n>s-window.innerHeight&&n<i-s}},{key:"resize",value:function(e){this&&this.el&&this.isOn&&this.inViewport(e)&&(this.unlisten(),this.isShown=this.isOn,this.setState({hasExited:!this.isOn,hasAppeared:!0,collapse:void 0,style:{opacity:this.isOn||!e.outEffect?1:0}}),this.onReveal(e))}},{key:"listen",value:function(){u.observerMode||this.isListener||(this.isListener=!0,window.addEventListener("scroll",this.revealHandler,{passive:!0}),window.addEventListener("orientationchange",this.revealHandler,{passive:!0}),window.document.addEventListener("visibilitychange",this.revealHandler,{passive:!0}),window.document.addEventListener("collapseend",this.revealHandler,{passive:!0}),window.addEventListener("resize",this.resizeHandler,{passive:!0}))}},{key:"unlisten",value:function(){!u.observerMode&&this.isListener&&(window.removeEventListener("scroll",this.revealHandler,{passive:!0}),window.removeEventListener("orientationchange",this.revealHandler,{passive:!0}),window.document.removeEventListener("visibilitychange",this.revealHandler,{passive:!0}),window.document.removeEventListener("collapseend",this.revealHandler,{passive:!0}),window.removeEventListener("resize",this.resizeHandler,{passive:!0}),this.isListener=!1),this.onRevealTimeout&&(this.onRevealTimeout=window.clearTimeout(this.onRevealTimeout)),this.animationEndTimeout&&(this.animationEndTimeout=window.clearTimeout(this.animationEndTimeout))}}],[{key:"getInitialCollapseStyle",value:function(e){return{height:0,visibility:e.when?void 0:"hidden"}}},{key:"getTop",value:function(e){for(;void 0===e.offsetTop;)e=e.parentNode;for(var t=e.offsetTop;e.offsetParent;t+=e.offsetTop)e=e.offsetParent;return t}}]),t}();m.propTypes=p,m.defaultProps={fraction:.2,refProp:"ref"},m.contextTypes=f,m.displayName="RevealBase",t.default=m,e.exports=t.default}}]);
//# sourceMappingURL=component---src-pages-index-js-5f0303e31259dd79144f.js.map