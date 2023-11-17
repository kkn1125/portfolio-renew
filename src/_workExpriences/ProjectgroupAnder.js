import WorkExperienceModel from "@/model/WorkExperienceModel";
import { MONTH } from "@/util/global";

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
ProjectgroupAnder.end = new Date(2023, MONTH(9));
ProjectgroupAnder.inProgress = false;
ProjectgroupAnder.listOpen = true;
ProjectgroupAnder.list = [
  {
    header: "서버 환경 구축",
    body: `인프라`,
  },
  {
    header: "API 서버 제작",
    body: `백앤드 담당`,
  },
  {
    header: "DB 설계 관리",
    body: `데이터베이스 담당`,
  },
  {
    header: "개발 서버 관리",
    body: `인프라`,
  },
  {
    header: "서버 부하 테스트",
    body: `QA`,
  },
  {
    header: "미디어 공유 플랫폼 구축",
    body: `백앤드 제작 및 인프라`,
  },
];

export default ProjectgroupAnder;
