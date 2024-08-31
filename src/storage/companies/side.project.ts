import { Company } from "@common/enums/compony";
import { Role } from "@common/enums/role";
import { Team } from "@common/enums/team";
import { sortByEnd } from "@libs/sortBy";
import { CompanyModel } from "@models/company.model";
import sideProjects from "@storage/side-projects";

export const sideProject = new CompanyModel({
  name: Company.Side,
  description: "개인/단체로 진행한 사이드프로젝트입니다.",
  team: Team.Personal,
  roles: [Role.Backend],
  projects: sortByEnd(sideProjects),
  start: new Date(2021, 8),
});
