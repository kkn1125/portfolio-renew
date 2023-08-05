import ProfileList from "../component/ProfileList";
import ProjectExprience from "../component/ProjectExprience";
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

			<div ${mode} class="d-flex flex-column flex-row-${RESPONSIVE} gap-2 align-items-center">
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
			Node.js와 TypeScript를 사용하며, API 서버 개발과 소켓서버, 서버간 메세지 처리 및 DB 이중화에 대한 경험이 있으며, Docker와 Nginx를 사용하여 로드밸런싱을 통해 트래픽 분산 서버 구조를 구현한 경험이 있습니다.<br /><br />새로운 문제에 직면할 때마다 원인을 찾고 이해하며, 테스트 코드를 작성하여 풀어나가는 것을 지향합니다.<br /><br />네트워킹과 보안에 관심을 가지고, 더 많은 트래픽을 소화하는 효율적인 서버 아키텍처를 학습하기 위해 발전하고 있습니다.
			</div>

			<div ${mode} class="divider-3"></div>

			${textTitle("skills", 2)}
			<div ${mode} class="divider-1"></div>
			<div ${mode} class="d-flex flex-column list-gap-2 list">

				<div class="divider-1"></div>
				${ui.renderSkillSet("frontend", [
          "javascript",
          "typescript",
          "sass",
          "styled component",
          "mui",
        ])}
				<div class="divider-1"></div>
				${ui.renderSkillSet("backend", [
          "mariadb",
          "docker",
          "nginx",
          "express",
          "fastify",
          "socketio",
          "uwebsockets",
          "jwt",
        ])}
				<div class="divider-1"></div>
				${ui.renderSkillSet("testing", ["jest"])}
				<div class="divider-1"></div>
				${ui.renderSkillSet("network", ["xterm", "postman"])}
				

			</div>

			<div class="divider-3"></div>
			
			${textTitle("Project", 2)}
			${ui.renderDataList(ProjectExprience)}
			
			<div class="divider-3"></div>
			
			${textTitle("work exprience", 2)}
			${ui.renderDataList(WorkExprience, "work")}
			
			<div class="divider-3"></div>
			<div class="divider-3"></div>
		</div>

	</div>
`;
