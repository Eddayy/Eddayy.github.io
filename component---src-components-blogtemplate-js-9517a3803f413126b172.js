(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{135:function(e,t,a){"use strict";a.r(t);a(37);var n=a(0),s=a.n(n),i=a(169),r=a(158),o=a(6),c=a.n(o),l=a(172),m=a(199),u=a.n(m),d={apiKey:"AIzaSyAvad8R_JYBxSm2xeJ7GCsHQyjRowS2_CY",authDomain:"eddayywebsite.firebaseapp.com",projectId:"eddayywebsite"},h=new function(){u.a.initializeApp(d),this.store=u.a.firestore(),this.store.settings({timestampsInSnapshots:!0}),this.auth=u.a.auth},p=function(e){function t(){for(var t,a=arguments.length,n=new Array(a),s=0;s<a;s++)n[s]=arguments[s];return(t=e.call.apply(e,[this].concat(n))||this).state={comments:[],likes:0,active:!1,path:"/"},t.toggleComment=function(){t.setState({active:!t.state.active}),t.getComment(t.state.path)},t.getComment=function(){var e=h.store;e.collection("Blogs").doc(t.state.path).get().then(function(a){a.exists?t.setState(function(e){return{comments:a.data().comments}}):e.collection("Blogs").doc(t.state.path).set({likes:0,comments:[]}).catch(function(e){console.error("Error adding document: ",e)})}).catch(function(e){console.log("Error getting document:",e)})},t.postComment=function(e,a,n){var s=h.store.collection("Blogs").doc(t.state.path),i={Name:e,Text:a,Posted:(new Date).getTime(),PictureUrl:n};s.update({comments:u.a.firestore.FieldValue.arrayUnion(i)}).then(function(){t.setState(function(e){return{active:!0,comments:e.comments.concat([i])}})}).catch(function(e){console.error("Error adding document: ",e)})},t}return c()(t,e),t}(l.a),g=a(288),f=a.n(g),E=function(e){var t=e.comments;return t.length>0?t.slice().reverse().map(function(e){var t=e.Name,a=e.Posted,n=e.PictureUrl,i=e.Text;return s.a.createElement("div",{key:a,className:"columns is-12 is-mobile is-gapless"},s.a.createElement("div",{className:"column has-text-centered is-1-tablet is-2-mobile is-horizontal-center"},s.a.createElement("figure",{className:"image is-32x32"},s.a.createElement("img",{className:"is-rounded",src:n,alt:"Profile Pic"}))),s.a.createElement("div",{className:"column"},s.a.createElement("div",{className:""},s.a.createElement("div",{className:"has-text-left"},t,"  ",s.a.createElement("span",{className:"subtitle has-text-grey is-size-6"},"posted"," ",f.a.unix(Math.round(a/1e3),"YYYYMMDDHHMMSS").fromNow()))),s.a.createElement("div",{className:"has-text-left"},i)))}):s.a.createElement("div",{className:"has-text-grey"},"No comments found. Be the first!")},v=(a(71),a(52),a(4)),N=a.n(v),b=function(e){var t=e.onClick,a=(e.icon,e.text);return s.a.createElement("button",{onClick:t},s.a.createElement("span",null,a))};b.propTypes={onClick:N.a.func.isRequired,text:N.a.string.isRequired};var y=b,x=(a(28),a(35),{uid:"",isAnonymous:null,displayName:"Anonymous User",photoURL:"/defaultpic.jpg"}),S=function(e){function t(){for(var t,a=arguments.length,n=new Array(a),s=0;s<a;s++)n[s]=arguments[s];return(t=e.call.apply(e,[this].concat(n))||this).state=x,t.handleSignIn=function(e){var t=h.auth;switch(e){case"google":return t().signInWithPopup((new t.GoogleAuthProvider).addScope("https://www.googleapis.com/auth/plus.login")).then(function(e){}).catch(function(e){return console.error(e),e});case"anonymous":return t().signInAnonymously().catch(function(e){return console.error(e),e});default:var a="Invalid provider passed to signIn method";return console.error(a),Promise.reject(a)}},t.handleSignOut=function(){return(0,h.auth)().signOut()},t}c()(t,e);var a=t.prototype;return a.componentDidMount=function(){var e=this,t=h.auth;this.stopAuthListener=t().onAuthStateChanged(function(t){t?e.signIn(t):e.signOut()})},a.componentWillUnmount=function(){this.stopAuthListener()},a.signIn=function(e){var t=e.uid,a=e.isAnonymous,n=e.displayName,s=e.photoURL;this.setState({uid:t,isAnonymous:a,displayName:n,photoURL:s})},a.signOut=function(){this.setState(x)},a.render=function(){var e=!(!this.state.uid||this.state.isAnonymous);return this.props.children(Object.assign({},this.state,{signIn:this.handleSignIn,signOut:this.handleSignOut,isAuthed:e}))},t}(s.a.Component);S.propTypes={children:N.a.func.isRequired},S.contextTypes={firebase:N.a.object};var w=S,A=a(350),C=a(351),k=function(){return s.a.createElement(l.c,{to:[p]},function(e){return s.a.createElement(w,null,function(t){return t.isAuthed?s.a.createElement("div",{className:"columns is-12 is-mobile is-gapless"},s.a.createElement("div",{className:"column has-text-centered is-1-tablet is-2-mobile is-horizontal-center"},s.a.createElement("figure",{className:"image is-32x32"},s.a.createElement("img",{className:"is-rounded",src:t.photoURL,alt:"Profile Pic"}))),s.a.createElement("div",{className:"column"},s.a.createElement(A.a,{initialValues:{post:"",recaptcha:!1},validate:function(e){var t={};return e.post?e.post.length>500&&(t.post="Maximum Length 500",e.recaptcha=!1):(t.post="Please enter text",e.recaptcha=!1),t},onSubmit:function(e,t){var a=t.setSubmitting;if(!1===e.recaptcha)return e.recaptcha=!0,void a(!1);a(!1)}},function(a){var n=a.values,i=a.errors,r=a.touched,o=a.handleChange,c=a.handleSubmit,l=a.isSubmitting;return s.a.createElement("form",{onSubmit:c},s.a.createElement("div",{className:"field"},s.a.createElement("div",{className:"control"},s.a.createElement("textarea",{className:"textarea",name:"post",rows:"2",onChange:o,placeholder:"Tell me what are you thinking",value:n.post||""}))),s.a.createElement("div",{className:"control has-text-danger",style:{position:"absolute"}},i.post&&r.post&&i.post,n.recaptcha&&"Please enter captcha"),s.a.createElement("div",{className:"field is-grouped is-grouped-right"},s.a.createElement("div",{className:"control"},s.a.createElement("button",{type:"button",className:"button",onClick:t.signOut},"Sign out")),s.a.createElement("div",{className:"control"},s.a.createElement("button",{className:"button is-link",type:"submit",disabled:l},"Post"))),n.recaptcha&&s.a.createElement("div",{className:"field is-grouped is-grouped-centered"},s.a.createElement("div",{className:"control"},s.a.createElement(C.a,{sitekey:"6Le8QooUAAAAAKEE3Ot7Dg1uajCl_qffzgsgAXfv",onChange:function(){e.postComment(t.displayName,n.post,t.photoURL),n.post="",n.recaptcha=!1}}))))}))):s.a.createElement("div",{className:"field"},"Please login to post a comment",s.a.createElement("br",null),s.a.createElement(y,{onClick:function(){return t.isAuthed?t.signOut():t.signIn("google")},text:t.isAuthed?"Sign Out":"Sign in with Google"}))})})},P=function(e){function t(t){var a;return(a=e.call(this,t)||this).PostContainer=new p,a}return c()(t,e),t.prototype.render=function(){return this.PostContainer.setState({path:this.props.path}),s.a.createElement(l.b,{inject:[this.PostContainer]},s.a.createElement(l.c,{to:[this.PostContainer]},function(e){return s.a.createElement("div",{className:"has-text-centered"},s.a.createElement("div",{className:"label"},"Responses"),e.state.active?s.a.createElement("div",null,s.a.createElement(k,null),s.a.createElement(E,{comments:e.state.comments})):s.a.createElement("button",{className:"button",onClick:e.toggleComment},"Load comments"))}))},t}(s.a.Component),I=(a(154),a(294)),R=a.n(I),L=a(355),O=a(356),U=a(357),z=a(358),j=a(359),T=a(360),M=a(361),D=a(362);a.d(t,"query",function(){return Y});var Y="3284102470";t.default=function(e){var t=e.data.markdownRemark,a=t.frontmatter.title,n=t.html,o=t.frontmatter.date,c=t.frontmatter.path,l=t.excerpt,m=t.timeToRead,u=t.frontmatter.tags;return s.a.createElement(i.a,null,s.a.createElement(r.a,{title:R.a.basename(c).replace(/-/g," "),keywords:["gatsby","application","react","bulma","github"],description:l}),s.a.createElement("section",{className:"hero"},s.a.createElement("div",{className:"container hero-body"},s.a.createElement("div",{className:"columns is-centered"},s.a.createElement("div",{className:"is-half-desktop is-three-fifths-tablet column"},s.a.createElement("p",{className:"title"},a),o&&s.a.createElement("div",{className:"subtitle columns is-6 is-multiline"},s.a.createElement("div",null,s.a.createElement("span",{className:"icon is-medium has-text-danger"},s.a.createElement("i",{className:"fa fa-calendar"})),o,s.a.createElement("span",{className:"icon is-medium has-text-primary"},s.a.createElement("i",{className:"fa fa-book"})),m," min"),s.a.createElement("div",null,s.a.createElement("span",{className:"icon is-medium has-text-success"},s.a.createElement("i",{className:"fa fa-tags"})),u.map(function(e){return s.a.createElement("span",{key:e,className:"blogtag is-light tag"},e)}))),s.a.createElement("div",{className:"blogpost has-text-justified",dangerouslySetInnerHTML:{__html:n}}),"/blog"===R.a.dirname(c)&&s.a.createElement(P,{path:R.a.basename(c)}))))),s.a.createElement("section",{className:"hero"},s.a.createElement("div",{className:"container hero-body"},s.a.createElement("div",{className:"columns is-centered"},s.a.createElement("div",{className:"navbar-brand"},s.a.createElement(L.a,{className:"navbar-item","aria-hidden":"true",url:"https://eddayy.github.io"+c,children:s.a.createElement(O.a,{size:32,round:!0})}),s.a.createElement(U.a,{className:"navbar-item","aria-hidden":"true",url:"https://eddayy.github.io"+c,children:s.a.createElement(z.a,{size:32,round:!0})}),s.a.createElement(j.a,{className:"navbar-item","aria-hidden":"true",url:"https://eddayy.github.io"+c,children:s.a.createElement(T.a,{size:32,round:!0})}),s.a.createElement(M.a,{className:"navbar-item","aria-hidden":"true",url:"https://eddayy.github.io"+c,children:s.a.createElement(D.a,{size:32,round:!0})}))))))}}}]);
//# sourceMappingURL=component---src-components-blogtemplate-js-9517a3803f413126b172.js.map