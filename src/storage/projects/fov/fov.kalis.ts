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
    "기존 관리자 페이지 Svelte에서 React로 마이그레이션",
    "기존 API 서버 Python에서 NestJS로 마이그레이션",
    "유니티 클라이언트와 데이터 연동 검증 및 API 기능 개선",
    "비효율적인 데이터 요청 성능 저하 이슈로 쿼리 튜닝 및 성능 개선",
    "통계 그래프 데이터 요청 성능 저하 이슈로 쿼리 튜닝 및 성능 개선",
    "기존 관리자 페이지에서 수만개 데이터 요청 처리를 서버 사이드 페이지네이션 처리로 성능 개선",
    "프론트엔드 CPU 집약적 연산처리 서버사이드로 마이그레이션",
    "서버 요청 줄이고, 서버 연산 최적화",
  ],
  isSideProject: false,
  issues: null,
  images: null,
});
