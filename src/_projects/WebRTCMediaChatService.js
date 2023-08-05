import ProjectModel from "../model/ProjectModel";
import { MONTH } from "../util/global";

const WebRTCMediaChatService = new ProjectModel();

WebRTCMediaChatService.title = "WebRTC 화상회의 서비스";
WebRTCMediaChatService.desc = "N:M 화상회의, 채팅 가능한 RTC 서비스 제작";
WebRTCMediaChatService.team = "(주)프로젝트그룹 앤더";
WebRTCMediaChatService.role = ["frontend", "backend"];
WebRTCMediaChatService.start = new Date(2022, MONTH(10));
WebRTCMediaChatService.end = new Date(2022, MONTH(12));
WebRTCMediaChatService.inProgress = false;
WebRTCMediaChatService.listOpen = true;
WebRTCMediaChatService.list = [
  {
    header: "미디어 서버 제작 및 화상 회의용 소켓 서버 제작",
    body: `frontend, backend`,
  },
  {
    header: "최대 동접자 10명 연결 최적화",
    body: `frontend, backend`,
  },
  {
    header: "AWS 테스트 서버 빌드 배포 및 QA",
    body: `frontend, backend`,
  },
  {
    header: "빌드 자동화를 위해 쉘 스크립트 작성 및 자동 빌드 배포 적용",
    body: `frontend, backend`,
  },
];

export default WebRTCMediaChatService;
