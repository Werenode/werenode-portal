"use strict";(self.webpackChunkwerenode_portal=self.webpackChunkwerenode_portal||[]).push([[343],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return p}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),h=c(n),p=i,f=h["".concat(l,".").concat(p)]||h[p]||d[p]||a;return n?r.createElement(f,o(o({ref:t},u),{},{components:n})):r.createElement(f,o({ref:t},u))}));function p(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var c=2;c<a;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},6742:function(e,t,n){n.d(t,{Z:function(){return p}});var r=n(102),i=n(7294),a=n(3727),o=n(2263),s=n(3919),l=n(412),c=(0,i.createContext)({collectLink:function(){}}),u=n(4996),d=n(8780),h=["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"];var p=function(e){var t,n,p=e.isNavLink,f=e.to,m=e.href,k=e.activeClassName,b=e.isActive,g=e["data-noBrokenLinkCheck"],v=e.autoAddBaseUrl,w=void 0===v||v,y=(0,r.Z)(e,h),T=(0,o.Z)().siteConfig,C=T.trailingSlash,O=T.baseUrl,z=(0,u.C)().withBaseUrl,N=(0,i.useContext)(c),D=f||m,W=(0,s.Z)(D),x=null==D?void 0:D.replace("pathname://",""),j=void 0!==x?(n=x,w&&function(e){return e.startsWith("/")}(n)?z(n):n):void 0;j&&W&&(j=(0,d.applyTrailingSlash)(j,{trailingSlash:C,baseUrl:O}));var R,A=(0,i.useRef)(!1),S=p?a.OL:a.rU,I=l.Z.canUseIntersectionObserver;(0,i.useEffect)((function(){return!I&&W&&null!=j&&window.docusaurus.prefetch(j),function(){I&&R&&R.disconnect()}}),[j,I,W]);var E=null!==(t=null==j?void 0:j.startsWith("#"))&&void 0!==t&&t,Z=!j||!W||E;return j&&W&&!E&&!g&&N.collectLink(j),Z?i.createElement("a",Object.assign({href:j},D&&!W&&{target:"_blank",rel:"noopener noreferrer"},y)):i.createElement(S,Object.assign({},y,{onMouseEnter:function(){A.current||null==j||(window.docusaurus.preload(j),A.current=!0)},innerRef:function(e){var t,n;I&&e&&W&&(t=e,n=function(){null!=j&&window.docusaurus.prefetch(j)},(R=new window.IntersectionObserver((function(e){e.forEach((function(e){t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(R.unobserve(t),R.disconnect(),n())}))}))).observe(t))},to:j||""},p&&{isActive:b,activeClassName:k}))}},3919:function(e,t,n){function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function i(e){return void 0!==e&&!r(e)}n.d(t,{b:function(){return r},Z:function(){return i}})},4996:function(e,t,n){n.d(t,{C:function(){return a},Z:function(){return o}});var r=n(2263),i=n(3919);function a(){var e=(0,r.Z)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,a=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,r){var a=void 0===r?{}:r,o=a.forcePrependBaseUrl,s=void 0!==o&&o,l=a.absolute,c=void 0!==l&&l;if(!n)return n;if(n.startsWith("#"))return n;if((0,i.b)(n))return n;if(s)return t+n;var u=n.startsWith(t)?n:t+n.replace(/^\//,"");return c?e+u:u}(a,n,e,t)}}}function o(e,t){return void 0===t&&(t={}),(0,a().withBaseUrl)(e,t)}},8802:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){var n=t.trailingSlash,r=t.baseUrl;if(e.startsWith("#"))return e;if(void 0===n)return e;var i,a=e.split(/[#?]/)[0],o="/"===a||a===r?a:(i=a,n?function(e){return e.endsWith("/")?e:e+"/"}(i):function(e){return e.endsWith("/")?e.slice(0,-1):e}(i));return e.replace(a,o)}},8780:function(e,t,n){var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.uniq=t.applyTrailingSlash=void 0;var i=n(8802);Object.defineProperty(t,"applyTrailingSlash",{enumerable:!0,get:function(){return r(i).default}});var a=n(9964);Object.defineProperty(t,"uniq",{enumerable:!0,get:function(){return r(a).default}})},9964:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return Array.from(new Set(e))}},1529:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return u},toc:function(){return d},default:function(){return p}});var r=n(3117),i=n(102),a=(n(7294),n(3905)),o=n(6742),s=["components"],l={sidebar_position:5},c="Delegation Based DeFi (White paper)",u={unversionedId:"defiwhitepapers",id:"defiwhitepapers",isDocsHomePage:!1,title:"Delegation Based DeFi (White paper)",description:"(pfd version)",source:"@site/docs/defiwhitepapers.md",sourceDirName:".",slug:"/defiwhitepapers",permalink:"/docs/defiwhitepapers",editUrl:"https://github.com/Werenode/werenode-portal/docs/defiwhitepapers.md",version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"EVSE Manager Server",permalink:"/docs/evsemanager"},next:{title:"My EVSE(s) User Manual",permalink:"/docs/myevsesmanual"}},d=[{value:"Authors",id:"authors",children:[]},{value:"Abstract",id:"abstract",children:[]},{value:"Introduction",id:"introduction",children:[]},{value:"Investment token as a real instrument of trust",id:"investment-token-as-a-real-instrument-of-trust",children:[]},{value:"Continuous Delegation Offering",id:"continuous-delegation-offering",children:[]},{value:"Continuous Security Reward",id:"continuous-security-reward",children:[]},{value:"Rebate on services sold by the financed project",id:"rebate-on-services-sold-by-the-financed-project",children:[]},{value:"Yield opportunity thanks to DEX introduction",id:"yield-opportunity-thanks-to-dex-introduction",children:[]},{value:"Decentralized Autonomous Organization",id:"decentralized-autonomous-organization",children:[]},{value:"Iterative process for new investments",id:"iterative-process-for-new-investments",children:[]},{value:"Abbreviations",id:"abbreviations",children:[]},{value:"References",id:"references",children:[]},{value:"Disclaimer",id:"disclaimer",children:[]}],h={toc:d};function p(e){var t=e.components,l=(0,i.Z)(e,s);return(0,a.kt)("wrapper",(0,r.Z)({},h,l,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"delegation-based-defi-white-paper"},"Delegation Based DeFi (White paper)"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"http://werenode.com/documents/WerenodeWhitepaperv09.pdf"},"(pfd version)")),(0,a.kt)("h2",{id:"authors"},"Authors"),(0,a.kt)("p",null,"Thibaut Chess\xe9 (",(0,a.kt)("a",{parentName:"p",href:"mailto:thibaut@nomadic-labs.com"},"thibaut@nomadic-labs.com")," ), Yves-Michel Leporcher (",(0,a.kt)("a",{parentName:"p",href:"mailto:yves-michel.leporcher@renault.com"},"yves-michel.leporcher@renault.com"),"), Beno\xeet Ma\xefsseu (",(0,a.kt)("a",{parentName:"p",href:"mailto:benoit.maisseu@werenode.com"},"benoit.maisseu@werenode.com"),")"),(0,a.kt)("h2",{id:"abstract"},"Abstract"),(0,a.kt)("p",null,"This technical whitepaper establishes the main principles of a decentralized investment system using\nTezos blockchain innovative mechanisms and an architecture of dedicated smart contracts. The\nmain components of this system include the new Continuous Delegation Offering concept combined\nwith a Continuous Security Reward allowing to consolidate the value of the investment token.\nAdditionally, a Decentralized Autonomous Organization is used to overview the token governance.\nThis decentralized structure can be used for any investment in the development of a project that\nwill generate revenues in a way that allows a share of this revenue in tokens to be bought back or\nburned automatically thanks to a smart contract, thus sustaining the value of the investment token."),(0,a.kt)("h2",{id:"introduction"},"Introduction"),(0,a.kt)("p",null,"This document describes the architecture of Werenode\u2019s proposed investment token contracts, including the contract that controls the emission of Werecoin itself (Werenode\u2019s token) thanks to\na specific concept of Tezos blockchain: the baking delegation ",(0,a.kt)(o.Z,{to:"/docs/defiwhitepapers/#references",mdxType:"Link"},"[5]"),". We will also describe how the\nrevenue flow is connected to the investment token and the smart contract that allows to manage\nthe link with the revenues of the project for which the investment is gathered."),(0,a.kt)("h2",{id:"investment-token-as-a-real-instrument-of-trust"},"Investment token as a real instrument of trust"),(0,a.kt)("p",null,"Token fundraising is often associated with high-risk for investors. Furthermore, the decision makers\nare themselves rarely involved directly in the project, thus raising a critical question of trust. We\npropose a fully decentralized contract architecture to allow investors to secure their assets."),(0,a.kt)("p",null,"The architecture thereafter described is built to bring warranties to users regarding the project\nfor which the funds are raised. These warranties ensure that no capital can be lost and consolidate\nthe reward process thanks to the use of formally verified smart contracts."),(0,a.kt)("h2",{id:"continuous-delegation-offering"},"Continuous Delegation Offering"),(0,a.kt)("p",null,"First and foremost, as an innovation, the Tezos tool of delegated baking is used to introduce safely\nthe investment token. Indeed, thanks to the proof of stake consensus algorithm, Tezos owners can\nbe rewarded when they lend their baking rights to another baker ",(0,a.kt)(o.Z,{to:"/docs/defiwhitepapers/#references",mdxType:"Link"},"[3]"),". In exchange, the delegated\nbaker will receive a part of the baking fee. As an example, Werenode, a member of Tezos baker\ncommunity, will reward the owners of the tez which are delegated to itself with Werecoin tokens\n(WRC), hence introducing them. With this so-called Continuous Delegation Offerings (CDOs),\nit will be possible to introduce smoothly and progressively WRC, without any concentration and\nlater dilution. This introduction mechanism requires that the financed services are bound to a\nbaker setup. The native process of the Tezos baking protocol will serve to control the issuance,\nwhile contributing to the decentralization of the network ",(0,a.kt)(o.Z,{to:"/docs/defiwhitepapers/#references",mdxType:"Link"},"[1]"),"."),(0,a.kt)("p",null,"Indeed, the reward for the delegation will be partly or totally paid to the owner of the tez in\nWRC. The ratio XTZ/WRC for the baking reward of the delegate can be chosen, depending on the\ndelegate investment profile choice. In any case, the full liquidity and capital value of the delegated\nTez is ensured. This allows a better control of investment risk and answers to the decentralized\nissuance need, which is one of the keys of a successful token introduction. Token issuance usually\nraises a risk of concentration but this process of emission guarantees a fair and transparent opportunity for potential stakeholders."),(0,a.kt)("p",null,"The market value of the WRC will be fixed by an automated market mechanism (whether an\nexisting decentralized exchange like Dexter ",(0,a.kt)(o.Z,{to:"/docs/defiwhitepapers/#references",mdxType:"Link"},"[2]")," or QuipuSwap or a new relevant comparable exchange). The emitted number of WRC for each cycle of delegation will be adjusted to the current WRC/XTZ value."),(0,a.kt)("p",null,"The amount of planned tokens for issuance has to be cautiously scheduled. It needs to be connected to the revenue that a tranche of investment is generating. Each time a new tranche of\ninvestment is created, the amount of token to be reissued, in relation with the planned investment\nrevenue will be determined by a decentralized authority vote."),(0,a.kt)("img",{src:n(7442).Z,alt:"Continuous Delegation Offering mechanism",style:{width:"80%",height:"80%"}}),(0,a.kt)("h2",{id:"continuous-security-reward"},"Continuous Security Reward"),(0,a.kt)("p",null,"A coin burning process will be implemented to strengthen the value of the token. The number of\ntokens that will be destroyed will be determined by an autonomous process linked to the actual\nactivity of the collateral business. An innovative mechanism will be built in WRC token\u2019s smart\ncontract: each usage of WRC as traceability token or payment token will trigger the back reward\nof a percentage (n) of the value of the service tracked. This amount of WRC will be burnt."),(0,a.kt)("p",null,"This will allow to support the value of the token thus rewarding the investors, also protecting the\ntoken liquidity. This process as an enhanced extension of the Continuous Security Offering is more\naccurately named as a Continuous Security Reward system. This allows to ensure a second virtuous\nprinciple of consolidated added value for the token, also contributing to the Tezos ecosystem value."),(0,a.kt)("p",null,"Alternatively, instead of simply burning this percentage n of tokens, a larger amount of WRC could\nbe bought back automatically at market price by the entity managing the revenue flow, with a\nfee used to reward the liquidity provider of the decentralized exchange mechanism"),(0,a.kt)(o.Z,{to:"/docs/defiwhitepapers/#references",mdxType:"Link"},"[4]"),". This would offer the additional advantage of supporting the decentralized exchange XTZ/WRC pair. But this alternate process could be used as long as it doesn\u2019t reintroduce a risk of token accumulation endangering its market value. Indeed, in this case, the usual drawback would be to create a new reserve of tokens that could be sold too quickly (or could just create a distrust risk). Therefore it should be linked with a clear reintroduction process of the bought back tokens (through the redistribution of these tokens as fidelity tokens for example). Especially, if these bought back tokens are reintroduced thanks to a cashback mechanism towards the customer of the collateral service, this potential disadvantage would be negated. A cashback of the same percentage n would fully negate the potential reserve risk. A mixed strategy is also possible, with a bought back amount of tokens linked to the cashback percentage offered on the service and the excess tokens to be destroyed.",(0,a.kt)("p",null,"As traceability token (and marginally payment token), WRC measures all service flow and routes a n% for the reward mechanism:"),(0,a.kt)("img",{src:n(1670).Z,alt:"Continuous Delegation Offering mechanism",style:{width:"60%",height:"60%"}}),(0,a.kt)("p",null,"This Continuous Security Reward (CSR) principle will provide warranties along the token life cycle,\nensuring its sustainability and rewarding the token holders. Thanks to this smart contract architecture, the strengthening of the token will directly depend on the accumulated quality of the projects\nand allow to finance the new services to come, potentially benefiting from virtuous anticipations."),(0,a.kt)("h2",{id:"rebate-on-services-sold-by-the-financed-project"},"Rebate on services sold by the financed project"),(0,a.kt)("p",null,"The WRC token will be accepted as payment for the services proposed by the financed projects.\nFor example, in our first implementation, Werecoins will be used for electric vehicles charging. The\ntoken will be accepted at current market value and give access to rebates on the collateral services.\nOf course, a marginal share of the payment is expected to be made directly in WRC, at least at\nthe beginning of the process. Therefore, it\u2019s important to keep in mind that the first usage of the\ntoken will be to give traceability, disintermediation and interoperability to all services for which\ndecentralization can be beneficial. This is why the share of services not directly paid in WRC will\nbe tracked proportionally thanks to the token, thus triggering the reward mechanism."),(0,a.kt)("h2",{id:"yield-opportunity-thanks-to-dex-introduction"},"Yield opportunity thanks to DEX introduction"),(0,a.kt)("p",null,"The WRC will be tradable thanks to decentralized exchanges platforms or a new relevant comparable exchange. The XTZ/WRC pair will be the first proposed."),(0,a.kt)("h2",{id:"decentralized-autonomous-organization"},"Decentralized Autonomous Organization"),(0,a.kt)("p",null,"A classical mechanism of Decentralized Autonomous Organization will be linked to the WRC token\nallowing a distributed governance to which proposals will be submitted and voted. Thanks to\nthis Decentralized Token Management the main decision will be taken in the best interest of the\ninvestors and the financed projects. DAO decisions will typically be liquidity management and\ntoken life cycle (lock-up, burning, redeeming\u2026). As an example, the votes of the decentralized\nautonomous organization will typically allow the adequate tuning of the share of project revenue\nthat will be burned."),(0,a.kt)("h2",{id:"iterative-process-for-new-investments"},"Iterative process for new investments"),(0,a.kt)("p",null,"The amount of value that is used to support the rate of the investment token (s) is accumulated.\nWhen this cumulative value ffs reaches the initial total investment I multiplied by p (p being a ROI)\na landing process of the reward support to the token will be initiated, lowering progressively the\npercentage n."),(0,a.kt)("p",null,"As a general rule, the possible triggering conditions for the introduction of a new roll of tokens\nwill be:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"The closure of the previous backward support process (pI has been reached)"),(0,a.kt)("li",{parentName:"ol"},"a partnership or investment tranche that opens a new market for the reward percentage flow"),(0,a.kt)("li",{parentName:"ol"},"the market value of WRC has already reached pI (\u2211 \ud835\udc63 > \ud835\udc5d\ud835\udc3c, v being the market value of the token)")),(0,a.kt)("h2",{id:"abbreviations"},"Abbreviations"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Acronym"),(0,a.kt)("th",{parentName:"tr",align:null},"Definition"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"DBDeFi"),(0,a.kt)("td",{parentName:"tr",align:null},"Delegation Based Decentralized Financing")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"CDO"),(0,a.kt)("td",{parentName:"tr",align:null},"Continuous Delegated Offering")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"CSO"),(0,a.kt)("td",{parentName:"tr",align:null},"Continuous Security Offering")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"CSR"),(0,a.kt)("td",{parentName:"tr",align:null},"Continuous Security Reward")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"DEX"),(0,a.kt)("td",{parentName:"tr",align:null},"Decentralized EXchange")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"WRC"),(0,a.kt)("td",{parentName:"tr",align:null},"Werecoin, an example of a token that would be emitted thanks to CDO")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"ROI"),(0,a.kt)("td",{parentName:"tr",align:null},"Return On Investment")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"DAO"),(0,a.kt)("td",{parentName:"tr",align:null},"Decentralized Autonomous Organization")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"XTZ"),(0,a.kt)("td",{parentName:"tr",align:null},"Tezos coin")))),(0,a.kt)("h2",{id:"references"},"References"),(0,a.kt)("h4",{id:"1-ariel-gabizon-iddo-bentov-and-alex-mizrahi-cryptocurrencies-without-proof-of-work-2014"},"[1]"," Ariel Gabizon Iddo Bentov and Alex Mizrahi. ",(0,a.kt)("a",{parentName:"h4",href:"http://www.cs.technion.ac.il/~idddo/CoA.pdf"},"Cryptocurrencies without proof of work. 2014"),"."),(0,a.kt)("h4",{id:"2-camlcaseio-dexter-documentation-2020"},"[2]"," camlcase.io. ",(0,a.kt)("a",{parentName:"h4",href:"https://dexter.exchange/docs/dexterintro/"},"Dexter Documentation. 2020"),"."),(0,a.kt)("h4",{id:"3-tezos-project-formal-specification-of-the-tezos-smart-contract-language-2014"},"[3]"," Tezos Project. ",(0,a.kt)("a",{parentName:"h4",href:"https://tezos.com/pages/tech.html"},"Formal specification of the tezos smart contract language. 2014"),"."),(0,a.kt)("h4",{id:"4-uniswap-project-uniswap-v2-core-2020"},"[4]"," Uniswap Project. ",(0,a.kt)("a",{parentName:"h4",href:"https://uniswap.org/whitepaper.pdf"},"Uniswap V2 Core. 2020"),"."),(0,a.kt)("h4",{id:"5-ascs-on-behalf-of-tezos-foundation-tezos-deep-dive-deck-2020"},"[5]"," ASCS on behalf of Tezos Foundation. ",(0,a.kt)("a",{parentName:"h4",href:"https://asc-s.de/en/news/152/first-results-of-envited-ecosystem-work-group-pulished/"},"Tezos Deep Dive Deck. 2020")),(0,a.kt)("h2",{id:"disclaimer"},"Disclaimer"),(0,a.kt)("p",null,"This paper is for general information purposes only. It does not constitute investment advice\nor a recommendation or solicitation to buy or sell any investment and should not be used in\nthe evaluation of the merits of making any investment decision. It should not be relied upon for\naccounting, legal or tax advice or investment recommendations. This paper reflects current opinions\nof the authors and is not made on behalf of Werenode or its affiliates and does not necessarily reflect\nthe opinions of Werenode, its affiliates or individuals associated with Werenode. The opinions\nreflected herein are subject to change without being updated."))}p.isMDXComponent=!0},7442:function(e,t,n){t.Z=n.p+"assets/images/wp1-3f57c7060686da70d33776bc1f82ae32.png"},1670:function(e,t,n){t.Z=n.p+"assets/images/wp2-2830534b49ba36923075a67340b29a24.png"}}]);