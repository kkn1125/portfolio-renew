import icons from "../../assets/icons";
import ProfileList from "../../component/ProfileList";
import ProjectExprience from "../../component/ProjectExprience";
import SkillIcon from "../../component/SkillIcon";
import WorkExprience from "../../component/WorkExprience";
import { PROFILE_IMG, textTitle } from "../util/global";
import { renderDataList } from "../util/tool";

export default ({ title = "" }) => `
	<div class="container-70 d-flex flex-column gap-5">
		<div>
			
			${textTitle("resume", 3, true, false)}

			<div class="divider-3"></div>

			<div class="d-flex flex-column flex-row-lg gap-2 align-items-center">
				<div class="d-flex border border-line-1 border-gray-75">
					<img src="${PROFILE_IMG}" class="profile-responsive" />
				</div>

				<div class="d-flex flex-column list">
					${ProfileList.map(
            (data) =>
              `<div class="list-item">
								<span class="header">${data.header}</span>
								<span class="body">${data.body}</span>
							</div>`
          ).join("")}
				</div>
			</div>

			<div class="divider-3"></div>

			${textTitle("skills", 2)}
			<div class="divider-1"></div>
			<div class="d-flex flex-column list-gap-2 list">

				<div class="divider-1"></div>
				<div class="list-item justify-content-center align-items-center flex-wrap">
					<div class="text-gray text-uppercase f-bold">
					frontend
					</div>
					<div class="d-flex flex-1 justify-content-start gap-3 flex-wrap">
						${SkillIcon("javascript")}
						${SkillIcon("typescript")}
						${SkillIcon("sass")}
						${SkillIcon("styled-component")}
						${SkillIcon("mui")}
					</div>
				</div>
				
				<div class="divider-1"></div>
				<div class="list-item justify-content-center align-items-center flex-wrap">
					<div class="text-gray text-uppercase f-bold">
						backend
					</div>
					<div class="d-flex flex-1 justify-content-start gap-3 flex-wrap">
						${SkillIcon("mariadb")}
						${SkillIcon("docker")}
						${SkillIcon("nginx")}
						${SkillIcon("express")}
						${SkillIcon("fastify")}
						${SkillIcon("socketio")}
						${SkillIcon("uwebsockets")}
						${SkillIcon("jwt")}
					</div>
				</div>
				
				<div class="divider-1"></div>
				<div class="list-item justify-content-center align-items-center flex-wrap">
					<div class="text-gray text-uppercase f-bold">
						testing
					</div>
					<div class="d-flex flex-1 justify-content-start gap-3 flex-wrap">
						${SkillIcon("jest")}
					</div>
				</div>
				
				<div class="list-item justify-content-center align-items-center flex-wrap">
					<div class="text-gray text-uppercase f-bold">
						network
					</div>
					<div class="d-flex flex-1 justify-content-start gap-3 flex-wrap">
						${SkillIcon("xterm")}
						${SkillIcon("postman")}
					</div>
				</div>

			</div>

			<div class="divider-3"></div>
			
			${textTitle("Project", 2)}
			${renderDataList(ProjectExprience)}
			
			<div class="divider-3"></div>
			
			${textTitle("work exprience", 2)}
			${renderDataList(WorkExprience, "work")}
			
			<div class="divider-3"></div>
			<div class="divider-3"></div>
		</div>

	</div>
`;
