export default ({ title = "" }) => `
	<div class="container-80 d-flex flex-column gap-5">
		<div>
		<button onclick="manager.navigator.to('/', {name:'test'})">to home</button>
		</div>
	</div>
`;
