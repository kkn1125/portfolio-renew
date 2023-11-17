import ProjectModel from "@/model/ProjectModel";
import { MONTH } from "@/util/global";

const MediAPIServer = new ProjectModel();

MediAPIServer.title = "육아 교육 메타버스 API 서버";
MediAPIServer.desc =
  "엄마와 자녀 또는 예비 엄마들이 3D 웹 메타버스 내에서 교육을 시청하고, 육아에 대한 정보를 공유하는 서비스";
MediAPIServer.team = "(주)프로젝트그룹 앤더";
MediAPIServer.role = ["backend"];
MediAPIServer.mainSkills = ["Fastify", "TypeScript", "TypeORM"];
MediAPIServer.skills = [
  "Formik",
  "yup",
  "JWT",
  "FTP",
  "Linux",
  "Jenkins",
  "Docker",
  "Nginx",
];
MediAPIServer.start = new Date(2023, MONTH(3));
MediAPIServer.end = new Date(2023, MONTH(5));
MediAPIServer.inProgress = false;
MediAPIServer.listOpen = true;
MediAPIServer.list = [
  {
    header: "AWS 서버 빌드 배포",
    body: `infra`,
  },
  {
    header: "쉘 스크립트를 이용한 Docker 빌드, 배포 자동화",
    body: `devops`,
  },
  {
    header: "docker-compose를 이용한 컨테이너 관리",
    body: `devops`,
  },
  {
    header: "DB, API, 서버 아키텍처 설계 및 제작",
    body: `backend`,
  },
  {
    header:
      "데이터베이스 관리 및 유지보수성을 고려한 TypeORM 사용 제안 및 도입",
    body: `backend`,
  },
  {
    header: "이미지 호스팅 서버 연동",
    body: `backend`,
  },
  {
    header: "DB명세서 작성",
    body: `document`,
  },
  {
    header: "OpenAPI 기반으로 API 명세서 및 사용설명서 제작",
    body: `document`,
  },
];
MediAPIServer.troubleshooting = [
  {
    problem: "사용자 증가에 따른 데이터베이스 부하증가",
    process: [
      "DB 이중화로 읽기 기능과 수정 기능 분리",
      "마스터 DB에서 읽기 기능 수행",
      "슬레이브 DB에서 생성,수정,삭제 기능 수행",
    ],
    resolve: [
      "마스터 DB와 슬레이브 DB를 분리",
      "AWS EC2 인스턴스 추가 후 개별로 DB 설치 및 연결",
    ],
    result: ["DB에서 주로 일어나는 읽기 기능을 분리하여 부하 분산"],
  },
];
MediAPIServer.name = "m-api-server";
MediAPIServer.path = "/m-api-server";

export default MediAPIServer;
