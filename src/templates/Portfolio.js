import { PROFILE_IMG, RESPONSIVE, textTitle } from "../util/global";
import Projects from "../_projects";
import manager from "../core";

export default ({ title = "" }) => `
	<div class="container-80 d-flex flex-column gap-5">
		<div>
			${manager.ui.card(Projects)}
		</div>
	</div>
`;
