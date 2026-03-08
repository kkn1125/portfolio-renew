import { Company } from "@common/enums/compony";
import { Role } from "@common/enums/role";
import { Team } from "@common/enums/team";
import { CompanyModel } from "@models/CompanyModel";
import { onflouCardtalk } from "@storage/projects/onflou/onflou.cardtalk";

export const companyOnflou = new CompanyModel({
  name: Company.Onflou,
  description: "Onflou 프로젝트 백엔드 개발",
  roles: [Role.Backend],
  team: Team.Backend,
  projects: [onflouCardtalk],
  start: new Date(2025, 10),
});
