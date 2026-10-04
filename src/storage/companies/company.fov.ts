import { Company } from "@common/enums/compony";
import { Role } from "@common/enums/role";
import { Team } from "@common/enums/team";
import { CompanyModel } from "@models/CompanyModel";
import { fovDbupdater } from "@storage/projects/fov/fov.dbupdater";
import { fovKalis } from "@storage/projects/fov/fov.kalis";

export const companyFov = new CompanyModel({
  name: Company.Fov,
  description: "공공기관 CMS·분석 API의 레거시 전환과 조회 구조 개선, 사내 데이터 갱신 도구·서버 환경 담당",
  roles: [Role.Server, Role.Backend, Role.Frontend],
  team: Team.Development,
  projects: [fovKalis, fovDbupdater],
  start: new Date(2024, 4),
  end: new Date(2024, 10),
});
