import { Company } from "@common/enums/compony";
import { Role } from "@common/enums/role";
import { Team } from "@common/enums/team";
import { CompanyModel } from "@models/CompanyModel";
import { hitWeddingPro } from "@storage/projects/hit/hit.wedding.pro";

export const companyHit = new CompanyModel({
  name: Company.Hit,
  description: "Wedding Pro 프로젝트 백엔드 개발 및 유지보수",
  roles: [Role.Backend, Role.Server],
  team: Team.Development,
  projects: [hitWeddingPro],
  isIt: true,
  start: new Date(2025, 2),
  end: new Date(2025, 7),
});
