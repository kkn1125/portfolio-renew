import { Company } from "@common/enums/compony";
import { Role } from "@common/enums/role";
import { Team } from "@common/enums/team";
import { CompanyModel } from "@models/CompanyModel";
import { onflouCardtalk } from "@storage/projects/onflou/onflou.cardtalk";
import { onflouCardtalkOps } from "@storage/projects/onflou/onflou.cardtalk.ops";
import { onflouDaldaleng } from "@storage/projects/onflou/onflou.daldaleng";

export const companyOnflou = new CompanyModel({
  name: Company.Onflou,
  description:
    "실시간 게임 WebSocket 서버 구축, 이중화 운영, 온프레미스 인프라 구축 및 다협력사 협업 프로젝트",
  roles: [Role.Backend, Role.Server],
  team: Team.Backend,
  projects: [onflouCardtalk, onflouCardtalkOps, onflouDaldaleng],
  start: new Date(2025, 10),
});
