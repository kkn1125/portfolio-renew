import { Company } from "@common/enums/compony";
import { Role } from "@common/enums/role";
import { Team } from "@common/enums/team";
import { Skill } from "@libs/skill";
import { Issue } from "@models/Issue";
import { ProjectModel } from "@models/ProjectModel";
import Work from "@models/Work";

export const anderStreaming = new ProjectModel({
  cover: null,
  github: null,
  demoSites: null,
  relations: null,
  path: "/ander/live-streaming",
  title: "라이브커머스 스트리밍 서비스",
  description: [
    "실시간 라이브 방송 송출과 시청자에게 팝업 태그를 통해 구매 링크를 노출시키는 서비스",
    "실시간 라이브 방송 송출 및 시청자 팝업 태그와 구매 링크 노출, 영상 녹화 및 라이브 재생 기능 제작 담당",
  ],
  team: Team.Produce,
  company: Company.Ander,
  roles: [Role.Backend],
  skills: [
    Skill("react"),
    Skill("typescript"),
    Skill("uwebsockets"),
    Skill("nodejs"),
  ],
  start: new Date(2023, 0),
  end: new Date(2023, 2),
  works: [
    new Work(
      "라이브 영상 미디어 송출",
      "미디어 파일 실시간 재생을 위해 영상을 초단위로 분할",
      "분할된 파일을 이용해 부분 편집 용이"
    ),
    new Work(
      "스트리밍 종료 후 영상 변환 및 최적화 시스템 개발",
      "초 단위로 분할된 영상파일을 FFMPEG를 활용해 해상도를 최적화하고, MP4 형식으로 변환 및 저장",
      "재생 호환성을 높이고, 영상 용량 최적화로 저장 비용 절감"
    ),
    new Work(
      "라이브 방송 시간 예약 시스템 구현",
      "예약된 시간에 자동으로 방송이 시작되도록 스케줄러 개발 (Cron, Job Queue 활용)",
      "방송 시작 전 충분한 준비 시간 확보 및 예약 일정 관리 효율성 증가"
    ),
    new Work(
      "방송 송출자 전용 관리 패널 개발",
      "송출자 패널을 일반 사용자 UI와 분리하고 권한 기반 관리 기능 구현",
      "권한 기반 접근 제어로 보안 강화 및 유지보수성 향상"
    ),
    new Work("채팅 채널 분산 및 시청자 입,퇴장 제어 구현"),
    new Work("실시간 라이브 상태 체크"),
    new Work("팝업 태그 제어"),
  ],
  isSideProject: false,
  issues: [
    new Issue({
      problem: "미디어 분할 저장 및 구간 재생",
      processes: [
        "미디어 파일 초단위 저장 및 소켓서버 전송",
        "사용자 원하는 구간 인덱싱 참조하여 미디어 버퍼 데이터 가져와 비디오 트랙에 추가 및 재생",
      ],
      solves: [
        "미디어 분할 저장 및 사용자가 원하는 비디오 구간 재생 완료",
        "미디어를 버퍼 상태로 가공하는 특징을 이해하는데 도움이 됨",
      ],
    }),
  ],
  images: null,
});
