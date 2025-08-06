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
  end: new Date(2025, 7),
  works: [
    new Work(
      "성능 개선 및 API 리팩토링",
      "병목 API의 과도한 쿼리 호출 구조를 개선",
      "API 응답 시간을 최대 90% 이상 단축",
      "DB 부하 감소 및 UX 향상 기여"
    ),
    new Work(
      "브랜치 전략 재정립 및 운영 효율화",
      "병합 충돌 문제 해결 및 전략 문서화",
      "CI/CD 안정화 및 운영 신뢰성 확보"
    ),
    new Work(
      "코드 품질 및 문서화 개선",
      "컨벤션 정립, 코드 포맷 통일, Swagger 문서 보완",
      "협업 속도 및 정확도 향상"
    ),
    new Work(
      "계정 시스템 확장성 확보",
      "Firebase 인증 → 내부 DB 인증 시스템 마이그레이션",
      "무중단 전환 및 보안성 향상"
    ),
    new Work(
      "다중 업무 병행 및 팀장 역할 수행",
      "Hotfix, 기능 개발, 운영 모니터링 등을 백엔드 단독 처리",
      "지속 가능한 운영 및 팀 커뮤니케이션 주도"
    ),
  ],
  isSideProject: false,
  issues: [
    new Issue({
      problem: "API 응답 속도 지연 및 과도한 DB 쿼리 호출",
      processes: [
        "응답 지연 API 및 실행 쿼리 구조 분석",
        "불필요한 반복 쿼리 호출 제거 및 데이터 가공 방식으로 전환",
        "서브쿼리, 조인을 활용한 쿼리 최적화",
        "조회 조건 분석을 통한 인덱싱 적용 및 조회 성능 개선",
        "테스트 코드 보완 및 QA 강화로 기능 정상 작동 검증",
      ],
      solves: [
        "기존 150 ~ 260회 쿼리 호출을 1 ~ 2회로 개선하고, API 리팩터링 후 DB 쿼리 비용 대폭 절감",
        "평균 응답 속도를 1 ~ 3초 -> 43 ~ 300ms로 개선",
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
      problem: "백엔드 단독 담당으로 인한 많은 업무량 소화",
      processes: [
        "업무 우선순위 수립 및 자동화 가능 영역 선별",
        "Hotfix, 유지보수, 신규 개발 간 시간 할당 전략 수립",
        "지속적인 개선점 기록 및 공유로 반복 업무 최소화",
        "기획 및 프론트엔드에 대한 피드백 및 적극적인 소통",
      ],
      solves: [
        "다수의 기존 오류 및 문제 처리로 안정적인 서버 유지",
        "서비스 대응 속도 및 품질 균형 유지",
        "팀장 역할과 실무 개발 간 균형 유지로 팀 내 커뮤니케이션 속도 및 품질 향상",
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
  ],
  images: null,
});
