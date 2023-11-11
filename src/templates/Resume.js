import ProfileList from "@/component/ProfileList";
import ProjectExprience from "@/component/ProjectExprience";
import PersonalProjectExprience from "@/component/PersonalProjectExprience";
import SkillIcon from "@/component/SkillIcon";
import WorkExprience from "@/component/WorkExprience";
import { ui } from "@/core/manager";
import { PROFILE_IMG, RESPONSIVE, textTitle } from "@/util/global";

// mode 설정
const mode = 0 ? "hidden" : "";

export default ({ title = "" }) => `
  <div class="container-70 d-flex flex-column gap-5">
      
    <section class="d-flex flex-column gap-2">
      ${textTitle("resume", 3, true, false)}

      <div ${mode} class="d-flex flex-column flex-row-${RESPONSIVE} gap-2 align-items-center m-auto">
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

			<!--
      <div ${mode} class="blockquote blockquote-3 blockquote-primary">
      문서화와 자동화에 관심을 가지고 있습니다.
      <br>
      대규모 트래픽에 효율적인 서버 아키텍처에 관심이 있습니다.
      </div>
			-->

    </section>

    <section class="d-flex flex-column gap-2">
      ${textTitle("skills", 2)}
      <div ${mode} class="divider-1"></div>
      <div ${mode} class="d-flex flex-column list-gap-2 list">

        <div class="divider-1"></div>
        ${ui.renderSkillSet("backend", [
          "nest",
          "fastify",
          "express",
          "mariadb",
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
    </section>

    <section class="d-flex flex-column gap-3">
      ${textTitle("Project", 2)}
			<div class="d-flex flex-column gap-2">
      	${ui.renderDataList(ProjectExprience)}
			</div>
    </section>

    <section class="d-flex flex-column gap-3">
      ${textTitle("Toy Project", 2)}
			<div class="d-flex flex-column gap-2">
	      ${ui.renderDataList(PersonalProjectExprience)}
			</div>
    </section>
    
    <section class="d-flex flex-column gap-3">
      ${textTitle("work exprience", 2)}
			<div class="d-flex flex-column gap-2>
      	${ui.renderDataList(WorkExprience, "work")}
			</div>
    </section>

  </div>
`;
