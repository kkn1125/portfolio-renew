import { Company } from "@common/enums/compony";
import { Role } from "@common/enums/role";
import { Team } from "@common/enums/team";
import { Skill } from "@libs/skill";
import { ProjectModel } from "@models/project.model";

export const fovKalis = new ProjectModel({
  cover: null,
  github: null,
  demoSites: null,
  relations: null,
  path: "/fov/kalis",
  title: "국토안전관리원 CMS",
  description: ["국토안전관리원 CMS 백오피스, API 서버 제작"],
  team: Team.Development,
  company: Company.Fov,
  roles: [Role.Server],
  skills: [Skill("typescript"), Skill("react"), Skill("nest")],
  start: new Date(2024, 6),
  end: null,
  works: [
    "기존 관리자 페이지를 Svelte에서 React로 마이그레이션",
    "기존 API 서버를 Python에서 NestJS로 마이그레이션",
    "유니티 클라이언트와의 데이터 연동 검증 및 API 기능 개선",
    "비효율적인 데이터 요청으로 인한 성능 저하 이슈 해결을 위해 쿼리 튜닝 및 성능 개선",
    "통계 그래프 데이터 요청 성능 저하 이슈 해결을 위한 쿼리 튜닝 및 성능 개선",
    "수만 개의 데이터 요청 처리를 서버 사이드 페이지네이션 처리로 성능 개선",
    "프론트엔드 CPU 집약적 연산을 서버사이드로 마이그레이션하여 성능 최적화",
    "서버 요청 수 줄이기 및 서버 연산 최적화 작업 수행",
    "빌드, 배포, zip 패키징 자동화 쉘 스크립트 작성 및 운용",
  ],
  isSideProject: false,
  issues: null,
  images: null,
});
