(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{184:function(e,A,a){"use strict";a.r(A),a.d(A,"graphql",function(){return u}),a.d(A,"StaticQueryContext",function(){return m}),a.d(A,"StaticQuery",function(){return f});var t=a(0),n=a.n(t),i=a(4),r=a.n(i),s=a(186),c=a.n(s);a.d(A,"Link",function(){return c.a}),a.d(A,"withPrefix",function(){return s.withPrefix}),a.d(A,"navigate",function(){return s.navigate}),a.d(A,"push",function(){return s.push}),a.d(A,"replace",function(){return s.replace}),a.d(A,"navigateTo",function(){return s.navigateTo});var o=a(215),d=a.n(o);a.d(A,"PageRenderer",function(){return d.a});var l=a(50);a.d(A,"parsePath",function(){return l.a});var m=n.a.createContext({}),f=function(e){return n.a.createElement(m.Consumer,null,function(A){return e.data||A[e.query]&&A[e.query].data?(e.render||e.children)(e.data?e.data.data:A[e.query].data):n.a.createElement("div",null,"Loading (StaticQuery)")})};function u(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}f.propTypes={data:r.a.object,query:r.a.string.isRequired,render:r.a.func,children:r.a.func}},188:function(e,A,a){},190:function(e,A,a){"use strict";var t=a(266),n=a(0),i=a.n(n),r=a(4),s=a.n(r),c=a(267),o=a.n(c),d=a(184);function l(e){var A=e.description,a=e.lang,n=e.meta,r=e.keywords,s=e.title;return i.a.createElement(d.StaticQuery,{query:m,render:function(e){var t=A||e.site.siteMetadata.description;return i.a.createElement(o.a,{htmlAttributes:{lang:a},title:s,titleTemplate:"%s | "+e.site.siteMetadata.title,meta:[{name:"description",content:t},{property:"og:title",content:s},{property:"og:description",content:t},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:e.site.siteMetadata.author},{name:"twitter:title",content:s},{name:"twitter:description",content:t}].concat(r.length>0?{name:"keywords",content:r.join(", ")}:[]).concat(n)})},data:t})}l.defaultProps={lang:"en",meta:[],keywords:[]},l.propTypes={description:s.a.string,lang:s.a.string,meta:s.a.array,keywords:s.a.arrayOf(s.a.string),title:s.a.string.isRequired},A.a=l;var m="1025518380"},194:function(e,A,a){"use strict";var t=a(234),n=a(0),i=a.n(n),r=a(4),s=a.n(r),c=a(184),o=a(6),d=a.n(o),l=a(55),m=a.n(l),f=(a(189),a(188),a(236)),u=function(e){function A(A){var a;return(a=e.call(this,A)||this).state={active:!1},a.toggleClass=a.toggleClass.bind(m()(m()(a))),a}d()(A,e);var a=A.prototype;return a.toggleClass=function(){this.setState(function(e){return{active:!e.active}})},a.render=function(){return i.a.createElement("header",{className:"hero"},i.a.createElement("nav",{className:"navbar has-shadow"},i.a.createElement("div",{className:"container"},i.a.createElement("div",{className:"navbar-brand"},i.a.createElement("div",{className:"navbar-item"},i.a.createElement(c.Link,{className:"",to:"/"},i.a.createElement("div",{className:"title is-3"},i.a.createElement("span",{className:"icon is-large has-text-primary"},i.a.createElement("i",{className:"fa fa-flask"})),this.props.siteTitle))),i.a.createElement("div",{role:"button","aria-hidden":"true",onClick:this.toggleClass,className:this.state.active?"navbar-burger is-active burger":"navbar-burger burger"},i.a.createElement("span",null),i.a.createElement("span",null),i.a.createElement("span",null))),i.a.createElement("div",{className:this.state.active?"is-active navbar-menu":"navbar-menu"},i.a.createElement("div",{className:"navbar-start"},i.a.createElement(c.Link,{className:"navbar-item ",to:"/blog"},i.a.createElement("span",{className:"icon is-medium has-text-info"},i.a.createElement("i",{className:"fa fa-th-large"})),"Blog"),i.a.createElement(c.Link,{className:"navbar-item ",to:"/about"},i.a.createElement("span",{className:"icon is-medium has-text-success"},i.a.createElement("i",{className:"fa fa-user-circle"})),"About me"),i.a.createElement("div",{className:"navbar-item has-dropdown is-hoverable"},i.a.createElement("div",{className:"navbar-link"},i.a.createElement("span",{className:"icon is-medium has-text-danger"},i.a.createElement("i",{className:"fa fa-briefcase"})),"Side Projects"),i.a.createElement("div",{className:"navbar-dropdown"},i.a.createElement(c.Link,{className:"navbar-item ",to:"/"},"Working in Progress",i.a.createElement("br",null),"One day..")))),i.a.createElement("div",{className:"navbar-end"},i.a.createElement(f.OutboundLink,{className:"navbar-item ",href:this.props.repo},i.a.createElement("span",{className:"icon is-large has-text-black-bis"},i.a.createElement("i",{className:"fa fa-github"})),"Github repo"))))))},A}(i.a.Component),p=a(237),b=a(238),g=a.n(b),E=(a(241),a(242)),w=a.n(E),B=a(243),h=a(218),Q=a(257),C=a.n(Q),v=function(e){function A(A){var a;return(a=e.call(this,A)||this).onCloseModal=function(){a.setState({open:!1})},a.state={open:!1,err:"",img:"2_pay_mm_off.png"},a.onOpenModal=a.onOpenModal.bind(m()(m()(a))),a.startmetamask=a.startmetamask.bind(m()(m()(a))),a}d()(A,e);var a=A.prototype;return a.onOpenModal=function(e){this.setState({open:!0,err:e})},a.startmetamask=function(){var e=w()(g.a.mark(function e(){var A,a;return g.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(void 0!==window.ethereum){e.next=3;break}return this.onOpenModal("You need to install MetaMask to use this feature. Download here: https://metamask.io"),e.abrupt("return");case 3:return e.next=5,window.ethereum.enable();case 5:A=e.sent,a=A[0],window.web3.eth.sendTransaction({to:"0xEddae736256B1F3cf1a9F278CfdcB1E45f4c5515",from:a,value:window.web3.toWei("0.01","ether")},function(e,A){if(e)return this.onOpenModal("Oh no!: "+e.message);this.onOpenModal("Transaction successful! Thank you so much. You can track your transaction here: "+A)});case 8:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}(),a.render=function(){return i.a.createElement("div",null,i.a.createElement("button",{className:"tip-button","aria-hidden":"true",onClick:this.startmetamask},i.a.createElement(h.a,{imgsrc:this.state.img,style:{position:"absolute",left:0,top:0,width:"100%",height:"100%"}})),i.a.createElement(B.a,{open:this.state.open,onClose:this.onCloseModal,center:!0},i.a.createElement("br",null),i.a.createElement(C.a,null,this.state.err)))},A}(i.a.Component),N=a(219),y=a.n(N),x=function(){return i.a.createElement(c.StaticQuery,{query:"3627576170",render:function(e){return i.a.createElement("footer",{className:"footer has-background-white-ter"},i.a.createElement("div",{className:"container has-text-grey-dark hero-body"},i.a.createElement("div",{className:"columns"},i.a.createElement("div",{className:"column"},"Contact",i.a.createElement("br",null),"+60179882188",i.a.createElement("br",null),"edmundtay96@gmail.com"),i.a.createElement("div",{className:"column"},"Repository info",i.a.createElement("br",null),"Last commited on ",y()(1e3*e.gitCommit.commitDate).format("DD MMM YYYY LT"),i.a.createElement("br",null),e.gitCommit.commitSubject),i.a.createElement("div",{className:"column"},"Donations",i.a.createElement(v,null),"Btc:1Bqwtx1tDmrxsrZpyqiU8sMiT2jYiwYgoj",i.a.createElement("br",null),"Eth:0xEddae736256B1F3cf1a9F278CfdcB1E45f4c5515")),i.a.createElement("div",{className:"has-text-centered is-size-7"},"© ",(new Date).getFullYear(),", Built by Edmund. ",i.a.createElement(c.Link,{className:"has-text-link",to:"/privacy"},"Privacy Policy"))))},data:p})},Y=function(e){var A=e.children;return i.a.createElement(c.StaticQuery,{query:"2263432981",render:function(e){return i.a.createElement("article",null,i.a.createElement(u,{siteTitle:e.site.siteMetadata.title,repo:e.site.siteMetadata.repo}),i.a.createElement("main",null,A),i.a.createElement(x,null))},data:t})};Y.propTypes={children:s.a.node.isRequired};A.a=Y},215:function(e,A,a){var t;e.exports=(t=a(235))&&t.default||t},218:function(e,A,a){"use strict";a.d(A,"a",function(){return l});a(120),a(106);var t=a(6),n=a.n(t),i=a(255),r=a(0),s=a.n(r),c=a(184),o=a(256),d=a.n(o),l=function(e){function A(){return e.apply(this,arguments)||this}return n()(A,e),A.prototype.render=function(){var e=this;return s.a.createElement(c.StaticQuery,{query:"3703113417",render:function(A){return s.a.createElement(d.a,{fluid:A.allImageSharp.edges.find(function(A){return A.node.fluid.src.split("/").pop()===e.props.imgsrc}).node.fluid,alt:e.props.imgsrc})},data:i})},A}(s.a.Component)},234:function(e){e.exports={data:{site:{siteMetadata:{title:"Eddayy",repo:"https://github.com/Eddayy/Eddayy.github.io/tree/development"}}}}},235:function(e,A,a){"use strict";a.r(A);a(31);var t=a(0),n=a.n(t),i=a(4),r=a.n(i),s=a(75),c=a(2),o=function(e){var A=e.location,a=c.default.getResourcesForPathnameSync(A.pathname);return n.a.createElement(s.a,Object.assign({location:A,pageResources:a},a.json))};o.propTypes={location:r.a.shape({pathname:r.a.string.isRequired}).isRequired},A.default=o},237:function(e){e.exports={data:{gitCommit:{commitDate:"1549876019",commitSubject:"UI: added profile pic to landing page"}}}},255:function(e){e.exports={data:{allImageSharp:{edges:[{node:{fluid:{base64:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAGCAYAAADDl76dAAAACXBIWXMAAAsSAAALEgHS3X78AAABsElEQVQY0yWMS2/TQBRGzZIVa9as+C+sYcWGX4CEkFiAxBKpC1QQC15iVymotF2EljatqshqeQTaOg+Spk6bpLE9fsyMx2MHxZ7Rh5Ne6dM9956ra1DKlqXgZ2mOY1nAyqSwOOcWY9RKZGrFcbxgzpglElk6ZkWBb8VCLNz8tsxxzHmfMfbGCIi3tfPqEc5Wn4Huv8Tnp/cQM4qBdYij7Qra5hYu+204gy4O197hot1A98cuTva+IJgMMSs0ZJpiXuXDmkF5vLH+/C4OHlzLuw+v67f3b+vAJzp0x3rQauhh67sOR11NnYG+6DW1N7K1Nz7Xo9O2DoijReRqTqN8liXzh1+NiNINtXIH9uMbs86TmypeuqVY5CvZ21XTX+/VtPFByU5VyeaaylqrKj2pqLTxseR1JUsWnU0lD17n+fk+qMyrBo3Cb2iu4O/2JxzVKkjqy5hmEkVkI/eaKOwdFEEPhddC0d+EsmvIw1OoBZfu8idmvSog+mAi3TM8z33hsuyPz9N6wBLT5f9MQohJ/MAkATWJ55jEGZezb5JIlLvwyoXsKpNh2Xm99L89d7L0H/FFnboAqjsNAAAAAElFTkSuQmCC",aspectRatio:3.261627906976744,src:"/static/58e23f2ef6a928cbc50e86df2801fd2b/52460/2_pay_mm_off.png",srcSet:"/static/58e23f2ef6a928cbc50e86df2801fd2b/2b396/2_pay_mm_off.png 300w,\n/static/58e23f2ef6a928cbc50e86df2801fd2b/52460/2_pay_mm_off.png 561w",sizes:"(max-width: 561px) 100vw, 561px"}}},{node:{fluid:{base64:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAGCAYAAADDl76dAAAACXBIWXMAAAsSAAALEgHS3X78AAABmklEQVQY0yWQv28TMRzFj5GZnYF/gP+Blf+BAQmBGJFgYK3E1A2JAVEm1Ko/xFBRolOAhgpE1DSIRIG0lIgmtHc5c77cD9tn+4wfvpzlj96z3teSnz3O2IZiqbQA+QfQSmRUyZKWnDmVVApOS5Yvz7Wv4XlKZSmWc/WMg2gpy1KIbS9bJP7rldsYrd1FtPsYL+7fgLuAs2EXR3uvMOzsIpiMMT87xeetZ5iOejjuvsO39haS8A/qpZReqnvcB48L+fb96i0c3rlU/Xxw2a7fu255kVuREhtPT+zi98CKcGwlmdhFOLNFHFgWXzg/ta6M1WlgVU4rGAHBedsr8vwN1m9i/PCK6j+6aorVa6ZkmdGTfVMdPTe6v2bUpGPUSctUo22jBxtG9V+a6vuOUcNNI0/bRn55qjE7AK/ge4IV+5i63fPx6+sB1GAHTY8YKOdAdOi6nANsBsy77qf7gKaNj3pA8gMInLcEpdSfvDAMV0gmP9JMtJKs8KNc+4QQR+yTv4mD+iSKGk2YT+K0yWjeUGdJ0XJ5JwwunvwHOrqm1mwT32AAAAAASUVORK5CYII=",aspectRatio:3.261627906976744,src:"/static/4aed3957db1107506d9937c13f78ea9f/52460/2_pay_mm_over.png",srcSet:"/static/4aed3957db1107506d9937c13f78ea9f/2b396/2_pay_mm_over.png 300w,\n/static/4aed3957db1107506d9937c13f78ea9f/52460/2_pay_mm_over.png 561w",sizes:"(max-width: 561px) 100vw, 561px"}}},{node:{fluid:{base64:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAANCAIAAAAmMtkJAAAACXBIWXMAAAsSAAALEgHS3X78AAABDUlEQVQoz9WSO2+DMBSF+dcoIwMwMGQiC2JKFn4ICwNIoDCQkaeIMeEdCjU9kKqqoixVh6pnuLKP/fk+ZG75hbj/BjPGPuH3TWzTY4F43/S2LHfG5s3BzWEYpml6wHBW2HVd0zQNw7BtW9d1x3EQKaUlpUEU2pcLoTTLsq7rEPM8L8uyqipsV9iyLE3TeJ4/Ho+73U6W5f1+j7Pb7TZ0XUEIgCAIwjBEtnmePc9L03Qt2/d9VVUlSTocDqIoKooiCMLpdGqaJkkSJCFFEUXR9XoFj+dQEXxCSN/3HAo4n8+oZxxHvB3HMY6RCn5d1+gNnSPbo2HAbdvOm+BzPxrv87S/JvxST8B3E4u/+2Ef25LlBL7XGe4AAAAASUVORK5CYII=",aspectRatio:1.5,src:"/static/194d07ff6dfba4dab01b65eb2d860fbf/f5e17/jamstack.png",srcSet:"/static/194d07ff6dfba4dab01b65eb2d860fbf/cf635/jamstack.png 300w,\n/static/194d07ff6dfba4dab01b65eb2d860fbf/1cf3b/jamstack.png 600w,\n/static/194d07ff6dfba4dab01b65eb2d860fbf/f5e17/jamstack.png 900w",sizes:"(max-width: 900px) 100vw, 900px"}}},{node:{fluid:{base64:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsSAAALEgHS3X78AAACcklEQVQ4y4WUy27TQBSGj+3UtKEXiYsKoqKVukOtuu4bsEHs2CEW7JDgGYAHYMEzgFQVodaXuKlLIoTEZQEUe+ImNKUFISGxgS1KmpgzM2eacdwkI1kzvsw3/zn/8QHoG+PMF/MkKxmw+8Lg60LsPRmLvQfiRbRZWKiFYnmWlWDguJxsw4QO+7yuYI/g8FUKe6UUobcJai0mO2I5PQhapBdTfO4pk7DIaUPsptDYykCV0slB0GkWAKzKNcIeE+wYYV28OsDyUKU0A11sVGCmhrAvG0rZQzis6LCUruMcdHfduMC28ups5pt8PsP8ZUhKCtChuauBEeqJnOLBd6XSDWNKV3jvFwMzdi1SdwOa2ypvOghnR63/8XTgnoNrScUWIcca8GJSxlMcAbRi7z4cVfimthaqDmvxA43Y/VGM/QUSYWTj/bimAd2nwgwBdPT8yXC/7XDYTzRhnn+PKk0JdXu8lf3X3BCTPgj4JlKohYv5rAccVkfYHH1rkdtwTjdGOIzj1tEnEzdEsF+WajIh4/3XMs/b25uN9wKETlsEzgLRYYOKexaBv8nlTl+4eKFR0owPV2vhBOUvD0UjTAIvCzWR0805HKl8Oi2CvpuvheO6UoT3AWPvOnyv6iWTjoIuJVWboOZJyKopLNWrFrr8jKCt4VCsRTQPodEMC86LnyL2e+Wj3yD0+VAor0We52bIgQG6Ppth2BQ7PjBHQDsiHRgumvcXc3bnxFi9uHkvHBsObYu65KpkmJvYXK/I5vDSLFKVKGGjofxXPAi5qj+6KjykMLcneyI2FVhtvjml65wOXUNVIebqklJlq/f4l4heQOM/2DJOmiyS+CMAAAAASUVORK5CYII=",aspectRatio:1,src:"/static/df92c9e1288a52ff6ca98f596e56d31f/1ad9e/bulma.png",srcSet:"/static/df92c9e1288a52ff6ca98f596e56d31f/1ad9e/bulma.png 192w",sizes:"(max-width: 192px) 100vw, 192px"}}},{node:{fluid:{base64:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsTAAALEwEAmpwYAAAD5klEQVQ4y32UTWwbRRTHZ532Etuys8YmJAWkNEJCkCYgStr6M3ZaQqUIkCokBBIXqHovV0qDQEhFFHFohYCUYuzYiWsH6lKgzTekab7dpClQJOCGQKJw6K69O7PzeDu7dhyqstJo3szO/PT+838zhNif8fWT1ZCU082z6lBrzIyxd7DcTonm2iWxLttCyhcS5H8//tVjhJ5rk6y4S64k5XIl5f/GHFfONDZU19HcQ7U9bOMQYTeet2K73/Lp2RaH1e/o1FM+CsM+0IYfiJtzWn5Xk/blHpf4/1kbYWv9hE51SNr79t5RNzF+PbwJg4k40dP3iEz0TEs/nPMB5GTQ04EZITPTXMSWE2vPt26rT6Tylp3x2jN1ki90Ei3ptYHNr0FBBj7URGlK5pXhB9/jaY8CGS/Q/MNdNclLvUm23PuCiJf3N9wpOeWzgEOBQSj4ECibQGCnPUDPuimMeoBn/CMWLH4G/ugDthh/V5zt1eA29tNLdZLHI0Q7TYQpeto/DXkZjIzMtI+9XDnmNJRTbg5ZN9Ck57Y2G56EUg/AWg8Ce/ICeKlNYqWDm0CW32mVxMXdbjzLn2EEM0vLhnrCDepxF7/9thPUQRfXL3ciKA5sPqJDKWYCN4xbb0r2EdzpsDZ8fztN+RSelUH7CLMbcIE64ATluJOXi7uArcQ5whidjxqwFAW2EPuHrT/rF8DVpyXjtyMod+YgygxYJZNpjULOBzTVxDA7jiATBtoXAgZ0PiIaW4hytmD3K0/ttYw54MCxKGSifV415L7DpiGVD71MecMpgNpox39hAoQxhY0EoNQXLcmJTae1lF8MtPS9JyHvA/UdF1WONfJaZlc3YXVQHX40gYkBYczcvgZxY2A8RpRPtgvJlUygCJ96QHm9kWJm/G4w7FFylML1uFk6WQGc6ZJQPgaFdqt01KPb1bNyCU6gzEIHY6t3zcw+wyiDa6J0SkLdK+Ic8TVJBoTt5YutzcoHnj9Z4VFAmIEwbmeyBWbPmc2AZeH078YPh2Tr+vVLpDzUJuSqgzuegOnHwbAMoHUwbhvCt87hGWLpmHVJlw50C9lL+x2kMhGy3sDiXq82FzuFmRmwETezMXAjq5NYdZqJ7HANnYtQ7bvwSWUs7BGMqbD9oH67T6o6ro4Fu/B6FWE1Zl0vPHyEVOEU1vHarcRA+z6cVy4FH6ntmwxbjMrlPdbE+d3EWIzUaqk8GerTr0QWTSfF3UUDYD0O+mz4ijoRrD3ZxnKsATO0WDNY2H+NdBNlLEgAnrNAUyEH/NLrqL1306FXEXwT2w3893LtQbmZcKgTIbEO/u4j6niQ3Mp3k38Bfpf3cuyTmK4AAAAASUVORK5CYII=",aspectRatio:1,src:"/static/9ad79828751ede5dbe9f92f97237bdf2/452eb/firebase.png",srcSet:"/static/9ad79828751ede5dbe9f92f97237bdf2/4b488/firebase.png 300w,\n/static/9ad79828751ede5dbe9f92f97237bdf2/452eb/firebase.png 512w",sizes:"(max-width: 512px) 100vw, 512px"}}},{node:{fluid:{base64:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsSAAALEgHS3X78AAAC3ElEQVQ4y21VXWsTURDdlL5I8EX/QH/Dbj7sixDwP0hKSePDph9J2rR971tFxNKEFtnbaP2oCkbxt/gqEZq2luKjqCBJNus5c2fTTUlg2LlzZ86de2buxKm4gcOf7xqn4gUp6rClK65ZwrcD25nvmSHWkKCHdQfrpYpn0uqbwlowsOdYxTUpR38AXoB067l30db856iafRNVvCMR6rRxD8FdAC3EcQSOFScB1qpmX0fr+Q8M+IGAXdgK8JnDoXNYF7B+jPUlfegLWysBKiCpGGw9/z5aybygUzO+PvQ89h5hTclr4AyktZp5GW3wcOjqO86yyNMIBr2mtkXI+WrmOKrl3opQR6bnOGBRqVqGT59UwFZ0rgsQdPWkpp60R55WkAFsITIbIIAS0sY96E8gt7D/TQA98x1+aVamJCS7wRVkltnWcyfkUCoLxxECR6gqJKA+hC5Fgn657LXpK1kitkzuOqwcgnc0uyteDfa+DYzBROg3goTMXMGgm4HthuALMzwlP3BoK2BjLfuKQAQNE6AWDF8CWTmKLKh+wS8zHPBEbZUDrXh9DUXSK4ZJMOX0L+SPyi/4/Na9gSP8uHBwgxNt2OcxaDUJCtEqf73xEGYg933L95BXPNPAAvTy1vwnVuzwJigLpNf6Cfse5CmkCbmN/QfS5K7psZekKFg8U5DtzXsfp4AKpwJKzhvw4dWV910tbIcBJe2rCxjuKMimgLoWFHQop8JlH/Z/tk3MQw4Gto+2Xmnc2FqU/QQ3Aoq9Q82izuqTR/Ypm18nTJOxHCjS2GqUp2c5sk9P7dvkFLa4UA15APDX/Tqfq/Jnn178oDk1OBwUdB/XuatBZa3+QWKqzHKAEIwxFZ04gjUxvrzr8QX9goVi9dlSamtD32GWG1PHlxnzlUqAFsnpxIC1fRrWwF08YOHXja9ub2ImB6z8BbjJv4CgBCf8BZieb5/eAN9TX2xByZ/yF8Dvf7RRghHds25YAAAAAElFTkSuQmCC",aspectRatio:1,src:"/static/1eded29d7312bb86aafb391391d7d603/86722/gatsbyjs.png",srcSet:"/static/1eded29d7312bb86aafb391391d7d603/9ff6f/gatsbyjs.png 300w,\n/static/1eded29d7312bb86aafb391391d7d603/32839/gatsbyjs.png 600w,\n/static/1eded29d7312bb86aafb391391d7d603/86722/gatsbyjs.png 1200w",sizes:"(max-width: 1200px) 100vw, 1200px"}}},{node:{fluid:{base64:"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAANABQDASIAAhEBAxEB/8QAGAAAAwEBAAAAAAAAAAAAAAAAAAECAwX/xAAWAQEBAQAAAAAAAAAAAAAAAAAAAQL/2gAMAwEAAhADEAAAAePpKzaEH//EABkQAAMBAQEAAAAAAAAAAAAAAAABAhESQf/aAAgBAQABBQLBQVGPzTtn/8QAFBEBAAAAAAAAAAAAAAAAAAAAEP/aAAgBAwEBPwE//8QAFREBAQAAAAAAAAAAAAAAAAAAACH/2gAIAQIBAT8BV//EABYQAAMAAAAAAAAAAAAAAAAAAAAgMf/aAAgBAQAGPwJaf//EABsQAQEAAgMBAAAAAAAAAAAAAAEAESExQVGR/9oACAEBAAE/ITSVw9LMoC23lZibfs+q/9oADAMBAAIAAwAAABAfP//EABYRAAMAAAAAAAAAAAAAAAAAAAABEf/aAAgBAwEBPxBQiP/EABYRAQEBAAAAAAAAAAAAAAAAAAARAf/aAAgBAgEBPxC6p//EABwQAQEAAgIDAAAAAAAAAAAAAAERACExYUFRwf/aAAgBAQABPxC9I8/MWkgDjYe8HsAbnWJQ1d8ZaAp5IytnfW1z/9k=",aspectRatio:1.5,src:"/static/04a8347fee2fc26d4ceb167174fdd5e5/6a6af/kl-fireworks.jpeg",srcSet:"/static/04a8347fee2fc26d4ceb167174fdd5e5/f7e3e/kl-fireworks.jpeg 300w,\n/static/04a8347fee2fc26d4ceb167174fdd5e5/63d99/kl-fireworks.jpeg 600w,\n/static/04a8347fee2fc26d4ceb167174fdd5e5/6a6af/kl-fireworks.jpeg 900w",sizes:"(max-width: 900px) 100vw, 900px"}}},{node:{fluid:{base64:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsSAAALEgHS3X78AAACr0lEQVQ4y41VTWtTQRRNmmZpS3FTolBotrWreWnSf1LRlR+0EheuIqUuYn5BcFG0JoRqUWYQtKZJ6wd12/oT6vI9CEiFiqKC8jxn3p33XtIKBk7m495z7sydO/MymZGf72nbBkpnpS0GnnkdeLoLFMUnsonvsICKBWIHEnzP5GW+/avyJiQg3BZOHv1Y1PHiAFyNFVEmC8fx1Grn4XT0ZeFVSCDIEcbzzk5fchAAvGjVmbgzvO0JoAnbHvAWQodoD9iHCOYMbROjvERUmQtY5XNMPIHzbd+STQPAvNmHbRq2abT7WM1F2GmjTzXiWG4hUVam/XvxXfi13GWeBsCcpKIJNFJbbMC3KbuYg8jgBBxyXX7dUje+lXshAYFNmfMCbhUHkM4ZBA8wV5LxpuMhwEZqhXoSAh8iAVMQ5y4SflnsOYxzEmiJJSQ7K5DjW66elAOQ8vB0Ff01EVuCc0/6WVdSPFHx7QUSjBygKmnI0yiRTQ2GuhC4VU9qbiyVmrE4HUofimAd45r0c9FfpL7KVSLyDTi3IjFnM0nxqngBLesb7WxVAuX4Ny6k6+h34LQDzAg5j77Nn4XNpXYpmsF4B/MdcuMtS7QpHsJxCbdB6ZXMf/7AWTnGDbL3XOmp1M0wD39UdsOB94KCfWCZyQbhLrZdY34d/KhdY2BglxxyIfooXTatP4vv7X09WWBxo/IjAkUbEK0TUtj3IHoL2+t8Lr0EZzskF/OtdGGjnvQz4Cmcl0HcBu78a6vwuWYPxTNXwdmyXCVXz717I4/DeZAegPARzjfRrqNdx/wV9Pvo3wfOnZHTbPJ88RliEcupi/AljH1ere/lPu/rJ6B4+vli8SdimdGHkm8jHNwD+/hnZS8kXJ5sOaVe7aRGzVn50UNvG1YxG30CAGVmh22nPwF/Aai/Sa81LMDIAAAAAElFTkSuQmCC",aspectRatio:1,src:"/static/762edb84b0bf808c1746d10188ebf04a/86722/graphql.png",srcSet:"/static/762edb84b0bf808c1746d10188ebf04a/9ff6f/graphql.png 300w,\n/static/762edb84b0bf808c1746d10188ebf04a/32839/graphql.png 600w,\n/static/762edb84b0bf808c1746d10188ebf04a/86722/graphql.png 1200w,\n/static/762edb84b0bf808c1746d10188ebf04a/2fe98/graphql.png 1800w,\n/static/762edb84b0bf808c1746d10188ebf04a/baefc/graphql.png 2000w",sizes:"(max-width: 1200px) 100vw, 1200px"}}},{node:{fluid:{base64:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsSAAALEgHS3X78AAACKklEQVQ4y42V34tNURTH555Dfjwo0UiRvPNKo1CampLGPyDdc5ExNzNRiqFI5sGP1MzghYwoPxJFUiIpRHnA4wwvHiQ/MoMHNZeOz7p997XunnubOfVpr7P22uusvdba+7S06CmOTISxEHTZaMXeE2eTmM69F/zaSY+fQF5Uk0crKY5SN7c4dtrUGeMsuArP4C5sdDab4J7mzGZO0whRphp3wCXJ6+E57BNPYa3mrkDRr62Lzjk8Djuj+a/wLdJtg37lOq1FGZKMYqbGI9DtFu6Hc3AGDjp9F/RJnuF9xZXsUp72wmWYUC7vQEW6PfAISv8LJx/ZSCWRo6WK4iV8hEMwBh1WVdEO49rFB9la9MsUYRKiWgdvoRfmwwW4ZtvV/AAMSbbIb1jhYB7s1tr2Wu5UvZXRtn9LHiz/zPPyeJ47p7+iPK+AJzC3mlC9tDVxeKr8I8+7x6oOTzuHvc5+NTyG2UGxCl5bFZXLi0r+YVf5o5L7YFh9uAQOwBtYE45VKMpC9eAL+CL5O3Ra0mG5nRoV6gR8gldwElrruiVqm61wS+NQ9u6PbfUB3C+9/2vyWdiiNsr8xREinKqxd6k1BqHH6UtwzDd29bTo2Pmj129OomP2Wf3nd1K07Yajp6uublHIpW3nuj7Soebtge3K2WazlU2p4eUQXV920M/DQ7gNG5xNG9zU3HBok+lesK3u5k4zFwVzCxqtaRZh7dZgLDT4BSTu9zDpF/APawuLJ7GYA/kAAAAASUVORK5CYII=",aspectRatio:1,src:"/static/41349dd7ceac193c18a703b812e8c69b/86722/react.png",srcSet:"/static/41349dd7ceac193c18a703b812e8c69b/9ff6f/react.png 300w,\n/static/41349dd7ceac193c18a703b812e8c69b/32839/react.png 600w,\n/static/41349dd7ceac193c18a703b812e8c69b/86722/react.png 1200w,\n/static/41349dd7ceac193c18a703b812e8c69b/35324/react.png 1300w",sizes:"(max-width: 1200px) 100vw, 1200px"}}},{node:{fluid:{base64:"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAQABQDASIAAhEBAxEB/8QAGAAAAgMAAAAAAAAAAAAAAAAAAAUDBAb/xAAWAQEBAQAAAAAAAAAAAAAAAAADAQL/2gAMAwEAAhADEAAAAX9CVBldQLin/8QAHBAAAQMFAAAAAAAAAAAAAAAAAgEDEQAEEyNB/9oACAEBAAEFAqzQ6iyjxEIctXdP/8QAFxEAAwEAAAAAAAAAAAAAAAAAAAECEf/aAAgBAwEBPwGI0axn/8QAFREBAQAAAAAAAAAAAAAAAAAAARD/2gAIAQIBAT8BZ//EABoQAAMAAwEAAAAAAAAAAAAAAAABEQIQIRL/2gAIAQEABj8COteSocxqmo7w/8QAGBABAQEBAQAAAAAAAAAAAAAAAREAIWH/2gAIAQEAAT8hzydWXACUc0+Q3KVkOYIBVOG//9oADAMBAAIAAwAAABD7P//EABURAQEAAAAAAAAAAAAAAAAAAAEA/9oACAEDAQE/ECKrOhf/xAAWEQEBAQAAAAAAAAAAAAAAAAABABH/2gAIAQIBAT8QWQ3/xAAbEAEBAAMAAwAAAAAAAAAAAAABEQAhMUFhwf/aAAgBAQABPxDmR6BbCSajgYBURomPJsNtlJZ6xT44h1cJQmFEnfuf/9k=",aspectRatio:1.2288,src:"/static/f6b8cc203cd7335f4530413a55956bc5/5b9d4/frontend.jpg",srcSet:"/static/f6b8cc203cd7335f4530413a55956bc5/17945/frontend.jpg 300w,\n/static/f6b8cc203cd7335f4530413a55956bc5/5b50e/frontend.jpg 600w,\n/static/f6b8cc203cd7335f4530413a55956bc5/5b9d4/frontend.jpg 768w",sizes:"(max-width: 768px) 100vw, 768px"}}}]}}}},266:function(e){e.exports={data:{site:{siteMetadata:{title:"Eddayy",description:"My name's Edmund Tay, a developer from Malaysia",author:"Edmund Tay"}}}}}}]);
//# sourceMappingURL=1-391caf6778144b0be2e1.js.map