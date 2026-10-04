import { during } from "@libs/during";
import { CopyTemplate } from "@models/CopyTemplate";
import { companies } from "@storage/companies";
import { Information } from "@storage/introduce/information";
import { sideNarang } from "@storage/side-projects/side.narang";
import { sideNuvia } from "@storage/side-projects/side.nuvia";

export function getResumeText() {
  const career = Object.values(companies)
    .filter((company) => company.projects.length > 0)
    .map((company) => [
      `## ${company.name} | ${during(company.start, company.end, "재직 중")}`,
      company.description,
      company.projects.map(CopyTemplate).join("\n\n"),
    ].join("\n\n"))
    .join("\n\n\n");

  // 경력과 겹치는 개인 프로젝트는 상세 페이지에 남기고, API 책임 범위가 드러나는 두 사례를 선택합니다.
  const side = [sideNuvia, sideNarang].map(CopyTemplate).join("\n\n");

  return [
    `# ${Information.name} | 백엔드 개발자`,
    `이메일: ${Information.email}\nGitHub: ${Information.github}\n블로그: ${Information.blog}`,
    Information.title,
    Information.description.join("\n\n"),
    `핵심 경험\n${Information.coreCompetencies.map((item) => "- " + item).join("\n")}`,
    "주요 기술: TypeScript·Node.js·NestJS / Java·Spring Boot / TypeORM·MyBatis·MySQL·MariaDB / Socket.IO·Redis\n관리자 화면·운영: React / Docker·Jenkins·Linux",
    `# 실무 경력\n\n${career}`,
    `# 대표 개인·팀 프로젝트\n\n${side}`,
  ].join("\n\n");
}
