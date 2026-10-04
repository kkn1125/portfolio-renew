import { Company } from "@common/enums/compony";
import { Role } from "@common/enums/role";
import { Team } from "@common/enums/team";
import { Skill } from "@libs/skill";
import { Issue } from "@models/Issue";
import { ProjectModel } from "@models/ProjectModel";
import Work from "@models/Work";

// 문제-해결-이유-성과
// 경력 근거: miraen_cardtalk_socket: 8741f1cbad, 179d330080, 37f35a5c62, 4ca8937797; BE: a0bfe92a60; FE: dab54cc24e, cc1033ae18.
export const onflouCardtalkOps = new ProjectModel({
  cover: null,
  github: null,
  demoSites: null,
  relations: null,
  path: "/onflou/cardtalk-ops",
  title: "미래엔 엠티처 카드톡 운영",
  description: [
    "교육 게임 출시 이후 게임 서버·Spring API·React 화면·관리자 서비스의 개발과 운영 담당",
    "이중화 환경의 배포·장애 대응과 DB 이관, 협력사 변경 요청·일정 조율 병행",
  ],
  team: Team.Backend,
  company: Company.Onflou,
  roles: [Role.Backend, Role.Server],
  skills: [
    Skill("typescript"),
    Skill("socketio"),
    Skill("nodejs"),
    Skill("redis"),
    Skill("java"),
    Skill("springboot"),
    Skill("mybatis"),
    Skill("react"),
    Skill("docker"),
    Skill("mariadb"),
    Skill("jenkins"),
    Skill("linux"),
    Skill("grafana"),
    Skill("k6"),
  ],
  start: new Date(2026, 0),
  end: null,
  works: [
    new Work(
      "게임 종료 결과와 상태 만료 순서 수정",
      "결과 저장 전에 Redis 상태가 만료되는 원인을 추적하고 TTL 처리 위치와 종료 흐름을 변경해 저장에 필요한 상태 수명을 보완",
    ),
    new Work(
      "게임별 데이터 접근 구조 분리",
      "Redis·외부 API 접근을 공통·게임별 Repository로 분리하고, Redis 우선 조회와 데이터가 없을 때의 API 조회 조건을 명시",
    ),
    new Work(
      "콘텐츠 목록 조회 구조 개선",
      "페이지에 해당하는 콘텐츠를 먼저 선정한 뒤 상세 정보를 JOIN하도록 SQL을 재구성하고 조회 결과 매핑을 수정",
    ),
    new Work(
      "환경별 DB 이관과 배포 변경 대응",
      "개발·검증·운영 환경의 스키마·데이터 호환성을 확인해 DB 버전 업그레이드와 순차 이관을 수행하고 CI/CD 전환 일정을 조율",
    ),
    new Work(
      "서비스 전반의 운영과 변경 요청 조율",
      "이중화된 프론트엔드·API·게임 API·관리자 서비스의 배포·장애 대응을 담당하고 콘텐츠·문의·기기 호환성 요구사항을 관련 서비스에 반영",
    ),
  ],
  isSideProject: false,
  issues: [
    new Issue({
      problem: "게임 종료 시 결과 저장에 필요한 Redis 상태가 먼저 만료됨",
      processes: [
      "타이머·결과 전송·상태 정리의 실행 순서 확인",
      "개별 TTL 설정을 공통 처리로 옮기고 종료 흐름 수정",
    ],
      solves: [
      "결과 저장 시점에 필요한 상태 수명과 정리 순서를 보완",
    ],
    }),
    new Issue({
      problem: "게임 로직에 Redis와 외부 API의 데이터 접근이 섞여 변경 범위를 파악하기 어려움",
      processes: [
      "공통·게임별 Repository로 데이터 접근을 분리",
      "Redis 우선 조회와 API 보완 조회 조건을 정리",
    ],
      solves: [
      "게임 진행 로직과 데이터 접근 책임을 구분한 구조로 변경",
    ],
    }),
  ],
  images: null,
});

// 기존 문구 보존(무중단 근거 미확인): "스키마 변경·데이터 호환성 검증 후 무중단 이관 완료"
