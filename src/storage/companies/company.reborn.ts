import { Company } from "@common/enums/compony";
import { Role } from "@common/enums/role";
import { Team } from "@common/enums/team";
import { CompanyModel } from "@models/company.model";
import { rebornBlockChain } from "@storage/projects/reborn/reborn.blockchain";

export const companyReborn = new CompanyModel({
  name: Company.Reborn,
  description: "블록체인 웹 페이지 제작 담당",
  roles: [Role.Backend],
  team: Team.Backend,
  projects: [rebornBlockChain],
  start: new Date(2022, 4),
  end: new Date(2022, 6),
});
