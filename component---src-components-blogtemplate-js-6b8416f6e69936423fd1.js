(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{129:function(t,e,n){"use strict";n.r(e),n.d(e,"query",function(){return c});n(29);var r=n(0),i=n.n(r),o=n(139),a=n(138),u=(n(136),n(160)),s=n.n(u),c="1429061026";e.default=function(t){var e=t.data.markdownRemark,n=e.frontmatter.title,r=e.html,u=e.frontmatter.date,c=e.frontmatter.path;return i.a.createElement(o.a,null,i.a.createElement(a.a,{title:s.a.basename(c).replace(/-/g," "),keywords:["gatsby","application","react","bulma","github"]}),i.a.createElement("section",{className:"hero"},i.a.createElement("div",{className:"container hero-body"},i.a.createElement("div",{className:"columns is-centered"},i.a.createElement("div",{className:"is-half column has-text-justified"},i.a.createElement("p",{className:"title"},n),i.a.createElement("p",{className:"subtitle is-6"},u?"Posted on "+u:""),i.a.createElement("div",{className:"blogpost",dangerouslySetInnerHTML:{__html:r}}))))))}},160:function(t,e,n){(function(t){function n(t,e){for(var n=0,r=t.length-1;r>=0;r--){var i=t[r];"."===i?t.splice(r,1):".."===i?(t.splice(r,1),n++):n&&(t.splice(r,1),n--)}if(e)for(;n--;n)t.unshift("..");return t}var r=/^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/,i=function(t){return r.exec(t).slice(1)};function o(t,e){if(t.filter)return t.filter(e);for(var n=[],r=0;r<t.length;r++)e(t[r],r,t)&&n.push(t[r]);return n}e.resolve=function(){for(var e="",r=!1,i=arguments.length-1;i>=-1&&!r;i--){var a=i>=0?arguments[i]:t.cwd();if("string"!=typeof a)throw new TypeError("Arguments to path.resolve must be strings");a&&(e=a+"/"+e,r="/"===a.charAt(0))}return(r?"/":"")+(e=n(o(e.split("/"),function(t){return!!t}),!r).join("/"))||"."},e.normalize=function(t){var r=e.isAbsolute(t),i="/"===a(t,-1);return(t=n(o(t.split("/"),function(t){return!!t}),!r).join("/"))||r||(t="."),t&&i&&(t+="/"),(r?"/":"")+t},e.isAbsolute=function(t){return"/"===t.charAt(0)},e.join=function(){var t=Array.prototype.slice.call(arguments,0);return e.normalize(o(t,function(t,e){if("string"!=typeof t)throw new TypeError("Arguments to path.join must be strings");return t}).join("/"))},e.relative=function(t,n){function r(t){for(var e=0;e<t.length&&""===t[e];e++);for(var n=t.length-1;n>=0&&""===t[n];n--);return e>n?[]:t.slice(e,n-e+1)}t=e.resolve(t).substr(1),n=e.resolve(n).substr(1);for(var i=r(t.split("/")),o=r(n.split("/")),a=Math.min(i.length,o.length),u=a,s=0;s<a;s++)if(i[s]!==o[s]){u=s;break}var c=[];for(s=u;s<i.length;s++)c.push("..");return(c=c.concat(o.slice(u))).join("/")},e.sep="/",e.delimiter=":",e.dirname=function(t){var e=i(t),n=e[0],r=e[1];return n||r?(r&&(r=r.substr(0,r.length-1)),n+r):"."},e.basename=function(t,e){var n=i(t)[2];return e&&n.substr(-1*e.length)===e&&(n=n.substr(0,n.length-e.length)),n},e.extname=function(t){return i(t)[3]};var a="b"==="ab".substr(-1)?function(t,e,n){return t.substr(e,n)}:function(t,e,n){return e<0&&(e=t.length+e),t.substr(e,n)}}).call(this,n(161))},161:function(t,e){var n,r,i=t.exports={};function o(){throw new Error("setTimeout has not been defined")}function a(){throw new Error("clearTimeout has not been defined")}function u(t){if(n===setTimeout)return setTimeout(t,0);if((n===o||!n)&&setTimeout)return n=setTimeout,setTimeout(t,0);try{return n(t,0)}catch(e){try{return n.call(null,t,0)}catch(e){return n.call(this,t,0)}}}!function(){try{n="function"==typeof setTimeout?setTimeout:o}catch(t){n=o}try{r="function"==typeof clearTimeout?clearTimeout:a}catch(t){r=a}}();var s,c=[],l=!1,f=-1;function h(){l&&s&&(l=!1,s.length?c=s.concat(c):f=-1,c.length&&m())}function m(){if(!l){var t=u(h);l=!0;for(var e=c.length;e;){for(s=c,c=[];++f<e;)s&&s[f].run();f=-1,e=c.length}s=null,l=!1,function(t){if(r===clearTimeout)return clearTimeout(t);if((r===a||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(t);try{r(t)}catch(e){try{return r.call(null,t)}catch(e){return r.call(this,t)}}}(t)}}function p(t,e){this.fun=t,this.array=e}function v(){}i.nextTick=function(t){var e=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)e[n-1]=arguments[n];c.push(new p(t,e)),1!==c.length||l||u(m)},p.prototype.run=function(){this.fun.apply(null,this.array)},i.title="browser",i.browser=!0,i.env={},i.argv=[],i.version="",i.versions={},i.on=v,i.addListener=v,i.once=v,i.off=v,i.removeListener=v,i.removeAllListeners=v,i.emit=v,i.prependListener=v,i.prependOnceListener=v,i.listeners=function(t){return[]},i.binding=function(t){throw new Error("process.binding is not supported")},i.cwd=function(){return"/"},i.chdir=function(t){throw new Error("process.chdir is not supported")},i.umask=function(){return 0}}}]);
//# sourceMappingURL=component---src-components-blogtemplate-js-6b8416f6e69936423fd1.js.map