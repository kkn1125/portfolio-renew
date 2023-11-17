import ProjectModel from "@/model/ProjectModel";
import { FORM_URL, MONTH } from "@/util/global";

const LiveCommerceService = new ProjectModel();

LiveCommerceService.important = true;
LiveCommerceService.title = "라이브커머스 스트리밍 서비스";
LiveCommerceService.desc =
  "실시간으로 라이브 방송을 송출하고 시청자에게 팝업 태그를 올려 구매 링크를 노출시키며, 영상 녹화 및 스트리밍 기술을 이용한 부분 재생 제작. 사내 결정으로 프로젝트 중단.";
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
    body: `backend`,
  },
  {
    header: "원하는 구간 재생 및 최종 녹화본 결합 인코딩",
    body: `backend`,
  },
  {
    header: "방송 송출자 관리 패널 구축",
    body: `frontend`,
  },
  {
    header: "스케줄링을 활용한 라이브 방송 시간 설정",
    body: `backend`,
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
    body: `frontend`,
  },
];
LiveCommerceService.troubleshooting = [
  {
    problem: "미디어 분할 시 원하는 구간 재생",
    resolve: [
      "1초 단위로 저장되는 미디어를 파일로 저장하지 않고 버퍼상태로 소켓서버에서 배열 변수로 관리",
    ],
    process: [
      "사용자가 원하는 구간을 배열 인덱싱으로 가져와 미디어 버퍼 데이터를 비디오 트랙에 추가하여 재생",
    ],
    result: [
      "원하는 재생 구간의 미디어를 비교적 자유롭게 가공 가능",
      "미디어 파일을 저장하고 가져오는 IO 시간을 절약",
    ],
  },
];
// LiveCommerceService.links = [FORM_URL("demo", "")];
LiveCommerceService.name = "live-commerce";
LiveCommerceService.path = "/live-commerce";

export default LiveCommerceService;
