import { changeSign, PROFILE_IMG, RESPONSIVE, textTitle } from "../util/global";
import Projects from "../_projects";
import manager from "../core";

export default ({ page, project }) => `
	<div class="d-flex flex-column gap-2">
		<div style="background-color: #565656; background-image: url(${
      project.cover.startsWith("http")
        ? project.cover
        : "/images/" + project.name + project.cover
    }); background-size: cover; background-position: center center; background-repeat: no-repeat;min-height: 500px; filter: brightness(0.9)">
		</div>
		<div class="container-50 d-flex flex-column" style="gap: 0.3rem;">
			<div class="text-title-2">
				${project.title}
			</div>
			<hr class="w-100" />
			<div class="divider-1"></div>

			<div class="text-title-1">
				📄 프로젝트 정보
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
			${
        project.skills.length > 0
          ? `<div class="d-flex gap-1">
					<div>
						Skills
					</div>
					<div class="d-flex" style="gap: 0.2rem;">
						${project.skills
              .map((tag) => `<div class="tag tag-success">${tag}</div>`)
              .join("")}
					</div>
				</div>`
          : ""
      }

			<div class="d-flex" style="gap: 0.2rem;">
				<div>
					소속
				</div>
				<span class="tag tag-info">${project.team}</span>
			</div>

			${
        project.links.length > 0
          ? `<div class="divider-1"></div><div class="d-flex gap-1">${project.links
              .map(
                ({ name, url }) => `
					<div>
						<span class="tag tag-info">${name.toUpperCase()}</span> <a target="_blank" href="${url}" class="tag" style="text-decoration: none;font-size: 0.9rem; color: black;">${url}</a>
					</div>`
              )
              .join("")}</div>`
          : ""
      }

			<div class="divider-1"></div>

			<div class="blockquote blockquote-3">
				${project.desc}
			</div>

			${
        project.content
          ? `<div>
						${changeSign(project.content)}
					</div>`
          : ""
      }

			${
        project.movie
          ? `<span><iframe src="${project.movie}?autoplay=1" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe></span>`
          : ""
      }
		</div>
	</div>
`;
