import { Company } from "@common/enums/compony";
import { Role } from "@common/enums/role";
import { Team } from "@common/enums/team";
import { Skill } from "@libs/skill";
import { Issue } from "@models/Issue";
import { ProjectModel } from "@models/ProjectModel";
import Work from "@models/Work";

// 문제-해결-이유-성과
// 경력 근거: backup-wedding-pro-api: 7665d3e14b, 21b6de4e05, 3cc7e0bd16, abe1bfdd07, 03b28d440e.
export const hitWeddingPro = new ProjectModel({
  cover: null,
  github: null,
  demoSites: null,
  relations: null,
  path: "/hit/wedding-pro",
  title: "Wedding Pro CRM",
  description: [
    "고객 상담·계약 관리와 정산·재고 업무를 처리하는 웨딩 CRM·ERP",
    "NestJS·TypeORM 백엔드를 단독 담당하며 기능 개발, 운영 수정과 배포·협업 조율 수행",
  ],
  team: Team.Development,
  company: Company.Hit,
  roles: [Role.Backend, Role.Server],
  skills: [Skill("typescript"), Skill("nest"), Skill("typeorm"), Skill("mysql"), Skill("redis"), Skill("socketio"), Skill("docker"), Skill("awsEc2"), Skill("swagger"), Skill("vitest"), Skill("jest")],
  start: new Date(2025, 2),
  end: new Date(2025, 7),
  works: [
    new Work(
      "재고 수량·금액 역산과 검산 테스트",
      "재고 실사와 입출고 이력을 바탕으로 과거 수량·금액 계산을 보완하고, 저장소 Mock으로 첫 실사와 수량 증가·감소·동일 수량을 검산",
    ),
    new Work(
      "상담부터 계약·정산까지 업무 API 개발",
      "상담·일정·견적·계약·영수증과 협력사·주문 API에서 상태 변경, 담당자와 취소 처리 등 업무 규칙을 구현·유지보수",
    ),
    new Work(
      "인증과 요청 검증 경계 보완",
      "내부 DB 기반 계정 인증과 직원·협력사 토큰을 처리하고 조직별 요청 범위 검증을 추가하고 문자열 false가 잘못 해석되는 입력 변환을 수정",
    ),
    new Work(
      "순환 의존성을 줄이는 서비스 구조 변경",
      "모듈·서비스 상호 참조로 테스트 초기화가 실패하는 경로를 추적하고 수집 로직과 공통 이벤트 접근을 분리해 의존 관계를 정리",
    ),
    new Work(
      "단독 백엔드 운영과 배포·협업 정리",
      "운영 오류·신규 기능의 우선순위를 조율하고 병합 정책·API 문서를 정리하고 메시지 배치·오류 알림과 Excel·빌드 호환성 이슈를 처리",
    ),
  ],
  isSideProject: false,
  issues: [
    new Issue({
      problem: "재고 실사 이후 과거 입출고 수량·금액을 일관된 기준으로 역산할 필요",
      processes: [
      "실사 수량, 입출고 이력과 당시 단가의 계산 흐름 확인",
      "역산 로직과 반올림을 수정하고 수량 증감 사례를 저장소 Mock 테스트로 검산",
    ],
      solves: [
      "재고 계산을 보완하고 경계 사례를 반복 검산할 수 있는 테스트 추가",
    ],
    }),
    new Issue({
      problem: "모듈·서비스의 상호 참조로 테스트 환경의 의존성 초기화가 실패함",
      processes: [
      "모듈 연결과 서비스 의존 경로를 확인",
      "수집 로직과 공통 이벤트 접근을 분리하고 모듈 의존 관계 정리",
    ],
      solves: [
      "초기화를 방해하던 순환 참조 경로를 수정",
    ],
    }),
  ],
  images: null,
});

// 사용자 요청: 측정 근거가 확인되지 않은 성능 수치·무중단 전환의 기존 문구를 보존합니다.
// works[0]
// new Work(
//       "성능 개선 및 API 리팩토링",
//       "병목 API의 과도한 쿼리 호출 구조를 개선",
//       "API 응답 시간을 최대 90% 이상 단축",
//       "DB 부하 감소 및 UX 향상 기여"
//     )
// works[3]
// new Work(
//       "계정 시스템 확장성 확보",
//       "Firebase 인증 → 내부 DB 인증 시스템 마이그레이션",
//       "무중단 전환 및 보안성 향상"
//     )
// issues[0]
// new Issue({
//       problem: "API 응답 속도 지연 및 과도한 DB 쿼리 호출",
//       processes: [
//         "응답 지연 API 및 실행 쿼리 구조 분석",
//         "불필요한 반복 쿼리 호출 제거 및 데이터 가공 방식으로 전환",
//         "서브쿼리, 조인을 활용한 쿼리 최적화",
//         "조회 조건 분석을 통한 인덱싱 적용 및 조회 성능 개선",
//         "테스트 코드 보완 및 QA 강화로 기능 정상 작동 검증",
//       ],
//       solves: [
//         "기존 150 ~ 260회 쿼리 호출을 1 ~ 2회로 개선하고, API 리팩터링 후 DB 쿼리 비용 대폭 절감",
//         "평균 응답 속도를 1 ~ 3초 -> 43 ~ 300ms로 개선",
//         "운영 부하 감소 및 사용자 UX 향상",
//       ],
//     })
// issues[3]
// new Issue({
//       problem: "Firebase 기반 계정 시스템의 확장성 한계",
//       processes: [
//         "기존 Firebase 인증 구조 분석",
//         "사내 클라우드 DB 기반 구조 설계 및 이전 계획 수립",
//         "마이그레이션 스크립트 작성 및 사용자 데이터 이전 테스트",
//         "무중단 서비스 전환 진행",
//       ],
//       solves: [
//         "전 사용자 계정의 안정적 마이그레이션 완료",
//         "내부 DB로의 통합으로 데이터 관리 효율 및 보안성 향상",
//       ],
//     })

// 기존 문구 보존(측정 근거 미확인): "200건 이상 충돌 발생했던 머지 과정 정상화"
