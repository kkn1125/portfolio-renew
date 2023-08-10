import ProjectModel from "../model/ProjectModel";
import { MONTH } from "../util/global";

const MedienceAPIServer = new ProjectModel();

MedienceAPIServer.title = "육아 교육 메타버스 API 서버";
MedienceAPIServer.desc =
  "엄마와 자녀 또는 예비 엄마들이 3D 웹 메타버스 내에서 교육을 시청하고, 육아에 대한 정보를 공유하는 서비스";
MedienceAPIServer.team = "(주)프로젝트그룹 앤더";
MedienceAPIServer.role = ["backend"];
MedienceAPIServer.mainSkills = ["Fastify", "TypeScript", "TypeORM"];
MedienceAPIServer.skills = [
  "Node.js",
  "Formik",
  "yup",
  "JWT",
  "FTP",
  "Linux",
  "Jenkins",
  "Docker",
  "Nginx",
];
MedienceAPIServer.start = new Date(2023, MONTH(3));
MedienceAPIServer.end = new Date(2023, MONTH(5));
MedienceAPIServer.inProgress = false;
MedienceAPIServer.listOpen = true;
MedienceAPIServer.list = [
  {
    header: "AWS 서버 빌드 배포",
    body: `backend`,
  },
  {
    header: "DB, API, 서버 아키텍처 설계 및 제작",
    body: `backend`,
  },
  {
    header: "사용자 API 호출에 필요한 HMAC 토큰 제작 및 적용",
    body: `backend`,
  },
  {
    header: "메타버스 내 금지어 등록 및 필터링",
    body: `backend`,
  },
  {
    header:
      "API 응답 속도 최적화 위해 cache 기능 개발 및 적용 (res time: 17ms -> 3ms)",
    body: `backend`,
  },
  {
    header: "DB, API 명세서 및 사용설명서 등 문서화",
    body: `backend`,
  },
];
MedienceAPIServer.name = "m-api-server";
MedienceAPIServer.path = "/m-api-server";

export default MedienceAPIServer;
