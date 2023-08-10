import ProfileList from "../component/ProfileList";
import ProjectExprience from "../component/ProjectExprience";
import PersonalProjectExprience from "../component/PersonalProjectExprience";
import SkillIcon from "../component/SkillIcon";
import WorkExprience from "../component/WorkExprience";
import { ui } from "../core/manager";
import { PROFILE_IMG, RESPONSIVE, textTitle } from "../util/global";

// mode 설정
const mode = 0 ? "hidden" : "";

export default ({ title = "" }) => `
	<div class="container-70 d-flex flex-column gap-5">
		<div>
			
			${textTitle("resume", 3, true, false)}

			<div ${mode} class="divider-3"></div>

			<div ${mode} class="d-flex flex-column flex-row-${RESPONSIVE} gap-2 align-items-center w-75 m-auto">
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

			<div ${mode} class="divider-3"></div>

			<div ${mode} class="blockquote blockquote-3 blockquote-primary">
			리눅스 환경과 윈도우 환경 모두 사용하며, 보안 부분에서 암호화 및 OTP, 인증/인가에 관심이 있습니다.
			<br><br>
			대규모 트래픽에 효율적인 서버 아키텍처에 관심이 있습니다.
			</div>

			<div ${mode} class="divider-3"></div>

			${textTitle("skills", 2)}
			<div ${mode} class="divider-1"></div>
			<div ${mode} class="d-flex flex-column list-gap-2 list">

				<div class="divider-1"></div>
				${ui.renderSkillSet("backend", [
          "mariadb",
          "express",
          "fastify",
          "socketio",
          "uwebsockets",
          "jwt",
        ])}
				<div class="divider-1"></div>
				${ui.renderSkillSet("devops", ["jenkins", "docker", "nginx"])}
				<div class="divider-1"></div>
				${ui.renderSkillSet("testing", ["jest", "artillery"])}
				<div class="divider-1"></div>
				${ui.renderSkillSet("network", ["xterm", "postman"])}
				<div class="divider-1"></div>
				${ui.renderSkillSet("frontend", [
          "javascript",
          "typescript",
          "sass",
          "styled component",
          "mui",
        ])}

			</div>

			<div class="divider-3"></div>
			
			${textTitle("Project", 2)}
			${ui.renderDataList(ProjectExprience)}

			<div class="divider-3"></div>
			
			${textTitle("Toy Project", 2)}
			${ui.renderDataList(PersonalProjectExprience)}
			
			<div class="divider-3"></div>
			
			${textTitle("work exprience", 2)}
			${ui.renderDataList(WorkExprience, "work")}
			
			<div class="divider-3"></div>
			<div class="divider-3"></div>
		</div>

	</div>
`;
