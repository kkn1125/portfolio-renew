import { Company } from "@common/enums/compony";
import { Role } from "@common/enums/role";
import { Team } from "@common/enums/team";
import { Skill } from "@libs/skill";
import { Issue } from "@models/Issue";
import { ProjectModel } from "@models/ProjectModel";
import Work from "@models/Work";
// 문제-해결-이유-성과
export const hitWeddingPro = new ProjectModel({
  cover: null,
  github: null,
  demoSites: null,
  relations: null,
  path: "/hit/wedding-pro",
  title: "Wedding Pro CRM",
  description: ["Wedding Pro 프로젝트 백엔드 개발 및 유지보수"],
  team: Team.Development,
  company: Company.Hit,
  roles: [Role.Backend, Role.Server],
  skills: [
    Skill("typescript"),
    Skill("nest"),
    Skill("mysql"),
    Skill("awsEc2"),
    Skill("docker"),
    Skill("typeorm"),
    Skill("swagger"),
  ],
  start: new Date(2025, 2),
  end: null,
  works: [
    new Work(
      "API 성능 개선 및 DB 쿼리 최적화",
      "응답 시간 1~3초 소요되던 10개 이상 API 분석 및 병목 구간 파악",
      "기본 150~260회 발생하던 DB 쿼리 호출 → 1회로 줄인 API 다수 리팩터링",
      "서브쿼리 및 조인을 활용해 데이터 조회 구조 개선",
      "불필요한 DB 호출 제거 후 프로그램 내부 데이터 가공 방식으로 전환",
      "결과적으로 API 응답 시간 평균 43~300ms 수준으로 단축",
      "기능 유지 보장을 위해 테스트 코드 및 QA 프로세스 강화"
    ),
    new Work(
      "깃 플로우 문제 해결",
      "운영 브랜치 머지 시 200건 이상 발생하던 충돌 문제 해결",
      "버전별 브랜치 전략 재수립 및 병합 전략 개선",
      "충돌 없는 브랜치 관리 프로세스 확립",
      "머지 자동화를 고려한 정책 문서화 및 적용"
    ),
    new Work(
      "코드 컨벤션 정의 및 리팩터링",
      "let 남용 문제 해결 → const 전환으로 타입 추론 및 추적성 향상",
      "전반적인 코드 포맷 통일 (들여쓰기, 줄바꿈, 띄어쓰기 등)",
      "도메인과 무관한 소스 구조 개선으로 유지보수성 향상",
      "일관되지 않은 네이밍 규칙 정비 및 컨벤션 문서화",
      "비동기 함수 내 예외 처리 누락 부분 일괄 개선으로 500에러 급감"
    ),
    new Work(
      "API 문서화 개선",
      "Swagger 문서에 누락된 nullable 및 응답 스펙 보완",
      "프론트엔드와의 커뮤니케이션 정확도 및 속도 향상",
      "API 사용 가이드라인 정리 및 공유"
    ),
    new Work(
      "계정 시스템 마이그레이션",
      "Firebase 기반 계정 시스템 → 사내 클라우드 DB로 이전 설계",
      "전체 사용자 계정 안정적으로 마이그레이션 완료",
      "기존 인증 로직을 새로운 구조에 맞게 무중단 전환"
    ),
    new Work(
      "다중 업무 병행 처리",
      "하루 평균 7건 이상의 Hotfix, 유지보수, 신규 기능 개발 병행 처리",
      "실 서비스 이슈의 즉각적인 대응과 기능 개선",
      "백엔드 단독 담당자로 팀장 역할 수행"
    ),
  ],
  isSideProject: false,
  issues: [
    new Issue({
      problem: "API 응답 속도 지연 및 과도한 DB 쿼리 호출",
      processes: [
        "응답 지연 API 분석 및 실행 쿼리 수 모니터링",
        "로직 내 Promise.all 사용 구조 분석",
        "불필요한 반복 쿼리 호출 제거 및 데이터 가공 방식으로 전환",
        "서브쿼리, 조인을 활용한 쿼리 최적화",
        "카디너리티 및 조회 조건 분석을 통한 인덱싱 처리로 조회 성능 최적화",
        "테스트 코드 보완 및 QA 강화로 기능 정상 작동 검증",
      ],
      solves: [
        "기존 150~260회 쿼리 호출 API를 1회 호출로 리팩터링",
        "평균 응답 속도를 1~3초 → 43~300ms로 개선",
        "운영 부하 감소 및 사용자 UX 향상",
      ],
    }),
    new Issue({
      problem: "브랜치 충돌로 인한 운영 배포 지연",
      processes: [
        "버전별 브랜치 히스토리 및 병합 전략 분석",
        "충돌 발생 구간 파악 및 정리",
        "머지 정책 재수립 및 문서화",
        "브랜치 전략 교육 및 적용",
      ],
      solves: [
        "200건 이상 충돌 발생했던 머지 과정 정상화",
        "운영 배포 시 충돌 없이 병합 가능하도록 브랜치 전략 정립",
        "팀 전체 브랜치 관리 신뢰도 향상",
      ],
    }),
    new Issue({
      problem: "코드 품질 저하 및 유지보수 난이도 상승",
      processes: [
        "코드 전체 리뷰를 통한 let/const, 인덴트, 네이밍, 구조 분석",
        "도메인 중심 소스 재배치 및 컨벤션 정의",
        "전 파일 포맷 통일 및 자동화 툴 적용 (Prettier 등)",
        "예외 처리 누락 구간 분석 및 보완",
      ],
      solves: [
        "코드 가독성 및 유지보수성 향상",
        "에러 발생률 감소 및 디버깅 효율 개선",
        "팀 내 컨벤션 통일로 신규 인력 온보딩 효율 증대",
      ],
    }),
    new Issue({
      problem: "Swagger 문서 누락 및 스펙 불일치",
      processes: [
        "API 응답 예시와 Swagger 문서 비교",
        "nullable, 타입, 예외 응답 누락 항목 정리",
        "Swagger 문서 보완 및 가이드 문서 작성",
      ],
      solves: [
        "문서 정확도 개선으로 프론트엔드 개발 속도 향상",
        "API 사용 혼동 감소 및 커뮤니케이션 오류 제거",
      ],
    }),
    new Issue({
      problem: "Firebase 기반 계정 시스템의 확장성 한계",
      processes: [
        "기존 Firebase 인증 구조 분석",
        "사내 클라우드 DB 기반 구조 설계 및 이전 계획 수립",
        "마이그레이션 스크립트 작성 및 사용자 데이터 이전 테스트",
        "무중단 서비스 전환 진행",
      ],
      solves: [
        "전 사용자 계정의 안정적 마이그레이션 완료",
        "내부 DB로의 통합으로 데이터 관리 효율 및 보안성 향상",
      ],
    }),
    new Issue({
      problem: "백엔드 단독 담당자의 과도한 업무량",
      processes: [
        "업무 우선순위 수립 및 자동화 가능 영역 선별",
        "Hotfix, 유지보수, 신규 개발 간 시간 할당 전략 수립",
        "지속적인 개선점 기록 및 공유로 반복 업무 최소화",
      ],
      solves: [
        "하루 평균 7건 이상의 안정적 처리 유지",
        "서비스 대응 속도 및 품질 균형 유지",
        "팀장 역할과 실무 개발 간 균형 유지",
      ],
    }),
  ],
  images: null,
});
