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
    "교육 플랫폼의 실시간 게임 서버 구축부터 API·관리자·배치 운영, 인프라 변경과 협력사 요구사항 조율까지 담당",
  roles: [Role.Backend, Role.Server],
  team: Team.Backend,
  projects: [onflouCardtalk, onflouCardtalkOps, onflouDaldaleng],
  start: new Date(2025, 10),
});
