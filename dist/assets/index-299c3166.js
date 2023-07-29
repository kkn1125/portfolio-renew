var j=Object.defineProperty;var q=(n,e,t)=>e in n?j(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t;var p=(n,e,t)=>(q(n,typeof e!="symbol"?e+"":e,t),t),T=(n,e,t)=>{if(!e.has(n))throw TypeError("Cannot "+t)};var c=(n,e,t)=>{if(e.has(n))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(n):e.set(n,t)};var i=(n,e,t)=>(T(n,e,"access private method"),t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))o(a);new MutationObserver(a=>{for(const s of a)if(s.type==="childList")for(const r of s.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&o(r)}).observe(document,{childList:!0,subtree:!0});function t(a){const s={};return a.integrity&&(s.integrity=a.integrity),a.referrerPolicy&&(s.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?s.credentials="include":a.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function o(a){if(a.ep)return;a.ep=!0;const s=t(a);fetch(a.href,s)}})();const M=()=>document.querySelector("#app"),S=()=>document.querySelector("#main"),A="/portfolio-renew/",m=[],v=[],l={index:0,page:null},I="devkimson",F="2023",d=()=>document.querySelector("#menu-panel"),y=()=>d().classList.contains("close"),_=()=>document.querySelector("#gnb-menu"),k=[{name:"home",path:"/"},{name:"resume",path:"/resume"},{name:"portfolio",path:"/portfolio"},{name:"about",path:"/about"}],B=({name:n=""})=>`
	<div class="d-flex flex-column gap-5">
		<div class="flex-1">
			<button onclick="manager.navigator.to('/about')">to about</button>
		</div>
		<div class="flex-1">
			<button onclick="manager.navigator.to('/about')">to about</button>
		</div>
		<div class="flex-1">
			<button onclick="manager.navigator.to('/about')">to about</button>
		</div>
		<div class="flex-1">
			<button onclick="manager.navigator.to('/about')">to about</button>
		</div>
		<div class="flex-1">
			<button onclick="manager.navigator.to('/about')">to about</button>
		</div>
		<div class="flex-1">
			<button onclick="manager.navigator.to('/about')">to about</button>
		</div>
		<div class="flex-1">
			<button onclick="manager.navigator.to('/about')">to about</button>
		</div>
		<div class="flex-1">
			<button onclick="manager.navigator.to('/about')">to about</button>
		</div>
		<div class="flex-1">
			<button onclick="manager.navigator.to('/about')">to about</button>
		</div>
	</div>
`,D=()=>`
	<div class="text-center">
		<div class="d-flex flex-column position-absolute top-50 left-50 position-center gap-2">
			<div>
				<div class="fs-20">404</div>
				<div class="text-capitalize fs-10">not found</div>
			</div>
			<span>
				<button class="btn btn-primary text-uppercase" onclick="manager.navigator.to('/')">home</button>
			</span>	
		</div>
	</div>
`,R=(n,e)=>t=>`
	<header id="gnb" class="">
		<nav class="d-flex justify-content-between align-items-center px-5 py-1">
			<div id="brand" class="text-uppercase fs-2 f-bold user-select-none">
			<a class="text-decoration-none" onclick="manager.navigator.to('/')">
			portfolio
			</a>
			</div>
			<div id="gnb-menu" class="d-flex gap-1 f-bold text-uppercase user-select-none">
			${k.filter(o=>o.name!=="home").map(o=>`<div class="item" onclick="manager.navigator.to('${o.path}')">${o.name}</div>`).join("")}
			</div>
			<div id="menu">
				<span class="menu-line"></span>
				<span class="menu-line"></span>
				<span class="menu-line"></span>
			</div>
		</nav>
	</header>
	<main id="main" class="flex-1 overflow-auto">
		<!--
		<div class="flex-1 w-max-25">
			side
		</div>
		-->
		
	</main>
	<div id="menu-panel" class="d-flex flex-column justify-content-center align-items-center gap-2 fs-1 responsive-fs-width-3 text-white f-bold text-uppercase close">
		<button id="menu-panel-exit-btn" class="fs-1">❌</button>

		${k.map(o=>`<div class="menu-panel-item hover-action" onclick="manager.navigator.to('${o.path}'); manager.ui.closeMenuPanel()">${o.name}</div>`).join("")}
		
	</div>
	<footer class="text-center f-bold bg-gray text-white py-2">
		Copyright ${F}. ${I} All rights reserved.
	</footer>
	`,H=({title:n=""})=>`
	<div>
		qweqwe${n}
		<button onclick="manager.navigator.to('/', {name:'test'})">to home</button>
	</div>
`,U=[{name:"home",path:"/",page:B},{name:"about",path:"/about",page:H},{name:"404",path:"/404",page:D}],K=n=>n??"",z=n=>n??{},G=n=>n??(()=>{}),V=n=>Object.fromEntries(Object.entries(n).map(([e,t])=>[e,e.includes("Load")?G(t):e.includes("props")?z(t):K(t)])),u=n=>n.replace(A,"/"),Y=n=>A+n.replace("/","");class J{constructor(){p(this,"index",0)}to(e,t={}){u(location.pathname)!==e&&history.pushState(t,"",Y(e))}back(e=1){if(this.index-1<0){console.log("페이지 없음");return}this.to(m[this.index-1],{stopPropagation:!0}),this.index=this.index-1}forward(e=1){if(this.index+1>m.length-1){console.log("페이지 없음");return}this.to(m[this.index+1],{stopPropagation:!0}),this.index=this.index+1}}var h,P,b,C,x,O,w,$,g,E,f,L;class Q{constructor(){c(this,h);c(this,b);c(this,x);c(this,w);c(this,g);c(this,f);p(this,"firstPage",!1);this.renderBase(),function(){var e=history.pushState,t=history.replaceState;history.pushState=function(o){e.apply(history,arguments),window.dispatchEvent(new CustomEvent("pushstate")),window.dispatchEvent(new CustomEvent("pagechange",{detail:{path:u(location.pathname),props:history.state}}))},history.replaceState=function(o){t.apply(history,arguments),window.dispatchEvent(new CustomEvent("replacestate")),window.dispatchEvent(new CustomEvent("pagechange",{detail:{path:u(location.pathname),props:history.state}}))},window.addEventListener("popstate",function(o){window.dispatchEvent(new CustomEvent("pagechange",{detail:{path:u(location.pathname),props:history.state}}))})}(),window.addEventListener("load",e=>{m.push(u(location.pathname)),i(this,h,P).call(this,u(location.pathname),{})}),window.addEventListener("pagechange",({detail:e})=>{const{path:t,props:o}=e;o.stopPropagation||m.push(u(location.pathname)),i(this,h,P).call(this,t,o)})}setPage(e){this.firstPage||(this.firstPage=!0,l.index=0,l.page=e),v.push(i(this,b,C).call(this,e))}setPages(e){for(let t of e)this.setPage(t)}renderBase(e={}){i(this,x,O).call(this),i(this,w,$).call(this,R())}render(e={}){var t;try{if(setTimeout(()=>{try{const o=_().querySelectorAll(".item");if(o.length>0){const a=Array.from(o);a.forEach(r=>{r.classList.remove("current")});const s=a.find(r=>r.innerText.match(new RegExp(l.page.name,"gi")));s&&s.classList.add("current")}}catch{}},0),l.page)i(this,g,E).call(this),i(this,f,L).call(this,l.page.page(e));else throw i(this,g,E).call(this),i(this,f,L).call(this,(t=v.find(o=>o.name==="404"))==null?void 0:t.page(e)),new Error("페이지가 없습니다.")}catch(o){console.debug(`안내: ${o.message}`)}}}h=new WeakSet,P=function(e,t){const o=v.findIndex(a=>a.path===e);l.index=o,l.page=v[o],this.render(t)},b=new WeakSet,C=function({name:e,path:t,page:o,props:a,preLoad:s,afterLoad:r}){return V({name:e,path:t,page:o,props:a,preLoad:s,afterLoad:r})},x=new WeakSet,O=function(){M().innerHTML=""},w=new WeakSet,$=function(e){const t=new DOMParser().parseFromString(e(),"text/html");console.log(t),M().append(...Array.from(t.body.children))},g=new WeakSet,E=function(){S().innerHTML=""},f=new WeakSet,L=function(e){const t=new DOMParser().parseFromString(e,"text/html");S().append(...Array.from(t.body.children))};class W{constructor(){const e=o=>{const a=o.target;a.closest("#menu-panel-exit-btn")&&(y()?this.openMenuPanel():this.closeMenuPanel()),a.closest("#menu")&&(y()?this.openMenuPanel():this.closeMenuPanel())},t=o=>{o.key==="Escape"&&(y()||(d().classList.remove("open"),d().classList.add("close")))};window.addEventListener("keydown",t),window.addEventListener("click",e)}openMenuPanel(){d().classList.add("open"),d().classList.remove("close")}closeMenuPanel(){d().classList.remove("open"),d().classList.add("close")}}class X{constructor(){p(this,"router",new Q);p(this,"navigator",new J);p(this,"ui",new W)}}const N=new X;window.manager=N;N.router.setPages(U);
