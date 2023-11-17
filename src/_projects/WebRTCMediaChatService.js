import ProjectModel from "@/model/ProjectModel";
import { MONTH } from "@/util/global";

const WebRTCMediaChatService = new ProjectModel();

WebRTCMediaChatService.title = "WebRTC 화상회의 서비스";
WebRTCMediaChatService.desc =
  "N:M 화상 공유, 화면 공유, 채팅 기능을 사용할 수 있는 서비스. 사내 결정으로 프로젝트 중단.";
WebRTCMediaChatService.team = "(주)프로젝트그룹 앤더";
WebRTCMediaChatService.role = ["frontend", "backend"];
WebRTCMediaChatService.mainSkills = ["WebRTC", "React", "OpenVidu"];
WebRTCMediaChatService.skills = ["TypeScript", "Docker", "Nginx", "Express.js"];
WebRTCMediaChatService.start = new Date(2022, MONTH(11));
WebRTCMediaChatService.end = new Date(2022, MONTH(12));
WebRTCMediaChatService.inProgress = false;
WebRTCMediaChatService.listOpen = true;
WebRTCMediaChatService.list = [
  {
    header: "미디어 서버 제작 및 화상 회의용 소켓 서버 제작",
    body: "backend",
  },
  {
    header: "빌드 자동화를 위해 쉘 스크립트 작성",
    body: "backend",
  },
  {
    header: "AWS EC2 프리티어 사양 기준 동접자 10명 연결",
    body: "backend",
  },
  {
    header: "사내 서비스 iframe 임베딩하여 서비스 공유",
    body: "frontend",
  },
  {
    header: "STT를 활용한 화자 별 자막 생성",
    body: "frontend",
  },
  {
    header: "텍스트화된 자막 자연어 처리로 긍, 부정어 도출",
    body: "frontend, ai",
  },
];
WebRTCMediaChatService.troubleshooting = [
  {
    problem: "배포 자동화에서 로컬과 실서버의 운영체제 차이",
    resolve: [
      "로컬과 실서버에서 실행하는 쉘 스크립트를 별도로 작성",
      "자동화를 위해 깃허브 웹훅과 젠킨스 사용",
    ],
    process: [
      "로컬의 운영체제인 윈도우 기준으로 도커 이미지를 빌드하고 실서버로 전송하는 쉘 스크립트 작성",
      "실서버에서 도커 이미지를 가져와 실행하는 쉘 스크립트 작성",
      "젠킨스로 깃허브 푸시 후 자동으로 배포되도록 파이프라인 설정",
    ],
    result: ["배포 자동화하여 개발 시간 절약", "프로젝트 관리 용이"],
  },
];
WebRTCMediaChatService.name = "webrtc";
WebRTCMediaChatService.path = "/webrtc";

export default WebRTCMediaChatService;
