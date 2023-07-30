import icons from "../../assets/icons";
import ProfileList from "../../component/ProfileList";
import SkillIcon from "../../component/SkillIcon";
import WorkExprience from "../../component/WorkExprience";
import { PROFILE_IMG } from "../util/global";

export default ({ title = "" }) => `
	<div class="container-50 d-flex flex-column gap-5">
		<div>
			
			<div class="text-title-3 text-center">
				Resume
			</div>

			<div class="divider-2"></div>

			<div class="d-flex flex-column-sm flex-row-md gap-2 align-items-center">
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

			<div class="divider-2"></div>

			<div class="text-title-2 text-title-dash-end mb-2">
					Skills
			</div>

			<div class="d-flex flex-column list-gap-2 list">

				<div class="text-title-1 text-title-dash-end text-capitalize">
					frontend
				</div>
				<div class="divider-1"></div>
				<div class="list-item justify-content-center">
					${SkillIcon("javascript")}
					${SkillIcon("typescript")}
					${SkillIcon("sass")}
					${SkillIcon("styledcomponent")}
					${SkillIcon("mui")}
				</div>
				
				<div class="text-title-1 text-title-dash-end text-capitalize">
					backend
				</div>
				<div class="divider-1"></div>
				<div class="list-item justify-content-center flex-wrap">
					${SkillIcon("mariadb")}
					${SkillIcon("docker")}
					${SkillIcon("nginx")}
					${SkillIcon("express")}
					${SkillIcon("fastify")}
					${SkillIcon("socketio")}
					${SkillIcon("uwebsockets")}
					${SkillIcon("jwt")}
				</div>
				
				<div class="text-title-1 text-title-dash-end text-capitalize">
					testing
				</div>
				<div class="divider-1"></div>
				<div class="list-item justify-content-center">
					${SkillIcon("jest")}
				</div>
				
				<div class="text-title-1 text-title-dash-end text-capitalize">
					network
				</div>
				<div class="list-item justify-content-center">
					${SkillIcon("xterm")}
					${SkillIcon("postman")}
				</div>

			</div>

			<div class="divider-2"></div>

			<div class="text-title-2 text-title-dash-end mb-2">
				work exprience <span class="text-title-deco-end"></span>
			</div>

			${WorkExprience}
	
		</div>

	</div>
`;
