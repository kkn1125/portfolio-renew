import { Company } from "@common/enums/compony";
import { Role } from "@common/enums/role";
import { Team } from "@common/enums/team";
import { Skill } from "@libs/skill";
import { ProjectModel } from "@models/ProjectModel";
import Work from "@models/Work";

export const anderImomBackoffice = new ProjectModel({
  cover:
    "https://github.com/user-attachments/assets/654986ee-263d-42cc-959c-8b2c1cf11cef",
  github: null,
  demoSites: null,
  relations: null,
  path: "/ander/i-mom-backoffice",
  title: "아이맘 메타빌리지 백오피스 제작",
  description: [
    "웹 메타버스의 교육 콘텐츠·사용자 관리 화면과 관리자 API 개발",
  ],
  team: Team.Produce,
  company: Company.Ander,
  roles: [Role.Frontend, Role.Backend],
  skills: [
    Skill("typescript"),
    Skill("react"),
    Skill("jenkins"),
    Skill("nginx"),
    Skill("docker"),
  ],
  start: new Date(2023, 5),
  end: new Date(2023, 6),
  works: [
    new Work(
      "관리자 업무 흐름과 접근 제어 구현",
      "React 화면과 API를 연결하고 관리자 권한·세션 만료, 파일 업로드·콘텐츠 표시 순서를 관리하는 기능을 구성",
    ),
    new Work(
      "API 서버와 관리자 화면의 배포 구성",
      "API 서버에서 관리자 SPA를 함께 제공하는 구성을 적용하고 로컬·서버 운영체제에 맞춘 실행·배포 스크립트를 작성",
    ),
  ],
  isSideProject: false,
  issues: null,
  images: null,
});
