import { Company } from "@common/enums/compony";
import { Role } from "@common/enums/role";
import { Team } from "@common/enums/team";
import { CompanyModel } from "@models/CompanyModel";
import { rebornBlockChain } from "@storage/projects/reborn/reborn.blockchain";

export const companyReborn = new CompanyModel({
  name: Company.Reborn,
  description: "NFT 마켓플레이스 웹 개발과 지갑 연동; 메타버스·Janus WebSocket 관련 프로젝트 참여",
  roles: [Role.Frontend, Role.Backend],
  team: Team.Backend,
  projects: [rebornBlockChain],
  start: new Date(2022, 4),
  end: new Date(2022, 6),
});
