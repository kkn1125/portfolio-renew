import ProjectModel from "@/model/ProjectModel";
import { MONTH } from "@/util/global";

const MetaverseSocketServer = new ProjectModel();

MetaverseSocketServer.title = "3D 메타버스 소켓 서버";
MetaverseSocketServer.desc = "멀티플레이 가능한 웹 메타버스 소켓 서버 제작";
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
    header: "특정 인원 초과 시 자동으로 서버를 개설",
    body: `backend`,
  },
];
MetaverseSocketServer.troubleshooting = [
  {
    problem: "소켓서버 자동 증설 문제",
    resolve: [
      "net 모듈을 사용해 메인 소켓 서버를 구성하여 pub/sub 형태로 통신",
    ],
    process: [
      "메인 소켓 서버를 구성하고 자식 소켓 서버를 초기화",
      "자식 소켓 서버의 인원을 메인 소켓 서버가 감시하고 제한 인원의 80%에 도달 시 자식 소켓 서버를 추가로 생성",
      "제한 인원에 도달하면 이후로 들어오는 요청을 미리 증설된 소켓 서버로 연결",
      "메인 소켓 서버에서 자식 소켓 서버로 데이터 공유",
    ],
    result: [
      "멀티 플레이 데이터 부하 분산",
      "관리자 없이 자동으로 소켓서버 증설하여 유지관리 용이",
    ],
  },
  {
    problem: "플레이어 위치 데이터 부하 증가",
    resolve: ["데이터베이스 부하 증가로 이중화 고려"],
    process: [
      "마스터-슬레이브 DB를 나누어 각 서버에 설치 및 연동",
      "마스터에서 변경 기능을 담당하고 슬레이브에서 읽기 기능 수행",
    ],
    result: ["DB 부하 감소"],
  },
];
MetaverseSocketServer.name = "metaverse-socket";
MetaverseSocketServer.path = "/metaverse-socket";

export default MetaverseSocketServer;
