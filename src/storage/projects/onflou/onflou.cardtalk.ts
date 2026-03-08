import { Company } from "@common/enums/compony";
import { Role } from "@common/enums/role";
import { Team } from "@common/enums/team";
import { Skill } from "@libs/skill";
import { Issue } from "@models/Issue";
import { ProjectModel } from "@models/ProjectModel";
import Work from "@models/Work";

// 문제-해결-이유-성과
export const onflouCardtalk = new ProjectModel({
  cover: null,
  github: null,
  demoSites: null,
  relations: null,
  path: "/onflou/cardtalk",
  title: "Cardtalk",
  description: ["Cardtalk 프로젝트 백엔드 개발"],
  team: Team.Backend,
  company: Company.Onflou,
  roles: [Role.Backend],
  skills: [
    Skill("typescript"),
    Skill("socketio"),
    Skill("nodejs"),
    Skill("grafana"),
    Skill("prometheus"),
    Skill("k6"),
    Skill("ecr"),
    Skill("docker"),
  ],
  start: new Date(2025, 10),
  end: new Date(2026, 1),
  works: [
    new Work(
      "웹소켓 서버 담당 및 멀티 플레이 카드 게임 개발",
      "실시간 양방향 통신 기반 멀티플레이어 카드 게임 백엔드 담당"
    ),
    new Work(
      "양방향 통신 기반 4종 게임 개발 및 게임별 정책 적용",
      "총 4종의 게임 개발",
      "게임별로 상이한 비즈니스·만료·저장 정책 적용"
    ),
    new Work(
      "게임 만료 정책 타이머 로직 개선",
      "기존 타이머의 반응 지연, 버그, 만료 처리 누락 문제 발견",
      "만료 처리 정확성 향상, 버그 제거, ms 단위 반응으로 개선"
    ),
    new Work(
      "Redis 분산락 및 Lua 스크립트 기반 게임 로직 처리",
      "분산락과 원자성을 고려하여 Lua 스크립트로 게임 비즈니스 로직 처리"
    ),
    new Work(
      "타이머 기반 저장·만료 제어 방식으로 전환",
      "Redis 만료 정책 의존 시 게임 종료 시 API 저장 요청에서 데이터 누락·미감지 이슈",
      "타이머에 저장 처리와 만료 제어를 위임하여 데이터 무결성 확보"
    ),
    new Work("부하 테스트 실행 계획 수립"),
    new Work(
      "모니터링 서버 구조 계획 및 관측성·성능 테스트 아키텍처 설계",
      "모니터링 서버 구조 계획",
      "관측성 및 성능 테스트 아키텍처 설계"
    ),
    new Work(
      "Loki·Grafana 연동을 통한 로그 중앙화",
      "이중화된 운영 서버의 로그 분산 이슈를 Loki와 Grafana 결합으로 중앙화하여 해결"
    ),
    new Work(
      "부하 테스트 결과 분석 및 보고서 작성",
      "매트릭 결과 그래프 분석",
      "결과 보고서 작성"
    ),
  ],
  isSideProject: false,
  issues: [
    new Issue({
      problem: "게임 만료 정책 타이머 로직의 반응 지연, 버그 및 만료 처리 누락",
      processes: [
        "기존 타이머 로직 동작 분석 및 문제점 정리",
        "만료 처리 정확성·반응 속도 요구사항 정의",
        "타이머 로직 재설계 및 ms 단위 제어로 개선",
        "버그 구간 제거 및 검증",
      ],
      solves: [
        "만료 처리 정확성 향상 및 누락 방지",
        "반응 속도를 ms 단위로 개선",
        "타이머 관련 버그 제거로 게임 상태 신뢰도 향상",
      ],
    }),
    new Issue({
      problem: "Redis 만료 정책 의존 시 게임 종료 시 API 저장 요청에서 데이터 누락·미감지",
      processes: [
        "Redis TTL 만료와 저장 API 호출 타이밍 이슈 분석",
        "만료에만 의존하지 않고 저장·만료를 타이머에서 제어하는 방식 설계",
        "타이머에 저장 처리 및 만료 제어 기능 위임 구현",
      ],
      solves: [
        "게임 종료 시 저장 데이터 누락 방지 및 무결성 확보",
        "저장 처리와 만료 제어를 일원화하여 동작 예측 가능",
      ],
    }),
    new Issue({
      problem: "분산 환경에서 게임 비즈니스 로직의 일관성 및 원자성 부족",
      processes: [
        "다중 인스턴스·동시 요청 시 경쟁 조건 분석",
        "Redis 분산락 및 원자적 연산 요구사항 정리",
        "Lua 스크립트로 게임 비즈니스 로직 이전 및 검증",
      ],
      solves: [
        "분산락과 원자성 확보로 게임 상태 일관성 유지",
        "Lua 스크립트 기반 처리로 경쟁 조건 제거",
      ],
    }),
    new Issue({
      problem: "이중화된 운영 서버로 인한 로그 분산 및 추적 어려움",
      processes: [
        "서버별 로그 분산 현황 및 수집 요구사항 정리",
        "Loki 도입 검토 및 Grafana와 연동 구성",
        "로그 수집·쿼리 파이프라인 및 대시보드 구성",
      ],
      solves: [
        "Loki·Grafana 결합으로 로그 중앙화 및 단일 뷰 확보",
        "운영 시 로그 추적·분석 효율 향상",
      ],
    }),
    new Issue({
      problem: "성능·안정성 검증 및 관측성 체계 부재",
      processes: [
        "부하 테스트 실행 계획 수립",
        "모니터링 서버 구조 및 관측성·성능 테스트 아키텍처 설계",
        "부하 테스트 실행 후 매트릭 결과 그래프 분석 및 결과 보고서 작성",
      ],
      solves: [
        "성능 기준 수립 및 부하 구간 파악",
        "관측성 아키텍처로 지속적 모니터링·분석 가능",
      ],
    }),
  ],
  images: null,
});
