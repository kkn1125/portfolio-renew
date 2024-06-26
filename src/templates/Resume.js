import PersonalProjectExprience from "@/component/PersonalProjectExprience";
import ProfileList from "@/component/ProfileList";
import ProjectExprience from "@/component/ProjectExprience";
import WorkExprience from "@/component/WorkExprience";
import { ui } from "@/core/manager";
import { PROFILE_IMG, RESPONSIVE, textTitle } from "@/util/global";

// mode 설정
const mode = 0 ? "hidden" : "";

export default ({ title = "" }) => {
  const skills = []
    .concat(ProjectExprience, PersonalProjectExprience, WorkExprience)
    .map((el) => el.skills)
    .flat(1)
    .reduce(
      (acc, cur) => {
        if (!acc[0].includes(cur.toLowerCase())) {
          acc[0].push(cur.toLowerCase());
          acc[1].push(cur);
        }
        return acc;
      },
      [[], []]
    )[1];
  const backend = [
    "nest",
    "fastify",
    "express",
    "mariadb",
    "mysql",
    "socketio",
    "uwebsockets",
    "jwt",
  ];
  const frontend = [
    "javascript",
    "typescript",
    "sass",
    "styled component",
    "mui",
  ];
  return `
  <div class="container-90-sm container-50-md d-flex flex-column gap-5">
      
    <section class="d-flex flex-column gap-2">
      ${textTitle("resume", 3, true, false)}

      <div ${mode} class="d-flex flex-column flex-row-${RESPONSIVE} gap-2 align-items-center m-auto">
        <div class="d-flex border border-line-1 border-gray-75">
          <img src="${PROFILE_IMG}" class="profile-responsive" />
        </div>

        <div class="d-flex flex-column list">
          ${ProfileList.map(
            (data) =>
              `<div class="list-item gap-1">
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
        ${ui.renderSkillSet("backend", backend)}
        <div class="divider-1"></div>
        ${ui.renderSkillSet("devops", ["jenkins", "docker", "nginx"])}
        <div class="divider-1"></div>
        ${ui.renderSkillSet("testing", ["jest", "artillery"])}
        <div class="divider-1"></div>
        ${ui.renderSkillSet("network", ["xterm", "postman"])}
        <div class="divider-1"></div>
        ${ui.renderSkillSet("frontend", frontend)}
      </div>
    </section>

    <!--
    <section class="d-flex align-items-center flex-wrap" style="gap: 0.5rem;">
      ${skills.map(ui.mapSkillsBadge("info")).join("")}
    </section>
    -->


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
};
