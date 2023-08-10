import { PROFILE_IMG, RESPONSIVE, textTitle } from "../util/global";
import Projects from "../_projects";
import manager from "../core";

export default ({ page, project }) => `
	<div class="d-flex flex-column gap-2">
		<div style="background-image: url(${
      project.cover
    }); background-size: cover; background-position: center center; background-repeat: no-repeat;min-height: 300px;)">
		</div>
		<div class="container-80 d-flex flex-column" style="gap: 0.3rem;">
			<div class="text-title-2">
				${project.title}
			</div>

			<div class="divider-1"></div>

			<div class="text-title-1">
				프로젝트 정보
			</div>
			<div class="d-flex gap-1">
				<div>
					Main Skill
				</div>
				<div class="d-flex" style="gap: 0.2rem;">
					${project.mainSkills
            .map((tag) => `<div class="tag tag-info">${tag}</div>`)
            .join("")}
				</div>
			</div>
			<div class="d-flex gap-1">
				<div>
					Skills
				</div>
				<div class="d-flex" style="gap: 0.2rem;">
					${project.skills
            .map((tag) => `<div class="tag tag-success">${tag}</div>`)
            .join("")}
				</div>
			</div>

			<div class="divider-1"></div>

			<div class="blockquote blockquote-3">
				${project.desc}
			</div>
		</div>
	</div>
`;
