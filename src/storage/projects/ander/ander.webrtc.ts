import { Company } from "@common/enums/compony";
import { Role } from "@common/enums/role";
import { Team } from "@common/enums/team";
import { Skill } from "@libs/skill";
import { Issue } from "@models/Issue";
import { ProjectModel } from "@models/ProjectModel";
import Work from "@models/Work";

// 경력 근거: e-youth는 기존 화상회의 프로젝트의 후속 작업으로 사용자 확인. 5aaa72a12b, 4d7a756c79, 01db5da21e, e50267474e, eba4517391.
export const anderWebRtc = new ProjectModel({
  cover: null,
  github: null,
  demoSites: null,
  relations: null,
  path: "/ander/webrtc",
  title: "WEBRTC 화상회의 서비스",
  description: [
    "OpenVidu 기반 다자간 화상회의·화면 공유·채팅 서비스",
    "초기 개발 2022.11~12; e-youth 후속 개발·유지보수 2023.02~08",
  ],
  team: Team.Produce,
  company: Company.Ander,
  roles: [Role.Backend, Role.Frontend, Role.Server],
  skills: [Skill("typescript"), Skill("nodejs"), Skill("fastify"), Skill("typeorm"), Skill("react"), Skill("webrtc"), Skill("OpenVidu"), Skill("docker"), Skill("nginx")],
  start: new Date(2022, 10),
  end: new Date(2022, 11),
  works: [
    new Work(
      "연결 상태와 참가자 정보의 불일치 수정",
      "종료된 연결이 회의에 남는 문제를 실제 OpenVidu 연결 목록과 내부 참가자 대조·주기적 ping 확인으로 처리하도록 정리 경로를 추가",
    ),
    new Work(
      "화상회의의 참여·제어 흐름 구현",
      "다자간·일대다 세션 생성·입장·인원 제한과 진행자 제어를 구현하고 화면 공유·채팅·녹화·STT 자막을 연결",
    ),
    new Work(
      "브라우저·서버 실행 환경 문제 대응",
      "Buffer polyfill과 TLS·wss·Docker 설정을 보완하고 자막 인식이 컴포넌트마다 시작되던 초기화 중복을 수정",
    ),
  ],
  // works: [
  //   "미디어 서버 및 화상 회의 위한 소켓 서버 제작",
  //   "STT 활용한 화자 별 자막 생성",
  //   "자막 텍스트 자연어 처리 및 긍, 부정어 도출",
  //   "빌드 자동화",
  // ],
  isSideProject: false,
  images: null,
  issues: [
    new Issue({
      problem: "종료된 화상 연결의 참가자 상태가 회의에 남음",
      processes: [
      "OpenVidu의 실제 연결과 내부 참가자 목록 대조",
      "연결이 없는 참가자와 ping 응답이 없는 참가자를 정리하는 경로 추가",
    ],
      solves: [
      "실제 연결과 내부 회의 상태를 비교·정리하도록 참가자 관리 흐름 보완",
    ],
    }),
  ],
});
