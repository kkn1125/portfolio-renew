import WorkExperienceModel from "../model/WorkExperienceModel";
import { MONTH } from "../util/global";

const ProjectgroupAnder = new WorkExperienceModel();

ProjectgroupAnder.title = "(주)프로젝트그룹 앤더";
ProjectgroupAnder.desc = "";
ProjectgroupAnder.team = "제작팀";
ProjectgroupAnder.role = ["backend"];
ProjectgroupAnder.skills = [
  "Jenkins",
  "Node.js",
  "Express.js",
  "Fastify",
  "TypeORM",
  "Docker",
  "Nginx",
  "React",
  "MUI",
  "TypeScript",
  "Artillery",
  "uWebSockets.js",
  "Linux",
  "xterm",
  "postman",
  "PM2",
  "NebulaGraph",
  "Ubuntu",
  "RDP",
  "AWS EC2",
];
ProjectgroupAnder.start = new Date(2022, MONTH(9));
ProjectgroupAnder.end = new Date();
ProjectgroupAnder.inProgress = true;
ProjectgroupAnder.listOpen = true;
ProjectgroupAnder.list = [
  {
    header: "육아 교육 메타버스 서비스 백오피스 제작",
    body: `백오피스 제작`,
  },
  {
    header: "육아 교육 메타버스 서비스 DB/API 서버 설계 및 제작",
    body: `서버 설계 제작`,
  },
  {
    header: "라이브 커머스 스트리밍 서비스 제작",
    body: `스트리밍 서비스 제작`,
  },
  {
    header: "회의형 화상 채팅 플랫폼 제작",
    body: `미디어 서버 구현, 소켓 서버 제작`,
  },
  {
    header: "3D 메타버스 멀티플레이 가능한 소켓 서버 구축 및 DB 이중화",
    body: `DB 이중화, 소켓 서버 분산 아키텍처 설계 및 구축`,
  },
];

export default ProjectgroupAnder;
