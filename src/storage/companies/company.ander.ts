import { Company } from "@common/enums/compony";
import { Role } from "@common/enums/role";
import { Team } from "@common/enums/team";
import { CompanyModel } from "@models/company.model";
import { anderImomApi } from "@storage/projects/ander/ander.imom.api";
import { anderImomBackoffice } from "@storage/projects/ander/ander.imom.backoffice";
import { anderMetaverseSocket } from "@storage/projects/ander/ander.metaverse.socket";
import { anderStreaming } from "@storage/projects/ander/ander.streaming";
import { anderUglymews } from "@storage/projects/ander/ander.uglymews";
import { anderWebRtc } from "@storage/projects/ander/ander.webrtc";

export const companyAnder = new CompanyModel({
  name: Company.Ander,
  description: "사내 개발 서버 및 AWS EC2 관리, 클라우드 서버 운영 및 배포, API 및 DB 설계, 제작, 백오피스 개발",
  roles: [Role.Backend, Role.Server],
  team: Team.Produce,
  projects: [
    anderUglymews,
    anderImomBackoffice,
    anderStreaming,
    anderImomApi,
    anderWebRtc,
    anderMetaverseSocket,
  ],
  start: new Date(2022, 8),
  end: new Date(2023, 8),
});
