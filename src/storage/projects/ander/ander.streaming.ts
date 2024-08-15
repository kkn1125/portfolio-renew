import { Company } from "@common/enums/compony";
import { Role } from "@common/enums/role";
import { Team } from "@common/enums/team";
import { Skill } from "@libs/skill";
import { Project } from "@models/project";

export const anderStreaming = new Project({
  title: "라이브커머스 스트리밍 서비스",
  description: [
    "실시간 라이브 방송 송출과 시청자에게 팝업 태그를 통해 구매 링크를 노출시키는 서비스",
    "실시간 라이브 방송 송출 및 시청자 팝업 태그와 구매 링크 노출, 영상 녹화 및 라이브 재생 기능 제작 담당",
  ],
  team: Team.Produce,
  company: Company.Ander,
  role: [Role.Backend],
  skills: [
    Skill("react"),
    Skill("typescript"),
    Skill("uwebsockets"),
    Skill("nodejs"),
  ],
  start: new Date(2023, 0),
  end: new Date(2023, 2),
  works: [
    "미디어 파일 스트리밍 위해 파일 분할 재샐 기능 구현",
    "사용자 지정 구간 재생 및 녹화 완료 시 자동 인코딩 후 저장 기능 제작",
    "방송 송출자 관리 패널 구축",
    "스케줄링을 통한 라이브 방송 시간 예약 구현",
    "채팅 채널 분산 및 시청자 입,퇴장 제어 구현",
    "실시간 라이브 상태 체크",
    "팝업 태그 제어",
  ],
});