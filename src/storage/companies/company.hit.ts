import { Company } from "@common/enums/compony";
import { Role } from "@common/enums/role";
import { Team } from "@common/enums/team";
import { CompanyModel } from "@models/CompanyModel";
import { hitWeddingPro } from "@storage/projects/hit/hit.wedding.pro";

export const companyHit = new CompanyModel({
  name: Company.Hit,
  description: "웨딩 CRM·ERP의 백엔드를 단독 담당하며 업무 API·재고 계산·인증과 운영·배포를 개발·유지보수",
  roles: [Role.Backend, Role.Server],
  team: Team.Development,
  projects: [hitWeddingPro],
  start: new Date(2025, 2),
  end: new Date(2025, 7),
});
