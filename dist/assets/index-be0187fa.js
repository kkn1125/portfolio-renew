var C=Object.defineProperty;var S=(n,e,t)=>e in n?C(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t;var d=(n,e,t)=>(S(n,typeof e!="symbol"?e+"":e,t),t),q=(n,e,t)=>{if(!e.has(n))throw TypeError("Cannot "+t)};var u=(n,e,t)=>{if(e.has(n))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(n):e.set(n,t)};var i=(n,e,t)=>(q(n,e,"access private method"),t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))a(o);new MutationObserver(o=>{for(const r of o)if(r.type==="childList")for(const p of r.addedNodes)p.tagName==="LINK"&&p.rel==="modulepreload"&&a(p)}).observe(document,{childList:!0,subtree:!0});function t(o){const r={};return o.integrity&&(r.integrity=o.integrity),o.referrerPolicy&&(r.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?r.credentials="include":o.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(o){if(o.ep)return;o.ep=!0;const r=t(o);fetch(o.href,r)}})();const A=({name:n=""})=>`
	<div>
		qweqwe${n}
		<button onclick="manager.navigator.to('/about')">to about</button>
	</div>
`,j=()=>`
	<div>not found</div>
`,w=(n,e)=>t=>`
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
	${n({...e,...t})}
	<hr />
	<button onclick="manager.navigator.forward()">앞으로</button>
	<button onclick="manager.navigator.back()">뒤로</button>
	`,F=({title:n=""})=>`
	<div>
		qweqwe${n}
		<button onclick="manager.navigator.to('/', {name:'test'})">to home</button>
	</div>
`,M=[{name:"home",path:"/",page:w(A,{})},{name:"about",path:"/about",page:w(F,{})},{name:"404",path:"/404",page:w(j,{})}],P=()=>document.querySelector("#app"),x="/portfolio-renew/",h=[],m=[],c={index:0,page:null},N=n=>n??"",H=n=>n??{},T=n=>n??(()=>{}),_=n=>Object.fromEntries(Object.entries(n).map(([e,t])=>[e,e.includes("Load")?T(t):e.includes("props")?H(t):N(t)])),s=n=>n.replace(x,"/"),$=n=>x+n.replace("/","");class D{constructor(){d(this,"index",0)}to(e,t={}){s(location.pathname)!==e&&history.pushState(t,"",$(e))}back(e=1){if(this.index-1<0){console.log("페이지 없음");return}this.to(h[this.index-1],{stopPropagation:!0}),this.index=this.index-1}forward(e=1){if(this.index+1>h.length-1){console.log("페이지 없음");return}this.to(h[this.index+1],{stopPropagation:!0}),this.index=this.index+1}}var l,b,f,E,v,O,g,y;class I{constructor(){u(this,l);u(this,f);u(this,v);u(this,g);d(this,"firstPage",!1);(function(){var e=history.pushState,t=history.replaceState;history.pushState=function(a){e.apply(history,arguments),window.dispatchEvent(new CustomEvent("pushstate")),window.dispatchEvent(new CustomEvent("pagechange",{detail:{path:s(location.pathname),props:history.state}}))},history.replaceState=function(a){t.apply(history,arguments),window.dispatchEvent(new CustomEvent("replacestate")),window.dispatchEvent(new CustomEvent("pagechange",{detail:{path:s(location.pathname),props:history.state}}))},window.addEventListener("popstate",function(a){window.dispatchEvent(new CustomEvent("pagechange",{detail:{path:s(location.pathname),props:history.state}}))})})(),window.addEventListener("load",e=>{h.push(s(location.pathname)),i(this,l,b).call(this,s(location.pathname),{})}),window.addEventListener("pagechange",({detail:e})=>{const{path:t,props:a}=e;a.stopPropagation||h.push(s(location.pathname)),i(this,l,b).call(this,t,a)})}setPage(e){this.firstPage||(this.firstPage=!0,c.index=0,c.page=e),m.push(i(this,f,E).call(this,e))}setPages(e){for(let t of e)this.setPage(t)}render(e={}){var t;if(c.page)i(this,v,O).call(this),i(this,g,y).call(this,c.page.page(e));else throw i(this,g,y).call(this,(t=m.find(a=>a.name==="404"))==null?void 0:t.page(e)),new Error("페이지가 없습니다.")}}l=new WeakSet,b=function(e,t){const a=m.findIndex(o=>o.path===e);c.index=a,c.page=m[a],this.render(t)},f=new WeakSet,E=function({name:e,path:t,page:a,props:o,preLoad:r,afterLoad:p}){return _({name:e,path:t,page:a,props:o,preLoad:r,afterLoad:p})},v=new WeakSet,O=function(){P().innerHTML=""},g=new WeakSet,y=function(e){const t=new DOMParser().parseFromString(e,"text/html");P().append(...Array.from(t.body.children))};class K{constructor(){d(this,"router",new I);d(this,"navigator",new D)}}const L=new K;window.manager=L;L.router.setPages(M);
