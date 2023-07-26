export default (element, gProps) => (props) =>
  `
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
	${element({ ...gProps, ...props })}
	<hr />
	<button onclick="manager.navigator.forward()">앞으로</button>
	<button onclick="manager.navigator.back()">뒤로</button>
	`;
