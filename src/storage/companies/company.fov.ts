import { Company } from "@common/enums/compony";
import { Role } from "@common/enums/role";
import { Team } from "@common/enums/team";
import { CompanyModel } from "@models/company.model";
import { fovDbupdater } from "@storage/projects/fov/fov.dbupdater";
import { fovKalis } from "@storage/projects/fov/fov.kalis";

export const companyFov = new CompanyModel({
  name: Company.Fov,
  description: "사내 서버 관리 및 AWS 클라우드 데이터 마이그레이션,  API 및 DB 개발",
  roles: [Role.Server, Role.Backend, Role.Frontend],
  team: Team.Development,
  projects: [fovKalis, fovDbupdater],
  start: new Date(2024, 4),
  end: new Date(2024, 10),
});
