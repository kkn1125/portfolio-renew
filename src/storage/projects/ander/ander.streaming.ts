import { Company } from "@common/enums/compony";
import { Role } from "@common/enums/role";
import { Team } from "@common/enums/team";
import { Skill } from "@libs/skill";
import { Issue } from "@models/Issue";
import { ProjectModel } from "@models/ProjectModel";
import Work from "@models/Work";

// 경력 근거: live-commerce-service: fb547ddb11, 59d26ca9d6. 전송·재생 방식 실험으로 정리하며 운영 성과 수치는 추가하지 않음.
export const anderStreaming = new ProjectModel({
  cover: null,
  github: null,
  demoSites: null,
  relations: null,
  path: "/ander/live-streaming",
  title: "라이브커머스 스트리밍 서비스",
  description: [
    "실시간 영상·채팅·상품 링크를 제공하는 라이브커머스 프로토타입과 전송·재생 방식 연구",
    "초기 개발 2023.01~03; 전송·재생 방식 후속 작업 2023.03~08",
  ],
  team: Team.Produce,
  company: Company.Ander,
  roles: [Role.Backend, Role.Frontend],
  skills: [Skill("typescript"), Skill("nodejs"), Skill("uwebsockets"), Skill("react"), Skill("FFmpeg"), Skill("HLS"), Skill("WebRTC"), Skill("protobuf")],
  start: new Date(2023, 0),
  end: new Date(2023, 2),
  works: [
    new Work(
      "분할 영상의 전송·재생 흐름 개발",
      "WebSocket 미디어 전송과 버퍼 결합·MediaSource 재생을 구현·수정하고 FFmpeg 변환·HLS 재생을 비교하고 방송 예약·채팅·상품 링크 화면을 연결",
    ),
    new Work(
      "파일·DB 미디어 저장 방식 비교",
      "버퍼를 문자열로 변환해 DB에 저장·조회한 뒤 복원해 재생하는 방식을 실험했으나 메모리 사용의 큰 개선은 확인하지 못함",
    ),
  ],
  isSideProject: false,
  issues: [
    new Issue({
      problem: "영상 데이터를 파일 외 DB에 저장·조회하는 방식의 특성을 검토할 필요",
      processes: [
      "버퍼를 문자열로 변환해 DB에 저장하고 다시 복원해 재생",
      "파일 저장 방식과 메모리 사용 측면의 차이 검토",
    ],
      solves: [
      "DB 저장·복원 프로토타입을 구현했으나 메모리 효율의 큰 개선은 확인하지 못함",
    ],
    }),
  ],
  images: null,
});
