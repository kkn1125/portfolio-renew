import manager from "../core";
import { convertToPageTemplate } from "../util/global";


export default ({ name = "" }) => `
	<div>
		
		<button onclick="manager.navigator.to('/about')">to about</button>
	</div>
`;

// export default async (props = {}) => {
//   Object.assign(
//     props,
//     Object.fromEntries(Object.entries(props).map(([k, v]) => [k, v ?? "]"]))
//   );

//   props.name ??= "devkimson";

//   const file = await fetch("src/views/home.html");
//   const content = await file.text();

//   return new Promise((resolve) => {
//     resolve(convertToPageTemplate(content, props));
//   });
// };
