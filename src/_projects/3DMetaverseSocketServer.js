import ProjectModel from "../model/ProjectModel";
import { MONTH } from "../util/global";

const MetaverseSocketServer = new ProjectModel();

MetaverseSocketServer.title = "3D 메타버스 소켓 서버";
MetaverseSocketServer.desc =
  "멀티플레이 가능한 웹 메타버스 소켓 서버를 제작하고, 동접자 200명 처리";
MetaverseSocketServer.team = "(주)프로젝트그룹 앤더";
MetaverseSocketServer.role = ["backend"];
MetaverseSocketServer.mainSkills = ["uWebSockets.js", "TypeScript"];
MetaverseSocketServer.skills = [
  "Node.js",
  "Artillery",
  "Docker",
  "PM2",
  "Nginx",
  "Ubuntu",
];
MetaverseSocketServer.start = new Date(2022, MONTH(9));
MetaverseSocketServer.end = new Date(2022, MONTH(10));
MetaverseSocketServer.inProgress = false;
MetaverseSocketServer.listOpen = true;
MetaverseSocketServer.list = [
  {
    header: "소켓 서버 스레드 단위 분산 처리",
    body: `backend`,
  },
  {
    header: "DB 이중화 및 백업 서버 제작",
    body: `backend`,
  },
  {
    header:
      "멀티플레이 데이터 소켓 서버 간 전송 위해 TCP 통신 메시지 브로커 제작",
    body: `backend`,
  },
  {
    header: "소켓 서버 병목 현상 절감 위한 데이터 큐 처리",
    body: `backend`,
  },
];
MetaverseSocketServer.name = "metaverse-socket";
MetaverseSocketServer.path = "/metaverse-socket";

export default MetaverseSocketServer;
