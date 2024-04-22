import PersonalProjects from "../_personalProjects";
import Projects from "../_projects";
import manager from "../core";

export default ({ title = "" }) => `
	<div id="sub-app" class="d-flex justify-content-center overflow-x-auto">
	<!--
	<canvas id="layer-sub-app"></canvas>
	-->
	</div>
	<div class="container-90-sm container-50-md d-flex flex-column gap-5">
		<div class="my-10">
			<div class="text-title-3 my-10">
				Project [${Projects.length}]
			</div>
			${manager.ui.card(Projects)}

			<div class="divider-3"></div>

			<div class="text-title-3 my-10">
				Toy Project [${PersonalProjects.length}]
			</div>
			${manager.ui.card(PersonalProjects)}
		</div>
	</div>
`;
