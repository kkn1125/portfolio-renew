import manager from "../core";
import { convertToPageTemplate } from "../util/global";

export default ({ name = "" }) => `
	<div class="container-80 d-flex flex-column gap-5">
		
		<div class="text-title-3">
			test
		</div>
	
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
