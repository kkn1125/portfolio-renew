import { Company } from "@common/enums/compony";
import { Role } from "@common/enums/role";
import { Team } from "@common/enums/team";
import { getImage, getResource } from "@libs/getResource";
import { Skill } from "@libs/skill";
import { ProjectModel } from "@models/ProjectModel";
import Work from "@models/Work";
import { sideSnapPoll } from "./side.snappoll";

export const sideNuvia = new ProjectModel({
  cover: getResource("nuvia", "nuvia01.png"),
  github: "https://github.com/team-nuvia/project-nuvia",
  demoSites: ["https://app.nuvia.kro.kr"],
  relations: [sideSnapPoll],
  path: "/side/nuvia",
  isMainOrder: 1,
  title: "Project Nuvia",
  description: [
    "누비아는 SnapPoll의 확장 프로젝트로, 설문 생성·참여·분석까지 포함한 실서비스형 SaaS 설문 플랫폼(MVP).",
    "권한(Role)과 구독 플랜(Plan)에 기반한 기능 제한, 게스트 참여, 결과 시각화(그래프)까지 일관된 사용자 흐름 제공.",
  ],
  company: Company.Side,
  team: Team.Personal,
  roles: [Role.Backend, Role.Frontend],
  skills: [
    Skill("typescript"),
    Skill("nest"),
    Skill("typeorm"),
    Skill("mysql"),
    Skill("nextjs"),
    Skill("react"),
    Skill("docker"),
    Skill("awsEc2"),
    Skill("awsRds"),
    Skill("zustand"),
    // 필요 시: Skill("redis"), Skill("nginx"), Skill("chartjs"), Skill("githubActions") 등 추가
  ],
  start: new Date(2025, 4), // 2025-05
  end: null,

  // ✅ 실제 수행 작업(Work)
  works: [
    // 🎯 기획 및 설계
    new Work(
      "서비스 구조 기획 및 설문 흐름 설계",
      "데이터 모델 및 관계형 스키마 설계",
      "구독 플랜 정책 정의 및 기능 제한 규칙 설정",
      "도메인 기반 프로젝트 구조 설계"
    ),

    // ⚙️ 백엔드
    new Work(
      "NestJS + TypeORM 기반 API 서버 구현",
      "JWT 인증 및 RoleGuard, PlanGuard 권한 시스템 구축",
      "게스트 참여 토큰 기반 설문 응답 흐름 설계",
      "마케팅 / 알림 메일 발송 스케줄러 구현"
    ),

    // 💻 프론트엔드
    new Work(
      "Next.js + React 기반 클라이언트 UI 개발",
      "Zustand + React Query 상태관리 구조 구성",
      "설문 생성 / 응답 / 결과 그래프 컴포넌트 제작",
      "SEO 및 반응형 UI 최적화"
    ),

    // ☁️ 인프라 및 배포
    new Work(
      "Docker 기반 AWS EC2 서버 배포",
      "GitHub Actions 연동으로 CI/CD 자동화 구축",
      "AWS OIDC 연동으로 배포 자동화 구축",
      "운영 환경별 빌드 및 로그 구조 설계"
    ),
  ],

  isSideProject: true,

  // 🧩 이슈 & 해결 (Problem → Process → Solve)
  issues: [
    {
      problem: "역할(Role)에 따른 API 접근 제어 부재",
      processes: [
        "쿠키 기반 JWT 인증 후 사용자 역할 조회 필요",
        "도메인별(설문/조직/백오피스) 접근 제어 일관성 확보",
      ],
      solves: [
        "Roles 데코레이터 및 RoleGuard 구현으로 역할 기반 접근 통제",
        "핵심 API 엔드포인트에 Guard 일괄 적용 및 테스트 케이스 정비",
      ],
    },
    {
      problem: "구독 등급에 따른 기능 제한(생성/응답/추가기능) 규칙 미비",
      processes: [
        "플랜별 허용 범위(생성 개수, 응답자 수, 부가 기능) 정의",
        "요청 진입 시점에서 등급 검증 및 메시지/가이드 표준화",
      ],
      solves: [
        "플랜 정책 상수화 및 PlanGuard/PlanValidate 데코레이터 구현",
        "설문·투표 리소스별 생성/응답 제한과 추가 기능 제어 일원화",
      ],
    },
    {
      problem: "비회원(게스트) 참여 흐름에서 인증/세션 식별 이슈",
      processes: [
        "로그인 없이도 설문 참여 가능해야 함",
        "재진입/중단·재개 시 동일 세션 인식 필요",
      ],
      solves: [
        "게스트 세션 토큰 생성 및 일회성(만료 포함) 쿠키 전략 도입",
        "게스트 응답 진행상태 복구 로직 구현",
      ],
    },
    {
      problem: "결과 통계·그래프 생성 시 N+1 및 응답 지연",
      processes: [
        "질문/보기/응답 다중 조인에서 불필요한 반복 쿼리 발생",
        "대시보드/그래프 페이지 로딩 속도 저하",
      ],
      solves: [
        "TypeORM QueryBuilder 최적화 및 필요 필드만 Select",
        "집계 쿼리 사전 계산/캐싱 전략 도입(페이지 체감 속도 개선)",
      ],
    },
    {
      problem: "SPA 특성으로 인한 SEO/OG 메타 정보 노출 누락",
      processes: [
        "공유 링크·소셜 미리보기에서 썸네일/설명 누락",
        "검색 노출 품질 저하",
      ],
      solves: [
        "Next.js SSR 기반 메타 태그 주입 및 sitemap 자동 생성",
        "공유용 OG 이미지/타이틀 템플릿 표준화",
      ],
    },
  ],

  // 🖼 이미지: 캡처 가이드(파일명은 placeholder, 실제 촬영본으로 교체)
  images: [
    // 1) 회원 대시보드
    getImage(
      "nuvia",
      "dashboard_main.png",
      "회원 대시보드: 진행 중 설문/최근 응답/주요 지표 요약"
    ),
    // 2) 설문 생성(스텝 폼)
    getImage(
      "nuvia",
      "survey_create_step.png",
      "설문 생성 스텝 UI: 문항 유형·조건"
    ),
    getImage(
      "nuvia",
      "survey_create_step_2.png",
      "설문 생성 스텝 UI: 문항 등록 및 작성"
    ),
    getImage(
      "nuvia",
      "survey_create_step_3.png",
      "설문 생성 스텝 UI: 미리보기"
    ),
    getImage(
      "nuvia",
      "survey_create_step_4.png",
      "설문 생성 스텝 UI: 저장"
    ),
    // 3) 게스트 참여
    getImage(
      "nuvia",
      "guest_survey_flow.png",
      "게스트 설문 참여: 로그인 없이 응답 가능한 흐름"
    ),
    getImage(
      "nuvia",
      "guest_survey_flow_2.png",
      "게스트 설문 참여: 로그인 없이 응답 가능한 흐름"
    ),
    getImage(
      "nuvia",
      "guest_survey_flow_3.png",
      "게스트 설문 참여: 로그인 없이 응답 가능한 흐름"
    ),
    getImage(
      "nuvia",
      "guest_survey_flow_4.png",
      "게스트 설문 참여: 로그인 없이 응답 가능한 흐름"
    ),
    // 4) 결과 분석(비교 분석)
    getImage(
      "nuvia",
      "analysis_compare.png",
      "결과 분석: 그래프와 통계 지표"
    ),
    // 5) 구독 플랜 제한 UI
    getImage(
      "nuvia",
      "plan_limiter.png",
      "구독 플랜별 생성/응답 제한 및 업그레이드 가이드"
    ),
    // 6) 백오피스(관리자)
    // getImage(
    //   "nuvia",
    //   "admin_backoffice.png",
    //   "백오피스: 회원·구독·설문 데이터 통합 관리"
    // ),
    // 7) 배포/인프라
    getImage(
      "nuvia",
      "infra_cicd.png",
      "배포 파이프라인: GitHub Actions → Docker → AWS EC2"
    ),
    // 8) SEO/반응형
    getImage(
      "nuvia",
      "seo_responsive.png",
      "SEO/OG·Sitemap 적용 및 모바일 반응형 화면"
    ),
  ],
});
