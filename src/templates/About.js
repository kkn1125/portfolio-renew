export default ({ title = "" }) => `
	<div>
		qweqwe${title}
		<button onclick="manager.navigator.to('/', {name:'test'})">to home</button>
	</div>
`;
