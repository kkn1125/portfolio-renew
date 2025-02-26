import { Company } from "@common/enums/compony";
import { Role } from "@common/enums/role";
import { Team } from "@common/enums/team";
import { Skill } from "@libs/skill";
import { Issue } from "@models/Issue";
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
    "아이와 부모, 또는 예비 부모가 함께 메타버스 내에서 교육 영상을 시청하고 정보를 공유하는 서비스",
    "아이맘 메타빌리지 API 백오피스 제작, 아마존 클라우드 인스턴스에 배포 및 유지관리 담당",
  ],
  team: Team.Produce,
  company: Company.Ander,
  roles: [Role.Backend],
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
      "제한된 서비스 환경에서 프론트엔드 진입점 추가",
      "API에서 MVC로 렌더링하여 SPA + API로 혼합 빌드 구현"
    ),
    new Work(
      "교육 컨텐츠 이미지 파일 순서 적용",
      "우선순위를 설정하여 이미지를 상단으로 배치시켜 중요한 정보를 순차 전달"
    ),
    new Work(
      "관리자 페이지 구축",
      "관리자 계정을 추가하고, 권한 시스템을 추가하여 권한에 따라 기능 제한",
      "관리자의 권한 수준에 따라 기능 엄격하게 관리"
    ),
  ],
  isSideProject: false,
  issues: [
    new Issue({
      problem: "배포 자동화 작업 시 로컬과 실서버 운영체제 차이 극복",
      processes: [
        "로컬과 실서버 운영체제에 따라 쉘 스크립트를 별도 작성",
        "Github Webhook과 Jenkins의 pipeline 활용",
      ],
      solves: ["배포 자동화로 개발 시간 절약", "프로젝트 관리 용이성 향상"],
    }),
  ],
  images: null,
});
