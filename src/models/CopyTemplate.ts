import { roleTranslate } from "@common/enums/role";
import { during } from "@libs/during";
import { ProjectModel } from "./ProjectModel";

export function CopyTemplate(project: string | ProjectModel, index: number) {
  if (typeof project === "string") {
    return `${index + 1}) ${project}`;
  }

  // 상세 페이지의 문제 해결 과정은 유지하고, 복사 이력서는 같은 사례를 한 번만 설명합니다.
  const contributions = project.works
    .map((work) => `- ${work.content}${work.subWorks.length ? ": " + work.subWorks.map((sub) => sub.content).join(". ") : ""}`)
    .join("\n");
  const links = project.isSideProject && project.github
    ? `소스: ${project.github}`
    : "";

  return [
    `${index + 1}) ${project.title} | ${during(project.start, project.end, "진행 중")}`,
    `역할: ${project.roles.map((role) => roleTranslate[role]).join(", ")} | 기술: ${project.skills.map((skill) => skill.name).join(", ")}`,
    project.description.join(". "),
    contributions,
    links,
  ].filter(Boolean).join("\n");
}
