(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{136:function(e,t,n){"use strict";n.r(t);var i=n(0),a=n.n(i),o=n(137),s=n(169),r=n(158),l=(n(157),n(154),n(219)),c=n.n(l),d=function(){return a.a.createElement("section",{className:"hero"},a.a.createElement("div",{className:"columns"},a.a.createElement("div",{className:"container hero-body"},a.a.createElement("div",{className:"is-two-fifths column "},a.a.createElement("div",{className:"title"},a.a.createElement(c.a,{bottom:!0},"Hi! I'm Edmund")),a.a.createElement("div",{className:"subtitle"},a.a.createElement(c.a,{bottom:!0},"Full Stack web and mobile developer, amateur ML data scientist, generalist programmer"),a.a.createElement("br",null),a.a.createElement(c.a,{bottom:!0},"I create App//ications"))))))},u=n(190),p=n(349),h=n(350),f=n.n(h),m=n(198),v=function(){return a.a.createElement(o.StaticQuery,{query:"214844614",render:function(e){var t=e.allFile;return a.a.createElement("section",{className:"hero"},a.a.createElement("div",{className:"columns"},a.a.createElement("div",{className:"container hero-body"},a.a.createElement(c.a,{left:!0},a.a.createElement("div",{className:"has-text-grey-dark",style:{paddingLeft:"0.75rem"}},"Built on:")),a.a.createElement("div",{className:"column is-mobile"},t.edges.map(function(e){var t=e.node;return console.log(t.base),a.a.createElement("div",{className:"image is-64x64",style:{marginRight:"0.75rem"}},a.a.createElement("a",{href:function(e){switch(e){case"react.png":return"https://reactjs.org/";case"gatsbyjs.png":return"https://www.gatsbyjs.org/";case"bulma.png":return"https://bulma.io/";case"firebase.png":return"https://firebase.google.com/";case"graphql.png":return"https://graphql.org/"}return"/"}(t.base)},a.a.createElement(f.a,{left:!0},a.a.createElement(m.a,{imgsrc:t.base}))))})))))},data:p})};t.default=function(){return a.a.createElement(s.a,null,a.a.createElement(r.a,{title:"Home",keywords:["gatsby","application","react","bulma","github"]}),a.a.createElement(d,null),a.a.createElement(v,null),a.a.createElement("section",{className:"hero"},a.a.createElement("div",{className:"columns"},a.a.createElement("div",{className:"container hero-body"},a.a.createElement("div",{className:"tabs"},a.a.createElement("ul",null,a.a.createElement("li",{className:"is-active"},a.a.createElement(o.Link,{to:"/blog"},"Blog")),a.a.createElement("li",{title:"coming soon"},a.a.createElement(o.Link,{to:"/"},"Side Projects"))))))),a.a.createElement(u.a,null))}},190:function(e,t,n){"use strict";var i=n(6),a=n.n(i),o=n(191),s=n(0),r=n.n(s),l=(n(157),n(137)),c=(n(154),function(e){function t(){return e.apply(this,arguments)||this}return a()(t,e),t.prototype.render=function(){return r.a.createElement(l.StaticQuery,{query:"3424129496",render:function(e){var t=e.allMarkdownRemark.edges;return r.a.createElement("section",{className:"hero"},r.a.createElement("div",{className:"columns "},r.a.createElement("div",{className:"container hero-body"},t.map(function(e){var t=e.node,n=t.frontmatter.title,i=t.frontmatter.date,a=t.frontmatter.path,o=t.excerpt,s=t.timeToRead,c=t.frontmatter.tags;return r.a.createElement("div",{key:n,className:"is-three-fifths column has-shadow"},r.a.createElement("div",{className:"title"},n),r.a.createElement("div",{className:"subtitle is-6 columns is-multiline"},r.a.createElement("div",null,r.a.createElement("span",{className:"icon is-medium has-text-danger"},r.a.createElement("i",{className:"fa fa-calendar"})),i,r.a.createElement("span",{className:"icon is-medium has-text-primary"},r.a.createElement("i",{className:"fa fa-book"})),s," min"),r.a.createElement("div",{className:""},r.a.createElement("span",{className:"icon is-medium has-text-success"},r.a.createElement("i",{className:"fa fa-tags"})),c.map(function(e){return r.a.createElement("span",{key:e,className:"blogtag is-light tag"},e)}))),r.a.createElement("div",{className:"has-text-grey-dark"},o,r.a.createElement(l.Link,{className:"has-text-link",to:a},"Read more")))}))))},data:o})},t}(r.a.Component));t.a=c},191:function(e){e.exports={data:{allMarkdownRemark:{edges:[{node:{frontmatter:{date:"09 January 2019",title:"JamStack: Jamming without headaches(WIP)",path:"/blog/JamStack",tags:["Technology","JamStack","Serverless","WIP"]},headings:[],excerpt:"\nJavascript, API and Markup. That is what the Jam in the stack stand for. Javascript for dynamic content, APIs that abstract database and Markup for the static content for the website. During the development of this website, I come across this term when looking for cheap and fast design pattern to…",timeToRead:2}},{node:{frontmatter:{date:"02 January 2019",title:"I just started this website",path:"/blog/My-first-post",tags:["Announcement","Features"]},headings:[],excerpt:"Hey! Welcome to the front page of me. For my new year resolution, I wanna start writing more to improve ways to express myself. For some reason I always struggle with writing, whether its for assignment or work. Its just that went I start writing, its a struggle to express the message I want to…",timeToRead:3}}]}}}},192:function(e,t,n){"use strict";function i(e){try{return f.insertRule(e,f.cssRules.length)}catch(e){console.warn("react-reveal - animation failed")}}function a(){d||(t.globalHide=d=!0,window.removeEventListener("scroll",a,!0),i("."+o+" { opacity: 0; }"),window.removeEventListener("orientationchange",a,!0),window.document.removeEventListener("visibilitychange",a))}Object.defineProperty(t,"__esModule",{value:!0}),t.insertRule=i,t.cascade=function(e,t,n,i,a){var o=Math.log(i),s=(Math.log(a)-o)/(n-t);return Math.exp(o+s*(e-t))},t.animation=function(e){if(!f)return"";var t="@keyframes "+(m+p)+"{"+e+"}",n=h[e];return n?""+m+n:(f.insertRule(t,f.cssRules.length),h[e]=p,""+m+p++)},t.hideAll=a,t.default=function(e){var n=e.ssrFadeout;t.fadeOutEnabled=n};var o=t.namespace="react-reveal",s=(t.defaults={duration:1e3,delay:0,count:1},t.ssr=!0),r=t.observerMode=!1,l=t.raf=function(e){return window.setTimeout(e,66)},c=t.disableSsr=function(){return t.ssr=s=!1},d=(t.fadeOutEnabled=!1,t.ssrFadeout=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];return t.fadeOutEnabled=e},t.globalHide=!1),u=(t.ie10=!1,t.collapseend=void 0),p=1,h={},f=!1,m=o+"-"+Math.floor(1e15*Math.random())+"-";if("undefined"!=typeof window&&"nodejs"!==window.name&&window.document&&"undefined"!=typeof navigator){t.observerMode=r="IntersectionObserver"in window&&"IntersectionObserverEntry"in window&&"intersectionRatio"in window.IntersectionObserverEntry.prototype&&/\{\s*\[native code\]\s*\}/.test(""+IntersectionObserver),t.raf=l=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||l,t.ssr=s=window.document.querySelectorAll("div[data-reactroot]").length>0,-1!==navigator.appVersion.indexOf("MSIE 10")&&(t.ie10=!0),s&&"performance"in window&&"timing"in window.performance&&"domContentLoadedEventEnd"in window.performance.timing&&window.performance.timing.domLoading&&Date.now()-window.performance.timing.domLoading<300&&(t.ssr=s=!1),s&&window.setTimeout(c,1500),r||(t.collapseend=u=document.createEvent("Event"),u.initEvent("collapseend",!0,!0));var v=document.createElement("style");document.head.appendChild(v),v.sheet&&v.sheet.cssRules&&v.sheet.insertRule&&(f=v.sheet,window.addEventListener("scroll",a,!0),window.addEventListener("orientationchange",a,!0),window.document.addEventListener("visibilitychange",a))}},219:function(e,t,n){"use strict";function i(e,t){var n=t.distance,i=t.left,a=t.right,o=t.up,s=t.down,l=t.top,c=t.bottom,d=t.big,p=t.mirror,h=t.opposite,f=(n?n.toString():0)+((i?1:0)|(a?2:0)|(l||s?4:0)|(c||o?8:0)|(p?16:0)|(h?32:0)|(e?64:0)|(d?128:0));if(u.hasOwnProperty(f))return u[f];var m=i||a||o||s||l||c,v=void 0,y=void 0;if(m){if(!p!=!(e&&h)){var b=[a,i,c,l,s,o];i=b[0],a=b[1],l=b[2],c=b[3],o=b[4],s=b[5]}var w=n||(d?"2000px":"100%");v=i?"-"+w:a?w:"0",y=s||l?"-"+w:o||c?w:"0"}return u[f]=(0,r.animation)((e?"to":"from")+" {opacity: 0;"+(m?" transform: translate3d("+v+", "+y+", 0);":"")+"}\n     "+(e?"from":"to")+" {opacity: 1;transform: none;} "),u[f]}function a(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:r.defaults,t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=e.children,a=(e.out,e.forever),o=e.timeout,s=e.duration,l=void 0===s?r.defaults.duration:s,d=e.delay,u=void 0===d?r.defaults.delay:d,p=e.count,h=void 0===p?r.defaults.count:p,f=function(e,t){var n={};for(var i in e)t.indexOf(i)>=0||Object.prototype.hasOwnProperty.call(e,i)&&(n[i]=e[i]);return n}(e,["children","out","forever","timeout","duration","delay","count"]),m={make:i,duration:void 0===o?l:o,delay:u,forever:a,count:h,style:{animationFillMode:"both"},reverse:f.left};return t?(0,c.default)(f,m,m,n):m}Object.defineProperty(t,"__esModule",{value:!0});var o,s=n(4),r=n(192),l=n(220),c=(o=l)&&o.__esModule?o:{default:o},d={out:s.bool,left:s.bool,right:s.bool,top:s.bool,bottom:s.bool,big:s.bool,mirror:s.bool,opposite:s.bool,duration:s.number,timeout:s.number,distance:s.string,delay:s.number,count:s.number,forever:s.bool},u={};a.propTypes=d,t.default=a,e.exports=t.default},220:function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e};t.default=function(e,t,n,i){return"in"in e&&(e.when=e.in),o.default.Children.count(i)<2?o.default.createElement(s.default,a({},e,{inEffect:t,outEffect:n,children:i})):(i=o.default.Children.map(i,function(i){return o.default.createElement(s.default,a({},e,{inEffect:t,outEffect:n,children:i}))}),"Fragment"in o.default?o.default.createElement(o.default.Fragment,null,i):o.default.createElement("span",null,i))};var o=i(n(0)),s=i(n(348));e.exports=t.default},348:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i,a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o=function(){return function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var n=[],i=!0,a=!1,o=void 0;try{for(var s,r=e[Symbol.iterator]();!(i=(s=r.next()).done)&&(n.push(s.value),!t||n.length!==t);i=!0);}catch(e){a=!0,o=e}finally{try{!i&&r.return&&r.return()}finally{if(a)throw o}}return n}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},r=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),l=n(0),c=(i=l)&&i.__esModule?i:{default:i},d=n(4),u=n(192),p=(0,d.shape)({make:d.func,duration:d.number.isRequired,delay:d.number.isRequired,forever:d.bool,count:d.number.isRequired,style:d.object.isRequired,reverse:d.bool}),h={collapse:d.bool,collapseEl:d.element,cascade:d.bool,wait:d.number,force:d.bool,disabled:d.bool,appear:d.bool,enter:d.bool,exit:d.bool,fraction:d.number,refProp:d.string,innerRef:d.func,onReveal:d.func,unmountOnExit:d.bool,mountOnEnter:d.bool,inEffect:p.isRequired,outEffect:(0,d.oneOfType)([p,(0,d.oneOf)([!1])]).isRequired,ssrReveal:d.bool,collapseOnly:d.bool,ssrFadeout:d.bool},f={transitionGroup:d.object},m=function(e){function t(e,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var i=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e,n));return i.isOn=void 0===e.when||!!e.when,i.state={collapse:e.collapse?t.getInitialCollapseStyle(e):void 0,style:{opacity:i.isOn&&!e.ssrReveal||!e.outEffect?void 0:0}},i.savedChild=!1,i.isShown=!1,u.observerMode?i.handleObserve=i.handleObserve.bind(i):(i.revealHandler=i.makeHandler(i.reveal),i.resizeHandler=i.makeHandler(i.resize)),i.saveRef=i.saveRef.bind(i),i}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,c.default.Component),r(t,[{key:"saveRef",value:function(e){this.childRef&&this.childRef(e),this.props.innerRef&&this.props.innerRef(e),this.el!==e&&(this.el=e&&"offsetHeight"in e?e:void 0,this.observe(this.props,!0))}},{key:"invisible",value:function(){this&&this.el&&(this.savedChild=!1,this.isShown||(this.setState({hasExited:!0,collapse:this.props.collapse?s({},this.state.collapse,{visibility:"hidden"}):null,style:{opacity:0}}),!u.observerMode&&this.props.collapse&&window.document.dispatchEvent(u.collapseend)))}},{key:"animationEnd",value:function(e,t,n){var i=this,a=n.forever,o=n.count,s=n.delay,r=n.duration;if(!a){this.animationEndTimeout=window.setTimeout(function(){i&&i.el&&(i.animationEndTimeout=void 0,e.call(i))},s+(r+(t?r:0)*o))}}},{key:"getDimensionValue",value:function(){return this.el.offsetHeight+parseInt(window.getComputedStyle(this.el,null).getPropertyValue("margin-top"),10)+parseInt(window.getComputedStyle(this.el,null).getPropertyValue("margin-bottom"),10)}},{key:"collapse",value:function(e,t,n){var i=n.duration+(t.cascade?n.duration:0),a=this.isOn?this.getDimensionValue():0,o=void 0,s=void 0;if(t.collapseOnly)o=n.duration/3,s=n.delay;else{var r=i>>2,l=r>>1;o=r,s=n.delay+(this.isOn?0:i-r-l),e.style.animationDuration=i-r+(this.isOn?l:-l)+"ms",e.style.animationDelay=n.delay+(this.isOn?r-l:0)+"ms"}return e.collapse={height:a,transition:"height "+o+"ms ease "+s+"ms",overflow:t.collapseOnly?"hidden":void 0},e}},{key:"animate",value:function(e){if(this&&this.el&&(this.unlisten(),this.isShown!==this.isOn)){this.isShown=this.isOn;var t=!this.isOn&&e.outEffect,n=e[t?"outEffect":"inEffect"],i="style"in n&&n.style.animationName||void 0,a=void 0;e.collapseOnly?a={hasAppeared:!0,hasExited:!1,style:{opacity:1}}:((e.outEffect||this.isOn)&&n.make&&(i=n.make),a={hasAppeared:!0,hasExited:!1,collapse:void 0,style:s({},n.style,{animationDuration:n.duration+"ms",animationDelay:n.delay+"ms",animationIterationCount:n.forever?"infinite":n.count,opacity:1,animationName:i}),className:n.className}),this.setState(e.collapse?this.collapse(a,e,n):a),t?(this.savedChild=c.default.cloneElement(this.getChild()),this.animationEnd(this.invisible,e.cascade,n)):this.savedChild=!1,this.onReveal(e)}}},{key:"onReveal",value:function(e){e.onReveal&&this.isOn&&(this.onRevealTimeout&&(this.onRevealTimeout=window.clearTimeout(this.onRevealTimeout)),e.wait?this.onRevealTimeout=window.setTimeout(e.onReveal,e.wait):e.onReveal())}},{key:"componentWillUnmount",value:function(){this.unlisten(),u.ssr&&(0,u.disableSsr)()}},{key:"handleObserve",value:function(e,t){o(e,1)[0].intersectionRatio>0&&(t.disconnect(),this.observer=null,this.reveal(this.props,!0))}},{key:"observe",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];if(this.el&&u.observerMode){if(this.observer){if(!t)return;this.observer.disconnect()}else if(t)return;this.observer=new IntersectionObserver(this.handleObserve,{threshold:e.fraction}),this.observer.observe(this.el)}}},{key:"reveal",value:function(e){var t=this,n=arguments.length>1&&void 0!==arguments[1]&&arguments[1];u.globalHide||(0,u.hideAll)(),this&&this.el&&(e||(e=this.props),u.ssr&&(0,u.disableSsr)(),this.isOn&&this.isShown&&void 0!==e.spy?(this.isShown=!1,this.setState({style:{}}),window.setTimeout(function(){return t.reveal(e)},200)):n||this.inViewport(e)||e.force?this.animate(e):u.observerMode?this.observe(e):this.listen())}},{key:"componentDidMount",value:function(){var e=this;if(this.el&&!this.props.disabled){this.props.collapseOnly||("make"in this.props.inEffect&&this.props.inEffect.make(!1,this.props),void 0!==this.props.when&&this.props.outEffect&&"make"in this.props.outEffect&&this.props.outEffect.make(!0,this.props));var n=this.context.transitionGroup,i=n&&!n.isMounting?!("enter"in this.props&&!1===this.props.enter):this.props.appear;return this.isOn&&((void 0!==this.props.when||void 0!==this.props.spy)&&!i||u.ssr&&!u.fadeOutEnabled&&!this.props.ssrFadeout&&this.props.outEffect&&!this.props.ssrReveal&&t.getTop(this.el)<window.pageYOffset+window.innerHeight)?(this.isShown=!0,this.setState({hasAppeared:!0,collapse:this.props.collapse?{height:this.getDimensionValue()}:this.state.collapse,style:{opacity:1}}),void this.onReveal(this.props)):u.ssr&&(u.fadeOutEnabled||this.props.ssrFadeout)&&this.props.outEffect&&t.getTop(this.el)<window.pageYOffset+window.innerHeight?(this.setState({style:{opacity:0,transition:"opacity 1000ms 1000ms"}}),void window.setTimeout(function(){return e.reveal(e.props,!0)},2e3)):void(this.isOn&&(this.props.force?this.animate(this.props):this.reveal(this.props)))}}},{key:"cascade",value:function(e){var t=this,n=void 0;n="string"==typeof e?e.split("").map(function(e,t){return c.default.createElement("span",{key:t,style:{display:"inline-block",whiteSpace:"pre"}},e)}):c.default.Children.toArray(e);var i=this.props[this.isOn||!this.props.outEffect?"inEffect":"outEffect"],o=i.duration,r=i.reverse,l=n.length,d=2*o;this.props.collapse&&(d=parseInt(this.state.style.animationDuration,10),o=d/2);var p=r?l:0;return n.map(function(e){return"object"===(void 0===e?"undefined":a(e))&&e?c.default.cloneElement(e,{style:s({},e.props.style,t.state.style,{animationDuration:Math.round((0,u.cascade)(r?p--:p++,0,l,o,d))+"ms"})}):e})}},{key:"componentWillReceiveProps",value:function(e){void 0!==e.when&&(this.isOn=!!e.when),e.fraction!==this.props.fraction&&this.observe(e,!0),!this.isOn&&e.onExited&&"exit"in e&&!1===e.exit?e.onExited():e.disabled||(e.collapse&&!this.props.collapse&&(this.setState({style:{},collapse:t.getInitialCollapseStyle(e)}),this.isShown=!1),e.when===this.props.when&&e.spy===this.props.spy||this.reveal(e),this.onRevealTimeout&&!this.isOn&&(this.onRevealTimeout=window.clearTimeout(this.onRevealTimeout)))}},{key:"getChild",value:function(){if(this.savedChild&&!this.props.disabled)return this.savedChild;if("object"===a(this.props.children)){var e=c.default.Children.only(this.props.children);return"type"in e&&"string"==typeof e.type||"ref"!==this.props.refProp?e:c.default.createElement("div",null,e)}return c.default.createElement("div",null,this.props.children)}},{key:"render",value:function(){var e;e=this.state.hasAppeared?!this.props.unmountOnExit||!this.state.hasExited||this.isOn:!this.props.mountOnEnter||this.isOn;var t=this.getChild();"function"==typeof t.ref&&(this.childRef=t.ref);var n=!1,i=t.props,a=i.style,o=i.className,r=i.children,l=this.props.disabled?o:(this.props.outEffect?u.namespace:"")+(this.state.className?" "+this.state.className:"")+(o?" "+o:"")||void 0,d=void 0;"function"==typeof this.state.style.animationName&&(this.state.style.animationName=this.state.style.animationName(!this.isOn,this.props)),this.props.cascade&&!this.props.disabled&&r&&this.state.style.animationName?(n=this.cascade(r),d=s({},a,{opacity:1})):d=this.props.disabled?a:s({},a,this.state.style);var p=s({},this.props.props,function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}({className:l,style:d},this.props.refProp,this.saveRef)),h=c.default.cloneElement(t,p,e?n||r:void 0);return void 0!==this.props.collapse?this.props.collapseEl?c.default.cloneElement(this.props.collapseEl,{style:s({},this.props.collapseEl.style,this.props.disabled?void 0:this.state.collapse),children:h}):c.default.createElement("div",{style:this.props.disabled?void 0:this.state.collapse,children:h}):h}},{key:"makeHandler",value:function(e){var t=this,n=function(){e.call(t,t.props),t.ticking=!1};return function(){t.ticking||((0,u.raf)(n),t.ticking=!0)}}},{key:"inViewport",value:function(e){if(!this.el||window.document.hidden)return!1;var n=this.el.offsetHeight,i=window.pageYOffset-t.getTop(this.el),a=Math.min(n,window.innerHeight)*(u.globalHide?e.fraction:0);return i>a-window.innerHeight&&i<n-a}},{key:"resize",value:function(e){this&&this.el&&this.isOn&&this.inViewport(e)&&(this.unlisten(),this.isShown=this.isOn,this.setState({hasExited:!this.isOn,hasAppeared:!0,collapse:void 0,style:{opacity:this.isOn||!e.outEffect?1:0}}),this.onReveal(e))}},{key:"listen",value:function(){u.observerMode||this.isListener||(this.isListener=!0,window.addEventListener("scroll",this.revealHandler,{passive:!0}),window.addEventListener("orientationchange",this.revealHandler,{passive:!0}),window.document.addEventListener("visibilitychange",this.revealHandler,{passive:!0}),window.document.addEventListener("collapseend",this.revealHandler,{passive:!0}),window.addEventListener("resize",this.resizeHandler,{passive:!0}))}},{key:"unlisten",value:function(){!u.observerMode&&this.isListener&&(window.removeEventListener("scroll",this.revealHandler,{passive:!0}),window.removeEventListener("orientationchange",this.revealHandler,{passive:!0}),window.document.removeEventListener("visibilitychange",this.revealHandler,{passive:!0}),window.document.removeEventListener("collapseend",this.revealHandler,{passive:!0}),window.removeEventListener("resize",this.resizeHandler,{passive:!0}),this.isListener=!1),this.onRevealTimeout&&(this.onRevealTimeout=window.clearTimeout(this.onRevealTimeout)),this.animationEndTimeout&&(this.animationEndTimeout=window.clearTimeout(this.animationEndTimeout))}}],[{key:"getInitialCollapseStyle",value:function(e){return{height:0,visibility:e.when?void 0:"hidden"}}},{key:"getTop",value:function(e){for(;void 0===e.offsetTop;)e=e.parentNode;for(var t=e.offsetTop;e.offsetParent;t+=e.offsetTop)e=e.offsetParent;return t}}]),t}();m.propTypes=h,m.defaultProps={fraction:.2,refProp:"ref"},m.contextTypes=f,m.displayName="RevealBase",t.default=m,e.exports=t.default},349:function(e){e.exports={data:{allFile:{edges:[{node:{base:"bulma.png"}},{node:{base:"graphql.png"}},{node:{base:"react.png"}},{node:{base:"firebase.png"}},{node:{base:"gatsbyjs.png"}}]}}}},350:function(e,t,n){"use strict";function i(e,t){var n=t.left,i=t.right,a=t.up,o=t.down,s=t.top,r=t.bottom,l=t.big,d=t.mirror,p=t.opposite,h=(n?1:0)|(i?2:0)|(s||o?4:0)|(r||a?8:0)|(d?16:0)|(p?32:0)|(e?64:0)|(l?128:0);if(u.hasOwnProperty(h))return u[h];if(!d!=!(e&&p)){var f=[i,n,r,s,o,a];n=f[0],i=f[1],s=f[2],r=f[3],a=f[4],o=f[5]}var m=l?"2000px":"100%",v=n?"-"+m:i?m:"0",y=o||s?"-"+m:a||r?m:"0";return u[h]=(0,c.animation)("\n    "+(e?"to":"from")+" {opacity: 0;transform: translate3d("+v+", "+y+", 0) rotate3d(0, 0, 1, -120deg);}\n\t  "+(e?"from":"to")+" {opacity: 1;transform: none}\n  "),u[h]}function a(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:c.defaults,t=e.children,n=(e.out,e.forever),a=e.timeout,o=e.duration,s=void 0===o?c.defaults.duration:o,l=e.delay,d=void 0===l?c.defaults.delay:l,u=e.count,p=void 0===u?c.defaults.count:u,h=function(e,t){var n={};for(var i in e)t.indexOf(i)>=0||Object.prototype.hasOwnProperty.call(e,i)&&(n[i]=e[i]);return n}(e,["children","out","forever","timeout","duration","delay","count"]),f={make:i,duration:void 0===a?s:a,delay:d,forever:n,count:p,style:{animationFillMode:"both"}};return(0,r.default)(h,f,f,t)}Object.defineProperty(t,"__esModule",{value:!0});var o,s=n(220),r=(o=s)&&o.__esModule?o:{default:o},l=n(4),c=n(192),d={out:l.bool,left:l.bool,right:l.bool,top:l.bool,bottom:l.bool,big:l.bool,mirror:l.bool,opposite:l.bool,duration:l.number,timeout:l.number,delay:l.number,count:l.number,forever:l.bool},u={};a.propTypes=d,t.default=a,e.exports=t.default}}]);
//# sourceMappingURL=component---src-pages-index-js-3727db3099142b32daed.js.map