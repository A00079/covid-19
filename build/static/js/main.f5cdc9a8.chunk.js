(this["webpackJsonpcovid-19"]=this["webpackJsonpcovid-19"]||[]).push([[0],{55:function(e,t,a){e.exports=a(69)},60:function(e,t,a){},61:function(e,t,a){},62:function(e,t,a){},69:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(6),i=a.n(l),c=(a(60),a(61),a(21)),o=a(7),m=a(102),s=a(107),d=a(108),p=a(105),u=a(104),h=a(106),f=a(110),E=a(109),g=a(36),v=a.n(g),b=a(37),x=a.n(b),C=a(45),N=a.n(C),y=a(103),O=a(42),T=a(43),_=a(50),j=a(49),F=(a(62),a(44)),w=a.n(F),k=a(99),B=function(e){Object(_.a)(a,e);var t=Object(j.a)(a);function a(e){var n;return Object(O.a)(this,a),(n=t.call(this,e)).state={dynamicClassname:"extraCls",sliderLog:""},n}return Object(T.a)(a,[{key:"componentDidMount",value:function(){this.autoSlideCards()}},{key:"autoSlideCards",value:function(){this.state.sliderLog=setInterval((function(){document.getElementsByClassName("flickity-button flickity-prev-next-button next")[0].disabled?document.querySelector("#root > div > div > div.MuiGrid-root.makeStyles-ThirdGridRow-242.MuiGrid-container > div > div > ol > li:nth-child(1)").click():document.querySelector("#root > div > div > div.MuiGrid-root.makeStyles-ThirdGridRow-242.MuiGrid-container > div > div > button.flickity-button.flickity-prev-next-button.next").click()}),2e3)}},{key:"handleflipCard",value:function(e){var t=this;clearInterval(this.state.sliderLog),setInterval((function(){t.autoSlideCards()}),2e4);var a=w()("."+e),n=!1;if(n)return!1;n=!0,a.toggleClass("is-switched"),window.setTimeout((function(){a.children().children().toggleClass("is-active"),n=!1}),250)}},{key:"render",value:function(){var e={boxShadow:"0 10px 20px rgba(10,10,10,0.40)"};return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"gallery js-flickity","data-flickity-options":'{ "freeScroll": true }'},r.a.createElement("div",{title:"Click For More Detalis",className:"gallery-cell js-card "+this.state.dynamicClassname,onClick:this.handleflipCard.bind(this,this.state.dynamicClassname)},r.a.createElement(k.a,{variant:"outlined",style:e},r.a.createElement("div",{className:"card__wrapper"},r.a.createElement("div",{className:"card__side is-active"},r.a.createElement("h1",null,"FRONT"),r.a.createElement("h1",null,"FRONT"),r.a.createElement("h1",null,"FRONT")),r.a.createElement("div",{className:"card__side card__side--back"},r.a.createElement("h2",null,"BACK"),r.a.createElement("h2",null,"BACK"),r.a.createElement("h2",null,"BACK"),r.a.createElement("h2",null,"BACK"),r.a.createElement("h2",null,"BACK"),r.a.createElement("h2",null,"BACK"))))),r.a.createElement("div",{className:"gallery-cell js-card",onClick:this.handleflipCard.bind(this)},r.a.createElement(k.a,{variant:"outlined",style:e},r.a.createElement("div",{className:"card__wrapper"},r.a.createElement("div",{className:"card__side is-active"},r.a.createElement("h1",null,"FRONT"),r.a.createElement("h1",null,"FRONT"),r.a.createElement("h1",null,"FRONT")),r.a.createElement("div",{className:"card__side card__side--back"},r.a.createElement("h2",null,"BACK"),r.a.createElement("h2",null,"BACK"),r.a.createElement("h2",null,"BACK"),r.a.createElement("h2",null,"BACK"),r.a.createElement("h2",null,"BACK"),r.a.createElement("h2",null,"BACK"))))),r.a.createElement("div",{className:"gallery-cell js-card",onClick:this.handleflipCard.bind(this)},r.a.createElement(k.a,{variant:"outlined",style:e},r.a.createElement("div",{className:"card__wrapper"},r.a.createElement("div",{className:"card__side is-active"},r.a.createElement("h1",null,"FRONT"),r.a.createElement("h1",null,"FRONT"),r.a.createElement("h1",null,"FRONT")),r.a.createElement("div",{className:"card__side card__side--back"},r.a.createElement("h2",null,"BACK"),r.a.createElement("h2",null,"BACK"),r.a.createElement("h2",null,"BACK"),r.a.createElement("h2",null,"BACK"),r.a.createElement("h2",null,"BACK"),r.a.createElement("h2",null,"BACK"))))),r.a.createElement("div",{className:"gallery-cell js-card",onClick:this.handleflipCard.bind(this)},r.a.createElement(k.a,{variant:"outlined",style:e},r.a.createElement("div",{className:"card__wrapper"},r.a.createElement("div",{className:"card__side is-active"},r.a.createElement("h1",null,"FRONT"),r.a.createElement("h1",null,"FRONT"),r.a.createElement("h1",null,"FRONT")),r.a.createElement("div",{className:"card__side card__side--back"},r.a.createElement("h2",null,"BACK"),r.a.createElement("h2",null,"BACK"),r.a.createElement("h2",null,"BACK"),r.a.createElement("h2",null,"BACK"),r.a.createElement("h2",null,"BACK"),r.a.createElement("h2",null,"BACK"))))),r.a.createElement("div",{className:"gallery-cell js-card",onClick:this.handleflipCard.bind(this)},r.a.createElement(k.a,{variant:"outlined",style:e},r.a.createElement("div",{className:"card__wrapper"},r.a.createElement("div",{className:"card__side is-active"},r.a.createElement("h1",null,"FRONT"),r.a.createElement("h1",null,"FRONT"),r.a.createElement("h1",null,"FRONT")),r.a.createElement("div",{className:"card__side card__side--back"},r.a.createElement("h2",null,"BACK"),r.a.createElement("h2",null,"BACK"),r.a.createElement("h2",null,"BACK"),r.a.createElement("h2",null,"BACK"),r.a.createElement("h2",null,"BACK"),r.a.createElement("h2",null,"BACK")))))))}}]),a}(n.Component),S=Object(m.a)((function(e){var t,a,n,r;return{root:{flexGrow:1},confirm:{color:"rgba(255,7,58,.6)",fontFamily:"archia",fontWeight:"900",textTransform:"uppercase",fontSize:"12px !important"},confirmChild1:{textAlign:"center",alignItem:"center",justifyContent:"center",marginTop:".5rem",color:"rgba(255,7,58,.6)",fontFamily:"archia",fontWeight:900,fontSize:"12px !important",textTransform:"uppercase"},confirmChild2:(t={color:"#ff073a",fontWeight:"600",textAlign:"center",fontFamily:"archia",fontSize:"24px !important"},Object(o.a)(t,"fontWeight","900"),Object(o.a)(t,"textTransform","uppercase"),t),active:{color:"rgba(0,123,255,.6)",fontFamily:"archia",fontWeight:"900",textTransform:"uppercase",fontSize:"12px !important"},activeChild1:{textAlign:"center",alignItem:"center",justifyContent:"center",marginTop:".5rem",color:"#ffffff",fontFamily:"archia",fontWeight:900,fontSize:"12px !important",textTransform:"uppercase"},activeChild2:(a={color:"#007bff",fontWeight:"600",textAlign:"center",fontFamily:"archia",fontSize:"24px !important"},Object(o.a)(a,"fontWeight","900"),Object(o.a)(a,"textTransform","uppercase"),a),recovered:{color:"rgba(40,167,69,.6)",fontFamily:"archia",fontWeight:"900",textTransform:"uppercase",fontSize:"12px !important"},recoveredChild1:{textAlign:"center",alignItem:"center",justifyContent:"center",marginTop:".5rem",color:"rgba(40,167,69,.6)",fontFamily:"archia",fontWeight:900,fontSize:"12px !important",textTransform:"uppercase"},recoveredChild2:(n={color:"#28a745",fontWeight:"600",textAlign:"center",fontFamily:"archia",fontSize:"24px !important"},Object(o.a)(n,"fontWeight","900"),Object(o.a)(n,"textTransform","uppercase"),n),deceased:{color:"rgba(108,117,125,.6)",fontFamily:"archia",fontWeight:"900",textTransform:"uppercase",fontSize:"12px !important"},deceasedChild1:{textAlign:"center",alignItem:"center",justifyContent:"center",marginTop:".5rem",color:"rgba(108,117,125,.6)",fontFamily:"archia",fontWeight:900,fontSize:"12px !important",textTransform:"uppercase"},deceasedChild2:(r={color:"#6c757d",fontWeight:"600",textAlign:"center",fontFamily:"archia",fontSize:"24px !important"},Object(o.a)(r,"fontWeight","900"),Object(o.a)(r,"textTransform","uppercase"),r),FirstGridRow:{marginTop:"40px !important"},SecondGridRow:{marginTop:"70px !important"},ThirdGridRow:{marginTop:"70px !important"},FourthGridRow:{marginTop:"55px !important"},statewisedata:Object(o.a)({marginRight:"40px",textAlign:"center",fontFamily:"archia !important",fontWeight:"900",fontSize:"24px !important",textTransform:"uppercase",color:"#343a40"},e.breakpoints.up("xs"),{marginTop:"20px"}),statechild:{color:"rgba(108,117,125,.6)",fontSize:"12px !important",fontFamily:"archia",fontWeight:"900",textTransform:"uppercase",marginLeft:"37px"}}})),A=function(){var e=S(),t=Object(n.useState)([]),a=Object(c.a)(t,2),l=a[0],i=a[1];return Object(n.useEffect)((function(){fetch("https://api.covid19india.org/data.json").then((function(e){return e.json()})).then((function(e){return i(e.statewise[0])}))}),[]),r.a.createElement(r.a.Fragment,null,r.a.createElement(y.a,{container:!0,justify:"space-evenly",alignItems:"center",className:e.FirstGridRow},r.a.createElement(y.a,{item:!0},r.a.createElement(u.a,{variant:"subtitle1",className:e.confirm,gutterBottom:!0},"Confirmed"),r.a.createElement("div",null,r.a.createElement(u.a,{variant:"subtitle1",className:e.confirmChild1,gutterBottom:!0},"[+"+l.deltaconfirmed+"]")),r.a.createElement("div",null,r.a.createElement(u.a,{variant:"subtitle1",className:e.confirmChild2,gutterBottom:!0},l.confirmed))),r.a.createElement(y.a,{item:!0},r.a.createElement(u.a,{variant:"subtitle1",className:e.active,gutterBottom:!0},"Active"),r.a.createElement("div",null,r.a.createElement(u.a,{variant:"subtitle1",className:e.activeChild1,gutterBottom:!0},"0")),r.a.createElement("div",null,r.a.createElement(u.a,{variant:"subtitle1",className:e.activeChild2,gutterBottom:!0},l.active)))),r.a.createElement(y.a,{container:!0,justify:"space-evenly",alignItems:"center",className:e.SecondGridRow},r.a.createElement(y.a,{item:!0},r.a.createElement(u.a,{variant:"subtitle1",className:e.recovered,gutterBottom:!0},"Recovered"),r.a.createElement("div",null,r.a.createElement(u.a,{variant:"subtitle1",className:e.recoveredChild1,gutterBottom:!0},"[+"+l.deltarecovered+"]")),r.a.createElement("div",null,r.a.createElement(u.a,{variant:"subtitle1",className:e.recoveredChild2,gutterBottom:!0},l.recovered))),r.a.createElement(y.a,{item:!0},r.a.createElement(u.a,{variant:"subtitle1",className:e.deceased,gutterBottom:!0},"Deceased"),r.a.createElement("div",null,r.a.createElement(u.a,{variant:"subtitle1",className:e.deceasedChild1,gutterBottom:!0},"[+"+l.deltadeaths+"]")),r.a.createElement("div",null,r.a.createElement(u.a,{variant:"subtitle1",className:e.deceasedChild2,gutterBottom:!0},l.deaths)))),r.a.createElement(y.a,{container:!0,className:e.FourthGridRow},r.a.createElement(y.a,{item:!0,xs:12,sm:12,md:8,lg:12,xl:12},r.a.createElement(u.a,{variant:"subtitle1",className:e.statewisedata,gutterBottom:!0},r.a.createElement("div",null,"State Wise Data"),r.a.createElement("div",{className:e.statechild},"COMPILED FROM STATE GOVT. NUMBERS")))),r.a.createElement(y.a,{container:!0,className:e.ThirdGridRow},r.a.createElement(y.a,{item:!0,xs:12,sm:12,md:12,lg:12,xl:12},r.a.createElement(B,null))))},R=Object(m.a)((function(e){var t,a,n;return{appUpdateDiv:{alignItems:"center",justifyContent:"center"},appUpdateFont1:Object(o.a)({fontFamily:"archia !important",fontWeight:"900",textTransform:"uppercase",color:"#343a40"},e.breakpoints.up("xs"),{marginTop:"20px"}),appUpdateFont2:{fontFamily:"archia !important",fontWeight:"600",fontSize:"11px!important",textTransform:"uppercase",color:"#6c757d"},appUpdateFont3:(t={fontFamily:"archia !important",color:"rgb(40, 167, 69) !important",fontWeight:"600",fontSize:"11px!important",textTransform:"uppercase"},Object(o.a)(t,e.breakpoints.up("md"),{marginLeft:"90px !important",marginTop:"40px !important"}),Object(o.a)(t,e.breakpoints.up("xs"),{marginTop:"20px",marginLeft:"50px"}),t),appUpdateFont4:(a={fontFamily:"archia !important",color:"rgb(40, 167, 69)",fontWeight:"600",textTransform:"uppercase",fontSize:"11px!important"},Object(o.a)(a,e.breakpoints.up("md"),{marginLeft:"48px !important"}),Object(o.a)(a,e.breakpoints.up("xs"),{marginLeft:"8px"}),a),appUpdateFont5:(n={fontFamily:"archia !important",color:"rgb(40, 167, 69)",fontWeight:"600",textTransform:"uppercase",fontSize:"11px!important"},Object(o.a)(n,e.breakpoints.up("md"),{marginLeft:"78px !important"}),Object(o.a)(n,e.breakpoints.up("xs"),{marginLeft:"40px"}),n)}})),K=function(){var e=R();return r.a.createElement(r.a.Fragment,null,r.a.createElement(y.a,{container:!0,className:e.appUpdateDiv},r.a.createElement(y.a,{item:!0,xs:7,sm:6,md:4,lg:6,xl:6},r.a.createElement(u.a,{variant:"h5",className:e.appUpdateFont1},"India COVID-19 Tracker"),r.a.createElement(u.a,{variant:"h6",className:e.appUpdateFont2},"A Crowdsourced Initiative")),r.a.createElement(y.a,{item:!0,xs:4,sm:6,md:3,lg:6,xl:6},r.a.createElement(u.a,{variant:"h5",className:e.appUpdateFont3},"Last Updated"),r.a.createElement(u.a,{variant:"h6",className:e.appUpdateFont4},"about 16 hours Ago"),r.a.createElement(u.a,{variant:"h6",className:e.appUpdateFont5},"11 Apr, 00:20 IST"))),r.a.createElement(A,null))},W=Object(m.a)((function(e){return{banner_parent:{background:"rgba(32,26,162,.12549)",height:"auto !important",marginTop:e.spacing(3)},banner:{textAlign:"center",margin:e.spacing(3)},banner_text:{fontFamily:"archia !important",fontSize:".8rem !important",fontWeight:"600",color:"rgba(32,26,162,.866667)"}}})),M=function(e){var t=W(),a=Object(n.useState)("Stay Home, Stay Safe."),l=Object(c.a)(a,2),i=l[0],o=l[1];Object(n.useEffect)((function(){setInterval((function(){fetch("https://api.covid19india.org/website_data.json").then((function(e){return e.json()})).then((function(e){var t=Math.abs(Math.floor(Math.random()*(1-e.factoids.length)+1));o(e.factoids[t].banner)}))}),4e3)}),[]);return r.a.createElement(r.a.Fragment,null,r.a.createElement(y.a,{container:!0,className:t.banner_parent,onClick:function(){fetch("https://api.covid19india.org/website_data.json").then((function(e){return e.json()})).then((function(e){var t=Math.abs(Math.floor(Math.random()*(1-e.factoids.length)+1));o(e.factoids[t].banner)}))}},r.a.createElement(y.a,{item:!0,xs:12,sm:12,md:12,lg:12,xl:12,className:t.banner},r.a.createElement(u.a,{className:t.banner_text},i))),r.a.createElement(K,null))},z=Object(m.a)((function(e){var t;return{navbar:{boxShadow:"1px 0px 1px black !important"},grow:{flexGrow:1},title:(t={fontFamily:"archia !important",display:"block"},Object(o.a)(t,e.breakpoints.up("sm"),{display:"block"}),Object(o.a)(t,"color",e.palette.text.inherit),t),sectionDesktop:Object(o.a)({display:"none"},e.breakpoints.up("md"),{display:"flex"}),sectionMobile:Object(o.a)({display:"flex"},e.breakpoints.up("md"),{display:"none"})}})),I=function(){var e=z(),t=r.a.useState(null),a=Object(c.a)(t,2),n=a[0],l=a[1],i=Boolean(n),o=r.a.createElement(E.a,{anchorEl:n,anchorOrigin:{vertical:"top",horizontal:"right"},id:"primary-search-account-menu-mobile",keepMounted:!0,transformOrigin:{vertical:"top",horizontal:"right"},open:i,onClose:function(){l(null)}},r.a.createElement(f.a,null,r.a.createElement(p.a,{"aria-label":"show 4 new mails",color:"inherit"},r.a.createElement(h.a,{badgeContent:4,color:"secondary"},r.a.createElement(v.a,null))),r.a.createElement("p",null,"Messages")),r.a.createElement(f.a,null,r.a.createElement(p.a,{"aria-label":"show 11 new notifications",color:"inherit"},r.a.createElement(h.a,{badgeContent:11,color:"secondary"},r.a.createElement(x.a,null))),r.a.createElement("p",null,"Notifications")));return r.a.createElement("div",{className:e.grow},r.a.createElement(s.a,{position:"static",color:"inherit",className:e.navbar},r.a.createElement(d.a,null,r.a.createElement(u.a,{className:e.title,variant:"h6",noWrap:!0},"Covid-19"),r.a.createElement("div",{className:e.grow}),r.a.createElement("div",{className:e.sectionDesktop},r.a.createElement(p.a,{"aria-label":"show 4 new mails",color:"inherit"},r.a.createElement(h.a,{badgeContent:4,color:"secondary"},r.a.createElement(v.a,null))),r.a.createElement(p.a,{"aria-label":"show 17 new notifications",color:"inherit"},r.a.createElement(h.a,{badgeContent:17,color:"secondary"},r.a.createElement(x.a,null)))),r.a.createElement("div",{className:e.sectionMobile},r.a.createElement(p.a,{"aria-label":"show more","aria-controls":"primary-search-account-menu-mobile","aria-haspopup":"true",onClick:function(e){l(e.currentTarget)},color:"inherit"},r.a.createElement(N.a,null))))),r.a.createElement(M,null),o)};var G=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(I,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var U=a(48),D=a(14),L=a(47),V=Object(D.c)({}),X=[L.a],P=Object(D.e)(V,{},Object(D.d)(D.a.apply(void 0,X),window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__()||D.d));i.a.render(r.a.createElement(U.a,{store:P},r.a.createElement(r.a.StrictMode,null,r.a.createElement(G,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[55,1,2]]]);
//# sourceMappingURL=main.f5cdc9a8.chunk.js.map