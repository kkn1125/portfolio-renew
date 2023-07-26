import manager from "../core";

export default ({ name = "" }) => `
	<div>
		qweqwe${name}
		<button onclick="manager.navigator.to('/about')">to about</button>
	</div>
`;
