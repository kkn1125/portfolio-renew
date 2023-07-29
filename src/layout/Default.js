import { BRAND, MENU_LIST, YEAR } from "../util/global";

export default (element, gProps) => (props) =>
  `
	<header id="gnb" class="">
		<nav class="d-none-sm d-flex justify-content-between align-items-center px-5 py-1">
			<div id="brand" class="text-uppercase fs-2 f-bold user-select-none">
			<a class="text-decoration-none" onclick="manager.navigator.to('/')">
			portfolio
			</a>
			</div>
			<div id="gnb-menu" class="d-flex gap-1 f-bold text-uppercase user-select-none">
			${MENU_LIST.filter((item) => item.name !== "home")
        .map(
          (item) =>
            `<div class="item" onclick="manager.navigator.to('${item.path}')">${item.name}</div>`
        )
        .join("")}
			</div>
			<div id="menu">
				<span class="menu-line"></span>
				<span class="menu-line"></span>
				<span class="menu-line"></span>
			</div>
		</nav>
		<nav class="d-none d-flex-sm justify-content-between align-items-center px-5 py-1">
			<div id="brand" class="text-uppercase fs-2 f-bold user-select-none">
			<a class="text-decoration-none" onclick="manager.navigator.to('/')">
			portfolio
			</a>
			</div>
			<div id="gnb-menu" class="d-flex gap-1 f-bold text-uppercase user-select-none d-none">
			${MENU_LIST.filter((item) => item.name !== "home")
        .map(
          (item) =>
            `<div class="item" onclick="manager.navigator.to('${item.path}')">${item.name}</div>`
        )
        .join("")}
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

		${MENU_LIST.map(
      (item) =>
        `<div class="menu-panel-item hover-action" onclick="manager.navigator.to('${item.path}'); manager.ui.closeMenuPanel()">${item.name}</div>`
    ).join("")}
		
	</div>
	<footer class="text-center f-bold bg-gray text-white py-2">
		Copyright ${YEAR}. ${BRAND} All rights reserved.
	</footer>
	`;

// export default (element, gProps) => async (props) => {
//   const file = await fetch("src/views/default.html");
//   const content = await file.text();
//   const elements = await element({ ...gProps, ...props });
//   return new Promise((resolve) => {
//     resolve(
//       content
//         .replace('<script type="module" src="/@vite/client"></script>', "")
//         .replace("@replace body", elements)
//     );
//   });
// };
