(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,1656,e=>{e.q("/_next/static/media/bpdacc-logo.2q4j55sg8ae3y.jpg")},29790,e=>{e.q("/_next/static/media/dashboard-icon.00xhr2xlcu5s9.svg")},80069,e=>{e.q("/_next/static/media/inventory-icon.1356va0w9l31g.svg")},48934,e=>{e.q("/_next/static/media/reports-icon.1y686_r8-6anx.svg")},96393,e=>{e.q("/_next/static/media/ris-icon.0hrefos2r2ruq.svg")},2024,e=>{e.q("/_next/static/media/rislist-icon.2mxqb7613y0ag.svg")},64069,e=>{e.q("/_next/static/media/users-icon.2ewz3aa7jzcpo.svg")},17149,e=>{e.q("/_next/static/media/dashboard-totalitems-icon.1l0op0mjojpzs.svg")},66899,e=>{e.q("/_next/static/media/dashboard-lowstock-icon.3wsxe8lxk8jpb.svg")},12972,e=>{e.q("/_next/static/media/dashboard-pending-icon.3201xcwa0c747.svg")},4058,e=>{e.q("/_next/static/media/dashboard-issued-icon.31z8lcwy5bckx.svg")},29945,e=>{e.q("/_next/static/media/dashboard-activityissued-icon.1attawxaajmeq.svg")},25047,e=>{e.q("/_next/static/media/dashboard-activityexpired-icon.0k2vgoovq3rg-.svg")},16245,e=>{e.q("/_next/static/media/dashboard-activitynearexpiry-icon.0vn52e8gi8qnk.svg")},81104,e=>{e.q("/_next/static/media/dashboard-activityallocated-icon.39ebge-ud4fn_.svg")},82945,e=>{e.q("/_next/static/media/dashboard-activityadded-icon.1xovmmjui6m1y.svg")},2795,e=>{e.q("/_next/static/media/search-icon.3v325ub1db43a.svg")},21692,e=>{e.q("/_next/static/media/expand-icon.0amjqv7ppfiyj.svg")},25366,e=>{e.q("/_next/static/media/collapse-icon.1jsfauozigjdx.svg")},34360,e=>{e.q("/_next/static/media/edit-icon.1lvjn37qth_g0.svg")},20845,e=>{e.q("/_next/static/media/stockcard-icon.1l20reem5xd5f.svg")},53294,e=>{e.q("/_next/static/media/delete-icon.1_63gowwas_w7.svg")},65327,e=>{e.q("/_next/static/media/additem-icon.0pxbsft_zywpg.svg")},66880,e=>{e.q("/_next/static/media/restock-icon.1e6bfw72jyqk0.svg")},34997,e=>{e.q("/_next/static/media/close-icon.2whft--wzemke.svg")},30825,e=>{e.q("/_next/static/media/print-icon.30bm8txrewh0f.svg")},84860,e=>{e.q("/_next/static/media/adduser-icon.25qscn199fiao.svg")},29371,e=>{e.q("/_next/static/media/deleteuser-icon.1_63gowwas_w7.svg")},32355,e=>{e.q("/_next/static/media/editusers-icon.2ly_mf4uyv9nb.svg")},86022,e=>{"use strict";var t,a,i,s,l,r,n,o,c,d,p,h=e.i(43476);e.i(47167);var x=e.i(71645),u=e.i(74080),m=x;function f(){return(f=Object.assign.bind()).apply(null,arguments)}(t=o||(o={})).Pop="POP",t.Push="PUSH",t.Replace="REPLACE";let g="popstate";function b(e,t){if(!1===e||null==e)throw Error(t)}function j(e,t){if(!e){"u">typeof console&&console.warn(t);try{throw Error(t)}catch(e){}}}function y(e,t){return{usr:e.state,key:e.key,idx:t}}function v(e,t,a,i){return void 0===a&&(a=null),f({pathname:"string"==typeof e?e:e.pathname,search:"",hash:""},"string"==typeof t?w(t):t,{state:a,key:t&&t.key||i||Math.random().toString(36).substr(2,8)})}function N(e){let{pathname:t="/",search:a="",hash:i=""}=e;return a&&"?"!==a&&(t+="?"===a.charAt(0)?a:"?"+a),i&&"#"!==i&&(t+="#"===i.charAt(0)?i:"#"+i),t}function w(e){let t={};if(e){let a=e.indexOf("#");a>=0&&(t.hash=e.substr(a),e=e.substr(0,a));let i=e.indexOf("?");i>=0&&(t.search=e.substr(i),e=e.substr(0,i)),e&&(t.pathname=e)}return t}(a=c||(c={})).data="data",a.deferred="deferred",a.redirect="redirect",a.error="error";let k=/^:[\w-]+$/,C=e=>"*"===e;function S(e,t){var a,i,s;let l,r;"string"==typeof e&&(e={path:e,caseSensitive:!1,end:!0});let[n,o]=(a=e.path,i=e.caseSensitive,s=e.end,void 0===i&&(i=!1),void 0===s&&(s=!0),j("*"===a||!a.endsWith("*")||a.endsWith("/*"),'Route path "'+a+'" will be treated as if it were "'+a.replace(/\*$/,"/*")+'" because the `*` character must always follow a `/` in the pattern. To get rid of this warning, please change the route path to "'+a.replace(/\*$/,"/*")+'".'),l=[],r="^"+a.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(e,t,a)=>(l.push({paramName:t,isOptional:null!=a}),a?"/?([^\\/]+)?":"/([^\\/]+)")),a.endsWith("*")?(l.push({paramName:"*"}),r+="*"===a||"/*"===a?"(.*)$":"(?:\\/(.+)|\\/*)$"):s?r+="\\/*$":""!==a&&"/"!==a&&(r+="(?:(?=\\/|$))"),[new RegExp(r,i?void 0:"i"),l]),c=t.match(n);if(!c)return null;let d=c[0],p=d.replace(/(.)\/+$/,"$1"),h=c.slice(1);return{params:o.reduce((e,t,a)=>{let{paramName:i,isOptional:s}=t;if("*"===i){let e=h[a]||"";p=d.slice(0,d.length-e.length).replace(/(.)\/+$/,"$1")}let l=h[a];return s&&!l?e[i]=void 0:e[i]=(l||"").replace(/%2F/g,"/"),e},{}),pathname:d,pathnameBase:p,pattern:e}}function A(e,t){if("/"===t)return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let a=t.endsWith("/")?t.length-1:t.length,i=e.charAt(a);return i&&"/"!==i?null:e.slice(a)||"/"}let z=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i;function B(e,t){let a=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(e=>{".."===e?a.length>1&&a.pop():"."!==e&&a.push(e)}),a.length>1?a.join("/"):"/"}function R(e,t,a,i){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field [")+JSON.stringify(i)+"].  Please separate it out to the `to."+a+'` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.'}function I(e,t){let a=e.filter((e,t)=>0===t||e.route.path&&e.route.path.length>0);return t?a.map((e,t)=>t===a.length-1?e.pathname:e.pathnameBase):a.map(e=>e.pathnameBase)}function E(e,t,a,i){let s,l;void 0===i&&(i=!1),"string"==typeof e?s=w(e):(b(!(s=f({},e)).pathname||!s.pathname.includes("?"),R("?","pathname","search",s)),b(!s.pathname||!s.pathname.includes("#"),R("#","pathname","hash",s)),b(!s.search||!s.search.includes("#"),R("#","search","hash",s)));let r=""===e||""===s.pathname,n=r?"/":s.pathname;if(null==n)l=a;else{let e=t.length-1;if(!i&&n.startsWith("..")){let t=n.split("/");for(;".."===t[0];)t.shift(),e-=1;s.pathname=t.join("/")}l=e>=0?t[e]:"/"}let o=function(e,t){let a;void 0===t&&(t="/");let{pathname:i,search:s="",hash:l=""}="string"==typeof e?w(e):e;if(i){let e;(e=i,z.test(e))?a=i:(i.includes("//")&&j(!1,"Pathnames cannot have embedded double slashes - normalizing "+i+" -> "+(i=P(i))),a=i.startsWith("/")?B(i.substring(1),"/"):B(i,t))}else a=t;return{pathname:a,search:q(s),hash:O(l)}}(s,l),c=n&&"/"!==n&&n.endsWith("/"),d=(r||"."===n)&&a.endsWith("/");return!o.pathname.endsWith("/")&&(c||d)&&(o.pathname+="/"),o}let P=e=>e.replace(/\/\/+/g,"/"),D=e=>P(e.join("/")),U=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),q=e=>e&&"?"!==e?e.startsWith("?")?e:"?"+e:"",O=e=>e&&"#"!==e?e.startsWith("#")?e:"#"+e:"";function M(){return(M=Object.assign.bind()).apply(null,arguments)}Symbol("deferred");let W=m.createContext(null),L=m.createContext(null),T=m.createContext(null),H=m.createContext(null),$=m.createContext({outlet:null,matches:[],isDataRoute:!1}),F=m.createContext(null);function Q(){return null!=m.useContext(H)}function _(){return Q()||b(!1),m.useContext(H).location}function J(e){m.useContext(T).static||m.useLayoutEffect(e)}function K(){let{isDataRoute:e}=m.useContext($);return e?function(){let e,{router:t}=(X.UseNavigateStable,(e=m.useContext(W))||b(!1),e),a=et(ee.UseNavigateStable),i=m.useRef(!1);return J(()=>{i.current=!0}),m.useCallback(function(e,s){void 0===s&&(s={}),i.current&&("number"==typeof e?t.navigate(e):t.navigate(e,M({fromRouteId:a},s)))},[t,a])}():function(){Q()||b(!1);let e=m.useContext(W),{basename:t,future:a,navigator:i}=m.useContext(T),{matches:s}=m.useContext($),{pathname:l}=_(),r=JSON.stringify(I(s,a.v7_relativeSplatPath)),n=m.useRef(!1);return J(()=>{n.current=!0}),m.useCallback(function(a,s){if(void 0===s&&(s={}),!n.current)return;if("number"==typeof a)return void i.go(a);let o=E(a,JSON.parse(r),l,"path"===s.relative);null==e&&"/"!==t&&(o.pathname="/"===o.pathname?t:D([t,o.pathname])),(s.replace?i.replace:i.push)(o,s.state,s)},[t,i,r,l,e])}()}function V(e,t){let{relative:a}=void 0===t?{}:t,{future:i}=m.useContext(T),{matches:s}=m.useContext($),{pathname:l}=_(),r=JSON.stringify(I(s,i.v7_relativeSplatPath));return m.useMemo(()=>E(e,JSON.parse(r),l,"path"===a),[e,r,l,a])}let Y=m.createElement(function(){var e;let t,a,i,s,l=(a=m.useContext(F),i=(ee.UseRouteError,(t=m.useContext(L))||b(!1),t),s=et(ee.UseRouteError),void 0!==a?a:null==(e=i.errors)?void 0:e[s]),r=null!=l&&"number"==typeof l.status&&"string"==typeof l.statusText&&"boolean"==typeof l.internal&&"data"in l?l.status+" "+l.statusText:l instanceof Error?l.message:JSON.stringify(l),n=l instanceof Error?l.stack:null;return m.createElement(m.Fragment,null,m.createElement("h2",null,"Unexpected Application Error!"),m.createElement("h3",{style:{fontStyle:"italic"}},r),n?m.createElement("pre",{style:{padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"}},n):null,null)},null);class Z extends m.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,t){return t.location!==e.location||"idle"!==t.revalidation&&"idle"===e.revalidation?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:void 0!==e.error?e.error:t.error,location:t.location,revalidation:e.revalidation||t.revalidation}}componentDidCatch(e,t){console.error("React Router caught the following error during render",e,t)}render(){return void 0!==this.state.error?m.createElement($.Provider,{value:this.props.routeContext},m.createElement(F.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function G(e){let{routeContext:t,match:a,children:i}=e,s=m.useContext(W);return s&&s.static&&s.staticContext&&(a.route.errorElement||a.route.ErrorBoundary)&&(s.staticContext._deepestRenderedBoundaryId=a.route.id),m.createElement($.Provider,{value:t},i)}var X=((i=X||{}).UseBlocker="useBlocker",i.UseRevalidator="useRevalidator",i.UseNavigateStable="useNavigate",i),ee=((s=ee||{}).UseBlocker="useBlocker",s.UseLoaderData="useLoaderData",s.UseActionData="useActionData",s.UseRouteError="useRouteError",s.UseNavigation="useNavigation",s.UseRouteLoaderData="useRouteLoaderData",s.UseMatches="useMatches",s.UseRevalidator="useRevalidator",s.UseNavigateStable="useNavigate",s.UseRouteId="useRouteId",s);function et(e){let t,a=((t=m.useContext($))||b(!1),t),i=a.matches[a.matches.length-1];return i.route.id||b(!1),i.route.id}let ea={};function ei(e){let{to:t,replace:a,state:i,relative:s}=e;Q()||b(!1);let{future:l,static:r}=m.useContext(T),{matches:n}=m.useContext($),{pathname:o}=_(),c=K(),d=JSON.stringify(E(t,I(n,l.v7_relativeSplatPath),o,"path"===s));return m.useEffect(()=>c(JSON.parse(d),{replace:a,state:i,relative:s}),[c,d,s,a,i]),null}function es(e){b(!1)}function el(e){let{basename:t="/",children:a=null,location:i,navigationType:s=o.Pop,navigator:l,static:r=!1,future:n}=e;Q()&&b(!1);let c=t.replace(/^\/*/,"/"),d=m.useMemo(()=>({basename:c,navigator:l,static:r,future:M({v7_relativeSplatPath:!1},n)}),[c,n,l,r]);"string"==typeof i&&(i=w(i));let{pathname:p="/",search:h="",hash:x="",state:u=null,key:f="default"}=i,g=m.useMemo(()=>{let e=A(p,c);return null==e?null:{location:{pathname:e,search:h,hash:x,state:u,key:f},navigationType:s}},[c,p,h,x,u,f,s]);return null==g?null:m.createElement(T.Provider,{value:d},m.createElement(H.Provider,{children:a,value:g}))}function er(e){let{children:t,location:a}=e;return function(e,t){var a,i;let s;Q()||b(!1);let{navigator:l}=m.useContext(T),{matches:r}=m.useContext($),n=r[r.length-1],c=n?n.params:{};n&&n.pathname;let d=n?n.pathnameBase:"/";n&&n.route;let p=_();if(t){let e="string"==typeof t?w(t):t;"/"===d||(null==(a=e.pathname)?void 0:a.startsWith(d))||b(!1),s=e}else s=p;let h=s.pathname||"/",x=h;if("/"!==d){let e=d.replace(/^\//,"").split("/");x="/"+h.replace(/^\//,"").split("/").slice(e.length).join("/")}let u=(void 0===i&&(i="/"),function(e,t,a,i){let s=A(("string"==typeof t?w(t):t).pathname||"/",a);if(null==s)return null;let l=function e(t,a,i,s){void 0===a&&(a=[]),void 0===i&&(i=[]),void 0===s&&(s="");let l=(t,l,r)=>{var n,o;let c,d,p={relativePath:void 0===r?t.path||"":r,caseSensitive:!0===t.caseSensitive,childrenIndex:l,route:t};p.relativePath.startsWith("/")&&(b(p.relativePath.startsWith(s),'Absolute route path "'+p.relativePath+'" nested under path "'+s+'" is not valid. An absolute child route path must start with the combined path of all its parent routes.'),p.relativePath=p.relativePath.slice(s.length));let h=D([s,p.relativePath]),x=i.concat(p);t.children&&t.children.length>0&&(b(!0!==t.index,'Index routes must not have child routes. Please remove all child routes from route path "'+h+'".'),e(t.children,a,x,h)),(null!=t.path||t.index)&&a.push({path:h,score:(n=h,o=t.index,d=(c=n.split("/")).length,c.some(C)&&(d+=-2),o&&(d+=2),c.filter(e=>!C(e)).reduce((e,t)=>e+(k.test(t)?3:""===t?1:10),d)),routesMeta:x})};return t.forEach((e,t)=>{var a;if(""!==e.path&&null!=(a=e.path)&&a.includes("?"))for(let a of function e(t){let a=t.split("/");if(0===a.length)return[];let[i,...s]=a,l=i.endsWith("?"),r=i.replace(/\?$/,"");if(0===s.length)return l?[r,""]:[r];let n=e(s.join("/")),o=[];return o.push(...n.map(e=>""===e?r:[r,e].join("/"))),l&&o.push(...n),o.map(e=>t.startsWith("/")&&""===e?"/":e)}(e.path))l(e,t,a);else l(e,t)}),a}(e);l.sort((e,t)=>{var a,i;return e.score!==t.score?t.score-e.score:(a=e.routesMeta.map(e=>e.childrenIndex),i=t.routesMeta.map(e=>e.childrenIndex),a.length===i.length&&a.slice(0,-1).every((e,t)=>e===i[t])?a[a.length-1]-i[i.length-1]:0)});let r=null,n=function(e){try{return e.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(t){return j(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent encoding ('+t+")."),e}}(s);for(let e=0;null==r&&e<l.length;++e)r=function(e,t,a){void 0===a&&(a=!1);let{routesMeta:i}=e,s={},l="/",r=[];for(let e=0;e<i.length;++e){let n=i[e],o=e===i.length-1,c="/"===l?t:t.slice(l.length)||"/",d=S({path:n.relativePath,caseSensitive:n.caseSensitive,end:o},c),p=n.route;if(!d&&o&&a&&!i[i.length-1].route.index&&(d=S({path:n.relativePath,caseSensitive:n.caseSensitive,end:!1},c)),!d)return null;Object.assign(s,d.params),r.push({params:s,pathname:D([l,d.pathname]),pathnameBase:U(D([l,d.pathnameBase])),route:p}),"/"!==d.pathnameBase&&(l=D([l,d.pathnameBase]))}return r}(l[e],n,i);return r}(e,{pathname:x},i,!1)),f=function(e,t,a,i){var s,l;if(void 0===t&&(t=[]),void 0===a&&(a=null),void 0===i&&(i=null),null==e){if(!a)return null;if(a.errors)e=a.matches;else{if(null==(l=i)||!l.v7_partialHydration||0!==t.length||a.initialized||!(a.matches.length>0))return null;e=a.matches}}let r=e,n=null==(s=a)?void 0:s.errors;if(null!=n){let e=r.findIndex(e=>e.route.id&&(null==n?void 0:n[e.route.id])!==void 0);e>=0||b(!1),r=r.slice(0,Math.min(r.length,e+1))}let o=!1,c=-1;if(a&&i&&i.v7_partialHydration)for(let e=0;e<r.length;e++){let t=r[e];if((t.route.HydrateFallback||t.route.hydrateFallbackElement)&&(c=e),t.route.id){let{loaderData:e,errors:i}=a,s=t.route.loader&&void 0===e[t.route.id]&&(!i||void 0===i[t.route.id]);if(t.route.lazy||s){o=!0,r=c>=0?r.slice(0,c+1):[r[0]];break}}}return r.reduceRight((e,i,s)=>{var l;let d,p=!1,h=null,x=null;a&&(d=n&&i.route.id?n[i.route.id]:void 0,h=i.route.errorElement||Y,o&&(c<0&&0===s?(l="route-fallback",ea[l]||(ea[l]=!0),p=!0,x=null):c===s&&(p=!0,x=i.route.hydrateFallbackElement||null)));let u=t.concat(r.slice(0,s+1)),f=()=>{let t;return t=d?h:p?x:i.route.Component?m.createElement(i.route.Component,null):i.route.element?i.route.element:e,m.createElement(G,{match:i,routeContext:{outlet:e,matches:u,isDataRoute:null!=a},children:t})};return a&&(i.route.ErrorBoundary||i.route.errorElement||0===s)?m.createElement(Z,{location:a.location,revalidation:a.revalidation,component:h,error:d,children:f(),routeContext:{outlet:null,matches:u,isDataRoute:!0}}):f()},null)}(u&&u.map(e=>Object.assign({},e,{params:Object.assign({},c,e.params),pathname:D([d,l.encodeLocation?l.encodeLocation(e.pathname).pathname:e.pathname]),pathnameBase:"/"===e.pathnameBase?d:D([d,l.encodeLocation?l.encodeLocation(e.pathnameBase).pathname:e.pathnameBase])})),r,void 0,void 0);return t&&f?m.createElement(H.Provider,{value:{location:M({pathname:"/",search:"",hash:"",state:null,key:"default"},s),navigationType:o.Pop}},f):f}(function e(t,a){void 0===a&&(a=[]);let i=[];return m.Children.forEach(t,(t,s)=>{if(!m.isValidElement(t))return;let l=[...a,s];if(t.type===m.Fragment)return void i.push.apply(i,e(t.props.children,l));t.type!==es&&b(!1),t.props.index&&t.props.children&&b(!1);let r={id:t.props.id||l.join("-"),caseSensitive:t.props.caseSensitive,element:t.props.element,Component:t.props.Component,index:t.props.index,path:t.props.path,loader:t.props.loader,action:t.props.action,errorElement:t.props.errorElement,ErrorBoundary:t.props.ErrorBoundary,hasErrorBoundary:null!=t.props.ErrorBoundary||null!=t.props.errorElement,shouldRevalidate:t.props.shouldRevalidate,handle:t.props.handle,lazy:t.props.lazy};t.props.children&&(r.children=e(t.props.children,l)),i.push(r)}),i}(t),a)}m.startTransition;var en=((l=en||{})[l.pending=0]="pending",l[l.success=1]="success",l[l.error=2]="error",l);function eo(){return(eo=Object.assign.bind()).apply(null,arguments)}new Promise(()=>{}),m.Component;let ec=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"];try{window.__reactRouterVersion="6"}catch(e){}let ed=x.startTransition;function ep(e){let{basename:t,children:a,future:i,window:s}=e,l=x.useRef();null==l.current&&(l.current=function(e,t,a){void 0===a&&(a={});let{window:i=document.defaultView,v5Compat:s=!1}=a,l=i.history,r=o.Pop,n=null,c=d();function d(){return(l.state||{idx:null}).idx}function p(){r=o.Pop;let e=d(),t=null==e?null:e-c;c=e,n&&n({action:r,location:x.location,delta:t})}function h(e){let t="null"!==i.location.origin?i.location.origin:i.location.href,a="string"==typeof e?e:N(e);return b(t,"No window.location.(origin|href) available to create URL for href: "+(a=a.replace(/ $/,"%20"))),new URL(a,t)}null==c&&(c=0,l.replaceState(f({},l.state,{idx:c}),""));let x={get action(){return r},get location(){return e(i,l)},listen(e){if(n)throw Error("A history only accepts one active listener");return i.addEventListener(g,p),n=e,()=>{i.removeEventListener(g,p),n=null}},createHref:e=>t(i,e),createURL:h,encodeLocation(e){let t=h(e);return{pathname:t.pathname,search:t.search,hash:t.hash}},push:function(e,t){r=o.Push;let a=v(x.location,e,t);let p=y(a,c=d()+1),h=x.createHref(a);try{l.pushState(p,"",h)}catch(e){if(e instanceof DOMException&&"DataCloneError"===e.name)throw e;i.location.assign(h)}s&&n&&n({action:r,location:x.location,delta:1})},replace:function(e,t){r=o.Replace;let a=v(x.location,e,t);let i=y(a,c=d()),p=x.createHref(a);l.replaceState(i,"",p),s&&n&&n({action:r,location:x.location,delta:0})},go:e=>l.go(e)};return x}(function(e,t){let{pathname:a,search:i,hash:s}=e.location;return v("",{pathname:a,search:i,hash:s},t.state&&t.state.usr||null,t.state&&t.state.key||"default")},function(e,t){return"string"==typeof t?t:N(t)},{window:s,v5Compat:!0}));let r=l.current,[n,c]=x.useState({action:r.action,location:r.location}),{v7_startTransition:d}=i||{},p=x.useCallback(e=>{d&&ed?ed(()=>c(e)):c(e)},[c,d]);return x.useLayoutEffect(()=>r.listen(p),[r,p]),x.useEffect(()=>(function(e){null==e||e.v7_startTransition,null==e||e.v7_relativeSplatPath})(i),[i]),x.createElement(el,{basename:t,children:a,location:n.location,navigationType:n.action,navigator:r,future:i})}u.flushSync,x.useId;let eh="u">typeof window&&void 0!==window.document&&void 0!==window.document.createElement,ex=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,eu=x.forwardRef(function(e,t){let a,{onClick:i,relative:s,reloadDocument:l,replace:r,state:n,target:o,to:c,preventScrollReset:d,viewTransition:p}=e,h=function(e,t){if(null==e)return{};var a={};for(var i in e)if(({}).hasOwnProperty.call(e,i)){if(-1!==t.indexOf(i))continue;a[i]=e[i]}return a}(e,ec),{basename:u}=x.useContext(T),f=!1;if("string"==typeof c&&ex.test(c)&&(a=c,eh))try{let e=new URL(window.location.href),t=new URL(c.startsWith("//")?e.protocol+c:c),a=A(t.pathname,u);t.origin===e.origin&&null!=a?c=a+t.search+t.hash:f=!0}catch(e){}let g=function(e,t){let{relative:a}=void 0===t?{}:t;Q()||b(!1);let{basename:i,navigator:s}=m.useContext(T),{hash:l,pathname:r,search:n}=V(e,{relative:a}),o=r;return"/"!==i&&(o="/"===r?i:D([i,r])),s.createHref({pathname:o,search:n,hash:l})}(c,{relative:s}),j=function(e,t){let{target:a,replace:i,state:s,preventScrollReset:l,relative:r,viewTransition:n}=void 0===t?{}:t,o=K(),c=_(),d=V(e,{relative:r});return x.useCallback(t=>{0!==t.button||a&&"_self"!==a||t.metaKey||t.altKey||t.ctrlKey||t.shiftKey||(t.preventDefault(),o(e,{replace:void 0!==i?i:N(c)===N(d),state:s,preventScrollReset:l,relative:r,viewTransition:n}))},[c,o,d,i,s,a,e,l,r,n])}(c,{replace:r,state:n,target:o,preventScrollReset:d,relative:s,viewTransition:p});return x.createElement("a",eo({},h,{href:a||g,onClick:f||l?i:function(e){i&&i(e),e.defaultPrevented||j(e)},ref:t,target:o}))});(r=d||(d={})).UseScrollRestoration="useScrollRestoration",r.UseSubmit="useSubmit",r.UseSubmitFetcher="useSubmitFetcher",r.UseFetcher="useFetcher",r.useViewTransitionState="useViewTransitionState",(n=p||(p={})).UseFetcher="useFetcher",n.UseFetchers="useFetchers",n.UseScrollRestoration="useScrollRestoration";let em=(0,x.createContext)(),ef=({children:e})=>{let[t,a]=(0,x.useState)(()=>{let e=localStorage.getItem("bpdacc-current-user");return e?JSON.parse(e):null});(0,x.useEffect)(()=>{t?localStorage.setItem("bpdacc-current-user",JSON.stringify(t)):localStorage.removeItem("bpdacc-current-user")},[t]);let i={currentUser:t,userOffice:t?.office||"",isAdmin:t?.isAdmin||t?.role==="Super Admin"||!1,login:e=>{a(e)},logout:()=>{a(null)}};return(0,h.jsx)(em.Provider,{value:i,children:e})},eg=()=>{let e=(0,x.useContext)(em);if(!e)throw Error("useUserRole must be used within a UserRoleProvider");return e},eb=({message:e,type:t="info",onClose:a})=>(0,h.jsxs)("div",{className:`toast toast-${t}`,children:[(0,h.jsx)("div",{className:"toast-content",children:(0,h.jsx)("span",{style:{color:"#1f2937",fontWeight:500,fontSize:"14px",lineHeight:1.4},children:e})}),(0,h.jsx)("button",{className:"toast-close",onClick:a,style:{marginLeft:"16px",background:"none",border:"none",cursor:"pointer",fontSize:"18px",color:"#9ca3af",padding:"4px",lineHeight:1,flexShrink:0},"aria-label":"Close notification",children:"×"})]}),ej=({message:e,onConfirm:t,onCancel:a})=>(0,h.jsx)("div",{className:"modal-overlay",style:{zIndex:10001},children:(0,h.jsxs)("div",{className:"modal-content",style:{maxWidth:"400px",animation:"scaleUp 0.2s ease-out"},children:[(0,h.jsx)("div",{className:"modal-header",style:{borderBottom:"none",paddingBottom:"0"},children:(0,h.jsx)("h2",{children:"Confirm Action"})}),(0,h.jsxs)("div",{className:"modal-form",style:{padding:"20px 24px"},children:[(0,h.jsx)("p",{style:{color:"#4b5563",fontSize:"15px",lineHeight:"1.5"},children:e}),(0,h.jsxs)("div",{className:"modal-actions",style:{marginTop:"24px",borderTop:"none",paddingTop:"0"},children:[(0,h.jsx)("button",{className:"btn-secondary",onClick:a,children:"Cancel"}),(0,h.jsx)("button",{className:"btn-primary",style:{background:"#ef4444"},onClick:t,children:"Confirm"})]})]})]})}),ey=(0,x.createContext)(),ev=({children:e})=>{let[t,a]=(0,x.useState)([]),[i,s]=(0,x.useState)({isOpen:!1,message:"",onConfirm:null}),l=(0,x.useCallback)((e,t="info")=>{console.log("UIContext: showToast called!",{message:e,type:t});let i=Date.now();a(a=>{let s=[...a,{id:i,message:e,type:t}];return console.log("UIContext: current toasts:",s),s}),setTimeout(()=>{console.log("UIContext: auto-removing toast:",i),a(e=>e.filter(e=>e.id!==i))},3e3)},[]),r=(0,x.useCallback)(e=>{a(t=>t.filter(t=>t.id!==e))},[]),n=(0,x.useCallback)((e,t)=>{s({isOpen:!0,message:e,onConfirm:async()=>{try{await t()}finally{s(e=>({...e,isOpen:!1}))}}})},[]),o=(0,x.useCallback)(()=>{s(e=>({...e,isOpen:!1}))},[]);return(0,h.jsxs)(ey.Provider,{value:{showToast:l,confirmAction:n},children:[e,(0,h.jsx)("div",{className:"toast-container",children:t.map(e=>(0,h.jsx)(eb,{message:e.message,type:e.type,onClose:()=>r(e.id)},e.id))}),i.isOpen&&(0,h.jsx)(ej,{message:i.message,onConfirm:i.onConfirm,onCancel:o})]})},eN=({src:e,alt:t="",size:a=24,className:i="",style:s={}})=>{let l="object"==typeof e&&null!==e&&"src"in e?e.src:e;return(0,h.jsx)("img",{src:l,alt:t,draggable:!1,style:{width:a,height:a,display:"inline-block",verticalAlign:"middle",...s},className:i})},ew={src:e.i(1656).default,width:2048,height:2048,blurWidth:8,blurHeight:8,blurDataURL:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAgAAAQABAAD/wAARCAAIAAgDAREAAhEBAxEB/9sAQwAKBwcIBwYKCAgICwoKCw4YEA4NDQ4dFRYRGCMfJSQiHyIhJis3LyYpNCkhIjBBMTQ5Oz4+PiUuRElDPEg3PT47/9sAQwEKCwsODQ4cEBAcOygiKDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwD1Nft51p3dHFrgKuCOfqPxoEm7u6P/2Q=="},ek={src:e.i(29790).default,width:24,height:24,blurWidth:0,blurHeight:0},eC={src:e.i(80069).default,width:24,height:24,blurWidth:0,blurHeight:0},eS={src:e.i(48934).default,width:28,height:28,blurWidth:0,blurHeight:0},eA={src:e.i(96393).default,width:28,height:28,blurWidth:0,blurHeight:0},ez={src:e.i(2024).default,width:28,height:28,blurWidth:0,blurHeight:0},eB={src:e.i(64069).default,width:28,height:28,blurWidth:0,blurHeight:0},eR=()=>{let e=_(),[t,a]=(0,x.useState)(!1),{currentUser:i,isAdmin:s,logout:l}=eg(),r=[{path:"/",icon:ek,label:"Dashboard",visible:!0},{path:"/inventory",icon:eC,label:"Inventory",visible:!0},{path:"/requisition",icon:eA,label:"Requisition (RIS)",visible:!s},{path:"/requisition-requests",icon:ez,label:"Requisition Requests",visible:s},{path:"/reports",icon:eS,label:"Reports",visible:s},{path:"/users",icon:eB,label:"Users",visible:s}].filter(e=>e.visible);return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)("button",{className:"mobile-menu-toggle no-print",onClick:()=>{a(!t)},children:(0,h.jsx)("span",{className:"menu-icon",children:t?"✕":"☰"})}),t&&(0,h.jsx)("div",{className:"sidebar-overlay no-print",onClick:()=>a(!1)}),(0,h.jsxs)("div",{className:`sidebar no-print ${t?"open":""}`,children:[(0,h.jsx)("div",{className:"sidebar-header",children:(0,h.jsxs)("h1",{className:"logo",children:[(0,h.jsx)(eN,{src:ew,alt:"BPDACC Logo",size:40,className:"logo-icon"}),(0,h.jsx)("span",{className:"logo-text",children:"BPDACC Inv"})]})}),(0,h.jsx)("nav",{className:"sidebar-nav",children:r.map(t=>(0,h.jsxs)(eu,{to:t.path,className:`nav-item ${e.pathname===t.path?"active":""}`,onClick:()=>a(!1),children:[(0,h.jsx)(eN,{src:t.icon,alt:t.label,size:20,className:"nav-icon"}),(0,h.jsx)("span",{className:"nav-label",children:t.label})]},t.path))}),(0,h.jsxs)("div",{className:"sidebar-footer",children:[(0,h.jsxs)("div",{className:"user-info",children:[(0,h.jsx)("div",{className:"user-avatar",children:i?.name?.charAt(0)||"U"}),(0,h.jsxs)("div",{children:[(0,h.jsx)("div",{className:"user-name",children:i?.name||"User"}),(0,h.jsx)("div",{className:"user-role",children:s?"Super Admin":"Office User"})]})]}),(0,h.jsx)("button",{onClick:l,style:{width:"100%",marginTop:"15px",padding:"8px",background:"#fee2e2",color:"#dc2626",border:"none",borderRadius:"6px",cursor:"pointer",fontWeight:"600",transition:"background 0.2s"},children:"Logout"})]}),(0,h.jsx)("style",{children:`
          .sidebar {
            width: 220px;
            background: white;
            height: 100vh;
            position: fixed;
            left: 0;
            top: 0;
            display: flex;
            flex-direction: column;
            box-shadow: 2px 0 10px rgba(0, 0, 0, 0.05);
            z-index: 999;
            transition: transform 0.3s ease;
          }

          .sidebar-header {
            padding: 20px 16px;
            border-bottom: 1px solid #e5e7eb;
          }

          .logo {
            font-size: 18px;
            font-weight: 700;
            color: #000000ff;
            display: flex;
            align-items: center;
            gap: 8px;
          }

          .logo-icon {
            font-size: 20px;
          }

          .logo-text {
            display: inline;
          }

          .sidebar-nav {
            flex: 1;
            padding: 16px 0;
            overflow-y: auto;
          }

          .nav-item {
            display: flex;
            align-items: center;
            gap: 10px;
            padding: 12px 16px;
            text-decoration: none;
            color: #6b7280;
            font-weight: 500;
            transition: all 0.2s;
          }

          .nav-item:hover {
            background: #f3f4f6;
            color: #1e40af;
          }

          .nav-item.active {
            background: #eff6ff;
            color: #1e40af;
            border-left: 3px solid #1e40af;
          }

          .nav-icon {
            font-size: 20px;
          }

          .sidebar-footer {
            padding: 20px;
            border-top: 1px solid #e5e7eb;
          }

          .user-info {
            display: flex;
            align-items: center;
            gap: 12px;
          }

          .user-avatar {
            width: 40px;
            height: 40px;
            border-radius: 50%;
            background: linear-gradient(135deg, #3b82f6, #1e40af);
            display: flex;
            align-items: center;
            justify-content: center;
            color: white;
            font-weight: 600;
          }

          .user-name {
            font-size: 14px;
            font-weight: 600;
            color: #1f2937;
          }

          .user-role {
            font-size: 12px;
            color: #9ca3af;
          }

          /* Mobile Menu Toggle */
          .mobile-menu-toggle {
            display: none;
            position: fixed;
            top: 16px;
            left: 16px;
            z-index: 1000;
            background: #1e40af;
            color: white;
            border: none;
            border-radius: 8px;
            width: 44px;
            height: 44px;
            font-size: 24px;
            cursor: pointer;
            box-shadow: 0 2px 8px rgba(30, 64, 175, 0.3);
          }

          .sidebar-overlay {
            display: none;
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: rgba(0, 0, 0, 0.5);
            z-index: 998;
          }

          /* Mobile Responsive */
          @media (max-width: 768px) {
            .sidebar {
              transform: translateX(-100%);
            }

            .sidebar.open {
              transform: translateX(0);
            }

            .mobile-menu-toggle {
              display: flex;
              align-items: center;
              justify-content: center;
            }

            .sidebar-overlay {
              display: block;
            }
          }

          /* Tablet Responsive */
          @media (max-width: 1024px) {
            .logo-text {
              display: none;
            }

            .sidebar {
              width: 70px;
            }

            .nav-label {
              display: none;
            }

            .user-name,
            .user-role {
              display: none;
            }

            .sidebar-header {
              padding: 24px 10px;
            }

            .logo {
              justify-content: center;
            }
          }

          /* Override for mobile - full sidebar */
          @media (max-width: 768px) {
            .sidebar {
              width: 260px;
            }

            .logo-text {
              display: inline;
            }

            .nav-label {
              display: inline;
            }

            .user-name,
            .user-role {
              display: block;
            }

            .sidebar-header {
              padding: 24px 20px;
            }

            .logo {
              justify-content: flex-start;
            }
          }
        `})]})]})};async function eI(e,...t){let a=await fetch(`/api/rpc?t=${Date.now()}`,{method:"POST",headers:{"Content-Type":"application/json","Cache-Control":"no-cache, no-store, must-revalidate",Pragma:"no-cache"},body:JSON.stringify({method:e,args:t}),cache:"no-store"}),i=await a.json();if(!a.ok)throw Error(i.error||"API Error");return i.data}let eE={src:e.i(17149).default,width:36,height:36,blurWidth:0,blurHeight:0},eP={src:e.i(66899).default,width:24,height:24,blurWidth:0,blurHeight:0},eD={src:e.i(12972).default,width:24,height:24,blurWidth:0,blurHeight:0},eU={src:e.i(4058).default,width:36,height:36,blurWidth:0,blurHeight:0},eq={src:e.i(29945).default,width:24,height:24,blurWidth:0,blurHeight:0},eO={src:e.i(25047).default,width:36,height:36,blurWidth:0,blurHeight:0},eM={src:e.i(16245).default,width:24,height:24,blurWidth:0,blurHeight:0},eW={src:e.i(81104).default,width:24,height:24,blurWidth:0,blurHeight:0},eL={src:e.i(82945).default,width:36,height:36,blurWidth:0,blurHeight:0},eT={src:e.i(2795).default,width:24,height:24,blurWidth:0,blurHeight:0},eH=()=>{let e,t,a,{userOffice:i,isAdmin:s}=eg(),[l,r]=(0,x.useState)([]),[n,o]=(0,x.useState)([]),[c,d]=(0,x.useState)([]),[p,u]=(0,x.useState)(!0),[m,f]=(0,x.useState)(""),[g,b]=(0,x.useState)("newest"),[j,y]=(0,x.useState)(s?"All":i),v=async()=>{u(!0);try{let e,t,a,l=s?j:i,n=await (e=l,eI("getItems",e)),c=await (t=s,a=l,eI("getActivities",t,a)),p=await eI("getRequisitions");r(n),o(c),d(p)}catch(e){console.error("Failed to load dashboard data",e)}finally{u(!1)}};(0,x.useEffect)(()=>{v()},[s,i,j]);let N=[...n].filter(e=>{if(!m)return!0;let t=m.toLowerCase();return e.item?.toLowerCase().includes(t)||e.office?.toLowerCase().includes(t)||e.action?.toLowerCase().includes(t)}).sort((e,t)=>{let a=new Date(e.created_at||e.time),i=new Date(t.created_at||t.time);return"newest"===g?i-a:a-i}),w=l.reduce((e,t)=>e+t.batches.reduce((e,t)=>e+t.stock,0),0),k=l.filter(e=>e.batches.reduce((e,t)=>e+t.stock,0)<e.minStock).length,C=c.filter(e=>"Pending"===e.status).length,S=[{label:"Total Stock",value:w.toLocaleString(),icon:eE,bgColor:"#e8f0fe"},{label:"Low Stock",value:k.toString(),icon:eP,bgColor:"#fff799ff"},{label:"Pending Requisitions",value:C.toString(),icon:eD,bgColor:"#f9e49eff"},{label:"Issued Today",value:"0",icon:eU,bgColor:"#e6f9e6"}],A=N.map(e=>({id:e.id,item:e.item,office:e.office,action:e.action,time:e.time,type:e.type,icon:"expired"===e.type?eO:"warning"===e.type?eM:"allocated"===e.type?eW:"added"===e.type||"restocked"===e.type?eL:eq,bgColor:"expired"===e.type?"#ffe6e6":"warning"===e.type?"#fff3cd":"allocated"===e.type?"#eac7ffff":"added"===e.type?"#e6f9e6":"restocked"===e.type?"#dbeafe":"#e6fff3ff"})),z=(e={Hemodialysis:0,"Clinical Laboratory":0,Radiology:0,"Admin Office":0,Unallocated:0},l.forEach(t=>{t.batches.forEach(t=>{e.hasOwnProperty(t.office)&&(e[t.office]+=t.stock)})}),e),B=Object.values(z).reduce((e,t)=>e+t,0)-z.Unallocated;z.Unallocated;let R=Object.values(z).reduce((e,t)=>e+t,0),I=[{name:"Hemodialysis",value:z.Hemodialysis,color:"#3b82f6"},{name:"Clinical Laboratory",value:z["Clinical Laboratory"],color:"#10b981"},{name:"Radiology",value:z.Radiology,color:"#f59e0b"},{name:"Admin Office",value:z["Admin Office"],color:"#8b5cf6"},{name:"Unallocated",value:z.Unallocated,color:"#9ca3af"}],E=(t=[],a=0,I.forEach((e,i)=>{let s=e.value/R;t.push({...e,startPercent:a,endPercent:a+s}),a+=s}),t),P=(e,t,a,i)=>{let s=(i-90)*Math.PI/180;return{x:e+a*Math.cos(s),y:t+a*Math.sin(s)}};return(0,h.jsxs)("div",{className:"dashboard",children:[(0,h.jsxs)("div",{className:"page-header",children:[(0,h.jsxs)("div",{children:[(0,h.jsx)("h1",{className:"page-title",children:"Dashboard"}),(0,h.jsx)("p",{className:"page-subtitle",children:"Welcome back! Here's what's happening."})]}),s&&(0,h.jsxs)("div",{style:{marginLeft:"auto",display:"flex",alignItems:"center",gap:"10px"},children:[(0,h.jsx)("label",{style:{fontSize:"14px",fontWeight:"500",color:"#4b5563"},children:"Filter Office:"}),(0,h.jsxs)("select",{value:j,onChange:e=>y(e.target.value),style:{padding:"8px 12px",borderRadius:"8px",border:"1px solid #d1d5db",background:"white",fontSize:"14px",outline:"none",minWidth:"180px"},children:[(0,h.jsx)("option",{value:"All",children:"All Offices & Unallocated"}),(0,h.jsx)("option",{value:"Hemodialysis",children:"Hemodialysis"}),(0,h.jsx)("option",{value:"Clinical Laboratory",children:"Clinical Laboratory"}),(0,h.jsx)("option",{value:"Radiology",children:"Radiology"}),(0,h.jsx)("option",{value:"Admin Office",children:"Admin Office"})]})]})]}),(0,h.jsx)("div",{className:"stats-grid",children:S.map((e,t)=>(0,h.jsxs)("div",{className:"stat-card",children:[(0,h.jsx)("div",{className:"stat-icon",style:{background:e.bgColor},children:(0,h.jsx)(eN,{src:e.icon,alt:e.label,size:32})}),(0,h.jsxs)("div",{children:[(0,h.jsx)("div",{className:"stat-value",children:e.value}),(0,h.jsx)("div",{className:"stat-label",children:e.label})]})]},t))}),(0,h.jsxs)("div",{className:"dashboard-grid",children:[(0,h.jsxs)("div",{className:"column-wrapper",children:[(0,h.jsxs)("div",{className:"filters-bar",children:[(0,h.jsxs)("div",{className:"search-box",children:[(0,h.jsx)("span",{className:"search-icon",children:(0,h.jsx)(eN,{src:eT,alt:"Search",size:20})}),(0,h.jsx)("input",{type:"text",placeholder:"Search activities...",value:m,onChange:e=>f(e.target.value)})]}),(0,h.jsxs)("select",{className:"select-input",value:g,onChange:e=>b(e.target.value),children:[(0,h.jsx)("option",{value:"newest",children:"Newest First"}),(0,h.jsx)("option",{value:"oldest",children:"Oldest First"})]})]}),(0,h.jsxs)("div",{className:"card",children:[(0,h.jsxs)("div",{className:"card-header",children:[(0,h.jsx)("h2",{className:"card-title",children:"Recent Activity"}),(0,h.jsx)("a",{href:"#",className:"card-link",children:"View All"})]}),(0,h.jsx)("div",{className:"activity-list",children:A.map(e=>(0,h.jsxs)("div",{className:`activity-item ${e.type?e.type:""}`,style:{background:e.bgColor},children:[(0,h.jsx)("div",{className:"activity-icon",children:(0,h.jsx)(eN,{src:e.icon,alt:e.action,size:28})}),(0,h.jsxs)("div",{className:"activity-details",children:[(0,h.jsx)("div",{className:"activity-item-name",children:e.item}),(0,h.jsxs)("div",{className:"activity-meta",children:[(0,h.jsx)("span",{className:"facility-tag",children:e.office}),(0,h.jsx)("span",{className:"activity-time",children:e.time})]})]}),(0,h.jsx)("span",{className:`activity-status ${e.action.toLowerCase().replace(/ /g,"-")}`,children:e.action})]},e.id))})]})]}),(0,h.jsxs)("div",{className:"card",children:[(0,h.jsx)("div",{className:"card-header",children:(0,h.jsx)("h2",{className:"card-title",children:"Inventory Overview"})}),(0,h.jsxs)("div",{className:"donut-chart-container",children:[(0,h.jsxs)("div",{className:"donut-chart-wrapper",children:[(0,h.jsx)("svg",{width:"240",height:"240",viewBox:"0 0 240 240",children:(0,h.jsx)("g",{transform:"translate(120, 120)",children:E.map((e,t)=>{let a,i,s;if(0===e.value)return null;let l=360*e.startPercent,r=360*e.endPercent,n=(a=P(0,0,100,r),i=P(0,0,100,l),s=r-l<=180?"0":"1",["M",a.x,a.y,"A 100 100 0",s,"0",i.x,i.y].join(" "));return(0,h.jsx)("path",{d:n,stroke:e.color,strokeWidth:"40",fill:"none"},t)})})}),(0,h.jsxs)("div",{className:"donut-center",children:[(0,h.jsx)("div",{className:"donut-center-value",children:B}),(0,h.jsx)("div",{className:"donut-center-label",children:"Allocated"})]})]}),(0,h.jsx)("div",{className:"donut-legend",children:I.map((e,t)=>(0,h.jsxs)("div",{className:"legend-item",children:[(0,h.jsx)("span",{className:"legend-color",style:{background:e.color}}),(0,h.jsx)("span",{className:"legend-name",children:e.name}),(0,h.jsx)("span",{className:"legend-value",children:e.value})]},t))})]})]})]}),(0,h.jsx)("style",{children:`
        .dashboard {
          padding: 0;
        }

        .page-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 32px;
          gap: 16px;
        }

        .page-title {
          font-size: 28px;
          font-weight: 700;
          color: #1f2937;
          margin-bottom: 4px;
        }

        .page-subtitle {
          color: #6b7280;
          font-size: 14px;
        }

        .header-actions {
          display: flex;
          gap: 12px;
          flex-wrap: wrap;
        }

        .stats-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 20px;
          margin-bottom: 32px;
        }

        .stat-card {
          background: white;
          padding: 24px;
          border-radius: 12px;
          display: flex;
          align-items: center;
          gap: 16px;
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
        }

        .stat-icon {
          width: 56px;
          height: 56px;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .stat-value {
          font-size: 28px;
          font-weight: 700;
          color: #1f2937;
        }

        .stat-label {
          font-size: 14px;
          color: #6b7280;
        }

        .dashboard-grid {
          display: grid;
          grid-template-columns: 2fr 1fr;
          gap: 20px;
        }

        .column-wrapper {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .filters-bar {
          display: flex;
          gap: 16px;
          flex-wrap: wrap;
        }

        .search-box {
          flex: 1;
          display: flex;
          align-items: center;
          background: white;
          border: 1px solid #e5e7eb;
          border-radius: 8px;
          padding: 0 16px;
          gap: 10px;
          min-width: 200px;
        }

        .search-icon {
          font-size: 18px;
        }

        .search-box input {
          flex: 1;
          border: none;
          padding: 12px 0;
          font-size: 14px;
          outline: none;
        }

        .select-input {
          padding: 12px 16px;
          border: 1px solid #e5e7eb;
          border-radius: 8px;
          font-size: 14px;
          background: white;
          cursor: pointer;
          min-width: 150px;
        }

        .card {
          background: white;
          border-radius: 12px;
          padding: 24px;
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
        }

        .card-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 20px;
        }

        .card-title {
          font-size: 18px;
          font-weight: 600;
          color: #1f2937;
        }

        .card-link {
          font-size: 14px;
          color: #3b82f6;
          text-decoration: none;
        }

        .activity-list {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .activity-item {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 12px;
          border-radius: 8px;
        }

        .activity-icon {
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .activity-details {
          flex: 1;
          min-width: 0;
        }

        .activity-item-name {
          font-weight: 600;
          color: #1f2937;
          margin-bottom: 4px;
        }

        .activity-meta {
          display: flex;
          gap: 8px;
          align-items: center;
          flex-wrap: wrap;
        }

        .facility-tag {
          font-size: 12px;
          padding: 4px 10px;
          background: #e0e7ff;
          color: #3730a3;
          border-radius: 12px;
          white-space: nowrap;
        }

        .activity-time {
          font-size: 12px;
          color: #9ca3af;
        }

        .activity-status {
          font-size: 12px;
          font-weight: 600;
          padding: 6px 12px;
          border-radius: 6px;
          white-space: nowrap;
        }

        .activity-status.issued {
          background: #dcfce7;
          color: #166534;
        }

        .activity-status.requisitioned {
          background: #fef3c7;
          color: #92400e;
        }

        .activity-status.restocked {
          background: #dbeafe;
          color: #1e40af;
        }

        .activity-status.allocated {
          background: #ede9fe;
          color: #6d28d9;
        }

        .activity-status.added {
          background: #dcfce7;
          color: #166534;
        }

        .activity-status.about-to-expire {
          background: #fef3c7;
          color: #92400e;
        }

        .activity-status.expired {
          background: #fee2e2;
          color: #991b1b;
        }



        /* Donut Chart Styles */
        .donut-chart-container {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 24px;
        }

        .donut-chart-wrapper {
          position: relative;
          width: 240px;
          height: 240px;
        }

        .donut-center {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          text-align: center;
        }

        .donut-center-value {
          font-size: 36px;
          font-weight: 700;
          color: #1f2937;
        }

        .donut-center-label {
          font-size: 14px;
          color: #6b7280;
        }

        .donut-legend {
          display: flex;
          flex-direction: column;
          gap: 12px;
          width: 100%;
        }

        .legend-item {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 8px;
          font-size: 14px;
          color: #4b5563;
        }

        .legend-color {
          width: 12px;
          height: 12px;
          border-radius: 6px;
          flex-shrink: 0;
        }

        .legend-name {
          flex: 1;
        }

        .legend-value {
          font-weight: 600;
          color: #1f2937;
        }

        /* Tablet Responsive */
        @media (max-width: 1024px) {
          .stats-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .dashboard-grid {
            grid-template-columns: 1fr;
          }
        }

        /* Mobile Responsive */
        @media (max-width: 768px) {
          .page-header {
            flex-direction: column;
            align-items: flex-start;
          }

          .header-actions {
            width: 100%;
          }

          .select-input {
            flex: 1;
          }

          .page-title {
            font-size: 24px;
          }

          .stats-grid {
            grid-template-columns: 1fr;
          }

          .stat-card {
            padding: 20px;
          }

          .stat-icon {
            width: 48px;
            height: 48px;
          }

          .stat-value {
            font-size: 24px;
          }

          .activity-item {
            flex-wrap: wrap;
          }

          .activity-status {
            width: 100%;
            text-align: center;
          }

          .donut-legend {
            flex-direction: row;
            flex-wrap: wrap;
            justify-content: space-between;
          }

          .legend-item {
            width: 48%;
          }
        }
      `})]})},e$={src:e.i(21692).default,width:24,height:24,blurWidth:0,blurHeight:0},eF={src:e.i(25366).default,width:24,height:24,blurWidth:0,blurHeight:0},eQ={src:e.i(34360).default,width:24,height:24,blurWidth:0,blurHeight:0},e_={src:e.i(20845).default,width:24,height:24,blurWidth:0,blurHeight:0},eJ={src:e.i(53294).default,width:24,height:24,blurWidth:0,blurHeight:0},eK={src:e.i(65327).default,width:24,height:24,blurWidth:0,blurHeight:0},eV={src:e.i(66880).default,width:32,height:32,blurWidth:0,blurHeight:0},eY={src:e.i(34997).default,width:24,height:24,blurWidth:0,blurHeight:0},eZ={src:e.i(30825).default,width:20,height:20,blurWidth:0,blurHeight:0},eG=()=>{let{userRole:e,userOffice:t}=eg(),[a,i]=(0,x.useState)("all"),[s,l]=(0,x.useState)(""),[r,n]=(0,x.useState)(null),[o,c]=(0,x.useState)(null),[d,p]=(0,x.useState)(!1),[u,m]=(0,x.useState)({visible:!1,isEdit:!1,index:null,isRestock:!1}),[f,g]=(0,x.useState)(null),[b,j]=(0,x.useState)({date:"",restockQty:"",ptrNo:"",remarks:"",costPerUnit:"",selectedBatch:null}),[y,v]=(0,x.useState)({date:"",reference:"",selectedBatch:null,receiptQty:0,issuanceQty:0,office:"Hemodialysis",balance:0}),[N,w]=(0,x.useState)(new Set),[k,C]=(0,x.useState)({name:"",sku:"",location:"",unit:"Pieces",minStock:"",initialBatch:{batchId:"",sku:"",quantity:"",assignedFor:"Hemodialysis",brand:"",supplier:"",ptr:"",costPerUnit:"",remarks:""}}),[S,A]=(0,x.useState)(null),[z,B]=(0,x.useState)(null),[R,I]=(0,x.useState)(null),[E,P]=(0,x.useState)([]),[D,U]=(0,x.useState)(!0),q=(e,t)=>{B({type:e,message:t}),setTimeout(()=>B(null),3e3)},O=(e,t,a,i)=>{I({title:e,message:t,onConfirm:a,onCancel:i})},M=async()=>{U(!0);try{let e,t=await eI("getItems",e);P(t)}catch(e){console.error("Failed to load items:",e),P([])}finally{U(!1)}};(0,x.useEffect)(()=>{M()},[]);let W=e=>{if(!e)return!1;let t=new Date,a=new Date(e),i=new Date(a);return i.setMonth(i.getMonth()-2),t>=i&&t<=a},L=e=>{if(!e)return!1;let t=new Date;return new Date(e)<t},T=()=>{let e="ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",t="";for(let a=0;a<10;a++)t+=e.charAt(Math.floor(Math.random()*e.length));return t},H=()=>{let e,t=new Set(E.map(e=>e.sku)),a=0;do e=T(),a++;while(t.has(e)&&a<1e3)if(a>=1e3){let a=0;do{let t=a;e="";for(let a=0;a<10;a++)e="ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"[t%36]+e,t=Math.floor(t/36);a++}while(t.has(e))}return e},$=e=>e.batches.reduce((e,t)=>e+t.stock,0),F=E.filter(e=>{let t=e.name.toLowerCase().includes(s.toLowerCase())||e.sku.toLowerCase().includes(s.toLowerCase()),i="all"===a||e.batches.some(e=>e.office===a);return t&&i}),Q=async()=>{let e=parseInt(k.minStock),t=parseInt(k.initialBatch.quantity);if(!k.name.trim())return void showToast("Item Name is required!","error");if(isNaN(e)||e<=0)return void showToast("Minimum Stock Level must be a number greater than 0!","error");if(isNaN(t)||t<0)return void showToast("Initial Batch Quantity must be a number 0 or greater!","error");let a=k.sku||H(),i={sku:a,name:k.name,location:k.location,unit:k.unit,minStock:e,batches:[{batchId:k.initialBatch.batchId||`${a}-001`,brand:k.initialBatch.brand,supplier:k.initialBatch.supplier,stockNumber:`SN-${Date.now().toString().slice(-4)}`,expiryDate:null,office:k.initialBatch.assignedFor,stock:t,transactionCount:0,ptr:k.initialBatch.ptr,costPerUnit:k.initialBatch.costPerUnit,remarks:k.initialBatch.remarks}],transactions:[{date:new Date().toISOString().split("T")[0],reference:k.initialBatch.batchId||`${a}-001`,selectedBatch:k.initialBatch.batchId||`${a}-001`,receiptQty:t,issuanceQty:0,office:k.initialBatch.assignedFor,balance:t,ptr:k.initialBatch.ptr,costPerUnit:k.initialBatch.costPerUnit,remarks:k.initialBatch.remarks||`${k.initialBatch.assignedFor} - Opening Stock`}]};try{let e,t;await (e=i,eI("addItem",e)),await (t={item:i.name,office:i.batches[0].office,action:"Added",type:"added"},eI("addActivity",t)),await M(),p(!1),q("success","Item added successfully!")}catch(e){console.error("Failed to add item:",e),q("error","Failed to add item: "+e.message)}},_=async()=>{if(!S)return;let e=parseInt(S.minStock);isNaN(e)||e<=0?showToast("Minimum Stock Level must be a number greater than 0!","error"):S.name.trim()?O("Confirm Save","Are you sure you want to save changes to this item?",async()=>{try{let t;await (t={...S,minStock:e},eI("updateItem",t)),await M(),c(null),A(null),q("success","Item updated successfully!")}catch(e){console.error("Failed to update item:",e),q("error","Failed to update item: "+e.message)}finally{I(null)}},()=>{I(null)}):showToast("Item Name is required!","error")},J=async()=>{if(r)if(u.isEdit&&null!==u.index)O("Confirm Save","Are you sure you want to save changes to this transaction?",async()=>{try{let e,t,a,i,s;await (e=r.id,t=u.index,a=y,eI("updateTransaction",e,t,a)),await (i=r.id,eI("recalculateBalances",i)),q("success","Transaction updated successfully!"),await M();let l=(await eI("getItems",s)).find(e=>e.id===r.id);n(l),m({visible:!1,isEdit:!1,index:null})}catch(e){console.error("Failed to save transaction:",e),q("error","Failed to save transaction: "+e.message)}finally{I(null)}},()=>I(null));else try{let e,t,a,i=E.find(e=>e.id===r.id)?.transactions||[],s=i.length>0?i[i.length-1]:null,l=s?s.balance+y.receiptQty-y.issuanceQty:y.receiptQty-y.issuanceQty,o=y.reference;if(y.selectedBatch){let e=r.batches.find(e=>e.batchId===y.selectedBatch);e&&!o&&(o=`${y.selectedBatch}-${String((e.transactionCount||0)+1).padStart(3,"0")}`)}await (e=r.id,t={...y,reference:o,balance:l},eI("addTransaction",e,t)),q("success","Transaction added successfully!"),await M();let c=(await eI("getItems",a)).find(e=>e.id===r.id);n(c),m({visible:!1,isEdit:!1,index:null})}catch(e){console.error("Failed to save transaction:",e),q("error","Failed to save transaction: "+e.message)}},K=async()=>{if(!f)return;let e=Number(b.restockQty);!b.restockQty.trim()||isNaN(e)||e<=0?showToast("Restock quantity must be a number greater than 0!","error"):O("Confirm Restock",`Are you sure you want to restock this item with ${e} units?`,async()=>{try{let t,a,i,s,l=b.selectedBatch?f.batches.find(e=>e.batchId===b.selectedBatch)?.office:"Hemodialysis";await (t=f.id,a={...b,quantity:e,office:l},eI("restockItem",t,a)),await (i={item:f.name,office:l,action:"Restocked",type:"restocked"},eI("addActivity",i)),await M();let r=(await eI("getItems",s)).find(e=>e.id===f.id);n(r),g(null),q("success","Item restocked successfully!")}catch(e){console.error("Failed to restock:",e),q("error","Failed to restock: "+e.message)}finally{I(null)}},()=>{I(null)})};return(0,h.jsxs)("div",{className:"inventory",children:[z&&(0,h.jsx)("div",{style:{position:"fixed",top:"20px",right:"20px",padding:"16px 24px",borderRadius:"8px",color:"#fff",fontWeight:"600",zIndex:9999,boxShadow:"0 4px 12px rgba(0,0,0,0.15)",backgroundColor:"success"===z.type?"#4ade80":"#f87171"},children:z.message}),R&&(0,h.jsx)("div",{className:"modal-overlay",onClick:()=>{},style:{zIndex:1e4},children:(0,h.jsxs)("div",{className:"modal",style:{maxWidth:"400px"},onClick:e=>e.stopPropagation(),children:[(0,h.jsx)("div",{className:"modal-header",children:(0,h.jsx)("h2",{className:"modal-title",children:R.title})}),(0,h.jsx)("div",{className:"modal-body",style:{padding:"24px"},children:(0,h.jsx)("p",{style:{margin:0,color:"#374151",fontSize:"16px"},children:R.message})}),(0,h.jsxs)("div",{className:"modal-footer",style:{display:"flex",gap:"12px",justifyContent:"flex-end"},children:[(0,h.jsx)("button",{className:"btn-secondary",onClick:()=>{R.onCancel&&R.onCancel()},children:"Cancel"}),(0,h.jsx)("button",{className:"btn-primary",onClick:()=>{R.onConfirm&&R.onConfirm()},children:"Confirm"})]})]})}),(0,h.jsxs)("div",{className:"page-header",children:[(0,h.jsxs)("div",{children:[(0,h.jsx)("h1",{className:"page-title",children:"Inventory Management"}),(0,h.jsx)("p",{className:"page-subtitle",children:"Manage and track your medical supplies by batches"})]}),(0,h.jsxs)("button",{className:"btn-primary",onClick:()=>{let e=H();C({name:"",sku:e,location:"",unit:"Pieces",minStock:"",initialBatch:{batchId:`${e}-001`,sku:e,quantity:"",assignedFor:"Hemodialysis",brand:"",supplier:"",ptr:"",costPerUnit:"",remarks:""}}),p(!0)},children:[(0,h.jsx)(eN,{src:eK,alt:"Add Item",size:20}),"Add Item"]})]}),(0,h.jsxs)("div",{className:"filters-bar",children:[(0,h.jsxs)("div",{className:"search-box",children:[(0,h.jsx)("span",{className:"search-icon",children:(0,h.jsx)(eN,{src:eT,alt:"Search",size:20})}),(0,h.jsx)("input",{type:"text",placeholder:"Search items by name or SKU...",value:s,onChange:e=>l(e.target.value)})]}),(0,h.jsxs)("select",{className:"select-input",value:a,onChange:e=>i(e.target.value),children:[(0,h.jsx)("option",{value:"all",children:"All Offices"}),(0,h.jsx)("option",{value:"Hemodialysis",children:"Hemodialysis"}),(0,h.jsx)("option",{value:"Clinical Laboratory",children:"Clinical Laboratory"}),(0,h.jsx)("option",{value:"Radiology",children:"Radiology"}),(0,h.jsx)("option",{value:"Admin Office",children:"Admin Office"})]})]}),(0,h.jsx)("div",{className:"card",children:(0,h.jsx)("div",{className:"table-container",children:(0,h.jsxs)("table",{className:"inventory-table",children:[(0,h.jsx)("thead",{children:(0,h.jsxs)("tr",{children:[(0,h.jsx)("th",{style:{width:"40px"}}),(0,h.jsx)("th",{children:"SKU"}),(0,h.jsx)("th",{children:"Item Name"}),(0,h.jsx)("th",{children:"Total Stock"}),(0,h.jsx)("th",{children:"Location"}),(0,h.jsx)("th",{children:"Status"}),(0,h.jsx)("th",{children:"Actions"})]})}),(0,h.jsx)("tbody",{children:F.map(e=>{let t,a,i,s,l=$(e),r=(t=$(e),a=e.batches.some(e=>L(e.expiryDate)),i=e.batches.some(e=>W(e.expiryDate)),s=t<e.minStock,a?{label:"Expired",type:"expired"}:i?{label:"Near Expiry",type:"near-expiry"}:s?{label:"Low Stock",type:"low"}:{label:"In Stock",type:"ok"}),o=l<e.minStock,d=N.has(e.id);return(0,h.jsxs)(x.default.Fragment,{children:[(0,h.jsxs)("tr",{className:"item-row",onClick:()=>{var t;let a;return t=e.id,void((a=new Set(N)).has(t)?a.delete(t):a.add(t),w(a))},children:[(0,h.jsx)("td",{children:(0,h.jsx)("span",{className:"expand-icon",children:(0,h.jsx)(eN,{src:d?eF:e$,alt:d?"Collapse":"Expand",size:20})})}),(0,h.jsx)("td",{className:"sku",children:e.sku}),(0,h.jsx)("td",{children:(0,h.jsx)("div",{className:"item-name",children:e.name})}),(0,h.jsx)("td",{children:(0,h.jsxs)("div",{className:`stock-cell ${o?"low":""}`,children:[l," ",e.unit]})}),(0,h.jsx)("td",{children:e.location}),(0,h.jsx)("td",{children:(0,h.jsx)("span",{className:`status-badge ${r.type}`,children:r.label})}),(0,h.jsxs)("td",{onClick:e=>e.stopPropagation(),children:[" ",(0,h.jsxs)("div",{className:"actions",children:[(0,h.jsx)("button",{className:"btn-icon",title:"Restock Item",onClick:()=>{g(e),j({date:new Date().toISOString().split("T")[0],restockQty:"",ptrNo:"",remarks:"",costPerUnit:e.batches.length>0&&e.batches[0].costPerUnit||"",selectedBatch:e.batches.length>0?e.batches[0].batchId:null})},children:(0,h.jsx)(eN,{src:eV,alt:"Restock",size:20})}),(0,h.jsx)("button",{className:"btn-icon",title:"View Stock Card",onClick:()=>n(e),children:(0,h.jsx)(eN,{src:e_,alt:"Stock Card",size:20})}),(0,h.jsx)("button",{className:"btn-icon",title:"Edit Item",onClick:()=>{A(JSON.parse(JSON.stringify(e))),c(e)},children:(0,h.jsx)(eN,{src:eQ,alt:"Edit",size:20})})]})]})]}),d&&(0,h.jsx)("tr",{className:"batches-row",children:(0,h.jsx)("td",{colSpan:7,children:(0,h.jsx)("div",{className:"batches-container",children:(0,h.jsxs)("table",{className:"batches-table",children:[(0,h.jsx)("thead",{children:(0,h.jsxs)("tr",{children:[(0,h.jsx)("th",{children:"Batch ID"}),(0,h.jsx)("th",{children:"Brand"}),(0,h.jsx)("th",{children:"Supplier"}),(0,h.jsx)("th",{children:"Stock #"}),(0,h.jsx)("th",{children:"Office"}),(0,h.jsx)("th",{children:"Stock"}),(0,h.jsx)("th",{children:"Expiry Date"}),(0,h.jsx)("th",{children:"Status"})]})}),(0,h.jsx)("tbody",{children:e.batches.map((t,a)=>{var i;let s=L(t.expiryDate),l=W(t.expiryDate),r={label:"OK",type:"ok"};return s?r={label:"Expired",type:"expired"}:l&&(r={label:"Near Expiry",type:"near-expiry"}),(0,h.jsxs)("tr",{children:[(0,h.jsx)("td",{className:"batch-id",children:t.batchId}),(0,h.jsx)("td",{children:t.brand||"-"}),(0,h.jsx)("td",{children:t.supplier||"-"}),(0,h.jsx)("td",{children:t.stockNumber||"-"}),(0,h.jsx)("td",{children:(0,h.jsx)("span",{className:"office-tag",children:t.office})}),(0,h.jsxs)("td",{children:[t.stock," ",e.unit]}),(0,h.jsx)("td",{className:`expiry-cell ${l?"near":s?"expired":""}`,children:(i=t.expiryDate)?new Date(i).toLocaleDateString("en-US",{year:"numeric",month:"short",day:"numeric"}):"N/A"}),(0,h.jsx)("td",{children:(0,h.jsx)("span",{className:`status-badge ${r.type}`,children:r.label})})]},a)})})]})})})})]},e.id)})})]})})}),r&&(0,h.jsx)("div",{className:"modal-overlay",onClick:()=>n(null),children:(0,h.jsxs)("div",{className:"modal modal-large",onClick:e=>e.stopPropagation(),children:[(0,h.jsxs)("div",{className:"modal-header no-print",children:[" ",(0,h.jsxs)("h2",{className:"modal-title",children:["Stock Card: ",r.name]}),(0,h.jsx)("button",{className:"close-btn",onClick:()=>n(null),children:(0,h.jsx)(eN,{src:eY,alt:"Close",size:24})})]}),(0,h.jsxs)("div",{className:"modal-body",children:[(0,h.jsx)("div",{className:"stock-card-header",style:{border:"1px solid #e5e7eb",borderRadius:"8px",padding:"20px",marginBottom:"24px",backgroundColor:"#f9fafb"},children:(0,h.jsxs)("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"20px",alignItems:"start"},children:[(0,h.jsxs)("div",{children:[(0,h.jsxs)("div",{style:{display:"flex",marginBottom:"12px"},children:[(0,h.jsx)("span",{style:{width:"140px",fontWeight:"600",color:"#4b5563"},children:"Location:"}),(0,h.jsx)("span",{style:{color:"#1f2937"},children:r.location||"-"})]}),(0,h.jsxs)("div",{style:{display:"flex",marginBottom:"12px"},children:[(0,h.jsx)("span",{style:{width:"140px",fontWeight:"600",color:"#4b5563"},children:"Item Description:"}),(0,h.jsx)("span",{style:{color:"#1f2937",fontWeight:"500"},children:r.name})]}),(0,h.jsxs)("div",{style:{display:"flex"},children:[(0,h.jsx)("span",{style:{width:"140px",fontWeight:"600",color:"#4b5563"},children:"Unit of Measure:"}),(0,h.jsx)("span",{style:{color:"#1f2937"},children:r.unit})]})]}),(0,h.jsx)("div",{children:(0,h.jsxs)("div",{style:{display:"flex",justifyContent:"flex-end"},children:[(0,h.jsx)("span",{style:{fontWeight:"600",color:"#4b5563"},children:"Stock No.:"}),(0,h.jsx)("span",{style:{marginLeft:"8px",color:"#1f2937",fontWeight:"500"},children:r.sku})]})})]})}),(0,h.jsx)("div",{className:"stock-card-table-container",children:(0,h.jsxs)("table",{className:"stock-card-table",style:{borderCollapse:"collapse",width:"100%"},children:[(0,h.jsxs)("thead",{style:{backgroundColor:"#f3f4f6",color:"#000",fontSize:"18px",fontWeight:"700"},children:[(0,h.jsxs)("tr",{children:[(0,h.jsx)("th",{rowSpan:2,style:{border:"1px solid #d1d5db",padding:"12px",textAlign:"center"},children:"Date"}),(0,h.jsx)("th",{colSpan:3,style:{border:"1px solid #d1d5db",padding:"12px",textAlign:"center"},children:"Quantity"}),(0,h.jsxs)("th",{rowSpan:2,style:{border:"1px solid #d1d5db",padding:"12px",textAlign:"center"},children:["Cost",(0,h.jsx)("br",{}),"(Price/Unit)"]}),(0,h.jsxs)("th",{rowSpan:2,style:{border:"1px solid #d1d5db",padding:"12px",textAlign:"center"},children:["IR/DR/SI/RIS/PTR/BL No.",(0,h.jsx)("br",{}),"No."]}),(0,h.jsx)("th",{rowSpan:2,style:{border:"1px solid #d1d5db",padding:"12px",textAlign:"center"},children:"Recipient/Remarks"})]}),(0,h.jsxs)("tr",{children:[(0,h.jsx)("th",{style:{border:"1px solid #d1d5db",padding:"12px",textAlign:"center"},children:"Received"}),(0,h.jsx)("th",{style:{border:"1px solid #d1d5db",padding:"12px",textAlign:"center"},children:"Issued"}),(0,h.jsx)("th",{style:{border:"1px solid #d1d5db",padding:"12px",textAlign:"center"},children:"Balance"})]})]}),(0,h.jsx)("tbody",{children:r.transactions&&r.transactions.map((e,t)=>(0,h.jsxs)("tr",{style:{backgroundColor:t%2==0?"#f9fafb":"#fff"},children:[(0,h.jsx)("td",{style:{border:"1px solid #d1d5db",padding:"12px",textAlign:"center"},children:new Date(e.date).toLocaleDateString("en-US",{month:"short",day:"numeric",year:"numeric"})}),(0,h.jsx)("td",{style:{border:"1px solid #d1d5db",padding:"12px",textAlign:"center"},children:e.receiptQty>0?e.receiptQty:""}),(0,h.jsx)("td",{style:{border:"1px solid #d1d5db",padding:"12px",textAlign:"center"},children:e.issuanceQty>0?e.issuanceQty:""}),(0,h.jsx)("td",{style:{border:"1px solid #d1d5db",padding:"12px",textAlign:"center",fontWeight:"600",fontSize:"16px"},children:e.balance}),(0,h.jsx)("td",{style:{border:"1px solid #d1d5db",padding:"12px",textAlign:"center"},children:e.costPerUnit||"-"}),(0,h.jsx)("td",{style:{border:"1px solid #d1d5db",padding:"12px",textAlign:"center"},children:e.ptr||e.reference||"-"}),(0,h.jsx)("td",{style:{border:"1px solid #d1d5db",padding:"12px",textAlign:"left"},children:e.remarks||e.office||"-"})]},t))})]})})]}),(0,h.jsxs)("div",{className:"modal-footer no-print",children:[(0,h.jsxs)("button",{className:"btn-primary",onClick:()=>window.print(),children:[(0,h.jsx)(eN,{src:eZ,alt:"Print",size:20}),"Print"]}),(0,h.jsx)("button",{className:"btn-secondary",onClick:()=>n(null),children:"Close"})]})]})}),o&&S&&(0,h.jsx)("div",{className:"modal-overlay",onClick:()=>{c(null),A(null)},children:(0,h.jsxs)("div",{className:"modal modal-large",onClick:e=>e.stopPropagation(),children:[(0,h.jsxs)("div",{className:"modal-header",children:[(0,h.jsx)("h2",{className:"modal-title",children:"Edit Item"}),(0,h.jsx)("button",{className:"close-btn",onClick:()=>{c(null),A(null)},children:(0,h.jsx)(eN,{src:eY,alt:"Close",size:24})})]}),(0,h.jsx)("div",{className:"modal-body",children:(0,h.jsxs)("div",{className:"edit-form",children:[(0,h.jsxs)("div",{className:"form-group",children:[(0,h.jsx)("label",{className:"form-label",children:"Item Name"}),(0,h.jsx)("input",{type:"text",className:"form-input",value:S.name,onChange:e=>A({...S,name:e.target.value})})]}),(0,h.jsxs)("div",{className:"form-group",children:[(0,h.jsx)("label",{className:"form-label",children:"SKU"}),(0,h.jsx)("input",{type:"text",className:"form-input",value:S.sku,disabled:!0})]}),(0,h.jsxs)("div",{className:"form-group",children:[(0,h.jsx)("label",{className:"form-label",children:"Location"}),(0,h.jsx)("input",{type:"text",className:"form-input",value:S.location,onChange:e=>A({...S,location:e.target.value})})]}),(0,h.jsxs)("div",{className:"form-group",children:[(0,h.jsx)("label",{className:"form-label",children:"Minimum Stock Level"}),(0,h.jsx)("input",{type:"text",className:"form-input",value:S.minStock,onChange:e=>A({...S,minStock:e.target.value})})]}),(0,h.jsxs)("div",{className:"form-group",children:[(0,h.jsx)("label",{className:"form-label",children:"Batches"}),(0,h.jsx)("div",{className:"batches-edit-container",children:S.batches.map((e,t)=>(0,h.jsxs)("div",{className:"batch-edit-row",children:[(0,h.jsxs)("div",{className:"form-group mini",children:[(0,h.jsx)("label",{className:"form-label",children:"Batch ID"}),(0,h.jsx)("input",{type:"text",className:"form-input",value:e.batchId,onChange:a=>{let i=[...S.batches];i[t]={...e,batchId:a.target.value},A({...S,batches:i})}})]}),(0,h.jsxs)("div",{className:"form-group mini",children:[(0,h.jsx)("label",{className:"form-label",children:"Brand"}),(0,h.jsx)("input",{type:"text",className:"form-input",value:e.brand,onChange:a=>{let i=[...S.batches];i[t]={...e,brand:a.target.value},A({...S,batches:i})}})]}),(0,h.jsxs)("div",{className:"form-group mini",children:[(0,h.jsx)("label",{className:"form-label",children:"Supplier"}),(0,h.jsx)("input",{type:"text",className:"form-input",value:e.supplier,onChange:a=>{let i=[...S.batches];i[t]={...e,supplier:a.target.value},A({...S,batches:i})}})]}),(0,h.jsxs)("div",{className:"form-group mini",children:[(0,h.jsx)("label",{className:"form-label",children:"Stock #"}),(0,h.jsx)("input",{type:"text",className:"form-input",value:e.stockNumber,onChange:a=>{let i=[...S.batches];i[t]={...e,stockNumber:a.target.value},A({...S,batches:i})}})]}),(0,h.jsxs)("div",{className:"form-group mini",children:[(0,h.jsx)("label",{className:"form-label",children:"Office"}),(0,h.jsxs)("select",{className:"form-input",value:e.office,onChange:a=>{let i=[...S.batches];i[t]={...e,office:a.target.value},A({...S,batches:i})},children:[(0,h.jsx)("option",{value:"Hemodialysis",children:"Hemodialysis"}),(0,h.jsx)("option",{value:"Clinical Laboratory",children:"Clinical Laboratory"}),(0,h.jsx)("option",{value:"Radiology",children:"Radiology"}),(0,h.jsx)("option",{value:"Admin Office",children:"Admin Office"}),(0,h.jsx)("option",{value:"Unallocated",children:"Unallocated"})]})]}),(0,h.jsxs)("div",{className:"form-group mini",children:[(0,h.jsx)("label",{className:"form-label",children:"Stock"}),(0,h.jsx)("input",{type:"text",className:"form-input",value:e.stock,onChange:a=>{let i=[...S.batches];i[t]={...e,stock:parseInt(a.target.value)||0},A({...S,batches:i})}})]}),(0,h.jsx)("div",{className:"form-group mini",children:(0,h.jsxs)("label",{className:"toggle-label",children:[(0,h.jsx)("input",{type:"checkbox",checked:!!e.expiryDate,onChange:a=>{let i=[...S.batches];i[t]={...e,expiryDate:a.target.checked?new Date().toISOString().split("T")[0]:null},A({...S,batches:i})}}),"Has Expiry"]})}),(0,h.jsxs)("div",{className:"form-group mini",children:[(0,h.jsx)("label",{className:"form-label",children:"Expiry Date"}),(0,h.jsx)("input",{type:"date",className:"form-input",value:e.expiryDate||"",disabled:!e.expiryDate,onChange:a=>{let i=[...S.batches];i[t]={...e,expiryDate:a.target.value},A({...S,batches:i})}})]}),(0,h.jsxs)("div",{className:"form-group mini",children:[(0,h.jsx)("label",{className:"form-label",children:"PTR (Document Serial)"}),(0,h.jsx)("input",{type:"text",className:"form-input",value:e.ptr||"",onChange:a=>{let i=[...S.batches];i[t]={...e,ptr:a.target.value},A({...S,batches:i})}})]}),(0,h.jsxs)("div",{className:"form-group mini",children:[(0,h.jsx)("label",{className:"form-label",children:"Cost per Unit"}),(0,h.jsx)("input",{type:"text",className:"form-input",value:e.costPerUnit||"",onChange:a=>{let i=[...S.batches];i[t]={...e,costPerUnit:a.target.value},A({...S,batches:i})}})]}),(0,h.jsx)("button",{className:"btn-icon remove-btn",title:"Remove Batch",onClick:()=>(e=>{if(S.batches.length<=1)return void showToast("An item must have at least one batch!","error");let t=[...S.batches];t.splice(e,1),A({...S,batches:t})})(t),children:(0,h.jsx)(eN,{src:eJ,alt:"Remove",size:20})})]},t))})]})]})}),(0,h.jsxs)("div",{className:"modal-footer",children:[(0,h.jsx)("button",{className:"btn-secondary",onClick:()=>{let e=S.batches.length+1,t={batchId:`${S.sku}-${String(e).padStart(3,"0")}`,brand:"",supplier:"",stockNumber:`SN-${Date.now().toString().slice(-4)}`,office:"Hemodialysis",stock:0,expiryDate:null,transactionCount:0,ptr:"",costPerUnit:"",remarks:""};A({...S,batches:[...S.batches,t]})},children:"Add Batch"}),(0,h.jsxs)("div",{className:"button-group",children:[(0,h.jsx)("button",{className:"btn-secondary",onClick:()=>{c(null),A(null)},children:"Cancel"}),(0,h.jsx)("button",{className:"btn-primary",onClick:_,children:"Save Changes"})]})]})]})}),u.visible&&(0,h.jsx)("div",{className:"modal-overlay",onClick:()=>m({visible:!1,isEdit:!1,index:null}),children:(0,h.jsxs)("div",{className:"modal",onClick:e=>e.stopPropagation(),children:[(0,h.jsxs)("div",{className:"modal-header",children:[(0,h.jsx)("h2",{className:"modal-title",children:u.isEdit?"Edit Transaction":"Add Transaction"}),(0,h.jsx)("button",{className:"close-btn",onClick:()=>m({visible:!1,isEdit:!1,index:null}),children:(0,h.jsx)(eN,{src:eY,alt:"Close",size:24})})]}),(0,h.jsx)("div",{className:"modal-body",children:(0,h.jsxs)("div",{className:"edit-form",children:[(0,h.jsxs)("div",{className:"form-group",children:[(0,h.jsx)("label",{className:"form-label",children:"Date"}),(0,h.jsx)("input",{type:"date",className:"form-input",value:y.date,onChange:e=>v({...y,date:e.target.value})})]}),r&&r.batches&&r.batches.length>0&&(0,h.jsxs)("div",{className:"form-group",children:[(0,h.jsx)("label",{className:"form-label",children:"Batch"}),(0,h.jsxs)("select",{className:"form-input",value:y.selectedBatch||"",onChange:e=>{let t=e.target.value||null,a=y.reference;if(t){let e=r.batches.find(e=>e.batchId===t),i=(e?.transactionCount||0)+1;a=`${t}-${String(i).padStart(3,"0")}`}v({...y,selectedBatch:t,reference:a})},children:[(0,h.jsx)("option",{value:"",children:"Select a Batch"}),r.batches.map((e,t)=>(0,h.jsxs)("option",{value:e.batchId,children:[e.batchId," - ",e.brand||"No Brand"," (",e.stock," ",r.unit,") - Issued ",e.transactionCount||0,"x"]},t))]})]}),(0,h.jsxs)("div",{className:"form-group",children:[(0,h.jsx)("label",{className:"form-label",children:"Reference"}),(0,h.jsx)("input",{type:"text",className:"form-input",value:y.reference,onChange:e=>v({...y,reference:e.target.value})})]}),(0,h.jsxs)("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"12px"},children:[(0,h.jsxs)("div",{className:"form-group",children:[(0,h.jsx)("label",{className:"form-label",children:"Receipt Qty"}),(0,h.jsx)("input",{type:"number",className:"form-input",value:y.receiptQty,onChange:e=>v({...y,receiptQty:parseInt(e.target.value)||0})})]}),(0,h.jsxs)("div",{className:"form-group",children:[(0,h.jsx)("label",{className:"form-label",children:"Issuance Qty"}),(0,h.jsx)("input",{type:"number",className:"form-input",value:y.issuanceQty,onChange:e=>v({...y,issuanceQty:parseInt(e.target.value)||0})})]})]}),(0,h.jsxs)("div",{className:"form-group",children:[(0,h.jsx)("label",{className:"form-label",children:"Office"}),(0,h.jsxs)("select",{className:"form-input",value:y.office,onChange:e=>v({...y,office:e.target.value}),children:[(0,h.jsx)("option",{value:"Hemodialysis",children:"Hemodialysis"}),(0,h.jsx)("option",{value:"Clinical Laboratory",children:"Clinical Laboratory"}),(0,h.jsx)("option",{value:"Radiology",children:"Radiology"}),(0,h.jsx)("option",{value:"Admin Office",children:"Admin Office"}),(0,h.jsx)("option",{value:"All",children:"All"})]})]})]})}),(0,h.jsxs)("div",{className:"modal-footer",children:[(0,h.jsx)("button",{className:"btn-secondary",onClick:()=>m({visible:!1,isEdit:!1,index:null}),children:"Cancel"}),(0,h.jsx)("button",{className:"btn-primary",onClick:J,children:"Save"})]})]})}),f&&(0,h.jsx)("div",{className:"modal-overlay",onClick:()=>g(null),children:(0,h.jsxs)("div",{className:"modal modal-large",onClick:e=>e.stopPropagation(),children:[(0,h.jsxs)("div",{className:"modal-header",children:[(0,h.jsxs)("h2",{className:"modal-title",children:["Restock Item: ",f.name]}),(0,h.jsx)("button",{className:"close-btn",onClick:()=>g(null),children:(0,h.jsx)(eN,{src:eY,alt:"Close",size:24})})]}),(0,h.jsx)("div",{className:"modal-body",children:(0,h.jsxs)("div",{className:"edit-form",children:[(0,h.jsxs)("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"16px",marginBottom:"24px",padding:"16px",backgroundColor:"#f9fafb",borderRadius:"8px"},children:[(0,h.jsxs)("div",{className:"form-group",children:[(0,h.jsx)("label",{className:"form-label",children:"Item Name"}),(0,h.jsx)("input",{type:"text",className:"form-input",value:f.name,disabled:!0})]}),(0,h.jsxs)("div",{className:"form-group",children:[(0,h.jsx)("label",{className:"form-label",children:"SKU"}),(0,h.jsx)("input",{type:"text",className:"form-input",value:f.sku,disabled:!0})]}),(0,h.jsxs)("div",{className:"form-group",children:[(0,h.jsx)("label",{className:"form-label",children:"Current Stock"}),(0,h.jsx)("input",{type:"text",className:"form-input",value:`${$(f)} ${f.unit}`,disabled:!0})]}),(0,h.jsxs)("div",{className:"form-group",children:[(0,h.jsx)("label",{className:"form-label",children:"Current PTR No."}),(0,h.jsx)("input",{type:"text",className:"form-input",value:b.ptrNo||f.batches[0]?.ptr||"-",disabled:!0})]}),(0,h.jsxs)("div",{className:"form-group",children:[(0,h.jsx)("label",{className:"form-label",children:"Current Department"}),(0,h.jsx)("input",{type:"text",className:"form-input",value:f.batches[0]?.office||"Hemodialysis",disabled:!0})]})]}),(0,h.jsxs)("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"16px"},children:[(0,h.jsxs)("div",{className:"form-group",children:[(0,h.jsx)("label",{className:"form-label",children:"Date of Restock"}),(0,h.jsx)("input",{type:"date",className:"form-input",value:b.date,onChange:e=>j({...b,date:e.target.value})})]}),(0,h.jsxs)("div",{className:"form-group",children:[(0,h.jsx)("label",{className:"form-label",children:"Quantity to Add"}),(0,h.jsx)("input",{type:"number",className:"form-input",placeholder:"Enter quantity",value:b.restockQty,onChange:e=>j({...b,restockQty:e.target.value})})]}),(0,h.jsxs)("div",{className:"form-group",children:[(0,h.jsx)("label",{className:"form-label",children:"PTR No."}),(0,h.jsx)("input",{type:"text",className:"form-input",placeholder:"Enter PTR No.",value:b.ptrNo,onChange:e=>j({...b,ptrNo:e.target.value})})]}),(0,h.jsxs)("div",{className:"form-group",children:[(0,h.jsx)("label",{className:"form-label",children:"Cost per Unit"}),(0,h.jsx)("input",{type:"text",className:"form-input",placeholder:"Enter cost per unit",value:b.costPerUnit,onChange:e=>j({...b,costPerUnit:e.target.value})})]}),(0,h.jsxs)("div",{className:"form-group",style:{gridColumn:"span 2"},children:[(0,h.jsx)("label",{className:"form-label",children:"Remarks"}),(0,h.jsx)("input",{type:"text",className:"form-input",placeholder:"Enter remarks",value:b.remarks,onChange:e=>j({...b,remarks:e.target.value})})]}),f.batches&&f.batches.length>0&&(0,h.jsxs)("div",{className:"form-group",style:{gridColumn:"span 2"},children:[(0,h.jsx)("label",{className:"form-label",children:"Select Batch"}),(0,h.jsx)("select",{className:"form-input",value:b.selectedBatch||"",onChange:e=>j({...b,selectedBatch:e.target.value}),children:f.batches.map((e,t)=>(0,h.jsxs)("option",{value:e.batchId,children:[e.batchId," - ",e.brand||"No Brand"," (",e.stock," ",f.unit,")"]},t))})]})]})]})}),(0,h.jsxs)("div",{className:"modal-footer",children:[(0,h.jsx)("button",{className:"btn-secondary",onClick:()=>g(null),children:"Cancel"}),(0,h.jsx)("button",{className:"btn-primary",onClick:K,children:"Save Restock"})]})]})}),d&&(0,h.jsx)("div",{className:"modal-overlay",onClick:()=>p(!1),children:(0,h.jsxs)("div",{className:"modal modal-large",onClick:e=>e.stopPropagation(),children:[(0,h.jsxs)("div",{className:"modal-header",children:[(0,h.jsx)("h2",{className:"modal-title",children:"Add New Item"}),(0,h.jsx)("button",{className:"close-btn",onClick:()=>p(!1),children:(0,h.jsx)(eN,{src:eY,alt:"Close",size:24})})]}),(0,h.jsx)("div",{className:"modal-body",children:(0,h.jsxs)("div",{className:"edit-form",children:[(0,h.jsx)("h3",{style:{marginBottom:"16px",color:"#1f2937"},children:"Item Details"}),(0,h.jsxs)("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"16px",marginBottom:"24px"},children:[(0,h.jsxs)("div",{className:"form-group",children:[(0,h.jsx)("label",{className:"form-label",children:"Item Name"}),(0,h.jsx)("input",{type:"text",className:"form-input",placeholder:"Enter item name",value:k.name,onChange:e=>C({...k,name:e.target.value})})]}),(0,h.jsxs)("div",{className:"form-group",children:[(0,h.jsx)("label",{className:"form-label",children:"SKU "}),(0,h.jsx)("input",{type:"text",className:"form-input",value:k.sku,disabled:!0})]}),(0,h.jsxs)("div",{className:"form-group",children:[(0,h.jsx)("label",{className:"form-label",children:"Unit of Measurement"}),(0,h.jsxs)("select",{className:"form-input",value:k.unit,onChange:e=>C({...k,unit:e.target.value}),children:[(0,h.jsx)("option",{value:"Pieces",children:"Pieces"}),(0,h.jsx)("option",{value:"Packs",children:"Packs"}),(0,h.jsx)("option",{value:"Boxes",children:"Boxes"}),(0,h.jsx)("option",{value:"Bottles",children:"Bottles"}),(0,h.jsx)("option",{value:"Vials",children:"Vials"}),(0,h.jsx)("option",{value:"Sets",children:"Sets"})]})]}),(0,h.jsxs)("div",{className:"form-group",children:[(0,h.jsx)("label",{className:"form-label",children:"Location"}),(0,h.jsx)("input",{type:"text",className:"form-input",placeholder:"Enter location",value:k.location,onChange:e=>C({...k,location:e.target.value})})]}),(0,h.jsxs)("div",{className:"form-group",children:[(0,h.jsx)("label",{className:"form-label",children:"Minimum Stock Level"}),(0,h.jsx)("input",{type:"text",className:"form-input",placeholder:"Enter minimum stock",value:k.minStock,onChange:e=>C({...k,minStock:e.target.value})})]})]}),(0,h.jsxs)("h3",{style:{marginBottom:"16px",color:"#1f2937"},children:["Add Initial Batch",(0,h.jsx)("span",{style:{color:"#dc2626",marginLeft:"8px"},children:"(Required)"})]}),(0,h.jsxs)("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gap:"16px",marginBottom:"16px"},children:[(0,h.jsxs)("div",{className:"form-group",children:[(0,h.jsx)("label",{className:"form-label",children:"Batch ID"}),(0,h.jsx)("input",{type:"text",className:"form-input",value:k.initialBatch.batchId,disabled:!0})]}),(0,h.jsxs)("div",{className:"form-group",children:[(0,h.jsx)("label",{className:"form-label",children:"SKU"}),(0,h.jsx)("input",{type:"text",className:"form-input",value:k.initialBatch.sku,disabled:!0})]}),(0,h.jsxs)("div",{className:"form-group",children:[(0,h.jsx)("label",{className:"form-label",children:"Quantity"}),(0,h.jsx)("input",{type:"text",className:"form-input",placeholder:"Enter quantity",value:k.initialBatch.quantity,onChange:e=>C({...k,initialBatch:{...k.initialBatch,quantity:e.target.value}})})]}),(0,h.jsxs)("div",{className:"form-group",children:[(0,h.jsx)("label",{className:"form-label",children:"Assigned For"}),(0,h.jsxs)("select",{className:"form-input",value:k.initialBatch.assignedFor,onChange:e=>C({...k,initialBatch:{...k.initialBatch,assignedFor:e.target.value}}),children:[(0,h.jsx)("option",{value:"Hemodialysis",children:"Hemodialysis"}),(0,h.jsx)("option",{value:"Clinical Laboratory",children:"Clinical Laboratory"}),(0,h.jsx)("option",{value:"Radiology",children:"Radiology"}),(0,h.jsx)("option",{value:"Admin Office",children:"Admin Office"}),(0,h.jsx)("option",{value:"Unallocated",children:"Unallocated"})]})]}),(0,h.jsxs)("div",{className:"form-group",children:[(0,h.jsx)("label",{className:"form-label",children:"Brand"}),(0,h.jsx)("input",{type:"text",className:"form-input",placeholder:"Enter brand",value:k.initialBatch.brand,onChange:e=>C({...k,initialBatch:{...k.initialBatch,brand:e.target.value}})})]}),(0,h.jsxs)("div",{className:"form-group",children:[(0,h.jsx)("label",{className:"form-label",children:"Supplier"}),(0,h.jsx)("input",{type:"text",className:"form-input",placeholder:"Enter supplier",value:k.initialBatch.supplier,onChange:e=>C({...k,initialBatch:{...k.initialBatch,supplier:e.target.value}})})]}),(0,h.jsxs)("div",{className:"form-group",children:[(0,h.jsx)("label",{className:"form-label",children:"PTR (Document Serial)"}),(0,h.jsx)("input",{type:"text",className:"form-input",placeholder:"Enter PTR",value:k.initialBatch.ptr,onChange:e=>C({...k,initialBatch:{...k.initialBatch,ptr:e.target.value}})})]}),(0,h.jsxs)("div",{className:"form-group",children:[(0,h.jsx)("label",{className:"form-label",children:"Cost per Unit"}),(0,h.jsx)("input",{type:"text",className:"form-input",placeholder:"Enter Cost",value:k.initialBatch.costPerUnit,onChange:e=>C({...k,initialBatch:{...k.initialBatch,costPerUnit:e.target.value}})})]}),(0,h.jsxs)("div",{className:"form-group",children:[(0,h.jsx)("label",{className:"form-label",children:"Date (Auto-generated)"}),(0,h.jsx)("input",{type:"text",className:"form-input",value:new Date().toISOString().split("T")[0],disabled:!0})]}),(0,h.jsxs)("div",{className:"form-group",children:[(0,h.jsx)("label",{className:"form-label",children:"Remarks"}),(0,h.jsx)("input",{type:"text",className:"form-input",placeholder:"Enter remarks",value:k.initialBatch.remarks,onChange:e=>C({...k,initialBatch:{...k.initialBatch,remarks:e.target.value}})})]})]})]})}),(0,h.jsx)("div",{className:"modal-footer",children:(0,h.jsxs)("div",{className:"button-group",style:{marginLeft:"auto"},children:[(0,h.jsx)("button",{className:"btn-secondary",onClick:()=>p(!1),children:"Cancel"}),(0,h.jsxs)("button",{className:"btn-primary",onClick:Q,children:[(0,h.jsx)(eN,{src:eK,alt:"Add",size:20}),"Add Item"]})]})})]})}),(0,h.jsx)("style",{children:`
        .inventory {
          padding: 0;
        }

        .page-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 24px;
          gap: 16px;
        }

        .page-title {
          font-size: 28px;
          font-weight: 700;
          color: #1f2937;
          margin-bottom: 4px;
        }

        .page-subtitle {
          color: #6b7280;
          font-size: 14px;
        }

        .btn-primary {
          background: #1e40af;
          color: white;
          border: none;
          padding: 12px 24px;
          border-radius: 8px;
          font-weight: 600;
          cursor: pointer;
          font-size: 14px;
          white-space: nowrap;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
        }

        .btn-secondary {
          background: white;
          color: #1f2937;
          border: 1px solid #e5e7eb;
          padding: 10px 20px;
          border-radius: 8px;
          font-weight: 600;
          cursor: pointer;
          font-size: 14px;
          white-space: nowrap;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
        }

        .filters-bar {
          display: flex;
          gap: 16px;
          margin-bottom: 24px;
          flex-wrap: wrap;
        }

        .search-box {
          flex: 1;
          display: flex;
          align-items: center;
          background: white;
          border: 1px solid #e5e7eb;
          border-radius: 8px;
          padding: 0 16px;
          gap: 10px;
          min-width: 200px;
        }

        .search-icon {
          font-size: 18px;
        }

        .search-box input {
          flex: 1;
          border: none;
          padding: 12px 0;
          font-size: 14px;
          outline: none;
        }

        .select-input {
          padding: 12px 16px;
          border: 1px solid #e5e7eb;
          border-radius: 8px;
          font-size: 14px;
          background: white;
          cursor: pointer;
          min-width: 150px;
        }

        .card {
          background: white;
          border-radius: 12px;
          padding: 0;
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
          overflow: hidden;
        }

        .table-container {
          overflow-x: auto;
        }

        .inventory-table {
          width: 100%;
          border-collapse: collapse;
        }

        .inventory-table th,
        .inventory-table td {
          padding: 16px 20px;
          text-align: left;
        }

        .inventory-table thead {
          background: #f9fafb;
        }

        .inventory-table th {
          font-size: 12px;
          font-weight: 600;
          color: #6b7280;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          white-space: nowrap;
        }

        .inventory-table .item-row {
          border-bottom: 1px solid #f3f4f6;
          cursor: pointer;
        }

        .inventory-table .item-row:hover {
          background: #f9fafb;
        }

        .sku {
          font-family: monospace;
          color: #6b7280;
        }

        .item-name {
          font-weight: 600;
          color: #1f2937;
        }

        .office-tag {
          display: inline-block;
          padding: 4px 10px;
          background: #f3f4f6;
          color: #4b5563;
          border-radius: 8px;
          font-size: 12px;
          font-weight: 500;
        }

        .stock-cell {
          font-weight: 600;
          white-space: nowrap;
        }

        .stock-cell.low {
          color: #dc2626;
        }

        .expiry-cell {
          font-weight: 500;
          white-space: nowrap;
        }

        .expiry-cell.near {
          color: #f59e0b;
          font-weight: 600;
        }

        .expiry-cell.expired {
          color: #dc2626;
          font-weight: 600;
        }

        .status-badge {
          display: inline-block;
          padding: 6px 12px;
          border-radius: 6px;
          font-size: 12px;
          font-weight: 600;
          white-space: nowrap;
        }

        .status-badge.ok {
          background: #dcfce7;
          color: #166534;
        }

        .status-badge.low {
          background: #fee2e2;
          color: #991b1b;
        }

        .status-badge.near-expiry {
          background: #fef3c7;
          color: #92400e;
        }

        .status-badge.expired {
          background: #fecaca;
          color: #7f1d1d;
        }

        .actions {
          display: flex;
          gap: 8px;
        }

        .btn-icon {
          background: none;
          border: none;
          font-size: 18px;
          cursor: pointer;
          padding: 4px;
          border-radius: 4px;
          transition: background 0.2s;
        }

        .btn-icon:hover {
          background: #f3f4f6;
        }

        .expand-icon {
          font-size: 10px;
          color: #6b7280;
        }

        .batches-row {
          background: #f9fafb;
        }

        .batches-container {
          padding: 12px 24px 24px;
        }

        .batches-table {
          width: 100%;
          border-collapse: collapse;
        }

        .batches-table th {
          background: transparent;
          font-size: 11px;
          font-weight: 600;
          color: #6b7280;
          padding: 8px 12px;
          text-align: left;
        }

        .batches-table td {
          padding: 10px 12px;
          font-size: 13px;
        }

        .batches-table tr {
          border-bottom: 1px solid #e5e7eb;
        }

        .batch-id {
          font-family: monospace;
          color: #374151;
        }

        /* Toggle Label */
        .toggle-label {
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 14px;
          color: #1f2937;
          cursor: pointer;
        }

        .toggle-label input {
          width: auto;
          cursor: pointer;
        }

        /* Modal Styles */
        .modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.5);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 1000;
        }

        /* Print Styles */
        @media print {
          .no-print {
            display: none !important;
          }
          .modal {
            box-shadow: none !important;
            max-width: 100% !important;
            max-height: none !important;
            overflow: visible !important;
          }
          .stock-card-table-container {
            overflow: visible !important;
          }
          .modal-body {
            overflow: visible !important;
            padding: 0 !important;
          }
        }

        .modal {
          background: white;
          border-radius: 12px;
          width: 100%;
          max-width: 600px;
          max-height: 90vh;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
        }

        .modal-large {
          max-width: 1100px;
        }

        .modal-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 20px 24px;
          border-bottom: 1px solid #f3f4f6;
        }

        .modal-title {
          font-size: 20px;
          font-weight: 700;
          color: #1f2937;
        }

        .close-btn {
          background: none;
          border: none;
          font-size: 28px;
          cursor: pointer;
          color: #6b7280;
          line-height: 1;
          padding: 0 8px;
          border-radius: 4px;
        }

        .close-btn:hover {
          background: #f3f4f6;
        }

        .modal-body {
          padding: 24px;
          overflow-y: auto;
        }

        .modal-footer {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 12px;
          padding: 20px 24px;
          border-top: 1px solid #f3f4f6;
        }

        .button-group {
          display: flex;
          gap: 12px;
        }

        .detail-section {
          margin-bottom: 24px;
        }

        .detail-title {
          font-size: 18px;
          font-weight: 700;
          color: #1f2937;
          margin-bottom: 16px;
        }

        .detail-subtitle {
          font-size: 14px;
          font-weight: 600;
          color: #1f2937;
          margin-bottom: 12px;
        }

        .detail-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 12px;
        }

        .detail-item {
          display: flex;
          flex-direction: column;
        }

        .detail-label {
          font-size: 12px;
          color: #6b7280;
          font-weight: 500;
          margin-bottom: 4px;
        }

        .detail-value {
          font-size: 14px;
          color: #1f2937;
          font-weight: 500;
        }

        .allocations-table {
          width: 100%;
          border-collapse: collapse;
        }

        .allocations-table th,
        .allocations-table td {
          padding: 10px 14px;
          border-bottom: 1px solid #f3f4f6;
          text-align: left;
        }

        .allocations-table th {
          font-size: 12px;
          font-weight: 600;
          color: #6b7280;
          background: #f9fafb;
        }

        .allocations-table td {
          font-size: 14px;
          color: #1f2937;
        }

        .allocations-table tfoot td {
          font-weight: 700;
          border-top: 2px solid #f3f4f6;
        }

        .edit-form {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .form-group {
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        .form-group.mini {
          flex: 1;
          min-width: 0;
        }

        .form-label {
          font-size: 14px;
          font-weight: 600;
          color: #4b5563;
        }

        .form-input {
          padding: 10px 14px;
          border: 1px solid #d1d5db;
          border-radius: 6px;
          font-size: 14px;
          outline: none;
        }

        .form-input:focus {
          border-color: #1e40af;
        }

        /* Stock Card Styles */
        .stock-card-header {
          display: flex;
          flex-direction: column;
          gap: 24px;
          margin-bottom: 24px;
          border: 2px solid #1f2937;
          padding: 20px;
          border-radius: 8px;
        }

        .clinic-info {
          text-align: center;
        }

        .clinic-info h3 {
          margin: 0 0 4px 0;
          font-size: 18px;
          font-weight: 700;
          color: #1f2937;
        }

        .clinic-info p {
          margin: 0;
          font-size: 14px;
          color: #4b5563;
        }

        .stock-card-info {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 16px;
        }

        .stock-card-field {
          display: flex;
          justify-content: space-between;
          gap: 12px;
        }

        .field-label {
          font-size: 14px;
          font-weight: 600;
          color: #1f2937;
        }

        .field-value {
          font-size: 14px;
          color: #4b5563;
        }

        .stock-card-table-container {
          overflow-x: auto;
        }

        .stock-card-table {
          width: 100%;
          border-collapse: collapse;
        }

        .stock-card-table th,
        .stock-card-table td {
          border: 1px solid #000;
          padding: 10px;
          text-align: left;
        }

        .stock-card-table th {
          background: #f3f4f6;
          font-weight: 700;
          font-size: 12px;
          text-align: center;
        }

        .table-header-group {
          border-left: 1px solid #000;
          background: #e5e7eb;
        }

        .table-header-space {
          width: 40px;
        }

        .transaction-actions {
          display: flex;
          gap: 8px;
          justify-content: center;
        }

        .actions-header {
          width: 100px;
        }

        .form-input:disabled {
          background: #f3f4f6;
          cursor: not-allowed;
        }

        .batches-edit-container {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .batch-edit-row {
          display: flex;
          gap: 12px;
          padding: 12px;
          background: #f9fafb;
          border-radius: 8px;
          align-items: flex-end;
          flex-wrap: wrap;
        }

        .remove-btn {
          color: #dc2626;
        }

        /* Responsive Styles */
        @media (max-width: 1024px) {
          .filters-bar {
            gap: 12px;
          }

          .search-box {
            min-width: 100%;
            order: -1;
          }

          .select-input {
            flex: 1;
          }

          .batch-edit-row {
            flex-direction: column;
            align-items: stretch;
          }

          .form-group.mini {
            width: 100%;
          }
        }

        @media (max-width: 768px) {
          .page-header {
            flex-direction: column;
            align-items: flex-start;
          }

          .btn-primary {
            width: 100%;
          }

          .page-title {
            font-size: 24px;
          }

          .filters-bar {
            gap: 12px;
          }

          .select-input {
            width: 100%;
          }

          .modal {
            margin: 16px;
            border-radius: 12px;
          }

          .detail-grid {
            grid-template-columns: 1fr;
          }

          .modal-footer {
            flex-direction: column;
          }

          .button-group {
            width: 100%;
            flex-direction: column;
          }

          .button-group button {
            width: 100%;
          }
        }
      `})]})},eX=()=>(0,h.jsxs)("div",{className:"requisition-page",children:[(0,h.jsx)("div",{className:"placeholder-container",children:(0,h.jsxs)("div",{className:"placeholder-content",children:[(0,h.jsx)("h1",{children:"Requisition & Issue Slip (RIS)"}),(0,h.jsx)("p",{children:"The updated Requisition UI is currently under construction."}),(0,h.jsx)("div",{className:"placeholder-icon",children:"🚧"}),(0,h.jsx)("p",{className:"placeholder-subtext",children:"Check back soon for the new feature!"})]})}),(0,h.jsx)("style",{children:`
        .requisition-page {
          padding: 24px;
          height: calc(100vh - 48px);
        }
        .placeholder-container {
          display: flex;
          align-items: center;
          justify-content: center;
          height: 100%;
          background: white;
          border-radius: 12px;
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
        }
        .placeholder-content {
          text-align: center;
          padding: 40px;
        }
        .placeholder-content h1 {
          color: #1e40af;
          margin-bottom: 16px;
        }
        .placeholder-content p {
          color: #4b5563;
          font-size: 16px;
          margin-bottom: 24px;
        }
        .placeholder-icon {
          font-size: 64px;
          margin-bottom: 24px;
          animation: bounce 2s infinite;
        }
        .placeholder-subtext {
          color: #9ca3af !important;
          font-size: 14px !important;
        }
        @keyframes bounce {
          0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
          40% { transform: translateY(-20px); }
          60% { transform: translateY(-10px); }
        }
      `})]}),e0=()=>{let[e,t]=(0,x.useState)([{id:1,risNo:"RIS-2026-001",requestDate:"2026-06-29",requestedBy:"Maria Santos",role:"Nurse",office:"Hemodialysis",items:[{name:"Syringes 5ml",quantity:50,unit:"pcs"},{name:"Gauze Pads (4x4)",quantity:20,unit:"packs"}],status:"Pending"},{id:2,risNo:"RIS-2026-002",requestDate:"2026-06-28",requestedBy:"Jose Reyes",role:"Lab Tech",office:"Clinical Laboratory",items:[{name:"Microscope Slides",quantity:100,unit:"pcs"},{name:"Test Tubes",quantity:50,unit:"pcs"}],status:"Approved"},{id:3,risNo:"RIS-2026-003",requestDate:"2026-06-27",requestedBy:"Anna Cruz",role:"Pharmacist",office:"Radiology",items:[{name:"X-Ray Film",quantity:30,unit:"sheets"}],status:"Rejected"}]),[a,i]=(0,x.useState)(null),s=(a,i)=>{t(e.map(e=>e.id===a?{...e,status:i}:e))};return(0,h.jsxs)("div",{className:"page",children:[(0,h.jsxs)("div",{className:"page-header",children:[(0,h.jsx)("h1",{className:"page-title",children:"Requisition Requests"}),(0,h.jsx)("p",{className:"page-description",children:"View and manage requisition requests from other users"})]}),(0,h.jsxs)("div",{className:"card",children:[(0,h.jsx)("div",{className:"card-header",children:(0,h.jsx)("h2",{className:"card-title",children:"All Requests"})}),(0,h.jsx)("div",{className:"table-container",children:(0,h.jsxs)("table",{className:"table",children:[(0,h.jsx)("thead",{children:(0,h.jsxs)("tr",{children:[(0,h.jsx)("th",{children:"RIS No."}),(0,h.jsx)("th",{children:"Date"}),(0,h.jsx)("th",{children:"Requested By"}),(0,h.jsx)("th",{children:"Office"}),(0,h.jsx)("th",{children:"Status"}),(0,h.jsx)("th",{children:"Actions"})]})}),(0,h.jsx)("tbody",{children:e.map(e=>(0,h.jsxs)("tr",{children:[(0,h.jsx)("td",{children:e.risNo}),(0,h.jsx)("td",{children:new Date(e.requestDate).toLocaleDateString()}),(0,h.jsxs)("td",{children:[e.requestedBy,(0,h.jsx)("br",{}),(0,h.jsx)("span",{className:"badge badge-info",children:e.role})]}),(0,h.jsx)("td",{children:e.office}),(0,h.jsx)("td",{children:(0,h.jsx)("span",{className:`badge ${"Pending"===e.status?"badge-warning":"Approved"===e.status?"badge-success":"badge-danger"}`,children:e.status})}),(0,h.jsx)("td",{children:(0,h.jsxs)("div",{className:"actions",style:{display:"flex",gap:"8px"},children:[(0,h.jsx)("button",{className:"btn-secondary",style:{fontSize:"12px",padding:"4px 8px"},onClick:()=>{i(e)},children:"View"}),"Pending"===e.status&&(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)("button",{className:"btn-primary",style:{fontSize:"12px",padding:"4px 8px",background:"#10b981"},onClick:()=>s(e.id,"Approved"),children:"Approve"}),(0,h.jsx)("button",{className:"btn-secondary",style:{fontSize:"12px",padding:"4px 8px",background:"#ef4444",color:"white"},onClick:()=>s(e.id,"Rejected"),children:"Reject"})]})]})})]},e.id))})]})})]}),a&&(0,h.jsx)("div",{className:"modal-overlay",onClick:()=>i(null),children:(0,h.jsxs)("div",{className:"modal",onClick:e=>e.stopPropagation(),children:[(0,h.jsxs)("div",{className:"modal-header",children:[(0,h.jsxs)("h2",{className:"modal-title",children:["Request Details: ",a.risNo]}),(0,h.jsx)("button",{className:"close-btn",onClick:()=>i(null),children:"×"})]}),(0,h.jsxs)("div",{className:"modal-body",children:[(0,h.jsxs)("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"16px",marginBottom:"24px"},children:[(0,h.jsxs)("div",{children:[(0,h.jsx)("h4",{style:{marginBottom:"8px",color:"#6b7280"},children:"Request Date"}),(0,h.jsx)("p",{children:new Date(a.requestDate).toLocaleDateString()})]}),(0,h.jsxs)("div",{children:[(0,h.jsx)("h4",{style:{marginBottom:"8px",color:"#6b7280"},children:"Requested By"}),(0,h.jsxs)("p",{children:[a.requestedBy," (",a.role,")"]})]}),(0,h.jsxs)("div",{children:[(0,h.jsx)("h4",{style:{marginBottom:"8px",color:"#6b7280"},children:"Office"}),(0,h.jsx)("p",{children:a.office})]}),(0,h.jsxs)("div",{children:[(0,h.jsx)("h4",{style:{marginBottom:"8px",color:"#6b7280"},children:"Status"}),(0,h.jsx)("span",{className:`badge ${"Pending"===a.status?"badge-warning":"Approved"===a.status?"badge-success":"badge-danger"}`,children:a.status})]})]}),(0,h.jsxs)("div",{children:[(0,h.jsx)("h4",{style:{marginBottom:"8px",color:"#6b7280"},children:"Requested Items"}),(0,h.jsxs)("table",{className:"table",style:{marginTop:"8px"},children:[(0,h.jsx)("thead",{children:(0,h.jsxs)("tr",{children:[(0,h.jsx)("th",{children:"Item"}),(0,h.jsx)("th",{children:"Quantity"}),(0,h.jsx)("th",{children:"Unit"})]})}),(0,h.jsx)("tbody",{children:a.items.map((e,t)=>(0,h.jsxs)("tr",{children:[(0,h.jsx)("td",{children:e.name}),(0,h.jsx)("td",{children:e.quantity}),(0,h.jsx)("td",{children:e.unit})]},t))})]})]})]}),(0,h.jsxs)("div",{className:"modal-footer",children:["Pending"===a.status&&(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)("button",{className:"btn-primary",style:{background:"#10b981"},onClick:()=>{s(a.id,"Approved"),i(null)},children:"Approve Request"}),(0,h.jsx)("button",{className:"btn-secondary",style:{background:"#ef4444",color:"white"},onClick:()=>{s(a.id,"Rejected"),i(null)},children:"Reject Request"})]}),(0,h.jsx)("button",{className:"btn-secondary",onClick:()=>i(null),children:"Close"})]})]})}),(0,h.jsx)("style",{children:`
        .page {
          padding: 24px;
          max-width: 1400px;
          margin: 0 auto;
        }

        .page-header {
          margin-bottom: 24px;
        }

        .page-title {
          font-size: 28px;
          font-weight: 700;
          color: #1f2937;
          margin-bottom: 8px;
        }

        .page-description {
          color: #6b7280;
          font-size: 14px;
        }

        .card {
          background: white;
          border-radius: 10px;
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
          margin-bottom: 24px;
        }

        .card-header {
          padding: 16px 20px;
          border-bottom: 1px solid #e5e7eb;
        }

        .card-title {
          font-size: 16px;
          font-weight: 600;
          color: #1f2937;
          margin: 0;
        }

        .table-container {
          overflow-x: auto;
          padding: 0 20px 20px;
        }

        .table {
          width: 100%;
          border-collapse: collapse;
        }

        .table th,
        .table td {
          padding: 12px 16px;
          text-align: left;
          border-bottom: 1px solid #e5e7eb;
        }

        .table th {
          font-weight: 600;
          color: #374151;
          background: #f9fafb;
        }

        .table td {
          color: #4b5563;
        }

        .btn-primary {
          background: #1e40af;
          color: white;
          border: none;
          padding: 10px 20px;
          border-radius: 6px;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.2s;
        }

        .btn-primary:hover {
          background: #1e3a8a;
        }

        .btn-secondary {
          background: #f3f4f6;
          color: #1f2937;
          border: none;
          padding: 10px 20px;
          border-radius: 6px;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.2s;
        }

        .btn-secondary:hover {
          background: #e5e7eb;
        }

        .badge {
          display: inline-block;
          padding: 4px 12px;
          border-radius: 12px;
          font-size: 12px;
          font-weight: 500;
        }

        .badge-success {
          background: #d1fae5;
          color: #065f46;
        }

        .badge-warning {
          background: #fef3c7;
          color: #92400e;
        }

        .badge-danger {
          background: #fee2e2;
          color: #991b1b;
        }

        .badge-info {
          background: #dbeafe;
          color: #1e40af;
        }

        /* Modal Styles */
        .modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.5);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 1000;
        }

        .modal {
          background: white;
          border-radius: 10px;
          max-width: 600px;
          width: 90%;
          max-height: 90vh;
          overflow-y: auto;
          box-shadow: 0 10px 40px rgba(0, 0, 0, 0.2);
        }

        .modal-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 20px;
          border-bottom: 1px solid #e5e7eb;
        }

        .modal-title {
          font-size: 18px;
          font-weight: 600;
          color: #1f2937;
          margin: 0;
        }

        .close-btn {
          background: none;
          border: none;
          font-size: 24px;
          color: #9ca3af;
          cursor: pointer;
          transition: color 0.2s;
        }

        .close-btn:hover {
          color: #374151;
        }

        .modal-body {
          padding: 20px;
        }

        .modal-footer {
          display: flex;
          justify-content: flex-end;
          gap: 12px;
          padding: 20px;
          border-top: 1px solid #e5e7eb;
        }

        /* Responsive */
        @media (max-width: 768px) {
          .page {
            padding: 16px;
          }

          .page-title {
            font-size: 22px;
          }
        }
      `})]})},e1=()=>{let e,t,a,i,s,l,r,n,o,c,d,p,u,[m,f]=(0,x.useState)("monthly"),[g,b]=(0,x.useState)(new Date().toISOString().slice(0,7)),[j,y]=(0,x.useState)("all"),v=[{id:1,sku:"MED-001",name:"Syringes 5ml",location:"Shelf A-12",minStock:100,unit:"pcs",batches:[{batchId:"B-001",brand:"BD Medical",supplier:"Medical Supply Co",stockNumber:"SN-001",expiryDate:null,office:"Hemodialysis",stock:250},{batchId:"B-002",brand:"BD Medical",supplier:"Medical Supply Co",stockNumber:"SN-002",expiryDate:null,office:"Clinical Laboratory",stock:320},{batchId:"B-003",brand:"BD Medical",supplier:"Medical Supply Co",stockNumber:"SN-003",expiryDate:null,office:"Hemodialysis",stock:200}]},{id:2,sku:"MED-002",name:"Gauze Pads (4x4)",location:"Shelf B-05",minStock:50,unit:"packs",batches:[{batchId:"B-004",brand:"Johnson & Johnson",supplier:"Healthcare Plus",stockNumber:"SN-004",expiryDate:"2026-07-15",office:"Radiology",stock:80},{batchId:"B-005",brand:"Johnson & Johnson",supplier:"Healthcare Plus",stockNumber:"SN-005",expiryDate:"2027-03-20",office:"Radiology",stock:40}]},{id:3,sku:"MED-003",name:"Alcohol Swabs",location:"Shelf C-02",minStock:200,unit:"boxes",batches:[{batchId:"B-006",brand:"CVS",supplier:"Pharmacy Supply Co",stockNumber:"SN-006",expiryDate:"2026-06-30",office:"Admin Office",stock:50}]},{id:4,sku:"MED-004",name:"Bandages (Assorted)",location:"Shelf B-10",minStock:30,unit:"boxes",batches:[{batchId:"B-007",brand:"Band-Aid",supplier:"Healthcare Plus",stockNumber:"SN-007",expiryDate:null,office:"Hemodialysis",stock:60}]},{id:5,sku:"MED-005",name:"Needles 21G",location:"Shelf A-15",minStock:100,unit:"pcs",batches:[{batchId:"B-008",brand:"BD Medical",supplier:"Medical Supply Co",stockNumber:"SN-008",expiryDate:"2026-08-01",office:"Clinical Laboratory",stock:45}]}],N=[{department:"Hemodialysis",submitted:12,approved:10,rejected:1,pending:1},{department:"Clinical Laboratory",submitted:8,approved:7,rejected:0,pending:1},{department:"Radiology",submitted:6,approved:5,rejected:1,pending:0},{department:"Admin Office",submitted:4,approved:3,rejected:0,pending:1}],w=[{name:"Syringes 5ml",count:45},{name:"Gauze Pads (4x4)",count:32},{name:"Alcohol Swabs",count:28},{name:"Bandages (Assorted)",count:22},{name:"Needles 21G",count:18}],k=[{name:"Available",value:82,color:"#10b981"},{name:"Low Stock",value:12,color:"#f59e0b"},{name:"Critical",value:4,color:"#ef4444"},{name:"Out of Stock",value:2,color:"#6b7280"}],C=[{month:"Jan",count:28},{month:"Feb",count:35},{month:"Mar",count:42},{month:"Apr",count:38},{month:"May",count:45},{month:"Jun",count:52}],[S,A]=g.split("-"),z=["January","February","March","April","May","June","July","August","September","October","November","December"][parseInt(A)-1],B=e=>e.batches.reduce((e,t)=>e+t.stock,0),R=v.reduce((e,t)=>e+B(t),0),I=v.length,E=v.filter(e=>B(e)<e.minStock).length,P=v.filter(e=>0===B(e)).length,D=v.reduce((e,t)=>e+ +!!t.batches.some(e=>(e=>{if(!e)return!1;let t=new Date,a=Math.ceil((new Date(e)-t)/864e5);return a<=30&&a>0})(e.expiryDate)),0),U=()=>`${m.charAt(0).toUpperCase()+m.slice(1)} Inventory Report`;return(0,h.jsxs)("div",{className:"reports",children:[(0,h.jsxs)("div",{className:"screen-view no-print",children:[(0,h.jsxs)("div",{className:"page-header",children:[(0,h.jsxs)("div",{children:[(0,h.jsx)("h1",{className:"page-title",children:U()}),(0,h.jsxs)("p",{className:"page-subtitle",children:["Purpose: ","weekly"===m?"Monitor day-to-day operations.":"monthly"===m?"Track monthly inventory trends.":"Analyze annual inventory performance."]})]}),(0,h.jsx)("div",{className:"header-actions",children:(0,h.jsx)("button",{className:"btn-primary",onClick:()=>{window.print()},children:"🖨️ Print Report"})})]}),(0,h.jsxs)("div",{className:"filters-bar",children:[(0,h.jsxs)("div",{className:"filter-group",children:[(0,h.jsx)("label",{children:"Time Period"}),(0,h.jsxs)("select",{value:m,onChange:e=>f(e.target.value),className:"form-input",children:[(0,h.jsx)("option",{value:"weekly",children:"Weekly"}),(0,h.jsx)("option",{value:"monthly",children:"Monthly"}),(0,h.jsx)("option",{value:"yearly",children:"Yearly"})]})]}),(0,h.jsxs)("div",{className:"filter-group",children:[(0,h.jsx)("label",{children:"monthly"===m?"Month":"yearly"===m?"Year":"Week"}),(0,h.jsx)("input",{type:"monthly"===m?"month":"yearly"===m?"number":"date",value:"yearly"===m?S:g,onChange:e=>b(e.target.value),className:"form-input"})]}),(0,h.jsxs)("div",{className:"filter-group",children:[(0,h.jsx)("label",{children:"Office"}),(0,h.jsxs)("select",{value:j,onChange:e=>y(e.target.value),className:"form-input",children:[(0,h.jsx)("option",{value:"all",children:"All Offices"}),(0,h.jsx)("option",{value:"hemodialysis",children:"Hemodialysis"}),(0,h.jsx)("option",{value:"clinical-laboratory",children:"Clinical Laboratory"}),(0,h.jsx)("option",{value:"radiology",children:"Radiology"}),(0,h.jsx)("option",{value:"admin-office",children:"Admin Office"})]})]})]}),(0,h.jsxs)("div",{className:"stats-grid",children:[(0,h.jsxs)("div",{className:"stat-card",children:[(0,h.jsx)("div",{className:"stat-icon",style:{background:"#dbeafe",color:"#1e40af"},children:"📦"}),(0,h.jsxs)("div",{children:[(0,h.jsx)("div",{className:"stat-value",children:R.toLocaleString()}),(0,h.jsx)("div",{className:"stat-label",children:"Total Supplies in Inventory"})]})]}),(0,h.jsxs)("div",{className:"stat-card",children:[(0,h.jsx)("div",{className:"stat-icon",style:{background:"#e0e7ff",color:"#3730a3"},children:"📋"}),(0,h.jsxs)("div",{children:[(0,h.jsx)("div",{className:"stat-value",children:I}),(0,h.jsx)("div",{className:"stat-label",children:"Total Different Supply Types"})]})]}),(0,h.jsxs)("div",{className:"stat-card",children:[(0,h.jsx)("div",{className:"stat-icon",style:{background:"#fef3c7",color:"#92400e"},children:"⚠️"}),(0,h.jsxs)("div",{children:[(0,h.jsx)("div",{className:"stat-value",children:E}),(0,h.jsx)("div",{className:"stat-label",children:"Low Stock Items"})]})]}),(0,h.jsxs)("div",{className:"stat-card",children:[(0,h.jsx)("div",{className:"stat-icon",style:{background:"#fee2e2",color:"#991b1b"},children:"⛔"}),(0,h.jsxs)("div",{children:[(0,h.jsx)("div",{className:"stat-value",children:P}),(0,h.jsx)("div",{className:"stat-label",children:"Out of Stock Items"})]})]}),(0,h.jsxs)("div",{className:"stat-card",children:[(0,h.jsx)("div",{className:"stat-icon",style:{background:"#fce7f3",color:"#be185d"},children:"⏰"}),(0,h.jsxs)("div",{children:[(0,h.jsx)("div",{className:"stat-value",children:D}),(0,h.jsx)("div",{className:"stat-label",children:"Expiring Within 30 Days"})]})]})]}),(0,h.jsxs)("div",{className:"flex-container",style:{display:"flex",gap:"24px",marginBottom:"24px",flexWrap:"wrap"},children:[(0,h.jsxs)("div",{className:"card",style:{flex:1,minWidth:0},children:[(0,h.jsx)("div",{className:"card-header",children:(0,h.jsx)("h2",{className:"card-title",children:"Inventory Status"})}),(0,h.jsxs)("div",{style:{display:"flex",justifyContent:"center",gap:"32px",alignItems:"center",flexWrap:"wrap"},children:[(0,h.jsxs)("svg",{width:"200",height:"200",viewBox:"0 0 200 200",style:{transform:"rotate(-90deg)"},children:[(e=0,k.map((t,a)=>{let i=t.value/100*2*Math.PI,s=100+90*Math.cos(e),l=100+90*Math.sin(e),r=100+90*Math.cos(e+i),n=100+90*Math.sin(e+i),o=+(i>Math.PI),c=`M 100 100 L ${s} ${l} A 90 90 0 ${o} 1 ${r} ${n} Z`;return e+=i,(0,h.jsx)("path",{d:c,fill:t.color},a)})),(0,h.jsx)("circle",{cx:"100",cy:"100",r:"50",fill:"white"})]}),(0,h.jsx)("div",{style:{display:"flex",flexDirection:"column",gap:"8px",minWidth:"150px"},children:k.map((e,t)=>(0,h.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[(0,h.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:"8px"},children:[(0,h.jsx)("div",{style:{width:"16px",height:"16px",borderRadius:"4px",background:e.color}}),(0,h.jsx)("span",{style:{fontSize:"14px",color:"#374151"},children:e.name})]}),(0,h.jsxs)("span",{style:{fontSize:"14px",fontWeight:"600",color:"#1f2937"},children:[e.value,"%"]})]},t))})]})]}),(0,h.jsxs)("div",{className:"card",style:{flex:1,minWidth:0},children:[(0,h.jsx)("div",{className:"card-header",children:(0,h.jsx)("h2",{className:"card-title",children:"Monthly Supply Requests"})}),(0,h.jsx)("div",{style:{display:"flex",justifyContent:"space-around",alignItems:"flex-end",height:"180px",padding:"12px 0"},children:(t=Math.max(...C.map(e=>e.count)),C.map((e,a)=>(0,h.jsxs)("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:"8px"},children:[(0,h.jsx)("div",{style:{width:"40px",background:"#1e40af",borderRadius:"4px 4px 0 0",transition:"height 0.3s ease",height:`${e.count/t*140}px`,display:"flex",justifyContent:"center",alignItems:"flex-end",paddingBottom:"8px"},children:(0,h.jsx)("span",{style:{color:"white",fontWeight:"600",fontSize:"12px"},children:e.count})}),(0,h.jsx)("span",{style:{fontSize:"13px",color:"#4b5563",fontWeight:"500"},children:e.month})]},a)))})]})]}),(0,h.jsxs)("div",{className:"flex-container",style:{display:"flex",gap:"24px",marginBottom:"24px",flexWrap:"wrap"},children:[(0,h.jsxs)("div",{className:"card",style:{flex:1,minWidth:0},children:[(0,h.jsx)("div",{className:"card-header",children:(0,h.jsx)("h2",{className:"card-title",children:"Supply Requests by Department"})}),(0,h.jsx)("div",{className:"table-container",children:(0,h.jsxs)("table",{className:"data-table",children:[(0,h.jsx)("thead",{children:(0,h.jsxs)("tr",{children:[(0,h.jsx)("th",{children:"Department"}),(0,h.jsx)("th",{className:"number-cell",children:"Request Submitted"}),(0,h.jsx)("th",{className:"number-cell",children:"Approved"}),(0,h.jsx)("th",{className:"number-cell",children:"Rejected"}),(0,h.jsx)("th",{className:"number-cell",children:"Pending"})]})}),(0,h.jsx)("tbody",{children:N.map((e,t)=>(0,h.jsxs)("tr",{children:[(0,h.jsx)("td",{children:e.department}),(0,h.jsx)("td",{className:"number-cell",children:e.submitted}),(0,h.jsx)("td",{className:"number-cell",children:e.approved}),(0,h.jsx)("td",{className:"number-cell",children:e.rejected}),(0,h.jsx)("td",{className:"number-cell",children:e.pending})]},t))})]})})]}),(0,h.jsxs)("div",{className:"card",style:{flex:"0 0 300px",minWidth:0},children:[(0,h.jsx)("div",{className:"card-header",children:(0,h.jsx)("h2",{className:"card-title",children:"Request Distribution"})}),(0,h.jsxs)("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",gap:"20px"},children:[(0,h.jsxs)("svg",{width:"220",height:"220",viewBox:"0 0 220 220",style:{transform:"rotate(-90deg)"},children:[(0,h.jsx)("circle",{cx:"110",cy:"110",r:"100",fill:"none",stroke:"#dbeafe",strokeWidth:"20"}),(a=N.reduce((e,t)=>e+t.submitted,0),i=0,s=["#1e40af","#10b981","#f59e0b","#8b5cf6"],N.map((e,t)=>{let l=e.submitted/a*2*Math.PI,r=110+100*Math.cos(i),n=110+100*Math.sin(i),o=110+100*Math.cos(i+l),c=110+100*Math.sin(i+l),d=+(l>Math.PI),p=`M 110 110 L ${r} ${n} A 100 100 0 ${d} 1 ${o} ${c} Z`;return i+=l,(0,h.jsx)("path",{d:p,fill:s[t]},t)}))]}),(0,h.jsx)("div",{style:{display:"flex",flexDirection:"column",gap:"8px",width:"100%"},children:N.map((e,t)=>{let a=N.reduce((e,t)=>e+t.submitted,0),i=(e.submitted/a*100).toFixed(0);return(0,h.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[(0,h.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:"8px"},children:[(0,h.jsx)("div",{style:{width:"16px",height:"16px",borderRadius:"4px",background:["#1e40af","#10b981","#f59e0b","#8b5cf6"][t]}}),(0,h.jsx)("span",{style:{fontSize:"14px",color:"#374151"},children:e.department})]}),(0,h.jsxs)("span",{style:{fontSize:"14px",fontWeight:"600",color:"#1f2937"},children:[i,"%"]})]},t)})})]})]})]}),(0,h.jsxs)("div",{className:"card",children:[(0,h.jsx)("div",{className:"card-header",children:(0,h.jsx)("h2",{className:"card-title",children:"Top 5 Most Requested Items"})}),(0,h.jsx)("div",{style:{display:"flex",flexDirection:"column",gap:"12px"},children:(l=Math.max(...w.map(e=>e.count)),r=["#1e40af","#3730a3","#4338ca","#4f46e5","#6366f1"],w.map((e,t)=>(0,h.jsxs)("div",{className:"bar-graph-item",style:{display:"flex",alignItems:"center",gap:"16px"},children:[(0,h.jsx)("div",{className:"bar-graph-label",style:{width:"180px",minWidth:"180px",fontSize:"14px",color:"#374151",fontWeight:"500"},children:e.name}),(0,h.jsx)("div",{style:{flex:1,height:"32px",background:"#f3f4f6",borderRadius:"8px",overflow:"hidden"},children:(0,h.jsx)("div",{style:{width:`${e.count/l*100}%`,height:"100%",background:r[t],borderRadius:"8px",display:"flex",alignItems:"center",justifyContent:"flex-end",paddingRight:"12px",transition:"width 0.3s ease"},children:(0,h.jsx)("span",{style:{color:"white",fontWeight:"600",fontSize:"14px"},children:e.count})})})]},t)))})]})]}),(0,h.jsx)("div",{className:"print-view",children:(0,h.jsx)("div",{className:"print-container",children:(0,h.jsxs)("div",{className:"report",children:[(0,h.jsxs)("div",{className:"report-header",children:[(0,h.jsxs)("div",{className:"report-header-top",children:[(0,h.jsx)("div",{className:"clinic-logo",children:"🏥"}),(0,h.jsxs)("div",{className:"clinic-info",children:[(0,h.jsx)("h2",{children:"BPDACC Inventory Management"}),(0,h.jsx)("p",{children:U().toUpperCase()})]})]}),(0,h.jsxs)("div",{className:"report-period",children:["For the ",m.charAt(0).toUpperCase()+m.slice(1)," of ",(0,h.jsx)("span",{className:"period-highlight",children:"weekly"===m?"Week of June 24 - June 30, 2026":"monthly"===m?`${z} ${S}`:`${S}`})]})]}),(0,h.jsx)("div",{className:"print-summary-section",children:(0,h.jsxs)("table",{className:"summary-table",children:[(0,h.jsx)("thead",{children:(0,h.jsxs)("tr",{children:[(0,h.jsx)("th",{children:"Statistic"}),(0,h.jsx)("th",{children:"Value"})]})}),(0,h.jsxs)("tbody",{children:[(0,h.jsxs)("tr",{children:[(0,h.jsx)("td",{children:"Total Supplies in Inventory"}),(0,h.jsx)("td",{children:R.toLocaleString()})]}),(0,h.jsxs)("tr",{children:[(0,h.jsx)("td",{children:"Total Different Supply Types"}),(0,h.jsx)("td",{children:I})]}),(0,h.jsxs)("tr",{children:[(0,h.jsx)("td",{children:"Low Stock Items"}),(0,h.jsx)("td",{children:E})]}),(0,h.jsxs)("tr",{children:[(0,h.jsx)("td",{children:"Out of Stock Items"}),(0,h.jsx)("td",{children:P})]}),(0,h.jsxs)("tr",{children:[(0,h.jsx)("td",{children:"Expiring Within 30 Days"}),(0,h.jsx)("td",{children:D})]})]})]})}),(0,h.jsx)("h3",{style:{marginTop:"32px",marginBottom:"16px",color:"#1f2937"},children:"Inventory Status"}),(0,h.jsxs)("div",{style:{display:"flex",justifyContent:"center",gap:"24px",alignItems:"center",marginBottom:"32px"},children:[(0,h.jsxs)("svg",{width:"160",height:"160",viewBox:"0 0 160 160",style:{transform:"rotate(-90deg)"},children:[(n=0,k.map((e,t)=>{let a=e.value/100*2*Math.PI,i=80+70*Math.cos(n),s=80+70*Math.sin(n),l=80+70*Math.cos(n+a),r=80+70*Math.sin(n+a),o=+(a>Math.PI),c=`M 80 80 L ${i} ${s} A 70 70 0 ${o} 1 ${l} ${r} Z`;return n+=a,(0,h.jsx)("path",{d:c,fill:e.color},t)})),(0,h.jsx)("circle",{cx:"80",cy:"80",r:"40",fill:"white"})]}),(0,h.jsx)("div",{style:{display:"flex",flexDirection:"column",gap:"6px",minWidth:"130px"},children:k.map((e,t)=>(0,h.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",fontSize:"12px"},children:[(0,h.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:"6px"},children:[(0,h.jsx)("div",{style:{width:"12px",height:"12px",borderRadius:"2px",background:e.color}}),(0,h.jsx)("span",{children:e.name})]}),(0,h.jsxs)("span",{style:{fontWeight:"600"},children:[e.value,"%"]})]},t))})]}),(0,h.jsxs)("div",{style:{display:"flex",gap:"32px",marginBottom:"32px",alignItems:"flex-start"},children:[(0,h.jsxs)("div",{style:{flex:1},children:[(0,h.jsx)("h3",{style:{marginTop:0,marginBottom:"16px",color:"#1f2937"},children:"Supply Requests by Department"}),(0,h.jsxs)("table",{className:"report-table",children:[(0,h.jsx)("thead",{children:(0,h.jsxs)("tr",{children:[(0,h.jsx)("th",{children:"Department"}),(0,h.jsx)("th",{className:"number-cell",children:"Request Submitted"}),(0,h.jsx)("th",{className:"number-cell",children:"Approved"}),(0,h.jsx)("th",{className:"number-cell",children:"Rejected"}),(0,h.jsx)("th",{className:"number-cell",children:"Pending"})]})}),(0,h.jsx)("tbody",{children:N.map((e,t)=>(0,h.jsxs)("tr",{children:[(0,h.jsx)("td",{children:e.department}),(0,h.jsx)("td",{className:"number-cell",children:e.submitted}),(0,h.jsx)("td",{className:"number-cell",children:e.approved}),(0,h.jsx)("td",{className:"number-cell",children:e.rejected}),(0,h.jsx)("td",{className:"number-cell",children:e.pending})]},t))})]})]}),(0,h.jsxs)("div",{style:{flex:"0 0 200px"},children:[(0,h.jsx)("h3",{style:{marginTop:0,marginBottom:"16px",color:"#1f2937"},children:"Request Distribution"}),(0,h.jsxs)("svg",{width:"180",height:"180",viewBox:"0 0 180 180",style:{transform:"rotate(-90deg)",marginBottom:"16px"},children:[(0,h.jsx)("circle",{cx:"90",cy:"90",r:"80",fill:"none",stroke:"#dbeafe",strokeWidth:"16"}),(o=N.reduce((e,t)=>e+t.submitted,0),c=0,d=["#1e40af","#10b981","#f59e0b","#8b5cf6"],N.map((e,t)=>{let a=e.submitted/o*2*Math.PI,i=90+80*Math.cos(c),s=90+80*Math.sin(c),l=90+80*Math.cos(c+a),r=90+80*Math.sin(c+a),n=+(a>Math.PI),p=`M 90 90 L ${i} ${s} A 80 80 0 ${n} 1 ${l} ${r} Z`;return c+=a,(0,h.jsx)("path",{d:p,fill:d[t]},t)}))]}),(0,h.jsx)("div",{style:{display:"flex",flexDirection:"column",gap:"6px"},children:N.map((e,t)=>{let a=N.reduce((e,t)=>e+t.submitted,0),i=(e.submitted/a*100).toFixed(0);return(0,h.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",fontSize:"12px"},children:[(0,h.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:"6px"},children:[(0,h.jsx)("div",{style:{width:"12px",height:"12px",borderRadius:"2px",background:["#1e40af","#10b981","#f59e0b","#8b5cf6"][t]}}),(0,h.jsx)("span",{children:e.department})]}),(0,h.jsxs)("span",{style:{fontWeight:"600"},children:[i,"%"]})]},t)})})]})]}),(0,h.jsx)("h3",{style:{marginTop:"32px",marginBottom:"16px",color:"#1f2937"},children:"Top 5 Most Requested Items"}),(0,h.jsx)("div",{style:{display:"flex",flexDirection:"column",gap:"8px",marginBottom:"32px"},children:(p=Math.max(...w.map(e=>e.count)),u=["#1e40af","#3730a3","#4338ca","#4f46e5","#6366f1"],w.map((e,t)=>(0,h.jsxs)("div",{style:{display:"flex",alignItems:"center",gap:"12px"},children:[(0,h.jsx)("div",{style:{width:"160px",fontSize:"12px",color:"#374151",fontWeight:"500"},children:e.name}),(0,h.jsx)("div",{style:{flex:1,height:"24px",background:"#f3f4f6",borderRadius:"6px",overflow:"hidden"},children:(0,h.jsx)("div",{style:{width:`${e.count/p*100}%`,height:"100%",background:u[t],borderRadius:"6px",display:"flex",alignItems:"center",justifyContent:"flex-end",paddingRight:"8px"},children:(0,h.jsx)("span",{style:{color:"white",fontWeight:"600",fontSize:"12px"},children:e.count})})})]},t)))}),(0,h.jsxs)("div",{className:"report-signatures",children:[(0,h.jsxs)("div",{className:"signature-block",children:[(0,h.jsx)("div",{className:"signature-line"}),(0,h.jsx)("div",{className:"signature-label",children:"Prepared By"}),(0,h.jsx)("div",{className:"signature-sub",children:"Signature over Printed Name"})]}),(0,h.jsxs)("div",{className:"signature-block",children:[(0,h.jsx)("div",{className:"signature-line"}),(0,h.jsx)("div",{className:"signature-label",children:"Checked By"}),(0,h.jsx)("div",{className:"signature-sub",children:"Signature over Printed Name"})]}),(0,h.jsxs)("div",{className:"signature-block",children:[(0,h.jsx)("div",{className:"signature-line"}),(0,h.jsx)("div",{className:"signature-label",children:"Approved By"}),(0,h.jsx)("div",{className:"signature-sub",children:"Signature over Printed Name"})]})]})]})})}),(0,h.jsx)("style",{children:`
        .reports {
          padding: 0;
        }

        .screen-view {
        }

        .page-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 24px;
          gap: 16px;
        }

        .page-title {
          font-size: 32px;
          font-weight: 800;
          color: #1f2937;
          margin-bottom: 8px;
        }

        .page-subtitle {
          color: #6b7280;
          font-size: 16px;
          font-style: italic;
        }

        .header-actions {
          display: flex;
          gap: 12px;
        }

        .btn-primary {
          background: #1e40af;
          color: white;
          border: none;
          padding: 12px 24px;
          border-radius: 8px;
          font-weight: 600;
          cursor: pointer;
          font-size: 14px;
          white-space: nowrap;
        }

        .filters-bar {
          display: flex;
          gap: 20px;
          margin-bottom: 24px;
          flex-wrap: wrap;
        }

        .filter-group {
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        .filter-group label {
          font-size: 12px;
          font-weight: 600;
          color: #6b7280;
          text-transform: uppercase;
        }

        .form-input {
          padding: 10px 14px;
          border: 1px solid #d1d5db;
          border-radius: 6px;
          font-size: 14px;
          background: white;
          outline: none;
        }

        .form-input:focus {
          border-color: #1e40af;
        }

        .stats-grid {
          display: flex;
          gap: 16px;
          margin-bottom: 24px;
        }

        .stat-card {
          background: white;
          padding: 14px 16px;
          border-radius: 10px;
          display: flex;
          align-items: center;
          gap: 12px;
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08);
          flex: 1;
          min-width: 0;
          max-width: 300px;
        }

        .stat-icon {
          width: 36px;
          height: 36px;
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 18px;
          flex-shrink: 0;
        }

        .stat-value {
          font-size: 20px;
          font-weight: 700;
          color: #1f2937;
        }

        .stat-label {
          font-size: 12px;
          color: #6b7280;
        }

        .card {
          background: white;
          border-radius: 12px;
          padding: 24px;
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
        }

        .card-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 20px;
        }

        .card-title {
          font-size: 18px;
          font-weight: 600;
          color: #1f2937;
        }

        .table-container {
          overflow-x: auto;
        }

        .data-table {
          width: 100%;
          border-collapse: collapse;
          min-width: 600px;
        }

        .data-table th,
        .data-table td {
          border: 1px solid #e5e7eb;
          padding: 12px;
          text-align: left;
        }

        .data-table th {
          background: #f9fafb;
          font-weight: 600;
          font-size: 13px;
          color: #4b5563;
        }

        .number-cell {
          text-align: right;
        }

        .print-view {
          display: none;
        }

        .print-container {
          background: white;
          padding: 40px;
        }

        .report {
          max-width: 950px;
          margin: 0 auto;
        }

        .report-header {
          text-align: center;
          margin-bottom: 32px;
        }

        .report-header-top {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 16px;
          margin-bottom: 20px;
        }

        .clinic-logo {
          font-size: 48px;
        }

        .clinic-info h2 {
          font-size: 20px;
          font-weight: 700;
          color: #1e40af;
          margin-bottom: 4px;
        }

        .clinic-info p {
          font-size: 16px;
          font-weight: 600;
          color: #1f2937;
        }

        .report-period {
          font-size: 16px;
          color: #4b5563;
        }

        .period-highlight {
          font-weight: 700;
          color: #1f2937;
          font-size: 18px;
        }

        .print-summary-section {
          margin-bottom: 32px;
        }

        .summary-table {
          width: 100%;
          border-collapse: collapse;
          margin-bottom: 24px;
        }

        .summary-table th,
        .summary-table td {
          border: 1px solid #000;
          padding: 12px;
          text-align: left;
        }

        .summary-table th {
          background: #f3f4f6;
          font-weight: 700;
        }

        .report-table {
          width: 100%;
          border-collapse: collapse;
          margin-bottom: 40px;
        }

        .report-table th,
        .report-table td {
          border: 1px solid #000;
          padding: 12px;
          text-align: left;
        }

        .report-table th {
          background: #f9fafb;
          font-weight: 600;
          font-size: 13px;
          color: #1f2937;
        }

        .report-signatures {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 40px;
        }

        .signature-block {
          text-align: center;
        }

        .signature-line {
          border-bottom: 1px solid #000;
          margin-bottom: 8px;
          margin-top: 40px;
        }

        .signature-label {
          font-size: 13px;
          font-weight: 600;
          color: #1f2937;
          margin-bottom: 4px;
        }

        .signature-sub {
          font-size: 11px;
          color: #6b7280;
        }

        /* Responsive for smaller screens */
        @media (max-width: 1200px) {
          .stats-grid {
            flex-wrap: wrap;
          }

          .stat-card {
            flex: 0 0 calc(33.333% - 8px);
            max-width: calc(33.333% - 8px);
          }
        }

        @media (max-width: 900px) {
          .flex-container {
            flex-direction: column;
          }
        }

        @media (max-width: 1024px) {
          .stat-card {
            flex: 0 0 calc(50% - 6px);
            max-width: calc(50% - 6px);
          }

          .report-signatures {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        /* Mobile Responsive */
        @media (max-width: 768px) {
          .page-header {
            flex-direction: column;
            align-items: flex-start;
          }

          .btn-primary {
            width: 100%;
          }

          .page-title {
            font-size: 24px;
          }

          .filters-bar {
            flex-direction: column;
          }

          .form-input {
            width: 100%;
          }
            
          .stat-card {
            flex: 0 0 100%;
            max-width: 100%;
            padding: 14px 16px;
          }

          .stat-icon {
            width: 36px;
            height: 36px;
            font-size: 18px;
          }

          .stat-value {
            font-size: 20px;
          }

          .stat-label {
            font-size: 12px;
          }

          .bar-graph-item {
            flex-direction: column;
            gap: 8px;
          }

          .bar-graph-label {
            width: 100% !important;
            min-width: unset !important;
          }

          .report-signatures {
            grid-template-columns: 1fr;
          }
        }

        @media print {
          .no-print {
            display: none !important;
          }

          .print-view {
            display: block !important;
          }

          .print-container {
            box-shadow: none;
            padding: 20px;
          }

          body {
            background: white;
          }
        }
      `})]})},e2={src:e.i(84860).default,width:24,height:24,blurWidth:0,blurHeight:0},e4={src:e.i(29371).default,width:24,height:24,blurWidth:0,blurHeight:0},e6={src:e.i(32355).default,width:24,height:24,blurWidth:0,blurHeight:0},e3=()=>{let{showToast:e,confirmAction:t}=(()=>{let e=(0,x.useContext)(ey);if(!e)throw Error("useUI must be used within a UIProvider");return e})(),[a,i]=(0,x.useState)([]),[s,l]=(0,x.useState)(!0),[r,n]=(0,x.useState)(!1),[o,c]=(0,x.useState)(!1),[d,p]=(0,x.useState)(!1),[u,m]=(0,x.useState)({name:"",email:"",password:"",office:"Hemodialysis"}),[f,g]=(0,x.useState)({id:null,name:"",email:"",password:"",office:"Hemodialysis",status:"Active"}),[b,j]=(0,x.useState)([]),y=async()=>{l(!0);try{let e=await eI("getUsers");i(e);let t=await eI("getOffices");j(t)}catch(e){console.error("Failed to load users:",e)}finally{l(!1)}};(0,x.useEffect)(()=>{y()},[]);let v=async t=>{t.preventDefault(),p(!0);try{let t;await (t={...u,status:"Active"},eI("addUser",t)),e("User added successfully!","success"),n(!1),m({name:"",email:"",password:"",office:"Hemodialysis"}),y()}catch(t){e(t.message||"Failed to add user","error")}finally{p(!1)}},N=async t=>{t.preventDefault(),p(!0);try{let t;await (t=f,eI("updateUser",t)),e("User updated successfully!","success"),c(!1),y()}catch(t){e(t.message||"Failed to update user","error")}finally{p(!1)}},w=async a=>{t(`Are you sure you want to delete ${a.name}?`,async()=>{try{let t;await (t=a.id,eI("deleteUser",t)),e("User deleted successfully!","success"),y()}catch(t){e(t.message||"Failed to delete user","error")}})};return(0,h.jsxs)("div",{className:"users",children:[(0,h.jsxs)("div",{className:"page-header",children:[(0,h.jsxs)("div",{children:[(0,h.jsx)("h1",{className:"page-title",children:"User Management"}),(0,h.jsx)("p",{className:"page-subtitle",children:"Manage system users and permissions"})]}),(0,h.jsxs)("button",{className:"btn-primary",onClick:()=>n(!0),children:[(0,h.jsx)(eN,{src:e2,alt:"Add User",size:20}),"Add User"]})]}),(0,h.jsx)("div",{className:"card",children:(0,h.jsx)("div",{className:"table-container",children:(0,h.jsxs)("table",{className:"users-table",children:[(0,h.jsx)("thead",{children:(0,h.jsxs)("tr",{children:[(0,h.jsx)("th",{children:"Name"}),(0,h.jsx)("th",{children:"Email"}),(0,h.jsx)("th",{children:"Office"}),(0,h.jsx)("th",{children:"Status"}),(0,h.jsx)("th",{children:"Actions"})]})}),(0,h.jsx)("tbody",{children:s?(0,h.jsx)("tr",{children:(0,h.jsx)("td",{colSpan:"6",style:{textAlign:"center",padding:"20px"},children:"Loading users..."})}):0===a.length?(0,h.jsx)("tr",{children:(0,h.jsx)("td",{colSpan:"6",style:{textAlign:"center",padding:"20px"},children:"No users found."})}):a.map(e=>(0,h.jsxs)("tr",{children:[(0,h.jsx)("td",{children:(0,h.jsxs)("div",{className:"user-info-cell",children:[(0,h.jsx)("div",{className:"user-avatar-small",children:e.name.charAt(0)}),(0,h.jsxs)("div",{children:[(0,h.jsx)("div",{className:"user-name",children:e.name}),(0,h.jsx)("div",{className:"user-email",children:e.email})]})]})}),(0,h.jsx)("td",{children:e.email}),(0,h.jsx)("td",{children:e.officeName}),(0,h.jsx)("td",{children:(0,h.jsx)("span",{className:`status-badge ${e.status.toLowerCase()}`,children:e.status})}),(0,h.jsx)("td",{children:!e.isAdmin&&(0,h.jsxs)("div",{className:"actions",children:[(0,h.jsx)("button",{className:"btn-icon",title:"Edit User",onClick:()=>{g({id:e.id,name:e.name,email:e.email,password:"",office:e.officeName||"Hemodialysis",status:e.status}),c(!0)},children:(0,h.jsx)(eN,{src:e6,alt:"Edit",size:20})}),(0,h.jsx)("button",{className:"btn-icon",title:"Delete User",onClick:()=>w(e),children:(0,h.jsx)(eN,{src:e4,alt:"Delete",size:20})})]})})]},e.id))})]})})}),r&&(0,h.jsx)("div",{className:"modal-overlay",children:(0,h.jsxs)("div",{className:"modal-content",style:{maxWidth:"500px"},children:[(0,h.jsxs)("div",{className:"modal-header",children:[(0,h.jsx)("h2",{children:"Add New User"}),(0,h.jsx)("button",{className:"close-btn",onClick:()=>n(!1),children:(0,h.jsx)(eN,{src:eY,alt:"Close",size:24})})]}),(0,h.jsxs)("form",{onSubmit:v,className:"modal-form",children:[(0,h.jsxs)("div",{className:"form-group",children:[(0,h.jsx)("label",{children:"Full Name"}),(0,h.jsx)("input",{type:"text",required:!0,value:u.name,onChange:e=>m({...u,name:e.target.value}),placeholder:"John Doe"})]}),(0,h.jsxs)("div",{className:"form-group",children:[(0,h.jsx)("label",{children:"Email Address"}),(0,h.jsx)("input",{type:"email",required:!0,value:u.email,onChange:e=>m({...u,email:e.target.value}),placeholder:"john@clinic.com"})]}),(0,h.jsxs)("div",{className:"form-group",children:[(0,h.jsx)("label",{children:"Password"}),(0,h.jsx)("input",{type:"password",required:!0,value:u.password,onChange:e=>m({...u,password:e.target.value}),placeholder:"Secure password"}),(0,h.jsx)("small",{style:{color:"#6b7280",fontSize:"12px",marginTop:"4px",display:"block"},children:"Password will be encrypted before saving to the database."})]}),(0,h.jsxs)("div",{className:"form-group",children:[(0,h.jsx)("label",{children:"Assigned Office"}),(0,h.jsx)("select",{value:u.office,onChange:e=>m({...u,office:e.target.value}),children:b.filter(e=>"Unallocated"!==e.name).map(e=>(0,h.jsx)("option",{value:e.name,children:e.name},e.id))})]}),(0,h.jsxs)("div",{className:"modal-actions",children:[(0,h.jsx)("button",{type:"button",className:"btn-secondary",onClick:()=>n(!1),children:"Cancel"}),(0,h.jsx)("button",{type:"submit",className:"btn-primary",disabled:d,children:d?"Saving...":"Create Account"})]})]})]})}),o&&(0,h.jsx)("div",{className:"modal-overlay",children:(0,h.jsxs)("div",{className:"modal-content",style:{maxWidth:"500px"},children:[(0,h.jsxs)("div",{className:"modal-header",children:[(0,h.jsx)("h2",{children:"Edit User"}),(0,h.jsx)("button",{className:"close-btn",onClick:()=>c(!1),children:(0,h.jsx)(eN,{src:eY,alt:"Close",size:24})})]}),(0,h.jsxs)("form",{onSubmit:N,className:"modal-form",children:[(0,h.jsxs)("div",{className:"form-group",children:[(0,h.jsx)("label",{children:"Full Name"}),(0,h.jsx)("input",{type:"text",required:!0,value:f.name,onChange:e=>g({...f,name:e.target.value})})]}),(0,h.jsxs)("div",{className:"form-group",children:[(0,h.jsx)("label",{children:"Email Address"}),(0,h.jsx)("input",{type:"email",required:!0,value:f.email,onChange:e=>g({...f,email:e.target.value})})]}),(0,h.jsxs)("div",{className:"form-group",children:[(0,h.jsx)("label",{children:"New Password (Optional)"}),(0,h.jsx)("input",{type:"password",value:f.password,onChange:e=>g({...f,password:e.target.value}),placeholder:"Leave blank to keep current password"})]}),(0,h.jsxs)("div",{className:"form-group",children:[(0,h.jsx)("label",{children:"Assigned Office"}),(0,h.jsx)("select",{value:f.office,onChange:e=>g({...f,office:e.target.value}),children:b.filter(e=>"Unallocated"!==e.name).map(e=>(0,h.jsx)("option",{value:e.name,children:e.name},e.id))})]}),(0,h.jsxs)("div",{className:"form-group",children:[(0,h.jsx)("label",{children:"Status"}),(0,h.jsxs)("select",{value:f.status,onChange:e=>g({...f,status:e.target.value}),children:[(0,h.jsx)("option",{value:"Active",children:"Active"}),(0,h.jsx)("option",{value:"Inactive",children:"Inactive"})]})]}),(0,h.jsxs)("div",{className:"modal-actions",children:[(0,h.jsx)("button",{type:"button",className:"btn-secondary",onClick:()=>c(!1),children:"Cancel"}),(0,h.jsx)("button",{type:"submit",className:"btn-primary",disabled:d,children:d?"Saving...":"Save Changes"})]})]})]})}),(0,h.jsx)("style",{children:`
        .users {
          padding: 0;
        }

        .page-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 24px;
          gap: 16px;
        }

        .page-title {
          font-size: 28px;
          font-weight: 700;
          color: #1f2937;
          margin-bottom: 4px;
        }

        .page-subtitle {
          color: #6b7280;
          font-size: 14px;
        }

        .btn-primary {
          background: #1e40af;
          color: white;
          border: none;
          padding: 12px 24px;
          border-radius: 8px;
          font-weight: 600;
          cursor: pointer;
          font-size: 14px;
          white-space: nowrap;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
        }

        .btn-secondary {
          background: white;
          border: 1px solid #d1d5db;
          color: #374151;
          padding: 12px 24px;
          border-radius: 8px;
          font-weight: 600;
          cursor: pointer;
          font-size: 14px;
        }

        .card {
          background: white;
          border-radius: 12px;
          padding: 0;
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
          overflow: hidden;
        }

        .table-container {
          overflow-x: auto;
        }

        .users-table {
          width: 100%;
          border-collapse: collapse;
          min-width: 700px;
        }

        .users-table th,
        .users-table td {
          padding: 16px 20px;
          text-align: left;
        }

        .users-table thead {
          background: #f9fafb;
        }

        .users-table th {
          font-size: 12px;
          font-weight: 600;
          color: #6b7280;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .users-table tbody tr {
          border-bottom: 1px solid #f3f4f6;
        }

        .user-info-cell {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .user-avatar-small {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background: linear-gradient(135deg, #3b82f6, #1e40af);
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-weight: 600;
          font-size: 16px;
          flex-shrink: 0;
        }

        .user-name {
          font-weight: 600;
          color: #1f2937;
          font-size: 14px;
        }

        .user-email {
          font-size: 13px;
          color: #6b7280;
        }

        .role-tag {
          display: inline-block;
          padding: 4px 12px;
          background: #e0e7ff;
          color: #3730a3;
          border-radius: 12px;
          font-size: 12px;
          font-weight: 600;
        }

        .status-badge {
          display: inline-block;
          padding: 6px 12px;
          border-radius: 6px;
          font-size: 12px;
          font-weight: 600;
        }

        .status-badge.active {
          background: #dcfce7;
          color: #166534;
        }

        .status-badge.inactive {
          background: #fee2e2;
          color: #991b1b;
        }

        .actions {
          display: flex;
          gap: 8px;
        }

        .btn-icon {
          background: none;
          border: none;
          font-size: 18px;
          cursor: pointer;
          padding: 4px;
          border-radius: 4px;
        }

        .btn-icon:hover {
          background: #f3f4f6;
        }

        /* Modal Styles */
        .modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.5);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 1000;
          padding: 20px;
        }

        .modal-content {
          background: white;
          border-radius: 12px;
          width: 100%;
          max-width: 600px;
          max-height: 90vh;
          display: flex;
          flex-direction: column;
          box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
          animation: slideUp 0.3s ease-out;
        }

        .modal-header {
          padding: 20px 24px;
          border-bottom: 1px solid #e5e7eb;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .modal-header h2 {
          margin: 0;
          font-size: 20px;
          color: #111827;
        }

        .close-btn {
          background: none;
          border: none;
          padding: 4px;
          cursor: pointer;
          color: #6b7280;
          border-radius: 4px;
        }

        .close-btn:hover {
          background: #f3f4f6;
          color: #111827;
        }

        .modal-form {
          padding: 24px;
          overflow-y: auto;
        }

        .form-group {
          margin-bottom: 20px;
        }

        .form-group label {
          display: block;
          margin-bottom: 8px;
          font-weight: 500;
          color: #374151;
          font-size: 14px;
        }

        .form-group input,
        .form-group select {
          width: 100%;
          padding: 10px 12px;
          border: 1px solid #d1d5db;
          border-radius: 6px;
          font-size: 14px;
        }

        .form-group input:focus,
        .form-group select:focus {
          outline: none;
          border-color: #3b82f6;
          box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
        }

        .modal-actions {
          display: flex;
          justify-content: flex-end;
          gap: 12px;
          margin-top: 30px;
          padding-top: 20px;
          border-top: 1px solid #e5e7eb;
        }

        @keyframes slideUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        /* Mobile Responsive */
        @media (max-width: 768px) {
          .page-header {
            flex-direction: column;
            align-items: flex-start;
          }

          .btn-primary {
            width: 100%;
          }

          .page-title {
            font-size: 24px;
          }
        }
      `})]})},e8=()=>{let[e,t]=(0,x.useState)(""),[a,i]=(0,x.useState)(""),[s,l]=(0,x.useState)(""),[r,n]=(0,x.useState)(!1),o=K(),{login:c}=eg(),d=async t=>{t.preventDefault(),l(""),n(!0);try{let t,i,s=await (t=e,i=a,eI("login",t,i));c(s),o("/")}catch(e){l(e.message||"Login failed. Please check your credentials.")}finally{n(!1)}};return(0,h.jsxs)("div",{className:"login-container",children:[(0,h.jsxs)("div",{className:"login-card",children:[(0,h.jsxs)("div",{className:"login-header",children:[(0,h.jsx)("img",{src:"/bpdacc-logo.png",alt:"BPDACC Logo",className:"login-logo",onError:e=>e.target.style.display="none"}),(0,h.jsx)("h2",{children:"BPDACC Inventory"}),(0,h.jsx)("p",{children:"Please sign in to your account"})]}),(0,h.jsxs)("form",{onSubmit:d,className:"login-form",children:[s&&(0,h.jsx)("div",{className:"login-error",children:s}),(0,h.jsxs)("div",{className:"form-group",children:[(0,h.jsx)("label",{children:"Email Address"}),(0,h.jsx)("input",{type:"email",value:e,onChange:e=>t(e.target.value),required:!0,placeholder:"Enter your email"})]}),(0,h.jsxs)("div",{className:"form-group",children:[(0,h.jsx)("label",{children:"Password"}),(0,h.jsx)("input",{type:"password",value:a,onChange:e=>i(e.target.value),required:!0,placeholder:"Enter your password"})]}),(0,h.jsx)("button",{type:"submit",className:"login-button",disabled:r,children:r?"Signing in...":"Sign In"})]})]}),(0,h.jsx)("style",{children:`
        .login-container {
          display: flex;
          align-items: center;
          justify-content: center;
          height: 100vh;
          width: 100vw;
          background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
        }
        
        .login-card {
          background: white;
          padding: 40px;
          border-radius: 12px;
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
          width: 100%;
          max-width: 400px;
          animation: slideUp 0.5s ease-out;
        }

        @keyframes slideUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .login-header {
          text-align: center;
          margin-bottom: 30px;
        }

        .login-logo {
          width: 80px;
          height: 80px;
          margin-bottom: 15px;
          object-fit: contain;
        }

        .login-header h2 {
          color: #2c3e50;
          margin: 0 0 10px 0;
          font-size: 24px;
        }

        .login-header p {
          color: #7f8c8d;
          margin: 0;
          font-size: 14px;
        }

        .login-form {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .form-group {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .form-group label {
          font-size: 13px;
          font-weight: 600;
          color: #34495e;
        }

        .form-group input {
          padding: 12px 16px;
          border: 1px solid #ddd;
          border-radius: 8px;
          font-size: 14px;
          transition: all 0.3s;
        }

        .form-group input:focus {
          outline: none;
          border-color: #3498db;
          box-shadow: 0 0 0 3px rgba(52, 152, 219, 0.2);
        }

        .login-button {
          background-color: #3498db;
          color: white;
          border: none;
          padding: 14px;
          border-radius: 8px;
          font-size: 15px;
          font-weight: 600;
          cursor: pointer;
          transition: background-color 0.3s;
          margin-top: 10px;
        }

        .login-button:hover {
          background-color: #2980b9;
        }

        .login-button:disabled {
          background-color: #95a5a6;
          cursor: not-allowed;
        }

        .login-error {
          background-color: #fee;
          color: #e74c3c;
          padding: 12px;
          border-radius: 6px;
          font-size: 13px;
          text-align: center;
          border: 1px solid #fcc;
        }
      `})]})},e5=({children:e})=>{let{currentUser:t}=eg();return t?e:(0,h.jsx)(ei,{to:"/login",replace:!0})};e.s(["default",0,function(){return(0,h.jsx)(ef,{children:(0,h.jsx)(ev,{children:(0,h.jsx)(ep,{children:(0,h.jsx)("div",{className:"app",children:(0,h.jsxs)(er,{children:[(0,h.jsx)(es,{path:"/login",element:(0,h.jsx)(e8,{})}),(0,h.jsx)(es,{path:"*",element:(0,h.jsx)(e5,{children:(0,h.jsxs)("div",{style:{display:"flex",width:"100%",height:"100vh"},children:[(0,h.jsx)(eR,{}),(0,h.jsx)("main",{className:"main-content",children:(0,h.jsxs)(er,{children:[(0,h.jsx)(es,{path:"/",element:(0,h.jsx)(eH,{})}),(0,h.jsx)(es,{path:"/inventory",element:(0,h.jsx)(eG,{})}),(0,h.jsx)(es,{path:"/requisition",element:(0,h.jsx)(eX,{})}),(0,h.jsx)(es,{path:"/requisition-requests",element:(0,h.jsx)(e0,{})}),(0,h.jsx)(es,{path:"/reports",element:(0,h.jsx)(e1,{})}),(0,h.jsx)(es,{path:"/users",element:(0,h.jsx)(e3,{})})]})})]})})})]})})})})})}],86022)},3654,e=>{e.n(e.i(86022))}]);