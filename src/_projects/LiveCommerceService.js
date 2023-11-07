import ProjectModel from "@/model/ProjectModel";
import { MONTH } from "@/util/global";

const LiveCommerceService = new ProjectModel();

LiveCommerceService.title = "라이브커머스 스트리밍 서비스";
LiveCommerceService.desc =
  "실시간으로 라이브 방송을 송출하고 시청자에게 팝업 태그를 올려 구매 링크를 노출시키며, 영상 녹화 및 스트리밍 기술을 이용한 부분 재생 제작";
LiveCommerceService.team = "(주)프로젝트그룹 앤더";
LiveCommerceService.role = ["frontend", "backend"];
LiveCommerceService.mainSkills = ["React", "TypeScript"];
LiveCommerceService.skills = ["uWebSockets.js", "Node.js"];
LiveCommerceService.start = new Date(2023, MONTH(1));
LiveCommerceService.end = new Date(2023, MONTH(3));
LiveCommerceService.inProgress = false;
LiveCommerceService.listOpen = true;
LiveCommerceService.list = [
  {
    header: "미디어 파일 스트리밍을 위해 파일 분할 및 재생 기능 구현",
    body: `frontend, backend`,
  },
  {
    header: "원하는 구간 재생 및 최종 녹화본 결합 인코딩",
    body: `frontend, backend`,
  },
  {
    header: "방송 송출자 관리 패널 구축",
    body: `frontend, backend`,
  },
  {
    header: "스케줄링을 활용한 라이브 방송 시간 설정",
    body: `frontend, backend`,
  },
  {
    header: "채팅 채널 분산 및 시청자 입/퇴장 제어 기능 구현",
    body: `frontend, backend`,
  },
  {
    header: "실시간 라이브 상태 체크 및 팝업 태그 제어 기능 구현",
    body: `frontend, backend`,
  },
  {
    header:
      "사내 프로젝트 내 임베딩 및 postMessage를 이용한 임베딩 페이지와 통신 처리",
    body: `frontend, backend`,
  },
];
LiveCommerceService.name = "live-commerce";
LiveCommerceService.path = "/live-commerce";

export default LiveCommerceService;
