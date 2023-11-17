import { changeSign, PROFILE_IMG, RESPONSIVE, textTitle } from "../util/global";
import Projects from "../_projects";
import manager from "../core";
import { ditConvert, responsiveImagePath } from "../util/tool";

export default ({ page, project }) => `
	<div class="d-flex flex-column gap-2">
		<div class="divider-3"></div>
		<!--
		<div style="background-color: #565656; background-image: url(${
      project.cover.startsWith("http")
        ? project.cover
        : "/images/" + project.name + project.cover
    }); background-size: cover; background-position: center center; background-repeat: no-repeat;min-height: 500px; filter: brightness(0.9)">
		</div>
		
		-->
		<div class="container-50 d-flex flex-column" style="gap: 0.3rem; position: relative;">
			<div class="text-title-2 d-flex align-items-center gap-1">
			${project.title}
			${
        !project.links.find((link) => link.name === "demo")
          ? `<span class='tag tag-gray'>등록된 데모 사이트가 없습니다.</span>`
          : ""
      }
			</div>

			<div class="divider-3"></div>
			
			<div class="text-title-1">
				📄 프로젝트 정보
			</div>
			<table class="table">
				<tbody>
					<tr class="">
						<td width="80">Github</td>
						<td>
							<div class="d-flex" style="gap: 0.2rem;">
								<a target="_blank" href="${project.github}">${project.github}</a>
							</div>
						</td>
					</tr>
					<tr class="">
						<td width="80">역할</td>
						<td>
							<div class="d-flex" style="gap: 0.2rem;">
								${project.role.map((tag) => `<div class="tag tag-warn">${tag}</div>`).join("")}
							</div>
						</td>
					</tr>
					<tr class="">
						<td width="80">주요 스택</td>
						<td>
							<div class="d-flex" style="gap: 0.2rem;">
								${project.mainSkills
                  .map((tag) => `<div class="tag tag-error">${tag}</div>`)
                  .join("")}
							</div>
						</td>
					</tr>
					<tr class="">
						<td width="80">사용 스택</td>
						<td>
							<div class="d-flex" style="gap: 0.2rem;">
								${project.skills
                  .map((tag) => `<div class="tag tag-gray">${tag}</div>`)
                  .join("")}
							</div>
						</td>
					</tr>
					<tr class="">
						<td width="80">소속</td>
						<td>
							<div class="d-flex" style="gap: 0.2rem;">
								<div class="tag tag-info">${project.team}</div>
							</div>
						</td>
					</tr>
				</tbody>
			</table>
			
			${
        project.links.length > 0
          ? `<div class="divider-1"></div><div class="text-title-1">Links</div><div class="list">${project.links
              .map(
                ({ name, url }) => `
				<div class="list-item align-items-center">
					<span class="tag tag-info">${name.toUpperCase()}</span> <a target="_blank" href="${url}" class="tag" style="text-decoration: none;font-size: 0.9rem; color: black;">${url}</a>
				</div>`
              )
              .join("")}</div>`
          : ""
      }
			
			<div class="divider-1"></div>
			<div class="text-title-2">
				개요
			</div>
			<div class="blockquote blockquote-3">
			${project.desc}
			</div>
			
			${
        project.movie
          ? `<div class="divider-1"></div><span align="center"><video src="${project.movie}" autoplay muted height="350" frameborder="0" style="max-width:100%;"></video></span>`
          : ""
      }
			
			<div class="divider-1"></div>
			<div class="text-title-1">
				담당 업무
			</div>
			<div class="list" style="gap: 0.3rem;">
				${project.list
          .map(
            (item) => `<div class="list-item">${ditConvert(item.header)}</div>`
          )
          .join("")}
			</div>

			${project.content ? `<div class="divider-1"></div>${project.content}` : ""}

			<div class="divider-1"></div>

			${
        project.troubleshooting.length > 0
          ? `<div class="text-title-1">
					문제 상황
				</div>
				
				<div class="d-flex flex-column" style="gap: 2rem;">
				${project.troubleshooting
          .map(
            ({ problem, resolve, process, result }) =>
              `<div class="d-flex flex-column list" style="gap: 0.5rem;">
								<div class="list-item">
									<span class="fw-bold me-3">Issue</span>
									<span>${problem}</span>
								</div>
								<div class="d-flex flex-column list" style="gap: 0.1rem;">
									<div class="list-item fw-bold">해결방안</div>
									${resolve.map((resolve) => `<div class="list-item">${resolve}</div>`).join("")}
								</div>
								<div class="d-flex flex-column list" style="gap: 0.1rem;">
									<div class="list-item fw-bold">과정</div>
									${process.map((process) => `<div class="list-item">${process}</div>`).join("")}
								</div>
								<div class="d-flex flex-column list" style="gap: 0.1rem;">
									<div class="list-item fw-bold">결과</div>
									${result.map((result) => `<div class="list-item">${result}</div>`).join("")}
								</div>
							</div>`
          )
          .join("")}
				</div>`
          : ""
      }
			

			<!--
			<div class="divider-1"></div>
			<div class="text-title-1">
				미리보기
			</div>
			<div style="background-color: #565656; background-image: url(${responsiveImagePath(
        project.name,
        project.cover
      )}); background-size: contain; background-position: center center; background-repeat: no-repeat;min-height: 500px; filter: brightness(0.9)">
			</div>
			-->

			${
        project.images.length > 0
          ? `<div class="divider-3"></div><div class="text-title-2">프로젝트 이미지</div><div class="d-flex flex-column gap-2">${project.images
              .map(
                ([title, image]) =>
                  `<div class="d-flex flex-column" style="box-shadow: 0 0 0.5rem 0.2rem #00000056;"><img src="${responsiveImagePath(
                    project.name,
                    image
                  )}" alt="${title}" title="${title}" /><div class="text-center f-bold text-white bg-info bg-opacity-30" style="padding: 0.5rem;font-size: 0.85rem;">${title}</div></div>`
              )
              .join("")}</div>`
          : ""
      }

		</div>
		<div class="divider-3"></div>
	</div>
`;
