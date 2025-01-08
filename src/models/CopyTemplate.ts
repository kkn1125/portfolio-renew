import { during } from "@libs/during";
import { ProjectModel } from "./project.model";
import { calcDiffDate } from "@libs/calcDiffDate";

export function CopyTemplate(project: ProjectModel, index: number) {
  return `
${index + 1}) 프로젝트 : ${project.title}${
    project.testAccount
      ? `\n - 테스트 계정*   :\n  ${project.testAccount
          .map((account) => `  - ID: ${account.id} / PW: ${account.password}`)
          .join("\n")}`
      : ""
  }
 - 소속     : ${project.company}
 - 기간     : ${during(
   project.start,
   project.end,
   "진행 중"
 )} / (${calcDiffDate(project.end, project.start)} 개월)
 - 역할     : ${project.roles.join(", ")}
 - 내용     : ${project.description[0]}
 - 기여도 :
${project.works.map((work) => `    -${work}`).join("\n")}`.trim();
}
