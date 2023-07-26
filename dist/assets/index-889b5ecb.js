var O=Object.defineProperty;var C=(o,e,t)=>e in o?O(o,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):o[e]=t;var l=(o,e,t)=>(C(o,typeof e!="symbol"?e+"":e,t),t),S=(o,e,t)=>{if(!e.has(o))throw TypeError("Cannot "+t)};var u=(o,e,t)=>{if(e.has(o))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(o):e.set(o,t)};var c=(o,e,t)=>(S(o,e,"access private method"),t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))a(n);new MutationObserver(n=>{for(const i of n)if(i.type==="childList")for(const d of i.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&a(d)}).observe(document,{childList:!0,subtree:!0});function t(n){const i={};return n.integrity&&(i.integrity=n.integrity),n.referrerPolicy&&(i.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?i.credentials="include":n.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function a(n){if(n.ep)return;n.ep=!0;const i=t(n);fetch(n.href,i)}})();const q=({name:o=""})=>`
	<div>
		qweqwe${o}
		<button onclick="manager.navigator.to('/about')">to about</button>
	</div>
`,A=()=>`
	<div>not found</div>
`,w=(o,e)=>t=>`
	<header id="gnb">
		<nav class="d-flex justify-content-between align-items-center px-5 py-1">
			<div>Logo</div>
			<div class="d-flex gap-1">
				<div>menu-1</div>
				<div>menu-2</div>
				<div>menu-3</div>
			</div>
			<div>Hamburg</div>
		</nav>
	</header>
	<br />
	${o({...e,...t})}
	<hr />
	<button onclick="manager.navigator.forward()">앞으로</button>
	<button onclick="manager.navigator.back()">뒤로</button>
	`,j=({title:o=""})=>`
	<div>
		qweqwe${o}
		<button onclick="manager.navigator.to('/', {name:'test'})">to home</button>
	</div>
`,F=[{name:"home",path:"/",page:w(q,{})},{name:"about",path:"/about",page:w(j,{})},{name:"404",path:"/404",page:w(A,{})}],P=()=>document.querySelector("#app"),M="/portfolio-renew/",s=[],h=[],p={index:0,page:null},N=o=>o??"",H=o=>o??{},T=o=>o??(()=>{}),_=o=>Object.fromEntries(Object.entries(o).map(([e,t])=>[e,e.includes("Load")?T(t):e.includes("props")?H(t):N(t)])),r=o=>o.replace(M,"/");class ${constructor(){l(this,"index",0)}to(e,t={}){r(location.pathname)!==e&&history.pushState(t,"",e)}back(e=1){if(console.log(this.index),this.index-1<0){console.log("페이지 없음");return}this.to(s[this.index-1],{stopPropagation:!0}),console.log(s[this.index-1]),this.index=this.index-1}forward(e=1){if(console.log(this.index),this.index+1>s.length-1){console.log("페이지 없음");return}this.to(s[this.index+1],{stopPropagation:!0}),console.log(s[this.index+1]),this.index=this.index+1}}var g,y,f,x,v,E,m,b;class D{constructor(){u(this,g);u(this,f);u(this,v);u(this,m);l(this,"firstPage",!1);(function(){var e=history.pushState,t=history.replaceState;history.pushState=function(a){e.apply(history,arguments),window.dispatchEvent(new CustomEvent("pushstate")),window.dispatchEvent(new CustomEvent("pagechange",{detail:{path:r(location.pathname),props:history.state}}))},history.replaceState=function(a){t.apply(history,arguments),window.dispatchEvent(new CustomEvent("replacestate")),window.dispatchEvent(new CustomEvent("pagechange",{detail:{path:r(location.pathname),props:history.state}}))},window.addEventListener("popstate",function(a){window.dispatchEvent(new CustomEvent("pagechange",{detail:{path:r(location.pathname),props:history.state}}))})})(),window.addEventListener("load",e=>{console.log(2,e,r(location.pathname)),s.push(r(location.pathname)),c(this,g,y).call(this,r(location.pathname),{}),console.log("current history",s)}),window.addEventListener("pagechange",({detail:e})=>{console.log("page change",e);const{path:t,props:a}=e;console.trace(a.stopPropagation),a.stopPropagation||s.push(r(location.pathname)),c(this,g,y).call(this,t,a),console.log("current history",s)})}setPage(e){this.firstPage||(this.firstPage=!0,p.index=0,p.page=e),h.push(c(this,f,x).call(this,e))}setPages(e){for(let t of e)this.setPage(t);console.log(p),console.log(h)}render(e={}){var t;if(p.page)c(this,v,E).call(this),c(this,m,b).call(this,p.page.page(e));else throw c(this,m,b).call(this,(t=h.find(a=>a.name==="404"))==null?void 0:t.page(e)),new Error("페이지가 없습니다.")}}g=new WeakSet,y=function(e,t){const a=h.findIndex(n=>n.path===e);p.index=a,p.page=h[a],this.render(t)},f=new WeakSet,x=function({name:e,path:t,page:a,props:n,preLoad:i,afterLoad:d}){return _({name:e,path:t,page:a,props:n,preLoad:i,afterLoad:d})},v=new WeakSet,E=function(){P().innerHTML=""},m=new WeakSet,b=function(e){const t=new DOMParser().parseFromString(e,"text/html");P().append(...Array.from(t.body.children))};class I{constructor(){l(this,"router",new D);l(this,"navigator",new $)}}const L=new I;window.manager=L;L.router.setPages(F);
