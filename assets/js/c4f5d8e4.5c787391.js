(self.webpackChunkwerenode_portal=self.webpackChunkwerenode_portal||[]).push([[195],{8845:function(e,t,n){"use strict";n.d(t,{Z:function(){return o}});var r=n(2122),i=n(7294),a=n(1757),l=n(5485),m=n(2977);function o(e,t={}){const n=(0,a.Z)(),o=(0,l.Z)({name:"MuiUseMediaQuery",props:{},theme:n});let s="function"==typeof e?e(n):e;s=s.replace(/^@media( ?)/m,"");const c="undefined"!=typeof window&&void 0!==window.matchMedia,{defaultMatches:g=!1,matchMedia:p=(c?window.matchMedia:null),noSsr:u=!1,ssrMatchMedia:d=null}=(0,r.Z)({},o,t),[x,h]=i.useState((()=>u&&c?p(s).matches:d?d(s).matches:g));return(0,m.Z)((()=>{let e=!0;if(!c)return;const t=p(s),n=()=>{e&&h(t.matches)};return n(),t.addListener(n),()=>{e=!1,t.removeListener(n)}}),[s,p,c]),x}},9454:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return O}});var r=n(7294),i=n(6016),a=n(6742),l=n(2263),m=n(9586),o=n(7272),s=n(5168),c=n(4996),g=n.p+"assets/images/shutterstock_1859956345-04726de257f1c21c987f626068b48e20.jpeg",p=n.p+"assets/images/home_bg1-1fcafc8649672fe5a6dba037cff7e24c.jpeg",u=n.p+"assets/images/shutterstock_1436226374-a719234e5870f60d5fa7830b43343426.jpeg",d=n(1954),x=n(4662),h=n(6505),f=n(330),y=n(8845),E={taglines:{header:"This is the very important portals header tagline",mobile:"This is the very important mobile app tagline",evsemanager:"This is the very important evse manager app tagline",invest:"Invest in the future of EV"},buttons:{invest:"join the community",evsemanager:"open app"},team:[{key:"Beno\xeet Ma\xefsseu",title:"CEO",role:"EV ecosystem expert",img:"img/BM.jpeg",linkedin:""},{key:"Ga\xebtan Cad\xe9ro",title:"COO-CFO",role:"Operation management expert",img:"img/GC.jpeg",linkedin:""},{key:"Fran\xe7ois Chiron",title:"Payment Technology Advisor",role:"IT & payment expert",img:"img/FCh.png",linkedin:""},{key:"Fran\xe7ois Colet",title:"CTO",role:"EV charging expert, ISO15118 co-author",img:"img/FC.jpeg",linkedin:""},{key:"Beno\xeet Rognier",title:"CIO",role:"Deep tech and blockchain expert",img:"img/BR.jpeg",linkedin:""}],partners:[{key:"BPI France",img:"img/bpifr.svg",url:"https://www.bpifrance.fr/",width:"300px"},{key:"Completium",img:"img/completium.svg",url:"https://completium.com/",width:"180px"},{key:"Easy Wallet",img:"img/easywallet.png",url:"https://easywallet.com/",width:"200px"},{key:"Essimo",img:"img/essimo.png",url:"",width:"130px"},{key:"Magmet",img:"img/magment.png",url:"https://www.magment.de/",width:"100px"},{key:"Nomadic Labs",img:"img/nomadic-labs.png",url:"https://www.nomadic-labs.com/",width:"250px"}]},b={right:{angle:"225",direction:"row-reverse"},left:{angle:"135",direction:"row"}};function Z(){var e=(0,x.Z)();return[].concat(e.breakpoints.keys).reverse().reduce((function(t,n){var r=(0,y.Z)(e.breakpoints.up(n));return!t&&r?n:t}),null)||"xs"}function w(e,t){switch(e){case"sm":return"xs"==t||"sm"==t;default:return!0}}var v=function(){var e=Z();return r.createElement(m.ZP,{container:!0,direction:b.left.direction,justifyContent:"flex-start",alignItems:"flex-start",style:{height:"500px",backgroundImage:"linear-gradient("+b.left.angle+"deg, rgb(0 76 126 / 100%), rgb(0 76 126 / 90%), rgb(0 76 126 / 0%)), url("+g+")",backgroundSize:"cover",backgroundPosition:(w("sm",e),"right")}},r.createElement(m.ZP,{container:!0,direction:"row",justifyContent:"center",alignItems:"center",item:!0,md:6,sm:12,xs:12},r.createElement(m.ZP,{item:!0,xs:12,style:{margin:"50px",textAlign:"center"}},r.createElement("img",{src:(0,c.Z)("img/werenode_logo_text_250px.png"),style:{width:"350px"}})),r.createElement(m.ZP,{item:!0,style:{margin:"50px",textAlign:"center"}},r.createElement(o.Z,{variant:"h3",xs:12},E.taglines.header))))},k=function(){return r.createElement("div",{style:{position:"relative",width:"500px",height:"660px",overflow:"hidden"}},r.createElement("img",{src:(0,c.Z)("img/phone2.png"),style:{width:"430px",position:"absolute",top:"-3px",left:"34px"}}),r.createElement("img",{src:(0,c.Z)("img/app_screen1.jpg"),style:{position:"absolute",top:"74px",left:"79px",width:"342px"}}))},P=function(){return r.createElement("img",{src:(0,c.Z)("img/google-play-badge.png"),style:{width:"200px"}})},C=function(){return r.createElement("img",{src:(0,c.Z)("img/AppStoreButton.png"),style:{width:"150px"}})},j=function(){var e,t=Z();return r.createElement(m.ZP,{container:!0,direction:"row",justifyContent:"flex-start",alignItems:"flex-start",style:{backgroundImage:"url("+p+")",backgroundSize:"cover"}},r.createElement(m.ZP,{container:!0,direction:"row",justifyContent:"center",alignItems:"center",item:!0,md:6,sm:12,xs:12,style:{height:"660px"}},r.createElement(m.ZP,{item:!0},r.createElement(k,null))),r.createElement(m.ZP,{container:!0,direction:"column",justifyContent:"space-between",alignItems:"center",item:!0,md:4,sm:12,xs:12,style:(e={height:"100%",paddingTop:w("sm",t)?"0px":"100px"},e.height=w("sm",t)?"100%":"650px",e)},r.createElement(m.ZP,{item:!0,style:{textAlign:"center",marginTop:w("sm",t)?"50px":"0px",marginBottom:w("sm",t)?"50px":"0px"}},r.createElement(o.Z,{variant:"h3"},E.taglines.mobile)),r.createElement(m.ZP,{container:!0,direction:"row",justifyContent:"center",alignItems:"center",spacing:4,item:!0},r.createElement(m.ZP,{item:!0},r.createElement(P,null)),r.createElement(m.ZP,{item:!0},r.createElement(C,null)))))},I=function(){return r.createElement("div",{style:{position:"relative",height:"700px",width:"1500px"}},r.createElement("div",{style:{backgroundColor:"black",position:"absolute",top:"80px",left:"180px",height:"550px",width:"1500px"}}),r.createElement("img",{src:(0,c.Z)("img/mac-mockup.png"),style:{position:"absolute",top:"64px",left:"79px",height:"600px"}}))},T=function(){var e=Z();return r.createElement(m.ZP,{container:!0,direction:w("sm",e)?"column-reverse":"row",justifyContent:"flex-start",alignItems:"flex-start",style:{backgroundImage:"linear-gradient(0deg, rgb(0 76 126 / 100%), rgb(0 76 126 / 80%), rgb(0 76 126 / 0%)), url("+u+")",backgroundSize:"cover",backgroundPosition:w("sm",e)?"center":"left"}},r.createElement(m.ZP,{container:!0,direction:"column",justifyContent:"flex-end",alignItems:"center",item:!0,md:6,sm:12,xs:12,style:{height:"700px"}},r.createElement(m.ZP,{item:!0,style:{marginLeft:w("sm",e)?"0px":"100px",marginRight:w("sm",e)?"0px":"100px",textAlign:"center"}},r.createElement(o.Z,{variant:"h3"},E.taglines.evsemanager)),r.createElement(m.ZP,{item:!0},r.createElement(a.Z,{to:"myevses",style:{textDecoration:"none"}},r.createElement(s.Z,{variant:"contained",disableElevation:!0,style:{paddingLeft:"40px",paddingRight:"40px",color:"white",marginBottom:"100px",marginTop:"50px"}},E.buttons.evsemanager)))),r.createElement(m.ZP,{item:!0,md:6,sm:12,xs:12,style:{height:w("sm",e)?"700px":"100%",overflow:"hidden"}},r.createElement(I,null)))},B=function(){var e=Z(),t=w("sm",e)?"0":"225";return r.createElement(m.ZP,{container:!0,direction:w("sm",e)?"column-reverse":"row",justifyContent:"flex-end",alignItems:"flex-start",style:{backgroundImage:"linear-gradient("+t+"deg, rgb(0 0 0 / 100%), rgb(0 0 0 / 80%), rgb(0 76 126 / 0%)), url("+d.Z+")",backgroundSize:"cover",backgroundPosition:"left",height:"500px"}},r.createElement(m.ZP,{container:!0,direction:"column",justifyContent:w("sm",e)?"flex-end":"center",alignItems:"center",item:!0,md:6,sm:12,xs:12,style:{height:"100%"}},r.createElement(m.ZP,{item:!0,style:{marginLeft:(w("sm",e),"50px"),marginRight:(w("sm",e),"50px"),textAlign:"center",marginBottom:w("sm",e)?"25px":"50px"}},r.createElement(o.Z,{variant:"h3"},E.taglines.invest)),r.createElement(m.ZP,{item:!0,style:{marginBottom:w("sm",e)?"50px":"0px"}},r.createElement(a.Z,{to:"/invest",style:{textDecoration:"none"}},r.createElement(s.Z,{variant:"outlined",style:{color:"white"}},E.buttons.invest)))))},M=function(e){return r.createElement(m.ZP,{item:!0,md:4,sm:6,xs:12,container:!0,direction:"column",justifyContent:"center",alignItems:"center",style:{marginTop:"30px"}},r.createElement(m.ZP,{item:!0},r.createElement("img",{src:(0,c.Z)(e.img),style:{borderRadius:"100%",borderStyle:"inset",borderColor:"white",borderWidth:"2px",height:"120px",width:"120px"}})),r.createElement(m.ZP,{item:!0,style:{textAlign:"center"}},r.createElement(o.Z,null,e.name+", "+e.title)),r.createElement(m.ZP,{item:!0,style:{textAlign:"center"}},r.createElement(o.Z,null,e.role)))},A=function(e){return r.createElement(m.ZP,{container:!0,direction:"row",justifyContent:"flex-start",alignItems:"center",style:{marginTop:"100px",marginBottom:"130px"}},E.team.map((function(e){return r.createElement(M,{img:e.img,key:e.key,name:e.key,title:e.title,role:e.role})})))},S=function(e){var t=Z();return r.createElement(m.ZP,{item:!0,style:{marginBottom:w("sm",t)?"20px":"0px",marginTop:w("sm",t)?"20px":"0px"}},r.createElement(a.Z,{to:e.url},r.createElement("img",{src:(0,c.Z)(e.img),style:{width:e.width}})))},_=function(){var e=Z();return r.createElement(m.ZP,{container:!0,direction:"column",justifyContent:"center",alignItems:"center",style:{backgroundColor:"#1d222b"}},r.createElement(m.ZP,{item:!0,style:{marginTop:"15px"}},r.createElement(o.Z,{variant:"subtitle1",style:{color:"grey"}},"Partners")),r.createElement(m.ZP,{item:!0,container:!0,direction:w("sm",e)?"column":"row",justifyContent:"center",alignItems:"center",spacing:2,style:{marginTop:"0px",marginBottom:"25px"}},E.partners.map((function(e){return r.createElement(S,{key:e.key,img:e.img,width:e.width,url:e.url})}))))};function O(){(0,l.Z)().siteConfig;var e=r.useMemo((function(){return(0,h.Z)({palette:{type:"dark",primary:{main:"#00b1a5"},background:{paper:"black",default:"black"},info:{main:"#c7b45f"}}})}),[!0]);return r.createElement("div",{style:{backgroundColor:"#121212"}},r.createElement(i.Z,{title:"Werenode Portal",description:"Description will go into a meta tag in <head />"},r.createElement(f.Z,{theme:e},r.createElement(v,null),r.createElement(j,null),r.createElement(T,null),r.createElement(B,null),r.createElement(A,null),r.createElement(_,null))))}},1954:function(e,t,n){"use strict";t.Z=n.p+"assets/images/car-bc26d4ae8ec983ca5a7a9bee16291400.png"}}]);