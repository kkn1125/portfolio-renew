import WorkExperienceModel from "@/model/WorkExperienceModel";
import { MONTH } from "@/util/global";

const RebornSoft = new WorkExperienceModel();

RebornSoft.title = "(주)리본소프트";
RebornSoft.desc = "";
RebornSoft.team = "백엔드팀";
RebornSoft.role = ["backend"];
RebornSoft.skills = ["Node.js", "Next.js", "React", "MUI", "TypeScript"];
RebornSoft.start = new Date(2022, MONTH(5));
RebornSoft.end = new Date(2022, MONTH(7));
RebornSoft.inProgress = false;
RebornSoft.listOpen = true;
RebornSoft.list = [
  {
    header:
      "NFTMarketplace blockchain 서버 연결 및 데이터베이스 연결, API 개발",
    body: `backend 서버 & 데이터베이스 연결`,
  },
  {
    header: "NFTMarketplace 메인 페이지 제작",
    body: `frontend`,
  },
  {
    header: "WebRTC 개발에 필요한 Janus Gateway 소스코드 분석",
    body: `소스코드 분석`,
  },
];

export default RebornSoft;
