import { BRAND, YEAR } from "../util/global";

export default (element, gProps) => (props) =>
  `
	<header id="gnb" class="">
		<nav class="d-flex justify-content-between align-items-center px-5 py-1">
			<div class="t-uppercase">portfolio</div>
			<div class="d-flex gap-1 f-bold">
				<div>menu-1</div>
				<div>menu-2</div>
				<div>menu-3</div>
			</div>
			<div>Hamburg</div>
		</nav>
	</header>
		<main>
			<div>
				${element({ ...gProps, ...props })}
				<button onclick="manager.navigator.forward()">앞으로</button>
				<button onclick="manager.navigator.back()">뒤로</button>
			</div>
		</main>
	<footer class="t-center f-bold bg-gray text-white">
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
