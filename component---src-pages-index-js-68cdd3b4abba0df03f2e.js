(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{135:function(e,t,i){"use strict";i.r(t);var n=i(0),a=i.n(n),s=i(162),o=i(153),r=(i(152),i(149),i(284)),l=i.n(r),c=function(){return a.a.createElement("section",{className:"hero"},a.a.createElement("div",{className:"columns"},a.a.createElement("div",{className:"container hero-body"},a.a.createElement("div",{className:"is-two-fifths column "},a.a.createElement("p",{className:"title"},a.a.createElement(l.a,{bottom:!0},"Hi! I'm Edmund")),a.a.createElement("p",{className:"subtitle"},a.a.createElement(l.a,{bottom:!0},"Full Stack web and mobile developer, amateur ML data scientist, generalist programmer"),a.a.createElement("br",null),a.a.createElement(l.a,{bottom:!0},"I create App//ications"))))))},d=i(179),u=i(137);t.default=function(){return a.a.createElement(s.a,null,a.a.createElement(o.a,{title:"Home",keywords:["gatsby","application","react","bulma","github"]}),a.a.createElement(c,null),a.a.createElement("section",{className:"hero"},a.a.createElement("div",{className:"columns"},a.a.createElement("div",{className:"container hero-body"},a.a.createElement("div",{className:"tabs"},a.a.createElement("ul",null,a.a.createElement("li",{className:"is-active"},a.a.createElement(u.Link,{to:"/blog"},"Blog")),a.a.createElement("li",{title:"coming soon"},a.a.createElement(u.Link,{to:"/"},"Side Projects"))))))),a.a.createElement(d.a,null))}},179:function(e,t,i){"use strict";var n=i(6),a=i.n(n),s=i(180),o=i(0),r=i.n(o),l=(i(152),i(137)),c=(i(149),function(e){function t(){return e.apply(this,arguments)||this}return a()(t,e),t.prototype.render=function(){return r.a.createElement(l.StaticQuery,{query:"3424129496",render:function(e){var t=e.allMarkdownRemark.edges;return r.a.createElement("section",{className:"hero"},r.a.createElement("div",{className:"columns "},r.a.createElement("div",{className:"container hero-body"},t.map(function(e){var t=e.node,i=t.frontmatter.title,n=t.frontmatter.date,a=t.frontmatter.path,s=t.excerpt,o=t.timeToRead,c=t.frontmatter.tags;return r.a.createElement("div",{className:"is-three-fifths column has-shadow"},r.a.createElement("p",{className:"title"},i),r.a.createElement("div",{className:"subtitle is-6 columns is-multiline"},r.a.createElement("div",null,r.a.createElement("span",{className:"icon is-medium has-text-danger"},r.a.createElement("i",{className:"fa fa-calendar"})),n,r.a.createElement("span",{className:"icon is-medium has-text-primary"},r.a.createElement("i",{className:"fa fa-book"})),o," min"),r.a.createElement("div",{className:""},r.a.createElement("span",{className:"icon is-medium has-text-success"},r.a.createElement("i",{className:"fa fa-tags"})),c.map(function(e){return r.a.createElement("span",{className:"blogtag is-light tag"},e)}))),r.a.createElement("div",{className:"has-text-grey-dark"},s,r.a.createElement(l.Link,{className:"has-text-link",to:a},"Read more")))}))))},data:s})},t}(r.a.Component));t.a=c},180:function(e){e.exports={data:{allMarkdownRemark:{edges:[{node:{frontmatter:{date:"09 January 2019",title:"JamStack: Jamming without headaches(WIP)",path:"/blog/JamStack",tags:["Technology","JamStack","Serverless","WIP"]},headings:[],excerpt:"\nJavascript, API and Markup. That is what the Jam in the stack stand for. Javascript for dynamic content, APIs that abstract database and Markup for the static content for the website. During the development of this website, I come across this term when looking for cheap and fast design pattern to…",timeToRead:2}},{node:{frontmatter:{date:"02 January 2019",title:"I just started this website",path:"/blog/My-first-post",tags:["Announcement","Features"]},headings:[],excerpt:"Hey! Welcome to the front page of me. For my new year resolution, I wanna start writing more to improve ways to express myself. For some reason I always struggle with writing, whether its for assignment or work. Its just that went I start writing, its a struggle to express the message I want to…",timeToRead:3}}]}}}},201:function(e,t,i){"use strict";function n(e){try{return f.insertRule(e,f.cssRules.length)}catch(e){console.warn("react-reveal - animation failed")}}function a(){d||(t.globalHide=d=!0,window.removeEventListener("scroll",a,!0),n("."+s+" { opacity: 0; }"),window.removeEventListener("orientationchange",a,!0),window.document.removeEventListener("visibilitychange",a))}Object.defineProperty(t,"__esModule",{value:!0}),t.insertRule=n,t.cascade=function(e,t,i,n,a){var s=Math.log(n),o=(Math.log(a)-s)/(i-t);return Math.exp(s+o*(e-t))},t.animation=function(e){if(!f)return"";var t="@keyframes "+(m+h)+"{"+e+"}",i=p[e];return i?""+m+i:(f.insertRule(t,f.cssRules.length),p[e]=h,""+m+h++)},t.hideAll=a,t.default=function(e){var i=e.ssrFadeout;t.fadeOutEnabled=i};var s=t.namespace="react-reveal",o=(t.defaults={duration:1e3,delay:0,count:1},t.ssr=!0),r=t.observerMode=!1,l=t.raf=function(e){return window.setTimeout(e,66)},c=t.disableSsr=function(){return t.ssr=o=!1},d=(t.fadeOutEnabled=!1,t.ssrFadeout=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];return t.fadeOutEnabled=e},t.globalHide=!1),u=(t.ie10=!1,t.collapseend=void 0),h=1,p={},f=!1,m=s+"-"+Math.floor(1e15*Math.random())+"-";if("undefined"!=typeof window&&"nodejs"!==window.name&&window.document&&"undefined"!=typeof navigator){t.observerMode=r="IntersectionObserver"in window&&"IntersectionObserverEntry"in window&&"intersectionRatio"in window.IntersectionObserverEntry.prototype&&/\{\s*\[native code\]\s*\}/.test(""+IntersectionObserver),t.raf=l=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||l,t.ssr=o=window.document.querySelectorAll("div[data-reactroot]").length>0,-1!==navigator.appVersion.indexOf("MSIE 10")&&(t.ie10=!0),o&&"performance"in window&&"timing"in window.performance&&"domContentLoadedEventEnd"in window.performance.timing&&window.performance.timing.domLoading&&Date.now()-window.performance.timing.domLoading<300&&(t.ssr=o=!1),o&&window.setTimeout(c,1500),r||(t.collapseend=u=document.createEvent("Event"),u.initEvent("collapseend",!0,!0));var v=document.createElement("style");document.head.appendChild(v),v.sheet&&v.sheet.cssRules&&v.sheet.insertRule&&(f=v.sheet,window.addEventListener("scroll",a,!0),window.addEventListener("orientationchange",a,!0),window.document.addEventListener("visibilitychange",a))}},284:function(e,t,i){"use strict";function n(e,t){var i=t.distance,n=t.left,a=t.right,s=t.up,o=t.down,l=t.top,c=t.bottom,d=t.big,h=t.mirror,p=t.opposite,f=(i?i.toString():0)+((n?1:0)|(a?2:0)|(l||o?4:0)|(c||s?8:0)|(h?16:0)|(p?32:0)|(e?64:0)|(d?128:0));if(u.hasOwnProperty(f))return u[f];var m=n||a||s||o||l||c,v=void 0,y=void 0;if(m){if(!h!=!(e&&p)){var w=[a,n,c,l,o,s];n=w[0],a=w[1],l=w[2],c=w[3],s=w[4],o=w[5]}var b=i||(d?"2000px":"100%");v=n?"-"+b:a?b:"0",y=o||l?"-"+b:s||c?b:"0"}return u[f]=(0,r.animation)((e?"to":"from")+" {opacity: 0;"+(m?" transform: translate3d("+v+", "+y+", 0);":"")+"}\n     "+(e?"from":"to")+" {opacity: 1;transform: none;} "),u[f]}function a(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:r.defaults,t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],i=e.children,a=(e.out,e.forever),s=e.timeout,o=e.duration,l=void 0===o?r.defaults.duration:o,d=e.delay,u=void 0===d?r.defaults.delay:d,h=e.count,p=void 0===h?r.defaults.count:h,f=function(e,t){var i={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(i[n]=e[n]);return i}(e,["children","out","forever","timeout","duration","delay","count"]),m={make:n,duration:void 0===s?l:s,delay:u,forever:a,count:p,style:{animationFillMode:"both"},reverse:f.left};return t?(0,c.default)(f,m,m,i):m}Object.defineProperty(t,"__esModule",{value:!0});var s,o=i(4),r=i(201),l=i(285),c=(s=l)&&s.__esModule?s:{default:s},d={out:o.bool,left:o.bool,right:o.bool,top:o.bool,bottom:o.bool,big:o.bool,mirror:o.bool,opposite:o.bool,duration:o.number,timeout:o.number,distance:o.string,delay:o.number,count:o.number,forever:o.bool},u={};a.propTypes=d,t.default=a,e.exports=t.default},285:function(e,t,i){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n])}return e};t.default=function(e,t,i,n){return"in"in e&&(e.when=e.in),s.default.Children.count(n)<2?s.default.createElement(o.default,a({},e,{inEffect:t,outEffect:i,children:n})):(n=s.default.Children.map(n,function(n){return s.default.createElement(o.default,a({},e,{inEffect:t,outEffect:i,children:n}))}),"Fragment"in s.default?s.default.createElement(s.default.Fragment,null,n):s.default.createElement("span",null,n))};var s=n(i(0)),o=n(i(286));e.exports=t.default},286:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n,a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},s=function(){return function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var i=[],n=!0,a=!1,s=void 0;try{for(var o,r=e[Symbol.iterator]();!(n=(o=r.next()).done)&&(i.push(o.value),!t||i.length!==t);n=!0);}catch(e){a=!0,s=e}finally{try{!n&&r.return&&r.return()}finally{if(a)throw s}}return i}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n])}return e},r=function(){function e(e,t){for(var i=0;i<t.length;i++){var n=t[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,i,n){return i&&e(t.prototype,i),n&&e(t,n),t}}(),l=i(0),c=(n=l)&&n.__esModule?n:{default:n},d=i(4),u=i(201),h=(0,d.shape)({make:d.func,duration:d.number.isRequired,delay:d.number.isRequired,forever:d.bool,count:d.number.isRequired,style:d.object.isRequired,reverse:d.bool}),p={collapse:d.bool,collapseEl:d.element,cascade:d.bool,wait:d.number,force:d.bool,disabled:d.bool,appear:d.bool,enter:d.bool,exit:d.bool,fraction:d.number,refProp:d.string,innerRef:d.func,onReveal:d.func,unmountOnExit:d.bool,mountOnEnter:d.bool,inEffect:h.isRequired,outEffect:(0,d.oneOfType)([h,(0,d.oneOf)([!1])]).isRequired,ssrReveal:d.bool,collapseOnly:d.bool,ssrFadeout:d.bool},f={transitionGroup:d.object},m=function(e){function t(e,i){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e,i));return n.isOn=void 0===e.when||!!e.when,n.state={collapse:e.collapse?t.getInitialCollapseStyle(e):void 0,style:{opacity:n.isOn&&!e.ssrReveal||!e.outEffect?void 0:0}},n.savedChild=!1,n.isShown=!1,u.observerMode?n.handleObserve=n.handleObserve.bind(n):(n.revealHandler=n.makeHandler(n.reveal),n.resizeHandler=n.makeHandler(n.resize)),n.saveRef=n.saveRef.bind(n),n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,c.default.Component),r(t,[{key:"saveRef",value:function(e){this.childRef&&this.childRef(e),this.props.innerRef&&this.props.innerRef(e),this.el!==e&&(this.el=e&&"offsetHeight"in e?e:void 0,this.observe(this.props,!0))}},{key:"invisible",value:function(){this&&this.el&&(this.savedChild=!1,this.isShown||(this.setState({hasExited:!0,collapse:this.props.collapse?o({},this.state.collapse,{visibility:"hidden"}):null,style:{opacity:0}}),!u.observerMode&&this.props.collapse&&window.document.dispatchEvent(u.collapseend)))}},{key:"animationEnd",value:function(e,t,i){var n=this,a=i.forever,s=i.count,o=i.delay,r=i.duration;if(!a){this.animationEndTimeout=window.setTimeout(function(){n&&n.el&&(n.animationEndTimeout=void 0,e.call(n))},o+(r+(t?r:0)*s))}}},{key:"getDimensionValue",value:function(){return this.el.offsetHeight+parseInt(window.getComputedStyle(this.el,null).getPropertyValue("margin-top"),10)+parseInt(window.getComputedStyle(this.el,null).getPropertyValue("margin-bottom"),10)}},{key:"collapse",value:function(e,t,i){var n=i.duration+(t.cascade?i.duration:0),a=this.isOn?this.getDimensionValue():0,s=void 0,o=void 0;if(t.collapseOnly)s=i.duration/3,o=i.delay;else{var r=n>>2,l=r>>1;s=r,o=i.delay+(this.isOn?0:n-r-l),e.style.animationDuration=n-r+(this.isOn?l:-l)+"ms",e.style.animationDelay=i.delay+(this.isOn?r-l:0)+"ms"}return e.collapse={height:a,transition:"height "+s+"ms ease "+o+"ms",overflow:t.collapseOnly?"hidden":void 0},e}},{key:"animate",value:function(e){if(this&&this.el&&(this.unlisten(),this.isShown!==this.isOn)){this.isShown=this.isOn;var t=!this.isOn&&e.outEffect,i=e[t?"outEffect":"inEffect"],n="style"in i&&i.style.animationName||void 0,a=void 0;e.collapseOnly?a={hasAppeared:!0,hasExited:!1,style:{opacity:1}}:((e.outEffect||this.isOn)&&i.make&&(n=i.make),a={hasAppeared:!0,hasExited:!1,collapse:void 0,style:o({},i.style,{animationDuration:i.duration+"ms",animationDelay:i.delay+"ms",animationIterationCount:i.forever?"infinite":i.count,opacity:1,animationName:n}),className:i.className}),this.setState(e.collapse?this.collapse(a,e,i):a),t?(this.savedChild=c.default.cloneElement(this.getChild()),this.animationEnd(this.invisible,e.cascade,i)):this.savedChild=!1,this.onReveal(e)}}},{key:"onReveal",value:function(e){e.onReveal&&this.isOn&&(this.onRevealTimeout&&(this.onRevealTimeout=window.clearTimeout(this.onRevealTimeout)),e.wait?this.onRevealTimeout=window.setTimeout(e.onReveal,e.wait):e.onReveal())}},{key:"componentWillUnmount",value:function(){this.unlisten(),u.ssr&&(0,u.disableSsr)()}},{key:"handleObserve",value:function(e,t){s(e,1)[0].intersectionRatio>0&&(t.disconnect(),this.observer=null,this.reveal(this.props,!0))}},{key:"observe",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];if(this.el&&u.observerMode){if(this.observer){if(!t)return;this.observer.disconnect()}else if(t)return;this.observer=new IntersectionObserver(this.handleObserve,{threshold:e.fraction}),this.observer.observe(this.el)}}},{key:"reveal",value:function(e){var t=this,i=arguments.length>1&&void 0!==arguments[1]&&arguments[1];u.globalHide||(0,u.hideAll)(),this&&this.el&&(e||(e=this.props),u.ssr&&(0,u.disableSsr)(),this.isOn&&this.isShown&&void 0!==e.spy?(this.isShown=!1,this.setState({style:{}}),window.setTimeout(function(){return t.reveal(e)},200)):i||this.inViewport(e)||e.force?this.animate(e):u.observerMode?this.observe(e):this.listen())}},{key:"componentDidMount",value:function(){var e=this;if(this.el&&!this.props.disabled){this.props.collapseOnly||("make"in this.props.inEffect&&this.props.inEffect.make(!1,this.props),void 0!==this.props.when&&this.props.outEffect&&"make"in this.props.outEffect&&this.props.outEffect.make(!0,this.props));var i=this.context.transitionGroup,n=i&&!i.isMounting?!("enter"in this.props&&!1===this.props.enter):this.props.appear;return this.isOn&&((void 0!==this.props.when||void 0!==this.props.spy)&&!n||u.ssr&&!u.fadeOutEnabled&&!this.props.ssrFadeout&&this.props.outEffect&&!this.props.ssrReveal&&t.getTop(this.el)<window.pageYOffset+window.innerHeight)?(this.isShown=!0,this.setState({hasAppeared:!0,collapse:this.props.collapse?{height:this.getDimensionValue()}:this.state.collapse,style:{opacity:1}}),void this.onReveal(this.props)):u.ssr&&(u.fadeOutEnabled||this.props.ssrFadeout)&&this.props.outEffect&&t.getTop(this.el)<window.pageYOffset+window.innerHeight?(this.setState({style:{opacity:0,transition:"opacity 1000ms 1000ms"}}),void window.setTimeout(function(){return e.reveal(e.props,!0)},2e3)):void(this.isOn&&(this.props.force?this.animate(this.props):this.reveal(this.props)))}}},{key:"cascade",value:function(e){var t=this,i=void 0;i="string"==typeof e?e.split("").map(function(e,t){return c.default.createElement("span",{key:t,style:{display:"inline-block",whiteSpace:"pre"}},e)}):c.default.Children.toArray(e);var n=this.props[this.isOn||!this.props.outEffect?"inEffect":"outEffect"],s=n.duration,r=n.reverse,l=i.length,d=2*s;this.props.collapse&&(d=parseInt(this.state.style.animationDuration,10),s=d/2);var h=r?l:0;return i.map(function(e){return"object"===(void 0===e?"undefined":a(e))&&e?c.default.cloneElement(e,{style:o({},e.props.style,t.state.style,{animationDuration:Math.round((0,u.cascade)(r?h--:h++,0,l,s,d))+"ms"})}):e})}},{key:"componentWillReceiveProps",value:function(e){void 0!==e.when&&(this.isOn=!!e.when),e.fraction!==this.props.fraction&&this.observe(e,!0),!this.isOn&&e.onExited&&"exit"in e&&!1===e.exit?e.onExited():e.disabled||(e.collapse&&!this.props.collapse&&(this.setState({style:{},collapse:t.getInitialCollapseStyle(e)}),this.isShown=!1),e.when===this.props.when&&e.spy===this.props.spy||this.reveal(e),this.onRevealTimeout&&!this.isOn&&(this.onRevealTimeout=window.clearTimeout(this.onRevealTimeout)))}},{key:"getChild",value:function(){if(this.savedChild&&!this.props.disabled)return this.savedChild;if("object"===a(this.props.children)){var e=c.default.Children.only(this.props.children);return"type"in e&&"string"==typeof e.type||"ref"!==this.props.refProp?e:c.default.createElement("div",null,e)}return c.default.createElement("div",null,this.props.children)}},{key:"render",value:function(){var e;e=this.state.hasAppeared?!this.props.unmountOnExit||!this.state.hasExited||this.isOn:!this.props.mountOnEnter||this.isOn;var t=this.getChild();"function"==typeof t.ref&&(this.childRef=t.ref);var i=!1,n=t.props,a=n.style,s=n.className,r=n.children,l=this.props.disabled?s:(this.props.outEffect?u.namespace:"")+(this.state.className?" "+this.state.className:"")+(s?" "+s:"")||void 0,d=void 0;"function"==typeof this.state.style.animationName&&(this.state.style.animationName=this.state.style.animationName(!this.isOn,this.props)),this.props.cascade&&!this.props.disabled&&r&&this.state.style.animationName?(i=this.cascade(r),d=o({},a,{opacity:1})):d=this.props.disabled?a:o({},a,this.state.style);var h=o({},this.props.props,function(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}({className:l,style:d},this.props.refProp,this.saveRef)),p=c.default.cloneElement(t,h,e?i||r:void 0);return void 0!==this.props.collapse?this.props.collapseEl?c.default.cloneElement(this.props.collapseEl,{style:o({},this.props.collapseEl.style,this.props.disabled?void 0:this.state.collapse),children:p}):c.default.createElement("div",{style:this.props.disabled?void 0:this.state.collapse,children:p}):p}},{key:"makeHandler",value:function(e){var t=this,i=function(){e.call(t,t.props),t.ticking=!1};return function(){t.ticking||((0,u.raf)(i),t.ticking=!0)}}},{key:"inViewport",value:function(e){if(!this.el||window.document.hidden)return!1;var i=this.el.offsetHeight,n=window.pageYOffset-t.getTop(this.el),a=Math.min(i,window.innerHeight)*(u.globalHide?e.fraction:0);return n>a-window.innerHeight&&n<i-a}},{key:"resize",value:function(e){this&&this.el&&this.isOn&&this.inViewport(e)&&(this.unlisten(),this.isShown=this.isOn,this.setState({hasExited:!this.isOn,hasAppeared:!0,collapse:void 0,style:{opacity:this.isOn||!e.outEffect?1:0}}),this.onReveal(e))}},{key:"listen",value:function(){u.observerMode||this.isListener||(this.isListener=!0,window.addEventListener("scroll",this.revealHandler,{passive:!0}),window.addEventListener("orientationchange",this.revealHandler,{passive:!0}),window.document.addEventListener("visibilitychange",this.revealHandler,{passive:!0}),window.document.addEventListener("collapseend",this.revealHandler,{passive:!0}),window.addEventListener("resize",this.resizeHandler,{passive:!0}))}},{key:"unlisten",value:function(){!u.observerMode&&this.isListener&&(window.removeEventListener("scroll",this.revealHandler,{passive:!0}),window.removeEventListener("orientationchange",this.revealHandler,{passive:!0}),window.document.removeEventListener("visibilitychange",this.revealHandler,{passive:!0}),window.document.removeEventListener("collapseend",this.revealHandler,{passive:!0}),window.removeEventListener("resize",this.resizeHandler,{passive:!0}),this.isListener=!1),this.onRevealTimeout&&(this.onRevealTimeout=window.clearTimeout(this.onRevealTimeout)),this.animationEndTimeout&&(this.animationEndTimeout=window.clearTimeout(this.animationEndTimeout))}}],[{key:"getInitialCollapseStyle",value:function(e){return{height:0,visibility:e.when?void 0:"hidden"}}},{key:"getTop",value:function(e){for(;void 0===e.offsetTop;)e=e.parentNode;for(var t=e.offsetTop;e.offsetParent;t+=e.offsetTop)e=e.offsetParent;return t}}]),t}();m.propTypes=p,m.defaultProps={fraction:.2,refProp:"ref"},m.contextTypes=f,m.displayName="RevealBase",t.default=m,e.exports=t.default}}]);
//# sourceMappingURL=component---src-pages-index-js-68cdd3b4abba0df03f2e.js.map