import { Company } from "@common/enums/compony";
import { Role } from "@common/enums/role";
import { Team } from "@common/enums/team";
import { CompanyModel } from "@models/CompanyModel";
import { anderImomApi } from "@storage/projects/ander/ander.imom.api";
import { anderImomBackoffice } from "@storage/projects/ander/ander.imom.backoffice";
import { anderMetaverseSocket } from "@storage/projects/ander/ander.metaverse.socket";
import { anderSocketResearch } from "@storage/projects/ander/ander.socket.research";
import { anderStreaming } from "@storage/projects/ander/ander.streaming";
import { anderUglymews } from "@storage/projects/ander/ander.uglymews";
import { anderWebRtc } from "@storage/projects/ander/ander.webrtc";

export const companyAnder = new CompanyModel({
  name: Company.Ander,
  description: "웹 메타버스·커머스의 API·DB 개발과 외부 연동·배포, 화상회의·미디어·서버 간 통신 개발 및 연구",
  roles: [Role.Backend, Role.Server],
  team: Team.Produce,
  projects: [
    anderImomApi,
    anderUglymews,
    anderWebRtc,
    anderMetaverseSocket,
    anderImomBackoffice,
    anderStreaming,
    anderSocketResearch,
  ],
  start: new Date(2022, 8),
  end: new Date(2023, 8),
});
