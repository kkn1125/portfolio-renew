import { PROFILE_IMG, RESPONSIVE, textTitle } from "../util/global";
import Projects from "../_projects";
import manager from "../core";
import PersonalProjects from "../_personalProjects";

export default ({ title = "" }) => `
	<div class="container-50 d-flex flex-column gap-5">
		<div>
			<div class="text-title-1">
				Project [${Projects.length}]
			</div>
			${manager.ui.card(Projects)}

			<div class="divider-3"></div>

			<div class="text-title-1">
				Toy Project [${PersonalProjects.length}]
			</div>
			${manager.ui.card(PersonalProjects)}
		</div>
	</div>
`;
